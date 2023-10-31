function loader(loaderSelector){
    const loader = document.querySelector(loaderSelector)
    setTimeout(()=>{
        loader.style.opacity = '0'
        setTimeout(()=>{
            loader.style.display = 'none'
        }, 500)
    }, 2000)
}
export default loader