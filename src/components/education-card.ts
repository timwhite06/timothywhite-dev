export class EducationCard extends HTMLElement {
	connectedCallback(): void {
		const type = this.getAttribute("type") ?? "";
		const institution = this.getAttribute("institution") ?? "";
		const dates = this.getAttribute("dates") ?? "";
		const summary = this.getAttribute("summary") ?? "";

		// Capture list items before render
		const items = Array.from(this.querySelectorAll("li")).map(
			(li) => li.textContent ?? "",
		);

		this.innerHTML = `
			<div
				class="rounded-xl bg-white border border-black/10
				       shadow-[0_8px_30px_rgba(0,0,0,0.15)]
				       p-8 flex flex-col gap-6"
			>
				<!-- Header -->
				<div class="flex items-start flex-col sm:flex-row sm:justify-between gap-4">
					<div class="order-2 sm:order-1">
						<p class="text-md font-semibold uppercase tracking-wide text-slate-500">
							${type}
						</p>
						<h3 class="text-lg font-semibold text-slate-900">
							${institution}
						</h3>
					</div>

					<span
						class="whitespace-nowrap rounded-full
						       bg-cyan-50 text-cyan-900
						       border border-cyan-200
						       px-4 py-2 text-md font-semibold order-1 sm:order-2"
					>
						${dates}
					</span>
				</div>

				<!-- Summary -->
				<p class="text-md text-black/80 max-w-3xl">
					${summary}
				</p>

				<!-- Details -->
				${
					items.length
						? `
					<ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 gap-x-12 text-md text-black/80">
						${items.map((item) => `<li>• ${item}</li>`).join("")}
					</ul>
				`
						: ""
				}
			</div>
		`;
	}
}

customElements.define("education-card", EducationCard);
