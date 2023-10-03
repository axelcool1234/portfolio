# Queues
A queue is an ADT (Abstract Data Type) where items are inserted at the end of the queue and removed from the front of the queue. A queue is a **First-In-First-Out** ADT.

### First-In-First-Out (FIFO)
First-In-First-Out (FIFO) is pretty self explanatory. The first item inserted into an ADT that follows this principle is the first item to be removed when the ADT's remove method is called. In the case of a queue, a handy image to visualize the data structure could help:

![plates](/img/queue.png)

Imagine if each blue square was a person waiting in line. When entering a physical queue, you go to the back of the line and then exit at the front. The same is true for a queue ADT.

### Methods / Operations
The following are common methods/operations that a queue data structure has:

- **Enqueue**: Insert an element at the end of the queue.
- **Dequeue**: Remove the element at the front of the queue and return it.
- **Peek**: Return the element at the front of the queue without removing it.
- **IsEmpty**: Return true if the queue is empty.
- **GetLength**: Return the number of items in the queue.

Note: dequeuing or peeking an empty queue may lead to undefined behavior and is not recommended. 

## Using Linked Lists
A queue ADT is commonly implemented using a linked list.
- **Enqueue**: A new list node is created, assigning it the data being enqueued. The node is then [Appended]() to the list, becoming the new tail.
- **Dequeue**: A local variable is assigned the current head's data, the head node is removed ([RemoveAfter]()) from the list, and then the local variable is returned.

When a queue is initialized as a linked list, its head and tail pointers start as `NULL`.

The following is pseudocode for a queue data structure implemented with a linked list:
```C
QueueEnqueue(queue, item) {
   newNode = new Node()
   newNode->next = NULL
   newNode->data = item

   // Insert node as list tail (end of queue)
   ListAppend(queue, newNode)
}

QueueDequeue(queue) {
   headData = queue->head->data
   ListRemoveAfter(queue, null)
   return headData
}
```

## Using Arrays
A queue ADT can also be implemented using an array. Three other variables are needed for this to work, however:
- **allocationSize**: an integer for the array's allocated size
- **length**: an integer for the queue's current length
- **frontIndex**: an integer for the queue's front item index.

The queue's front is `array[frontIndex]` and the queue's back is after `length` items. When looping through `length` items, you may reach the end of the array before reaching the back of the queue. At this point, you wrap back around to `array[0]` and continue. This occurs if `frontIndex != 0`. The `frontIndex` may be in the middle of the array, explaining why you'd have to wrap back around.

There are **bounded** and **unbounded** queues, along with implementations that allow either. 
