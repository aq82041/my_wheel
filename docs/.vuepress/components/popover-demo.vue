<template>
    <div class="wrapper">
        <h2>基础用法</h2>
        通过设置position属性，可设置弹出的位置。默认是上方弹出。
        <p><strong>预览</strong></p>
        <div>
            <hu-popover class="p">
                <hu-button>上方弹出</hu-button>
                <template slot="content">
                    我在上边弹出来啦
                </template>
            </hu-popover>
            <hu-popover position="bottom" class="p">
                <hu-button>下方弹出</hu-button>
                <template slot="content">
                    我在下边弹出来啦
                </template>
            </hu-popover>
            <hu-popover position="left" class="p">
                <hu-button>左侧弹出</hu-button>
                <template slot="content">
                    我在左边弹出来啦
                </template>
            </hu-popover>
            <hu-popover position="right" class="p">
                <hu-button>右侧弹出</hu-button>
                <template slot="content">
                    我在右边弹出来啦
                </template>
            </hu-popover>
        </div>
        <p><strong>代码</strong></p>
        <pre><code>{{content1}}</code></pre>

        <h2>触发方式</h2>
        通过设置trigger属性，支持click和hover两种触发方式。默认是click激活。
        <p><strong>预览</strong></p>
        <hu-popover class="p">
            <hu-button>click激活</hu-button>
            <template slot="content">
                我在上边弹出来啦
            </template>
        </hu-popover>
        <hu-popover class="p" trigger="hover">
            <hu-button>hover激活</hu-button>
            <template slot="content">
                我在上边弹出来啦
            </template>
        </hu-popover>
        <p><strong>代码</strong></p>
        <pre><code>{{content2}}</code></pre>

    </div>

</template>

<script>
    import Popover from '../../../src/Popover'
    import Button from '../../../src/Button'

    export default{
        components:{
            'hu-popover':Popover,
            'hu-button':Button
        },
        data(){
            return {
                content1:`
<hu-popover>
    <hu-button>上方弹出</hu-button>
    <template slot="content">
        我在上边弹出来啦
    </template>
</hu-popover>
<hu-popover position="bottom">
    <hu-button>下方弹出</hu-button>
    <template slot="content">
        我在下边弹出来啦
    </template>
</hu-popover>
<hu-popover position="left">
    <hu-button>左侧弹出</hu-button>
    <template slot="content">
        我在左边弹出来啦
    </template>
</hu-popover>
<hu-popover position="right">
    <hu-button>右侧弹出</hu-button>
    <template slot="content">
        我在右边弹出来啦
    </template>
</hu-popover>
`,
                content2:`
<hu-popover>
    <hu-button>click激活</hu-button>
    <template slot="content">
        我在上边弹出来啦
    </template>
</hu-popover>
<hu-popover trigger="hover">
    <hu-button>hover激活</hu-button>
    <template slot="content">
        我在上边弹出来啦
    </template>
</hu-popover>
`,
            }
        }
    }
</script>

<style lang="scss" scoped>
    *{
        box-sizing: border-box;
    }
    h2{
        margin-top:50px;
    }
    .p{
        margin-right:20px;
     }

</style>