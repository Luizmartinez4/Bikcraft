// checkboxes de escolha
const checkedBike = document.querySelector('#Bikcraft');
const checkedInsurance = document.querySelector('#Seguro');

// checkboxes bikes
const bikeMagic = document.querySelector('#Magic');
const bikeNebula = document.querySelector('#Nebula');
const bikeNimbus = document.querySelector('#Nimbus');

// checkboxes planos
const planGold = document.querySelector('#planGold');
const planSilver = document.querySelector('#planSilver');

function choiceItem(){

    const optionsBike = document.querySelector('.budget__bike');
    const optionsInsurance = document.querySelector('.budget__insurance');

    if (checkedInsurance.checked && checkedBike.checked){
        optionsBike.classList.remove('disableOption');
        optionsInsurance.classList.remove('disableOption');
    } else if(checkedBike.checked){
        optionsBike.classList.remove('disableOption');
        optionsInsurance.classList.add('disableOption');
    } else if(checkedInsurance.checked){
        optionsBike.classList.add('disableOption');
        optionsInsurance.classList.remove('disableOption');
    } else {
        optionsBike.classList.add('disableOption');
        optionsInsurance.classList.add('disableOption');
    }

};

function enterPage() {

    const pageMagic = sessionStorage.getItem('pageMagic');
    const pageNebula = sessionStorage.getItem('pageNebula');
    const pageNimbus = sessionStorage.getItem('pageNimbus');

    const pagePlan = sessionStorage.getItem('pagePlan');

    if (pageMagic){
        checkedBike.checked = true;
        bikeMagic.checked = true;
        choiceItem();  
    } 
    else if(pageNebula){
        checkedBike.checked = true;
        bikeNebula.checked = true;
        choiceItem();
    } else if(pageNimbus){
        checkedBike.checked = true;
        bikeNimbus.checked = true;
        choiceItem();
    } else if(pagePlan === 'Gold'){
        checkedInsurance.checked = true;
        planGold.checked = true;
        choiceItem();
    } else if(pagePlan === 'Silver'){
        checkedInsurance.checked = true;
        planSilver.checked = true;
        choiceItem();
    }
        
    sessionStorage.removeItem('pageMagic');
    sessionStorage.removeItem('pageNebula');
    sessionStorage.removeItem('pageNimbus');
    sessionStorage.removeItem('pagePlan');
}

enterPage();

function changeCheckBox(){

    planGold.addEventListener('click', () =>{
        if(planGold.checked){
            planSilver.checked = false;
        }
    });

    planSilver.addEventListener('click', () =>{
        if(planSilver.checked){
            planGold.checked = false;
        }
    });

};

let amountClick = 0;

function rotateImage(){
    const image = document.querySelector('.budget__form-items img');

    if(amountClick === 0){
        image.style.cssText = 'transform: rotate(180deg);';
        amountClick = 1;
    } else {
        image.style.cssText = 'transform: rotate(0);'
        amountClick = 0;
    }
}