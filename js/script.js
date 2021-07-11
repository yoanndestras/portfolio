// application

typeEffect();
function typeEffect() 
{
    let speed = 30;
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

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
/*
    let projets = document.querySelector("#projet_1");
    let click = document.querySelector("#projet_text_1");

    

    projets.addEventListener("mouseenter", hover);
    projets.addEventListener("mouseleave", leave);
*/


  let projets = document.querySelectorAll(".projets");
  let click = document.querySelectorAll(".projet_text");

  
  

  
  for(let i=0 ; i<click.length; i++)
  {
    click[i].classList.add("opacity_0");
  }

  for(let i=0 ; i<click.length; i++)
  {
    for(let i=0; i<projets.length; i++){
      projets[i].addEventListener("mouseenter", function(){
        click[i].classList.add("opacity_1");
      });
     }
     for(let i=0; i<projets.length; i++){
      projets[i].addEventListener("mouseleave", function(){
        click[i].classList.remove("opacity_1");
      });
     }
  }

  

  });


