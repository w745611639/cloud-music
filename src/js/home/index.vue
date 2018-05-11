<template>
  <div :class="$style.container">
      <div :class="$style.fix">
          <cm-header></cm-header>
          <cm-navbar></cm-navbar>
      </div>
      <cm-recommend :class="$style.recommend"></cm-recommend>
      <cm-music></cm-music>
      <cm-footer></cm-footer>
  </div>
</template>
<script>
import cmHeader from '../public/header.vue';
import cmNavbar from '../public/navbar.vue';
import cmRecommend from './recommend.vue';
import cmMusic from './music.vue';
import cmFooter from './footer.vue';
export default {
    components: {
        cmHeader,
        cmNavbar,
        cmRecommend,
        cmMusic,
        cmFooter
    }
}
</script>
<style lang="scss" module>
    .fix {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        background: #fff;
    }
    .recommend {
        margin-top: 208px;
    }
</style>
