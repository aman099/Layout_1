const liSettingParent = document.querySelector("li.setting-li");
const liPeopleParent = document.querySelector("li.people-li");
const liThreeDotsParent = document.querySelector("li.three-dots-li");
const liSettingChild = document.querySelector("li.setting-li ul.setting");
const liPeopleChild = document.querySelector("li.people-li ul.people");
const liThreeDotsChild = document.querySelector(
	"li.three-dots-li ul.three-dots"
);

liSettingParent.addEventListener("mouseover", () => {
	liSettingChild.classList.add("active");
});
liSettingParent.addEventListener("mouseleave", () => {
	liSettingChild.classList.remove("active");
});

liPeopleParent.addEventListener("mouseover", () => {
	liPeopleChild.classList.add("active");
});
liPeopleParent.addEventListener("mouseleave", () => {
	liPeopleChild.classList.remove("active");
});

liThreeDotsParent.addEventListener(
	"click",
	(e) => {
		liThreeDotsChild.classList.toggle("active");
	},
	{ passive: true }
);
liThreeDotsChild.addEventListener("click", (e) => {
	e.stopPropagation();
});
