import { useEffect, useState } from "react";
import axios from "axios";
import "./TestimonialsAdmin.css";

export default function TestimonialsAdmin() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    name: "",
    role: "",
    image: "",
    message: "",
    rating: 5,
  });

  const load = () =>
    axios.get("https://torado.onrender.com/api/testimonials")
      .then(res => setData(res.data));

  useEffect(() => { load(); }, []);

  const submit = async () => {
    await axios.post("https://torado.onrender.com/api/testimonials", form);
    setForm({ name: "", role: "", image: "", message: "", rating: 5 });
    load();
  };

  const remove = async (id) => {
    await axios.delete(`https://torado.onrender.com/api/testimonials/${id}`);
    load();
  };

  return (
    <div className="admin-testimonials">
      <h2>Testimonials</h2>

      <div className="form">
        <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
        <input placeholder="Role" onChange={e=>setForm({...form,role:e.target.value})}/>
        <input placeholder="Image URL" onChange={e=>setForm({...form,image:e.target.value})}/>
        <textarea placeholder="Message" onChange={e=>setForm({...form,message:e.target.value})}/>
        <button onClick={submit}>Add Review</button>
      </div>

      <div className="list">
        {data.map(t => (
          <div key={t._id} className="row">
            <img src={t.image} alt="" />
            <div>
              <h4>{t.name}</h4>
              <p>{t.message}</p>
            </div>
            <button onClick={() => remove(t._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
