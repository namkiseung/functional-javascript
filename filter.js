/* *** 기존 코드 *** */
var users = [
    { id: 1, name: "A", age: 32 },
    { id: 2, name: "B", age: 25 },
    { id: 3, name: "C", age: 32 },
    { id: 4, name: "D", age: 28 },
    { id: 5, name: "E", age: 27 },
    { id: 6, name: "F", age: 32 },
    { id: 7, name: "G", age: 24 },
];

var temp_users = [];
for (var i = 0, len = users.length; i < len; i++) {
    if (users[i].age < 30) temp_users.push(users[i]);
}
console.log(temp_users.length);
// 4

var ages = [];
for (var i = 0, len = temp_users.length; i < len; i++) {
    ages.push(temp_users[i].age);
}
console.log(ages)
// [ 25, 28, 27, 24 ]

var temp_users = [];
for (var i = 0, len = users.length; i < len; i++) {
    if (users[i].age >= 30) temp_users.push(users[i]);
}
console.log(temp_users.length);
// 3

var names = [];
for (var i = 0, len = temp_users.length; i < len; i++) {
    names.push(temp_users[i].name);
}
console.log(names)
// [ 'A', 'C', 'F' ]



/* *** 바꾼 코드 *** */
function filter(list, predicate) {
    var new_list = [];
    for (var i = 0, len = list.length; i < len; i++) {
        if (predicate(list[i])) new_list.push(list[i]);
    }
    return new_list
}

var users_under_30 = filter(users, function (user) { return user.age < 30 })
console.log(users_under_30.length) 
// 4

var ages = [];
for (var i = 0, len = users_under_30.length; i < len; i++) {
    ages.push(users_under_30[i].age)
}
console.log(ages);
// [ 25, 28, 27, 24 ]


var users_over_30 = filter(users, function (user) { return user.age >= 30 });
console.log(users_over_30.length)

var names = [];
for (var i = 0, len = users_over_30.length; i < len; i++) {
    names.push(users_over_30[i].name)
}
console.log(names)
// [ 'A', 'C', 'F' ]