to run the development server:
`npm run start`

to create production distribution:
`npm run build`
then serve the `./dist/` folder

a simple heroku deploy will be running on:
https://dry-plateau-32033.herokuapp.com/ 

I wasn't completely sure what the brief intended when it requested me to not use any tools such as cra or next.js, so I went and constructed the app completely from scratch, hoping that it meets the requirements.

I assume that an app like this, would just be served in a folder in a very simple manner (I myself ran `python -m SimpleHTTPServer <port>` in the `./dist/` folder to test that I correctly configured the the production mode for react)