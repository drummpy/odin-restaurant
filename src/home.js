import chefImage from "./img/chef.jpg";

export function showHome(target) {
  console.log(chefImage);
  target.innerHTML = `
    <div class="background-container" style="background-image: url('${chefImage}');">
  <div class="overlay">
    <div class="text-box">
      <h2>Sable & Vine</h2>
    </div>
    <div class="text-box-description">
      <p>Welcome to Sable & Vine, where the elegance of fine dining is paired with the world-renowned wines of Napa Valley. Located in the heart of the city, our restaurant offers a celebration of Western cuisine, crafted with the finest seasonal ingredients and complemented by a curated selection of Napa’s most distinguished wines. At Sable & Vine, every dish, every pour, and every moment is designed to deliver an unforgettable dining experience. Immerse yourself in a journey of flavor and sophistication, where the best of Napa meets the art of culinary craftsmanship.</p>
    </div>
  </div>
</div>
`;
}
