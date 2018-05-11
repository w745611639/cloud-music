<template>
    <ul :class="$style.history">          
        <li v-for="(item, index) in historyList" :key="item.id">
            <i></i>
            <span>{{item.value}}<i :index="index" @click="deleteHistory"></i></span>             
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        historyList: {
            type: Array,
            default () {
                return []
            }
        }
    },
    methods: {
        deleteHistory (e) {
            this.$emit('deletehistory', e.target.getAttribute('index'))
        }
    }
}
</script>
<style lang="scss" module>
    @import '../../style/layout.scss';
    .history {
        padding: 0 20px;
        li {
            height: 90px;
            @include flex($direction: row);
            > i {
                background-size: cover;
                width: 30px;
                height: 30px;
                margin-right: 20px;
                background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljYWNhIiBkPSJtMTUgMzBjLTguMjg0IDAtMTUtNi43MTYtMTUtMTVzNi43MTYtMTUgMTUtMTUgMTUgNi43MTYgMTUgMTUtNi43MTYgMTUtMTUgMTVtMC0yOGMtNy4xOCAwLTEzIDUuODItMTMgMTNzNS44MiAxMyAxMyAxMyAxMy01LjgyIDEzLTEzLTUuODItMTMtMTMtMTNtNyAxNmgtOGMtLjU1MiAwLTEtLjQ0Ny0xLTF2LTEwYzAtLjU1My40NDgtMSAxLTFzMSAuNDQ3IDEgMXY5aDdjLjU1MyAwIDEgLjQ0NyAxIDFzLS40NDcgMS0xIDEiLz48L3N2Zz4=);            
            }
            span {
                flex-grow: 1;
                @include flex($direction: row, $justify: space-between);
                height: 100%;
                box-sizing: border-box;
                margin-right: 20px;
                border-bottom: 1px solid #eee;
                font-size: 28px;
                color: #333;
                i {
                    width: 24px;
                    height: 24px;
                    margin-right: 20px;
                    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjOTk5ODk5IiBkPSJtMTMuMzc5IDEybDEwLjMzOCAxMC4zMzdjLjM4MS4zODEuMzgxLjk5OCAwIDEuMzc5cy0uOTk4LjM4MS0xLjM3OCAwbC0xMC4zMzgtMTAuMzM4LTEwLjMzOCAxMC4zMzhjLS4zOC4zODEtLjk5Ny4zODEtMS4zNzggMHMtLjM4MS0uOTk4IDAtMS4zNzlsMTAuMzM4LTEwLjMzNy0xMC4zMzgtMTAuMzM4Yy0uMzgxLS4zOC0uMzgxLS45OTcgMC0xLjM3OHMuOTk4LS4zODEgMS4zNzggMGwxMC4zMzggMTAuMzM4IDEwLjMzOC0xMC4zMzhjLjM4LS4zODEuOTk3LS4zODEgMS4zNzggMHMuMzgxLjk5OCAwIDEuMzc4bC0xMC4zMzggMTAuMzM4Ii8+PC9zdmc+);
                }
            }
        }
    }
</style>
