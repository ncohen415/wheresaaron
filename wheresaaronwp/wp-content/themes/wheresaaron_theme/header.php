<?php 
  $page = get_queried_object();
?><!DOCTYPE html>
<!--[if lte IE 11]><html <?php language_attributes(); ?> class="no-js lte-ie11"> <![endif]-->
<!--[if gte IE 11]><!--><html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="cleartype" content="on">



<?php wp_head(); ?>

<?php
	// Connect to the Browsersync server
	$dev_hostname = "localhost:8000";
	if( (strpos($_SERVER['SERVER_NAME'], ".") === false) || ($_SERVER['SERVER_NAME'] === $dev_hostname) ) {
		echo "<script type=\"text/javascript\" id=\"__bs_script__\">document.write(\"<script async src='http://HOST:3000/browser-sync/browser-sync-client.js'><\/script>\".replace(\"HOST\", window.location.hostname));</script>";
	}
?>
</head>
<body <?php body_class(); ?>>
<div class="site-container">



          <!--HEADER-->
          <div class="site-header-container">
            <div class="site-header-wrapper">
                <button class="collapse-nav">
                    <img class="logo2" src="<?php blogInfo('template_url') ?>/assets/img/full-logo-5px.png" href="#">
                </button>
                <div class="left-nav-container">
                <?php wp_nav_menu(array(
							'theme_location' => 'primary',
							'container' => 'div',
							'container_class' => 'left-nav-container',
							'menu_class' => 'nav dropdown',

						)); ?>
                    <!-- <ul class="nav dropdown" role="navigation">
                        <li>
                            <a class="nav-item" id="home" href="#start-section">Home</a>
                        </li>

                        <li>
                            <a class="nav-item" id="music" href="#music-section">Music</a>
                        </li>

                        <li>
                            <a class="nav-item" id="video" href="#video-section">Video</a>
                        </li>
                    </ul>    -->
                </div>
                <div class="center-nav-container">
                <a href="#start-section">
                        <img class="logo" src="<?php blogInfo('template_url') ?>/assets/img/full-logo-5px.png">
                    </a>
                    
                </div>
                <div class="right-nav-container">
                    <ul class="nav dropdown" role="navigation">
                        <li>
                            <a class="nav-item" id="events" href="#events-section">Events</a>
                        </li>
                        <li>
                            <a class="nav-item" id="about" href="#about-section">About</a>
                        </li>
                        <li>
                            <a class="nav-item" id="contact" href="#contact-section">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

				<?php wp_nav_menu(array(
							'theme_location' => 'primary',
							'container' => 'div',
							'container_class' => 'site-header-wrapper',
							'menu_class' => 'nav dropdown',
							'items_wrap' => '%3$s', // removes the <ul> from the menu as we're using our own markup
						 'fallback_cb' => mytheme_menu_fallback
						)); ?>




						



	<div class="site-content">


    

    <!-- <img src="<?php blogInfo('template_url') ?>/assets/img/full-logo-5px.png" href="#"> -->