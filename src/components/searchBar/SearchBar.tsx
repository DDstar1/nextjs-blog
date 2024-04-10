"use client";
import React, { useState } from "react";
import Link from "next/link";

import { FcSearch } from "react-icons/fc";

import { apiUrl } from "@/components/api";

function SearchBar() {
  const [error, setError] = useState<string | null>(null); // State to track error
  const [queryResult, setQueryResult] = useState<any | null>(null); // State to track error
  const [hideSearch, setHideSearch] = useState<any | null>(true); // State to track error

  const toggleSearch = () => {
    setHideSearch(!hideSearch);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query");

    // Send POST request to backend
    if (query != "") {
      try {
        const response = await fetch(`${apiUrl}/api/search/${query}`, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          console.log("Data posted successfully!");
          setQueryResult(data);
        }
      } catch (error: any) {
        setError("Network error occurred."); // Set error state
        console.error("Error posting data:", error.message);
        console.log(error.message);
      }
    } else {
      setQueryResult(null);
    }
  };

  return (
    <div
      className={`z-10 fixed top-3 transition-all ${
        hideSearch ? "-right-56" : "right-2"
      }`}
    >
      <div className="relative flex items-center justify-center">
        <div
          className="bg-white rounded-full p-2 cursor-pointer"
          onClick={toggleSearch}
        >
          <FcSearch size={25} />
        </div>

        <form
          onChange={handleSubmit}
          onSubmit={handleSubmit}
          className="relative m-0"
        >
          <input
            name="query"
            type="text"
            className="shadow-2xl rounded-2xl p-4 text-center h-5 w-[90%] border-2 border-gray-300"
            placeholder="Type keywords here..."
          />
        </form>
      </div>

      {/* <<div className="bg-blue-400  p-3 w-fit flex flex-col align-center text-center my-1">
        <div className="flex justify-between w-max border-b-2 border-gray-500">
          <span>Cybersecurity</span>

          <span className="mx-2"> &lt;---&gt; </span>
          <span>Network</span>
        </div>

        <div>...sdvs dvs dvsd vsd vsdv sdv svs.s dvsd vsdv sd v s vsv...</div>
      </div>
      <div className="bg-blue-400  p-3 w-fit flex flex-col align-center text-center my-1">
        <div className="flex justify-between w-max border-b-2 border-gray-500">
          <span>Cybersecurity</span>

          <span className="mx-2"> &lt;---&gt; </span>
          <span>Network</span>
        </div>

        <div>...sdvs dvs dvsd vsd vsdv sdv svs.s dvsd vsdv sd v s vsv...</div>
      </div> */}
      {!hideSearch ? (
        <div>
          {queryResult && queryResult.length !== 0 ? (
            queryResult.map((result: any) => (
              <Link
                key={result.id}
                href={`/Topics/${result.topic_slug}/${result.subtopic_slug}`}
                className="hover:cursor-pointer"
              >
                <div className=" w-72 overflow-x-scroll bg-blue-100  p-3  flex flex-col align-center text-center my-1 rounded-3xl">
                  <div className="flex justify-between w-max border-b-2 border-gray-500">
                    <span>{result.topic_name}</span>
                    <span className="mx-2"> &lt;---&gt; </span>
                    <span>{result.subTopic_name}</span>
                  </div>
                  <div>{result.content_src}</div>
                </div>
              </Link>
            ))
          ) : queryResult ? (
            <center>
              <div className="text-center w-36 bg-blue-100">
                No results found.
              </div>
            </center>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default SearchBar;
