

let form = document.getElementById("form");
let destinationInput = document.getElementById("destination");
let ListCountries = document.querySelector("#browsers");
let checkinDate = document.getElementById("check-in");
let checkoutDate = document.getElementById("check-out");
let travelRadios = document.querySelectorAll('input[name="travel"]');
let searchForRadios = document.querySelectorAll('input[name="search-for"]');
let formGroup = document.getElementsByClassName('form-group');
let select = document.querySelector("#adults");
let valueList = document.getElementById("adults");
let nation = document.getElementById("nationality");
let nationList = document.getElementById("nation-list");
let x;



flagURL = `https://restcountries.com/v3.1/all`;
fetch(flagURL).then((response) => response.json()).then((data)=>{
    for(let i = 0 ; i <data.length ; i++)
    {   
        ListCountries.innerHTML += `<option value= ${data[i].capital}-${data[i].name.common}><div><img src="${data[i].flags.svg}" class='img-flag'/></div>  </option> ` ;
    }
   
})



flagURL = `https://api.manatal.com/open/v3/nationalities/`;
fetch(flagURL).then((response) => response.json()).then((data)=>{
    for(let i = 0 ; i <data.length ; i++)
    {    
      
         nationList.innerHTML += `<option value="${data[i].demonym}" />`
    }
   
})



for(let i=0 ; i<=30 ; i++ )
{
    select.innerHTML += `<option value=${i} id="night">${i}</option>`
}


checkoutDate.onchange = function () {
    const sumNights = checkoutDate.value.slice(0,2) - checkinDate.value.slice(0,2);
    select.value = sumNights;
    x = select.value;
}

select.addEventListener('change' , function(){
    
     const addNights = ( +(select.value) -  +(x)  ) + +(checkoutDate.value.slice(0,2));
     checkoutDate.value =  addNights + checkoutDate.value.slice(2,20); 
     x=select.value;
        
   })


$(function () {
    $("#check-in").datepicker({
        dateFormat: 'dd/mm/yy',
        minDate: 0,
        maxDate: "+1M +10D",
 
    });

    $("#check-out").datepicker({
        dateFormat: 'dd/mm/yy',
        minDate: 1,
        maxDate: "+1Y",
    });
});









form.addEventListener("submit", validateForm);

function validateForm(e) {
    e.preventDefault();

    const destinationInputValue = destinationInput.value;
    if (destinationInputValue === "") {
        formGroup[0].classList.add("error");
        destinationInput.classList.add("invalid")
    } else {
        formGroup[0].classList.remove("error");
        destinationInput.classList.remove("invalid")
    }

    if (checkinDate.value === "") {
        formGroup[2].classList.add("error");
        checkinDate.classList.add("invalid")


    } else {
        formGroup[2].classList.remove("error");
        checkinDate.classList.remove("invalid")
    }

    if (checkoutDate.value === "") {
        formGroup[4].classList.add("error");
        checkoutDate.classList.add("invalid")


    } else {
        formGroup[4].classList.remove("error");
        checkoutDate.classList.remove("invalid")
    }

    if(travelRadios[0].checked ===  false && travelRadios[1].checked === false){
        formGroup[8].classList.add("error");
    } else {
        formGroup[8].classList.remove("error");

    }

    if(searchForRadios[0].checked ===  false && searchForRadios[1].checked === false && searchForRadios[2].checked === false){
        formGroup[9].classList.add("error");
    } else {
        formGroup[9].classList.remove("error");

    }

   if(formGroup[0].classList.contains("error") === false && formGroup[2].classList.contains("error") === false && formGroup[4].classList.contains("error") === false && formGroup[8].classList.contains("error") === false && formGroup[9].classList.contains("error") === false){
       alert("form submitted");
   }
}

var modal = $('.modal');
modal.hide();

$('.more-option').click(function(){
    modal.show();
})

$('.close').click(function(){
    modal.hide();
})