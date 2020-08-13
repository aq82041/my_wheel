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
                type:Array,
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

            this.eventbus.$on('removeName',(name)=>{
                let Copy=JSON.parse(JSON.stringify(this.selected))
                let i=Copy.indexOf(name)
                Copy.splice(i,1)
                this.eventbus.$emit('update:selected',Copy)
                this.$emit('update:selected',Copy)
            })

            this.eventbus.$on('addName',(name)=>{
                let Copy=JSON.parse(JSON.stringify(this.selected))
                if(this.single){
                    Copy=[name]
                }else{
                    Copy.push(name)
                }
                this.eventbus.$emit('update:selected',Copy)
                this.$emit('update:selected',Copy)
            })
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