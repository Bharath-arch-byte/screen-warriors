document.addEventListener("DOMContentLoaded", () => {
    const parkingSpaces = [
        { id: 1, location: "Downtown Mall", price: "₹50/hr" },
        { id: 2, location: "Tech Park", price: "₹40/hr" },
        { id: 3, location: "Central Plaza", price: "₹60/hr" }
    ];
    
    const parkingList = document.getElementById("parkingList");
    const reservationMessage = document.getElementById("reservationMessage");

    parkingSpaces.forEach(space => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${space.location} - ${space.price} 
            <button onclick="bookSpace('${space.location}', '${space.price}')">Book</button>`;
        parkingList.appendChild(listItem);
    });
});

function bookSpace(location, price) {
    const reservationMessage = document.getElementById("reservationMessage");
    reservationMessage.textContent = `Reserved: ${location} for ${price}`;
    reservationMessage.classList.remove("hidden");
}
