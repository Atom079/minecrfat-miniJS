function loader(loaderSelector) {
  const loader = document.querySelector(loaderSelector);
  document.body.style.overflow = 'hidden'
  setTimeout(() => {
    loader.style.opacity = 0;
    document.body.style.overflow = ''
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2000);
}
export default loader;
