
var criaJogo = function (sprite) {

    var palavraSecreta = '';
    var lacunas = [];
    var etapa = 1;

    var ganhou = function () {

        return lacunas.length
            ? !lacunas.some(function (lacuna) {
                return lacuna == '';
            })
            : false;
    };

    var perdeu = function () {

        return sprite.isFinished();
    };

    var ganhouOuPerdeu = function () {

        return ganhou() || perdeu();
    };

    var reinicia = function () {

        etapa = 1;
        lacunas = [];
        palavraSecreta = '';
        sprite.reset();
        
        
    };

    var processaChute = function (chute) {
        if (!chute.trim()) throw Error('Chute inválido');

        var exp = new RegExp(chute, 'gi'),
            resultado,
            acertou = false;

        while (resultado = exp.exec(palavraSecreta)) {

            acertou = lacunas[resultado.index] = chute;
        }

        if (!acertou) sprite.nextFrame();
    };


    var criaLacunas = function () {

        for (var i = 0; i < palavraSecreta.length; i++) {
            lacunas.push('');
        }
    };

    var proximaEtapa = function () {

        etapa = 2;
    };


    var respostaErro = function(){


    }

    
    


    var setPalavraSecreta = function (palavra) {
        if (!palavra.trim()) throw Error('Palavra inválida');
        palavraSecreta = palavra;
        criaLacunas();
        proximaEtapa();
        
        var mensagemErro = document.querySelector(".mensagens-erro")    
        mensagemErro.innerHTML = palavra;
    
    
    };



    var getLacunas = function () {

        return lacunas;
    };

    var getEtapa = function () {

        return etapa;
    };

    return {
        setPalavraSecreta,
        getLacunas,
        getEtapa,
        processaChute,
        ganhou,
        perdeu,
        ganhouOuPerdeu,
        reinicia,
        palavraSecreta

    };



};

