<?php
/**
 * @file field--fences-div.tpl.php
 * Wrap each field value in the <div> element.
 *
 * @see http://developers.whatwg.org/grouping-content.html#the-div-element
 */
?>
<?php if ($element['#label_display'] == 'inline'): ?>
  <span class="field-label"<?php print $title_attributes; ?>>
    <?php print $label; ?>:
  </span>
<?php elseif ($element['#label_display'] == 'above'): ?>
  <h3 class="field-label"<?php print $title_attributes; ?>>
    <?php print $label; ?>
  </h3>
<?php endif; ?>

<?php foreach ($items as $delta => $item): ?>
  <div class="<?php print $classes; ?>"<?php print $attributes; ?>>
<!--    --><?php //print render($item); ?>
    <?php print theme('image_style', array('style_name' => 'thumbnail', 'title' => $user->name, 'alt' => $user->name, 'path' => $variables['element']['#object']->picture->uri)). ' '.$variables['element']['#title'] .' '.$variables['element']['#object']->name.' on '.format_date($variables['element']['#object']->created, 'custom', 'd/m/Y');  ?>
  </div>
<?php endforeach; ?>
