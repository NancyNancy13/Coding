window.addEventListener("DOMContentLoaded", init);

function init(event) {
  loadData();
}
async function loadData() {
  const reponse = await fetch(
    "https://technancy.dk/Therapywp/wp-json/wp/v2/solomon?_embed"
  );
  //   console.log("reponse2", reponse);
  const serviceData = await reponse.json();

  displayService(serviceData);
}
function displayService(service) {
  console.log(service);

  service.forEach((service) => {
    //   grap the template
    const template = document.querySelector("#myTemplate").content;
    // copying the template
    const copy = template.cloneNode(true);

    copy.querySelector("img").src =
      service._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.medium.source_url;
    copy.querySelector("p").textContent = service.servicename;

    const parent = document.querySelector("main");

    parent.appendChild(copy);
  });
}
