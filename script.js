const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;
    console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');

    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    // here option use for drop down menu selection and selectedIndex to store the value starting with 0 index and so on.
    

    const celToFeh = (cel) => {
        let Fahrenheit = Math.round((cel *9/5) + 32);
        return Fahrenheit;
    }

    const fehToCel = (fehr) =>{
        let celsius = Math.round((fehr - 32) * 5/9 );
        return celsius;
    }

    let result;
    if(valueTemp == 'cel'){
      result = celToFeh(numberTemp); 
      document.getElementById('resultContainer').innerHTML= `= ${result}°Fahrenheit`;
    }
    else{
        result = fehToCel(numberTemp) ; 
      document.getElementById('resultContainer').innerHTML= `= ${result}°Celsius`;
    }
}   