function soma(x, y) {
    if (x !== 'number' || y !== 'number'){
        // Criado um novo erro e se chegar no treow ele sai da funcition
        throw new Error("x ou y não é um número")
    }
    return x + y
}

try{
    console.log(soma(1,2))
    console.log(soma('1',2))
}
catch (err) {
    // Exibe o erro dado
    console.log(err)
}
finally {
    // Sempre vai ser executado, independente de erro ou não
}