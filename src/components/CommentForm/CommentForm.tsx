"use client";
import React, { useState } from "react";

export default function CommentForm({ topicSlug, subtopicSlug }: any) {
  const [error, setError] = useState<string | null>(null); // State to track error

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(e.target);

    // Send POST request to backend
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/topic/${topicSlug}/${subtopicSlug}/comments`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Data posted successfully!");
        alert("Comment posted successfully!");
        // Optionally, you can redirect or perform any other action on success
      }
    } catch (error: any) {
      setError("Network error occurred."); // Set error state
      console.error("Error posting data:", error.message);
    }
  };

  return (
    <div className="px-2">
      {error && <div className="error">{error}</div>}
      {/* Display error div if error state is not null */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name :</label>
        <br />
        <input type="text" name="name" id="name" className="p-2 w-full" />
        <input
          type="text"
          name="subtopic"
          id="subtopic"
          hidden
          value={subtopicSlug}
        />
        <br />
        <label htmlFor="comment">Comment :</label>
        <br />
        <textarea
          name="comment"
          className="p-2 w-full"
          id="comment"
          placeholder="Type message here"
        ></textarea>
        <center>
          <input
            type="submit" // Change type to submit to submit the form
            value="Submit"
            className="bg-blue-200 p-2 hover:bg-blue-400"
          />
        </center>
      </form>
    </div>
  );
}
