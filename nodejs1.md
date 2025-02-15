<div class="postArticle-content js-postField js-notesSource js-trackedPost"  data-post-id="c4907b19da4c" data-source="post_page" data-collection-id="c80fd9f96957" data-tracking-context="postPage">
                        <section name="c519" class="section section--body section--first section--last">
                           <div class="section-divider">
                              <hr class="section-divider">
                           </div>
                           <div class="section-content">
                              <div class="section-inner sectionLayout--insetColumn">
                                 <h1 name="31ea" id="31ea" class="graf graf--h3 graf--leading graf--title">What you should know to really understand the Node.js Event Loop</h1>
                                 <p name="4f99" id="4f99" class="graf graf--p graf-after--h3">Node.js is an event-based platform. This means that everything that happens in Node is the reaction to an event. A transaction passing through Node traverses a cascade of callbacks.<br>Abstracted away from the developer, this is all handled by a library called libuv which provides a mechanism called an event loop.</p>
                                 <p name="cc87" id="cc87" class="graf graf--p graf-after--p">This event loop is maybe the most misunderstood concept of the platform.</p>
                                 <p name="1bdd" id="1bdd" class="graf graf--p graf-after--p">I work for <a href="https://dynatrace.com" data-href="https://dynatrace.com" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">Dynatrace</a>, a performance monitoring vendor and when we approached the topic of event loop monitoring, we put a lot of effort into properly understanding what we are actually measuring.</p>
                                 <p name="f7e8" id="f7e8" class="graf graf--p graf-after--p">In this article I will cover our learnings about how the event loop really works and how to monitor it properly.</p>
                                 <h3 name="2dbe" id="2dbe" class="graf graf--h3 graf-after--p">Common misconceptions</h3>
                                 <p name="767b" id="767b" class="graf graf--p graf-after--h3">Libuv is the library that provides the event loop to Node.js. In his awesome <a href="https://www.youtube.com/watch?v=PNa9OMajw9w" data-href="https://www.youtube.com/watch?v=PNa9OMajw9w" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">keynote talk at Node Interactive</a> Bert Belder, one of the key people behind libuv, started with presenting a Google image search that showed a variety of different approaches people had taken to picture the event loop and his disillusioning resume was that most of them were wrong.</p>
                                 <figure name="ebf7" id="ebf7" class="graf graf--figure graf-after--p">
                                    <div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 317px;">
                                       <div class="aspectRatioPlaceholder-fill" style="padding-bottom: 45.300000000000004%;"></div>
                                       <div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="0*RdyghDfhxECLxI_Z.png" data-width="1024" data-height="464" data-action="zoom" data-action-value="0*RdyghDfhxECLxI_Z.png">
                                          <img src="https://cdn-images-1.medium.com/freeze/max/33/0*RdyghDfhxECLxI_Z.png?q=20" crossorigin="anonymous" class="progressiveMedia-thumbnail js-progressiveMedia-thumbnail">
                                          <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>
                                          <img class="progressiveMedia-image js-progressiveMedia-image" data-src="https://cdn-images-1.medium.com/max/880/0*RdyghDfhxECLxI_Z.png">
                                          <noscript class="js-progressiveMedia-inner"><img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/880/0*RdyghDfhxECLxI_Z.png"></noscript>
                                       </div>
                                    </div>
                                 </figure>
                                 <p name="4c47" id="4c47" class="graf graf--p graf-after--figure">Let me cover the (my) most popular misunderstandings.</p>
                                 <h3 name="e762" id="e762" class="graf graf--h3 graf-after--p">Misconception 1: The event loop runs in a separate thread than the user code</h3>
                                 <h4 name="6304" id="6304" class="graf graf--h4 graf-after--h3">Misconception</h4>
                                 <p name="35de" id="35de" class="graf graf--p graf-after--h4">There is a main thread where the JavaScript code of the user (userland code) runs in and another one that runs the event loop. Every time an asynchronous operation takes place, the main thread will hand over the work to the event loop thread and once it is done, the event loop thread will ping the main thread to execute a callback.</p>
                                 <h4 name="8647" id="8647" class="graf graf--h4 graf-after--p">Reality</h4>
                                 <p name="6d76" id="6d76" class="graf graf--p graf-after--h4">There is only one thread that executes JavaScript code and this is the thread where the event loop is running. The execution of callbacks (know that every userland code in a running Node.js application is a callback) is done by the event loop. We will cover that in depth a bit later.</p>
                                 <h3 name="07f5" id="07f5" class="graf graf--h3 graf-after--p">Misconception 2: Everything that’s asynchronous is handled by a thread pool</h3>
                                 <h4 name="f435" id="f435" class="graf graf--h4 graf-after--h3">Misconception</h4>
                                 <p name="b779" id="b779" class="graf graf--p graf-after--h4">Asynchronous operations, like working with the filesystems, doing outbound HTTP requests or talking to databases are always loaded off to a thread pool provided by libuv.</p>
                                 <h4 name="d6dc" id="d6dc" class="graf graf--h4 graf-after--p">Reality</h4>
                                 <p name="67a5" id="67a5" class="graf graf--p graf-after--h4">Libuv by default creates a thread pool with four threads to offload asynchronous work to. Today’s operating systems already provide asynchronous interfaces for many I/O tasks (<a href="http://man7.org/linux/man-pages/man7/aio.7.html" data-href="http://man7.org/linux/man-pages/man7/aio.7.html" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">e.g. AIO on Linux</a>).<br>Whenever possible, libuv will use those asynchronous interfaces, avoiding usage of the thread pool. The same applies to third party subsystems like databases. Here the authors of the driver will rather use the asynchronous interface than utilizing a thread pool.<br>In short: Only if there is no other way, the thread pool will be used for asynchronous I/O.</p>
                                 <h3 name="19be" id="19be" class="graf graf--h3 graf-after--p">Misconception 3: The event loop is something like a stack or queue</h3>
                                 <h4 name="f686" id="f686" class="graf graf--h4 graf-after--h3">Misconception</h4>
                                 <p name="2a91" id="2a91" class="graf graf--p graf-after--h4">The event loop continuously traverses a FIFO of asynchronous tasks and executes the callback when a task is completed.</p>
                                 <h4 name="10ca" id="10ca" class="graf graf--h4 graf-after--p">Reality</h4>
                                 <p name="0352" id="0352" class="graf graf--p graf-after--h4">While there are queue-like structures involved, the event loop does not run through and process a stack. The event loop as a process is a set of phases with specific tasks that are processed in a round-robin manner.</p>
                                 <h3 name="2ba1" id="2ba1" class="graf graf--h3 graf-after--p">Understanding the phases of an event loop cycle</h3>
                                 <p name="56a6" id="56a6" class="graf graf--p graf-after--h3">To really understand the event loop we have to understand which work is done in which phase. Hoping that Bert Belder would approve it, my approach to show how the event loop works would be as follows:</p>
                                 <figure name="39bf" id="39bf" class="graf graf--figure graf-after--p">
                                    <div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 367px;">
                                       <div class="aspectRatioPlaceholder-fill" style="padding-bottom: 52.5%;"></div>
                                       <div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="1*ROxiavz7LeRpIfcgRDE7CA.png" data-width="1227" data-height="644" data-is-featured="true" data-action="zoom" data-action-value="1*ROxiavz7LeRpIfcgRDE7CA.png">
                                          <img src="https://cdn-images-1.medium.com/freeze/max/33/1*ROxiavz7LeRpIfcgRDE7CA.png?q=20" crossorigin="anonymous" class="progressiveMedia-thumbnail js-progressiveMedia-thumbnail">
                                          <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>
                                          <img class="progressiveMedia-image js-progressiveMedia-image" data-src="https://cdn-images-1.medium.com/max/880/1*ROxiavz7LeRpIfcgRDE7CA.png">
                                          <noscript class="js-progressiveMedia-inner"><img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/880/1*ROxiavz7LeRpIfcgRDE7CA.png"></noscript>
                                       </div>
                                    </div>
                                    <figcaption class="imageCaption">Ticks and Phases of the Node.js Event Loop</figcaption>
                                 </figure>
                                 <p name="70b3" id="70b3" class="graf graf--p graf-after--figure">Let’s discuss those phases. An in-depth explanation can be found <a href="https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/" data-href="https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/" class="markup--anchor markup--p-anchor" rel="noopener nofollow" target="_blank">on the Node.js website</a>.</p>
                                 <h3 name="8ce1" id="8ce1" class="graf graf--h3 graf-after--p">Timers</h3>
                                 <p name="9981" id="9981" class="graf graf--p graf-after--h3">Everything that was scheduled via setTimeout() or setInterval() will be processed here.</p>
                                 <h3 name="d0b0" id="d0b0" class="graf graf--h3 graf-after--p">IO Callbacks</h3>
                                 <p name="4eb8" id="4eb8" class="graf graf--p graf-after--h3">Here most of the callbacks will be processed. As all userland code in Node.js is basically in callbacks (e.g a callback to an incoming http request triggers a cascade of callbacks), this is the userland code.</p>
                                 <h3 name="d5b6" id="d5b6" class="graf graf--h3 graf-after--p">IO Polling</h3>
                                 <p name="d744" id="d744" class="graf graf--p graf-after--h3">Polls for new events to be processed on the next run.</p>
                                 <h3 name="d244" id="d244" class="graf graf--h3 graf-after--p">Set Immediate</h3>
                                 <p name="e82d" id="e82d" class="graf graf--p graf-after--h3">Runs all callbacks registered via setImmediate().</p>
                                 <h3 name="f752" id="f752" class="graf graf--h3 graf-after--p">Close</h3>
                                 <p name="1cf7" id="1cf7" class="graf graf--p graf-after--h3">Here all on(‘close’) event callbacks are processed.</p>
                                 <h3 name="8a87" id="8a87" class="graf graf--h3 graf-after--p">Monitoring the Event Loop</h3>
                                 <p name="5404" id="5404" class="graf graf--p graf-after--h3">We see that in fact everything that goes on in a Node applications runs through the event loop. This means that if we could get metrics out of it, they should give us valuable information about the overall health and performance of an application.<br>There is no API to fetch runtime metrics from the event loop and as such each monitoring tool provides their own metrics. Let’s see what we came up with.</p>
                                 <h3 name="7ab6" id="7ab6" class="graf graf--h3 graf-after--p">Tick Frequency</h3>
                                 <p name="3eb0" id="3eb0" class="graf graf--p graf-after--h3">The number of ticks per time.</p>
                                 <h3 name="072c" id="072c" class="graf graf--h3 graf-after--p">Tick Duration</h3>
                                 <p name="4c61" id="4c61" class="graf graf--p graf-after--h3">The time one tick takes.</p>
                                 <p name="f113" id="f113" class="graf graf--p graf-after--p">As our agent runs as a native module it was relatively easy for us to add probes to provide us this information.</p>
                                 <h4 name="8961" id="8961" class="graf graf--h4 graf-after--p">Tick frequency and tick duration metrics in action.</h4>
                                 <p name="5fcf" id="5fcf" class="graf graf--p graf-after--h4">When we did our first tests under different loads, the results were surprising — let me show you an example:</p>
                                 <p name="e081" id="e081" class="graf graf--p graf-after--p">In the following scenario I am calling an express.js application that does an outbound call to another http server.</p>
                                 <p name="2e20" id="2e20" class="graf graf--p graf-after--p">There are four scenarios:</p>
                                 <ol class="postList">
                                    <li name="4da2" id="4da2" class="graf graf--li graf-after--p">Idle<br>There are no incoming requests</li>
                                    <li name="bddb" id="bddb" class="graf graf--li graf-after--li">ab -c 5<br>Using apache bench I created 5 concurrent requests at a time</li>
                                    <li name="a990" id="a990" class="graf graf--li graf-after--li">ab -c 10<br>10 concurrent at a time</li>
                                    <li name="545f" id="545f" class="graf graf--li graf-after--li">ab -c 10 (slow backend)<br>The http server that is called returns data after 1s to simulate a slow backend. This should cause something called back pressure as requests waiting for the backend to return pile up inside Node.</li>
                                 </ol>
                                 <figure name="7a58" id="7a58" class="graf graf--figure graf-after--li">
                                    <div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 241px;">
                                       <div class="aspectRatioPlaceholder-fill" style="padding-bottom: 34.4%;"></div>
                                       <div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="0*WqAUxk2NCgJkaRvp.png" data-width="1024" data-height="352" data-action="zoom" data-action-value="0*WqAUxk2NCgJkaRvp.png">
                                          <img src="https://cdn-images-1.medium.com/freeze/max/33/0*WqAUxk2NCgJkaRvp.png?q=20" crossorigin="anonymous" class="progressiveMedia-thumbnail js-progressiveMedia-thumbnail">
                                          <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>
                                          <img class="progressiveMedia-image js-progressiveMedia-image" data-src="https://cdn-images-1.medium.com/max/880/0*WqAUxk2NCgJkaRvp.png">
                                          <noscript class="js-progressiveMedia-inner"><img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/880/0*WqAUxk2NCgJkaRvp.png"></noscript>
                                       </div>
                                    </div>
                                 </figure>
                                 <p name="5df7" id="5df7" class="graf graf--p graf-after--figure">If we look at the resulting chart we can make an interesting observation:</p>
                                 <p name="9ca1" id="9ca1" class="graf graf--p graf-after--p">Event loop duration and frequency are dynamically adapted</p>
                                 <p name="5708" id="5708" class="graf graf--p graf-after--p">If the application is idle, which means that there are no pendings tasks (Timers, callbacks, etc), it would not make sense to run through the phases with full speed, so the event loop will adapt to that and block for a while in the polling phase to wait for new external events coming in.</p>
                                 <p name="2c0e" id="2c0e" class="graf graf--p graf-after--p">This also means, that the metrics under no load are similar (low frequency, high duration) to an application that talks to a slow backend under high load.</p>
                                 <p name="92d9" id="92d9" class="graf graf--p graf-after--p">We also see that this demo application runs ‘best’ in the scenario with 5 simultaneous requests.</p>
                                 <p name="0487" id="0487" class="graf graf--p graf-after--p">Consequently tick frequency and tick duration need to be baselined factoring in the current requests per second.</p>
                                 <p name="12b5" id="12b5" class="graf graf--p graf-after--p">While this data already provides us with some valuable insights, we still don’t know in which phase the time is spent and so we researched further and came up with two more metrics.</p>
                                 <h3 name="9681" id="9681" class="graf graf--h3 graf-after--p">Work processed latency</h3>
                                 <p name="b94b" id="b94b" class="graf graf--p graf-after--h3">This metric measures how long it takes until an asynchronous task gets processed by the thread pool.</p>
                                 <p name="7a7c" id="7a7c" class="graf graf--p graf-after--p">High work processed latency indicates a busy/exhausted threadpool.</p>
                                 <p name="5c74" id="5c74" class="graf graf--p graf-after--p">To test this metric I created an express route that processes an image using a module called <a href="https://www.npmjs.com/package/sharp" data-href="https://www.npmjs.com/package/sharp" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">Sharp</a>. As image processing is expensive, Sharp utilizes the thread pool to accomplish that.</p>
                                 <figure name="9a5a" id="9a5a" class="graf graf--figure graf-after--p">
                                    <div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 245px;">
                                       <div class="aspectRatioPlaceholder-fill" style="padding-bottom: 35%;"></div>
                                       <div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="0*9WHmhn_8cLPyVOYb.png" data-width="1024" data-height="358" data-action="zoom" data-action-value="0*9WHmhn_8cLPyVOYb.png">
                                          <img src="https://cdn-images-1.medium.com/freeze/max/33/0*9WHmhn_8cLPyVOYb.png?q=20" crossorigin="anonymous" class="progressiveMedia-thumbnail js-progressiveMedia-thumbnail">
                                          <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>
                                          <img class="progressiveMedia-image js-progressiveMedia-image" data-src="https://cdn-images-1.medium.com/max/880/0*9WHmhn_8cLPyVOYb.png">
                                          <noscript class="js-progressiveMedia-inner"><img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/880/0*9WHmhn_8cLPyVOYb.png"></noscript>
                                       </div>
                                    </div>
                                 </figure>
                                 <p name="d1a4" id="d1a4" class="graf graf--p graf-after--figure">Running Apache bench with 5 concurrent connections against this a route with this image processing function reflects directly on this chart and can be clearly distinguished from a scenario of moderate load without the image processing in place.</p>
                                 <h3 name="0eca" id="0eca" class="graf graf--h3 graf-after--p">Event Loop Latency</h3>
                                 <p name="0e01" id="0e01" class="graf graf--p graf-after--h3">The event loop latency measures how long it additionally takes until a task scheduled with setTimeout(X) really gets processed.</p>
                                 <p name="b11f" id="b11f" class="graf graf--p graf-after--p">A high event loop latency indicates an event loop busy with processing callbacks.</p>
                                 <p name="a4f1" id="a4f1" class="graf graf--p graf-after--p">To test this metric, I created an express route that calculates fibonacci using a very inefficient algorithm.</p>
                                 <figure name="d0b7" id="d0b7" class="graf graf--figure graf-after--p">
                                    <div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 273px;">
                                       <div class="aspectRatioPlaceholder-fill" style="padding-bottom: 39.1%;"></div>
                                       <div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="0*uqJLSsdlcDj9_IJL.png" data-width="1024" data-height="400" data-action="zoom" data-action-value="0*uqJLSsdlcDj9_IJL.png">
                                          <img src="https://cdn-images-1.medium.com/freeze/max/33/0*uqJLSsdlcDj9_IJL.png?q=20" crossorigin="anonymous" class="progressiveMedia-thumbnail js-progressiveMedia-thumbnail">
                                          <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>
                                          <img class="progressiveMedia-image js-progressiveMedia-image" data-src="https://cdn-images-1.medium.com/max/880/0*uqJLSsdlcDj9_IJL.png">
                                          <noscript class="js-progressiveMedia-inner"><img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/880/0*uqJLSsdlcDj9_IJL.png"></noscript>
                                       </div>
                                    </div>
                                 </figure>
                                 <p name="07f9" id="07f9" class="graf graf--p graf-after--figure">Running Apache bench with 5 concurrent connections against this a route with the fibonacci function shows that now the callback queue is busy.</p>
                                 <p name="f8d2" id="f8d2" class="graf graf--p graf-after--p">We clearly see that those four metrics can provide us with valuable insights and help to understand the inner workings of Node.js better.</p>
                                 <p name="a875" id="a875" class="graf graf--p graf-after--p">Still all of that needs to be seen in a bigger picture to make sense of it. Therefore we are currently collecting information to factor in these data into our anomaly detection.</p>
                                 <h3 name="0299" id="0299" class="graf graf--h3 graf-after--p">Tuning the Event Loop</h3>
                                 <p name="7d37" id="7d37" class="graf graf--p graf-after--h3">Of course, metrics alone do not help much without knowing how to derive possible actions to remedy problems from them. Here are a few hints on what to do when the event loop seems exhausted.</p>
                                 <figure name="c2f3" id="c2f3" class="graf graf--figure graf-after--p">
                                    <div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 280px;">
                                       <div class="aspectRatioPlaceholder-fill" style="padding-bottom: 40%;"></div>
                                       <div class="progressiveMedia js-progressiveMedia graf-image" data-image-id="0*FaJr2qBOxeCFaHaG.png" data-width="1024" data-height="410" data-action="zoom" data-action-value="0*FaJr2qBOxeCFaHaG.png">
                                          <img src="https://cdn-images-1.medium.com/freeze/max/33/0*FaJr2qBOxeCFaHaG.png?q=20" crossorigin="anonymous" class="progressiveMedia-thumbnail js-progressiveMedia-thumbnail">
                                          <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas"></canvas>
                                          <img class="progressiveMedia-image js-progressiveMedia-image" data-src="https://cdn-images-1.medium.com/max/880/0*FaJr2qBOxeCFaHaG.png">
                                          <noscript class="js-progressiveMedia-inner"><img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/880/0*FaJr2qBOxeCFaHaG.png"></noscript>
                                       </div>
                                    </div>
                                 </figure>
                                 <h3 name="9525" id="9525" class="graf graf--h3 graf-after--figure">Utilize all CPUs</h3>
                                 <p name="19cd" id="19cd" class="graf graf--p graf-after--h3">A Node.js application runs on a single thread. On multicore machines that means that the load isn’t distributed over all cores. Using the <a href="https://nodejs.org/api/cluster.html" data-href="https://nodejs.org/api/cluster.html" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">cluster module</a> that comes with Node it’s easy to spawn a child process per CPU. Each child process maintains its own event loop and the master process transparently distributes the load between all childs.</p>
                                 <h3 name="94e7" id="94e7" class="graf graf--h3 graf-after--p">Tune the Thread Pool</h3>
                                 <p name="6839" id="6839" class="graf graf--p graf-after--h3">As mentioned, libuv will create a thread pool with the size of 4. The default size of the pool can be overridden by setting the environment variable UV_THREADPOOL_SIZE.<br>While this can solve load problems on I/O-bound applications I’d recommend excessive load testing as a larger thread pool might still exhaust the memory or the CPU.</p>
                                 <h3 name="6a76" id="6a76" class="graf graf--h3 graf-after--p">Offload the work to Services</h3>
                                 <p name="873a" id="873a" class="graf graf--p graf-after--h3">If Node.js spends too much time with CPU heavy operations, offloading work to services maybe even using another language that better suits a specific task might be a viable option.</p>
                                 <h3 name="958a" id="958a" class="graf graf--h3 graf-after--p">Summary</h3>
                                 <p name="63e6" id="63e6" class="graf graf--p graf-after--h3">Let’s summarize what we’ve learned in this post:</p>
                                 <ul class="postList">
                                    <li name="bb09" id="bb09" class="graf graf--li graf-after--p">The event loop is what keeps a Node.js application running</li>
                                    <li name="1c18" id="1c18" class="graf graf--li graf-after--li">Its functionality is often misunderstood — it is a set of phases that are traversed continuously with specific tasks for each phase</li>
                                    <li name="1a5b" id="1a5b" class="graf graf--li graf-after--li">There are no out-of-the-box metrics provided by the event loop so the metrics collected are different between APM vendors</li>
                                    <li name="a8f6" id="a8f6" class="graf graf--li graf-after--li">The metrics clearly provide valuable insights about bottlenecks but deep understanding of the event loop and also the code that is running is key</li>
                                    <li name="859d" id="859d" class="graf graf--li graf-after--li">In the future Dynatrace will add event loop telemetry to its root cause detection to correlate event loop anomalies with problems</li>
                                 </ul>
                                 <p name="acaa" id="acaa" class="graf graf--p graf-after--li">For me there is no doubt that we just built the most comprehensive event loop monitoring solution on the market today, and I’m really happy that this amazing new feature will be rolled out to all of our customers within the next few weeks.</p>
                                 <h3 name="2198" id="2198" class="graf graf--h3 graf-after--p">Credits</h3>
                                 <p name="4d71" id="4d71" class="graf graf--p graf-after--h3">The stellar Node.js agent team at Dynatrace put a lot of effort into getting event loop monitoring right. Much of the findings presented in this blog post is based on their in-depth knowledge of the inner workings of Node.js. I’d like to thank Bernhard Liedl, Dominik Gruber, Gerhard Stöbich and Gernot Reisinger for all the work and support.</p>
                                 <p name="534d" id="534d" class="graf graf--p graf-after--p">I hope this post did shed some light on the topic. Please follow me on twitter <a href="https://twitter.com/dkhan" data-href="https://twitter.com/dkhan" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">@dkhan</a>. I’m happy to answer all your questions there or on the comment section below.</p>
                                 <p name="e007" id="e007" class="graf graf--p graf-after--p">If you still want to learn more about the inner workings of the event loop and how to leverage them as a developer, <a href="https://blog.risingstack.com/node-js-at-scale-understanding-node-js-event-loop/" data-href="https://blog.risingstack.com/node-js-at-scale-understanding-node-js-event-loop/" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">I recommend this post</a> by my friends at RisingStack.</p>
                                 <p name="b9ca" id="b9ca" class="graf graf--p graf-after--p graf--trailing">If you want to give our Node.js monitoring a try, <a href="https://www.dynatrace.com/technologies/nodejs-monitoring/" data-href="https://www.dynatrace.com/technologies/nodejs-monitoring/" class="markup--anchor markup--p-anchor" rel="noopener nofollow" target="_blank">Download our free trial</a> feel free to share your feedback with me anytime — this is how we learn.</p>
                              </div>
                           </div>
                        </section>
                     </div>
