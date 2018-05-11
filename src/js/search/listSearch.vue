<template>
    <div :class="$style.match">
        <div :class="$style.matchBest">
            <h3>最佳匹配</h3>
            <div :class="$style.content">
                <img src="http://p1.music.126.net/HPPVq_PiGV7jIsifo_bqHg==/864216149432849.webp?imageView&thumbnail=178x0&quality=75&tostatic=0&type=webp" :class="$style.pic">      
                <div :class="$style.info">
                    <p>MV:435</p>
                    <p>fdgdf</p>
                </div>
                <i></i>
            </div>
        </div>
        <List :items="datas"></List>
    </div>
</template>
<script>
import List from '../base/list.vue';
export default {
    components: {
        List
    },
    props: {
        datas: {
            type: Array,
            default () {
                return []
            }
        }
    }
}
</script>
<style lang="scss" module>
    @import '../../style/layout.scss';
    .match {
        padding: 16px 0 8px;
        .matchBest {
            h3 {
                margin-left: 20px;
                font-size: 24px;
                line-height: 32px;
                color: #666;
            }
            .content {
                @include flex($direction: row);
                padding: 16px 20px 16px 0;
                margin-left: 20px;
                border-bottom: 1px solid #eee;
                    .pic {
                        position: relative;
                        width: 178px;
                        height: 100px;
                        margin-right: 30px;
                        &:after {
                            content: '';
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            width: 40px;
                            height: 40px;
                            margin: auto;
                            background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZD0iTTIwLDBjMTEsMCwyMCw5LDIwLDIwYzAsMTEtOSwyMC0yMCwyMEM5LDQwLDAsMzEsMCwyMEMwLDksOSwwLDIwLDB6IiBvcGFjaXR5PSIuMjQiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxnIG9wYWNpdHk9Ii42Ij48cGF0aCBkPSJtMjAgMmM5LjkgMCAxOCA4LjEgMTggMTggMCA5LjktOC4xIDE4LTE4IDE4cy0xOC04LjEtMTgtMThjMC05LjkgOC4xLTE4IDE4LTE4bTAtMmMtMTEgMC0yMCA5LTIwIDIwIDAgMTEgOSAyMCAyMCAyMCAxMSAwIDIwLTkgMjAtMjAgMC0xMS05LTIwLTIwLTIweiIgZmlsbD0iI2ZmZiIvPjwvZz48cGF0aCBkPSJtMTYgMTMuOWMwIDAgMC0xLjYgMS42LS41bDEwLjkgNi4xYzAgMCAxLjEuNSAwIDEuMWwtMTAuOSA2LjFjMCAwLTEuNiAxLjEtMS42LS41di0xMi4zIiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=) no-repeat;
                        }
                    }
                    .info {
                        flex-grow: 1;
                        max-width: calc(100% - 260px);
                        p {
                            &:first-child {
                                height: 60px;
                                line-height: 60px;
                                font-size: 34px;
                                color: #333;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                word-break: normal;
                            }
                            &:last-child {
                                font-size: 24px;
                                line-height: 30px;
                                color: #999;
                            }
                        }
                    }
                    i {
                        width: 16px;
                        height: 26px;
                        margin: 0 16px 0 20px;
                        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSJub25lIiBzdHJva2U9IiM5YjliOWIiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMi45MzkgMjMuOTM5IDEzLjg3OSAxMyAyLjkzOSAyLjA2MSIvPjwvc3ZnPg==) no-repeat;
                    }
            }
        }
    }
</style>
