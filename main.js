
 //Photo list
const photos =['./Photos/london1.jpeg','./Photos/london2.jpeg','./Photos/london3.jpg','./Photos/london4.jpeg','./Photos/london5.jpeg'];
let i = 0;

// Elements
const slider = document.getElementById('slide');
let buttons = document.querySelectorAll('.btn'); 


//Page functionality
    buttons.forEach(button=>{
        button.addEventListener('click', function(e){
            if(button.classList.contains('btn-right')){
                i++
                if(i > photos.length - 1){
                    i = 0
                }
                slider.src =photos[i]
            }
            if(button.classList.contains('btn-left')){
                i--
                if(i < 0){
                    i = photos.length -1;
                }
                slider.src = photos[i];
            }
        })
    })
 
 