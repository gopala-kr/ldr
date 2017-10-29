

## case study : backend development
***********************
* Java --> Sprinframework
* PHP --> Laravel
* Ruby --> Rails
* Python --> Tarnado,Flask, Django
* Rust --> Iron
* Elixer --> Phoenix
* Golang web framework
****************************




********************
**A look into brief history of webframeworks** 
----------------
<br>

![webframeworks](https://raw.githubusercontent.com/mraible/history-of-web-frameworks-timeline/master/history-of-web-frameworks-timeline.png)



****************

### MVC - A Concept or A Library?

MVC is a software architectural pattern for implementing user interfaces to decouple code, which improve overall quality of software.

### No Desktop MVC Framework?

MVC is everywhere among desktop application development: VC MFC, Delphi, .NET Desktop and Java Swing application. But it will be interesting to see in the desktop application development, there is only MVC concept rather than framework/library (myself didn't even realize this until I wrote this article last time). MVC is generally only a kind of practice (similar as Object Oriented concept), not a real framework in desktop development.

### 100+ Web MVC Frameworks

At the same time, there are so many (more than 100) different open source Java web framework (the number of popular open source Java web framework is much more than any other types of open source java framework). And why so different between desktop vs web application development on MVC framework?

Main difference between desktop application and web application: view display and data binding (communication between view and model/controller)

Web MVC = MVC concept + HTML code generation + data binding

Why not use Rich Client Application (WPF, JavaFx, Flex) as view

* Difficult to cross the platforms Even if WPF/JavaFx/Flex can be embedded in browser, it requires local installation of Java or Flash or .NET client library.
* Client side oriented, no natural server integration
* For client/server solution, developers need to handle the communication which means to change current system significantly to expose interface to new client.
* Hard to interact between rich client with an existing web based application which make the migration difficult.

**What we are looking for from a good web framework?**

* Strong data binding
* Easy component extension and customization
* Less code
* Ability to outline the look and feel
* Low learning curve
* Full control on the page
* Open source
* Commercial resources available
* Active community + third party resources
* Impact of Introducing Another Web Framework to existing strut and JSF based legacy project.

**Marginal Cost**

* Impact on existing system/code
* learning cost for current members
* One more web framework need to handle in the development
* Easy to underestimate effort

**Marginal Benefit**

* Reduced code = better quality + easier to maintain / extend + Less bug
* More flexibility to extend / modify in the future
* Lower learning curve when adding new members
* More resources / features
* Easy to overestimate

Marginal Benefit >>> Marginal Cost

there is a best article on [framework](https://github.com/gopala-kr/weekend-with-github/blob/master/Projects-Blogs/03-backend-development/framework.md)

*******************************
A look into java timelines
-----------------------
<br>

![java](https://image.slidesharecdn.com/javanturav2-theroadtojava-hujakoraclecroatia-brankomihaljevialeksanderradovandukovukmanovi-141130060735-conversion-gate01/95/javantura-v2-the-road-to-java-hujak-oracle-croatia-branko-mihaljevi-aleksander-radovan-duko-vukmanovi-3-638.jpg)

***********************************************************
<h3><span class="mw-headline" id="Java">List of Java Web Frameworks</span></span></h3>

<p>Source: Wikipedia</P>

<div role="note" class="hatnote navigation-not-searchable">Wiki: <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" title="Java (programming language)">Java (programming language)</a> and <a href="https://en.wikipedia.org/wiki/Java_(software_platform)" title="Java (software platform)">Java (software platform)</a></div>
<table class="wikitable sortable" style="font-size: 90%">
<br>
<tr>
<th>Project</th>
<th>Current stable version</th>
<th>Release date</th>
<th><a href="https://en.wikipedia.org/wiki/License" title="License">License</a></th>
</tr>
<tr>
<th style="background: #edf; color: black; vertical-align: middle; text-align: left; font-weight: bolder;" class="rh heading table-rh"><a href="https://en.wikipedia.org/wiki/Apache_Click" title="Apache Click">Apache Click</a></th>
<td>2.3.0 (retired)</td>
<td>2011-03-27</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free"><a href="https://en.wikipedia.org/wiki/Apache_Software_License" class="mw-redirect" title="Apache Software License">Apache</a> 2.0</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Apache_OFBiz" title="Apache OFBiz">Apache OFBiz</a></th>
<td>13.07.03</td>
<td>2016-04-04</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">Apache 2.0</td>
</tr>
<tr>
<th style="background: #edf; color: black; vertical-align: middle; text-align: left; font-weight: bolder;" class="rh heading table-rh"><a href="https://en.wikipedia.org/wiki/Shale_Framework_(software)" class="mw-redirect" title="Shale Framework (software)">Apache Shale</a></th>
<td>1.0.4 (retired)</td>
<td>2007-12-19</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">Apache</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Apache_Sling" title="Apache Sling">Apache Sling</a></th>
<td>8</td>
<td>2015-10-16</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">Apache 2.0</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Apache_Struts_2" title="Apache Struts 2">Apache Struts 2</a></th>
<td>2.5.13</td>
<td>2017-09-05</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">Apache 2.0</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Apache_Tapestry" title="Apache Tapestry">Apache Tapestry</a></th>
<td>5.4.1</td>
<td>2016-03-16</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">Apache</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Apache_Wicket" title="Apache Wicket">Apache Wicket</a></th>
<td>7.9.0</td>
<td>2017-09-19</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">Apache 2.0</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/AppFuse" title="AppFuse">AppFuse</a></th>
<td>3.5.0</td>
<td>2015-02-20</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">Apache 2.0</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Brutos_Framework" title="Brutos Framework">Brutos Framework</a></th>
<td>2.0</td>
<td>2015-06-30</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">Apache 2.0</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Remote_Application_Platform" title="Remote Application Platform">Eclipse RAP</a></th>
<td>3.1 M4</td>
<td>2015-12-22</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free"><a href="https://en.wikipedia.org/wiki/Eclipse_Public_License" title="Eclipse Public License">Eclipse</a></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/FormEngine" title="FormEngine">FormEngine</a></th>
<td>2.0.1 (dormant)</td>
<td>2012-05-08</td>
<td style="background: #ddf; vertical-align: middle; text-align: center;" class="table-proprietary"><a href="https://en.wikipedia.org/wiki/Proprietary_software" title="Proprietary software">Proprietary</a></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Grails_(framework)" title="Grails (framework)">Grails</a></th>
<td>3.3.1</td>
<td>2017-09-22</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">Apache</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Google_Web_Toolkit" title="Google Web Toolkit">Google Web Toolkit</a></th>
<td>2.8.1</td>
<td>2017-04-24</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">Apache 2.0</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Hamlets" title="Hamlets">Hamlets</a></th>
<td>1.7.1 (dormant)</td>
<td>2012-06-29</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free"><a href="https://en.wikipedia.org/wiki/BSD_licenses" title="BSD licenses">BSD</a></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/ItsNat" title="ItsNat">ItsNat</a></th>
<td>1.4</td>
<td>2015-09-18</td>
<td><a href="/wiki/GNU_Lesser_General_Public_License" title="GNU Lesser General Public License">GNU LGPL</a>, proprietary</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/JavaServer_Faces" title="JavaServer Faces">JavaServer Faces</a> (Mojarra)</th>
<td>2.2.8</td>
<td>2016-05-30</td>https://en.wikipedia.org
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free"><a href="https://en.wikipedia.org/wiki/Common_Development_and_Distribution_License" title="Common Development and Distribution License">CDDL</a>, <a href="https://en.wikipedia.org/wiki/GNU_General_Public_License" title="GNU General Public License">GNU GPL</a> 2, Apache 2.0</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/JBoss_Seam" title="JBoss Seam">JBoss Seam</a></th>
<td>3.1.0 final (discontinued)</td>
<td>2012-01-13</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">GNU LGPL</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Jspx-bay" title="Jspx-bay">Jspx-bay</a></th>
<td>2.1</td>
<td>2015-12-23</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">Apache 2.0</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/JVx_(Framework)" title="JVx (Framework)">JVx</a></th>
<td>2.4</td>
<td>2015-12-23</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">Apache 2.0</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/JWt_(Java_web_toolkit)" title="JWt (Java web toolkit)">JWt</a></th>
<td>3.3.8</td>
<td>2017-08-16</td>
<td><a href="https://en.wikipedia.org/wiki/GNU_General_Public_License" title="GNU General Public License">GNU GPL</a>, proprietary</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/OpenLaszlo" title="OpenLaszlo">OpenLaszlo</a></th>
<td>4.9.0 (dormant)</td>
<td>2010-10-21</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free"><a href="https://en.wikipedia.org/wiki/Common_Public_License" title="Common Public License">CPL</a></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/OpenXava" title="OpenXava">OpenXava</a></th>
<td>5.5</td>
<td>2016-04-27</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">GNU LGPL</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Oracle_Application_Development_Framework" title="Oracle Application Development Framework">Oracle ADF</a></th>
<td>12.1.3.0</td>
<td>2014-06-26</td>
<td>Oracle Technology Network Developer License</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Play_Framework" title="Play Framework">Play</a></th>
<td>2.6.6</td>
<td>2017-10-05</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">Apache 2.0</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/RIFE" title="RIFE">RIFE</a></th>
<td>1.6.1 (unmaintained)</td>
<td>2007-07-14</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">CDDL, GNU LGPL</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Spark_(software)" title="Spark (software)">Spark</a></th>
<td>2.5</td>
<td>2016-05-03</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">Apache</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Spring_Framework" title="Spring Framework">Spring</a></th>
<td>4.3.5</td>
<td>2016-12-21</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">Apache 2.0</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Stripes_(framework)" title="Stripes (framework)">Stripes</a></th>
<td>1.6.0</td>
<td>2015-07-23</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">Apache</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Takes_(framework)" title="Takes (framework)">Takes</a></th>
<td>1.1</td>
<td>2016-06-26</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">MIT</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Vaadin" title="Vaadin">Vaadin</a></th>
<td>7.6.6</td>
<td>2016-05-12</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">Apache 2.0</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/VRaptor" title="VRaptor">VRaptor</a></th>
<td>4.2.0-RC4</td>
<td>2016-05-09</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">Apache 2.0</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Wavemaker" class="mw-redirect" title="Wavemaker">Wavemaker</a></th>
<td>8.2<sup id="cite_ref-12" class="reference"><a href="#cite_note-12">[12]</a></sup></td>
<td>2016-06-07</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">Apache</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/WebObjects" title="WebObjects">WebObjects</a></th>
<td>5.4.3 (discontinued)</td>
<td>2008-09-15</td>
<td style="background: #ddf; vertical-align: middle; text-align: center;" class="table-proprietary"><a href="https://en.wikipedia.org/wiki/Proprietary_software" title="Proprietary software">Proprietary</a></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/WebWork" title="WebWork">WebWork</a></th>
<td>2.2.6 (unmaintained)</td>
<td>2007-07-21</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">Apache</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Ztemplates" class="mw-redirect" title="Ztemplates">ztemplates</a></th>
<td>2.4.0 (dormant)</td>
<td>2011-09-11</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">Apache</td>
</tr>
</table>

Lets explore one popular java framework in detail to undestand how easier the web development using Java.

***********************************
## Spring Framework
****************

Spring is the most popular application development framework for enterprise Java. Millions of developers around the world use Spring Framework to create high performing, easily testable, and reusable code.

Spring framework is an open source Java platform. It was initially written by Rod Johnson and was first released under the Apache 2.0 license in June 2003.

Spring is lightweight when it comes to size and transparency. The basic version of Spring framework is around 2MB.

The core features of the Spring Framework can be used in developing any Java application, but there are extensions for building web applications on top of the Java EE platform. Spring framework targets to make J2EE development easier to use and promotes good programming practices by enabling a POJO-based programming model.

### Dependency Injection (DI)

The technology that Spring is most identified with is the Dependency Injection (DI) flavor of Inversion of Control. The Inversion of Control (IoC) is a general concept, and it can be expressed in many different ways. Dependency Injection is merely one concrete example of Inversion of Control.

When writing a complex Java application, application classes should be as independent as possible of other Java classes to increase the possibility to reuse these classes and to test them independently of other classes while unit testing. Dependency Injection helps in gluing these classes together and at the same time keeping them independent.

What is dependency injection exactly? Let's look at these two words separately. Here the dependency part translates into an association between two classes. For example, class A is dependent of class B. Now, let's look at the second part, injection. All this means is, class B will get injected into class A by the IoC.

Dependency injection can happen in the way of passing parameters to the constructor or by post-construction using setter methods. As Dependency Injection is the heart of Spring Framework, we will explain this concept in a separate chapter with relevant example.

### Aspect Oriented Programming (AOP)

One of the key components of Spring is the Aspect Oriented Programming (AOP) framework. The functions that span multiple points of an application are called cross-cutting concerns and these cross-cutting concerns are conceptually separate from the application's business logic. There are various common good examples of aspects including logging, declarative transactions, security, caching, etc.

The key unit of modularity in OOP is the class, whereas in AOP the unit of modularity is the aspect. DI helps you decouple your application objects from each other, while AOP helps you decouple cross-cutting concerns from the objects that they affect.

The AOP module of Spring Framework provides an aspect-oriented programming implementation allowing you to define method-interceptors and pointcuts to cleanly decouple code that implements functionality that should be separated. We will discuss more about Spring AOP concepts in a separate chapter.

### Spring Framework - Architecture
Spring could potentially be a one-stop shop for all your enterprise applications. However, Spring is modular, allowing you to pick and choose which modules are applicable to you, without having to bring in the rest. The following section provides details about all the modules available in Spring Framework.

The Spring Framework provides about 20 modules which can be used based on an application requirement.
![Spring Framework - Architecture](https://www.tutorialspoint.com/spring/images/spring_architecture.png)
**Core Container**

The Core Container consists of the Core, Beans, Context, and Expression Language modules the details of which are as follows −

* The Core module provides the fundamental parts of the framework, including the IoC and Dependency Injection features.

* The Bean module provides BeanFactory, which is a sophisticated implementation of the factory pattern.

* The Context module builds on the solid base provided by the Core and Beans modules and it is a medium to access any objects defined and configured. The ApplicationContext interface is the focal point of the Context module.

* The SpEL module provides a powerful expression language for querying and manipulating an object graph at runtime.

**Data Access/Integration**

The Data Access/Integration layer consists of the JDBC, ORM, OXM, JMS and Transaction modules whose detail is as follows −

* The JDBC module provides a JDBC-abstraction layer that removes the need for tedious JDBC related coding.

* The ORM module provides integration layers for popular object-relational mapping APIs, including JPA, JDO, Hibernate, and iBatis.

* The OXM module provides an abstraction layer that supports Object/XML mapping implementations for JAXB, Castor, XMLBeans, JiBX and XStream.

* The Java Messaging Service JMS module contains features for producing and consuming messages.

* The Transaction module supports programmatic and declarative transaction management for classes that implement special interfaces and for all your POJOs.

**Web**
The Web layer consists of the Web, Web-MVC, Web-Socket, and Web-Portlet modules the details of which are as follows −

* The Web module provides basic web-oriented integration features such as multipart file-upload functionality and the initialization of the IoC container using servlet listeners and a web-oriented application context.

* The Web-MVC module contains Spring's Model-View-Controller (MVC) implementation for web applications.

* The Web-Socket module provides support for WebSocket-based, two-way communication between the client and the server in web applications.

* The Web-Portlet module provides the MVC implementation to be used in a portlet environment and mirrors the functionality of Web-Servlet module.

There are few other important modules like AOP, Aspects, Instrumentation, Web and Test modules the details of which are as follows −

* The AOP module provides an aspect-oriented programming implementation allowing you to define method-interceptors and pointcuts to cleanly decouple code that implements functionality that should be separated.

* The Aspects module provides integration with AspectJ, which is again a powerful and mature AOP framework.

* The Instrumentation module provides class instrumentation support and class loader implementations to be used in certain application servers.

* The Messaging module provides support for STOMP as the WebSocket sub-protocol to use in applications. It also supports an annotation programming model for routing and processing STOMP messages from WebSocket clients.

* The Test module supports the testing of Spring components with JUnit or TestNG frameworks.

 | HN        | Medium         | Reddit  |  Quora-QA  | Stack-Overflow-QA |  Online-Courses (pivotal) | Official docs|
| ------------- |:-------------:| -----:| -----:|-----:|-----:|-----:|
|  [spring-framework](https://hn.algolia.com/?query=spring%20framework&sort=byPopularity&prefix&page=0&dateRange=all&type=story)  | [spring-framework](https://medium.com/tag/spring-framework)  | [spring-framework](https://www.reddit.com/r/springsource/)  | [spring-framework](https://www.quora.com/topic/Spring-Framework-1)  |  [spring-framework](https://stackoverflow.com/questions/tagged/spring+spring-mvc)      |* [spring-framework](https://pivotal.io/training/learning-paths)  * [spring-framework](https://www.lynda.com/search?q=spring+framework)|[spring-framework](https://docs.spring.io/spring/docs/current/spring-framework-reference/index.html)  |

**********
### Java Web Frameworks Index
-----------
Popularity rank of each java web frameworks computed by combining public data from StackOverflow, LinkedIn, GitHub, and Google search.

<div class="row text-center">
      		<div class="col-12">
		  		<center>
		  			<table class="zebra"> 
						 <thead>
							  <tr>
								  <th class="center">Rank</th>
								  <th class="center">Framework</th>
								  <th class="center">Popularity</th>
							  </tr>
						  </thead>
						  <tbody>
							  	<tr><td class='center'>1</td><td>Spring mvc</td><td class='center'>29.39</td></tr>
								<tr><td class='center'>2</td><td>JSF</td><td class='center'>15.19</td></tr>
								<tr><td class='center'>3</td><td>Spring Boot</td><td class='center'>11.69</td></tr>
								<tr><td class='center'>4</td><td>GWT</td><td class='center'>7.6</td></tr>
								<tr><td class='center'>5</td><td>Grails</td><td class='center'>6.73</td></tr>
								<tr><td class='center'>6</td><td>Struts</td><td class='center'>7.47</td></tr>
								<tr><td class='center'>7</td><td>Play framework</td><td class='center'>4.16</td></tr>
								<tr><td class='center'>8</td><td>Seam</td><td class='center'>1.88</td></tr>
								<tr><td class='center'>9</td><td>jax-rs</td><td class='center'>3.1</td></tr>
								<tr><td class='center'>10</td><td>Vaadin</td><td class='center'>2.45</td></tr>
								<tr><td class='center'>11</td><td>Wicket</td><td class='center'>1.92</td></tr>
								<tr><td class='center'>12</td><td>Tapestry</td><td class='center'>1.83</td></tr>
								<tr><td class='center'>13</td><td>JHipster</td><td class='center'>0.73</td></tr>
								<tr><td class='center'>14</td><td>Dropwizard</td><td class='center'>1.05</td></tr>
								<tr><td class='center'>15</td><td>Sparkjava</td><td class='center'>0.76</td></tr>
								<tr><td class='center'>16</td><td>Lagom</td><td class='center'>0.71</td></tr>
								<tr><td class='center'>17</td><td>Vert.x</td><td class='center'>0.72</td></tr>
								<tr><td class='center'>18</td><td>Ratpack</td><td class='center'>0.15</td></tr>
								<tr><td class='center'>19</td><td>Rapidoid</td><td class='center'>0</td></tr>
						  </tbody>
				  	</table>
				  <img src="https://github.com/gopala-kr/weekend-with-github/blob/master/Projects-Blogs/03-backend-development/springframework/java_web_stats.JPG" />
		  		</center>
		  		<div id="chart"></div>
	  		</div>
    	</div>

source : [zeroturnaround](https://zeroturnaround.com/webframeworksindex/)

****************
> Offical doc says:

> ## Spring Framework Overview
> Spring makes it easy to create Java enterprise applications. It provides everything you need to embrace the Java language in an enterprise environment, with support for Groovy and Kotlin as alternative languages on the JVM, and with the flexibility to create many kinds of architectures depending on an application’s needs. As of Spring Framework 5.0, Spring requires JDK 8+ (Java SE 8+) and provides out-of-the-box support for JDK 9 already.

> Spring supports a wide range of application scenarios. In a large enterprise, applications often exist for a long time and have to run on a JDK and application server whose upgrade cycle is beyond developer control. Others may run as a single jar with the server embedded, possibly in a cloud environment. Yet others may be standalone applications (such as batch or integration workloads) that do not need a server.

> Spring is open source. It has a large and active community that provides continuous feedback based on a diverse range of real-world use cases. This has helped Spring to successfully evolve over a very long time.
> ### What We Mean by "Spring"
> The term "Spring" means different things in different contexts. It can be used to refer to the Spring Framework project itself, which is where it all started. Over time, other Spring projects have been built on top of the Spring Framework. Most often, when people say "Spring", they mean the entire family of projects. This reference documentation focuses on the foundation: the Spring Framework itself.

> The Spring Framework is divided into modules. Applications can choose which modules they need. At the heart are the modules of the core container, including a configuration model and a dependency injection mechanism. Beyond that, the Spring Framework provides foundational support for different application architectures, including messaging, transactional data and persistence, and web. It also includes the Servlet-based Spring MVC web framework and, in parallel, the Spring WebFlux reactive web framework.

> A note about modules: Spring’s framework jars allow for deployment to JDK 9’s module path ("Jigsaw"). For use in Jigsaw-enabled applications, the Spring Framework 5 jars come with "Automatic-Module-Name" manifest entries which define stable language-level module names ("spring.core", "spring.context" etc) independent from jar artifact names (the jars follow the same naming pattern with "-" instead of ".", e.g. "spring-core" and "spring-context"). Of course, Spring’s framework jars keep working fine on the classpath on both JDK 8 and 9.

> ## History of Spring and the Spring Framework

> Spring came into being in 2003 as a response to the complexity of the early J2EE specifications. While some consider Java EE and Spring to be in competition, Spring is, in fact, complementary to Java EE. The Spring programming model does not embrace the Java EE platform specification; rather, it integrates with carefully selected individual specifications from the EE umbrella:

> * Servlet API (JSR 340)

> * WebSocket API (JSR 356)

> * Concurrency Utilities (JSR 236)

> * JSON Binding API (JSR 367)

> * Bean Validation (JSR 303)

> * JPA (JSR 338)

> * JMS (JSR 914)

> as well as JTA/JCA setups for transaction coordination, if necessary.

> The Spring Framework also supports the Dependency Injection (JSR 330) and Common Annotations (JSR 250) specifications, which application developers may choose to use instead of the Spring-specific mechanisms provided by the Spring Framework.

> As of Spring Framework 5.0, Spring requires the Java EE 7 level (e.g. Servlet 3.1+, JPA 2.1+) as a minimum - while at the same time providing out-of-the-box integration with newer APIs at the Java EE 8 level (e.g. Servlet 4.0, JSON Binding API) when encountered at runtime. This keeps Spring fully compatible with e.g. Tomcat 8 and 9, WebSphere 9, and JBoss EAP 7.

> Over time, the role of Java EE in application development has evolved. In the early days of Java EE and Spring, applications were created to be deployed to an application server. Today, with the help of Spring Boot, applications are created in a devops- and cloud-friendly way, with the Servlet container embedded and trivial to change. As of Spring Framework 5, a WebFlux application does not even use the Servlet API directly and can run on servers (such as Netty) that are not Servlet containers.

> Spring continues to innovate and to evolve. Beyond the Spring Framework, there are other projects, such as Spring Boot, Spring Security, Spring Data, Spring Cloud, Spring Batch, among others. It’s important to remember that each project has its own source code repository, issue tracker, and release cadence. See spring.io/projects for the complete list of Spring projects.

> ## Design Philosophy

> When you learn about a framework, it’s important to know not only what it does but what principles it follows. Here are the guiding principles of the Spring Framework:

> Provide choice at every level. Spring lets you defer design decisions as late as possible. For example, you can switch persistence providers through configuration without changing your code. The same is true for many other infrastructure concerns and integration with third-party APIs.

> Accommodate diverse perspectives. Spring embraces flexibility and is not opinionated about how things should be done. It supports a wide range of application needs with different perspectives.

> Maintain strong backward compatibility. Spring’s evolution has been carefully managed to force few breaking changes between versions. Spring supports a carefully chosen range of JDK versions and third-party libraries to facilitate maintenance of applications and libraries that depend on Spring.

> Care about API design. The Spring team puts a lot of thought and time into making APIs that are intuitive and that hold up across many versions and many years.

> Set high standards for code quality. The Spring Framework puts a strong emphasis on meaningful, current, and accurate Javadoc. It is one of very few projects that can claim clean code structure with no circular dependencies between packages.
***********
![spring doc](https://github.com/gopala-kr/weekend-with-github/blob/master/Projects-Blogs/03-backend-development/springframework/spring_doc.JPG)

[Sample Spring Project Structure from official guide:](https://docs.spring.io/docs/Spring-MVC-step-by-step/)

![spring project structure](https://docs.spring.io/docs/Spring-MVC-step-by-step/images/dir-structure-endp6.png)

Some article on spring project structure:
* [spring project structure](https://www.coveros.com/spring-mvc-project-structure/) 
* [stackoverflow](https://stackoverflow.com/questions/23550273/spring-mvc-project-structure-best-practices) 
* [spring web app architecture](https://www.petrikainulainen.net/software-development/design/understanding-spring-web-application-architecture-the-classic-way/)

******************************************

<h3><span class="mw-headline" id="PHP">Lis of PHP Web Frameworks</span></span></span></h3>

<p>Source: Wikipedia</P>

<div role="note" class="hatnote navigation-not-searchable">Wiki: <a href="https://en.wikipedia.org/wiki/PHP" title="PHP">PHP</a></div>
<table class="wikitable sortable" style="font-size: 90%">
<br>

<tr>
<th style="width:140pt;">Project</th>
<th>Start date</th>
<th style="width:90pt;">Current stable version</th>
<th>Release date</th>
<th><a href="https://en.wikipedia.org/wiki/Software_license" title="Software license">License</a></th>
</tr>
<tr>
<th style="background: #edf; color: black; vertical-align: middle; text-align: left; font-weight: bolder;" class="rh heading table-rh"><a href="https://en.wikipedia.org/wiki/Agavi" title="Agavi">Agavi</a></th>
<td>2005-05</td>
<td>1.0.8<sup id="cite_ref-agavi_release_15-0" class="reference"><a href="#cite_note-agavi_release-15">[15]</a></sup></td>
<td>2015-06-29</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free"><a href="https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License" title="GNU Lesser General Public License">LGPL</a></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/CakePHP" title="CakePHP">CakePHP</a></th>
<td>2005-08</td>
<td>3.5.0<sup id="cite_ref-cakephp_release_16-0" class="reference"><a href="#cite_note-cakephp_release-16">[16]</a></sup></td>
<td>2017-08-18<small class="plainlinks"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:CakePHP_version&amp;action=edit">[±]</a></small></td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free"><a href="https://en.wikipedia.org/wiki/MIT_License" title="MIT License">MIT</a></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/CodeIgniter" title="CodeIgniter">CodeIgniter</a></th>
<td>2006-02-28</td>
<td>3.1.6<sup id="cite_ref-ci_release_17-0" class="reference"><a href="#cite_note-ci_release-17">[17]</a></sup></td>
<td>2017-09-25</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">MIT</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Fat-Free_Framework" title="Fat-Free Framework">Fat-Free</a></th>
<td>2009-09</td>
<td>3.6.0<sup id="cite_ref-fatfreegit_18-0" class="reference"><a href="#cite_note-fatfreegit-18">[18]</a></sup></td>
<td>2016-11-19</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">GPLv3</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/FuelPHP" title="FuelPHP">FuelPHP</a></th>
<td>2011-08</td>
<td>1.8<sup id="cite_ref-fuel_release_19-0" class="reference"><a href="#cite_note-fuel_release-19">[19]</a></sup></td>
<td>2016-04-09</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">MIT</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Gyroscope_(software)" title="Gyroscope (software)">Gyroscope</a></th>
<td>2008-11-20</td>
<td>8.8.0</td>
<td>2016-04-17</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free"><a href="https://en.wikipedia.org/wiki/BSD_licenses" title="BSD licenses">BSD</a></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Jamroom" title="Jamroom">Jamroom</a></th>
<td>2003-07-28</td>
<td>6.1.0<sup id="cite_ref-jamroom_release_20-0" class="reference"><a href="#cite_note-jamroom_release-20">[20]</a></sup></td>
<td>2017-08-30</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free"><a href="https://en.wikipedia.org/wiki/Mozilla_Public_License" title="Mozilla Public License">MPL</a></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Kajona" title="Kajona">Kajona</a></th>
<td>2006</td>
<td>6.2<sup id="cite_ref-kajona_release_21-0" class="reference"><a href="#cite_note-kajona_release-21">[21]</a></sup></td>
<td>2017-06-08</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free"><a href="https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License" title="GNU Lesser General Public License">LGPLv2</a></td>
</tr>
<tr>
<th style="background: #edf; color: black; vertical-align: middle; text-align: left; font-weight: bolder;" class="rh heading table-rh"><a href="https://en.wikipedia.org/wiki/Kohana_(framework)" title="Kohana (framework)">Kohana</a></th>
<td>2007-07</td>
<td>3.3.5<sup id="cite_ref-kohana_release_22-0" class="reference"><a href="#cite_note-kohana_release-22">[22]</a></sup></td>
<td>2016-03-10</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free"><a href="https://en.wikipedia.org/wiki/BSD_licenses" title="BSD licenses">BSD</a></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Laravel" title="Laravel">Laravel</a></th>
<td>2011-06-11</td>
<td>5.5.0<sup id="cite_ref-23" class="reference"><a href="#cite_note-23">[23]</a></sup></td>
<td>2017-08-30</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">MIT</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Li3_(software)" title="Li3 (software)">Li3</a> (Lithium)</th>
<td>2009-10</td>
<td>1.1.0<sup id="cite_ref-li3_release_24-0" class="reference"><a href="#cite_note-li3_release-24">[24]</a></sup></td>
<td>2017-04-23</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free"><a href="https://en.wikipedia.org/wiki/BSD_licenses" title="BSD licenses">BSD</a></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Nette_Framework" title="Nette Framework">Nette Framework</a></th>
<td>2006-01<sup id="cite_ref-25" class="reference"><a href="#cite_note-25">[25]</a></sup></td>
<td>2.4.0<sup id="cite_ref-26" class="reference"><a href="#cite_note-26">[26]</a></sup></td>
<td>2016-05-03</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free"><a href="https://en.wikipedia.org/wiki/New_BSD_License" class="mw-redirect" title="New BSD License">New BSD</a>, GPLv2, GPLv3<sup id="cite_ref-27" class="reference"><a href="#cite_note-27">[27]</a></sup></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Phalcon_(framework)" title="Phalcon (framework)">Phalcon</a></th>
<td>2012-11-14</td>
<td>3.2.3<sup id="cite_ref-phalcon_release_28-0" class="reference"><a href="#cite_note-phalcon_release-28">[28]</a></sup></td>
<td>2017-10-12</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">BSD</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Pop_PHP_Framework" title="Pop PHP Framework">Pop PHP</a></th>
<td>2012-03-19</td>
<td>3.6.1<sup id="cite_ref-29" class="reference"><a href="#cite_note-29">[29]</a></sup></td>
<td>2017-09-14</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">New BSD</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/PRADO_(framework)" title="PRADO (framework)">PRADO</a></th>
<td>2004-01</td>
<td>3.3.2<sup id="cite_ref-30" class="reference"><a href="#cite_note-30">[30]</a></sup></td>
<td>2016-08-23</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">New BSD<sup id="cite_ref-31" class="reference"><a href="#cite_note-31">[31]</a></sup></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Silex_(web_framework)" title="Silex (web framework)">Silex</a></th>
<td>2011-09</td>
<td>2.0.0<sup id="cite_ref-silex_release_32-0" class="reference"><a href="#cite_note-silex_release-32">[32]</a></sup></td>
<td>2016-05-18</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">MIT</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/SilverStripe" title="SilverStripe">SilverStripe</a></th>
<td>2007-02-03</td>
<td>3.6.1<sup id="cite_ref-silverstripe_release_33-0" class="reference"><a href="#cite_note-silverstripe_release-33">[33]</a></sup></td>
<td>2017-06-27</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">BSD</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Smart_Framework_PHP" title="Smart Framework PHP">Smart.Framework</a></th>
<td>2015-02-01</td>
<td>2.3.7.2<sup id="cite_ref-34" class="reference"><a href="#cite_note-34">[34]</a></sup></td>
<td>2016-09-27</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">BSD</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Symfony" title="Symfony">Symfony</a></th>
<td>2005-10</td>
<td>3.3.9<sup id="cite_ref-35" class="reference"><a href="#cite_note-35">[35]</a></sup></td>
<td>2017-09-11</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">MIT</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/TwistPHP" title="TwistPHP">TwistPHP</a></th>
<td>2014-07</td>
<td>3.0.5<sup id="cite_ref-twistphp_release_36-0" class="reference"><a href="#cite_note-twistphp_release-36">[36]</a></sup></td>
<td>2017-01-11</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free"><a href="https://en.wikipedia.org/wiki/GNU_General_Public_License" title="GNU General Public License">GPLv3</a></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/TYPO3_Flow" title="TYPO3 Flow">TYPO3 Flow</a></th>
<td>2011-10</td>
<td>3.3.4<sup id="cite_ref-typo3release_37-0" class="reference"><a href="#cite_note-typo3release-37">[37]</a></sup></td>
<td>2016-09-29</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free"><a href="https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License" title="GNU Lesser General Public License">LGPLv3</a></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Yii" title="Yii">Yii</a></th>
<td>2008-12-03</td>
<td>2.0.12<sup id="cite_ref-38" class="reference"><a href="#cite_note-38">[38]</a></sup></td>
<td>2017-06-05</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free"><a href="https://en.wikipedia.org/wiki/New_BSD_Licence" class="mw-redirect" title="New BSD Licence">New BSD</a></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Zend_Framework" title="Zend Framework">Zend Framework</a></th>
<td>2006-03</td>
<td>3.0.0<sup id="cite_ref-zend_release_39-0" class="reference"><a href="#cite_note-zend_release-39">[39]</a></sup></td>
<td>2016-06-28</td>
<td style="background: #9FF; color: black; vertical-align: middle; text-align: center;" class="free table-free">New BSD</td>
</tr>
</table>

************************


<h3><span class="mw-headline" id="Python">List of Python Web Frameworks</span></span></h3>

<p>Source: Wikipedia</P>

<div role="note" class="hatnote navigation-not-searchable">Wiki: <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" title="Python (programming language)">Python (programming language)</a> and <a href="https://en.wikipedia.org/wiki/List_of_Python_software#Web_frameworks" title="List of Python software">List of Python software §&#160;Web frameworks</a></div>
<table class="wikitable sortable" style="font-size: 90%">
<br>
<tr>
<th>Project</th>
<th>Current stable version</th>
<th>Release date</th>
<th><a href="https://en.wikipedia.org/wiki/Software_license" title="Software license">License</a></th>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Bottle_(web_framework)" title="Bottle (web framework)">Bottle</a></th>
<td>0.12.13</td>
<td>2017-01-09<sup id="cite_ref-bottle_release_40-0" class="reference"><a href="#cite_note-bottle_release-40">[40]</a></sup></td>
<td><a href="https://en.wikipedia.org/wiki/MIT_license" class="mw-redirect" title="MIT license">MIT</a></td>
</tr>
<tr>
<th style="background: #edf; color: black; vertical-align: middle; text-align: left; font-weight: bolder;" class="rh heading table-rh"><a href="https://en.wikipedia.org/wiki/BlueBream" class="mw-redirect" title="BlueBream">BlueBream</a></th>
<td>1.0</td>
<td>2011-01-18</td>
<td><a href="https://en.wikipedia.org/wiki/Zope_Public_License" title="Zope Public License">ZPL</a></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/CherryPy" title="CherryPy">CherryPy</a></th>
<td>10.0.0</td>
<td>2017-01-20<sup id="cite_ref-cp_release_41-0" class="reference"><a href="#cite_note-cp_release-41">[41]</a></sup></td>
<td><a href="https://en.wikipedia.org/wiki/BSD_licenses" title="BSD licenses">BSD</a></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/CubicWeb" title="CubicWeb">CubicWeb</a></th>
<td>3.22.2</td>
<td>2016-02-23<sup id="cite_ref-cubicweb_release_42-0" class="reference"><a href="#cite_note-cubicweb_release-42">[42]</a></sup></td>
<td><a href="https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License" title="GNU Lesser General Public License">LGPL</a></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Django_(web_framework)" title="Django (web framework)">Django</a></th>
<td>1.11.5</td>
<td>2017-09-06<sup id="cite_ref-43" class="reference"><a href="#cite_note-43">[43]</a></sup></td>
<td>BSD</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Flask_(web_framework)" title="Flask (web framework)">Flask</a></th>
<td>0.12</td>
<td>2016-12-21<sup id="cite_ref-44" class="reference"><a href="#cite_note-44">[44]</a></sup></td>
<td>BSD</td>
</tr>
<tr>
<th style="background: #edf; color: black; vertical-align: middle; text-align: left; font-weight: bolder;" class="rh heading table-rh"><a href="https://en.wikipedia.org/wiki/Google_App_Engine" title="Google App Engine">Google App Engine</a></th>
<td>1.9.1</td>
<td>2017-03-29</td>
<td>LGPL, Proprietary</td>
</tr>
<tr>
<th style="background: #edf; color: black; vertical-align: middle; text-align: left; font-weight: bolder;" class="rh heading table-rh"><a href="https://en.wikipedia.org/wiki/Grok_(web_framework)" title="Grok (web framework)">Grok</a></th>
<td>2.8</td>
<td>2013-02-14<sup id="cite_ref-grok_release_45-0" class="reference"><a href="#cite_note-grok_release-45">[45]</a></sup></td>
<td>ZPL</td>
</tr>
<tr>
<th style="background: #edf; color: black; vertical-align: middle; text-align: left; font-weight: bolder;" class="rh heading table-rh"><a href="https://en.wikipedia.org/wiki/Nagare_(web_framework)" title="Nagare (web framework)">Nagare</a></th>
<td>0.4.1</td>
<td>2012-01-18</td>
<td>BSD</td>
</tr>
<tr>
<th style="background: #edf; color: black; vertical-align: middle; text-align: left; font-weight: bolder;" class="rh heading table-rh"><a href="https://en.wikipedia.org/wiki/Pyjs" title="Pyjs">Pyjs</a></th>
<td>0.8.1a</td>
<td>2012-05-06</td>
<td><a href="https://en.wikipedia.org/wiki/Apache_License" title="Apache License">Apache</a></td>
</tr>
<tr>
<th style="background: #edf; color: black; vertical-align: middle; text-align: left; font-weight: bolder;" class="rh heading table-rh"><a href="https://en.wikipedia.org/wiki/Pylons_Framework" class="mw-redirect" title="Pylons Framework">Pylons</a></th>
<td>1.0.2</td>
<td>2015-07-21</td>
<td>BSD</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Pyramid_(web_framework)" class="mw-redirect" title="Pyramid (web framework)">Pyramid</a></th>
<td>1.7</td>
<td>2016-05-19<sup id="cite_ref-pyramid-1.7-changes_46-0" class="reference"><a href="#cite_note-pyramid-1.7-changes-46">[46]</a></sup></td>
<td>BSD</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/TACTIC_(web_framework)" title="TACTIC (web framework)">TACTIC</a></th>
<td>4.4.0.v0v</td>
<td>2016-05-19<sup id="cite_ref-47" class="reference"><a href="#cite_note-47">[47]</a></sup></td>
<td>EPL</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Tornado_(web_server)" title="Tornado (web server)">Tornado</a></th>
<td>4.3</td>
<td>2015-11-06<sup id="cite_ref-48" class="reference"><a href="#cite_note-48">[48]</a></sup></td>
<td>Apache</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/TurboGears" title="TurboGears">TurboGears</a></th>
<td>2.3.10</td>
<td>2016-12-04<sup id="cite_ref-49" class="reference"><a href="#cite_note-49">[49]</a></sup></td>
<td>MIT, LGPL</td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Web2py" title="Web2py">web2py</a></th>
<td>2.14.6</td>
<td>2016-05-10<sup id="cite_ref-50" class="reference"><a href="#cite_note-50">[50]</a></sup></td>
<td><a href="https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License" title="GNU Lesser General Public License">LGPL3</a></td>
</tr>
<tr>
<th style="background: #edf; color: black; vertical-align: middle; text-align: left; font-weight: bolder;" class="rh heading table-rh"><a href="https://en.wikipedia.org/wiki/Webware_for_Python" title="Webware for Python">Webware</a></th>
<td>1.1.1</td>
<td>2013-01-18</td>
<td><a href="https://en.wikipedia.org/wiki/Python_License" title="Python License">Python</a></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Zope_2" class="mw-redirect" title="Zope 2">Zope 2</a></th>
<td>2.13.26</td>
<td>2017-02-20<sup id="cite_ref-51" class="reference"><a href="#cite_note-51">[51]</a></sup></td>
<td>ZPL</td>
</tr>
</table>

*********************************


<h3><span class="mw-headline" id="Ruby">List of Ruby Web Frameworks</span></span></h3>

<p>Source: Wikipedia</P>

<div role="note" class="hatnote navigation-not-searchable">Wiki: <a href="https://en.wikipedia.org/wiki/Ruby_(programming_language)" title="Ruby (programming language)">Ruby (programming language)</a></div>
<table class="wikitable sortable" style="font-size: 90%">
<br>
<tr>
<th>Project</th>
<th>Current stable version</th>
<th>Release date</th>
<th><a href="https://en.wikipedia.org/wiki/Software_license" title="Software license">License</a></th>
</tr>
<tr>
<th style="background: #edf; color: black; vertical-align: middle; text-align: left; font-weight: bolder;" class="rh heading table-rh"><a href="https://en.wikipedia.org/wiki/Camping_(microframework)" title="Camping (microframework)">Camping</a></th>
<td>2.1</td>
<td>2010-08-20</td>
<td><a href="https://en.wikipedia.org/wiki/MIT_License" title="MIT License">MIT</a></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Padrino_(web_framework)" title="Padrino (web framework)">Padrino</a></th>
<td>0.13.2</td>
<td>2016-05-09<sup id="cite_ref-changes_52-0" class="reference"><a href="#cite_note-changes-52">[52]</a></sup></td>
<td><a href="https://en.wikipedia.org/wiki/MIT_License" title="MIT License">MIT</a></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Ruby_on_Rails" title="Ruby on Rails">Ruby on Rails</a></th>
<td>5.1.1</td>
<td>2017-05-12<sup id="cite_ref-53" class="reference"><a href="#cite_note-53">[53]</a></sup></td>
<td><a href="https://en.wikipedia.org/wiki/MIT_License" title="MIT License">MIT</a></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh"><a href="https://en.wikipedia.org/wiki/Sinatra_(software)" title="Sinatra (software)">Sinatra</a></th>
<td>2.0.0</td>
<td>2017-05-07<sup id="cite_ref-54" class="reference"><a href="#cite_note-54">[54]</a></sup></td>
<td><a href="https://en.wikipedia.org/wiki/MIT_License" title="MIT License">MIT</a></td>
</tr>
<tr>
<th style="background: #ececec; color: black; font-weight: bold; vertical-align: middle; text-align: left;" class="table-rh">Hanami</th>
<td>1.0.0</td>
<td>2017-04-06<sup id="cite_ref-55" class="reference"><a href="#cite_note-55">[55]</a></sup></td>
<td><a href="https://en.wikipedia.org/wiki/MIT_License" title="MIT License">MIT</a></td>
</tr>
<tr>
<th style="background: #edf; color: black; vertical-align: middle; text-align: left; font-weight: bolder;" class="rh heading table-rh"><a href="https://en.wikipedia.org/wiki/Merb" title="Merb">Merb</a></th>
<td>1.1.3</td>
<td>2010-07-10</td>
<td><a href="https://en.wikipedia.org/wiki/MIT_License" title="MIT License">MIT</a></td>
</tr>
<tr>
<th style="background: #edf; color: black; vertical-align: middle; text-align: left; font-weight: bolder;" class="rh heading table-rh"><a href="https://en.wikipedia.org/wiki/PureMVC" title="PureMVC">PureMVC</a></th>
<td>2.0.4</td>
<td>2008-08-14</td>
<td><a href="https://en.wikipedia.org/wiki/Creative_Commons_license" title="Creative Commons license">CC</a> +Attribution</td>
</tr>
</table>

****************************

<table class="wikitable sortable">
<h3> Programming languages used in most popular websites </h3>
<tr>
 <br> 
<th scope="col"><a href="https://en.wikipedia.org/wiki/Websites" class="mw-redirect" title="Websites">Websites</a></th>
<th scope="col"><a href="https://en.wikipedia.org/wiki/Popularity" title="Popularity">Popularity</a><br />
(unique visitors per month)<sup id="cite_ref-ebz_dec2014_1-0" class="reference"><a href="#cite_note-ebz_dec2014-1">[1]</a></sup></th>
<th scope="col"><a href="https://en.wikipedia.org/wiki/Front_end_processor_(program)" class="mw-redirect" title="Front end processor (program)">Front-end</a><br />
(<a href="https://en.wikipedia.org/wiki/Client-side" title="Client-side">Client-side</a>)</th>
<th scope="col"><a href="https://en.wikipedia.org/wiki/Front_and_back_ends" title="Front and back ends">Back-end</a><br />
(<a href="https://en.wikipedia.org/wiki/Server-side" title="Server-side">Server-side</a>)</th>
<th scope="col"><a href="https://en.wikipedia.org/wiki/Database" title="Database">Database</a></th>
<th scope="col" class="unsortable">Notes</th>
</tr>
<tr>
<td><a href="https://en.wikipedia.org/wiki/Google.com" class="mw-redirect" title="Google.com">Google.com</a><sup id="cite_ref-2" class="reference"><a href="#cite_note-2">[2]</a></sup></td>
<td>1,600,000,000</td>
<td><a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript">JavaScript</a></td>
<td><a href="https://en.wikipedia.org/wiki/C_(programming_language)" title="C (programming language)">C</a>, <a href="/wiki/C%2B%2B" title="C++">C++</a>, <a href="https://en.wikipedia.org/wiki/Go_(programming_language)" title="Go (programming language)">Go</a>,<sup id="cite_ref-3" class="reference"><a href="#cite_note-3">[3]</a></sup> <a href="/wiki/Java_(programming_language)" title="Java (programming language)">Java</a>, <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" title="Python (programming language)">Python</a></td>
<td><a href="https://en.wikipedia.org/wiki/BigTable" class="mw-redirect" title="BigTable">BigTable</a>,<sup id="cite_ref-Big_Table_4-0" class="reference"><a href="#cite_note-Big_Table-4">[4]</a></sup> <a href="https://en.wikipedia.org/wiki/MariaDB" title="MariaDB">MariaDB</a><sup id="cite_ref-google_mdb_5-0" class="reference"><a href="#cite_note-google_mdb-5">[5]</a></sup></td>
<td>The most used search engine in the world</td>
</tr>
<tr>
<td><a href="https://en.wikipedia.org/wiki/Facebook.com" class="mw-redirect" title="Facebook.com">Facebook.com</a></td>
<td>1,100,000,000</td>
<td><a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript">JavaScript</a></td>
<td><a href="https://en.wikipedia.org/wiki/Hack_(programming_language)" title="Hack (programming language)">Hack</a>, <a href="https://en.wikipedia.org/wiki/PHP" title="PHP">PHP (HHVM)</a>, <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" title="Python (programming language)">Python</a>, <a href="https://en.wikipedia.org/wiki/C%2B%2B" title="C++">C++</a>, <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" title="Java (programming language)">Java</a>, <a href="https://en.wikipedia.org/wiki/Erlang_(programming_language)" title="Erlang (programming language)">Erlang</a>, <a href="https://en.wikipedia.org/wiki/D_(programming_language)" title="D (programming language)">D</a>,<sup id="cite_ref-6" class="reference"><a href="#cite_note-6">[6]</a></sup> <a href="https://en.wikipedia.org/wiki/Xhp" class="mw-redirect" title="Xhp">Xhp</a>,<sup id="cite_ref-7" class="reference"><a href="#cite_note-7">[7]</a></sup> <a href="https://en.wikipedia.org/wiki/Haskell_(programming_language)" title="Haskell (programming language)">Haskell</a><sup id="cite_ref-8" class="reference"><a href="#cite_note-8">[8]</a></sup></td>
<td><a href="https://en.wikipedia.org/wiki/MariaDB" title="MariaDB">MariaDB</a>, <a href="https://en.wikipedia.org/wiki/MySQL" title="MySQL">MySQL</a>,<sup id="cite_ref-9" class="reference"><a href="#cite_note-9">[9]</a></sup> <a href="https://en.wikipedia.org/wiki/Apache_HBase" title="Apache HBase">HBase</a> <a href="https://en.wikipedia.org/wiki/Apache_Cassandra" title="Apache Cassandra">Cassandra</a><sup id="cite_ref-10" class="reference"><a href="#cite_note-10">[10]</a></sup></td>
<td>The most visited social networking site</td>
</tr>
<tr>
<td><a href="https://en.wikipedia.org/wiki/YouTube.com" class="mw-redirect" title="YouTube.com">YouTube.com</a></td>
<td>1,100,000,000</td>
<td><a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript">JavaScript</a></td>
<td><a href="https://en.wikipedia.org/wiki/C_(programming_language)" title="C (programming language)">C</a>, <a href="https://en.wikipedia.org/wiki/C%2B%2B" title="C++">C++</a>, <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" title="Python (programming language)">Python</a>, <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" title="Java (programming language)">Java</a>,<sup id="cite_ref-11" class="reference"><a href="#cite_note-11">[11]</a></sup> <a href="https://en.wikipedia.org/wiki/Go_(programming_language)" title="Go (programming language)">Go</a><sup id="cite_ref-12" class="reference"><a href="#cite_note-12">[12]</a></sup></td>
<td>Vitess, BigTable, <a href="https://en.wikipedia.org/wiki/MariaDB" title="MariaDB">MariaDB</a><sup id="cite_ref-google_mdb_5-1" class="reference"><a href="#cite_note-google_mdb-5">[5]</a></sup><sup id="cite_ref-13" class="reference"><a href="#cite_note-13">[13]</a></sup></td>
<td>The most visited video sharing site</td>
</tr>
<tr>
<td><a href="https://en.wikipedia.org/wiki/Yahoo" class="mw-redirect" title="Yahoo">Yahoo</a></td>
<td>750,000,000</td>
<td><a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript">JavaScript</a></td>
<td><a href="https://en.wikipedia.org/wiki/PHP" title="PHP">PHP</a></td>
<td>MySQL, <a href="https://en.wikipedia.org/wiki/PostgreSQL" title="PostgreSQL">PostgreSQL</a>,<sup id="cite_ref-14" class="reference"><a href="#cite_note-14">[14]</a></sup> <a href="https://en.wikipedia.org/wiki/VB.NET" class="mw-redirect" title="VB.NET">VB.NET</a></td>
<td>Yahoo is presently<sup class="noprint Inline-Template" style="white-space:nowrap;">[<i><a href="https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Dates_and_numbers#Chronological_items" title="Wikipedia:Manual of Style/Dates and numbers"><span title="The time period mentioned near this tag is ambiguous. (July 2013)">when?</span></a></i>]</sup> transitioning to <a href="https://en.wikipedia.org/wiki/Node.js" title="Node.js">Node.js</a><sup id="cite_ref-Work_on_NodeJS_at_Yahoo_15-0" class="reference"><a href="#cite_note-Work_on_NodeJS_at_Yahoo-15">[15]</a></sup></td>
</tr>
<tr>
<td><a href="https://en.wikipedia.org/wiki/Amazon.com" class="mw-redirect" title="Amazon.com">Amazon.com</a></td>
<td>500,000,000</td>
<td><a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript">JavaScript</a></td>
<td><a href="https://en.wikipedia.org/wiki/Java_(programming_language)" title="Java (programming language)">Java</a>, <a href="https://en.wikipedia.org/wiki/C%2B%2B" title="C++">C++</a>, <a href="https://en.wikipedia.org/wiki/Perl" title="Perl">Perl</a><sup id="cite_ref-16" class="reference"><a href="#cite_note-16">[16]</a></sup></td>
<td><a href="https://en.wikipedia.org/wiki/Oracle_Database" title="Oracle Database">Oracle Database</a><sup id="cite_ref-17" class="reference"><a href="#cite_note-17">[17]</a></sup></td>
<td>Popular internet shopping site</td>
</tr>
<tr>
<td><a href="https://en.wikipedia.org/wiki/Wikipedia.org" class="mw-redirect" title="Wikipedia.org">Wikipedia.org</a></td>
<td>475,000,000</td>
<td><a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript">JavaScript</a></td>
<td><a href="https://en.wikipedia.org/wiki/PHP" title="PHP">PHP</a>, <a href="https://en.wikipedia.org/wiki/Hack_(programming_language)" title="Hack (programming language)">Hack</a></td>
<td>MySQL<sup class="noprint Inline-Template Template-Fact" style="white-space:nowrap;">[<i><a href="https://en.wikipedia.org/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (March 2016)">citation needed</span></a></i>]</sup>, <a href="https://en.wikipedia.org/wiki/MariaDB" title="MariaDB">MariaDB</a><sup id="cite_ref-18" class="reference"><a href="#cite_note-18">[18]</a></sup></td>
<td>"<a href="https://en.wikipedia.org/wiki/MediaWiki" title="MediaWiki">MediaWiki</a>" is programmed in <a href="https://en.wikipedia.org/wiki/PHP" title="PHP">PHP</a>, runs on <a href="https://en.wikipedia.org/wiki/HHVM" title="HHVM">HHVM</a>; free online encyclopedia</td>
</tr>
<tr>
<td><a href="https://en.wikipedia.org/wiki/Twitter.com" class="mw-redirect" title="Twitter.com">Twitter.com</a></td>
<td>290,000,000</td>
<td><a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript">JavaScript</a></td>
<td><a href="https://en.wikipedia.org/wiki/C%2B%2B" title="C++">C++</a>, <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" title="Java (programming language)">Java</a>, <a href="https://en.wikipedia.org/wiki/Scala_(programming_language)" title="Scala (programming language)">Scala</a>, <a href="https://en.wikipedia.org/wiki/Ruby_(programming_language)" title="Ruby (programming language)">Ruby</a><sup id="cite_ref-19" class="reference"><a href="#cite_note-19">[19]</a></sup></td>
<td>MySQL<sup id="cite_ref-20" class="reference"><a href="#cite_note-20">[20]</a></sup></td>
<td>280 characters social network</td>
</tr>
<tr>
<td><a href="https://en.wikipedia.org/wiki/Bing_(search_engine)" title="Bing (search engine)">Bing</a></td>
<td>285,000,000</td>
<td><a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript">JavaScript</a></td>
<td><a href="https://en.wikipedia.org/wiki/ASP.NET" title="ASP.NET">ASP.NET</a></td>
<td>Microsoft SQL Server</td>
<td></td>
</tr>
<tr>
<td><a href="https://en.wikipedia.org/wiki/EBay.com" class="mw-redirect" title="EBay.com">eBay.com</a></td>
<td>285,000,000</td>
<td><a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript">JavaScript</a></td>
<td><a href="https://en.wikipedia.org/wiki/Java_(programming_language)" title="Java (programming language)">Java</a>,<sup id="cite_ref-21" class="reference"><a href="#cite_note-21">[21]</a></sup> <a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript">JavaScript</a>,<sup id="cite_ref-22" class="reference"><a href="#cite_note-22">[22]</a></sup> <a href="https://en.wikipedia.org/wiki/Scala_(programming_language)" title="Scala (programming language)">Scala</a><sup id="cite_ref-23" class="reference"><a href="#cite_note-23">[23]</a></sup></td>
<td><a href="https://en.wikipedia.org/wiki/Oracle_Database" title="Oracle Database">Oracle Database</a></td>
<td>Online auction house</td>
</tr>
<tr>
<td><a href="https://en.wikipedia.org/wiki/MSN.com" class="mw-redirect" title="MSN.com">MSN.com</a></td>
<td>280,000,000</td>
<td><a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript">JavaScript</a></td>
<td><a href="/wiki/ASP.NET" title="ASP.NET">ASP.NET</a></td>
<td>Microsoft SQL Server</td>
<td>An email client, for simple use. Mostly known as "messenger".</td>
</tr>
<tr>
<td><a href="https://en.wikipedia.org/wiki/Microsoft" title="Microsoft">Microsoft</a></td>
<td>270,000,000</td>
<td><a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript">JavaScript</a></td>
<td><a href="https://en.wikipedia.org/wiki/ASP.NET" title="ASP.NET">ASP.NET</a></td>
<td><a href="https://en.wikipedia.org/wiki/Microsoft_SQL_Server" title="Microsoft SQL Server">Microsoft SQL Server</a></td>
<td>Software company</td>
</tr>
<tr>
<td><a href="https://en.wikipedia.org/wiki/Linkedin.com" class="mw-redirect" title="Linkedin.com">Linkedin.com</a></td>
<td>260,000,000</td>
<td><a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript">JavaScript</a></td>
<td><a href="https://en.wikipedia.org/wiki/Java_(programming_language)" title="Java (programming language)">Java</a>, <a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript">JavaScript</a>,<sup id="cite_ref-24" class="reference"><a href="#cite_note-24">[24]</a></sup> <a href="https://en.wikipedia.org/wiki/Scala_(programming_language)" title="Scala (programming language)">Scala</a></td>
<td><a href="https://en.wikipedia.org/wiki/Voldemort_(distributed_data_store)" title="Voldemort (distributed data store)">Voldemort</a><sup id="cite_ref-voldemort_li_25-0" class="reference"><a href="#cite_note-voldemort_li-25">[25]</a></sup></td>
<td>World's largest professional network</td>
</tr>
<tr>
<td><a href="https://en.wikipedia.org/wiki/Pinterest" title="Pinterest">Pinterest</a></td>
<td>250,000,000</td>
<td><a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript">JavaScript</a></td>
<td><a href="https://en.wikipedia.org/wiki/Django_(web_framework)" title="Django (web framework)">Django</a>,<sup id="cite_ref-26" class="reference"><a href="#cite_note-26">[26]</a></sup> <a href="https://en.wikipedia.org/wiki/Erlang_(programming_language)" title="Erlang (programming language)">Erlang</a></td>
<td><a href="https://en.wikipedia.org/wiki/MySQL" title="MySQL">MySQL</a>, <a href="https://en.wikipedia.org/wiki/Redis" title="Redis">Redis</a> <sup id="cite_ref-bi_pint_27-0" class="reference"><a href="#cite_note-bi_pint-27">[27]</a></sup></td>
<td></td>
</tr>
<tr>
<td><a href="https://en.wikipedia.org/wiki/Wordpress.com" class="mw-redirect" title="Wordpress.com">WordPress.com</a></td>
<td>240,000,000</td>
<td><a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript">JavaScript</a></td>
<td><a href="https://en.wikipedia.org/wiki/PHP" title="PHP">PHP</a>, <a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript">JavaScript</a> <sup id="cite_ref-28" class="reference"><a href="#cite_note-28">[28]</a></sup> (Node.js)</td>
<td><a href="https://en.wikipedia.org/wiki/MariaDB" title="MariaDB">MariaDB</a>, <a href="https://en.wikipedia.org/wiki/MySQL" title="MySQL">MySQL</a></td>
<td></td>
</tr>
</table>

**********************************


**A look into brief history of internet timelines**
------------------
<br>

![www](http://malonemediagroup.com/wp-content/uploads/2014/02/historyoftheinternet-timeline.png)

********************

**A look into brief history of social media** 
-----------------
<br>

![social](https://keymediasolutions.com/wp-content/uploads/2017/09/New-Media-Timeline.jpg)
