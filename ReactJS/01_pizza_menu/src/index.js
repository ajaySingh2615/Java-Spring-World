import React, { useState } from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with Italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozzarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozzarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozzarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <Header />
      <Menu pizzas={pizzaData} />
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu({ pizzas }) {
  const pizzaOfTheDay = pizzas.find((pizza) => !pizza.soldOut);

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p className="intro">
        Enjoy the finest selection of pizzas crafted to perfection!
      </p>
      {pizzas.length > 0 ? (
        <>
          <div className="pizza-of-the-day">
            <h3>Pizza of the Day</h3>
            {pizzaOfTheDay ? (
              <Pizza pizzaObject={pizzaOfTheDay} />
            ) : (
              <p>Currently, no pizza of the day available!</p>
            )}
          </div>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza key={pizza.name} pizzaObject={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please check back later.</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObject }) {
  const { name, ingredients, price, photoName, soldOut } = pizzaObject;

  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span className="price">{soldOut ? "SOLD OUT" : `$${price}`}</span>
      </div>
    </li>
  );
}

function Footer({ darkMode, setDarkMode }) {
  return (
    <footer className="footer">
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <span className="toggle-icon">🌞 Light Mode</span>
        ) : (
          <span className="toggle-icon">🌙 Dark Mode</span>
        )}
      </button>
      <p>© 2024 Fast React Pizza Co. All Rights Reserved</p>
    </footer>
  );
}

// Root element

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
