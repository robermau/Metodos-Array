let primerArreglo = [1 , 2 , 3, 4]

// console.log(primerArreglo)


// Metodo Push
primerArreglo.push(6)
// console.log(primerArreglo)

primerArreglo.unshift(1,2,3)
// console.log(primerArreglo)

// console.log(primerArreglo.length)


primerArreglo.splice(0,3,4,5,6)

// console.log(primerArreglo)

// Metodo FindIndex
let indice = [1 , 2 , 3, 4 , 9,11,15]
let metodoFindIndex = indice.findIndex(function(elemento){
   return elemento < 10
  })
  // console.log(metodoFindIndex)



// Arreglo de Objetos
  const invitados = [
    {id: 123 , nombre:'Jhonny Depp'},
    {id: 234 , nombre:'Brad Pitt'},
    {id: 567 , nombre:'Leonardo DiCaprio'},
    {id: 890 , nombre:'Morgan Freman'},
  
  ]

  function actores (){
    const listaActores = document.querySelector('.actores')
    let html = ""
    for( let  invitado of invitados){
      html += `<li>${invitado.id}</li>
              <li>${invitado.nombre}</li>`
    }
    listaActores.innerHTML = html


  }


  actores()