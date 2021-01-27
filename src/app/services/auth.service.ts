export class AuthService {

	isAuth = false;
	user = {
			name: null,
			id: null,
			email: null,
			password: null
		};

	signIn(name) {
			this.user.name = name;
  		localStorage.setItem('user', JSON.stringify(this.user));
  }

  signOut() {
    this.isAuth = false;
		localStorage.setItem('user', "");
  }

	setUser(name) {
		this.user.name = name;

	}

	getUser() {
		return(this.user);
	}

}
