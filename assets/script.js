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
