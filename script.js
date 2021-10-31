const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('snap');
const flip = document.getElementById('flip');

console.log(navigator);

const constraints = {
   audio: false,
   video:{
      width: canvas.width,
      height: canvas.height
   },
   cameraDirection: 0
}

async function init(){
   try{
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      handleSuccess(stream);
   }
   catch(e){
      // errorMsg.innerHTML = `navigator.getUserMedia.error: ${e.toString()}`;
      new Error(e);
   }
}

function handleSuccess(stream){
   window.stream = stream;
   video.srcObject = stream;
}

init();

const ctx = canvas.getContext('2d');
snap.addEventListener('click', () => {
   console.log(video);
   ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
})

flip.addEventListener('click', () => {
   constraints.cameraDirection == 0?
      constraints.cameraDirection = 1:
      constraints.cameraDirection = 0;
   
   init();
})