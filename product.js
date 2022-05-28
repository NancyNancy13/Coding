const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
let url =
  "https://technancy.dk/Therapywp/wp-json/wp/v2/solomon?categories=6&_embed";

fetch(url)
  .then(function (res) {
    console.log(res);
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    handleService(data);
  });

function handleService(service) {
  //   document.querySelector(".productheading").textContent = service.servicename;
  //   document.querySelector(".productprice").textContent = service.fees;
  //   document.querySelector(".product-image_small").src =
  //     bag._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
  //   document.querySelector(".product-image_small").alt =
  //     bag._embedded["wp:featuredmedia"][0].alt_text;
  //   document.querySelector(".centeredrightproduct").textContent =
  //     service.servicedescription1;
  //   document.querySelector(".list").textContent = service.list;
}
