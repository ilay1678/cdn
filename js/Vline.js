! function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define
		.amd ? define("Valine", [], t) : "object" == typeof exports ? exports.Valine = t() : e.Valine = t()
}(this, function() {
	return function(e) {
		function t(r) {
			if (n[r]) return n[r].exports;
			var i = n[r] = {
				i: r,
				l: !1,
				exports: {}
			};
			return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
		}
		var n = {};
		return t.m = e, t.c = n, t.i = function(e) {
			return e
		}, t.d = function(e, n, r) {
			t.o(e, n) || Object.defineProperty(e, n, {
				configurable: !1,
				enumerable: !0,
				get: r
			})
		}, t.n = function(e) {
			var n = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return t.d(n, "a", n), n
		}, t.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, t.p = "/dist/", t(t.s = 11)
	}([function(e, t, n) {
		function r(e, t) {
			return new o(t).process(e)
		}
		var i = n(2),
			o = n(14);
		t = e.exports = r, t.FilterCSS = o;
		for (var a in i) t[a] = i[a];
		"undefined" != typeof window && (window.filterCSS = e.exports)
	}, function(e, t) {
		e.exports = {
			indexOf: function(e, t) {
				var n, r;
				if (Array.prototype.indexOf) return e.indexOf(t);
				for (n = 0, r = e.length; n < r; n++)
					if (e[n] === t) return n;
				return -1
			},
			forEach: function(e, t, n) {
				var r, i;
				if (Array.prototype.forEach) return e.forEach(t, n);
				for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e)
			},
			trim: function(e) {
				return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
			},
			spaceIndex: function(e) {
				var t = /\s|\n|\t/,
					n = t.exec(e);
				return n ? n.index : -1
			}
		}
	}, function(e, t) {
		function n() {
			var e = {};
			return e["align-content"] = !1, e["align-items"] = !1, e["align-self"] = !1, e["alignment-adjust"] = !1, e[
					"alignment-baseline"] = !1, e.all = !1, e["anchor-point"] = !1, e.animation = !1, e["animation-delay"] = !1, e[
					"animation-direction"] = !1, e["animation-duration"] = !1, e["animation-fill-mode"] = !1, e[
					"animation-iteration-count"] = !1, e["animation-name"] = !1, e["animation-play-state"] = !1, e[
					"animation-timing-function"] = !1, e.azimuth = !1, e["backface-visibility"] = !1, e.background = !0, e[
					"background-attachment"] = !0, e["background-clip"] = !0, e["background-color"] = !0, e["background-image"] = !
				0, e["background-origin"] = !0, e["background-position"] = !0, e["background-repeat"] = !0, e["background-size"] = !
				0, e["baseline-shift"] = !1, e.binding = !1, e.bleed = !1, e["bookmark-label"] = !1, e["bookmark-level"] = !1,
				e["bookmark-state"] = !1, e.border = !0, e["border-bottom"] = !0, e["border-bottom-color"] = !0, e[
					"border-bottom-left-radius"] = !0, e["border-bottom-right-radius"] = !0, e["border-bottom-style"] = !0, e[
					"border-bottom-width"] = !0, e["border-collapse"] = !0, e["border-color"] = !0, e["border-image"] = !0, e[
					"border-image-outset"] = !0, e["border-image-repeat"] = !0, e["border-image-slice"] = !0, e[
					"border-image-source"] = !0, e["border-image-width"] = !0, e["border-left"] = !0, e["border-left-color"] = !0,
				e["border-left-style"] = !0, e["border-left-width"] = !0, e["border-radius"] = !0, e["border-right"] = !0, e[
					"border-right-color"] = !0, e["border-right-style"] = !0, e["border-right-width"] = !0, e["border-spacing"] = !
				0, e["border-style"] = !0, e["border-top"] = !0, e["border-top-color"] = !0, e["border-top-left-radius"] = !0,
				e["border-top-right-radius"] = !0, e["border-top-style"] = !0, e["border-top-width"] = !0, e["border-width"] = !
				0, e.bottom = !1, e["box-decoration-break"] = !0, e["box-shadow"] = !0, e["box-sizing"] = !0, e["box-snap"] = !
				0, e["box-suppress"] = !0, e["break-after"] = !0, e["break-before"] = !0, e["break-inside"] = !0, e[
					"caption-side"] = !1, e.chains = !1, e.clear = !0, e.clip = !1, e["clip-path"] = !1, e["clip-rule"] = !1, e.color = !
				0, e["color-interpolation-filters"] = !0, e["column-count"] = !1, e["column-fill"] = !1, e["column-gap"] = !1,
				e["column-rule"] = !1, e["column-rule-color"] = !1, e["column-rule-style"] = !1, e["column-rule-width"] = !1, e[
					"column-span"] = !1, e["column-width"] = !1, e.columns = !1, e.contain = !1, e.content = !1, e[
					"counter-increment"] = !1, e["counter-reset"] = !1, e["counter-set"] = !1, e.crop = !1, e.cue = !1, e[
					"cue-after"] = !1, e["cue-before"] = !1, e.cursor = !1, e.direction = !1, e.display = !0, e["display-inside"] = !
				0, e["display-list"] = !0, e["display-outside"] = !0, e["dominant-baseline"] = !1, e.elevation = !1, e[
					"empty-cells"] = !1, e.filter = !1, e.flex = !1, e["flex-basis"] = !1, e["flex-direction"] = !1, e["flex-flow"] = !
				1, e["flex-grow"] = !1, e["flex-shrink"] = !1, e["flex-wrap"] = !1, e.float = !1, e["float-offset"] = !1, e[
					"flood-color"] = !1, e["flood-opacity"] = !1, e["flow-from"] = !1, e["flow-into"] = !1, e.font = !0, e[
					"font-family"] = !0, e["font-feature-settings"] = !0, e["font-kerning"] = !0, e["font-language-override"] = !0,
				e["font-size"] = !0, e["font-size-adjust"] = !0, e["font-stretch"] = !0, e["font-style"] = !0, e[
					"font-synthesis"] = !0, e["font-variant"] = !0, e["font-variant-alternates"] = !0, e["font-variant-caps"] = !0,
				e["font-variant-east-asian"] = !0, e["font-variant-ligatures"] = !0, e["font-variant-numeric"] = !0, e[
					"font-variant-position"] = !0, e["font-weight"] = !0, e.grid = !1, e["grid-area"] = !1, e["grid-auto-columns"] = !
				1, e["grid-auto-flow"] = !1, e["grid-auto-rows"] = !1, e["grid-column"] = !1, e["grid-column-end"] = !1, e[
					"grid-column-start"] = !1, e["grid-row"] = !1, e["grid-row-end"] = !1, e["grid-row-start"] = !1, e[
					"grid-template"] = !1, e["grid-template-areas"] = !1, e["grid-template-columns"] = !1, e["grid-template-rows"] = !
				1, e["hanging-punctuation"] = !1, e.height = !0, e.hyphens = !1, e.icon = !1, e["image-orientation"] = !1, e[
					"image-resolution"] = !1, e["ime-mode"] = !1, e["initial-letters"] = !1, e["inline-box-align"] = !1, e[
					"justify-content"] = !1, e["justify-items"] = !1, e["justify-self"] = !1, e.left = !1, e["letter-spacing"] = !
				0, e["lighting-color"] = !0, e["line-box-contain"] = !1, e["line-break"] = !1, e["line-grid"] = !1, e[
					"line-height"] = !1, e["line-snap"] = !1, e["line-stacking"] = !1, e["line-stacking-ruby"] = !1, e[
					"line-stacking-shift"] = !1, e["line-stacking-strategy"] = !1, e["list-style"] = !0, e["list-style-image"] = !
				0, e["list-style-position"] = !0, e["list-style-type"] = !0, e.margin = !0, e["margin-bottom"] = !0, e[
					"margin-left"] = !0, e["margin-right"] = !0, e["margin-top"] = !0, e["marker-offset"] = !1, e["marker-side"] = !
				1, e.marks = !1, e.mask = !1, e["mask-box"] = !1, e["mask-box-outset"] = !1, e["mask-box-repeat"] = !1, e[
					"mask-box-slice"] = !1, e["mask-box-source"] = !1, e["mask-box-width"] = !1, e["mask-clip"] = !1, e[
					"mask-image"] = !1, e["mask-origin"] = !1, e["mask-position"] = !1, e["mask-repeat"] = !1, e["mask-size"] = !1,
				e["mask-source-type"] = !1, e["mask-type"] = !1, e["max-height"] = !0, e["max-lines"] = !1, e["max-width"] = !0,
				e["min-height"] = !0, e["min-width"] = !0, e["move-to"] = !1, e["nav-down"] = !1, e["nav-index"] = !1, e[
					"nav-left"] = !1, e["nav-right"] = !1, e["nav-up"] = !1, e["object-fit"] = !1, e["object-position"] = !1, e.opacity = !
				1, e.order = !1, e.orphans = !1, e.outline = !1, e["outline-color"] = !1, e["outline-offset"] = !1, e[
					"outline-style"] = !1, e["outline-width"] = !1, e.overflow = !1, e["overflow-wrap"] = !1, e["overflow-x"] = !1,
				e["overflow-y"] = !1, e.padding = !0, e["padding-bottom"] = !0, e["padding-left"] = !0, e["padding-right"] = !0,
				e["padding-top"] = !0, e.page = !1, e["page-break-after"] = !1, e["page-break-before"] = !1, e[
					"page-break-inside"] = !1, e["page-policy"] = !1, e.pause = !1, e["pause-after"] = !1, e["pause-before"] = !1,
				e.perspective = !1, e["perspective-origin"] = !1, e.pitch = !1, e["pitch-range"] = !1, e["play-during"] = !1, e
				.position = !1, e["presentation-level"] = !1, e.quotes = !1, e["region-fragment"] = !1, e.resize = !1, e.rest = !
				1, e["rest-after"] = !1, e["rest-before"] = !1, e.richness = !1, e.right = !1, e.rotation = !1, e[
					"rotation-point"] = !1, e["ruby-align"] = !1, e["ruby-merge"] = !1, e["ruby-position"] = !1, e[
					"shape-image-threshold"] = !1, e["shape-outside"] = !1, e["shape-margin"] = !1, e.size = !1, e.speak = !1, e[
					"speak-as"] = !1, e["speak-header"] = !1, e["speak-numeral"] = !1, e["speak-punctuation"] = !1, e[
					"speech-rate"] = !1, e.stress = !1, e["string-set"] = !1, e["tab-size"] = !1, e["table-layout"] = !1, e[
					"text-align"] = !0, e["text-align-last"] = !0, e["text-combine-upright"] = !0, e["text-decoration"] = !0, e[
					"text-decoration-color"] = !0, e["text-decoration-line"] = !0, e["text-decoration-skip"] = !0, e[
					"text-decoration-style"] = !0, e["text-emphasis"] = !0, e["text-emphasis-color"] = !0, e[
					"text-emphasis-position"] = !0, e["text-emphasis-style"] = !0, e["text-height"] = !0, e["text-indent"] = !0, e[
					"text-justify"] = !0, e["text-orientation"] = !0, e["text-overflow"] = !0, e["text-shadow"] = !0, e[
					"text-space-collapse"] = !0, e["text-transform"] = !0, e["text-underline-position"] = !0, e["text-wrap"] = !0,
				e.top = !1, e.transform = !1, e["transform-origin"] = !1, e["transform-style"] = !1, e.transition = !1, e[
					"transition-delay"] = !1, e["transition-duration"] = !1, e["transition-property"] = !1, e[
					"transition-timing-function"] = !1, e["unicode-bidi"] = !1, e["vertical-align"] = !1, e.visibility = !1, e[
					"voice-balance"] = !1, e["voice-duration"] = !1, e["voice-family"] = !1, e["voice-pitch"] = !1, e[
					"voice-range"] = !1, e["voice-rate"] = !1, e["voice-stress"] = !1, e["voice-volume"] = !1, e.volume = !1, e[
					"white-space"] = !1, e.widows = !1, e.width = !0, e["will-change"] = !1, e["word-break"] = !0, e[
					"word-spacing"] = !0, e["word-wrap"] = !0, e["wrap-flow"] = !1, e["wrap-through"] = !1, e["writing-mode"] = !1,
				e["z-index"] = !1, e
		}

		function r(e, t, n) {}

		function i(e, t, n) {}

		function o(e, t) {
			return a.test(t) ? "" : t
		}
		var a = /javascript\s*\:/gim;
		t.whiteList = n(), t.getDefaultWhiteList = n, t.onAttr = r, t.onIgnoreAttr = i, t.safeAttrValue = o
	}, function(e, t) {
		e.exports = {
			indexOf: function(e, t) {
				var n, r;
				if (Array.prototype.indexOf) return e.indexOf(t);
				for (n = 0, r = e.length; n < r; n++)
					if (e[n] === t) return n;
				return -1
			},
			forEach: function(e, t, n) {
				var r, i;
				if (Array.prototype.forEach) return e.forEach(t, n);
				for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e)
			},
			trim: function(e) {
				return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
			},
			trimRight: function(e) {
				return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "")
			}
		}
	}, function(e, t, n) {
		function r() {
			return {
				a: ["target", "href", "title"],
				abbr: ["title"],
				address: [],
				area: ["shape", "coords", "href", "alt"],
				article: [],
				aside: [],
				audio: ["autoplay", "controls", "loop", "preload", "src"],
				b: [],
				bdi: ["dir"],
				bdo: ["dir"],
				big: [],
				blockquote: ["cite"],
				br: [],
				caption: [],
				center: [],
				cite: [],
				code: [],
				col: ["align", "valign", "span", "width"],
				colgroup: ["align", "valign", "span", "width"],
				dd: [],
				del: ["datetime"],
				details: ["open"],
				div: [],
				dl: [],
				dt: [],
				em: [],
				font: ["color", "size", "face"],
				footer: [],
				h1: [],
				h2: [],
				h3: [],
				h4: [],
				h5: [],
				h6: [],
				header: [],
				hr: [],
				i: [],
				img: ["src", "alt", "title", "width", "height"],
				ins: ["datetime"],
				li: [],
				mark: [],
				nav: [],
				ol: [],
				p: [],
				pre: [],
				s: [],
				section: [],
				small: [],
				span: [],
				sub: [],
				sup: [],
				strong: [],
				table: ["width", "border", "align", "valign"],
				tbody: ["align", "valign"],
				td: ["width", "rowspan", "colspan", "align", "valign"],
				tfoot: ["align", "valign"],
				th: ["width", "rowspan", "colspan", "align", "valign"],
				thead: ["align", "valign"],
				tr: ["rowspan", "align", "valign"],
				tt: [],
				u: [],
				ul: [],
				video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
			}
		}

		function i(e, t, n) {}

		function o(e, t, n) {}

		function a(e, t, n) {}

		function s(e, t, n) {}

		function l(e) {
			return e.replace(_, "&lt;").replace(z, "&gt;")
		}

		function c(e, t, n, r) {
			if (n = g(n), "href" === t || "src" === t) {
				if ("#" === (n = A.trim(n))) return "#";
				if ("http://" !== n.substr(0, 7) && "https://" !== n.substr(0, 8) && "mailto:" !== n.substr(0, 7) && "tel:" !==
					n.substr(0, 4) && "#" !== n[0] && "/" !== n[0]) return ""
			} else if ("background" === t) {
				if ($.lastIndex = 0, $.test(n)) return ""
			} else if ("style" === t) {
				if (R.lastIndex = 0, R.test(n)) return "";
				if (E.lastIndex = 0, E.test(n) && ($.lastIndex = 0, $.test(n))) return "";
				!1 !== r && (r = r || S, n = r.process(n))
			}
			return n = m(n)
		}

		function u(e) {
			return e.replace(C, "&quot;")
		}

		function p(e) {
			return e.replace(T, '"')
		}

		function d(e) {
			return e.replace(L, function(e, t) {
				return "x" === t[0] || "X" === t[0] ? String.fromCharCode(parseInt(t.substr(1), 16)) : String.fromCharCode(
					parseInt(t, 10))
			})
		}

		function h(e) {
			return e.replace(q, ":").replace(I, " ")
		}

		function f(e) {
			for (var t = "", n = 0, r = e.length; n < r; n++) t += e.charCodeAt(n) < 32 ? " " : e.charAt(n);
			return A.trim(t)
		}

		function g(e) {
			return e = p(e), e = d(e), e = h(e), e = f(e)
		}

		function m(e) {
			return e = u(e), e = l(e)
		}

		function v() {
			return ""
		}

		function b(e, t) {
			function n(t) {
				return !!r || -1 !== A.indexOf(e, t)
			}
			"function" != typeof t && (t = function() {});
			var r = !Array.isArray(e),
				i = [],
				o = !1;
			return {
				onIgnoreTag: function(e, r, a) {
					if (n(e)) {
						if (a.isClosing) {
							var s = "[/removed]",
								l = a.position + s.length;
							return i.push([!1 !== o ? o : a.position, l]), o = !1, s
						}
						return o || (o = a.position), "[removed]"
					}
					return t(e, r, a)
				},
				remove: function(e) {
					var t = "",
						n = 0;
					return A.forEach(i, function(r) {
						t += e.slice(n, r[0]), n = r[1]
					}), t += e.slice(n)
				}
			}
		}

		function y(e) {
			return e.replace(j, "")
		}

		function x(e) {
			var t = e.split("");
			return t = t.filter(function(e) {
				var t = e.charCodeAt(0);
				return 127 !== t && (!(t <= 31) || (10 === t || 13 === t))
			}), t.join("")
		}
		var w = n(0).FilterCSS,
			k = n(0).getDefaultWhiteList,
			A = n(1),
			S = new w,
			_ = /</g,
			z = />/g,
			C = /"/g,
			T = /&quot;/g,
			L = /&#([a-zA-Z0-9]*);?/gim,
			q = /&colon;?/gim,
			I = /&newline;?/gim,
			$ = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,
			R = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
			E = /u\s*r\s*l\s*\(.*/gi,
			j = /<!--[\s\S]*?-->/g;
		t.whiteList = r(), t.getDefaultWhiteList = r, t.onTag = i, t.onIgnoreTag = o, t.onTagAttr = a, t.onIgnoreTagAttr =
			s, t.safeAttrValue = c, t.escapeHtml = l, t.escapeQuote = u, t.unescapeQuote = p, t.escapeHtmlEntities = d, t.escapeDangerHtml5Entities =
			h, t.clearNonPrintableCharacter = f, t.friendlyAttrValue = g, t.escapeAttrValue = m, t.onIgnoreTagStripAll = v,
			t.StripTagBody = b, t.stripCommentTag = y, t.stripBlankChar = x, t.cssFilter = S, t.getDefaultCSSWhiteList = k
	}, function(e, t, n) {
		function r(e) {
			var t = p.spaceIndex(e);
			if (-1 === t) var n = e.slice(1, -1);
			else var n = e.slice(1, t + 1);
			return n = p.trim(n).toLowerCase(), "/" === n.slice(0, 1) && (n = n.slice(1)), "/" === n.slice(-1) && (n = n.slice(
				0, -1)), n
		}

		function i(e) {
			return "</" === e.slice(0, 2)
		}

		function o(e, t, n) {
			"user strict";
			var o = "",
				a = 0,
				s = !1,
				l = !1,
				c = 0,
				u = e.length,
				p = "",
				d = "";
			for (c = 0; c < u; c++) {
				var h = e.charAt(c);
				if (!1 === s) {
					if ("<" === h) {
						s = c;
						continue
					}
				} else if (!1 === l) {
					if ("<" === h) {
						o += n(e.slice(a, c)), s = c, a = c;
						continue
					}
					if (">" === h) {
						o += n(e.slice(a, s)), d = e.slice(s, c + 1), p = r(d), o += t(s, o.length, p, d, i(d)), a = c + 1, s = !1;
						continue
					}
					if (('"' === h || "'" === h) && "=" === e.charAt(c - 1)) {
						l = h;
						continue
					}
				} else if (h === l) {
					l = !1;
					continue
				}
			}
			return a < e.length && (o += n(e.substr(a))), o
		}

		function a(e, t) {
			"user strict";

			function n(e, n) {
				if (e = p.trim(e), e = e.replace(d, "").toLowerCase(), !(e.length < 1)) {
					var r = t(e, n || "");
					r && i.push(r)
				}
			}
			for (var r = 0, i = [], o = !1, a = e.length, c = 0; c < a; c++) {
				var h, f, g = e.charAt(c);
				if (!1 !== o || "=" !== g)
					if (!1 === o || c !== r || '"' !== g && "'" !== g || "=" !== e.charAt(c - 1))
						if (/\s|\n|\t/.test(g)) {
							if (e = e.replace(/\s|\n|\t/g, " "), !1 === o) {
								if (-1 === (f = s(e, c))) {
									h = p.trim(e.slice(r, c)), n(h), o = !1, r = c + 1;
									continue
								}
								c = f - 1;
								continue
							}
							if (-1 === (f = l(e, c - 1))) {
								h = p.trim(e.slice(r, c)), h = u(h), n(o, h), o = !1, r = c + 1;
								continue
							}
						} else;
				else {
					if (-1 === (f = e.indexOf(g, c + 1))) break;
					h = p.trim(e.slice(r + 1, f)), n(o, h), o = !1, c = f, r = c + 1
				} else o = e.slice(r, c), r = c + 1
			}
			return r < e.length && (!1 === o ? n(e.slice(r)) : n(o, u(p.trim(e.slice(r))))), p.trim(i.join(" "))
		}

		function s(e, t) {
			for (; t < e.length; t++) {
				var n = e[t];
				if (" " !== n) return "=" === n ? t : -1
			}
		}

		function l(e, t) {
			for (; t > 0; t--) {
				var n = e[t];
				if (" " !== n) return "=" === n ? t : -1
			}
		}

		function c(e) {
			return '"' === e[0] && '"' === e[e.length - 1] || "'" === e[0] && "'" === e[e.length - 1]
		}

		function u(e) {
			return c(e) ? e.substr(1, e.length - 2) : e
		}
		var p = n(1),
			d = /[^a-zA-Z0-9_:\.\-]/gim;
		t.parseTag = o, t.parseAttr = a
	}, function(e, t, n) {
		var r;
		! function(i) {
			"use strict";

			function o(e, t) {
				var n = (65535 & e) + (65535 & t);
				return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
			}

			function a(e, t) {
				return e << t | e >>> 32 - t
			}

			function s(e, t, n, r, i, s) {
				return o(a(o(o(t, e), o(r, s)), i), n)
			}

			function l(e, t, n, r, i, o, a) {
				return s(t & n | ~t & r, e, t, i, o, a)
			}

			function c(e, t, n, r, i, o, a) {
				return s(t & r | n & ~r, e, t, i, o, a)
			}

			function u(e, t, n, r, i, o, a) {
				return s(t ^ n ^ r, e, t, i, o, a)
			}

			function p(e, t, n, r, i, o, a) {
				return s(n ^ (t | ~r), e, t, i, o, a)
			}

			function d(e, t) {
				e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
				var n, r, i, a, s, d = 1732584193,
					h = -271733879,
					f = -1732584194,
					g = 271733878;
				for (n = 0; n < e.length; n += 16) r = d, i = h, a = f, s = g, d = l(d, h, f, g, e[n], 7, -680876936), g = l(g,
						d, h, f, e[n + 1], 12, -389564586), f = l(f, g, d, h, e[n + 2], 17, 606105819), h = l(h, f, g, d, e[n + 3],
						22, -1044525330), d = l(d, h, f, g, e[n + 4], 7, -176418897), g = l(g, d, h, f, e[n + 5], 12, 1200080426), f =
					l(f, g, d, h, e[n + 6], 17, -1473231341), h = l(h, f, g, d, e[n + 7], 22, -45705983), d = l(d, h, f, g, e[n +
						8], 7, 1770035416), g = l(g, d, h, f, e[n + 9], 12, -1958414417), f = l(f, g, d, h, e[n + 10], 17, -42063), h =
					l(h, f, g, d, e[n + 11], 22, -1990404162), d = l(d, h, f, g, e[n + 12], 7, 1804603682), g = l(g, d, h, f, e[n +
						13], 12, -40341101), f = l(f, g, d, h, e[n + 14], 17, -1502002290), h = l(h, f, g, d, e[n + 15], 22,
						1236535329), d = c(d, h, f, g, e[n + 1], 5, -165796510), g = c(g, d, h, f, e[n + 6], 9, -1069501632), f = c(f,
						g, d, h, e[n + 11], 14, 643717713), h = c(h, f, g, d, e[n], 20, -373897302), d = c(d, h, f, g, e[n + 5], 5, -
						701558691), g = c(g, d, h, f, e[n + 10], 9, 38016083), f = c(f, g, d, h, e[n + 15], 14, -660478335), h = c(h,
						f, g, d, e[n + 4], 20, -405537848), d = c(d, h, f, g, e[n + 9], 5, 568446438), g = c(g, d, h, f, e[n + 14], 9,
						-1019803690), f = c(f, g, d, h, e[n + 3], 14, -187363961), h = c(h, f, g, d, e[n + 8], 20, 1163531501), d = c(
						d, h, f, g, e[n + 13], 5, -1444681467), g = c(g, d, h, f, e[n + 2], 9, -51403784), f = c(f, g, d, h, e[n + 7],
						14, 1735328473), h = c(h, f, g, d, e[n + 12], 20, -1926607734), d = u(d, h, f, g, e[n + 5], 4, -378558), g =
					u(g, d, h, f, e[n + 8], 11, -2022574463), f = u(f, g, d, h, e[n + 11], 16, 1839030562), h = u(h, f, g, d, e[n +
						14], 23, -35309556), d = u(d, h, f, g, e[n + 1], 4, -1530992060), g = u(g, d, h, f, e[n + 4], 11, 1272893353),
					f = u(f, g, d, h, e[n + 7], 16, -155497632), h = u(h, f, g, d, e[n + 10], 23, -1094730640), d = u(d, h, f, g,
						e[n + 13], 4, 681279174), g = u(g, d, h, f, e[n], 11, -358537222), f = u(f, g, d, h, e[n + 3], 16, -722521979),
					h = u(h, f, g, d, e[n + 6], 23, 76029189), d = u(d, h, f, g, e[n + 9], 4, -640364487), g = u(g, d, h, f, e[n +
						12], 11, -421815835), f = u(f, g, d, h, e[n + 15], 16, 530742520), h = u(h, f, g, d, e[n + 2], 23, -995338651),
					d = p(d, h, f, g, e[n], 6, -198630844), g = p(g, d, h, f, e[n + 7], 10, 1126891415), f = p(f, g, d, h, e[n +
						14], 15, -1416354905), h = p(h, f, g, d, e[n + 5], 21, -57434055), d = p(d, h, f, g, e[n + 12], 6, 1700485571),
					g = p(g, d, h, f, e[n + 3], 10, -1894986606), f = p(f, g, d, h, e[n + 10], 15, -1051523), h = p(h, f, g, d, e[
						n + 1], 21, -2054922799), d = p(d, h, f, g, e[n + 8], 6, 1873313359), g = p(g, d, h, f, e[n + 15], 10, -
						30611744), f = p(f, g, d, h, e[n + 6], 15, -1560198380), h = p(h, f, g, d, e[n + 13], 21, 1309151649), d = p(
						d, h, f, g, e[n + 4], 6, -145523070), g = p(g, d, h, f, e[n + 11], 10, -1120210379), f = p(f, g, d, h, e[n +
						2], 15, 718787259), h = p(h, f, g, d, e[n + 9], 21, -343485551), d = o(d, r), h = o(h, i), f = o(f, a), g = o(
						g, s);
				return [d, h, f, g]
			}

			function h(e) {
				var t, n = "",
					r = 32 * e.length;
				for (t = 0; t < r; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
				return n
			}

			function f(e) {
				var t, n = [];
				for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
				var r = 8 * e.length;
				for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
				return n
			}

			function g(e) {
				return h(d(f(e), 8 * e.length))
			}

			function m(e, t) {
				var n, r, i = f(e),
					o = [],
					a = [];
				for (o[15] = a[15] = void 0, i.length > 16 && (i = d(i, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^
					i[n], a[n] = 1549556828 ^ i[n];
				return r = d(o.concat(f(t)), 512 + 8 * t.length), h(d(a.concat(r), 640))
			}

			function v(e) {
				var t, n, r = "0123456789abcdef",
					i = "";
				for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), i += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
				return i
			}

			function b(e) {
				return unescape(encodeURIComponent(e))
			}

			function y(e) {
				return g(b(e))
			}

			function x(e) {
				return v(y(e))
			}

			function w(e, t) {
				return m(b(e), b(t))
			}

			function k(e, t) {
				return v(w(e, t))
			}

			function A(e, t, n) {
				return t ? n ? w(t, e) : k(t, e) : n ? y(e) : x(e)
			}
			void 0 !== (r = function() {
				return A
			}.call(t, n, t, e)) && (e.exports = r)
		}()
	}, function(e, t, n) {
		(function(t) {
			! function(t) {
				"use strict";

				function n(e) {
					this.tokens = [], this.tokens.links = Object.create(null), this.options = e || b.defaults, this.rules = y.normal,
						this.options.pedantic ? this.rules = y.pedantic : this.options.gfm && (this.options.tables ? this.rules = y.tables :
							this.rules = y.gfm)
				}

				function r(e, t) {
					if (this.options = t || b.defaults, this.links = e, this.rules = x.normal, this.renderer = this.options.renderer ||
						new i, this.renderer.options = this.options, !this.links) throw new Error(
						"Tokens array requires a `links` property.");
					this.options.pedantic ? this.rules = x.pedantic : this.options.gfm && (this.options.breaks ? this.rules = x.breaks :
						this.rules = x.gfm)
				}

				function i(e) {
					this.options = e || b.defaults
				}

				function o() {}

				function a(e) {
					this.tokens = [], this.token = null, this.options = e || b.defaults, this.options.renderer = this.options.renderer ||
						new i, this.renderer = this.options.renderer, this.renderer.options = this.options, this.slugger = new s
				}

				function s() {
					this.seen = {}
				}

				function l(e, t) {
					if (t) {
						if (l.escapeTest.test(e)) return e.replace(l.escapeReplace, function(e) {
							return l.replacements[e]
						})
					} else if (l.escapeTestNoEncode.test(e)) return e.replace(l.escapeReplaceNoEncode, function(e) {
						return l.replacements[e]
					});
					return e
				}

				function c(e) {
					return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function(e, t) {
						return t = t.toLowerCase(), "colon" === t ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(
							parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
					})
				}

				function u(e, t) {
					return e = e.source || e, t = t || "", {
						replace: function(t, n) {
							return n = n.source || n, n = n.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(t, n), this
						},
						getRegex: function() {
							return new RegExp(e, t)
						}
					}
				}

				function p(e, t, n) {
					if (e) {
						try {
							var r = decodeURIComponent(c(n)).replace(/[^\w:]/g, "").toLowerCase()
						} catch (e) {
							return null
						}
						if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return null
					}
					t && !k.test(n) && (n = d(t, n));
					try {
						n = encodeURI(n).replace(/%25/g, "%")
					} catch (e) {
						return null
					}
					return n
				}

				function d(e, t) {
					return w[" " + e] || (/^[^:]+:\/*[^\/]*$/.test(e) ? w[" " + e] = e + "/" : w[" " + e] = m(e, "/", !0)), e = w[
						" " + e], "//" === t.slice(0, 2) ? e.replace(/:[\s\S]*/, ":") + t : "/" === t.charAt(0) ? e.replace(
						/(:\/*[^\/]*)[\s\S]*/, "$1") + t : e + t
				}

				function h() {}

				function f(e) {
					for (var t, n, r = 1; r < arguments.length; r++) {
						t = arguments[r];
						for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					}
					return e
				}

				function g(e, t) {
					var n = e.replace(/\|/g, function(e, t, n) {
							for (var r = !1, i = t; --i >= 0 && "\\" === n[i];) r = !r;
							return r ? "|" : " |"
						}),
						r = n.split(/ \|/),
						i = 0;
					if (r.length > t) r.splice(t);
					else
						for (; r.length < t;) r.push("");
					for (; i < r.length; i++) r[i] = r[i].trim().replace(/\\\|/g, "|");
					return r
				}

				function m(e, t, n) {
					if (0 === e.length) return "";
					for (var r = 0; r < e.length;) {
						var i = e.charAt(e.length - r - 1);
						if (i !== t || n) {
							if (i === t || !n) break;
							r++
						} else r++
					}
					return e.substr(0, e.length - r)
				}

				function v(e, t) {
					if (-1 === e.indexOf(t[1])) return -1;
					for (var n = 0, r = 0; r < e.length; r++)
						if ("\\" === e[r]) r++;
						else if (e[r] === t[0]) n++;
					else if (e[r] === t[1] && --n < 0) return r;
					return -1
				}

				function b(e, t, r) {
					if (void 0 === e || null === e) throw new Error("marked(): input parameter is undefined or null");
					if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString
						.call(e) + ", string expected");
					if (r || "function" == typeof t) {
						r || (r = t, t = null), t = f({}, b.defaults, t || {});
						var i, o, s = t.highlight,
							c = 0;
						try {
							i = n.lex(e, t)
						} catch (e) {
							return r(e)
						}
						o = i.length;
						var u = function(e) {
							if (e) return t.highlight = s, r(e);
							var n;
							try {
								n = a.parse(i, t)
							} catch (t) {
								e = t
							}
							return t.highlight = s, e ? r(e) : r(null, n)
						};
						if (!s || s.length < 3) return u();
						if (delete t.highlight, !o) return u();
						for (; c < i.length; c++) ! function(e) {
							"code" !== e.type ? --o || u() : s(e.text, e.lang, function(t, n) {
								return t ? u(t) : null == n || n === e.text ? --o || u() : (e.text = n, e.escaped = !0, void(--o || u()))
							})
						}(i[c])
					} else try {
						return t && (t = f({}, b.defaults, t)), a.parse(n.lex(e, t), t)
					} catch (e) {
						if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", (t || b.defaults).silent)
							return "<p>An error occurred:</p><pre>" + l(e.message + "", !0) + "</pre>";
						throw e
					}
				}
				var y = {
					newline: /^\n+/,
					code: /^( {4}[^\n]+\n*)+/,
					fences: h,
					hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
					heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
					nptable: h,
					blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
					list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
					html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",
					def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
					table: h,
					lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
					paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
					text: /^[^\n]+/
				};
				y._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/, y._title =
					/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/, y.def = u(y.def).replace("label", y._label).replace(
						"title", y._title).getRegex(), y.bullet = /(?:[*+-]|\d{1,9}\.)/, y.item =
					/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/, y.item = u(y.item, "gm").replace(/bull/g, y.bullet).getRegex(),
					y.list = u(y.list).replace(/bull/g, y.bullet).replace("hr",
						"\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + y.def.source +
						")").getRegex(), y._tag =
					"address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
					y._comment = /<!--(?!-?>)[\s\S]*?-->/, y.html = u(y.html, "i").replace("comment", y._comment).replace("tag",
						y._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),
					y.paragraph = u(y.paragraph).replace("hr", y.hr).replace("heading", y.heading).replace("lheading", y.lheading)
					.replace("tag", y._tag).getRegex(), y.blockquote = u(y.blockquote).replace("paragraph", y.paragraph).getRegex(),
					y.normal = f({}, y), y.gfm = f({}, y.normal, {
						fences: /^ {0,3}(`{3,}|~{3,})([^`\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
						paragraph: /^/,
						heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
					}), y.gfm.paragraph = u(y.paragraph).replace("(?!", "(?!" + y.gfm.fences.source.replace("\\1", "\\2") + "|" +
						y.list.source.replace("\\1", "\\3") + "|").getRegex(), y.tables = f({}, y.gfm, {
						nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
						table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
					}), y.pedantic = f({}, y.normal, {
						html: u(
							"^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
						).replace("comment", y._comment).replace(/tag/g,
							"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
						).getRegex(),
						def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/
					}), n.rules = y, n.lex = function(e, t) {
						return new n(t).lex(e)
					}, n.prototype.lex = function(e) {
						return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g,
							"\n"), this.token(e, !0)
					}, n.prototype.token = function(e, t) {
						e = e.replace(/^ +$/gm, "");
						for (var n, r, i, o, a, s, l, c, u, p, d, h, f, v, b, x; e;)
							if ((i = this.rules.newline.exec(e)) && (e = e.substring(i[0].length), i[0].length > 1 && this.tokens.push({
									type: "space"
								})), i = this.rules.code.exec(e)) e = e.substring(i[0].length), i = i[0].replace(/^ {4}/gm, ""), this.tokens
								.push({
									type: "code",
									text: this.options.pedantic ? i : m(i, "\n")
								});
							else if (i = this.rules.fences.exec(e)) e = e.substring(i[0].length), this.tokens.push({
							type: "code",
							lang: i[2] ? i[2].trim() : i[2],
							text: i[3] || ""
						});
						else if (i = this.rules.heading.exec(e)) e = e.substring(i[0].length), this.tokens.push({
							type: "heading",
							depth: i[1].length,
							text: i[2]
						});
						else if (t && (i = this.rules.nptable.exec(e)) && (s = {
								type: "table",
								header: g(i[1].replace(/^ *| *\| *$/g, "")),
								align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
								cells: i[3] ? i[3].replace(/\n$/, "").split("\n") : []
							}, s.header.length === s.align.length)) {
							for (e = e.substring(i[0].length), d = 0; d < s.align.length; d++) /^*-+:*$/.test(s.align[d]) ? s.align[d] =
								"right" : /^ *:-+: *$/.test(s.align[d]) ? s.align[d] = "center" : /^ *:-+ *$/.test(s.align[d]) ? s.align[d] =
								"left" : s.align[d] = null;
							for (d = 0; d < s.cells.length; d++) s.cells[d] = g(s.cells[d], s.header.length);
							this.tokens.push(s)
						} else if (i = this.rules.hr.exec(e)) e = e.substring(i[0].length), this.tokens.push({
							type: "hr"
						});
						else if (i = this.rules.blockquote.exec(e)) e = e.substring(i[0].length), this.tokens.push({
							type: "blockquote_start"
						}), i = i[0].replace(/^ *> ?/gm, ""), this.token(i, t), this.tokens.push({
							type: "blockquote_end"
						});
						else if (i = this.rules.list.exec(e)) {
							for (e = e.substring(i[0].length), o = i[2], v = o.length > 1, l = {
									type: "list_start",
									ordered: v,
									start: v ? +o : "",
									loose: !1
								}, this.tokens.push(l), i = i[0].match(this.rules.item), c = [], n = !1, f = i.length, d = 0; d < f; d++) s =
								i[d], p = s.length, s = s.replace(/^ *([*+-]|\d+\.) */, ""), ~s.indexOf("\n ") && (p -= s.length, s = this
									.options.pedantic ? s.replace(/^ {1,4}/gm, "") : s.replace(new RegExp("^ {1," + p + "}", "gm"), "")), d !==
								f - 1 && (a = y.bullet.exec(i[d + 1])[0], (o.length > 1 ? 1 === a.length : a.length > 1 || this.options.smartLists &&
									a !== o) && (e = i.slice(d + 1).join("\n") + e, d = f - 1)), r = n || /\n\n(?!\s*$)/.test(s), d !== f - 1 &&
								(n = "\n" === s.charAt(s.length - 1), r || (r = n)), r && (l.loose = !0), b = /^\[[ xX]\] /.test(s), x =
								void 0, b && (x = " " !== s[1], s = s.replace(/^\[[ xX]\] +/, "")), u = {
									type: "list_item_start",
									task: b,
									checked: x,
									loose: r
								}, c.push(u), this.tokens.push(u), this.token(s, !1), this.tokens.push({
									type: "list_item_end"
								});
							if (l.loose)
								for (f = c.length, d = 0; d < f; d++) c[d].loose = !0;
							this.tokens.push({
								type: "list_end"
							})
						} else if (i = this.rules.html.exec(e)) e = e.substring(i[0].length), this.tokens.push({
							type: this.options.sanitize ? "paragraph" : "html",
							pre: !this.options.sanitizer && ("pre" === i[1] || "script" === i[1] || "style" === i[1]),
							text: i[0]
						});
						else if (t && (i = this.rules.def.exec(e))) e = e.substring(i[0].length), i[3] && (i[3] = i[3].substring(1,
							i[3].length - 1)), h = i[1].toLowerCase().replace(/\s+/g, " "), this.tokens.links[h] || (this.tokens.links[
							h] = {
							href: i[2],
							title: i[3]
						});
						else if (t && (i = this.rules.table.exec(e)) && (s = {
								type: "table",
								header: g(i[1].replace(/^ *| *\| *$/g, "")),
								align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
								cells: i[3] ? i[3].replace(/(?: *\| *)?\n$/, "").split("\n") : []
							}, s.header.length === s.align.length)) {
							for (e = e.substring(i[0].length), d = 0; d < s.align.length; d++) /^*-+:*$/.test(s.align[d]) ? s.align[d] =
								"right" : /^ *:-+: *$/.test(s.align[d]) ? s.align[d] = "center" : /^ *:-+ *$/.test(s.align[d]) ? s.align[d] =
								"left" : s.align[d] = null;
							for (d = 0; d < s.cells.length; d++) s.cells[d] = g(s.cells[d].replace(/^ *\| *| *\| *$/g, ""), s.header.length);
							this.tokens.push(s)
						} else if (i = this.rules.lheading.exec(e)) e = e.substring(i[0].length), this.tokens.push({
							type: "heading",
							depth: "=" === i[2] ? 1 : 2,
							text: i[1]
						});
						else if (t && (i = this.rules.paragraph.exec(e))) e = e.substring(i[0].length), this.tokens.push({
							type: "paragraph",
							text: "\n" === i[1].charAt(i[1].length - 1) ? i[1].slice(0, -1) : i[1]
						});
						else if (i = this.rules.text.exec(e)) e = e.substring(i[0].length), this.tokens.push({
							type: "text",
							text: i[0]
						});
						else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
						return this.tokens
					};
				var x = {
					escape: /^\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/,
					autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
					url: h,
					tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
					link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
					reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
					nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
					strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
					em: /^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
					code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
					br: /^( {2,}|\\)\n(?!\s*$)/,
					del: h,
					text: /^(`+|[^`])[\s\S]*?(?=[\\<!\[`*]|\b_| {2,}\n|$)/
				};
				x._punctuation = "!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~", x.em = u(x.em).replace(/punctuation/g, x._punctuation).getRegex(),
					x._escapes = /\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/g, x._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, x._email =
					/[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
					x.autolink = u(x.autolink).replace("scheme", x._scheme).replace("email", x._email).getRegex(), x._attribute =
					/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, x.tag = u(x.tag).replace(
						"comment", y._comment).replace("attribute", x._attribute).getRegex(), x._label =
					/(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/, x._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*)/,
					x._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, x.link = u(x.link).replace("label",
						x._label).replace("href", x._href).replace("title", x._title).getRegex(), x.reflink = u(x.reflink).replace(
						"label", x._label).getRegex(), x.normal = f({}, x), x.pedantic = f({}, x.normal, {
						strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
						em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
						link: u(/^!?\[(label)\]\((.*?)\)/).replace("label", x._label).getRegex(),
						reflink: u(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", x._label).getRegex()
					}), x.gfm = f({}, x.normal, {
						escape: u(x.escape).replace("])", "~|])").getRegex(),
						_extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
						url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
						_backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
						del: /^~+(?=\S)([\s\S]*?\S)~+/,
						text: u(x.text).replace("]|", "~]|").replace("|$",
							"|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|$").getRegex()
					}), x.gfm.url = u(x.gfm.url, "i").replace("email", x.gfm._extended_email).getRegex(), x.breaks = f({}, x.gfm, {
						br: u(x.br).replace("{2,}", "*").getRegex(),
						text: u(x.gfm.text).replace("{2,}", "*").getRegex()
					}), r.rules = x, r.output = function(e, t, n) {
						return new r(t, n).output(e)
					}, r.prototype.output = function(e) {
						for (var t, n, i, o, a, s, c = ""; e;)
							if (a = this.rules.escape.exec(e)) e = e.substring(a[0].length), c += l(a[1]);
							else if (a = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(a[0]) ? this.inLink = !0 : this.inLink &&
							/^<\/a>/i.test(a[0]) && (this.inLink = !1), !this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(a[0]) ?
							this.inRawBlock = !0 : this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0]) && (this.inRawBlock = !
								1), e = e.substring(a[0].length), c += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(
								a[0]) : l(a[0]) : a[0];
						else if (a = this.rules.link.exec(e)) {
							var u = v(a[2], "()");
							if (u > -1) {
								var p = a[2].length - u;
								a[2] = a[2].substring(0, u), a[0] = a[0].substring(0, a[0].length - p)
							}
							e = e.substring(a[0].length), this.inLink = !0, i = a[2], this.options.pedantic ? (t =
									/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i), t ? (i = t[1], o = t[3]) : o = "") : o = a[3] ? a[3].slice(1, -1) :
								"", i = i.trim().replace(/^<([\s\S]*)>$/, "$1"), c += this.outputLink(a, {
									href: r.escapes(i),
									title: r.escapes(o)
								}), this.inLink = !1
						} else if ((a = this.rules.reflink.exec(e)) || (a = this.rules.nolink.exec(e))) {
							if (e = e.substring(a[0].length), t = (a[2] || a[1]).replace(/\s+/g, " "), !(t = this.links[t.toLowerCase()]) ||
								!t.href) {
								c += a[0].charAt(0), e = a[0].substring(1) + e;
								continue
							}
							this.inLink = !0, c += this.outputLink(a, t), this.inLink = !1
						} else if (a = this.rules.strong.exec(e)) e = e.substring(a[0].length), c += this.renderer.strong(this.output(
							a[4] || a[3] || a[2] || a[1]));
						else if (a = this.rules.em.exec(e)) e = e.substring(a[0].length), c += this.renderer.em(this.output(a[6] ||
							a[5] || a[4] || a[3] || a[2] || a[1]));
						else if (a = this.rules.code.exec(e)) e = e.substring(a[0].length), c += this.renderer.codespan(l(a[2].trim(),
							!0));
						else if (a = this.rules.br.exec(e)) e = e.substring(a[0].length), c += this.renderer.br();
						else if (a = this.rules.del.exec(e)) e = e.substring(a[0].length), c += this.renderer.del(this.output(a[1]));
						else if (a = this.rules.autolink.exec(e)) e = e.substring(a[0].length), "@" === a[2] ? (n = l(this.mangle(a[
							1])), i = "mailto:" + n) : (n = l(a[1]), i = n), c += this.renderer.link(i, null, n);
						else if (this.inLink || !(a = this.rules.url.exec(e))) {
							if (a = this.rules.text.exec(e)) e = e.substring(a[0].length), this.inRawBlock ? c += this.renderer.text(a[
								0]) : c += this.renderer.text(l(this.smartypants(a[0])));
							else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
						} else {
							if ("@" === a[2]) n = l(a[0]), i = "mailto:" + n;
							else {
								do {
									s = a[0], a[0] = this.rules._backpedal.exec(a[0])[0]
								} while (s !== a[0]);
								n = l(a[0]), i = "www." === a[1] ? "http://" + n : n
							}
							e = e.substring(a[0].length), c += this.renderer.link(i, null, n)
						}
						return c
					}, r.escapes = function(e) {
						return e ? e.replace(r.rules._escapes, "$1") : e
					}, r.prototype.outputLink = function(e, t) {
						var n = t.href,
							r = t.title ? l(t.title) : null;
						return "!" !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, l(e[
							1]))
					}, r.prototype.smartypants = function(e) {
						return this.options.smartypants ? e.replace(/---/g, "鈥�").replace(/--/g, "鈥�").replace(
							/(^|[-\u2014\/(\[{"\s])'/g, "$1鈥�").replace(/'/g, "鈥�").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1鈥�").replace(
							/"/g, "鈥�").replace(/\.{3}/g, "鈥�") : e
					}, r.prototype.mangle = function(e) {
						if (!this.options.mangle) return e;
						for (var t, n = "", r = e.length, i = 0; i < r; i++) t = e.charCodeAt(i), Math.random() > .5 && (t = "x" + t
							.toString(16)), n += "&#" + t + ";";
						return n
					}, i.prototype.code = function(e, t, n) {
						var r = (t || "").match(/\S*/)[0];
						if (this.options.highlight) {
							var i = this.options.highlight(e, r);
							null != i && i !== e && (n = !0, e = i)
						}
						return r ? '<pre><code class="' + this.options.langPrefix + l(r, !0) + '">' + (n ? e : l(e, !0)) +
							"</code></pre>\n" : "<pre><code>" + (n ? e : l(e, !0)) + "</code></pre>"
					}, i.prototype.blockquote = function(e) {
						return "<blockquote>\n" + e + "</blockquote>\n"
					}, i.prototype.html = function(e) {
						return e
					}, i.prototype.heading = function(e, t, n, r) {
						return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + r.slug(n) + '">' + e +
							"</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n"
					}, i.prototype.hr = function() {
						return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
					}, i.prototype.list = function(e, t, n) {
						var r = t ? "ol" : "ul";
						return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n"
					}, i.prototype.listitem = function(e) {
						return "<li>" + e + "</li>\n"
					}, i.prototype.checkbox = function(e) {
						return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" :
							"") + "> "
					}, i.prototype.paragraph = function(e) {
						return "<p>" + e + "</p>\n"
					}, i.prototype.table = function(e, t) {
						return t && (t = "<tbody>" + t + "</tbody>"), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
					}, i.prototype.tablerow = function(e) {
						return "<tr>\n" + e + "</tr>\n"
					}, i.prototype.tablecell = function(e, t) {
						var n = t.header ? "th" : "td";
						return (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n"
					}, i.prototype.strong = function(e) {
						return "<strong>" + e + "</strong>"
					}, i.prototype.em = function(e) {
						return "<em>" + e + "</em>"
					}, i.prototype.codespan = function(e) {
						return "<code>" + e + "</code>"
					}, i.prototype.br = function() {
						return this.options.xhtml ? "<br/>" : "<br>"
					}, i.prototype.del = function(e) {
						return "<del>" + e + "</del>"
					}, i.prototype.link = function(e, t, n) {
						if (null === (e = p(this.options.sanitize, this.options.baseUrl, e))) return n;
						var r = '<a href="' + l(e) + '"';
						return t && (r += ' title="' + t + '"'), r += ">" + n + "</a>"
					}, i.prototype.image = function(e, t, n) {
						if (null === (e = p(this.options.sanitize, this.options.baseUrl, e))) return n;
						var r = '<img class=nofancybox src="' + e + '" alt="' + n + '"';
						return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? "/>" : ">"
					}, i.prototype.text = function(e) {
						return e
					}, o.prototype.strong = o.prototype.em = o.prototype.codespan = o.prototype.del = o.prototype.text = function(
						e) {
						return e
					}, o.prototype.link = o.prototype.image = function(e, t, n) {
						return "" + n
					}, o.prototype.br = function() {
						return ""
					}, a.parse = function(e, t) {
						return new a(t).parse(e)
					}, a.prototype.parse = function(e) {
						this.inline = new r(e.links, this.options), this.inlineText = new r(e.links, f({}, this.options, {
							renderer: new o
						})), this.tokens = e.reverse();
						for (var t = ""; this.next();) t += this.tok();
						return t
					}, a.prototype.next = function() {
						return this.token = this.tokens.pop()
					}, a.prototype.peek = function() {
						return this.tokens[this.tokens.length - 1] || 0
					}, a.prototype.parseText = function() {
						for (var e = this.token.text;
							"text" === this.peek().type;) e += "\n" + this.next().text;
						return this.inline.output(e)
					}, a.prototype.tok = function() {
						switch (this.token.type) {
							case "space":
								return "";
							case "hr":
								return this.renderer.hr();
							case "heading":
								return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, c(this.inlineText.output(
									this.token.text)), this.slugger);
							case "code":
								return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
							case "table":
								var e, t, n, r, i = "",
									o = "";
								for (n = "", e = 0; e < this.token.header.length; e++) n += this.renderer.tablecell(this.inline.output(
									this.token.header[e]), {
									header: !0,
									align: this.token.align[e]
								});
								for (i += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
									for (t = this.token.cells[e], n = "", r = 0; r < t.length; r++) n += this.renderer.tablecell(this.inline.output(
										t[r]), {
										header: !1,
										align: this.token.align[r]
									});
									o += this.renderer.tablerow(n)
								}
								return this.renderer.table(i, o);
							case "blockquote_start":
								for (o = "";
									"blockquote_end" !== this.next().type;) o += this.tok();
								return this.renderer.blockquote(o);
							case "list_start":
								o = "";
								for (var a = this.token.ordered, s = this.token.start;
									"list_end" !== this.next().type;) o += this.tok();
								return this.renderer.list(o, a, s);
							case "list_item_start":
								o = "";
								var l = this.token.loose;
								for (this.token.task && (o += this.renderer.checkbox(this.token.checked));
									"list_item_end" !== this.next().type;) o += l || "text" !== this.token.type ? this.tok() : this.parseText();
								return this.renderer.listitem(o);
							case "html":
								return this.renderer.html(this.token.text);
							case "paragraph":
								return this.renderer.paragraph(this.inline.output(this.token.text));
							case "text":
								return this.renderer.paragraph(this.parseText());
							default:
								var u = 'Token with "' + this.token.type + '" type was not found.';
								if (!this.options.silent) throw new Error(u);
								console.log(u)
						}
					}, s.prototype.slug = function(e) {
						var t = e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@[\]^`{|}~]/g, "")
							.replace(/\s/g, "-");
						if (this.seen.hasOwnProperty(t)) {
							var n = t;
							do {
								this.seen[n]++, t = n + "-" + this.seen[n]
							} while (this.seen.hasOwnProperty(t))
						}
						return this.seen[t] = 0, t
					}, l.escapeTest = /[&<>"']/, l.escapeReplace = /[&<>"']/g, l.replacements = {
						"&": "&amp;",
						"<": "&lt;",
						">": "&gt;",
						'"': "&quot;",
						"'": "&#39;"
					}, l.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/, l.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
				var w = {},
					k = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
				h.exec = h, b.options = b.setOptions = function(e) {
						return f(b.defaults, e), b
					}, b.getDefaults = function() {
						return {
							baseUrl: null,
							breaks: !1,
							gfm: !0,
							headerIds: !0,
							headerPrefix: "",
							highlight: null,
							langPrefix: "language-",
							mangle: !0,
							pedantic: !1,
							renderer: new i,
							sanitize: !1,
							sanitizer: null,
							silent: !1,
							smartLists: !1,
							smartypants: !1,
							tables: !0,
							xhtml: !1
						}
					}, b.defaults = b.getDefaults(), b.Parser = a, b.parser = a.parse, b.Renderer = i, b.TextRenderer = o, b.Lexer =
					n, b.lexer = n.lex, b.InlineLexer = r, b.inlineLexer = r.output, b.Slugger = s, b.parse = b, e.exports = b
			}(this || "undefined" != typeof window && window)
		}).call(t, n(18))
	}, function(e, t, n) {
		(function(t) {
			"use strict";

			function n(e) {
				var t = new Error(e);
				return t.name = "ValueError", t
			}

			function r(e) {
				return function(t) {
					var r = Array.prototype.slice.call(arguments, 1),
						i = 0,
						o = "UNDEFINED";
					return t.replace(/([{}])\1|[{](.*?)(?:!(.+?))?[}]/g, function(t, a, s, l) {
						if (null != a) return a;
						var c = s;
						if (c.length > 0) {
							if ("IMPLICIT" === o) throw n("cannot switch from implicit to explicit numbering");
							o = "EXPLICIT"
						} else {
							if ("EXPLICIT" === o) throw n("cannot switch from explicit to implicit numbering");
							o = "IMPLICIT", c = String(i), i += 1
						}
						var u = c.split("."),
							p = (/^\d+$/.test(u[0]) ? u : ["0"].concat(u)).reduce(function(e, t) {
								return e.reduce(function(e, n) {
									return null != n && t in Object(n) ? ["function" == typeof n[t] ? n[t]() : n[t]] : []
								}, [])
							}, [r]).reduce(function(e, t) {
								return t
							}, "");
						if (null == l) return p;
						if (Object.prototype.hasOwnProperty.call(e, l)) return e[l](p);
						throw n('no transformer named "' + l + '"')
					})
				}
			}
			var i = r({});
			i.create = r, i.extend = function(e, n) {
				var i = r(n);
				e.format = function() {
					var e = Array.prototype.slice.call(arguments);
					return e.unshift(this), i.apply(t, e)
				}
			}, e.exports = i
		}).call(this, this)
	}, function(e, t, n) {
		var r = n(12);
		"string" == typeof r && (r = [
			[e.i, r, ""]
		]);
		var i = {};
		i.transform = void 0;
		n(16)(r, i);
		r.locals && (e.exports = r.locals)
	}, function(e, t, n) {
		function r(e, t) {
			return new a(t).process(e)
		}
		var i = n(4),
			o = n(5),
			a = n(19);
		t = e.exports = r, t.FilterXSS = a;
		for (var s in i) t[s] = i[s];
		for (var s in o) t[s] = o[s];
		"undefined" != typeof window && (window.filterXSS = e.exports),
			function() {
				return "undefined" != typeof self && "undefined" != typeof DedicatedWorkerGlobalScope && self instanceof DedicatedWorkerGlobalScope
			}() && (self.filterXSS = e.exports)
	}, function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(
						e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}();
		n(9);
		var o = n(7),
			a = n(10),
			s = n(6),
			l = n(8),
			c = {
				"zh-cn": {
					nick: "鏄电О锛堝繀濉級",
					mail: "閭锛堝繀濉級",
					link: "缃戠珯 (鍙€�)",
					no_comment_yet: "蹇潵鍋氱涓€涓瘎璁虹殑浜哄惂~",
					submit: "鎻愪氦",
					reply: "鍥炲",
					cancel_reply: "鍙栨秷鍥炲",
					comment_count: "宸叉湁{}鏉¤瘎璁�",
					cancel: "鍙栨秷",
					confirm: "纭",
					continue: "缁х画",
					more: "鍔犺浇鏇村...",
					preview: "棰勮",
					emoji: "琛ㄦ儏",
					error99: "鍒濆鍖栧け璐ワ紝璇锋鏌nit涓殑`el`鍏冪礌.",
					error100: "鍒濆鍖栧け璐ワ紝璇锋鏌ヤ綘鐨凙ppId鍜孉ppKey.",
					error401: "鏈粡鎺堟潈鐨勬搷浣滐紝璇锋鏌ヤ綘鐨凙ppId鍜孉ppKey.",
					error403: "璁块棶琚玜pi鍩熷悕鐧藉悕鍗曟嫆缁濓紝璇锋鏌ヤ綘鐨勫畨鍏ㄥ煙鍚嶈缃�.",
					seconds: "绉掑墠",
					minutes: "鍒嗛挓鍓�",
					hours: "灏忔椂鍓�",
					days: "澶╁墠",
					now: "鍒氬垰",
					input_tips: "鎮ㄨ緭鍏ョ殑缃戝潃鎴栭偖绠辨牸寮忎笉姝ｇ‘锛岃淇鍚庢彁浜わ紒"
				},
				en: {
					nick: "Name",
					mail: "Mail",
					link: "Website(optional)",
					no_comment_yet: "No comment yet.",
					submit: "Submit",
					reply: "Reply",
					cancel_reply: "Cancel reply",
					comment_count: "{} comments here",
					cancel: "Cancel",
					confirm: "Confirm",
					continue: "Continue",
					more: "Load More...",
					preview: "Preview",
					emoji: "Emoji",
					error99: "Initialization failed, Please check the `el` element in the init method.",
					error100: "Initialization failed, Please check your appId and appKey.",
					error401: "Unauthorized operation, Please check your appId and appKey.",
					error403: "Access denied by api domain white list, Please check your security domain.",
					seconds: "seconds ago",
					minutes: "minutes ago",
					hours: "hours ago",
					days: "days ago",
					now: "just now",
					input_tips: "Please check your mail address and website link and try again."
				}
			},
			u = {
				ip: "",
				comment: "",
				rid: "",
				at: "",
				nick: "",
				mail: "",
				link: "",
				ua: navigator.userAgent,
				url: location.pathname,
				pin: 0
			},
			p = !1,
			d = 3,
			h = 6,
			f = {}.toString,
			g = localStorage,
			m = function() {
				function e(t) {
					r(this, e);
					var n = this;
					n.version = "1.1.8", x(), !!t && n.init(t)
				}
				return i(e, [{
					key: "init",
					value: function(e) {
						var t = this,
							n = e.av || AV;
						d = e.maxNest || d, h = e.pageSize || h;
						var r = e.lang || "en";
						t.i18n = e.i18n || c[r], e.admin_email ? t.adminEmailHash = s(e.admin_email.toLowerCase().trim()) : t.adminEmailHash =
							null, u.url = e.pathname || location.pathname.replace(/\/$/, "");
						try {
							var i = "[object HTMLDivElement]" === f.call(e.el) ? e.el : document.querySelectorAll(e.el)[0];
							if ("[object HTMLDivElement]" != f.call(i)) throw "The target element was not found.";
							t.el = i, t.el.classList.add("valine");
							var o = e.placeholder || "",
								a =
								'<div id="vinputs-placeholder">\n                            <div class="vinputs-wrap">\n                                <p class="vcancel-comment-reply" href="#" rel="nofollow" style="display:none">' +
								t.i18n.cancel_reply +
								'</p>\n                                <div class="vinputs-area">\n                                    <div class="textarea-wrapper">\n                                        <div class="comment_trigger">\n                                            <div class="avatar"><img class="visitor_avatar" src="https://gravatar.loli.net/avatar/9e63c80900d106cbbec5a9f4ea433a3e?size=80"></div>\n                                            <div class="trigger_title">' +
								o +
								'</div>\n                                        </div>\n                                        <div class="veditor-area">\n                                            <textarea placeholder="" class="veditor"></textarea>\n                                            <div class="btn-wrap">\n                                                <div class="vpreview-btn vfunction-btn" title="' +
								t.i18n.preview +
								'"><svg t="1551146416896" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2051" xmlns:xlink="http://www.w3.org/1999/xlink" width="1.5em" height="1.5em"><defs><style type="text/css"></style></defs><path d="M862.516 161.07l44.62 44.38-286.303 288.866-45.668-45.615L862.516 161.07z m1.233 1.233" p-id="2052"></path><path d="M832.162 959.558H128.025V191.784h512.099v64.169H192.037V895.64h576.112V512.127h64.012v447.431z m0.833 0.533" p-id="2053"></path><path d="M256.05 703.994h384.075v63.919H256.05v-63.919z m0-127.769l320.062-0.069v63.919H256.05v-63.85z m0-128.317h192.037v63.891l-192.037 0.028v-63.919z m0 0" p-id="2054"></path></svg></div>\n                                                <div class="vemoji-btn vfunction-btn" title="' +
								t.i18n.emoji +
								'"><svg t="1551146424708" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2169" xmlns:xlink="http://www.w3.org/1999/xlink" width="1.5em" height="1.5em"><defs><style type="text/css"></style></defs><path d="M513.028 63.766c-247.628 0-448.369 200.319-448.369 447.426S265.4 958.617 513.028 958.617s448.369-200.319 448.369-447.426S760.655 63.766 513.028 63.766z m-0.203 823.563c-207.318 0-375.382-167.71-375.382-374.592s168.064-374.592 375.382-374.592 375.382 167.71 375.382 374.592-168.064 374.592-375.382 374.592z" p-id="2170"></path><path d="M514.029 767.816c-99.337 0-188.031-54.286-251.889-146.146-10.647-16.703-7.1-33.399 7.094-45.93 14.192-12.529 28.384-8.349 39.025 8.349 49.67 75.164 124.174 116.92 205.77 116.92s163.199-45.93 209.316-125.268c10.647-16.703 24.833-16.703 39.025-8.349 14.194 12.524 14.194 29.227 7.094 45.93-60.312 96.035-152.553 154.494-255.435 154.494zM464.292 402.959l-45.151-45.151-0.05 0.05-90.45-90.45-45.15 45.15 90.45 90.45-90.45 90.451 45.15 45.15 90.45-90.45 0.05 0.05 45.151-45.151-0.05-0.05zM556.611 402.959l45.151-45.151 0.05 0.05 90.45-90.45 45.15 45.15-90.45 90.45 90.45 90.451-45.15 45.15-90.45-90.45-0.05 0.05-45.151-45.151 0.05-0.05z" p-id="2171"></path></svg></div>\n                                            </div>\n                                        </div>\n                                        <div class="vextra-area">\n                                            <div class="vsmile-icons" style="display:none"></div>\n                                            <div class="vpreview-text" style="display:none"></div>\n                                        </div>\n                                    </div>\n                                    <section class="auth-section" style="display:none;">\n                                        <div class="input-wrapper"><input type="text" name="author" class="vnick" placeholder="' +
								t.i18n.nick +
								'" value=""></div>\n                                        <div class="input-wrapper"><input type="email" name="email" class="vmail" placeholder="' +
								t.i18n.mail +
								'" value=""></div>\n                                        <div class="input-wrapper"><input type="text" name="website" class="vlink" placeholder="' +
								t.i18n.link +
								'" value=""></div>\n                                        <div class="post-action"><button type="button" class="vsubmit">' +
								t.i18n.reply +
								'</button></div>\n                                    </section>\n                                    <div style="display:none;" class="vmark"></div>\n                                </div>\n                                <div class="vsubmitting" style="display:none;"></div>\n                            </div>\n                           </div>\n                           <div class="info">\n                                <div class="col"> ' +
								l(t.i18n.comment_count, '<span class="count valine-comment-count">0</span>') +
								'</div>\n                           </div>\n                           <ul class="vlist"><li class="vempty"></li></ul>\n                           <div class="vloading"></div>\n                           <div class="vpage txt-center"></div>';
							t.el.innerHTML = a;
							var g = t.el.querySelector(".vempty");
							t.nodata = {
								show: function(e) {
									g.innerHTML = e || t.i18n.no_comment_yet, g.setAttribute("style", "display:block;")
								},
								hide: function() {
									g.setAttribute("style", "display:none;")
								}
							}, t.nodata.show();
							var m = t.el.querySelector(".vsmile-icons"),
								b = e.emoticon_list || [];
							for (var y in b) {
								var x = document.createElement("img");
								x.setAttribute("class","nofancybox"),
								x.setAttribute("src", e.emoticon_url + "/" + b[y]), m.appendChild(x)
							}
							p || (n.init({
								appId: e.app_id || e.appId,
								appKey: e.app_key || e.appKey
							}), p = !0), t.v = n
						} catch (e) {
							return;
						}
						var k =
							'<div class="spinner"><div class="r1"></div><div class="r2"></div><div class="r3"></div><div class="r4"></div><div class="r5"></div></div>',
							A = t.el.querySelector(".vloading");
						A.innerHTML = k, t.loading = {
							show: function() {
								A.setAttribute("style", "display:block;"), t.nodata.hide()
							},
							hide: function() {
								A.setAttribute("style", "display:none;"), 0 === t.el.querySelectorAll(".vcard").length && t.nodata.show()
							}
						};
						var S = t.el.querySelector(".vsubmitting");
						S.innerHTML = k, t.submitting = {
							show: function() {
								S.setAttribute("style", "display:block;")
							},
							hide: function() {
								S.setAttribute("style", "display:none;"), t.nodata.hide()
							}
						};
						var _ = t.el.querySelector(".vmark");
						t.alert = {
							show: function(e) {
								_.innerHTML = '<div class="valert txt-center"><div class="vtext">' + e.text +
									'</div><div class="vbtns"></div></div>';
								var n = _.querySelector(".vbtns"),
									r = '<button class="vcancel vbtn">' + (e && e.ctxt || t.i18n.cancel) + "</button>",
									i = '<button class="vsure vbtn">' + (e && e.otxt || t.i18n.continue) + "</button>";
								if (n.innerHTML = "" + r + (e.type && i), _.querySelector(".vcancel").addEventListener("click",
										function(e) {
											t.alert.hide()
										}), _.setAttribute("style", "display:block;"), e && e.type) {
									var o = _.querySelector(".vsure");
									v.on("click", o, function(n) {
										t.alert.hide(), e.cb && e.cb()
									})
								}
							},
							hide: function() {
								_.setAttribute("style", "display:none;")
							}
						}, t.loading.show();
						var z = new t.v.Query("Comment");
						z.equalTo("url", u.url);
						var C = new t.v.Query("Comment");
						C.equalTo("url", u.url + "/");
						var T = AV.Query.or(z, C);
						T.notEqualTo("isSpam", !0), T.count().then(function(n) {
							t.el.querySelector(".count").innerHTML = "" + n, t.bind(e)
						}, function(e) {
							console.log(e)
						})
					}
				}, {
					key: "bind",
					value: function(e) {
						var t = this,
							n = t.el.querySelector(".vsmile-icons");
						v.on("click", n, function(e) {
							var n = t.el.querySelector(".veditor"),
								r = e.target.src;
							if (void 0 !== r) {
								var i = "!(:" + decodeURI(r).replace(/^.*\/(.*)$/, "$1") + ":)";
								if (document.selection) n.focus(), sel = document.selection.createRange(), sel.text = i, n.focus();
								else if (n.selectionStart || "0" == n.selectionStart) {
									var o = n.selectionStart,
										a = n.selectionEnd,
										s = a;
									n.value = n.value.substring(0, o) + i + n.value.substring(a, n.value.length), s += i.length, n.focus(),
										n.selectionStart = s, n.selectionEnd = s
								} else n.value += i, n.focus();
								u.comment = n.value;
								var l = t.el.querySelector(".vsubmit");
								l.getAttribute("disabled") && l.removeAttribute("disabled")
							}
						});
						var r = t.el.querySelector(".comment_trigger");
						v.on("click", r, function(e) {
							r.setAttribute("style", "display:none"), t.el.querySelector(".auth-section").removeAttribute("style"),
								t.el.querySelector(".veditor").focus()
						}), v.on("click", t.el.querySelector(".vcancel-comment-reply"), function(e) {
							t.reset()
						});
						var i = function(e) {
								e.offsetHeight > 180 && (e.classList.add("expand"), v.on("click", e, function(t) {
									e.setAttribute("class", "vcomment")
								}))
							},
							l = 1,
							c = 0,
							p = function e() {
								var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
								t.loading.show(), t.v.Query.doCloudQuery(
									"select nick, comment, link, rid, emailHash, isSpam\n                                                   from Comment\n                                                   where (rid='' or rid is not exists) and (url='" +
									u.url + "' or url='" + u.url +
									"/')\n                                                   order by -createdAt\n                                                   limit " +
									(n - 1) * h + "," + h).then(function(r) {
									r = r && r.results || [];
									var i = r.length;
									if (i) {
										for (var o = 0; o < i; o++)
											if (!r[o].get("isSpam")) {
												var a = m(r[o], t.el.querySelector(".vlist"), !1);
												a.setAttribute("style", "margin-bottom: .5em"), f(a)
											} var s = t.el.querySelector(".vpage");
										s.innerHTML = h * n < c ? '<div id="vmore" class="more">' + t.i18n.more + "</div>" : "";
										var u = s.querySelector("#vmore");
										u && v.on("click", u, function(t) {
											s.innerHTML = "", e(++l)
										})
									}
									t.loading.hide()
								}).catch(function(e) {
									console.log(e), t.loading.hide()
								})
							};
						t.v.Query.doCloudQuery(
							"select count(*)\n                                    from Comment\n                                    where (rid='' or rid is not exists) \n                                           and (url='" +
							u.url + "' or url='" + u.url + "/')\n                                    order by -createdAt").then(
							function(e) {
								c = e.count, p(1)
							});
						var f = function e(n) {
								var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
									i = n.querySelector(".vcomment-children"),
									o = i.querySelector(".vlist"),
									a = n.getAttribute("id");
								if (r <= 0 && i.setAttribute("style", "margin-left: 0 !important"), r >= d) return void t.v.Query.doCloudQuery(
									"select count(*)\n                               from Comment\n                               where rid='" +
									a + "' and (url='" + u.url + "' or url='" + u.url +
									"/')\n                               order by -createdAt").then(function(r) {
									if (r.count > 0) {
										var o = i.querySelector(".vshow-children-wrapper");
										o.setAttribute("style", "display: block !important;"), o.innerHTML =
											'<span class="vshow-children" rid="' + a + '">' + t.i18n.more + "</span>";
										var s = o.querySelector(".vshow-children");
										v.on("click", s, function(t) {
											o.setAttribute("style", "display: none !important;"), e(n, -1e3)
										})
									}
								}, function(e) {
									console.log(e)
								});
								t.v.Query.doCloudQuery(
									"select nick, comment, link, rid, emailHash, isSpam\n                           from Comment\n                           where rid='" +
									a + "' and (url='" + u.url + "' or url='" + u.url +
									"/')\n                           order by -createdAt").then(function(t) {
									t = t && t.results || [];
									var n = t.length;
									if (n)
										for (var i = 0; i < n; i++)
											if (!t[i].get("isSpam")) {
												var a = m(t[i], o, !0);
												e(a, r + 1)
											}
								}).catch(function(e) {})
							},
							m = function(e) {
								var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
									r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
									o = document.createElement("li");
								o.setAttribute("class", "vcard"), o.setAttribute("id", e.id);
								var a = e.get("emailHash"),
									s = "https://gravatar.loli.net/avatar/" + a +
									"?size=80&d=https%3a%2f%2fgravatar.loli.net%2favatar%2f9e63c80900d106cbbec5a9f4ea433a3e.jpg%3fsize%3d80";
								o.innerHTML =
									'<div class="vcomment-body">\n                                    <div class="vhead" >\n                                        <img class="vavatar" src="' +
									s + "\"/>\n                                        <a rid='" + e.id + "' at='@" + e.get("nick") +
									'\' class="vat" id="at-' + e.id + '">' + t.i18n.reply +
									'</a>\n                                        <div class="vmeta-info">\n                                            ' +
									(e.get("link") ? '<a class="vname" href="' + e.get("link") + '" target="_blank" rel="nofollow" > ' + e
										.get("nick") + "</a>" : '<span class="vname">' + e.get("nick") + "</span>") +
									"\n                                            " + (a != t.adminEmailHash ? "" :
										'<span class="spacer"></span><span class="vtime"><svg xmlns:xlink="http://www.w3.org/1999/xlink" p-id="1615"  xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" style="height: .8em;width: .8em;fill: #cc0e0e;" class="icon" t="1559101574545"><defs><style type="text/css"></style></defs><path d="M582.044306 993.554603l17.113098-99.494753-72.233191-70.442285c-25.072678-24.27672-34.027206-57.109988-24.07773-87.555383 9.949475-30.445394 36.41508-51.538282 70.840264-56.51302l87.356393-12.735328c-3.780801-2.586864-7.163622-5.173727-10.347454-7.95958-10.944423-9.551496-18.705014-19.699961-23.480762-30.047415s-7.561601-21.092888-8.15857-31.440342c-0.596969-10.546444 0-20.893898 1.989895-31.042363 1.392927-8.15857 3.581811-15.123202 6.168675-20.893898 2.586864-5.770696 5.969685-10.546444 10.148465-14.725223 4.17878-3.97979 8.755538-7.95958 14.327244-11.541391 5.571706-3.780801 11.143412-8.15857 17.312087-13.730276 5.372717-4.775748 10.148465-11.342402 14.725223-19.898951 4.17878-8.357559 8.15857-17.113098 11.541391-25.868636 3.382822-9.949475 6.566654-20.694909 9.153517-31.440342 6.765643-1.989895 13.133307-5.571706 19.301982-11.143412 5.372717-4.775748 10.148465-11.342402 14.725223-19.898951 4.17878-8.556549 7.561601-19.699961 9.551496-34.027206 1.392927-10.944423 1.193937-19.898951-0.397979-27.460552-1.591916-7.561601-3.97979-13.531286-6.566654-18.307035-2.586864-5.571706-6.367664-9.750486-11.143412-12.337349 0.596969-27.062573-0.994948-54.324135-5.173727-81.386708-3.183832-23.082783-9.153517-47.558492-17.710066-73.626117s-21.291877-49.946366-38.205985-71.636222c-7.561601-9.551496-17.312087-18.904003-29.649436-28.05752-11.93937-9.153517-26.067625-17.312087-41.588807-24.873688-15.720171-7.561601-32.43529-13.531286-50.344345-18.307035s-37.012048-7.163622-56.51302-7.163622c-15.720171 0-31.838321 1.591916-48.35445 4.17878-16.715119 2.984843-33.032258 7.561601-49.349398 14.327244-16.31714 6.765643-32.43529 16.11815-48.35445 28.05752s-30.246405 27.062573-43.180723 45.369607c-13.531286 19.500972-23.878741 41.588807-31.042363 66.064516-7.163622 24.475709-12.13836 47.558492-14.725223 69.248348-3.581811 25.868636-4.775748 51.737272-4.17878 77.406918-5.571706 6.964633-9.750486 13.929265-12.337349 21.490867-2.785853 6.765643-4.576759 14.725223-5.571706 23.878741-1.193937 9.153517 0 19.699961 3.382822 31.042363 3.581811 11.541391 7.561601 20.29693 12.337349 26.465604 4.775748 6.168675 9.153517 10.944423 13.332297 14.327244 4.775748 3.581811 9.551496 5.770696 14.327244 7.163622 3.382822 10.745433 6.765643 21.291877 10.148465 31.440342 3.382822 8.755538 6.964633 17.312087 11.143412 25.868636 4.17878 8.556549 8.755538 15.123202 14.327244 19.898951 11.740381 9.551496 21.888846 18.705014 31.042363 27.460552 9.153517 8.755538 14.327244 21.291877 15.720171 37.609017 0.596969 10.347454 0.994948 19.898951 0.994948 28.654489 0 8.954528-1.591916 17.312087-4.576759 25.470657-2.984843 8.15857-8.556549 16.31714-16.31714 24.475709-7.760591 8.15857-18.705014 16.715119-33.032258 25.470657-17.511077 11.541391-38.006996 20.29693-61.487757 26.465604-23.480762 6.168675-125.761368 41.389817-147.849203 48.951419-21.888846 7.362612-41.190828 17.511077-57.507967 30.445394-16.11815 12.735328-26.266615 31.838321-30.445394 56.910999C2.387875 881.52351 0.994949 888.488143 4.57676 916.346674c3.581811 27.659541 9.153517 44.17567 16.715119 49.747377 6.168675 4.576759 23.679751 10.148465 52.931209 16.715119 29.251457 6.566654 213.11776 41.190828 426.633501 41.190828 27.858531 0 54.722114-0.596969 80.59075-1.790906C580.253401 1012.856585 580.45239 1003.305088 582.044306 993.554603z" p-id="1616"></path><path d="M1004.300038 748.399532l-106.459386-15.521182c-16.31714-2.387874-35.619122-16.31714-42.981733-31.241353l-47.558492-96.509911c-3.581811-7.362612-8.556549-11.143412-13.332297-11.143412-4.775748 0-9.551496 3.780801-13.332297 11.143412l-47.558492 96.509911c-7.362612 14.725223-26.664594 28.853478-42.981733 31.241353l-106.459386 15.521182c-16.31714 2.387874-20.09794 13.730276-8.15857 25.271667l77.008939 75.019044c11.740381 11.541391 19.102993 34.226195 16.31714 50.543335l-18.108045 106.061407c-1.989895 11.740381 2.586864 18.705014 10.745433 18.705014 3.183832 0 6.765643-0.994948 10.745433-3.183832l95.116984-50.145356c7.362612-3.780801 16.914108-5.770696 26.465604-5.770696 9.551496 0 19.301982 1.989895 26.465604 5.770696l95.116984 50.145356c3.97979 2.188885 7.760591 3.183832 10.745433 3.183832 8.15857 0 12.735328-6.964633 10.745433-18.705014l-18.108045-106.061407c-2.785853-16.31714 4.576759-39.001943 16.31714-50.543335l77.008939-75.019044C1024.198988 762.129808 1020.617177 750.787406 1004.300038 748.399532z" p-id="1617"></path></svg></span>'
									) +
									'\n                                            <span class="spacer">路</span>\n                                            <span class="vtime">' +
									y(e.get("createdAt"), t.i18n) +
									'</span>\n                                        </div>\n                                    </div>\n                                    <section class="text-wrapper"  id="comment-' +
									e.id + '">\n                                        <div class="vcomment">' + e.get("comment") +
									'</div>\n                                    </section>\n                                </div>\n                                <div class="vcomment-children">\n                                    <div class="vshow-children-wrapper" style="display: none"></div>\n                                    <ul class="vlist" id="children-list-' +
									e.id + '"></ul>\n                                </div>';
								for (var l = n || t.el.querySelector(".vlist"), c = l.querySelectorAll("li"), u = o.querySelectorAll(
										"a"), p = 0, d = u.length; p < d; p++) {
									var h = u[p];
									h && "at" != h.getAttribute("class") && (h.setAttribute("target", "_blank"), h.setAttribute("rel",
										"nofollow"))
								}
								r ? l.insertBefore(o, c[0]) : l.appendChild(o);
								var f = o.querySelector(".vcomment");
								return i(f), $(o), o
							},
							x = {
								veditor: "comment",
								vnick: "nick",
								vlink: "link",
								vmail: "mail"
							},
							w = {};
						for (var k in x) x.hasOwnProperty(k) && function() {
							var e = x[k],
								n = t.el.querySelector("." + k);
							w[e] = n, v.on("input", n, function(t) {
								u[e] = n.value
							})
						}();
						var A = function() {
							var e = g && g.getItem("ValineCache");
							if (e) {
								e = JSON.parse(e);
								var n = ["nick", "link", "mail"];
								for (var r in n) {
									var i = n[r];
									t.el.querySelector(".v" + i).value = e[i], u[i] = e[i]
								}
								if ("" != e.mail) {
									t.el.querySelector(".visitor_avatar").setAttribute("src", "https://gravatar.loli.net/avatar/" + s(e.mail
											.toLowerCase().trim()) +
										"?size=80&d=https%3a%2f%2fgravatar.loli.net%2favatar%2f9e63c80900d106cbbec5a9f4ea433a3e.jpg%3fsize%3d80"
									)
								}
							}
						};
						A(), t.reset = function() {
							for (var e in x)
								if (x.hasOwnProperty(e)) {
									var n = x[e],
										r = t.el.querySelector("." + e);
									r.value = "", u[n] = ""
								} u.rid = "", u.nick = "", A(), C.getAttribute("triggered") && (C.setAttribute("style",
								"display:none;"), C.removeAttribute("triggered")), L.getAttribute("triggered") && (L.setAttribute(
								"style", "display:none;"), L.removeAttribute("triggered")), t.el.querySelector(
								".vcancel-comment-reply").setAttribute("style", "display:none"), t.el.querySelector(
								"#vinputs-placeholder").appendChild(t.el.querySelector(".vinputs-wrap"))
						};
						var S = t.el.querySelector(".vsubmit"),
							_ = function(n) {
								if (S.getAttribute("disabled")) return void t.alert.show({
									type: 0,
									text: '鍐嶇瓑绛夛紝璇勮姝ｅ湪鎻愪氦涓兙(喙戔暪鈼♀暪)锞�"',
									ctxt: "濂界殑"
								});
								if ("" == u.comment) return void w.comment.focus();
								if ("" == u.nick) return void w.nick.focus();
								if (u.comment = a(o(u.comment.replace(/!\(:(.*?\.\w+):\)/g, '<img src="' + e.emoticon_url +
										'/$1" alt="$1" class="vemoticon-img nofancybox">')), {
										onIgnoreTagAttr: function(e, t, n, r) {
											if ("class" === t) return t + '="' + a.escapeAttrValue(n) + '"'
										}
									}), u.comment.indexOf(u.at) > -1 && "" != u.at) {
									var r = '<a class="at" href=\'#' + u.rid + "'>" + u.at + "</a>";
									u.comment = u.comment.replace(u.at, r)
								}
								var i = b.mail(u.mail),
									s = b.link(u.link);
								u.mail = i.k ? i.v : "", u.link = s.k ? s.v : "", i.k && s.k ? I() : t.alert.show({
									type: 0,
									text: t.i18n.input_tips,
									ctxt: t.i18n.confirm
								})
							},
							z = t.el.querySelector(".vemoji-btn"),
							C = t.el.querySelector(".vsmile-icons");
						v.on("click", z, function(e) {
							L.getAttribute("triggered") && (L.setAttribute("style", "display:none;"), L.removeAttribute(
								"triggered")), C.getAttribute("triggered") ? (C.setAttribute("style", "display:none;"), C.removeAttribute(
								"triggered")) : (C.removeAttribute("style"), C.setAttribute("triggered", 1))
						});
						var T = t.el.querySelector(".vpreview-btn"),
							L = t.el.querySelector(".vpreview-text");
						v.on("click", T, function(t) {
							if (C.getAttribute("triggered") && (C.setAttribute("style", "display:none;"), C.removeAttribute(
									"triggered")), L.getAttribute("triggered")) L.setAttribute("style", "display:none;"), L.removeAttribute(
								"triggered");
							else {
								if ("" == u.comment) return void w.comment.focus();
								L.innerHTML = a(o(u.comment.replace(/!\(:(.*?\.\w+):\)/g, '<img src="' + e.emoticon_url +
									'/$1" alt="$1" class="vemoticon-img">')), {
									onIgnoreTagAttr: function(e, t, n, r) {
										if ("class" === t) return t + '="' + a.escapeAttrValue(n) + '"'
									}
								}), L.removeAttribute("style"), L.setAttribute("triggered", 1)
							}
						});
						var q = function() {
								var e = new t.v.ACL;
								return e.setPublicReadAccess(!0), e.setPublicWriteAccess(!1), e
							},
							I = function() {
								S.setAttribute("disabled", !0), t.submitting.show();
								var e = t.v.Object.extend("Comment"),
									n = new e;
								for (var r in u)
									if (u.hasOwnProperty(r)) {
										if ("at" === r) continue;
										var i = u[r];
										n.set(r, i)
									} n.set("emailHash", s(u.mail.toLowerCase().trim())), n.setACL(q()), n.save().then(function(e) {
									g && g.setItem("ValineCache", JSON.stringify({
										nick: u.nick,
										link: u.link,
										mail: u.mail
									}));
									var n = t.el.querySelector(".count");
									if (n.innerText = Number(n.innerText) + 1, "" === u.rid) m(e, null, !0);
									else {
										var r = t.el.querySelector("#children-list-" + u.rid);
										m(e, r, !0)
									}
									S.removeAttribute("disabled"), t.submitting.hide(), t.nodata.hide(), t.reset()
								}).catch(function(e) {
									t.submitting.hide()
								})
							},
							$ = function(e) {
								var n = e.getAttribute("id"),
									r = e.querySelector("#at-" + n);
								v.on("click", r, function(i) {
									var o = r.getAttribute("at"),
										a = r.getAttribute("rid");
									u.rid = a, u.at = o, w.comment.value = o + " 锛�" + w.comment.value, e.querySelector("#comment-" + n).appendChild(
										t.el.querySelector(".vinputs-wrap")), t.el.querySelector(".vcancel-comment-reply").removeAttribute(
										"style"), t.el.querySelector(".comment_trigger").setAttribute("style", "display:none"), t.el.querySelector(
										".auth-section").removeAttribute("style"), t.el.querySelector(".veditor").focus(), w.comment.focus()
								})
							};
						v.off("click", S, _), v.on("click", S, _)
					}
				}]), e
			}(),
			v = {
				on: function(e, t, n, r) {
					t.addEventListener ? t.addEventListener(e, n, r || !1) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" +
						e] = n
				},
				off: function(e, t, n, r) {
					t.removeEventListener ? t.removeEventListener(e, n, r || !1) : t.detachEvent ? t.detachEvent("on" + e, n) : t[
						"on" + e] = null
				}
			},
			b = {
				mail: function(e) {
					return {
						k: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(e),
						v: e
					}
				},
				link: function(e) {
					return e.length > 0 && (e = /^(http|https)/.test(e) ? e : "http://" + e), {
						k: !(e.length > 0) ||
							/(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:\/~\+#]*[\w\-\@?^=%&amp;\/~\+#])?/.test(e),
						v: e
					}
				}
			},
			y = function(e, t) {
				try {
					var n = e.getTime(),
						r = (new Date).getTime(),
						i = r - n,
						o = Math.floor(i / 864e5);
					if (0 === o) {
						var a = i % 864e5,
							s = Math.floor(a / 36e5);
						if (0 === s) {
							var l = a % 36e5,
								c = Math.floor(l / 6e4);
							if (0 === c) {
								var u = l % 6e4;
								return Math.round(u / 1e3) + " " + t.seconds
							}
							return c + " " + t.minutes
						}
						return s + " " + t.hours
					}
					return o < 0 ? t.now : o + " " + t.days
				} catch (e) {
					console.log(e)
				}
			},
			x = function() {
				$.getJSON("https://api.ipify.org/?format=json", function(e) {
					u.ip = e.ip
				})
			};
		e.exports = m
	}, function(e, t, n) {
		t = e.exports = n(13)(!1), t.push([e.i,
			'.valine {\n  /************ Loading ************/ }\n  .valine * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    font-size: 14px;\n    font-weight: normal;\n    line-height: 1.42857143;\n    color: #3c484e;\n    -webkit-transition: all .3s ease;\n    transition: all .3s ease;\n    margin: initial;\n    padding: initial; }\n  .valine .vemoticon-img {\n    display: inline-block;\n    max-height: 32px;\n    margin: 0 2px; }\n  .valine .vsubmitting {\n    margin: 1em 0; }\n  .valine .vcancel-comment-reply {\n    margin: 1.5em 0 .5em;\n    cursor: pointer;\n    color: #4b5b62;\n    text-decoration: underline; }\n  .valine .vinputs-area {\n    overflow: hidden;\n    position: relative;\n    border: 1px solid #ccc; }\n    .valine .vinputs-area .veditor-area {\n      position: inherit; }\n    .valine .vinputs-area .btn-wrap {\n      position: absolute !important;\n      right: 1.5em;\n      bottom: 0; }\n      .valine .vinputs-area .btn-wrap .vfunction-btn {\n        display: inline-block; }\n        .valine .vinputs-area .btn-wrap .vfunction-btn svg {\n          fill: #bbb;\n          cursor: pointer; }\n          .valine .vinputs-area .btn-wrap .vfunction-btn svg:hover {\n            fill: #777777; }\n          .valine .vinputs-area .btn-wrap .vfunction-btn svg:active {\n            fill: #777777; }\n    .valine .vinputs-area .vextra-area {\n      margin: .4em 0 .4em .5em; }\n      .valine .vinputs-area .vextra-area .vsmile-icons {\n        padding: .2em 0;\n        border-top: 1px solid #ededed;\n        border-radius: 0;\n        margin: .3em 0;\n        max-height: 64px;\n        overflow: auto; }\n        .valine .vinputs-area .vextra-area .vsmile-icons img {\n          display: inline-block;\n          width: auto !important;\n          height: 28px !important;\n          margin-right: 4px;\n          cursor: pointer; }\n      .valine .vinputs-area .vextra-area .vpreview-text {\n        border-top: 1px solid #ededed;\n        border-radius: 0;\n        padding: .5em .5em;\n        margin: .3em 0;\n        max-height: 10em;\n        overflow: auto; }\n    .valine .vinputs-area .textarea-wrapper {\n      color: #4b5b62;\n      width: 100%;\n      height: 100%;\n      background: #fff;\n      position: relative;\n      border-radius: 0; }\n      .valine .vinputs-area .textarea-wrapper .comment_trigger {\n        position: absolute;\n        z-index: 10;\n        width: 100%;\n        height: 100%;\n        background-color: #fff;\n        padding: 0 0 0 1.5em; }\n        .valine .vinputs-area .textarea-wrapper .comment_trigger .avatar {\n          position: absolute;\n          width: 36px;\n          height: 36px;\n          position: absolute;\n          top: 50%;\n          -webkit-transform: translateY(-50%);\n                  transform: translateY(-50%); }\n          .valine .vinputs-area .textarea-wrapper .comment_trigger .avatar img {\n            border-radius: 100%;\n            width: 36px;\n            height: 36px; }\n        .valine .vinputs-area .textarea-wrapper .comment_trigger .trigger_title {\n          position: absolute;\n          top: 50%;\n          -webkit-transform: translateY(-50%);\n                  transform: translateY(-50%);\n          color: #aaa;\n          font-size: 1.4em;\n          margin-left: 3.5em; }\n      .valine .vinputs-area .textarea-wrapper textarea {\n        padding: 1em 1em 0;\n        color: #4b5b62;\n        width: 100%;\n        background: #fff;\n        border: none;\n        resize: none;\n        min-height: 6em;\n        margin: 0; }\n        .valine .vinputs-area .textarea-wrapper textarea:focus {\n          border-color: #c4c8cb;\n          outline: 0; }\n    .valine .vinputs-area .trigger-section {\n      display: none; }\n    .valine .vinputs-area .auth-section {\n      display: -webkit-box;\n      display: flex;\n      display: -ms-flexbox;\n      background: #fbfbfb;\n      padding: .3em .6em; }\n      .valine .vinputs-area .auth-section .input-wrapper {\n        -ms-flex: 1 1 27%;\n        -webkit-box-flex: 1;\n                flex: 1 1 27%;\n        width: 27%; }\n        .valine .vinputs-area .auth-section .input-wrapper input {\n          color: #4b5b62;\n          background: #fafafa;\n          border: none;\n          border-radius: 0;\n          padding: .6em;\n          margin: 0;\n          line-height: 2;\n          font-size: 1em !important; }\n          .valine .vinputs-area .auth-section .input-wrapper input:focus {\n            border-color: #c4c8cb;\n            outline: 0; }\n      .valine .vinputs-area .auth-section input {\n        width: 100%; }\n      .valine .vinputs-area .auth-section .post-action {\n        -ms-flex: 1 1 19%;\n        -webkit-box-flex: 1;\n                flex: 1 1 19%;\n        width: 19%;\n        margin: 0;\n        padding: 2px 0 0; }\n        .valine .vinputs-area .auth-section .post-action button {\n          color: #fff;\n          width: 100%;\n          line-height: 2;\n          font-weight: bolder;\n          border-radius: 30px;\n          border: 1px solid #e9eff3;\n          background-color: #111;\n          padding: .4em .5em;\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          appearance: none;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n          font-size: 1em !important; }\n        .valine .vinputs-area .auth-section .post-action button:hover {\n          background-color: #444; }\n      @media screen and (max-width: 720px) {\n        .valine .vinputs-area .auth-section {\n          display: block; }\n          .valine .vinputs-area .auth-section .input-wrapper, .valine .vinputs-area .auth-section .post-action {\n            -ms-flex: 1 1 100%;\n            -webkit-box-flex: 1;\n                    flex: 1 1 100%;\n            padding-right: 0;\n            width: 100%; } }\n    .valine .vinputs-area .vmark {\n      position: absolute;\n      background: rgba(0, 0, 0, 0.65);\n      width: 100%;\n      height: 100%;\n      left: 0;\n      top: 0; }\n      .valine .vinputs-area .vmark .valert {\n        padding: 2em 0 0 0; }\n        .valine .vinputs-area .vmark .valert .vtext {\n          color: #fff;\n          padding: 15px; }\n        .valine .vinputs-area .vmark .valert .vcode {\n          width: 75px;\n          border-radius: 5px;\n          background: #dedede; }\n          .valine .vinputs-area .vmark .valert .vcode:focus {\n            border-color: #3090e4;\n            background-color: #fff; }\n      @media screen and (max-width: 720px) {\n        .valine .vinputs-area .vmark .valert {\n          padding: 8em 0; }\n          .valine .vinputs-area .vmark .valert .vtext {\n            color: #fff;\n            padding: 10px; } }\n  .valine .info {\n    margin: 2em 0;\n    font-size: 16px;\n    line-height: 1;\n    position: relative;\n    text-align: center; }\n    .valine .info::before {\n      display: block;\n      content: \'\';\n      border-top: 1px solid rgba(150, 150, 150, 0.08);\n      margin: 0 25%;\n      position: relative;\n      top: 10px;\n      z-index: 1; }\n    .valine .info svg {\n      margin-right: 2px;\n      overflow: hidden;\n      fill: currentColor; }\n    .valine .info .col {\n      display: inline-block;\n      padding: 0 20px;\n      position: relative;\n      background: #ffffff;\n      z-index: 2; }\n  .valine .power {\n    color: #999;\n    font-size: 0.625em !important;\n    position: relative; }\n  .valine a {\n    text-decoration: none;\n    color: #3eb0ef;\n    border: none; }\n  .valine .txt-center {\n    text-align: center; }\n  .valine .float-right {\n    float: right !important; }\n  .valine .pd5 {\n    padding: 5px; }\n  .valine .pd10 {\n    padding: 10px; }\n  .valine .vbtn {\n    display: inline-block;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border: 1px solid #e9eff3;\n    background-color: #333;\n    border-radius: .1em;\n    color: #fff;\n    padding: .5em 1.5em;\n    cursor: pointer;\n    white-space: nowrap;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    outline: none;\n    min-width: 60px;\n    max-width: 100%;\n    margin: 0 1em; }\n  .valine .vbtn:active,\n  .valine .vbtn:hover {\n    border-color: #666; }\n  .valine .vpage {\n    margin: 1.5em 0; }\n    .valine .vpage .more {\n      width: 100%;\n      height: 2.5em;\n      line-height: 2.5em;\n      text-align: center;\n      cursor: pointer;\n      color: #666;\n      background: #fafafa;\n      border-radius: 1.25em; }\n  .valine .vlist {\n    width: 100%;\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n    .valine .vlist .vcard {\n      list-style: none;\n      word-break: break-all; }\n      .valine .vlist .vcard .vcomment-body {\n        padding: 2em .5em 2em;\n        border-top: 1px solid rgba(150, 150, 150, 0.08); }\n        @media screen and (max-width: 600px) {\n          .valine .vlist .vcard .vcomment-body {\n            padding: 1em 1em 1em;\n            border-top: 0 !important; } }\n        .valine .vlist .vcard .vcomment-body:hover .vat {\n          background: #111 !important; }\n        .valine .vlist .vcard .vcomment-body .vat {\n          float: right;\n          background: #126b22f0;\n          color: #ffffff;\n          padding: .2em 1em;\n          line-height: 1.2;\n          cursor: pointer;\n          word-break: keep-all;\n          white-space: nowrap;\n          text-transform: uppercase; }\n        .valine .vlist .vcard .vcomment-body .vavatar {\n          margin-right: 1em;\n          margin-top: 0.1em;\n          display: inline-block;\n          height: 36px;\n          width: 36px;\n          position: absolute;\n          top: 0;\n          border-radius: 50%; }\n        .valine .vlist .vcard .vcomment-body .vhead {\n          line-height: 1;\n          display: block;\n          margin-bottom: .3em;\n          position: relative; }\n          .valine .vlist .vcard .vcomment-body .vhead .vmeta-info {\n            margin: 0 0 0 48px; }\n          .valine .vlist .vcard .vcomment-body .vhead .vname {\n            font-weight: bolder;\n            font-size: 1em;\n            color: rgba(0, 0, 0, 0.7); }\n          .valine .vlist .vcard .vcomment-body .vhead .spacer {\n            color: #ccc;\n            margin-left: 0.3em;\n            margin-right: 0.3em; }\n          .valine .vlist .vcard .vcomment-body .vhead .vtime {\n            color: #a9a4a4;\n            display: inline-block;\n            font-weight: normal;\n            font-size: 90%; }\n        .valine .vlist .vcard .vcomment-body .text-wrapper {\n          overflow: hidden;\n          -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n          margin-left: 48px; }\n          .valine .vlist .vcard .vcomment-body .text-wrapper .vcomment {\n            position: relative;\n            overflow: auto; }\n            .valine .vlist .vcard .vcomment-body .text-wrapper .vcomment blockquote p {\n              padding-left: 12px; }\n            .valine .vlist .vcard .vcomment-body .text-wrapper .vcomment p {\n              word-wrap: break-word;\n              white-space: pre-wrap;\n              word-break: break-all;\n              text-align: justify;\n              line-height: 1.8; }\n            .valine .vlist .vcard .vcomment-body .text-wrapper .vcomment pre {\n              overflow: auto;\n              padding: 6px 10px;\n              word-wrap: break-word;\n              color: #555;\n              background: #f5f2f2;\n              border-radius: 3px;\n              font-size: .875rem;\n              margin: 5px 0; }\n            .valine .vlist .vcard .vcomment-body .text-wrapper .vcomment.expand {\n              cursor: pointer;\n              max-height: 11.25rem;\n              overflow: hidden; }\n              .valine .vlist .vcard .vcomment-body .text-wrapper .vcomment.expand:before {\n                display: block;\n                content: "";\n                position: absolute;\n                width: 100%;\n                left: 0;\n                top: 0;\n                bottom: 3.15rem;\n                pointer-events: none;\n                background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, 0.8)));\n                background: linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8)); }\n              .valine .vlist .vcard .vcomment-body .text-wrapper .vcomment.expand:after {\n                display: block;\n                content: "";\n                text-align: center;\n                color: #828586;\n                position: absolute;\n                width: 100%;\n                height: 3.15rem;\n                line-height: 3.15rem;\n                left: 0;\n                bottom: 0;\n                pointer-events: none;\n                background: rgba(255, 255, 255, 0.9); }\n      .valine .vlist .vcard .vcomment-children {\n        margin-left: 48px; }\n        @media screen and (max-width: 600px) {\n          .valine .vlist .vcard .vcomment-children {\n            margin-left: 16px;\n            border-left: 1px solid rgba(150, 150, 150, 0.08); } }\n        .valine .vlist .vcard .vcomment-children .vshow-children-wrapper {\n          margin: 0 0 2em; }\n          .valine .vlist .vcard .vcomment-children .vshow-children-wrapper .vshow-children {\n            color: #4b5b62;\n            text-decoration: underline;\n            cursor: pointer; }\n    .valine .vlist .vempty {\n      padding: 20px;\n      text-align: center;\n      color: #999; }\n  .valine .spinner {\n    margin: 10px auto;\n    width: 50px;\n    height: 30px;\n    text-align: center;\n    font-size: 10px; }\n  .valine .spinner > div {\n    background-color: #9c9c9c;\n    height: 100%;\n    width: 6px;\n    margin-right: 3px;\n    display: inline-block;\n    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n    animation: sk-stretchdelay 1.2s infinite ease-in-out; }\n  .valine .spinner .r2 {\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s; }\n  .valine .spinner .r3 {\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s; }\n  .valine .spinner .r4 {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s; }\n  .valine .spinner .r5 {\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s; }\n\n@-webkit-keyframes sk-stretchdelay {\n  0%,\n  40%,\n  100% {\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1); } }\n\n@keyframes sk-stretchdelay {\n  0%,\n  40%,\n  100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1); } }\n',
			""
		])
	}, function(e, t) {
		function n(e, t) {
			var n = e[1] || "",
				i = e[3];
			if (!i) return n;
			if (t && "function" == typeof btoa) {
				var o = r(i);
				return [n].concat(i.sources.map(function(e) {
					return "/*# sourceURL=" + i.sourceRoot + e + " */"
				})).concat([o]).join("\n")
			}
			return [n].join("\n")
		}

		function r(e) {
			return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(
				JSON.stringify(e)))) + " */"
		}
		e.exports = function(e) {
			var t = [];
			return t.toString = function() {
				return this.map(function(t) {
					var r = n(t, e);
					return t[2] ? "@media " + t[2] + "{" + r + "}" : r
				}).join("")
			}, t.i = function(e, n) {
				"string" == typeof e && (e = [
					[null, e, ""]
				]);
				for (var r = {}, i = 0; i < this.length; i++) {
					var o = this[i][0];
					"number" == typeof o && (r[o] = !0)
				}
				for (i = 0; i < e.length; i++) {
					var a = e[i];
					"number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
						t.push(a))
				}
			}, t
		}
	}, function(e, t, n) {
		function r(e) {
			return void 0 === e || null === e
		}

		function i(e) {
			var t = {};
			for (var n in e) t[n] = e[n];
			return t
		}

		function o(e) {
			e = i(e || {}), e.whiteList = e.whiteList || a.whiteList, e.onAttr = e.onAttr || a.onAttr, e.onIgnoreAttr = e.onIgnoreAttr ||
				a.onIgnoreAttr, e.safeAttrValue = e.safeAttrValue || a.safeAttrValue, this.options = e
		}
		var a = n(2),
			s = n(15);
		n(3);
		o.prototype.process = function(e) {
			if (e = e || "", !(e = e.toString())) return "";
			var t = this,
				n = t.options,
				i = n.whiteList,
				o = n.onAttr,
				a = n.onIgnoreAttr,
				l = n.safeAttrValue;
			return s(e, function(e, t, n, s, c) {
				var u = i[n],
					p = !1;
				if (!0 === u ? p = u : "function" == typeof u ? p = u(s) : u instanceof RegExp && (p = u.test(s)), !0 !== p &&
					(p = !1), s = l(n, s)) {
					var d = {
						position: t,
						sourcePosition: e,
						source: c,
						isWhite: p
					};
					if (p) {
						var h = o(n, s, d);
						return r(h) ? n + ":" + s : h
					}
					var h = a(n, s, d);
					return r(h) ? void 0 : h
				}
			})
		}, e.exports = o
	}, function(e, t, n) {
		function r(e, t) {
			function n() {
				if (!o) {
					var n = i.trim(e.slice(a, s)),
						r = n.indexOf(":");
					if (-1 !== r) {
						var c = i.trim(n.slice(0, r)),
							u = i.trim(n.slice(r + 1));
						if (c) {
							var p = t(a, l.length, c, u, n);
							p && (l += p + "; ")
						}
					}
				}
				a = s + 1
			}
			e = i.trimRight(e), ";" !== e[e.length - 1] && (e += ";");
			for (var r = e.length, o = !1, a = 0, s = 0, l = ""; s < r; s++) {
				var c = e[s];
				if ("/" === c && "*" === e[s + 1]) {
					var u = e.indexOf("*/", s + 2);
					if (-1 === u) break;
					s = u + 1, a = s + 1, o = !1
				} else "(" === c ? o = !0 : ")" === c ? o = !1 : ";" === c ? o || n() : "\n" === c && n()
			}
			return i.trim(l)
		}
		var i = n(3);
		e.exports = r
	}, function(e, t, n) {
		function r(e, t) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n],
					i = f[r.id];
				if (i) {
					i.refs++;
					for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]);
					for (; o < r.parts.length; o++) i.parts.push(u(r.parts[o], t))
				} else {
					for (var a = [], o = 0; o < r.parts.length; o++) a.push(u(r.parts[o], t));
					f[r.id] = {
						id: r.id,
						refs: 1,
						parts: a
					}
				}
			}
		}

		function i(e, t) {
			for (var n = [], r = {}, i = 0; i < e.length; i++) {
				var o = e[i],
					a = t.base ? o[0] + t.base : o[0],
					s = o[1],
					l = o[2],
					c = o[3],
					u = {
						css: s,
						media: l,
						sourceMap: c
					};
				r[a] ? r[a].parts.push(u) : n.push(r[a] = {
					id: a,
					parts: [u]
				})
			}
			return n
		}

		function o(e, t) {
			var n = m(e.insertInto);
			if (!n) throw new Error(
				"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
			);
			var r = y[y.length - 1];
			if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(
				t, n.firstChild), y.push(t);
			else {
				if ("bottom" !== e.insertAt) throw new Error(
					"Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
				n.appendChild(t)
			}
		}

		function a(e) {
			if (null === e.parentNode) return !1;
			e.parentNode.removeChild(e);
			var t = y.indexOf(e);
			t >= 0 && y.splice(t, 1)
		}

		function s(e) {
			var t = document.createElement("style");
			return e.attrs.type = "text/css", c(t, e.attrs), o(e, t), t
		}

		function l(e) {
			var t = document.createElement("link");
			return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", c(t, e.attrs), o(e, t), t
		}

		function c(e, t) {
			Object.keys(t).forEach(function(n) {
				e.setAttribute(n, t[n])
			})
		}

		function u(e, t) {
			var n, r, i, o;
			if (t.transform && e.css) {
				if (!(o = t.transform(e.css))) return function() {};
				e.css = o
			}
			if (t.singleton) {
				var c = b++;
				n = v || (v = s(t)), r = p.bind(null, n, c, !1), i = p.bind(null, n, c, !0)
			} else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" ==
				typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t), r = h.bind(
					null, n, t), i = function() {
					a(n), n.href && URL.revokeObjectURL(n.href)
				}) : (n = s(t), r = d.bind(null, n), i = function() {
					a(n)
				});
			return r(e),
				function(t) {
					if (t) {
						if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
						r(e = t)
					} else i()
				}
		}

		function p(e, t, n, r) {
			var i = n ? "" : r.css;
			if (e.styleSheet) e.styleSheet.cssText = w(t, i);
			else {
				var o = document.createTextNode(i),
					a = e.childNodes;
				a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
			}
		}

		function d(e, t) {
			var n = t.css,
				r = t.media;
			if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;
			else {
				for (; e.firstChild;) e.removeChild(e.firstChild);
				e.appendChild(document.createTextNode(n))
			}
		}

		function h(e, t, n) {
			var r = n.css,
				i = n.sourceMap,
				o = void 0 === t.convertToAbsoluteUrls && i;
			(t.convertToAbsoluteUrls || o) && (r = x(r)), i && (r += "\n/*# sourceMappingURL=data:application/json;base64," +
				btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
			var a = new Blob([r], {
					type: "text/css"
				}),
				s = e.href;
			e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
		}
		var f = {},
			g = function(e) {
				var t;
				return function() {
					return void 0 === t && (t = e.apply(this, arguments)), t
				}
			}(function() {
				return window && document && document.all && !window.atob
			}),
			m = function(e) {
				var t = {};
				return function(n) {
					return void 0 === t[n] && (t[n] = e.call(this, n)), t[n]
				}
			}(function(e) {
				return document.querySelector(e)
			}),
			v = null,
			b = 0,
			y = [],
			x = n(17);
		e.exports = function(e, t) {
			if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error(
				"The style-loader cannot be used in a non-browser environment");
			t = t || {}, t.attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = g()), t.insertInto ||
				(t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
			var n = i(e, t);
			return r(n, t),
				function(e) {
					for (var o = [], a = 0; a < n.length; a++) {
						var s = n[a],
							l = f[s.id];
						l.refs--, o.push(l)
					}
					if (e) {
						r(i(e, t), t)
					}
					for (var a = 0; a < o.length; a++) {
						var l = o[a];
						if (0 === l.refs) {
							for (var c = 0; c < l.parts.length; c++) l.parts[c]();
							delete f[l.id]
						}
					}
				}
		};
		var w = function() {
			var e = [];
			return function(t, n) {
				return e[t] = n, e.filter(Boolean).join("\n")
			}
		}()
	}, function(e, t) {
		e.exports = function(e) {
			var t = "undefined" != typeof window && window.location;
			if (!t) throw new Error("fixUrls requires window.location");
			if (!e || "string" != typeof e) return e;
			var n = t.protocol + "//" + t.host,
				r = n + t.pathname.replace(/\/[^\/]*$/, "/");
			return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
				var i = t.trim().replace(/^"(.*)"$/, function(e, t) {
					return t
				}).replace(/^'(.*)'$/, function(e, t) {
					return t
				});
				if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)) return e;
				var o;
				return o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" +
					JSON.stringify(o) + ")"
			})
		}
	}, function(e, t) {
		var n;
		n = function() {
			return this
		}();
		try {
			n = n || Function("return this")() || (0, eval)("this")
		} catch (e) {
			"object" == typeof window && (n = window)
		}
		e.exports = n
	}, function(e, t, n) {
		function r(e) {
			return void 0 === e || null === e
		}

		function i(e) {
			var t = d.spaceIndex(e);
			if (-1 === t) return {
				html: "",
				closing: "/" === e[e.length - 2]
			};
			e = d.trim(e.slice(t + 1, -1));
			var n = "/" === e[e.length - 1];
			return n && (e = d.trim(e.slice(0, -1))), {
				html: e,
				closing: n
			}
		}

		function o(e) {
			var t = {};
			for (var n in e) t[n] = e[n];
			return t
		}

		function a(e) {
			e = o(e || {}), e.stripIgnoreTag && (e.onIgnoreTag && console.error(
						'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'), e.onIgnoreTag = l
					.onIgnoreTagStripAll), e.whiteList = e.whiteList || l.whiteList, e.onTag = e.onTag || l.onTag, e.onTagAttr = e
				.onTagAttr || l.onTagAttr, e.onIgnoreTag = e.onIgnoreTag || l.onIgnoreTag, e.onIgnoreTagAttr = e.onIgnoreTagAttr ||
				l.onIgnoreTagAttr, e.safeAttrValue = e.safeAttrValue || l.safeAttrValue, e.escapeHtml = e.escapeHtml || l.escapeHtml,
				this.options = e, !1 === e.css ? this.cssFilter = !1 : (e.css = e.css || {}, this.cssFilter = new s(e.css))
		}
		var s = n(0).FilterCSS,
			l = n(4),
			c = n(5),
			u = c.parseTag,
			p = c.parseAttr,
			d = n(1);
		a.prototype.process = function(e) {
			if (e = e || "", !(e = e.toString())) return "";
			var t = this,
				n = t.options,
				o = n.whiteList,
				a = n.onTag,
				s = n.onIgnoreTag,
				c = n.onTagAttr,
				h = n.onIgnoreTagAttr,
				f = n.safeAttrValue,
				g = n.escapeHtml,
				m = t.cssFilter;
			n.stripBlankChar && (e = l.stripBlankChar(e)), n.allowCommentTag || (e = l.stripCommentTag(e));
			var v = !1;
			if (n.stripIgnoreTagBody) {
				var v = l.StripTagBody(n.stripIgnoreTagBody, s);
				s = v.onIgnoreTag
			}
			var b = u(e, function(e, t, n, l, u) {
				var v = {
						sourcePosition: e,
						position: t,
						isClosing: u,
						isWhite: o.hasOwnProperty(n)
					},
					b = a(n, l, v);
				if (!r(b)) return b;
				if (v.isWhite) {
					if (v.isClosing) return "</" + n + ">";
					var y = i(l),
						x = o[n],
						w = p(y.html, function(e, t) {
							var i = -1 !== d.indexOf(x, e),
								o = c(n, e, t, i);
							if (!r(o)) return o;
							if (i) return t = f(n, e, t, m), t ? e + '="' + t + '"' : e;
							var o = h(n, e, t, i);
							return r(o) ? void 0 : o
						}),
						l = "<" + n;
					return w && (l += " " + w), y.closing && (l += " /"), l += ">"
				}
				var b = s(n, l, v);
				return r(b) ? g(l) : b
			}, g);
			return v && (b = v.remove(b)), b
		}, e.exports = a
	}])
});
