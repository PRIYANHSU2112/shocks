
var l1=gsap.timeline()

// gsap.from("#text1>h1",{
//     opacity:0,
//     duration:1,
//     onStart:function(){
//         $('#text1 >h1 ').textillate({in:{effect:'flipInX'}})
//     },
// })

// gsap.from("#text2 h1 ",{
//     opacity:0,
//     duration:1,
//     onStart:function(){
//         $('#text2 h1').textillate({in:{effect:'flipInX'}})
//     },
// })


var imp=document.querySelector("#input input")
var spt1=document.querySelector("#sli-text #p1")
var spt2=document.querySelector("#sli-text #p2")
var spt3=document.querySelector("#sli-text #p3")
imp.addEventListener("input",function(e){
    spt1.textContent=imp.value
    spt2.textContent=imp.value
    spt3.textContent=imp.value
})

var spb1=document.querySelector("#sli-text2 #pt1")
var spb2=document.querySelector("#sli-text2 #pt2")
var spb3=document.querySelector("#sli-text2 #pt3")
imp.addEventListener("input",function(e){
    spb1.textContent=imp.value
    spb2.textContent=imp.value
    spb3.textContent=imp.value
})







gsap.registerPlugin(ScrollTrigger);

var nav=gsap.timeline()
nav.from("#nav",{
    opacity:0,
    y:-80,
    duration:1,
    
})
nav.from("#nav button",{
    opacity:0,
    stagger:0.1,
    y:-30,
    duration:0.3
})

l1.from("#rightimg",{
    opacity:0,
    x:-300,
    y:50,
    duration:1,
    rotate:-360
},'a')

l1.from("#urimg",{
    opacity:0,
    x:-300,
    y:50,
    duration:1,
    rotate:-360
},'b')

l1.from("#leftimg",{
    opacity:0,
    x:300,
    y:50,
    duration:1,
    rotate:360,
},'a')

l1.from("#ulimg",{
    opacity:0,
    x:300,
    y:50,
    duration:1,
    rotate:360
},'b')

l1.from("#explore1",{
    opacity:0,
    rotate:45,
    duration:0.5
},'c')
l1.from("#explore2",{
    opacity:0,
    rotate:90,
    duration:0.5
},'c')
gsap.from("#h2img img",{
    scrollTrigger:{
    scroller:"body",
    trigger:"#h2img img",
    start:"top 80%",
    end:" top 50%",
    
    scrub:1
    },
    opacity:0,
    x:400,
    duration:1
})


gsap.from("#h2img2 img",{
    scrollTrigger:{
    scroller:"body",
    trigger:"#h2img img",
    start:"top 90%",
    end:" top 80%",
   
    scrub:1
    },
    opacity:0,
    x:-300,
    duration:1
})

gsap.from("#one img",{
    scrollTrigger:{
    scroller:"body",
    trigger:"#one ",
    start:"top 70%",
    end:" top 30%",

    scrub:1
    },
    opacity:0,
    y:200,
    duration:1
})

gsap.from("#two img",{
    scrollTrigger:{
    scroller:"body",
    trigger:"#two ",
    start:"top 70%",
    end:" top 30%",

    scrub:1
    },
    opacity:0,
    y:-200,
    duration:1
})

gsap.from("#three img",{
    scrollTrigger:{
    scroller:"body",
    trigger:"#three ",
    start:"top 70%",
    end:" top 30%",
   
    scrub:1
    },
    opacity:0,
    y:200,
    duration:1
})

gsap.from("#home3 h2",{
    scrollTrigger:{
    scroller:"body",
    trigger:"#home3 ",
    start:"top -20%",
    end:" top 30%",

    scrub:2
    },
    opacity:0,
    scale:2,
    duration:1
})

gsap.from("#box1",{
    scrollTrigger:{
    scroller:"body",
    trigger:"#box ",
    start:"top 90%",
    end:" top 30%",

    scrub:2
    },
    opacity:0,
    x:500,
    duration:1
})

gsap.from("#box2",{
    scrollTrigger:{
    scroller:"body",
    trigger:"#box ",
    start:"top 90%",
    end:" top 30%",
  
    scrub:1
    },
    opacity:0,
    x:-500,
    duration:1
})
gsap.from("#box3",{
    scrollTrigger:{
    scroller:"body",
    trigger:"#box ",
    start:"top 90%",
    end:" top 30%",
  
    scrub:1
    },
    opacity:0,
    x:500,
    duration:1
})

gsap.from("#box4",{
    scrollTrigger:{
    scroller:"body",
    trigger:"#box ",
    start:"top 90%",
    end:" top 30%",

    scrub:1,
    },
    opacity:0,
    x:-500,
    duration:1
})
gsap.from("#box5",{
    scrollTrigger:{
    scroller:"body",
    trigger:"#box ",
    start:"top 90%",
    end:" top 30%",
    scrub:1
    },
    opacity:0,
    x:500,
    duration:1
})

gsap.from("#h5l-img img",{
    scrollTrigger:{
    scroller:"body",
    trigger:"#h5l-img",
    start:"top 80%",
    end:" top 30%",
   
    scrub:1
    },
    opacity:0,
    x:-400,
    duration:1
})


gsap.from("#h5r-img img",{
    scrollTrigger:{
    scroller:"body",
    trigger:"#home5",
    start:"50% 80%",
    end:" top 30%",
    markers:true,
    scrub:1
    },
    opacity:0,
    x:200,
    duration:1
})



gsap.from("#h6img img",{
    scrollTrigger:{
    scroller:"body",
    trigger:"#h6img",
    start:"top 80%",
    end:" top 30%",
    markers:true,
    scrub:1
    },
    opacity:0,
    y:200,
    duration:1
})

gsap.from("#a1 img",{
    scrollTrigger:{
    scroller:"body",
    trigger:"#a1",
    start:"top 70%",
    end:" top 30%",

    scrub:1
    },
    opacity:0,
    y:200,
    duration:1
})

gsap.from("#a2 img",{
    scrollTrigger:{
    scroller:"body",
    trigger:"#a2",
    start:"top 70%",
    end:" top 30%",

    scrub:1
    },
    opacity:0,
    y:-200,
    duration:1
})

gsap.from("#a3 img",{
    scrollTrigger:{
    scroller:"body",
    trigger:"#a3 ",
    start:"top 70%",
    end:" top 30%",
   
    scrub:1
    },
    opacity:0,
    y:200,
    duration:1
})