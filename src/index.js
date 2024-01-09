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
      <Footer />
      <Card photoName='logo192.png' name='Harry Cho' description="Full-stack Web Developer. When I'm not coding, I like to play video games with my friends!" />
    </div>
  );
}

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function Header() {
  return (
    <header className="header">
      <h1>The Sharing Pizza</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : <p>We are out of pizzas</p>}


      {/* <Pizza name='Pizza Spinaci' ingredients='Tomato, mozarella, ...etc' photoName='pizzas/spinaci.jpg' price={10} />
      <Pizza name='Pizza Funghi' ingredients='Tomato, mushrooms, ...etc' photoName='pizzas/funghi.jpg' price={12} /> */}
    </main>
  )
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div >
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
      {/* <Skill skill='React' emoji='🫵' color='#123456' />
      <Skill skill='HTML+CSS' emoji='🫥' color='orangered' />
      <Skill skill='JavaScript' emoji='🫡' color='yellow' />
      <Skill skill='Svelte' emoji='😶‍🌫️' color='orange' /> */}
    </div>
  )
}

function Card(props) {
  return (
    <div className="card">
      <img className='avatar' src={props.photoName} alt={props.name} />
      <div className="data">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <SkillList />
      </div>
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
      <Order openHour={openHour} closeHour={closeHour} isOpen={isOpen} />
    </footer >
  );
}

function Order(props) {
  return (
    <div className="container">
      {<div style={{ textAlign: "center", fontWeight: "bolder" }}>{new Date().toLocaleTimeString()}</div>}
      {
        props.isOpen ? (
          <div className="order">
            <p>
              We are open until {props.closeHour}:00. Come visit us or order online!
            </p>
            <button className="btn">Order Now</button>
          </div>
        ) : (
          <p>
            We are open from {props.openHour}:00 to {props.closeHour}:00!
          </p>
        )
      }
    </div>
  )
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
