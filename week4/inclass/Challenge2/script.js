// Method 1


function call_over(){
    console.log("[START] call_over");
    document.getElementById("result").innerHTML = "<span>Welcome to My Heart</span>";
    let result_elem = document.getElementById("result");
    result_elem.style.backgroundColor = 'pink';
    result_elem.style.color = 'blue';
}

function call_out(){
    console.log("[START] call_out");
    document.getElementById("result").innerHTML = "<span>Don't Leave</span>";
    // chaining
    document.getElementById("result").style.backgroundColor = 'black';
    document.getElementById("result").style.color = 'red';

}

//Method 2, using event listeners + line 37
// document.getElementById("justin-btn").addEventListener('mouseover', call_over);
// document.getElementById("justin-btn").addEventListener('mouseout', call_out);

