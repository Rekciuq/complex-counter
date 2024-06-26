import data from "@database";

export default defineEventHandler((event) => {
  const id = event.context.params!.id;
  data[id as keyof typeof data]; // get counter that we want to edit
});
