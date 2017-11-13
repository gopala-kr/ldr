
## webservices

This is my favourite topic, I spent my past 3 years working on more than 50 different types of web-services, interfaces and API's. This is most basic and essential for any dynamic web application to work.

Web Services make up a connection technology. It is a way to connect services together into a service-oriented architecture. Primary elements of Web Services are:

* Repository
* Messaging
* Service

Of course, there is more to Web Services. The articles listed below provide an overview.

The articles listed below gives indepth details on webservices. They cover technologies that can be used in a service-oriented architecture.

> **List of [webservice articles](https://www.service-architecture.com/articles/web-services/)**

I will try to cover some brief overview as this is neccessary to complte this article.

> The term "Web Services" can be confusing. It is, unfortunately, often used in many different ways. Compounding this confusion is term "services" that has a different meaning than the term "Web Services." On this site, the term Web Services refers to the technologies that allow for making connections. Services are what you connect together using Web Services. A service is the endpoint of a connection. Also, a service has some type of underlying computer system that supports the connection offered. The combination of services—internal and external to an organization—make up a service-oriented architecture. 

A service-oriented architecture is essentially a collection of services. These services communicate with each other. The communication can involve either simple data passing or it could involve two or more services coordinating some activity. Some means of connecting services to each other is needed.

![Web services in a service-oriented architecture](https://en.wikipedia.org/wiki/Web_service#/media/File:SOA_Detailed_Diagram.png)

Service-oriented architectures are not a new thing. The first service-oriented architecture for many people in the past was with the use DCOM or Object Request Brokers (ORBs) based on the CORBA specification.

If a service-oriented architecture is to be effective, we need a clear understanding of the term service. A service is a function that is well-defined, self-contained, and does not depend on the context or state of other services.

The technology of Web Services is the most likely connection technology of service-oriented architectures. The following figure illustrates a basic service-oriented architecture. It shows a service consumer at the right sending a service request message to a service provider at the left. The service provider returns a response message to the service consumer. The request and subsequent response connections are defined in some way that is understandable to both the service consumer and service provider.

![SOA](https://www.service-architecture.com/images/web_services/service-oriented_architecture_basics.jpg)



Three specifications for Web Services are illustrated in this section: SOAP, REST, and JSON.


## SOAP

SOAP was originally part of the specification that included the Web Services Description Language (WSDL) and Universal Description, Discovery, and Integration (UDDI). It is used now without WSDL and UDDI. Instead of the discovery process described in the History of the Web Services Specification section below, SOAP messages are hard-coded or genereated without the use of a repository. The interaction is illustrated in the figure below.More on [SOAP](https://www.service-architecture.com/articles/web-services/soap.html).

![soap messages](https://www.service-architecture.com/images/web_services/soap_messages.jpg)

## Representation State Transfer (REST)

Representation State Transfer (REST) appeals to developers because it has a simpler style that makes it easier to use than SOAP. It also less verbose so that less volume is sent when communicating. The interaction is illustrated in the figure below. More on [REST](https://www.service-architecture.com/articles/web-services/representational_state_transfer_rest.html).

![REST](https://www.service-architecture.com/images/web_services/rest_messages.jpg)

## JavaScript Object Notation (JSON)

While both SOAP and REST use XML for interchange, JavaScript Object Notation (JSON) uses a subset of JavaScript. This is illustrated in the figure below. More on [JSON](https://www.service-architecture.com/articles/web-services/javascript_object_notation_json.html).

![JSON](https://www.service-architecture.com/images/web_services/json_messages.jpg)

**When to Use SOAP, REST, JSON or Other Options**

There really is no "best" option for Web Services. Generally, you will use whatever your service provider supports. If you use multiple service providers, it is easily possible that you will be using all three Web Services specifications: SOAP, REST, and JSON.

### History of the Web Services Specification

Web Services Description Language (WSDL); Universal Description and Discovery (UDDI); and SOAP formed the original Web Services specification. This section provides a history.


#### Web Services Description Language (WSDL)

The Web Services Description Language (WSDL) forms the basis for the original Web Services specification. The following figure illustrates the use of WSDL. At the left is a service provider. At the right is a service consumer. The steps involved in providing and consuming a service are:

* A service provider describes its service using WSDL. This definition is published to a repository of services. The repository could use Universal Description, Discovery, and Integration (UDDI). Other forms of directories could also be used.

* A service consumer issues one or more queries to the repository to locate a service and determine how to communicate with that service. 

* Part of the WSDL provided by the service provider is passed to the service consumer. This tells the service consumer what the requests and responses are for the service provider.

* The service consumer uses the WSDL to send a request to the service provider.

* The service provider provides the expected response to the service consumer.

Wiki gives more details on [DL's](https://github.com/gopala-kr/weekend-with-github/blob/master/Projects-Blogs/05-opensource-cms/rest-api-discription-langaues.md)


![UDDI](https://www.service-architecture.com/images/web_services/web_services_basics.jpg)

### Universal Description, Discovery, and Integration (UDDI)

The repository shown in the above figure could be a UDDI registry. The UDDI registry was intended to eventually serve as a means of "discovering" Web Services described using WSDL. The idea is that the UDDI registry can be searched in various ways to obtain contact information and the Web Services available for various organizations. How much "discovery" was ever used is open to discussion. Nevertheless, even without the discovery portion, the UDDI registry is a way to keep up-to-date on the Web Services your organization currently uses. It can be used at design time and with governance. An alternative to UDDI is the ebXML Registry. 

### SOAP

All the messages shown in the above figure are sent using SOAP. (SOAP at one time stood for Simple Object Access Protocol. Now, the letters in the acronym have no particular meaning .) SOAP essentially provides the envelope for sending the Web Services messages. SOAP generally uses HTTP , but other means of connection may be used. HTTP is the familiar connection we all use for the Internet. In fact, it is the pervasiveness of HTTP connections that will help drive the adoption of Web Services.

The next figure provides more detail on the messages sent using Web Services. At the left of the figure is a fragment of the WSDL sent to the repository. It shows a CustomerInfoRequest that requires the customer's account to object information. Also shown is the CustomerInfoResponse that provides a series of items on customer including name, phone, and address items.

![SOAP-1](https://www.service-architecture.com/images/web_services/web_services_messages.jpg)

At the right of this figure is a fragment of the WSDL being sent to the service consumer. This is the same fragment sent to the repository by the service provider. The service consumer uses this WSDL to create the service request shown above the arrow connecting the service consumer to the service provider. Upon receiving the request, the service provider returns a message using the format described in the original WSDL. That message appears at the bottom of the figure.

XML is used to define messages. XML has a tagged message format. You can see this in the SOAP and REST examples in the first section and in the figure above. In each of the examples, the tag <city> has the value of Burnsville. And </city> is the ending tag indicating the end of the value of city. Both the service provider and service consumer use these tags. In fact, the service provider could send the data shown at the bottom of this figure in any order. The service consumer uses the tags and not the order of the data to get the data values.



## Webservice frameworks

W3 defines webservice frameworks

> The XML Protocol work is the foundation for a Web Service framework within which automated, decentralized services can be defined, deployed, manipulated  and evolved in an automated fashion. The purpose of this document is to outline a  framework for evolving XML Protocol’s functions. This framework provides a structure for integration and a foundation for protocols that will support the needs of such service-oriented applications. The goal is a scalable, layered architecture, one that can appropriately meet the needs of both simple and extremely robust high-volume deployments. As with other Web technologies, the focus is on enabling ubiquitous interconnectivity of entities and organizations dispersed throughout the world.
 
> While most descriptions of Web based solutions emphasize their distributed characteristics, their decentralized nature – they have distinct management and control environments and communicate across trust domains – has much more impact on architecture of this framework and the requirements of the underlying protocols. So, we focus our framework first on supporting application-to-application integration between enterprises having disjoint management, infrastructure and trust domains. 

> more from w3  on [webservices](https://www.w3.org/2001/03/WSWS-popa/paper51)

> **A list all [avaialbel web services frameworks](https://github.com/gopala-kr/weekend-with-github/blob/master/Projects-Blogs/05-opensource-cms/list-of-webservice-frameworks.md)**



*******************

### below table gives more detailed overview on web interfaces at different layers

<table class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div id="Web_interfaces" style="font-size:114%;margin:0 4em"><a href="https://en.wikipedia.org/wiki/Web_API" title="Web API">Web interfaces</a></div>
</th>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%"><a href="https://en.wikipedia.org/wiki/Server-side" title="Server-side">Server-side</a></th>
<td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em"></div>
<table class="nowraplinks navbox-subgroup" style="border-spacing:0">
<tr>
<th scope="row" class="navbox-group" style="width:1%"><a href="https://en.wikipedia.org/wiki/Communications_protocol" title="Communications protocol">Protocols</a></th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol" title="Hypertext Transfer Protocol">HTTP</a></li>
<li><a href="https://en.wikipedia.org/wiki/Common_Gateway_Interface" title="Common Gateway Interface">CGI</a></li>
<li><a href="https://en.wikipedia.org/wiki/Simple_Common_Gateway_Interface" title="Simple Common Gateway Interface">SCGI</a></li>
<li><a href="https://en.wikipedia.org/wiki/FastCGI" title="FastCGI">FCGI</a></li>
<li><a href="https://en.wikipedia.org/wiki/Apache_JServ_Protocol" title="Apache JServ Protocol">AJP</a></li>
<li><a href="https://en.wikipedia.org/wiki/Web_Services_for_Remote_Portlets" title="Web Services for Remote Portlets">WSRP</a></li>
<li><a href="https://en.wikipedia.org/wiki/WebSocket" title="WebSocket">WebSocket</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%"><a href="https://en.wikipedia.org/wiki/Server_Application_Programming_Interface" title="Server Application Programming Interface">Server APIs</a></th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="https://en.wikipedia.org/wiki/Netscape_Server_Application_Programming_Interface" title="Netscape Server Application Programming Interface">C NSAPI</a></li>
<li><a href="https://en.wikipedia.org/wiki/Apache_HTTP_Server#Feature_overview" title="Apache HTTP Server">C ASAPI</a></li>
<li><a href="https://en.wikipedia.org/wiki/Internet_Server_Application_Programming_Interface" title="Internet Server Application Programming Interface">C ISAPI</a></li>
<li><a href="https://en.wikipedia.org/wiki/Active_Server_Pages" title="Active Server Pages">COM ASP</a></li>
<li><a href="https://en.wikipedia.org/wiki/Java_servlet" title="Java servlet">Java servlet</a>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Web_container" title="Web container">container</a></li>
</ul>
</li>
<li><a href="https://en.wikipedia.org/wiki/Open_Web_Interface_for_.NET" title="Open Web Interface for .NET">CLI OWIN</a></li>
<li><a href="https://en.wikipedia.org/wiki/HTTP_handler" title="HTTP handler">ASP.NET Handler</a></li>
<li><a href="https://en.wikipedia.org/wiki/Web_Server_Gateway_Interface" title="Web Server Gateway Interface">Python WSGI</a></li>
<li><a href="https://en.wikipedia.org/wiki/Rack_(web_server_interface)" title="Rack (web server interface)">Ruby Rack</a></li>
<li><a href="https://en.wikipedia.org/wiki/JSGI" title="JSGI">JavaScript JSGI</a></li>
<li><a href="https://en.wikipedia.org/wiki/PSGI" title="PSGI">Perl PSGI</a></li>
<li><a href="https://en.wikipedia.org/wiki/Kepler_(software)#Frameworks" title="Kepler (software)">Lua WSAPI</a></li>
<li><a href="https://en.wikipedia.org/wiki/Portlet" title="Portlet">Portlet</a>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Portlet_container" title="Portlet container">container</a></li>
</ul>
</li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%"><a href="https://en.wikipedia.org/wiki/Category:Apache_httpd_modules" title="Category:Apache httpd modules">Apache modules</a></th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="https://en.wikipedia.org/wiki/Mod_jk" title="Mod jk">mod_jk</a></li>
<li><a href="https://en.wikipedia.org/wiki/Mod_lisp" title="Mod lisp">mod_lisp</a></li>
<li><a href="https://en.wikipedia.org/wiki/Mod_mono" title="Mod mono">mod_mono</a></li>
<li><a href="https://en.wikipedia.org/wiki/Mod_parrot" title="Mod parrot">mod_parrot</a></li>
<li><a href="https://en.wikipedia.orghttps://en.wikipedia.org/wiki/Mod_perl" title="Mod perl">mod_perl</a></li>
<li><a href="https://en.wikipedia.org/wiki/PHP" title="PHP">mod_php</a></li>
<li><a href="https://en.wikipedia.org/wiki/Mod_proxy" title="Mod proxy">mod_proxy</a></li>
<li><a href="https://en.wikipedia.org/wiki/Mod_python" title="Mod python">mod_python</a></li>
<li><a href="https://en.wikipedia.org/wiki/Mod_wsgi" title="Mod wsgi">mod_wsgi</a></li>
<li><a href="https://en.wikipedia.org/wiki/Mod_ruby" title="Mod ruby">mod_ruby</a></li>
<li><a href="https://en.wikipedia.org/wiki/Phusion_Passenger" title="Phusion Passenger">Phusion Passenger</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Topics</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="https://en.wikipedia.org/wiki/Web_resource" title="Web resource">Web resource</a> vs. <a class="mw-selflink selflink">Web service</a></li>
<li><a href="https://en.wikipedia.orghttps://en.wikipedia.org/wiki/Open_API" title="Open API">Open API</a></li>
<li><a href="https://en.wikipedia.org/wiki/Webhook" title="Webhook">Webhook</a></li>
<li><a href="https://en.wikipedia.org/wiki/Application_server" title="Application server">Application server</a>
<ul>
<li><a href="https://en.wikipedia.orghttps://en.wikipedia.org/wiki/Comparison_of_application_servers" class="mw-redirect" title="Comparison of application servers">comparison</a></li>
</ul>
</li>
<li><a href="https://en.wikipedia.org/wiki/Server-side_scripting" title="Server-side scripting">Scripting</a></li>
</ul>
</div>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%"><a href="https://en.wikipedia.org/wiki/Client-side" title="Client-side">Client-side</a></th>
<td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em"></div>
<table class="nowraplinks navbox-subgroup" style="border-spacing:0">
<tr>
<th scope="row" class="navbox-group" style="width:1%"><a href="https://en.wikipedia.org/wiki/Browser_extension" title="Browser extension">Browser APIs</a></th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="https://en.wikipedia.org/wiki/NPAPI" title="NPAPI">C NPAPI</a>
<ul>
<li><a href="https://en.wikipedia.org/wiki/NPAPI#LiveConnect" title="NPAPI">LiveConnect</a></li>
<li><a href="https://en.wikipedia.org/wiki/NPAPI#XPConnect" title="NPAPI">XPConnect</a></li>
</ul>
</li>
<li><a href="https://en.wikipedia.org/wiki/NPAPI#NPRuntime" title="NPAPI">C NPRuntime</a></li>
<li><a href="https://en.wikipedia.org/wiki/Google_Native_Client#Pepper" title="Google Native Client">C PPAPI</a>
<ul>
<li><a href="https://en.wikipedia.orghttps://en.wikipedia.org/wiki/Google_Native_Client" title="Google Native Client">NaCl</a></li>
</ul>
</li>
<li><a href="https://en.wikipedia.org/wiki/ActiveX" title="ActiveX">ActiveX</a></li>
<li><a href="https://en.wikipedia.orghttps://en.wikipedia.org/wiki/Browser_Helper_Object" title="Browser Helper Object">BHO</a></li>
<li><a href="https://en.wikipedia.org/wiki/XAML_Browser_Applications" title="XAML Browser Applications">XBAP</a></li>
<li><a href="https://en.wikipedia.org/wiki/WebAssembly" title="WebAssembly">WebAssembly</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%"><a href="https://en.wikipedia.org/wiki/Web_API#Client-side" title="Web API">Web APIs</a></th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em"></div>
<table class="nowraplinks navbox-subgroup" style="border-spacing:0">
<tr>
<th scope="row" class="navbox-group" style="width:1%"><a href="https://en.wikipedia.org/wiki/World_Wide_Web_Consortium" title="World Wide Web Consortium">W3C</a></th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="https://en.wikipedia.orghttps://en.wikipedia.org/wiki/HTML5_Audio" title="HTML5 Audio">Audio</a></li>
<li><a href="https://en.wikipedia.org/wiki/Canvas_element" title="Canvas element">Canvas</a></li>
<li><a href="https://en.wikipedia.org/wiki/Cross-origin_resource_sharing" title="Cross-origin resource sharing">CORS</a></li>
<li><a href="https://en.wikipedia.org/wiki/Document_Object_Model" title="Document Object Model">DOM</a></li>
<li><a href="https://en.wikipedia.orghttps://en.wikipedia.org/wiki/DOM_events" title="DOM events">DOM events</a></li>
<li><a href="https://en.wikipedia.org/wiki/Encrypted_Media_Extensions" title="Encrypted Media Extensions">EME</a></li>
<li><a href="https://en.wikipedia.org/wiki/HTML5_File_API" title="HTML5 File API">File</a></li>
<li><a href="https://en.wikipedia.org/wiki/W3C_Geolocation_API" title="W3C Geolocation API">Geolocation</a></li>
<li><a href="https://en.wikipedia.org/wiki/Indexed_Database_API" title="Indexed Database API">IndexedDB</a></li>
<li><a href="https://en.wikipedia.org/wiki/Media_Source_Extensions" title="Media Source Extensions">MSE</a></li>
<li><a href="https://en.wikipedia.org/wiki/Server-sent_events" title="Server-sent events">SSE</a></li>
<li><a href="https://en.wikipedia.org/wiki/Scalable_Vector_Graphics" title="Scalable Vector Graphics">SVG</a></li>
<li><a href="https://en.wikipedia.org/wiki/HTML5_video" title="HTML5 video">Video</a></li>
<li><a href="https://en.wikipedia.org/wiki/WebRTC" title="WebRTC">WebRTC</a></li>
<li><a href="https://en.wikipedia.org/wiki/WebSocket" title="WebSocket">WebSocket</a></li>
<li><a href="https://en.wikipedia.org/wiki/Web_Messaging" title="Web Messaging">Web messaging</a></li>
<li><a href="https://en.wikipedia.org/wiki/Web_storage" title="Web storage">Web storage</a></li>
<li><a href="https://en.wikipedia.org/wiki/Web_worker" title="Web worker">Web worker</a></li>
<li><a href="https://en.wikipedia.org/wiki/XMLHttpRequest" title="XMLHttpRequest">XMLHttpRequest</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%"><a href="https://en.wikipedia.org/wiki/Khronos_Group" title="Khronos Group">Khronos</a></th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="https://en.wikipedia.org/wiki/WebCL" title="WebCL">WebCL</a></li>
<li><a href="https://en.wikipedia.org/wiki/WebGL" title="WebGL">WebGL</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Others</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="https://en.wikipedia.org/wiki/Gears_(software)" title="Gears (software)">Gears</a></li>
<li><a href="https://en.wikipedia.org/wiki/Web_SQL_Database" title="Web SQL Database">Web SQL Database</a> (formerly W3C)</li>
</ul>
</div>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Topics</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="https://en.wikipedia.org/wiki/Ajax_(programming)" title="Ajax (programming)">Ajax</a> vs. <a href="https://en.wikipedia.org/wiki/Dynamic_HTML" title="Dynamic HTML">DHTML</a></li>
<li><a href="https://en.wikipedia.org/wiki/Mashup_(web_application_hybrid)" title="Mashup (web application hybrid)">Mashup</a></li>
<li><a href="https://en.wikipedia.orghttps://en.wikipedia.org/wiki/Web_IDL" title="Web IDL">Web IDL</a></li>
<li><a href="https://en.wikipedia.org/wiki/Client-side_scripting" class="mw-redirect" title="Client-side scripting">Scripting</a></li>
</ul>
</div>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Topics</th>
<td class="navbox-list navbox-even hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="https://en.wikipedia.org/wiki/Dynamic_web_page" title="Dynamic web page">Dynamic web page</a></li>
<li><a href="https://en.wikipedia.org/wiki/Open_Web_Platform" title="Open Web Platform">Open Web Platform</a></li>
<li><a href="https://en.wikipedia.org/wiki/Rich_Internet_application" title="Rich Internet application">Rich Internet application</a></li>
<li><a href="https://en.wikipedia.org/wiki/Web_application" title="Web application">Web application</a></li>
</ul>
</div>
</td>
</tr>
</table>

************

