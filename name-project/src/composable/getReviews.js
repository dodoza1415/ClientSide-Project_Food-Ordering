const getReviews = async () => {
  try {
    const res = await fetch("http://localhost:5001/reviews");
    if (res.status === 200) {
      const reviews = await res.json();
      return reviews;
    } else throw new Error("There is something wrong, cannot get your data!");
  } catch (error) {
    console.log(error);
  }
};

export { getReviews };
