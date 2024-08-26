



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
                url: "#",
                details: {
                    targetCrops: ["........"],
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

            },
            {
                id: 2,
                name: "Expert",
                img: expert,
                activeIngredient: "Indoxacarb 14.5% SC",
                url: "#",
                details: {
                    targetCrops: ["Cotton", "Cabbage", "Chilli", "Tomato", "Pigeon Pea"],
                    dose: "Cotton, Dose : 1 ml/ 2 lit of water Cabbage, Dose : 1 ml/ 3 Lit of water Tomato, Dose : 1 ml/ lit of water. Chilli, Dose : 1 ml/ 1.5 lit of water Pigeonpea, Dose : 1 ml/ 2.5 lit of water",
                    pests: ["Diamon Back Moth", "Fruit borer", "Pod borer, Boll worms"],
                    uses: "Indoxacarb 14.5% Suspension Concentrate is a broad spectrum contact and stomach insecticide effective as a foliar spray for the control of insect pests of Cotton, Tomato, Chilli, Cabbage and Pigeonpea.",
                    advantages: [
                        "P.P. Equipment:-High volume spraying equipment, such as knapsack sprayer, rocking sprayer, foot sprayer etc."
                    ],
                    application: "Indoxacarb 14.5% SC should be applied at 5 to 7-day intervals or as needed to manage specific target insect pests, as specified in the specific crop sections to maintain control",

                },

            },
            {
                id: 3,
                name: "Dinozine",
                img: dinozine,
                activeIngredient: "Dinotefuran 15% + Pymetrozine 45% WG",
                url: "#",
                details: {
                    targetCrops: ["Rice"],
                    dose: "333 gm / HA",
                    pests: ["Brown Plant Hopper", "Green leaf hopper", "White backed plant hopper"],
                    uses: "Dinotefuran 15% + Pymetrozine 45% Wg is water dispersible granule formulation which is contact and systemic insecticide. It exhibits translaminar acticity and it recommended for the control of brown plant hopper, white backed plant hopper, green leaf hopper and rice ear head bug of Rice crop.",
                    advantages: [
                        "It is a unique & revolutionary technology which protects the Rice crop from devastating pests like BPH & WBPH. It also brings vibrancy in tillers at the reproductive stage."
                    ],
                    application: "Apply as soon as the prest population reaches at economic threshold level (ELT)."
                }
            },
            {
                id: 4,
                name: "Airavat",
                img: airavat,
                activeIngredient: "Pymetrozine 50% WG",
                url: "#",
                details: {
                    targetCrops: ["Rice"],
                    dose: "300 ml/500 L",
                    pests: ["Brown Plant Hopper"],
                    uses: "Measure the required quantity of insecticides and mix it in a small quantity of water and gradually add the rest of the water to prepare a solution. Apply with a knapsack sprayer when a pest appears on the crop and repeat if necessary as per pest incidence. Maximum two sprays to be given starting first spray at initial pest infestation reaching Economic There should Level (ETL). ",
                    advantages: [
                        "Pymetrozine 50% WG is a systematic insecticide and is recommended for the control of Brown plant hopper in Rice crops. Foliar pests not directly hit by the spray are also controlled by Pymetrozine 50% WG pest stop feeding and die gradually after coming in contact with its spray."
                    ],
                    application: "When used as per the recommendations given below Pymetrozine 50% WG provide control of Brown plant hopper in Rice crop. "
                }
            },
            {
                id: 5,
                name: "Apollo",
                img: apollo,
                activeIngredient: "Fipronil 0.3% GR",
                url: "#",
                details: {
                    targetCrops: ["Rice", "Sugarcane", "Wheat"],
                    dose: "20 kg/ha",
                    pests: [
                        "Brown Plant Hopper", "Root borer", " Early shoot borer", " Termite", " Green leaf hopper", " Leaf folder", " Stem borer", " Gall midge", " White backed plant hopper", " Whorl maggot"
                    ],
                    uses: "Method of Application and Equipment for use: Recommended dosage for granule should be broadcasted using operated granule applicator or mechanical dispenser application in Paddy.",
                    advantages: [
                        "Dosage for granule should be broadcasted alone or by mixing with send or fertilizer"
                    ],
                    application: "Apply within 15-25 days after transplanting in paddy 2-3 cm standing water should be in the field and keep water impounded for 2-3 days after application."
                }
            },
            {
                id: 6,
                name: "Apollo Plus",
                img: apolloPlus,
                activeIngredient: "Fipronil 5% SC",
                url: "#",
                details: {
                    targetCrops: ["Cabbage", "Chilli", "Rice", "Sugarcane"],
                    dose: "1500 ml/500 L",
                    pests: [
                        "Brown Plant Hopper", "Root borer", "Early shoot borer", "Termite", "Green leaf hopper", " Leaf folder", "Stem borer", "Gall midge", "White backed plant hopper", "Diamon Back Moth", "Fruit borer"
                    ],
                    uses: "Plant Protection Equipment:- high volume nozzle fitted to sprayers like a knap-sack, Air pressure Foot Pump, Hard rocker, or power-operated spraying machine may be used. ",
                    advantages: [
                        "Fipronil 5% SC is an insecticide which is used to control insects like stem borer, brown plant hopper, green leaf hopper, rice leaf folder, rice gall midge, white backed plant 4. hopper, whorl maggot in rice. DBM in cabbage, thrips, aphids & fruit borer in chills, early shoot borer & root borer in sugarcane.  "
                    ],
                    application: "Rice: The Fipronil application must be given between 25 to 30 days after transplanting. Cabbage: The first spray is to be given at 30 to 35 days after transplanting or when pest incidence is noticed, whichever is earlier. Repeat 2 to 3 sprays at 7 to 10 days intervals. Chilli:- First spray is to be given at 40 to 50 days after translating or when pest incidence is noticed, whichever is earlier. repeat 2 to 3 sprays at 1 to 10 days intervals. Sugarcane:- For earlier shoot borer foliar application at 35 days after planting (DAP) and for root borer drenching of soil at planting. "
                }
            },
            {
                id: 7,
                name: "Apollo Ultra",
                img: apolloUltra,
                activeIngredient: "Fipronil 0.6% GR",
                url: "#",
                details: {
                    targetCrops: ["Rice"],
                    dose: "10 kg/Ha",
                    pests: ["Leaf folder", "Yellow Stem borer"],
                    uses: "Uniformly broad casting is recommended when the pest population reaches etl level or approx 12-25 DAT",
                    advantages: [
                        "Fipronil 0.6% w/w GR formulation contains 6g of Fipronil active ingredient per kg of formulation Fipronil 0.6% w/w GR formulation is used as a foliar spray for the control of Stem borer and leaf folder in Rice."
                    ],
                    application: "Fipronil 0.6% w/w GR is recommended for application along with sand (@ 50 kg sand/ha) at the time of initial infestation of the insect pest. Method of application: Recommended dosage for granule should be broadcasted as sand mix using a hand-operated granule applicator or mechanical dispenser. Standing water of 2-3 cm depth should be available in the field to keep water impounded for 2-3 days after application."
                }
            },
            {
                id: 8,
                name: "Benzo",
                img: benzo,
                activeIngredient: "Emamectin Benzoate 5% SG",
                url: "#",
                details: {
                    targetCrops: ["Cotton", "Grapes", "Red Gram", "ChickPea", "Cabbage", "Brinjal", "Okra", "Chilli"],
                    dose: "220 gm / 750 L",
                    pests: ["Termite", "Diamon Back Moth", "Thrips" , "Pod borer", "Ballworm", "Fruit & shoot borer"],
                    uses: "Apply the insecticides when the incidence of larvae is first observed and repeat applications as necessary. Apply the insecticide in a sufficient quantity of water to ensure thorough coverage of the foliage",
                    advantages: [
                        "Emamectin benzoate 5% SG is a water-soluble granular formulation containing 5% active ingredient and is recommended for the control of Bollworms on cotton, Fruit and shoot borer on okra, DBM on cabbage, Fruit borer, thrips, mites on chili, fruit and shoot borer on brinjal, pod borer on red gram, chickpea Graps-Thrips and Tea – Tea looper. It is an insecticide with stomach action and should be ingested by the larvae to be most effective. Affected larvae become paralyzed and stop feeding shortly after exposure to Emamectin Benzoate 5% SG and subsequently die after 2-4 days.  "
                    ],
                    application: "Apply the PERFORM when the incidence of larvae is first observed and repeat applications as necessary Add the required quantity of Perform in a small quantity of clean water and stir. Add the remaining recommended amount of clean water and mix well with stirring"
                }
            },
            {
                id: 9,
                name: "Copper",
                img: copper,
                activeIngredient: "Copper 0.5% GR",
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