const authentication = require('./authentication');
const createProduct = require('./creates/createProduct');
const createProductVariant = require('./creates/createProductVariant');
const searchProduct = require('./searches/searchProduct');
const updateProduct = require('./creates/updateProduct');
const updateProductVariant = require('./creates/updateProductVariant');
const uploadImages = require('./creates/uploadImages');

// Now we can roll up all our behaviors in an App.
const App = {
  // This is just shorthand to reference the installed dependencies you have. Zapier will
  // need to know these before we can upload
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  
  authentication: authentication,

  beforeRequest: [
  ],

  afterResponse: [
  ],

  resources: {
  },

  // If you want your trigger to show up, you better include it here!
  triggers: {
  },

  // If you want your searches to show up, you better include it here!
  searches: {
    [searchProduct.key]: searchProduct
  },

  // If you want your creates to show up, you better include it here!
  creates: {
    [createProduct.key]: createProduct,
    [createProductVariant.key]: createProductVariant,
    [updateProduct.key]: updateProduct,
    [updateProductVariant.key]: updateProductVariant,
    [uploadImages.key]: uploadImages
  },
  
  searchOrCreates: {
    [searchProduct.key]: { // the key must match the search
      key: searchProduct.key, // same as above
      display: {
        // the label goes up in sidebar
        // see: https://cdn.zapier.com/storage/photos/04f7951bda0c43dc80eb630251724336.png
        label: 'Find or Create Product',
        description: 'Finds an existing or creates a new product.' // this is ignored
      },
      search: searchProduct.key,
      create: createProduct.key
    }
  }
};

// Finally, export the app.
module.exports = App;
