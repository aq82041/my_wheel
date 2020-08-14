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
               if(vm.$options._componentTag==='hu-sider'){
                   this.layoutClass.hasSider=true
               }
           })
            console.log(this.layoutClass.hasSider);
        }
    }
</script>
<style lang="scss" scoped>
    .layout{
        display:flex;
        flex-direction: column;
        flex-grow:1;
        &.hasSider{
            flex-direction: row;
        }
    }
</style>