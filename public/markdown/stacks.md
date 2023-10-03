# Stacks
A stack is an ADT (Abstract Data Type) where items are inserted and removed from the top of a stack. A stack is a **Last-In-First-Out** ADT.

### Last-In-First-Out (LIFO)
Last-In-First-Out (LIFO) is pretty self explanatory. The last item inserted into an ADT that follows this principle is the first item to be removed when the ADT's remove method is called. In the case of a stack, a handy image to visualize the data structure could help:

![plates](/img/plates.jpg)

As you can see, plates can only be placed on the top of the stack, and you can only remove the top plate (which is the last plate you've placed on the stack).

### Methods / Operations
The following are common methods/operations that a stack data structure has:

- **Push**: Insert an element to the top of the stack.
- **Pop**: Remove the top element of the stack and return it.
- **Peek**: Return the top element without removing it.
- **IsEmpty**: Return true if the stack is empty.
- **GetLength**: Return the number of items in the stack.

Note: popping or peeking an empty stack may lead to undefined behavior and is not recommended. 

## Using Linked Lists
A stack ADT is commonly implemented using a linked list.
- **Push**: A new list node is created, assigning it the data being pushed. The node is then [Prepended]() to the list, becoming the new head.
- **Pop**: A local variable is assigned the current head's data, the head node is removed ([RemoveAfter]()) from the list, and then the local variable is returned.

When a stack is initialized as a linked list, its head and tail pointers start as `NULL`.

The following is pseudocode for a stack data structure implemented with a linked list:

```C++
StackPush(stack, item) {
   newNode = new Node()
   newNode->next = NULL
   newNode->data = item

   // Insert as linked list head (top of stack)
   ListPrepend(stack, newNode)
}

StackPop(stack) {
   headData = stack->head->data
   ListRemoveAfter(stack, null)
   return headData
}
```

## Using Arrays
A stack ADT can also be implemented using an array. Two other variables are needed for this to work, however:
- **allocationSize**: an integer for the array's allocated size
- **length**: an integer for the stack's current length

The stack's bottom is `array[0]` and the stack's top is `array[length - 1]`.

There are **bounded** and **unbounded** stacks, along with implementations that allow either. 
- **Unbounded Stack**: An unbounded stack's length can increase indefinitely. 
  - Whenever an unbounded stack's array is reallocated (when the initial array is full), the size of the array doubles.
  - An unbounded stack's array is reallocated (resized) when `length == allocationSize`
- **Bounded Stack**: A bounded stack's length cannot increase beyond a specified upper limit (`maxLength`). Usually this is the initial allocation size, but not all implementations do it this way. A bounded stack with `length == maxLength` is considered full.
  - Some implementations of a bounded stack start the array with a different `allocationSize` than `maxLength`. Whenever `length == allocationSize`, the array is reallocated.

A stack implementation can allow both bounded and unbounded stacks:
- If `maxLength` is negative, the stack is unbounded.
- If `maxLength` is non-negative, the stack is bounded.

This implementation is very similar to a bounded stack as long as push operations are disallowed when `length == maxLength`. A negative `maxLength` means this operation will never be disallowed and the stack can be pushed to indefinitely (with the array being continually reallocated whenever `length` is the same as the array's size and another push operation is called). 

The following is pseudocode for a stack data structure implemented with an array (allowing both bounded and unbounded):

```C++
StackPop(stack) {
   popped = stack->array[stack->length - 1]
   stack->length = stack->length - 1
   return popped
}

StackPush(stack, item) {
   // Cannot push if at maximum length
   if (stack->length == stack->maxLength) {
      return false
   }

   // Resize if length equals allocation size
   if (stack->length == stack->allocationSize) {
      StackResize(stack)
  }

   // Push the item and return true
   stack->array[stack->length] = item
   stack->length = stack->length + 1
   return true
}

StackResize(stack) {
   newSize = stack->allocationSize * 2
   if (stack->maxLength > 0) {
      newSize = min(newSize, stack->maxLength)
   }
   newArray = new array[newSize]
   Copy all elements from stack->array to newArray
   stack->array = newArray
   stack->allocationSize = newSize
}
```