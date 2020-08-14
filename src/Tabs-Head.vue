<template>
    <div class="tabsHead" ref="head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Tabs-Head',
        inject:['eventbus'],
        created(){
            this.eventbus.$on('update:selected',(name,vm)=>{
                //console.log(vm.$el.getBoundingClientRect());
                let l1=this.$refs.head.getBoundingClientRect().left
                this.$refs.line.style.width=`${vm.$el.getBoundingClientRect().width}px`
                this.$refs.line.style.left=`${vm.$el.getBoundingClientRect().left-l1}px`
            })
        }
    }
</script>

<style lang="scss" scoped>
    $tab-height:40px;
    .tabsHead{
        display: flex;
        height:$tab-height;
        align-items: center;
        justify-content: flex-start;
        position:relative;
        border-bottom:1px solid #ddd;
        > .line{
            position:absolute;
            bottom:0;
            border-bottom:1.5px solid #1890ff;
            transition:all 350ms;
        }
        > .actions-wrapper{
            margin-left:auto;
            display:flex;
            align-items: center;
            justify-content: center;
            padding:0 1em;
        }
    }
</style>