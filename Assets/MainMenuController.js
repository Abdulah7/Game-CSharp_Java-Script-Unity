var isPlay : boolean;

function OnMouseEnter(){
	if(isPlay){
		renderer.material.color = Color.magenta;
	}else{
		renderer.material.color = Color.red;
	}
}

function OnMouseExit(){
	renderer.material.color = Color.white;
}

function OnMouseUp(){
	if(isPlay){
		Application.LoadLevel("Scene");
	}else{
		Application.Quit();
	}
}


function OnGUI(){
	if(GUI.Button(Rect(Screen.width/2, Screen.height/2, 100, 50), "Play Game")){
		Application.LoadLevel("Scene");
	}
	
	if(GUI.Button(Rect(Screen.width/2, Screen.height/2+50, 100, 50), "Quit Game")){
		Application.Quit();
	}
}
