import "./styles.css";
import { home, menu, about, buttons } from "./app.js";

home();

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        content.textContent = "";
        btn.textContent === "Home" ? home() :
        btn.textContent === "Menu" ? menu() :
        about();
    });
})