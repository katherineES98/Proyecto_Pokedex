var personajes = JSON.parse(poke_file).result
let nombreInput = document.getElementById("nombreInput")
let container = document.getElementById("container")
let pintar = document.getElementById("pintar")

function imprimir(){
  let result="";
  for(let i = 0; i<personajes.length;i++) {
    
     /**     pintar.innerHTML="";* */
      result+= ` <div class="col">
      <div class="card  cardstyle">
          <img src="${personajes[i].ThumbnailImage}" class="card-img-top img-poke" width="100" height="400" alt="...">
          <div class="card-body">
            <h5 class="card-title">${personajes[i].name}</h5>
            <p class="card-text"> <span><b>Abilities: </b></span>${personajes[i].abilities}</p>
            <p class=""><span><b>Type: </b> </span>${personajes[i].type}</p>
          </div>
      </div>
  </div>
  `
    
      }
      pintar.innerHTML = result;
    }

function buscarBtn() {
  
  let personajes= buscar(nombreInput.value)
  let resultado= "";
  /**aqui para que me salaga todas las coinicidencia de lo que bsco si hay 2 del mismo nombre me los acumeule pero no me funciona */
   for (let i = 0; i < personajes.length; i++) {
    
       resultado +=
      ` <div class="col">
      <div class="card h-100 cardstyle">
          <img src="${personajes[i].ThumbnailImage}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${personajes[i].name}</h5>
            <p class="card-text"> <span><b>Abilities: </b></span>${personajes[i].abilities}</p>
            <p class=""><span><b>Type: </b> </span>${personajes[i].type}</p>
            
          </div>
      </div>
  </div>
  `
   }
 
   pintar.innerHTML = resultado;

}

function buscar(nombre) {    
    //pintar.innerHTML = '';
    let array=[];
  for(let i = 0; i<personajes.length;i++) {
    if(nombre === personajes[i].name) {
      array.push(personajes[i])
    }else if(personajes[i].name.indexOf(nombre)!==-1){
      array.push(personajes[i])
    }
    }

    return array
  }


  //imprimir()
 // buscarBtn()
 imprimir()


