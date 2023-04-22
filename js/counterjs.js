const counter=document.querySelector('#count');

const decrement=document.querySelector('#sub');

const increment=document.querySelector('#add')

const reset=document.querySelector('#reset');




increment.addEventListener('click',()=>{
  
 counter.innerText++;
 
  if (counter.innerText>0) {
  
  counter.style.color="green"
}

 
 })

decrement.addEventListener('click',()=>{
  
 counter.innerText--;
 
 if (counter.innerText<=0) {
      
      counter.innerText=0;
  counter.style.color="red"
}

 
  
})


reset.addEventListener('click',()=>{
  
    counter.innerText=0;
  
 if (counter.innerText==0) {
  counter.style.color="white"
}

 
 });


  
