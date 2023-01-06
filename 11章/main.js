// Personクラス
class Person {
	constructor (fullname, age, gender) {
		this.fullname = fullname
		this.age = age
		this.gender = gender
	}
}

// 登場人物
const taro = new Person('太郎', 18, '男')
const jiro = new Person('次郎', 15, '男')
const saburo = new Person('三郎', 10, '男')
const hanako = new Person('花子', 23, '女')
const hanayo = new Person('花代', 18, '女')
// 友達（friends）オブジェクト
const friends = new Map
friends.set(taro, new Set([jiro, hanayo]))
friends.set(hanako, new Set([hanayo, taro, saburo]))
const taroFriendsSet = friends.get(taro)
taroFriendsSet.add(hanako)
const taroFriendsArray = Array.from(taroFriendsSet)

for (const [person, friendSet] of friends) {
	let friendsName = ''
	for (const friend of friendSet) {
		friendsName += `[${friend.fullname}]`
	}
	console.log(`私の名前は${person.fullname}です。友達には${friendsName}がいます。`)
}
