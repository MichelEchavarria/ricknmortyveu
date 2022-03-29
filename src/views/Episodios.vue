<template>
 <div class="container">
   <h1 class="text-center"> Lisado de episodios de {{ episodio.name }}</h1>
   <table class="table">
     <thead>
       <tr>
         <th>Listado de episodios</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td>{{episodio.episode}}</td>
       </tr>
     </tbody>
   </table>
     <div class="mt-5">
         <router-link to="/" class="btn btn-primary"> Volver</router-link>
     </div>   
 </div>
</template>

<script>
 export default {
  name: 'Episodios',
  components: {
  },
    data() {
     return {
       episodio: {}
     }
   },
   methods: {
     async mostrarEpisodios() {
      try {
        const data = await fetch(`https://rickandmortyapi.com/api/character/${this.$route.params.id}`);
        const getEpisodios = await data.json();
        this.episodio = getEpisodios;
        console.log(this.episodio)
      } catch (error) {
        console.log(error);
        throw error;
      }
     }
   },
   created() {
     this.mostrarEpisodios();
   }
 }
</script>

<style>

</style>