import React from "react";
import "../App.css";
import {
  chairColors,
  cushionColors,
  useCustomization,
} from "../contexts/Customization";

const Configurator = () => {
  const {
    material,
    setMaterial,
    legs,
    setLegs,
    chairColor,
    setChairColor,
    cushionColor,
    setCushionColor,
  } = useCustomization();
  console.log("material", material);

  return (
    <div className="configurator">
      <div className="configurator-section">
        <div className="configurator-section-title">Chair Material</div>
        <div className="configurator-section-values">
          <div
            className={`item ${material === "leather" ? "item-active" : ""}`}
            onClick={() => setMaterial("leather")}
          >
            <div className="item-label">Leather</div>
          </div>
          <div
            className={`item ${material === "fabric" ? "item-active" : ""}`}
            onClick={() => setMaterial("fabric")}
          >
            <div className="item-label">Fabric</div>
          </div>
        </div>
      </div>
      <div className="configurator-section">
        <div className="configurator-section-title">Chair Legs</div>
        <div className="configurator-section-values">
          <div
            className={`item ${legs === 1 ? "item-active" : ""}`}
            onClick={() => setLegs(1)}
          >
            <div className="item-label">Modern</div>
          </div>
          <div
            className={`item ${legs === 2 ? "item-active" : ""}`}
            onClick={() => setLegs(2)}
          >
            <div className="item-label">Classic</div>
          </div>
        </div>
      </div>
      <div className="configurator-section">
        <div className="configurator-section-title">Chair Color</div>
        <div className="configurator-section-values">
          {chairColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === chairColor.color ? "item-active" : ""
              }`}
              onClick={() => setChairColor(item)}
            >
              <div
                className="item-dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item-label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="configurator-section">
        <div className="configurator-section-title">Cushion Color</div>
        <div className="configurator-section-values">
          {cushionColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === cushionColor.color ? "item-active" : ""
              }`}
              onClick={() => setCushionColor(item)}
            >
              <div
                className="item-dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item-label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Configurator;
