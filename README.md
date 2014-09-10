## Tweety Pop
######( client-side decouple and refactor in progress )

Live website hosted by Modulus: http://tweetypop-21842.onmodulus.net/

### Introduction

- Twitter visualization and data analytics project using Node.js, Express, Socket.io and MongoDB.

- Using web sockets, data is streamed from twitter and passed through a sentiment algorithm.

- On arrival, each tweet is immediately rendered and stored in a non-relational database that holds 100,000 of the most current tweets about the artists.

- The **incoming sentiment score** reflects the degree of positivity / negativty of the current tweet on-screen.

- The **tweety pop interpreter** reflects the average sentiment score of the artist and is calculated by the 100,000 tweets stored-in and collected-from the database.

- Tweets anaylized as neutral (a score of 0) are not applied to the average.

### Poject Milestones

- Creates a real-time stream from the server to the client for data transfer.

- Measures the sentitment of each incoming tweet about the artist.

- Calculates the average sentiment of all incoming tweets about the artist.

- Provides meaningful data by utilizing a non-relational database of collections where large amounts of information can be stored and read quickly and efficiently.

- Optimizes the application for performance and end-user attention span while streaming the twitter api, continuouly querying the database and rendering everything live.

### Technologies Used

- Node.js, Express, Socket.io, MongoDB

### Authored By
- Scott Jason
