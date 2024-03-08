import{S,a as $,i as u}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function w(i){let s=i.hits.map(({webformatURL:a,largeImageURL:l,tags:e,likes:t,views:r,comments:b,downloads:v})=>`<li class="gallery-image">
  <div class="wrapper-image">
    <a href="${l}"
      ><img
        class="image"
        src="${a}"
        alt="${e}"
        width="360"
        height="200"
    /></a>
  </div>
  <div class="wrapper-description">
    <ul class="list-image">
      <li class="list-image-item">
        <h3 class="list-image-heading">Likes</h3>
        <p class="list-image-desc">${t}</p>
      </li>
      <li class="list-image-item">
        <h3 class="list-image-heading">Views</h3>
        <p class="list-image-desc">${r}</p>
      </li>
      <li class="list-image-item">
        <h3 class="list-image-heading">Comments</h3>
        <p class="list-image-desc">${b}</p>
      </li>
      <li class="list-image-item">
        <h3 class="list-image-heading">Downloads</h3>
        <p class="list-image-desc">${v}</p>
      </li>
    </ul>
  </div>
</li>`).join("");return d.classList.remove("is-hidden"),n.insertAdjacentHTML("beforeend",s)}const x="/goit-js-hw-12/assets/x-octagon-d0a00fcf.svg",q={captionsData:"alt",captionDelay:250},E=new S(".gallery-image a",q);let p=0;async function h(i){await $.get(i).then(({data:s})=>{if(s.hits.length===0){u.error({title:"Error",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",theme:"dark",iconUrl:x,iconColor:"#fafafb",closeOnEscape:!0,maxWidth:"432px",position:"topRight"}),n.innerHTML="";return}if(p=Math.ceil(s.totalHits/m.per_page),o===p){u.info({message:"Sorry, there are no images",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#2e2f42",theme:"dark",closeOnEscape:!0,maxWidth:"432",position:"topRight"}),d.classList.add("is-hidden");return}w(s);const a=n.getBoundingClientRect().height;return window.scrollBy({top:a,behavior:"smooth"}),E.refresh()}).catch(s=>{console.log(s)}).finally(()=>{f.classList.add("is-hidden"),g.value=""})}const g=document.querySelector("input[name=message]"),n=document.querySelector(".gallery-images"),f=document.querySelector(".loader"),d=document.querySelector(".load-btn"),C=document.querySelector(".form"),y="42641678-dfe8c371983b31bc21d252361",m=new URLSearchParams({per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0});let o,L,c;C.addEventListener("submit",i=>{i.preventDefault(),n.innerHTML=null,f.classList.remove("is-hidden"),d.classList.add("is-hidden"),L=g.value,o=1,c=`https://pixabay.com/api/?key=${y}&q=${g.value}&${m}&page=${o}`,h(c)});d.addEventListener("click",()=>{o+=1,c=`https://pixabay.com/api/?key=${y}&q=${L}&${m}&page=${o}`,h(c)});
//# sourceMappingURL=commonHelpers.js.map
