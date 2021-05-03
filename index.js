var flag =0;
var xcount= 0;
var ocount=0;
var tempclose= 0;

function clk1(){
    var ele =document.getElementById("bttn1");
    if(!(ele.innerHTML == "x" || ele.innerHTML == "0"))
    if(flag == 0 ){
        ele.innerHTML="x";
        xcount++;
        flag=1;
    }
    else
    {
        ele.innerHTML="0";
        flag=0;
        ocount++;
    }
}
function clk2(){
    var ele =document.getElementById("bttn2");
    if(!(ele.innerHTML == "x" || ele.innerHTML == "0"))
    if(flag == 0){
        ele.innerHTML="x";
        flag=1;
        xcount++;
    }
    else
    {
        ele.innerHTML="0";
        flag=0;
        ocount++;
    }
    
}
function clk3(){
    var ele =document.getElementById("bttn3");
    if(!(ele.innerHTML == "x" || ele.innerHTML == "0"))
    if(flag == 0){
        ele.innerHTML="x";
        flag=1;
        xcount++;
    }
    else
    {
        ele.innerHTML="0";
        flag=0;
        ocount++;
    }
}
function clk4(){
    var ele =document.getElementById("bttn4");
    if(!(ele.innerHTML == "x" || ele.innerHTML == "0"))
    if(flag == 0){
        ele.innerHTML="x";
        flag=1;
        xcount++;
    }
    else
    {
        ele.innerHTML="0";
        flag=0;
        ocount++;
    }
}
function clk5(){
    var ele =document.getElementById("bttn5");
    if(!(ele.innerHTML == "x" || ele.innerHTML == "0"))
    if(flag == 0){
        ele.innerHTML="x";
        flag=1;
        xcount++;
    }
    else
    {
        ele.innerHTML="0";
        flag=0;
        ocount++;
    }
}
function clk6(){
    var ele =document.getElementById("bttn6");
    if(!(ele.innerHTML == "x" || ele.innerHTML == "0"))
    if(flag == 0){
        ele.innerHTML="x";
        flag=1;
        xcount++;
    }
    else
    {
        ele.innerHTML="0";
        flag=0;
        ocount++;
    }
}
function clk7(){
    var ele =document.getElementById("bttn7");
    if(!(ele.innerHTML == "x" || ele.innerHTML == "0"))
    if(flag == 0){
        ele.innerHTML="x";
        flag=1;
        xcount++;
    }
    else
    {
        ele.innerHTML="0";
        flag=0;
        ocount++;
    }
}
function clk8(){
    var ele =document.getElementById("bttn8");
    if(!(ele.innerHTML == "x" || ele.innerHTML == "0"))
    if(flag == 0){
        ele.innerHTML="x";
        flag=1;
        xcount++;
    }
    else
    {
        ele.innerHTML="0";
        flag=0;
        ocount++;
    }
}
function clk9(){
    var ele =document.getElementById("bttn9");
    if(!(ele.innerHTML == "x" || ele.innerHTML == "0"))
    if(flag == 0){
        ele.innerHTML="x";
        flag=1;
        xcount++;
    }
    else
    {
        ele.innerHTML="0";
        flag=0;
        ocount++;
    }
}
function reset(){
 location.reload();

}

function win(){
    if (tempclose== 0){
            if(document.getElementById("bttn1").innerHTML=="x" && document.getElementById("bttn2").innerHTML=="x" && document.getElementById("bttn3").innerHTML=="x"){
                document.getElementById("winner").innerHTML="The winner is X";
                tempclose= 1;
            }
            else if(document.getElementById("bttn4").innerHTML=="x" && document.getElementById("bttn5").innerHTML=="x" && document.getElementById("bttn6").innerHTML=="x"){
                document.getElementById("winner").innerHTML="The winner is X";
                tempclose= 1;
            }
            else if(document.getElementById("bttn7").innerHTML=="x" && document.getElementById("bttn8").innerHTML=="x" && document.getElementById("bttn9").innerHTML=="x"){
                document.getElementById("winner").innerHTML="The winner is X";
                tempclose= 1;
            }
            else if(document.getElementById("bttn1").innerHTML=="x" && document.getElementById("bttn5").innerHTML=="x" && document.getElementById("bttn9").innerHTML=="x"){
                document.getElementById("winner").innerHTML="The winner is X";
                tempclose= 1;
            }
            else if(document.getElementById("bttn3").innerHTML=="x" && document.getElementById("bttn5").innerHTML=="x" && document.getElementById("bttn7").innerHTML=="x"){
                document.getElementById("winner").innerHTML="The winner is X";
                tempclose= 1;
            }

            else if(document.getElementById("bttn1").innerHTML=="x" && document.getElementById("bttn4").innerHTML=="x" && document.getElementById("bttn7").innerHTML=="x"){
                document.getElementById("winner").innerHTML="The winner is X";
                tempclose= 1;
            }
            else if(document.getElementById("bttn2").innerHTML=="x" && document.getElementById("bttn5").innerHTML=="x" && document.getElementById("bttn8").innerHTML=="x"){
                document.getElementById("winner").innerHTML="The winner is X";
                tempclose= 1;
            }
            else if(document.getElementById("bttn3").innerHTML=="x" && document.getElementById("bttn6").innerHTML=="x" && document.getElementById("bttn9").innerHTML=="x"){
                document.getElementById("winner").innerHTML="The winner is X";
                tempclose= 1;
            }
            else if(document.getElementById("bttn1").innerHTML=="0" && document.getElementById("bttn2").innerHTML=="0" && document.getElementById("bttn3").innerHTML=="0"){
                document.getElementById("winner").innerHTML="The winner is 0";
                tempclose= 1;
            }
            else if(document.getElementById("bttn4").innerHTML=="0" && document.getElementById("bttn5").innerHTML=="0" && document.getElementById("bttn6").innerHTML=="0"){
                document.getElementById("winner").innerHTML="The winner is 0";
                tempclose= 1;
            }
            else if(document.getElementById("bttn7").innerHTML=="0" && document.getElementById("bttn8").innerHTML=="0" && document.getElementById("bttn9").innerHTML=="0"){
                document.getElementById("winner").innerHTML="The winner is 0";
                tempclose= 1;
            }
            else if(document.getElementById("bttn1").innerHTML=="0" && document.getElementById("bttn5").innerHTML=="0" && document.getElementById("bttn9").innerHTML=="0"){
                document.getElementById("winner").innerHTML="The winner is 0";
                tempclose= 1;
            }
            else if(document.getElementById("bttn3").innerHTML=="0" && document.getElementById("bttn5").innerHTML=="0" && document.getElementById("bttn7").innerHTML=="0"){
                document.getElementById("winner").innerHTML="The winner is 0";
                tempclose= 1;
            }

            else if(document.getElementById("bttn1").innerHTML=="0" && document.getElementById("bttn4").innerHTML=="0" && document.getElementById("bttn7").innerHTML=="0"){
                document.getElementById("winner").innerHTML="The winner is 0";
                tempclose= 1;
            }
            else if(document.getElementById("bttn2").innerHTML=="0" && document.getElementById("bttn5").innerHTML=="0" && document.getElementById("bttn8").innerHTML=="0"){
                document.getElementById("winner").innerHTML="The winner is 0";
                tempclose= 1;
            }
            else if(document.getElementById("bttn3").innerHTML=="0" && document.getElementById("bttn6").innerHTML=="0" && document.getElementById("bttn9").innerHTML=="0"){
                document.getElementById("winner").innerHTML="The winner is 0";
                tempclose= 1;
            }
            else {
                document.getElementById("winner").innerHTML="The winner is yet to be decided";
            }
    }
}