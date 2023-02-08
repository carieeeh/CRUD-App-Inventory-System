import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [necklace, setNecklace] = useState({
    prod_name: "",
    prod_description: "",
    image: "",
    materials: "",
    price: null,
    stocks: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNecklace((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      let result = await axios
        .post("http://localhost:8800/zarathelle", necklace)
        .then((result) => result.data);
      console.log(result);
      navigate("/Products");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(necklace);
  return (
    <div className="updateContainer">
      <div className="addForm">
        <div class="title">Add Product</div>
        <div class="input-container ic1">
          <input
            autocomplete="off"
            type="text"
            placeholder="name"
            onChange={handleChange}
            name="prod_name"
          />
        </div>
        <div class="input-container ic2">
          <input
            autocomplete="off"
            type="text"
            placeholder="product description"
            onChange={handleChange}
            name="prod_description"
          />
        </div>
        <div class="input-container ic2">
          <input
            autocomplete="off"
            type="text"
            placeholder="image"
            onChange={handleChange}
            name="image"
          />
        </div>
        <div class="input-container ic2">
          <input
            autocomplete="off"
            type="number"
            placeholder="price"
            onChange={handleChange}
            name="price"
          />
        </div>

        <div class="input-container ic2">
          <input
            autocomplete="off"
            type="text"
            placeholder="materials"
            onChange={handleChange}
            name="materials"
          />
        </div>

        <div class="input-container ic2">
          <input
            autocomplete="off"
            type="number"
            placeholder="stocks"
            onChange={handleChange}
            name="stocks"
          />
        </div>

        <button onClick={handleClick} class="Add">
          Add Product
        </button>
      </div>
    </div>
  );
};

export default Add;
