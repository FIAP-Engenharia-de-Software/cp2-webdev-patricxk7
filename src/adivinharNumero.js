// ## Jogo de Adivinhação (1 ponto)

// **Enunciado:**

// Implemente a função adivinharNumero, que receba um número máximo e um palpite. A função deve gerar um número aleatório entre 0 e `max`. A função deve:

// - Retornar `"Acertou!"` se o número gerado for igual ao `palpite`;
// - Retornar `"Errou! Tente novamente!"` se o palpite estiver incorreto.

function adivinharNumero(max, palpite) {
  const numeroAleatorio = Math.floor(Math.random() * (max + 1));

  if (numeroAleatorio === palpite) {
    return "Acertou";
  } else {
    return "Errou! Tente mais uama vez";
  }
  //TESTE 2
}
// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { adivinharNumero };