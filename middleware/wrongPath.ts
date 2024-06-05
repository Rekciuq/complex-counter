export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params) {
    return navigateTo("/");
  }
});
