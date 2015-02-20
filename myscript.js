//The initial state of the board
var start = function (startgrid){

		$("#container").empty(); 
		makegrid(startgrid); 
		var size = (960/startgrid)+"px";
		$(".cells").height(size); 
		$(".cells").width(size); 
		$(".row").height(size);
		$(".cells").hover( function() 
			{
				$(this).css({"background-color":"black"});
			});

};

//resets and makes a grid with a black hover effect 
var regular = function () 
{

		$("#container").empty(); 
		var maxcells = prompt("Enter the max number of cells (between 1 and 70"); 
		makegrid(maxcells); 
		var size = (960/maxcells)+"px";
		$(".cells").height(size); 
		$(".cells").width(size); 
		$(".row").height(size);
		$(".cells").hover( function() 
			{
				$(this).css({"background-color":"black"});
			});

};

//resets and makes a grid with a random color pattern 
var color = function () 
{

		$("#container").empty(); 
		var maxcells = prompt("Enter the max number of cells (between 1 and 70"); 
		makegrid(maxcells); 
		var size = (960/maxcells)+"px";
		$(".cells").height(size); 
		$(".cells").width(size);
		$(".row").height(size);
		$(".cells").hover( function() 
			{
				var color = "rgb("+Math.floor((256)*Math.random())+","+Math.floor((256)*Math.random())+","+Math.floor((256)*Math.random())+")"; 
				$(this).css({"background-color":color});
			});			
};



//makes a grid based on the specified variable 
var makegrid = function (number) 
{

	for( num = 0; num < number; num++ )
		{
			$("#container").append("<div class = 'row'></div>");

		}

	var cellsforrow="";

	for( num = 0; num < number; num++ )
		{
			cellsforrow+="<div class = 'cells'></div>";

		}	
	
	$(".row").append(cellsforrow);
};


$(document).ready( function () {

	start(16);
	 document.getElementById("regular").onclick = function () {
		regular();
	};
 	document.getElementById("color").onclick = function () {
		color();
	};



});