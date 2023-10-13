
function clickButton(target) {
    let result = document.getElementById("result");
    let target_value = target.innerHTML;
    let array = ['+','-','*','/','.'];
    
    if (target_value == "AC") {　//ACを押したときに０になる
        result.value = 0;
    } else if (target_value == "=") {　//=を押したときにevalの中身を計算する
        result.value = eval(result.value);
    } else if (result.value == 0 )　//displayのところが0のとき「+-*/.」を押しても０のまま
           if (array.includes(target_value)) {
              target_value == "0";
           } else {
               result.value = target_value;
           } else if (result.value.slice(-1) == "+"
                   || result.value.slice(-1) == "-"
                   || result.value.slice(-1) == "*"
                   || result.value.slice(-1) == "/"
                   || result.value.slice(-1) == ".") {
                       if (array.includes(target_value)) {
                          target_value == "";
                       } else {
                           result.value += target_value;
                       }
                   } else {
                       result.value += target_value;
                   }
}