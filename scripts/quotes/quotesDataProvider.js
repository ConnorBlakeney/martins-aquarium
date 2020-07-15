const quotesCollection = [
  {
    quote:
      "Many men go fishing all their lives without knowing it's not the fish they're after.",
    author: "Henry David Thoreau",
  },

  {
    quote: "Just keep swimming!",
    author: "Dory",
  },
]

export const useQuotes = () => {
  // slice to return copy of quotesCollection
  return quotesCollection.slice()
}

export const addQuotes = (quotes) => {
  quotesCollection.push(quotes)
}
