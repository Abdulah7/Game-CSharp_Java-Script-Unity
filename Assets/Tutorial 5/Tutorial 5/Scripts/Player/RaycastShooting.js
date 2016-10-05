#pragma strict
var Effect : Transform;
var TheDammage = 100;



function Update () {
	
	var hit : RaycastHit;
	var ray : Ray = Camera.main.ScreenPointToRay(Vector3(Screen.width*0.5, Screen.height*0.5,0));

	if (Input.GetMouseButton(0) || Input.GetKey("a"))
	{
		 
	    	if (Physics.Raycast (ray, hit, 30.0f))
		    {
			var particleClone = Instantiate(Effect, hit.point, Quaternion.LookRotation(hit.normal));
			Destroy(particleClone.gameObject,2);
			hit.transform.SendMessage("ApplyDammage", TheDammage, SendMessageOptions.DontRequireReceiver);

	    	}
		
		
	}
	
}