function playSound(sounds) 
    {
        let sound = document.getElementById("audio");
        sound.volume = 0.025;
        sound.play();
        
        sound.addEventListener('ended', function () 
        {
            window.location.href = sounds;
        });
    }
function init()
    {
        localStorage.setItem("pet_state", "1")

        let pos_0 =  document.querySelector('.pet-pos-0');
        let pos_2 =  document.querySelector('.pet-pos-2');

        pos_0.style.display = 'none';
        pos_2.style.display = 'none';

        pos_0.classList.add("reverse");
    }

function pos0()
    {
        let pos_0 =  document.querySelector('.pet-pos-0');
        let pos_1 =  document.querySelector('.pet-pos-1');
        let pos_1_reverse =  document.querySelector('.pet-pos-1-2');
        let pos_2 =  document.querySelector('.pet-pos-2');


        pos_0.style.display = 'block';
        pos_1.style.display = 'none';
        pos_1_reverse.style.display = 'none';
        pos_2.style.display = 'none';
        
    }
function pos1()
    {
        let pos_0 =  document.querySelector('.pet-pos-0');
        let pos_1 =  document.querySelector('.pet-pos-1');
        let pos_2 =  document.querySelector('.pet-pos-2');

        pos_0.style.display = 'none';
        pos_1.style.display = 'block';
        pos_2.style.display = 'none';
 
    }
function pos2()
    {
        let pos_0 =  document.querySelector('.pet-pos-0');
        let pos_1 =  document.querySelector('.pet-pos-1');
        let pos_1_reverse =  document.querySelector('.pet-pos-1-2');
        let pos_2 =  document.querySelector('.pet-pos-2');

        pos_0.style.display = 'none';
        pos_1.style.display = 'none';
        pos_1_reverse.style.display = 'none';
        pos_2.style.display = 'block';

    }

function moveRight()
    {
        let pet_state = parseInt(localStorage.getItem("pet_state"));

        
        if(pet_state == 2)
        {

        }
        else if(pet_state == 0)
        {
            localStorage.setItem("pet_state", ++pet_state);
            
            let pos_1 =  document.querySelector('.pet-pos-1');
            let pos_1_reverse =  document.querySelector('.pet-pos-1-2');
            let pos_0 =  document.querySelector('.pet-pos-0');

            pos_0.style.display = 'none';
            pos_1.style.display = 'block';
            pos_1_reverse.style.display = 'none';
            
        }
        else
        {
            localStorage.setItem("pet_state", ++pet_state);
            checkstate();
        }
        
    }

function moveLeft()
    {
        let pet_state = parseInt(localStorage.getItem("pet_state"));
        
        if(pet_state == 0)
        {

        }
        else if(pet_state == 2)
        {
            localStorage.setItem("pet_state", --pet_state);

            let pos_1 =  document.querySelector('.pet-pos-1');
            let pos_1_reverse =  document.querySelector('.pet-pos-1-2');
            let pos_2 =  document.querySelector('.pet-pos-2');

            pos_1.style.display = 'none';
            pos_1_reverse.style.display = 'block';
            pos_2.style.display = 'none';
        }
        else
        {
            localStorage.setItem("pet_state", --pet_state);
            checkstate();
        }
    }

function checkstate()
    {
        let pet_state = localStorage.getItem("pet_state");

        if(pet_state == 0)
            {
                pos0();
            }
        else if(pet_state == 1)
            {
                pos1();
            }
        else if(pet_state == 2)
            {
                pos2();
            }
    }

function Jump()
    {   
        
        let pet_state = localStorage.getItem("pet_state");

        if(pet_state == 1)
        {
            let pos =  document.querySelector('.pet-pos-' + pet_state);
            let pos_reverse =  document.querySelector('.pet-pos-' + pet_state + '-2');
    
            pos.style.position= 'relative'; 
            pos.style.top = '0px'; 
    
            pos_reverse.style.position= 'relative'; 
            pos_reverse.style.top = '0px'; 
    
            pos_reverse.style.top = parseInt(pos_reverse.style.top) - 80 + 'px';
            pos.style.top = parseInt(pos.style.top) - 80 + 'px';
            setTimeout(Fell, 500);
        }
        else
        {
            let pos =  document.querySelector('.pet-pos-' + pet_state);
    
            pos.style.position= 'relative'; 
            pos.style.top = '0px'; 

            pos.style.top = parseInt(pos.style.top) - 80 + 'px';
            setTimeout(Fell, 500);
        }
        
        

        let sound = document.getElementById("jump");
        sound.volume = 0.025;
        sound.play();

        
        let bouton = document.querySelector("#button-pos-" + pet_state);
        
        bouton.classList.add("jump");

        sound.addEventListener('ended', function () 
        {
            if(pet_state == 0)
                {
                    
                    window.location.href = 'cv_page.html'; 
                }
            else if(pet_state == 1)
                {
                    window.location.href = 'realisations_page.html'; 
                }
            else if(pet_state == 2)
                {
                    window.location.href = 'contact_page.html'; 
                }
        });
    }

function Fell()
    {
        let pet_state = localStorage.getItem("pet_state");

        let pos =  document.querySelector('.pet-pos-' + pet_state);
        pos.style.top = parseInt(pos.style.top) + 80 + 'px';
    }

window.onload = init;
