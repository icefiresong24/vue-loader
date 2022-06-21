import {
    isExist,
    checkFunctionHasArgs
} from '../shared/utils.js';
import {
    vEvent
} from '../shared/eventTypes.js';
export const eventPool = new Map();
export const exPool = new Map();


const regExpr = /\{\{(.+?)\}\}/;

export default function (vm, methods) {

    const {
        $node,
        $data
    } = vm;

    const allNodes = $node.querySelectorAll('*');

    allNodes.forEach(node => {
        const vExpression = node.textContent

        const exerMatched = vExpression.match(regExpr);
        const vClickVal = node.getAttribute(`@${vEvent.vClick}`);

        if (exerMatched) {
            const poolInfo = isExist($data, exerMatched[1].trim());
            poolInfo && exPool.set(node, poolInfo);
        }

        if (vClickVal) {

            const fnInfo = checkFunctionHasArgs(vClickVal);


            const handler = fnInfo ? methods[fnInfo.methodName].bind(vm, ...fnInfo.args) : methods[vClickVal].bind(vm);

            eventPool.set(node, {
                type: 'click',
                handler
            });
            node.removeAttribute(`@${vEvent.vClick}`);
        }

    });
}