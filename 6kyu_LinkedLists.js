/* Implement Length() to count the number of nodes in a linked list.

   Implement Count() to count the occurrences of an integer in a linked list. */

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  return convertArray(head).length;
}

function count(head, data) {
  let counter = 0;
  const array = convertArray(head).forEach(x => x === data ? counter++ : counter += 0)
  return counter;
}

function convertArray (head) {
  const arr = [];
  while (head !== null) {
    arr.push(head.data);
    head = head.next;
  }
  return arr;
}
