import React from "react";

function CompanyCard({ logo }: { logo: string }) {
  return (
    <div className="mx-4">
      <img src={logo} alt="Company Logo" className="w-full h-20" />
    </div>
  );
}

export default CompanyCard;
