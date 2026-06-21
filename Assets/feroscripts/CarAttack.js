var Myrocket : Transform;
var PowerOfTakeOff = 2000;
function Update () {
if (Input.GetKeyUp(KeyCode.F)) //take command from player when click
{
Shoot();
}
}
function Shoot()
{ //beat creats with position quaternion(rotate)
var Beat = Instantiate(Myrocket,transform.Find("MyCannon").transform.position,Quaternion.identity);
Beat.rigidbody.AddRelativeForce(transform.forward * PowerOfTakeOff);//make rigid for poof
}