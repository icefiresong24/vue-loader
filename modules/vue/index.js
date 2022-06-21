import {getFirstChildNode} from '../shared/utils.js';
import reactive from '../shared/reactive.js';
import pools from './pool.js';
import {event,render} from './event.js';
function createApp(component) {
    const vm={}
    const {
        data,
        methods,
        template,
    }=component;
    vm.mount=mount;
    vm.$node=createNode(template)
    
    reactive(vm,data)
    console.log(vm);
    pools(vm,methods)
    console.log(vm);
    event(vm)
    render(vm)
    console.log(vm);
    return vm
}
function createNode(template) {
    const _template=document.createElement('div');
    _template.innerHTML=template;
    let result=getFirstChildNode(_template);
    
    return result
}
function mount(el) {
    const app=document.querySelector(el);
    
    
    app.appendChild(this.$node);
}
export {
    createApp,
}