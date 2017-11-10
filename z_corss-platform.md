


## cross-platform mobile app development:


* phonegap/apache cordova

* xamarin

* unity 

* appcelerator



***************


## phonegap/apache cordova


<p><b>Apache Cordova</b> (formerly <b>PhoneGap</b>) is a <a href="https://en.wikipedia.org/wiki/Multiple_phone_web-based_application_framework" title="Multiple phone web-based application framework">mobile application development framework</a> originally created by <a href="https://en.wikipedia.org/wiki/Nitobi" class="mw-redirect" title="Nitobi">Nitobi</a>. <a href="https://en.wikipedia.org/wiki/Adobe_Systems" title="Adobe Systems">Adobe Systems</a> purchased Nitobi in 2011, rebranded it as PhoneGap, and later released an open source version of the software called Apache Cordova. Apache Cordova enables <a href="https://en.wikipedia.org/wiki/Computer_software" class="mw-redirect" title="Computer software">software</a> <a href="https://en.wikipedia.org/wiki/Programmer" title="Programmer">programmers</a> to build <a href="https://en.wikipedia.org/wiki/Application_software" title="Application software">applications</a> for mobile devices using <a href="https://en.wikipedia.org/wiki/CSS3" class="mw-redirect" title="CSS3">CSS3</a>, <a href="https://en.wikipedia.org/wiki/HTML5" title="HTML5">HTML5</a>, and <a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript">JavaScript</a> instead of relying on platform-specific <a href="https://en.wikipedia.org/wiki/API" class="mw-redirect" title="API">APIs</a> like those in <a href="https://en.wikipedia.org/wiki/Android_(operating_system)" title="Android (operating system)">Android</a>, <a href="https://en.wikipedia.org/wiki/IOS" title="IOS">iOS</a>, or <a href="https://en.wikipedia.org/wiki/Windows_Phone" title="Windows Phone">Windows Phone</a>. It enables wrapping up of CSS, HTML, and JavaScript code depending upon the platform of the device.
  It extends the features of HTML and JavaScript to work with the device. The resulting applications are hybrid, meaning that they are neither truly native mobile application (because all layout rendering is done via Web views instead of the platform's native UI framework) nor purely Web-based (because they are not just Web apps, but are packaged as apps for distribution and have access to native device APIs). 
  Mixing native and hybrid code snippets has been possible since version 1.9.</p>

<p>The software was previously called just "PhoneGap", then "Apache Callback". As <a href="https://en.wikipedia.org/wiki/Open-source_software" title="Open-source software">open-source software</a>, Apache Cordova allows wrappers around it, such as <a href="/w/index.php?title=Appery.io&amp;action=edit&amp;redlink=1" class="new" title="Appery.io (page does not exist)">Appery.io</a> or <a href="https://en.wikipedia.org/wiki/Intel_XDK" title="Intel XDK">Intel XDK</a>.</p>
<p>PhoneGap is Adobe’s <i>productised</i> version and ecosystem on top of Cordova. Like PhoneGap, many other tools and frameworks are also built on top of Cordova, including <a href="https://en.wikipedia.org/wiki/Ionic_Framework" class="mw-redirect" title="Ionic Framework">Ionic</a>, <a href="https://en.wikipedia.org/wiki/Monaca_(software)" title="Monaca (software)">Monaca</a>, <a href="/w/index.php?title=TACO&amp;action=edit&amp;redlink=1" class="new" title="TACO (page does not exist)">TACO</a>, Onsen UI, Visual Studio, GapDebug, App Builder, Cocoon, Framework7, Evothings Studio, NSB/AppStudio, Mobiscroll, the <a href="https://en.wikipedia.org/wiki/Intel_XDK" title="Intel XDK">Intel XDK</a>, These tools use Cordova, and not PhoneGap for their core tools.</p>
<p>Contributors to the Apache Cordova project include <a href="https://en.wikipedia.org/wiki/Adobe_Systems" title="Adobe Systems">Adobe</a>, <a href="https://en.wikipedia.org/wiki/BlackBerry" title="BlackBerry">BlackBerry</a>, <a href="https://en.wikipedia.org/wiki/Google" title="Google">Google</a>, <a href="https://en.wikipedia.org/wiki/IBM" title="IBM">IBM</a>, <a href="https://en.wikipedia.org/wiki/Intel" title="Intel">Intel</a>, <a href="https://en.wikipedia.org/wiki/Microsoft" title="Microsoft">Microsoft</a>, <a href="/wiki/Mozilla" title="Mozilla">Mozilla</a>, and others.</p>
<p></p>
<div id="toc" class="toc">
<div class="toctitle">

<p></p>
<h2><span class="mw-headline" id="History">History</span></span></h2>
<p>First developed at an iPhoneDevCamp event in San Francisco, PhoneGap went on to win the People's Choice Award at <a href="https://en.wikipedia.org/wiki/O%27Reilly_Media" title="O'Reilly Media">O'Reilly Media</a>'s 2009 Web 2.0 Conference, and the framework has been used to develop many apps. <a href="https://en.wikipedia.org/wiki/Apple_Inc." title="Apple Inc.">Apple Inc.</a> has confirmed that the framework has its approval, even with the new 4.0 developer license agreement changes. The PhoneGap framework is used by several mobile application platforms such as <a href="https://en.wikipedia.org/wiki/Monaca_(mobile_application_development_tool)" class="mw-redirect" title="Monaca (mobile application development tool)">Monaca</a>, <a href="/w/index.php?title=AppMobi&amp;action=edit&amp;redlink=1" class="new" title="AppMobi (page does not exist)">appMobi</a>, <a href="/w/index.php?title=Convertigo&amp;action=edit&amp;redlink=1" class="new" title="Convertigo (page does not exist)">Convertigo</a>, as the backbone of their mobile client development engine.</p>
<p>Adobe officially announced the acquisition of Nitobi Software (the original developer) on October 4, 2011. Coincident with that, the PhoneGap code was contributed to the <a href="https://en.wikipedia.org/wiki/Apache_Software_Foundation" title="Apache Software Foundation">Apache Software Foundation</a> to start a new project called Apache Cordova. The project's original name, Apache Callback, was viewed as too generic. Then, it also appears in Adobe Systems as <i>Adobe PhoneGap</i> and also as <i>Adobe Phonegap Build</i>.</p>
<p>Early versions of PhoneGap required an Apple computer to create iOS apps and a Windows computer to create Windows Mobile apps. After September 2012, Adobe's PhoneGap Build service allows programmers to upload <a href="https://en.wikipedia.org/wiki/CSS" class="mw-redirect" title="CSS">CSS</a>, <a href="https://en.wikipedia.org/wiki/HTML" title="HTML">HTML</a>, and <a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript">JavaScript</a> source code to a "<a href="https://en.wikipedia.org/wiki/Cloud_computing" title="Cloud computing">cloud</a> <a href="https://en.wikipedia.org/wiki/Compiler" title="Compiler">compiler</a>" that generates apps for every supported platform.</p>
<h2><span class="mw-headline" id="Design_and_rationale">Design and rationale</span></span></h2>
<p>The core of Apache Cordova applications use <a href="https://en.wikipedia.org/wiki/CSS3" class="mw-redirect" title="CSS3">CSS3</a> and <a href="https://en.wikipedia.org/wiki/HTML5" title="HTML5">HTML5</a> for their rendering and <a href="https://en.wikipedia.org/wiki/JavaScript" title="JavaScript">JavaScript</a> for their logic. HTML5 provides access to underlying hardware such as the accelerometer, camera, and <a href="https://en.wikipedia.org/wiki/GPS" class="mw-redirect" title="GPS">GPS</a>. However, browsers' support for HTML5-based device access is not consistent across mobile browsers, particularly older versions of Android. To overcome these limitations, Apache Cordova embeds the HTML5 code inside a native <a href="/w/index.php?title=WebView&amp;action=edit&amp;redlink=1" class="new" title="WebView (page does not exist)">WebView</a> on the device, using a <a href="https://en.wikipedia.org/wiki/Foreign_function_interface" title="Foreign function interface">foreign function interface</a> to access the native resources of it.</p>
<p>Apache Cordova can be extended with native <a rel="nofollow" class="external text" href="http://docs.phonegap.com/en/3.0.0/guide_hybrid_plugins_index.md.html#Plugin%20Development%20Guide">plug-ins</a>, allowing developers to add more functionalities that can be called from JavaScript, making it communicate directly between the native layer and the HTML5 page. These plugins allow access to the device's accelerometer, camera, compass, file system, microphone, and more.</p>
<p>However, the use of Web-based technologies leads some Apache Cordova applications to run slower than native applications with similar functionality. <a href="https://en.wikipedia.org/wiki/Adobe_Systems" title="Adobe Systems">Adobe Systems</a> warns that applications may be rejected by <a href="https://en.wikipedia.org/wiki/Apple_Inc." title="Apple Inc.">Apple</a> for being too slow or not feeling "native" enough (having appearance and functionality consistent with what users have come to expect on the platform). This can be an issue for some Apache Cordova applications.</p>
<h2><span class="mw-headline" id="Supported_platforms">Supported platforms</span></span></h2>
<p>Apache Cordova currently supports development for the <a href="https://en.wikipedia.org/wiki/Operating_system" title="Operating system">operating systems</a> Apple <a href="https://en.wikipedia.org/wiki/IOS_(Apple)" class="mw-redirect" title="IOS (Apple)">iOS</a>, <a href="/wiki/Bada_(operating_system)" class="mw-redirect" title="Bada (operating system)">Bada</a>, <a href="https://en.wikipedia.org/wiki/BlackBerry" title="BlackBerry">BlackBerry</a>, <a href="https://en.wikipedia.org/wiki/Firefox_OS" title="Firefox OS">Firefox OS</a>, Google <a href="https://en.wikipedia.org/wiki/Android_(operating_system)" title="Android (operating system)">Android</a>, LG <a href="/wiki/WebOS" title="WebOS">webOS</a>, Microsoft <a href="https://en.wikipedia.org/wiki/Windows_Phone" title="Windows Phone">Windows Phone</a> (7 and 8), Nokia <a href="https://en.wikipedia.org/wiki/Symbian" title="Symbian">Symbian</a> OS, <a href="https://en.wikipedia.org/wiki/Tizen" title="Tizen">Tizen</a> (SDK 2.x), and <a href="https://en.wikipedia.org/wiki/Ubuntu_Touch" title="Ubuntu Touch">Ubuntu Touch</a>. The table below is a list of supported features for each operating system.</p>
<table class="wikitable">
  
<tr>
<th>Feature</th>
<th><a href="https://en.wikipedia.org/wiki/Android_(operating_system)" title="Android (operating system)">Android</a></th>
<th><a href="https://en.wikipedia.org/wiki/Apple_iOS" class="mw-redirect" title="Apple iOS">Apple iPhone /iPhone 3G</a></th>
<th><a href="https://en.wikipedia.org/wiki/Apple_iOS" class="mw-redirect" title="Apple iOS">Apple iPhone 3GS and newer</a></th>
<th><a href="https://en.wikipedia.org/wiki/Bada" title="Bada">Bada</a></th>
<th><a href="https://en.wikipedia.org/wiki/BlackBerry_10" title="BlackBerry 10">BlackBerry 10 and PlayBook OS</a></th>
<th><a href="https://en.wikipedia.org/wiki/BlackBerry_OS" title="BlackBerry OS">BlackBerry OS 4.6–4.7</a></th>
<th><a href="https://en.wikipedia.org/wiki/BlackBerry_OS" title="BlackBerry OS">BlackBerry OS 5.0-6.0+</a></th>
<th><a href="https://en.wikipedia.org/wiki/Firefox_OS" title="Firefox OS">Firefox OS</a></th>
<th><a href="https://en.wikipedia.org/wiki/Symbian" title="Symbian">Symbian</a></th>
<th><a href="https://en.wikipedia.org/wiki/Tizen" title="Tizen">Tizen</a></th>
<th><a href="https://en.wikipedia.org/wiki/WebOS" title="WebOS">webOS</a></th>
<th><a href="https://en.wikipedia.org/wiki/Ubuntu_Touch" title="Ubuntu Touch">Ubuntu Touch</a></th>
<th><a href="https://en.wikipedia.org/wiki/Windows_Phone" title="Windows Phone">Windows Phone</a></th>
</tr>
<tr>
<td><a href="https://en.wikipedia.org/wiki/Accelerometer" title="Accelerometer">Accelerometer</a></td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
  
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
</tr>
<tr>
<td><a href="https://en.wikipedia.org/wiki/Camera" title="Camera">Camera</a></td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
</tr>
<tr>
<td><a href="https://en.wikipedia.org/wiki/Compass" title="Compass">Compass</a></td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
</tr>
<tr>
<td><a href="https://en.wikipedia.org/wiki/Contact_list" title="Contact list">Contacts</a></td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
</tr>
<tr>
<td>File</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
</tr>
<tr>
<td><a href="https://en.wikipedia.org/wiki/Geolocation" title="Geolocation">Geolocation</a></td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
</tr>
<tr>
<td>Media</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
</tr>
<tr>
<td>Network</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
</tr>
<tr>
<td>Notification (alert, sound, vibration)</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
</tr>
<tr>
<td>Storage</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
<td style="background:#9F9;vertical-align:middle;text-align:center;" class="table-yes">Yes</td>
</tr>
</table>

*********************************

## Xamarin

<p><b>Xamarin</b> is a Microsoft-owned <a href="https://en.wikipedia.org/wiki/San_Francisco,_California" class="mw-redirect" title="San Francisco, California">San Francisco, California</a>-based software company founded in May 2011 <a href="https://en.wikipedia.org/wiki/Mono_(software)#Xamarin.Android" title="Mono (software)">Mono for Android</a> and <a href="https://en.wikipedia.org/wiki/Mono_(software)#Xamarin.iOS" title="Mono (software)">MonoTouch</a>, which are <a href="https://en.wikipedia.org/wiki/Cross-platform" title="Cross-platform">cross-platform</a> implementations of the <a href="https://en.wikipedia.org/wiki/Common_Language_Infrastructure" title="Common Language Infrastructure">Common Language Infrastructure</a> (CLI) and Common Language Specifications (often called Microsoft .NET).</p>
<p>With a <a href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" title="C Sharp (programming language)">C#</a>-shared codebase, developers can use Xamarin tools to write <a href="https://en.wikipedia.org/wiki/Native_(computing)" title="Native (computing)">native</a> <a href="https://en.wikipedia.org/wiki/Android_(operating_system)" title="Android (operating system)">Android</a>, <a href="https://en.wikipedia.org/wiki/IOS" title="IOS">iOS</a>, and <a href="https://en.wikipedia.org/wiki/Windows" class="mw-redirect" title="Windows">Windows</a> <a href="https://en.wikipedia.org/wiki/Mobile_app" title="Mobile app">apps</a> with native <a href="https://en.wikipedia.org/wiki/User_interface" title="User interface">user interfaces</a> and share code across multiple platforms, including <a href="https://en.wikipedia.org/wiki/Windows" class="mw-redirect" title="Windows">Windows</a> and <a href="https://en.wikipedia.org/wiki/MacOS" title="MacOS">macOS</a>. According to Xamarin, over 1.4 million developers were using Xamarin's products in 120 countries around the world as of April 2017.</p>
<p>On February 24, 2016, Microsoft announced it had signed a definitive agreement to <a href="https://en.wikipedia.org/wiki/List_of_mergers_and_acquisitions_by_Microsoft" title="List of mergers and acquisitions by Microsoft">acquire</a> Xamarin.</p>
<p></p>
<div id="toc" class="toc">
<div class="toctitle">

<h2><span class="mw-headline" id="History">History</span></h2>
<h3><span class="mw-headline" id="Origins_in_Ximian_and_Mono">Origins in Ximian and Mono</span></span></h3>
<p>In 1999 <a href="https://en.wikipedia.org/wiki/Miguel_de_Icaza" title="Miguel de Icaza">Miguel de Icaza</a> and <a href="https://en.wikipedia.org/wiki/Nat_Friedman" title="Nat Friedman">Nat Friedman</a> launched what would eventually be known as <a href="/wiki/Ximian" title="Ximian">Ximian</a> to support and develop software for de Icaza's nascent <a href="https://en.wikipedia.org/wiki/GNOME" title="GNOME">GNOME</a> project. After Microsoft first announced their <a href="https://en.wikipedia.org/wiki/.NET_Framework" title=".NET Framework">.NET Framework</a> in June 2000, de Icaza began investigating whether a <a href="/wiki/Linux" title="Linux">Linux</a> version was feasible. The <a href="https://en.wikipedia.org/wiki/Mono_(software)" title="Mono (software)">Mono</a> open source project was launched on July 19, 2001. Ximian was bought by <a href="https://en.wikipedia.org/wiki/Novell" title="Novell">Novell</a> on August 4, 2003, which was then acquired by <a href="https://en.wikipedia.org/wiki/Attachmate" title="Attachmate">Attachmate</a> in April 2011.</p>
<p>After the acquisition, Attachmate announced hundreds of layoffs for the Novell workforce, including Mono developers, putting the future of Mono in question.</p>
<h3><span class="mw-headline" id="Founding_Xamarin">Founding Xamarin</span></span></h3>
<p>On May 16, 2011, Miguel de Icaza announced on his blog that Mono would be developed and supported by Xamarin, a newly formed company that planned to release a new suite of mobile products. According to de Icaza, at least part of the original Mono team had moved to the new company.</p>
<p>The name Xamarin comes from the name of the <a href="https://en.wikipedia.org/wiki/Tamarin" title="Tamarin">Tamarin</a> monkey, replacing the leading T with an X. This is in line with the naming theme used ever since Ximian was started.</p>
<p>After Xamarin was announced, the future of the project was questioned, since MonoTouch and Mono for Android would now be in direct competition with the existing commercial offerings owned by Attachmate. It was not known at that time how Xamarin would prove they had not illegally used technologies previously developed when they were employed by Novell for the same work.</p>
<p>In July 2011, however, Novell - now a subsidiary of Attachmate - and Xamarin announced that Novell had granted a perpetual license for Mono, MonoTouch and Mono for Android to Xamarin, which formally and legally took official stewardship of the project.</p>
<h3><span class="mw-headline" id="Product_development">Product development</span></span></h3>
<p>In December 2012, Xamarin released Xamarin.Mac, a plugin for the existing <a href="https://en.wikipedia.org/wiki/MonoDevelop" title="MonoDevelop">MonoDevelop</a> <a href="https://en.wikipedia.org/wiki/Integrated_development_environment" title="Integrated development environment">Integrated development environment</a> (IDE), which allows developers to build C#-based applications for the Apple <a href="https://en.wikipedia.org/wiki/OS_X" class="mw-redirect" title="OS X">OS X</a> operating system and package them for publishing via the Apple <a href="https://en.wikipedia.org/wiki/App_Store_(iOS)" title="App Store (iOS)">App Store</a>.</p>
<p>In February 2013, Xamarin announced the release of Xamarin 2.0. The release included two main components: <b>Xamarin Studio</b>, a re-branding of its open-source IDE Monodevelop; and integration with <a href="https://en.wikipedia.org/wiki/Microsoft_Visual_Studio" title="Microsoft Visual Studio">Visual Studio</a>, Microsoft's IDE for the .NET Framework, allowing Visual Studio to be used for creating applications for Android and iOS, as well as for Windows.</p>
<h3><span class="mw-headline" id="Funding">Funding</span></span></h3>
<p>On July 17, 2013 Xamarin announced that they had closed $16 million in <a href="https://en.wikipedia.org/wiki/Series_B" class="mw-redirect" title="Series B">Series B</a> funding led by Lead Edge Capital. Several investors from their <a href="https://en.wikipedia.org/wiki/Series_A" class="mw-redirect" title="Series A">Series A</a> funding also participated, including <a href="/wiki/Charles_River_Ventures" title="Charles River Ventures">Charles River Ventures</a>, <a href="https://en.wikipedia.org/wiki/Floodgate_Fund" title="Floodgate Fund">Floodgate</a>, and Ignition Partners. On August 21, 2014 Xamarin successfully closed an additional $54 million in Series C funding, which is one of the largest rounds of funding ever raised by a mobile app development platform. Total funding for the company to date is $82 million.</p>
<h3><span class="mw-headline" id="Acquisition">Acquisition</span></span></h3>
<p>On February 24, 2016 Xamarin and <a href="https://en.wikipedia.org/wiki/Microsoft" title="Microsoft">Microsoft</a> announced that Microsoft signed a definitive agreement to acquire Xamarin. Terms of the deal weren’t disclosed, though the Wall Street Journal reported the price at between $400 million and $500 million.</p>
<h3><span id="Microsoft_subsidiary_(2016-present)"></span><span class="mw-headline" id="Microsoft_subsidiary_.282016-present.29">Microsoft subsidiary (2016-present)</span></span></h3>
<p>At <a href="https://en.wikipedia.org/wiki/Build_(developer_conference)" title="Build (developer conference)">Microsoft Build</a> 2016 Microsoft announced that they will open-source the Xamarin SDK and that they will bundle it as a free tool within <a href="https://en.wikipedia.org/wiki/Microsoft_Visual_Studio" title="Microsoft Visual Studio">Microsoft Visual Studio</a>'s integrated development environment, and Visual Studio Enterprise users would also get Xamarin's enterprise features free of charge. As a part of the acquisition they would also <a href="/wiki/Software_relicensing" title="Software relicensing">relicense</a> <a href="/wiki/Mono_(software)" title="Mono (software)">Mono</a> completely under the <a href="https://en.wikipedia.org/wiki/MIT_License" title="MIT License">MIT License</a> and would release all other Xamarin SDK software through the <a href="https://en.wikipedia.org/wiki/.NET_Foundation" title=".NET Foundation">.NET Foundation</a> also under the MIT License.</p>
<h2><span class="mw-headline" id="Products">Products</span></span></h2>
<h3><span class="mw-headline" id="Xamarin_platform">Xamarin platform</span></span></h3>
<p>Xamarin 2.0 was released in February 2013 Xamarin.Android and Xamarin.iOS that make it possible to do native Android, iOS and Windows development in C#, with either Visual Studio or Xamarin Studio. Developers re-use their existing C# code, and share significant code across device platforms. The product was used to make apps for several well-known companies including <a href="https://en.wikipedia.org/wiki/3M" title="3M">3M</a>, <a href="https://en.wikipedia.org/wiki/AT%26T" title="AT&amp;T">AT&amp;T</a>, <a href="/wiki/Hewlett-Packard" title="Hewlett-Packard">HP</a>, and <a href="https://en.wikipedia.org/wiki/Target_Corporation" title="Target Corporation">Target</a>. Xamarin integrates with Visual Studio, Microsoft's IDE for the .NET Framework, extending Visual Studio for Android and iOS development. Xamarin also released a component store to integrate backend systems, 3rd party libraries, cloud services and UI controls directly into mobile apps.</p>
<h3><span class="mw-headline" id="Xamarin.Forms">Xamarin.Forms</span></span></h3>
<p>Introduced in Xamarin 3 on May 28, 2014 and allows one to use portable controls subsets that are mapped to native controls of Android, iOS and Windows Phone.</p>
<h3><span class="mw-headline" id="Xamarin_Test_Cloud">Xamarin Test Cloud</span></span></h3>
<p>Xamarin Test Cloud makes it possible to test mobile apps written in any language on real, non-jailbroken devices in the cloud. Xamarin Test Cloud uses object-based UI testing to simulate real user interactions.</p>
<h3><span class="mw-headline" id="Xamarin_for_Visual_Studio">Xamarin for Visual Studio</span></span></h3>
<p>Xamarin claims to be the only IDE that allows for native Android, iOS and Windows app development within Microsoft Visual Studio. Xamarin supplies add-ins to Microsoft Visual Studio that allows developers to build Android, iOS, and Windows apps within the IDE using <a href="https://en.wikipedia.org/wiki/Autocomplete" title="Autocomplete">code completion</a> and IntelliSense. Xamarin for Visual Studio also has extensions within Microsoft Visual Studio that provide support for the building, deploying, and debugging of apps on a simulator or a device. In late 2013, Xamarin and Microsoft announced a partnership that included further technical integration and customer programs to make it possible for their joint developer bases to build for all mobile platforms. In addition, Xamarin now includes support for Microsoft Portable Class Libraries and most C# 5.0 features such as async/await. CEO and co-founder of Xamarin, Nat Friedman, announced the alliance at the launch of Visual Studio 2013 in New York.</p>
<p>On March 31, 2016 Microsoft announced that they were merging all of Xamarin's software with every version of Microsoft Visual Studio including Visual Studio Community, and this added various Xamarin features to come pre-installed in Visual Studio such as an iOS emulator.</p>
<h3><span class="mw-headline" id="Xamarin_Studio">Xamarin Studio</span></span></h3>
<p>At the time of its release in February 2013, Xamarin Studio was a standalone IDE for mobile app development on Windows and macOS, as part of Xamarin 2.0 based on the open source project <a href="https://en.wikipedia.org/wiki/MonoDevelop" title="MonoDevelop">MonoDevelop</a>. In addition to a debugger, Xamarin Studio includes code completion in C#, an Android UI builder for creating user interfaces without XML, and integration with Xcode Interface Builder for iOS app design.</p>
<p>On Windows Xamarin Studio is now deprecated and was replaced with Xamarin for Visual Studio. On <a href="https://en.wikipedia.org/wiki/MacOS" title="MacOS">macOS</a> Xamarin Studio is still in development, but was rebranded 2016 as <a href="https://en.wikipedia.org/wiki/Visual_Studio_for_Mac" class="mw-redirect" title="Visual Studio for Mac">Visual Studio for Mac</a>.</p>
<h3><span class="mw-headline" id="Xamarin.Mac">Xamarin.Mac</span></span></h3>
<p>Xamarin.Mac was created as a tool for Apple technology application development using the C# programming language. Xamarin.Mac, as with Xamarin.iOS and Xamarin.Android, gives developers up to 90% of code reuse across Android, iOS and Windows. Xamarin.Mac gives C# developers the ability to build fully native Cocoa apps for Mac OS X and allows for native apps that can be put into the Mac App Store.</p>
<h3><span class="mw-headline" id=".Net_Mobility_Scanner">.Net Mobility Scanner</span></span></h3>
<p>Xamarin’s .Net Mobility Scanner lets developers see how much of their .NET code can run on other operating systems, specifically Android, iOS, Windows Phone, and Windows Store. It is a free Web-based service that uses Silverlight.</p>
<h3><span class="mw-headline" id="RoboVM">RoboVM</span></span></h3>
<p>In October 2015 Xamarin announced that they had acquired the <a href="https://en.wikipedia.org/wiki/Sweden" title="Sweden">Swedish</a> <b>RoboVM for Java</b> developer platform akin to its offerings, the reason stated by Xamarin for the acquisition was that if they would develop a <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" title="Java (programming language)">Java</a>-based platform from the ground up that their end product would be similar to RoboVM so they acquired the company instead, as a result RoboVM operates independently of the Xamarin team. RoboVM enables developers to build Java apps for iOS and Android with fully native UIs, native performances, and all Java apps have the complete access to the APIs of each developer platform.</p>
<p>In April 2016 Microsoft announced that they would discontinue RoboVM and cease all subscriptions after April 30, 2017.</p>
<p>BugVM, a fork of RoboVM was created to maintain the free open source status.</p>
<h2><span class="mw-headline" id="Awards">Awards</span></span></h2>
<ul>
<li>Visionary in the Gartner Magic Quadrant for Mobile Application Development Platforms
</ul>
<ul>
<li>Dr Dobbs Jolt Award: Mobile Development Tools</li>
</ul>
<h2><span class="mw-headline" id="Acquisitions">Acquisitions</span></span></h2>
<ul>
<li>In 2013, Xamarin acquired the mobile application testing platform <b>LessPainful</b>.</li>
<li>In 2015, Xamarin acquired the Java application development platform <b>RoboVM</b>.</li>
</ul>

********************************
## unity


<p><b>Unity</b> is a <a href="https://en.wikipedia.org/wiki/Cross-platform" title="Cross-platform">cross-platform</a> <a href="https://en.wikipedia.org/wiki/Game_engine" title="Game engine">game engine</a> developed by <a href="https://en.wikipedia.org/wiki/Unity_Technologies" title="Unity Technologies">Unity Technologies</a>, which is primarily used to develop <a href="/wiki/Video_game" title="Video game">video games</a> and <a href="https://en.wikipedia.org/wiki/Computer_simulation" title="Computer simulation">simulations</a> for <a href="https://en.wikipedia.org/wiki/Personal_computer" title="Personal computer">computers</a>, <a href="https://en.wikipedia.org/wiki/Video_game_console" title="Video game console">consoles</a> and <a href="https://en.wikipedia.org/wiki/Mobile_device" title="Mobile device">mobile devices</a>. First announced only for <a href="https://en.wikipedia.org/wiki/OS_X" class="mw-redirect" title="OS X">OS X</a>, at Apple's <a href="https://en.wikipedia.org/wiki/Apple_Worldwide_Developers_Conference" title="Apple Worldwide Developers Conference">Worldwide Developers Conference</a> in 2005, it has since been extended to target 27 platforms.</p>
<p>Six major versions of Unity have been released. At the 2006 <a href="https://en.wikipedia.org/wiki/Apple_Worldwide_Developers_Conference" title="Apple Worldwide Developers Conference">WWDC</a> show, Apple named Unity as the runner up for its Best Use of Mac OS X Graphics category.</p>
<p></p>
<div id="toc" class="toc">
<div class="toctitle">

<h2><span class="mw-headline" id="Overview">Overview</span></span></h2>
<p>Unity is an all purpose game engine that supports <a href="https://en.wikipedia.org/wiki/2D_computer_graphics" title="2D computer graphics">2D</a> and <a href="https://en.wikipedia.org/wiki/3D_computer_graphics" title="3D computer graphics">3D</a> graphics, drag and drop functionality and <a href="https://en.wikipedia.org/wiki/Scripting_language" title="Scripting language">scripting</a> through <a href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" title="C Sharp (programming language)">C#</a>. Two other <a href="https://en.wikipedia.org/wiki/Programming_language" title="Programming language">programming languages</a> were supported: <a href="https://en.wikipedia.org/wiki/Boo_(programming_language)" title="Boo (programming language)">Boo</a>, which was deprecated with the release of Unity 5 and UnityScript which was deprecated in August 2017 after the release of Unity 2017.1. The engine targets the following <a href="https://en.wikipedia.org/wiki/Graphics_API" class="mw-redirect" title="Graphics API">graphics APIs</a>: <a href="https://en.wikipedia.org/wiki/Direct3D" title="Direct3D">Direct3D</a> on Windows and Xbox One; <a href="https://en.wikipedia.org/wiki/OpenGL" title="OpenGL">OpenGL</a> on Linux, macOS, and Windows; <a href="https://en.wikipedia.org/wiki/OpenGL_ES" title="OpenGL ES">OpenGL ES</a> on Android and iOS; <a href="https://en.wikipedia.org/wiki/WebGL" title="WebGL">WebGL</a> on the web; and proprietary APIs on the <a href="https://en.wikipedia.org/wiki/Video_game_console" title="Video game console">video game consoles</a>. Additionally, Unity supports the low-level APIs <a href="https://en.wikipedia.org/wiki/Metal_(API)" title="Metal (API)">Metal</a> on iOS and macOS and <a href="https://en.wikipedia.org/wiki/Vulkan_(API)" title="Vulkan (API)">Vulkan</a> on Android, Linux, and Windows, as well as <a href="https://en.wikipedia.org/wiki/Direct3D_12" class="mw-redirect" title="Direct3D 12">Direct3D 12</a> on Windows and Xbox One. Within 2D games, Unity allows importation of sprites and an advanced 2D world renderer. For 3D games, Unity allows specification of <a href="https://en.wikipedia.org/wiki/Texture_compression" title="Texture compression">texture compression</a> and resolution settings for each platform that the game engine supports, and provides support for <a href="https://en.wikipedia.org/wiki/Bump_mapping" title="Bump mapping">bump mapping</a>, <a href="https://en.wikipedia.org/wiki/Reflection_mapping" title="Reflection mapping">reflection mapping</a>, <a href="https://en.wikipedia.org/wiki/Parallax_mapping" title="Parallax mapping">parallax mapping</a>, <a href="https://en.wikipedia.org/wiki/Screen_space_ambient_occlusion" title="Screen space ambient occlusion">screen space ambient occlusion</a> (SSAO), dynamic shadows using <a href="https://en.wikipedia.org/wiki/Shadow_map" class="mw-redirect" title="Shadow map">shadow maps</a>, <a href="https://en.wikipedia.org/wiki/Render_to_Texture" class="mw-redirect" title="Render to Texture">render-to-texture</a> and full-screen post-processing effects. Unity also offers services to developers, these are: Unity Ads, Unity Analytics, Unity Certification, Unity Cloud Build, Unity Everyplay, Unity IAP, Unity Multiplayer, Unity Performance Reporting and Unity Collaborate.</p>
<p>Unity is notable for its ability to target games for multiple platforms. The currently supported platforms are <a href="https://en.wikipedia.org/wiki/Android_(operating_system)" title="Android (operating system)">Android</a>, <a href="https://en.wikipedia.org/wiki/Android_TV" title="Android TV">Android TV</a>, <a href="/w/index.php?title=Facebook_Gameroom&amp;action=edit&amp;redlink=1" class="new" title="Facebook Gameroom (page does not exist)">Facebook Gameroom</a>, <a href="https://en.wikipedia.org/wiki/Fire_OS" title="Fire OS">Fire OS</a>, <a href="https://en.wikipedia.org/wiki/Gear_VR" class="mw-redirect" title="Gear VR">Gear VR</a>, <a href="https://en.wikipedia.org/wiki/Google_Cardboard" title="Google Cardboard">Google Cardboard</a>, <a href="https://en.wikipedia.org/wiki/Google_Daydream" title="Google Daydream">Google Daydream</a>, <a href="https://en.wikipedia.org/wiki/HTC_Vive" title="HTC Vive">HTC Vive</a>, <a href="https://en.wikipedia.org/wiki/IOS" title="IOS">iOS</a>, <a href="https://en.wikipedia.org/wiki/Linux" title="Linux">Linux</a>, <a href="https://en.wikipedia.org/wiki/MacOS" title="MacOS">macOS</a>, <a href="https://en.wikipedia.org/wiki/Microsoft_HoloLens" title="Microsoft HoloLens">Microsoft HoloLens</a>, <a href="https://en.wikipedia.org/wiki/Nintendo_3DS_family" title="Nintendo 3DS family">Nintendo 3DS family</a>, <a href="https://en.wikipedia.org/wiki/Nintendo_Switch" title="Nintendo Switch">Nintendo Switch</a>, <a href="https://en.wikipedia.org/wiki/Oculus_Rift" title="Oculus Rift">Oculus Rift</a>, <a href="https://en.wikipedia.org/wiki/PlayStation_4" title="PlayStation 4">PlayStation 4</a>, <a href="https://en.wikipedia.org/wiki/PlayStation_Vita" title="PlayStation Vita">PlayStation Vita</a>, <a href="https://en.wikipedia.org/wiki/PlayStation_VR" title="PlayStation VR">PlayStation VR</a>, <a href="https://en.wikipedia.org/wiki/Samsung_Smart_TV" class="mw-redirect" title="Samsung Smart TV">Samsung Smart TV</a>, <a href="https://en.wikipedia.org/wiki/Tizen" title="Tizen">Tizen</a>, <a href="https://en.wikipedia.org/wiki/TvOS" title="TvOS">tvOS</a>, <a href="https://en.wikipedia.org/wiki/WebGL" title="WebGL">WebGL</a>, <a href="https://en.wikipedia.org/wiki/Wii_U" title="Wii U">Wii U</a>, <a href="https://en.wikipedia.org/wiki/Microsoft_Windows" title="Microsoft Windows">Windows</a>, <a href="https://en.wikipedia.org/wiki/Windows_Phone" title="Windows Phone">Windows Phone</a>, <a href="https://en.wikipedia.org/wiki/Windows_Store" class="mw-redirect" title="Windows Store">Windows Store</a>, and <a href="https://en.wikipedia.org/wiki/Xbox_One" title="Xbox One">Xbox One</a>. Unity formerly supported 7 other platforms including its own Unity Web Player. Unity Web Player was a browser plugin that was supported in Windows and OS X only,</p>
<p>Unity is the default <a href="https://en.wikipedia.org/wiki/Software_development_kit" title="Software development kit">software development kit</a> (SDK) for Nintendo's <a href="https://en.wikipedia.org/wiki/Wii_U" title="Wii U">Wii U</a> <a href="https://en.wikipedia.org/wiki/Video_game_console" title="Video game console">video game console</a> platform, with a free copy included by Nintendo with each Wii U developer license. Unity Technologies calls this bundling of a third-party SDK an "industry first".</p>

<h2><span class="mw-headline" id="Marketing"><span id="Unity-chan"></span> Marketing</span></span></h2>
<p>On December 16, 2013, Unity Technologies Japan revealed new screenshots for an official mascot character named Unity-chan <span style="font-weight: normal">(<span lang="ja">ユニティちゃん</span><span style="display:none">,</span> <i>Yuniti-chan</i>)</span>, real name Kohaku Ōtori <span style="font-weight: normal">(<span lang="ja">大鳥 こはく</span><span style="display:none">,</span> <i>Ōtori Kohaku</i>)</span> (voiced by <a href="https://ja.wikipedia.org/wiki/%E8%A7%92%E5%85%83%E6%98%8E%E6%97%A5%E9%A6%99" class="extiw" title="ja:角元明日香">Asuka Kakumoto</a>), with exhibit of the character in Comic Market 85 event in the Tokyo Big Sight between December 29 to the 31st, where themed goods would be distributed and her voice actress would be present at the event. The character's associated game data were to be released in spring 2014. The character was designed by Unity Technologies Japan designer "ntny" as an open-source heroine character. The company allows the use of Unity-chan and related characters in secondary projects under certain licenses. For example, Unity-chan appears as a playable character in <i><a href="https://en.wikipedia.org/wiki/Runbow" title="Runbow">Runbow</a></i>. The popularity of the character also led to her appearance in <a href="https://en.wikipedia.org/wiki/Vocaloid" title="Vocaloid">VOCALOID</a> adaptions, including her own sound library for <a href="https://en.wikipedia.org/wiki/Vocaloid_4" title="Vocaloid 4">VOCALOID4</a> and a special adaption of VOCALOID designed to work with the Unity Engine 5.0 version called <a href="https://en.wikipedia.org/wiki/Unity_with_Vocaloid" class="mw-redirect" title="Unity with Vocaloid">Unity with VOCALOID</a>.</p>

*************************************
## appcelerator

<p><b>Appcelerator</b> is a <a href="/wiki/Privately_held_company" title="Privately held company">privately held</a> <a href="/wiki/Mobile_technology" title="Mobile technology">mobile technology</a> <a href="/wiki/Company" title="Company">company</a> based in <a href="/wiki/San_Jose,_California" title="San Jose, California">San Jose, California</a>. Its main products are <a href="/wiki/Appcelerator_Titanium" title="Appcelerator Titanium">Titanium</a>, an <a href="/wiki/Open-source_software" title="Open-source software">open-source</a> <a href="/wiki/Software_development_kit" title="Software development kit">software development kit</a> for <a href="/wiki/Cross-platform" title="Cross-platform">cross-platform</a> <a href="/wiki/Mobile_development" class="mw-redirect" title="Mobile development">mobile development</a>, and the Appcelerator Platform, software that provides cross-platform native mobile app development using <a href="/wiki/JavaScript" title="JavaScript">JavaScript</a>, <a href="/wiki/Mobile_backend_as_a_service" title="Mobile backend as a service">mobile backend as a service</a> (MBaaS), mobile test automation, crash detection and performance management, and mobile analytics.</p>
<p>Founded in 2006, Appcelerator serves industries including: retail, financial services, healthcare and government.<sup id="cite_ref-American_City_Business_Journals_1-0" class="reference"><a href="#cite_note-American_City_Business_Journals-1">[1]</a></sup><sup id="cite_ref-The_Washington_Post_2-0" class="reference"><a href="#cite_note-The_Washington_Post-2">[2]</a></sup><sup id="cite_ref-3" class="reference"><a href="#cite_note-3">[3]</a></sup> As of 2014, it raised more than $90 million in <a href="/wiki/Venture_capital_financing" title="Venture capital financing">venture capital financing</a>.<sup id="cite_ref-American_City_Business_Journals_1-1" class="reference"><a href="#cite_note-American_City_Business_Journals-1">[1]</a></sup></p>
<p></p>
<div id="toc" class="toc">
<div class="toctitle">
<h2>Contents</h2>
</div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#History"><span class="tocnumber">1</span> <span class="toctext">History</span></a></li>
<li class="toclevel-1 tocsection-2"><a href="#Products"><span class="tocnumber">2</span> <span class="toctext">Products</span></a></li>
<li class="toclevel-1 tocsection-3"><a href="#Customers"><span class="tocnumber">3</span> <span class="toctext">Customers</span></a></li>
<li class="toclevel-1 tocsection-4"><a href="#Funding"><span class="tocnumber">4</span> <span class="toctext">Funding</span></a></li>
<li class="toclevel-1 tocsection-5"><a href="#Marketing_awards"><span class="tocnumber">5</span> <span class="toctext">Marketing awards</span></a></li>
<li class="toclevel-1 tocsection-6"><a href="#See_also"><span class="tocnumber">6</span> <span class="toctext">See also</span></a></li>
<li class="toclevel-1 tocsection-7"><a href="#References"><span class="tocnumber">7</span> <span class="toctext">References</span></a></li>
<li class="toclevel-1 tocsection-8"><a href="#Bibliography"><span class="tocnumber">8</span> <span class="toctext">Bibliography</span></a></li>
<li class="toclevel-1 tocsection-9"><a href="#External_links"><span class="tocnumber">9</span> <span class="toctext">External links</span></a></li>
</ul>
</div>
<p></p>
<h2><span class="mw-headline" id="History">History</span></span></h2>
<p>Jeff Haynie and Nolan Wright met at <a href="/w/index.php?title=Vocalocity&amp;action=edit&amp;redlink=1" class="new" title="Vocalocity (page does not exist)">Vocalocity</a>, an <a href="/wiki/Atlanta" title="Atlanta">Atlanta</a>-based <a href="/wiki/Voice_over_IP" title="Voice over IP">voice over IP</a> company that Haynie had co-founded. After Haynie sold Vocalocity in 2006, the pair founded <a href="/wiki/Web_2.0" title="Web 2.0">Web 2.0</a> application development company Hakano.</p>
<p>In 2007, Hakano, renamed Appcelerator, began creating an <a href="/wiki/Open_source" class="mw-redirect" title="Open source">open source</a> platform for developing <a href="/wiki/Rich_Internet_applications" class="mw-redirect" title="Rich Internet applications">rich Internet applications</a> (RIAs). <a href="/wiki/Marc_Fleury" title="Marc Fleury">Marc Fleury</a>, founder of <a href="/wiki/JBoss" class="mw-redirect" title="JBoss">JBoss</a>, joined the company as an advisor.</p>
<p>In 2008, Appcelerator relocated to <a href="/wiki/Mountain_View,_California" title="Mountain View, California">Mountain View, California</a> and later released a preview of its <a href="/wiki/Appcelerator_Titanium" title="Appcelerator Titanium">Appcelerator Titanium</a> product, which drew comment as a possible open source competitor to <a href="/wiki/Adobe_AIR" title="Adobe AIR">Adobe AIR</a>.</p>
<p>Appcelerator began to focus on <a href="/wiki/Mobile_apps" class="mw-redirect" title="Mobile apps">mobile apps</a> in 2009. In June, it released a <a href="/wiki/Public_beta" class="mw-redirect" title="Public beta">public beta</a> of Titanium, which added support for <a href="/wiki/Android_(operating_system)" title="Android (operating system)">Android</a> and <a href="/wiki/IOS" title="IOS">iOS</a> app development to its existing web and desktop application features.</p>
<p>Appcelerator increased its employee count five-fold between October 2010 and 2011. The company’s 2011 revenue totaled $3.4 million, a 374 percent increase from 2008.</p>
<p>Between 2011 and 2013, Appcelerator announced acquisitions, including:</p>
<ul>
<li><a href="/wiki/Aptana" title="Aptana">Aptana</a>, <a href="/wiki/Integrated_development_environment" title="Integrated development environment">integrated development environment</a> (IDE) company</li>
<li>Particle Code, <a href="/wiki/HTML5" title="HTML5">HTML5</a> mobile gaming development platform</li>
<li>Cocoafish, <a href="/wiki/Backend_as_a_service" class="mw-redirect" title="Backend as a service">backend as a service</a></li>
<li>Nodeable, <a href="/wiki/Big_data" title="Big data">big data</a> analytics company</li>
<li>Singly, <a href="/wiki/API" class="mw-redirect" title="API">API</a> management company in August, 2013.</li>
</ul>
<p>Appcelerator moved to its San Jose headquarters in 2015.</p>
<p>In January 2016, Appcelerator was acquired by Axway, a company that helps enterprises handle data flows.</p>
<h2><span class="mw-headline" id="Products">Products</span></span></h2>
<p><b>Appcelerator Platform</b></p>
<ul>
<li><b>Appcelerator 5.2.1.GA</b> is the latest version of the Appcelerator Platform. It includes numerous new features including support for iOS 9.1 Live Photos, Menu Popup, Apple Pencil, Storyboard Launch Files for iPad Pro, Split View and Slide Over, Swift WatchOS 2 template and Android View Transitions.</li>
<li><b>Appcelerator Dashboard</b> offers real-time analytics of the lifecycle and success of apps built on the Appcelerator Platform or directly via native <a href="/wiki/Software_development_kit" title="Software development kit">SDK</a>.</li>
<li><b>Appcelerator Studio</b> is an open extensible development environment for building, testing and publishing native apps across mobile devices and OSs including <a href="/wiki/IOS" title="IOS">iOS</a>, <a href="/wiki/Android_(operating_system)" title="Android (operating system)">Android</a> and <a href="/wiki/BlackBerry" title="BlackBerry">BlackBerry</a> as well as hybrid and <a href="/wiki/HTML5" title="HTML5">HTML5</a>.</li>
<li><b>Appcelerator Arrow</b> is an opinionated framework for rapidly building APIs with a scalable cloud service for running them. It allows developers to connect, model transform and optimize data for both native or web app clients. Arrow is the backbone of the Appcelerator Platform <a href="/wiki/MBaaS" class="mw-redirect" title="MBaaS">MBaaS</a>.</li>
<li><b>Appcelerator Insights</b> is a native tablet app and extension of the Appcelerator Platform providing mobile-specific metrics like acquisition, engagement, retention and crash data. When Appcelerator announced Insights, it drew comment as a possible competitor to Google Mobile App Analytics and <a href="/wiki/Flurry_(company)" title="Flurry (company)">Flurry</a>.</li>
<li><b>Apple Watch SDK</b> allows developers to embed Share Extensions and WatchKit Extensions in Titanium apps.</li>
<li><b>AppU</b> is a curated collection of videos and tutorials, covering cross-platform concepts, examples and code walkthroughs. Instruction topics include analytics, app development, Arrow, customer stories, events and mobile testing./li>
</ul>
<p><b>Titanium</b></p>
<p><a href="/wiki/Appcelerator_Titanium" title="Appcelerator Titanium">Appcelerator Titanium</a> is an <a href="/wiki/Open_source" class="mw-redirect" title="Open source">open source</a> framework that allows the creation of native, hybrid, or mobile web apps across platforms including <a href="/wiki/IOS" title="IOS">iOS</a>, <a href="/wiki/Android_(operating_system)" title="Android (operating system)">Android</a>, <a href="/wiki/Windows_Phone" title="Windows Phone">Windows Phone</a>, <a href="/wiki/BlackBerry_OS" title="BlackBerry OS">BlackBerry OS</a>, and <a href="/wiki/Tizen" title="Tizen">Tizen</a> from a single JavaScript codebase.As of August in the same year, Titanium had amassed nearly 500,000 developer registrations.</p>
<p><b>Alloy</b></p>
<p>Alloy is an <a href="/wiki/Apache" title="Apache">Apache</a>-licensed <a href="/wiki/Model%E2%80%93view%E2%80%93controller" title="Model–view–controller">model–view–controller</a> app framework built on top of Titanium that provides a simple model for separating the app user interface, business logic and data models.</p>
<p>Apps built with Appcelerator products are written in <a href="/wiki/JavaScript" title="JavaScript">JavaScript</a>. Though initially developed as a Web language, JavaScript is increasingly popular for mobility due to its ability to meet the speed, scale and user experience requirements that mobile development demands.<According to <a href="/wiki/Forrester_Research" title="Forrester Research">Forrester Research</a>, JavaScript adoption is setting the stage for the “biggest shift in enterprise application development” in more than a decade.</p>
<h2><span class="mw-headline" id="Customers">Customers</span></span></h2>
<p>Users of Appcelerator include <a href="/wiki/Family_Dollar" title="Family Dollar">Family Dollar</a>, <a href="/wiki/Homes.com" title="Homes.com">Homes.com</a>, Safeguard Properties, <a href="/wiki/National_Military_Family_Association" title="National Military Family Association">National Military Family Association</a>, <a href="/wiki/First_Utility" title="First Utility">First Utility</a>, <a href="/wiki/CACI_International" class="mw-redirect" title="CACI International">CACI International</a>, <a href="/wiki/Farmers_Insurance_Group" title="Farmers Insurance Group">Farmers Insurance Group</a>, Avis and <a href="/wiki/Zipcar" title="Zipcar">Zipcar</a>.</p>
<h2><span class="mw-headline" id="Funding">Funding</span></span></h2>
<p>In December 2008, Appcelerator closed a $4.1 million first venture round led by Storm Ventures and <a href="/wiki/Larry_Augustin" title="Larry Augustin">Larry Augustin</a>. Later, in October 2010, the company announced a partnership with <a href="/wiki/PayPal" title="PayPal">PayPal</a> and that it has raised $9 million in Series B funding from investors including Sierra Ventures and <a href="/wiki/EBay" title="EBay">eBay</a>.</p>
<p>Appcelerator raised $15 million in Series C funding led by <a href="/wiki/Mayfield_Fund" title="Mayfield Fund">Mayfield Fund</a>, <a href="/wiki/Red_Hat" title="Red Hat">Red Hat</a>, and Translink Capital in November 2011, and a further $12.1 million in a round led by EDBI, the venture fund of the Singaporean government's Economic Development Board, in July 2013.</p>
<p>On August 25, 2014, Appcelerator announced $22 million in Series D funding led by Rembrandt Venture Partners. Union Grove Venture Partners also participated, along with earlier backers, including Storm Ventures, Sierra Ventures, Mayfield Fund, TransLink Capital, Relay Ventures and EDB Investments. Total funding for the mobile engagement platform to date is more than $90 million.</p>


