const photos =['./Photos/london1.jpeg','./Photos/london2.jpeg','./Photos/london3.jpg','./Photos/london4.jpeg','./Photos/london5.jpeg'];
let slider = document.getElementById('slide');
let i = 0;
const right =document.getElementById('btn');
right.addEventListener('click', changePhoto);

const left = document.getElementById('btn2');

left.addEventListener('click', changeLeft);

function changeLeft(){
slider.style.width="90%";
slider.src=photos[i];
if(i>0){
    i--
}
else{
    i= photos.length-1
}
   }   

        



 
 function changePhoto(){
slider.style.width="90%";
slider.src=photos[i]
 if(i < photos.length-1){
  i++
 }
 else{
     i = 0;
 }   
     }
 
 