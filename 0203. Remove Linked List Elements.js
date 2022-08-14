/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let result = head;
  let prevPointer = null;
  let currentPointer = head;

  if (!currentPointer) {
    return result?.val === val ? null : head;
  }

  while (currentPointer) {
    if (currentPointer.val === val) {
      if (prevPointer) {
        prevPointer.next = currentPointer.next;
      } else {
        result = currentPointer.next;
      }
    } else {
      prevPointer = currentPointer;
    }

    currentPointer = currentPointer.next;
  }

  return result;
};
