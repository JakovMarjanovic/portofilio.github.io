//navli

const navSlide = () => {
  const icon = document.querySelector(".icon");
  const nav = document.querySelector(".navli");
  const navLinks = document.querySelectorAll(".navli li")
  //toggle nav
  icon.addEventListener("click", () => {
    nav.classList.toggle("nav-active")
  })
}
navSlide()

//------
//vjestine

var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function openTab(tabname) {
  for(tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link")
  document.getElementById(tabname).classList.add("active-tab")
}

//parallax


document.addEventListener('DOMContentLoaded', function() {

    

    let crta = document.getElementById("crta");
    let crta2 = document.getElementById("crta2");
    let narancasta = document.getElementById("narancasta");
    let zuta = document.getElementById("zuta");
    let obris = document.getElementById("obris");
    let krug = document.getElementById("krug");

    window.addEventListener('scroll', function() {
        var value = this.window.scrollY;
        console.log(value)
        if (value < 1500) { // check if the scroll position is less than 1000 pixels
          crta.style.transform = 'translateX(-' + value*0.6 + 'px)';
        }
         value = value-2000
         console.log(value)
         if (value < 600) {
          crta2.style.height = value*1.5+ 'px';
        }
        value = value-10
        if (value < 500) {
          narancasta.style.width = value*0.1+ '%';
          zuta.style.width = value*0.03+ '%';
          //zuta.style.transform = `translateX(${value}px)`;
          krug.style.transform = 'translateX(-' + value*0.1 + 'px)';
         //krug.style.background ='hsl('+value+',' +50+'%,'+ value*0.2+'%)';
          obris.style.width = value*0.3+ 'px';
          obris.style.height = value*0.3+ 'px';
        }
    });
  });

  document.getElementById("screen").innerHTML=this.window.scrollY;
  document.getElementById("screen2").innerHTML=this.window.scrollY;



    


  