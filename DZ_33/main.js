const url = "https://jsonplaceholder.typicode.com";
const postForm = document.getElementById("postForm");
const postNumberInput = document.getElementById("postNumber");
const postDetails = document.getElementById("postDetails");
const loadCommentsButton = document.getElementById("loadComments");
const commentsContainer = document.getElementById("comments");

postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  loadCommentsButton.style.display = "none";
  commentsContainer.innerHTML = "";

  const postNumber = parseInt(postNumberInput.value);

  if (!isNaN(postNumber) && postNumber >= 1 && postNumber <= 100) {
    fetch(`${url}/posts/${postNumber}`)
      .then((response) => response.json())
      .then((postData) => {
        postDetails.innerHTML = `
              <h2>Данные поста №${postNumber}</h2>
              <p><strong>Заголовок:</strong> ${postData.title}</p>
              <p><strong>Текст:</strong> ${postData.body}</p>
            `;

        loadCommentsButton.style.display = "block";

        loadCommentsButton.addEventListener("click", () => {
          fetch(`${url}/posts/${postNumber}/comments`)
            .then((commentsResponse) => commentsResponse.json())
            .then((commentsData) => {
              const commentsHTML = commentsData
                .map(
                  (comment) =>
                    `<p><strong>${comment.email}:</strong> ${comment.body}</p>`
                )
                .join("");
              commentsContainer.innerHTML = `<h3>Комментарии</h3>${commentsHTML}`;
            })
            .catch((error) => {
              commentsContainer.innerHTML =
                "<p>Произошла ошибка при получении комментариев.</p>";
            });
        });
      })
      .catch((error) => {
        postDetails.innerHTML = "<p>Произошла ошибка при получении данных.</p>";
      });
  } else {
    postDetails.innerHTML =
      "<p>Некорректный номер поста. Введите число от 1 до 100.</p>";
    loadCommentsButton.style.display = "none";
    commentsContainer.innerHTML = "";
  }
});
