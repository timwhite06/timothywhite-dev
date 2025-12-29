import headerHtml from "./header.html?raw";
import footerHtml from "./footer.html?raw";

export const createPage = (
	content: string,
	title: string = "Timothy White - Developer",
) => {
	return `
    ${getHeader()}
    <main class="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] border-8 border-[var(--color-border)]">
      ${content}
    </main>
    ${getFooter()}
  `;
};

export const getHeader = () => {
	return headerHtml;
};

export const getFooter = () => {
	return footerHtml;
};
