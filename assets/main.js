function revealFunction(){
    window.sr = ScrollReveal({duration:1350,distance:'150px',easing:'ease-out',})

    sr.reveal('.reveal-bottom',{origin:'bottom',reset:false,distanc:'50px'})
    sr.reveal('.reveal-left',{origin:'left',duration:600, reset:false,distance:'100px'})
    sr.reveal('.reveal-right',{origin:'right',duration:600,reset:false,distance:'100px'})
    sr.reveal('.reveal-top',{origin:'top',reset:false})
    sr.reveal('.reveal-scale',{origin:'top',reset:false})
}

window.addEventListener('load',()=>{
    revealFunction();
})