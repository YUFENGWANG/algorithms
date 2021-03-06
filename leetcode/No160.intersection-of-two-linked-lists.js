/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Write a program to find the node at which the intersection of two singly linked lists begins.
 *
 * Example:
 * the following two linked lists:
 * A:       a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗
 * B:  b1 → b2 → b3
 * begin to intersect at node c1.
 *
 * Notes:
 * If the two linked lists have no intersection at all, return null.
 * The linked lists must retain their original structure after the function returns.
 * You may assume there are no cycles anywhere in the entire linked structure.
 * Your code should preferably run in O(n) time and use only O(1) memory.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let nodeA = headA;
  let nodeB = headB;
  const set = new Set();
  while (nodeA || nodeB) {
    if (nodeA === nodeB) return nodeA;
    if (set.has(nodeA)) return nodeA;
    if (set.has(nodeB)) return nodeB;
    if (nodeA) {
      set.add(nodeA);
      nodeA = nodeA.next;
    }
    if (nodeB) {
      set.add(nodeB);
      nodeB = nodeB.next;
    }
  }
  return null;
};
