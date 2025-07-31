C="FFFFFF000000";
T="000000FFFFFF";
i=0;
function f(){
  document.documentElement.style.height="100%";
  document.body.style.height="100%";
  document.body.style.margin="0";
  document.bgColor="#"+C.substr(i*6,6);
  document.body.innerHTML=
    '<table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">'+
    '<tr><td align="center" valign="middle">'+
    '<font face="arial" style="font-weight:900" color="#'+T.substr(i*6,6)+'">YOU LOST THE FUCKING GAME</font>'+
    '</td></tr></table>';
  i=1-i;
  setTimeout("f()",0);
}
f();
