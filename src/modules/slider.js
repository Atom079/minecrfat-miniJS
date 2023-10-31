function slider({
  field,
  wrapper,
  nextBtn,
  prevBtn,
  slideSelector,
  totalCounter,
  currentCounter,
}) {
  const sliderField = document.querySelector(field),
    slidesWrapper = document.querySelector(wrapper),
    next = document.querySelector(nextBtn),
    prev = document.querySelector(prevBtn),
    slides = document.querySelectorAll(slideSelector),
    total = document.querySelector(totalCounter),
    current = document.querySelector(currentCounter),
    width = window.getComputedStyle(slidesWrapper).width;

  sliderField.style.display = "flex";
  sliderField.style.width = 100 * slides.length + "%";
  slidesWrapper.style.overflow = "hidden";
  sliderField.style.transition = ".5s ease all";
  slides.forEach((slide) => {
    slide.style.width = width;
  });
  if (slides.length < 10) {
    total.textContent = `0${slides.length}`
  }else{
    total.textContent = slides.length
  }
  function deleteStr(str){
    return parseInt(str)
  }
  console.log(slides.length);
  let slideIndex = 1,
    offset = 0
  next.addEventListener('click', ()=>{
    if (offset == deleteStr(width) * (slides.length - 1)) {
        offset = 0
    }else{
        offset += deleteStr(width)
    }
    sliderField.style.transform = `translateX(-${offset}px)`
    if (slideIndex == slides.length) {
        slideIndex = 1
    }else{
        slideIndex++;
    }
    if (slideIndex < 10) {
        current.textContent = `0${slideIndex}`
    }else{
        current.textContent = slideIndex
    }
  })
  prev.addEventListener('click', ()=>{
    if (offset == 0) {
        offset = deleteStr(width) * (slides.length - 1)
    }else{
        offset -= deleteStr(width)
    }
    sliderField.style.transform = `translateX(-${offset}px)`
    if (slideIndex <= 1) {
        slideIndex = slides.length
    }else{
        slideIndex--;
    }
    if (slideIndex < 10) {
        current.textContent = `0${slideIndex}`
    }else{
        current.textContent = slideIndex
    }
  })
}
export default slider;
