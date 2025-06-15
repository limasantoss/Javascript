let product = 'Teclado Gamer';
let totalProducts = 3
let productOne = 200;
let productTwo = 200;
let producttree = 200;
let discount = 0.10;
let total
let totalWithDiscount
let discountApplied
let priceFinal

if (totalProducts >= 3) {
    total = productOne + productTwo + producttree
    totalWithDiscount = total * discount
    priceFinal = total - totalWithDiscount

} else {
    console.log(`${total}`)
}
console.log(`  Produto : ${product} \n  Valor Unitario : R$ 200 \n  Quantidade : ${totalProducts} \n  Total Aplicado :${discount.toFixed(2)} \n  Total a Pagar R$: ${priceFinal}  `)

/*Melhorias : O que está bom	Pontos a melhorar
 Lógica básica correta (soma, desconto, total)	🔸 Variáveis duplicadas (productOne, productTwo, producttree) — poderia usar um único preço ou array.
 discountApplied nunca é usada.
 else imprime total que pode estar undefined.
 Saída mostra 0.10; o ideal é exibir 10 % ou o valor do desconto em reais.
 Use const para valores que não mudam (boas práticas ES6).*/ 