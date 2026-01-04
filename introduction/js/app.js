
// js/app.js
(function () {
  const { createApp } = Vue;
  const { createRouter, createWebHashHistory } = VueRouter;

  /* -------------------------
     Home Component (no images)
  -------------------------- */
  const Home = {
    template: `
      <div>
        <h1 class="text-center">Personal Profile Web Page - Breneth Ananayo</h1>

        <img class="d-block mx-auto"
             src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/501796353_2448292142203340_8204438585368915182_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFMRJfjvvOtAXLU_SfzJBKeXSWGNInxde9dJYY0ifF17xlJn3yx3ZW-a7ajntaGcFo3ytwMl58BlyTtUkNhhstz&_nc_ohc=jtwZz6LrxwUQ7kNvwHN6iPt&_nc_oc=AdlioMyFII2PEIq8X3pjzowiHVXxsjEu99qDP50HYqeLoCUsATxYhoEBBF0p-dUhUjU&_nc_zt=23&_nc_ht=scontent.fmnl8-2.fna&_nc_gid=rGA4OnUCj4FdhBMwG5-2bg&oh=00_AflLbDQEsbGvaGsC-SCrtsw1z1sGz8pnKDBcM2DSLo-HvQ&d mt-3">
          <div class="row g-3">
            <div class="col-md bg-primary text-white">
              <strong>About Me</strong><br />
              • Hello Everyone!<br />
              • I love CATS<br />
            </div>
            <div class="col-md bg-dark text-white">
              <strong>Education / Achievements</strong><br />
              • Currently taking BSCS-SF in ASIA PACIFIC COLLEGE<br />
            </div>
          </div>
        </div>

        <br />

        <div class="container-fluid">
          <div class="row g-3">
            <div class="col-md bg-primary text-white">
              <strong>Course</strong><br />
              • BSCS-SF<br />
            </div>
            <div class="col-md bg-dark text-white">
              <strong>Experience</strong><br />
              • Coding Python<br />
            </div>
            <div class="col-md bg-primary text-white">
              <strong>Hobbies</strong><br />
              • Cooking, Eating, Sleeping<br />
            </div>
          </div>
        </div>

        <br />

        <div class="container-fluid">
          <div class="row g-3">
            <div class="col-md bg-dark text-white">
              <strong>Goals In Life / Dream</strong><br />
              • Finish this course<br />
              • To have an inspired cottage house and a garden in the province<br />
              • To own a cat like Beluga or A Fat Cat<br />
            </div>
            <div class="col-md bg-primary text-white">
              <strong>Gallery</strong><br />
              <p class="mb-0">
                The images now live on the <router-link to="/gallery">Gallery page</router-link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    `
  };

  /* -------------------------
     Gallery Component + Lightbox
  -------------------------- */
  const Gallery = {
    data() {
      return {
        images: [
          { src: "https://www.catster.com/wp-content/uploads/2023/11/Beluga-Cat.webp", alt: "Beluga Cat" },
          { src: "./assets/1728552355829.jpg", alt: "Sunset pic by me" },
        ],
        showLightbox: false,
        currentIndex: 0
      };
    },
    mounted() {
      window.addEventListener("keydown", this.onKey);
    },
    beforeUnmount() {
      window.removeEventListener("keydown", this.onKey);
    },
    methods: {
      openLightbox(idx) {
        this.currentIndex = idx;
        this.showLightbox = true;
        document.body.style.overflow = "hidden";
      },
      closeLightbox() {
        this.showLightbox = false;
        document.body.style.overflow = "";
      },
      next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
      onKey(e) {
        if (!this.showLightbox) return;
        if (e.key === "Escape") this.closeLightbox();
        if (e.key === "ArrowRight") this.next();
        if (e.key === "ArrowLeft") this.prev();
      },
      backdropClick(e) {
        if (e.target.classList.contains("lightbox-backdrop")) {
          this.closeLightbox();
        }
      }
    },
    template: `
      <div>
        <h1 class="text-center">Gallery</h1>

        <!-- Thumbnails -->
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col" v-for="(img, idx) in images" :key="idx">
            <div class="card shadow-sm h-100">
              <img :src="img.src"   <div class="card-body">
                <p class="card-text mb-0">{{ img.alt }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Lightbox -->
        <div v-if="showLightbox" class="lightbox-backdrop" @click="backdropClick">
          <div class="lightbox-content">
            <button class="btn btn-light lightbox-close" @click="closeLightbox" aria-label="Close">✕</button>
            <button class="btn btn-light lightbox-prev" @click="prev" aria-label="Previous">‹</button>
            <button class="btn btn-light lightbox-next" @click="next" aria-label="Next">›</button>

            <figure class="m-0 text-center">
              images[currentIndex].src
              <figcaption class="text-white-50 mt-2">{{ images[currentIndex].alt }}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    `
  };

  /* -------------------------
     Router
  -------------------------- */
  const routes = [
    { path: "/", component: Home },
    { path: "/gallery", component: Gallery }
  ];
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  });

  /* -------------------------
     Create app
  -------------------------- */
  const app = createApp({});
  app.use(router);
  app.mount("#app");
})();
