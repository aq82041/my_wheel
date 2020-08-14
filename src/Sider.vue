<template>
    <transition name="slide">
        <div class="sider" v-if="visible">
            <slot></slot>
            <button @click="visible=false">X</button>
        </div>
    </transition>

</template>

<script>
    export default{
        name:'Sider',
        data(){
            return {
                visible:true
            }
        },
    }
</script>

<style lang="scss" scoped>
    .sider{
        position:relative;
        > button{
            outline: none;
            border: 1px solid transparent;
            background: #999;
            position:absolute;
            top:0;
            right:0;
        }
    }
    .slide-enter-active,.slide-leave-active{
        transition: all 0.5s;
    }
    .slide-enter,.slide-leave-to{
        margin-left:-200px;
    }
</style>