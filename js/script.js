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




