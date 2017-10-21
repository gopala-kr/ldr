<!DOCTYPE html>
<html lang="en-US" prefix="og: http://ogp.me/ns#">

<head>
    <meta charset="UTF-8" />
    <title>Node JS Architecture - Single Threaded Event Loop - JournalDev</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Node JS Architecture. Node JS Single Threaded Event Loop Model. How Node JS works, Node JS javascript events and callback mechanism, node events queue." />
    <link rel="canonical" href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Node JS Architecture - Single Threaded Event Loop - JournalDev" />
    <meta property="og:description" content="Node JS Architecture. Node JS Single Threaded Event Loop Model. How Node JS works, Node JS javascript events and callback mechanism, node events queue." />
    <meta property="og:url" content="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop" />
    <meta property="og:site_name" content="JournalDev" />
    <meta property="article:section" content="Node.js" />
    <meta property="article:published_time" content="2015-04-08T03:13:58-07:00" />
    <meta property="article:modified_time" content="2016-07-21T11:09:07-07:00" />
    <meta property="og:updated_time" content="2016-07-21T11:09:07-07:00" />
    <meta property="og:image" content="https://cdn.journaldev.com/wp-content/uploads/2015/04/Request-Response-Model-1024x696.png" />
    <meta property="og:image:secure_url" content="https://cdn.journaldev.com/wp-content/uploads/2015/04/Request-Response-Model-1024x696.png" />
    <meta property="og:image" content="https://cdn.journaldev.com/wp-content/uploads/2015/04/NodeJS-Single-Thread-Event-Model-1024x768.png" />
    <meta property="og:image:secure_url" content="https://cdn.journaldev.com/wp-content/uploads/2015/04/NodeJS-Single-Thread-Event-Model-1024x768.png" />
    <meta property="og:image" content="https://cdn.journaldev.com/wp-content/uploads/2015/04/javascript-callback-mechanism.png" />
    <meta property="og:image:secure_url" content="https://cdn.journaldev.com/wp-content/uploads/2015/04/javascript-callback-mechanism.png" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="Node JS Architecture. Node JS Single Threaded Event Loop Model. How Node JS works, Node JS javascript events and callback mechanism, node events queue." />
    <meta name="twitter:title" content="Node JS Architecture - Single Threaded Event Loop - JournalDev" />
    <meta name="twitter:image" content="https://cdn.journaldev.com/wp-content/uploads/2015/04/Request-Response-Model-1024x696.png" />
    <script type='application/ld+json'>{"@context":"http:\/\/schema.org","@type":"WebSite","@id":"#website","url":"https:\/\/www.journaldev.com\/","name":"JournalDev - Java, Java EE, Android, Web Development Tutorials","potentialAction":{"@type":"SearchAction","target":"https:\/\/www.journaldev.com\/?s={search_term_string}","query-input":"required name=search_term_string"}}</script>
    <script type='application/ld+json'>{"@context":"http:\/\/schema.org","@type":"Person","url":"https:\/\/www.journaldev.com\/7462\/node-js-architecture-single-threaded-event-loop","sameAs":[],"@id":"#person","name":"Pankaj Kumar"}</script>
    <link rel='dns-prefetch' href='//fonts.googleapis.com' />
    <link rel='dns-prefetch' href='//s.w.org' />
    <link rel="alternate" type="application/rss+xml" title="JournalDev &raquo; Feed" href="https://www.journaldev.com/feed" />
    <link rel="alternate" type="application/rss+xml" title="JournalDev &raquo; Comments Feed" href="https://www.journaldev.com/comments/feed" />
    <link rel="alternate" type="application/rss+xml" title="JournalDev &raquo; Node JS Architecture &#8211; Single Threaded Event Loop Comments Feed" href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop/feed" />
    <script type="text/javascript">
        window._wpemojiSettings = {
            "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2.3\/72x72\/",
            "ext": ".png",
            "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2.3\/svg\/",
            "svgExt": ".svg",
            "source": {
                "concatemoji": "https:\/\/www.journaldev.com\/wp-includes\/js\/wp-emoji-release.min.js"
            }
        };
        ! function(a, b, c) {
            function d(a) {
                var b, c, d, e, f = String.fromCharCode;
                if (!k || !k.fillText) return !1;
                switch (k.clearRect(0, 0, j.width, j.height), k.textBaseline = "top", k.font = "600 32px Arial", a) {
                    case "flag":
                        return k.fillText(f(55356, 56826, 55356, 56819), 0, 0), b = j.toDataURL(), k.clearRect(0, 0, j.width, j.height), k.fillText(f(55356, 56826, 8203, 55356, 56819), 0, 0), c = j.toDataURL(), b !== c && (k.clearRect(0, 0, j.width, j.height), k.fillText(f(55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447), 0, 0), b = j.toDataURL(), k.clearRect(0, 0, j.width, j.height), k.fillText(f(55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447), 0, 0), c = j.toDataURL(), b !== c);
                    case "emoji4":
                        return k.fillText(f(55358, 56794, 8205, 9794, 65039), 0, 0), d = j.toDataURL(), k.clearRect(0, 0, j.width, j.height), k.fillText(f(55358, 56794, 8203, 9794, 65039), 0, 0), e = j.toDataURL(), d !== e
                }
                return !1
            }

            function e(a) {
                var c = b.createElement("script");
                c.src = a, c.defer = c.type = "text/javascript", b.getElementsByTagName("head")[0].appendChild(c)
            }
            var f, g, h, i, j = b.createElement("canvas"),
                k = j.getContext && j.getContext("2d");
            for (i = Array("flag", "emoji4"), c.supports = {
                    everything: !0,
                    everythingExceptFlag: !0
                }, h = 0; h < i.length; h++) c.supports[i[h]] = d(i[h]), c.supports.everything = c.supports.everything && c.supports[i[h]], "flag" !== i[h] && (c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && c.supports[i[h]]);
            c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && !c.supports.flag, c.DOMReady = !1, c.readyCallback = function() {
                c.DOMReady = !0
            }, c.supports.everything || (g = function() {
                c.readyCallback()
            }, b.addEventListener ? (b.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1)) : (a.attachEvent("onload", g), b.attachEvent("onreadystatechange", function() {
                "complete" === b.readyState && c.readyCallback()
            })), f = c.source || {}, f.concatemoji ? e(f.concatemoji) : f.wpemoji && f.twemoji && (e(f.twemoji), e(f.wpemoji)))
        }(window, document, window._wpemojiSettings);
    </script>
    <style type="text/css">
        img.wp-smiley,
        img.emoji {
            display: inline !important;
            border: none !important;
            box-shadow: none !important;
            height: 1em !important;
            width: 1em !important;
            margin: 0 .07em !important;
            vertical-align: -0.1em !important;
            background: none !important;
            padding: 0 !important
        }
    </style>
    <link rel='stylesheet' id='wgs2-css' href='https://cdn.journaldev.com/wp-content/plugins/wp-google-search/wgs2.css' type='text/css' media='all' />
    <link rel='stylesheet' id='news-pro-theme-css' href='https://cdn.journaldev.com/wp-content/themes/news-pro/style.css' type='text/css' media='all' />
    <link rel='stylesheet' id='dashicons-css' href='https://cdn.journaldev.com/wp-includes/css/dashicons.min.css' type='text/css' media='all' />
    <link rel='stylesheet' id='thickbox-css' href='https://cdn.journaldev.com/wp-includes/js/thickbox/thickbox.css' type='text/css' media='all' />
    <link rel='stylesheet' id='jcorgcr_css-css' href='https://cdn.journaldev.com/wp-content/plugins/jaspreetchahals-coupons-lite/css/jcorgcr.min.css' type='text/css' media='all' />
    <link rel='stylesheet' id='wpProQuiz_front_style-css' href='https://cdn.journaldev.com/wp-content/plugins/wp-pro-quiz/css/wpProQuiz_front.min.css' type='text/css' media='all' />
    <link rel='stylesheet' id='google-fonts-css' href='//fonts.googleapis.com/css?family=Raleway%3A400%2C700%7CPathway+Gothic+One' type='text/css' media='all' />
    <link rel='stylesheet' id='scroll-triggered-boxes-css' href='https://cdn.journaldev.com/wp-content/plugins/scroll-triggered-boxes/assets/css/styles.min.css' type='text/css' media='all' />
    <link rel='stylesheet' id='forget-about-shortcode-buttons-css' href='https://cdn.journaldev.com/wp-content/plugins/forget-about-shortcode-buttons/public/css/button-styles.css' type='text/css' media='all' />
    <script type='text/javascript' src='https://cdn.journaldev.com/wp-includes/js/jquery/jquery.js'></script>
    <script type='text/javascript' src='https://cdn.journaldev.com/wp-includes/js/jquery/jquery-migrate.min.js'></script>
    <script type='text/javascript' src='https://cdn.journaldev.com/wp-content/plugins/top-bar/js/jquery.cookie.js'></script>
    <script type='text/javascript'>
        var tpbr_settings = {
            "fixed": "fixed",
            "message": "{Diwali Sale} - Udemy Courses at Lowest Price of $10 or INR 640 - Only for 6 Hours",
            "status": "active",
            "yn_button": "button",
            "color": "#B63233",
            "button_text": "Check it Out Now",
            "button_url": "https:\/\/www.journaldev.com\/diwali-udemy-deal",
            "close_image": null,
            "is_admin_bar": "no"
        };
    </script>
    <script type='text/javascript' src='https://cdn.journaldev.com/wp-content/plugins/top-bar/js/tpbr_front.min.js'></script>
    <!--[if lt IE 9]> <script type='text/javascript' src='https://cdn.journaldev.com/wp-content/themes/genesis/lib/js/html5shiv.js'></script> <![endif]-->
    <script type='text/javascript' src='https://cdn.journaldev.com/wp-content/themes/news-pro/js/responsive-menu.js'></script>
    <script type='text/javascript' src='https://cdn.journaldev.com/wp-content/plugins/simple-social-icons/svgxuse.js'></script>
    <link rel='https://api.w.org/' href='https://www.journaldev.com/wp-json/' />
    <link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://www.journaldev.com/xmlrpc.php?rsd" />
    <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://cdn.journaldev.com/wp-includes/wlwmanifest.xml" />
    <meta name="generator" content="WordPress 4.8.2" />
    <link rel='shortlink' href='https://www.journaldev.com/?p=7462' />
    <link rel="alternate" type="application/json+oembed" href="https://www.journaldev.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.journaldev.com%2F7462%2Fnode-js-architecture-single-threaded-event-loop" />
    <link rel="alternate" type="text/xml+oembed" href="https://www.journaldev.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.journaldev.com%2F7462%2Fnode-js-architecture-single-threaded-event-loop&#038;format=xml" />
    <script language="JavaScript">
        jQuery(function() {
            jQuery('.wpdm-popup').click(function() {
                tb_show(jQuery(this).html(), this.href + '&modal=1&width=600&height=400');
                return false;
            });
            jQuery('.haspass').click(function() {
                var url = jQuery(this).attr('href');
                var id = jQuery(this).attr('rel');
                var password = jQuery('#pass_' + id).val();
                jQuery.post('https://www.journaldev.com/', {
                    download: id,
                    password: password
                }, function(res) {
                    if (res == 'error') {
                        jQuery('#wpdm_file_' + id + ' .perror').html('Wrong Password');
                        setTimeout("jQuery('#wpdm_file_" + id + " .perror').html('');", 3000);
                        return false;
                    } else {
                        location.href = 'https://www.journaldev.com/?wpdmact=process&did=' + res;
                    }
                });
                return false;
            });
        })
    </script>
    <style type="text/css">
        .enews .screenread {
            height: 1px;
            left: -1000em;
            overflow: hidden;
            position: absolute;
            top: -1000em;
            width: 1px
        }
    </style>
    <style>
        .k9b316 {
            font-size: 18px
        }
        
        .close-btn {
            position: absolute;
            right: 5px;
            top: -15px;
            background: #333;
            border-radius: 50%;
            height: 25px;
            width: 25px;
            text-align: center;
            cursor: pointer
        }
        
        .k9b316-hide {
            display: none
        }
        
        .k9b316-1 {
            width: 100%;
            background: #e84206;
            color: #fff;
            text-align: center;
            position: fixed;
            bottom: 0px;
            padding: 10px;
            z-index: 100000
        }
        
        .k9b316-2 {
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .95);
            z-index: 100000;
            position: fixed;
            top: 0;
            right: 0
        }
        
        .k9b316-2 .k9b316-body,
        .k9b316-3 .k9b316-body {
            background: #fff;
            color: #666;
            text-align: center;
            position: fixed;
            margin: auto;
            top: 200px;
            right: 10%;
            width: 80%;
            padding: 20px;
            z-index: 100001;
            border-radius: 10px
        }
        
        .k9b316-2 .close-btn,
        .k9b316-3 .close-btn {
            background: #e84206;
            color: #fff
        }
        
        .k9b316-3 .k9b316-body {
            box-shadow: 2px 2px 2px #333
        }
    </style>
    <script>
        (function(window) {
            var KillAdBlock = function(options) {
                this._options = {
                    checkOnLoad: false,
                    resetOnEnd: false,
                    loopCheckTime: 50,
                    loopMaxNumber: 5,
                    baitClass: 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links',
                    baitStyle: 'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;',
                    debug: false
                };
                this._var = {
                    version: '1.2.0',
                    bait: null,
                    checking: false,
                    loop: null,
                    loopNumber: 0,
                    event: {
                        detected: [],
                        notDetected: []
                    }
                };
                if (options !== undefined) {
                    this.setOption(options);
                }
                var self = this;
                var eventCallback = function() {
                    setTimeout(function() {
                        if (self._options.checkOnLoad === true) {
                            if (self._options.debug === true) {
                                self._log('onload->eventCallback', 'A check loading is launched');
                            }
                            if (self._var.bait === null) {
                                self._creatBait();
                            }
                            setTimeout(function() {
                                self.check();
                            }, 1);
                        }
                    }, 1);
                };
                if (window.addEventListener !== undefined) {
                    window.addEventListener('load', eventCallback, false);
                } else {
                    window.attachEvent('onload', eventCallback);
                }
            };
            KillAdBlock.prototype._options = null;
            KillAdBlock.prototype._var = null;
            KillAdBlock.prototype._bait = null;
            KillAdBlock.prototype._log = function(method, message) {
                console.log('[KillAdBlock][' + method + '] ' + message);
            };
            KillAdBlock.prototype.setOption = function(options, value) {
                if (value !== undefined) {
                    var key = options;
                    options = {};
                    options[key] = value;
                }
                for (var option in options) {
                    this._options[option] = options[option];
                    if (this._options.debug === true) {
                        this._log('setOption', 'The option "' + option + '" he was assigned to "' + options[option] + '"');
                    }
                }
                return this;
            };
            KillAdBlock.prototype._creatBait = function() {
                var bait = document.createElement('div');
                bait.setAttribute('class', this._options.baitClass);
                bait.setAttribute('style', this._options.baitStyle);
                this._var.bait = window.document.body.appendChild(bait);
                this._var.bait.offsetParent;
                this._var.bait.offsetHeight;
                this._var.bait.offsetLeft;
                this._var.bait.offsetTop;
                this._var.bait.offsetWidth;
                this._var.bait.clientHeight;
                this._var.bait.clientWidth;
                if (this._options.debug === true) {
                    this._log('_creatBait', 'Bait has been created');
                }
            };
            KillAdBlock.prototype._destroyBait = function() {
                window.document.body.removeChild(this._var.bait);
                this._var.bait = null;
                if (this._options.debug === true) {
                    this._log('_destroyBait', 'Bait has been removed');
                }
            };
            KillAdBlock.prototype.check = function(loop) {
                if (loop === undefined) {
                    loop = true;
                }
                if (this._options.debug === true) {
                    this._log('check', 'An audit was requested ' + (loop === true ? 'with a' : 'without') + ' loop');
                }
                if (this._var.checking === true) {
                    if (this._options.debug === true) {
                        this._log('check', 'A check was canceled because there is already an ongoing');
                    }
                    return false;
                }
                this._var.checking = true;
                if (this._var.bait === null) {
                    this._creatBait();
                }
                var self = this;
                this._var.loopNumber = 0;
                if (loop === true) {
                    this._var.loop = setInterval(function() {
                        self._checkBait(loop);
                    }, this._options.loopCheckTime);
                }
                setTimeout(function() {
                    self._checkBait(loop);
                }, 1);
                if (this._options.debug === true) {
                    this._log('check', 'A check is in progress ...');
                }
                return true;
            };
            KillAdBlock.prototype._checkBait = function(loop) {
                var detected = false;
                if (this._var.bait === null) {
                    this._creatBait();
                }
                if (window.document.body.getAttribute('abp') !== null || this._var.bait.offsetParent === null || this._var.bait.offsetHeight == 0 || this._var.bait.offsetLeft == 0 || this._var.bait.offsetTop == 0 || this._var.bait.offsetWidth == 0 || this._var.bait.clientHeight == 0 || this._var.bait.clientWidth == 0) {
                    detected = true;
                }
                if (window.getComputedStyle !== undefined) {
                    var baitTemp = window.getComputedStyle(this._var.bait, null);
                    if (baitTemp.getPropertyValue('display') == 'none' || baitTemp.getPropertyValue('visibility') == 'hidden') {
                        detected = true;
                    }
                }
                if (this._options.debug === true) {
                    this._log('_checkBait', 'A check (' + (this._var.loopNumber + 1) + '/' + this._options.loopMaxNumber + ' ~' + (1 + this._var.loopNumber * this._options.loopCheckTime) + 'ms) was conducted and detection is ' + (detected === true ? 'positive' : 'negative'));
                }
                if (loop === true) {
                    this._var.loopNumber++;
                    if (this._var.loopNumber >= this._options.loopMaxNumber) {
                        this._stopLoop();
                    }
                }
                if (detected === true) {
                    this._stopLoop();
                    this._destroyBait();
                    this.emitEvent(true);
                    if (loop === true) {
                        this._var.checking = false;
                    }
                } else if (this._var.loop === null || loop === false) {
                    this._destroyBait();
                    this.emitEvent(false);
                    if (loop === true) {
                        this._var.checking = false;
                    }
                }
            };
            KillAdBlock.prototype._stopLoop = function(detected) {
                clearInterval(this._var.loop);
                this._var.loop = null;
                this._var.loopNumber = 0;
                if (this._options.debug === true) {
                    this._log('_stopLoop', 'A loop has been stopped');
                }
            };
            KillAdBlock.prototype.emitEvent = function(detected) {
                if (this._options.debug === true) {
                    this._log('emitEvent', 'An event with a ' + (detected === true ? 'positive' : 'negative') + ' detection was called');
                }
                var fns = this._var.event[(detected === true ? 'detected' : 'notDetected')];
                for (var i in fns) {
                    if (this._options.debug === true) {
                        this._log('emitEvent', 'Call function ' + (parseInt(i) + 1) + '/' + fns.length);
                    }
                    if (fns.hasOwnProperty(i)) {
                        fns[i]();
                    }
                }
                if (this._options.resetOnEnd === true) {
                    this.clearEvent();
                }
                return this;
            };
            KillAdBlock.prototype.clearEvent = function() {
                this._var.event.detected = [];
                this._var.event.notDetected = [];
                if (this._options.debug === true) {
                    this._log('clearEvent', 'The event list has been cleared');
                }
            };
            KillAdBlock.prototype.on = function(detected, fn) {
                this._var.event[(detected === true ? 'detected' : 'notDetected')].push(fn);
                if (this._options.debug === true) {
                    this._log('on', 'A type of event "' + (detected === true ? 'detected' : 'notDetected') + '" was added');
                }
                return this;
            };
            KillAdBlock.prototype.onDetected = function(fn) {
                return this.on(true, fn);
            };
            KillAdBlock.prototype.onNotDetected = function(fn) {
                return this.on(false, fn);
            };
            window.KillAdBlock = KillAdBlock;
            if (window.killAdBlock === undefined) {
                window.killAdBlock = new KillAdBlock({
                    checkOnLoad: true,
                    resetOnEnd: true
                });
            }
        })(window);

        function show_message() {
            kill_adBlock_message_delay = kill_adBlock_message_delay * 1000;
            kill_adBlock_close_automatically_delay = kill_adBlock_close_automatically_delay * 1000;
            setTimeout(function() {
                jQuery('.k9b316').html(kill_adBlock_message);
                jQuery('.k9b316-container').fadeIn();
            }, kill_adBlock_message_delay);
            if (kill_adBlock_close_automatically_delay > 0 && kill_adBlock_close_automatically == 1) {
                setTimeout(function() {
                    jQuery('.close-btn').trigger('click');
                }, kill_adBlock_close_automatically_delay);
            }
        }

        function adBlockNotDetected() {}
        jQuery(document).ready(function() {
            jQuery('.close-btn').click(function() {
                jQuery('.k9b316-container').fadeOut('k9b316-hide');
            });
        });
        var kill_adBlock_status = 1;
        var kill_adBlock_message = 'We thrive to provide you the best content totally free. Advertisement is the only source of our income to run this site and paying our bills. Please whitelist our website or disable AdBlocker and reload to continue reading the top quality article for free.';
        var kill_adBlock_message_delay = 3;
        var kill_adBlock_close_btn = 0;
        var kill_adBlock_close_automatically = 0;
        var kill_adBlock_close_automatically_delay = 0;
        var kill_adBlock_message_type = 2;

        function adBlockDetected() {
            show_message();
        }
        if (typeof killAdBlock === 'undefined') {
            adBlockDetected();
        } else {
            killAdBlock.onDetected(adBlockDetected).onNotDetected(adBlockNotDetected);
        }
    </script>
    <script data-cfasync="false" src="//load.sumome.com/" data-sumo-platform="wordpress" data-sumo-site-id="698353846a267a100ea055220d594fa90eff8892a405d778a1382db0c2b84c39" async></script>

    <head profile="https://www.w3.org/2005/10/profile">
        <link rel="icon" type="image/png" href="https://cdn.journaldev.com/fav.png" />
        <link rel="pingback" href="https://www.journaldev.com/xmlrpc.php" />
        <script>
            (function(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function() {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o), m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
            ga('create', 'UA-12171637-4', 'auto');
            ga('send', 'pageview');
        </script>
        <script type="text/javascript">
            window._mNHandle = window._mNHandle || {};
            window._mNHandle.queue = window._mNHandle.queue || [];
            medianet_versionId = "121199";
            (function() {
                var sct = document.createElement("script"),
                    sctHl = document.getElementsByTagName("script")[0],
                    isSSL = 'https:' == document.location.protocol;
                sct.type = "text/javascript";
                sct.src = (isSSL ? 'https:' : 'http:') + '//contextual.media.net/dmedianet.js?cid=8CUSP8IK6' + (isSSL ? '&https=1' : '') + '';
                sct.async = "async";
                sctHl.parentNode.insertBefore(sct, sctHl);
            })();
        </script>
        <style type="text/css">
            .site-title a {
                background: url(https://cdn.journaldev.com/wp-content/uploads/2014/05/cropped-Final-JD-Logo.png) no-repeat !important
            }
        </style>
        <style type="text/css">
            .broken_link,
            a.broken_link {
                text-decoration: line-through
            }
        </style>
        <link rel="amphtml" href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop/amp" />
        <style type="text/css" id="syntaxhighlighteranchor"></style>
        <style type="text/css">
            .stb-4065 {
                border-width: 0px !important;
                @media ( max-width: 700px) {
                    #stb-4065 {
                        display: none !important
                    }
                }
            }
        </style>
        <link rel="icon" href="https://cdn.journaldev.com/wp-content/uploads/2015/08/jd-site-img-150x150.png" sizes="32x32" />
        <link rel="icon" href="https://cdn.journaldev.com/wp-content/uploads/2015/08/jd-site-img-268x268.png" sizes="192x192" />
        <link rel="apple-touch-icon-precomposed" href="https://cdn.journaldev.com/wp-content/uploads/2015/08/jd-site-img-268x268.png" />
        <meta name="msapplication-TileImage" content="https://cdn.journaldev.com/wp-content/uploads/2015/08/jd-site-img-300x300.png" />
    </head>

    <body class="post-template-default single single-post postid-7462 single-format-standard custom-header header-image content-sidebar" itemscope itemtype="https://schema.org/WebPage">
        <div class="site-container">
            <header class="site-header" itemscope itemtype="https://schema.org/WPHeader">
                <div class="wrap">
                    <div class="title-area">
                        <p class="site-title" itemprop="headline"><a href="https://www.journaldev.com/">JournalDev</a></p>
                        <p class="site-description" itemprop="description">Java, Java EE, Android, Python, Web Development Tutorials</p>
                    </div>
                    <div class="widget-area header-widget-area">
                        <section id="adswidget7-quick-adsense" class="widget lambda_6">
                            <div class="widget-wrap">
                                <div id="388877451">
                                    <script type="text/javascript">
                                        try {
                                            window._mNHandle.queue.push(function() {
                                                window._mNDetails.loadTag("388877451", "728x90", "388877451");
                                            });
                                        } catch (error) {}
                                    </script>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </header>
            <nav class="nav-primary" itemscope itemtype="https://schema.org/SiteNavigationElement">
                <div class="wrap">
                    <ul id="menu-new-headermenu" class="menu genesis-nav-menu menu-primary">
                        <li id="menu-item-7610" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7610"><a href="https://www.journaldev.com/java-tutorial-java-ee-tutorials" itemprop="url"><span
itemprop="name">Java Tutorial</span></a></li>
                        <li id="menu-item-7611" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-7611"><a href="#" itemprop="url"><span
itemprop="name">#Index Posts</span></a>
                            <ul class="sub-menu">
                                <li id="menu-item-7612" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7612"><a href="https://www.journaldev.com/7153/core-java-tutorial" itemprop="url"><span
itemprop="name">Core Java Tutorial</span></a></li>
                                <li id="menu-item-7613" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7613"><a href="https://www.journaldev.com/1827/java-design-patterns-example-tutorial" itemprop="url"><span
itemprop="name">Java Design Patterns</span></a></li>
                                <li id="menu-item-7614" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7614"><a href="https://www.journaldev.com/2114/servlet-jsp-tutorial" itemprop="url"><span
itemprop="name">Servlet JSP Tutorial</span></a></li>
                                <li id="menu-item-7615" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7615"><a href="https://www.journaldev.com/2310/struts2-tutorial-with-example-projects" itemprop="url"><span
itemprop="name">Struts 2 Tutorial</span></a></li>
                                <li id="menu-item-7616" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7616"><a href="https://www.journaldev.com/2888/spring-tutorial-spring-core-tutorial" itemprop="url"><span
itemprop="name">Spring Tutorial</span></a></li>
                                <li id="menu-item-7638" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7638"><a href="https://www.journaldev.com/7635/jsf-tutorial" itemprop="url"><span
itemprop="name">JSF Tutorial</span></a></li>
                                <li id="menu-item-7620" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7620"><a href="https://www.journaldev.com/5516/primefaces-tutorial-with-example-projects" itemprop="url"><span
itemprop="name">Primefaces Tutorial</span></a></li>
                                <li id="menu-item-7619" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7619"><a href="https://www.journaldev.com/2681/jdbc-tutorial" itemprop="url"><span
itemprop="name">JDBC Tutorial</span></a></li>
                                <li id="menu-item-7617" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7617"><a href="https://www.journaldev.com/3793/hibernate-tutorial" itemprop="url"><span
itemprop="name">Hibernate Tutorial</span></a></li>
                                <li id="menu-item-7618" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7618"><a href="https://www.journaldev.com/6672/mongodb-tutorial-installation-example-projects-integration-with-servlet-spring-jsf" itemprop="url"><span
itemprop="name">MongoDB Tutorial</span></a></li>
                            </ul>
                        </li>
                        <li id="menu-item-7621" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-7621"><a href="#" itemprop="url"><span
itemprop="name">#Interview Questions</span></a>
                            <ul class="sub-menu">
                                <li id="menu-item-7622" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7622"><a href="https://www.journaldev.com/java-interview-questions" itemprop="url"><span
itemprop="name">Java Interview Questions</span></a></li>
                                <li id="menu-item-7623" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7623"><a href="https://www.journaldev.com/2529/jdbc-interview-questions-and-answers" itemprop="url"><span
itemprop="name">JDBC Interview Questions</span></a></li>
                                <li id="menu-item-7624" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7624"><a href="https://www.journaldev.com/2015/servlet-interview-questions-and-answers" itemprop="url"><span
itemprop="name">Servlet Interview Questions</span></a></li>
                                <li id="menu-item-7625" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7625"><a href="https://www.journaldev.com/2110/jsp-interview-questions-and-answers" itemprop="url"><span
itemprop="name">JSP Interview Questions</span></a></li>
                                <li id="menu-item-7626" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7626"><a href="https://www.journaldev.com/2354/struts2-interview-questions-and-answers" itemprop="url"><span
itemprop="name">Struts2 Interview Questions</span></a></li>
                                <li id="menu-item-7627" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7627"><a href="https://www.journaldev.com/2696/spring-interview-questions-and-answers" itemprop="url"><span
itemprop="name">Spring Interview Questions</span></a></li>
                                <li id="menu-item-7628" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7628"><a href="https://www.journaldev.com/3633/hibernate-interview-questions-and-answers" itemprop="url"><span
itemprop="name">Hibernate Interview Questions</span></a></li>
                                <li id="menu-item-7629" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7629"><a href="https://www.journaldev.com/7261/jsf-interview-questions-and-answers" itemprop="url"><span
itemprop="name">JSF Interview Questions</span></a></li>
                            </ul>
                        </li>
                        <li id="menu-item-7759" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7759"><a href="https://www.journaldev.com/resources" itemprop="url"><span
itemprop="name">Resources</span></a></li>
                        <li id="menu-item-10352" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-10352"><a href="https://store.journaldev.com" itemprop="url"><span
itemprop="name">Store</span></a></li>
                    </ul>
                </div>
            </nav>
            <div class="site-inner">
                <div class="content-sidebar-wrap">
                    <main class="content">
                        <div class="breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList"><span xmlns:v="http://rdf.data-vocabulary.org/#"><span
typeof="v:Breadcrumb"><a
href="https://www.journaldev.com/" rel="v:url" property="v:title">Home</a> » <span
rel="v:child" typeof="v:Breadcrumb"><a
href="https://www.journaldev.com/node-js" rel="v:url" property="v:title">Node.js</a> » <span
class="breadcrumb_last">Node JS Architecture &#8211; Single Threaded Event Loop</span></span>
                            </span>
                            </span>
                        </div>
                        <article class="post-7462 post type-post status-publish format-standard category-node-js entry" itemscope itemtype="https://schema.org/CreativeWork">
                            <header class="entry-header">
                                <h1 class="entry-title" itemprop="headline">Node JS Architecture &#8211; Single Threaded Event Loop</h1>
                                <p class="entry-meta">
                                    <time class="entry-modified-time" itemprop="dateModified" datetime="2016-07-21T11:09:07+00:00">July 21, 2016</time> by <span class="entry-author" itemprop="author" itemscope itemtype="https://schema.org/Person"><a
href="https://www.journaldev.com/author/rambabu" class="entry-author-link" itemprop="url" rel="author"><span
class="entry-author-name" itemprop="name">Rambabu Posa</span></a>
                                    </span> <span class="entry-comments-link"><a
href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comments">60 Comments</a></span></p>
                            </header>
                            <div class="entry-content" itemprop="text">
                                <div style="float:none;margin:10px 0 10px 0;text-align:center;"><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-5143693538742787" data-ad-slot="7174295726" data-ad-format="auto"></ins>
                                    <script>
                                        (adsbygoogle = window.adsbygoogle || []).push({});
                                    </script>
                                </div>
                                <p>Today we will look into Node JS Architecture and Single Threaded Event Loop model. In our previous posts, we have discussed about <a href="https://www.journaldev.com/7397/introduction-to-node-js-basics" title="Introduction to Node JS – Node.js Basics">Node JS Basics</a>, <a href="https://www.journaldev.com/7423/node-js-components-modules-npm-install-update-uninstall-example" title="Node.js Components – Node.js modules, NPM install update uninstall example">Node JS Components</a> and <a href="https://www.journaldev.com/7402/node-js-environment-setup-node-js-installation" title="Node JS Environment Setup – Node.js installation">Node JS installation</a>.</p>
                                <h2>Node JS Architecture</h2>
                                <p>Before starting some Node JS programming examples, it&#8217;s important to have an idea about Node JS architecture. We will discuss about &#8220;How Node JS works under-the-hood, what type of processing model it is following, How Node JS handles concurrent request with Single-Threaded model&#8221; etc. in this post.</p>
                                <h3>Node JS Single Threaded Event Loop Model</h3>
                                <p>As we have already discussed, Node JS applications uses &#8220;Single Threaded Event Loop Model&#8221; architecture to handle multiple concurrent clients.</p>
                                <div style="float:none;margin:10px 0 10px 0;text-align:center;"><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-5143693538742787" data-ad-slot="5697562523" data-ad-format="auto"></ins>
                                    <script>
                                        (adsbygoogle = window.adsbygoogle || []).push({});
                                    </script>
                                </div>
                                <p>There are many web application technologies like JSP, Spring MVC, ASP.NET, HTML, Ajax, jQuery etc. But all these technologies follow &#8220;Multi-Threaded Request-Response&#8221; architecture to handle multiple concurrent clients.</p>
                                <p>We are already familiar with &#8220;Multi-Threaded Request-Response&#8221; architecture because it&#8217;s used by most of the web application frameworks. But why Node JS Platform has chosen different architecture to develop web applications. What is the major differences between multithreaded and single threaded event loop architecture.</p>
                                <p>Any web developer can learn Node JS and develop applications very easily. However without understanding Node JS Internals, we cannot design and develop Node JS Applications very well. So before starting developing Node JS Applications, first we will learn Node JS Platform internals.</p>
                                <div style="float:none;margin:10px 0 10px 0;text-align:center;">
                                    <div data-type="ad" data-publisher="journaldev.com" data-format="300x250" data-zone="jd_post_mid_300x250"></div>
                                </div>
                                <h3>Node JS Platform</h3>
                                <p>Node JS Platform uses &#8220;Single Threaded Event Loop&#8221; architecture to handle multiple concurrent clients. Then how it really handles concurrent client requests without using multiple threads. What is Event Loop model? We will discuss these concepts one by one.</p>
                                <p>Before discussing &#8220;Single Threaded Event Loop&#8221; architecture, first we will go through famous &#8220;Multi-Threaded Request-Response&#8221; architecture.</p>
                                <h3>Traditional Web Application Processing Model</h3>
                                <p>Any Web Application developed without Node JS, typically follows &#8220;Multi-Threaded Request-Response&#8221; model. Simply we can call this model as Request/Response Model.</p>
                                <div style="float:none;margin:10px 0 10px 0;text-align:center;">
                                    <div id="125661118">
                                        <script type="text/javascript">
                                            try {
                                                window._mNHandle.queue.push(function() {
                                                    window._mNDetails.loadTag("125661118", "336x280", "125661118");
                                                });
                                            } catch (error) {}
                                        </script>
                                    </div>
                                </div>
                                <p>Client sends request to the server, then server do some processing based on clients request, prepare response and send it back to the client.</p>
                                <p>This model uses HTTP protocol. As HTTP is a Stateless Protocol, this Request/Response model is also Stateless Model. So we can call this as Request/Response Stateless Model.</p>
                                <p>However, this model uses Multiple Threads to handle concurrent client requests. Before discussing this model internals, first go through the diagram below.</p>
                                <p><strong>Request/Response Model Processing Steps</strong>:</p>
                                <ul>
                                    <li>Clients Send request to Web Server.</li>
                                    <li>Web Server internally maintains a Limited Thread pool to provide services to the Client Requests.</li>
                                    <li>Web Server is in infinite Loop and waiting for Client Incoming Requests</li>
                                    <li>Web Server receives those requests.
                                        <ul>
                                            <li>Web Server pickup one Client Request</li>
                                            <li>Pickup one Thread from Thread pool</li>
                                            <li>Assign this Thread to Client Request</li>
                                            <li>This Thread will take care of reading Client request, processing Client request, performing any Blocking IO Operations (if required) and preparing Response</li>
                                            <li>This Thread sends prepared response back to the Web Server</li>
                                            <li>Web Server in-turn sends this response to the respective Client.</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p>Server waits in Infinite loop and performs all sub-steps as mentioned above for all n clients. That means this model creates one Thread per Client request.</p>
                                <p>If more clients requests require Blocking IO Operations, then almost all threads are busy in preparing their responses. Then remaining clients Requests should wait for longer time.</p>
                                <p>
                                    <a href="https://cdn.journaldev.com/wp-content/uploads/2015/04/Request-Response-Model.png"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-type="image" data-lazy-src="https://cdn.journaldev.com/wp-content/uploads/2015/04/Request-Response-Model-1024x696.png" alt="Request Response Model, Multithreaded request response architecture" width="660" height="449" class="lazy lazy-hidden aligncenter size-large wp-image-7463" data-lazy-srcset="https://cdn.journaldev.com/wp-content/uploads/2015/04/Request-Response-Model-1024x696.png 1024w, https://cdn.journaldev.com/wp-content/uploads/2015/04/Request-Response-Model-450x306.png 450w, https://cdn.journaldev.com/wp-content/uploads/2015/04/Request-Response-Model-700x476.png 700w, https://cdn.journaldev.com/wp-content/uploads/2015/04/Request-Response-Model-150x102.png 150w, https://cdn.journaldev.com/wp-content/uploads/2015/04/Request-Response-Model.png 1041w" data-lazy-sizes="(max-width: 660px) 100vw, 660px" />
                                        <noscript><img src="https://cdn.journaldev.com/wp-content/uploads/2015/04/Request-Response-Model-1024x696.png" alt="Request Response Model, Multithreaded request response architecture" width="660" height="449" class="aligncenter size-large wp-image-7463" srcset="https://cdn.journaldev.com/wp-content/uploads/2015/04/Request-Response-Model-1024x696.png 1024w, https://cdn.journaldev.com/wp-content/uploads/2015/04/Request-Response-Model-450x306.png 450w, https://cdn.journaldev.com/wp-content/uploads/2015/04/Request-Response-Model-700x476.png 700w, https://cdn.journaldev.com/wp-content/uploads/2015/04/Request-Response-Model-150x102.png 150w, https://cdn.journaldev.com/wp-content/uploads/2015/04/Request-Response-Model.png 1041w" sizes="(max-width: 660px) 100vw, 660px" /></noscript>
                                    </a>
                                </p>
                                <p><strong>Diagram Description</strong>:</p>
                                <ul>
                                    <li>Here &#8220;n&#8221; number of Clients Send request to Web Server. Let us assume they are accessing our Web Application concurrently.</li>
                                    <li>Let us assume, our Clients are Client-1, Client-2… and Client-n.</li>
                                    <li>Web Server internally maintains a Limited Thread pool. Let us assume &#8220;m&#8221; number of Threads in Thread pool.</li>
                                    <li>Web Server receives those requests one by one.
                                        <ul>
                                            <li>Web Server pickup Client-1 Request-1, Pickup one Thread T-1 from Thread pool and assign this request to Thread T-1
                                                <ul>
                                                    <li>Thread T-1 reads Client-1 Request-1 and process it</li>
                                                    <li>Client-1 Request-1 does not require any Blocking IO Operations</li>
                                                    <li>Thread T-1 does necessary steps and prepares Response-1 and send it back to the Server</li>
                                                    <li>Web Server in-turn send this Response-1 to the Client-1</li>
                                                </ul>
                                        </ul>
                                        <ul>
                                            <li>Web Server pickup another Client-2 Request-2, Pickup one Thread T-2 from Thread pool and assign this request to Thread T-2
                                                <ul>
                                                    <li>Thread T-2 reads Client-1 Request-2 and process it</li>
                                                    <li>Client-1 Request-2 does not require any Blocking IO Operations</li>
                                                    <li>Thread T-2 does necessary steps and prepares Response-2 and send it back to the Server</li>
                                                    <li>Web Server in-turn send this Response-2 to the Client-2</li>
                                                </ul>
                                        </ul>
                                        <ul>
                                            <li>Web Server pickup another Client-n Request-n, Pickup one Thread T-n from Thread pool and assign this request to Thread T-n
                                                <ul>
                                                    <li>Thread T-n reads Client-n Request-n and process it</li>
                                                    <li>Client-n Request-n require heavy Blocking IO and computation Operations</li>
                                                    <li>Thread T-n takes more time to interact with external systems, does necessary steps and prepares Response-n and send it back to the Server</li>
                                                    <li>Web Server in-turn send this Response-n to the Client-n</li>
                                                </ul>
                                        </ul>
                                        <p>If &#8220;n&#8221; is greater than &#8220;m&#8221; (Most of the times, its true), then server assigns Threads to Client Requests up to available Threads. After all m Threads are utilized, then remaining Client’s Request should wait in the Queue until some of the busy Threads finish their Request-Processing Job and free to pick up next Request.</p>
                                        <p>If those threads are busy with Blocking IO Tasks (For example, interacting with Database, file system, JMS Queue, external services etc.) for longer time, then remaining clients should wait longer time.</li>
                                            <li>Once Threads are free in Thread Pool and available for next tasks, Server pickup those threads and assign them to remaining Client Requests.</li>
                                            <li>Each Thread utilizes many resources like memory etc. So before going those Threads from busy state to waiting state, they should release all acquired resources.</li>
                                </ul>
                                <p><strong>Drawbacks of Request/Response Stateless Model</strong>:</p>
                                <ul>
                                    <li>Handling more and more concurrent client’s request is bit tough.</li>
                                    <li>When Concurrent client requests increases, then it should use more and more threads, finally they eat up more memory.</li>
                                    <li>Sometimes, Client’s Request should wait for available threads to process their requests.</li>
                                    <li>Wastes time in processing Blocking IO Tasks.</li>
                                </ul>
                                <h3>Node JS Architecture &#8211; Single Threaded Event Loop</h3>
                                <p>Node JS Platform does not follow Request/Response Multi-Threaded Stateless Model. It follows Single Threaded with Event Loop Model. Node JS Processing model mainly based on Javascript Event based model with Javascript callback mechanism.</p>
                                <div style="float:none;margin:10px 0 10px 0;text-align:center;">
                                    <div id="482285384">
                                        <script type="text/javascript">
                                            try {
                                                window._mNHandle.queue.push(function() {
                                                    window._mNDetails.loadTag("482285384", "336x280", "482285384");
                                                });
                                            } catch (error) {}
                                        </script>
                                    </div>
                                </div>
                                <p>You should have some good knowledge about how Javascript events and callback mechanism works. If you don’t know, Please go through those posts or tutorials first and get some idea before moving to the next step in this post.</p>
                                <p>As Node JS follows this architecture, it can handle more and more concurrent client requests very easily. Before discussing this model internals, first go through the diagram below.</p>
                                <p>I tried to design this diagram to explain each and every point of Node JS Internals.</p>
                                <p>The main heart of Node JS Processing model is &#8220;Event Loop&#8221;. If we understand this, then it is very easy to understand the Node JS Internals.</p>
                                <p><strong>Single Threaded Event Loop Model Processing Steps</strong>:</p>
                                <ul>
                                    <li>Clients Send request to Web Server.</li>
                                    <li>Node JS Web Server internally maintains a Limited Thread pool to provide services to the Client Requests.</li>
                                    <li>Node JS Web Server receives those requests and places them into a Queue. It is known as &#8220;Event Queue&#8221;.</li>
                                    <li>Node JS Web Server internally has a Component, known as &#8220;Event Loop&#8221;. Why it got this name is that it uses indefinite loop to receive requests and process them. (See some Java Pseudo code to understand this below).</li>
                                    <li>Event Loop uses Single Thread only. It is main heart of Node JS Platform Processing Model.</li>
                                    <li>Even Loop checks any Client Request is placed in Event Queue. If no, then wait for incoming requests for indefinitely.</li>
                                    <li>If yes, then pick up one Client Request from Event Queue
                                        <ul>
                                            <li>Starts process that Client Request</li>
                                            <li>If that Client Request Does Not requires any Blocking IO Operations, then process everything, prepare response and send it back to client.</li>
                                            <li>If that Client Request requires some Blocking IO Operations like interacting with Database, File System, External Services then it will follow different approach
                                                <ul>
                                                    <li>Checks Threads availability from Internal Thread Pool</li>
                                                    <li>Picks up one Thread and assign this Client Request to that thread.</li>
                                                    <li>That Thread is responsible for taking that request, process it, perform Blocking IO operations, prepare response and send it back to the Event Loop</li>
                                                    <li>Event Loop in turn, sends that Response to the respective Client.</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <p>
                                    <a href="https://cdn.journaldev.com/wp-content/uploads/2015/04/NodeJS-Single-Thread-Event-Model.png"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-type="image" data-lazy-src="https://cdn.journaldev.com/wp-content/uploads/2015/04/NodeJS-Single-Thread-Event-Model-1024x768.png" alt="NodeJS-Single-Thread-Event-Model" width="660" height="495" class="lazy lazy-hidden aligncenter size-large wp-image-7465" data-lazy-srcset="https://cdn.journaldev.com/wp-content/uploads/2015/04/NodeJS-Single-Thread-Event-Model-1024x768.png 1024w, https://cdn.journaldev.com/wp-content/uploads/2015/04/NodeJS-Single-Thread-Event-Model-450x338.png 450w, https://cdn.journaldev.com/wp-content/uploads/2015/04/NodeJS-Single-Thread-Event-Model-700x525.png 700w, https://cdn.journaldev.com/wp-content/uploads/2015/04/NodeJS-Single-Thread-Event-Model-150x113.png 150w, https://cdn.journaldev.com/wp-content/uploads/2015/04/NodeJS-Single-Thread-Event-Model.png 1062w" data-lazy-sizes="(max-width: 660px) 100vw, 660px" />
                                        <noscript><img src="https://cdn.journaldev.com/wp-content/uploads/2015/04/NodeJS-Single-Thread-Event-Model-1024x768.png" alt="NodeJS-Single-Thread-Event-Model" width="660" height="495" class="aligncenter size-large wp-image-7465" srcset="https://cdn.journaldev.com/wp-content/uploads/2015/04/NodeJS-Single-Thread-Event-Model-1024x768.png 1024w, https://cdn.journaldev.com/wp-content/uploads/2015/04/NodeJS-Single-Thread-Event-Model-450x338.png 450w, https://cdn.journaldev.com/wp-content/uploads/2015/04/NodeJS-Single-Thread-Event-Model-700x525.png 700w, https://cdn.journaldev.com/wp-content/uploads/2015/04/NodeJS-Single-Thread-Event-Model-150x113.png 150w, https://cdn.journaldev.com/wp-content/uploads/2015/04/NodeJS-Single-Thread-Event-Model.png 1062w" sizes="(max-width: 660px) 100vw, 660px" /></noscript>
                                    </a>
                                </p>
                                <p><strong>Diagram Description</strong>:</p>
                                <ul>
                                    <li>Here &#8220;n&#8221; number of Clients Send request to Web Server. Let us assume they are accessing our Web Application concurrently.</li>
                                    <li>Let us assume, our Clients are Client-1, Client-2… and Client-n.</li>
                                    <li>Web Server internally maintains a Limited Thread pool. Let us assume &#8220;m&#8221; number of Threads in Thread pool.</li>
                                    <li>Node JS Web Server receives Client-1, Client-2… and Client-n Requests and places them in the Event Queue.</li>
                                    <li>Node JS Even Loop Picks up those requests one by one.
                                        <ul>
                                            <li>Even Loop pickups Client-1 Request-1
                                                <ul>
                                                    <li> Checks whether Client-1 Request-1 does require any Blocking IO Operations or takes more time for complex computation tasks.</li>
                                                    <li>As this request is simple computation and Non-Blocking IO task, it does not require separate Thread to process it.</li>
                                                    <li>Event Loop process all steps provided in that Client-1 Request-1 Operation (Here Operations means Java Script’s functions) and prepares Response-1</li>
                                                    <li>Event Loop sends Response-1 to Client-1</li>
                                                </ul>
                                            </li>
                                            <li>Even Loop pickups Client-2 Request-2
                                                <ul>
                                                    <li> Checks whether Client-2 Request-2does require any Blocking IO Operations or takes more time for complex computation tasks.</li>
                                                    <li>As this request is simple computation and Non-Blocking IO task, it does not require separate Thread to process it.</li>
                                                    <li>Event Loop process all steps provided in that Client-2 Request-2 Operation and prepares Response-2</li>
                                                    <li>Event Loop sends Response-2 to Client-2</li>
                                                </ul>
                                            </li>
                                            <li>Even Loop pickups Client-n Request-n
                                                <ul>
                                                    <li> Checks whether Client-n Request-n does require any Blocking IO Operations or takes more time for complex computation tasks.</li>
                                                    <li>As this request is very complex computation or Blocking IO task, Even Loop does not process this request.</li>
                                                    <li>Event Loop picks up Thread T-1 from Internal Thread pool and assigns this Client-n Request-n to Thread T-1</li>
                                                    <li>Thread T-1 reads and process Request-n, perform necessary Blocking IO or Computation task, and finally prepares Response-n</li>
                                                    <li>Thread T-1 sends this Response-n to Event Loop</li>
                                                    <li>Event Loop in turn, sends this Response-n to Client-n</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <p>Here Client Request is a call to one or more Java Script Functions. Java Script Functions may call other functions or may utilize its Callback functions nature.</p>
                                <p>So Each Client Request looks like as shown below:</p>
                                <p>
                                    <a href="https://cdn.journaldev.com/wp-content/uploads/2015/04/javascript-callback-mechanism.png"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-type="image" data-lazy-src="https://cdn.journaldev.com/wp-content/uploads/2015/04/javascript-callback-mechanism.png" alt="Node JS Architecture, Single Threaded Event Loop" width="579" height="102" class="lazy lazy-hidden aligncenter size-large wp-image-7470" data-lazy-srcset="https://cdn.journaldev.com/wp-content/uploads/2015/04/javascript-callback-mechanism.png 579w, https://cdn.journaldev.com/wp-content/uploads/2015/04/javascript-callback-mechanism-450x79.png 450w, https://cdn.journaldev.com/wp-content/uploads/2015/04/javascript-callback-mechanism-150x26.png 150w" data-lazy-sizes="(max-width: 579px) 100vw, 579px" />
                                        <noscript><img src="https://cdn.journaldev.com/wp-content/uploads/2015/04/javascript-callback-mechanism.png" alt="Node JS Architecture, Single Threaded Event Loop" width="579" height="102" class="aligncenter size-large wp-image-7470" srcset="https://cdn.journaldev.com/wp-content/uploads/2015/04/javascript-callback-mechanism.png 579w, https://cdn.journaldev.com/wp-content/uploads/2015/04/javascript-callback-mechanism-450x79.png 450w, https://cdn.journaldev.com/wp-content/uploads/2015/04/javascript-callback-mechanism-150x26.png 150w" sizes="(max-width: 579px) 100vw, 579px" /></noscript>
                                    </a>
                                </p>
                                <p>For Example:</p><pre class="prettyprint">
function1(function2,callback1);
function2(function3,callback2);
function3(input-params);
</pre>
                                <p><strong>NOTE</strong>: &#8211;</p>
                                <ul>
                                    <li>If you don’t understand how these functions are executed, then I feel you are not familiar with Java Script Functions and Callback mechanism.</li>
                                    <li>We should have some idea about Java Script functions and Callback mechanisms. Please go through some online tutorial before starting our Node JS Application development.</li>
                                </ul>
                                <h3>Node JS Architecture &#8211; Single Threaded Event Loop Advantages</h3>
                                <ol>
                                    <li>Handling more and more concurrent client’s request is very easy.</li>
                                    <li>Even though our Node JS Application receives more and more Concurrent client requests, there is no need of creating more and more threads, because of Event loop.</li>
                                    <li>Node JS application uses less Threads so that it can utilize only less resources or memory</li>
                                </ol>
                                <h3>Event Loop Pseudo Code</h3>
                                <p>As I’m a Java Developer, I will try to explain &#8220;How Event Loop works&#8221; in Java terminology. It is not in pure Java code, I guess everyone can understand this. If you face any issues in understanding this, please drop me a comment.</p><pre class="prettyprint">
public class EventLoop {
while(true){
        	if(Event Queue receives a JavaScript Function Call){
        		ClientRequest request = EventQueue.getClientRequest();
                            If(request requires BlokingIO or takes more computation time)
                                    Assign request to Thread T1
                            Else
                                  Process and Prepare response
                  }
            }
} 
</pre>
                                <p>That&#8217;s all for Node JS Architecture and Node JS single threaded event loop.</p>
                                <div style="float:none;margin:0px 0 0px 0;text-align:center;">
                                    <ins class="adsbygoogle" style="display:block" data-ad-format="autorelaxed" data-ad-client="ca-pub-5143693538742787" data-ad-slot="3941417857"></ins>
                                    <script>
                                        (adsbygoogle = window.adsbygoogle || []).push({});
                                    </script>
                                </div>
                                <div style="font-size:0px;height:0px;line-height:0px;margin:0;padding:0;clear:both"></div>
                            </div>
                            <footer class="entry-footer">
                                <p class="entry-meta"><span class="entry-categories">Filed Under: <a
href="https://www.journaldev.com/node-js" rel="category tag">Node.js</a></span></p>
                            </footer>
                        </article>
                        <section class="author-box" itemprop="author" itemscope itemtype="https://schema.org/Person">
                            <h4 class="author-box-title">About <span
itemprop="name">Rambabu Posa</span></h4>
                            <div class="author-box-content" itemprop="description">
                                <p>Rambabu Posa have 12+ years of RICH experience as Sr Agile Lead Java/Scala/BigData/NoSQL Developer. Apart from Java, he is good at Spring4, Hibernate4, MEAN Stack, RESTful WebServices, NoSQL, BigData Hadoop Stack, Cloud, Scala, Groovy Grails, Play Framework, TDD, BDD,Agile,DevOps and much more. His hobbies are Developing software, Learning new technologies, Love Walking, Reading Books, Watching TV and obviously sharing his knowledge through writing articles on JournalDev.</p>
                            </div>
                        </section>
                        <div class="adjacent-entry-pagination pagination">
                            <div class="pagination-previous alignleft"><a href="https://www.journaldev.com/7456/download-install-scala-linux-unix-windows" rel="prev">&#x000AB; Download, Install Scala on Linux, Unix, Windows</a></div>
                            <div class="pagination-next alignright"><a href="https://www.journaldev.com/7473/best-10-web-development-tools-and-services-for-2015" rel="next">Best 10+ Web Development Tools and Services for 2015 &#x000BB;</a></div>
                        </div>
                        <div class="entry-comments" id="comments">
                            <h3>Comments</h3>
                            <ol class="comment-list">
                                <li class="comment even thread-even depth-1" id="comment-39716">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">sameer</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2017-10-12T23:54:37+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-39716" class="comment-time-link" itemprop="url">October 12, 2017 at 11:54 pm</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Are the [Event Loop Processing] and the [Incoming Request Insertion In Queue] handled in same thread?</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-39716' onclick='return addComment.moveForm( "comment-39716", "39716", "respond", "7462" )' aria-label='Reply to sameer'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-39623">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">monika</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2017-10-02T06:25:57+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-39623" class="comment-time-link" itemprop="url">October 2, 2017 at 6:25 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>very helpful.. thnku.. 🙂</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-39623' onclick='return addComment.moveForm( "comment-39623", "39623", "respond", "7462" )' aria-label='Reply to monika'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment even thread-even depth-1" id="comment-39466">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Hemanth kumar V</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2017-09-16T10:16:52+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-39466" class="comment-time-link" itemprop="url">September 16, 2017 at 10:16 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Really Amazing. what a article!!. Great Explanation and cleared all my doubts. Thanks</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-39466' onclick='return addComment.moveForm( "comment-39466", "39466", "respond", "7462" )' aria-label='Reply to Hemanth kumar V'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-39419">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Srimal</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2017-09-08T21:19:40+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-39419" class="comment-time-link" itemprop="url">September 8, 2017 at 9:19 pm</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Thank You. Well explained.</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-39419' onclick='return addComment.moveForm( "comment-39419", "39419", "respond", "7462" )' aria-label='Reply to Srimal'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment even thread-even depth-1" id="comment-39396">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Mylara</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2017-09-07T04:22:56+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-39396" class="comment-time-link" itemprop="url">September 7, 2017 at 4:22 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Good Explanation !!!!!!!!</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-39396' onclick='return addComment.moveForm( "comment-39396", "39396", "respond", "7462" )' aria-label='Reply to Mylara'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-39394">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Shagun Pruthi</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2017-09-06T22:54:51+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-39394" class="comment-time-link" itemprop="url">September 6, 2017 at 10:54 pm</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Great Explanation by the author. I understood each word of it and now I can explain well the Internal Architecture of Node Js. Thanks .</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-39394' onclick='return addComment.moveForm( "comment-39394", "39394", "respond", "7462" )' aria-label='Reply to Shagun Pruthi'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment even thread-even depth-1" id="comment-39386">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Allaudhin</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2017-09-06T03:46:57+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-39386" class="comment-time-link" itemprop="url">September 6, 2017 at 3:46 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>To good article! Excellent !!!!!!</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-39386' onclick='return addComment.moveForm( "comment-39386", "39386", "respond", "7462" )' aria-label='Reply to Allaudhin'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-39352">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Rafael</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2017-09-01T14:17:10+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-39352" class="comment-time-link" itemprop="url">September 1, 2017 at 2:17 pm</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>This is the absolutely the best answer I&#8217;ve found! Congrats Rambabu, great job man. You&#8217;ve literally improved my day 😀</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-39352' onclick='return addComment.moveForm( "comment-39352", "39352", "respond", "7462" )' aria-label='Reply to Rafael'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment even thread-even depth-1" id="comment-39321">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">qwdqd</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2017-08-29T11:44:34+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-39321" class="comment-time-link" itemprop="url">August 29, 2017 at 11:44 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Great Job!
                                                <br /> Just a minor suggestion; please include some nodeJS codes and explain there execution. It would help some people who are a little bit familiar with node.
                                                <br /> Thanks.
                                            </p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-39321' onclick='return addComment.moveForm( "comment-39321", "39321", "respond", "7462" )' aria-label='Reply to qwdqd'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-38752">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Harsha Vardhan</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2017-07-26T00:24:13+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-38752" class="comment-time-link" itemprop="url">July 26, 2017 at 12:24 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>It is easily can understand by any person . It is very useful for me . Thank you for your post.</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-38752' onclick='return addComment.moveForm( "comment-38752", "38752", "respond", "7462" )' aria-label='Reply to Harsha Vardhan'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment even thread-even depth-1" id="comment-38519">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Rajesh S</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2017-06-29T20:26:14+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-38519" class="comment-time-link" itemprop="url">June 29, 2017 at 8:26 pm</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Just simply explained. Great article 🙂</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-38519' onclick='return addComment.moveForm( "comment-38519", "38519", "respond", "7462" )' aria-label='Reply to Rajesh S'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-38176">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Rahul Kumar Saini</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2017-05-17T00:41:55+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-38176" class="comment-time-link" itemprop="url">May 17, 2017 at 12:41 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Hi
                                                <br /> I&#8217;m MEAN stack Developer, this article helps to me a lot and I was get stuck this kind of problem. and read about many articles ,tutorials and watch many videos.
                                                <br /> But this tutorial remove all doubts. Thanks !
                                                <br /> But I have got confused in some point(Single thread in nodeJS) when client make a request to server then this server enters into event queue then event loop start execution on this and check this request will take blocking or non blocking it means take more time or not. If it takes then thread come to picture and this request assigned with a thread.And Now this thread start task on this request.
                                                <br /> But I want to discuss here, Request come into first event loop or thread. On the other hand this request first handled by thread and then event loop.</p>
                                            <p>Please help me
                                                <br /> Email Id &#8211; <a href="mailto:rahulsaini202@gmail.com">rahulsaini202@gmail.com</a></p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-38176' onclick='return addComment.moveForm( "comment-38176", "38176", "respond", "7462" )' aria-label='Reply to Rahul Kumar Saini'>Reply</a></div>
                                    </article>
                                    <ul class="children">
                                        <li class="comment even depth-2" id="comment-39024">
                                            <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                                <header class="comment-header">
                                                    <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                        <span itemprop="name">arpit</span> <span class="says">says</span></p>
                                                    <p class="comment-meta">
                                                        <time class="comment-time" datetime="2017-08-09T03:16:06+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-39024" class="comment-time-link" itemprop="url">August 9, 2017 at 3:16 am</a></time>
                                                    </p>
                                                </header>
                                                <div class="comment-content" itemprop="text">
                                                    <p>request comes to queue , from queue if event loop is not processing any request goes to loop , if I/O blocking operation is present , it goes to thread , thread performs all the operations and sends back the data to event loop and from event loop it again goes back to the client</p>
                                                </div>
                                                <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-39024' onclick='return addComment.moveForm( "comment-39024", "39024", "respond", "7462" )' aria-label='Reply to arpit'>Reply</a></div>
                                            </article>
                                            <ul class="children">
                                                <li class="comment odd alt depth-3" id="comment-39377">
                                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                                        <header class="comment-header">
                                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                                <span itemprop="name">Dilesh</span> <span class="says">says</span></p>
                                                            <p class="comment-meta">
                                                                <time class="comment-time" datetime="2017-09-04T23:06:18+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-39377" class="comment-time-link" itemprop="url">September 4, 2017 at 11:06 pm</a></time>
                                                            </p>
                                                        </header>
                                                        <div class="comment-content" itemprop="text">
                                                            <p>hey what&#8217;s that t-1,t-2,t-3&#8230;&#8230;.t-n in node js architecture as Node js Internal Thread Pool ?</p>
                                                        </div>
                                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-39377' onclick='return addComment.moveForm( "comment-39377", "39377", "respond", "7462" )' aria-label='Reply to Dilesh'>Reply</a></div>
                                                    </article>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="comment even thread-even depth-1" id="comment-38138">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Anantha Rambabu Gunakala</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2017-05-11T00:31:52+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-38138" class="comment-time-link" itemprop="url">May 11, 2017 at 12:31 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Nicely Explained</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-38138' onclick='return addComment.moveForm( "comment-38138", "38138", "respond", "7462" )' aria-label='Reply to Anantha Rambabu Gunakala'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-38015">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Jitendra kumar rajput</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2017-04-25T23:21:18+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-38015" class="comment-time-link" itemprop="url">April 25, 2017 at 11:21 pm</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Great article very good explanation 🙂 thank you so much.</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-38015' onclick='return addComment.moveForm( "comment-38015", "38015", "respond", "7462" )' aria-label='Reply to Jitendra kumar rajput'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment even thread-even depth-1" id="comment-38013">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Nilesh Patil</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2017-04-25T05:34:40+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-38013" class="comment-time-link" itemprop="url">April 25, 2017 at 5:34 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Awesome explanation 🙂 thank you so much.</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-38013' onclick='return addComment.moveForm( "comment-38013", "38013", "respond", "7462" )' aria-label='Reply to Nilesh Patil'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-37754">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Umesh</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2017-03-21T06:40:29+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-37754" class="comment-time-link" itemprop="url">March 21, 2017 at 6:40 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>great article ..i understood very well</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-37754' onclick='return addComment.moveForm( "comment-37754", "37754", "respond", "7462" )' aria-label='Reply to Umesh'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment even thread-even depth-1" id="comment-37608">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">micky</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2017-03-01T02:02:37+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-37608" class="comment-time-link" itemprop="url">March 1, 2017 at 2:02 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Awesome explanation !! thanks</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-37608' onclick='return addComment.moveForm( "comment-37608", "37608", "respond", "7462" )' aria-label='Reply to micky'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-37542">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Arularasan</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2017-02-21T11:07:53+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-37542" class="comment-time-link" itemprop="url">February 21, 2017 at 11:07 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>I am understanding the event loop concepts, thanks</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-37542' onclick='return addComment.moveForm( "comment-37542", "37542", "respond", "7462" )' aria-label='Reply to Arularasan'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment even thread-even depth-1" id="comment-37504">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Juhi</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2017-02-17T03:06:12+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-37504" class="comment-time-link" itemprop="url">February 17, 2017 at 3:06 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Awesome explanation !! Thanks a ton for writing this one.</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-37504' onclick='return addComment.moveForm( "comment-37504", "37504", "respond", "7462" )' aria-label='Reply to Juhi'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-37370">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Sam</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2017-01-31T03:16:58+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-37370" class="comment-time-link" itemprop="url">January 31, 2017 at 3:16 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>How does node.js know that the function requires IO operations?</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-37370' onclick='return addComment.moveForm( "comment-37370", "37370", "respond", "7462" )' aria-label='Reply to Sam'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment even thread-even depth-1" id="comment-36886">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Rishabh</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2016-11-21T04:30:19+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-36886" class="comment-time-link" itemprop="url">November 21, 2016 at 4:30 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>nice article but i will be awesome if we find all the above andwers</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-36886' onclick='return addComment.moveForm( "comment-36886", "36886", "respond", "7462" )' aria-label='Reply to Rishabh'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-36434">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Nikhil</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2016-09-26T10:19:54+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-36434" class="comment-time-link" itemprop="url">September 26, 2016 at 10:19 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Great article!!!! In very simple language very clean and point to point description. I have one question as in normal web server also the thread pool(M) and if request number N &gt; M then request(Client ) need to wait but in Node.js also there is a internal thread pool and event loop pick thread form thread pool if IO blocking is required. If Node.js also using thread from internal thread pool then it is possible that the thread count is less than the number of incoming request.</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-36434' onclick='return addComment.moveForm( "comment-36434", "36434", "respond", "7462" )' aria-label='Reply to Nikhil'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment even thread-even depth-1" id="comment-36051">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Texas Racher</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2016-08-13T09:39:33+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-36051" class="comment-time-link" itemprop="url">August 13, 2016 at 9:39 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Nice reading&#8230; to know internals of Node JS.</p>
                                            <p>Concept of Cloud computing Architecture is not mentioned and why NodeJS is better in cloud based apps. most of questions about n &gt; m will be answered with cloud.</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-36051' onclick='return addComment.moveForm( "comment-36051", "36051", "respond", "7462" )' aria-label='Reply to Texas Racher'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-36022">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Bhanu K</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2016-08-10T21:50:09+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-36022" class="comment-time-link" itemprop="url">August 10, 2016 at 9:50 pm</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>This article brings where NodeJS surpasses other web-servers. It&#8217;s basically the IO intensive operations where NodeJS benefits.
                                                <br />
                                                <a href="https://dzone.com/articles/quick-introduction-how-nodejs" rel="nofollow">https://dzone.com/articles/quick-introduction-how-nodejs</a>
                                                <br /> While when it comes to data crunching etc., NodeJS is not the best solution out there.</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-36022' onclick='return addComment.moveForm( "comment-36022", "36022", "respond", "7462" )' aria-label='Reply to Bhanu K'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment even thread-even depth-1" id="comment-35803">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">abhishek</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2016-07-20T05:56:29+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-35803" class="comment-time-link" itemprop="url">July 20, 2016 at 5:56 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Here we are calling separate threads as a event queue . I don&#8217;t understand, event queue will consume memory as well then how it take less memory in comparison to threads.</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-35803' onclick='return addComment.moveForm( "comment-35803", "35803", "respond", "7462" )' aria-label='Reply to abhishek'>Reply</a></div>
                                    </article>
                                    <ul class="children">
                                        <li class="comment odd alt depth-2" id="comment-37809">
                                            <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                                <header class="comment-header">
                                                    <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                        <span itemprop="name">Dariusz</span> <span class="says">says</span></p>
                                                    <p class="comment-meta">
                                                        <time class="comment-time" datetime="2017-03-28T06:33:52+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-37809" class="comment-time-link" itemprop="url">March 28, 2017 at 6:33 am</a></time>
                                                    </p>
                                                </header>
                                                <div class="comment-content" itemprop="text">
                                                    <p>In a single thread (event loop) will consume memory needed to handle a one request at time. In multithreaded system it will need the memory that is a sum of the memory required for each request running parallelly in separate threads.</p>
                                                </div>
                                                <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-37809' onclick='return addComment.moveForm( "comment-37809", "37809", "respond", "7462" )' aria-label='Reply to Dariusz'>Reply</a></div>
                                            </article>
                                        </li>
                                    </ul>
                                </li>
                                <li class="comment even thread-odd thread-alt depth-1" id="comment-35718">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">vikas bansal</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2016-07-15T06:21:52+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-35718" class="comment-time-link" itemprop="url">July 15, 2016 at 6:21 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>this article let me with some questions like what will happen if Node.Js connection pool is totally consumed and How does node know that the request is going to take some time so assign it a thread?</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-35718' onclick='return addComment.moveForm( "comment-35718", "35718", "respond", "7462" )' aria-label='Reply to vikas bansal'>Reply</a></div>
                                    </article>
                                    <ul class="children">
                                        <li class="comment odd alt depth-2" id="comment-37308">
                                            <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                                <header class="comment-header">
                                                    <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                        <span itemprop="name">Bidisha</span> <span class="says">says</span></p>
                                                    <p class="comment-meta">
                                                        <time class="comment-time" datetime="2017-01-22T03:28:04+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-37308" class="comment-time-link" itemprop="url">January 22, 2017 at 3:28 am</a></time>
                                                    </p>
                                                </header>
                                                <div class="comment-content" itemprop="text">
                                                    <p>Node never knows about request time. This is asynchronous process of NodeJs is totally done by the developers with the help of callbacks and event emitters only,</p>
                                                    <p>Note: This article have given a high level view of the NodeJS architecture. To understand it clearly, one have to go through the basic concept of call backs and events.</p>
                                                </div>
                                                <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-37308' onclick='return addComment.moveForm( "comment-37308", "37308", "respond", "7462" )' aria-label='Reply to Bidisha'>Reply</a></div>
                                            </article>
                                            <ul class="children">
                                                <li class="comment even depth-3" id="comment-38480">
                                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                                        <header class="comment-header">
                                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                                <span itemprop="name">lakshay</span> <span class="says">says</span></p>
                                                            <p class="comment-meta">
                                                                <time class="comment-time" datetime="2017-06-27T12:11:28+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-38480" class="comment-time-link" itemprop="url">June 27, 2017 at 12:11 pm</a></time>
                                                            </p>
                                                        </header>
                                                        <div class="comment-content" itemprop="text">
                                                            <p>Hi Bidisha!</p>
                                                            <p>You are right by saying the &#8220;asynchronous process of NodeJs is totally done by the developers with the help of callbacks and event emitters only&#8221;.</p>
                                                            <p>Say we as a developers,made the request async but the internal thread pool is all consumed.What will happen in that scenarios?</p>
                                                        </div>
                                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-38480' onclick='return addComment.moveForm( "comment-38480", "38480", "respond", "7462" )' aria-label='Reply to lakshay'>Reply</a></div>
                                                    </article>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="comment odd alt thread-even depth-1" id="comment-35476">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">abby</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2016-06-28T22:05:55+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-35476" class="comment-time-link" itemprop="url">June 28, 2016 at 10:05 pm</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>it seems the only difference between &#8220;Traditional Web Application Processing Model&#8221; and node.js is that node.js can determine whether a request is blocking or not.</p>
                                            <p>&#8211; they both have a thread pool
                                                <br /> &#8211; they both handle blocking IO by picking up a idle thread
                                                <br /> &#8211; they both have a manager thread</p>
                                            <p>what different is: node.js has a event queue.</p>
                                            <p>am I right?</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-35476' onclick='return addComment.moveForm( "comment-35476", "35476", "respond", "7462" )' aria-label='Reply to abby'>Reply</a></div>
                                    </article>
                                    <ul class="children">
                                        <li class="comment byuser comment-author-rambabu bypostauthor even depth-2" id="comment-35484">
                                            <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                                <header class="comment-header">
                                                    <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                        <span itemprop="name"><a
href="https://www.journaldev.com" class="comment-author-link" rel="external nofollow" itemprop="url">Rambabu Posa</a></span> <span class="says">says</span></p>
                                                    <p class="comment-meta">
                                                        <time class="comment-time" datetime="2016-06-29T06:32:34+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-35484" class="comment-time-link" itemprop="url">June 29, 2016 at 6:32 am</a></time>
                                                    </p>
                                                </header>
                                                <div class="comment-content" itemprop="text">
                                                    <p>Yes right. If you are familiar with Non-Blocking/Asynchronous servers like JBoss Netty server or languages like Scala/Akka/Play, you can understand it well. Please refer them to get in-depth knowledge.</p>
                                                </div>
                                                <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-35484' onclick='return addComment.moveForm( "comment-35484", "35484", "respond", "7462" )' aria-label='Reply to Rambabu Posa'>Reply</a></div>
                                            </article>
                                        </li>
                                    </ul>
                                </li>
                                <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-34734">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Lalit Kumar</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2016-05-21T08:32:11+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-34734" class="comment-time-link" itemprop="url">May 21, 2016 at 8:32 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>As far as event loop is concerned it is explained well&#8230;</p>
                                            <p>But &#8230;&#8230;. connection of thread performing blocking i/o to libuv calling the callback once event received is not explained which is the heart of node.js</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-34734' onclick='return addComment.moveForm( "comment-34734", "34734", "respond", "7462" )' aria-label='Reply to Lalit Kumar'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment even thread-even depth-1" id="comment-34614">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Jithendranath Gupta Y</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2016-05-01T07:24:42+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-34614" class="comment-time-link" itemprop="url">May 1, 2016 at 7:24 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>if node js has internally m threads and if i get n blocking io requests what will happen when n&gt;m?</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-34614' onclick='return addComment.moveForm( "comment-34614", "34614", "respond", "7462" )' aria-label='Reply to Jithendranath Gupta Y'>Reply</a></div>
                                    </article>
                                    <ul class="children">
                                        <li class="comment odd alt depth-2" id="comment-35477">
                                            <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                                <header class="comment-header">
                                                    <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                        <span itemprop="name">abby</span> <span class="says">says</span></p>
                                                    <p class="comment-meta">
                                                        <time class="comment-time" datetime="2016-06-28T22:08:03+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-35477" class="comment-time-link" itemprop="url">June 28, 2016 at 10:08 pm</a></time>
                                                    </p>
                                                </header>
                                                <div class="comment-content" itemprop="text">
                                                    <p>I have the same question&#8230;</p>
                                                </div>
                                                <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-35477' onclick='return addComment.moveForm( "comment-35477", "35477", "respond", "7462" )' aria-label='Reply to abby'>Reply</a></div>
                                            </article>
                                        </li>
                                    </ul>
                                </li>
                                <li class="comment even thread-odd thread-alt depth-1" id="comment-34563">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Vineesh</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2016-04-23T21:14:41+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-34563" class="comment-time-link" itemprop="url">April 23, 2016 at 9:14 pm</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>The article is very helpful and thank you for sharing this.</p>
                                            <p>I have a doubt, when multiple requests come which all need Blocking IO task the server uses multiple threads right? then how we can say Node is single threaded?</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-34563' onclick='return addComment.moveForm( "comment-34563", "34563", "respond", "7462" )' aria-label='Reply to Vineesh'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment odd alt thread-even depth-1" id="comment-34469">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Rakesh</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2016-04-07T21:39:49+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-34469" class="comment-time-link" itemprop="url">April 7, 2016 at 9:39 pm</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Hi Rambabu,</p>
                                            <p>The post is very well explained. I have one question on the thread pool of the webserver itself not the NodeJS internal threadpool that kicks in when the type of the operation is blocking.</p>
                                            <p>&#8220;Node JS Web Server internally maintains a Limited Thread pool to provide services to the Client Requests.&#8221;</p>
                                            <p>Can you please let me know where to change the thread pool setting of the webserver? What&#8217;s the default pool size? Because I think this is so crucial in handling multiple concurrent client requests and placing them on the Event Queue. I tried looking up I cannot find anything on the threadpool of the webserver and how to change and tune them? Please throw some light on this if you can.</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-34469' onclick='return addComment.moveForm( "comment-34469", "34469", "respond", "7462" )' aria-label='Reply to Rakesh'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment even thread-odd thread-alt depth-1" id="comment-34448">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">rachna</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2016-04-04T10:27:20+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-34448" class="comment-time-link" itemprop="url">April 4, 2016 at 10:27 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>thanks for all your node.js articles, really has helped me get started. one question i have is how does event loop find if the request is blocking or non-blocking, and send it to thread accordingly?</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-34448' onclick='return addComment.moveForm( "comment-34448", "34448", "respond", "7462" )' aria-label='Reply to rachna'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment odd alt thread-even depth-1" id="comment-34308">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Crystal A.</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2016-03-16T08:24:56+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-34308" class="comment-time-link" itemprop="url">March 16, 2016 at 8:24 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Thank you! I am very new to Node and did not understand the logic behind a single thread&#8230;thanks again!</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-34308' onclick='return addComment.moveForm( "comment-34308", "34308", "respond", "7462" )' aria-label='Reply to Crystal A.'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment even thread-odd thread-alt depth-1" id="comment-34164">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">HooRang</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2016-02-23T06:49:49+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-34164" class="comment-time-link" itemprop="url">February 23, 2016 at 6:49 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Thanks you</p>
                                            <p>very helpful</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-34164' onclick='return addComment.moveForm( "comment-34164", "34164", "respond", "7462" )' aria-label='Reply to HooRang'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment odd alt thread-even depth-1" id="comment-34146">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Paddy</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2016-02-20T06:55:22+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-34146" class="comment-time-link" itemprop="url">February 20, 2016 at 6:55 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Thanks a lot. The pictorial depiction does explain things clearly.</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-34146' onclick='return addComment.moveForm( "comment-34146", "34146", "respond", "7462" )' aria-label='Reply to Paddy'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment even thread-odd thread-alt depth-1" id="comment-34140">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Jai</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2016-02-18T22:30:30+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-34140" class="comment-time-link" itemprop="url">February 18, 2016 at 10:30 pm</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Very helpful article. But I have one doubt.</p>
                                            <p>Let suppose we have n concurrent requests coming to our web server. m out of n is non blocking so event loop will process them smoothly. But n-m requests are blocking. And as mentioned it will also maintain a thread pool. Let suppose thread pool contains T threads.</p>
                                            <p>Suppose T=n-m
                                                <br /> Now a new request is coming to web server and it is blocking request.
                                                <br /> So in this scenario how event loop will be non blocking? Wouldn&#8217;t new request have to wait till one of threads to be free?</p>
                                            <p>Is this rare case?</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-34140' onclick='return addComment.moveForm( "comment-34140", "34140", "respond", "7462" )' aria-label='Reply to Jai'>Reply</a></div>
                                    </article>
                                    <ul class="children">
                                        <li class="comment odd alt depth-2" id="comment-34438">
                                            <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                                <header class="comment-header">
                                                    <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                        <span itemprop="name">Jimmy George Thomas</span> <span class="says">says</span></p>
                                                    <p class="comment-meta">
                                                        <time class="comment-time" datetime="2016-04-01T23:45:29+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-34438" class="comment-time-link" itemprop="url">April 1, 2016 at 11:45 pm</a></time>
                                                    </p>
                                                </header>
                                                <div class="comment-content" itemprop="text">
                                                    <p>Yes, the new request would have to wait till a thread becomes available.</p>
                                                </div>
                                                <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-34438' onclick='return addComment.moveForm( "comment-34438", "34438", "respond", "7462" )' aria-label='Reply to Jimmy George Thomas'>Reply</a></div>
                                            </article>
                                        </li>
                                    </ul>
                                </li>
                                <li class="comment even thread-even depth-1" id="comment-34088">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Tat Sean</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2016-02-12T23:50:29+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-34088" class="comment-time-link" itemprop="url">February 12, 2016 at 11:50 pm</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>I am still very confusing on NodeJs event loop as different articles seem to explain things differently. The confusion is when the thread that serves the request finishes processing the request, does it send the response back to the Event loop or to the Event queue instead? If we take a look at the JS event loop, it seems to indeed send the callback to the Task queue and Event loop then picks up the task (callback) from the Task queue.</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-34088' onclick='return addComment.moveForm( "comment-34088", "34088", "respond", "7462" )' aria-label='Reply to Tat Sean'>Reply</a></div>
                                    </article>
                                    <ul class="children">
                                        <li class="comment odd alt depth-2" id="comment-34439">
                                            <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                                <header class="comment-header">
                                                    <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                        <span itemprop="name">Jimmy George Thomas</span> <span class="says">says</span></p>
                                                    <p class="comment-meta">
                                                        <time class="comment-time" datetime="2016-04-01T23:50:00+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-34439" class="comment-time-link" itemprop="url">April 1, 2016 at 11:50 pm</a></time>
                                                    </p>
                                                </header>
                                                <div class="comment-content" itemprop="text">
                                                    <p>Yes, you are correct. The thread queues the callback in the task queue from which the event loop picks it up and proceeds.</p>
                                                </div>
                                                <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-34439' onclick='return addComment.moveForm( "comment-34439", "34439", "respond", "7462" )' aria-label='Reply to Jimmy George Thomas'>Reply</a></div>
                                            </article>
                                        </li>
                                    </ul>
                                </li>
                                <li class="comment even thread-odd thread-alt depth-1" id="comment-33936">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Vinod Kumar Marupu</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2016-01-23T03:33:34+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-33936" class="comment-time-link" itemprop="url">January 23, 2016 at 3:33 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Very Helpfull :-).</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-33936' onclick='return addComment.moveForm( "comment-33936", "33936", "respond", "7462" )' aria-label='Reply to Vinod Kumar Marupu'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment odd alt thread-even depth-1" id="comment-33747">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Raju</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2015-12-23T06:42:40+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-33747" class="comment-time-link" itemprop="url">December 23, 2015 at 6:42 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Good article. Thanks for sharing this.
                                                <br /> It will be nice if you add ode related to how threads (blocking IO) responds back to event queue in your pseudo code</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-33747' onclick='return addComment.moveForm( "comment-33747", "33747", "respond", "7462" )' aria-label='Reply to Raju'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment even thread-odd thread-alt depth-1" id="comment-33250">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">vivek</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2015-09-25T07:18:46+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-33250" class="comment-time-link" itemprop="url">September 25, 2015 at 7:18 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Nice Article,but i need more knowledge of how to build application using node js in PHP or any language &#8230; pls help</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-33250' onclick='return addComment.moveForm( "comment-33250", "33250", "respond", "7462" )' aria-label='Reply to vivek'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment odd alt thread-even depth-1" id="comment-33249">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name"><a
href="http://www.vivekpatel.com" class="comment-author-link" rel="external nofollow" itemprop="url">vivek</a></span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2015-09-25T07:16:59+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-33249" class="comment-time-link" itemprop="url">September 25, 2015 at 7:16 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Nice Article, thanks , for sharing your knowledge we us. i need more knowledge of how to build application using node js in PHP or any language &#8230; pls help</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-33249' onclick='return addComment.moveForm( "comment-33249", "33249", "respond", "7462" )' aria-label='Reply to vivek'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment even thread-odd thread-alt depth-1" id="comment-33060">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Bron1010</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2015-08-27T23:10:39+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-33060" class="comment-time-link" itemprop="url">August 27, 2015 at 11:10 pm</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Its an indeed a great article,
                                                <br /> But I would like to know &#8211;
                                                <br /> 1.the answer of above comment by Abdallah Al-Barmawi
                                                <br /> 2.Can you explain how does clusters work with respect to above explain single threaded model of nodejs. <a href="https://nodejs.org/api/cluster.html" rel="nofollow">https://nodejs.org/api/cluster.html</a>.</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-33060' onclick='return addComment.moveForm( "comment-33060", "33060", "respond", "7462" )' aria-label='Reply to Bron1010'>Reply</a></div>
                                    </article>
                                    <ul class="children">
                                        <li class="comment byuser comment-author-rambabu bypostauthor odd alt depth-2" id="comment-33231">
                                            <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                                <header class="comment-header">
                                                    <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                        <span itemprop="name"><a
href="https://www.journaldev.com" class="comment-author-link" rel="external nofollow" itemprop="url">Rambabu Posa</a></span> <span class="says">says</span></p>
                                                    <p class="comment-meta">
                                                        <time class="comment-time" datetime="2015-09-23T08:06:05+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-33231" class="comment-time-link" itemprop="url">September 23, 2015 at 8:06 am</a></time>
                                                    </p>
                                                </header>
                                                <div class="comment-content" itemprop="text">
                                                    <p>Hi, I will update this post soon by answering your questions</p>
                                                </div>
                                                <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-33231' onclick='return addComment.moveForm( "comment-33231", "33231", "respond", "7462" )' aria-label='Reply to Rambabu Posa'>Reply</a></div>
                                            </article>
                                        </li>
                                    </ul>
                                </li>
                                <li class="comment even thread-even depth-1" id="comment-32989">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Abdallah Al-Barmawi</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2015-08-18T03:01:15+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-32989" class="comment-time-link" itemprop="url">August 18, 2015 at 3:01 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Thank you for this article and this explanation of how node works,</p>
                                            <p>but still i&#8217;m some how confused abut this,</p>
                                            <p>let&#8217;s say that our web server do this operation (none IO operation),
                                                <br /> for example (loop statement that needs 3 seconds to finish or complex validation on data(MVC model))</p>
                                            <p>what will happened if i have let&#8217;s say 1000 concurrent requests?
                                                <br /> does the first request will block the remaining requests until it&#8217;s finished.</p>
                                            <p>and how node determain that this operation(none IO operation) is complex or not?</p>
                                            <p>thanks,</p>
                                            <p>and i hope if we can chat using Skype to discuss it.</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-32989' onclick='return addComment.moveForm( "comment-32989", "32989", "respond", "7462" )' aria-label='Reply to Abdallah Al-Barmawi'>Reply</a></div>
                                    </article>
                                    <ul class="children">
                                        <li class="comment odd alt depth-2" id="comment-33132">
                                            <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                                <header class="comment-header">
                                                    <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                        <span itemprop="name">Sushant</span> <span class="says">says</span></p>
                                                    <p class="comment-meta">
                                                        <time class="comment-time" datetime="2015-09-11T12:03:22+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-33132" class="comment-time-link" itemprop="url">September 11, 2015 at 12:03 pm</a></time>
                                                    </p>
                                                </header>
                                                <div class="comment-content" itemprop="text">
                                                    <p>Good question. Did you find a response to this? If yes please share. Thanks,S</p>
                                                </div>
                                                <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-33132' onclick='return addComment.moveForm( "comment-33132", "33132", "respond", "7462" )' aria-label='Reply to Sushant'>Reply</a></div>
                                            </article>
                                        </li>
                                        <li class="comment byuser comment-author-rambabu bypostauthor even depth-2" id="comment-33230">
                                            <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                                <header class="comment-header">
                                                    <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                        <span itemprop="name"><a
href="https://www.journaldev.com" class="comment-author-link" rel="external nofollow" itemprop="url">Rambabu Posa</a></span> <span class="says">says</span></p>
                                                    <p class="comment-meta">
                                                        <time class="comment-time" datetime="2015-09-23T08:05:32+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-33230" class="comment-time-link" itemprop="url">September 23, 2015 at 8:05 am</a></time>
                                                    </p>
                                                </header>
                                                <div class="comment-content" itemprop="text">
                                                    <p>Hi, I will update this post soon by answering your questions.</p>
                                                </div>
                                                <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-33230' onclick='return addComment.moveForm( "comment-33230", "33230", "respond", "7462" )' aria-label='Reply to Rambabu Posa'>Reply</a></div>
                                            </article>
                                        </li>
                                        <li class="comment odd alt depth-2" id="comment-34440">
                                            <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                                <header class="comment-header">
                                                    <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                        <span itemprop="name">Jimmy George Thomas</span> <span class="says">says</span></p>
                                                    <p class="comment-meta">
                                                        <time class="comment-time" datetime="2016-04-02T00:01:50+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-34440" class="comment-time-link" itemprop="url">April 2, 2016 at 12:01 am</a></time>
                                                    </p>
                                                </header>
                                                <div class="comment-content" itemprop="text">
                                                    <p>Yes, the remaining requests will have to wait till the first request is finished. The way in which the calls are implemented is what decides if it is going to be executed on the main thread or not. You yourself can implement a module that maps internally to non-blocking OS calls and then listen for its completion. Then you would have to queue the corresponding callback in the queue for the event loop to handle.</p>
                                                </div>
                                                <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-34440' onclick='return addComment.moveForm( "comment-34440", "34440", "respond", "7462" )' aria-label='Reply to Jimmy George Thomas'>Reply</a></div>
                                            </article>
                                        </li>
                                    </ul>
                                </li>
                                <li class="comment even thread-odd thread-alt depth-1" id="comment-32818">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Avishek Biswas</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2015-07-22T03:30:36+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-32818" class="comment-time-link" itemprop="url">July 22, 2015 at 3:30 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Great article, thanks , for sharing your knowledge.</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-32818' onclick='return addComment.moveForm( "comment-32818", "32818", "respond", "7462" )' aria-label='Reply to Avishek Biswas'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment odd alt thread-even depth-1" id="comment-32654">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Johnny</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2015-06-19T11:22:07+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-32654" class="comment-time-link" itemprop="url">June 19, 2015 at 11:22 am</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Great article, thanks!</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-32654' onclick='return addComment.moveForm( "comment-32654", "32654", "respond", "7462" )' aria-label='Reply to Johnny'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment even thread-odd thread-alt depth-1" id="comment-32649">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Kittu</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2015-06-18T18:18:12+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-32649" class="comment-time-link" itemprop="url">June 18, 2015 at 6:18 pm</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Nice article.. It is clearly explained.. Comparison with Muti-threaded model helped me to understand node.js very well.. Thank your very much..</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-32649' onclick='return addComment.moveForm( "comment-32649", "32649", "respond", "7462" )' aria-label='Reply to Kittu'>Reply</a></div>
                                    </article>
                                </li>
                                <li class="comment odd alt thread-even depth-1" id="comment-32544">
                                    <article itemprop="comment" itemscope itemtype="https://schema.org/Comment">
                                        <header class="comment-header">
                                            <p class="comment-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                <span itemprop="name">Balavignesh</span> <span class="says">says</span></p>
                                            <p class="comment-meta">
                                                <time class="comment-time" datetime="2015-05-27T23:11:21+00:00" itemprop="datePublished"><a href="https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop#comment-32544" class="comment-time-link" itemprop="url">May 27, 2015 at 11:11 pm</a></time>
                                            </p>
                                        </header>
                                        <div class="comment-content" itemprop="text">
                                            <p>Great article!! I am a full stack developer(fresher) and I did not know this node architecture before. I got rejected in an important interview because I didn&#8217;t know this. Now I understand everything. Thank you for your awesome job Pankaj 🙂</p>
                                        </div>
                                        <div class="comment-reply"><a rel='nofollow' class='comment-reply-link' href='#comment-32544' onclick='return addComment.moveForm( "comment-32544", "32544", "respond", "7462" )' aria-label='Reply to Balavignesh'>Reply</a></div>
                                    </article>
                                </li>
                            </ol>
                        </div>
                        <div id="respond" class="comment-respond">
                            <h3 id="reply-title" class="comment-reply-title">Leave a Reply <small><a
rel="nofollow" id="cancel-comment-reply-link" href="/7462/node-js-architecture-single-threaded-event-loop#respond" style="display:none;">Cancel reply</a></small></h3>
                            <form action="https://www.journaldev.com/wp-comments-post.php" method="post" id="commentform" class="comment-form" novalidate>
                                <p class="comment-notes"><span id="email-notes">Your email address will not be published.</span> Required fields are marked <span class="required">*</span></p>
                                <p class="comment-form-comment">
                                    <label for="comment">Comment</label>
                                    <textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" aria-required="true" required="required"></textarea>
                                </p>
                                <p class="comment-form-author">
                                    <label for="author">Name <span class="required">*</span></label>
                                    <input id="author" name="author" type="text" value="" size="30" maxlength="245" aria-required='true' required='required' />
                                </p>
                                <p class="comment-form-email">
                                    <label for="email">Email <span class="required">*</span></label>
                                    <input id="email" name="email" type="email" value="" size="30" maxlength="100" aria-describedby="email-notes" aria-required='true' required='required' />
                                </p>
                                <p class="comment-form-url">
                                    <label for="url">Website</label>
                                    <input id="url" name="url" type="url" value="" size="30" maxlength="200" />
                                </p>
                                <p class="form-submit">
                                    <input name="submit" type="submit" id="submit" class="submit" value="Post Comment" />
                                    <input type='hidden' name='comment_post_ID' value='7462' id='comment_post_ID' />
                                    <input type='hidden' name='comment_parent' id='comment_parent' value='0' />
                                </p>
                                <p style="display: none;">
                                    <input type="hidden" id="akismet_comment_nonce" name="akismet_comment_nonce" value="6e79791552" />
                                </p>
                                <p class="antispam-group antispam-group-q" style="clear: both;">
                                    <label>Current ye@r <span class="required">*</span></label>
                                    <input type="hidden" name="antspm-a" class="antispam-control antispam-control-a" value="2017" />
                                    <input type="text" name="antspm-q" class="antispam-control antispam-control-q" value="4.4" autocomplete="off" />
                                </p>
                                <p class="antispam-group antispam-group-e" style="display: none;">
                                    <label>Leave this field empty</label>
                                    <input type="text" name="antspm-e-email-url-website" class="antispam-control antispam-control-e" value="" autocomplete="off" />
                                </p>
                                <p style="display: none;">
                                    <input type="hidden" id="ak_js" name="ak_js" value="48" />
                                </p>
                            </form>
                        </div>
                    </main>
                    <aside class="sidebar sidebar-primary widget-area" role="complementary" aria-label="Primary Sidebar" itemscope itemtype="https://schema.org/WPSideBar">
                        <section id="wgs_widget-2" class="widget widget_wgs_widget">
                            <div class="widget-wrap">
                                <div class="wgs_wrapper">
                                    <div class="gcse-searchbox-only" data-resultsUrl="https://www.journaldev.com/search_gcse"></div>
                                </div>
                            </div>
                        </section>
                        <section id="adswidget9-quick-adsense" class="widget lambda_8">
                            <div class="widget-wrap">
                                <div data-type="ad" data-publisher="journaldev.com" data-format="300x250" data-zone="jd_sidebar_300x250"></div>
                            </div>
                        </section>
                        <section id="adswidget8-quick-adsense" class="widget lambda_7">
                            <div class="widget-wrap">
                                <div id="625528707">
                                    <script type="text/javascript">
                                        try {
                                            window._mNHandle.queue.push(function() {
                                                window._mNDetails.loadTag("625528707", "300x250", "625528707");
                                            });
                                        } catch (error) {}
                                    </script>
                                </div>
                            </div>
                        </section>
                        <section id="enews-ext-2" class="widget enews-widget">
                            <div class="widget-wrap">
                                <div class="enews">
                                    <h4 class="widget-title widgettitle">Stay Updated!</h4>
                                    <form id="subscribeenews-ext-2" action="//journaldev.us8.list-manage.com/subscribe/post?u=612f3d966c86000f37699d8cf&amp;id=c64db63284" method="post" target="_blank" onsubmit="if ( subbox1.value == 'Name') { subbox1.value = ''; } if ( subbox2.value == 'Last Name') { subbox2.value = ''; }" name="enews-ext-2">
                                        <label for="subbox1" class="screenread">Name</label>
                                        <input type="text" id="subbox1" class="enews-subbox" value="" placeholder="Name" name="FNAME" />
                                        <label for="subbox" class="screenread">E-Mail Address</label>
                                        <input type="email" value="" id="subbox" placeholder="E-Mail Address" name="EMAIL" required="required" />
                                        <input type="submit" value="I AM IN!" id="subbutton" />
                                    </form>
                                </div>
                            </div>
                        </section>
                        <section id="custom_html-3" class="widget_text widget widget_custom_html">
                            <div class="widget_text widget-wrap">
                                <h4 class="widget-title widgettitle">Recommended Tutorials</h4>
                                <div class="textwidget custom-html-widget"><strong>Java Tutorials</strong>: <a href="https://www.journaldev.com/942/java-io-tutorial">Java IO Tutorial</a>, <a href="https://www.journaldev.com/634/regular-expression-in-java-regex-example">Java Regular Expressions Tutorial</a>, <a href="https://www.journaldev.com/1079/multithreading-in-java">Multithreading in Java</a>, <a href="https://www.journaldev.com/977/java-logging-api-tutorial-examples-logger-levels-handlers-formatters-filters">Java Logging API Tutorial</a>, <a href="https://www.journaldev.com/721/java-annotations-example-tutorial">Java Annotations</a>,<a href="https://www.journaldev.com/1240/java-xml-tutorial">Java XML Tutorial</a>, <a href="https://www.journaldev.com/1260/collections-in-java-tutorial">Collections in Java</a>, <a href="https://www.journaldev.com/1663/java-generics-example-method-class-interface">Java Generics</a>, <a href="https://www.journaldev.com/1696/exception-handling-in-java">Exception Handling in Java</a>, <a href="https://www.journaldev.com/1789/java-reflection-example-tutorial">Java Reflection</a>, <a href="https://www.journaldev.com/1827/java-design-patterns-example-tutorial">Java Design Patterns</a>, <a href="https://www.journaldev.com/2681/jdbc-tutorial-with-example-projects-datasource-jndi-and-spring-integration">JDBC Tutorial</a>
                                    <br><strong>Java EE</strong>: <a href="https://www.journaldev.com/2114/servlet-jsp-tutorial">Servlet JSP Tutorial</a>, <a href="https://www.journaldev.com/2310/struts2-tutorial-with-example-projects">Struts2 Tutorial</a>, <a href="https://www.journaldev.com/2888/spring-tutorial-spring-core-tutorial">Spring Tutorial</a>, <a href="https://www.journaldev.com/3793/hibernate-tutorial">Hibernate Tutorial</a>, <a href="https://www.journaldev.com/5516/primefaces-tutorial-with-example-projects">Primefaces Tutorial</a>
                                    <br><strong>Web Services</strong>: <a href="https://www.journaldev.com/255/axis2-web-services-tutorial">Apache Axis 2 Tutorial</a>, <a href="https://www.journaldev.com/498/jax-rs-restful-web-service-using-jersey-example-tutorial">JAX-RS Web Services Tutorial</a>
                                    <br><strong>Misc</strong>: <a href="https://www.journaldev.com/1117/memcached-tutorial">Memcached Tutorial</a>
                                    <br>
                                    <br><strong>Resources</strong>: <a href="http://journaldev.tradepub.com" rel="nofollow">Free eBooks</a>, <a href="//www.hostmonster.com/track/mygadgetplanet/JournalDev" target="_blank" rel="nofollow">My Favorite Web Hosting</a></div>
                            </div>
                        </section>
                    </aside>
                </div>
                <script type="text/javascript">
                    function $(id) {
                        return !id ? null : document.getElementById(id);
                    }
                    loadPrettifyCss = function() {
                        if (!$('prettify_css')) {
                            css = document.createElement('link');
                            css.id = 'prettify_css';
                            css.type = 'text/css';
                            css.rel = 'stylesheet';
                            css.href = 'https://cdn.journaldev.com/wp-content/plugins/wp-code-prettify/css/prettify.css';
                            var headNode = document.getElementsByTagName("head")[0];
                            headNode.appendChild(css);
                        } else {
                            $('prettify_css').href = 'https://cdn.journaldev.com/wp-content/plugins/wp-code-prettify/css/prettify.css';
                        }
                        if (!$('prettify_custom')) {
                            css = document.createElement('style');
                            css.id = 'prettify_custom';
                            css.type = 'text/css';
                            css.rel = 'stylesheet';
                            css.innerHTML = 'pre.prettyprint { margin: 5px; margin-bottom: 15px; padding: 10px; max-height: 900px; overflow: auto; background-color: #f8f8f8;}';
                            var headNode = document.getElementsByTagName("head")[0];
                            headNode.appendChild(css);
                        } else {
                            $('prettify_css').innerHTML = 'pre.prettyprint { margin: 5px; margin-bottom: 15px; padding: 10px; max-height: 900px; overflow: auto; background-color: #f8f8f8;}';
                        }
                    }
                </script>
                <script type="text/javascript">
                    loadPrettifyCss();
                </script>
                <script type="text/javascript" src="https://cdn.journaldev.com/wp-content/plugins/wp-code-prettify/js/prettify.js"></script>
                <script type="text/javascript">
                    function wpCodePrettifyOnLoad(func) {
                        var wpCodePrettifyOldOnLoad = window.onload;
                        if (typeof window.onload != 'function') {
                            window.onload = func
                        } else {
                            window.onload = function() {
                                wpCodePrettifyOldOnLoad();
                                func()
                            }
                        }
                    }
                    wpCodePrettifyOnLoad(function() {
                        prettyPrint();
                    });
                </script>
            </div>
            <footer class="site-footer" itemscope itemtype="https://schema.org/WPFooter">
                <div class="wrap">
                    <p>&#x000A9;&nbsp;2017 &middot; <a href="https://www.journaldev.com/privacy-policy">Privacy Policy</a> &middot; Don&#39;t copy, it&#39;s Bad Karma &middot; Powered by <a href="https://wordpress.org/" title="WordPress">WordPress</a></p>
                </div>
            </footer>
        </div>
        <div class="k9b316-container k9b316-2 k9b316-hide">
            <div class="k9b316-body">
                <img src="https://cdn.journaldev.com/wp-content/plugins/kill-adblock//images/logo.png">
                <div class="k9b316"></div>
            </div>
        </div>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <script type='text/javascript'>
            function _dmBootstrap(file) {
                var _dma = document.createElement('script');
                _dma.type = 'text/javascript';
                _dma.async = true;
                _dma.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + file;
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(_dma);
            }

            function _dmFollowup(file) {
                if (typeof DMAds === 'undefined') _dmBootstrap('cdn2.DeveloperMedia.com/a.min.js');
            }
            (function() {
                _dmBootstrap('cdn1.DeveloperMedia.com/a.min.js');
                setTimeout(_dmFollowup, 2000);
            })();
        </script>
        <div class="stb-container stb-bottom-right-container">
            <div class="scroll-triggered-box stb stb-4065 stb-bottom-right" id="stb-4065" style="display: none;">
                <div class="stb-content">
                    <script type="text/javascript">
                        (function() {
                            if (!window.mc4wp) {
                                window.mc4wp = {
                                    listeners: [],
                                    forms: {
                                        on: function(event, callback) {
                                            window.mc4wp.listeners.push({
                                                event: event,
                                                callback: callback
                                            });
                                        }
                                    }
                                }
                            }
                        })();
                    </script>
                    <form id="mc4wp-form-1" class="mc4wp-form mc4wp-form-9855 mc4wp-form-theme mc4wp-form-theme-red" method="post" data-id="9855" data-name="Default sign-up form">
                        <div class="mc4wp-form-fields">
                            <div style="width:400px;height:200px;">
                                <p>
                                    <h3>FREE eBook: Java Interview Questions (250+ Questions)</h3>
                                    <div style="width:200px;height:200px;float:left;"><img src="https://cdn.journaldev.com/wp-content/uploads/2015/10/JIQ-608x608.png" width="200" height="200"></div>
                                    <div style="width:200px;height:200px;float:right;">
                                        <p>
                                            <label for="mc4wp_email">Email address: </label>
                                        </p>
                                        <p>
                                            <input type="email" id="mc4wp_email" name="EMAIL" placeholder="Your email address" required />
                                        </p>
                                        <p>
                                            <input type="submit" value="Download Now!" />
                                        </p>
                                        <p>Because <strong>63,384</strong> Developers can't be Wrong!</p>
                                    </div>
                            </div>
                            </p>
                            <label style="display: none !important;">Leave this field empty if you're human:
                                <input type="text" name="_mc4wp_honeypot" value="" tabindex="-1" autocomplete="off" />
                            </label>
                            <input type="hidden" name="_mc4wp_timestamp" value="1508141272" />
                            <input type="hidden" name="_mc4wp_form_id" value="9855" />
                            <input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1" />
                        </div>
                        <div class="mc4wp-response"></div>
                    </form>
                </div>
                <span class="stb-close">&times;</span></div>
        </div>
        <div id="stb-overlay"></div>
        <script type='text/javascript'>
            var scriptParams = {
                "google_search_engine_id": "partner-pub-5143693538742787:5127011729"
            };
        </script>
        <script type='text/javascript' src='https://cdn.journaldev.com/wp-content/plugins/wp-google-search/assets/js/google_cse_v2.js'></script>
        <script type='text/javascript' src='https://cdn.journaldev.com/wp-content/plugins/anti-spam/js/anti-spam-4.4.js'></script>
        <script type='text/javascript'>
            var thickboxL10n = {
                "next": "Next >",
                "prev": "< Prev",
                "image": "Image",
                "of": "of",
                "close": "Close",
                "noiframes": "This feature requires inline frames. You have iframes disabled or your browser does not support them.",
                "loadingAnimation": "https:\/\/www.journaldev.com\/wp-includes\/js\/thickbox\/loadingAnimation.gif"
            };
        </script>
        <script type='text/javascript' src='https://cdn.journaldev.com/wp-includes/js/thickbox/thickbox.js'></script>
        <script type='text/javascript' src='https://cdn.journaldev.com/wp-content/plugins/jaspreetchahals-coupons-lite/js/jquery.zclip.js'></script>
        <script type='text/javascript' src='https://cdn.journaldev.com/wp-content/plugins/jaspreetchahals-coupons-lite/js/jcorgcr_wp.min.js'></script>
        <script type='text/javascript' src='https://cdn.journaldev.com/wp-includes/js/comment-reply.min.js'></script>
        <script type='text/javascript' src='https://cdn.journaldev.com/wp-content/plugins/bj-lazy-load/js/bj-lazy-load.min.js'></script>
        <script type='text/javascript'>
            var STB_Global_Options = {
                "testMode": ""
            };
            var STB_Box_Options = {
                "4065": {
                    "id": 4065,
                    "title": "Subscribe to JournalDev Newsletter",
                    "trigger": "percentage",
                    "triggerPercentage": 40,
                    "triggerElementSelector": "",
                    "animation": "slide",
                    "cookieTime": 30,
                    "autoHide": true,
                    "autoShow": true,
                    "position": "bottom-right",
                    "minimumScreenWidth": 700,
                    "unclosable": false
                }
            };
        </script>
        <script type='text/javascript' src='https://cdn.journaldev.com/wp-content/plugins/scroll-triggered-boxes/assets/js/script.min.js'></script>
        <script type='text/javascript' src='https://cdn.journaldev.com/wp-includes/js/wp-embed.min.js'></script>
        <script type='text/javascript' src='https://cdn.journaldev.com/wp-content/plugins/akismet/_inc/form.js'></script>
    </body>

</html>
<!--
*** This site runs WP Super Minify plugin v1.5.1 - http://wordpress.org/plugins/wp-super-minify ***
*** Total size saved: 7.694% | Size before compression: 145317 bytes | Size after compression: 134136 bytes. ***
-->
<!-- Dynamic page generated in 0.753 seconds. -->
<!-- Cached page generated by WP-Super-Cache on 2017-10-16 01:07:52 -->

<!-- Compression = gzip -->
