function takeInput(input){
    document.getElementById('numInp').value += input;
}
function allClear(){
    document.getElementById('numInp').value = '';
}
function calculate(){
    const output = document.getElementById('numInp');
    output.value = eval(output.value);
}