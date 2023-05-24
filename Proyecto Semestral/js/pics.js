for (let i = 0; i < 10; i++) {
  $.getJSON(
    "https://cataas.com/cat?json=true",
    function (data) {
      let html;
        html = `
          <div class="carousel-item" data-bs-interval="2000">
          <img src="https://cataas.com/${data.url}" class="d-block w-100">
        </div>`;
        $("#carousel").append(html);
    }
  );  
}
