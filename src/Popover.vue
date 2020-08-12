<template>
    <div class="popover" @click.stop="x">
        <div class="content-wrapper" v-if="visible" @click.stop>
            <slot name="content"></slot>
        </div>

        <slot></slot>
    </div>
</template>

<script>
    export default{
        name:'Popover',
        data(){
            return {
                visible:false,
            }
        },
        methods:{
            x(){
                this.visible=!this.visible
                console.log(1);
                if(this.visible===true){
                    setTimeout(()=>{
                        let eventHandler=()=>{
                            this.visible=false
                            document.removeEventListener('click',eventHandler)
                        }
                        document.addEventListener('click',eventHandler)
                    },500)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .popover{
        display:inline-block;
        vertical-align: top;
        position:relative;
        > .content-wrapper{
            position:absolute;
            bottom:100%;
            left:0;
            border:1px solid red;
            box-shadow: 0 0 3px rgba(0,0,0,0.5);
        }
    }
</style>