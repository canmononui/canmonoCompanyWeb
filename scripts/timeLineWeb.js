$(function(){
	var inputs = $('.input');
	var paras = $('.description-flex-container').find('p');
	$(inputs).click(function(){
		var t = $(this),
				ind = t.index(),
				matchedPara = $(paras).eq(ind);
        console.log("ind",ind);
        timeLineShowPic(ind);
    $(t).add(matchedPara).addClass('active');
    $(inputs).not(t).add($(paras).not(matchedPara)).removeClass('active');
	});
});


function timeLineShowPic(ind) {
  var picWeWork1 = document.getElementById("picWeWork1");
  var picWeWork2 = document.getElementById("picWeWork2");
  var picWeWork3 = document.getElementById("picWeWork3");
  var picWeWork4 = document.getElementById("picWeWork4");
  var picWeWork5 = document.getElementById("picWeWork5");
  var picWeWork6 = document.getElementById("picWeWork6");
  var picWeWork7 = document.getElementById("picWeWork7");

  if(ind == 0){
    picWeWork1.style.display = "block";
    picWeWork2.style.display = "none";
    picWeWork3.style.display = "none";
    picWeWork4.style.display = "none";
    picWeWork5.style.display = "none";
    picWeWork6.style.display = "none";
    picWeWork7.style.display = "none";
    console.log("timeLine1");
  }
  if(ind == 1){
    picWeWork1.style.display = "none";
    picWeWork2.style.display = "block";
    picWeWork3.style.display = "none";
    picWeWork4.style.display = "none";
    picWeWork5.style.display = "none";
    picWeWork6.style.display = "none";
    picWeWork7.style.display = "none";
    console.log("timeLine1");
  }
  if(ind == 2){
    picWeWork1.style.display = "none";
    picWeWork2.style.display = "none";
    picWeWork3.style.display = "block";
    picWeWork4.style.display = "none";
    picWeWork5.style.display = "none";
    picWeWork6.style.display = "none";
    picWeWork7.style.display = "none";
    console.log("timeLine1");
  }
  if(ind == 3){
    picWeWork1.style.display = "none";
    picWeWork2.style.display = "none";
    picWeWork3.style.display = "none";
    picWeWork4.style.display = "block";
    picWeWork5.style.display = "none";
    picWeWork6.style.display = "none";
    picWeWork7.style.display = "none";
    console.log("timeLine1");
  }
  if(ind == 4){
    picWeWork1.style.display = "none";
    picWeWork2.style.display = "none";
    picWeWork3.style.display = "none";
    picWeWork4.style.display = "none";
    picWeWork5.style.display = "block";
    picWeWork6.style.display = "none";
    picWeWork7.style.display = "none";
    console.log("timeLine1");
  }
  if(ind == 5){
    picWeWork1.style.display = "none";
    picWeWork2.style.display = "none";
    picWeWork3.style.display = "none";
    picWeWork4.style.display = "none";
    picWeWork5.style.display = "none";
    picWeWork6.style.display = "block";
    picWeWork7.style.display = "none";
    console.log("timeLine1");
  }
  if(ind == 6){
    picWeWork1.style.display = "none";
    picWeWork2.style.display = "none";
    picWeWork3.style.display = "none";
    picWeWork4.style.display = "none";
    picWeWork5.style.display = "none";
    picWeWork6.style.display = "none";
    picWeWork7.style.display = "block";
    console.log("timeLine1");
  }
}











// ---------------------------------------------------------------------------------
