function contar () {
    let ini = Number(document.getElementById('txti').value) 
    let fim = Number(document.getElementById('txtf').value)
    let passo = Number(document.getElementById('txtp').value)
    let res = document.getElementById('res')

    if (ini == 0 || fim == 0 || passo == 0) {
        alert('ERRO Faltam dados')
    } else {
        res.innerHTML = 'contando: '

        if (ini < fim) {
            for (let i = ini; i <= fim ; i += passo){
                res.innerHTML += `${i} \u{1f449} `
                }
        } else {
            for (let i = ini; i >= fim; i -= passo) {
                res.innerHTML += `${i} \u{1f449} `
            }
        }
        res.innerHTML += `fim \u{1F3C1}`

    }
        

    // alert(`i ${ini} f ${fim} passo ${passo}`)

}