
var Distance;
var Target : Transform;
var attackRange = 15.0;
var moveSpeed = 5.0;
var Effect : Transform;
var TheDammage = 100;

function Update () {
	Distance = Vector3.Distance(Target.position, transform.position);
	var hit : RaycastHit;
	var ray : Ray = Camera.main.ScreenPointToRay(Vector3(Screen.width*0.5, Screen.height*0.5, 0));
	
	if(Distance < attackRange)
	{
		if (Physics.Raycast (ray, hit, 100))
		{
		
			var particleClone = Instantiate(Effect, hit.point, Quaternion.LookRotation(hit.normal));
			Destroy(particleClone.gameObject, 2);
			hit.transform.SendMessage("ApplyDammage", TheDammage, SendMessageOptions.DontRequireReceiver);
			attack ();
		}
	}

	
}
	function attack ()
{
	transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);

	
}