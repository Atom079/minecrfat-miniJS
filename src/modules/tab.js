function tab({
  tabParentSelector,
  tabSelector,
  tabcontentSelector,
  activeClass,
}) {
  const tabParent = document.querySelector(tabParentSelector),
    tabs = document.querySelectorAll(tabSelector),
    tabcontents = document.querySelectorAll(tabcontentSelector);
  function hideTabContent() {
    tabcontents.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show");
    });
    tabs.forEach((item) => item.classList.remove(activeClass));
  }
  function showTabContent(i = 0) {
    tabcontents[i].classList.add("show");
    tabcontents[i].classList.remove("hide");
    tabs[i].classList.add(activeClass);
  }
  hideTabContent();
  showTabContent();
  tabParent.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains(tabSelector.slice(1))) {
      tabs.forEach((tab, index) => {
        if (target == tab) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });
}
export default tab;
