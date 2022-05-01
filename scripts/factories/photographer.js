export function photographerFactory(data) {
  const { name, portrait, tagline, city, country, price, id } = data;

  const picture = `Sample Photos/Photographers ID Photos/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    article.tabIndex = 0;
    article.href = "#";
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    const h3 = document.createElement("h3");
    h3.textContent = `${city}, ${country}`;
    const my1p = document.createElement("p");
    my1p.textContent = tagline;
    const my2p = document.createElement("p");
    my2p.textContent = price + "€/jour";
    my2p.setAttribute("class", "myPrice");
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(my1p);
    article.appendChild(my2p);
    article.addEventListener("click", function () {
      window.location.href = "photographer.html?id=" + id;
    });
    article.addEventListener("keypress", function(event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {window.location.href = "photographer.html?id=" + id;
    }
    });
    return article;
  }
  return { getUserCardDOM };
}



