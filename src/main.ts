import Router from "./navigation/router";
import { createPage } from "./templates/base";
import "./style.css";

// Raw suffix tells Vite to import this as string
import homeHtml from "./views/home.html?raw";
import projectsHtml from "./views/projects.html?raw";

// Web components
import "./components/experience-card";
import "./components/skill-card";
import "./components/education-card";

const router = new Router("app");

router
	.addRoute("/", () => createPage(homeHtml, "Home - Timothy White"))
	.addRoute("/projects", () =>
		createPage(projectsHtml, "Projects - Timothy White"),
	)

	.setNotFound(() =>
		createPage("<h1>404 - Not Found</h1>", "404 - Timothy White"),
	)
	.start();

// Append the year to the footer
const yearElement = document.getElementById("footer-year");
if (yearElement) {
	yearElement.textContent = String(`${new Date().getFullYear()} `);
}
