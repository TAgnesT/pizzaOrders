const orders = [

    {
        id: 1,
        pizza: "Hawaii",
        exta: "ananas",
        drink: "fanta",
        price: 10,
        kep: "https://www.pexels.com/photo/pizza-dish-367915/"
    },
    {
        id: 2,
        pizza: "Salami",
        exta: "hot-salami",
        drink: "coca-cola",
        price: 9,
        kep: "https://www.pexels.com/photo/photo-of-person-holding-sliced-pizza-3915857/"
    },
    {
        id: 3,
        pizza: "Ortolana",
        exta: "ananas",
        drink: "fanta",
        price: 12,
        kep: "https://www.pexels.com/photo/close-up-photo-of-pizza-2619970/"
    },
    {
        id: 4,
        pizza: "Broccoli",
        exta: "panna",
        drink: "sprite",
        price: 10,
        kep: "https://www.pexels.com/photo/baked-pizza-on-pizza-peel-in-oven-905847/"
    },
    {
        id: 5,
        pizza: "Green",
        exta: "paprika",
        drink: "coca-cola",
        price: 8,
        kep: "https://www.pexels.com/photo/a-colorful-sliced-pizza-2909822/"
    },
    {
        id: 6,
        pizza: "Muschroom",
        exta: "funghi",
        drink: "fanta",
        price: 13,
        kep: "https://www.pexels.com/photo/appetizing-pizza-with-shrimps-and-champignon-on-wooden-table-4553111/"
    }
]

//addEventListener("load", ()=>{

    orders.map((order)=>{

        console.log(order);

        let output = "";

        orders.forEach((orderek)=>{
            console.log(orderek);
        
        output += `
        <h3>Id:${orderek.id}</h3>
        <h1>Pizza:${orderek.pizza}</h1>
        <p>Extra:${orderek.exta}</p>
        <p>Drink:${orderek.drink}</p>
        <p>Price:${orderek.price}</p>
        <img src="${orderek.kep}" alt="" id="pics">
    `;

    document.querySelector(".order").innerHTML = output;

        })

    })
    
//})









