<template>
    <div :class="$style.container">
        <div :class="$style.fix">
          <cm-header></cm-header>
          <cm-navbar></cm-navbar>
        </div>
        <cm-poster></cm-poster>
        <cm-list></cm-list>
    </div>
</template>
<script>
import cmHeader from '../public/header.vue';
import cmNavbar from '../public/navbar.vue';
import cmPoster from './poster.vue';
import cmList from './hotlist.vue';
export default {
    components: {
        cmHeader,
        cmNavbar,
        cmPoster,
        cmList
    }

}
</script>
<style lang="scss" module>
    .container {
        .fix {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 2;
            width: 100%;
            background-color: #fff;
        }
    }

</style>
