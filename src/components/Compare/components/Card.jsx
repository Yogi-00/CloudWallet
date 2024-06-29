import React from "react";

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
          {cpu}
        </td>
        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          {ram / (1024 * 1024 * 1024)}
        </td>

        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          {location}
        </td>
        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          {price}
        </td>
        {/* <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          {id}
        </td> */}
        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          {gpu}
        </td>
        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          {internal_network_speed}
        </td>
        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          {external_network_speed}
        </td>
        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          <button class="p-0 w-12 h-10 bg-gray-500 rounded-full hover:bg-gray-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
            <svg
              viewBox="0 0 20 20"
              enable-background="new 0 0 20 20"
              class="w-6 h-6 inline-block"
            >
              <path
                fill="#FFFFFF"
                d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
              />
            </svg>
          </button>{" "}
        </td>
      </tr>
      {/* </tbody> */}
    </>
  );
}

export default Card;
