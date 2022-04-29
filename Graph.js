class Graph {
  constructor(edgeDirection = Graph.DIRECTED) {
    this.nodes = new Map();
    this.edgeDirection = edgeDirection;
  }
  addVertex(value) {
    if(this.nodes.has(value)) {
      return this.nodes.get(value);
    } else {
      const vertex = new Node(value);
      this.nodes.set(value, vertex);
      return vertex;
    }
  }
  
  addEdge(source, destination) {
    const sourceNode = this.addVertex(source);
    const destinationNode = this.addVertex(destination);

    sourceNode.addAdjacent(destinationNode);

    if(this.edgeDirection === Graph.UNDIRECTED) {
      destinationNode.addAdjacent(sourceNode);
    }

    return [sourceNode, destinationNode];
  }
}

Graph.UNDIRECTED = Symbol('directed graph'); // two-ways edges
Graph.DIRECTED = Symbol('undirected graph'); // one-way edges