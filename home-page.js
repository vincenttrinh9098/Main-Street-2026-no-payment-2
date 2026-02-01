document.addEventListener("DOMContentLoaded", () => {
  fetch('./content/home.json')
    .then(res => {
      if (!res.ok) throw new Error("home.json not found");
      return res.json();
    })
    .then(data => {
      // HERO
      document.getElementById('hero-title').innerHTML =
        data.hero.title.replace(' ', '<br>');
      document.getElementById('hero-subtitle').textContent =
        data.hero.subtitle;
      document.getElementById('hero-image').src =
        data.hero.image;

      // SECTIONS
      data.sections.forEach(section => {
        document.getElementById(`section-${section.id}-title`).textContent =
          section.title;
        document.getElementById(`section-${section.id}-desc`).textContent =
          section.description;
        document.getElementById(`section-${section.id}-image`).src =
          section.image;
      });

      // POPULAR
      document.getElementById('popular-title').textContent =
        data.popular.title;
      document.getElementById('popular-subtitle').textContent =
        data.popular.subtitle;

      const grid = document.getElementById('popular-grid');
      grid.innerHTML = '';


      console.log("Popular items:", data.popular.items);
      data.popular.items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'popular-item';

        
        div.innerHTML = `
          <a href="menu-page.html" class="popular-link">
            <img src="${item.img}" alt="${item.title}">
            <div class="popular-info">
              <h3>${item.title}</h3>
              <p>${item.desc}</p>
            </div>
          </a>
        `;
        grid.appendChild(div);
      });
    })
    .catch(err => {
      console.error("Homepage load error:", err);
    });
});
