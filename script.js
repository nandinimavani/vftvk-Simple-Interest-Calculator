function showMessage() {
	document.getElementById("result").style.display = "block";
};
function compute()
{
    var principal = document.getElementById("principal").value;
    if(parseInt(principal) < 1) {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		return;
	}
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value; /years of interest/
    var interest = principal * years * rate /100; /calculate interest/
    var year = new Date().getFullYear()+parseInt(years); /years/
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"; showMessage();
    return false;
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        