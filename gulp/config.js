var dest = "./build",
    src  = './src';

module.exports = {
  jade: {
    src: src + '/jade/**/*.jade',
    dest: dest,
    settings: {
      locals: {
        css: {  "app.css": "app.css" },
        js:  {  "app.js": "app.js" }
      }
    }
  },
  less: {
    src: src + "/less/**/*.less",
    dest: dest,
    settings: {
      imagePath: 'images' // Used by the image-url helper
    }
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [
      {
        entries: src + '/js/router.js',
        dest: dest,
        outputName: 'app.js',
        transform:   ['debowerify'],
      }
    ]
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};