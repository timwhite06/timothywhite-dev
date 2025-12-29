type TRouterHandler = () => HTMLElement | string;
interface Route {
	path: string;
	handler: TRouterHandler;
}

class Router {
	private routes: Route[] = []; // Holds all the routes on the site
	private rootElement: HTMLElement;
	private notFoundHandler: TRouterHandler = () =>
		"<h1>404 - Page Not Found</h1>";

	constructor(rootElementId: string) {
		const root = document.getElementById(rootElementId);
		if (!root) throw new Error(`Element with id "${rootElementId}" not found`);

		this.rootElement = root;
		this.init();
	}

	private init() {
		// Listen to the active history entry (the back/forward browser buttons)
		window.addEventListener("popstate", () => this.handleRoute());

		// Intercept link clinks
		document.addEventListener("click", (e) => {
			const target = e.target as HTMLElement;
			const link = target.closest("a[data-link") as HTMLAnchorElement;

			// Stopping the natural behaviour so that we can manually naviagte
			if (link) {
				e.preventDefault();
				this.navigate(link.pathname);
			}
		});

		this.handleRoute();
	}

	start() {
		this.handleRoute();
		return this;
	}

	// Mehtod for registering the available routes on a website (e.g. /about)
	addRoute(path: string, handler: TRouterHandler): Router {
		this.routes.push({ path, handler });
		return this;
	}

	// Method for seeing the routes
	getRoutes() {
		return this.routes;
	}

	setNotFound(handler: TRouterHandler) {
		this.notFoundHandler = handler;
		return this;
	}

	navigate(path: string) {
		// pushState paramters = state | unused | url
		window.history.pushState(null, "", path);
		this.handleRoute();
	}

	private handleRoute() {
		const path = window.location.pathname;

		// Find the current route in the routes array
		const route = this.routes.find((r) => r.path === path);

		// Apply the content
		const content = route ? route.handler() : this.notFoundHandler();
		if (typeof content === "string") {
			this.rootElement.innerHTML = content;
		} else {
			this.rootElement.innerHTML = "";
			this.rootElement.appendChild(content);
		}
	}
}

export default Router;
