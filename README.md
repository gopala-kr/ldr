  
 
 ## react ecosystem : react, redux, relay, graphql, react-native
 
I have given soometime to explore react ecosystem from last friday. Yet react is a big tech ecosystem to learn completely in one week, I wanted to understand the core concepts behind it. I have bit of experience in full-stack web apps using SAP technologies(past 3 years): webdypro applications(frontend is drag and drop UI library, backend completely in ABAP); CRM webui ; Hybris(an e-commerce platform - front end is js stack, backend is CRM); extensive experience in webservices and API's; bit of learned knowledge on Fiori app development using SAPUI5 library on HCP. My curiousnes of learning has drawn me towards open source libraries and frameworks. I have been fascinated by concept of open source and its potential impact in the world of computer technologies; I have started exploring it bit-by-bit.

I always follow my below table to get a gist of anything new in technology:

____________________________
 | HN        | Medium         | Reddit |  Quora-QA  | Stack-Overflow QA| Awesome-gh | Online-Courses (lynda.com)| Official-Docs |
| ------------- |:-------------:| -----:| -----:|-----:|-----:|-----:| -----:|
|  [react](https://hn.algolia.com/?query=react&sort=byPopularity&prefix&page=0&dateRange=all&type=story)  | [react](https://medium.com/tag/react?source=related)  | [react](https://www.reddit.com/r/reactjs/)  | [react](https://www.quora.com/topic/React-JavaScript-library)  |  [react](https://stackoverflow.com/search?q=react)    | [react](https://github.com/enaqx/awesome-react)  | [react](https://www.lynda.com/React-js-training-tutorials/7049-0.html)  | [react](https://reactjs.org/)  |
|  [redux](https://hn.algolia.com/?query=redux&sort=byPopularity&prefix&page=0&dateRange=all&type=story)  | [redux](https://medium.com/tag/redux)  | [redux](https://www.reddit.com/r/reduxjs/)  | [redux](https://www.quora.com/topic/Redux-JavaScript-library)  |   [redux](https://stackoverflow.com/search?q=redux)   | [redux](https://github.com/xgrommx/awesome-redux)  | [redux](https://www.lynda.com/Redux-tutorials/11496-0.html)  | [redux](http://redux.js.org/)  |
|  [relay](https://hn.algolia.com/?query=relay&sort=byPopularity&prefix&page=0&dateRange=all&type=story)  | [relay](https://medium.com/tag/relay)  | [relay](https://www.reddit.com/r/relay/)  | [relay](https://www.quora.com/topic/Relay-JS-Framework)  |   [relay](https://stackoverflow.com/search?q=relay)  | [relay](https://github.com/expede/awesome-relay)  | [realy](https://www.lynda.com/GraphQL-tutorials/650000-0.html)  | [relay](https://facebook.github.io/relay)  |
 |  [graphql](https://hn.algolia.com/?query=graphql&sort=byPopularity&prefix&page=0&dateRange=all&type=story)  | [graphql](https://medium.com/tag/graphql)  | [graphql](https://www.reddit.com/r/graphql/)  | [graphql](https://www.quora.com/topic/GraphQL)  |   [graphql](https://stackoverflow.com/search?q=graphql)  | [graphql](https://github.com/chentsulin/awesome-graphql)  | [graphql](https://www.lynda.com/GraphQL-tutorials/650000-0.html)  | [graphql](http://graphql.org/)  |
|  [react-native](https://hn.algolia.com/?query=react%20native&sort=byPopularity&prefix&page=0&dateRange=all&type=story)  | [react-native](https://medium.com/tag/react-native)  | [react-native](https://www.reddit.com/r/reactnative/)  | [react-native](https://www.quora.com/topic/React-Native-1)  |   [react-native](https://stackoverflow.com/search?q=react+native)  | [react-native](https://github.com/jondot/awesome-react-native)  | [react-native](https://www.lynda.com/React-Native-tutorials/11718-0.html)  | [react-native](https://facebook.github.io/react-native/)  |

********************************************************
*******************************************************
React is an elegant JavaScript library for building frontend user interfaces. React allows developers to create large web-applications that use data and can change over time without reloading the page. It aims primarily to provide speed, simplicity, and scalability. React processes only user interfaces in applications. This corresponds to View in the Model-View-Controller (MVC) pattern, and can be used in combination with other JavaScript libraries or frameworks in MVC, such as AngularJS. [Source : wikipedia]

React was created by Jordan Walke, a software engineer at Facebook. He was influenced by Angular and XHP, an HTML component framework for PHP. It was first deployed on Facebook's newsfeed in 2011 and later on Instagram.com in 2012. It was open-sourced at JSConf US in May 2013.

React is maintained by Facebook, Instagram and a community of individual developers and corporations.

There are almost 2K blogs,articles and tutorials teaching about react every month and it is most trending buzz word in hacker news commuinity. Stack Overflow has released its much-anticipated Developer Survey for 2017. This year, over 64,000 developers took part in the survey and shared their preferences. below are the stats for survey on frameworks and libraries; react stands in the top list.

![survey](https://ingeno.io/wp-content/uploads/2017/03/stackoverflow_2017survey1.png)

React has been adopted by top giants Facebook, Instagram, NetflixNY, Times, Khan Academy, Codecademy, WhatsApp, Vivaldi Browser, Dropbox,  Yahoo Mail, many [more](https://github.com/facebook/react/wiki/sites-using-react) startups and it is going to take over the web.

React is a just front-end UI library, inorder to make complete full stack react application facebook and other communities provides supporting libraries and frameworks, such as flux, redux, relay, graphql. React can also be used with other frameworks.

Lets explore them in details...

## React:

As explained already react is only the View layer, which is means you have only the V in the MVC — Model-View-Controller architecture. All the while we see that React is mentioned along with other frameworks, but it offers just the View. React views are typically rendered using components that contain additional components specified as custom HTML tags.

React gives us the template language and a few function hooks to render HTML. Since it is component based, we can compose an application with React, and just specify how we want our component to look like.

React will keep it updated; even the underlying data changes. The core principles of React are (1) Flexibility, (2) Efficiency and (3) Declarative code.

As React is flexible, we can use it in several projects, create new apps and even use it within the existing code base, without doing a rewrite. React is efficient becuase it uses virtual DOM. The virtual DOM compares the current setup to the desired setup, and only makes the minimal amount of changes required to get there. Being efficient is increasingly important in the new world of mobile devices: it helps conserve battery power as well as create a faster and more pleasant user experience.

![virtual DOM](https://media.licdn.com/mpr/mpr/shrinknp_800_800/AAEAAQAAAAAAAAc3AAAAJGEzNjRmMWZmLWI3YTgtNGNmYy1hOTU0LTQ0ZDU4ZjgwMDJiZQ.jpg)

The reason behind to build React.js :

* React is not a MVC framework :  React is a library for building composable user interfaces..
    * React doesn’t use templates : React uses a real, full featured programming    language to render views, which we see as an advantage over templates for a few reasons:
    * JavaScript is a flexible, powerful programming language with the ability to build abstractions. This is incredibly important in large applications.
    * By unifying your markup with its corresponding view logic, React can actually make views easier to extend and maintain.
    * By baking an understanding of markup and content into JavaScript, there’sno manual string concatenation and therefore less surface area for XSS vulnerabilities. JSX, an optional syntax extension, is also created if in case you prefer the readability of HTML to raw JavaScript.
 

* React updates are very simple :  When your component is first initialized, the   method is called, generating a lightweight representation of your view. From that representation, a string of markup is produced, and injected into the document. When your data changes, the method is called again. In order to perform updates as efficiently as possible, we diff the return value from the previous call to render with the new one, and generate a minimal set of changes to be applied to the DOM(Document Object Model).

In simple words ,for example : In your  facebook page, you don’t have to refresh every   time to get a new notification. it just updates without that.

* Because React has its own lightweight representation of the document, we can do some pretty cool things with it:
* Facebook has dynamic charts that render to instead of HTML.
* Instagram is a “single page” web app built entirely with React and.
* They have  built internal prototypes that run React apps in a web worker and use React to drive native iOS views via an Objective-C bridge.
* You can run React on the server for SEO, performance, code sharing and overall flexibility.
Events behave in a consistent, standards-compliant way in all browsers (including IE8) and automatically use event delegation.


There are few pre-requesites and key-concepts we need to master before start with building apps.

Familiarity with HTML, JavaScript and ECMAScript6 (ES6).

and the five key concepts are:

* Components
* JSX
* Props & State
* The Component API
* Component Types

This blogpost [Master these five concepts, then master React](https://medium.freecodecamp.org/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3) gives complete overview on above five key-concepts.

Brief summary:
* A React codebase is made up of components.
* These components are written using JSX.
* Data flows from parent to children, except when it comes to state, which originates inside a component.
* Components possess a small set of lifecycle and utility methods.
* Components can also be written as pure functions.
* You should keep data logic and UI logic in separate components.
* Higher-order components are a common pattern for giving a component access to new tools.

 More on react basics:
 
 * [All the fundamental React.js concepts, jammed into this single Medium article](https://medium.freecodecamp.org/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2)
 * [How Virtual-DOM and diffing works in React](https://medium.com/@gethylgeorge/how-virtual-dom-and-diffing-works-in-react-6fc805f9f84e)
 * [react-basic](https://github.com/reactjs/react-basic)
 

**What is Flux?**
-------
We learnt that React takes care of V or the View part in MVC. Now, what about the M or the Model part? Flux, a programming pattern takes care of the M in the MVC.

It is the architecture responsible for creating data layers in JavaScript applications and building client-side web applications. Flux complements React’s Composable view components through its unidirectional data flow.

We can also say that Flux is more of a pattern, than a framework and it has four main components (we will go in depth later):
* Dispatcher
* Stores
* Views (React components)
* Action

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


The main problem with MVC is that it doesn’t scale well for Facebook’s huge code base. Flux proved to be a better choice because it is all about tweaking the flow inside the app. MVC has stood the test of time, and ever since its launch in 1976, it has been the favorite for many developers. Even in the recent years, developers have been using for several projects. But MVC couldn’t handle code base that Facebook needed, and hence Flux started ruling the roost. 

Let’s take a look at the main factors due to which Flux has an upper hand over MVC design pattern.

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

## Relay & GraphQL
As discussed above Flux and Redux are data handling patterns to keep your UI in sync. When a user interaction happens, they update the state and trigger rerendering.

But, how do we get the data that a component needs from a server, and then update the server when the user makes changes?

Relay takes care of this problem. It makes it easy to fetch data from the server as part of your data flow. In order to do this, Relay needs to know what data each component needs from the server. This is where GraphQL comes in.

> [Relay](https://facebook.github.io/relay/docs/getting-started.html) is an open source project by Facebook that exposes a framework they have been using internally for years. It is the glue that binds components written in React to data fetched from a GraphQL server.


> [GraphQL](http://graphql.org), a query language that is starting to get more and more attention. Facebook, who internally used GraphQL since 2012 and released a first specification and reference implementation of GraphQL in 2015 announced GraphQL to be [production ready] in September 2016. What followed is a trend of more and more companies starting to use GraphQL, such as [GitHub](https://youtu.be/hT-4pVmkGt0), [Coursera](https://youtu.be/JC-UJwBKc2Y) and [Shopify](https://youtu.be/Wlu_PWCjc6Y).

> One of the main benefits of using GraphQL is how so called queries allow clients to specify their data requirements in a declarative way. Instead of collecting all the data from different endpoints, as is usual with REST, queries allow an exact and fine-grained selection of data fields that are then resolved by the server. This leads to prevention of data over- and underfetching, two common problems of REST.

>[complete tutorial](https://www.howtographql.com/basics/2-core-concepts/)

Facebook developed graphql to provide a data source that can evolve without breaking existing code and to favor speed on low-powered and low-quality mobile devices. The schema can evolve, but should never break. Products are described in graphs and queries, instead of the REST notion of endpoints.

When you build React components, it’s easy to reuse them across different parts of your site. This is one of the main benefits of React. It’s called composability.If your component needs to use data from the server, though, it gets harder to just drop a component in place. The server needs to know what properties the component needs. In many apps, this will be hard-coded on the server. There will be a URL (called an endpoint) that passes down data for that particular view. The endpoint code will know exactly what properties its view needs.

The problem here is that whenever you add (or remove) properties from the component, you have to change the server code too. This is called coupling; when you change one, you have to change the other, too.

Because you have to manually keep these two in sync, it makes bugs and obsolete code more likely.
* Bugs come from underfetching data. You don’t pull down the properties that you need for a component because you forgot to add them to the server.
* Obsolete code results in overfetching data. For example, let’s say you remove a component from the tree. Do you delete its properties from the server response? How can you be sure another component doesn’t use that endpoint and need those properties? Instead, it’s better to just keep them in the response… but then you have a lot of cruft lying around.

With GraphQL, you don’t hard-code the server with the list of properties that your view needs. Instead, the component provides a list of what it needs to the server.

This list is combined with the lists from other components. The structure of the combined list is a tree, just like the component tree. It gets handed off to the endpoint. There’s only one endpoint and it handles all requests.

The nice thing about this is that it localizes changes. When you need to add or remove a property, you only need to change the component… not the server.


Next steps : [building pokedex](https://github.com/shekhargulati/52-technologies-in-2016/blob/master/43-graphql/README.md)


## React Native




## Next steps:




 






















