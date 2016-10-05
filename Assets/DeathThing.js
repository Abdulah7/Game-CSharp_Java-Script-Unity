
function OnTriggerEnter(col : Collider){
	if(col.gameObject.tag == "Player"){
		Destroy(col.gameObject);
	}
}