const content = document.querySelector("#content");
const buttons = document.querySelectorAll("button");

const home = () => {
    buttons[0].style.backgroundColor = "#0BD979";
    const headerSection = document.createElement("section");
    const homeHeader = `<h1 class="header">Restaurant</h1>`;

    const description = 
        `<div>
            <p>
                Beary's has the best porridge! The atmosphere 
                and customer service make you feel like you are 
                sitting in the middle of the woods, eating like 
                a bear! This is exactly the kind of place that I
                like to return to again and again.
            </p>
            <span><b>Goldilocks</b></span>
        </div>`;

    const hours =  
        `<div>
            <h3>Hours</h3>
            <ul>
                <li>Monday: 8:00 AM - 8:00 PM</li>
                <li>Tuesday: 8:00 AM - 8:00 PM</li>
                <li>Wednesday: 8:00 AM - 8:00 PM</li>
                <li>Thursday: 8:00 AM - 8:00 PM</li>
                <li>Friday: 8:00 AM - 8:00 PM</li>
                <li>Saturday: 8:00 AM - 8:00 PM</li>
                <li>Sunday: 8:00 AM - 6:00 PM</li>
            </ul>
        </div>`;

    const location =
        `
        <div>
            <h3>Location</h3>
            <p>123 Forest Drive, Forestville, Maine</p>
        </div>
        `;

    const divList = [homeHeader, description, hours, location];
    divList.forEach(div => {
        headerSection.innerHTML += div;
    })

    content.appendChild(headerSection);
}

const menu = () => {
    buttons[0].style.backgroundColor = "#0D0D0D";
    const beverages = [
        {
            name: "Honey Tea",
            des: `A warm, sweet tea made with the 
                highest quality honey and a bit of
                lemon to start your day off right!`,
            price: "$2",
        },
        {
            name: "Beary Tea",
            des: `A comforting, almost filling, tea
                that is infused with the flavors of
                several kinds of berries. Best served
                cold, but can be served hot on request.`,
            price: "$3",
        }
    ];
    const dishes = [
        {
            name: "Pancakes",
            des: `A stack of homemade buttermilk pancakes, 
                served with our locally sourced maple syrup.`,
            price: "$4",
        },
        {
            name: "French Toast",
            des: `Two slices of the best french toast
                you will ever eat, served with our locally
                sourced maple syrup.`,
            price: "$5",
        },
        {
            name: "Beary Veggie Sandwich",
            des: `Do you like vegetables? Then
                this is the sandwich for you!
                Stuffed full of a variety of fresh
                produce, it will fill you up.`,
            price: "$8",
        },
    ]

    const menuSection = document.createElement("section");
    const menuHeader = `<h1 class="header">Menu</h1>`;
    const beveragesHeader = `<h2>Beverages</h2>`;
    const dishHeader = `<h2>Main Dishes</h2>`;

    menuSection.innerHTML += menuHeader;
    menuSection.innerHTML += beveragesHeader;

    beverages.forEach((el) => {
        menuSection.innerHTML +=
        `
        <div>
            <h3>${el.name}</h3>
            <p>${el.des}</p>
            <p>${el.price}</p>
        </div>
        `
    });

    menuSection.innerHTML += dishHeader;

    dishes.forEach((el) => {
        menuSection.innerHTML +=
        `
        <div>
            <h3>${el.name}</h3>
            <p>${el.des}</p>
            <p>${el.price}</p>
        </div>
        `
    });

    content.appendChild(menuSection);
}

const about = () => {
    buttons[0].style.backgroundColor = "#0D0D0D";
    const aboutSection = document.createElement("section");
    const aboutHeader = `<h1 class="header">About</h1>`;
    const information =
        `
        <div>
            <h3>Me</h3>
            <p>Master chef :)</p>
            <p>999-999-9992</p>
            <p>fakeemail@example.com</p>
        </div>
        `;

    const divList = [aboutHeader, information];
    divList.forEach(div => {
        aboutSection.innerHTML += div;
    });

    content.appendChild(aboutSection);
}

export { home, menu, about, buttons };