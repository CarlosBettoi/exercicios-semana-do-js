const users = [
    {name: 'Ada Lovelace', premium: true},
    {name: 'Grace Hopper', premium: false},
    {name: 'Alan Turing', premium: true},
    {name: 'Linus Torvalds', premium: false},
    {name: 'Margaret Hamilton', premium: true},
]
const premiumuser = users.filter((user) => user.premium)

console.log(premiumuser)