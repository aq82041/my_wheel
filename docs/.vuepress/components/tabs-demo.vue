<template>
    <div class="wrapper">
        <h2>基础用法</h2>
        <p><strong>预览</strong></p>

        <hu-tabs selected="1" class="t">
            <hu-tabs-head>
                <hu-tabs-item name="1" class="ti">用户管理</hu-tabs-item>
                <hu-tabs-item name="2" class="ti">配置管理</hu-tabs-item>
                <hu-tabs-item name="3" class="ti">角色管理</hu-tabs-item>
            </hu-tabs-head>
            <hu-tabs-body>
                <hu-tabs-pane name="1">用户管理</hu-tabs-pane>
                <hu-tabs-pane name="2">配置管理</hu-tabs-pane>
                <hu-tabs-pane name="3">角色管理</hu-tabs-pane>
            </hu-tabs-body>
        </hu-tabs>
        <p><strong>代码</strong></p>
        <pre><code>{{content1}}</code></pre>

        <h2>禁用状态</h2>
        通过设置disabled属性，添加禁用状态选项
        <p><strong>预览</strong></p>
        <hu-tabs selected="1" class="t">
            <hu-tabs-head>
                <hu-tabs-item name="1" class="ti">用户管理</hu-tabs-item>
                <hu-tabs-item name="2" class="ti" disabled>配置管理</hu-tabs-item>
                <hu-tabs-item name="3" class="ti">角色管理</hu-tabs-item>
            </hu-tabs-head>
            <hu-tabs-body>
                <hu-tabs-pane name="1">用户管理</hu-tabs-pane>
                <hu-tabs-pane name="2">配置管理</hu-tabs-pane>
                <hu-tabs-pane name="3">角色管理</hu-tabs-pane>
            </hu-tabs-body>
        </hu-tabs>
        <p><strong>代码</strong></p>
        <pre><code>{{content2}}</code></pre>


    </div>

</template>

<script>
    import TabsHead from '../../../src/Tabs-Head'
    import TabsBody from '../../../src/Tabs-Body'
    import TabsItem from '../../../src/Tabs-Item'
    import TabsPane from '../../../src/Tabs-Pane'
    import Tabs from '../../../src/Tabs'

    export default{
        components:{
            'hu-tabs':Tabs,
            "hu-tabs-pane":TabsPane,
            'hu-tabs-item':TabsItem,
            'hu-tabs-body':TabsBody,
            'hu-tabs-head':TabsHead
        },
        data(){
            return {
                content1:`
    <hu-tabs selected="1">
        <hu-tabs-head>
            <hu-tabs-item name="1">用户管理</hu-tabs-item>
            <hu-tabs-item name="2">配置管理</hu-tabs-item>
            <hu-tabs-item name="3">角色管理</hu-tabs-item>
        </hu-tabs-head>
        <hu-tabs-body>
            <hu-tabs-pane name="1">用户管理</hu-tabs-pane>
            <hu-tabs-pane name="2">配置管理</hu-tabs-pane>
            <hu-tabs-pane name="3">角色管理</hu-tabs-pane>
        </hu-tabs-body>
    </hu-tabs>`,
                content2:`
    <hu-tabs selected="1">
        <hu-tabs-head>
            <hu-tabs-item name="1">用户管理</hu-tabs-item>
            <hu-tabs-item name="2" disabled>配置管理</hu-tabs-item>
            <hu-tabs-item name="3">角色管理</hu-tabs-item>
        </hu-tabs-head>
        <hu-tabs-body>
            <hu-tabs-pane name="1">用户管理</hu-tabs-pane>
            <hu-tabs-pane name="2">配置管理</hu-tabs-pane>
            <hu-tabs-pane name="3">角色管理</hu-tabs-pane>
        </hu-tabs-body>
    </hu-tabs>`
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
    .ti{
        margin-right:30px;
        font-size: 14px;
    }
    .t{
        border:1px solid #ddd;
        padding:20px;
    }

</style>