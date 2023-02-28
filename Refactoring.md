# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
Well, first there is a base case if there is no event it returns '0'.

In the next block, if the event has a partitionKey property it is not a string then we convert the value of the partitionKey into a string with the stringify function. In the case of the event not having a partitionKey property or not being an object, then we convert to string the event the stringify function.

The last case is to hash it under 2 conditions if it had the property
partitionKey and this is a string with a length greater than 256, or in the case that the event does not have the property or is not an object.

I think it's more understandable and readable than before. However, the function returns in some cases string after just doing stringify maybe it's not a good key.