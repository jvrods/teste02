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
    </q-header>
  <div class="q-pa-md" id="form">
    <div class="q-gutter-md constraint" style="max-width: 400px" id="input">
      <q-input standout="bg-teal text-white" v-model="text" label="Name" />
       <q-input
        filled
        v-model="birth"
        label="Data de nascimento"
        mask="##/##/####"
      />
      <q-input standout="bg-teal text-white" v-model="text" label="Nickname" />
      <q-input standout="bg-teal text-white" v-model="text" label="Email" />
      <q-input standout="bg-teal text-white" v-model="text" label="Endereço" />
      <q-input standout="bg-teal text-white" v-model="text" label="Cidade" />
      <q-input standout="bg-teal text-white" v-model="text" label="Estado" />
       <q-input
        filled
        v-model="cep"
        label="CEP"
        mask="#####-###"
      />
      <q-input
        filled
        v-model="mobile"
        label="Phone"
        mask="(##) #### - #####"
      />
     <q-btn :ripple="false" color="secondary" label="Inscrever" id="btn-form" to="/Profile"/>
   </div>
   </div>
</q-layout>
</template>
<script>

</script>

<style lang="sass" scoped>
.q-header
    background-color: #264057
    height: 70px
#h1
    margin-top: 15px
.template
    background-color: white
#btn-home
    margin-top: 15px
#form
    margin-top: 200px
#input
    width: 100%
#btn-form
    margin-left: 85px
    width: 250px
</style>
