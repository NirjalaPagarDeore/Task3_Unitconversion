var input=document.getElementById('input');
var result=document.getElementById('result');

var inputType=document.getElementById('inputType');
var resultType=document.getElementById('resultType');

var inputTypeValue, resultTypevalue;

input.addEventListener("keyup", Myresult);
inputType.addEventListener("change", Myresult);
resultType.addEventListener("change",Myresult);

inputTypeValue=inputType.value;
resultTypevalue=resultType.value;

function Myresult(){
    inputTypeValue=inputType.value;
    resultTypevalue=resultType.value;

    if(inputTypeValue==="meter" && resultTypevalue==="kilometer")
    {
        result.value=Number(input.value)*0.001;
    }else if(inputTypeValue==="meter" && resultTypevalue==="centimeter")
    {
        result.value=Number(input.value)*100;
    }else if(inputTypeValue==="meter" && resultTypevalue==="meter"){
        result.value=input.value;
    }

    if(inputTypeValue==="kilometer"&& resultTypevalue==="meter")
    {
        result.value=Number(input.value)*1000;

    }else if(inputTypeValue==="kilometer" && resultTypevalue==="centimeter")
    {
        result.value=Number(input.value)*100000;
    }else if(inputTypeValue==="kilometer" && resultTypevalue==="kilometer")
    {
        result.value=input.value;
    }

    if(inputTypeValue==="centimeter"&& resultTypevalue==="meter")
    {
        result.value=Number(input.value)*0.01;

    }else if(inputTypeValue==="centimeter" && resultTypevalue==="centimeter")
    {
        result.value=input.value;
    }else if(inputTypeValue==="centimeter" && resultTypevalue==="kilometer")
    {
        result.value=Number(input.value)*0.00001;
    }
}