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

    <section id="innerhero-section" class="relative w-full lg:h-[100vh] contact-page">    
        <div class="bg-img flex items-center justify-center">
            <img class="overlay-img w-full h-full" src="./images/conact-bg.jpg" alt="" />
        </div>
        <div class="container px-6 md:px-4 flex justify-between items-center h-full relative">
            <div class="banner-wrapper w-full md:flex-row text-center"> 
                <h1 class="text-[36px] xs:text-[40px] md:text-[60px] lg:text-[70px] font-semibold mb-12">CONTACT US</h1>
                <div class="md:flex-row md:flex items-center justify-between w-full">
                    <div class="contact-wrap md:w-[50%]">
                        <div class="flex items-center mb-3 md:mb-8">
                            <div class="me-2 w-[30px] md:w-[48px]">
                                <img src="./images/mail.png" alt="" />
                            </div>
                            <div class="text-[18px] lg:text-[28px] font-medium">LoremIspum@gmail.com</div>
                        </div>
                        <div class="flex items-center mb-3 md:mb-8">
                            <div class="me-2 w-[30px] md:w-[48px]">
                                <img src="./images/phone.png" alt="" />
                            </div>                        
                        <div class="text-[18px] lg:text-[28px] font-medium">977-9812345678</div>
                        </div>
                        <div class="flex items-center mb-6 md:mb-0">
                            <div class="me-2 w-[30px] md:w-[48px]">
                                <img src="./images/location.png" alt="" />
                            </div>                        
                            <div class="text-[18px] lg:text-[28px] font-medium">Gyaneshwor,Kathmandu</div>
                        </div>
                    </div>
                    <div class="map md:w-[50%]">
                        <img class="w-full" src="./images/map.png" alt="" />
                    </div>
                </div>                
            </div>
            <img class="mascot" src="./images/chat-icon.png" alt="" />
        </div>
    </section>


    <script src="assets/js/common.js"></script>
</body>
</html>