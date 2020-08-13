<template>
    <div class="wrapper">
        <h2>简单用法</h2>
        <p><strong>预览</strong></p>
        <hu-input value="输入框" class="item"></hu-input>
        <hu-input disabled value="禁用" class="item"></hu-input>
        <hu-input readonly value="只读"></hu-input>
        <p><strong>代码</strong></p>
        <pre><code>{{content}}</code></pre>

        <h2>提示错误信息</h2>
        <p><strong>预览</strong></p>
        <hu-input error="用户名不得少于10个字符"></hu-input>
        <p><strong>代码</strong></p>
        <pre><code>{{content1}}</code></pre>

        <h2>双向绑定</h2>
        <p><strong>预览</strong></p>
        <hu-input v-model="value"></hu-input>
        <div>value: {{value}}</div>
        <p><strong>代码</strong></p>
        <pre><code>{{content2}}</code></pre>

    </div>

</template>

<script>
    import Input from '../../../src/Input.vue';

    export default{
        components:{
            "hu-input":Input,
        },
        data(){
            return {
                content:`<hu-input value="输入框"></hu-input>

<hu-input disabled value="禁用"></hu-input>

<hu-input readonly value="只读"></hu-input>
`,
                content1:`<hu-input error="用户名不得少于10个字符"></hu-input>`,
                value:'前端',
                content2:`<hu-input v-model="value"></hu-input>
<div>value:{{value}}</div>
data:{
    value:'前端'
}`
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        margin-top:10px;
        > .item{
            margin-right:10px;
        }
    }
    h2{
        margin-top:50px;
    }

</style>