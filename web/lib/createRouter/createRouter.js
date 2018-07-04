/**
 * Router 极简前端路由实现
 * 
 * init 监听hash更新时的回调函数；
 * route 存储路由更新时的回调到回调的数组routes中，回调函数将负责对页面的更新；
 * refresh 负责执行当前url对应的回调函数，更新页面；
 * 并且暴露出去
 */


function Router() {
    this.routes = {};
    this.currentUrl = '';
}

Router.prototype.route = function(path, callback){
    this.routes[path] = callback || function(){};
}

Router.prototype.refresh = function(){
    this.currentUrl = location.hash.slice(1) || '/';
    this.routes[this.currentUrl] && this.routes[this.currentUrl]();
}

Router.prototype.init = function(){
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
}

window.Router = new Router();
window.Router.init();


