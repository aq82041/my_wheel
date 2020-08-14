<template>
    <div class="wrapper">
        <p>
            <code>{{c1}}</code>：外层容器。当子元素中不包含 <code>{{c2}}</code> 时，全部子元素会垂直上下排列，否则会水平左右排列。
        </p>
        <p><code>{{c3}}</code>：顶栏容器。</p>
        <p><code>{{c2}}</code>：侧栏容器。</p>
        <p><code>{{c4}}</code>：主要内容容器。</p>
        <p><code>{{c5}}</code>：底栏容器。</p>

        <h2>三栏基础布局</h2>
        <p><strong>预览</strong></p>

        <hu-layout style="color: black;">
            <hu-header class="h">
                header
            </hu-header>
            <hu-content class="c">
                content
            </hu-content>
            <hu-footer class="f">
                footer
            </hu-footer>
        </hu-layout>
        <p><strong>代码</strong></p>
        <pre><code>{{content1}}</code></pre>

        <h2>加侧边栏布局</h2>
        <p>可自定义添加关闭按钮</p>
        <p><strong>预览</strong></p>

        <hu-layout style="color: black; overflow:hidden;">
            <hu-header class="h">
                header
            </hu-header>
            <hu-layout>
                <hu-sider class="s">
                    sider
                </hu-sider>
                <hu-content class="c">
                    content
                </hu-content>
            </hu-layout>
            <hu-footer class="f">
                footer
            </hu-footer>
        </hu-layout>
        <p><strong>代码</strong></p>
        <pre><code>{{content2}}</code></pre>

        <p><strong>预览</strong></p>
        <hu-layout style="color: black; overflow:hidden;">
            <hu-sider class="s s1">
                sider
            </hu-sider>
            <hu-layout>
                <hu-header class="h">
                    header
                </hu-header>
                <hu-content class="c">
                    content
                </hu-content>
                <hu-footer class="f">
                    footer
                </hu-footer>
            </hu-layout>
        </hu-layout>
        <p><strong>代码</strong></p>
        <pre><code>{{content3}}</code></pre>

    </div>

</template>

<script>
    import Sider from '../../../src/Sider'
    import Header from '../../../src/Header'
    import Content from '../../../src/Content'
    import Footer from '../../../src/Footer'
    import Layout from "../../../src/Layout";

    export default{
        components:{
            'hu-layout':Layout,
            "hu-sider":Sider,
            'hu-header':Header,
            'hu-content':Content,
            'hu-footer':Footer
        },
        data(){
            return {
                c1:'<hu-layout>',c2:'<hu-sider>',c3:'<hu-header>',c4:'<hu-content>',c5:'<hu-footer>',
                content1:`
    <hu-layout style="color: black;">
        <hu-header>
            header
        </hu-header>
        <hu-content>
            content
        </hu-content>
        <hu-footer>
            footer
        </hu-footer>
    </hu-layout>`,
                content2:`
    <hu-layout style="color: black;">
        <hu-header>
            header
        </hu-header>
        <hu-layout>
            <hu-sider>
                sider
            </hu-sider>
            <hu-content>
                content
            </hu-content>
        </hu-layout>
        <hu-footer>
            footer
        </hu-footer>
    </hu-layout>`,
                content3:`
    <hu-layout style="color: black;">
        <hu-sider>
            sider
        </hu-sider>
        <hu-layout>
            <hu-header>
                header
            </hu-header>
            <hu-content>
                content
            </hu-content>
            <hu-footer>
                footer
            </hu-footer>
        </hu-sider>
    </hu-layout>`
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
    .h{height:50px; background:#b3c0d1;display: flex;justify-content: center;align-items: center;}
    .c{height:200px; background:#e9eef3;display: flex;justify-content: center;align-items: center;}
    .f{height:50px; background:#b3c0d1;display: flex;justify-content: center;align-items: center;}
    .s{height:200px; width:200px;background:#d3dce6;display: flex;justify-content: center;align-items: center;
    &.s1{height:300px}
    }


</style>