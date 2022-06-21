const regTemplate=/\<template\>(.+?)\<\/template\>/;
const regScript=/\<script\>(.+?)\<\/script\>/;
const regFirstSign=/({)/

module.exports = function (source) {
    //换行
    const _source=source.replace(/[\r\n]/g,'')
    const template=_source.match(regTemplate)[1]
    console.log(template);
    const script=_source.match(regScript)[1];
    const finnalScript=script.replace(regFirstSign,'$1 template:'+'`'+template+'`'+',');
    console.log(finnalScript);
    return finnalScript
}