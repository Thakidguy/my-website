<?php
function elitevolt_theme_setup() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  register_nav_menus(array(
    'main-menu' => 'Main Menu',
  ));
}
add_action('after_setup_theme', 'elitevolt_theme_setup');

function elitevolt_theme_scripts() {
  wp_enqueue_style('aos-css', 'https://unpkg.com/aos@2.3.1/dist/aos.css');
  wp_enqueue_style('style', get_stylesheet_uri());
  wp_enqueue_script('aos-js', 'https://unpkg.com/aos@2.3.1/dist/aos.js', array(), null, true);
  wp_enqueue_script('main-js', get_template_directory_uri() . '/script.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'elitevolt_theme_scripts');
?>
