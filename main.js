let result = document.getElementById("result");

function clickButton(target) {
    let target_value = target.innerHTML;
    
    if (target_value == "AC") {
        result.value = 0;
    } else if (target_value == "=") {
        result.value = eval(result.value);
    } else if (result.value == 0 )
           if (target_value == "+"
           || target_value == "-"
           || target_value == "*"
           || target_value == "/"
           || target_value == ".") {
              target_value == "0";
           } else {
               result.value = target_value;
           } else if (result.value.slice(-1) == "+"
                   || result.value.slice(-1) == "-"
                   || result.value.slice(-1) == "*"
                   || result.value.slice(-1) == "/"
                   || result.value.slice(-1) == ".") {
                       if (target_value == "+"
                       || target_value == "-"
                       || target_value == "*"
                       || target_value == "/"
                       || target_value == ".") {
                          target_value == "";
                       } else {
                           result.value += target_value;
                       }
                   } else {
                       result.value += target_value;
                   }
}