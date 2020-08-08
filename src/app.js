import Vue from 'vue';
import Button from './Button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './ButtonGroup'
import Input from "./Input";
import Row from "./Row";
import Col from "./Col";

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)

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
