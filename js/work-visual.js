// set images


var images = [
    "/resourse/works/visuals/visual02.jpg",
    "/resourse/works/visuals/visual03.jpg",
    "/resourse/works/visuals/visual04.jpg",
    "/resourse/works/visuals/visual05.jpg",
  ]
  // instanciate slider
  var rbgShiftSlider = new rbgShiftSlider({
    // nav : true,
    // navElement: '.scene-nav',
    slideImages: images,
    stageWidth: 1920,
    stageHeight: 1080,
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
