const url = "https://striveschool-api.herokuapp.com/api/movies/";

window.onload = () => {
  console.log("JS connected");
};

const handleSubmit = async (e) => {
  e.preventDefault();
  let myMovie = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    category: document.getElementById("category").value,
    imageUrl: document.getElementById("image").value,
  };
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyMWRmYjg5YzI2ZjAwMTU3ZjljODMiLCJpYXQiOjE2MTU5OTQzNjQsImV4cCI6MTYxNzIwMzk2NH0.1Wj7yjUNn9Xg6crLfq4mnadvyq5Fr0p5BGSYamix9GU",
      },
      body: JSON.stringify(myMovie),
    });
    response.ok ? alert("Movie added") : alert("There was a problem");
  } catch (error) {
    console.log(error);
  }
};
