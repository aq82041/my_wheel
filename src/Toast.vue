<template>
    <div class="toast" ref="wrapper" :class="toastClass">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default"></div>
        </div>

        <div class="line" ref="line"></div>
        <span class='close' v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>
    export default{
        name:'Toast',
        props:{
            autoClose:{
                type:Boolean,
                default:true
            },
            autoCloseDelay:{
                type:Number,
                default:50
            },
            closeButton:{
                type:Object,
                default(){
                    return {
                        text:'关闭',
                        callback:undefined
                    }
                }
            },
            //让用户传html是很危险的，所以使用一个变量控制是否允许，默认不允许
            enableHtml:{
                type:Boolean,
                default:false
            },
            position:{
                type:String,
                default:'top',
                validator(value){
                    return ['top','bottom','middle'].indexOf(value)>=0
                }
            }
        },
        computed:{
            // 'position-top' 'position-bottom' 'position-middle'  的class
            toastClass(){
                return [`position-${this.position}`]
            }
        },
        mounted(){
            this.updateStyles()   //拿到竖线的高度
            this.execAutoClose()  //判断是否要自动关闭
        },
        methods:{
            close(){
                this.$el.remove()
                this.$emit('close')  //如果用户自己关了toast，就发出一个信号，让外边把currentToast也同时删掉
                this.$destroy()
            },
            onClickClose(){
                this.close()
                if(this.closeButton && typeof this.closeButton.callback ==='function'){
                    this.closeButton.callback()
                }
            },
            execAutoClose(){
                if(this.autoClose){
                    setTimeout(()=>{
                        this.close()
                    },this.autoCloseDelay*1000)
                }
            },
            updateStyles(){
                this.$nextTick(()=>{
                    this.$refs.line.style.height=
                        `${this.$refs.wrapper.getBoundingClientRect().height}px`
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    $font-size:14px;
    $toast-height:40px;
    $toast-bg:rgba(0,0,0,0.75);
    $animation-duration:300ms;
    @keyframes slide-up {
        0%{
            transform: translateX(-50%) translateY(100%);
            opacity: 0;
        }
        100%{
            transform: translateX(-50%) ;
            opacity: 1;
        }
    }
    @keyframes slide-down {
        0%{
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
        100%{
            transform: translateX(-50%) ;
            opacity: 1;
        }
    }
    @keyframes fade-in-middle {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    .toast{
        font-size: $font-size;
        min-height: $toast-height;
        line-height:1.8;
        color:white;
        position:fixed;
        left:50%;
        transform:translateX(-50%);
        display: flex;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
        padding:0 16px;

        > .message{
            margin:8px 0;
        }
        > .close{
            padding-left:16px;
            flex-shrink:0;
        }
        > .line{
            border-left:1px solid #666;
            height:100%;
            margin-left:16px;
        }
        &.position-top{
            top:0;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            animation:slide-down $animation-duration;
        }
        &.position-bottom{
            bottom:0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            animation:slide-up $animation-duration;
        }
        &.position-middle{
            top:50%;
            transform: translate(-50%,-50%);
            animation: fade-in-middle $animation-duration;
        }
    }
</style>