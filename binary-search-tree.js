class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val)
      return this
    }
    
    let currNode = this.root
    while (currNode) {
      if (val < currNode.val) {
        if (currNode.left === null) {
          currNode.left = new Node(val)
          return this
        } else {
          currNode = currNode.left
        }
      } else if (val > currNode.val) {
        if (currNode.right === null) {
          currNode.right = new Node(val)
          return this
        } else {
          currNode = currNode.right
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currNode = this.root) {
    if (this.root === null) {
      this.root = new Node(val)
      return this
    }

    if (val < currNode.val) {
      if (currNode.left === null) {
        currNode.left = new Node(val)
        return this
      }
      return this.insertRecursively(val, currNode.left)
    } else if (val > currNode.val) {
      if (currNode.right === null) {
        currNode.right = new Node(val)
        return this
      }
      return this.insertRecursively(val, currNode.right)
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currNode = this.root
    while (currNode) {
      if (currNode.val === val) {
        return currNode
      } 
      
      if (currNode.val > val) {
        currNode = currNode.left
      } else {
        currNode = currNode.right
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currNode = this.root) {
    if (currNode.val === val) return currNode

    if (currNode.val > val) {
      if (currNode.left === null) return undefined
      return this.findRecursively(val, currNode.left)
    } else {
      if (currNode.right === null) return undefined
      return this.findRecursively(val, currNode.right)
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, visitedNodes = []) {
    visitedNodes.push(node.val)
    if (node.left) this.dfsPreOrder(node.left, visitedNodes) 
    if (node.right) this.dfsPreOrder(node.right, visitedNodes) 
    return visitedNodes
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, visitedNodes = []) {
    if (node.left) this.dfsInOrder(node.left, visitedNodes) 
    visitedNodes.push(node.val)
    if (node.right) this.dfsInOrder(node.right, visitedNodes) 
    return visitedNodes
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, visitedNodes = []) {
    if (node.left) this.dfsPostOrder(node.left, visitedNodes) 
    if (node.right) this.dfsPostOrder(node.right, visitedNodes) 
    visitedNodes.push(node.val)
    return visitedNodes
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs(node = this.root, toVisitQueue = [this.root], visitedNodes = []) {
    if (node !== null) visitedNodes.push(node.val)
    if (node.left) toVisitQueue.push(node.left)
    if (node.right) toVisitQueue.push(node.right)
    toVisitQueue.shift()
    if (!toVisitQueue.length) return visitedNodes
    return this.bfs(toVisitQueue[0], toVisitQueue, visitedNodes)
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
