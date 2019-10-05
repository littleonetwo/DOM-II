// Your code goes here


// let container = document.querySelector(".container");
// //container.style.margin = '0 auto';
// //console.log(container);
//
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"]);
//
// let ctaImg = document.getElementById("cta-img");
// ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
//
// let middle = document.getElementById("middle-img");
// middle.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
//
// let node = document.createElement("BR");
// navItems = document.querySelectorAll('a');


let navItems = document.querySelectorAll('a');
let count = 0;

while (count < navItems.length){
  navItems[count].addEventListener('mouseover', (e)=>{

    e.target.style.backgroundColor = 'red';
    e.stopPropagation();
  });

  navItems[count].addEventListener('mouseout', (e)=>{

    e.target.style.backgroundColor = 'white';
    e.stopPropagation();
  });

  navItems[count].addEventListener('click', (e)=>{
    e.preventDefault();

  });


  count++;
};

count = 0;

let footer = document.querySelector("footer");

footer.addEventListener('wheel', (e)=>{

  e.target.style.backgroundColor = 'purple';
});

let picture = document.querySelectorAll("img");

while (count < picture.length){
  picture[count].addEventListener('mouseover', (e)=>{

    e.target.style.display = 'none';
  });
  count++;
};

count = 0;

let text = document.querySelectorAll("p");

while (count < text.length){
  text[count].addEventListener('dblclick', (e)=>{

    e.target.style.display = 'none';
  });

  text[count].addEventListener('contextmenu', (e)=>{

    e.target.style.color = 'blue';
  });

  count++;
};

count = 0;

let boxes = document.querySelectorAll("div");
let sections = document.querySelectorAll("section");

while (count < boxes.length){
  boxes[count].addEventListener('dblclick', (e)=>{

    e.target.style.display = 'none';
    //e.stopPropagation();
  });



  boxes[count].addEventListener('contextmenu', (e)=>{

    e.target.style.backgroundColor = 'green';
  });

  boxes[count].addEventListener('mouseover', (e)=>{

    e.target.style.backgroundColor = 'white';
    //e.stopPropagation();
  });

  count++;
};

sections[0].addEventListener('dblclick', (e)=>{

  e.target.style.backgroundColor = 'blue';
});

count = 0;

let page = document.querySelector('body');

page.addEventListener('dblclick', (e)=>{

  e.target.style.backgroundColor = 'black';
  e.stopPropagation();
});
