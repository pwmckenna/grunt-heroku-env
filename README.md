grunt-heroku-env
================

Run as part of your heroku slug compilation to pull the heroku environment variables into `process.env`.

# Getting Started

Install this grunt plugin with: `npm install grunt-heroku-env`

Then add this line to your project's `Gruntfile.js` gruntfile:
```js
grunt.loadNpmTasks('grunt-heroku-env');
```

# Configuration

None!

# Usage

When used with the [heroku grunt buildpack](https://github.com/mbuchetics/heroku-buildpack-nodejs-grunt), you can use the task to expose environment variables to your heroku task (the default task that is run by the buildpack):

```js
grunt.registerTask('heroku', ['heroku-env', 'build']);
```

# License

MIT

# Author

Patrick Williams