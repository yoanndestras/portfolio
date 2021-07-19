typeEffect();

function typeEffect() 
{
    let speed = 20;
    let p = document.querySelector('#description_p');

	let text = p.innerHTML;
	p.innerHTML = "";
	
	let i = 0;
	let timer = setInterval(function() 
    {
    if (i < text.length) 
        {
            p.append(text.charAt(i));
        i++;
        } 
        else 
        {
        clearInterval(timer);
        }
    }, 
    speed);
}

$(document).ready(function()
{
    $("a").on('click', function(event) 
    {
      if (this.hash !== "") 
      {
        event.preventDefault();
        let hash = this.hash;
        
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function()
        {
          window.location.hash = hash;
        });
      } 
    });

  let projets = document.querySelectorAll(".projets");
  let click = document.querySelectorAll(".projet_text");
  let pokeball1 = document.querySelectorAll(".pokeball");
  let pokeball2 = document.querySelectorAll(".pokeball2");
  
  for(let i=0 ; i<click.length; i++)
  {
    click[i].classList.add("opacity_0");
  }

  for(let i=0 ; i<pokeball2.length; i++)
  {
    pokeball2[i].style.display = "none";
  }

  for(let i=0 ; i<click.length; i++)
  {
    for(let i=0; i<projets.length; i++){
      projets[i].addEventListener("mouseenter", function(){
        click[i].classList.add("opacity_1");
        pokeball1[i].style.display = "none";
        pokeball2[i].style.display = "block";
      });
     }
     for(let i=0; i<projets.length; i++){
      projets[i].addEventListener("mouseleave", function(){
        click[i].classList.remove("opacity_1");
        pokeball1[i].style.display = "block";
        pokeball2[i].style.display = "none";
      });
     }
  }


let i = 0;
move();

function move() 
{
  if (i == 0) 
  {

    i = 1;

    let myBar_1 = document.querySelector(".myBar_1");
    let myBar_2 = document.querySelector(".myBar_2");
    let myBar_3 = document.querySelector(".myBar_3");
    let myBar_4 = document.querySelector(".myBar_4");
    let myBar_5 = document.querySelector(".myBar_5");
    let myBar_6 = document.querySelector(".myBar_6");
    let myBar_7 = document.querySelector(".myBar_7");
    let myBar_8 = document.querySelector(".myBar_8");

    let width = 1;

    let id_1 = setInterval(frame90, 20);
    let id_2 = setInterval(frame80, 20);
    let id_3 = setInterval(frame70, 20);
    let id_4 = setInterval(frame60, 20);
    let id_5 = setInterval(frame50, 20);
    let id_8 = setInterval(frame20, 20);

    function frame90()
    {
      if (width >= 90)
      {
        clearInterval(id_1);
        i = 0;
      }
      else
      {
        width++;
      }
    }

    function frame80()
    {
      if (width >= 80)
      {
        clearInterval(id_2);
        i = 0;
      }
      else
      {
        width++;
        myBar_1.style.width = width + "%"; // HTML
      }
    }

    function frame70()
    {
      if (width >= 70)
      {
        clearInterval(id_3);
        i = 0;
      }
      else
      {
        width++;
      }
    }

    function frame60()
    {
      if (width >= 60)
      {
        clearInterval(id_4);
        i = 0;
      }
      else
      {
        width++;
        myBar_2.style.width = width + "%"; // CSS
        myBar_3.style.width = width + "%"; // JS
        myBar_4.style.width = width + "%"; // PHP
        myBar_6.style.width = width + "%"; // BOOTSTRAP
      }
    }

    function frame50()
    {
      if (width >= 50)
      {
        clearInterval(id_5);
        i = 0;
      }
      else
      {
        width++;
        myBar_5.style.width = width + "%"; // SQL
        myBar_7.style.width = width + "%"; // JQUERY
      }
    }

    function frame20()
    {
      if (width >= 20)
      {
        clearInterval(id_8);
        i = 0;
      }
      else
      {
        width++;
        myBar_8.style.width = width + "%"; // SYMFONY
      }
    }
  }
}

$("#comp_deux").hide();
$("#comp_trois").hide();

    $("#tab_one").click(function()
    {
        $("#comp_une").show();
        $("#comp_deux").hide();
        $("#comp_trois").hide();
    });

    $("#tab_two").click(function()
    {
        $("#comp_une").hide();
        $("#comp_deux").show();
        $("#comp_trois").hide();
    });

    $("#tab_three").click(function()
    {
        $("#comp_une").hide();
        $("#comp_deux").hide();
        $("#comp_trois").show();
    });

});

