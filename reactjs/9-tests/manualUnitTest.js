function test (description, callback){
    try{
        callback()
        console.log(`Teste Aprovado: ${description}`)
    }catch(error){
        console.log(`Teste Falhou: ${description}`)
    }
}


function assertEquals(actual, expected){
    if(actual != expected){
        throw new Error(`Esperava: ${expected} mas chegou ${actual}`)
    }
   
}

function isEven(num){
    return num % 2 === 0;
}

test("Deve retornar 'true'", () =>{
    assertEquals(isEven(2),true)
})
