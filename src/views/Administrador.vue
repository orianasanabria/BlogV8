<template>
  <div class="administrador">
    <header class="masthead">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="site-heading">
              <h1 v-if="type === 'simple'">
                <strong>Bienvenido a la página de administración</strong>
              </h1>
              <h1 v-if="type === 'avanzado'">
                <strong
                  >Esta página de administración está en construcción. Intente
                  como administrador simple</strong
                >
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: ["type"],
};
</script>

<style></style>
