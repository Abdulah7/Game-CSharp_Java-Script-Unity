@script RequireComponent(AudioSource)
 
var front : AudioClip;

var back: AudioClip;

function Update()
{
 
if (Input.GetMouseButtonDown(0) || Input.GetKey("a")) { audio.PlayOneShot(front, 1.0); }
 
}