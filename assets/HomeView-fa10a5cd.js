import{g as u}from"./OmdbService-b1192f50.js";import{d as r,r as f,o as a,c,a as p,w as x,b as n,_ as l,e as v,f as M,v as g,g as A,p as b,h as y,i as I,F as m,j as S,k as d}from"./index-83907fd5.js";const k={class:"movie"},w=["src","alt"],$=r({__name:"AppMovie",props:{movie:{}},setup(t){const e=t;return(o,s)=>{const _=f("RouterLink");return a(),c("div",k,[p(_,{to:"/about/"+e.movie.imdbID},{default:x(()=>[n("img",{src:e.movie.Poster,alt:e.movie.Title},null,8,w)]),_:1},8,["to"])])}}});const F=l($,[["__scopeId","data-v-65644018"]]),B=t=>(b("data-v-ea898eac"),t=t(),y(),t),C={class:"form-container"},T=["onSubmit"],V=B(()=>n("div",{class:"button-container"},[n("button",null,"Search")],-1)),L=r({__name:"AppForm",emits:["search"],setup(t,{emit:e}){const o=v(""),s=()=>{e("search",o.value),o.value=""};return(_,i)=>(a(),c("div",C,[n("form",{onSubmit:A(s,["prevent"])},[M(n("input",{type:"text",placeholder:"movie title","onUpdate:modelValue":i[0]||(i[0]=h=>o.value=h)},null,512),[[g,o.value]]),V],40,T)]))}});const D=l(L,[["__scopeId","data-v-ea898eac"]]),N={class:"movies-container"},R=r({__name:"AppMovies",setup(t){const e=v([]);I(()=>{const s=localStorage.getItem("searchText")||"harry";u(s).then(_=>{e.value=_})});const o=async s=>{e.value=await u(s),localStorage.setItem("searchText",s)};return(s,_)=>(a(),c(m,null,[p(D,{onSearch:o}),n("div",N,[(a(!0),c(m,null,S(e.value,i=>(a(),d(F,{movie:i},null,8,["movie"]))),256))])],64))}});const j=l(R,[["__scopeId","data-v-0943966b"]]),E=r({__name:"AppMain",setup(t){return(e,o)=>(a(),c("main",null,[p(j)]))}}),U=r({__name:"HomeView",setup(t){return(e,o)=>(a(),d(E))}});export{U as default};
