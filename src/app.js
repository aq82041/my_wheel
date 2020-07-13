import Vue from 'vue';
import Button from './Button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './ButtonGroup'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
    el:'#app',
    data(){
        return {
            loading1:false,
            loading2:false,
        }
    }

})