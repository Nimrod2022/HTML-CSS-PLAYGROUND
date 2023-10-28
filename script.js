function handleNav() {
  console.log("button clicked");
  const nav = document.querySelector("#nav");
  // Query selector - select class . , #ID
  nav.classList.toggle("hidden");
  nav.classList.add("absolute");
}
