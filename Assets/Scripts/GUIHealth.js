var PosX : float = 10;
var PosY : float = 700;
var playerHealth : PlayerHealth;
var guiStyle : GUIStyle;


function OnGUI () {
	//GUI.Box(Rect( 5, 700, 250, 150), "FPS Kit 2.0");
	GUI.Label(Rect( PosX, PosY, 300, 200), "Health:" + Mathf.FloorToInt(playerHealth.curHealth) + "%", guiStyle);

}