'use strict'
let little_pics = [
  'photo/ford-m-1-876x535.jpg',
  'photo/ford-m-2-876x535.webp',
  'photo/ford-m-3-876x535.webp',
  'photo/ford-m-4-876x535.jpg',
  'photo/ford-m-5-876x535.jpg',
];
let little_img = document.querySelector(
  "#modern-details .mustang-left .mustang-picture .big-pic img"
);
little_img.src=little_pics[0]
let right_arrow = document.querySelector(
  "#modern-details .mustang-left .mustang-picture .big-pic .right-arrow"
);
let left_arrow=document.querySelector("#modern-details .mustang-left .mustang-picture .big-pic .left-arrow")
let current_slide = 0;
right_arrow.addEventListener("click", function () {
  current_slide++;
  if(current_slide>=little_pics.length){
    current_slide=0
  }
  little_img.src = little_pics[current_slide];
});

left_arrow.addEventListener("click", function () {
  current_slide--;
  if(current_slide==-1){
    current_slide=little_pics.length-1
  }
  little_img.src = little_pics[current_slide];
});



