import data from "@database";

export default defineEventHandler((event) => {
  const id = event.context.params!.id;
  if (data[id as keyof typeof data]) {
    return data[id as keyof typeof data];
  }
  return "Not found";
});
