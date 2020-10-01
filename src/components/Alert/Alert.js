import React from "react";
import { useAlert } from "../../AppContext/AlertContext";
import "./styles.scss";

export default function Alert() {
  const alert = useAlert();

  if (!alert.visible) return null;

  return (
    <div
      className="alert"
      onClick={alert.hide}
      style={{ backgroundColor: `${alert.variation}` }}
    >
      {alert.text}

      <button>x</button>
    </div>
  );
}
