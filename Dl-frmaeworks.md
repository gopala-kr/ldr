  <h2 id="tensorflow">Tensorflow</h2>
<p> Tensorflow, goolge library for machine learning. In simple words it&apos;s a library for numerical computation that uses graphs, on this graph the nodes are the operations, while the edges of this graph are tensors.
Just to remember tensors, are multidimensional matrices, that will flow on the tensorflow graphs.</p>
<p><img src="https://leonardoaraujosantos.gitbooks.io/artificial-inteligence/content/image_folder_7/tensors_flowing.gif" alt=""></p>
<p><img src="https://leonardoaraujosantos.gitbooks.io/artificial-inteligence/content/image_folder_7/Tensorflow_Graph_0.png" alt=""></p>
<p>After this computational graph is created it will create a session that can be executed by multiple CPUs, GPUs distributed or not. Here are the main components of tensorflow:</p>
<ol>
<li>Variables: Retain values between sessions, use for weights/bias</li>
<li>Nodes: The operations</li>
<li>Tensors: Signals that pass from/to nodes</li>
<li>Placeholders: Used to send data between your program and the tensorflow graph</li>
<li>Session: Place when graph is executed.</li>
</ol>
<p>The TensorFlow implementation translates the graph definition into executable operations distributed across available compute resources, such as the CPU or one of your computer&apos;s GPU cards. In general you do not have to specify CPUs or GPUs explicitly. TensorFlow uses your first GPU, if you have one, for as many operations as possible.</p>
<p>Your job as the &quot;client&quot; is to create symbolically this graph using code (C/C++ or python), and ask tensorflow to execute this graph. As you may imagine the tensorflow code for those &quot;execution nodes&quot; is some C/C++, CUDA high performance code. (Also difficult to understand).</p>
<p>For example, it is common to create a graph to represent and train a neural network in the construction phase, and then repeatedly execute a set of training ops in the graph in the execution phase.</p>
<p><img src="https://leonardoaraujosantos.gitbooks.io/artificial-inteligence/content/image_folder_7/Tensorflow_Graph_1.png" alt=""></p>
<h3 id="installing">Installing</h3>
<hr>
<p>If you have already a machine with python (anaconda 3.5) and the nvidia cuda drivers installed (7.5) install tensorflow is simple</p>
<pre><code>export TF_BINARY_URL=https://storage.googleapis.com/tensorflow/linux/gpu/tensorflow-0.10.0rc0-cp35-cp35m-linux_x86_64.whl
sudo pip3 install --ignore-installed --upgrade $TF_BINARY_URL
</code></pre><p>If you still need to install some cuda drivers refer <a href="https://www.youtube.com/watch?v=cVWVRA8XXxs" target="_blank">here</a> for instructions</p>
<h3 id="simple-example">Simple example</h3>
<hr>
<p>Just as a hello world let&apos;s build a graph that just multiply 2 numbers. Here notice some sections of the code.</p>
<ul>
<li>Import tensorflow library</li>
<li>Build the graph</li>
<li>Create a session</li>
<li>Run the session</li>
</ul>
<p>Also notice that on this example we&apos;re passing to our model some constant values so it&apos;s not so useful in real life.</p>
<p><img src="https://leonardoaraujosantos.gitbooks.io/artificial-inteligence/content/image_folder_7/Tensorflow_Graph_2.png" alt=""></p>
<h3 id="exchanging-data">Exchanging data</h3>
<hr>
<p>Tensorflow allow exchanging data with your graph variables through &quot;placeholders&quot;. Those placeholders can be assigned when we ask the session to run.
Imagine placeholders as a way to send data to your graph when you run a session &quot;session.run&quot;</p>
<pre><code class="lang-python"><span class="hljs-comment"># Import tensorflow</span>
<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-comment"># Build graph</span>
a = tf.placeholder(<span class="hljs-string">&apos;float&apos;</span>)
b = tf.placeholder(<span class="hljs-string">&apos;float&apos;</span>)

<span class="hljs-comment"># Graph</span>
y = tf.mul(a,b)

<span class="hljs-comment"># Create session passing the graph</span>
session = tf.Session()
<span class="hljs-comment"># Put the values 3,4 on the placeholders a,b</span>
<span class="hljs-keyword">print</span> session.run(y,feed_dict={a: <span class="hljs-number">3</span>, b:<span class="hljs-number">4</span>})
</code></pre>
<h3 id="linear-regression-on-tensorflow">Linear Regression on tensorflow</h3>
<hr>
<p>Now we&apos;re going to see how to create a linear regression system on tensorflow </p>
<pre><code class="lang-python">
<span class="hljs-comment"># Import libraries (Numpy, Tensorflow, matplotlib)</span>
<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-keyword">import</span> matplotlib.pyplot <span class="hljs-keyword">as</span> plt
get_ipython().magic(<span class="hljs-string">u&apos;matplotlib inline&apos;</span>)

<span class="hljs-comment"># Create 100 points following a function y=0.1 * x + 0.3 with some normal random distribution</span>
num_points = <span class="hljs-number">100</span>
vectors_set = []
<span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> xrange(num_points):
    x1 = np.random.normal(<span class="hljs-number">0.0</span>, <span class="hljs-number">0.55</span>)
    y1 = x1 * <span class="hljs-number">0.1</span> + <span class="hljs-number">0.3</span> + np.random.normal(<span class="hljs-number">0.0</span>, <span class="hljs-number">0.03</span>)
    vectors_set.append([x1, y1])

x_data = [v[<span class="hljs-number">0</span>] <span class="hljs-keyword">for</span> v <span class="hljs-keyword">in</span> vectors_set]
y_data = [v[<span class="hljs-number">1</span>] <span class="hljs-keyword">for</span> v <span class="hljs-keyword">in</span> vectors_set]

<span class="hljs-comment"># Plot data</span>
plt.plot(x_data, y_data, <span class="hljs-string">&apos;r*&apos;</span>, label=<span class="hljs-string">&apos;Original data&apos;</span>)
plt.legend()
plt.show()
</code></pre>
<p><img src="https://leonardoaraujosantos.gitbooks.io/artificial-inteligence/content/image_folder_7/Dataset_Linear_Regression.png" alt=""></p>
<p>Now we&apos;re going to implement a graph with a function <script type="math/tex; ">y=W*x_{data}+b</script>, a loss function <script type="math/tex; ">loss = mean[(y-y_{data})^2]</script>. The loss function will return a scalar value with the mean of all distances between our data, and the model prediction.</p>
<pre><code class="lang-python">
<span class="hljs-comment"># Create our linear regression model</span>
<span class="hljs-comment"># Variables resides internally inside the graph memory</span>
W = tf.Variable(tf.random_uniform([<span class="hljs-number">1</span>], <span class="hljs-number">-1.0</span>, <span class="hljs-number">1.0</span>))
b = tf.Variable(tf.zeros([<span class="hljs-number">1.0</span>]))
y = W * x_data + b

<span class="hljs-comment"># Define a loss function that take into account the distance between</span>
<span class="hljs-comment"># the prediction and our dataset</span>
loss = tf.reduce_mean(tf.square(y-y_data))

<span class="hljs-comment"># Create an optimizer for our loss function (With gradient descent)</span>
optimizer = tf.train.GradientDescentOptimizer(<span class="hljs-number">0.5</span>)
train = optimizer.minimize(loss)
</code></pre>
<p>With the graph built, our job is create a session to initialize all our graph variables, which in this case is our model parameters. Then we also need to call a session x times to train our model.</p>
<pre><code class="lang-python">
<span class="hljs-comment"># Run session</span>
<span class="hljs-comment"># Initialize all graph variables</span>
init = tf.initialize_all_variables()
<span class="hljs-comment"># Create a session and initialize the graph variables (Will acutally run now...)</span>
session = tf.Session()
session.run(init)

<span class="hljs-comment"># Train on 8 steps</span>
<span class="hljs-keyword">for</span> step <span class="hljs-keyword">in</span> xrange(<span class="hljs-number">8</span>):
    <span class="hljs-comment"># Optimize one step</span>
    session.run(train)
    <span class="hljs-comment"># Get access to graph variables(just read) with session.run(varName)    </span>
    print(<span class="hljs-string">&quot;Step=%d, loss=%f, [W=%f b=%f]&quot;</span>) % (step,session.run(loss),session.run(W),session.run(b))

<span class="hljs-comment"># Just plot the set of weights and bias with less loss (last)</span>
plt.plot(x_data, y_data, <span class="hljs-string">&apos;ro&apos;</span>)
plt.plot(x_data, session.run(W) * x_data + session.run(b))
plt.xlabel(<span class="hljs-string">&apos;x&apos;</span>)
plt.ylabel(<span class="hljs-string">&apos;y&apos;</span>)
plt.legend()
plt.show()

<span class="hljs-comment"># Close the Session when we&apos;re done.</span>
session.close()
</code></pre>
<p><img src="https://leonardoaraujosantos.gitbooks.io/artificial-inteligence/content/image_folder_7/Dataset_Linear_Regression_Result.png" alt=""></p>
<h3 id="loading-data">Loading data</h3>
<hr>
<p>Is almost entirely up to you to load data on tensorflow, which means you need to parse the data yourself. For example one option for image classification could be to have text files with all the images filenames, followed by it&apos;s class.  For example:</p>
<p>trainingFile.txt</p>
<pre><code>image1.png 0
image2.png 0
image3.png 1
image4.png 1
image5.png 2
image6.png 2
</code></pre><p>A common API to load the data would be something like this.</p>
<pre><code class="lang-python">
train_data, train_label = getDataFromFile(<span class="hljs-string">&apos;trainingFile.txt&apos;</span>)
val_data, val_label = getDataFromFile(<span class="hljs-string">&apos;validationFile.txt&apos;</span>)

<span class="hljs-comment">## Give to your graph through placeholders...</span>
</code></pre>
<h3 id="tensorboard">Tensorboard</h3>
<hr>
<p>Tensorflow offers a solution to help visualize what is happening on your graph.
This tool is called Tensorboard, basically is a webpage where you can debug your graph, by inspecting it&apos;s variables, node connections etc...</p>
<p><img src="https://leonardoaraujosantos.gitbooks.io/artificial-inteligence/content/image_folder_7/TensorBoardScreenhsot.png" alt=""></p>
<p>In order to use tensorboard you need to annotate on your graph, with the variables that you want to inspect, ie: the loss value. Then you need to generate all the summaries, using the function tf.merge_all_summaries().</p>
<p>Optionally you can also use the function &quot;tf.name_scope&quot; to group nodes on the graph.</p>
<p>After all variables are annotated and you configure your summary, you can go to the console and call:</p>
<pre><code>tensorboard --logdir=/home/leo/test
</code></pre><p>Considering the previous example here are the changes needed to add information to tensorboard. </p>
<p>1) First we annotate the information on the graph that you are interested to inspect building phase. Then call merge_all_summaries(). On our case we annotated loss (scalar) and W,b(histogram)</p>
<pre><code class="lang-python">
<span class="hljs-comment"># Create our linear regression model</span>
<span class="hljs-comment"># Variables resides internally inside the graph memory</span>

<span class="hljs-comment">#tf.name_scope organize things on the tensorboard graphview</span>
<span class="hljs-keyword">with</span> tf.name_scope(<span class="hljs-string">&quot;LinearReg&quot;</span>) <span class="hljs-keyword">as</span> scope:
    W = tf.Variable(tf.random_uniform([<span class="hljs-number">1</span>], <span class="hljs-number">-1.0</span>, <span class="hljs-number">1.0</span>), name=<span class="hljs-string">&quot;Weights&quot;</span>)
    b = tf.Variable(tf.zeros([<span class="hljs-number">1.0</span>]), name=<span class="hljs-string">&quot;Bias&quot;</span>)
    y = W * x_data + b

<span class="hljs-comment"># Define a loss function that take into account the distance between</span>
<span class="hljs-comment"># the prediction and our dataset</span>
<span class="hljs-keyword">with</span> tf.name_scope(<span class="hljs-string">&quot;LossFunc&quot;</span>) <span class="hljs-keyword">as</span> scope:
    loss = tf.reduce_mean(tf.square(y-y_data))

<span class="hljs-comment"># Create an optimizer for our loss function</span>
optimizer = tf.train.GradientDescentOptimizer(<span class="hljs-number">0.5</span>)
train = optimizer.minimize(loss)

<span class="hljs-comment">#### Tensorboard stuff</span>
<span class="hljs-comment"># Annotate loss, weights and bias (Needed for tensorboard)</span>
loss_summary = tf.scalar_summary(<span class="hljs-string">&quot;loss&quot;</span>, loss)
w_h = tf.histogram_summary(<span class="hljs-string">&quot;W&quot;</span>, W)
b_h = tf.histogram_summary(<span class="hljs-string">&quot;b&quot;</span>, b)

<span class="hljs-comment"># Merge all the summaries</span>
merged_op = tf.merge_all_summaries()
</code></pre>
<p>2) During our session creation we need to add a call to &quot;tf.train.SummaryWriter&quot; to create a writer. You need to pass a directory where tensorflow will save the summaries.</p>
<pre><code class="lang-python">
<span class="hljs-comment"># Initialize all graph variables</span>
init = tf.initialize_all_variables()

<span class="hljs-comment"># Create a session and initialize the graph variables (Will acutally run now...)</span>
session = tf.Session()
session.run(init)

<span class="hljs-comment"># Writer for tensorboard (Directory)</span>
writer_tensorboard = tf.train.SummaryWriter(<span class="hljs-string">&apos;/home/leo/test&apos;</span>, session.graph_def)
</code></pre>
<p>3) Then when we execute our graph, for example during training we can ask tensorflow to generate a summary. Of course calling this every time will impact performance. To manage this you could call this at the end of every epoch.</p>
<pre><code class="lang-python">
<span class="hljs-keyword">for</span> step <span class="hljs-keyword">in</span> xrange(<span class="hljs-number">1000</span>):
    <span class="hljs-comment"># Optimize one step</span>
    session.run(train)

    <span class="hljs-comment"># Add summary (Everytime could be to much....)</span>
    result_summary = session.run(merged_op)    
    writer_tensorboard.add_summary(result_summary, step)
</code></pre>
<h4 id="results-on-tensorboard">Results on tensorboard</h4>
<hr>
<p>Here we can see our linear regression model as a computing graph.
<img src="https://leonardoaraujosantos.gitbooks.io/artificial-inteligence/content/image_folder_7/GraphLinearRegTensorflow.png" alt=""></p>
<p>Bellow we can see how the loss evolved on each iteration.</p>
<p><img src="https://leonardoaraujosantos.gitbooks.io/artificial-inteligence/content/image_folder_7/LossLinearRegTensorflow.png" alt=""></p>
<p>Sometimes ipython hold versions of your graph that create problems when using tensorboard, one option is to restart the kernel, if you have problems.</p>
<h2 id="using-gpus">Using GPUs</h2>
<hr>
<p>Tensorflow also allows you to use GPUs to execute graphs or particular sections of your graph.</p>
<p>On common machine learning system you would have one multi-core CPU, with one or more GPUs, tensorflow represent them as follows</p>
<ul>
<li>&quot;/cpu:0&quot;: Multicore CPU</li>
<li>&quot;/gpu0&quot;: First GPU</li>
<li>&quot;/gpu1&quot;: Second GPU</li>
</ul>
<p>Unfortunately tensorflow does not have an official function to list the devices available on your system, but there is an unofficial way.</p>
<pre><code class="lang-python"><span class="hljs-keyword">from</span> tensorflow.python.client <span class="hljs-keyword">import</span> device_lib
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">get_devices_available</span><span class="hljs-params">()</span>:</span>
    local_device_protos = device_lib.list_local_devices()
    <span class="hljs-keyword">return</span> [x.name <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> local_device_protos]
</code></pre>
<pre><code class="lang-python">print(get_devices_available())
</code></pre>
<pre><code>[&apos;/cpu:0&apos;, &apos;/gpu:0&apos;, &apos;/gpu:1&apos;]
</code></pre><h3 id="fix-graph-to-a-device">Fix graph to a device</h3>
<hr>
<p>Use the &quot;with tf.device(&apos;/gpu:0&apos;)&quot; statement on python to lock all nodes on this graph block to a particular gpu.</p>
<pre><code class="lang-python"><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-comment"># Creates a graph.</span>
<span class="hljs-keyword">with</span> tf.device(<span class="hljs-string">&apos;/gpu:0&apos;</span>):
    a = tf.constant([<span class="hljs-number">1.0</span>, <span class="hljs-number">2.0</span>, <span class="hljs-number">3.0</span>, <span class="hljs-number">4.0</span>, <span class="hljs-number">5.0</span>, <span class="hljs-number">6.0</span>], shape=[<span class="hljs-number">2</span>, <span class="hljs-number">3</span>], name=<span class="hljs-string">&apos;a&apos;</span>)
    b = tf.constant([<span class="hljs-number">1.0</span>, <span class="hljs-number">2.0</span>, <span class="hljs-number">3.0</span>, <span class="hljs-number">4.0</span>, <span class="hljs-number">5.0</span>, <span class="hljs-number">6.0</span>], shape=[<span class="hljs-number">3</span>, <span class="hljs-number">2</span>], name=<span class="hljs-string">&apos;b&apos;</span>)
    c = tf.matmul(a, b)

<span class="hljs-comment"># Creates a session with log_device_placement set to True, this will dump </span>
<span class="hljs-comment"># on the log how tensorflow is mapprint the operations on devices</span>
sess = tf.Session(config=tf.ConfigProto(log_device_placement=<span class="hljs-keyword">True</span>))
<span class="hljs-comment"># Runs the op.</span>
print(sess.run(c))
sess.close()
</code></pre>
<pre><code>[[ 22.  28.]
 [ 49.  64.]]
</code></pre><h2 id="multiple-gpus-and-training">Multiple Gpus and training</h2>
<hr>
<p>Now we will explain how training is one on a multiple GPU system.</p>
<p><img src="https://leonardoaraujosantos.gitbooks.io/artificial-inteligence/content/image_folder_7/multipleGpu_Train.png"></p>
<p>Baiscally the steps for multiple gpu training is this:</p>
<ol>
<li>Separate your training data in batches as usual</li>
<li>Create a copy of the model in each gpu</li>
<li>Distribute different batches for each gpu</li>
<li>Each gpu will forward the batch and calculate it&apos;s gradients</li>
<li>Each gpu will send the gradients to the cpu</li>
<li>The cpu will average each gradient, and do a gradient descent. The model parameters are updated with the gradients averaged across all model replicas.  </li>
<li>The cpu will distribute the new model to all gpus</li>
<li>the process loop again until all training is done</li>
</ol>

## SkFlow

<p>In order to make the use of tensorflow simpler to experiment machine learning, google offered a library that stays on top of tensorflow. Skflow make life easier.</p>
<h3 id="import-library">Import library</h3>
<pre><code class="lang-python"><span class="hljs-keyword">import</span> tensorflow.contrib.learn <span class="hljs-keyword">as</span> skflow
<span class="hljs-keyword">from</span> sklearn <span class="hljs-keyword">import</span> datasets, metrics
<span class="hljs-keyword">from</span> sklearn <span class="hljs-keyword">import</span> cross_validation
</code></pre>
<h4 id="load-dataset">Load dataset</h4>
<pre><code class="lang-python">iris = datasets.load_iris()
x_train, x_test, y_train, y_test = cross_validation.train_test_split(
    iris.data, iris.target, test_size=<span class="hljs-number">0.2</span>, random_state=<span class="hljs-number">42</span>)

<span class="hljs-comment"># Feature columns is required for new versions</span>
feature_columns = skflow.infer_real_valued_columns_from_input(x_train)
</code></pre>
<h3 id="linear-classifier">Linear classifier</h3>
<pre><code class="lang-python">classifier = skflow.LinearClassifier(feature_columns=feature_columns, n_classes=<span class="hljs-number">3</span>,model_dir=<span class="hljs-string">&apos;/tmp/tf/linear/&apos;</span>)
classifier.fit(x_train, y_train, steps=<span class="hljs-number">200</span>, batch_size=<span class="hljs-number">32</span>)
score = metrics.accuracy_score(y_test, classifier.predict(x_test))
print(<span class="hljs-string">&quot;Accuracy: %f&quot;</span> % score)
</code></pre>
<pre><code>Accuracy: 0.966667
</code></pre><h3 id="multi-layer-perceptron">Multi layer perceptron</h3>
<pre><code class="lang-python">classifier = skflow.DNNClassifier(feature_columns=feature_columns, hidden_units=[<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">10</span>], 
                                  n_classes=<span class="hljs-number">3</span>,model_dir=<span class="hljs-string">&apos;/tmp/tf/mlp/&apos;</span>)
classifier.fit(x_train, y_train, steps=<span class="hljs-number">200</span>)

score = metrics.accuracy_score(y_test, classifier.predict(x_test))
print(<span class="hljs-string">&quot;Accuracy: %f&quot;</span> % score)
</code></pre>
<pre><code>Accuracy: 1.000000
</code></pre><h3 id="using-tensorboard">Using Tensorboard</h3>
<p>It&apos;s much easier to monitor your model with tensorboard through skflow. Just add the parameter &quot;model_dir&quot; to the classifier constructor.</p>
<p>After running this code, type on your server console:</p>
<pre><code class="lang-bash">tensorboard --logdir=/tmp/tf_examples/<span class="hljs-built_in">test</span>/
</code></pre>
<pre><code class="lang-python">classifier = skflow.DNNClassifier(feature_columns=feature_columns, hidden_units=[<span class="hljs-number">10</span>, <span class="hljs-number">20</span>, <span class="hljs-number">10</span>], n_classes=<span class="hljs-number">3</span>,model_dir=<span class="hljs-string">&apos;/tmp/tf_examples/test/&apos;</span>)
classifier.fit(x_train, y_train, steps=<span class="hljs-number">200</span>)
score = metrics.accuracy_score(y_test, classifier.predict(x_test))
print(<span class="hljs-string">&quot;Accuracy: %f&quot;</span> % score)
</code></pre>
<pre><code>Accuracy: 1.000000
</code></pre><pre><code class="lang-python">

</code></pre>

<hr>

<h2 id="lua-language">Lua language</h2>
<hr>
<p>Lua was first created to be used on embedded systems, the idea was to have a simple cross-platform and fast language. One the main features of Lua is it&apos;s easy integration with C/C++.</p>
<p>Lua was originally designed in 1993 as a language for extending software applications to meet the increasing demand for customization at the time.</p>
<p>This extension means that you could have a large C/C++ program and, some parts in Lua where you could easily change without the need to recompile everything.</p>
<h2 id="torch">Torch</h2>
<hr>
<p>Torch is a scientific computing framework based on Lua with CPU and GPU backends. You can imagine like a Numpy but with CPU and GPU implementation. Some nice features:</p>
<ul>
<li>Efficient linear algebra functions with GPU support</li>
<li>Neural Network package, with automatic differentiation (No need to backpropagate manually)</li>
<li>Multi-GPU support</li>
</ul>
<h2 id="first-contact-with-lua">First contact with Lua</h2>

<p>Bellow we have some simple examples on Lua just to have some contact with the language.</p>
<pre><code class="lang-lua"><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Hello World&quot;</span>) <span class="hljs-comment">-- First thing, note that there is no main...</span>
<span class="hljs-comment">--[[
This is how we do a multi-line comment
on lua, to execute a lua program just use...
lua someFile.lua
]]</span>
</code></pre>
<pre><code class="lang-lua">someVar = <span class="hljs-string">&quot;Leonardo&quot;</span>
<span class="hljs-built_in">io</span>.write(<span class="hljs-string">&quot;Size of variable is &quot;</span>, #someVar, <span class="hljs-string">&quot; and it&apos;s value is: \&quot;&quot;</span>, someVar, <span class="hljs-string">&quot;\&quot;\n&quot;</span>)
<span class="hljs-comment">-- Variables on lua are dynamically typed...</span>
someVar = <span class="hljs-number">10</span>; <span class="hljs-comment">-- You can use &quot;;&quot; to end a statement</span>
<span class="hljs-built_in">io</span>.write(<span class="hljs-string">&quot;Now it&apos;s value is:\&quot;&quot;</span>, someVar, <span class="hljs-string">&quot;\&quot;&quot;</span>)
</code></pre>
<h3 id="lua-datatypes">Lua datatypes</h3>

<p>The language offer those basic types:</p>
<ul>
<li>Numbers(Float)</li>
<li>string</li>
<li>boolean</li>
<li>table</li>
</ul>
<pre><code class="lang-lua"><span class="hljs-built_in">print</span>(<span class="hljs-built_in">type</span>(someVar))
someVar = <span class="hljs-string">&apos;Leonardo&apos;</span> <span class="hljs-comment">-- Strings can use use simple quotes</span>
<span class="hljs-built_in">print</span>(<span class="hljs-built_in">type</span>(someVar))
someVar = <span class="hljs-keyword">true</span>
<span class="hljs-built_in">print</span>(<span class="hljs-built_in">type</span>(someVar))
someVar = {<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-string">&quot;leo&quot;</span>,<span class="hljs-keyword">true</span>}
<span class="hljs-built_in">print</span>(<span class="hljs-built_in">type</span>(someVar))
</code></pre>
<h3 id="doing-some-math">Doing some math</h3>

<p>Normally we will rely on Torch, but Lua has some math support as well.</p>
<pre><code class="lang-lua"><span class="hljs-built_in">io</span>.write(<span class="hljs-string">&quot;5 + 3 = &quot;</span>, <span class="hljs-number">5</span>+<span class="hljs-number">3</span>, <span class="hljs-string">&quot;\n&quot;</span>)
<span class="hljs-built_in">io</span>.write(<span class="hljs-string">&quot;5 - 3 = &quot;</span>, <span class="hljs-number">5</span><span class="hljs-number">-3</span>, <span class="hljs-string">&quot;\n&quot;</span>)
<span class="hljs-built_in">io</span>.write(<span class="hljs-string">&quot;5 * 3 = &quot;</span>, <span class="hljs-number">5</span>*<span class="hljs-number">3</span>, <span class="hljs-string">&quot;\n&quot;</span>)
<span class="hljs-built_in">io</span>.write(<span class="hljs-string">&quot;5 / 3 = &quot;</span>, <span class="hljs-number">5</span>/<span class="hljs-number">3</span>, <span class="hljs-string">&quot;\n&quot;</span>)
<span class="hljs-built_in">io</span>.write(<span class="hljs-string">&quot;5.2 % 3 = &quot;</span>, <span class="hljs-number">5</span>%<span class="hljs-number">3</span>, <span class="hljs-string">&quot;\n&quot;</span>)
<span class="hljs-comment">-- Generate random number between 0 and 1</span>
<span class="hljs-built_in">io</span>.write(<span class="hljs-string">&quot;math.random() : &quot;</span>, <span class="hljs-built_in">math</span>.random(<span class="hljs-number">0</span>,<span class="hljs-number">3</span>), <span class="hljs-string">&quot;\n&quot;</span>)
<span class="hljs-comment">-- Print float to 10 decimals</span>
<span class="hljs-built_in">print</span>(<span class="hljs-built_in">string</span>.format(<span class="hljs-string">&quot;Pi = %.10f&quot;</span>, <span class="hljs-built_in">math</span>.pi))
</code></pre>
<pre><code>5 + 3 = 8
5 - 3 = 2
5 * 3 = 15
5 / 3 = 1.6666666666667
5.2 % 3 = 2
math.random() : 2
Pi = 3.1415926536    
</code></pre><h3 id="lua-include-require">Lua include (require)</h3>

<p>The lua statement to include other lua files is the &quot;require&quot;, as usual it is used to add some library</p>
<pre><code class="lang-lua"><span class="hljs-built_in">require</span> <span class="hljs-string">&apos;image&apos;</span>
pedestrian = image.<span class="hljs-built_in">load</span>(<span class="hljs-string">&apos;./pedestrianSign.png&apos;</span>)
itorch.image(pedestrian)
</code></pre>
<p><img src="image_folder_6/pedestrianSign.png" alt=""></p>
<h3 id="conditionals">Conditionals</h3>

<p>Just the simple if-then-else. Lua does not have switch statement.</p>
<pre><code class="lang-lua">age = <span class="hljs-number">17</span>
<span class="hljs-keyword">if</span> age &lt; <span class="hljs-number">16</span> <span class="hljs-keyword">then</span> 
    <span class="hljs-built_in">print</span>(<span class="hljs-built_in">string</span>.format(<span class="hljs-string">&quot;You are still a kid with %d years old\n&quot;</span>, age))
<span class="hljs-keyword">elseif</span> (age == <span class="hljs-number">34</span>) <span class="hljs-keyword">or</span> (age==<span class="hljs-number">35</span>) <span class="hljs-keyword">then</span>
    <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Getting old leo...&quot;</span>)
<span class="hljs-keyword">else</span>
    <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Hi young man&quot;</span>)
<span class="hljs-keyword">end</span>

<span class="hljs-comment">-- Lua does not have ternary operators</span>
canVote = age &gt; <span class="hljs-number">18</span> <span class="hljs-keyword">and</span> <span class="hljs-keyword">true</span> <span class="hljs-keyword">or</span> <span class="hljs-keyword">false</span> <span class="hljs-comment">-- canVote=true if age&gt;18 else canVote=false</span>
<span class="hljs-built_in">io</span>.write(<span class="hljs-string">&quot;Can I vote: &quot;</span>, <span class="hljs-built_in">tostring</span>(canVote))
</code></pre>
<h3 id="loops">Loops</h3>

<p>Lua have while, repeat and for loops. For loops has also a &quot;for-each&quot; extension to iterate on tables.</p>
<pre><code class="lang-lua">i = <span class="hljs-number">1</span>
<span class="hljs-keyword">while</span> (i &lt;= <span class="hljs-number">10</span>) <span class="hljs-keyword">do</span>
    <span class="hljs-built_in">io</span>.write(i,<span class="hljs-string">&quot;\n&quot;</span>)
    i = i+<span class="hljs-number">1</span>
    <span class="hljs-keyword">if</span> i==<span class="hljs-number">4</span> <span class="hljs-keyword">then</span> <span class="hljs-keyword">break</span> <span class="hljs-keyword">end</span>
<span class="hljs-keyword">end</span>
</code></pre>
<pre><code class="lang-lua"><span class="hljs-comment">-- Initial value, end value, increment at each loop...</span>
<span class="hljs-keyword">for</span> i=<span class="hljs-number">1</span>,<span class="hljs-number">3</span>,<span class="hljs-number">1</span> <span class="hljs-keyword">do</span>
    <span class="hljs-built_in">io</span>.write(i,<span class="hljs-string">&quot;\n&quot;</span>)
<span class="hljs-keyword">end</span>
</code></pre>
<pre><code class="lang-lua"><span class="hljs-comment">-- Create a table which is a list of items like an array</span>
someTable = {<span class="hljs-string">&quot;January&quot;</span>, <span class="hljs-string">&quot;February&quot;</span>, <span class="hljs-string">&quot;March&quot;</span>, <span class="hljs-string">&quot;April&quot;</span>,<span class="hljs-number">10</span>}

<span class="hljs-comment">-- Iterate on table months</span>
<span class="hljs-keyword">for</span> keyVar, valueVar <span class="hljs-keyword">in</span> <span class="hljs-built_in">pairs</span>(someTable) <span class="hljs-keyword">do</span>
  <span class="hljs-built_in">io</span>.write(valueVar, <span class="hljs-string">&quot;(key=&quot;</span>, keyVar, <span class="hljs-string">&quot;), &quot;</span>)
<span class="hljs-keyword">end</span>
</code></pre>
<pre><code>January(key=1), February(key=2), March(key=3), April(key=4), 10(key=5), 
</code></pre><h3 id="functions">Functions</h3>

<p>Defining functions in Lua is quite easy, it&apos;s syntax reminds matlab.</p>
<pre><code class="lang-lua"><span class="hljs-comment">-- Function definition</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getSum</span><span class="hljs-params">(a,b)</span></span>
    <span class="hljs-keyword">return</span> a+b
<span class="hljs-keyword">end</span>

<span class="hljs-comment">-- Call function</span>
<span class="hljs-built_in">print</span>(<span class="hljs-built_in">string</span>.format(<span class="hljs-string">&quot;5 + 2 = %d&quot;</span>, getSum(<span class="hljs-number">5</span>,<span class="hljs-number">2</span>)))
</code></pre>
<h3 id="tables">Tables</h3>

<p>On Lua we use tables for everything else (ie: Lists, Dictionaries, Classes, etc...)</p>
<pre><code class="lang-lua"><span class="hljs-comment">-- tables</span>
dict = {a = <span class="hljs-number">1</span>, b = <span class="hljs-number">2</span>, c = <span class="hljs-number">3</span>} 
list = {<span class="hljs-number">10</span>,<span class="hljs-number">20</span>,<span class="hljs-number">30</span>} 

<span class="hljs-comment">-- two prints that display the same value</span>
<span class="hljs-built_in">print</span>(dict.a)
<span class="hljs-built_in">print</span>(dict[<span class="hljs-string">&quot;a&quot;</span>])
<span class="hljs-comment">-- Tables start with 1 (Like matlab)</span>
<span class="hljs-built_in">print</span>(list[<span class="hljs-number">1</span>]) 

<span class="hljs-comment">-- You can also add functions on tables</span>
tab = {<span class="hljs-number">1</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>}
<span class="hljs-comment">-- Add function sum to table tab</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">tab.sum</span> <span class="hljs-params">()</span></span>
  c = <span class="hljs-number">0</span>
  <span class="hljs-keyword">for</span> i=<span class="hljs-number">1</span>,#tab <span class="hljs-keyword">do</span>
    c = c + tab[i]
  <span class="hljs-keyword">end</span>
  <span class="hljs-keyword">return</span> c
<span class="hljs-keyword">end</span>

<span class="hljs-built_in">print</span>(tab:sum()) <span class="hljs-comment">-- displays 8 (the colon is used for calling methods) </span>
<span class="hljs-comment">-- tab:sum() means tab.sum(tab)</span>
<span class="hljs-built_in">print</span>(tab.sum()) <span class="hljs-comment">-- On this case it will also work</span>
<span class="hljs-built_in">print</span>(tab)
</code></pre>
<pre><code>1    
1    
10    
8    
8    
{
  1 : 1
  2 : 3
  3 : 4
  sum : function: 0x4035ede8
}
</code></pre><h3 id="object-oriented-programming">Object oriented programming</h3>

<p>Lua does not support directly OOP, but you can emulate all it&apos;s main functionalities (Inheritance, Encapsulation) with tables and metatables</p>
<p>Metatable tutorial: Used to override operations (metamethods) on tables.</p>
<p><a href="http://www.tutorialspoint.com/lua/lua_metatables.htm" target="_blank"></a></p>
<pre><code class="lang-lua"><span class="hljs-comment">--[[

Create a class &quot;Animal&quot; with properties:height,weight,name,sound
and methods: new,getInfo,saySomething

]]</span>

<span class="hljs-comment">-- Define the defaults for our table</span>
Animal = {height = <span class="hljs-number">0</span>, weight = <span class="hljs-number">0</span>, name = <span class="hljs-string">&quot;No Name&quot;</span>, sound = <span class="hljs-string">&quot;No Sound&quot;</span>}

<span class="hljs-comment">-- Constructor</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Animal:new</span> <span class="hljs-params">(height, weight, name, sound)</span></span> 
  <span class="hljs-comment">-- Set a empty metatable to the table Animal (Crazy whay to create an instance)  </span>
  <span class="hljs-built_in">setmetatable</span>({}, Animal)
  <span class="hljs-comment">-- Self is a reference to this table instance</span>
  self.height = height
  self.weight = weight
  self.name = name
  self.sound = sound 
  <span class="hljs-keyword">return</span> self
<span class="hljs-keyword">end</span>

<span class="hljs-comment">-- Some method</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Animal:getInfo</span><span class="hljs-params">()</span></span> 
  animalStr = <span class="hljs-built_in">string</span>.format(<span class="hljs-string">&quot;%s weighs %.1f kg, is %.1fm in tall&quot;</span>, self.name, self.weight, self.height) 
  <span class="hljs-keyword">return</span> animalStr
<span class="hljs-keyword">end</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Animal:saySomething</span><span class="hljs-params">()</span></span>
    <span class="hljs-built_in">print</span>(self.sound)
<span class="hljs-keyword">end</span>
</code></pre>
<pre><code class="lang-lua"><span class="hljs-comment">-- Create an Animal</span>
flop = Animal:new(<span class="hljs-number">1</span>,<span class="hljs-number">10.5</span>,<span class="hljs-string">&quot;Flop&quot;</span>,<span class="hljs-string">&quot;Auau&quot;</span>)
<span class="hljs-built_in">print</span>(flop.name) <span class="hljs-comment">-- same as flop[&quot;name&quot;]</span>
<span class="hljs-built_in">print</span>(flop:getInfo()) <span class="hljs-comment">-- same as flop.getInfo(flop)</span>
<span class="hljs-built_in">print</span>(flop:saySomething())

<span class="hljs-comment">-- Other way to say the samething</span>
<span class="hljs-built_in">print</span>(flop[<span class="hljs-string">&quot;name&quot;</span>]) 
<span class="hljs-built_in">print</span>(flop.getInfo(flop))

<span class="hljs-comment">-- Type of our object</span>
<span class="hljs-built_in">print</span>(<span class="hljs-built_in">type</span>(flop))
</code></pre>
<pre><code>Flop    
Flop weighs 10.5 kg, is 1.0m in tall    
Auau    

Flop    
Flop weighs 10.5 kg, is 1.0m in tall    
table    
</code></pre><h3 id="file-io">File I/O</h3>
<pre><code class="lang-lua"><span class="hljs-comment">-- Open a file to write</span>
file = <span class="hljs-built_in">io</span>.open(<span class="hljs-string">&quot;./output.txt&quot;</span>, <span class="hljs-string">&quot;w&quot;</span>)

<span class="hljs-comment">-- Copy the content of the file input.txt to test.txt</span>
<span class="hljs-keyword">for</span> line <span class="hljs-keyword">in</span> <span class="hljs-built_in">io</span>.lines(<span class="hljs-string">&quot;./input.txt&quot;</span>) <span class="hljs-keyword">do</span>
  <span class="hljs-built_in">print</span>(line)
  file:write(<span class="hljs-built_in">string</span>.format(<span class="hljs-string">&quot;%s from input (At output)\n&quot;</span>, line)) <span class="hljs-comment">-- write on file</span>
<span class="hljs-keyword">end</span>

file:close()
</code></pre>
<pre><code>Line 1 at input    
Line 2 at input    
</code></pre><h3 id="run-console-commands">Run console commands</h3>
<pre><code class="lang-lua"><span class="hljs-keyword">local</span> t = <span class="hljs-built_in">os</span>.execute(<span class="hljs-string">&quot;ls&quot;</span>)
<span class="hljs-built_in">print</span>(t)
<span class="hljs-keyword">local</span> catResult = <span class="hljs-built_in">os</span>.execute(<span class="hljs-string">&quot;cat output.txt&quot;</span>)
<span class="hljs-built_in">print</span>(catResult)
</code></pre>
<pre><code>FirstContactTorch.ipynb
input.txt
LuaLanguage.ipynb
output.txt
pedestrianSign.png
plot.png
true    


Line 1 at input from input (At output)
Line 2 at input from input (At output)
true    
</code></pre><h2 id="first-contact-with-torch">First contact with Torch</h2>

<p>On this section we&apos;re going to see how to do simple operations with Torch, more complex stuff will be dealt latter.</p>
<p>One of the torch objectives is to give some matlab functionality, an usefull cheetsheat can be found here:
<a href="http://atamahjoubfar.github.io/Torch_for_Matlab_users.pdf" target="_blank"></a>
<a href="https://github.com/facebook/iTorch" target="_blank"></a>
<a href="http://www.lighting-torch.com/2015/08/24/plotting-with-torch7/3/" target="_blank"></a>
<a href="http://torch.ch/docs/five-simple-examples.html" target="_blank"></a>
<a href="https://github.com/torch/torch7/wiki/Cheatsheet" target="_blank"></a>
<a href="https://github.com/soumith/cvpr2015/blob/master/Deep%20Learning%20with%20Torch.ipynb" target="_blank"></a></p>
<pre><code class="lang-lua"><span class="hljs-comment">-- Include torch library</span>
<span class="hljs-built_in">require</span> <span class="hljs-string">&apos;torch&apos;</span>; <span class="hljs-comment">-- Like matlab the &quot;;&quot; also avoid echo the output</span>

<span class="hljs-comment">-- Create a 2x4 matrix</span>
m = torch.Tensor({{<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>}, {<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>}})
<span class="hljs-built_in">print</span>(m)

<span class="hljs-comment">-- Get element at second row and third collumn</span>
<span class="hljs-built_in">print</span>(m[{<span class="hljs-number">2</span>,<span class="hljs-number">3</span>}])
</code></pre>
<pre><code> 1  2  3  4
 5  6  7  8
[torch.DoubleTensor of size 2x4]

7    
</code></pre><h3 id="some-matrix-operations">Some Matrix operations</h3>
<pre><code class="lang-lua"><span class="hljs-comment">-- Define some Matrix/Tensors</span>
a = torch.Tensor(<span class="hljs-number">5</span>,<span class="hljs-number">3</span>) <span class="hljs-comment">-- construct a 5x3 matrix/tensor, uninitialized</span>
a = torch.rand(<span class="hljs-number">5</span>,<span class="hljs-number">3</span>) <span class="hljs-comment">-- Create a 5x3 matrix/tensor with random values</span>
b=torch.rand(<span class="hljs-number">3</span>,<span class="hljs-number">4</span>) <span class="hljs-comment">-- Create a 3x4 matrix/tensor with random values</span>

<span class="hljs-comment">-- You can also fill a matrix with values (On this case with zeros)</span>
allZeros = torch.Tensor(<span class="hljs-number">2</span>,<span class="hljs-number">2</span>):fill(<span class="hljs-number">0</span>)
<span class="hljs-built_in">print</span>(allZeros)

<span class="hljs-comment">-- Matrix multiplcation and it&apos;s syntax variants</span>
c = a*b 
c = torch.mm(a,b)
<span class="hljs-built_in">print</span>(c)
d=torch.Tensor(<span class="hljs-number">5</span>,<span class="hljs-number">4</span>)
d:mm(a,b) <span class="hljs-comment">-- store the result of a*b in c</span>

<span class="hljs-comment">-- Transpose a matrix</span>
m_trans = m:t()
<span class="hljs-built_in">print</span>(m_trans)
</code></pre>
<pre><code> 0  0
 0  0
[torch.DoubleTensor of size 2x2]

 0.8259  0.6816  0.3766  0.7048
 1.3681  0.9438  0.7739  1.1653
 1.2885  0.9653  0.5573  0.9808
 1.2556  0.8850  0.5501  0.9142
 1.8468  1.3579  0.7680  1.3500
[torch.DoubleTensor of size 5x4]

 1  5
 2  6
 3  7
 4  8
[torch.DoubleTensor of size 4x2]
</code></pre><h3 id="doing-operations-on-gpu">Doing operations on GPU</h3>
<pre><code class="lang-lua"><span class="hljs-comment">-- Include torch (cuda) library</span>
<span class="hljs-built_in">require</span> <span class="hljs-string">&apos;cutorch&apos;</span>

<span class="hljs-comment">-- Move arrays to GPU (and convert it&apos;s types to cuda types)</span>
a = a:cuda()
b = b:cuda()
d = d:cuda()

<span class="hljs-comment">-- Same multiplication just different syntax</span>
c = a*b
d:mm(a,b)

<span class="hljs-built_in">print</span>(c)
</code></pre>
<pre><code> 1.1058  0.6183  1.0518  0.7451
 0.5932  0.8015  0.9441  0.5477
 0.4915  0.8143  0.9613  0.4345
 0.1699  0.6697  0.6656  0.2500
 0.6525  0.6174  0.8894  0.4446
[torch.CudaTensor of size 5x4]
</code></pre><h3 id="plotting">Plotting</h3>
<pre><code class="lang-lua">Plot = <span class="hljs-built_in">require</span> <span class="hljs-string">&apos;itorch.Plot&apos;</span>

<span class="hljs-comment">-- Give me 10 random numbers</span>
<span class="hljs-keyword">local</span> y = torch.randn(<span class="hljs-number">10</span>) 

<span class="hljs-comment">-- Get 1d tensor from 0 to 9 (10 elements)</span>
<span class="hljs-keyword">local</span> x = torch.range(<span class="hljs-number">0</span>, <span class="hljs-number">9</span>)
Plot():line(x, y,<span class="hljs-string">&apos;red&apos;</span> ,<span class="hljs-string">&apos;Sinus Wave&apos;</span>):title(<span class="hljs-string">&apos;Simple Plot&apos;</span>):draw()
</code></pre>
<p><img src="image_folder_6/SimplePlotItorch.png" alt=""></p>
<h3 id="starting-with-nn-xor-problem">Starting with nn (XOR problem)</h3>
<pre><code class="lang-lua"><span class="hljs-built_in">require</span> <span class="hljs-string">&quot;nn&quot;</span>

<span class="hljs-comment">-- make a multi-layer perceptron</span>
mlp = nn.Sequential();  
<span class="hljs-comment">-- 2 inputs, one output 1 hidden layer with 20 neurons</span>
inputs = <span class="hljs-number">2</span>; outputs = <span class="hljs-number">1</span>; hiddenUnits = <span class="hljs-number">20</span>; 

<span class="hljs-comment">-- Mount the model</span>
mlp:add(nn.Linear(inputs, hiddenUnits))
mlp:add(nn.Tanh())
mlp:add(nn.Linear(hiddenUnits, outputs))
</code></pre>
<h4 id="define-the-loss-function">Define the loss function</h4>

<p>On torch the loss function is called criterion, as on this case we&apos;re dealling with a binary classification, we will choose the Mean Squared Error criterion</p>
<pre><code class="lang-lua">criterion_MSE = nn.MSECriterion()
</code></pre>
<h4 id="training-manually">Training Manually</h4>

<p>Here we&apos;re going to back-propagate our model to get the output related to the loss gradient <script type="math/tex; ">dout</script> then use gradient descent to update the parameters.</p>
<pre><code class="lang-lua"><span class="hljs-keyword">for</span> i = <span class="hljs-number">1</span>,<span class="hljs-number">2500</span> <span class="hljs-keyword">do</span>
  <span class="hljs-comment">-- random sample</span>
  <span class="hljs-keyword">local</span> input= torch.randn(<span class="hljs-number">2</span>);     <span class="hljs-comment">-- normally distributed example in 2d</span>
  <span class="hljs-keyword">local</span> output= torch.Tensor(<span class="hljs-number">1</span>);
  <span class="hljs-comment">-- Create XOR lables on the fly....</span>
  <span class="hljs-keyword">if</span> input[<span class="hljs-number">1</span>] * input[<span class="hljs-number">2</span>] &gt; <span class="hljs-number">0</span> <span class="hljs-keyword">then</span>  
    output[<span class="hljs-number">1</span>] = <span class="hljs-number">-1</span>
  <span class="hljs-keyword">else</span>
    output[<span class="hljs-number">1</span>] = <span class="hljs-number">1</span>
  <span class="hljs-keyword">end</span>

  <span class="hljs-comment">-- Feed to the model (with current set of weights), then calculate a loss</span>
  criterion_MSE:forward(mlp:forward(input), output)

  <span class="hljs-comment">-- Reset the current gradients before backpropagate (Always do)</span>
  mlp:zeroGradParameters()
  <span class="hljs-comment">-- Backpropagate the loss to the hidden layer</span>
  mlp:backward(input, criterion_MSE:backward(mlp.output, output))
  <span class="hljs-comment">-- Update parameters(Gradient descent) with alpha=0.01</span>
  mlp:updateParameters(<span class="hljs-number">0.01</span>)
<span class="hljs-keyword">end</span>
</code></pre>
<h4 id="test-the-network">Test the network</h4>
<pre><code class="lang-lua">x = torch.Tensor(<span class="hljs-number">2</span>)
x[<span class="hljs-number">1</span>] =  <span class="hljs-number">0.5</span>; x[<span class="hljs-number">2</span>] =  <span class="hljs-number">0.5</span>; <span class="hljs-built_in">print</span>(mlp:forward(x)) <span class="hljs-comment">-- 0 XOR 0 = 0 (negative)</span>
x[<span class="hljs-number">1</span>] =  <span class="hljs-number">0.5</span>; x[<span class="hljs-number">2</span>] = <span class="hljs-number">-0.5</span>; <span class="hljs-built_in">print</span>(mlp:forward(x)) <span class="hljs-comment">-- 0 XOR 1 = 1 (positive)</span>
x[<span class="hljs-number">1</span>] = <span class="hljs-number">-0.5</span>; x[<span class="hljs-number">2</span>] =  <span class="hljs-number">0.5</span>; <span class="hljs-built_in">print</span>(mlp:forward(x)) <span class="hljs-comment">-- 1 XOR 0 = 1 (positive)</span>
x[<span class="hljs-number">1</span>] = <span class="hljs-number">-0.5</span>; x[<span class="hljs-number">2</span>] = <span class="hljs-number">-0.5</span>; <span class="hljs-built_in">print</span>(mlp:forward(x)) <span class="hljs-comment">-- 1 XOR 1 = 0 (negative)</span>
</code></pre>
<pre><code>-0.8257
[torch.DoubleTensor of size 1]

 0.6519
[torch.DoubleTensor of size 1]

 0.4468
[torch.DoubleTensor of size 1]

-0.7814
[torch.DoubleTensor of size 1]
</code></pre><h4 id="trainning-with-optimim">Trainning with optimim</h4>

<p>Torch provides a standard way to optimize any function with respect to some parameters. In our case, our function will be the loss of our network, given an input, and a set of weights. The goal of training a neural net is to optimize the weights to give the lowest loss over our training set of input data. So, we are going to use optim to minimize the loss with respect to the weights, over our training set.</p>
<pre><code class="lang-lua"><span class="hljs-comment">-- Create a dataset (128 elements)</span>
batchSize = <span class="hljs-number">128</span>
batchInputs = torch.Tensor(batchSize, inputs)
batchLabels = torch.DoubleTensor(batchSize)

<span class="hljs-keyword">for</span> i=<span class="hljs-number">1</span>,batchSize <span class="hljs-keyword">do</span>
  <span class="hljs-keyword">local</span> input = torch.randn(<span class="hljs-number">2</span>)     <span class="hljs-comment">-- normally distributed example in 2d</span>
  <span class="hljs-keyword">local</span> label = <span class="hljs-number">1</span>
  <span class="hljs-keyword">if</span> input[<span class="hljs-number">1</span>]*input[<span class="hljs-number">2</span>]&gt;<span class="hljs-number">0</span> <span class="hljs-keyword">then</span>     <span class="hljs-comment">-- calculate label for XOR function</span>
    label = <span class="hljs-number">-1</span>;
  <span class="hljs-keyword">end</span>
  batchInputs[i]:copy(input)
  batchLabels[i] = label
<span class="hljs-keyword">end</span>
</code></pre>
<pre><code class="lang-lua"><span class="hljs-comment">-- Get flatten parameters (Needed to use optim)</span>
params, gradParams = mlp:getParameters()
<span class="hljs-comment">-- Learning parameters</span>
optimState = {learningRate=<span class="hljs-number">0.01</span>}
</code></pre>
<pre><code class="lang-lua"><span class="hljs-built_in">require</span> <span class="hljs-string">&apos;optim&apos;</span>

<span class="hljs-keyword">for</span> epoch=<span class="hljs-number">1</span>,<span class="hljs-number">200</span> <span class="hljs-keyword">do</span>
  <span class="hljs-comment">-- local function we give to optim</span>
  <span class="hljs-comment">-- it takes current weights as input, and outputs the loss</span>
  <span class="hljs-comment">-- and the gradient of the loss with respect to the weights</span>
  <span class="hljs-comment">-- gradParams is calculated implicitly by calling &apos;backward&apos;,</span>
  <span class="hljs-comment">-- because the model&apos;s weight and bias gradient tensors</span>
  <span class="hljs-comment">-- are simply views onto gradParams</span>
  <span class="hljs-keyword">local</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">feval</span><span class="hljs-params">(params)</span></span>
    gradParams:zero()

    <span class="hljs-keyword">local</span> outputs = mlp:forward(batchInputs)
    <span class="hljs-keyword">local</span> loss = criterion_MSE:forward(outputs, batchLabels)
    <span class="hljs-keyword">local</span> dloss_doutput = criterion_MSE:backward(outputs, batchLabels)
    mlp:backward(batchInputs, dloss_doutput)    
    <span class="hljs-keyword">return</span> loss,gradParams
  <span class="hljs-keyword">end</span>
  optim.sgd(feval, params, optimState)
<span class="hljs-keyword">end</span>
</code></pre>
<h4 id="test-the-network">Test the network</h4>
<pre><code class="lang-lua">x = torch.Tensor(<span class="hljs-number">2</span>)
x[<span class="hljs-number">1</span>] =  <span class="hljs-number">0.5</span>; x[<span class="hljs-number">2</span>] =  <span class="hljs-number">0.5</span>; <span class="hljs-built_in">print</span>(mlp:forward(x)) <span class="hljs-comment">-- 0 XOR 0 = 0 (negative)</span>
x[<span class="hljs-number">1</span>] =  <span class="hljs-number">0.5</span>; x[<span class="hljs-number">2</span>] = <span class="hljs-number">-0.5</span>; <span class="hljs-built_in">print</span>(mlp:forward(x)) <span class="hljs-comment">-- 0 XOR 1 = 1 (positive)</span>
x[<span class="hljs-number">1</span>] = <span class="hljs-number">-0.5</span>; x[<span class="hljs-number">2</span>] =  <span class="hljs-number">0.5</span>; <span class="hljs-built_in">print</span>(mlp:forward(x)) <span class="hljs-comment">-- 1 XOR 0 = 1 (positive)</span>
x[<span class="hljs-number">1</span>] = <span class="hljs-number">-0.5</span>; x[<span class="hljs-number">2</span>] = <span class="hljs-number">-0.5</span>; <span class="hljs-built_in">print</span>(mlp:forward(x)) <span class="hljs-comment">-- 1 XOR 1 = 0 (negative)</span>
</code></pre>
<pre><code>-0.6607
[torch.DoubleTensor of size 1]

 0.5321
[torch.DoubleTensor of size 1]

 0.8285
[torch.DoubleTensor of size 1]

-0.7458
[torch.DoubleTensor of size 1]
</code></pre><pre><code class="lang-lua">

</code></pre>

<hr>

<p>PyTorch is another deep learning library that&apos;s is actually a fork of Chainer(Deep learning library completely on python) with the capabilities of torch. Basically it&apos;s the facebook solution to merge torch with python.</p>
<h3 id="some-advantages">Some advantages</h3>
<ul>
<li>Easy to Debug and understand the code</li>
<li>Has as many type of layers as Torch (Unpool, CONV 1,2,3D, LSTM, Grus)</li>
<li>Lot&apos;s of loss functions</li>
<li>Can be considered as a Numpy extension to GPUs</li>
<li>Faster than others &quot;define-by-run&quot; libraries, like chainer and dynet</li>
<li>Allow to build networks which structure is dependent on the computation itself (Useful on reinforcement learning)</li>
</ul>
<h3 id="pytorch-components">PyTorch Components</h3>
<table>
<thead>
<tr>
<th style="text-align:left">Package</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">torch</td>
<td style="text-align:left">Numpy like library with GPU support</td>
</tr>
<tr>
<td style="text-align:left">torch.autograd</td>
<td style="text-align:left">Give differentiation support for all torch ops</td>
</tr>
<tr>
<td style="text-align:left">torch.nn</td>
<td style="text-align:left">Neural network library integrated with autograd</td>
</tr>
<tr>
<td style="text-align:left">torch.optim</td>
<td style="text-align:left">Optimization for torch.nn (ADAM, SGD, RMSPROP, etc...)</td>
</tr>
<tr>
<td style="text-align:left">torch.multiprocessing</td>
<td style="text-align:left">Memory sharing between tensors</td>
</tr>
<tr>
<td style="text-align:left">torch.utils</td>
<td style="text-align:left">DataLoader, Training and other utility functions</td>
</tr>
<tr>
<td style="text-align:left">torch.legacy</td>
<td style="text-align:left">Old code ported from Torch</td>
</tr>
</tbody>
</table>
<h3 id="how-it-differs-from-tensorflowtheano">How it differs from Tensorflow/Theano</h3>
<p>The major difference from Tensorflow is that PyTorch methodology is considered &quot;define-by-run&quot; while Tensorflow is considered &quot;defined-and-run&quot;, so on PyTorch you can for instance change your model on run-time, debug easily with any python debugger, while tensorflow has always a graph definition/build. You can consider tensorflow as a more production tool while PyTorch is more a research tool.</p>
<h3 id="the-basics">The Basics:</h3>
<p>Here we will see how to create tensors, and do some manipulation:</p>
<pre><code class="lang-py"><span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

<span class="hljs-comment"># Create a tensor on torch</span>
a = torch.rand(<span class="hljs-number">3</span>, <span class="hljs-number">3</span>)

<span class="hljs-comment"># Create a matrix on numpy and conver to PyTorch</span>
b_npy = np.array([[<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>],[<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">6</span>],[<span class="hljs-number">7</span>,<span class="hljs-number">8</span>,<span class="hljs-number">9</span>]])
<span class="hljs-comment"># Convert from numpy to torch</span>
b = torch.from_numpy(b_npy)

print(a)
print(b)

<span class="hljs-comment"># Get a specific element</span>
print(b[<span class="hljs-number">1</span>,<span class="hljs-number">1</span>])

<span class="hljs-comment"># Get a range of elements</span>
print(b[<span class="hljs-number">1</span>:<span class="hljs-keyword">None</span>,<span class="hljs-number">1</span>:<span class="hljs-keyword">None</span>])

<span class="hljs-comment"># Set elements on array</span>
a[<span class="hljs-number">1</span>:<span class="hljs-keyword">None</span>,<span class="hljs-number">1</span>:<span class="hljs-keyword">None</span>] = <span class="hljs-number">0</span>
print(a)
</code></pre>
<h3 id=""><img src="assets/ResultPyTorch.png" alt=""></h3>
<p>Create tensors filled with some value</p>
<pre><code class="lang-py"><span class="hljs-keyword">import</span> torch

a = torch.ones(<span class="hljs-number">2</span>,<span class="hljs-number">3</span>)
b = torch.zeros(<span class="hljs-number">3</span>,<span class="hljs-number">2</span>)
print(a)
print(b)
</code></pre>
<p><img src="https://leonardoaraujosantos.gitbooks.io/artificial-inteligence/content/assets/PyTorchSimpleGraphSmall.png" alt=""></p>
<p>Now we will do some computation on the GPU</p>
<pre><code class="lang-py"><span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

<span class="hljs-comment"># Define tensors on the GPU</span>
a = torch.rand(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>).cuda()
b = torch.rand(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>).cuda()

<span class="hljs-comment"># Define some operation (will execute on the GPU)</span>
c = (a + b) * <span class="hljs-number">2</span>

<span class="hljs-comment"># Print &quot;c&quot; contents and shape(size)</span>
print(c)
print(c.size())
</code></pre>
<h3 id=""><img src="assets/ResultGPU.png" alt=""></h3>
<h3 id="autograd-and-variables">Autograd and variables</h3>
<p>The Autograd on PyTorch is the component responsible to do the backpropagation, as on Tensorflow you only need to define the forward propagation. PyTorch autograd looks a lot like TensorFlow: in both frameworks we define a computational graph, and use automatic differentiation to compute gradients.</p>
<p>We just need to wrap tensors with Variable objects, a Variable represents a node in a computational graph. They are not like tensorflow placeholders, on PyTorch you place the values directly on the model. Again to include a tensor on the graph wrap it with a variable.</p>
<p>Consider the following simple graph:</p>
<p><img src="assets/PyTorchSimpleGraphSmall.png" alt=""></p>
<pre><code class="lang-py"><span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> torch.autograd <span class="hljs-keyword">import</span> Variable

<span class="hljs-comment"># Define scalar a=2, b=3</span>
a = Variable(torch.ones(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>) * <span class="hljs-number">2</span>, requires_grad=<span class="hljs-keyword">True</span>)
b = Variable(torch.ones(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>) * <span class="hljs-number">3</span>, requires_grad=<span class="hljs-keyword">True</span>)
c = Variable(torch.ones(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>) * <span class="hljs-number">4</span>, requires_grad=<span class="hljs-keyword">True</span>)

<span class="hljs-comment"># Define the function &quot;out&quot; having 2 parameters a,b</span>
out = (a*b)+c
<span class="hljs-comment">#c = torch.mul(a,b)+c</span>
print(<span class="hljs-string">&apos;Value out:&apos;</span>,out)

<span class="hljs-comment"># Do the backpropagation</span>
out.backward()

<span class="hljs-comment"># Get dout/da (Derivative of out w.r.t to a)</span>
print(<span class="hljs-string">&apos;Derivative of out w.r.t to a:&apos;</span>,a.grad)
print(<span class="hljs-string">&apos;Derivative of out w.r.t to b:&apos;</span>,b.grad)
print(<span class="hljs-string">&apos;Derivative of out w.r.t to c:&apos;</span>,c.grad)
</code></pre>
<p><img src="assets/AutoGradPytorch.png" alt=""></p>
<h3 id="complete-example">Complete example</h3>
<p>Here we mix the concepts and show how to train a MNIST dataset using CNN</p>
<pre><code class="lang-py"><span class="hljs-comment"># Import libraries</span>
<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> torch.autograd <span class="hljs-keyword">import</span> Variable
<span class="hljs-keyword">import</span> torchvision.datasets <span class="hljs-keyword">as</span> dsets
<span class="hljs-keyword">import</span> torchvision.transforms <span class="hljs-keyword">as</span> transforms
<span class="hljs-keyword">import</span> torch.nn <span class="hljs-keyword">as</span> nn
<span class="hljs-keyword">import</span> torch.nn.functional <span class="hljs-keyword">as</span> F

<span class="hljs-comment"># Hyper Parameters</span>
num_epochs = <span class="hljs-number">5</span>
batch_size = <span class="hljs-number">50</span>
learning_rate = <span class="hljs-number">0.001</span>

<span class="hljs-comment"># MNIST Dataset</span>
train_dataset = dsets.MNIST(root=<span class="hljs-string">&apos;../data/&apos;</span>,
                            train=<span class="hljs-keyword">True</span>, 
                            transform=transforms.ToTensor(),
                            download=<span class="hljs-keyword">True</span>)

test_dataset = dsets.MNIST(root=<span class="hljs-string">&apos;../data/&apos;</span>,
                           train=<span class="hljs-keyword">False</span>, 
                           transform=transforms.ToTensor())


<span class="hljs-comment"># Data Loader (Input Pipeline)</span>
train_loader = torch.utils.data.DataLoader(dataset=train_dataset,
                                           batch_size=batch_size, 
                                           shuffle=<span class="hljs-keyword">True</span>)

test_loader = torch.utils.data.DataLoader(dataset=test_dataset,
                                          batch_size=batch_size, 
                                          shuffle=<span class="hljs-keyword">False</span>)


<span class="hljs-comment"># CNN Model (2 conv layer) nn.Module is the base class to all neural networks</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">CNN</span><span class="hljs-params">(nn.Module)</span>:</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">__init__</span><span class="hljs-params">(self)</span>:</span>
        super(CNN, self).__init__()
        self.layer1 = nn.Sequential(
            nn.Conv2d(<span class="hljs-number">1</span>, <span class="hljs-number">16</span>, kernel_size=<span class="hljs-number">5</span>, padding=<span class="hljs-number">2</span>),
            nn.BatchNorm2d(<span class="hljs-number">16</span>),
            nn.ReLU(),
            nn.MaxPool2d(<span class="hljs-number">2</span>))
        self.layer2 = nn.Sequential(
            nn.Conv2d(<span class="hljs-number">16</span>, <span class="hljs-number">32</span>, kernel_size=<span class="hljs-number">5</span>, padding=<span class="hljs-number">2</span>),
            nn.BatchNorm2d(<span class="hljs-number">32</span>),
            nn.ReLU(),
            nn.MaxPool2d(<span class="hljs-number">2</span>))
        self.fc = nn.Linear(<span class="hljs-number">7</span>*<span class="hljs-number">7</span>*<span class="hljs-number">32</span>, <span class="hljs-number">10</span>)

    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">forward</span><span class="hljs-params">(self, x)</span>:</span>
        out = self.layer1(x)
        out = self.layer2(out)
        out = out.view(out.size(<span class="hljs-number">0</span>), <span class="hljs-number">-1</span>)
        out = self.fc(out)
        <span class="hljs-keyword">return</span> out

cnn = CNN()
cnn.cuda()
print(cnn)

<span class="hljs-comment"># Loss and Optimizer</span>
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(cnn.parameters(), lr=learning_rate)

<span class="hljs-comment"># Train the Model</span>
<span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> range(num_epochs):
    <span class="hljs-keyword">for</span> i, (images, labels) <span class="hljs-keyword">in</span> enumerate(train_loader):
        images = Variable(images)
        labels = Variable(labels)

        images, labels = images.cuda(), labels.cuda()

        <span class="hljs-comment"># Forward + Backward + Optimize</span>
        optimizer.zero_grad()
        outputs = cnn(images)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()

        <span class="hljs-keyword">if</span> (i+<span class="hljs-number">1</span>) % <span class="hljs-number">500</span> == <span class="hljs-number">0</span>:
            <span class="hljs-keyword">print</span> (<span class="hljs-string">&apos;Epoch [%d/%d], Iter [%d/%d] Loss: %.4f&apos;</span> 
                   %(epoch+<span class="hljs-number">1</span>, num_epochs, i+<span class="hljs-number">1</span>, len(train_dataset)//batch_size, loss.data[<span class="hljs-number">0</span>]))


<span class="hljs-comment"># Test the Model</span>
cnn.eval()  <span class="hljs-comment"># Change model to &apos;eval&apos; mode (BN uses moving mean/var).</span>
correct = <span class="hljs-number">0</span>
total = <span class="hljs-number">0</span>
<span class="hljs-keyword">for</span> images, labels <span class="hljs-keyword">in</span> test_loader:
    images = Variable(images)
    images, labels = images.cuda(), labels.cuda()
    outputs = cnn(images)
    _, predicted = torch.max(outputs.data, <span class="hljs-number">1</span>)
    total += labels.size(<span class="hljs-number">0</span>)
    correct += (predicted == labels).sum()

print(<span class="hljs-string">&apos;Test Accuracy of the model on the 10000 test images: %d %%&apos;</span> % (<span class="hljs-number">100</span> * correct / total))

<span class="hljs-comment"># Save the Trained Model</span>
torch.save(cnn.state_dict(), <span class="hljs-string">&apos;cnn.pkl&apos;</span>)
</code></pre>

------------------
