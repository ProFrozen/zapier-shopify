// We recommend writing your creates separate like this and rolling them
// into the App definition at the end.
module.exports = {
  key: 'updateProduct',

  // You'll want to provide some helpful display labels and descriptions
  // for users. Zapier will put them into the UX.
  noun: 'Product',
  display: {
    label: 'Update Product',
    description: 'Updates an existing product.',
    important: true
  },

  // `operation` is where the business logic goes.
  operation: {
    inputFields: [
      {key: 'product_id', type: 'string', required: true},
      {key: 'title', type: 'string', required: true},
      {key: 'product_type', type: 'string'},
      {key: 'vendor', type: 'string'},
      {key: 'body_html', type: 'text', label: 'Product Description', helpText: 'Can use HTML elements.'},
      {key: 'tags', type: 'string', helpText: 'Comma-separated list of tags'},
      {key: 'published_at', type: 'datetime', helpText: 'The date and time when the product was published. This must be a date in the past. Defaults to the current date if left blank.'},
      {key: 'price', type: 'number'},
      {key: 'quantity', type: 'integer'},
      {key: 'image_url', type: 'string', label: 'Image URL'},
      {key: 'more_images', type: 'string', label: 'More Image URLs', list: true},
      {key: 'option1', type: 'string', label: 'Option 1 Name'},
      {key: 'option1_value', type: 'string', label: 'Option 1 Value'},
      {key: 'option2', type: 'string', label: 'Option 2 Name'},
      {key: 'option2_value', type:'string', label: 'Option 2 Value'},
      {key: 'option3', type: 'string', label: 'Option 3 Name'},
      {key: 'option3_value', type: 'string', label: 'Option 3 Value'},
      {key: 'sku', type: 'string', label: 'SKU'},
      {key: 'published', type: 'boolean'},
      {key: 'barcode', type: 'string'},
      {key: 'compare_at_price', type: 'number'},
      {key: 'grams', type: 'integer'},
      {key: 'weight', type: 'number'},
      {key: 'weight_unit', type: 'string'}
    ],
    perform: (z, bundle) => {
      var options = [];
      var images = [];
      if (bundle.inputData.option1) {
        options.push({name: bundle.inputData.option1, value: bundle.inputData.option1_value});
      };
      if (bundle.inputData.option2) {
        options.push({name: bundle.inputData.option2, value: bundle.inputData.option2_value});
      };
      if (bundle.inputData.option3) {
        options.push({name: bundle.inputData.option3, value: bundle.inputData.option3_value});
      };
      if (bundle.inputData.image_url) {
        images.push({src: bundle.inputData.image_url});
      };
      if (bundle.inputData.more_images) {
        for (var i=0; i < bundle.inputData.more_images.length; i++) {
          images.push({src: bundle.inputData.more_images[i]})
        };
      };
      const promise = z.request({
        url: `https://${process.env.SUBDOMAIN}.myshopify.com/admin/api/2019-04/products/${bundle.inputData.product_id}.json`,
        method: 'PUT',
        body: JSON.stringify({
          product: {
            title: bundle.inputData.title,
            product_type: bundle.inputData.product_type,
            vendor: bundle.inputData.vendor,
            body_html: bundle.inputData.body_html,
            inventory_policy: 'deny',
            tags: bundle.inputData.tags,
            options: options,
            published_at: bundle.inputData.published_at,
            quantity: bundle.inputData.quantity,
            images: images,
            published: bundle.inputData.published,
            variants: [{
              barcode: bundle.inputData.barcode,
              price: bundle.inputData.price.toString(),
              sku: bundle.inputData.sku,
              title: bundle.inputData.default_title,
              compare_at_price: bundle.inputData.compare_at_price.toString(),
              fulfillment_service: 'manual',
              inventory_policy: 'deny',
              grams: bundle.inputData.grams,
              weight: bundle.inputData.weight,
              weight_unit: bundle.inputData.weight_unit,
              option1: bundle.inputData.option1_value,
              option2: bundle.inputData.option2_value,
              option3: bundle.inputData.option3_value,
              position: 1
            }]
          }
        }),
        headers: {
          'content-type': 'application/json',
        }
      });

      return promise.then((response) => JSON.parse(response.content));
    },

    // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
    // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
    // returned records, and have obviously dummy values that we can show to any user.
    sample: {
      "product": {
        "id": 1071559582,
        "title": "Burton Custom Freestyle 151",
        "body_html": "<strong>Good snowboard!</strong>",
        "vendor": "Burton",
        "product_type": "Snowboard",
        "created_at": "2019-05-01T15:22:00-04:00",
        "handle": "burton-custom-freestyle-151",
        "updated_at": "2019-05-01T15:22:00-04:00",
        "published_at": "2019-05-01T15:22:00-04:00",
        "template_suffix": null,
        "tags": "\"Big Air\", Barnes & Noble, John's Fav",
        "published_scope": "web",
        "admin_graphql_api_id": "gid://shopify/Product/1071559582",
        "variants": [
          {
            "id": 1070325028,
            "product_id": 1071559582,
            "title": "Default Title",
            "price": "0.00",
            "sku": "",
            "position": 1,
            "inventory_policy": "deny",
            "compare_at_price": null,
            "fulfillment_service": "manual",
            "inventory_management": null,
            "option1": "Default Title",
            "option2": null,
            "option3": null,
            "created_at": "2019-05-01T15:22:00-04:00",
            "updated_at": "2019-05-01T15:22:00-04:00",
            "taxable": true,
            "barcode": null,
            "grams": 0,
            "image_id": null,
            "weight": 0.0,
            "weight_unit": "lb",
            "inventory_item_id": 1070325030,
            "inventory_quantity": 0,
            "old_inventory_quantity": 0,
            "requires_shipping": true,
            "admin_graphql_api_id": "gid://shopify/ProductVariant/1070325028",
            "presentment_prices": [
              {
                "price": {
                  "currency_code": "USD",
                  "amount": "0.00"
                },
                "compare_at_price": null
              }
            ]
          }
        ],
        "options": [
          {
            "id": 1022828619,
            "product_id": 1071559582,
            "name": "Title",
            "position": 1,
            "values": [
              "Default Title"
            ]
          }
        ],
        "images": [],
        "image": null
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
