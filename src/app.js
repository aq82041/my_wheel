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

//单元测试
import chai from 'chai'

const expect = chai.expect;
{
    const Constructor=Vue.extend(vm)
    const vm=new Constructor({
        propsData:{
            icon:'setting'
        }
    })
    vm.$mount('#test')
    let useElement=vm.$el.querySelector('use')
    console.log(useElement);
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
    vm.$el.remove()
    vm.$destroy()
}

{
    const Constructor=Vue.extend(vm)
    const vm=new Constructor({
        propsData:{
            icon:'setting',
            loading:true
        }
    })
    vm.$mount('#test')
    let useElement=vm.$el.querySelector('use')
    console.log(useElement);
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
    vm.$el.remove()
    vm.$destroy()
}

{
    const div=document.createElement('div')
    document.body.appendChild(div)
    const Constructor=Vue.extend(vm)
    const vm=new Constructor({
        propsData:{
            icon:'left',
        }
    })
    vm.$mount(div)
    let svgElement=vm.$el.querySelector('svg')
    let {order}=window.getComputedStyle(svgElement)
    expect(order).to.equal('1')
    vm.$el.remove()
    vm.$destroy()
}

{
    const div=document.createElement('div')
    document.body.appendChild(div)
    const Constructor=Vue.extend(vm)
    const button=new Constructor({
        propsData:{
            icon:'left',
            iconPosition:'right'
        }
    })
    button.$mount(div)
    let svgElement=button.$el.querySelector('svg')
    let {order}=window.getComputedStyle(svgElement)
    expect(order).to.equal('2')
    button.$el.remove()
    button.$destroy()
}

{
    const div=document.createElement('div')
    document.body.appendChild(div)
    const Constructor=Vue.extend(vm)
    const gbutton=new Constructor({
        propsData:{
            icon:'left',
        }
    })
    gbutton.$mount(div)
    // 我希望看到这个函数被执行
    gbutton.$on('click',function(){
        console.log(1);
    })
    let button=gbutton.$el
    button.click()
}