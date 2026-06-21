var myCar : Transform;
var qazifaPrefab : Transform;
var carInRange = false;
var shortTime : int;
var reloaded;
var Delay : float = 0.2;
var Wait = 0;
var PowerOfTakeOff = 2000;
var chkdistX : int ;
var chkdistZ : int;

function Awake() 
{
reloaded=true;
}


function Update () 
{
shootable();
if (carInRange)
{//tank fucks car but if tank model has problem replace between transform and mycar posistion
var far2=Quaternion.LookRotation(myCar.position -transform.position);
//slerp = slow look tim.detla :t7rek 3asas wqt
transform.rotation = Quaternion .Slerp (transform.rotation,far2,Time.deltaTime*Delay);
shortTime =Time.time; //#save the time when moving of tank
reloaded =shortTime % 2 ; //# give true or false
if (reloaded)
{AttackCar(shortTime); carInRange=false; //# hal adreb o laa
}
}
}
function AttackCar (shortTime)
{
if (myCar)
{
if (carInRange)
{
if (shortTime != Wait)
{//#instaniate =create qazifa + search for cannon = place of qazifa quatenion = rotation
var qazifa= Instantiate (qazifaPrefab, transform.Find("Cannon").transform.position,Quaternion.identity);
//#take off qazifa with 2000 power
qazifa.rigidbody.AddForce(transform.forward * PowerOfTakeOff);
//if have local fuck to car not global write qazifa.rigidbody.AddRelativeForce(..); or
//qazifa.rigidbody.AddRelativeForce(-transform.forward * PowerOfTakeOff);
Wait=shortTime;
}
}
}
}
function shootable () 
{
var tankPosX = transform.position.x;
var tankPosZ = transform.position.z;
var carPosX = myCar.transform.position.x;
var carPosZ = myCar.transform.position.z;
chkdistX = carPosX - tankPosX;
chkdistZ = carPosZ - tankPosZ;
if ((chkdistZ < 150 ) && ((chkdistX < 15 ) && ( chkdistX > -15)))
{
carInRange =true;
}
else 
{
carInRange = false;
}
}