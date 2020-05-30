// var targetpos = 1200;
// var currentpos = 0;
// var scrollInterval = setInterval(function(){
//     if(currentpos>=targetpos){
//         clearInterval(scrollInterval);
//         return;
//     }
//     currentpos+=50;
//     window.scrollBy(0,50);

// },50);

var navMenuTags = document.querySelectorAll('.nav-menu a');

for(var i = 0; i < navMenuTags.length; i++){
    navMenuTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(targetSectionID);
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);

        var scrollInterval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top <= 0){
                clearInterval(scrollInterval);
                return;
            }

            window.scrollBy(0,50);
        },30);
    });
}

// For skill bars

var progressBar = document.querySelectorAll('.skill-progress > div');
//var skillContainer = document.getElementById('skill-container');
window.addEventListener('scroll' , checkScroll);
//window.addEventListener("load", checkScroll);
// let animationDone = false;


function initialiseBars(bar){
    bar.setAttribute('animationDone', false);
    bar.style.width = 0 + '%'; 
}

for(var bar of progressBar){
   initialiseBars(bar);
}

// initialiseBars(bar);


function fillBars(bar){
   
    // for(let bar of progressBar){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth >= targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        },8)
    // }
}


function checkScroll(){

    for(let bar of progressBar){
        var coordinates = bar.getBoundingClientRect();
    if((bar.getAttribute("animationDone") == "false") && (coordinates.top <= (window.innerHeight - coordinates.height))){
        bar.setAttribute('animationDone' , true);
        fillBars(bar);
    }else if(coordinates.top > window.innerHeight){
        bar.setAttribute('animationDone' , false);
        initialiseBars(bar);

    }

    }
    
}

