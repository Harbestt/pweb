const open_button=document.getElementById('display');
const displa=document.getElementById('ull');
const span=document.getElementById("close");
const icon=document.querySelector('i');
const header_desktop=document.querySelector("nav");
const menu_aclick=document.querySelectorAll('.hero ul li a')
const  mobile=document.querySelector('.header-nav ')

// console.log(mobile.innerHTML);
open_button.addEventListener("click", function() {
  displa.classList.toggle('active')
  // displa.style.display='Block'
  icon.classList.toggle('active')


}
); 
// window.onclick = function(event) {
//   if (event.target == displa){
//     displa.style.display = "none";
//   }
//  }
document.addEventListener('scroll', function () {
  var scroll_position=window.scrollY;
  if(scroll_position > 250){
    header_desktop.style.background='#191919'
  }else{
    header_desktop.style.background='transparent'
  }
  
})

menu_aclick.forEach((menu) => {
menu.addEventListener('click', function () {
  icon.classList.toggle('active')
  displa.classList.toggle('active')
})
  
});

 document.addEventListener('scroll', function() {
  let scrol=window.scrollY
  if(scrol >250){
    mobile.style.background="#101010"
    displa.style.background='#101010'
  }else{
    mobile.style.background='transparent'
    displa.style.background='transparent'
  }
 })
    
  
 
 