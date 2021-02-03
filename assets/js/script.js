var myObj; // basic declaration of json-array
var videoID = 0; // basis declaration of what videoID to play
var xmlhttp = new XMLHttpRequest(); // prepare new XMLHttpRequest
xmlhttp.open("GET", "playlist.json", true); // open json file 'playlist.json'
// xmlhttp.open("GET", "https://www.themealdb.com/api/json/v1/1/search.php?f=b", true); // open json file 'playlist.json'

xmlhttp.onreadystatechange = function () { // when processing complete
  if (this.readyState == 4 && this.status == 200) { // when processing is successful
    //console.log(this.responseText);
    myObj = JSON.parse(this.responseText); // fill myObj parameter with result of parser
  }
}

xmlhttp.send(); // process json code

function playvideo() {
  var sourceplayer = document.getElementById("videoplayer"); // get videoplayer iframe
  if (myObj.length == videoID) {
    videoID = 0; // reset videoID after last video played
  }
  sourceplayer.src = myObj[videoID].youtube_url + "?autoplay=1"; // fill src of iframe
  document.getElementById("artist").innerHTML = myObj[videoID].artist
  document.getElementById("title").innerHTML = myObj[videoID].title
  // Hier komt de code die je er zelf bij moet typen
  //videoID++; // raise videoID, so next video will be played on click
}
// for (let index = 0; index < 5; index++) {
// document.getElementById("playlist")
// playlist.innerHTML("<a onclick="two()">
// <div class="ball">
//    <div class="num">
//       2
//    </div>
// </div>")
// }
function playlistprint(){
  
  playlist.innerHTML(artist + title);
}

for (let index = 0; index < 5; index++) {
  document.getElementById("playlist");
  var artist = document.getElementById("artist");
  var title = document.getElementById("title");
  // playlist.innerHTML(artist + title);
  playlistprint();
  }
  

function one() {
  var sourceplayer = document.getElementById("videoplayer");
  var videoID = 0
  if (myObj.length == videoID) {
    videoID = 0;
  }
  sourceplayer.src = myObj[videoID].youtube_url + "?autoplay=1";
  document.getElementById("artist").innerHTML = myObj[videoID].artist
  document.getElementById("title").innerHTML = myObj[videoID].title
}

function two() {
  var sourceplayer = document.getElementById("videoplayer");
  var videoID = 1
  if (myObj.length == videoID) {
    videoID = 0;
  }
  sourceplayer.src = myObj[videoID].youtube_url + "?autoplay=1";
  document.getElementById("artist").innerHTML = myObj[videoID].artist
  document.getElementById("title").innerHTML = myObj[videoID].title
}

function three() {
  var sourceplayer = document.getElementById("videoplayer");
  var videoID = 2
  if (myObj.length == videoID) {
    videoID = 0;
  }
  sourceplayer.src = myObj[videoID].youtube_url + "?autoplay=1";
  document.getElementById("artist").innerHTML = myObj[videoID].artist
  document.getElementById("title").innerHTML = myObj[videoID].title
}

function four() {
  var sourceplayer = document.getElementById("videoplayer");
  var videoID = 3
  if (myObj.length == videoID) {
    videoID = 0;
  }
  sourceplayer.src = myObj[videoID].youtube_url + "?autoplay=1";
  document.getElementById("artist").innerHTML = myObj[videoID].artist
  document.getElementById("title").innerHTML = myObj[videoID].title
}

function five() {
  var sourceplayer = document.getElementById("videoplayer");
  var videoID = 4
  if (myObj.length == videoID) {
    videoID = 0;
  }
  sourceplayer.src = myObj[videoID].youtube_url + "?autoplay=1";
  document.getElementById("artist").innerHTML = myObj[videoID].artist
  document.getElementById("title").innerHTML = myObj[videoID].title
}
