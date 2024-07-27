

function loadingAnimation() {
  var tl = gsap.timeline()
tl.from(".line h1",{
  y:150,
  stagger: 0.25,
  duration:0.6,
  delay:0.5
})

tl.from("#line1-part1, .line h2",{
  opacity:0,
  onStart : function(){
        var h5timer =  document.querySelector(" #line1-part1 h5")
        var grow=0;
        setInterval(function(){
          if(grow<100){
            h5timer.innerHTML = grow++;
          }
          else {
            h5timer.innerHTML = grow;
          }
        },33);
  },
});

tl.to("#loader",{
  opacity: 0,
  duration: 0.4,
  delay :4,
});

// Create a GSAP timeline
var tl = gsap.timeline();

// Animation on #page1 element
tl.from("#page1 ", {
  delay: 0.1,
  y: 1600,
  opacity: 0,
  duration: 6,
  ease: "power4.out"
});
tl.from(".hero1 h1, #hero2  h1, #hero3 h2, #hero4 h1",{
  y:140,
  stagger: 0.20,
})
tl.from(" #hero1, #page2",{
  opacity:"0",
},"-=1.2")

// Hide #loader element after animation
tl.to("#loader", {
  onComplete: function() {
    document.getElementById("loader").style.display = "none";
  }
});




}
loadingAnimation()

function cursorAnimation (){
  document.addEventListener("mousemove", function(event) {
    gsap.to("#crsr", {
      left: event.clientX,
      top: event.clientY,
      ease: "power2.out",
      duration: 0.5
    });
  });
  

}
cursorAnimation()

function sheryJS() {
  Shery.makeMagnet("#nav h4" , {
  
  });
  
  
  
  Shery.imageEffect(" .image-div , .image-div2",{
    style: 5,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272749932567818},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.61,"range":[0,10]},"metaball":{"value":0.49,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.43,"range":[0,2]},"noise_scale":{"value":7.63,"range":[0,100]}},
    gooey: true
  }
  )
  
  Shery.mouseFollower({
    
  });
  }
sheryJS()

function videoContainerEffect() {
  let videoContainer = document.querySelector(".videoContainer");
  videoContainer.addEventListener("mouseenter", function () {
    videoContainer.addEventListener("mousemove", function (dets) {
      gsap.to("#videoCursor", {
        x: dets.x - 1000,
        y: dets.y - 100,
      });
    });
  });

  videoContainer.addEventListener("mouseleave", function () {
    gsap.to("#videoCursor", {
      top: "10%",
    });
  });
  let flag = 0;
  videoContainer.addEventListener("click", function () {
    let video = document.querySelector(".videoContainer video");
    let img = document.querySelector(".videoContainer img");
   

    if (flag == 0) {
      video.play();
      img.style.opacity = "0";
      document.querySelector(
        "#videoCursor"
      ).innerHTML = `<i class="ri-pause-mini-fill"></i>`;
      gsap.to('#videoCursor',{
        scale : '0.6'
      })
      flag = 1;
    }else{
      video.pause();
      img.style.opacity = "1";
      document.querySelector(
        "#videoCursor"
      ).innerHTML = `<i class="ri-play-mini-fill"></i>`;
      gsap.to('#videoCursor',{
        scale : '1'
      })

      flag = 0;
    }
  });
}
videoContainerEffect()
function flagBhai(){
  document.addEventListener("mousemove",function(dets){
    gsap.to ("#flag",{
      x:dets.x,
      y:dets.y
    })
  })
  document.querySelector("#hero3").addEventListener("mouseenter",
    function(){
  gsap.to("#flag" ,{
    opacity: 1
  })
    })
    document.querySelector("#hero3").addEventListener("mouseleave",
      function(){
    gsap.to("#flag" ,{
      opacity: 0
    })
      })
}
 flagBhai()
 gsap.from("#footer h1",{
  opacity:0,
 
  delay:0.5,
  duration:1,
  onStart: function(){
    $('h1').textillate({ in: { effect: 'fadeIn' } });
  }
})