import{r as t,h as n,g as i}from"./p-8d9aae43.js";import{g as a}from"./p-a6a32ff6.js";function h(t){return t<0?-1:1}function s(t,n,i){const a=n[0]-t[0];return a?(3*(n[1]-t[1])/a-i)/2:i}function e(t,n,i,a,h){const[s,e]=t,[r,o]=n,$=(r-s)/3;return`C ${h([s+$,e+$*i]).join(",")} ${h([r-$,o-$*a]).join(",")} ${h([r,o]).join(",")}`}const r=class{constructor(n){t(this,n),this.data=[],this.width=300,this.height=100,this.maskId=`calcite-graph-mask-${a()}`}componentWillUpdate(){}render(){const{data:t,width:i,height:a,highlightMax:r,highlightMin:o}=this,$=this.maskId;if(!t||0===t.length)return n("svg",{preserveAspectRatio:"none",class:"svg",viewBox:`0 0 ${i} ${a}`,width:i,height:a});const{min:c,max:p}=function(t){const[n,i]=t[0];return t.reduce(({min:t,max:n},[i,a])=>({min:[Math.min(t[0],i),Math.min(t[1],a)],max:[Math.max(n[0],i),Math.max(n[1],a)]}),{min:[n,i],max:[n,i]})}(t),d=function({width:t,height:n,min:i,max:a}){const h=a[0]-i[0],s=a[1]-i[1];return i=>[i[0]/h*t,n-i[1]/s*n]}({min:c,max:p,width:i,height:a}),[g]=d([o,p[1]]),[l]=d([r,p[1]]),m=function({data:t,min:n,max:i,t:a}){if(0===t.length)return"";const[r,o]=a(t[0]),[$,c]=a(n),[p]=a(i);let d,g,l;const m=t.reduce((n,i,r)=>{if(g=t[r-2],l=t[r-1],r>1){const t=function(t,n,i){const a=n[0]-t[0],s=i[0]-n[0],e=(n[1]-t[1])/(a||s<0&&0),r=(i[1]-n[1])/(s||a<0&&0),o=(e*s+r*a)/(a+s);return(h(e)+h(r))*Math.min(Math.abs(e),Math.abs(r),.5*Math.abs(o))||0}(g,l,i),r=void 0===d?s(g,l,t):d,o=e(g,l,r,t,a);return d=t,`${n} ${o}`}return n},`M ${$},${c} L ${$},${o} L ${r},${o}`),u=t[t.length-1];return`${m} ${e(l,u,d,s(l,u,d),a)} L ${p},${c} Z`}({data:t,min:c,max:p,t:d});return n("svg",{preserveAspectRatio:"none",class:"svg",viewBox:`0 0 ${i} ${a}`,width:i,height:a},void 0!==o?n("svg",{preserveAspectRatio:"none",class:"svg",viewBox:`0 0 ${i} ${a}`,width:i,height:a},n("mask",{id:`${$}1`,x:"0%",y:"0%",width:"100%",height:"100%"},n("path",{fill:"white",d:`\n              M 0,0\n              L ${g-1},0\n              L ${g-1},${a}\n              L 0,${a}\n              Z\n            `})),n("mask",{id:`${$}2`,x:"0%",y:"0%",width:"100%",height:"100%"},n("path",{fill:"white",d:`\n              M ${g+1},0\n              L ${l-1},0\n              L ${l-1},${a}\n              L ${g+1}, ${a}\n              Z\n            `})),n("mask",{id:`${$}3`,x:"0%",y:"0%",width:"100%",height:"100%"},n("path",{fill:"white",d:`\n                  M ${l+1},0\n                  L ${i},0\n                  L ${i},${a}\n                  L ${l+1}, ${a}\n                  Z\n                `})),n("path",{d:m,class:"graph-path",mask:`url(#${$}1)`}),n("path",{d:m,class:"graph-path--highlight",mask:`url(#${$}2)`}),n("path",{d:m,class:"graph-path",mask:`url(#${$}3)`})):n("path",{d:m,class:"graph-path"}))}get el(){return i(this)}};r.style=":host([hidden]){display:none}.svg{fill:currentColor;stroke:transparent;margin:0;padding:0;display:block}";export{r as calcite_graph}