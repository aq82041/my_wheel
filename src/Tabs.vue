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
            if(this.$children.length===0){    // $children只能获取子组件，不能获取html标签形式的子元素
                console && console.warn &&
                console.warn('Tabs只接受Tabs-Head,Tabs-Body作为子组件，但是你没有传子组件')
            }

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