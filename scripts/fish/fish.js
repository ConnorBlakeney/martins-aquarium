export const Fish = (fishObj) => {
  return `
  <section class="fish card">
    <div>
      <img
        class="fish__image image--card"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Atlantic_blue_marlin.jpg/220px-Atlantic_blue_marlin.jpg"
      />
    </div>
      <div class="fish__name">${fishObj.name}</div>
      <div class="fish__species">${fishObj.species}</div>
      <div class="fish__length">${fishObj.length}</div>
      <div class="fish__location">
      ${fishObj.location}
      </div>
      <div class="fish__diet">
      ${fishObj.food}
      </div>
  </section>
    `
}
