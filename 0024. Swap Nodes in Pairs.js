/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  var out = new ListNode(0);
  var now = out;

  out.next = head;

  while (now.next && now.next.next) {
    now = swap(now, now.next, now.next.next);
  }

  return out.next;
};

var swap = function (a, b, c) {
  a.next = c;
  b.next = c.next;
  c.next = b;
  return b;
};
