class Auth {
  /**
   * Returns the first and last name of the user that is logged in
   * Return null if no user is logged in
   *
   * @return {String} [logged in user's first and last name]
   */
  getUser() {
    return "First Last";
  }

  /**
   * Returns the username of the user that is logged in
   * Return null if no user is logged in
   *
   * @return {String} [logged in user's username]
   */
  getUsername() {
    return "username";
  }

  /**
   * Returns true if user is authenticated, false otherwise
   *
   * @return {Boolean} [true if user is authenticated, false otherwise]
   */
  isAuthenticated() {
    return false;
  }

  /**
   * Authenticates the user
   */
  signIn() {

  }

  /**
   * Logs the user out and clears any saved information if necessary
   */
  signOut() {

  }
}

const authClient = new Auth();

export default authClient;
