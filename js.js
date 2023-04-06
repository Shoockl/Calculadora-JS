let nome = prompt("Informe seu nome")
let opcao = ''

do { //  do = faça abrir o prompt ao menos uma vez
    
    opcao = prompt (
        "Seja bem-vindo(a) " + nome + " \n" +
        "\n Escolha o modelo da sua operação" +
        "\n1. + "+
        "\n2. - "+
        "\n3. * "+
        "\n2. / "+
        "\n5. Encerar"
    )

    switch(opcao) {
        case "1": 

        function promptInt(mensagem, tenteNovamente) {
            var msg = mensagem;
            while (true) {
                var ret = parseInt(prompt(msg));
                if (!isNaN(ret)) return ret;
                msg = tenteNovamente;
            }
        }
        
        var num1 = promptInt("Informe o primeiro numero", "Por favor, digite um número.\nTente novamente.");
        var num2 = promptInt("Informe o segundo numero", "Por favor, digite um número.\nTente novamente.");

        const x = parseFloat(num1)
        const y = parseFloat(num2)

        const soma = x + y

        alert("O resultado é " + "\n" + soma)
    
    break
    case "2": 

    function promptInt(mensagem, tenteNovamente) {
        var msg = mensagem;
        while (true) {
            var ret = parseInt(prompt(msg));
            if (!isNaN(ret)) return ret;
            msg = tenteNovamente;
        }
    }
    
    var num3 = promptInt("Informe o primeiro numero", "Por favor, digite um número.\nTente novamente.");
    var num4 = promptInt("Informe o segundo numero", "Por favor, digite um número.\nTente novamente.");
    
    

    const a = parseFloat(num3)
    const b = parseFloat(num4)

    const sub = a - b

    alert("O resultado é " + "\n" + sub)
    break
    case "3": 

    function promptInt(mensagem, tenteNovamente) {
        var msg = mensagem;
        while (true) {
            var ret = parseInt(prompt(msg));
            if (!isNaN(ret)) return ret;
            msg = tenteNovamente;
        }
    }
    
    var num5 = promptInt("Informe o primeiro numero", "Por favor, digite um número.\nTente novamente.");
    var num6 = promptInt("Informe o segundo numero", "Por favor, digite um número.\nTente novamente.");

    const c = parseFloat(num5)
    const d = parseFloat(num6)

    const vezes = c * d

    alert("O resultado é " + "\n" + vezes)
     break

     case "4": 

    function promptInt(mensagem, tenteNovamente) {
        var msg = mensagem;
        while (true) {
            var ret = parseInt(prompt(msg));
            if (!isNaN(ret)) return ret;
            msg = tenteNovamente;
        }
    }
    
    var num7 = promptInt("Informe o primeiro numero", "Por favor, digite um número.\nTente novamente.");
    var num8 = promptInt("Informe o segundo numero", "Por favor, digite um número.\nTente novamente.");

    const e = parseFloat(num7)
    const f = parseFloat(num8)

    const dividir = e / f

    alert("O resultado é " + "\n" + dividir)
     break
    }

    }  while (opcao !== "5" )