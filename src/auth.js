class Auth {
  constructor() {
    this.authenticated = false
  }

  login = (callback) => {
    this.authenticated = true;
    callback()
  }

  logout = (callback) => {
    this.authenticated = false;
    callback()
  }

  isAuthenticated = async (login) => {
    if (login && login.length !== 0) return
    await fetch(`https://api.github.com/users/${login}`)
      .then(response => {
        if (response.status !== 200) return null;

        return response.json();
      }
      )
      .then(data => { if (data) return this.authenticated = true })
  }
}

export default new Auth()