let nome = "Gordinho hugostoso matador de dragões"
let xp = 15200
let nivel = " "

  if (xp <= 1000){
      nivel = "Ferro"
  } else if (xp < 1001 >= 2000 ){
      nivel = "Bronze"
  } else if (xp <2001 >= 5000 ){
      nivel = "Prata"
  } else if (xp < 5001 >= 7000 ){
      nivel = "Ouro"
  } else if (xp < 7001 >= 8000){
      nivel = "Platina"
  } else if (xp < 8001 >= 9000){
      nivel = "Ascendente"
  } else if (xp < 9001 >= 10000){
      nivel = "Imortal"
  } else if (xp <= 10001){
      nivel = "Radiante"
  }
                                              

  console.log("O heroi " + nome + " está no nível " + " Radiante ")
