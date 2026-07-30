// script.js — small helpers
document.getElementById('year').textContent = new Date().getFullYear();
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const hash = a.getAttribute('href');
    if(hash.length>1){
      e.preventDefault();
      document.querySelector(hash).scrollIntoView({behavior:'smooth'});
    }
  });
});
