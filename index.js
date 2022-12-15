console.log("Alright day 13, less go!!!!");
//Good one, I'm proud of You!!!!
var input=document.querySelector('input');
let equal=document.getElementById('equal-button');
let del=document.getElementById('del-button');
let clear=document.getElementById('clear-button');
let button=document.querySelectorAll('.button');

button.forEach(butt => {
   butt.addEventListener('click', ()=>{
     return  input.value+=butt.innerText;
   })
   
});

equal.addEventListener('click', ()=>{
   return  input.value=eval(input.value);
});

clear.addEventListener('click', ()=>{
   return  input.value=" ";
});

del.addEventListener('click', ()=>{
   return  input.value=input.value.slice(0,-1);
});








/*one.addEventListener('click',()=>{
   console.log("hii");
   return  input.value+='1';
});

two.addEventListener('click',()=>{
    console.log("hii");
    return  input.value+='2';
 });

 add.addEventListener('click',()=>{
    console.log("hii");
    return  input.value+=add.innerText;
 });

 let Sinput=input.value;
 console.log(Sinput);

 equal.addEventListener('click',()=>{
    console.log("hii");
    return  input.value=eval(input.value);
 });*/





