
function hearts(count=18){
  const symbols=['♥','❤','💕','💗','✨'];
  for(let i=0;i<count;i++){
    const h=document.createElement('div');
    h.className='heart';
    h.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    h.style.left=(Math.random()*100)+'vw';
    h.style.fontSize=(14+Math.random()*25)+'px';
    h.style.animationDuration=(3.5+Math.random()*3)+'s';
    h.style.animationDelay=(Math.random()*1.8)+'s';
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),7500);
  }
}
function showSurprise(){
  const box=document.getElementById('surprise');
  if(box){box.hidden=false; box.scrollIntoView({behavior:'smooth',block:'center'});}
  hearts(30);
}
setTimeout(()=>hearts(10),600);
