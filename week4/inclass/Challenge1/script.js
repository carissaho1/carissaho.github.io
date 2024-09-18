function calculate() {

    if (validate_numbers() === false) {
        document.getElementById("result").innerHTML = "<span style='color: red'> One or more numbers are missing!</span>";
        return;
    }
    // YOUR CODE GOES HERE
    // let num1 = parseInt(document.getElementById("number1").value);   either parseInt or Number is ok
    // let num2 = parseInt(document.getElementById("number2").value);
    let num1 = Number(document.getElementById("number1").value);
    let num2 = Number(document.getElementById("number2").value);

    let sum=0;
    for (let i = num1; i<= num2; i++){
        sum += i;
    }

    // document.getElementById("result").innerText = `The sum is: ${sum}`;
    document.getElementById("result").innerHTML = `<span style='color: red'> The sum is: ${sum}</span>`;

    function validate_numbers() {
        console.log("[START] validate_numbers")
        let num1 = Number(document.getElementById("number1").value);
        let num2 = Number(document.getElementById("number2").value);

        if (num1=='' || num2=='') {
            return false;
        }

        return true;

    }
}