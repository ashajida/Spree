<?php

add_action( "woocommerce_rest_insert_{$post_type}_object", 'wc_create_order_rest', 10, 3 );

function wc_create_order_rest( $object, $request, $true ) {
    return $object;
}

function create_ACF_meta_in_REST() {
    $postypes_to_exclude = ['acf-field-group','acf-field', 'post'];
    $extra_postypes_to_include = ["page"];
    $post_types = array_diff(get_post_types(["_builtin" => false], 'names'),$postypes_to_exclude);

    array_push($post_types, $extra_postypes_to_include);

    foreach ($post_types as $post_type) {
        register_rest_field( $post_type, 'ACF', [
            'get_callback'    => 'expose_ACF_fields',
            'schema'          => null,
       ]
     );
    }

}

function create_ACF_for_categories() {
    $postypes_to_exclude = ['acf-field-group','acf-field', 'post'];
    $extra_postypes_to_include = ["product_cat"];
    $post_types = array_diff(get_post_types(["_builtin" => false], 'names'),$postypes_to_exclude);

    array_push($post_types, $extra_postypes_to_include);

    foreach ($post_types as $post_type) {
        register_rest_field( $post_type, 'ACF', [
            'get_callback'    => 'expose_ACF_fields_for_cat',
            'schema'          => null,
       ]
     );
    }

}

function expose_ACF_fields_for_cat( $object ) {
    $ID = $object['id'];
    return get_field('is_featured', 'product_cat_'.$ID);
}


function expose_ACF_fields( $object ) {
    $ID = $object['id'];
    return get_fields($ID);
}

add_action( 'rest_api_init', 'create_ACF_meta_in_REST' );
add_action( 'rest_api_init', 'create_ACF_for_categories' );



