export const LocationAsHTML = (locationObj) => {
  return `
  <section class="location card">
  <div class="location__name">${locationObj.name}</div>
  <div>
    <img class="location__image image--card"
      src="${locationObj.image}"/>
  </div>
  <div class="location__description">${locationObj.description}</div>
</section>
      `
}
