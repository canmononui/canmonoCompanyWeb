// Open Form modal
function openForm() {
  var sty = document.getElementById("myForm").style.display;
  if(sty == ""){
    document.getElementById("myForm").style.display = "block";
  }
  if(sty == "none"){
    document.getElementById("myForm").style.display = "block";
  }
  if(sty == "block"){
    document.getElementById("myForm").style.display = "none";
  }
}
// Open Form modal

// Function Set data
function sendmail()
{
  var nameContact = document.getElementById("nameContact").value;
  var rankContact = document.getElementById("rankContact").value;
  var campanyContact = document.getElementById("campanyContact").value;
  var emailContact = document.getElementById("emailContact").value;
  var telContact = document.getElementById("telContact").value;
  var faxContact = document.getElementById("faxContact").value;
  var anotherContact = document.getElementById("anotherContact").value;

  // console.log(nameContact, rankContact, campanyContact, emailContact, telContact, faxContact, anotherContact);

  if(rankContact == ""){
    rankContact = "-";
  }
  if(campanyContact == ""){
    campanyContact = "-";
  }
  if(faxContact == ""){
    faxContact = "-";
  }
  if(anotherContact == ""){
    anotherContact = "-";
  }

  if(nameContact == ""){
    // alert("fail nameContact");
    $('#alertMailFail').modal('show');
  }
  else if(emailContact == ""){
    // alert("fail emailContact");
    $('#alertMailFail').modal('show');
  }
  else if(telContact == ""){
    // alert("fail telContact");
    $('#alertMailFail').modal('show');
  }
  else{
    var text = "mailto:jpplastic2560@gmail.com?Subject=สอบถามข้อมูล/สั่งซื้อสินค้า&body=ชื่อผู้ติดต่อ : " + nameContact + "%0D%0Aตำแหน่ง : " + rankContact + "%0D%0Aบริษัท : " + campanyContact + "%0D%0Aอีเมล : " + emailContact + "%0D%0Aโทรศัพท์ : " + telContact + "%0D%0Aแฟกซ์ : " + faxContact + "%0D%0Aอื่นๆ : " + anotherContact;

    window.location.href = text;
  }

}
// Function Set data

// Alert Modal Mail fail
function open123()
{
  $('#alertMailFail').modal('show');
  // $('#myModal123').modal('toggle');
}

function alertMailFailClose()
{
  $('#alertMailFail').modal('hide');
}
// Alert Modal Mail fail