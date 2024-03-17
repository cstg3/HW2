
function val(result) {
    const operators = ['+', '-', '*', '/', '%'];
    const currentValue = form.answer.value;
    const lastCharIsOperator = operators.includes(currentValue.charAt(currentValue.length - 1));
    const newInputIsOperator = operators.includes(result);
    if (lastCharIsOperator && newInputIsOperator) {
        return;
    }
    form.answer.value += result;
}
function calculatePercentage() {
    let currentValue = form.answer.value;
    if(currentValue !== "" && !isNaN(currentValue)) {
        form.answer.value = Number(currentValue) / 100;
    }
}
function cal(){
    if (form.answer.value == ""){
        alert("0")
    }else{
        form.answer.value= eval(form.answer.value)
    }
}
function c(){
    form.answer.value = "";
}
function back(){
    var exp = form.answer.value;
    form.answer.value=exp.substring(0,exp.length-1);
}
function cal(){
    if (form.answer.value == ""){
        alert("0")
    }else{
        form.answer.value= eval(form.answer.value)
    }
}