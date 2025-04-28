import menuImage from "./img/food.jpg";

export function showMenu(target) {
  target.innerHTML = `
    <div class="menu-container">
        <div class="menu-image">
            <img src="${menuImage}" alt="Fine Dining Food">
        </div>
        <div class="menu-content">
            <h1>Prix Fixe Menu</h1>

            <div class="menu-section">
                <h2>Starter</h2>
                <p><strong>Heirloom Tomato & Burrata Salad</strong><br>
                Basil oil, aged balsamic, microgreens<br>
                <em>Paired with: 2022 Carneros Chardonnay</em></p>
            </div>

            <div class="menu-section">
                <h2>First Course</h2>
                <p><strong>Dungeness Crab Risotto</strong><br>
                Meyer lemon, English peas, chive blossoms<br>
                <em>Paired with: 2021 Russian River Sauvignon Blanc</em></p>
            </div>

            <div class="menu-section">
                <h2>Main Course</h2>
                <p><strong>Sonoma Lamb Loin</strong><br>
                Charred asparagus, wild mushroom jus, rosemary potatoes<br>
                <em>Paired with: 2019 Napa Valley Cabernet Sauvignon</em></p>
            </div>

            <div class="menu-section">
                <h2>Dessert</h2>
                <p><strong>Olive Oil Citrus Cake</strong><br>
                Lemon crème fraîche, honeycomb, fresh berries<br>
                <em>Paired with: Late Harvest Muscat</em></p>
            </div>
        </div>
    </div>
    `;
}
