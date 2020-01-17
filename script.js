function calcular(tipo, dado) {
    
    const visorTela = document.getElementById('visor');
    if(tipo === 'operador'){
        if(dado === '-' || dado === '+' || dado === '*' || dado === '/' || dado === '.'){
            visorTela.value += dado;
        }else if (dado === 'c'){
            visorTela.value = '';
        }
        else{
            let resultado = eval(visorTela.value);
            visorTela.value = resultado;
        }
    }else{
        visorTela.value += dado;
    }
}
