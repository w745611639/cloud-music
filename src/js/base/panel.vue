<template>
  <div :class="$style.panel">
      <h2>{{txt}}</h2>
      <slot />
  </div>
</template>
<script>
export default {
    props: {
        txt: {
            type: String,
            default: ''
        }
    }

}
</script>

<style lang="scss" module>
    .panel {
        padding-top: 40px;
        background-color: #fcfcfe;
        > h2 {
            padding-left: 18px;
            margin-bottom: 28px;
            font-size: 34px;
            height: 40px;
            line-height: 40px;
            border-left: 4px solid #d43c33;
        }
    }

</style>
