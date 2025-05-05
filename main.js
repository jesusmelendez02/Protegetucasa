document.addEventListener("DOMContentLoaded", function () {
  const ownerBtn = document.getElementById("owner-btn");
  const tenantBtn = document.getElementById("tenant-btn");
  const buttonsDiv = document.getElementById("buttons");
  const form = document.getElementById("owner-form");
  const message = document.getElementById("not-allowed");

  ownerBtn.addEventListener("click", function () {
    buttonsDiv.style.display = "none";
    form.style.display = "flex";
  });

  tenantBtn.addEventListener("click", function () {
    buttonsDiv.style.display = "none";
    message.style.display = "block";
  });
});
