//REFERENCE: https://gist.github.com/Prottoy2938/66849e04b0bac459606059f5f9f3aa1a

//Dijkstra algorithm is used to find the shortest distance between two nodes inside a valid weighted graph. Often used in Google Maps, Network Router etc.

//helper class for PriorityQueue
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

//Dijkstra's algorithm only works on a weighted graph.

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    // this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; //to return at end
    let smallest;
    //build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}



//EXAMPLES=====================================================================

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.Dijkstra("A", "E"));

//LIFT ATTEMPT

var graph = new WeightedGraph();
graph.addVertex("MINLIFTBOT");
graph.addVertex("MINLIFTTOP");
graph.addVertex("EXTOP");
graph.addVertex("EXBOT");
graph.addVertex("RECTOP");
graph.addVertex("RECBOT");
graph.addVertex("SUSTOP");
graph.addVertex("SUSBOT");
graph.addVertex("MINTOP");
graph.addVertex("MINBOT");
graph.addVertex("EXLIFTTOP");
graph.addVertex("EXLIFTBOT");
graph.addVertex("LOWLAFTOP");
graph.addVertex("LOWLAFBOT");
graph.addVertex("UPLAFTOP");
graph.addVertex("UPLAFBOT");
// graph.addVertex("");
// graph.addVertex("");

graph.addEdge("MINLIFTBOT", "MINLIFTTOP", 10);
graph.addEdge("MINLIFTTOP", "MINTOP", 1);
graph.addEdge("MINLIFTTOP", "UPLAFTOP", 1);
graph.addEdge("MINTOP", "MINBOTTOM", 12);
graph.addEdge("MINTOP", "EXTOP", 2);
graph.addEdge("MINTOP", "RECTOP", 3);
graph.addEdge("MINTOP", "LOWLAFTOP", 5);
graph.addEdge("MINTOP", "RECBOT", 10);
graph.addEdge("UPLAFTOP", "UPLAFBOT", 6);
graph.addEdge("UPLAFBOT", "LOWLAFTOP", 2);
graph.addEdge("LOWLAFTOP", "LOWLAFBOT", 5);
graph.addEdge("LOWLAFTOP", "UPLAFBOT", 6);
graph.addEdge("EXTOP", "EXBOT", 7);
graph.addEdge("EXTOP", "RECTOP", 2);
graph.addEdge("EXTOP", "EXLIFTTOP", 1);
graph.addEdge("RECTOP", "RECBOT", 6);
graph.addEdge("RECTOP", "SUSTOP", 2);
graph.addEdge("SUSTOP", "EXBOT", 8);
graph.addEdge("EXBOT", "EXLIFTBOT", 2);
graph.addEdge("EXLIFTBOT", "EXLIFTTOP", 6);
graph.addEdge("EXLIFTTOP", "EXTOP", 1);

console.log(graph.Dijkstra("MINLIFTBOT", "EXLIFTBOT"));