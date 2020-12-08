<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-white text-primary constraint">
      <q-toolbar>
        <q-toolbar-title id="h1" class="large-screen-only align-center">
            Xpaço
         <q-avatar>
            <img src="../assets/droplet-outline.svg" alt="logo">
          </q-avatar>
        </q-toolbar-title>
        <div id="btn-home">
        <q-btn flat rounded color="primary" label="About us" to="/AboutUs" />
        <q-btn flat rounded color="primary" label="Login" to="/Login" />
        <q-btn flat rounded color="primary" label="Inscreva-se" class="bg-green-6 text-white" to="/Inscricao"/>
    </div>
      </q-toolbar>
    </q-header>
    <q-main class="constraint row" id="q-main">
     <q-page-container>
       <p id="h2body">{{thome}}</p>
      <q-h1 id="h1body" class="large-screen-only">
          Xpaço
      </q-h1>
      <h3 id="h3">{{thome}}</h3>
              <div id="cards" class="q-pa-md column items-start q-gutter-md large-screen-only">
                  <q-card flat bordered class="my-card">
                  <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </q-card-section>
                  </q-card>
                  <q-card flat bordered class="my-card">
                  <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </q-card-section>
                  </q-card>
                  <q-card flat bordered class="my-card">
                  <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </q-card-section>
                  </q-card>
                  <q-card flat bordered class="my-card">
                  <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </q-card-section>
            </q-card>
     </div>
    </q-page-container>
    </q-main>

    <q-footer class="ext-white" id="footer">
      <q-toolbar>
        <q-toolbar-title>
          <P class="text-center large-screen-only" id="pfoot">Xpaço</P>
        </q-toolbar-title>
        <div id="btnfoot">
        <q-btn flat rounded color="white" label="Facebook" to="https://www.facebook.com"/>
        <q-btn flat rounded color="white" label="Twitter" />
        <q-btn flat rounded color="white" label="Instagram"/>
        </div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      thome: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style lang="sass" scoped>
#h1
    font-size: 62px
    align-items: center

#h1body
    margin-left: 745px
    font-size: 200px
    align-items: center
#h2body
  margin-left: 10px
  margin-top:50px
  font-size: 32px
#bodyp
  align-itens: center
#cards
  width: 100%
  height: 200px
  max-width: 350px
#footer
  background-color: #264057
  height: 100px
#btnfoot
  margin-right: 400px
#pfoot
  margin-top: 20px
  margin-right: 400px
</style>
