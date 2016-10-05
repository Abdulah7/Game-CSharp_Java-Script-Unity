
private var lastHitTime : float;
private var hitDirection : Vector3;
private var recoilDirecion : Vector3;
private var deathTime : float;
private var alive : boolean = true;

var temp=0.0;
var health:float=1000;
var maxHealth:float=1000;

function Update(){
	if( health <=0){
		
	
	

		
	

	health=0;
			


	
	
	}
	
}
function OnGUI()
{
   
  
   GUI.Box(new Rect(5,30,45,20),"Health");
   
   GUI.Box(new Rect(55,30,temp,20),health.ToString("0") + "/" + maxHealth);
  
  
   if(GUITextHandler.score == 10000)
   {
     GUI.Box(new Rect(700,100,100,40),"Soldier won!!!");
   }
   else if(health<=0)
   {
   GUI.Box(new Rect(700,100,100,40),"Izgubili ste!");
   GUI.Button(new Rect(700,150,220,40),"Ako želite nastaviti igru stisnite c!");
   if(Input.GetKey("c"))
   {
   health=1000;
   }

    return;
     
  }
}

function SetLastHitTime(){
	lastHitTime = Time.time;
}

function SetLastHitTime(setTime : float){
	lastHitTime = setTime;
}

function GetLastHitTime() : float{
	return lastHitTime;
}

function SetHitDirection(direction : Vector3){
	hitDirection = direction;
}

function GetHitDirection() : Vector3{
	return hitDirection;
}

function SetrecoilDirecion(direction : Vector3){
	recoilDirecion = direction;
}

function GetrecoilDirecion() : Vector3{
	return recoilDirecion;
}

function GetDeathTime() : float{
	return deathTime;
}

function SetHealth(newHealth : float){
	health = newHealth;
}

function GetHealth() : float{
	return health;
}


