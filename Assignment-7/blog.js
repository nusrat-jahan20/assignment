let gotoBlogPage = document.querySelector("#gotoBlogPage");

// EventListener for quiz start button
gotoBlogPage.addEventListener("click", () => {
    rulesContainer.classList.add("hidden");
    alertContainer.classList.add("hidden");
    displayResult.classList.add("hidden");
    submitContainer.classList.remove("hidden");
    submitContainer.classList.add("flex");
    loadBlog();
  });

const loadBlog = async () => {
    const res = await fetch("./data/blog.json");
    const data = await res.json();
    const quizContainer = document.querySelector("#quizContainer");
    quizContainer.classList.remove("hidden");
    quizContainer.innerHTML = "";
    data.forEach((blog, idx) => {
        quizContainer.innerHTML += `<div class="text-left">
              <h1 class="mt-4 mb-3 text-md">${idx + 1 + ". " + blog.question}</h1>
              <div>
              <h1 class="text-sm">Answer: <span class="text-green-600">${
                blog.answer
              }</span></h1>
              </div>
            </div>`;
      });
    };