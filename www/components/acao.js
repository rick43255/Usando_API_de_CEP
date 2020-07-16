$(document).on("click","#buscar", function(){
    $.ajax({
      type:"get", //como vou enviar
      url:"https://viacep.com.br/ws/"+$("#cep").val()+"/json/", //para onde vou enviar
      success:function(data){//executa em caso de dar certo
        var conteudo;
        conteudo = "<p><strong>Logradouro: </strong>"+data.logradouro+"</p>";
        conteudo += "<p><strong>Bairro: </strong>"+data.bairro+"</p>";
        conteudo += "<p><strong>Cidade: </strong>"+data.localidade+"</p>";
        conteudo += "<p><strong>Estado: </strong>"+data.uf+"</p>";

        $("#dados").html(conteudo);
      },
      error:function(){//executa em caso de erro
        alert("Deu erro!!!");
      }
    });
});