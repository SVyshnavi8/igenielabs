// src/components/ExpertiseTabs.tsx
import { Link, useLocation } from "react-router-dom";

const ExpertiseTabs = () => {
  const location = useLocation();

  const tabs = [
    { label: "Strategy & Advisory", path: "/strategyadvisory" },
    { label: "Engineer Your Data", path: "/engineerdata" },
    { label: "Differentiate AI/ML", path: "/differentiateai" },
    { label: "Operationalize Insights", path: "/operationalizeinsights" },
  ];

  return (
    <div className="flex justify-center mb-10 border-b border-border">
      <div className="flex space-x-6 overflow-x-auto">
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            className={`pb-2 text-sm md:text-base font-medium transition-colors ${
              location.pathname === tab.path
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseTabs;
