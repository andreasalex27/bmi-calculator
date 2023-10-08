window.onload = () => {
    let button = document.querySelector('#btn');

    //function untuk calculating BMI    
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

    //mengambil input dari user di variabel height.
    //input is string to typecasting is necessary.
    let height = parseInt(document.querySelector("#height").value);
    
    //mengambil input dari user di variabel weight
    //input is string to typecasting is necessarry.
    let weight = parseInt(document.querySelector('#weight').value)

    let result = document.querySelector('#result');

    // cek user memberikan dengan tepat
    // value or not
    if (height === '' || isNaN(height))
    result.innerHTML = 'Provide a valid Height!';

    else if (weight === '' || isNaN(weight))
    result.innerHTML = 'Provide a valid Weight!';

    // if both input is valid, calculate the bmi
    else {

        // fixing upto 2 decimal place
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // dividing as per the bmi conditions
        if (bmi < 18.6) 
            result.innerHTML = `Your BMI is <b>${bmi}</b> which means You are <b>Underweight</b>`;

        else if (bmi >= 18.5 && bmi < 24.9)
            result.innerHTML = `Your BMI is <b>${bmi}</b> which means You are <b>Normal Weight</b>`;

        else if (bmi >= 25 && bmi < 29.9)
            result.innerHTML = `Your BMI is <b>${bmi}</b> which means You are <b>Overweight</b>`;

        else if (bmi > 30)
            result.innerHTML = `Your BMI is <b>${bmi}</b> which means You are <b>Obesity</b>`;
        
    }
}
