module.exports = {
  key: 'searchProduct',

  // You'll want to provide some helpful display labels and descriptions
  // for users. Zapier will put them into the UX.
  noun: 'Product',
  display: {
    label: 'Find a Product',
    description: 'Search for a product by handle.'
  },

  // `operation` is where we make the call to your API to do the search
  operation: {
    // This search only has one search field. Your searches might have just one, or many
    // search fields.
    inputFields: [
      {key: 'handle', type: 'string', required: true}
    ],

    perform: (z, bundle) => {
      const url = 'https://agoraorbis.myshopify.com/admin/api/2019-04/products.json';

      // Put the search value in a query param. The details of how to build
      // a search URL will depend on how your API works.
      const options = {
        params: {
          handle: bundle.inputData.handle
        }
      };

      return z.request(url, options)
        .then(response => JSON.parse(response.content).products);
    },

    // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
    // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
    // returned records, and have obviously dummy values that we can show to any user.
    sample: {
      "id": 632910392,
      "title": "IPod Nano - 8GB",
      "body_html": "<p>It's the small iPod with one very big idea: Video. Now the world's most popular music player, available in 4GB and 8GB models, lets you enjoy TV shows, movies, video podcasts, and more. The larger, brighter display means amazing picture quality. In six eye-catching colors, iPod nano is stunning all around. And with models starting at just $149, little speaks volumes.</p>",
      "vendor": "Apple",
      "product_type": "Cult Products",
      "created_at": "2019-05-01T15:21:27-04:00",
      "handle": "ipod-nano",
      "updated_at": "2019-05-01T15:21:27-04:00",
      "published_at": "2007-12-31T19:00:00-05:00",
      "template_suffix": null,
      "tags": "Emotive, Flash Memory, MP3, Music",
      "published_scope": "web",
      "admin_graphql_api_id": "gid://shopify/Product/632910392",
      "variants": [
        {
          "id": 808950810,
          "product_id": 632910392,
          "title": "Pink",
          "price": "199.00",
          "sku": "IPOD2008PINK",
          "position": 1,
          "inventory_policy": "continue",
          "compare_at_price": null,
          "fulfillment_service": "manual",
          "inventory_management": "shopify",
          "option1": "Pink",
          "option2": null,
          "option3": null,
          "created_at": "2019-05-01T15:21:27-04:00",
          "updated_at": "2019-05-01T15:21:27-04:00",
          "taxable": true,
          "barcode": "1234_pink",
          "grams": 567,
          "image_id": 562641783,
          "weight": 1.25,
          "weight_unit": "lb",
          "inventory_item_id": 808950810,
          "inventory_quantity": 10,
          "old_inventory_quantity": 10,
          "requires_shipping": true,
          "admin_graphql_api_id": "gid://shopify/ProductVariant/808950810",
          "presentment_prices": [
            {
              "price": {
                "currency_code": "USD",
                "amount": "199.00"
              },
              "compare_at_price": null
            }
          ]
        },
        {
          "id": 49148385,
          "product_id": 632910392,
          "title": "Red",
          "price": "199.00",
          "sku": "IPOD2008RED",
          "position": 2,
          "inventory_policy": "continue",
          "compare_at_price": null,
          "fulfillment_service": "manual",
          "inventory_management": "shopify",
          "option1": "Red",
          "option2": null,
          "option3": null,
          "created_at": "2019-05-01T15:21:27-04:00",
          "updated_at": "2019-05-01T15:21:27-04:00",
          "taxable": true,
          "barcode": "1234_red",
          "grams": 567,
          "image_id": null,
          "weight": 1.25,
          "weight_unit": "lb",
          "inventory_item_id": 49148385,
          "inventory_quantity": 20,
          "old_inventory_quantity": 20,
          "requires_shipping": true,
          "admin_graphql_api_id": "gid://shopify/ProductVariant/49148385",
          "presentment_prices": [
            {
              "price": {
                "currency_code": "USD",
                "amount": "199.00"
              },
              "compare_at_price": null
            }
          ]
        },
        {
          "id": 39072856,
          "product_id": 632910392,
          "title": "Green",
          "price": "199.00",
          "sku": "IPOD2008GREEN",
          "position": 3,
          "inventory_policy": "continue",
          "compare_at_price": null,
          "fulfillment_service": "manual",
          "inventory_management": "shopify",
          "option1": "Green",
          "option2": null,
          "option3": null,
          "created_at": "2019-05-01T15:21:27-04:00",
          "updated_at": "2019-05-01T15:21:27-04:00",
          "taxable": true,
          "barcode": "1234_green",
          "grams": 567,
          "image_id": null,
          "weight": 1.25,
          "weight_unit": "lb",
          "inventory_item_id": 39072856,
          "inventory_quantity": 30,
          "old_inventory_quantity": 30,
          "requires_shipping": true,
          "admin_graphql_api_id": "gid://shopify/ProductVariant/39072856",
          "presentment_prices": [
            {
              "price": {
                "currency_code": "USD",
                "amount": "199.00"
              },
              "compare_at_price": null
            }
          ]
        },
        {
          "id": 457924702,
          "product_id": 632910392,
          "title": "Black",
          "price": "199.00",
          "sku": "IPOD2008BLACK",
          "position": 4,
          "inventory_policy": "continue",
          "compare_at_price": null,
          "fulfillment_service": "manual",
          "inventory_management": "shopify",
          "option1": "Black",
          "option2": null,
          "option3": null,
          "created_at": "2019-05-01T15:21:27-04:00",
          "updated_at": "2019-05-01T15:21:27-04:00",
          "taxable": true,
          "barcode": "1234_black",
          "grams": 567,
          "image_id": null,
          "weight": 1.25,
          "weight_unit": "lb",
          "inventory_item_id": 457924702,
          "inventory_quantity": 40,
          "old_inventory_quantity": 40,
          "requires_shipping": true,
          "admin_graphql_api_id": "gid://shopify/ProductVariant/457924702",
          "presentment_prices": [
            {
              "price": {
                "currency_code": "USD",
                "amount": "199.00"
              },
              "compare_at_price": null
            }
          ]
        }
      ],
      "options": [
        {
          "id": 594680422,
          "product_id": 632910392,
          "name": "Color",
          "position": 1,
          "values": [
            "Pink",
            "Red",
            "Green",
            "Black"
          ]
        }
      ],
      "images": [
        {
          "id": 850703190,
          "product_id": 632910392,
          "position": 1,
          "created_at": "2019-05-01T15:21:27-04:00",
          "updated_at": "2019-05-01T15:21:27-04:00",
          "alt": null,
          "width": 123,
          "height": 456,
          "src": "https://cdn.shopify.com/s/files/1/0006/9093/3842/products/ipod-nano.png?v=1556738487",
          "variant_ids": [],
          "admin_graphql_api_id": "gid://shopify/ProductImage/850703190"
        },
        {
          "id": 562641783,
          "product_id": 632910392,
          "position": 2,
          "created_at": "2019-05-01T15:21:27-04:00",
          "updated_at": "2019-05-01T15:21:27-04:00",
          "alt": null,
          "width": 123,
          "height": 456,
          "src": "https://cdn.shopify.com/s/files/1/0006/9093/3842/products/ipod-nano-2.png?v=1556738487",
          "variant_ids": [
            808950810
          ],
          "admin_graphql_api_id": "gid://shopify/ProductImage/562641783"
        }
      ],
      "image": {
        "id": 850703190,
        "product_id": 632910392,
        "position": 1,
        "created_at": "2019-05-01T15:21:27-04:00",
        "updated_at": "2019-05-01T15:21:27-04:00",
        "alt": null,
        "width": 123,
        "height": 456,
        "src": "https://cdn.shopify.com/s/files/1/0006/9093/3842/products/ipod-nano.png?v=1556738487",
        "variant_ids": [],
        "admin_graphql_api_id": "gid://shopify/ProductImage/850703190"
      }
    },

    // If the resource can have fields that are custom on a per-user basis, define a function to fetch the custom
    // field definitions. The result will be used to augment the sample.
    // outputFields: () => { return []; }
    // Alternatively, a static field definition should be provided, to specify labels for the fields
    outputFields: [
      ]
  }
};
