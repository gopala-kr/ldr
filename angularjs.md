AngularJS (commonly referred to as "Angular.js" or "AngularJS 1.X") is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications. The JavaScript components complement Apache Cordova, the framework used for developing cross-platform mobile apps. It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications. In 2014, the original AngularJS team began working on Angular (Application Platform).


The AngularJS framework works by first reading the HTML page, which has additional custom tag attributes embedded into it. Angular interprets those attributes as directives to bind input or output parts of the page to a model that is represented by standard JavaScript variables. The values of those JavaScript variables can be manually set within the code, or retrieved from static or dynamic JSON resources.


According to JavaScript analytics service Libscore, AngularJS is used on the websites of Wolfram Alpha, NBC, Walgreens, Intel, Sprint, ABC News, and about 12,000 other sites out of 1 million tested in October 2016.[3] AngularJS is currently in the top 100 of the most starred projects on GitHub.[4]

AngularJS is the frontend part of the MEAN stack, consisting of MongoDB database, Express.js web application server framework, Angular.js itself, and Node.js server runtime environment.


AngularJS is built on the belief that declarative programming should be used to create user interfaces and connect software components, while imperative programming is better suited to defining an application's business logic.[5] The framework adapts and extends traditional HTML to present dynamic content through two-way data-binding that allows for the automatic synchronization of models and views. As a result, AngularJS de-emphasizes explicit DOM manipulation with the goal of improving testability and performance.

**AngularJS's design goals include:**

to decouple DOM manipulation from application logic. The difficulty of this is dramatically affected by the way the code is structured.
to decouple the client side of an application from the server side. This allows development work to progress in parallel, and allows for reuse of both sides.
to provide structure for the journey of building an application: from designing the UI, through writing the business logic, to testing.
Angular implements the MVC pattern to separate presentation, data, and logic components.[6] Using dependency injection, Angular brings traditionally server-side services, such as view-dependent controllers, to client-side web applications. Consequently, much of the burden on the server can be reduced.

**Scope**

AngularJS uses the term "scope" in a manner akin to the fundamentals of computer science.

Scope in computer science describes when in the program a particular binding is valid. The ECMA-262 specification defines scope as: a lexical environment in which a Function object is executed in client-side web scripts;[7] akin to how scope is defined in lambda calculus.

As a part of the "MVC" architecture, the scope forms the "Model", and all variables defined in the scope can be accessed by the "View" as well as the "Controller". The scope behaves as a glue and binds the "View" and the "Controller".

In AngularJS, "scope" is a certain kind of object[9] that itself can be in scope or out of scope in any given part of the program, following the usual rules of variable scope in JavaScript like any other object.[10] When the term "scope" is used below, it refers to the Angular scope object and not the scope of a name binding.

**Bootstrap**

The tasks performed by the AngularJS bootstrapper occur in three phases[11] after the DOM has been loaded:

Creation of a new Injector
Compilation of the directives that decorate the DOM
Linking of all directives to scope
AngularJS directives allow the developer to specify custom and reusable HTML-like ele
