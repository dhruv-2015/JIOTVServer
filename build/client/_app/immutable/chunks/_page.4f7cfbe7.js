const n=async({fetch:e,params:t})=>{async function a(){return await(await e(`https://jiotv.data.cdn.jio.com/apis/v1.3/getepg/get?channel_id=${t.id}&offset=${t.day=="0"?"0":"-"+t.day}&langId=6`)).json()}return a()},c=Object.freeze(Object.defineProperty({__proto__:null,load:n},Symbol.toStringTag,{value:"Module"}));export{c as _,n as l};
//# sourceMappingURL=_page.4f7cfbe7.js.map
