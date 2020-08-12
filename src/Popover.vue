<template>
    <div class="popover" @click="x" ref="popover">

        <!--contentWrapper只是写在这，但是它其实在body里-->
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display:inline-block;">
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
            //如果点击document(但排除popover本身)，也要让框消失
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
        border:1px solid #333;
        border-radius:4px;
        box-shadow: 0 0 3px rgba(0,0,0,0.5);
        transform: translateY(-100%);
        padding:.5em 1em;
        margin-top:-8px;
        max-width:20em;
        word-break: break-all;
        &::before,&::after{
            content:'';
            display:block;
            width:0;
            height:0;
            border-left:8px solid  transparent;
            border-right:8px solid  transparent;
            position:absolute;
            left:10px;
        }
        &::before{
            border-top:8px solid black;
            top:100%;
        }
        &::after{
            border-top:8px solid white;
            top:calc(100% - 1px);
        }
    }
</style>