const btnToggle = document.querySelector(".btn-toggle");


btnToggle.addEventListener("click", () =>{

    const body = document.body;

    if(body.classList.contains("dark")){

        body.classList.add("light")
        body.classList.remove("dark")



    }else if(body.classList.contains("light")){

        body.classList.add("dark")
        body.classList.remove("light")




    }

    //LCA LOGO IMG SWITCH

    if($('body').hasClass('light'))
    {
        $('.img-clair').attr('src','img/la-chouette-agence.png');
        $('.logo-clair').attr('src','img/logo.png');

    }else
    {
        $('.img-clair').attr('src','img/la-chouette-agence_white.png');
        $('.logo-clair').attr('src','img/logo copie.png');
    }
})
