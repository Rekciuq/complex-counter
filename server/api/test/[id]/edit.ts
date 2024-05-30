import data from "../../../../public/counters_data.json"

export default defineEventHandler(event => {
  const id = event.context.params!.id;
  data[id as keyof typeof data] // get counter that we want to edit

})