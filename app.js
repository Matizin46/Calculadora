function calcularSalario() {
    // Pegando os valores dos campos
    const valorHora = parseFloat(document.getElementById('valorHora').value);
    const horasTrabalhadas = parseFloat(document.getElementById('horasTrabalhadas').value);
 
    // Verifica se os valores são válidos
    if (isNaN(valorHora) || isNaN(horasTrabalhadas)) {
      alert("Por favor, preencha todos os campos corretamente!");
      return;
    }
 
    // Calculando o salário com base nas horas trabalhadas
    let salario = 0;
    if (horasTrabalhadas > 44) {
      // Se as horas trabalhadas forem superiores a 44, adiciona 50% sobre as horas extras
      const horasExtras = horasTrabalhadas - 44;
      salario = (44 * valorHora) + (horasExtras * valorHora * 1.5);
    } else {
      // Se não, paga só o valor das horas trabalhadas
      salario = horasTrabalhadas * valorHora;
    }
 
    // Exibindo o resultado
    document.getElementById('resultado').textContent = salario.toFixed(2);
  }