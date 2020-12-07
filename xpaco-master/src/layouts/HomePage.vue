<template>
  <q-layout view="hHh lpR fFf " class="constraint">

    <q-header class="bg-white text-primary large-screen-only">
      <q-toolbar class="constraint">
        <q-toolbar-title id="header-title">
          Xpaço
          <q-avatar>
            <img src="../assets/droplet-outline.svg" alt="logo" id="logo">
          </q-avatar>
        </q-toolbar-title>
      <div id="btn-home">
        <q-btn flat rounded color="primary" label="About us" />
        <q-btn flat rounded color="primary" label="Login" />
        <q-btn flat rounded color="primary" label="Increva-se" class="bg-green-6 text-white" />
      </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
    <q-body class="q-pa-md row items-start q-gutter-md">
      <q-h1 id="h1" class="large-screen-only">
        Xpaço
      </q-h1>
      <q-h2 class="small-screen-only orientation-portrait">
        Xpaço
      </q-h2>
      <q-space />
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
        </q-card-section>

        <q-card-section class="q-pt-none" align="right">
          {{ lorem }}
        </q-card-section>
      </q-card>

        <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>

        <q-card flat bordered class="my-card" id="last-card">
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>

      </q-body>
      </q-page-container>
      <q-space />
    <q-footer class="text-white mobile-hide">
      <q-toolbar>
        <q-toolbar-title id="title-footer">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Xpaço
        </q-toolbar-title>
        <div id="btn-footer-home">
        <q-btn flat rounded label="About us" />
        </div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style lang="sass">
.q-header
  height: 90px
#header-title
  font-size: 30px
  margin-top: 25px
#logo
  margin-top: 1px
#btn-home
  margin-top: 25px
#body
  align-itens: center
#h1
  font-weight: bold
  font-size: 300px
.my-card
  width: 100%
  height: 250px
  max-width: 350px
.q-footer
  background:#264057
  height: 170px
#title-footer
  margin-top: 70px
  margin-left: 400px
#btn-footer-home
  margin-right: 350px
  margin-top: 70px
</style>
