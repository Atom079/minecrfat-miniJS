import axios from "axios";
function clas() {
  class MenuCard {
    constructor(src, altimg, title, descr, price, parentSelector, ...classess) {
      this.src = src;
      this.altimg = altimg;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.classess = classess;
      this.transfer = 12000;
      this.changeToUsz();
    }
    changeToUsz() {
      return (this.price = this.price * this.transfer);
    }
    render() {
      const element = document.createElement("div");
      if (this.classess.length == 0) {
        this.element = "menu_item";
        element.classList.add(this.element);
      } else {
        this.classess.forEach((className) => {
          element.classList.add(className);
        });
      }
      element.innerHTML = `
                <img src="${this.src}" alt="${this.altimg}" class="menu-img" />
                <div class="text">
                <h3 class="title">${this.title}</h3>
                <p>
                    ${this.descr}
                </p>
                <div class="price">
                    <p class="price_number">${this.price} soom</p>
                </div>
                </div>
            `;
      this.parent.append(element);
    }
  }
  axios.get("http://localhost:3000/menu").then((data) => {
    data.data.forEach(({ src, altimg, title, descr, price }) => {
      new MenuCard(src, altimg, title, descr, price, ".menu .container .menu_content .row").render();
    });
  });
}
export default clas;
