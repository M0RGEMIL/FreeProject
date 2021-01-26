export class AuthService {

	isAuth = false;
	user = {
			name: null,
			id: null,
			email: null,
			password: null
		};

	signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }, 2000
        );
      }
    );
  }

  signOut() {
    this.isAuth = false;
  }

	setUser(name) {
		this.user.name = name;
	}

	getUser() {
		return(this.user);
	}

}
