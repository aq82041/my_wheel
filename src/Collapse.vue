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
            }
        },
        data(){
            return {
                eventbus:new Vue()
            }
        },
        provide(){
            if(this.single){
                return {
                    eventbus:this.eventbus
                }
            }
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