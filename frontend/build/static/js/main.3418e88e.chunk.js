(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{39:function(t,e,c){"use strict";c.r(e);var n=c(2),s=c.n(n),r=c(13),a=c.n(r),i=c(14),d=c.n(i),j=c(0);var l=function(){const[t,e]=Object(n.useState)(null),[c,s]=Object(n.useState)([]);return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Calculadora de Dist\xe2ncia entre CEPs"}),Object(j.jsxs)("form",{onSubmit:async e=>{e.preventDefault();const c=new FormData;c.append("file",t);try{const t=await d.a.post("http://localhost:8000/upload-csv/",c,{headers:{"Content-Type":"multipart/form-data"}});s(t.data)}catch(n){console.error("Erro ao fazer upload do CSV",n)}},children:[Object(j.jsx)("input",{type:"file",accept:".csv",onChange:t=>{e(t.target.files[0])}}),Object(j.jsx)("button",{type:"submit",children:"Calcular Dist\xe2ncias"})]}),c.length>0&&Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Resultados"}),Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"CEP A"}),Object(j.jsx)("th",{children:"CEP B"}),Object(j.jsx)("th",{children:"Dist\xe2ncia (km)"})]})}),Object(j.jsx)("tbody",{children:c.map(((t,e)=>{var c;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.CEP_A}),Object(j.jsx)("td",{children:t.CEP_B}),Object(j.jsx)("td",{children:null!==(c=t.Distancia_km)&&void 0!==c?c:"Indispon\xedvel"})]},e)}))})]})]})]})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.3418e88e.chunk.js.map