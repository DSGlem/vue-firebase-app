/*! iFrame Resizer (iframeSizer.contentWindow.min.js) - v4.1.1 - 2019-04-10
 *  Desc: Include this file in any page being loaded into an iframe
 *        to force the iframe to resize to the content size.
 *  Requires: iframeResizer.min.js on host page.
 *  Copyright: (c) 2019 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!(function(l) {
  if ("undefined" != typeof window) {
    var n = !0,
      o = 10,
      i = "",
      r = 0,
      a = "",
      t = null,
      u = "",
      c = !1,
      s = { resize: 1, click: 1 },
      d = 128,
      f = !0,
      m = 1,
      h = "bodyOffset",
      g = h,
      p = !0,
      v = "",
      y = {},
      b = 32,
      e = null,
      w = !1,
      T = "[iFrameSizer]",
      E = T.length,
      O = "",
      S = { max: 1, min: 1, bodyScroll: 1, documentElementScroll: 1 },
      M = "child",
      I = !0,
      N = window.parent,
      A = "*",
      C = 0,
      k = !1,
      z = null,
      R = 16,
      x = 1,
      L = "scroll",
      F = L,
      P = window,
      D = function() {
        ue("onMessage function not defined");
      },
      j = function() {},
      q = function() {},
      H = {
        height: function() {
          return (
            ue("Custom height calculation function not defined"),
            document.documentElement.offsetHeight
          );
        },
        width: function() {
          return (
            ue("Custom width calculation function not defined"),
            document.body.scrollWidth
          );
        }
      },
      W = {},
      B = !1;
    try {
      var U = Object.create(
        {},
        {
          passive: {
            get: function() {
              B = !0;
            }
          }
        }
      );
      window.addEventListener("test", te, U),
        window.removeEventListener("test", te, U);
    } catch (e) {}
    var J,
      V,
      K,
      Q,
      X,
      Y,
      G,
      Z =
        Date.now ||
        function() {
          return new Date().getTime();
        },
      $ = {
        bodyOffset: function() {
          return (
            document.body.offsetHeight + be("marginTop") + be("marginBottom")
          );
        },
        offset: function() {
          return $.bodyOffset();
        },
        bodyScroll: function() {
          return document.body.scrollHeight;
        },
        custom: function() {
          return H.height();
        },
        documentElementOffset: function() {
          return document.documentElement.offsetHeight;
        },
        documentElementScroll: function() {
          return document.documentElement.scrollHeight;
        },
        max: function() {
          return Math.max.apply(null, Te($));
        },
        min: function() {
          return Math.min.apply(null, Te($));
        },
        grow: function() {
          return $.max();
        },
        lowestElement: function() {
          return Math.max(
            $.bodyOffset() || $.documentElementOffset(),
            we("bottom", Oe())
          );
        },
        taggedElement: function() {
          return Ee("bottom", "data-iframe-height");
        }
      },
      _ = {
        bodyScroll: function() {
          return document.body.scrollWidth;
        },
        bodyOffset: function() {
          return document.body.offsetWidth;
        },
        custom: function() {
          return H.width();
        },
        documentElementScroll: function() {
          return document.documentElement.scrollWidth;
        },
        documentElementOffset: function() {
          return document.documentElement.offsetWidth;
        },
        scroll: function() {
          return Math.max(_.bodyScroll(), _.documentElementScroll());
        },
        max: function() {
          return Math.max.apply(null, Te(_));
        },
        min: function() {
          return Math.min.apply(null, Te(_));
        },
        rightMostElement: function() {
          return we("right", Oe());
        },
        taggedElement: function() {
          return Ee("right", "data-iframe-width");
        }
      },
      ee =
        ((J = Se),
        (X = null),
        (Y = 0),
        (G = function() {
          (Y = Z()), (X = null), (Q = J.apply(V, K)), X || (V = K = null);
        }),
        function() {
          var e = Z();
          Y || (Y = e);
          var t = R - (e - Y);
          return (
            (V = this),
            (K = arguments),
            t <= 0 || R < t
              ? (X && (clearTimeout(X), (X = null)),
                (Y = e),
                (Q = J.apply(V, K)),
                X || (V = K = null))
              : X || (X = setTimeout(G, t)),
            Q
          );
        });
    ne(window, "message", ke), ne(window, "readystatechange", ze), ze();
  }
  function te() {}
  function ne(e, t, n, o) {
    e.addEventListener(t, n, !!B && (o || {}));
  }
  function oe(e, t, n) {
    e.removeEventListener(t, n, !1);
  }
  function ie(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  function re(e) {
    return T + "[" + O + "] " + e;
  }
  function ae(e) {
    w && "object" == typeof window.console && console.log(re(e));
  }
  function ue(e) {
    "object" == typeof window.console && console.warn(re(e));
  }
  function ce() {
    var e;
    !(function() {
      function e(e) {
        return "true" === e;
      }
      var t = v.substr(E).split(":");
      (O = t[0]),
        (r = l !== t[1] ? Number(t[1]) : r),
        (c = l !== t[2] ? e(t[2]) : c),
        (w = l !== t[3] ? e(t[3]) : w),
        (b = l !== t[4] ? Number(t[4]) : b),
        (n = l !== t[6] ? e(t[6]) : n),
        (a = t[7]),
        (g = l !== t[8] ? t[8] : g),
        (i = t[9]),
        (u = t[10]),
        (C = l !== t[11] ? Number(t[11]) : C),
        (y.enable = l !== t[12] && e(t[12])),
        (M = l !== t[13] ? t[13] : M),
        (F = l !== t[14] ? t[14] : F);
    })(),
      ae("Initialising iFrame (" + location.href + ")"),
      (function() {
        function e(e, t) {
          return (
            "function" == typeof e &&
              (ae("Setup custom " + t + "CalcMethod"),
              (H[t] = e),
              (e = "custom")),
            e
          );
        }
        "iFrameResizer" in window &&
          Object === window.iFrameResizer.constructor &&
          ((t = window.iFrameResizer),
          ae("Reading data from page: " + JSON.stringify(t)),
          Object.keys(t).forEach(se, t),
          (D = "onMessage" in t ? t.onMessage : D),
          (j = "onReady" in t ? t.onReady : j),
          (A = "targetOrigin" in t ? t.targetOrigin : A),
          (g = "heightCalculationMethod" in t ? t.heightCalculationMethod : g),
          (F = "widthCalculationMethod" in t ? t.widthCalculationMethod : F),
          (g = e(g, "height")),
          (F = e(F, "width")));
        var t;
        ae("TargetOrigin for parent set to: " + A);
      })(),
      (function() {
        l === a && (a = r + "px");
        de(
          "margin",
          (function(e, t) {
            -1 !== t.indexOf("-") &&
              (ue("Negative CSS value ignored for " + e), (t = ""));
            return t;
          })("margin", a)
        );
      })(),
      de("background", i),
      de("padding", u),
      ((e = document.createElement("div")).style.clear = "both"),
      (e.style.display = "block"),
      (e.style.height = "0"),
      document.body.appendChild(e),
      he(),
      ge(),
      (document.documentElement.style.height = ""),
      (document.body.style.height = ""),
      ae('HTML & body height set to "auto"'),
      ae("Enable public methods"),
      (P.parentIFrame = {
        autoResize: function(e) {
          return (
            !0 === e && !1 === n
              ? ((n = !0), pe())
              : !1 === e && !0 === n && ((n = !1), ve()),
            n
          );
        },
        close: function() {
          Ce(0, 0, "close"),
            ae("Disable outgoing messages"),
            (I = !1),
            ae("Remove event listener: Message"),
            oe(window, "message", ke),
            !0 === n && ve();
        },
        getId: function() {
          return O;
        },
        getPageInfo: function(e) {
          "function" == typeof e
            ? ((q = e), Ce(0, 0, "pageInfo"))
            : ((q = function() {}), Ce(0, 0, "pageInfoStop"));
        },
        moveToAnchor: function(e) {
          y.findTarget(e);
        },
        reset: function() {
          Ae("parentIFrame.reset");
        },
        scrollTo: function(e, t) {
          Ce(t, e, "scrollTo");
        },
        scrollToOffset: function(e, t) {
          Ce(t, e, "scrollToOffset");
        },
        sendMessage: function(e, t) {
          Ce(0, 0, "message", JSON.stringify(e), t);
        },
        setHeightCalculationMethod: function(e) {
          (g = e), he();
        },
        setWidthCalculationMethod: function(e) {
          (F = e), ge();
        },
        setTargetOrigin: function(e) {
          ae("Set targetOrigin: " + e), (A = e);
        },
        size: function(e, t) {
          var n = (e || "") + (t ? "," + t : "");
          Me("size", "parentIFrame.size(" + n + ")", e, t);
        }
      }),
      pe(),
      (y = (function() {
        function r(e) {
          var t = e.getBoundingClientRect(),
            n = {
              x:
                window.pageXOffset !== l
                  ? window.pageXOffset
                  : document.documentElement.scrollLeft,
              y:
                window.pageYOffset !== l
                  ? window.pageYOffset
                  : document.documentElement.scrollTop
            };
          return {
            x: parseInt(t.left, 10) + parseInt(n.x, 10),
            y: parseInt(t.top, 10) + parseInt(n.y, 10)
          };
        }
        function n(e) {
          var t,
            n = e.split("#")[1] || e,
            o = decodeURIComponent(n),
            i = document.getElementById(o) || document.getElementsByName(o)[0];
          l !== i
            ? ((t = r(i)),
              ae(
                "Moving to in page link (#" +
                  n +
                  ") at x: " +
                  t.x +
                  " y: " +
                  t.y
              ),
              Ce(t.y, t.x, "scrollToOffset"))
            : (ae(
                "In page link (#" +
                  n +
                  ") not found in iFrame, so sending to parent"
              ),
              Ce(0, 0, "inPageLink", "#" + n));
        }
        function e() {
          "" !== location.hash && "#" !== location.hash && n(location.href);
        }
        function t() {
          Array.prototype.forEach.call(
            document.querySelectorAll('a[href^="#"]'),
            function(e) {
              function t(e) {
                e.preventDefault(), n(this.getAttribute("href"));
              }
              "#" !== e.getAttribute("href") && ne(e, "click", t);
            }
          );
        }
        y.enable
          ? Array.prototype.forEach && document.querySelectorAll
            ? (ae("Setting up location.hash handlers"),
              t(),
              ne(window, "hashchange", e),
              setTimeout(e, d))
            : ue(
                "In page linking not fully supported in this browser! (See README.md for IE8 workaround)"
              )
          : ae("In page linking not enabled");
        return { findTarget: n };
      })()),
      Me("init", "Init message from host page"),
      j();
  }
  function se(e) {
    var t = e.split("Callback");
    if (2 === t.length) {
      var n = "on" + t[0].charAt(0).toUpperCase() + t[0].slice(1);
      (this[n] = this[e]),
        delete this[e],
        ue(
          "Deprecated: '" +
            e +
            "' has been renamed '" +
            n +
            "'. The old method will be removed in the next major version."
        );
    }
  }
  function de(e, t) {
    l !== t &&
      "" !== t &&
      "null" !== t &&
      ae("Body " + e + ' set to "' + (document.body.style[e] = t) + '"');
  }
  function le(n) {
    var e = {
      add: function(e) {
        function t() {
          Me(n.eventName, n.eventType);
        }
        (W[e] = t), ne(window, e, t, { passive: !0 });
      },
      remove: function(e) {
        var t = W[e];
        delete W[e], oe(window, e, t);
      }
    };
    n.eventNames && Array.prototype.map
      ? ((n.eventName = n.eventNames[0]), n.eventNames.map(e[n.method]))
      : e[n.method](n.eventName),
      ae(ie(n.method) + " event listener: " + n.eventType);
  }
  function fe(e) {
    le({
      method: e,
      eventType: "Animation Start",
      eventNames: ["animationstart", "webkitAnimationStart"]
    }),
      le({
        method: e,
        eventType: "Animation Iteration",
        eventNames: ["animationiteration", "webkitAnimationIteration"]
      }),
      le({
        method: e,
        eventType: "Animation End",
        eventNames: ["animationend", "webkitAnimationEnd"]
      }),
      le({ method: e, eventType: "Input", eventName: "input" }),
      le({ method: e, eventType: "Mouse Up", eventName: "mouseup" }),
      le({ method: e, eventType: "Mouse Down", eventName: "mousedown" }),
      le({
        method: e,
        eventType: "Orientation Change",
        eventName: "orientationchange"
      }),
      le({
        method: e,
        eventType: "Print",
        eventName: ["afterprint", "beforeprint"]
      }),
      le({
        method: e,
        eventType: "Ready State Change",
        eventName: "readystatechange"
      }),
      le({ method: e, eventType: "Touch Start", eventName: "touchstart" }),
      le({ method: e, eventType: "Touch End", eventName: "touchend" }),
      le({ method: e, eventType: "Touch Cancel", eventName: "touchcancel" }),
      le({
        method: e,
        eventType: "Transition Start",
        eventNames: [
          "transitionstart",
          "webkitTransitionStart",
          "MSTransitionStart",
          "oTransitionStart",
          "otransitionstart"
        ]
      }),
      le({
        method: e,
        eventType: "Transition Iteration",
        eventNames: [
          "transitioniteration",
          "webkitTransitionIteration",
          "MSTransitionIteration",
          "oTransitionIteration",
          "otransitioniteration"
        ]
      }),
      le({
        method: e,
        eventType: "Transition End",
        eventNames: [
          "transitionend",
          "webkitTransitionEnd",
          "MSTransitionEnd",
          "oTransitionEnd",
          "otransitionend"
        ]
      }),
      "child" === M &&
        le({ method: e, eventType: "IFrame Resized", eventName: "resize" });
  }
  function me(e, t, n, o) {
    return (
      t !== e &&
        (e in n ||
          (ue(e + " is not a valid option for " + o + "CalculationMethod."),
          (e = t)),
        ae(o + ' calculation method set to "' + e + '"')),
      e
    );
  }
  function he() {
    g = me(g, h, $, "height");
  }
  function ge() {
    F = me(F, L, _, "width");
  }
  function pe() {
    var e;
    !0 === n
      ? (fe("add"),
        (e = b < 0),
        window.MutationObserver || window.WebKitMutationObserver
          ? e
            ? ye()
            : (t = (function() {
                function t(e) {
                  function t(e) {
                    !1 === e.complete &&
                      (ae("Attach listeners to " + e.src),
                      e.addEventListener("load", i, !1),
                      e.addEventListener("error", r, !1),
                      c.push(e));
                  }
                  "attributes" === e.type && "src" === e.attributeName
                    ? t(e.target)
                    : "childList" === e.type &&
                      Array.prototype.forEach.call(
                        e.target.querySelectorAll("img"),
                        t
                      );
                }
                function o(e) {
                  var t;
                  ae("Remove listeners from " + e.src),
                    e.removeEventListener("load", i, !1),
                    e.removeEventListener("error", r, !1),
                    (t = e),
                    c.splice(c.indexOf(t), 1);
                }
                function n(e, t, n) {
                  o(e.target), Me(t, n + ": " + e.target.src, l, l);
                }
                function i(e) {
                  n(e, "imageLoad", "Image loaded");
                }
                function r(e) {
                  n(e, "imageLoadFailed", "Image load failed");
                }
                function e(e) {
                  Me(
                    "mutationObserver",
                    "mutationObserver: " + e[0].target + " " + e[0].type
                  ),
                    e.forEach(t);
                }
                var a,
                  u,
                  c = [],
                  s = window.MutationObserver || window.WebKitMutationObserver,
                  d =
                    ((a = document.querySelector("body")),
                    (u = {
                      attributes: !0,
                      attributeOldValue: !1,
                      characterData: !0,
                      characterDataOldValue: !1,
                      childList: !0,
                      subtree: !0
                    }),
                    (d = new s(e)),
                    ae("Create body MutationObserver"),
                    d.observe(a, u),
                    d);
                return {
                  disconnect: function() {
                    "disconnect" in d &&
                      (ae("Disconnect body MutationObserver"),
                      d.disconnect(),
                      c.forEach(o));
                  }
                };
              })())
          : (ae("MutationObserver not supported in this browser!"), ye()))
      : ae("Auto Resize disabled");
  }
  function ve() {
    fe("remove"), null !== t && t.disconnect(), clearInterval(e);
  }
  function ye() {
    0 !== b &&
      (ae("setInterval: " + b + "ms"),
      (e = setInterval(function() {
        Me("interval", "setInterval: " + b);
      }, Math.abs(b))));
  }
  function be(e, t) {
    var n = 0;
    return (
      (t = t || document.body),
      (n =
        null !== (n = document.defaultView.getComputedStyle(t, null))
          ? n[e]
          : 0),
      parseInt(n, o)
    );
  }
  function we(e, t) {
    for (
      var n, o = t.length, i = 0, r = 0, a = ie(e), u = Z(), c = 0;
      c < o;
      c++
    )
      r < (i = t[c].getBoundingClientRect()[e] + be("margin" + a, t[c])) &&
        (r = i);
    return (
      (u = Z() - u),
      ae("Parsed " + o + " HTML elements"),
      ae("Element position calculated in " + u + "ms"),
      R / 2 < (n = u) &&
        ae("Event throttle increased to " + (R = 2 * n) + "ms"),
      r
    );
  }
  function Te(e) {
    return [
      e.bodyOffset(),
      e.bodyScroll(),
      e.documentElementOffset(),
      e.documentElementScroll()
    ];
  }
  function Ee(e, t) {
    var n = document.querySelectorAll("[" + t + "]");
    return (
      0 === n.length &&
        (ue("No tagged elements (" + t + ") found on page"),
        document.querySelectorAll("body *")),
      we(e, n)
    );
  }
  function Oe() {
    return document.querySelectorAll("body *");
  }
  function Se(e, t, n, o) {
    var i, r;
    !(function() {
      function e(e, t) {
        return !(Math.abs(e - t) <= C);
      }
      return (
        (i = l !== n ? n : $[g]()),
        (r = l !== o ? o : _[F]()),
        e(m, i) || (c && e(x, r))
      );
    })() && "init" !== e
      ? e in { init: 1, interval: 1, size: 1 } || !(g in S || (c && F in S))
        ? e in { interval: 1 } || ae("No change in size detected")
        : Ae(t)
      : (Ie(), Ce((m = i), (x = r), e));
  }
  function Me(e, t, n, o) {
    k && e in s
      ? ae("Trigger event cancelled: " + e)
      : (e in { reset: 1, resetPage: 1, init: 1 } || ae("Trigger event: " + t),
        "init" === e ? Se(e, t, n, o) : ee(e, t, n, o));
  }
  function Ie() {
    k || ((k = !0), ae("Trigger event lock on")),
      clearTimeout(z),
      (z = setTimeout(function() {
        (k = !1), ae("Trigger event lock off"), ae("--");
      }, d));
  }
  function Ne(e) {
    (m = $[g]()), (x = _[F]()), Ce(m, x, e);
  }
  function Ae(e) {
    var t = g;
    (g = h), ae("Reset trigger event: " + e), Ie(), Ne("reset"), (g = t);
  }
  function Ce(e, t, n, o, i) {
    var r;
    !0 === I &&
      (l === i ? (i = A) : ae("Message targetOrigin: " + i),
      ae(
        "Sending message to host page (" +
          (r = O + ":" + e + ":" + t + ":" + n + (l !== o ? ":" + o : "")) +
          ")"
      ),
      N.postMessage(T + r, i));
  }
  function ke(t) {
    var n = {
      init: function() {
        (v = t.data),
          (N = t.source),
          ce(),
          (f = !1),
          setTimeout(function() {
            p = !1;
          }, d);
      },
      reset: function() {
        p
          ? ae("Page reset ignored by init")
          : (ae("Page size reset by host page"), Ne("resetPage"));
      },
      resize: function() {
        Me("resizeParent", "Parent window requested size check");
      },
      moveToAnchor: function() {
        y.findTarget(i());
      },
      inPageLink: function() {
        this.moveToAnchor();
      },
      pageInfo: function() {
        var e = i();
        ae("PageInfoFromParent called from parent: " + e),
          q(JSON.parse(e)),
          ae(" --");
      },
      message: function() {
        var e = i();
        ae("onMessage called from parent: " + e), D(JSON.parse(e)), ae(" --");
      }
    };
    function o() {
      return t.data.split("]")[1].split(":")[0];
    }
    function i() {
      return t.data.substr(t.data.indexOf(":") + 1);
    }
    function r() {
      return t.data.split(":")[2] in { true: 1, false: 1 };
    }
    function e() {
      var e = o();
      e in n
        ? n[e]()
        : (("undefined" == typeof module || !module.exports) &&
            "iFrameResize" in window) ||
          ("jQuery" in window && "iFrameResize" in window.jQuery.prototype) ||
          r() ||
          ue("Unexpected message (" + t.data + ")");
    }
    T === ("" + t.data).substr(0, E) &&
      (!1 === f
        ? e()
        : r()
        ? n.init()
        : ae(
            'Ignored message of type "' +
              o() +
              '". Received before initialization.'
          ));
  }
  function ze() {
    "loading" !== document.readyState &&
      window.parent.postMessage("[iFrameResizerChild]Ready", "*");
  }
})();
//# sourceMappingURL=iframeResizer.contentWindow.map
