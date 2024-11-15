import { useNavigate } from "react-router";
import "./Reports.css";
import { RoutePass } from "../../constants/routePass";

const Reports = () => {
  const navigate = useNavigate();

  const handleReport = () => {
    navigate(RoutePass.Report2024);
  }

  return (
    <div className="all-reports-page">
      <div className="title-report-text">
      Отчеты о расходование средств
      </div>
      <div>
        <p className="report-link" onClick={handleReport}>Отчет за 2024 год</p>
      </div>
    </div>
  );
};

export default Reports;