<template>
    <div :class="$style.searchInfo">
        <h3>热门搜索</h3>
        <ul :class="$style.hotList" @click="searchData">
            <li v-for="item in items" :key="item.text">{{item.text}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        items: {
            type: Array,
            default () {
                return []
            }
        }
    },
    methods: {
        searchData (e) {
            let target = e.target;
            if(target.nodeName === 'LI') {
                this.$emit('searchdata', target.innerHTML)
            }
        }
    }
}
</script>
<style lang="scss" module>
    @import '../../style/layout.scss';
    .searchInfo {
        padding: 30px 20px 0;
        h3 {
            font-size: 24px;
            line-height: 24px;
            color: #666;
        }
        .hotList {
            @include flex($direction: row);
            margin-top: 20px;
            li {
                height: 64px;
                margin: 0 16px 16px 0;
                padding: 0 28px;
                border: 1px solid #ccc;
                border-radius: 64px;
                font-size: 28px;
                color: #333;
                line-height: 64px;

            }
        }
    }
</style>
