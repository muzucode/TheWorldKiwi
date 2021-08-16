<template>
<div class="container  mt-3 ">
  <MainCard>
    <!-- <h1 class="display-4 mb-5">Rene Descartes Portrait</h1> -->
    <!-- <img class="mb-5" src="https://freepikpsd.com/media/2019/10/descartes-png-3-Transparent-Images.png"/>
    <p>A still of the legendary philosopher, Rene Descartes</p>
    <p><b>Rarity: 76</b></p>
    <p><i>265,876 in circulation</i></p>
    <p><i>Item ID: Fbsh46Fhfcb24</i></p> -->
    <p class="display-2">{{winMessage}}</p>
    <p class="display-7">{{rand}}</p>
    

  </MainCard>
  <button @click="generateWork" type="button" class="btn btn-lg btn-secondary mt-5 w-25">Generate</button>
  <button @click="getReq" type="button" class="btn btn-lg btn-secondary mt-5 w-25">Send get request</button>
  <button @click="rollRand, loadWork" type="button" class="btn btn-lg btn-secondary mt-5 w-25">Random #</button>
<!-- rebuild -->
</div>
</template>

<script>
import MainCard from '../components/MainCard.vue';
import AmplifyAPIService from '../services/AmplifyAPIService';

export default {
  name: 'Home',
  data: function () {
    return {
      title: '',
      subtitle: '',
      rarity: '',
      circulation: 0,
      id: '',
      rand: 0,
      winMessage: ''
    }
  },
  components: {
    MainCard
  },
  methods: {
    getReq: function () {
      AmplifyAPIService.getReq();
    },
    getWorks: function (){
      AmplifyAPIService.getWorks();
    },
    generateWork: function (){
      AmplifyAPIService.generateWork();
    },
    generateItem: function() {
      AmplifyAPIService.generateItem();
    },
    setWinMessage: function(rand) {
      // Generate random number
      if(rand >= 0 && rand < 50) {
        this.winMessage = 'Common';
      } else if(rand >= 50 && rand < 70) {
        this.winMessage = 'Uncommon';
      } else if(rand >= 70 && rand < 85) {
        this.winMessage = 'Rare';
      } else if(rand >= 85 && rand < 95) {
        this.winMessage = 'Epic';
      } else if(rand >= 95 && rand <= 100) {
        this.winMessage = 'Legendary';
      } 
    },
    loadWork: function () {
      AmplifyAPIService.loadWork();
    },
    rollRand: function() {
      // Generate random number
      const rand = Math.round(Math.random(1) * 100);
      this.rand = rand;
      this.setWinMessage(rand);
      this.loadWork(rand);
    }
  },
  activated: function() {
    this.rollRand();
  }
}
</script>