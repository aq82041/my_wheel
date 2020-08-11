<template>
    <div class="tabsPane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default{
        name: 'Tabs-Pane',
        data(){
            return {
                active:false,
            }
        },
        props:{
            name:{
                type:[String,Number],
                required:true
            }
        },
        inject:['eventbus'],
        created(){
            this.eventbus.$on('update:selected',(name)=>{
                this.active = name === this.name;  //根据被点击的是不是自己，选择是否激活自己的active标志
            })
        },
        computed:{
            classes(){
                return {
                    active:this.active
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabsPane{
        &.active{

        }
    }
</style>