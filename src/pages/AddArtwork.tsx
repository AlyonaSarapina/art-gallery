import React, { useState } from "react";
import { createArtwork, getArtworks } from "../services/artworkServices";
import { useNavigate } from "react-router-dom";
import "../styles/pages/AddArtwork.scss";

const AddArtwork = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [type, setType] = useState("painting");
  const [price, setPrice] = useState<number | "">("");
  const [priceError, setPriceError] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [availability, setAvailability] = useState(true);
  const navigate = useNavigate();

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setPrice("");
      setPriceError("");
      return;
    }
    if (!/^\d+(\.\d{0,2})?$/.test(value)) {
      setPriceError("Only numbers allowed");
      return;
    }
    setPriceError("");
    setPrice(Number(value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (price === "" || Number(price) <= 0) {
      alert("Please enter a valid price greater than 0.");
      return;
    }

    try {
      const existingArtworks = await getArtworks();
      const dublicate = existingArtworks.some(
        (art) =>
          art.title.toLowerCase() === title.toLowerCase() &&
          art.artist.toLowerCase() === artist.toLowerCase()
      );

      if (dublicate) {
        alert("An artwork with this title and artist already exists!");
        return;
      }

      await createArtwork({
        title,
        artist,
        type,
        price: Number(price),
        image,
        availability,
      });
      navigate("/");
    } catch (error) {
      console.error("Error adding artwork:", error);
    }
  };

  return (
    <>
      <div className="add-artwork-container">
        <h2>Add New Artwork</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="painting">Painting</option>
            <option value="sculpture">Sculpture</option>
          </select>
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter price (numbers only)"
            value={price}
            onChange={handlePriceChange}
            required
          />
          {priceError && <p className="error-text">{priceError}</p>}
          <label>
            <input
              type="checkbox"
              checked={availability}
              onChange={() => setAvailability(!availability)}
              required
            />
            Available
          </label>
          <button type="submit">Add Artwork</button>
        </form>
        <button className="back-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </>
  );
};

export default AddArtwork;
