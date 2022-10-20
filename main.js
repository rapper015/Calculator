let screen=document.getElementById("readtheinput");
buttons=document.querySelectorAll('button');
let screenvalue='';
for(item of buttons){
	item.addEventListener('click', (e)=>{
		buttontext=e.target.innerText;
		if(buttontext=="X"){
		buttontext='*';
			screenvalue+=buttontext;
			screen.value=screenvalue;
		}
		else if(buttontext=="π"){
			buttontext='3.14159';
				screenvalue+=buttontext;
				screen.value=screenvalue;
		}
		else if(buttontext=="√"){
			screen.value=MathSQRT(screenvalue);
			screen.value="";
		}
		else if(buttontext=="AC"){
			screenvalue="";
			screen.value=screenvalue;
		}
		else if(buttontext=="="){
			screen.value=eval(screenvalue)
			screenvalue="";
		}
		else if(buttontext=="%"){
			screenvalue=screen.value/100;
			screen.value="";
			screen.value=screenvalue;
		}
		else if(buttontext=="!"){
			let fact=1;
			for(i=1;i<=screen.value;i++){
				fact=i*fact;
			}
			screenvalue="";
			screenvalue+=fact;
			screen.value=screenvalue;
		}

		else{
			screenvalue+=buttontext;
			screen.value=screenvalue;
		}
	})
}