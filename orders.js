const orders = [

    {
        id: 1,
        pizza: "Hawaii",
        exta: "ananas",
        drink: "Fanta",
        price: 10,
        kep: "https://www.simplehomecookedrecipes.com/wp-content/uploads/2021/02/Hawaiian-Pizza-800x530.png"
    },
    {
        id: 2,
        pizza: "Salami",
        exta: "hot-salami",
        drink: "Coca-cola",
        price: 9,
        kep: "https://cdn.agrodolce.it/RWEFdFdF07lA6kJeVzMAu9ldF6w=/1150x647/smart/https://www.agrodolce.it/app/uploads/2014/03/shutterstock_130123424.jpg"
    },
    {
        id: 3,
        pizza: "Ortolana",
        exta: "burrata",
        drink: "Coca-cola Zero",
        price: 12,
        kep: "https://shop.eismann.it/upload/it/17574-pizza-suprema-ortolana-con-burrata-K-20211022.jpg"
    },
    {
        id: 4,
        pizza: "Broccoli",
        exta: "acciughe",
        drink: "Sprite",
        price: 10,
        kep: "https://media-assets.lacucinaitaliana.it/photos/620fc0f85d026d4777146e0c/1:1/w_1920,c_limit/Pizza-broccoli-e-acciughe.jpg"
    },
    {
        id: 5,
        pizza: "Paprika",
        exta: "chili",
        drink: "Coca-cola",
        price: 8,
        kep: "https://blog.cookaround.com/vittoria70/wp-content/uploads/2016/05/DSCF5366.jpg"
    },
    {
        id: 6,
        pizza: "Mushroom",
        exta: "funghiporcini",
        drink: "Fanta",
        price: 15,
        kep: "https://www.cucina-naturale.it/wp-content/uploads/2017/09/funghi-zola.jpg"
    }
]

//addEventListener("load", ()=>{

    orders.map((order)=>{

        console.log(order);

        let output = "";

        orders.forEach((orderek)=>{
            console.log(orderek);
        
        output += `
        <div class="rendel">
            <h4>Id: ${orderek.id}</h4>
            <h2>${orderek.pizza}</h2>
            <p>Extra: ${orderek.exta}</p>
            <p>Drink: ${orderek.drink}</p>
            <p>Price: ${orderek.price} euro</p>
            <img src="${orderek.kep}" alt="" id="pics">
        </div>
    `;

    document.querySelector(".order").innerHTML = output;

        })

    })
    
//})









