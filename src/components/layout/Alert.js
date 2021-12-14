import React, { useContext } from "react";
import alertContext from "../../context/alert/alertContext";
const Alert = () => {
  const useAlertContext = useContext(alertContext);

  const { alert } = useAlertContext;
  return (
    alert != null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
