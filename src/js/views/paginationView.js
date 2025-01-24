import * as icons from "../../img/icons.svg";
import View from "./View";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");

      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      if (btn.classList.contains("pagination__btn--prev")) {
        handler(goToPage);
        return;
      }

      if (btn.classList.contains("pagination__btn--next")) {
        handler(goToPage);
        return;
      }
    });
  }

  _generateMarkup() {
    const { results, resultsPerPage, page: currentPage } = this._data;

    const numPages = Math.ceil(results.length / resultsPerPage);

    // Page 1, and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return this._generateMarkupBtn("right", currentPage);
    }

    // Page 1, and there are NO other pages
    if (currentPage === 1 && numPages === 1) {
      return "";
    }

    // Last page
    if (currentPage === numPages && numPages > 1) {
      return this._generateMarkupBtn("left", currentPage);
    }

    // Other page
    return this._generateMarkupBtn("both", currentPage);
  }

  _generateMarkupBtn(dir /* left | right | both */, currentPage) {
    const leftBtn = `
      <button data-goto=${
        currentPage - 1
      } class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
      </button>`;

    const rightBtn = `
      <button data-goto=${
        currentPage + 1
      } class="btn--inline pagination__btn--next">
        <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
    `;

    if (dir === "left") return leftBtn;
    if (dir === "right") return rightBtn;

    return leftBtn.concat(rightBtn);
  }
}

export default new PaginationView();
