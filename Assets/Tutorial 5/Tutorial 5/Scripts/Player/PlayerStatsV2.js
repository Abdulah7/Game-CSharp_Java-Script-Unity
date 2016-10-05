
#pragma strict

var MaxHealth = 100;
var Health : int;
var maximumHitPoints = 100;
var hitPoints : float;
var regenerationSpeed : float = 5;

var damageSound : AudioClip[];
private var edamageSound : int = 0;

var playSoundsGO : GameObject;
var shakeGO : GameObject;
var die : AudioClip;
var deadReplacement : Transform;
var mySkin : GUISkin;
var canRegenerate : boolean = true;

private var radar : GameObject;
private var maxHitPoints : int;
var damageTexture : Texture;

private var time : float = 0.0;
private var alpha : float;
private var callFunction : boolean = false;
private var showTexture : boolean = false;
private var damageMessage : boolean = false;



function Start ()
{
	Health = MaxHealth;
	GUI.Box (new Rect (0,0,100,50), "Top-left");
		
	
	
}

function ApplyDammage (damge : int)
{
	Health -= damge;
	

		if(Health <= 0)
	{
		Dead();
	}
}

function Dead()
{
	Destroy(gameObject);
}

function RespawnStats ()
{
	Health = MaxHealth;
}

