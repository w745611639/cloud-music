<template>
    <nav :class="$style.nav">
        <router-link to="/home" exact>
            <span>推荐音乐</span>
        </router-link>
        <router-link to="/hotmusic" exact>
            <span>热歌榜</span>
        </router-link>
        <router-link to="/search" exact>
            <span>搜索</span>
        </router-link>
    </nav>
</template>
<script>
export default {
  
}

</script>

<style lang="scss">
    nav .active {
        color: #d43c33 !important;
        span {
            border-bottom: 4px solid #d43c33;
        }
    }
    .abcd {
        color: red;
    }
</style>

<style lang="scss" module>
    @import '../../style/layout.scss';
    .nav {
        @include flex($direction: row);
        height: 80px;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;      
        a {
            width: 33.3333%;
            height: 100%;
            text-decoration: none;
            color: #333;
            font-size: 30px;
            line-height: 80px;
            text-align: center;
            span {
                display: inline-block;
                height: 100%;
                box-sizing: border-box;
                padding: 0 20px;
            }
            // &:hover {
            //     color: #d43c33;
            //     span {
            //         box-shadow: 0 -4px 0 0 #d43c33 inset;
            //     }
                
            // }
        }
    }
</style>

