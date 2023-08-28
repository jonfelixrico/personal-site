A fun Discord bot that acts like a Magic 8 Ball, but the responses are
quotes that the users submited. It also has a web app that allows the
users to have a bigger picture of what quotes have been submitted in
their Discord server.


This is quite a big project which consists of 4 components:


- The Quotes REST API which stores and dispenses the user-submitted
  quotes. Powered by Spring Boot, MongoDB, and EventStoreDB.
- The Discord bot that the users mainly interact with. Powered by
  Discord.js and Nest.js.
- The web app that allows the users to have a bigger picture of what
  quotes their servers have. The front-end is written on top of
  Quasar Framework and Vue, and the back-end is powered by Nest.js,
  Discord REST API, and OAuth.

Admittedly, it is very over-engineered. However, it is a project that
hold dearly and had so much fun with since it allowed me to scratch
the technical itch of the things that I was curious with.
