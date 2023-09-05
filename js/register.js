let tab = document.getElementsByClassName('tab');
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let resetBtn = document.getElementById("resetBtn");
let progress =document.getElementsByClassName('prog-count'); 


var currentTab = 0;
showTab(currentTab);
 
function showTab(n){
    if(n>=0 || n < (tab.length - 1)){
      
        tab[n].style.display='flex';
    }
    

    if (n == 0) {
        prevBtn.style.display = "none";
        resetBtn.style.display = "inline";
      } else {
        resetBtn.style.display = "none";
        prevBtn.style.display = "inline";
      }
      if (n == (tab.length - 1)) {
        nextBtn.innerHTML = "Submit";
      } else {
        nextBtn.innerHTML = "Next";
      }

      fixStepIndicator(n);
}

function nextPrev(n){
    tab[currentTab].style.display = "none";
    
    currentTab = currentTab + n;
    if (currentTab >= tab.length) {
        document.getElementById("registerForm").submit();
        return false;
    }
    showTab(currentTab);  
}
var flag=0;
function fixStepIndicator(n) {
    console.log(n);
    
    if (n < flag) {
        progress[n].className.replace("active",""); 
    } else if (n > flag) {
        progress[n].className += " active";
    }
    flag = n;
    
}

function readFile() {
    uploaded =  document.querySelector("#uploaded");
    if (!this.files || !this.files[0]) return;
      
    const FR = new FileReader();
      
    FR.addEventListener("load", function(e) {

        uploaded.src= e.target.result;
        uploaded.classList.add('shown')
    }); 
      
    FR.readAsDataURL(this.files[0]);
    
}

document.querySelector("#profilePic").addEventListener("change", readFile);

$(document).ready(function() {
    $('#industry').select2({
        placeholder: "Industry",
    });
});