console.log("exo2");

let divSelector = document.querySelector("div");
let buttonSelector = document.querySelectorAll("button");
let tous = document.querySelector(".tous");
let html = document.querySelector(".html");
let css = document.querySelector(".css");
let js = document.querySelector(".js");

function createDom(element_name, text, parent) {
  const markup = document.createElement(element_name);
  markup.textContent = text;
  parent.appendChild(markup);
  return markup;
}

buttonSelector.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.className == "html") {
      let articles = document.querySelectorAll("p.articleHtml");
      if (articles.length !== 0) {
        articles.forEach((element) => {
          element.remove();
        });
      } else {
        let pHtml = createDom("p", "Texte dans HTML", divSelector);
        pHtml.setAttribute("class", "articleHtml");
      }
    }
    if (button.className == "css") {
      let articles = document.querySelectorAll("p.articleCss");
      if (articles.length !== 0) {
        articles.forEach((element) => {
          element.remove();
        });
      } else {
        let pCss = createDom("p", "Texte dans CSS", divSelector);
        pCss.setAttribute("class", "articleCss");
      }
      if (button.className == "js") {
        let articles = document.querySelectorAll("p.articleJs");
        if (articles.length !== 0) {
          articles.forEach((element) => {
            element.remove();
          });
        } else {
          let pJs = createDom("p", "Texte dans JS", divSelector);
          pJs.setAttribute("class", "articleJs");
        }
        if (button.className == "tous") {
          let pHtml = createDom("p", "Texte dans HTML", divSelector);
          pHtml.setAttribute("class", "articleHtml");

          let pCss = createDom("p", "Texte dans CSS", divSelector);
          pCss.setAttribute("class", "articleCss");

          let pJs = createDom("p", "Texte dans JS", divSelector);
          pJs.setAttribute("class", "articleJs");
        }
      }
    } 
  });
});
