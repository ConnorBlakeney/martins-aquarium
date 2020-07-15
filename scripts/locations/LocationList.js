import { useLocation } from "./LocationDataProvider.js"
import { LocationAsHTML } from "./Location.js"

export const LocationList = () => {
  //gets reference to element on the DOM
  const contentElementLocation = document.querySelector(".locations")

  // collection of tip from LocationDataProvider
  const locations = useLocation()

  let locationHTMLRepresentations = ""
  for (const currentLocationObj of locations) {
    locationHTMLRepresentations += LocationAsHTML(currentLocationObj)
  }

  // updating HTML of DOM element with Location List HTML
  contentElementLocation.innerHTML += `
          <section class="location">
              ${locationHTMLRepresentations}
          </section>
      `
}
