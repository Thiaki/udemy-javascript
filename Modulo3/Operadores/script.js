/* 
OPERADORES DE COMPARAÇÃO
>  maior
>=  maior ou igual
<  menor
<=  menor ou igual

=  atribuição de valor
==  igualdade de valor (não utilizar)
===  igualdade de valor e tipo de variável 
!=  valor diferente (não utilizar)
!==  valor e tipo de variável diferente 
*/

/*
OPERADORES LÓGICOS
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO (inverte uma expressão)
*/


// ------------------------- //

/*
AVALIAÇÃO CURTO CIRCUITO
&& -> retorna o primeiro valor falso ou o último verdadeiro
|| -> retorna o primeiro valor verdadeiro ou o último falso

Valores dados como falso:
false ; 0 ; "" ; null/undefined ; NaN
*/

const corUsuario = null;
const corPadrao = corUsuario || undefined;
// a cor padrão do sistema é preto, então se o usuário continuar com a corUsuario null, vai retornar preto, que é o valor padrão, se a cor do usuário tiver um valor diferente dos falsos, será retornado o primeiro valor verdadeiro, ou seja, a cor usuário
console.log(corPadrao)