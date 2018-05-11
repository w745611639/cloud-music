<template>
    <div :class="$style.show">
          <div :class="$style.value">搜索"{{msg}}"</div>
          <ul :class="$style.showList">
              <li v-for="list in lists" :key="list.keyword">
                  <i></i>
                  <p>{{list.keyword}}</p>
              </li>
          </ul>
      </div> 
</template>
<script>
export default {
    props: {
        msg: {
            type: String,
            default: ''
        },
        lists: {
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
    .show {
        padding: 0 20px;
        .value {
            height: 100px;
            border-bottom: 1px solid #eee;
            line-height: 100px;
            color: #507daf;
            font-size: 30px;
        }
        .showList {
            li {
                height: 90px;
                @include flex($direction: row);
                i {
                    width: 30px;
                    height: 30px;
                    margin-right: 20px;
                    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PGcgb3BhY2l0eT0iLjMiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzA0MDAwMCIgZD0iTTI4LjE4MSwyNy41MzVsLTEuNDE0LDEuNDE0bC03Ljc1NS03Ljc1NAoJCUMxNi45OTYsMjIuOTM4LDE0LjM3NSwyNCwxMS41LDI0QzUuMTQ5LDI0LDAsMTguODUyLDAsMTIuNUMwLDYuMTQ5LDUuMTQ5LDEsMTEuNSwxQzE3Ljg1MiwxLDIzLDYuMTQ5LDIzLDEyLjUKCQljMCwyLjc1Ni0wLjk3Myw1LjI4NS0yLjU4OSw3LjI2NkwyOC4xODEsMjcuNTM1eiBNMTEuNSwzQzYuMjUzLDMsMiw3LjI1MywyLDEyLjVjMCw1LjI0Niw0LjI1Myw5LjUsOS41LDkuNQoJCWM1LjI0NiwwLDkuNS00LjI1NCw5LjUtOS41QzIxLDcuMjUzLDE2Ljc0NiwzLDExLjUsM3oiLz48L2c+PC9zdmc+);
                }
                p {
                    flex-grow: 1;
                    height: 100%;
                    box-sizing: border-box;
                    border-bottom: 1px solid #eee;
                    line-height: 90px;
                    font-size: 30px;
                    color: #333;
                }
            }
        }
    }
</style>
