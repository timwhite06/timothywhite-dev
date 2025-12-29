export class SkillCard extends HTMLElement {
	connectedCallback(): void {
		const title = this.getAttribute("title") ?? "";
		const meta = this.getAttribute("meta") ?? "";

		// Capture inline SVG passed as child
		const icon = this.querySelector("svg")?.outerHTML ?? "";

		this.innerHTML = `
			<div
				class="group flex h-full flex-col items-center justify-center gap-3
				       rounded-xl border border-black/10 bg-white p-5
				       shadow-[0_6px_20px_rgba(0,0,0,0.18)]
				       transition hover:-translate-y-1
				       hover:shadow-[0_10px_30px_rgba(0,0,0,0.28)]"
			>
				<div
					class="flex h-12 w-12 items-center justify-center rounded-lg
					    border border-black/10 p-1
					       text-cyan-900
					       transition"
				>
					${icon}
				</div>

				<h3 class="text-md font-semibold text-slate-900 text-center">
					${title}
				</h3>

				${
					meta
						? `<p class="text-md text-slate-600 text-center">${meta}</p>`
						: ""
				}
			</div>
		`;
	}
}

customElements.define("skill-card", SkillCard);
