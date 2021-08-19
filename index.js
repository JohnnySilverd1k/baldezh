const pidor = document.querySelector;
a = prompt("Как тебя зовут?")
alert("Привет, " + a);
function CardNumber(){
    var a=0;
    form1.NomerOfKartochka.onkeypress=function(){
        if(a==4){
            a=0;
            form1.NomerOfKartochka.value+=" ";
        }
        a++;
    }
}
CardNumber();