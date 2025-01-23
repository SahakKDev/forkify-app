import * as icons from "../../img/icons.svg";
import View from "./View";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No recipes found for your query. Please try again :)";
  _message = "";

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join("");
  }

  _generateMarkupPreview({ id, image, publisher, title }) {
    return `
      <li class="preview">
        <a class="preview__link" href="#${id}">
          <figure class="preview__fig">
            <img src="${image}" alt="${title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${title}</h4>
            <p class="preview__publisher">${publisher}</p>
            
          </div>
        </a>
      </li>
    `;
  }
}

export default new ResultsView();
