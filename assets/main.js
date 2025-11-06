function animateValue(el,end,duration){
  if(!el) return;
  const start=0,range=end-start,startTime=performance.now();
  function step(now){ const p=Math.min((now-startTime)/duration,1); el.textContent=Math.floor(p*range+start); if(p<1) requestAnimationFrame(step);} requestAnimationFrame(step);
}

window.addEventListener('DOMContentLoaded',()=>{
  const y = document.getElementById('year');
  if(y) y.textContent=new Date().getFullYear();

  animateValue(document.getElementById('statHours'),120,1200);
  animateValue(document.getElementById('statStudents'),240,1300);
  animateValue(document.getElementById('statMentors'),45,1400);

  const slides=document.getElementById('slides');
  const dots=slides ? [...document.querySelectorAll('.dot')] : [];
  if(slides && dots.length){
    let idx=0; setInterval(()=>{
      idx=(idx+1)%dots.length;
      slides.style.transform=`translateX(-${idx*100}%)`;
      dots.forEach((d,i)=>d.classList.toggle('active',i===idx));
    },4500);
  }
});

function handleContact(e){
  e.preventDefault();
  const fd=new FormData(e.target);
  const subject=encodeURIComponent('Neileich contact from '+fd.get('name'));
  const body=encodeURIComponent(`Name: ${fd.get('name')}\nEmail: ${fd.get('email')}\n\n${fd.get('message')}`);
  window.location.href=`mailto:info@neileich.org?subject=${subject}&body=${body}`;
  const t=document.getElementById('contactThanks');
  if(t) t.hidden=false;
  e.target.reset();
}