let ok = true

const vermelho = () =>{
    document.querySelector(".vermelho-none").id = "vermelho"
    document.querySelector(".amarelo-none").id = "amarelo-none"
    document.querySelector(".verde-none").id = "verde-none"
   
}
const amarelo = () =>{
    document.querySelector(".amarelo-none").id= "amarelo"
    document.querySelector(".vermelho-none").id = "vermelho-none"
    document.querySelector(".verde-none").id = "verde-none"
    
}
const verde = () =>{
    document.querySelector(".amarelo-none").id= "amarelo-none"
    document.querySelector(".vermelho-none").id = "vermelho-none"
    document.querySelector(".verde-none").id = "verde"
    
}
const esperarVerde = () =>{
    return new Promise(cor => {        
        setTimeout(()=> {cor(verde())            
        },1000)
    })
}


const esperarAmarelo = () =>{
    return new Promise(cor => {
        setTimeout(() => {cor(amarelo())            
        },1200)
    })    
}
const esperarVermelho = () =>{
    return new Promise(cor => {
        setTimeout(() =>{cor(vermelho())            
        },750)
    })
}

const automatico = async () =>{
    ok = true
    verde() 
    while(ok === true){
    await esperarVerde()
    await esperarAmarelo()
    await esperarVermelho()
}
        
}
const parar = () => ok = false
