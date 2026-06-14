const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const filterBtns = document.querySelectorAll(".filter-btn");

let currentIndex = 0;

function showImage() {
    lightboxImg.src = galleryImages[currentIndex].src;
}

galleryImages.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

nextBtn.addEventListener("click", () => {

    currentIndex =
        (currentIndex + 1) % galleryImages.length;

    showImage();

});

prevBtn.addEventListener("click", () => {

    currentIndex =
        (currentIndex - 1 + galleryImages.length) %
        galleryImages.length;

    showImage();

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});

filterBtns.forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelector(".filter-btn.active")
            .classList.remove("active");

        button.classList.add("active");

        const filter = button.dataset.filter;

        galleryImages.forEach(img => {

            if (
                filter === "all" ||
                img.classList.contains(filter)
            ) {

                img.style.display = "block";

            } else {

                img.style.display = "none";

            }

        });

    });

});