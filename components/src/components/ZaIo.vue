<template>
    <input type="text" style="padding:10px" v-model="nom" placeholder="Entrer ici ...">
    {{ a }} {{ nom }}
    <div class="container">
        <div class="row">
            <div id="blc1" class="col-sm-6 col-md-4 col-lg-3">
                orange
            </div>
            <div id="blc2" class="col-sm-6 col-md-4 col-lg-3">
                pomme
            </div>
            <div id="blc3" class="col-sm-6 col-md-4 col-lg-3">
                banane
            </div>
            <div id="blc4" class="col-sm-6 col-md-4 col-lg-3">
                fraise
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ZaIo",
    data() {
        return {
            a: "Hi I'mthfghfghfghfghfgh",
            nom: "",
        }
    }
}
</script>

<style scoped>
    .container {
        background:red;
        width:600px;
        height:400px;
    }

    #blc1 {
        border: solid black;
        background: orange;
        margin-top: 20px;
        align-content: center;    

    }

    #blc2 {
        border: solid black;
        background: green;
        margin-top: 20px;
    
    }

    #blc3 {
        border: solid black;
        background: yellow;
        margin-top: 20px;
    }

    #blc4 {
        border: solid black;
        background:red;
        margin-top: 20px;
    }
</style>

