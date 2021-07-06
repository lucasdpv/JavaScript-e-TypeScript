let nome = "lucas Vieira";
var today = new Date();
var hour = today.getHours();

function emQueTurnoEstou(horario) {
  if (horario < 12) {
    return "manhã";
  } else if (horario > 12 && horario < 18) {
    return "tarde";
  } else {
    return "noite";
  }
}

console.log(`Meu nome é ${nome}. Estou aprendendo JavaScript às ${hour} da ${emQueTurnoEstou(hour)}`);
