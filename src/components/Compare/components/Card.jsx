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
  const companyData = {
    1: {
      name: "linode",
      logoSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDWTcJ-afL_cqGGsVRglN4haGov7-xfZ5gg&s",
    },
    2: {
      name: "ovh",
      logoSrc:
        "https://x5h8w2v3.rocketcdn.me/wp-content/uploads/2022/07/ovhcloud-logo-1.png",
    },
    3: {
      name: "scaleway",
      logoSrc:
        "https://x5h8w2v3.rocketcdn.me/wp-content/uploads/2020/09/FS-AFFI-00315Scaleway.png",
    },
    4: {
      name: "upcloud",
      logoSrc:
        "https://pbs.twimg.com/profile_images/1089877713408557056/aO_IAlp__400x400.jpg",
    },
    5: {
      name: "hetzner",
      logoSrc:
        "https://s3-eu-west-1.amazonaws.com/tpd/logos/4be8393a00006400050a0527/0x0.png",
    },
    6: {
      name: "aws",
      logoSrc:
        "https://pixelbag.net/wp-content/uploads/2021/12/AWS-Logo-svg.jpg",
    },
    7: {
      name: "gcp",
      logoSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3kzRQxItrOQk7ASBMrRm_oZoanTO1ajAD9w&s",
    },
    8: {
      name: "azure",
      logoSrc:
        "https://www.appdynamics.com/c/r/appdynamics/solutions/azure-monitoring/index/jcr:content/Title/blade_copy_172843868/bladeContents1/image/image.img.png/1670878360555.png",
    },
    9: {
      name: "infomaniak",
      logoSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajFDJkrnILTfHGEBWhw5PUH8PevJCw-HHjA&s",
    },
    10: {
      name: "oracle",
      logoSrc:
        "https://media.licdn.com/dms/image/D4D12AQECgQgddISstg/article-cover_image-shrink_720_1280/0/1667568847050?e=2147483647&v=beta&t=gXmfm-HwZHnvTHumdiNbz1V60Qp308u6U04CfQJZgfw",
    },
    11: {
      name: "aliyun",
      logoSrc: "https://img.stackshare.io/service/4207/Za8pS-nr_400x400.png",
    },
    12: {
      name: "digital ocean",
      logoSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXml5H7LDVwh620USkOzUtIL2LDE1bzpZRqw&s",
    },
  };
  const companyInfo = companyData[company] || {
    name: "Unknown",
    logoSrc: "https://example.com/default-logo.jpg",
  };
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!localStorage.getItem("userEmail")) {
      return alert("please login or sign up");
    }
    console.log(localStorage.getItem("userEmail"));
    try {
      const response = await fetch("http://localhost:5000/api/addfav", {
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
          gpu: gpu,
          disk: disk,
          ram: ram,
          cpu: cpu,
          name: name,
          id: id,
          price: price,
          internal_network_speed: internal_network_speed,
          external_network_speed: external_network_speed,
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
              src={companyInfo.logoSrc}
              alt={companyInfo.name}
            />
            <div>
              <h2 className="text-sm font-medium text-black">{name}</h2>
              <p className="text-xs font-normal text-black">
                {companyInfo.name}
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
          <button
            onClick={handleSubmit}
            class="p-0 w-12 h-10 bg-gray-500 rounded-full hover:bg-gray-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
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
          </button>{" "}
        </td>
      </tr>
      {/* </tbody> */}
    </>
  );
}

export default Card;
