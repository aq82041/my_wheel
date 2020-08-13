<template>
    <div class="wrapper">
        <h2>分栏间隔</h2>
        <div>通过设置gutter属性，指定分栏之间的间隔</div>
        <p><strong>预览</strong></p>
        <hu-row class="row" gutter="10">
            <hu-col span="12"><div class="colItem">12</div></hu-col>
            <hu-col span="12"><div class="colItem">12</div></hu-col>
        </hu-row>
        <hu-row class="row" gutter="10">
            <hu-col span="8"><div class="colItem">8</div></hu-col>
            <hu-col span="8"><div class="colItem">8</div></hu-col>
            <hu-col span="8"><div class="colItem">8</div></hu-col>
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
    <hu-row class="row" gutter="10">
        <hu-col span="12"><div class="colItem">12</div></hu-col>
        <hu-col span="12"><div class="colItem">12</div></hu-col>
    </hu-row>

    <hu-row class="row" gutter="10">
        <hu-col span="8"><div class="colItem">8</div></hu-col>
        <hu-col span="8"><div class="colItem">8</div></hu-col>
        <hu-col span="8"><div class="colItem">8</div></hu-col>
    </hu-row>
    *{
        box-sizing: border-box;
    }`
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
    .wrapper{
        margin-top:20px;
        > .row{
            margin:20px 0;
        }
    }
    .colItem{
        outline:1px solid #99a9bf;
        height:40px;
        display:flex;
        justify-content: center;
        align-items: center;
        background: #d3dce6;
    }

</style>