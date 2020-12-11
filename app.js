const calculateBtn = document.querySelector('ion-button');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');

const calculateBmi = () => {
    const enteredHeight = +heightInput.value;// + converts string to number
    const enteredWeight = +weightInput.value;

    const bmi = enteredWeight / (enteredHeight * enteredHeight); 

    console.log(bmi);
};

calculateBtn.addEventListener('click',calculateBmi);

 