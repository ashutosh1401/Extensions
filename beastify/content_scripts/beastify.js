(function () {
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  // Add Beast Image
  function insertBeast(beastURL) {
    removeExistingBeast();
    let beastImage = document.createElement("img");
    beastImage.setAttribute("src", beastURL);
    beastImage.style.height = "100vh";
    beastImage.className = "beastify-image";
    document.body.appendChild(beastImage);
  }
  //remove Beasts image
  function removeExistingBeast() {
    let existingBeasts = document.querySelectorAll(".beastify-image");
    for (let beast of existingBeasts) {
      beast.remove();
    }
  }
  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "beastify") {
      insertBeast(message.beastURL);
    } else if (message.command === "reset") {
      removeExistingBeast();
    }
  });
})();
