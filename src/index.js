import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Card photoName='logo192.png' name='Harry Cho' description="Full-stack Web Developer. When I'm not coding, I like to play video games with my friends!" />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>The Sharing Pizza</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza name='Pizza Spinaci' ingredients='Tomato, mozarella, ...etc' photoName='pizzas/spinaci.jpg' price={10} />
      <Pizza name='Pizza Funghi' ingredients='Tomato, mushrooms, ...etc' photoName='pizzas/funghi.jpg' price={12} />
    </main>
  )
}

function Pizza(props) {
  return (
    <div>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
      </div>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill">
      <div>
        {props.skill} {props.emoji}
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <img className='avatar' src={props.photoName} alt={props.name} />
      <div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
      <Skill skill='HTML+CSS' emoji='strong' />
      <Skill skill='HTML+CSS' emoji='strong' />
      <Skill skill='HTML+CSS' emoji='strong' />
      <Skill skill='HTML+CSS' emoji='strong' />
    </div>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = (hour >= openHour && hour <= closeHour);

  // if (isOpen) {
  //   console.log("We're currently open!");
  // } else {
  //   console.log("Sorry, we're closed!");
  // }

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We are currently open!
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<React.StrictMode><App /></React.StrictMode>);




















// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
