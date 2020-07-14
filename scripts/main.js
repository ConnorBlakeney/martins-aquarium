import { useFish } from "./fishDataProvider.js"

const allTheFish = useFish()

for (const fishObj of allTheFish) {
  console.log(fishObj)
}
