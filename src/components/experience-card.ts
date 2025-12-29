export class ExperienceCard extends HTMLElement {
	connectedCallback(): void {
		const role = this.getAttribute("role") ?? "";
		const company = this.getAttribute("company") ?? "";
		const companyUrl = this.getAttribute("company-url") ?? "";
		const start = this.getAttribute("start") ?? "";
		const end = this.getAttribute("end") ?? "";
		const summary = this.getAttribute("summary") ?? "";

		const languages = (this.getAttribute("languages") ?? "")
			.split(",")
			.map((l) => l.trim())
			.filter(Boolean);

		const details = Array.from(this.querySelectorAll("li")).map(
			(li) => li.textContent ?? "",
		);

		const companyMarkup = companyUrl
			? `<a
					href="${companyUrl}"
					target="_blank"
					rel="noopener noreferrer"
					class="text-black font-semibold hover:text-cyan-900 underline-offset-2 hover:underline transition"
				>${company}</a>`
			: company;

		this.innerHTML = `
			<div
				class="h-full rounded-xl bg-white p-6
				       border border-black/10
				       shadow-md"
			>
				<!-- Header -->
				<div class="flex items-start flex-col sm:flex-row justify-between gap-4">
					<div class="order-2 sm:order-1">
						<h3 class="text-xl font-semibold text-black">
							${role}
						</h3>
						<p class="text-md text-black">
							${companyMarkup}
						</p>
					</div>

					<span
						class="whitespace-nowrap rounded-full
						       bg-cyan-50 text-cyan-900
						       border border-cyan-200
						       px-4 py-2 text-sm font-semibold order-1 sm:order-2"
					>
						${start} – ${end}
					</span>
				</div>

				<!-- Languages -->
				<div class="mt-4 flex flex-wrap gap-2">
					${languages
						.map(
							(lang) => `
							<span
								class="rounded-full
								       bg-cyan-50 text-cyan-900
								       border border-cyan-200
								       px-3 py-1 text-sm font-medium"
							>
								${lang}
							</span>
						`,
						)
						.join("")}
				</div>

				<!-- Summary -->
				<p class="mt-4 max-w-2xl text-black/80 leading-relaxed">
					${summary}
				</p>

				<!-- Accordion -->
				<details class="group mt-5">
					<summary
						class="flex cursor-pointer items-center justify-between
						       rounded-full
						       bg-cyan-50 hover:bg-cyan-100
						       border border-cyan-200
						       px-4 py-2
						       text-md font-medium text-cyan-900
						       transition"
					>
						View detailed responsibilities
						<span class="transition-transform group-open:rotate-180">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="m6 9 6 6 6-6" />
							</svg>
						</span>
					</summary>

					<ul class="mt-3 list-disc space-y-2 pl-5 text-md text-black/80">
						${details.map((d) => `<li>${d}</li>`).join("")}
					</ul>
				</details>
			</div>
		`;
	}
}

customElements.define("experience-card", ExperienceCard);
