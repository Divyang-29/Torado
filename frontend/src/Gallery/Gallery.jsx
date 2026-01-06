import { useEffect, useState } from "react";
import axios from "axios";
import "./Gallery.css";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://torado.onrender.com/api/gallery")
      .then((res) => setImages(res.data));
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="gallery-hero">
        <h1>Photo Gallery</h1>
        <p>
          Home / <span>Gallery</span>
        </p>
      </section>

      {/* GALLERY */}
      <section className="gallery-section">
        <div className="gallery-grid">
          {images.map((item) => (
            <div className="gallery-item" key={item._id}>
              <img src={item.image} alt="Gallery" />
              <div className="overlay">
                <span>+</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
