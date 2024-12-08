(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function pg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ff = { exports: {} },
  Ts = {},
  hf = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jr = Symbol.for("react.element"),
  mg = Symbol.for("react.portal"),
  gg = Symbol.for("react.fragment"),
  vg = Symbol.for("react.strict_mode"),
  yg = Symbol.for("react.profiler"),
  xg = Symbol.for("react.provider"),
  wg = Symbol.for("react.context"),
  Sg = Symbol.for("react.forward_ref"),
  kg = Symbol.for("react.suspense"),
  Pg = Symbol.for("react.memo"),
  Eg = Symbol.for("react.lazy"),
  ju = Symbol.iterator;
function Cg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ju && e[ju]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var pf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  mf = Object.assign,
  gf = {};
function Jn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gf),
    (this.updater = n || pf);
}
Jn.prototype.isReactComponent = {};
Jn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Jn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vf() {}
vf.prototype = Jn.prototype;
function Xa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gf),
    (this.updater = n || pf);
}
var Ja = (Xa.prototype = new vf());
Ja.constructor = Xa;
mf(Ja, Jn.prototype);
Ja.isPureReactComponent = !0;
var Au = Array.isArray,
  yf = Object.prototype.hasOwnProperty,
  qa = { current: null },
  xf = { key: !0, ref: !0, __self: !0, __source: !0 };
function wf(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      yf.call(t, r) && !xf.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Jr,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: qa.current,
  };
}
function Tg(e, t) {
  return {
    $$typeof: Jr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Za(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jr;
}
function jg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Nu = /\/+/g;
function Js(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? jg("" + e.key)
    : t.toString(36);
}
function Ni(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Jr:
          case mg:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Js(o, 0) : r),
      Au(i)
        ? ((n = ""),
          e != null && (n = e.replace(Nu, "$&/") + "/"),
          Ni(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Za(i) &&
            (i = Tg(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Nu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Au(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + Js(s, a);
      o += Ni(s, t, n, l, i);
    }
  else if (((l = Cg(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + Js(s, a++)), (o += Ni(s, t, n, l, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function li(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ni(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Ag(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var we = { current: null },
  Mi = { transition: null },
  Ng = {
    ReactCurrentDispatcher: we,
    ReactCurrentBatchConfig: Mi,
    ReactCurrentOwner: qa,
  };
function Sf() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = {
  map: li,
  forEach: function (e, t, n) {
    li(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      li(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      li(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Za(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
I.Component = Jn;
I.Fragment = gg;
I.Profiler = yg;
I.PureComponent = Xa;
I.StrictMode = vg;
I.Suspense = kg;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ng;
I.act = Sf;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = mf({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = qa.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      yf.call(t, l) &&
        !xf.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Jr, type: e.type, key: i, ref: s, props: r, _owner: o };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: wg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: xg, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = wf;
I.createFactory = function (e) {
  var t = wf.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: Sg, render: e };
};
I.isValidElement = Za;
I.lazy = function (e) {
  return { $$typeof: Eg, _payload: { _status: -1, _result: e }, _init: Ag };
};
I.memo = function (e, t) {
  return { $$typeof: Pg, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = Mi.transition;
  Mi.transition = {};
  try {
    e();
  } finally {
    Mi.transition = t;
  }
};
I.unstable_act = Sf;
I.useCallback = function (e, t) {
  return we.current.useCallback(e, t);
};
I.useContext = function (e) {
  return we.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return we.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return we.current.useEffect(e, t);
};
I.useId = function () {
  return we.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return we.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return we.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return we.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return we.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return we.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return we.current.useRef(e);
};
I.useState = function (e) {
  return we.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return we.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return we.current.useTransition();
};
I.version = "18.3.1";
hf.exports = I;
var T = hf.exports;
const sn = pg(T);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mg = T,
  Dg = Symbol.for("react.element"),
  Lg = Symbol.for("react.fragment"),
  Vg = Object.prototype.hasOwnProperty,
  Rg = Mg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ig = { key: !0, ref: !0, __self: !0, __source: !0 };
function kf(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Vg.call(t, r) && !Ig.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Dg,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Rg.current,
  };
}
Ts.Fragment = Lg;
Ts.jsx = kf;
Ts.jsxs = kf;
ff.exports = Ts;
var f = ff.exports,
  Pf = { exports: {} },
  Le = {},
  Ef = { exports: {} },
  Cf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, V) {
    var R = j.length;
    j.push(V);
    e: for (; 0 < R; ) {
      var X = (R - 1) >>> 1,
        ie = j[X];
      if (0 < i(ie, V)) (j[X] = V), (j[R] = ie), (R = X);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var V = j[0],
      R = j.pop();
    if (R !== V) {
      j[0] = R;
      e: for (var X = 0, ie = j.length, oi = ie >>> 1; X < oi; ) {
        var Gt = 2 * (X + 1) - 1,
          Xs = j[Gt],
          Qt = Gt + 1,
          ai = j[Qt];
        if (0 > i(Xs, R))
          Qt < ie && 0 > i(ai, Xs)
            ? ((j[X] = ai), (j[Qt] = R), (X = Qt))
            : ((j[X] = Xs), (j[Gt] = R), (X = Gt));
        else if (Qt < ie && 0 > i(ai, R)) (j[X] = ai), (j[Qt] = R), (X = Qt);
        else break e;
      }
    }
    return V;
  }
  function i(j, V) {
    var R = j.sortIndex - V.sortIndex;
    return R !== 0 ? R : j.id - V.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    h = 3,
    v = !1,
    y = !1,
    x = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(j) {
    for (var V = n(u); V !== null; ) {
      if (V.callback === null) r(u);
      else if (V.startTime <= j)
        r(u), (V.sortIndex = V.expirationTime), t(l, V);
      else break;
      V = n(u);
    }
  }
  function w(j) {
    if (((x = !1), g(j), !y))
      if (n(l) !== null) (y = !0), si(S);
      else {
        var V = n(u);
        V !== null && ee(w, V.startTime - j);
      }
  }
  function S(j, V) {
    (y = !1), x && ((x = !1), m(E), (E = -1)), (v = !0);
    var R = h;
    try {
      for (
        g(V), d = n(l);
        d !== null && (!(d.expirationTime > V) || (j && !re()));

      ) {
        var X = d.callback;
        if (typeof X == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var ie = X(d.expirationTime <= V);
          (V = e.unstable_now()),
            typeof ie == "function" ? (d.callback = ie) : d === n(l) && r(l),
            g(V);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var oi = !0;
      else {
        var Gt = n(u);
        Gt !== null && ee(w, Gt.startTime - V), (oi = !1);
      }
      return oi;
    } finally {
      (d = null), (h = R), (v = !1);
    }
  }
  var C = !1,
    A = null,
    E = -1,
    z = 5,
    L = -1;
  function re() {
    return !(e.unstable_now() - L < z);
  }
  function xt() {
    if (A !== null) {
      var j = e.unstable_now();
      L = j;
      var V = !0;
      try {
        V = A(!0, j);
      } finally {
        V ? Kt() : ((C = !1), (A = null));
      }
    } else C = !1;
  }
  var Kt;
  if (typeof p == "function")
    Kt = function () {
      p(xt);
    };
  else if (typeof MessageChannel < "u") {
    var tr = new MessageChannel(),
      Tu = tr.port2;
    (tr.port1.onmessage = xt),
      (Kt = function () {
        Tu.postMessage(null);
      });
  } else
    Kt = function () {
      P(xt, 0);
    };
  function si(j) {
    (A = j), C || ((C = !0), Kt());
  }
  function ee(j, V) {
    E = P(function () {
      j(e.unstable_now());
    }, V);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), si(S));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (z = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (j) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = h;
      }
      var R = h;
      h = V;
      try {
        return j();
      } finally {
        h = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, V) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var R = h;
      h = j;
      try {
        return V();
      } finally {
        h = R;
      }
    }),
    (e.unstable_scheduleCallback = function (j, V, R) {
      var X = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? X + R : X))
          : (R = X),
        j)
      ) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return (
        (ie = R + ie),
        (j = {
          id: c++,
          callback: V,
          priorityLevel: j,
          startTime: R,
          expirationTime: ie,
          sortIndex: -1,
        }),
        R > X
          ? ((j.sortIndex = R),
            t(u, j),
            n(l) === null &&
              j === n(u) &&
              (x ? (m(E), (E = -1)) : (x = !0), ee(w, R - X)))
          : ((j.sortIndex = ie), t(l, j), y || v || ((y = !0), si(S))),
        j
      );
    }),
    (e.unstable_shouldYield = re),
    (e.unstable_wrapCallback = function (j) {
      var V = h;
      return function () {
        var R = h;
        h = V;
        try {
          return j.apply(this, arguments);
        } finally {
          h = R;
        }
      };
    });
})(Cf);
Ef.exports = Cf;
var zg = Ef.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Og = T,
  Me = zg;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Tf = new Set(),
  Dr = {};
function mn(e, t) {
  Un(e, t), Un(e + "Capture", t);
}
function Un(e, t) {
  for (Dr[e] = t, e = 0; e < t.length; e++) Tf.add(t[e]);
}
var pt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Bo = Object.prototype.hasOwnProperty,
  bg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Mu = {},
  Du = {};
function _g(e) {
  return Bo.call(Du, e)
    ? !0
    : Bo.call(Mu, e)
    ? !1
    : bg.test(e)
    ? (Du[e] = !0)
    : ((Mu[e] = !0), !1);
}
function Fg(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Bg(e, t, n, r) {
  if (t === null || typeof t > "u" || Fg(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Se(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    de[e] = new Se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  de[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  de[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  de[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    de[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  de[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  de[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  de[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  de[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var el = /[\-:]([a-z])/g;
function tl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(el, tl);
    de[t] = new Se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(el, tl);
    de[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(el, tl);
  de[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  de[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new Se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  de[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function nl(e, t, n, r) {
  var i = de.hasOwnProperty(t) ? de[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Bg(t, n, i, r) && (n = null),
    r || i === null
      ? _g(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var yt = Og.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ui = Symbol.for("react.element"),
  xn = Symbol.for("react.portal"),
  wn = Symbol.for("react.fragment"),
  rl = Symbol.for("react.strict_mode"),
  Uo = Symbol.for("react.profiler"),
  jf = Symbol.for("react.provider"),
  Af = Symbol.for("react.context"),
  il = Symbol.for("react.forward_ref"),
  Ho = Symbol.for("react.suspense"),
  $o = Symbol.for("react.suspense_list"),
  sl = Symbol.for("react.memo"),
  Et = Symbol.for("react.lazy"),
  Nf = Symbol.for("react.offscreen"),
  Lu = Symbol.iterator;
function nr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Lu && e[Lu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  qs;
function fr(e) {
  if (qs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      qs = (t && t[1]) || "";
    }
  return (
    `
` +
    qs +
    e
  );
}
var Zs = !1;
function eo(e, t) {
  if (!e || Zs) return "";
  Zs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Zs = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? fr(e) : "";
}
function Ug(e) {
  switch (e.tag) {
    case 5:
      return fr(e.type);
    case 16:
      return fr("Lazy");
    case 13:
      return fr("Suspense");
    case 19:
      return fr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = eo(e.type, !1)), e;
    case 11:
      return (e = eo(e.type.render, !1)), e;
    case 1:
      return (e = eo(e.type, !0)), e;
    default:
      return "";
  }
}
function Wo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case wn:
      return "Fragment";
    case xn:
      return "Portal";
    case Uo:
      return "Profiler";
    case rl:
      return "StrictMode";
    case Ho:
      return "Suspense";
    case $o:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Af:
        return (e.displayName || "Context") + ".Consumer";
      case jf:
        return (e._context.displayName || "Context") + ".Provider";
      case il:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case sl:
        return (
          (t = e.displayName || null), t !== null ? t : Wo(e.type) || "Memo"
        );
      case Et:
        (t = e._payload), (e = e._init);
        try {
          return Wo(e(t));
        } catch {}
    }
  return null;
}
function Hg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Wo(t);
    case 8:
      return t === rl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function bt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Mf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function $g(e) {
  var t = Mf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ci(e) {
  e._valueTracker || (e._valueTracker = $g(e));
}
function Df(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Mf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ki(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ko(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Vu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = bt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Lf(e, t) {
  (t = t.checked), t != null && nl(e, "checked", t, !1);
}
function Go(e, t) {
  Lf(e, t);
  var n = bt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Qo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Qo(e, t.type, bt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ru(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Qo(e, t, n) {
  (t !== "number" || Ki(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var hr = Array.isArray;
function zn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + bt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Yo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Iu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (hr(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: bt(n) };
}
function Vf(e, t) {
  var n = bt(t.value),
    r = bt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function zu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Rf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Xo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Rf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var di,
  If = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        di = di || document.createElement("div"),
          di.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = di.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Lr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var yr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Wg = ["Webkit", "ms", "Moz", "O"];
Object.keys(yr).forEach(function (e) {
  Wg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (yr[t] = yr[e]);
  });
});
function zf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (yr.hasOwnProperty(e) && yr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Of(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = zf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Kg = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Jo(e, t) {
  if (t) {
    if (Kg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function qo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Zo = null;
function ol(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ea = null,
  On = null,
  bn = null;
function Ou(e) {
  if ((e = ei(e))) {
    if (typeof ea != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Ds(t)), ea(e.stateNode, e.type, t));
  }
}
function bf(e) {
  On ? (bn ? bn.push(e) : (bn = [e])) : (On = e);
}
function _f() {
  if (On) {
    var e = On,
      t = bn;
    if (((bn = On = null), Ou(e), t)) for (e = 0; e < t.length; e++) Ou(t[e]);
  }
}
function Ff(e, t) {
  return e(t);
}
function Bf() {}
var to = !1;
function Uf(e, t, n) {
  if (to) return e(t, n);
  to = !0;
  try {
    return Ff(e, t, n);
  } finally {
    (to = !1), (On !== null || bn !== null) && (Bf(), _f());
  }
}
function Vr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ds(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var ta = !1;
if (pt)
  try {
    var rr = {};
    Object.defineProperty(rr, "passive", {
      get: function () {
        ta = !0;
      },
    }),
      window.addEventListener("test", rr, rr),
      window.removeEventListener("test", rr, rr);
  } catch {
    ta = !1;
  }
function Gg(e, t, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var xr = !1,
  Gi = null,
  Qi = !1,
  na = null,
  Qg = {
    onError: function (e) {
      (xr = !0), (Gi = e);
    },
  };
function Yg(e, t, n, r, i, s, o, a, l) {
  (xr = !1), (Gi = null), Gg.apply(Qg, arguments);
}
function Xg(e, t, n, r, i, s, o, a, l) {
  if ((Yg.apply(this, arguments), xr)) {
    if (xr) {
      var u = Gi;
      (xr = !1), (Gi = null);
    } else throw Error(k(198));
    Qi || ((Qi = !0), (na = u));
  }
}
function gn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Hf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function bu(e) {
  if (gn(e) !== e) throw Error(k(188));
}
function Jg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = gn(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return bu(i), e;
        if (s === r) return bu(i), t;
        s = s.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function $f(e) {
  return (e = Jg(e)), e !== null ? Wf(e) : null;
}
function Wf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Wf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Kf = Me.unstable_scheduleCallback,
  _u = Me.unstable_cancelCallback,
  qg = Me.unstable_shouldYield,
  Zg = Me.unstable_requestPaint,
  q = Me.unstable_now,
  e0 = Me.unstable_getCurrentPriorityLevel,
  al = Me.unstable_ImmediatePriority,
  Gf = Me.unstable_UserBlockingPriority,
  Yi = Me.unstable_NormalPriority,
  t0 = Me.unstable_LowPriority,
  Qf = Me.unstable_IdlePriority,
  js = null,
  qe = null;
function n0(e) {
  if (qe && typeof qe.onCommitFiberRoot == "function")
    try {
      qe.onCommitFiberRoot(js, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ke = Math.clz32 ? Math.clz32 : s0,
  r0 = Math.log,
  i0 = Math.LN2;
function s0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((r0(e) / i0) | 0)) | 0;
}
var fi = 64,
  hi = 4194304;
function pr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Xi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = pr(a)) : ((s &= o), s !== 0 && (r = pr(s)));
  } else (o = n & ~i), o !== 0 ? (r = pr(o)) : s !== 0 && (r = pr(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ke(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function o0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function a0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - Ke(s),
      a = 1 << o,
      l = i[o];
    l === -1
      ? (!(a & n) || a & r) && (i[o] = o0(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function ra(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Yf() {
  var e = fi;
  return (fi <<= 1), !(fi & 4194240) && (fi = 64), e;
}
function no(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function qr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ke(t)),
    (e[t] = n);
}
function l0(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ke(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function ll(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ke(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var F = 0;
function Xf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Jf,
  ul,
  qf,
  Zf,
  eh,
  ia = !1,
  pi = [],
  Mt = null,
  Dt = null,
  Lt = null,
  Rr = new Map(),
  Ir = new Map(),
  Tt = [],
  u0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Fu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Mt = null;
      break;
    case "dragenter":
    case "dragleave":
      Dt = null;
      break;
    case "mouseover":
    case "mouseout":
      Lt = null;
      break;
    case "pointerover":
    case "pointerout":
      Rr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ir.delete(t.pointerId);
  }
}
function ir(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = ei(t)), t !== null && ul(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function c0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Mt = ir(Mt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Dt = ir(Dt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Lt = ir(Lt, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Rr.set(s, ir(Rr.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Ir.set(s, ir(Ir.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function th(e) {
  var t = en(e.target);
  if (t !== null) {
    var n = gn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Hf(n)), t !== null)) {
          (e.blockedOn = t),
            eh(e.priority, function () {
              qf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Di(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = sa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Zo = r), n.target.dispatchEvent(r), (Zo = null);
    } else return (t = ei(n)), t !== null && ul(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Bu(e, t, n) {
  Di(e) && n.delete(t);
}
function d0() {
  (ia = !1),
    Mt !== null && Di(Mt) && (Mt = null),
    Dt !== null && Di(Dt) && (Dt = null),
    Lt !== null && Di(Lt) && (Lt = null),
    Rr.forEach(Bu),
    Ir.forEach(Bu);
}
function sr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ia ||
      ((ia = !0),
      Me.unstable_scheduleCallback(Me.unstable_NormalPriority, d0)));
}
function zr(e) {
  function t(i) {
    return sr(i, e);
  }
  if (0 < pi.length) {
    sr(pi[0], e);
    for (var n = 1; n < pi.length; n++) {
      var r = pi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Mt !== null && sr(Mt, e),
      Dt !== null && sr(Dt, e),
      Lt !== null && sr(Lt, e),
      Rr.forEach(t),
      Ir.forEach(t),
      n = 0;
    n < Tt.length;
    n++
  )
    (r = Tt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tt.length && ((n = Tt[0]), n.blockedOn === null); )
    th(n), n.blockedOn === null && Tt.shift();
}
var _n = yt.ReactCurrentBatchConfig,
  Ji = !0;
function f0(e, t, n, r) {
  var i = F,
    s = _n.transition;
  _n.transition = null;
  try {
    (F = 1), cl(e, t, n, r);
  } finally {
    (F = i), (_n.transition = s);
  }
}
function h0(e, t, n, r) {
  var i = F,
    s = _n.transition;
  _n.transition = null;
  try {
    (F = 4), cl(e, t, n, r);
  } finally {
    (F = i), (_n.transition = s);
  }
}
function cl(e, t, n, r) {
  if (Ji) {
    var i = sa(e, t, n, r);
    if (i === null) ho(e, t, r, qi, n), Fu(e, r);
    else if (c0(i, e, t, n, r)) r.stopPropagation();
    else if ((Fu(e, r), t & 4 && -1 < u0.indexOf(e))) {
      for (; i !== null; ) {
        var s = ei(i);
        if (
          (s !== null && Jf(s),
          (s = sa(e, t, n, r)),
          s === null && ho(e, t, r, qi, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else ho(e, t, r, null, n);
  }
}
var qi = null;
function sa(e, t, n, r) {
  if (((qi = null), (e = ol(r)), (e = en(e)), e !== null))
    if (((t = gn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Hf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (qi = e), null;
}
function nh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (e0()) {
        case al:
          return 1;
        case Gf:
          return 4;
        case Yi:
        case t0:
          return 16;
        case Qf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var At = null,
  dl = null,
  Li = null;
function rh() {
  if (Li) return Li;
  var e,
    t = dl,
    n = t.length,
    r,
    i = "value" in At ? At.value : At.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Li = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Vi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function mi() {
  return !0;
}
function Uu() {
  return !1;
}
function Ve(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? mi
        : Uu),
      (this.isPropagationStopped = Uu),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = mi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = mi));
      },
      persist: function () {},
      isPersistent: mi,
    }),
    t
  );
}
var qn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  fl = Ve(qn),
  Zr = Q({}, qn, { view: 0, detail: 0 }),
  p0 = Ve(Zr),
  ro,
  io,
  or,
  As = Q({}, Zr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: hl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== or &&
            (or && e.type === "mousemove"
              ? ((ro = e.screenX - or.screenX), (io = e.screenY - or.screenY))
              : (io = ro = 0),
            (or = e)),
          ro);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : io;
    },
  }),
  Hu = Ve(As),
  m0 = Q({}, As, { dataTransfer: 0 }),
  g0 = Ve(m0),
  v0 = Q({}, Zr, { relatedTarget: 0 }),
  so = Ve(v0),
  y0 = Q({}, qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  x0 = Ve(y0),
  w0 = Q({}, qn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  S0 = Ve(w0),
  k0 = Q({}, qn, { data: 0 }),
  $u = Ve(k0),
  P0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  E0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  C0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function T0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = C0[e]) ? !!t[e] : !1;
}
function hl() {
  return T0;
}
var j0 = Q({}, Zr, {
    key: function (e) {
      if (e.key) {
        var t = P0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Vi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? E0[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: hl,
    charCode: function (e) {
      return e.type === "keypress" ? Vi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Vi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  A0 = Ve(j0),
  N0 = Q({}, As, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Wu = Ve(N0),
  M0 = Q({}, Zr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: hl,
  }),
  D0 = Ve(M0),
  L0 = Q({}, qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  V0 = Ve(L0),
  R0 = Q({}, As, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  I0 = Ve(R0),
  z0 = [9, 13, 27, 32],
  pl = pt && "CompositionEvent" in window,
  wr = null;
pt && "documentMode" in document && (wr = document.documentMode);
var O0 = pt && "TextEvent" in window && !wr,
  ih = pt && (!pl || (wr && 8 < wr && 11 >= wr)),
  Ku = " ",
  Gu = !1;
function sh(e, t) {
  switch (e) {
    case "keyup":
      return z0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function oh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Sn = !1;
function b0(e, t) {
  switch (e) {
    case "compositionend":
      return oh(t);
    case "keypress":
      return t.which !== 32 ? null : ((Gu = !0), Ku);
    case "textInput":
      return (e = t.data), e === Ku && Gu ? null : e;
    default:
      return null;
  }
}
function _0(e, t) {
  if (Sn)
    return e === "compositionend" || (!pl && sh(e, t))
      ? ((e = rh()), (Li = dl = At = null), (Sn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ih && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var F0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Qu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!F0[e.type] : t === "textarea";
}
function ah(e, t, n, r) {
  bf(r),
    (t = Zi(t, "onChange")),
    0 < t.length &&
      ((n = new fl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Sr = null,
  Or = null;
function B0(e) {
  yh(e, 0);
}
function Ns(e) {
  var t = En(e);
  if (Df(t)) return e;
}
function U0(e, t) {
  if (e === "change") return t;
}
var lh = !1;
if (pt) {
  var oo;
  if (pt) {
    var ao = "oninput" in document;
    if (!ao) {
      var Yu = document.createElement("div");
      Yu.setAttribute("oninput", "return;"),
        (ao = typeof Yu.oninput == "function");
    }
    oo = ao;
  } else oo = !1;
  lh = oo && (!document.documentMode || 9 < document.documentMode);
}
function Xu() {
  Sr && (Sr.detachEvent("onpropertychange", uh), (Or = Sr = null));
}
function uh(e) {
  if (e.propertyName === "value" && Ns(Or)) {
    var t = [];
    ah(t, Or, e, ol(e)), Uf(B0, t);
  }
}
function H0(e, t, n) {
  e === "focusin"
    ? (Xu(), (Sr = t), (Or = n), Sr.attachEvent("onpropertychange", uh))
    : e === "focusout" && Xu();
}
function $0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ns(Or);
}
function W0(e, t) {
  if (e === "click") return Ns(t);
}
function K0(e, t) {
  if (e === "input" || e === "change") return Ns(t);
}
function G0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Qe = typeof Object.is == "function" ? Object.is : G0;
function br(e, t) {
  if (Qe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Bo.call(t, i) || !Qe(e[i], t[i])) return !1;
  }
  return !0;
}
function Ju(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function qu(e, t) {
  var n = Ju(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ju(n);
  }
}
function ch(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ch(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function dh() {
  for (var e = window, t = Ki(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ki(e.document);
  }
  return t;
}
function ml(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Q0(e) {
  var t = dh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ch(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ml(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = qu(n, s));
        var o = qu(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Y0 = pt && "documentMode" in document && 11 >= document.documentMode,
  kn = null,
  oa = null,
  kr = null,
  aa = !1;
function Zu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  aa ||
    kn == null ||
    kn !== Ki(r) ||
    ((r = kn),
    "selectionStart" in r && ml(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (kr && br(kr, r)) ||
      ((kr = r),
      (r = Zi(oa, "onSelect")),
      0 < r.length &&
        ((t = new fl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = kn))));
}
function gi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Pn = {
    animationend: gi("Animation", "AnimationEnd"),
    animationiteration: gi("Animation", "AnimationIteration"),
    animationstart: gi("Animation", "AnimationStart"),
    transitionend: gi("Transition", "TransitionEnd"),
  },
  lo = {},
  fh = {};
pt &&
  ((fh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Pn.animationend.animation,
    delete Pn.animationiteration.animation,
    delete Pn.animationstart.animation),
  "TransitionEvent" in window || delete Pn.transitionend.transition);
function Ms(e) {
  if (lo[e]) return lo[e];
  if (!Pn[e]) return e;
  var t = Pn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in fh) return (lo[e] = t[n]);
  return e;
}
var hh = Ms("animationend"),
  ph = Ms("animationiteration"),
  mh = Ms("animationstart"),
  gh = Ms("transitionend"),
  vh = new Map(),
  ec =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ut(e, t) {
  vh.set(e, t), mn(t, [e]);
}
for (var uo = 0; uo < ec.length; uo++) {
  var co = ec[uo],
    X0 = co.toLowerCase(),
    J0 = co[0].toUpperCase() + co.slice(1);
  Ut(X0, "on" + J0);
}
Ut(hh, "onAnimationEnd");
Ut(ph, "onAnimationIteration");
Ut(mh, "onAnimationStart");
Ut("dblclick", "onDoubleClick");
Ut("focusin", "onFocus");
Ut("focusout", "onBlur");
Ut(gh, "onTransitionEnd");
Un("onMouseEnter", ["mouseout", "mouseover"]);
Un("onMouseLeave", ["mouseout", "mouseover"]);
Un("onPointerEnter", ["pointerout", "pointerover"]);
Un("onPointerLeave", ["pointerout", "pointerover"]);
mn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
mn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
mn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
mn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var mr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  q0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));
function tc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Xg(r, t, void 0, e), (e.currentTarget = null);
}
function yh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          tc(i, a, u), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          tc(i, a, u), (s = l);
        }
    }
  }
  if (Qi) throw ((e = na), (Qi = !1), (na = null), e);
}
function U(e, t) {
  var n = t[fa];
  n === void 0 && (n = t[fa] = new Set());
  var r = e + "__bubble";
  n.has(r) || (xh(t, e, 2, !1), n.add(r));
}
function fo(e, t, n) {
  var r = 0;
  t && (r |= 4), xh(n, e, r, t);
}
var vi = "_reactListening" + Math.random().toString(36).slice(2);
function _r(e) {
  if (!e[vi]) {
    (e[vi] = !0),
      Tf.forEach(function (n) {
        n !== "selectionchange" && (q0.has(n) || fo(n, !1, e), fo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[vi] || ((t[vi] = !0), fo("selectionchange", !1, t));
  }
}
function xh(e, t, n, r) {
  switch (nh(t)) {
    case 1:
      var i = f0;
      break;
    case 4:
      i = h0;
      break;
    default:
      i = cl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ta ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function ho(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = en(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Uf(function () {
    var u = s,
      c = ol(n),
      d = [];
    e: {
      var h = vh.get(e);
      if (h !== void 0) {
        var v = fl,
          y = e;
        switch (e) {
          case "keypress":
            if (Vi(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = A0;
            break;
          case "focusin":
            (y = "focus"), (v = so);
            break;
          case "focusout":
            (y = "blur"), (v = so);
            break;
          case "beforeblur":
          case "afterblur":
            v = so;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Hu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = g0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = D0;
            break;
          case hh:
          case ph:
          case mh:
            v = x0;
            break;
          case gh:
            v = V0;
            break;
          case "scroll":
            v = p0;
            break;
          case "wheel":
            v = I0;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = S0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Wu;
        }
        var x = (t & 4) !== 0,
          P = !x && e === "scroll",
          m = x ? (h !== null ? h + "Capture" : null) : h;
        x = [];
        for (var p = u, g; p !== null; ) {
          g = p;
          var w = g.stateNode;
          if (
            (g.tag === 5 &&
              w !== null &&
              ((g = w),
              m !== null && ((w = Vr(p, m)), w != null && x.push(Fr(p, w, g)))),
            P)
          )
            break;
          p = p.return;
        }
        0 < x.length &&
          ((h = new v(h, y, null, n, c)), d.push({ event: h, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Zo &&
            (y = n.relatedTarget || n.fromElement) &&
            (en(y) || y[mt]))
        )
          break e;
        if (
          (v || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = u),
              (y = y ? en(y) : null),
              y !== null &&
                ((P = gn(y)), y !== P || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = u)),
          v !== y)
        ) {
          if (
            ((x = Hu),
            (w = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Wu),
              (w = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (P = v == null ? h : En(v)),
            (g = y == null ? h : En(y)),
            (h = new x(w, p + "leave", v, n, c)),
            (h.target = P),
            (h.relatedTarget = g),
            (w = null),
            en(c) === u &&
              ((x = new x(m, p + "enter", y, n, c)),
              (x.target = g),
              (x.relatedTarget = P),
              (w = x)),
            (P = w),
            v && y)
          )
            t: {
              for (x = v, m = y, p = 0, g = x; g; g = yn(g)) p++;
              for (g = 0, w = m; w; w = yn(w)) g++;
              for (; 0 < p - g; ) (x = yn(x)), p--;
              for (; 0 < g - p; ) (m = yn(m)), g--;
              for (; p--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                (x = yn(x)), (m = yn(m));
              }
              x = null;
            }
          else x = null;
          v !== null && nc(d, h, v, x, !1),
            y !== null && P !== null && nc(d, P, y, x, !0);
        }
      }
      e: {
        if (
          ((h = u ? En(u) : window),
          (v = h.nodeName && h.nodeName.toLowerCase()),
          v === "select" || (v === "input" && h.type === "file"))
        )
          var S = U0;
        else if (Qu(h))
          if (lh) S = K0;
          else {
            S = $0;
            var C = H0;
          }
        else
          (v = h.nodeName) &&
            v.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (S = W0);
        if (S && (S = S(e, u))) {
          ah(d, S, n, c);
          break e;
        }
        C && C(e, h, u),
          e === "focusout" &&
            (C = h._wrapperState) &&
            C.controlled &&
            h.type === "number" &&
            Qo(h, "number", h.value);
      }
      switch (((C = u ? En(u) : window), e)) {
        case "focusin":
          (Qu(C) || C.contentEditable === "true") &&
            ((kn = C), (oa = u), (kr = null));
          break;
        case "focusout":
          kr = oa = kn = null;
          break;
        case "mousedown":
          aa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (aa = !1), Zu(d, n, c);
          break;
        case "selectionchange":
          if (Y0) break;
        case "keydown":
        case "keyup":
          Zu(d, n, c);
      }
      var A;
      if (pl)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        Sn
          ? sh(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (ih &&
          n.locale !== "ko" &&
          (Sn || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && Sn && (A = rh())
            : ((At = c),
              (dl = "value" in At ? At.value : At.textContent),
              (Sn = !0))),
        (C = Zi(u, E)),
        0 < C.length &&
          ((E = new $u(E, e, null, n, c)),
          d.push({ event: E, listeners: C }),
          A ? (E.data = A) : ((A = oh(n)), A !== null && (E.data = A)))),
        (A = O0 ? b0(e, n) : _0(e, n)) &&
          ((u = Zi(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new $u("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = A)));
    }
    yh(d, t);
  });
}
function Fr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Zi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Vr(e, n)),
      s != null && r.unshift(Fr(e, s, i)),
      (s = Vr(e, t)),
      s != null && r.push(Fr(e, s, i))),
      (e = e.return);
  }
  return r;
}
function yn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function nc(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Vr(n, s)), l != null && o.unshift(Fr(n, l, a)))
        : i || ((l = Vr(n, s)), l != null && o.push(Fr(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Z0 = /\r\n?/g,
  ev = /\u0000|\uFFFD/g;
function rc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Z0,
      `
`
    )
    .replace(ev, "");
}
function yi(e, t, n) {
  if (((t = rc(t)), rc(e) !== t && n)) throw Error(k(425));
}
function es() {}
var la = null,
  ua = null;
function ca(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var da = typeof setTimeout == "function" ? setTimeout : void 0,
  tv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ic = typeof Promise == "function" ? Promise : void 0,
  nv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ic < "u"
      ? function (e) {
          return ic.resolve(null).then(e).catch(rv);
        }
      : da;
function rv(e) {
  setTimeout(function () {
    throw e;
  });
}
function po(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), zr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  zr(t);
}
function Vt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function sc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Zn = Math.random().toString(36).slice(2),
  Je = "__reactFiber$" + Zn,
  Br = "__reactProps$" + Zn,
  mt = "__reactContainer$" + Zn,
  fa = "__reactEvents$" + Zn,
  iv = "__reactListeners$" + Zn,
  sv = "__reactHandles$" + Zn;
function en(e) {
  var t = e[Je];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[mt] || n[Je])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = sc(e); e !== null; ) {
          if ((n = e[Je])) return n;
          e = sc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ei(e) {
  return (
    (e = e[Je] || e[mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function En(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Ds(e) {
  return e[Br] || null;
}
var ha = [],
  Cn = -1;
function Ht(e) {
  return { current: e };
}
function H(e) {
  0 > Cn || ((e.current = ha[Cn]), (ha[Cn] = null), Cn--);
}
function B(e, t) {
  Cn++, (ha[Cn] = e.current), (e.current = t);
}
var _t = {},
  ve = Ht(_t),
  Ee = Ht(!1),
  un = _t;
function Hn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _t;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ce(e) {
  return (e = e.childContextTypes), e != null;
}
function ts() {
  H(Ee), H(ve);
}
function oc(e, t, n) {
  if (ve.current !== _t) throw Error(k(168));
  B(ve, t), B(Ee, n);
}
function wh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(k(108, Hg(e) || "Unknown", i));
  return Q({}, n, r);
}
function ns(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || _t),
    (un = ve.current),
    B(ve, e),
    B(Ee, Ee.current),
    !0
  );
}
function ac(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = wh(e, t, un)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(Ee),
      H(ve),
      B(ve, e))
    : H(Ee),
    B(Ee, n);
}
var it = null,
  Ls = !1,
  mo = !1;
function Sh(e) {
  it === null ? (it = [e]) : it.push(e);
}
function ov(e) {
  (Ls = !0), Sh(e);
}
function $t() {
  if (!mo && it !== null) {
    mo = !0;
    var e = 0,
      t = F;
    try {
      var n = it;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (it = null), (Ls = !1);
    } catch (i) {
      throw (it !== null && (it = it.slice(e + 1)), Kf(al, $t), i);
    } finally {
      (F = t), (mo = !1);
    }
  }
  return null;
}
var Tn = [],
  jn = 0,
  rs = null,
  is = 0,
  ze = [],
  Oe = 0,
  cn = null,
  st = 1,
  ot = "";
function Xt(e, t) {
  (Tn[jn++] = is), (Tn[jn++] = rs), (rs = e), (is = t);
}
function kh(e, t, n) {
  (ze[Oe++] = st), (ze[Oe++] = ot), (ze[Oe++] = cn), (cn = e);
  var r = st;
  e = ot;
  var i = 32 - Ke(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - Ke(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (st = (1 << (32 - Ke(t) + i)) | (n << i) | r),
      (ot = s + e);
  } else (st = (1 << s) | (n << i) | r), (ot = e);
}
function gl(e) {
  e.return !== null && (Xt(e, 1), kh(e, 1, 0));
}
function vl(e) {
  for (; e === rs; )
    (rs = Tn[--jn]), (Tn[jn] = null), (is = Tn[--jn]), (Tn[jn] = null);
  for (; e === cn; )
    (cn = ze[--Oe]),
      (ze[Oe] = null),
      (ot = ze[--Oe]),
      (ze[Oe] = null),
      (st = ze[--Oe]),
      (ze[Oe] = null);
}
var Ne = null,
  Ae = null,
  $ = !1,
  We = null;
function Ph(e, t) {
  var n = be(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function lc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ne = e), (Ae = Vt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ne = e), (Ae = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = cn !== null ? { id: st, overflow: ot } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ne = e),
            (Ae = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function pa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ma(e) {
  if ($) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!lc(e, t)) {
        if (pa(e)) throw Error(k(418));
        t = Vt(n.nextSibling);
        var r = Ne;
        t && lc(e, t)
          ? Ph(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (Ne = e));
      }
    } else {
      if (pa(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (Ne = e);
    }
  }
}
function uc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ne = e;
}
function xi(e) {
  if (e !== Ne) return !1;
  if (!$) return uc(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ca(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (pa(e)) throw (Eh(), Error(k(418)));
    for (; t; ) Ph(e, t), (t = Vt(t.nextSibling));
  }
  if ((uc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = Vt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = Ne ? Vt(e.stateNode.nextSibling) : null;
  return !0;
}
function Eh() {
  for (var e = Ae; e; ) e = Vt(e.nextSibling);
}
function $n() {
  (Ae = Ne = null), ($ = !1);
}
function yl(e) {
  We === null ? (We = [e]) : We.push(e);
}
var av = yt.ReactCurrentBatchConfig;
function ar(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function wi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function cc(e) {
  var t = e._init;
  return t(e._payload);
}
function Ch(e) {
  function t(m, p) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [p]), (m.flags |= 16)) : g.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function i(m, p) {
    return (m = Ot(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, p, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((m.flags |= 2), p) : g)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, p, g, w) {
    return p === null || p.tag !== 6
      ? ((p = ko(g, m.mode, w)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function l(m, p, g, w) {
    var S = g.type;
    return S === wn
      ? c(m, p, g.props.children, w, g.key)
      : p !== null &&
        (p.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Et &&
            cc(S) === p.type))
      ? ((w = i(p, g.props)), (w.ref = ar(m, p, g)), (w.return = m), w)
      : ((w = Fi(g.type, g.key, g.props, null, m.mode, w)),
        (w.ref = ar(m, p, g)),
        (w.return = m),
        w);
  }
  function u(m, p, g, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = Po(g, m.mode, w)), (p.return = m), p)
      : ((p = i(p, g.children || [])), (p.return = m), p);
  }
  function c(m, p, g, w, S) {
    return p === null || p.tag !== 7
      ? ((p = an(g, m.mode, w, S)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function d(m, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = ko("" + p, m.mode, g)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ui:
          return (
            (g = Fi(p.type, p.key, p.props, null, m.mode, g)),
            (g.ref = ar(m, null, p)),
            (g.return = m),
            g
          );
        case xn:
          return (p = Po(p, m.mode, g)), (p.return = m), p;
        case Et:
          var w = p._init;
          return d(m, w(p._payload), g);
      }
      if (hr(p) || nr(p))
        return (p = an(p, m.mode, g, null)), (p.return = m), p;
      wi(m, p);
    }
    return null;
  }
  function h(m, p, g, w) {
    var S = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return S !== null ? null : a(m, p, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ui:
          return g.key === S ? l(m, p, g, w) : null;
        case xn:
          return g.key === S ? u(m, p, g, w) : null;
        case Et:
          return (S = g._init), h(m, p, S(g._payload), w);
      }
      if (hr(g) || nr(g)) return S !== null ? null : c(m, p, g, w, null);
      wi(m, g);
    }
    return null;
  }
  function v(m, p, g, w, S) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (m = m.get(g) || null), a(p, m, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ui:
          return (m = m.get(w.key === null ? g : w.key) || null), l(p, m, w, S);
        case xn:
          return (m = m.get(w.key === null ? g : w.key) || null), u(p, m, w, S);
        case Et:
          var C = w._init;
          return v(m, p, g, C(w._payload), S);
      }
      if (hr(w) || nr(w)) return (m = m.get(g) || null), c(p, m, w, S, null);
      wi(p, w);
    }
    return null;
  }
  function y(m, p, g, w) {
    for (
      var S = null, C = null, A = p, E = (p = 0), z = null;
      A !== null && E < g.length;
      E++
    ) {
      A.index > E ? ((z = A), (A = null)) : (z = A.sibling);
      var L = h(m, A, g[E], w);
      if (L === null) {
        A === null && (A = z);
        break;
      }
      e && A && L.alternate === null && t(m, A),
        (p = s(L, p, E)),
        C === null ? (S = L) : (C.sibling = L),
        (C = L),
        (A = z);
    }
    if (E === g.length) return n(m, A), $ && Xt(m, E), S;
    if (A === null) {
      for (; E < g.length; E++)
        (A = d(m, g[E], w)),
          A !== null &&
            ((p = s(A, p, E)), C === null ? (S = A) : (C.sibling = A), (C = A));
      return $ && Xt(m, E), S;
    }
    for (A = r(m, A); E < g.length; E++)
      (z = v(A, m, E, g[E], w)),
        z !== null &&
          (e && z.alternate !== null && A.delete(z.key === null ? E : z.key),
          (p = s(z, p, E)),
          C === null ? (S = z) : (C.sibling = z),
          (C = z));
    return (
      e &&
        A.forEach(function (re) {
          return t(m, re);
        }),
      $ && Xt(m, E),
      S
    );
  }
  function x(m, p, g, w) {
    var S = nr(g);
    if (typeof S != "function") throw Error(k(150));
    if (((g = S.call(g)), g == null)) throw Error(k(151));
    for (
      var C = (S = null), A = p, E = (p = 0), z = null, L = g.next();
      A !== null && !L.done;
      E++, L = g.next()
    ) {
      A.index > E ? ((z = A), (A = null)) : (z = A.sibling);
      var re = h(m, A, L.value, w);
      if (re === null) {
        A === null && (A = z);
        break;
      }
      e && A && re.alternate === null && t(m, A),
        (p = s(re, p, E)),
        C === null ? (S = re) : (C.sibling = re),
        (C = re),
        (A = z);
    }
    if (L.done) return n(m, A), $ && Xt(m, E), S;
    if (A === null) {
      for (; !L.done; E++, L = g.next())
        (L = d(m, L.value, w)),
          L !== null &&
            ((p = s(L, p, E)), C === null ? (S = L) : (C.sibling = L), (C = L));
      return $ && Xt(m, E), S;
    }
    for (A = r(m, A); !L.done; E++, L = g.next())
      (L = v(A, m, E, L.value, w)),
        L !== null &&
          (e && L.alternate !== null && A.delete(L.key === null ? E : L.key),
          (p = s(L, p, E)),
          C === null ? (S = L) : (C.sibling = L),
          (C = L));
    return (
      e &&
        A.forEach(function (xt) {
          return t(m, xt);
        }),
      $ && Xt(m, E),
      S
    );
  }
  function P(m, p, g, w) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === wn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case ui:
          e: {
            for (var S = g.key, C = p; C !== null; ) {
              if (C.key === S) {
                if (((S = g.type), S === wn)) {
                  if (C.tag === 7) {
                    n(m, C.sibling),
                      (p = i(C, g.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Et &&
                    cc(S) === C.type)
                ) {
                  n(m, C.sibling),
                    (p = i(C, g.props)),
                    (p.ref = ar(m, C, g)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            g.type === wn
              ? ((p = an(g.props.children, m.mode, w, g.key)),
                (p.return = m),
                (m = p))
              : ((w = Fi(g.type, g.key, g.props, null, m.mode, w)),
                (w.ref = ar(m, p, g)),
                (w.return = m),
                (m = w));
          }
          return o(m);
        case xn:
          e: {
            for (C = g.key; p !== null; ) {
              if (p.key === C)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  n(m, p.sibling),
                    (p = i(p, g.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = Po(g, m.mode, w)), (p.return = m), (m = p);
          }
          return o(m);
        case Et:
          return (C = g._init), P(m, p, C(g._payload), w);
      }
      if (hr(g)) return y(m, p, g, w);
      if (nr(g)) return x(m, p, g, w);
      wi(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, g)), (p.return = m), (m = p))
          : (n(m, p), (p = ko(g, m.mode, w)), (p.return = m), (m = p)),
        o(m))
      : n(m, p);
  }
  return P;
}
var Wn = Ch(!0),
  Th = Ch(!1),
  ss = Ht(null),
  os = null,
  An = null,
  xl = null;
function wl() {
  xl = An = os = null;
}
function Sl(e) {
  var t = ss.current;
  H(ss), (e._currentValue = t);
}
function ga(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Fn(e, t) {
  (os = e),
    (xl = An = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Pe = !0), (e.firstContext = null));
}
function Fe(e) {
  var t = e._currentValue;
  if (xl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), An === null)) {
      if (os === null) throw Error(k(308));
      (An = e), (os.dependencies = { lanes: 0, firstContext: e });
    } else An = An.next = e;
  return t;
}
var tn = null;
function kl(e) {
  tn === null ? (tn = [e]) : tn.push(e);
}
function jh(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), kl(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    gt(e, r)
  );
}
function gt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ct = !1;
function Pl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ah(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ut(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Rt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      gt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), kl(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    gt(e, n)
  );
}
function Ri(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ll(e, n);
  }
}
function dc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function as(e, t, n, r) {
  var i = e.updateQueue;
  Ct = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var d = i.baseState;
    (o = 0), (c = u = l = null), (a = s);
    do {
      var h = a.lane,
        v = a.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            x = a;
          switch (((h = t), (v = n), x.tag)) {
            case 1:
              if (((y = x.payload), typeof y == "function")) {
                d = y.call(v, d, h);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = x.payload),
                (h = typeof y == "function" ? y.call(v, d, h) : y),
                h == null)
              )
                break e;
              d = Q({}, d, h);
              break e;
            case 2:
              Ct = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [a]) : h.push(a));
      } else
        (v = {
          eventTime: v,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = v), (l = d)) : (c = c.next = v),
          (o |= h);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (fn |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function fc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(k(191, i));
        i.call(r);
      }
    }
}
var ti = {},
  Ze = Ht(ti),
  Ur = Ht(ti),
  Hr = Ht(ti);
function nn(e) {
  if (e === ti) throw Error(k(174));
  return e;
}
function El(e, t) {
  switch ((B(Hr, t), B(Ur, e), B(Ze, ti), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Xo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Xo(t, e));
  }
  H(Ze), B(Ze, t);
}
function Kn() {
  H(Ze), H(Ur), H(Hr);
}
function Nh(e) {
  nn(Hr.current);
  var t = nn(Ze.current),
    n = Xo(t, e.type);
  t !== n && (B(Ur, e), B(Ze, n));
}
function Cl(e) {
  Ur.current === e && (H(Ze), H(Ur));
}
var W = Ht(0);
function ls(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var go = [];
function Tl() {
  for (var e = 0; e < go.length; e++)
    go[e]._workInProgressVersionPrimary = null;
  go.length = 0;
}
var Ii = yt.ReactCurrentDispatcher,
  vo = yt.ReactCurrentBatchConfig,
  dn = 0,
  G = null,
  te = null,
  oe = null,
  us = !1,
  Pr = !1,
  $r = 0,
  lv = 0;
function fe() {
  throw Error(k(321));
}
function jl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Qe(e[n], t[n])) return !1;
  return !0;
}
function Al(e, t, n, r, i, s) {
  if (
    ((dn = s),
    (G = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ii.current = e === null || e.memoizedState === null ? fv : hv),
    (e = n(r, i)),
    Pr)
  ) {
    s = 0;
    do {
      if (((Pr = !1), ($r = 0), 25 <= s)) throw Error(k(301));
      (s += 1),
        (oe = te = null),
        (t.updateQueue = null),
        (Ii.current = pv),
        (e = n(r, i));
    } while (Pr);
  }
  if (
    ((Ii.current = cs),
    (t = te !== null && te.next !== null),
    (dn = 0),
    (oe = te = G = null),
    (us = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Nl() {
  var e = $r !== 0;
  return ($r = 0), e;
}
function Xe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return oe === null ? (G.memoizedState = oe = e) : (oe = oe.next = e), oe;
}
function Be() {
  if (te === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = oe === null ? G.memoizedState : oe.next;
  if (t !== null) (oe = t), (te = e);
  else {
    if (e === null) throw Error(k(310));
    (te = e),
      (e = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null,
      }),
      oe === null ? (G.memoizedState = oe = e) : (oe = oe.next = e);
  }
  return oe;
}
function Wr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yo(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = te,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((dn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (o = r)) : (l = l.next = d),
          (G.lanes |= c),
          (fn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = r) : (l.next = a),
      Qe(r, t.memoizedState) || (Pe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (G.lanes |= s), (fn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function xo(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    Qe(s, t.memoizedState) || (Pe = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Mh() {}
function Dh(e, t) {
  var n = G,
    r = Be(),
    i = t(),
    s = !Qe(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Pe = !0)),
    (r = r.queue),
    Ml(Rh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (oe !== null && oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Kr(9, Vh.bind(null, n, r, i, t), void 0, null),
      ae === null)
    )
      throw Error(k(349));
    dn & 30 || Lh(n, t, i);
  }
  return i;
}
function Lh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Vh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ih(t) && zh(e);
}
function Rh(e, t, n) {
  return n(function () {
    Ih(t) && zh(e);
  });
}
function Ih(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Qe(e, n);
  } catch {
    return !0;
  }
}
function zh(e) {
  var t = gt(e, 1);
  t !== null && Ge(t, e, 1, -1);
}
function hc(e) {
  var t = Xe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = dv.bind(null, G, e)),
    [t.memoizedState, e]
  );
}
function Kr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Oh() {
  return Be().memoizedState;
}
function zi(e, t, n, r) {
  var i = Xe();
  (G.flags |= e),
    (i.memoizedState = Kr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Vs(e, t, n, r) {
  var i = Be();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (te !== null) {
    var o = te.memoizedState;
    if (((s = o.destroy), r !== null && jl(r, o.deps))) {
      i.memoizedState = Kr(t, n, s, r);
      return;
    }
  }
  (G.flags |= e), (i.memoizedState = Kr(1 | t, n, s, r));
}
function pc(e, t) {
  return zi(8390656, 8, e, t);
}
function Ml(e, t) {
  return Vs(2048, 8, e, t);
}
function bh(e, t) {
  return Vs(4, 2, e, t);
}
function _h(e, t) {
  return Vs(4, 4, e, t);
}
function Fh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Bh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Vs(4, 4, Fh.bind(null, t, e), n)
  );
}
function Dl() {}
function Uh(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && jl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Hh(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && jl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function $h(e, t, n) {
  return dn & 21
    ? (Qe(n, t) || ((n = Yf()), (G.lanes |= n), (fn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Pe = !0)), (e.memoizedState = n));
}
function uv(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = vo.transition;
  vo.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (vo.transition = r);
  }
}
function Wh() {
  return Be().memoizedState;
}
function cv(e, t, n) {
  var r = zt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Kh(e))
  )
    Gh(t, n);
  else if (((n = jh(e, t, n, r)), n !== null)) {
    var i = xe();
    Ge(n, e, r, i), Qh(n, t, r);
  }
}
function dv(e, t, n) {
  var r = zt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Kh(e)) Gh(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Qe(a, o))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), kl(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = jh(e, t, i, r)),
      n !== null && ((i = xe()), Ge(n, e, r, i), Qh(n, t, r));
  }
}
function Kh(e) {
  var t = e.alternate;
  return e === G || (t !== null && t === G);
}
function Gh(e, t) {
  Pr = us = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Qh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ll(e, n);
  }
}
var cs = {
    readContext: Fe,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1,
  },
  fv = {
    readContext: Fe,
    useCallback: function (e, t) {
      return (Xe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Fe,
    useEffect: pc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        zi(4194308, 4, Fh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return zi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return zi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Xe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Xe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = cv.bind(null, G, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Xe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: hc,
    useDebugValue: Dl,
    useDeferredValue: function (e) {
      return (Xe().memoizedState = e);
    },
    useTransition: function () {
      var e = hc(!1),
        t = e[0];
      return (e = uv.bind(null, e[1])), (Xe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = G,
        i = Xe();
      if ($) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ae === null)) throw Error(k(349));
        dn & 30 || Lh(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        pc(Rh.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Kr(9, Vh.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Xe(),
        t = ae.identifierPrefix;
      if ($) {
        var n = ot,
          r = st;
        (n = (r & ~(1 << (32 - Ke(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = $r++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = lv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  hv = {
    readContext: Fe,
    useCallback: Uh,
    useContext: Fe,
    useEffect: Ml,
    useImperativeHandle: Bh,
    useInsertionEffect: bh,
    useLayoutEffect: _h,
    useMemo: Hh,
    useReducer: yo,
    useRef: Oh,
    useState: function () {
      return yo(Wr);
    },
    useDebugValue: Dl,
    useDeferredValue: function (e) {
      var t = Be();
      return $h(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = yo(Wr)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: Mh,
    useSyncExternalStore: Dh,
    useId: Wh,
    unstable_isNewReconciler: !1,
  },
  pv = {
    readContext: Fe,
    useCallback: Uh,
    useContext: Fe,
    useEffect: Ml,
    useImperativeHandle: Bh,
    useInsertionEffect: bh,
    useLayoutEffect: _h,
    useMemo: Hh,
    useReducer: xo,
    useRef: Oh,
    useState: function () {
      return xo(Wr);
    },
    useDebugValue: Dl,
    useDeferredValue: function (e) {
      var t = Be();
      return te === null ? (t.memoizedState = e) : $h(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = xo(Wr)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: Mh,
    useSyncExternalStore: Dh,
    useId: Wh,
    unstable_isNewReconciler: !1,
  };
function He(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function va(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Rs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? gn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      i = zt(e),
      s = ut(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Rt(e, s, i)),
      t !== null && (Ge(t, e, i, r), Ri(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      i = zt(e),
      s = ut(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Rt(e, s, i)),
      t !== null && (Ge(t, e, i, r), Ri(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = xe(),
      r = zt(e),
      i = ut(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Rt(e, i, r)),
      t !== null && (Ge(t, e, r, n), Ri(t, e, r));
  },
};
function mc(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !br(n, r) || !br(i, s)
      : !0
  );
}
function Yh(e, t, n) {
  var r = !1,
    i = _t,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Fe(s))
      : ((i = Ce(t) ? un : ve.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Hn(e, i) : _t)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Rs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function gc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Rs.enqueueReplaceState(t, t.state, null);
}
function ya(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Pl(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = Fe(s))
    : ((s = Ce(t) ? un : ve.current), (i.context = Hn(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (va(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Rs.enqueueReplaceState(i, i.state, null),
      as(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Gn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ug(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function wo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var mv = typeof WeakMap == "function" ? WeakMap : Map;
function Xh(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      fs || ((fs = !0), (Na = r)), xa(e, t);
    }),
    n
  );
}
function Jh(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        xa(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        xa(e, t),
          typeof r != "function" &&
            (It === null ? (It = new Set([this])) : It.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function vc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new mv();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Nv.bind(null, e, t, n)), t.then(e, e));
}
function yc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function xc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ut(-1, 1)), (t.tag = 2), Rt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var gv = yt.ReactCurrentOwner,
  Pe = !1;
function ye(e, t, n, r) {
  t.child = e === null ? Th(t, null, n, r) : Wn(t, e.child, n, r);
}
function wc(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Fn(t, i),
    (r = Al(e, t, n, r, s, i)),
    (n = Nl()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vt(e, t, i))
      : ($ && n && gl(t), (t.flags |= 1), ye(e, t, r, i), t.child)
  );
}
function Sc(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !_l(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), qh(e, t, s, r, i))
      : ((e = Fi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : br), n(o, r) && e.ref === t.ref)
    )
      return vt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ot(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function qh(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (br(s, r) && e.ref === t.ref)
      if (((Pe = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Pe = !0);
      else return (t.lanes = e.lanes), vt(e, t, i);
  }
  return wa(e, t, n, r, i);
}
function Zh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(Mn, je),
        (je |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          B(Mn, je),
          (je |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        B(Mn, je),
        (je |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      B(Mn, je),
      (je |= r);
  return ye(e, t, i, n), t.child;
}
function ep(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function wa(e, t, n, r, i) {
  var s = Ce(n) ? un : ve.current;
  return (
    (s = Hn(t, s)),
    Fn(t, i),
    (n = Al(e, t, n, r, s, i)),
    (r = Nl()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vt(e, t, i))
      : ($ && r && gl(t), (t.flags |= 1), ye(e, t, n, i), t.child)
  );
}
function kc(e, t, n, r, i) {
  if (Ce(n)) {
    var s = !0;
    ns(t);
  } else s = !1;
  if ((Fn(t, i), t.stateNode === null))
    Oi(e, t), Yh(t, n, r), ya(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Fe(u))
      : ((u = Ce(n) ? un : ve.current), (u = Hn(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && gc(t, o, r, u)),
      (Ct = !1);
    var h = t.memoizedState;
    (o.state = h),
      as(t, r, o, i),
      (l = t.memoizedState),
      a !== r || h !== l || Ee.current || Ct
        ? (typeof c == "function" && (va(t, n, c, r), (l = t.memoizedState)),
          (a = Ct || mc(t, n, a, r, h, l, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Ah(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : He(t.type, a)),
      (o.props = u),
      (d = t.pendingProps),
      (h = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Fe(l))
        : ((l = Ce(n) ? un : ve.current), (l = Hn(t, l)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || h !== l) && gc(t, o, r, l)),
      (Ct = !1),
      (h = t.memoizedState),
      (o.state = h),
      as(t, r, o, i);
    var y = t.memoizedState;
    a !== d || h !== y || Ee.current || Ct
      ? (typeof v == "function" && (va(t, n, v, r), (y = t.memoizedState)),
        (u = Ct || mc(t, n, u, r, h, y, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Sa(e, t, n, r, s, i);
}
function Sa(e, t, n, r, i, s) {
  ep(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && ac(t, n, !1), vt(e, t, s);
  (r = t.stateNode), (gv.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Wn(t, e.child, null, s)), (t.child = Wn(t, null, a, s)))
      : ye(e, t, a, s),
    (t.memoizedState = r.state),
    i && ac(t, n, !0),
    t.child
  );
}
function tp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? oc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && oc(e, t.context, !1),
    El(e, t.containerInfo);
}
function Pc(e, t, n, r, i) {
  return $n(), yl(i), (t.flags |= 256), ye(e, t, n, r), t.child;
}
var ka = { dehydrated: null, treeContext: null, retryLane: 0 };
function Pa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function np(e, t, n) {
  var r = t.pendingProps,
    i = W.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    B(W, i & 1),
    e === null)
  )
    return (
      ma(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Os(o, r, 0, null)),
              (e = an(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Pa(n)),
              (t.memoizedState = ka),
              e)
            : Ll(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return vv(e, t, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Ot(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = Ot(a, s)) : ((s = an(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Pa(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = ka),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Ot(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ll(e, t) {
  return (
    (t = Os({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Si(e, t, n, r) {
  return (
    r !== null && yl(r),
    Wn(t, e.child, null, n),
    (e = Ll(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function vv(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = wo(Error(k(422)))), Si(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = Os({ mode: "visible", children: r.children }, i, 0, null)),
        (s = an(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Wn(t, e.child, null, o),
        (t.child.memoizedState = Pa(o)),
        (t.memoizedState = ka),
        s);
  if (!(t.mode & 1)) return Si(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(k(419))), (r = wo(s, r, void 0)), Si(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Pe || a)) {
    if (((r = ae), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), gt(e, i), Ge(r, e, i, -1));
    }
    return bl(), (r = wo(Error(k(421)))), Si(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Mv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ae = Vt(i.nextSibling)),
      (Ne = t),
      ($ = !0),
      (We = null),
      e !== null &&
        ((ze[Oe++] = st),
        (ze[Oe++] = ot),
        (ze[Oe++] = cn),
        (st = e.id),
        (ot = e.overflow),
        (cn = t)),
      (t = Ll(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ec(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ga(e.return, t, n);
}
function So(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function rp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((ye(e, t, r.children, n), (r = W.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ec(e, n, t);
        else if (e.tag === 19) Ec(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((B(W, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && ls(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          So(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ls(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        So(t, !0, n, null, s);
        break;
      case "together":
        So(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Oi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function vt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (fn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ot(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ot(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function yv(e, t, n) {
  switch (t.tag) {
    case 3:
      tp(t), $n();
      break;
    case 5:
      Nh(t);
      break;
    case 1:
      Ce(t.type) && ns(t);
      break;
    case 4:
      El(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      B(ss, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? np(e, t, n)
          : (B(W, W.current & 1),
            (e = vt(e, t, n)),
            e !== null ? e.sibling : null);
      B(W, W.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return rp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        B(W, W.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Zh(e, t, n);
  }
  return vt(e, t, n);
}
var ip, Ea, sp, op;
ip = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ea = function () {};
sp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), nn(Ze.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Ko(e, i)), (r = Ko(e, r)), (s = []);
        break;
      case "select":
        (i = Q({}, i, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = Yo(e, i)), (r = Yo(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = es);
    }
    Jo(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Dr.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Dr.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && U("scroll", e),
                  s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
op = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function lr(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function xv(e, t, n) {
  var r = t.pendingProps;
  switch ((vl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return he(t), null;
    case 1:
      return Ce(t.type) && ts(), he(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Kn(),
        H(Ee),
        H(ve),
        Tl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (xi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), We !== null && (La(We), (We = null)))),
        Ea(e, t),
        he(t),
        null
      );
    case 5:
      Cl(t);
      var i = nn(Hr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        sp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return he(t), null;
        }
        if (((e = nn(Ze.current)), xi(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Je] = t), (r[Br] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < mr.length; i++) U(mr[i], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              Vu(r, s), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              Iu(r, s), U("invalid", r);
          }
          Jo(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      yi(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      yi(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Dr.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              ci(r), Ru(r, s, !0);
              break;
            case "textarea":
              ci(r), zu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = es);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Rf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Je] = t),
            (e[Br] = r),
            ip(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = qo(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < mr.length; i++) U(mr[i], e);
                i = r;
                break;
              case "source":
                U("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (i = r);
                break;
              case "details":
                U("toggle", e), (i = r);
                break;
              case "input":
                Vu(e, r), (i = Ko(e, r)), U("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Q({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                Iu(e, r), (i = Yo(e, r)), U("invalid", e);
                break;
              default:
                i = r;
            }
            Jo(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? Of(e, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && If(e, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Lr(e, l)
                    : typeof l == "number" && Lr(e, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Dr.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && U("scroll", e)
                      : l != null && nl(e, s, l, o));
              }
            switch (n) {
              case "input":
                ci(e), Ru(e, r, !1);
                break;
              case "textarea":
                ci(e), zu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + bt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? zn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      zn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = es);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return he(t), null;
    case 6:
      if (e && t.stateNode != null) op(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = nn(Hr.current)), nn(Ze.current), xi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Je] = t),
            (s = r.nodeValue !== n) && ((e = Ne), e !== null))
          )
            switch (e.tag) {
              case 3:
                yi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  yi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Je] = t),
            (t.stateNode = r);
      }
      return he(t), null;
    case 13:
      if (
        (H(W),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && Ae !== null && t.mode & 1 && !(t.flags & 128))
          Eh(), $n(), (t.flags |= 98560), (s = !1);
        else if (((s = xi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(k(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(k(317));
            s[Je] = t;
          } else
            $n(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          he(t), (s = !1);
        } else We !== null && (La(We), (We = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || W.current & 1 ? ne === 0 && (ne = 3) : bl())),
          t.updateQueue !== null && (t.flags |= 4),
          he(t),
          null);
    case 4:
      return (
        Kn(), Ea(e, t), e === null && _r(t.stateNode.containerInfo), he(t), null
      );
    case 10:
      return Sl(t.type._context), he(t), null;
    case 17:
      return Ce(t.type) && ts(), he(t), null;
    case 19:
      if ((H(W), (s = t.memoizedState), s === null)) return he(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) lr(s, !1);
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ls(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    lr(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return B(W, (W.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            q() > Qn &&
            ((t.flags |= 128), (r = !0), lr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ls(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              lr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !$)
            )
              return he(t), null;
          } else
            2 * q() - s.renderingStartTime > Qn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), lr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = q()),
          (t.sibling = null),
          (n = W.current),
          B(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (he(t), null);
    case 22:
    case 23:
      return (
        Ol(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? je & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : he(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function wv(e, t) {
  switch ((vl(t), t.tag)) {
    case 1:
      return (
        Ce(t.type) && ts(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Kn(),
        H(Ee),
        H(ve),
        Tl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Cl(t), null;
    case 13:
      if ((H(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        $n();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return H(W), null;
    case 4:
      return Kn(), null;
    case 10:
      return Sl(t.type._context), null;
    case 22:
    case 23:
      return Ol(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ki = !1,
  me = !1,
  Sv = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function Nn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Y(e, t, r);
      }
    else n.current = null;
}
function Ca(e, t, n) {
  try {
    n();
  } catch (r) {
    Y(e, t, r);
  }
}
var Cc = !1;
function kv(e, t) {
  if (((la = Ji), (e = dh()), ml(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var v;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = o + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (v = d.firstChild) !== null;

            )
              (h = d), (d = v);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++u === i && (a = o),
                h === s && ++c === r && (l = o),
                (v = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = v;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ua = { focusedElem: e, selectionRange: n }, Ji = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var x = y.memoizedProps,
                    P = y.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : He(t.type, x),
                      P
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (w) {
          Y(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (y = Cc), (Cc = !1), y;
}
function Er(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Ca(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Is(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ta(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function ap(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ap(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Je], delete t[Br], delete t[fa], delete t[iv], delete t[sv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function lp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Tc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || lp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ja(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = es));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ja(e, t, n), e = e.sibling; e !== null; ) ja(e, t, n), (e = e.sibling);
}
function Aa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Aa(e, t, n), e = e.sibling; e !== null; ) Aa(e, t, n), (e = e.sibling);
}
var le = null,
  $e = !1;
function wt(e, t, n) {
  for (n = n.child; n !== null; ) up(e, t, n), (n = n.sibling);
}
function up(e, t, n) {
  if (qe && typeof qe.onCommitFiberUnmount == "function")
    try {
      qe.onCommitFiberUnmount(js, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || Nn(n, t);
    case 6:
      var r = le,
        i = $e;
      (le = null),
        wt(e, t, n),
        (le = r),
        ($e = i),
        le !== null &&
          ($e
            ? ((e = le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null &&
        ($e
          ? ((e = le),
            (n = n.stateNode),
            e.nodeType === 8
              ? po(e.parentNode, n)
              : e.nodeType === 1 && po(e, n),
            zr(e))
          : po(le, n.stateNode));
      break;
    case 4:
      (r = le),
        (i = $e),
        (le = n.stateNode.containerInfo),
        ($e = !0),
        wt(e, t, n),
        (le = r),
        ($e = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Ca(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      wt(e, t, n);
      break;
    case 1:
      if (
        !me &&
        (Nn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Y(n, t, a);
        }
      wt(e, t, n);
      break;
    case 21:
      wt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((me = (r = me) || n.memoizedState !== null), wt(e, t, n), (me = r))
        : wt(e, t, n);
      break;
    default:
      wt(e, t, n);
  }
}
function jc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Sv()),
      t.forEach(function (r) {
        var i = Dv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ue(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (le = a.stateNode), ($e = !1);
              break e;
            case 3:
              (le = a.stateNode.containerInfo), ($e = !0);
              break e;
            case 4:
              (le = a.stateNode.containerInfo), ($e = !0);
              break e;
          }
          a = a.return;
        }
        if (le === null) throw Error(k(160));
        up(s, o, i), (le = null), ($e = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        Y(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) cp(t, e), (t = t.sibling);
}
function cp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ue(t, e), Ye(e), r & 4)) {
        try {
          Er(3, e, e.return), Is(3, e);
        } catch (x) {
          Y(e, e.return, x);
        }
        try {
          Er(5, e, e.return);
        } catch (x) {
          Y(e, e.return, x);
        }
      }
      break;
    case 1:
      Ue(t, e), Ye(e), r & 512 && n !== null && Nn(n, n.return);
      break;
    case 5:
      if (
        (Ue(t, e),
        Ye(e),
        r & 512 && n !== null && Nn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Lr(i, "");
        } catch (x) {
          Y(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && Lf(i, s),
              qo(a, o);
            var u = qo(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                d = l[o + 1];
              c === "style"
                ? Of(i, d)
                : c === "dangerouslySetInnerHTML"
                ? If(i, d)
                : c === "children"
                ? Lr(i, d)
                : nl(i, c, d, u);
            }
            switch (a) {
              case "input":
                Go(i, s);
                break;
              case "textarea":
                Vf(i, s);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var v = s.value;
                v != null
                  ? zn(i, !!s.multiple, v, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? zn(i, !!s.multiple, s.defaultValue, !0)
                      : zn(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Br] = s;
          } catch (x) {
            Y(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Ue(t, e), Ye(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (x) {
          Y(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Ue(t, e), Ye(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          zr(t.containerInfo);
        } catch (x) {
          Y(e, e.return, x);
        }
      break;
    case 4:
      Ue(t, e), Ye(e);
      break;
    case 13:
      Ue(t, e),
        Ye(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Il = q())),
        r & 4 && jc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (u = me) || c), Ue(t, e), (me = u)) : Ue(t, e),
        Ye(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (N = e, c = e.child; c !== null; ) {
            for (d = N = c; N !== null; ) {
              switch (((h = N), (v = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Er(4, h, h.return);
                  break;
                case 1:
                  Nn(h, h.return);
                  var y = h.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (x) {
                      Y(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Nn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Nc(d);
                    continue;
                  }
              }
              v !== null ? ((v.return = h), (N = v)) : Nc(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = zf("display", o)));
              } catch (x) {
                Y(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (x) {
                Y(e, e.return, x);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Ue(t, e), Ye(e), r & 4 && jc(e);
      break;
    case 21:
      break;
    default:
      Ue(t, e), Ye(e);
  }
}
function Ye(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (lp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Lr(i, ""), (r.flags &= -33));
          var s = Tc(e);
          Aa(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Tc(e);
          ja(e, a, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (l) {
      Y(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Pv(e, t, n) {
  (N = e), dp(e);
}
function dp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var i = N,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || ki;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || me;
        a = ki;
        var u = me;
        if (((ki = o), (me = l) && !u))
          for (N = i; N !== null; )
            (o = N),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Mc(i)
                : l !== null
                ? ((l.return = o), (N = l))
                : Mc(i);
        for (; s !== null; ) (N = s), dp(s), (s = s.sibling);
        (N = i), (ki = a), (me = u);
      }
      Ac(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (N = s)) : Ac(e);
  }
}
function Ac(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || Is(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : He(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && fc(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                fc(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && zr(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        me || (t.flags & 512 && Ta(t));
      } catch (h) {
        Y(t, t.return, h);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Nc(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Mc(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Is(4, t);
          } catch (l) {
            Y(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Y(t, i, l);
            }
          }
          var s = t.return;
          try {
            Ta(t);
          } catch (l) {
            Y(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ta(t);
          } catch (l) {
            Y(t, o, l);
          }
      }
    } catch (l) {
      Y(t, t.return, l);
    }
    if (t === e) {
      N = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (N = a);
      break;
    }
    N = t.return;
  }
}
var Ev = Math.ceil,
  ds = yt.ReactCurrentDispatcher,
  Vl = yt.ReactCurrentOwner,
  _e = yt.ReactCurrentBatchConfig,
  O = 0,
  ae = null,
  Z = null,
  ue = 0,
  je = 0,
  Mn = Ht(0),
  ne = 0,
  Gr = null,
  fn = 0,
  zs = 0,
  Rl = 0,
  Cr = null,
  ke = null,
  Il = 0,
  Qn = 1 / 0,
  rt = null,
  fs = !1,
  Na = null,
  It = null,
  Pi = !1,
  Nt = null,
  hs = 0,
  Tr = 0,
  Ma = null,
  bi = -1,
  _i = 0;
function xe() {
  return O & 6 ? q() : bi !== -1 ? bi : (bi = q());
}
function zt(e) {
  return e.mode & 1
    ? O & 2 && ue !== 0
      ? ue & -ue
      : av.transition !== null
      ? (_i === 0 && (_i = Yf()), _i)
      : ((e = F),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : nh(e.type))),
        e)
    : 1;
}
function Ge(e, t, n, r) {
  if (50 < Tr) throw ((Tr = 0), (Ma = null), Error(k(185)));
  qr(e, n, r),
    (!(O & 2) || e !== ae) &&
      (e === ae && (!(O & 2) && (zs |= n), ne === 4 && jt(e, ue)),
      Te(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((Qn = q() + 500), Ls && $t()));
}
function Te(e, t) {
  var n = e.callbackNode;
  a0(e, t);
  var r = Xi(e, e === ae ? ue : 0);
  if (r === 0)
    n !== null && _u(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && _u(n), t === 1))
      e.tag === 0 ? ov(Dc.bind(null, e)) : Sh(Dc.bind(null, e)),
        nv(function () {
          !(O & 6) && $t();
        }),
        (n = null);
    else {
      switch (Xf(r)) {
        case 1:
          n = al;
          break;
        case 4:
          n = Gf;
          break;
        case 16:
          n = Yi;
          break;
        case 536870912:
          n = Qf;
          break;
        default:
          n = Yi;
      }
      n = xp(n, fp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function fp(e, t) {
  if (((bi = -1), (_i = 0), O & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (Bn() && e.callbackNode !== n) return null;
  var r = Xi(e, e === ae ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ps(e, r);
  else {
    t = r;
    var i = O;
    O |= 2;
    var s = pp();
    (ae !== e || ue !== t) && ((rt = null), (Qn = q() + 500), on(e, t));
    do
      try {
        jv();
        break;
      } catch (a) {
        hp(e, a);
      }
    while (!0);
    wl(),
      (ds.current = s),
      (O = i),
      Z !== null ? (t = 0) : ((ae = null), (ue = 0), (t = ne));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ra(e)), i !== 0 && ((r = i), (t = Da(e, i)))), t === 1)
    )
      throw ((n = Gr), on(e, 0), jt(e, r), Te(e, q()), n);
    if (t === 6) jt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Cv(i) &&
          ((t = ps(e, r)),
          t === 2 && ((s = ra(e)), s !== 0 && ((r = s), (t = Da(e, s)))),
          t === 1))
      )
        throw ((n = Gr), on(e, 0), jt(e, r), Te(e, q()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Jt(e, ke, rt);
          break;
        case 3:
          if (
            (jt(e, r), (r & 130023424) === r && ((t = Il + 500 - q()), 10 < t))
          ) {
            if (Xi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              xe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = da(Jt.bind(null, e, ke, rt), t);
            break;
          }
          Jt(e, ke, rt);
          break;
        case 4:
          if ((jt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Ke(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Ev(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = da(Jt.bind(null, e, ke, rt), r);
            break;
          }
          Jt(e, ke, rt);
          break;
        case 5:
          Jt(e, ke, rt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Te(e, q()), e.callbackNode === n ? fp.bind(null, e) : null;
}
function Da(e, t) {
  var n = Cr;
  return (
    e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256),
    (e = ps(e, t)),
    e !== 2 && ((t = ke), (ke = n), t !== null && La(t)),
    e
  );
}
function La(e) {
  ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function Cv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Qe(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function jt(e, t) {
  for (
    t &= ~Rl,
      t &= ~zs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ke(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Dc(e) {
  if (O & 6) throw Error(k(327));
  Bn();
  var t = Xi(e, 0);
  if (!(t & 1)) return Te(e, q()), null;
  var n = ps(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ra(e);
    r !== 0 && ((t = r), (n = Da(e, r)));
  }
  if (n === 1) throw ((n = Gr), on(e, 0), jt(e, t), Te(e, q()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Jt(e, ke, rt),
    Te(e, q()),
    null
  );
}
function zl(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    (O = n), O === 0 && ((Qn = q() + 500), Ls && $t());
  }
}
function hn(e) {
  Nt !== null && Nt.tag === 0 && !(O & 6) && Bn();
  var t = O;
  O |= 1;
  var n = _e.transition,
    r = F;
  try {
    if (((_e.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (_e.transition = n), (O = t), !(O & 6) && $t();
  }
}
function Ol() {
  (je = Mn.current), H(Mn);
}
function on(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), tv(n)), Z !== null))
    for (n = Z.return; n !== null; ) {
      var r = n;
      switch ((vl(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ts();
          break;
        case 3:
          Kn(), H(Ee), H(ve), Tl();
          break;
        case 5:
          Cl(r);
          break;
        case 4:
          Kn();
          break;
        case 13:
          H(W);
          break;
        case 19:
          H(W);
          break;
        case 10:
          Sl(r.type._context);
          break;
        case 22:
        case 23:
          Ol();
      }
      n = n.return;
    }
  if (
    ((ae = e),
    (Z = e = Ot(e.current, null)),
    (ue = je = t),
    (ne = 0),
    (Gr = null),
    (Rl = zs = fn = 0),
    (ke = Cr = null),
    tn !== null)
  ) {
    for (t = 0; t < tn.length; t++)
      if (((n = tn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    tn = null;
  }
  return e;
}
function hp(e, t) {
  do {
    var n = Z;
    try {
      if ((wl(), (Ii.current = cs), us)) {
        for (var r = G.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        us = !1;
      }
      if (
        ((dn = 0),
        (oe = te = G = null),
        (Pr = !1),
        ($r = 0),
        (Vl.current = null),
        n === null || n.return === null)
      ) {
        (ne = 1), (Gr = t), (Z = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = ue),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = yc(o);
          if (v !== null) {
            (v.flags &= -257),
              xc(v, o, a, s, t),
              v.mode & 1 && vc(s, u, t),
              (t = v),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var x = new Set();
              x.add(l), (t.updateQueue = x);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              vc(s, u, t), bl();
              break e;
            }
            l = Error(k(426));
          }
        } else if ($ && a.mode & 1) {
          var P = yc(o);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              xc(P, o, a, s, t),
              yl(Gn(l, a));
            break e;
          }
        }
        (s = l = Gn(l, a)),
          ne !== 4 && (ne = 2),
          Cr === null ? (Cr = [s]) : Cr.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var m = Xh(s, l, t);
              dc(s, m);
              break e;
            case 1:
              a = l;
              var p = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (It === null || !It.has(g))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var w = Jh(s, a, t);
                dc(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      gp(n);
    } catch (S) {
      (t = S), Z === n && n !== null && (Z = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function pp() {
  var e = ds.current;
  return (ds.current = cs), e === null ? cs : e;
}
function bl() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    ae === null || (!(fn & 268435455) && !(zs & 268435455)) || jt(ae, ue);
}
function ps(e, t) {
  var n = O;
  O |= 2;
  var r = pp();
  (ae !== e || ue !== t) && ((rt = null), on(e, t));
  do
    try {
      Tv();
      break;
    } catch (i) {
      hp(e, i);
    }
  while (!0);
  if ((wl(), (O = n), (ds.current = r), Z !== null)) throw Error(k(261));
  return (ae = null), (ue = 0), ne;
}
function Tv() {
  for (; Z !== null; ) mp(Z);
}
function jv() {
  for (; Z !== null && !qg(); ) mp(Z);
}
function mp(e) {
  var t = yp(e.alternate, e, je);
  (e.memoizedProps = e.pendingProps),
    t === null ? gp(e) : (Z = t),
    (Vl.current = null);
}
function gp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = wv(n, t)), n !== null)) {
        (n.flags &= 32767), (Z = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ne = 6), (Z = null);
        return;
      }
    } else if (((n = xv(n, t, je)), n !== null)) {
      Z = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function Jt(e, t, n) {
  var r = F,
    i = _e.transition;
  try {
    (_e.transition = null), (F = 1), Av(e, t, n, r);
  } finally {
    (_e.transition = i), (F = r);
  }
  return null;
}
function Av(e, t, n, r) {
  do Bn();
  while (Nt !== null);
  if (O & 6) throw Error(k(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (l0(e, s),
    e === ae && ((Z = ae = null), (ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Pi ||
      ((Pi = !0),
      xp(Yi, function () {
        return Bn(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = _e.transition), (_e.transition = null);
    var o = F;
    F = 1;
    var a = O;
    (O |= 4),
      (Vl.current = null),
      kv(e, n),
      cp(n, e),
      Q0(ua),
      (Ji = !!la),
      (ua = la = null),
      (e.current = n),
      Pv(n),
      Zg(),
      (O = a),
      (F = o),
      (_e.transition = s);
  } else e.current = n;
  if (
    (Pi && ((Pi = !1), (Nt = e), (hs = i)),
    (s = e.pendingLanes),
    s === 0 && (It = null),
    n0(n.stateNode),
    Te(e, q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (fs) throw ((fs = !1), (e = Na), (Na = null), e);
  return (
    hs & 1 && e.tag !== 0 && Bn(),
    (s = e.pendingLanes),
    s & 1 ? (e === Ma ? Tr++ : ((Tr = 0), (Ma = e))) : (Tr = 0),
    $t(),
    null
  );
}
function Bn() {
  if (Nt !== null) {
    var e = Xf(hs),
      t = _e.transition,
      n = F;
    try {
      if (((_e.transition = null), (F = 16 > e ? 16 : e), Nt === null))
        var r = !1;
      else {
        if (((e = Nt), (Nt = null), (hs = 0), O & 6)) throw Error(k(331));
        var i = O;
        for (O |= 4, N = e.current; N !== null; ) {
          var s = N,
            o = s.child;
          if (N.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (N = u; N !== null; ) {
                  var c = N;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (N = d);
                  else
                    for (; N !== null; ) {
                      c = N;
                      var h = c.sibling,
                        v = c.return;
                      if ((ap(c), c === u)) {
                        N = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = v), (N = h);
                        break;
                      }
                      N = v;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
                  do {
                    var P = x.sibling;
                    (x.sibling = null), (x = P);
                  } while (x !== null);
                }
              }
              N = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (N = o);
          else
            e: for (; N !== null; ) {
              if (((s = N), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Er(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (N = m);
                break e;
              }
              N = s.return;
            }
        }
        var p = e.current;
        for (N = p; N !== null; ) {
          o = N;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (N = g);
          else
            e: for (o = p; N !== null; ) {
              if (((a = N), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Is(9, a);
                  }
                } catch (S) {
                  Y(a, a.return, S);
                }
              if (a === o) {
                N = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (N = w);
                break e;
              }
              N = a.return;
            }
        }
        if (
          ((O = i), $t(), qe && typeof qe.onPostCommitFiberRoot == "function")
        )
          try {
            qe.onPostCommitFiberRoot(js, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (_e.transition = t);
    }
  }
  return !1;
}
function Lc(e, t, n) {
  (t = Gn(n, t)),
    (t = Xh(e, t, 1)),
    (e = Rt(e, t, 1)),
    (t = xe()),
    e !== null && (qr(e, 1, t), Te(e, t));
}
function Y(e, t, n) {
  if (e.tag === 3) Lc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Lc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (It === null || !It.has(r)))
        ) {
          (e = Gn(n, e)),
            (e = Jh(t, e, 1)),
            (t = Rt(t, e, 1)),
            (e = xe()),
            t !== null && (qr(t, 1, e), Te(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Nv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = xe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ae === e &&
      (ue & n) === n &&
      (ne === 4 || (ne === 3 && (ue & 130023424) === ue && 500 > q() - Il)
        ? on(e, 0)
        : (Rl |= n)),
    Te(e, t);
}
function vp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = hi), (hi <<= 1), !(hi & 130023424) && (hi = 4194304))
      : (t = 1));
  var n = xe();
  (e = gt(e, t)), e !== null && (qr(e, t, n), Te(e, n));
}
function Mv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), vp(e, n);
}
function Dv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), vp(e, n);
}
var yp;
yp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ee.current) Pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Pe = !1), yv(e, t, n);
      Pe = !!(e.flags & 131072);
    }
  else (Pe = !1), $ && t.flags & 1048576 && kh(t, is, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Oi(e, t), (e = t.pendingProps);
      var i = Hn(t, ve.current);
      Fn(t, n), (i = Al(null, t, r, e, i, n));
      var s = Nl();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ce(r) ? ((s = !0), ns(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Pl(t),
            (i.updater = Rs),
            (t.stateNode = i),
            (i._reactInternals = t),
            ya(t, r, e, n),
            (t = Sa(null, t, r, !0, s, n)))
          : ((t.tag = 0), $ && s && gl(t), ye(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Oi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Vv(r)),
          (e = He(r, e)),
          i)
        ) {
          case 0:
            t = wa(null, t, r, e, n);
            break e;
          case 1:
            t = kc(null, t, r, e, n);
            break e;
          case 11:
            t = wc(null, t, r, e, n);
            break e;
          case 14:
            t = Sc(null, t, r, He(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : He(r, i)),
        wa(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : He(r, i)),
        kc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((tp(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Ah(e, t),
          as(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Gn(Error(k(423)), t)), (t = Pc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Gn(Error(k(424)), t)), (t = Pc(e, t, r, n, i));
            break e;
          } else
            for (
              Ae = Vt(t.stateNode.containerInfo.firstChild),
                Ne = t,
                $ = !0,
                We = null,
                n = Th(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if (($n(), r === i)) {
            t = vt(e, t, n);
            break e;
          }
          ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Nh(t),
        e === null && ma(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        ca(r, i) ? (o = null) : s !== null && ca(r, s) && (t.flags |= 32),
        ep(e, t),
        ye(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && ma(t), null;
    case 13:
      return np(e, t, n);
    case 4:
      return (
        El(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Wn(t, null, r, n)) : ye(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : He(r, i)),
        wc(e, t, r, i, n)
      );
    case 7:
      return ye(e, t, t.pendingProps, n), t.child;
    case 8:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          B(ss, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (Qe(s.value, o)) {
            if (s.children === i.children && !Ee.current) {
              t = vt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = ut(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      ga(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(k(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  ga(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        ye(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Fn(t, n),
        (i = Fe(i)),
        (r = r(i)),
        (t.flags |= 1),
        ye(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = He(r, t.pendingProps)),
        (i = He(r.type, i)),
        Sc(e, t, r, i, n)
      );
    case 15:
      return qh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : He(r, i)),
        Oi(e, t),
        (t.tag = 1),
        Ce(r) ? ((e = !0), ns(t)) : (e = !1),
        Fn(t, n),
        Yh(t, r, i),
        ya(t, r, i, n),
        Sa(null, t, r, !0, e, n)
      );
    case 19:
      return rp(e, t, n);
    case 22:
      return Zh(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function xp(e, t) {
  return Kf(e, t);
}
function Lv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function be(e, t, n, r) {
  return new Lv(e, t, n, r);
}
function _l(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Vv(e) {
  if (typeof e == "function") return _l(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === il)) return 11;
    if (e === sl) return 14;
  }
  return 2;
}
function Ot(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = be(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Fi(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) _l(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case wn:
        return an(n.children, i, s, t);
      case rl:
        (o = 8), (i |= 8);
        break;
      case Uo:
        return (
          (e = be(12, n, t, i | 2)), (e.elementType = Uo), (e.lanes = s), e
        );
      case Ho:
        return (e = be(13, n, t, i)), (e.elementType = Ho), (e.lanes = s), e;
      case $o:
        return (e = be(19, n, t, i)), (e.elementType = $o), (e.lanes = s), e;
      case Nf:
        return Os(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case jf:
              o = 10;
              break e;
            case Af:
              o = 9;
              break e;
            case il:
              o = 11;
              break e;
            case sl:
              o = 14;
              break e;
            case Et:
              (o = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = be(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function an(e, t, n, r) {
  return (e = be(7, e, r, t)), (e.lanes = n), e;
}
function Os(e, t, n, r) {
  return (
    (e = be(22, e, r, t)),
    (e.elementType = Nf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ko(e, t, n) {
  return (e = be(6, e, null, t)), (e.lanes = n), e;
}
function Po(e, t, n) {
  return (
    (t = be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Rv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = no(0)),
    (this.expirationTimes = no(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = no(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Fl(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new Rv(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = be(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Pl(s),
    e
  );
}
function Iv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: xn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function wp(e) {
  if (!e) return _t;
  e = e._reactInternals;
  e: {
    if (gn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ce(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ce(n)) return wh(e, n, t);
  }
  return t;
}
function Sp(e, t, n, r, i, s, o, a, l) {
  return (
    (e = Fl(n, r, !0, e, i, s, o, a, l)),
    (e.context = wp(null)),
    (n = e.current),
    (r = xe()),
    (i = zt(n)),
    (s = ut(r, i)),
    (s.callback = t ?? null),
    Rt(n, s, i),
    (e.current.lanes = i),
    qr(e, i, r),
    Te(e, r),
    e
  );
}
function bs(e, t, n, r) {
  var i = t.current,
    s = xe(),
    o = zt(i);
  return (
    (n = wp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ut(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Rt(i, t, o)),
    e !== null && (Ge(e, i, o, s), Ri(e, i, o)),
    o
  );
}
function ms(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Bl(e, t) {
  Vc(e, t), (e = e.alternate) && Vc(e, t);
}
function zv() {
  return null;
}
var kp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ul(e) {
  this._internalRoot = e;
}
_s.prototype.render = Ul.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  bs(e, t, null, null);
};
_s.prototype.unmount = Ul.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hn(function () {
      bs(null, e, null, null);
    }),
      (t[mt] = null);
  }
};
function _s(e) {
  this._internalRoot = e;
}
_s.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Zf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
    Tt.splice(n, 0, e), n === 0 && th(e);
  }
};
function Hl(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Fs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Rc() {}
function Ov(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = ms(o);
        s.call(u);
      };
    }
    var o = Sp(t, r, e, 0, null, !1, !1, "", Rc);
    return (
      (e._reactRootContainer = o),
      (e[mt] = o.current),
      _r(e.nodeType === 8 ? e.parentNode : e),
      hn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = ms(l);
      a.call(u);
    };
  }
  var l = Fl(e, 0, !1, null, null, !1, !1, "", Rc);
  return (
    (e._reactRootContainer = l),
    (e[mt] = l.current),
    _r(e.nodeType === 8 ? e.parentNode : e),
    hn(function () {
      bs(t, l, n, r);
    }),
    l
  );
}
function Bs(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = ms(o);
        a.call(l);
      };
    }
    bs(t, o, e, i);
  } else o = Ov(n, t, e, i, r);
  return ms(o);
}
Jf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = pr(t.pendingLanes);
        n !== 0 &&
          (ll(t, n | 1), Te(t, q()), !(O & 6) && ((Qn = q() + 500), $t()));
      }
      break;
    case 13:
      hn(function () {
        var r = gt(e, 1);
        if (r !== null) {
          var i = xe();
          Ge(r, e, 1, i);
        }
      }),
        Bl(e, 1);
  }
};
ul = function (e) {
  if (e.tag === 13) {
    var t = gt(e, 134217728);
    if (t !== null) {
      var n = xe();
      Ge(t, e, 134217728, n);
    }
    Bl(e, 134217728);
  }
};
qf = function (e) {
  if (e.tag === 13) {
    var t = zt(e),
      n = gt(e, t);
    if (n !== null) {
      var r = xe();
      Ge(n, e, t, r);
    }
    Bl(e, t);
  }
};
Zf = function () {
  return F;
};
eh = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
ea = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Go(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ds(r);
            if (!i) throw Error(k(90));
            Df(r), Go(r, i);
          }
        }
      }
      break;
    case "textarea":
      Vf(e, n);
      break;
    case "select":
      (t = n.value), t != null && zn(e, !!n.multiple, t, !1);
  }
};
Ff = zl;
Bf = hn;
var bv = { usingClientEntryPoint: !1, Events: [ei, En, Ds, bf, _f, zl] },
  ur = {
    findFiberByHostInstance: en,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  _v = {
    bundleType: ur.bundleType,
    version: ur.version,
    rendererPackageName: ur.rendererPackageName,
    rendererConfig: ur.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = $f(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ur.findFiberByHostInstance || zv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ei.isDisabled && Ei.supportsFiber)
    try {
      (js = Ei.inject(_v)), (qe = Ei);
    } catch {}
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bv;
Le.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Hl(t)) throw Error(k(200));
  return Iv(e, t, null, n);
};
Le.createRoot = function (e, t) {
  if (!Hl(e)) throw Error(k(299));
  var n = !1,
    r = "",
    i = kp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Fl(e, 1, !1, null, null, n, !1, r, i)),
    (e[mt] = t.current),
    _r(e.nodeType === 8 ? e.parentNode : e),
    new Ul(t)
  );
};
Le.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = $f(t)), (e = e === null ? null : e.stateNode), e;
};
Le.flushSync = function (e) {
  return hn(e);
};
Le.hydrate = function (e, t, n) {
  if (!Fs(t)) throw Error(k(200));
  return Bs(null, e, t, !0, n);
};
Le.hydrateRoot = function (e, t, n) {
  if (!Hl(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = kp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Sp(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[mt] = t.current),
    _r(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new _s(t);
};
Le.render = function (e, t, n) {
  if (!Fs(t)) throw Error(k(200));
  return Bs(null, e, t, !1, n);
};
Le.unmountComponentAtNode = function (e) {
  if (!Fs(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (hn(function () {
        Bs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[mt] = null);
        });
      }),
      !0)
    : !1;
};
Le.unstable_batchedUpdates = zl;
Le.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Fs(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Bs(e, t, n, !1, r);
};
Le.version = "18.3.1-next-f1338f8080-20240426";
function Pp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pp);
    } catch (e) {
      console.error(e);
    }
}
Pp(), (Pf.exports = Le);
var Fv = Pf.exports,
  Ep,
  Ic = Fv;
(Ep = Ic.createRoot), Ic.hydrateRoot;
function Bv(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
function Us(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Va = (e) => Array.isArray(e);
function Cp(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Qr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function zc(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function $l(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = zc(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = zc(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
function Hs(e, t, n) {
  const r = e.getProps();
  return $l(r, t, n !== void 0 ? n : r.custom, e);
}
const Wl = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Kl = ["initial", ...Wl],
  ni = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  vn = new Set(ni),
  ct = (e) => e * 1e3,
  dt = (e) => e / 1e3,
  Uv = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Hv = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  $v = { type: "keyframes", duration: 0.8 },
  Wv = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Kv = (e, { keyframes: t }) =>
    t.length > 2
      ? $v
      : vn.has(e)
      ? e.startsWith("scale")
        ? Hv(t[1])
        : Uv
      : Wv;
function Gl(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Gv = { skipAnimations: !1, useManualTiming: !1 },
  Qv = (e) => e !== null;
function $s(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(Qv),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const ce = (e) => e;
function Yv(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const s = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    s.has(u) && (l.schedule(u), e()), u(o);
  }
  const l = {
    schedule: (u, c = !1, d = !1) => {
      const v = d && r ? t : n;
      return c && s.add(u), v.has(u) || v.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), s.delete(u);
    },
    process: (u) => {
      if (((o = u), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(a),
        (r = !1),
        i && ((i = !1), l.process(u));
    },
  };
  return l;
}
const Ci = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Xv = 40;
function Tp(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = Ci.reduce((m, p) => ((m[p] = Yv(s)), m), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: d,
      postRender: h,
    } = o,
    v = () => {
      const m = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, Xv), 1)),
        (i.timestamp = m),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        h.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(v));
    },
    y = () => {
      (n = !0), (r = !0), i.isProcessing || e(v);
    };
  return {
    schedule: Ci.reduce((m, p) => {
      const g = o[p];
      return (m[p] = (w, S = !1, C = !1) => (n || y(), g.schedule(w, S, C))), m;
    }, {}),
    cancel: (m) => {
      for (let p = 0; p < Ci.length; p++) o[Ci[p]].cancel(m);
    },
    state: i,
    steps: o,
  };
}
const {
    schedule: b,
    cancel: nt,
    state: se,
    steps: Eo,
  } = Tp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ce, !0),
  jp = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Jv = 1e-7,
  qv = 12;
function Zv(e, t, n, r, i) {
  let s,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (s = jp(o, r, i) - e), s > 0 ? (n = o) : (t = o);
  while (Math.abs(s) > Jv && ++a < qv);
  return o;
}
function ri(e, t, n, r) {
  if (e === t && n === r) return ce;
  const i = (s) => Zv(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : jp(i(s), t, r));
}
const Ap = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Np = (e) => (t) => 1 - e(1 - t),
  Mp = ri(0.33, 1.53, 0.69, 0.99),
  Ql = Np(Mp),
  Dp = Ap(Ql),
  Lp = (e) =>
    (e *= 2) < 1 ? 0.5 * Ql(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Yl = (e) => 1 - Math.sin(Math.acos(e)),
  Vp = Np(Yl),
  Rp = Ap(Yl),
  Ip = (e) => /^0[^.\s]+$/u.test(e);
function ey(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Ip(e)
    : !0;
}
let ty = ce,
  Ra = ce;
const zp = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Op = (e) => (t) => typeof t == "string" && t.startsWith(e),
  bp = Op("--"),
  ny = Op("var(--"),
  Xl = (e) => (ny(e) ? ry.test(e.split("/*")[0].trim()) : !1),
  ry =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  iy = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function sy(e) {
  const t = iy.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function _p(e, t, n = 1) {
  const [r, i] = sy(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return zp(o) ? parseFloat(o) : o;
  }
  return Xl(i) ? _p(i, t, n + 1) : i;
}
const Ft = (e, t, n) => (n > t ? t : n < e ? e : n),
  er = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Yr = { ...er, transform: (e) => Ft(0, 1, e) },
  Ti = { ...er, default: 1 },
  ii = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  kt = ii("deg"),
  et = ii("%"),
  D = ii("px"),
  oy = ii("vh"),
  ay = ii("vw"),
  Oc = {
    ...et,
    parse: (e) => et.parse(e) / 100,
    transform: (e) => et.transform(e * 100),
  },
  ly = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  bc = (e) => e === er || e === D,
  _c = (e, t) => parseFloat(e.split(", ")[t]),
  Fc =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return _c(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? _c(s[1], e) : 0;
      }
    },
  uy = new Set(["x", "y", "z"]),
  cy = ni.filter((e) => !uy.has(e));
function dy(e) {
  const t = [];
  return (
    cy.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Yn = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Fc(4, 13),
  y: Fc(5, 14),
};
Yn.translateX = Yn.x;
Yn.translateY = Yn.y;
const Fp = (e) => (t) => t.test(e),
  fy = { test: (e) => e === "auto", parse: (e) => e },
  Bp = [er, D, et, kt, ay, oy, fy],
  Bc = (e) => Bp.find(Fp(e)),
  ln = new Set();
let Ia = !1,
  za = !1;
function Up() {
  if (za) {
    const e = Array.from(ln).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = dy(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (za = !1), (Ia = !1), ln.forEach((e) => e.complete()), ln.clear();
}
function Hp() {
  ln.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (za = !0);
  });
}
function hy() {
  Hp(), Up();
}
class Jl {
  constructor(t, n, r, i, s, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (ln.add(this), Ia || ((Ia = !0), b.read(Hp), b.resolveKeyframes(Up)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && o === void 0 && i.set(t[0]);
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      ln.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), ln.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const jr = (e) => Math.round(e * 1e5) / 1e5,
  ql = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function py(e) {
  return e == null;
}
const my =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Zl = (e, t) => (n) =>
    !!(
      (typeof n == "string" && my.test(n) && n.startsWith(e)) ||
      (t && !py(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  $p = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, a] = r.match(ql);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  gy = (e) => Ft(0, 255, e),
  Co = { ...er, transform: (e) => Math.round(gy(e)) },
  rn = {
    test: Zl("rgb", "red"),
    parse: $p("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Co.transform(e) +
      ", " +
      Co.transform(t) +
      ", " +
      Co.transform(n) +
      ", " +
      jr(Yr.transform(r)) +
      ")",
  };
function vy(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Oa = { test: Zl("#"), parse: vy, transform: rn.transform },
  Dn = {
    test: Zl("hsl", "hue"),
    parse: $p("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      et.transform(jr(t)) +
      ", " +
      et.transform(jr(n)) +
      ", " +
      jr(Yr.transform(r)) +
      ")",
  },
  pe = {
    test: (e) => rn.test(e) || Oa.test(e) || Dn.test(e),
    parse: (e) =>
      rn.test(e) ? rn.parse(e) : Dn.test(e) ? Dn.parse(e) : Oa.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? rn.transform(e)
        : Dn.transform(e),
  },
  yy =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function xy(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(ql)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(yy)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Wp = "number",
  Kp = "color",
  wy = "var",
  Sy = "var(",
  Uc = "${}",
  ky =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Xr(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      ky,
      (l) => (
        pe.test(l)
          ? (r.color.push(s), i.push(Kp), n.push(pe.parse(l)))
          : l.startsWith(Sy)
          ? (r.var.push(s), i.push(wy), n.push(l))
          : (r.number.push(s), i.push(Wp), n.push(parseFloat(l))),
        ++s,
        Uc
      )
    )
    .split(Uc);
  return { values: n, split: a, indexes: r, types: i };
}
function Gp(e) {
  return Xr(e).values;
}
function Qp(e) {
  const { split: t, types: n } = Xr(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const a = n[o];
        a === Wp
          ? (s += jr(i[o]))
          : a === Kp
          ? (s += pe.transform(i[o]))
          : (s += i[o]);
      }
    return s;
  };
}
const Py = (e) => (typeof e == "number" ? 0 : e);
function Ey(e) {
  const t = Gp(e);
  return Qp(e)(t.map(Py));
}
const Bt = {
    test: xy,
    parse: Gp,
    createTransformer: Qp,
    getAnimatableNone: Ey,
  },
  Cy = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Ty(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(ql) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = Cy.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const jy = /\b([a-z-]*)\(.*?\)/gu,
  ba = {
    ...Bt,
    getAnimatableNone: (e) => {
      const t = e.match(jy);
      return t ? t.map(Ty).join(" ") : e;
    },
  },
  Ay = {
    borderWidth: D,
    borderTopWidth: D,
    borderRightWidth: D,
    borderBottomWidth: D,
    borderLeftWidth: D,
    borderRadius: D,
    radius: D,
    borderTopLeftRadius: D,
    borderTopRightRadius: D,
    borderBottomRightRadius: D,
    borderBottomLeftRadius: D,
    width: D,
    maxWidth: D,
    height: D,
    maxHeight: D,
    top: D,
    right: D,
    bottom: D,
    left: D,
    padding: D,
    paddingTop: D,
    paddingRight: D,
    paddingBottom: D,
    paddingLeft: D,
    margin: D,
    marginTop: D,
    marginRight: D,
    marginBottom: D,
    marginLeft: D,
    backgroundPositionX: D,
    backgroundPositionY: D,
  },
  Ny = {
    rotate: kt,
    rotateX: kt,
    rotateY: kt,
    rotateZ: kt,
    scale: Ti,
    scaleX: Ti,
    scaleY: Ti,
    scaleZ: Ti,
    skew: kt,
    skewX: kt,
    skewY: kt,
    distance: D,
    translateX: D,
    translateY: D,
    translateZ: D,
    x: D,
    y: D,
    z: D,
    perspective: D,
    transformPerspective: D,
    opacity: Yr,
    originX: Oc,
    originY: Oc,
    originZ: D,
  },
  Hc = { ...er, transform: Math.round },
  eu = {
    ...Ay,
    ...Ny,
    zIndex: Hc,
    size: D,
    fillOpacity: Yr,
    strokeOpacity: Yr,
    numOctaves: Hc,
  },
  My = {
    ...eu,
    color: pe,
    backgroundColor: pe,
    outlineColor: pe,
    fill: pe,
    stroke: pe,
    borderColor: pe,
    borderTopColor: pe,
    borderRightColor: pe,
    borderBottomColor: pe,
    borderLeftColor: pe,
    filter: ba,
    WebkitFilter: ba,
  },
  tu = (e) => My[e];
function Yp(e, t) {
  let n = tu(e);
  return (
    n !== ba && (n = Bt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Dy = new Set(["auto", "none", "0"]);
function Ly(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !Dy.has(s) && Xr(s).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const s of t) e[s] = Yp(n, i);
}
class Xp extends Jl {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), Xl(u))) {
        const c = _p(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !ly.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = Bc(i),
      a = Bc(s);
    if (o !== a)
      if (bc(o) && bc(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) ey(t[i]) && r.push(i);
    r.length && Ly(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Yn[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      a = i[o];
    (i[o] = Yn[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function nu(e) {
  return typeof e == "function";
}
let Bi;
function Vy() {
  Bi = void 0;
}
const tt = {
    now: () => (
      Bi === void 0 &&
        tt.set(
          se.isProcessing || Gv.useManualTiming
            ? se.timestamp
            : performance.now()
        ),
      Bi
    ),
    set: (e) => {
      (Bi = e), queueMicrotask(Vy);
    },
  },
  $c = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (Bt.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function Ry(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Iy(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = $c(i, t),
    a = $c(s, t);
  return !o || !a ? !1 : Ry(e) || ((n === "spring" || nu(n)) && r);
}
const zy = 40;
class Jp {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = tt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > zy
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && hy(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = tt.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !Iy(t, r, i, s))
      if (o) this.options.duration = 0;
      else {
        l == null || l($s(t, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function ru(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Oy = 5;
function qp(e, t, n) {
  const r = Math.max(t - Oy, 0);
  return ru(n - e(r), t - r);
}
const To = 0.001,
  by = 0.01,
  _y = 10,
  Fy = 0.05,
  By = 1;
function Uy({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    s,
    o = 1 - t;
  (o = Ft(Fy, By, o)),
    (e = Ft(by, _y, dt(e))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            d = c * e,
            h = c - n,
            v = _a(u, o),
            y = Math.exp(-d);
          return To - (h / v) * y;
        }),
        (s = (u) => {
          const d = u * o * e,
            h = d * n + n,
            v = Math.pow(o, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-d),
            x = _a(Math.pow(u, 2), o);
          return ((-i(u) + To > 0 ? -1 : 1) * ((h - v) * y)) / x;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -To + c * d;
        }),
        (s = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = $y(i, s, a);
  if (((e = ct(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Hy = 12;
function $y(e, t, n) {
  let r = n;
  for (let i = 1; i < Hy; i++) r = r - e(r) / t(r);
  return r;
}
function _a(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Wy = ["duration", "bounce"],
  Ky = ["stiffness", "damping", "mass"];
function Wc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Gy(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Wc(e, Ky) && Wc(e, Wy)) {
    const n = Uy(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Zp({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    s = e[e.length - 1],
    o = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: h,
    } = Gy({ ...r, velocity: -dt(r.velocity || 0) }),
    v = d || 0,
    y = l / (2 * Math.sqrt(a * u)),
    x = s - i,
    P = dt(Math.sqrt(a / u)),
    m = Math.abs(x) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let p;
  if (y < 1) {
    const g = _a(P, y);
    p = (w) => {
      const S = Math.exp(-y * P * w);
      return (
        s - S * (((v + y * P * x) / g) * Math.sin(g * w) + x * Math.cos(g * w))
      );
    };
  } else if (y === 1) p = (g) => s - Math.exp(-P * g) * (x + (v + P * x) * g);
  else {
    const g = P * Math.sqrt(y * y - 1);
    p = (w) => {
      const S = Math.exp(-y * P * w),
        C = Math.min(g * w, 300);
      return (
        s - (S * ((v + y * P * x) * Math.sinh(C) + g * x * Math.cosh(C))) / g
      );
    };
  }
  return {
    calculatedDuration: (h && c) || null,
    next: (g) => {
      const w = p(g);
      if (h) o.done = g >= c;
      else {
        let S = 0;
        y < 1 && (S = g === 0 ? ct(v) : qp(p, g, w));
        const C = Math.abs(S) <= n,
          A = Math.abs(s - w) <= t;
        o.done = C && A;
      }
      return (o.value = o.done ? s : w), o;
    },
  };
}
function Kc({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    h = { done: !1, value: d },
    v = (E) => (a !== void 0 && E < a) || (l !== void 0 && E > l),
    y = (E) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - E) < Math.abs(l - E)
        ? a
        : l;
  let x = n * t;
  const P = d + x,
    m = o === void 0 ? P : o(P);
  m !== P && (x = m - d);
  const p = (E) => -x * Math.exp(-E / r),
    g = (E) => m + p(E),
    w = (E) => {
      const z = p(E),
        L = g(E);
      (h.done = Math.abs(z) <= u), (h.value = h.done ? m : L);
    };
  let S, C;
  const A = (E) => {
    v(h.value) &&
      ((S = E),
      (C = Zp({
        keyframes: [h.value, y(h.value)],
        velocity: qp(g, E, h.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    A(0),
    {
      calculatedDuration: null,
      next: (E) => {
        let z = !1;
        return (
          !C && S === void 0 && ((z = !0), w(E), A(E)),
          S !== void 0 && E >= S ? C.next(E - S) : (!z && w(E), h)
        );
      },
    }
  );
}
const Qy = ri(0.42, 0, 1, 1),
  Yy = ri(0, 0, 0.58, 1),
  em = ri(0.42, 0, 0.58, 1),
  Xy = (e) => Array.isArray(e) && typeof e[0] != "number",
  iu = (e) => Array.isArray(e) && typeof e[0] == "number",
  Gc = {
    linear: ce,
    easeIn: Qy,
    easeInOut: em,
    easeOut: Yy,
    circIn: Yl,
    circInOut: Rp,
    circOut: Vp,
    backIn: Ql,
    backInOut: Dp,
    backOut: Mp,
    anticipate: Lp,
  },
  Qc = (e) => {
    if (iu(e)) {
      Ra(e.length === 4);
      const [t, n, r, i] = e;
      return ri(t, n, r, i);
    } else if (typeof e == "string") return Ra(Gc[e] !== void 0), Gc[e];
    return e;
  },
  Jy = (e, t) => (n) => t(e(n)),
  ft = (...e) => e.reduce(Jy),
  pn = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  K = (e, t, n) => e + (t - e) * n;
function jo(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function qy({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = jo(l, a, e + 1 / 3)), (s = jo(l, a, e)), (o = jo(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function gs(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Ao = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Zy = [Oa, rn, Dn],
  e1 = (e) => Zy.find((t) => t.test(e));
function Yc(e) {
  const t = e1(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Dn && (n = qy(n)), n;
}
const Xc = (e, t) => {
    const n = Yc(e),
      r = Yc(t);
    if (!n || !r) return gs(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = Ao(n.red, r.red, s)),
      (i.green = Ao(n.green, r.green, s)),
      (i.blue = Ao(n.blue, r.blue, s)),
      (i.alpha = K(n.alpha, r.alpha, s)),
      rn.transform(i)
    );
  },
  Fa = new Set(["none", "hidden"]);
function t1(e, t) {
  return Fa.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function n1(e, t) {
  return (n) => K(e, t, n);
}
function su(e) {
  return typeof e == "number"
    ? n1
    : typeof e == "string"
    ? Xl(e)
      ? gs
      : pe.test(e)
      ? Xc
      : s1
    : Array.isArray(e)
    ? tm
    : typeof e == "object"
    ? pe.test(e)
      ? Xc
      : r1
    : gs;
}
function tm(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => su(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function r1(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = su(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function i1(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      a = e.indexes[o][i[o]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[s] = l), i[o]++;
  }
  return r;
}
const s1 = (e, t) => {
  const n = Bt.createTransformer(t),
    r = Xr(e),
    i = Xr(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Fa.has(e) && !i.values.length) || (Fa.has(t) && !r.values.length)
      ? t1(e, t)
      : ft(tm(i1(r, i), i.values), n)
    : gs(e, t);
};
function nm(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? K(e, t, n)
    : su(e)(e, t);
}
function o1(e, t, n) {
  const r = [],
    i = n || nm,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || ce : t;
      a = ft(l, a);
    }
    r.push(a);
  }
  return r;
}
function rm(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((Ra(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const o = o1(t, r, i),
    a = o.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = pn(e[c], e[c + 1], u);
      return o[c](d);
    };
  return n ? (u) => l(Ft(e[0], e[s - 1], u)) : l;
}
function a1(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = pn(0, t, r);
    e.push(K(n, 1, i));
  }
}
function im(e) {
  const t = [0];
  return a1(t, e.length - 1), t;
}
function l1(e, t) {
  return e.map((n) => n * t);
}
function u1(e, t) {
  return e.map(() => t || em).splice(0, e.length - 1);
}
function vs({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = Xy(r) ? r.map(Qc) : Qc(r),
    s = { done: !1, value: t[0] },
    o = l1(n && n.length === t.length ? n : im(t), e),
    a = rm(o, t, { ease: Array.isArray(i) ? i : u1(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
  };
}
const Jc = 2e4;
function c1(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Jc; ) (t += n), (r = e.next(t));
  return t >= Jc ? 1 / 0 : t;
}
const d1 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => b.update(t, !0),
      stop: () => nt(t),
      now: () => (se.isProcessing ? se.timestamp : tt.now()),
    };
  },
  f1 = { decay: Kc, inertia: Kc, tween: vs, keyframes: vs, spring: Zp },
  h1 = (e) => e / 100;
class ou extends Jp {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options,
      o = (i == null ? void 0 : i.KeyframeResolver) || Jl,
      a = (l, u) => this.onKeyframesResolved(l, u);
    (this.resolver = new o(s, a, n, r, i)), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0,
      } = this.options,
      a = nu(n) ? n : f1[n] || vs;
    let l, u;
    a !== vs &&
      typeof t[0] != "number" &&
      ((l = ft(h1, nm(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    s === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      c.calculatedDuration === null && (c.calculatedDuration = c1(c));
    const { calculatedDuration: d } = c,
      h = d + i,
      v = h * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: h,
      totalDuration: v,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: E } = this.options;
      return { done: !0, value: E[E.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: h,
      repeat: v,
      repeatType: y,
      repeatDelay: x,
      onUpdate: P,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const m = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
      p = this.speed >= 0 ? m < 0 : m > c;
    (this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let g = this.currentTime,
      w = s;
    if (v) {
      const E = Math.min(this.currentTime, c) / d;
      let z = Math.floor(E),
        L = E % 1;
      !L && E >= 1 && (L = 1),
        L === 1 && z--,
        (z = Math.min(z, v + 1)),
        !!(z % 2) &&
          (y === "reverse"
            ? ((L = 1 - L), x && (L -= x / d))
            : y === "mirror" && (w = o)),
        (g = Ft(0, 1, L) * d);
    }
    const S = p ? { done: !1, value: l[0] } : w.next(g);
    a && (S.value = a(S.value));
    let { done: C } = S;
    !p &&
      u !== null &&
      (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const A =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && C));
    return (
      A && i !== void 0 && (S.value = $s(l, this.options, i)),
      P && P(S.value),
      A && this.finish(),
      S
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? dt(t.calculatedDuration) : 0;
  }
  get time() {
    return dt(this.currentTime);
  }
  set time(t) {
    (t = ct(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = dt(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = d1, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = i)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const p1 = new Set(["opacity", "clipPath", "filter", "transform"]),
  m1 = 10,
  g1 = (e, t) => {
    let n = "";
    const r = Math.max(Math.round(t / m1), 2);
    for (let i = 0; i < r; i++) n += e(pn(0, r - 1, i)) + ", ";
    return `linear(${n.substring(0, n.length - 2)})`;
  };
function au(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const v1 = { linearEasing: void 0 };
function y1(e, t) {
  const n = au(e);
  return () => {
    var r;
    return (r = v1[t]) !== null && r !== void 0 ? r : n();
  };
}
const ys = y1(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function sm(e) {
  return !!(
    (typeof e == "function" && ys()) ||
    !e ||
    (typeof e == "string" && (e in Ba || ys())) ||
    iu(e) ||
    (Array.isArray(e) && e.every(sm))
  );
}
const gr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Ba = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: gr([0, 0.65, 0.55, 1]),
    circOut: gr([0.55, 0, 1, 0.45]),
    backIn: gr([0.31, 0.01, 0.66, -0.59]),
    backOut: gr([0.33, 1.53, 0.69, 0.99]),
  };
function om(e, t) {
  if (e)
    return typeof e == "function" && ys()
      ? g1(e, t)
      : iu(e)
      ? gr(e)
      : Array.isArray(e)
      ? e.map((n) => om(n, t) || Ba.easeOut)
      : Ba[e];
}
function x1(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = om(a, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
function qc(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const w1 = au(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  xs = 10,
  S1 = 2e4;
function k1(e) {
  return nu(e.type) || e.type === "spring" || !sm(e.ease);
}
function P1(e, t) {
  const n = new ou({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < S1; ) (r = n.sample(s)), i.push(r.value), (s += xs);
  return { times: void 0, keyframes: i, duration: s - xs, ease: "linear" };
}
const am = { anticipate: Lp, backInOut: Dp, circInOut: Rp };
function E1(e) {
  return e in am;
}
class Zc extends Jp {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
    (this.resolver = new Xp(
      s,
      (o, a) => this.onKeyframesResolved(o, a),
      n,
      r,
      i
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: s,
      ease: o,
      type: a,
      motionValue: l,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (
      (typeof o == "string" && ys() && E1(o) && (o = am[o]), k1(this.options))
    ) {
      const {
          onComplete: h,
          onUpdate: v,
          motionValue: y,
          element: x,
          ...P
        } = this.options,
        m = P1(t, P);
      (t = m.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = m.duration),
        (s = m.times),
        (o = m.ease),
        (a = "keyframes");
    }
    const d = x1(l.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: s,
      ease: o,
    });
    return (
      (d.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (qc(d, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: h } = this.options;
            l.set($s(t, this.options, n)),
              h && h(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: d, duration: i, times: s, type: a, ease: o, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return dt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return dt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = ct(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return ce;
      const { animation: r } = n;
      qc(r, t);
    }
    return ce;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: s,
      ease: o,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: d,
          element: h,
          ...v
        } = this.options,
        y = new ou({
          ...v,
          keyframes: r,
          duration: i,
          type: s,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        x = ct(this.time);
      u.setWithVelocity(y.sample(x - xs).value, y.sample(x).value, xs);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: s,
      damping: o,
      type: a,
    } = t;
    return (
      w1() &&
      r &&
      p1.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      s !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
const lm = au(() => window.ScrollTimeline !== void 0);
class C1 {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) =>
      lm() && i.attachTimeline ? i.attachTimeline(t) : n(i)
    );
    return () => {
      r.forEach((i, s) => {
        i && i(), this.animations[s].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function T1({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const lu =
    (e, t, n, r = {}, i, s) =>
    (o) => {
      const a = Gl(r, e) || {},
        l = a.delay || r.delay || 0;
      let { elapsed: u = 0 } = r;
      u = u - ct(l);
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: (h) => {
          t.set(h), a.onUpdate && a.onUpdate(h);
        },
        onComplete: () => {
          o(), a.onComplete && a.onComplete();
        },
        name: e,
        motionValue: t,
        element: s ? void 0 : i,
      };
      T1(a) || (c = { ...c, ...Kv(e, c) }),
        c.duration && (c.duration = ct(c.duration)),
        c.repeatDelay && (c.repeatDelay = ct(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from);
      let d = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          ((c.duration = 0), c.delay === 0 && (d = !0)),
        d && !s && t.get() !== void 0)
      ) {
        const h = $s(c.keyframes, a);
        if (h !== void 0)
          return (
            b.update(() => {
              c.onUpdate(h), c.onComplete();
            }),
            new C1([])
          );
      }
      return !s && Zc.supports(c) ? new Zc(c) : new ou(c);
    },
  j1 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  A1 = (e) => (Va(e) ? e[e.length - 1] || 0 : e);
function uu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function cu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class du {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return uu(this.subscriptions, t), () => cu(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ed = 30,
  N1 = (e) => !isNaN(parseFloat(e));
class M1 {
  constructor(t, n = {}) {
    (this.version = "11.11.11"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = tt.now();
        this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = tt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = N1(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new du());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            b.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = tt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > ed
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, ed);
    return ru(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function at(e, t) {
  return new M1(e, t);
}
function D1(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, at(n));
}
function L1(e, t) {
  const n = Hs(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = A1(s[o]);
    D1(e, o, a);
  }
}
const fu = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  V1 = "framerAppearId",
  um = "data-" + fu(V1);
function cm(e) {
  return e.props[um];
}
const ge = (e) => !!(e && e.getVelocity);
function R1(e) {
  return !!(ge(e) && e.add);
}
function Ua(e, t) {
  const n = e.getValue("willChange");
  if (R1(n)) return n.add(t);
}
function I1({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function dm(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const d in l) {
    const h = e.getValue(
        d,
        (s = e.latestValues[d]) !== null && s !== void 0 ? s : null
      ),
      v = l[d];
    if (v === void 0 || (c && I1(c, d))) continue;
    const y = { delay: n, ...Gl(o || {}, d) };
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const m = cm(e);
      if (m) {
        const p = window.MotionHandoffAnimation(m, d, b);
        p !== null && ((y.startTime = p), (x = !0));
      }
    }
    Ua(e, d),
      h.start(
        lu(d, h, v, e.shouldReduceMotion && vn.has(d) ? { type: !1 } : y, e, x)
      );
    const P = h.animation;
    P && u.push(P);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        b.update(() => {
          a && L1(e, a);
        });
      }),
    u
  );
}
function Ha(e, t, n = {}) {
  var r;
  const i = Hs(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(dm(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: h,
            } = s;
            return z1(e, t, c + u, d, h, n);
          }
        : () => Promise.resolve(),
    { when: l } = s;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [o, a] : [a, o];
    return u().then(() => c());
  } else return Promise.all([o(), a(n.delay)]);
}
function z1(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(O1)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          o.push(
            Ha(u, t, { ...s, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function O1(e, t) {
  return e.sortNodePosition(t);
}
function b1(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => Ha(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Ha(e, t, n);
  else {
    const i = typeof t == "function" ? Hs(e, t, n.custom) : t;
    r = Promise.all(dm(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const _1 = Kl.length;
function fm(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? fm(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < _1; n++) {
    const r = Kl[n],
      i = e.props[r];
    (Qr(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const F1 = [...Wl].reverse(),
  B1 = Wl.length;
function U1(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => b1(e, n, r)));
}
function H1(e) {
  let t = U1(e),
    n = td(),
    r = !0;
  const i = (l) => (u, c) => {
    var d;
    const h = Hs(
      e,
      c,
      l === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (h) {
      const { transition: v, transitionEnd: y, ...x } = h;
      u = { ...u, ...x, ...y };
    }
    return u;
  };
  function s(l) {
    t = l(e);
  }
  function o(l) {
    const { props: u } = e,
      c = fm(e.parent) || {},
      d = [],
      h = new Set();
    let v = {},
      y = 1 / 0;
    for (let P = 0; P < B1; P++) {
      const m = F1[P],
        p = n[m],
        g = u[m] !== void 0 ? u[m] : c[m],
        w = Qr(g),
        S = m === l ? p.isActive : null;
      S === !1 && (y = P);
      let C = g === c[m] && g !== u[m] && w;
      if (
        (C && r && e.manuallyAnimateOnMount && (C = !1),
        (p.protectedKeys = { ...v }),
        (!p.isActive && S === null) ||
          (!g && !p.prevProp) ||
          Us(g) ||
          typeof g == "boolean")
      )
        continue;
      const A = $1(p.prevProp, g);
      let E = A || (m === l && p.isActive && !C && w) || (P > y && w),
        z = !1;
      const L = Array.isArray(g) ? g : [g];
      let re = L.reduce(i(m), {});
      S === !1 && (re = {});
      const { prevResolvedValues: xt = {} } = p,
        Kt = { ...xt, ...re },
        tr = (ee) => {
          (E = !0),
            h.has(ee) && ((z = !0), h.delete(ee)),
            (p.needsAnimating[ee] = !0);
          const j = e.getValue(ee);
          j && (j.liveStyle = !1);
        };
      for (const ee in Kt) {
        const j = re[ee],
          V = xt[ee];
        if (v.hasOwnProperty(ee)) continue;
        let R = !1;
        Va(j) && Va(V) ? (R = !Cp(j, V)) : (R = j !== V),
          R
            ? j != null
              ? tr(ee)
              : h.add(ee)
            : j !== void 0 && h.has(ee)
            ? tr(ee)
            : (p.protectedKeys[ee] = !0);
      }
      (p.prevProp = g),
        (p.prevResolvedValues = re),
        p.isActive && (v = { ...v, ...re }),
        r && e.blockInitialAnimation && (E = !1),
        E &&
          (!(C && A) || z) &&
          d.push(...L.map((ee) => ({ animation: ee, options: { type: m } })));
    }
    if (h.size) {
      const P = {};
      h.forEach((m) => {
        const p = e.getBaseTarget(m),
          g = e.getValue(m);
        g && (g.liveStyle = !0), (P[m] = p ?? null);
      }),
        d.push({ animation: P });
    }
    let x = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      x ? t(d) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((h) => {
        var v;
        return (v = h.animationState) === null || v === void 0
          ? void 0
          : v.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = o(l);
    for (const h in n) n[h].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      (n = td()), (r = !0);
    },
  };
}
function $1(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Cp(t, e) : !1;
}
function Yt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function td() {
  return {
    animate: Yt(!0),
    whileInView: Yt(),
    whileHover: Yt(),
    whileTap: Yt(),
    whileDrag: Yt(),
    whileFocus: Yt(),
    exit: Yt(),
  };
}
class Wt {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class W1 extends Wt {
  constructor(t) {
    super(t), t.animationState || (t.animationState = H1(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Us(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let K1 = 0;
class G1 extends Wt {
  constructor() {
    super(...arguments), (this.id = K1++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const Q1 = { animation: { Feature: W1 }, exit: { Feature: G1 } },
  hm = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
function Ws(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const Y1 = (e) => (t) => hm(t) && e(t, Ws(t));
function lt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function ht(e, t, n, r) {
  return lt(e, t, Y1(n), r);
}
const nd = (e, t) => Math.abs(e - t);
function X1(e, t) {
  const n = nd(e.x, t.x),
    r = nd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class pm {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Mo(this.lastMoveEventInfo, this.history),
          h = this.startEvent !== null,
          v = X1(d.offset, { x: 0, y: 0 }) >= 3;
        if (!h && !v) return;
        const { point: y } = d,
          { timestamp: x } = se;
        this.history.push({ ...y, timestamp: x });
        const { onStart: P, onMove: m } = this.handlers;
        h ||
          (P && P(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, h) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = No(h, this.transformPagePoint)),
          b.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, h) => {
        this.end();
        const { onEnd: v, onSessionEnd: y, resumeAnimation: x } = this.handlers;
        if (
          (this.dragSnapToOrigin && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const P = Mo(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : No(h, this.transformPagePoint),
          this.history
        );
        this.startEvent && v && v(d, P), y && y(d, P);
      }),
      !hm(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const o = Ws(t),
      a = No(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = se;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Mo(a, this.history)),
      (this.removeListeners = ft(
        ht(this.contextWindow, "pointermove", this.handlePointerMove),
        ht(this.contextWindow, "pointerup", this.handlePointerUp),
        ht(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), nt(this.updatePoint);
  }
}
function No(e, t) {
  return t ? { point: t(e.point) } : e;
}
function rd(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Mo({ point: e }, t) {
  return {
    point: e,
    delta: rd(e, mm(t)),
    offset: rd(e, J1(t)),
    velocity: q1(t, 0.1),
  };
}
function J1(e) {
  return e[0];
}
function mm(e) {
  return e[e.length - 1];
}
function q1(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = mm(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > ct(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = dt(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function gm(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const id = gm("dragHorizontal"),
  sd = gm("dragVertical");
function vm(e) {
  let t = !1;
  if (e === "y") t = sd();
  else if (e === "x") t = id();
  else {
    const n = id(),
      r = sd();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function ym() {
  const e = vm(!0);
  return e ? (e(), !1) : !0;
}
function Ln(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const xm = 1e-4,
  Z1 = 1 - xm,
  ex = 1 + xm,
  wm = 0.01,
  tx = 0 - wm,
  nx = 0 + wm;
function De(e) {
  return e.max - e.min;
}
function rx(e, t, n) {
  return Math.abs(e - t) <= n;
}
function od(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = K(t.min, t.max, e.origin)),
    (e.scale = De(n) / De(t)),
    (e.translate = K(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Z1 && e.scale <= ex) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= tx && e.translate <= nx) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Ar(e, t, n, r) {
  od(e.x, t.x, n.x, r ? r.originX : void 0),
    od(e.y, t.y, n.y, r ? r.originY : void 0);
}
function ad(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + De(t));
}
function ix(e, t, n) {
  ad(e.x, t.x, n.x), ad(e.y, t.y, n.y);
}
function ld(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + De(t));
}
function Nr(e, t, n) {
  ld(e.x, t.x, n.x), ld(e.y, t.y, n.y);
}
function sx(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? K(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? K(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function ud(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function ox(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: ud(e.x, n, i), y: ud(e.y, t, r) };
}
function cd(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function ax(e, t) {
  return { x: cd(e.x, t.x), y: cd(e.y, t.y) };
}
function lx(e, t) {
  let n = 0.5;
  const r = De(e),
    i = De(t);
  return (
    i > r
      ? (n = pn(t.min, t.max - r, e.min))
      : r > i && (n = pn(e.min, e.max - i, t.min)),
    Ft(0, 1, n)
  );
}
function ux(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const $a = 0.35;
function cx(e = $a) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = $a),
    { x: dd(e, "left", "right"), y: dd(e, "top", "bottom") }
  );
}
function dd(e, t, n) {
  return { min: fd(e, t), max: fd(e, n) };
}
function fd(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const hd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Vn = () => ({ x: hd(), y: hd() }),
  pd = () => ({ min: 0, max: 0 }),
  J = () => ({ x: pd(), y: pd() });
function Ie(e) {
  return [e("x"), e("y")];
}
function Sm({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function dx({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function fx(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Do(e) {
  return e === void 0 || e === 1;
}
function Wa({ scale: e, scaleX: t, scaleY: n }) {
  return !Do(e) || !Do(t) || !Do(n);
}
function qt(e) {
  return (
    Wa(e) ||
    km(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function km(e) {
  return md(e.x) || md(e.y);
}
function md(e) {
  return e && e !== "0%";
}
function ws(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function gd(e, t, n, r, i) {
  return i !== void 0 && (e = ws(e, i, r)), ws(e, n, r) + t;
}
function Ka(e, t = 0, n = 1, r, i) {
  (e.min = gd(e.min, t, n, r, i)), (e.max = gd(e.max, t, n, r, i));
}
function Pm(e, { x: t, y: n }) {
  Ka(e.x, t.translate, t.scale, t.originPoint),
    Ka(e.y, n.translate, n.scale, n.originPoint);
}
const vd = 0.999999999999,
  yd = 1.0000000000001;
function hx(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    (s = n[a]), (o = s.projectionDelta);
    const { visualElement: l } = s.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        In(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Pm(e, o)),
      r && qt(s.latestValues) && In(e, s.latestValues));
  }
  t.x < yd && t.x > vd && (t.x = 1), t.y < yd && t.y > vd && (t.y = 1);
}
function Rn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function xd(e, t, n, r, i = 0.5) {
  const s = K(e.min, e.max, i);
  Ka(e, t, n, s, r);
}
function In(e, t) {
  xd(e.x, t.x, t.scaleX, t.scale, t.originX),
    xd(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Em(e, t) {
  return Sm(fx(e.getBoundingClientRect(), t));
}
function px(e, t, n) {
  const r = Em(e, n),
    { scroll: i } = t;
  return i && (Rn(r.x, i.offset.x), Rn(r.y, i.offset.y)), r;
}
const Cm = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  mx = new WeakMap();
class gx {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = J()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Ws(c, "page").point);
      },
      s = (c, d) => {
        const { drag: h, dragPropagation: v, onDragStart: y } = this.getProps();
        if (
          h &&
          !v &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = vm(h)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ie((P) => {
            let m = this.getAxisMotionValue(P).get() || 0;
            if (et.test(m)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const g = p.layout.layoutBox[P];
                g && (m = De(g) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[P] = m;
          }),
          y && b.postRender(() => y(c, d)),
          Ua(this.visualElement, "transform");
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      o = (c, d) => {
        const {
          dragPropagation: h,
          dragDirectionLock: v,
          onDirectionLock: y,
          onDrag: x,
        } = this.getProps();
        if (!h && !this.openGlobalLock) return;
        const { offset: P } = d;
        if (v && this.currentDirection === null) {
          (this.currentDirection = vx(P)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, P),
          this.updateAxis("y", d.point, P),
          this.visualElement.render(),
          x && x(c, d);
      },
      a = (c, d) => this.stop(c, d),
      l = () =>
        Ie((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new pm(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: Cm(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && b.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !ji(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = sx(o, this.constraints[t], this.elastic[t])),
      s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      s = this.constraints;
    n && Ln(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = ox(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = cx(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ie((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = ux(i.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Ln(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = px(r, i.root, this.visualElement.getTransformPagePoint());
    let o = ax(i.layout.layoutBox, s);
    if (n) {
      const a = n(dx(o));
      (this.hasMutatedConstraints = !!a), a && (o = Sm(a));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Ie((c) => {
        if (!ji(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        o && (d = { min: 0, max: 0 });
        const h = i ? 200 : 1e6,
          v = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: h,
            bounceDamping: v,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...d,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Ua(this.visualElement, t), r.start(lu(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Ie((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Ie((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Ie((n) => {
      const { drag: r } = this.getProps();
      if (!ji(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(t[n] - K(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Ln(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Ie((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = lx({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Ie((o) => {
        if (!ji(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set(K(l, u, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    mx.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = ht(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Ln(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      b.read(r);
    const o = lt(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Ie((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = $a,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function ji(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function vx(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class yx extends Wt {
  constructor(t) {
    super(t),
      (this.removeGroupControls = ce),
      (this.removeListeners = ce),
      (this.controls = new gx(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ce);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const wd = (e) => (t, n) => {
  e && b.postRender(() => e(t, n));
};
class xx extends Wt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = ce);
  }
  onPointerDown(t) {
    this.session = new pm(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Cm(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: wd(t),
      onStart: wd(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && b.postRender(() => i(s, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ht(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ks = T.createContext(null);
function wx() {
  const e = T.useContext(Ks);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = T.useId();
  T.useEffect(() => r(i), []);
  const s = T.useCallback(() => n && n(i), [i, n]);
  return !t && n ? [!1, s] : [!0];
}
const hu = T.createContext({}),
  Tm = T.createContext({}),
  Ui = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Sd(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const cr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (D.test(e)) e = parseFloat(e);
        else return e;
      const n = Sd(e, t.target.x),
        r = Sd(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  Sx = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Bt.parse(e);
      if (i.length > 5) return r;
      const s = Bt.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + o] /= a), (i[1 + o] /= l);
      const u = K(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
      );
    },
  },
  Ss = {};
function kx(e) {
  Object.assign(Ss, e);
}
const { schedule: pu, cancel: DS } = Tp(queueMicrotask, !1);
class Px extends T.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    kx(Ex),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Ui.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              b.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      pu.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function jm(e) {
  const [t, n] = wx(),
    r = T.useContext(hu);
  return f.jsx(Px, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: T.useContext(Tm),
    isPresent: t,
    safeToRemove: n,
  });
}
const Ex = {
    borderRadius: {
      ...cr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: cr,
    borderTopRightRadius: cr,
    borderBottomLeftRadius: cr,
    borderBottomRightRadius: cr,
    boxShadow: Sx,
  },
  Am = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Cx = Am.length,
  kd = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Pd = (e) => typeof e == "number" || D.test(e);
function Tx(e, t, n, r, i, s) {
  i
    ? ((e.opacity = K(0, n.opacity !== void 0 ? n.opacity : 1, jx(r))),
      (e.opacityExit = K(t.opacity !== void 0 ? t.opacity : 1, 0, Ax(r))))
    : s &&
      (e.opacity = K(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < Cx; o++) {
    const a = `border${Am[o]}Radius`;
    let l = Ed(t, a),
      u = Ed(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Pd(l) === Pd(u)
        ? ((e[a] = Math.max(K(kd(l), kd(u), r), 0)),
          (et.test(u) || et.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = K(t.rotate || 0, n.rotate || 0, r));
}
function Ed(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const jx = Nm(0, 0.5, Vp),
  Ax = Nm(0.5, 0.95, ce);
function Nm(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(pn(e, t, r)));
}
function Cd(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Re(e, t) {
  Cd(e.x, t.x), Cd(e.y, t.y);
}
function Td(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function jd(e, t, n, r, i) {
  return (
    (e -= t), (e = ws(e, 1 / n, r)), i !== void 0 && (e = ws(e, 1 / i, r)), e
  );
}
function Nx(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (et.test(t) &&
      ((t = parseFloat(t)), (t = K(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = K(s.min, s.max, r);
  e === s && (a -= t),
    (e.min = jd(e.min, t, n, a, i)),
    (e.max = jd(e.max, t, n, a, i));
}
function Ad(e, t, [n, r, i], s, o) {
  Nx(e, t[n], t[r], t[i], t.scale, s, o);
}
const Mx = ["x", "scaleX", "originX"],
  Dx = ["y", "scaleY", "originY"];
function Nd(e, t, n, r) {
  Ad(e.x, t, Mx, n ? n.x : void 0, r ? r.x : void 0),
    Ad(e.y, t, Dx, n ? n.y : void 0, r ? r.y : void 0);
}
function Md(e) {
  return e.translate === 0 && e.scale === 1;
}
function Mm(e) {
  return Md(e.x) && Md(e.y);
}
function Dd(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Lx(e, t) {
  return Dd(e.x, t.x) && Dd(e.y, t.y);
}
function Ld(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Dm(e, t) {
  return Ld(e.x, t.x) && Ld(e.y, t.y);
}
function Vd(e) {
  return De(e.x) / De(e.y);
}
function Rd(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class Vx {
  constructor() {
    this.members = [];
  }
  add(t) {
    uu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (cu(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Rx(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: h,
      skewX: v,
      skewY: y,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      h && (r += `rotateY(${h}deg) `),
      v && (r += `skewX(${v}deg) `),
      y && (r += `skewY(${y}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Ix = (e, t) => e.depth - t.depth;
class zx {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    uu(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    cu(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(Ix),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function Hi(e) {
  const t = ge(e) ? e.get() : e;
  return j1(t) ? t.toValue() : t;
}
function Ox(e, t) {
  const n = tt.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (nt(r), e(s - t));
    };
  return b.read(r, !0), () => nt(r);
}
function bx(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function _x(e, t, n) {
  const r = ge(e) ? e : at(e);
  return r.start(lu("", r, t, n)), r.animation;
}
const Zt = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  vr = typeof window < "u" && window.MotionDebug !== void 0,
  Lo = ["", "X", "Y", "Z"],
  Fx = { visibility: "hidden" },
  Id = 1e3;
let Bx = 0;
function Vo(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Lm(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = cm(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", b, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Lm(r);
}
function Vm({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = Bx++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            vr &&
              (Zt.totalNodes =
                Zt.resolvedTargetDeltas =
                Zt.recalculatedProjection =
                  0),
            this.nodes.forEach($x),
            this.nodes.forEach(Yx),
            this.nodes.forEach(Xx),
            this.nodes.forEach(Wx),
            vr && window.MotionDebug.record(Zt);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new zx());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new du()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = bx(o)), (this.instance = o);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const h = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = Ox(h, 250)),
            Ui.hasAnimatedSinceResize &&
              ((Ui.hasAnimatedSinceResize = !1), this.nodes.forEach(Od));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: h,
              hasRelativeTargetChanged: v,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const x =
                  this.options.transition || c.getDefaultTransition() || tw,
                { onLayoutAnimationStart: P, onLayoutAnimationComplete: m } =
                  c.getProps(),
                p = !this.targetLayout || !Dm(this.targetLayout, y) || v,
                g = !h && v;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (h && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, g);
                const w = { ...Gl(x, "layout"), onPlay: P, onComplete: m };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                h || Od(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        nt(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Jx),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Lm(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(zd);
        return;
      }
      this.isUpdating || this.nodes.forEach(Gx),
        (this.isUpdating = !1),
        this.nodes.forEach(Qx),
        this.nodes.forEach(Ux),
        this.nodes.forEach(Hx),
        this.clearAllSnapshots();
      const a = tt.now();
      (se.delta = Ft(0, 1e3 / 60, a - se.timestamp)),
        (se.timestamp = a),
        (se.isProcessing = !0),
        Eo.update.process(se),
        Eo.preRender.process(se),
        Eo.render.process(se),
        (se.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), pu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Kx), this.sharedNodes.forEach(qx);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        b.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      b.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = J()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Mm(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        (a || qt(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        nw(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a) return J();
      const l = a.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(rw)
        )
      ) {
        const { scroll: c } = this.root;
        c && (Rn(l.x, c.offset.x), Rn(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(o) {
      var a;
      const l = J();
      if (
        (Re(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: h } = c;
        c !== this.root &&
          d &&
          h.layoutScroll &&
          (d.wasRoot && Re(l, o), Rn(l.x, d.offset.x), Rn(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(o, a = !1) {
      const l = J();
      Re(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          In(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          qt(c.latestValues) && In(l, c.latestValues);
      }
      return qt(this.latestValues) && In(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = J();
      Re(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !qt(u.latestValues)) continue;
        Wa(u.latestValues) && u.updateSnapshot();
        const c = J(),
          d = u.measurePageBox();
        Re(c, d),
          Nd(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return qt(this.latestValues) && Nd(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== se.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: d, layoutId: h } = this.options;
      if (!(!this.layout || !(d || h))) {
        if (
          ((this.resolvedRelativeTargetAt = se.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const v = this.getClosestProjectingParent();
          v && v.layout && this.animationProgress !== 1
            ? ((this.relativeParent = v),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = J()),
              (this.relativeTargetOrigin = J()),
              Nr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                v.layout.layoutBox
              ),
              Re(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = J()), (this.targetWithTransforms = J())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                ix(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Re(this.target, this.layout.layoutBox),
                Pm(this.target, this.targetDelta))
              : Re(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const v = this.getClosestProjectingParent();
            v &&
            !!v.resumingFrom == !!this.resumingFrom &&
            !v.options.layoutScroll &&
            v.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = v),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = J()),
                (this.relativeTargetOrigin = J()),
                Nr(this.relativeTargetOrigin, this.target, v.target),
                Re(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          vr && Zt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Wa(this.parent.latestValues) ||
          km(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === se.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      Re(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        v = this.treeScale.y;
      hx(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = J()));
      const { target: y } = a;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Td(this.prevProjectionDelta.x, this.projectionDelta.x),
          Td(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Ar(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== h ||
          this.treeScale.y !== v ||
          !Rd(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Rd(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        vr && Zt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        o)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Vn()),
        (this.projectionDelta = Vn()),
        (this.projectionDeltaWithTransform = Vn());
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = Vn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const h = J(),
        v = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        x = v !== y,
        P = this.getStack(),
        m = !P || P.members.length <= 1,
        p = !!(x && !m && this.options.crossfade === !0 && !this.path.some(ew));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (w) => {
        const S = w / 1e3;
        bd(d.x, o.x, S),
          bd(d.y, o.y, S),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Nr(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Zx(this.relativeTarget, this.relativeTargetOrigin, h, S),
            g && Lx(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = J()),
            Re(g, this.relativeTarget)),
          x &&
            ((this.animationValues = c), Tx(c, u, this.latestValues, S, p, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (nt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = b.update(() => {
          (Ui.hasAnimatedSinceResize = !0),
            (this.currentAnimation = _x(0, Id, {
              ...o,
              onUpdate: (a) => {
                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Id),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          Rm(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || J();
          const d = De(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + d);
          const h = De(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + h);
        }
        Re(a, l),
          In(a, c),
          Ar(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new Vx()),
        this.sharedNodes.get(o).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Vo("z", o, u, this.animationValues);
      for (let c = 0; c < Lo.length; c++)
        Vo(`rotate${Lo[c]}`, o, u, this.animationValues),
          Vo(`skew${Lo[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Fx;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Hi(o == null ? void 0 : o.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const x = {};
        return (
          this.options.layoutId &&
            ((x.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (x.pointerEvents = Hi(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !qt(this.latestValues) &&
            ((x.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          x
        );
      }
      const h = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Rx(
          this.projectionDeltaWithTransform,
          this.treeScale,
          h
        )),
        c && (u.transform = c(h, u.transform));
      const { x: v, y } = this.projectionDelta;
      (u.transformOrigin = `${v.origin * 100}% ${y.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (a = h.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : h.opacityExit)
          : (u.opacity =
              d === this
                ? h.opacity !== void 0
                  ? h.opacity
                  : ""
                : h.opacityExit !== void 0
                ? h.opacityExit
                : 0);
      for (const x in Ss) {
        if (h[x] === void 0) continue;
        const { correct: P, applyTo: m } = Ss[x],
          p = u.transform === "none" ? h[x] : P(h[x], d);
        if (m) {
          const g = m.length;
          for (let w = 0; w < g; w++) u[m[w]] = p;
        } else u[x] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? Hi(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(zd),
        this.root.sharedNodes.clear();
    }
  };
}
function Ux(e) {
  e.updateLayout();
}
function Hx(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source;
    s === "size"
      ? Ie((d) => {
          const h = o ? n.measuredBox[d] : n.layoutBox[d],
            v = De(h);
          (h.min = r[d].min), (h.max = h.min + v);
        })
      : Rm(s, n.layoutBox, r) &&
        Ie((d) => {
          const h = o ? n.measuredBox[d] : n.layoutBox[d],
            v = De(r[d]);
          (h.max = h.min + v),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + v));
        });
    const a = Vn();
    Ar(a, r, n.layoutBox);
    const l = Vn();
    o ? Ar(l, e.applyTransform(i, !0), n.measuredBox) : Ar(l, r, n.layoutBox);
    const u = !Mm(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: h, layout: v } = d;
        if (h && v) {
          const y = J();
          Nr(y, n.layoutBox, h.layoutBox);
          const x = J();
          Nr(x, r, v.layoutBox),
            Dm(y, x) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function $x(e) {
  vr && Zt.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Wx(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Kx(e) {
  e.clearSnapshot();
}
function zd(e) {
  e.clearMeasurements();
}
function Gx(e) {
  e.isLayoutDirty = !1;
}
function Qx(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Od(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function Yx(e) {
  e.resolveTargetDelta();
}
function Xx(e) {
  e.calcProjection();
}
function Jx(e) {
  e.resetSkewAndRotation();
}
function qx(e) {
  e.removeLeadSnapshot();
}
function bd(e, t, n) {
  (e.translate = K(t.translate, 0, n)),
    (e.scale = K(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function _d(e, t, n, r) {
  (e.min = K(t.min, n.min, r)), (e.max = K(t.max, n.max, r));
}
function Zx(e, t, n, r) {
  _d(e.x, t.x, n.x, r), _d(e.y, t.y, n.y, r);
}
function ew(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const tw = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Fd = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Bd = Fd("applewebkit/") && !Fd("chrome/") ? Math.round : ce;
function Ud(e) {
  (e.min = Bd(e.min)), (e.max = Bd(e.max));
}
function nw(e) {
  Ud(e.x), Ud(e.y);
}
function Rm(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !rx(Vd(t), Vd(n), 0.2))
  );
}
function rw(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const iw = Vm({
    attachResizeListener: (e, t) => lt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ro = { current: void 0 },
  Im = Vm({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Ro.current) {
        const e = new iw({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ro.current = e);
      }
      return Ro.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  sw = {
    pan: { Feature: xx },
    drag: { Feature: yx, ProjectionNode: Im, MeasureLayout: jm },
  };
function Hd(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (s, o) => {
      if (s.pointerType === "touch" || ym()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t);
      const l = a[r];
      l && b.postRender(() => l(s, o));
    };
  return ht(e.current, n, i, { passive: !e.getProps()[r] });
}
class ow extends Wt {
  mount() {
    this.unmount = ft(Hd(this.node, !0), Hd(this.node, !1));
  }
  unmount() {}
}
class aw extends Wt {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = ft(
      lt(this.node.current, "focus", () => this.onFocus()),
      lt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const zm = (e, t) => (t ? (e === t ? !0 : zm(e, t.parentElement)) : !1);
function Io(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Ws(n));
}
class lw extends Wt {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = ce),
      (this.removeEndListeners = ce),
      (this.removeAccessibleListeners = ce),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          s = ht(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: d,
                } = this.node.getProps(),
                h = !d && !zm(this.node.current, a.target) ? c : u;
              h && b.update(() => h(a, l));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          o = ht(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = ft(s, o)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (s) => {
            if (s.key !== "Enter" || this.isPressing) return;
            const o = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Io("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && b.postRender(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = lt(this.node.current, "keyup", o)),
              Io("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = lt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Io("cancel", (s, o) => this.cancelPress(s, o));
          },
          i = lt(this.node.current, "blur", r);
        this.removeAccessibleListeners = ft(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && b.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !ym()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && b.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = ht(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = lt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = ft(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Ga = new WeakMap(),
  zo = new WeakMap(),
  uw = (e) => {
    const t = Ga.get(e.target);
    t && t(e);
  },
  cw = (e) => {
    e.forEach(uw);
  };
function dw({ root: e, ...t }) {
  const n = e || document;
  zo.has(n) || zo.set(n, {});
  const r = zo.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(cw, { root: e, ...t })), r[i];
}
function fw(e, t, n) {
  const r = dw(t);
  return (
    Ga.set(e, n),
    r.observe(e),
    () => {
      Ga.delete(e), r.unobserve(e);
    }
  );
}
const hw = { some: 0, all: 1 };
class pw extends Wt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : hw[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          h = u ? c : d;
        h && h(l);
      };
    return fw(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(mw(t, n)) && this.startObserver();
  }
  unmount() {}
}
function mw({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const gw = {
    inView: { Feature: pw },
    tap: { Feature: lw },
    focus: { Feature: aw },
    hover: { Feature: ow },
  },
  vw = { layout: { ProjectionNode: Im, MeasureLayout: jm } },
  mu = T.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Gs = T.createContext({}),
  gu = typeof window < "u",
  vu = gu ? T.useLayoutEffect : T.useEffect,
  Om = T.createContext({ strict: !1 });
function yw(e, t, n, r, i) {
  var s, o;
  const { visualElement: a } = T.useContext(Gs),
    l = T.useContext(Om),
    u = T.useContext(Ks),
    c = T.useContext(mu).reducedMotion,
    d = T.useRef();
  (r = r || l.renderer),
    !d.current &&
      r &&
      (d.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const h = d.current,
    v = T.useContext(Tm);
  h &&
    !h.projection &&
    i &&
    (h.type === "html" || h.type === "svg") &&
    xw(d.current, n, i, v);
  const y = T.useRef(!1);
  T.useInsertionEffect(() => {
    h && y.current && h.update(n, u);
  });
  const x = n[um],
    P = T.useRef(
      !!x &&
        !(
          !((s = window.MotionHandoffIsComplete) === null || s === void 0) &&
          s.call(window, x)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, x))
    );
  return (
    vu(() => {
      h &&
        ((y.current = !0),
        (window.MotionIsMounted = !0),
        h.updateFeatures(),
        pu.render(h.render),
        P.current && h.animationState && h.animationState.animateChanges());
    }),
    T.useEffect(() => {
      h &&
        (!P.current && h.animationState && h.animationState.animateChanges(),
        P.current &&
          (queueMicrotask(() => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) === null ||
              m === void 0 ||
              m.call(window, x);
          }),
          (P.current = !1)));
    }),
    h
  );
}
function xw(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : bm(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && Ln(a)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function bm(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : bm(e.parent);
}
function ww(e, t, n) {
  return T.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Ln(n) && (n.current = r));
    },
    [t]
  );
}
function Qs(e) {
  return Us(e.animate) || Kl.some((t) => Qr(e[t]));
}
function _m(e) {
  return !!(Qs(e) || e.variants);
}
function Sw(e, t) {
  if (Qs(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Qr(n) ? n : void 0,
      animate: Qr(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function kw(e) {
  const { initial: t, animate: n } = Sw(e, T.useContext(Gs));
  return T.useMemo(() => ({ initial: t, animate: n }), [$d(t), $d(n)]);
}
function $d(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Wd = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Xn = {};
for (const e in Wd) Xn[e] = { isEnabled: (t) => Wd[e].some((n) => !!t[n]) };
function Pw(e) {
  for (const t in e) Xn[t] = { ...Xn[t], ...e[t] };
}
const Ew = Symbol.for("motionComponentSymbol");
function Cw({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && Pw(e);
  function s(a, l) {
    let u;
    const c = { ...T.useContext(mu), ...a, layoutId: Tw(a) },
      { isStatic: d } = c,
      h = kw(a),
      v = r(a, d);
    if (!d && gu) {
      jw();
      const y = Aw(c);
      (u = y.MeasureLayout),
        (h.visualElement = yw(i, v, c, t, y.ProjectionNode));
    }
    return f.jsxs(Gs.Provider, {
      value: h,
      children: [
        u && h.visualElement
          ? f.jsx(u, { visualElement: h.visualElement, ...c })
          : null,
        n(i, a, ww(v, h.visualElement, l), v, d, h.visualElement),
      ],
    });
  }
  const o = T.forwardRef(s);
  return (o[Ew] = i), o;
}
function Tw({ layoutId: e }) {
  const t = T.useContext(hu).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function jw(e, t) {
  T.useContext(Om).strict;
}
function Aw(e) {
  const { drag: t, layout: n } = Xn;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const Nw = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function yu(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Nw.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Fm(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const Bm = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Um(e, t, n, r) {
  Fm(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Bm.has(i) ? i : fu(i), t.attrs[i]);
}
function Hm(e, { layout: t, layoutId: n }) {
  return (
    vn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Ss[e] || e === "opacity"))
  );
}
function xu(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const o in i)
    (ge(i[o]) ||
      (t.style && ge(t.style[o])) ||
      Hm(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[o] = i[o]);
  return s;
}
function $m(e, t, n) {
  const r = xu(e, t, n);
  for (const i in e)
    if (ge(e[i]) || ge(t[i])) {
      const s =
        ni.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
function Ys(e) {
  const t = T.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function Mw(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  s
) {
  const o = { latestValues: Dw(r, i, s, e), renderState: t() };
  return n && (o.mount = (a) => n(r, a, o)), o;
}
const Wm = (e) => (t, n) => {
  const r = T.useContext(Gs),
    i = T.useContext(Ks),
    s = () => Mw(e, t, r, i);
  return n ? s() : Ys(s);
};
function Dw(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const h in s) i[h] = Hi(s[h]);
  let { initial: o, animate: a } = e;
  const l = Qs(e),
    u = _m(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const d = c ? a : o;
  if (d && typeof d != "boolean" && !Us(d)) {
    const h = Array.isArray(d) ? d : [d];
    for (let v = 0; v < h.length; v++) {
      const y = $l(e, h[v]);
      if (y) {
        const { transitionEnd: x, transition: P, ...m } = y;
        for (const p in m) {
          let g = m[p];
          if (Array.isArray(g)) {
            const w = c ? g.length - 1 : 0;
            g = g[w];
          }
          g !== null && (i[p] = g);
        }
        for (const p in x) i[p] = x[p];
      }
    }
  }
  return i;
}
const wu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Km = () => ({ ...wu(), attrs: {} }),
  Gm = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Lw = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Vw = ni.length;
function Rw(e, t, n) {
  let r = "",
    i = !0;
  for (let s = 0; s < Vw; s++) {
    const o = ni[s],
      a = e[o];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (o.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = Gm(a, eu[o]);
      if (!l) {
        i = !1;
        const c = Lw[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function Su(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (vn.has(l)) {
      o = !0;
      continue;
    } else if (bp(l)) {
      i[l] = u;
      continue;
    } else {
      const c = Gm(u, eu[l]);
      l.startsWith("origin") ? ((a = !0), (s[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = Rw(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
function Kd(e, t, n) {
  return typeof e == "string" ? e : D.transform(t + n * e);
}
function Iw(e, t, n) {
  const r = Kd(t, e.x, e.width),
    i = Kd(n, e.y, e.height);
  return `${r} ${i}`;
}
const zw = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Ow = { offset: "strokeDashoffset", array: "strokeDasharray" };
function bw(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? zw : Ow;
  e[s.offset] = D.transform(-r);
  const o = D.transform(t),
    a = D.transform(n);
  e[s.array] = `${o} ${a}`;
}
function ku(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d
) {
  if ((Su(e, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: h, style: v, dimensions: y } = e;
  h.transform && (y && (v.transform = h.transform), delete h.transform),
    y &&
      (i !== void 0 || s !== void 0 || v.transform) &&
      (v.transformOrigin = Iw(
        y,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5
      )),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    o !== void 0 && bw(h, o, a, l, !1);
}
const Pu = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  _w = {
    useVisualState: Wm({
      scrapeMotionValuesFromProps: $m,
      createRenderState: Km,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        b.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          b.render(() => {
            ku(n, r, Pu(t.tagName), e.transformTemplate), Um(t, n);
          });
      },
    }),
  },
  Fw = {
    useVisualState: Wm({
      scrapeMotionValuesFromProps: xu,
      createRenderState: wu,
    }),
  };
function Qm(e, t, n) {
  for (const r in t) !ge(t[r]) && !Hm(r, n) && (e[r] = t[r]);
}
function Bw({ transformTemplate: e }, t) {
  return T.useMemo(() => {
    const n = wu();
    return Su(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Uw(e, t) {
  const n = e.style || {},
    r = {};
  return Qm(r, n, e), Object.assign(r, Bw(e, t)), r;
}
function Hw(e, t) {
  const n = {},
    r = Uw(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const $w = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function ks(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    $w.has(e)
  );
}
let Ym = (e) => !ks(e);
function Ww(e) {
  e && (Ym = (t) => (t.startsWith("on") ? !ks(t) : e(t)));
}
try {
  Ww(require("@emotion/is-prop-valid").default);
} catch {}
function Kw(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Ym(i) ||
        (n === !0 && ks(i)) ||
        (!t && !ks(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function Gw(e, t, n, r) {
  const i = T.useMemo(() => {
    const s = Km();
    return (
      ku(s, t, Pu(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    Qm(s, e.style, e), (i.style = { ...s, ...i.style });
  }
  return i;
}
function Qw(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const l = (yu(n) ? Gw : Hw)(r, s, o, n),
      u = Kw(r, typeof n == "string", e),
      c = n !== T.Fragment ? { ...u, ...l, ref: i } : {},
      { children: d } = r,
      h = T.useMemo(() => (ge(d) ? d.get() : d), [d]);
    return T.createElement(n, { ...c, children: h });
  };
}
function Yw(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...(yu(r) ? _w : Fw),
      preloadedFeatures: e,
      useRender: Qw(i),
      createVisualElement: t,
      Component: r,
    };
    return Cw(o);
  };
}
const Qa = { current: null },
  Xm = { current: !1 };
function Xw() {
  if (((Xm.current = !0), !!gu))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Qa.current = e.matches);
      e.addListener(t), t();
    } else Qa.current = !1;
}
function Jw(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (ge(i)) e.addValue(r, i);
    else if (ge(s)) e.addValue(r, at(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, at(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Gd = new WeakMap(),
  qw = [...Bp, pe, Bt],
  Zw = (e) => qw.find(Fp(e)),
  Qd = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
class e2 {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Jl),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const h = tt.now();
        this.renderScheduledAt < h &&
          ((this.renderScheduledAt = h), b.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = Qs(n)),
      (this.isVariantNode = _m(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const h in d) {
      const v = d[h];
      l[h] !== void 0 && ge(v) && v.set(l[h], !1);
    }
  }
  mount(t) {
    (this.current = t),
      Gd.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Xm.current || Xw(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Qa.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Gd.delete(this.current),
      this.projection && this.projection.unmount(),
      nt(this.notifyUpdate),
      nt(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = vn.has(t),
      i = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && b.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), s(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Xn) {
      const n = Xn[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : J();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Qd.length; r++) {
      const i = Qd[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = Jw(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = at(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (zp(i) || Ip(i))
          ? (i = parseFloat(i))
          : !Zw(i) && Bt.test(n) && (i = Yp(t, n)),
        this.setBaseTarget(t, ge(i) ? i.get() : i)),
      ge(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const o = $l(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      o && (i = o[t]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !ge(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new du()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Jm extends e2 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Xp);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function t2(e) {
  return window.getComputedStyle(e);
}
class n2 extends Jm {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Fm);
  }
  readValueFromInstance(t, n) {
    if (vn.has(n)) {
      const r = tu(n);
      return (r && r.default) || 0;
    } else {
      const r = t2(t),
        i = (bp(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Em(t, n);
  }
  build(t, n, r) {
    Su(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return xu(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ge(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class r2 extends Jm {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = J);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (vn.has(n)) {
      const r = tu(n);
      return (r && r.default) || 0;
    }
    return (n = Bm.has(n) ? n : fu(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return $m(t, n, r);
  }
  build(t, n, r) {
    ku(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Um(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Pu(t.tagName)), super.mount(t);
  }
}
const i2 = (e, t) =>
    yu(e) ? new r2(t) : new n2(t, { allowProjection: e !== T.Fragment }),
  s2 = Yw({ ...Q1, ...gw, ...sw, ...vw }, i2),
  M = Bv(s2);
class o2 extends T.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function a2({ children: e, isPresent: t }) {
  const n = T.useId(),
    r = T.useRef(null),
    i = T.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: s } = T.useContext(mu);
  return (
    T.useInsertionEffect(() => {
      const { width: o, height: a, top: l, left: u } = i.current;
      if (t || !r.current || !o || !a) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        s && (c.nonce = s),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    f.jsx(o2, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: T.cloneElement(e, { ref: r }),
    })
  );
}
const l2 = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
}) => {
  const a = Ys(u2),
    l = T.useId(),
    u = T.useCallback(
      (d) => {
        a.set(d, !0);
        for (const h of a.values()) if (!h) return;
        r && r();
      },
      [a, r]
    ),
    c = T.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: u,
        register: (d) => (a.set(d, !1), () => a.delete(d)),
      }),
      s ? [Math.random(), u] : [n, u]
    );
  return (
    T.useMemo(() => {
      a.forEach((d, h) => a.set(h, !1));
    }, [n]),
    T.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    o === "popLayout" && (e = f.jsx(a2, { isPresent: n, children: e })),
    f.jsx(Ks.Provider, { value: c, children: e })
  );
};
function u2() {
  return new Map();
}
const Ai = (e) => e.key || "";
function Yd(e) {
  const t = [];
  return (
    T.Children.forEach(e, (n) => {
      T.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Ps = ({
  children: e,
  exitBeforeEnter: t,
  custom: n,
  initial: r = !0,
  onExitComplete: i,
  presenceAffectsLayout: s = !0,
  mode: o = "sync",
}) => {
  const a = T.useMemo(() => Yd(e), [e]),
    l = a.map(Ai),
    u = T.useRef(!0),
    c = T.useRef(a),
    d = Ys(() => new Map()),
    [h, v] = T.useState(a),
    [y, x] = T.useState(a);
  vu(() => {
    (u.current = !1), (c.current = a);
    for (let p = 0; p < y.length; p++) {
      const g = Ai(y[p]);
      l.includes(g) ? d.delete(g) : d.get(g) !== !0 && d.set(g, !1);
    }
  }, [y, l.length, l.join("-")]);
  const P = [];
  if (a !== h) {
    let p = [...a];
    for (let g = 0; g < y.length; g++) {
      const w = y[g],
        S = Ai(w);
      l.includes(S) || (p.splice(g, 0, w), P.push(w));
    }
    o === "wait" && P.length && (p = P), x(Yd(p)), v(a);
    return;
  }
  const { forceRender: m } = T.useContext(hu);
  return f.jsx(f.Fragment, {
    children: y.map((p) => {
      const g = Ai(p),
        w = a === y || l.includes(g),
        S = () => {
          if (d.has(g)) d.set(g, !0);
          else return;
          let C = !0;
          d.forEach((A) => {
            A || (C = !1);
          }),
            C && (m == null || m(), x(c.current), i && i());
        };
      return f.jsx(
        l2,
        {
          isPresent: w,
          initial: !u.current || r ? void 0 : !1,
          custom: w ? void 0 : n,
          presenceAffectsLayout: s,
          mode: o,
          onExitComplete: w ? void 0 : S,
          children: p,
        },
        g
      );
    }),
  });
};
function c2(e, t, n) {
  return (
    typeof e == "string"
      ? (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
const $i = new WeakMap();
let Pt;
function d2(e, t) {
  if (t) {
    const { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e
      ? e.getBBox()
      : { width: e.offsetWidth, height: e.offsetHeight };
}
function f2({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = $i.get(e)) === null ||
    r === void 0 ||
    r.forEach((i) => {
      i({
        target: e,
        contentSize: t,
        get size() {
          return d2(e, n);
        },
      });
    });
}
function h2(e) {
  e.forEach(f2);
}
function p2() {
  typeof ResizeObserver > "u" || (Pt = new ResizeObserver(h2));
}
function m2(e, t) {
  Pt || p2();
  const n = c2(e);
  return (
    n.forEach((r) => {
      let i = $i.get(r);
      i || ((i = new Set()), $i.set(r, i)),
        i.add(t),
        Pt == null || Pt.observe(r);
    }),
    () => {
      n.forEach((r) => {
        const i = $i.get(r);
        i == null || i.delete(t),
          (i != null && i.size) || Pt == null || Pt.unobserve(r);
      });
    }
  );
}
const Wi = new Set();
let Mr;
function g2() {
  (Mr = () => {
    const e = { width: window.innerWidth, height: window.innerHeight },
      t = { target: window, size: e, contentSize: e };
    Wi.forEach((n) => n(t));
  }),
    window.addEventListener("resize", Mr);
}
function v2(e) {
  return (
    Wi.add(e),
    Mr || g2(),
    () => {
      Wi.delete(e), !Wi.size && Mr && (Mr = void 0);
    }
  );
}
function y2(e, t) {
  return typeof e == "function" ? v2(e) : m2(e, t);
}
const x2 = 50,
  Xd = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  w2 = () => ({ time: 0, x: Xd(), y: Xd() }),
  S2 = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function Jd(e, t, n, r) {
  const i = n[t],
    { length: s, position: o } = S2[t],
    a = i.current,
    l = n.time;
  (i.current = e[`scroll${o}`]),
    (i.scrollLength = e[`scroll${s}`] - e[`client${s}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = pn(0, i.scrollLength, i.current));
  const u = r - l;
  i.velocity = u > x2 ? 0 : ru(i.current - a, u);
}
function k2(e, t, n) {
  Jd(e, "x", t, n), Jd(e, "y", t, n), (t.time = n);
}
function P2(e, t) {
  const n = { x: 0, y: 0 };
  let r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      const i = r.getBoundingClientRect();
      r = r.parentElement;
      const s = r.getBoundingClientRect();
      (n.x += i.left - s.left), (n.y += i.top - s.top);
    } else if (r instanceof SVGGraphicsElement) {
      const { x: i, y: s } = r.getBBox();
      (n.x += i), (n.y += s);
      let o = null,
        a = r.parentNode;
      for (; !o; ) a.tagName === "svg" && (o = a), (a = r.parentNode);
      r = o;
    } else break;
  return n;
}
const E2 = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  Ya = { start: 0, center: 0.5, end: 1 };
function qd(e, t, n = 0) {
  let r = 0;
  if ((e in Ya && (e = Ya[e]), typeof e == "string")) {
    const i = parseFloat(e);
    e.endsWith("px")
      ? (r = i)
      : e.endsWith("%")
      ? (e = i / 100)
      : e.endsWith("vw")
      ? (r = (i / 100) * document.documentElement.clientWidth)
      : e.endsWith("vh")
      ? (r = (i / 100) * document.documentElement.clientHeight)
      : (e = i);
  }
  return typeof e == "number" && (r = t * e), n + r;
}
const C2 = [0, 0];
function T2(e, t, n, r) {
  let i = Array.isArray(e) ? e : C2,
    s = 0,
    o = 0;
  return (
    typeof e == "number"
      ? (i = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (i = e.split(" ")) : (i = [e, Ya[e] ? e : "0"])),
    (s = qd(i[0], n, r)),
    (o = qd(i[1], t)),
    s - o
  );
}
const j2 = { x: 0, y: 0 };
function A2(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function N2(e, t, n) {
  const { offset: r = E2.All } = n,
    { target: i = e, axis: s = "y" } = n,
    o = s === "y" ? "height" : "width",
    a = i !== e ? P2(i, e) : j2,
    l = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : A2(i),
    u = { width: e.clientWidth, height: e.clientHeight };
  t[s].offset.length = 0;
  let c = !t[s].interpolate;
  const d = r.length;
  for (let h = 0; h < d; h++) {
    const v = T2(r[h], u[o], l[o], a[s]);
    !c && v !== t[s].interpolatorOffsets[h] && (c = !0), (t[s].offset[h] = v);
  }
  c &&
    ((t[s].interpolate = rm(t[s].offset, im(r))),
    (t[s].interpolatorOffsets = [...t[s].offset])),
    (t[s].progress = t[s].interpolate(t[s].current));
}
function M2(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      (n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight);
}
function D2(e, t, n, r = {}) {
  return {
    measure: () => M2(e, r.target, n),
    update: (i) => {
      k2(e, n, i), (r.offset || r.target) && N2(e, n, r);
    },
    notify: () => t(n),
  };
}
const dr = new WeakMap(),
  Zd = new WeakMap(),
  Oo = new WeakMap(),
  ef = (e) => (e === document.documentElement ? window : e);
function Eu(e, { container: t = document.documentElement, ...n } = {}) {
  let r = Oo.get(t);
  r || ((r = new Set()), Oo.set(t, r));
  const i = w2(),
    s = D2(t, e, i, n);
  if ((r.add(s), !dr.has(t))) {
    const a = () => {
        for (const h of r) h.measure();
      },
      l = () => {
        for (const h of r) h.update(se.timestamp);
      },
      u = () => {
        for (const h of r) h.notify();
      },
      c = () => {
        b.read(a, !1, !0), b.read(l, !1, !0), b.update(u, !1, !0);
      };
    dr.set(t, c);
    const d = ef(t);
    window.addEventListener("resize", c, { passive: !0 }),
      t !== document.documentElement && Zd.set(t, y2(t, c)),
      d.addEventListener("scroll", c, { passive: !0 });
  }
  const o = dr.get(t);
  return (
    b.read(o, !1, !0),
    () => {
      var a;
      nt(o);
      const l = Oo.get(t);
      if (!l || (l.delete(s), l.size)) return;
      const u = dr.get(t);
      dr.delete(t),
        u &&
          (ef(t).removeEventListener("scroll", u),
          (a = Zd.get(t)) === null || a === void 0 || a(),
          window.removeEventListener("resize", u));
    }
  );
}
function qm(e, t) {
  let n;
  const r = () => {
    const { currentTime: i } = t,
      o = (i === null ? 0 : i.value) / 100;
    n !== o && e(o), (n = o);
  };
  return b.update(r, !0), () => nt(r);
}
function L2({ source: e, container: t, axis: n = "y" }) {
  e && (t = e);
  const r = { value: 0 },
    i = Eu(
      (s) => {
        r.value = s[n].progress * 100;
      },
      { container: t, axis: n }
    );
  return { currentTime: r, cancel: i };
}
const bo = new Map();
function Zm({
  source: e,
  container: t = document.documentElement,
  axis: n = "y",
} = {}) {
  e && (t = e), bo.has(t) || bo.set(t, {});
  const r = bo.get(t);
  return (
    r[n] ||
      (r[n] = lm()
        ? new ScrollTimeline({ source: t, axis: n })
        : L2({ source: t, axis: n })),
    r[n]
  );
}
function V2(e) {
  return e.length === 2;
}
function eg(e) {
  return e && (e.target || e.offset);
}
function R2(e, t) {
  return V2(e) || eg(t)
    ? Eu((n) => {
        e(n[t.axis].progress, n);
      }, t)
    : qm(e, Zm(t));
}
function I2(e, t) {
  if (eg(t))
    return (
      e.pause(),
      Eu((n) => {
        e.time = e.duration * n[t.axis].progress;
      }, t)
    );
  {
    const n = Zm(t);
    return e.attachTimeline(
      n,
      (r) => (
        r.pause(),
        qm((i) => {
          r.time = r.duration * i;
        }, n)
      )
    );
  }
}
function z2(e, { axis: t = "y", ...n } = {}) {
  const r = { axis: t, ...n };
  return typeof e == "function" ? R2(e, r) : I2(e, r);
}
function tf(e, t) {
  ty(!!(!t || t.current));
}
const O2 = () => ({
  scrollX: at(0),
  scrollY: at(0),
  scrollXProgress: at(0),
  scrollYProgress: at(0),
});
function b2({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  const i = Ys(O2);
  return (
    (n ? vu : T.useEffect)(
      () => (
        tf("target", t),
        tf("container", e),
        z2(
          (o, { x: a, y: l }) => {
            i.scrollX.set(a.current),
              i.scrollXProgress.set(a.progress),
              i.scrollY.set(l.current),
              i.scrollYProgress.set(l.progress);
          },
          {
            ...r,
            container: (e == null ? void 0 : e.current) || void 0,
            target: (t == null ? void 0 : t.current) || void 0,
          }
        )
      ),
      [e, t, JSON.stringify(r.offset)]
    ),
    i
  );
}
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _2 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  tg = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var F2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const B2 = T.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: i = "",
      children: s,
      iconNode: o,
      ...a
    },
    l
  ) =>
    T.createElement(
      "svg",
      {
        ref: l,
        ...F2,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: tg("lucide", i),
        ...a,
      },
      [
        ...o.map(([u, c]) => T.createElement(u, c)),
        ...(Array.isArray(s) ? s : [s]),
      ]
    )
);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _ = (e, t) => {
  const n = T.forwardRef(({ className: r, ...i }, s) =>
    T.createElement(B2, {
      ref: s,
      iconNode: t,
      className: tg(`lucide-${_2(e)}`, r),
      ...i,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ng = _("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const U2 = _("Book", [
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp",
    },
  ],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rg = _("Briefcase", [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
  ],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H2 = _("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ig = _("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $2 = _("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const W2 = _("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sg = _("Cloud", [
  [
    "path",
    { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" },
  ],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cu = _("Code", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const og = _("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K2 = _("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nf = _("GraduationCap", [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0",
    },
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G2 = _("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q2 = _("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y2 = _("Laptop", [
  [
    "path",
    {
      d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
      key: "tarvll",
    },
  ],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X2 = _("Layers", [
  [
    "path",
    {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
      key: "8b97xw",
    },
  ],
  [
    "path",
    { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" },
  ],
  [
    "path",
    { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" },
  ],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ag = _("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lg = _("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ug = _("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J2 = _("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q2 = _("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z2 = _("Quote", [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0",
    },
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd",
    },
  ],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eS = _("Server", [
  [
    "rect",
    {
      width: "20",
      height: "8",
      x: "2",
      y: "2",
      rx: "2",
      ry: "2",
      key: "ngkwjq",
    },
  ],
  [
    "rect",
    {
      width: "20",
      height: "8",
      x: "2",
      y: "14",
      rx: "2",
      ry: "2",
      key: "iecqi9",
    },
  ],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tS = _("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rf = _("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nS = _("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rS = _("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iS = _("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sS = _("Wrench", [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      key: "cbrjhi",
    },
  ],
]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cg = _("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  oS = () => {
    const [e, t] = T.useState(!1),
      [n, r] = T.useState(!1),
      [i, s] = T.useState("home"),
      { scrollY: o, scrollYProgress: a } = b2(),
      l = [
        { id: "home", label: "Home", icon: f.jsx(Q2, { size: 18 }) },
        { id: "about", label: "About", icon: f.jsx(rS, { size: 18 }) },
        {
          id: "certifications",
          label: "Certifications",
          icon: f.jsx(ng, { size: 18 }),
        },
        {
          id: "experience",
          label: "Experience",
          icon: f.jsx(rg, { size: 18 }),
        },
        { id: "skills", label: "Skills", icon: f.jsx(Cu, { size: 18 }) },
        {
          id: "recommendations",
          label: "Recommendations",
          icon: f.jsx(G2, { size: 18 }),
        },
        { id: "contact", label: "Contact", icon: f.jsx(q2, { size: 18 }) },
      ];
    T.useEffect(
      () =>
        o.onChange((c) => {
          r(c > 50);
        }),
      [o]
    ),
      T.useEffect(() => {
        const c = () => {
          const h = l
            .map((v) => v.id)
            .find((v) => {
              const y = document.getElementById(v);
              if (y) {
                const x = y.getBoundingClientRect();
                return x.top <= 100 && x.bottom >= 100;
              }
              return !1;
            });
          h && s(h);
        };
        return (
          window.addEventListener("scroll", c),
          () => window.removeEventListener("scroll", c)
        );
      }, [l]);
    const u = (c) => {
      if (c === "home") window.scrollTo({ top: 0, behavior: "smooth" });
      else {
        const d = document.getElementById(c);
        d && d.scrollIntoView({ behavior: "smooth" });
      }
      s(c), t(!1);
    };
    return f.jsxs(M.nav, {
      className: `fixed w-full z-50 transition-all duration-300 ${
        n
          ? "bg-white/90 shadow-lg backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`,
      initial: { y: -100 },
      animate: { y: 0 },
      transition: { duration: 0.5 },
      children: [
        f.jsx(M.div, {
          className:
            "absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1A73E8] via-blue-400 to-[#1A73E8] origin-left",
          style: { scaleX: a },
        }),
        f.jsxs("div", {
          className: "container mx-auto px-4",
          children: [
            f.jsxs("div", {
              className: "flex justify-between items-center",
              children: [
                f.jsx(M.button, {
                  onClick: () => u("home"),
                  className: "relative group",
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  children: f.jsx("span", {
                    className: `text-2xl font-bold bg-gradient-to-r from-[#1A73E8] to-blue-500 
                           text-transparent bg-clip-text`,
                    children: "JM",
                  }),
                }),
                f.jsx("div", {
                  className: "hidden md:flex items-center space-x-1",
                  children: l.map((c) =>
                    f.jsxs(
                      M.button,
                      {
                        onClick: () => u(c.id),
                        className: `relative flex items-center gap-2 px-4 py-2 rounded-lg font-medium
                           transition-all duration-200 ${
                             i === c.id
                               ? "text-[#1A73E8] bg-blue-50"
                               : "text-gray-600 hover:text-[#1A73E8] hover:bg-gray-50"
                           }`,
                        whileHover: { y: -2 },
                        whileTap: { y: 0 },
                        children: [
                          c.icon,
                          c.label,
                          i === c.id &&
                            f.jsx(M.div, {
                              layoutId: "activeIndicator",
                              className:
                                "absolute inset-0 rounded-lg border-2 border-[#1A73E8]",
                              initial: !1,
                              transition: {
                                type: "spring",
                                bounce: 0.2,
                                duration: 0.6,
                              },
                            }),
                        ],
                      },
                      c.id
                    )
                  ),
                }),
                f.jsx(M.button, {
                  className:
                    "md:hidden p-2 rounded-lg bg-gray-50 text-gray-600 hover:text-[#1A73E8]",
                  onClick: () => t(!e),
                  whileTap: { scale: 0.95 },
                  children: f.jsx(Ps, {
                    mode: "wait",
                    children: f.jsx(
                      M.div,
                      {
                        initial: { opacity: 0, rotate: -90 },
                        animate: { opacity: 1, rotate: 0 },
                        exit: { opacity: 0, rotate: 90 },
                        transition: { duration: 0.2 },
                        children: e
                          ? f.jsx(cg, { size: 24 })
                          : f.jsx(J2, { size: 24 }),
                      },
                      e ? "close" : "menu"
                    ),
                  }),
                }),
              ],
            }),
            f.jsx(Ps, {
              children:
                e &&
                f.jsx(M.div, {
                  className: `md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md
                       shadow-lg border-t border-gray-100`,
                  initial: { opacity: 0, y: -10 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -10 },
                  transition: { duration: 0.2 },
                  children: f.jsx("div", {
                    className: "container mx-auto px-4 py-4 space-y-2",
                    children: l.map((c, d) =>
                      f.jsxs(
                        M.button,
                        {
                          onClick: () => u(c.id),
                          className: `flex items-center gap-3 w-full p-4 rounded-lg transition-all
                             ${
                               i === c.id
                                 ? "bg-blue-50 text-[#1A73E8]"
                                 : "text-gray-600 hover:bg-gray-50 hover:text-[#1A73E8]"
                             }`,
                          initial: { opacity: 0, x: -20 },
                          animate: { opacity: 1, x: 0 },
                          transition: { delay: d * 0.1 },
                          whileHover: { x: 4 },
                          children: [c.icon, c.label],
                        },
                        c.id
                      )
                    ),
                  }),
                }),
            }),
          ],
        }),
      ],
    });
  };
var dg = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  sf = sn.createContext && sn.createContext(dg),
  aS = ["attr", "size", "title"];
function lS(e, t) {
  if (e == null) return {};
  var n = uS(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function uS(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Es() {
  return (
    (Es = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Es.apply(this, arguments)
  );
}
function of(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Cs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? of(Object(n), !0).forEach(function (r) {
          cS(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : of(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function cS(e, t, n) {
  return (
    (t = dS(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function dS(e) {
  var t = fS(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function fS(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fg(e) {
  return (
    e &&
    e.map((t, n) =>
      sn.createElement(t.tag, Cs({ key: n }, t.attr), fg(t.child))
    )
  );
}
function hg(e) {
  return (t) =>
    sn.createElement(hS, Es({ attr: Cs({}, e.attr) }, t), fg(e.child));
}
function hS(e) {
  var t = (n) => {
    var { attr: r, size: i, title: s } = e,
      o = lS(e, aS),
      a = i || n.size || "1em",
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      sn.createElement(
        "svg",
        Es(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: l,
            style: Cs(Cs({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        s && sn.createElement("title", null, s),
        e.children
      )
    );
  };
  return sf !== void 0
    ? sn.createElement(sf.Consumer, null, (n) => t(n))
    : t(dg);
}
function pS(e) {
  return hg({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
        child: [],
      },
    ],
  })(e);
}
function mS(e) {
  return hg({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: { d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" },
        child: [],
      },
    ],
  })(e);
}
const gS = () => {
    const e = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { delayChildren: 0.3, staggerChildren: 0.2 },
        },
      },
      t = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      },
      n = {
        hover: { y: -5, transition: { duration: 0.3, ease: "easeInOut" } },
      },
      r = {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      };
    return f.jsx("section", {
      id: "home",
      className: "min-h-screen bg-[#F8FAFC] relative",
      children: f.jsx("div", {
        className:
          "container mx-auto px-4 min-h-screen flex flex-col justify-center items-center",
        children: f.jsxs(M.div, {
          className: "max-w-4xl text-center",
          variants: e,
          initial: "hidden",
          animate: "visible",
          children: [
            f.jsx(M.div, {
              whileHover: "hover",
              variants: n,
              className: "mb-8",
              children: f.jsx(M.span, {
                className:
                  "inline-block px-4 py-2 bg-blue-50 text-blue-500 rounded-full text-sm",
                whileHover: { scale: 1.05 },
                children: "Hi there, I'm",
              }),
            }),
            f.jsx(M.h1, {
              variants: r,
              className: "text-5xl md:text-7xl font-bold mb-6 text-[#1A73E8]",
              children: "Jinal Mamaniya",
            }),
            f.jsx(M.h2, {
              variants: t,
              className:
                "text-2xl md:text-3xl text-gray-800 mb-8 font-semibold",
              children: "Senior Software Engineer",
            }),
            f.jsx(M.p, {
              variants: t,
              className:
                "text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed",
              children:
                "Building modern web applications with expertise in full-stack development. Specializing in creating scalable solutions and delivering exceptional user experiences. Passionate about building high-performance applications and implementing best practices in software development. Committed to continuous learning and staying at the forefront of emerging technologies.",
            }),
            f.jsx(M.div, {
              variants: t,
              className: "flex flex-wrap justify-center gap-4 mb-12",
              children: f.jsx(M.a, {
                href: "#contact",
                className: `px-8 py-3 bg-[#1A73E8] text-white rounded-full hover:bg-[#1976D2] 
                       transition-all duration-300 shadow-md`,
                whileHover: {
                  scale: 1.05,
                  boxShadow: "0 4px 15px rgba(30, 136, 229, 0.3)",
                },
                whileTap: { scale: 0.98 },
                children: "Get in Touch",
              }),
            }),
            f.jsxs(M.div, {
              variants: t,
              className: "flex justify-center items-center space-x-6",
              children: [
                f.jsx(af, {
                  href: "http://www.linkedin.com/in/jinal-mamaniya",
                  icon: f.jsx(pS, { className: "w-6 h-6" }),
                  label: "LinkedIn",
                }),
                f.jsx(af, {
                  href: "mailto:mamaniya.jinals@gmail.com",
                  icon: f.jsx(mS, { className: "w-6 h-6" }),
                  label: "Email",
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  af = ({ href: e, icon: t, label: n }) =>
    f.jsx(M.a, {
      href: e,
      target: "_blank",
      rel: "noopener noreferrer",
      className: `text-gray-600 hover:text-[#1A73E8] transition-colors p-2 
               hover:bg-blue-50 rounded-full`,
      whileHover: { scale: 1.1, rotate: 5, transition: { duration: 0.2 } },
      whileTap: { scale: 0.95 },
      "aria-label": n,
      children: t,
    }),
  vS = () => {
    const e = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2, duration: 0.6 },
        },
      },
      t = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      },
      n = [
        {
          icon: f.jsx(Y2, { className: "w-6 h-6" }),
          title: "Frontend Excellence",
          description:
            "Mastery in creating responsive, user-centric interfaces using Angular, React, and modern CSS frameworks. Specialized in delivering seamless user experiences across all devices.",
        },
        {
          icon: f.jsx(eS, { className: "w-6 h-6" }),
          title: "Backend Architecture",
          description:
            "Expert in building robust backend systems using .NET Core, Node.js, and various databases. Focus on creating scalable, maintainable APIs and microservices architectures.",
        },
        {
          icon: f.jsx(sg, { className: "w-6 h-6" }),
          title: "Cloud & DevOps",
          description:
            "Experienced in Azure cloud services, containerization with Docker, and implementing CI/CD pipelines. Proven track record of optimizing deployment processes and reducing infrastructure costs.",
        },
        {
          icon: f.jsx(og, { className: "w-6 h-6" }),
          title: "Database Design",
          description:
            "Proficient in both SQL and NoSQL databases, with expertise in performance optimization and data modeling. Experience in handling large-scale data operations and caching strategies.",
        },
      ],
      r = [
        {
          number: "8.5+",
          label: "Years of Experience",
          icon: f.jsx(nS, { className: "w-5 h-5" }),
        },
        {
          number: "20+",
          label: "Projects Completed",
          icon: f.jsx(Cu, { className: "w-5 h-5" }),
        },
        {
          number: "85%",
          label: "Performance Improvements",
          icon: f.jsx(tS, { className: "w-5 h-5" }),
        },
        {
          number: "28%",
          label: "User Engagement Increase",
          icon: f.jsx(iS, { className: "w-5 h-5" }),
        },
      ],
      i = () =>
        f.jsxs(M.div, {
          className: "text-center mb-16",
          variants: t,
          whileHover: { scale: 1.05 },
          transition: { type: "spring", stiffness: 300 },
          children: [
            f.jsx("h2", {
              className: "text-4xl md:text-5xl font-bold mb-4 text-[#1A73E8]",
              children: "About Me",
            }),
            f.jsx("div", {
              className: "w-24 h-1 bg-[#1A73E8] mx-auto rounded-full",
            }),
          ],
        }),
      s = () =>
        f.jsxs(M.div, {
          className: "max-w-4xl mx-auto mb-20 relative",
          variants: t,
          children: [
            f.jsx("div", {
              className:
                "absolute -top-4 -right-4 w-24 h-24 border-2 border-[#1A73E8]/20 rounded",
            }),
            f.jsx("div", {
              className:
                "absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[#1A73E8]/20 rounded",
            }),
            f.jsxs("div", {
              className:
                "bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 relative",
              children: [
                f.jsxs("div", {
                  className: "absolute top-0 right-0 w-20 h-20",
                  children: [
                    f.jsx("div", {
                      className:
                        "absolute top-4 right-4 w-2 h-2 bg-[#1A73E8] rounded-full",
                    }),
                    f.jsx("div", {
                      className:
                        "absolute top-4 right-8 w-2 h-2 bg-[#1A73E8]/50 rounded-full",
                    }),
                    f.jsx("div", {
                      className:
                        "absolute top-8 right-4 w-2 h-2 bg-[#1A73E8]/50 rounded-full",
                    }),
                  ],
                }),
                f.jsx("div", {
                  className: "space-y-8",
                  children: [
                    "With over 8.5 years of experience in software development, I've cultivated a deep understanding of the full development lifecycle, from concept to deployment. My journey has taken me through various roles at prominent companies like LexisNexis and Motorola Solutions, where I've consistently delivered high-impact solutions.",
                    "My technical expertise spans both frontend and backend development, with a strong focus on performance optimization and scalable architecture. I've successfully led projects that resulted in significant improvements in user engagement and system efficiency.",
                    "Beyond coding, I'm passionate about mentoring junior developers and contributing to team growth. I stay current with emerging technologies and best practices, ensuring that my solutions are not just effective today but sustainable for the future.",
                  ].map((l, u) =>
                    f.jsxs(
                      M.div,
                      {
                        className:
                          "relative pl-6 border-l-2 border-[#1A73E8]/20",
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { delay: u * 0.2 },
                        viewport: { once: !0 },
                        children: [
                          f.jsx("div", {
                            className:
                              "absolute left-[-5px] top-0 w-2 h-2 bg-[#1A73E8] rounded-full",
                          }),
                          f.jsx("p", {
                            className: "text-lg text-gray-600 leading-relaxed",
                            children: l,
                          }),
                        ],
                      },
                      u
                    )
                  ),
                }),
                f.jsx("div", {
                  className: "absolute bottom-4 left-12 right-12",
                  children: f.jsx("div", {
                    className: "h-1 w-full bg-[#1A73E8]/5 rounded-full",
                  }),
                }),
              ],
            }),
          ],
        }),
      o = () =>
        f.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-20",
          children: n.map((l, u) =>
            f.jsx(
              M.div,
              {
                className:
                  "bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300",
                variants: t,
                whileHover: { scale: 1.02 },
                transition: { type: "spring", stiffness: 300 },
                custom: u,
                children: f.jsxs("div", {
                  className: "flex items-start gap-4",
                  children: [
                    f.jsx(M.div, {
                      className: "p-3 bg-blue-50 rounded-lg text-[#1A73E8]",
                      whileHover: { rotate: 360 },
                      transition: { duration: 0.5 },
                      children: l.icon,
                    }),
                    f.jsxs("div", {
                      children: [
                        f.jsx("h3", {
                          className: "text-xl font-bold text-gray-900 mb-3",
                          children: l.title,
                        }),
                        f.jsx("p", {
                          className: "text-gray-600 leading-relaxed",
                          children: l.description,
                        }),
                      ],
                    }),
                  ],
                }),
              },
              l.title
            )
          ),
        }),
      a = () =>
        f.jsx(M.div, {
          className:
            "bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300",
          variants: t,
          whileHover: { scale: 1.02 },
          children: f.jsx("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-8",
            children: r.map((l, u) =>
              f.jsxs(
                M.div,
                {
                  className: "text-center group",
                  variants: t,
                  whileHover: { scale: 1.05 },
                  custom: u,
                  children: [
                    f.jsx(M.div, {
                      className:
                        "p-3 bg-blue-50 rounded-full w-12 h-12 mx-auto flex items-center justify-center text-[#1A73E8]",
                      whileHover: { rotate: 360 },
                      transition: { duration: 0.5 },
                      children: l.icon,
                    }),
                    f.jsx("div", {
                      className: "text-4xl font-bold text-[#1A73E8] mt-4 mb-2",
                      children: l.number,
                    }),
                    f.jsx("div", {
                      className: "h-1 w-12 mx-auto bg-[#1A73E8] rounded-full",
                    }),
                    f.jsx("p", {
                      className: "text-gray-600 font-medium mt-4",
                      children: l.label,
                    }),
                  ],
                },
                l.label
              )
            ),
          }),
        });
    return f.jsx("section", {
      id: "about",
      className: "py-24 bg-[#F8FAFC] overflow-hidden",
      children: f.jsx("div", {
        className: "container mx-auto px-4",
        children: f.jsxs(M.div, {
          variants: e,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0 },
          children: [f.jsx(i, {}), f.jsx(s, {}), f.jsx(o, {}), f.jsx(a, {})],
        }),
      }),
    });
  },
  _o = {
    programmingLanguages: {
      title: "Programming Languages & Core Technologies",
      skills: [
        { name: "C#", level: "Expert" },
        { name: "JavaScript", level: "Expert" },
        { name: "TypeScript", level: "Expert" },
        { name: "HTML5", level: "Expert" },
        { name: "CSS3", level: "Expert" },
        { name: "LINQ", level: "Advanced" },
      ],
    },
    frameworks: {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", level: "Expert" },
        { name: "Angular", level: "Expert" },
        { name: "GraphQL", level: "Advanced" },
        { name: "Node.js", level: "Advanced" },
        { name: "jQuery", level: "Advanced" },
        { name: ".NET Core", level: "Expert" },
        { name: ".NET MVC", level: "Expert" },
        { name: "REST API", level: "Expert" },
        { name: "SOAP API", level: "Advanced" },
        { name: "Entity Framework", level: "Expert" },
        { name: "Bootstrap", level: "Advanced" },
        { name: "WPF", level: "Advanced" },
        { name: "Redux", level: "Advanced" },
        { name: "React Router", level: "Advanced" },
      ],
    },
    testing: {
      title: "Testing & Quality",
      skills: [
        { name: "NUnit", level: "Expert" },
        { name: "xUnit", level: "Expert" },
        { name: "Jasmine", level: "Advanced" },
        { name: "Karma", level: "Advanced" },
        { name: "Jest", level: "Advanced" },
        { name: "React Testing Library", level: "Advanced" },
      ],
    },
    devOps: {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", level: "Expert" },
        { name: "CI/CD", level: "Advanced" },
        { name: "Docker", level: "Advanced" },
        { name: "Kubernetes", level: "Advanced" },
        { name: "Azure", level: "Expert" },
        { name: "Team Foundation Server", level: "Advanced" },
        { name: "Azure DevOps", level: "Advanced" },
      ],
    },
    databases: {
      title: "Databases & Storage",
      skills: [
        { name: "SQL Server", level: "Expert" },
        { name: "MongoDB", level: "Advanced" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "SQLite", level: "Advanced" },
        { name: "Redis", level: "Advanced" },
      ],
    },
    methodologies: {
      title: "Methodologies & Architecture",
      skills: [
        { name: "BEM", level: "Expert" },
        { name: "SASS", level: "Expert" },
        { name: "Agile Scrum", level: "Expert" },
        { name: "Microservices Architecture", level: "Advanced" },
        { name: "Domain-Driven Design", level: "Advanced" },
        { name: "Event-Driven Architecture", level: "Advanced" },
        { name: "API Gateway Pattern", level: "Advanced" },
        { name: "Service Mesh", level: "Advanced" },
      ],
    },
  },
  yS = () => {
    const [e, t] = T.useState(null),
      n = {
        programmingLanguages: f.jsx(Cu, { className: "w-8 h-8" }),
        frameworks: f.jsx(X2, { className: "w-8 h-8" }),
        testing: f.jsx(W2, { className: "w-8 h-8" }),
        devOps: f.jsx(sg, { className: "w-8 h-8" }),
        databases: f.jsx(og, { className: "w-8 h-8" }),
        methodologies: f.jsx(sS, { className: "w-8 h-8" }),
      };
    return f.jsx("section", {
      id: "skills",
      className:
        "py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen",
      children: f.jsx("div", {
        className: "container mx-auto px-4",
        children: f.jsxs(M.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "max-w-7xl mx-auto",
          children: [
            f.jsxs(M.div, {
              className: "text-center mb-16",
              initial: { y: -20 },
              animate: { y: 0 },
              children: [
                f.jsx("h2", {
                  className:
                    "text-4xl md:text-5xl font-bold mb-4 text-blue-600",
                  children: "Skills & Expertise",
                }),
                f.jsx("div", {
                  className: "w-24 h-1 bg-blue-500 mx-auto rounded-full mb-4",
                }),
              ],
            }),
            f.jsx("div", {
              className:
                "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12",
              children: Object.entries(_o).map(([r, i]) =>
                f.jsx(
                  M.div,
                  {
                    className: "flex justify-center",
                    whileHover: { scale: 1.05 },
                    children: f.jsxs("button", {
                      onClick: () => t(e === r ? null : r),
                      className: `w-40 h-40 relative ${
                        e === r ? "z-10" : "hover:z-10"
                      }`,
                      children: [
                        f.jsx("div", {
                          className: `absolute inset-0 transform rotate-45 rounded-2xl transition-all duration-300 ${
                            e === r
                              ? "bg-blue-600 shadow-lg"
                              : "bg-white hover:bg-blue-50 shadow-md"
                          }`,
                        }),
                        f.jsxs("div", {
                          className:
                            "absolute inset-0 flex flex-col items-center justify-center p-4 text-center",
                          children: [
                            f.jsx("div", {
                              className: `mb-2 ${
                                e === r ? "text-white" : "text-blue-600"
                              }`,
                              children: n[r],
                            }),
                            f.jsx("span", {
                              className: `text-sm font-medium leading-tight ${
                                e === r ? "text-white" : "text-gray-700"
                              }`,
                              children: i.title,
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  r
                )
              ),
            }),
            f.jsx(Ps, {
              mode: "wait",
              children:
                e &&
                f.jsxs(M.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                  className: "relative bg-white rounded-2xl p-8 shadow-xl",
                  children: [
                    f.jsx("button", {
                      onClick: () => t(null),
                      className:
                        "absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100",
                      children: f.jsx(cg, {
                        className: "w-5 h-5 text-gray-500",
                      }),
                    }),
                    f.jsx("h3", {
                      className: "text-2xl font-bold mb-6 text-blue-600",
                      children: _o[e].title,
                    }),
                    f.jsx("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                      children: _o[e].skills.map((r, i) =>
                        f.jsxs(
                          M.div,
                          {
                            initial: { opacity: 0, scale: 0.9 },
                            animate: {
                              opacity: 1,
                              scale: 1,
                              transition: { delay: i * 0.05 },
                            },
                            className: `p-4 rounded-xl border-2 ${
                              r.level === "Expert"
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200 bg-gray-50"
                            }`,
                            children: [
                              f.jsxs("div", {
                                className:
                                  "flex justify-between items-center mb-2",
                                children: [
                                  f.jsx("span", {
                                    className: "font-medium",
                                    children: r.name,
                                  }),
                                  f.jsx("span", {
                                    className: `text-xs px-3 py-1 rounded-full ${
                                      r.level === "Expert"
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-200 text-gray-700"
                                    }`,
                                    children: r.level,
                                  }),
                                ],
                              }),
                              f.jsx(M.div, {
                                className:
                                  "h-1 bg-gray-200 rounded-full overflow-hidden",
                                initial: { width: 0 },
                                animate: { width: "100%" },
                                children: f.jsx(M.div, {
                                  className: `h-full ${
                                    r.level === "Expert"
                                      ? "bg-blue-500"
                                      : "bg-gray-400"
                                  }`,
                                  initial: { width: "0%" },
                                  animate: {
                                    width: r.level === "Expert" ? "90%" : "75%",
                                    transition: {
                                      duration: 1,
                                      ease: "easeOut",
                                    },
                                  },
                                }),
                              }),
                            ],
                          },
                          r.name
                        )
                      ),
                    }),
                  ],
                }),
            }),
          ],
        }),
      }),
    });
  },
  xS = [
    {
      company: "LexisNexis",
      role: "Senior Software Engineer",
      period: "May 2023 - Present",
      achievements: [
        {
          area: "Full Stack Development",
          description:
            "Engineered and architected comprehensive full-stack applications utilizing advanced technology stacks. Developed robust backend services with C# and .NET while implementing efficient microservices through Node.js. Created intuitive frontend interfaces using modern JavaScript frameworks, enhancing overall user engagement and system reliability.",
        },
        {
          area: "API Architecture",
          description:
            "Designed and implemented sophisticated GraphQL schema architectures, revolutionizing data querying efficiency. Created optimized resolvers that eliminated traditional REST API limitations while implementing strategic caching patterns for enhanced performance and reduced data transfer overhead.",
        },
        {
          area: "Platform Migration",
          description:
            "Orchestrated complex migration of enterprise Angular applications from version 12 to 15, including comprehensive update of Material components. Maintained system stability throughout the transition while implementing new framework features and ensuring backward compatibility.",
        },
        {
          area: "Frontend Innovation",
          description:
            "Developed responsive and performant frontend interfaces using Angular's advanced features, resulting in significantly improved user experience. Implemented modern design patterns and component architecture that enhanced application maintainability and scalability.",
        },
        {
          area: "CSS Architecture",
          description:
            "Established scalable CSS architecture implementing BEM methodology alongside SASS preprocessing. Created comprehensive styling framework that significantly improved code maintainability and accelerated development through enhanced component reusability.",
        },
        {
          area: "Code Quality",
          description:
            "Implemented rigorous code review processes and established comprehensive quality gates. Enforced coding standards and security protocols that notably improved overall system reliability and reduced technical debt accumulation.",
        },
        {
          area: "Performance Optimization",
          description:
            "Architected advanced caching solutions using Redis, implementing sophisticated data retrieval patterns and cache invalidation strategies. Optimized application responsiveness through strategic cache placement and efficient memory utilization techniques.",
        },
        {
          area: "DevOps Automation",
          description:
            "Engineered robust CI/CD pipelines in Azure DevOps, incorporating automated testing and security scanning. Established comprehensive deployment strategies that streamlined software delivery while maintaining system reliability.",
        },
        {
          area: "Testing Strategy",
          description:
            "Developed extensive testing frameworks utilizing NUnit and xUnit, implementing comprehensive unit and integration tests. Created automated test suites that significantly improved code reliability and reduced regression issues.",
        },
        {
          area: "Cloud Integration",
          description:
            "Orchestrated application containerization using Azure services, implementing efficient microservices architecture. Optimized resource allocation and established robust deployment patterns through container orchestration.",
        },
        {
          area: "Team Leadership",
          description:
            "Mentored junior developers through knowledge-sharing sessions focused on emerging technologies and architectural best practices. Fostered a culture of continuous learning and technical excellence within the development team.",
        },
        {
          area: "Agile Development",
          description:
            "Executed development tasks within Agile framework using Azure DevOps for sprint management and workflow tracking. Participated in sprint cycles with daily stand-ups, maintaining project velocity through systematic backlog grooming and sprint planning sessions.",
        },
      ],
    },
    {
      company: "Motorola Solutions",
      role: "Software Engineer and Cloud Services Co-Op",
      period: "May 2022 - Dec 2022",
      achievements: [
        {
          area: "Architecture Design",
          description:
            "Engineered sophisticated applications implementing advanced architectural patterns including MVC and MVVM using C# and Angular. Created maintainable solutions with emphasis on scalability and system performance optimization.",
        },
        {
          area: "API Development",
          description:
            "Developed comprehensive REST APIs using .NET Core, incorporating extensive test coverage and following industry best practices. Implemented robust error handling mechanisms and established proper API versioning strategies.",
        },
        {
          area: "Cloud Integration",
          description:
            "Managed deployment workflows through Azure cloud services while maintaining code quality standards. Implemented efficient version control strategies using Git, ensuring smooth collaboration and code management.",
        },
        {
          area: "Agile Implementation",
          description:
            "Actively contributed to Agile workflows using the LeSS (Large-Scale Scrum) framework, participating in cross-team coordination and sprint ceremonies. Enhanced team collaboration through effective daily stand-ups and sprint planning sessions, while providing valuable insights during retrospectives for process improvement.",
        },
      ],
    },
    {
      company: "Tata Consultancy Services",
      role: "Full Stack Developer",
      period: "Dec 2015 - Aug 2021",
      achievements: [
        {
          area: "Enterprise Development",
          description:
            "Led development initiatives for Dow Chemicals, creating scalable REST APIs using Entity Framework and .NET Core. Implemented comprehensive data access patterns that significantly improved system efficiency and reliability.",
        },
        {
          area: "System Architecture",
          description:
            "Implemented advanced dependency injection patterns that optimized application modularity and testability. Established architectural patterns that enhanced system maintainability and scalability.",
        },
        {
          area: "Integration Engineering",
          description:
            "Orchestrated SAP system integration through custom-built APIs, implementing robust error handling and monitoring systems. Ensured seamless data flow while maintaining system integrity and performance.",
        },
        {
          area: "Frontend Development",
          description:
            "Created dynamic user interfaces using Angular and Bootstrap, implementing responsive design patterns and optimized performance through lazy loading strategies. Enhanced user engagement through intuitive interface design and efficient state management.",
        },
        {
          area: "Performance Management",
          description:
            "Maintained and optimized high-traffic applications supporting 17,000+ active users. Implemented proactive monitoring solutions and established efficient support protocols for system reliability.",
        },
        {
          area: "Agile Practices",
          description:
            "Engaged in Agile development practices within a large-scale enterprise environment, collaborating across multiple time zones and teams. Participated in sprint ceremonies including planning, daily stand-ups, and retrospectives, while maintaining transparent communication through effective story pointing and backlog grooming sessions.",
        },
      ],
    },
    {
      company: "Larsen & Toubro Infotech",
      role: "Software Developer",
      period: "July 2013 - Dec 2015",
      achievements: [
        {
          area: "Industry Solutions",
          description:
            "Developed mission-critical applications for the Oil and Gas industry utilizing comprehensive .NET technology stack. Implemented robust solutions handling complex business logic and data processing requirements.",
        },
        {
          area: "Quality Assurance",
          description:
            "Established comprehensive testing strategies using xUnit framework, ensuring robust code quality and system reliability. Implemented automated testing workflows that enhanced software quality assurance processes.",
        },
        {
          area: "System Maintenance",
          description:
            "Managed high-availability applications supporting 5,000+ active users, implementing monitoring systems and establishing efficient incident response protocols. Provided continuous support for business-critical operations.",
        },
        {
          area: "Agile Fundamentals",
          description:
            "Collaborated in Agile project delivery focusing on iterative development and continuous feedback loops. Contributed to sprint planning sessions and daily stand-ups, while participating in sprint retrospectives to identify areas for improvement and team efficiency enhancement.",
        },
      ],
    },
  ],
  wS = () => {
    const e = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      },
      t = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
    return f.jsx("section", {
      id: "experience",
      className: "py-24 bg-[#F8FAFC] overflow-hidden",
      children: f.jsx("div", {
        className: "container mx-auto px-4 max-w-6xl",
        children: f.jsxs(M.div, {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0 },
          variants: e,
          children: [
            f.jsxs(M.div, {
              className: "text-center mb-16",
              variants: t,
              children: [
                f.jsx("h2", {
                  className:
                    "text-4xl md:text-5xl font-bold mb-4 text-[#1A73E8]",
                  children: "Professional Journey",
                }),
                f.jsx("div", {
                  className: "w-24 h-1 bg-[#1A73E8] mx-auto rounded-full mb-4",
                }),
                f.jsx("p", {
                  className: "text-gray-600 max-w-2xl mx-auto",
                  children:
                    "Building innovative solutions and driving technological excellence across different domains",
                }),
              ],
            }),
            f.jsx("div", {
              className: "space-y-12",
              children: xS.map((n) =>
                f.jsxs(
                  M.div,
                  {
                    className: "relative bg-white rounded-xl shadow-lg p-8",
                    variants: t,
                    children: [
                      f.jsxs("div", {
                        className:
                          "flex items-center gap-4 mb-6 pb-6 border-b border-gray-100",
                        children: [
                          f.jsx("div", {
                            className:
                              "p-3 bg-blue-50 rounded-lg text-[#1A73E8]",
                            children: f.jsx(rg, { className: "w-6 h-6" }),
                          }),
                          f.jsxs("div", {
                            children: [
                              f.jsx("h3", {
                                className: "text-2xl font-bold text-[#1A73E8]",
                                children: n.company,
                              }),
                              f.jsx("p", {
                                className: "text-xl text-gray-700 mt-1",
                                children: n.role,
                              }),
                              f.jsx("p", {
                                className: "text-gray-500",
                                children: n.period,
                              }),
                            ],
                          }),
                        ],
                      }),
                      f.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: n.achievements.map((r, i) =>
                          f.jsxs(
                            M.div,
                            {
                              className:
                                "p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors",
                              variants: t,
                              children: [
                                f.jsx("h4", {
                                  className:
                                    "text-lg font-semibold text-gray-800 mb-3",
                                  children: r.area,
                                }),
                                f.jsx("p", {
                                  className: "text-gray-600 leading-relaxed",
                                  children: r.description
                                    .split(" ")
                                    .map((s, o) => {
                                      const a = SS(s);
                                      return f.jsxs(
                                        "span",
                                        {
                                          className: a
                                            ? "text-[#1A73E8] font-medium"
                                            : "",
                                          children: [s, " "],
                                        },
                                        o
                                      );
                                    }),
                                }),
                              ],
                            },
                            i
                          )
                        ),
                      }),
                    ],
                  },
                  n.company
                )
              ),
            }),
          ],
        }),
      }),
    });
  },
  SS = (e) => {
    const t = [
        "C#",
        "React",
        "Angular",
        "Angular's",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "AWS",
        "Azure",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "GraphQL",
        "REST",
        "API",
        "microservices",
        "SQL",
        "MongoDB",
        "DevOps",
        "Python",
        "Java",
        "NET",
        "node.js",
        "architecture",
        "frontend",
        "backend",
        "full-stack",
        "SASS",
        "Material",
        "BEM",
        "scalable",
        "optimized",
        "performance",
        "automation",
        "deployment",
        "integration",
        "testing",
        "development",
        "5,000",
        "active",
        "users",
        "automated",
        "leadership",
        "strategy",
        "innovation",
        "collaboration",
        "implementation",
        "analysis",
        "management",
        "enterprise",
        "active",
        "users",
        "caching",
      ].map((r) => r.toLowerCase()),
      n = e.toLowerCase().replace(/[.,;()]/g, "");
    return t.includes(n);
  },
  kS = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  },
  lf = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
  PS = () =>
    f.jsx("section", {
      id: "contact",
      className: "py-24 bg-[#F8FAFC] overflow-hidden",
      children: f.jsx("div", {
        className: "container mx-auto px-4",
        children: f.jsxs(M.div, {
          variants: kS,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0 },
          className: "max-w-3xl mx-auto",
          children: [
            f.jsxs(M.div, {
              className: "text-center mb-16 transform perspective-[1000px]",
              variants: lf,
              whileHover: { rotateX: 10, scale: 1.05 },
              transition: { type: "spring", stiffness: 300 },
              children: [
                f.jsx("h2", {
                  className:
                    "text-4xl md:text-5xl font-bold mb-4 text-[#1A73E8]",
                  children: "Get in Touch",
                }),
                f.jsx("div", {
                  className: "w-24 h-1 bg-[#1A73E8] mx-auto rounded-full",
                }),
              ],
            }),
            f.jsx(M.div, {
              variants: lf,
              className: `bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl 
                     transition-all duration-300 transform perspective-[1000px]`,
              whileHover: {
                scale: 1.02,
                rotateX: 5,
                rotateY: 2,
                translateZ: 20,
              },
              transition: { type: "spring", stiffness: 300 },
              children: f.jsxs("div", {
                className: "space-y-8",
                children: [
                  f.jsx(Fo, {
                    icon: f.jsx(lg, { className: "w-5 h-5" }),
                    title: "Email",
                    content: "mamaniya.jinals@gmail.com",
                    href: "mailto:mamaniya.jinals@gmail.com",
                  }),
                  f.jsx(Fo, {
                    icon: f.jsx(ag, { className: "w-5 h-5" }),
                    title: "LinkedIn",
                    content: "Connect with me",
                    href: "http://www.linkedin.com/in/jinal-mamaniya",
                  }),
                  f.jsx(Fo, {
                    icon: f.jsx(ug, { className: "w-5 h-5" }),
                    title: "Location",
                    content: "Seattle, WA",
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    }),
  Fo = ({ icon: e, title: t, content: n, href: r }) =>
    f.jsxs("div", {
      className: "flex items-center gap-4",
      children: [
        f.jsx("div", {
          className: "p-2 bg-blue-50 rounded-lg text-[#1A73E8]",
          children: e,
        }),
        f.jsxs("div", {
          children: [
            f.jsx("h4", {
              className: "font-medium text-gray-900",
              children: t,
            }),
            r
              ? f.jsx("a", {
                  href: r,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "text-gray-600 hover:text-[#1A73E8] transition-colors",
                  children: n,
                })
              : f.jsx("p", { className: "text-gray-600", children: n }),
          ],
        }),
      ],
    }),
  ES = () => {
    const e = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      },
      t = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
    return f.jsx("footer", {
      className: "bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16",
      children: f.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          f.jsxs(M.div, {
            variants: e,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0 },
            className: "flex flex-col md:flex-row justify-between items-center",
            children: [
              f.jsxs(M.div, {
                variants: t,
                className: "mb-8 md:mb-0 text-center md:text-left",
                children: [
                  f.jsx("h3", {
                    className: "text-2xl font-bold mb-3 gradient-text",
                    children: "Jinal Mamaniya",
                  }),
                  f.jsx("p", {
                    className: "text-gray-400 text-lg",
                    children: "Senior Software Engineer",
                  }),
                  f.jsx("p", {
                    className: "text-gray-500 mt-2 text-sm",
                    children: "Building modern web solutions",
                  }),
                ],
              }),
              f.jsx(M.div, {
                variants: t,
                className: "flex flex-col items-center md:items-end space-y-4",
                children: f.jsxs("div", {
                  className: "flex space-x-4",
                  children: [
                    f.jsx(uf, {
                      href: "http://www.linkedin.com/in/jinal-mamaniya",
                      icon: f.jsx(ag, { size: 22 }),
                      label: "LinkedIn",
                    }),
                    f.jsx(uf, {
                      href: "mailto:mamaniya.jinals@gmail.com",
                      icon: f.jsx(lg, { size: 22 }),
                      label: "Email",
                    }),
                  ],
                }),
              }),
            ],
          }),
          f.jsx(M.div, {
            variants: t,
            className: "mt-12 pt-8 border-t border-gray-700/50 text-center",
            children: f.jsxs("div", {
              className:
                "flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-400",
              children: [
                f.jsxs("p", {
                  children: [
                    "© ",
                    new Date().getFullYear(),
                    " Jinal Mamaniya. All rights reserved.",
                  ],
                }),
                f.jsxs("div", {
                  className: "flex space-x-8",
                  children: [
                    f.jsx("a", {
                      href: "#privacy",
                      className: "hover:text-white transition-colors",
                      children: "Privacy",
                    }),
                    f.jsx("a", {
                      href: "#terms",
                      className: "hover:text-white transition-colors",
                      children: "Terms",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  uf = ({ href: e, icon: t, label: n }) =>
    f.jsx(M.a, {
      href: e,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": n,
      className: `p-2 rounded-full bg-gray-800 hover:bg-primary-600 text-gray-400 hover:text-white
               transition-all duration-300 shadow-lg hover:shadow-primary-600/20`,
      whileHover: { scale: 1.1, y: -2 },
      whileTap: { scale: 0.95 },
      children: t,
    }),
  CS = {
    degrees: [
      {
        degree: "Master of Science in Information Systems",
        institution: "Northeastern University",
        period: "2023 - 2024",
        location: "Boston, United States",
        gpa: "3.7/4.0",
        courses: [
          {
            name: "Web Design and User Experience Engineering",
            highlights: [
              "Frontend Technologies: HTML5, CSS3, JavaScript ES6+, React.js, Angular",
              "Responsive Design: Bootstrap 5, Tailwind CSS, Mobile-first approach",
              "Backend Integration: Node.js, Express.js, MongoDB",
              "Version Control: Git, GitHub collaborative workflows",
              "UI/UX Best Practices: Wireframing, Prototyping, User Testing",
            ],
          },
          {
            name: "Data Management and Database Design",
            highlights: [
              "Database Design: Schema modeling, ERD, Normalization techniques",
              "SQL: Advanced queries, stored procedures, performance optimization",
              "NoSQL: MongoDB schema design, Redis caching strategies",
              "Big Data: Hadoop ecosystem, data lakes architecture",
            ],
          },
          {
            name: "Program Structure & Algorithms",
            highlights: [
              "Advanced Data Structures: Trees, Graphs, Hash Tables implementation",
              "Algorithm Analysis: Time/Space complexity optimization",
              "Dynamic Programming: Memoization, Tabulation techniques",
              "Problem Solving: LeetCode challenges, competitive programming",
              "System Design: Scalable architecture patterns",
            ],
          },
          {
            name: "Web Development Tools & Methods",
            highlights: [
              "Modern Frameworks: React ecosystem, Angular architecture",
              "DevOps: Docker containerization, Kubernetes orchestration",
              "CI/CD: Jenkins pipelines, GitHub Actions automation",
              "Testing: Jest, React Testing Library, E2E testing",
              "Cloud Services: AWS deployment, Azure services",
            ],
          },
        ],
      },
      {
        degree: "Bachelor in Engineering in Information Technology",
        institution:
          "Bhartiya Vidya Bhavans Sardar Patel Institute of Technology Munshi Nagar Andheri Mumbai",
        period: "2010 - 2013",
        location: "Mumbai, India",
        gpa: "3.9/4.0",
        courses: [
          {
            name: "Object Oriented Programming",
            highlights: [
              "Java Core: Collections framework, multithreading, IO streams",
              "Design Patterns: Creational, Structural, Behavioral patterns",
              "SOLID Principles: practical implementation in projects",
              "Framework Experience: Spring Boot applications",
              "Testing: JUnit, Mockito for unit testing",
            ],
          },
          {
            name: "Data Structures and Algorithms",
            highlights: [
              "Core Data Structures: Arrays, LinkedLists, Trees implementation",
              "Sorting & Searching: Comparative analysis of algorithms",
              "Graph Algorithms: Shortest path, MST implementations",
              "Problem-Solving: Algorithmic thinking approaches",
              "Optimization Techniques: Space-time trade-offs",
            ],
          },
          {
            name: "Database Management Systems",
            highlights: [
              "SQL Mastery: Complex queries, joins, subqueries",
              "Database Design: Normalization, indexing strategies",
              "Transaction Management: ACID properties, concurrency",
              "Performance Tuning: Query optimization, indexing",
              "NoSQL Introduction: Document stores, key-value pairs",
            ],
          },
          {
            name: "Operating Systems",
            highlights: [
              "Process Management: Scheduling algorithms, synchronization",
              "Memory Management: Paging, segmentation techniques",
              "File Systems: Implementation, security aspects",
              "Concurrency: Thread management, deadlock prevention",
            ],
          },
        ],
      },
    ],
  },
  TS = () => {
    const e = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
      },
      t = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
    return f.jsx("section", {
      className: "py-24 overflow-hidden",
      children: f.jsx("div", {
        className: "container mx-auto px-4",
        children: f.jsxs(M.div, {
          variants: e,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0 },
          children: [
            f.jsxs(M.div, {
              className: "text-center mb-16",
              variants: t,
              children: [
                f.jsx("div", {
                  className: "inline-block mb-4",
                  children: f.jsx(M.div, {
                    className: "p-4 bg-blue-100 rounded-full",
                    whileHover: { rotate: 360, scale: 1.1 },
                    transition: { duration: 0.5 },
                    children: f.jsx(nf, {
                      className: "w-10 h-10 text-blue-600",
                    }),
                  }),
                }),
                f.jsx("h2", {
                  className:
                    "text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent",
                  children: "Education Journey",
                }),
                f.jsx("div", {
                  className:
                    "w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full",
                }),
              ],
            }),
            f.jsx("div", {
              className: "max-w-5xl mx-auto space-y-12",
              children: CS.degrees.map((n) =>
                f.jsx(
                  M.div,
                  {
                    className: `bg-white rounded-2xl shadow-xl hover:shadow-2xl 
                         transition-all duration-300 border border-blue-100`,
                    variants: t,
                    children: f.jsxs("div", {
                      className: "p-8",
                      children: [
                        f.jsxs("div", {
                          className:
                            "flex flex-col md:flex-row md:items-start gap-6 mb-8",
                          children: [
                            f.jsx(M.div, {
                              className:
                                "p-4 bg-blue-100 rounded-xl text-blue-600",
                              whileHover: { scale: 1.1 },
                              children: f.jsx(nf, { className: "w-8 h-8" }),
                            }),
                            f.jsxs("div", {
                              className: "flex-1",
                              children: [
                                f.jsx("h3", {
                                  className:
                                    "text-2xl font-bold text-gray-900 mb-3",
                                  children: n.degree,
                                }),
                                f.jsx("p", {
                                  className:
                                    "text-xl text-blue-600 font-semibold mb-3",
                                  children: n.institution,
                                }),
                                f.jsxs("div", {
                                  className:
                                    "flex flex-wrap gap-4 text-gray-600",
                                  children: [
                                    f.jsxs("span", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        f.jsx(ig, {
                                          className: "w-4 h-4 text-blue-600",
                                        }),
                                        n.period,
                                      ],
                                    }),
                                    f.jsxs("span", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        f.jsx(ug, {
                                          className: "w-4 h-4 text-blue-600",
                                        }),
                                        n.location,
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            n.gpa &&
                              f.jsxs(M.div, {
                                className:
                                  "px-4 py-2 bg-blue-100 rounded-lg text-blue-600 font-semibold",
                                whileHover: { scale: 1.05 },
                                children: ["GPA: ", n.gpa],
                              }),
                          ],
                        }),
                        n.courses &&
                          f.jsxs("div", {
                            className: "mb-8",
                            children: [
                              f.jsx("h4", {
                                className:
                                  "text-xl font-semibold mb-4 text-gray-900",
                                children: "Key Courses",
                              }),
                              f.jsx("div", {
                                className: "grid md:grid-cols-2 gap-4",
                                children: n.courses.map((r, i) =>
                                  f.jsxs(
                                    M.div,
                                    {
                                      className:
                                        "p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors",
                                      whileHover: { scale: 1.02 },
                                      children: [
                                        f.jsxs("div", {
                                          className:
                                            "flex items-start gap-3 mb-2",
                                          children: [
                                            f.jsx(U2, {
                                              className:
                                                "w-5 h-5 text-blue-600 mt-1",
                                            }),
                                            f.jsx("h5", {
                                              className:
                                                "font-semibold text-gray-900",
                                              children: r.name,
                                            }),
                                          ],
                                        }),
                                        f.jsx("ul", {
                                          className: "ml-8 space-y-1",
                                          children: r.highlights.map((s, o) =>
                                            f.jsx(
                                              "li",
                                              {
                                                className:
                                                  "text-gray-600 text-sm list-disc",
                                                children: s,
                                              },
                                              o
                                            )
                                          ),
                                        }),
                                      ],
                                    },
                                    i
                                  )
                                ),
                              }),
                            ],
                          }),
                      ],
                    }),
                  },
                  n.degree
                )
              ),
            }),
          ],
        }),
      }),
    });
  },
  St = {
    certifications: [
      {
        name: "Microsoft Certified: Azure Fundamentals",
        issuer: "Microsoft",
        date: "2020",
        description:
          "Fundamental understanding of cloud concepts and Azure services",
        credentialUrl:
          "https://www.credly.com/badges/46796716-8095-4304-b5eb-c806a072655d",
        achievements: [
          "Comprehensive understanding of Azure's cloud architecture components and service delivery models including IaaS, PaaS, and SaaS, enabling effective cloud solution design and implementation.",
          "Advanced knowledge of Azure's core infrastructure services including virtual machines, containers, storage solutions, and networking capabilities for building robust cloud environments.",
          "Expertise in Azure security features and compliance standards, including identity management through Azure Active Directory and implementation of data protection protocols.",
          "Proficient in Azure cost management and optimization strategies, with deep understanding of subscription models and service level agreements (SLAs).",
          "Demonstrated ability to integrate Azure database services and analytics solutions, ensuring optimal data management and insights extraction.",
        ],
      },
      {
        name: "Professional Scrum Master I",
        issuer: "Scrum.org",
        date: "2020",
        description:
          "Professional certification in Scrum framework and Agile methodologies",
        credentialUrl: "https://www.scrum.org/certificates/556405",
        achievements: [
          "Mastery of Scrum framework fundamentals including roles, events, and artifacts, with proven ability to implement and maintain Scrum practices in complex project environments.",
          "Advanced expertise in facilitating Scrum events and ceremonies, fostering team collaboration, and ensuring effective sprint execution and delivery.",
          "Demonstrated capability in servant leadership, including coaching teams, removing impediments, and promoting self-organization principles within development teams.",
          "Strong understanding of empirical process control and value-based prioritization, enabling data-driven decision making and continuous improvement in agile environments.",
          "Proven ability to scale Scrum practices across organizations, manage organizational change, and address common implementation challenges while maintaining agile principles.",
          "Excellence in measuring and demonstrating team progress through effective metrics, while managing technical debt and maintaining high-quality standards.",
        ],
      },
    ],
  },
  jS = () => {
    const [e, t] = T.useState(0);
    return f.jsx("section", {
      id: "certifications",
      className: "py-24 bg-[#F8FAFC]",
      children: f.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          f.jsxs(M.div, {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            className: "text-center mb-16",
            children: [
              f.jsx("h2", {
                className: "text-4xl md:text-5xl font-bold mb-4 text-[#1A73E8]",
                children: "Professional Certifications",
              }),
              f.jsx("div", {
                className: "w-24 h-1 bg-[#1A73E8] mx-auto rounded-full mb-4",
              }),
            ],
          }),
          f.jsxs("div", {
            className:
              "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8",
            children: [
              f.jsx("div", {
                className: "lg:col-span-1",
                children: f.jsx("div", {
                  className: "bg-white rounded-xl shadow-lg p-4",
                  children: St.certifications.map((n, r) =>
                    f.jsx(
                      M.button,
                      {
                        onClick: () => t(r),
                        className: `w-full text-left p-4 rounded-lg mb-2 last:mb-0 transition-all
                             ${
                               e === r
                                 ? "bg-[#1A73E8] text-white shadow-lg"
                                 : "hover:bg-gray-50"
                             }`,
                        whileHover: { x: e === r ? 0 : 5 },
                        children: f.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            f.jsxs("div", {
                              className: "flex items-center gap-3",
                              children: [
                                f.jsx("div", {
                                  className: `p-2 rounded-lg ${
                                    e === r ? "bg-white/20" : "bg-blue-50"
                                  }`,
                                  children: f.jsx(rf, {
                                    className: `w-5 h-5 ${
                                      e === r ? "text-white" : "text-[#1A73E8]"
                                    }`,
                                  }),
                                }),
                                f.jsx("span", {
                                  className: "font-medium",
                                  children: n.name,
                                }),
                              ],
                            }),
                            f.jsx($2, {
                              className: `w-5 h-5 transition-transform ${
                                e === r ? "rotate-90" : ""
                              }`,
                            }),
                          ],
                        }),
                      },
                      n.name
                    )
                  ),
                }),
              }),
              f.jsx("div", {
                className: "lg:col-span-2",
                children: f.jsx(Ps, {
                  mode: "wait",
                  children: f.jsxs(
                    M.div,
                    {
                      initial: { opacity: 0, x: 20 },
                      animate: { opacity: 1, x: 0 },
                      exit: { opacity: 0, x: -20 },
                      className:
                        "bg-white rounded-xl shadow-lg overflow-hidden",
                      children: [
                        f.jsx("div", {
                          className:
                            "p-8 bg-gradient-to-r from-[#1A73E8]/5 to-transparent border-b",
                          children: f.jsxs("div", {
                            className: "flex items-start gap-6",
                            children: [
                              f.jsx(M.div, {
                                className: "p-4 bg-white rounded-xl shadow-lg",
                                whileHover: { rotate: 360 },
                                transition: { duration: 0.7 },
                                children: f.jsx(ng, {
                                  className: "w-8 h-8 text-[#1A73E8]",
                                }),
                              }),
                              f.jsxs("div", {
                                children: [
                                  f.jsx("h3", {
                                    className:
                                      "text-2xl font-bold text-gray-900 mb-3",
                                    children: St.certifications[e].name,
                                  }),
                                  f.jsxs("div", {
                                    className: "flex flex-wrap gap-4",
                                    children: [
                                      f.jsxs("div", {
                                        className:
                                          "flex items-center gap-2 text-gray-600",
                                        children: [
                                          f.jsx(H2, { className: "w-4 h-4" }),
                                          f.jsx("span", {
                                            children:
                                              St.certifications[e].issuer,
                                          }),
                                        ],
                                      }),
                                      f.jsxs("div", {
                                        className:
                                          "flex items-center gap-2 text-gray-600",
                                        children: [
                                          f.jsx(ig, { className: "w-4 h-4" }),
                                          f.jsx("span", {
                                            children: St.certifications[e].date,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        f.jsxs("div", {
                          className: "p-8",
                          children: [
                            f.jsx("p", {
                              className: "text-gray-600 mb-6",
                              children: St.certifications[e].description,
                            }),
                            f.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                f.jsx("h4", {
                                  className:
                                    "text-lg font-semibold text-gray-900",
                                  children: "Key Achievements",
                                }),
                                f.jsx("div", {
                                  className: "grid gap-4",
                                  children: St.certifications[
                                    e
                                  ].achievements.map((n, r) =>
                                    f.jsxs(
                                      M.div,
                                      {
                                        initial: { opacity: 0, x: -20 },
                                        animate: { opacity: 1, x: 0 },
                                        transition: { delay: r * 0.1 },
                                        className:
                                          "flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50",
                                        children: [
                                          f.jsx("div", {
                                            className:
                                              "flex-shrink-0 p-1 bg-blue-50 rounded-full",
                                            children: f.jsx(rf, {
                                              className:
                                                "w-4 h-4 text-[#1A73E8]",
                                            }),
                                          }),
                                          f.jsx("p", {
                                            className: "text-gray-600",
                                            children: n,
                                          }),
                                        ],
                                      },
                                      r
                                    )
                                  ),
                                }),
                              ],
                            }),
                            St.certifications[e].credentialUrl &&
                              f.jsxs(M.a, {
                                href: St.certifications[e].credentialUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: `inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#1A73E8] 
                               text-white rounded-lg hover:bg-blue-600 transition-colors`,
                                whileHover: { scale: 1.05 },
                                whileTap: { scale: 0.95 },
                                children: [
                                  "Verify Credential",
                                  f.jsx(K2, { className: "w-4 h-4" }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    },
                    e
                  ),
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  cf = [
    {
      id: "1",
      name: "Vishal Chawla",
      role: "Director of Enterprise Collaboration and Web Services/Applications",
      relationship: "Was Jinal's mentor",
      date: "April 1, 2024",
      text: "I have had the pleasure of working closely with Jinal Mamaniya during her tenure as a Graduate Teaching Assistant at Northeastern University, where I served as the course instructor for Web Design/User Experience. Jinal demonstrated dedication and proficiency in her knowledge and role performing excellent as a TA for the course.One of Jinal's standout qualities is her flexibility and adaptability in handling various tasks and challenges. She approached each responsibility with a positive attitude and a willingness to learn, adapt, and overcome obstacles as they arose. Her ability to navigate different situations with ease greatly contributed to the effectiveness of our teaching team.Overall, Her hard work, flexibility, and adaptability make her an invaluable asset to any team or organization. I am confident that she will continue to excel and make meaningful contributions wherever she goes.",
    },
    {
      id: "2",
      name: "Sneha Altekar",
      role: "Senior Software Engineer at Morningstar",
      relationship: "Worked together on the same team",
      date: "January 15, 2022",
      text: "Jinal is a very experienced professional and is able to promote personal and professional improvements among colleagues and partners. I had the pleasure to work with her for more than 5 years on a number of different projects and was impressed with the depth of knowledge and passion she possesses. A driven, ambitious individual with an infectious enthusiasm for any project. I highly recommend working and connecting with Jinal.",
    },
    {
      id: "3",
      name: "Akshay Trasi",
      role: "Program Manager, Application Modernization & Cloud Migration",
      relationship: "Was senior to Jinal but didn't manage directly",
      date: "August 25, 2021",
      text: "Jinal is an asset to any IT team. She has the ability to understand business priorities and requirements. She is self-motivated to upskill in technical areas that are needed for the project. She is very persevering when she encounters an issue that is not easy to solve. I was a technical manager for a project in 2018-'19, and Jinal was involved as an outside technical SME for one of the applications in-scope. I found her to be open and willing to go beyond what was requested, as she provided guidance in areas that I could not have foreseen. I would definitely recommend Jinal, and wish her the best!",
    },
    {
      id: "4",
      name: "Akshay M S",
      role: "Senior Software Development Engineer",
      relationship: "Worked together on the same team",
      date: "August 24, 2021",
      text: "I was part of a team that supervised her and a team of programmers that worked for us at Dow. From the 2 years I've shared with her on multiple meetings, projects and so on, I know and can assure she is very hard working, passionate and skilled programmer. When she focuses on a task, she won't stop until she finds a way to solve it. Every concern or issue we had with the software, she could solve it in a very fast and clever way. Besides that, she is great to work with, very kind and enjoys learning new things related to her skills to improve her knowledge every day. I'd totally recommend her on any team, she will deliver!!",
    },
    {
      id: "5",
      name: "Franco Ferrarello",
      role: "Sr. Site logistics Technologist",
      relationship: "Worked together on the same team",
      date: "August 20, 2021",
      text: "I was part of a team that supervised her and a team of programmers that worked for us at Dow. From the 2 years I've shared with her on multiple meetings, projects and so on, I know and can assure she is very hard working, passionate and skilled programmer. When she focuses on a task, she won't stop until she finds a way to solve it. Every concern or issue we had with the software, she could solve it in a very fast and clever way. Besides that, she is great to work with, very kind and enjoys learning new things related to her skills to improve her knowledge every day. I'd totally recommend her on any team, she will deliver!!",
    },
    {
      id: "6",
      name: "Kumar Subbiah Shunmugathai",
      role: "Senior Customer Success Architect",
      relationship: "Was Jinal's mentor",
      date: "August 20, 2021",
      text: "Jinal is dedicated, tech savvy software profession who always thrive to deliver the best possible solution. I always amazed of her perseverance to achieve her goals both personally and professionally. Jinal and I worked together on an application re-architecture project where we integrated 10+ business application into one large enterprise application, where she significantly contributed in end to end development of a complete module. Her technical skill combined with business understanding for domains make her a valuable asset to the team. It has been a pleasure to work Jinal and definitely recommend her.",
    },
    {
      id: "7",
      name: "Christopher Mostello",
      role: "Experience Design Lead @ Avanade X",
      relationship: "Worked together on the same team",
      date: "August 20, 2021",
      text: "Very thorough and collaborative with design team.I had the pleasure of working with Jinal on a multigenerational web application, where she delivered as one of our developers, collaborating with me to bring our design to life. Jinal’s ability to represent technical feasibility, collaborate on the proposed design with myself and the business stakeholders, and successfully deliver feature enhancements showcases Jinal’s thoughtful developer talents from task to final product, ensuring we deliver the best possible user experience. Jinal’s also quite kind in words and approach, which made for enjoyable discussions and meetings together. I have no doubt that Jinal would be an amazing asset for any team she joins.",
    },
    {
      id: "8",
      name: "Deepak Salagare",
      role: "Delivery Partner @ Tata Consultancy Services",
      relationship: "Managed Jinal directly",
      date: "August 16, 2021",
      text: "Jinal is hard working professional who readily takes up responsibility and executes it successfully. She is go-getter, has excellent analytical and logical skills. She enjoys challenges and has performed well under pressure multiple times. She has good knack of what customer wants and ensures she delivers!!! She is self-motivated, posses positive attitude and an asset to any organization!!!",
    },
    {
      id: "9",
      name: "Marcie Kaiser",
      role: "Senior Developer - Digital Marketplace Center",
      relationship: "Worked together on the same team",
      date: "August 13, 2021",
      text: "I had the pleasure of working on a project with Jinal for a few months. During that time, I witnessed her skills in both front end and back end development. Jinal is hardworking, driven, helpful, and friendly. I have no doubt she would be a huge asset to any team she joins!",
    },
    {
      id: "10",
      name: "Jaikumar AT",
      role: "Technical Delivery Leader",
      relationship: "Managed Jinal directly",
      date: "August 13, 2021",
      text: "Jinal was fresher when she joined LnT back in October 2013 and started working on frontend and backend technologies like ASP.NET framework,HTML, CSS and Javascript.She takes up the challenge and always complete assigned work before the deadline.She is always eager to learn something new and as a fresher that is very good quality she pocess. I know that she had keep up that spirit till date.She is good asset and resource to any organization she joins in.I wish her All the best.",
    },
    {
      id: "11",
      name: "Umesh Mistry",
      role: "Technical Architect at Tata Consultancy Services",
      relationship: "Managed Jinal directly",
      date: "August 11, 2021",
      text: "I have worked with Jinal on couple of different projects, where she delivered excellent result through her dedication, technical expertise. She has really worked hard to deliver each of the project milestones in several challenging times, without compromising on the quality of deliverables.She managed the team of developers very well and provided them the required guidance. She played the vital role in earning the customer's trust on the project team.I wish her the best for all her future endeavors.",
    },
    {
      id: "12",
      name: "Ann Wongwal",
      role: "North America Digital Marketplace Center Leader",
      relationship: "Managed Jinal directly",
      date: "August 9, 2021",
      text: "Jinal is an excellent full stack developer. She is a hardworking and dedicated person who will go above and beyond to deliver on time with high standards. Jinal will be a valuable asset to any company!",
    },
    {
      id: "13",
      name: "Josh Sessink",
      role: "Front End Development Lead and Delivery Manager",
      relationship: "Managed Jinal directly",
      date: "August 9, 2021",
      text: "I worked closely with Jinal for roughly half a year on a large-scale enterprise project for a Fortune 500 company. The project was a very high visibility project navigating into spaces such as Predictive Intelligence and other areas of digital transformation, and the application the team built was the web interface for this. Jinal's contributions were on both the back and front ends of the application, as well as architectural decisions and guidance for low-level coding. Jinal is very versed in back end technologies and does great with delving into new libraries and frameworks on the front end, even during times of high pressure and intensity on the project. I was extremely pleased with how well the project launched, and was certainly in part due to Jinal's contributions. I would absolutely love working with Jinal again, given the chance.I wish you the best Jinal!",
    },
  ],
  AS = ({ recommendation: e }) =>
    f.jsx("div", {
      className: `bg-white rounded-lg p-6 shadow-soft hover:shadow-medium 
                  transition-all duration-300 min-w-[350px] max-w-[450px] mx-4
                  border border-primary-50 hover:border-primary-100 group`,
      children: f.jsxs("div", {
        className: "flex items-start gap-4",
        children: [
          f.jsx("div", {
            className: "flex-shrink-0",
            children: f.jsx(Z2, {
              className: "w-8 h-8 text-[#1A73E8] opacity-70",
            }),
          }),
          f.jsxs("div", {
            className: "flex-grow",
            children: [
              f.jsxs("p", {
                className: `text-neutral-850 mb-4 overflow-hidden 
                     transition-all duration-300 max-h-[80px] 
                     group-hover:max-h-[500px]`,
                children: [
                  f.jsx("span", { className: "text-[#1A73E8]", children: '"' }),
                  e.text,
                  f.jsx("span", { className: "text-[#1A73E8]", children: '"' }),
                ],
              }),
              f.jsx("div", {
                className: "flex items-center gap-4",
                children: f.jsxs("div", {
                  children: [
                    f.jsx("h4", {
                      className: "font-heading font-semibold text-neutral-850",
                      children: e.name,
                    }),
                    f.jsx("p", {
                      className: "text-sm text-neutral-850/80",
                      children: e.role,
                    }),
                    f.jsx("p", {
                      className: "text-sm text-neutral-850/60 mt-1",
                      children: e.relationship,
                    }),
                    f.jsx("p", {
                      className: "text-xs text-neutral-850/50 mt-1",
                      children: e.date,
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  df = ({ recommendations: e }) =>
    f.jsx("div", {
      className: "flex",
      children: e.map((t) => f.jsx(AS, { recommendation: t }, t.id)),
    }),
  NS = () => {
    const e = [...cf, ...cf];
    return f.jsx("section", {
      id: "recommendations",
      className: "py-20 bg-white overflow-hidden",
      children: f.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          f.jsxs(M.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.5 },
            className: "text-center mb-12",
            children: [
              f.jsx("h2", {
                className: "text-4xl md:text-5xl font-bold mb-4 text-[#1A73E8]",
                children: "Recommendations",
              }),
              f.jsx("p", {
                className: "text-neutral-850/70 max-w-2xl mx-auto",
                children: "What my colleagues say about working with me",
              }),
            ],
          }),
          f.jsxs("div", {
            className: "relative",
            children: [
              f.jsx("div", {
                className: `absolute left-0 top-0 bottom-0 w-20 
                          bg-gradient-to-r from-white to-transparent z-10`,
              }),
              f.jsx("div", {
                className: `absolute right-0 top-0 bottom-0 w-20 
                          bg-gradient-to-l from-white to-transparent z-10`,
              }),
              f.jsx("div", {
                className: "mb-8 overflow-hidden",
                children: f.jsx("div", {
                  className:
                    "animate-marquee hover:[animation-play-state:paused]",
                  children: f.jsx(df, { recommendations: e }),
                }),
              }),
              f.jsx("div", {
                className: "overflow-hidden",
                children: f.jsx("div", {
                  className:
                    "animate-marquee-reverse hover:[animation-play-state:paused]",
                  children: f.jsx(df, { recommendations: e.reverse() }),
                }),
              }),
            ],
          }),
        ],
      }),
    });
  };
function MS() {
  return f.jsxs("div", {
    className: "min-h-screen bg-gray-50",
    children: [
      f.jsx(oS, {}),
      f.jsxs("main", {
        children: [
          f.jsx(gS, {}),
          f.jsx(vS, {}),
          f.jsx(TS, {}),
          f.jsx(jS, {}),
          f.jsx(wS, {}),
          f.jsx(yS, {}),
          f.jsx(NS, {}),
          f.jsx(PS, {}),
        ],
      }),
      f.jsx(ES, {}),
    ],
  });
}
Ep(document.getElementById("root")).render(
  f.jsx(T.StrictMode, { children: f.jsx(MS, {}) })
);
