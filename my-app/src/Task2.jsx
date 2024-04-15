import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import "./task2.css";

// console.log(faker.image.animals);

const Task2 = () => {
  let [img, setImage] = useState(
    faker.image.urlLoremFlickr({ category: "animals" })
  );
  let [cats, setCats] = useState(
    faker.image.urlLoremFlickr({ category: "cats" })
  );
  let [city, setCity] = useState(
    faker.image.urlLoremFlickr({ category: "city" })
  );
  let [night, setNigh] = useState(
    faker.image.urlLoremFlickr({ category: "sports" })
  );
  let [nature, setNature] = useState(
    faker.image.urlLoremFlickr({ category: "nature" })
  );
  let [food, setFood] = useState(
    faker.image.urlLoremFlickr({ category: "food" })
  );

  let ChangePhoto = () => {
    setImage(faker.image.urlLoremFlickr({ category: "animals" }));
  };
  let ChangeCats = () => {
    setCats(faker.image.urlLoremFlickr({ category: "cats" }));
  };
  let ChangeCity = () => {
    setCity(faker.image.urlLoremFlickr({ category: "city" }));
  };
  let ChangeNature = () => {
    setNature(faker.image.urlLoremFlickr({ category: "nature" }));
  };
  let ChangeNight = () => {
    setNigh(faker.image.urlLoremFlickr({ category: "sports" }));
  };
  let ChangeFood = () => {
    setFood(faker.image.urlLoremFlickr({ category: "food" }));
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <h2 className="header">Animal</h2>
          <div className="iagCont">
            <img src={img} alt="" />
          </div>
          <button type="button" onClick={ChangePhoto}>
            Change Photo
          </button>
        </div>
        <div className="card">
          <h2 className="header">Cats</h2>
          <div className="iagCont">
            <img src={cats} alt="" />
          </div>
          <button type="button" onClick={ChangeCats}>
            Change Photo
          </button>
        </div>
        <div className="card">
          <h2 className="header">City</h2>
          <div className="iagCont">
            <img src={city} alt="" />
          </div>
          <button type="button" onClick={ChangeCity}>
            Change Photo
          </button>
        </div>
        <div className="card">
          <h2 className="header">Nature</h2>
          <div className="iagCont">
            <img src={nature} alt="" />
          </div>
          <button type="button" onClick={ChangeNature}>
            Change Photo
          </button>
        </div>

        <div className="card">
          <h2 className="header">Sport</h2>
          <div className="iagCont">
            <img src={night} alt="" />
          </div>
          <button type="button" onClick={ChangeNight}>
            Change Photo
          </button>
        </div>

        <div className="card">
          <h2 className="header">Food</h2>
          <div className="iagCont">
            <img src={food} alt="" />
          </div>
          <button type="button" onClick={ChangeFood}>
            Change Photo
          </button>
        </div>

      </div>
    </>
  );
};
export default Task2;
