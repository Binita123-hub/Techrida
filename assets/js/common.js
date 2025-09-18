document.addEventListener("DOMContentLoaded", () => {
        const buttons = Array.from(document.querySelectorAll(".tab-button"));
        const contents = Array.from(document.querySelectorAll(".tab-content"));
        const halfCircle = document.querySelector(".half-circle");
        const header = document.getElementById("mainHeader");
        const rightContent = document.getElementById("rightContent");

        const positions = [
            { left: "", top: ""},
            { left: "0%", top: "2%"},
            { left: "28%", top: "9%"},
            { right: "15%", top: "24%"},
            { right: "4%", top: "50%", transform: "translateY(-50%)"},
            { right: "11%", top: "63%"},
            { left: "30%", top: "76%"},
            { left: "-4%", bottom: "4%"}
        ];

        let currentOrder = [...buttons];
        
        function applyPositions() {
            currentOrder.forEach((btn, i) => {
                const pos = positions[i];
                btn.style.left = pos.left || "auto";
                btn.style.right = pos.right || "auto";
                btn.style.top = pos.top || "auto";
                btn.style.bottom = pos.bottom || "auto";
                btn.style.transform = pos.transform || "none";
                btn.style.zIndex = pos.zIndex || "1";
            });
        }

        function setActiveTab(index) {
            // Remove active classes
            currentOrder.forEach(btn => btn.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            // Add active class to new one
            currentOrder[0].classList.add("active");
            const tabId = currentOrder[0].dataset.tab;
            document.getElementById(tabId).classList.add("active");
            
            // Handle header class based on active tab
            if (tabId === "tab1") {
                header.classList.add("header-logo");
            } else {
                header.classList.remove("header-logo");
            }
            
            // Handle first tab visibility and right content class
            if (tabId !== "tab1") {
                document.getElementById("tab1").style.display = "none";
                rightContent.classList.add("right-wrap");
            } else {
                document.getElementById("tab1").style.display = "flex";
                rightContent.classList.remove("right-wrap");
            }
        }

        function rotateToIndex(index) {
            // Rotate array so clicked index becomes first (on top)
            while (index !== 0) {
                currentOrder.push(currentOrder.shift());
                index--;
            }

            // Re-append in new order
            currentOrder.forEach(btn => halfCircle.appendChild(btn));

            applyPositions();
            setActiveTab(0);
        }

        // Click event
        buttons.forEach((btn, idx) => {
            btn.addEventListener("click", () => {
                const newIndex = currentOrder.indexOf(btn);
                rotateToIndex(newIndex);
            });
        });

        // Auto rotate every 5 seconds
        setInterval(() => {
            rotateToIndex(1); // Move second item to top
        }, 5000);

        // Initial apply
        applyPositions();
        setActiveTab(0);
    });


    $("#our-teams .slick-slider").slick({
    slidesToShow: 3,
    infinite:false,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
});