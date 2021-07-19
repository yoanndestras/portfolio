function ajaxAffiche(htmlArticle)
{
    $('#email_verif').html(htmlArticle);

    if(htmlArticle.charAt(0) == 'L')
    {
        $('#name').val('');
        $('#email').val('');
        $('#tel').val('');
        $('#message').val('');
    }
    else
    {
       
    }
}

$("form#form_mail").submit(function(e) 
{
    e.preventDefault(); 
    let url = "php/mail_sender.php";
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let tel = document.querySelector("#tel");
    let message = document.querySelector("#message");

    let data = {'name': name, 'email': email, 'tel': tel, 'message': message }
    let serializeData = $('#form_mail').serialize();

    console.log(serializeData);
    $.ajax
    ({
        type: "POST",
        url: url,
        data: serializeData,
        //success: success,
        //dataType: dataType
    }).done(ajaxAffiche);
});