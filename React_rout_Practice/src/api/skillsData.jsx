export const getSkillsData = async ({ params }) => {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${import.meta.env.VITE_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Assuming params.skillID is the photo.id
    const photo = data.photos.find(photo => photo.id.toString() === params.skillID);

    if (!photo) {
      throw new Error("Photo not found");
    }

    return photo;
  } catch (error) {
    console.error("Error fetching or filtering data:", error);
    return null;
  }
};
