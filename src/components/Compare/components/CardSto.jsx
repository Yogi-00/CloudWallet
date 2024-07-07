import { useState } from "react";
import React from "react";

function Card({
  company,
  link,
  location,
  name,
  maximum_bandwidth,
  maximum_io,
  maximum_size,
  id,
  prices,

  size,
  io,
  bandwidth,
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

    if (!localStorage.getItem("userEmail")) {
      return alert("please login or sign up");
    }
    console.log(localStorage.getItem("userEmail"));
    try {
      const response = await fetch("http://localhost:5000/api/addfav1", {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("userEmail"),
          company: company,
          link: link,
          location: location,
          name: name,
          maximum_bandwidth: maximum_bandwidth,
          maximum_io: maximum_io,
          maximum_size: maximum_size,
          id: id,
          size: size,
          io: io,
          bandwidth: bandwidth,
        }),
      });
      if (response.status !== 200) {
        alert("Cannot Add to Favorites");
        console.log(response);
      } else {
        setIsClicked(true);
        console.log("Item added to favorites succesfully");
        // alert("Item Added to Favorites Successfully");
      }
    } catch (error) {
      console.error("SYJ Error:", error);
    }
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
          {size}
        </td>
        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          {maximum_size}
        </td>

        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          {location}
        </td>
        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          {prices}
          {/* {io} */}
        </td>
        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          {io}
        </td>
        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          {maximum_io}
        </td>
        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          {bandwidth}
        </td>
        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          {maximum_bandwidth}
        </td>
        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
          <button
            onClick={handleSubmit}
            class="p-0 w-12 h-10 bg-gray-500 rounded-full hover:bg-gray-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none "
          >
            {isClicked ? (
              <svg
                viewBox="0 0 48 48"
                className="w-7 h-7 inline-block"
                enableBackground="new 0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  d="M14,24l8,8l16-16"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 20 20"
                enableBackground="new 0 0 20 20"
                className="w-6 h-6 inline-block"
              >
                <path
                  fill="#FFFFFF"
                  d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                      C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                      C15.952,9,16,9.447,16,10z"
                />
              </svg>
            )}
          </button>
        </td>
      </tr>
      {/* </tbody> */}
    </>
  );
}

export default Card;
