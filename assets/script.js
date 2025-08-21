// highlight current nav item
(function(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navlinks a").forEach(a=>{
    const target = a.getAttribute("href");
    if ((path === "" && target.endsWith("index.html")) || target.endsWith(path)) {
      a.classList.add("active");
    }
  });
})();

// mobile menu toggle
document.querySelectorAll(".menu-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelector(".navlinks").classList.toggle("open");
  });
});

// Card popup functionality
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const modal = document.createElement('div');
  modal.classList.add('modal');
  document.body.appendChild(modal);

  modal.addEventListener('click', () => {
    modal.classList.remove('active');
    modal.innerHTML = '';
  });

  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent immediate close if clicking inside
      const img = card.querySelector('img');
      const name = card.querySelector('h3')?.textContent || '';
      const role = card.querySelector('.role')?.textContent || '';
      const description = card.querySelector('.body p:not(.role)')?.textContent || ''; 

      const imgSrc = img ? img.src : ''; // Fallback if no img
      const altText = img ? img.alt : name;

      const content = `
        <div class="modal-content">
          ${imgSrc ? `<img class="modal-img" src="${imgSrc}" alt="${altText}">` : ''}
          <div class="modal-text">
            <h3>${name}</h3>
            ${role ? `<span class="role">${role}</span>` : ''}
            ${description ? `<p>${description}</p>` : ''}
          </div>
        </div>
      `;

      modal.innerHTML = content;
      modal.classList.add('active');
    });
  });
});
