import Vue from 'vue';
import Button from './Button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './ButtonGroup'
import Input from "./Input";
import Row from "./Row";
import Col from "./Col";
import Layout from './Layout'
import Sider from './Sider'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'


Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-sider',Sider)
Vue.component('g-header',Header)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)

new Vue({
    el:'#app',
    data(){
        return {
            loading1:false,
            loading2:false,
            message:'你好',
        }
    },
    methods:{
        x(e){
            console.log(e.target.value);
        }
    }
})

//单元测试
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect;
