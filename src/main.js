import { setupCounter } from "./counter.js";
import "./style.css";

document.querySelector("#app").innerHTML = 0;

setupCounter(document.querySelector("#counter"));
