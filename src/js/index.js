import "../scss/main.scss";
console.log("Hi! I,m Dawid. Nice to meet you!");
fetch(
  "https://api.github.com/users/dawidmajewski1991/repos?sort=created&direction=asc"
)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);

    const container = document.querySelector(".projects__grid--js");
    for (let repo of res) {
      const { description, homepage, html_url, name } = repo;

      const template = `<article class="repository">
    <div class="repository__top"></div>
    <img class="repository__icon" alt="GitHub Logo."></img>
    <div class="repository__grid">
    <div class="repository__labels">
      <p class="repository__text repository__text--right">project:</p>
      <p class="repository__text repository__text--right">description:</p>
      <p class="repository__text repository__text--right">demo:</p>
      <p class="repository__text repository__text--right">github:</p>
    </div>
    <div class="repository__titles">
      <p class="repository__text repository__text--left repository__text--white">${name}</p>
      <p class="repository__text repository__text--left">${description}</p>
      <p><a class="repository__text repository__text--left repository__text--blue" href="${homepage}">see_here</a></p>
      <p><a class="repository__text repository__text--left repository__text--blue" href=${html_url}>see_here</a></p>
    </div>
  </div>
</article>`;
      if (description) {
        container.innerHTML += template;
      }
    }
  })
  .catch((e) => console.log(e));
