<?php get_header(); ?>
<section class="hero" data-aos="fade-up">
  <div class="container">
    <h2>Powering Your World, Professionally</h2>
    <p>We provide high-quality residential, commercial, and industrial electrical services.</p>
    <a href="#contact" class="btn">Request a Quote</a>
  </div>
</section>

<section id="services" class="services" data-aos="fade-up">
  <div class="container">
    <h2>Our Services</h2>
    <div class="card-grid">
      <div class="card"><h3>Residential Wiring</h3><p>Safe and efficient home installations.</p></div>
      <div class="card"><h3>Commercial Installations</h3><p>Powering offices and retail spaces.</p></div>
      <div class="card"><h3>Industrial Systems</h3><p>Heavy-duty solutions for factories.</p></div>
    </div>
  </div>
</section>

<section id="portfolio" class="portfolio" data-aos="fade-up">
  <div class="container">
    <h2>Our Projects</h2>
    <div class="card-grid">
      <div class="card"><img src="https://via.placeholder.com/300" alt="Office Complex Wiring"><p>Office Complex Wiring</p></div>
      <div class="card"><img src="https://via.placeholder.com/300" alt="Factory Power Upgrade"><p>Factory Power Upgrade</p></div>
      <div class="card"><img src="https://via.placeholder.com/300" alt="Smart Home Installation"><p>Smart Home Installation</p></div>
    </div>
  </div>
</section>

<section id="contact" class="contact" data-aos="fade-up">
  <div class="container">
    <h2>Contact Us</h2>
    <?php echo do_shortcode('[contact-form-7 id="1234" title="Contact form"]'); ?>
  </div>
</section>
<?php get_footer(); ?>
