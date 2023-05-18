import{h as c,L as p,s as i,i as k,n as L,j as b,o as v,p as S,d as f,l as x,e as h,f as d,g as B,c as _}from"./footer-9aaf24de.js";const a="/js_77_Stanislavbox/assets/books-5b331ba2.png",n="/js_77_Stanislavbox/assets/books@2x-5cbbac78.png",E="/js_77_Stanislavbox/assets/sprite-3462b723.svg",s={shopListEmpty:document.querySelector(".shopping-list-empty"),shopList:document.querySelector("#booksShopingList"),startMarkup:`<p class="shopping-list-empty-message">
    This page is empty, add some books and proceed to order.
  </p>
  <picture class="shopping-list-empty-img">
    <source
      srcset="${a} 1x, ${n} 2x"
      media="(min-width:1440px)"
    />
    <source
      srcset="${a} 1x, ${n} 2x"
      media="(min-width:768px)"
    />
    <source
      srcset="${a} 1x, ${n} 2x"
      media="(max-width:767px)"
    />
    <img src="${a}" alt="books" />
  </picture>`,arrBtnsID:[]};let t=c.load(p);async function $(){if(t){if(!JSON.parse(t).length)return s.shopList.style.display="none",i(),s.shopListEmpty.insertAdjacentHTML("beforeend",s.startMarkup)}else return s.shopList.style.display="none",i(),s.shopListEmpty.insertAdjacentHTML("beforeend",s.startMarkup);s.shopList.style.display="flex",t=JSON.parse(t);try{let e=[];for(let o=0;o<t.length;o+=1){const r=await k(t[o]);e.push(r)}const u=e.map(({_id:o,author:r,book_image:m,description:g,title:l,list_name:y})=>`<li class="sh-list-item">               
                    <img class="sh-list-book-img" src="${m}"" alt="Book's cover. ${l}" />
                    <div class="sh-list-item-main-wrapper">
                       <div class="sh-list-item-top-wrapper">
                         <div class="sh-list-titles">
                           <h2 class="sh-list-book-title">${l}</h2>
                           <h3 class="sh-list-book-category">${y}</h3>
                         </div>                      
                       <button class="sh-list-btn" data_id="${o}" type="button">
                         <svg class="sh-list-icon" width="16" height="16">
                           <use href="${E}#icon-trash"></use>
                         </svg>
                       </button>
                    </div>                       
                    <p class="sh-list-book-descr">${g}</p>
                    <div class="sh-list-item-bottom-wrapper">
                       <h3 class="sh-list-book-author">${r}</h3>
                       <ul class="sh-list-shops-list">
                         <li class="sh-list-shops-list-item">
                           <a href="" class="sh-list-shops-link sh-list-shops-amazon"></a>
                         </li>
                         <li class="sh-list-shops-list-item">
                            <a href="" class="sh-list-shops-link sh-list-shops-apple"></a>
                         </li>
                         <li class="sh-list-shops-list-item">
                           <a href="" class="sh-list-shops-link sh-list-shops-bs"></a>
                         </li>
                       </ul>
                    </div>
                  </div>
                </li>`).join("");i(),s.shopList.innerHTML=u,t.forEach(o=>document.querySelector(`[data_id="${o}"]`).addEventListener("click",O))}catch(e){L.exports.Notify.failure(e.message)}}async function O(e){if(i(),b(e),t=c.load(p),JSON.parse(t).length){e.currentTarget.closest(".sh-list-item").style.display="none",i();return}s.shopList.innerHTML="",s.shopList.style.display="none",s.shopListEmpty.innerHTML=s.startMarkup,i()}v();S();const M=document.querySelector(".button-registraition"),I=document.querySelector(".button-login");M.addEventListener("click",f);I.addEventListener("click",x);const T=document.getElementById("logOutButtonBurger"),q=document.getElementById("logOutButton");q.addEventListener("click",h);T.addEventListener("click",h);const w=document.querySelector(".burger_user_board_signup"),j=document.querySelector(".user_board_signup");j.addEventListener("click",d);w.addEventListener("click",d);const F=document.querySelector(".close-modal");F.addEventListener("click",B);_();$();
