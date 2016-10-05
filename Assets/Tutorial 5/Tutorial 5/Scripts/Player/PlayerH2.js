var health : float=100;
var maxHealth:float=100;
var temp=0.0;



function ONGUI()
{

   GUI.Button(Rect(10,10,100,90),"Health");
   
   GUI.Label(new Rect(45,30,temp,30),health.ToString("0")+ "/" +maxHealth);
   
  
}