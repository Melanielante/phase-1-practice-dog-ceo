console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function () {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const imgContainer = document.getElementById("dog-image-container");
  const breedList = document.getElementById("dog-breeds");
  const dropdown = document.getElementById("breed-dropdown");
  let allBreeds = [];

  // Challenge 1: Fetch and render images
  fetch(imgUrl)
    .then((res) => res.json())
    .then((data) => {
      data.message.forEach((img) => {
        const imgElement = document.createElement("img");
        imgElement.src = img;
        imgElement.alt = "A cute dog";
        imgElement.style.width = "200px";
        imgContainer.appendChild(imgElement);
      });
    });

  // Challenge 2: Fetch and render breeds
  fetch(breedUrl)
    .then((res) => res.json())
    .then((data) => {
      allBreeds = Object.keys(data.message);
      renderBreedList(allBreeds);
    });

  // Helper function to render breed list
  function renderBreedList(breeds) {
    breedList.innerHTML = ""; // Clear the list first
    breeds.forEach((breed) => {
      const li = document.createElement("li");
      li.textContent = breed;
      breedList.appendChild(li);

      // Challenge 3: Change color on click
      li.addEventListener("click", () => {
        li.style.color = "#ff1493"; // You can pick any color you want
      });
    });
  }

  // Challenge 4: Filter breeds
  dropdown.addEventListener("change", (e) => {
    const selectedLetter = e.target.value;
    const filtered = allBreeds.filter((breed) =>
      breed.startsWith(selectedLetter)
    );
    renderBreedList(filtered);
  });
});
