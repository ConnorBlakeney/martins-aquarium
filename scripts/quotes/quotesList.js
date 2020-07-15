import { useQuotes } from "./quotesDataProvider.js"
import { QuotesAsHTML } from "./quotes.js"

export const QuotesList = () => {
  //gets reference to element on the DOM
  const contentElementQuotes = document.querySelector(".quotes")

  // collection of quotes from QuotesDataProvider
  const quotes = useQuotes()

  let quotesHTMLRepresentations = ""
  for (const currentQuotesObj of quotes) {
    quotesHTMLRepresentations += QuotesAsHTML(currentQuotesObj)
  }

  // updating HTML of DOM element with Location List HTML
  contentElementQuotes.innerHTML += `
            <section class="quotes">
                ${quotesHTMLRepresentations}
            </section>
        `
}
