<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'Layout',
        data(){
          return {
              layoutClass:{hasSider:false},
          }
        },
        mounted(){
           this.$children.forEach(vm=>{
               if(vm.$options._componentTag==='g-sider'){
                   this.layoutClass.hasSider=true
               }
           })
        }
    }
</script>
<style lang="scss" scoped>
    .layout{
        border:1px solid black;
        display:flex;
        flex-direction: column;
        flex-grow:1;
        &.hasSider{
            flex-direction: row;
        }
    }
</style>