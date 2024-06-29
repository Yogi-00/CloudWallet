import "./index.css";
import TableSto from "./Table/TableSto";
import Sidebar from "./Sidebar/SidebarSto";
import Card from "./components/CardSto";
import Search from "./Search/Search";

import { useState, useEffect } from "react";

function App() {
  const [Stooffers, setStoOffers] = useState([]);
  const [query, setQuery] = useState("");

  const [rangeSize, setRangeSize] = useState([70368744177664]);
  const [rangeIo, setRangeIo] = useState([300000]);
  const [rangeBandWidthSto, setRangeBandWidthSto] = useState([800000000000]);

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
    setStoOffers(response[4] || []); // Ensure Stooffers is always an array
    console.log(response[4]);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSizeChange = (event) => {
    setRangeSize([Number(event.target.value)]);
  };

  const handleIoChange = (event) => {
    setRangeIo([Number(event.target.value)]);
  };

  const handleBandWidthStoChange = (event) => {
    setRangeBandWidthSto([Number(event.target.value)]);
    console.log(event.target.value);
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
    Stooffers,
    query,

    rangeSize,
    rangeIo,
    rangeBandWidthSto,

    selectedCompany,
    selectedLocation
  ) {
    let filteredStoOffers = Stooffers || [];
    console.log(filteredStoOffers);
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
      filteredStoOffers = filteredStoOffers.filter((offer) => {
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
      console.log("query", filteredStoOffers);
    }

    if (rangeSize) {
      filteredStoOffers = filteredStoOffers.filter(
        ({ size }) => size <= rangeSize
      );
      console.log("size", filteredStoOffers);
    }

    if (rangeIo) {
      filteredStoOffers = filteredStoOffers.filter(
        ({ io }) => io <= rangeIo * (1024 * 1024 * 1024)
      );
      console.log("io", filteredStoOffers);
    }

    if (rangeBandWidthSto) {
      filteredStoOffers = filteredStoOffers.filter(
        ({ bandwidth }) => bandwidth <= rangeBandWidthSto
      );
      console.log("rangeBandWidthSto", filteredStoOffers);
    }

    if (selectedCompany.length > 0) {
      const selectedCompanyValues = selectedCompany.map(
        (company) => company.value
      );
      console.log("selectedCompany", filteredStoOffers);

      filteredStoOffers = filteredStoOffers.filter(({ company }) => {
        console.log(company);
        return selectedCompanyValues.includes(company);
      });
      console.log("selectedCompany", filteredStoOffers);
    }

    if (selectedLocation.length > 0) {
      console.log(selectedLocation);
      const selectedLocationValues = selectedLocation.map(
        (location) => location.value
      );
      console.log("selectedLocation", filteredStoOffers);

      filteredStoOffers = filteredStoOffers.filter((offer) => {
        return selectedLocationValues.includes(offer.location.toString());
      });
      console.log("selectedLocation", filteredStoOffers);
    }
    console.log(filteredStoOffers);
    return filteredStoOffers.map(
      ({
        company,
        link,
        location,
        maximum_size,
        io,
        maximum_io,
        size,
        bandwidth,
        maximum_bandwidth,
        name,
        id,
        // prices,
      }) => (
        <Card
          key={id}
          id={id}
          company={company}
          link={link}
          location={location}
          io={io}
          size={size}
          maximum_bandwidth={maximum_bandwidth}
          maximum_io={maximum_io}
          maximum_size={maximum_size}
          bandwidth={bandwidth}
          name={name}
          // prices={prices[0].value}
        />
      )
    );
  }

  useEffect(() => {}, [selectedLocation]);

  const result = filteredData(
    Stooffers,
    query,

    rangeSize,
    rangeIo,

    rangeBandWidthSto,

    selectedCompany,
    selectedLocation
  );

  return (
    <>
      <div className="grid grid-rows-12 grid-cols-12 gap-2 m-2">
        <div className="row-span-12 col-span-2 h-full overflow-y-auto p-4">
          <Sidebar
            rangeSize={rangeSize}
            handleSizeChange={handleSizeChange}
            rangeIo={rangeIo}
            handleIoChange={handleIoChange}
            rangeBandWidthSto={rangeBandWidthSto}
            handleBandWidthStoChange={handleBandWidthStoChange}
            selectedCompany={selectedCompany}
            handleCompanyChange={handleCompanyChange}
            selectedLocation={selectedLocation}
            handleLocationChange={handleLocationChange}
            query={query}
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="row-span-12 col-span-10">
          <Search query={query} handleInputChange={handleInputChange} />
          <div className="mt-2">
            <TableSto result={result} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
