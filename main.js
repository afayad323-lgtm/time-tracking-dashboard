fetch("/time-tracking-dashboard-main/data.json")
  .then((res) => res.json())
  .then((data) => {
    const cardsContainer = document.querySelector(".cards");
    const buttons = document.querySelectorAll("[data-timeframe]");

    function render(timeframe) {
      cardsContainer.innerHTML = "";
      data.forEach((item) => {
        const hours = item.timeframes[timeframe].current;
        const prev = item.timeframes[timeframe].previous;
        const period =
          timeframe === "daily"
            ? "Yesterday"
            : timeframe === "weekly"
            ? "Last Week"
            : "Last Month";

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="card-header">
            <h3>${item.title}</h3>
            <img src="images/icon-ellipsis.svg" alt="menu">
          </div>
          <div class="card-body">
            <p class="hours">${hours}hrs</p>
            <p class="previous">${period} - ${prev}hrs</p>
          </div>
            `;
        cardsContainer.appendChild(card);
      });
    }
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const tf = btn.getAttribute("data-timeframe");
        render(tf);
      });
    });

    render("weekly");
  });
