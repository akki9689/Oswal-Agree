



// ------------------All Data -------------------
export const allProducts = [
    {
        id: 1,
        title: 'Insecticides',
        // image: 'insecticides.png'
        productName: [
            {
                id: 1,
                name: "Fila Plus",
                img: fila,
                activeIngredient: "Alphacypermethrin 10% SC",
                details: {
                    targetCrops: "Not specified on the page",
                    dose: "10 to 20 ml per liter of water to cover a 50 sq. meter area.",
                    pests: ["Adult Mosquitoes", "Adult Houseflies", "Cockroach"],
                    uses: "High performance, residual insecticide for controlling mosquitoes, houseflies, and cockroaches. Suitable for use in domestic, institutional, and public buildings. Low toxicity to humans, usable in hospitals, kitchens, restaurants, and food storage areas.",
                    advantages: [
                        "Effective against crawling and flying insects in domestic, public, and industrial settings.",
                        "Compatible with most knapsack sprayers and residual spray equipment.",
                        "Low pressure application with even-sized droplets for thorough coverage.",
                        "Suitable for public health pest control."
                    ],
                    application: "Contact & Stomach Poison",
                },
                url: "#"
            },
            {
                id: 2,
                name: "Expert",
                img: expert,
                activeIngredient: "Indoxacarb 14.5% SC",
                details: {
                    targetCrops: "Cotton, Cabbage, Chilli, Tomato, Pigeon Pea",
                    dose: "Cotton, Dose : 1 ml/ 2 lit of water Cabbage, Dose : 1 ml/ 3 Lit of water Tomato, Dose : 1 ml/ lit of water. Chilli, Dose : 1 ml/ 1.5 lit of water Pigeonpea, Dose : 1 ml/ 2.5 lit of water",
                    pests: ["Diamon Back Moth", "Fruit borer", "Pod borer, Boll worms"],
                    uses: "Indoxacarb 14.5% Suspension Concentrate is a broad spectrum contact and stomach insecticide effective as a foliar spray for the control of insect pests of Cotton, Tomato, Chilli, Cabbage and Pigeonpea.",
                    advantages: [ 
                        "P.P. Equipment:-High volume spraying equipment, such as knapsack sprayer, rocking sprayer, foot sprayer etc."
                    ],
                    application: "Indoxacarb 14.5% SC should be applied at 5 to 7-day intervals or as needed to manage specific target insect pests, as specified in the specific crop sections to maintain control",

                },
                url: "#",
            }
        ]
    },
    {
        id: 2,
        title: 'Fungicides',
        // image: 'fungicides.png'
    },
    {
        id: 3,
        title: 'Herbicides',
        // image: 'herbicides.png'
    },
    {
        id: 4,
        title: 'Fertilizer',
        // image: 'fertilizer.png'
    },
    {
        id: 5,
        title: 'Bio Products',
        // image: 'bio-products.png'
    },
    {
        id: 6,
        title: 'Micro Nutrients',
        // image: 'micro-nutrients.png'
    },
    {
        id: 7,
        title: 'Plant Growth Regulators',
        // image: 'plant-growth-regulators.png'
    }
]