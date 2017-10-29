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

### History of Java Web Technology

* Servlet (version 2.1) 1998
* JSP – 1999
* JSP Tag – 2002 (first implementation from Apache)
* Struts (Current 2.3.4)--- 2002, 1.1 in 2003, 1.3.8 in 2007
* Struts 2 – 2006 (renamed from webwork 2)
* Spring MVC (Current 3.1) – 2005
* Tapestry (Current 5.3.4): 3 – 2003/2004, 4 – 2006, 5 -- 2008
* JSF 1.0 –2004, 1.2 – 2006, 2.0 – 2009, 2.1 – 2010
* GWT: 1.0 – 2006, 2.5.0 –2012

### Types of Java Web Framework

**JSF (Struts/Tapestry/Spring MVC/Wicket) Liked Web Framework**

* Servlet + JSP/XHMTL/Template + JSP Tag + XML Descriptor + Naming Convention
* HTML code based
* HTML page oriented
* HTTP request based communication
* Macro / template based view
* AJAX / GWT

**HTML structure based --- not code based (canvas) + JavaScript (pencil)**

### JSF Liked Web Framework**

Pros:

* Straightforward for experienced developer to understand the underlying technology (not for newbie to pick up)
* Full control on client (webpage) rendering and communication
* Easy to integrate with other technologies (AJAX, JQUERY)
* Industry standard (more resources)

Cons:

* High learning curve for new developer to start and maintain existing code (swing vs jsf): html, javascript, http request, session, j2ee server, xml, EL, etc
* Opposite to OO, hard to extend existing component Difficult to maintain a consistent look and feel
* The complexity is increasing quickly while number of components on the page increasing
* A lot of redundant tag/HTML code on the JSP(JSF) page. Code in the page is easy to messed up and hard to maintain (mixing JavaScript, JSP tag and html)
* Not compiler or IDE friendly
* Developer need to do the data binding by themselves

### GWT

Pros:

* Simplicity, Swing/SWT Like
* Lots of built in components (better than jsp tag)
* Strong binding between Java-JavaScript
* Solve the complexity when there is a lot of controls/interact on the page

Cons:

* Hard to control CSS classes
* Built in components are fairly basic (Solved By Smart GWT, GXT)
* Developer need to control the communication by themselves
* Biggest Problem: It is designed and developed by and for Google, not for internal application
* Main Challenges of Web Application

**Customized component Data binding**
* .Net has solved this by using ViewState
* What we are looking for from a good web framework

**Strong data binding**

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
* Marginal Benefit >>> Marginal Cost


## Java Web Frameworks Index by [zeroturnaround](https://zeroturnaround.com/webframeworksindex/)

Combined public data from StackOverflow, LinkedIn, GitHub, and Google search, to compute the popularity rank of each framework

<div class="row text-center">
      		<div class="col-12">
		  		<h3>Web Frameworks Index at a Glance</h3><br/>
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


***********************************************************
<h3><span class="mw-headline" id="Java">Java</span></span></h3>

<div role="note" class="hatnote navigation-not-searchable">See also: <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" title="Java (programming language)">Java (programming language)</a> and <a href="https://en.wikipedia.org/wiki/Java_(software_platform)" title="Java (software platform)">Java (software platform)</a></div>
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

***********************************
## Spring Framework
****************

 | HN        | Medium         | Reddit  |  Quora-QA  | Stack-Overflow-QA |  Online-Courses (pivotal) | Official docs|
| ------------- |:-------------:| -----:| -----:|-----:|-----:|-----:|
|  [spring-framework](https://hn.algolia.com/?query=spring%20framework&sort=byPopularity&prefix&page=0&dateRange=all&type=story)  | [spring-framework](https://medium.com/tag/spring-framework)  | [spring-framework](https://www.reddit.com/r/springsource/)  | [spring-framework](https://www.quora.com/topic/Spring-Framework-1)  |  [spring-framework](https://stackoverflow.com/questions/tagged/spring+spring-mvc)      |* [spring-framework](https://pivotal.io/training/learning-paths)  * [spring-framework](https://www.lynda.com/search?q=spring+framework)|[spring-framework](https://docs.spring.io/spring/docs/current/spring-framework-reference/index.html)  |


****************
![spring doc](https://github.com/gopala-kr/weekend-with-github/blob/master/Projects-Blogs/03-backend-development/springframework/spring_doc.JPG)




******************************************

<h3><span class="mw-headline" id="PHP">PHP</span></span></span></h3>
<div role="note" class="hatnote navigation-not-searchable">See also: <a href="https://en.wikipedia.org/wiki/PHP" title="PHP">PHP</a></div>
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


<h3><span class="mw-headline" id="Python">Python</span></span></h3>
<div role="note" class="hatnote navigation-not-searchable">See also: <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" title="Python (programming language)">Python (programming language)</a> and <a href="https://en.wikipedia.org/wiki/List_of_Python_software#Web_frameworks" title="List of Python software">List of Python software §&#160;Web frameworks</a></div>
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


<h3><span class="mw-headline" id="Ruby">Ruby</span></span></h3>
<div role="note" class="hatnote navigation-not-searchable">See also: <a href="https://en.wikipedia.org/wiki/Ruby_(programming_language)" title="Ruby (programming language)">Ruby (programming language)</a></div>
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
