<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        //不让用户瞎写子元素
        mounted(){
            for(let node of this.$el.children) {
                if(node.nodeName.toLowerCase()!=='vm'){
                    console.warn(`g-button-group 的子元素应该全为 g-button，但是你写的是${node.nodeName.toLowerCase()}`)
                }
            }
        }
    }
</script>
<style lang="scss">
    $border-radius:4px;
    .g-button-group{
        display:inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        > .g-button{
            border-radius: 0;
            &:not(:first-child){
                margin-left: -1px;
            }
            &:first-child{
                border-radius: $border-radius 0 0 $border-radius;
            }
            &:last-child{
                border-radius: 0 $border-radius $border-radius 0;
            }
            &:hover{
                position:relative;
                z-index: 1;
            }
        }
    }

</style>