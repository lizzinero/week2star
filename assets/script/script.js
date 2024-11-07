function calculateTotalPrice(quantity = 4, price = 4000) {
    const result = quantity * price;
    return result
}

const totalPrice = calculateTotalPrice();

const pricePound = totalPrice.toLocaleString(
    'en-EN', {style: 'currency', currency: "GBP"}
);

const cost = document.getElementById('totalCost');

function showPrice() {
    cost.textContent = `The total cost of this lookbook is ${pricePound}`;
}