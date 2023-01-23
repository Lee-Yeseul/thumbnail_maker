function _p(A, e) {
  for (var t = 0; t < e.length; t++) {
    const r = e[t];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const n in r)
        if (n !== 'default' && !(n in A)) {
          const i = Object.getOwnPropertyDescriptor(r, n);
          i &&
            Object.defineProperty(
              A,
              n,
              i.get ? i : { enumerable: !0, get: () => r[n] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(A, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
  new MutationObserver((n) => {
    for (const i of n)
      if (i.type === 'childList')
        for (const o of i.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(n) {
    const i = {};
    return (
      n.integrity && (i.integrity = n.integrity),
      n.referrerpolicy && (i.referrerPolicy = n.referrerpolicy),
      n.crossorigin === 'use-credentials'
        ? (i.credentials = 'include')
        : n.crossorigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(n) {
    if (n.ep) return;
    n.ep = !0;
    const i = t(n);
    fetch(n.href, i);
  }
})();
function Pp(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, 'default')
    ? A.default
    : A;
}
var Mn = {},
  Vp = {
    get exports() {
      return Mn;
    },
    set exports(A) {
      Mn = A;
    },
  },
  ss = {},
  S = {},
  Gp = {
    get exports() {
      return S;
    },
    set exports(A) {
      S = A;
    },
  },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var si = Symbol.for('react.element'),
  bp = Symbol.for('react.portal'),
  Xp = Symbol.for('react.fragment'),
  Wp = Symbol.for('react.strict_mode'),
  Jp = Symbol.for('react.profiler'),
  zp = Symbol.for('react.provider'),
  Yp = Symbol.for('react.context'),
  $p = Symbol.for('react.forward_ref'),
  jp = Symbol.for('react.suspense'),
  Zp = Symbol.for('react.memo'),
  qp = Symbol.for('react.lazy'),
  Sc = Symbol.iterator;
function Aw(A) {
  return A === null || typeof A != 'object'
    ? null
    : ((A = (Sc && A[Sc]) || A['@@iterator']),
      typeof A == 'function' ? A : null);
}
var ld = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ud = Object.assign,
  cd = {};
function Wr(A, e, t) {
  (this.props = A),
    (this.context = e),
    (this.refs = cd),
    (this.updater = t || ld);
}
Wr.prototype.isReactComponent = {};
Wr.prototype.setState = function (A, e) {
  if (typeof A != 'object' && typeof A != 'function' && A != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, A, e, 'setState');
};
Wr.prototype.forceUpdate = function (A) {
  this.updater.enqueueForceUpdate(this, A, 'forceUpdate');
};
function fd() {}
fd.prototype = Wr.prototype;
function wu(A, e, t) {
  (this.props = A),
    (this.context = e),
    (this.refs = cd),
    (this.updater = t || ld);
}
var Qu = (wu.prototype = new fd());
Qu.constructor = wu;
ud(Qu, Wr.prototype);
Qu.isPureReactComponent = !0;
var xc = Array.isArray,
  Bd = Object.prototype.hasOwnProperty,
  Cu = { current: null },
  dd = { key: !0, ref: !0, __self: !0, __source: !0 };
function gd(A, e, t) {
  var r,
    n = {},
    i = null,
    o = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (i = '' + e.key),
    e))
      Bd.call(e, r) && !dd.hasOwnProperty(r) && (n[r] = e[r]);
  var s = arguments.length - 2;
  if (s === 1) n.children = t;
  else if (1 < s) {
    for (var a = Array(s), l = 0; l < s; l++) a[l] = arguments[l + 2];
    n.children = a;
  }
  if (A && A.defaultProps)
    for (r in ((s = A.defaultProps), s)) n[r] === void 0 && (n[r] = s[r]);
  return {
    $$typeof: si,
    type: A,
    key: i,
    ref: o,
    props: n,
    _owner: Cu.current,
  };
}
function ew(A, e) {
  return {
    $$typeof: si,
    type: A.type,
    key: e,
    ref: A.ref,
    props: A.props,
    _owner: A._owner,
  };
}
function Uu(A) {
  return typeof A == 'object' && A !== null && A.$$typeof === si;
}
function tw(A) {
  var e = { '=': '=0', ':': '=2' };
  return (
    '$' +
    A.replace(/[=:]/g, function (t) {
      return e[t];
    })
  );
}
var Lc = /\/+/g;
function zs(A, e) {
  return typeof A == 'object' && A !== null && A.key != null
    ? tw('' + A.key)
    : e.toString(36);
}
function no(A, e, t, r, n) {
  var i = typeof A;
  (i === 'undefined' || i === 'boolean') && (A = null);
  var o = !1;
  if (A === null) o = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (A.$$typeof) {
          case si:
          case bp:
            o = !0;
        }
    }
  if (o)
    return (
      (o = A),
      (n = n(o)),
      (A = r === '' ? '.' + zs(o, 0) : r),
      xc(n)
        ? ((t = ''),
          A != null && (t = A.replace(Lc, '$&/') + '/'),
          no(n, e, t, '', function (l) {
            return l;
          }))
        : n != null &&
          (Uu(n) &&
            (n = ew(
              n,
              t +
                (!n.key || (o && o.key === n.key)
                  ? ''
                  : ('' + n.key).replace(Lc, '$&/') + '/') +
                A
            )),
          e.push(n)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), xc(A)))
    for (var s = 0; s < A.length; s++) {
      i = A[s];
      var a = r + zs(i, s);
      o += no(i, e, t, a, n);
    }
  else if (((a = Aw(A)), typeof a == 'function'))
    for (A = a.call(A), s = 0; !(i = A.next()).done; )
      (i = i.value), (a = r + zs(i, s++)), (o += no(i, e, t, a, n));
  else if (i === 'object')
    throw (
      ((e = String(A)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (e === '[object Object]'
            ? 'object with keys {' + Object.keys(A).join(', ') + '}'
            : e) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return o;
}
function hi(A, e, t) {
  if (A == null) return A;
  var r = [],
    n = 0;
  return (
    no(A, r, '', '', function (i) {
      return e.call(t, i, n++);
    }),
    r
  );
}
function rw(A) {
  if (A._status === -1) {
    var e = A._result;
    (e = e()),
      e.then(
        function (t) {
          (A._status === 0 || A._status === -1) &&
            ((A._status = 1), (A._result = t));
        },
        function (t) {
          (A._status === 0 || A._status === -1) &&
            ((A._status = 2), (A._result = t));
        }
      ),
      A._status === -1 && ((A._status = 0), (A._result = e));
  }
  if (A._status === 1) return A._result.default;
  throw A._result;
}
var qA = { current: null },
  io = { transition: null },
  nw = {
    ReactCurrentDispatcher: qA,
    ReactCurrentBatchConfig: io,
    ReactCurrentOwner: Cu,
  };
J.Children = {
  map: hi,
  forEach: function (A, e, t) {
    hi(
      A,
      function () {
        e.apply(this, arguments);
      },
      t
    );
  },
  count: function (A) {
    var e = 0;
    return (
      hi(A, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (A) {
    return (
      hi(A, function (e) {
        return e;
      }) || []
    );
  },
  only: function (A) {
    if (!Uu(A))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return A;
  },
};
J.Component = Wr;
J.Fragment = Xp;
J.Profiler = Jp;
J.PureComponent = wu;
J.StrictMode = Wp;
J.Suspense = jp;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nw;
J.cloneElement = function (A, e, t) {
  if (A == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        A +
        '.'
    );
  var r = ud({}, A.props),
    n = A.key,
    i = A.ref,
    o = A._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((i = e.ref), (o = Cu.current)),
      e.key !== void 0 && (n = '' + e.key),
      A.type && A.type.defaultProps)
    )
      var s = A.type.defaultProps;
    for (a in e)
      Bd.call(e, a) &&
        !dd.hasOwnProperty(a) &&
        (r[a] = e[a] === void 0 && s !== void 0 ? s[a] : e[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = t;
  else if (1 < a) {
    s = Array(a);
    for (var l = 0; l < a; l++) s[l] = arguments[l + 2];
    r.children = s;
  }
  return { $$typeof: si, type: A.type, key: n, ref: i, props: r, _owner: o };
};
J.createContext = function (A) {
  return (
    (A = {
      $$typeof: Yp,
      _currentValue: A,
      _currentValue2: A,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (A.Provider = { $$typeof: zp, _context: A }),
    (A.Consumer = A)
  );
};
J.createElement = gd;
J.createFactory = function (A) {
  var e = gd.bind(null, A);
  return (e.type = A), e;
};
J.createRef = function () {
  return { current: null };
};
J.forwardRef = function (A) {
  return { $$typeof: $p, render: A };
};
J.isValidElement = Uu;
J.lazy = function (A) {
  return { $$typeof: qp, _payload: { _status: -1, _result: A }, _init: rw };
};
J.memo = function (A, e) {
  return { $$typeof: Zp, type: A, compare: e === void 0 ? null : e };
};
J.startTransition = function (A) {
  var e = io.transition;
  io.transition = {};
  try {
    A();
  } finally {
    io.transition = e;
  }
};
J.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
J.useCallback = function (A, e) {
  return qA.current.useCallback(A, e);
};
J.useContext = function (A) {
  return qA.current.useContext(A);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (A) {
  return qA.current.useDeferredValue(A);
};
J.useEffect = function (A, e) {
  return qA.current.useEffect(A, e);
};
J.useId = function () {
  return qA.current.useId();
};
J.useImperativeHandle = function (A, e, t) {
  return qA.current.useImperativeHandle(A, e, t);
};
J.useInsertionEffect = function (A, e) {
  return qA.current.useInsertionEffect(A, e);
};
J.useLayoutEffect = function (A, e) {
  return qA.current.useLayoutEffect(A, e);
};
J.useMemo = function (A, e) {
  return qA.current.useMemo(A, e);
};
J.useReducer = function (A, e, t) {
  return qA.current.useReducer(A, e, t);
};
J.useRef = function (A) {
  return qA.current.useRef(A);
};
J.useState = function (A) {
  return qA.current.useState(A);
};
J.useSyncExternalStore = function (A, e, t) {
  return qA.current.useSyncExternalStore(A, e, t);
};
J.useTransition = function () {
  return qA.current.useTransition();
};
J.version = '18.2.0';
(function (A) {
  A.exports = J;
})(Gp);
const Jr = Pp(S),
  ba = _p({ __proto__: null, default: Jr }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var iw = S,
  ow = Symbol.for('react.element'),
  sw = Symbol.for('react.fragment'),
  aw = Object.prototype.hasOwnProperty,
  lw = iw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  uw = { key: !0, ref: !0, __self: !0, __source: !0 };
function hd(A, e, t) {
  var r,
    n = {},
    i = null,
    o = null;
  t !== void 0 && (i = '' + t),
    e.key !== void 0 && (i = '' + e.key),
    e.ref !== void 0 && (o = e.ref);
  for (r in e) aw.call(e, r) && !uw.hasOwnProperty(r) && (n[r] = e[r]);
  if (A && A.defaultProps)
    for (r in ((e = A.defaultProps), e)) n[r] === void 0 && (n[r] = e[r]);
  return {
    $$typeof: ow,
    type: A,
    key: i,
    ref: o,
    props: n,
    _owner: lw.current,
  };
}
ss.Fragment = sw;
ss.jsx = hd;
ss.jsxs = hd;
(function (A) {
  A.exports = ss;
})(Vp);
const pd = Mn.Fragment,
  V = Mn.jsx,
  Ue = Mn.jsxs;
var Xa = {},
  Fo = {},
  cw = {
    get exports() {
      return Fo;
    },
    set exports(A) {
      Fo = A;
    },
  },
  de = {},
  Wa = {},
  fw = {
    get exports() {
      return Wa;
    },
    set exports(A) {
      Wa = A;
    },
  },
  wd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (A) {
  function e(H, M) {
    var _ = H.length;
    H.push(M);
    A: for (; 0 < _; ) {
      var z = (_ - 1) >>> 1,
        I = H[z];
      if (0 < n(I, M)) (H[z] = M), (H[_] = I), (_ = z);
      else break A;
    }
  }
  function t(H) {
    return H.length === 0 ? null : H[0];
  }
  function r(H) {
    if (H.length === 0) return null;
    var M = H[0],
      _ = H.pop();
    if (_ !== M) {
      H[0] = _;
      A: for (var z = 0, I = H.length, L = I >>> 1; z < L; ) {
        var T = 2 * (z + 1) - 1,
          N = H[T],
          C = T + 1,
          b = H[C];
        if (0 > n(N, _))
          C < I && 0 > n(b, N)
            ? ((H[z] = b), (H[C] = _), (z = C))
            : ((H[z] = N), (H[T] = _), (z = T));
        else if (C < I && 0 > n(b, _)) (H[z] = b), (H[C] = _), (z = C);
        else break A;
      }
    }
    return M;
  }
  function n(H, M) {
    var _ = H.sortIndex - M.sortIndex;
    return _ !== 0 ? _ : H.id - M.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    A.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      s = o.now();
    A.unstable_now = function () {
      return o.now() - s;
    };
  }
  var a = [],
    l = [],
    u = 1,
    c = null,
    B = 3,
    w = !1,
    g = !1,
    p = !1,
    F = typeof setTimeout == 'function' ? setTimeout : null,
    d = typeof clearTimeout == 'function' ? clearTimeout : null,
    f = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(H) {
    for (var M = t(l); M !== null; ) {
      if (M.callback === null) r(l);
      else if (M.startTime <= H)
        r(l), (M.sortIndex = M.expirationTime), e(a, M);
      else break;
      M = t(l);
    }
  }
  function Q(H) {
    if (((p = !1), h(H), !g))
      if (t(a) !== null) (g = !0), BA(v);
      else {
        var M = t(l);
        M !== null && AA(Q, M.startTime - H);
      }
  }
  function v(H, M) {
    (g = !1), p && ((p = !1), d(m), (m = -1)), (w = !0);
    var _ = B;
    try {
      for (
        h(M), c = t(a);
        c !== null && (!(c.expirationTime > M) || (H && !Y()));

      ) {
        var z = c.callback;
        if (typeof z == 'function') {
          (c.callback = null), (B = c.priorityLevel);
          var I = z(c.expirationTime <= M);
          (M = A.unstable_now()),
            typeof I == 'function' ? (c.callback = I) : c === t(a) && r(a),
            h(M);
        } else r(a);
        c = t(a);
      }
      if (c !== null) var L = !0;
      else {
        var T = t(l);
        T !== null && AA(Q, T.startTime - M), (L = !1);
      }
      return L;
    } finally {
      (c = null), (B = _), (w = !1);
    }
  }
  var U = !1,
    y = null,
    m = -1,
    x = 5,
    R = -1;
  function Y() {
    return !(A.unstable_now() - R < x);
  }
  function $() {
    if (y !== null) {
      var H = A.unstable_now();
      R = H;
      var M = !0;
      try {
        M = y(!0, H);
      } finally {
        M ? P() : ((U = !1), (y = null));
      }
    } else U = !1;
  }
  var P;
  if (typeof f == 'function')
    P = function () {
      f($);
    };
  else if (typeof MessageChannel < 'u') {
    var q = new MessageChannel(),
      uA = q.port2;
    (q.port1.onmessage = $),
      (P = function () {
        uA.postMessage(null);
      });
  } else
    P = function () {
      F($, 0);
    };
  function BA(H) {
    (y = H), U || ((U = !0), P());
  }
  function AA(H, M) {
    m = F(function () {
      H(A.unstable_now());
    }, M);
  }
  (A.unstable_IdlePriority = 5),
    (A.unstable_ImmediatePriority = 1),
    (A.unstable_LowPriority = 4),
    (A.unstable_NormalPriority = 3),
    (A.unstable_Profiling = null),
    (A.unstable_UserBlockingPriority = 2),
    (A.unstable_cancelCallback = function (H) {
      H.callback = null;
    }),
    (A.unstable_continueExecution = function () {
      g || w || ((g = !0), BA(v));
    }),
    (A.unstable_forceFrameRate = function (H) {
      0 > H || 125 < H
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (x = 0 < H ? Math.floor(1e3 / H) : 5);
    }),
    (A.unstable_getCurrentPriorityLevel = function () {
      return B;
    }),
    (A.unstable_getFirstCallbackNode = function () {
      return t(a);
    }),
    (A.unstable_next = function (H) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = B;
      }
      var _ = B;
      B = M;
      try {
        return H();
      } finally {
        B = _;
      }
    }),
    (A.unstable_pauseExecution = function () {}),
    (A.unstable_requestPaint = function () {}),
    (A.unstable_runWithPriority = function (H, M) {
      switch (H) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          H = 3;
      }
      var _ = B;
      B = H;
      try {
        return M();
      } finally {
        B = _;
      }
    }),
    (A.unstable_scheduleCallback = function (H, M, _) {
      var z = A.unstable_now();
      switch (
        (typeof _ == 'object' && _ !== null
          ? ((_ = _.delay), (_ = typeof _ == 'number' && 0 < _ ? z + _ : z))
          : (_ = z),
        H)
      ) {
        case 1:
          var I = -1;
          break;
        case 2:
          I = 250;
          break;
        case 5:
          I = 1073741823;
          break;
        case 4:
          I = 1e4;
          break;
        default:
          I = 5e3;
      }
      return (
        (I = _ + I),
        (H = {
          id: u++,
          callback: M,
          priorityLevel: H,
          startTime: _,
          expirationTime: I,
          sortIndex: -1,
        }),
        _ > z
          ? ((H.sortIndex = _),
            e(l, H),
            t(a) === null &&
              H === t(l) &&
              (p ? (d(m), (m = -1)) : (p = !0), AA(Q, _ - z)))
          : ((H.sortIndex = I), e(a, H), g || w || ((g = !0), BA(v))),
        H
      );
    }),
    (A.unstable_shouldYield = Y),
    (A.unstable_wrapCallback = function (H) {
      var M = B;
      return function () {
        var _ = B;
        B = M;
        try {
          return H.apply(this, arguments);
        } finally {
          B = _;
        }
      };
    });
})(wd);
(function (A) {
  A.exports = wd;
})(fw);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qd = S,
  Be = Wa;
function E(A) {
  for (
    var e = 'https://reactjs.org/docs/error-decoder.html?invariant=' + A, t = 1;
    t < arguments.length;
    t++
  )
    e += '&args[]=' + encodeURIComponent(arguments[t]);
  return (
    'Minified React error #' +
    A +
    '; visit ' +
    e +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Cd = new Set(),
  Nn = {};
function rr(A, e) {
  Or(A, e), Or(A + 'Capture', e);
}
function Or(A, e) {
  for (Nn[A] = e, A = 0; A < e.length; A++) Cd.add(e[A]);
}
var et = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Ja = Object.prototype.hasOwnProperty,
  Bw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Kc = {},
  Tc = {};
function dw(A) {
  return Ja.call(Tc, A)
    ? !0
    : Ja.call(Kc, A)
    ? !1
    : Bw.test(A)
    ? (Tc[A] = !0)
    : ((Kc[A] = !0), !1);
}
function gw(A, e, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof e) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((A = A.toLowerCase().slice(0, 5)), A !== 'data-' && A !== 'aria-');
    default:
      return !1;
  }
}
function hw(A, e, t, r) {
  if (e === null || typeof e > 'u' || gw(A, e, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function Ae(A, e, t, r, n, i, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = n),
    (this.mustUseProperty = t),
    (this.propertyName = A),
    (this.type = e),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var VA = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (A) {
    VA[A] = new Ae(A, 0, !1, A, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (A) {
  var e = A[0];
  VA[e] = new Ae(e, 1, !1, A[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (A) {
  VA[A] = new Ae(A, 2, !1, A.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (A) {
  VA[A] = new Ae(A, 2, !1, A, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (A) {
    VA[A] = new Ae(A, 3, !1, A.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (A) {
  VA[A] = new Ae(A, 3, !0, A, null, !1, !1);
});
['capture', 'download'].forEach(function (A) {
  VA[A] = new Ae(A, 4, !1, A, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (A) {
  VA[A] = new Ae(A, 6, !1, A, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (A) {
  VA[A] = new Ae(A, 5, !1, A.toLowerCase(), null, !1, !1);
});
var vu = /[\-:]([a-z])/g;
function Fu(A) {
  return A[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (A) {
    var e = A.replace(vu, Fu);
    VA[e] = new Ae(e, 1, !1, A, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (A) {
    var e = A.replace(vu, Fu);
    VA[e] = new Ae(e, 1, !1, A, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (A) {
  var e = A.replace(vu, Fu);
  VA[e] = new Ae(e, 1, !1, A, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (A) {
  VA[A] = new Ae(A, 1, !1, A.toLowerCase(), null, !1, !1);
});
VA.xlinkHref = new Ae(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (A) {
  VA[A] = new Ae(A, 1, !1, A.toLowerCase(), null, !0, !0);
});
function mu(A, e, t, r) {
  var n = VA.hasOwnProperty(e) ? VA[e] : null;
  (n !== null
    ? n.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== 'o' && e[0] !== 'O') ||
      (e[1] !== 'n' && e[1] !== 'N')) &&
    (hw(e, t, n, r) && (t = null),
    r || n === null
      ? dw(e) && (t === null ? A.removeAttribute(e) : A.setAttribute(e, '' + t))
      : n.mustUseProperty
      ? (A[n.propertyName] = t === null ? (n.type === 3 ? !1 : '') : t)
      : ((e = n.attributeName),
        (r = n.attributeNamespace),
        t === null
          ? A.removeAttribute(e)
          : ((n = n.type),
            (t = n === 3 || (n === 4 && t === !0) ? '' : '' + t),
            r ? A.setAttributeNS(r, e, t) : A.setAttribute(e, t))));
}
var ot = Qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  pi = Symbol.for('react.element'),
  dr = Symbol.for('react.portal'),
  gr = Symbol.for('react.fragment'),
  yu = Symbol.for('react.strict_mode'),
  za = Symbol.for('react.profiler'),
  Ud = Symbol.for('react.provider'),
  vd = Symbol.for('react.context'),
  Eu = Symbol.for('react.forward_ref'),
  Ya = Symbol.for('react.suspense'),
  $a = Symbol.for('react.suspense_list'),
  Hu = Symbol.for('react.memo'),
  ct = Symbol.for('react.lazy'),
  Fd = Symbol.for('react.offscreen'),
  Dc = Symbol.iterator;
function qr(A) {
  return A === null || typeof A != 'object'
    ? null
    : ((A = (Dc && A[Dc]) || A['@@iterator']),
      typeof A == 'function' ? A : null);
}
var wA = Object.assign,
  Ys;
function fn(A) {
  if (Ys === void 0)
    try {
      throw Error();
    } catch (t) {
      var e = t.stack.trim().match(/\n( *(at )?)/);
      Ys = (e && e[1]) || '';
    }
  return (
    `
` +
    Ys +
    A
  );
}
var $s = !1;
function js(A, e) {
  if (!A || $s) return '';
  $s = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (l) {
          var r = l;
        }
        Reflect.construct(A, [], e);
      } else {
        try {
          e.call();
        } catch (l) {
          r = l;
        }
        A.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l) {
        r = l;
      }
      A();
    }
  } catch (l) {
    if (l && r && typeof l.stack == 'string') {
      for (
        var n = l.stack.split(`
`),
          i = r.stack.split(`
`),
          o = n.length - 1,
          s = i.length - 1;
        1 <= o && 0 <= s && n[o] !== i[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (n[o] !== i[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || n[o] !== i[s])) {
                var a =
                  `
` + n[o].replace(' at new ', ' at ');
                return (
                  A.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', A.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    ($s = !1), (Error.prepareStackTrace = t);
  }
  return (A = A ? A.displayName || A.name : '') ? fn(A) : '';
}
function pw(A) {
  switch (A.tag) {
    case 5:
      return fn(A.type);
    case 16:
      return fn('Lazy');
    case 13:
      return fn('Suspense');
    case 19:
      return fn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (A = js(A.type, !1)), A;
    case 11:
      return (A = js(A.type.render, !1)), A;
    case 1:
      return (A = js(A.type, !0)), A;
    default:
      return '';
  }
}
function ja(A) {
  if (A == null) return null;
  if (typeof A == 'function') return A.displayName || A.name || null;
  if (typeof A == 'string') return A;
  switch (A) {
    case gr:
      return 'Fragment';
    case dr:
      return 'Portal';
    case za:
      return 'Profiler';
    case yu:
      return 'StrictMode';
    case Ya:
      return 'Suspense';
    case $a:
      return 'SuspenseList';
  }
  if (typeof A == 'object')
    switch (A.$$typeof) {
      case vd:
        return (A.displayName || 'Context') + '.Consumer';
      case Ud:
        return (A._context.displayName || 'Context') + '.Provider';
      case Eu:
        var e = A.render;
        return (
          (A = A.displayName),
          A ||
            ((A = e.displayName || e.name || ''),
            (A = A !== '' ? 'ForwardRef(' + A + ')' : 'ForwardRef')),
          A
        );
      case Hu:
        return (
          (e = A.displayName || null), e !== null ? e : ja(A.type) || 'Memo'
        );
      case ct:
        (e = A._payload), (A = A._init);
        try {
          return ja(A(e));
        } catch {}
    }
  return null;
}
function ww(A) {
  var e = A.type;
  switch (A.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (e.displayName || 'Context') + '.Consumer';
    case 10:
      return (e._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (A = e.render),
        (A = A.displayName || A.name || ''),
        e.displayName || (A !== '' ? 'ForwardRef(' + A + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return e;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return ja(e);
    case 8:
      return e === yu ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == 'function') return e.displayName || e.name || null;
      if (typeof e == 'string') return e;
  }
  return null;
}
function Dt(A) {
  switch (typeof A) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return A;
    case 'object':
      return A;
    default:
      return '';
  }
}
function md(A) {
  var e = A.type;
  return (
    (A = A.nodeName) &&
    A.toLowerCase() === 'input' &&
    (e === 'checkbox' || e === 'radio')
  );
}
function Qw(A) {
  var e = md(A) ? 'checked' : 'value',
    t = Object.getOwnPropertyDescriptor(A.constructor.prototype, e),
    r = '' + A[e];
  if (
    !A.hasOwnProperty(e) &&
    typeof t < 'u' &&
    typeof t.get == 'function' &&
    typeof t.set == 'function'
  ) {
    var n = t.get,
      i = t.set;
    return (
      Object.defineProperty(A, e, {
        configurable: !0,
        get: function () {
          return n.call(this);
        },
        set: function (o) {
          (r = '' + o), i.call(this, o);
        },
      }),
      Object.defineProperty(A, e, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (A._valueTracker = null), delete A[e];
        },
      }
    );
  }
}
function wi(A) {
  A._valueTracker || (A._valueTracker = Qw(A));
}
function yd(A) {
  if (!A) return !1;
  var e = A._valueTracker;
  if (!e) return !0;
  var t = e.getValue(),
    r = '';
  return (
    A && (r = md(A) ? (A.checked ? 'true' : 'false') : A.value),
    (A = r),
    A !== t ? (e.setValue(A), !0) : !1
  );
}
function mo(A) {
  if (((A = A || (typeof document < 'u' ? document : void 0)), typeof A > 'u'))
    return null;
  try {
    return A.activeElement || A.body;
  } catch {
    return A.body;
  }
}
function Za(A, e) {
  var t = e.checked;
  return wA({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? A._wrapperState.initialChecked,
  });
}
function kc(A, e) {
  var t = e.defaultValue == null ? '' : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (t = Dt(e.value != null ? e.value : t)),
    (A._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        e.type === 'checkbox' || e.type === 'radio'
          ? e.checked != null
          : e.value != null,
    });
}
function Ed(A, e) {
  (e = e.checked), e != null && mu(A, 'checked', e, !1);
}
function qa(A, e) {
  Ed(A, e);
  var t = Dt(e.value),
    r = e.type;
  if (t != null)
    r === 'number'
      ? ((t === 0 && A.value === '') || A.value != t) && (A.value = '' + t)
      : A.value !== '' + t && (A.value = '' + t);
  else if (r === 'submit' || r === 'reset') {
    A.removeAttribute('value');
    return;
  }
  e.hasOwnProperty('value')
    ? Al(A, e.type, t)
    : e.hasOwnProperty('defaultValue') && Al(A, e.type, Dt(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (A.defaultChecked = !!e.defaultChecked);
}
function Oc(A, e, t) {
  if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
    var r = e.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = '' + A._wrapperState.initialValue),
      t || e === A.value || (A.value = e),
      (A.defaultValue = e);
  }
  (t = A.name),
    t !== '' && (A.name = ''),
    (A.defaultChecked = !!A._wrapperState.initialChecked),
    t !== '' && (A.name = t);
}
function Al(A, e, t) {
  (e !== 'number' || mo(A.ownerDocument) !== A) &&
    (t == null
      ? (A.defaultValue = '' + A._wrapperState.initialValue)
      : A.defaultValue !== '' + t && (A.defaultValue = '' + t));
}
var Bn = Array.isArray;
function Ir(A, e, t, r) {
  if (((A = A.options), e)) {
    e = {};
    for (var n = 0; n < t.length; n++) e['$' + t[n]] = !0;
    for (t = 0; t < A.length; t++)
      (n = e.hasOwnProperty('$' + A[t].value)),
        A[t].selected !== n && (A[t].selected = n),
        n && r && (A[t].defaultSelected = !0);
  } else {
    for (t = '' + Dt(t), e = null, n = 0; n < A.length; n++) {
      if (A[n].value === t) {
        (A[n].selected = !0), r && (A[n].defaultSelected = !0);
        return;
      }
      e !== null || A[n].disabled || (e = A[n]);
    }
    e !== null && (e.selected = !0);
  }
}
function el(A, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(E(91));
  return wA({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: '' + A._wrapperState.initialValue,
  });
}
function Rc(A, e) {
  var t = e.value;
  if (t == null) {
    if (((t = e.children), (e = e.defaultValue), t != null)) {
      if (e != null) throw Error(E(92));
      if (Bn(t)) {
        if (1 < t.length) throw Error(E(93));
        t = t[0];
      }
      e = t;
    }
    e == null && (e = ''), (t = e);
  }
  A._wrapperState = { initialValue: Dt(t) };
}
function Hd(A, e) {
  var t = Dt(e.value),
    r = Dt(e.defaultValue);
  t != null &&
    ((t = '' + t),
    t !== A.value && (A.value = t),
    e.defaultValue == null && A.defaultValue !== t && (A.defaultValue = t)),
    r != null && (A.defaultValue = '' + r);
}
function Mc(A) {
  var e = A.textContent;
  e === A._wrapperState.initialValue && e !== '' && e !== null && (A.value = e);
}
function Id(A) {
  switch (A) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function tl(A, e) {
  return A == null || A === 'http://www.w3.org/1999/xhtml'
    ? Id(e)
    : A === 'http://www.w3.org/2000/svg' && e === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : A;
}
var Qi,
  Sd = (function (A) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (e, t, r, n) {
          MSApp.execUnsafeLocalFunction(function () {
            return A(e, t, r, n);
          });
        }
      : A;
  })(function (A, e) {
    if (A.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in A)
      A.innerHTML = e;
    else {
      for (
        Qi = Qi || document.createElement('div'),
          Qi.innerHTML = '<svg>' + e.valueOf().toString() + '</svg>',
          e = Qi.firstChild;
        A.firstChild;

      )
        A.removeChild(A.firstChild);
      for (; e.firstChild; ) A.appendChild(e.firstChild);
    }
  });
function _n(A, e) {
  if (e) {
    var t = A.firstChild;
    if (t && t === A.lastChild && t.nodeType === 3) {
      t.nodeValue = e;
      return;
    }
  }
  A.textContent = e;
}
var Fn = {
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
  Cw = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Fn).forEach(function (A) {
  Cw.forEach(function (e) {
    (e = e + A.charAt(0).toUpperCase() + A.substring(1)), (Fn[e] = Fn[A]);
  });
});
function xd(A, e, t) {
  return e == null || typeof e == 'boolean' || e === ''
    ? ''
    : t || typeof e != 'number' || e === 0 || (Fn.hasOwnProperty(A) && Fn[A])
    ? ('' + e).trim()
    : e + 'px';
}
function Ld(A, e) {
  A = A.style;
  for (var t in e)
    if (e.hasOwnProperty(t)) {
      var r = t.indexOf('--') === 0,
        n = xd(t, e[t], r);
      t === 'float' && (t = 'cssFloat'), r ? A.setProperty(t, n) : (A[t] = n);
    }
}
var Uw = wA(
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
function rl(A, e) {
  if (e) {
    if (Uw[A] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(E(137, A));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(E(60));
      if (
        typeof e.dangerouslySetInnerHTML != 'object' ||
        !('__html' in e.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (e.style != null && typeof e.style != 'object') throw Error(E(62));
  }
}
function nl(A, e) {
  if (A.indexOf('-') === -1) return typeof e.is == 'string';
  switch (A) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var il = null;
function Iu(A) {
  return (
    (A = A.target || A.srcElement || window),
    A.correspondingUseElement && (A = A.correspondingUseElement),
    A.nodeType === 3 ? A.parentNode : A
  );
}
var ol = null,
  Sr = null,
  xr = null;
function Nc(A) {
  if ((A = ui(A))) {
    if (typeof ol != 'function') throw Error(E(280));
    var e = A.stateNode;
    e && ((e = fs(e)), ol(A.stateNode, A.type, e));
  }
}
function Kd(A) {
  Sr ? (xr ? xr.push(A) : (xr = [A])) : (Sr = A);
}
function Td() {
  if (Sr) {
    var A = Sr,
      e = xr;
    if (((xr = Sr = null), Nc(A), e)) for (A = 0; A < e.length; A++) Nc(e[A]);
  }
}
function Dd(A, e) {
  return A(e);
}
function kd() {}
var Zs = !1;
function Od(A, e, t) {
  if (Zs) return A(e, t);
  Zs = !0;
  try {
    return Dd(A, e, t);
  } finally {
    (Zs = !1), (Sr !== null || xr !== null) && (kd(), Td());
  }
}
function Pn(A, e) {
  var t = A.stateNode;
  if (t === null) return null;
  var r = fs(t);
  if (r === null) return null;
  t = r[e];
  A: switch (e) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((A = A.type),
        (r = !(
          A === 'button' ||
          A === 'input' ||
          A === 'select' ||
          A === 'textarea'
        ))),
        (A = !r);
      break A;
    default:
      A = !1;
  }
  if (A) return null;
  if (t && typeof t != 'function') throw Error(E(231, e, typeof t));
  return t;
}
var sl = !1;
if (et)
  try {
    var An = {};
    Object.defineProperty(An, 'passive', {
      get: function () {
        sl = !0;
      },
    }),
      window.addEventListener('test', An, An),
      window.removeEventListener('test', An, An);
  } catch {
    sl = !1;
  }
function vw(A, e, t, r, n, i, o, s, a) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(t, l);
  } catch (u) {
    this.onError(u);
  }
}
var mn = !1,
  yo = null,
  Eo = !1,
  al = null,
  Fw = {
    onError: function (A) {
      (mn = !0), (yo = A);
    },
  };
function mw(A, e, t, r, n, i, o, s, a) {
  (mn = !1), (yo = null), vw.apply(Fw, arguments);
}
function yw(A, e, t, r, n, i, o, s, a) {
  if ((mw.apply(this, arguments), mn)) {
    if (mn) {
      var l = yo;
      (mn = !1), (yo = null);
    } else throw Error(E(198));
    Eo || ((Eo = !0), (al = l));
  }
}
function nr(A) {
  var e = A,
    t = A;
  if (A.alternate) for (; e.return; ) e = e.return;
  else {
    A = e;
    do (e = A), e.flags & 4098 && (t = e.return), (A = e.return);
    while (A);
  }
  return e.tag === 3 ? t : null;
}
function Rd(A) {
  if (A.tag === 13) {
    var e = A.memoizedState;
    if (
      (e === null && ((A = A.alternate), A !== null && (e = A.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function _c(A) {
  if (nr(A) !== A) throw Error(E(188));
}
function Ew(A) {
  var e = A.alternate;
  if (!e) {
    if (((e = nr(A)), e === null)) throw Error(E(188));
    return e !== A ? null : A;
  }
  for (var t = A, r = e; ; ) {
    var n = t.return;
    if (n === null) break;
    var i = n.alternate;
    if (i === null) {
      if (((r = n.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (n.child === i.child) {
      for (i = n.child; i; ) {
        if (i === t) return _c(n), A;
        if (i === r) return _c(n), e;
        i = i.sibling;
      }
      throw Error(E(188));
    }
    if (t.return !== r.return) (t = n), (r = i);
    else {
      for (var o = !1, s = n.child; s; ) {
        if (s === t) {
          (o = !0), (t = n), (r = i);
          break;
        }
        if (s === r) {
          (o = !0), (r = n), (t = i);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = i.child; s; ) {
          if (s === t) {
            (o = !0), (t = i), (r = n);
            break;
          }
          if (s === r) {
            (o = !0), (r = i), (t = n);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(E(189));
      }
    }
    if (t.alternate !== r) throw Error(E(190));
  }
  if (t.tag !== 3) throw Error(E(188));
  return t.stateNode.current === t ? A : e;
}
function Md(A) {
  return (A = Ew(A)), A !== null ? Nd(A) : null;
}
function Nd(A) {
  if (A.tag === 5 || A.tag === 6) return A;
  for (A = A.child; A !== null; ) {
    var e = Nd(A);
    if (e !== null) return e;
    A = A.sibling;
  }
  return null;
}
var _d = Be.unstable_scheduleCallback,
  Pc = Be.unstable_cancelCallback,
  Hw = Be.unstable_shouldYield,
  Iw = Be.unstable_requestPaint,
  mA = Be.unstable_now,
  Sw = Be.unstable_getCurrentPriorityLevel,
  Su = Be.unstable_ImmediatePriority,
  Pd = Be.unstable_UserBlockingPriority,
  Ho = Be.unstable_NormalPriority,
  xw = Be.unstable_LowPriority,
  Vd = Be.unstable_IdlePriority,
  as = null,
  Ve = null;
function Lw(A) {
  if (Ve && typeof Ve.onCommitFiberRoot == 'function')
    try {
      Ve.onCommitFiberRoot(as, A, void 0, (A.current.flags & 128) === 128);
    } catch {}
}
var De = Math.clz32 ? Math.clz32 : Dw,
  Kw = Math.log,
  Tw = Math.LN2;
function Dw(A) {
  return (A >>>= 0), A === 0 ? 32 : (31 - ((Kw(A) / Tw) | 0)) | 0;
}
var Ci = 64,
  Ui = 4194304;
function dn(A) {
  switch (A & -A) {
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
      return A & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return A & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return A;
  }
}
function Io(A, e) {
  var t = A.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    n = A.suspendedLanes,
    i = A.pingedLanes,
    o = t & 268435455;
  if (o !== 0) {
    var s = o & ~n;
    s !== 0 ? (r = dn(s)) : ((i &= o), i !== 0 && (r = dn(i)));
  } else (o = t & ~n), o !== 0 ? (r = dn(o)) : i !== 0 && (r = dn(i));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & n) &&
    ((n = r & -r), (i = e & -e), n >= i || (n === 16 && (i & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= t & 16), (e = A.entangledLanes), e !== 0))
    for (A = A.entanglements, e &= r; 0 < e; )
      (t = 31 - De(e)), (n = 1 << t), (r |= A[t]), (e &= ~n);
  return r;
}
function kw(A, e) {
  switch (A) {
    case 1:
    case 2:
    case 4:
      return e + 250;
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
      return e + 5e3;
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
function Ow(A, e) {
  for (
    var t = A.suspendedLanes,
      r = A.pingedLanes,
      n = A.expirationTimes,
      i = A.pendingLanes;
    0 < i;

  ) {
    var o = 31 - De(i),
      s = 1 << o,
      a = n[o];
    a === -1
      ? (!(s & t) || s & r) && (n[o] = kw(s, e))
      : a <= e && (A.expiredLanes |= s),
      (i &= ~s);
  }
}
function ll(A) {
  return (
    (A = A.pendingLanes & -1073741825),
    A !== 0 ? A : A & 1073741824 ? 1073741824 : 0
  );
}
function Gd() {
  var A = Ci;
  return (Ci <<= 1), !(Ci & 4194240) && (Ci = 64), A;
}
function qs(A) {
  for (var e = [], t = 0; 31 > t; t++) e.push(A);
  return e;
}
function ai(A, e, t) {
  (A.pendingLanes |= e),
    e !== 536870912 && ((A.suspendedLanes = 0), (A.pingedLanes = 0)),
    (A = A.eventTimes),
    (e = 31 - De(e)),
    (A[e] = t);
}
function Rw(A, e) {
  var t = A.pendingLanes & ~e;
  (A.pendingLanes = e),
    (A.suspendedLanes = 0),
    (A.pingedLanes = 0),
    (A.expiredLanes &= e),
    (A.mutableReadLanes &= e),
    (A.entangledLanes &= e),
    (e = A.entanglements);
  var r = A.eventTimes;
  for (A = A.expirationTimes; 0 < t; ) {
    var n = 31 - De(t),
      i = 1 << n;
    (e[n] = 0), (r[n] = -1), (A[n] = -1), (t &= ~i);
  }
}
function xu(A, e) {
  var t = (A.entangledLanes |= e);
  for (A = A.entanglements; t; ) {
    var r = 31 - De(t),
      n = 1 << r;
    (n & e) | (A[r] & e) && (A[r] |= e), (t &= ~n);
  }
}
var iA = 0;
function bd(A) {
  return (A &= -A), 1 < A ? (4 < A ? (A & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Xd,
  Lu,
  Wd,
  Jd,
  zd,
  ul = !1,
  vi = [],
  vt = null,
  Ft = null,
  mt = null,
  Vn = new Map(),
  Gn = new Map(),
  dt = [],
  Mw =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Vc(A, e) {
  switch (A) {
    case 'focusin':
    case 'focusout':
      vt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Ft = null;
      break;
    case 'mouseover':
    case 'mouseout':
      mt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Vn.delete(e.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Gn.delete(e.pointerId);
  }
}
function en(A, e, t, r, n, i) {
  return A === null || A.nativeEvent !== i
    ? ((A = {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [n],
      }),
      e !== null && ((e = ui(e)), e !== null && Lu(e)),
      A)
    : ((A.eventSystemFlags |= r),
      (e = A.targetContainers),
      n !== null && e.indexOf(n) === -1 && e.push(n),
      A);
}
function Nw(A, e, t, r, n) {
  switch (e) {
    case 'focusin':
      return (vt = en(vt, A, e, t, r, n)), !0;
    case 'dragenter':
      return (Ft = en(Ft, A, e, t, r, n)), !0;
    case 'mouseover':
      return (mt = en(mt, A, e, t, r, n)), !0;
    case 'pointerover':
      var i = n.pointerId;
      return Vn.set(i, en(Vn.get(i) || null, A, e, t, r, n)), !0;
    case 'gotpointercapture':
      return (
        (i = n.pointerId), Gn.set(i, en(Gn.get(i) || null, A, e, t, r, n)), !0
      );
  }
  return !1;
}
function Yd(A) {
  var e = bt(A.target);
  if (e !== null) {
    var t = nr(e);
    if (t !== null) {
      if (((e = t.tag), e === 13)) {
        if (((e = Rd(t)), e !== null)) {
          (A.blockedOn = e),
            zd(A.priority, function () {
              Wd(t);
            });
          return;
        }
      } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        A.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  A.blockedOn = null;
}
function oo(A) {
  if (A.blockedOn !== null) return !1;
  for (var e = A.targetContainers; 0 < e.length; ) {
    var t = cl(A.domEventName, A.eventSystemFlags, e[0], A.nativeEvent);
    if (t === null) {
      t = A.nativeEvent;
      var r = new t.constructor(t.type, t);
      (il = r), t.target.dispatchEvent(r), (il = null);
    } else return (e = ui(t)), e !== null && Lu(e), (A.blockedOn = t), !1;
    e.shift();
  }
  return !0;
}
function Gc(A, e, t) {
  oo(A) && t.delete(e);
}
function _w() {
  (ul = !1),
    vt !== null && oo(vt) && (vt = null),
    Ft !== null && oo(Ft) && (Ft = null),
    mt !== null && oo(mt) && (mt = null),
    Vn.forEach(Gc),
    Gn.forEach(Gc);
}
function tn(A, e) {
  A.blockedOn === e &&
    ((A.blockedOn = null),
    ul ||
      ((ul = !0),
      Be.unstable_scheduleCallback(Be.unstable_NormalPriority, _w)));
}
function bn(A) {
  function e(n) {
    return tn(n, A);
  }
  if (0 < vi.length) {
    tn(vi[0], A);
    for (var t = 1; t < vi.length; t++) {
      var r = vi[t];
      r.blockedOn === A && (r.blockedOn = null);
    }
  }
  for (
    vt !== null && tn(vt, A),
      Ft !== null && tn(Ft, A),
      mt !== null && tn(mt, A),
      Vn.forEach(e),
      Gn.forEach(e),
      t = 0;
    t < dt.length;
    t++
  )
    (r = dt[t]), r.blockedOn === A && (r.blockedOn = null);
  for (; 0 < dt.length && ((t = dt[0]), t.blockedOn === null); )
    Yd(t), t.blockedOn === null && dt.shift();
}
var Lr = ot.ReactCurrentBatchConfig,
  So = !0;
function Pw(A, e, t, r) {
  var n = iA,
    i = Lr.transition;
  Lr.transition = null;
  try {
    (iA = 1), Ku(A, e, t, r);
  } finally {
    (iA = n), (Lr.transition = i);
  }
}
function Vw(A, e, t, r) {
  var n = iA,
    i = Lr.transition;
  Lr.transition = null;
  try {
    (iA = 4), Ku(A, e, t, r);
  } finally {
    (iA = n), (Lr.transition = i);
  }
}
function Ku(A, e, t, r) {
  if (So) {
    var n = cl(A, e, t, r);
    if (n === null) la(A, e, r, xo, t), Vc(A, r);
    else if (Nw(n, A, e, t, r)) r.stopPropagation();
    else if ((Vc(A, r), e & 4 && -1 < Mw.indexOf(A))) {
      for (; n !== null; ) {
        var i = ui(n);
        if (
          (i !== null && Xd(i),
          (i = cl(A, e, t, r)),
          i === null && la(A, e, r, xo, t),
          i === n)
        )
          break;
        n = i;
      }
      n !== null && r.stopPropagation();
    } else la(A, e, r, null, t);
  }
}
var xo = null;
function cl(A, e, t, r) {
  if (((xo = null), (A = Iu(r)), (A = bt(A)), A !== null))
    if (((e = nr(A)), e === null)) A = null;
    else if (((t = e.tag), t === 13)) {
      if (((A = Rd(e)), A !== null)) return A;
      A = null;
    } else if (t === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      A = null;
    } else e !== A && (A = null);
  return (xo = A), null;
}
function $d(A) {
  switch (A) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Sw()) {
        case Su:
          return 1;
        case Pd:
          return 4;
        case Ho:
        case xw:
          return 16;
        case Vd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ht = null,
  Tu = null,
  so = null;
function jd() {
  if (so) return so;
  var A,
    e = Tu,
    t = e.length,
    r,
    n = 'value' in ht ? ht.value : ht.textContent,
    i = n.length;
  for (A = 0; A < t && e[A] === n[A]; A++);
  var o = t - A;
  for (r = 1; r <= o && e[t - r] === n[i - r]; r++);
  return (so = n.slice(A, 1 < r ? 1 - r : void 0));
}
function ao(A) {
  var e = A.keyCode;
  return (
    'charCode' in A
      ? ((A = A.charCode), A === 0 && e === 13 && (A = 13))
      : (A = e),
    A === 10 && (A = 13),
    32 <= A || A === 13 ? A : 0
  );
}
function Fi() {
  return !0;
}
function bc() {
  return !1;
}
function ge(A) {
  function e(t, r, n, i, o) {
    (this._reactName = t),
      (this._targetInst = n),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in A)
      A.hasOwnProperty(s) && ((t = A[s]), (this[s] = t ? t(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Fi
        : bc),
      (this.isPropagationStopped = bc),
      this
    );
  }
  return (
    wA(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != 'unknown' && (t.returnValue = !1),
          (this.isDefaultPrevented = Fi));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != 'unknown' && (t.cancelBubble = !0),
          (this.isPropagationStopped = Fi));
      },
      persist: function () {},
      isPersistent: Fi,
    }),
    e
  );
}
var zr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (A) {
      return A.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Du = ge(zr),
  li = wA({}, zr, { view: 0, detail: 0 }),
  Gw = ge(li),
  Aa,
  ea,
  rn,
  ls = wA({}, li, {
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
    getModifierState: ku,
    button: 0,
    buttons: 0,
    relatedTarget: function (A) {
      return A.relatedTarget === void 0
        ? A.fromElement === A.srcElement
          ? A.toElement
          : A.fromElement
        : A.relatedTarget;
    },
    movementX: function (A) {
      return 'movementX' in A
        ? A.movementX
        : (A !== rn &&
            (rn && A.type === 'mousemove'
              ? ((Aa = A.screenX - rn.screenX), (ea = A.screenY - rn.screenY))
              : (ea = Aa = 0),
            (rn = A)),
          Aa);
    },
    movementY: function (A) {
      return 'movementY' in A ? A.movementY : ea;
    },
  }),
  Xc = ge(ls),
  bw = wA({}, ls, { dataTransfer: 0 }),
  Xw = ge(bw),
  Ww = wA({}, li, { relatedTarget: 0 }),
  ta = ge(Ww),
  Jw = wA({}, zr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zw = ge(Jw),
  Yw = wA({}, zr, {
    clipboardData: function (A) {
      return 'clipboardData' in A ? A.clipboardData : window.clipboardData;
    },
  }),
  $w = ge(Yw),
  jw = wA({}, zr, { data: 0 }),
  Wc = ge(jw),
  Zw = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  qw = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  AQ = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function eQ(A) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(A) : (A = AQ[A]) ? !!e[A] : !1;
}
function ku() {
  return eQ;
}
var tQ = wA({}, li, {
    key: function (A) {
      if (A.key) {
        var e = Zw[A.key] || A.key;
        if (e !== 'Unidentified') return e;
      }
      return A.type === 'keypress'
        ? ((A = ao(A)), A === 13 ? 'Enter' : String.fromCharCode(A))
        : A.type === 'keydown' || A.type === 'keyup'
        ? qw[A.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ku,
    charCode: function (A) {
      return A.type === 'keypress' ? ao(A) : 0;
    },
    keyCode: function (A) {
      return A.type === 'keydown' || A.type === 'keyup' ? A.keyCode : 0;
    },
    which: function (A) {
      return A.type === 'keypress'
        ? ao(A)
        : A.type === 'keydown' || A.type === 'keyup'
        ? A.keyCode
        : 0;
    },
  }),
  rQ = ge(tQ),
  nQ = wA({}, ls, {
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
  Jc = ge(nQ),
  iQ = wA({}, li, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ku,
  }),
  oQ = ge(iQ),
  sQ = wA({}, zr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  aQ = ge(sQ),
  lQ = wA({}, ls, {
    deltaX: function (A) {
      return 'deltaX' in A ? A.deltaX : 'wheelDeltaX' in A ? -A.wheelDeltaX : 0;
    },
    deltaY: function (A) {
      return 'deltaY' in A
        ? A.deltaY
        : 'wheelDeltaY' in A
        ? -A.wheelDeltaY
        : 'wheelDelta' in A
        ? -A.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  uQ = ge(lQ),
  cQ = [9, 13, 27, 32],
  Ou = et && 'CompositionEvent' in window,
  yn = null;
et && 'documentMode' in document && (yn = document.documentMode);
var fQ = et && 'TextEvent' in window && !yn,
  Zd = et && (!Ou || (yn && 8 < yn && 11 >= yn)),
  zc = String.fromCharCode(32),
  Yc = !1;
function qd(A, e) {
  switch (A) {
    case 'keyup':
      return cQ.indexOf(e.keyCode) !== -1;
    case 'keydown':
      return e.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Ag(A) {
  return (A = A.detail), typeof A == 'object' && 'data' in A ? A.data : null;
}
var hr = !1;
function BQ(A, e) {
  switch (A) {
    case 'compositionend':
      return Ag(e);
    case 'keypress':
      return e.which !== 32 ? null : ((Yc = !0), zc);
    case 'textInput':
      return (A = e.data), A === zc && Yc ? null : A;
    default:
      return null;
  }
}
function dQ(A, e) {
  if (hr)
    return A === 'compositionend' || (!Ou && qd(A, e))
      ? ((A = jd()), (so = Tu = ht = null), (hr = !1), A)
      : null;
  switch (A) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case 'compositionend':
      return Zd && e.locale !== 'ko' ? null : e.data;
    default:
      return null;
  }
}
var gQ = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
function $c(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return e === 'input' ? !!gQ[A.type] : e === 'textarea';
}
function eg(A, e, t, r) {
  Kd(r),
    (e = Lo(e, 'onChange')),
    0 < e.length &&
      ((t = new Du('onChange', 'change', null, t, r)),
      A.push({ event: t, listeners: e }));
}
var En = null,
  Xn = null;
function hQ(A) {
  fg(A, 0);
}
function us(A) {
  var e = Qr(A);
  if (yd(e)) return A;
}
function pQ(A, e) {
  if (A === 'change') return e;
}
var tg = !1;
if (et) {
  var ra;
  if (et) {
    var na = 'oninput' in document;
    if (!na) {
      var jc = document.createElement('div');
      jc.setAttribute('oninput', 'return;'),
        (na = typeof jc.oninput == 'function');
    }
    ra = na;
  } else ra = !1;
  tg = ra && (!document.documentMode || 9 < document.documentMode);
}
function Zc() {
  En && (En.detachEvent('onpropertychange', rg), (Xn = En = null));
}
function rg(A) {
  if (A.propertyName === 'value' && us(Xn)) {
    var e = [];
    eg(e, Xn, A, Iu(A)), Od(hQ, e);
  }
}
function wQ(A, e, t) {
  A === 'focusin'
    ? (Zc(), (En = e), (Xn = t), En.attachEvent('onpropertychange', rg))
    : A === 'focusout' && Zc();
}
function QQ(A) {
  if (A === 'selectionchange' || A === 'keyup' || A === 'keydown')
    return us(Xn);
}
function CQ(A, e) {
  if (A === 'click') return us(e);
}
function UQ(A, e) {
  if (A === 'input' || A === 'change') return us(e);
}
function vQ(A, e) {
  return (A === e && (A !== 0 || 1 / A === 1 / e)) || (A !== A && e !== e);
}
var Oe = typeof Object.is == 'function' ? Object.is : vQ;
function Wn(A, e) {
  if (Oe(A, e)) return !0;
  if (typeof A != 'object' || A === null || typeof e != 'object' || e === null)
    return !1;
  var t = Object.keys(A),
    r = Object.keys(e);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var n = t[r];
    if (!Ja.call(e, n) || !Oe(A[n], e[n])) return !1;
  }
  return !0;
}
function qc(A) {
  for (; A && A.firstChild; ) A = A.firstChild;
  return A;
}
function Af(A, e) {
  var t = qc(A);
  A = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = A + t.textContent.length), A <= e && r >= e))
        return { node: t, offset: e - A };
      A = r;
    }
    A: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break A;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = qc(t);
  }
}
function ng(A, e) {
  return A && e
    ? A === e
      ? !0
      : A && A.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? ng(A, e.parentNode)
      : 'contains' in A
      ? A.contains(e)
      : A.compareDocumentPosition
      ? !!(A.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function ig() {
  for (var A = window, e = mo(); e instanceof A.HTMLIFrameElement; ) {
    try {
      var t = typeof e.contentWindow.location.href == 'string';
    } catch {
      t = !1;
    }
    if (t) A = e.contentWindow;
    else break;
    e = mo(A.document);
  }
  return e;
}
function Ru(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return (
    e &&
    ((e === 'input' &&
      (A.type === 'text' ||
        A.type === 'search' ||
        A.type === 'tel' ||
        A.type === 'url' ||
        A.type === 'password')) ||
      e === 'textarea' ||
      A.contentEditable === 'true')
  );
}
function FQ(A) {
  var e = ig(),
    t = A.focusedElem,
    r = A.selectionRange;
  if (
    e !== t &&
    t &&
    t.ownerDocument &&
    ng(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && Ru(t)) {
      if (
        ((e = r.start),
        (A = r.end),
        A === void 0 && (A = e),
        'selectionStart' in t)
      )
        (t.selectionStart = e), (t.selectionEnd = Math.min(A, t.value.length));
      else if (
        ((A = ((e = t.ownerDocument || document) && e.defaultView) || window),
        A.getSelection)
      ) {
        A = A.getSelection();
        var n = t.textContent.length,
          i = Math.min(r.start, n);
        (r = r.end === void 0 ? i : Math.min(r.end, n)),
          !A.extend && i > r && ((n = r), (r = i), (i = n)),
          (n = Af(t, i));
        var o = Af(t, r);
        n &&
          o &&
          (A.rangeCount !== 1 ||
            A.anchorNode !== n.node ||
            A.anchorOffset !== n.offset ||
            A.focusNode !== o.node ||
            A.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(n.node, n.offset),
          A.removeAllRanges(),
          i > r
            ? (A.addRange(e), A.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), A.addRange(e)));
      }
    }
    for (e = [], A = t; (A = A.parentNode); )
      A.nodeType === 1 &&
        e.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
    for (typeof t.focus == 'function' && t.focus(), t = 0; t < e.length; t++)
      (A = e[t]),
        (A.element.scrollLeft = A.left),
        (A.element.scrollTop = A.top);
  }
}
var mQ = et && 'documentMode' in document && 11 >= document.documentMode,
  pr = null,
  fl = null,
  Hn = null,
  Bl = !1;
function ef(A, e, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  Bl ||
    pr == null ||
    pr !== mo(r) ||
    ((r = pr),
    'selectionStart' in r && Ru(r)
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
    (Hn && Wn(Hn, r)) ||
      ((Hn = r),
      (r = Lo(fl, 'onSelect')),
      0 < r.length &&
        ((e = new Du('onSelect', 'select', null, e, t)),
        A.push({ event: e, listeners: r }),
        (e.target = pr))));
}
function mi(A, e) {
  var t = {};
  return (
    (t[A.toLowerCase()] = e.toLowerCase()),
    (t['Webkit' + A] = 'webkit' + e),
    (t['Moz' + A] = 'moz' + e),
    t
  );
}
var wr = {
    animationend: mi('Animation', 'AnimationEnd'),
    animationiteration: mi('Animation', 'AnimationIteration'),
    animationstart: mi('Animation', 'AnimationStart'),
    transitionend: mi('Transition', 'TransitionEnd'),
  },
  ia = {},
  og = {};
et &&
  ((og = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete wr.animationend.animation,
    delete wr.animationiteration.animation,
    delete wr.animationstart.animation),
  'TransitionEvent' in window || delete wr.transitionend.transition);
function cs(A) {
  if (ia[A]) return ia[A];
  if (!wr[A]) return A;
  var e = wr[A],
    t;
  for (t in e) if (e.hasOwnProperty(t) && t in og) return (ia[A] = e[t]);
  return A;
}
var sg = cs('animationend'),
  ag = cs('animationiteration'),
  lg = cs('animationstart'),
  ug = cs('transitionend'),
  cg = new Map(),
  tf =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Rt(A, e) {
  cg.set(A, e), rr(e, [A]);
}
for (var oa = 0; oa < tf.length; oa++) {
  var sa = tf[oa],
    yQ = sa.toLowerCase(),
    EQ = sa[0].toUpperCase() + sa.slice(1);
  Rt(yQ, 'on' + EQ);
}
Rt(sg, 'onAnimationEnd');
Rt(ag, 'onAnimationIteration');
Rt(lg, 'onAnimationStart');
Rt('dblclick', 'onDoubleClick');
Rt('focusin', 'onFocus');
Rt('focusout', 'onBlur');
Rt(ug, 'onTransitionEnd');
Or('onMouseEnter', ['mouseout', 'mouseover']);
Or('onMouseLeave', ['mouseout', 'mouseover']);
Or('onPointerEnter', ['pointerout', 'pointerover']);
Or('onPointerLeave', ['pointerout', 'pointerover']);
rr(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
rr(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
rr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
rr(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
rr(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
rr(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var gn =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  HQ = new Set('cancel close invalid load scroll toggle'.split(' ').concat(gn));
function rf(A, e, t) {
  var r = A.type || 'unknown-event';
  (A.currentTarget = t), yw(r, e, void 0, A), (A.currentTarget = null);
}
function fg(A, e) {
  e = (e & 4) !== 0;
  for (var t = 0; t < A.length; t++) {
    var r = A[t],
      n = r.event;
    r = r.listeners;
    A: {
      var i = void 0;
      if (e)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            a = s.instance,
            l = s.currentTarget;
          if (((s = s.listener), a !== i && n.isPropagationStopped())) break A;
          rf(n, s, l), (i = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]),
            (a = s.instance),
            (l = s.currentTarget),
            (s = s.listener),
            a !== i && n.isPropagationStopped())
          )
            break A;
          rf(n, s, l), (i = a);
        }
    }
  }
  if (Eo) throw ((A = al), (Eo = !1), (al = null), A);
}
function cA(A, e) {
  var t = e[wl];
  t === void 0 && (t = e[wl] = new Set());
  var r = A + '__bubble';
  t.has(r) || (Bg(e, A, 2, !1), t.add(r));
}
function aa(A, e, t) {
  var r = 0;
  e && (r |= 4), Bg(t, A, r, e);
}
var yi = '_reactListening' + Math.random().toString(36).slice(2);
function Jn(A) {
  if (!A[yi]) {
    (A[yi] = !0),
      Cd.forEach(function (t) {
        t !== 'selectionchange' && (HQ.has(t) || aa(t, !1, A), aa(t, !0, A));
      });
    var e = A.nodeType === 9 ? A : A.ownerDocument;
    e === null || e[yi] || ((e[yi] = !0), aa('selectionchange', !1, e));
  }
}
function Bg(A, e, t, r) {
  switch ($d(e)) {
    case 1:
      var n = Pw;
      break;
    case 4:
      n = Vw;
      break;
    default:
      n = Ku;
  }
  (t = n.bind(null, e, t, A)),
    (n = void 0),
    !sl ||
      (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') ||
      (n = !0),
    r
      ? n !== void 0
        ? A.addEventListener(e, t, { capture: !0, passive: n })
        : A.addEventListener(e, t, !0)
      : n !== void 0
      ? A.addEventListener(e, t, { passive: n })
      : A.addEventListener(e, t, !1);
}
function la(A, e, t, r, n) {
  var i = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    A: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === n || (s.nodeType === 8 && s.parentNode === n)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === n || (a.nodeType === 8 && a.parentNode === n))
            )
              return;
            o = o.return;
          }
        for (; s !== null; ) {
          if (((o = bt(s)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = i = o;
            continue A;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Od(function () {
    var l = i,
      u = Iu(t),
      c = [];
    A: {
      var B = cg.get(A);
      if (B !== void 0) {
        var w = Du,
          g = A;
        switch (A) {
          case 'keypress':
            if (ao(t) === 0) break A;
          case 'keydown':
          case 'keyup':
            w = rQ;
            break;
          case 'focusin':
            (g = 'focus'), (w = ta);
            break;
          case 'focusout':
            (g = 'blur'), (w = ta);
            break;
          case 'beforeblur':
          case 'afterblur':
            w = ta;
            break;
          case 'click':
            if (t.button === 2) break A;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            w = Xc;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            w = Xw;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            w = oQ;
            break;
          case sg:
          case ag:
          case lg:
            w = zw;
            break;
          case ug:
            w = aQ;
            break;
          case 'scroll':
            w = Gw;
            break;
          case 'wheel':
            w = uQ;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            w = $w;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            w = Jc;
        }
        var p = (e & 4) !== 0,
          F = !p && A === 'scroll',
          d = p ? (B !== null ? B + 'Capture' : null) : B;
        p = [];
        for (var f = l, h; f !== null; ) {
          h = f;
          var Q = h.stateNode;
          if (
            (h.tag === 5 &&
              Q !== null &&
              ((h = Q),
              d !== null && ((Q = Pn(f, d)), Q != null && p.push(zn(f, Q, h)))),
            F)
          )
            break;
          f = f.return;
        }
        0 < p.length &&
          ((B = new w(B, g, null, t, u)), c.push({ event: B, listeners: p }));
      }
    }
    if (!(e & 7)) {
      A: {
        if (
          ((B = A === 'mouseover' || A === 'pointerover'),
          (w = A === 'mouseout' || A === 'pointerout'),
          B &&
            t !== il &&
            (g = t.relatedTarget || t.fromElement) &&
            (bt(g) || g[tt]))
        )
          break A;
        if (
          (w || B) &&
          ((B =
            u.window === u
              ? u
              : (B = u.ownerDocument)
              ? B.defaultView || B.parentWindow
              : window),
          w
            ? ((g = t.relatedTarget || t.toElement),
              (w = l),
              (g = g ? bt(g) : null),
              g !== null &&
                ((F = nr(g)), g !== F || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((w = null), (g = l)),
          w !== g)
        ) {
          if (
            ((p = Xc),
            (Q = 'onMouseLeave'),
            (d = 'onMouseEnter'),
            (f = 'mouse'),
            (A === 'pointerout' || A === 'pointerover') &&
              ((p = Jc),
              (Q = 'onPointerLeave'),
              (d = 'onPointerEnter'),
              (f = 'pointer')),
            (F = w == null ? B : Qr(w)),
            (h = g == null ? B : Qr(g)),
            (B = new p(Q, f + 'leave', w, t, u)),
            (B.target = F),
            (B.relatedTarget = h),
            (Q = null),
            bt(u) === l &&
              ((p = new p(d, f + 'enter', g, t, u)),
              (p.target = h),
              (p.relatedTarget = F),
              (Q = p)),
            (F = Q),
            w && g)
          )
            e: {
              for (p = w, d = g, f = 0, h = p; h; h = ir(h)) f++;
              for (h = 0, Q = d; Q; Q = ir(Q)) h++;
              for (; 0 < f - h; ) (p = ir(p)), f--;
              for (; 0 < h - f; ) (d = ir(d)), h--;
              for (; f--; ) {
                if (p === d || (d !== null && p === d.alternate)) break e;
                (p = ir(p)), (d = ir(d));
              }
              p = null;
            }
          else p = null;
          w !== null && nf(c, B, w, p, !1),
            g !== null && F !== null && nf(c, F, g, p, !0);
        }
      }
      A: {
        if (
          ((B = l ? Qr(l) : window),
          (w = B.nodeName && B.nodeName.toLowerCase()),
          w === 'select' || (w === 'input' && B.type === 'file'))
        )
          var v = pQ;
        else if ($c(B))
          if (tg) v = UQ;
          else {
            v = QQ;
            var U = wQ;
          }
        else
          (w = B.nodeName) &&
            w.toLowerCase() === 'input' &&
            (B.type === 'checkbox' || B.type === 'radio') &&
            (v = CQ);
        if (v && (v = v(A, l))) {
          eg(c, v, t, u);
          break A;
        }
        U && U(A, B, l),
          A === 'focusout' &&
            (U = B._wrapperState) &&
            U.controlled &&
            B.type === 'number' &&
            Al(B, 'number', B.value);
      }
      switch (((U = l ? Qr(l) : window), A)) {
        case 'focusin':
          ($c(U) || U.contentEditable === 'true') &&
            ((pr = U), (fl = l), (Hn = null));
          break;
        case 'focusout':
          Hn = fl = pr = null;
          break;
        case 'mousedown':
          Bl = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Bl = !1), ef(c, t, u);
          break;
        case 'selectionchange':
          if (mQ) break;
        case 'keydown':
        case 'keyup':
          ef(c, t, u);
      }
      var y;
      if (Ou)
        A: {
          switch (A) {
            case 'compositionstart':
              var m = 'onCompositionStart';
              break A;
            case 'compositionend':
              m = 'onCompositionEnd';
              break A;
            case 'compositionupdate':
              m = 'onCompositionUpdate';
              break A;
          }
          m = void 0;
        }
      else
        hr
          ? qd(A, t) && (m = 'onCompositionEnd')
          : A === 'keydown' && t.keyCode === 229 && (m = 'onCompositionStart');
      m &&
        (Zd &&
          t.locale !== 'ko' &&
          (hr || m !== 'onCompositionStart'
            ? m === 'onCompositionEnd' && hr && (y = jd())
            : ((ht = u),
              (Tu = 'value' in ht ? ht.value : ht.textContent),
              (hr = !0))),
        (U = Lo(l, m)),
        0 < U.length &&
          ((m = new Wc(m, A, null, t, u)),
          c.push({ event: m, listeners: U }),
          y ? (m.data = y) : ((y = Ag(t)), y !== null && (m.data = y)))),
        (y = fQ ? BQ(A, t) : dQ(A, t)) &&
          ((l = Lo(l, 'onBeforeInput')),
          0 < l.length &&
            ((u = new Wc('onBeforeInput', 'beforeinput', null, t, u)),
            c.push({ event: u, listeners: l }),
            (u.data = y)));
    }
    fg(c, e);
  });
}
function zn(A, e, t) {
  return { instance: A, listener: e, currentTarget: t };
}
function Lo(A, e) {
  for (var t = e + 'Capture', r = []; A !== null; ) {
    var n = A,
      i = n.stateNode;
    n.tag === 5 &&
      i !== null &&
      ((n = i),
      (i = Pn(A, t)),
      i != null && r.unshift(zn(A, i, n)),
      (i = Pn(A, e)),
      i != null && r.push(zn(A, i, n))),
      (A = A.return);
  }
  return r;
}
function ir(A) {
  if (A === null) return null;
  do A = A.return;
  while (A && A.tag !== 5);
  return A || null;
}
function nf(A, e, t, r, n) {
  for (var i = e._reactName, o = []; t !== null && t !== r; ) {
    var s = t,
      a = s.alternate,
      l = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      l !== null &&
      ((s = l),
      n
        ? ((a = Pn(t, i)), a != null && o.unshift(zn(t, a, s)))
        : n || ((a = Pn(t, i)), a != null && o.push(zn(t, a, s)))),
      (t = t.return);
  }
  o.length !== 0 && A.push({ event: e, listeners: o });
}
var IQ = /\r\n?/g,
  SQ = /\u0000|\uFFFD/g;
function of(A) {
  return (typeof A == 'string' ? A : '' + A)
    .replace(
      IQ,
      `
`
    )
    .replace(SQ, '');
}
function Ei(A, e, t) {
  if (((e = of(e)), of(A) !== e && t)) throw Error(E(425));
}
function Ko() {}
var dl = null,
  gl = null;
function hl(A, e) {
  return (
    A === 'textarea' ||
    A === 'noscript' ||
    typeof e.children == 'string' ||
    typeof e.children == 'number' ||
    (typeof e.dangerouslySetInnerHTML == 'object' &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var pl = typeof setTimeout == 'function' ? setTimeout : void 0,
  xQ = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  sf = typeof Promise == 'function' ? Promise : void 0,
  LQ =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof sf < 'u'
      ? function (A) {
          return sf.resolve(null).then(A).catch(KQ);
        }
      : pl;
function KQ(A) {
  setTimeout(function () {
    throw A;
  });
}
function ua(A, e) {
  var t = e,
    r = 0;
  do {
    var n = t.nextSibling;
    if ((A.removeChild(t), n && n.nodeType === 8))
      if (((t = n.data), t === '/$')) {
        if (r === 0) {
          A.removeChild(n), bn(e);
          return;
        }
        r--;
      } else (t !== '$' && t !== '$?' && t !== '$!') || r++;
    t = n;
  } while (t);
  bn(e);
}
function yt(A) {
  for (; A != null; A = A.nextSibling) {
    var e = A.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = A.data), e === '$' || e === '$!' || e === '$?')) break;
      if (e === '/$') return null;
    }
  }
  return A;
}
function af(A) {
  A = A.previousSibling;
  for (var e = 0; A; ) {
    if (A.nodeType === 8) {
      var t = A.data;
      if (t === '$' || t === '$!' || t === '$?') {
        if (e === 0) return A;
        e--;
      } else t === '/$' && e++;
    }
    A = A.previousSibling;
  }
  return null;
}
var Yr = Math.random().toString(36).slice(2),
  Pe = '__reactFiber$' + Yr,
  Yn = '__reactProps$' + Yr,
  tt = '__reactContainer$' + Yr,
  wl = '__reactEvents$' + Yr,
  TQ = '__reactListeners$' + Yr,
  DQ = '__reactHandles$' + Yr;
function bt(A) {
  var e = A[Pe];
  if (e) return e;
  for (var t = A.parentNode; t; ) {
    if ((e = t[tt] || t[Pe])) {
      if (
        ((t = e.alternate),
        e.child !== null || (t !== null && t.child !== null))
      )
        for (A = af(A); A !== null; ) {
          if ((t = A[Pe])) return t;
          A = af(A);
        }
      return e;
    }
    (A = t), (t = A.parentNode);
  }
  return null;
}
function ui(A) {
  return (
    (A = A[Pe] || A[tt]),
    !A || (A.tag !== 5 && A.tag !== 6 && A.tag !== 13 && A.tag !== 3) ? null : A
  );
}
function Qr(A) {
  if (A.tag === 5 || A.tag === 6) return A.stateNode;
  throw Error(E(33));
}
function fs(A) {
  return A[Yn] || null;
}
var Ql = [],
  Cr = -1;
function Mt(A) {
  return { current: A };
}
function fA(A) {
  0 > Cr || ((A.current = Ql[Cr]), (Ql[Cr] = null), Cr--);
}
function lA(A, e) {
  Cr++, (Ql[Cr] = A.current), (A.current = e);
}
var kt = {},
  YA = Mt(kt),
  ie = Mt(!1),
  Zt = kt;
function Rr(A, e) {
  var t = A.type.contextTypes;
  if (!t) return kt;
  var r = A.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var n = {},
    i;
  for (i in t) n[i] = e[i];
  return (
    r &&
      ((A = A.stateNode),
      (A.__reactInternalMemoizedUnmaskedChildContext = e),
      (A.__reactInternalMemoizedMaskedChildContext = n)),
    n
  );
}
function oe(A) {
  return (A = A.childContextTypes), A != null;
}
function To() {
  fA(ie), fA(YA);
}
function lf(A, e, t) {
  if (YA.current !== kt) throw Error(E(168));
  lA(YA, e), lA(ie, t);
}
function dg(A, e, t) {
  var r = A.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != 'function'))
    return t;
  r = r.getChildContext();
  for (var n in r) if (!(n in e)) throw Error(E(108, ww(A) || 'Unknown', n));
  return wA({}, t, r);
}
function Do(A) {
  return (
    (A =
      ((A = A.stateNode) && A.__reactInternalMemoizedMergedChildContext) || kt),
    (Zt = YA.current),
    lA(YA, A),
    lA(ie, ie.current),
    !0
  );
}
function uf(A, e, t) {
  var r = A.stateNode;
  if (!r) throw Error(E(169));
  t
    ? ((A = dg(A, e, Zt)),
      (r.__reactInternalMemoizedMergedChildContext = A),
      fA(ie),
      fA(YA),
      lA(YA, A))
    : fA(ie),
    lA(ie, t);
}
var Ye = null,
  Bs = !1,
  ca = !1;
function gg(A) {
  Ye === null ? (Ye = [A]) : Ye.push(A);
}
function kQ(A) {
  (Bs = !0), gg(A);
}
function Nt() {
  if (!ca && Ye !== null) {
    ca = !0;
    var A = 0,
      e = iA;
    try {
      var t = Ye;
      for (iA = 1; A < t.length; A++) {
        var r = t[A];
        do r = r(!0);
        while (r !== null);
      }
      (Ye = null), (Bs = !1);
    } catch (n) {
      throw (Ye !== null && (Ye = Ye.slice(A + 1)), _d(Su, Nt), n);
    } finally {
      (iA = e), (ca = !1);
    }
  }
  return null;
}
var Ur = [],
  vr = 0,
  ko = null,
  Oo = 0,
  we = [],
  Qe = 0,
  qt = null,
  $e = 1,
  je = '';
function Pt(A, e) {
  (Ur[vr++] = Oo), (Ur[vr++] = ko), (ko = A), (Oo = e);
}
function hg(A, e, t) {
  (we[Qe++] = $e), (we[Qe++] = je), (we[Qe++] = qt), (qt = A);
  var r = $e;
  A = je;
  var n = 32 - De(r) - 1;
  (r &= ~(1 << n)), (t += 1);
  var i = 32 - De(e) + n;
  if (30 < i) {
    var o = n - (n % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (n -= o),
      ($e = (1 << (32 - De(e) + n)) | (t << n) | r),
      (je = i + A);
  } else ($e = (1 << i) | (t << n) | r), (je = A);
}
function Mu(A) {
  A.return !== null && (Pt(A, 1), hg(A, 1, 0));
}
function Nu(A) {
  for (; A === ko; )
    (ko = Ur[--vr]), (Ur[vr] = null), (Oo = Ur[--vr]), (Ur[vr] = null);
  for (; A === qt; )
    (qt = we[--Qe]),
      (we[Qe] = null),
      (je = we[--Qe]),
      (we[Qe] = null),
      ($e = we[--Qe]),
      (we[Qe] = null);
}
var fe = null,
  ce = null,
  gA = !1,
  Te = null;
function pg(A, e) {
  var t = ve(5, null, null, 0);
  (t.elementType = 'DELETED'),
    (t.stateNode = e),
    (t.return = A),
    (e = A.deletions),
    e === null ? ((A.deletions = [t]), (A.flags |= 16)) : e.push(t);
}
function cf(A, e) {
  switch (A.tag) {
    case 5:
      var t = A.type;
      return (
        (e =
          e.nodeType !== 1 || t.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((A.stateNode = e), (fe = A), (ce = yt(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = A.pendingProps === '' || e.nodeType !== 3 ? null : e),
        e !== null ? ((A.stateNode = e), (fe = A), (ce = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((t = qt !== null ? { id: $e, overflow: je } : null),
            (A.memoizedState = {
              dehydrated: e,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = ve(18, null, null, 0)),
            (t.stateNode = e),
            (t.return = A),
            (A.child = t),
            (fe = A),
            (ce = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Cl(A) {
  return (A.mode & 1) !== 0 && (A.flags & 128) === 0;
}
function Ul(A) {
  if (gA) {
    var e = ce;
    if (e) {
      var t = e;
      if (!cf(A, e)) {
        if (Cl(A)) throw Error(E(418));
        e = yt(t.nextSibling);
        var r = fe;
        e && cf(A, e)
          ? pg(r, t)
          : ((A.flags = (A.flags & -4097) | 2), (gA = !1), (fe = A));
      }
    } else {
      if (Cl(A)) throw Error(E(418));
      (A.flags = (A.flags & -4097) | 2), (gA = !1), (fe = A);
    }
  }
}
function ff(A) {
  for (A = A.return; A !== null && A.tag !== 5 && A.tag !== 3 && A.tag !== 13; )
    A = A.return;
  fe = A;
}
function Hi(A) {
  if (A !== fe) return !1;
  if (!gA) return ff(A), (gA = !0), !1;
  var e;
  if (
    ((e = A.tag !== 3) &&
      !(e = A.tag !== 5) &&
      ((e = A.type),
      (e = e !== 'head' && e !== 'body' && !hl(A.type, A.memoizedProps))),
    e && (e = ce))
  ) {
    if (Cl(A)) throw (wg(), Error(E(418)));
    for (; e; ) pg(A, e), (e = yt(e.nextSibling));
  }
  if ((ff(A), A.tag === 13)) {
    if (((A = A.memoizedState), (A = A !== null ? A.dehydrated : null), !A))
      throw Error(E(317));
    A: {
      for (A = A.nextSibling, e = 0; A; ) {
        if (A.nodeType === 8) {
          var t = A.data;
          if (t === '/$') {
            if (e === 0) {
              ce = yt(A.nextSibling);
              break A;
            }
            e--;
          } else (t !== '$' && t !== '$!' && t !== '$?') || e++;
        }
        A = A.nextSibling;
      }
      ce = null;
    }
  } else ce = fe ? yt(A.stateNode.nextSibling) : null;
  return !0;
}
function wg() {
  for (var A = ce; A; ) A = yt(A.nextSibling);
}
function Mr() {
  (ce = fe = null), (gA = !1);
}
function _u(A) {
  Te === null ? (Te = [A]) : Te.push(A);
}
var OQ = ot.ReactCurrentBatchConfig;
function Le(A, e) {
  if (A && A.defaultProps) {
    (e = wA({}, e)), (A = A.defaultProps);
    for (var t in A) e[t] === void 0 && (e[t] = A[t]);
    return e;
  }
  return e;
}
var Ro = Mt(null),
  Mo = null,
  Fr = null,
  Pu = null;
function Vu() {
  Pu = Fr = Mo = null;
}
function Gu(A) {
  var e = Ro.current;
  fA(Ro), (A._currentValue = e);
}
function vl(A, e, t) {
  for (; A !== null; ) {
    var r = A.alternate;
    if (
      ((A.childLanes & e) !== e
        ? ((A.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      A === t)
    )
      break;
    A = A.return;
  }
}
function Kr(A, e) {
  (Mo = A),
    (Pu = Fr = null),
    (A = A.dependencies),
    A !== null &&
      A.firstContext !== null &&
      (A.lanes & e && (ne = !0), (A.firstContext = null));
}
function Ee(A) {
  var e = A._currentValue;
  if (Pu !== A)
    if (((A = { context: A, memoizedValue: e, next: null }), Fr === null)) {
      if (Mo === null) throw Error(E(308));
      (Fr = A), (Mo.dependencies = { lanes: 0, firstContext: A });
    } else Fr = Fr.next = A;
  return e;
}
var Xt = null;
function bu(A) {
  Xt === null ? (Xt = [A]) : Xt.push(A);
}
function Qg(A, e, t, r) {
  var n = e.interleaved;
  return (
    n === null ? ((t.next = t), bu(e)) : ((t.next = n.next), (n.next = t)),
    (e.interleaved = t),
    rt(A, r)
  );
}
function rt(A, e) {
  A.lanes |= e;
  var t = A.alternate;
  for (t !== null && (t.lanes |= e), t = A, A = A.return; A !== null; )
    (A.childLanes |= e),
      (t = A.alternate),
      t !== null && (t.childLanes |= e),
      (t = A),
      (A = A.return);
  return t.tag === 3 ? t.stateNode : null;
}
var ft = !1;
function Xu(A) {
  A.updateQueue = {
    baseState: A.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Cg(A, e) {
  (A = A.updateQueue),
    e.updateQueue === A &&
      (e.updateQueue = {
        baseState: A.baseState,
        firstBaseUpdate: A.firstBaseUpdate,
        lastBaseUpdate: A.lastBaseUpdate,
        shared: A.shared,
        effects: A.effects,
      });
}
function qe(A, e) {
  return {
    eventTime: A,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Et(A, e, t) {
  var r = A.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), j & 2)) {
    var n = r.pending;
    return (
      n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (r.pending = e),
      rt(A, t)
    );
  }
  return (
    (n = r.interleaved),
    n === null ? ((e.next = e), bu(r)) : ((e.next = n.next), (n.next = e)),
    (r.interleaved = e),
    rt(A, t)
  );
}
function lo(A, e, t) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (t & 4194240) !== 0))
  ) {
    var r = e.lanes;
    (r &= A.pendingLanes), (t |= r), (e.lanes = t), xu(A, t);
  }
}
function Bf(A, e) {
  var t = A.updateQueue,
    r = A.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var n = null,
      i = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var o = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        i === null ? (n = i = o) : (i = i.next = o), (t = t.next);
      } while (t !== null);
      i === null ? (n = i = e) : (i = i.next = e);
    } else n = i = e;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: n,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (A.updateQueue = t);
    return;
  }
  (A = t.lastBaseUpdate),
    A === null ? (t.firstBaseUpdate = e) : (A.next = e),
    (t.lastBaseUpdate = e);
}
function No(A, e, t, r) {
  var n = A.updateQueue;
  ft = !1;
  var i = n.firstBaseUpdate,
    o = n.lastBaseUpdate,
    s = n.shared.pending;
  if (s !== null) {
    n.shared.pending = null;
    var a = s,
      l = a.next;
    (a.next = null), o === null ? (i = l) : (o.next = l), (o = a);
    var u = A.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (s = u.lastBaseUpdate),
      s !== o &&
        (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
        (u.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var c = n.baseState;
    (o = 0), (u = l = a = null), (s = i);
    do {
      var B = s.lane,
        w = s.eventTime;
      if ((r & B) === B) {
        u !== null &&
          (u = u.next =
            {
              eventTime: w,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        A: {
          var g = A,
            p = s;
          switch (((B = e), (w = t), p.tag)) {
            case 1:
              if (((g = p.payload), typeof g == 'function')) {
                c = g.call(w, c, B);
                break A;
              }
              c = g;
              break A;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = p.payload),
                (B = typeof g == 'function' ? g.call(w, c, B) : g),
                B == null)
              )
                break A;
              c = wA({}, c, B);
              break A;
            case 2:
              ft = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((A.flags |= 64),
          (B = n.effects),
          B === null ? (n.effects = [s]) : B.push(s));
      } else
        (w = {
          eventTime: w,
          lane: B,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          u === null ? ((l = u = w), (a = c)) : (u = u.next = w),
          (o |= B);
      if (((s = s.next), s === null)) {
        if (((s = n.shared.pending), s === null)) break;
        (B = s),
          (s = B.next),
          (B.next = null),
          (n.lastBaseUpdate = B),
          (n.shared.pending = null);
      }
    } while (1);
    if (
      (u === null && (a = c),
      (n.baseState = a),
      (n.firstBaseUpdate = l),
      (n.lastBaseUpdate = u),
      (e = n.shared.interleaved),
      e !== null)
    ) {
      n = e;
      do (o |= n.lane), (n = n.next);
      while (n !== e);
    } else i === null && (n.shared.lanes = 0);
    (er |= o), (A.lanes = o), (A.memoizedState = c);
  }
}
function df(A, e, t) {
  if (((A = e.effects), (e.effects = null), A !== null))
    for (e = 0; e < A.length; e++) {
      var r = A[e],
        n = r.callback;
      if (n !== null) {
        if (((r.callback = null), (r = t), typeof n != 'function'))
          throw Error(E(191, n));
        n.call(r);
      }
    }
}
var Ug = new Qd.Component().refs;
function Fl(A, e, t, r) {
  (e = A.memoizedState),
    (t = t(r, e)),
    (t = t == null ? e : wA({}, e, t)),
    (A.memoizedState = t),
    A.lanes === 0 && (A.updateQueue.baseState = t);
}
var ds = {
  isMounted: function (A) {
    return (A = A._reactInternals) ? nr(A) === A : !1;
  },
  enqueueSetState: function (A, e, t) {
    A = A._reactInternals;
    var r = ZA(),
      n = It(A),
      i = qe(r, n);
    (i.payload = e),
      t != null && (i.callback = t),
      (e = Et(A, i, n)),
      e !== null && (ke(e, A, n, r), lo(e, A, n));
  },
  enqueueReplaceState: function (A, e, t) {
    A = A._reactInternals;
    var r = ZA(),
      n = It(A),
      i = qe(r, n);
    (i.tag = 1),
      (i.payload = e),
      t != null && (i.callback = t),
      (e = Et(A, i, n)),
      e !== null && (ke(e, A, n, r), lo(e, A, n));
  },
  enqueueForceUpdate: function (A, e) {
    A = A._reactInternals;
    var t = ZA(),
      r = It(A),
      n = qe(t, r);
    (n.tag = 2),
      e != null && (n.callback = e),
      (e = Et(A, n, r)),
      e !== null && (ke(e, A, r, t), lo(e, A, r));
  },
};
function gf(A, e, t, r, n, i, o) {
  return (
    (A = A.stateNode),
    typeof A.shouldComponentUpdate == 'function'
      ? A.shouldComponentUpdate(r, i, o)
      : e.prototype && e.prototype.isPureReactComponent
      ? !Wn(t, r) || !Wn(n, i)
      : !0
  );
}
function vg(A, e, t) {
  var r = !1,
    n = kt,
    i = e.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Ee(i))
      : ((n = oe(e) ? Zt : YA.current),
        (r = e.contextTypes),
        (i = (r = r != null) ? Rr(A, n) : kt)),
    (e = new e(t, i)),
    (A.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = ds),
    (A.stateNode = e),
    (e._reactInternals = A),
    r &&
      ((A = A.stateNode),
      (A.__reactInternalMemoizedUnmaskedChildContext = n),
      (A.__reactInternalMemoizedMaskedChildContext = i)),
    e
  );
}
function hf(A, e, t, r) {
  (A = e.state),
    typeof e.componentWillReceiveProps == 'function' &&
      e.componentWillReceiveProps(t, r),
    typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
      e.UNSAFE_componentWillReceiveProps(t, r),
    e.state !== A && ds.enqueueReplaceState(e, e.state, null);
}
function ml(A, e, t, r) {
  var n = A.stateNode;
  (n.props = t), (n.state = A.memoizedState), (n.refs = Ug), Xu(A);
  var i = e.contextType;
  typeof i == 'object' && i !== null
    ? (n.context = Ee(i))
    : ((i = oe(e) ? Zt : YA.current), (n.context = Rr(A, i))),
    (n.state = A.memoizedState),
    (i = e.getDerivedStateFromProps),
    typeof i == 'function' && (Fl(A, e, i, t), (n.state = A.memoizedState)),
    typeof e.getDerivedStateFromProps == 'function' ||
      typeof n.getSnapshotBeforeUpdate == 'function' ||
      (typeof n.UNSAFE_componentWillMount != 'function' &&
        typeof n.componentWillMount != 'function') ||
      ((e = n.state),
      typeof n.componentWillMount == 'function' && n.componentWillMount(),
      typeof n.UNSAFE_componentWillMount == 'function' &&
        n.UNSAFE_componentWillMount(),
      e !== n.state && ds.enqueueReplaceState(n, n.state, null),
      No(A, t, n, r),
      (n.state = A.memoizedState)),
    typeof n.componentDidMount == 'function' && (A.flags |= 4194308);
}
function nn(A, e, t) {
  if (
    ((A = t.ref), A !== null && typeof A != 'function' && typeof A != 'object')
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(E(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(E(147, A));
      var n = r,
        i = '' + A;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == 'function' &&
        e.ref._stringRef === i
        ? e.ref
        : ((e = function (o) {
            var s = n.refs;
            s === Ug && (s = n.refs = {}),
              o === null ? delete s[i] : (s[i] = o);
          }),
          (e._stringRef = i),
          e);
    }
    if (typeof A != 'string') throw Error(E(284));
    if (!t._owner) throw Error(E(290, A));
  }
  return A;
}
function Ii(A, e) {
  throw (
    ((A = Object.prototype.toString.call(e)),
    Error(
      E(
        31,
        A === '[object Object]'
          ? 'object with keys {' + Object.keys(e).join(', ') + '}'
          : A
      )
    ))
  );
}
function pf(A) {
  var e = A._init;
  return e(A._payload);
}
function Fg(A) {
  function e(d, f) {
    if (A) {
      var h = d.deletions;
      h === null ? ((d.deletions = [f]), (d.flags |= 16)) : h.push(f);
    }
  }
  function t(d, f) {
    if (!A) return null;
    for (; f !== null; ) e(d, f), (f = f.sibling);
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function n(d, f) {
    return (d = St(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function i(d, f, h) {
    return (
      (d.index = h),
      A
        ? ((h = d.alternate),
          h !== null
            ? ((h = h.index), h < f ? ((d.flags |= 2), f) : h)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function o(d) {
    return A && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, f, h, Q) {
    return f === null || f.tag !== 6
      ? ((f = wa(h, d.mode, Q)), (f.return = d), f)
      : ((f = n(f, h)), (f.return = d), f);
  }
  function a(d, f, h, Q) {
    var v = h.type;
    return v === gr
      ? u(d, f, h.props.children, Q, h.key)
      : f !== null &&
        (f.elementType === v ||
          (typeof v == 'object' &&
            v !== null &&
            v.$$typeof === ct &&
            pf(v) === f.type))
      ? ((Q = n(f, h.props)), (Q.ref = nn(d, f, h)), (Q.return = d), Q)
      : ((Q = ho(h.type, h.key, h.props, null, d.mode, Q)),
        (Q.ref = nn(d, f, h)),
        (Q.return = d),
        Q);
  }
  function l(d, f, h, Q) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = Qa(h, d.mode, Q)), (f.return = d), f)
      : ((f = n(f, h.children || [])), (f.return = d), f);
  }
  function u(d, f, h, Q, v) {
    return f === null || f.tag !== 7
      ? ((f = Yt(h, d.mode, Q, v)), (f.return = d), f)
      : ((f = n(f, h)), (f.return = d), f);
  }
  function c(d, f, h) {
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return (f = wa('' + f, d.mode, h)), (f.return = d), f;
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case pi:
          return (
            (h = ho(f.type, f.key, f.props, null, d.mode, h)),
            (h.ref = nn(d, null, f)),
            (h.return = d),
            h
          );
        case dr:
          return (f = Qa(f, d.mode, h)), (f.return = d), f;
        case ct:
          var Q = f._init;
          return c(d, Q(f._payload), h);
      }
      if (Bn(f) || qr(f))
        return (f = Yt(f, d.mode, h, null)), (f.return = d), f;
      Ii(d, f);
    }
    return null;
  }
  function B(d, f, h, Q) {
    var v = f !== null ? f.key : null;
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return v !== null ? null : s(d, f, '' + h, Q);
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case pi:
          return h.key === v ? a(d, f, h, Q) : null;
        case dr:
          return h.key === v ? l(d, f, h, Q) : null;
        case ct:
          return (v = h._init), B(d, f, v(h._payload), Q);
      }
      if (Bn(h) || qr(h)) return v !== null ? null : u(d, f, h, Q, null);
      Ii(d, h);
    }
    return null;
  }
  function w(d, f, h, Q, v) {
    if ((typeof Q == 'string' && Q !== '') || typeof Q == 'number')
      return (d = d.get(h) || null), s(f, d, '' + Q, v);
    if (typeof Q == 'object' && Q !== null) {
      switch (Q.$$typeof) {
        case pi:
          return (d = d.get(Q.key === null ? h : Q.key) || null), a(f, d, Q, v);
        case dr:
          return (d = d.get(Q.key === null ? h : Q.key) || null), l(f, d, Q, v);
        case ct:
          var U = Q._init;
          return w(d, f, h, U(Q._payload), v);
      }
      if (Bn(Q) || qr(Q)) return (d = d.get(h) || null), u(f, d, Q, v, null);
      Ii(f, Q);
    }
    return null;
  }
  function g(d, f, h, Q) {
    for (
      var v = null, U = null, y = f, m = (f = 0), x = null;
      y !== null && m < h.length;
      m++
    ) {
      y.index > m ? ((x = y), (y = null)) : (x = y.sibling);
      var R = B(d, y, h[m], Q);
      if (R === null) {
        y === null && (y = x);
        break;
      }
      A && y && R.alternate === null && e(d, y),
        (f = i(R, f, m)),
        U === null ? (v = R) : (U.sibling = R),
        (U = R),
        (y = x);
    }
    if (m === h.length) return t(d, y), gA && Pt(d, m), v;
    if (y === null) {
      for (; m < h.length; m++)
        (y = c(d, h[m], Q)),
          y !== null &&
            ((f = i(y, f, m)), U === null ? (v = y) : (U.sibling = y), (U = y));
      return gA && Pt(d, m), v;
    }
    for (y = r(d, y); m < h.length; m++)
      (x = w(y, d, m, h[m], Q)),
        x !== null &&
          (A && x.alternate !== null && y.delete(x.key === null ? m : x.key),
          (f = i(x, f, m)),
          U === null ? (v = x) : (U.sibling = x),
          (U = x));
    return (
      A &&
        y.forEach(function (Y) {
          return e(d, Y);
        }),
      gA && Pt(d, m),
      v
    );
  }
  function p(d, f, h, Q) {
    var v = qr(h);
    if (typeof v != 'function') throw Error(E(150));
    if (((h = v.call(h)), h == null)) throw Error(E(151));
    for (
      var U = (v = null), y = f, m = (f = 0), x = null, R = h.next();
      y !== null && !R.done;
      m++, R = h.next()
    ) {
      y.index > m ? ((x = y), (y = null)) : (x = y.sibling);
      var Y = B(d, y, R.value, Q);
      if (Y === null) {
        y === null && (y = x);
        break;
      }
      A && y && Y.alternate === null && e(d, y),
        (f = i(Y, f, m)),
        U === null ? (v = Y) : (U.sibling = Y),
        (U = Y),
        (y = x);
    }
    if (R.done) return t(d, y), gA && Pt(d, m), v;
    if (y === null) {
      for (; !R.done; m++, R = h.next())
        (R = c(d, R.value, Q)),
          R !== null &&
            ((f = i(R, f, m)), U === null ? (v = R) : (U.sibling = R), (U = R));
      return gA && Pt(d, m), v;
    }
    for (y = r(d, y); !R.done; m++, R = h.next())
      (R = w(y, d, m, R.value, Q)),
        R !== null &&
          (A && R.alternate !== null && y.delete(R.key === null ? m : R.key),
          (f = i(R, f, m)),
          U === null ? (v = R) : (U.sibling = R),
          (U = R));
    return (
      A &&
        y.forEach(function ($) {
          return e(d, $);
        }),
      gA && Pt(d, m),
      v
    );
  }
  function F(d, f, h, Q) {
    if (
      (typeof h == 'object' &&
        h !== null &&
        h.type === gr &&
        h.key === null &&
        (h = h.props.children),
      typeof h == 'object' && h !== null)
    ) {
      switch (h.$$typeof) {
        case pi:
          A: {
            for (var v = h.key, U = f; U !== null; ) {
              if (U.key === v) {
                if (((v = h.type), v === gr)) {
                  if (U.tag === 7) {
                    t(d, U.sibling),
                      (f = n(U, h.props.children)),
                      (f.return = d),
                      (d = f);
                    break A;
                  }
                } else if (
                  U.elementType === v ||
                  (typeof v == 'object' &&
                    v !== null &&
                    v.$$typeof === ct &&
                    pf(v) === U.type)
                ) {
                  t(d, U.sibling),
                    (f = n(U, h.props)),
                    (f.ref = nn(d, U, h)),
                    (f.return = d),
                    (d = f);
                  break A;
                }
                t(d, U);
                break;
              } else e(d, U);
              U = U.sibling;
            }
            h.type === gr
              ? ((f = Yt(h.props.children, d.mode, Q, h.key)),
                (f.return = d),
                (d = f))
              : ((Q = ho(h.type, h.key, h.props, null, d.mode, Q)),
                (Q.ref = nn(d, f, h)),
                (Q.return = d),
                (d = Q));
          }
          return o(d);
        case dr:
          A: {
            for (U = h.key; f !== null; ) {
              if (f.key === U)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === h.containerInfo &&
                  f.stateNode.implementation === h.implementation
                ) {
                  t(d, f.sibling),
                    (f = n(f, h.children || [])),
                    (f.return = d),
                    (d = f);
                  break A;
                } else {
                  t(d, f);
                  break;
                }
              else e(d, f);
              f = f.sibling;
            }
            (f = Qa(h, d.mode, Q)), (f.return = d), (d = f);
          }
          return o(d);
        case ct:
          return (U = h._init), F(d, f, U(h._payload), Q);
      }
      if (Bn(h)) return g(d, f, h, Q);
      if (qr(h)) return p(d, f, h, Q);
      Ii(d, h);
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number'
      ? ((h = '' + h),
        f !== null && f.tag === 6
          ? (t(d, f.sibling), (f = n(f, h)), (f.return = d), (d = f))
          : (t(d, f), (f = wa(h, d.mode, Q)), (f.return = d), (d = f)),
        o(d))
      : t(d, f);
  }
  return F;
}
var Nr = Fg(!0),
  mg = Fg(!1),
  ci = {},
  Ge = Mt(ci),
  $n = Mt(ci),
  jn = Mt(ci);
function Wt(A) {
  if (A === ci) throw Error(E(174));
  return A;
}
function Wu(A, e) {
  switch ((lA(jn, e), lA($n, A), lA(Ge, ci), (A = e.nodeType), A)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : tl(null, '');
      break;
    default:
      (A = A === 8 ? e.parentNode : e),
        (e = A.namespaceURI || null),
        (A = A.tagName),
        (e = tl(e, A));
  }
  fA(Ge), lA(Ge, e);
}
function _r() {
  fA(Ge), fA($n), fA(jn);
}
function yg(A) {
  Wt(jn.current);
  var e = Wt(Ge.current),
    t = tl(e, A.type);
  e !== t && (lA($n, A), lA(Ge, t));
}
function Ju(A) {
  $n.current === A && (fA(Ge), fA($n));
}
var hA = Mt(0);
function _o(A) {
  for (var e = A; e !== null; ) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === '$?' || t.data === '$!')
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === A) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === A) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var fa = [];
function zu() {
  for (var A = 0; A < fa.length; A++)
    fa[A]._workInProgressVersionPrimary = null;
  fa.length = 0;
}
var uo = ot.ReactCurrentDispatcher,
  Ba = ot.ReactCurrentBatchConfig,
  Ar = 0,
  pA = null,
  HA = null,
  LA = null,
  Po = !1,
  In = !1,
  Zn = 0,
  RQ = 0;
function bA() {
  throw Error(E(321));
}
function Yu(A, e) {
  if (e === null) return !1;
  for (var t = 0; t < e.length && t < A.length; t++)
    if (!Oe(A[t], e[t])) return !1;
  return !0;
}
function $u(A, e, t, r, n, i) {
  if (
    ((Ar = i),
    (pA = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (uo.current = A === null || A.memoizedState === null ? PQ : VQ),
    (A = t(r, n)),
    In)
  ) {
    i = 0;
    do {
      if (((In = !1), (Zn = 0), 25 <= i)) throw Error(E(301));
      (i += 1),
        (LA = HA = null),
        (e.updateQueue = null),
        (uo.current = GQ),
        (A = t(r, n));
    } while (In);
  }
  if (
    ((uo.current = Vo),
    (e = HA !== null && HA.next !== null),
    (Ar = 0),
    (LA = HA = pA = null),
    (Po = !1),
    e)
  )
    throw Error(E(300));
  return A;
}
function ju() {
  var A = Zn !== 0;
  return (Zn = 0), A;
}
function _e() {
  var A = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return LA === null ? (pA.memoizedState = LA = A) : (LA = LA.next = A), LA;
}
function He() {
  if (HA === null) {
    var A = pA.alternate;
    A = A !== null ? A.memoizedState : null;
  } else A = HA.next;
  var e = LA === null ? pA.memoizedState : LA.next;
  if (e !== null) (LA = e), (HA = A);
  else {
    if (A === null) throw Error(E(310));
    (HA = A),
      (A = {
        memoizedState: HA.memoizedState,
        baseState: HA.baseState,
        baseQueue: HA.baseQueue,
        queue: HA.queue,
        next: null,
      }),
      LA === null ? (pA.memoizedState = LA = A) : (LA = LA.next = A);
  }
  return LA;
}
function qn(A, e) {
  return typeof e == 'function' ? e(A) : e;
}
function da(A) {
  var e = He(),
    t = e.queue;
  if (t === null) throw Error(E(311));
  t.lastRenderedReducer = A;
  var r = HA,
    n = r.baseQueue,
    i = t.pending;
  if (i !== null) {
    if (n !== null) {
      var o = n.next;
      (n.next = i.next), (i.next = o);
    }
    (r.baseQueue = n = i), (t.pending = null);
  }
  if (n !== null) {
    (i = n.next), (r = r.baseState);
    var s = (o = null),
      a = null,
      l = i;
    do {
      var u = l.lane;
      if ((Ar & u) === u)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: l.action,
              hasEagerState: l.hasEagerState,
              eagerState: l.eagerState,
              next: null,
            }),
          (r = l.hasEagerState ? l.eagerState : A(r, l.action));
      else {
        var c = {
          lane: u,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null,
        };
        a === null ? ((s = a = c), (o = r)) : (a = a.next = c),
          (pA.lanes |= u),
          (er |= u);
      }
      l = l.next;
    } while (l !== null && l !== i);
    a === null ? (o = r) : (a.next = s),
      Oe(r, e.memoizedState) || (ne = !0),
      (e.memoizedState = r),
      (e.baseState = o),
      (e.baseQueue = a),
      (t.lastRenderedState = r);
  }
  if (((A = t.interleaved), A !== null)) {
    n = A;
    do (i = n.lane), (pA.lanes |= i), (er |= i), (n = n.next);
    while (n !== A);
  } else n === null && (t.lanes = 0);
  return [e.memoizedState, t.dispatch];
}
function ga(A) {
  var e = He(),
    t = e.queue;
  if (t === null) throw Error(E(311));
  t.lastRenderedReducer = A;
  var r = t.dispatch,
    n = t.pending,
    i = e.memoizedState;
  if (n !== null) {
    t.pending = null;
    var o = (n = n.next);
    do (i = A(i, o.action)), (o = o.next);
    while (o !== n);
    Oe(i, e.memoizedState) || (ne = !0),
      (e.memoizedState = i),
      e.baseQueue === null && (e.baseState = i),
      (t.lastRenderedState = i);
  }
  return [i, r];
}
function Eg() {}
function Hg(A, e) {
  var t = pA,
    r = He(),
    n = e(),
    i = !Oe(r.memoizedState, n);
  if (
    (i && ((r.memoizedState = n), (ne = !0)),
    (r = r.queue),
    Zu(xg.bind(null, t, r, A), [A]),
    r.getSnapshot !== e || i || (LA !== null && LA.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      Ai(9, Sg.bind(null, t, r, n, e), void 0, null),
      KA === null)
    )
      throw Error(E(349));
    Ar & 30 || Ig(t, e, n);
  }
  return n;
}
function Ig(A, e, t) {
  (A.flags |= 16384),
    (A = { getSnapshot: e, value: t }),
    (e = pA.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (pA.updateQueue = e),
        (e.stores = [A]))
      : ((t = e.stores), t === null ? (e.stores = [A]) : t.push(A));
}
function Sg(A, e, t, r) {
  (e.value = t), (e.getSnapshot = r), Lg(e) && Kg(A);
}
function xg(A, e, t) {
  return t(function () {
    Lg(e) && Kg(A);
  });
}
function Lg(A) {
  var e = A.getSnapshot;
  A = A.value;
  try {
    var t = e();
    return !Oe(A, t);
  } catch {
    return !0;
  }
}
function Kg(A) {
  var e = rt(A, 1);
  e !== null && ke(e, A, 1, -1);
}
function wf(A) {
  var e = _e();
  return (
    typeof A == 'function' && (A = A()),
    (e.memoizedState = e.baseState = A),
    (A = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qn,
      lastRenderedState: A,
    }),
    (e.queue = A),
    (A = A.dispatch = _Q.bind(null, pA, A)),
    [e.memoizedState, A]
  );
}
function Ai(A, e, t, r) {
  return (
    (A = { tag: A, create: e, destroy: t, deps: r, next: null }),
    (e = pA.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (pA.updateQueue = e),
        (e.lastEffect = A.next = A))
      : ((t = e.lastEffect),
        t === null
          ? (e.lastEffect = A.next = A)
          : ((r = t.next), (t.next = A), (A.next = r), (e.lastEffect = A))),
    A
  );
}
function Tg() {
  return He().memoizedState;
}
function co(A, e, t, r) {
  var n = _e();
  (pA.flags |= A),
    (n.memoizedState = Ai(1 | e, t, void 0, r === void 0 ? null : r));
}
function gs(A, e, t, r) {
  var n = He();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (HA !== null) {
    var o = HA.memoizedState;
    if (((i = o.destroy), r !== null && Yu(r, o.deps))) {
      n.memoizedState = Ai(e, t, i, r);
      return;
    }
  }
  (pA.flags |= A), (n.memoizedState = Ai(1 | e, t, i, r));
}
function Qf(A, e) {
  return co(8390656, 8, A, e);
}
function Zu(A, e) {
  return gs(2048, 8, A, e);
}
function Dg(A, e) {
  return gs(4, 2, A, e);
}
function kg(A, e) {
  return gs(4, 4, A, e);
}
function Og(A, e) {
  if (typeof e == 'function')
    return (
      (A = A()),
      e(A),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (A = A()),
      (e.current = A),
      function () {
        e.current = null;
      }
    );
}
function Rg(A, e, t) {
  return (
    (t = t != null ? t.concat([A]) : null), gs(4, 4, Og.bind(null, e, A), t)
  );
}
function qu() {}
function Mg(A, e) {
  var t = He();
  e = e === void 0 ? null : e;
  var r = t.memoizedState;
  return r !== null && e !== null && Yu(e, r[1])
    ? r[0]
    : ((t.memoizedState = [A, e]), A);
}
function Ng(A, e) {
  var t = He();
  e = e === void 0 ? null : e;
  var r = t.memoizedState;
  return r !== null && e !== null && Yu(e, r[1])
    ? r[0]
    : ((A = A()), (t.memoizedState = [A, e]), A);
}
function _g(A, e, t) {
  return Ar & 21
    ? (Oe(t, e) || ((t = Gd()), (pA.lanes |= t), (er |= t), (A.baseState = !0)),
      e)
    : (A.baseState && ((A.baseState = !1), (ne = !0)), (A.memoizedState = t));
}
function MQ(A, e) {
  var t = iA;
  (iA = t !== 0 && 4 > t ? t : 4), A(!0);
  var r = Ba.transition;
  Ba.transition = {};
  try {
    A(!1), e();
  } finally {
    (iA = t), (Ba.transition = r);
  }
}
function Pg() {
  return He().memoizedState;
}
function NQ(A, e, t) {
  var r = It(A);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Vg(A))
  )
    Gg(e, t);
  else if (((t = Qg(A, e, t, r)), t !== null)) {
    var n = ZA();
    ke(t, A, r, n), bg(t, e, r);
  }
}
function _Q(A, e, t) {
  var r = It(A),
    n = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Vg(A)) Gg(e, n);
  else {
    var i = A.alternate;
    if (
      A.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = e.lastRenderedReducer), i !== null)
    )
      try {
        var o = e.lastRenderedState,
          s = i(o, t);
        if (((n.hasEagerState = !0), (n.eagerState = s), Oe(s, o))) {
          var a = e.interleaved;
          a === null
            ? ((n.next = n), bu(e))
            : ((n.next = a.next), (a.next = n)),
            (e.interleaved = n);
          return;
        }
      } catch {
      } finally {
      }
    (t = Qg(A, e, n, r)),
      t !== null && ((n = ZA()), ke(t, A, r, n), bg(t, e, r));
  }
}
function Vg(A) {
  var e = A.alternate;
  return A === pA || (e !== null && e === pA);
}
function Gg(A, e) {
  In = Po = !0;
  var t = A.pending;
  t === null ? (e.next = e) : ((e.next = t.next), (t.next = e)),
    (A.pending = e);
}
function bg(A, e, t) {
  if (t & 4194240) {
    var r = e.lanes;
    (r &= A.pendingLanes), (t |= r), (e.lanes = t), xu(A, t);
  }
}
var Vo = {
    readContext: Ee,
    useCallback: bA,
    useContext: bA,
    useEffect: bA,
    useImperativeHandle: bA,
    useInsertionEffect: bA,
    useLayoutEffect: bA,
    useMemo: bA,
    useReducer: bA,
    useRef: bA,
    useState: bA,
    useDebugValue: bA,
    useDeferredValue: bA,
    useTransition: bA,
    useMutableSource: bA,
    useSyncExternalStore: bA,
    useId: bA,
    unstable_isNewReconciler: !1,
  },
  PQ = {
    readContext: Ee,
    useCallback: function (A, e) {
      return (_e().memoizedState = [A, e === void 0 ? null : e]), A;
    },
    useContext: Ee,
    useEffect: Qf,
    useImperativeHandle: function (A, e, t) {
      return (
        (t = t != null ? t.concat([A]) : null),
        co(4194308, 4, Og.bind(null, e, A), t)
      );
    },
    useLayoutEffect: function (A, e) {
      return co(4194308, 4, A, e);
    },
    useInsertionEffect: function (A, e) {
      return co(4, 2, A, e);
    },
    useMemo: function (A, e) {
      var t = _e();
      return (
        (e = e === void 0 ? null : e), (A = A()), (t.memoizedState = [A, e]), A
      );
    },
    useReducer: function (A, e, t) {
      var r = _e();
      return (
        (e = t !== void 0 ? t(e) : e),
        (r.memoizedState = r.baseState = e),
        (A = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: A,
          lastRenderedState: e,
        }),
        (r.queue = A),
        (A = A.dispatch = NQ.bind(null, pA, A)),
        [r.memoizedState, A]
      );
    },
    useRef: function (A) {
      var e = _e();
      return (A = { current: A }), (e.memoizedState = A);
    },
    useState: wf,
    useDebugValue: qu,
    useDeferredValue: function (A) {
      return (_e().memoizedState = A);
    },
    useTransition: function () {
      var A = wf(!1),
        e = A[0];
      return (A = MQ.bind(null, A[1])), (_e().memoizedState = A), [e, A];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (A, e, t) {
      var r = pA,
        n = _e();
      if (gA) {
        if (t === void 0) throw Error(E(407));
        t = t();
      } else {
        if (((t = e()), KA === null)) throw Error(E(349));
        Ar & 30 || Ig(r, e, t);
      }
      n.memoizedState = t;
      var i = { value: t, getSnapshot: e };
      return (
        (n.queue = i),
        Qf(xg.bind(null, r, i, A), [A]),
        (r.flags |= 2048),
        Ai(9, Sg.bind(null, r, i, t, e), void 0, null),
        t
      );
    },
    useId: function () {
      var A = _e(),
        e = KA.identifierPrefix;
      if (gA) {
        var t = je,
          r = $e;
        (t = (r & ~(1 << (32 - De(r) - 1))).toString(32) + t),
          (e = ':' + e + 'R' + t),
          (t = Zn++),
          0 < t && (e += 'H' + t.toString(32)),
          (e += ':');
      } else (t = RQ++), (e = ':' + e + 'r' + t.toString(32) + ':');
      return (A.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  VQ = {
    readContext: Ee,
    useCallback: Mg,
    useContext: Ee,
    useEffect: Zu,
    useImperativeHandle: Rg,
    useInsertionEffect: Dg,
    useLayoutEffect: kg,
    useMemo: Ng,
    useReducer: da,
    useRef: Tg,
    useState: function () {
      return da(qn);
    },
    useDebugValue: qu,
    useDeferredValue: function (A) {
      var e = He();
      return _g(e, HA.memoizedState, A);
    },
    useTransition: function () {
      var A = da(qn)[0],
        e = He().memoizedState;
      return [A, e];
    },
    useMutableSource: Eg,
    useSyncExternalStore: Hg,
    useId: Pg,
    unstable_isNewReconciler: !1,
  },
  GQ = {
    readContext: Ee,
    useCallback: Mg,
    useContext: Ee,
    useEffect: Zu,
    useImperativeHandle: Rg,
    useInsertionEffect: Dg,
    useLayoutEffect: kg,
    useMemo: Ng,
    useReducer: ga,
    useRef: Tg,
    useState: function () {
      return ga(qn);
    },
    useDebugValue: qu,
    useDeferredValue: function (A) {
      var e = He();
      return HA === null ? (e.memoizedState = A) : _g(e, HA.memoizedState, A);
    },
    useTransition: function () {
      var A = ga(qn)[0],
        e = He().memoizedState;
      return [A, e];
    },
    useMutableSource: Eg,
    useSyncExternalStore: Hg,
    useId: Pg,
    unstable_isNewReconciler: !1,
  };
function Pr(A, e) {
  try {
    var t = '',
      r = e;
    do (t += pw(r)), (r = r.return);
    while (r);
    var n = t;
  } catch (i) {
    n =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: A, source: e, stack: n, digest: null };
}
function ha(A, e, t) {
  return { value: A, source: null, stack: t ?? null, digest: e ?? null };
}
function yl(A, e) {
  try {
    console.error(e.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var bQ = typeof WeakMap == 'function' ? WeakMap : Map;
function Xg(A, e, t) {
  (t = qe(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = e.value;
  return (
    (t.callback = function () {
      bo || ((bo = !0), (kl = r)), yl(A, e);
    }),
    t
  );
}
function Wg(A, e, t) {
  (t = qe(-1, t)), (t.tag = 3);
  var r = A.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var n = e.value;
    (t.payload = function () {
      return r(n);
    }),
      (t.callback = function () {
        yl(A, e);
      });
  }
  var i = A.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (t.callback = function () {
        yl(A, e),
          typeof r != 'function' &&
            (Ht === null ? (Ht = new Set([this])) : Ht.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : '',
        });
      }),
    t
  );
}
function Cf(A, e, t) {
  var r = A.pingCache;
  if (r === null) {
    r = A.pingCache = new bQ();
    var n = new Set();
    r.set(e, n);
  } else (n = r.get(e)), n === void 0 && ((n = new Set()), r.set(e, n));
  n.has(t) || (n.add(t), (A = n0.bind(null, A, e, t)), e.then(A, A));
}
function Uf(A) {
  do {
    var e;
    if (
      ((e = A.tag === 13) &&
        ((e = A.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return A;
    A = A.return;
  } while (A !== null);
  return null;
}
function vf(A, e, t, r, n) {
  return A.mode & 1
    ? ((A.flags |= 65536), (A.lanes = n), A)
    : (A === e
        ? (A.flags |= 65536)
        : ((A.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((e = qe(-1, 1)), (e.tag = 2), Et(t, e, 1))),
          (t.lanes |= 1)),
      A);
}
var XQ = ot.ReactCurrentOwner,
  ne = !1;
function jA(A, e, t, r) {
  e.child = A === null ? mg(e, null, t, r) : Nr(e, A.child, t, r);
}
function Ff(A, e, t, r, n) {
  t = t.render;
  var i = e.ref;
  return (
    Kr(e, n),
    (r = $u(A, e, t, r, i, n)),
    (t = ju()),
    A !== null && !ne
      ? ((e.updateQueue = A.updateQueue),
        (e.flags &= -2053),
        (A.lanes &= ~n),
        nt(A, e, n))
      : (gA && t && Mu(e), (e.flags |= 1), jA(A, e, r, n), e.child)
  );
}
function mf(A, e, t, r, n) {
  if (A === null) {
    var i = t.type;
    return typeof i == 'function' &&
      !sc(i) &&
      i.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((e.tag = 15), (e.type = i), Jg(A, e, i, r, n))
      : ((A = ho(t.type, null, r, e, e.mode, n)),
        (A.ref = e.ref),
        (A.return = e),
        (e.child = A));
  }
  if (((i = A.child), !(A.lanes & n))) {
    var o = i.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : Wn), t(o, r) && A.ref === e.ref)
    )
      return nt(A, e, n);
  }
  return (
    (e.flags |= 1),
    (A = St(i, r)),
    (A.ref = e.ref),
    (A.return = e),
    (e.child = A)
  );
}
function Jg(A, e, t, r, n) {
  if (A !== null) {
    var i = A.memoizedProps;
    if (Wn(i, r) && A.ref === e.ref)
      if (((ne = !1), (e.pendingProps = r = i), (A.lanes & n) !== 0))
        A.flags & 131072 && (ne = !0);
      else return (e.lanes = A.lanes), nt(A, e, n);
  }
  return El(A, e, t, r, n);
}
function zg(A, e, t) {
  var r = e.pendingProps,
    n = r.children,
    i = A !== null ? A.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        lA(yr, ue),
        (ue |= t);
    else {
      if (!(t & 1073741824))
        return (
          (A = i !== null ? i.baseLanes | t : t),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: A,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          lA(yr, ue),
          (ue |= A),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : t),
        lA(yr, ue),
        (ue |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | t), (e.memoizedState = null)) : (r = t),
      lA(yr, ue),
      (ue |= r);
  return jA(A, e, n, t), e.child;
}
function Yg(A, e) {
  var t = e.ref;
  ((A === null && t !== null) || (A !== null && A.ref !== t)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function El(A, e, t, r, n) {
  var i = oe(t) ? Zt : YA.current;
  return (
    (i = Rr(e, i)),
    Kr(e, n),
    (t = $u(A, e, t, r, i, n)),
    (r = ju()),
    A !== null && !ne
      ? ((e.updateQueue = A.updateQueue),
        (e.flags &= -2053),
        (A.lanes &= ~n),
        nt(A, e, n))
      : (gA && r && Mu(e), (e.flags |= 1), jA(A, e, t, n), e.child)
  );
}
function yf(A, e, t, r, n) {
  if (oe(t)) {
    var i = !0;
    Do(e);
  } else i = !1;
  if ((Kr(e, n), e.stateNode === null))
    fo(A, e), vg(e, t, r), ml(e, t, r, n), (r = !0);
  else if (A === null) {
    var o = e.stateNode,
      s = e.memoizedProps;
    o.props = s;
    var a = o.context,
      l = t.contextType;
    typeof l == 'object' && l !== null
      ? (l = Ee(l))
      : ((l = oe(t) ? Zt : YA.current), (l = Rr(e, l)));
    var u = t.getDerivedStateFromProps,
      c =
        typeof u == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function';
    c ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((s !== r || a !== l) && hf(e, o, r, l)),
      (ft = !1);
    var B = e.memoizedState;
    (o.state = B),
      No(e, r, o, n),
      (a = e.memoizedState),
      s !== r || B !== a || ie.current || ft
        ? (typeof u == 'function' && (Fl(e, t, u, r), (a = e.memoizedState)),
          (s = ft || gf(e, t, s, r, B, a, l))
            ? (c ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (e.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = l),
          (r = s))
        : (typeof o.componentDidMount == 'function' && (e.flags |= 4194308),
          (r = !1));
  } else {
    (o = e.stateNode),
      Cg(A, e),
      (s = e.memoizedProps),
      (l = e.type === e.elementType ? s : Le(e.type, s)),
      (o.props = l),
      (c = e.pendingProps),
      (B = o.context),
      (a = t.contextType),
      typeof a == 'object' && a !== null
        ? (a = Ee(a))
        : ((a = oe(t) ? Zt : YA.current), (a = Rr(e, a)));
    var w = t.getDerivedStateFromProps;
    (u =
      typeof w == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((s !== c || B !== a) && hf(e, o, r, a)),
      (ft = !1),
      (B = e.memoizedState),
      (o.state = B),
      No(e, r, o, n);
    var g = e.memoizedState;
    s !== c || B !== g || ie.current || ft
      ? (typeof w == 'function' && (Fl(e, t, w, r), (g = e.memoizedState)),
        (l = ft || gf(e, t, l, r, B, g, a) || !1)
          ? (u ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, g, a),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, g, a)),
            typeof o.componentDidUpdate == 'function' && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (s === A.memoizedProps && B === A.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (s === A.memoizedProps && B === A.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = g)),
        (o.props = r),
        (o.state = g),
        (o.context = a),
        (r = l))
      : (typeof o.componentDidUpdate != 'function' ||
          (s === A.memoizedProps && B === A.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (s === A.memoizedProps && B === A.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return Hl(A, e, t, r, i, n);
}
function Hl(A, e, t, r, n, i) {
  Yg(A, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return n && uf(e, t, !1), nt(A, e, i);
  (r = e.stateNode), (XQ.current = e);
  var s =
    o && typeof t.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (e.flags |= 1),
    A !== null && o
      ? ((e.child = Nr(e, A.child, null, i)), (e.child = Nr(e, null, s, i)))
      : jA(A, e, s, i),
    (e.memoizedState = r.state),
    n && uf(e, t, !0),
    e.child
  );
}
function $g(A) {
  var e = A.stateNode;
  e.pendingContext
    ? lf(A, e.pendingContext, e.pendingContext !== e.context)
    : e.context && lf(A, e.context, !1),
    Wu(A, e.containerInfo);
}
function Ef(A, e, t, r, n) {
  return Mr(), _u(n), (e.flags |= 256), jA(A, e, t, r), e.child;
}
var Il = { dehydrated: null, treeContext: null, retryLane: 0 };
function Sl(A) {
  return { baseLanes: A, cachePool: null, transitions: null };
}
function jg(A, e, t) {
  var r = e.pendingProps,
    n = hA.current,
    i = !1,
    o = (e.flags & 128) !== 0,
    s;
  if (
    ((s = o) ||
      (s = A !== null && A.memoizedState === null ? !1 : (n & 2) !== 0),
    s
      ? ((i = !0), (e.flags &= -129))
      : (A === null || A.memoizedState !== null) && (n |= 1),
    lA(hA, n & 1),
    A === null)
  )
    return (
      Ul(e),
      (A = e.memoizedState),
      A !== null && ((A = A.dehydrated), A !== null)
        ? (e.mode & 1
            ? A.data === '$!'
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = r.children),
          (A = r.fallback),
          i
            ? ((r = e.mode),
              (i = e.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = ws(o, r, 0, null)),
              (A = Yt(A, r, t, null)),
              (i.return = e),
              (A.return = e),
              (i.sibling = A),
              (e.child = i),
              (e.child.memoizedState = Sl(t)),
              (e.memoizedState = Il),
              A)
            : Ac(e, o))
    );
  if (((n = A.memoizedState), n !== null && ((s = n.dehydrated), s !== null)))
    return WQ(A, e, o, r, s, n, t);
  if (i) {
    (i = r.fallback), (o = e.mode), (n = A.child), (s = n.sibling);
    var a = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && e.child !== n
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (e.deletions = null))
        : ((r = St(n, a)), (r.subtreeFlags = n.subtreeFlags & 14680064)),
      s !== null ? (i = St(s, i)) : ((i = Yt(i, o, t, null)), (i.flags |= 2)),
      (i.return = e),
      (r.return = e),
      (r.sibling = i),
      (e.child = r),
      (r = i),
      (i = e.child),
      (o = A.child.memoizedState),
      (o =
        o === null
          ? Sl(t)
          : {
              baseLanes: o.baseLanes | t,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = A.childLanes & ~t),
      (e.memoizedState = Il),
      r
    );
  }
  return (
    (i = A.child),
    (A = i.sibling),
    (r = St(i, { mode: 'visible', children: r.children })),
    !(e.mode & 1) && (r.lanes = t),
    (r.return = e),
    (r.sibling = null),
    A !== null &&
      ((t = e.deletions),
      t === null ? ((e.deletions = [A]), (e.flags |= 16)) : t.push(A)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function Ac(A, e) {
  return (
    (e = ws({ mode: 'visible', children: e }, A.mode, 0, null)),
    (e.return = A),
    (A.child = e)
  );
}
function Si(A, e, t, r) {
  return (
    r !== null && _u(r),
    Nr(e, A.child, null, t),
    (A = Ac(e, e.pendingProps.children)),
    (A.flags |= 2),
    (e.memoizedState = null),
    A
  );
}
function WQ(A, e, t, r, n, i, o) {
  if (t)
    return e.flags & 256
      ? ((e.flags &= -257), (r = ha(Error(E(422)))), Si(A, e, o, r))
      : e.memoizedState !== null
      ? ((e.child = A.child), (e.flags |= 128), null)
      : ((i = r.fallback),
        (n = e.mode),
        (r = ws({ mode: 'visible', children: r.children }, n, 0, null)),
        (i = Yt(i, n, o, null)),
        (i.flags |= 2),
        (r.return = e),
        (i.return = e),
        (r.sibling = i),
        (e.child = r),
        e.mode & 1 && Nr(e, A.child, null, o),
        (e.child.memoizedState = Sl(o)),
        (e.memoizedState = Il),
        i);
  if (!(e.mode & 1)) return Si(A, e, o, null);
  if (n.data === '$!') {
    if (((r = n.nextSibling && n.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(E(419))), (r = ha(i, r, void 0)), Si(A, e, o, r);
  }
  if (((s = (o & A.childLanes) !== 0), ne || s)) {
    if (((r = KA), r !== null)) {
      switch (o & -o) {
        case 4:
          n = 2;
          break;
        case 16:
          n = 8;
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
          n = 32;
          break;
        case 536870912:
          n = 268435456;
          break;
        default:
          n = 0;
      }
      (n = n & (r.suspendedLanes | o) ? 0 : n),
        n !== 0 &&
          n !== i.retryLane &&
          ((i.retryLane = n), rt(A, n), ke(r, A, n, -1));
    }
    return oc(), (r = ha(Error(E(421)))), Si(A, e, o, r);
  }
  return n.data === '$?'
    ? ((e.flags |= 128),
      (e.child = A.child),
      (e = i0.bind(null, A)),
      (n._reactRetry = e),
      null)
    : ((A = i.treeContext),
      (ce = yt(n.nextSibling)),
      (fe = e),
      (gA = !0),
      (Te = null),
      A !== null &&
        ((we[Qe++] = $e),
        (we[Qe++] = je),
        (we[Qe++] = qt),
        ($e = A.id),
        (je = A.overflow),
        (qt = e)),
      (e = Ac(e, r.children)),
      (e.flags |= 4096),
      e);
}
function Hf(A, e, t) {
  A.lanes |= e;
  var r = A.alternate;
  r !== null && (r.lanes |= e), vl(A.return, e, t);
}
function pa(A, e, t, r, n) {
  var i = A.memoizedState;
  i === null
    ? (A.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: n,
      })
    : ((i.isBackwards = e),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = t),
      (i.tailMode = n));
}
function Zg(A, e, t) {
  var r = e.pendingProps,
    n = r.revealOrder,
    i = r.tail;
  if ((jA(A, e, r.children, t), (r = hA.current), r & 2))
    (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (A !== null && A.flags & 128)
      A: for (A = e.child; A !== null; ) {
        if (A.tag === 13) A.memoizedState !== null && Hf(A, t, e);
        else if (A.tag === 19) Hf(A, t, e);
        else if (A.child !== null) {
          (A.child.return = A), (A = A.child);
          continue;
        }
        if (A === e) break A;
        for (; A.sibling === null; ) {
          if (A.return === null || A.return === e) break A;
          A = A.return;
        }
        (A.sibling.return = A.return), (A = A.sibling);
      }
    r &= 1;
  }
  if ((lA(hA, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (n) {
      case 'forwards':
        for (t = e.child, n = null; t !== null; )
          (A = t.alternate),
            A !== null && _o(A) === null && (n = t),
            (t = t.sibling);
        (t = n),
          t === null
            ? ((n = e.child), (e.child = null))
            : ((n = t.sibling), (t.sibling = null)),
          pa(e, !1, n, t, i);
        break;
      case 'backwards':
        for (t = null, n = e.child, e.child = null; n !== null; ) {
          if (((A = n.alternate), A !== null && _o(A) === null)) {
            e.child = n;
            break;
          }
          (A = n.sibling), (n.sibling = t), (t = n), (n = A);
        }
        pa(e, !0, t, null, i);
        break;
      case 'together':
        pa(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function fo(A, e) {
  !(e.mode & 1) &&
    A !== null &&
    ((A.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function nt(A, e, t) {
  if (
    (A !== null && (e.dependencies = A.dependencies),
    (er |= e.lanes),
    !(t & e.childLanes))
  )
    return null;
  if (A !== null && e.child !== A.child) throw Error(E(153));
  if (e.child !== null) {
    for (
      A = e.child, t = St(A, A.pendingProps), e.child = t, t.return = e;
      A.sibling !== null;

    )
      (A = A.sibling), (t = t.sibling = St(A, A.pendingProps)), (t.return = e);
    t.sibling = null;
  }
  return e.child;
}
function JQ(A, e, t) {
  switch (e.tag) {
    case 3:
      $g(e), Mr();
      break;
    case 5:
      yg(e);
      break;
    case 1:
      oe(e.type) && Do(e);
      break;
    case 4:
      Wu(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        n = e.memoizedProps.value;
      lA(Ro, r._currentValue), (r._currentValue = n);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (lA(hA, hA.current & 1), (e.flags |= 128), null)
          : t & e.child.childLanes
          ? jg(A, e, t)
          : (lA(hA, hA.current & 1),
            (A = nt(A, e, t)),
            A !== null ? A.sibling : null);
      lA(hA, hA.current & 1);
      break;
    case 19:
      if (((r = (t & e.childLanes) !== 0), A.flags & 128)) {
        if (r) return Zg(A, e, t);
        e.flags |= 128;
      }
      if (
        ((n = e.memoizedState),
        n !== null &&
          ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
        lA(hA, hA.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), zg(A, e, t);
  }
  return nt(A, e, t);
}
var qg, xl, Ah, eh;
qg = function (A, e) {
  for (var t = e.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) A.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
xl = function () {};
Ah = function (A, e, t, r) {
  var n = A.memoizedProps;
  if (n !== r) {
    (A = e.stateNode), Wt(Ge.current);
    var i = null;
    switch (t) {
      case 'input':
        (n = Za(A, n)), (r = Za(A, r)), (i = []);
        break;
      case 'select':
        (n = wA({}, n, { value: void 0 })),
          (r = wA({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (n = el(A, n)), (r = el(A, r)), (i = []);
        break;
      default:
        typeof n.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (A.onclick = Ko);
    }
    rl(t, r);
    var o;
    t = null;
    for (l in n)
      if (!r.hasOwnProperty(l) && n.hasOwnProperty(l) && n[l] != null)
        if (l === 'style') {
          var s = n[l];
          for (o in s) s.hasOwnProperty(o) && (t || (t = {}), (t[o] = ''));
        } else
          l !== 'dangerouslySetInnerHTML' &&
            l !== 'children' &&
            l !== 'suppressContentEditableWarning' &&
            l !== 'suppressHydrationWarning' &&
            l !== 'autoFocus' &&
            (Nn.hasOwnProperty(l)
              ? i || (i = [])
              : (i = i || []).push(l, null));
    for (l in r) {
      var a = r[l];
      if (
        ((s = n != null ? n[l] : void 0),
        r.hasOwnProperty(l) && a !== s && (a != null || s != null))
      )
        if (l === 'style')
          if (s) {
            for (o in s)
              !s.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (t || (t = {}), (t[o] = ''));
            for (o in a)
              a.hasOwnProperty(o) &&
                s[o] !== a[o] &&
                (t || (t = {}), (t[o] = a[o]));
          } else t || (i || (i = []), i.push(l, t)), (t = a);
        else
          l === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(l, a))
            : l === 'children'
            ? (typeof a != 'string' && typeof a != 'number') ||
              (i = i || []).push(l, '' + a)
            : l !== 'suppressContentEditableWarning' &&
              l !== 'suppressHydrationWarning' &&
              (Nn.hasOwnProperty(l)
                ? (a != null && l === 'onScroll' && cA('scroll', A),
                  i || s === a || (i = []))
                : (i = i || []).push(l, a));
    }
    t && (i = i || []).push('style', t);
    var l = i;
    (e.updateQueue = l) && (e.flags |= 4);
  }
};
eh = function (A, e, t, r) {
  t !== r && (e.flags |= 4);
};
function on(A, e) {
  if (!gA)
    switch (A.tailMode) {
      case 'hidden':
        e = A.tail;
        for (var t = null; e !== null; )
          e.alternate !== null && (t = e), (e = e.sibling);
        t === null ? (A.tail = null) : (t.sibling = null);
        break;
      case 'collapsed':
        t = A.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? e || A.tail === null
            ? (A.tail = null)
            : (A.tail.sibling = null)
          : (r.sibling = null);
    }
}
function XA(A) {
  var e = A.alternate !== null && A.alternate.child === A.child,
    t = 0,
    r = 0;
  if (e)
    for (var n = A.child; n !== null; )
      (t |= n.lanes | n.childLanes),
        (r |= n.subtreeFlags & 14680064),
        (r |= n.flags & 14680064),
        (n.return = A),
        (n = n.sibling);
  else
    for (n = A.child; n !== null; )
      (t |= n.lanes | n.childLanes),
        (r |= n.subtreeFlags),
        (r |= n.flags),
        (n.return = A),
        (n = n.sibling);
  return (A.subtreeFlags |= r), (A.childLanes = t), e;
}
function zQ(A, e, t) {
  var r = e.pendingProps;
  switch ((Nu(e), e.tag)) {
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
      return XA(e), null;
    case 1:
      return oe(e.type) && To(), XA(e), null;
    case 3:
      return (
        (r = e.stateNode),
        _r(),
        fA(ie),
        fA(YA),
        zu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (A === null || A.child === null) &&
          (Hi(e)
            ? (e.flags |= 4)
            : A === null ||
              (A.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), Te !== null && (Ml(Te), (Te = null)))),
        xl(A, e),
        XA(e),
        null
      );
    case 5:
      Ju(e);
      var n = Wt(jn.current);
      if (((t = e.type), A !== null && e.stateNode != null))
        Ah(A, e, t, r, n),
          A.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(E(166));
          return XA(e), null;
        }
        if (((A = Wt(Ge.current)), Hi(e))) {
          (r = e.stateNode), (t = e.type);
          var i = e.memoizedProps;
          switch (((r[Pe] = e), (r[Yn] = i), (A = (e.mode & 1) !== 0), t)) {
            case 'dialog':
              cA('cancel', r), cA('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              cA('load', r);
              break;
            case 'video':
            case 'audio':
              for (n = 0; n < gn.length; n++) cA(gn[n], r);
              break;
            case 'source':
              cA('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              cA('error', r), cA('load', r);
              break;
            case 'details':
              cA('toggle', r);
              break;
            case 'input':
              kc(r, i), cA('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                cA('invalid', r);
              break;
            case 'textarea':
              Rc(r, i), cA('invalid', r);
          }
          rl(t, i), (n = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var s = i[o];
              o === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ei(r.textContent, s, A),
                    (n = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ei(r.textContent, s, A),
                    (n = ['children', '' + s]))
                : Nn.hasOwnProperty(o) &&
                  s != null &&
                  o === 'onScroll' &&
                  cA('scroll', r);
            }
          switch (t) {
            case 'input':
              wi(r), Oc(r, i, !0);
              break;
            case 'textarea':
              wi(r), Mc(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = Ko);
          }
          (r = n), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (o = n.nodeType === 9 ? n : n.ownerDocument),
            A === 'http://www.w3.org/1999/xhtml' && (A = Id(t)),
            A === 'http://www.w3.org/1999/xhtml'
              ? t === 'script'
                ? ((A = o.createElement('div')),
                  (A.innerHTML = '<script></script>'),
                  (A = A.removeChild(A.firstChild)))
                : typeof r.is == 'string'
                ? (A = o.createElement(t, { is: r.is }))
                : ((A = o.createElement(t)),
                  t === 'select' &&
                    ((o = A),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (A = o.createElementNS(A, t)),
            (A[Pe] = e),
            (A[Yn] = r),
            qg(A, e, !1, !1),
            (e.stateNode = A);
          A: {
            switch (((o = nl(t, r)), t)) {
              case 'dialog':
                cA('cancel', A), cA('close', A), (n = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                cA('load', A), (n = r);
                break;
              case 'video':
              case 'audio':
                for (n = 0; n < gn.length; n++) cA(gn[n], A);
                n = r;
                break;
              case 'source':
                cA('error', A), (n = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                cA('error', A), cA('load', A), (n = r);
                break;
              case 'details':
                cA('toggle', A), (n = r);
                break;
              case 'input':
                kc(A, r), (n = Za(A, r)), cA('invalid', A);
                break;
              case 'option':
                n = r;
                break;
              case 'select':
                (A._wrapperState = { wasMultiple: !!r.multiple }),
                  (n = wA({}, r, { value: void 0 })),
                  cA('invalid', A);
                break;
              case 'textarea':
                Rc(A, r), (n = el(A, r)), cA('invalid', A);
                break;
              default:
                n = r;
            }
            rl(t, n), (s = n);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === 'style'
                  ? Ld(A, a)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), a != null && Sd(A, a))
                  : i === 'children'
                  ? typeof a == 'string'
                    ? (t !== 'textarea' || a !== '') && _n(A, a)
                    : typeof a == 'number' && _n(A, '' + a)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Nn.hasOwnProperty(i)
                      ? a != null && i === 'onScroll' && cA('scroll', A)
                      : a != null && mu(A, i, a, o));
              }
            switch (t) {
              case 'input':
                wi(A), Oc(A, r, !1);
                break;
              case 'textarea':
                wi(A), Mc(A);
                break;
              case 'option':
                r.value != null && A.setAttribute('value', '' + Dt(r.value));
                break;
              case 'select':
                (A.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Ir(A, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Ir(A, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof n.onClick == 'function' && (A.onclick = Ko);
            }
            switch (t) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break A;
              case 'img':
                r = !0;
                break A;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return XA(e), null;
    case 6:
      if (A && e.stateNode != null) eh(A, e, A.memoizedProps, r);
      else {
        if (typeof r != 'string' && e.stateNode === null) throw Error(E(166));
        if (((t = Wt(jn.current)), Wt(Ge.current), Hi(e))) {
          if (
            ((r = e.stateNode),
            (t = e.memoizedProps),
            (r[Pe] = e),
            (i = r.nodeValue !== t) && ((A = fe), A !== null))
          )
            switch (A.tag) {
              case 3:
                Ei(r.nodeValue, t, (A.mode & 1) !== 0);
                break;
              case 5:
                A.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ei(r.nodeValue, t, (A.mode & 1) !== 0);
            }
          i && (e.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[Pe] = e),
            (e.stateNode = r);
      }
      return XA(e), null;
    case 13:
      if (
        (fA(hA),
        (r = e.memoizedState),
        A === null ||
          (A.memoizedState !== null && A.memoizedState.dehydrated !== null))
      ) {
        if (gA && ce !== null && e.mode & 1 && !(e.flags & 128))
          wg(), Mr(), (e.flags |= 98560), (i = !1);
        else if (((i = Hi(e)), r !== null && r.dehydrated !== null)) {
          if (A === null) {
            if (!i) throw Error(E(318));
            if (
              ((i = e.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(E(317));
            i[Pe] = e;
          } else
            Mr(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          XA(e), (i = !1);
        } else Te !== null && (Ml(Te), (Te = null)), (i = !0);
        if (!i) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = t), e)
        : ((r = r !== null),
          r !== (A !== null && A.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (A === null || hA.current & 1 ? SA === 0 && (SA = 3) : oc())),
          e.updateQueue !== null && (e.flags |= 4),
          XA(e),
          null);
    case 4:
      return (
        _r(), xl(A, e), A === null && Jn(e.stateNode.containerInfo), XA(e), null
      );
    case 10:
      return Gu(e.type._context), XA(e), null;
    case 17:
      return oe(e.type) && To(), XA(e), null;
    case 19:
      if ((fA(hA), (i = e.memoizedState), i === null)) return XA(e), null;
      if (((r = (e.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) on(i, !1);
        else {
          if (SA !== 0 || (A !== null && A.flags & 128))
            for (A = e.child; A !== null; ) {
              if (((o = _o(A)), o !== null)) {
                for (
                  e.flags |= 128,
                    on(i, !1),
                    r = o.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = t,
                    t = e.child;
                  t !== null;

                )
                  (i = t),
                    (A = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = A),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (A = o.dependencies),
                        (i.dependencies =
                          A === null
                            ? null
                            : {
                                lanes: A.lanes,
                                firstContext: A.firstContext,
                              })),
                    (t = t.sibling);
                return lA(hA, (hA.current & 1) | 2), e.child;
              }
              A = A.sibling;
            }
          i.tail !== null &&
            mA() > Vr &&
            ((e.flags |= 128), (r = !0), on(i, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((A = _o(o)), A !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (t = A.updateQueue),
              t !== null && ((e.updateQueue = t), (e.flags |= 4)),
              on(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !o.alternate && !gA)
            )
              return XA(e), null;
          } else
            2 * mA() - i.renderingStartTime > Vr &&
              t !== 1073741824 &&
              ((e.flags |= 128), (r = !0), on(i, !1), (e.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((t = i.last),
            t !== null ? (t.sibling = o) : (e.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((e = i.tail),
          (i.rendering = e),
          (i.tail = e.sibling),
          (i.renderingStartTime = mA()),
          (e.sibling = null),
          (t = hA.current),
          lA(hA, r ? (t & 1) | 2 : t & 1),
          e)
        : (XA(e), null);
    case 22:
    case 23:
      return (
        ic(),
        (r = e.memoizedState !== null),
        A !== null && (A.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? ue & 1073741824 && (XA(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : XA(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, e.tag));
}
function YQ(A, e) {
  switch ((Nu(e), e.tag)) {
    case 1:
      return (
        oe(e.type) && To(),
        (A = e.flags),
        A & 65536 ? ((e.flags = (A & -65537) | 128), e) : null
      );
    case 3:
      return (
        _r(),
        fA(ie),
        fA(YA),
        zu(),
        (A = e.flags),
        A & 65536 && !(A & 128) ? ((e.flags = (A & -65537) | 128), e) : null
      );
    case 5:
      return Ju(e), null;
    case 13:
      if (
        (fA(hA), (A = e.memoizedState), A !== null && A.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(E(340));
        Mr();
      }
      return (
        (A = e.flags), A & 65536 ? ((e.flags = (A & -65537) | 128), e) : null
      );
    case 19:
      return fA(hA), null;
    case 4:
      return _r(), null;
    case 10:
      return Gu(e.type._context), null;
    case 22:
    case 23:
      return ic(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xi = !1,
  zA = !1,
  $Q = typeof WeakSet == 'function' ? WeakSet : Set,
  O = null;
function mr(A, e) {
  var t = A.ref;
  if (t !== null)
    if (typeof t == 'function')
      try {
        t(null);
      } catch (r) {
        CA(A, e, r);
      }
    else t.current = null;
}
function Ll(A, e, t) {
  try {
    t();
  } catch (r) {
    CA(A, e, r);
  }
}
var If = !1;
function jQ(A, e) {
  if (((dl = So), (A = ig()), Ru(A))) {
    if ('selectionStart' in A)
      var t = { start: A.selectionStart, end: A.selectionEnd };
    else
      A: {
        t = ((t = A.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var n = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, i.nodeType;
          } catch {
            t = null;
            break A;
          }
          var o = 0,
            s = -1,
            a = -1,
            l = 0,
            u = 0,
            c = A,
            B = null;
          e: for (;;) {
            for (
              var w;
              c !== t || (n !== 0 && c.nodeType !== 3) || (s = o + n),
                c !== i || (r !== 0 && c.nodeType !== 3) || (a = o + r),
                c.nodeType === 3 && (o += c.nodeValue.length),
                (w = c.firstChild) !== null;

            )
              (B = c), (c = w);
            for (;;) {
              if (c === A) break e;
              if (
                (B === t && ++l === n && (s = o),
                B === i && ++u === r && (a = o),
                (w = c.nextSibling) !== null)
              )
                break;
              (c = B), (B = c.parentNode);
            }
            c = w;
          }
          t = s === -1 || a === -1 ? null : { start: s, end: a };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (gl = { focusedElem: A, selectionRange: t }, So = !1, O = e; O !== null; )
    if (((e = O), (A = e.child), (e.subtreeFlags & 1028) !== 0 && A !== null))
      (A.return = e), (O = A);
    else
      for (; O !== null; ) {
        e = O;
        try {
          var g = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var p = g.memoizedProps,
                    F = g.memoizedState,
                    d = e.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? p : Le(e.type, p),
                      F
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var h = e.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = '')
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (Q) {
          CA(e, e.return, Q);
        }
        if (((A = e.sibling), A !== null)) {
          (A.return = e.return), (O = A);
          break;
        }
        O = e.return;
      }
  return (g = If), (If = !1), g;
}
function Sn(A, e, t) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var n = (r = r.next);
    do {
      if ((n.tag & A) === A) {
        var i = n.destroy;
        (n.destroy = void 0), i !== void 0 && Ll(e, t, i);
      }
      n = n.next;
    } while (n !== r);
  }
}
function hs(A, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var t = (e = e.next);
    do {
      if ((t.tag & A) === A) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== e);
  }
}
function Kl(A) {
  var e = A.ref;
  if (e !== null) {
    var t = A.stateNode;
    switch (A.tag) {
      case 5:
        A = t;
        break;
      default:
        A = t;
    }
    typeof e == 'function' ? e(A) : (e.current = A);
  }
}
function th(A) {
  var e = A.alternate;
  e !== null && ((A.alternate = null), th(e)),
    (A.child = null),
    (A.deletions = null),
    (A.sibling = null),
    A.tag === 5 &&
      ((e = A.stateNode),
      e !== null &&
        (delete e[Pe], delete e[Yn], delete e[wl], delete e[TQ], delete e[DQ])),
    (A.stateNode = null),
    (A.return = null),
    (A.dependencies = null),
    (A.memoizedProps = null),
    (A.memoizedState = null),
    (A.pendingProps = null),
    (A.stateNode = null),
    (A.updateQueue = null);
}
function rh(A) {
  return A.tag === 5 || A.tag === 3 || A.tag === 4;
}
function Sf(A) {
  A: for (;;) {
    for (; A.sibling === null; ) {
      if (A.return === null || rh(A.return)) return null;
      A = A.return;
    }
    for (
      A.sibling.return = A.return, A = A.sibling;
      A.tag !== 5 && A.tag !== 6 && A.tag !== 18;

    ) {
      if (A.flags & 2 || A.child === null || A.tag === 4) continue A;
      (A.child.return = A), (A = A.child);
    }
    if (!(A.flags & 2)) return A.stateNode;
  }
}
function Tl(A, e, t) {
  var r = A.tag;
  if (r === 5 || r === 6)
    (A = A.stateNode),
      e
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(A, e)
          : t.insertBefore(A, e)
        : (t.nodeType === 8
            ? ((e = t.parentNode), e.insertBefore(A, t))
            : ((e = t), e.appendChild(A)),
          (t = t._reactRootContainer),
          t != null || e.onclick !== null || (e.onclick = Ko));
  else if (r !== 4 && ((A = A.child), A !== null))
    for (Tl(A, e, t), A = A.sibling; A !== null; ) Tl(A, e, t), (A = A.sibling);
}
function Dl(A, e, t) {
  var r = A.tag;
  if (r === 5 || r === 6)
    (A = A.stateNode), e ? t.insertBefore(A, e) : t.appendChild(A);
  else if (r !== 4 && ((A = A.child), A !== null))
    for (Dl(A, e, t), A = A.sibling; A !== null; ) Dl(A, e, t), (A = A.sibling);
}
var MA = null,
  Ke = !1;
function at(A, e, t) {
  for (t = t.child; t !== null; ) nh(A, e, t), (t = t.sibling);
}
function nh(A, e, t) {
  if (Ve && typeof Ve.onCommitFiberUnmount == 'function')
    try {
      Ve.onCommitFiberUnmount(as, t);
    } catch {}
  switch (t.tag) {
    case 5:
      zA || mr(t, e);
    case 6:
      var r = MA,
        n = Ke;
      (MA = null),
        at(A, e, t),
        (MA = r),
        (Ke = n),
        MA !== null &&
          (Ke
            ? ((A = MA),
              (t = t.stateNode),
              A.nodeType === 8 ? A.parentNode.removeChild(t) : A.removeChild(t))
            : MA.removeChild(t.stateNode));
      break;
    case 18:
      MA !== null &&
        (Ke
          ? ((A = MA),
            (t = t.stateNode),
            A.nodeType === 8
              ? ua(A.parentNode, t)
              : A.nodeType === 1 && ua(A, t),
            bn(A))
          : ua(MA, t.stateNode));
      break;
    case 4:
      (r = MA),
        (n = Ke),
        (MA = t.stateNode.containerInfo),
        (Ke = !0),
        at(A, e, t),
        (MA = r),
        (Ke = n);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !zA &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        n = r = r.next;
        do {
          var i = n,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Ll(t, e, o),
            (n = n.next);
        } while (n !== r);
      }
      at(A, e, t);
      break;
    case 1:
      if (
        !zA &&
        (mr(t, e),
        (r = t.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          CA(t, e, s);
        }
      at(A, e, t);
      break;
    case 21:
      at(A, e, t);
      break;
    case 22:
      t.mode & 1
        ? ((zA = (r = zA) || t.memoizedState !== null), at(A, e, t), (zA = r))
        : at(A, e, t);
      break;
    default:
      at(A, e, t);
  }
}
function xf(A) {
  var e = A.updateQueue;
  if (e !== null) {
    A.updateQueue = null;
    var t = A.stateNode;
    t === null && (t = A.stateNode = new $Q()),
      e.forEach(function (r) {
        var n = o0.bind(null, A, r);
        t.has(r) || (t.add(r), r.then(n, n));
      });
  }
}
function Se(A, e) {
  var t = e.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      try {
        var i = A,
          o = e,
          s = o;
        A: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (MA = s.stateNode), (Ke = !1);
              break A;
            case 3:
              (MA = s.stateNode.containerInfo), (Ke = !0);
              break A;
            case 4:
              (MA = s.stateNode.containerInfo), (Ke = !0);
              break A;
          }
          s = s.return;
        }
        if (MA === null) throw Error(E(160));
        nh(i, o, n), (MA = null), (Ke = !1);
        var a = n.alternate;
        a !== null && (a.return = null), (n.return = null);
      } catch (l) {
        CA(n, e, l);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) ih(e, A), (e = e.sibling);
}
function ih(A, e) {
  var t = A.alternate,
    r = A.flags;
  switch (A.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Se(e, A), Me(A), r & 4)) {
        try {
          Sn(3, A, A.return), hs(3, A);
        } catch (p) {
          CA(A, A.return, p);
        }
        try {
          Sn(5, A, A.return);
        } catch (p) {
          CA(A, A.return, p);
        }
      }
      break;
    case 1:
      Se(e, A), Me(A), r & 512 && t !== null && mr(t, t.return);
      break;
    case 5:
      if (
        (Se(e, A),
        Me(A),
        r & 512 && t !== null && mr(t, t.return),
        A.flags & 32)
      ) {
        var n = A.stateNode;
        try {
          _n(n, '');
        } catch (p) {
          CA(A, A.return, p);
        }
      }
      if (r & 4 && ((n = A.stateNode), n != null)) {
        var i = A.memoizedProps,
          o = t !== null ? t.memoizedProps : i,
          s = A.type,
          a = A.updateQueue;
        if (((A.updateQueue = null), a !== null))
          try {
            s === 'input' && i.type === 'radio' && i.name != null && Ed(n, i),
              nl(s, o);
            var l = nl(s, i);
            for (o = 0; o < a.length; o += 2) {
              var u = a[o],
                c = a[o + 1];
              u === 'style'
                ? Ld(n, c)
                : u === 'dangerouslySetInnerHTML'
                ? Sd(n, c)
                : u === 'children'
                ? _n(n, c)
                : mu(n, u, c, l);
            }
            switch (s) {
              case 'input':
                qa(n, i);
                break;
              case 'textarea':
                Hd(n, i);
                break;
              case 'select':
                var B = n._wrapperState.wasMultiple;
                n._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Ir(n, !!i.multiple, w, !1)
                  : B !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Ir(n, !!i.multiple, i.defaultValue, !0)
                      : Ir(n, !!i.multiple, i.multiple ? [] : '', !1));
            }
            n[Yn] = i;
          } catch (p) {
            CA(A, A.return, p);
          }
      }
      break;
    case 6:
      if ((Se(e, A), Me(A), r & 4)) {
        if (A.stateNode === null) throw Error(E(162));
        (n = A.stateNode), (i = A.memoizedProps);
        try {
          n.nodeValue = i;
        } catch (p) {
          CA(A, A.return, p);
        }
      }
      break;
    case 3:
      if (
        (Se(e, A), Me(A), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          bn(e.containerInfo);
        } catch (p) {
          CA(A, A.return, p);
        }
      break;
    case 4:
      Se(e, A), Me(A);
      break;
    case 13:
      Se(e, A),
        Me(A),
        (n = A.child),
        n.flags & 8192 &&
          ((i = n.memoizedState !== null),
          (n.stateNode.isHidden = i),
          !i ||
            (n.alternate !== null && n.alternate.memoizedState !== null) ||
            (rc = mA())),
        r & 4 && xf(A);
      break;
    case 22:
      if (
        ((u = t !== null && t.memoizedState !== null),
        A.mode & 1 ? ((zA = (l = zA) || u), Se(e, A), (zA = l)) : Se(e, A),
        Me(A),
        r & 8192)
      ) {
        if (
          ((l = A.memoizedState !== null),
          (A.stateNode.isHidden = l) && !u && A.mode & 1)
        )
          for (O = A, u = A.child; u !== null; ) {
            for (c = O = u; O !== null; ) {
              switch (((B = O), (w = B.child), B.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Sn(4, B, B.return);
                  break;
                case 1:
                  mr(B, B.return);
                  var g = B.stateNode;
                  if (typeof g.componentWillUnmount == 'function') {
                    (r = B), (t = B.return);
                    try {
                      (e = r),
                        (g.props = e.memoizedProps),
                        (g.state = e.memoizedState),
                        g.componentWillUnmount();
                    } catch (p) {
                      CA(r, t, p);
                    }
                  }
                  break;
                case 5:
                  mr(B, B.return);
                  break;
                case 22:
                  if (B.memoizedState !== null) {
                    Kf(c);
                    continue;
                  }
              }
              w !== null ? ((w.return = B), (O = w)) : Kf(c);
            }
            u = u.sibling;
          }
        A: for (u = null, c = A; ; ) {
          if (c.tag === 5) {
            if (u === null) {
              u = c;
              try {
                (n = c.stateNode),
                  l
                    ? ((i = n.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((s = c.stateNode),
                      (a = c.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (s.style.display = xd('display', o)));
              } catch (p) {
                CA(A, A.return, p);
              }
            }
          } else if (c.tag === 6) {
            if (u === null)
              try {
                c.stateNode.nodeValue = l ? '' : c.memoizedProps;
              } catch (p) {
                CA(A, A.return, p);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === A) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === A) break A;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === A) break A;
            u === c && (u = null), (c = c.return);
          }
          u === c && (u = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      Se(e, A), Me(A), r & 4 && xf(A);
      break;
    case 21:
      break;
    default:
      Se(e, A), Me(A);
  }
}
function Me(A) {
  var e = A.flags;
  if (e & 2) {
    try {
      A: {
        for (var t = A.return; t !== null; ) {
          if (rh(t)) {
            var r = t;
            break A;
          }
          t = t.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var n = r.stateNode;
          r.flags & 32 && (_n(n, ''), (r.flags &= -33));
          var i = Sf(A);
          Dl(A, i, n);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            s = Sf(A);
          Tl(A, s, o);
          break;
        default:
          throw Error(E(161));
      }
    } catch (a) {
      CA(A, A.return, a);
    }
    A.flags &= -3;
  }
  e & 4096 && (A.flags &= -4097);
}
function ZQ(A, e, t) {
  (O = A), oh(A);
}
function oh(A, e, t) {
  for (var r = (A.mode & 1) !== 0; O !== null; ) {
    var n = O,
      i = n.child;
    if (n.tag === 22 && r) {
      var o = n.memoizedState !== null || xi;
      if (!o) {
        var s = n.alternate,
          a = (s !== null && s.memoizedState !== null) || zA;
        s = xi;
        var l = zA;
        if (((xi = o), (zA = a) && !l))
          for (O = n; O !== null; )
            (o = O),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Tf(n)
                : a !== null
                ? ((a.return = o), (O = a))
                : Tf(n);
        for (; i !== null; ) (O = i), oh(i), (i = i.sibling);
        (O = n), (xi = s), (zA = l);
      }
      Lf(A);
    } else
      n.subtreeFlags & 8772 && i !== null ? ((i.return = n), (O = i)) : Lf(A);
  }
}
function Lf(A) {
  for (; O !== null; ) {
    var e = O;
    if (e.flags & 8772) {
      var t = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              zA || hs(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !zA)
                if (t === null) r.componentDidMount();
                else {
                  var n =
                    e.elementType === e.type
                      ? t.memoizedProps
                      : Le(e.type, t.memoizedProps);
                  r.componentDidUpdate(
                    n,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = e.updateQueue;
              i !== null && df(e, i, r);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((t = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      t = e.child.stateNode;
                      break;
                    case 1:
                      t = e.child.stateNode;
                  }
                df(e, o, t);
              }
              break;
            case 5:
              var s = e.stateNode;
              if (t === null && e.flags & 4) {
                t = s;
                var a = e.memoizedProps;
                switch (e.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && t.focus();
                    break;
                  case 'img':
                    a.src && (t.src = a.src);
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
              if (e.memoizedState === null) {
                var l = e.alternate;
                if (l !== null) {
                  var u = l.memoizedState;
                  if (u !== null) {
                    var c = u.dehydrated;
                    c !== null && bn(c);
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
              throw Error(E(163));
          }
        zA || (e.flags & 512 && Kl(e));
      } catch (B) {
        CA(e, e.return, B);
      }
    }
    if (e === A) {
      O = null;
      break;
    }
    if (((t = e.sibling), t !== null)) {
      (t.return = e.return), (O = t);
      break;
    }
    O = e.return;
  }
}
function Kf(A) {
  for (; O !== null; ) {
    var e = O;
    if (e === A) {
      O = null;
      break;
    }
    var t = e.sibling;
    if (t !== null) {
      (t.return = e.return), (O = t);
      break;
    }
    O = e.return;
  }
}
function Tf(A) {
  for (; O !== null; ) {
    var e = O;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var t = e.return;
          try {
            hs(4, e);
          } catch (a) {
            CA(e, t, a);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var n = e.return;
            try {
              r.componentDidMount();
            } catch (a) {
              CA(e, n, a);
            }
          }
          var i = e.return;
          try {
            Kl(e);
          } catch (a) {
            CA(e, i, a);
          }
          break;
        case 5:
          var o = e.return;
          try {
            Kl(e);
          } catch (a) {
            CA(e, o, a);
          }
      }
    } catch (a) {
      CA(e, e.return, a);
    }
    if (e === A) {
      O = null;
      break;
    }
    var s = e.sibling;
    if (s !== null) {
      (s.return = e.return), (O = s);
      break;
    }
    O = e.return;
  }
}
var qQ = Math.ceil,
  Go = ot.ReactCurrentDispatcher,
  ec = ot.ReactCurrentOwner,
  ye = ot.ReactCurrentBatchConfig,
  j = 0,
  KA = null,
  EA = null,
  PA = 0,
  ue = 0,
  yr = Mt(0),
  SA = 0,
  ei = null,
  er = 0,
  ps = 0,
  tc = 0,
  xn = null,
  re = null,
  rc = 0,
  Vr = 1 / 0,
  ze = null,
  bo = !1,
  kl = null,
  Ht = null,
  Li = !1,
  pt = null,
  Xo = 0,
  Ln = 0,
  Ol = null,
  Bo = -1,
  go = 0;
function ZA() {
  return j & 6 ? mA() : Bo !== -1 ? Bo : (Bo = mA());
}
function It(A) {
  return A.mode & 1
    ? j & 2 && PA !== 0
      ? PA & -PA
      : OQ.transition !== null
      ? (go === 0 && (go = Gd()), go)
      : ((A = iA),
        A !== 0 || ((A = window.event), (A = A === void 0 ? 16 : $d(A.type))),
        A)
    : 1;
}
function ke(A, e, t, r) {
  if (50 < Ln) throw ((Ln = 0), (Ol = null), Error(E(185)));
  ai(A, t, r),
    (!(j & 2) || A !== KA) &&
      (A === KA && (!(j & 2) && (ps |= t), SA === 4 && gt(A, PA)),
      se(A, r),
      t === 1 && j === 0 && !(e.mode & 1) && ((Vr = mA() + 500), Bs && Nt()));
}
function se(A, e) {
  var t = A.callbackNode;
  Ow(A, e);
  var r = Io(A, A === KA ? PA : 0);
  if (r === 0)
    t !== null && Pc(t), (A.callbackNode = null), (A.callbackPriority = 0);
  else if (((e = r & -r), A.callbackPriority !== e)) {
    if ((t != null && Pc(t), e === 1))
      A.tag === 0 ? kQ(Df.bind(null, A)) : gg(Df.bind(null, A)),
        LQ(function () {
          !(j & 6) && Nt();
        }),
        (t = null);
    else {
      switch (bd(r)) {
        case 1:
          t = Su;
          break;
        case 4:
          t = Pd;
          break;
        case 16:
          t = Ho;
          break;
        case 536870912:
          t = Vd;
          break;
        default:
          t = Ho;
      }
      t = dh(t, sh.bind(null, A));
    }
    (A.callbackPriority = e), (A.callbackNode = t);
  }
}
function sh(A, e) {
  if (((Bo = -1), (go = 0), j & 6)) throw Error(E(327));
  var t = A.callbackNode;
  if (Tr() && A.callbackNode !== t) return null;
  var r = Io(A, A === KA ? PA : 0);
  if (r === 0) return null;
  if (r & 30 || r & A.expiredLanes || e) e = Wo(A, r);
  else {
    e = r;
    var n = j;
    j |= 2;
    var i = lh();
    (KA !== A || PA !== e) && ((ze = null), (Vr = mA() + 500), zt(A, e));
    do
      try {
        t0();
        break;
      } catch (s) {
        ah(A, s);
      }
    while (1);
    Vu(),
      (Go.current = i),
      (j = n),
      EA !== null ? (e = 0) : ((KA = null), (PA = 0), (e = SA));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((n = ll(A)), n !== 0 && ((r = n), (e = Rl(A, n)))), e === 1)
    )
      throw ((t = ei), zt(A, 0), gt(A, r), se(A, mA()), t);
    if (e === 6) gt(A, r);
    else {
      if (
        ((n = A.current.alternate),
        !(r & 30) &&
          !A0(n) &&
          ((e = Wo(A, r)),
          e === 2 && ((i = ll(A)), i !== 0 && ((r = i), (e = Rl(A, i)))),
          e === 1))
      )
        throw ((t = ei), zt(A, 0), gt(A, r), se(A, mA()), t);
      switch (((A.finishedWork = n), (A.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Vt(A, re, ze);
          break;
        case 3:
          if (
            (gt(A, r), (r & 130023424) === r && ((e = rc + 500 - mA()), 10 < e))
          ) {
            if (Io(A, 0) !== 0) break;
            if (((n = A.suspendedLanes), (n & r) !== r)) {
              ZA(), (A.pingedLanes |= A.suspendedLanes & n);
              break;
            }
            A.timeoutHandle = pl(Vt.bind(null, A, re, ze), e);
            break;
          }
          Vt(A, re, ze);
          break;
        case 4:
          if ((gt(A, r), (r & 4194240) === r)) break;
          for (e = A.eventTimes, n = -1; 0 < r; ) {
            var o = 31 - De(r);
            (i = 1 << o), (o = e[o]), o > n && (n = o), (r &= ~i);
          }
          if (
            ((r = n),
            (r = mA() - r),
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
                : 1960 * qQ(r / 1960)) - r),
            10 < r)
          ) {
            A.timeoutHandle = pl(Vt.bind(null, A, re, ze), r);
            break;
          }
          Vt(A, re, ze);
          break;
        case 5:
          Vt(A, re, ze);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return se(A, mA()), A.callbackNode === t ? sh.bind(null, A) : null;
}
function Rl(A, e) {
  var t = xn;
  return (
    A.current.memoizedState.isDehydrated && (zt(A, e).flags |= 256),
    (A = Wo(A, e)),
    A !== 2 && ((e = re), (re = t), e !== null && Ml(e)),
    A
  );
}
function Ml(A) {
  re === null ? (re = A) : re.push.apply(re, A);
}
function A0(A) {
  for (var e = A; ; ) {
    if (e.flags & 16384) {
      var t = e.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var n = t[r],
            i = n.getSnapshot;
          n = n.value;
          try {
            if (!Oe(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = e.child), e.subtreeFlags & 16384 && t !== null))
      (t.return = e), (e = t);
    else {
      if (e === A) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === A) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function gt(A, e) {
  for (
    e &= ~tc,
      e &= ~ps,
      A.suspendedLanes |= e,
      A.pingedLanes &= ~e,
      A = A.expirationTimes;
    0 < e;

  ) {
    var t = 31 - De(e),
      r = 1 << t;
    (A[t] = -1), (e &= ~r);
  }
}
function Df(A) {
  if (j & 6) throw Error(E(327));
  Tr();
  var e = Io(A, 0);
  if (!(e & 1)) return se(A, mA()), null;
  var t = Wo(A, e);
  if (A.tag !== 0 && t === 2) {
    var r = ll(A);
    r !== 0 && ((e = r), (t = Rl(A, r)));
  }
  if (t === 1) throw ((t = ei), zt(A, 0), gt(A, e), se(A, mA()), t);
  if (t === 6) throw Error(E(345));
  return (
    (A.finishedWork = A.current.alternate),
    (A.finishedLanes = e),
    Vt(A, re, ze),
    se(A, mA()),
    null
  );
}
function nc(A, e) {
  var t = j;
  j |= 1;
  try {
    return A(e);
  } finally {
    (j = t), j === 0 && ((Vr = mA() + 500), Bs && Nt());
  }
}
function tr(A) {
  pt !== null && pt.tag === 0 && !(j & 6) && Tr();
  var e = j;
  j |= 1;
  var t = ye.transition,
    r = iA;
  try {
    if (((ye.transition = null), (iA = 1), A)) return A();
  } finally {
    (iA = r), (ye.transition = t), (j = e), !(j & 6) && Nt();
  }
}
function ic() {
  (ue = yr.current), fA(yr);
}
function zt(A, e) {
  (A.finishedWork = null), (A.finishedLanes = 0);
  var t = A.timeoutHandle;
  if ((t !== -1 && ((A.timeoutHandle = -1), xQ(t)), EA !== null))
    for (t = EA.return; t !== null; ) {
      var r = t;
      switch ((Nu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && To();
          break;
        case 3:
          _r(), fA(ie), fA(YA), zu();
          break;
        case 5:
          Ju(r);
          break;
        case 4:
          _r();
          break;
        case 13:
          fA(hA);
          break;
        case 19:
          fA(hA);
          break;
        case 10:
          Gu(r.type._context);
          break;
        case 22:
        case 23:
          ic();
      }
      t = t.return;
    }
  if (
    ((KA = A),
    (EA = A = St(A.current, null)),
    (PA = ue = e),
    (SA = 0),
    (ei = null),
    (tc = ps = er = 0),
    (re = xn = null),
    Xt !== null)
  ) {
    for (e = 0; e < Xt.length; e++)
      if (((t = Xt[e]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var n = r.next,
          i = t.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = n), (r.next = o);
        }
        t.pending = r;
      }
    Xt = null;
  }
  return A;
}
function ah(A, e) {
  do {
    var t = EA;
    try {
      if ((Vu(), (uo.current = Vo), Po)) {
        for (var r = pA.memoizedState; r !== null; ) {
          var n = r.queue;
          n !== null && (n.pending = null), (r = r.next);
        }
        Po = !1;
      }
      if (
        ((Ar = 0),
        (LA = HA = pA = null),
        (In = !1),
        (Zn = 0),
        (ec.current = null),
        t === null || t.return === null)
      ) {
        (SA = 1), (ei = e), (EA = null);
        break;
      }
      A: {
        var i = A,
          o = t.return,
          s = t,
          a = e;
        if (
          ((e = PA),
          (s.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var l = a,
            u = s,
            c = u.tag;
          if (!(u.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var B = u.alternate;
            B
              ? ((u.updateQueue = B.updateQueue),
                (u.memoizedState = B.memoizedState),
                (u.lanes = B.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var w = Uf(o);
          if (w !== null) {
            (w.flags &= -257),
              vf(w, o, s, i, e),
              w.mode & 1 && Cf(i, l, e),
              (e = w),
              (a = l);
            var g = e.updateQueue;
            if (g === null) {
              var p = new Set();
              p.add(a), (e.updateQueue = p);
            } else g.add(a);
            break A;
          } else {
            if (!(e & 1)) {
              Cf(i, l, e), oc();
              break A;
            }
            a = Error(E(426));
          }
        } else if (gA && s.mode & 1) {
          var F = Uf(o);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256),
              vf(F, o, s, i, e),
              _u(Pr(a, s));
            break A;
          }
        }
        (i = a = Pr(a, s)),
          SA !== 4 && (SA = 2),
          xn === null ? (xn = [i]) : xn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (e &= -e), (i.lanes |= e);
              var d = Xg(i, a, e);
              Bf(i, d);
              break A;
            case 1:
              s = a;
              var f = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == 'function' ||
                  (h !== null &&
                    typeof h.componentDidCatch == 'function' &&
                    (Ht === null || !Ht.has(h))))
              ) {
                (i.flags |= 65536), (e &= -e), (i.lanes |= e);
                var Q = Wg(i, s, e);
                Bf(i, Q);
                break A;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ch(t);
    } catch (v) {
      (e = v), EA === t && t !== null && (EA = t = t.return);
      continue;
    }
    break;
  } while (1);
}
function lh() {
  var A = Go.current;
  return (Go.current = Vo), A === null ? Vo : A;
}
function oc() {
  (SA === 0 || SA === 3 || SA === 2) && (SA = 4),
    KA === null || (!(er & 268435455) && !(ps & 268435455)) || gt(KA, PA);
}
function Wo(A, e) {
  var t = j;
  j |= 2;
  var r = lh();
  (KA !== A || PA !== e) && ((ze = null), zt(A, e));
  do
    try {
      e0();
      break;
    } catch (n) {
      ah(A, n);
    }
  while (1);
  if ((Vu(), (j = t), (Go.current = r), EA !== null)) throw Error(E(261));
  return (KA = null), (PA = 0), SA;
}
function e0() {
  for (; EA !== null; ) uh(EA);
}
function t0() {
  for (; EA !== null && !Hw(); ) uh(EA);
}
function uh(A) {
  var e = Bh(A.alternate, A, ue);
  (A.memoizedProps = A.pendingProps),
    e === null ? ch(A) : (EA = e),
    (ec.current = null);
}
function ch(A) {
  var e = A;
  do {
    var t = e.alternate;
    if (((A = e.return), e.flags & 32768)) {
      if (((t = YQ(t, e)), t !== null)) {
        (t.flags &= 32767), (EA = t);
        return;
      }
      if (A !== null)
        (A.flags |= 32768), (A.subtreeFlags = 0), (A.deletions = null);
      else {
        (SA = 6), (EA = null);
        return;
      }
    } else if (((t = zQ(t, e, ue)), t !== null)) {
      EA = t;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      EA = e;
      return;
    }
    EA = e = A;
  } while (e !== null);
  SA === 0 && (SA = 5);
}
function Vt(A, e, t) {
  var r = iA,
    n = ye.transition;
  try {
    (ye.transition = null), (iA = 1), r0(A, e, t, r);
  } finally {
    (ye.transition = n), (iA = r);
  }
  return null;
}
function r0(A, e, t, r) {
  do Tr();
  while (pt !== null);
  if (j & 6) throw Error(E(327));
  t = A.finishedWork;
  var n = A.finishedLanes;
  if (t === null) return null;
  if (((A.finishedWork = null), (A.finishedLanes = 0), t === A.current))
    throw Error(E(177));
  (A.callbackNode = null), (A.callbackPriority = 0);
  var i = t.lanes | t.childLanes;
  if (
    (Rw(A, i),
    A === KA && ((EA = KA = null), (PA = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      Li ||
      ((Li = !0),
      dh(Ho, function () {
        return Tr(), null;
      })),
    (i = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || i)
  ) {
    (i = ye.transition), (ye.transition = null);
    var o = iA;
    iA = 1;
    var s = j;
    (j |= 4),
      (ec.current = null),
      jQ(A, t),
      ih(t, A),
      FQ(gl),
      (So = !!dl),
      (gl = dl = null),
      (A.current = t),
      ZQ(t),
      Iw(),
      (j = s),
      (iA = o),
      (ye.transition = i);
  } else A.current = t;
  if (
    (Li && ((Li = !1), (pt = A), (Xo = n)),
    (i = A.pendingLanes),
    i === 0 && (Ht = null),
    Lw(t.stateNode),
    se(A, mA()),
    e !== null)
  )
    for (r = A.onRecoverableError, t = 0; t < e.length; t++)
      (n = e[t]), r(n.value, { componentStack: n.stack, digest: n.digest });
  if (bo) throw ((bo = !1), (A = kl), (kl = null), A);
  return (
    Xo & 1 && A.tag !== 0 && Tr(),
    (i = A.pendingLanes),
    i & 1 ? (A === Ol ? Ln++ : ((Ln = 0), (Ol = A))) : (Ln = 0),
    Nt(),
    null
  );
}
function Tr() {
  if (pt !== null) {
    var A = bd(Xo),
      e = ye.transition,
      t = iA;
    try {
      if (((ye.transition = null), (iA = 16 > A ? 16 : A), pt === null))
        var r = !1;
      else {
        if (((A = pt), (pt = null), (Xo = 0), j & 6)) throw Error(E(331));
        var n = j;
        for (j |= 4, O = A.current; O !== null; ) {
          var i = O,
            o = i.child;
          if (O.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var l = s[a];
                for (O = l; O !== null; ) {
                  var u = O;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Sn(8, u, i);
                  }
                  var c = u.child;
                  if (c !== null) (c.return = u), (O = c);
                  else
                    for (; O !== null; ) {
                      u = O;
                      var B = u.sibling,
                        w = u.return;
                      if ((th(u), u === l)) {
                        O = null;
                        break;
                      }
                      if (B !== null) {
                        (B.return = w), (O = B);
                        break;
                      }
                      O = w;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var p = g.child;
                if (p !== null) {
                  g.child = null;
                  do {
                    var F = p.sibling;
                    (p.sibling = null), (p = F);
                  } while (p !== null);
                }
              }
              O = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (O = o);
          else
            A: for (; O !== null; ) {
              if (((i = O), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Sn(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (O = d);
                break A;
              }
              O = i.return;
            }
        }
        var f = A.current;
        for (O = f; O !== null; ) {
          o = O;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) (h.return = o), (O = h);
          else
            A: for (o = f; O !== null; ) {
              if (((s = O), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hs(9, s);
                  }
                } catch (v) {
                  CA(s, s.return, v);
                }
              if (s === o) {
                O = null;
                break A;
              }
              var Q = s.sibling;
              if (Q !== null) {
                (Q.return = s.return), (O = Q);
                break A;
              }
              O = s.return;
            }
        }
        if (
          ((j = n), Nt(), Ve && typeof Ve.onPostCommitFiberRoot == 'function')
        )
          try {
            Ve.onPostCommitFiberRoot(as, A);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (iA = t), (ye.transition = e);
    }
  }
  return !1;
}
function kf(A, e, t) {
  (e = Pr(t, e)),
    (e = Xg(A, e, 1)),
    (A = Et(A, e, 1)),
    (e = ZA()),
    A !== null && (ai(A, 1, e), se(A, e));
}
function CA(A, e, t) {
  if (A.tag === 3) kf(A, A, t);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        kf(e, A, t);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Ht === null || !Ht.has(r)))
        ) {
          (A = Pr(t, A)),
            (A = Wg(e, A, 1)),
            (e = Et(e, A, 1)),
            (A = ZA()),
            e !== null && (ai(e, 1, A), se(e, A));
          break;
        }
      }
      e = e.return;
    }
}
function n0(A, e, t) {
  var r = A.pingCache;
  r !== null && r.delete(e),
    (e = ZA()),
    (A.pingedLanes |= A.suspendedLanes & t),
    KA === A &&
      (PA & t) === t &&
      (SA === 4 || (SA === 3 && (PA & 130023424) === PA && 500 > mA() - rc)
        ? zt(A, 0)
        : (tc |= t)),
    se(A, e);
}
function fh(A, e) {
  e === 0 &&
    (A.mode & 1
      ? ((e = Ui), (Ui <<= 1), !(Ui & 130023424) && (Ui = 4194304))
      : (e = 1));
  var t = ZA();
  (A = rt(A, e)), A !== null && (ai(A, e, t), se(A, t));
}
function i0(A) {
  var e = A.memoizedState,
    t = 0;
  e !== null && (t = e.retryLane), fh(A, t);
}
function o0(A, e) {
  var t = 0;
  switch (A.tag) {
    case 13:
      var r = A.stateNode,
        n = A.memoizedState;
      n !== null && (t = n.retryLane);
      break;
    case 19:
      r = A.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(e), fh(A, t);
}
var Bh;
Bh = function (A, e, t) {
  if (A !== null)
    if (A.memoizedProps !== e.pendingProps || ie.current) ne = !0;
    else {
      if (!(A.lanes & t) && !(e.flags & 128)) return (ne = !1), JQ(A, e, t);
      ne = !!(A.flags & 131072);
    }
  else (ne = !1), gA && e.flags & 1048576 && hg(e, Oo, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      fo(A, e), (A = e.pendingProps);
      var n = Rr(e, YA.current);
      Kr(e, t), (n = $u(null, e, r, A, n, t));
      var i = ju();
      return (
        (e.flags |= 1),
        typeof n == 'object' &&
        n !== null &&
        typeof n.render == 'function' &&
        n.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            oe(r) ? ((i = !0), Do(e)) : (i = !1),
            (e.memoizedState =
              n.state !== null && n.state !== void 0 ? n.state : null),
            Xu(e),
            (n.updater = ds),
            (e.stateNode = n),
            (n._reactInternals = e),
            ml(e, r, A, t),
            (e = Hl(null, e, r, !0, i, t)))
          : ((e.tag = 0), gA && i && Mu(e), jA(null, e, n, t), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      A: {
        switch (
          (fo(A, e),
          (A = e.pendingProps),
          (n = r._init),
          (r = n(r._payload)),
          (e.type = r),
          (n = e.tag = a0(r)),
          (A = Le(r, A)),
          n)
        ) {
          case 0:
            e = El(null, e, r, A, t);
            break A;
          case 1:
            e = yf(null, e, r, A, t);
            break A;
          case 11:
            e = Ff(null, e, r, A, t);
            break A;
          case 14:
            e = mf(null, e, r, Le(r.type, A), t);
            break A;
        }
        throw Error(E(306, r, ''));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (n = e.pendingProps),
        (n = e.elementType === r ? n : Le(r, n)),
        El(A, e, r, n, t)
      );
    case 1:
      return (
        (r = e.type),
        (n = e.pendingProps),
        (n = e.elementType === r ? n : Le(r, n)),
        yf(A, e, r, n, t)
      );
    case 3:
      A: {
        if (($g(e), A === null)) throw Error(E(387));
        (r = e.pendingProps),
          (i = e.memoizedState),
          (n = i.element),
          Cg(A, e),
          No(e, r, null, t);
        var o = e.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = i),
            (e.memoizedState = i),
            e.flags & 256)
          ) {
            (n = Pr(Error(E(423)), e)), (e = Ef(A, e, r, t, n));
            break A;
          } else if (r !== n) {
            (n = Pr(Error(E(424)), e)), (e = Ef(A, e, r, t, n));
            break A;
          } else
            for (
              ce = yt(e.stateNode.containerInfo.firstChild),
                fe = e,
                gA = !0,
                Te = null,
                t = mg(e, null, r, t),
                e.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((Mr(), r === n)) {
            e = nt(A, e, t);
            break A;
          }
          jA(A, e, r, t);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        yg(e),
        A === null && Ul(e),
        (r = e.type),
        (n = e.pendingProps),
        (i = A !== null ? A.memoizedProps : null),
        (o = n.children),
        hl(r, n) ? (o = null) : i !== null && hl(r, i) && (e.flags |= 32),
        Yg(A, e),
        jA(A, e, o, t),
        e.child
      );
    case 6:
      return A === null && Ul(e), null;
    case 13:
      return jg(A, e, t);
    case 4:
      return (
        Wu(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        A === null ? (e.child = Nr(e, null, r, t)) : jA(A, e, r, t),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (n = e.pendingProps),
        (n = e.elementType === r ? n : Le(r, n)),
        Ff(A, e, r, n, t)
      );
    case 7:
      return jA(A, e, e.pendingProps, t), e.child;
    case 8:
      return jA(A, e, e.pendingProps.children, t), e.child;
    case 12:
      return jA(A, e, e.pendingProps.children, t), e.child;
    case 10:
      A: {
        if (
          ((r = e.type._context),
          (n = e.pendingProps),
          (i = e.memoizedProps),
          (o = n.value),
          lA(Ro, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Oe(i.value, o)) {
            if (i.children === n.children && !ie.current) {
              e = nt(A, e, t);
              break A;
            }
          } else
            for (i = e.child, i !== null && (i.return = e); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                o = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = qe(-1, t & -t)), (a.tag = 2);
                      var l = i.updateQueue;
                      if (l !== null) {
                        l = l.shared;
                        var u = l.pending;
                        u === null
                          ? (a.next = a)
                          : ((a.next = u.next), (u.next = a)),
                          (l.pending = a);
                      }
                    }
                    (i.lanes |= t),
                      (a = i.alternate),
                      a !== null && (a.lanes |= t),
                      vl(i.return, t, e),
                      (s.lanes |= t);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) o = i.type === e.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(E(341));
                (o.lanes |= t),
                  (s = o.alternate),
                  s !== null && (s.lanes |= t),
                  vl(o, t, e),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        jA(A, e, n.children, t), (e = e.child);
      }
      return e;
    case 9:
      return (
        (n = e.type),
        (r = e.pendingProps.children),
        Kr(e, t),
        (n = Ee(n)),
        (r = r(n)),
        (e.flags |= 1),
        jA(A, e, r, t),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (n = Le(r, e.pendingProps)),
        (n = Le(r.type, n)),
        mf(A, e, r, n, t)
      );
    case 15:
      return Jg(A, e, e.type, e.pendingProps, t);
    case 17:
      return (
        (r = e.type),
        (n = e.pendingProps),
        (n = e.elementType === r ? n : Le(r, n)),
        fo(A, e),
        (e.tag = 1),
        oe(r) ? ((A = !0), Do(e)) : (A = !1),
        Kr(e, t),
        vg(e, r, n),
        ml(e, r, n, t),
        Hl(null, e, r, !0, A, t)
      );
    case 19:
      return Zg(A, e, t);
    case 22:
      return zg(A, e, t);
  }
  throw Error(E(156, e.tag));
};
function dh(A, e) {
  return _d(A, e);
}
function s0(A, e, t, r) {
  (this.tag = A),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
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
function ve(A, e, t, r) {
  return new s0(A, e, t, r);
}
function sc(A) {
  return (A = A.prototype), !(!A || !A.isReactComponent);
}
function a0(A) {
  if (typeof A == 'function') return sc(A) ? 1 : 0;
  if (A != null) {
    if (((A = A.$$typeof), A === Eu)) return 11;
    if (A === Hu) return 14;
  }
  return 2;
}
function St(A, e) {
  var t = A.alternate;
  return (
    t === null
      ? ((t = ve(A.tag, e, A.key, A.mode)),
        (t.elementType = A.elementType),
        (t.type = A.type),
        (t.stateNode = A.stateNode),
        (t.alternate = A),
        (A.alternate = t))
      : ((t.pendingProps = e),
        (t.type = A.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = A.flags & 14680064),
    (t.childLanes = A.childLanes),
    (t.lanes = A.lanes),
    (t.child = A.child),
    (t.memoizedProps = A.memoizedProps),
    (t.memoizedState = A.memoizedState),
    (t.updateQueue = A.updateQueue),
    (e = A.dependencies),
    (t.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (t.sibling = A.sibling),
    (t.index = A.index),
    (t.ref = A.ref),
    t
  );
}
function ho(A, e, t, r, n, i) {
  var o = 2;
  if (((r = A), typeof A == 'function')) sc(A) && (o = 1);
  else if (typeof A == 'string') o = 5;
  else
    A: switch (A) {
      case gr:
        return Yt(t.children, n, i, e);
      case yu:
        (o = 8), (n |= 8);
        break;
      case za:
        return (
          (A = ve(12, t, e, n | 2)), (A.elementType = za), (A.lanes = i), A
        );
      case Ya:
        return (A = ve(13, t, e, n)), (A.elementType = Ya), (A.lanes = i), A;
      case $a:
        return (A = ve(19, t, e, n)), (A.elementType = $a), (A.lanes = i), A;
      case Fd:
        return ws(t, n, i, e);
      default:
        if (typeof A == 'object' && A !== null)
          switch (A.$$typeof) {
            case Ud:
              o = 10;
              break A;
            case vd:
              o = 9;
              break A;
            case Eu:
              o = 11;
              break A;
            case Hu:
              o = 14;
              break A;
            case ct:
              (o = 16), (r = null);
              break A;
          }
        throw Error(E(130, A == null ? A : typeof A, ''));
    }
  return (
    (e = ve(o, t, e, n)), (e.elementType = A), (e.type = r), (e.lanes = i), e
  );
}
function Yt(A, e, t, r) {
  return (A = ve(7, A, r, e)), (A.lanes = t), A;
}
function ws(A, e, t, r) {
  return (
    (A = ve(22, A, r, e)),
    (A.elementType = Fd),
    (A.lanes = t),
    (A.stateNode = { isHidden: !1 }),
    A
  );
}
function wa(A, e, t) {
  return (A = ve(6, A, null, e)), (A.lanes = t), A;
}
function Qa(A, e, t) {
  return (
    (e = ve(4, A.children !== null ? A.children : [], A.key, e)),
    (e.lanes = t),
    (e.stateNode = {
      containerInfo: A.containerInfo,
      pendingChildren: null,
      implementation: A.implementation,
    }),
    e
  );
}
function l0(A, e, t, r, n) {
  (this.tag = e),
    (this.containerInfo = A),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = qs(0)),
    (this.expirationTimes = qs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = qs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = n),
    (this.mutableSourceEagerHydrationData = null);
}
function ac(A, e, t, r, n, i, o, s, a) {
  return (
    (A = new l0(A, e, t, s, a)),
    e === 1 ? ((e = 1), i === !0 && (e |= 8)) : (e = 0),
    (i = ve(3, null, null, e)),
    (A.current = i),
    (i.stateNode = A),
    (i.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Xu(i),
    A
  );
}
function u0(A, e, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: dr,
    key: r == null ? null : '' + r,
    children: A,
    containerInfo: e,
    implementation: t,
  };
}
function gh(A) {
  if (!A) return kt;
  A = A._reactInternals;
  A: {
    if (nr(A) !== A || A.tag !== 1) throw Error(E(170));
    var e = A;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break A;
        case 1:
          if (oe(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break A;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(E(171));
  }
  if (A.tag === 1) {
    var t = A.type;
    if (oe(t)) return dg(A, t, e);
  }
  return e;
}
function hh(A, e, t, r, n, i, o, s, a) {
  return (
    (A = ac(t, r, !0, A, n, i, o, s, a)),
    (A.context = gh(null)),
    (t = A.current),
    (r = ZA()),
    (n = It(t)),
    (i = qe(r, n)),
    (i.callback = e ?? null),
    Et(t, i, n),
    (A.current.lanes = n),
    ai(A, n, r),
    se(A, r),
    A
  );
}
function Qs(A, e, t, r) {
  var n = e.current,
    i = ZA(),
    o = It(n);
  return (
    (t = gh(t)),
    e.context === null ? (e.context = t) : (e.pendingContext = t),
    (e = qe(i, o)),
    (e.payload = { element: A }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (A = Et(n, e, o)),
    A !== null && (ke(A, n, o, i), lo(A, n, o)),
    o
  );
}
function Jo(A) {
  if (((A = A.current), !A.child)) return null;
  switch (A.child.tag) {
    case 5:
      return A.child.stateNode;
    default:
      return A.child.stateNode;
  }
}
function Of(A, e) {
  if (((A = A.memoizedState), A !== null && A.dehydrated !== null)) {
    var t = A.retryLane;
    A.retryLane = t !== 0 && t < e ? t : e;
  }
}
function lc(A, e) {
  Of(A, e), (A = A.alternate) && Of(A, e);
}
function c0() {
  return null;
}
var ph =
  typeof reportError == 'function'
    ? reportError
    : function (A) {
        console.error(A);
      };
function uc(A) {
  this._internalRoot = A;
}
Cs.prototype.render = uc.prototype.render = function (A) {
  var e = this._internalRoot;
  if (e === null) throw Error(E(409));
  Qs(A, e, null, null);
};
Cs.prototype.unmount = uc.prototype.unmount = function () {
  var A = this._internalRoot;
  if (A !== null) {
    this._internalRoot = null;
    var e = A.containerInfo;
    tr(function () {
      Qs(null, A, null, null);
    }),
      (e[tt] = null);
  }
};
function Cs(A) {
  this._internalRoot = A;
}
Cs.prototype.unstable_scheduleHydration = function (A) {
  if (A) {
    var e = Jd();
    A = { blockedOn: null, target: A, priority: e };
    for (var t = 0; t < dt.length && e !== 0 && e < dt[t].priority; t++);
    dt.splice(t, 0, A), t === 0 && Yd(A);
  }
};
function cc(A) {
  return !(!A || (A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11));
}
function Us(A) {
  return !(
    !A ||
    (A.nodeType !== 1 &&
      A.nodeType !== 9 &&
      A.nodeType !== 11 &&
      (A.nodeType !== 8 || A.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Rf() {}
function f0(A, e, t, r, n) {
  if (n) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var l = Jo(o);
        i.call(l);
      };
    }
    var o = hh(e, r, A, 0, null, !1, !1, '', Rf);
    return (
      (A._reactRootContainer = o),
      (A[tt] = o.current),
      Jn(A.nodeType === 8 ? A.parentNode : A),
      tr(),
      o
    );
  }
  for (; (n = A.lastChild); ) A.removeChild(n);
  if (typeof r == 'function') {
    var s = r;
    r = function () {
      var l = Jo(a);
      s.call(l);
    };
  }
  var a = ac(A, 0, !1, null, null, !1, !1, '', Rf);
  return (
    (A._reactRootContainer = a),
    (A[tt] = a.current),
    Jn(A.nodeType === 8 ? A.parentNode : A),
    tr(function () {
      Qs(e, a, t, r);
    }),
    a
  );
}
function vs(A, e, t, r, n) {
  var i = t._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof n == 'function') {
      var s = n;
      n = function () {
        var a = Jo(o);
        s.call(a);
      };
    }
    Qs(e, o, A, n);
  } else o = f0(t, e, A, n, r);
  return Jo(o);
}
Xd = function (A) {
  switch (A.tag) {
    case 3:
      var e = A.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var t = dn(e.pendingLanes);
        t !== 0 &&
          (xu(e, t | 1), se(e, mA()), !(j & 6) && ((Vr = mA() + 500), Nt()));
      }
      break;
    case 13:
      tr(function () {
        var r = rt(A, 1);
        if (r !== null) {
          var n = ZA();
          ke(r, A, 1, n);
        }
      }),
        lc(A, 1);
  }
};
Lu = function (A) {
  if (A.tag === 13) {
    var e = rt(A, 134217728);
    if (e !== null) {
      var t = ZA();
      ke(e, A, 134217728, t);
    }
    lc(A, 134217728);
  }
};
Wd = function (A) {
  if (A.tag === 13) {
    var e = It(A),
      t = rt(A, e);
    if (t !== null) {
      var r = ZA();
      ke(t, A, e, r);
    }
    lc(A, e);
  }
};
Jd = function () {
  return iA;
};
zd = function (A, e) {
  var t = iA;
  try {
    return (iA = A), e();
  } finally {
    iA = t;
  }
};
ol = function (A, e, t) {
  switch (e) {
    case 'input':
      if ((qa(A, t), (e = t.name), t.type === 'radio' && e != null)) {
        for (t = A; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            'input[name=' + JSON.stringify('' + e) + '][type="radio"]'
          ),
            e = 0;
          e < t.length;
          e++
        ) {
          var r = t[e];
          if (r !== A && r.form === A.form) {
            var n = fs(r);
            if (!n) throw Error(E(90));
            yd(r), qa(r, n);
          }
        }
      }
      break;
    case 'textarea':
      Hd(A, t);
      break;
    case 'select':
      (e = t.value), e != null && Ir(A, !!t.multiple, e, !1);
  }
};
Dd = nc;
kd = tr;
var B0 = { usingClientEntryPoint: !1, Events: [ui, Qr, fs, Kd, Td, nc] },
  sn = {
    findFiberByHostInstance: bt,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  d0 = {
    bundleType: sn.bundleType,
    version: sn.version,
    rendererPackageName: sn.rendererPackageName,
    rendererConfig: sn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ot.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (A) {
      return (A = Md(A)), A === null ? null : A.stateNode;
    },
    findFiberByHostInstance: sn.findFiberByHostInstance || c0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Ki = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ki.isDisabled && Ki.supportsFiber)
    try {
      (as = Ki.inject(d0)), (Ve = Ki);
    } catch {}
}
de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B0;
de.createPortal = function (A, e) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!cc(e)) throw Error(E(200));
  return u0(A, e, null, t);
};
de.createRoot = function (A, e) {
  if (!cc(A)) throw Error(E(299));
  var t = !1,
    r = '',
    n = ph;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (t = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (n = e.onRecoverableError)),
    (e = ac(A, 1, !1, null, null, t, !1, r, n)),
    (A[tt] = e.current),
    Jn(A.nodeType === 8 ? A.parentNode : A),
    new uc(e)
  );
};
de.findDOMNode = function (A) {
  if (A == null) return null;
  if (A.nodeType === 1) return A;
  var e = A._reactInternals;
  if (e === void 0)
    throw typeof A.render == 'function'
      ? Error(E(188))
      : ((A = Object.keys(A).join(',')), Error(E(268, A)));
  return (A = Md(e)), (A = A === null ? null : A.stateNode), A;
};
de.flushSync = function (A) {
  return tr(A);
};
de.hydrate = function (A, e, t) {
  if (!Us(e)) throw Error(E(200));
  return vs(null, A, e, !0, t);
};
de.hydrateRoot = function (A, e, t) {
  if (!cc(A)) throw Error(E(405));
  var r = (t != null && t.hydratedSources) || null,
    n = !1,
    i = '',
    o = ph;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (e = hh(e, null, A, 1, t ?? null, n, !1, i, o)),
    (A[tt] = e.current),
    Jn(A),
    r)
  )
    for (A = 0; A < r.length; A++)
      (t = r[A]),
        (n = t._getVersion),
        (n = n(t._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [t, n])
          : e.mutableSourceEagerHydrationData.push(t, n);
  return new Cs(e);
};
de.render = function (A, e, t) {
  if (!Us(e)) throw Error(E(200));
  return vs(null, A, e, !1, t);
};
de.unmountComponentAtNode = function (A) {
  if (!Us(A)) throw Error(E(40));
  return A._reactRootContainer
    ? (tr(function () {
        vs(null, null, A, !1, function () {
          (A._reactRootContainer = null), (A[tt] = null);
        });
      }),
      !0)
    : !1;
};
de.unstable_batchedUpdates = nc;
de.unstable_renderSubtreeIntoContainer = function (A, e, t, r) {
  if (!Us(t)) throw Error(E(200));
  if (A == null || A._reactInternals === void 0) throw Error(E(38));
  return vs(A, e, t, !1, r);
};
de.version = '18.2.0-next-9e3b772b8-20220608';
(function (A) {
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  e(), (A.exports = de);
})(cw);
var Mf = Fo;
(Xa.createRoot = Mf.createRoot), (Xa.hydrateRoot = Mf.hydrateRoot);
/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Nl() {
  return (
    (Nl = Object.assign
      ? Object.assign.bind()
      : function (A) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (A[r] = t[r]);
          }
          return A;
        }),
    Nl.apply(this, arguments)
  );
}
var wt;
(function (A) {
  (A.Pop = 'POP'), (A.Push = 'PUSH'), (A.Replace = 'REPLACE');
})(wt || (wt = {}));
const Nf = 'popstate';
function g0(A) {
  A === void 0 && (A = {});
  function e(r, n) {
    let { pathname: i, search: o, hash: s } = r.location;
    return _l(
      '',
      { pathname: i, search: o, hash: s },
      (n.state && n.state.usr) || null,
      (n.state && n.state.key) || 'default'
    );
  }
  function t(r, n) {
    return typeof n == 'string' ? n : fc(n);
  }
  return w0(e, t, null, A);
}
function ae(A, e) {
  if (A === !1 || A === null || typeof A > 'u') throw new Error(e);
}
function h0() {
  return Math.random().toString(36).substr(2, 8);
}
function _f(A) {
  return { usr: A.state, key: A.key };
}
function _l(A, e, t, r) {
  return (
    t === void 0 && (t = null),
    Nl(
      { pathname: typeof A == 'string' ? A : A.pathname, search: '', hash: '' },
      typeof e == 'string' ? Fs(e) : e,
      { state: t, key: (e && e.key) || r || h0() }
    )
  );
}
function fc(A) {
  let { pathname: e = '/', search: t = '', hash: r = '' } = A;
  return (
    t && t !== '?' && (e += t.charAt(0) === '?' ? t : '?' + t),
    r && r !== '#' && (e += r.charAt(0) === '#' ? r : '#' + r),
    e
  );
}
function Fs(A) {
  let e = {};
  if (A) {
    let t = A.indexOf('#');
    t >= 0 && ((e.hash = A.substr(t)), (A = A.substr(0, t)));
    let r = A.indexOf('?');
    r >= 0 && ((e.search = A.substr(r)), (A = A.substr(0, r))),
      A && (e.pathname = A);
  }
  return e;
}
function p0(A) {
  let e =
      typeof window < 'u' &&
      typeof window.location < 'u' &&
      window.location.origin !== 'null'
        ? window.location.origin
        : window.location.href,
    t = typeof A == 'string' ? A : fc(A);
  return (
    ae(
      e,
      'No window.location.(origin|href) available to create URL for href: ' + t
    ),
    new URL(t, e)
  );
}
function w0(A, e, t, r) {
  r === void 0 && (r = {});
  let { window: n = document.defaultView, v5Compat: i = !1 } = r,
    o = n.history,
    s = wt.Pop,
    a = null;
  function l() {
    (s = wt.Pop), a && a({ action: s, location: B.location });
  }
  function u(w, g) {
    s = wt.Push;
    let p = _l(B.location, w, g);
    t && t(p, w);
    let F = _f(p),
      d = B.createHref(p);
    try {
      o.pushState(F, '', d);
    } catch {
      n.location.assign(d);
    }
    i && a && a({ action: s, location: B.location });
  }
  function c(w, g) {
    s = wt.Replace;
    let p = _l(B.location, w, g);
    t && t(p, w);
    let F = _f(p),
      d = B.createHref(p);
    o.replaceState(F, '', d), i && a && a({ action: s, location: B.location });
  }
  let B = {
    get action() {
      return s;
    },
    get location() {
      return A(n, o);
    },
    listen(w) {
      if (a) throw new Error('A history only accepts one active listener');
      return (
        n.addEventListener(Nf, l),
        (a = w),
        () => {
          n.removeEventListener(Nf, l), (a = null);
        }
      );
    },
    createHref(w) {
      return e(n, w);
    },
    encodeLocation(w) {
      let g = p0(typeof w == 'string' ? w : fc(w));
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: u,
    replace: c,
    go(w) {
      return o.go(w);
    },
  };
  return B;
}
var Pf;
(function (A) {
  (A.data = 'data'),
    (A.deferred = 'deferred'),
    (A.redirect = 'redirect'),
    (A.error = 'error');
})(Pf || (Pf = {}));
function Q0(A, e, t) {
  t === void 0 && (t = '/');
  let r = typeof e == 'string' ? Fs(e) : e,
    n = Ch(r.pathname || '/', t);
  if (n == null) return null;
  let i = wh(A);
  C0(i);
  let o = null;
  for (let s = 0; o == null && s < i.length; ++s) o = S0(i[s], K0(n));
  return o;
}
function wh(A, e, t, r) {
  e === void 0 && (e = []), t === void 0 && (t = []), r === void 0 && (r = '');
  let n = (i, o, s) => {
    let a = {
      relativePath: s === void 0 ? i.path || '' : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    a.relativePath.startsWith('/') &&
      (ae(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let l = Dr([r, a.relativePath]),
      u = t.concat(a);
    i.children &&
      i.children.length > 0 &&
      (ae(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + l + '".')
      ),
      wh(i.children, e, u, l)),
      !(i.path == null && !i.index) &&
        e.push({ path: l, score: H0(l, i.index), routesMeta: u });
  };
  return (
    A.forEach((i, o) => {
      var s;
      if (i.path === '' || !((s = i.path) != null && s.includes('?'))) n(i, o);
      else for (let a of Qh(i.path)) n(i, o, a);
    }),
    e
  );
}
function Qh(A) {
  let e = A.split('/');
  if (e.length === 0) return [];
  let [t, ...r] = e,
    n = t.endsWith('?'),
    i = t.replace(/\?$/, '');
  if (r.length === 0) return n ? [i, ''] : [i];
  let o = Qh(r.join('/')),
    s = [];
  return (
    s.push(...o.map((a) => (a === '' ? i : [i, a].join('/')))),
    n && s.push(...o),
    s.map((a) => (A.startsWith('/') && a === '' ? '/' : a))
  );
}
function C0(A) {
  A.sort((e, t) =>
    e.score !== t.score
      ? t.score - e.score
      : I0(
          e.routesMeta.map((r) => r.childrenIndex),
          t.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const U0 = /^:\w+$/,
  v0 = 3,
  F0 = 2,
  m0 = 1,
  y0 = 10,
  E0 = -2,
  Vf = (A) => A === '*';
function H0(A, e) {
  let t = A.split('/'),
    r = t.length;
  return (
    t.some(Vf) && (r += E0),
    e && (r += F0),
    t
      .filter((n) => !Vf(n))
      .reduce((n, i) => n + (U0.test(i) ? v0 : i === '' ? m0 : y0), r)
  );
}
function I0(A, e) {
  return A.length === e.length && A.slice(0, -1).every((r, n) => r === e[n])
    ? A[A.length - 1] - e[e.length - 1]
    : 0;
}
function S0(A, e) {
  let { routesMeta: t } = A,
    r = {},
    n = '/',
    i = [];
  for (let o = 0; o < t.length; ++o) {
    let s = t[o],
      a = o === t.length - 1,
      l = n === '/' ? e : e.slice(n.length) || '/',
      u = x0(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        l
      );
    if (!u) return null;
    Object.assign(r, u.params);
    let c = s.route;
    i.push({
      params: r,
      pathname: Dr([n, u.pathname]),
      pathnameBase: D0(Dr([n, u.pathnameBase])),
      route: c,
    }),
      u.pathnameBase !== '/' && (n = Dr([n, u.pathnameBase]));
  }
  return i;
}
function x0(A, e) {
  typeof A == 'string' && (A = { path: A, caseSensitive: !1, end: !0 });
  let [t, r] = L0(A.path, A.caseSensitive, A.end),
    n = e.match(t);
  if (!n) return null;
  let i = n[0],
    o = i.replace(/(.)\/+$/, '$1'),
    s = n.slice(1);
  return {
    params: r.reduce((l, u, c) => {
      if (u === '*') {
        let B = s[c] || '';
        o = i.slice(0, i.length - B.length).replace(/(.)\/+$/, '$1');
      }
      return (l[u] = T0(s[c] || '', u)), l;
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: A,
  };
}
function L0(A, e, t) {
  e === void 0 && (e = !1),
    t === void 0 && (t = !0),
    Bc(
      A === '*' || !A.endsWith('*') || A.endsWith('/*'),
      'Route path "' +
        A +
        '" will be treated as if it were ' +
        ('"' + A.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + A.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    n =
      '^' +
      A.replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (o, s) => (r.push(s), '/([^\\/]+)'));
  return (
    A.endsWith('*')
      ? (r.push('*'),
        (n += A === '*' || A === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : t
      ? (n += '\\/*$')
      : A !== '' && A !== '/' && (n += '(?:(?=\\/|$))'),
    [new RegExp(n, e ? void 0 : 'i'), r]
  );
}
function K0(A) {
  try {
    return decodeURI(A);
  } catch (e) {
    return (
      Bc(
        !1,
        'The URL path "' +
          A +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + e + ').')
      ),
      A
    );
  }
}
function T0(A, e) {
  try {
    return decodeURIComponent(A);
  } catch (t) {
    return (
      Bc(
        !1,
        'The value for the URL param "' +
          e +
          '" will not be decoded because' +
          (' the string "' +
            A +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + t + ').')
      ),
      A
    );
  }
}
function Ch(A, e) {
  if (e === '/') return A;
  if (!A.toLowerCase().startsWith(e.toLowerCase())) return null;
  let t = e.endsWith('/') ? e.length - 1 : e.length,
    r = A.charAt(t);
  return r && r !== '/' ? null : A.slice(t) || '/';
}
function Bc(A, e) {
  if (!A) {
    typeof console < 'u' && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
const Dr = (A) => A.join('/').replace(/\/\/+/g, '/'),
  D0 = (A) => A.replace(/\/+$/, '').replace(/^\/*/, '/');
class k0 {
  constructor(e, t, r, n) {
    n === void 0 && (n = !1),
      (this.status = e),
      (this.statusText = t || ''),
      (this.internal = n),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function O0(A) {
  return A instanceof k0;
}
const R0 = ['post', 'put', 'patch', 'delete'];
[...R0];
/**
 * React Router v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Pl() {
  return (
    (Pl = Object.assign
      ? Object.assign.bind()
      : function (A) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (A[r] = t[r]);
          }
          return A;
        }),
    Pl.apply(this, arguments)
  );
}
function M0(A, e) {
  return (A === e && (A !== 0 || 1 / A === 1 / e)) || (A !== A && e !== e);
}
const N0 = typeof Object.is == 'function' ? Object.is : M0,
  { useState: _0, useEffect: P0, useLayoutEffect: V0, useDebugValue: G0 } = ba;
function b0(A, e, t) {
  const r = e(),
    [{ inst: n }, i] = _0({ inst: { value: r, getSnapshot: e } });
  return (
    V0(() => {
      (n.value = r), (n.getSnapshot = e), Ca(n) && i({ inst: n });
    }, [A, r, e]),
    P0(
      () => (
        Ca(n) && i({ inst: n }),
        A(() => {
          Ca(n) && i({ inst: n });
        })
      ),
      [A]
    ),
    G0(r),
    r
  );
}
function Ca(A) {
  const e = A.getSnapshot,
    t = A.value;
  try {
    const r = e();
    return !N0(t, r);
  } catch {
    return !0;
  }
}
function X0(A, e, t) {
  return e();
}
const W0 =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  J0 = !W0,
  z0 = J0 ? X0 : b0;
'useSyncExternalStore' in ba && ((A) => A.useSyncExternalStore)(ba);
const Uh = S.createContext(null),
  vh = S.createContext(null),
  Fh = S.createContext(null),
  ms = S.createContext(null),
  ys = S.createContext({ outlet: null, matches: [] }),
  mh = S.createContext(null);
function dc() {
  return S.useContext(ms) != null;
}
function Y0() {
  return dc() || ae(!1), S.useContext(ms).location;
}
function $0(A, e) {
  dc() || ae(!1);
  let { navigator: t } = S.useContext(Fh),
    r = S.useContext(vh),
    { matches: n } = S.useContext(ys),
    i = n[n.length - 1],
    o = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : '/';
  i && i.route;
  let a = Y0(),
    l;
  if (e) {
    var u;
    let p = typeof e == 'string' ? Fs(e) : e;
    s === '/' || ((u = p.pathname) != null && u.startsWith(s)) || ae(!1),
      (l = p);
  } else l = a;
  let c = l.pathname || '/',
    B = s === '/' ? c : c.slice(s.length) || '/',
    w = Q0(A, { pathname: B }),
    g = AC(
      w &&
        w.map((p) =>
          Object.assign({}, p, {
            params: Object.assign({}, o, p.params),
            pathname: Dr([
              s,
              t.encodeLocation
                ? t.encodeLocation(p.pathname).pathname
                : p.pathname,
            ]),
            pathnameBase:
              p.pathnameBase === '/'
                ? s
                : Dr([
                    s,
                    t.encodeLocation
                      ? t.encodeLocation(p.pathnameBase).pathname
                      : p.pathnameBase,
                  ]),
          })
        ),
      n,
      r || void 0
    );
  return e && g
    ? S.createElement(
        ms.Provider,
        {
          value: {
            location: Pl(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              l
            ),
            navigationType: wt.Pop,
          },
        },
        g
      )
    : g;
}
function j0() {
  let A = nC(),
    e = O0(A)
      ? A.status + ' ' + A.statusText
      : A instanceof Error
      ? A.message
      : JSON.stringify(A),
    t = A instanceof Error ? A.stack : null,
    r = 'rgba(200,200,200, 0.5)',
    n = { padding: '0.5rem', backgroundColor: r },
    i = { padding: '2px 4px', backgroundColor: r };
  return S.createElement(
    S.Fragment,
    null,
    S.createElement('h2', null, 'Unhandled Thrown Error!'),
    S.createElement('h3', { style: { fontStyle: 'italic' } }, e),
    t ? S.createElement('pre', { style: n }, t) : null,
    S.createElement('p', null, '💿 Hey developer 👋'),
    S.createElement(
      'p',
      null,
      'You can provide a way better UX than this when your app throws errors by providing your own ',
      S.createElement('code', { style: i }, 'errorElement'),
      ' props on ',
      S.createElement('code', { style: i }, '<Route>')
    )
  );
}
class Z0 extends S.Component {
  constructor(e) {
    super(e), (this.state = { location: e.location, error: e.error });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location
      ? { error: e.error, location: e.location }
      : { error: e.error || t.error, location: t.location };
  }
  componentDidCatch(e, t) {
    console.error(
      'React Router caught the following error during render',
      e,
      t
    );
  }
  render() {
    return this.state.error
      ? S.createElement(
          ys.Provider,
          { value: this.props.routeContext },
          S.createElement(mh.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function q0(A) {
  let { routeContext: e, match: t, children: r } = A,
    n = S.useContext(Uh);
  return (
    n &&
      n.static &&
      n.staticContext &&
      t.route.errorElement &&
      (n.staticContext._deepestRenderedBoundaryId = t.route.id),
    S.createElement(ys.Provider, { value: e }, r)
  );
}
function AC(A, e, t) {
  if ((e === void 0 && (e = []), A == null))
    if (t != null && t.errors) A = t.matches;
    else return null;
  let r = A,
    n = t == null ? void 0 : t.errors;
  if (n != null) {
    let i = r.findIndex(
      (o) => o.route.id && (n == null ? void 0 : n[o.route.id])
    );
    i >= 0 || ae(!1), (r = r.slice(0, Math.min(r.length, i + 1)));
  }
  return r.reduceRight((i, o, s) => {
    let a = o.route.id ? (n == null ? void 0 : n[o.route.id]) : null,
      l = t ? o.route.errorElement || S.createElement(j0, null) : null,
      u = e.concat(r.slice(0, s + 1)),
      c = () =>
        S.createElement(
          q0,
          { match: o, routeContext: { outlet: i, matches: u } },
          a ? l : o.route.element !== void 0 ? o.route.element : i
        );
    return t && (o.route.errorElement || s === 0)
      ? S.createElement(Z0, {
          location: t.location,
          component: l,
          error: a,
          children: c(),
          routeContext: { outlet: null, matches: u },
        })
      : c();
  }, null);
}
var Gf;
(function (A) {
  A.UseRevalidator = 'useRevalidator';
})(Gf || (Gf = {}));
var zo;
(function (A) {
  (A.UseLoaderData = 'useLoaderData'),
    (A.UseActionData = 'useActionData'),
    (A.UseRouteError = 'useRouteError'),
    (A.UseNavigation = 'useNavigation'),
    (A.UseRouteLoaderData = 'useRouteLoaderData'),
    (A.UseMatches = 'useMatches'),
    (A.UseRevalidator = 'useRevalidator');
})(zo || (zo = {}));
function eC(A) {
  let e = S.useContext(vh);
  return e || ae(!1), e;
}
function tC(A) {
  let e = S.useContext(ys);
  return e || ae(!1), e;
}
function rC(A) {
  let e = tC(),
    t = e.matches[e.matches.length - 1];
  return t.route.id || ae(!1), t.route.id;
}
function nC() {
  var A;
  let e = S.useContext(mh),
    t = eC(zo.UseRouteError),
    r = rC(zo.UseRouteError);
  return e || ((A = t.errors) == null ? void 0 : A[r]);
}
function Vl(A) {
  ae(!1);
}
function iC(A) {
  let {
    basename: e = '/',
    children: t = null,
    location: r,
    navigationType: n = wt.Pop,
    navigator: i,
    static: o = !1,
  } = A;
  dc() && ae(!1);
  let s = e.replace(/^\/*/, '/'),
    a = S.useMemo(() => ({ basename: s, navigator: i, static: o }), [s, i, o]);
  typeof r == 'string' && (r = Fs(r));
  let {
      pathname: l = '/',
      search: u = '',
      hash: c = '',
      state: B = null,
      key: w = 'default',
    } = r,
    g = S.useMemo(() => {
      let p = Ch(l, s);
      return p == null
        ? null
        : { pathname: p, search: u, hash: c, state: B, key: w };
    }, [s, l, u, c, B, w]);
  return g == null
    ? null
    : S.createElement(
        Fh.Provider,
        { value: a },
        S.createElement(ms.Provider, {
          children: t,
          value: { location: g, navigationType: n },
        })
      );
}
function oC(A) {
  let { children: e, location: t } = A,
    r = S.useContext(Uh),
    n = r && !e ? r.router.routes : Gl(e);
  return $0(n, t);
}
var bf;
(function (A) {
  (A[(A.pending = 0)] = 'pending'),
    (A[(A.success = 1)] = 'success'),
    (A[(A.error = 2)] = 'error');
})(bf || (bf = {}));
new Promise(() => {});
function Gl(A, e) {
  e === void 0 && (e = []);
  let t = [];
  return (
    S.Children.forEach(A, (r, n) => {
      if (!S.isValidElement(r)) return;
      if (r.type === S.Fragment) {
        t.push.apply(t, Gl(r.props.children, e));
        return;
      }
      r.type !== Vl && ae(!1), !r.props.index || !r.props.children || ae(!1);
      let i = [...e, n],
        o = {
          id: r.props.id || i.join('-'),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
        };
      r.props.children && (o.children = Gl(r.props.children, i)), t.push(o);
    }),
    t
  );
}
/**
 * React Router DOM v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function sC(A) {
  let { basename: e, children: t, window: r } = A,
    n = S.useRef();
  n.current == null && (n.current = g0({ window: r, v5Compat: !0 }));
  let i = n.current,
    [o, s] = S.useState({ action: i.action, location: i.location });
  return (
    S.useLayoutEffect(() => i.listen(s), [i]),
    S.createElement(iC, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: i,
    })
  );
}
var Xf;
(function (A) {
  (A.UseScrollRestoration = 'useScrollRestoration'),
    (A.UseSubmitImpl = 'useSubmitImpl'),
    (A.UseFetcher = 'useFetcher');
})(Xf || (Xf = {}));
var Wf;
(function (A) {
  (A.UseFetchers = 'useFetchers'),
    (A.UseScrollRestoration = 'useScrollRestoration');
})(Wf || (Wf = {}));
function aC() {
  return V('div', { children: V('h1', { children: 'Not Found' }) });
}
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */ /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var bl =
  function (A, e) {
    return (
      (bl =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, r) {
            t.__proto__ = r;
          }) ||
        function (t, r) {
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        }),
      bl(A, e)
    );
  };
function Re(A, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(
      'Class extends value ' + String(e) + ' is not a constructor or null'
    );
  bl(A, e);
  function t() {
    this.constructor = A;
  }
  A.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
var Xl = function () {
  return (
    (Xl =
      Object.assign ||
      function (e) {
        for (var t, r = 1, n = arguments.length; r < n; r++) {
          t = arguments[r];
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        }
        return e;
      }),
    Xl.apply(this, arguments)
  );
};
function $A(A, e, t, r) {
  function n(i) {
    return i instanceof t
      ? i
      : new t(function (o) {
          o(i);
        });
  }
  return new (t || (t = Promise))(function (i, o) {
    function s(u) {
      try {
        l(r.next(u));
      } catch (c) {
        o(c);
      }
    }
    function a(u) {
      try {
        l(r.throw(u));
      } catch (c) {
        o(c);
      }
    }
    function l(u) {
      u.done ? i(u.value) : n(u.value).then(s, a);
    }
    l((r = r.apply(A, e || [])).next());
  });
}
function WA(A, e) {
  var t = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    r,
    n,
    i,
    o;
  return (
    (o = { next: s(0), throw: s(1), return: s(2) }),
    typeof Symbol == 'function' &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function s(l) {
    return function (u) {
      return a([l, u]);
    };
  }
  function a(l) {
    if (r) throw new TypeError('Generator is already executing.');
    for (; t; )
      try {
        if (
          ((r = 1),
          n &&
            (i =
              l[0] & 2
                ? n.return
                : l[0]
                ? n.throw || ((i = n.return) && i.call(n), 0)
                : n.next) &&
            !(i = i.call(n, l[1])).done)
        )
          return i;
        switch (((n = 0), i && (l = [l[0] & 2, i.value]), l[0])) {
          case 0:
          case 1:
            i = l;
            break;
          case 4:
            return t.label++, { value: l[1], done: !1 };
          case 5:
            t.label++, (n = l[1]), (l = [0]);
            continue;
          case 7:
            (l = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((i = t.trys),
              !(i = i.length > 0 && i[i.length - 1]) &&
                (l[0] === 6 || l[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (l[0] === 3 && (!i || (l[1] > i[0] && l[1] < i[3]))) {
              t.label = l[1];
              break;
            }
            if (l[0] === 6 && t.label < i[1]) {
              (t.label = i[1]), (i = l);
              break;
            }
            if (i && t.label < i[2]) {
              (t.label = i[2]), t.ops.push(l);
              break;
            }
            i[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        l = e.call(A, t);
      } catch (u) {
        (l = [6, u]), (n = 0);
      } finally {
        r = i = 0;
      }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function Ti(A, e, t) {
  if (t || arguments.length === 2)
    for (var r = 0, n = e.length, i; r < n; r++)
      (i || !(r in e)) &&
        (i || (i = Array.prototype.slice.call(e, 0, r)), (i[r] = e[r]));
  return A.concat(i || e);
}
var it = (function () {
    function A(e, t, r, n) {
      (this.left = e), (this.top = t), (this.width = r), (this.height = n);
    }
    return (
      (A.prototype.add = function (e, t, r, n) {
        return new A(
          this.left + e,
          this.top + t,
          this.width + r,
          this.height + n
        );
      }),
      (A.fromClientRect = function (e, t) {
        return new A(
          t.left + e.windowBounds.left,
          t.top + e.windowBounds.top,
          t.width,
          t.height
        );
      }),
      (A.fromDOMRectList = function (e, t) {
        var r = Array.from(t).find(function (n) {
          return n.width !== 0;
        });
        return r
          ? new A(
              r.left + e.windowBounds.left,
              r.top + e.windowBounds.top,
              r.width,
              r.height
            )
          : A.EMPTY;
      }),
      (A.EMPTY = new A(0, 0, 0, 0)),
      A
    );
  })(),
  Es = function (A, e) {
    return it.fromClientRect(A, e.getBoundingClientRect());
  },
  lC = function (A) {
    var e = A.body,
      t = A.documentElement;
    if (!e || !t) throw new Error('Unable to get document size');
    var r = Math.max(
        Math.max(e.scrollWidth, t.scrollWidth),
        Math.max(e.offsetWidth, t.offsetWidth),
        Math.max(e.clientWidth, t.clientWidth)
      ),
      n = Math.max(
        Math.max(e.scrollHeight, t.scrollHeight),
        Math.max(e.offsetHeight, t.offsetHeight),
        Math.max(e.clientHeight, t.clientHeight)
      );
    return new it(0, 0, r, n);
  },
  Hs = function (A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var i = A.charCodeAt(t++);
        (i & 64512) === 56320
          ? e.push(((n & 1023) << 10) + (i & 1023) + 65536)
          : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  },
  FA = function () {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return '';
    for (var r = [], n = -1, i = ''; ++n < t; ) {
      var o = A[n];
      o <= 65535
        ? r.push(o)
        : ((o -= 65536), r.push((o >> 10) + 55296, (o % 1024) + 56320)),
        (n + 1 === t || r.length > 16384) &&
          ((i += String.fromCharCode.apply(String, r)), (r.length = 0));
    }
    return i;
  },
  Jf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  uC = typeof Uint8Array > 'u' ? [] : new Uint8Array(256);
for (var Di = 0; Di < Jf.length; Di++) uC[Jf.charCodeAt(Di)] = Di;
var zf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  hn = typeof Uint8Array > 'u' ? [] : new Uint8Array(256);
for (var ki = 0; ki < zf.length; ki++) hn[zf.charCodeAt(ki)] = ki;
var cC = function (A) {
    var e = A.length * 0.75,
      t = A.length,
      r,
      n = 0,
      i,
      o,
      s,
      a;
    A[A.length - 1] === '=' && (e--, A[A.length - 2] === '=' && e--);
    var l =
        typeof ArrayBuffer < 'u' &&
        typeof Uint8Array < 'u' &&
        typeof Uint8Array.prototype.slice < 'u'
          ? new ArrayBuffer(e)
          : new Array(e),
      u = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4)
      (i = hn[A.charCodeAt(r)]),
        (o = hn[A.charCodeAt(r + 1)]),
        (s = hn[A.charCodeAt(r + 2)]),
        (a = hn[A.charCodeAt(r + 3)]),
        (u[n++] = (i << 2) | (o >> 4)),
        (u[n++] = ((o & 15) << 4) | (s >> 2)),
        (u[n++] = ((s & 3) << 6) | (a & 63));
    return l;
  },
  fC = function (A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2)
      t.push((A[r + 1] << 8) | A[r]);
    return t;
  },
  BC = function (A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4)
      t.push((A[r + 3] << 24) | (A[r + 2] << 16) | (A[r + 1] << 8) | A[r]);
    return t;
  },
  $t = 5,
  gc = 6 + 5,
  Ua = 2,
  dC = gc - $t,
  yh = 65536 >> $t,
  gC = 1 << $t,
  va = gC - 1,
  hC = 1024 >> $t,
  pC = yh + hC,
  wC = pC,
  QC = 32,
  CC = wC + QC,
  UC = 65536 >> gc,
  vC = 1 << dC,
  FC = vC - 1,
  Yf = function (A, e, t) {
    return A.slice
      ? A.slice(e, t)
      : new Uint16Array(Array.prototype.slice.call(A, e, t));
  },
  mC = function (A, e, t) {
    return A.slice
      ? A.slice(e, t)
      : new Uint32Array(Array.prototype.slice.call(A, e, t));
  },
  yC = function (A, e) {
    var t = cC(A),
      r = Array.isArray(t) ? BC(t) : new Uint32Array(t),
      n = Array.isArray(t) ? fC(t) : new Uint16Array(t),
      i = 24,
      o = Yf(n, i / 2, r[4] / 2),
      s = r[5] === 2 ? Yf(n, (i + r[4]) / 2) : mC(r, Math.ceil((i + r[4]) / 4));
    return new EC(r[0], r[1], r[2], r[3], o, s);
  },
  EC = (function () {
    function A(e, t, r, n, i, o) {
      (this.initialValue = e),
        (this.errorValue = t),
        (this.highStart = r),
        (this.highValueIndex = n),
        (this.index = i),
        (this.data = o);
    }
    return (
      (A.prototype.get = function (e) {
        var t;
        if (e >= 0) {
          if (e < 55296 || (e > 56319 && e <= 65535))
            return (
              (t = this.index[e >> $t]),
              (t = (t << Ua) + (e & va)),
              this.data[t]
            );
          if (e <= 65535)
            return (
              (t = this.index[yh + ((e - 55296) >> $t)]),
              (t = (t << Ua) + (e & va)),
              this.data[t]
            );
          if (e < this.highStart)
            return (
              (t = CC - UC + (e >> gc)),
              (t = this.index[t]),
              (t += (e >> $t) & FC),
              (t = this.index[t]),
              (t = (t << Ua) + (e & va)),
              this.data[t]
            );
          if (e <= 1114111) return this.data[this.highValueIndex];
        }
        return this.errorValue;
      }),
      A
    );
  })(),
  $f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  HC = typeof Uint8Array > 'u' ? [] : new Uint8Array(256);
for (var Oi = 0; Oi < $f.length; Oi++) HC[$f.charCodeAt(Oi)] = Oi;
var IC =
    'KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==',
  jf = 50,
  SC = 1,
  Eh = 2,
  Hh = 3,
  xC = 4,
  LC = 5,
  Zf = 7,
  Ih = 8,
  qf = 9,
  Qt = 10,
  Wl = 11,
  AB = 12,
  Jl = 13,
  KC = 14,
  pn = 15,
  zl = 16,
  Ri = 17,
  an = 18,
  TC = 19,
  eB = 20,
  Yl = 21,
  ln = 22,
  Fa = 23,
  or = 24,
  le = 25,
  wn = 26,
  Qn = 27,
  sr = 28,
  DC = 29,
  Gt = 30,
  kC = 31,
  Mi = 32,
  Ni = 33,
  $l = 34,
  jl = 35,
  Zl = 36,
  ti = 37,
  ql = 38,
  po = 39,
  wo = 40,
  ma = 41,
  Sh = 42,
  OC = 43,
  RC = [9001, 65288],
  xh = '!',
  W = '×',
  _i = '÷',
  Au = yC(IC),
  We = [Gt, Zl],
  eu = [SC, Eh, Hh, LC],
  Lh = [Qt, Ih],
  tB = [Qn, wn],
  MC = eu.concat(Lh),
  rB = [ql, po, wo, $l, jl],
  NC = [pn, Jl],
  _C = function (A, e) {
    e === void 0 && (e = 'strict');
    var t = [],
      r = [],
      n = [];
    return (
      A.forEach(function (i, o) {
        var s = Au.get(i);
        if (
          (s > jf ? (n.push(!0), (s -= jf)) : n.push(!1),
          ['normal', 'auto', 'loose'].indexOf(e) !== -1 &&
            [8208, 8211, 12316, 12448].indexOf(i) !== -1)
        )
          return r.push(o), t.push(zl);
        if (s === xC || s === Wl) {
          if (o === 0) return r.push(o), t.push(Gt);
          var a = t[o - 1];
          return MC.indexOf(a) === -1
            ? (r.push(r[o - 1]), t.push(a))
            : (r.push(o), t.push(Gt));
        }
        if ((r.push(o), s === kC)) return t.push(e === 'strict' ? Yl : ti);
        if (s === Sh || s === DC) return t.push(Gt);
        if (s === OC)
          return (i >= 131072 && i <= 196605) || (i >= 196608 && i <= 262141)
            ? t.push(ti)
            : t.push(Gt);
        t.push(s);
      }),
      [r, t, n]
    );
  },
  ya = function (A, e, t, r) {
    var n = r[t];
    if (Array.isArray(A) ? A.indexOf(n) !== -1 : A === n)
      for (var i = t; i <= r.length; ) {
        i++;
        var o = r[i];
        if (o === e) return !0;
        if (o !== Qt) break;
      }
    if (n === Qt)
      for (var i = t; i > 0; ) {
        i--;
        var s = r[i];
        if (Array.isArray(A) ? A.indexOf(s) !== -1 : A === s)
          for (var a = t; a <= r.length; ) {
            a++;
            var o = r[a];
            if (o === e) return !0;
            if (o !== Qt) break;
          }
        if (s !== Qt) break;
      }
    return !1;
  },
  nB = function (A, e) {
    for (var t = A; t >= 0; ) {
      var r = e[t];
      if (r === Qt) t--;
      else return r;
    }
    return 0;
  },
  PC = function (A, e, t, r, n) {
    if (t[r] === 0) return W;
    var i = r - 1;
    if (Array.isArray(n) && n[i] === !0) return W;
    var o = i - 1,
      s = i + 1,
      a = e[i],
      l = o >= 0 ? e[o] : 0,
      u = e[s];
    if (a === Eh && u === Hh) return W;
    if (eu.indexOf(a) !== -1) return xh;
    if (eu.indexOf(u) !== -1 || Lh.indexOf(u) !== -1) return W;
    if (nB(i, e) === Ih) return _i;
    if (
      Au.get(A[i]) === Wl ||
      ((a === Mi || a === Ni) && Au.get(A[s]) === Wl) ||
      a === Zf ||
      u === Zf ||
      a === qf ||
      ([Qt, Jl, pn].indexOf(a) === -1 && u === qf) ||
      [Ri, an, TC, or, sr].indexOf(u) !== -1 ||
      nB(i, e) === ln ||
      ya(Fa, ln, i, e) ||
      ya([Ri, an], Yl, i, e) ||
      ya(AB, AB, i, e)
    )
      return W;
    if (a === Qt) return _i;
    if (a === Fa || u === Fa) return W;
    if (u === zl || a === zl) return _i;
    if (
      [Jl, pn, Yl].indexOf(u) !== -1 ||
      a === KC ||
      (l === Zl && NC.indexOf(a) !== -1) ||
      (a === sr && u === Zl) ||
      u === eB ||
      (We.indexOf(u) !== -1 && a === le) ||
      (We.indexOf(a) !== -1 && u === le) ||
      (a === Qn && [ti, Mi, Ni].indexOf(u) !== -1) ||
      ([ti, Mi, Ni].indexOf(a) !== -1 && u === wn) ||
      (We.indexOf(a) !== -1 && tB.indexOf(u) !== -1) ||
      (tB.indexOf(a) !== -1 && We.indexOf(u) !== -1) ||
      ([Qn, wn].indexOf(a) !== -1 &&
        (u === le || ([ln, pn].indexOf(u) !== -1 && e[s + 1] === le))) ||
      ([ln, pn].indexOf(a) !== -1 && u === le) ||
      (a === le && [le, sr, or].indexOf(u) !== -1)
    )
      return W;
    if ([le, sr, or, Ri, an].indexOf(u) !== -1)
      for (var c = i; c >= 0; ) {
        var B = e[c];
        if (B === le) return W;
        if ([sr, or].indexOf(B) !== -1) c--;
        else break;
      }
    if ([Qn, wn].indexOf(u) !== -1)
      for (var c = [Ri, an].indexOf(a) !== -1 ? o : i; c >= 0; ) {
        var B = e[c];
        if (B === le) return W;
        if ([sr, or].indexOf(B) !== -1) c--;
        else break;
      }
    if (
      (ql === a && [ql, po, $l, jl].indexOf(u) !== -1) ||
      ([po, $l].indexOf(a) !== -1 && [po, wo].indexOf(u) !== -1) ||
      ([wo, jl].indexOf(a) !== -1 && u === wo) ||
      (rB.indexOf(a) !== -1 && [eB, wn].indexOf(u) !== -1) ||
      (rB.indexOf(u) !== -1 && a === Qn) ||
      (We.indexOf(a) !== -1 && We.indexOf(u) !== -1) ||
      (a === or && We.indexOf(u) !== -1) ||
      (We.concat(le).indexOf(a) !== -1 &&
        u === ln &&
        RC.indexOf(A[s]) === -1) ||
      (We.concat(le).indexOf(u) !== -1 && a === an)
    )
      return W;
    if (a === ma && u === ma) {
      for (var w = t[i], g = 1; w > 0 && (w--, e[w] === ma); ) g++;
      if (g % 2 !== 0) return W;
    }
    return a === Mi && u === Ni ? W : _i;
  },
  VC = function (A, e) {
    e || (e = { lineBreak: 'normal', wordBreak: 'normal' });
    var t = _C(A, e.lineBreak),
      r = t[0],
      n = t[1],
      i = t[2];
    (e.wordBreak === 'break-all' || e.wordBreak === 'break-word') &&
      (n = n.map(function (s) {
        return [le, Gt, Sh].indexOf(s) !== -1 ? ti : s;
      }));
    var o =
      e.wordBreak === 'keep-all'
        ? i.map(function (s, a) {
            return s && A[a] >= 19968 && A[a] <= 40959;
          })
        : void 0;
    return [r, n, o];
  },
  GC = (function () {
    function A(e, t, r, n) {
      (this.codePoints = e),
        (this.required = t === xh),
        (this.start = r),
        (this.end = n);
    }
    return (
      (A.prototype.slice = function () {
        return FA.apply(void 0, this.codePoints.slice(this.start, this.end));
      }),
      A
    );
  })(),
  bC = function (A, e) {
    var t = Hs(A),
      r = VC(t, e),
      n = r[0],
      i = r[1],
      o = r[2],
      s = t.length,
      a = 0,
      l = 0;
    return {
      next: function () {
        if (l >= s) return { done: !0, value: null };
        for (var u = W; l < s && (u = PC(t, i, n, ++l, o)) === W; );
        if (u !== W || l === s) {
          var c = new GC(t, u, a, l);
          return (a = l), { value: c, done: !1 };
        }
        return { done: !0, value: null };
      },
    };
  },
  XC = 1 << 0,
  WC = 1 << 1,
  fi = 1 << 2,
  iB = 1 << 3,
  Yo = 10,
  oB = 47,
  Kn = 92,
  JC = 9,
  zC = 32,
  Pi = 34,
  un = 61,
  YC = 35,
  $C = 36,
  jC = 37,
  Vi = 39,
  Gi = 40,
  cn = 41,
  ZC = 95,
  te = 45,
  qC = 33,
  AU = 60,
  eU = 62,
  tU = 64,
  rU = 91,
  nU = 93,
  iU = 61,
  oU = 123,
  bi = 63,
  sU = 125,
  sB = 124,
  aU = 126,
  lU = 128,
  aB = 65533,
  Ea = 42,
  Jt = 43,
  uU = 44,
  cU = 58,
  fU = 59,
  ri = 46,
  BU = 0,
  dU = 8,
  gU = 11,
  hU = 14,
  pU = 31,
  wU = 127,
  Ne = -1,
  Kh = 48,
  Th = 97,
  Dh = 101,
  QU = 102,
  CU = 117,
  UU = 122,
  kh = 65,
  Oh = 69,
  Rh = 70,
  vU = 85,
  FU = 90,
  JA = function (A) {
    return A >= Kh && A <= 57;
  },
  mU = function (A) {
    return A >= 55296 && A <= 57343;
  },
  ar = function (A) {
    return JA(A) || (A >= kh && A <= Rh) || (A >= Th && A <= QU);
  },
  yU = function (A) {
    return A >= Th && A <= UU;
  },
  EU = function (A) {
    return A >= kh && A <= FU;
  },
  HU = function (A) {
    return yU(A) || EU(A);
  },
  IU = function (A) {
    return A >= lU;
  },
  Xi = function (A) {
    return A === Yo || A === JC || A === zC;
  },
  $o = function (A) {
    return HU(A) || IU(A) || A === ZC;
  },
  lB = function (A) {
    return $o(A) || JA(A) || A === te;
  },
  SU = function (A) {
    return (A >= BU && A <= dU) || A === gU || (A >= hU && A <= pU) || A === wU;
  },
  Bt = function (A, e) {
    return A !== Kn ? !1 : e !== Yo;
  },
  Wi = function (A, e, t) {
    return A === te ? $o(e) || Bt(e, t) : $o(A) ? !0 : !!(A === Kn && Bt(A, e));
  },
  Ha = function (A, e, t) {
    return A === Jt || A === te
      ? JA(e)
        ? !0
        : e === ri && JA(t)
      : JA(A === ri ? e : A);
  },
  xU = function (A) {
    var e = 0,
      t = 1;
    (A[e] === Jt || A[e] === te) && (A[e] === te && (t = -1), e++);
    for (var r = []; JA(A[e]); ) r.push(A[e++]);
    var n = r.length ? parseInt(FA.apply(void 0, r), 10) : 0;
    A[e] === ri && e++;
    for (var i = []; JA(A[e]); ) i.push(A[e++]);
    var o = i.length,
      s = o ? parseInt(FA.apply(void 0, i), 10) : 0;
    (A[e] === Oh || A[e] === Dh) && e++;
    var a = 1;
    (A[e] === Jt || A[e] === te) && (A[e] === te && (a = -1), e++);
    for (var l = []; JA(A[e]); ) l.push(A[e++]);
    var u = l.length ? parseInt(FA.apply(void 0, l), 10) : 0;
    return t * (n + s * Math.pow(10, -o)) * Math.pow(10, a * u);
  },
  LU = { type: 2 },
  KU = { type: 3 },
  TU = { type: 4 },
  DU = { type: 13 },
  kU = { type: 8 },
  OU = { type: 21 },
  RU = { type: 9 },
  MU = { type: 10 },
  NU = { type: 11 },
  _U = { type: 12 },
  PU = { type: 14 },
  Ji = { type: 23 },
  VU = { type: 1 },
  GU = { type: 25 },
  bU = { type: 24 },
  XU = { type: 26 },
  WU = { type: 27 },
  JU = { type: 28 },
  zU = { type: 29 },
  YU = { type: 31 },
  tu = { type: 32 },
  Mh = (function () {
    function A() {
      this._value = [];
    }
    return (
      (A.prototype.write = function (e) {
        this._value = this._value.concat(Hs(e));
      }),
      (A.prototype.read = function () {
        for (var e = [], t = this.consumeToken(); t !== tu; )
          e.push(t), (t = this.consumeToken());
        return e;
      }),
      (A.prototype.consumeToken = function () {
        var e = this.consumeCodePoint();
        switch (e) {
          case Pi:
            return this.consumeStringToken(Pi);
          case YC:
            var t = this.peekCodePoint(0),
              r = this.peekCodePoint(1),
              n = this.peekCodePoint(2);
            if (lB(t) || Bt(r, n)) {
              var i = Wi(t, r, n) ? WC : XC,
                o = this.consumeName();
              return { type: 5, value: o, flags: i };
            }
            break;
          case $C:
            if (this.peekCodePoint(0) === un)
              return this.consumeCodePoint(), DU;
            break;
          case Vi:
            return this.consumeStringToken(Vi);
          case Gi:
            return LU;
          case cn:
            return KU;
          case Ea:
            if (this.peekCodePoint(0) === un)
              return this.consumeCodePoint(), PU;
            break;
          case Jt:
            if (Ha(e, this.peekCodePoint(0), this.peekCodePoint(1)))
              return this.reconsumeCodePoint(e), this.consumeNumericToken();
            break;
          case uU:
            return TU;
          case te:
            var s = e,
              a = this.peekCodePoint(0),
              l = this.peekCodePoint(1);
            if (Ha(s, a, l))
              return this.reconsumeCodePoint(e), this.consumeNumericToken();
            if (Wi(s, a, l))
              return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
            if (a === te && l === eU)
              return this.consumeCodePoint(), this.consumeCodePoint(), bU;
            break;
          case ri:
            if (Ha(e, this.peekCodePoint(0), this.peekCodePoint(1)))
              return this.reconsumeCodePoint(e), this.consumeNumericToken();
            break;
          case oB:
            if (this.peekCodePoint(0) === Ea)
              for (this.consumeCodePoint(); ; ) {
                var u = this.consumeCodePoint();
                if (u === Ea && ((u = this.consumeCodePoint()), u === oB))
                  return this.consumeToken();
                if (u === Ne) return this.consumeToken();
              }
            break;
          case cU:
            return XU;
          case fU:
            return WU;
          case AU:
            if (
              this.peekCodePoint(0) === qC &&
              this.peekCodePoint(1) === te &&
              this.peekCodePoint(2) === te
            )
              return this.consumeCodePoint(), this.consumeCodePoint(), GU;
            break;
          case tU:
            var c = this.peekCodePoint(0),
              B = this.peekCodePoint(1),
              w = this.peekCodePoint(2);
            if (Wi(c, B, w)) {
              var o = this.consumeName();
              return { type: 7, value: o };
            }
            break;
          case rU:
            return JU;
          case Kn:
            if (Bt(e, this.peekCodePoint(0)))
              return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
            break;
          case nU:
            return zU;
          case iU:
            if (this.peekCodePoint(0) === un)
              return this.consumeCodePoint(), kU;
            break;
          case oU:
            return NU;
          case sU:
            return _U;
          case CU:
          case vU:
            var g = this.peekCodePoint(0),
              p = this.peekCodePoint(1);
            return (
              g === Jt &&
                (ar(p) || p === bi) &&
                (this.consumeCodePoint(), this.consumeUnicodeRangeToken()),
              this.reconsumeCodePoint(e),
              this.consumeIdentLikeToken()
            );
          case sB:
            if (this.peekCodePoint(0) === un)
              return this.consumeCodePoint(), RU;
            if (this.peekCodePoint(0) === sB)
              return this.consumeCodePoint(), OU;
            break;
          case aU:
            if (this.peekCodePoint(0) === un)
              return this.consumeCodePoint(), MU;
            break;
          case Ne:
            return tu;
        }
        return Xi(e)
          ? (this.consumeWhiteSpace(), YU)
          : JA(e)
          ? (this.reconsumeCodePoint(e), this.consumeNumericToken())
          : $o(e)
          ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken())
          : { type: 6, value: FA(e) };
      }),
      (A.prototype.consumeCodePoint = function () {
        var e = this._value.shift();
        return typeof e > 'u' ? -1 : e;
      }),
      (A.prototype.reconsumeCodePoint = function (e) {
        this._value.unshift(e);
      }),
      (A.prototype.peekCodePoint = function (e) {
        return e >= this._value.length ? -1 : this._value[e];
      }),
      (A.prototype.consumeUnicodeRangeToken = function () {
        for (var e = [], t = this.consumeCodePoint(); ar(t) && e.length < 6; )
          e.push(t), (t = this.consumeCodePoint());
        for (var r = !1; t === bi && e.length < 6; )
          e.push(t), (t = this.consumeCodePoint()), (r = !0);
        if (r) {
          var n = parseInt(
              FA.apply(
                void 0,
                e.map(function (a) {
                  return a === bi ? Kh : a;
                })
              ),
              16
            ),
            i = parseInt(
              FA.apply(
                void 0,
                e.map(function (a) {
                  return a === bi ? Rh : a;
                })
              ),
              16
            );
          return { type: 30, start: n, end: i };
        }
        var o = parseInt(FA.apply(void 0, e), 16);
        if (this.peekCodePoint(0) === te && ar(this.peekCodePoint(1))) {
          this.consumeCodePoint(), (t = this.consumeCodePoint());
          for (var s = []; ar(t) && s.length < 6; )
            s.push(t), (t = this.consumeCodePoint());
          var i = parseInt(FA.apply(void 0, s), 16);
          return { type: 30, start: o, end: i };
        } else return { type: 30, start: o, end: o };
      }),
      (A.prototype.consumeIdentLikeToken = function () {
        var e = this.consumeName();
        return e.toLowerCase() === 'url' && this.peekCodePoint(0) === Gi
          ? (this.consumeCodePoint(), this.consumeUrlToken())
          : this.peekCodePoint(0) === Gi
          ? (this.consumeCodePoint(), { type: 19, value: e })
          : { type: 20, value: e };
      }),
      (A.prototype.consumeUrlToken = function () {
        var e = [];
        if ((this.consumeWhiteSpace(), this.peekCodePoint(0) === Ne))
          return { type: 22, value: '' };
        var t = this.peekCodePoint(0);
        if (t === Vi || t === Pi) {
          var r = this.consumeStringToken(this.consumeCodePoint());
          return r.type === 0 &&
            (this.consumeWhiteSpace(),
            this.peekCodePoint(0) === Ne || this.peekCodePoint(0) === cn)
            ? (this.consumeCodePoint(), { type: 22, value: r.value })
            : (this.consumeBadUrlRemnants(), Ji);
        }
        for (;;) {
          var n = this.consumeCodePoint();
          if (n === Ne || n === cn)
            return { type: 22, value: FA.apply(void 0, e) };
          if (Xi(n))
            return (
              this.consumeWhiteSpace(),
              this.peekCodePoint(0) === Ne || this.peekCodePoint(0) === cn
                ? (this.consumeCodePoint(),
                  { type: 22, value: FA.apply(void 0, e) })
                : (this.consumeBadUrlRemnants(), Ji)
            );
          if (n === Pi || n === Vi || n === Gi || SU(n))
            return this.consumeBadUrlRemnants(), Ji;
          if (n === Kn)
            if (Bt(n, this.peekCodePoint(0)))
              e.push(this.consumeEscapedCodePoint());
            else return this.consumeBadUrlRemnants(), Ji;
          else e.push(n);
        }
      }),
      (A.prototype.consumeWhiteSpace = function () {
        for (; Xi(this.peekCodePoint(0)); ) this.consumeCodePoint();
      }),
      (A.prototype.consumeBadUrlRemnants = function () {
        for (;;) {
          var e = this.consumeCodePoint();
          if (e === cn || e === Ne) return;
          Bt(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
        }
      }),
      (A.prototype.consumeStringSlice = function (e) {
        for (var t = 5e4, r = ''; e > 0; ) {
          var n = Math.min(t, e);
          (r += FA.apply(void 0, this._value.splice(0, n))), (e -= n);
        }
        return this._value.shift(), r;
      }),
      (A.prototype.consumeStringToken = function (e) {
        var t = '',
          r = 0;
        do {
          var n = this._value[r];
          if (n === Ne || n === void 0 || n === e)
            return (t += this.consumeStringSlice(r)), { type: 0, value: t };
          if (n === Yo) return this._value.splice(0, r), VU;
          if (n === Kn) {
            var i = this._value[r + 1];
            i !== Ne &&
              i !== void 0 &&
              (i === Yo
                ? ((t += this.consumeStringSlice(r)),
                  (r = -1),
                  this._value.shift())
                : Bt(n, i) &&
                  ((t += this.consumeStringSlice(r)),
                  (t += FA(this.consumeEscapedCodePoint())),
                  (r = -1)));
          }
          r++;
        } while (!0);
      }),
      (A.prototype.consumeNumber = function () {
        var e = [],
          t = fi,
          r = this.peekCodePoint(0);
        for (
          (r === Jt || r === te) && e.push(this.consumeCodePoint());
          JA(this.peekCodePoint(0));

        )
          e.push(this.consumeCodePoint());
        r = this.peekCodePoint(0);
        var n = this.peekCodePoint(1);
        if (r === ri && JA(n))
          for (
            e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = iB;
            JA(this.peekCodePoint(0));

          )
            e.push(this.consumeCodePoint());
        (r = this.peekCodePoint(0)), (n = this.peekCodePoint(1));
        var i = this.peekCodePoint(2);
        if (
          (r === Oh || r === Dh) &&
          (((n === Jt || n === te) && JA(i)) || JA(n))
        )
          for (
            e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = iB;
            JA(this.peekCodePoint(0));

          )
            e.push(this.consumeCodePoint());
        return [xU(e), t];
      }),
      (A.prototype.consumeNumericToken = function () {
        var e = this.consumeNumber(),
          t = e[0],
          r = e[1],
          n = this.peekCodePoint(0),
          i = this.peekCodePoint(1),
          o = this.peekCodePoint(2);
        if (Wi(n, i, o)) {
          var s = this.consumeName();
          return { type: 15, number: t, flags: r, unit: s };
        }
        return n === jC
          ? (this.consumeCodePoint(), { type: 16, number: t, flags: r })
          : { type: 17, number: t, flags: r };
      }),
      (A.prototype.consumeEscapedCodePoint = function () {
        var e = this.consumeCodePoint();
        if (ar(e)) {
          for (var t = FA(e); ar(this.peekCodePoint(0)) && t.length < 6; )
            t += FA(this.consumeCodePoint());
          Xi(this.peekCodePoint(0)) && this.consumeCodePoint();
          var r = parseInt(t, 16);
          return r === 0 || mU(r) || r > 1114111 ? aB : r;
        }
        return e === Ne ? aB : e;
      }),
      (A.prototype.consumeName = function () {
        for (var e = ''; ; ) {
          var t = this.consumeCodePoint();
          if (lB(t)) e += FA(t);
          else if (Bt(t, this.peekCodePoint(0)))
            e += FA(this.consumeEscapedCodePoint());
          else return this.reconsumeCodePoint(t), e;
        }
      }),
      A
    );
  })(),
  Nh = (function () {
    function A(e) {
      this._tokens = e;
    }
    return (
      (A.create = function (e) {
        var t = new Mh();
        return t.write(e), new A(t.read());
      }),
      (A.parseValue = function (e) {
        return A.create(e).parseComponentValue();
      }),
      (A.parseValues = function (e) {
        return A.create(e).parseComponentValues();
      }),
      (A.prototype.parseComponentValue = function () {
        for (var e = this.consumeToken(); e.type === 31; )
          e = this.consumeToken();
        if (e.type === 32)
          throw new SyntaxError(
            'Error parsing CSS component value, unexpected EOF'
          );
        this.reconsumeToken(e);
        var t = this.consumeComponentValue();
        do e = this.consumeToken();
        while (e.type === 31);
        if (e.type === 32) return t;
        throw new SyntaxError(
          'Error parsing CSS component value, multiple values found when expecting only one'
        );
      }),
      (A.prototype.parseComponentValues = function () {
        for (var e = []; ; ) {
          var t = this.consumeComponentValue();
          if (t.type === 32) return e;
          e.push(t), e.push();
        }
      }),
      (A.prototype.consumeComponentValue = function () {
        var e = this.consumeToken();
        switch (e.type) {
          case 11:
          case 28:
          case 2:
            return this.consumeSimpleBlock(e.type);
          case 19:
            return this.consumeFunction(e);
        }
        return e;
      }),
      (A.prototype.consumeSimpleBlock = function (e) {
        for (var t = { type: e, values: [] }, r = this.consumeToken(); ; ) {
          if (r.type === 32 || jU(r, e)) return t;
          this.reconsumeToken(r),
            t.values.push(this.consumeComponentValue()),
            (r = this.consumeToken());
        }
      }),
      (A.prototype.consumeFunction = function (e) {
        for (var t = { name: e.value, values: [], type: 18 }; ; ) {
          var r = this.consumeToken();
          if (r.type === 32 || r.type === 3) return t;
          this.reconsumeToken(r), t.values.push(this.consumeComponentValue());
        }
      }),
      (A.prototype.consumeToken = function () {
        var e = this._tokens.shift();
        return typeof e > 'u' ? tu : e;
      }),
      (A.prototype.reconsumeToken = function (e) {
        this._tokens.unshift(e);
      }),
      A
    );
  })(),
  Bi = function (A) {
    return A.type === 15;
  },
  $r = function (A) {
    return A.type === 17;
  },
  sA = function (A) {
    return A.type === 20;
  },
  $U = function (A) {
    return A.type === 0;
  },
  ru = function (A, e) {
    return sA(A) && A.value === e;
  },
  _h = function (A) {
    return A.type !== 31;
  },
  Gr = function (A) {
    return A.type !== 31 && A.type !== 4;
  },
  be = function (A) {
    var e = [],
      t = [];
    return (
      A.forEach(function (r) {
        if (r.type === 4) {
          if (t.length === 0)
            throw new Error('Error parsing function args, zero tokens for arg');
          e.push(t), (t = []);
          return;
        }
        r.type !== 31 && t.push(r);
      }),
      t.length && e.push(t),
      e
    );
  },
  jU = function (A, e) {
    return (e === 11 && A.type === 12) || (e === 28 && A.type === 29)
      ? !0
      : e === 2 && A.type === 3;
  },
  Ot = function (A) {
    return A.type === 17 || A.type === 15;
  },
  yA = function (A) {
    return A.type === 16 || Ot(A);
  },
  Ph = function (A) {
    return A.length > 1 ? [A[0], A[1]] : [A[0]];
  },
  _A = { type: 17, number: 0, flags: fi },
  hc = { type: 16, number: 50, flags: fi },
  Ct = { type: 16, number: 100, flags: fi },
  Cn = function (A, e, t) {
    var r = A[0],
      n = A[1];
    return [aA(r, e), aA(typeof n < 'u' ? n : r, t)];
  },
  aA = function (A, e) {
    if (A.type === 16) return (A.number / 100) * e;
    if (Bi(A))
      switch (A.unit) {
        case 'rem':
        case 'em':
          return 16 * A.number;
        case 'px':
        default:
          return A.number;
      }
    return A.number;
  },
  Vh = 'deg',
  Gh = 'grad',
  bh = 'rad',
  Xh = 'turn',
  Is = {
    name: 'angle',
    parse: function (A, e) {
      if (e.type === 15)
        switch (e.unit) {
          case Vh:
            return (Math.PI * e.number) / 180;
          case Gh:
            return (Math.PI / 200) * e.number;
          case bh:
            return e.number;
          case Xh:
            return Math.PI * 2 * e.number;
        }
      throw new Error('Unsupported angle type');
    },
  },
  Wh = function (A) {
    return (
      A.type === 15 &&
      (A.unit === Vh || A.unit === Gh || A.unit === bh || A.unit === Xh)
    );
  },
  Jh = function (A) {
    var e = A.filter(sA)
      .map(function (t) {
        return t.value;
      })
      .join(' ');
    switch (e) {
      case 'to bottom right':
      case 'to right bottom':
      case 'left top':
      case 'top left':
        return [_A, _A];
      case 'to top':
      case 'bottom':
        return Fe(0);
      case 'to bottom left':
      case 'to left bottom':
      case 'right top':
      case 'top right':
        return [_A, Ct];
      case 'to right':
      case 'left':
        return Fe(90);
      case 'to top left':
      case 'to left top':
      case 'right bottom':
      case 'bottom right':
        return [Ct, Ct];
      case 'to bottom':
      case 'top':
        return Fe(180);
      case 'to top right':
      case 'to right top':
      case 'left bottom':
      case 'bottom left':
        return [Ct, _A];
      case 'to left':
      case 'right':
        return Fe(270);
    }
    return 0;
  },
  Fe = function (A) {
    return (Math.PI * A) / 180;
  },
  xt = {
    name: 'color',
    parse: function (A, e) {
      if (e.type === 18) {
        var t = ZU[e.name];
        if (typeof t > 'u')
          throw new Error(
            'Attempting to parse an unsupported color function "' + e.name + '"'
          );
        return t(A, e.values);
      }
      if (e.type === 5) {
        if (e.value.length === 3) {
          var r = e.value.substring(0, 1),
            n = e.value.substring(1, 2),
            i = e.value.substring(2, 3);
          return Ut(
            parseInt(r + r, 16),
            parseInt(n + n, 16),
            parseInt(i + i, 16),
            1
          );
        }
        if (e.value.length === 4) {
          var r = e.value.substring(0, 1),
            n = e.value.substring(1, 2),
            i = e.value.substring(2, 3),
            o = e.value.substring(3, 4);
          return Ut(
            parseInt(r + r, 16),
            parseInt(n + n, 16),
            parseInt(i + i, 16),
            parseInt(o + o, 16) / 255
          );
        }
        if (e.value.length === 6) {
          var r = e.value.substring(0, 2),
            n = e.value.substring(2, 4),
            i = e.value.substring(4, 6);
          return Ut(parseInt(r, 16), parseInt(n, 16), parseInt(i, 16), 1);
        }
        if (e.value.length === 8) {
          var r = e.value.substring(0, 2),
            n = e.value.substring(2, 4),
            i = e.value.substring(4, 6),
            o = e.value.substring(6, 8);
          return Ut(
            parseInt(r, 16),
            parseInt(n, 16),
            parseInt(i, 16),
            parseInt(o, 16) / 255
          );
        }
      }
      if (e.type === 20) {
        var s = At[e.value.toUpperCase()];
        if (typeof s < 'u') return s;
      }
      return At.TRANSPARENT;
    },
  },
  Lt = function (A) {
    return (255 & A) === 0;
  },
  xA = function (A) {
    var e = 255 & A,
      t = 255 & (A >> 8),
      r = 255 & (A >> 16),
      n = 255 & (A >> 24);
    return e < 255
      ? 'rgba(' + n + ',' + r + ',' + t + ',' + e / 255 + ')'
      : 'rgb(' + n + ',' + r + ',' + t + ')';
  },
  Ut = function (A, e, t, r) {
    return (
      ((A << 24) | (e << 16) | (t << 8) | (Math.round(r * 255) << 0)) >>> 0
    );
  },
  uB = function (A, e) {
    if (A.type === 17) return A.number;
    if (A.type === 16) {
      var t = e === 3 ? 1 : 255;
      return e === 3 ? (A.number / 100) * t : Math.round((A.number / 100) * t);
    }
    return 0;
  },
  cB = function (A, e) {
    var t = e.filter(Gr);
    if (t.length === 3) {
      var r = t.map(uB),
        n = r[0],
        i = r[1],
        o = r[2];
      return Ut(n, i, o, 1);
    }
    if (t.length === 4) {
      var s = t.map(uB),
        n = s[0],
        i = s[1],
        o = s[2],
        a = s[3];
      return Ut(n, i, o, a);
    }
    return 0;
  };
function Ia(A, e, t) {
  return (
    t < 0 && (t += 1),
    t >= 1 && (t -= 1),
    t < 1 / 6
      ? (e - A) * t * 6 + A
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? (e - A) * 6 * (2 / 3 - t) + A
      : A
  );
}
var fB = function (A, e) {
    var t = e.filter(Gr),
      r = t[0],
      n = t[1],
      i = t[2],
      o = t[3],
      s = (r.type === 17 ? Fe(r.number) : Is.parse(A, r)) / (Math.PI * 2),
      a = yA(n) ? n.number / 100 : 0,
      l = yA(i) ? i.number / 100 : 0,
      u = typeof o < 'u' && yA(o) ? aA(o, 1) : 1;
    if (a === 0) return Ut(l * 255, l * 255, l * 255, 1);
    var c = l <= 0.5 ? l * (a + 1) : l + a - l * a,
      B = l * 2 - c,
      w = Ia(B, c, s + 1 / 3),
      g = Ia(B, c, s),
      p = Ia(B, c, s - 1 / 3);
    return Ut(w * 255, g * 255, p * 255, u);
  },
  ZU = { hsl: fB, hsla: fB, rgb: cB, rgba: cB },
  Tn = function (A, e) {
    return xt.parse(A, Nh.create(e).parseComponentValue());
  },
  At = {
    ALICEBLUE: 4042850303,
    ANTIQUEWHITE: 4209760255,
    AQUA: 16777215,
    AQUAMARINE: 2147472639,
    AZURE: 4043309055,
    BEIGE: 4126530815,
    BISQUE: 4293182719,
    BLACK: 255,
    BLANCHEDALMOND: 4293643775,
    BLUE: 65535,
    BLUEVIOLET: 2318131967,
    BROWN: 2771004159,
    BURLYWOOD: 3736635391,
    CADETBLUE: 1604231423,
    CHARTREUSE: 2147418367,
    CHOCOLATE: 3530104575,
    CORAL: 4286533887,
    CORNFLOWERBLUE: 1687547391,
    CORNSILK: 4294499583,
    CRIMSON: 3692313855,
    CYAN: 16777215,
    DARKBLUE: 35839,
    DARKCYAN: 9145343,
    DARKGOLDENROD: 3095837695,
    DARKGRAY: 2846468607,
    DARKGREEN: 6553855,
    DARKGREY: 2846468607,
    DARKKHAKI: 3182914559,
    DARKMAGENTA: 2332068863,
    DARKOLIVEGREEN: 1433087999,
    DARKORANGE: 4287365375,
    DARKORCHID: 2570243327,
    DARKRED: 2332033279,
    DARKSALMON: 3918953215,
    DARKSEAGREEN: 2411499519,
    DARKSLATEBLUE: 1211993087,
    DARKSLATEGRAY: 793726975,
    DARKSLATEGREY: 793726975,
    DARKTURQUOISE: 13554175,
    DARKVIOLET: 2483082239,
    DEEPPINK: 4279538687,
    DEEPSKYBLUE: 12582911,
    DIMGRAY: 1768516095,
    DIMGREY: 1768516095,
    DODGERBLUE: 512819199,
    FIREBRICK: 2988581631,
    FLORALWHITE: 4294635775,
    FORESTGREEN: 579543807,
    FUCHSIA: 4278255615,
    GAINSBORO: 3705462015,
    GHOSTWHITE: 4177068031,
    GOLD: 4292280575,
    GOLDENROD: 3668254975,
    GRAY: 2155905279,
    GREEN: 8388863,
    GREENYELLOW: 2919182335,
    GREY: 2155905279,
    HONEYDEW: 4043305215,
    HOTPINK: 4285117695,
    INDIANRED: 3445382399,
    INDIGO: 1258324735,
    IVORY: 4294963455,
    KHAKI: 4041641215,
    LAVENDER: 3873897215,
    LAVENDERBLUSH: 4293981695,
    LAWNGREEN: 2096890111,
    LEMONCHIFFON: 4294626815,
    LIGHTBLUE: 2916673279,
    LIGHTCORAL: 4034953471,
    LIGHTCYAN: 3774873599,
    LIGHTGOLDENRODYELLOW: 4210742015,
    LIGHTGRAY: 3553874943,
    LIGHTGREEN: 2431553791,
    LIGHTGREY: 3553874943,
    LIGHTPINK: 4290167295,
    LIGHTSALMON: 4288707327,
    LIGHTSEAGREEN: 548580095,
    LIGHTSKYBLUE: 2278488831,
    LIGHTSLATEGRAY: 2005441023,
    LIGHTSLATEGREY: 2005441023,
    LIGHTSTEELBLUE: 2965692159,
    LIGHTYELLOW: 4294959359,
    LIME: 16711935,
    LIMEGREEN: 852308735,
    LINEN: 4210091775,
    MAGENTA: 4278255615,
    MAROON: 2147483903,
    MEDIUMAQUAMARINE: 1724754687,
    MEDIUMBLUE: 52735,
    MEDIUMORCHID: 3126187007,
    MEDIUMPURPLE: 2473647103,
    MEDIUMSEAGREEN: 1018393087,
    MEDIUMSLATEBLUE: 2070474495,
    MEDIUMSPRINGGREEN: 16423679,
    MEDIUMTURQUOISE: 1221709055,
    MEDIUMVIOLETRED: 3340076543,
    MIDNIGHTBLUE: 421097727,
    MINTCREAM: 4127193855,
    MISTYROSE: 4293190143,
    MOCCASIN: 4293178879,
    NAVAJOWHITE: 4292783615,
    NAVY: 33023,
    OLDLACE: 4260751103,
    OLIVE: 2155872511,
    OLIVEDRAB: 1804477439,
    ORANGE: 4289003775,
    ORANGERED: 4282712319,
    ORCHID: 3664828159,
    PALEGOLDENROD: 4008225535,
    PALEGREEN: 2566625535,
    PALETURQUOISE: 2951671551,
    PALEVIOLETRED: 3681588223,
    PAPAYAWHIP: 4293907967,
    PEACHPUFF: 4292524543,
    PERU: 3448061951,
    PINK: 4290825215,
    PLUM: 3718307327,
    POWDERBLUE: 2967529215,
    PURPLE: 2147516671,
    REBECCAPURPLE: 1714657791,
    RED: 4278190335,
    ROSYBROWN: 3163525119,
    ROYALBLUE: 1097458175,
    SADDLEBROWN: 2336560127,
    SALMON: 4202722047,
    SANDYBROWN: 4104413439,
    SEAGREEN: 780883967,
    SEASHELL: 4294307583,
    SIENNA: 2689740287,
    SILVER: 3233857791,
    SKYBLUE: 2278484991,
    SLATEBLUE: 1784335871,
    SLATEGRAY: 1887473919,
    SLATEGREY: 1887473919,
    SNOW: 4294638335,
    SPRINGGREEN: 16744447,
    STEELBLUE: 1182971135,
    TAN: 3535047935,
    TEAL: 8421631,
    THISTLE: 3636451583,
    TOMATO: 4284696575,
    TRANSPARENT: 0,
    TURQUOISE: 1088475391,
    VIOLET: 4001558271,
    WHEAT: 4125012991,
    WHITE: 4294967295,
    WHITESMOKE: 4126537215,
    YELLOW: 4294902015,
    YELLOWGREEN: 2597139199,
  },
  qU = {
    name: 'background-clip',
    initialValue: 'border-box',
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.map(function (t) {
        if (sA(t))
          switch (t.value) {
            case 'padding-box':
              return 1;
            case 'content-box':
              return 2;
          }
        return 0;
      });
    },
  },
  Av = {
    name: 'background-color',
    initialValue: 'transparent',
    prefix: !1,
    type: 3,
    format: 'color',
  },
  Ss = function (A, e) {
    var t = xt.parse(A, e[0]),
      r = e[1];
    return r && yA(r) ? { color: t, stop: r } : { color: t, stop: null };
  },
  BB = function (A, e) {
    var t = A[0],
      r = A[A.length - 1];
    t.stop === null && (t.stop = _A), r.stop === null && (r.stop = Ct);
    for (var n = [], i = 0, o = 0; o < A.length; o++) {
      var s = A[o].stop;
      if (s !== null) {
        var a = aA(s, e);
        a > i ? n.push(a) : n.push(i), (i = a);
      } else n.push(null);
    }
    for (var l = null, o = 0; o < n.length; o++) {
      var u = n[o];
      if (u === null) l === null && (l = o);
      else if (l !== null) {
        for (
          var c = o - l, B = n[l - 1], w = (u - B) / (c + 1), g = 1;
          g <= c;
          g++
        )
          n[l + g - 1] = w * g;
        l = null;
      }
    }
    return A.map(function (p, F) {
      var d = p.color;
      return { color: d, stop: Math.max(Math.min(1, n[F] / e), 0) };
    });
  },
  ev = function (A, e, t) {
    var r = e / 2,
      n = t / 2,
      i = aA(A[0], e) - r,
      o = n - aA(A[1], t);
    return (Math.atan2(o, i) + Math.PI * 2) % (Math.PI * 2);
  },
  tv = function (A, e, t) {
    var r = typeof A == 'number' ? A : ev(A, e, t),
      n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)),
      i = e / 2,
      o = t / 2,
      s = n / 2,
      a = Math.sin(r - Math.PI / 2) * s,
      l = Math.cos(r - Math.PI / 2) * s;
    return [n, i - l, i + l, o - a, o + a];
  },
  xe = function (A, e) {
    return Math.sqrt(A * A + e * e);
  },
  dB = function (A, e, t, r, n) {
    var i = [
      [0, 0],
      [0, e],
      [A, 0],
      [A, e],
    ];
    return i.reduce(
      function (o, s) {
        var a = s[0],
          l = s[1],
          u = xe(t - a, r - l);
        return (n ? u < o.optimumDistance : u > o.optimumDistance)
          ? { optimumCorner: s, optimumDistance: u }
          : o;
      },
      { optimumDistance: n ? 1 / 0 : -1 / 0, optimumCorner: null }
    ).optimumCorner;
  },
  rv = function (A, e, t, r, n) {
    var i = 0,
      o = 0;
    switch (A.size) {
      case 0:
        A.shape === 0
          ? (i = o =
              Math.min(
                Math.abs(e),
                Math.abs(e - r),
                Math.abs(t),
                Math.abs(t - n)
              ))
          : A.shape === 1 &&
            ((i = Math.min(Math.abs(e), Math.abs(e - r))),
            (o = Math.min(Math.abs(t), Math.abs(t - n))));
        break;
      case 2:
        if (A.shape === 0)
          i = o = Math.min(
            xe(e, t),
            xe(e, t - n),
            xe(e - r, t),
            xe(e - r, t - n)
          );
        else if (A.shape === 1) {
          var s =
              Math.min(Math.abs(t), Math.abs(t - n)) /
              Math.min(Math.abs(e), Math.abs(e - r)),
            a = dB(r, n, e, t, !0),
            l = a[0],
            u = a[1];
          (i = xe(l - e, (u - t) / s)), (o = s * i);
        }
        break;
      case 1:
        A.shape === 0
          ? (i = o =
              Math.max(
                Math.abs(e),
                Math.abs(e - r),
                Math.abs(t),
                Math.abs(t - n)
              ))
          : A.shape === 1 &&
            ((i = Math.max(Math.abs(e), Math.abs(e - r))),
            (o = Math.max(Math.abs(t), Math.abs(t - n))));
        break;
      case 3:
        if (A.shape === 0)
          i = o = Math.max(
            xe(e, t),
            xe(e, t - n),
            xe(e - r, t),
            xe(e - r, t - n)
          );
        else if (A.shape === 1) {
          var s =
              Math.max(Math.abs(t), Math.abs(t - n)) /
              Math.max(Math.abs(e), Math.abs(e - r)),
            c = dB(r, n, e, t, !1),
            l = c[0],
            u = c[1];
          (i = xe(l - e, (u - t) / s)), (o = s * i);
        }
        break;
    }
    return (
      Array.isArray(A.size) &&
        ((i = aA(A.size[0], r)),
        (o = A.size.length === 2 ? aA(A.size[1], n) : i)),
      [i, o]
    );
  },
  nv = function (A, e) {
    var t = Fe(180),
      r = [];
    return (
      be(e).forEach(function (n, i) {
        if (i === 0) {
          var o = n[0];
          if (o.type === 20 && o.value === 'to') {
            t = Jh(n);
            return;
          } else if (Wh(o)) {
            t = Is.parse(A, o);
            return;
          }
        }
        var s = Ss(A, n);
        r.push(s);
      }),
      { angle: t, stops: r, type: 1 }
    );
  },
  zi = function (A, e) {
    var t = Fe(180),
      r = [];
    return (
      be(e).forEach(function (n, i) {
        if (i === 0) {
          var o = n[0];
          if (
            o.type === 20 &&
            ['top', 'left', 'right', 'bottom'].indexOf(o.value) !== -1
          ) {
            t = Jh(n);
            return;
          } else if (Wh(o)) {
            t = (Is.parse(A, o) + Fe(270)) % Fe(360);
            return;
          }
        }
        var s = Ss(A, n);
        r.push(s);
      }),
      { angle: t, stops: r, type: 1 }
    );
  },
  iv = function (A, e) {
    var t = Fe(180),
      r = [],
      n = 1,
      i = 0,
      o = 3,
      s = [];
    return (
      be(e).forEach(function (a, l) {
        var u = a[0];
        if (l === 0) {
          if (sA(u) && u.value === 'linear') {
            n = 1;
            return;
          } else if (sA(u) && u.value === 'radial') {
            n = 2;
            return;
          }
        }
        if (u.type === 18) {
          if (u.name === 'from') {
            var c = xt.parse(A, u.values[0]);
            r.push({ stop: _A, color: c });
          } else if (u.name === 'to') {
            var c = xt.parse(A, u.values[0]);
            r.push({ stop: Ct, color: c });
          } else if (u.name === 'color-stop') {
            var B = u.values.filter(Gr);
            if (B.length === 2) {
              var c = xt.parse(A, B[1]),
                w = B[0];
              $r(w) &&
                r.push({
                  stop: { type: 16, number: w.number * 100, flags: w.flags },
                  color: c,
                });
            }
          }
        }
      }),
      n === 1
        ? { angle: (t + Fe(180)) % Fe(360), stops: r, type: n }
        : { size: o, shape: i, stops: r, position: s, type: n }
    );
  },
  zh = 'closest-side',
  Yh = 'farthest-side',
  $h = 'closest-corner',
  jh = 'farthest-corner',
  Zh = 'circle',
  qh = 'ellipse',
  Ap = 'cover',
  ep = 'contain',
  ov = function (A, e) {
    var t = 0,
      r = 3,
      n = [],
      i = [];
    return (
      be(e).forEach(function (o, s) {
        var a = !0;
        if (s === 0) {
          var l = !1;
          a = o.reduce(function (c, B) {
            if (l)
              if (sA(B))
                switch (B.value) {
                  case 'center':
                    return i.push(hc), c;
                  case 'top':
                  case 'left':
                    return i.push(_A), c;
                  case 'right':
                  case 'bottom':
                    return i.push(Ct), c;
                }
              else (yA(B) || Ot(B)) && i.push(B);
            else if (sA(B))
              switch (B.value) {
                case Zh:
                  return (t = 0), !1;
                case qh:
                  return (t = 1), !1;
                case 'at':
                  return (l = !0), !1;
                case zh:
                  return (r = 0), !1;
                case Ap:
                case Yh:
                  return (r = 1), !1;
                case ep:
                case $h:
                  return (r = 2), !1;
                case jh:
                  return (r = 3), !1;
              }
            else if (Ot(B) || yA(B))
              return Array.isArray(r) || (r = []), r.push(B), !1;
            return c;
          }, a);
        }
        if (a) {
          var u = Ss(A, o);
          n.push(u);
        }
      }),
      { size: r, shape: t, stops: n, position: i, type: 2 }
    );
  },
  Yi = function (A, e) {
    var t = 0,
      r = 3,
      n = [],
      i = [];
    return (
      be(e).forEach(function (o, s) {
        var a = !0;
        if (
          (s === 0
            ? (a = o.reduce(function (u, c) {
                if (sA(c))
                  switch (c.value) {
                    case 'center':
                      return i.push(hc), !1;
                    case 'top':
                    case 'left':
                      return i.push(_A), !1;
                    case 'right':
                    case 'bottom':
                      return i.push(Ct), !1;
                  }
                else if (yA(c) || Ot(c)) return i.push(c), !1;
                return u;
              }, a))
            : s === 1 &&
              (a = o.reduce(function (u, c) {
                if (sA(c))
                  switch (c.value) {
                    case Zh:
                      return (t = 0), !1;
                    case qh:
                      return (t = 1), !1;
                    case ep:
                    case zh:
                      return (r = 0), !1;
                    case Yh:
                      return (r = 1), !1;
                    case $h:
                      return (r = 2), !1;
                    case Ap:
                    case jh:
                      return (r = 3), !1;
                  }
                else if (Ot(c) || yA(c))
                  return Array.isArray(r) || (r = []), r.push(c), !1;
                return u;
              }, a)),
          a)
        ) {
          var l = Ss(A, o);
          n.push(l);
        }
      }),
      { size: r, shape: t, stops: n, position: i, type: 2 }
    );
  },
  sv = function (A) {
    return A.type === 1;
  },
  av = function (A) {
    return A.type === 2;
  },
  pc = {
    name: 'image',
    parse: function (A, e) {
      if (e.type === 22) {
        var t = { url: e.value, type: 0 };
        return A.cache.addImage(e.value), t;
      }
      if (e.type === 18) {
        var r = tp[e.name];
        if (typeof r > 'u')
          throw new Error(
            'Attempting to parse an unsupported image function "' + e.name + '"'
          );
        return r(A, e.values);
      }
      throw new Error('Unsupported image type ' + e.type);
    },
  };
function lv(A) {
  return (
    !(A.type === 20 && A.value === 'none') && (A.type !== 18 || !!tp[A.name])
  );
}
var tp = {
    'linear-gradient': nv,
    '-moz-linear-gradient': zi,
    '-ms-linear-gradient': zi,
    '-o-linear-gradient': zi,
    '-webkit-linear-gradient': zi,
    'radial-gradient': ov,
    '-moz-radial-gradient': Yi,
    '-ms-radial-gradient': Yi,
    '-o-radial-gradient': Yi,
    '-webkit-radial-gradient': Yi,
    '-webkit-gradient': iv,
  },
  uv = {
    name: 'background-image',
    initialValue: 'none',
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === 'none'
        ? []
        : e
            .filter(function (r) {
              return Gr(r) && lv(r);
            })
            .map(function (r) {
              return pc.parse(A, r);
            });
    },
  },
  cv = {
    name: 'background-origin',
    initialValue: 'border-box',
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.map(function (t) {
        if (sA(t))
          switch (t.value) {
            case 'padding-box':
              return 1;
            case 'content-box':
              return 2;
          }
        return 0;
      });
    },
  },
  fv = {
    name: 'background-position',
    initialValue: '0% 0%',
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      return be(e)
        .map(function (t) {
          return t.filter(yA);
        })
        .map(Ph);
    },
  },
  Bv = {
    name: 'background-repeat',
    initialValue: 'repeat',
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return be(e)
        .map(function (t) {
          return t
            .filter(sA)
            .map(function (r) {
              return r.value;
            })
            .join(' ');
        })
        .map(dv);
    },
  },
  dv = function (A) {
    switch (A) {
      case 'no-repeat':
        return 1;
      case 'repeat-x':
      case 'repeat no-repeat':
        return 2;
      case 'repeat-y':
      case 'no-repeat repeat':
        return 3;
      case 'repeat':
      default:
        return 0;
    }
  },
  kr;
(function (A) {
  (A.AUTO = 'auto'), (A.CONTAIN = 'contain'), (A.COVER = 'cover');
})(kr || (kr = {}));
var gv = {
    name: 'background-size',
    initialValue: '0',
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return be(e).map(function (t) {
        return t.filter(hv);
      });
    },
  },
  hv = function (A) {
    return sA(A) || yA(A);
  },
  xs = function (A) {
    return {
      name: 'border-' + A + '-color',
      initialValue: 'transparent',
      prefix: !1,
      type: 3,
      format: 'color',
    };
  },
  pv = xs('top'),
  wv = xs('right'),
  Qv = xs('bottom'),
  Cv = xs('left'),
  Ls = function (A) {
    return {
      name: 'border-radius-' + A,
      initialValue: '0 0',
      prefix: !1,
      type: 1,
      parse: function (e, t) {
        return Ph(t.filter(yA));
      },
    };
  },
  Uv = Ls('top-left'),
  vv = Ls('top-right'),
  Fv = Ls('bottom-right'),
  mv = Ls('bottom-left'),
  Ks = function (A) {
    return {
      name: 'border-' + A + '-style',
      initialValue: 'solid',
      prefix: !1,
      type: 2,
      parse: function (e, t) {
        switch (t) {
          case 'none':
            return 0;
          case 'dashed':
            return 2;
          case 'dotted':
            return 3;
          case 'double':
            return 4;
        }
        return 1;
      },
    };
  },
  yv = Ks('top'),
  Ev = Ks('right'),
  Hv = Ks('bottom'),
  Iv = Ks('left'),
  Ts = function (A) {
    return {
      name: 'border-' + A + '-width',
      initialValue: '0',
      type: 0,
      prefix: !1,
      parse: function (e, t) {
        return Bi(t) ? t.number : 0;
      },
    };
  },
  Sv = Ts('top'),
  xv = Ts('right'),
  Lv = Ts('bottom'),
  Kv = Ts('left'),
  Tv = {
    name: 'color',
    initialValue: 'transparent',
    prefix: !1,
    type: 3,
    format: 'color',
  },
  Dv = {
    name: 'direction',
    initialValue: 'ltr',
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case 'rtl':
          return 1;
        case 'ltr':
        default:
          return 0;
      }
    },
  },
  kv = {
    name: 'display',
    initialValue: 'inline-block',
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.filter(sA).reduce(function (t, r) {
        return t | Ov(r.value);
      }, 0);
    },
  },
  Ov = function (A) {
    switch (A) {
      case 'block':
      case '-webkit-box':
        return 2;
      case 'inline':
        return 4;
      case 'run-in':
        return 8;
      case 'flow':
        return 16;
      case 'flow-root':
        return 32;
      case 'table':
        return 64;
      case 'flex':
      case '-webkit-flex':
        return 128;
      case 'grid':
      case '-ms-grid':
        return 256;
      case 'ruby':
        return 512;
      case 'subgrid':
        return 1024;
      case 'list-item':
        return 2048;
      case 'table-row-group':
        return 4096;
      case 'table-header-group':
        return 8192;
      case 'table-footer-group':
        return 16384;
      case 'table-row':
        return 32768;
      case 'table-cell':
        return 65536;
      case 'table-column-group':
        return 131072;
      case 'table-column':
        return 262144;
      case 'table-caption':
        return 524288;
      case 'ruby-base':
        return 1048576;
      case 'ruby-text':
        return 2097152;
      case 'ruby-base-container':
        return 4194304;
      case 'ruby-text-container':
        return 8388608;
      case 'contents':
        return 16777216;
      case 'inline-block':
        return 33554432;
      case 'inline-list-item':
        return 67108864;
      case 'inline-table':
        return 134217728;
      case 'inline-flex':
        return 268435456;
      case 'inline-grid':
        return 536870912;
    }
    return 0;
  },
  Rv = {
    name: 'float',
    initialValue: 'none',
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case 'left':
          return 1;
        case 'right':
          return 2;
        case 'inline-start':
          return 3;
        case 'inline-end':
          return 4;
      }
      return 0;
    },
  },
  Mv = {
    name: 'letter-spacing',
    initialValue: '0',
    prefix: !1,
    type: 0,
    parse: function (A, e) {
      return e.type === 20 && e.value === 'normal'
        ? 0
        : e.type === 17 || e.type === 15
        ? e.number
        : 0;
    },
  },
  jo;
(function (A) {
  (A.NORMAL = 'normal'), (A.STRICT = 'strict');
})(jo || (jo = {}));
var Nv = {
    name: 'line-break',
    initialValue: 'normal',
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case 'strict':
          return jo.STRICT;
        case 'normal':
        default:
          return jo.NORMAL;
      }
    },
  },
  _v = { name: 'line-height', initialValue: 'normal', prefix: !1, type: 4 },
  gB = function (A, e) {
    return sA(A) && A.value === 'normal'
      ? 1.2 * e
      : A.type === 17
      ? e * A.number
      : yA(A)
      ? aA(A, e)
      : e;
  },
  Pv = {
    name: 'list-style-image',
    initialValue: 'none',
    type: 0,
    prefix: !1,
    parse: function (A, e) {
      return e.type === 20 && e.value === 'none' ? null : pc.parse(A, e);
    },
  },
  Vv = {
    name: 'list-style-position',
    initialValue: 'outside',
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case 'inside':
          return 0;
        case 'outside':
        default:
          return 1;
      }
    },
  },
  nu = {
    name: 'list-style-type',
    initialValue: 'none',
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case 'disc':
          return 0;
        case 'circle':
          return 1;
        case 'square':
          return 2;
        case 'decimal':
          return 3;
        case 'cjk-decimal':
          return 4;
        case 'decimal-leading-zero':
          return 5;
        case 'lower-roman':
          return 6;
        case 'upper-roman':
          return 7;
        case 'lower-greek':
          return 8;
        case 'lower-alpha':
          return 9;
        case 'upper-alpha':
          return 10;
        case 'arabic-indic':
          return 11;
        case 'armenian':
          return 12;
        case 'bengali':
          return 13;
        case 'cambodian':
          return 14;
        case 'cjk-earthly-branch':
          return 15;
        case 'cjk-heavenly-stem':
          return 16;
        case 'cjk-ideographic':
          return 17;
        case 'devanagari':
          return 18;
        case 'ethiopic-numeric':
          return 19;
        case 'georgian':
          return 20;
        case 'gujarati':
          return 21;
        case 'gurmukhi':
          return 22;
        case 'hebrew':
          return 22;
        case 'hiragana':
          return 23;
        case 'hiragana-iroha':
          return 24;
        case 'japanese-formal':
          return 25;
        case 'japanese-informal':
          return 26;
        case 'kannada':
          return 27;
        case 'katakana':
          return 28;
        case 'katakana-iroha':
          return 29;
        case 'khmer':
          return 30;
        case 'korean-hangul-formal':
          return 31;
        case 'korean-hanja-formal':
          return 32;
        case 'korean-hanja-informal':
          return 33;
        case 'lao':
          return 34;
        case 'lower-armenian':
          return 35;
        case 'malayalam':
          return 36;
        case 'mongolian':
          return 37;
        case 'myanmar':
          return 38;
        case 'oriya':
          return 39;
        case 'persian':
          return 40;
        case 'simp-chinese-formal':
          return 41;
        case 'simp-chinese-informal':
          return 42;
        case 'tamil':
          return 43;
        case 'telugu':
          return 44;
        case 'thai':
          return 45;
        case 'tibetan':
          return 46;
        case 'trad-chinese-formal':
          return 47;
        case 'trad-chinese-informal':
          return 48;
        case 'upper-armenian':
          return 49;
        case 'disclosure-open':
          return 50;
        case 'disclosure-closed':
          return 51;
        case 'none':
        default:
          return -1;
      }
    },
  },
  Ds = function (A) {
    return { name: 'margin-' + A, initialValue: '0', prefix: !1, type: 4 };
  },
  Gv = Ds('top'),
  bv = Ds('right'),
  Xv = Ds('bottom'),
  Wv = Ds('left'),
  Jv = {
    name: 'overflow',
    initialValue: 'visible',
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.filter(sA).map(function (t) {
        switch (t.value) {
          case 'hidden':
            return 1;
          case 'scroll':
            return 2;
          case 'clip':
            return 3;
          case 'auto':
            return 4;
          case 'visible':
          default:
            return 0;
        }
      });
    },
  },
  zv = {
    name: 'overflow-wrap',
    initialValue: 'normal',
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case 'break-word':
          return 'break-word';
        case 'normal':
        default:
          return 'normal';
      }
    },
  },
  ks = function (A) {
    return {
      name: 'padding-' + A,
      initialValue: '0',
      prefix: !1,
      type: 3,
      format: 'length-percentage',
    };
  },
  Yv = ks('top'),
  $v = ks('right'),
  jv = ks('bottom'),
  Zv = ks('left'),
  qv = {
    name: 'text-align',
    initialValue: 'left',
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case 'right':
          return 2;
        case 'center':
        case 'justify':
          return 1;
        case 'left':
        default:
          return 0;
      }
    },
  },
  AF = {
    name: 'position',
    initialValue: 'static',
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case 'relative':
          return 1;
        case 'absolute':
          return 2;
        case 'fixed':
          return 3;
        case 'sticky':
          return 4;
      }
      return 0;
    },
  },
  eF = {
    name: 'text-shadow',
    initialValue: 'none',
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      return e.length === 1 && ru(e[0], 'none')
        ? []
        : be(e).map(function (t) {
            for (
              var r = {
                  color: At.TRANSPARENT,
                  offsetX: _A,
                  offsetY: _A,
                  blur: _A,
                },
                n = 0,
                i = 0;
              i < t.length;
              i++
            ) {
              var o = t[i];
              Ot(o)
                ? (n === 0
                    ? (r.offsetX = o)
                    : n === 1
                    ? (r.offsetY = o)
                    : (r.blur = o),
                  n++)
                : (r.color = xt.parse(A, o));
            }
            return r;
          });
    },
  },
  tF = {
    name: 'text-transform',
    initialValue: 'none',
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case 'uppercase':
          return 2;
        case 'lowercase':
          return 1;
        case 'capitalize':
          return 3;
      }
      return 0;
    },
  },
  rF = {
    name: 'transform',
    initialValue: 'none',
    prefix: !0,
    type: 0,
    parse: function (A, e) {
      if (e.type === 20 && e.value === 'none') return null;
      if (e.type === 18) {
        var t = oF[e.name];
        if (typeof t > 'u')
          throw new Error(
            'Attempting to parse an unsupported transform function "' +
              e.name +
              '"'
          );
        return t(e.values);
      }
      return null;
    },
  },
  nF = function (A) {
    var e = A.filter(function (t) {
      return t.type === 17;
    }).map(function (t) {
      return t.number;
    });
    return e.length === 6 ? e : null;
  },
  iF = function (A) {
    var e = A.filter(function (a) {
        return a.type === 17;
      }).map(function (a) {
        return a.number;
      }),
      t = e[0],
      r = e[1];
    e[2], e[3];
    var n = e[4],
      i = e[5];
    e[6], e[7], e[8], e[9], e[10], e[11];
    var o = e[12],
      s = e[13];
    return e[14], e[15], e.length === 16 ? [t, r, n, i, o, s] : null;
  },
  oF = { matrix: nF, matrix3d: iF },
  hB = { type: 16, number: 50, flags: fi },
  sF = [hB, hB],
  aF = {
    name: 'transform-origin',
    initialValue: '50% 50%',
    prefix: !0,
    type: 1,
    parse: function (A, e) {
      var t = e.filter(yA);
      return t.length !== 2 ? sF : [t[0], t[1]];
    },
  },
  lF = {
    name: 'visible',
    initialValue: 'none',
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case 'hidden':
          return 1;
        case 'collapse':
          return 2;
        case 'visible':
        default:
          return 0;
      }
    },
  },
  Dn;
(function (A) {
  (A.NORMAL = 'normal'), (A.BREAK_ALL = 'break-all'), (A.KEEP_ALL = 'keep-all');
})(Dn || (Dn = {}));
var uF = {
    name: 'word-break',
    initialValue: 'normal',
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case 'break-all':
          return Dn.BREAK_ALL;
        case 'keep-all':
          return Dn.KEEP_ALL;
        case 'normal':
        default:
          return Dn.NORMAL;
      }
    },
  },
  cF = {
    name: 'z-index',
    initialValue: 'auto',
    prefix: !1,
    type: 0,
    parse: function (A, e) {
      if (e.type === 20) return { auto: !0, order: 0 };
      if ($r(e)) return { auto: !1, order: e.number };
      throw new Error('Invalid z-index number parsed');
    },
  },
  rp = {
    name: 'time',
    parse: function (A, e) {
      if (e.type === 15)
        switch (e.unit.toLowerCase()) {
          case 's':
            return 1e3 * e.number;
          case 'ms':
            return e.number;
        }
      throw new Error('Unsupported time type');
    },
  },
  fF = {
    name: 'opacity',
    initialValue: '1',
    type: 0,
    prefix: !1,
    parse: function (A, e) {
      return $r(e) ? e.number : 1;
    },
  },
  BF = {
    name: 'text-decoration-color',
    initialValue: 'transparent',
    prefix: !1,
    type: 3,
    format: 'color',
  },
  dF = {
    name: 'text-decoration-line',
    initialValue: 'none',
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e
        .filter(sA)
        .map(function (t) {
          switch (t.value) {
            case 'underline':
              return 1;
            case 'overline':
              return 2;
            case 'line-through':
              return 3;
            case 'none':
              return 4;
          }
          return 0;
        })
        .filter(function (t) {
          return t !== 0;
        });
    },
  },
  gF = {
    name: 'font-family',
    initialValue: '',
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      var t = [],
        r = [];
      return (
        e.forEach(function (n) {
          switch (n.type) {
            case 20:
            case 0:
              t.push(n.value);
              break;
            case 17:
              t.push(n.number.toString());
              break;
            case 4:
              r.push(t.join(' ')), (t.length = 0);
              break;
          }
        }),
        t.length && r.push(t.join(' ')),
        r.map(function (n) {
          return n.indexOf(' ') === -1 ? n : "'" + n + "'";
        })
      );
    },
  },
  hF = {
    name: 'font-size',
    initialValue: '0',
    prefix: !1,
    type: 3,
    format: 'length',
  },
  pF = {
    name: 'font-weight',
    initialValue: 'normal',
    type: 0,
    prefix: !1,
    parse: function (A, e) {
      if ($r(e)) return e.number;
      if (sA(e))
        switch (e.value) {
          case 'bold':
            return 700;
          case 'normal':
          default:
            return 400;
        }
      return 400;
    },
  },
  wF = {
    name: 'font-variant',
    initialValue: 'none',
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      return e.filter(sA).map(function (t) {
        return t.value;
      });
    },
  },
  QF = {
    name: 'font-style',
    initialValue: 'normal',
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case 'oblique':
          return 'oblique';
        case 'italic':
          return 'italic';
        case 'normal':
        default:
          return 'normal';
      }
    },
  },
  IA = function (A, e) {
    return (A & e) !== 0;
  },
  CF = {
    name: 'content',
    initialValue: 'none',
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === 'none' ? [] : e;
    },
  },
  UF = {
    name: 'counter-increment',
    initialValue: 'none',
    prefix: !0,
    type: 1,
    parse: function (A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === 'none') return null;
      for (var r = [], n = e.filter(_h), i = 0; i < n.length; i++) {
        var o = n[i],
          s = n[i + 1];
        if (o.type === 20) {
          var a = s && $r(s) ? s.number : 1;
          r.push({ counter: o.value, increment: a });
        }
      }
      return r;
    },
  },
  vF = {
    name: 'counter-reset',
    initialValue: 'none',
    prefix: !0,
    type: 1,
    parse: function (A, e) {
      if (e.length === 0) return [];
      for (var t = [], r = e.filter(_h), n = 0; n < r.length; n++) {
        var i = r[n],
          o = r[n + 1];
        if (sA(i) && i.value !== 'none') {
          var s = o && $r(o) ? o.number : 0;
          t.push({ counter: i.value, reset: s });
        }
      }
      return t;
    },
  },
  FF = {
    name: 'duration',
    initialValue: '0s',
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.filter(Bi).map(function (t) {
        return rp.parse(A, t);
      });
    },
  },
  mF = {
    name: 'quotes',
    initialValue: 'none',
    prefix: !0,
    type: 1,
    parse: function (A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === 'none') return null;
      var r = [],
        n = e.filter($U);
      if (n.length % 2 !== 0) return null;
      for (var i = 0; i < n.length; i += 2) {
        var o = n[i].value,
          s = n[i + 1].value;
        r.push({ open: o, close: s });
      }
      return r;
    },
  },
  pB = function (A, e, t) {
    if (!A) return '';
    var r = A[Math.min(e, A.length - 1)];
    return r ? (t ? r.open : r.close) : '';
  },
  yF = {
    name: 'box-shadow',
    initialValue: 'none',
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      return e.length === 1 && ru(e[0], 'none')
        ? []
        : be(e).map(function (t) {
            for (
              var r = {
                  color: 255,
                  offsetX: _A,
                  offsetY: _A,
                  blur: _A,
                  spread: _A,
                  inset: !1,
                },
                n = 0,
                i = 0;
              i < t.length;
              i++
            ) {
              var o = t[i];
              ru(o, 'inset')
                ? (r.inset = !0)
                : Ot(o)
                ? (n === 0
                    ? (r.offsetX = o)
                    : n === 1
                    ? (r.offsetY = o)
                    : n === 2
                    ? (r.blur = o)
                    : (r.spread = o),
                  n++)
                : (r.color = xt.parse(A, o));
            }
            return r;
          });
    },
  },
  EF = {
    name: 'paint-order',
    initialValue: 'normal',
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      var t = [0, 1, 2],
        r = [];
      return (
        e.filter(sA).forEach(function (n) {
          switch (n.value) {
            case 'stroke':
              r.push(1);
              break;
            case 'fill':
              r.push(0);
              break;
            case 'markers':
              r.push(2);
              break;
          }
        }),
        t.forEach(function (n) {
          r.indexOf(n) === -1 && r.push(n);
        }),
        r
      );
    },
  },
  HF = {
    name: '-webkit-text-stroke-color',
    initialValue: 'currentcolor',
    prefix: !1,
    type: 3,
    format: 'color',
  },
  IF = {
    name: '-webkit-text-stroke-width',
    initialValue: '0',
    type: 0,
    prefix: !1,
    parse: function (A, e) {
      return Bi(e) ? e.number : 0;
    },
  },
  SF = (function () {
    function A(e, t) {
      var r, n;
      (this.animationDuration = k(e, FF, t.animationDuration)),
        (this.backgroundClip = k(e, qU, t.backgroundClip)),
        (this.backgroundColor = k(e, Av, t.backgroundColor)),
        (this.backgroundImage = k(e, uv, t.backgroundImage)),
        (this.backgroundOrigin = k(e, cv, t.backgroundOrigin)),
        (this.backgroundPosition = k(e, fv, t.backgroundPosition)),
        (this.backgroundRepeat = k(e, Bv, t.backgroundRepeat)),
        (this.backgroundSize = k(e, gv, t.backgroundSize)),
        (this.borderTopColor = k(e, pv, t.borderTopColor)),
        (this.borderRightColor = k(e, wv, t.borderRightColor)),
        (this.borderBottomColor = k(e, Qv, t.borderBottomColor)),
        (this.borderLeftColor = k(e, Cv, t.borderLeftColor)),
        (this.borderTopLeftRadius = k(e, Uv, t.borderTopLeftRadius)),
        (this.borderTopRightRadius = k(e, vv, t.borderTopRightRadius)),
        (this.borderBottomRightRadius = k(e, Fv, t.borderBottomRightRadius)),
        (this.borderBottomLeftRadius = k(e, mv, t.borderBottomLeftRadius)),
        (this.borderTopStyle = k(e, yv, t.borderTopStyle)),
        (this.borderRightStyle = k(e, Ev, t.borderRightStyle)),
        (this.borderBottomStyle = k(e, Hv, t.borderBottomStyle)),
        (this.borderLeftStyle = k(e, Iv, t.borderLeftStyle)),
        (this.borderTopWidth = k(e, Sv, t.borderTopWidth)),
        (this.borderRightWidth = k(e, xv, t.borderRightWidth)),
        (this.borderBottomWidth = k(e, Lv, t.borderBottomWidth)),
        (this.borderLeftWidth = k(e, Kv, t.borderLeftWidth)),
        (this.boxShadow = k(e, yF, t.boxShadow)),
        (this.color = k(e, Tv, t.color)),
        (this.direction = k(e, Dv, t.direction)),
        (this.display = k(e, kv, t.display)),
        (this.float = k(e, Rv, t.cssFloat)),
        (this.fontFamily = k(e, gF, t.fontFamily)),
        (this.fontSize = k(e, hF, t.fontSize)),
        (this.fontStyle = k(e, QF, t.fontStyle)),
        (this.fontVariant = k(e, wF, t.fontVariant)),
        (this.fontWeight = k(e, pF, t.fontWeight)),
        (this.letterSpacing = k(e, Mv, t.letterSpacing)),
        (this.lineBreak = k(e, Nv, t.lineBreak)),
        (this.lineHeight = k(e, _v, t.lineHeight)),
        (this.listStyleImage = k(e, Pv, t.listStyleImage)),
        (this.listStylePosition = k(e, Vv, t.listStylePosition)),
        (this.listStyleType = k(e, nu, t.listStyleType)),
        (this.marginTop = k(e, Gv, t.marginTop)),
        (this.marginRight = k(e, bv, t.marginRight)),
        (this.marginBottom = k(e, Xv, t.marginBottom)),
        (this.marginLeft = k(e, Wv, t.marginLeft)),
        (this.opacity = k(e, fF, t.opacity));
      var i = k(e, Jv, t.overflow);
      (this.overflowX = i[0]),
        (this.overflowY = i[i.length > 1 ? 1 : 0]),
        (this.overflowWrap = k(e, zv, t.overflowWrap)),
        (this.paddingTop = k(e, Yv, t.paddingTop)),
        (this.paddingRight = k(e, $v, t.paddingRight)),
        (this.paddingBottom = k(e, jv, t.paddingBottom)),
        (this.paddingLeft = k(e, Zv, t.paddingLeft)),
        (this.paintOrder = k(e, EF, t.paintOrder)),
        (this.position = k(e, AF, t.position)),
        (this.textAlign = k(e, qv, t.textAlign)),
        (this.textDecorationColor = k(
          e,
          BF,
          (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color
        )),
        (this.textDecorationLine = k(
          e,
          dF,
          (n = t.textDecorationLine) !== null && n !== void 0
            ? n
            : t.textDecoration
        )),
        (this.textShadow = k(e, eF, t.textShadow)),
        (this.textTransform = k(e, tF, t.textTransform)),
        (this.transform = k(e, rF, t.transform)),
        (this.transformOrigin = k(e, aF, t.transformOrigin)),
        (this.visibility = k(e, lF, t.visibility)),
        (this.webkitTextStrokeColor = k(e, HF, t.webkitTextStrokeColor)),
        (this.webkitTextStrokeWidth = k(e, IF, t.webkitTextStrokeWidth)),
        (this.wordBreak = k(e, uF, t.wordBreak)),
        (this.zIndex = k(e, cF, t.zIndex));
    }
    return (
      (A.prototype.isVisible = function () {
        return this.display > 0 && this.opacity > 0 && this.visibility === 0;
      }),
      (A.prototype.isTransparent = function () {
        return Lt(this.backgroundColor);
      }),
      (A.prototype.isTransformed = function () {
        return this.transform !== null;
      }),
      (A.prototype.isPositioned = function () {
        return this.position !== 0;
      }),
      (A.prototype.isPositionedWithZIndex = function () {
        return this.isPositioned() && !this.zIndex.auto;
      }),
      (A.prototype.isFloating = function () {
        return this.float !== 0;
      }),
      (A.prototype.isInlineLevel = function () {
        return (
          IA(this.display, 4) ||
          IA(this.display, 33554432) ||
          IA(this.display, 268435456) ||
          IA(this.display, 536870912) ||
          IA(this.display, 67108864) ||
          IA(this.display, 134217728)
        );
      }),
      A
    );
  })(),
  xF = (function () {
    function A(e, t) {
      (this.content = k(e, CF, t.content)), (this.quotes = k(e, mF, t.quotes));
    }
    return A;
  })(),
  wB = (function () {
    function A(e, t) {
      (this.counterIncrement = k(e, UF, t.counterIncrement)),
        (this.counterReset = k(e, vF, t.counterReset));
    }
    return A;
  })(),
  k = function (A, e, t) {
    var r = new Mh(),
      n = t !== null && typeof t < 'u' ? t.toString() : e.initialValue;
    r.write(n);
    var i = new Nh(r.read());
    switch (e.type) {
      case 2:
        var o = i.parseComponentValue();
        return e.parse(A, sA(o) ? o.value : e.initialValue);
      case 0:
        return e.parse(A, i.parseComponentValue());
      case 1:
        return e.parse(A, i.parseComponentValues());
      case 4:
        return i.parseComponentValue();
      case 3:
        switch (e.format) {
          case 'angle':
            return Is.parse(A, i.parseComponentValue());
          case 'color':
            return xt.parse(A, i.parseComponentValue());
          case 'image':
            return pc.parse(A, i.parseComponentValue());
          case 'length':
            var s = i.parseComponentValue();
            return Ot(s) ? s : _A;
          case 'length-percentage':
            var a = i.parseComponentValue();
            return yA(a) ? a : _A;
          case 'time':
            return rp.parse(A, i.parseComponentValue());
        }
        break;
    }
  },
  LF = 'data-html2canvas-debug',
  KF = function (A) {
    var e = A.getAttribute(LF);
    switch (e) {
      case 'all':
        return 1;
      case 'clone':
        return 2;
      case 'parse':
        return 3;
      case 'render':
        return 4;
      default:
        return 0;
    }
  },
  iu = function (A, e) {
    var t = KF(A);
    return t === 1 || e === t;
  },
  Xe = (function () {
    function A(e, t) {
      if (
        ((this.context = e),
        (this.textNodes = []),
        (this.elements = []),
        (this.flags = 0),
        iu(t, 3))
      )
        debugger;
      (this.styles = new SF(e, window.getComputedStyle(t, null))),
        au(t) &&
          (this.styles.animationDuration.some(function (r) {
            return r > 0;
          }) && (t.style.animationDuration = '0s'),
          this.styles.transform !== null && (t.style.transform = 'none')),
        (this.bounds = Es(this.context, t)),
        iu(t, 4) && (this.flags |= 16);
    }
    return A;
  })(),
  TF =
    'AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=',
  QB = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  Un = typeof Uint8Array > 'u' ? [] : new Uint8Array(256);
for (var $i = 0; $i < QB.length; $i++) Un[QB.charCodeAt($i)] = $i;
var DF = function (A) {
    var e = A.length * 0.75,
      t = A.length,
      r,
      n = 0,
      i,
      o,
      s,
      a;
    A[A.length - 1] === '=' && (e--, A[A.length - 2] === '=' && e--);
    var l =
        typeof ArrayBuffer < 'u' &&
        typeof Uint8Array < 'u' &&
        typeof Uint8Array.prototype.slice < 'u'
          ? new ArrayBuffer(e)
          : new Array(e),
      u = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4)
      (i = Un[A.charCodeAt(r)]),
        (o = Un[A.charCodeAt(r + 1)]),
        (s = Un[A.charCodeAt(r + 2)]),
        (a = Un[A.charCodeAt(r + 3)]),
        (u[n++] = (i << 2) | (o >> 4)),
        (u[n++] = ((o & 15) << 4) | (s >> 2)),
        (u[n++] = ((s & 3) << 6) | (a & 63));
    return l;
  },
  kF = function (A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2)
      t.push((A[r + 1] << 8) | A[r]);
    return t;
  },
  OF = function (A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4)
      t.push((A[r + 3] << 24) | (A[r + 2] << 16) | (A[r + 1] << 8) | A[r]);
    return t;
  },
  jt = 5,
  wc = 6 + 5,
  Sa = 2,
  RF = wc - jt,
  np = 65536 >> jt,
  MF = 1 << jt,
  xa = MF - 1,
  NF = 1024 >> jt,
  _F = np + NF,
  PF = _F,
  VF = 32,
  GF = PF + VF,
  bF = 65536 >> wc,
  XF = 1 << RF,
  WF = XF - 1,
  CB = function (A, e, t) {
    return A.slice
      ? A.slice(e, t)
      : new Uint16Array(Array.prototype.slice.call(A, e, t));
  },
  JF = function (A, e, t) {
    return A.slice
      ? A.slice(e, t)
      : new Uint32Array(Array.prototype.slice.call(A, e, t));
  },
  zF = function (A, e) {
    var t = DF(A),
      r = Array.isArray(t) ? OF(t) : new Uint32Array(t),
      n = Array.isArray(t) ? kF(t) : new Uint16Array(t),
      i = 24,
      o = CB(n, i / 2, r[4] / 2),
      s = r[5] === 2 ? CB(n, (i + r[4]) / 2) : JF(r, Math.ceil((i + r[4]) / 4));
    return new YF(r[0], r[1], r[2], r[3], o, s);
  },
  YF = (function () {
    function A(e, t, r, n, i, o) {
      (this.initialValue = e),
        (this.errorValue = t),
        (this.highStart = r),
        (this.highValueIndex = n),
        (this.index = i),
        (this.data = o);
    }
    return (
      (A.prototype.get = function (e) {
        var t;
        if (e >= 0) {
          if (e < 55296 || (e > 56319 && e <= 65535))
            return (
              (t = this.index[e >> jt]),
              (t = (t << Sa) + (e & xa)),
              this.data[t]
            );
          if (e <= 65535)
            return (
              (t = this.index[np + ((e - 55296) >> jt)]),
              (t = (t << Sa) + (e & xa)),
              this.data[t]
            );
          if (e < this.highStart)
            return (
              (t = GF - bF + (e >> wc)),
              (t = this.index[t]),
              (t += (e >> jt) & WF),
              (t = this.index[t]),
              (t = (t << Sa) + (e & xa)),
              this.data[t]
            );
          if (e <= 1114111) return this.data[this.highValueIndex];
        }
        return this.errorValue;
      }),
      A
    );
  })(),
  UB = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  $F = typeof Uint8Array > 'u' ? [] : new Uint8Array(256);
for (var ji = 0; ji < UB.length; ji++) $F[UB.charCodeAt(ji)] = ji;
var jF = 1,
  La = 2,
  Ka = 3,
  vB = 4,
  FB = 5,
  ZF = 7,
  mB = 8,
  Ta = 9,
  Da = 10,
  yB = 11,
  EB = 12,
  HB = 13,
  IB = 14,
  ka = 15,
  qF = function (A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var i = A.charCodeAt(t++);
        (i & 64512) === 56320
          ? e.push(((n & 1023) << 10) + (i & 1023) + 65536)
          : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  },
  Am = function () {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return '';
    for (var r = [], n = -1, i = ''; ++n < t; ) {
      var o = A[n];
      o <= 65535
        ? r.push(o)
        : ((o -= 65536), r.push((o >> 10) + 55296, (o % 1024) + 56320)),
        (n + 1 === t || r.length > 16384) &&
          ((i += String.fromCharCode.apply(String, r)), (r.length = 0));
    }
    return i;
  },
  em = zF(TF),
  pe = '×',
  Oa = '÷',
  tm = function (A) {
    return em.get(A);
  },
  rm = function (A, e, t) {
    var r = t - 2,
      n = e[r],
      i = e[t - 1],
      o = e[t];
    if (i === La && o === Ka) return pe;
    if (i === La || i === Ka || i === vB || o === La || o === Ka || o === vB)
      return Oa;
    if (
      (i === mB && [mB, Ta, yB, EB].indexOf(o) !== -1) ||
      ((i === yB || i === Ta) && (o === Ta || o === Da)) ||
      ((i === EB || i === Da) && o === Da) ||
      o === HB ||
      o === FB ||
      o === ZF ||
      i === jF
    )
      return pe;
    if (i === HB && o === IB) {
      for (; n === FB; ) n = e[--r];
      if (n === IB) return pe;
    }
    if (i === ka && o === ka) {
      for (var s = 0; n === ka; ) s++, (n = e[--r]);
      if (s % 2 === 0) return pe;
    }
    return Oa;
  },
  nm = function (A) {
    var e = qF(A),
      t = e.length,
      r = 0,
      n = 0,
      i = e.map(tm);
    return {
      next: function () {
        if (r >= t) return { done: !0, value: null };
        for (var o = pe; r < t && (o = rm(e, i, ++r)) === pe; );
        if (o !== pe || r === t) {
          var s = Am.apply(null, e.slice(n, r));
          return (n = r), { value: s, done: !1 };
        }
        return { done: !0, value: null };
      },
    };
  },
  im = function (A) {
    for (var e = nm(A), t = [], r; !(r = e.next()).done; )
      r.value && t.push(r.value.slice());
    return t;
  },
  om = function (A) {
    var e = 123;
    if (A.createRange) {
      var t = A.createRange();
      if (t.getBoundingClientRect) {
        var r = A.createElement('boundtest');
        (r.style.height = e + 'px'),
          (r.style.display = 'block'),
          A.body.appendChild(r),
          t.selectNode(r);
        var n = t.getBoundingClientRect(),
          i = Math.round(n.height);
        if ((A.body.removeChild(r), i === e)) return !0;
      }
    }
    return !1;
  },
  sm = function (A) {
    var e = A.createElement('boundtest');
    (e.style.width = '50px'),
      (e.style.display = 'block'),
      (e.style.fontSize = '12px'),
      (e.style.letterSpacing = '0px'),
      (e.style.wordSpacing = '0px'),
      A.body.appendChild(e);
    var t = A.createRange();
    e.innerHTML = typeof ''.repeat == 'function' ? '&#128104;'.repeat(10) : '';
    var r = e.firstChild,
      n = Hs(r.data).map(function (a) {
        return FA(a);
      }),
      i = 0,
      o = {},
      s = n.every(function (a, l) {
        t.setStart(r, i), t.setEnd(r, i + a.length);
        var u = t.getBoundingClientRect();
        i += a.length;
        var c = u.x > o.x || u.y > o.y;
        return (o = u), l === 0 ? !0 : c;
      });
    return A.body.removeChild(e), s;
  },
  am = function () {
    return typeof new Image().crossOrigin < 'u';
  },
  lm = function () {
    return typeof new XMLHttpRequest().responseType == 'string';
  },
  um = function (A) {
    var e = new Image(),
      t = A.createElement('canvas'),
      r = t.getContext('2d');
    if (!r) return !1;
    e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      r.drawImage(e, 0, 0), t.toDataURL();
    } catch {
      return !1;
    }
    return !0;
  },
  SB = function (A) {
    return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
  },
  cm = function (A) {
    var e = A.createElement('canvas'),
      t = 100;
    (e.width = t), (e.height = t);
    var r = e.getContext('2d');
    if (!r) return Promise.reject(!1);
    (r.fillStyle = 'rgb(0, 255, 0)'), r.fillRect(0, 0, t, t);
    var n = new Image(),
      i = e.toDataURL();
    n.src = i;
    var o = ou(t, t, 0, 0, n);
    return (
      (r.fillStyle = 'red'),
      r.fillRect(0, 0, t, t),
      xB(o)
        .then(function (s) {
          r.drawImage(s, 0, 0);
          var a = r.getImageData(0, 0, t, t).data;
          (r.fillStyle = 'red'), r.fillRect(0, 0, t, t);
          var l = A.createElement('div');
          return (
            (l.style.backgroundImage = 'url(' + i + ')'),
            (l.style.height = t + 'px'),
            SB(a) ? xB(ou(t, t, 0, 0, l)) : Promise.reject(!1)
          );
        })
        .then(function (s) {
          return r.drawImage(s, 0, 0), SB(r.getImageData(0, 0, t, t).data);
        })
        .catch(function () {
          return !1;
        })
    );
  },
  ou = function (A, e, t, r, n) {
    var i = 'http://www.w3.org/2000/svg',
      o = document.createElementNS(i, 'svg'),
      s = document.createElementNS(i, 'foreignObject');
    return (
      o.setAttributeNS(null, 'width', A.toString()),
      o.setAttributeNS(null, 'height', e.toString()),
      s.setAttributeNS(null, 'width', '100%'),
      s.setAttributeNS(null, 'height', '100%'),
      s.setAttributeNS(null, 'x', t.toString()),
      s.setAttributeNS(null, 'y', r.toString()),
      s.setAttributeNS(null, 'externalResourcesRequired', 'true'),
      o.appendChild(s),
      s.appendChild(n),
      o
    );
  },
  xB = function (A) {
    return new Promise(function (e, t) {
      var r = new Image();
      (r.onload = function () {
        return e(r);
      }),
        (r.onerror = t),
        (r.src =
          'data:image/svg+xml;charset=utf-8,' +
          encodeURIComponent(new XMLSerializer().serializeToString(A)));
    });
  },
  NA = {
    get SUPPORT_RANGE_BOUNDS() {
      var A = om(document);
      return Object.defineProperty(NA, 'SUPPORT_RANGE_BOUNDS', { value: A }), A;
    },
    get SUPPORT_WORD_BREAKING() {
      var A = NA.SUPPORT_RANGE_BOUNDS && sm(document);
      return (
        Object.defineProperty(NA, 'SUPPORT_WORD_BREAKING', { value: A }), A
      );
    },
    get SUPPORT_SVG_DRAWING() {
      var A = um(document);
      return Object.defineProperty(NA, 'SUPPORT_SVG_DRAWING', { value: A }), A;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var A =
        typeof Array.from == 'function' && typeof window.fetch == 'function'
          ? cm(document)
          : Promise.resolve(!1);
      return (
        Object.defineProperty(NA, 'SUPPORT_FOREIGNOBJECT_DRAWING', {
          value: A,
        }),
        A
      );
    },
    get SUPPORT_CORS_IMAGES() {
      var A = am();
      return Object.defineProperty(NA, 'SUPPORT_CORS_IMAGES', { value: A }), A;
    },
    get SUPPORT_RESPONSE_TYPE() {
      var A = lm();
      return (
        Object.defineProperty(NA, 'SUPPORT_RESPONSE_TYPE', { value: A }), A
      );
    },
    get SUPPORT_CORS_XHR() {
      var A = 'withCredentials' in new XMLHttpRequest();
      return Object.defineProperty(NA, 'SUPPORT_CORS_XHR', { value: A }), A;
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
      var A = !!(typeof Intl < 'u' && Intl.Segmenter);
      return (
        Object.defineProperty(NA, 'SUPPORT_NATIVE_TEXT_SEGMENTATION', {
          value: A,
        }),
        A
      );
    },
  },
  kn = (function () {
    function A(e, t) {
      (this.text = e), (this.bounds = t);
    }
    return A;
  })(),
  fm = function (A, e, t, r) {
    var n = gm(e, t),
      i = [],
      o = 0;
    return (
      n.forEach(function (s) {
        if (t.textDecorationLine.length || s.trim().length > 0)
          if (NA.SUPPORT_RANGE_BOUNDS) {
            var a = LB(r, o, s.length).getClientRects();
            if (a.length > 1) {
              var l = Qc(s),
                u = 0;
              l.forEach(function (B) {
                i.push(
                  new kn(
                    B,
                    it.fromDOMRectList(
                      A,
                      LB(r, u + o, B.length).getClientRects()
                    )
                  )
                ),
                  (u += B.length);
              });
            } else i.push(new kn(s, it.fromDOMRectList(A, a)));
          } else {
            var c = r.splitText(s.length);
            i.push(new kn(s, Bm(A, r))), (r = c);
          }
        else NA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(s.length));
        o += s.length;
      }),
      i
    );
  },
  Bm = function (A, e) {
    var t = e.ownerDocument;
    if (t) {
      var r = t.createElement('html2canvaswrapper');
      r.appendChild(e.cloneNode(!0));
      var n = e.parentNode;
      if (n) {
        n.replaceChild(r, e);
        var i = Es(A, r);
        return r.firstChild && n.replaceChild(r.firstChild, r), i;
      }
    }
    return it.EMPTY;
  },
  LB = function (A, e, t) {
    var r = A.ownerDocument;
    if (!r) throw new Error('Node has no owner document');
    var n = r.createRange();
    return n.setStart(A, e), n.setEnd(A, e + t), n;
  },
  Qc = function (A) {
    if (NA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var e = new Intl.Segmenter(void 0, { granularity: 'grapheme' });
      return Array.from(e.segment(A)).map(function (t) {
        return t.segment;
      });
    }
    return im(A);
  },
  dm = function (A, e) {
    if (NA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var t = new Intl.Segmenter(void 0, { granularity: 'word' });
      return Array.from(t.segment(A)).map(function (r) {
        return r.segment;
      });
    }
    return pm(A, e);
  },
  gm = function (A, e) {
    return e.letterSpacing !== 0 ? Qc(A) : dm(A, e);
  },
  hm = [32, 160, 4961, 65792, 65793, 4153, 4241],
  pm = function (A, e) {
    for (
      var t = bC(A, {
          lineBreak: e.lineBreak,
          wordBreak:
            e.overflowWrap === 'break-word' ? 'break-word' : e.wordBreak,
        }),
        r = [],
        n,
        i = function () {
          if (n.value) {
            var o = n.value.slice(),
              s = Hs(o),
              a = '';
            s.forEach(function (l) {
              hm.indexOf(l) === -1
                ? (a += FA(l))
                : (a.length && r.push(a), r.push(FA(l)), (a = ''));
            }),
              a.length && r.push(a);
          }
        };
      !(n = t.next()).done;

    )
      i();
    return r;
  },
  wm = (function () {
    function A(e, t, r) {
      (this.text = Qm(t.data, r.textTransform)),
        (this.textBounds = fm(e, this.text, r, t));
    }
    return A;
  })(),
  Qm = function (A, e) {
    switch (e) {
      case 1:
        return A.toLowerCase();
      case 3:
        return A.replace(Cm, Um);
      case 2:
        return A.toUpperCase();
      default:
        return A;
    }
  },
  Cm = /(^|\s|:|-|\(|\))([a-z])/g,
  Um = function (A, e, t) {
    return A.length > 0 ? e + t.toUpperCase() : A;
  },
  ip = (function (A) {
    Re(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (
        (n.src = r.currentSrc || r.src),
        (n.intrinsicWidth = r.naturalWidth),
        (n.intrinsicHeight = r.naturalHeight),
        n.context.cache.addImage(n.src),
        n
      );
    }
    return e;
  })(Xe),
  op = (function (A) {
    Re(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (
        (n.canvas = r),
        (n.intrinsicWidth = r.width),
        (n.intrinsicHeight = r.height),
        n
      );
    }
    return e;
  })(Xe),
  sp = (function (A) {
    Re(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this,
        i = new XMLSerializer(),
        o = Es(t, r);
      return (
        r.setAttribute('width', o.width + 'px'),
        r.setAttribute('height', o.height + 'px'),
        (n.svg =
          'data:image/svg+xml,' + encodeURIComponent(i.serializeToString(r))),
        (n.intrinsicWidth = r.width.baseVal.value),
        (n.intrinsicHeight = r.height.baseVal.value),
        n.context.cache.addImage(n.svg),
        n
      );
    }
    return e;
  })(Xe),
  ap = (function (A) {
    Re(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (n.value = r.value), n;
    }
    return e;
  })(Xe),
  su = (function (A) {
    Re(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (
        (n.start = r.start),
        (n.reversed = typeof r.reversed == 'boolean' && r.reversed === !0),
        n
      );
    }
    return e;
  })(Xe),
  vm = [{ type: 15, flags: 0, unit: 'px', number: 3 }],
  Fm = [{ type: 16, flags: 0, number: 50 }],
  mm = function (A) {
    return A.width > A.height
      ? new it(A.left + (A.width - A.height) / 2, A.top, A.height, A.height)
      : A.width < A.height
      ? new it(A.left, A.top + (A.height - A.width) / 2, A.width, A.width)
      : A;
  },
  ym = function (A) {
    var e = A.type === Em ? new Array(A.value.length + 1).join('•') : A.value;
    return e.length === 0 ? A.placeholder || '' : e;
  },
  Zo = 'checkbox',
  qo = 'radio',
  Em = 'password',
  KB = 707406591,
  Cc = (function (A) {
    Re(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (
        ((n.type = r.type.toLowerCase()),
        (n.checked = r.checked),
        (n.value = ym(r)),
        (n.type === Zo || n.type === qo) &&
          ((n.styles.backgroundColor = 3739148031),
          (n.styles.borderTopColor =
            n.styles.borderRightColor =
            n.styles.borderBottomColor =
            n.styles.borderLeftColor =
              2779096575),
          (n.styles.borderTopWidth =
            n.styles.borderRightWidth =
            n.styles.borderBottomWidth =
            n.styles.borderLeftWidth =
              1),
          (n.styles.borderTopStyle =
            n.styles.borderRightStyle =
            n.styles.borderBottomStyle =
            n.styles.borderLeftStyle =
              1),
          (n.styles.backgroundClip = [0]),
          (n.styles.backgroundOrigin = [0]),
          (n.bounds = mm(n.bounds))),
        n.type)
      ) {
        case Zo:
          n.styles.borderTopRightRadius =
            n.styles.borderTopLeftRadius =
            n.styles.borderBottomRightRadius =
            n.styles.borderBottomLeftRadius =
              vm;
          break;
        case qo:
          n.styles.borderTopRightRadius =
            n.styles.borderTopLeftRadius =
            n.styles.borderBottomRightRadius =
            n.styles.borderBottomLeftRadius =
              Fm;
          break;
      }
      return n;
    }
    return e;
  })(Xe),
  lp = (function (A) {
    Re(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this,
        i = r.options[r.selectedIndex || 0];
      return (n.value = (i && i.text) || ''), n;
    }
    return e;
  })(Xe),
  up = (function (A) {
    Re(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (n.value = r.value), n;
    }
    return e;
  })(Xe),
  cp = (function (A) {
    Re(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      (n.src = r.src),
        (n.width = parseInt(r.width, 10) || 0),
        (n.height = parseInt(r.height, 10) || 0),
        (n.backgroundColor = n.styles.backgroundColor);
      try {
        if (
          r.contentWindow &&
          r.contentWindow.document &&
          r.contentWindow.document.documentElement
        ) {
          n.tree = Bp(t, r.contentWindow.document.documentElement);
          var i = r.contentWindow.document.documentElement
              ? Tn(
                  t,
                  getComputedStyle(r.contentWindow.document.documentElement)
                    .backgroundColor
                )
              : At.TRANSPARENT,
            o = r.contentWindow.document.body
              ? Tn(
                  t,
                  getComputedStyle(r.contentWindow.document.body)
                    .backgroundColor
                )
              : At.TRANSPARENT;
          n.backgroundColor = Lt(i)
            ? Lt(o)
              ? n.styles.backgroundColor
              : o
            : i;
        }
      } catch {}
      return n;
    }
    return e;
  })(Xe),
  Hm = ['OL', 'UL', 'MENU'],
  Qo = function (A, e, t, r) {
    for (var n = e.firstChild, i = void 0; n; n = i)
      if (((i = n.nextSibling), dp(n) && n.data.trim().length > 0))
        t.textNodes.push(new wm(A, n, t.styles));
      else if (Er(n))
        if (wp(n) && n.assignedNodes)
          n.assignedNodes().forEach(function (s) {
            return Qo(A, s, t, r);
          });
        else {
          var o = fp(A, n);
          o.styles.isVisible() &&
            (Im(n, o, r) ? (o.flags |= 4) : Sm(o.styles) && (o.flags |= 2),
            Hm.indexOf(n.tagName) !== -1 && (o.flags |= 8),
            t.elements.push(o),
            n.slot,
            n.shadowRoot
              ? Qo(A, n.shadowRoot, o, r)
              : !As(n) && !gp(n) && !es(n) && Qo(A, n, o, r));
        }
  },
  fp = function (A, e) {
    return lu(e)
      ? new ip(A, e)
      : hp(e)
      ? new op(A, e)
      : gp(e)
      ? new sp(A, e)
      : xm(e)
      ? new ap(A, e)
      : Lm(e)
      ? new su(A, e)
      : Km(e)
      ? new Cc(A, e)
      : es(e)
      ? new lp(A, e)
      : As(e)
      ? new up(A, e)
      : pp(e)
      ? new cp(A, e)
      : new Xe(A, e);
  },
  Bp = function (A, e) {
    var t = fp(A, e);
    return (t.flags |= 4), Qo(A, e, t, t), t;
  },
  Im = function (A, e, t) {
    return (
      e.styles.isPositionedWithZIndex() ||
      e.styles.opacity < 1 ||
      e.styles.isTransformed() ||
      (Uc(A) && t.styles.isTransparent())
    );
  },
  Sm = function (A) {
    return A.isPositioned() || A.isFloating();
  },
  dp = function (A) {
    return A.nodeType === Node.TEXT_NODE;
  },
  Er = function (A) {
    return A.nodeType === Node.ELEMENT_NODE;
  },
  au = function (A) {
    return Er(A) && typeof A.style < 'u' && !Co(A);
  },
  Co = function (A) {
    return typeof A.className == 'object';
  },
  xm = function (A) {
    return A.tagName === 'LI';
  },
  Lm = function (A) {
    return A.tagName === 'OL';
  },
  Km = function (A) {
    return A.tagName === 'INPUT';
  },
  Tm = function (A) {
    return A.tagName === 'HTML';
  },
  gp = function (A) {
    return A.tagName === 'svg';
  },
  Uc = function (A) {
    return A.tagName === 'BODY';
  },
  hp = function (A) {
    return A.tagName === 'CANVAS';
  },
  TB = function (A) {
    return A.tagName === 'VIDEO';
  },
  lu = function (A) {
    return A.tagName === 'IMG';
  },
  pp = function (A) {
    return A.tagName === 'IFRAME';
  },
  DB = function (A) {
    return A.tagName === 'STYLE';
  },
  Dm = function (A) {
    return A.tagName === 'SCRIPT';
  },
  As = function (A) {
    return A.tagName === 'TEXTAREA';
  },
  es = function (A) {
    return A.tagName === 'SELECT';
  },
  wp = function (A) {
    return A.tagName === 'SLOT';
  },
  kB = function (A) {
    return A.tagName.indexOf('-') > 0;
  },
  km = (function () {
    function A() {
      this.counters = {};
    }
    return (
      (A.prototype.getCounterValue = function (e) {
        var t = this.counters[e];
        return t && t.length ? t[t.length - 1] : 1;
      }),
      (A.prototype.getCounterValues = function (e) {
        var t = this.counters[e];
        return t || [];
      }),
      (A.prototype.pop = function (e) {
        var t = this;
        e.forEach(function (r) {
          return t.counters[r].pop();
        });
      }),
      (A.prototype.parse = function (e) {
        var t = this,
          r = e.counterIncrement,
          n = e.counterReset,
          i = !0;
        r !== null &&
          r.forEach(function (s) {
            var a = t.counters[s.counter];
            a &&
              s.increment !== 0 &&
              ((i = !1),
              a.length || a.push(1),
              (a[Math.max(0, a.length - 1)] += s.increment));
          });
        var o = [];
        return (
          i &&
            n.forEach(function (s) {
              var a = t.counters[s.counter];
              o.push(s.counter),
                a || (a = t.counters[s.counter] = []),
                a.push(s.reset);
            }),
          o
        );
      }),
      A
    );
  })(),
  OB = {
    integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: [
      'M',
      'CM',
      'D',
      'CD',
      'C',
      'XC',
      'L',
      'XL',
      'X',
      'IX',
      'V',
      'IV',
      'I',
    ],
  },
  RB = {
    integers: [
      9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400,
      300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2,
      1,
    ],
    values: [
      'Ք',
      'Փ',
      'Ւ',
      'Ց',
      'Ր',
      'Տ',
      'Վ',
      'Ս',
      'Ռ',
      'Ջ',
      'Պ',
      'Չ',
      'Ո',
      'Շ',
      'Ն',
      'Յ',
      'Մ',
      'Ճ',
      'Ղ',
      'Ձ',
      'Հ',
      'Կ',
      'Ծ',
      'Խ',
      'Լ',
      'Ի',
      'Ժ',
      'Թ',
      'Ը',
      'Է',
      'Զ',
      'Ե',
      'Դ',
      'Գ',
      'Բ',
      'Ա',
    ],
  },
  Om = {
    integers: [
      1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90,
      80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3,
      2, 1,
    ],
    values: [
      'י׳',
      'ט׳',
      'ח׳',
      'ז׳',
      'ו׳',
      'ה׳',
      'ד׳',
      'ג׳',
      'ב׳',
      'א׳',
      'ת',
      'ש',
      'ר',
      'ק',
      'צ',
      'פ',
      'ע',
      'ס',
      'נ',
      'מ',
      'ל',
      'כ',
      'יט',
      'יח',
      'יז',
      'טז',
      'טו',
      'י',
      'ט',
      'ח',
      'ז',
      'ו',
      'ה',
      'ד',
      'ג',
      'ב',
      'א',
    ],
  },
  Rm = {
    integers: [
      1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500,
      400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4,
      3, 2, 1,
    ],
    values: [
      'ჵ',
      'ჰ',
      'ჯ',
      'ჴ',
      'ხ',
      'ჭ',
      'წ',
      'ძ',
      'ც',
      'ჩ',
      'შ',
      'ყ',
      'ღ',
      'ქ',
      'ფ',
      'ჳ',
      'ტ',
      'ს',
      'რ',
      'ჟ',
      'პ',
      'ო',
      'ჲ',
      'ნ',
      'მ',
      'ლ',
      'კ',
      'ი',
      'თ',
      'ჱ',
      'ზ',
      'ვ',
      'ე',
      'დ',
      'გ',
      'ბ',
      'ა',
    ],
  },
  lr = function (A, e, t, r, n, i) {
    return A < e || A > t
      ? ni(A, n, i.length > 0)
      : r.integers.reduce(function (o, s, a) {
          for (; A >= s; ) (A -= s), (o += r.values[a]);
          return o;
        }, '') + i;
  },
  Qp = function (A, e, t, r) {
    var n = '';
    do t || A--, (n = r(A) + n), (A /= e);
    while (A * e >= e);
    return n;
  },
  vA = function (A, e, t, r, n) {
    var i = t - e + 1;
    return (
      (A < 0 ? '-' : '') +
      (Qp(Math.abs(A), i, r, function (o) {
        return FA(Math.floor(o % i) + e);
      }) +
        n)
    );
  },
  _t = function (A, e, t) {
    t === void 0 && (t = '. ');
    var r = e.length;
    return (
      Qp(Math.abs(A), r, !1, function (n) {
        return e[Math.floor(n % r)];
      }) + t
    );
  },
  fr = 1 << 0,
  lt = 1 << 1,
  ut = 1 << 2,
  vn = 1 << 3,
  Je = function (A, e, t, r, n, i) {
    if (A < -9999 || A > 9999) return ni(A, 4, n.length > 0);
    var o = Math.abs(A),
      s = n;
    if (o === 0) return e[0] + s;
    for (var a = 0; o > 0 && a <= 4; a++) {
      var l = o % 10;
      l === 0 && IA(i, fr) && s !== ''
        ? (s = e[l] + s)
        : l > 1 ||
          (l === 1 && a === 0) ||
          (l === 1 && a === 1 && IA(i, lt)) ||
          (l === 1 && a === 1 && IA(i, ut) && A > 100) ||
          (l === 1 && a > 1 && IA(i, vn))
        ? (s = e[l] + (a > 0 ? t[a - 1] : '') + s)
        : l === 1 && a > 0 && (s = t[a - 1] + s),
        (o = Math.floor(o / 10));
    }
    return (A < 0 ? r : '') + s;
  },
  MB = '十百千萬',
  NB = '拾佰仟萬',
  _B = 'マイナス',
  Ra = '마이너스',
  ni = function (A, e, t) {
    var r = t ? '. ' : '',
      n = t ? '、' : '',
      i = t ? ', ' : '',
      o = t ? ' ' : '';
    switch (e) {
      case 0:
        return '•' + o;
      case 1:
        return '◦' + o;
      case 2:
        return '◾' + o;
      case 5:
        var s = vA(A, 48, 57, !0, r);
        return s.length < 4 ? '0' + s : s;
      case 4:
        return _t(A, '〇一二三四五六七八九', n);
      case 6:
        return lr(A, 1, 3999, OB, 3, r).toLowerCase();
      case 7:
        return lr(A, 1, 3999, OB, 3, r);
      case 8:
        return vA(A, 945, 969, !1, r);
      case 9:
        return vA(A, 97, 122, !1, r);
      case 10:
        return vA(A, 65, 90, !1, r);
      case 11:
        return vA(A, 1632, 1641, !0, r);
      case 12:
      case 49:
        return lr(A, 1, 9999, RB, 3, r);
      case 35:
        return lr(A, 1, 9999, RB, 3, r).toLowerCase();
      case 13:
        return vA(A, 2534, 2543, !0, r);
      case 14:
      case 30:
        return vA(A, 6112, 6121, !0, r);
      case 15:
        return _t(A, '子丑寅卯辰巳午未申酉戌亥', n);
      case 16:
        return _t(A, '甲乙丙丁戊己庚辛壬癸', n);
      case 17:
      case 48:
        return Je(A, '零一二三四五六七八九', MB, '負', n, lt | ut | vn);
      case 47:
        return Je(A, '零壹貳參肆伍陸柒捌玖', NB, '負', n, fr | lt | ut | vn);
      case 42:
        return Je(A, '零一二三四五六七八九', MB, '负', n, lt | ut | vn);
      case 41:
        return Je(A, '零壹贰叁肆伍陆柒捌玖', NB, '负', n, fr | lt | ut | vn);
      case 26:
        return Je(A, '〇一二三四五六七八九', '十百千万', _B, n, 0);
      case 25:
        return Je(A, '零壱弐参四伍六七八九', '拾百千万', _B, n, fr | lt | ut);
      case 31:
        return Je(A, '영일이삼사오육칠팔구', '십백천만', Ra, i, fr | lt | ut);
      case 33:
        return Je(A, '零一二三四五六七八九', '十百千萬', Ra, i, 0);
      case 32:
        return Je(A, '零壹貳參四五六七八九', '拾百千', Ra, i, fr | lt | ut);
      case 18:
        return vA(A, 2406, 2415, !0, r);
      case 20:
        return lr(A, 1, 19999, Rm, 3, r);
      case 21:
        return vA(A, 2790, 2799, !0, r);
      case 22:
        return vA(A, 2662, 2671, !0, r);
      case 22:
        return lr(A, 1, 10999, Om, 3, r);
      case 23:
        return _t(
          A,
          'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん'
        );
      case 24:
        return _t(
          A,
          'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす'
        );
      case 27:
        return vA(A, 3302, 3311, !0, r);
      case 28:
        return _t(
          A,
          'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン',
          n
        );
      case 29:
        return _t(
          A,
          'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス',
          n
        );
      case 34:
        return vA(A, 3792, 3801, !0, r);
      case 37:
        return vA(A, 6160, 6169, !0, r);
      case 38:
        return vA(A, 4160, 4169, !0, r);
      case 39:
        return vA(A, 2918, 2927, !0, r);
      case 40:
        return vA(A, 1776, 1785, !0, r);
      case 43:
        return vA(A, 3046, 3055, !0, r);
      case 44:
        return vA(A, 3174, 3183, !0, r);
      case 45:
        return vA(A, 3664, 3673, !0, r);
      case 46:
        return vA(A, 3872, 3881, !0, r);
      case 3:
      default:
        return vA(A, 48, 57, !0, r);
    }
  },
  Cp = 'data-html2canvas-ignore',
  PB = (function () {
    function A(e, t, r) {
      if (
        ((this.context = e),
        (this.options = r),
        (this.scrolledElements = []),
        (this.referenceElement = t),
        (this.counters = new km()),
        (this.quoteDepth = 0),
        !t.ownerDocument)
      )
        throw new Error('Cloned element does not have an owner document');
      this.documentElement = this.cloneNode(
        t.ownerDocument.documentElement,
        !1
      );
    }
    return (
      (A.prototype.toIFrame = function (e, t) {
        var r = this,
          n = Mm(e, t);
        if (!n.contentWindow)
          return Promise.reject('Unable to find iframe window');
        var i = e.defaultView.pageXOffset,
          o = e.defaultView.pageYOffset,
          s = n.contentWindow,
          a = s.document,
          l = Pm(n).then(function () {
            return $A(r, void 0, void 0, function () {
              var u, c;
              return WA(this, function (B) {
                switch (B.label) {
                  case 0:
                    return (
                      this.scrolledElements.forEach(Xm),
                      s &&
                        (s.scrollTo(t.left, t.top),
                        /(iPad|iPhone|iPod)/g.test(navigator.userAgent) &&
                          (s.scrollY !== t.top || s.scrollX !== t.left) &&
                          (this.context.logger.warn(
                            'Unable to restore scroll position for cloned document'
                          ),
                          (this.context.windowBounds =
                            this.context.windowBounds.add(
                              s.scrollX - t.left,
                              s.scrollY - t.top,
                              0,
                              0
                            )))),
                      (u = this.options.onclone),
                      (c = this.clonedReferenceElement),
                      typeof c > 'u'
                        ? [
                            2,
                            Promise.reject(
                              'Error finding the ' +
                                this.referenceElement.nodeName +
                                ' in the cloned document'
                            ),
                          ]
                        : a.fonts && a.fonts.ready
                        ? [4, a.fonts.ready]
                        : [3, 2]
                    );
                  case 1:
                    B.sent(), (B.label = 2);
                  case 2:
                    return /(AppleWebKit)/g.test(navigator.userAgent)
                      ? [4, _m(a)]
                      : [3, 4];
                  case 3:
                    B.sent(), (B.label = 4);
                  case 4:
                    return typeof u == 'function'
                      ? [
                          2,
                          Promise.resolve()
                            .then(function () {
                              return u(a, c);
                            })
                            .then(function () {
                              return n;
                            }),
                        ]
                      : [2, n];
                }
              });
            });
          });
        return (
          a.open(),
          a.write(Gm(document.doctype) + '<html></html>'),
          bm(this.referenceElement.ownerDocument, i, o),
          a.replaceChild(a.adoptNode(this.documentElement), a.documentElement),
          a.close(),
          l
        );
      }),
      (A.prototype.createElementClone = function (e) {
        if (iu(e, 2)) debugger;
        if (hp(e)) return this.createCanvasClone(e);
        if (TB(e)) return this.createVideoClone(e);
        if (DB(e)) return this.createStyleClone(e);
        var t = e.cloneNode(!1);
        return (
          lu(t) &&
            (lu(e) &&
              e.currentSrc &&
              e.currentSrc !== e.src &&
              ((t.src = e.currentSrc), (t.srcset = '')),
            t.loading === 'lazy' && (t.loading = 'eager')),
          kB(t) ? this.createCustomElementClone(t) : t
        );
      }),
      (A.prototype.createCustomElementClone = function (e) {
        var t = document.createElement('html2canvascustomelement');
        return Ma(e.style, t), t;
      }),
      (A.prototype.createStyleClone = function (e) {
        try {
          var t = e.sheet;
          if (t && t.cssRules) {
            var r = [].slice.call(t.cssRules, 0).reduce(function (i, o) {
                return o && typeof o.cssText == 'string' ? i + o.cssText : i;
              }, ''),
              n = e.cloneNode(!1);
            return (n.textContent = r), n;
          }
        } catch (i) {
          if (
            (this.context.logger.error('Unable to access cssRules property', i),
            i.name !== 'SecurityError')
          )
            throw i;
        }
        return e.cloneNode(!1);
      }),
      (A.prototype.createCanvasClone = function (e) {
        var t;
        if (this.options.inlineImages && e.ownerDocument) {
          var r = e.ownerDocument.createElement('img');
          try {
            return (r.src = e.toDataURL()), r;
          } catch {
            this.context.logger.info(
              'Unable to inline canvas contents, canvas is tainted',
              e
            );
          }
        }
        var n = e.cloneNode(!1);
        try {
          (n.width = e.width), (n.height = e.height);
          var i = e.getContext('2d'),
            o = n.getContext('2d');
          if (o)
            if (!this.options.allowTaint && i)
              o.putImageData(i.getImageData(0, 0, e.width, e.height), 0, 0);
            else {
              var s =
                (t = e.getContext('webgl2')) !== null && t !== void 0
                  ? t
                  : e.getContext('webgl');
              if (s) {
                var a = s.getContextAttributes();
                (a == null ? void 0 : a.preserveDrawingBuffer) === !1 &&
                  this.context.logger.warn(
                    'Unable to clone WebGL context as it has preserveDrawingBuffer=false',
                    e
                  );
              }
              o.drawImage(e, 0, 0);
            }
          return n;
        } catch {
          this.context.logger.info(
            'Unable to clone canvas as it is tainted',
            e
          );
        }
        return n;
      }),
      (A.prototype.createVideoClone = function (e) {
        var t = e.ownerDocument.createElement('canvas');
        (t.width = e.offsetWidth), (t.height = e.offsetHeight);
        var r = t.getContext('2d');
        try {
          return (
            r &&
              (r.drawImage(e, 0, 0, t.width, t.height),
              this.options.allowTaint ||
                r.getImageData(0, 0, t.width, t.height)),
            t
          );
        } catch {
          this.context.logger.info('Unable to clone video as it is tainted', e);
        }
        var n = e.ownerDocument.createElement('canvas');
        return (n.width = e.offsetWidth), (n.height = e.offsetHeight), n;
      }),
      (A.prototype.appendChildNode = function (e, t, r) {
        (!Er(t) ||
          (!Dm(t) &&
            !t.hasAttribute(Cp) &&
            (typeof this.options.ignoreElements != 'function' ||
              !this.options.ignoreElements(t)))) &&
          (!this.options.copyStyles || !Er(t) || !DB(t)) &&
          e.appendChild(this.cloneNode(t, r));
      }),
      (A.prototype.cloneChildNodes = function (e, t, r) {
        for (
          var n = this,
            i = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild;
          i;
          i = i.nextSibling
        )
          if (Er(i) && wp(i) && typeof i.assignedNodes == 'function') {
            var o = i.assignedNodes();
            o.length &&
              o.forEach(function (s) {
                return n.appendChildNode(t, s, r);
              });
          } else this.appendChildNode(t, i, r);
      }),
      (A.prototype.cloneNode = function (e, t) {
        if (dp(e)) return document.createTextNode(e.data);
        if (!e.ownerDocument) return e.cloneNode(!1);
        var r = e.ownerDocument.defaultView;
        if (r && Er(e) && (au(e) || Co(e))) {
          var n = this.createElementClone(e);
          n.style.transitionProperty = 'none';
          var i = r.getComputedStyle(e),
            o = r.getComputedStyle(e, ':before'),
            s = r.getComputedStyle(e, ':after');
          this.referenceElement === e &&
            au(n) &&
            (this.clonedReferenceElement = n),
            Uc(n) && zm(n);
          var a = this.counters.parse(new wB(this.context, i)),
            l = this.resolvePseudoContent(e, n, o, On.BEFORE);
          kB(e) && (t = !0),
            TB(e) || this.cloneChildNodes(e, n, t),
            l && n.insertBefore(l, n.firstChild);
          var u = this.resolvePseudoContent(e, n, s, On.AFTER);
          return (
            u && n.appendChild(u),
            this.counters.pop(a),
            ((i && (this.options.copyStyles || Co(e)) && !pp(e)) || t) &&
              Ma(i, n),
            (e.scrollTop !== 0 || e.scrollLeft !== 0) &&
              this.scrolledElements.push([n, e.scrollLeft, e.scrollTop]),
            (As(e) || es(e)) && (As(n) || es(n)) && (n.value = e.value),
            n
          );
        }
        return e.cloneNode(!1);
      }),
      (A.prototype.resolvePseudoContent = function (e, t, r, n) {
        var i = this;
        if (r) {
          var o = r.content,
            s = t.ownerDocument;
          if (
            !(
              !s ||
              !o ||
              o === 'none' ||
              o === '-moz-alt-content' ||
              r.display === 'none'
            )
          ) {
            this.counters.parse(new wB(this.context, r));
            var a = new xF(this.context, r),
              l = s.createElement('html2canvaspseudoelement');
            Ma(r, l),
              a.content.forEach(function (c) {
                if (c.type === 0) l.appendChild(s.createTextNode(c.value));
                else if (c.type === 22) {
                  var B = s.createElement('img');
                  (B.src = c.value), (B.style.opacity = '1'), l.appendChild(B);
                } else if (c.type === 18) {
                  if (c.name === 'attr') {
                    var w = c.values.filter(sA);
                    w.length &&
                      l.appendChild(
                        s.createTextNode(e.getAttribute(w[0].value) || '')
                      );
                  } else if (c.name === 'counter') {
                    var g = c.values.filter(Gr),
                      p = g[0],
                      F = g[1];
                    if (p && sA(p)) {
                      var d = i.counters.getCounterValue(p.value),
                        f = F && sA(F) ? nu.parse(i.context, F.value) : 3;
                      l.appendChild(s.createTextNode(ni(d, f, !1)));
                    }
                  } else if (c.name === 'counters') {
                    var h = c.values.filter(Gr),
                      p = h[0],
                      Q = h[1],
                      F = h[2];
                    if (p && sA(p)) {
                      var v = i.counters.getCounterValues(p.value),
                        U = F && sA(F) ? nu.parse(i.context, F.value) : 3,
                        y = Q && Q.type === 0 ? Q.value : '',
                        m = v
                          .map(function (Y) {
                            return ni(Y, U, !1);
                          })
                          .join(y);
                      l.appendChild(s.createTextNode(m));
                    }
                  }
                } else if (c.type === 20)
                  switch (c.value) {
                    case 'open-quote':
                      l.appendChild(
                        s.createTextNode(pB(a.quotes, i.quoteDepth++, !0))
                      );
                      break;
                    case 'close-quote':
                      l.appendChild(
                        s.createTextNode(pB(a.quotes, --i.quoteDepth, !1))
                      );
                      break;
                    default:
                      l.appendChild(s.createTextNode(c.value));
                  }
              }),
              (l.className = uu + ' ' + cu);
            var u = n === On.BEFORE ? ' ' + uu : ' ' + cu;
            return Co(t) ? (t.className.baseValue += u) : (t.className += u), l;
          }
        }
      }),
      (A.destroy = function (e) {
        return e.parentNode ? (e.parentNode.removeChild(e), !0) : !1;
      }),
      A
    );
  })(),
  On;
(function (A) {
  (A[(A.BEFORE = 0)] = 'BEFORE'), (A[(A.AFTER = 1)] = 'AFTER');
})(On || (On = {}));
var Mm = function (A, e) {
    var t = A.createElement('iframe');
    return (
      (t.className = 'html2canvas-container'),
      (t.style.visibility = 'hidden'),
      (t.style.position = 'fixed'),
      (t.style.left = '-10000px'),
      (t.style.top = '0px'),
      (t.style.border = '0'),
      (t.width = e.width.toString()),
      (t.height = e.height.toString()),
      (t.scrolling = 'no'),
      t.setAttribute(Cp, 'true'),
      A.body.appendChild(t),
      t
    );
  },
  Nm = function (A) {
    return new Promise(function (e) {
      if (A.complete) {
        e();
        return;
      }
      if (!A.src) {
        e();
        return;
      }
      (A.onload = e), (A.onerror = e);
    });
  },
  _m = function (A) {
    return Promise.all([].slice.call(A.images, 0).map(Nm));
  },
  Pm = function (A) {
    return new Promise(function (e, t) {
      var r = A.contentWindow;
      if (!r) return t('No window assigned for iframe');
      var n = r.document;
      r.onload = A.onload = function () {
        r.onload = A.onload = null;
        var i = setInterval(function () {
          n.body.childNodes.length > 0 &&
            n.readyState === 'complete' &&
            (clearInterval(i), e(A));
        }, 50);
      };
    });
  },
  Vm = ['all', 'd', 'content'],
  Ma = function (A, e) {
    for (var t = A.length - 1; t >= 0; t--) {
      var r = A.item(t);
      Vm.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
    }
    return e;
  },
  Gm = function (A) {
    var e = '';
    return (
      A &&
        ((e += '<!DOCTYPE '),
        A.name && (e += A.name),
        A.internalSubset && (e += A.internalSubset),
        A.publicId && (e += '"' + A.publicId + '"'),
        A.systemId && (e += '"' + A.systemId + '"'),
        (e += '>')),
      e
    );
  },
  bm = function (A, e, t) {
    A &&
      A.defaultView &&
      (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) &&
      A.defaultView.scrollTo(e, t);
  },
  Xm = function (A) {
    var e = A[0],
      t = A[1],
      r = A[2];
    (e.scrollLeft = t), (e.scrollTop = r);
  },
  Wm = ':before',
  Jm = ':after',
  uu = '___html2canvas___pseudoelement_before',
  cu = '___html2canvas___pseudoelement_after',
  VB = `{
    content: "" !important;
    display: none !important;
}`,
  zm = function (A) {
    Ym(
      A,
      '.' +
        uu +
        Wm +
        VB +
        `
         .` +
        cu +
        Jm +
        VB
    );
  },
  Ym = function (A, e) {
    var t = A.ownerDocument;
    if (t) {
      var r = t.createElement('style');
      (r.textContent = e), A.appendChild(r);
    }
  },
  Up = (function () {
    function A() {}
    return (
      (A.getOrigin = function (e) {
        var t = A._link;
        return t
          ? ((t.href = e), (t.href = t.href), t.protocol + t.hostname + t.port)
          : 'about:blank';
      }),
      (A.isSameOrigin = function (e) {
        return A.getOrigin(e) === A._origin;
      }),
      (A.setContext = function (e) {
        (A._link = e.document.createElement('a')),
          (A._origin = A.getOrigin(e.location.href));
      }),
      (A._origin = 'about:blank'),
      A
    );
  })(),
  $m = (function () {
    function A(e, t) {
      (this.context = e), (this._options = t), (this._cache = {});
    }
    return (
      (A.prototype.addImage = function (e) {
        var t = Promise.resolve();
        return (
          this.has(e) ||
            ((_a(e) || Ay(e)) &&
              (this._cache[e] = this.loadImage(e)).catch(function () {})),
          t
        );
      }),
      (A.prototype.match = function (e) {
        return this._cache[e];
      }),
      (A.prototype.loadImage = function (e) {
        return $A(this, void 0, void 0, function () {
          var t,
            r,
            n,
            i,
            o = this;
          return WA(this, function (s) {
            switch (s.label) {
              case 0:
                return (
                  (t = Up.isSameOrigin(e)),
                  (r =
                    !Na(e) &&
                    this._options.useCORS === !0 &&
                    NA.SUPPORT_CORS_IMAGES &&
                    !t),
                  (n =
                    !Na(e) &&
                    !t &&
                    !_a(e) &&
                    typeof this._options.proxy == 'string' &&
                    NA.SUPPORT_CORS_XHR &&
                    !r),
                  !t &&
                  this._options.allowTaint === !1 &&
                  !Na(e) &&
                  !_a(e) &&
                  !n &&
                  !r
                    ? [2]
                    : ((i = e), n ? [4, this.proxy(i)] : [3, 2])
                );
              case 1:
                (i = s.sent()), (s.label = 2);
              case 2:
                return (
                  this.context.logger.debug(
                    'Added image ' + e.substring(0, 256)
                  ),
                  [
                    4,
                    new Promise(function (a, l) {
                      var u = new Image();
                      (u.onload = function () {
                        return a(u);
                      }),
                        (u.onerror = l),
                        (ey(i) || r) && (u.crossOrigin = 'anonymous'),
                        (u.src = i),
                        u.complete === !0 &&
                          setTimeout(function () {
                            return a(u);
                          }, 500),
                        o._options.imageTimeout > 0 &&
                          setTimeout(function () {
                            return l(
                              'Timed out (' +
                                o._options.imageTimeout +
                                'ms) loading image'
                            );
                          }, o._options.imageTimeout);
                    }),
                  ]
                );
              case 3:
                return [2, s.sent()];
            }
          });
        });
      }),
      (A.prototype.has = function (e) {
        return typeof this._cache[e] < 'u';
      }),
      (A.prototype.keys = function () {
        return Promise.resolve(Object.keys(this._cache));
      }),
      (A.prototype.proxy = function (e) {
        var t = this,
          r = this._options.proxy;
        if (!r) throw new Error('No proxy defined');
        var n = e.substring(0, 256);
        return new Promise(function (i, o) {
          var s = NA.SUPPORT_RESPONSE_TYPE ? 'blob' : 'text',
            a = new XMLHttpRequest();
          (a.onload = function () {
            if (a.status === 200)
              if (s === 'text') i(a.response);
              else {
                var c = new FileReader();
                c.addEventListener(
                  'load',
                  function () {
                    return i(c.result);
                  },
                  !1
                ),
                  c.addEventListener(
                    'error',
                    function (B) {
                      return o(B);
                    },
                    !1
                  ),
                  c.readAsDataURL(a.response);
              }
            else
              o(
                'Failed to proxy resource ' +
                  n +
                  ' with status code ' +
                  a.status
              );
          }),
            (a.onerror = o);
          var l = r.indexOf('?') > -1 ? '&' : '?';
          if (
            (a.open(
              'GET',
              '' + r + l + 'url=' + encodeURIComponent(e) + '&responseType=' + s
            ),
            s !== 'text' && a instanceof XMLHttpRequest && (a.responseType = s),
            t._options.imageTimeout)
          ) {
            var u = t._options.imageTimeout;
            (a.timeout = u),
              (a.ontimeout = function () {
                return o('Timed out (' + u + 'ms) proxying ' + n);
              });
          }
          a.send();
        });
      }),
      A
    );
  })(),
  jm = /^data:image\/svg\+xml/i,
  Zm = /^data:image\/.*;base64,/i,
  qm = /^data:image\/.*/i,
  Ay = function (A) {
    return NA.SUPPORT_SVG_DRAWING || !ty(A);
  },
  Na = function (A) {
    return qm.test(A);
  },
  ey = function (A) {
    return Zm.test(A);
  },
  _a = function (A) {
    return A.substr(0, 4) === 'blob';
  },
  ty = function (A) {
    return A.substr(-3).toLowerCase() === 'svg' || jm.test(A);
  },
  D = (function () {
    function A(e, t) {
      (this.type = 0), (this.x = e), (this.y = t);
    }
    return (
      (A.prototype.add = function (e, t) {
        return new A(this.x + e, this.y + t);
      }),
      A
    );
  })(),
  ur = function (A, e, t) {
    return new D(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
  },
  Zi = (function () {
    function A(e, t, r, n) {
      (this.type = 1),
        (this.start = e),
        (this.startControl = t),
        (this.endControl = r),
        (this.end = n);
    }
    return (
      (A.prototype.subdivide = function (e, t) {
        var r = ur(this.start, this.startControl, e),
          n = ur(this.startControl, this.endControl, e),
          i = ur(this.endControl, this.end, e),
          o = ur(r, n, e),
          s = ur(n, i, e),
          a = ur(o, s, e);
        return t ? new A(this.start, r, o, a) : new A(a, s, i, this.end);
      }),
      (A.prototype.add = function (e, t) {
        return new A(
          this.start.add(e, t),
          this.startControl.add(e, t),
          this.endControl.add(e, t),
          this.end.add(e, t)
        );
      }),
      (A.prototype.reverse = function () {
        return new A(this.end, this.endControl, this.startControl, this.start);
      }),
      A
    );
  })(),
  Ce = function (A) {
    return A.type === 1;
  },
  ry = (function () {
    function A(e) {
      var t = e.styles,
        r = e.bounds,
        n = Cn(t.borderTopLeftRadius, r.width, r.height),
        i = n[0],
        o = n[1],
        s = Cn(t.borderTopRightRadius, r.width, r.height),
        a = s[0],
        l = s[1],
        u = Cn(t.borderBottomRightRadius, r.width, r.height),
        c = u[0],
        B = u[1],
        w = Cn(t.borderBottomLeftRadius, r.width, r.height),
        g = w[0],
        p = w[1],
        F = [];
      F.push((i + a) / r.width),
        F.push((g + c) / r.width),
        F.push((o + p) / r.height),
        F.push((l + B) / r.height);
      var d = Math.max.apply(Math, F);
      d > 1 &&
        ((i /= d),
        (o /= d),
        (a /= d),
        (l /= d),
        (c /= d),
        (B /= d),
        (g /= d),
        (p /= d));
      var f = r.width - a,
        h = r.height - B,
        Q = r.width - c,
        v = r.height - p,
        U = t.borderTopWidth,
        y = t.borderRightWidth,
        m = t.borderBottomWidth,
        x = t.borderLeftWidth,
        R = aA(t.paddingTop, e.bounds.width),
        Y = aA(t.paddingRight, e.bounds.width),
        $ = aA(t.paddingBottom, e.bounds.width),
        P = aA(t.paddingLeft, e.bounds.width);
      (this.topLeftBorderDoubleOuterBox =
        i > 0 || o > 0
          ? dA(r.left + x / 3, r.top + U / 3, i - x / 3, o - U / 3, rA.TOP_LEFT)
          : new D(r.left + x / 3, r.top + U / 3)),
        (this.topRightBorderDoubleOuterBox =
          i > 0 || o > 0
            ? dA(r.left + f, r.top + U / 3, a - y / 3, l - U / 3, rA.TOP_RIGHT)
            : new D(r.left + r.width - y / 3, r.top + U / 3)),
        (this.bottomRightBorderDoubleOuterBox =
          c > 0 || B > 0
            ? dA(r.left + Q, r.top + h, c - y / 3, B - m / 3, rA.BOTTOM_RIGHT)
            : new D(r.left + r.width - y / 3, r.top + r.height - m / 3)),
        (this.bottomLeftBorderDoubleOuterBox =
          g > 0 || p > 0
            ? dA(
                r.left + x / 3,
                r.top + v,
                g - x / 3,
                p - m / 3,
                rA.BOTTOM_LEFT
              )
            : new D(r.left + x / 3, r.top + r.height - m / 3)),
        (this.topLeftBorderDoubleInnerBox =
          i > 0 || o > 0
            ? dA(
                r.left + (x * 2) / 3,
                r.top + (U * 2) / 3,
                i - (x * 2) / 3,
                o - (U * 2) / 3,
                rA.TOP_LEFT
              )
            : new D(r.left + (x * 2) / 3, r.top + (U * 2) / 3)),
        (this.topRightBorderDoubleInnerBox =
          i > 0 || o > 0
            ? dA(
                r.left + f,
                r.top + (U * 2) / 3,
                a - (y * 2) / 3,
                l - (U * 2) / 3,
                rA.TOP_RIGHT
              )
            : new D(r.left + r.width - (y * 2) / 3, r.top + (U * 2) / 3)),
        (this.bottomRightBorderDoubleInnerBox =
          c > 0 || B > 0
            ? dA(
                r.left + Q,
                r.top + h,
                c - (y * 2) / 3,
                B - (m * 2) / 3,
                rA.BOTTOM_RIGHT
              )
            : new D(
                r.left + r.width - (y * 2) / 3,
                r.top + r.height - (m * 2) / 3
              )),
        (this.bottomLeftBorderDoubleInnerBox =
          g > 0 || p > 0
            ? dA(
                r.left + (x * 2) / 3,
                r.top + v,
                g - (x * 2) / 3,
                p - (m * 2) / 3,
                rA.BOTTOM_LEFT
              )
            : new D(r.left + (x * 2) / 3, r.top + r.height - (m * 2) / 3)),
        (this.topLeftBorderStroke =
          i > 0 || o > 0
            ? dA(
                r.left + x / 2,
                r.top + U / 2,
                i - x / 2,
                o - U / 2,
                rA.TOP_LEFT
              )
            : new D(r.left + x / 2, r.top + U / 2)),
        (this.topRightBorderStroke =
          i > 0 || o > 0
            ? dA(r.left + f, r.top + U / 2, a - y / 2, l - U / 2, rA.TOP_RIGHT)
            : new D(r.left + r.width - y / 2, r.top + U / 2)),
        (this.bottomRightBorderStroke =
          c > 0 || B > 0
            ? dA(r.left + Q, r.top + h, c - y / 2, B - m / 2, rA.BOTTOM_RIGHT)
            : new D(r.left + r.width - y / 2, r.top + r.height - m / 2)),
        (this.bottomLeftBorderStroke =
          g > 0 || p > 0
            ? dA(
                r.left + x / 2,
                r.top + v,
                g - x / 2,
                p - m / 2,
                rA.BOTTOM_LEFT
              )
            : new D(r.left + x / 2, r.top + r.height - m / 2)),
        (this.topLeftBorderBox =
          i > 0 || o > 0
            ? dA(r.left, r.top, i, o, rA.TOP_LEFT)
            : new D(r.left, r.top)),
        (this.topRightBorderBox =
          a > 0 || l > 0
            ? dA(r.left + f, r.top, a, l, rA.TOP_RIGHT)
            : new D(r.left + r.width, r.top)),
        (this.bottomRightBorderBox =
          c > 0 || B > 0
            ? dA(r.left + Q, r.top + h, c, B, rA.BOTTOM_RIGHT)
            : new D(r.left + r.width, r.top + r.height)),
        (this.bottomLeftBorderBox =
          g > 0 || p > 0
            ? dA(r.left, r.top + v, g, p, rA.BOTTOM_LEFT)
            : new D(r.left, r.top + r.height)),
        (this.topLeftPaddingBox =
          i > 0 || o > 0
            ? dA(
                r.left + x,
                r.top + U,
                Math.max(0, i - x),
                Math.max(0, o - U),
                rA.TOP_LEFT
              )
            : new D(r.left + x, r.top + U)),
        (this.topRightPaddingBox =
          a > 0 || l > 0
            ? dA(
                r.left + Math.min(f, r.width - y),
                r.top + U,
                f > r.width + y ? 0 : Math.max(0, a - y),
                Math.max(0, l - U),
                rA.TOP_RIGHT
              )
            : new D(r.left + r.width - y, r.top + U)),
        (this.bottomRightPaddingBox =
          c > 0 || B > 0
            ? dA(
                r.left + Math.min(Q, r.width - x),
                r.top + Math.min(h, r.height - m),
                Math.max(0, c - y),
                Math.max(0, B - m),
                rA.BOTTOM_RIGHT
              )
            : new D(r.left + r.width - y, r.top + r.height - m)),
        (this.bottomLeftPaddingBox =
          g > 0 || p > 0
            ? dA(
                r.left + x,
                r.top + Math.min(v, r.height - m),
                Math.max(0, g - x),
                Math.max(0, p - m),
                rA.BOTTOM_LEFT
              )
            : new D(r.left + x, r.top + r.height - m)),
        (this.topLeftContentBox =
          i > 0 || o > 0
            ? dA(
                r.left + x + P,
                r.top + U + R,
                Math.max(0, i - (x + P)),
                Math.max(0, o - (U + R)),
                rA.TOP_LEFT
              )
            : new D(r.left + x + P, r.top + U + R)),
        (this.topRightContentBox =
          a > 0 || l > 0
            ? dA(
                r.left + Math.min(f, r.width + x + P),
                r.top + U + R,
                f > r.width + x + P ? 0 : a - x + P,
                l - (U + R),
                rA.TOP_RIGHT
              )
            : new D(r.left + r.width - (y + Y), r.top + U + R)),
        (this.bottomRightContentBox =
          c > 0 || B > 0
            ? dA(
                r.left + Math.min(Q, r.width - (x + P)),
                r.top + Math.min(h, r.height + U + R),
                Math.max(0, c - (y + Y)),
                B - (m + $),
                rA.BOTTOM_RIGHT
              )
            : new D(r.left + r.width - (y + Y), r.top + r.height - (m + $))),
        (this.bottomLeftContentBox =
          g > 0 || p > 0
            ? dA(
                r.left + x + P,
                r.top + v,
                Math.max(0, g - (x + P)),
                p - (m + $),
                rA.BOTTOM_LEFT
              )
            : new D(r.left + x + P, r.top + r.height - (m + $)));
    }
    return A;
  })(),
  rA;
(function (A) {
  (A[(A.TOP_LEFT = 0)] = 'TOP_LEFT'),
    (A[(A.TOP_RIGHT = 1)] = 'TOP_RIGHT'),
    (A[(A.BOTTOM_RIGHT = 2)] = 'BOTTOM_RIGHT'),
    (A[(A.BOTTOM_LEFT = 3)] = 'BOTTOM_LEFT');
})(rA || (rA = {}));
var dA = function (A, e, t, r, n) {
    var i = 4 * ((Math.sqrt(2) - 1) / 3),
      o = t * i,
      s = r * i,
      a = A + t,
      l = e + r;
    switch (n) {
      case rA.TOP_LEFT:
        return new Zi(
          new D(A, l),
          new D(A, l - s),
          new D(a - o, e),
          new D(a, e)
        );
      case rA.TOP_RIGHT:
        return new Zi(
          new D(A, e),
          new D(A + o, e),
          new D(a, l - s),
          new D(a, l)
        );
      case rA.BOTTOM_RIGHT:
        return new Zi(
          new D(a, e),
          new D(a, e + s),
          new D(A + o, l),
          new D(A, l)
        );
      case rA.BOTTOM_LEFT:
      default:
        return new Zi(
          new D(a, l),
          new D(a - o, l),
          new D(A, e + s),
          new D(A, e)
        );
    }
  },
  ts = function (A) {
    return [
      A.topLeftBorderBox,
      A.topRightBorderBox,
      A.bottomRightBorderBox,
      A.bottomLeftBorderBox,
    ];
  },
  ny = function (A) {
    return [
      A.topLeftContentBox,
      A.topRightContentBox,
      A.bottomRightContentBox,
      A.bottomLeftContentBox,
    ];
  },
  rs = function (A) {
    return [
      A.topLeftPaddingBox,
      A.topRightPaddingBox,
      A.bottomRightPaddingBox,
      A.bottomLeftPaddingBox,
    ];
  },
  iy = (function () {
    function A(e, t, r) {
      (this.offsetX = e),
        (this.offsetY = t),
        (this.matrix = r),
        (this.type = 0),
        (this.target = 6);
    }
    return A;
  })(),
  qi = (function () {
    function A(e, t) {
      (this.path = e), (this.target = t), (this.type = 1);
    }
    return A;
  })(),
  oy = (function () {
    function A(e) {
      (this.opacity = e), (this.type = 2), (this.target = 6);
    }
    return A;
  })(),
  sy = function (A) {
    return A.type === 0;
  },
  vp = function (A) {
    return A.type === 1;
  },
  ay = function (A) {
    return A.type === 2;
  },
  GB = function (A, e) {
    return A.length === e.length
      ? A.some(function (t, r) {
          return t === e[r];
        })
      : !1;
  },
  ly = function (A, e, t, r, n) {
    return A.map(function (i, o) {
      switch (o) {
        case 0:
          return i.add(e, t);
        case 1:
          return i.add(e + r, t);
        case 2:
          return i.add(e + r, t + n);
        case 3:
          return i.add(e, t + n);
      }
      return i;
    });
  },
  Fp = (function () {
    function A(e) {
      (this.element = e),
        (this.inlineLevel = []),
        (this.nonInlineLevel = []),
        (this.negativeZIndex = []),
        (this.zeroOrAutoZIndexOrTransformedOrOpacity = []),
        (this.positiveZIndex = []),
        (this.nonPositionedFloats = []),
        (this.nonPositionedInlineLevel = []);
    }
    return A;
  })(),
  mp = (function () {
    function A(e, t) {
      if (
        ((this.container = e),
        (this.parent = t),
        (this.effects = []),
        (this.curves = new ry(this.container)),
        this.container.styles.opacity < 1 &&
          this.effects.push(new oy(this.container.styles.opacity)),
        this.container.styles.transform !== null)
      ) {
        var r =
            this.container.bounds.left +
            this.container.styles.transformOrigin[0].number,
          n =
            this.container.bounds.top +
            this.container.styles.transformOrigin[1].number,
          i = this.container.styles.transform;
        this.effects.push(new iy(r, n, i));
      }
      if (this.container.styles.overflowX !== 0) {
        var o = ts(this.curves),
          s = rs(this.curves);
        GB(o, s)
          ? this.effects.push(new qi(o, 6))
          : (this.effects.push(new qi(o, 2)), this.effects.push(new qi(s, 4)));
      }
    }
    return (
      (A.prototype.getEffects = function (e) {
        for (
          var t = [2, 3].indexOf(this.container.styles.position) === -1,
            r = this.parent,
            n = this.effects.slice(0);
          r;

        ) {
          var i = r.effects.filter(function (a) {
            return !vp(a);
          });
          if (t || r.container.styles.position !== 0 || !r.parent) {
            if (
              (n.unshift.apply(n, i),
              (t = [2, 3].indexOf(r.container.styles.position) === -1),
              r.container.styles.overflowX !== 0)
            ) {
              var o = ts(r.curves),
                s = rs(r.curves);
              GB(o, s) || n.unshift(new qi(s, 6));
            }
          } else n.unshift.apply(n, i);
          r = r.parent;
        }
        return n.filter(function (a) {
          return IA(a.target, e);
        });
      }),
      A
    );
  })(),
  fu = function (A, e, t, r) {
    A.container.elements.forEach(function (n) {
      var i = IA(n.flags, 4),
        o = IA(n.flags, 2),
        s = new mp(n, A);
      IA(n.styles.display, 2048) && r.push(s);
      var a = IA(n.flags, 8) ? [] : r;
      if (i || o) {
        var l = i || n.styles.isPositioned() ? t : e,
          u = new Fp(s);
        if (
          n.styles.isPositioned() ||
          n.styles.opacity < 1 ||
          n.styles.isTransformed()
        ) {
          var c = n.styles.zIndex.order;
          if (c < 0) {
            var B = 0;
            l.negativeZIndex.some(function (g, p) {
              return c > g.element.container.styles.zIndex.order
                ? ((B = p), !1)
                : B > 0;
            }),
              l.negativeZIndex.splice(B, 0, u);
          } else if (c > 0) {
            var w = 0;
            l.positiveZIndex.some(function (g, p) {
              return c >= g.element.container.styles.zIndex.order
                ? ((w = p + 1), !1)
                : w > 0;
            }),
              l.positiveZIndex.splice(w, 0, u);
          } else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(u);
        } else
          n.styles.isFloating()
            ? l.nonPositionedFloats.push(u)
            : l.nonPositionedInlineLevel.push(u);
        fu(s, u, i ? u : t, a);
      } else n.styles.isInlineLevel() ? e.inlineLevel.push(s) : e.nonInlineLevel.push(s), fu(s, e, t, a);
      IA(n.flags, 8) && yp(n, a);
    });
  },
  yp = function (A, e) {
    for (
      var t = A instanceof su ? A.start : 1,
        r = A instanceof su ? A.reversed : !1,
        n = 0;
      n < e.length;
      n++
    ) {
      var i = e[n];
      i.container instanceof ap &&
        typeof i.container.value == 'number' &&
        i.container.value !== 0 &&
        (t = i.container.value),
        (i.listValue = ni(t, i.container.styles.listStyleType, !0)),
        (t += r ? -1 : 1);
    }
  },
  uy = function (A) {
    var e = new mp(A, null),
      t = new Fp(e),
      r = [];
    return fu(e, t, t, r), yp(e.container, r), t;
  },
  bB = function (A, e) {
    switch (e) {
      case 0:
        return me(
          A.topLeftBorderBox,
          A.topLeftPaddingBox,
          A.topRightBorderBox,
          A.topRightPaddingBox
        );
      case 1:
        return me(
          A.topRightBorderBox,
          A.topRightPaddingBox,
          A.bottomRightBorderBox,
          A.bottomRightPaddingBox
        );
      case 2:
        return me(
          A.bottomRightBorderBox,
          A.bottomRightPaddingBox,
          A.bottomLeftBorderBox,
          A.bottomLeftPaddingBox
        );
      case 3:
      default:
        return me(
          A.bottomLeftBorderBox,
          A.bottomLeftPaddingBox,
          A.topLeftBorderBox,
          A.topLeftPaddingBox
        );
    }
  },
  cy = function (A, e) {
    switch (e) {
      case 0:
        return me(
          A.topLeftBorderBox,
          A.topLeftBorderDoubleOuterBox,
          A.topRightBorderBox,
          A.topRightBorderDoubleOuterBox
        );
      case 1:
        return me(
          A.topRightBorderBox,
          A.topRightBorderDoubleOuterBox,
          A.bottomRightBorderBox,
          A.bottomRightBorderDoubleOuterBox
        );
      case 2:
        return me(
          A.bottomRightBorderBox,
          A.bottomRightBorderDoubleOuterBox,
          A.bottomLeftBorderBox,
          A.bottomLeftBorderDoubleOuterBox
        );
      case 3:
      default:
        return me(
          A.bottomLeftBorderBox,
          A.bottomLeftBorderDoubleOuterBox,
          A.topLeftBorderBox,
          A.topLeftBorderDoubleOuterBox
        );
    }
  },
  fy = function (A, e) {
    switch (e) {
      case 0:
        return me(
          A.topLeftBorderDoubleInnerBox,
          A.topLeftPaddingBox,
          A.topRightBorderDoubleInnerBox,
          A.topRightPaddingBox
        );
      case 1:
        return me(
          A.topRightBorderDoubleInnerBox,
          A.topRightPaddingBox,
          A.bottomRightBorderDoubleInnerBox,
          A.bottomRightPaddingBox
        );
      case 2:
        return me(
          A.bottomRightBorderDoubleInnerBox,
          A.bottomRightPaddingBox,
          A.bottomLeftBorderDoubleInnerBox,
          A.bottomLeftPaddingBox
        );
      case 3:
      default:
        return me(
          A.bottomLeftBorderDoubleInnerBox,
          A.bottomLeftPaddingBox,
          A.topLeftBorderDoubleInnerBox,
          A.topLeftPaddingBox
        );
    }
  },
  By = function (A, e) {
    switch (e) {
      case 0:
        return Ao(A.topLeftBorderStroke, A.topRightBorderStroke);
      case 1:
        return Ao(A.topRightBorderStroke, A.bottomRightBorderStroke);
      case 2:
        return Ao(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
      case 3:
      default:
        return Ao(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
    }
  },
  Ao = function (A, e) {
    var t = [];
    return (
      Ce(A) ? t.push(A.subdivide(0.5, !1)) : t.push(A),
      Ce(e) ? t.push(e.subdivide(0.5, !0)) : t.push(e),
      t
    );
  },
  me = function (A, e, t, r) {
    var n = [];
    return (
      Ce(A) ? n.push(A.subdivide(0.5, !1)) : n.push(A),
      Ce(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t),
      Ce(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r),
      Ce(e) ? n.push(e.subdivide(0.5, !1).reverse()) : n.push(e),
      n
    );
  },
  Ep = function (A) {
    var e = A.bounds,
      t = A.styles;
    return e.add(
      t.borderLeftWidth,
      t.borderTopWidth,
      -(t.borderRightWidth + t.borderLeftWidth),
      -(t.borderTopWidth + t.borderBottomWidth)
    );
  },
  ns = function (A) {
    var e = A.styles,
      t = A.bounds,
      r = aA(e.paddingLeft, t.width),
      n = aA(e.paddingRight, t.width),
      i = aA(e.paddingTop, t.width),
      o = aA(e.paddingBottom, t.width);
    return t.add(
      r + e.borderLeftWidth,
      i + e.borderTopWidth,
      -(e.borderRightWidth + e.borderLeftWidth + r + n),
      -(e.borderTopWidth + e.borderBottomWidth + i + o)
    );
  },
  dy = function (A, e) {
    return A === 0 ? e.bounds : A === 2 ? ns(e) : Ep(e);
  },
  gy = function (A, e) {
    return A === 0 ? e.bounds : A === 2 ? ns(e) : Ep(e);
  },
  Pa = function (A, e, t) {
    var r = dy(Br(A.styles.backgroundOrigin, e), A),
      n = gy(Br(A.styles.backgroundClip, e), A),
      i = hy(Br(A.styles.backgroundSize, e), t, r),
      o = i[0],
      s = i[1],
      a = Cn(Br(A.styles.backgroundPosition, e), r.width - o, r.height - s),
      l = py(Br(A.styles.backgroundRepeat, e), a, i, r, n),
      u = Math.round(r.left + a[0]),
      c = Math.round(r.top + a[1]);
    return [l, u, c, o, s];
  },
  cr = function (A) {
    return sA(A) && A.value === kr.AUTO;
  },
  eo = function (A) {
    return typeof A == 'number';
  },
  hy = function (A, e, t) {
    var r = e[0],
      n = e[1],
      i = e[2],
      o = A[0],
      s = A[1];
    if (!o) return [0, 0];
    if (yA(o) && s && yA(s)) return [aA(o, t.width), aA(s, t.height)];
    var a = eo(i);
    if (sA(o) && (o.value === kr.CONTAIN || o.value === kr.COVER)) {
      if (eo(i)) {
        var l = t.width / t.height;
        return l < i != (o.value === kr.COVER)
          ? [t.width, t.width / i]
          : [t.height * i, t.height];
      }
      return [t.width, t.height];
    }
    var u = eo(r),
      c = eo(n),
      B = u || c;
    if (cr(o) && (!s || cr(s))) {
      if (u && c) return [r, n];
      if (!a && !B) return [t.width, t.height];
      if (B && a) {
        var w = u ? r : n * i,
          g = c ? n : r / i;
        return [w, g];
      }
      var p = u ? r : t.width,
        F = c ? n : t.height;
      return [p, F];
    }
    if (a) {
      var d = 0,
        f = 0;
      return (
        yA(o) ? (d = aA(o, t.width)) : yA(s) && (f = aA(s, t.height)),
        cr(o) ? (d = f * i) : (!s || cr(s)) && (f = d / i),
        [d, f]
      );
    }
    var h = null,
      Q = null;
    if (
      (yA(o) ? (h = aA(o, t.width)) : s && yA(s) && (Q = aA(s, t.height)),
      h !== null && (!s || cr(s)) && (Q = u && c ? (h / r) * n : t.height),
      Q !== null && cr(o) && (h = u && c ? (Q / n) * r : t.width),
      h !== null && Q !== null)
    )
      return [h, Q];
    throw new Error('Unable to calculate background-size for element');
  },
  Br = function (A, e) {
    var t = A[e];
    return typeof t > 'u' ? A[0] : t;
  },
  py = function (A, e, t, r, n) {
    var i = e[0],
      o = e[1],
      s = t[0],
      a = t[1];
    switch (A) {
      case 2:
        return [
          new D(Math.round(r.left), Math.round(r.top + o)),
          new D(Math.round(r.left + r.width), Math.round(r.top + o)),
          new D(Math.round(r.left + r.width), Math.round(a + r.top + o)),
          new D(Math.round(r.left), Math.round(a + r.top + o)),
        ];
      case 3:
        return [
          new D(Math.round(r.left + i), Math.round(r.top)),
          new D(Math.round(r.left + i + s), Math.round(r.top)),
          new D(Math.round(r.left + i + s), Math.round(r.height + r.top)),
          new D(Math.round(r.left + i), Math.round(r.height + r.top)),
        ];
      case 1:
        return [
          new D(Math.round(r.left + i), Math.round(r.top + o)),
          new D(Math.round(r.left + i + s), Math.round(r.top + o)),
          new D(Math.round(r.left + i + s), Math.round(r.top + o + a)),
          new D(Math.round(r.left + i), Math.round(r.top + o + a)),
        ];
      default:
        return [
          new D(Math.round(n.left), Math.round(n.top)),
          new D(Math.round(n.left + n.width), Math.round(n.top)),
          new D(Math.round(n.left + n.width), Math.round(n.height + n.top)),
          new D(Math.round(n.left), Math.round(n.height + n.top)),
        ];
    }
  },
  wy =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  XB = 'Hidden Text',
  Qy = (function () {
    function A(e) {
      (this._data = {}), (this._document = e);
    }
    return (
      (A.prototype.parseMetrics = function (e, t) {
        var r = this._document.createElement('div'),
          n = this._document.createElement('img'),
          i = this._document.createElement('span'),
          o = this._document.body;
        (r.style.visibility = 'hidden'),
          (r.style.fontFamily = e),
          (r.style.fontSize = t),
          (r.style.margin = '0'),
          (r.style.padding = '0'),
          (r.style.whiteSpace = 'nowrap'),
          o.appendChild(r),
          (n.src = wy),
          (n.width = 1),
          (n.height = 1),
          (n.style.margin = '0'),
          (n.style.padding = '0'),
          (n.style.verticalAlign = 'baseline'),
          (i.style.fontFamily = e),
          (i.style.fontSize = t),
          (i.style.margin = '0'),
          (i.style.padding = '0'),
          i.appendChild(this._document.createTextNode(XB)),
          r.appendChild(i),
          r.appendChild(n);
        var s = n.offsetTop - i.offsetTop + 2;
        r.removeChild(i),
          r.appendChild(this._document.createTextNode(XB)),
          (r.style.lineHeight = 'normal'),
          (n.style.verticalAlign = 'super');
        var a = n.offsetTop - r.offsetTop + 2;
        return o.removeChild(r), { baseline: s, middle: a };
      }),
      (A.prototype.getMetrics = function (e, t) {
        var r = e + ' ' + t;
        return (
          typeof this._data[r] > 'u' &&
            (this._data[r] = this.parseMetrics(e, t)),
          this._data[r]
        );
      }),
      A
    );
  })(),
  Hp = (function () {
    function A(e, t) {
      (this.context = e), (this.options = t);
    }
    return A;
  })(),
  Cy = 1e4,
  Uy = (function (A) {
    Re(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (
        (n._activeEffects = []),
        (n.canvas = r.canvas ? r.canvas : document.createElement('canvas')),
        (n.ctx = n.canvas.getContext('2d')),
        r.canvas ||
          ((n.canvas.width = Math.floor(r.width * r.scale)),
          (n.canvas.height = Math.floor(r.height * r.scale)),
          (n.canvas.style.width = r.width + 'px'),
          (n.canvas.style.height = r.height + 'px')),
        (n.fontMetrics = new Qy(document)),
        n.ctx.scale(n.options.scale, n.options.scale),
        n.ctx.translate(-r.x, -r.y),
        (n.ctx.textBaseline = 'bottom'),
        (n._activeEffects = []),
        n.context.logger.debug(
          'Canvas renderer initialized (' +
            r.width +
            'x' +
            r.height +
            ') with scale ' +
            r.scale
        ),
        n
      );
    }
    return (
      (e.prototype.applyEffects = function (t) {
        for (var r = this; this._activeEffects.length; ) this.popEffect();
        t.forEach(function (n) {
          return r.applyEffect(n);
        });
      }),
      (e.prototype.applyEffect = function (t) {
        this.ctx.save(),
          ay(t) && (this.ctx.globalAlpha = t.opacity),
          sy(t) &&
            (this.ctx.translate(t.offsetX, t.offsetY),
            this.ctx.transform(
              t.matrix[0],
              t.matrix[1],
              t.matrix[2],
              t.matrix[3],
              t.matrix[4],
              t.matrix[5]
            ),
            this.ctx.translate(-t.offsetX, -t.offsetY)),
          vp(t) && (this.path(t.path), this.ctx.clip()),
          this._activeEffects.push(t);
      }),
      (e.prototype.popEffect = function () {
        this._activeEffects.pop(), this.ctx.restore();
      }),
      (e.prototype.renderStack = function (t) {
        return $A(this, void 0, void 0, function () {
          var r;
          return WA(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (r = t.element.container.styles),
                  r.isVisible() ? [4, this.renderStackContent(t)] : [3, 2]
                );
              case 1:
                n.sent(), (n.label = 2);
              case 2:
                return [2];
            }
          });
        });
      }),
      (e.prototype.renderNode = function (t) {
        return $A(this, void 0, void 0, function () {
          return WA(this, function (r) {
            switch (r.label) {
              case 0:
                if (IA(t.container.flags, 16)) debugger;
                return t.container.styles.isVisible()
                  ? [4, this.renderNodeBackgroundAndBorders(t)]
                  : [3, 3];
              case 1:
                return r.sent(), [4, this.renderNodeContent(t)];
              case 2:
                r.sent(), (r.label = 3);
              case 3:
                return [2];
            }
          });
        });
      }),
      (e.prototype.renderTextWithLetterSpacing = function (t, r, n) {
        var i = this;
        if (r === 0) this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n);
        else {
          var o = Qc(t.text);
          o.reduce(function (s, a) {
            return (
              i.ctx.fillText(a, s, t.bounds.top + n),
              s + i.ctx.measureText(a).width
            );
          }, t.bounds.left);
        }
      }),
      (e.prototype.createFontStyle = function (t) {
        var r = t.fontVariant
            .filter(function (o) {
              return o === 'normal' || o === 'small-caps';
            })
            .join(''),
          n = Ey(t.fontFamily).join(', '),
          i = Bi(t.fontSize)
            ? '' + t.fontSize.number + t.fontSize.unit
            : t.fontSize.number + 'px';
        return [[t.fontStyle, r, t.fontWeight, i, n].join(' '), n, i];
      }),
      (e.prototype.renderTextNode = function (t, r) {
        return $A(this, void 0, void 0, function () {
          var n,
            i,
            o,
            s,
            a,
            l,
            u,
            c,
            B = this;
          return WA(this, function (w) {
            return (
              (n = this.createFontStyle(r)),
              (i = n[0]),
              (o = n[1]),
              (s = n[2]),
              (this.ctx.font = i),
              (this.ctx.direction = r.direction === 1 ? 'rtl' : 'ltr'),
              (this.ctx.textAlign = 'left'),
              (this.ctx.textBaseline = 'alphabetic'),
              (a = this.fontMetrics.getMetrics(o, s)),
              (l = a.baseline),
              (u = a.middle),
              (c = r.paintOrder),
              t.textBounds.forEach(function (g) {
                c.forEach(function (p) {
                  switch (p) {
                    case 0:
                      (B.ctx.fillStyle = xA(r.color)),
                        B.renderTextWithLetterSpacing(g, r.letterSpacing, l);
                      var F = r.textShadow;
                      F.length &&
                        g.text.trim().length &&
                        (F.slice(0)
                          .reverse()
                          .forEach(function (d) {
                            (B.ctx.shadowColor = xA(d.color)),
                              (B.ctx.shadowOffsetX =
                                d.offsetX.number * B.options.scale),
                              (B.ctx.shadowOffsetY =
                                d.offsetY.number * B.options.scale),
                              (B.ctx.shadowBlur = d.blur.number),
                              B.renderTextWithLetterSpacing(
                                g,
                                r.letterSpacing,
                                l
                              );
                          }),
                        (B.ctx.shadowColor = ''),
                        (B.ctx.shadowOffsetX = 0),
                        (B.ctx.shadowOffsetY = 0),
                        (B.ctx.shadowBlur = 0)),
                        r.textDecorationLine.length &&
                          ((B.ctx.fillStyle = xA(
                            r.textDecorationColor || r.color
                          )),
                          r.textDecorationLine.forEach(function (d) {
                            switch (d) {
                              case 1:
                                B.ctx.fillRect(
                                  g.bounds.left,
                                  Math.round(g.bounds.top + l),
                                  g.bounds.width,
                                  1
                                );
                                break;
                              case 2:
                                B.ctx.fillRect(
                                  g.bounds.left,
                                  Math.round(g.bounds.top),
                                  g.bounds.width,
                                  1
                                );
                                break;
                              case 3:
                                B.ctx.fillRect(
                                  g.bounds.left,
                                  Math.ceil(g.bounds.top + u),
                                  g.bounds.width,
                                  1
                                );
                                break;
                            }
                          }));
                      break;
                    case 1:
                      r.webkitTextStrokeWidth &&
                        g.text.trim().length &&
                        ((B.ctx.strokeStyle = xA(r.webkitTextStrokeColor)),
                        (B.ctx.lineWidth = r.webkitTextStrokeWidth),
                        (B.ctx.lineJoin = window.chrome ? 'miter' : 'round'),
                        B.ctx.strokeText(
                          g.text,
                          g.bounds.left,
                          g.bounds.top + l
                        )),
                        (B.ctx.strokeStyle = ''),
                        (B.ctx.lineWidth = 0),
                        (B.ctx.lineJoin = 'miter');
                      break;
                  }
                });
              }),
              [2]
            );
          });
        });
      }),
      (e.prototype.renderReplacedElement = function (t, r, n) {
        if (n && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
          var i = ns(t),
            o = rs(r);
          this.path(o),
            this.ctx.save(),
            this.ctx.clip(),
            this.ctx.drawImage(
              n,
              0,
              0,
              t.intrinsicWidth,
              t.intrinsicHeight,
              i.left,
              i.top,
              i.width,
              i.height
            ),
            this.ctx.restore();
        }
      }),
      (e.prototype.renderNodeContent = function (t) {
        return $A(this, void 0, void 0, function () {
          var r,
            n,
            i,
            o,
            s,
            a,
            f,
            f,
            l,
            u,
            c,
            B,
            Q,
            w,
            g,
            v,
            p,
            F,
            d,
            f,
            h,
            Q,
            v;
          return WA(this, function (U) {
            switch (U.label) {
              case 0:
                this.applyEffects(t.getEffects(4)),
                  (r = t.container),
                  (n = t.curves),
                  (i = r.styles),
                  (o = 0),
                  (s = r.textNodes),
                  (U.label = 1);
              case 1:
                return o < s.length
                  ? ((a = s[o]), [4, this.renderTextNode(a, i)])
                  : [3, 4];
              case 2:
                U.sent(), (U.label = 3);
              case 3:
                return o++, [3, 1];
              case 4:
                if (!(r instanceof ip)) return [3, 8];
                U.label = 5;
              case 5:
                return (
                  U.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)]
                );
              case 6:
                return (
                  (f = U.sent()), this.renderReplacedElement(r, n, f), [3, 8]
                );
              case 7:
                return (
                  U.sent(),
                  this.context.logger.error('Error loading image ' + r.src),
                  [3, 8]
                );
              case 8:
                if (
                  (r instanceof op &&
                    this.renderReplacedElement(r, n, r.canvas),
                  !(r instanceof sp))
                )
                  return [3, 12];
                U.label = 9;
              case 9:
                return (
                  U.trys.push([9, 11, , 12]),
                  [4, this.context.cache.match(r.svg)]
                );
              case 10:
                return (
                  (f = U.sent()), this.renderReplacedElement(r, n, f), [3, 12]
                );
              case 11:
                return (
                  U.sent(),
                  this.context.logger.error(
                    'Error loading svg ' + r.svg.substring(0, 255)
                  ),
                  [3, 12]
                );
              case 12:
                return r instanceof cp && r.tree
                  ? ((l = new e(this.context, {
                      scale: this.options.scale,
                      backgroundColor: r.backgroundColor,
                      x: 0,
                      y: 0,
                      width: r.width,
                      height: r.height,
                    })),
                    [4, l.render(r.tree)])
                  : [3, 14];
              case 13:
                (u = U.sent()),
                  r.width &&
                    r.height &&
                    this.ctx.drawImage(
                      u,
                      0,
                      0,
                      r.width,
                      r.height,
                      r.bounds.left,
                      r.bounds.top,
                      r.bounds.width,
                      r.bounds.height
                    ),
                  (U.label = 14);
              case 14:
                if (
                  (r instanceof Cc &&
                    ((c = Math.min(r.bounds.width, r.bounds.height)),
                    r.type === Zo
                      ? r.checked &&
                        (this.ctx.save(),
                        this.path([
                          new D(
                            r.bounds.left + c * 0.39363,
                            r.bounds.top + c * 0.79
                          ),
                          new D(
                            r.bounds.left + c * 0.16,
                            r.bounds.top + c * 0.5549
                          ),
                          new D(
                            r.bounds.left + c * 0.27347,
                            r.bounds.top + c * 0.44071
                          ),
                          new D(
                            r.bounds.left + c * 0.39694,
                            r.bounds.top + c * 0.5649
                          ),
                          new D(
                            r.bounds.left + c * 0.72983,
                            r.bounds.top + c * 0.23
                          ),
                          new D(
                            r.bounds.left + c * 0.84,
                            r.bounds.top + c * 0.34085
                          ),
                          new D(
                            r.bounds.left + c * 0.39363,
                            r.bounds.top + c * 0.79
                          ),
                        ]),
                        (this.ctx.fillStyle = xA(KB)),
                        this.ctx.fill(),
                        this.ctx.restore())
                      : r.type === qo &&
                        r.checked &&
                        (this.ctx.save(),
                        this.ctx.beginPath(),
                        this.ctx.arc(
                          r.bounds.left + c / 2,
                          r.bounds.top + c / 2,
                          c / 4,
                          0,
                          Math.PI * 2,
                          !0
                        ),
                        (this.ctx.fillStyle = xA(KB)),
                        this.ctx.fill(),
                        this.ctx.restore())),
                  vy(r) && r.value.length)
                ) {
                  switch (
                    ((B = this.createFontStyle(i)),
                    (Q = B[0]),
                    (w = B[1]),
                    (g = this.fontMetrics.getMetrics(Q, w).baseline),
                    (this.ctx.font = Q),
                    (this.ctx.fillStyle = xA(i.color)),
                    (this.ctx.textBaseline = 'alphabetic'),
                    (this.ctx.textAlign = my(r.styles.textAlign)),
                    (v = ns(r)),
                    (p = 0),
                    r.styles.textAlign)
                  ) {
                    case 1:
                      p += v.width / 2;
                      break;
                    case 2:
                      p += v.width;
                      break;
                  }
                  (F = v.add(p, 0, 0, -v.height / 2 + 1)),
                    this.ctx.save(),
                    this.path([
                      new D(v.left, v.top),
                      new D(v.left + v.width, v.top),
                      new D(v.left + v.width, v.top + v.height),
                      new D(v.left, v.top + v.height),
                    ]),
                    this.ctx.clip(),
                    this.renderTextWithLetterSpacing(
                      new kn(r.value, F),
                      i.letterSpacing,
                      g
                    ),
                    this.ctx.restore(),
                    (this.ctx.textBaseline = 'alphabetic'),
                    (this.ctx.textAlign = 'left');
                }
                if (!IA(r.styles.display, 2048)) return [3, 20];
                if (r.styles.listStyleImage === null) return [3, 19];
                if (((d = r.styles.listStyleImage), d.type !== 0))
                  return [3, 18];
                (f = void 0), (h = d.url), (U.label = 15);
              case 15:
                return (
                  U.trys.push([15, 17, , 18]), [4, this.context.cache.match(h)]
                );
              case 16:
                return (
                  (f = U.sent()),
                  this.ctx.drawImage(
                    f,
                    r.bounds.left - (f.width + 10),
                    r.bounds.top
                  ),
                  [3, 18]
                );
              case 17:
                return (
                  U.sent(),
                  this.context.logger.error(
                    'Error loading list-style-image ' + h
                  ),
                  [3, 18]
                );
              case 18:
                return [3, 20];
              case 19:
                t.listValue &&
                  r.styles.listStyleType !== -1 &&
                  ((Q = this.createFontStyle(i)[0]),
                  (this.ctx.font = Q),
                  (this.ctx.fillStyle = xA(i.color)),
                  (this.ctx.textBaseline = 'middle'),
                  (this.ctx.textAlign = 'right'),
                  (v = new it(
                    r.bounds.left,
                    r.bounds.top + aA(r.styles.paddingTop, r.bounds.width),
                    r.bounds.width,
                    gB(i.lineHeight, i.fontSize.number) / 2 + 1
                  )),
                  this.renderTextWithLetterSpacing(
                    new kn(t.listValue, v),
                    i.letterSpacing,
                    gB(i.lineHeight, i.fontSize.number) / 2 + 2
                  ),
                  (this.ctx.textBaseline = 'bottom'),
                  (this.ctx.textAlign = 'left')),
                  (U.label = 20);
              case 20:
                return [2];
            }
          });
        });
      }),
      (e.prototype.renderStackContent = function (t) {
        return $A(this, void 0, void 0, function () {
          var r, n, d, i, o, d, s, a, d, l, u, d, c, B, d, w, g, d, p, F, d;
          return WA(this, function (f) {
            switch (f.label) {
              case 0:
                if (IA(t.element.container.flags, 16)) debugger;
                return [4, this.renderNodeBackgroundAndBorders(t.element)];
              case 1:
                f.sent(), (r = 0), (n = t.negativeZIndex), (f.label = 2);
              case 2:
                return r < n.length
                  ? ((d = n[r]), [4, this.renderStack(d)])
                  : [3, 5];
              case 3:
                f.sent(), (f.label = 4);
              case 4:
                return r++, [3, 2];
              case 5:
                return [4, this.renderNodeContent(t.element)];
              case 6:
                f.sent(), (i = 0), (o = t.nonInlineLevel), (f.label = 7);
              case 7:
                return i < o.length
                  ? ((d = o[i]), [4, this.renderNode(d)])
                  : [3, 10];
              case 8:
                f.sent(), (f.label = 9);
              case 9:
                return i++, [3, 7];
              case 10:
                (s = 0), (a = t.nonPositionedFloats), (f.label = 11);
              case 11:
                return s < a.length
                  ? ((d = a[s]), [4, this.renderStack(d)])
                  : [3, 14];
              case 12:
                f.sent(), (f.label = 13);
              case 13:
                return s++, [3, 11];
              case 14:
                (l = 0), (u = t.nonPositionedInlineLevel), (f.label = 15);
              case 15:
                return l < u.length
                  ? ((d = u[l]), [4, this.renderStack(d)])
                  : [3, 18];
              case 16:
                f.sent(), (f.label = 17);
              case 17:
                return l++, [3, 15];
              case 18:
                (c = 0), (B = t.inlineLevel), (f.label = 19);
              case 19:
                return c < B.length
                  ? ((d = B[c]), [4, this.renderNode(d)])
                  : [3, 22];
              case 20:
                f.sent(), (f.label = 21);
              case 21:
                return c++, [3, 19];
              case 22:
                (w = 0),
                  (g = t.zeroOrAutoZIndexOrTransformedOrOpacity),
                  (f.label = 23);
              case 23:
                return w < g.length
                  ? ((d = g[w]), [4, this.renderStack(d)])
                  : [3, 26];
              case 24:
                f.sent(), (f.label = 25);
              case 25:
                return w++, [3, 23];
              case 26:
                (p = 0), (F = t.positiveZIndex), (f.label = 27);
              case 27:
                return p < F.length
                  ? ((d = F[p]), [4, this.renderStack(d)])
                  : [3, 30];
              case 28:
                f.sent(), (f.label = 29);
              case 29:
                return p++, [3, 27];
              case 30:
                return [2];
            }
          });
        });
      }),
      (e.prototype.mask = function (t) {
        this.ctx.beginPath(),
          this.ctx.moveTo(0, 0),
          this.ctx.lineTo(this.canvas.width, 0),
          this.ctx.lineTo(this.canvas.width, this.canvas.height),
          this.ctx.lineTo(0, this.canvas.height),
          this.ctx.lineTo(0, 0),
          this.formatPath(t.slice(0).reverse()),
          this.ctx.closePath();
      }),
      (e.prototype.path = function (t) {
        this.ctx.beginPath(), this.formatPath(t), this.ctx.closePath();
      }),
      (e.prototype.formatPath = function (t) {
        var r = this;
        t.forEach(function (n, i) {
          var o = Ce(n) ? n.start : n;
          i === 0 ? r.ctx.moveTo(o.x, o.y) : r.ctx.lineTo(o.x, o.y),
            Ce(n) &&
              r.ctx.bezierCurveTo(
                n.startControl.x,
                n.startControl.y,
                n.endControl.x,
                n.endControl.y,
                n.end.x,
                n.end.y
              );
        });
      }),
      (e.prototype.renderRepeat = function (t, r, n, i) {
        this.path(t),
          (this.ctx.fillStyle = r),
          this.ctx.translate(n, i),
          this.ctx.fill(),
          this.ctx.translate(-n, -i);
      }),
      (e.prototype.resizeImage = function (t, r, n) {
        var i;
        if (t.width === r && t.height === n) return t;
        var o =
            (i = this.canvas.ownerDocument) !== null && i !== void 0
              ? i
              : document,
          s = o.createElement('canvas');
        (s.width = Math.max(1, r)), (s.height = Math.max(1, n));
        var a = s.getContext('2d');
        return a.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, n), s;
      }),
      (e.prototype.renderBackgroundImage = function (t) {
        return $A(this, void 0, void 0, function () {
          var r, n, i, o, s, a;
          return WA(this, function (l) {
            switch (l.label) {
              case 0:
                (r = t.styles.backgroundImage.length - 1),
                  (n = function (u) {
                    var c,
                      B,
                      w,
                      R,
                      BA,
                      AA,
                      P,
                      q,
                      m,
                      g,
                      R,
                      BA,
                      AA,
                      P,
                      q,
                      p,
                      F,
                      d,
                      f,
                      h,
                      Q,
                      v,
                      U,
                      y,
                      m,
                      x,
                      R,
                      Y,
                      $,
                      P,
                      q,
                      uA,
                      BA,
                      AA,
                      H,
                      M,
                      _,
                      z,
                      I,
                      L,
                      T,
                      N;
                    return WA(this, function (C) {
                      switch (C.label) {
                        case 0:
                          if (u.type !== 0) return [3, 5];
                          (c = void 0), (B = u.url), (C.label = 1);
                        case 1:
                          return (
                            C.trys.push([1, 3, , 4]),
                            [4, i.context.cache.match(B)]
                          );
                        case 2:
                          return (c = C.sent()), [3, 4];
                        case 3:
                          return (
                            C.sent(),
                            i.context.logger.error(
                              'Error loading background-image ' + B
                            ),
                            [3, 4]
                          );
                        case 4:
                          return (
                            c &&
                              ((w = Pa(t, r, [
                                c.width,
                                c.height,
                                c.width / c.height,
                              ])),
                              (R = w[0]),
                              (BA = w[1]),
                              (AA = w[2]),
                              (P = w[3]),
                              (q = w[4]),
                              (m = i.ctx.createPattern(
                                i.resizeImage(c, P, q),
                                'repeat'
                              )),
                              i.renderRepeat(R, m, BA, AA)),
                            [3, 6]
                          );
                        case 5:
                          sv(u)
                            ? ((g = Pa(t, r, [null, null, null])),
                              (R = g[0]),
                              (BA = g[1]),
                              (AA = g[2]),
                              (P = g[3]),
                              (q = g[4]),
                              (p = tv(u.angle, P, q)),
                              (F = p[0]),
                              (d = p[1]),
                              (f = p[2]),
                              (h = p[3]),
                              (Q = p[4]),
                              (v = document.createElement('canvas')),
                              (v.width = P),
                              (v.height = q),
                              (U = v.getContext('2d')),
                              (y = U.createLinearGradient(d, h, f, Q)),
                              BB(u.stops, F).forEach(function (b) {
                                return y.addColorStop(b.stop, xA(b.color));
                              }),
                              (U.fillStyle = y),
                              U.fillRect(0, 0, P, q),
                              P > 0 &&
                                q > 0 &&
                                ((m = i.ctx.createPattern(v, 'repeat')),
                                i.renderRepeat(R, m, BA, AA)))
                            : av(u) &&
                              ((x = Pa(t, r, [null, null, null])),
                              (R = x[0]),
                              (Y = x[1]),
                              ($ = x[2]),
                              (P = x[3]),
                              (q = x[4]),
                              (uA =
                                u.position.length === 0 ? [hc] : u.position),
                              (BA = aA(uA[0], P)),
                              (AA = aA(uA[uA.length - 1], q)),
                              (H = rv(u, BA, AA, P, q)),
                              (M = H[0]),
                              (_ = H[1]),
                              M > 0 &&
                                _ > 0 &&
                                ((z = i.ctx.createRadialGradient(
                                  Y + BA,
                                  $ + AA,
                                  0,
                                  Y + BA,
                                  $ + AA,
                                  M
                                )),
                                BB(u.stops, M * 2).forEach(function (b) {
                                  return z.addColorStop(b.stop, xA(b.color));
                                }),
                                i.path(R),
                                (i.ctx.fillStyle = z),
                                M !== _
                                  ? ((I = t.bounds.left + 0.5 * t.bounds.width),
                                    (L = t.bounds.top + 0.5 * t.bounds.height),
                                    (T = _ / M),
                                    (N = 1 / T),
                                    i.ctx.save(),
                                    i.ctx.translate(I, L),
                                    i.ctx.transform(1, 0, 0, T, 0, 0),
                                    i.ctx.translate(-I, -L),
                                    i.ctx.fillRect(
                                      Y,
                                      N * ($ - L) + L,
                                      P,
                                      q * N
                                    ),
                                    i.ctx.restore())
                                  : i.ctx.fill())),
                            (C.label = 6);
                        case 6:
                          return r--, [2];
                      }
                    });
                  }),
                  (i = this),
                  (o = 0),
                  (s = t.styles.backgroundImage.slice(0).reverse()),
                  (l.label = 1);
              case 1:
                return o < s.length ? ((a = s[o]), [5, n(a)]) : [3, 4];
              case 2:
                l.sent(), (l.label = 3);
              case 3:
                return o++, [3, 1];
              case 4:
                return [2];
            }
          });
        });
      }),
      (e.prototype.renderSolidBorder = function (t, r, n) {
        return $A(this, void 0, void 0, function () {
          return WA(this, function (i) {
            return (
              this.path(bB(n, r)),
              (this.ctx.fillStyle = xA(t)),
              this.ctx.fill(),
              [2]
            );
          });
        });
      }),
      (e.prototype.renderDoubleBorder = function (t, r, n, i) {
        return $A(this, void 0, void 0, function () {
          var o, s;
          return WA(this, function (a) {
            switch (a.label) {
              case 0:
                return r < 3 ? [4, this.renderSolidBorder(t, n, i)] : [3, 2];
              case 1:
                return a.sent(), [2];
              case 2:
                return (
                  (o = cy(i, n)),
                  this.path(o),
                  (this.ctx.fillStyle = xA(t)),
                  this.ctx.fill(),
                  (s = fy(i, n)),
                  this.path(s),
                  this.ctx.fill(),
                  [2]
                );
            }
          });
        });
      }),
      (e.prototype.renderNodeBackgroundAndBorders = function (t) {
        return $A(this, void 0, void 0, function () {
          var r,
            n,
            i,
            o,
            s,
            a,
            l,
            u,
            c = this;
          return WA(this, function (B) {
            switch (B.label) {
              case 0:
                return (
                  this.applyEffects(t.getEffects(2)),
                  (r = t.container.styles),
                  (n = !Lt(r.backgroundColor) || r.backgroundImage.length),
                  (i = [
                    {
                      style: r.borderTopStyle,
                      color: r.borderTopColor,
                      width: r.borderTopWidth,
                    },
                    {
                      style: r.borderRightStyle,
                      color: r.borderRightColor,
                      width: r.borderRightWidth,
                    },
                    {
                      style: r.borderBottomStyle,
                      color: r.borderBottomColor,
                      width: r.borderBottomWidth,
                    },
                    {
                      style: r.borderLeftStyle,
                      color: r.borderLeftColor,
                      width: r.borderLeftWidth,
                    },
                  ]),
                  (o = Fy(Br(r.backgroundClip, 0), t.curves)),
                  n || r.boxShadow.length
                    ? (this.ctx.save(),
                      this.path(o),
                      this.ctx.clip(),
                      Lt(r.backgroundColor) ||
                        ((this.ctx.fillStyle = xA(r.backgroundColor)),
                        this.ctx.fill()),
                      [4, this.renderBackgroundImage(t.container)])
                    : [3, 2]
                );
              case 1:
                B.sent(),
                  this.ctx.restore(),
                  r.boxShadow
                    .slice(0)
                    .reverse()
                    .forEach(function (w) {
                      c.ctx.save();
                      var g = ts(t.curves),
                        p = w.inset ? 0 : Cy,
                        F = ly(
                          g,
                          -p + (w.inset ? 1 : -1) * w.spread.number,
                          (w.inset ? 1 : -1) * w.spread.number,
                          w.spread.number * (w.inset ? -2 : 2),
                          w.spread.number * (w.inset ? -2 : 2)
                        );
                      w.inset
                        ? (c.path(g), c.ctx.clip(), c.mask(F))
                        : (c.mask(g), c.ctx.clip(), c.path(F)),
                        (c.ctx.shadowOffsetX = w.offsetX.number + p),
                        (c.ctx.shadowOffsetY = w.offsetY.number),
                        (c.ctx.shadowColor = xA(w.color)),
                        (c.ctx.shadowBlur = w.blur.number),
                        (c.ctx.fillStyle = w.inset
                          ? xA(w.color)
                          : 'rgba(0,0,0,1)'),
                        c.ctx.fill(),
                        c.ctx.restore();
                    }),
                  (B.label = 2);
              case 2:
                (s = 0), (a = 0), (l = i), (B.label = 3);
              case 3:
                return a < l.length
                  ? ((u = l[a]),
                    u.style !== 0 && !Lt(u.color) && u.width > 0
                      ? u.style !== 2
                        ? [3, 5]
                        : [
                            4,
                            this.renderDashedDottedBorder(
                              u.color,
                              u.width,
                              s,
                              t.curves,
                              2
                            ),
                          ]
                      : [3, 11])
                  : [3, 13];
              case 4:
                return B.sent(), [3, 11];
              case 5:
                return u.style !== 3
                  ? [3, 7]
                  : [
                      4,
                      this.renderDashedDottedBorder(
                        u.color,
                        u.width,
                        s,
                        t.curves,
                        3
                      ),
                    ];
              case 6:
                return B.sent(), [3, 11];
              case 7:
                return u.style !== 4
                  ? [3, 9]
                  : [4, this.renderDoubleBorder(u.color, u.width, s, t.curves)];
              case 8:
                return B.sent(), [3, 11];
              case 9:
                return [4, this.renderSolidBorder(u.color, s, t.curves)];
              case 10:
                B.sent(), (B.label = 11);
              case 11:
                s++, (B.label = 12);
              case 12:
                return a++, [3, 3];
              case 13:
                return [2];
            }
          });
        });
      }),
      (e.prototype.renderDashedDottedBorder = function (t, r, n, i, o) {
        return $A(this, void 0, void 0, function () {
          var s, a, l, u, c, B, w, g, p, F, d, f, h, Q, v, U, v, U;
          return WA(this, function (y) {
            return (
              this.ctx.save(),
              (s = By(i, n)),
              (a = bB(i, n)),
              o === 2 && (this.path(a), this.ctx.clip()),
              Ce(a[0])
                ? ((l = a[0].start.x), (u = a[0].start.y))
                : ((l = a[0].x), (u = a[0].y)),
              Ce(a[1])
                ? ((c = a[1].end.x), (B = a[1].end.y))
                : ((c = a[1].x), (B = a[1].y)),
              n === 0 || n === 2
                ? (w = Math.abs(l - c))
                : (w = Math.abs(u - B)),
              this.ctx.beginPath(),
              o === 3 ? this.formatPath(s) : this.formatPath(a.slice(0, 2)),
              (g = r < 3 ? r * 3 : r * 2),
              (p = r < 3 ? r * 2 : r),
              o === 3 && ((g = r), (p = r)),
              (F = !0),
              w <= g * 2
                ? (F = !1)
                : w <= g * 2 + p
                ? ((d = w / (2 * g + p)), (g *= d), (p *= d))
                : ((f = Math.floor((w + p) / (g + p))),
                  (h = (w - f * g) / (f - 1)),
                  (Q = (w - (f + 1) * g) / f),
                  (p = Q <= 0 || Math.abs(p - h) < Math.abs(p - Q) ? h : Q)),
              F &&
                (o === 3
                  ? this.ctx.setLineDash([0, g + p])
                  : this.ctx.setLineDash([g, p])),
              o === 3
                ? ((this.ctx.lineCap = 'round'), (this.ctx.lineWidth = r))
                : (this.ctx.lineWidth = r * 2 + 1.1),
              (this.ctx.strokeStyle = xA(t)),
              this.ctx.stroke(),
              this.ctx.setLineDash([]),
              o === 2 &&
                (Ce(a[0]) &&
                  ((v = a[3]),
                  (U = a[0]),
                  this.ctx.beginPath(),
                  this.formatPath([
                    new D(v.end.x, v.end.y),
                    new D(U.start.x, U.start.y),
                  ]),
                  this.ctx.stroke()),
                Ce(a[1]) &&
                  ((v = a[1]),
                  (U = a[2]),
                  this.ctx.beginPath(),
                  this.formatPath([
                    new D(v.end.x, v.end.y),
                    new D(U.start.x, U.start.y),
                  ]),
                  this.ctx.stroke())),
              this.ctx.restore(),
              [2]
            );
          });
        });
      }),
      (e.prototype.render = function (t) {
        return $A(this, void 0, void 0, function () {
          var r;
          return WA(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  this.options.backgroundColor &&
                    ((this.ctx.fillStyle = xA(this.options.backgroundColor)),
                    this.ctx.fillRect(
                      this.options.x,
                      this.options.y,
                      this.options.width,
                      this.options.height
                    )),
                  (r = uy(t)),
                  [4, this.renderStack(r)]
                );
              case 1:
                return n.sent(), this.applyEffects([]), [2, this.canvas];
            }
          });
        });
      }),
      e
    );
  })(Hp),
  vy = function (A) {
    return A instanceof up || A instanceof lp
      ? !0
      : A instanceof Cc && A.type !== qo && A.type !== Zo;
  },
  Fy = function (A, e) {
    switch (A) {
      case 0:
        return ts(e);
      case 2:
        return ny(e);
      case 1:
      default:
        return rs(e);
    }
  },
  my = function (A) {
    switch (A) {
      case 1:
        return 'center';
      case 2:
        return 'right';
      case 0:
      default:
        return 'left';
    }
  },
  yy = ['-apple-system', 'system-ui'],
  Ey = function (A) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent)
      ? A.filter(function (e) {
          return yy.indexOf(e) === -1;
        })
      : A;
  },
  Hy = (function (A) {
    Re(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (
        (n.canvas = r.canvas ? r.canvas : document.createElement('canvas')),
        (n.ctx = n.canvas.getContext('2d')),
        (n.options = r),
        (n.canvas.width = Math.floor(r.width * r.scale)),
        (n.canvas.height = Math.floor(r.height * r.scale)),
        (n.canvas.style.width = r.width + 'px'),
        (n.canvas.style.height = r.height + 'px'),
        n.ctx.scale(n.options.scale, n.options.scale),
        n.ctx.translate(-r.x, -r.y),
        n.context.logger.debug(
          'EXPERIMENTAL ForeignObject renderer initialized (' +
            r.width +
            'x' +
            r.height +
            ' at ' +
            r.x +
            ',' +
            r.y +
            ') with scale ' +
            r.scale
        ),
        n
      );
    }
    return (
      (e.prototype.render = function (t) {
        return $A(this, void 0, void 0, function () {
          var r, n;
          return WA(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (r = ou(
                    this.options.width * this.options.scale,
                    this.options.height * this.options.scale,
                    this.options.scale,
                    this.options.scale,
                    t
                  )),
                  [4, Iy(r)]
                );
              case 1:
                return (
                  (n = i.sent()),
                  this.options.backgroundColor &&
                    ((this.ctx.fillStyle = xA(this.options.backgroundColor)),
                    this.ctx.fillRect(
                      0,
                      0,
                      this.options.width * this.options.scale,
                      this.options.height * this.options.scale
                    )),
                  this.ctx.drawImage(
                    n,
                    -this.options.x * this.options.scale,
                    -this.options.y * this.options.scale
                  ),
                  [2, this.canvas]
                );
            }
          });
        });
      }),
      e
    );
  })(Hp),
  Iy = function (A) {
    return new Promise(function (e, t) {
      var r = new Image();
      (r.onload = function () {
        e(r);
      }),
        (r.onerror = t),
        (r.src =
          'data:image/svg+xml;charset=utf-8,' +
          encodeURIComponent(new XMLSerializer().serializeToString(A)));
    });
  },
  Sy = (function () {
    function A(e) {
      var t = e.id,
        r = e.enabled;
      (this.id = t), (this.enabled = r), (this.start = Date.now());
    }
    return (
      (A.prototype.debug = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.enabled &&
          (typeof window < 'u' &&
          window.console &&
          typeof console.debug == 'function'
            ? console.debug.apply(
                console,
                Ti([this.id, this.getTime() + 'ms'], e)
              )
            : this.info.apply(this, e));
      }),
      (A.prototype.getTime = function () {
        return Date.now() - this.start;
      }),
      (A.prototype.info = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.enabled &&
          typeof window < 'u' &&
          window.console &&
          typeof console.info == 'function' &&
          console.info.apply(console, Ti([this.id, this.getTime() + 'ms'], e));
      }),
      (A.prototype.warn = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.enabled &&
          (typeof window < 'u' &&
          window.console &&
          typeof console.warn == 'function'
            ? console.warn.apply(
                console,
                Ti([this.id, this.getTime() + 'ms'], e)
              )
            : this.info.apply(this, e));
      }),
      (A.prototype.error = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.enabled &&
          (typeof window < 'u' &&
          window.console &&
          typeof console.error == 'function'
            ? console.error.apply(
                console,
                Ti([this.id, this.getTime() + 'ms'], e)
              )
            : this.info.apply(this, e));
      }),
      (A.instances = {}),
      A
    );
  })(),
  xy = (function () {
    function A(e, t) {
      var r;
      (this.windowBounds = t),
        (this.instanceName = '#' + A.instanceCount++),
        (this.logger = new Sy({ id: this.instanceName, enabled: e.logging })),
        (this.cache =
          (r = e.cache) !== null && r !== void 0 ? r : new $m(this, e));
    }
    return (A.instanceCount = 1), A;
  })(),
  Ly = function (A, e) {
    return e === void 0 && (e = {}), Ky(A, e);
  };
typeof window < 'u' && Up.setContext(window);
var Ky = function (A, e) {
    return $A(void 0, void 0, void 0, function () {
      var t,
        r,
        n,
        i,
        o,
        s,
        a,
        l,
        u,
        c,
        B,
        w,
        g,
        p,
        F,
        d,
        f,
        h,
        Q,
        v,
        y,
        U,
        y,
        m,
        x,
        R,
        Y,
        $,
        P,
        q,
        uA,
        BA,
        AA,
        H,
        M,
        _,
        z,
        I,
        L,
        T;
      return WA(this, function (N) {
        switch (N.label) {
          case 0:
            if (!A || typeof A != 'object')
              return [
                2,
                Promise.reject('Invalid element provided as first argument'),
              ];
            if (((t = A.ownerDocument), !t))
              throw new Error('Element is not attached to a Document');
            if (((r = t.defaultView), !r))
              throw new Error('Document is not attached to a Window');
            return (
              (n = {
                allowTaint:
                  (m = e.allowTaint) !== null && m !== void 0 ? m : !1,
                imageTimeout:
                  (x = e.imageTimeout) !== null && x !== void 0 ? x : 15e3,
                proxy: e.proxy,
                useCORS: (R = e.useCORS) !== null && R !== void 0 ? R : !1,
              }),
              (i = Xl(
                {
                  logging: (Y = e.logging) !== null && Y !== void 0 ? Y : !0,
                  cache: e.cache,
                },
                n
              )),
              (o = {
                windowWidth:
                  ($ = e.windowWidth) !== null && $ !== void 0
                    ? $
                    : r.innerWidth,
                windowHeight:
                  (P = e.windowHeight) !== null && P !== void 0
                    ? P
                    : r.innerHeight,
                scrollX:
                  (q = e.scrollX) !== null && q !== void 0 ? q : r.pageXOffset,
                scrollY:
                  (uA = e.scrollY) !== null && uA !== void 0
                    ? uA
                    : r.pageYOffset,
              }),
              (s = new it(o.scrollX, o.scrollY, o.windowWidth, o.windowHeight)),
              (a = new xy(i, s)),
              (l =
                (BA = e.foreignObjectRendering) !== null && BA !== void 0
                  ? BA
                  : !1),
              (u = {
                allowTaint:
                  (AA = e.allowTaint) !== null && AA !== void 0 ? AA : !1,
                onclone: e.onclone,
                ignoreElements: e.ignoreElements,
                inlineImages: l,
                copyStyles: l,
              }),
              a.logger.debug(
                'Starting document clone with size ' +
                  s.width +
                  'x' +
                  s.height +
                  ' scrolled to ' +
                  -s.left +
                  ',' +
                  -s.top
              ),
              (c = new PB(a, A, u)),
              (B = c.clonedReferenceElement),
              B
                ? [4, c.toIFrame(t, s)]
                : [2, Promise.reject('Unable to find element in cloned iframe')]
            );
          case 1:
            return (
              (w = N.sent()),
              (g = Uc(B) || Tm(B) ? lC(B.ownerDocument) : Es(a, B)),
              (p = g.width),
              (F = g.height),
              (d = g.left),
              (f = g.top),
              (h = Ty(a, B, e.backgroundColor)),
              (Q = {
                canvas: e.canvas,
                backgroundColor: h,
                scale:
                  (M =
                    (H = e.scale) !== null && H !== void 0
                      ? H
                      : r.devicePixelRatio) !== null && M !== void 0
                    ? M
                    : 1,
                x: ((_ = e.x) !== null && _ !== void 0 ? _ : 0) + d,
                y: ((z = e.y) !== null && z !== void 0 ? z : 0) + f,
                width:
                  (I = e.width) !== null && I !== void 0 ? I : Math.ceil(p),
                height:
                  (L = e.height) !== null && L !== void 0 ? L : Math.ceil(F),
              }),
              l
                ? (a.logger.debug(
                    'Document cloned, using foreign object rendering'
                  ),
                  (y = new Hy(a, Q)),
                  [4, y.render(B)])
                : [3, 3]
            );
          case 2:
            return (v = N.sent()), [3, 5];
          case 3:
            return (
              a.logger.debug(
                'Document cloned, element located at ' +
                  d +
                  ',' +
                  f +
                  ' with size ' +
                  p +
                  'x' +
                  F +
                  ' using computed rendering'
              ),
              a.logger.debug('Starting DOM parsing'),
              (U = Bp(a, B)),
              h === U.styles.backgroundColor &&
                (U.styles.backgroundColor = At.TRANSPARENT),
              a.logger.debug(
                'Starting renderer for element at ' +
                  Q.x +
                  ',' +
                  Q.y +
                  ' with size ' +
                  Q.width +
                  'x' +
                  Q.height
              ),
              (y = new Uy(a, Q)),
              [4, y.render(U)]
            );
          case 4:
            (v = N.sent()), (N.label = 5);
          case 5:
            return (
              (!((T = e.removeContainer) !== null && T !== void 0) || T) &&
                (PB.destroy(w) ||
                  a.logger.error(
                    'Cannot detach cloned iframe as it is not in the DOM anymore'
                  )),
              a.logger.debug('Finished rendering'),
              [2, v]
            );
        }
      });
    });
  },
  Ty = function (A, e, t) {
    var r = e.ownerDocument,
      n = r.documentElement
        ? Tn(A, getComputedStyle(r.documentElement).backgroundColor)
        : At.TRANSPARENT,
      i = r.body
        ? Tn(A, getComputedStyle(r.body).backgroundColor)
        : At.TRANSPARENT,
      o =
        typeof t == 'string'
          ? Tn(A, t)
          : t === null
          ? At.TRANSPARENT
          : 4294967295;
    return e === r.documentElement ? (Lt(n) ? (Lt(i) ? o : i) : n) : o;
  },
  ii = {},
  Dy = {
    get exports() {
      return ii;
    },
    set exports(A) {
      ii = A;
    },
  },
  oA = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var TA = typeof Symbol == 'function' && Symbol.for,
  vc = TA ? Symbol.for('react.element') : 60103,
  Fc = TA ? Symbol.for('react.portal') : 60106,
  Os = TA ? Symbol.for('react.fragment') : 60107,
  Rs = TA ? Symbol.for('react.strict_mode') : 60108,
  Ms = TA ? Symbol.for('react.profiler') : 60114,
  Ns = TA ? Symbol.for('react.provider') : 60109,
  _s = TA ? Symbol.for('react.context') : 60110,
  mc = TA ? Symbol.for('react.async_mode') : 60111,
  Ps = TA ? Symbol.for('react.concurrent_mode') : 60111,
  Vs = TA ? Symbol.for('react.forward_ref') : 60112,
  Gs = TA ? Symbol.for('react.suspense') : 60113,
  ky = TA ? Symbol.for('react.suspense_list') : 60120,
  bs = TA ? Symbol.for('react.memo') : 60115,
  Xs = TA ? Symbol.for('react.lazy') : 60116,
  Oy = TA ? Symbol.for('react.block') : 60121,
  Ry = TA ? Symbol.for('react.fundamental') : 60117,
  My = TA ? Symbol.for('react.responder') : 60118,
  Ny = TA ? Symbol.for('react.scope') : 60119;
function he(A) {
  if (typeof A == 'object' && A !== null) {
    var e = A.$$typeof;
    switch (e) {
      case vc:
        switch (((A = A.type), A)) {
          case mc:
          case Ps:
          case Os:
          case Ms:
          case Rs:
          case Gs:
            return A;
          default:
            switch (((A = A && A.$$typeof), A)) {
              case _s:
              case Vs:
              case Xs:
              case bs:
              case Ns:
                return A;
              default:
                return e;
            }
        }
      case Fc:
        return e;
    }
  }
}
function Ip(A) {
  return he(A) === Ps;
}
oA.AsyncMode = mc;
oA.ConcurrentMode = Ps;
oA.ContextConsumer = _s;
oA.ContextProvider = Ns;
oA.Element = vc;
oA.ForwardRef = Vs;
oA.Fragment = Os;
oA.Lazy = Xs;
oA.Memo = bs;
oA.Portal = Fc;
oA.Profiler = Ms;
oA.StrictMode = Rs;
oA.Suspense = Gs;
oA.isAsyncMode = function (A) {
  return Ip(A) || he(A) === mc;
};
oA.isConcurrentMode = Ip;
oA.isContextConsumer = function (A) {
  return he(A) === _s;
};
oA.isContextProvider = function (A) {
  return he(A) === Ns;
};
oA.isElement = function (A) {
  return typeof A == 'object' && A !== null && A.$$typeof === vc;
};
oA.isForwardRef = function (A) {
  return he(A) === Vs;
};
oA.isFragment = function (A) {
  return he(A) === Os;
};
oA.isLazy = function (A) {
  return he(A) === Xs;
};
oA.isMemo = function (A) {
  return he(A) === bs;
};
oA.isPortal = function (A) {
  return he(A) === Fc;
};
oA.isProfiler = function (A) {
  return he(A) === Ms;
};
oA.isStrictMode = function (A) {
  return he(A) === Rs;
};
oA.isSuspense = function (A) {
  return he(A) === Gs;
};
oA.isValidElementType = function (A) {
  return (
    typeof A == 'string' ||
    typeof A == 'function' ||
    A === Os ||
    A === Ps ||
    A === Ms ||
    A === Rs ||
    A === Gs ||
    A === ky ||
    (typeof A == 'object' &&
      A !== null &&
      (A.$$typeof === Xs ||
        A.$$typeof === bs ||
        A.$$typeof === Ns ||
        A.$$typeof === _s ||
        A.$$typeof === Vs ||
        A.$$typeof === Ry ||
        A.$$typeof === My ||
        A.$$typeof === Ny ||
        A.$$typeof === Oy))
  );
};
oA.typeOf = he;
(function (A) {
  A.exports = oA;
})(Dy);
function _y(A) {
  function e(I, L, T, N, C) {
    for (
      var b = 0,
        K = 0,
        QA = 0,
        eA = 0,
        nA,
        X,
        kA = 0,
        ee = 0,
        Z,
        GA = (Z = nA = 0),
        tA = 0,
        OA = 0,
        jr = 0,
        RA = 0,
        gi = T.length,
        Zr = gi - 1,
        Ie,
        G = '',
        UA = '',
        Ws = '',
        Js = '',
        st;
      tA < gi;

    ) {
      if (
        ((X = T.charCodeAt(tA)),
        tA === Zr &&
          K + eA + QA + b !== 0 &&
          (K !== 0 && (X = K === 47 ? 10 : 47), (eA = QA = b = 0), gi++, Zr++),
        K + eA + QA + b === 0)
      ) {
        if (
          tA === Zr &&
          (0 < OA && (G = G.replace(B, '')), 0 < G.trim().length)
        ) {
          switch (X) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              G += T.charAt(tA);
          }
          X = 59;
        }
        switch (X) {
          case 123:
            for (
              G = G.trim(), nA = G.charCodeAt(0), Z = 1, RA = ++tA;
              tA < gi;

            ) {
              switch ((X = T.charCodeAt(tA))) {
                case 123:
                  Z++;
                  break;
                case 125:
                  Z--;
                  break;
                case 47:
                  switch ((X = T.charCodeAt(tA + 1))) {
                    case 42:
                    case 47:
                      A: {
                        for (GA = tA + 1; GA < Zr; ++GA)
                          switch (T.charCodeAt(GA)) {
                            case 47:
                              if (
                                X === 42 &&
                                T.charCodeAt(GA - 1) === 42 &&
                                tA + 2 !== GA
                              ) {
                                tA = GA + 1;
                                break A;
                              }
                              break;
                            case 10:
                              if (X === 47) {
                                tA = GA + 1;
                                break A;
                              }
                          }
                        tA = GA;
                      }
                  }
                  break;
                case 91:
                  X++;
                case 40:
                  X++;
                case 34:
                case 39:
                  for (; tA++ < Zr && T.charCodeAt(tA) !== X; );
              }
              if (Z === 0) break;
              tA++;
            }
            switch (
              ((Z = T.substring(RA, tA)),
              nA === 0 && (nA = (G = G.replace(c, '').trim()).charCodeAt(0)),
              nA)
            ) {
              case 64:
                switch (
                  (0 < OA && (G = G.replace(B, '')), (X = G.charCodeAt(1)), X)
                ) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    OA = L;
                    break;
                  default:
                    OA = BA;
                }
                if (
                  ((Z = e(L, OA, Z, X, C + 1)),
                  (RA = Z.length),
                  0 < H &&
                    ((OA = t(BA, G, jr)),
                    (st = s(3, Z, OA, L, P, $, RA, X, C, N)),
                    (G = OA.join('')),
                    st !== void 0 &&
                      (RA = (Z = st.trim()).length) === 0 &&
                      ((X = 0), (Z = ''))),
                  0 < RA)
                )
                  switch (X) {
                    case 115:
                      G = G.replace(U, o);
                    case 100:
                    case 109:
                    case 45:
                      Z = G + '{' + Z + '}';
                      break;
                    case 107:
                      (G = G.replace(f, '$1 $2')),
                        (Z = G + '{' + Z + '}'),
                        (Z =
                          uA === 1 || (uA === 2 && i('@' + Z, 3))
                            ? '@-webkit-' + Z + '@' + Z
                            : '@' + Z);
                      break;
                    default:
                      (Z = G + Z), N === 112 && (Z = ((UA += Z), ''));
                  }
                else Z = '';
                break;
              default:
                Z = e(L, t(L, G, jr), Z, N, C + 1);
            }
            (Ws += Z),
              (Z = jr = OA = GA = nA = 0),
              (G = ''),
              (X = T.charCodeAt(++tA));
            break;
          case 125:
          case 59:
            if (
              ((G = (0 < OA ? G.replace(B, '') : G).trim()),
              1 < (RA = G.length))
            )
              switch (
                (GA === 0 &&
                  ((nA = G.charCodeAt(0)),
                  nA === 45 || (96 < nA && 123 > nA)) &&
                  (RA = (G = G.replace(' ', ':')).length),
                0 < H &&
                  (st = s(1, G, L, I, P, $, UA.length, N, C, N)) !== void 0 &&
                  (RA = (G = st.trim()).length) === 0 &&
                  (G = '\0\0'),
                (nA = G.charCodeAt(0)),
                (X = G.charCodeAt(1)),
                nA)
              ) {
                case 0:
                  break;
                case 64:
                  if (X === 105 || X === 99) {
                    Js += G + T.charAt(tA);
                    break;
                  }
                default:
                  G.charCodeAt(RA - 1) !== 58 &&
                    (UA += n(G, nA, X, G.charCodeAt(2)));
              }
            (jr = OA = GA = nA = 0), (G = ''), (X = T.charCodeAt(++tA));
        }
      }
      switch (X) {
        case 13:
        case 10:
          K === 47
            ? (K = 0)
            : 1 + nA === 0 &&
              N !== 107 &&
              0 < G.length &&
              ((OA = 1), (G += '\0')),
            0 < H * _ && s(0, G, L, I, P, $, UA.length, N, C, N),
            ($ = 1),
            P++;
          break;
        case 59:
        case 125:
          if (K + eA + QA + b === 0) {
            $++;
            break;
          }
        default:
          switch (($++, (Ie = T.charAt(tA)), X)) {
            case 9:
            case 32:
              if (eA + b + K === 0)
                switch (kA) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Ie = '';
                    break;
                  default:
                    X !== 32 && (Ie = ' ');
                }
              break;
            case 0:
              Ie = '\\0';
              break;
            case 12:
              Ie = '\\f';
              break;
            case 11:
              Ie = '\\v';
              break;
            case 38:
              eA + K + b === 0 && ((OA = jr = 1), (Ie = '\f' + Ie));
              break;
            case 108:
              if (eA + K + b + q === 0 && 0 < GA)
                switch (tA - GA) {
                  case 2:
                    kA === 112 && T.charCodeAt(tA - 3) === 58 && (q = kA);
                  case 8:
                    ee === 111 && (q = ee);
                }
              break;
            case 58:
              eA + K + b === 0 && (GA = tA);
              break;
            case 44:
              K + QA + eA + b === 0 && ((OA = 1), (Ie += '\r'));
              break;
            case 34:
            case 39:
              K === 0 && (eA = eA === X ? 0 : eA === 0 ? X : eA);
              break;
            case 91:
              eA + K + QA === 0 && b++;
              break;
            case 93:
              eA + K + QA === 0 && b--;
              break;
            case 41:
              eA + K + b === 0 && QA--;
              break;
            case 40:
              if (eA + K + b === 0) {
                if (nA === 0)
                  switch (2 * kA + 3 * ee) {
                    case 533:
                      break;
                    default:
                      nA = 1;
                  }
                QA++;
              }
              break;
            case 64:
              K + QA + eA + b + GA + Z === 0 && (Z = 1);
              break;
            case 42:
            case 47:
              if (!(0 < eA + b + QA))
                switch (K) {
                  case 0:
                    switch (2 * X + 3 * T.charCodeAt(tA + 1)) {
                      case 235:
                        K = 47;
                        break;
                      case 220:
                        (RA = tA), (K = 42);
                    }
                    break;
                  case 42:
                    X === 47 &&
                      kA === 42 &&
                      RA + 2 !== tA &&
                      (T.charCodeAt(RA + 2) === 33 &&
                        (UA += T.substring(RA, tA + 1)),
                      (Ie = ''),
                      (K = 0));
                }
          }
          K === 0 && (G += Ie);
      }
      (ee = kA), (kA = X), tA++;
    }
    if (((RA = UA.length), 0 < RA)) {
      if (
        ((OA = L),
        0 < H &&
          ((st = s(2, UA, OA, I, P, $, RA, N, C, N)),
          st !== void 0 && (UA = st).length === 0))
      )
        return Js + UA + Ws;
      if (((UA = OA.join(',') + '{' + UA + '}'), uA * q !== 0)) {
        switch ((uA !== 2 || i(UA, 2) || (q = 0), q)) {
          case 111:
            UA = UA.replace(Q, ':-moz-$1') + UA;
            break;
          case 112:
            UA =
              UA.replace(h, '::-webkit-input-$1') +
              UA.replace(h, '::-moz-$1') +
              UA.replace(h, ':-ms-input-$1') +
              UA;
        }
        q = 0;
      }
    }
    return Js + UA + Ws;
  }
  function t(I, L, T) {
    var N = L.trim().split(F);
    L = N;
    var C = N.length,
      b = I.length;
    switch (b) {
      case 0:
      case 1:
        var K = 0;
        for (I = b === 0 ? '' : I[0] + ' '; K < C; ++K)
          L[K] = r(I, L[K], T).trim();
        break;
      default:
        var QA = (K = 0);
        for (L = []; K < C; ++K)
          for (var eA = 0; eA < b; ++eA)
            L[QA++] = r(I[eA] + ' ', N[K], T).trim();
    }
    return L;
  }
  function r(I, L, T) {
    var N = L.charCodeAt(0);
    switch ((33 > N && (N = (L = L.trim()).charCodeAt(0)), N)) {
      case 38:
        return L.replace(d, '$1' + I.trim());
      case 58:
        return I.trim() + L.replace(d, '$1' + I.trim());
      default:
        if (0 < 1 * T && 0 < L.indexOf('\f'))
          return L.replace(d, (I.charCodeAt(0) === 58 ? '' : '$1') + I.trim());
    }
    return I + L;
  }
  function n(I, L, T, N) {
    var C = I + ';',
      b = 2 * L + 3 * T + 4 * N;
    if (b === 944) {
      I = C.indexOf(':', 9) + 1;
      var K = C.substring(I, C.length - 1).trim();
      return (
        (K = C.substring(0, I).trim() + K + ';'),
        uA === 1 || (uA === 2 && i(K, 1)) ? '-webkit-' + K + K : K
      );
    }
    if (uA === 0 || (uA === 2 && !i(C, 1))) return C;
    switch (b) {
      case 1015:
        return C.charCodeAt(10) === 97 ? '-webkit-' + C + C : C;
      case 951:
        return C.charCodeAt(3) === 116 ? '-webkit-' + C + C : C;
      case 963:
        return C.charCodeAt(5) === 110 ? '-webkit-' + C + C : C;
      case 1009:
        if (C.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return '-webkit-' + C + C;
      case 978:
        return '-webkit-' + C + '-moz-' + C + C;
      case 1019:
      case 983:
        return '-webkit-' + C + '-moz-' + C + '-ms-' + C + C;
      case 883:
        if (C.charCodeAt(8) === 45) return '-webkit-' + C + C;
        if (0 < C.indexOf('image-set(', 11))
          return C.replace(Y, '$1-webkit-$2') + C;
        break;
      case 932:
        if (C.charCodeAt(4) === 45)
          switch (C.charCodeAt(5)) {
            case 103:
              return (
                '-webkit-box-' +
                C.replace('-grow', '') +
                '-webkit-' +
                C +
                '-ms-' +
                C.replace('grow', 'positive') +
                C
              );
            case 115:
              return (
                '-webkit-' + C + '-ms-' + C.replace('shrink', 'negative') + C
              );
            case 98:
              return (
                '-webkit-' +
                C +
                '-ms-' +
                C.replace('basis', 'preferred-size') +
                C
              );
          }
        return '-webkit-' + C + '-ms-' + C + C;
      case 964:
        return '-webkit-' + C + '-ms-flex-' + C + C;
      case 1023:
        if (C.charCodeAt(8) !== 99) break;
        return (
          (K = C.substring(C.indexOf(':', 15))
            .replace('flex-', '')
            .replace('space-between', 'justify')),
          '-webkit-box-pack' + K + '-webkit-' + C + '-ms-flex-pack' + K + C
        );
      case 1005:
        return g.test(C)
          ? C.replace(w, ':-webkit-') + C.replace(w, ':-moz-') + C
          : C;
      case 1e3:
        switch (
          ((K = C.substring(13).trim()),
          (L = K.indexOf('-') + 1),
          K.charCodeAt(0) + K.charCodeAt(L))
        ) {
          case 226:
            K = C.replace(v, 'tb');
            break;
          case 232:
            K = C.replace(v, 'tb-rl');
            break;
          case 220:
            K = C.replace(v, 'lr');
            break;
          default:
            return C;
        }
        return '-webkit-' + C + '-ms-' + K + C;
      case 1017:
        if (C.indexOf('sticky', 9) === -1) break;
      case 975:
        switch (
          ((L = (C = I).length - 10),
          (K = (C.charCodeAt(L) === 33 ? C.substring(0, L) : C)
            .substring(I.indexOf(':', 7) + 1)
            .trim()),
          (b = K.charCodeAt(0) + (K.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > K.charCodeAt(8)) break;
          case 115:
            C = C.replace(K, '-webkit-' + K) + ';' + C;
            break;
          case 207:
          case 102:
            C =
              C.replace(K, '-webkit-' + (102 < b ? 'inline-' : '') + 'box') +
              ';' +
              C.replace(K, '-webkit-' + K) +
              ';' +
              C.replace(K, '-ms-' + K + 'box') +
              ';' +
              C;
        }
        return C + ';';
      case 938:
        if (C.charCodeAt(5) === 45)
          switch (C.charCodeAt(6)) {
            case 105:
              return (
                (K = C.replace('-items', '')),
                '-webkit-' + C + '-webkit-box-' + K + '-ms-flex-' + K + C
              );
            case 115:
              return '-webkit-' + C + '-ms-flex-item-' + C.replace(m, '') + C;
            default:
              return (
                '-webkit-' +
                C +
                '-ms-flex-line-pack' +
                C.replace('align-content', '').replace(m, '') +
                C
              );
          }
        break;
      case 973:
      case 989:
        if (C.charCodeAt(3) !== 45 || C.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (R.test(I) === !0)
          return (K = I.substring(I.indexOf(':') + 1)).charCodeAt(0) === 115
            ? n(I.replace('stretch', 'fill-available'), L, T, N).replace(
                ':fill-available',
                ':stretch'
              )
            : C.replace(K, '-webkit-' + K) +
                C.replace(K, '-moz-' + K.replace('fill-', '')) +
                C;
        break;
      case 962:
        if (
          ((C =
            '-webkit-' + C + (C.charCodeAt(5) === 102 ? '-ms-' + C : '') + C),
          T + N === 211 &&
            C.charCodeAt(13) === 105 &&
            0 < C.indexOf('transform', 10))
        )
          return (
            C.substring(0, C.indexOf(';', 27) + 1).replace(p, '$1-webkit-$2') +
            C
          );
    }
    return C;
  }
  function i(I, L) {
    var T = I.indexOf(L === 1 ? ':' : '{'),
      N = I.substring(0, L !== 3 ? T : 10);
    return (
      (T = I.substring(T + 1, I.length - 1)),
      M(L !== 2 ? N : N.replace(x, '$1'), T, L)
    );
  }
  function o(I, L) {
    var T = n(L, L.charCodeAt(0), L.charCodeAt(1), L.charCodeAt(2));
    return T !== L + ';'
      ? T.replace(y, ' or ($1)').substring(4)
      : '(' + L + ')';
  }
  function s(I, L, T, N, C, b, K, QA, eA, nA) {
    for (var X = 0, kA = L, ee; X < H; ++X)
      switch ((ee = AA[X].call(u, I, kA, T, N, C, b, K, QA, eA, nA))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          kA = ee;
      }
    if (kA !== L) return kA;
  }
  function a(I) {
    switch (I) {
      case void 0:
      case null:
        H = AA.length = 0;
        break;
      default:
        if (typeof I == 'function') AA[H++] = I;
        else if (typeof I == 'object')
          for (var L = 0, T = I.length; L < T; ++L) a(I[L]);
        else _ = !!I | 0;
    }
    return a;
  }
  function l(I) {
    return (
      (I = I.prefix),
      I !== void 0 &&
        ((M = null),
        I
          ? typeof I != 'function'
            ? (uA = 1)
            : ((uA = 2), (M = I))
          : (uA = 0)),
      l
    );
  }
  function u(I, L) {
    var T = I;
    if ((33 > T.charCodeAt(0) && (T = T.trim()), (z = T), (T = [z]), 0 < H)) {
      var N = s(-1, L, T, T, P, $, 0, 0, 0, 0);
      N !== void 0 && typeof N == 'string' && (L = N);
    }
    var C = e(BA, T, L, 0, 0);
    return (
      0 < H &&
        ((N = s(-2, C, T, T, P, $, C.length, 0, 0, 0)),
        N !== void 0 && (C = N)),
      (z = ''),
      (q = 0),
      ($ = P = 1),
      C
    );
  }
  var c = /^\0+/g,
    B = /[\0\r\f]/g,
    w = /: */g,
    g = /zoo|gra/,
    p = /([,: ])(transform)/g,
    F = /,\r+?/g,
    d = /([\t\r\n ])*\f?&/g,
    f = /@(k\w+)\s*(\S*)\s*/,
    h = /::(place)/g,
    Q = /:(read-only)/g,
    v = /[svh]\w+-[tblr]{2}/,
    U = /\(\s*(.*)\s*\)/g,
    y = /([\s\S]*?);/g,
    m = /-self|flex-/g,
    x = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    R = /stretch|:\s*\w+\-(?:conte|avail)/,
    Y = /([^-])(image-set\()/,
    $ = 1,
    P = 1,
    q = 0,
    uA = 1,
    BA = [],
    AA = [],
    H = 0,
    M = null,
    _ = 0,
    z = '';
  return (u.use = a), (u.set = l), A !== void 0 && l(A), u;
}
var Py = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};
function Vy(A) {
  var e = Object.create(null);
  return function (t) {
    return e[t] === void 0 && (e[t] = A(t)), e[t];
  };
}
var Gy =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  WB = Vy(function (A) {
    return (
      Gy.test(A) ||
      (A.charCodeAt(0) === 111 &&
        A.charCodeAt(1) === 110 &&
        A.charCodeAt(2) < 91)
    );
  }),
  yc = ii,
  by = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  Xy = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Wy = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Sp = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Ec = {};
Ec[yc.ForwardRef] = Wy;
Ec[yc.Memo] = Sp;
function JB(A) {
  return yc.isMemo(A) ? Sp : Ec[A.$$typeof] || by;
}
var Jy = Object.defineProperty,
  zy = Object.getOwnPropertyNames,
  zB = Object.getOwnPropertySymbols,
  Yy = Object.getOwnPropertyDescriptor,
  $y = Object.getPrototypeOf,
  YB = Object.prototype;
function xp(A, e, t) {
  if (typeof e != 'string') {
    if (YB) {
      var r = $y(e);
      r && r !== YB && xp(A, r, t);
    }
    var n = zy(e);
    zB && (n = n.concat(zB(e)));
    for (var i = JB(A), o = JB(e), s = 0; s < n.length; ++s) {
      var a = n[s];
      if (!Xy[a] && !(t && t[a]) && !(o && o[a]) && !(i && i[a])) {
        var l = Yy(e, a);
        try {
          Jy(A, a, l);
        } catch {}
      }
    }
  }
  return A;
}
var jy = xp;
function Ze() {
  return (Ze =
    Object.assign ||
    function (A) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (A[r] = t[r]);
      }
      return A;
    }).apply(this, arguments);
}
var $B = function (A, e) {
    for (var t = [A[0]], r = 0, n = e.length; r < n; r += 1)
      t.push(e[r], A[r + 1]);
    return t;
  },
  Bu = function (A) {
    return (
      A !== null &&
      typeof A == 'object' &&
      (A.toString ? A.toString() : Object.prototype.toString.call(A)) ===
        '[object Object]' &&
      !ii.typeOf(A)
    );
  },
  is = Object.freeze([]),
  Kt = Object.freeze({});
function oi(A) {
  return typeof A == 'function';
}
function jB(A) {
  return A.displayName || A.name || 'Component';
}
function Hc(A) {
  return A && typeof A.styledComponentId == 'string';
}
var br =
    (typeof process < 'u' && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    'data-styled',
  Ic = typeof window < 'u' && 'HTMLElement' in window,
  Zy = Boolean(
    typeof SC_DISABLE_SPEEDY == 'boolean'
      ? SC_DISABLE_SPEEDY
      : typeof process < 'u' &&
        {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        {}.REACT_APP_SC_DISABLE_SPEEDY !== ''
      ? {}.REACT_APP_SC_DISABLE_SPEEDY !== 'false' &&
        {}.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < 'u' &&
        {}.SC_DISABLE_SPEEDY !== void 0 &&
        {}.SC_DISABLE_SPEEDY !== ''
      ? {}.SC_DISABLE_SPEEDY !== 'false' && {}.SC_DISABLE_SPEEDY
      : !1
  );
function di(A) {
  for (
    var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1;
    r < e;
    r++
  )
    t[r - 1] = arguments[r];
  throw new Error(
    'An error occurred. See https://git.io/JUIaE#' +
      A +
      ' for more information.' +
      (t.length > 0 ? ' Args: ' + t.join(', ') : '')
  );
}
var qy = (function () {
    function A(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    var e = A.prototype;
    return (
      (e.indexOfGroup = function (t) {
        for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
        return r;
      }),
      (e.insertRules = function (t, r) {
        if (t >= this.groupSizes.length) {
          for (var n = this.groupSizes, i = n.length, o = i; t >= o; )
            (o <<= 1) < 0 && di(16, '' + t);
          (this.groupSizes = new Uint32Array(o)),
            this.groupSizes.set(n),
            (this.length = o);
          for (var s = i; s < o; s++) this.groupSizes[s] = 0;
        }
        for (var a = this.indexOfGroup(t + 1), l = 0, u = r.length; l < u; l++)
          this.tag.insertRule(a, r[l]) && (this.groupSizes[t]++, a++);
      }),
      (e.clearGroup = function (t) {
        if (t < this.length) {
          var r = this.groupSizes[t],
            n = this.indexOfGroup(t),
            i = n + r;
          this.groupSizes[t] = 0;
          for (var o = n; o < i; o++) this.tag.deleteRule(n);
        }
      }),
      (e.getGroup = function (t) {
        var r = '';
        if (t >= this.length || this.groupSizes[t] === 0) return r;
        for (
          var n = this.groupSizes[t],
            i = this.indexOfGroup(t),
            o = i + n,
            s = i;
          s < o;
          s++
        )
          r +=
            this.tag.getRule(s) +
            `/*!sc*/
`;
        return r;
      }),
      A
    );
  })(),
  Uo = new Map(),
  os = new Map(),
  Rn = 1,
  to = function (A) {
    if (Uo.has(A)) return Uo.get(A);
    for (; os.has(Rn); ) Rn++;
    var e = Rn++;
    return Uo.set(A, e), os.set(e, A), e;
  },
  AE = function (A) {
    return os.get(A);
  },
  eE = function (A, e) {
    e >= Rn && (Rn = e + 1), Uo.set(A, e), os.set(e, A);
  },
  tE = 'style[' + br + '][data-styled-version="5.3.6"]',
  rE = new RegExp('^' + br + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  nE = function (A, e, t) {
    for (var r, n = t.split(','), i = 0, o = n.length; i < o; i++)
      (r = n[i]) && A.registerName(e, r);
  },
  iE = function (A, e) {
    for (
      var t = (e.textContent || '').split(`/*!sc*/
`),
        r = [],
        n = 0,
        i = t.length;
      n < i;
      n++
    ) {
      var o = t[n].trim();
      if (o) {
        var s = o.match(rE);
        if (s) {
          var a = 0 | parseInt(s[1], 10),
            l = s[2];
          a !== 0 && (eE(l, a), nE(A, l, s[3]), A.getTag().insertRules(a, r)),
            (r.length = 0);
        } else r.push(o);
      }
    }
  },
  oE = function () {
    return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : null;
  },
  Lp = function (A) {
    var e = document.head,
      t = A || e,
      r = document.createElement('style'),
      n = (function (s) {
        for (var a = s.childNodes, l = a.length; l >= 0; l--) {
          var u = a[l];
          if (u && u.nodeType === 1 && u.hasAttribute(br)) return u;
        }
      })(t),
      i = n !== void 0 ? n.nextSibling : null;
    r.setAttribute(br, 'active'),
      r.setAttribute('data-styled-version', '5.3.6');
    var o = oE();
    return o && r.setAttribute('nonce', o), t.insertBefore(r, i), r;
  },
  sE = (function () {
    function A(t) {
      var r = (this.element = Lp(t));
      r.appendChild(document.createTextNode('')),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var i = document.styleSheets, o = 0, s = i.length; o < s; o++) {
            var a = i[o];
            if (a.ownerNode === n) return a;
          }
          di(17);
        })(r)),
        (this.length = 0);
    }
    var e = A.prototype;
    return (
      (e.insertRule = function (t, r) {
        try {
          return this.sheet.insertRule(r, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.getRule = function (t) {
        var r = this.sheet.cssRules[t];
        return r !== void 0 && typeof r.cssText == 'string' ? r.cssText : '';
      }),
      A
    );
  })(),
  aE = (function () {
    function A(t) {
      var r = (this.element = Lp(t));
      (this.nodes = r.childNodes), (this.length = 0);
    }
    var e = A.prototype;
    return (
      (e.insertRule = function (t, r) {
        if (t <= this.length && t >= 0) {
          var n = document.createTextNode(r),
            i = this.nodes[t];
          return this.element.insertBefore(n, i || null), this.length++, !0;
        }
        return !1;
      }),
      (e.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : '';
      }),
      A
    );
  })(),
  lE = (function () {
    function A(t) {
      (this.rules = []), (this.length = 0);
    }
    var e = A.prototype;
    return (
      (e.insertRule = function (t, r) {
        return (
          t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0)
        );
      }),
      (e.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.getRule = function (t) {
        return t < this.length ? this.rules[t] : '';
      }),
      A
    );
  })(),
  ZB = Ic,
  uE = { isServer: !Ic, useCSSOMInjection: !Zy },
  Kp = (function () {
    function A(t, r, n) {
      t === void 0 && (t = Kt),
        r === void 0 && (r = {}),
        (this.options = Ze({}, uE, {}, t)),
        (this.gs = r),
        (this.names = new Map(n)),
        (this.server = !!t.isServer),
        !this.server &&
          Ic &&
          ZB &&
          ((ZB = !1),
          (function (i) {
            for (
              var o = document.querySelectorAll(tE), s = 0, a = o.length;
              s < a;
              s++
            ) {
              var l = o[s];
              l &&
                l.getAttribute(br) !== 'active' &&
                (iE(i, l), l.parentNode && l.parentNode.removeChild(l));
            }
          })(this));
    }
    A.registerId = function (t) {
      return to(t);
    };
    var e = A.prototype;
    return (
      (e.reconstructWithOptions = function (t, r) {
        return (
          r === void 0 && (r = !0),
          new A(
            Ze({}, this.options, {}, t),
            this.gs,
            (r && this.names) || void 0
          )
        );
      }),
      (e.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((n = (r = this.options).isServer),
            (i = r.useCSSOMInjection),
            (o = r.target),
            (t = n ? new lE(o) : i ? new sE(o) : new aE(o)),
            new qy(t)))
        );
        var t, r, n, i, o;
      }),
      (e.hasNameForId = function (t, r) {
        return this.names.has(t) && this.names.get(t).has(r);
      }),
      (e.registerName = function (t, r) {
        if ((to(t), this.names.has(t))) this.names.get(t).add(r);
        else {
          var n = new Set();
          n.add(r), this.names.set(t, n);
        }
      }),
      (e.insertRules = function (t, r, n) {
        this.registerName(t, r), this.getTag().insertRules(to(t), n);
      }),
      (e.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.clearRules = function (t) {
        this.getTag().clearGroup(to(t)), this.clearNames(t);
      }),
      (e.clearTag = function () {
        this.tag = void 0;
      }),
      (e.toString = function () {
        return (function (t) {
          for (var r = t.getTag(), n = r.length, i = '', o = 0; o < n; o++) {
            var s = AE(o);
            if (s !== void 0) {
              var a = t.names.get(s),
                l = r.getGroup(o);
              if (a && l && a.size) {
                var u = br + '.g' + o + '[id="' + s + '"]',
                  c = '';
                a !== void 0 &&
                  a.forEach(function (B) {
                    B.length > 0 && (c += B + ',');
                  }),
                  (i +=
                    '' +
                    l +
                    u +
                    '{content:"' +
                    c +
                    `"}/*!sc*/
`);
              }
            }
          }
          return i;
        })(this);
      }),
      A
    );
  })(),
  cE = /(a)(d)/gi,
  qB = function (A) {
    return String.fromCharCode(A + (A > 25 ? 39 : 97));
  };
function du(A) {
  var e,
    t = '';
  for (e = Math.abs(A); e > 52; e = (e / 52) | 0) t = qB(e % 52) + t;
  return (qB(e % 52) + t).replace(cE, '$1-$2');
}
var Hr = function (A, e) {
    for (var t = e.length; t; ) A = (33 * A) ^ e.charCodeAt(--t);
    return A;
  },
  Tp = function (A) {
    return Hr(5381, A);
  };
function fE(A) {
  for (var e = 0; e < A.length; e += 1) {
    var t = A[e];
    if (oi(t) && !Hc(t)) return !1;
  }
  return !0;
}
var BE = Tp('5.3.6'),
  dE = (function () {
    function A(e, t, r) {
      (this.rules = e),
        (this.staticRulesId = ''),
        (this.isStatic = (r === void 0 || r.isStatic) && fE(e)),
        (this.componentId = t),
        (this.baseHash = Hr(BE, t)),
        (this.baseStyle = r),
        Kp.registerId(t);
    }
    return (
      (A.prototype.generateAndInjectStyles = function (e, t, r) {
        var n = this.componentId,
          i = [];
        if (
          (this.baseStyle &&
            i.push(this.baseStyle.generateAndInjectStyles(e, t, r)),
          this.isStatic && !r.hash)
        )
          if (this.staticRulesId && t.hasNameForId(n, this.staticRulesId))
            i.push(this.staticRulesId);
          else {
            var o = Xr(this.rules, e, t, r).join(''),
              s = du(Hr(this.baseHash, o) >>> 0);
            if (!t.hasNameForId(n, s)) {
              var a = r(o, '.' + s, void 0, n);
              t.insertRules(n, s, a);
            }
            i.push(s), (this.staticRulesId = s);
          }
        else {
          for (
            var l = this.rules.length,
              u = Hr(this.baseHash, r.hash),
              c = '',
              B = 0;
            B < l;
            B++
          ) {
            var w = this.rules[B];
            if (typeof w == 'string') c += w;
            else if (w) {
              var g = Xr(w, e, t, r),
                p = Array.isArray(g) ? g.join('') : g;
              (u = Hr(u, p + B)), (c += p);
            }
          }
          if (c) {
            var F = du(u >>> 0);
            if (!t.hasNameForId(n, F)) {
              var d = r(c, '.' + F, void 0, n);
              t.insertRules(n, F, d);
            }
            i.push(F);
          }
        }
        return i.join(' ');
      }),
      A
    );
  })(),
  gE = /^\s*\/\/.*$/gm,
  hE = [':', '[', '.', '#'];
function pE(A) {
  var e,
    t,
    r,
    n,
    i = A === void 0 ? Kt : A,
    o = i.options,
    s = o === void 0 ? Kt : o,
    a = i.plugins,
    l = a === void 0 ? is : a,
    u = new _y(s),
    c = [],
    B = (function (p) {
      function F(d) {
        if (d)
          try {
            p(d + '}');
          } catch {}
      }
      return function (d, f, h, Q, v, U, y, m, x, R) {
        switch (d) {
          case 1:
            if (x === 0 && f.charCodeAt(0) === 64) return p(f + ';'), '';
            break;
          case 2:
            if (m === 0) return f + '/*|*/';
            break;
          case 3:
            switch (m) {
              case 102:
              case 112:
                return p(h[0] + f), '';
              default:
                return f + (R === 0 ? '/*|*/' : '');
            }
          case -2:
            f.split('/*|*/}').forEach(F);
        }
      };
    })(function (p) {
      c.push(p);
    }),
    w = function (p, F, d) {
      return (F === 0 && hE.indexOf(d[t.length]) !== -1) || d.match(n)
        ? p
        : '.' + e;
    };
  function g(p, F, d, f) {
    f === void 0 && (f = '&');
    var h = p.replace(gE, ''),
      Q = F && d ? d + ' ' + F + ' { ' + h + ' }' : h;
    return (
      (e = f),
      (t = F),
      (r = new RegExp('\\' + t + '\\b', 'g')),
      (n = new RegExp('(\\' + t + '\\b){2,}')),
      u(d || !F ? '' : F, Q)
    );
  }
  return (
    u.use(
      [].concat(l, [
        function (p, F, d) {
          p === 2 &&
            d.length &&
            d[0].lastIndexOf(t) > 0 &&
            (d[0] = d[0].replace(r, w));
        },
        B,
        function (p) {
          if (p === -2) {
            var F = c;
            return (c = []), F;
          }
        },
      ])
    ),
    (g.hash = l.length
      ? l
          .reduce(function (p, F) {
            return F.name || di(15), Hr(p, F.name);
          }, 5381)
          .toString()
      : ''),
    g
  );
}
var Dp = Jr.createContext();
Dp.Consumer;
var kp = Jr.createContext(),
  wE = (kp.Consumer, new Kp()),
  gu = pE();
function QE() {
  return S.useContext(Dp) || wE;
}
function CE() {
  return S.useContext(kp) || gu;
}
var UE = (function () {
    function A(e, t) {
      var r = this;
      (this.inject = function (n, i) {
        i === void 0 && (i = gu);
        var o = r.name + i.hash;
        n.hasNameForId(r.id, o) ||
          n.insertRules(r.id, o, i(r.rules, o, '@keyframes'));
      }),
        (this.toString = function () {
          return di(12, String(r.name));
        }),
        (this.name = e),
        (this.id = 'sc-keyframes-' + e),
        (this.rules = t);
    }
    return (
      (A.prototype.getName = function (e) {
        return e === void 0 && (e = gu), this.name + e.hash;
      }),
      A
    );
  })(),
  vE = /([A-Z])/,
  FE = /([A-Z])/g,
  mE = /^ms-/,
  yE = function (A) {
    return '-' + A.toLowerCase();
  };
function Ad(A) {
  return vE.test(A) ? A.replace(FE, yE).replace(mE, '-ms-') : A;
}
var ed = function (A) {
  return A == null || A === !1 || A === '';
};
function Xr(A, e, t, r) {
  if (Array.isArray(A)) {
    for (var n, i = [], o = 0, s = A.length; o < s; o += 1)
      (n = Xr(A[o], e, t, r)) !== '' &&
        (Array.isArray(n) ? i.push.apply(i, n) : i.push(n));
    return i;
  }
  if (ed(A)) return '';
  if (Hc(A)) return '.' + A.styledComponentId;
  if (oi(A)) {
    if (
      typeof (l = A) != 'function' ||
      (l.prototype && l.prototype.isReactComponent) ||
      !e
    )
      return A;
    var a = A(e);
    return Xr(a, e, t, r);
  }
  var l;
  return A instanceof UE
    ? t
      ? (A.inject(t, r), A.getName(r))
      : A
    : Bu(A)
    ? (function u(c, B) {
        var w,
          g,
          p = [];
        for (var F in c)
          c.hasOwnProperty(F) &&
            !ed(c[F]) &&
            ((Array.isArray(c[F]) && c[F].isCss) || oi(c[F])
              ? p.push(Ad(F) + ':', c[F], ';')
              : Bu(c[F])
              ? p.push.apply(p, u(c[F], F))
              : p.push(
                  Ad(F) +
                    ': ' +
                    ((w = F),
                    (g = c[F]) == null || typeof g == 'boolean' || g === ''
                      ? ''
                      : typeof g != 'number' || g === 0 || w in Py
                      ? String(g).trim()
                      : g + 'px') +
                    ';'
                ));
        return B ? [B + ' {'].concat(p, ['}']) : p;
      })(A)
    : A.toString();
}
var td = function (A) {
  return Array.isArray(A) && (A.isCss = !0), A;
};
function EE(A) {
  for (
    var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1;
    r < e;
    r++
  )
    t[r - 1] = arguments[r];
  return oi(A) || Bu(A)
    ? td(Xr($B(is, [A].concat(t))))
    : t.length === 0 && A.length === 1 && typeof A[0] == 'string'
    ? A
    : td(Xr($B(A, t)));
}
var HE = function (A, e, t) {
    return (
      t === void 0 && (t = Kt), (A.theme !== t.theme && A.theme) || e || t.theme
    );
  },
  IE = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  SE = /(^-|-$)/g;
function Va(A) {
  return A.replace(IE, '-').replace(SE, '');
}
var xE = function (A) {
  return du(Tp(A) >>> 0);
};
function ro(A) {
  return typeof A == 'string' && !0;
}
var hu = function (A) {
    return (
      typeof A == 'function' ||
      (typeof A == 'object' && A !== null && !Array.isArray(A))
    );
  },
  LE = function (A) {
    return A !== '__proto__' && A !== 'constructor' && A !== 'prototype';
  };
function KE(A, e, t) {
  var r = A[t];
  hu(e) && hu(r) ? Op(r, e) : (A[t] = e);
}
function Op(A) {
  for (
    var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1;
    r < e;
    r++
  )
    t[r - 1] = arguments[r];
  for (var n = 0, i = t; n < i.length; n++) {
    var o = i[n];
    if (hu(o)) for (var s in o) LE(s) && KE(A, o[s], s);
  }
  return A;
}
var Rp = Jr.createContext();
Rp.Consumer;
var Ga = {};
function Mp(A, e, t) {
  var r = Hc(A),
    n = !ro(A),
    i = e.attrs,
    o = i === void 0 ? is : i,
    s = e.componentId,
    a =
      s === void 0
        ? (function (f, h) {
            var Q = typeof f != 'string' ? 'sc' : Va(f);
            Ga[Q] = (Ga[Q] || 0) + 1;
            var v = Q + '-' + xE('5.3.6' + Q + Ga[Q]);
            return h ? h + '-' + v : v;
          })(e.displayName, e.parentComponentId)
        : s,
    l = e.displayName,
    u =
      l === void 0
        ? (function (f) {
            return ro(f) ? 'styled.' + f : 'Styled(' + jB(f) + ')';
          })(A)
        : l,
    c =
      e.displayName && e.componentId
        ? Va(e.displayName) + '-' + e.componentId
        : e.componentId || a,
    B = r && A.attrs ? Array.prototype.concat(A.attrs, o).filter(Boolean) : o,
    w = e.shouldForwardProp;
  r &&
    A.shouldForwardProp &&
    (w = e.shouldForwardProp
      ? function (f, h, Q) {
          return A.shouldForwardProp(f, h, Q) && e.shouldForwardProp(f, h, Q);
        }
      : A.shouldForwardProp);
  var g,
    p = new dE(t, c, r ? A.componentStyle : void 0),
    F = p.isStatic && o.length === 0,
    d = function (f, h) {
      return (function (Q, v, U, y) {
        var m = Q.attrs,
          x = Q.componentStyle,
          R = Q.defaultProps,
          Y = Q.foldedComponentIds,
          $ = Q.shouldForwardProp,
          P = Q.styledComponentId,
          q = Q.target,
          uA = (function (N, C, b) {
            N === void 0 && (N = Kt);
            var K = Ze({}, C, { theme: N }),
              QA = {};
            return (
              b.forEach(function (eA) {
                var nA,
                  X,
                  kA,
                  ee = eA;
                for (nA in (oi(ee) && (ee = ee(K)), ee))
                  K[nA] = QA[nA] =
                    nA === 'className'
                      ? ((X = QA[nA]),
                        (kA = ee[nA]),
                        X && kA ? X + ' ' + kA : X || kA)
                      : ee[nA];
              }),
              [K, QA]
            );
          })(HE(v, S.useContext(Rp), R) || Kt, v, m),
          BA = uA[0],
          AA = uA[1],
          H = (function (N, C, b, K) {
            var QA = QE(),
              eA = CE(),
              nA = C
                ? N.generateAndInjectStyles(Kt, QA, eA)
                : N.generateAndInjectStyles(b, QA, eA);
            return nA;
          })(x, y, BA),
          M = U,
          _ = AA.$as || v.$as || AA.as || v.as || q,
          z = ro(_),
          I = AA !== v ? Ze({}, v, {}, AA) : v,
          L = {};
        for (var T in I)
          T[0] !== '$' &&
            T !== 'as' &&
            (T === 'forwardedAs'
              ? (L.as = I[T])
              : ($ ? $(T, WB, _) : !z || WB(T)) && (L[T] = I[T]));
        return (
          v.style &&
            AA.style !== v.style &&
            (L.style = Ze({}, v.style, {}, AA.style)),
          (L.className = Array.prototype
            .concat(Y, P, H !== P ? H : null, v.className, AA.className)
            .filter(Boolean)
            .join(' ')),
          (L.ref = M),
          S.createElement(_, L)
        );
      })(g, f, h, F);
    };
  return (
    (d.displayName = u),
    ((g = Jr.forwardRef(d)).attrs = B),
    (g.componentStyle = p),
    (g.displayName = u),
    (g.shouldForwardProp = w),
    (g.foldedComponentIds = r
      ? Array.prototype.concat(A.foldedComponentIds, A.styledComponentId)
      : is),
    (g.styledComponentId = c),
    (g.target = r ? A.target : A),
    (g.withComponent = function (f) {
      var h = e.componentId,
        Q = (function (U, y) {
          if (U == null) return {};
          var m,
            x,
            R = {},
            Y = Object.keys(U);
          for (x = 0; x < Y.length; x++)
            (m = Y[x]), y.indexOf(m) >= 0 || (R[m] = U[m]);
          return R;
        })(e, ['componentId']),
        v = h && h + '-' + (ro(f) ? f : Va(jB(f)));
      return Mp(f, Ze({}, Q, { attrs: B, componentId: v }), t);
    }),
    Object.defineProperty(g, 'defaultProps', {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (f) {
        this._foldedDefaultProps = r ? Op({}, A.defaultProps, f) : f;
      },
    }),
    (g.toString = function () {
      return '.' + g.styledComponentId;
    }),
    n &&
      jy(g, A, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    g
  );
}
var pu = function (A) {
  return (function e(t, r, n) {
    if ((n === void 0 && (n = Kt), !ii.isValidElementType(r)))
      return di(1, String(r));
    var i = function () {
      return t(r, n, EE.apply(void 0, arguments));
    };
    return (
      (i.withConfig = function (o) {
        return e(t, r, Ze({}, n, {}, o));
      }),
      (i.attrs = function (o) {
        return e(
          t,
          r,
          Ze({}, n, {
            attrs: Array.prototype.concat(n.attrs, o).filter(Boolean),
          })
        );
      }),
      i
    );
  })(Mp, A);
};
[
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'marquee',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
  'circle',
  'clipPath',
  'defs',
  'ellipse',
  'foreignObject',
  'g',
  'image',
  'line',
  'linearGradient',
  'marker',
  'mask',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'svg',
  'text',
  'textPath',
  'tspan',
].forEach(function (A) {
  pu[A] = pu(A);
});
const DA = pu,
  Np = {
    red: '#ef4444',
    blue: '#3b82f6',
    yellow: '#fde047',
    pink: '#ec4899',
    gray: '#6b7280',
    black: '#000000',
    white: '#ffffff',
  };
function Tt({ children: A, ...e }) {
  return V(kE, { ...e, children: A });
}
const TE = {
    red: '#ef4444',
    blue: '#3b82f6',
    yellow: '#fde047',
    pink: '#f472b6',
    gray: '#6b7280',
    black: '#27272a',
    white: '#ffffff',
  },
  DE = {
    red: '#b91c1c',
    blue: '#1d4ed8',
    yellow: '#eab308',
    pink: '#ec4899',
    gray: '#374151',
    black: '#000000',
    white: '#f4f4f5',
  },
  kE = DA.button`
  padding: 8px 12px;
  margin: 6px 12px 6px 0;
  border-radius: 4px;
  font-size: 1rem;
  text-transform: uppercase;
  border: ${(A) => (A.variant === 'white' ? 'solid' : 'none')};
  color: ${(A) => (A.variant === 'white' ? 'black' : 'white')};
  background-color: ${(A) => TE[A.variant]};
  &:hover {
    cursor: pointer;
    color: ${(A) => (A.variant === 'white' ? 'black' : 'white')};
    background-color: ${(A) => DE[A.variant]};
  }
`;
function OE({ children: A, ...e }) {
  return V(RE, { ...e, children: A });
}
const RE = DA.button`
  padding: 8px 12px;
  margin: 6px 12px;
  border-radius: 4px;
  font-size: 1rem;
  background-size: 200% auto;
  box-shadow: 0 0 20px #eee;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  color: white;
  border: 0;
  background-image: linear-gradient(
    to right,
    #3b82f6 0%,
    #a6c1ee 51%,
    #3b82f6 100%
  );
  &:hover {
    cursor: pointer;
    background-position: right center;
  }
`,
  ME = (A) =>
    S.createElement(
      'svg',
      {
        'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
        'xmlns:cc': 'http://creativecommons.org/ns#',
        'xmlns:rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
        'xmlns:svg': 'http://www.w3.org/2000/svg',
        xmlns: 'http://www.w3.org/2000/svg',
        'xmlns:sodipodi': 'http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd',
        'xmlns:inkscape': 'http://www.inkscape.org/namespaces/inkscape',
        id: 'svg2',
        height: 25,
        width: 25,
        'sodipodi:docname': 'close_icon_grey.svg',
        'inkscape:export-filename':
          'D:\\\\\\\\\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0438\\\\\\\\close_icon_black2.svg.png',
        'inkscape:export-xdpi': 72.959999,
        'inkscape:export-ydpi': 72.959999,
        'inkscape:version': '0.92.3 (2405546, 2018-03-11)',
        ...A,
      },
      S.createElement('sodipodi:namedview', {
        pagecolor: '#ffffff',
        bordercolor: '#666666',
        borderopacity: 1,
        objecttolerance: 10,
        gridtolerance: 10,
        guidetolerance: 10,
        'inkscape:pageopacity': 0,
        'inkscape:pageshadow': 2,
        'inkscape:window-width': 1366,
        'inkscape:window-height': 706,
        id: 'namedview3731',
        showgrid: 'false',
        'inkscape:zoom': 15.245222,
        'inkscape:cx': 5.6822049,
        'inkscape:cy': 12.495936,
        'inkscape:window-x': -8,
        'inkscape:window-y': -8,
        'inkscape:window-maximized': 1,
        'inkscape:current-layer': 'imagebot_2',
      }),
      S.createElement('defs', { id: 'defs13' }),
      S.createElement(
        'metadata',
        { id: 'imagebot_6' },
        'image/svg+xml',
        S.createElement(
          'rdf:RDF',
          null,
          S.createElement(
            'cc:Work',
            { 'rdf:about': '' },
            S.createElement('dc:format', null, 'image/svg+xml'),
            S.createElement('dc:type', {
              'rdf:resource': 'http://purl.org/dc/dcmitype/StillImage',
            }),
            S.createElement('dc:title', null)
          )
        )
      ),
      S.createElement(
        'g',
        {
          transform: 'translate(3.9661017,3.5677966)',
          id: 'imagebot_2',
          label: 'Layer 1',
        },
        S.createElement('path', {
          'inkscape:connector-curvature': 0,
          strokeMiterlimit: 4,
          d: 'M -2.5783352e-4,-0.00146808 17.435473,18.212367',
          id: 'imagebot_5',
          style: {
            opacity: 1,
            fill: '#5f6368',
            stroke: '#5f6368',
            strokeWidth: 3.23161912,
            strokeLinecap: 'round',
            strokeMiterlimit: 4,
            fillOpacity: 1,
            strokeOpacity: 1,
          },
        }),
        S.createElement('path', {
          'inkscape:connector-curvature': 0,
          strokeMiterlimit: 4,
          d: 'M -2.5783352e-4,18.212367 17.435473,-0.00146808',
          id: 'imagebot_4',
          style: {
            opacity: 1,
            fill: '#5f6368',
            stroke: '#5f6368',
            strokeWidth: 3.23161912,
            strokeLinecap: 'round',
            strokeMiterlimit: 4,
            fillOpacity: 1,
            strokeOpacity: 1,
          },
        }),
        S.createElement('title', { id: 'title9' }, 'Layer 1')
      )
    );
function NE({ children: A }) {
  return Fo.createPortal(
    V(pd, { children: A }),
    document.getElementById('modal-root')
  );
}
function _E(A, e) {
  S.useEffect(() => {
    const t = (r) => {
      A.current && !A.current.contains(r.target) && (e == null || e());
    };
    return (
      window.addEventListener('mousedown', t),
      () => window.removeEventListener('mousedown', t)
    );
  }, [A, e]);
}
function PE({ onClose: A, children: e }) {
  const t = S.useRef(null),
    r = () => {
      A == null || A();
    };
  return (
    _E(t, r),
    S.useEffect(() => {
      const n = document.querySelector('body');
      if (n !== null) {
        const i = n.style.overflow;
        return (
          (n.style.overflow = 'hidden'),
          () => {
            n.style.overflow = i;
          }
        );
      }
    }, []),
    V(NE, {
      children: V(VE, {
        children: Ue(GE, {
          ref: t,
          children: [
            V(bE, { onClick: r, children: V(ME, {}) }),
            V(XE, { children: V(WE, { children: e }) }),
          ],
        }),
      }),
    })
  );
}
const VE = DA.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`,
  GE = DA.div`
  width: 700px;
  height: 600px;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,
  bE = DA.div`
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
  i {
    color: #5d5d5d;
    font-size: 30px;
  }
`,
  XE = DA.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`,
  WE = DA.div`
  height: 80%;
  width: 80%;
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 60px;
  }
`,
  { VITE_UNSPLASH_ACCESS_KEY: JE } = {
    VITE_UNSPLASH_ACCESS_KEY: 'qh-nrRkK_sT2ybyN3HPtUSpZODW0n7HIHrsq2d6FQEA',
    BASE_URL: '/',
    MODE: 'production',
    DEV: !1,
    PROD: !0,
  };
function zE({ onClose: A, setBackgroundImg: e }) {
  const [t, r] = S.useState(''),
    [n, i] = S.useState([]),
    o = `https://api.unsplash.com/search/photos?page=1&query=${t}&client_id=${JE}&orientation=landscape&per_page=20`,
    s = async () => {
      const c = (await (await fetch(o)).json()).results;
      i(c);
    },
    a = () => {
      s();
    },
    l = (u) => {
      e(u), console.log(u), A();
    };
  return V(PE, {
    onClose: A,
    children: Ue(pd, {
      children: [
        Ue('div', {
          children: [
            V(YE, {
              type: 'text',
              value: t,
              onChange: (u) => r(u.target.value),
              placeholder: 'Searching your Background Image',
            }),
            V(Tt, {
              type: 'submit',
              onClick: a,
              variant: 'yellow',
              children: 'Search',
            }),
          ],
        }),
        V($E, {
          children: n.map((u) =>
            V(
              jE,
              {
                src: u.urls.thumb,
                alt: u.alt_description,
                onClick: () => l(u.urls.thumb),
              },
              u.id
            )
          ),
        }),
      ],
    }),
  });
}
const YE = DA.input`
  width: 400px;
  height: 32px;
  margin: 4px;
  font-size: 15px;
  border: 0;
  border-radius: 4px;
  outline: none;
  padding-left: 10px;
  background-color: #fef9c3;
`,
  $E = DA.div`
  margin: 12px 4px;
`,
  jE = DA.img`
  padding: 4px;
`,
  vo = () => {
    let A = '#';
    return (
      (A += (Math.floor(Math.random() * 90 + 1) + 150)
        .toString(16)
        .padStart(2, '0')),
      (A += (Math.floor(Math.random() * 90 + 1) + 150)
        .toString(16)
        .padStart(2, '0')),
      (A += (Math.floor(Math.random() * 90 + 1) + 150)
        .toString(16)
        .padStart(2, '0')),
      A
    );
  },
  ZE = ['black', 'white'];
function qE({ setSelectedColor: A, setBackgroundImg: e }) {
  const [t, r] = S.useState(!1),
    n = () => {
      r(!0);
    },
    i = (s) => {
      A('color', s);
    },
    o = (s, a) => {
      A('gradient', s, a);
    };
  return Ue(A1, {
    children: [
      V('div', { children: 'Choose Your Background Image' }),
      ZE.map((s) =>
        V(Tt, { variant: s, onClick: () => i(Np[s]), children: s }, s)
      ),
      V(Tt, { variant: 'blue', onClick: () => i(vo()), children: 'random' }),
      V(OE, { onClick: () => o(vo(), vo()), children: 'random gradient' }),
      V(Tt, { variant: 'blue', onClick: n, children: 'Search Image' }),
      t && V(zE, { onClose: () => r(!1), setBackgroundImg: (s) => e(s) }),
    ],
  });
}
const A1 = DA.div`
  margin-bottom: 20px;
`;
function e1({ children: A }) {
  return V(t1, { children: A });
}
const t1 = DA.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function r1({ setTitle: A, setSubtitle: e }) {
  const t = S.useRef(null),
    r = S.useRef(null);
  return Ue(n1, {
    children: [
      V(rd, {
        ref: t,
        onChange: () => {
          var o;
          A((o = t.current) == null ? void 0 : o.value);
        },
        id: 'title',
        placeholder: 'Please enter your title.',
      }),
      V(rd, {
        ref: r,
        onChange: () => {
          var o;
          e((o = r.current) == null ? void 0 : o.value);
        },
        id: 'subtitle',
        placeholder: 'Please enter your subtitle.',
      }),
    ],
  });
}
const rd = DA.input`
  width: 200px;
  height: 32px;
  margin: 4px 12px 4px 0;
  font-size: 15px;
  border: 0;
  border-radius: 4px;
  outline: none;
  padding-left: 10px;
  background-color: #dbeafe;
`,
  n1 = DA.div`
  margin-bottom: 20px;
`,
  i1 = ['black', 'white'];
function o1({ setSelectedColor: A }) {
  const e = (t) => {
    A(t);
  };
  return Ue(s1, {
    children: [
      V('div', { children: 'Choose Your Text Color' }),
      Ue('div', {
        children: [
          i1.map((t) =>
            V(Tt, { variant: t, onClick: () => e(Np[t]), children: t }, t)
          ),
          V(Tt, {
            variant: 'blue',
            onClick: () => e(vo()),
            children: 'random',
          }),
        ],
      }),
    ],
  });
}
const s1 = DA.div`
  margin-bottom: 20px;
`;
function nd({ children: A, ...e }) {
  return V(a1, { ...e, children: A });
}
const a1 = DA.div`
  margin: 12px;
  font-size: ${(A) => (A.variant === 'title' ? '36px' : '18px')};
`,
  id = 'Please enter your title.',
  od = 'Please enter your subtitle.',
  sd = 'black',
  ad = 'white';
function l1() {
  const [A, e] = S.useState(ad),
    [t, r] = S.useState([sd]),
    [n, i] = S.useState(id),
    [o, s] = S.useState(od),
    [a, l] = S.useState(''),
    u = () => {
      const w = document.querySelector('#capture');
      w !== null &&
        Ly(w).then((g) => c(g.toDataURL('image/jpg'), '이미지.jpg'));
    },
    c = (w, g) => {
      let p = document.createElement('a');
      typeof p.download == 'string'
        ? ((p.href = w),
          (p.download = g),
          document.body.appendChild(p),
          p.click(),
          document.body.removeChild(p))
        : window.open(w);
    };
  return Ue(e1, {
    children: [
      V(c1, { children: 'Thumbnail Maker!' }),
      Ue(u1, {
        id: 'capture',
        textColor: A,
        backgroundColor: t,
        backgroundImage: a,
        children: [
          V(nd, { variant: 'title', children: n }),
          V(nd, { variant: 'subtitle', children: o }),
        ],
      }),
      Ue('div', {
        children: [
          V(qE, {
            setBackgroundImg: (w) => l(w),
            setSelectedColor: (w, g, p) => {
              w === 'color' && r([g]), w === 'gradient' && r([g, p]);
            },
          }),
          V(o1, { setSelectedColor: (w) => e(w) }),
          V(r1, { setTitle: (w) => i(w), setSubtitle: (w) => s(w) }),
        ],
      }),
      Ue('div', {
        children: [
          V(Tt, {
            onClick: () => {
              e(ad), r([sd]), i(id), s(od), l('');
            },
            variant: 'blue',
            children: 'Reset',
          }),
          V(Tt, { onClick: u, variant: 'blue', children: 'Image download' }),
        ],
      }),
    ],
  });
}
const u1 = DA.div`
  width: 640px;
  height: 360px;
  margin: 30px;
  background-color: ${(A) => A.backgroundColor[0]};
  background-image: url(${(A) => A.backgroundImage});
  background: linear-gradient(
    to bottom right,
    ${(A) => {
      var e;
      return ((e = A.backgroundColor) == null ? void 0 : e.length) === 2
        ? A.backgroundColor[0]
        : null;
    }},
    ${(A) => {
      var e;
      return ((e = A.backgroundColor) == null ? void 0 : e.length) === 2
        ? A.backgroundColor[1]
        : null;
    }}
  );

  color: ${(A) => A.textColor};
  font-weight: ${(A) => A.fontWeight};
  font-size: ${(A) => A.fontSize};
  font-style: ${(A) => A.fontStyle};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,
  c1 = DA.h1`
  font-size: 32px;
  margin-top: 30px;
  font-weight: 700;
  text-shadow: 0px 1px 1.5px rgba(0, 0, 0, 0.2);
`;
function f1() {
  return V(sC, {
    children: V('div', {
      id: 'modal-root',
      children: V('main', {
        children: Ue(oC, {
          children: [
            V(Vl, { path: '/', element: V(l1, {}) }),
            V(Vl, { path: '*', element: V(aC, {}) }),
          ],
        }),
      }),
    }),
  });
}
Xa.createRoot(document.getElementById('root')).render(
  V(Jr.StrictMode, { children: V(f1, {}) })
);
