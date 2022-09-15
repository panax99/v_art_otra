<template>
   <div class="container-fluid vh-100 p-3 resp dk dark_b">
        <div class="h-100 bord-dark">
          <CompUn/>
          <div class="d-flex justify-content-evenly align-items-baseline m-5">
              <router-link to="/pana"><div class="person pana"></div></router-link>
              <router-link to="/sanda"><div class="person sanda"></div></router-link>
              <router-link to="/samy"><div class="person samy"></div></router-link>
              <router-link to="/tsiky"><div class="person tsiky"></div></router-link>
              <router-link to="/cedi"><div class="person cedi"></div></router-link>
          </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import CompUn from '@/components/CompUn.vue'
export default {
  name: 'HomeView',
  components: {
    CompUn,
}
}
</script>

<style>
@font-face {
  font-family: 'Yeseva One';
  src: url('../assets/YesevaOne-Regular.ttf');
}

.sanda {
  background:url('../assets/sanda.jpg');
  background-size: cover;
}
.pana {
  background:url('../assets/za2\ ro.jpg');
  background-size: cover;
}
.samy {
  background:url('../assets/samy.jpg');
  background-size: cover;
}
.cedi {
  background:url('../assets/cedi.jpg');
  background-size: cover;
}
.tsiky {
  background:url('../assets/tsiky.jpg');
  background-size: cover;
}
</style>
