var hostname = window.location.href;
const env = {
  BASE_API_URL: hostname.includes("localhost")
    ? "http://localhost:3000"
    : "https://api.labelemporium.net",
};

export default env;
