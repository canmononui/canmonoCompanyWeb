var slider = document.getElementById("workRange");
// var output = document.getElementById("demo");

// output.innerHTML = slider.value;

slider.oninput = function() {
  var pic1 = document.getElementById("pic1");
  var pic2 = document.getElementById("pic2");
  var pic3 = document.getElementById("pic3");
  var pic4 = document.getElementById("pic4");
  var pic5 = document.getElementById("pic5");
  var pic6 = document.getElementById("pic6");
  var pic7 = document.getElementById("pic7");

  // output.innerHTML = this.value;

  if(this.value == 15){
    // console.log("== 15");
    if (pic1.style.display === "none") {
      pic1.style.display = "block";
    } else {
      pic1.style.display = "none";
    }
    if (pic2.style.display === "none") {
      pic2.style.display = "block";
    } else {
      pic2.style.display = "none";
    }
    
  }
  if(this.value == 30){
    // console.log("== 30");
    if (pic2.style.display === "none") {
      pic2.style.display = "block";
    } else {
      pic2.style.display = "none";
    }
    if (pic3.style.display === "none") {
      pic3.style.display = "block";
    } else {
      pic3.style.display = "none";
    }
  }
  if(this.value == 45){
    // console.log("== 45");
    if (pic3.style.display === "none") {
      pic3.style.display = "block";
    } else {
      pic3.style.display = "none";
    }
    if (pic4.style.display === "none") {
      pic4.style.display = "block";
    } else {
      pic4.style.display = "none";
    }
  }
  if(this.value == 60){
    // console.log("== 60");
    if (pic4.style.display === "none") {
      pic4.style.display = "block";
    } else {
      pic4.style.display = "none";
    }
    if (pic5.style.display === "none") {
      pic5.style.display = "block";
    } else {
      pic5.style.display = "none";
    }
  }
  if(this.value == 75){
    // console.log("== 75");
    if (pic5.style.display === "none") {
      pic5.style.display = "block";
    } else {
      pic5.style.display = "none";
    }
    if (pic6.style.display === "none") {
      pic6.style.display = "block";
    } else {
      pic6.style.display = "none";
    }
  }
  if(this.value == 90){
    // console.log("== 90");
    if (pic6.style.display === "none") {
      pic6.style.display = "block";
    } else {
      pic6.style.display = "none";
    }
    if (pic7.style.display === "none") {
      pic7.style.display = "block";
    } else {
      pic7.style.display = "none";
    }
  }
}