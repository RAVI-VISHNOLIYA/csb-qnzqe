parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
var e=document.getElementById("div-1"),n=document.getElementById("div-2"),t=document.getElementById("div-3"),d=document.getElementById("div-4"),l=document.getElementById("div-5"),y=!0,I=!0,s=!0,x=!0;function z(){y?(e.style.zIndex="1",l.style.zIndex="0",y=!1):(e.style.zIndex="0",l.style.zIndex="1",y=!0)}function c(){I?(n.style.zIndex="1",l.style.zIndex="0",I=!1):(n.style.zIndex="0",l.style.zIndex="1",I=!0)}function i(){s?(t.style.zIndex="1",l.style.zIndex="0",s=!1):(t.style.zIndex="0",l.style.zIndex="1",s=!0)}function m(){x?(d.style.zIndex="1",l.style.zIndex="0",x=!1):(d.style.zIndex="0",l.style.zIndex="1",x=!0)}function o(){l.style.zIndex="1",e.style.zIndex="0",n.style.zIndex="0",t.style.zIndex="0",d.style.zIndex="0"}
},{}]},{},["H99C"], null)
//# sourceMappingURL=/csb-qnzqe/src.2ad515b0.js.map