<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default{
        name: 'Collapse',
        props:{
            single:{
                type:Boolean,
                default:false
            },
            selected:{
                type:String,

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
            this.eventbus.$emit('update:selected',this.selected)
        }
    }
</script>

<style lang="scss" scoped>
    $grey:#ddd;
    .collapse{
        border:1px solid $grey;
        border-radius:4px;

    }
</style>