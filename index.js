function calculate(){
    var input1=document.getElementById("input1");
    var input2=document.getElementById("input2");
    var input3=document.getElementById("input3");
    var input4=document.getElementById("input4");
    var anslab=document.getElementById("answerlabel")
    var ans=document.getElementById("answer");
    var in1=input1.value;
    var in2=input2.value;
    var in3=Number(input3.value);
    var in4=Number(input4.value);
    if(in1=="P" && in2=="P"|| in1=="F" && in2=="F" ||  in1=="A" && in2=="A" ){
        alert("Change The Parameter")
    }
    else if(in3==0 || in4==0){
        alert("Enter the Value")
    }
    else {
        if(in1=="P" && in2=="F"){
            anslab.innerHTML="A (m^2)"
            ans.value=Number(in4/in3).toFixed(2)
        }
        else if(in1=="F" && in2=="P"){
            anslab.innerHTML="A (m^2)"
            ans.value=Number(in3/in4).toFixed(2)
        }
        else if(in1=="P" && in2=="A"){
            anslab.innerHTML="F (N)"
            ans.value=Number(in3*in4).toFixed(2)
        }
        else if(in1=="A" && in2=="P"){
            anslab.innerHTML="F (N)"
            ans.value=Number(in3*in4).toFixed(2)
        }
        else if(in1=="F" && in2=="A"){
            anslab.innerHTML="P (N/m^2)"
            ans.value=Number(in3/in4).toFixed(2)
        }
        else if(in1=="A" && in2=="F"){
            anslab.innerHTML="P (N/m^2)"
            ans.value=Number(in4/in3).toFixed(2)
        }
    }
}