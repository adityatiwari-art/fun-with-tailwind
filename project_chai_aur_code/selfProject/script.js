document.getElementById('hamburger').addEventListener('click',function(){
    document.querySelector(".hamlist").setAttribute("style","display:flex")
})
document.getElementById('cross').addEventListener('click',function(){
    document.querySelector(".hamlist").setAttribute("style","display:none")
})