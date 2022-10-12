<template>
  <div class="app-wrapper">
    <div class="container">
      <div class="app-card">
        <div class="app-card-title">
          <slot name="header" />
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
