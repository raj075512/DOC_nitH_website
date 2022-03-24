// top navabr stick to the top//
window.addEventListener("scroll",()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY >0 )
});


// const icon=faq.querySelector(".faq_icon i");
//   if(icon.className==="uil uil-list-ul")
//   {
//       icon.className="uil uil-cancel";
//   }
//   else{
//     icon.className="uil uil-cancel";
//   }


  //onclick button//

  const menu=document.querySelector(".nav_menu");
  const menubtn=document.querySelector("#open-btn");
  const closebtn=document.querySelector("#close_btn");

  menubtn.addEventListener("click",()=>{
    menu.style.display="flex";
    closebtn.style.display="inline-block";
    menubtn.style.display="none";
})
//for close menu//
const close_menu=()=>{
    menu.style.display="none";
    closebtn.style.display="none";
    menubtn.style.display="inline-block";
}
closebtn.addEventListener("click",close_menu);
