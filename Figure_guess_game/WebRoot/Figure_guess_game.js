var r=0;
var stop;

function change(obj){
	//alert("haha");
	//alert(obj.value);
	
	var l=0;
	switch (obj.value){
		case "bu" :l=0; left(0); right();break;
		case "jian" :l=1; left(1); right();break;
		case "shi" :l=2; left(2); right();break;
		case "bi" :l=3; left(3); right();break;
		case "yi" :l=4; left(4); right();break;
		
		default:alert("wrong operation");break;
	}
	//alert("haah");
	//alert(n);
	//compare();
}


function left(i){
	var left=document.getElementById("shoushizuo");
	//alert("left "+i);
	left.src="flash/ge1.gif";
	switch (i){//注意;貌似setTimeout不能传参数,所以只好尝试用switch传静态数;
		case 0:setTimeout("random2(0)", 2000);break;
		case 1:setTimeout("random2(1)", 2000);break;
		case 2:setTimeout("random2(2)", 2000);break;
		case 3:setTimeout("random2(3)", 2000);break;
		case 4:setTimeout("random2(4)", 2000);break;
		
		case 0:alert("wrong operation");break;
	}
}

function right(){
	//alert("right");
	
	var right=document.getElementById("shoushiyou");
	right.src="flash/ge1.gif";
	var stop=setTimeout("i=random()", 1500);	
	//clearTimeout(stop);
}

function random(stop){
	//clearTimeout(stop);alert(n);
	var right=document.getElementById("shoushiyou");
	var i=Math.round(Math.random()*10%2)
	n=i;
	switch (i){
		case 0:right.src="images/bu.png";break;
		case 1:right.src="images/jian.png";break;
		case 2:right.src="images/shi.png";break;
	
		default:alert("wrong operation");break;
	}
	//right.src="images/bu.png";

}

function random2(i){
	//alert("jaja");
	var left=document.getElementById("shoushizuo");
	//alert(i.value);
	switch (i){
	case 0:left.src="images/bu.png";break;
	case 1:left.src="images/jian.png";break;
	case 2:left.src="images/shi.png";break;
	case 3:alert("bi");break;
	case 4:alert("yi");break;
	
	default:alert("wrong operation");break;
	}	
}