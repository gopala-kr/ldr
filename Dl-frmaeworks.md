  <h2 id="tensorflow">Tensorflow</h2>
<hr>
<p> Tensorflow goolge library for machine learning. In simple words it&apos;s a library for numerical computation that uses graphs, on this graph the nodes are the operations, while the edges of this graph are tensors.
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
