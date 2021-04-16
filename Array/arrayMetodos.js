const pilotos = ['Vetel', 'Alonso', 'Massa']
pilotos.pop() 
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona novo elemento.
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista.
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)