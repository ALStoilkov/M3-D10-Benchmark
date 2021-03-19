const url = "https://striveschool-api.herokuapp.com/api/movies/";

window.onload = async () => {
  console.log("JS connected");
  try {
    let fetchCategories = await fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyMWRmYjg5YzI2ZjAwMTU3ZjljODMiLCJpYXQiOjE2MTU5OTQzNjQsImV4cCI6MTYxNzIwMzk2NH0.1Wj7yjUNn9Xg6crLfq4mnadvyq5Fr0p5BGSYamix9GU",
      },
    });
    let categories = await fetchCategories.json();
    console.log("Categories:", categories);
    // categories.forEach((category) => {
    //   console.log(category);
    //       let fetchCategory = fetch((url+category), {
    //         headers: {
    //           Authorization:
    //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyMWRmYjg5YzI2ZjAwMTU3ZjljODMiLCJpYXQiOjE2MTU5OTQzNjQsImV4cCI6MTYxNzIwMzk2NH0.1Wj7yjUNn9Xg6crLfq4mnadvyq5Fr0p5BGSYamix9GU",
    //         }).then( category => category.json()).catch(err=>console.error(err))
    //     //   console.log("Fetched category:",category)
  } catch (err) {
    console.log(err);
  }
};
