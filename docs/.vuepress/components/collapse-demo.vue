<template>
    <div class="wrapper">
        <h2>基础用法</h2>
        可同时展开多个面板。可通过selected属性传入初始被打开的选项，并且能双向绑定。
        <p><strong>预览</strong></p>
        <div>
            <hu-collapse :selected.sync=" selected ">
                <hu-collapse-item title="第一条" name="first">这是第一条内容</hu-collapse-item>
                <hu-collapse-item title="第二条" name="second">这是第二条内容</hu-collapse-item>
                <hu-collapse-item title="第三条" name="third">这是第三条内容</hu-collapse-item>
            </hu-collapse>
            selected：{{selected}}
        </div>
        <p><strong>代码</strong></p>
        <pre><code>{{content1}}</code></pre>

        <h2>手风琴效果</h2>
        通过设置single属性，实现每次只能打开一个面板。
        <p><strong>预览</strong></p>
        <div>
            <hu-collapse :selected.sync=" selected " single>
                <hu-collapse-item title="第一条" name="first">这是第一条内容</hu-collapse-item>
                <hu-collapse-item title="第二条" name="second">这是第二条内容</hu-collapse-item>
                <hu-collapse-item title="第三条" name="third">这是第三条内容</hu-collapse-item>
            </hu-collapse>
            selected：{{selected}}
        </div>
        <p><strong>代码</strong></p>
        <pre><code>{{content2}}</code></pre>

    </div>

</template>

<script>
    import Collapse from '../../../src/Collapse'
    import CollapseItem from '../../../src/Collapse-Item'

    export default{
        components:{
            'hu-collapse':Collapse,
            'hu-collapse-item':CollapseItem
        },
        data(){
            return {
                selected:['first'],
                content1:`
<hu-collapse :selected.sync=" selected ">
    <hu-collapse-item title="第一条" name="first">这是第一条内容</hu-collapse-item>
    <hu-collapse-item title="第二条" name="second">这是第二条内容</hu-collapse-item>
    <hu-collapse-item title="第三条" name="third">这是第三条内容</hu-collapse-item>
</hu-collapse>
selected：{{selected}}

data:{
    selected:['first'],
}
`,
                content2:`
<hu-collapse :selected.sync=" selected " single>
    <hu-collapse-item title="第一条" name="first">这是第一条内容</hu-collapse-item>
    <hu-collapse-item title="第二条" name="second">这是第二条内容</hu-collapse-item>
    <hu-collapse-item title="第三条" name="third">这是第三条内容</hu-collapse-item>
</hu-collapse>
selected：{{selected}}

data:{
    selected:['first'],
}
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

</style>