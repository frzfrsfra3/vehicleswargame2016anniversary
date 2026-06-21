var fullhealth=300;
var curhealth = fullhealth;
static var lives =3;

function Start()
{
print ("the health " + curhealth);
}
function Update () {
}
function HowIsHealth( contrl : int)
{
if (curhealth >=1)
{curhealth= curhealth +contrl;
print ("the health " + curhealth);
}
else
{
curhealth=0;
Kill();
}
if (curhealth > fullhealth)
{
curhealth=fullhealth;
}
if( fullhealth<1)
{ 
fullhealth=1;
}
}
function OnCollisionEnter(hit :Collision)
{
if (hit.gameObject.tag== "Small Hit")
{HowIsHealth(-100);}
else if (hit.gameObject.tag== "Big Hit")
{HowIsHealth(-200);}
else if (hit.gameObject.tag== "Killer Hit")
{HowIsHealth(-300);}
else if (hit.gameObject.tag== "up100")
{HowIsHealth(100);}
else if (hit.gameObject.tag== "up200")
{HowIsHealth(200);}
else if (hit.gameObject.tag== "up300")
{HowIsHealth(300);}
}
function  Kill()
{
if (lives>0)
{
lives -=1;
curhealth=fullhealth;
}
else
{
lives=0;
}
Debug.Log(lives);
}