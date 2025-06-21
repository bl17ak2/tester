// very magnificent
function Photoarray(){
  this.ary=[];
  this.push=function(){
    for(var i=0;i<arguments.length;i++){
      this.ary.push(arguments[i]);
    }
  }
}

var photos=new Photoarray();
photos.push("http://delavanlakesvet.com/wp-content/uploads/sites/195/2022/03/smiling-cat-for-web.jpg","http://media.tenor.com/MgtLm-FPdBEAAAAi/meong-cat.gif","http://images.squarespace-cdn.com/content/v1/5859d542f7e0ab537e412489/87d6c723-d4d3-48b6-ad05-b01f449c6fe4/giphy.gif");
window.onload=function(){
document.body.style.userSelect = "none";
document.body.style.cursor="none";
document.body.style.margin="0";
document.body.style.padding="0";
document.documentElement.style.margin="0";
  document.documentElement.style.padding="0";
  var ary=photos.ary;
  document.body.innerHTML="<img name=cat title='I am a random cat, miau' vspace=0 hspace=0 ondragstart='return false;' onselectstart='return false;' style='display:block;visibility:visible;user-select:none;cursor:none;width:100vw;height:100vh;margin:0;padding:0;border:0;cursor:none;' marginwidth=0 marginheight=0 leftmargin=0 bottommargin=0 rightmargin=0 contenteditable=false align=center src='"+ary[Math.floor(Math.random()*ary.length)]+"' draggable=false unselectable=on autofocus='autofocus' tabindex='-1' translate='no' spellcheck='false' lang='en' onerror='document.body.innerHTML=\"<strong><font face=Verdana color=#FF0000>Random cat fucking failed you motherfucking <u>savage</u> idiot!</font></strong>\"' width='100%' height='100%' />";
};
// copyright all to wtfspins websites; to randomcat.com [this site]
//creds to all the image creators - we are not making money of and/or from them
// Idiot check code:
 var user = "idiot";

if (user === "idiot") {
    console.log("Oh for fuck's sake, you absolute idiot.");
    console.log("┌∩┐(-_-)┌∩┐");
    console.log("Seriously, get your shit together and stop fucking around.");
} else {
    console.log("Welcome, " + user + ". Ugh" + ".");
}
// Other..code, outside of the idiot check code, for some reason
Object.defineProperty(console, 'log', {
  get() {
    alert("You don't get to inspect me, fucking idiotic dumbass");
    return () => {};
  }
});
// Oh yes, swearing and jacking was invented in 2000

document.body.style.userSelect = "none";


















//Farework guesses
var wearefriends = new Array("We are friends");