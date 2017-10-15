  
 
 ## React ecosystem : react, redux, relay, graphql, react-native
 
I have given soometime to explore react ecosystem from last friday. Yet react is a big tech ecosystem to learn completely in one week, I wanted to understand the core concepts behind it. I have bit of experience in full-stack web apps using SAP technologies(past 3 years): webdypro applications(frontend is drag and drop UI library, backend completely in ABAP); CRM webui ; Hybris(an e-commerce platform - front end is js stack, backend is CRM); extensive experience in webservices and API's; bit of learned knowledge on Fiori app development using SAPUI5 library on HCP. My curiousnes of learning has drawn me towards open source libraries and frameworks. I have been fascinated by concept of open source and its potential impact in the world of computer technologies; I have started exploring it bit-by-bit.

I always use my below table to get gist of anything new in technology:

 | HN        | Medium         | Reddit |  Quora-QA  | Stack-Overflow QA| Awesome-gh | Online-Courses (lynda.com)| Official-Docs |
| ------------- |:-------------:| -----:| -----:|-----:|-----:|-----:| -----:|
|  [react](https://hn.algolia.com/?query=react&sort=byPopularity&prefix&page=0&dateRange=all&type=story)  | [react](https://medium.com/tag/react?source=related)  | [react](https://www.reddit.com/r/reactjs/)  | [react](https://www.quora.com/topic/React-JavaScript-library)  |  [react](https://stackoverflow.com/search?q=react)    | [react](https://github.com/enaqx/awesome-react)  | [react](https://www.lynda.com/React-js-training-tutorials/7049-0.html)  | [react](https://reactjs.org/)  |
|  [redux](https://hn.algolia.com/?query=redux&sort=byPopularity&prefix&page=0&dateRange=all&type=story)  | [redux](https://medium.com/tag/redux)  | [redux](https://www.reddit.com/r/reduxjs/)  | [redux](https://www.quora.com/topic/Redux-JavaScript-library)  |   [redux](https://stackoverflow.com/search?q=redux)   | [redux](https://github.com/xgrommx/awesome-redux)  | [redux](https://www.lynda.com/Redux-tutorials/11496-0.html)  | [redux](http://redux.js.org/)  |
|  [relay](https://hn.algolia.com/?query=relay&sort=byPopularity&prefix&page=0&dateRange=all&type=story)  | [relay](https://medium.com/tag/relay)  | [relay](https://www.reddit.com/r/relay/)  | [relay](https://www.quora.com/topic/Relay-JS-Framework)  |   [relay](https://stackoverflow.com/search?q=relay)  | [relay](https://github.com/expede/awesome-relay)  | [realy](https://www.lynda.com/GraphQL-tutorials/650000-0.html)  | [relay](https://facebook.github.io/relay)  |
 |  [graphql](https://hn.algolia.com/?query=graphql&sort=byPopularity&prefix&page=0&dateRange=all&type=story)  | [graphql](https://medium.com/tag/graphql)  | [graphql](https://www.reddit.com/r/graphql/)  | [graphql](https://www.quora.com/topic/GraphQL)  |   [graphql](https://stackoverflow.com/search?q=graphql)  | [graphql](https://github.com/chentsulin/awesome-graphql)  | [graphql](https://www.lynda.com/GraphQL-tutorials/650000-0.html)  | [graphql](http://graphql.org/)  |
|  [react-native](https://hn.algolia.com/?query=react%20native&sort=byPopularity&prefix&page=0&dateRange=all&type=story)  | [react-native](https://medium.com/tag/react-native)  | [react-native](https://www.reddit.com/r/reactnative/)  | [react-native](https://www.quora.com/topic/React-Native-1)  |   [react-native](https://stackoverflow.com/search?q=react+native)  | [react-native](https://github.com/jondot/awesome-react-native)  | [react-native](https://www.lynda.com/React-Native-tutorials/11718-0.html)  | [react-native](https://facebook.github.io/react-native/)  |


React is a beautiful JavaScript library for building frontend user interfaces. React allows developers to create large web-applications that use data and can change over time without reloading the page. It aims primarily to provide speed, simplicity, and scalability. React processes only user interfaces in applications. This corresponds to View in the Model-View-Controller (MVC) pattern, and can be used in combination with other JavaScript libraries or frameworks in MVC, such as AngularJS. [Source : wikipedia]

React was created by Jordan Walke, a software engineer at Facebook. He was influenced by Angular and XHP, an HTML component framework for PHP. It was first deployed on Facebook's newsfeed in 2011 and later on Instagram.com in 2012. It was open-sourced at JSConf US in May 2013.

React is maintained by Facebook, Instagram and a community of individual developers and corporations.

There are almost 2K blogs,articles and tutorials teaching about react every month and it is most trending buzz word in hacker news commuinity. Stack Overflow has released its much-anticipated Developer Survey for 2017. This year, over 64,000 developers took part in the survey and shared their preferences. below are the stats for survey on frameworks and libraries; react stands in the top list.

![survey](https://ingeno.io/wp-content/uploads/2017/03/stackoverflow_2017survey1.png)

React has been adopted by top giants Facebook, Instagram, NetflixNY, TimesKhan Academy, Codecademy, WhatsApp, Vivaldi,  Browser Dropbox,  Yahoo Mail and startup communities [more](https://github.com/facebook/react/wiki/sites-using-react). and react has been a big competetor for google's AngularJs MVC framework.

React is just front-end UI library. Inorder to make complete full stack react application facebook and other communities provides supporting libraries and design patterns, such as flux, redux, relay, graphql.React can also be used other frameworks.

Lets explore them in details...

## React:

As explained already react is only the View layer, which is means you have only the V in the MVC — Model-View-Controller architecture. All the while you see that React is mentioned along with other frameworks, but it offers just the View.

React gives you the template language and a few function hooks to render HTML. Since it is component based, you can compose an application with React, and just specify how you want your component to look like.

React will keep it updated; even the underlying data changes. The core principles of React are (1) Flexibility, (2) Efficiency and (3) Declarative code.

As React is flexible, you can use it in several projects, create new apps and even use it within the existing code base, without doing a rewrite.
There are few pre-quesites and key-concepts we need to master before staring with building apps.

Familiarity with HTML, JavaScript and ECMAScript6 (ES6).

The five key concepts are:

Components
JSX
Props & State
The Component API
Component Types

Blogpost [Master these five concepts, then master React](https://medium.freecodecamp.org/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3) this complete overview on five key-concepts.

Brief overview:
* A React codebase is made up of components.
* These components are written using JSX.
* Data flows from parent to children, except when it comes to state, which originates inside a component.
* Components possess a small set of lifecycle and utility methods.
* Components can also be written as pure functions.
* You should keep data logic and UI logic in separate components.
* Higher-order components are a common pattern for giving a component access to new tools.

 More on [react-basic](https://github.com/reactjs/react-basic)

**What is Flux?**
-------
We learnt that React takes care of V or the View part in MVC. Now, what about the M or the Model part? Flux, a programming pattern takes care of the M in the MVC.
It is the architecture responsible for creating data layers in JavaScript applications and building client-side web applications. Flux complements React’s Composable view components through its unidirectional data flow.
You can also say that Flux is more of a pattern, than a framework and it has four main components (we will go in depth later):
Dispatcher
Stores
Views (React components)
Action
This is not like the general MVC that you see in other frameworks. But yes, there are Controllers, but they are mostly Controller views. Views are at the top of the hierarchy and they retire the data and functionality and pass them down to their children.
Flux follows the concept of unidirectional data flow making it much easier to zero in of where the error lies. The data goes through a strict pipeline through your application. React and Flux are actually two of the most popular frameworks that follow the concept of unidirectional data flow.
While React makes uses of a virtual DOM object to render changes, Flux does it differently. In Flux, the interactions with user interface will trigger a series of actions that would alter the application data. The View will get alerts on the changes.


![Flux application architecture](https://cdn-images-1.medium.com/max/880/0*i7yoq4uE0Kk62bfa.png)


**Flux vs. MVC**

Now that we have both MVC and Flux patterns, the next question would be which one is a better choice. Let’s go a little deeper into this:

There are different kinds of MVC patterns, but the basic concept of each one remains the same:
* Model — Maintains the behavior & data of an application domain
* View — The display of the model in UI
* Controller — Uses the user input, manipulate the model & update the view

![MVC](https://cdn-images-1.medium.com/max/880/0*Ift_ZYTPqpLd4AP5.png)


The main problem with MVC is that it doesn’t scale well for Facebook’s huge code base. Flux proved to be a better choice because it is all about tweaking the flow inside the app. MVC has stood the test of time, and ever since its launch in 1976, it has been the favorite for many developers. Even in the recent years, developers have been using for several projects. But MVC couldn’t handle code base that Facebook needed, and hence Flux started ruling the roost. Let’s take a look at the main factors due to which Flux has an upper hand over MVC design pattern.

The Flow — Flux is quite strict about the flow of application. The data Dispatcher puts forth some strict rules and exceptions to govern the flow. There is no such thing in MVC, and the flows are implemented differently.

![flux](https://cdn-images-1.medium.com/max/880/0*M-SY5eww-OW9xbMs.png)

Unidirectional Flow in Flux — While MVCs are bidirectional in their flow, in Flux, all the changes goes in the same direction through data Dispatcher. The Store cannot change by itself, this is the same concept for all other Actions. Changes to be made have to go through the Dispatcher through Actions.

Store — While MVC cannot model single objects, Flux can do it to store any application related data.
When it comes to choosing Flux or MVC, Flux would be a better choice because it is very easy to understand and works with very minimum code usage. Flux allows you to structure your app effectively.

This is something to look forward to because React’s programming language is integrated with a very huge code base that is seemingly endless and a huge run time complexity that developers just hate.

Once you understand the cons of bidirectional data flow, it would be easier to understand why unidirectional data flow is the best.
In the bidirectional data flow, you have the typical data flow — Model-View-Controller. But when applications became more complex, the Controller begins to feel the burden.

The Controller takes the huge responsibility of maintaining both the application state and the data. Also, the cascading updates makes the app really difficult to understand and debug. In the end, you have an application whose results are totally unpredictable.

With unidirectional data flow, this problem is mitigated, and eventually, predictable application state is achieved. When the data flow is unidirectional, changes in the application view layer will trigger an action in the data layer. These changes will then be reflected in the View. The View does not directly affect application data.

[[more on flux](https://github.com/gopala-kr/weekend-with-github/blob/master/Projects-Blogs/01-react-ecosystem/Flux-architecture.md)]

## Redux

According to Github, Redux is a predictable state container for JavaScript apps. Many of the concepts are similar to functional programming, and all the data is kept in a single store. It is one of the popular implementations of flux architecture.

Irrespective of the application size, Redux is always a single object, quite unlike Flux, which keeps separate stores for different kinds of data. If there are manipulations to be made on the data, it doesn’t affect the state. In this way, the state is immutable.
All updates and manipulation are done on a state tree. But this does not make the application slow as the data can be shared along several versions of the state tree.

The updates on the application state is done through Actions, which are plain objects themselves, but contains a type property depicting the kind of action performed. The data that describes the action will also be included.

The Store’s Dispatcher will dispatch the action and from there, it goes to the Reducer, and then to the current state tree. Here, the actions of the application would be described — the different things the application can do. Just a single reducer would be enough for the state transformation and action.

[[more on redux](https://github.com/gopala-kr/weekend-with-github/blob/master/Projects-Blogs/01-react-ecosystem/Redux.md)]

## Relay




## GraphQL

[GraphQL](http://graphql.org), a query language that is starting to get more and more attention. Facebook, who internally used GraphQL since 2012 and released a first specification and reference implementation of GraphQL in 2015 announced GraphQL to be [production ready] in September 2016. What followed is a trend of more and more companies starting to use GraphQL, such as [GitHub](https://youtu.be/hT-4pVmkGt0), [Coursera](https://youtu.be/JC-UJwBKc2Y) and [Shopify](https://youtu.be/Wlu_PWCjc6Y).

One of the main benefits of using GraphQL is how so called queries allow clients to specify their data requirements in a declarative way. Instead of collecting all the data from different endpoints, as is usual with REST, queries allow an exact and fine-grained selection of data fields that are then resolved by the server. This leads to prevention of data over- and underfetching, two common problems of REST.

[Complete tutorial](https://www.howtographql.com/basics/2-core-concepts/)

Next steps : [building pokedex](https://github.com/shekhargulati/52-technologies-in-2016/blob/master/43-graphql/README.md)


## React Native




## Next steps:




 






















