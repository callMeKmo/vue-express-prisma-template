import{e as d,r as _,o as a,k as u,w as t,b as o,d as c,t as m,l as v,m as x,c as i,a as s,_ as b}from"./index-CSVR4rzK.js";const n=d({__name:"AccessButton",props:{to:{},icon:{}},setup(r){return(e,l)=>{const f=_("ui-icon"),h=_("ui-button"),p=_("router-link");return a(),u(p,{to:e.to},{default:t(()=>[o(h,{class:"w-[12vw] text-[1vw] font-semibold h-[6vh]",outlined:""},{default:t(()=>[e.icon?(a(),u(f,{key:0},{default:t(()=>[c(m(e.icon),1)]),_:1})):v("",!0),x(e.$slots,"default")]),_:3})]),_:3},8,["to"])}}}),g={class:"h-fit"},w=s("header",{class:"text-[1.2vw] font-[500]"},"Quick Access",-1),y={class:"flex justify-evenly mt-7 gap-x-3"},k=d({__name:"QuickAccess",setup(r){return(e,l)=>(a(),i("div",g,[w,s("div",y,[o(n,{to:"/dashboard/categories",icon:"category"},{default:t(()=>[c(" Categories ")]),_:1}),o(n,{to:"/dashboard/products",icon:"local_offer"},{default:t(()=>[c(" Products ")]),_:1}),o(n,{to:"/dashboard/categories/create"},{default:t(()=>[c(" Add category ")]),_:1}),o(n,{to:"/dashboard/products/create"},{default:t(()=>[c(" Add product ")]),_:1})])]))}}),$={},A=s("header",{class:"text-[1.2vw] font-[500]"},"Activites",-1),B=s("div",{class:"flex justify-evenly mt-14"},[s("h2",{class:"text-[1vw]"},"No recent activites.")],-1),C=[A,B];function N(r,e){return a(),i("div",null,C)}const V=b($,[["render",N]]),j={class:"w-full h-full grid justify-items-center items-center pt-16"},D={class:"w-[85%] h-[90%] flex flex-col gap-y-10 bg-gray-100 rounded-xl p-10"},Q=s("header",{class:"text-[1.3vw] font-semibold"}," Welcome back, Admin. ",-1),E=d({__name:"AdminDashboard",setup(r){return(e,l)=>(a(),i("div",j,[s("div",D,[Q,o(k),o(V)])]))}});export{E as default};
