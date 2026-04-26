var Us = Object.defineProperty;
var Vs = (e, t, r) =>
  t in e ? Us(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r);
var Ut = (e, t, r) => Vs(e, typeof t != 'symbol' ? t + '' : t, r);
import { j as T, O as hr, r as qs } from './index-Cws_IRuu.js';
import { r as h, o as Sn, R as ot } from './index-C5e9SFkp.js';
import './index-Dy23IbDT.js';
const So = (e) => e,
  Ks = () => {
    let e = So;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = So;
      },
    };
  },
  Wi = Ks();
function st(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return (
    t.forEach((n) => r.searchParams.append('args[]', n)),
    `Minified MUI error #${e}; visit ${r} for the full message.`
  );
}
function D(e) {
  if (typeof e != 'string') throw new Error(st(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Co(...e) {
  return e.reduce(
    (t, r) =>
      r == null
        ? t
        : function (...o) {
            (t.apply(this, o), r.apply(this, o));
          },
    () => {},
  );
}
function Di(e) {
  var t,
    r,
    n = '';
  if (typeof e == 'string' || typeof e == 'number') n += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (r = Di(e[t])) && (n && (n += ' '), (n += r));
    } else for (r in e) e[r] && (n && (n += ' '), (n += r));
  return n;
}
function U() {
  for (var e, t, r = 0, n = '', o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = Di(e)) && (n && (n += ' '), (n += t));
  return n;
}
function ne(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let s = '',
      a = !0;
    for (let l = 0; l < i.length; l += 1) {
      const u = i[l];
      u && ((s += (a === !0 ? '' : ' ') + t(u)), (a = !1), r && r[u] && (s += ' ' + r[u]));
    }
    n[o] = s;
  }
  return n;
}
var cn = { exports: {} },
  re = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wo;
function Gs() {
  if (wo) return re;
  wo = 1;
  var e = Symbol.for('react.transitional.element'),
    t = Symbol.for('react.portal'),
    r = Symbol.for('react.fragment'),
    n = Symbol.for('react.strict_mode'),
    o = Symbol.for('react.profiler'),
    i = Symbol.for('react.consumer'),
    s = Symbol.for('react.context'),
    a = Symbol.for('react.forward_ref'),
    l = Symbol.for('react.suspense'),
    u = Symbol.for('react.suspense_list'),
    d = Symbol.for('react.memo'),
    f = Symbol.for('react.lazy'),
    b = Symbol.for('react.view_transition'),
    y = Symbol.for('react.client.reference');
  function m(p) {
    if (typeof p == 'object' && p !== null) {
      var v = p.$$typeof;
      switch (v) {
        case e:
          switch (((p = p.type), p)) {
            case r:
            case o:
            case n:
            case l:
            case u:
            case b:
              return p;
            default:
              switch (((p = p && p.$$typeof), p)) {
                case s:
                case a:
                case f:
                case d:
                  return p;
                case i:
                  return p;
                default:
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return (
    (re.ContextConsumer = i),
    (re.ContextProvider = s),
    (re.Element = e),
    (re.ForwardRef = a),
    (re.Fragment = r),
    (re.Lazy = f),
    (re.Memo = d),
    (re.Portal = t),
    (re.Profiler = o),
    (re.StrictMode = n),
    (re.Suspense = l),
    (re.SuspenseList = u),
    (re.isContextConsumer = function (p) {
      return m(p) === i;
    }),
    (re.isContextProvider = function (p) {
      return m(p) === s;
    }),
    (re.isElement = function (p) {
      return typeof p == 'object' && p !== null && p.$$typeof === e;
    }),
    (re.isForwardRef = function (p) {
      return m(p) === a;
    }),
    (re.isFragment = function (p) {
      return m(p) === r;
    }),
    (re.isLazy = function (p) {
      return m(p) === f;
    }),
    (re.isMemo = function (p) {
      return m(p) === d;
    }),
    (re.isPortal = function (p) {
      return m(p) === t;
    }),
    (re.isProfiler = function (p) {
      return m(p) === o;
    }),
    (re.isStrictMode = function (p) {
      return m(p) === n;
    }),
    (re.isSuspense = function (p) {
      return m(p) === l;
    }),
    (re.isSuspenseList = function (p) {
      return m(p) === u;
    }),
    (re.isValidElementType = function (p) {
      return (
        typeof p == 'string' ||
        typeof p == 'function' ||
        p === r ||
        p === o ||
        p === n ||
        p === l ||
        p === u ||
        (typeof p == 'object' &&
          p !== null &&
          (p.$$typeof === f ||
            p.$$typeof === d ||
            p.$$typeof === s ||
            p.$$typeof === i ||
            p.$$typeof === a ||
            p.$$typeof === y ||
            p.getModuleId !== void 0))
      );
    }),
    (re.typeOf = m),
    re
  );
}
var To;
function Ys() {
  return (To || ((To = 1), (cn.exports = Gs())), cn.exports);
}
var _i = Ys();
function Ze(e) {
  if (typeof e != 'object' || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function Hi(e) {
  if (h.isValidElement(e) || _i.isValidElementType(e) || !Ze(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((r) => {
      t[r] = Hi(e[r]);
    }),
    t
  );
}
function Pe(e, t, r = { clone: !0 }) {
  const n = r.clone ? { ...e } : e;
  return (
    Ze(e) &&
      Ze(t) &&
      Object.keys(t).forEach((o) => {
        h.isValidElement(t[o]) || _i.isValidElementType(t[o])
          ? (n[o] = t[o])
          : Ze(t[o]) && Object.prototype.hasOwnProperty.call(e, o) && Ze(e[o])
            ? (n[o] = Pe(e[o], t[o], r))
            : r.clone
              ? (n[o] = Ze(t[o]) ? Hi(t[o]) : t[o])
              : (n[o] = t[o]);
      }),
    n
  );
}
function er(e, t) {
  return t ? Pe(e, t, { clone: !1 }) : e;
}
function Ro(e, t) {
  if (!e.containerQueries) return t;
  const r = Object.keys(t)
    .filter((n) => n.startsWith('@container'))
    .sort((n, o) => {
      var s, a;
      const i = /min-width:\s*([0-9.]+)/;
      return (
        +(((s = n.match(i)) == null ? void 0 : s[1]) || 0) -
        +(((a = o.match(i)) == null ? void 0 : a[1]) || 0)
      );
    });
  return r.length
    ? r.reduce(
        (n, o) => {
          const i = t[o];
          return (delete n[o], (n[o] = i), n);
        },
        { ...t },
      )
    : t;
}
function Xs(e, t) {
  return (
    t === '@' || (t.startsWith('@') && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/)))
  );
}
function Zs(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) return null;
  const [, n, o] = r,
    i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Qs(e) {
  const t = (i, s) => i.replace('@media', s ? `@container ${s}` : '@container');
  function r(i, s) {
    ((i.up = (...a) => t(e.breakpoints.up(...a), s)),
      (i.down = (...a) => t(e.breakpoints.down(...a), s)),
      (i.between = (...a) => t(e.breakpoints.between(...a), s)),
      (i.only = (...a) => t(e.breakpoints.only(...a), s)),
      (i.not = (...a) => {
        const l = t(e.breakpoints.not(...a), s);
        return l.includes('not all and')
          ? l
              .replace('not all and ', '')
              .replace('min-width:', 'width<')
              .replace('max-width:', 'width>')
              .replace('and', 'or')
          : l;
      }));
  }
  const n = {},
    o = (i) => (r(n, i), n);
  return (r(o), { ...e, containerQueries: o });
}
const Dr = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Eo = { keys: ['xs', 'sm', 'md', 'lg', 'xl'], up: (e) => `@media (min-width:${Dr[e]}px)` },
  Js = {
    containerQueries: (e) => ({
      up: (t) => {
        let r = typeof t == 'number' ? t : Dr[t] || t;
        return (
          typeof r == 'number' && (r = `${r}px`),
          e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`
        );
      },
    }),
  };
function at(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Eo;
    return t.reduce((s, a, l) => ((s[i.up(i.keys[l])] = r(t[l])), s), {});
  }
  if (typeof t == 'object') {
    const i = n.breakpoints || Eo;
    return Object.keys(t).reduce((s, a) => {
      if (Xs(i.keys, a)) {
        const l = Zs(n.containerQueries ? n : Js, a);
        l && (s[l] = r(t[a], a));
      } else if (Object.keys(i.values || Dr).includes(a)) {
        const l = i.up(a);
        s[l] = r(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return r(t);
}
function ea(e = {}) {
  var r;
  return (
    ((r = e.keys) == null
      ? void 0
      : r.reduce((n, o) => {
          const i = e.up(o);
          return ((n[i] = {}), n);
        }, {})) || {}
  );
}
function ko(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return ((!o || Object.keys(o).length === 0) && delete r[n], r);
  }, t);
}
function _r(e, t, r = !0) {
  if (!t || typeof t != 'string') return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split('.').reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (n != null) return n;
  }
  return t.split('.').reduce((n, o) => (n && n[o] != null ? n[o] : null), e);
}
function $r(e, t, r, n = r) {
  let o;
  return (
    typeof e == 'function' ? (o = e(r)) : Array.isArray(e) ? (o = e[r] || n) : (o = _r(e, r) || n),
    t && (o = t(o, n, e)),
    o
  );
}
function be(e) {
  const { prop: t, cssProperty: r = e.prop, themeKey: n, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        u = _r(l, n) || {};
      return at(s, a, (f) => {
        let b = $r(u, o, f);
        return (
          f === b &&
            typeof f == 'string' &&
            (b = $r(u, o, `${t}${f === 'default' ? '' : D(f)}`, f)),
          r === !1 ? b : { [r]: b }
        );
      });
    };
  return ((i.propTypes = {}), (i.filterProps = [t]), i);
}
function ta(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const ra = { m: 'margin', p: 'padding' },
  na = { t: 'Top', r: 'Right', b: 'Bottom', l: 'Left', x: ['Left', 'Right'], y: ['Top', 'Bottom'] },
  Io = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  oa = ta((e) => {
    if (e.length > 2)
      if (Io[e]) e = Io[e];
      else return [e];
    const [t, r] = e.split(''),
      n = ra[t],
      o = na[r] || '';
    return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
  }),
  jn = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd',
  ],
  Wn = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd',
  ];
[...jn, ...Wn];
function ar(e, t, r, n) {
  const o = _r(e, t, !0) ?? r;
  return typeof o == 'number' || typeof o == 'string'
    ? (i) =>
        typeof i == 'string'
          ? i
          : typeof o == 'string'
            ? o.startsWith('var(') && i === 0
              ? 0
              : o.startsWith('var(') && i === 1
                ? o
                : `calc(${i} * ${o})`
            : o * i
    : Array.isArray(o)
      ? (i) => {
          if (typeof i == 'string') return i;
          const s = Math.abs(i),
            a = o[s];
          return i >= 0
            ? a
            : typeof a == 'number'
              ? -a
              : typeof a == 'string' && a.startsWith('var(')
                ? `calc(-1 * ${a})`
                : `-${a}`;
        }
      : typeof o == 'function'
        ? o
        : () => {};
}
function Dn(e) {
  return ar(e, 'spacing', 8);
}
function lr(e, t) {
  return typeof t == 'string' || t == null ? t : e(t);
}
function ia(e, t) {
  return (r) => e.reduce((n, o) => ((n[o] = lr(t, r)), n), {});
}
function sa(e, t, r, n) {
  if (!t.includes(r)) return null;
  const o = oa(r),
    i = ia(o, n),
    s = e[r];
  return at(e, s, i);
}
function Ui(e, t) {
  const r = Dn(e.theme);
  return Object.keys(e)
    .map((n) => sa(e, t, n, r))
    .reduce(er, {});
}
function ge(e) {
  return Ui(e, jn);
}
ge.propTypes = {};
ge.filterProps = jn;
function ye(e) {
  return Ui(e, Wn);
}
ye.propTypes = {};
ye.filterProps = Wn;
function Hr(...e) {
  const t = e.reduce(
      (n, o) => (
        o.filterProps.forEach((i) => {
          n[i] = o;
        }),
        n
      ),
      {},
    ),
    r = (n) => Object.keys(n).reduce((o, i) => (t[i] ? er(o, t[i](n)) : o), {});
  return ((r.propTypes = {}), (r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), [])), r);
}
function We(e) {
  return typeof e != 'number' ? e : `${e}px solid`;
}
function _e(e, t) {
  return be({ prop: e, themeKey: 'borders', transform: t });
}
const aa = _e('border', We),
  la = _e('borderTop', We),
  ca = _e('borderRight', We),
  ua = _e('borderBottom', We),
  da = _e('borderLeft', We),
  pa = _e('borderColor'),
  fa = _e('borderTopColor'),
  ma = _e('borderRightColor'),
  ha = _e('borderBottomColor'),
  ga = _e('borderLeftColor'),
  ya = _e('outline', We),
  ba = _e('outlineColor'),
  Ur = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = ar(e.theme, 'shape.borderRadius', 4),
        r = (n) => ({ borderRadius: lr(t, n) });
      return at(e, e.borderRadius, r);
    }
    return null;
  };
Ur.propTypes = {};
Ur.filterProps = ['borderRadius'];
Hr(aa, la, ca, ua, da, pa, fa, ma, ha, ga, Ur, ya, ba);
const Vr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ar(e.theme, 'spacing', 8),
      r = (n) => ({ gap: lr(t, n) });
    return at(e, e.gap, r);
  }
  return null;
};
Vr.propTypes = {};
Vr.filterProps = ['gap'];
const qr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ar(e.theme, 'spacing', 8),
      r = (n) => ({ columnGap: lr(t, n) });
    return at(e, e.columnGap, r);
  }
  return null;
};
qr.propTypes = {};
qr.filterProps = ['columnGap'];
const Kr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ar(e.theme, 'spacing', 8),
      r = (n) => ({ rowGap: lr(t, n) });
    return at(e, e.rowGap, r);
  }
  return null;
};
Kr.propTypes = {};
Kr.filterProps = ['rowGap'];
const va = be({ prop: 'gridColumn' }),
  xa = be({ prop: 'gridRow' }),
  Sa = be({ prop: 'gridAutoFlow' }),
  Ca = be({ prop: 'gridAutoColumns' }),
  wa = be({ prop: 'gridAutoRows' }),
  Ta = be({ prop: 'gridTemplateColumns' }),
  Ra = be({ prop: 'gridTemplateRows' }),
  Ea = be({ prop: 'gridTemplateAreas' }),
  ka = be({ prop: 'gridArea' });
Hr(Vr, qr, Kr, va, xa, Sa, Ca, wa, Ta, Ra, Ea, ka);
function Lt(e, t) {
  return t === 'grey' ? t : e;
}
const Ia = be({ prop: 'color', themeKey: 'palette', transform: Lt }),
  Pa = be({ prop: 'bgcolor', cssProperty: 'backgroundColor', themeKey: 'palette', transform: Lt }),
  $a = be({ prop: 'backgroundColor', themeKey: 'palette', transform: Lt });
Hr(Ia, Pa, $a);
function Fe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Aa = be({ prop: 'width', transform: Fe }),
  _n = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (r) => {
        var o, i, s, a, l;
        const n =
          ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) ==
          null
            ? void 0
            : s[r]) || Dr[r];
        return n
          ? ((l = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : l.unit) !==
            'px'
            ? { maxWidth: `${n}${e.theme.breakpoints.unit}` }
            : { maxWidth: n }
          : { maxWidth: Fe(r) };
      };
      return at(e, e.maxWidth, t);
    }
    return null;
  };
_n.filterProps = ['maxWidth'];
const Ma = be({ prop: 'minWidth', transform: Fe }),
  Oa = be({ prop: 'height', transform: Fe }),
  Ba = be({ prop: 'maxHeight', transform: Fe }),
  La = be({ prop: 'minHeight', transform: Fe });
be({ prop: 'size', cssProperty: 'width', transform: Fe });
be({ prop: 'size', cssProperty: 'height', transform: Fe });
const Na = be({ prop: 'boxSizing' });
Hr(Aa, _n, Ma, Oa, Ba, La, Na);
const cr = {
  border: { themeKey: 'borders', transform: We },
  borderTop: { themeKey: 'borders', transform: We },
  borderRight: { themeKey: 'borders', transform: We },
  borderBottom: { themeKey: 'borders', transform: We },
  borderLeft: { themeKey: 'borders', transform: We },
  borderColor: { themeKey: 'palette' },
  borderTopColor: { themeKey: 'palette' },
  borderRightColor: { themeKey: 'palette' },
  borderBottomColor: { themeKey: 'palette' },
  borderLeftColor: { themeKey: 'palette' },
  outline: { themeKey: 'borders', transform: We },
  outlineColor: { themeKey: 'palette' },
  borderRadius: { themeKey: 'shape.borderRadius', style: Ur },
  color: { themeKey: 'palette', transform: Lt },
  bgcolor: { themeKey: 'palette', cssProperty: 'backgroundColor', transform: Lt },
  backgroundColor: { themeKey: 'palette', transform: Lt },
  p: { style: ye },
  pt: { style: ye },
  pr: { style: ye },
  pb: { style: ye },
  pl: { style: ye },
  px: { style: ye },
  py: { style: ye },
  padding: { style: ye },
  paddingTop: { style: ye },
  paddingRight: { style: ye },
  paddingBottom: { style: ye },
  paddingLeft: { style: ye },
  paddingX: { style: ye },
  paddingY: { style: ye },
  paddingInline: { style: ye },
  paddingInlineStart: { style: ye },
  paddingInlineEnd: { style: ye },
  paddingBlock: { style: ye },
  paddingBlockStart: { style: ye },
  paddingBlockEnd: { style: ye },
  m: { style: ge },
  mt: { style: ge },
  mr: { style: ge },
  mb: { style: ge },
  ml: { style: ge },
  mx: { style: ge },
  my: { style: ge },
  margin: { style: ge },
  marginTop: { style: ge },
  marginRight: { style: ge },
  marginBottom: { style: ge },
  marginLeft: { style: ge },
  marginX: { style: ge },
  marginY: { style: ge },
  marginInline: { style: ge },
  marginInlineStart: { style: ge },
  marginInlineEnd: { style: ge },
  marginBlock: { style: ge },
  marginBlockStart: { style: ge },
  marginBlockEnd: { style: ge },
  displayPrint: { cssProperty: !1, transform: (e) => ({ '@media print': { display: e } }) },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: Vr },
  rowGap: { style: Kr },
  columnGap: { style: qr },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: 'zIndex' },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: 'shadows' },
  width: { transform: Fe },
  maxWidth: { style: _n },
  minWidth: { transform: Fe },
  height: { transform: Fe },
  maxHeight: { transform: Fe },
  minHeight: { transform: Fe },
  boxSizing: {},
  font: { themeKey: 'font' },
  fontFamily: { themeKey: 'typography' },
  fontSize: { themeKey: 'typography' },
  fontStyle: { themeKey: 'typography' },
  fontWeight: { themeKey: 'typography' },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: 'typography' },
};
function Fa(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []),
    r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function za(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function ja() {
  function e(r, n, o, i) {
    const s = { [r]: n, theme: o },
      a = i[r];
    if (!a) return { [r]: n };
    const { cssProperty: l = r, themeKey: u, transform: d, style: f } = a;
    if (n == null) return null;
    if (u === 'typography' && n === 'inherit') return { [r]: n };
    const b = _r(o, u) || {};
    return f
      ? f(s)
      : at(s, n, (m) => {
          let p = $r(b, d, m);
          return (
            m === p &&
              typeof m == 'string' &&
              (p = $r(b, d, `${r}${m === 'default' ? '' : D(m)}`, m)),
            l === !1 ? p : { [l]: p }
          );
        });
  }
  function t(r) {
    const { sx: n, theme: o = {}, nested: i } = r || {};
    if (!n) return null;
    const s = o.unstable_sxConfig ?? cr;
    function a(l) {
      let u = l;
      if (typeof l == 'function') u = l(o);
      else if (typeof l != 'object') return l;
      if (!u) return null;
      const d = ea(o.breakpoints),
        f = Object.keys(d);
      let b = d;
      return (
        Object.keys(u).forEach((y) => {
          const m = za(u[y], o);
          if (m != null)
            if (typeof m == 'object')
              if (s[y]) b = er(b, e(y, m, o, s));
              else {
                const p = at({ theme: o }, m, (v) => ({ [y]: v }));
                Fa(p, m) ? (b[y] = t({ sx: m, theme: o, nested: !0 })) : (b = er(b, p));
              }
            else b = er(b, e(y, m, o, s));
        }),
        !i && o.modularCssLayers ? { '@layer sx': Ro(o, ko(f, b)) } : Ro(o, ko(f, b))
      );
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const St = ja();
St.filterProps = ['sx'];
const Wa = (e) => {
  var n;
  const t = { systemProps: {}, otherProps: {} },
    r = ((n = e == null ? void 0 : e.theme) == null ? void 0 : n.unstable_sxConfig) ?? cr;
  return (
    Object.keys(e).forEach((o) => {
      r[o] ? (t.systemProps[o] = e[o]) : (t.otherProps[o] = e[o]);
    }),
    t
  );
};
function Vi(e) {
  const { sx: t, ...r } = e,
    { systemProps: n, otherProps: o } = Wa(r);
  let i;
  return (
    Array.isArray(t)
      ? (i = [n, ...t])
      : typeof t == 'function'
        ? (i = (...s) => {
            const a = t(...s);
            return Ze(a) ? { ...n, ...a } : n;
          })
        : (i = { ...n, ...t }),
    { ...o, sx: i }
  );
}
function Ar() {
  return (
    (Ar = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ar.apply(null, arguments)
  );
}
function Da(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function _a(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var Ha = (function () {
    function e(r) {
      var n = this;
      ((this._insertTag = function (o) {
        var i;
        (n.tags.length === 0
          ? n.insertionPoint
            ? (i = n.insertionPoint.nextSibling)
            : n.prepend
              ? (i = n.container.firstChild)
              : (i = n.before)
          : (i = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(o, i),
          n.tags.push(o));
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null));
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(_a(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = Da(o);
          try {
            i.insertRule(n, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        (this.tags.forEach(function (n) {
          var o;
          return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0));
      }),
      e
    );
  })(),
  Ie = '-ms-',
  Mr = '-moz-',
  Y = '-webkit-',
  qi = 'comm',
  Hn = 'rule',
  Un = 'decl',
  Ua = '@import',
  Ki = '@keyframes',
  Va = '@layer',
  qa = Math.abs,
  Gr = String.fromCharCode,
  Ka = Object.assign;
function Ga(e, t) {
  return ke(e, 0) ^ 45
    ? (((((((t << 2) ^ ke(e, 0)) << 2) ^ ke(e, 1)) << 2) ^ ke(e, 2)) << 2) ^ ke(e, 3)
    : 0;
}
function Gi(e) {
  return e.trim();
}
function Ya(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function X(e, t, r) {
  return e.replace(t, r);
}
function Cn(e, t) {
  return e.indexOf(t);
}
function ke(e, t) {
  return e.charCodeAt(t) | 0;
}
function nr(e, t, r) {
  return e.slice(t, r);
}
function Ye(e) {
  return e.length;
}
function Vn(e) {
  return e.length;
}
function gr(e, t) {
  return (t.push(e), e);
}
function Xa(e, t) {
  return e.map(t).join('');
}
var Yr = 1,
  Ft = 1,
  Yi = 0,
  Oe = 0,
  ve = 0,
  jt = '';
function Xr(e, t, r, n, o, i, s) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: i,
    line: Yr,
    column: Ft,
    length: s,
    return: '',
  };
}
function Vt(e, t) {
  return Ka(Xr('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function Za() {
  return ve;
}
function Qa() {
  return ((ve = Oe > 0 ? ke(jt, --Oe) : 0), Ft--, ve === 10 && ((Ft = 1), Yr--), ve);
}
function ze() {
  return ((ve = Oe < Yi ? ke(jt, Oe++) : 0), Ft++, ve === 10 && ((Ft = 1), Yr++), ve);
}
function Je() {
  return ke(jt, Oe);
}
function Er() {
  return Oe;
}
function ur(e, t) {
  return nr(jt, e, t);
}
function or(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Xi(e) {
  return ((Yr = Ft = 1), (Yi = Ye((jt = e))), (Oe = 0), []);
}
function Zi(e) {
  return ((jt = ''), e);
}
function kr(e) {
  return Gi(ur(Oe - 1, wn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ja(e) {
  for (; (ve = Je()) && ve < 33; ) ze();
  return or(e) > 2 || or(ve) > 3 ? '' : ' ';
}
function el(e, t) {
  for (; --t && ze() && !(ve < 48 || ve > 102 || (ve > 57 && ve < 65) || (ve > 70 && ve < 97)); );
  return ur(e, Er() + (t < 6 && Je() == 32 && ze() == 32));
}
function wn(e) {
  for (; ze(); )
    switch (ve) {
      case e:
        return Oe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && wn(ve);
        break;
      case 40:
        e === 41 && wn(e);
        break;
      case 92:
        ze();
        break;
    }
  return Oe;
}
function tl(e, t) {
  for (; ze() && e + ve !== 57; ) if (e + ve === 84 && Je() === 47) break;
  return '/*' + ur(t, Oe - 1) + '*' + Gr(e === 47 ? e : ze());
}
function rl(e) {
  for (; !or(Je()); ) ze();
  return ur(e, Oe);
}
function nl(e) {
  return Zi(Ir('', null, null, null, [''], (e = Xi(e)), 0, [0], e));
}
function Ir(e, t, r, n, o, i, s, a, l) {
  for (
    var u = 0,
      d = 0,
      f = s,
      b = 0,
      y = 0,
      m = 0,
      p = 1,
      v = 1,
      C = 1,
      R = 0,
      x = '',
      g = o,
      S = i,
      w = n,
      $ = x;
    v;
  )
    switch (((m = R), (R = ze()))) {
      case 40:
        if (m != 108 && ke($, f - 1) == 58) {
          Cn(($ += X(kr(R), '&', '&\f')), '&\f') != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        $ += kr(R);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        $ += Ja(m);
        break;
      case 92:
        $ += el(Er() - 1, 7);
        continue;
      case 47:
        switch (Je()) {
          case 42:
          case 47:
            gr(ol(tl(ze(), Er()), t, r), l);
            break;
          default:
            $ += '/';
        }
        break;
      case 123 * p:
        a[u++] = Ye($) * C;
      case 125 * p:
      case 59:
      case 0:
        switch (R) {
          case 0:
          case 125:
            v = 0;
          case 59 + d:
            (C == -1 && ($ = X($, /\f/g, '')),
              y > 0 &&
                Ye($) - f &&
                gr(y > 32 ? $o($ + ';', n, r, f - 1) : $o(X($, ' ', '') + ';', n, r, f - 2), l));
            break;
          case 59:
            $ += ';';
          default:
            if ((gr((w = Po($, t, r, u, d, o, a, x, (g = []), (S = []), f)), i), R === 123))
              if (d === 0) Ir($, t, w, w, g, i, f, a, S);
              else
                switch (b === 99 && ke($, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ir(
                      e,
                      w,
                      w,
                      n && gr(Po(e, w, w, 0, 0, o, a, x, o, (g = []), f), S),
                      o,
                      S,
                      f,
                      a,
                      n ? g : S,
                    );
                    break;
                  default:
                    Ir($, w, w, w, [''], S, 0, a, S);
                }
        }
        ((u = d = y = 0), (p = C = 1), (x = $ = ''), (f = s));
        break;
      case 58:
        ((f = 1 + Ye($)), (y = m));
      default:
        if (p < 1) {
          if (R == 123) --p;
          else if (R == 125 && p++ == 0 && Qa() == 125) continue;
        }
        switch ((($ += Gr(R)), R * p)) {
          case 38:
            C = d > 0 ? 1 : (($ += '\f'), -1);
            break;
          case 44:
            ((a[u++] = (Ye($) - 1) * C), (C = 1));
            break;
          case 64:
            (Je() === 45 && ($ += kr(ze())), (b = Je()), (d = f = Ye((x = $ += rl(Er())))), R++);
            break;
          case 45:
            m === 45 && Ye($) == 2 && (p = 0);
        }
    }
  return i;
}
function Po(e, t, r, n, o, i, s, a, l, u, d) {
  for (var f = o - 1, b = o === 0 ? i : [''], y = Vn(b), m = 0, p = 0, v = 0; m < n; ++m)
    for (var C = 0, R = nr(e, f + 1, (f = qa((p = s[m])))), x = e; C < y; ++C)
      (x = Gi(p > 0 ? b[C] + ' ' + R : X(R, /&\f/g, b[C]))) && (l[v++] = x);
  return Xr(e, t, r, o === 0 ? Hn : a, l, u, d);
}
function ol(e, t, r) {
  return Xr(e, t, r, qi, Gr(Za()), nr(e, 2, -2), 0);
}
function $o(e, t, r, n) {
  return Xr(e, t, r, Un, nr(e, 0, n), nr(e, n + 1, -1), n);
}
function Nt(e, t) {
  for (var r = '', n = Vn(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || '';
  return r;
}
function il(e, t, r, n) {
  switch (e.type) {
    case Va:
      if (e.children.length) break;
    case Ua:
    case Un:
      return (e.return = e.return || e.value);
    case qi:
      return '';
    case Ki:
      return (e.return = e.value + '{' + Nt(e.children, n) + '}');
    case Hn:
      e.value = e.props.join(',');
  }
  return Ye((r = Nt(e.children, n))) ? (e.return = e.value + '{' + r + '}') : '';
}
function sl(e) {
  var t = Vn(e);
  return function (r, n, o, i) {
    for (var s = '', a = 0; a < t; a++) s += e[a](r, n, o, i) || '';
    return s;
  };
}
function al(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Qi(e) {
  var t = Object.create(null);
  return function (r) {
    return (t[r] === void 0 && (t[r] = e(r)), t[r]);
  };
}
var ll = function (t, r, n) {
    for (var o = 0, i = 0; (o = i), (i = Je()), o === 38 && i === 12 && (r[n] = 1), !or(i); ) ze();
    return ur(t, Oe);
  },
  cl = function (t, r) {
    var n = -1,
      o = 44;
    do
      switch (or(o)) {
        case 0:
          (o === 38 && Je() === 12 && (r[n] = 1), (t[n] += ll(Oe - 1, r, n)));
          break;
        case 2:
          t[n] += kr(o);
          break;
        case 4:
          if (o === 44) {
            ((t[++n] = Je() === 58 ? '&\f' : ''), (r[n] = t[n].length));
            break;
          }
        default:
          t[n] += Gr(o);
      }
    while ((o = ze()));
    return t;
  },
  ul = function (t, r) {
    return Zi(cl(Xi(t), r));
  },
  Ao = new WeakMap(),
  dl = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line;
        n.type !== 'rule';
      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Ao.get(n)) && !o) {
        Ao.set(t, !0);
        for (var i = [], s = ul(r, i), a = n.props, l = 0, u = 0; l < s.length; l++)
          for (var d = 0; d < a.length; d++, u++)
            t.props[u] = i[l] ? s[l].replace(/&\f/g, a[d]) : a[d] + ' ' + s[l];
      }
    }
  },
  pl = function (t) {
    if (t.type === 'decl') {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && ((t.return = ''), (t.value = ''));
    }
  };
function Ji(e, t) {
  switch (Ga(e, t)) {
    case 5103:
      return Y + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Y + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Y + e + Mr + e + Ie + e + e;
    case 6828:
    case 4268:
      return Y + e + Ie + e + e;
    case 6165:
      return Y + e + Ie + 'flex-' + e + e;
    case 5187:
      return Y + e + X(e, /(\w+).+(:[^]+)/, Y + 'box-$1$2' + Ie + 'flex-$1$2') + e;
    case 5443:
      return Y + e + Ie + 'flex-item-' + X(e, /flex-|-self/, '') + e;
    case 4675:
      return Y + e + Ie + 'flex-line-pack' + X(e, /align-content|flex-|-self/, '') + e;
    case 5548:
      return Y + e + Ie + X(e, 'shrink', 'negative') + e;
    case 5292:
      return Y + e + Ie + X(e, 'basis', 'preferred-size') + e;
    case 6060:
      return Y + 'box-' + X(e, '-grow', '') + Y + e + Ie + X(e, 'grow', 'positive') + e;
    case 4554:
      return Y + X(e, /([^-])(transform)/g, '$1' + Y + '$2') + e;
    case 6187:
      return X(X(X(e, /(zoom-|grab)/, Y + '$1'), /(image-set)/, Y + '$1'), e, '') + e;
    case 5495:
    case 3959:
      return X(e, /(image-set\([^]*)/, Y + '$1$`$1');
    case 4968:
      return (
        X(
          X(e, /(.+:)(flex-)?(.*)/, Y + 'box-pack:$3' + Ie + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify',
        ) +
        Y +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return X(e, /(.+)-inline(.+)/, Y + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ye(e) - 1 - t > 6)
        switch (ke(e, t + 1)) {
          case 109:
            if (ke(e, t + 4) !== 45) break;
          case 102:
            return (
              X(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' + Y + '$2-$3$1' + Mr + (ke(e, t + 3) == 108 ? '$3' : '$2-$3'),
              ) + e
            );
          case 115:
            return ~Cn(e, 'stretch') ? Ji(X(e, 'stretch', 'fill-available'), t) + e : e;
        }
      break;
    case 4949:
      if (ke(e, t + 1) !== 115) break;
    case 6444:
      switch (ke(e, Ye(e) - 3 - (~Cn(e, '!important') && 10))) {
        case 107:
          return X(e, ':', ':' + Y) + e;
        case 101:
          return (
            X(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                Y +
                (ke(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                Y +
                '$2$3$1' +
                Ie +
                '$2box$3',
            ) + e
          );
      }
      break;
    case 5936:
      switch (ke(e, t + 11)) {
        case 114:
          return Y + e + Ie + X(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return Y + e + Ie + X(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return Y + e + Ie + X(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return Y + e + Ie + e + e;
  }
  return e;
}
var fl = function (t, r, n, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Un:
          t.return = Ji(t.value, t.length);
          break;
        case Ki:
          return Nt([Vt(t, { value: X(t.value, '@', '@' + Y) })], o);
        case Hn:
          if (t.length)
            return Xa(t.props, function (i) {
              switch (Ya(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return Nt([Vt(t, { props: [X(i, /:(read-\w+)/, ':' + Mr + '$1')] })], o);
                case '::placeholder':
                  return Nt(
                    [
                      Vt(t, { props: [X(i, /:(plac\w+)/, ':' + Y + 'input-$1')] }),
                      Vt(t, { props: [X(i, /:(plac\w+)/, ':' + Mr + '$1')] }),
                      Vt(t, { props: [X(i, /:(plac\w+)/, Ie + 'input-$1')] }),
                    ],
                    o,
                  );
              }
              return '';
            });
      }
  },
  ml = [fl],
  hl = function (t) {
    var r = t.key;
    if (r === 'css') {
      var n = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(n, function (p) {
        var v = p.getAttribute('data-emotion');
        v.indexOf(' ') !== -1 && (document.head.appendChild(p), p.setAttribute('data-s', ''));
      });
    }
    var o = t.stylisPlugins || ml,
      i = {},
      s,
      a = [];
    ((s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (p) {
          for (var v = p.getAttribute('data-emotion').split(' '), C = 1; C < v.length; C++)
            i[v[C]] = !0;
          a.push(p);
        },
      ));
    var l,
      u = [dl, pl];
    {
      var d,
        f = [
          il,
          al(function (p) {
            d.insert(p);
          }),
        ],
        b = sl(u.concat(o, f)),
        y = function (v) {
          return Nt(nl(v), b);
        };
      l = function (v, C, R, x) {
        ((d = R), y(v ? v + '{' + C.styles + '}' : C.styles), x && (m.inserted[C.name] = !0));
      };
    }
    var m = {
      key: r,
      sheet: new Ha({
        key: r,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return (m.sheet.hydrate(a), m);
  },
  un = { exports: {} },
  Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mo;
function gl() {
  if (Mo) return Q;
  Mo = 1;
  var e = typeof Symbol == 'function' && Symbol.for,
    t = e ? Symbol.for('react.element') : 60103,
    r = e ? Symbol.for('react.portal') : 60106,
    n = e ? Symbol.for('react.fragment') : 60107,
    o = e ? Symbol.for('react.strict_mode') : 60108,
    i = e ? Symbol.for('react.profiler') : 60114,
    s = e ? Symbol.for('react.provider') : 60109,
    a = e ? Symbol.for('react.context') : 60110,
    l = e ? Symbol.for('react.async_mode') : 60111,
    u = e ? Symbol.for('react.concurrent_mode') : 60111,
    d = e ? Symbol.for('react.forward_ref') : 60112,
    f = e ? Symbol.for('react.suspense') : 60113,
    b = e ? Symbol.for('react.suspense_list') : 60120,
    y = e ? Symbol.for('react.memo') : 60115,
    m = e ? Symbol.for('react.lazy') : 60116,
    p = e ? Symbol.for('react.block') : 60121,
    v = e ? Symbol.for('react.fundamental') : 60117,
    C = e ? Symbol.for('react.responder') : 60118,
    R = e ? Symbol.for('react.scope') : 60119;
  function x(S) {
    if (typeof S == 'object' && S !== null) {
      var w = S.$$typeof;
      switch (w) {
        case t:
          switch (((S = S.type), S)) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case f:
              return S;
            default:
              switch (((S = S && S.$$typeof), S)) {
                case a:
                case d:
                case m:
                case y:
                case s:
                  return S;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function g(S) {
    return x(S) === u;
  }
  return (
    (Q.AsyncMode = l),
    (Q.ConcurrentMode = u),
    (Q.ContextConsumer = a),
    (Q.ContextProvider = s),
    (Q.Element = t),
    (Q.ForwardRef = d),
    (Q.Fragment = n),
    (Q.Lazy = m),
    (Q.Memo = y),
    (Q.Portal = r),
    (Q.Profiler = i),
    (Q.StrictMode = o),
    (Q.Suspense = f),
    (Q.isAsyncMode = function (S) {
      return g(S) || x(S) === l;
    }),
    (Q.isConcurrentMode = g),
    (Q.isContextConsumer = function (S) {
      return x(S) === a;
    }),
    (Q.isContextProvider = function (S) {
      return x(S) === s;
    }),
    (Q.isElement = function (S) {
      return typeof S == 'object' && S !== null && S.$$typeof === t;
    }),
    (Q.isForwardRef = function (S) {
      return x(S) === d;
    }),
    (Q.isFragment = function (S) {
      return x(S) === n;
    }),
    (Q.isLazy = function (S) {
      return x(S) === m;
    }),
    (Q.isMemo = function (S) {
      return x(S) === y;
    }),
    (Q.isPortal = function (S) {
      return x(S) === r;
    }),
    (Q.isProfiler = function (S) {
      return x(S) === i;
    }),
    (Q.isStrictMode = function (S) {
      return x(S) === o;
    }),
    (Q.isSuspense = function (S) {
      return x(S) === f;
    }),
    (Q.isValidElementType = function (S) {
      return (
        typeof S == 'string' ||
        typeof S == 'function' ||
        S === n ||
        S === u ||
        S === i ||
        S === o ||
        S === f ||
        S === b ||
        (typeof S == 'object' &&
          S !== null &&
          (S.$$typeof === m ||
            S.$$typeof === y ||
            S.$$typeof === s ||
            S.$$typeof === a ||
            S.$$typeof === d ||
            S.$$typeof === v ||
            S.$$typeof === C ||
            S.$$typeof === R ||
            S.$$typeof === p))
      );
    }),
    (Q.typeOf = x),
    Q
  );
}
var Oo;
function yl() {
  return (Oo || ((Oo = 1), (un.exports = gl())), un.exports);
}
var dn, Bo;
function bl() {
  if (Bo) return dn;
  Bo = 1;
  var e = yl(),
    t = {
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
    r = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    n = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
    o = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    i = {};
  ((i[e.ForwardRef] = n), (i[e.Memo] = o));
  function s(m) {
    return e.isMemo(m) ? o : i[m.$$typeof] || t;
  }
  var a = Object.defineProperty,
    l = Object.getOwnPropertyNames,
    u = Object.getOwnPropertySymbols,
    d = Object.getOwnPropertyDescriptor,
    f = Object.getPrototypeOf,
    b = Object.prototype;
  function y(m, p, v) {
    if (typeof p != 'string') {
      if (b) {
        var C = f(p);
        C && C !== b && y(m, C, v);
      }
      var R = l(p);
      u && (R = R.concat(u(p)));
      for (var x = s(m), g = s(p), S = 0; S < R.length; ++S) {
        var w = R[S];
        if (!r[w] && !(v && v[w]) && !(g && g[w]) && !(x && x[w])) {
          var $ = d(p, w);
          try {
            a(m, w, $);
          } catch {}
        }
      }
    }
    return m;
  }
  return ((dn = y), dn);
}
bl();
var vl = !0;
function es(e, t, r) {
  var n = '';
  return (
    r.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : o && (n += o + ' ');
    }),
    n
  );
}
var qn = function (t, r, n) {
    var o = t.key + '-' + r.name;
    (n === !1 || vl === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
  },
  Kn = function (t, r, n) {
    qn(t, r, n);
    var o = t.key + '-' + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do (t.insert(r === i ? '.' + o : '', i, t.sheet, !0), (i = i.next));
      while (i !== void 0);
    }
  };
function xl(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    ((r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      ((t ^= e.charCodeAt(n) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var Sl = {
    animationIterationCount: 1,
    aspectRatio: 1,
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
    scale: 1,
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
  },
  Cl = /[A-Z]|^ms/g,
  wl = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  ts = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Lo = function (t) {
    return t != null && typeof t != 'boolean';
  },
  pn = Qi(function (e) {
    return ts(e) ? e : e.replace(Cl, '-$&').toLowerCase();
  }),
  No = function (t, r) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof r == 'string')
          return r.replace(wl, function (n, o, i) {
            return ((Xe = { name: o, styles: i, next: Xe }), o);
          });
    }
    return Sl[t] !== 1 && !ts(t) && typeof r == 'number' && r !== 0 ? r + 'px' : r;
  };
function ir(e, t, r) {
  if (r == null) return '';
  var n = r;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof r) {
    case 'boolean':
      return '';
    case 'object': {
      var o = r;
      if (o.anim === 1) return ((Xe = { name: o.name, styles: o.styles, next: Xe }), o.name);
      var i = r;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            ((Xe = { name: s.name, styles: s.styles, next: Xe }), (s = s.next));
        var a = i.styles + ';';
        return a;
      }
      return Tl(e, t, r);
    }
    case 'function': {
      if (e !== void 0) {
        var l = Xe,
          u = r(e);
        return ((Xe = l), ir(e, t, u));
      }
      break;
    }
  }
  var d = r;
  if (t == null) return d;
  var f = t[d];
  return f !== void 0 ? f : d;
}
function Tl(e, t, r) {
  var n = '';
  if (Array.isArray(r)) for (var o = 0; o < r.length; o++) n += ir(e, t, r[o]) + ';';
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != 'object') {
        var a = s;
        t != null && t[a] !== void 0
          ? (n += i + '{' + t[a] + '}')
          : Lo(a) && (n += pn(i) + ':' + No(i, a) + ';');
      } else if (Array.isArray(s) && typeof s[0] == 'string' && (t == null || t[s[0]] === void 0))
        for (var l = 0; l < s.length; l++) Lo(s[l]) && (n += pn(i) + ':' + No(i, s[l]) + ';');
      else {
        var u = ir(e, t, s);
        switch (i) {
          case 'animation':
          case 'animationName': {
            n += pn(i) + ':' + u + ';';
            break;
          }
          default:
            n += i + '{' + u + '}';
        }
      }
    }
  return n;
}
var Fo = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Xe;
function dr(e, t, r) {
  if (e.length === 1 && typeof e[0] == 'object' && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    o = '';
  Xe = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) ((n = !1), (o += ir(r, t, i)));
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (((o += ir(r, t, e[a])), n)) {
      var l = i;
      o += l[a];
    }
  Fo.lastIndex = 0;
  for (var u = '', d; (d = Fo.exec(o)) !== null; ) u += '-' + d[1];
  var f = xl(o) + u;
  return { name: f, styles: o, next: Xe };
}
var Rl = function (t) {
    return t();
  },
  rs = Sn.useInsertionEffect ? Sn.useInsertionEffect : !1,
  ns = rs || Rl,
  zo = rs || h.useLayoutEffect,
  os = h.createContext(typeof HTMLElement < 'u' ? hl({ key: 'css' }) : null);
os.Provider;
var Gn = function (t) {
    return h.forwardRef(function (r, n) {
      var o = h.useContext(os);
      return t(r, o, n);
    });
  },
  Zr = h.createContext({}),
  Yn = {}.hasOwnProperty,
  Tn = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  El = function (t, r) {
    var n = {};
    for (var o in r) Yn.call(r, o) && (n[o] = r[o]);
    return ((n[Tn] = t), n);
  },
  kl = function (t) {
    var r = t.cache,
      n = t.serialized,
      o = t.isStringTag;
    return (
      qn(r, n, o),
      ns(function () {
        return Kn(r, n, o);
      }),
      null
    );
  },
  Il = Gn(function (e, t, r) {
    var n = e.css;
    typeof n == 'string' && t.registered[n] !== void 0 && (n = t.registered[n]);
    var o = e[Tn],
      i = [n],
      s = '';
    typeof e.className == 'string'
      ? (s = es(t.registered, i, e.className))
      : e.className != null && (s = e.className + ' ');
    var a = dr(i, void 0, h.useContext(Zr));
    s += t.key + '-' + a.name;
    var l = {};
    for (var u in e) Yn.call(e, u) && u !== 'css' && u !== Tn && (l[u] = e[u]);
    return (
      (l.className = s),
      r && (l.ref = r),
      h.createElement(
        h.Fragment,
        null,
        h.createElement(kl, { cache: t, serialized: a, isStringTag: typeof o == 'string' }),
        h.createElement(o, l),
      )
    );
  }),
  Pl = Il,
  jo = function (t, r) {
    var n = arguments;
    if (r == null || !Yn.call(r, 'css')) return h.createElement.apply(void 0, n);
    var o = n.length,
      i = new Array(o);
    ((i[0] = Pl), (i[1] = El(t, r)));
    for (var s = 2; s < o; s++) i[s] = n[s];
    return h.createElement.apply(null, i);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(jo || (jo = {}));
var $l = Gn(function (e, t) {
  var r = e.styles,
    n = dr([r], void 0, h.useContext(Zr)),
    o = h.useRef();
  return (
    zo(
      function () {
        var i = t.key + '-global',
          s = new t.sheet.constructor({
            key: i,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          a = !1,
          l = document.querySelector('style[data-emotion="' + i + ' ' + n.name + '"]');
        return (
          t.sheet.tags.length && (s.before = t.sheet.tags[0]),
          l !== null && ((a = !0), l.setAttribute('data-emotion', i), s.hydrate([l])),
          (o.current = [s, a]),
          function () {
            s.flush();
          }
        );
      },
      [t],
    ),
    zo(
      function () {
        var i = o.current,
          s = i[0],
          a = i[1];
        if (a) {
          i[1] = !1;
          return;
        }
        if ((n.next !== void 0 && Kn(t, n.next, !0), s.tags.length)) {
          var l = s.tags[s.tags.length - 1].nextElementSibling;
          ((s.before = l), s.flush());
        }
        t.insert('', n, s, !1);
      },
      [t, n.name],
    ),
    null
  );
});
function Xn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return dr(t);
}
function pr() {
  var e = Xn.apply(void 0, arguments),
    t = 'animation-' + e.name;
  return {
    name: t,
    styles: '@keyframes ' + t + '{' + e.styles + '}',
    anim: 1,
    toString: function () {
      return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
    },
  };
}
var Al =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Ml = Qi(function (e) {
    return (
      Al.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
    );
  }),
  Ol = Ml,
  Bl = function (t) {
    return t !== 'theme';
  },
  Wo = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? Ol : Bl;
  },
  Do = function (t, r, n) {
    var o;
    if (r) {
      var i = r.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return (typeof o != 'function' && n && (o = t.__emotion_forwardProp), o);
  },
  Ll = function (t) {
    var r = t.cache,
      n = t.serialized,
      o = t.isStringTag;
    return (
      qn(r, n, o),
      ns(function () {
        return Kn(r, n, o);
      }),
      null
    );
  },
  Nl = function e(t, r) {
    var n = t.__emotion_real === t,
      o = (n && t.__emotion_base) || t,
      i,
      s;
    r !== void 0 && ((i = r.label), (s = r.target));
    var a = Do(t, r, n),
      l = a || Wo(o),
      u = !l('as');
    return function () {
      var d = arguments,
        f = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if ((i !== void 0 && f.push('label:' + i + ';'), d[0] == null || d[0].raw === void 0))
        f.push.apply(f, d);
      else {
        var b = d[0];
        f.push(b[0]);
        for (var y = d.length, m = 1; m < y; m++) f.push(d[m], b[m]);
      }
      var p = Gn(function (v, C, R) {
        var x = (u && v.as) || o,
          g = '',
          S = [],
          w = v;
        if (v.theme == null) {
          w = {};
          for (var $ in v) w[$] = v[$];
          w.theme = h.useContext(Zr);
        }
        typeof v.className == 'string'
          ? (g = es(C.registered, S, v.className))
          : v.className != null && (g = v.className + ' ');
        var M = dr(f.concat(S), C.registered, w);
        ((g += C.key + '-' + M.name), s !== void 0 && (g += ' ' + s));
        var L = u && a === void 0 ? Wo(x) : l,
          N = {};
        for (var B in v) (u && B === 'as') || (L(B) && (N[B] = v[B]));
        return (
          (N.className = g),
          R && (N.ref = R),
          h.createElement(
            h.Fragment,
            null,
            h.createElement(Ll, { cache: C, serialized: M, isStringTag: typeof x == 'string' }),
            h.createElement(x, N),
          )
        );
      });
      return (
        (p.displayName =
          i !== void 0
            ? i
            : 'Styled(' +
              (typeof o == 'string' ? o : o.displayName || o.name || 'Component') +
              ')'),
        (p.defaultProps = t.defaultProps),
        (p.__emotion_real = p),
        (p.__emotion_base = o),
        (p.__emotion_styles = f),
        (p.__emotion_forwardProp = a),
        Object.defineProperty(p, 'toString', {
          value: function () {
            return '.' + s;
          },
        }),
        (p.withComponent = function (v, C) {
          var R = e(v, Ar({}, r, C, { shouldForwardProp: Do(p, C, !0) }));
          return R.apply(void 0, f);
        }),
        p
      );
    };
  },
  Fl = [
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
    'tspan',
  ],
  Rn = Nl.bind(null);
Fl.forEach(function (e) {
  Rn[e] = Rn(e);
});
function zl(e) {
  return e == null || Object.keys(e).length === 0;
}
function jl(e) {
  const { styles: t, defaultTheme: r = {} } = e,
    n = typeof t == 'function' ? (o) => t(zl(o) ? r : o) : t;
  return T.jsx($l, { styles: n });
}
function is(e, t) {
  return Rn(e, t);
}
function Wl(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const _o = [];
function ut(e) {
  return ((_o[0] = e), dr(_o));
}
const Dl = (e) => {
  const t = Object.keys(e).map((r) => ({ key: r, val: e[r] })) || [];
  return (t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({ ...r, [n.key]: n.val }), {}));
};
function _l(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: r = 'px',
      step: n = 5,
      ...o
    } = e,
    i = Dl(t),
    s = Object.keys(i);
  function a(b) {
    return `@media (min-width:${typeof t[b] == 'number' ? t[b] : b}${r})`;
  }
  function l(b) {
    return `@media (max-width:${(typeof t[b] == 'number' ? t[b] : b) - n / 100}${r})`;
  }
  function u(b, y) {
    const m = s.indexOf(y);
    return `@media (min-width:${typeof t[b] == 'number' ? t[b] : b}${r}) and (max-width:${(m !== -1 && typeof t[s[m]] == 'number' ? t[s[m]] : y) - n / 100}${r})`;
  }
  function d(b) {
    return s.indexOf(b) + 1 < s.length ? u(b, s[s.indexOf(b) + 1]) : a(b);
  }
  function f(b) {
    const y = s.indexOf(b);
    return y === 0
      ? a(s[1])
      : y === s.length - 1
        ? l(s[y])
        : u(b, s[s.indexOf(b) + 1]).replace('@media', '@media not all and');
  }
  return { keys: s, values: i, up: a, down: l, between: u, only: d, not: f, unit: r, ...o };
}
const Hl = { borderRadius: 4 };
function ss(e = 8, t = Dn({ spacing: e })) {
  if (e.mui) return e;
  const r = (...n) =>
    (n.length === 0 ? [1] : n)
      .map((i) => {
        const s = t(i);
        return typeof s == 'number' ? `${s}px` : s;
      })
      .join(' ');
  return ((r.mui = !0), r);
}
function Ul(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != 'function')
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === '&'
      ? t
      : ((o.includes('data-') || o.includes('.')) && (o = `*:where(${o.replace(/\s*&$/, '')}) &`),
        { [o]: t });
  }
  return r.palette.mode === e ? t : {};
}
function Zn(e = {}, ...t) {
  const { breakpoints: r = {}, palette: n = {}, spacing: o, shape: i = {}, ...s } = e,
    a = _l(r),
    l = ss(o);
  let u = Pe(
    {
      breakpoints: a,
      direction: 'ltr',
      components: {},
      palette: { mode: 'light', ...n },
      spacing: l,
      shape: { ...Hl, ...i },
    },
    s,
  );
  return (
    (u = Qs(u)),
    (u.applyStyles = Ul),
    (u = t.reduce((d, f) => Pe(d, f), u)),
    (u.unstable_sxConfig = { ...cr, ...(s == null ? void 0 : s.unstable_sxConfig) }),
    (u.unstable_sx = function (f) {
      return St({ sx: f, theme: this });
    }),
    u
  );
}
function Vl(e) {
  return Object.keys(e).length === 0;
}
function ql(e = null) {
  const t = h.useContext(Zr);
  return !t || Vl(t) ? e : t;
}
const Kl = Zn();
function Qn(e = Kl) {
  return ql(e);
}
function fn(e) {
  const t = ut(e);
  return e !== t && t.styles
    ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t)
    : e;
}
function Gl({ styles: e, themeId: t, defaultTheme: r = {} }) {
  const n = Qn(r),
    o = (t && n[t]) || n;
  let i = typeof e == 'function' ? e(o) : e;
  return (
    o.modularCssLayers &&
      (Array.isArray(i) ? (i = i.map((s) => fn(typeof s == 'function' ? s(o) : s))) : (i = fn(i))),
    T.jsx(jl, { styles: i })
  );
}
function Yl(e = {}) {
  const {
      themeId: t,
      defaultTheme: r,
      defaultClassName: n = 'MuiBox-root',
      generateClassName: o,
    } = e,
    i = is('div', { shouldForwardProp: (a) => a !== 'theme' && a !== 'sx' && a !== 'as' })(St);
  return h.forwardRef(function (l, u) {
    const d = Qn(r),
      { className: f, component: b = 'div', ...y } = Vi(l);
    return T.jsx(i, {
      as: b,
      ref: u,
      className: U(f, o ? o(n) : n),
      theme: (t && d[t]) || d,
      ...y,
    });
  });
}
const Xl = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected',
};
function oe(e, t, r = 'Mui') {
  const n = Xl[t];
  return n ? `${r}-${n}` : `${Wi.generate(e)}-${t}`;
}
function te(e, t, r = 'Mui') {
  const n = {};
  return (
    t.forEach((o) => {
      n[o] = oe(e, o, r);
    }),
    n
  );
}
function as(e) {
  const { variants: t, ...r } = e,
    n = { variants: t, style: ut(r), isProcessed: !0 };
  return (
    n.style === r ||
      (t &&
        t.forEach((o) => {
          typeof o.style != 'function' && (o.style = ut(o.style));
        })),
    n
  );
}
const Zl = Zn();
function mn(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
function bt(e, t) {
  return (
    t &&
      e &&
      typeof e == 'object' &&
      e.styles &&
      !e.styles.startsWith('@layer') &&
      (e.styles = `@layer ${t}{${String(e.styles)}}`),
    e
  );
}
function Ql(e) {
  return e ? (t, r) => r[e] : null;
}
function Jl(e, t, r) {
  e.theme = rc(e.theme) ? r : e.theme[t] || e.theme;
}
function Pr(e, t, r) {
  const n = typeof t == 'function' ? t(e) : t;
  if (Array.isArray(n)) return n.flatMap((o) => Pr(e, o, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let o;
    if (n.isProcessed) o = r ? bt(n.style, r) : n.style;
    else {
      const { variants: i, ...s } = n;
      o = r ? bt(ut(s), r) : s;
    }
    return ls(e, n.variants, [o], r);
  }
  return n != null && n.isProcessed ? (r ? bt(ut(n.style), r) : n.style) : r ? bt(ut(n), r) : n;
}
function ls(e, t, r = [], n = void 0) {
  var i;
  let o;
  e: for (let s = 0; s < t.length; s += 1) {
    const a = t[s];
    if (typeof a.props == 'function') {
      if ((o ?? (o = { ...e, ...e.ownerState, ownerState: e.ownerState }), !a.props(o))) continue;
    } else
      for (const l in a.props)
        if (e[l] !== a.props[l] && ((i = e.ownerState) == null ? void 0 : i[l]) !== a.props[l])
          continue e;
    typeof a.style == 'function'
      ? (o ?? (o = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        r.push(n ? bt(ut(a.style(o)), n) : a.style(o)))
      : r.push(n ? bt(ut(a.style), n) : a.style);
  }
  return r;
}
function ec(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Zl,
    rootShouldForwardProp: n = mn,
    slotShouldForwardProp: o = mn,
  } = e;
  function i(a) {
    Jl(a, t, r);
  }
  return (a, l = {}) => {
    Wl(a, (w) => w.filter(($) => $ !== St));
    const {
        name: u,
        slot: d,
        skipVariantsResolver: f,
        skipSx: b,
        overridesResolver: y = Ql(oc(d)),
        ...m
      } = l,
      p = (u && u.startsWith('Mui')) || d ? 'components' : 'custom',
      v = f !== void 0 ? f : (d && d !== 'Root' && d !== 'root') || !1,
      C = b || !1;
    let R = mn;
    d === 'Root' || d === 'root' ? (R = n) : d ? (R = o) : nc(a) && (R = void 0);
    const x = is(a, { shouldForwardProp: R, label: tc(), ...m }),
      g = (w) => {
        if (w.__emotion_real === w) return w;
        if (typeof w == 'function')
          return function (M) {
            return Pr(M, w, M.theme.modularCssLayers ? p : void 0);
          };
        if (Ze(w)) {
          const $ = as(w);
          return function (L) {
            return $.variants
              ? Pr(L, $, L.theme.modularCssLayers ? p : void 0)
              : L.theme.modularCssLayers
                ? bt($.style, p)
                : $.style;
          };
        }
        return w;
      },
      S = (...w) => {
        const $ = [],
          M = w.map(g),
          L = [];
        if (
          ($.push(i),
          u &&
            y &&
            L.push(function (P) {
              var F, H;
              const I =
                (H = (F = P.theme.components) == null ? void 0 : F[u]) == null
                  ? void 0
                  : H.styleOverrides;
              if (!I) return null;
              const A = {};
              for (const O in I) A[O] = Pr(P, I[O], P.theme.modularCssLayers ? 'theme' : void 0);
              return y(P, A);
            }),
          u &&
            !v &&
            L.push(function (P) {
              var A, F;
              const E = P.theme,
                I =
                  (F = (A = E == null ? void 0 : E.components) == null ? void 0 : A[u]) == null
                    ? void 0
                    : F.variants;
              return I ? ls(P, I, [], P.theme.modularCssLayers ? 'theme' : void 0) : null;
            }),
          C || L.push(St),
          Array.isArray(M[0]))
        ) {
          const c = M.shift(),
            P = new Array($.length).fill(''),
            E = new Array(L.length).fill('');
          let I;
          ((I = [...P, ...c, ...E]), (I.raw = [...P, ...c.raw, ...E]), $.unshift(I));
        }
        const N = [...$, ...M, ...L],
          B = x(...N);
        return (a.muiName && (B.muiName = a.muiName), B);
      };
    return (x.withConfig && (S.withConfig = x.withConfig), S);
  };
}
function tc(e, t) {
  return void 0;
}
function rc(e) {
  for (const t in e) return !1;
  return !0;
}
function nc(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
function oc(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Or(e, t, r = !1) {
  const n = { ...t };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const i = o;
      if (i === 'components' || i === 'slots') n[i] = { ...e[i], ...n[i] };
      else if (i === 'componentsProps' || i === 'slotProps') {
        const s = e[i],
          a = t[i];
        if (!a) n[i] = s || {};
        else if (!s) n[i] = a;
        else {
          n[i] = { ...a };
          for (const l in s)
            if (Object.prototype.hasOwnProperty.call(s, l)) {
              const u = l;
              n[i][u] = Or(s[u], a[u], r);
            }
        }
      } else
        i === 'className' && r && t.className
          ? (n.className = U(e == null ? void 0 : e.className, t == null ? void 0 : t.className))
          : i === 'style' && r && t.style
            ? (n.style = { ...(e == null ? void 0 : e.style), ...(t == null ? void 0 : t.style) })
            : n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
const dt = typeof window < 'u' ? h.useLayoutEffect : h.useEffect;
function ic(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Jn(e, t = 0, r = 1) {
  return ic(e, t, r);
}
function sc(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g');
  let r = e.match(t);
  return (
    r && r[0].length === 1 && (r = r.map((n) => n + n)),
    r
      ? `rgb${r.length === 4 ? 'a' : ''}(${r.map((n, o) => (o < 3 ? parseInt(n, 16) : Math.round((parseInt(n, 16) / 255) * 1e3) / 1e3)).join(', ')})`
      : ''
  );
}
function pt(e) {
  if (e.type) return e;
  if (e.charAt(0) === '#') return pt(sc(e));
  const t = e.indexOf('('),
    r = e.substring(0, t);
  if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(r)) throw new Error(st(9, e));
  let n = e.substring(t + 1, e.length - 1),
    o;
  if (r === 'color') {
    if (
      ((n = n.split(' ')),
      (o = n.shift()),
      n.length === 4 && n[3].charAt(0) === '/' && (n[3] = n[3].slice(1)),
      !['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].includes(o))
    )
      throw new Error(st(10, o));
  } else n = n.split(',');
  return ((n = n.map((i) => parseFloat(i))), { type: r, values: n, colorSpace: o });
}
const ac = (e) => {
    const t = pt(e);
    return t.values
      .slice(0, 3)
      .map((r, n) => (t.type.includes('hsl') && n !== 0 ? `${r}%` : r))
      .join(' ');
  },
  Zt = (e, t) => {
    try {
      return ac(e);
    } catch {
      return e;
    }
  };
function Qr(e) {
  const { type: t, colorSpace: r } = e;
  let { values: n } = e;
  return (
    t.includes('rgb')
      ? (n = n.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.includes('hsl') && ((n[1] = `${n[1]}%`), (n[2] = `${n[2]}%`)),
    t.includes('color') ? (n = `${r} ${n.join(' ')}`) : (n = `${n.join(', ')}`),
    `${t}(${n})`
  );
}
function cs(e) {
  e = pt(e);
  const { values: t } = e,
    r = t[0],
    n = t[1] / 100,
    o = t[2] / 100,
    i = n * Math.min(o, 1 - o),
    s = (u, d = (u + r / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let a = 'rgb';
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return (e.type === 'hsla' && ((a += 'a'), l.push(t[3])), Qr({ type: a, values: l }));
}
function En(e) {
  e = pt(e);
  let t = e.type === 'hsl' || e.type === 'hsla' ? pt(cs(e)).values : e.values;
  return (
    (t = t.map(
      (r) => (
        e.type !== 'color' && (r /= 255),
        r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4
      ),
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function lc(e, t) {
  const r = En(e),
    n = En(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Br(e, t) {
  return (
    (e = pt(e)),
    (t = Jn(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Qr(e)
  );
}
function ft(e, t, r) {
  try {
    return Br(e, t);
  } catch {
    return e;
  }
}
function Jr(e, t) {
  if (((e = pt(e)), (t = Jn(t)), e.type.includes('hsl'))) e.values[2] *= 1 - t;
  else if (e.type.includes('rgb') || e.type.includes('color'))
    for (let r = 0; r < 3; r += 1) e.values[r] *= 1 - t;
  return Qr(e);
}
function J(e, t, r) {
  try {
    return Jr(e, t);
  } catch {
    return e;
  }
}
function en(e, t) {
  if (((e = pt(e)), (t = Jn(t)), e.type.includes('hsl'))) e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes('rgb'))
    for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes('color'))
    for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
  return Qr(e);
}
function ee(e, t, r) {
  try {
    return en(e, t);
  } catch {
    return e;
  }
}
function cc(e, t = 0.15) {
  return En(e) > 0.5 ? Jr(e, t) : en(e, t);
}
function yr(e, t, r) {
  try {
    return cc(e, t);
  } catch {
    return e;
  }
}
const uc = h.createContext(),
  dc = () => h.useContext(uc) ?? !1,
  pc = h.createContext(void 0);
function fc(e) {
  const { theme: t, name: r, props: n } = e;
  if (!t || !t.components || !t.components[r]) return n;
  const o = t.components[r];
  return o.defaultProps
    ? Or(o.defaultProps, n, t.components.mergeClassNameAndStyle)
    : !o.styleOverrides && !o.variants
      ? Or(o, n, t.components.mergeClassNameAndStyle)
      : n;
}
function mc({ props: e, name: t }) {
  const r = h.useContext(pc);
  return fc({ props: e, name: t, theme: { components: r } });
}
let Ho = 0;
function hc(e) {
  const [t, r] = h.useState(e),
    n = e || t;
  return (
    h.useEffect(() => {
      t == null && ((Ho += 1), r(`mui-${Ho}`));
    }, [t]),
    n
  );
}
const gc = { ...Sn },
  Uo = gc.useId;
function tn(e) {
  if (Uo !== void 0) {
    const t = Uo();
    return e ?? t;
  }
  return hc(e);
}
const Vo = { theme: void 0 };
function yc(e) {
  let t, r;
  return function (o) {
    let i = t;
    return (
      (i === void 0 || o.theme !== r) &&
        ((Vo.theme = o.theme), (i = as(e(Vo))), (t = i), (r = o.theme)),
      i
    );
  };
}
function bc(e = '') {
  function t(...n) {
    if (!n.length) return '';
    const o = n[0];
    return typeof o == 'string' &&
      !o.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/,
      )
      ? `, var(--${e ? `${e}-` : ''}${o}${t(...n.slice(1))})`
      : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ''}${n}${t(...o)})`;
}
const qo = (e, t, r, n = []) => {
    let o = e;
    t.forEach((i, s) => {
      s === t.length - 1
        ? Array.isArray(o)
          ? (o[Number(i)] = r)
          : o && typeof o == 'object' && (o[i] = r)
        : o && typeof o == 'object' && (o[i] || (o[i] = n.includes(i) ? [] : {}), (o = o[i]));
    });
  },
  vc = (e, t, r) => {
    function n(o, i = [], s = []) {
      Object.entries(o).forEach(([a, l]) => {
        (!r || (r && !r([...i, a]))) &&
          l != null &&
          (typeof l == 'object' && Object.keys(l).length > 0
            ? n(l, [...i, a], Array.isArray(l) ? [...s, a] : s)
            : t([...i, a], l, s));
      });
    }
    n(e);
  },
  xc = (e, t) =>
    typeof t == 'number'
      ? ['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some((n) => e.includes(n)) ||
        e[e.length - 1].toLowerCase().includes('opacity')
        ? t
        : `${t}px`
      : t;
function hn(e, t) {
  const { prefix: r, shouldSkipGeneratingVar: n } = t || {},
    o = {},
    i = {},
    s = {};
  return (
    vc(
      e,
      (a, l, u) => {
        if ((typeof l == 'string' || typeof l == 'number') && (!n || !n(a, l))) {
          const d = `--${r ? `${r}-` : ''}${a.join('-')}`,
            f = xc(a, l);
          (Object.assign(o, { [d]: f }), qo(i, a, `var(${d})`, u), qo(s, a, `var(${d}, ${f})`, u));
        }
      },
      (a) => a[0] === 'vars',
    ),
    { css: o, vars: i, varsWithDefaults: s }
  );
}
function Sc(e, t = {}) {
  const {
      getSelector: r = C,
      disableCssColorScheme: n,
      colorSchemeSelector: o,
      enableContrastVars: i,
    } = t,
    { colorSchemes: s = {}, components: a, defaultColorScheme: l = 'light', ...u } = e,
    { vars: d, css: f, varsWithDefaults: b } = hn(u, t);
  let y = b;
  const m = {},
    { [l]: p, ...v } = s;
  if (
    (Object.entries(v || {}).forEach(([g, S]) => {
      const { vars: w, css: $, varsWithDefaults: M } = hn(S, t);
      ((y = Pe(y, M)), (m[g] = { css: $, vars: w }));
    }),
    p)
  ) {
    const { css: g, vars: S, varsWithDefaults: w } = hn(p, t);
    ((y = Pe(y, w)), (m[l] = { css: g, vars: S }));
  }
  function C(g, S) {
    var $, M;
    let w = o;
    if (
      (o === 'class' && (w = '.%s'),
      o === 'data' && (w = '[data-%s]'),
      o != null && o.startsWith('data-') && !o.includes('%s') && (w = `[${o}="%s"]`),
      g)
    ) {
      if (w === 'media')
        return e.defaultColorScheme === g
          ? ':root'
          : {
              [`@media (prefers-color-scheme: ${((M = ($ = s[g]) == null ? void 0 : $.palette) == null ? void 0 : M.mode) || g})`]:
                { ':root': S },
            };
      if (w)
        return e.defaultColorScheme === g
          ? `:root, ${w.replace('%s', String(g))}`
          : w.replace('%s', String(g));
    }
    return ':root';
  }
  return {
    vars: y,
    generateThemeVars: () => {
      let g = { ...d };
      return (
        Object.entries(m).forEach(([, { vars: S }]) => {
          g = Pe(g, S);
        }),
        g
      );
    },
    generateStyleSheets: () => {
      var L, N;
      const g = [],
        S = e.defaultColorScheme || 'light';
      function w(B, c) {
        Object.keys(c).length && g.push(typeof B == 'string' ? { [B]: { ...c } } : B);
      }
      w(r(void 0, { ...f }), f);
      const { [S]: $, ...M } = m;
      if ($) {
        const { css: B } = $,
          c = (N = (L = s[S]) == null ? void 0 : L.palette) == null ? void 0 : N.mode,
          P = !n && c ? { colorScheme: c, ...B } : { ...B };
        w(r(S, { ...P }), P);
      }
      return (
        Object.entries(M).forEach(([B, { css: c }]) => {
          var I, A;
          const P = (A = (I = s[B]) == null ? void 0 : I.palette) == null ? void 0 : A.mode,
            E = !n && P ? { colorScheme: P, ...c } : { ...c };
          w(r(B, { ...E }), E);
        }),
        i &&
          g.push({
            ':root': {
              '--__l-threshold': '0.7',
              '--__l': 'clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)',
              '--__a': 'clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)',
            },
          }),
        g
      );
    },
  };
}
function Cc(e) {
  return function (r) {
    return e === 'media'
      ? `@media (prefers-color-scheme: ${r})`
      : e
        ? e.startsWith('data-') && !e.includes('%s')
          ? `[${e}="${r}"] &`
          : e === 'class'
            ? `.${r} &`
            : e === 'data'
              ? `[data-${r}] &`
              : `${e.replace('%s', r)} &`
        : '&';
  };
}
function gn(e, t) {
  var r, n, o;
  return (
    h.isValidElement(e) &&
    t.indexOf(
      e.type.muiName ??
        ((o = (n = (r = e.type) == null ? void 0 : r._payload) == null ? void 0 : n.value) == null
          ? void 0
          : o.muiName),
    ) !== -1
  );
}
const sr = { black: '#000', white: '#fff' },
  wc = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  It = {
    50: '#f3e5f5',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    700: '#7b1fa2',
  },
  Pt = { 300: '#e57373', 400: '#ef5350', 500: '#f44336', 700: '#d32f2f', 800: '#c62828' },
  qt = { 300: '#ffb74d', 400: '#ffa726', 500: '#ff9800', 700: '#f57c00', 900: '#e65100' },
  $t = { 50: '#e3f2fd', 200: '#90caf9', 400: '#42a5f5', 700: '#1976d2', 800: '#1565c0' },
  At = { 300: '#4fc3f7', 400: '#29b6f6', 500: '#03a9f4', 700: '#0288d1', 900: '#01579b' },
  Mt = {
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
  };
function us() {
  return {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: sr.white, default: sr.white },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
}
const ds = us();
function ps() {
  return {
    text: {
      primary: sr.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: sr.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
}
const kn = ps();
function Ko(e, t, r, n) {
  const o = n.light || n,
    i = n.dark || n * 1.5;
  e[t] ||
    (e.hasOwnProperty(r)
      ? (e[t] = e[r])
      : t === 'light'
        ? (e.light = en(e.main, o))
        : t === 'dark' && (e.dark = Jr(e.main, i)));
}
function Go(e, t, r, n, o) {
  const i = o.light || o,
    s = o.dark || o * 1.5;
  t[r] ||
    (t.hasOwnProperty(n)
      ? (t[r] = t[n])
      : r === 'light'
        ? (t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)`)
        : r === 'dark' &&
          (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function Tc(e = 'light') {
  return e === 'dark'
    ? { main: $t[200], light: $t[50], dark: $t[400] }
    : { main: $t[700], light: $t[400], dark: $t[800] };
}
function Rc(e = 'light') {
  return e === 'dark'
    ? { main: It[200], light: It[50], dark: It[400] }
    : { main: It[500], light: It[300], dark: It[700] };
}
function Ec(e = 'light') {
  return e === 'dark'
    ? { main: Pt[500], light: Pt[300], dark: Pt[700] }
    : { main: Pt[700], light: Pt[400], dark: Pt[800] };
}
function kc(e = 'light') {
  return e === 'dark'
    ? { main: At[400], light: At[300], dark: At[700] }
    : { main: At[700], light: At[500], dark: At[900] };
}
function Ic(e = 'light') {
  return e === 'dark'
    ? { main: Mt[400], light: Mt[300], dark: Mt[700] }
    : { main: Mt[800], light: Mt[500], dark: Mt[900] };
}
function Pc(e = 'light') {
  return e === 'dark'
    ? { main: qt[400], light: qt[300], dark: qt[700] }
    : { main: '#ed6c02', light: qt[500], dark: qt[900] };
}
function $c(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function eo(e) {
  const {
      mode: t = 'light',
      contrastThreshold: r = 3,
      tonalOffset: n = 0.2,
      colorSpace: o,
      ...i
    } = e,
    s = e.primary || Tc(t),
    a = e.secondary || Rc(t),
    l = e.error || Ec(t),
    u = e.info || kc(t),
    d = e.success || Ic(t),
    f = e.warning || Pc(t);
  function b(v) {
    return o ? $c(v) : lc(v, kn.text.primary) >= r ? kn.text.primary : ds.text.primary;
  }
  const y = ({
    color: v,
    name: C,
    mainShade: R = 500,
    lightShade: x = 300,
    darkShade: g = 700,
  }) => {
    if (((v = { ...v }), !v.main && v[R] && (v.main = v[R]), !v.hasOwnProperty('main')))
      throw new Error(st(11, C ? ` (${C})` : '', R));
    if (typeof v.main != 'string')
      throw new Error(st(12, C ? ` (${C})` : '', JSON.stringify(v.main)));
    return (
      o
        ? (Go(o, v, 'light', x, n), Go(o, v, 'dark', g, n))
        : (Ko(v, 'light', x, n), Ko(v, 'dark', g, n)),
      v.contrastText || (v.contrastText = b(v.main)),
      v
    );
  };
  let m;
  return (
    t === 'light' ? (m = us()) : t === 'dark' && (m = ps()),
    Pe(
      {
        common: { ...sr },
        mode: t,
        primary: y({ color: s, name: 'primary' }),
        secondary: y({
          color: a,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        error: y({ color: l, name: 'error' }),
        warning: y({ color: f, name: 'warning' }),
        info: y({ color: u, name: 'info' }),
        success: y({ color: d, name: 'success' }),
        grey: wc,
        contrastThreshold: r,
        getContrastText: b,
        augmentColor: y,
        tonalOffset: n,
        ...m,
      },
      i,
    )
  );
}
function Ac(e) {
  const t = {};
  return (
    Object.entries(e).forEach((n) => {
      const [o, i] = n;
      typeof i == 'object' &&
        (t[o] =
          `${i.fontStyle ? `${i.fontStyle} ` : ''}${i.fontVariant ? `${i.fontVariant} ` : ''}${i.fontWeight ? `${i.fontWeight} ` : ''}${i.fontStretch ? `${i.fontStretch} ` : ''}${i.fontSize || ''}${i.lineHeight ? `/${i.lineHeight} ` : ''}${i.fontFamily || ''}`);
    }),
    t
  );
}
function Mc(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
      [e.up('sm')]: { minHeight: 64 },
    },
    ...t,
  };
}
function Oc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Yo = { textTransform: 'uppercase' },
  Xo = '"Roboto", "Helvetica", "Arial", sans-serif';
function Bc(e, t) {
  const {
      fontFamily: r = Xo,
      fontSize: n = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: i = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: a = 700,
      htmlFontSize: l = 16,
      allVariants: u,
      pxToRem: d,
      ...f
    } = typeof t == 'function' ? t(e) : t,
    b = n / 14,
    y = d || ((v) => `${(v / l) * b}rem`),
    m = (v, C, R, x, g) => ({
      fontFamily: r,
      fontWeight: v,
      fontSize: y(C),
      lineHeight: R,
      ...(r === Xo ? { letterSpacing: `${Oc(x / C)}em` } : {}),
      ...g,
      ...u,
    }),
    p = {
      h1: m(o, 96, 1.167, -1.5),
      h2: m(o, 60, 1.2, -0.5),
      h3: m(i, 48, 1.167, 0),
      h4: m(i, 34, 1.235, 0.25),
      h5: m(i, 24, 1.334, 0),
      h6: m(s, 20, 1.6, 0.15),
      subtitle1: m(i, 16, 1.75, 0.15),
      subtitle2: m(s, 14, 1.57, 0.1),
      body1: m(i, 16, 1.5, 0.15),
      body2: m(i, 14, 1.43, 0.15),
      button: m(s, 14, 1.75, 0.4, Yo),
      caption: m(i, 12, 1.66, 0.4),
      overline: m(i, 12, 2.66, 1, Yo),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
      },
    };
  return Pe(
    {
      htmlFontSize: l,
      pxToRem: y,
      fontFamily: r,
      fontSize: n,
      fontWeightLight: o,
      fontWeightRegular: i,
      fontWeightMedium: s,
      fontWeightBold: a,
      ...p,
    },
    f,
    { clone: !1 },
  );
}
const Lc = 0.2,
  Nc = 0.14,
  Fc = 0.12;
function fe(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Lc})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Nc})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Fc})`,
  ].join(',');
}
const zc = [
    'none',
    fe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    fe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    fe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    fe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    fe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    fe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    fe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    fe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    fe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    fe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    fe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    fe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    fe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    fe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    fe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    fe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    fe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    fe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    fe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    fe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    fe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    fe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    fe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    fe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  jc = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  Wc = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Zo(e) {
  return `${Math.round(e)}ms`;
}
function Dc(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function _c(e) {
  const t = { ...jc, ...e.easing },
    r = { ...Wc, ...e.duration };
  return {
    getAutoHeightDuration: Dc,
    create: (o = ['all'], i = {}) => {
      const { duration: s = r.standard, easing: a = t.easeInOut, delay: l = 0, ...u } = i;
      return (Array.isArray(o) ? o : [o])
        .map(
          (d) =>
            `${d} ${typeof s == 'string' ? s : Zo(s)} ${a} ${typeof l == 'string' ? l : Zo(l)}`,
        )
        .join(',');
    },
    ...e,
    easing: t,
    duration: r,
  };
}
const Hc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function Uc(e) {
  return (
    Ze(e) ||
    typeof e > 'u' ||
    typeof e == 'string' ||
    typeof e == 'boolean' ||
    typeof e == 'number' ||
    Array.isArray(e)
  );
}
function fs(e = {}) {
  const t = { ...e };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [s, a] = o[i];
      !Uc(a) || s.startsWith('unstable_') ? delete n[s] : Ze(a) && ((n[s] = { ...a }), r(n[s]));
    }
  }
  return (
    r(t),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function Qo(e) {
  return typeof e == 'number' ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const Vc = (e) => {
  if (!Number.isNaN(+e)) return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t) return 0;
  let r = 0;
  for (let n = 0; n < t.length; n += 1) r += +t[n];
  return r;
};
function qc(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace
        ? `oklch(from ${t} l c h / ${typeof r == 'string' ? `calc(${r})` : r})`
        : n.vars
          ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, 'var(--$1Channel)')} / ${typeof r == 'string' ? `calc(${r})` : r})`
          : Br(t, Vc(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${Qo(r)})` : en(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${Qo(r)})` : Jr(t, r);
    },
  });
}
function In(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: a = {},
    shape: l,
    colorSpace: u,
    ...d
  } = e;
  if (e.vars && e.generateThemeVars === void 0) throw new Error(st(20));
  const f = eo({ ...i, colorSpace: u }),
    b = Zn(e);
  let y = Pe(b, {
    mixins: Mc(b.breakpoints, n),
    palette: f,
    shadows: zc.slice(),
    typography: Bc(f, a),
    transitions: _c(s),
    zIndex: { ...Hc },
  });
  return (
    (y = Pe(y, d)),
    (y = t.reduce((m, p) => Pe(m, p), y)),
    (y.unstable_sxConfig = { ...cr, ...(d == null ? void 0 : d.unstable_sxConfig) }),
    (y.unstable_sx = function (p) {
      return St({ sx: p, theme: this });
    }),
    (y.toRuntimeSource = fs),
    qc(y),
    y
  );
}
function Pn(e) {
  let t;
  return (
    e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
    Math.round(t * 10) / 1e3
  );
}
const Kc = [...Array(25)].map((e, t) => {
  if (t === 0) return 'none';
  const r = Pn(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function ms(e) {
  return {
    inputPlaceholder: e === 'dark' ? 0.5 : 0.42,
    inputUnderline: e === 'dark' ? 0.7 : 0.42,
    switchTrackDisabled: e === 'dark' ? 0.2 : 0.12,
    switchTrack: e === 'dark' ? 0.3 : 0.38,
  };
}
function hs(e) {
  return e === 'dark' ? Kc : [];
}
function Gc(e) {
  const { palette: t = { mode: 'light' }, opacity: r, overlays: n, colorSpace: o, ...i } = e,
    s = eo({ ...t, colorSpace: o });
  return { palette: s, opacity: { ...ms(s.mode), ...r }, overlays: n || hs(s.mode), ...i };
}
function Yc(e) {
  var t;
  return (
    !!e[0].match(
      /(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/,
    ) ||
    !!e[0].match(/sxConfig$/) ||
    (e[0] === 'palette' &&
      !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/)))
  );
}
const Xc = (e) => [
    ...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ''}overlays-${r}`),
    `--${e ? `${e}-` : ''}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ''}palette-AppBar-darkColor`,
  ],
  Zc = (e) => (t, r) => {
    const n = e.rootSelector || ':root',
      o = e.colorSchemeSelector;
    let i = o;
    if (
      (o === 'class' && (i = '.%s'),
      o === 'data' && (i = '[data-%s]'),
      o != null && o.startsWith('data-') && !o.includes('%s') && (i = `[${o}="%s"]`),
      e.defaultColorScheme === t)
    ) {
      if (t === 'dark') {
        const s = {};
        return (
          Xc(e.cssVarPrefix).forEach((a) => {
            ((s[a] = r[a]), delete r[a]);
          }),
          i === 'media'
            ? { [n]: r, '@media (prefers-color-scheme: dark)': { [n]: s } }
            : i
              ? { [i.replace('%s', t)]: s, [`${n}, ${i.replace('%s', t)}`]: r }
              : { [n]: { ...r, ...s } }
        );
      }
      if (i && i !== 'media') return `${n}, ${i.replace('%s', String(t))}`;
    } else if (t) {
      if (i === 'media') return { [`@media (prefers-color-scheme: ${String(t)})`]: { [n]: r } };
      if (i) return i.replace('%s', String(t));
    }
    return n;
  };
function Qc(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function k(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Qt(e) {
  return typeof e != 'string' || !e.startsWith('hsl') ? e : cs(e);
}
function rt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Zt(Qt(e[t])));
}
function Jc(e) {
  return typeof e == 'number'
    ? `${e}px`
    : typeof e == 'string' || typeof e == 'function' || Array.isArray(e)
      ? e
      : '8px';
}
const Ke = (e) => {
    try {
      return e();
    } catch {}
  },
  eu = (e = 'mui') => bc(e);
function yn(e, t, r, n, o) {
  if (!r) return;
  r = r === !0 ? {} : r;
  const i = o === 'dark' ? 'dark' : 'light';
  if (!n) {
    t[o] = Gc({ ...r, palette: { mode: i, ...(r == null ? void 0 : r.palette) }, colorSpace: e });
    return;
  }
  const { palette: s, ...a } = In({
    ...n,
    palette: { mode: i, ...(r == null ? void 0 : r.palette) },
    colorSpace: e,
  });
  return (
    (t[o] = {
      ...r,
      palette: s,
      opacity: { ...ms(i), ...(r == null ? void 0 : r.opacity) },
      overlays: (r == null ? void 0 : r.overlays) || hs(i),
    }),
    a
  );
}
function tu(e = {}, ...t) {
  const {
      colorSchemes: r = { light: !0 },
      defaultColorScheme: n,
      disableCssColorScheme: o = !1,
      cssVarPrefix: i = 'mui',
      nativeColor: s = !1,
      shouldSkipGeneratingVar: a = Yc,
      colorSchemeSelector: l = r.light && r.dark ? 'media' : void 0,
      rootSelector: u = ':root',
      ...d
    } = e,
    f = Object.keys(r)[0],
    b = n || (r.light && f !== 'light' ? 'light' : f),
    y = eu(i),
    { [b]: m, light: p, dark: v, ...C } = r,
    R = { ...C };
  let x = m;
  if ((((b === 'dark' && !('dark' in r)) || (b === 'light' && !('light' in r))) && (x = !0), !x))
    throw new Error(st(21, b));
  let g;
  s && (g = 'oklch');
  const S = yn(g, R, x, d, b);
  (p && !R.light && yn(g, R, p, void 0, 'light'), v && !R.dark && yn(g, R, v, void 0, 'dark'));
  let w = {
    defaultColorScheme: b,
    ...S,
    cssVarPrefix: i,
    colorSchemeSelector: l,
    rootSelector: u,
    getCssVar: y,
    colorSchemes: R,
    font: { ...Ac(S.typography), ...S.font },
    spacing: Jc(d.spacing),
  };
  (Object.keys(w.colorSchemes).forEach((B) => {
    const c = w.colorSchemes[B].palette,
      P = (I) => {
        const A = I.split('-'),
          F = A[1],
          H = A[2];
        return y(I, c[F][H]);
      };
    (c.mode === 'light' && (k(c.common, 'background', '#fff'), k(c.common, 'onBackground', '#000')),
      c.mode === 'dark' &&
        (k(c.common, 'background', '#000'), k(c.common, 'onBackground', '#fff')));
    function E(I, A, F) {
      if (g) {
        let H;
        return (
          I === ft && (H = `transparent ${((1 - F) * 100).toFixed(0)}%`),
          I === J && (H = `#000 ${(F * 100).toFixed(0)}%`),
          I === ee && (H = `#fff ${(F * 100).toFixed(0)}%`),
          `color-mix(in ${g}, ${A}, ${H})`
        );
      }
      return I(A, F);
    }
    if (
      (Qc(c, [
        'Alert',
        'AppBar',
        'Avatar',
        'Button',
        'Chip',
        'FilledInput',
        'LinearProgress',
        'Skeleton',
        'Slider',
        'SnackbarContent',
        'SpeedDialAction',
        'StepConnector',
        'StepContent',
        'Switch',
        'TableCell',
        'Tooltip',
      ]),
      c.mode === 'light')
    ) {
      (k(c.Alert, 'errorColor', E(J, c.error.light, 0.6)),
        k(c.Alert, 'infoColor', E(J, c.info.light, 0.6)),
        k(c.Alert, 'successColor', E(J, c.success.light, 0.6)),
        k(c.Alert, 'warningColor', E(J, c.warning.light, 0.6)),
        k(c.Alert, 'errorFilledBg', P('palette-error-main')),
        k(c.Alert, 'infoFilledBg', P('palette-info-main')),
        k(c.Alert, 'successFilledBg', P('palette-success-main')),
        k(c.Alert, 'warningFilledBg', P('palette-warning-main')),
        k(
          c.Alert,
          'errorFilledColor',
          Ke(() => c.getContrastText(c.error.main)),
        ),
        k(
          c.Alert,
          'infoFilledColor',
          Ke(() => c.getContrastText(c.info.main)),
        ),
        k(
          c.Alert,
          'successFilledColor',
          Ke(() => c.getContrastText(c.success.main)),
        ),
        k(
          c.Alert,
          'warningFilledColor',
          Ke(() => c.getContrastText(c.warning.main)),
        ),
        k(c.Alert, 'errorStandardBg', E(ee, c.error.light, 0.9)),
        k(c.Alert, 'infoStandardBg', E(ee, c.info.light, 0.9)),
        k(c.Alert, 'successStandardBg', E(ee, c.success.light, 0.9)),
        k(c.Alert, 'warningStandardBg', E(ee, c.warning.light, 0.9)),
        k(c.Alert, 'errorIconColor', P('palette-error-main')),
        k(c.Alert, 'infoIconColor', P('palette-info-main')),
        k(c.Alert, 'successIconColor', P('palette-success-main')),
        k(c.Alert, 'warningIconColor', P('palette-warning-main')),
        k(c.AppBar, 'defaultBg', P('palette-grey-100')),
        k(c.Avatar, 'defaultBg', P('palette-grey-400')),
        k(c.Button, 'inheritContainedBg', P('palette-grey-300')),
        k(c.Button, 'inheritContainedHoverBg', P('palette-grey-A100')),
        k(c.Chip, 'defaultBorder', P('palette-grey-400')),
        k(c.Chip, 'defaultAvatarColor', P('palette-grey-700')),
        k(c.Chip, 'defaultIconColor', P('palette-grey-700')),
        k(c.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)'),
        k(c.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)'),
        k(c.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)'),
        k(c.LinearProgress, 'primaryBg', E(ee, c.primary.main, 0.62)),
        k(c.LinearProgress, 'secondaryBg', E(ee, c.secondary.main, 0.62)),
        k(c.LinearProgress, 'errorBg', E(ee, c.error.main, 0.62)),
        k(c.LinearProgress, 'infoBg', E(ee, c.info.main, 0.62)),
        k(c.LinearProgress, 'successBg', E(ee, c.success.main, 0.62)),
        k(c.LinearProgress, 'warningBg', E(ee, c.warning.main, 0.62)),
        k(
          c.Skeleton,
          'bg',
          g ? E(ft, c.text.primary, 0.11) : `rgba(${P('palette-text-primaryChannel')} / 0.11)`,
        ),
        k(c.Slider, 'primaryTrack', E(ee, c.primary.main, 0.62)),
        k(c.Slider, 'secondaryTrack', E(ee, c.secondary.main, 0.62)),
        k(c.Slider, 'errorTrack', E(ee, c.error.main, 0.62)),
        k(c.Slider, 'infoTrack', E(ee, c.info.main, 0.62)),
        k(c.Slider, 'successTrack', E(ee, c.success.main, 0.62)),
        k(c.Slider, 'warningTrack', E(ee, c.warning.main, 0.62)));
      const I = g ? E(J, c.background.default, 0.6825) : yr(c.background.default, 0.8);
      (k(c.SnackbarContent, 'bg', I),
        k(
          c.SnackbarContent,
          'color',
          Ke(() => (g ? kn.text.primary : c.getContrastText(I))),
        ),
        k(c.SpeedDialAction, 'fabHoverBg', yr(c.background.paper, 0.15)),
        k(c.StepConnector, 'border', P('palette-grey-400')),
        k(c.StepContent, 'border', P('palette-grey-400')),
        k(c.Switch, 'defaultColor', P('palette-common-white')),
        k(c.Switch, 'defaultDisabledColor', P('palette-grey-100')),
        k(c.Switch, 'primaryDisabledColor', E(ee, c.primary.main, 0.62)),
        k(c.Switch, 'secondaryDisabledColor', E(ee, c.secondary.main, 0.62)),
        k(c.Switch, 'errorDisabledColor', E(ee, c.error.main, 0.62)),
        k(c.Switch, 'infoDisabledColor', E(ee, c.info.main, 0.62)),
        k(c.Switch, 'successDisabledColor', E(ee, c.success.main, 0.62)),
        k(c.Switch, 'warningDisabledColor', E(ee, c.warning.main, 0.62)),
        k(c.TableCell, 'border', E(ee, E(ft, c.divider, 1), 0.88)),
        k(c.Tooltip, 'bg', E(ft, c.grey[700], 0.92)));
    }
    if (c.mode === 'dark') {
      (k(c.Alert, 'errorColor', E(ee, c.error.light, 0.6)),
        k(c.Alert, 'infoColor', E(ee, c.info.light, 0.6)),
        k(c.Alert, 'successColor', E(ee, c.success.light, 0.6)),
        k(c.Alert, 'warningColor', E(ee, c.warning.light, 0.6)),
        k(c.Alert, 'errorFilledBg', P('palette-error-dark')),
        k(c.Alert, 'infoFilledBg', P('palette-info-dark')),
        k(c.Alert, 'successFilledBg', P('palette-success-dark')),
        k(c.Alert, 'warningFilledBg', P('palette-warning-dark')),
        k(
          c.Alert,
          'errorFilledColor',
          Ke(() => c.getContrastText(c.error.dark)),
        ),
        k(
          c.Alert,
          'infoFilledColor',
          Ke(() => c.getContrastText(c.info.dark)),
        ),
        k(
          c.Alert,
          'successFilledColor',
          Ke(() => c.getContrastText(c.success.dark)),
        ),
        k(
          c.Alert,
          'warningFilledColor',
          Ke(() => c.getContrastText(c.warning.dark)),
        ),
        k(c.Alert, 'errorStandardBg', E(J, c.error.light, 0.9)),
        k(c.Alert, 'infoStandardBg', E(J, c.info.light, 0.9)),
        k(c.Alert, 'successStandardBg', E(J, c.success.light, 0.9)),
        k(c.Alert, 'warningStandardBg', E(J, c.warning.light, 0.9)),
        k(c.Alert, 'errorIconColor', P('palette-error-main')),
        k(c.Alert, 'infoIconColor', P('palette-info-main')),
        k(c.Alert, 'successIconColor', P('palette-success-main')),
        k(c.Alert, 'warningIconColor', P('palette-warning-main')),
        k(c.AppBar, 'defaultBg', P('palette-grey-900')),
        k(c.AppBar, 'darkBg', P('palette-background-paper')),
        k(c.AppBar, 'darkColor', P('palette-text-primary')),
        k(c.Avatar, 'defaultBg', P('palette-grey-600')),
        k(c.Button, 'inheritContainedBg', P('palette-grey-800')),
        k(c.Button, 'inheritContainedHoverBg', P('palette-grey-700')),
        k(c.Chip, 'defaultBorder', P('palette-grey-700')),
        k(c.Chip, 'defaultAvatarColor', P('palette-grey-300')),
        k(c.Chip, 'defaultIconColor', P('palette-grey-300')),
        k(c.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)'),
        k(c.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)'),
        k(c.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)'),
        k(c.LinearProgress, 'primaryBg', E(J, c.primary.main, 0.5)),
        k(c.LinearProgress, 'secondaryBg', E(J, c.secondary.main, 0.5)),
        k(c.LinearProgress, 'errorBg', E(J, c.error.main, 0.5)),
        k(c.LinearProgress, 'infoBg', E(J, c.info.main, 0.5)),
        k(c.LinearProgress, 'successBg', E(J, c.success.main, 0.5)),
        k(c.LinearProgress, 'warningBg', E(J, c.warning.main, 0.5)),
        k(
          c.Skeleton,
          'bg',
          g ? E(ft, c.text.primary, 0.13) : `rgba(${P('palette-text-primaryChannel')} / 0.13)`,
        ),
        k(c.Slider, 'primaryTrack', E(J, c.primary.main, 0.5)),
        k(c.Slider, 'secondaryTrack', E(J, c.secondary.main, 0.5)),
        k(c.Slider, 'errorTrack', E(J, c.error.main, 0.5)),
        k(c.Slider, 'infoTrack', E(J, c.info.main, 0.5)),
        k(c.Slider, 'successTrack', E(J, c.success.main, 0.5)),
        k(c.Slider, 'warningTrack', E(J, c.warning.main, 0.5)));
      const I = g ? E(ee, c.background.default, 0.985) : yr(c.background.default, 0.98);
      (k(c.SnackbarContent, 'bg', I),
        k(
          c.SnackbarContent,
          'color',
          Ke(() => (g ? ds.text.primary : c.getContrastText(I))),
        ),
        k(c.SpeedDialAction, 'fabHoverBg', yr(c.background.paper, 0.15)),
        k(c.StepConnector, 'border', P('palette-grey-600')),
        k(c.StepContent, 'border', P('palette-grey-600')),
        k(c.Switch, 'defaultColor', P('palette-grey-300')),
        k(c.Switch, 'defaultDisabledColor', P('palette-grey-600')),
        k(c.Switch, 'primaryDisabledColor', E(J, c.primary.main, 0.55)),
        k(c.Switch, 'secondaryDisabledColor', E(J, c.secondary.main, 0.55)),
        k(c.Switch, 'errorDisabledColor', E(J, c.error.main, 0.55)),
        k(c.Switch, 'infoDisabledColor', E(J, c.info.main, 0.55)),
        k(c.Switch, 'successDisabledColor', E(J, c.success.main, 0.55)),
        k(c.Switch, 'warningDisabledColor', E(J, c.warning.main, 0.55)),
        k(c.TableCell, 'border', E(J, E(ft, c.divider, 1), 0.68)),
        k(c.Tooltip, 'bg', E(ft, c.grey[700], 0.92)));
    }
    (rt(c.background, 'default'),
      rt(c.background, 'paper'),
      rt(c.common, 'background'),
      rt(c.common, 'onBackground'),
      rt(c, 'divider'),
      Object.keys(c).forEach((I) => {
        const A = c[I];
        I !== 'tonalOffset' &&
          A &&
          typeof A == 'object' &&
          (A.main && k(c[I], 'mainChannel', Zt(Qt(A.main))),
          A.light && k(c[I], 'lightChannel', Zt(Qt(A.light))),
          A.dark && k(c[I], 'darkChannel', Zt(Qt(A.dark))),
          A.contrastText && k(c[I], 'contrastTextChannel', Zt(Qt(A.contrastText))),
          I === 'text' && (rt(c[I], 'primary'), rt(c[I], 'secondary')),
          I === 'action' && (A.active && rt(c[I], 'active'), A.selected && rt(c[I], 'selected')));
      }));
  }),
    (w = t.reduce((B, c) => Pe(B, c), w)));
  const $ = {
      prefix: i,
      disableCssColorScheme: o,
      shouldSkipGeneratingVar: a,
      getSelector: Zc(w),
      enableContrastVars: s,
    },
    { vars: M, generateThemeVars: L, generateStyleSheets: N } = Sc(w, $);
  return (
    (w.vars = M),
    Object.entries(w.colorSchemes[w.defaultColorScheme]).forEach(([B, c]) => {
      w[B] = c;
    }),
    (w.generateThemeVars = L),
    (w.generateStyleSheets = N),
    (w.generateSpacing = function () {
      return ss(d.spacing, Dn(this));
    }),
    (w.getColorSchemeSelector = Cc(l)),
    (w.spacing = w.generateSpacing()),
    (w.shouldSkipGeneratingVar = a),
    (w.unstable_sxConfig = { ...cr, ...(d == null ? void 0 : d.unstable_sxConfig) }),
    (w.unstable_sx = function (c) {
      return St({ sx: c, theme: this });
    }),
    (w.toRuntimeSource = fs),
    w
  );
}
function Jo(e, t, r) {
  e.colorSchemes &&
    r &&
    (e.colorSchemes[t] = {
      ...(r !== !0 && r),
      palette: eo({ ...(r === !0 ? {} : r.palette), mode: t }),
    });
}
function gs(e = {}, ...t) {
  const {
      palette: r,
      cssVariables: n = !1,
      colorSchemes: o = r ? void 0 : { light: !0 },
      defaultColorScheme: i = r == null ? void 0 : r.mode,
      ...s
    } = e,
    a = i || 'light',
    l = o == null ? void 0 : o[a],
    u = { ...o, ...(r ? { [a]: { ...(typeof l != 'boolean' && l), palette: r } } : void 0) };
  if (n === !1) {
    if (!('colorSchemes' in e)) return In(e, ...t);
    let d = r;
    'palette' in e ||
      (u[a] && (u[a] !== !0 ? (d = u[a].palette) : a === 'dark' && (d = { mode: 'dark' })));
    const f = In({ ...e, palette: d }, ...t);
    return (
      (f.defaultColorScheme = a),
      (f.colorSchemes = u),
      f.palette.mode === 'light' &&
        ((f.colorSchemes.light = { ...(u.light !== !0 && u.light), palette: f.palette }),
        Jo(f, 'dark', u.dark)),
      f.palette.mode === 'dark' &&
        ((f.colorSchemes.dark = { ...(u.dark !== !0 && u.dark), palette: f.palette }),
        Jo(f, 'light', u.light)),
      f
    );
  }
  return (
    !r && !('light' in u) && a === 'light' && (u.light = !0),
    tu({ ...s, colorSchemes: u, defaultColorScheme: a, ...(typeof n != 'boolean' && n) }, ...t)
  );
}
const to = gs(),
  rn = '$$material';
function ro() {
  const e = Qn(to);
  return e[rn] || e;
}
function ru(e) {
  return T.jsx(Gl, { ...e, defaultTheme: to, themeId: rn });
}
function ys(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const He = (e) => ys(e) && e !== 'classes',
  z = ec({ themeId: rn, defaultTheme: to, rootShouldForwardProp: He });
function nu(e) {
  return function (r) {
    return T.jsx(ru, { styles: typeof e == 'function' ? (n) => e({ theme: n, ...r }) : e });
  };
}
function ou() {
  return Vi;
}
const se = yc;
function ae(e) {
  return mc(e);
}
function iu(e) {
  return oe('MuiSvgIcon', e);
}
te('MuiSvgIcon', [
  'root',
  'colorPrimary',
  'colorSecondary',
  'colorAction',
  'colorError',
  'colorDisabled',
  'fontSizeInherit',
  'fontSizeSmall',
  'fontSizeMedium',
  'fontSizeLarge',
]);
const su = (e) => {
    const { color: t, fontSize: r, classes: n } = e,
      o = { root: ['root', t !== 'inherit' && `color${D(t)}`, `fontSize${D(r)}`] };
    return ne(o, iu, n);
  },
  au = z('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.color !== 'inherit' && t[`color${D(r.color)}`],
        t[`fontSize${D(r.fontSize)}`],
      ];
    },
  })(
    se(({ theme: e }) => {
      var t, r, n, o, i, s, a, l, u, d, f, b, y, m;
      return {
        userSelect: 'none',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        flexShrink: 0,
        transition:
          (o = (t = e.transitions) == null ? void 0 : t.create) == null
            ? void 0
            : o.call(t, 'fill', {
                duration:
                  (n = (r = (e.vars ?? e).transitions) == null ? void 0 : r.duration) == null
                    ? void 0
                    : n.shorter,
              }),
        variants: [
          { props: (p) => !p.hasSvgAsChild, style: { fill: 'currentColor' } },
          { props: { fontSize: 'inherit' }, style: { fontSize: 'inherit' } },
          {
            props: { fontSize: 'small' },
            style: {
              fontSize:
                ((s = (i = e.typography) == null ? void 0 : i.pxToRem) == null
                  ? void 0
                  : s.call(i, 20)) || '1.25rem',
            },
          },
          {
            props: { fontSize: 'medium' },
            style: {
              fontSize:
                ((l = (a = e.typography) == null ? void 0 : a.pxToRem) == null
                  ? void 0
                  : l.call(a, 24)) || '1.5rem',
            },
          },
          {
            props: { fontSize: 'large' },
            style: {
              fontSize:
                ((d = (u = e.typography) == null ? void 0 : u.pxToRem) == null
                  ? void 0
                  : d.call(u, 35)) || '2.1875rem',
            },
          },
          ...Object.entries((e.vars ?? e).palette)
            .filter(([, p]) => p && p.main)
            .map(([p]) => {
              var v, C;
              return {
                props: { color: p },
                style: {
                  color:
                    (C = (v = (e.vars ?? e).palette) == null ? void 0 : v[p]) == null
                      ? void 0
                      : C.main,
                },
              };
            }),
          {
            props: { color: 'action' },
            style: {
              color:
                (b = (f = (e.vars ?? e).palette) == null ? void 0 : f.action) == null
                  ? void 0
                  : b.active,
            },
          },
          {
            props: { color: 'disabled' },
            style: {
              color:
                (m = (y = (e.vars ?? e).palette) == null ? void 0 : y.action) == null
                  ? void 0
                  : m.disabled,
            },
          },
          { props: { color: 'inherit' }, style: { color: void 0 } },
        ],
      };
    }),
  ),
  $n = h.forwardRef(function (t, r) {
    const n = ae({ props: t, name: 'MuiSvgIcon' }),
      {
        children: o,
        className: i,
        color: s = 'inherit',
        component: a = 'svg',
        fontSize: l = 'medium',
        htmlColor: u,
        inheritViewBox: d = !1,
        titleAccess: f,
        viewBox: b = '0 0 24 24',
        ...y
      } = n,
      m = h.isValidElement(o) && o.type === 'svg',
      p = {
        ...n,
        color: s,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: d,
        viewBox: b,
        hasSvgAsChild: m,
      },
      v = {};
    d || (v.viewBox = b);
    const C = su(p);
    return T.jsxs(au, {
      as: a,
      className: U(C.root, i),
      focusable: 'false',
      color: u,
      'aria-hidden': f ? void 0 : !0,
      role: f ? 'img' : void 0,
      ref: r,
      ...v,
      ...y,
      ...(m && o.props),
      ownerState: p,
      children: [m ? o.props.children : o, f ? T.jsx('title', { children: f }) : null],
    });
  });
$n.muiName = 'SvgIcon';
function Ct(e, t) {
  function r(n, o) {
    return T.jsx($n, { 'data-testid': void 0, ref: o, ...n, children: e });
  }
  return ((r.muiName = $n.muiName), h.memo(h.forwardRef(r)));
}
function bs(e, t = 166) {
  let r;
  function n(...o) {
    const i = () => {
      e.apply(this, o);
    };
    (clearTimeout(r), (r = setTimeout(i, t)));
  }
  return (
    (n.clear = () => {
      clearTimeout(r);
    }),
    n
  );
}
function Ve(e) {
  return (e && e.ownerDocument) || document;
}
function lt(e) {
  return Ve(e).defaultView || window;
}
function ei(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t);
}
function ti(e) {
  const { controlled: t, default: r, name: n, state: o = 'value' } = e,
    { current: i } = h.useRef(t !== void 0),
    [s, a] = h.useState(r),
    l = i ? t : s,
    u = h.useCallback((d) => {
      i || a(d);
    }, []);
  return [l, u];
}
function xt(e) {
  const t = h.useRef(e);
  return (
    dt(() => {
      t.current = e;
    }),
    h.useRef((...r) => (0, t.current)(...r)).current
  );
}
function Me(...e) {
  const t = h.useRef(void 0),
    r = h.useCallback((n) => {
      const o = e.map((i) => {
        if (i == null) return null;
        if (typeof i == 'function') {
          const s = i,
            a = s(n);
          return typeof a == 'function'
            ? a
            : () => {
                s(null);
              };
        }
        return (
          (i.current = n),
          () => {
            i.current = null;
          }
        );
      });
      return () => {
        o.forEach((i) => (i == null ? void 0 : i()));
      };
    }, e);
  return h.useMemo(
    () =>
      e.every((n) => n == null)
        ? null
        : (n) => {
            (t.current && (t.current(), (t.current = void 0)), n != null && (t.current = r(n)));
          },
    e,
  );
}
function lu(e, t) {
  const r = e.charCodeAt(2);
  return e[0] === 'o' && e[1] === 'n' && r >= 65 && r <= 90 && typeof t == 'function';
}
function cu(e, t) {
  if (!e) return t;
  function r(s, a) {
    const l = {};
    return (
      Object.keys(a).forEach((u) => {
        lu(u, a[u]) &&
          typeof s[u] == 'function' &&
          (l[u] = (...d) => {
            (s[u](...d), a[u](...d));
          });
      }),
      l
    );
  }
  if (typeof e == 'function' || typeof t == 'function')
    return (s) => {
      const a = typeof t == 'function' ? t(s) : t,
        l = typeof e == 'function' ? e({ ...s, ...a }) : e,
        u = U(
          s == null ? void 0 : s.className,
          a == null ? void 0 : a.className,
          l == null ? void 0 : l.className,
        ),
        d = r(l, a);
      return {
        ...a,
        ...l,
        ...d,
        ...(!!u && { className: u }),
        ...((a == null ? void 0 : a.style) &&
          (l == null ? void 0 : l.style) && { style: { ...a.style, ...l.style } }),
        ...((a == null ? void 0 : a.sx) &&
          (l == null ? void 0 : l.sx) && {
            sx: [
              ...(Array.isArray(a.sx) ? a.sx : [a.sx]),
              ...(Array.isArray(l.sx) ? l.sx : [l.sx]),
            ],
          }),
      };
    };
  const n = t,
    o = r(e, n),
    i = U(n == null ? void 0 : n.className, e == null ? void 0 : e.className);
  return {
    ...t,
    ...e,
    ...o,
    ...(!!i && { className: i }),
    ...((n == null ? void 0 : n.style) &&
      (e == null ? void 0 : e.style) && { style: { ...n.style, ...e.style } }),
    ...((n == null ? void 0 : n.sx) &&
      (e == null ? void 0 : e.sx) && {
        sx: [...(Array.isArray(n.sx) ? n.sx : [n.sx]), ...(Array.isArray(e.sx) ? e.sx : [e.sx])],
      }),
  };
}
const uu = Ct(T.jsx('path', { d: 'M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z' }));
function vs(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function An(e, t) {
  return (
    (An = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return ((r.__proto__ = n), r);
        }),
    An(e, t)
  );
}
function xs(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), An(e, t));
}
const ri = { disabled: !1 },
  Lr = ot.createContext(null);
var du = function (t) {
    return t.scrollTop;
  },
  Jt = 'unmounted',
  gt = 'exited',
  yt = 'entering',
  Bt = 'entered',
  Mn = 'exiting',
  et = (function (e) {
    xs(t, e);
    function t(n, o) {
      var i;
      i = e.call(this, n, o) || this;
      var s = o,
        a = s && !s.isMounting ? n.enter : n.appear,
        l;
      return (
        (i.appearStatus = null),
        n.in
          ? a
            ? ((l = gt), (i.appearStatus = yt))
            : (l = Bt)
          : n.unmountOnExit || n.mountOnEnter
            ? (l = Jt)
            : (l = gt),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in;
      return s && i.status === Jt ? { status: gt } : null;
    };
    var r = t.prototype;
    return (
      (r.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (r.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var s = this.state.status;
          this.props.in ? s !== yt && s !== Bt && (i = yt) : (s === yt || s === Bt) && (i = Mn);
        }
        this.updateStatus(!1, i);
      }),
      (r.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (r.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          s,
          a;
        return (
          (i = s = a = o),
          o != null &&
            typeof o != 'number' &&
            ((i = o.exit), (s = o.enter), (a = o.appear !== void 0 ? o.appear : s)),
          { exit: i, enter: s, appear: a }
        );
      }),
      (r.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === yt)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef ? this.props.nodeRef.current : hr.findDOMNode(this);
              s && du(s);
            }
            this.performEnter(o);
          } else this.performExit();
        else this.props.unmountOnExit && this.state.status === gt && this.setState({ status: Jt });
      }),
      (r.performEnter = function (o) {
        var i = this,
          s = this.props.enter,
          a = this.context ? this.context.isMounting : o,
          l = this.props.nodeRef ? [a] : [hr.findDOMNode(this), a],
          u = l[0],
          d = l[1],
          f = this.getTimeouts(),
          b = a ? f.appear : f.enter;
        if ((!o && !s) || ri.disabled) {
          this.safeSetState({ status: Bt }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        (this.props.onEnter(u, d),
          this.safeSetState({ status: yt }, function () {
            (i.props.onEntering(u, d),
              i.onTransitionEnd(b, function () {
                i.safeSetState({ status: Bt }, function () {
                  i.props.onEntered(u, d);
                });
              }));
          }));
      }),
      (r.performExit = function () {
        var o = this,
          i = this.props.exit,
          s = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : hr.findDOMNode(this);
        if (!i || ri.disabled) {
          this.safeSetState({ status: gt }, function () {
            o.props.onExited(a);
          });
          return;
        }
        (this.props.onExit(a),
          this.safeSetState({ status: Mn }, function () {
            (o.props.onExiting(a),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: gt }, function () {
                  o.props.onExited(a);
                });
              }));
          }));
      }),
      (r.cancelNextCallback = function () {
        this.nextCallback !== null && (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (r.safeSetState = function (o, i) {
        ((i = this.setNextCallback(i)), this.setState(o, i));
      }),
      (r.setNextCallback = function (o) {
        var i = this,
          s = !0;
        return (
          (this.nextCallback = function (a) {
            s && ((s = !1), (i.nextCallback = null), o(a));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (r.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var s = this.props.nodeRef ? this.props.nodeRef.current : hr.findDOMNode(this),
          a = o == null && !this.props.addEndListener;
        if (!s || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback],
            u = l[0],
            d = l[1];
          this.props.addEndListener(u, d);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (r.render = function () {
        var o = this.state.status;
        if (o === Jt) return null;
        var i = this.props,
          s = i.children;
        (i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef);
        var a = vs(i, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ]);
        return ot.createElement(
          Lr.Provider,
          { value: null },
          typeof s == 'function' ? s(o, a) : ot.cloneElement(ot.Children.only(s), a),
        );
      }),
      t
    );
  })(ot.Component);
et.contextType = Lr;
et.propTypes = {};
function Ot() {}
et.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ot,
  onEntering: Ot,
  onEntered: Ot,
  onExit: Ot,
  onExiting: Ot,
  onExited: Ot,
};
et.UNMOUNTED = Jt;
et.EXITED = gt;
et.ENTERING = yt;
et.ENTERED = Bt;
et.EXITING = Mn;
function pu(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function no(e, t) {
  var r = function (i) {
      return t && h.isValidElement(i) ? t(i) : i;
    },
    n = Object.create(null);
  return (
    e &&
      h.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        n[o.key] = r(o);
      }),
    n
  );
}
function fu(e, t) {
  ((e = e || {}), (t = t || {}));
  function r(d) {
    return d in t ? t[d] : e[d];
  }
  var n = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((n[i] = o), (o = [])) : o.push(i);
  var s,
    a = {};
  for (var l in t) {
    if (n[l])
      for (s = 0; s < n[l].length; s++) {
        var u = n[l][s];
        a[n[l][s]] = r(u);
      }
    a[l] = r(l);
  }
  for (s = 0; s < o.length; s++) a[o[s]] = r(o[s]);
  return a;
}
function vt(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function mu(e, t) {
  return no(e.children, function (r) {
    return h.cloneElement(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: vt(r, 'appear', e),
      enter: vt(r, 'enter', e),
      exit: vt(r, 'exit', e),
    });
  });
}
function hu(e, t, r) {
  var n = no(e.children),
    o = fu(t, n);
  return (
    Object.keys(o).forEach(function (i) {
      var s = o[i];
      if (h.isValidElement(s)) {
        var a = i in t,
          l = i in n,
          u = t[i],
          d = h.isValidElement(u) && !u.props.in;
        l && (!a || d)
          ? (o[i] = h.cloneElement(s, {
              onExited: r.bind(null, s),
              in: !0,
              exit: vt(s, 'exit', e),
              enter: vt(s, 'enter', e),
            }))
          : !l && a && !d
            ? (o[i] = h.cloneElement(s, { in: !1 }))
            : l &&
              a &&
              h.isValidElement(u) &&
              (o[i] = h.cloneElement(s, {
                onExited: r.bind(null, s),
                in: u.props.in,
                exit: vt(s, 'exit', e),
                enter: vt(s, 'enter', e),
              }));
      }
    }),
    o
  );
}
var gu =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  yu = {
    component: 'div',
    childFactory: function (t) {
      return t;
    },
  },
  oo = (function (e) {
    xs(t, e);
    function t(n, o) {
      var i;
      i = e.call(this, n, o) || this;
      var s = i.handleExited.bind(pu(i));
      return (
        (i.state = { contextValue: { isMounting: !0 }, handleExited: s, firstRender: !0 }),
        i
      );
    }
    var r = t.prototype;
    return (
      (r.componentDidMount = function () {
        ((this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } }));
      }),
      (r.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var s = i.children,
          a = i.handleExited,
          l = i.firstRender;
        return { children: l ? mu(o, a) : hu(o, s, a), firstRender: !1 };
      }),
      (r.handleExited = function (o, i) {
        var s = no(this.props.children);
        o.key in s ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (a) {
              var l = Ar({}, a.children);
              return (delete l[o.key], { children: l });
            }));
      }),
      (r.render = function () {
        var o = this.props,
          i = o.component,
          s = o.childFactory,
          a = vs(o, ['component', 'childFactory']),
          l = this.state.contextValue,
          u = gu(this.state.children).map(s);
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          i === null
            ? ot.createElement(Lr.Provider, { value: l }, u)
            : ot.createElement(Lr.Provider, { value: l }, ot.createElement(i, a, u))
        );
      }),
      t
    );
  })(ot.Component);
oo.propTypes = {};
oo.defaultProps = yu;
const ni = {};
function Ss(e, t) {
  const r = h.useRef(ni);
  return (r.current === ni && (r.current = e(t)), r);
}
const bu = [];
function vu(e) {
  h.useEffect(e, bu);
}
class io {
  constructor() {
    Ut(this, 'currentId', null);
    Ut(this, 'clear', () => {
      this.currentId !== null && (clearTimeout(this.currentId), (this.currentId = null));
    });
    Ut(this, 'disposeEffect', () => this.clear);
  }
  static create() {
    return new io();
  }
  start(t, r) {
    (this.clear(),
      (this.currentId = setTimeout(() => {
        ((this.currentId = null), r());
      }, t)));
  }
}
function Cs() {
  const e = Ss(io.create).current;
  return (vu(e.disposeEffect), e);
}
const ws = (e) => e.scrollTop;
function Nr(e, t) {
  const { timeout: r, easing: n, style: o = {} } = e;
  return {
    duration: o.transitionDuration ?? (typeof r == 'number' ? r : r[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof n == 'object' ? n[t.mode] : n),
    delay: o.transitionDelay,
  };
}
function Fr(e) {
  return typeof e == 'string';
}
function Ts(e, t, r) {
  return e === void 0 || Fr(e) ? t : { ...t, ownerState: { ...t.ownerState, ...r } };
}
function Rs(e, t, r) {
  return typeof e == 'function' ? e(t, r) : e;
}
function Es(e, t = []) {
  if (e === void 0) return {};
  const r = {};
  return (
    Object.keys(e)
      .filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == 'function' && !t.includes(n))
      .forEach((n) => {
        r[n] = e[n];
      }),
    r
  );
}
function oi(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == 'function'))
      .forEach((r) => {
        t[r] = e[r];
      }),
    t
  );
}
function ks(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: i,
  } = e;
  if (!t) {
    const y = U(
        r == null ? void 0 : r.className,
        i,
        o == null ? void 0 : o.className,
        n == null ? void 0 : n.className,
      ),
      m = {
        ...(r == null ? void 0 : r.style),
        ...(o == null ? void 0 : o.style),
        ...(n == null ? void 0 : n.style),
      },
      p = { ...r, ...o, ...n };
    return (
      y.length > 0 && (p.className = y),
      Object.keys(m).length > 0 && (p.style = m),
      { props: p, internalRef: void 0 }
    );
  }
  const s = Es({ ...o, ...n }),
    a = oi(n),
    l = oi(o),
    u = t(s),
    d = U(
      u == null ? void 0 : u.className,
      r == null ? void 0 : r.className,
      i,
      o == null ? void 0 : o.className,
      n == null ? void 0 : n.className,
    ),
    f = {
      ...(u == null ? void 0 : u.style),
      ...(r == null ? void 0 : r.style),
      ...(o == null ? void 0 : o.style),
      ...(n == null ? void 0 : n.style),
    },
    b = { ...u, ...r, ...l, ...a };
  return (
    d.length > 0 && (b.className = d),
    Object.keys(f).length > 0 && (b.style = f),
    { props: b, internalRef: u.ref }
  );
}
function ce(e, t) {
  const {
      className: r,
      elementType: n,
      ownerState: o,
      externalForwardedProps: i,
      internalForwardedProps: s,
      shouldForwardComponentProp: a = !1,
      ...l
    } = t,
    { component: u, slots: d = { [e]: void 0 }, slotProps: f = { [e]: void 0 }, ...b } = i,
    y = d[e] || n,
    m = Rs(f[e], o),
    {
      props: { component: p, ...v },
      internalRef: C,
    } = ks({
      className: r,
      ...l,
      externalForwardedProps: e === 'root' ? b : void 0,
      externalSlotProps: m,
    }),
    R = Me(C, m == null ? void 0 : m.ref, t.ref),
    x = e === 'root' ? p || u : p,
    g = Ts(
      y,
      {
        ...(e === 'root' && !u && !d[e] && s),
        ...(e !== 'root' && !d[e] && s),
        ...v,
        ...(x && !a && { as: x }),
        ...(x && a && { component: x }),
        ref: R,
      },
      o,
    );
  return [y, g];
}
function xu(e) {
  return oe('MuiPaper', e);
}
te('MuiPaper', [
  'root',
  'rounded',
  'outlined',
  'elevation',
  'elevation0',
  'elevation1',
  'elevation2',
  'elevation3',
  'elevation4',
  'elevation5',
  'elevation6',
  'elevation7',
  'elevation8',
  'elevation9',
  'elevation10',
  'elevation11',
  'elevation12',
  'elevation13',
  'elevation14',
  'elevation15',
  'elevation16',
  'elevation17',
  'elevation18',
  'elevation19',
  'elevation20',
  'elevation21',
  'elevation22',
  'elevation23',
  'elevation24',
]);
const Su = (e) => {
    const { square: t, elevation: r, variant: n, classes: o } = e,
      i = { root: ['root', n, !t && 'rounded', n === 'elevation' && `elevation${r}`] };
    return ne(i, xu, o);
  },
  Cu = z('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[r.variant],
        !r.square && t.rounded,
        r.variant === 'elevation' && t[`elevation${r.elevation}`],
      ];
    },
  })(
    se(({ theme: e }) => ({
      backgroundColor: (e.vars || e).palette.background.paper,
      color: (e.vars || e).palette.text.primary,
      transition: e.transitions.create('box-shadow'),
      variants: [
        { props: ({ ownerState: t }) => !t.square, style: { borderRadius: e.shape.borderRadius } },
        {
          props: { variant: 'outlined' },
          style: { border: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: { variant: 'elevation' },
          style: { boxShadow: 'var(--Paper-shadow)', backgroundImage: 'var(--Paper-overlay)' },
        },
      ],
    })),
  ),
  nn = h.forwardRef(function (t, r) {
    var y;
    const n = ae({ props: t, name: 'MuiPaper' }),
      o = ro(),
      {
        className: i,
        component: s = 'div',
        elevation: a = 1,
        square: l = !1,
        variant: u = 'elevation',
        ...d
      } = n,
      f = { ...n, component: s, elevation: a, square: l, variant: u },
      b = Su(f);
    return T.jsx(Cu, {
      as: s,
      ownerState: f,
      className: U(b.root, i),
      ref: r,
      ...d,
      style: {
        ...(u === 'elevation' && {
          '--Paper-shadow': (o.vars || o).shadows[a],
          ...(o.vars && { '--Paper-overlay': (y = o.vars.overlays) == null ? void 0 : y[a] }),
          ...(!o.vars &&
            o.palette.mode === 'dark' && {
              '--Paper-overlay': `linear-gradient(${Br('#fff', Pn(a))}, ${Br('#fff', Pn(a))})`,
            }),
        }),
        ...d.style,
      },
    });
  });
function ii(e) {
  try {
    return e.matches(':focus-visible');
  } catch {}
  return !1;
}
class zr {
  constructor() {
    Ut(this, 'mountEffect', () => {
      this.shouldMount &&
        !this.didMount &&
        this.ref.current !== null &&
        ((this.didMount = !0), this.mounted.resolve());
    });
    ((this.ref = { current: null }),
      (this.mounted = null),
      (this.didMount = !1),
      (this.shouldMount = !1),
      (this.setShouldMount = null));
  }
  static create() {
    return new zr();
  }
  static use() {
    const t = Ss(zr.create).current,
      [r, n] = h.useState(!1);
    return ((t.shouldMount = r), (t.setShouldMount = n), h.useEffect(t.mountEffect, [r]), t);
  }
  mount() {
    return (
      this.mounted ||
        ((this.mounted = Tu()), (this.shouldMount = !0), this.setShouldMount(this.shouldMount)),
      this.mounted
    );
  }
  start(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...t);
    });
  }
}
function wu() {
  return zr.use();
}
function Tu() {
  let e, t;
  const r = new Promise((n, o) => {
    ((e = n), (t = o));
  });
  return ((r.resolve = e), (r.reject = t), r);
}
function Ru(e) {
  const {
      className: t,
      classes: r,
      pulsate: n = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: s,
      in: a,
      onExited: l,
      timeout: u,
    } = e,
    [d, f] = h.useState(!1),
    b = U(t, r.ripple, r.rippleVisible, n && r.ripplePulsate),
    y = { width: s, height: s, top: -(s / 2) + i, left: -(s / 2) + o },
    m = U(r.child, d && r.childLeaving, n && r.childPulsate);
  return (
    !a && !d && f(!0),
    h.useEffect(() => {
      if (!a && l != null) {
        const p = setTimeout(l, u);
        return () => {
          clearTimeout(p);
        };
      }
    }, [l, a, u]),
    T.jsx('span', { className: b, style: y, children: T.jsx('span', { className: m }) })
  );
}
const je = te('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate',
  ]),
  On = 550,
  Eu = 80,
  ku = pr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  Iu = pr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  Pu = pr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
  $u = z('span', { name: 'MuiTouchRipple', slot: 'Root' })({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
  }),
  Au = z(Ru, { name: 'MuiTouchRipple', slot: 'Ripple' })`
  opacity: 0;
  position: absolute;

  &.${je.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${ku};
    animation-duration: ${On}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  &.${je.ripplePulsate} {
    animation-duration: ${({ theme: e }) => e.transitions.duration.shorter}ms;
  }

  & .${je.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${je.childLeaving} {
    opacity: 0;
    animation-name: ${Iu};
    animation-duration: ${On}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  & .${je.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Pu};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  Mu = h.forwardRef(function (t, r) {
    const n = ae({ props: t, name: 'MuiTouchRipple' }),
      { center: o = !1, classes: i = {}, className: s, ...a } = n,
      [l, u] = h.useState([]),
      d = h.useRef(0),
      f = h.useRef(null);
    h.useEffect(() => {
      f.current && (f.current(), (f.current = null));
    }, [l]);
    const b = h.useRef(!1),
      y = Cs(),
      m = h.useRef(null),
      p = h.useRef(null),
      v = h.useCallback(
        (g) => {
          const { pulsate: S, rippleX: w, rippleY: $, rippleSize: M, cb: L } = g;
          (u((N) => [
            ...N,
            T.jsx(
              Au,
              {
                classes: {
                  ripple: U(i.ripple, je.ripple),
                  rippleVisible: U(i.rippleVisible, je.rippleVisible),
                  ripplePulsate: U(i.ripplePulsate, je.ripplePulsate),
                  child: U(i.child, je.child),
                  childLeaving: U(i.childLeaving, je.childLeaving),
                  childPulsate: U(i.childPulsate, je.childPulsate),
                },
                timeout: On,
                pulsate: S,
                rippleX: w,
                rippleY: $,
                rippleSize: M,
              },
              d.current,
            ),
          ]),
            (d.current += 1),
            (f.current = L));
        },
        [i],
      ),
      C = h.useCallback(
        (g = {}, S = {}, w = () => {}) => {
          const { pulsate: $ = !1, center: M = o || S.pulsate, fakeElement: L = !1 } = S;
          if ((g == null ? void 0 : g.type) === 'mousedown' && b.current) {
            b.current = !1;
            return;
          }
          (g == null ? void 0 : g.type) === 'touchstart' && (b.current = !0);
          const N = L ? null : p.current,
            B = N ? N.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
          let c, P, E;
          if (
            M ||
            g === void 0 ||
            (g.clientX === 0 && g.clientY === 0) ||
            (!g.clientX && !g.touches)
          )
            ((c = Math.round(B.width / 2)), (P = Math.round(B.height / 2)));
          else {
            const { clientX: I, clientY: A } = g.touches && g.touches.length > 0 ? g.touches[0] : g;
            ((c = Math.round(I - B.left)), (P = Math.round(A - B.top)));
          }
          if (M) ((E = Math.sqrt((2 * B.width ** 2 + B.height ** 2) / 3)), E % 2 === 0 && (E += 1));
          else {
            const I = Math.max(Math.abs((N ? N.clientWidth : 0) - c), c) * 2 + 2,
              A = Math.max(Math.abs((N ? N.clientHeight : 0) - P), P) * 2 + 2;
            E = Math.sqrt(I ** 2 + A ** 2);
          }
          g != null && g.touches
            ? m.current === null &&
              ((m.current = () => {
                v({ pulsate: $, rippleX: c, rippleY: P, rippleSize: E, cb: w });
              }),
              y.start(Eu, () => {
                m.current && (m.current(), (m.current = null));
              }))
            : v({ pulsate: $, rippleX: c, rippleY: P, rippleSize: E, cb: w });
        },
        [o, v, y],
      ),
      R = h.useCallback(() => {
        C({}, { pulsate: !0 });
      }, [C]),
      x = h.useCallback(
        (g, S) => {
          if ((y.clear(), (g == null ? void 0 : g.type) === 'touchend' && m.current)) {
            (m.current(),
              (m.current = null),
              y.start(0, () => {
                x(g, S);
              }));
            return;
          }
          ((m.current = null), u((w) => (w.length > 0 ? w.slice(1) : w)), (f.current = S));
        },
        [y],
      );
    return (
      h.useImperativeHandle(r, () => ({ pulsate: R, start: C, stop: x }), [R, C, x]),
      T.jsx($u, {
        className: U(je.root, i.root, s),
        ref: p,
        ...a,
        children: T.jsx(oo, { component: null, exit: !0, children: l }),
      })
    );
  });
function Ou(e) {
  return oe('MuiButtonBase', e);
}
const Bu = te('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  Lu = (e) => {
    const { disabled: t, focusVisible: r, focusVisibleClassName: n, classes: o } = e,
      s = ne({ root: ['root', t && 'disabled', r && 'focusVisible'] }, Ou, o);
    return (r && n && (s.root += ` ${n}`), s);
  },
  Nu = z('button', { name: 'MuiButtonBase', slot: 'Root' })({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    textDecoration: 'none',
    color: 'inherit',
    '&::-moz-focus-inner': { borderStyle: 'none' },
    [`&.${Bu.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' },
  }),
  so = h.forwardRef(function (t, r) {
    const n = ae({ props: t, name: 'MuiButtonBase' }),
      {
        action: o,
        centerRipple: i = !1,
        children: s,
        className: a,
        component: l = 'button',
        disabled: u = !1,
        disableRipple: d = !1,
        disableTouchRipple: f = !1,
        focusRipple: b = !1,
        focusVisibleClassName: y,
        LinkComponent: m = 'a',
        onBlur: p,
        onClick: v,
        onContextMenu: C,
        onDragLeave: R,
        onFocus: x,
        onFocusVisible: g,
        onKeyDown: S,
        onKeyUp: w,
        onMouseDown: $,
        onMouseLeave: M,
        onMouseUp: L,
        onTouchEnd: N,
        onTouchMove: B,
        onTouchStart: c,
        tabIndex: P = 0,
        TouchRippleProps: E,
        touchRippleRef: I,
        type: A,
        ...F
      } = n,
      H = h.useRef(null),
      O = wu(),
      q = Me(O.ref, I),
      [ie, xe] = h.useState(!1);
    (u && ie && xe(!1),
      h.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            (xe(!0), H.current.focus());
          },
        }),
        [],
      ));
    const Z = O.shouldMount && !d && !u;
    h.useEffect(() => {
      ie && b && !d && O.pulsate();
    }, [d, b, ie, O]);
    const he = nt(O, 'start', $, f),
      ue = nt(O, 'stop', C, f),
      Be = nt(O, 'stop', R, f),
      Te = nt(O, 'stop', L, f),
      Le = nt(
        O,
        'stop',
        (j) => {
          (ie && j.preventDefault(), M && M(j));
        },
        f,
      ),
      me = nt(O, 'start', c, f),
      _ = nt(O, 'stop', N, f),
      K = nt(O, 'stop', B, f),
      G = nt(
        O,
        'stop',
        (j) => {
          (ii(j.target) || xe(!1), p && p(j));
        },
        !1,
      ),
      Ce = xt((j) => {
        (H.current || (H.current = j.currentTarget),
          ii(j.target) && (xe(!0), g && g(j)),
          x && x(j));
      }),
      V = () => {
        const j = H.current;
        return l && l !== 'button' && !(j.tagName === 'A' && j.href);
      },
      de = xt((j) => {
        (b &&
          !j.repeat &&
          ie &&
          j.key === ' ' &&
          O.stop(j, () => {
            O.start(j);
          }),
          j.target === j.currentTarget && V() && j.key === ' ' && j.preventDefault(),
          S && S(j),
          j.target === j.currentTarget &&
            V() &&
            j.key === 'Enter' &&
            !u &&
            (j.preventDefault(), v && v(j)));
      }),
      Ne = xt((j) => {
        (b &&
          j.key === ' ' &&
          ie &&
          !j.defaultPrevented &&
          O.stop(j, () => {
            O.pulsate(j);
          }),
          w && w(j),
          v && j.target === j.currentTarget && V() && j.key === ' ' && !j.defaultPrevented && v(j));
      });
    let $e = l;
    $e === 'button' && (F.href || F.to) && ($e = m);
    const we = {};
    $e === 'button'
      ? ((we.type = A === void 0 ? 'button' : A), (we.disabled = u))
      : (!F.href && !F.to && (we.role = 'button'), u && (we['aria-disabled'] = u));
    const qe = Me(r, H),
      Ae = {
        ...n,
        centerRipple: i,
        component: l,
        disabled: u,
        disableRipple: d,
        disableTouchRipple: f,
        focusRipple: b,
        tabIndex: P,
        focusVisible: ie,
      },
      Se = Lu(Ae);
    return T.jsxs(Nu, {
      as: $e,
      className: U(Se.root, a),
      ownerState: Ae,
      onBlur: G,
      onClick: v,
      onContextMenu: ue,
      onFocus: Ce,
      onKeyDown: de,
      onKeyUp: Ne,
      onMouseDown: he,
      onMouseLeave: Le,
      onMouseUp: Te,
      onDragLeave: Be,
      onTouchEnd: _,
      onTouchMove: K,
      onTouchStart: me,
      ref: qe,
      tabIndex: u ? -1 : P,
      type: A,
      ...we,
      ...F,
      children: [s, Z ? T.jsx(Mu, { ref: q, center: i, ...E }) : null],
    });
  });
function nt(e, t, r, n = !1) {
  return xt((o) => (r && r(o), n || e[t](o), !0));
}
function Fu(e) {
  return typeof e.main == 'string';
}
function zu(e, t = []) {
  if (!Fu(e)) return !1;
  for (const r of t) if (!e.hasOwnProperty(r) || typeof e[r] != 'string') return !1;
  return !0;
}
function De(e = []) {
  return ([, t]) => t && zu(t, e);
}
function ju(e) {
  return oe('MuiAlert', e);
}
const si = te('MuiAlert', [
  'root',
  'action',
  'icon',
  'message',
  'filled',
  'colorSuccess',
  'colorInfo',
  'colorWarning',
  'colorError',
  'filledSuccess',
  'filledInfo',
  'filledWarning',
  'filledError',
  'outlined',
  'outlinedSuccess',
  'outlinedInfo',
  'outlinedWarning',
  'outlinedError',
  'standard',
  'standardSuccess',
  'standardInfo',
  'standardWarning',
  'standardError',
]);
function Wu(e) {
  return oe('MuiCircularProgress', e);
}
te('MuiCircularProgress', [
  'root',
  'determinate',
  'indeterminate',
  'colorPrimary',
  'colorSecondary',
  'svg',
  'track',
  'circle',
  'circleDeterminate',
  'circleIndeterminate',
  'circleDisableShrink',
]);
const Ue = 44,
  Bn = pr`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  Ln = pr`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,
  Du =
    typeof Bn != 'string'
      ? Xn`
        animation: ${Bn} 1.4s linear infinite;
      `
      : null,
  _u =
    typeof Ln != 'string'
      ? Xn`
        animation: ${Ln} 1.4s ease-in-out infinite;
      `
      : null,
  Hu = (e) => {
    const { classes: t, variant: r, color: n, disableShrink: o } = e,
      i = {
        root: ['root', r, `color${D(n)}`],
        svg: ['svg'],
        track: ['track'],
        circle: ['circle', `circle${D(r)}`, o && 'circleDisableShrink'],
      };
    return ne(i, Wu, t);
  },
  Uu = z('span', {
    name: 'MuiCircularProgress',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, t[r.variant], t[`color${D(r.color)}`]];
    },
  })(
    se(({ theme: e }) => ({
      display: 'inline-block',
      variants: [
        {
          props: { variant: 'determinate' },
          style: { transition: e.transitions.create('transform') },
        },
        {
          props: { variant: 'indeterminate' },
          style: Du || { animation: `${Bn} 1.4s linear infinite` },
        },
        ...Object.entries(e.palette)
          .filter(De())
          .map(([t]) => ({ props: { color: t }, style: { color: (e.vars || e).palette[t].main } })),
      ],
    })),
  ),
  Vu = z('svg', { name: 'MuiCircularProgress', slot: 'Svg' })({ display: 'block' }),
  qu = z('circle', {
    name: 'MuiCircularProgress',
    slot: 'Circle',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.circle, t[`circle${D(r.variant)}`], r.disableShrink && t.circleDisableShrink];
    },
  })(
    se(({ theme: e }) => ({
      stroke: 'currentColor',
      variants: [
        {
          props: { variant: 'determinate' },
          style: { transition: e.transitions.create('stroke-dashoffset') },
        },
        {
          props: { variant: 'indeterminate' },
          style: { strokeDasharray: '80px, 200px', strokeDashoffset: 0 },
        },
        {
          props: ({ ownerState: t }) => t.variant === 'indeterminate' && !t.disableShrink,
          style: _u || { animation: `${Ln} 1.4s ease-in-out infinite` },
        },
      ],
    })),
  ),
  Ku = z('circle', { name: 'MuiCircularProgress', slot: 'Track' })(
    se(({ theme: e }) => ({
      stroke: 'currentColor',
      opacity: (e.vars || e).palette.action.activatedOpacity,
    })),
  ),
  Is = h.forwardRef(function (t, r) {
    const n = ae({ props: t, name: 'MuiCircularProgress' }),
      {
        className: o,
        color: i = 'primary',
        disableShrink: s = !1,
        enableTrackSlot: a = !1,
        size: l = 40,
        style: u,
        thickness: d = 3.6,
        value: f = 0,
        variant: b = 'indeterminate',
        ...y
      } = n,
      m = {
        ...n,
        color: i,
        disableShrink: s,
        size: l,
        thickness: d,
        value: f,
        variant: b,
        enableTrackSlot: a,
      },
      p = Hu(m),
      v = {},
      C = {},
      R = {};
    if (b === 'determinate') {
      const x = 2 * Math.PI * ((Ue - d) / 2);
      ((v.strokeDasharray = x.toFixed(3)),
        (R['aria-valuenow'] = Math.round(f)),
        (v.strokeDashoffset = `${(((100 - f) / 100) * x).toFixed(3)}px`),
        (C.transform = 'rotate(-90deg)'));
    }
    return T.jsx(Uu, {
      className: U(p.root, o),
      style: { width: l, height: l, ...C, ...u },
      ownerState: m,
      ref: r,
      role: 'progressbar',
      ...R,
      ...y,
      children: T.jsxs(Vu, {
        className: p.svg,
        ownerState: m,
        viewBox: `${Ue / 2} ${Ue / 2} ${Ue} ${Ue}`,
        children: [
          a
            ? T.jsx(Ku, {
                className: p.track,
                ownerState: m,
                cx: Ue,
                cy: Ue,
                r: (Ue - d) / 2,
                fill: 'none',
                strokeWidth: d,
                'aria-hidden': 'true',
              })
            : null,
          T.jsx(qu, {
            className: p.circle,
            style: v,
            ownerState: m,
            cx: Ue,
            cy: Ue,
            r: (Ue - d) / 2,
            fill: 'none',
            strokeWidth: d,
          }),
        ],
      }),
    });
  });
function Gu(e) {
  return oe('MuiIconButton', e);
}
const ai = te('MuiIconButton', [
    'root',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorError',
    'colorInfo',
    'colorSuccess',
    'colorWarning',
    'edgeStart',
    'edgeEnd',
    'sizeSmall',
    'sizeMedium',
    'sizeLarge',
    'loading',
    'loadingIndicator',
    'loadingWrapper',
  ]),
  Yu = (e) => {
    const { classes: t, disabled: r, color: n, edge: o, size: i, loading: s } = e,
      a = {
        root: [
          'root',
          s && 'loading',
          r && 'disabled',
          n !== 'default' && `color${D(n)}`,
          o && `edge${D(o)}`,
          `size${D(i)}`,
        ],
        loadingIndicator: ['loadingIndicator'],
        loadingWrapper: ['loadingWrapper'],
      };
    return ne(a, Gu, t);
  },
  Xu = z(so, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.loading && t.loading,
        r.color !== 'default' && t[`color${D(r.color)}`],
        r.edge && t[`edge${D(r.edge)}`],
        t[`size${D(r.size)}`],
      ];
    },
  })(
    se(({ theme: e }) => ({
      textAlign: 'center',
      flex: '0 0 auto',
      fontSize: e.typography.pxToRem(24),
      padding: 8,
      borderRadius: '50%',
      color: (e.vars || e).palette.action.active,
      transition: e.transitions.create('background-color', {
        duration: e.transitions.duration.shortest,
      }),
      variants: [
        {
          props: (t) => !t.disableRipple,
          style: {
            '--IconButton-hoverBg': e.alpha(
              (e.vars || e).palette.action.active,
              (e.vars || e).palette.action.hoverOpacity,
            ),
            '&:hover': {
              backgroundColor: 'var(--IconButton-hoverBg)',
              '@media (hover: none)': { backgroundColor: 'transparent' },
            },
          },
        },
        { props: { edge: 'start' }, style: { marginLeft: -12 } },
        { props: { edge: 'start', size: 'small' }, style: { marginLeft: -3 } },
        { props: { edge: 'end' }, style: { marginRight: -12 } },
        { props: { edge: 'end', size: 'small' }, style: { marginRight: -3 } },
      ],
    })),
    se(({ theme: e }) => ({
      variants: [
        { props: { color: 'inherit' }, style: { color: 'inherit' } },
        ...Object.entries(e.palette)
          .filter(De())
          .map(([t]) => ({ props: { color: t }, style: { color: (e.vars || e).palette[t].main } })),
        ...Object.entries(e.palette)
          .filter(De())
          .map(([t]) => ({
            props: { color: t },
            style: {
              '--IconButton-hoverBg': e.alpha(
                (e.vars || e).palette[t].main,
                (e.vars || e).palette.action.hoverOpacity,
              ),
            },
          })),
        { props: { size: 'small' }, style: { padding: 5, fontSize: e.typography.pxToRem(18) } },
        { props: { size: 'large' }, style: { padding: 12, fontSize: e.typography.pxToRem(28) } },
      ],
      [`&.${ai.disabled}`]: {
        backgroundColor: 'transparent',
        color: (e.vars || e).palette.action.disabled,
      },
      [`&.${ai.loading}`]: { color: 'transparent' },
    })),
  ),
  Zu = z('span', { name: 'MuiIconButton', slot: 'LoadingIndicator' })(({ theme: e }) => ({
    display: 'none',
    position: 'absolute',
    visibility: 'visible',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: (e.vars || e).palette.action.disabled,
    variants: [{ props: { loading: !0 }, style: { display: 'flex' } }],
  })),
  Ps = h.forwardRef(function (t, r) {
    const n = ae({ props: t, name: 'MuiIconButton' }),
      {
        edge: o = !1,
        children: i,
        className: s,
        color: a = 'default',
        disabled: l = !1,
        disableFocusRipple: u = !1,
        size: d = 'medium',
        id: f,
        loading: b = null,
        loadingIndicator: y,
        ...m
      } = n,
      p = tn(f),
      v = y ?? T.jsx(Is, { 'aria-labelledby': p, color: 'inherit', size: 16 }),
      C = {
        ...n,
        edge: o,
        color: a,
        disabled: l,
        disableFocusRipple: u,
        loading: b,
        loadingIndicator: v,
        size: d,
      },
      R = Yu(C);
    return T.jsxs(Xu, {
      id: b ? p : f,
      className: U(R.root, s),
      centerRipple: !0,
      focusRipple: !u,
      disabled: l || b,
      ref: r,
      ...m,
      ownerState: C,
      children: [
        typeof b == 'boolean' &&
          T.jsx('span', {
            className: R.loadingWrapper,
            style: { display: 'contents' },
            children: T.jsx(Zu, { className: R.loadingIndicator, ownerState: C, children: b && v }),
          }),
        i,
      ],
    });
  }),
  Qu = Ct(
    T.jsx('path', {
      d: 'M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z',
    }),
  ),
  Ju = Ct(
    T.jsx('path', {
      d: 'M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z',
    }),
  ),
  ed = Ct(
    T.jsx('path', {
      d: 'M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
    }),
  ),
  td = Ct(
    T.jsx('path', {
      d: 'M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z',
    }),
  ),
  rd = Ct(
    T.jsx('path', {
      d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    }),
  ),
  nd = (e) => {
    const { variant: t, color: r, severity: n, classes: o } = e,
      i = {
        root: ['root', `color${D(r || n)}`, `${t}${D(r || n)}`, `${t}`],
        icon: ['icon'],
        message: ['message'],
        action: ['action'],
      };
    return ne(i, ju, o);
  },
  od = z(nn, {
    name: 'MuiAlert',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, t[r.variant], t[`${r.variant}${D(r.color || r.severity)}`]];
    },
  })(
    se(({ theme: e }) => {
      const t = e.palette.mode === 'light' ? e.darken : e.lighten,
        r = e.palette.mode === 'light' ? e.lighten : e.darken;
      return {
        ...e.typography.body2,
        backgroundColor: 'transparent',
        display: 'flex',
        padding: '6px 16px',
        variants: [
          ...Object.entries(e.palette)
            .filter(De(['light']))
            .map(([n]) => ({
              props: { colorSeverity: n, variant: 'standard' },
              style: {
                color: e.vars ? e.vars.palette.Alert[`${n}Color`] : t(e.palette[n].light, 0.6),
                backgroundColor: e.vars
                  ? e.vars.palette.Alert[`${n}StandardBg`]
                  : r(e.palette[n].light, 0.9),
                [`& .${si.icon}`]: e.vars
                  ? { color: e.vars.palette.Alert[`${n}IconColor`] }
                  : { color: e.palette[n].main },
              },
            })),
          ...Object.entries(e.palette)
            .filter(De(['light']))
            .map(([n]) => ({
              props: { colorSeverity: n, variant: 'outlined' },
              style: {
                color: e.vars ? e.vars.palette.Alert[`${n}Color`] : t(e.palette[n].light, 0.6),
                border: `1px solid ${(e.vars || e).palette[n].light}`,
                [`& .${si.icon}`]: e.vars
                  ? { color: e.vars.palette.Alert[`${n}IconColor`] }
                  : { color: e.palette[n].main },
              },
            })),
          ...Object.entries(e.palette)
            .filter(De(['dark']))
            .map(([n]) => ({
              props: { colorSeverity: n, variant: 'filled' },
              style: {
                fontWeight: e.typography.fontWeightMedium,
                ...(e.vars
                  ? {
                      color: e.vars.palette.Alert[`${n}FilledColor`],
                      backgroundColor: e.vars.palette.Alert[`${n}FilledBg`],
                    }
                  : {
                      backgroundColor:
                        e.palette.mode === 'dark' ? e.palette[n].dark : e.palette[n].main,
                      color: e.palette.getContrastText(e.palette[n].main),
                    }),
              },
            })),
        ],
      };
    }),
  ),
  id = z('div', { name: 'MuiAlert', slot: 'Icon' })({
    marginRight: 12,
    padding: '7px 0',
    display: 'flex',
    fontSize: 22,
    opacity: 0.9,
  }),
  sd = z('div', { name: 'MuiAlert', slot: 'Message' })({
    padding: '8px 0',
    minWidth: 0,
    overflow: 'auto',
  }),
  ad = z('div', { name: 'MuiAlert', slot: 'Action' })({
    display: 'flex',
    alignItems: 'flex-start',
    padding: '4px 0 0 16px',
    marginLeft: 'auto',
    marginRight: -8,
  }),
  li = {
    success: T.jsx(Qu, { fontSize: 'inherit' }),
    warning: T.jsx(Ju, { fontSize: 'inherit' }),
    error: T.jsx(ed, { fontSize: 'inherit' }),
    info: T.jsx(td, { fontSize: 'inherit' }),
  },
  ld = h.forwardRef(function (t, r) {
    const n = ae({ props: t, name: 'MuiAlert' }),
      {
        action: o,
        children: i,
        className: s,
        closeText: a = 'Close',
        color: l,
        components: u = {},
        componentsProps: d = {},
        icon: f,
        iconMapping: b = li,
        onClose: y,
        role: m = 'alert',
        severity: p = 'success',
        slotProps: v = {},
        slots: C = {},
        variant: R = 'standard',
        ...x
      } = n,
      g = { ...n, color: l, severity: p, variant: R, colorSeverity: l || p },
      S = nd(g),
      w = {
        slots: { closeButton: u.CloseButton, closeIcon: u.CloseIcon, ...C },
        slotProps: { ...d, ...v },
      },
      [$, M] = ce('root', {
        ref: r,
        shouldForwardComponentProp: !0,
        className: U(S.root, s),
        elementType: od,
        externalForwardedProps: { ...w, ...x },
        ownerState: g,
        additionalProps: { role: m, elevation: 0 },
      }),
      [L, N] = ce('icon', {
        className: S.icon,
        elementType: id,
        externalForwardedProps: w,
        ownerState: g,
      }),
      [B, c] = ce('message', {
        className: S.message,
        elementType: sd,
        externalForwardedProps: w,
        ownerState: g,
      }),
      [P, E] = ce('action', {
        className: S.action,
        elementType: ad,
        externalForwardedProps: w,
        ownerState: g,
      }),
      [I, A] = ce('closeButton', { elementType: Ps, externalForwardedProps: w, ownerState: g }),
      [F, H] = ce('closeIcon', { elementType: rd, externalForwardedProps: w, ownerState: g });
    return T.jsxs($, {
      ...M,
      children: [
        f !== !1 ? T.jsx(L, { ...N, children: f || b[p] || li[p] }) : null,
        T.jsx(B, { ...c, children: i }),
        o != null ? T.jsx(P, { ...E, children: o }) : null,
        o == null && y
          ? T.jsx(P, {
              ...E,
              children: T.jsx(I, {
                size: 'small',
                'aria-label': a,
                title: a,
                color: 'inherit',
                onClick: y,
                ...A,
                children: T.jsx(F, { fontSize: 'small', ...H }),
              }),
            })
          : null,
      ],
    });
  });
function cd(e) {
  return oe('MuiTypography', e);
}
const ci = te('MuiTypography', [
    'root',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'inherit',
    'button',
    'caption',
    'overline',
    'alignLeft',
    'alignRight',
    'alignCenter',
    'alignJustify',
    'noWrap',
    'gutterBottom',
    'paragraph',
  ]),
  ud = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0,
  },
  dd = ou(),
  pd = (e) => {
    const { align: t, gutterBottom: r, noWrap: n, paragraph: o, variant: i, classes: s } = e,
      a = {
        root: [
          'root',
          i,
          e.align !== 'inherit' && `align${D(t)}`,
          r && 'gutterBottom',
          n && 'noWrap',
          o && 'paragraph',
        ],
      };
    return ne(a, cd, s);
  },
  fd = z('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.variant && t[r.variant],
        r.align !== 'inherit' && t[`align${D(r.align)}`],
        r.noWrap && t.noWrap,
        r.gutterBottom && t.gutterBottom,
        r.paragraph && t.paragraph,
      ];
    },
  })(
    se(({ theme: e }) => {
      var t;
      return {
        margin: 0,
        variants: [
          {
            props: { variant: 'inherit' },
            style: { font: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit' },
          },
          ...Object.entries(e.typography)
            .filter(([r, n]) => r !== 'inherit' && n && typeof n == 'object')
            .map(([r, n]) => ({ props: { variant: r }, style: n })),
          ...Object.entries(e.palette)
            .filter(De())
            .map(([r]) => ({
              props: { color: r },
              style: { color: (e.vars || e).palette[r].main },
            })),
          ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {})
            .filter(([, r]) => typeof r == 'string')
            .map(([r]) => ({
              props: { color: `text${D(r)}` },
              style: { color: (e.vars || e).palette.text[r] },
            })),
          {
            props: ({ ownerState: r }) => r.align !== 'inherit',
            style: { textAlign: 'var(--Typography-textAlign)' },
          },
          {
            props: ({ ownerState: r }) => r.noWrap,
            style: { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
          },
          { props: ({ ownerState: r }) => r.gutterBottom, style: { marginBottom: '0.35em' } },
          { props: ({ ownerState: r }) => r.paragraph, style: { marginBottom: 16 } },
        ],
      };
    }),
  ),
  ui = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p',
  },
  it = h.forwardRef(function (t, r) {
    const { color: n, ...o } = ae({ props: t, name: 'MuiTypography' }),
      i = !ud[n],
      s = dd({ ...o, ...(i && { color: n }) }),
      {
        align: a = 'inherit',
        className: l,
        component: u,
        gutterBottom: d = !1,
        noWrap: f = !1,
        paragraph: b = !1,
        variant: y = 'body1',
        variantMapping: m = ui,
        ...p
      } = s,
      v = {
        ...s,
        align: a,
        color: n,
        className: l,
        component: u,
        gutterBottom: d,
        noWrap: f,
        paragraph: b,
        variant: y,
        variantMapping: m,
      },
      C = u || (b ? 'p' : m[y] || ui[y]) || 'span',
      R = pd(v);
    return T.jsx(fd, {
      as: C,
      ref: r,
      className: U(R.root, l),
      ...p,
      ownerState: v,
      style: { ...(a !== 'inherit' && { '--Typography-textAlign': a }), ...p.style },
    });
  });
function md(e) {
  var f;
  const {
      elementType: t,
      externalSlotProps: r,
      ownerState: n,
      skipResolvingSlotProps: o = !1,
      ...i
    } = e,
    s = o ? {} : Rs(r, n),
    { props: a, internalRef: l } = ks({ ...i, externalSlotProps: s }),
    u = Me(l, s == null ? void 0 : s.ref, (f = e.additionalProps) == null ? void 0 : f.ref);
  return Ts(t, { ...a, ref: u }, n);
}
function fr(e) {
  var t;
  return parseInt(h.version, 10) >= 19
    ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null
    : (e == null ? void 0 : e.ref) || null;
}
function hd(e) {
  return typeof e == 'function' ? e() : e;
}
const gd = h.forwardRef(function (t, r) {
  const { children: n, container: o, disablePortal: i = !1 } = t,
    [s, a] = h.useState(null),
    l = Me(h.isValidElement(n) ? fr(n) : null, r);
  if (
    (dt(() => {
      i || a(hd(o) || document.body);
    }, [o, i]),
    dt(() => {
      if (s && !i)
        return (
          ei(r, s),
          () => {
            ei(r, null);
          }
        );
    }, [r, s, i]),
    i)
  ) {
    if (h.isValidElement(n)) {
      const u = { ref: l };
      return h.cloneElement(n, u);
    }
    return n;
  }
  return s && qs.createPortal(n, s);
});
function br(e) {
  return parseInt(e, 10) || 0;
}
const yd = {
  shadow: {
    visibility: 'hidden',
    position: 'absolute',
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    transform: 'translateZ(0)',
  },
};
function bd(e) {
  for (const t in e) return !1;
  return !0;
}
function di(e) {
  return bd(e) || (e.outerHeightStyle === 0 && !e.overflowing);
}
const vd = h.forwardRef(function (t, r) {
  const { onChange: n, maxRows: o, minRows: i = 1, style: s, value: a, ...l } = t,
    { current: u } = h.useRef(a != null),
    d = h.useRef(null),
    f = Me(r, d),
    b = h.useRef(null),
    y = h.useRef(null),
    m = h.useCallback(() => {
      const x = d.current,
        g = y.current;
      if (!x || !g) return;
      const w = lt(x).getComputedStyle(x);
      if (w.width === '0px') return { outerHeightStyle: 0, overflowing: !1 };
      ((g.style.width = w.width),
        (g.value = x.value || t.placeholder || 'x'),
        g.value.slice(-1) ===
          `
` && (g.value += ' '));
      const $ = w.boxSizing,
        M = br(w.paddingBottom) + br(w.paddingTop),
        L = br(w.borderBottomWidth) + br(w.borderTopWidth),
        N = g.scrollHeight;
      g.value = 'x';
      const B = g.scrollHeight;
      let c = N;
      (i && (c = Math.max(Number(i) * B, c)),
        o && (c = Math.min(Number(o) * B, c)),
        (c = Math.max(c, B)));
      const P = c + ($ === 'border-box' ? M + L : 0),
        E = Math.abs(c - N) <= 1;
      return { outerHeightStyle: P, overflowing: E };
    }, [o, i, t.placeholder]),
    p = xt(() => {
      const x = d.current,
        g = m();
      if (!x || !g || di(g)) return !1;
      const S = g.outerHeightStyle;
      return b.current != null && b.current !== S;
    }),
    v = h.useCallback(() => {
      const x = d.current,
        g = m();
      if (!x || !g || di(g)) return;
      const S = g.outerHeightStyle;
      (b.current !== S && ((b.current = S), (x.style.height = `${S}px`)),
        (x.style.overflow = g.overflowing ? 'hidden' : ''));
    }, [m]),
    C = h.useRef(-1);
  (dt(() => {
    const x = bs(v),
      g = d == null ? void 0 : d.current;
    if (!g) return;
    const S = lt(g);
    S.addEventListener('resize', x);
    let w;
    return (
      typeof ResizeObserver < 'u' &&
        ((w = new ResizeObserver(() => {
          p() &&
            (w.unobserve(g),
            cancelAnimationFrame(C.current),
            v(),
            (C.current = requestAnimationFrame(() => {
              w.observe(g);
            })));
        })),
        w.observe(g)),
      () => {
        (x.clear(),
          cancelAnimationFrame(C.current),
          S.removeEventListener('resize', x),
          w && w.disconnect());
      }
    );
  }, [m, v, p]),
    dt(() => {
      v();
    }));
  const R = (x) => {
    u || v();
    const g = x.target,
      S = g.value.length,
      w = g.value.endsWith(`
`),
      $ = g.selectionStart === S;
    (w && $ && g.setSelectionRange(S, S), n && n(x));
  };
  return T.jsxs(h.Fragment, {
    children: [
      T.jsx('textarea', { value: a, onChange: R, ref: f, rows: i, style: s, ...l }),
      T.jsx('textarea', {
        'aria-hidden': !0,
        className: t.className,
        readOnly: !0,
        ref: y,
        tabIndex: -1,
        style: { ...yd.shadow, ...s, paddingTop: 0, paddingBottom: 0 },
      }),
    ],
  });
});
function Wt({ props: e, states: t, muiFormControl: r }) {
  return t.reduce((n, o) => ((n[o] = e[o]), r && typeof e[o] > 'u' && (n[o] = r[o]), n), {});
}
const ao = h.createContext(void 0);
function Dt() {
  return h.useContext(ao);
}
function pi(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function jr(e, t = !1) {
  return (
    e && ((pi(e.value) && e.value !== '') || (t && pi(e.defaultValue) && e.defaultValue !== ''))
  );
}
function xd(e) {
  return e.startAdornment;
}
function Sd(e) {
  return oe('MuiInputBase', e);
}
const zt = te('MuiInputBase', [
  'root',
  'formControl',
  'focused',
  'disabled',
  'adornedStart',
  'adornedEnd',
  'error',
  'sizeSmall',
  'multiline',
  'colorSecondary',
  'fullWidth',
  'hiddenLabel',
  'readOnly',
  'input',
  'inputSizeSmall',
  'inputMultiline',
  'inputTypeSearch',
  'inputAdornedStart',
  'inputAdornedEnd',
  'inputHiddenLabel',
]);
var fi;
const on = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      r.formControl && t.formControl,
      r.startAdornment && t.adornedStart,
      r.endAdornment && t.adornedEnd,
      r.error && t.error,
      r.size === 'small' && t.sizeSmall,
      r.multiline && t.multiline,
      r.color && t[`color${D(r.color)}`],
      r.fullWidth && t.fullWidth,
      r.hiddenLabel && t.hiddenLabel,
    ];
  },
  sn = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.input,
      r.size === 'small' && t.inputSizeSmall,
      r.multiline && t.inputMultiline,
      r.type === 'search' && t.inputTypeSearch,
      r.startAdornment && t.inputAdornedStart,
      r.endAdornment && t.inputAdornedEnd,
      r.hiddenLabel && t.inputHiddenLabel,
    ];
  },
  Cd = (e) => {
    const {
        classes: t,
        color: r,
        disabled: n,
        error: o,
        endAdornment: i,
        focused: s,
        formControl: a,
        fullWidth: l,
        hiddenLabel: u,
        multiline: d,
        readOnly: f,
        size: b,
        startAdornment: y,
        type: m,
      } = e,
      p = {
        root: [
          'root',
          `color${D(r)}`,
          n && 'disabled',
          o && 'error',
          l && 'fullWidth',
          s && 'focused',
          a && 'formControl',
          b && b !== 'medium' && `size${D(b)}`,
          d && 'multiline',
          y && 'adornedStart',
          i && 'adornedEnd',
          u && 'hiddenLabel',
          f && 'readOnly',
        ],
        input: [
          'input',
          n && 'disabled',
          m === 'search' && 'inputTypeSearch',
          d && 'inputMultiline',
          b === 'small' && 'inputSizeSmall',
          u && 'inputHiddenLabel',
          y && 'inputAdornedStart',
          i && 'inputAdornedEnd',
          f && 'readOnly',
        ],
      };
    return ne(p, Sd, t);
  },
  an = z('div', { name: 'MuiInputBase', slot: 'Root', overridesResolver: on })(
    se(({ theme: e }) => ({
      ...e.typography.body1,
      color: (e.vars || e).palette.text.primary,
      lineHeight: '1.4375em',
      boxSizing: 'border-box',
      position: 'relative',
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      [`&.${zt.disabled}`]: { color: (e.vars || e).palette.text.disabled, cursor: 'default' },
      variants: [
        { props: ({ ownerState: t }) => t.multiline, style: { padding: '4px 0 5px' } },
        {
          props: ({ ownerState: t, size: r }) => t.multiline && r === 'small',
          style: { paddingTop: 1 },
        },
        { props: ({ ownerState: t }) => t.fullWidth, style: { width: '100%' } },
      ],
    })),
  ),
  ln = z('input', { name: 'MuiInputBase', slot: 'Input', overridesResolver: sn })(
    se(({ theme: e }) => {
      const t = e.palette.mode === 'light',
        r = {
          color: 'currentColor',
          ...(e.vars ? { opacity: e.vars.opacity.inputPlaceholder } : { opacity: t ? 0.42 : 0.5 }),
          transition: e.transitions.create('opacity', { duration: e.transitions.duration.shorter }),
        },
        n = { opacity: '0 !important' },
        o = e.vars ? { opacity: e.vars.opacity.inputPlaceholder } : { opacity: t ? 0.42 : 0.5 };
      return {
        font: 'inherit',
        letterSpacing: 'inherit',
        color: 'currentColor',
        padding: '4px 0 5px',
        border: 0,
        boxSizing: 'content-box',
        background: 'none',
        height: '1.4375em',
        margin: 0,
        WebkitTapHighlightColor: 'transparent',
        display: 'block',
        minWidth: 0,
        width: '100%',
        '&::-webkit-input-placeholder': r,
        '&::-moz-placeholder': r,
        '&::-ms-input-placeholder': r,
        '&:focus': { outline: 0 },
        '&:invalid': { boxShadow: 'none' },
        '&::-webkit-search-decoration': { WebkitAppearance: 'none' },
        [`label[data-shrink=false] + .${zt.formControl} &`]: {
          '&::-webkit-input-placeholder': n,
          '&::-moz-placeholder': n,
          '&::-ms-input-placeholder': n,
          '&:focus::-webkit-input-placeholder': o,
          '&:focus::-moz-placeholder': o,
          '&:focus::-ms-input-placeholder': o,
        },
        [`&.${zt.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        variants: [
          {
            props: ({ ownerState: i }) => !i.disableInjectingGlobalStyles,
            style: {
              animationName: 'mui-auto-fill-cancel',
              animationDuration: '10ms',
              '&:-webkit-autofill': { animationDuration: '5000s', animationName: 'mui-auto-fill' },
            },
          },
          { props: { size: 'small' }, style: { paddingTop: 1 } },
          {
            props: ({ ownerState: i }) => i.multiline,
            style: { height: 'auto', resize: 'none', padding: 0, paddingTop: 0 },
          },
          { props: { type: 'search' }, style: { MozAppearance: 'textfield' } },
        ],
      };
    }),
  ),
  mi = nu({
    '@keyframes mui-auto-fill': { from: { display: 'block' } },
    '@keyframes mui-auto-fill-cancel': { from: { display: 'block' } },
  }),
  lo = h.forwardRef(function (t, r) {
    const n = ae({ props: t, name: 'MuiInputBase' }),
      {
        'aria-describedby': o,
        autoComplete: i,
        autoFocus: s,
        className: a,
        color: l,
        components: u = {},
        componentsProps: d = {},
        defaultValue: f,
        disabled: b,
        disableInjectingGlobalStyles: y,
        endAdornment: m,
        error: p,
        fullWidth: v = !1,
        id: C,
        inputComponent: R = 'input',
        inputProps: x = {},
        inputRef: g,
        margin: S,
        maxRows: w,
        minRows: $,
        multiline: M = !1,
        name: L,
        onBlur: N,
        onChange: B,
        onClick: c,
        onFocus: P,
        onKeyDown: E,
        onKeyUp: I,
        placeholder: A,
        readOnly: F,
        renderSuffix: H,
        rows: O,
        size: q,
        slotProps: ie = {},
        slots: xe = {},
        startAdornment: Z,
        type: he = 'text',
        value: ue,
        ...Be
      } = n,
      Te = x.value != null ? x.value : ue,
      { current: Le } = h.useRef(Te != null),
      me = h.useRef(),
      _ = h.useCallback((pe) => {}, []),
      K = Me(me, g, x.ref, _),
      [G, Ce] = h.useState(!1),
      V = Dt(),
      de = Wt({
        props: n,
        muiFormControl: V,
        states: ['color', 'disabled', 'error', 'hiddenLabel', 'size', 'required', 'filled'],
      });
    ((de.focused = V ? V.focused : G),
      h.useEffect(() => {
        !V && b && G && (Ce(!1), N && N());
      }, [V, b, G, N]));
    const Ne = V && V.onFilled,
      $e = V && V.onEmpty,
      we = h.useCallback(
        (pe) => {
          jr(pe) ? Ne && Ne() : $e && $e();
        },
        [Ne, $e],
      );
    dt(() => {
      Le && we({ value: Te });
    }, [Te, we, Le]);
    const qe = (pe) => {
        (P && P(pe), x.onFocus && x.onFocus(pe), V && V.onFocus ? V.onFocus(pe) : Ce(!0));
      },
      Ae = (pe) => {
        (N && N(pe), x.onBlur && x.onBlur(pe), V && V.onBlur ? V.onBlur(pe) : Ce(!1));
      },
      Se = (pe, ...Et) => {
        if (!Le) {
          const mr = pe.target || me.current;
          if (mr == null) throw new Error(st(1));
          we({ value: mr.value });
        }
        (x.onChange && x.onChange(pe, ...Et), B && B(pe, ...Et));
      };
    h.useEffect(() => {
      we(me.current);
    }, []);
    const j = (pe) => {
      (me.current && pe.currentTarget === pe.target && me.current.focus(), c && c(pe));
    };
    let ct = R,
      Re = x;
    M &&
      ct === 'input' &&
      (O
        ? (Re = { type: void 0, minRows: O, maxRows: O, ...Re })
        : (Re = { type: void 0, maxRows: w, minRows: $, ...Re }),
      (ct = vd));
    const wt = (pe) => {
      we(pe.animationName === 'mui-auto-fill-cancel' ? me.current : { value: 'x' });
    };
    h.useEffect(() => {
      V && V.setAdornedStart(!!Z);
    }, [V, Z]);
    const _t = {
        ...n,
        color: de.color || 'primary',
        disabled: de.disabled,
        endAdornment: m,
        error: de.error,
        focused: de.focused,
        formControl: V,
        fullWidth: v,
        hiddenLabel: de.hiddenLabel,
        multiline: M,
        size: de.size,
        startAdornment: Z,
        type: he,
      },
      Ht = Cd(_t),
      Tt = xe.root || u.Root || an,
      Rt = ie.root || d.root || {},
      tt = xe.input || u.Input || ln;
    return (
      (Re = { ...Re, ...(ie.input ?? d.input) }),
      T.jsxs(h.Fragment, {
        children: [
          !y && typeof mi == 'function' && (fi || (fi = T.jsx(mi, {}))),
          T.jsxs(Tt, {
            ...Rt,
            ref: r,
            onClick: j,
            ...Be,
            ...(!Fr(Tt) && { ownerState: { ..._t, ...Rt.ownerState } }),
            className: U(Ht.root, Rt.className, a, F && 'MuiInputBase-readOnly'),
            children: [
              Z,
              T.jsx(ao.Provider, {
                value: null,
                children: T.jsx(tt, {
                  'aria-invalid': de.error,
                  'aria-describedby': o,
                  autoComplete: i,
                  autoFocus: s,
                  defaultValue: f,
                  disabled: de.disabled,
                  id: C,
                  onAnimationStart: wt,
                  name: L,
                  placeholder: A,
                  readOnly: F,
                  required: de.required,
                  rows: O,
                  value: Te,
                  onKeyDown: E,
                  onKeyUp: I,
                  type: he,
                  ...Re,
                  ...(!Fr(tt) && { as: ct, ownerState: { ..._t, ...Re.ownerState } }),
                  ref: K,
                  className: U(Ht.input, Re.className, F && 'MuiInputBase-readOnly'),
                  onBlur: Ae,
                  onChange: Se,
                  onFocus: qe,
                }),
              }),
              m,
              H ? H({ ...de, startAdornment: Z }) : null,
            ],
          }),
        ],
      })
    );
  });
function wd(e) {
  return oe('MuiInput', e);
}
const Kt = { ...zt, ...te('MuiInput', ['root', 'underline', 'input']) };
function Td(e) {
  return oe('MuiOutlinedInput', e);
}
const Ge = { ...zt, ...te('MuiOutlinedInput', ['root', 'notchedOutline', 'input']) };
function Rd(e) {
  return oe('MuiFilledInput', e);
}
const mt = {
    ...zt,
    ...te('MuiFilledInput', [
      'root',
      'underline',
      'input',
      'adornedStart',
      'adornedEnd',
      'sizeSmall',
      'multiline',
      'hiddenLabel',
    ]),
  },
  Ed = Ct(T.jsx('path', { d: 'M7 10l5 5 5-5z' })),
  kd = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  Id = h.forwardRef(function (t, r) {
    const n = ro(),
      o = {
        enter: n.transitions.duration.enteringScreen,
        exit: n.transitions.duration.leavingScreen,
      },
      {
        addEndListener: i,
        appear: s = !0,
        children: a,
        easing: l,
        in: u,
        onEnter: d,
        onEntered: f,
        onEntering: b,
        onExit: y,
        onExited: m,
        onExiting: p,
        style: v,
        timeout: C = o,
        TransitionComponent: R = et,
        ...x
      } = t,
      g = h.useRef(null),
      S = Me(g, fr(a), r),
      w = (E) => (I) => {
        if (E) {
          const A = g.current;
          I === void 0 ? E(A) : E(A, I);
        }
      },
      $ = w(b),
      M = w((E, I) => {
        ws(E);
        const A = Nr({ style: v, timeout: C, easing: l }, { mode: 'enter' });
        ((E.style.webkitTransition = n.transitions.create('opacity', A)),
          (E.style.transition = n.transitions.create('opacity', A)),
          d && d(E, I));
      }),
      L = w(f),
      N = w(p),
      B = w((E) => {
        const I = Nr({ style: v, timeout: C, easing: l }, { mode: 'exit' });
        ((E.style.webkitTransition = n.transitions.create('opacity', I)),
          (E.style.transition = n.transitions.create('opacity', I)),
          y && y(E));
      }),
      c = w(m),
      P = (E) => {
        i && i(g.current, E);
      };
    return T.jsx(R, {
      appear: s,
      in: u,
      nodeRef: g,
      onEnter: M,
      onEntered: L,
      onEntering: $,
      onExit: B,
      onExited: c,
      onExiting: N,
      addEndListener: P,
      timeout: C,
      ...x,
      children: (E, { ownerState: I, ...A }) =>
        h.cloneElement(a, {
          style: {
            opacity: 0,
            visibility: E === 'exited' && !u ? 'hidden' : void 0,
            ...kd[E],
            ...v,
            ...a.props.style,
          },
          ref: S,
          ...A,
        }),
    });
  });
function Pd(e) {
  return oe('MuiBackdrop', e);
}
te('MuiBackdrop', ['root', 'invisible']);
const $d = (e) => {
    const { classes: t, invisible: r } = e;
    return ne({ root: ['root', r && 'invisible'] }, Pd, t);
  },
  Ad = z('div', {
    name: 'MuiBackdrop',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, r.invisible && t.invisible];
    },
  })({
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent',
    variants: [{ props: { invisible: !0 }, style: { backgroundColor: 'transparent' } }],
  }),
  Md = h.forwardRef(function (t, r) {
    const n = ae({ props: t, name: 'MuiBackdrop' }),
      {
        children: o,
        className: i,
        component: s = 'div',
        invisible: a = !1,
        open: l,
        components: u = {},
        componentsProps: d = {},
        slotProps: f = {},
        slots: b = {},
        TransitionComponent: y,
        transitionDuration: m,
        ...p
      } = n,
      v = { ...n, component: s, invisible: a },
      C = $d(v),
      R = { transition: y, root: u.Root, ...b },
      x = { ...d, ...f },
      g = { component: s, slots: R, slotProps: x },
      [S, w] = ce('root', {
        elementType: Ad,
        externalForwardedProps: g,
        className: U(C.root, i),
        ownerState: v,
      }),
      [$, M] = ce('transition', { elementType: Id, externalForwardedProps: g, ownerState: v });
    return T.jsx($, {
      in: l,
      timeout: m,
      ...p,
      ...M,
      children: T.jsx(S, { 'aria-hidden': !0, ...w, classes: C, ref: r, children: o }),
    });
  }),
  Od = te('MuiBox', ['root']),
  Bd = gs(),
  Qe = Yl({
    themeId: rn,
    defaultTheme: Bd,
    defaultClassName: Od.root,
    generateClassName: Wi.generate,
  });
function Ld(e) {
  return oe('MuiButton', e);
}
const ht = te('MuiButton', [
    'root',
    'text',
    'textInherit',
    'textPrimary',
    'textSecondary',
    'textSuccess',
    'textError',
    'textInfo',
    'textWarning',
    'outlined',
    'outlinedInherit',
    'outlinedPrimary',
    'outlinedSecondary',
    'outlinedSuccess',
    'outlinedError',
    'outlinedInfo',
    'outlinedWarning',
    'contained',
    'containedInherit',
    'containedPrimary',
    'containedSecondary',
    'containedSuccess',
    'containedError',
    'containedInfo',
    'containedWarning',
    'disableElevation',
    'focusVisible',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorError',
    'colorInfo',
    'colorWarning',
    'textSizeSmall',
    'textSizeMedium',
    'textSizeLarge',
    'outlinedSizeSmall',
    'outlinedSizeMedium',
    'outlinedSizeLarge',
    'containedSizeSmall',
    'containedSizeMedium',
    'containedSizeLarge',
    'sizeMedium',
    'sizeSmall',
    'sizeLarge',
    'fullWidth',
    'startIcon',
    'endIcon',
    'icon',
    'iconSizeSmall',
    'iconSizeMedium',
    'iconSizeLarge',
    'loading',
    'loadingWrapper',
    'loadingIconPlaceholder',
    'loadingIndicator',
    'loadingPositionCenter',
    'loadingPositionStart',
    'loadingPositionEnd',
  ]),
  Nd = h.createContext({}),
  Fd = h.createContext(void 0),
  zd = (e) => {
    const {
        color: t,
        disableElevation: r,
        fullWidth: n,
        size: o,
        variant: i,
        loading: s,
        loadingPosition: a,
        classes: l,
      } = e,
      u = {
        root: [
          'root',
          s && 'loading',
          i,
          `${i}${D(t)}`,
          `size${D(o)}`,
          `${i}Size${D(o)}`,
          `color${D(t)}`,
          r && 'disableElevation',
          n && 'fullWidth',
          s && `loadingPosition${D(a)}`,
        ],
        startIcon: ['icon', 'startIcon', `iconSize${D(o)}`],
        endIcon: ['icon', 'endIcon', `iconSize${D(o)}`],
        loadingIndicator: ['loadingIndicator'],
        loadingWrapper: ['loadingWrapper'],
      },
      d = ne(u, Ld, l);
    return { ...l, ...d };
  },
  $s = [
    { props: { size: 'small' }, style: { '& > *:nth-of-type(1)': { fontSize: 18 } } },
    { props: { size: 'medium' }, style: { '& > *:nth-of-type(1)': { fontSize: 20 } } },
    { props: { size: 'large' }, style: { '& > *:nth-of-type(1)': { fontSize: 22 } } },
  ],
  jd = z(so, {
    shouldForwardProp: (e) => He(e) || e === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[r.variant],
        t[`${r.variant}${D(r.color)}`],
        t[`size${D(r.size)}`],
        t[`${r.variant}Size${D(r.size)}`],
        r.color === 'inherit' && t.colorInherit,
        r.disableElevation && t.disableElevation,
        r.fullWidth && t.fullWidth,
        r.loading && t.loading,
      ];
    },
  })(
    se(({ theme: e }) => {
      const t = e.palette.mode === 'light' ? e.palette.grey[300] : e.palette.grey[800],
        r = e.palette.mode === 'light' ? e.palette.grey.A100 : e.palette.grey[700];
      return {
        ...e.typography.button,
        minWidth: 64,
        padding: '6px 16px',
        border: 0,
        borderRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create(
          ['background-color', 'box-shadow', 'border-color', 'color'],
          { duration: e.transitions.duration.short },
        ),
        '&:hover': { textDecoration: 'none' },
        [`&.${ht.disabled}`]: { color: (e.vars || e).palette.action.disabled },
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              color: 'var(--variant-containedColor)',
              backgroundColor: 'var(--variant-containedBg)',
              boxShadow: (e.vars || e).shadows[2],
              '&:hover': {
                boxShadow: (e.vars || e).shadows[4],
                '@media (hover: none)': { boxShadow: (e.vars || e).shadows[2] },
              },
              '&:active': { boxShadow: (e.vars || e).shadows[8] },
              [`&.${ht.focusVisible}`]: { boxShadow: (e.vars || e).shadows[6] },
              [`&.${ht.disabled}`]: {
                color: (e.vars || e).palette.action.disabled,
                boxShadow: (e.vars || e).shadows[0],
                backgroundColor: (e.vars || e).palette.action.disabledBackground,
              },
            },
          },
          {
            props: { variant: 'outlined' },
            style: {
              padding: '5px 15px',
              border: '1px solid currentColor',
              borderColor: 'var(--variant-outlinedBorder, currentColor)',
              backgroundColor: 'var(--variant-outlinedBg)',
              color: 'var(--variant-outlinedColor)',
              [`&.${ht.disabled}`]: {
                border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`,
              },
            },
          },
          {
            props: { variant: 'text' },
            style: {
              padding: '6px 8px',
              color: 'var(--variant-textColor)',
              backgroundColor: 'var(--variant-textBg)',
            },
          },
          ...Object.entries(e.palette)
            .filter(De())
            .map(([n]) => ({
              props: { color: n },
              style: {
                '--variant-textColor': (e.vars || e).palette[n].main,
                '--variant-outlinedColor': (e.vars || e).palette[n].main,
                '--variant-outlinedBorder': e.alpha((e.vars || e).palette[n].main, 0.5),
                '--variant-containedColor': (e.vars || e).palette[n].contrastText,
                '--variant-containedBg': (e.vars || e).palette[n].main,
                '@media (hover: hover)': {
                  '&:hover': {
                    '--variant-containedBg': (e.vars || e).palette[n].dark,
                    '--variant-textBg': e.alpha(
                      (e.vars || e).palette[n].main,
                      (e.vars || e).palette.action.hoverOpacity,
                    ),
                    '--variant-outlinedBorder': (e.vars || e).palette[n].main,
                    '--variant-outlinedBg': e.alpha(
                      (e.vars || e).palette[n].main,
                      (e.vars || e).palette.action.hoverOpacity,
                    ),
                  },
                },
              },
            })),
          {
            props: { color: 'inherit' },
            style: {
              color: 'inherit',
              borderColor: 'currentColor',
              '--variant-containedBg': e.vars ? e.vars.palette.Button.inheritContainedBg : t,
              '@media (hover: hover)': {
                '&:hover': {
                  '--variant-containedBg': e.vars
                    ? e.vars.palette.Button.inheritContainedHoverBg
                    : r,
                  '--variant-textBg': e.alpha(
                    (e.vars || e).palette.text.primary,
                    (e.vars || e).palette.action.hoverOpacity,
                  ),
                  '--variant-outlinedBg': e.alpha(
                    (e.vars || e).palette.text.primary,
                    (e.vars || e).palette.action.hoverOpacity,
                  ),
                },
              },
            },
          },
          {
            props: { size: 'small', variant: 'text' },
            style: { padding: '4px 5px', fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'text' },
            style: { padding: '8px 11px', fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { size: 'small', variant: 'outlined' },
            style: { padding: '3px 9px', fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'outlined' },
            style: { padding: '7px 21px', fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { size: 'small', variant: 'contained' },
            style: { padding: '4px 10px', fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'contained' },
            style: { padding: '8px 22px', fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { disableElevation: !0 },
            style: {
              boxShadow: 'none',
              '&:hover': { boxShadow: 'none' },
              [`&.${ht.focusVisible}`]: { boxShadow: 'none' },
              '&:active': { boxShadow: 'none' },
              [`&.${ht.disabled}`]: { boxShadow: 'none' },
            },
          },
          { props: { fullWidth: !0 }, style: { width: '100%' } },
          {
            props: { loadingPosition: 'center' },
            style: {
              transition: e.transitions.create(['background-color', 'box-shadow', 'border-color'], {
                duration: e.transitions.duration.short,
              }),
              [`&.${ht.loading}`]: { color: 'transparent' },
            },
          },
        ],
      };
    }),
  ),
  Wd = z('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.startIcon, r.loading && t.startIconLoadingStart, t[`iconSize${D(r.size)}`]];
    },
  })(({ theme: e }) => ({
    display: 'inherit',
    marginRight: 8,
    marginLeft: -4,
    variants: [
      { props: { size: 'small' }, style: { marginLeft: -2 } },
      {
        props: { loadingPosition: 'start', loading: !0 },
        style: {
          transition: e.transitions.create(['opacity'], { duration: e.transitions.duration.short }),
          opacity: 0,
        },
      },
      {
        props: { loadingPosition: 'start', loading: !0, fullWidth: !0 },
        style: { marginRight: -8 },
      },
      ...$s,
    ],
  })),
  Dd = z('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.endIcon, r.loading && t.endIconLoadingEnd, t[`iconSize${D(r.size)}`]];
    },
  })(({ theme: e }) => ({
    display: 'inherit',
    marginRight: -4,
    marginLeft: 8,
    variants: [
      { props: { size: 'small' }, style: { marginRight: -2 } },
      {
        props: { loadingPosition: 'end', loading: !0 },
        style: {
          transition: e.transitions.create(['opacity'], { duration: e.transitions.duration.short }),
          opacity: 0,
        },
      },
      { props: { loadingPosition: 'end', loading: !0, fullWidth: !0 }, style: { marginLeft: -8 } },
      ...$s,
    ],
  })),
  _d = z('span', { name: 'MuiButton', slot: 'LoadingIndicator' })(({ theme: e }) => ({
    display: 'none',
    position: 'absolute',
    visibility: 'visible',
    variants: [
      { props: { loading: !0 }, style: { display: 'flex' } },
      { props: { loadingPosition: 'start' }, style: { left: 14 } },
      { props: { loadingPosition: 'start', size: 'small' }, style: { left: 10 } },
      { props: { variant: 'text', loadingPosition: 'start' }, style: { left: 6 } },
      {
        props: { loadingPosition: 'center' },
        style: {
          left: '50%',
          transform: 'translate(-50%)',
          color: (e.vars || e).palette.action.disabled,
        },
      },
      { props: { loadingPosition: 'end' }, style: { right: 14 } },
      { props: { loadingPosition: 'end', size: 'small' }, style: { right: 10 } },
      { props: { variant: 'text', loadingPosition: 'end' }, style: { right: 6 } },
      {
        props: { loadingPosition: 'start', fullWidth: !0 },
        style: { position: 'relative', left: -10 },
      },
      {
        props: { loadingPosition: 'end', fullWidth: !0 },
        style: { position: 'relative', right: -10 },
      },
    ],
  })),
  hi = z('span', { name: 'MuiButton', slot: 'LoadingIconPlaceholder' })({
    display: 'inline-block',
    width: '1em',
    height: '1em',
  }),
  As = h.forwardRef(function (t, r) {
    const n = h.useContext(Nd),
      o = h.useContext(Fd),
      i = Or(n, t),
      s = ae({ props: i, name: 'MuiButton' }),
      {
        children: a,
        color: l = 'primary',
        component: u = 'button',
        className: d,
        disabled: f = !1,
        disableElevation: b = !1,
        disableFocusRipple: y = !1,
        endIcon: m,
        focusVisibleClassName: p,
        fullWidth: v = !1,
        id: C,
        loading: R = null,
        loadingIndicator: x,
        loadingPosition: g = 'center',
        size: S = 'medium',
        startIcon: w,
        type: $,
        variant: M = 'text',
        ...L
      } = s,
      N = tn(C),
      B = x ?? T.jsx(Is, { 'aria-labelledby': N, color: 'inherit', size: 16 }),
      c = {
        ...s,
        color: l,
        component: u,
        disabled: f,
        disableElevation: b,
        disableFocusRipple: y,
        fullWidth: v,
        loading: R,
        loadingIndicator: B,
        loadingPosition: g,
        size: S,
        type: $,
        variant: M,
      },
      P = zd(c),
      E =
        (w || (R && g === 'start')) &&
        T.jsx(Wd, {
          className: P.startIcon,
          ownerState: c,
          children: w || T.jsx(hi, { className: P.loadingIconPlaceholder, ownerState: c }),
        }),
      I =
        (m || (R && g === 'end')) &&
        T.jsx(Dd, {
          className: P.endIcon,
          ownerState: c,
          children: m || T.jsx(hi, { className: P.loadingIconPlaceholder, ownerState: c }),
        }),
      A = o || '',
      F =
        typeof R == 'boolean'
          ? T.jsx('span', {
              className: P.loadingWrapper,
              style: { display: 'contents' },
              children:
                R && T.jsx(_d, { className: P.loadingIndicator, ownerState: c, children: B }),
            })
          : null;
    return T.jsxs(jd, {
      ownerState: c,
      className: U(n.className, P.root, d, A),
      component: u,
      disabled: f || R,
      focusRipple: !y,
      focusVisibleClassName: U(P.focusVisible, p),
      ref: r,
      type: $,
      id: R ? N : C,
      ...L,
      classes: P,
      children: [E, g !== 'end' && F, a, g === 'end' && F, I],
    });
  });
function Ms(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function Hd(e) {
  const t = Ve(e);
  return t.body === e
    ? lt(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function tr(e, t) {
  t ? e.setAttribute('aria-hidden', 'true') : e.removeAttribute('aria-hidden');
}
function gi(e) {
  return parseInt(lt(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Ud(e) {
  const r = [
      'TEMPLATE',
      'SCRIPT',
      'STYLE',
      'LINK',
      'MAP',
      'META',
      'NOSCRIPT',
      'PICTURE',
      'COL',
      'COLGROUP',
      'PARAM',
      'SLOT',
      'SOURCE',
      'TRACK',
    ].includes(e.tagName),
    n = e.tagName === 'INPUT' && e.getAttribute('type') === 'hidden';
  return r || n;
}
function yi(e, t, r, n, o) {
  const i = [t, r, ...n];
  [].forEach.call(e.children, (s) => {
    const a = !i.includes(s),
      l = !Ud(s);
    a && l && tr(s, o);
  });
}
function bn(e, t) {
  let r = -1;
  return (e.some((n, o) => (t(n) ? ((r = o), !0) : !1)), r);
}
function Vd(e, t) {
  const r = [],
    n = e.container;
  if (!t.disableScrollLock) {
    if (Hd(n)) {
      const s = Ms(lt(n));
      (r.push({ value: n.style.paddingRight, property: 'padding-right', el: n }),
        (n.style.paddingRight = `${gi(n) + s}px`));
      const a = Ve(n).querySelectorAll('.mui-fixed');
      [].forEach.call(a, (l) => {
        (r.push({ value: l.style.paddingRight, property: 'padding-right', el: l }),
          (l.style.paddingRight = `${gi(l) + s}px`));
      });
    }
    let i;
    if (n.parentNode instanceof DocumentFragment) i = Ve(n).body;
    else {
      const s = n.parentElement,
        a = lt(n);
      i =
        (s == null ? void 0 : s.nodeName) === 'HTML' && a.getComputedStyle(s).overflowY === 'scroll'
          ? s
          : n;
    }
    (r.push(
      { value: i.style.overflow, property: 'overflow', el: i },
      { value: i.style.overflowX, property: 'overflow-x', el: i },
      { value: i.style.overflowY, property: 'overflow-y', el: i },
    ),
      (i.style.overflow = 'hidden'));
  }
  return () => {
    r.forEach(({ value: i, el: s, property: a }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function qd(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (r) => {
      r.getAttribute('aria-hidden') === 'true' && t.push(r);
    }),
    t
  );
}
class Kd {
  constructor() {
    ((this.modals = []), (this.containers = []));
  }
  add(t, r) {
    let n = this.modals.indexOf(t);
    if (n !== -1) return n;
    ((n = this.modals.length), this.modals.push(t), t.modalRef && tr(t.modalRef, !1));
    const o = qd(r);
    yi(r, t.mount, t.modalRef, o, !0);
    const i = bn(this.containers, (s) => s.container === r);
    return i !== -1
      ? (this.containers[i].modals.push(t), n)
      : (this.containers.push({ modals: [t], container: r, restore: null, hiddenSiblings: o }), n);
  }
  mount(t, r) {
    const n = bn(this.containers, (i) => i.modals.includes(t)),
      o = this.containers[n];
    o.restore || (o.restore = Vd(o, r));
  }
  remove(t, r = !0) {
    const n = this.modals.indexOf(t);
    if (n === -1) return n;
    const o = bn(this.containers, (s) => s.modals.includes(t)),
      i = this.containers[o];
    if ((i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(n, 1), i.modals.length === 0))
      (i.restore && i.restore(),
        t.modalRef && tr(t.modalRef, r),
        yi(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1));
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && tr(s.modalRef, !1);
    }
    return n;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Gd = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
].join(',');
function Yd(e) {
  const t = parseInt(e.getAttribute('tabindex') || '', 10);
  return Number.isNaN(t)
    ? e.contentEditable === 'true' ||
      ((e.nodeName === 'AUDIO' || e.nodeName === 'VIDEO' || e.nodeName === 'DETAILS') &&
        e.getAttribute('tabindex') === null)
      ? 0
      : e.tabIndex
    : t;
}
function Xd(e) {
  if (e.tagName !== 'INPUT' || e.type !== 'radio' || !e.name) return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let r = t(`[name="${e.name}"]:checked`);
  return (r || (r = t(`[name="${e.name}"]`)), r !== e);
}
function Zd(e) {
  return !(e.disabled || (e.tagName === 'INPUT' && e.type === 'hidden') || Xd(e));
}
function Qd(e) {
  const t = [],
    r = [];
  return (
    Array.from(e.querySelectorAll(Gd)).forEach((n, o) => {
      const i = Yd(n);
      i === -1 ||
        !Zd(n) ||
        (i === 0 ? t.push(n) : r.push({ documentOrder: o, tabIndex: i, node: n }));
    }),
    r
      .sort((n, o) =>
        n.tabIndex === o.tabIndex ? n.documentOrder - o.documentOrder : n.tabIndex - o.tabIndex,
      )
      .map((n) => n.node)
      .concat(t)
  );
}
function Jd() {
  return !0;
}
function ep(e) {
  const {
      children: t,
      disableAutoFocus: r = !1,
      disableEnforceFocus: n = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = Qd,
      isEnabled: s = Jd,
      open: a,
    } = e,
    l = h.useRef(!1),
    u = h.useRef(null),
    d = h.useRef(null),
    f = h.useRef(null),
    b = h.useRef(null),
    y = h.useRef(!1),
    m = h.useRef(null),
    p = Me(fr(t), m),
    v = h.useRef(null);
  (h.useEffect(() => {
    !a || !m.current || (y.current = !r);
  }, [r, a]),
    h.useEffect(() => {
      if (!a || !m.current) return;
      const x = Ve(m.current);
      return (
        m.current.contains(x.activeElement) ||
          (m.current.hasAttribute('tabIndex') || m.current.setAttribute('tabIndex', '-1'),
          y.current && m.current.focus()),
        () => {
          o ||
            (f.current && f.current.focus && ((l.current = !0), f.current.focus()),
            (f.current = null));
        }
      );
    }, [a]),
    h.useEffect(() => {
      if (!a || !m.current) return;
      const x = Ve(m.current),
        g = ($) => {
          ((v.current = $),
            !(n || !s() || $.key !== 'Tab') &&
              x.activeElement === m.current &&
              $.shiftKey &&
              ((l.current = !0), d.current && d.current.focus()));
        },
        S = () => {
          var L, N;
          const $ = m.current;
          if ($ === null) return;
          if (!x.hasFocus() || !s() || l.current) {
            l.current = !1;
            return;
          }
          if (
            $.contains(x.activeElement) ||
            (n && x.activeElement !== u.current && x.activeElement !== d.current)
          )
            return;
          if (x.activeElement !== b.current) b.current = null;
          else if (b.current !== null) return;
          if (!y.current) return;
          let M = [];
          if (
            ((x.activeElement === u.current || x.activeElement === d.current) && (M = i(m.current)),
            M.length > 0)
          ) {
            const B = !!(
                (L = v.current) != null &&
                L.shiftKey &&
                ((N = v.current) == null ? void 0 : N.key) === 'Tab'
              ),
              c = M[0],
              P = M[M.length - 1];
            typeof c != 'string' && typeof P != 'string' && (B ? P.focus() : c.focus());
          } else $.focus();
        };
      (x.addEventListener('focusin', S), x.addEventListener('keydown', g, !0));
      const w = setInterval(() => {
        x.activeElement && x.activeElement.tagName === 'BODY' && S();
      }, 50);
      return () => {
        (clearInterval(w),
          x.removeEventListener('focusin', S),
          x.removeEventListener('keydown', g, !0));
      };
    }, [r, n, o, s, a, i]));
  const C = (x) => {
      (f.current === null && (f.current = x.relatedTarget),
        (y.current = !0),
        (b.current = x.target));
      const g = t.props.onFocus;
      g && g(x);
    },
    R = (x) => {
      (f.current === null && (f.current = x.relatedTarget), (y.current = !0));
    };
  return T.jsxs(h.Fragment, {
    children: [
      T.jsx('div', { tabIndex: a ? 0 : -1, onFocus: R, ref: u, 'data-testid': 'sentinelStart' }),
      h.cloneElement(t, { ref: p, onFocus: C }),
      T.jsx('div', { tabIndex: a ? 0 : -1, onFocus: R, ref: d, 'data-testid': 'sentinelEnd' }),
    ],
  });
}
function tp(e) {
  return typeof e == 'function' ? e() : e;
}
function rp(e) {
  return e ? e.props.hasOwnProperty('in') : !1;
}
const bi = () => {},
  vr = new Kd();
function np(e) {
  const {
      container: t,
      disableEscapeKeyDown: r = !1,
      disableScrollLock: n = !1,
      closeAfterTransition: o = !1,
      onTransitionEnter: i,
      onTransitionExited: s,
      children: a,
      onClose: l,
      open: u,
      rootRef: d,
    } = e,
    f = h.useRef({}),
    b = h.useRef(null),
    y = h.useRef(null),
    m = Me(y, d),
    [p, v] = h.useState(!u),
    C = rp(a);
  let R = !0;
  (e['aria-hidden'] === 'false' || e['aria-hidden'] === !1) && (R = !1);
  const x = () => Ve(b.current),
    g = () => ((f.current.modalRef = y.current), (f.current.mount = b.current), f.current),
    S = () => {
      (vr.mount(g(), { disableScrollLock: n }), y.current && (y.current.scrollTop = 0));
    },
    w = xt(() => {
      const I = tp(t) || x().body;
      (vr.add(g(), I), y.current && S());
    }),
    $ = () => vr.isTopModal(g()),
    M = xt((I) => {
      ((b.current = I), I && (u && $() ? S() : y.current && tr(y.current, R)));
    }),
    L = h.useCallback(() => {
      vr.remove(g(), R);
    }, [R]);
  (h.useEffect(
    () => () => {
      L();
    },
    [L],
  ),
    h.useEffect(() => {
      u ? w() : (!C || !o) && L();
    }, [u, L, C, o, w]));
  const N = (I) => (A) => {
      var F;
      ((F = I.onKeyDown) == null || F.call(I, A),
        !(A.key !== 'Escape' || A.which === 229 || !$()) &&
          (r || (A.stopPropagation(), l && l(A, 'escapeKeyDown'))));
    },
    B = (I) => (A) => {
      var F;
      ((F = I.onClick) == null || F.call(I, A),
        A.target === A.currentTarget && l && l(A, 'backdropClick'));
    };
  return {
    getRootProps: (I = {}) => {
      const A = Es(e);
      (delete A.onTransitionEnter, delete A.onTransitionExited);
      const F = { ...A, ...I };
      return { role: 'presentation', ...F, onKeyDown: N(F), ref: m };
    },
    getBackdropProps: (I = {}) => {
      const A = I;
      return { 'aria-hidden': !0, ...A, onClick: B(A), open: u };
    },
    getTransitionProps: () => {
      const I = () => {
          (v(!1), i && i());
        },
        A = () => {
          (v(!0), s && s(), o && L());
        };
      return {
        onEnter: Co(I, (a == null ? void 0 : a.props.onEnter) ?? bi),
        onExited: Co(A, (a == null ? void 0 : a.props.onExited) ?? bi),
      };
    },
    rootRef: m,
    portalRef: M,
    isTopModal: $,
    exited: p,
    hasTransition: C,
  };
}
function op(e) {
  return oe('MuiModal', e);
}
te('MuiModal', ['root', 'hidden', 'backdrop']);
const ip = (e) => {
    const { open: t, exited: r, classes: n } = e;
    return ne({ root: ['root', !t && r && 'hidden'], backdrop: ['backdrop'] }, op, n);
  },
  sp = z('div', {
    name: 'MuiModal',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, !r.open && r.exited && t.hidden];
    },
  })(
    se(({ theme: e }) => ({
      position: 'fixed',
      zIndex: (e.vars || e).zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      variants: [
        { props: ({ ownerState: t }) => !t.open && t.exited, style: { visibility: 'hidden' } },
      ],
    })),
  ),
  ap = z(Md, { name: 'MuiModal', slot: 'Backdrop' })({ zIndex: -1 }),
  lp = h.forwardRef(function (t, r) {
    const n = ae({ name: 'MuiModal', props: t }),
      {
        BackdropComponent: o = ap,
        BackdropProps: i,
        classes: s,
        className: a,
        closeAfterTransition: l = !1,
        children: u,
        container: d,
        component: f,
        components: b = {},
        componentsProps: y = {},
        disableAutoFocus: m = !1,
        disableEnforceFocus: p = !1,
        disableEscapeKeyDown: v = !1,
        disablePortal: C = !1,
        disableRestoreFocus: R = !1,
        disableScrollLock: x = !1,
        hideBackdrop: g = !1,
        keepMounted: S = !1,
        onClose: w,
        onTransitionEnter: $,
        onTransitionExited: M,
        open: L,
        slotProps: N = {},
        slots: B = {},
        theme: c,
        ...P
      } = n,
      E = {
        ...n,
        closeAfterTransition: l,
        disableAutoFocus: m,
        disableEnforceFocus: p,
        disableEscapeKeyDown: v,
        disablePortal: C,
        disableRestoreFocus: R,
        disableScrollLock: x,
        hideBackdrop: g,
        keepMounted: S,
      },
      {
        getRootProps: I,
        getBackdropProps: A,
        getTransitionProps: F,
        portalRef: H,
        isTopModal: O,
        exited: q,
        hasTransition: ie,
      } = np({ ...E, rootRef: r }),
      xe = { ...E, exited: q },
      Z = ip(xe),
      he = {};
    if ((u.props.tabIndex === void 0 && (he.tabIndex = '-1'), ie)) {
      const { onEnter: _, onExited: K } = F();
      ((he.onEnter = _), (he.onExited = K));
    }
    const ue = { slots: { root: b.Root, backdrop: b.Backdrop, ...B }, slotProps: { ...y, ...N } },
      [Be, Te] = ce('root', {
        ref: r,
        elementType: sp,
        externalForwardedProps: { ...ue, ...P, component: f },
        getSlotProps: I,
        ownerState: xe,
        className: U(
          a,
          Z == null ? void 0 : Z.root,
          !xe.open && xe.exited && (Z == null ? void 0 : Z.hidden),
        ),
      }),
      [Le, me] = ce('backdrop', {
        ref: i == null ? void 0 : i.ref,
        elementType: o,
        externalForwardedProps: ue,
        shouldForwardComponentProp: !0,
        additionalProps: i,
        getSlotProps: (_) =>
          A({
            ..._,
            onClick: (K) => {
              _ != null && _.onClick && _.onClick(K);
            },
          }),
        className: U(i == null ? void 0 : i.className, Z == null ? void 0 : Z.backdrop),
        ownerState: xe,
      });
    return !S && !L && (!ie || q)
      ? null
      : T.jsx(gd, {
          ref: H,
          container: d,
          disablePortal: C,
          children: T.jsxs(Be, {
            ...Te,
            children: [
              !g && o ? T.jsx(Le, { ...me }) : null,
              T.jsx(ep, {
                disableEnforceFocus: p,
                disableAutoFocus: m,
                disableRestoreFocus: R,
                isEnabled: O,
                open: L,
                children: h.cloneElement(u, he),
              }),
            ],
          }),
        });
  });
function cp(e) {
  return oe('MuiDivider', e);
}
te('MuiDivider', [
  'root',
  'absolute',
  'fullWidth',
  'inset',
  'middle',
  'flexItem',
  'light',
  'vertical',
  'withChildren',
  'withChildrenVertical',
  'textAlignRight',
  'textAlignLeft',
  'wrapper',
  'wrapperVertical',
]);
const up = (e) => {
    const {
      absolute: t,
      children: r,
      classes: n,
      flexItem: o,
      light: i,
      orientation: s,
      textAlign: a,
      variant: l,
    } = e;
    return ne(
      {
        root: [
          'root',
          t && 'absolute',
          l,
          i && 'light',
          s === 'vertical' && 'vertical',
          o && 'flexItem',
          r && 'withChildren',
          r && s === 'vertical' && 'withChildrenVertical',
          a === 'right' && s !== 'vertical' && 'textAlignRight',
          a === 'left' && s !== 'vertical' && 'textAlignLeft',
        ],
        wrapper: ['wrapper', s === 'vertical' && 'wrapperVertical'],
      },
      cp,
      n,
    );
  },
  dp = z('div', {
    name: 'MuiDivider',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.absolute && t.absolute,
        t[r.variant],
        r.light && t.light,
        r.orientation === 'vertical' && t.vertical,
        r.flexItem && t.flexItem,
        r.children && t.withChildren,
        r.children && r.orientation === 'vertical' && t.withChildrenVertical,
        r.textAlign === 'right' && r.orientation !== 'vertical' && t.textAlignRight,
        r.textAlign === 'left' && r.orientation !== 'vertical' && t.textAlignLeft,
      ];
    },
  })(
    se(({ theme: e }) => ({
      margin: 0,
      flexShrink: 0,
      borderWidth: 0,
      borderStyle: 'solid',
      borderColor: (e.vars || e).palette.divider,
      borderBottomWidth: 'thin',
      variants: [
        {
          props: { absolute: !0 },
          style: { position: 'absolute', bottom: 0, left: 0, width: '100%' },
        },
        {
          props: { light: !0 },
          style: { borderColor: e.alpha((e.vars || e).palette.divider, 0.08) },
        },
        { props: { variant: 'inset' }, style: { marginLeft: 72 } },
        {
          props: { variant: 'middle', orientation: 'horizontal' },
          style: { marginLeft: e.spacing(2), marginRight: e.spacing(2) },
        },
        {
          props: { variant: 'middle', orientation: 'vertical' },
          style: { marginTop: e.spacing(1), marginBottom: e.spacing(1) },
        },
        {
          props: { orientation: 'vertical' },
          style: { height: '100%', borderBottomWidth: 0, borderRightWidth: 'thin' },
        },
        { props: { flexItem: !0 }, style: { alignSelf: 'stretch', height: 'auto' } },
        {
          props: ({ ownerState: t }) => !!t.children,
          style: {
            display: 'flex',
            textAlign: 'center',
            border: 0,
            borderTopStyle: 'solid',
            borderLeftStyle: 'solid',
            '&::before, &::after': { content: '""', alignSelf: 'center' },
          },
        },
        {
          props: ({ ownerState: t }) => t.children && t.orientation !== 'vertical',
          style: {
            '&::before, &::after': {
              width: '100%',
              borderTop: `thin solid ${(e.vars || e).palette.divider}`,
              borderTopStyle: 'inherit',
            },
          },
        },
        {
          props: ({ ownerState: t }) => t.orientation === 'vertical' && t.children,
          style: {
            flexDirection: 'column',
            '&::before, &::after': {
              height: '100%',
              borderLeft: `thin solid ${(e.vars || e).palette.divider}`,
              borderLeftStyle: 'inherit',
            },
          },
        },
        {
          props: ({ ownerState: t }) => t.textAlign === 'right' && t.orientation !== 'vertical',
          style: { '&::before': { width: '90%' }, '&::after': { width: '10%' } },
        },
        {
          props: ({ ownerState: t }) => t.textAlign === 'left' && t.orientation !== 'vertical',
          style: { '&::before': { width: '10%' }, '&::after': { width: '90%' } },
        },
      ],
    })),
  ),
  pp = z('span', {
    name: 'MuiDivider',
    slot: 'Wrapper',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.wrapper, r.orientation === 'vertical' && t.wrapperVertical];
    },
  })(
    se(({ theme: e }) => ({
      display: 'inline-block',
      paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
      paddingRight: `calc(${e.spacing(1)} * 1.2)`,
      whiteSpace: 'nowrap',
      variants: [
        {
          props: { orientation: 'vertical' },
          style: {
            paddingTop: `calc(${e.spacing(1)} * 1.2)`,
            paddingBottom: `calc(${e.spacing(1)} * 1.2)`,
          },
        },
      ],
    })),
  ),
  Nn = h.forwardRef(function (t, r) {
    const n = ae({ props: t, name: 'MuiDivider' }),
      {
        absolute: o = !1,
        children: i,
        className: s,
        orientation: a = 'horizontal',
        component: l = i || a === 'vertical' ? 'div' : 'hr',
        flexItem: u = !1,
        light: d = !1,
        role: f = l !== 'hr' ? 'separator' : void 0,
        textAlign: b = 'center',
        variant: y = 'fullWidth',
        ...m
      } = n,
      p = {
        ...n,
        absolute: o,
        component: l,
        flexItem: u,
        light: d,
        orientation: a,
        role: f,
        textAlign: b,
        variant: y,
      },
      v = up(p);
    return T.jsx(dp, {
      as: l,
      className: U(v.root, s),
      role: f,
      ref: r,
      ownerState: p,
      'aria-orientation': f === 'separator' && (l !== 'hr' || a === 'vertical') ? a : void 0,
      ...m,
      children: i ? T.jsx(pp, { className: v.wrapper, ownerState: p, children: i }) : null,
    });
  });
Nn && (Nn.muiSkipListHighlight = !0);
const fp = (e) => {
    const {
        classes: t,
        disableUnderline: r,
        startAdornment: n,
        endAdornment: o,
        size: i,
        hiddenLabel: s,
        multiline: a,
      } = e,
      l = {
        root: [
          'root',
          !r && 'underline',
          n && 'adornedStart',
          o && 'adornedEnd',
          i === 'small' && `size${D(i)}`,
          s && 'hiddenLabel',
          a && 'multiline',
        ],
        input: ['input'],
      },
      u = ne(l, Rd, t);
    return { ...t, ...u };
  },
  mp = z(an, {
    shouldForwardProp: (e) => He(e) || e === 'classes',
    name: 'MuiFilledInput',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [...on(e, t), !r.disableUnderline && t.underline];
    },
  })(
    se(({ theme: e }) => {
      const t = e.palette.mode === 'light',
        r = t ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)',
        n = t ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.09)',
        o = t ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.13)',
        i = t ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)';
      return {
        position: 'relative',
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : n,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create('background-color', {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        '&:hover': {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : o,
          '@media (hover: none)': { backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : n },
        },
        [`&.${mt.focused}`]: { backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : n },
        [`&.${mt.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : i,
        },
        variants: [
          {
            props: ({ ownerState: s }) => !s.disableUnderline,
            style: {
              '&::after': {
                left: 0,
                bottom: 0,
                content: '""',
                position: 'absolute',
                right: 0,
                transform: 'scaleX(0)',
                transition: e.transitions.create('transform', {
                  duration: e.transitions.duration.shorter,
                  easing: e.transitions.easing.easeOut,
                }),
                pointerEvents: 'none',
              },
              [`&.${mt.focused}:after`]: { transform: 'scaleX(1) translateX(0)' },
              [`&.${mt.error}`]: {
                '&::before, &::after': { borderBottomColor: (e.vars || e).palette.error.main },
              },
              '&::before': {
                borderBottom: `1px solid ${e.vars ? e.alpha(e.vars.palette.common.onBackground, e.vars.opacity.inputUnderline) : r}`,
                left: 0,
                bottom: 0,
                content: '"\\00a0"',
                position: 'absolute',
                right: 0,
                transition: e.transitions.create('border-bottom-color', {
                  duration: e.transitions.duration.shorter,
                }),
                pointerEvents: 'none',
              },
              [`&:hover:not(.${mt.disabled}, .${mt.error}):before`]: {
                borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
              },
              [`&.${mt.disabled}:before`]: { borderBottomStyle: 'dotted' },
            },
          },
          ...Object.entries(e.palette)
            .filter(De())
            .map(([s]) => {
              var a;
              return {
                props: { disableUnderline: !1, color: s },
                style: {
                  '&::after': {
                    borderBottom: `2px solid ${(a = (e.vars || e).palette[s]) == null ? void 0 : a.main}`,
                  },
                },
              };
            }),
          { props: ({ ownerState: s }) => s.startAdornment, style: { paddingLeft: 12 } },
          { props: ({ ownerState: s }) => s.endAdornment, style: { paddingRight: 12 } },
          { props: ({ ownerState: s }) => s.multiline, style: { padding: '25px 12px 8px' } },
          {
            props: ({ ownerState: s, size: a }) => s.multiline && a === 'small',
            style: { paddingTop: 21, paddingBottom: 4 },
          },
          {
            props: ({ ownerState: s }) => s.multiline && s.hiddenLabel,
            style: { paddingTop: 16, paddingBottom: 17 },
          },
          {
            props: ({ ownerState: s }) => s.multiline && s.hiddenLabel && s.size === 'small',
            style: { paddingTop: 8, paddingBottom: 9 },
          },
        ],
      };
    }),
  ),
  hp = z(ln, { name: 'MuiFilledInput', slot: 'Input', overridesResolver: sn })(
    se(({ theme: e }) => ({
      paddingTop: 25,
      paddingRight: 12,
      paddingBottom: 8,
      paddingLeft: 12,
      ...(!e.vars && {
        '&:-webkit-autofill': {
          WebkitBoxShadow: e.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
          WebkitTextFillColor: e.palette.mode === 'light' ? null : '#fff',
          caretColor: e.palette.mode === 'light' ? null : '#fff',
          borderTopLeftRadius: 'inherit',
          borderTopRightRadius: 'inherit',
        },
      }),
      ...(e.vars && {
        '&:-webkit-autofill': { borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit' },
        [e.getColorSchemeSelector('dark')]: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #266798 inset',
            WebkitTextFillColor: '#fff',
            caretColor: '#fff',
          },
        },
      }),
      variants: [
        { props: { size: 'small' }, style: { paddingTop: 21, paddingBottom: 4 } },
        {
          props: ({ ownerState: t }) => t.hiddenLabel,
          style: { paddingTop: 16, paddingBottom: 17 },
        },
        { props: ({ ownerState: t }) => t.startAdornment, style: { paddingLeft: 0 } },
        { props: ({ ownerState: t }) => t.endAdornment, style: { paddingRight: 0 } },
        {
          props: ({ ownerState: t }) => t.hiddenLabel && t.size === 'small',
          style: { paddingTop: 8, paddingBottom: 9 },
        },
        {
          props: ({ ownerState: t }) => t.multiline,
          style: { paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 },
        },
      ],
    })),
  ),
  co = h.forwardRef(function (t, r) {
    const n = ae({ props: t, name: 'MuiFilledInput' }),
      {
        disableUnderline: o = !1,
        components: i = {},
        componentsProps: s,
        fullWidth: a = !1,
        hiddenLabel: l,
        inputComponent: u = 'input',
        multiline: d = !1,
        slotProps: f,
        slots: b = {},
        type: y = 'text',
        ...m
      } = n,
      p = { ...n, disableUnderline: o, fullWidth: a, inputComponent: u, multiline: d, type: y },
      v = fp(n),
      C = { root: { ownerState: p }, input: { ownerState: p } },
      R = (f ?? s) ? Pe(C, f ?? s) : C,
      x = b.root ?? i.Root ?? mp,
      g = b.input ?? i.Input ?? hp;
    return T.jsx(lo, {
      slots: { root: x, input: g },
      slotProps: R,
      fullWidth: a,
      inputComponent: u,
      multiline: d,
      ref: r,
      type: y,
      ...m,
      classes: v,
    });
  });
co.muiName = 'Input';
function gp(e) {
  return oe('MuiFormControl', e);
}
te('MuiFormControl', [
  'root',
  'marginNone',
  'marginNormal',
  'marginDense',
  'fullWidth',
  'disabled',
]);
const yp = (e) => {
    const { classes: t, margin: r, fullWidth: n } = e,
      o = { root: ['root', r !== 'none' && `margin${D(r)}`, n && 'fullWidth'] };
    return ne(o, gp, t);
  },
  bp = z('div', {
    name: 'MuiFormControl',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, t[`margin${D(r.margin)}`], r.fullWidth && t.fullWidth];
    },
  })({
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: 'top',
    variants: [
      { props: { margin: 'normal' }, style: { marginTop: 16, marginBottom: 8 } },
      { props: { margin: 'dense' }, style: { marginTop: 8, marginBottom: 4 } },
      { props: { fullWidth: !0 }, style: { width: '100%' } },
    ],
  }),
  vp = h.forwardRef(function (t, r) {
    const n = ae({ props: t, name: 'MuiFormControl' }),
      {
        children: o,
        className: i,
        color: s = 'primary',
        component: a = 'div',
        disabled: l = !1,
        error: u = !1,
        focused: d,
        fullWidth: f = !1,
        hiddenLabel: b = !1,
        margin: y = 'none',
        required: m = !1,
        size: p = 'medium',
        variant: v = 'outlined',
        ...C
      } = n,
      R = {
        ...n,
        color: s,
        component: a,
        disabled: l,
        error: u,
        fullWidth: f,
        hiddenLabel: b,
        margin: y,
        required: m,
        size: p,
        variant: v,
      },
      x = yp(R),
      [g, S] = h.useState(() => {
        let I = !1;
        return (
          o &&
            h.Children.forEach(o, (A) => {
              if (!gn(A, ['Input', 'Select'])) return;
              const F = gn(A, ['Select']) ? A.props.input : A;
              F && xd(F.props) && (I = !0);
            }),
          I
        );
      }),
      [w, $] = h.useState(() => {
        let I = !1;
        return (
          o &&
            h.Children.forEach(o, (A) => {
              gn(A, ['Input', 'Select']) &&
                (jr(A.props, !0) || jr(A.props.inputProps, !0)) &&
                (I = !0);
            }),
          I
        );
      }),
      [M, L] = h.useState(!1);
    l && M && L(!1);
    const N = d !== void 0 && !l ? d : M;
    let B;
    h.useRef(!1);
    const c = h.useCallback(() => {
        $(!0);
      }, []),
      P = h.useCallback(() => {
        $(!1);
      }, []),
      E = h.useMemo(
        () => ({
          adornedStart: g,
          setAdornedStart: S,
          color: s,
          disabled: l,
          error: u,
          filled: w,
          focused: N,
          fullWidth: f,
          hiddenLabel: b,
          size: p,
          onBlur: () => {
            L(!1);
          },
          onFocus: () => {
            L(!0);
          },
          onEmpty: P,
          onFilled: c,
          registerEffect: B,
          required: m,
          variant: v,
        }),
        [g, s, l, u, w, N, f, b, B, P, c, m, p, v],
      );
    return T.jsx(ao.Provider, {
      value: E,
      children: T.jsx(bp, {
        as: a,
        ownerState: R,
        className: U(x.root, i),
        ref: r,
        ...C,
        children: o,
      }),
    });
  });
function xp(e) {
  return oe('MuiFormHelperText', e);
}
const vi = te('MuiFormHelperText', [
  'root',
  'error',
  'disabled',
  'sizeSmall',
  'sizeMedium',
  'contained',
  'focused',
  'filled',
  'required',
]);
var xi;
const Sp = (e) => {
    const {
        classes: t,
        contained: r,
        size: n,
        disabled: o,
        error: i,
        filled: s,
        focused: a,
        required: l,
      } = e,
      u = {
        root: [
          'root',
          o && 'disabled',
          i && 'error',
          n && `size${D(n)}`,
          r && 'contained',
          a && 'focused',
          s && 'filled',
          l && 'required',
        ],
      };
    return ne(u, xp, t);
  },
  Cp = z('p', {
    name: 'MuiFormHelperText',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.size && t[`size${D(r.size)}`],
        r.contained && t.contained,
        r.filled && t.filled,
      ];
    },
  })(
    se(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.caption,
      textAlign: 'left',
      marginTop: 3,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      [`&.${vi.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${vi.error}`]: { color: (e.vars || e).palette.error.main },
      variants: [
        { props: { size: 'small' }, style: { marginTop: 4 } },
        { props: ({ ownerState: t }) => t.contained, style: { marginLeft: 14, marginRight: 14 } },
      ],
    })),
  ),
  wp = h.forwardRef(function (t, r) {
    const n = ae({ props: t, name: 'MuiFormHelperText' }),
      {
        children: o,
        className: i,
        component: s = 'p',
        disabled: a,
        error: l,
        filled: u,
        focused: d,
        margin: f,
        required: b,
        variant: y,
        ...m
      } = n,
      p = Dt(),
      v = Wt({
        props: n,
        muiFormControl: p,
        states: ['variant', 'size', 'disabled', 'error', 'filled', 'focused', 'required'],
      }),
      C = {
        ...n,
        component: s,
        contained: v.variant === 'filled' || v.variant === 'outlined',
        variant: v.variant,
        size: v.size,
        disabled: v.disabled,
        error: v.error,
        filled: v.filled,
        focused: v.focused,
        required: v.required,
      };
    delete C.ownerState;
    const R = Sp(C);
    return T.jsx(Cp, {
      as: s,
      className: U(R.root, i),
      ref: r,
      ...m,
      ownerState: C,
      children:
        o === ' '
          ? xi ||
            (xi = T.jsx('span', { className: 'notranslate', 'aria-hidden': !0, children: '​' }))
          : o,
    });
  });
function Tp(e) {
  return oe('MuiFormLabel', e);
}
const rr = te('MuiFormLabel', [
    'root',
    'colorSecondary',
    'focused',
    'disabled',
    'error',
    'filled',
    'required',
    'asterisk',
  ]),
  Rp = (e) => {
    const { classes: t, color: r, focused: n, disabled: o, error: i, filled: s, required: a } = e,
      l = {
        root: [
          'root',
          `color${D(r)}`,
          o && 'disabled',
          i && 'error',
          s && 'filled',
          n && 'focused',
          a && 'required',
        ],
        asterisk: ['asterisk', i && 'error'],
      };
    return ne(l, Tp, t);
  },
  Ep = z('label', {
    name: 'MuiFormLabel',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, r.color === 'secondary' && t.colorSecondary, r.filled && t.filled];
    },
  })(
    se(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.body1,
      lineHeight: '1.4375em',
      padding: 0,
      position: 'relative',
      variants: [
        ...Object.entries(e.palette)
          .filter(De())
          .map(([t]) => ({
            props: { color: t },
            style: { [`&.${rr.focused}`]: { color: (e.vars || e).palette[t].main } },
          })),
        {
          props: {},
          style: {
            [`&.${rr.disabled}`]: { color: (e.vars || e).palette.text.disabled },
            [`&.${rr.error}`]: { color: (e.vars || e).palette.error.main },
          },
        },
      ],
    })),
  ),
  kp = z('span', { name: 'MuiFormLabel', slot: 'Asterisk' })(
    se(({ theme: e }) => ({ [`&.${rr.error}`]: { color: (e.vars || e).palette.error.main } })),
  ),
  Ip = h.forwardRef(function (t, r) {
    const n = ae({ props: t, name: 'MuiFormLabel' }),
      {
        children: o,
        className: i,
        color: s,
        component: a = 'label',
        disabled: l,
        error: u,
        filled: d,
        focused: f,
        required: b,
        ...y
      } = n,
      m = Dt(),
      p = Wt({
        props: n,
        muiFormControl: m,
        states: ['color', 'required', 'focused', 'disabled', 'error', 'filled'],
      }),
      v = {
        ...n,
        color: p.color || 'primary',
        component: a,
        disabled: p.disabled,
        error: p.error,
        filled: p.filled,
        focused: p.focused,
        required: p.required,
      },
      C = Rp(v);
    return T.jsxs(Ep, {
      as: a,
      ownerState: v,
      className: U(C.root, i),
      ref: r,
      ...y,
      children: [
        o,
        p.required &&
          T.jsxs(kp, {
            ownerState: v,
            'aria-hidden': !0,
            className: C.asterisk,
            children: [' ', '*'],
          }),
      ],
    });
  });
function Fn(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Pp = {
    entering: { opacity: 1, transform: Fn(1) },
    entered: { opacity: 1, transform: 'none' },
  },
  vn =
    typeof navigator < 'u' &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  zn = h.forwardRef(function (t, r) {
    const {
        addEndListener: n,
        appear: o = !0,
        children: i,
        easing: s,
        in: a,
        onEnter: l,
        onEntered: u,
        onEntering: d,
        onExit: f,
        onExited: b,
        onExiting: y,
        style: m,
        timeout: p = 'auto',
        TransitionComponent: v = et,
        ...C
      } = t,
      R = Cs(),
      x = h.useRef(),
      g = ro(),
      S = h.useRef(null),
      w = Me(S, fr(i), r),
      $ = (I) => (A) => {
        if (I) {
          const F = S.current;
          A === void 0 ? I(F) : I(F, A);
        }
      },
      M = $(d),
      L = $((I, A) => {
        ws(I);
        const {
          duration: F,
          delay: H,
          easing: O,
        } = Nr({ style: m, timeout: p, easing: s }, { mode: 'enter' });
        let q;
        (p === 'auto'
          ? ((q = g.transitions.getAutoHeightDuration(I.clientHeight)), (x.current = q))
          : (q = F),
          (I.style.transition = [
            g.transitions.create('opacity', { duration: q, delay: H }),
            g.transitions.create('transform', {
              duration: vn ? q : q * 0.666,
              delay: H,
              easing: O,
            }),
          ].join(',')),
          l && l(I, A));
      }),
      N = $(u),
      B = $(y),
      c = $((I) => {
        const {
          duration: A,
          delay: F,
          easing: H,
        } = Nr({ style: m, timeout: p, easing: s }, { mode: 'exit' });
        let O;
        (p === 'auto'
          ? ((O = g.transitions.getAutoHeightDuration(I.clientHeight)), (x.current = O))
          : (O = A),
          (I.style.transition = [
            g.transitions.create('opacity', { duration: O, delay: F }),
            g.transitions.create('transform', {
              duration: vn ? O : O * 0.666,
              delay: vn ? F : F || O * 0.333,
              easing: H,
            }),
          ].join(',')),
          (I.style.opacity = 0),
          (I.style.transform = Fn(0.75)),
          f && f(I));
      }),
      P = $(b),
      E = (I) => {
        (p === 'auto' && R.start(x.current || 0, I), n && n(S.current, I));
      };
    return T.jsx(v, {
      appear: o,
      in: a,
      nodeRef: S,
      onEnter: L,
      onEntered: N,
      onEntering: M,
      onExit: c,
      onExited: P,
      onExiting: B,
      addEndListener: E,
      timeout: p === 'auto' ? null : p,
      ...C,
      children: (I, { ownerState: A, ...F }) =>
        h.cloneElement(i, {
          style: {
            opacity: 0,
            transform: Fn(0.75),
            visibility: I === 'exited' && !a ? 'hidden' : void 0,
            ...Pp[I],
            ...m,
            ...i.props.style,
          },
          ref: w,
          ...F,
        }),
    });
  });
zn && (zn.muiSupportAuto = !0);
const $p = (e) => {
    const { classes: t, disableUnderline: r } = e,
      o = ne({ root: ['root', !r && 'underline'], input: ['input'] }, wd, t);
    return { ...t, ...o };
  },
  Ap = z(an, {
    shouldForwardProp: (e) => He(e) || e === 'classes',
    name: 'MuiInput',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [...on(e, t), !r.disableUnderline && t.underline];
    },
  })(
    se(({ theme: e }) => {
      let r = e.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
      return (
        e.vars && (r = e.alpha(e.vars.palette.common.onBackground, e.vars.opacity.inputUnderline)),
        {
          position: 'relative',
          variants: [
            {
              props: ({ ownerState: n }) => n.formControl,
              style: { 'label + &': { marginTop: 16 } },
            },
            {
              props: ({ ownerState: n }) => !n.disableUnderline,
              style: {
                '&::after': {
                  left: 0,
                  bottom: 0,
                  content: '""',
                  position: 'absolute',
                  right: 0,
                  transform: 'scaleX(0)',
                  transition: e.transitions.create('transform', {
                    duration: e.transitions.duration.shorter,
                    easing: e.transitions.easing.easeOut,
                  }),
                  pointerEvents: 'none',
                },
                [`&.${Kt.focused}:after`]: { transform: 'scaleX(1) translateX(0)' },
                [`&.${Kt.error}`]: {
                  '&::before, &::after': { borderBottomColor: (e.vars || e).palette.error.main },
                },
                '&::before': {
                  borderBottom: `1px solid ${r}`,
                  left: 0,
                  bottom: 0,
                  content: '"\\00a0"',
                  position: 'absolute',
                  right: 0,
                  transition: e.transitions.create('border-bottom-color', {
                    duration: e.transitions.duration.shorter,
                  }),
                  pointerEvents: 'none',
                },
                [`&:hover:not(.${Kt.disabled}, .${Kt.error}):before`]: {
                  borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
                  '@media (hover: none)': { borderBottom: `1px solid ${r}` },
                },
                [`&.${Kt.disabled}:before`]: { borderBottomStyle: 'dotted' },
              },
            },
            ...Object.entries(e.palette)
              .filter(De())
              .map(([n]) => ({
                props: { color: n, disableUnderline: !1 },
                style: {
                  '&::after': { borderBottom: `2px solid ${(e.vars || e).palette[n].main}` },
                },
              })),
          ],
        }
      );
    }),
  ),
  Mp = z(ln, { name: 'MuiInput', slot: 'Input', overridesResolver: sn })({}),
  uo = h.forwardRef(function (t, r) {
    const n = ae({ props: t, name: 'MuiInput' }),
      {
        disableUnderline: o = !1,
        components: i = {},
        componentsProps: s,
        fullWidth: a = !1,
        inputComponent: l = 'input',
        multiline: u = !1,
        slotProps: d,
        slots: f = {},
        type: b = 'text',
        ...y
      } = n,
      m = $p(n),
      v = { root: { ownerState: { disableUnderline: o } } },
      C = (d ?? s) ? Pe(d ?? s, v) : v,
      R = f.root ?? i.Root ?? Ap,
      x = f.input ?? i.Input ?? Mp;
    return T.jsx(lo, {
      slots: { root: R, input: x },
      slotProps: C,
      fullWidth: a,
      inputComponent: l,
      multiline: u,
      ref: r,
      type: b,
      ...y,
      classes: m,
    });
  });
uo.muiName = 'Input';
function Op(e) {
  return oe('MuiInputLabel', e);
}
te('MuiInputLabel', [
  'root',
  'focused',
  'disabled',
  'error',
  'required',
  'asterisk',
  'formControl',
  'sizeSmall',
  'shrink',
  'animated',
  'standard',
  'filled',
  'outlined',
]);
const Bp = (e) => {
    const {
        classes: t,
        formControl: r,
        size: n,
        shrink: o,
        disableAnimation: i,
        variant: s,
        required: a,
      } = e,
      l = {
        root: [
          'root',
          r && 'formControl',
          !i && 'animated',
          o && 'shrink',
          n && n !== 'medium' && `size${D(n)}`,
          s,
        ],
        asterisk: [a && 'asterisk'],
      },
      u = ne(l, Op, t);
    return { ...t, ...u };
  },
  Lp = z(Ip, {
    shouldForwardProp: (e) => He(e) || e === 'classes',
    name: 'MuiInputLabel',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        { [`& .${rr.asterisk}`]: t.asterisk },
        t.root,
        r.formControl && t.formControl,
        r.size === 'small' && t.sizeSmall,
        r.shrink && t.shrink,
        !r.disableAnimation && t.animated,
        r.focused && t.focused,
        t[r.variant],
      ];
    },
  })(
    se(({ theme: e }) => ({
      display: 'block',
      transformOrigin: 'top left',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
      variants: [
        {
          props: ({ ownerState: t }) => t.formControl,
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            transform: 'translate(0, 20px) scale(1)',
          },
        },
        { props: { size: 'small' }, style: { transform: 'translate(0, 17px) scale(1)' } },
        {
          props: ({ ownerState: t }) => t.shrink,
          style: {
            transform: 'translate(0, -1.5px) scale(0.75)',
            transformOrigin: 'top left',
            maxWidth: '133%',
          },
        },
        {
          props: ({ ownerState: t }) => !t.disableAnimation,
          style: {
            transition: e.transitions.create(['color', 'transform', 'max-width'], {
              duration: e.transitions.duration.shorter,
              easing: e.transitions.easing.easeOut,
            }),
          },
        },
        {
          props: { variant: 'filled' },
          style: {
            zIndex: 1,
            pointerEvents: 'none',
            transform: 'translate(12px, 16px) scale(1)',
            maxWidth: 'calc(100% - 24px)',
          },
        },
        {
          props: { variant: 'filled', size: 'small' },
          style: { transform: 'translate(12px, 13px) scale(1)' },
        },
        {
          props: ({ variant: t, ownerState: r }) => t === 'filled' && r.shrink,
          style: {
            userSelect: 'none',
            pointerEvents: 'auto',
            transform: 'translate(12px, 7px) scale(0.75)',
            maxWidth: 'calc(133% - 24px)',
          },
        },
        {
          props: ({ variant: t, ownerState: r, size: n }) =>
            t === 'filled' && r.shrink && n === 'small',
          style: { transform: 'translate(12px, 4px) scale(0.75)' },
        },
        {
          props: { variant: 'outlined' },
          style: {
            zIndex: 1,
            pointerEvents: 'none',
            transform: 'translate(14px, 16px) scale(1)',
            maxWidth: 'calc(100% - 24px)',
          },
        },
        {
          props: { variant: 'outlined', size: 'small' },
          style: { transform: 'translate(14px, 9px) scale(1)' },
        },
        {
          props: ({ variant: t, ownerState: r }) => t === 'outlined' && r.shrink,
          style: {
            userSelect: 'none',
            pointerEvents: 'auto',
            maxWidth: 'calc(133% - 32px)',
            transform: 'translate(14px, -9px) scale(0.75)',
          },
        },
      ],
    })),
  ),
  Np = h.forwardRef(function (t, r) {
    const n = ae({ name: 'MuiInputLabel', props: t }),
      { disableAnimation: o = !1, margin: i, shrink: s, variant: a, className: l, ...u } = n,
      d = Dt();
    let f = s;
    typeof f > 'u' && d && (f = d.filled || d.focused || d.adornedStart);
    const b = Wt({
        props: n,
        muiFormControl: d,
        states: ['size', 'variant', 'required', 'focused'],
      }),
      y = {
        ...n,
        disableAnimation: o,
        formControl: d,
        shrink: f,
        size: b.size,
        variant: b.variant,
        required: b.required,
        focused: b.focused,
      },
      m = Bp(y);
    return T.jsx(Lp, {
      'data-shrink': f,
      ref: r,
      className: U(m.root, l),
      ...u,
      ownerState: y,
      classes: m,
    });
  }),
  Wr = h.createContext({});
function Fp(e) {
  return oe('MuiList', e);
}
te('MuiList', ['root', 'padding', 'dense', 'subheader']);
const zp = (e) => {
    const { classes: t, disablePadding: r, dense: n, subheader: o } = e;
    return ne({ root: ['root', !r && 'padding', n && 'dense', o && 'subheader'] }, Fp, t);
  },
  jp = z('ul', {
    name: 'MuiList',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        !r.disablePadding && t.padding,
        r.dense && t.dense,
        r.subheader && t.subheader,
      ];
    },
  })({
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
    variants: [
      {
        props: ({ ownerState: e }) => !e.disablePadding,
        style: { paddingTop: 8, paddingBottom: 8 },
      },
      { props: ({ ownerState: e }) => e.subheader, style: { paddingTop: 0 } },
    ],
  }),
  Os = h.forwardRef(function (t, r) {
    const n = ae({ props: t, name: 'MuiList' }),
      {
        children: o,
        className: i,
        component: s = 'ul',
        dense: a = !1,
        disablePadding: l = !1,
        subheader: u,
        ...d
      } = n,
      f = h.useMemo(() => ({ dense: a }), [a]),
      b = { ...n, component: s, dense: a, disablePadding: l },
      y = zp(b);
    return T.jsx(Wr.Provider, {
      value: f,
      children: T.jsxs(jp, {
        as: s,
        className: U(y.root, i),
        ref: r,
        ownerState: b,
        ...d,
        children: [u, o],
      }),
    });
  });
function Wp(e) {
  return oe('MuiListItemButton', e);
}
const Gt = te('MuiListItemButton', [
    'root',
    'focusVisible',
    'dense',
    'alignItemsFlexStart',
    'disabled',
    'divider',
    'gutters',
    'selected',
  ]),
  Dp = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      r.dense && t.dense,
      r.alignItems === 'flex-start' && t.alignItemsFlexStart,
      r.divider && t.divider,
      !r.disableGutters && t.gutters,
    ];
  },
  _p = (e) => {
    const {
        alignItems: t,
        classes: r,
        dense: n,
        disabled: o,
        disableGutters: i,
        divider: s,
        selected: a,
      } = e,
      u = ne(
        {
          root: [
            'root',
            n && 'dense',
            !i && 'gutters',
            s && 'divider',
            o && 'disabled',
            t === 'flex-start' && 'alignItemsFlexStart',
            a && 'selected',
          ],
        },
        Wp,
        r,
      );
    return { ...r, ...u };
  },
  Hp = z(so, {
    shouldForwardProp: (e) => He(e) || e === 'classes',
    name: 'MuiListItemButton',
    slot: 'Root',
    overridesResolver: Dp,
  })(
    se(({ theme: e }) => ({
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none',
      minWidth: 0,
      boxSizing: 'border-box',
      textAlign: 'left',
      paddingTop: 8,
      paddingBottom: 8,
      transition: e.transitions.create('background-color', {
        duration: e.transitions.duration.shortest,
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: (e.vars || e).palette.action.hover,
        '@media (hover: none)': { backgroundColor: 'transparent' },
      },
      [`&.${Gt.selected}`]: {
        backgroundColor: e.alpha(
          (e.vars || e).palette.primary.main,
          (e.vars || e).palette.action.selectedOpacity,
        ),
        [`&.${Gt.focusVisible}`]: {
          backgroundColor: e.alpha(
            (e.vars || e).palette.primary.main,
            `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`,
          ),
        },
      },
      [`&.${Gt.selected}:hover`]: {
        backgroundColor: e.alpha(
          (e.vars || e).palette.primary.main,
          `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`,
        ),
        '@media (hover: none)': {
          backgroundColor: e.alpha(
            (e.vars || e).palette.primary.main,
            (e.vars || e).palette.action.selectedOpacity,
          ),
        },
      },
      [`&.${Gt.focusVisible}`]: { backgroundColor: (e.vars || e).palette.action.focus },
      [`&.${Gt.disabled}`]: { opacity: (e.vars || e).palette.action.disabledOpacity },
      variants: [
        {
          props: ({ ownerState: t }) => t.divider,
          style: {
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
            backgroundClip: 'padding-box',
          },
        },
        { props: { alignItems: 'flex-start' }, style: { alignItems: 'flex-start' } },
        {
          props: ({ ownerState: t }) => !t.disableGutters,
          style: { paddingLeft: 16, paddingRight: 16 },
        },
        { props: ({ ownerState: t }) => t.dense, style: { paddingTop: 4, paddingBottom: 4 } },
      ],
    })),
  ),
  Up = h.forwardRef(function (t, r) {
    const n = ae({ props: t, name: 'MuiListItemButton' }),
      {
        alignItems: o = 'center',
        autoFocus: i = !1,
        component: s = 'div',
        children: a,
        dense: l = !1,
        disableGutters: u = !1,
        divider: d = !1,
        focusVisibleClassName: f,
        selected: b = !1,
        className: y,
        ...m
      } = n,
      p = h.useContext(Wr),
      v = h.useMemo(
        () => ({ dense: l || p.dense || !1, alignItems: o, disableGutters: u }),
        [o, p.dense, l, u],
      ),
      C = h.useRef(null);
    dt(() => {
      i && C.current && C.current.focus();
    }, [i]);
    const R = { ...n, alignItems: o, dense: v.dense, disableGutters: u, divider: d, selected: b },
      x = _p(R),
      g = Me(C, r);
    return T.jsx(Wr.Provider, {
      value: v,
      children: T.jsx(Hp, {
        ref: g,
        href: m.href || m.to,
        component: (m.href || m.to) && s === 'div' ? 'button' : s,
        focusVisibleClassName: U(x.focusVisible, f),
        ownerState: R,
        className: U(x.root, y),
        ...m,
        classes: x,
        children: a,
      }),
    });
  });
function Vp(e) {
  return oe('MuiListItemText', e);
}
const xr = te('MuiListItemText', ['root', 'multiline', 'dense', 'inset', 'primary', 'secondary']),
  qp = (e) => {
    const { classes: t, inset: r, primary: n, secondary: o, dense: i } = e;
    return ne(
      {
        root: ['root', r && 'inset', i && 'dense', n && o && 'multiline'],
        primary: ['primary'],
        secondary: ['secondary'],
      },
      Vp,
      t,
    );
  },
  Kp = z('div', {
    name: 'MuiListItemText',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        { [`& .${xr.primary}`]: t.primary },
        { [`& .${xr.secondary}`]: t.secondary },
        t.root,
        r.inset && t.inset,
        r.primary && r.secondary && t.multiline,
        r.dense && t.dense,
      ];
    },
  })({
    flex: '1 1 auto',
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4,
    [`.${ci.root}:where(& .${xr.primary})`]: { display: 'block' },
    [`.${ci.root}:where(& .${xr.secondary})`]: { display: 'block' },
    variants: [
      {
        props: ({ ownerState: e }) => e.primary && e.secondary,
        style: { marginTop: 6, marginBottom: 6 },
      },
      { props: ({ ownerState: e }) => e.inset, style: { paddingLeft: 56 } },
    ],
  }),
  Gp = h.forwardRef(function (t, r) {
    const n = ae({ props: t, name: 'MuiListItemText' }),
      {
        children: o,
        className: i,
        disableTypography: s = !1,
        inset: a = !1,
        primary: l,
        primaryTypographyProps: u,
        secondary: d,
        secondaryTypographyProps: f,
        slots: b = {},
        slotProps: y = {},
        ...m
      } = n,
      { dense: p } = h.useContext(Wr);
    let v = l ?? o,
      C = d;
    const R = { ...n, disableTypography: s, inset: a, primary: !!v, secondary: !!C, dense: p },
      x = qp(R),
      g = { slots: b, slotProps: { primary: u, secondary: f, ...y } },
      [S, w] = ce('root', {
        className: U(x.root, i),
        elementType: Kp,
        externalForwardedProps: { ...g, ...m },
        ownerState: R,
        ref: r,
      }),
      [$, M] = ce('primary', {
        className: x.primary,
        elementType: it,
        externalForwardedProps: g,
        ownerState: R,
      }),
      [L, N] = ce('secondary', {
        className: x.secondary,
        elementType: it,
        externalForwardedProps: g,
        ownerState: R,
      });
    return (
      v != null &&
        v.type !== it &&
        !s &&
        (v = T.jsx($, {
          variant: p ? 'body2' : 'body1',
          component: M != null && M.variant ? void 0 : 'span',
          ...M,
          children: v,
        })),
      C != null &&
        C.type !== it &&
        !s &&
        (C = T.jsx(L, { variant: 'body2', color: 'textSecondary', ...N, children: C })),
      T.jsxs(S, { ...w, children: [v, C] })
    );
  });
function xn(e, t, r) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
      ? t.nextElementSibling
      : r
        ? null
        : e.firstChild;
}
function Si(e, t, r) {
  return e === t
    ? r
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
      ? t.previousElementSibling
      : r
        ? null
        : e.lastChild;
}
function Bs(e, t) {
  if (t === void 0) return !0;
  let r = e.innerText;
  return (
    r === void 0 && (r = e.textContent),
    (r = r.trim().toLowerCase()),
    r.length === 0 ? !1 : t.repeating ? r[0] === t.keys[0] : r.startsWith(t.keys.join(''))
  );
}
function Yt(e, t, r, n, o, i) {
  let s = !1,
    a = o(e, t, t ? r : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s) return !1;
      s = !0;
    }
    const l = n ? !1 : a.disabled || a.getAttribute('aria-disabled') === 'true';
    if (!a.hasAttribute('tabindex') || !Bs(a, i) || l) a = o(e, a, r);
    else return (a.focus(), !0);
  }
  return !1;
}
const Yp = h.forwardRef(function (t, r) {
  const {
      actions: n,
      autoFocus: o = !1,
      autoFocusItem: i = !1,
      children: s,
      className: a,
      disabledItemsFocusable: l = !1,
      disableListWrap: u = !1,
      onKeyDown: d,
      variant: f = 'selectedMenu',
      ...b
    } = t,
    y = h.useRef(null),
    m = h.useRef({ keys: [], repeating: !0, previousKeyMatched: !0, lastTime: null });
  (dt(() => {
    o && y.current.focus();
  }, [o]),
    h.useImperativeHandle(
      n,
      () => ({
        adjustStyleForScrollbar: (x, { direction: g }) => {
          const S = !y.current.style.width;
          if (x.clientHeight < y.current.clientHeight && S) {
            const w = `${Ms(lt(x))}px`;
            ((y.current.style[g === 'rtl' ? 'paddingLeft' : 'paddingRight'] = w),
              (y.current.style.width = `calc(100% + ${w})`));
          }
          return y.current;
        },
      }),
      [],
    ));
  const p = (x) => {
      const g = y.current,
        S = x.key;
      if (x.ctrlKey || x.metaKey || x.altKey) {
        d && d(x);
        return;
      }
      const $ = Ve(g).activeElement;
      if (S === 'ArrowDown') (x.preventDefault(), Yt(g, $, u, l, xn));
      else if (S === 'ArrowUp') (x.preventDefault(), Yt(g, $, u, l, Si));
      else if (S === 'Home') (x.preventDefault(), Yt(g, null, u, l, xn));
      else if (S === 'End') (x.preventDefault(), Yt(g, null, u, l, Si));
      else if (S.length === 1) {
        const M = m.current,
          L = S.toLowerCase(),
          N = performance.now();
        (M.keys.length > 0 &&
          (N - M.lastTime > 500
            ? ((M.keys = []), (M.repeating = !0), (M.previousKeyMatched = !0))
            : M.repeating && L !== M.keys[0] && (M.repeating = !1)),
          (M.lastTime = N),
          M.keys.push(L));
        const B = $ && !M.repeating && Bs($, M);
        M.previousKeyMatched && (B || Yt(g, $, !1, l, xn, M))
          ? x.preventDefault()
          : (M.previousKeyMatched = !1);
      }
      d && d(x);
    },
    v = Me(y, r);
  let C = -1;
  h.Children.forEach(s, (x, g) => {
    if (!h.isValidElement(x)) {
      C === g && ((C += 1), C >= s.length && (C = -1));
      return;
    }
    (x.props.disabled || (((f === 'selectedMenu' && x.props.selected) || C === -1) && (C = g)),
      C === g &&
        (x.props.disabled || x.props.muiSkipListHighlight || x.type.muiSkipListHighlight) &&
        ((C += 1), C >= s.length && (C = -1)));
  });
  const R = h.Children.map(s, (x, g) => {
    if (g === C) {
      const S = {};
      return (
        i && (S.autoFocus = !0),
        x.props.tabIndex === void 0 && f === 'selectedMenu' && (S.tabIndex = 0),
        h.cloneElement(x, S)
      );
    }
    return x;
  });
  return T.jsx(Os, {
    role: 'menu',
    ref: v,
    className: a,
    onKeyDown: p,
    tabIndex: o ? 0 : -1,
    ...b,
    children: R,
  });
});
function Xp(e) {
  return oe('MuiPopover', e);
}
te('MuiPopover', ['root', 'paper']);
function Ci(e, t) {
  let r = 0;
  return (
    typeof t == 'number'
      ? (r = t)
      : t === 'center'
        ? (r = e.height / 2)
        : t === 'bottom' && (r = e.height),
    r
  );
}
function wi(e, t) {
  let r = 0;
  return (
    typeof t == 'number'
      ? (r = t)
      : t === 'center'
        ? (r = e.width / 2)
        : t === 'right' && (r = e.width),
    r
  );
}
function Ti(e) {
  return [e.horizontal, e.vertical].map((t) => (typeof t == 'number' ? `${t}px` : t)).join(' ');
}
function Sr(e) {
  return typeof e == 'function' ? e() : e;
}
const Zp = (e) => {
    const { classes: t } = e;
    return ne({ root: ['root'], paper: ['paper'] }, Xp, t);
  },
  Qp = z(lp, { name: 'MuiPopover', slot: 'Root' })({}),
  Ls = z(nn, { name: 'MuiPopover', slot: 'Paper' })({
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    outline: 0,
  }),
  Jp = h.forwardRef(function (t, r) {
    const n = ae({ props: t, name: 'MuiPopover' }),
      {
        action: o,
        anchorEl: i,
        anchorOrigin: s = { vertical: 'top', horizontal: 'left' },
        anchorPosition: a,
        anchorReference: l = 'anchorEl',
        children: u,
        className: d,
        container: f,
        elevation: b = 8,
        marginThreshold: y = 16,
        open: m,
        PaperProps: p = {},
        slots: v = {},
        slotProps: C = {},
        transformOrigin: R = { vertical: 'top', horizontal: 'left' },
        TransitionComponent: x,
        transitionDuration: g = 'auto',
        TransitionProps: S = {},
        disableScrollLock: w = !1,
        ...$
      } = n,
      M = h.useRef(),
      L = {
        ...n,
        anchorOrigin: s,
        anchorReference: l,
        elevation: b,
        marginThreshold: y,
        transformOrigin: R,
        TransitionComponent: x,
        transitionDuration: g,
        TransitionProps: S,
      },
      N = Zp(L),
      B = h.useCallback(() => {
        if (l === 'anchorPosition') return a;
        const _ = Sr(i),
          G = (_ && _.nodeType === 1 ? _ : Ve(M.current).body).getBoundingClientRect();
        return { top: G.top + Ci(G, s.vertical), left: G.left + wi(G, s.horizontal) };
      }, [i, s.horizontal, s.vertical, a, l]),
      c = h.useCallback(
        (_) => ({ vertical: Ci(_, R.vertical), horizontal: wi(_, R.horizontal) }),
        [R.horizontal, R.vertical],
      ),
      P = h.useCallback(
        (_) => {
          const K = { width: _.offsetWidth, height: _.offsetHeight },
            G = c(K);
          if (l === 'none') return { top: null, left: null, transformOrigin: Ti(G) };
          const Ce = B();
          let V = Ce.top - G.vertical,
            de = Ce.left - G.horizontal;
          const Ne = V + K.height,
            $e = de + K.width,
            we = lt(Sr(i)),
            qe = we.innerHeight - y,
            Ae = we.innerWidth - y;
          if (y !== null && V < y) {
            const Se = V - y;
            ((V -= Se), (G.vertical += Se));
          } else if (y !== null && Ne > qe) {
            const Se = Ne - qe;
            ((V -= Se), (G.vertical += Se));
          }
          if (y !== null && de < y) {
            const Se = de - y;
            ((de -= Se), (G.horizontal += Se));
          } else if ($e > Ae) {
            const Se = $e - Ae;
            ((de -= Se), (G.horizontal += Se));
          }
          return { top: `${Math.round(V)}px`, left: `${Math.round(de)}px`, transformOrigin: Ti(G) };
        },
        [i, l, B, c, y],
      ),
      [E, I] = h.useState(m),
      A = h.useCallback(() => {
        const _ = M.current;
        if (!_) return;
        const K = P(_);
        (K.top !== null && _.style.setProperty('top', K.top),
          K.left !== null && (_.style.left = K.left),
          (_.style.transformOrigin = K.transformOrigin),
          I(!0));
      }, [P]);
    h.useEffect(
      () => (
        w && window.addEventListener('scroll', A),
        () => window.removeEventListener('scroll', A)
      ),
      [i, w, A],
    );
    const F = () => {
        A();
      },
      H = () => {
        I(!1);
      };
    (h.useEffect(() => {
      m && A();
    }),
      h.useImperativeHandle(
        o,
        () =>
          m
            ? {
                updatePosition: () => {
                  A();
                },
              }
            : null,
        [m, A],
      ),
      h.useEffect(() => {
        if (!m) return;
        const _ = bs(() => {
            A();
          }),
          K = lt(Sr(i));
        return (
          K.addEventListener('resize', _),
          () => {
            (_.clear(), K.removeEventListener('resize', _));
          }
        );
      }, [i, m, A]));
    let O = g;
    const q = { slots: { transition: x, ...v }, slotProps: { transition: S, paper: p, ...C } },
      [ie, xe] = ce('transition', {
        elementType: zn,
        externalForwardedProps: q,
        ownerState: L,
        getSlotProps: (_) => ({
          ..._,
          onEntering: (K, G) => {
            var Ce;
            ((Ce = _.onEntering) == null || Ce.call(_, K, G), F());
          },
          onExited: (K) => {
            var G;
            ((G = _.onExited) == null || G.call(_, K), H());
          },
        }),
        additionalProps: { appear: !0, in: m },
      });
    g === 'auto' && !ie.muiSupportAuto && (O = void 0);
    const Z = f || (i ? Ve(Sr(i)).body : void 0),
      [he, { slots: ue, slotProps: Be, ...Te }] = ce('root', {
        ref: r,
        elementType: Qp,
        externalForwardedProps: { ...q, ...$ },
        shouldForwardComponentProp: !0,
        additionalProps: {
          slots: { backdrop: v.backdrop },
          slotProps: {
            backdrop: cu(typeof C.backdrop == 'function' ? C.backdrop(L) : C.backdrop, {
              invisible: !0,
            }),
          },
          container: Z,
          open: m,
        },
        ownerState: L,
        className: U(N.root, d),
      }),
      [Le, me] = ce('paper', {
        ref: M,
        className: N.paper,
        elementType: Ls,
        externalForwardedProps: q,
        shouldForwardComponentProp: !0,
        additionalProps: { elevation: b, style: E ? void 0 : { opacity: 0 } },
        ownerState: L,
      });
    return T.jsx(he, {
      ...Te,
      ...(!Fr(he) && { slots: ue, slotProps: Be, disableScrollLock: w }),
      children: T.jsx(ie, { ...xe, timeout: O, children: T.jsx(Le, { ...me, children: u }) }),
    });
  });
function ef(e) {
  return oe('MuiMenu', e);
}
te('MuiMenu', ['root', 'paper', 'list']);
const tf = { vertical: 'top', horizontal: 'right' },
  rf = { vertical: 'top', horizontal: 'left' },
  nf = (e) => {
    const { classes: t } = e;
    return ne({ root: ['root'], paper: ['paper'], list: ['list'] }, ef, t);
  },
  of = z(Jp, { shouldForwardProp: (e) => He(e) || e === 'classes', name: 'MuiMenu', slot: 'Root' })(
    {},
  ),
  sf = z(Ls, { name: 'MuiMenu', slot: 'Paper' })({
    maxHeight: 'calc(100% - 96px)',
    WebkitOverflowScrolling: 'touch',
  }),
  af = z(Yp, { name: 'MuiMenu', slot: 'List' })({ outline: 0 }),
  lf = h.forwardRef(function (t, r) {
    const n = ae({ props: t, name: 'MuiMenu' }),
      {
        autoFocus: o = !0,
        children: i,
        className: s,
        disableAutoFocusItem: a = !1,
        MenuListProps: l = {},
        onClose: u,
        open: d,
        PaperProps: f = {},
        PopoverClasses: b,
        transitionDuration: y = 'auto',
        TransitionProps: { onEntering: m, ...p } = {},
        variant: v = 'selectedMenu',
        slots: C = {},
        slotProps: R = {},
        ...x
      } = n,
      g = dc(),
      S = {
        ...n,
        autoFocus: o,
        disableAutoFocusItem: a,
        MenuListProps: l,
        onEntering: m,
        PaperProps: f,
        transitionDuration: y,
        TransitionProps: p,
        variant: v,
      },
      w = nf(S),
      $ = o && !a && d,
      M = h.useRef(null),
      L = (O, q) => {
        (M.current && M.current.adjustStyleForScrollbar(O, { direction: g ? 'rtl' : 'ltr' }),
          m && m(O, q));
      },
      N = (O) => {
        O.key === 'Tab' && (O.preventDefault(), u && u(O, 'tabKeyDown'));
      };
    let B = -1;
    h.Children.map(i, (O, q) => {
      h.isValidElement(O) &&
        (O.props.disabled || (((v === 'selectedMenu' && O.props.selected) || B === -1) && (B = q)));
    });
    const c = { slots: C, slotProps: { list: l, transition: p, paper: f, ...R } },
      P = md({
        elementType: C.root,
        externalSlotProps: R.root,
        ownerState: S,
        className: [w.root, s],
      }),
      [E, I] = ce('paper', {
        className: w.paper,
        elementType: sf,
        externalForwardedProps: c,
        shouldForwardComponentProp: !0,
        ownerState: S,
      }),
      [A, F] = ce('list', {
        className: U(w.list, l.className),
        elementType: af,
        shouldForwardComponentProp: !0,
        externalForwardedProps: c,
        getSlotProps: (O) => ({
          ...O,
          onKeyDown: (q) => {
            var ie;
            (N(q), (ie = O.onKeyDown) == null || ie.call(O, q));
          },
        }),
        ownerState: S,
      }),
      H =
        typeof c.slotProps.transition == 'function'
          ? c.slotProps.transition(S)
          : c.slotProps.transition;
    return T.jsx(of, {
      onClose: u,
      anchorOrigin: { vertical: 'bottom', horizontal: g ? 'right' : 'left' },
      transformOrigin: g ? tf : rf,
      slots: {
        root: C.root,
        paper: E,
        backdrop: C.backdrop,
        ...(C.transition && { transition: C.transition }),
      },
      slotProps: {
        root: P,
        paper: I,
        backdrop: typeof R.backdrop == 'function' ? R.backdrop(S) : R.backdrop,
        transition: {
          ...H,
          onEntering: (...O) => {
            var q;
            (L(...O), (q = H == null ? void 0 : H.onEntering) == null || q.call(H, ...O));
          },
        },
      },
      open: d,
      ref: r,
      transitionDuration: y,
      ownerState: S,
      ...x,
      classes: b,
      children: T.jsx(A, {
        actions: M,
        autoFocus: o && (B === -1 || a),
        autoFocusItem: $,
        variant: v,
        ...F,
        children: i,
      }),
    });
  });
function cf(e) {
  return oe('MuiNativeSelect', e);
}
const po = te('MuiNativeSelect', [
    'root',
    'select',
    'multiple',
    'filled',
    'outlined',
    'standard',
    'disabled',
    'icon',
    'iconOpen',
    'iconFilled',
    'iconOutlined',
    'iconStandard',
    'nativeInput',
    'error',
  ]),
  uf = (e) => {
    const { classes: t, variant: r, disabled: n, multiple: o, open: i, error: s } = e,
      a = {
        select: ['select', r, n && 'disabled', o && 'multiple', s && 'error'],
        icon: ['icon', `icon${D(r)}`, i && 'iconOpen', n && 'disabled'],
      };
    return ne(a, cf, t);
  },
  Ns = z('select', { name: 'MuiNativeSelect' })(({ theme: e }) => ({
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    userSelect: 'none',
    borderRadius: 0,
    cursor: 'pointer',
    '&:focus': { borderRadius: 0 },
    [`&.${po.disabled}`]: { cursor: 'default' },
    '&[multiple]': { height: 'auto' },
    '&:not([multiple]) option, &:not([multiple]) optgroup': {
      backgroundColor: (e.vars || e).palette.background.paper,
    },
    variants: [
      {
        props: ({ ownerState: t }) => t.variant !== 'filled' && t.variant !== 'outlined',
        style: { '&&&': { paddingRight: 24, minWidth: 16 } },
      },
      { props: { variant: 'filled' }, style: { '&&&': { paddingRight: 32 } } },
      {
        props: { variant: 'outlined' },
        style: {
          borderRadius: (e.vars || e).shape.borderRadius,
          '&:focus': { borderRadius: (e.vars || e).shape.borderRadius },
          '&&&': { paddingRight: 32 },
        },
      },
    ],
  })),
  df = z(Ns, {
    name: 'MuiNativeSelect',
    slot: 'Select',
    shouldForwardProp: He,
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.select, t[r.variant], r.error && t.error, { [`&.${po.multiple}`]: t.multiple }];
    },
  })({}),
  Fs = z('svg', { name: 'MuiNativeSelect' })(({ theme: e }) => ({
    position: 'absolute',
    right: 0,
    top: 'calc(50% - .5em)',
    pointerEvents: 'none',
    color: (e.vars || e).palette.action.active,
    [`&.${po.disabled}`]: { color: (e.vars || e).palette.action.disabled },
    variants: [
      { props: ({ ownerState: t }) => t.open, style: { transform: 'rotate(180deg)' } },
      { props: { variant: 'filled' }, style: { right: 7 } },
      { props: { variant: 'outlined' }, style: { right: 7 } },
    ],
  })),
  pf = z(Fs, {
    name: 'MuiNativeSelect',
    slot: 'Icon',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.icon, r.variant && t[`icon${D(r.variant)}`], r.open && t.iconOpen];
    },
  })({}),
  ff = h.forwardRef(function (t, r) {
    const {
        className: n,
        disabled: o,
        error: i,
        IconComponent: s,
        inputRef: a,
        variant: l = 'standard',
        ...u
      } = t,
      d = { ...t, disabled: o, variant: l, error: i },
      f = uf(d);
    return T.jsxs(h.Fragment, {
      children: [
        T.jsx(df, { ownerState: d, className: U(f.select, n), disabled: o, ref: a || r, ...u }),
        t.multiple ? null : T.jsx(pf, { as: s, ownerState: d, className: f.icon }),
      ],
    });
  });
var Ri;
const mf = z('fieldset', { name: 'MuiNotchedOutlined', shouldForwardProp: He })({
    textAlign: 'left',
    position: 'absolute',
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: '0 8px',
    pointerEvents: 'none',
    borderRadius: 'inherit',
    borderStyle: 'solid',
    borderWidth: 1,
    overflow: 'hidden',
    minWidth: '0%',
  }),
  hf = z('legend', { name: 'MuiNotchedOutlined', shouldForwardProp: He })(
    se(({ theme: e }) => ({
      float: 'unset',
      width: 'auto',
      overflow: 'hidden',
      variants: [
        {
          props: ({ ownerState: t }) => !t.withLabel,
          style: {
            padding: 0,
            lineHeight: '11px',
            transition: e.transitions.create('width', {
              duration: 150,
              easing: e.transitions.easing.easeOut,
            }),
          },
        },
        {
          props: ({ ownerState: t }) => t.withLabel,
          style: {
            display: 'block',
            padding: 0,
            height: 11,
            fontSize: '0.75em',
            visibility: 'hidden',
            maxWidth: 0.01,
            transition: e.transitions.create('max-width', {
              duration: 50,
              easing: e.transitions.easing.easeOut,
            }),
            whiteSpace: 'nowrap',
            '& > span': {
              paddingLeft: 5,
              paddingRight: 5,
              display: 'inline-block',
              opacity: 0,
              visibility: 'visible',
            },
          },
        },
        {
          props: ({ ownerState: t }) => t.withLabel && t.notched,
          style: {
            maxWidth: '100%',
            transition: e.transitions.create('max-width', {
              duration: 100,
              easing: e.transitions.easing.easeOut,
              delay: 50,
            }),
          },
        },
      ],
    })),
  );
function gf(e) {
  const { children: t, classes: r, className: n, label: o, notched: i, ...s } = e,
    a = o != null && o !== '',
    l = { ...e, notched: i, withLabel: a };
  return T.jsx(mf, {
    'aria-hidden': !0,
    className: n,
    ownerState: l,
    ...s,
    children: T.jsx(hf, {
      ownerState: l,
      children: a
        ? T.jsx('span', { children: o })
        : Ri ||
          (Ri = T.jsx('span', { className: 'notranslate', 'aria-hidden': !0, children: '​' })),
    }),
  });
}
const yf = (e) => {
    const { classes: t } = e,
      n = ne({ root: ['root'], notchedOutline: ['notchedOutline'], input: ['input'] }, Td, t);
    return { ...t, ...n };
  },
  bf = z(an, {
    shouldForwardProp: (e) => He(e) || e === 'classes',
    name: 'MuiOutlinedInput',
    slot: 'Root',
    overridesResolver: on,
  })(
    se(({ theme: e }) => {
      const t = e.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
      return {
        position: 'relative',
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${Ge.notchedOutline}`]: { borderColor: (e.vars || e).palette.text.primary },
        '@media (hover: none)': {
          [`&:hover .${Ge.notchedOutline}`]: {
            borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t,
          },
        },
        [`&.${Ge.focused} .${Ge.notchedOutline}`]: { borderWidth: 2 },
        variants: [
          ...Object.entries(e.palette)
            .filter(De())
            .map(([r]) => ({
              props: { color: r },
              style: {
                [`&.${Ge.focused} .${Ge.notchedOutline}`]: {
                  borderColor: (e.vars || e).palette[r].main,
                },
              },
            })),
          {
            props: {},
            style: {
              [`&.${Ge.error} .${Ge.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.error.main,
              },
              [`&.${Ge.disabled} .${Ge.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.action.disabled,
              },
            },
          },
          { props: ({ ownerState: r }) => r.startAdornment, style: { paddingLeft: 14 } },
          { props: ({ ownerState: r }) => r.endAdornment, style: { paddingRight: 14 } },
          { props: ({ ownerState: r }) => r.multiline, style: { padding: '16.5px 14px' } },
          {
            props: ({ ownerState: r, size: n }) => r.multiline && n === 'small',
            style: { padding: '8.5px 14px' },
          },
        ],
      };
    }),
  ),
  vf = z(gf, { name: 'MuiOutlinedInput', slot: 'NotchedOutline' })(
    se(({ theme: e }) => {
      const t = e.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
      return { borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t };
    }),
  ),
  xf = z(ln, { name: 'MuiOutlinedInput', slot: 'Input', overridesResolver: sn })(
    se(({ theme: e }) => ({
      padding: '16.5px 14px',
      ...(!e.vars && {
        '&:-webkit-autofill': {
          WebkitBoxShadow: e.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
          WebkitTextFillColor: e.palette.mode === 'light' ? null : '#fff',
          caretColor: e.palette.mode === 'light' ? null : '#fff',
          borderRadius: 'inherit',
        },
      }),
      ...(e.vars && {
        '&:-webkit-autofill': { borderRadius: 'inherit' },
        [e.getColorSchemeSelector('dark')]: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #266798 inset',
            WebkitTextFillColor: '#fff',
            caretColor: '#fff',
          },
        },
      }),
      variants: [
        { props: { size: 'small' }, style: { padding: '8.5px 14px' } },
        { props: ({ ownerState: t }) => t.multiline, style: { padding: 0 } },
        { props: ({ ownerState: t }) => t.startAdornment, style: { paddingLeft: 0 } },
        { props: ({ ownerState: t }) => t.endAdornment, style: { paddingRight: 0 } },
      ],
    })),
  ),
  fo = h.forwardRef(function (t, r) {
    const n = ae({ props: t, name: 'MuiOutlinedInput' }),
      {
        components: o = {},
        fullWidth: i = !1,
        inputComponent: s = 'input',
        label: a,
        multiline: l = !1,
        notched: u,
        slots: d = {},
        slotProps: f = {},
        type: b = 'text',
        ...y
      } = n,
      m = yf(n),
      p = Dt(),
      v = Wt({
        props: n,
        muiFormControl: p,
        states: ['color', 'disabled', 'error', 'focused', 'hiddenLabel', 'size', 'required'],
      }),
      C = {
        ...n,
        color: v.color || 'primary',
        disabled: v.disabled,
        error: v.error,
        focused: v.focused,
        formControl: p,
        fullWidth: i,
        hiddenLabel: v.hiddenLabel,
        multiline: l,
        size: v.size,
        type: b,
      },
      R = d.root ?? o.Root ?? bf,
      x = d.input ?? o.Input ?? xf,
      [g, S] = ce('notchedOutline', {
        elementType: vf,
        className: m.notchedOutline,
        shouldForwardComponentProp: !0,
        ownerState: C,
        externalForwardedProps: { slots: d, slotProps: f },
        additionalProps: {
          label:
            a != null && a !== '' && v.required
              ? T.jsxs(h.Fragment, { children: [a, ' ', '*'] })
              : a,
        },
      });
    return T.jsx(lo, {
      slots: { root: R, input: x },
      slotProps: f,
      renderSuffix: (w) =>
        T.jsx(g, {
          ...S,
          notched: typeof u < 'u' ? u : !!(w.startAdornment || w.filled || w.focused),
        }),
      fullWidth: i,
      inputComponent: s,
      multiline: l,
      ref: r,
      type: b,
      ...y,
      classes: { ...m, notchedOutline: null },
    });
  });
fo.muiName = 'Input';
function zs(e) {
  return oe('MuiSelect', e);
}
const Xt = te('MuiSelect', [
  'root',
  'select',
  'multiple',
  'filled',
  'outlined',
  'standard',
  'disabled',
  'focused',
  'icon',
  'iconOpen',
  'iconFilled',
  'iconOutlined',
  'iconStandard',
  'nativeInput',
  'error',
]);
var Ei;
const Sf = z(Ns, {
    name: 'MuiSelect',
    slot: 'Select',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        { [`&.${Xt.select}`]: t.select },
        { [`&.${Xt.select}`]: t[r.variant] },
        { [`&.${Xt.error}`]: t.error },
        { [`&.${Xt.multiple}`]: t.multiple },
      ];
    },
  })({
    [`&.${Xt.select}`]: {
      height: 'auto',
      minHeight: '1.4375em',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  }),
  Cf = z(Fs, {
    name: 'MuiSelect',
    slot: 'Icon',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.icon, r.variant && t[`icon${D(r.variant)}`], r.open && t.iconOpen];
    },
  })({}),
  wf = z('input', {
    shouldForwardProp: (e) => ys(e) && e !== 'classes',
    name: 'MuiSelect',
    slot: 'NativeInput',
  })({
    bottom: 0,
    left: 0,
    position: 'absolute',
    opacity: 0,
    pointerEvents: 'none',
    width: '100%',
    boxSizing: 'border-box',
  });
function ki(e, t) {
  return typeof t == 'object' && t !== null ? e === t : String(e) === String(t);
}
function Tf(e) {
  return e == null || (typeof e == 'string' && !e.trim());
}
const Rf = (e) => {
    const { classes: t, variant: r, disabled: n, multiple: o, open: i, error: s } = e,
      a = {
        select: ['select', r, n && 'disabled', o && 'multiple', s && 'error'],
        icon: ['icon', `icon${D(r)}`, i && 'iconOpen', n && 'disabled'],
        nativeInput: ['nativeInput'],
      };
    return ne(a, zs, t);
  },
  Ef = h.forwardRef(function (t, r) {
    var go, yo, bo, vo;
    const {
        'aria-describedby': n,
        'aria-label': o,
        autoFocus: i,
        autoWidth: s,
        children: a,
        className: l,
        defaultOpen: u,
        defaultValue: d,
        disabled: f,
        displayEmpty: b,
        error: y = !1,
        IconComponent: m,
        inputRef: p,
        labelId: v,
        MenuProps: C = {},
        multiple: R,
        name: x,
        onBlur: g,
        onChange: S,
        onClose: w,
        onFocus: $,
        onOpen: M,
        open: L,
        readOnly: N,
        renderValue: B,
        required: c,
        SelectDisplayProps: P = {},
        tabIndex: E,
        type: I,
        value: A,
        variant: F = 'standard',
        ...H
      } = t,
      [O, q] = ti({ controlled: A, default: d, name: 'Select' }),
      [ie, xe] = ti({ controlled: L, default: u, name: 'Select' }),
      Z = h.useRef(null),
      he = h.useRef(null),
      [ue, Be] = h.useState(null),
      { current: Te } = h.useRef(L != null),
      [Le, me] = h.useState(),
      _ = Me(r, p),
      K = h.useCallback((W) => {
        ((he.current = W), W && Be(W));
      }, []),
      G = ue == null ? void 0 : ue.parentNode;
    (h.useImperativeHandle(
      _,
      () => ({
        focus: () => {
          he.current.focus();
        },
        node: Z.current,
        value: O,
      }),
      [O],
    ),
      h.useEffect(() => {
        u && ie && ue && !Te && (me(s ? null : G.clientWidth), he.current.focus());
      }, [ue, s]),
      h.useEffect(() => {
        i && he.current.focus();
      }, [i]),
      h.useEffect(() => {
        if (!v) return;
        const W = Ve(he.current).getElementById(v);
        if (W) {
          const le = () => {
            getSelection().isCollapsed && he.current.focus();
          };
          return (
            W.addEventListener('click', le),
            () => {
              W.removeEventListener('click', le);
            }
          );
        }
      }, [v]));
    const Ce = (W, le) => {
        (W ? M && M(le) : w && w(le), Te || (me(s ? null : G.clientWidth), xe(W)));
      },
      V = (W) => {
        W.button === 0 && (W.preventDefault(), he.current.focus(), Ce(!0, W));
      },
      de = (W) => {
        Ce(!1, W);
      },
      Ne = h.Children.toArray(a),
      $e = (W) => {
        const le = Ne.find((Ee) => Ee.props.value === W.target.value);
        le !== void 0 && (q(le.props.value), S && S(W, le));
      },
      we = (W) => (le) => {
        let Ee;
        if (le.currentTarget.hasAttribute('tabindex')) {
          if (R) {
            Ee = Array.isArray(O) ? O.slice() : [];
            const kt = O.indexOf(W.props.value);
            kt === -1 ? Ee.push(W.props.value) : Ee.splice(kt, 1);
          } else Ee = W.props.value;
          if ((W.props.onClick && W.props.onClick(le), O !== Ee && (q(Ee), S))) {
            const kt = le.nativeEvent || le,
              xo = new kt.constructor(kt.type, kt);
            (Object.defineProperty(xo, 'target', { writable: !0, value: { value: Ee, name: x } }),
              S(xo, W));
          }
          R || Ce(!1, le);
        }
      },
      qe = (W) => {
        N ||
          ([' ', 'ArrowUp', 'ArrowDown', 'Enter'].includes(W.key) &&
            (W.preventDefault(), Ce(!0, W)));
      },
      Ae = ue !== null && ie,
      Se = (W) => {
        !Ae &&
          g &&
          (Object.defineProperty(W, 'target', { writable: !0, value: { value: O, name: x } }),
          g(W));
      };
    delete H['aria-invalid'];
    let j, ct;
    const Re = [];
    let wt = !1;
    (jr({ value: O }) || b) && (B ? (j = B(O)) : (wt = !0));
    const _t = Ne.map((W) => {
      if (!h.isValidElement(W)) return null;
      let le;
      if (R) {
        if (!Array.isArray(O)) throw new Error(st(2));
        ((le = O.some((Ee) => ki(Ee, W.props.value))), le && wt && Re.push(W.props.children));
      } else ((le = ki(O, W.props.value)), le && wt && (ct = W.props.children));
      return h.cloneElement(W, {
        'aria-selected': le ? 'true' : 'false',
        onClick: we(W),
        onKeyUp: (Ee) => {
          (Ee.key === ' ' && Ee.preventDefault(), W.props.onKeyUp && W.props.onKeyUp(Ee));
        },
        role: 'option',
        selected: le,
        value: void 0,
        'data-value': W.props.value,
      });
    });
    wt &&
      (R
        ? Re.length === 0
          ? (j = null)
          : (j = Re.reduce((W, le, Ee) => (W.push(le), Ee < Re.length - 1 && W.push(', '), W), []))
        : (j = ct));
    let Ht = Le;
    !s && Te && ue && (Ht = G.clientWidth);
    let Tt;
    typeof E < 'u' ? (Tt = E) : (Tt = f ? null : 0);
    const Rt = P.id || (x ? `mui-component-select-${x}` : void 0),
      tt = { ...t, variant: F, value: O, open: Ae, error: y },
      pe = Rf(tt),
      Et = {
        ...C.PaperProps,
        ...(typeof ((go = C.slotProps) == null ? void 0 : go.paper) == 'function'
          ? C.slotProps.paper(tt)
          : (yo = C.slotProps) == null
            ? void 0
            : yo.paper),
      },
      mr = {
        ...C.MenuListProps,
        ...(typeof ((bo = C.slotProps) == null ? void 0 : bo.list) == 'function'
          ? C.slotProps.list(tt)
          : (vo = C.slotProps) == null
            ? void 0
            : vo.list),
      },
      ho = tn();
    return T.jsxs(h.Fragment, {
      children: [
        T.jsx(Sf, {
          as: 'div',
          ref: K,
          tabIndex: Tt,
          role: 'combobox',
          'aria-controls': Ae ? ho : void 0,
          'aria-disabled': f ? 'true' : void 0,
          'aria-expanded': Ae ? 'true' : 'false',
          'aria-haspopup': 'listbox',
          'aria-label': o,
          'aria-labelledby': [v, Rt].filter(Boolean).join(' ') || void 0,
          'aria-describedby': n,
          'aria-required': c ? 'true' : void 0,
          'aria-invalid': y ? 'true' : void 0,
          onKeyDown: qe,
          onMouseDown: f || N ? null : V,
          onBlur: Se,
          onFocus: $,
          ...P,
          ownerState: tt,
          className: U(P.className, pe.select, l),
          id: Rt,
          children: Tf(j)
            ? Ei ||
              (Ei = T.jsx('span', { className: 'notranslate', 'aria-hidden': !0, children: '​' }))
            : j,
        }),
        T.jsx(wf, {
          'aria-invalid': y,
          value: Array.isArray(O) ? O.join(',') : O,
          name: x,
          ref: Z,
          'aria-hidden': !0,
          onChange: $e,
          tabIndex: -1,
          disabled: f,
          className: pe.nativeInput,
          autoFocus: i,
          required: c,
          ...H,
          ownerState: tt,
        }),
        T.jsx(Cf, { as: m, className: pe.icon, ownerState: tt }),
        T.jsx(lf, {
          id: `menu-${x || ''}`,
          anchorEl: G,
          open: Ae,
          onClose: de,
          anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
          transformOrigin: { vertical: 'top', horizontal: 'center' },
          ...C,
          slotProps: {
            ...C.slotProps,
            list: {
              'aria-labelledby': v,
              role: 'listbox',
              'aria-multiselectable': R ? 'true' : void 0,
              disableListWrap: !0,
              id: ho,
              ...mr,
            },
            paper: { ...Et, style: { minWidth: Ht, ...(Et != null ? Et.style : null) } },
          },
          children: _t,
        }),
      ],
    });
  }),
  kf = (e) => {
    const { classes: t } = e,
      n = ne({ root: ['root'] }, zs, t);
    return { ...t, ...n };
  },
  mo = { name: 'MuiSelect', slot: 'Root', shouldForwardProp: (e) => He(e) && e !== 'variant' },
  If = z(uo, mo)(''),
  Pf = z(fo, mo)(''),
  $f = z(co, mo)(''),
  js = h.forwardRef(function (t, r) {
    const n = ae({ name: 'MuiSelect', props: t }),
      {
        autoWidth: o = !1,
        children: i,
        classes: s = {},
        className: a,
        defaultOpen: l = !1,
        displayEmpty: u = !1,
        IconComponent: d = Ed,
        id: f,
        input: b,
        inputProps: y,
        label: m,
        labelId: p,
        MenuProps: v,
        multiple: C = !1,
        native: R = !1,
        onClose: x,
        onOpen: g,
        open: S,
        renderValue: w,
        SelectDisplayProps: $,
        variant: M = 'outlined',
        ...L
      } = n,
      N = R ? ff : Ef,
      B = Dt(),
      c = Wt({ props: n, muiFormControl: B, states: ['variant', 'error'] }),
      P = c.variant || M,
      E = { ...n, variant: P, classes: s },
      I = kf(E),
      { root: A, ...F } = I,
      H =
        b ||
        {
          standard: T.jsx(If, { ownerState: E }),
          outlined: T.jsx(Pf, { label: m, ownerState: E }),
          filled: T.jsx($f, { ownerState: E }),
        }[P],
      O = Me(r, fr(H));
    return T.jsx(h.Fragment, {
      children: h.cloneElement(H, {
        inputComponent: N,
        inputProps: {
          children: i,
          error: c.error,
          IconComponent: d,
          variant: P,
          type: void 0,
          multiple: C,
          ...(R
            ? { id: f }
            : {
                autoWidth: o,
                defaultOpen: l,
                displayEmpty: u,
                labelId: p,
                MenuProps: v,
                onClose: x,
                onOpen: g,
                open: S,
                renderValue: w,
                SelectDisplayProps: { id: f, ...$ },
              }),
          ...y,
          classes: y ? Pe(F, y.classes) : F,
          ...(b ? b.props.inputProps : {}),
        },
        ...(((C && R) || u) && P === 'outlined' ? { notched: !0 } : {}),
        ref: O,
        className: U(H.props.className, a, I.root),
        ...(!b && { variant: P }),
        ...L,
      }),
    });
  });
js.muiName = 'Select';
function Af(e) {
  return oe('MuiTextField', e);
}
te('MuiTextField', ['root']);
const Mf = { standard: uo, filled: co, outlined: fo },
  Of = (e) => {
    const { classes: t } = e;
    return ne({ root: ['root'] }, Af, t);
  },
  Bf = z(vp, { name: 'MuiTextField', slot: 'Root' })({}),
  Lf = h.forwardRef(function (t, r) {
    const n = ae({ props: t, name: 'MuiTextField' }),
      {
        autoComplete: o,
        autoFocus: i = !1,
        children: s,
        className: a,
        color: l = 'primary',
        defaultValue: u,
        disabled: d = !1,
        error: f = !1,
        FormHelperTextProps: b,
        fullWidth: y = !1,
        helperText: m,
        id: p,
        InputLabelProps: v,
        inputProps: C,
        InputProps: R,
        inputRef: x,
        label: g,
        maxRows: S,
        minRows: w,
        multiline: $ = !1,
        name: M,
        onBlur: L,
        onChange: N,
        onFocus: B,
        placeholder: c,
        required: P = !1,
        rows: E,
        select: I = !1,
        SelectProps: A,
        slots: F = {},
        slotProps: H = {},
        type: O,
        value: q,
        variant: ie = 'outlined',
        ...xe
      } = n,
      Z = {
        ...n,
        autoFocus: i,
        color: l,
        disabled: d,
        error: f,
        fullWidth: y,
        multiline: $,
        required: P,
        select: I,
        variant: ie,
      },
      he = Of(Z),
      ue = tn(p),
      Be = m && ue ? `${ue}-helper-text` : void 0,
      Te = g && ue ? `${ue}-label` : void 0,
      Le = Mf[ie],
      me = {
        slots: F,
        slotProps: { input: R, inputLabel: v, htmlInput: C, formHelperText: b, select: A, ...H },
      },
      _ = {},
      K = me.slotProps.inputLabel;
    (ie === 'outlined' && (K && typeof K.shrink < 'u' && (_.notched = K.shrink), (_.label = g)),
      I && ((!A || !A.native) && (_.id = void 0), (_['aria-describedby'] = void 0)));
    const [G, Ce] = ce('root', {
        elementType: Bf,
        shouldForwardComponentProp: !0,
        externalForwardedProps: { ...me, ...xe },
        ownerState: Z,
        className: U(he.root, a),
        ref: r,
        additionalProps: {
          disabled: d,
          error: f,
          fullWidth: y,
          required: P,
          color: l,
          variant: ie,
        },
      }),
      [V, de] = ce('input', {
        elementType: Le,
        externalForwardedProps: me,
        additionalProps: _,
        ownerState: Z,
      }),
      [Ne, $e] = ce('inputLabel', { elementType: Np, externalForwardedProps: me, ownerState: Z }),
      [we, qe] = ce('htmlInput', {
        elementType: 'input',
        externalForwardedProps: me,
        ownerState: Z,
      }),
      [Ae, Se] = ce('formHelperText', {
        elementType: wp,
        externalForwardedProps: me,
        ownerState: Z,
      }),
      [j, ct] = ce('select', { elementType: js, externalForwardedProps: me, ownerState: Z }),
      Re = T.jsx(V, {
        'aria-describedby': Be,
        autoComplete: o,
        autoFocus: i,
        defaultValue: u,
        fullWidth: y,
        multiline: $,
        name: M,
        rows: E,
        maxRows: S,
        minRows: w,
        type: O,
        value: q,
        id: ue,
        inputRef: x,
        onBlur: L,
        onChange: N,
        onFocus: B,
        placeholder: c,
        inputProps: qe,
        slots: { input: F.htmlInput ? we : void 0 },
        ...de,
      });
    return T.jsxs(G, {
      ...Ce,
      children: [
        g != null && g !== '' && T.jsx(Ne, { htmlFor: ue, id: Te, ...$e, children: g }),
        I
          ? T.jsx(j, {
              'aria-describedby': Be,
              id: ue,
              labelId: Te,
              value: q,
              input: Re,
              ...ct,
              children: s,
            })
          : Re,
        m && T.jsx(Ae, { id: Be, ...Se, children: m }),
      ],
    });
  });
function Ws(e) {
  const { value: t, placeholder: r, sendLabel: n, disabled: o, onChange: i, onSubmit: s } = e;
  return T.jsxs(Qe, {
    sx: { p: 2, borderTop: 1, borderColor: 'divider', display: 'flex', gap: 1 },
    children: [
      T.jsx(Lf, {
        fullWidth: !0,
        size: 'small',
        placeholder: r,
        value: t,
        onChange: (a) => i(a.target.value),
        onKeyDown: (a) => {
          a.key === 'Enter' && !a.shiftKey && (a.preventDefault(), o || s());
        },
      }),
      T.jsx(As, { variant: 'contained', disabled: o, onClick: s, children: n }),
    ],
  });
}
Ws.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'ChatComposer',
  props: {
    value: { required: !0, tsType: { name: 'string' }, description: '' },
    placeholder: { required: !0, tsType: { name: 'string' }, description: '' },
    sendLabel: { required: !0, tsType: { name: 'string' }, description: '' },
    disabled: { required: !0, tsType: { name: 'boolean' }, description: '' },
    onChange: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(value: string) => void',
        signature: {
          arguments: [{ type: { name: 'string' }, name: 'value' }],
          return: { name: 'void' },
        },
      },
      description: '',
    },
    onSubmit: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '() => void',
        signature: { arguments: [], return: { name: 'void' } },
      },
      description: '',
    },
  },
};
function Ds(e) {
  const {
    chats: t,
    activeChatId: r,
    noChatsLabel: n,
    onStartNewChat: o,
    onSelectChat: i,
    newChatLabel: s,
    historyLabel: a,
  } = e;
  return T.jsxs(Qe, {
    sx: {
      width: 280,
      borderRight: 1,
      borderColor: 'divider',
      display: 'flex',
      flexDirection: 'column',
    },
    children: [
      T.jsxs(Qe, {
        sx: { p: 2, display: 'flex', flexDirection: 'column', gap: 1 },
        children: [
          T.jsx(it, { variant: 'subtitle2', sx: { fontWeight: 700 }, children: a }),
          T.jsx(As, { variant: 'contained', onClick: o, children: s }),
        ],
      }),
      T.jsx(Nn, {}),
      T.jsx(Os, {
        sx: { overflowY: 'auto', flex: 1 },
        children:
          t.length === 0
            ? T.jsx(Qe, {
                sx: { p: 2 },
                children: T.jsx(it, { variant: 'body2', color: 'text.secondary', children: n }),
              })
            : t.map((l) =>
                T.jsx(
                  Up,
                  {
                    selected: l.id === r,
                    onClick: () => i(l.id),
                    children: T.jsx(Gp, {
                      primary: l.title,
                      secondary: new Date(l.updatedAt).toLocaleString(),
                      primaryTypographyProps: { noWrap: !0 },
                    }),
                  },
                  l.id,
                ),
              ),
      }),
    ],
  });
}
Ds.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'ChatHistoryPanel',
  props: {
    chats: {
      required: !0,
      tsType: { name: 'Array', elements: [{ name: 'ChatSession' }], raw: 'ChatSession[]' },
      description: '',
    },
    activeChatId: {
      required: !0,
      tsType: {
        name: 'union',
        raw: 'string | null',
        elements: [{ name: 'string' }, { name: 'null' }],
      },
      description: '',
    },
    noChatsLabel: { required: !0, tsType: { name: 'string' }, description: '' },
    onStartNewChat: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '() => void',
        signature: { arguments: [], return: { name: 'void' } },
      },
      description: '',
    },
    onSelectChat: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(chatId: string) => void',
        signature: {
          arguments: [{ type: { name: 'string' }, name: 'chatId' }],
          return: { name: 'void' },
        },
      },
      description: '',
    },
    newChatLabel: { required: !0, tsType: { name: 'string' }, description: '' },
    historyLabel: { required: !0, tsType: { name: 'string' }, description: '' },
  },
};
function _s({ activeChat: e, noMessagesLabel: t }) {
  const r = (e == null ? void 0 : e.messages) ?? [];
  return r.length === 0
    ? T.jsx(Qe, {
        sx: { p: 3 },
        children: T.jsx(it, { variant: 'body2', color: 'text.secondary', children: t }),
      })
    : T.jsx(Qe, {
        sx: { p: 2, display: 'flex', flexDirection: 'column', gap: 1.5 },
        children: r.map((n) => {
          const o = n.role === 'user';
          return T.jsx(
            nn,
            {
              variant: 'outlined',
              sx: {
                p: 1.5,
                alignSelf: o ? 'flex-end' : 'flex-start',
                maxWidth: '80%',
                bgcolor: o ? 'primary.main' : 'background.paper',
                color: o ? 'primary.contrastText' : 'text.primary',
                borderRadius: 2,
              },
              children: T.jsx(it, { variant: 'body2', children: n.text }),
            },
            n.id,
          );
        }),
      });
}
_s.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'ChatThreadView',
  props: {
    activeChat: {
      required: !0,
      tsType: {
        name: 'union',
        raw: 'ChatSession | undefined',
        elements: [{ name: 'ChatSession' }, { name: 'undefined' }],
      },
      description: '',
    },
    noMessagesLabel: { required: !0, tsType: { name: 'string' }, description: '' },
  },
};
const Nf = {
  title: 'AI Ассистент',
  newChat: 'Новый чат',
  history: 'История чатов',
  askPlaceholder: 'Введите вопрос...',
  send: 'Отправить',
  noChats: 'Чатов пока нет',
  noMessages: 'Начните диалог с ассистентом',
};
function Hs(e) {
  const {
      chats: t,
      activeChatId: r,
      isHistoryOpen: n,
      draft: o,
      isSubmitting: i,
      error: s,
      labels: a,
      onDraftChange: l,
      onSendQuestion: u,
      onStartNewChat: d,
      onToggleHistory: f,
      onSelectChat: b,
    } = e,
    y = { ...Nf, ...(a ?? {}) },
    m = t.find((v) => v.id === r),
    p = i || o.trim().length === 0 || r === null;
  return T.jsxs(nn, {
    sx: { height: '100%', minHeight: 560, display: 'flex', overflow: 'hidden' },
    children: [
      n
        ? T.jsx(Ds, {
            chats: t,
            activeChatId: r,
            noChatsLabel: y.noChats,
            onStartNewChat: d,
            onSelectChat: b,
            newChatLabel: y.newChat,
            historyLabel: y.history,
          })
        : null,
      T.jsxs(Qe, {
        sx: { flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 },
        children: [
          T.jsxs(Qe, {
            sx: {
              p: 1.5,
              borderBottom: 1,
              borderColor: 'divider',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            },
            children: [
              T.jsx(Ps, {
                size: 'small',
                onClick: f,
                'aria-label': y.history,
                children: T.jsx(uu, { fontSize: 'small' }),
              }),
              T.jsx(it, { variant: 'subtitle1', sx: { fontWeight: 700 }, children: y.title }),
            ],
          }),
          s
            ? T.jsx(Qe, {
                sx: { p: 2, pb: 0 },
                children: T.jsx(ld, { severity: 'error', children: s }),
              })
            : null,
          T.jsx(Qe, {
            sx: { flex: 1, overflowY: 'auto' },
            children: T.jsx(_s, { activeChat: m, noMessagesLabel: y.noMessages }),
          }),
          T.jsx(Ws, {
            value: o,
            placeholder: y.askPlaceholder,
            sendLabel: y.send,
            disabled: p,
            onChange: l,
            onSubmit: () => u(o),
          }),
        ],
      }),
    ],
  });
}
Hs.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'AiAssistant',
  props: {
    chats: {
      required: !0,
      tsType: { name: 'Array', elements: [{ name: 'ChatSession' }], raw: 'ChatSession[]' },
      description: '',
    },
    activeChatId: {
      required: !0,
      tsType: {
        name: 'union',
        raw: 'string | null',
        elements: [{ name: 'string' }, { name: 'null' }],
      },
      description: '',
    },
    isHistoryOpen: { required: !0, tsType: { name: 'boolean' }, description: '' },
    draft: { required: !0, tsType: { name: 'string' }, description: '' },
    isSubmitting: { required: !0, tsType: { name: 'boolean' }, description: '' },
    error: {
      required: !1,
      tsType: {
        name: 'union',
        raw: 'string | null',
        elements: [{ name: 'string' }, { name: 'null' }],
      },
      description: '',
    },
    labels: {
      required: !1,
      tsType: {
        name: 'Partial',
        elements: [{ name: 'AiAssistantLabels' }],
        raw: 'Partial<AiAssistantLabels>',
      },
      description: '',
    },
    onDraftChange: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(value: string) => void',
        signature: {
          arguments: [{ type: { name: 'string' }, name: 'value' }],
          return: { name: 'void' },
        },
      },
      description: '',
    },
    onSendQuestion: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(question: string) => void',
        signature: {
          arguments: [{ type: { name: 'string' }, name: 'question' }],
          return: { name: 'void' },
        },
      },
      description: '',
    },
    onStartNewChat: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '() => void',
        signature: { arguments: [], return: { name: 'void' } },
      },
      description: '',
    },
    onToggleHistory: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '() => void',
        signature: { arguments: [], return: { name: 'void' } },
      },
      description: '',
    },
    onSelectChat: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(chatId: string) => void',
        signature: {
          arguments: [{ type: { name: 'string' }, name: 'chatId' }],
          return: { name: 'void' },
        },
      },
      description: '',
    },
  },
};
const Ff = [
    {
      id: 'chat-1',
      title: 'Загрузка шаблона',
      createdAt: '2026-04-26T10:00:00.000Z',
      updatedAt: '2026-04-26T10:02:00.000Z',
      messages: [
        {
          id: 'm-1',
          role: 'user',
          text: 'Как валидировать DOCX?',
          createdAt: '2026-04-26T10:01:00.000Z',
          status: 'sent',
          kind: 'text',
        },
        {
          id: 'm-2',
          role: 'assistant',
          text: 'Загрузите файл и отправьте metadata в /api/templates/validate.',
          createdAt: '2026-04-26T10:01:10.000Z',
          status: 'sent',
          kind: 'text',
        },
      ],
    },
  ],
  _f = {
    title: 'AI Assistant/AiAssistant',
    component: Hs,
    args: {
      chats: Ff,
      activeChatId: 'chat-1',
      isHistoryOpen: !0,
      draft: '',
      isSubmitting: !1,
      error: null,
      onDraftChange: () => {},
      onSendQuestion: () => {},
      onStartNewChat: () => {},
      onToggleHistory: () => {},
      onSelectChat: () => {},
    },
  },
  Cr = {},
  wr = { args: { isHistoryOpen: !1 } },
  Tr = { args: { chats: [], activeChatId: null } },
  Rr = { args: { error: 'Не удалось отправить вопрос', draft: 'Повторить запрос' } };
var Ii, Pi, $i;
Cr.parameters = {
  ...Cr.parameters,
  docs: {
    ...((Ii = Cr.parameters) == null ? void 0 : Ii.docs),
    source: {
      originalSource: '{}',
      ...(($i = (Pi = Cr.parameters) == null ? void 0 : Pi.docs) == null ? void 0 : $i.source),
    },
  },
};
var Ai, Mi, Oi;
wr.parameters = {
  ...wr.parameters,
  docs: {
    ...((Ai = wr.parameters) == null ? void 0 : Ai.docs),
    source: {
      originalSource: `{
  args: {
    isHistoryOpen: false
  }
}`,
      ...((Oi = (Mi = wr.parameters) == null ? void 0 : Mi.docs) == null ? void 0 : Oi.source),
    },
  },
};
var Bi, Li, Ni;
Tr.parameters = {
  ...Tr.parameters,
  docs: {
    ...((Bi = Tr.parameters) == null ? void 0 : Bi.docs),
    source: {
      originalSource: `{
  args: {
    chats: [],
    activeChatId: null
  }
}`,
      ...((Ni = (Li = Tr.parameters) == null ? void 0 : Li.docs) == null ? void 0 : Ni.source),
    },
  },
};
var Fi, zi, ji;
Rr.parameters = {
  ...Rr.parameters,
  docs: {
    ...((Fi = Rr.parameters) == null ? void 0 : Fi.docs),
    source: {
      originalSource: `{
  args: {
    error: 'Не удалось отправить вопрос',
    draft: 'Повторить запрос'
  }
}`,
      ...((ji = (zi = Rr.parameters) == null ? void 0 : zi.docs) == null ? void 0 : ji.source),
    },
  },
};
const Hf = ['Default', 'HistoryCollapsed', 'EmptyState', 'WithError'];
export {
  Cr as Default,
  Tr as EmptyState,
  wr as HistoryCollapsed,
  Rr as WithError,
  Hf as __namedExportsOrder,
  _f as default,
};
