function sendMsg(){


var x;
var r=confirm("Voce tem certeza que deseja enviar essa mensagem?");
if (r==true)
  {
      
    alert("Uma mensagem sera enviada para o whatsapp:" + document.getElementById("idDdd").value + document.getElementById("idRemetente").value )
    destinatario = "https://api.whatsapp.com/send?1=pt_BR&phone=55" + document.getElementById("idDdd").value + document.getElementById("idRemetente").value
    window.open(destinatario)
  }
else
  {
  x="Você pressionou Cancelar!";
  }
document.getElementById("demo").innerHTML=x;
}




