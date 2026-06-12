const Packs = {
    pack1: {
        name: "tiny Pack",
        cost: 10,
        cards: 1,
        rarity: "common",
        rewards: [
            { type: "Coins", weight: 0, min: 10, max: 50, image: "images/coins.png" },
            { type: "Human", weight: 1, min: 1, max: 1, image: "images/human.png" }
        ]
    },

    pack2: {
        name: "small pack",
        cost: 25,
        cards: 3,
        rarity: "uncommon",
        rewards: [
            { type: "Coins", weight: 4, min: 20, max: 80, image: "images/coins.png" },
            { type: "Human", weight: 2, min: 2, max: 8, image: "images/human.png" }
        ]
    },

    pack3: {
        name: "medium pack",
        cost: 50,
        cards: 7,
        rarity: "rare",
        rewards: [
            { type: "Coins", weight: 5, min: 50, max: 150, image: "images/coins.png" },
            { type: "Human", weight: 3, min: 5, max: 12, image: "images/human.png" }
        ]
    },

    pack4: {
        name: "large pack",
        cost: 100,
        cards: 15,
        rarity: "epic",
        rewards: [
            { type: "Coins", weight: 6, min: 100, max: 300, image: "images/coins.png" },
            { type: "Human", weight: 4, min: 10, max: 25, image: "images/human.png" }
        ]
    },

    pack5: {
        name: "jumbo pack",
        cost: 200,
        cards: 32,
        rarity: "legendary",
        rewards: [
            { type: "Coins", weight: 7, min: 300, max: 800, image: "images/coins.png" },
            { type: "Human", weight: 5, min: 20, max: 50, image: "images/human.png" }
        ]
    }
};