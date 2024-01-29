function bmiCalculator (weight, height) {
    var interpretation ="";
    var bmi = Math.round(weight / Math.pow(height, 2));
    if(bmi < 18.5) {
        interpretation = "Your BMI is "+bmi+", so you are underweight.";
    }
     if(bmi > 18.5 && bmi < 24.9) {
        interpretation = "Your BMI is "+bmi+" , so you have a normal weight.";
    }   
    if(bmi > 24.9) {
        interpretation = "Your BMI is "+bmi+", so you are overweight.";
    }
    // console.log(interpretation);
    return interpretation;
    
}

// const btn = document.querySelector("button");

// btn.addEventListener("click", handleClick);

// function handleClick() {
//     console.log(bmiCalculator(document.querySelector("#weightkg").value, document.querySelector("#heightm").value));
//    document.querySelector("#title1").innerHTML = bmiCalculator(document.querySelector("#weightkg").value, document.querySelector("#heightm").value);

// }

$("button").click(function() {
    $("#title1").text(bmiCalculator($("#weightkg").val(), $("#heightm").val()));
})

// var result = "";

// result = bmiCalculator(80, 1.75);