
//settings variables
var white = $('.white');
var whiteH = $('.whiteH');
var teal = $('.teal');
var tealH = $('.tealH');
var spicyMix = $('.spicyMix');
var spicyMixH = $('.spicyMixH');
var purple = $('.purple');
var purpleH = $('.purpleH');
var pink = $('.pink');
var pinkH = $('.pinkH');
var customPic = $('.customPic');
var yellowH = $('.yellowH');
var body = $('body');
var heading = $('.heading');
var currentColorBody = localStorage.getItem('bodyColor') || "#29C7D7";
var currentColorHead = localStorage.getItem('headColor') || "pink";
//phoebe image Change
// var phoebeImage = $('.phoebeImage');


//settings turn on
white.on("click", whiteBack);
whiteH.on("click", whiteHead);
teal.on("click", tealBack);
tealH.on("click", tealHead);
spicyMix.on("click", mixBack);
spicyMixH.on("click", mixHead);
purple.on("click", purpleBack);
purpleH.on("click", purpleHead);
pink.on("click", pinkBack);
pinkH.on("click", pinkHead);
customPic.on("click", picBack);
yellowH.on("click", yellowHead)
// phoebeImage.on("mouseover", changeImage);
// phoebeImage.on("mouseout", changeImageTwo);

body.css('backgroundColor', currentColorBody);
heading.css('backgroundColor', currentColorHead);

//functions for settings
function whiteBack(){
  var bodyColor = "white";
  body.css('backgroundColor', "white");
  localStorage.setItem("bodyColor", bodyColor);
}
function whiteHead(){
  var headColor = "white";
  heading.css('backgroundColor', "white");
  localStorage.setItem("headColor", headColor);
}
function tealBack(){
  var bodyColor = "#29C7D7";
  body.css('backgroundColor', "#29C7D7");
  localStorage.setItem("bodyColor", bodyColor);
  body.css('backgroundColor', storedBody);
}
function tealHead(){
  var headColor = "#29C7D7";
  heading.css('backgroundColor', "#29C7D7");
  localStorage.setItem("headColor", headColor);
}
function mixBack(){
  var bodyColor = "#874F52";
  body.css('backgroundColor', "#874F52");
  localStorage.setItem("bodyColor", bodyColor);
  body.css('backgroundColor', storedBody);
}
function mixHead(){
  var headColor = "#874F52";
  heading.css('backgroundColor', "#874F52");
  localStorage.setItem("headColor", headColor);
}
function purpleBack(){
  var bodyColor = "#A491D3";
  body.css('backgroundColor', "#A491D3");
  localStorage.setItem("bodyColor", bodyColor);
  body.css('backgroundColor', storedBody);
}
function purpleHead(){
  var headColor = "#A491D3";
  heading.css('backgroundColor', "#A491D3");
  localStorage.setItem("headColor", headColor);
}
function pinkBack(){
  var bodyColor = "pink";
  body.css('backgroundColor', "pink");
  localStorage.setItem("bodyColor", bodyColor);
  body.css('backgroundColor', storedBody);
}
function pinkHead(){
  var headColor = "pink";
  heading.css('backgroundColor', "pink");
  localStorage.setItem("headColor", headColor);
}
function yellowHead(){
  var headColor = "#ffc87e";
  heading.css('backgroundColor', "#ffc87e");
  localStorage.setItem("headColor", headColor);
}
function picBack(){
  body.css('background-image', "url('dittowall.jpg')");
}
function refresh(){
    var storedBody = localStorage.getItem("bodyColor");
    var storedHead = localStorage.getItem("headColor");
}
//phoebeImage functions
// function changeImage(){
//   phoebeImage.attr("src","kai.png");
// }
// function changeImageTwo(){
//   phoebeImage.attr("src","phoebeAbout.jpg");
// }

(function(){

  var SCROLL_WIDTH = 24;

  var btn_popup = document.getElementById("btn_popup");
  var popup = document.getElementById("popup");
  var popup_bar = document.getElementById("popup_bar");
  var btn_close = document.getElementById("btn_close");
  var smoke = document.getElementById("smoke");

  //-- let the popup make draggable & movable.
  var offset = { x: 0, y: 0 };

  popup_bar.addEventListener('mousedown', mouseDown, false);
  window.addEventListener('mouseup', mouseUp, false);

  function mouseUp()
  {
    window.removeEventListener('mousemove', popupMove, true);
  }

  function mouseDown(e){
    offset.x = e.clientX - popup.offsetLeft;
    offset.y = e.clientY - popup.offsetTop;
    window.addEventListener('mousemove', popupMove, true);
  }

  function popupMove(e){
    popup.style.position = 'absolute';
    var top = e.clientY - offset.y;
    var left = e.clientX - offset.x;
    popup.style.top = top + 'px';
    popup.style.left = left + 'px';
  }
  //-- / let the popup make draggable & movable.

  window.onkeydown = function(e){
    if(e.keyCode == 27){ // if ESC key pressed
      btn_close.click(e);
    }
  }

  btn_popup.onclick = function(e){
    // smoke
    spreadSmoke(true);
    // reset div position
    popup.style.top = "20%";
    popup.style.left = "27%";
    popup.style.width = "600px";
    popup.style.height = "330px";
    // popup.style.width = window.innerWidth - SCROLL_WIDTH + "px";
    // popup.style.height = window.innerHeight - SCROLL_WIDTH + "px";
    popup.style.display = "block";
  }

  btn_close.onclick = function(e){
    popup.style.display = "none";
    smoke.style.display = "none";
  }

  window.onresize = function(e){
    spreadSmoke();
  }

  function spreadSmoke(flg){
    // smoke.style.width = window.outerWidth + 100 + "px";
    // smoke.style.height = window.outerHeight + 100 + "px";
    // if (flg != undefined && flg == true) smoke.style.display = "block";
  }

}());
(function(){

  var SCROLL_WIDTH = 24;

  var btn_popupTwo = document.getElementById("btn_popupTwo");
  var popupTwo = document.getElementById("popupTwo");
  var popup_barTwo = document.getElementById("popup_barTwo");
  var btn_closeTwo = document.getElementById("btn_closeTwo");
  var smokeTwo = document.getElementById("smokeTwo");

  //-- let the popup make draggable & movable.
  var offset = { x: 0, y: 0 };

  popup_barTwo.addEventListener('mousedown', mouseDown, false);
  window.addEventListener('mouseup', mouseUp, false);

  function mouseUp()
  {
    window.removeEventListener('mousemove', popupMove, true);
  }

  function mouseDown(e){
    offset.x = e.clientX - popupTwo.offsetLeft;
    offset.y = e.clientY - popupTwo.offsetTop;
    window.addEventListener('mousemove', popupMove, true);
  }

  function popupMove(e){
    popupTwo.style.position = 'absolute';
    var top = e.clientY - offset.y;
    var left = e.clientX - offset.x;
    popupTwo.style.top = top + 'px';
    popupTwo.style.left = left + 'px';
  }
  //-- / let the popup make draggable & movable.

  window.onkeydown = function(e){
    if(e.keyCode == 27){ // if ESC key pressed
      btn_closeTwo.click(e);
    }
  }

  btn_popupTwo.onclick = function(e){
    // smoke
    spreadSmoke(true);
    // reset div position
    popupTwo.style.top = "15%";
    popupTwo.style.left = "30%";
    popupTwo.style.width = "520px";
    popupTwo.style.height = "380px";
    // popup.style.width = window.innerWidth - SCROLL_WIDTH + "px";
    // popup.style.height = window.innerHeight - SCROLL_WIDTH + "px";
    popupTwo.style.display = "block";
  }

  btn_closeTwo.onclick = function(e){
    popupTwo.style.display = "none";
    smokeTwo.style.display = "none";
  }

  window.onresize = function(e){
    spreadSmoke();
  }

  function spreadSmoke(flg){
    // smokeTwo.style.width = window.outerWidth + 100 + "px";
    // smokeTwo.style.height = window.outerHeight + 100 + "px";
    // if (flg != undefined && flg == true) smokeTwo.style.display = "block";
  }

}());

(function(){

  var SCROLL_WIDTH = 24;

  var btn_popupThree = document.getElementById("btn_popupThree");
  var popupThree = document.getElementById("popupThree");
  var popup_bar = document.getElementById("popup_barThree");
  var btn_closeThree = document.getElementById("btn_closeThree");
  var smokeThree = document.getElementById("smokeThree");

  //-- let the popup make draggable & movable.
  var offset = { x: 0, y: 0 };

  popup_barThree.addEventListener('mousedown', mouseDown, false);
  window.addEventListener('mouseup', mouseUp, false);

  function mouseUp()
  {
    window.removeEventListener('mousemove', popupMove, true);
  }

  function mouseDown(e){
    offset.x = e.clientX - popupThree.offsetLeft;
    offset.y = e.clientY - popupThree.offsetTop;
    window.addEventListener('mousemove', popupMove, true);
  }

  function popupMove(e){
    popupThree.style.position = 'absolute';
    var top = e.clientY - offset.y;
    var left = e.clientX - offset.x;
    popupThree.style.top = top + 'px';
    popupThree.style.left = left + 'px';
  }
  //-- / let the popup make draggable & movable.

  window.onkeydown = function(e){
    if(e.keyCode == 27){ // if ESC key pressed
      btn_closeThree.click(e);
    }
  }

  btn_popupThree.onclick = function(e){
    // smoke
    spreadSmoke(true);
    // reset div position
    popupThree.style.top = "20%";
    popupThree.style.left = "27%";
    popupThree.style.width = "600px";
    popupThree.style.height = "370px";
    // popup.style.width = window.innerWidth - SCROLL_WIDTH + "px";
    // popup.style.height = window.innerHeight - SCROLL_WIDTH + "px";
    popupThree.style.display = "block";
  }

  btn_closeThree.onclick = function(e){
    popupThree.style.display = "none";
    smokeThree.style.display = "none";
  }

  window.onresize = function(e){
    spreadSmoke();
  }

  function spreadSmoke(flg){
    // smoke.style.width = window.outerWidth + 100 + "px";
    // smoke.style.height = window.outerHeight + 100 + "px";
    // if (flg != undefined && flg == true) smoke.style.display = "block";
  }

}());
(function(){

  var SCROLL_WIDTH = 24;

  var allPaint = document.getElementById("allPaint");
  var popupPaint = document.getElementById("popupPaint");
  var popup_barPaint = document.getElementById("popup_barPaint");
  var btn_closePaint = document.getElementById("btn_closePaint");
  var smokePaint = document.getElementById("smokePaint");

  //-- let the popup make draggable & movable.
  var offset = { x: 0, y: 0 };

  popup_barPaint.addEventListener('mousedown', mouseDown, false);
  window.addEventListener('mouseup', mouseUp, false);

  function mouseUp()
  {
    window.removeEventListener('mousemove', popupMove, true);
  }

  function mouseDown(e){
    offset.x = e.clientX - popupPaint.offsetLeft;
    offset.y = e.clientY - popupPaint.offsetTop;
    window.addEventListener('mousemove', popupMove, true);
  }

  function popupMove(e){
    popupPaint.style.position = 'absolute';
    var top = e.clientY - offset.y;
    var left = e.clientX - offset.x;
    popupPaint.style.top = top + 'px';
    popupPaint.style.left = left + 'px';
  }
  //-- / let the popup make draggable & movable.

  window.onkeydown = function(e){
    if(e.keyCode == 27){ // if ESC key pressed
      btn_closePaint.click(e);
    }
  }

  allPaint.onclick = function(e){
    // smoke
    spreadSmoke(true);
    // reset div position
    popupPaint.style.top = "20%";
    popupPaint.style.left = "5%";
    popupPaint.style.width = "250px";
    popupPaint.style.height = "350px";
    // popup.style.width = window.innerWidth - SCROLL_WIDTH + "px";
    // popup.style.height = window.innerHeight - SCROLL_WIDTH + "px";
    popupPaint.style.display = "block";
  }

  btn_closePaint.onclick = function(e){
    popupPaint.style.display = "none";
    smokePaint.style.display = "none";
  }

  window.onresize = function(e){
    spreadSmoke();
  }

  function spreadSmoke(flg){
    // smokePaint.style.width = window.outerWidth + 100 + "px";
    // smokePaint.style.height = window.outerHeight + 100 + "px";
    // if (flg != undefined && flg == true) smokePaint.style.display = "block";
  }

}());

(function(){

  var SCROLL_WIDTH = 24;

  var allNotes = document.getElementById("allNotes");
  var popupNotes = document.getElementById("popupNotes");
  var popup_barNotes = document.getElementById("popup_barNotes");
  var btn_closeNotes = document.getElementById("btn_closeNotes");
  var smokeNotes = document.getElementById("smokeNotes");

  //-- let the popup make draggable & movable.
  var offset = { x: 0, y: 0 };

  popup_barNotes.addEventListener('mousedown', mouseDown, false);
  window.addEventListener('mouseup', mouseUp, false);

  function mouseUp()
  {
    window.removeEventListener('mousemove', popupMove, true);
  }

  function mouseDown(e){
    offset.x = e.clientX - popupNotes.offsetLeft;
    offset.y = e.clientY - popupNotes.offsetTop;
    window.addEventListener('mousemove', popupMove, true);
  }

  function popupMove(e){
    popupNotes.style.position = 'absolute';
    var top = e.clientY - offset.y;
    var left = e.clientX - offset.x;
    popupNotes.style.top = top + 'px';
    popupNotes.style.left = left + 'px';
  }
  //-- / let the popup make draggable & movable.

  window.onkeydown = function(e){
    if(e.keyCode == 27){ // if ESC key pressed
      btn_closeNotes.click(e);
    }
  }

  allNotes.onclick = function(e){
    // smoke
    spreadSmoke(true);
    // reset div position
    popupNotes.style.top = "10%";
    popupNotes.style.left = "28%";
    popupNotes.style.width = "600px";
    popupNotes.style.height = "500px";
    // popup.style.width = window.innerWidth - SCROLL_WIDTH + "px";
    // popup.style.height = window.innerHeight - SCROLL_WIDTH + "px";
    popupNotes.style.display = "block";
  }

  btn_closeNotes.onclick = function(e){
    popupNotes.style.display = "none";
    smokeNotes.style.display = "none";
  }

  window.onresize = function(e){
    spreadSmoke();
  }

  function spreadSmoke(flg){
    // smokeNotes.style.width = window.outerWidth + 100 + "px";
    // smokeNotes.style.height = window.outerHeight + 100 + "px";
    // if (flg != undefined && flg == true) smokeNotes.style.display = "block";
  }

}());
// (function(){
//
//   var SCROLL_WIDTH = 24;
//
//   var allGame = document.getElementById("allGame");
//   var popupGame = document.getElementById("popupGame");
//   var popup_barGame = document.getElementById("popup_barGame");
//   var btn_closeGame = document.getElementById("btn_closeGame");
//   var smokeGame = document.getElementById("smokeGame");
//
//   //-- let the popup make draggable & movable.
//   var offset = { x: 0, y: 0 };
//
//   popup_barGame.addEventListener('mousedown', mouseDown, false);
//   window.addEventListener('mouseup', mouseUp, false);
//
//   function mouseUp()
//   {
//     window.removeEventListener('mousemove', popupMove, true);
//   }
//
//   function mouseDown(e){
//     offset.x = e.clientX - popupGame.offsetLeft;
//     offset.y = e.clientY - popupGame.offsetTop;
//     window.addEventListener('mousemove', popupMove, true);
//   }
//
//   function popupMove(e){
//     popupGame.style.position = 'absolute';
//     var top = e.clientY - offset.y;
//     var left = e.clientX - offset.x;
//     popupGame.style.top = top + 'px';
//     popupGame.style.left = left + 'px';
//   }
//   //-- / let the popup make draggable & movable.
//
//   window.onkeydown = function(e){
//     if(e.keyCode == 27){ // if ESC key pressed
//       btn_closeGame.click(e);
//     }
//   }
//
//   allGame.onclick = function(e){
//     // smoke
//     spreadSmoke(true);
//     // reset div position
//     popupGame.style.top = "10%";
//     popupGame.style.left = "30%";
//     popupGame.style.width = "500px";
//     popupGame.style.height = "500px";
//     // popup.style.width = window.innerWidth - SCROLL_WIDTH + "px";
//     // popup.style.height = window.innerHeight - SCROLL_WIDTH + "px";
//     popupGame.style.display = "block";
//   }
//
//   btn_closeGame.onclick = function(e){
//     popupGame.style.display = "none";
//     smokeGame.style.display = "none";
//   }
//
//   window.onresize = function(e){
//     spreadSmoke();
//   }
//
//   function spreadSmoke(flg){
//     // smokePaint.style.width = window.outerWidth + 100 + "px";
//     // smokePaint.style.height = window.outerHeight + 100 + "px";
//     // if (flg != undefined && flg == true) smokePaint.style.display = "block";
//   }
//
// }());
dragElement(document.getElementById("mydiv"));
dragElement(document.getElementById("mydivTwo"));
dragElement(document.getElementById("mydivThree"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  if (h < 12){
  if (h==0){
    document.getElementById('clock').innerHTML =
    "12" + ":" + m + " AM";
  }else{
    document.getElementById('clock').innerHTML =
    h + ":" + m + " AM";
  }
}else if (h>=12){
  if(h ==12){
    document.getElementById('clock').innerHTML =
  "12" + ":" + m + " PM";
}else if (h==13){
  document.getElementById('clock').innerHTML =
  "1" + ":" + m + " PM";
}else if (h==14){
  document.getElementById('clock').innerHTML =
  "2" + ":" + m + " PM";
}else if (h==15){
  document.getElementById('clock').innerHTML =
  "3" + ":" + m + " PM";
}else if (h==16){
  document.getElementById('clock').innerHTML =
  "4" + ":" + m + " PM";
}else if (h==17){
  document.getElementById('clock').innerHTML =
  "5" + ":" + m + " PM";
}else if (h==18){
  document.getElementById('clock').innerHTML =
  "6" + ":" + m + " PM";
}else if (h==19){
  document.getElementById('clock').innerHTML =
  "7" + ":" + m + " PM";
}else if (h==20){
  document.getElementById('clock').innerHTML =
  "8" + ":" + m + " PM";
}else if (h==21){
  document.getElementById('clock').innerHTML =
  "9" + ":" + m + " PM";
}else if (h==22){
  document.getElementById('clock').innerHTML =
  "10" + ":" + m + " PM";
}else if (h==23){
  document.getElementById('clock').innerHTML =
  "11" + ":" + m + " PM";
}
}
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

var noteOne = $('.buttonNote');
var noteTwo = $('.buttonNoteTwo');
var titleNote = $('.titleNote');
var noteSubText = $('.noteSubText');
var noteSubTitle = $('.noteSubTitle');
var lineTitleTwo = $('.lineTitleTwo');
var subNoteOne = $('#subNoteOne');
var subNoteTwo = $('#subNoteTwo');
var tableNote = $('.tableNote');
var tableOne = $('#tableOne');
var cuteGIF = $('.cuteGIF');
var flexGIF = $('.flexGIF');

noteOne.on("click", showNoteOne);
noteTwo.on("click", showNoteTwo);

function showNoteOne(){
  titleNote.text("October 7, 2019 at 4:30PM");
  noteSubTitle.text("What's this for?");
  subNoteOne.text("formatted just like notes on an apple device, my notes are suppose to express what i have learned on a certain day or random thoughts or quotes that i like.");
  noteOne.css('backgroundColor', "#ffc87e");
  noteOne.css('border-right', '2px solid black');
  noteTwo.css('backgroundColor', "transparent");
  noteOne.css('border-right', '2px solid black');
  cuteGIF.width(150);
  cuteGIF.height(150);
  cuteGIF.css('border', '5px solid black');
  cuteGIF.attr("src","https://media1.giphy.com/media/23gh2I75LPNCtY9G67/giphy.gif");
}

function showNoteTwo(){
  noteTwo.css('backgroundColor', "#ffc87e");
  noteTwo.css('border-right', '2px solid black');
  noteOne.css('backgroundColor', "transparent");
  noteOne.css('border-right', '2px solid black');
  subNoteTwo.text("");
  cuteGIF.width(0);
  cuteGIF.height(0);
  cuteGIF.css('border', '1px solid white');
  cuteGIF.attr("src", "https://wallpaperplay.com/walls/full/2/d/e/102437.jpg");
  tableNote.text("");
  tableOne.text("");
  titleNote.text("October 19, 2019 at 9:50PM");
  noteSubTitle.text("Cas Holman");
  subNoteOne.text("Tired of watching rom-coms on Netflix, I decided to turn my attention towards a documentary series: abstract. I clicked on the episode labeled Cas Holman interested from the synopsis that said crafts tools and objects designed to inspire kids (and adults) to play creatively. Play creatively what did that mean? Building with lego instructions? Scheming with Monopoly? Playing with Barbie Dolls? After watching the 45 min video, I realized I was wrong. Cas Holman is a totally different game creator. She doesn't want kids following instructions. They need to be creative with their thoughts. However, with the amount of worksheets, templates and same books shoved into students faces every year, we have no choice but to color inside the lines.");
}

var redesign = $('.redesign');
var pseudo = $('.pseudo');
var justCode = $('.justCode');
var menuProject= $('.menuProject');
var backProject = $('.backProject');
var pseudoPage = $('.pseudoPage');
var justCodePage = $('.justCodePage');
var redesignPage = $('.redesignPage');

redesign.on("click", showProjectRedesign);
pseudo.on("click", showProjectPseudo);
justCode.on("click", showProjectJustCode);
backProject.on("click", backMenu);

function showProjectRedesign(){
  menuProject.css('visibility', 'hidden');
  redesignPage.css('visibility', 'visible');
}

function showProjectPseudo(){
  menuProject.css('visibility', 'hidden');
  pseudoPage.css('visibility', 'visible');
}

function showProjectJustCode(){
  menuProject.css('visibility', 'hidden');
  justCodePage.css('visibility', 'visible');
}
function backMenu(){
  menuProject.css('visibility', 'visible');
  redesignPage.css('visibility', 'hidden');
  pseudoPage.css('visibility', 'hidden');
  justCodePage.css('visibility', 'hidden');
}

var leftArrow = $('.leftArrow');
var rightArrow = $('.rightArrow');
var firstPage = $('.firstPage');
var secPage = $('.secPage');
var thirdPage = $('.thirdPage');
var sis = $('#sis');
var track = $('#track');
var yea = $('#yea');
var maraText = $('#maraText');
var trackText = $('#trackText');
var yeaText = $('#yeaText');
var aboutTracker = 0;

leftArrow.on("click", goBack);
rightArrow.on("click", goNext);
marathon.on("mouseover", showMaraText);
marathon.on("mouseout", hideMaraText);
track.on("mouseover", showTrackText);
track.on("mouseout", hideTrackText);
yea.on("mouseover", showYeaText);
yea.on("mouseout", hideYeaText);

function goNext(){
  if (aboutTracker == 0){
    firstPage.css('visibility', 'hidden');
    secPage.css('visibility', 'visible');
    track.css('visibility', 'visible');
    yea.css('visibility', 'visible');
    marathon.css('visibility', 'visible');
    aboutTracker++;
  }else if (aboutTracker == 1){
    secPage.css('visibility', 'hidden');
    thirdPage.css('visibility', 'visible');
    aboutTracker++;
  }
}
function goBack(){
  if (aboutTracker == 1){
    firstPage.css('visibility', 'visible');
    secPage.css('visibility', 'hidden');
    track.css('visibility', 'hidden');
    yea.css('visibility', 'hidden');
    marathon.css('visibility', 'hidden');
    aboutTracker--;
  }else if (aboutTracker == 2){
    secPage.css('visibility', 'visible');
    thirdPage.css('visibility', 'hidden');
    aboutTracker--;
  }
}
function showMaraText(){
  if (aboutTracker == 1){
    track.css('visibility', 'hidden');
    yea.css('visibility', 'hidden');
    maraText.css('visibility', 'visible');
  }
}
function hideMaraText(){
  if (aboutTracker == 1){
    track.css('visibility', 'visible');
    yea.css('visibility', 'visible');
    maraText.css('visibility', 'hidden');
  }
}
function showTrackText(){
  if (aboutTracker == 1){
    marathon.css('visibility', 'hidden');
    yea.css('visibility', 'hidden');
    trackText.css('visibility', 'visible');
  }
}
function hideTrackText(){
  if (aboutTracker == 1){
    marathon.css('visibility', 'visible');
    yea.css('visibility', 'visible');
    trackText.css('visibility', 'hidden');
  }
}
function showYeaText(){
  if (aboutTracker == 1){
    marathon.css('visibility', 'hidden');
    track.css('visibility', 'hidden');
    yeaText.css('visibility', 'visible');
  }
}
function hideYeaText(){
  if (aboutTracker == 1){
    marathon.css('visibility', 'visible');
    track.css('visibility', 'visible');
    yeaText.css('visibility', 'hidden');
  }
}
