var curHP:float=100;
var maxHP:float=100;
var maxBAR:float=100;
var HealthBarLength:float;
 
// This is the player's money
var Money:int=0;
 
function OnGUI()
{
    // This code creates the health bar at the coordinates 10,10
    GUI.Box(new Rect(10,10,HealthBarLength,25), "");
    // This code determines the length of the health bar
    HealthBarLength=curHP*maxBAR/maxHP;
}
 
function ChangeHP(Change:float)
{
    // This line will take whatever value is passed to this function and add it to curHP.
    curHP+=Change;
     
    // This if statement ensures that we don't go over the max health
    if(curHP>maxHP)
    {
        curHP=100;
    }
     
    // This if statement is to check if the player has died
    if(curHP<=0)
    {
        // Die
        Debug.Log("Player has died!");
    }
}
 
// This function checks if the player has entered a trigger
function OnTriggerEnter(other:Collider)
{
    // The switch statement checks what tag the other gameobject is, and reacts accordingly.
    switch(other.gameObject.tag)
    {
    case "Heal":
        ChangeHP(25);
        break;
    case "Hurt":
        ChangeHP(-25);
        break;
    case "Money":
        Money+=25;
        break;
    }
    // Finally, this line destroys the gameObject the player collided with.
    Destroy(other.gameObject);
}