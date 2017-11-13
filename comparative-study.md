<article class="main-content" role="main">
<h1 id="comparing-top-deep-learning-frameworks-deeplearning4j-pytorch-tensorflow-caffe-keras-mxnet-gluon--cntk">Comparing Top Deep Learning Frameworks: Deeplearning4j, PyTorch, TensorFlow, Caffe, Keras, MxNet, Gluon &amp; CNTK</h1>
<p>Skymind bundles Deeplearning4j and Python deep learning libraries such as Tensorflow and Keras (using a managed Conda environment) in the Skymind Intelligence Layer (SKIL), which offers ETL, training and one-click deployment on a managed GPU cluster. The SKIL Community Edition is <a href="https://skymind.ai/platform">free and downloadable here</a>, and its <a href="https://skymind.ai/quickstart">Quickstart is here</a>.</p>
<p><a href="https://projects.eclipse.org/proposals/deeplearning4j">Eclipse Deeplearning4j</a> is distinguished from other frameworks in its API languages, intent and integrations. DL4J is a JVM-based, industry-focused, commercially supported, <strong>distributed deep-learning framework</strong> that solves problems involving massive amounts of data in a reasonable amount of time. It integrates with Kafka, Hadoop and <a href="./spark">Spark</a> using an arbitrary number of <a href="./gpu">GPUs</a> or <a href="./native">CPUs</a>, and it has <a href="http://www.skymind.io/contact">a number you can call</a> if anything breaks.</p>
<p>DL4J is portable and platform neutral, rather than being optimized on a specific cloud service such as AWS, Azure or Google Cloud. In speed, its <a href="https://github.com/deeplearning4j/dl4j-benchmark">performance is equal to Caffe</a> on non-trivial image-processing tasks on multiple GPUs, and faster than Tensorflow or Torch. For more information on benchmarking Deeplearning4j, please see this <a href="https://deeplearning4j.org/benchmark">benchmarks page</a> to optimize its performance by adjusting the JVM’s heap space, garbage collection algorithm, memory management and DL4J’s ETL pipeline. Deeplearning4j has Java, <a href="https://github.com/deeplearning4j/scalnet">Scala</a> and <a href="./keras">Python APIs, the latter using Keras</a>.</p>
<p align="center">
<a href="quickstart" type="button" class="btn btn-lg btn-success" onclick="ga('send', 'event', ‘quickstart', 'click');">GET STARTED WITH DEEPLEARNING4J</a>
</p>
<h3 id="content">Content</h3>
<p>Python Frameworks</p>
<ul>
<li><a href="#torch">Pytorch &amp; Torch</a></li>
<li><a href="#tensorflow">TensorFlow</a></li>
<li><a href="#caffe">Caffe</a></li>
<li><a href="#theano">RIP: Theano &amp; Ecosystem</a></li>
<li><a href="#caffe2">Caffe2</a></li>
<li><a href="#chainer">Chainer</a></li>
<li><a href="#cntk">CNTK</a></li>
<li><a href="#dsstne">DSSTNE</a></li>
<li><a href="#dsstne">DyNet</a></li>
<li><a href="#gluon">Gluon</a></li>
<li><a href="#keras">Keras</a></li>
<li><a href="#mxnet">Mxnet</a></li>
<li><a href="#paddle">Paddle</a></li>
<li><a href="#bigdl">BigDL</a></li>
<li><a href="#licensing">Licensing</a></li>
</ul>
<p>JVM Considerations</p>
<ul>
<li><a href="#speed">Speed</a></li>
<li><a href="#java">DL4J: Why the JVM?</a></li>
<li><a href="#ecosystem">DL4J: Ecosystem</a></li>
<li><a href="#scala">DL4S: Deep Learning in Scala</a></li>
<li><a href="#ml">Machine-Learning Frameworks</a></li>
<li><a href="#tutorial">Further Reading</a></li>
</ul>
<h3 id="pytorch--torch"><a name="torch">Pytorch &amp; Torch</a></h3>
<p>A Python version of Torch, known as <a href="https://github.com/pytorch/pytorch">Pytorch</a>, was open-sourced by Facebook in January 2017. PyTorch offers dynamic computation graphs, which let you process variable-length inputs and outputs, which is useful when working with RNNs, for example. In September 2017, Jeremy Howard’s and Rachael Thomas’s well-known deep-learning course fast.ai adopted <a href="http://www.fast.ai/2017/09/08/introducing-pytorch-for-fastai/">Pytorch</a>. Since it’s introduction, PyTorch has quickly become the favorite among machine-learning researchers, because it allows certain complex architectures to be built easily. Other frameworks that support dynamic computation graphs are CMU’s DyNet and PFN’s Chainer.</p>
<p><a href="http://torch.ch/"><strong>Torch</strong></a> is a computational framework with an API written in Lua that supports machine-learning algorithms. Some version of it is used by large tech companies such as Facebook and Twitter, which devote in-house teams to customizing their deep learning platforms. Lua is a multi-paradigm scripting language that was developed in Brazil in the early 1990s.</p>
<p>Torch, while powerful, <a href="https://news.ycombinator.com/item?id=7929216">was not designed to be widely accessible</a> to the Python-based academic community, nor to corporate software engineers, whose lingua franca is Java. Deeplearning4j was written in Java to reflect our focus on industry and ease of use. We believe usability is the limiting parameter that inhibits more widespread deep-learning implementations. We believe scalability ought to be automated with open-source distributed run-times like Hadoop and Spark. And we believe that a commercially supported open-source framework is the appropriate solution to ensure working tools and building a community.</p>
<ul>
<li><a href="https://awni.github.io/pytorch-tensorflow/">Comparing PyTorch and TensorFlow</a></li>
</ul>
<p>Pros and Cons:</p>
<ul>
<li>(+) Lots of modular pieces that are easy to combine</li>
<li>(+) Easy to write your own layer types and run on GPU</li>
<li>(+) Lots of pretrained models</li>
<li>(-) You usually write your own training code (Less plug and play)</li>
<li>(-) No commercial support</li>
<li>(-) Spotty documentation</li>
</ul>
<h3 id="tensorflow"><a name="tensorflow">TensorFlow</a></h3>
<ul>
<li>Google created TensorFlow to replace Theano. The two libraries are in fact quite similar. Some of the creators of Theano, such as Ian Goodfellow, went on to create Tensorflow at Google before leaving for OpenAI.</li>
<li>For the moment, <strong>TensorFlow</strong> does not support so-called “inline” matrix operations, but forces you to copy a matrix in order to perform an operation on it. Copying very large matrices is costly in every sense. TF takes 4x as long as the state of the art deep learning tools. Google says it’s working on the problem.</li>
<li>Like most deep-learning frameworks, TensorFlow is written with a Python API over a C/C++ engine that makes it run faster. Although there is experimental support for a Java API it is not currently considered stable, we do not consider this a solution for the Java and Scala communities.</li>
<li>TensorFlow runs dramatically <a href="https://arxiv.org/pdf/1608.07249v7.pdf">slower than other frameworks</a> such as CNTK and MxNet.</li>
<li>TensorFlow is about more than deep learning. TensorFlow actually has tools to support reinforcement learning and other algos.</li>
<li>Google’s acknowledged goal with Tensorflow seems to be recruiting, making their researchers’ code shareable, standardizing how software engineers approach deep learning, and creating an additional draw to Google Cloud services, on which TensorFlow is optimized.</li>
<li>TensorFlow is not commercially supported, and it’s unlikely that Google will go into the business of supporting open-source enterprise software. It’s giving a new tool to researchers.</li>
<li>Like Theano, TensforFlow generates a computational graph (e.g. a series of matrix operations such as z = sigmoid(x) where x and z are matrices) and performs automatic differentiation. Automatic differentiation is important because you don’t want to have to hand-code a new variation of backpropagation every time you’re experimenting with a new arrangement of neural networks. In Google’s ecosystem, the computational graph is then used by Google Brain for the heavy lifting, but Google hasn’t open-sourced those tools yet. TensorFlow is one half of Google’s in-house DL solution.</li>
<li>Google introduced <em>Eager</em>, <a href="https://medium.com/@yaroslavvb/tensorflow-meets-pytorch-with-eager-mode-714cce161e6c">a dynamic computation graph module for TensorFlow</a>, in October 2017.</li>
<li>From an enterprise perspective, the question some companies will need to answer is whether they want to depend upon Google for these tools, given how Google developed services on top of Android, and the general lack of enterprise support.</li>
<li>Caveat: Not all operations in Tensorflow work as they do in Numpy.</li>
<li><a href="https://nicodjimenez.github.io/2017/10/08/tensorflow.html">A Critique of Tensorflow</a></li>
<li><a href="https://medium.com/@julsimon/keras-shoot-out-tensorflow-vs-mxnet-51ae2b30a9c0">Keras shoot-out: TensorFlow vs MXNet</a></li>
<li><a href="https://medium.com/towards-data-science/pytorch-vs-tensorflow-1-month-summary-35d138590f9">PyTorch vs. TensorFlow</a></li>
</ul>
<p>Pros and Cons</p>
<ul>
<li>(+) Python + Numpy</li>
<li>(+) Computational graph abstraction, like Theano</li>
<li>(+) Faster compile times than Theano</li>
<li>(+) TensorBoard for visualization</li>
<li>(+) Data and model parallelism</li>
<li>(-) Slower than other frameworks</li>
<li>(-) Much “fatter” than Torch; more magic</li>
<li>(-) Not many pretrained models</li>
<li>(-) Computational graph is pure Python, therefore slow</li>
<li>(-) No commercial support</li>
<li>(-) Drops out to Python to load each new training batch</li>
<li>(-) Not very toolable</li>
<li>(-) Dynamic typing is error-prone on large software projects</li>
</ul>
<h3 id="caffe"><a name="caffe">Caffe</a></h3>
<p><a href="http://caffe.berkeleyvision.org/"><strong>Caffe</strong></a> is a well-known and widely used machine-vision library that ported Matlab’s implementation of fast convolutional nets to C and C++ (<a href="https://sites.google.com/site/steveyegge2/google-at-delphi">see Steve Yegge’s rant about porting C++ from chip to chip if you want to consider the tradeoffs between speed and this particular form of technical debt</a>). Caffe is not intended for other deep-learning applications such as text, sound or time series data. Like other frameworks mentioned here, Caffe has chosen Python for its API.</p>
<p>Both Deeplearning4j and Caffe perform image classification with convolutional nets, which represent the state of the art. In contrast to Caffe, Deeplearning4j offers parallel GPU <em>support</em> for an arbitrary number of chips, as well as many, seemingly trivial, features that make deep learning run more smoothly on multiple GPU clusters in parallel. While it is widely cited in papers, Caffe is chiefly used as a source of pre-trained models hosted on its Model Zoo site.</p>
<ul>
<li><a href="https://github.com/BVLC/caffe">Caffe’s GitHub repository</a></li>
<li><a href="https://github.com/BVLC/caffe/issues">Caffe’s GitHub issues</a></li>
</ul>
<p>Pros and Cons:</p>
<ul>
<li>(+) Good for feedforward networks and image processing</li>
<li>(+) Good for finetuning existing networks</li>
<li>(+) Train models without writing any code</li>
<li>(+) Python interface is pretty useful</li>
<li>(-) Need to write C++ / CUDA for new GPU layers</li>
<li>(-) Not good for recurrent networks</li>
<li>(-) Cumbersome for big networks (GoogLeNet, ResNet)</li>
<li>(-) Not extensible, bit of a hairball</li>
<li>(-) No commercial support</li>
<li>(-) Probably dying; slow development</li>
</ul>
<h3 id="rip-theano-and-ecosystem"><a name="theano">RIP: Theano and Ecosystem</a></h3>
<p>Yoshua Bengio announced on Sept. 28, 2017, that <a href="https://groups.google.com/d/msg/theano-users/7Poq8BZutbY/rNCIfvAEAwAJ">development on Theano would cease</a>. Theano is effectively dead.</p>
<p>Many academic researchers in the field of deep learning rely on <a href="http://deeplearning.net/software/theano/"><strong>Theano</strong></a>, the grand-daddy of deep-learning frameworks, which is written in <a href="https://darkf.github.io/posts/problems-i-have-with-python.html">Python</a>. Theano is a library that handles multidimensional arrays, like Numpy. Used with other libs, it is well suited to data exploration and intended for research.</p>
<p>Numerous open-source deep-libraries have been built on top of Theano, including <a href="https://github.com/fchollet/keras">Keras</a>, <a href="https://lasagne.readthedocs.org/en/latest/">Lasagne</a> and <a href="https://github.com/mila-udem/blocks">Blocks</a>. These libs attempt to layer an easier to use API on top of Theano’s occasionally non-intuitive interface. (As of March 2016, another Theano-related library, <a href="https://github.com/lisa-lab/pylearn2">Pylearn2, appears to be dead</a>.)</p>
<p>In contrast, Deeplearning4j brings deep learning to production environment to create solutions in JVM languages like Java and Scala. It aims to automate as many knobs as possible in a scalable fashion on parallel GPUs or CPUs, integrating as needed with Hadoop and <a href="./spark.html">Spark</a>.</p>
<p>Pros and Cons</p>
<ul>
<li>(+) Python + Numpy</li>
<li>(+) Computational graph is nice abstraction</li>
<li>(+) RNNs fit nicely in computational graph</li>
<li>(-) Raw Theano is somewhat low-level</li>
<li>(+) High level wrappers (Keras, Lasagne) ease the pain</li>
<li>(-) Error messages can be unhelpful</li>
<li>(-) Large models can have long compile times</li>
<li>(-) Much “fatter” than Torch</li>
<li>(-) Patchy support for pretrained models</li>
<li>(-) Buggy on AWS</li>
<li>(-) Single GPU</li>
</ul>
<h3 id="caffe2"><a name="caffe2">Caffe2</a></h3>
<p><a href="https://caffe2.ai/"><strong>Caffe2</strong></a> is the long-awaited successor to the original Caffe, whose creator Yangqing Jia now works at Facebook. Caffe2 is the second deep-learning framework to be <a href="https://techcrunch.com/2017/04/18/facebook-open-sources-caffe2-its-flexible-deep-learning-framework-of-choice/">backed by Facebook</a> after Torch/PyTorch. The main difference seems to be the claim that Caffe2 is more scalable and light-weight. It purports to be deep learning for production environments. Like Caffe and PyTorch, Caffe2 offers a Python API running on a C++ engine.</p>
<ul>
<li><a href="https://github.com/caffe2/caffe2">Caffe2’s GitHub repository</a></li>
</ul>
<p>Pros and Cons:</p>
<ul>
<li>(+) BSD License</li>
<li>(-) No commercial support</li>
</ul>
<h3 id="cntk"><a name="cntk">CNTK</a></h3>
<p><a href="https://github.com/Microsoft/CNTK"><strong>CNTK</strong></a> is Microsoft’s open-source deep-learning framework. The acronym stands for “Computational Network Toolkit.” The library includes feed-forward DNNs, convolutional nets and recurrent networks. CNTK offers a Python API over C++ code. While CNTK appears to have a <a href="https://github.com/Microsoft/CNTK/blob/master/LICENSE.md">permissive license</a>, it has not adopted one of the more conventional licenses, such as ASF 2.0, BSD or MIT. This license does not apply to the method by which CNTK makes distributed training easy – one-bit SGD – which is not licensed for commercial use.</p>
<h3 id="chainer"><a name="chainer">Chainer</a></h3>
<p>Chainer is an open-source neural network framework with a Python API, whose core team of developers work at <a href="https://www.crunchbase.com/organization/preferred-networks#/entity">Preferred Networks</a>, a machine-learning startup based in Tokyo drawing its engineers largely from the University of Tokyo. Until the advent of DyNet at CMU, and PyTorch at Facebook, Chainer was the leading neural network framework for dynamic computation graphs, or nets that allowed for input of varying length, a popular feature for NLP tasks. By its own <a href="http://chainer.org/general/2017/02/08/Performance-of-Distributed-Deep-Learning-Using-ChainerMN.html">benchmarks</a>, Chainer is notably faster than other Python-oriented frameworks, with TensorFlow the slowest of a test group that includes MxNet and CNTK.</p>
<h3 id="dsstne"><a name="dsstne">DSSTNE</a></h3>
<p>Amazon’s Deep Scalable Sparse Tensor Network Engine, or <a href="https://github.com/amznlabs/amazon-dsstne">DSSTNE</a>, is a library for building models for machine- and deep learning. It is one of the more recent of many open-source deep-learning libraries to be released, after Tensorflow and CNTK, and Amazon has since backed MxNet with AWS, so its future is not clear. Written largely in C++, DSSTNE appears to be fast, although it has not attracted as large a community as the other libraries.</p>
<ul>
<li>(+) Handles Sparse encoding</li>
<li>(-) Amazon may not be sharing <a href="https://github.com/amznlabs/amazon-dsstne/issues/24">all information necessary to obtain the best results with its examples</a></li>
<li>(-) Amazon has chosen another framework for use on AWS, MxNet</li>
</ul>
<h3 id="dynet"><a name="dynet">DyNet</a></h3>
<p><a href="https://github.com/clab/dynet">DyNet</a>, the <a href="https://arxiv.org/abs/1701.03980">Dynamic Neural Network Toolkit</a>, came out of Carnegie Mellon University and used to be called cnn. Its notable feature is the dynamic computation graph, which allows for inputs of varying length, which is great for NLP. PyTorch and Chainer offer the same.</p>
<ul>
<li>(+) Dynamic computation graph</li>
<li>(-) Small user community</li>
</ul>
<h3 id="gluon"><a name="gluon">Gluon</a></h3>
<p>Named after a subatomic particle, Gluon is an API over Amazon’s MxNet that was <a href="http://www.businesswire.com/news/home/20171012005742/en/AWS-Microsoft-Announce-Gluon-Making-Deep-Learning">introduced</a> by Amazon and Microsoft in October 2017. It will also integrate with Microsoft’s CNTK. While it is similar to Keras in its intent and place in the stack, it is distinguished by its dynamic computation graph, similar to Pytorch and Chainer, and unlike TensorFlow or Caffe. On a business level, Gluon is an attempt by Amazon and Microsoft to carve out a user base separate from TensorFlow and Keras, as both camps seek to control the API that mediates UX and neural net training.</p>
<ul>
<li><a href="https://github.com/gluon-api/gluon-api/">Gluon API on GitHub</a></li>
<li>Zachary Lipton’s <a href="https://github.com/zackchase/gluon-slides/blob/master/sept18-gluon.pdf">MxNet Gluon Tutorial</a> (PDF)</li>
</ul>
<h3 id="keras"><a name="keras">Keras</a></h3>
<p><a href="keras.io">Keras</a> is a deep-learning library that sits atop Theano and TensorFlow, providing an intuitive API inspired by Torch. Perhaps the best Python API in existence. Deeplearning4j relies on Keras as its <a href="./keras">Python API</a> and <a href="./model-import-keras">imports models from Keras and through Keras from Theano and TensorFlow</a>. It was created by <a href="https://twitter.com/fchollet">Francois Chollet</a>, a software engineer at Google.</p>
<ul>
<li>(+) Intuitive API inspired by Torch</li>
<li>(+) Works with Theano, TensorFlow and Deeplearning4j backends (CNTK backend to come)</li>
<li>(+) Fast growing framework</li>
<li>(+) Likely to become standard Python API for NNs</li>
</ul>
<h3 id="mxnet"><a name="mxnet">MxNet</a></h3>
<p><a href="https://github.com/dmlc/mxnet">MxNet</a> is a machine-learning framework with APIs is languages such as R, Python and Julia which has been <a href="http://www.allthingsdistributed.com/2016/11/mxnet-default-framework-deep-learning-aws.html">adopted by Amazon Web Services</a>. Parts of Apple are also rumored to use it after the company’s acquisition of Graphlab/Dato/Turi in 2016. A fast and flexible library, MxNet involves Pedro Domingos and a team of researchers at the University of Washington. A <a href="https://deeplearning4j.org/mxnet">comparison</a> between MxNet and some aspects of Deeplearning4j can be found here.</p>
<h3 id="paddle"><a name="paddle">Paddle</a></h3>
<p><a href="https://github.com/PaddlePaddle/Paddle">Paddle</a> is a deep-learning framework <a href="http://www.infoworld.com/article/3114175/artificial-intelligence/baidu-open-sources-python-driven-machine-learning-framework.html">created and supported by Baidu</a>. Its name stands for PArallel Distributed Deep LEarning. Paddle is the most recent major framework to be released, and like most others, it offers a Python API.</p>
<h3 id="bigdl"><a name="bigdl">BigDL</a></h3>
<p><a href="https://github.com/intel-analytics/BigDL">BigDL</a>, a new deep learning framework with a focus on Apache Spark, only works on Intel chips.</p>
<h3 id="licensing"><a name="licensing">Licensing</a></h3>
<p>Licensing is another distinction among these open-source projects: Theano, Torch and Caffe employ a BSD License, which does not address patents or patent disputes. Deeplearning4j and ND4J are distributed under an <strong><a href="http://en.swpat.org/wiki/Patent_clauses_in_software_licences#Apache_License_2.0">Apache 2.0 License</a></strong>, which contains both a patent grant and a litigation retaliation clause. That is, anyone is free to make and patent derivative works based on Apache 2.0-licensed code, but if they sue someone else over patent claims regarding the original code (DL4J in this case), they immediately lose all patent claim to it. (In other words, you are given resources to defend yourself in litigation, and discouraged from attacking others.) BSD doesn’t typically address this issue.</p>
<h2 id="jvm-considerations">JVM Considerations</h2>
<h3 id="speed"><a name="speed">Speed</a></h3>
<p>Deeplearning4j’s underlying linear algebra computations, performed with ND4J, have been shown to run <a href="http://nd4j.org/benchmarking">at least twice as fast as Numpy</a> on very large matrix multiplies. That’s one reasons why we’ve been adopted by teams at NASA’s Jet Propulsion Laboratory. Moreover, Deeplearning4j has been optimized to run on various chips including x86 and GPUs with CUDA C.</p>
<p>While both Torch and DL4J employ parallelism, DL4J’s <strong>parallelism is automatic</strong>. That is, we automate the setting up of worker nodes and connections, allowing users to bypass libs while creating a massively parallel network on <a href="https://github.com/deeplearning4j/deeplearning4j/tree/master/deeplearning4j-scaleout/spark">Spark</a>, <a href="https://github.com/deeplearning4j/deeplearning4j/tree/master/deeplearning4j-scaleout/hadoop-yarn">Hadoop</a>, or with <a href="https://deeplearning4j.org/scaleout.html">Akka and AWS</a>. Deeplearning4j is best suited for solving specific problems, and doing so quickly.</p>
<p>For a full list of Deeplearning4j’s features, please see our <a href="./features.html">features page</a>.</p>
<h3 id="why-the-jvm"><a name="java">Why the JVM?</a></h3>
<p>We’re often asked why we chose to implement an open-source deep-learning project for the JVM, when so much of the deep-learning community is focused on Python. After all, Python has great syntactic elements that allow you to add matrices together without creating explicit classes, as Java requires you to do. Likewise, Python has an extensive scientific computing environment with native extensions like Theano and Numpy.</p>
<p>Yet the JVM and its main languages - Java and Scala - have several advantages.</p>
<p>First, most major companies and large government organizations rely heavily on Java or a JVM-based system. They have made a huge investment, which they can leverage with JVM-based AI. Java remains the most widely used language in enterprise. It is the language of Hadoop, ElasticSearch, Hive, Lucene and Pig, which happen to be useful for machine learning problems. Spark and Kafka are written in Scala, another JVM language. That is, many programmers solving real-world problems could benefit from deep learning, but they are separated from it by a language barrier. We want to make deep learning more usable to a large new audience that can put it to immediate use. With 10 million developers, Java is the world’s largest programming language.</p>
<p>Second, Java and Scala are inherently faster than Python. Anything written in Python by itself, disregarding its reliance on Cython, will be slower. Admittedly, most computationally expensive operations are written in C or C++. (When we talk about operations, we also consider things like strings and other tasks involved with higher-level machine learning processes.) Most deep-learning projects that are initially written in Python will have to be rewritten if they are to be put in production. Deeplearning4j relies on <a href="https://github.com/bytedeco/javacpp">JavaCPP</a> to call pre-compiled native C++ from Java, substantially accelerating the speed of training. Many Python programmers opt to do deep learning in Scala because they prefer static typing and functional programming when working with others on a shared code base.</p>
<p>Third, Java’s lack of robust scientific computing libraries can be solved by writing them, which we’ve done with <a href="http://nd4j.org">ND4J</a>. ND4J runs on distributed GPUs or GPUs, and can be interfaced via a Java or Scala API.</p>
<p>Finally, Java is a secure, network language that inherently works cross-platform on Linux servers, Windows and OSX desktops, Android phones and in the low-memory sensors of the Internet of Things via embedded Java. While Torch and Pylearn2 optimize via C++, which presents difficulties for those who try to optimize and maintain it, Java is a “write once, run anywhere” language suitable for companies who need to use deep learning on many platforms.</p>
<h3 id="ecosystem"><a name="ecosystem">Ecosystem</a></h3>
<p>Java’s popularity is only strengthened by its ecosystem. <a href="https://hadoop.apache.org/">Hadoop</a> is implemented in Java; <a href="https://spark.apache.org/">Spark</a> runs within Hadoop’s Yarn run-time; libraries like <a href="https://www.typesafe.com/community/core-projects/akka">Akka</a> made building distributed systems for Deeplearning4j feasible. In sum, Java boasts a highly tested infrastructure for pretty much any application, and deep-learning nets written in Java can live close to the data, which makes programmers’ lives easier. Deeplearning4j can be run and provisioned as a YARN app.</p>
<p>Java can also be used natively from other popular languages like Scala, Clojure, Python and Ruby. By choosing Java, we excluded the fewest major programming communities possible.</p>
<p>While Java is not as fast as C or C++, it is much faster than many believe, and we’ve built a distributed system that can accelerate with the addition of more nodes, whether they are GPUs or CPUs. That is, if you want speed, just throw more boxes at it.</p>
<p>Finally, we are building the <a href="http://nd4j.org/">basic applications of Numpy</a>, including ND-Array, in Java for DL4J. We believe that many of Java’s shortcomings can be solved quickly, and many of its advantages will continue for some time.</p>
<h3 id="scala"><a name="scala">Scala</a></h3>
<p>We have paid special attention to <a href="./scala">Scala</a> in building Deeplearning4j and ND4J, because we believe Scala has the potential to become the dominant language in data science. Writing numerical computing, vectorization and deep-learning libraries for the JVM with a <a href="http://nd4j.org/scala.html">Scala API</a> moves the community toward that goal, as does our integrations with <a href="spark">Apache Spark</a>.</p>
<p>To really understand the differences between DL4J and other frameworks, you may just have to <a href="./quickstart">try us out</a>.</p>
<h3 id="machine-learning-frameworks"><a name="ml">Machine-learning frameworks</a></h3>
<p>The deep-learning frameworks listed above are more specialized than general machine-learning frameworks, of which there are many. We’ll list the major ones here:</p>
<ul>
<li><a href="http://scikit-learn.org/stable/">sci-kit learn</a> - the default open-source machine-learning framework for Python.</li>
<li><a href="https://mahout.apache.org/users/basics/quickstart.html">Apache Mahout</a> - The flagship machine-learning framework on Apache. Mahout does classifications, clustering and recommendations.</li>
<li><a href="https://sparktc.github.io/systemml/quick-start-guide.html">SystemML</a> - IBM’s machine-learning framework, which performs Descriptive Statistics, Classification, Clustering, Regression, Matrix Factorization and Survival Analysis, and includes support-vector machines.</li>
<li><a href="http://www.dmtk.io/">Microsoft DMTK</a> - Microsoft’s distributed machine-learning toolkit. Distributed word embeddings and LDA.</li>
</ul>
<h3 id="deeplearning4j-tutorials"><a name="tutorial">Deeplearning4j Tutorials</a></h3>
<ul>
<li><a href="./neuralnet-overview">Introduction to Deep Neural Networks</a></li>
<li><a href="./convolutionalnets">Convolutional Networks Tutorial</a></li>
<li><a href="./lstm">LSTM and Recurrent Network Tutorial</a></li>
<li><a href="./usingrnns">Using Recurrent Nets With DL4J</a></li>
<li><a href="./deepbeliefnetwork">Deep-Belief Networks With MNIST</a></li>
<li><a href="./image-data-pipeline">Customizing Data Pipelines With Canova</a></li>
<li><a href="./restrictedboltzmannmachine">Restricted Boltzmann machines</a></li>
<li><a href="./eigenvector.html">Eigenvectors, PCA and Entropy</a></li>
<li><a href="./glossary.html">A Glossary of Deep-Learning Terms</a></li>
<li><a href="./word2vec">Word2vec, Doc2vec &amp; GloVe</a></li>
</ul>
</article>
