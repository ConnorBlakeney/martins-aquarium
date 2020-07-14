import { useTips } from "./TipDataProvider.js"
import { TipAsHTML } from "./Tip.js"

export const TipList = () => {
  //gets reference to element on the DOM
  const contentElement = document.querySelector(".tip")

  // collection of tip from TipDataProvider
  const tips = useTips()

  let fishHTMLRepresentations = ""
  for (const currentTipObj of tips) {
    tipHTMLRepresentations += TipAsHTML(currentTipObj)
  }

  // updating HTML of DOM element with Tip List HTML
  contentElement.innerHTML += `
        <article class="tip">
            ${fishHTMLRepresentations}
        </article>
    `
}
