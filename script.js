// Données des restaurants (à remplacer par des données réelles)
const restaurants = [
    {
        id: 1,
        name: "Restaurant Frenchie",
        address: "5 Rue du Nil, 75002 Paris",
        description: "Une table d'exception avec une cuisine créative et élégante du chef Gregory Marchand.",
        cuisine: "Française contemporaine",
        price: "€€€€",
        rating: 4.8,
        image: "images/restaurant1.jpg"
    },
    {
        id: 2,
        name: "Bouillon Chartier",
        address: "7 Rue du Faubourg Montmartre, 75009 Paris",
        description: "Une institution parisienne offrant une cuisine traditionnelle française à prix abordables depuis 1896.",
        cuisine: "Française traditionnelle",
        price: "€€",
        rating: 4.2,
        image: "images/restaurant2.jpg"
    },
    {
        id: 3,
        name: "Noglu",
        address: "16 Passage des Panoramas, 75002 Paris",
        description: "Restaurant 100% sans gluten proposant une cuisine savoureuse et créative.",
        cuisine: "Sans gluten",
        price: "€€€",
        rating: 4.5,
        image: "images/restaurant3.jpg"
    },
    {
        id: 4,
        name: "Restaurant Daroco",
        address: "6 Rue Vivienne, 75002 Paris",
        description: "Une ambiance festive et une excellente cuisine italienne dans un cadre architectural magnifique.",
        cuisine: "Italienne",
        price: "€€€",
        rating: 4.6,
        image: "images/restaurant4.jpg"
    },
    {
        id: 5,
        name: "Gyoza Bar",
        address: "56 Passage des Panoramas, 75002 Paris",
        description: "Spécialités de gyozas japonais dans un cadre décontracté et convivial.",
        cuisine: "Japonaise",
        price: "€€",
        rating: 4.3,
        image: "images/restaurant5.jpg"
    },
    {
        id: 6,
        name: "Les Fines Gueules",
        address: "43 Rue Croix des Petits Champs, 75001 Paris",
        description: "Bistrot chic proposant des produits de qualité et une belle carte des vins.",
        cuisine: "Bistrot",
        price: "€€€",
        rating: 4.4,
        image: "images/restaurant6.jpg"
    },
    {
        id: 7,
        name: "Pizza Popolare",
        address: "111 Rue Réaumur, 75002 Paris",
        description: "Authentiques pizzas napolitaines à prix abordables dans une ambiance animée.",
        cuisine: "Italienne",
        price: "€€",
        rating: 4.7,
        image: "images/restaurant7.jpg"
    },
    {
        id: 8,
        name: "Saturne",
        address: "17 Rue Notre-Dame des Victoires, 75002 Paris",
        description: "Cuisine raffinée mettant l'accent sur les produits bio et locaux.",
        cuisine: "Gastronomique",
        price: "€€€€",
        rating: 4.6,
        image: "images/restaurant8.jpg"
    },
    {
        id: 9,
        name: "Café Compagnon",
        address: "22 Rue Léopold Bellan, 75002 Paris",
        description: "Un café-restaurant convivial avec une cuisine de bistrot inventive.",
        cuisine: "Bistrot moderne",
        price: "€€€",
        rating: 4.3,
        image: "images/restaurant9.jpg"
    },
    {
        id: 10,
        name: "Cibus",
        address: "5 Rue Molière, 75001 Paris",
        description: "Restaurant italien authentique proposant des produits d'épicerie fine et des plats savoureux.",
        cuisine: "Italienne",
        price: "€€€",
        rating: 4.5,
        image: "images/restaurant10.jpg"
    }
];

// Fonction pour afficher les étoiles selon la note
function getStarsHTML(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let starsHTML = '';
    
    // Étoiles pleines
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '★';
    }
    
    // Demi-étoile si nécessaire
    if (halfStar) {
        starsHTML += '⭪';
    }
    
    // Étoiles vides
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '☆';
    }
    
    return starsHTML;
}

// Fonction pour créer les cartes de restaurants
function createRestaurantCards() {
    const restaurantList = document.getElementById('restaurant-list');
    
    restaurants.forEach(restaurant => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        
        card.innerHTML = `
            <div class="restaurant-image">
                <img src="${restaurant.image}" alt="${restaurant.name}">
            </div>
            <div class="restaurant-info">
                <h3>${restaurant.name}</h3>
                <p>${restaurant.description}</p>
                <p><strong>Cuisine:</strong> ${restaurant.cuisine}</p>
                <p><strong>Adresse:</strong> ${restaurant.address}</p>
                <p><strong>Prix:</strong> ${restaurant.price}</p>
                <div class="rating">
                    ${restaurant.rating.toFixed(1)} ${getStarsHTML(restaurant.rating)}
                </div>
            </div>
        `;
        
        restaurantList.appendChild(card);
    });
}

// Initialiser le site quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    createRestaurantCards();
});