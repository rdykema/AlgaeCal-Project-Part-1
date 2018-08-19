function register_jquery_cdn() {
	wp_deregister_script('jquery');
	wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'register_jquery_cdn');