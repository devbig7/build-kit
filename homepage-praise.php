<?php

$at_hptestimonials = get_theme_mod( 'at_setting__hptestimonials' );

if (get_locale() == 'en_US') {
  $at_hptestimonialstitle = get_theme_mod('at_setting__hptestimonialstitle', __( 'What My Wonderful Clients Say', 'my_theam' ) );
} else {
  $at_hptestimonialstitle = get_theme_mod('at_setting__hptestimonialstitle_ru', __( 'What My Wonderful Clients Say', 'my_theam' ) );
}

$at_hptestimonials_nb = get_theme_mod( 'at_sec__hptestimonial_nb', '2' );

if ( $at_hptestimonials ) : ?>

<div id="at-praise-block" class="at-praise-block at-container">

  <div class="at-testimonals">

    <?php if ( !empty($at_hptestimonialstitle) ) : ?>

      <h3 class="at-testimonals__title"><?php echo esc_html( $at_hptestimonialstitle ); ?></h3>

    <?php endif; ?> 



    <ul class="at-testimonals__list">



    <?php foreach($at_hptestimonials as $item) : ?>

    

    <?php $item_imgsrc = wp_get_attachment_image_src( $item['testimonial_image'], 'thumbnail'); ?>

    <li class="at-testimonials-<?php echo esc_html($at_hptestimonials_nb); ?>" >

      <?php 
      
        if (get_locale() == 'en_US') {
          ?>
            <div class="at-testimonial">

              <blockquote>

                <?php if ( !empty($item['testimonial_text']) ) : ?>

                  <div class="at-testimonial__content">

                    <p><?php echo wp_kses_post( $item['testimonial_text'] ); ?></p>

                  </div>

                <?php endif; ?>

                <cite>

                  <?php if ( !empty($item['testimonial_image']) ) : ?>

                    <img src="<?php echo esc_url( $item_imgsrc[0] ); ?>" height="60" width="60"/>

                  <?php endif; ?>

                  <?php if ( !empty($item['testimonial_name']) ) : ?>

                  <span class="at-testimonial__author"><?php echo wp_kses_post( $item['testimonial_name'] ); ?></span>

                  <?php endif; ?>

                  <?php if ( !empty($item['testimonial_bio']) ) : ?>

                  <span class="at-testimonial__authordetails"><?php echo wp_kses_post( $item['testimonial_bio'] ); ?></span>

                  <?php endif; ?>

                </cite>

              </blockquote>

            </div>
          <?php
        } else {
          ?>
            <div class="at-testimonial">

              <blockquote>

                <?php if ( !empty($item['testimonial_text_ru']) ) : ?>

                  <div class="at-testimonial__content">

                    <p><?php echo wp_kses_post( $item['testimonial_text_ru'] ); ?></p>

                  </div>

                <?php endif; ?>

                <cite>

                  <?php if ( !empty($item['testimonial_image']) ) : ?>

                    <img src="<?php echo esc_url( $item_imgsrc[0] ); ?>" height="60" width="60"/>

                  <?php endif; ?>

                  <?php if ( !empty($item['testimonial_name_ru']) ) : ?>

                  <span class="at-testimonial__author"><?php echo wp_kses_post( $item['testimonial_name_ru'] ); ?></span>

                  <?php endif; ?>

                  <?php if ( !empty($item['testimonial_bio_ru']) ) : ?>

                  <span class="at-testimonial__authordetails"><?php echo wp_kses_post( $item['testimonial_bio_ru'] ); ?></span>

                  <?php endif; ?>

                </cite>

              </blockquote>

            </div>
          <?php
        }
      
      ?>

    </li>



    <?php endforeach; ?>



    </ul>

  </div>

</div>

<?php endif; ?>