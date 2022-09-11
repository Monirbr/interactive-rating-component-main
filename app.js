const container = document.querySelector(".container");
const rate = document.querySelectorAll(".btn");
const thank=document.querySelector(".thank");
const rateNumber=document.getElementById("rate-no");
const submitBtn= document.querySelector(".submit");


submitBtn.addEventListener("click", submitHandler);

rate.forEach(function(item){
    item.addEventListener("click" , ()=>{

     rateNumber.innerHTML = item.id

})
})


function submitHandler(){
    thank.classList.remove("hidden")
      container.style.display = "none"
}
      
    
