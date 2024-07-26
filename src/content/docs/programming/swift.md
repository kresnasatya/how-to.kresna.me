---
title: Swift 
---

Swift is a general-purpose programming language design by Apple released on 2014. It can be use to develop software for Apple products, [server](https://www.youtube.com/watch?v=OWNjtWUb9bs), and [embedded device](https://www.youtube.com/watch?v=LqxbsADqDI4). Swift by syntax share similarity with strict type programming language like Java, Go, and PHP (version 8 and above). I try Swift in Swift Playgrounds and I create a YouTube playlist of my progress to learn Swift: [Swift Playgrounds - Learn to Code 1](https://www.youtube.com/playlist?list=PL1624iL4Ia7WokXFwxA_-Dm30lg7uFnIS) and [Swift Playgrounds - Learn to Code 2 - Quick Review](https://youtu.be/RG8FS6xyc1Y).

## Syntax

In Swift, you can declare variable in two ways: a mutable variable with `var` keyword and immutable variable with `let` keyword. Mutable variable means you can change the value of variable after you declare a variable. Immutable variable means you cannot change the value of variable after you declare a variable.

```swift
// Mutable variable with `var` keyword.
var count = 2
count = 3 // It works

// Immutable variable with `let` keyword.
let name = "Kresna"
name = "Satya" // It doesn't work.
```

Swift also a strict-type programming language. It means when you declare a mutable variable with specific type (e.g. Int) then you can only change the value of variable only with Int type.

```swift
var count = 1
count = 2 // Allowed
count = "foo" // Not allowed and it will throw error
```

Swift doesn't need a semicolon `;` after you declare variable. Also, Swift doesn't need parentheses when declare control flow statement, loop statement.

```swift
var isRain = true

if isRain {
    print("bring umbrella") // Output result.
} else {
    print("let's go")
}

for index in 1...5 {
    print("\(index) time 5 is \(index * 5)")
}
// Ouput:
// 1 times 5 is 5
// 2 times 5 is 10
// 3 times 5 is 15
// 4 times 5 is 20
// 5 times 5 is 25
```

If you want to concat variable in a string you can use `\()` syntax or `+` operator.

```swift
let firstName = "Kresna"
let lastName = "Satya"
print("My name is \(firstName) \(lastName)") // My name is Kresna Satya
print("My name is " + firstName + " " + lastName) // My name is Kresna Satya
```