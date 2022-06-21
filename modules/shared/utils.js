
const regString=/\'(.+?)\'/


export function getFirstChildNode(node) {
    
    const childNodes=node.childNodes;
    
    for (let index = 0; index < childNodes.length; index++) {
        if(childNodes[index].nodeType===1){
        return childNodes[index];}
        
    }
}

export function isExist($data,expression) {
    for (const key in $data) {
        if (expression.includes(key)&&expression!=key){
            return {
                key,
                expression
        }}else if(expression==key){
            return{key,
            expression:key}
        }else{
            return null
        }
    }
}

export function checkFunctionHasArgs(string) {
    const matchedFn=string.match(/(.+?)\((.+?)\)/);
    
    if(matchedFn){
        const argArr=matchedFn[2].split(',');
        
        const args = checkIsString(matchedFn[2])?argArr:argArr.map(item=>Number(item));
        return {
            methodName:matchedFn[1],
            args
        }
    }
}

export function checkIsString(str) {
    return str.match(regString)
}