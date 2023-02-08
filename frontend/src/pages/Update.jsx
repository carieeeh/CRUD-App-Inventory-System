import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Update = () => {
  const [necklace, setNecklace] = useState({
    prod_name: "",
    prod_description: "",
    image: "",
    price: null,
    stocks: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const necklaceId = location.pathname.split("/")[2];
  const handleChange = (e) => {
    setNecklace((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      let result = await axios
        .put(`http://localhost:8800/zarathelle/${necklaceId}`, necklace)
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
      <div className="updateForm">
        <div class="title">Update Product</div>
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
            type="number"
            placeholder="stocks"
            onChange={handleChange}
            name="stocks"
          />
        </div>

        <button className="Update" onClick={handleClick}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Update;
