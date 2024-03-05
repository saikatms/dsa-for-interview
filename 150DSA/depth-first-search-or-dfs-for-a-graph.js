// Depth-first search is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking.

// Let us understand the working of Depth First Search with the help of the following illustration:

// Step1: Initially stack and visited arrays are empty.

// Step 2: Visit 0 and put its adjacent nodes which are not visited yet into the stack.

// Step 3: Now, Node 1 at the top of the stack, so visit node 1 and pop it from the stack and put all of its adjacent nodes which are not visited in the stack.

// Step 4: Now, Node 2 at the top of the stack, so visit node 2 and pop it from the stack and put all of its adjacent nodes which are not visited (i.e, 3, 4) in the stack.

// Step 5: Now, Node 4 at the top of the stack, so visit node 4 and pop it from the stack and put all of its adjacent nodes which are not visited in the stack.

// Javascript program to print DFS
// traversal from a given
// graph

// This class represents a
// directed graph using adjacency
// list representation
class Graph {
  // Constructor
  constructor(v) {
    this.V = v;
    this.adj = new Array(v);
    for (let i = 0; i < v; i++) this.adj[i] = [];
  }

  // Function to add an edge into the graph
  addEdge(v, w) {
    // Add w to v's list.
    this.adj[v].push(w);
  }

  // A function used by DFS
  DFSUtil(v, visited) {
    // Mark the current node as visited and print it
    visited[v] = true;
    console.log(v + " ");

    // Recur for all the vertices adjacent to this
    // vertex
    for (let i of this.adj[v].values()) {
      let n = i;
      if (!visited[n]) this.DFSUtil(n, visited);
    }
  }

  // The function to do DFS traversal.
  // It uses recursive
  // DFSUtil()
  DFS(v) {
    // Mark all the vertices as
    // not visited(set as
    // false by default in java)
    let visited = new Array(this.V);
    for (let i = 0; i < this.V; i++) visited[i] = false;

    // Call the recursive helper
    // function to print DFS
    // traversal
    this.DFSUtil(v, visited);
  }
}

// Driver Code
g = new Graph(4);

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

console.log("Following is Depth First Traversal " + "(starting from vertex 2)");

g.DFS(2);

// This code is contributed by avanitrachhadiya2155
