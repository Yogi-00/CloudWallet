import React from "react";
import MultiSelect from "../../components/MultiSelect";

function Company({ selectedCompany, handleCompanyChange }) {
  const companies_list = [
    { label: "oracle", value: 10 },
    { label: "linode", value: 1 },
    { label: "digital ocean", value: 12 },
    { label: "aws", value: 6 },
    { label: "gcp", value: 7 },
    { label: "ovh", value: 2 },
    { label: "infomaniak", value: 9 },
    { label: "hetzner", value: 5 },
    { label: "aliyun", value: 11 },
    { label: "upcloud", value: 4 },
    { label: "azure", value: 8 },
    { label: "scaleway", value: 3 },
  ];
  return (
    <>
      <MultiSelect
        selectedOptions={selectedCompany}
        handleChange={handleCompanyChange}
        options={companies_list}
        name="Company"
        placeholder="select Companies"
      />
    </>
  );
}

export default Company;
