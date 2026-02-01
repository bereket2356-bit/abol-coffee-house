<script>
const currentPage = location.pathname.split("/").pop();
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
</script>
git 