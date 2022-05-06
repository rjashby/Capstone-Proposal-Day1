Research & Planning Log:


Day 1 Research Notes for “commit” history:

8:15:  Crash course in graph search algorithms.
 https://www.youtube.com/watch?v=cWNEl4HE2OE&ab_channel=Fireship

8:40: Meet up with other students for better approach. Suggestion to use Python's map plot lib. 

8:50 - 9:20: Coding along with airport graphing algorithm. Still in progress.

9:30- 10:15: Research rest syntax in mapping graph. Graph works. 

10:20 - 10:50: Break to eat

10:50 - 11:35: Research weighted graphs - following this tutorial: https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/

11:35 - 12:10: Taking notes and continuing research. Added Notes.txt file.

12:15 - 1:25: Add additional notes and try an object oriented approach

1:30 - 2:00: Add vertices and edges to graphs. Add Graph.js file. 

2:00 - 2:30: Implementing additional searches, but need to read up on queue data structures and methods: 
      :https://www.javascripttutorial.net/javascript-queue/
      :https://www.youtube.com/watch?v=LbAKOE5_Du4&ab_channel=dcode
      : https://www.youtube.com/watch?v=yKhJHsW0Zm4&ab_channel=DevSage

2:30 - 3:00: Finish reading: https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/#Breadth-first-search-BFS-Graph-search
    - Add Queue.js - implementation of a queue. 
    - still confused. taking a break

3:10 - 3:40: Trying to add weight to graphs. https://javascript.plainenglish.io/from-zero-to-dijkstra-5c00c929ceab
    - Also trying to implement Dijkstra’s shortest path algorithm :https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/

3:40 - 4:00: Found github examples of Dijkstra’s shortest path algorithm in Python and JS. Attempting to implement test run on my own in console.
    - See JavaScript: https://gist.github.com/Prottoy2938/66849e04b0bac459606059f5f9f3aa1a
    - See Python: https://gist.github.com/oniani/d319bd7886e6ba01fac9ac74945cccdd 

4:00 - 4:30: Experimenting with data points for the project using my tiny ski resort where I grew up.
    - Fatmap: https://fatmap.com/liftid/46296/@40.1056368,-76.9249230,1174.8026630,-20.0000000,-121.9031805,337.1947721,satellite
    - Open Street Map: https://www.openstreetmap.org/search?query=lewisberry%2C%20pa#map=17/40.10662/-76.92534 

4:32: Realizing in this exact moment that my entire project will not work because I need a 3D weight graph to account for both depth and distance. Kill me. 

4:49: Attempted to follow along with this video on how google earth works: https://www.youtube.com/watch?v=-qo8L5GmKO0&t=16s&ab_channel=GoogleEarth
  - I believe Fatmap has all the data I need, but it's a consumer product, and even if I had some sort of license to work with their IP, it'd take me weeks to get a working understanding of how it all pieces together. 
  - All around bummer of a day.  


  DAY 2: Friday, May 6, 2022

  8:26: Update sample graph, nodes, edges on Dijkstra.js - Start of Day 2. Last ditch attempt to see if the algorithm works before scraping it.

  8:52: Finished graph. Attempting to get it to work but the algorithm is two-way at the moment. Need to modify to one way.

  9:20: Graph now works properly. Success! However, I have no idea how to do the next part of the assignment, which is putting the graph over an actual map. 