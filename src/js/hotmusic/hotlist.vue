<template>
    <div>
        <cm-list :items="items" :class="$style.list"></cm-list>
        <div :class="$style.more">查看完整榜单 ></div>
    </div>
    
</template>

<script>
import cmList from '../base/list.vue';
export default {
    components: {
        cmList
    },
    data () {
        return {
            items: [{
                name: '纸短情长（完整版）',
                source: '',
                rank: '01',
                info: '烟把儿-纸短情长（完整版）',
                quality: false 
            }, {
                name: '我们',
                source: '电影《后来的我们》主题曲',
                rank: '02',
                info: '徐秉龙-双子',
                quality: false 
            }, {
                name: '戒烟',
                source: '',
                rank: '03',
                info: '李荣浩-戒烟',
                quality: false 
            }, {
                name: '后来的我们',
                source: '电影《后来的我们》片名曲',
                rank: '04',
                info: '五月天-后来的我们',
                quality: true 
            }, {
                name: '不仅仅是喜欢',
                source: '',
                rank: '05',
                info: '萧全 / 孙语赛-不仅仅是喜欢',
                quality: true 
            }, {
                name: '后来',
                source: '',
                rank: '06',
                info: '刘若英-我等你',
                quality: true 
            }, {
                name: '离人愁',
                source: '',
                rank: '07',
                info: '李袁杰-离人愁',
                quality: true 
            }, {
                name: '春娇与志明',
                source: '',
                rank: '08',
                info: '街道办 / 欧阳耀莹-春娇与志明',
                quality: true 
            }, {
                name: '烟火里的尘埃',
                source: '',
                rank: '09',
                info: '华晨宇-烟火里的尘埃',
                quality: true 
            }, {
                name: '爱了很久的朋友',
                souce: '电影《后来的我们》插曲',
                rank: '10',
                info: 'Troye Sivan-Bloom',
                quality: false 
            }, {
                name: '空空如也',
                souce: '',
                rank: '11',
                info: '任然-空空如也',
                quality: true 
            }, {
                name: '白羊',
                souce: '',
                rank: '12',
                info: '徐秉龙 / 沈以诚-白羊',
                quality: true 
            }, {
                name: '喜欢',
                souce: '',
                rank: '13',
                info: '阿肆-喜欢',
                quality: true 
            }, {
                name: '你，好不好？',
                souce: '电视剧《遗憾拼图》片尾曲',
                rank: '14',
                info: '周兴哲-爱，教会我们的事',
                quality: true 
            }, {
                name: '醉赤壁',
                souce: '网游《赤壁Online》主题曲',
                rank: '15',
                info: '林俊杰-JJ陆',
                quality: true 
            }, {
                name: '最美的期待',
                souce: '',
                rank: '16',
                info: '周笔畅-最美的期待',
                quality: true 
            }, {
                name: '往后余生原创(demo)',
                souce: '',
                rank: '17',
                info: '马良-往后余生',
                quality: false 
            }, {
                name: 'PLANET',
                souce: '',
                rank: '18',
                info: 'ラムジ-3ラムジ',
                quality: true 
            }, {
                name: 'Something Just Like This',
                souce: '',
                rank: '19',
                info: 'The Chainsmokers / Coldplay-Something Just Like This',
                quality: true 
            }, {
                name: '红昭愿',
                souce: '',
                rank: '20',
                info: '音阙诗听-红昭愿',
                quality: true 
            }]
        }
    }
}
</script>

<style lang="scss" module>
    .list {
        li > div:nth-child(2) {
            max-width: calc(100% - 150px) !important;
        }
    }
    .more {
        height: 110px;
        line-height: 110px;
        text-align: center;
        font-size: 28px;
        color: #999;
    }
</style>


