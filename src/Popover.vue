<template>
    <div class="popover" @click="x" ref="popover">

        <!--contentWrapper只是写在这，但是它其实在body里-->
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
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
            positionContent(){
                document.body.appendChild(this.$refs.contentWrapper)
                let {top,left}=this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.top=top+window.scrollY+'px'
                this.$refs.contentWrapper.style.left=left+window.scrollX+'px'
            },
            listenToDoc(){
                this.eventHandler=(e)=>{
                    if((this.$refs.popover && this.$refs.popover.contains(e.target))
                        || (this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target))){
                    }else{
                        this.close()
                    }
                }
                document.addEventListener('click',this.eventHandler)
            },
            open(){
                this.visible=true
                this.$nextTick(()=>{
                    this.positionContent()
                    this.listenToDoc()
                })
            },
            //把所有收尾的事情都收拢到一个函数里
            close(){
                this.visible=false
                document.removeEventListener('click',this.eventHandler)
            },
            x(event){
                if(this.$refs.triggerWrapper.contains(event.target)){   //如果点击的是按钮
                    //如果当前是能看见的,就让它消失。同时解除对document的监听
                    if(this.visible===true){
                        this.close()
                    }else{
                        this.open()
                    }
                }
            },

        }
    }
</script>

<style lang="scss" scoped>
    .popover{
        display:inline-block;
        vertical-align: top;
        position:relative;
    }
    .content-wrapper{
        position:absolute;
        border:1px solid red;
        box-shadow: 0 0 3px rgba(0,0,0,0.5);
        transform: translateY(-100%);
    }
</style>