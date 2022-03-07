//-------------------
// Fonctionnalité 1 / 1bis :
//-------------------

// Recherche de l'objet
var i = 0;
var myFooter = 
    document.getElementsByTagName("footer");

// Fonction
  var onFooterClick = function () {
     i += 1;
     console.log(`clic numéro ${i}`);
  };

// Appel de la fonction
myFooter[0].addEventListener("click", onFooterClick);

//--------------------
// Fonctionnalité 2 :
//--------------------

var burgerButton =
    document.getElementsByClassName("navbar-toggler");


var header = 
    document.getElementById("navbarHeader");

burgerButton[0].addEventListener("click", function (){    header.classList.toggle("collapse"); })


//-------------------
// Fonctionnalité 3 :
//-------------------


var firstCard =
document.getElementsByClassName("card mb-4 box-shadow")[0];


// console.log(firstCard)


var firstCardBtn = 
document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

// console.log(firstCardBtn)

 firstCardBtn.addEventListener("click", function (){    firstCard.style.color = 'red'; })


//-------------------
// Fonctionnalité 4 :
//-------------------


var secondCardText =
document.getElementsByClassName("card-text")[1];


// console.log(secondCardText)


var secondCardBtn = 
document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

// console.log(secondCardBtn)

secondCardBtn.addEventListener("click", function (){    if (secondCardText.style.color === 'green'){
    secondCardText.style.color = '' ;
    }
    else secondCardText.style.color = 'green'
})


//-------------------
// Fonctionnalité 5 :
//-------------------


var navbarSection =
document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0];


// console.log(navbarSection)


var linkBootstrap = 
document.getElementsByTagName("link")[0];

// console.log(linkBootstrap)

navbarSection.addEventListener("dblclick", function (){    if (linkBootstrap.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"){
    linkBootstrap.href = "" ;
    }
    else linkBootstrap.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
})
    

//-------------------
// Fonctionnalité 6 :
//-------------------




var cardImg = document.getElementsByClassName("card-img-top");
// console.log(cardImg[0])

var cardTxt = document.getElementsByTagName("p");
// console.log(cardTxt[2])

var viewBtn = 
document.getElementsByClassName("btn btn-sm btn-success");
// console.log(viewBtn[0])


    viewBtn[0].addEventListener("mouseover", function (){    
        if (cardTxt[2].style.display !== "block") {
             cardTxt[2].style.display = "block";
             cardImg[0].style.width = "100%" 
        }
        else {
            cardTxt[2].style.display = "none";
            cardImg[0].style.width = "20%"
        }
            
    });

    viewBtn[1].addEventListener("mouseover", function (){    
        if (cardTxt[3].style.display !== "block") {
             cardTxt[3].style.display = "block";
             cardImg[1].style.width = "100%" 
        }
        else {
            cardTxt[3].style.display = "none";
            cardImg[1].style.width = "20%"
        }
            
    });

    viewBtn[2].addEventListener("mouseover", function (){    
        if (cardTxt[4].style.display !== "block") {
             cardTxt[4].style.display = "block";
             cardImg[2].style.width = "100%" 
        }
        else {
            cardTxt[4].style.display = "none";
            cardImg[2].style.width = "20%"
        }
            
    });

    viewBtn[3].addEventListener("mouseover", function (){    
        if (cardTxt[5].style.display !== "block") {
             cardTxt[5].style.display = "block";
             cardImg[3].style.width = "100%" 
        }
        else {
            cardTxt[5].style.display = "none";
            cardImg[3].style.width = "20%"
        }
            
    });

    viewBtn[4].addEventListener("mouseover", function (){    
        if (cardTxt[6].style.display !== "block") {
             cardTxt[6].style.display = "block";
             cardImg[4].style.width = "100%" 
        }
        else {
            cardTxt[6].style.display = "none";
            cardImg[4].style.width = "20%"
        }
            
    });

    viewBtn[5].addEventListener("mouseover", function (){    
        if (cardTxt[7].style.display !== "block") {
             cardTxt[7].style.display = "block";
             cardImg[5].style.width = "100%" 
        }
        else {
            cardTxt[7].style.display = "none";
            cardImg[5].style.width = "20%"
        }
            
    });




//-------------------
// Fonctionnalité 7 :
//-------------------



// function mouseOver() {
//     if (cardTxt[2].style.display = "block") {
//         cardTxt[2].style.display == "none";
//     }
//     else if (cardTxt[2].style.display = "none") {
//         cardTxt[2].style.display == "block";
//     }
// };
  
// function mouseOut() {
//     if (cardTxt[2].style.display = "none") {
//         cardTxt[2].style.display == "none";
//     }
//     else if (cardTxt[2].style.display = "block") {
//         cardTxt[2].style.display == "block";
//     }
// };

// viewBtn[0].onmouseover = function() {mouseOver()};
// viewBtn[0].onmouseout = function() {mouseOut()};





// console.log(viewBtn)

// viewBtn[0].addEventListener("mouseover" , function(){
//     cardTxt[2].classList.toggle("d-none");
//     cardImg[0].classList.toggle("");
//   });





// weekNum = 1; //teste avec plusieurs valeurs
// switch (weekNum) {
//   case 1:
//     console.log("Semaine 1 - Introduction au Code");
//     break;
//   case 2:
//     console.log("Semaine 2 - Découverte de Ruby");
//     break;
//   case 3:
//     console.log("Semaine 3 - Programmation Orientée Objet");
//     break;






