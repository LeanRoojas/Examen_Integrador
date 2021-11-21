window.addEventListener("DOMContentLoaded",()=>{

    //Obetenemos los personajes y los guardamos en local storage con la key "card"
   const cards = document.querySelectorAll("button[data-order-caracters]");
   cards.forEach((item,i,arr) =>{
       item.addEventListener("click",(event)=>{
                       
            const button = event.currentTarget;
            button.classList.toggle("colorear");
            const container = button.parentNode.parentNode;
            container.classList.toggle("solid");
            const img = container.querySelector("img");

            arr.forEach(button => {
                let cardCont = button.parentNode.parentNode;
                if(!(cardCont.classList.contains("solid"))){
                    cardCont.classList.toggle("transparent");
                }
            })
            let carta = {
                titulo: container.querySelector(".card-title").innerText,
                img: img.getAttribute("src"),
                description: container.querySelector(".description").innerText,
                id: button.getAttribute("data-order-caracters")
            }
            localStorage.setItem("card",JSON.stringify(carta));
            
            setTimeout(() => {
                document.getElementById("gorritos").scrollIntoView();
            }, 2000);

       })
   })

   //Obtenemos las gorras, guardamos en localStorage y nos envia al formulario
   const hats = document.querySelectorAll("button[data-order-hat]");
   hats.forEach(hat => {
       hat.addEventListener("click",(event)=>{
            const button = event.currentTarget;
            button.classList.toggle("colorear2");
            const container = button.parentNode;
            const img = container.querySelector("img");

            



            let hat = {
                titulo: container.querySelector("p").innerText,
                img: img.getAttribute("src")
            }
            localStorage.setItem("hat",JSON.stringify(hat));

            setTimeout(() => {
                const url = window.location.href.replace("index.html","order.html");
                window.location.href = url;
                
            }, 2000);
        })
   })


  


   
})


