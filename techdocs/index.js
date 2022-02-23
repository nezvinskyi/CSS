import importedData from './data.js';

const refs = {
  navLinks: document.querySelector('#links-list'),
  mainDoc: document.querySelector('#main-doc'),
};

function markupLink(item) {
  const id = convertStrToSnakeCase(item.headline);
  return `<li><a class="nav-link" href="#${id}">${item.headline}</a></li>`;
}

function markupArticle(item) {
  const id = convertStrToSnakeCase(item.headline);

  return `
	      <section class="main-section" id="${id}">
					<header>
						<h2>${item.headline}</h2>
					</header>
					<article>
						${item.article}
					</article>
      </section>
	`;
}

(function (data) {
  data.forEach(item => {
    refs.navLinks.insertAdjacentHTML('beforeend', markupLink(item));
    refs.mainDoc.insertAdjacentHTML('beforeend', markupArticle(item));
  });
})(importedData);

function convertStrToSnakeCase(string) {
  return string.toLowerCase().split(' ').join('_');
}
