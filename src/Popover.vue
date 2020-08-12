<template>
    <div class="popover" @click="x" ref="popover">

        <!--contentWrapper只是写在这，但是它其实在body里-->
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class="{[`position-${position}`]:true}">
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
        props:{
          position:{
              type:String,
              default:'top',
              validator(value){
                  return ['top','bottom','left','right'].indexOf(value)>=0
              }
          }
        },
        methods:{
            positionContent(){
                let contentWrapper=this.$refs.contentWrapper
                document.body.appendChild(contentWrapper)
                let {width,height,top,left}=this.$refs.triggerWrapper.getBoundingClientRect()
                if(this.position==='top'){
                    contentWrapper.style.top=top+window.scrollY+'px'
                    contentWrapper.style.left=left+window.scrollX+'px'
                }else if(this.position==='bottom'){
                    contentWrapper.style.top=top+window.scrollY+height+'px'
                    contentWrapper.style.left=left+window.scrollX+'px'
                }else if(this.position==='left'){
                    contentWrapper.style.left=left+window.scrollX+'px'
                    let h1=contentWrapper.getBoundingClientRect().height
                    contentWrapper.style.top=top+window.scrollY-(h1-height)/2+'px'
                }else {
                    contentWrapper.style.left=left+window.scrollX+width+'px'
                    let h1=contentWrapper.getBoundingClientRect().height
                    contentWrapper.style.top=top+window.scrollY-(h1-height)/2+'px'
                }

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
        filter:drop-shadow(0 1px 1px rgba(0,0,0,0.5));
        background: white;
        padding:.5em 1em;
        max-width:20em;
        word-break: break-all;
        &.position-top{
            transform: translateY(-100%);
            margin-top:-8px;
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
        &.position-bottom{
            margin-top:8px;
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
                border-bottom:8px solid black;
                bottom:100%;
            }
            &::after{
                border-bottom:8px solid white;
                bottom:calc(100% - 1px);
            }
        }
        &.position-left{
            transform:translateX(-100%);
            margin-left:-8px;
            &::before,&::after{
                content:'';
                display:block;
                width:0;
                height:0;
                border-top:8px solid  transparent;
                border-bottom:8px solid  transparent;
                position:absolute;
                top:50%;
                transform:translateY(-50%);
            }
            &::before{
                border-left:8px solid black;
                left:100%;
            }
            &::after{
                border-left:8px solid white;
                left:calc(100% - 1px);
            }
        }
        &.position-right{
            margin-left:8px;
            &::before,&::after{
                content:'';
                display:block;
                width:0;
                height:0;
                border-top:8px solid  transparent;
                border-bottom:8px solid  transparent;
                position:absolute;
                top:50%;
                transform:translateY(-50%);
            }
            &::before{
                border-right:8px solid black;
                right:100%;
            }
            &::after{
                border-right:8px solid white;
                right:calc(100% - 1px);
            }
        }
    }
</style>