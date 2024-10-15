// document.addEventListener("DOMContentLoaded", function () {
//   const cutImg = document.querySelector(".bmw-img.cut-img");
//   const historySection = document.getElementById("history");
//   const historyImg = document.querySelector(".history__bmw-img");

//   window.addEventListener("scroll", function () {
//     const scrollPosition = window.scrollY;
//     const historySectionTop = 910;
//     const historyImgTop = 100;
//     const historyImgHeight = 400;
//     const viewportHeight = 800;

//     // Calculate the stopping position for the cutImg
//     const stopPosition =
//       historySectionTop + historyImgTop + historyImgHeight - viewportHeight;

//     // Check if the scroll position has reached or passed the stopping position
//     if (scrollPosition >= stopPosition) {
//       cutImg.classList.add("stopped");
//       cutImg.style.top = `${stopPosition}px`;
//     } else {
//       cutImg.classList.remove("stopped");
//       cutImg.style.top = "10px"; // Adjust this value based on your design
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const cutImg = document.querySelector(".bmw-img.cut-img");
  const historySection = document.getElementById("history");
  const historyImg = document.querySelector(".history__bmw-img");

  // Function to get responsive values
  function getResponsiveValues() {
    const screenWidth = window.innerWidth;

    let historySectionTop, historyImgTop, historyImgHeight, viewportHeight;

    if (screenWidth >= 1024) {
      // Desktop
      historySectionTop = 910;
      historyImgTop = 490;
      historyImgHeight = 100;
      viewportHeight = window.innerHeight;
    } else if (screenWidth >= 768) {
      // Tablet
      historySectionTop = 700;
      historyImgTop = 50;
      historyImgHeight = 300;
      viewportHeight = 600;
    } else {
      // Mobile
      historySectionTop = 910;
      historyImgTop = 10;
      historyImgHeight = 270;
      viewportHeight = 800;
    }

    return {
      historySectionTop,
      historyImgTop,
      historyImgHeight,
      viewportHeight,
    };
  }

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    // Get values based on screen size
    const {
      historySectionTop,
      historyImgTop,
      historyImgHeight,
      viewportHeight,
    } = getResponsiveValues();

    // Calculate the stopping position for the cutImg
    const stopPosition =
      historySectionTop + historyImgTop + historyImgHeight - viewportHeight;

    // Check if the scroll position has reached or passed the stopping position
    if (scrollPosition >= stopPosition) {
      cutImg.classList.add("stopped");
      cutImg.style.top = `${stopPosition}px`;
    } else {
      cutImg.classList.remove("stopped");
      cutImg.style.top = "10px"; // Adjust this value based on your design
    }
  });

  // Also adjust on resize
  window.addEventListener("resize", function () {
    const {
      historySectionTop,
      historyImgTop,
      historyImgHeight,
      viewportHeight,
    } = getResponsiveValues();
  });
});
