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
      {/* <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"> */}
      <tr>
        {/* <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
            <div className="inline-flex items-center gap-x-3">
              <input
                type="checkbox"
                className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
              />
              <span>#3066</span>
            </div>
          </td> */}
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
        {/* <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 3L4.5 8.5L2 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2 className="text-sm font-normal">Paid</h2>
          </div>
        </td> */}

        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          {location}
        </td>
        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          {price}
        </td>
        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          {id}
        </td>
        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          {gpu}
        </td>
        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          {internal_network_speed}
        </td>
        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          {external_network_speed}
        </td>
      </tr>
      {/* </tbody> */}
    </>
  );
}

export default Card;
