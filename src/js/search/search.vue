<template>
  <div :class="$style.search">
      <form :class="$style.form">
          <div :class="$style.group">
                <i></i>
                <input 
                    @input="transferData"
                    @keydown.enter="noticeSearch"
                    :value="val" 
                    type="text" 
                    placeholder="搜索歌曲、歌手、专辑"
                >
                <span 
                    :class="$style.close" 
                    v-show="val"
                    @click="emptySearchContent"
                ></span>
          </div>        
      </form>
  </div>
</template>
<script>
export default {
    methods: {
        transferData (e) {
            this.$emit('transferdata', e.target.value);
        },
        emptySearchContent () {
            this.$emit('emptycontent');
        },
        noticeSearch (e) {
            e.preventDefault();
            this.$emit('getsearchdata');
        }
    },
    props: {
        val: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss" module>
    @import '../../style/layout.scss';
    .search {
        .form {
            padding: 30px 20px;
        }
        .form {
            height: 60px;          
            border-bottom: 1px solid #ccc;
            .group {
                position: relative;
                height: 100%;
                padding: 0 60px;
                border-radius: 60px;
                background: #eee;
                i {
                    position: absolute;
                    left: 17px;
                    top: 0;
                    bottom: 0;
                    width: 26px;
                    height: 26px;
                    margin: auto;
                    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxLDIzLjUzNWwtMS40MTQsMS40MTRsLTcuMzE1LTcuMzE0CgkJQzE0LjcwOSwxOS4xMDcsMTIuNDYsMjAsMTAsMjBDNC40NzcsMjAsMCwxNS41MjMsMCwxMEMwLDQuNDc3LDQuNDc3LDAsMTAsMGM1LjUyMywwLDEwLDQuNDc3LDEwLDEwYzAsMi4zNDItMC44MTEsNC40OS0yLjE2LDYuMTk1CgkJTDI1LjE4MSwyMy41MzV6IE0xMCwyYy00LjQxOCwwLTgsMy41ODItOCw4czMuNTgyLDgsOCw4YzQuNDE4LDAsOC0zLjU4Miw4LThTMTQuNDE4LDIsMTAsMnoiLz48L3N2Zz4=) no-repeat;
                    background-size: cover;
                    color: red;
                }
                input {
                    height: 100%;
                    width: 100%;
                    border: none;               
                    font-size: 28px;                   
                    background: #eee;
                }
                .close {
                    position: absolute;
                    right: 0;
                    top: 0;
                    height: 60px;
                    width: 60px;
                    &:after {
                        content: '';
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        right: 0;
                        left: 0;
                        width: 28px;
                        height: 28px;
                        margin: auto;
                        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyOCI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjYmNiZGJkIiBkPSJNMTQsMGM3LjczMiwwLDE0LDYuMjY4LDE0LDE0YzAsNy43MzItNi4yNjgsMTQtMTQsMTQKCVMwLDIxLjczMiwwLDE0QzAsNi4yNjgsNi4yNjgsMCwxNCwweiIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ViZWNlYiIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0ibTE5IDlsLTEwIDEwIi8+PHBhdGggZD0ibTkgOWwxMCAxMCIvPjwvZz48L2c+PC9zdmc+) no-repeat;
                    }
                }
            }           
        }
    }
</style>
