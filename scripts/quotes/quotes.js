export const QuotesAsHTML = (quotesObj) => {
  return `
    <section class="quote card">
        <div class="quote__text">${quotesObj.quote}</div>
        <div class="quote__author">${quotesObj.author}</div>
    </section>
        `
}
