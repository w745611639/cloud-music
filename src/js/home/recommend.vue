<template>
    <Panel :class="$style.recommend" :txt="txt">
        <ul :class="$style.content">
            <li v-for="item in items" :key="item.src" :class="$style.item">
                <img :src="item.src">
                <p :class="$style.text">{{item.text}}</p>
                <span :class="$style.num">{{item.num}}</span>
            </li>
        </ul>
    </Panel>
</template>
<script>
import Panel from '../base/panel.vue';
export default {
    components: {
        Panel
    },
    data () {
        return {
            txt: '推荐歌单',
            items:[{
                src: 'http://p1.music.126.net/G-_33WaEGJX4E-3DwUVjGg==/109951163244669994.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
                text: '像我这样的女孩，要不要了解一下？',
                num: '57.6万'
            }, {
                src: 'http://p1.music.126.net/1KRWbkzziWyaH3Qn8pBs_w==/18885211718766901.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
                text: '【泛民国撷趣】男士撩妹指南',
                num: '12.2万'
            }, {
                src: 'http://p1.music.126.net/wpahk9cQCDtdzJPE52EzJQ==/109951163271025942.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
                text: '你的青春里有没有属于你的一首歌？',
                num: '967.6万'
            }, {
                src: 'http://p1.music.126.net/JNZyPK6QK1P7mFtgRo0aJw==/109951163242780706.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
                text: '全网易最贵歌单了解一下？',
                num: 87148
            }, {
                src: 'http://p1.music.126.net/G0qJLoYk3mZ3XL7Br0wyVA==/19098516974703178.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
                text: '把肾抖虚！！！',
                num: '462.2万'
            }, {
                src: 'http://p1.music.126.net/AZEa0RlZxNkxWAi0wpDI4w==/109951163097632993.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
                text: '2017年度最热新歌TOP100',
                num: '4589.7万'
            }]
        }
    }
}
</script>
<style lang="scss" module>
    @import '../../style/layout.scss';
    .recommend {
        .content {
            @include flex($direction: row, $justify: space-between, $alignItems: flex-start);
            .item {
                position: relative;
                width: 32%;
                @include flex;
                padding-bottom: 32px;
                img {
                    width: 100%;
                    // height: 209px;
                }
                .text {
                    font-size: 26px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    padding: 12px 4px 0 12px;
                    line-height: 1.2;
                }
                .num {
                    position: absolute;
                    right: 6%;
                    top: 3%;
                    padding-left: 26px;
                    color: #fff;
                    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PGcgb3BhY2l0eT0iLjE1Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwNDAwMDAiIGQ9Im0yMiAxNi43NzdjMCAxLjIzMy0xLjEyMSAyLjIzMy0yLjUwNiAyLjIzMy0xLjM4NCAwLTIuNTA2LTEtMi41MDYtMi4yMzN2LTIuNTUzYzAtMS4yMzQgMS4xMjItMi4yMzMgMi41MDYtMi4yMzMuMTc0IDAgLjM0My4wMTcuNTA2LjA0NnYtMS4zN2gtLjAzM2MuMDE3LS4yMi4wMzMtLjQ0MS4wMzMtLjY2NiAwLTQuNDE4LTMuNTgyLTgtOC04LTQuNDE4IDAtOCAzLjU4Mi04IDggMCAuMjI1LjAxNi40NDYuMDM0LjY2NmgtLjAzNHYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzcy0yLjUwNS0uOTk5LTIuNTA1LTIuMjMzdi0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43My0uMDg1LS4xNDgtLjE0OC0uMzEtLjE0OC0uNDkzdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMCA1LjUyMyAwIDEwIDQuNDc3IDEwIDEwIDAgLjA5LS4wMDkuMTc4LS4wMTQuMjY2LjAwMi4wMjQuMDE0LjA0NC4wMTQuMDY3djJjMCAuMzA2LS4xNDUuNTY5LS4zNi43NTMuMjI0LjMzNC4zNi43Mi4zNiAxLjEzOHYyLjU1MiIvPjwvZz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZmYiIGQ9Im0yMCAxNi43NzdjMCAxLjIzMy0xLjEyMSAyLjIzMy0yLjUwNiAyLjIzMy0xLjM4NCAwLTIuNTA2LTEtMi41MDYtMi4yMzN2LTIuNTUzYzAtMS4yMzQgMS4xMjItMi4yMzMgMi41MDYtMi4yMzMuMTc0IDAgLjM0My4wMTcuNTA2LjA0NnYtMS4zN2gtLjAzM2MuMDE3LS4yMi4wMzMtLjQ0MS4wMzMtLjY2NiAwLTQuNDE4LTMuNTgyLTgtOC04LTQuNDE4IDAtOCAzLjU4Mi04IDggMCAuMjI1LjAxNi40NDYuMDM0LjY2NmgtLjAzNHYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzcy0yLjUwNS0uOTk5LTIuNTA1LTIuMjMzdi0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43My0uMDg1LS4xNDgtLjE0OC0uMzEtLjE0OC0uNDkzdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMCA1LjUyMyAwIDEwIDQuNDc3IDEwIDEwIDAgLjA5LS4wMDkuMTc4LS4wMTQuMjY2LjAwMi4wMjQuMDE0LjA0NC4wMTQuMDY3djJjMCAuMzA2LS4xNDUuNTY5LS4zNi43NTMuMjI0LjMzNC4zNi43Mi4zNiAxLjEzOHYyLjU1MiIvPjwvc3ZnPg==);
                    background-repeat: no-repeat;
                    background-size: 22px 20px;
                    font-size: 24px;
                }
            }
        }
    }
</style>
