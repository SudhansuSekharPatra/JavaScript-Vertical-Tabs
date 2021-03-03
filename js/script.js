const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		const target = document.querySelector(tab.dataset.tabTarget);
		tabs.forEach((tab) => {
			tab.classList.remove("tabs__btn--active");
		});
		tab.classList.add("tabs__btn--active");
		tabContents.forEach((tabContent) => {
			tabContent.classList.remove("tabs__content--active");
		});
		target.classList.add("tabs__content--active");
	});
});
