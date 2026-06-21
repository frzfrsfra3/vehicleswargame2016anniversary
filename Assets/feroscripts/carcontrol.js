
var speed :float=50;
var rotate : float=2;
function Update () {
var powerofboof=Input.GetAxis("Vertical")*speed;
var powerofrotate=Input.GetAxis("Horizontal")*rotate;
rigidbody.AddRelativeForce(0,0,powerofboof);
transform.Rotate(0,powerofrotate,0);
}
