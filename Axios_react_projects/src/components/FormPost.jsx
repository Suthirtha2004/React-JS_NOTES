import { useEffect, useState } from "react";
import { Addpostmethod } from "../api/PostApi";

export const Form = ({ data, setData,updateData,setupdateData }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const AddPost = async () => {
    try {
      const response = await Addpostmethod(addData);  // Pass the data here
      if (response.status === 201 || response.status === 200) {
        setData([response.data, ...data]); // Add to top
        setAddData({ title: "", body: "" }); // Clear form
      }
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  useEffect(()=>{
    updateData &&
    setAddData({
        title : updateData.title || "",
        body : updateData.body || "",
    })
  },[updateData]);

  const handleSubmitChange = (e) => {
    e.preventDefault();
    AddPost();
  };

  return (
    <form onSubmit={handleSubmitChange} className="add-post-section">
      <label htmlFor="title">Add Title Here</label>
      <input
        type="text"
        name="title"
        id="title"
        value={addData.title}
        onChange={handleInputChange}
        autoComplete="off"
        placeholder="Enter post title"
      />

      <label htmlFor="body">Add Post</label>
      <input
        type="text"
        name="body"
        id="body"
        value={addData.body}
        onChange={handleInputChange}
        autoComplete="off"
        placeholder="Enter post content"
      />

      <button type="submit" className="add-post-btn">
        Add Post
      </button>
    </form>
  );
};
