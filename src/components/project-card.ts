export class ProjectCard extends HTMLElement {
	connectedCallback(): void {
		const title = this.getAttribute("title") ?? "";
		const type = this.getAttribute("type") ?? "";
		const summary = this.getAttribute("summary") ?? "";
		const image = this.getAttribute("image") ?? "";
		const imageAlt = this.getAttribute("image-alt") ?? title;
		const link = this.getAttribute("link");

		const stack = (this.getAttribute("stack") ?? "")
			.split(",")
			.map((s) => s.trim())
			.filter(Boolean);

		const details = Array.from(this.querySelectorAll("li")).map(
			(li) => li.textContent ?? "",
		);

		this.innerHTML = `
			<div
				class="flex h-full flex-col overflow-hidden
				       rounded-2xl bg-white
				       border border-black/10
				       shadow-[0_10px_40px_rgba(0,0,0,0.18)]"
			>
				<!-- Image -->
				${
					image
						? `
					<div class="relative h-48 w-full overflow-hidden bg-black">
						<img
							src="${image}"
							alt="${imageAlt}"
							class="h-full w-full object-cover"
						/>
					</div>
				`
						: ""
				}

				<!-- Content -->
				<div class="flex flex-col gap-5 p-6 flex-1">
					<div>
						<h3 class="text-xl font-semibold text-slate-900">
							${title}
						</h3>
						<p class="text-xs uppercase tracking-wide text-slate-500">
							${type}
						</p>
					</div>

					<p class="text-sm text-slate-700">
						${summary}
					</p>

					<div class="flex flex-wrap gap-2">
						${stack
							.map(
								(item) => `
							<span
								class="rounded-full bg-cyan-50 text-cyan-900
								       border border-cyan-200
								       px-3 py-1 text-xs font-medium"
							>
								${item}
							</span>
						`,
							)
							.join("")}
					</div>

					${
						details.length
							? `
						<ul class="list-disc pl-5 space-y-1 text-sm text-slate-700">
							${details.map((d) => `<li>${d}</li>`).join("")}
						</ul>
					`
							: ""
					}

					${
						link
							? `
						<div class="mt-auto flex justify-end">
							<a
								href="${link}"
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center justify-center
								       rounded-lg bg-cyan-400 px-5 py-2
								       text-sm font-medium text-black
								       hover:bg-cyan-300 transition"
							>
								View Project
							</a>
						</div>
					`
							: ""
					}
				</div>
			</div>
		`;
	}
}

customElements.define("project-card", ProjectCard);
