
var Aim : boolean = false; var Cam : GameObject;


function Update () 
{ 
 if(Input.GetMouseButton(0))
{
   Aim = true; if(Aim == true)
{ 
Cam.active = true; 

} 
}

if(Input.GetMouseButton(1)){ Aim = true; if(Aim){ Cam.active = false; }
}
}