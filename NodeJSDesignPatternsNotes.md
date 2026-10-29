attempt at using SQ3R (survery, question, read, recite, review)

# Chapter 1

## What is the nodejs philosophy (What 3 things are small and why?)
small modules, small surface area (only expose functions needed from a module), small core (rely on the community to create packages needed)
On the small core however, over time the community has requested some built in modules/functionalities. An example of this being the test runner. And this makes sense that over time the community would land on things that would be better built in, which is actually showing WHY a small core is good. Adding to the core does not defeat the idea of a small core. Just a realization of what is necessary in a small core now. 

## How are dependenies managed to prevent collisions between two packages that might rely on 2 different versions of the same package? 
Say depA and depB both rely on depC but depA needs depC at version 1.0.0 and depB needs depC at version 2.0.0 then the tree structure of the modules would keep them separeted so that each can load their own version of this depC

```
.
└── node_modules
    ├── depA
    │   └── node_modules
    │       └── depC 1.0.0
    └── depB
        └── node_modules
            └── depC 2.0.0
```

## What are the 2 types of I/O? 
blocking and non blocking
blocking will do just that -- block and wait on i/o until that i/o is complete

non blocking will immediately return and continue on and the i/o event itself will tell the os when it is done. Network requests for example on linux is epoll, kqueue on macos, and IOCP on windows (I/O Completion Port).

## What is event demultiplexing? 
Event demultiplexing is the mechanic where multiple events (with) epoll or the thread system in libuv for filesystem async work have all been registered to wait on one thread and to be awoken when something is ready. The demultiplexing portion of that is the one event (of many) being ready and waking the thread with work to be done. 

## What is the Reactor Pattern and how is it used in nodejs?
The Reactor Pattern is the use of handler functions (callbacks) being attached to events and running once an event is ready with some data

## What is libuv?
libuv is the c++ library that allows node to use epoll (linux) and its unerlying 

## What is the event loop? 
The event loop is simply a loop that is constantly looping through events that have been queued for execution and executing the handler (callback) on said event when it is ready. This allows Node.js to handle concurrency (non blocking i/o and event loop) 

## What is the complete 'recipe' for nodejs
The complete recipe takes advantage of all the pieces we have just mentioned (and some others):  
 - v8 (Javascript engine -- originally by google for the Chrome browser -- has made js execution/memory management very fast)
 - libuv (the underlying c++ code to communicate with the OS's version of non blocking i/o)
 - javascript api (core javascript library: in the nodejs context, ex: fs)
 - bindings (between libuv and javascript core api)
 - userland code (modules and such)

## Draw a diagram from memory of node.js's architecture
*nodejs_complete_recipe_diagram.excalidraw* 

## How does Typescript work inside modern node.js? And how do you use the types package? What do most type packages look like for a library? Where do they come from? 

## What is the difference between commonjs and esm? And how does this effect the module system in nodejs. (is there a difference in the browser here?)


---
# Chapter 2 - Modules

Fun challenge (not relevant to modern day): can you implement the old school 'revealing module' pattern, and what is IIFE?

Explain the difference between ESM and CommonJS modules 


