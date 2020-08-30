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
    console.log(login.length)
    if (login && login.length !== 0) {
      await fetch(`https://api.github.com/users/${login}`)
        .then(response => {
          if (response.status !== 200) {
            return null;
          } else {
            return response.json();
          }
        }
        )
        .then(data => { if (data) return this.authenticated = true })
    }

  }
}

export default new Auth()