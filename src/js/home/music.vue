<template>
    <Panel :txt="txt" :class="$style.music">
        <cm-list :items="items"></cm-list>
    </Panel>
</template>
<script>
import Panel from '../base/panel.vue';
import cmList from '../base/list.vue';
export default {
    components: {
        Panel,
        cmList
    },
    data () {
        return {
            txt: '最新音乐',
            items: [{
                name: 'Can\'t Breathe',
                source: '',
                info: 'Eddie Supa / 王嘉尔 / Stan Sono-VIBE Presents Urban Asia Vol 1',
                quality: true 
            }, {
                name: '双子',
                source: '',
                info: '徐秉龙-双子',
                quality: true 
            }, {
                name: 'Changing point',
                source: 'TV动画《魔法少女网站》片头曲 / TVアニメ「魔法少女サイト」OPテーマ',
                info: 'Eddie Supa / 王嘉尔 / Stan Sono-VIBE Presents Urban Asia Vol 1',
                quality: true 
            }, {
                name: '熙熙攘攘 (热血版)',
                source: '电视剧《远大前程》兄弟主题曲',
                info: '许昕-熙熙攘攘 (热血版)',
                quality: true 
            }, {
                name: 'Watch',
                source: '',
                info: 'Travis Scott / Kanye West / Lil Uzi Vert',
                quality: false 
            }, {
                name: 'Genius',
                source: '',
                info: 'LSD / Sia / Diplo / Labrinth',
                quality: false 
            }, {
                name: 'The Way I Am',
                source: '',
                info: 'Charlie Puth-Voicenotes',
                quality: false 
            }, {
                name: 'Youth',
                source: '',
                info: 'Shawn Mendes / Khalid-Youth',
                quality: false 
            }, {
                name: '我要谢谢你',
                source: '',
                info: '康康-我要谢谢你',
                quality: true 
            }, {
                name: 'Bloom',
                souce: '',
                info: 'Troye Sivan-Bloom',
                quality: false 
            }]
        }
    }

}
</script>
<style lang="scss" module>

</style>
