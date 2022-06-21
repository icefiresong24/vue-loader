import {
    eventPool,
    exPool
} from './pool';
export const event = function (vm) {
    for (let [node, info] of eventPool) {
        let {
            type,
            handler
        } = info;
        vm[handler.name] = handler;
        node.addEventListener(type, vm[handler.name], false);
    }
}

export const render = function (vm) {
    exPool.forEach((info, node) => {
        _render(vm, node, info)
    })
}
export const update = function (vm, key) {
    if (vm.$data.hasOwnProperty(key)) {
        exPool.forEach((info, node) => {
            if (info.key === key) {
                _render(vm, node, info)
            }
        })
    }
}


function _render(vm, node, info) {

    const {
        key,
        expression
    } = info;

    const r = new Function('vm', 'node', `with(vm){
        node.textContent=${expression}
    }`)

    r(vm, node)

}