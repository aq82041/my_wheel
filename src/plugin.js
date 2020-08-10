import Toast from "./Toast";

export default{
    install(Vue,options){
        Vue.prototype.$toast=function(message,toastOptions){
            let Constructor=Vue.extend(Toast)
            let toast=new Constructor({
                propsData:{
                    closeButton: toastOptions.closeButton,
                    enableHtml:toastOptions.enableHtml,
                    autoClose: toastOptions.autoClose,
                    position:toastOptions.position,
                }
            })   //创建一个toast组件
            toast.$slots.default=message    //把信息放到插槽里
            toast.$mount()                  //挂载
            document.body.appendChild(toast.$el) //把toast组件放进页面
        }
    }
}