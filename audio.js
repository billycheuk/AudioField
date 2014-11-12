/**
 * Implements hook_field_formatter_view().
 */
function audiofield_field_formatter_view(entity_type, entity, field, instance, langcode, items, display) {
  try {
    var element = {};
    $.each(items, function(delta, item) {
        element[delta] = {
          markup: theme('audiofield', item)
        };
    });
    return element;
  }
  catch (error) { console.log('audiofield_field_formatter_view - ' + error); }
}
/**
 * Themes an Audio field.
 */
function theme_audiofield(variables) {
  try {
    var html = '';
    
    if (variables.filename && variables.filename != ''){
        var uri = variables.filename.replace(/ /g,"%20");
        var src = Drupal.settings.site_path + '/' + Drupal.settings.file_public_path + '/' + uri;
        html += '<audio style="width: 100%" controls autoplay src="' + src +'"></audio>';
    }    
    return html;
  }
  catch (error) { console.log('theme_audiofield - ' + error); }
}
