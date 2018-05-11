<template>
    <div :class="$style.topic">
        <img src="../../assets/topic.png" />
        <span :class="$style.download">下载APP</span>
    </div>
</template>

<script>
export default {
  

}
</script>
<style lang="scss" module>
    @import '../../style/layout.scss';
    .topic {
        @include flex($direction: row, $justify: space-between);
        height: 128px;
        padding: 0 20px;
        background-color: #d43c33;
        box-sizing: border-box;
        img {
            width: 270px;
            height: 90px;
        }
        .download {
            height: 60px;
            line-height: 60px;
            text-align: center;
            padding: 0 20px;
            font-size: 30px;
            color: #fff;
            // border-color: #fff;
            border: 1px solid;
            border-radius: 37.5%/100%;
        }
    }
</style>
