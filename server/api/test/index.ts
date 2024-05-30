import data from "../../../public/counters_data.json";

export default defineEventHandler((event) => {
  return data;
});

