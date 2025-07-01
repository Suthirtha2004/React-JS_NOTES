import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../Components/UI/Cards";

export const RandomJoke = () => {
  const [data, setData] = useState([]);

  const url = "https://v2.jokeapi.dev/joke/Any?amount=10"; // returns array of jokes

  const AxiosFunc = async () => {
    try {
      const res = await axios.get(url);
      console.log(res.data.jokes); // ✅ correct field
      setData(res.data.jokes);     // ✅ store array
    } catch (error) {
      console.log("Error fetching jokes:", error);
    }
  };

  useEffect(() => {
    AxiosFunc();
  }, []);

  return (
    <>
      <ul>
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};
