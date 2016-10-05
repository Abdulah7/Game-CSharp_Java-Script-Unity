var health : float;



function Update ()
 {
 
	
	
        if(health <= 0)
      {
       
         GUITextHandler.score += 1000;
   	 
         
        Destroy (gameObject);

       
        }
 
       
 
        
        
        if(health>0  && Input.GetMouseButton(0))
        {
 
        health-=4;
        }
    
         
     
}


