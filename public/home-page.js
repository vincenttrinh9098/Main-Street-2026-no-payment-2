document.addEventListener("DOMContentLoaded", () => {
  fetch('./content/home.json')
    .then(res => {
      if (!res.ok) throw new Error("home.json not found");
      return res.json();
    })
    .then(data => {
      // --- Helper Function: Fixes the leading slash 404 issue ---
      const fixPath = (path) => {
        if (!path) return '';
        // If path starts with '/', remove it to make it relative to the project folder
        return path.startsWith('/') ? path.substring(1) : path;
      };

      // HERO
      document.getElementById('hero-title').innerHTML =
        data.hero.title.replace(' ', '<br>');
      document.getElementById('hero-subtitle').textContent =
        data.hero.subtitle;
      // Use the helper here
      document.getElementById('hero-image').src = fixPath(data.hero.image);

      // SECTIONS
      data.sections.forEach(section => {
        document.getElementById(`section-${section.id}-title`).textContent =
          section.title;
        document.getElementById(`section-${section.id}-desc`).textContent =
          section.description;
        // Use the helper here
        document.getElementById(`section-${section.id}-image`).src = fixPath(section.image);
      });

      // POPULAR
      document.getElementById('popular-title').textContent =
        data.popular.title;
      document.getElementById('popular-subtitle').textContent =
        data.popular.subtitle;

      const grid = document.getElementById('popular-grid');
      grid.innerHTML = '';

      data.popular.items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'popular-item';

        // Use the helper for the <img> tag
        const cleanImgPath = fixPath(item.img);
        
        div.innerHTML = `
          <a href="menu-page.html" class="popular-link">
            <img src="${cleanImgPath}" alt="${item.title}">
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