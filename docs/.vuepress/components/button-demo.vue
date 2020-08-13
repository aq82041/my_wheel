<template>
    <div class="wrapper">
        <hu-button class="btn">
            默认按钮
        </hu-button>
        <hu-button icon="setting" class="btn">
            默认按钮
        </hu-button>
        <hu-button icon="download" icon-position="right" class="btn">
            下载
        </hu-button>
        <hu-button :loading="true" >
            加载中
        </hu-button>

        <p><strong>代码</strong></p>
        <pre><code>{{content}}</code></pre>
    </div>

</template>

<script>
    import Button from '../../../src/Button.vue';

    export default{
        components:{
            "hu-button":Button,
        },
        data(){
            return {
                content:`<hu-button>默认按钮</hu-button>

<hu-button icon="setting">
    默认按钮
</hu-button>

<hu-button icon="download" icon-position="right">
    下载
</hu-button>

<hu-button :loading="true" >
    加载中
</hu-button>
`
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        margin-top:20px;
        > .btn{
            margin-right:10px;
        }
    }

</style>