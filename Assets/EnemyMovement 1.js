var target : Transform;

var minTarX : float = 1;
var maxTarX : float = 10;
var minTarZ : float = 1;
var maxTarZ : float = 10;
var tarX : float;
var tarZ : float;

var dampX : float;
var dampZ : float;
var timeSwitch : int = 100;

var death : boolean = false;

var patrolling : boolean = false;
var patrolTar : Transform[];
var currentTar : int;

var projectile : GameObject;
var bulletSpawn : Transform;
var countDown : int = 50;

var mats : Material[];
var matCount : int;

function Start(){
	CreateTarPoint();
	matCount = Random.Range(0, 4);
}

function Update(){
	if(target != null){
		transform.GetComponent("NavMeshAgent").destination = target.position;
		transform.LookAt(target);
		countDown--;
		if(countDown <= 0){
			var bullet : GameObject = Instantiate(projectile, bulletSpawn.position, bulletSpawn.rotation);
			bullet.rigidbody.AddForce(transform.forward * 1500);
			countDown = 50;
		}
	}else if(!patrolling){
		if(timeSwitch <= 0){
			timeSwitch = 100;
			CreateTarPoint();
		}else{
			transform.GetComponent("NavMeshAgent").destination = new Vector3(tarX, 0, tarZ);
			timeSwitch -= 1 * Time.deltaTime;
		}
	}
	
	if(death){
		GUITextHandler.score += 100;
		Destroy(gameObject);
	}
	
	if(patrolling && currentTar < patrolTar.Length && target == null){
		transform.GetComponent("NavMeshAgent").destination = patrolTar[currentTar].position;
		
		if(transform.position.x == patrolTar[currentTar].position.x && transform.position.z == patrolTar[currentTar].position.z){
			if(currentTar < patrolTar.Length){
				currentTar++;
			}
			
			if(currentTar == patrolTar.Length){
				currentTar = 0;
			}
		}
	}
	renderer.material = mats[matCount];
}

function CreateTarPoint(){
	dampX = Random.Range(1.0, 3.0);
	dampZ = Random.Range(1.0, 3.0);

	tarX = Random.Range(minTarX, maxTarX) - dampX;
	tarZ = Random.Range(minTarZ, maxTarZ) - dampZ;
}

function OnTriggerEnter(col : Collider){
	if(col.gameObject.tag == "Bullet"){
		death = true;
	}
}