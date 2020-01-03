function ExecuteScript(strId)
{
  switch (strId)
  {
      case "64Ksao3hmqG":
        Script1();
        break;
      case "5jvMx7RTCnA":
        Script2();
        break;
  }
}

function Script1()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script2()
{
  $("#tab-customlink").show();
}

