<template>
  <div class="app-wrapper">
    <div class="container">
      <div class="app-card">
        <div class="app-card-title">
          <h2 class="text-black">Popups</h2>
          <router-link to="/popups/create" class="btn btn-black">
            Create New
          </router-link>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Created At</th>
              <th>Share URL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Test2</td>
              <td>Date</td>
              <td>URL</td>
              <td>
                <div class="btn-group">
                  <router-link to="/" class="btn btn-primary">Test</router-link>
                  <router-link to="/" class="btn btn-primary">Test</router-link>
                  <router-link to="/" class="btn btn-primary">Test</router-link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
