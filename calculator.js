let calculate = localStorage.getItem('calculate') ||' ';
        
const displayCalculate = document.querySelector('.js-calculate'); 

function updateCalcul(value){
  calculate += value;
  displayCalculate.innerHTML=calculate; 
  localStorage.setItem('calculate', calculate);
}
//   function storage(){
//  localStorage.setItem('calculate', calculate);

