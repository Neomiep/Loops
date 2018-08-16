let names1 = ["Stacy", "Steven", "Lacy"];
let ages1 = [32, 24, 17];
for (let i in names1) {
    console.log(names1[1] + " is " + ages1[i] + " years old.")
};


let numbrs = [7, 3, 6];
let sum = 0;
for (let i = 0; i < numbrs.length; i++) {
    sum += numbrs[i]
}
console.log(sum)


console.log(sum / numbrs.length)


let nums = [];
for (let i = 1; i < 101; i++) {
    nums.push(i)
}
console.log(nums)



const len = nums.length
// for (let i = 0; i < len; i +=2) {
//     nums.splice(i,1)
//     i--
// }
// console.log(nums)


for (let i = 0; i < len; i++) {
    if (!nums[i] % 2 == 0) {
        nums.splice(i, 1)
    }

}
console.log(nums)


const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i in names) {
    people.push({ name: names[i], age: ages[i] })
}
console.log(people)


for (let i in people) {
    console.log(people[i].name + " is " + people[i].age + " years old.")
}

const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
}


const keys = Object.keys(dictionary)
const len2 = keys.length
const len3 = dictionary.A.length
for (let i = 0; i < len2; i++) {
    console.log("Words that begin with: " + keys[i])
    for (let a = 0;a < len3; a++) {
        console.log(dictionary[keys[i]][a])
    }

} 