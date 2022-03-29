<template>
  <div class="container mt-5">
    <h1 class="text-center mb-5">LISTADO DE PERSONAJES</h1>
    <div class="contenedor d-flex flex-wrap justify-content-evenly">
      <div v-for="caracter of caracteres" :key="caracter.id">
        <div class="card mb-3 p-2" style="width: 18rem;">
          <img v-bind:src="caracter.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><u>{{ caracter.name }}</u></h5>
            <p class="card-text">
              Especie: {{ caracter.species }}<br>
              Genero: {{ caracter.gender }}<br>
              Estado: {{ caracter.status }}
            </p>
            <a href="#" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#Modal'+ caracter.id">Ver mas información</a><br><br>
            <router-link :to="`/episodios/${caracter.id}`" class="btn btn-primary"> Ver listado de capitulos</router-link>
          </div>
        </div>

          <!-- Modal -->
          <div class="modal fade" :id="'Modal'+ caracter.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">{{ caracter.name }}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <img v-bind:src="caracter.image" class="card-img-top" alt="...">
                      </div>
                      <div class="col">
                        <p>
                          Especie: {{ caracter.species }}<br>
                          Genero: {{ caracter.gender }}<br>                        
                          Status: {{ caracter.status }}<br>
                          Origen: {{ caracter.origin.name }}<br>
                          location: {{ caracter.location.name }}<br><br>
                        </p>
                      </div>
                    </div>
                  </div>                
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>


</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      caracteres: []
    }
  },
  methods: {
    async consumirPosts() {
      try {
        const data = await fetch(`https://rickandmortyapi.com/api/character`);
        const getposts = await data.json();
        this.caracteres = getposts.results;
        console.log(this.caracteres.length)
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  },
  created() {
    this.consumirPosts();
  }
}
</script>
