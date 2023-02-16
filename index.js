alert("check your love percentage");
alert("don't try again and again")
var name1=prompt("enter your name");
var name2=prompt("enter your lover name ");
var n=Math.random();


n=n*100;
var guess=(Math.floor(n)+1);
if (guess>70) {
    alert("your love percentage is "+guess+"% you love each other like krishna and radha ");
}
else if(guess>=30&&guess<=70){
     alert("your love percentage is "+guess+"% keep trying");
}
else
{
     alert("your love percentage is "+guess+"% you are going together like oil and water");
}