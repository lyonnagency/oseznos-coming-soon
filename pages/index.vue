<template>
  <div class="coming-soon-main py-5 d-flex">
    <div class="container d-flex justify-content-center flex-wrap">
      <div  class="col-12 d-flex justify-content-center">
        <img id="osezno1" src="../assets/images/oseznos-ico.svg" alt="Coming soon Ozesnos">
      </div>
      <div class="col-12 d-flex justify-content-center">
        <img id="osezno2" src="../assets/images/coming-2.svg" alt="Coming Soon Oseznos">
      </div>
      <div class="col-12 d-flex justify-content-center">
        <div class="d-flex col-6 justify-content-center social-cont align-items-end">
          <!--<a href="#"><img src="../assets/images/facebook.svg" alt=""></a>-->
          <!--<a href="#"><img src="../assets/images/instagram.svg" alt=""></a>-->
          <a target="_blank" href="mailto:Axel.valderrama@tnetworks.com.mx"><img src="../assets/images/mail.svg" alt="Mail Oseznos"></a>
          <a target="_blank" href="https://wa.me/5214433694012"><img src="../assets/images/wap.svg" alt="Whatsapp Oseznos"></a>
          <a target="_blank" href="tel:5214433694012"><img src="../assets/images/phone.svg" alt="Teléfono Oseznos"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }
</script>

<style>
  .coming-soon-main{
    height: 100vh;
  }
  #osezno1 {
    width: 120px;
  }
  #osezno2{
    width: 360px;
  }

  .social-cont img{
    width: 25px;
    height: 20px;
  }
  .social-cont a{
    margin-left: 13px;
    margin-right: 13px;
  }
</style>
