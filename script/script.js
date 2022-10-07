import { firstShowing, searching } from "./utils.js";

const resultCard = document.getElementById("resultCard");
const searchElement = document.getElementById("search-keyword");

firstShowing();

searchElement.addEventListener("keyup", () => {
	searching(resultCard, searchElement);
});
