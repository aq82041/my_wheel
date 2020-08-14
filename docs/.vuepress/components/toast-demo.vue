<template>
    <div class="wrapper">
        <h2>基础用法</h2>
        默认从上方弹出，三秒钟后自动关闭。

        使用时需要调用<code>{{c1}}</code> ，它接受一个字符串和一个对象作为参数。对象中可以传入position属性，指定弹出框出现的位置。
        <p><strong>预览</strong></p>
        <div>
            <hu-button @click="showTop">上方弹出</hu-button>
            <hu-button @click="showMiddle">中间弹出</hu-button>
            <hu-button @click="showBottom">下方弹出</hu-button>
        </div>
        <p><strong>代码</strong></p>
        <pre><code>{{content1}}</code></pre>

        <h2>自定义关闭选项</h2>
        通过设置autoClose属性指定是否需要自动关闭，以及自动关闭时间。通过设置closeButton属性，自定义关闭按钮的文字

        <p><strong>预览</strong></p>
        <div>
            <hu-button @click="setTime">上方弹出</hu-button>
            <hu-button @click="notAutoClose">上方弹出</hu-button>
        </div>
        <p><strong>代码</strong></p>
        <pre><code>{{content2}}</code></pre>

        <h2>支持HTML片段</h2>
        通过设置enableHtml属性表示是否允许用户传入HTML片段，默认不支持。

        <p><strong>预览</strong></p>
        <div>
            <hu-button @click="canHtml">使用HTML</hu-button>
        </div>
        <p><strong>代码</strong></p>
        <pre><code>{{content3}}</code></pre>


    </div>

</template>

<script>
    import Toast from '../../../src/Toast'
    import plugin from '../../../src/plugin.js'
    import Button from '../../../src/Button'
    import Vue from 'vue'
    Vue.use(plugin)

    export default{
        components:{
            'hu-toast':Toast,
            'hu-button':Button
        },
        methods:{
            showTop(){
                this.$toast('点击弹出提示')
            },
            showMiddle(){
                this.$toast('点击弹出提示',{position:'middle'})
            },
            showBottom(){
                this.$toast('点击弹出提示',{position:'bottom'})
            },
            setTime(){
                this.$toast('5秒后自动关闭',{autoClose:5})
            },
            notAutoClose(){
                this.$toast('点后边才会关闭喔',{
                    autoClose: false,
                    closeButton:{
                        text:'知道了',
                    }
                })
            },
            canHtml(){
                this.$toast(`<strong>我是html</strong>`,{enableHtml:true})
            }

        },
        data(){
            return {
                c1:'this.$toast(message,toastOptions)',
                content1:`
<hu-button @click="showTop">上方弹出</hu-button>
<hu-button @click="showMiddle">中间弹出</hu-button>
<hu-button @click="showBottom">下方弹出</hu-button>

showTop(){
    this.$toast('点击弹出提示')
},
showMiddle(){
    this.$toast('点击弹出提示',{position:'middle'})
},
showBottom(){
    this.$toast('点击弹出提示',{position:'bottom'})
}
`,
                content2:`
<hu-button @click="setTime">上方弹出</hu-button>
<hu-button @click="notAutoClose">上方弹出</hu-button>

setTime(){
    this.$toast('5秒后自动关闭',{autoClose:5})
},
notAutoClose(){
    this.$toast('点后边才会关闭喔',{
        autoClose: false,
        closeButton:{
            text:'知道了',
        }
    }),
}
`,
                content3:`
<hu-button @click="canHtml">使用HTML</hu-button>

canHtml(){
    this.$toast(\`<strong>我是html</strong>\`,{enableHtml:true})
}
`
            }
        }
    }
</script>

<style lang="scss">
    *{
        box-sizing: border-box;
    }
    h2{
        margin-top:50px;
    }
    .toast {
        z-index: 30 !important;
    }

</style>