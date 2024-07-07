import Cpu from "./Cpu/Cpu";
import Ram from "./Cpu/Ram";
import Disk from "./Cpu/Disk";
import Gpu from "./Cpu/Gpu";
import IBandWidth from "./Cpu/IBandWidth";
import NetworkSpeed from "./Cpu/NetworkSpeed";
import Company from "./Compute/Company";
import Location from "./Compute/Location";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
const Sidebar = ({
  rangeCpu,
  handleCpuChange,
  rangeRam,
  handleRamChange,
  selectedCompany,
  handleCompanyChange,
  selectedLocation,
  handleLocationChange,
  rangeDisk,
  handleDiskChange,
  rangeGpu,
  handleGpuChange,
  rangeBandWidth,
  handleBandWidthChange,
  rangeNetworkSpeed,
  handleNetworkSpeedChange,

  handleInputChange,
  query,
}) => {
  const navigate = useNavigate();
  const handleChange = (event) => {
    navigate("/pricing");
  };

  const [user, setUsers] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    const curr_email = localStorage.getItem("userEmail");
    console.log(response[0]);
    const curr_user = response.filter((user) => user.email == curr_email);
    console.log(curr_user);
    setUsers(curr_user[0]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div
        id="sidebar"
        className="bg-white h-screen md:block shadow-xl px-3 w-40 md:w-60 lg:w-60  transition-transform duration-300 ease-in-out"
      >
        <div className="space-y-6 md:space-y-10 mt-10">
          <h1 className="font-bold text-4xl text-center md:hidden">
            D<span className="text-teal-600">.</span>
          </h1>
          <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
            COMPUTE<span className="text-teal-600">.</span>
          </h1>
          <div id="profile" className="space-y-3">
            <img
              src="https://randomuser.me/api/portraits/men/94.jpg"
              alt="Avatar user"
              className="w-10 md:w-16 rounded-full mx-auto"
              onClick={handleChange}
            />
            <div>
              <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">
                {user.name}
              </h2>
              <p className="text-xs text-gray-500 text-center">{user.role}</p>
            </div>
          </div>
          <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
            <input
              type="search"
              onChange={handleInputChange}
              value={query}
              placeholder="Search Provider, Name..."
              required
            />
            <button className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block">
              <svg
                className="w-4 h-4 fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div>
            <Company
              selectedCompany={selectedCompany}
              handleCompanyChange={handleCompanyChange}
            />
          </div>
          <div>
            <Location
              selectedLocation={selectedLocation}
              handleLocationChange={handleLocationChange}
            />
          </div>

          <div>
            <Cpu
              rangeCpu={rangeCpu}
              handleCpuChange={handleCpuChange}
              maxValue={896}
            />
          </div>

          <div>
            <Ram
              rangeRam={rangeRam}
              handleRamChange={handleRamChange}
              maxValue={35185}
            />
          </div>
          <div>
            <Disk
              rangeDisk={rangeDisk}
              handleDiskChange={handleDiskChange}
              maxValue={6000000}
            />
          </div>
          <div>
            <Gpu
              rangeGpu={rangeGpu}
              handleGpuChange={handleGpuChange}
              maxValue={16}
            />
          </div>
          <div>
            <IBandWidth
              rangeBandWidth={rangeBandWidth}
              handleBandWidthChange={handleBandWidthChange}
              maxValue={125000000}
            />
          </div>

          <div>
            <NetworkSpeed
              rangeNetworkSpeed={rangeNetworkSpeed}
              handleNetworkSpeedChange={handleNetworkSpeedChange}
              maxValue={625000000000}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
