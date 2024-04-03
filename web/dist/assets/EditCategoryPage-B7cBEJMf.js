import{_ as x}from"./uploader-CugjJYdL.js";import{e as b,f as C,j as k,p as q,u as V,h as p,r as c,o as n,c as i,a as e,b as r,w as d,d as _}from"./index-CSVR4rzK.js";const j={class:"w-full h-full grid justify-items-center items-center pt-16"},z={class:"w-[85%] h-[90%] flex flex-col gap-y-10 bg-gray-100 rounded-xl p-7"},R={class:"flex justify-between"},B=e("h2",{class:"text-[1.3vw]"},"Create Category",-1),E={class:"flex gap-x-4"},N={class:"grid grid-cols-2 w-full place-items-center"},U={class:"grid w-1/2"},I=e("label",{id:"name-label",class:"text-[.8rem] translate-y-[50%] bg-gray-100 w-fit z-10 px-1 ml-2 text-gray-500"}," Category name ",-1),L={class:"grid col-[1/-1] w-full place-items-center py-7"},T=e("header",{class:"flex justify-between place-self-start pb-5"},[e("h2",{class:"text-[1.2vw]"},"Select picture")],-1),$={class:"h-[33vh] aspect-square grid grid-cols-1 grid-rows-1 overflow-hidden"},D={key:0,class:"bg-slate-400 h-[33vh] w-[100%] aspect-square rounded-3xl overflow-hidden place-items-center grid"},F=["src"],H={key:1,class:"bg-slate-400 h-[33vh] w-[100%] aspect-square rounded-3xl overflow-hidden"},O=e("img",{class:"w-full h-full z-10",src:x,alt:"upload image here"},null,-1),P=[O],J=b({__name:"EditCategoryPage",setup(S){const s=C({name:"",picture:null}),a=k(null),h=q(),u=V();p.get(`/api/category/${u.params.id}`).then(({status:t,data:l})=>{if(t==200){const{category:o}=l.data;s.name=o.name,a.value=o.picture}});const m=t=>{a.value=null,s.picture=null,s.picture=t.target.files[0],a.value=URL.createObjectURL(t.target.files[0])},f=async()=>{const{status:t}=await p.put(`/api/category/${u.params.id}`,s,{headers:{"Content-Type":"multipart/form-data"}});t==202&&h.push("/dashboard/categories")},g=async()=>{a.value=null};return(t,l)=>{const o=c("ui-button"),y=c("router-link"),w=c("ui-textfield");return n(),i("div",j,[e("div",z,[e("header",R,[B,e("div",E,[r(y,{to:"/dashboard"},{default:d(()=>[r(o,{class:"w-36 text-[.8vw] font-semibold h-12",outlined:""},{default:d(()=>[_(" Cancel ")]),_:1})]),_:1}),r(o,{class:"w-36 text-[.8vw] font-semibold h-12",unelevated:"",onClick:f},{default:d(()=>[_(" update ")]),_:1})])]),e("div",N,[e("section",U,[I,r(w,{modelValue:s.name,"onUpdate:modelValue":l[0]||(l[0]=v=>s.name=v),outlined:"",required:"","input-type":"text",attrs:{placeholder:"Category name",labelId:"#email-label",autocomplete:"off"},placeholder:"Category name"},null,8,["modelValue"])]),e("section",L,[T,e("section",$,[a.value?(n(),i("div",D,[e("img",{class:"w-[90%] h-[90%] z-10",src:a.value,onerror:g},null,8,F)])):(n(),i("div",H,P)),e("input",{type:"file",required:"",class:"h-[100%] aspect-square z-20 cursor-pointer opacity-0 rounded-3xl",onchange:m})])])])])])}}});export{J as default};
