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
  let malette_1 = document.querySelectorAll(".malette_1");
  let malette_2 = document.querySelectorAll(".malette_2");
  
  for(let i=0 ; i<click.length; i++)
  {
    click[i].classList.add("opacity_0");
  }

  for(let i=0 ; i<malette_2.length; i++)
  {
    malette_2[i].style.display = "none";
  }

  for(let i=0 ; i<click.length; i++)
  {
    for(let i=0; i<projets.length; i++){
      projets[i].addEventListener("mouseenter", function(){
        click[i].classList.add("opacity_1");
        malette_1[i].style.display = "none";
        malette_2[i].style.display = "block";
      });
     }
     for(let i=0; i<projets.length; i++){
      projets[i].addEventListener("mouseleave", function(){
        click[i].classList.remove("opacity_1");
        malette_1[i].style.display = "block";
        malette_2[i].style.display = "none";
      });
     }
  }


let i = 0;

function move() 
{
  if (i == 0) 
  {

    i = 1;

    let myBar = document.querySelectorAll(".myBar");

    let width = 1;

    //let id_90 = setInterval(frame90, 20);
    let id_80 = setInterval(frame80, 20);
    let id_70 = setInterval(frame70, 20);
    let id_60 = setInterval(frame60, 20);
    let id_50 = setInterval(frame50, 20);
    let id_40 = setInterval(frame40, 20);
    let id_20 = setInterval(frame20, 20);

    /*function frame90()
    {
      if (width >= 90)
      {
        clearInterval(id_90);
        i = 0;
      }
      else
      {
        width++;
      }
    }*/

    function frame80()
    {
      if (width >= 80)
      {
        clearInterval(id_80);
        i = 0;
      }
      else
      {
        width++;
        myBar[0].style.width = width + "%"; // HTML
      }
    }

    function frame70()
    {
      if (width >= 75)
      {
        clearInterval(id_70);
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
        clearInterval(id_60);
        i = 0;
      }
      else
      {
        width++;
        myBar[1].style.width = width + "%"; // CSS
        myBar[2].style.width = width + "%"; // JS
        myBar[3].style.width = width + "%"; // PHP
        myBar[6].style.width = width + "%"; // BOOTSTRAP
      }
    }

    function frame50()
    {
      if (width >= 50)
      {
        clearInterval(id_50);
        i = 0;
      }
      else
      {
        width++;
        myBar[4].style.width = width + "%"; // SQL
        myBar[7].style.width = width + "%"; // JQUERY
      }
    }

    function frame40()
    {
      if (width >= 40)
      {
        clearInterval(id_40);
        i = 0;
      }
      else
      {
        width++;
        myBar[5].style.width = width + "%"; // AJAX
        myBar[8].style.width = width + "%"; // SYMFONY
      }
    }

    function frame20()
    {
      if (width >= 20)
      {
        clearInterval(id_20);
        i = 0;
      }
      else
      {
        width++;
       
      }
    }
  }
}
let timerID;

$("#comp_deux").hide();
$("#comp_trois").hide();

$("#tab_one").click(function()
{
  move();
  clearInterval(timerID);
  $("#comp_une").show();
  $("#comp_deux").hide();
  $("#comp_trois").hide();

  $("#tab_one").addClass("click_simulate");
  $("#tab_two").removeClass("click_simulate");
  $("#tab_three").removeClass("click_simulate");
  j = 1;
  timerID = setInterval(increment, 300000); 
});

$("#tab_two").click(function()
{
  move();
  clearInterval(timerID);
  $("#comp_une").hide();
  $("#comp_deux").show();
  $("#comp_trois").hide();

  $("#tab_one").removeClass("click_simulate");
  $("#tab_two").addClass("click_simulate");
  $("#tab_three").removeClass("click_simulate");
  j = 2;
  timerID = setInterval(increment, 300000); 
});

$("#tab_three").click(function()
{
  move();
  clearInterval(timerID);
  $("#comp_une").hide();
  $("#comp_deux").hide();
  $("#comp_trois").show();

  $("#tab_one").removeClass("click_simulate");
  $("#tab_two").removeClass("click_simulate");
  $("#tab_three").addClass("click_simulate");
  j = 0;
  timerID = setInterval(increment, 300000); 
});


tab_list = document.querySelectorAll('.tab_button');
let j = 0;

increment();

function increment() 
  {
    if(j == 2)
    {
      move();
      $("#comp_une").hide();
      $("#comp_deux").hide();
      $("#comp_trois").show();
      tab_list[j-1].classList.remove("click_simulate");
      tab_list[j].classList.add("click_simulate");
      j = 0;
      
      
    }
    else if(j == 0)
    {
      move();
      $("#comp_une").show();
      $("#comp_deux").hide();
      $("#comp_trois").hide();
      tab_list[j].classList.add("click_simulate");
      tab_list[tab_list.length-1].classList.remove("click_simulate");
      j++;
    }
    else
    {
      move();
      $("#comp_une").hide();
      $("#comp_deux").show();
      $("#comp_trois").hide();
      tab_list[j-1].classList.remove("click_simulate");
      tab_list[j].classList.add("click_simulate");
      j++;
    }
  }

timerID = setInterval(increment, 5000); 


/*$(document).on("click", tab_list[j], function (event) 
{
  
});*/

});
