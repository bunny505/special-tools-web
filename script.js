
const slider = document.getElementById('brightness')
const loginForm = document.getElementById('loginForm')
const glow = document.getElementById('glow')

if(slider){
slider.addEventListener('input',(e)=>{

const val=e.target.value

glow.style.opacity=val
loginForm.style.opacity=val

if(val>0.1){
loginForm.style.transform="translateY(0)"
}else{
loginForm.style.transform="translateY(20px)"
}

})
}
