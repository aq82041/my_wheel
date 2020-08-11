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
                this.eventbus.$emit('update:selected',this.name)
            }
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
    .tabsItem{
        border:1px solid red;
        padding:0 1em;
        height:100%;
        display: flex;
        align-items: center;
        &.active{
            background: red;
        }
    }
</style>