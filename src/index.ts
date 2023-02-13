/* 
let age: number = 20;
if(age < 50)
age += 10;
console.log(age)

ARRAY
 Arrays are same but we need to define their type first, we can have a specific type or any, but to use any type is a bad practice for code in typescript

ENUMS
enum Size { Small = 1, Medium, Large}
 If you are assigning string values then you need to assign to the each property of the enum, numbers can be assign inplicitly but not string

let mySizeL: Size = Size.Large
console.log('mySizeL: ', mySizeL);

FUNCTION

 Add specific return type if you are returning a value of a specific type, if you are not returning any type just add void type.
 there two settings to be enabled when you are using functions,
 1- noUnusedParameters: true
 if there is any parametere that is passed to a function but not used then it will show a error before compiling
 2- noImplicitReturns: true
 if there is not return in javascript then our function are allowed to return undefined implicitly, this setting will prompt you to return value of specific type.
 3-noUnusedLocals
 thi setting will not allow to place any local values which is unused during the function call
 

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022)
    return income * 1.2;
  return income * 1.3;
}

calculateTax(50_000, 2023)

 Object

 we need to define type each property of the object 

let employee: {
  readonly id: number,
  name: string
  retire: (date: Date) => void
} = { id: 1, name: 'Anas', retire: (date: Date) => { console.log(date) } }

 now we are defining new ways to define types in typescript, type alliases
type Employee = {
  readonly id: number,
  name: string
  retire: (date: Date) => void
}

let employee: Employee = { id: 1, name: 'Anas', retire: (date: Date) => { console.log(date) } }

Union Types
 Type one of many
function kgToLbs(weight: number | string) {
  Narrowing
  if (typeof weight === 'number')
    return weight * 2.2;
  else
    return parseInt(weight) * 2.2;
}

kgToLbs(10)
kgToLbs('10kg')


Intersection 
 Every type 

type Draggable = {
  drag: () => void
}
type Resizeable = {
  resize: () => void
}
type UIWidgets = Draggable & Resizeable

let textBox: UIWidgets = {
  drag: () => {},
  resize:() => {}
}

Literal Types
When we need to limitize the assignment of values to a variable.
let quantity : 50 | 100 = 100 => other than 50 and 100 is not possible
let quantity : 50 = 50 => other than fifty is not possible
let Meyric : 'cm' | 'm' = cm => other than 'cm' and 'm' is not possible

Null Handling

function greet (name: string | null | undefined): void {
  if(name)
    console.log(name.toUppercase())
  else
    console.log("Hola !")
}
greet("Anas")
greet(null)
greet(undefined)

Optional Chaining 
type Customer = {
  birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0)

console.log(customer?.birthday?.getFullYear())

in this way you can use this for function and for arrays also
// */