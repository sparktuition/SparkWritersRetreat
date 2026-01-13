import React from "react";
import { Shirt, Footprints, PenTool, Check, X } from "lucide-react";
import "./RetreatEssentials.css";

const essentials = [
  { icon: Shirt, title: "Warm Clothing", text: "Since Dalhousie can be chilly, please pack thermal wear, warm jackets, scarves, and layers to keep cozy." },
  { icon: Footprints, title: "Comfortable Shoes", text: "Bring sturdy walking shoes for our nature walks and sightseeing day." },
  { icon: PenTool, title: "Writing Materials", text: "Feel free to bring a notebook, pens, and of course your laptop; the Alps Resort offers reliable internet access." },
];

const dos = [
  "Do dress in layers and stay warm.",
  "Do respect the peaceful environment and fellow participants.",
  "Do participate actively in all sessions and make the most of the experience.",
];

const donts = [
  "Don't forget to bring any personal medications or essentials you may need.",
  "Don't worry about connectivity; we have you covered with Wi-Fi.",
];

const RetreatEssentials: React.FC = () => (
  <section className="retreat-essentials-section theme-amber parallax-bg" data-aos="fade-up" data-aos-duration="900">
    <div className="retreat-essentials-inner">
      <h2 className="retreat-essentials-title">What to Bring</h2>
      <ul className="essentials-list stagger-list">
        {essentials.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <li key={index} className="essentials-item">
              <IconComponent size={24} className="essentials-icon" />
              <div>
                <strong>{item.title}:</strong> {item.text}
              </div>
            </li>
          );
        })}
      </ul>
      
      <h2 className="retreat-essentials-title" style={{marginTop: '2.5rem'}}>Do's and Don'ts</h2>
      <ul className="dos-list stagger-list">
        {dos.map((item, index) => (
          <li key={index} className="dos-item">
            <Check size={20} className="dos-icon do-icon" />
            <span>{item}</span>
          </li>
        ))}
        {donts.map((item, index) => (
          <li key={index} className="dos-item dont-item">
            <X size={20} className="dos-icon dont-icon" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default RetreatEssentials;
