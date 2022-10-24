function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 ||  fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        if (Number(passo.value == 0)) {
            window.alert('PASSO INVÁLIDO! Considerando passo = 1')
            passo.value = 1
        }
        if (Number(inicio.value) > Number(fim.value) ) {
            res.innerHTML = 'Contando: <br>'
            var c = Number(inicio.value)
            var f = Number(fim.value)
            var p = Number(passo.value)
            while (c >= f) {
                console.log(c)
                res.innerHTML += ` ${c} \u{1F449}`
                c = c - p
            }
        } else {
            res.innerHTML = 'Contando: '
            var c = Number(inicio.value)
            var f = Number(fim.value)
            var p = Number(passo.value)
            while (c <= f) {
                console.log(c)
                res.innerHTML += ` ${c} \u{1F449}`
                c = c + p
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}
