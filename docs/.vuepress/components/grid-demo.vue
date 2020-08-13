<template>
    <div class="wrapper">
        <h2>基础布局</h2>
        <div>通过设置span属性，创建基础的栅格布局</div>
        <p><strong>预览</strong></p>

        <hu-row class="row">
            <hu-col span="24"><div class="col">24</div></hu-col>
        </hu-row>
        <hu-row class="row">
            <hu-col span="12"><div class="col">12</div></hu-col>
            <hu-col span="12"><div class="col">12</div></hu-col>
        </hu-row>
        <hu-row class="row">
            <hu-col span="8"><div class="col">8</div></hu-col>
            <hu-col span="8"><div class="col">8</div></hu-col>
            <hu-col span="8"><div class="col">8</div></hu-col>
        </hu-row>
        <hu-row class="row">
            <hu-col span="6"><div class="col">6</div></hu-col>
            <hu-col span="6"><div class="col">6</div></hu-col>
            <hu-col span="6"><div class="col">6</div></hu-col>
            <hu-col span="6"><div class="col">6</div></hu-col>
        </hu-row>
        <hu-row class="row">
            <hu-col span="4"><div class="col">4</div></hu-col>
            <hu-col span="4"><div class="col">4</div></hu-col>
            <hu-col span="4"><div class="col">4</div></hu-col>
            <hu-col span="4"><div class="col">4</div></hu-col>
            <hu-col span="4"><div class="col">4</div></hu-col>
            <hu-col span="4"><div class="col">4</div></hu-col>
        </hu-row>

        <p><strong>代码</strong></p>
        <pre><code>{{content}}</code></pre>

    </div>

</template>

<script>
    import Row from '../../../src/Row.vue';
    import Col from '../../../src/Col.vue';

    export default{
        components:{
            "hu-row":Row,
            'hu-col':Col
        },
        data(){
            return {
                content:`
    <hu-row class="row">
        <hu-col span="24"><div class="col">24</div></hu-col>
    </hu-row>

    <hu-row class="row">
        <hu-col span="12"><div class="col">12</div></hu-col>
        <hu-col span="12"><div class="col">12</div></hu-col>
    </hu-row>

    <hu-row class="row">
        <hu-col span="8"><div class="col">8</div></hu-col>
        <hu-col span="8"><div class="col">8</div></hu-col>
        <hu-col span="8"><div class="col">8</div></hu-col>
    </hu-row>

    <hu-row class="row">
        <hu-col span="6"><div class="col">6</div></hu-col>
        <hu-col span="6"><div class="col">6</div></hu-col>
        <hu-col span="6"><div class="col">6</div></hu-col>
        <hu-col span="6"><div class="col">6</div></hu-col>
    </hu-row>

    <hu-row class="row">
        <hu-col span="4"><div class="col">4</div></hu-col>
        <hu-col span="4"><div class="col">4</div></hu-col>
        <hu-col span="4"><div class="col">4</div></hu-col>
        <hu-col span="4"><div class="col">4</div></hu-col>
        <hu-col span="4"><div class="col">4</div></hu-col>
        <hu-col span="4"><div class="col">4</div></hu-col>
    </hu-row>`
            }
        }
    }
</script>

<style lang="scss" scoped>
    h2{
        margin-top:50px;
    }
    .wrapper{
        margin-top:20px;
        > .row{
            margin:20px 0;
            >.col{
                height:40px;
                outline:1px solid #99a9bf;
                display:flex;
                justify-content: center;
                align-items: center;
                background: #d3dce6;
            }
        }
    }

</style>