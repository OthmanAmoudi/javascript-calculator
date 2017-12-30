function perform(btnVal,space) {
	if (space){
	$('.formula').append(" "+btnVal+" ");
	}
	else{
	$('.formula').append(btnVal);
	//alert("The Value is: " + btnVal);
	}
}

$(document).ready(function(){
   var numbers = ['1','2','3','4','5','6','7','8','9','0','.'];
   var marks = ['+','-','*','/'];
   var space;
   var marksDidPressed = 0;
   var calculation = [];

$(".myBtn").click(function(){
   
var btnVal =  $(this).html(); 
	
	if (btnVal == "BC"){		
		var current = document.getElementsByClassName('formula');
		console.log(current);
	}
	
	if (btnVal !== "AC"){
    if (marks.includes(btnVal) && marksDidPressed >= 1){
    	space = true;
    	perform(btnVal,space);
    	marksDidPressed-=marksDidPressed;
    }
    
    if (numbers.includes(btnVal)){
    	space = false;
    	perform(btnVal,space);
    	marksDidPressed++;
    }
    
    }
    
});

$(".equal").click(function(){
	$('.result').empty();
	var getScreenDigits = $(".formula").html();
	calculation = getScreenDigits.split(" ");
	var lastElement = calculation[calculation.length-1];
	var result = 0;
	if (lastElement === '' ){
		calculation.pop();
		calculation.pop();
	}
	result = result + eval(calculation.join(''));
	$('.result').append(result);
});

$(".clear").click(function(){
	$('.formula').empty();
	$('.result').empty();
});
        
});