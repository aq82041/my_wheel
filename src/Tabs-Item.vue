<template>
    <div class="tabsItem" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default{
        name: 'Tabs-Item',
        data(){
            return {
                active:false,
            }
        },
        props:{
            disabled:{
                type:Boolean,
                default:false
            },
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
        methods:{
            xxx(){
                if(this.disabled){return}
                this.eventbus.$emit('update:selected',this.name,this)
                //再传一个当前被激活的实例的参数。为了在head里拿到是哪个实例被激活了，从而确定下划线应该移动的位置，实现动画效果
            }
        },
        computed:{
            classes(){
                return {
                    active:this.active,
                    disabled:this.disabled
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabsItem{
        padding:0 1em;
        height:100%;
        display: flex;
        align-items: center;
        &.active{
           color:#1890ff;
        }
        &.disabled{
            color:grey;
        }
    }
</style>