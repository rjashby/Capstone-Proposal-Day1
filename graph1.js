const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];


// the graph
const adjacencyList = new Map();

// add node
function addNode(airport) {
  adjacencyList.set(airport, []);
}

// add edge, undirected
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}


// Create the graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route))

console.log(adjacencyList);

//BFS Breadth First Search

function bfs(start) {

  const visited = new Set();

  const queue = [start];

  while (queue.length > 0) {

    const airport = queue.shift();

    const destinations = adjacencyList.get(airport);

    for (const destination of destinations) {

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(destination);
      }

      if (destination === "BKK") {

        console.log("found it")
      }
    }
  }
}

// DFS Depth First Search

function dfs(start, visited = new Set()) {
  
  console.log(start);

  visited.add(start);

  const destinations = adjacencyList.get(start);

  for (const destination in destinations) {
  
    if (destination === "BKK") {
      
      console.log("DFS found Bangkok in steps");
      return;
    }

    if(!visited.has(destination)) {

      dfs(destination, visited);
    }
  }
}