


## cross-platform mobile app development:


* phonegap/apache cordova

* xamarin

* unity 

* appcelerator



***************

### phonegap/apache cordova


<p><b>Apache Cordova</b> (formerly <b>PhoneGap</b>) is a <a href="/wiki/Multiple_phone_web-based_application_framework" title="Multiple phone web-based application framework">mobile application development framework</a> originally created by <a href="/wiki/Nitobi" class="mw-redirect" title="Nitobi">Nitobi</a>. <a href="/wiki/Adobe_Systems" title="Adobe Systems">Adobe Systems</a> purchased Nitobi in 2011, rebranded it as PhoneGap, and later released an open source version of the software called Apache Cordova. Apache Cordova enables <a href="/wiki/Computer_software" class="mw-redirect" title="Computer software">software</a> <a href="/wiki/Programmer" title="Programmer">programmers</a> to build <a href="/wiki/Application_software" title="Application software">applications</a> for mobile devices using <a href="/wiki/CSS3" class="mw-redirect" title="CSS3">CSS3</a>, <a href="/wiki/HTML5" title="HTML5">HTML5</a>, and <a href="/wiki/JavaScript" title="JavaScript">JavaScript</a> instead of relying on platform-specific <a href="/wiki/API" class="mw-redirect" title="API">APIs</a> like those in <a href="/wiki/Android_(operating_system)" title="Android (operating system)">Android</a>, <a href="/wiki/IOS" title="IOS">iOS</a>, or <a href="/wiki/Windows_Phone" title="Windows Phone">Windows Phone</a>. It enables wrapping up of CSS, HTML, and JavaScript code depending upon the platform of the device. It extends the features of HTML and JavaScript to work with the device. The resulting applications are hybrid, meaning that they are neither truly native mobile application (because all layout rendering is done via Web views instead of the platform's native UI framework) nor purely Web-based (because they are not just Web apps, but are packaged as apps for distribution and have access to native device APIs). Mixing native and hybrid code snippets has been possible since version 1.9.</p>
<p>The software was previously called just "PhoneGap", then "Apache Callback". As <a href="/wiki/Open-source_software" title="Open-source software">open-source software</a>, Apache Cordova allows wrappers around it, such as <a href="/w/index.php?title=Appery.io&amp;action=edit&amp;redlink=1" class="new" title="Appery.io (page does not exist)">Appery.io</a> or <a href="/wiki/Intel_XDK" title="Intel XDK">Intel XDK</a>.</p>
<p>PhoneGap is Adobe’s <i>productised</i> version and ecosystem on top of Cordova. Like PhoneGap, many other tools and frameworks are also built on top of Cordova, including <a href="/wiki/Ionic_Framework" class="mw-redirect" title="Ionic Framework">Ionic</a>, <a href="/wiki/Monaca_(software)" title="Monaca (software)">Monaca</a>, <a href="/w/index.php?title=TACO&amp;action=edit&amp;redlink=1" class="new" title="TACO (page does not exist)">TACO</a>, Onsen UI, Visual Studio, GapDebug, App Builder, Cocoon, Framework7, Evothings Studio, NSB/AppStudio, Mobiscroll, the <a href="/wiki/Intel_XDK" title="Intel XDK">Intel XDK</a>, These tools use Cordova, and not PhoneGap for their core tools.</p>
<p>Contributors to the Apache Cordova project include <a href="/wiki/Adobe_Systems" title="Adobe Systems">Adobe</a>, <a href="/wiki/BlackBerry" title="BlackBerry">BlackBerry</a>, <a href="/wiki/Google" title="Google">Google</a>, <a href="/wiki/IBM" title="IBM">IBM</a>, <a href="/wiki/Intel" title="Intel">Intel</a>, <a href="/wiki/Microsoft" title="Microsoft">Microsoft</a>, <a href="/wiki/Mozilla" title="Mozilla">Mozilla</a>, and others.</p>
<p></p>
<div id="toc" class="toc">
<div class="toctitle">

<p></p>
<h2><span class="mw-headline" id="History">History</span></span></h2>
<p>First developed at an iPhoneDevCamp event in San Francisco, PhoneGap went on to win the People's Choice Award at <a href="/wiki/O%27Reilly_Media" title="O'Reilly Media">O'Reilly Media</a>'s 2009 Web 2.0 Conference, and the framework has been used to develop many apps. <a href="/wiki/Apple_Inc." title="Apple Inc.">Apple Inc.</a> has confirmed that the framework has its approval, even with the new 4.0 developer license agreement changes. The PhoneGap framework is used by several mobile application platforms such as <a href="/wiki/Monaca_(mobile_application_development_tool)" class="mw-redirect" title="Monaca (mobile application development tool)">Monaca</a>, <a href="/w/index.php?title=AppMobi&amp;action=edit&amp;redlink=1" class="new" title="AppMobi (page does not exist)">appMobi</a>, <a href="/w/index.php?title=Convertigo&amp;action=edit&amp;redlink=1" class="new" title="Convertigo (page does not exist)">Convertigo</a>, as the backbone of their mobile client development engine.</p>
<p>Adobe officially announced the acquisition of Nitobi Software (the original developer) on October 4, 2011. Coincident with that, the PhoneGap code was contributed to the <a href="/wiki/Apache_Software_Foundation" title="Apache Software Foundation">Apache Software Foundation</a> to start a new project called Apache Cordova. The project's original name, Apache Callback, was viewed as too generic. Then, it also appears in Adobe Systems as <i>Adobe PhoneGap</i> and also as <i>Adobe Phonegap Build</i>.</p>
<p>Early versions of PhoneGap required an Apple computer to create iOS apps and a Windows computer to create Windows Mobile apps. After September 2012, Adobe's PhoneGap Build service allows programmers to upload <a href="/wiki/CSS" class="mw-redirect" title="CSS">CSS</a>, <a href="/wiki/HTML" title="HTML">HTML</a>, and <a href="/wiki/JavaScript" title="JavaScript">JavaScript</a> source code to a "<a href="/wiki/Cloud_computing" title="Cloud computing">cloud</a> <a href="/wiki/Compiler" title="Compiler">compiler</a>" that generates apps for every supported platform.</p>
<h2><span class="mw-headline" id="Design_and_rationale">Design and rationale</span></span></h2>
<p>The core of Apache Cordova applications use <a href="/wiki/CSS3" class="mw-redirect" title="CSS3">CSS3</a> and <a href="/wiki/HTML5" title="HTML5">HTML5</a> for their rendering and <a href="/wiki/JavaScript" title="JavaScript">JavaScript</a> for their logic. HTML5 provides access to underlying hardware such as the accelerometer, camera, and <a href="/wiki/GPS" class="mw-redirect" title="GPS">GPS</a>. However, browsers' support for HTML5-based device access is not consistent across mobile browsers, particularly older versions of Android. To overcome these limitations, Apache Cordova embeds the HTML5 code inside a native <a href="/w/index.php?title=WebView&amp;action=edit&amp;redlink=1" class="new" title="WebView (page does not exist)">WebView</a> on the device, using a <a href="/wiki/Foreign_function_interface" title="Foreign function interface">foreign function interface</a> to access the native resources of it.</p>
<p>Apache Cordova can be extended with native <a rel="nofollow" class="external text" href="http://docs.phonegap.com/en/3.0.0/guide_hybrid_plugins_index.md.html#Plugin%20Development%20Guide">plug-ins</a>, allowing developers to add more functionalities that can be called from JavaScript, making it communicate directly between the native layer and the HTML5 page. These plugins allow access to the device's accelerometer, camera, compass, file system, microphone, and more.</p>
<p>However, the use of Web-based technologies leads some Apache Cordova applications to run slower than native applications with similar functionality.<sup id="cite_ref-27" class="reference"><a href="#cite_note-27">[27]</a></sup> <a href="/wiki/Adobe_Systems" title="Adobe Systems">Adobe Systems</a> warns that applications may be rejected by <a href="/wiki/Apple_Inc." title="Apple Inc.">Apple</a> for being too slow or not feeling "native" enough (having appearance and functionality consistent with what users have come to expect on the platform). This can be an issue for some Apache Cordova applications.<sup id="cite_ref-28" class="reference"><a href="#cite_note-28">[28]</a></sup><sup id="cite_ref-29" class="reference"><a href="#cite_note-29">[29]</a></sup></p>
<h2><span class="mw-headline" id="Supported_platforms">Supported platforms</span></span></h2>
<p>Apache Cordova currently supports development for the <a href="/wiki/Operating_system" title="Operating system">operating systems</a> Apple <a href="/wiki/IOS_(Apple)" class="mw-redirect" title="IOS (Apple)">iOS</a>, <a href="/wiki/Bada_(operating_system)" class="mw-redirect" title="Bada (operating system)">Bada</a>, <a href="/wiki/BlackBerry" title="BlackBerry">BlackBerry</a>, <a href="/wiki/Firefox_OS" title="Firefox OS">Firefox OS</a>,<sup id="cite_ref-30" class="reference"><a href="#cite_note-30">[30]</a></sup> Google <a href="/wiki/Android_(operating_system)" title="Android (operating system)">Android</a>,<sup id="cite_ref-31" class="reference"><a href="#cite_note-31">[31]</a></sup> LG <a href="/wiki/WebOS" title="WebOS">webOS</a>, Microsoft <a href="/wiki/Windows_Phone" title="Windows Phone">Windows Phone</a> (7 and 8), Nokia <a href="/wiki/Symbian" title="Symbian">Symbian</a> OS, <a href="/wiki/Tizen" title="Tizen">Tizen</a> (SDK 2.x), and <a href="/wiki/Ubuntu_Touch" title="Ubuntu Touch">Ubuntu Touch</a>. The table below is a list of supported features for each operating system.<sup id="cite_ref-32" class="reference"><a href="#cite_note-32">[32]</a></sup><sup id="cite_ref-33" class="reference"><a href="#cite_note-33">[33]</a></sup></p>
<table class="wikitable">
<tr>
<th>Feature</th>
<th><a href="/wiki/Android_(operating_system)" title="Android (operating system)">Android</a><sup id="cite_ref-34" class="reference"><a href="#cite_note-34">[34]</a></sup></th>
<th><a href="/wiki/Apple_iOS" class="mw-redirect" title="Apple iOS">Apple iPhone /iPhone 3G</a></th>
<th><a href="/wiki/Apple_iOS" class="mw-redirect" title="Apple iOS">Apple iPhone 3GS and newer</a></th>
<th><a href="/wiki/Bada" title="Bada">Bada</a></th>
<th><a href="/wiki/BlackBerry_10" title="BlackBerry 10">BlackBerry 10 and PlayBook OS</a></th>
<th><a href="/wiki/BlackBerry_OS" title="BlackBerry OS">BlackBerry OS 4.6–4.7</a></th>
<th><a href="/wiki/BlackBerry_OS" title="BlackBerry OS">BlackBerry OS 5.0-6.0+</a></th>
<th><a href="/wiki/Firefox_OS" title="Firefox OS">Firefox OS</a></th>
<th><a href="/wiki/Symbian" title="Symbian">Symbian</a></th>
<th><a href="/wiki/Tizen" title="Tizen">Tizen</a></th>
<th><a href="/wiki/WebOS" title="WebOS">webOS</a></th>
<th><a href="/wiki/Ubuntu_Touch" title="Ubuntu Touch">Ubuntu Touch</a></th>
<th><a href="/wiki/Windows_Phone" title="Windows Phone">Windows Phone</a></th>
</tr>
<tr>
<td><a href="/wiki/Accelerometer" title="Accelerometer">Accelerometer</a></td>
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
<td><a href="/wiki/Camera" title="Camera">Camera</a></td>
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
<td><a href="/wiki/Compass" title="Compass">Compass</a></td>
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
<td><a href="/wiki/Contact_list" title="Contact list">Contacts</a></td>
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
<td><a href="/wiki/Geolocation" title="Geolocation">Geolocation</a></td>
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


