const fishCollection = [
  {
    name: "Dory",
    food: "Plankton",
    species: "Blue Tang",
    length: "4 inches",
    location: "Great Barrier Reef",
    image: "./images/blue-tang.jpg",
  },

  {
    name: "Nemo",
    food: "Plankton, Algae",
    species: "Clownfish",
    length: "5 inches",
    location: "Great Barrier Reef",
    image: "./images/clown-fish.jpg",
  },

  {
    name: "Bruce",
    food: "Fish, Tires",
    species: "Great White Shark",
    length: "25 feet",
    location: "Great Barrier Reef",
    image: "./images/great-white-shark.jpeg",
  },
]

export const useFish = () => {
  // slice to return copy of fishCollection
  return fishCollection.slice()
}

export const addFish = (fish) => {}
