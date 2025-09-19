$(document).ready(function() {
    $(".hamburger").click(function(e) {
        e.stopPropagation(); // Prevent this click from triggering document click
        $(".hamburger").toggleClass('open');
        $(".menu").toggleClass('is-hidden');
    
    });
    
    // Close sidebar when clicking outside
    $(document).click(function(e) {
        if (!$(e.target).closest('.menu').length && 
            !$(e.target).is('.hamburger') && 
            !$('.menu').hasClass('is-hidden')) {
            $(".menu").addClass('is-hidden');
            
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
        const firstBanner = document.querySelector('.first-banner');
        const secondBanner = document.querySelector('.second-banner');
        const header = document.querySelector('header');
    
        function handleBannerTransition() {
            // Add class to header when showing first banner
            header.classList.add('banner-active');
        
            setTimeout(() => {
                firstBanner.classList.add('hidden');
                secondBanner.classList.remove('hidden');
                
                // Remove class from header
                header.classList.remove('banner-active');
                initTabSystem();
            }, 1000);
        }
        
        // Initialize the tab system for the interactive circle
        function initTabSystem() {
            const buttons = Array.from(secondBanner.querySelectorAll(".tab-button"));
            const contents = Array.from(secondBanner.querySelectorAll(".tab-content"));
            const halfCircle = secondBanner.querySelector(".half-circle");
            
            // Define positions for each tab button
            const positions = [
                { left: "0%", top: "0%" },
                { left: "0", top: "2%" },
                { right: "30%", top: "13%"},
                { right: "5%", top: "32%" },
                { right: "4%", bottom: "34%" },
                { right: "26%", bottom: "15%" },
                { left: "0%", bottom: "4%" }
            ];

            let currentOrder = [...buttons];
            let autoRotateInterval;
            let isAutoRotating = true;

            // Function to apply positions to buttons
            function applyPositions() {
                currentOrder.forEach((btn, i) => {
                    const pos = positions[i];
                    Object.assign(btn.style, {
                        left: pos.left || "auto",
                        right: pos.right || "auto",
                        top: pos.top || "auto",
                        bottom: pos.bottom || "auto",
                        transform: pos.transform || "none",
                        zIndex: pos.zIndex || "1",
                        transition: "all 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55)"
                    });
                });
            }

            function setActiveTab() {
                // Remove active classes from all buttons and contents
                buttons.forEach(btn => btn.classList.remove("active"));
                contents.forEach(content => content.classList.remove("active"));
                
                // Add active class to the first button in currentOrder
                currentOrder[0].classList.add("active");
                const tabId = currentOrder[0].dataset.tab;
                if (tabId) {
                    const contentElement = document.getElementById(tabId);
                    if (contentElement) {
                        contentElement.classList.add("active");
                    }
                }
            }

            function rotateToIndex(index) {
                // Create a new order by moving items before index to the end
                const newOrder = [
                    ...currentOrder.slice(index),
                    ...currentOrder.slice(0, index)
                ];                
                currentOrder = newOrder;
                currentOrder.forEach(btn => halfCircle.appendChild(btn));

                applyPositions();
                setActiveTab();
            }

            // Initialize auto rotation
            function startAutoRotation() {
                if (autoRotateInterval) clearInterval(autoRotateInterval);
                autoRotateInterval = setInterval(() => {
                    rotateToIndex(1); // Move second item to top
                }, 5000);
                isAutoRotating = true;
            }

            // Click event for tab buttons
            buttons.forEach((btn, idx) => {
                btn.addEventListener("click", (e) => {                   
                    const newIndex = currentOrder.indexOf(btn);
                    if (newIndex !== 0) {
                        rotateToIndex(newIndex);
                    }
                });
            });

            // Initialize
            applyPositions();
            setActiveTab();
            startAutoRotation();
        }
        
        // Start the banner transition
        handleBannerTransition();
    });


$("#our-teams .slick-slider").slick({
    slidesToShow: 3,
    infinite:true,
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

$("#review-section .slick-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // speed: 1000,
 	// cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});