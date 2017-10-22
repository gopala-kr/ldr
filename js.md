

## lets complete js stack : nodejs, expressjs, meteorjs



This week I got time only for nodejs and related framework expressjs.

*********************************
 | Hacker News       | Medium         | Reddit  |  Quora-QA  | Stack-Overflow-QA | Awesome-gh | Online-Courses (lynda.com) | Official docs|
| ------------- |:-------------:| -----:| -----:|-----:|-----:|-----:|-----:|
|  [nodejs](https://hn.algolia.com/?query=nodejs&sort=byPopularity&prefix&page=0&dateRange=all&type=story)  | [nodejs](https://medium.com/search?q=nodejs)  | [nodejs](https://www.reddit.com/r/node/)  | [nodejs](https://www.quora.com/topic/Node-js)  |  [nodejs](https://stackoverflow.com/search?q=nodejs)    | [nodejs](https://github.com/sindresorhus/awesome-nodejs)  | [nodejs](https://www.lynda.com/Node-js-training-tutorials/1283-0.html)  |[nodejs](https://nodejs.org/en/)  |
|  [expressjs](https://hn.algolia.com/?query=expressjs&sort=byPopularity&prefix=false&page=0&dateRange=all&type=story)  | [expressjs](https://medium.com/tag/expressjs)  | [expressjs](https://www.reddit.com/r/node/)  | [expressjs](https://www.quora.com/topic/Express-Node-js-web-framework)  |   [expressjs](https://stackoverflow.com/search?q=expressjs)   | [expressjs](https://github.com/sindresorhus/awesome-nodejs)  | [expressjs](https://www.lynda.com/Express-js-training-tutorials/2086-0.html)  |[expressjs](https://expressjs.com/)  |
|  [meteorjs](https://hn.algolia.com/?query=meteorjs&sort=byPopularity&prefix=false&page=0&dateRange=all&type=story)  | [meteorjs](https://medium.com/tag/meteor-framework/latest)  | [meteorjs](https://www.reddit.com/r/Meteor/)  | [meteorjs](https://www.quora.com/topic/Meteor-Javascript-platform)  |   [meteorjs](https://stackoverflow.com/search?q=meteor)  | [meteorjs](https://github.com/Urigo/awesome-meteor)  | [meteorjs](https://www.lynda.com/Meteor-tutorials/11118-0.html)  |[meteorjs](https://www.meteor.com/)  |
****************************
*****************************

Before getting into nodejs, lets learn about javascript history and basics of how it works; 
******************

![js-history](http://adrianmejia.com/images/history-javascript-evolution-es6.png)

******************************
> ## A Short History of JavaScript

> JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.

> In 1996 - 1997 JavaScript was taken to ECMA to carve out a standard specification, which other browser vendors could then implement based on the work done at Netscape. The work done over this period of time eventually led to the official release of ECMA-262 Ed.1: ECMAScript is the name of the official standard, with JavaScript being the most well known of the implementations. ActionScript 3 is another well-known implementation of ECMAScript, with extensions.

> The standards process continued in cycles, with releases of ECMAScript 2 in 1998 and ECMAScript 3 in 1999, which is the baseline for modern day JavaScript. The "JS2" or "original ES4" work led by Waldemar Horwat (then of Netscape, now at Google) started in 2000 and at first, Microsoft seemed to participate and even implemented some of the proposals in their JScript.net language.

> Over time it was clear though that Microsoft had no intention of cooperating or implementing proper JS in IE, even though they had no competing proposal and they had a partial (and diverged at this point) implementation on the .NET server side. So by 2003 the JS2/original-ES4 work was mothballed.

> The next major event was in 2005, with two major happenings in JavaScript’s history. First, Brendan Eich and Mozilla rejoined Ecma as a not-for-profit member and work started on E4X, ECMA-357, which came from ex-Microsoft employees at BEA (originally acquired as Crossgain). This led to working jointly with Macromedia, who were implementing E4X in ActionScript 3(ActionScript 3 was a fork of Waldemar's JS2/original-ES4 work).

> So, along with Macromedia (later acquired by Adobe), work restarted on ECMAScript 4 with the goal of standardizing what was in AS3 and implementing it in SpiderMonkey. To this end, Adobe released the "AVM2", code named Tamarin, as an open source project. But Tamarin and AS3 were too different from web JavaScript to converge, as was realized by the parties in 2007 and 2008.

> Alas, there was still turmoil between the various players; Doug Crockford — then at Yahoo! — joined forces with Microsoft in 2007 to oppose ECMAScript 4, which led to the ECMAScript 3.1 effort.

> While all of this was happening the open source and developer communities set to work to revolutionize what could be done with JavaScript. This community effort was sparked in 2005 when Jesse James Garrett released a white paper in which he coined the term Ajax, and described a set of technologies, of which JavaScript was the backbone, used to create web applications where data can be loaded in the background, avoiding the need for full page reloads and resulting in more dynamic applications. This resulted in a renaissance period of JavaScript usage spearheaded by open source libraries and the communities that formed around them, with libraries such as Prototype, jQuery, Dojo and Mootools and others being released.

> In July of 2008 the disparate parties on either side came together in Oslo. This led to the eventual agreement in early 2009 to rename ECMAScript 3.1 to ECMAScript 5 and drive the language forward using an agenda that is known as Harmony.

> All of this then brings us to today, with JavaScript entering a completely new and exciting cycle of evolution, innovation and standardisation, with new developments such as the Nodejs platform, allowing us to use JavaScript on the server-side, and HTML5 APIs to control user media, open up web sockets for always-on communication, get data on geographical location and device features such as accelerometer, and more. It is an exciting time to learn JavaScript. (Source: W3Schools)

> For more on JS * [js-history](https://github.com/gopala-kr/weekend-with-github/blob/master/Projects-Blogs/02-lets-complete-js-stack/js-history.md) * [js-memory-management](https://github.com/gopala-kr/weekend-with-github/blob/master/Projects-Blogs/02-lets-complete-js-stack/js-memory-management.md) * [js-engine-overview](https://github.com/gopala-kr/weekend-with-github/blob/master/Projects-Blogs/02-lets-complete-js-stack/js-engine-overview.md) * [event-loop-and-asynchronuous-programmming](https://github.com/gopala-kr/weekend-with-github/blob/master/Projects-Blogs/02-lets-complete-js-stack/js-event%20loop%20and%20the%20rise%20of%20Async%20programming.md) * [google-v8-enine](https://github.com/gopala-kr/weekend-with-github/blob/master/Projects-Blogs/02-lets-complete-js-stack/js-inside-the-V8-engine.md)


********************


## Nodejs

In simple words, Node.js is a very powerful JavaScript-based framework/platform for running JavaScript applications outside the browser built on Google Chrome's
JavaScript V8 Engine. It is used to develop I/O intensive web applications like video
streaming sites, single-page applications, and server-side web applications. Node.js is open
source, completely free, and used by thousands of developers around the world.

Many of the basic modules of Node.js are written in JavaScript. Node.js is mostly used to run real-time server applications.

The definition given by its official documentation is as follows:

>Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.?

Node.js also provides a rich library of various JavaScript modules to simplify the development of web applications.

The reason why Node.js was originally started is because Ryan Dahl was fed up with the disconnect between the client and the web server. Each time the client wanted to be updated with new information it had to query the web server (for example, to keep track of progress of a file upload). This had been a long-standing problem in the field of web development, but most developers just decided to deal with it. Node.js was the first real attempt at solving this problem at the root by enabling real-time communication between the client and the server. It was immediately well received, as shown by the enthusiastic reaction of the audience during the original Node.js launch presentation.

Its worth spending 1 hour time on [Ryan Dahl Node.js launch presentation](https://www.youtube.com/watch?v=jo_B4LTHi3I) before start learning it.

Since its inception, Node.js has surpassed many of its early expectations. The total amount of active contributors to the project itself increased each year to a record amount of about 480 contributors at the end of 2016. The number of downloads also continues to grow, with the total amount of downloads averaging at over 484,121 avg / day. source : https://nodesource.com/node-by-numbers

Because of the immense popularity of Node.js I wanted to study its architecture and how it is used to achieve some of the unique functionalities Node.js has to offer. my initial commitment was to complete it in one/two days. after diving in came to know that node itself takes a week.



> **Short history of nodejs**

> Node.js was created by Ryan Dahl and other developers working at Joyent in 2009. In 2011, the Node Package Manager, called NPM was released and it allowed for the sharing of open-source libraries. As the Node community grew, some conflicts started to emerge about the management of Node releases. The users wanted a project governed by the open-source community rather than a corporation. They also wanted to be able to incorporate the latest language and API features faster. So in December 2014, io.js created a fork of the Node.js project and went onto release several versions of io.js.

> Then in February of 2015, it was announced that a neutral Node.js foundation would be formed. A promise that was fulfilled in June of 2015 when Node.js and io.js voted to work together under the new Node.js foundation. The Node.js foundation is made up of several large companies including IBM, Microsoft, PayPal, Groupon and, of course, Joyent. It's referred to as a collaborative project by the Linux foundation. Officially on September 14, 2015, the Node.js foundation announced that the Node.js and io.js would be combined in a single code base and released as Node.js version 4.0.

> Included in the new release are a ton of new ES6 features and a plan for a regular release cycle. From the start of the Node.js project, a common refrain was that all versions of Node.js would be 0 releases, .08, .010, .012 until the project could release a stable version 1.0 with no breaking changes. Well, with the release of Node.js version 4.0, the much-awaited version 1.0 never happened. But now the community is united with the official Node release at version 4.0. and the present version is 6.11.4.


### How nodejs works

les take a look into how Node.js works and why it is so fast in simple words by taking an example of two restaurants(a popular example). The first restaurant is Apache Steaks and Chops. It is a big, nice, fancy restaurant. In this restaurant, every new guest represents a new user, and making an order is like making a request. If I place an order for a salad, the manager will need to hire a new waiter to take care of me. In this restaurant, our waiter represents a thread. We are going to have our own waiter, our own thread, and they will handle all of our orders. This is similar to how Apache works.

* Every request is single-threaded. After placing the order, the waiter will take the order to the kitchen and give it to the chef. And now the waiter just waits. He won't do anything else until the chef is finished making the food. I would like to order a glass of water, but I can't order anything until the chef finishes making that salad. 
* The chef is blocking me from being able to simply order a glass of water. In this analogy, the chef represents the file system or a data store. In Apache, the single thread waits for the file system to finish reading files before it can do anything else.

* We refer to this as blocking. Finally, my salad is ready. My waiter brings me the food. I can order my glass of water, and my waiter also brings me that, too. My request has been served. And now the manager is firing my waiter because they are not needed anymore. Now, when this restaurant gets busy for dinner service, every guest has their own waiter, which is pretty nice. That is pretty good service, but the waiters are mostly hanging around the kitchen and waiting for the chef to make the food. If this restaurant gets really popular, it requires a lot of space to expand because more guests means more waiters.

* Now, let's take a look at this other cafe, Chez Node. At this cafe, there is only one waiter because Node.js is single-threaded. Here, we can order some crepes. We can see that our waiter places the order for the food, then moves on to take an order from another new table. Hmm, this single thread services all of the restaurant guests. That is pretty cool. When my crepes are ready, the chef rings a bell, and our waiter goes and gets the crepes and delivers them to me. He then proceeds to take another order from a new table. When their food is ready, the waiter will bring it to them as soon as he can.

* We can say that this waiter behaves asynchronously. Everything this waiter needs to do represents a new event, a new table, placing orders, delivering orders. These are all events, and they will get handled in the order that they are raised. Our waiter does not wait. There is no blocking. Our single waiter is busy, busy, busy, but he is killing it because he can multitask. This is what it means when we say nonblocking, event-driven IO. We have a single thread that will respond to events in the order that they are raised.

* This thread behaves asynchronously because it does not have to wait for resources to finish doing what they're doing before our thread can do anything else. If this cafe gets popular, we can simply franchise it. Chez Node can easily be expanded by simply duplicating or forking the restaurant into a neighboring space. And this is precisely how we host Node.js applications in the cloud. Now, remember, Node.js is single-threaded. All of the users are sharing the same thread. Events are raised and recorded in an event queue and then handled in the order that they were raised.

Node.js is asynchronous, which means that it can do more than one thing at a time. This ability to multitask is what makes Node.js so fast and one of the reasons so many developers are building their web applications with Node.js.

****************************

### Features of Node.js
Following are some of the important features that make Node.js the first choice of software
architects.
* Asynchronous and Event Driven − All APIs of Node.js library are asynchronous,
that is, non-blocking. It essentially means a Node.js based server never waits for
an API to return data. The server moves to the next API after calling it and a
notification mechanism of Events of Node.js helps the server to get a response from
the previous API call.
* Very Fast − Being built on Google Chrome's V8 JavaScript Engine, Node.js library
is very fast in code execution.
* Single Threaded but Highly Scalable − Node.js uses a single threaded model
with event looping. Event mechanism helps the server to respond in a non-blocking
way and makes the server highly scalable as opposed to traditional servers which
create limited threads to handle requests. Node.js uses a single threaded program
and the same program can provide service to a much larger number of requests
than traditional servers like Apache HTTP Server.
* No Buffering − Node.js applications never buffer any data. These applications
simply output the data in chunks.

> Node.js = Runtime Environment + JavaScript Library  

![Different parts of Node.js](https://www.javatpoint.com/js/nodejs/images/what-is-nodejs.png)


### System scope(**Where to Use Node.js?**)

According to their own website, Node.js was designed to build scalable network applications. Node.js is mainly meant to provide developers with the foundations for common server-side functionalities, for example:

* Computer networking
● I/O bound Applications
● Data Streaming Applications
● Data Intensive Real-time Applications (DIRT)
● JSON APIs based Applications
● Single Page Applications

Node.js is very lightweight and many higher-level functionalities are intentionally relegated to the many packages that are offered through its package ecosystem (called npm), which provides access to the world's largest collection of open source libraries and frameworks.

### Development

There are different entities that are related to the actual development of Node.js, such as programming languages and testing.

**Programming languages**

Node.js is almost entirely written in JavaScript. It uses Google's V8 engine to execute all the JavaScript code, but since this engine is itself written in C++, some parts of Node.js's codebase that interact directly with this engine are also written in C++. Finally, Python is used to run many of the automated tests for Node.js.

**Dependencies**

There are a number of libraries or products that Node.js explicitly depends upon. Since Node.js was meant to be lightweight it offers only the most basic necessities for a product of its kind out of the box and thus, it does not have too many dependencies. Instead, it relies on the wide variety of additional plugins and libraries offered through npm, which can be used to extend the functionality of a Node.js application with many standardized solutions to common problems.

![nodejs](https://github.com/gopala-kr/weekend-with-github/blob/master/Projects-Blogs/02-lets-complete-js-stack/nodejs_architecture.JPG)
<ul>
                                                                <li><a href="https://github.com/libuv/libuv" target="_blank">libuv</a>: Node.js is asynchronous and libuv provides a consistent interface for common asynchronous tasks across all supported platforms.</li>
                                                                <li><a href="https://github.com/c-ares/c-ares" target="_blank">c-ares</a>: a library for asynchronous DNS requests.</li>
                                                                <li><a href="https://github.com/openssl/openssl" target="_blank">openssl</a>: a library of cryptographic functions for security purposes.</li>
                                                                <li><a href="https://github.com/nodejs/http-parser" target="_blank">http parser</a>: parses HTTP requests and responses.</li>
                                                                <li><a href="https://v8docs.nodesource.com/" target="_blank">v8</a>: the Javascript engine used by Node.js to run all of its JavaScript code.</li>
                                                                <li><a href="https://github.com/madler/zlib" target="_blank">zlib</a>: a library used for (de)compression.</li>
                                                            </ul>
                                                            <p><strong>Tools</strong></p>
                                                            <p>In addition to the dependencies mentioned above, Node.js makes use of a couple of additional tools. These are not dependencies in the sense that Node.js cannot work without them, but can be thought of as additional features that enrich the Node.js experience.</p>
                                                            <ul>
                                                                <li><a href="https://docs.npmjs.com/" target="_blank">npm</a>: the package manager of Node.js that offers access to a multitude of open source libraries.</li>
                                                                <li><a href="https://github.com/nodejs/node-gyp" target="_blank">gyp</a>: a build system to build those parts of Node.js and its dependencies that require compilation.</li>
                                                                <li><a href="https://github.com/google/googletest" target="_blank">gtest</a>: a unit testing suite for C and C++ code.</li>
                                                            </ul>
                                                            <p><strong>Competitors</strong></p>
                                                            <p>Node.js is of course not the only platform that provides server-side functionalities. The following is a list of competitors that provide in some way the same functionalities that Node.js provides:</p>
                                                            <ul>
                                                                <li><a href="http://php.net/" target="_blank">PHP</a></li>
                                                                <li><a href="https://golang.org/" target="_blank">Golang</a></li>
                                                                <li><a href="http://vertx.io/" target="_blank">Vert.x</a></li>
                                                                <li><a href="http://projectreactor.io/" target="_blank">Reactor project</a></li>
                                                                <li><a href="https://celluloid.io/" target="_blank">Celluloid-io</a></li>
                                                                <li><a href="http://reactphp.org/" target="_blank">Reactphp</a></li>
                                                                <li><a href="http://cyclone.io/" target="_blank">Cyclone.io</a></li>
                                                            </ul>
                                                            <h3 id="users">Users</h3>
                                                            <p>The users of Node.js can be divided into two subcategories. The individual community and enterprise.</p>
                                                            <p><strong>Individual community</strong></p>
                                                            <p>The individual community are the types of users that uses Node.js as hobby or for research. They do not intend to make money by using Node.js. Such users are developers and universities.</p>
                                                            <p><strong>Enterprise</strong></p>
                                                            <p>Enterprise are the users who do use Node.js as a tool in their company to help improve their product. Some major companies that use Node.js commercially are </p>
                                                            <ul>
                                                                <li>Netflix</li>
                                                                <li>PayPal</li>
                                                                <li>Uber</li>
                                                                <li>IBM</li>
                                                                <li>Microsoft</li>
                                                            </ul>
                                                            <h3 id="feedback--developers">Feedback &amp; Developers</h3>
                                                            <p>For real-time discussion about Node.js development there is the #node.js IRC channel on the irc.freenode.net server. For general communication to all people working <em>with</em> Node.js and not just <em>on</em> Node.js, they also have a number of communication channels:</p>
                                                            <ul>
                                                                <li>The official <a href="https://twitter.com/nodejs" target="_blank">Node Twitter account</a> through which they keep their followers up to date. </li>
                                                                <li>A weekly mailing list called Node Weekly, detailing the latest events within the Node.js community. </li>
                                                                <li>NodeUp, a podcast that covers the latest Node.js-related news.</li>
                                                            </ul>
                                                            <p>Feedback and help can be found on various platforms such as StackOverflow, GitHub and Google Groups, with all three platforms having an active community for Node.js. </p>
                                                            <p><strong>Version control &amp; Issue tracking</strong></p>
                                                            <p>Node.js is actively being developed on <a href="https://github.com/" target="_blank">GitHub</a> using Git as its version control system. The same system is also used to track issues, report bugs and discuss features.</p>
                                                            
                                                                <br>
                                                                <br>
                                                            </p>



### Development View

The Development View details how the architecture supports the software development process and which development guidelines are to be taken into account by all developers. Development views communicate the aspects of the architecture of interest to those stakeholders involved in building, testing, maintaining, and enhancing the system.

**Module Organization**

Node.js is both a product of its own as well as a service upon which other applications can be built. Because of this, it is useful to consider the design choices made for both in our analysis. Some of the choices made at a basic level in the Node.js architecture affect how applications using Node.js should be developed. Figure 4 shows a diagram depicting the high-level layered structure of Node.js as described in [7].

![Module Organization](https://delftswa.gitbooks.io/desosa-2017/content/node/images-node/module_organization.jpg)

The Module and Application Ecosystem refers to the collection of all software that was built using Node.js. It is connected to all other layers in the diagram, which signifies that in theory developers of Node.js applications are free to connect to any of Node.js' layers. In practice most applications limit themselves to accessing only the Node.js Core Library.

This Core Library contains a variety of JavaScript files that simplify the development process for Node.js users. It offers a lot of common functionality out of the box, such as cryptography, network connections, event handling, etc. A part of the code in this library is marked as "internal", which hides a part of the API from the end user. The end user can still call these API functions if they wanted to, but since the format of these APIs can change without notice, they are marked as internal to discourage people from doing so.

The Application Binary Interface (commonly referred to as the ABI) is a relatively new part of Node.js [8]. The idea behind the ABI is to provide the end user with a stable API through which they can access the underlying JavaScript engine. At this point that engine is Google's V8, but the ABI allows Node.js to potentially switch to a different engine in the future. Also the ABI ensures that no new version of Node.js is required if changes are made to Google's V8 engine. The Binary Abstraction Layer serves a similar purpose, but it abstracts the ABI even further. On top of that, it also provides abstracted access to other dependencies aside from the JavaScript engine.

### Design Patterns

This section discusses some of the design patterns used in Node.js.

**Singleton Pattern**

The singleton pattern limits the number of instances of a particular object to just one. Node.js uses module caching to implement the Singleton pattern and caches a module after the first time it is loaded. Every subsequent call to a module using require(<module_name>) returns the same instance of the cached module. In that way, these modules can thus be thought of as singletons.

**Dependency Injection Container**

Application modules built on Node.js typically use a backbone object that acts as a dependency injection container. Services such as logging and database access which are required throughout almost any application built on Node.js are attached to the backbone object and this object in turn can be used by the modules that require these services. In this way, modules have their dependencies injected from the outside through the use of the backbone object. The module is thus isolated from any changes in its dependencies.

**Event-Driven Programming**

In an event-driven program the flow of the application is the result of events that are fired or states that are changed. In general there is one single, global mechanism that listens for such events and whenever one is fired it will call the corresponding callback function. In Node.js this mechanism is called the Event Loop, which we will discuss in great detail in the Functional View and the Performance and Scalability Perspective.

<h2 id="codeline-organization">Codeline Organization</h2>
                                                                    <p>In this section we will give a brief overview of the source code structure of Node.js, also called codeline organization. A well-defined codeline organization allows for automated builds, tests and releases. This has the potential of greatly simplifying the development process. The structure of Node.js&apos; code is as follows:</p>
                                                                    <table>
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Directory</th>
                                                                                <th>Description</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>benchmark</td>
                                                                                <td>This directory contains the code and data for benchmarking and measuring the performance of different Node.js implementations. The benchmarks are classified into 25 directories depending on the subsystem they benchmark. It also includes a miscellaneous directory for benchmarks that do not clearly fit in one of the predefined categories.</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>deps</td>
                                                                                <td>This directory contains the source code of the third party components that Node.js depends on, some of which are shown in <a href="#module_organization">Figure 4</a>.</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>doc</td>
                                                                                <td>This directory contains all the documentation for Node.js, such as API explanations, changelogs, development guides, etc.</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>lib</td>
                                                                                <td>This directory contains the JavaScript modules used in Node.js. The modules in lib/internal are meant for use in Node.js core and are not meant to be accessed from user modules.</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>src</td>
                                                                                <td>This directory contains the bindings that expose the C/C++ libraries to JavaScript.</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>test</td>
                                                                                <td>This directory consists of the code used to test Node.js. The <code>common.js</code> module in this folder contains a number of helper functions for commonly occurring tasks in tests.</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>tools</td>
                                                                                <td>This directory contains additional tools that are useful for development with Node.js, like build functionality, automated testing libraries, etc.</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>

### Functional View

In this section we will describe the most important and unique functionalities of Node.js. We will also address the architectural elements and choices that make these functions possible. Node.js indirectly offers vast amounts of functionality through the myriad of applications that have been built upon it, such as chat bots, application monitoring and data streaming. However, since our focus is on Node.js itself we are mainly interested in its architecture and will therefore also focus solely on the functionalities offered directly to developers working with Node.js.

**Threading**

The threading mechanism of Node.js is quite different from other webservers. For example, webservers based on PHP and ASP.NET typically create a new thread for each client request. That client request thus causes the entire program to be reinstantiated on the thread for that specific request. So while the webserver is definitely multi-threaded, each program instance served to a client operates only on a single thread.

As we mentioned in the Development View, Node.js is built upon libuv, which allows it to perform asynchronous or non-blocking I/O operations. Because of this, Node.js is able to use only a single "calling thread" that serves all incoming client requests without causing independent requests to block each other. Any work that needs to be done is passed off to a thread pool where it is assigned to a separate thread on which it will be executed. After the work has been done, control is ceded back to the calling thread to provide the client with the appropriate response to their original request [9].

In a later section on the Performance & Stability Perspective we will discuss the advantages and disadvantages that these two approaches carry with them. For now it suffices to emphasize the differences from an architectural point of view. We will now elaborate on the calling thread, commonly referred to as the event loop.

**Event Loop**

As we previously discussed in the Development View, Node.js is based on the event-driven programming paradigm [10]. This becomes clear through the so-called event loop, a process that is constantly accepting incoming requests and providing responses to previously accepted requests. In between accepting a request and responding to it, the event loop will refer work that needs to be done to one of the background workers, as mentioned in the previous subsection on Threading. Node.js makes good use of JavaScript's support for callbacks by allowing a callback to be sent along with each such task. Figure 5 pictures the execution model as we have discussed it so far.

![Event Loop](https://delftswa.gitbooks.io/desosa-2017/content/node/images-node/NodeThreads.png)

Each of these callbacks is registered to an Event Queue, where it waits to be called as soon as the corresponding task has been finished. These callbacks are all executed on the main thread again, as they are responsible for providing the client with a response. Therefore it is advisable to keep the callback functions as lightweight as possible, as they will cause delay for other simultaneous requests. As long as there are callbacks in this queue, the event loop will remain active to respond to all outstanding client requests. Figure 6 shows the interplay between the mechanisms behind the Event Queue, the event loop and the thread pool.

![Single Threaded event loop model](https://delftswa.gitbooks.io/desosa-2017/content/node/images-node/nodejs-event-loop.png)

<p>In Node.js every object that can fire events is an instance of the <code>EventEmitter</code> class. Each of these objects has an <code>on()</code> method in which a type of event can be specified along with the appropriate callback such that each time the named event is fired, the corresponding callback is called. If multiple callbacks have been assigned to the same event, all of them will be executed in a synchronous manner (according to the first in, first out principle). If necessary developers can override this procedure by using the <code>setImmediate()</code> method for a callback to switch to an asynchronous model.</p>
                                                                                <p>Some of the core modules of Node.js that extend the <code>EventEmitter</code> class are the <code>Server</code>, <code>Socket</code>, <code>http</code> and <code>fs</code> (short for File System) modules. For all of these it is easy to imagine how the event-based way of programming enables the system as a whole to function in a non-blocking way. Without events, the program would have to postpone executing any of its subsequent code until it has received a response from a remote server or until a file has been read completely. By specifying callbacks for such events, the main program can continue being executed, only returning to the callback when new data has become available.</p>
                                                                                <h2 id="package-management">Package Management</h2>
                                                                                <p>Node.js uses a package manager in order for developers to add modules to their applications. These modules add new functionality to existing applications. This new functionality can help developers create their app or enhance their app for the users.
                                                                                    <br> Although most packages are modules, there are some packages that are not modules for they have no index.js or main field in the package.json file for use in Node.js programs[<a href="#npmweb">11</a>]. This way the Node.js program cannot use the <code>require</code> function to load the package and is thus not a module.</p>
                                                                                <h3 id="npm">npm</h3>
                                                                                <p>When installing node, the package manager called <em>npm</em> is automatically installed as well. npm is written in JavaScript and was developed by Isaac Z. Schlueter. He saw that module packaging was not done well in node compared to other platforms. This was the reason for him to come up with npm[<a href="#npmwiki">12</a>]. npm makes it easy for developers to share, reuse and update shared JavaScript code and uses nested dependencies as shown in <a href="#nesteddependencies">Figure 7</a>
                                                                                    <br>
                                                                                </p>
                                                                                
                                                                                
                                                                                
![npm](https://delftswa.gitbooks.io/desosa-2017/content/node/images-node/nested_dependencies.png)
                                                                                    <p>npm comes with a command line client that interacts with a remote registry. The <a href="https://en.wikipedia.org/wiki/CommonJS" target="_blank">CommonJS</a> format is used for the packages on the registry along with a metadata file, package.json. There is no screening for the packages on the registry, so anyone can upload their package. Because of this, the quality of packages is very diverse. Some security risks are present because of this rule. Although the npm server admins can delete malicious packages, deleting packages may cause failure of applications using those packages.
                                                                                        <br> npm can also be used for managing applications locally. By defining a package.json file for a node application, dependencies can be automatically downloaded and updated by using npm. Even versions can be set for packages, if an application only works with a certain version, so that npm will not update that package and only installs that version of the package.</p>
                                                                                    <h3 id="other-package-managers">Other package managers</h3>
                                                                                    <p>Next to npm there are other third-party package managers that can be used with node. Yarn for example is package manager that was released by Facebook. All these package managers use the npm public registry, but are different in the client-side experience. </p>
                                                                                
<h1 id="performance-and-scalability-perspective">Performance and Scalability Perspective</h1>
                                                                                        <p>This section provides a detailed view on how the architecture of Node.js enables the development of highly scalable server-side web applications. In order to understand how Node.js achieves scalability, it is first necessary to understand the drawbacks of traditional web server architectures when handling a large number of concurrent requests that are I/O or network intensive. Ryan Dahl, the creator of Node.js provides an insight into the design limitations of traditional web server frameworks.</p>
                                                                                        <pre><code class="lang-txt"> &quot;Turns out, a lot of the frameworks were designed in a way that they made the assumption a
  request &#x2014; response is something that happens instantaneously and that your entire web
  development experience should be abstracted as a function. You get a request, you return a
  response. That is the extent of your context.&quot;&#x2014; Ryan Dahl
</code></pre>
                                                                                        <p>As we pointed out in the previous section, this type of request/response architecture uses multi-threading to provide concurrent handling of requests. However, since a new thread is created for each request and because of the use of blocking I/O calls, such an architecture cannot scale up efficiently. The sections below discuss how the event-driven architecture of Node.js differs from this traditional approach with respect to performance and scalability.</p>
                                                                                        <h2 id="multi-threaded-requestresponse-model-with-blocking-io">Multi-Threaded Request/Response Model with Blocking I/O</h2>
                                                                                        <p><a href="#SynchronousIO">Figure 8</a> shows the request processing mechanism in web servers with multi-threaded synchronous I/O model. Here, a new thread is created for each incoming request at the server. The thread blocks when I/O operations are being executed. Though this type of thread-per-request model provides concurrent handling of requests, it is evident from <a href="#SynchronousIO">Figure 8</a> that a large amount of memory and CPU is tied-up without use when the thread blocks while waiting for I/O or network calls to return. Also, as the number of concurrent requests increases, the overhead of thread management becomes high.</p>
                                                                                  

![Synchronous I/O](https://delftswa.gitbooks.io/desosa-2017/content/node/images-node/SynIO.png)
                                                                                                <br>
                                                                                                <em>Figure 8: Synchronous I/O (from <a href="http://bijoor.me/2013/06/09/java-ee-threads-vs-node-js-which-is-better-for-concurrent-data-processing-operations/" target="_blank">http://bijoor.me/2013/06/09/java-ee-threads-vs-node-js-which-is-better-for-concurrent-data-processing-operations/</a>)</em></p>
                                                                                            <h2 id="single-threaded-asynchronous-io-model">Single Threaded Asynchronous I/O Model</h2>
                                                                                            <p><a href="#AsynchronousIO">Figure 9</a> shows the request processing mechanism in web servers which run a single thread and perform non-blocking I/O calls. Node.js uses a similar concurrency model which makes it more scalable than the multi-threaded model. This model uses a single thread which services all the incoming requests at the web server. The I/O operations are executed as events and do not block the calling thread. It is clear from <a href="#AsynchronousIO">Figure 9</a> that this model utilizes the CPU more efficiently than the multi-threaded model. Also, since it uses a single thread, it is more memory efficient compared to the multi-threaded model.</p>
  
  
  ![Asynchronous I/O](https://delftswa.gitbooks.io/desosa-2017/content/node/images-node/ASynIO.png)
  <p>
                                                                                                    <br>
                                                                                                    <em>Figure 9: Asynchronous I/O (from <a href="http://bijoor.me/2013/06/09/java-ee-threads-vs-node-js-which-is-better-for-concurrent-data-processing-operations/" target="_blank">http://bijoor.me/2013/06/09/java-ee-threads-vs-node-js-which-is-better-for-concurrent-data-processing-operations/</a>)</em></p>
                                                                                                <p>At the backend however, threads are still required to execute the various I/O operations in parallel. But this complexity is hidden away from the Node.js application which makes programming on Node.js much easier. Also, since this model moves away from the thread-per-request architecture, it does not incur the overhead of thread management.</p>
                                                                                                <p>Despite its superior concurrency model, the Node.js architecture is not suitable to scale across multiple cores in a system. Since Node.js uses a single thread to service all incoming requests, it cannot leverage multiple cores in the system by distributing the load across cores. Listed below are two mechanisms to overcome this.</p>
                                             
                                             
                                             
                                                                                                                                                                               
                                                                                                   
                                                                                             
