var parent : GameObject;

function OnTriggerEnter(col : Collider){
	if(col.gameObject.tag == "Player"){
		parent.GetComponent("EnemyMovement").target = col.transform;
	}
}

function OnTriggerExit(col : Collider){
	if(col.gameObject.tag == "Player"){
		parent.GetComponent("EnemyMovement").target = null;
	}
}