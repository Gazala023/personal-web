const menuButton= document.getElementById('menu-button')
const menuItem= document.getElementById('menu-item')
menuButton.addEventListener('click',function(){
menuItem.classList.toggle('open')
})
