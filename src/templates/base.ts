import headerHtml from "./header.html?raw";
import footerHtml from "./footer.html?raw";

export const createPage = (content: string) => {
	return `
    ${getHeader()}
    <main class="min-h-screen bg-(--color-bg) text-(--color-text)">
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
