const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  let header = document.createElement("div");
  let dateE = document.createElement("span");
  let titleE = document.createElement("h1");
  let tempE = document.createElement("span");

  header.classList.add("header");
  dateE.classList.add("date");
  tempE.classList.add("temp");

  header.appendChild(dateE);
  header.appendChild(titleE);
  header.appendChild(tempE);

  titleE.textContent = title;
  dateE.textContent = date;
  tempE.textContent = temp;

  return header;
};

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  let temp = document.querySelector(selector);
  temp.appendChild(Header("Lambda Times", "January 6, 2021", "26°"));
};

export { Header, headerAppender };
