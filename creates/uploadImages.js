// We recommend writing your creates separate like this and rolling them
// into the App definition at the end.
module.exports = {
  key: 'uploadImages',

  // You'll want to provide some helpful display labels and descriptions
  // for users. Zapier will put them into the UX.
  noun: 'Images',
  display: {
    label: 'Upload Images',
    description: 'Uploads an image of variant or product.'
  },

  // `operation` is where the business logic goes.
  operation: {
    inputFields: [
      {key: 'product_id', required: true, type: 'integer'},
      {key: 'variant_id', type: 'integer'},
      {key: 'src', type: 'string', label: 'Image Source'},
      {key: 'position', type: 'integer', label: 'Image Position'}
    ],
    perform: (z, bundle) => {
      const promise = z.request({
        url: `https://${process.env.SUBDOMAIN}.myshopify.com/admin/api/2019-04/products/${bundle.inputData.product_id}/images.json`,
        method: 'POST',
        body: JSON.stringify({
          image: {
            variant_ids: [
              bundle.inputData.variant_id
              ],
            src: bundle.inputData.src,
            position: bundle.inputData.position,
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
      image: {
        "id": 1001473915,
        "product_id": 632910392,
        "position": 3,
        "created_at": "2019-04-09T10:55:13-04:00",
        "updated_at": "2019-04-09T10:55:13-04:00",
        "alt": null,
        "width": 110,
        "height": 140,
        "src": "https://cdn.shopify.com/s/files/1/0006/9093/3842/products/rails_logo20190409-18029-mi6uv4.gif?v=1554821713",
        "variant_ids": [],
        "admin_graphql_api_id": "gid://shopify/ProductImage/1001473915"
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
