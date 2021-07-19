/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'https://coffe-shop-back-1.herokuapp.com', // the running FLASK api server url
  auth0: {
    url: 'mostafaelhabrok.us', // the auth0 domain prefix
    audience: 'coffee-shop', // the audience set for the auth0 app
    clientId: '8WqL4GWUB0mENmoqR3tYqGANArfmt3Z2', // the client id generated for the auth0 app
    callbackURL: 'https://coffe-shop-front-1.herokuapp.com', // the base url of the running ionic application. 
  }
};
