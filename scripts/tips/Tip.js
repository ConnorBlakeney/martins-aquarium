export const TipAsHTML = (tipObj) => {
  return `
    <section class="tip">
         <div>${tipObj.tip}</div>
         <div>${tipObj.author}</div>
    </section>
    `
}
