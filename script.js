function gerar(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
        let n = Number(num.value)
    }else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // para limpar a tabuada depois de um resultado
        while (c <= 10){
            let item = document.createElement('option') // criar o elemento option
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item) // adicionar um elemento filho
            c++
        }
    }
}