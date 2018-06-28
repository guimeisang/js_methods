/**
 * 设置cookie
 * @param {*} name 
 * @param {*} value 
 * @param {*} time 
 */

function setCookie(name, value, time){
    var strsec = getSec(time)
    var exp = new Date()
    exp.setTime(exp.getTime() + strsec * 1)
    document.cookie = name + '=' + escape(value) + ';expire=' + exp.toGMTString();
}

function getSec(time){
    return time * 24 * 60 * 60 * 1000
}