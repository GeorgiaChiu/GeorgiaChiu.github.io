// set images


var images = [
  "/resourse/lazi/lazi02.jpg",
  "/resourse/classic /DSC06320.jpeg",
  "/resourse/others/DSC_7866.jpg",
  "/resourse/halter-top/Hgroup-2.jpeg",
  
  "/resourse/classic /DSC06496.jpeg",
  "/resourse/others/DSC_7805.jpg",
  "/resourse/A-style/Agroup-1.jpeg",

]
// instanciate slider
var rbgShiftSlider = new rbgShiftSlider({
  // nav : true,
  // navElement: '.scene-nav',
  slideImages: images,
  stageWidth: 1280,
  stageHeight: 720,
  displacementImage: 'http://hmongouachon.com/_demos/rgbShiftSlider/displace-circle.png',
  fullScreen: true,
  transitionDuration: 0.55, // must be 0.1 > transitionGhostDuration
  transitionGhostDuration : 0.15,
  transitionFilterIntensity: 350,
  transitionSpriteIntensity: 2,
  mouseDispIntensity: 3,
  interactive : true,
  autoPlay : true,
  autoPlaySpeed : 3000,

  
});
