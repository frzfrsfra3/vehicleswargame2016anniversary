#pragma strict
var Health=3;
function Update () {
if (Health ==0)
{
Destroy(gameObject);
}
}
function OnCollisionEnter(Beats : Collision)
{
if (Beats.gameObject.tag == "playerShot")
{
Health -=1;
print ("Hit");
}
}