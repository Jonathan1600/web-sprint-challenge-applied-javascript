import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  let card = document.createElement("div");
  let headline = document.createElement("div");
  let author = document.createElement("div");
  let img_container = document.createElement("div");
  let authorPhoto = document.createElement("img");
  let authorName = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  img_container.classList.add("img-container");

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(img_container);
  author.appendChild(authorName);
  img_container.appendChild(authorPhoto);

  headline.textContent = article.headline;
  authorPhoto.setAttribute("src", article.authorPhoto);
  authorName.textContent = `By ${article.authorName}`;
  card.addEventListener("click", (e) => {
    console.log(article.headline);
  });

  return card;
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  let father = document.querySelector(selector);

  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((res) => {
      let info = res.data.articles;
      console.log(info);
      for (const property in info) {
        console.log(info[property]);
        info[property].forEach((element) => {
          father.appendChild(Card(element));
          console.log(element);
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export { Card, cardAppender };
