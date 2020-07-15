import { useTips } from "./TipDataProvider.js"
import { TipAsHTML } from "./Tip.js"

export const TipList = () => {
  //gets reference to element on the DOM
  const contentElementTip = document.querySelector(".content--right")

  // collection of tip from TipDataProvider
  const tips = useTips()

  let tipHTMLRepresentations = ""
  for (const currentTipObj of tips) {
    tipHTMLRepresentations += TipAsHTML(currentTipObj)
  }

  // updating HTML of DOM element with Tip List HTML
  contentElementTip.innerHTML += `
        <section class="tip">
            ${tipHTMLRepresentations}
        </section>
    `
}
