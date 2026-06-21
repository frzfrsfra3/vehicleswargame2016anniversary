var QuitBtn : boolean;
function OnMouseEnter ()
{
renderer.material.color=Color.green;
}
function OnMouseExit ()
{
renderer.material.color=Color.white;
}
function OnMouseUp()
{
//renderer.material.color=Color.green;
if (QuitBtn)
{
Application.Quit();
}
else
{
Application.LoadLevel(1);
}
}