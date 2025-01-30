function e(e){return e&&e.__esModule?e.default:e}var t,r,n,i=globalThis,a={},s={},o=i.parcelRequire94c2;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in s){var t=s[e];delete s[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){s[e]=t},i.parcelRequire94c2=o),(0,o.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),o("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.bed9e7c3.js","hfd23","icons.c5b0f01c.svg"]'));const l="https://forkify-api.jonas.io/api/v2/recipes",c="bookmarks",d="56458ad6-931c-4a06-b0d0-ac0e3b278a58",u=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 5 second"))},5e3)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},p={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},h=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.image_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},m=async function(e){try{let t=await u(`${l}/${e}?key=${d}`);p.recipe=h(t),p.bookmarks.some(({id:e})=>e===p.recipe.id)&&(p.recipe.bookmarked=!0)}catch(e){throw e}},g=async function(e){try{p.search.query=e;let t=await u(`${l}?search=${e}&key=${d}`);p.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))}catch(e){throw e}},_=function(e=p.search.page){p.search.page=e;let t=(e-1)*p.search.resultsPerPage,r=e*p.search.resultsPerPage;return p.search.results.slice(t,r)},f=function(e){p.recipe.ingredients.forEach(t=>{t.quantity&&(t.quantity=t.quantity*e/p.recipe.servings)}),p.recipe.servings=e},v=function(){localStorage.setItem(c,JSON.stringify(p.bookmarks))},b=function(e){p.bookmarks.push(e),e.id===p.recipe.id&&(p.recipe.bookmarked=!0),v()},y=function(e){p.bookmarks=p.bookmarks.filter(({id:t})=>t!==e),p.recipe.id===e&&(p.recipe.bookmarked=!1),v()};!function(){let e=localStorage.getItem(c);e&&(p.bookmarks=JSON.parse(e))}();const k=async function(e){try{let t=Object.entries(e).filter(([e,t])=>e.startsWith("ingredient")&&!!t).map(([,e])=>{let t=e.split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the corrent format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await u(`${l}/?key=${d}`,r);p.recipe=h(n),b(p.recipe)}catch(e){throw e}};var w={};w=new URL("icons.c5b0f01c.svg",import.meta.url).toString(),(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var a=r.split("/");this.numerator=a[0],this.denominator=a[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(t=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},r=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(t(this.denominator)){var e=r(this.denominator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(t(this.numerator)){var e=r(this.numerator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},n=Fraction;class E{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${w}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`        
      <div class="error">
        <div>
          <svg>
            <use href="${w}.svg#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`        
     <div class="message">
          <div>
            <svg>
              <use href="${w}#icon-smile"></use>
            </svg>
          </div>
          <p>${e}</p>
        </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}class $ extends E{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="Start by searching for a recipe or an ingredient. Have fun!";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--tiny");r&&!(r.dataset.updateTo<1)&&e(+r.dataset.updateTo)})}addhandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
        <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${w}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${w}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button data-update-to='${this._data.servings-1}' class="btn--tiny btn--update-servings">
                <svg>
                  <use href="${w}#icon-minus-circle"></use>
                </svg>
              </button>
              <button data-update-to='${this._data.servings+1}' class="btn--tiny btn--update-servings">
                <svg>
                  <use href="${w}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
              <svg>
                <use href="${w}#icon-user"></use>
              </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${w}#icon-bookmark${!0===this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${w}#icon-arrow-right"></use>
            </svg>
          </a>
        </div> 
    `}_generateMarkupIngredient(e){return`
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${w}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?new n(e.quantity).toString():""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>
  `}}var S=new $;class F{_parentElement=document.querySelector(".search");getQuery(){return this._parentElement.querySelector(".search__field").value}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",t=>{t.preventDefault(),e(),this._clearInput()})}}var M=new F,q=new class extends E{_parentElement="";_generateMarkup(){let t=window.location.hash.slice(1);return`
      <li class="preview">
        <a class="preview__link ${this._data.id===t?"preview__link--active":""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key?"":"hidden"}">
              <svg>
                <use href="${e(w)}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `}};class x extends E{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query. Please try again :)";_message="";_generateMarkup(){return this._data.map(e=>q.render(e,!1)).join("")}}var H=new x;class L extends E{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;if(r.classList.contains("pagination__btn--prev")||r.classList.contains("pagination__btn--next")){e(n);return}})}_generateMarkup(){let{results:e,resultsPerPage:t,page:r}=this._data,n=Math.ceil(e.length/t);return 1===r&&n>1?this._generateMarkupBtn("right",r):1===r&&1===n?"":r===n&&n>1?this._generateMarkupBtn("left",r):this._generateMarkupBtn("both",r)}_generateMarkupBtn(e,t){let r=`
      <button data-goto=${t-1} class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${w}#icon-arrow-left"></use>
        </svg>
        <span>Page ${t-1}</span>
      </button>`,n=`
      <button data-goto=${t+1} class="btn--inline pagination__btn--next">
        <span>Page ${t+1}</span>
        <svg class="search__icon">
          <use href="${w}#icon-arrow-right"></use>
        </svg>
      </button>
    `;return"left"===e?r:"right"===e?n:r.concat(n)}}var T=new L;class U extends E{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>q.render(e,!1)).join("")}}var P=new U;class A extends E{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}closeWindow(){this._overlay.classList.add("hidden"),this._window.classList.add("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",()=>{this.render(),this.toggleWindow()})}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries(new FormData(this)))})}render(){this._clear();let e=this._generateMarkup();this._parentElement.insertAdjacentHTML("afterbegin",e)}_generateMarkup(){return`
      <div class="upload__column">
        <h3 class="upload__heading">Recipe data</h3>
        <label>Title</label>
        <input value="TEST" required name="title" type="text" />
        <label>URL</label>
        <input value="25TEST25" required name="sourceUrl" type="text" />
        <label>Image URL</label>
        <input value="25TEST25" required name="image" type="text" />
        <label>Publisher</label>
        <input value="25TEST25" required name="publisher" type="text" />
        <label>Prep time</label>
        <input value="23" required name="cookingTime" type="number" />
        <label>Servings</label>
        <input value="23" required name="servings" type="number" />
      </div>

      <div class="upload__column">
        <h3 class="upload__heading">Ingredients</h3>
        <label>Ingredient 1</label>
        <input
          value="0.5,kg,Rice"
          type="text"
          required
          name="ingredient-1"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 2</label>
        <input
          value="1,,Avocado"
          type="text"
          name="ingredient-2"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 3</label>
        <input
          value=",,salt"
          type="text"
          name="ingredient-3"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 4</label>
        <input
          type="text"
          name="ingredient-4"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 5</label>
        <input
          type="text"
          name="ingredient-5"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 6</label>
        <input
          type="text"
          name="ingredient-6"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
      </div>

      <button class="btn upload__btn">
        <svg>
          <use href="${e(w)}#icon-upload-cloud"></use>
        </svg>
        <span>Upload</span>
      </button>
    `}}var R=new A;const I=async function(){let e=window.location.hash.slice(1);if(!e)return;S.renderSpinner(),H.update(_()),P.update(p.bookmarks);try{await m(e)}catch(e){S.renderError();return}let{recipe:t}=p;S.render(t)},j=function(e=1){H.render(_(e)),T.render(p.search)},N=async function(){let e=M.getQuery();if(e)try{H.renderSpinner(),await g(e),j()}catch(e){H.renderError();return}},O=function(){P.render(p.bookmarks)},W=async function(e){try{R.renderSpinner(),await k(e);let{recipe:t}=p;S.render(t),R.renderMessage(),O(),window.history.pushState(null,"",`#${t.id}`),setTimeout(()=>{R.closeWindow()},1800)}catch(e){R.renderError(e.message)}};P.addHandlerRender(O),S.addHandlerRender(I),S.addHandlerUpdateServings(function(e){f(e),S.update(p.recipe)}),S.addhandlerAddBookmark(function(){let e=p.recipe;!0===e.bookmarked?y(e.id):b(e),S.update(e),P.render(p.bookmarks)}),M.addHandlerSearch(N),T.addHandlerClick(j),R.addHandlerUpload(W);
//# sourceMappingURL=index.bed9e7c3.js.map
