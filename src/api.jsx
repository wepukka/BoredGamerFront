import axios from "axios";

const apiFetch = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: "http://localhost:3000/api/testi",
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export { apiFetch };
