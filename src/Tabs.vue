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
            this.eventbus.$emit('update:selected',this.selected)
        }
    }
</script>

<style lang="scss" scoped>

</style>