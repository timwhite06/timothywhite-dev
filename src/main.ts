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
import "./components/project-card";

const router = new Router("app");

router
	.addRoute("/", () => createPage(homeHtml))
	.addRoute("/projects", () => createPage(projectsHtml))
	.setNotFound(() => createPage("<h1>404 - Not Found</h1>"))
	.start();

// Append the year to the footer
const yearElement = document.getElementById("footer-year");
if (yearElement) {
	yearElement.textContent = String(`${new Date().getFullYear()} `);
}

// Optimise image loading
const lazyImages = document.querySelectorAll<HTMLImageElement>("img[data-src]");

const imageObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const img = entry.target as HTMLImageElement;
			img.src = img.dataset.src!;
			img.classList.add("loaded");
			imageObserver.unobserve(img);
			// No return statement
		}
	});
});

lazyImages.forEach((img) => {
	imageObserver.observe(img);
});
