export const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    return res.json();
  } catch (error) {
    console.error("Failed to fetch the data:", error);
  }
};
