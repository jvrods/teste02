<template>
<q-layout view="hHh lpR fFf">
    <q-header>
         <q-toolbar>
        <q-toolbar-title id="h1" class="large-screen-only constraint">
            Xpaço
         <q-avatar>
            <img src="../assets/droplet-outline.svg" alt="logo">
          </q-avatar>
        </q-toolbar-title>
        <div id="btn-home" class="constraint">
        <q-btn flat rounded color="primary" label="Voltar" class="bg-green-6 text-white" to="/"/>
        </div>
         </q-toolbar>
            <q-main class="constraint row" id="q-main">
                <q-page-container>
                    <div id="texto">
                    <h1 id="textoh1">Sobre nós:</h1>
                    <p id="paratexto">{{thome}}</p>
                    </div>
                </q-page-container>
            </q-main>
    </q-header>
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
.q-header
    background-color: #264057
    height: 70px
#h1
    margin-top: 15px
#textoh1
    color: black
#paratexto
    color: black
.template
    background-color: white
</style>
