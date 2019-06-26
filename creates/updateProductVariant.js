// We recommend writing your creates separate like this and rolling them
// into the App definition at the end.
module.exports = {
  key: 'updateProductVariant',

  // You'll want to provide some helpful display labels and descriptions
  // for users. Zapier will put them into the UX.
  noun: 'Product Variant',
  display: {
    label: 'Update Product Variant',
    description: 'Updates an existing product variant.'
  },

  // `operation` is where the business logic goes.
  operation: {
    inputFields: [
      {key: 'variant_id', required: true, type: 'integer'},
      {key: 'barcode', type: 'string'},
      {key: 'price', type: 'number'},
      {key: 'compare_at_price', type: 'number'},
      {key: 'grams', type: 'integer'},
      {key: 'option1', type: 'string', label: 'Option 1'},
      {key: 'option2', type: 'string', label: 'Option 2'},
      {key: 'option3', type: 'string', label: 'Option 3'},
      {key: 'position', type: 'integer'},
      {key: 'sku', type: 'string', label: 'SKU'},
      {key: 'title', type: 'string'},
      {key: 'weight', type: 'integer'},
      {key: 'weight_unit', type: 'string'},
    ],
    perform: (z, bundle) => {
      const promise = z.request({
        url: `https://${process.env.SUBDOMAIN}.myshopify.com/admin/api/2019-04/variants/${bundle.inputData.variant_id}.json`,
        method: 'PUT',
        body: JSON.stringify({
          variant: {
            id: bundle.inputData.variant_id,
            barcode: bundle.inputData.name,
            price: bundle.inputData.price.toString(),
            compare_at_price: bundle.inputData.directions,
            fulfillment_service: 'manual',
            inventory_policy: 'deny',
            grams: bundle.inputData.grams,
            option1: bundle.inputData.option1,
            option2: bundle.inputData.option2,
            option3: bundle.inputData.option3,
            position: bundle.inputData.position,
            sku: bundle.inputData.sku,
            title: bundle.inputData.title,
            weight: bundle.inputData.weight,
            weight_unit: bundle.inputData.weight_unit
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
      variant: {
        "id": 808950810,
        "product_id": 632910392,
        "title": "Not Pink",
        "price": "99.00",
        "sku": "IPOD2008PINK",
        "position": 1,
        "inventory_policy": "continue",
        "compare_at_price": null,
        "fulfillment_service": "manual",
        "inventory_management": "shopify",
        "option1": "Not Pink",
        "option2": null,
        "option3": null,
        "created_at": "2019-05-09T13:28:36-04:00",
        "updated_at": "2019-05-09T13:35:54-04:00",
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
              "amount": "99.00"
              },
            "compare_at_price": null
          }
        ]
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
