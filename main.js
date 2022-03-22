//Referencia dos inputs e buttom

let recipeTitleReference = document.querySelector('#recipeTitle')
let recipeDescriptionReference = document.querySelector('#recipeDescription')
let recipeImageReference = document.querySelector('#recipeImage')
let buttonRegisterReference = document.querySelector('#buttonRegister')
let recipeColectionReference = document.querySelector('#recipeColection')


//Variavel com os dados coletados pelos inputs

let recipeCard = ""

//Variavel com os dados inseridos em uma array

let recipeCardArray = []


//evento

buttonRegisterReference.addEventListener('click', function(event){

    event.preventDefault()

    //input para receber Dados

    recipeCard = { title: recipeTitleReference.value, description:recipeDescriptionReference.value,  image: recipeImageReference.value}


    //Adicionando dados coletados para o HTML
    
    recipeColectionReference.innerHTML += (`
   
    <div id="cardStyle" class="col-4 border-primary">
        <div class="card img fluid">

        <img class="card-img-top rounded" src="${recipeCard.image}" alt="">

        <div class="card-body">
        <h5 class="card-title text-primary">${recipeCard.title}</h5>
        <p class="card-text text-primary">${recipeCard.description}</p>

        </div>

        </div>    
    </div>`)

    // recipeColectionReference.innerHTML += (`
    //     <div class="card">
    //     <img class="card-img-top" src="${recipeCard.image}" alt="card receita">
    //     <div class="card-body">
    //     <h5 class="card-title">${recipeCard.title}</h5>
    //     <p class="card-text">${recipeCard.description}</p>
    //     </div>
    // </div>`)

//     recipeColectionReference.innerHTML += (`
   
//     <div id="cardStyle" class="col-4">
//         <h2>
//             ${recipeCard.title}
//         </h2>
        
//         <img src="${recipeCard.image}" alt="">

//         <p>
//             ${recipeCard.description}
//         </p>
//     </div>    
// </div>`)



    //Criando um banco de Dados 

    recipeCardArray.push(recipeCard)
  
    
    
    // console.log(recipeCard)
    // console.log(recipeCardArray)
    
    
    
})




