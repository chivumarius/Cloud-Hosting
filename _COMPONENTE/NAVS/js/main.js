// VAR. "COLLAPSIBLE"
const collapsibles = document.querySelectorAll(".collapsible");

// FUNC. " FOREACH()"
collapsibles.forEach(
  (item) =>
  item.addEventListener("click", 
    function () {
      this.classList.toggle("collapsible--deschis");
    }
  )``
);