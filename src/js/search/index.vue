<template>
    <div :class="$style.container">
        <div :class="$style.fix">
            <cm-header></cm-header>
            <cm-navbar></cm-navbar>
        </div>
        <cm-search 
            :class="$style.search" 
            @transferdata="searchMusic"
            @emptycontent="emptySearchContent"
            @getsearchdata="dealSearchData"
            :val="msg"
        ></cm-search>
        <div v-show="!isSearch">
            <div v-show="!boolMsg">
                <cm-hot 
                    :items="items"
                    @searchdata="getHotSearchData"
                ></cm-hot>
                <cm-history 
                    :historyList="historyList"
                    @deletehistory="deleteHistory"
                ></cm-history>
            </div>      
            <cm-show 
                v-show="boolMsg" 
                :msg="msg"
                :lists="list"
            ></cm-show>
        </div>       
        <cm-list-search 
            v-show="isSearch" 
            :datas="searchData"
        ></cm-list-search>
        <div :class="$style.bottom" v-if="isToBottom">已经到底部了...</div>
    </div>
</template>

<script>
import cmHeader from '../public/header.vue';
import cmNavbar from '../public/navbar.vue';
import cmSearch from './search.vue';
import cmHot from './hot.vue';
import cmShow from './showlist.vue';
import cmHistory from './history.vue';
import cmListSearch from './listSearch.vue';
import axios from 'axios';
export default {
    components: {
        cmHeader,
        cmNavbar,
        cmSearch,
        cmHot,
        cmShow,
        cmHistory,
        cmListSearch
    },
    data () {
        return {
            items: [{
                text: 'Charlie Puth'
            }, {
                text: '放弹少年团'
            }, {
                text: '徐秉龙'
            }, {
                text: '我们'
            }, {
                text: '溯游从歌'
            }, {
                text: '李志'
            }, {
                text: '没有理由'
            }, {
                text: '渺小却伟大'
            }, {
                text: '谢春花'
            }, {
                text: '炎亚纶'
            }],
            msg: '',
            historyList: [],
            list: [],
            timer: null,
            searchData: [],
            isSearch: false,
            start: 0,
            maxH: 0,
            clientH: 0,
            isUpdated: true,
            isToBottom: false,
            count: 8888
        }
    },
    methods: {
        searchMusic (val) {
            this.msg = val;
        },
        // 联想搜索，用easy mock接口测试数据
        getMindSearchData (val) {
            axios.get('https://www.easy-mock.com/mock/5af3a211656ea22f99b56034/clous-music/search', {
                    params: {
                        value: val
                    }
                })
                .then((res) => {
                   this.list = res.data.result;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        // 清空与搜索相关的信息
        emptySearchContent () {
            this.msg = '';
            this.list = [];
            this.isSearch = false;
            this.searchData = [];
            this.isToBottom = false;
            this.start = 0;
            this.count = 9999;
        },
        dealSearchData () {
            if(this.msg !== '') {
                this.getSearchData();
                this.pushHistory(this.msg); 
            }
             
        },
        // 同样用easy mock 模拟数据，返回与搜索内容匹配的数据
        getSearchData () {
            if(this.start < this.count) {
                axios.get('https://www.easy-mock.com/mock/5af3a211656ea22f99b56034/clous-music/get', {
                    params: {
                        keyword: this.msg
                    }
                    })
                    .then( (res) => {
                        let result = res.data.result;
                        let over = this.start + 10;
                        this.count = result.count;
                        this.isSearch = true;
                        over = Math.min(over, result.count);
                        this.searchData.push(...result.song.slice(this.start, over));
                        this.start = over;
                    })
                    .catch( (error) => {
                        console.log(error);
                    })
            } else {
                this.isToBottom = true;
            }  
        },
        // 点击热门搜索，发送请求
        getHotSearchData (val) {
            this.msg = val;
            this.pushHistory(val);
            this.getSearchData();
        },
        pushHistory (val) {
            // 判断历史记录数组中是否有val,没有则添加
            if(!this.historyList.find( ele => ele.value === val)) {
                this.historyList.unshift({
                    value: val,
                    id: Symbol(val)
                })
            }     
        },
        // 删除历史记录中对应的项
        deleteHistory (index) {
            this.historyList.splice(index, 1);
        }
    },
    computed: {
        boolMsg () {
            return Boolean(this.msg);
        }
    },
    watch: {
        msg (val) {
            // 防抖搜索
            clearTimeout(this.timer);
            this.timer = setTimeout( () => {
                val = String(val).trim();
                this.getMindSearchData (val); 
            }, 500);
        }
    },
    // create 钩子函数， 读取浏览器offsetHeight, clientHeight
    created () {
        let elements = document.documentElement;
        this.maxH = elements.offsetHeight;
        this.clientH = elements.clientHeight;
    },
    mounted () {  
        let self = this;   
        let startTime = +new Date();
        let endTime;
        // touchmove事件 实现懒加载,移动到底部的时候加载更多数据
        document.addEventListener('touchmove', function (e) {
            if(Math.abs(document.documentElement.scrollTop + self.clientH - self.maxH) <= 10 && self.isUpdated && self.isSearch) {
                self.isUpdated = false;
                // 节流 至少间隔2000ms
                endTime = +new Date();
                if(endTime - startTime >= 2000) {
                    self.getSearchData();
                    startTime = endTime;
                }             
            }
        })
    },
    // updated 钩子函数，更新完成之后，才能再次获取数据
    updated () {
        if(this.isSearch) {
            this.isUpdated = true;
            this.maxH = document.documentElement.offsetHeight;
        }       
    }
}
</script>

<style lang="scss" module>
    .container {
        .fix {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 2;
            width: 100%;
            background-color: #fff;
        }
        .search {
            margin-top: 208px;
        }
        .bottom {
            height: 80px;
            line-height: 80px;
            text-align: center;
            color: #333;
            font-size: 28px;
            background: #eee;
        }
    }
</style>


