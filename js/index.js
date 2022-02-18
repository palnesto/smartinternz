document.addEventListener("DOMContentLoaded", function () {
	/*
	 * 	Section 6
	 */
	const splide6 = new Splide(".sec6_splide", {
		rewind: true,
		type: "loop",
		perPage: 4,
		breakpoints: {
			// 640: {
			// 	perPage: 1,
			// },
			768: {
				perPage: 2,
			},
		},
	});
	splide6.on("pagination:mounted", function (data) {
		data.list.classList.add("splide__pagination--custom", "!-bottom-8", "!hidden");

		// `items` contains all dot items
		data.items.forEach(function (item) {
			item.button.classList = " !bg-darkBlue !border !border-darkBlue !p-1 !rounded-full !mx-2";
		});
	});
	splide6.mount();

	/*
	 * 	Section 7
	 */
	// Mounting Slider in HTML DOM
	const splide7 = new Splide(".splide", { rewind: true });
	splide7.on("pagination:mounted", function (data) {
		data.list.classList.add("splide__pagination--custom", "!-bottom-8");

		// `items` contains all dot items
		data.items.forEach(function (item) {
			item.button.classList = " bg-white !border !border-darkBlue !p-1 !rounded-full !mx-2";
		});
	});
	splide7.mount();

	/*
	 * 	Section 8
	 */
	let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new Tooltip(tooltipTriggerEl);
	});
	console.log(Tooltip);

	/*
	 * 	Section 9
	 */
	// Mounting Slider in HTML DOM
	const S9subSections = ["Strategic Partners", "Outreach Partners", "Academic Partners"]; // Sub-sections of section 9

	const splide9 = new Splide(".section_9_splide", { rewind: true });
	splide9.on("pagination:mounted", function (data) {
		data.list.classList.add("splide__pagination--custom", "!-top-8", "!py-3", "!px-0", "!bottom-[unset]", "!absolute");

		// `items` contains all dot items
		data.items.forEach(function (item, index) {
			item.button.classList = ` bg-gray-100 !text-center text-black ${index === 0 && "!rounded-l-full"} ${
				index === S9subSections.length - 1 && "!rounded-r-full"
			}`;

			item.button.innerHTML = `<div class="text-xs sm:text-sm py-0.5 sm:py-2 px-2 sm:px-4  hover:bg-gray-300  ${
				index === 0 && "rounded-l-full"
			} ${index === S9subSections.length - 1 && "rounded-r-full"}">${S9subSections[index]}</div>`;
		});
	});
	splide9.mount();
});
