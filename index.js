import { generateTextAndImage } from "./utils.js"

// 1. Mude o valor da variavel para o seu nome
let name = "Breno Augusto"

// 2. Mude o valor da variavel para a sua atividade favorita
let favoriteActivity = "Correr"

// 3. Mude o valor da variavel para o seu lugar favorito
let favoritePlace = "Praia"

// 4. Mude o valor da variavel para o seu autor favorito
let favoriteAuthor = "drummond"

// 4. Configure a IA, definindo a temperatura entre 0 e 1. 
// Temperatura mais alta (perto de 1, deixa mais aleatório)
let temperature = 0.8

// Optional: delete a imagem "avatar.jpg" e adicione uma foto sua
// (lembre-se de renomear sua foto para "avatar.jpg")

generateTextAndImage(name, favoriteActivity, favoritePlace, temperature)
