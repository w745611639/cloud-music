<template>
  <div :class="$style.poster">
      <div :class="$style.theme"></div>
      <div :class="$style.time">更新时间 : 05月03日</div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" module>
    @import '../../style/layout.scss';
    .poster {
        @include flex($direction: column, $justify: center, $alignItems: flex-start);
        width: 100%;
        height: 250px;
        box-sizing: border-box;
        padding-left: 40px;
        margin-top: 208px;
        background: url(http://s3.music.126.net/m/s/img/hot_music_bg_2x.jpg?f01a252389c26bcf016816242eaa6aee) no-repeat;
        background-size: cover;
        .theme {
            width: 284px;
            height: 134px;
            background: url(http://s3.music.126.net/m/s/img/index_icon_2x.png?5207a28…) no-repeat;
            background-size: 332px 194px;
            background-position: -48px -60px;
        }
        .time {
            margin-top: 20px;
            color: #fff;
            font-size: 24px;
            transform: scale(0.91);
            transform-origin: left top;
        }
    }
</style>
