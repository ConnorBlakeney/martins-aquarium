const tipCollection = [
  {
    tip: "Take the time to pick out the right aquarium.",
    author: "Anonymous",
  },

  {
    tip: "Be sure to clean the tank!",
    author: "Anonymous",
  },
]

export const useTips = () => {
  // slice to return copy of fishCollection
  return tipCollection.slice()
}

export const addTip = (tip) => {}
