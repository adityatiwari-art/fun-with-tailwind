const form=document.querySelector("form")
    form.addEventListener('submit',function(e){
    e.preventDefault();
    height=parseFloat(document.getElementById("height").value)
    weight=parseFloat(document.getElementById("weight").value)
    result=document.querySelector(".result");
    if(height<=0 || isNaN(height) || height===null){
        result.innerHTML="Height is not a Valid Entry";
    }
    else if(weight<=0 || isNaN(weight) || weight===null){
        result.innerHTML="Weight is not a Valid Entry"
    }
    else{
        BMI=(weight/(height**2)).toFixed(2);
        result.innerHTML=`${BMI}`;
    }
    document.querySelector(".container").append(result);

})