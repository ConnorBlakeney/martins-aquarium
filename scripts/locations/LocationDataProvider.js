const locationCollection = [
  {
    name: "Great Barrier Reef",
    image: "./images/great-barrier-reef.jpeg",
    description:
      "One of Australia’s most remarkable natural gifts, the Great Barrier Reef is blessed with the breathtaking beauty of the world’s largest coral reef. The reef contains an abundance of marine life and comprises of over 3000 individual reef systems and coral cays and literally hundreds of picturesque tropical islands with some of the worlds most beautiful sun-soaked, golden beaches.",
  },

  {
    name: "Atlantic Ocean",
    image: "./images/atlantic-ocean.jpg",
    description:
      "Atlantic Ocean, body of salt water covering approximately one-fifth of Earth’s surface and separating the continents of Europe and Africa to the east from those of North and South America to the west. The ocean’s name, derived from Greek mythology, means the “Sea of Atlas.” It is second in size only to the Pacific Ocean.",
  },
]

export const useLocation = () => {
  // slice to return copy of locationCollection
  return locationCollection.slice()
}

export const addLocation = (location) => {
  locationCollection.push(location)
}
