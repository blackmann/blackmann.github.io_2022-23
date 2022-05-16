# Introduction

When you watch a lot of movies or commercials involving having to code, it seems the person knows what he/she is doing
from start to finish. On the contrary, that's not what happens in real life. Rarely, does any developer just start
coding from top to bottom and have a perfectly running application.

In the real world, source codes span multiple files, depend on many libraries and frameworks and require some _
discipline_.

## Goal

What this set of articles aim to provide is a simple formula to give you a head-start when solving problems. The _
advise_ and tips I share are as a result of over many years of working experience. What this means is that, you can
follow
these tips verbatim in most cases and will mostly work.

Note that, the point of these articles aren't about **typing code**; they're about coming up with a solution. So, even
though the ideas shared here are [programming] language agnostic, I'll use Javascript for demonstrations.

## Primitives

Every language comes with a set of primitives. _What are primitives?_ Primitives can be seen as the capabilities a
language offers in its bare minimum. In other words, what can you do with just the language if you don't have to rely on
any add-ons. Primitives include the data structures, utility functions and keywords, etc.

We're going to explore the common primitives available to a lot of languages and how they apply to parts of real world
applications. In subsequent pages, I'll expand on some primitives and how/when to use them in solving problems.

### Variables

Variables are simply nicknames to values. An example is in Math, where we do something like `x = 5`.
In this example, `x` is a variable; it holds a value `5`.
A lot of programming languages provide you with the ability to create variables.

But why variables?

Variables offer us a way to not worry about what a value is about but trust that the value will mean what it's called.
For example,

```javascript {4} showLineNumbers
const secondsInAnHour = 1 * 60 * 60

// print the seconds in 24 hours
console.log(secondsInAnHour * 24)
console.log(1 * 60 * 60 * 24)
```

On line 4, we made use of the variable `secondsInAnHour` to calculate the seconds in 24 hours. Now compare `line 4`
to `line 5` which are meant to do the same thing.
Which of them is more readable?
Another benefit for variables is that, consider you have to do 5 more calculations, you have the following options:

###### Option 1 (Usage of variable)

```javascript showLineNumbers
const secondsInAnHour = 1 * 60 * 60

console.log(secondsInAnHour * 24)
console.log(secondsInAnHour * 5)
console.log(secondsInAnHour * 12)
console.log(secondsInAnHour * 10)
console.log(secondsInAnHour * 300)
```

###### Option 2 (No usage of variable)

```javascript showLineNumbers
const secondsInAnHour = 1 * 60 * 60

console.log(1 * 60 * 60 * 24)
console.log(1 * 60 * 60 * 5)
console.log(1 * 60 * 60 * 12)
console.log(1 * 60 * 60 * 10)
console.log(1 * 60 * 60 * 300)
```

Which of the options above would you choose? As an exercise, can you think of another reason why variables are
important?

### Booleans

Booleans are used to express conditions. They can have only two possible states: `True` or `False`. There is no `Maybe`.
Do you have money in your pocket? Is your phone's battery below 30%?

> If you're worried about how to express "Maybe" in programming, there are a couple of options. But none of them is
> about using booleans. You could use strings, numbers or enums. Find out more from [On or off? Booleans](on-or-off)

Booleans, even though having two possible states, offer very powerful programming dynamics. 
In fact, most parts of programming is centered around lots of conditions hence booleans. How?

Move on to [On or off? Booleans](on-or-off).

### Numbers

Numbers need no introduction. We use it to count our birthday. It's how the price of our phone was expressed.

In addition to what you already know about numbers, in programming, numbers are basically grouped into _integers_ and _floats_.
Integers do not have decimals places. Examples are 100, 4, -5, etc. 
On the other hand, floats have decimal places. Examples are 50.04, -0.23, 6.0

You can rely on your intuition to choose which type of number you want to use. 
When dealing with item prices you may need to use floats. When dealing with the count of items you need to use integers.

### Strings

### Arrays

### Structs

### Loops