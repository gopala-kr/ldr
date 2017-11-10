


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

<!DOCTYPE html>
<html class="client-nojs" lang="en" dir="ltr">
<head>
<meta charset="UTF-8"/>
<title>Xamarin - Wikipedia</title>
<script>document.documentElement.className = document.documentElement.className.replace( /(^|\s)client-nojs(\s|$)/, "$1client-js$2" );</script>
<script>(window.RLQ=window.RLQ||[]).push(function(){mw.config.set({"wgCanonicalNamespace":"","wgCanonicalSpecialPageName":false,"wgNamespaceNumber":0,"wgPageName":"Xamarin","wgTitle":"Xamarin","wgCurRevisionId":809035157,"wgRevisionId":809035157,"wgArticleId":31800387,"wgIsArticle":true,"wgIsRedirect":false,"wgAction":"view","wgUserName":null,"wgUserGroups":["*"],"wgCategories":["All articles with dead external links","Articles with dead external links from November 2017","Articles with permanently dead external links","Webarchive template wayback links","Use mdy dates from October 2012","Companies established in 2011","Microsoft acquisitions","Microsoft subsidiaries","Microsoft websites","Mobile software programming tools"],"wgBreakFrames":false,"wgPageContentLanguage":"en","wgPageContentModel":"wikitext","wgSeparatorTransformTable":["",""],"wgDigitTransformTable":["",""],"wgDefaultDateFormat":"dmy","wgMonthNames":["","January","February","March","April","May","June","July","August","September","October","November","December"],"wgMonthNamesShort":["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"wgRelevantPageName":"Xamarin","wgRelevantArticleId":31800387,"wgRequestId":"WgORKgpAADoAAE9wv64AAAAU","wgIsProbablyEditable":true,"wgRelevantPageIsProbablyEditable":true,"wgRestrictionEdit":[],"wgRestrictionMove":[],"wgFlaggedRevsParams":{"tags":{}},"wgStableRevisionId":null,"wgWikiEditorEnabledModules":{"toolbar":true,"preview":false,"publish":false},"wgBetaFeaturesFeatures":[],"wgMediaViewerOnClick":true,"wgMediaViewerEnabledByDefault":true,"wgPopupsShouldSendModuleToUser":true,"wgPopupsConflictsWithNavPopupGadget":false,"wgVisualEditor":{"pageLanguageCode":"en","pageLanguageDir":"ltr","pageVariantFallbacks":"en","usePageImages":true,"usePageDescriptions":true},"wgPreferredVariant":"en","wgMFExpandAllSectionsUserOption":false,"wgMFDisplayWikibaseDescriptions":{"search":true,"nearby":true,"watchlist":true,"tagline":false},"wgRelatedArticles":null,"wgRelatedArticlesUseCirrusSearch":true,"wgRelatedArticlesOnlyUseCirrusSearch":false,"wgULSCurrentAutonym":"English","wgNoticeProject":"wikipedia","wgCentralNoticeCookiesToDelete":[],"wgCentralNoticeCategoriesUsingLegacy":["Fundraising","fundraising"],"wgCategoryTreePageCategoryOptions":"{\"mode\":0,\"hideprefix\":20,\"showcount\":true,\"namespaces\":false}","wgWikibaseItemId":"Q3073996","wgCentralAuthMobileDomain":false,"wgCodeMirrorEnabled":false,"wgVisualEditorToolbarScrollOffset":0,"wgVisualEditorUnsupportedEditParams":["undo","undoafter","veswitched"],"wgEditSubmitButtonLabelPublish":false});mw.loader.state({"ext.gadget.charinsert-styles":"ready","ext.globalCssJs.user.styles":"ready","ext.globalCssJs.site.styles":"ready","site.styles":"ready","noscript":"ready","user.styles":"ready","user":"ready","user.options":"ready","user.tokens":"loading","ext.cite.styles":"ready","wikibase.client.init":"ready","ext.visualEditor.desktopArticleTarget.noscript":"ready","ext.uls.interlanguage":"ready","ext.wikimediaBadges":"ready","skins.vector.styles.experimental.print":"ready","mediawiki.legacy.shared":"ready","mediawiki.legacy.commonPrint":"ready","mediawiki.sectionAnchor":"ready","mediawiki.skinning.interface":"ready","skins.vector.styles":"ready","ext.globalCssJs.user":"ready","ext.globalCssJs.site":"ready"});mw.loader.implement("user.tokens@1dqfd7l",function ( $, jQuery, require, module ) {
mw.user.tokens.set({"editToken":"+\\","patrolToken":"+\\","watchToken":"+\\","csrfToken":"+\\"});/*@nomin*/

});mw.loader.load(["ext.cite.a11y","site","mediawiki.page.startup","mediawiki.user","mediawiki.hidpi","mediawiki.page.ready","mediawiki.toc","mediawiki.searchSuggest","ext.gadget.teahouse","ext.gadget.ReferenceTooltips","ext.gadget.watchlist-notice","ext.gadget.DRN-wizard","ext.gadget.charinsert","ext.gadget.refToolbar","ext.gadget.extra-toolbar-buttons","ext.gadget.switcher","ext.centralauth.centralautologin","mmv.head","mmv.bootstrap.autostart","ext.popups","ext.visualEditor.desktopArticleTarget.init","ext.visualEditor.targetLoader","ext.eventLogging.subscriber","ext.wikimediaEvents","ext.navigationTiming","ext.uls.eventlogger","ext.uls.init","ext.uls.interface","ext.centralNotice.geoIP","ext.centralNotice.startUp","skins.vector.js"]);});</script>
<link rel="stylesheet" href="/w/load.php?debug=false&amp;lang=en&amp;modules=ext.cite.styles%7Cext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cmediawiki.legacy.commonPrint%2Cshared%7Cmediawiki.sectionAnchor%7Cmediawiki.skinning.interface%7Cskins.vector.styles%7Cskins.vector.styles.experimental.print%7Cwikibase.client.init&amp;only=styles&amp;skin=vector"/>
<script async="" src="/w/load.php?debug=false&amp;lang=en&amp;modules=startup&amp;only=scripts&amp;skin=vector"></script>
<meta name="ResourceLoaderDynamicStyles" content=""/>
<link rel="stylesheet" href="/w/load.php?debug=false&amp;lang=en&amp;modules=ext.gadget.charinsert-styles&amp;only=styles&amp;skin=vector"/>
<link rel="stylesheet" href="/w/load.php?debug=false&amp;lang=en&amp;modules=site.styles&amp;only=styles&amp;skin=vector"/>
<meta name="generator" content="MediaWiki 1.31.0-wmf.6"/>
<meta name="referrer" content="origin-when-cross-origin"/>
<meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Xamarin-logo.svg/1200px-Xamarin-logo.svg.png"/>
<link rel="alternate" href="android-app://org.wikipedia/http/en.m.wikipedia.org/wiki/Xamarin"/>
<link rel="alternate" type="application/x-wiki" title="Edit this page" href="/w/index.php?title=Xamarin&amp;action=edit"/>
<link rel="edit" title="Edit this page" href="/w/index.php?title=Xamarin&amp;action=edit"/>
<link rel="apple-touch-icon" href="/static/apple-touch/wikipedia.png"/>
<link rel="shortcut icon" href="/static/favicon/wikipedia.ico"/>
<link rel="search" type="application/opensearchdescription+xml" href="/w/opensearch_desc.php" title="Wikipedia (en)"/>
<link rel="EditURI" type="application/rsd+xml" href="//en.wikipedia.org/w/api.php?action=rsd"/>
<link rel="license" href="//creativecommons.org/licenses/by-sa/3.0/"/>
<link rel="canonical" href="https://en.wikipedia.org/wiki/Xamarin"/>
<link rel="dns-prefetch" href="//login.wikimedia.org"/>
<link rel="dns-prefetch" href="//meta.wikimedia.org" />
<!--[if lt IE 9]><script src="/w/load.php?debug=false&amp;lang=en&amp;modules=html5shiv&amp;only=scripts&amp;skin=vector&amp;sync=1"></script><![endif]-->
</head>
<body class="mediawiki ltr sitedir-ltr mw-hide-empty-elt ns-0 ns-subject page-Xamarin rootpage-Xamarin vector-experimental-print-styles vector-nav-directionality skin-vector action-view">		<div id="mw-page-base" class="noprint"></div>
		<div id="mw-head-base" class="noprint"></div>
		<div id="content" class="mw-body" role="main">
			<a id="top"></a>

							<div id="siteNotice" class="mw-body-content"><!-- CentralNotice --></div>
						<div class="mw-indicators mw-body-content">
</div>
			<h1 id="firstHeading" class="firstHeading" lang="en">Xamarin</h1>
									<div id="bodyContent" class="mw-body-content">
									<div id="siteSub" class="noprint">From Wikipedia, the free encyclopedia</div>
								<div id="contentSub"></div>
												<div id="jump-to-nav" class="mw-jump">
					Jump to:					<a href="#mw-head">navigation</a>, 					<a href="#p-search">search</a>
				</div>
				<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><div class="mw-parser-output"><table class="infobox vcard" style="width:22em">
<caption class="fn org">Xamarin Inc.</caption>
<tr>
<td colspan="2" class="logo" style="text-align:center"><a href="/wiki/File:Xamarin-logo.svg" class="image"><img alt="Xamarin-logo.svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Xamarin-logo.svg/220px-Xamarin-logo.svg.png" width="220" height="92" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Xamarin-logo.svg/330px-Xamarin-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Xamarin-logo.svg/440px-Xamarin-logo.svg.png 2x" data-file-width="484" data-file-height="203" /></a></td>
</tr>
<tr>
<th scope="row" style="padding-right:0.5em;">
<div style="padding:0.1em 0;line-height:1.2em;"><a href="/wiki/List_of_business_entities" title="List of business entities">Type</a></div>
</th>
<td class="category" style="line-height:1.35em;"><a href="/wiki/Subsidiary" title="Subsidiary">Subsidiary</a> of <a href="/wiki/Microsoft" title="Microsoft">Microsoft</a></td>
</tr>
<tr>
<th scope="row" style="padding-right:0.5em;">Industry</th>
<td class="category" style="line-height:1.35em;"><a href="/wiki/Software_industry" title="Software industry">Software industry</a></td>
</tr>
<tr>
<th scope="row" style="padding-right:0.5em;">Founded</th>
<td style="line-height:1.35em;">May&#160;16, 2011<span class="noprint">; 6 years ago</span><span style="display:none">&#160;(<span class="bday dtstart published updated">2011-05-16</span>)</span><sup id="cite_ref-1" class="reference"><a href="#cite_note-1">[1]</a></sup></td>
</tr>
<tr>
<th scope="row" style="padding-right:0.5em;">Headquarters</th>
<td class="label" style="line-height:1.35em;"><a href="/wiki/San_Francisco,_California" class="mw-redirect" title="San Francisco, California">San Francisco, California</a></td>
</tr>
<tr>
<th scope="row" style="padding-right:0.5em;">
<div style="padding:0.1em 0;line-height:1.2em;">Key people</div>
</th>
<td class="agent" style="line-height:1.35em;"><a href="/wiki/Miguel_de_Icaza" title="Miguel de Icaza">Miguel de Icaza</a>, <a href="/wiki/Nat_Friedman" title="Nat Friedman">Nat Friedman</a></td>
</tr>
<tr>
<th scope="row" style="padding-right:0.5em;">Owner</th>
<td style="line-height:1.35em;"><a href="/wiki/Microsoft" title="Microsoft">Microsoft</a> (2016-present)</td>
</tr>
<tr>
<th scope="row" style="padding-right:0.5em;">Website</th>
<td style="line-height:1.35em;"><span class="url"><a rel="nofollow" class="external text" href="http://www.xamarin.com/">www<wbr />.xamarin<wbr />.com</a></span></td>
</tr>
<tr>
<td colspan="2" style="text-align:center;line-height:1.35em;"><b>Footnotes&#160;/ references</b><br />
<sup id="cite_ref-2" class="reference"><a href="#cite_note-2">[2]</a></sup><sup id="cite_ref-InformationWeek1_3-0" class="reference"><a href="#cite_note-InformationWeek1-3">[3]</a></sup></td>
</tr>
</table>
<p><b>Xamarin</b> is a Microsoft-owned <a href="/wiki/San_Francisco,_California" class="mw-redirect" title="San Francisco, California">San Francisco, California</a>-based software company founded in May 2011<sup id="cite_ref-InformationWeek1_3-1" class="reference"><a href="#cite_note-InformationWeek1-3">[3]</a></sup> by the engineers that created <a href="/wiki/Mono_(software)" title="Mono (software)">Mono</a>,<sup id="cite_ref-4" class="reference"><a href="#cite_note-4">[4]</a></sup> <a href="/wiki/Mono_(software)#Xamarin.Android" title="Mono (software)">Mono for Android</a> and <a href="/wiki/Mono_(software)#Xamarin.iOS" title="Mono (software)">MonoTouch</a>, which are <a href="/wiki/Cross-platform" title="Cross-platform">cross-platform</a> implementations of the <a href="/wiki/Common_Language_Infrastructure" title="Common Language Infrastructure">Common Language Infrastructure</a> (CLI) and Common Language Specifications (often called Microsoft .NET).</p>
<p>With a <a href="/wiki/C_Sharp_(programming_language)" title="C Sharp (programming language)">C#</a>-shared codebase, developers can use Xamarin tools to write <a href="/wiki/Native_(computing)" title="Native (computing)">native</a> <a href="/wiki/Android_(operating_system)" title="Android (operating system)">Android</a>, <a href="/wiki/IOS" title="IOS">iOS</a>, and <a href="/wiki/Windows" class="mw-redirect" title="Windows">Windows</a> <a href="/wiki/Mobile_app" title="Mobile app">apps</a> with native <a href="/wiki/User_interface" title="User interface">user interfaces</a> and share code across multiple platforms, including <a href="/wiki/Windows" class="mw-redirect" title="Windows">Windows</a> and <a href="/wiki/MacOS" title="MacOS">macOS</a>.<sup id="cite_ref-5" class="reference"><a href="#cite_note-5">[5]</a></sup> According to Xamarin, over 1.4 million developers were using Xamarin's products in 120 countries around the world as of April 2017.<sup id="cite_ref-XamarinAbout_6-0" class="reference"><a href="#cite_note-XamarinAbout-6">[6]</a></sup></p>
<p>On February 24, 2016, Microsoft announced it had signed a definitive agreement to <a href="/wiki/List_of_mergers_and_acquisitions_by_Microsoft" title="List of mergers and acquisitions by Microsoft">acquire</a> Xamarin.<sup id="cite_ref-blogs.microsoft.com_7-0" class="reference"><a href="#cite_note-blogs.microsoft.com-7">[7]</a></sup></p>
<p></p>
<div id="toc" class="toc">
<div class="toctitle">
<h2>Contents</h2>
</div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#History"><span class="tocnumber">1</span> <span class="toctext">History</span></a>
<ul>
<li class="toclevel-2 tocsection-2"><a href="#Origins_in_Ximian_and_Mono"><span class="tocnumber">1.1</span> <span class="toctext">Origins in Ximian and Mono</span></a></li>
<li class="toclevel-2 tocsection-3"><a href="#Founding_Xamarin"><span class="tocnumber">1.2</span> <span class="toctext">Founding Xamarin</span></a></li>
<li class="toclevel-2 tocsection-4"><a href="#Product_development"><span class="tocnumber">1.3</span> <span class="toctext">Product development</span></a></li>
<li class="toclevel-2 tocsection-5"><a href="#Funding"><span class="tocnumber">1.4</span> <span class="toctext">Funding</span></a></li>
<li class="toclevel-2 tocsection-6"><a href="#Acquisition"><span class="tocnumber">1.5</span> <span class="toctext">Acquisition</span></a></li>
<li class="toclevel-2 tocsection-7"><a href="#Microsoft_subsidiary_.282016-present.29"><span class="tocnumber">1.6</span> <span class="toctext">Microsoft subsidiary (2016-present)</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-8"><a href="#Products"><span class="tocnumber">2</span> <span class="toctext">Products</span></a>
<ul>
<li class="toclevel-2 tocsection-9"><a href="#Xamarin_platform"><span class="tocnumber">2.1</span> <span class="toctext">Xamarin platform</span></a></li>
<li class="toclevel-2 tocsection-10"><a href="#Xamarin.Forms"><span class="tocnumber">2.2</span> <span class="toctext">Xamarin.Forms</span></a></li>
<li class="toclevel-2 tocsection-11"><a href="#Xamarin_Test_Cloud"><span class="tocnumber">2.3</span> <span class="toctext">Xamarin Test Cloud</span></a></li>
<li class="toclevel-2 tocsection-12"><a href="#Xamarin_for_Visual_Studio"><span class="tocnumber">2.4</span> <span class="toctext">Xamarin for Visual Studio</span></a></li>
<li class="toclevel-2 tocsection-13"><a href="#Xamarin_Studio"><span class="tocnumber">2.5</span> <span class="toctext">Xamarin Studio</span></a></li>
<li class="toclevel-2 tocsection-14"><a href="#Xamarin.Mac"><span class="tocnumber">2.6</span> <span class="toctext">Xamarin.Mac</span></a></li>
<li class="toclevel-2 tocsection-15"><a href="#.Net_Mobility_Scanner"><span class="tocnumber">2.7</span> <span class="toctext">.Net Mobility Scanner</span></a></li>
<li class="toclevel-2 tocsection-16"><a href="#RoboVM"><span class="tocnumber">2.8</span> <span class="toctext">RoboVM</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-17"><a href="#Awards"><span class="tocnumber">3</span> <span class="toctext">Awards</span></a></li>
<li class="toclevel-1 tocsection-18"><a href="#Acquisitions"><span class="tocnumber">4</span> <span class="toctext">Acquisitions</span></a></li>
<li class="toclevel-1 tocsection-19"><a href="#References"><span class="tocnumber">5</span> <span class="toctext">References</span></a></li>
<li class="toclevel-1 tocsection-20"><a href="#External_links"><span class="tocnumber">6</span> <span class="toctext">External links</span></a></li>
</ul>
</div>
<p></p>
<h2><span class="mw-headline" id="History">History</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Xamarin&amp;action=edit&amp;section=1" title="Edit section: History">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<h3><span class="mw-headline" id="Origins_in_Ximian_and_Mono">Origins in Ximian and Mono</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Xamarin&amp;action=edit&amp;section=2" title="Edit section: Origins in Ximian and Mono">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>In 1999 <a href="/wiki/Miguel_de_Icaza" title="Miguel de Icaza">Miguel de Icaza</a> and <a href="/wiki/Nat_Friedman" title="Nat Friedman">Nat Friedman</a> launched what would eventually be known as <a href="/wiki/Ximian" title="Ximian">Ximian</a> to support and develop software for de Icaza's nascent <a href="/wiki/GNOME" title="GNOME">GNOME</a> project. After Microsoft first announced their <a href="/wiki/.NET_Framework" title=".NET Framework">.NET Framework</a> in June 2000,<sup id="cite_ref-8" class="reference"><a href="#cite_note-8">[8]</a></sup> de Icaza began investigating whether a <a href="/wiki/Linux" title="Linux">Linux</a> version was feasible.<sup id="cite_ref-mdi_9-0" class="reference"><a href="#cite_note-mdi-9">[9]</a></sup> The <a href="/wiki/Mono_(software)" title="Mono (software)">Mono</a> open source project was launched on July 19, 2001. Ximian was bought by <a href="/wiki/Novell" title="Novell">Novell</a> on August 4, 2003, which was then acquired by <a href="/wiki/Attachmate" title="Attachmate">Attachmate</a> in April 2011.<sup id="cite_ref-10" class="reference"><a href="#cite_note-10">[10]</a></sup></p>
<p>After the acquisition, Attachmate announced hundreds of layoffs for the Novell workforce, including Mono developers,<sup id="cite_ref-11" class="reference"><a href="#cite_note-11">[11]</a></sup> putting the future of Mono in question.<sup id="cite_ref-12" class="reference"><a href="#cite_note-12">[12]</a></sup><sup id="cite_ref-13" class="reference"><a href="#cite_note-13">[13]</a></sup></p>
<h3><span class="mw-headline" id="Founding_Xamarin">Founding Xamarin</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Xamarin&amp;action=edit&amp;section=3" title="Edit section: Founding Xamarin">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>On May 16, 2011, Miguel de Icaza announced on his blog that Mono would be developed and supported by Xamarin, a newly formed company that planned to release a new suite of mobile products. According to de Icaza, at least part of the original Mono team had moved to the new company.<sup id="cite_ref-14" class="reference"><a href="#cite_note-14">[14]</a></sup></p>
<p>The name Xamarin comes from the name of the <a href="/wiki/Tamarin" title="Tamarin">Tamarin</a> monkey, replacing the leading T with an X. This is in line with the naming theme used ever since Ximian was started.<sup id="cite_ref-15" class="reference"><a href="#cite_note-15">[15]</a></sup></p>
<p>After Xamarin was announced, the future of the project was questioned, since MonoTouch and Mono for Android would now be in direct competition with the existing commercial offerings owned by Attachmate. It was not known at that time how Xamarin would prove they had not illegally used technologies previously developed when they were employed by Novell for the same work.<sup id="cite_ref-16" class="reference"><a href="#cite_note-16">[16]</a></sup><sup id="cite_ref-17" class="reference"><a href="#cite_note-17">[17]</a></sup></p>
<p>In July 2011, however, Novell - now a subsidiary of Attachmate - and Xamarin announced that Novell had granted a perpetual license for Mono, MonoTouch and Mono for Android to Xamarin, which formally and legally took official stewardship of the project.<sup id="cite_ref-18" class="reference"><a href="#cite_note-18">[18]</a></sup><sup id="cite_ref-19" class="reference"><a href="#cite_note-19">[19]</a></sup></p>
<h3><span class="mw-headline" id="Product_development">Product development</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Xamarin&amp;action=edit&amp;section=4" title="Edit section: Product development">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>In December 2012, Xamarin released Xamarin.Mac,<sup id="cite_ref-20" class="reference"><a href="#cite_note-20">[20]</a></sup> a plugin for the existing <a href="/wiki/MonoDevelop" title="MonoDevelop">MonoDevelop</a> <a href="/wiki/Integrated_development_environment" title="Integrated development environment">Integrated development environment</a> (IDE), which allows developers to build C#-based applications for the Apple <a href="/wiki/OS_X" class="mw-redirect" title="OS X">OS X</a> operating system and package them for publishing via the Apple <a href="/wiki/App_Store_(iOS)" title="App Store (iOS)">App Store</a>.</p>
<p>In February 2013, Xamarin announced the release of Xamarin 2.0.<sup id="cite_ref-21" class="reference"><a href="#cite_note-21">[21]</a></sup> The release included two main components: <b>Xamarin Studio</b>, a re-branding of its open-source IDE Monodevelop;<sup id="cite_ref-drdobbsreview_22-0" class="reference"><a href="#cite_note-drdobbsreview-22">[22]</a></sup> and integration with <a href="/wiki/Microsoft_Visual_Studio" title="Microsoft Visual Studio">Visual Studio</a>, Microsoft's IDE for the .NET Framework, allowing Visual Studio to be used for creating applications for Android and iOS, as well as for Windows.</p>
<h3><span class="mw-headline" id="Funding">Funding</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Xamarin&amp;action=edit&amp;section=5" title="Edit section: Funding">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>On July 17, 2013 Xamarin announced that they had closed $16 million in <a href="/wiki/Series_B" class="mw-redirect" title="Series B">Series B</a> funding led by Lead Edge Capital.<sup id="cite_ref-23" class="reference"><a href="#cite_note-23">[23]</a></sup> Several investors from their <a href="/wiki/Series_A" class="mw-redirect" title="Series A">Series A</a> funding also participated, including <a href="/wiki/Charles_River_Ventures" title="Charles River Ventures">Charles River Ventures</a>, <a href="/wiki/Floodgate_Fund" title="Floodgate Fund">Floodgate</a>, and Ignition Partners. On August 21, 2014 Xamarin successfully closed an additional $54 million in Series C funding, which is one of the largest rounds of funding ever raised by a mobile app development platform.<sup id="cite_ref-24" class="reference"><a href="#cite_note-24">[24]</a></sup> Total funding for the company to date is $82 million.<sup id="cite_ref-25" class="reference"><a href="#cite_note-25">[25]</a></sup></p>
<h3><span class="mw-headline" id="Acquisition">Acquisition</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Xamarin&amp;action=edit&amp;section=6" title="Edit section: Acquisition">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>On February 24, 2016 Xamarin and <a href="/wiki/Microsoft" title="Microsoft">Microsoft</a> announced that Microsoft signed a definitive agreement to acquire Xamarin.<sup id="cite_ref-blogs.microsoft.com_7-1" class="reference"><a href="#cite_note-blogs.microsoft.com-7">[7]</a></sup><sup id="cite_ref-26" class="reference"><a href="#cite_note-26">[26]</a></sup><sup id="cite_ref-27" class="reference"><a href="#cite_note-27">[27]</a></sup> Terms of the deal weren’t disclosed, though the Wall Street Journal reported the price at between $400 million and $500 million.</p>
<h3><span id="Microsoft_subsidiary_(2016-present)"></span><span class="mw-headline" id="Microsoft_subsidiary_.282016-present.29">Microsoft subsidiary (2016-present)</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Xamarin&amp;action=edit&amp;section=7" title="Edit section: Microsoft subsidiary (2016-present)">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>At <a href="/wiki/Build_(developer_conference)" title="Build (developer conference)">Microsoft Build</a> 2016 Microsoft announced that they will open-source the Xamarin SDK and that they will bundle it as a free tool within <a href="/wiki/Microsoft_Visual_Studio" title="Microsoft Visual Studio">Microsoft Visual Studio</a>'s integrated development environment,<sup id="cite_ref-28" class="reference"><a href="#cite_note-28">[28]</a></sup> and Visual Studio Enterprise users would also get Xamarin's enterprise features free of charge. As a part of the acquisition they would also <a href="/wiki/Software_relicensing" title="Software relicensing">relicense</a> <a href="/wiki/Mono_(software)" title="Mono (software)">Mono</a> completely under the <a href="/wiki/MIT_License" title="MIT License">MIT License</a> and would release all other Xamarin SDK software through the <a href="/wiki/.NET_Foundation" title=".NET Foundation">.NET Foundation</a> also under the MIT License.<sup id="cite_ref-29" class="reference"><a href="#cite_note-29">[29]</a></sup><sup id="cite_ref-30" class="reference"><a href="#cite_note-30">[30]</a></sup></p>
<h2><span class="mw-headline" id="Products">Products</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Xamarin&amp;action=edit&amp;section=8" title="Edit section: Products">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<h3><span class="mw-headline" id="Xamarin_platform">Xamarin platform</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Xamarin&amp;action=edit&amp;section=9" title="Edit section: Xamarin platform">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>Xamarin 2.0 was released in February 2013<sup id="cite_ref-XamarinRelease_31-0" class="reference"><a href="#cite_note-XamarinRelease-31">[31]</a></sup> Xamarin.Android and Xamarin.iOS that make it possible to do native Android, iOS and Windows development in C#, with either Visual Studio or Xamarin Studio. Developers re-use their existing C# code, and share significant code across device platforms. The product was used to make apps for several well-known companies including <a href="/wiki/3M" title="3M">3M</a>, <a href="/wiki/AT%26T" title="AT&amp;T">AT&amp;T</a>, <a href="/wiki/Hewlett-Packard" title="Hewlett-Packard">HP</a>, and <a href="/wiki/Target_Corporation" title="Target Corporation">Target</a>.<sup id="cite_ref-32" class="reference"><a href="#cite_note-32">[32]</a></sup><sup id="cite_ref-XamarinIOS_33-0" class="reference"><a href="#cite_note-XamarinIOS-33">[33]</a></sup> Xamarin integrates with Visual Studio, Microsoft's IDE for the .NET Framework, extending Visual Studio for Android and iOS development.<sup id="cite_ref-drdobbsreview_22-1" class="reference"><a href="#cite_note-drdobbsreview-22">[22]</a></sup> Xamarin also released a component store to integrate backend systems, 3rd party libraries, cloud services and UI controls directly into mobile apps.<sup id="cite_ref-34" class="reference"><a href="#cite_note-34">[34]</a></sup><sup id="cite_ref-35" class="reference"><a href="#cite_note-35">[35]</a></sup></p>
<h3><span class="mw-headline" id="Xamarin.Forms">Xamarin.Forms</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Xamarin&amp;action=edit&amp;section=10" title="Edit section: Xamarin.Forms">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>Introduced in Xamarin 3 on May 28, 2014 and allows one to use portable controls subsets that are mapped to native controls of Android, iOS and Windows Phone.</p>
<h3><span class="mw-headline" id="Xamarin_Test_Cloud">Xamarin Test Cloud</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Xamarin&amp;action=edit&amp;section=11" title="Edit section: Xamarin Test Cloud">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>Xamarin Test Cloud makes it possible to test mobile apps written in any language on real, non-jailbroken devices in the cloud. Xamarin Test Cloud uses object-based UI testing to simulate real user interactions.<sup id="cite_ref-36" class="reference"><a href="#cite_note-36">[36]</a></sup></p>
<h3><span class="mw-headline" id="Xamarin_for_Visual_Studio">Xamarin for Visual Studio</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Xamarin&amp;action=edit&amp;section=12" title="Edit section: Xamarin for Visual Studio">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>Xamarin claims to be the only IDE that allows for native Android, iOS and Windows app development within Microsoft Visual Studio.<sup id="cite_ref-XamarinMSpr_37-0" class="reference"><a href="#cite_note-XamarinMSpr-37">[37]</a></sup> Xamarin supplies add-ins to Microsoft Visual Studio that allows developers to build Android, iOS, and Windows apps within the IDE using <a href="/wiki/Autocomplete" title="Autocomplete">code completion</a> and IntelliSense. Xamarin for Visual Studio also has extensions within Microsoft Visual Studio that provide support for the building, deploying, and debugging of apps on a simulator or a device.<sup id="cite_ref-38" class="reference"><a href="#cite_note-38">[38]</a></sup> In late 2013, Xamarin and Microsoft announced a partnership that included further technical integration and customer programs to make it possible for their joint developer bases to build for all mobile platforms.<sup id="cite_ref-39" class="reference"><a href="#cite_note-39">[39]</a></sup> In addition, Xamarin now includes support for Microsoft Portable Class Libraries<sup id="cite_ref-40" class="reference"><a href="#cite_note-40">[40]</a></sup> and most C# 5.0 features such as async/await. CEO and co-founder of Xamarin, Nat Friedman, announced the alliance at the launch of Visual Studio 2013 in New York.</p>
<p>On March 31, 2016 Microsoft announced that they were merging all of Xamarin's software with every version of Microsoft Visual Studio including Visual Studio Community, and this added various Xamarin features to come pre-installed in Visual Studio such as an iOS emulator.<sup id="cite_ref-41" class="reference"><a href="#cite_note-41">[41]</a></sup></p>
<h3><span class="mw-headline" id="Xamarin_Studio">Xamarin Studio</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Xamarin&amp;action=edit&amp;section=13" title="Edit section: Xamarin Studio">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>At the time of its release in February 2013, Xamarin Studio was a standalone IDE for mobile app development on Windows and macOS,<sup id="cite_ref-drdobbsreview_22-2" class="reference"><a href="#cite_note-drdobbsreview-22">[22]</a></sup> as part of Xamarin 2.0 based on the open source project <a href="/wiki/MonoDevelop" title="MonoDevelop">MonoDevelop</a>.<sup id="cite_ref-monodevcomp_42-0" class="reference"><a href="#cite_note-monodevcomp-42">[42]</a></sup> In addition to a debugger, Xamarin Studio includes code completion in C#, an Android UI builder for creating user interfaces without XML, and integration with Xcode Interface Builder for iOS app design.<sup id="cite_ref-monodevcomp_42-1" class="reference"><a href="#cite_note-monodevcomp-42">[42]</a></sup><sup id="cite_ref-43" class="reference"><a href="#cite_note-43">[43]</a></sup></p>
<p>On Windows Xamarin Studio is now deprecated and was replaced with Xamarin for Visual Studio. On <a href="/wiki/MacOS" title="MacOS">macOS</a> Xamarin Studio is still in development, but was rebranded 2016 as <a href="/wiki/Visual_Studio_for_Mac" class="mw-redirect" title="Visual Studio for Mac">Visual Studio for Mac</a>.<sup id="cite_ref-44" class="reference"><a href="#cite_note-44">[44]</a></sup></p>
<h3><span class="mw-headline" id="Xamarin.Mac">Xamarin.Mac</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Xamarin&amp;action=edit&amp;section=14" title="Edit section: Xamarin.Mac">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>Xamarin.Mac was created as a tool for Apple technology application development using the C# programming language. Xamarin.Mac, as with Xamarin.iOS and Xamarin.Android, gives developers up to 90% of code reuse across Android, iOS and Windows.<sup id="cite_ref-45" class="reference"><a href="#cite_note-45">[45]</a></sup> Xamarin.Mac gives C# developers the ability to build fully native Cocoa apps for Mac OS X and allows for native apps that can be put into the Mac App Store.<sup id="cite_ref-46" class="reference"><a href="#cite_note-46">[46]</a></sup><sup id="cite_ref-47" class="reference"><a href="#cite_note-47">[47]</a></sup></p>
<h3><span class="mw-headline" id=".Net_Mobility_Scanner">.Net Mobility Scanner</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Xamarin&amp;action=edit&amp;section=15" title="Edit section: .Net Mobility Scanner">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>Xamarin’s .Net Mobility Scanner lets developers see how much of their .NET code can run on other operating systems, specifically Android, iOS, Windows Phone, and Windows Store. It is a free Web-based service that uses Silverlight.<sup id="cite_ref-XamarinMobilityScanner_48-0" class="reference"><a href="#cite_note-XamarinMobilityScanner-48">[48]</a></sup></p>
<h3><span class="mw-headline" id="RoboVM">RoboVM</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Xamarin&amp;action=edit&amp;section=16" title="Edit section: RoboVM">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>In October 2015 Xamarin announced that they had acquired the <a href="/wiki/Sweden" title="Sweden">Swedish</a> <b>RoboVM for Java</b> developer platform akin to its offerings, the reason stated by Xamarin for the acquisition was that if they would develop a <a href="/wiki/Java_(programming_language)" title="Java (programming language)">Java</a>-based platform from the ground up that their end product would be similar to RoboVM so they acquired the company instead, as a result RoboVM operates independently of the Xamarin team. RoboVM enables developers to build Java apps for iOS and Android with fully native UIs, native performances, and all Java apps have the complete access to the APIs of each developer platform.<sup id="cite_ref-Xamarin-acquires-RoboVM-for-Java-Business-Wire_49-0" class="reference"><a href="#cite_note-Xamarin-acquires-RoboVM-for-Java-Business-Wire-49">[49]</a></sup><sup id="cite_ref-Xamarin-acquires-RoboVM-for-Java-eWeek_50-0" class="reference"><a href="#cite_note-Xamarin-acquires-RoboVM-for-Java-eWeek-50">[50]</a></sup></p>
<p>In April 2016 Microsoft announced that they would discontinue RoboVM and cease all subscriptions after April 30, 2017.<sup id="cite_ref-51" class="reference"><a href="#cite_note-51">[51]</a></sup></p>
<p>BugVM,<sup id="cite_ref-52" class="reference"><a href="#cite_note-52">[52]</a></sup> a fork of RoboVM was created to maintain the free open source status.<sup id="cite_ref-53" class="reference"><a href="#cite_note-53">[53]</a></sup></p>
<h2><span class="mw-headline" id="Awards">Awards</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Xamarin&amp;action=edit&amp;section=17" title="Edit section: Awards">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<ul>
<li>Visionary in the Gartner Magic Quadrant for Mobile Application Development Platforms<sup id="cite_ref-54" class="reference"><a href="#cite_note-54">[54]</a></sup></li>
</ul>
<ul>
<li>Dr Dobbs Jolt Award: Mobile Development Tools<sup id="cite_ref-55" class="reference"><a href="#cite_note-55">[55]</a></sup></li>
</ul>
<h2><span class="mw-headline" id="Acquisitions">Acquisitions</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Xamarin&amp;action=edit&amp;section=18" title="Edit section: Acquisitions">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<ul>
<li>In 2013, Xamarin acquired the mobile application testing platform <b>LessPainful</b>.<sup id="cite_ref-SiliconANGLE-Xamarin-LessPainful_56-0" class="reference"><a href="#cite_note-SiliconANGLE-Xamarin-LessPainful-56">[56]</a></sup></li>
<li>In 2015, Xamarin acquired the Java application development platform <b>RoboVM</b>.<sup id="cite_ref-Yahoo-Xamarin-Acquires-RoboVM_57-0" class="reference"><a href="#cite_note-Yahoo-Xamarin-Acquires-RoboVM-57">[57]</a></sup></li>
</ul>

