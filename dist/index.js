"use strict";var d=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=d(function(l,v){
var o=require('@stdlib/ndarray-base-numel-dimension/dist'),a=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),n=require('@stdlib/ndarray-base-data-buffer/dist'),q=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),c=require('@stdlib/stats-strided-dmeanstdev/dist').ndarray;function m(t){var r,e,i;return i=t[0],e=t[1],r=q(t[2]),c(o(i,0),r,n(i),a(i,0),u(i),n(e),a(e,0),u(e)),e}v.exports=m
});var f=s();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
