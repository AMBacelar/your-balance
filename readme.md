to run the development server:
`npm run start`

to create production distribution and serve it:
`npm run prod`
then open http://localhost:8080

to just create production distribution:
`npm run build`
then serve the `./dist/` folder.

a production version should be running on:
https://dry-plateau-32033.herokuapp.com/ 

I wasn't completely sure what the brief intended when it requested me to not use any tools such as cra or next.js, so I went and constructed the app completely from scratch, hoping that it meets the requirements.

I assume that an app like this, would just be served in a folder in a very simple manner (I myself ran `python -m SimpleHTTPServer <port>` in the `./dist/` folder to test that I correctly configured the the production mode for react)

Deploy to Heroku was a little more annoying that I thought, it seems they have a zero-config deploy set up, only for `create-react-app`. Had to create a server file of my own and have heroku host that. (Out of scope, but it was mentioned that it has to be production ready)

the tests written are for the redux functions, that's where any logic lies, the rest of the app, simply displays the data that is in the redux store, with ony two buttons on the UI to increment and decrement the ammounts, which send the request to update through redux, that will make the update.

If I were to expand the app to allow custom input for incrementing and decrementing, I'd have it set as a text field that the user can set the value with, and then two buttons beside it to allow the decrement/increment of the value. But that was not specifically requested (I do acknowledge that a bias may have been drawn due to the UI sample in the pdf brief)
