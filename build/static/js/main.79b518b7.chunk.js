(this["webpackJsonpcoloring-app"] =
  this["webpackJsonpcoloring-app"] || []).push([
  [0],
  {
    173: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = n.p + "static/media/goodnightMoon_blank.819d4e1c.svg");
    },
    174: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = n.p + "static/media/goodnightMoon_cover.b6135f34.svg");
    },
    175: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = n.p + "static/media/goodnightMoon_page1.55556adc.svg");
    },
    176: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = n.p + "static/media/goodnightMoon_page2.a8e1a4e0.svg");
    },
    223: function (e, t, n) {},
    224: function (e, t, n) {
      "use strict";
      n.r(t), (t.default = n.p + "static/media/Elephant.a8cf0db6.svg");
    },
    225: function (e, t, n) {
      "use strict";
      n.r(t), (t.default = n.p + "static/media/cover.af839440.svg");
    },
    226: function (e, t, n) {
      "use strict";
      n.r(t), (t.default = n.p + "static/media/mickey-beach.dec36287.svg");
    },
    227: function (e, t, n) {
      "use strict";
      n.r(t), (t.default = n.p + "static/media/octopus.48b98ad1.svg");
    },
    228: function (e, t, n) {
      "use strict";
      n.r(t), (t.default = n.p + "static/media/page1.b961eaf6.svg");
    },
    229: function (e, t, n) {
      "use strict";
      n.r(t), (t.default = n.p + "static/media/page2.df142715.svg");
    },
    230: function (e, t, n) {
      "use strict";
      n.r(t), (t.default = n.p + "static/media/peppa_cover.ee7f0fcc.svg");
    },
    231: function (e, t, n) {
      "use strict";
      n.r(t), (t.default = n.p + "static/media/peppa_page1.aa7d5998.svg");
    },
    232: function (e, t, n) {
      "use strict";
      n.r(t), (t.default = n.p + "static/media/peppa_page2.1a5e3be7.svg");
    },
    233: function (e, t, n) {
      "use strict";
      n.r(t), (t.default = n.p + "static/media/peppa_page3.b3f72596.svg");
    },
    234: function (e, t, n) {
      "use strict";
      n.r(t), (t.default = n.p + "static/media/peppa_page4.9aff7da0.svg");
    },
    235: function (e, t, n) {
      "use strict";
      n.r(t), (t.default = n.p + "static/media/peppa_page5.5b698d11.svg");
    },
    236: function (e, t, n) {
      "use strict";
      n.r(t), (t.default = n.p + "static/media/peppa_page6.07b15f75.svg");
    },
    237: function (e, t, n) {
      "use strict";
      n.r(t), (t.default = n.p + "static/media/peppa_page7.62cf726e.svg");
    },
    251: function (e, t, n) {
      "use strict";
      (function (e) {
        n.d(t, "a", function () {
          return f;
        });
        var a = n(17),
          s = n.n(a),
          c = n(26),
          r = n(10),
          o = (n(447), n(25)),
          i = n(0),
          l = n(58),
          u = n(15),
          d = n(184),
          j = n(257),
          b = n(178),
          p = n(1);
        function f() {
          var t = Object(o.c)(function (e) {
              return e.userReducer.id;
            }),
            n = Object(i.useRef)(null),
            a = (Object(u.f)(), Object(i.useState)(!0)),
            f = Object(r.a)(a, 2),
            h = f[0],
            g = f[1],
            x = Object(i.useState)(null),
            m = Object(r.a)(x, 2),
            O = (m[0], m[1]);
          Object(i.useEffect)(
            function () {
              var a = (function () {
                var a = Object(c.a)(
                  s.a.mark(function a() {
                    var c;
                    return s.a.wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (a.next = 2), Object(l.b)(t);
                          case 2:
                            (c = a.sent),
                              (n.current = c.map(function (t) {
                                var n = new e.from(t.image.data).toString(
                                  "ascii"
                                );
                                return (
                                  (document.createElement("svg").innerHtml = n),
                                  { image: n, id: t.id, name: t.name }
                                );
                              })),
                              O(n.current),
                              null !== n.current && g(!1);
                          case 6:
                          case "end":
                            return a.stop();
                        }
                    }, a);
                  })
                );
                return function () {
                  return a.apply(this, arguments);
                };
              })();
              a();
            },
            [t, h]
          );
          var v = function (e) {
              var t = document.querySelector(".MyPictures-svg").firstChild,
                n = t.dataset.name;
              b.saveSvg(t, n);
            },
            w = (function () {
              var e = Object(c.a)(
                s.a.mark(function e(t) {
                  return s.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), Object(l.a)(t.target.dataset.id);
                        case 2:
                          e.sent, g(!0), g(!1);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(p.jsx)(d.a, {
            className: "MyPictures",
            children: n.current
              ? n.current.map(function (e) {
                  return Object(p.jsxs)(
                    d.a,
                    {
                      className: "MyPictures-svg-container",
                      children: [
                        Object(p.jsx)("div", {
                          className: "MyPictures-svg",
                          dangerouslySetInnerHTML: { __html: e.image },
                        }),
                        Object(p.jsxs)(d.a, {
                          sx: { paddingTop: "2rem" },
                          children: [
                            Object(p.jsx)(j.a, {
                              sx: {
                                marginRight: "1rem",
                                position: "absolute",
                                bottom: "0",
                                left: "2rem",
                              },
                              className: "MyPictures-button",
                              onClick: v,
                              variant: "contained",
                              children: "Download",
                            }),
                            Object(p.jsx)(j.a, {
                              sx: {
                                position: "absolute",
                                bottom: "0",
                                right: "2rem",
                              },
                              "data-id": e.id,
                              onClick: w,
                              variant: "contained",
                              color: "error",
                              children: "Delete",
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id
                  );
                })
              : null,
          });
        }
      }.call(this, n(443).Buffer));
    },
    270: function (e, t, n) {},
    271: function (e, t, n) {},
    417: function (e, t, n) {},
    438: function (e, t, n) {
      var a = {
        "./GoonightMoon/goodnightMoon_blank.svg": 173,
        "./GoonightMoon/goodnightMoon_cover.svg": 174,
        "./GoonightMoon/goodnightMoon_page1.svg": 175,
        "./GoonightMoon/goodnightMoon_page2.svg": 176,
        "./Peppa/peppa_cover.svg": 230,
        "./Peppa/peppa_page1.svg": 231,
        "./Peppa/peppa_page2.svg": 232,
        "./Peppa/peppa_page3.svg": 233,
        "./Peppa/peppa_page4.svg": 234,
        "./Peppa/peppa_page5.svg": 235,
        "./Peppa/peppa_page6.svg": 236,
        "./Peppa/peppa_page7.svg": 237,
        "./Random/Elephant.svg": 224,
        "./Random/cover.svg": 225,
        "./Random/mickey-beach.svg": 226,
        "./Random/octopus.svg": 227,
        "./Random/page1.svg": 228,
        "./Random/page2.svg": 229,
      };
      function s(e) {
        return Promise.resolve().then(function () {
          if (!n.o(a, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return n(a[e]);
        });
      }
      (s.keys = function () {
        return Object.keys(a);
      }),
        (s.id = 438),
        (e.exports = s);
    },
    439: function (e, t, n) {
      var a = {
        "./Elephant.svg": 224,
        "./cover.svg": 225,
        "./mickey-beach.svg": 226,
        "./octopus.svg": 227,
        "./page1.svg": 228,
        "./page2.svg": 229,
      };
      function s(e) {
        var t = c(e);
        return n(t);
      }
      function c(e) {
        if (!n.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return a[e];
      }
      (s.keys = function () {
        return Object.keys(a);
      }),
        (s.resolve = c),
        (e.exports = s),
        (s.id = 439);
    },
    440: function (e, t, n) {
      var a = {
        "./peppa_cover.svg": 230,
        "./peppa_page1.svg": 231,
        "./peppa_page2.svg": 232,
        "./peppa_page3.svg": 233,
        "./peppa_page4.svg": 234,
        "./peppa_page5.svg": 235,
        "./peppa_page6.svg": 236,
        "./peppa_page7.svg": 237,
      };
      function s(e) {
        var t = c(e);
        return n(t);
      }
      function c(e) {
        if (!n.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return a[e];
      }
      (s.keys = function () {
        return Object.keys(a);
      }),
        (s.resolve = c),
        (e.exports = s),
        (s.id = 440);
    },
    441: function (e, t, n) {
      var a = {
        "./goodnightMoon_blank.svg": 173,
        "./goodnightMoon_cover.svg": 174,
        "./goodnightMoon_page1.svg": 175,
        "./goodnightMoon_page2.svg": 176,
      };
      function s(e) {
        var t = c(e);
        return n(t);
      }
      function c(e) {
        if (!n.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return a[e];
      }
      (s.keys = function () {
        return Object.keys(a);
      }),
        (s.resolve = c),
        (e.exports = s),
        (s.id = 441);
    },
    442: function (e, t, n) {},
    447: function (e, t, n) {},
    448: function (e, t, n) {},
    449: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        s = n.n(a),
        c = n(38),
        r = n.n(c),
        o = (n(270), n(10)),
        i = (n(271), n(25)),
        l = n(492),
        u = n(29),
        d = (n(151), n(17)),
        j = n.n(d),
        b = n(26),
        p = n(35),
        f = n(498),
        h = n(500),
        g = n(501),
        x = n(502),
        m = n(184),
        O = n(503),
        v = n(257),
        w = n(72),
        k = n(58),
        C = n(1);
      var y = function (e) {
          var t = e.toggle,
            n = e.notify,
            a = Object(i.b)();
          return Object(C.jsxs)("div", {
            style: { textAlign: "center" },
            children: [
              Object(C.jsx)(u.a, { autoClose: 2e3, hideProgressBar: !0 }),
              Object(C.jsx)(f.a, {
                sx: { margin: "auto" },
                children: Object(C.jsxs)(h.a, {
                  children: [
                    Object(C.jsx)(g.a, {
                      variant: "h4",
                      mb: 2,
                      children: "Login",
                    }),
                    Object(C.jsx)(p.d, {
                      validationSchema: Object(w.a)({
                        username: Object(w.b)().required().min(3).max(15),
                        password: Object(w.b)().required().min(5).max(20),
                      }),
                      initialValues: { username: "", password: "" },
                      onSubmit: (function () {
                        var e = Object(b.a)(
                          j.a.mark(function e(s) {
                            var c;
                            return j.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        a(Object(k.c)(s))
                                      );
                                    case 3:
                                      (c = e.sent).username &&
                                        (t(), n(c.username)),
                                        (e.next = 11);
                                      break;
                                    case 7:
                                      (e.prev = 7),
                                        (e.t0 = e.catch(0)),
                                        console.log(e.t0),
                                        u.b.error(
                                          "Sorry, incorrect login information",
                                          { position: u.b.POSITION.TOP_RIGHT }
                                        );
                                    case 11:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 7]]
                            );
                          })
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                      children: function (e) {
                        e.values, e.errors;
                        return Object(C.jsxs)(p.c, {
                          children: [
                            Object(C.jsxs)(x.a, {
                              children: [
                                Object(C.jsxs)(m.a, {
                                  mb: 2,
                                  children: [
                                    Object(C.jsx)(p.b, {
                                      name: "username",
                                      as: O.a,
                                      label: "Username",
                                    }),
                                    Object(C.jsx)(p.a, {
                                      name: "username",
                                      render: function (e) {
                                        return Object(C.jsx)("div", {
                                          style: { color: "red" },
                                          children: e,
                                        });
                                      },
                                    }),
                                  ],
                                }),
                                Object(C.jsxs)(m.a, {
                                  mb: 2,
                                  children: [
                                    Object(C.jsx)(p.b, {
                                      name: "password",
                                      type: "password",
                                      as: O.a,
                                      label: "Password",
                                    }),
                                    Object(C.jsx)(p.a, {
                                      name: "password",
                                      render: function (e) {
                                        return Object(C.jsx)("div", {
                                          style: { color: "red" },
                                          children: e,
                                        });
                                      },
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(C.jsx)(v.a, {
                              style: { backgroundColor: "#81c784" },
                              variant: "contained",
                              type: "submit",
                              color: "success",
                              children: "Login",
                            }),
                          ],
                        });
                      },
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        P = n(15);
      var N = function (e) {
          var t = e.toggle,
            n = e.notify,
            a = Object(i.b)(),
            s = Object(P.f)();
          return Object(C.jsxs)("div", {
            style: { textAlign: "center" },
            children: [
              Object(C.jsx)(u.a, { autoClose: 2e3, hideProgressBar: !0 }),
              Object(C.jsx)(f.a, {
                sx: { margin: "auto" },
                children: Object(C.jsxs)(h.a, {
                  children: [
                    Object(C.jsx)(g.a, {
                      variant: "h4",
                      mb: 2,
                      children: "Sign Up",
                    }),
                    Object(C.jsx)(p.d, {
                      validationSchema: Object(w.a)({
                        username: Object(w.b)().required().min(3).max(15),
                        password: Object(w.b)().required().min(5).max(20),
                      }),
                      initialValues: { username: "", password: "" },
                      onSubmit: (function () {
                        var e = Object(b.a)(
                          j.a.mark(function e(c) {
                            var r;
                            return j.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        a(Object(k.e)(c))
                                      );
                                    case 3:
                                      (r = e.sent).username &&
                                        (t(), n(r.username), s("/color")),
                                        (e.next = 11);
                                      break;
                                    case 7:
                                      (e.prev = 7),
                                        (e.t0 = e.catch(0)),
                                        console.log("*******", e.t0),
                                        u.b.error(
                                          "Sorry, username already taken",
                                          { position: u.b.POSITION.TOP_RIGHT }
                                        );
                                    case 11:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 7]]
                            );
                          })
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                      children: function (e) {
                        e.values, e.errors;
                        return Object(C.jsxs)(p.c, {
                          children: [
                            Object(C.jsxs)(x.a, {
                              children: [
                                Object(C.jsxs)(m.a, {
                                  mb: 2,
                                  children: [
                                    Object(C.jsx)(p.b, {
                                      name: "username",
                                      as: O.a,
                                      label: "Username",
                                    }),
                                    Object(C.jsx)(p.a, {
                                      name: "username",
                                      render: function (e) {
                                        return Object(C.jsx)("div", {
                                          style: { color: "red" },
                                          children: e,
                                        });
                                      },
                                    }),
                                  ],
                                }),
                                Object(C.jsxs)(m.a, {
                                  mb: 2,
                                  children: [
                                    Object(C.jsx)(p.b, {
                                      name: "password",
                                      type: "password",
                                      as: O.a,
                                      label: "Password",
                                    }),
                                    Object(C.jsx)(p.a, {
                                      name: "password",
                                      render: function (e) {
                                        return Object(C.jsx)("div", {
                                          style: { color: "red" },
                                          children: e,
                                        });
                                      },
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(C.jsx)(v.a, {
                              style: { backgroundColor: "#81c784" },
                              variant: "contained",
                              type: "submit",
                              color: "success",
                              children: "Submit",
                            }),
                          ],
                        });
                      },
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        S = n(499),
        A = n(254),
        G = (n(417), n(249)),
        L =
          (n(178),
          n(432),
          n(223),
          {
            goodnightMoon_blank: n(173),
            goodnightMoon_cover: n(174),
            goodnightMoon_page1: n(175),
            goodnightMoon_page2: n(176),
          }),
        E = function (e) {
          var t = e.name,
            s = e.currentColor,
            c = e.bookName,
            r = e.text,
            l = e.pageClass,
            u = Object(i.b)(),
            d = Object(a.useRef)(null),
            p = Object(a.useRef)(null),
            f = Object(a.useState)(!1),
            h = Object(o.a)(f, 2),
            g = h[0],
            x = h[1],
            O = Object(a.useState)(!0),
            v = Object(o.a)(O, 2),
            w = (v[0], v[1]);
          Object(a.useEffect)(
            function () {
              x(!0);
              var e = (function () {
                var e = Object(b.a)(
                  j.a.mark(function e() {
                    var a, s;
                    return j.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (((e.prev = 0), "goodnightMoon" !== c)) {
                                e.next = 7;
                                break;
                              }
                              (a = L[t]),
                                (p.current = a.default),
                                w(function (e) {
                                  return !e;
                                }),
                                (e.next = 11);
                              break;
                            case 7:
                              return (
                                (e.next = 9),
                                n(438)("./".concat(c, "/").concat(t, ".svg"))
                              );
                            case 9:
                              (s = e.sent), (p.current = s.default);
                            case 11:
                              e.next = 16;
                              break;
                            case 13:
                              throw ((e.prev = 13), (e.t0 = e.catch(0)), e.t0);
                            case 16:
                              x(!1);
                            case 17:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 13]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              e();
            },
            [c, t]
          );
          return !g && p.current && p.current
            ? Object(C.jsx)(C.Fragment, {
                children: Object(C.jsxs)(m.a, {
                  className: "SVG-".concat(l),
                  children: [
                    Object(C.jsx)("svg", {
                      onClick: function (e) {
                        if (
                          !e.target.style.cssText.includes(
                            "fill: rgb(0, 0, 0);"
                          )
                        ) {
                          e.target.style.fill = s;
                          var n = e.target.closest("svg").outerHTML;
                          u({
                            type: "ADD_COLORING_TO_STATE",
                            coloring: n,
                            name: t,
                          });
                        }
                      },
                      ref: d,
                      "data-name": t,
                      id: "my-svg",
                      className: "SVG",
                      "data-src": "".concat(p.current),
                      width: "85%",
                      height: "85%",
                    }),
                    Object(C.jsx)("p", { className: "SVG-text", children: r }),
                  ],
                }),
              })
            : null;
        },
        M = [
          "An elephant taking a shower",
          "Oh, the Places You'll Go!",
          "Mickey and Pluto at the beach",
          "The octopus from Finding Dory",
          "Oh, the Places You'll Go!",
          "Oh, the Places You'll Go!",
        ],
        T = [
          "",
          "It was a beautiful, sunny day at the Peppa pig house.",
          "'Good morning, George', Peppa said. 'Oink, Oink!', replied George. 'I can't wait to go outside and play!', said Peppa.",
          "Mommy pig has just finished making breakfast. She yelled up to her piglets, 'Peppa! George! Time for breakfast!' ",
          "While daddy pig reads the morning newspaper. 'Mmm, something smells good.'",
          "After breakfast, it was finally time to play. 'Oh no, it's raining...', she said.",
          "Good thing Peppa and George LOVE jumping up and down in muddy puddles!",
          "Oh my goodness! Wow! So much mud!. Splish, Splash, Splosh, Splish, Splash. The End.",
        ],
        W = ["", "", "", ""];
      function q(e) {
        if ("Random" === e) {
          for (
            var t = n(439),
              a = t.keys().map(function (e) {
                return { path: e, file: t(e) };
              }),
              s = [],
              c = 0;
            c < a.length;
            c++
          ) {
            var r = (c + 1) % 2 !== 0 ? "left" : "right";
            s.push({ path: a[c].path, text: M[c], className: r });
          }
          return s;
        }
        if ("Peppa" === e) {
          for (
            var o = n(440),
              i = o.keys().map(function (e) {
                return { path: e, file: o(e) };
              }),
              l = [],
              u = 0;
            u < i.length;
            u++
          ) {
            var d = (u + 1) % 2 !== 0 ? "left" : "right";
            l.push({ path: i[u].path, text: T[u], className: d });
          }
          return l;
        }
        if ("goodnightMoon" === e) {
          for (
            var j = n(441),
              b = j.keys().map(function (e) {
                return { path: e, file: j(e) };
              }),
              p = [],
              f = 0;
            f < b.length;
            f++
          ) {
            var h = (f + 1) % 2 !== 0 ? "left" : "right";
            p.push({ path: b[f].path, text: W[f], className: h });
          }
          return p;
        }
      }
      var Y = function (e) {
          var t = e.currentColor,
            n = e.bookName,
            s = e.notify,
            c = Object(a.useRef)(),
            r = Object(i.c)(function (e) {
              return e.userReducer.user;
            }),
            l = Object(i.c)(function (e) {
              return e.userReducer.id;
            }),
            u = Object(i.c)(function (e) {
              return e.coloringReducer;
            }),
            d = Object(a.useRef)(),
            p = Object(a.useState)(!0),
            f = Object(o.a)(p, 2),
            h = f[0],
            g = f[1],
            x = (function () {
              var e = Object(b.a)(
                j.a.mark(function e() {
                  var t;
                  return j.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          Object.keys(u).length ||
                            alert("Color something first!"),
                            (t = Object.keys(u)),
                            t.forEach(
                              (function () {
                                var e = Object(b.a)(
                                  j.a.mark(function e(t) {
                                    var a, c, r;
                                    return j.a.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (a = u[t]),
                                              (c = n),
                                              (e.next = 4),
                                              Object(k.d)(c, a, l)
                                            );
                                          case 4:
                                            return (
                                              (r = e.sent),
                                              s(),
                                              e.abrupt("return", r)
                                            );
                                          case 7:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(a.useEffect)(
              function () {
                var e = (function () {
                  var e = Object(b.a)(
                    j.a.mark(function e() {
                      var t;
                      return j.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return g(!0), (e.next = 3), q(n);
                            case 3:
                              (t = e.sent), (d.current = t), g(!1);
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
                e();
              },
              [n]
            ),
            h
              ? Object(C.jsx)("h1", { children: "Loading" })
              : Object(C.jsxs)(C.Fragment, {
                  children: [
                    Object(C.jsxs)(m.a, {
                      className: "flipbook-container",
                      sx: { paddingTop: "5rem" },
                      children: [
                        Object(C.jsx)(v.a, {
                          variant: "contained",
                          sx: { margin: "1rem 2rem 1rem 0", padding: "1rem" },
                          onClick: function () {
                            return c.current.pageFlip().flipPrev();
                          },
                          children: "Prev Page",
                        }),
                        Object(C.jsx)(v.a, {
                          variant: "contained",
                          sx: { margin: "1rem 2rem 1rem 0", padding: "1rem" },
                          onClick: function () {
                            return c.current.pageFlip().flipNext();
                          },
                          children: "Next Page",
                        }),
                        Object(C.jsx)(G.a, {
                          className: "flipbook",
                          style: { margin: "auto" },
                          ref: c,
                          useMouseEvents: !1,
                          maxShadowOpacity: 0.5,
                          height: 150,
                          width: 150,
                          size: "stretch",
                          children: d.current.map(function (e) {
                            return Object(C.jsx)(
                              m.a,
                              {
                                "data-density": "soft",
                                children: Object(C.jsx)(E, {
                                  text: e.text,
                                  pageClass: e.className,
                                  bookName: n,
                                  name: e.path.slice(2).slice(0, -4),
                                  currentColor: t,
                                }),
                              },
                              e.path
                            );
                          }),
                        }),
                      ],
                    }),
                    Object(C.jsx)(m.a, {
                      className: "SVG-mobile-view",
                      children: d.current.map(function (e) {
                        return Object(C.jsx)(
                          m.a,
                          {
                            "data-density": "soft",
                            children: Object(C.jsx)(E, {
                              text: e.text,
                              pageClass: e.className,
                              bookName: n,
                              name: e.path.slice(2).slice(0, -4),
                              currentColor: t,
                            }),
                          },
                          e.path
                        );
                      }),
                    }),
                    Object(C.jsx)(m.a, {
                      className: "SVG-save",
                      children: r
                        ? Object(C.jsx)(v.a, {
                            onClick: x,
                            sx: { marginTop: "4rem" },
                            variant: "contained",
                            children: "Save Book",
                          })
                        : null,
                    }),
                  ],
                })
          );
        },
        Q = n(494),
        I = n(495),
        V = n(490),
        D = n(493),
        R = n(506);
      function z(e) {
        var t = e.book,
          n = e.setBook,
          a = e.availableBooks;
        return Object(C.jsx)("div", {
          children: Object(C.jsxs)(Q.a, {
            sx: { m: 1, width: "20rem" },
            children: [
              Object(C.jsx)(I.a, { id: "book-label", children: "Book" }),
              Object(C.jsx)(V.a, {
                labelId: "book-label",
                id: "book",
                value: t,
                label: "Book",
                onChange: function (e) {
                  console.log(e.target.value), n(e.target.value);
                },
                children: a.map(function (e) {
                  return Object(C.jsx)(D.a, { value: e, children: e }, e);
                }),
              }),
              Object(C.jsx)(R.a, { children: "Choose a Book" }),
            ],
          }),
        });
      }
      function F(e) {
        var t = e.notify,
          n = Object(a.useState)("white"),
          s = Object(o.a)(n, 2),
          c = s[0],
          r = s[1],
          i = Object(a.useState)("Peppa"),
          l = Object(o.a)(i, 2),
          u = l[0],
          d = l[1];
        return Object(C.jsxs)(m.a, {
          sx: { height: "100vh", paddingTop: "5rem", textAlign: "center" },
          className: "ColoringPage",
          children: [
            Object(C.jsxs)(m.a, {
              sx: { width: "100%" },
              children: [
                Object(C.jsx)(m.a, {
                  sx: { margin: "auto" },
                  children: Object(C.jsx)(z, {
                    setBook: d,
                    book: u,
                    handlePictureChange: function (e) {
                      d(e.target.value);
                    },
                    availableBooks: ["Random", "Peppa", "goodnightMoon"],
                  }),
                }),
                Object(C.jsxs)(S.a, {
                  elevation: 5,
                  className: "ColoringPage-color-picker",
                  sx: { backgroundColor: "rgba(190, 164, 164, 0.8)" },
                  children: [
                    Object(C.jsx)(A.a, {
                      width: "100%",
                      className: "ColoringPage-sketch",
                      direction: "horizontal",
                      circleSize: 50,
                      colors: [
                        "#f44336",
                        "#e91e63",
                        "#FFC0CB",
                        "#9c27b0",
                        "#673ab7",
                        "#3f51b5",
                        "#2196f3",
                        "#03a9f4",
                        "#00bcd4",
                        "#009688",
                        "#4caf50",
                        "#8bc34a",
                        "#cddc39",
                        "#ffeb3b",
                        "#ffc107",
                        "#ff9800",
                        "#ff5722",
                        "#735548",
                        "#607db8",
                        "#222222",
                        "#808080",
                        "#FFFFFF",
                      ],
                      color: c,
                      onChangeComplete: function (e) {
                        r(e.hex);
                      },
                    }),
                    Object(C.jsx)(g.a, {
                      className: "ColoringPage-text",
                      children: "Choose a Color",
                    }),
                  ],
                }),
              ],
            }),
            Object(C.jsx)(m.a, {
              className: "ColoringPage-book-container",
              children: Object(C.jsx)(Y, {
                bookName: u,
                currentColor: c,
                notify: t,
              }),
            }),
          ],
        });
      }
      n(442);
      var J = n.p + "static/media/MattDillon.45759438.jpg",
        U = n.p + "static/media/WillSanders.7c4324b2.jpg",
        X = n.p + "static/media/JohnQuattrocchi.5a6bb894.png",
        B = (n.p, n.p + "static/media/StoryPaint2.693eb22e.png");
      function H() {
        var e = Object(P.f)();
        return Object(C.jsxs)(m.a, {
          className: "LandingPage",
          sx: { paddingTop: "10rem" },
          children: [
            Object(C.jsxs)("div", {
              class: "container-fluid",
              children: [
                Object(C.jsx)("div", {
                  class: "d-flex justify-content-center LandingPage-logo",
                  children: Object(C.jsx)("img", {
                    id: "title",
                    src: B,
                    alt: "",
                  }),
                }),
                Object(C.jsx)("div", { class: "row" }),
              ],
            }),
            Object(C.jsxs)("div", {
              class: "container",
              children: [
                Object(C.jsxs)("div", {
                  class: "row",
                  children: [
                    Object(C.jsx)("div", { class: "col col-2" }),
                    Object(C.jsxs)("div", {
                      class: "col col-8",
                      children: [
                        Object(C.jsx)("h2", {
                          class: "text-center",
                          children: "Paint a coloring book with a story",
                        }),
                        Object(C.jsx)("p", {
                          class: "fw-light fs-4 text-center",
                          children:
                            "Create an account to save all your progress and pick up where you left off next time. Otherwise, continue as a guest, where you can still download your book.",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(C.jsx)("div", {
                  class: "row d-flex justify-content-center",
                  children: Object(C.jsxs)("div", {
                    class:
                      "col-lg-6 col-md-8 col-sm-10 m-1 bg-dark bg-opacity-75 text-white text-center p-5",
                    children: [
                      Object(C.jsx)("h2", {
                        class: "mb-4 text-white text-center",
                        children: "Create an Account",
                      }),
                      Object(C.jsx)("div", {
                        class: "row",
                        children: Object(C.jsxs)("div", {
                          class: "input-group input-group-sm mb-3",
                          children: [
                            Object(C.jsx)("span", {
                              class: "input-group-text",
                              children: "Username",
                            }),
                            Object(C.jsx)("input", {
                              type: "text",
                              class: "form-control",
                              placeholder: "Username",
                            }),
                          ],
                        }),
                      }),
                      Object(C.jsx)("div", {
                        class: "row",
                        children: Object(C.jsxs)("div", {
                          class: "input-group input-group-sm mb-3",
                          children: [
                            Object(C.jsx)("span", {
                              class: "input-group-text",
                              children: "Password",
                            }),
                            Object(C.jsx)("input", {
                              type: "text",
                              required: !0,
                              class: "form-control",
                              placeholder: "Password",
                            }),
                          ],
                        }),
                      }),
                      Object(C.jsxs)("span", {
                        children: [
                          Object(C.jsx)("button", {
                            onClick: function () {
                              e("/login");
                            },
                            class: "btn btn-secondary m-md-3 m-sm-2 m-3",
                            children: "Create Account",
                          }),
                          Object(C.jsx)("button", {
                            onClick: function () {
                              e("/color");
                            },
                            class: "btn btn-secondary m-md-3 m-sm-2 m-3",
                            children: "Continue as Guest",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            Object(C.jsxs)("div", {
              class: "container",
              children: [
                Object(C.jsx)("h2", {
                  class: "display-5 fw-bold text-center pt-3 pb-2",
                  children: "Developers",
                }),
                Object(C.jsxs)("div", {
                  class: "row",
                  children: [
                    Object(C.jsx)("div", {
                      class: "col col-xl-4 col-lg-3 col-0",
                    }),
                    Object(C.jsx)("div", {
                      class: "col col-xl-4 col-lg-6 col-md-8 col-sm-10 col-12",
                      children: Object(C.jsxs)("div", {
                        id: "carouselDevelopers",
                        class: "carousel slide p-5 bg-light bg-opacity-50",
                        "data-bs-ride": "carousel",
                        children: [
                          Object(C.jsxs)("div", {
                            class: "carousel-inner",
                            children: [
                              Object(C.jsxs)("div", {
                                class: "carousel-item active",
                                children: [
                                  Object(C.jsx)("h4", {
                                    class: "text-center",
                                    children: "Matt Dillon",
                                  }),
                                  Object(C.jsx)("div", {
                                    class: "d-flex justify-content-center",
                                    children: Object(C.jsx)("img", {
                                      src: J,
                                      class: "img-thumbnail mb-3",
                                      alt: "Missing",
                                    }),
                                  }),
                                  Object(C.jsx)("h5", {
                                    class: " text-center",
                                    children: "Full Stack Developer",
                                  }),
                                  Object(C.jsx)("p", {
                                    class: "lead text-center fs-6",
                                    children:
                                      "Matt likes long walks on the beach and a glass of warm milk before bed. He also is a leo and has a passion for passion fruit.",
                                  }),
                                  Object(C.jsxs)("span", {
                                    class: "d-flex justify-content-center",
                                    children: [
                                      Object(C.jsx)("a", {
                                        class: "me-3",
                                        href: "https://www.linkedin.com/in/coderdill/",
                                        children: Object(C.jsx)("i", {
                                          class: "fab fa-linkedin fa-2x",
                                        }),
                                      }),
                                      Object(C.jsx)("a", {
                                        class: "me-3",
                                        href: "https://twitter.com/CoderDill",
                                        children: Object(C.jsx)("i", {
                                          class: "fab fa-twitter fa-2x",
                                        }),
                                      }),
                                      Object(C.jsx)("a", {
                                        href: "https://github.com/coderdill",
                                        class: "me-3",
                                        children: Object(C.jsx)("i", {
                                          class: "fab fa-github fa-2x",
                                        }),
                                      }),
                                      Object(C.jsx)("a", {
                                        href: "https://www.facebook.com/coderdill",
                                        children: Object(C.jsx)("i", {
                                          class: "fab fa-facebook fa-2x",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(C.jsxs)("div", {
                                class: "carousel-item",
                                children: [
                                  Object(C.jsx)("h4", {
                                    class: "text-center",
                                    children: "Will Sanders",
                                  }),
                                  Object(C.jsx)("div", {
                                    class: "d-flex justify-content-center",
                                    children: Object(C.jsx)("img", {
                                      src: U,
                                      class: "img-thumbnail mb-3",
                                      alt: "will-sanders",
                                    }),
                                  }),
                                  Object(C.jsx)("h5", {
                                    class: "text-center",
                                    children: "Full Stack Developer",
                                  }),
                                  Object(C.jsx)("p", {
                                    class: "lead text-center fs-6",
                                    children:
                                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quae nulla nostrum labore veritatis, nesciunt velit inventore earum rem! Porro.",
                                  }),
                                  Object(C.jsxs)("span", {
                                    class: "d-flex justify-content-center",
                                    children: [
                                      Object(C.jsx)("a", {
                                        class: "me-3",
                                        href: "https://www.linkedin.com/in/williamsanders81/",
                                        children: Object(C.jsx)("i", {
                                          class: "fab fa-linkedin fa-2x",
                                        }),
                                      }),
                                      Object(C.jsx)("a", {
                                        class: "me-3",
                                        href: "www.google.com",
                                        children: Object(C.jsx)("i", {
                                          class: "fab fa-twitter fa-2x",
                                        }),
                                      }),
                                      Object(C.jsx)("a", {
                                        href: "https://github.com/Wsanders81",
                                        class: "me-3",
                                        children: Object(C.jsx)("i", {
                                          class: "fab fa-github fa-2x",
                                        }),
                                      }),
                                      Object(C.jsx)("a", {
                                        href: "www.google.com",
                                        children: Object(C.jsx)("i", {
                                          class: "fab fa-facebook fa-2x",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(C.jsxs)("div", {
                                class: "carousel-item",
                                children: [
                                  Object(C.jsx)("h4", {
                                    class: "text-center",
                                    children: "John Quattrocchi Jr.",
                                  }),
                                  Object(C.jsx)("div", {
                                    class: "d-flex justify-content-center",
                                    children: Object(C.jsx)("img", {
                                      src: X,
                                      class: "img-thumbnail mb-3",
                                      alt: "john-quattrochi",
                                    }),
                                  }),
                                  Object(C.jsx)("h5", {
                                    class: "text-center",
                                    children: "UX/UI Designer",
                                  }),
                                  Object(C.jsx)("p", {
                                    class: "lead text-center fs-6",
                                    children:
                                      "John began his coding journey in early 2021 upon joining a Springboard program. He has a background in the poker and casino industry. Throughout his career he has had the opportunity to hone his large scale project and event management skills. John has a genuine and life-long interest in advancing technologies (and gaming in his spare time).",
                                  }),
                                  Object(C.jsxs)("span", {
                                    class: "d-flex justify-content-center",
                                    children: [
                                      Object(C.jsx)("a", {
                                        class: "me-3",
                                        href: "https://www.linkedin.com/in/coderdill/",
                                        children: Object(C.jsx)("i", {
                                          class: "fab fa-linkedin fa-2x",
                                        }),
                                      }),
                                      Object(C.jsx)("a", {
                                        class: "me-3",
                                        href: "https://www.twitter.com/johnqtd",
                                        children: Object(C.jsx)("i", {
                                          class: "fab fa-twitter fa-2x",
                                        }),
                                      }),
                                      Object(C.jsx)("a", {
                                        href: "https://github.com/coderdill",
                                        class: "me-3",
                                        children: Object(C.jsx)("i", {
                                          class: "fab fa-github fa-2x",
                                        }),
                                      }),
                                      Object(C.jsx)("a", {
                                        href: "https://facebook.com/gotacrotchy",
                                        children: Object(C.jsx)("i", {
                                          class: "fab fa-facebook fa-2x",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(C.jsxs)("button", {
                            class: "carousel-control-prev",
                            type: "button",
                            "data-bs-target": "#carouselDevelopers",
                            "data-bs-slide": "prev",
                            children: [
                              Object(C.jsx)("span", {
                                class: "carousel-control-prev-icon",
                                "aria-hidden": "true",
                              }),
                              Object(C.jsx)("span", {
                                class: "visually-hidden",
                                children: "Previous",
                              }),
                            ],
                          }),
                          Object(C.jsxs)("button", {
                            class: "carousel-control-next",
                            type: "button",
                            "data-bs-target": "#carouselDevelopers",
                            "data-bs-slide": "next",
                            children: [
                              Object(C.jsx)("span", {
                                class: "carousel-control-next-icon",
                                "aria-hidden": "true",
                              }),
                              Object(C.jsx)("span", {
                                class: "visually-hidden",
                                children: "Next",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(C.jsx)("div", { class: "col col-lg-3 col-0" }),
                  ],
                }),
              ],
            }),
            Object(C.jsx)("div", {
              class: "container bg-light bg-opacity-50 pb-4",
              children: Object(C.jsxs)("div", {
                class: "row",
                children: [
                  Object(C.jsx)("h4", {
                    class: "text-center",
                    children: "This App Brought to You By:",
                  }),
                  Object(C.jsx)("div", { class: "col-2" }),
                  Object(C.jsxs)("div", {
                    class: "col-4 text-center",
                    children: [
                      Object(C.jsx)("div", {
                        class: "fs-5 fw-bold",
                        children: "Front End",
                      }),
                      Object(C.jsx)("li", {
                        children: Object(C.jsxs)("span", {
                          children: [
                            Object(C.jsx)("i", { class: "fab fa-react" }),
                            " React.js",
                          ],
                        }),
                      }),
                      Object(C.jsx)("li", { children: "Material.Ui" }),
                      Object(C.jsx)("li", {
                        children: Object(C.jsxs)("span", {
                          children: [
                            Object(C.jsx)("i", { class: "fab fa-bootstrap" }),
                            " Bootstrap",
                          ],
                        }),
                      }),
                      Object(C.jsx)("li", { children: "JQuery" }),
                    ],
                  }),
                  Object(C.jsxs)("div", {
                    class: "col-4 text-center",
                    children: [
                      Object(C.jsx)("div", {
                        class: "fs-5 fw-bold",
                        children: "Back End",
                      }),
                      Object(C.jsx)("li", {
                        children: Object(C.jsxs)("span", {
                          children: [
                            Object(C.jsx)("i", { class: "fab fa-node" }),
                            " Node.js",
                          ],
                        }),
                      }),
                      Object(C.jsxs)("li", {
                        children: [
                          Object(C.jsx)("img", {
                            id: "express",
                            src: "data:image/png;base64,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s2TJEtavX4+quv7HERwczMCBA3n88cfLfc8vvviCL774gqSkpHKd169fP4YNG0a9evXKPDZ3+2Plfi7XKJB7EWqE4dFxPlg8jFfUpH9jPzYTPGuDzQctLwuupGAJeRRr06dQfILzp+SU4to58g5NQLu4F7wa/DE5uiJsNfC4bXnFzy/ukm69WgmOHTvGG2+8QXx8PACenp706NGDDh06EBoaavyRXrhwgRMnTvDzzz+zb98+4uLieOONN/j555959913iy3FWK1WJk2axLlz5/jll1+IiYlh0aJFvPTSSxV+3l27dhlh1bFjRyZPnlzkGEcprnbt2k5f//rrr5kyZYrx/3vuuYdOnToRFhaGv78/mqaRk5NDQkICBw4cYPPmzVy8eJHPPvuMTZs2MXHiRDp16lTmMxYMz8Iht3z5cpYsWUJ2drbTMQ0aNEBVVfz9/YtcLz09nfHjx7Nnzx7ja127duX2228nLCyMgIAAAC5fvkxcXBy7du1iy5YtnD17ltmzZ7NlyxamTZtWrpLi5s2b+fvf/26UPP39/enWrRsREREEBwc7/WxTUlKIi4tj+/btxMTEkJyczLRp09i9ezfvvfeeS/ez2+2MGDGCnTt3Gl+LiIigS5cuNG3alJCQEKPUdvnyZRITE4mJiWHLli1kZmYSHR3Nli1b+OCDD7jllltc/j6vPwXUPBSbH5pvCGryN2gXf8NS9y4sdbqCd0N9IGlxpS6vulhbjSdv3xjITQePgOv/+KWo8hLWrl27GDFihFGl6N+/P8888wz169cv9bw9e/Ywb948YmJiAGjXrh3Lli0rNrQArly5wv3338+lS5cAWLZsGTfffHO5nzc7O5tevXqRnZ2Nr68v69evp0aNGkWOW7VqFdOnT6d27dp899132Gw2VqxYwaxZswD903jQoEFlViMuXbrEihUrWLJkifG16dOn06NHj1LPS0tLo3fv3miaxpQpU+jduzd2u51Ro0axbds2AEJCQnjwwQfp3LkzzZo1M0JHVVWnn+Pp06d58cUXOXfuHKCXKAcNGkTz5s1LfYYTJ06waNEifvzxR0AvbUVFRZX53gIcPHiQgQMHGv8fPHgw/fv3p1atskdk7927l4ULFxrheu+997oUWi+++CK//voroH8QDRs2rMSSZkEXLlxg5cqVLF26FNCr9KtXr6Zp06YlnuPeEpbC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",
                            alt: "",
                          }),
                          "Express.js",
                        ],
                      }),
                      Object(C.jsx)("li", { children: "Node-postgres" }),
                    ],
                  }),
                ],
              }),
            }),
            Object(C.jsx)("script", {
              src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
              integrity:
                "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p",
              crossorigin: "anonymous",
            }),
          ],
        });
      }
      var Z = n(251);
      function K() {
        return Object(C.jsx)(m.a, {
          className: "MyPictures-container",
          children: Object(C.jsx)(Z.a, {}),
        });
      }
      function _(e) {
        var t = e.notify;
        return Object(C.jsxs)(P.c, {
          children: [
            Object(C.jsx)(P.a, {
              path: "*",
              element: Object(C.jsx)("h1", { children: "NOT FOUND" }),
            }),
            Object(C.jsx)(P.a, { path: "/", element: Object(C.jsx)(H, {}) }),
            Object(C.jsx)(P.a, {
              path: "/color",
              element: Object(C.jsx)(F, { notify: t }),
            }),
            Object(C.jsx)(P.a, {
              path: "/my-pictures",
              element: Object(C.jsx)(K, {}),
            }),
          ],
        });
      }
      n(448);
      var $ = n(507),
        ee = n(508),
        te = n.p + "static/media/StoryPaint2.693eb22e.png";
      function ne(e) {
        var t = e.toggleLogin,
          n = e.toggleRegister,
          a = e.notify,
          s = Object(P.f)(),
          c = Object(i.b)(),
          r = Object(i.c)(function (e) {
            return e.userReducer.user;
          }),
          o = Object(C.jsxs)(m.a, {
            sx: { display: "flex", justifyContent: "flex-end", flexGrow: 1 },
            children: [
              Object(C.jsx)(g.a, {
                onClick: t,
                sx: { marginRight: "1rem" },
                className: "Navbar-link",
                children: "Login",
              }),
              Object(C.jsx)(g.a, {
                onClick: n,
                className: "Navbar-link",
                children: "Register",
              }),
            ],
          }),
          l = Object(C.jsxs)(m.a, {
            sx: { display: "flex", justifyContent: "flex-end", flexGrow: 1 },
            children: [
              Object(C.jsx)(g.a, {
                onClick: function () {
                  c({ type: "LOGOUT" }), a(), s("/");
                },
                sx: { marginRight: "1rem" },
                className: "Navbar-link",
                children: "Logout",
              }),
              Object(C.jsx)(g.a, {
                className: "Navbar-link",
                sx: { marginRight: "1rem" },
                onClick: function () {
                  return s("/color");
                },
                children: "Coloring Page",
              }),
              Object(C.jsx)(g.a, {
                onClick: function () {
                  return s("/my-pictures");
                },
                className: "Navbar-link",
                children: "My Pictures",
              }),
            ],
          });
        return Object(C.jsx)(m.a, {
          sx: { flexGrow: 1, width: "100%" },
          children: Object(C.jsx)($.a, {
            className: "Navbar",
            position: "fixed",
            children: Object(C.jsxs)(ee.a, {
              children: [
                Object(C.jsx)(g.a, {
                  className: "Navbar-link",
                  onClick: function () {
                    return s("/");
                  },
                  align: "left",
                  variant: "h6",
                  component: "div",
                  children: Object(C.jsx)("img", {
                    alt: "logo",
                    className: "Navbar-logo",
                    src: te,
                  }),
                }),
                r ? l : o,
              ],
            }),
          }),
        });
      }
      var ae = function () {
          var e = Object(a.useState)(!1),
            t = Object(o.a)(e, 2),
            n = t[0],
            s = t[1],
            c = Object(a.useState)(!1),
            r = Object(o.a)(c, 2),
            d = r[0],
            j = r[1],
            b = Object(i.b)(),
            p = window.localStorage.getItem("user") || null,
            f = window.localStorage.getItem("id") || null;
          p && f && b({ type: "GET_USER", username: p, id: f });
          var h = function () {
              s(function (e) {
                return !e;
              });
            },
            g = function () {
              j(function (e) {
                return !e;
              });
            };
          return Object(C.jsxs)("div", {
            className: "App",
            children: [
              Object(C.jsx)(u.a, {}),
              Object(C.jsx)(ne, {
                toggleLogin: h,
                toggleRegister: g,
                notify: function () {
                  return u.b.success("You have successfully logged out", {
                    position: u.b.POSITION.TOP_CENTER,
                  });
                },
              }),
              Object(C.jsx)(l.a, {
                className: "App-modal",
                open: n,
                onClose: h,
                children: Object(C.jsx)("div", {
                  children: Object(C.jsx)(y, {
                    toggle: h,
                    notify: function (e) {
                      return u.b.success("Welcome Back, ".concat(e, "!"), {
                        position: u.b.POSITION.TOP_CENTER,
                      });
                    },
                  }),
                }),
              }),
              Object(C.jsx)(l.a, {
                className: "App-modal",
                open: d,
                onClose: g,
                children: Object(C.jsx)("div", {
                  children: Object(C.jsx)(N, {
                    toggle: g,
                    notify: function (e) {
                      return u.b.success("Welcome, ".concat(e, "!"));
                    },
                  }),
                }),
              }),
              Object(C.jsx)(_, {
                notify: function () {
                  return u.b.success("Your pictures have been saved!");
                },
              }),
            ],
          });
        },
        se = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 510))
              .then(function (t) {
                var n = t.getCLS,
                  a = t.getFID,
                  s = t.getFCP,
                  c = t.getLCP,
                  r = t.getTTFB;
                n(e), a(e), s(e), c(e), r(e);
              });
        },
        ce = n(82),
        re = n(96),
        oe = n(253),
        ie = n(252),
        le = n(71),
        ue = n(69);
      var de = n(6);
      var je = Object(re.combineReducers)({
          userReducer: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ue.b:
                return (
                  window.localStorage.setItem("user", t.username),
                  window.localStorage.setItem("id", t.id),
                  Object(le.a)(
                    Object(le.a)({}, e),
                    {},
                    { user: t.username, id: t.id }
                  )
                );
              case ue.c:
                return (
                  window.localStorage.removeItem("user"),
                  window.localStorage.removeItem("id"),
                  Object(le.a)(
                    Object(le.a)({}, e),
                    {},
                    { user: null, id: null }
                  )
                );
              default:
                return e;
            }
          },
          coloringReducer: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ue.a:
                return (
                  window.localStorage.setItem(t.name, t.coloring),
                  Object(le.a)(
                    Object(le.a)({}, e),
                    {},
                    Object(de.a)({}, t.name, t.coloring)
                  )
                );
              case ue.c:
                return {};
              default:
                return e;
            }
          },
        }),
        be = je,
        pe = Object(re.createStore)(
          be,
          Object(ie.composeWithDevTools)(Object(re.applyMiddleware)(oe.a))
        );
      r.a.render(
        Object(C.jsx)(s.a.StrictMode, {
          children: Object(C.jsx)(i.a, {
            store: pe,
            children: Object(C.jsx)(ce.a, { children: Object(C.jsx)(ae, {}) }),
          }),
        }),
        document.getElementById("root")
      ),
        se();
    },
    58: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return d;
      }),
        n.d(t, "e", function () {
          return j;
        }),
        n.d(t, "d", function () {
          return b;
        }),
        n.d(t, "b", function () {
          return f;
        }),
        n.d(t, "a", function () {
          return g;
        });
      var a = n(17),
        s = n.n(a),
        c = n(26),
        r = n(103),
        o = n.n(r),
        i = n(69),
        l = "https://storypaint.herokuapp.com";
      function u(e, t) {
        return { type: i.b, username: e, id: t };
      }
      function d(e) {
        return (function () {
          var t = Object(c.a)(
            s.a.mark(function t(n) {
              var a;
              return s.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        o()({
                          method: "post",
                          url: "".concat(l, "/users/login"),
                          data: {
                            username: "".concat(e.username),
                            password: "".concat(e.password),
                          },
                        })
                      );
                    case 2:
                      return (
                        (a = t.sent),
                        console.log(a),
                        t.abrupt("return", n(u(a.data.username, a.data.id)))
                      );
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function j(e) {
        return (function () {
          var t = Object(c.a)(
            s.a.mark(function t(n) {
              var a;
              return s.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        o()({
                          method: "post",
                          url: "".concat(l, "/users"),
                          data: { username: e.username, password: e.password },
                        })
                      );
                    case 2:
                      return (
                        (a = t.sent),
                        t.abrupt("return", n(u(a.data.username, a.data.id)))
                      );
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function b(e, t, n) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = Object(c.a)(
          s.a.mark(function e(t, n, a) {
            var c;
            return s.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      o()({
                        method: "post",
                        url: "".concat(l, "/colorings"),
                        data: { name: t, image: n, user_id: a },
                      })
                    );
                  case 2:
                    return (c = e.sent), e.abrupt("return", c.data);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function f(e) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = Object(c.a)(
          s.a.mark(function e(t) {
            var n;
            return s.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      o()({
                        method: "get",
                        url: "".concat(l, "/colorings/").concat(t),
                      })
                    );
                  case 2:
                    return (n = e.sent), e.abrupt("return", n.data);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function g(e) {
        return x.apply(this, arguments);
      }
      function x() {
        return (x = Object(c.a)(
          s.a.mark(function e(t) {
            var n;
            return s.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      o()({
                        method: "delete",
                        url: "".concat(l, "/colorings/").concat(t),
                      })
                    );
                  case 2:
                    return (n = e.sent), e.abrupt("return", n);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    69: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "c", function () {
          return s;
        }),
        n.d(t, "a", function () {
          return c;
        });
      var a = "GET_USER",
        s = "LOGOUT",
        c = "ADD_COLORING_TO_STATE";
    },
  },
  [[449, 1, 2]],
]);
//# sourceMappingURL=main.79b518b7.chunk.js.map
