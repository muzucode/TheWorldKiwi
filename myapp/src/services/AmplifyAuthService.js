import { Auth } from 'aws-amplify';

class AmplifyAuthService {
  async signUp(username, password, email, phone_number) {
    // If email is blank, default it to mangozango
    email ? email : "mangozango222@gmail.com";
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
              email,
              phone_number
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
  }

  async signIn(username, password) {
    try {
      // eslint-disable-next-line no-unused-vars
        const user = await Auth.signIn(username, password);
        console.log('User has been signed in');
    } catch (error) {
        console.log('error signing in', error);
    }
  }

  async confirmSignUp(username, code) {
    try {
      await Auth.confirmSignUp(username, code);
      console.log('User has been verified');
    } catch (error) {
        console.log('error confirming sign up', error);
    }
  }

}


export default new AmplifyAuthService();

