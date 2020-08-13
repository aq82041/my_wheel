<template>
    <div class="wrapper">
        <hu-button-group class="item">
            <hu-button icon="left">上一页</hu-button>
            <hu-button icon="right" icon-position="right">下一页</hu-button>
        </hu-button-group>
        <hu-button-group class="item">
            <hu-button icon="edit"></hu-button>
            <hu-button icon="share"></hu-button>
            <hu-button icon="clear"></hu-button>
        </hu-button-group>

        <p><strong>代码</strong></p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import ButtonGroup from '../../../src/ButtonGroup.vue';
    import Button from '../../../src/Button.vue';
    export default{
        name:"button-fi",
        components:{
            'hu-button-group':ButtonGroup,
            "hu-button":Button,
        },
        data(){
            return{
                content:`<hu-button-group>
        <hu-button icon="left">上一页</hu-button>
        <hu-button icon="right" icon-position="right">下一页</hu-button>
    </hu-button-group>

    <hu-button-group>
        <hu-button icon="edit"></hu-button>
        <hu-button icon="share"></hu-button>
        <hu-button icon="clear"></hu-button>
    </hu-button-group>`
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        margin-top:20px;
        > .item{
            margin-right:10px;
        }
    }
</style>