let listElement = document.querySelectorAll('.list__button--click');
listElement.forEach(listElement=>{
    listElement.addEventListener('click',()=>{
       listElement.classList.toggle('arrow');
       let height = 0;
       let menu  = listElement.nextElementSibling;
       if(menu.clientHeight == "0"){
            height = menu.scrollHeight;
       }

       menu.style.height = `${height}px`
    })
})

let test = document.getElementById('menu-icon');
let nav = document.getElementById('nav');

test.addEventListener('click',()=>{
    src = test.getAttribute("src");
    
   if(src === "./assets/x.svg"){
       test.src="./assets/menu.svg";
   }else{
       test.src="./assets/x.svg"
   }
   
   nav.classList.toggle('move-nav');
    
})