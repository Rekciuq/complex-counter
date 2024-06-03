import data from "@database";
import updateCounter from "./patch";

export default defineEventHandler((event) => {
  if (event.method === "PATCH") {
    readBody(event).then((result) => {
      updateCounter(result.method, event.context.params!.id);
    });
  }

  const id = event.context.params!.id;
  if (data[id as keyof typeof data]) {
    return data[id as keyof typeof data];
  }
  return "Not found";
});
