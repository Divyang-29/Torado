import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

/* USER PAGES */
import HeroPage from "./Home/HeroPage";
import DonateForm from "./Home/DonateForm";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Contact from "./Contact_US/ Contact";
import Issues from "./Issues/Issues";
import Events from "./Events/Events";
import Candidates from "./Candidates/Candidates";
import Blog from "./Blog/Blog";
import IssuesAdmin from "./Admin/IssuesAdmin";
import EventDetails from "./Events/EventDetails";
import Volunteer from "./Volunteer/Volunteer";

/* ADMIN */
import BlogAdmin from "./Admin/BlogAdmin";
import EventsAdmin from "./Admin/EventsAdmin";
import AdminLayout from "./Admin/AdminLayout";
import CandidatesAdmin from "./Admin/CandidatesAdmin";
import DonationsAdmin from "./Admin/DonationsAdmin";
import ContactAdmin from "./Admin/ContactAdmin";
import VolunteersAdmin from "./Admin/VolunteersAdmin";
import GalleryAdmin from "./Admin/GalleryAdmin";
import Gallery from "./Gallery/Gallery";
import PrivacyPolicy from "./PrivacyPolicy";
import PrivacyPolicyAdmin from "./Admin/PrivacyPolicyAdmin";

function App() {
  const location = useLocation();

  // ✅ Hide navbar/footer on admin pages
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* USER ROUTES */}
        <Route path="/" element={<HeroPage />} />
        <Route path="/donate" element={<DonateForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/events" element={<Events />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="blogs" element={<BlogAdmin />} />
          <Route path="events" element={<EventsAdmin />} />
          <Route path="issues" element={<IssuesAdmin />} />
          <Route path="candidates" element={<CandidatesAdmin />} />
          <Route path="donations" element={<DonationsAdmin />} />
          <Route path="contacts" element={<ContactAdmin />} />
          <Route path="volunteers" element={<VolunteersAdmin />} />
          <Route path="gallery" element={<GalleryAdmin />} />
          <Route path="privacy-policy" element={<PrivacyPolicyAdmin />} />
        </Route>
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
