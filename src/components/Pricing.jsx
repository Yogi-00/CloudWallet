import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { jsx } from "react/jsx-runtime";

const Pricing = () => {
  const [user, setUsers] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [storage, setStorage] = useState([]);

  const generatePDF = () => {
    setTimeout(() => {
      const doc = new jsPDF();
      doc.autoTable({ html: "#my-table" });
      doc.save("compute.pdf");
    }, 1000);
  };
  const storagePDF = () => {
    setTimeout(() => {
      const doc = new jsPDF();
      doc.autoTable({ html: "#storage-table" });
      doc.save("storage.pdf");
    }, 1000);
  };

  const handleCancel = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== id)
    );
  };
  const handleCancelSto = (id) => {
    setStorage((prevStorage) => prevStorage.filter((sto) => sto.id !== id));
  };

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
    setFavorites(curr_user[0].favorites || []);
    setStorage(curr_user[0].storage || []);
    console.log("favorites : ", curr_user[0].favorites);
    console.log("storage : ", curr_user[0].storage);
    // console.log(response[0],response[1]);
    // console.log(response[0][1].name)
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/94.jpg"
                  alt="John Doe"
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                />
                <h1 className="text-xl font-bold">{user.name}</h1>
                <p className="text-gray-700">{user.role}</p>
                {/* <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <a
                    href="#"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                  >
                    Contact
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                  >
                    Resume
                  </a>
                </div> */}
              </div>
              <hr className="my-6 border-t border-gray-300" />
              {/* <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Skills
                </span>
                <ul>
                  <li className="mb-2">JavaScript</li>
                  <li className="mb-2">React</li>
                  <li className="mb-2">Node.js</li>
                  <li className="mb-2">HTML/CSS</li>
                  <li className="mb-2">Tailwind CSS</li>
                </ul>
              </div> */}
            </div>
          </div>

          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <table
                id="my-table"
                className="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
              >
                <thead className="bg-gray-50 bg-orange-700 sticky top-0 text-white">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      CPU
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      RAM
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      Location
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      Price($)
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      Gpu
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      Bandwidth
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      Network Speed
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      Cancel
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {favorites.map((fav) => {
                    return (
                      <tr>
                        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <img
                              className="object-cover w-8 h-8 rounded-full"
                              src="https://pixelbag.net/wp-content/uploads/2021/12/AWS-Logo-svg.jpg"
                              alt=""
                            />
                            <div>
                              <h2 className="text-sm font-medium text-black">
                                {fav.name}
                              </h2>
                              <p className="text-xs font-normal text-black">
                                {fav.company}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
                          {fav.cpu}
                        </td>
                        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
                          {fav.ram}
                        </td>

                        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
                          {fav.location}
                        </td>
                        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
                          {fav.price}
                        </td>
                        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
                          {fav.gpu}
                        </td>
                        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
                          {fav.internal_network_speed}
                        </td>
                        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
                          {fav.external_network_speed}
                        </td>
                        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
                          <button
                            onClick={() => handleCancel(fav.id)}
                            class="p-0 w-12 h-10 bg-gray-500 rounded-full hover:bg-gray-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              viewBox="0 0 48 48"
                              class="w-10 h-10 inline-block"
                            >
                              <path
                                fill="#f44336"
                                d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"
                              ></path>
                            </svg>
                          </button>{" "}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <button
                onClick={generatePDF}
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Print
              </button>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <table
                id="storage-table"
                className="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
              >
                <thead className="bg-gray-50 bg-orange-700 sticky top-0 text-white">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      Size
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      M-Size
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      Location
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      Price($)
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      Io
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      M-Io
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      Bandwidth
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      M-Bandwidth
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      Add
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {storage.map((sto) => {
                    return (
                      <tr>
                        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <img
                              className="object-cover w-8 h-8 rounded-full"
                              src="https://pixelbag.net/wp-content/uploads/2021/12/AWS-Logo-svg.jpg"
                              alt=""
                            />
                            <div>
                              <h2 className="text-sm font-medium text-black">
                                {sto.name}
                              </h2>
                              <p className="text-xs font-normal text-black">
                                {sto.company}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
                          {sto.size}
                        </td>
                        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
                          {sto.maximum_size}
                        </td>

                        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
                          {sto.location}
                        </td>
                        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
                          {sto.id}
                        </td>
                        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
                          {/* {prices} */}
                          {sto.io}
                        </td>
                        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
                          {sto.maximum_io}
                        </td>
                        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
                          {sto.bandwidth}
                        </td>
                        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
                          {sto.maximum_bandwidth}
                        </td>
                        <td className="px-4 py-4 text-sm text-black-700  whitespace-nowrap">
                          <button
                            onClick={() => handleCancelSto(sto.id)}
                            class="p-0 w-12 h-10 bg-gray-500 rounded-full hover:bg-gray-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              viewBox="0 0 48 48"
                              class="w-10 h-10 inline-block"
                            >
                              <path
                                fill="#f44336"
                                d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"
                              ></path>
                            </svg>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <button
                onClick={storagePDF}
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
