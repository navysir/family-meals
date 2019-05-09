import Vue from 'vue';

Vue.directive('fucus',{
    inserted: function(el) {
        el.focus();
        console.log(3223);
    }
});

// 注册一个全局自定义指令 `v-focus`
Vue.directive('foc', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
})

Vue.directive('demo', {
    bind: function (el, binding, vnode) {
        var s = JSON.stringify
        el.innerHTML =
            'name: '       + s(binding.name) + '<br>' +
            'value: '      + s(binding.value) + '<br>' +
            'expression: ' + s(binding.expression) + '<br>' +
            'argument: '   + s(binding.arg) + '<br>' +
            'modifiers: '  + s(binding.modifiers) + '<br>'
            // 'vnode keys: ' + Object.keys(vnode).join(', ')
    }
})

Vue.directive('tack', {
    bind(el, binding, vnode) {
        el.style.position = 'fixed';
        console.log(binding.aog=='left');
        const s = (binding.arg == 'left' ? 'left' : 'top');

        el.style[s] = binding.value + 'px';
        // el.style['color'] ='red';

    }
})