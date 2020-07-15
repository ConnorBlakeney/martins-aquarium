export const TipAsHTML = (tipObj) => {
  return `
    <section class="tip">
         <div class="tip__tip">${tipObj.tip}</div>
         <div class="tip__author">${tipObj.author}</div>
    </section>
    `
}
