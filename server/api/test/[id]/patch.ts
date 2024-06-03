import data from "@database";

export default function updateCounter(method: string, id: string) {
  if (method === "plus") {
    data[id as keyof typeof data].count += 1;
  }
  if (method === "minus") {
    data[id as keyof typeof data].count -= 1;
  }
}