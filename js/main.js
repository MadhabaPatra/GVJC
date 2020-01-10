/*
____________Menu-Toggle Mobile Version_______________
*/

$(document).ready(function(){
	$('.menu-toggle').click(function(){
	$('.menu-toggle').toggleClass('active');
	$('nav').toggleClass('active');
	})
		});
/*
	 ____________Upload button_______________
*/
function udata(){
    var a=document.getElementById("uploadBtn").value;
    document.getElementById("uploadFile").value = a;
    document.getElementById("file-txt").innerHTML="Modify Document";
   
}
/*
_____________Page Reload Resubmission Issue Solve_______________
*/
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}
/*
	 ____________Percentage Calculation_______________
*/
function markCalc(i) {
    a=i.value;
    p=a*100/600;
    p=p.toFixed(2);
    var x = document.getElementById("m");
    r=p+"%";
    x.value= r;
  }
/*
_____________ Carousel Time Interval______________
*/
  $('.carousel').carousel({
    interval: 10
  })