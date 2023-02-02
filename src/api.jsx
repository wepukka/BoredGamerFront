import axios from "axios";

const apiFetch = async (platform, genre) => {
  try {
    const response = await axios({
      method: "GET",
      url: `http://localhost:3000/api/games?platform=${platform}&genre=${genre}`,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export { apiFetch };
