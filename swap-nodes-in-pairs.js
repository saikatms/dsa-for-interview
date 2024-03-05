var head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function push(newData) {
  let newNode = new Node(newData);
  newNode.next = head;
  head = newNode;
}

function pairWiseSwap(head) {
  if (head == null) return null;
  if (head.next == null) return head;

  let newHead = head.next;
  let curr = head;
  let prev = null;
  while (curr != null && curr.next != null) {
    let temp = curr.next.next;
    curr.next.next = curr;
    if (prev == null) {
      prev = curr;
    } else {
      prev.next = curr.next;
      prev = curr;
    }

    curr.next = temp;
    curr = curr.next;
  }

  return newHead;
}
push(4);
push(3);
push(2);
push(1);

// getData();
pairWiseSwap(head);
// getData();
