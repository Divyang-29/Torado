import { useEffect, useState } from "react";
import axios from "axios";
import "./GalleryAdmin.css";

export default function GalleryAdmin() {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState("");

  const fetchImages = () => {
    axios
      .get("http://localhost:8080/api/gallery")
      .then((res) => setImages(res.data));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const addImage = async () => {
    if (!image) return alert("Image URL required");

    await axios.post("http://localhost:8080/api/gallery", { image });
    setImage("");
    fetchImages();
  };

  const deleteImage = async (id) => {
    await axios.delete(`http://localhost:8080/api/gallery/${id}`);
    fetchImages();
  };

  return (
    <div className="admin-gallery">
      <h2>Gallery Management</h2>

      <div className="gallery-form">
        <input
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button onClick={addImage}>Add Image</button>
      </div>

      <div className="gallery-list">
        {images.map((img) => (
          <div className="gallery-row" key={img._id}>
            <img src={img.image} alt="" />
            <button onClick={() => deleteImage(img._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
