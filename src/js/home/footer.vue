<template>
    <div :class="$style.footer">
        <p :class="$style.logo"></p>
        <p :class="$style.app">打开APP，发现更多好音乐 ></p>
        <p :class="$style.copyrigh">网易公司版权所有©1997-2018   杭州乐读科技有限公司运营</p>
    </div>
</template>
<script>
export default {
  

}
</script>
<style lang="scss" module>
    .footer {
        height: 340px;
        padding-top: 80px;
        box-sizing: border-box;
        margin-top: 8px;
        background: url(http://s3.music.126.net/m/s/img/recommand_bg_2x.png?d045fafc60e017b653f8065a87496922) no-repeat;
        background-size: cover;
        .logo {
            width: 460px;
            height: 100px;
            margin: auto;
            background: url(../../assets/logo.jpg) no-repeat center;
            background-size: 490px 155px;
        }
        .app {
            height: 76px;
            margin: 30px 74px 10px;
            border: 2px solid #d33a31;
            line-height: 76px;
            border-radius: 76px;
            font-size: 32px;
            color: #d33a31;
            text-align: center;
        }
        .copyrigh {
            height: 32px;
            line-height: 32px;
            color: #888;
            font-size: 24px;
            transform: scale(0.75);
            text-align: center;
        }
    }
</style>
