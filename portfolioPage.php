<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Techrida</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" rel="stylesheet">
    <link href="./assets/src/output.css" rel="stylesheet">
    <link href="./assets/css/style.css" rel="stylesheet">
</head>
<body>

    <!-- header -->
    <?php include "components/layout/header.php";
    ?>

    <!-- inner-banner -->
    <section id="innerhero-section" class="relative w-full lg:h-[100vh]">    
        <div class="bg-img">
            <img class="overlay-img w-full h-full" src="./images/Portfolio-bg.png" alt="" />
        </div>
        <div class="container px-6 md:px-4 flex justify-between items-center h-full">
            <div class="banner-wrapper w-full md:flex-row text-center fade-in"> 
                <h1 class="text-[40px] md:text-[59px] leading-[64px] mb-4">Our <span class="text-clr">Portfolio</span></h1>
                <p class="text-lg">At the core of what we create is a drive to simplify, enhance, and inspire. Each project is more than technology—it’s a story of collaboration and transformation. We craft secure, efficient, and human-centered solutions that streamline complexity, deliver seamless experiences, and reflect a vision for tomorrow.</p>
                
            </div>
        </div>
    </section>

    <!-- our-work -->
    <?php include "components/portfolioPage/workPortfolio.php";
    ?>

    <!-- client-review -->
    <?php include "components/portfolioPage/clientReview.php";
    ?>

    <!-- track record -->
    <?php include "components/portfolioPage/trackRecord.php";
    ?>

    <!-- technology -->
    <?php include "components/portfolioPage/technology.php";
    ?>

    <?php include "components/layout/footer.php";
    ?>


    

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script src="assets/js/common.js"></script>
</body>
</html>