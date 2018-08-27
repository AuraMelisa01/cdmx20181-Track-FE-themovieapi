
window.getMovies = (api,search) => {
  return fetch(`http://www.omdbapi.com/?apikey=${api}&s=${search}`)
  .then(response => response.json())
  .then(data => {
    return (data);
    card(data);
  });
};



btnBuscar.addEventListener('click', () => {
  document.getElementById('movies').innerHTML = '';
  const buscar = document.getElementById("search").value;
  // const buscar= `${Search}`;
  getMovies('83655ae3', buscar)
  .then(data =>{
    console.log(data);
    card(data);
  })
});

btnBatman.addEventListener('click', () => {
  document.getElementById('movies').innerHTML = '';
  getMovies('83655ae3','batman')
  .then(data =>{
    console.log(data);
    card(data);
  })
});


btnAlien.addEventListener('click', () => {
  document.getElementById('movies').innerHTML = '';
  getMovies('83655ae3','alien')
  .then(data =>{
    console.log(data);
    card(data);
  })
});

btnIndiana.addEventListener('click', () => {
  document.getElementById('movies').innerHTML = '';
  getMovies('83655ae3','indiana jones')
  .then(data =>{
    console.log(data);
    card(data);
  })
});


const card = (data) => {
  for (let i=0; i < data.Search.length; i++){
    if(data.Search[i].Poster === 'N/A'){
      data.Search[i].Poster = '../images/cine.png';
    }
    document.getElementById("movies").innerHTML+=`
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src=${data.Search[i].Poster} alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${data.Search[i].Title}</h5>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#${data.Search[i].imdbID}">
        + Información
      </button>

      <!-- Modal -->
      <div class="modal fade" id="${data.Search[i].imdbID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">${data.Search[i].Title}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body centrar">
              <img class="rounded float-left centrar" src=${data.Search[i].Poster} alt="Card image cap">
              <div class="input-group mb-7">  
              <p class="card-text"> <p>                
              </div>
              <div class="">
                <p class="card-text"> Tipo: ${data.Search[i].Type} <p>
              </div>
              <div class="">
                <p class="card-text"> Año: ${data.Search[i].Year} <p>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-warning" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> `
  }
}

const btnLogout = document.getElementById('btnLogout');

// Función para salir
btnLogout.addEventListener('click', e => {
  firebase.auth().signOut();
  window.location.assign('../index.html');
});

