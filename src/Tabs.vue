<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default{
        name: 'Tabs',
        props:{
            selected:{
                type:String,
                required:true
            },
            direction:{
                type:String,
                default:'horizontal',
                validator(value){
                    return ['horizontal','vertical'].indexOf(value)>=0
                }
            }
        },
        data(){
            return {
                eventbus:new Vue()
            }
        },
        provide(){
            return {
                eventbus:this.eventbus
            }
        },
        mounted(){
            // 在已经加载完自己的孩子后，通过事件总线，触发一个事件，把用户传给自己的初始标签通过事件广播出去
            //this.eventbus.$emit('update:selected',this.selected)
            this.$children.forEach(vm=>{
                if(vm.$options.name==='Tabs-Head'){
                    vm.$children.forEach(item=>{  //遍历head的孩子，也就是每个item实例
                        if(item.$options.name==='Tabs-Item' && item.name===this.selected){
                            this.eventbus.$emit('update:selected',this.selected,item)
                        }
                    })
                }
            })
            //只是为了触发时，多传一个参数，找到当前selected所对应的那个实例。为了移动下划线
        }
    }
</script>

<style lang="scss" scoped>

</style>