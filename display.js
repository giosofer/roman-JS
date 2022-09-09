const sbt = document.querySelector("#enviar");

sbt.addEventListener("click", function(e) {
    
    //Quando usuario clicar em enviar executara abaixo
    e.preventDefault();
    //Pega valor inserido
    const entrada = document.querySelector("#valor");
    //Lista de números romanos
    var romanNumber = [
        'I:1',      //0
        'IV:4',     //1
        'V:5',      //2
        'IX:9',     //3 
        'X:10',     //4 
        'XL:40',    //5
        'L:50',     //6 
        'XC:90',    //7
        'C:100',    //8
        'CD:400',   //9
        'D:500',    //10
        'CM:900',   //11
        'M:1000'    //12
    ];
    
    var valorEntrada = entrada.value;
    var i = 12;
    var resultado = "";
    var subArray = romanNumber[i].split(':');
    var valor = Number(subArray[1])
    var nome = String(subArray[0]);

    //Verifica se equadra nas condicoes solicitadas
    if(valorEntrada > 0 && valorEntrada < 4000){
        console.log(valorEntrada);        
        
        function converteNumero(i){
            subArray = romanNumber[i].split(':');
            valor = Number(subArray[1])
            nome = String(subArray[0]);
            valorEntrada -= valor;
            resultado += nome;
            console.log(valorEntrada);
        }
        
        while (valorEntrada >= 1000)    {converteNumero(12);}
        while (valorEntrada >= 900)     {converteNumero(11);}    
        while (valorEntrada >= 500)     {converteNumero(10);}
        while (valorEntrada >= 400)     {converteNumero(9);}    
        while (valorEntrada >= 100)     {converteNumero(8);}
        while (valorEntrada >= 90)      {converteNumero(7);}    
        while (valorEntrada >= 50)      {converteNumero(6);}
        while (valorEntrada >= 40)      {converteNumero(5);}    
        while (valorEntrada >= 10)      {converteNumero(4);}
        while (valorEntrada >= 9)       {converteNumero(3);}    
        while (valorEntrada >= 5)       {converteNumero(2);}
        while (valorEntrada >= 4)       {converteNumero(1);}    
        while (valorEntrada >= 1)       {converteNumero(0);}

        document.getElementById("resultado").value = resultado;

    }   

    else{
        console.log(valorEntrada)
        resultado = "Valor Inválido";
        document.getElementById("resultado").value = resultado;
    }
});