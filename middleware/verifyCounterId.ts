export default defineNuxtRouteMiddleware((to, from) => {
  const store = useCounterStore();
  const id = to.params.id;
  if (store.getSingleCounter(id as string) === undefined) {
    return navigateTo("/");
  }
});
