#pragma strict

var Health = 1000;

function ApplyDammage (TheDammage : int)
{

	Health -= 10;

	if(Health <= 0)
	{
		Dead();
		   GUITextHandler.score += 1000;
	}
}

function Dead()
{
	Destroy (gameObject);
	   
}