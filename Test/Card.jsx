import React from "react";
import { useState } from "react";

function Card({
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
}) {
  const companyNames = {
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
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <tr>
        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          <div className="flex items-center gap-x-2">
            <img
              className="object-cover w-8 h-8 rounded-full"
              src="https://pixelbag.net/wp-content/uploads/2021/12/AWS-Logo-svg.jpg"
              alt=""
            />
            <div>
              <h2 className="text-sm font-medium text-black">{name}</h2>
              <p className="text-xs font-normal text-black">
                {companyNames[company]}
              </p>
            </div>
          </div>
        </td>

        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          <button
            onClick={handleSubmit}
            class="p-0 w-12 h-10 bg-gray-500 rounded-full hover:bg-gray-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
          >
            submit
          </button>{" "}
        </td>
      </tr>
      {/* </tbody> */}
    </>
  );
}

export default Card;
