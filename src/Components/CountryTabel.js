import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../api/baseUrl";

function CountryTabel() {
  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [countryCode, setCountryCode] = useState();
  const [loading, setLoading] = useState(false);

  // Headers
  const header = {
    "X-CSCAPI-KEY": "WmRFNmR1cFJlUkFOS05LUENYN0E2V0xSaks3YWZ6bHA5TnhvRklFNQ==",
  };

  // Country Name API Calling
  const country = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseUrl}countries/`, {
        headers: header,
      });
      if (response.data !== "") {
        setCountryData(response.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  // State Name API Calling
  const state = async (CountryNames) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${baseUrl}countries/${CountryNames}/states/`,
        { headers: header }
      );
      if (response.data !== "") {
        setStateData(response.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  // City Name API Calling
  const GetAllCity = async (stateName) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${baseUrl}countries/${countryCode}/states/${stateName}/cities`,
        { headers: header }
      );
      if (response) {
        setCityData(response.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    return () => {
      country();
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-screen h-screen inline-flex items-center justify-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-black bg-[#f6feff] transition ease-in-out duration-150 z-40 cursor-not-allowed">
          <svg
            className="animate-spin -ml-1 mr-3 h-20 w-20 text-[#2F3C7E]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Please Wait
        </div>
      ) : (
        <div className="px-5 my-10">
          <h1 className="text-3xl font-bold flex justify-center text-blue-600 mb-5"> Cuntry State City</h1>
          <div className="flex relative max-w-5xl w-full overflow-x-auto shadow-md mx-auto">
            {/* Country name  */}
            <table className="w-1/3 text-sm text-left border-collapse border border-gray-900 text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="border border-gray-900 px-6 py-3">
                    Country name
                  </th>
                </tr>
              </thead>
              <tbody>
                {countryData?.map((data) => (
                  <>
                    <tr
                      key={data.name}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
                    >
                      <td
                        onClick={(e) => {
                          state(data.iso2);
                          setCountryCode(data.iso2);
                        }}
                        className="border border-gray-900 px-6 py-4"
                      >
                        {data.name}
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
            {/* State name */}
            <table className="w-1/3 text-sm text-left border-collapse border border-gray-900 text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="border border-gray-900 px-6 py-3">
                    State name
                  </th>
                </tr>
              </thead>
              <tbody>
                {stateData.length > 0
                  ? stateData?.map((stateData) => (
                      <tr
                        key={stateData.name}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
                      >
                        <td
                          onClick={() => {
                            GetAllCity(stateData.iso2);
                          }}
                          className="border border-gray-900 px-6 py-4"
                        >
                          {stateData.name}
                        </td>
                      </tr>
                    ))
                  : countryData?.map((data) => (
                      <tr key={data.iso2}>
                        <td className="border border-gray-900 px-6 py-4"></td>
                      </tr>
                    ))}
              </tbody>
            </table>
            {/* City nameF */}
            <table className="w-1/3 text-sm text-left border-collapse border border-gray-900 text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="border border-gray-900 px-6 py-3">
                    City name
                  </th>
                </tr>
              </thead>
              <tbody>
                {cityData.length > 0
                  ? cityData?.map((city) => (
                      <tr
                        key={city.name}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
                      >
                        <td className="border border-gray-900 px-6 py-4">
                          {city.name}
                        </td>
                      </tr>
                    ))
                  : countryData?.map((data) => (
                      <tr key={data.iso2}>
                        <td className="border border-gray-900 px-6 py-4"></td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default CountryTabel;
