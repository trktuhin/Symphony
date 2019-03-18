<template>
  <v-carousel hide-controls>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
    data(){
        return{
            items: [
          {
            src: "src/assets/slider/banner1.jpg"
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          },
          {
            src: 'src/assets/slider/banner3.jpg'
          }
        ]
        }
    }
}
</script>
