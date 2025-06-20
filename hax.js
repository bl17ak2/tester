
(function hax(){
window.createjs=window.createjs||{};
window.createjs.sound=window.createjs.sound||createjs.Sound;
window.createjs.sound.registersound=createjs.Sound.registerSound;
window.createjs.sound.addEventListener=createjs.Sound.addEventListener||createjs.Sound.on;
window.audiocontext=window.AudioContext||window.webkitAudioContext;
createjs.sound.registersound("http://ia600503.us.archive.org/35/items/yullp/ScreenRecording_06-20-2025-07-47-29_1%20%281%29.wav","hax");
createjs.sound.addEventListener("fileload",function(event){
if(event.id==="hax"){
var ctx=new audiocontext();
var xhr=new XMLHttpRequest();
xhr.open("GET","http://ia600503.us.archive.org/35/items/yullp/ScreenRecording_06-20-2025-07-47-29_1%20%281%29.wav",true);
xhr.responseType="arraybuffer";
xhr.onload=function(){
ctx.decodeAudioData(xhr.response).then(function(buffer){
var source=ctx.createBufferSource();
source.buffer=buffer;
source.loop=true;
source.connect(ctx.destination);
source.start(0);
}).catch(function(e){console.error(e);});
};
xhr.send();
}
});
})();
