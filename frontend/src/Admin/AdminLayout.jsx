import { Outlet, NavLink } from "react-router-dom";
import "./AdminLayout.css";

export default function AdminLayout() {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <span className="logo">
            <img
              src="https://torado.envytheme.com/election-campaign-political/default/assets/images/logo.svg"
              alt=""
            />
          </span>
          <h3>Admin Panel</h3>
        </div>

        <nav className="admin-nav">
          <NavLink to="/admin/blogs">
            <span>📝</span>
            Blogs
          </NavLink>

          <NavLink to="/admin/events">
            <span>📅</span>
            Events
          </NavLink>

          <NavLink to="/admin/issues">
            <span>🏛️</span>
            Issues
          </NavLink>
          <NavLink to="/admin/candidates">
            <span>👤</span>
            Candidates
          </NavLink>
          <NavLink to="/admin/donations">
            <span>💰</span>
            Donations
          </NavLink>
          <NavLink to="/admin/contacts">
            <span>📩</span>
            Contacts
          </NavLink>
          <NavLink to="/admin/volunteers">
            <span>🤝</span>
            Volunteers
          </NavLink>
          <NavLink to="/admin/gallery">
            <span>🖼️</span>
            Gallery
          </NavLink>
          <NavLink to="/admin/privacy-policy">
            <span>🔒</span>
            Privacy Policy
          </NavLink>
        </nav>
      </aside>

      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}
