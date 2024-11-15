import "./index.css";
import Table from "./components/Table";
import Sidebar from "./components/Compare/Sidebar/Sidebar";
import Card from "./components/Compare/components/Card";
import Search from "./components/Search";

import { useState, useEffect } from "react";

function App() {
  const [offers, setOffers] = useState([]);
  const [query, setQuery] = useState("");
  // const [selectedOptions, setSelectedOptions] = useState([]);
  // const [rangeValue, setRangeValue] = useState([210000]);
  const [rangeCpu, setRangeCpu] = useState([896]);
  const [rangeRam, setRangeRam] = useState([36000]);
  const [rangeDisk, setRangeDisk] = useState([600000000000]);
  const [rangeGpu, setRangeGpu] = useState([16]);
  const [rangeBandWidth, setRangeBandWidth] = useState([125000000]);
  const [rangeNetworkSpeed, setRangeNetworkSpeed] = useState([625000000000]);
  const [selectedCompany, setSelectedCompany] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/CloudData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    setOffers(response[0] || []); // Ensure offers is always an array
    console.log(response[0]);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleRangeChange = (event) => {
    // setRangeValue([Number(event.target.value)]);
  };

  const handleCpuChange = (event) => {
    setRangeCpu([Number(event.target.value)]);
  };

  const handleRamChange = (event) => {
    setRangeRam([Number(event.target.value)]);
  };

  const handleDiskChange = (event) => {
    setRangeDisk([Number(event.target.value)]);
    console.log(event.target.value);
  };

  const handleGpuChange = (event) => {
    setRangeGpu([Number(event.target.value)]);
    console.log(event.target.value);
  };

  const handleBandWidthChange = (event) => {
    setRangeBandWidth([Number(event.target.value)]);
    console.log(event.target.value);
  };

  const handleNetworkSpeedChange = (event) => {
    setRangeNetworkSpeed([Number(event.target.value)]);
    console.log(event.target.value);
  };

  const handleChange = (selected) => {
    // setSelectedOptions(selected);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCompanyChange = (selected) => {
    setSelectedCompany(selected || []);
    console.log(selected);
  };

  const handleLocationChange = (selected) => {
    setSelectedLocation(selected || []);
    console.log(selected);
  };

  function filteredData(
    offers,
    query,
    // rangeValue,
    rangeCpu,
    rangeRam,
    rangeDisk,
    rangeGpu,
    rangeBandWidth,
    rangeNetworkSpeed,
    selectedCompany,
    selectedLocation
  ) {
    let filteredOffers = offers || [];
    console.log(filteredOffers);

    const companyMapping = {
      1: "linode",
      2: "ovh",
      3: "scaleway",
      4: "upcloud",
      5: "hetzner",
      6: "aws",
      7: "gcp",
      8: "azure",
      9: "infomaniak",
      10: "oracle",
      11: "aliyun",
      12: "digital ocean",
    };

    if (query) {
      filteredOffers = filteredOffers.filter((offer) => {
        const nameMatches =
          offer.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        const companyMatches = companyMapping[offer.company]
          ? companyMapping[offer.company]
              .toLowerCase()
              .indexOf(query.toLowerCase()) !== -1
          : false;
        const tagsMatch = offer.tags.some(
          (tag) => tag.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
        );
        return nameMatches || companyMatches || tagsMatch;
      });
      console.log("query", filteredOffers);
    }

    if (rangeCpu) {
      filteredOffers = filteredOffers.filter(({ cpu }) => cpu <= rangeCpu);
      console.log("cpu", filteredOffers);
    }

    if (rangeRam) {
      filteredOffers = filteredOffers.filter(
        ({ ram }) => ram <= rangeRam * (1024 * 1024 * 1024)
      );
      console.log("ram", filteredOffers);
    }

    if (rangeDisk) {
      filteredOffers = filteredOffers.filter(({ disk }) => disk <= rangeDisk);
      console.log("disk", filteredOffers);
    }

    if (rangeNetworkSpeed) {
      filteredOffers = filteredOffers.filter(
        ({ external_network_speed }) =>
          external_network_speed <= rangeNetworkSpeed
      );
      console.log("rangeNetworkSpeed", filteredOffers);
    }

    if (rangeGpu) {
      filteredOffers = filteredOffers.filter(({ gpu }) => gpu <= rangeGpu);
      console.log("gpu", filteredOffers);
    }

    if (rangeBandWidth) {
      filteredOffers = filteredOffers.filter(
        ({ internal_network_speed }) => internal_network_speed <= rangeBandWidth
      );
      console.log("rangeBandWidth", filteredOffers);
    }

    if (selectedCompany.length > 0) {
      const selectedCompanyValues = selectedCompany.map(
        (company) => company.value
      );
      console.log("selectedCompany", filteredOffers);

      filteredOffers = filteredOffers.filter(({ company }) => {
        console.log(company);
        return selectedCompanyValues.includes(company);
      });
      console.log("selectedCompany", filteredOffers);
    }

    if (selectedLocation.length > 0) {
      console.log(selectedLocation);
      const selectedLocationValues = selectedLocation.map(
        (location) => location.value
      );
      console.log("selectedLocation", filteredOffers);

      filteredOffers = filteredOffers.filter((offer) => {
        return selectedLocationValues.includes(offer.location.toString());
      });
      console.log("selectedLocation", filteredOffers);
    }
    console.log(filteredOffers);
    return filteredOffers.map(
      ({
        company,
        link,
        location,
        gpu,
        disk,
        ram,
        cpu,
        name,
        id,
        price,
        internal_network_speed,
        external_network_speed,
      }) => (
        <Card
          key={id}
          id={id}
          company={company}
          link={link}
          location={location}
          gpu={gpu}
          disk={disk}
          ram={ram}
          cpu={cpu}
          name={name}
          price={price.value}
          internal_network_speed={internal_network_speed}
          external_network_speed={external_network_speed}
        />
      )
    );
  }

  useEffect(() => {}, [selectedLocation]);

  const result = filteredData(
    offers,
    query,
    // rangeValue,
    rangeCpu,
    rangeRam,
    rangeDisk,
    rangeGpu,
    rangeBandWidth,
    rangeNetworkSpeed,
    selectedCompany,
    selectedLocation
  );

  return (
    <>
      <div className="grid grid-rows-12 grid-cols-12 gap-2 m-2">
        <div className="row-span-12 col-span-2 h-full overflow-y-auto p-4">
          <Sidebar
            // // selectedOptions={selectedOptions}
            handleChange={handleChange}
            // // rangeValue={rangeValue}
            handleRangeChange={handleRangeChange}
            rangeCpu={rangeCpu}
            handleCpuChange={handleCpuChange}
            rangeRam={rangeRam}
            handleRamChange={handleRamChange}
            selectedCompany={selectedCompany}
            handleCompanyChange={handleCompanyChange}
            selectedLocation={selectedLocation}
            handleLocationChange={handleLocationChange}
            rangeDisk={rangeDisk}
            handleDiskChange={handleDiskChange}
            rangeGpu={rangeGpu}
            handleGpuChange={handleGpuChange}
            rangeBandWidth={rangeBandWidth}
            handleBandWidthChange={handleBandWidthChange}
            rangeNetworkSpeed={rangeNetworkSpeed}
            handleNetworkSpeedChange={handleNetworkSpeedChange}
            query={query}
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="row-span-12 col-span-10">
          <Search query={query} handleInputChange={handleInputChange} />
          <div className="mt-2">
            <Table result={result} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
