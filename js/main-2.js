let categoryA=document.querySelector("#c-left-sidebar .left-side .category-box .first-ul .first-li .category-a")
categoryA.addEventListener('click',function(){
this.nextElementSibling.classList.toggle('active')
})