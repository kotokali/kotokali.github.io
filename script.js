
function bootUp(){setTimeout(()=>{document.getElementById('boot-screen').style.display='none';document.getElementById('os-interface').style.display='block';initOS();initAudioVisualizer();initSolitaire();},3200);}
function toggleStartMenu(){const menu=document.getElementById('start-menu');menu.style.display=menu.style.display==='block'?'none':'block';}
function openApp(id){closeStartMenu();document.getElementById('app-'+id).style.display='block';}
function closeApp(id){document.getElementById('app-'+id).style.display='none';}
function closeStartMenu(){document.getElementById('start-menu').style.display='none';}
function initOS(){setInterval(()=>{document.getElementById('clock').textContent=new Date().toLocaleTimeString();},1000);}
function initAudioVisualizer(){
const audio=document.getElementById('audio-player'),fileInput=document.getElementById('audio-upload'),canvas=document.getElementById('visualizer'),ctx=canvas.getContext('2d');
let audioCtx,analyser,source,dataArray;
fileInput.addEventListener('change',function(){const url=URL.createObjectURL(this.files[0]);audio.src=url;audio.play();
if(!audioCtx){audioCtx=new(window.AudioContext||window.webkitAudioContext)();analyser=audioCtx.createAnalyser();source=audioCtx.createMediaElementSource(audio);
source.connect(analyser);analyser.connect(audioCtx.destination);analyser.fftSize=64;dataArray=new Uint8Array(analyser.frequencyBinCount);}
function draw(){requestAnimationFrame(draw);analyser.getByteFrequencyData(dataArray);ctx.clearRect(0,0,canvas.width,canvas.height);
for(let i=0;i<dataArray.length;i++){ctx.fillStyle=`rgb(${dataArray[i]+100},50,150)`;ctx.fillRect(i*10,canvas.height-dataArray[i],8,dataArray[i]);}}draw();});}
function initSolitaire(){
const canvas=document.getElementById('solitaire-canvas'),ctx=canvas.getContext('2d');
ctx.fillStyle='green';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.fillStyle='white';
ctx.font='20px monospace';ctx.fillText('Solitaire initialized. Full implementation placeholder.',100,250);}
