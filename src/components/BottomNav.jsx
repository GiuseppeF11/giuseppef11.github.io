import { MdPerson, MdWork, MdSchool, MdApps, MdAlternateEmail } from "react-icons/md";
import "./BottomNav.css";

const tabs = [
  { id: "about",       label: "Chi sono", Icon: MdPerson },
  { id: "experiences", label: "Lavoro",   Icon: MdWork },
  { id: "studies",     label: "Studio",   Icon: MdSchool },
  { id: "projects",    label: "Progetti", Icon: MdApps },
  { id: "contact",     label: "Contatti", Icon: MdAlternateEmail },
];

const BottomNav = ({ active, onChange }) => (
  <nav className="bottom-nav lg:hidden" aria-label="Navigazione sezioni">
    {tabs.map(({ id, label, Icon }) => (
      <button
        key={id}
        className={`bottom-nav-tab${active === id ? " active" : ""}`}
        onClick={() => onChange(id)}
        aria-label={label}
      >
        <Icon className="bottom-nav-icon" />
        <span className="bottom-nav-label">{label}</span>
      </button>
    ))}
  </nav>
);

export default BottomNav;
