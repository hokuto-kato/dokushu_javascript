class User {
	constructor (username) {
		this.deleted = 0
		this.username = username
	}
	login () {
		if (this.deleted) {
			console.log(`${this.username}はログインに失敗しました。`)
		} else {
			console.log(`${this.username}はログインに成功しました。`)
		}
	}
}

class AdminUser extends User {
	constructor (username) {
		super(username)
	}
	deleteUser (user) {
		if (user instanceof User) {
			user.deleted = 1
			console.log(`${user.username}を削除しました。`)
		} else {
			throw new Error('Userオブジェクトを引数にする必要があります。')
		}
	}
}

const user = new User('Tom')
const admin = new AdminUser('Bob')
admin.deleteUser(user)
