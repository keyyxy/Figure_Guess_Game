var r=0;		//r为右手势值,0,1,2分别为布,剪刀,石头
var l=0;
var stop;

function change(obj){
	//alert("haha");
	//alert(obj.value);
	
	
	switch (obj.value){
		case "bu" :l=0; left(0); right();break;
		case "jian" :l=1; left(1); right();break;
		case "shi" :l=2; left(2); right();break;
		case "bi" :l=3; left(3); right();break;
		case "yi" :l=4; left(4);right();break;
		
		default:alert("wrong operation");break;
	}
	//alert("haah");
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
	setTimeout("compare(l,r)",3000);//设置比较函数;
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
	
	switch (i){
		case 0:right.src="images/bu.png";break;
		case 1:right.src="images/jian.png";break;
		case 2:right.src="images/shi.png";break;
	
		default:alert("wrong operation");break;
	}
	
	r=i;//alert("l= "+l+"r= "+r);
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
	case 3:bisheng();break;
	case 4:left.src="images/all.jpg";break;
	
	default:alert("wrong operation");break;
	}	

}

function compare(l,r){
	//alert('l= '+l+'r= '+r);
	if((l==0 && r==0)||(l==1 && r==1)||(l==2 && r==2)){
		alert("You did a good job, it's a draw. Please try again to win");
	}else if((l==0 && r==1)||(l==1 && r==2)||(l==2 && r==0)){
		alert("Sorry dude, lost the change this time, try again and have fun.");
	}else if((l==0 && r==2)||(l==1 && r==0)||(l==2 && r==1)||(l==4)){
		alert("Congratuation, You WIN!!. You're amazing");
	}	
}

function renew(){
	window.location.reload();	
}

function close_sound(){
	var close=document.getElementById("close_sound");
	var music=document.getElementById("music");
		
	if(close.value=='sound off'){
		//alert(close.value);
		close.value="sound on";
		music.src=" ";
	}else if (close.value=="sound on"){
		close.value="sound off";
		music.src="music/ED6100.ogg";
	}
	//alert(close.value);
	//alert(music.src);
}

function time(){
	window.setInterval("time_display()",1000);//调用时间跳转函数
}

function time_display(){
	var time=document.getElementById("time");
	var d=new Date();
	time.innerText="Local_Time: "+d.toLocaleTimeString();	
}

function back_time(){
	window.setInterval("back_time_display()",1000);
}

var n=0;
function back_time_display(){
	
	var back_time=document.getElementById("back_time");
	back_time.innerText="Game_Time: "+n++;
}

function bisheng(){
	var left=document.getElementById("shoushizuo"); 
	//alert("l= "+l+"r= "+r);
	switch (r){
		case 0:l=1;left.src="images/jian.png";break;
		case 1:l=2;left.src="images/shi.png";break;
		case 2:l=0;left.src="images/bu.png";break;
		
		default:alert("wrong operation");break;
	}
}

function back_music(){
	//alert("back_music");
	window.setInterval("re_music()",143000);
}

function re_music(){
	//alert("re_music");
	var music=document.getElementById("music");
	music.src="music/ED6100.ogg";
}