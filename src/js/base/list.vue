<template>
    <ul :class="$style.content">
        <li v-for="item in items" :key="item.id" :class="$style.item">
            <span v-if="item.rank" :class="$style.rank">{{item.rank}}</span>
            <div :class="$style.message">
                <p :class="$style.name">
                    {{item.name}}
                    <span v-if="item.source">({{item.source}})</span>
                </p>
                <p :class="$style.info">
                    <i v-if="item.quality"></i>
                    <span>{{item.info}}</span>
                </p>
            </div>
            <span :class="$style.play">
                <i></i>
            </span>
        </li>
    </ul>
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
    }
}
</script>
<style lang="scss" module>
    @import '../../style/layout.scss';
    .content {
        @include flex;
        .item {
            @include flex($direction: row);
            width: 100%;
            border-bottom: 1px solid #ccc;
            padding: 12px 0 12px 20px;
            box-sizing: border-box;
            &:nth-child(1), &:nth-child(2), &:nth-child(3) {
                .rank {
                    color: #df3436;
                }
            }
            .rank {
                width: 56px;
                line-height: 110px;
                font-size: 34px;
                color: #888;
            }
            .message {
                flex-grow: 1;
                max-width: calc(100% - 84px);
                .name {             
                    height: 50px;
                    line-height: 50px;
                    font-size: 34px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: #333;
                    span {
                        color: #888;
                    }
                }
                .info {
                    @include flex($direction: row);
                    // justify-content: flex-start;
                    height: 36px;
                    line-height: 36px;
                    font-size: 24px;
                    color: #888;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    i {
                        width: 24px;
                        height: 16px;
                        margin-right: 8px;
                        background-image: url(http://s3.music.126.net/m/s/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880);
                        background-repeat: no-repeat;
                        background-size: 332px 194px;
                    }
                    span {
                        flex-grow: 1;
                        max-width: calc(100% - 32px);
                    }
                }
            }
            .play {
                @include flex($justify: center);
                height: 110px;
                width: 44px;
                padding: 0 20px;
                i {
                    width: 44px;
                    height: 44px;
                    background-image: url(http://s3.music.126.net/m/s/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880);
                    background-repeat: no-repeat;
                    background-size: 332px 194px;
                    background-position: -48px 0;
                }
                
            }
            
        }
    }
</style>
