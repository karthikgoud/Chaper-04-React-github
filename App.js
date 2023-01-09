import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="Header-container">
      <a href="#">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0aXSlLOXa_Mcu0cAE8rYNcQXwGd8pdre1HQ&usqp=CAU"
        />
      </a>
      <ul className="nav-list">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

// restaurant list data

const restaurantList = [
  {
    id: "1",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/9/51139/d914d8ee60d87bf8f6ad9db169265455_o2_featured_v2.jpg?output-format=webp",
    name: "Biryani Zone",
    rating: "4",
    cusines: ["North Indian", "Chinese"],
  },
  {
    id: "2",
    image:
      "https://b.zmtcdn.com/data/pictures/4/19098024/22807b09153fd6110620fa3d0f0c3ad3_featured_v2.jpg",
    name: "The Groot",
    rating: "4",
    cusines: ["Italian", "Chinese"],
  },
  {
    id: "3",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/0/52860/6750c2fe1f25a444991eee4d7afd5dd9_o2_featured_v2.jpg",
    name: "Chai Point",
    rating: "4",
    cusines: ["North Indian", "Chinese"],
  },
  {
    id: "4",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/2/18595782/82ded2a6514c949e29efb4a74d648826_featured_v2.jpg",
    name: "The Pallet",
    rating: "4",
    cusines: ["Continental", "Chinese"],
  },
  {
    id: "5",
    image:
      "https://b.zmtcdn.com/data/pictures/2/18888512/05526b9225c73b5d9849b3bf5eba2d53_featured_v2.jpg",
    name: "Nevermind",
    rating: "4",
    cusines: ["Continental", "Chinese"],
  },
];

// restaurant card for body component

const Card = (props) => {
  //   console.log(props);
  const { image, name, rating, cusines } = props;
  return (
    <div className="card-container">
      <img src={image} />
      <h1>{name}</h1>
      <p>Marathahalli,Bangalore</p>
      <h4>Rating : {rating}</h4>
      <h4>{cusines.join(", ")}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      {restaurantList.map((restaurant) => {
        return <Card {...restaurant} key={restaurant.id} />;
      })}

      {/* <Card {...restaurantList[0]} />
      <Card {...restaurantList[1]} />
      <Card {...restaurantList[2]} />
      <Card {...restaurantList[3]} /> */}
    </div>
  );
};

const Footer = () => {
  return <h1>Footer</h1>;
};

// AppLayout Component
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
