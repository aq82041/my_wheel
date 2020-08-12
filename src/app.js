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
import plugin from './plugin.js'
import TabsHead from './Tabs-Head'
import TabsBody from './Tabs-Body'
import TabsItem from './Tabs-Item'
import TabsPane from './Tabs-Pane'
import Tabs from './Tabs'
import Popover from "./Popover";

Vue.use(plugin)

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
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-tabs',Tabs)
Vue.component('g-popover',Popover)

new Vue({
    el:'#app',
    data(){
        return {
            selectedTab:'sports'
        }
    },
    methods:{
        x(e){
            console.log(e.target.value);
        },
        showToast(){
            this.$toast('很多',{
                enableHtml: false,
                autoClose: 1,
                position:'bottom',
            })
        },

    },
})

//单元测试
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect;
