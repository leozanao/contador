function calcular(){
    var ini = document.getElementById('inicio')
    var ffim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('res')
    
    if(ini.value.length==0 || ffim.value.length==0 || pas.value.length==0){
        window.alert('[ERRO!] Preencha todos os campos!')
    }else{
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(ffim.value)
        let p = Number(pas.value)
    if(p<=0){
        p=1
    }
    
        if(i<f){
    
        for(let c=i; c<=f; c+= p){
          res.innerHTML += ` ${c} \u{1F449}`  
        }
        
    }else{
        for(let c=i; c>=f; c-= p){
            res.innerHTML += `${c}\u{1F449}`  
        }
     }
     res.innerHTML += `\u{1F3C1}`
    }

}
     