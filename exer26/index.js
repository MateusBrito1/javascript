let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector ('div#res')
let valores = []
//Para saber se o numero está na lista
function isNumero(n){
       if(Number(n) >= 1 && Number(n) <= 100){  
            return true
       } else {
            return false
       }
}
//Para saber se o valor está na lista
function inLista(n, l){
        if(l.indexOf(Number(n)) != -1){       //Se o número não for encontrado na lista.
            return true
        } else {
            return false
        }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
                valores.push(Number(num.value))
                let item = document.createElement('option')
                item.text = `Valor ${num.value} adicionado.`
                lista.appendChild(item)
                res.innerHTML = ''
    } else {
        alert('Valor invalido ou já encontrado na lista.')
    } 
    num.value = ''
    num.focus()
}


function finalizar() {
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar')

    } else {
        let cad = valores.length
        let maior = Math.max(...valores)     //colocar ... e o nome da array. Math max (pegar o máximo de valores informados)
        let menor = Math.min(...valores)    //Math.min minimo de valor informados.
        let soma = 0 
        for(let som in valores){
            soma += valores[som]
            
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${cad} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    }
}