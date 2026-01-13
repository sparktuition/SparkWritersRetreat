import React from "react";
import { Coffee, Salad, Cookie, Moon, Leaf } from "lucide-react";
import "./RetreatCuisine.css";

const cuisineItems = [
  { icon: Coffee, text: "Wholesome Breakfasts" },
  { icon: Salad, text: "Energizing Lunches" },
  { icon: Cookie, text: "Tasty Snacks" },
  { icon: Moon, text: "Nourishing Dinners" },
  { icon: Leaf, text: "Fresh Local Ingredients" },
];

const RetreatCuisine: React.FC = () => (
  <section className="retreat-cuisine-section theme-rose parallax-bg" data-aos="fade-up" data-aos-duration="900">
    <div className="retreat-cuisine-inner">
      <h2 className="retreat-cuisine-title">Delicious and Healthy Cuisine</h2>
      <div className="retreat-cuisine-content stagger-list">
        <p>
          At the retreat, you will enjoy a delightful culinary experience with a variety of healthy and delicious meals. From wholesome breakfasts to energizing lunches, and from tasty snacks to nourishing dinners, every meal is crafted to keep you feeling your best.
        </p>
        <p>
          You will savor fresh, local ingredients and flavors that make each dining experience a pleasure. Our chefs focus on nutrition, taste, and presentation, ensuring every bite is memorable and supports your creative energy.
        </p>
        <ul className="cuisine-list">
          {cuisineItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li key={index} className="cuisine-item">
                <IconComponent size={20} className="cuisine-icon" />
                <span>{item.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </section>
);

export default RetreatCuisine;
