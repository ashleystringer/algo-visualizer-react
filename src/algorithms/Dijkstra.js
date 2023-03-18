export default class Dijkstra {
  constructor() {
    this.currentOutput = {};
    console.log("Dijkstra constructor");
  }

  getOutput() {
    return this.currentOutput;
  }

  setOutput(source, index, distance) {
    this.currentOutput = {
      source,
      index,
      distance
    };
  }

  shortestPath(graph, source) {
    //shortestPath(graph, source, final)
    let count = graph.length;
    let visited = new Array(count);
    let dist = new Array(count);
    for (let i = 0; i < count; i++) {
      visited[i] = false;
      dist[i] = Number.POSITIVE_INFINITY;
    }

    dist[source] = 0;
    for (let i = 0; i < count; i++) {
      let u = this.findMinDist(dist, visited);
      visited[u] = true;

      for (let v = 0; v < count; v++) {
        if (
          !visited[v] &&
          graph[u][v] != 0 &&
          dist[u] + graph[u][v] < dist[v]
        ) {
          dist[v] = dist[u] + graph[u][v];
        }
      }
      //output(source, i, dist[i]);

      //if next node is final, stop the algorithm
    }
    for (let i = 0; i < dist.length; i++) {
      console.log(`source: ${source}, i: ${i}, distance[i]: ${dist[i]}`);
    }
    //source, i, dist[i]
  }

  findMinDist(dist, visited) {
    let minDistance = Number.POSITIVE_INFINITY;
    let minDistV = -1;
    for (let i = 0; i < dist.length; i++) {
      if (!visited[i] && dist[i] < minDistance) {
        minDistance = dist[i];
        minDistV = i;
      }
    }
    return minDistV;
  }
  /*
  return a 2d array to render in Graphics
  */
}
