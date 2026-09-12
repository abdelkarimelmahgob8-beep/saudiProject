// /* =================================================================
//    AMBAR — Landing Page Script
//    ================================================================= */

// /* -----------------------------------------------------------------
//    PRODUCTS
//    EDIT HERE: add, remove, or change products by editing this array.
//    Each product needs: name, image, description, price.
//    Leave price as an empty string "" to hide the price on that card.
//    ----------------------------------------------------------------- */
// const products = [
//   {
//     name: "Amber Pour-Over Set",
//     image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&q=80",
//     description: "Hand-glazed stoneware carafe and cup, made for slow mornings.",
//     price: "SAR 245"
//   },
//   {
//     name: "Woven Table Runner",
//     image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&q=80",
//     description: "Undyed cotton, woven on traditional looms in small batches.",
//     price: "SAR 180"
//   },
//   {
//     name: "Brass Incense Holder",
//     image: "https://images.unsplash.com/photo-1602607213658-4b7c1a3c9f2b?w=800&q=80",
//     description: "Solid brass, hand-finished with a warm, matte patina.",
//     price: "SAR 210"
//   },
//   {
//     name: "Linen Cushion Cover",
//     image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
//     description: "Heavyweight stonewashed linen in a soft sand tone.",
//     price: "SAR 130"
//   },
//   {
//     name: "Ceramic Serving Bowl",
//     image: "https://images.unsplash.com/photo-1578749556568-bc2c481be3fd?w=800&q=80",
//     description: "Wide, shallow, and finished in a warm reactive glaze.",
//     price: "SAR 195"
//   },
//   {
//     name: "Olive Wood Tray",
//     image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&q=80",
//     description: "Each tray carved from a single piece, grain fully visible.",
//     price: "SAR 260"
//   },
//   {
//     name: "Woven Storage Basket",
//     image: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde?w=800&q=80",
//     description: "Palm-leaf basket, hand-woven with a reinforced base.",
//     price: "SAR 165"
//   },
//   {
//     name: "Candle in Stone Vessel",
//     image: "https://images.unsplash.com/photo-1602874801007-bd36c353a3e2?w=800&q=80",
//     description: "Soy wax poured into a reusable hand-carved stone vessel.",
//     price: "SAR 150"
//   }
// ];

// /* -----------------------------------------------------------------
//    RENDER PRODUCT CARDS
//    ----------------------------------------------------------------- */
// function renderProducts() {
//   const grid = document.getElementById("product-grid");
//   if (!grid) return;

//   const cardsHtml = products.map((product) => {
//     const priceHtml = product.price
//       ? `<p class="product-card__price">${escapeHtml(product.price)}</p>`
//       : "";

//     return `
//       <article class="product-card reveal">
//         <div class="product-card__media">
//           <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy">
//         </div>
//         <div class="product-card__body">
//           <h3 class="product-card__name">${escapeHtml(product.name)}</h3>
//           <p class="product-card__desc">${escapeHtml(product.description)}</p>
//           ${priceHtml}
//         </div>
//       </article>
//     `;
//   }).join("");

//   grid.innerHTML = cardsHtml;

//   // Newly injected cards need to be observed for the scroll-reveal effect
//   observeReveals();
// }

// // Basic HTML-escaping so product data can never break the markup
// function escapeHtml(str) {
//   const div = document.createElement("div");
//   div.textContent = String(str);
//   return div.innerHTML;
// }

// /* -----------------------------------------------------------------
//    SCROLL REVEAL
//    Applies a single, restrained fade/rise the first time each
//    .reveal element enters the viewport.
//    ----------------------------------------------------------------- */
// let revealObserver;

// function observeReveals() {
//   if (!("IntersectionObserver" in window)) {
//     document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
//     return;
//   }

//   if (!revealObserver) {
//     revealObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("is-visible");
//             revealObserver.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
//     );
//   }

//   document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
//     revealObserver.observe(el);
//   });
// }

// /* -----------------------------------------------------------------
//    FOOTER YEAR
//    ----------------------------------------------------------------- */
// function setFooterYear() {
//   const yearEl = document.getElementById("year");
//   if (yearEl) {
//     yearEl.textContent = new Date().getFullYear();
//   }
// }

// /* -----------------------------------------------------------------
//    INIT
//    ----------------------------------------------------------------- */
// document.addEventListener("DOMContentLoaded", () => {
//   renderProducts();
//   observeReveals();
//   setFooterYear();
// });
// document.addEventListener("DOMContentLoaded", () => {

//   const revealElements = document.querySelectorAll(".reveal");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("is-visible");
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     {
//       threshold: 0.15
//     }
//   );

//   revealElements.forEach((element) => {
//     observer.observe(element);
//   });

// });