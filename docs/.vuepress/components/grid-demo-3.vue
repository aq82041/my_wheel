<template>
    <div class="wrapper">
        <h2>设置偏移</h2>
        <div>通过设置offset属性，指定分栏的偏移量</div>
        <p><strong>预览</strong></p>
        <hu-row class="row">
            <hu-col span="8"><div class="colItem">8</div></hu-col>
            <hu-col span="8" offset="8"><div class="colItem">8</div></hu-col>
        </hu-row>
        <hu-row class="row">
            <hu-col span="6" offset="6"><div class="colItem">6</div></hu-col>
            <hu-col span="6" offset="6"><div class="colItem">6</div></hu-col>
        </hu-row>
        <hu-row class="row">
            <hu-col span="4"><div class="colItem">4</div></hu-col>
            <hu-col span="4" offset="4"><div class="colItem">4</div></hu-col>
            <hu-col span="4" offset="2"><div class="colItem">4</div></hu-col>
            <hu-col span="4" offset="2"><div class="colItem">4</div></hu-col>
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
        <hu-col span="8"><div class="colItem">8</div></hu-col>
        <hu-col span="8" offset="8"><div class="colItem">8</div></hu-col>
    </hu-row>

    <hu-row class="row">
        <hu-col span="6" offset="6"><div class="colItem">6</div></hu-col>
        <hu-col span="6" offset="6"><div class="colItem">6</div></hu-col>
    </hu-row>

    <hu-row class="row">
        <hu-col span="4"><div class="colItem">4</div></hu-col>
        <hu-col span="4" offset="4"><div class="colItem">4</div></hu-col>
        <hu-col span="4" offset="2"><div class="colItem">4</div></hu-col>
        <hu-col span="4" offset="2"><div class="colItem">4</div></hu-col>
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