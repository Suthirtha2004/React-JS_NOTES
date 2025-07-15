import { useEffect, useState } from "react";
import { Addpostmethod, UpdatePostMethod } from "../api/PostApi";

export const Form = ({ data, setData, updateData, setupdateData }) => {
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

  const AddOrUpdatePost = async () => {
    try {
      let response;
      if (updateData && updateData.id) {
        response = await UpdatePostMethod(updateData.id, addData);
        if (response.status === 200) {
          setData(
            data.map((item) =>
              item.id === updateData.id ? response.data : item
            )
          );
        }
      } else {
        response = await Addpostmethod(addData);
        if (response.status === 201 || response.status === 200) {
          setData([response.data, ...data]);
        }
      }
      setAddData({ title: "", body: "" });
      setupdateData(null);
    } catch (error) {
      console.error("Error adding/updating post:", error);
    }
  };

  useEffect(() => {
    updateData &&
      setAddData({
        title: updateData.title || "",
        body: updateData.body || "",
      });
  }, [updateData]);

  const handleSubmitChange = (e) => {
    e.preventDefault();
    AddOrUpdatePost();
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
        {updateData ? "Edit Post" : "Add Post"}
      </button>
    </form>
  );
};
