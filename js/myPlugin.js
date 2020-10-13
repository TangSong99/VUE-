(function(){
  const MyPlugin = {} ;
MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
       alert('全局方法或属性');
    }
  
    // 2. 添加全局资源
    Vue.directive('my-directive', {//v-text-upper
      bind (el, binding, vnode, oldVnode) {
        // 逻辑...
      }
    })
  
    // 3. 注入组件选项  .每次实例vue对象中调用一次
    Vue.mixin({
      created: function () {
        // 逻辑...
        alert('mixin');
      }
    })
  
    // 4. 添加实例方法（局部）
    Vue.prototype.$myMethod = function (methodOptions) {
      // 逻辑...
      alert('局部') ;
    }
  }
  //将插件 暴露给外部使用
  window.MyPlugin = MyPlugin ;

})()

