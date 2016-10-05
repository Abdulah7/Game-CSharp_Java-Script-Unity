var maxHealth : float = 100;
var curHealth : float = 100;
var RegenerationMultiplier : float = 1;
var RedHitAlpha : float = 1;
var hitTexture : Texture2D;
private var ActualHitAlpha : float;

function Start () {
	curHealth = maxHealth;
}

function Update () {
	if (curHealth <= 0) {
		Application.LoadLevel(Application.loadedLevel);
		Destroy(gameObject);
	}
	if (curHealth < maxHealth) {
		curHealth += Time.deltaTime * RegenerationMultiplier;
	}
	if (curHealth > maxHealth) {
		curHealth = maxHealth;
	}
	



}

function AdjustHealth (adj : float) {
	curHealth -= adj;
	ActualHitAlpha = RedHitAlpha;
}

function OnGUI () {
	ActualHitAlpha -= Time.deltaTime;
	GUI.color = Color(1,1,1, ActualHitAlpha);
	GUI.DrawTexture(Rect(0,0,Screen.width, Screen.height),hitTexture);
	
		
}




