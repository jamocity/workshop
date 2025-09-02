function compute()
{
   
    var p = document.getElementById("principal").value;
    var R = document.getElementById("rate").value;
    var t = document.getElementById("time").value;

    var SI = (p * R * t) / 100;
    document.getElementById("result").innerHTML = "Simple Interest: " + SI;
   
}
