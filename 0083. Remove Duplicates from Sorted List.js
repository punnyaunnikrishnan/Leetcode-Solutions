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
var deleteDuplicates = function (head) {
  var now = head;
  while (now) {
    if (now.next && now.next.val === now.val) {
      now.next = now.next.next;
    } else {
      now = now.next;
    }
  }
  return head;
};
