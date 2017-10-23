<div id="container" class="ui fluid grid container">
<div class="sixteen wide column">
<div class="ui huge center aligned header">
VueJs: The Basics
<div class="sub header">
<div id="article-info" class="ui small horizontal divided list">
<div class="item">
<div><i class="calendar icon"></i>February 16th, 2016</div>
</div>
<div class="item">
<div><i class="tags icon"></i>
<a href="/tag/vue">
Vue.js
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="sixteen wide tablet sixteen wide mobile twelve wide computer column">
<div class="ui fluid card">
<div class="image">
<img src="cover-850x416.jpg">
</div>
<div class="content">
<div class="post-content">
<p>VueJs is a small, flexible JavaScript library that allows developers to build interactive web applications quite easily through an API that is simple and easy to pick up. It shares some similarities and a number of differences with other libraries/frameworks like Angular, React, Ember, Polymer, and Riot to name a few. However Vue prides itself on it&#39;s simplicity, performance, flexibility and being less opinionated. The VueJs website has a more in depth comparison with other libraries and frameworks which you can read about <a target="_blank" href="http://vuejs.org/guide/comparison.html">here</a>, if you&#39;re interested.</p>
<p>This tutorial aims to give you an overview of some of the basic concepts and features through practical examples. In future tutorials we&#39;ll be looking at more advanced features and building scalable applications with Vue.</p>
<h1 id="creating-a-vue-instance-with-new-vue-">Creating a Vue Instance with <code>new Vue()</code></h1>
<p>Let&#39;s start off by creating a basic HTML page and importing VueJs into it. You can install Vue via NPM, Bower, as a standalone, or a CDN, to name just a few ways. For the sake of simplicity, we&#39;ll stick to importing Vue via a CDN right before the closing <code>body</code> tag, like so:</p>
<pre><code class="hljs html"><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>VueJs Tutorial - coligo<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://cdn.jsdelivr.net/vue/1.0.16/vue.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre>
<p>Note: when developing, be sure to use the non-minified version as it provides you with helpful and descriptive warnings that will save you a lot of time.</p>
<p>We can now create a <code>div</code> tag and a new Vue instance then bind the two together. When you create a new Vue instance using the <code>Vue()</code> constructor, you need to specify it&#39;s mounting point which you can simply think of as a boundary or a box for this Vue instance - it will only know about the things that are declared within this boundary but nothing about what exists outside this <code>div</code> element.</p>
<p>You can specify the mounting point of a Vue instance using the <code>el</code> option in the <code>Vue()</code> constructor which takes a CSS selector string to the DOM element you wish to mount your Vue instance to like so:</p>
<pre><code class="hljs html"><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>VueJs Tutorial - coligo<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"vue-instance"</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- this will be the DOM element we will mount our VueJs instance to --&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://cdn.jsdelivr.net/vue/1.0.16/vue.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="actionscript">
    <span class="hljs-comment">// our VueJs instance bound to the div with an id of vue-instance</span>
    <span class="hljs-keyword">var</span> vm = <span class="hljs-keyword">new</span> Vue({
      el: <span class="hljs-string">'#vue-instance'</span>
    });
  </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

  <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre>
<p>As you can see above, a Vue instance is created using the <code>Vue()</code> constructor and takes in an options object that specifies the element to mount on. In this case we are creating a new Vue instance and specifying the element to be mounted via the CSS selector: <code>#vue-instance</code>. A Vue instance can also be thought of as a ViewModel in the <a target="_blank" href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel">MVVM pattern</a>, hence the variable name <code>vm</code> in case you were wondering.</p>
<p>Now that we have created a Vue instance and mounted it to a DOM element, Vue is aware of anything <strong>within</strong> those <code>div</code> tags and we can begin demonstrating some of the neat features of Vue.</p>
<h1 id="2-way-data-binding-with-v-model-">2-Way Data Binding with <code>v-model</code></h1>
<p>To illustrate the 2-way data binding feature of Vue, we will create a simple HTML text input with the <code>v-model</code> directive that will be used to dynamically update the <em>greeting</em> property in the <em>data</em> object.</p>
<p>You can think of the <code>v-model</code> directive as any other HTML attribute. It creates 2-way data bindings on form input elements such as <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, and <code>&lt;select&gt;</code>. The value of the <code>v-model</code> directive is the data we wish to update on user input events. For this particular example, we are binding the <code>&lt;input&gt;</code> element to the <code>greeting</code> string that we have created in the Vue data object as shown below:</p>
<pre><code class="hljs html">...

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"vue-instance"</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- this will be the DOM element we will mount our VueJs instance to --&gt;</span>
  Enter a greeting: <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"greeting"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://cdn.jsdelivr.net/vue/1.0.16/vue.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="actionscript">
  <span class="hljs-comment">// our VueJs instance bound to the div with an id of vue-instance</span>
  <span class="hljs-keyword">var</span> vm = <span class="hljs-keyword">new</span> Vue({
    el: <span class="hljs-string">'#vue-instance'</span>,
    data: {
      greeting: <span class="hljs-string">'Hello VueJs!'</span>
    }
  });
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

...
</code></pre>
<p>Now any time a user input event fires on the text box, the <em>greeting</em> string will be updated automatically and if the greeting string is changed, then the text box will also be automatically updated to reflect those changes. This constant synchronization between form input elements and underlying data is achieved using the <code>v-model</code> attribute and it is also where the 2-way data binding notion arises.</p>
<p>To prove this 2 way data binding between the <code>&lt;input&gt;</code> element and the underlying <em>greeting</em> string, we can dump the <strong>data</strong> object of this Vue instance to the page using the special <code>$data</code> property between double curly braces which essentially tells Vue to replace whatever is between those curly braces <code>{{ }}</code> with the property in the corresponding data object.</p>
<pre><code class="hljs html"><span class="xml">...

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"vue-instance"</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- this will be the DOM element we will mount our VueJs instance to --&gt;</span>
  Enter a greeting: <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"greeting"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span></span><span class="hljs-template-variable">{{ $data | json }}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://cdn.jsdelivr.net/vue/1.0.16/vue.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="actionscript">
  <span class="hljs-comment">// our VueJs instance bound to the div with an id of vue-instance</span>
  <span class="hljs-keyword">var</span> vm = <span class="hljs-keyword">new</span> Vue({
    el: <span class="hljs-string">'#vue-instance'</span>,
    data: {
      greeting: <span class="hljs-string">'Hello VueJs!'</span>
    }
  });
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

...</span>
</code></pre>
<p>Go ahead and try it out here!</p>
<p><script async src="https://jsfiddle.net/coligo/5hq3rmb6/embed/"></script></p>
<p>The <code>| json</code> in <code>{{ $data | json }}</code> is just a helper method (or a filter in Vue-terms) to pretty print the <code>$data</code> object. All it really does is call <code>JSON.stringify()</code> under the hood.</p>
<p>In a similar manner, you can display only the <em>greeting</em> string from the data object using the double curly braces like so:</p>
<pre><code class="hljs html"><span class="xml">...

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"vue-instance"</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- this will be the DOM element we will mount our VueJs instance to --&gt;</span>
  Enter a greeting: <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"greeting"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span></span><span class="hljs-template-variable">{{ greeting }}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

...</span>
</code></pre>
<p><script async src="https://jsfiddle.net/coligo/q2qbk5wf/embed/"></script></p>
<p>Vue makes this sort of data binding really easy as you can see. You don&#39;t need to write any input event handlers in pure Javascript or JQuery, all it took was a single <code>v-model</code> directive to bind the input element to underlying data. If we look at the code as a whole, we can really appreciate how much Vue abstracts away and simplifies event handling logic:</p>
<pre><code class="hljs html"><span class="xml">...
<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"vue-instance"</span>&gt;</span>
    Enter a greeting: <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"greeting"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span></span><span class="hljs-template-variable">{{ greeting }}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://cdn.jsdelivr.net/vue/1.0.16/vue.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="actionscript">
    <span class="hljs-keyword">var</span> vm = <span class="hljs-keyword">new</span> Vue({
        el: <span class="hljs-string">'#vue-instance'</span>,
        data: {
            greeting: <span class="hljs-string">'Hello VueJs!'</span>
        }
    });
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
...</span>
</code></pre>
<h1 id="handling-events-with-v-on-">Handling Events with <code>v-on</code></h1>
<p>VueJs makes listening to DOM events and assigning event handlers a breeze with the <code>v-on</code> directive. You can attach an event listener to an element by creating a method in the Vue instance and assigning it to the click handler.</p>
<p>In this case we created a method called <code>sayHello</code> in our methods object which displays a alert box with the name that the user has entered. The <code>sayHello</code> method is assigned as the click handler for the button using the <code>v-on:click</code> directive.</p>
<pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"vue-instance"</span>&gt;</span>
  Enter your name: <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"name"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">v-on:click</span>=<span class="hljs-string">"sayHello"</span>&gt;</span>Hey there!<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://cdn.jsdelivr.net/vue/1.0.16/vue.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="actionscript">
  <span class="hljs-keyword">var</span> vm = <span class="hljs-keyword">new</span> Vue({
    el: <span class="hljs-string">'#vue-instance'</span>,
    data: {
      name: <span class="hljs-string">''</span>
    },
    methods: {
      sayHello: <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span></span>{
        alert(<span class="hljs-string">'Hey there, '</span> + <span class="hljs-keyword">this</span>.name);
      }
    }
  });
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
<p>(you won&#39;t see an alert in the demo below if you have a popup/ad blocker enabled)</p>
<p><script async src="https://jsfiddle.net/coligo/10o6m998/embed/"></script></p>
<p>Of course you&#39;re not limited to just the click event as the <code>v-on</code> directive accepts the common Javascript events such as <code>v-on:mouseover</code>, <code>v-on:keydown</code>, <code>v-on:submit</code>, <code>v-on:keypress</code>, etc... or even your own custom defined events.</p>
<p>Since you will find yourself using the <code>v-on:*</code> directive quite frequently when developing, Vue provides us with a shorthand notation denoted by the <code>@</code> symbol and you can simply replace this statement in our previous example:</p>
<pre><code class="hljs html">&lt;<span class="hljs-keyword">button</span> v-<span class="hljs-keyword">on</span>:click=<span class="hljs-string">"sayHello"</span>&gt;Hey there!&lt;/<span class="hljs-keyword">button</span>&gt;
</code></pre>
<p>with an equivalent <code>@</code> version:</p>
<pre><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"sayHello"</span>&gt;</span>Hey there!<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
</code></pre>
<h1 id="conditional-rendering-with-v-if-and-v-show-">Conditional Rendering with <code>v-if</code> and <code>v-show</code></h1>
<p>Let&#39;s say you wish to display a generic welcome message to your user if they are logged in or show them a login form if they are not already logged in. Vue makes this quite easy using the <code>v-if</code> and <code>v-show</code> directives, so let&#39;s take a look at how we can accomplish this.</p>
<p>Using what we learned in the previous section about handling events with the <code>v-on</code> directive, we will create a simple <code>login</code> method that toggles the value of <code>isLoggedIn</code> between <em>true</em> and <em>false</em> when the user clicks the login or logout button.</p>
<p>As the value of <code>isLoggedIn</code> changes, Vue will automatically re-evaluate the condition in the <code>v-if</code> directive and render the correct part of the content based on that condition.</p>
<pre><code class="hljs html">...

<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"vue-instance"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">"isLoggedIn"</span>&gt;</span>
    Welcome to coligo!
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"login"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span>&gt;</span>Logout<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-else</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"username"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"password"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"login"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span>&gt;</span>Login<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://cdn.jsdelivr.net/vue/1.0.16/vue.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="actionscript">
  <span class="hljs-keyword">var</span> vm = <span class="hljs-keyword">new</span> Vue({
    el: <span class="hljs-string">'#vue-instance'</span>,
    data: {
      isLoggedIn: <span class="hljs-literal">false</span>
    },
    methods:{
      login: <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span></span>{
        <span class="hljs-comment">// 'this' refers to the vm instance</span>
        <span class="hljs-keyword">this</span>.isLoggedIn = !<span class="hljs-keyword">this</span>.isLoggedIn;
      }
    }
  });
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>

...
</code></pre>
<p><script async src="https://jsfiddle.net/coligo/vfaa263n/embed/"></script></p>
<p><code>v-show</code> can be used in pretty much the same was as <code>v-if</code> and you can see that for yourself by replacing the <code>v-if</code> in the pervious example with a <code>v-show</code> like so:</p>
<pre><code class="hljs html">&lt;<span class="hljs-selector-tag">div</span> id=<span class="hljs-string">"vue-instance"</span>&gt;
  &lt;<span class="hljs-selector-tag">div</span> v-show=<span class="hljs-string">"isLoggedIn"</span>&gt;
    Welcome to coligo!
    &lt;<span class="hljs-selector-tag">button</span> @click=<span class="hljs-string">"login"</span> type=<span class="hljs-string">"submit"</span>&gt;Logout&lt;/button&gt;
  &lt;/div&gt;
  &lt;<span class="hljs-selector-tag">div</span> v-<span class="hljs-keyword">else</span>&gt;
    &lt;<span class="hljs-selector-tag">input</span> type=<span class="hljs-string">"text"</span> placeholder=<span class="hljs-string">"username"</span>&gt;
    &lt;<span class="hljs-selector-tag">input</span> type=<span class="hljs-string">"password"</span> placeholder=<span class="hljs-string">"password"</span>&gt;
    &lt;<span class="hljs-selector-tag">button</span> @click=<span class="hljs-string">"login"</span> type=<span class="hljs-string">"submit"</span>&gt;Login&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<p>However, the difference is in the way they show and hide content:</p>
<p><code>v-show</code> will always render the content regardless of the truthy-ness of the expression value whereas <code>v-if</code> will only render the content if the expression is true.</p>
<p>Also, each time the value of the expression toggles between true and false, <code>v-if</code> will completely destroy and reconstruct the element whereas <code>v-show</code> will simply toggle the CSS <code>display</code> property of that element to show and hide it.</p>
<p>Although these differences may not seem significant to you at the moment, they are worth keeping in mind when evaluating performance considerations for larger applications you develop. The <a target="_blank" href="http://vuejs.org/guide/conditional.html#v-if_vs-_v-show">VueJs guide</a> summarizes it as follows:</p>
<blockquote>
<p>Generally speaking, v-if has higher toggle costs while v-show has higher initial render costs. So prefer v-show if you need to toggle something very often, and prefer v-if if the condition is unlikely to change at runtime.</p>
</blockquote>
<h1 id="rendering-lists-in-vue-with-v-for-">Rendering Lists in Vue with <code>v-for</code></h1>
<p>Let&#39;s assume we have an online store and wish to display the items we have in our inventory. The <code>v-for</code> directive allows us to render content based on the values of an array using a special syntax like so: <code>item in inventory</code>. This can be read as &quot;for every item in inventory&quot;.</p>
<p>We will create this hypothetical inventory array and render it on the page using the <code>v-for</code> directive which will result in several <code>li</code> elements each containing the name and price of the item in our inventory:</p>
<pre><code class="hljs html"><span class="xml">...

<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"vue-instance"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in inventory"</span>&gt;</span>
      </span><span class="hljs-template-variable">{{ item.name }}</span><span class="xml"> - $</span><span class="hljs-template-variable">{{ item.price }}</span><span class="xml">
    <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://cdn.jsdelivr.net/vue/1.0.16/vue.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="actionscript">
<span class="hljs-keyword">var</span> vm = <span class="hljs-keyword">new</span> Vue({
  el: <span class="hljs-string">'#vue-instance'</span>,
  data: {
    inventory: [
      {name: <span class="hljs-string">'MacBook Air'</span>, price: <span class="hljs-number">1000</span>},
      {name: <span class="hljs-string">'MacBook Pro'</span>, price: <span class="hljs-number">1800</span>},
      {name: <span class="hljs-string">'Lenovo W530'</span>, price: <span class="hljs-number">1400</span>},
      {name: <span class="hljs-string">'Acer Aspire One'</span>, price: <span class="hljs-number">300</span>}
    ]
  }
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>

...</span>
</code></pre>
<p><script async src="https://jsfiddle.net/coligo/49gptnad/embed/"></script></p>
<p>In reality we wouldn&#39;t be hard coding the inventory array in our application like that, instead we would be pulling this data from a database or an API endpoint which we will cover in a later tutorial.</p>
<p>Sometimes you may want to access the index of your loop which Vue provides 2 ways of doing:</p>
<p>Using the special <code>$index</code> variable:</p>
<pre><code class="hljs html">&lt;div id=<span class="hljs-string">"vue-instance"</span>&gt;
  &lt;ul&gt;
    &lt;li v-<span class="hljs-keyword">for</span>=<span class="hljs-string">"item in inventory"</span>&gt;
      <span class="hljs-template-variable">{{ $index }}</span> - <span class="hljs-template-variable">{{ item.name }}</span> - $<span class="hljs-template-variable">{{ item.price }}</span>
    &lt;<span class="hljs-regexp">/li&gt;
  &lt;/ul</span>&gt;
&lt;<span class="hljs-regexp">/div&gt;</span>
</code></pre>
<p>or using an alias:</p>
<pre><code class="hljs html">&lt;div id=<span class="hljs-string">"vue-instance"</span>&gt;
  &lt;ul&gt;
    &lt;li v-<span class="hljs-keyword">for</span>=<span class="hljs-string">"(index, item) in inventory"</span>&gt;
      <span class="hljs-template-variable">{{ index }}</span> - <span class="hljs-template-variable">{{ item.name }}</span> - $<span class="hljs-template-variable">{{ item.price }}</span>
    &lt;<span class="hljs-regexp">/li&gt;
  &lt;/ul</span>&gt;
&lt;<span class="hljs-regexp">/div&gt;</span>
</code></pre>
<p><script async src="https://jsfiddle.net/coligo/k1vL0a3g/embed/"></script></p>
<h1 id="computed-properties">Computed Properties</h1>
<p>Computed properties are useful in scenarios where the value of one variable depends on one or more other variables. Take this trivial example as a use case for computed properties:</p>
<p>You provide the user with an input asking them for a number and you automatically return double that number. Typically you would have an event listener waiting for user input events on that input box and whenever an event fires, you would update the result with double that value. VueJs makes this sort of thing a lot more straight forward using computed properties:</p>
<pre><code class="hljs html"><span class="xml">...

<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"vue-instance"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"number"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"x"</span>&gt;</span>
    result: </span><span class="hljs-template-variable">{{ doubleX }}</span><span class="xml">
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://cdn.jsdelivr.net/vue/1.0.16/vue.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="actionscript">
<span class="hljs-keyword">var</span> vm = <span class="hljs-keyword">new</span> Vue({
  el: <span class="hljs-string">'#vue-instance'</span>,
  data: {
    x: <span class="hljs-number">1</span>
  },
    computed: {
        doubleX: <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span></span>{
            <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.x*<span class="hljs-number">2</span>;
        }
    }
});
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>

...</span>
</code></pre>
<p><script async src="https://jsfiddle.net/coligo/vyfkhad6/embed/"></script></p>
<p>The computed object is a set of functions that return a value and you can define it in the same way as we did earlier for the methods object in our Vue constructor.</p>
<p>Let&#39;s create a simple little game to show another example of computed properties: the user is asked to guess a number between 1 and 10 and if they get it right, then they will see a message saying &#39;You got it right!&#39; and if they don&#39;t they will see &#39;Try again!&#39;.</p>
<p>We will set the &quot;random number&quot; to 5 to begin with, and every time the user guesses, we will randomize this number. Using what we learned from the previous sections combined with computed properties, we can put this game together quite easily.</p>
<pre><code class="hljs html"><span class="xml">...

<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"vue-instance"</span>&gt;</span>
    Guess a number between 1 and 10: <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"number"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"userInput"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span></span><span class="hljs-template-variable">{{ message }}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://cdn.jsdelivr.net/vue/1.0.16/vue.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">var</span> vm = <span class="hljs-keyword">new</span> Vue({
        el: <span class="hljs-string">'#vue-instance'</span>,
        data: {
            userInput: <span class="hljs-number">0</span>,
            randomNumber: <span class="hljs-number">5</span>
        },
        methods: {
            getRandomNumber: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">min, max</span>)</span>{
                <span class="hljs-keyword">return</span> <span class="hljs-built_in">Math</span>.floor(<span class="hljs-built_in">Math</span>.random() * (max - min + <span class="hljs-number">1</span>)) + min;
            }
        },
        computed: {
            message: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
                <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.userInput == <span class="hljs-keyword">this</span>.randomNumber) {
          <span class="hljs-keyword">this</span>.randomNumber = <span class="hljs-keyword">this</span>.getRandomNumber(<span class="hljs-number">1</span>, <span class="hljs-number">10</span>);
                    <span class="hljs-keyword">return</span> <span class="hljs-string">'You got it right!'</span>;
                } <span class="hljs-keyword">else</span> {
          <span class="hljs-keyword">this</span>.randomNumber = <span class="hljs-keyword">this</span>.getRandomNumber(<span class="hljs-number">1</span>, <span class="hljs-number">10</span>);
                    <span class="hljs-keyword">return</span> <span class="hljs-string">'Try again!'</span>;
                }

            }
        }
    });
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>

...</span>
</code></pre>
<p><script async src="https://jsfiddle.net/coligo/a6fq9mn5/embed/"></script></p>
<h1 id="wrapping-up">Wrapping Up</h1>
<p>So there you have it! VueJs is, in my opinion, one of the easiest and most elegant libraries to learn. It is built on a solid set of design philosophies and is quickly growing in popularity. The library is small and simple enough to pick up rather quickly and get productive with. We covered the basics of VueJs in this tutorial with some examples to illustrate the key aspects, particularly:</p>
<ul>
<li>Setting up VueJs and creating an instance with <code>new Vue()</code></li>
<li>2-way data binding with the <code>v-model</code> directive</li>
<li>Outputting data to the page using the double curly braces <code>{{ }}</code></li>
<li>Rendering lists using the <code>v-for</code> directive</li>
<li>Conditional rendering with <code>v-if</code> and <code>v-show</code></li>
<li>Event handling with <code>v-on:*</code> or it&#39;s shorthand <code>@</code></li>
<li>Defining data, methods and computed properties</li>
</ul>
<p>Now that you have the basics down, be sure to check out the other VueJs tutorials on coligo to continue building on your knowledge and fire up your favourite editor and start practicing!</p>
</div>
</div>
<div class="extra content">
<div id="disqus_thread"></div>
<script>
var disqus_config = function () {
this.page.url = "https://coligo.io/vuejs-the-basics/";
this.page.identifier = "vuejs-the-basics";
};

(function() {
var d = document, s = d.createElement('script');

s.src = '//coligo.disqus.com/embed.js';

s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
</div>
</div>
</div>
