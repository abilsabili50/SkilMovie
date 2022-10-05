import API_KEY from "../config/config.js";

const listMovieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
const imagePath = "https://image.tmdb.org/t/p/original/";
const resultCard = document.getElementById("resultCard");

fetch(listMovieUrl)
	.then((response) => response.json())
	.then((response) => {
		resultCard.innerHTML = "";
		const results = response.results;
		results.forEach((result) => {
			resultCard.innerHTML += showCard(result);
		});
	});

function showCard(data) {
	let date = new Date(data.release_date);
	date = date.toDateString();
	date = date.split(" ");
	date.shift();
	date = date.join(" ");
	return `<div class="col-md-4 my-3">
  <div class="card">
    <img src="${imagePath + data.poster_path}" class="card-img-top" alt="" />
    <div class="card-body row">
      <div class="col-md-9">
        <h5 class="card-title">${data.title}</h5>
      </div>
      <div class="col-md-3 text-center"><strong>${
				data.vote_average
			}</strong></div>
      <div class="col-md-9 mt-3">
        <h6>${date}</h6>
      </div>
    </div>
  </div>
</div>`;
}
