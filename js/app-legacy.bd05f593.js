(function(e) {
    function t(t) { for (var n, c, o = t[0], s = t[1], u = t[2], f = 0, d = []; f < o.length; f++) c = o[f], Object.prototype.hasOwnProperty.call(a, c) && a[c] && d.push(a[c][0]), a[c] = 0; for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
        l && l(t); while (d.length) d.shift()(); return i.push.apply(i, u || []), r() }

    function r() { for (var e, t = 0; t < i.length; t++) { for (var r = i[t], n = !0, o = 1; o < r.length; o++) { var s = r[o];
                0 !== a[s] && (n = !1) }
            n && (i.splice(t--, 1), e = c(c.s = r[0])) } return e } var n = {},
        a = { app: 0 },
        i = [];

    function c(t) { if (n[t]) return n[t].exports; var r = n[t] = { i: t, l: !1, exports: {} }; return e[t].call(r.exports, r, r.exports, c), r.l = !0, r.exports }
    c.m = e, c.c = n, c.d = function(e, t, r) { c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, c.r = function(e) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, c.t = function(e, t) { if (1 & t && (e = c(e)), 8 & t) return e; if (4 & t && "object" === typeof e && e && e.__esModule) return e; var r = Object.create(null); if (c.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var n in e) c.d(r, n, function(t) { return e[t] }.bind(null, n)); return r }, c.n = function(e) { var t = e && e.__esModule ? function() { return e["default"] } : function() { return e }; return c.d(t, "a", t), t }, c.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, c.p = ""; var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
        s = o.push.bind(o);
    o.push = t, o = o.slice(); for (var u = 0; u < o.length; u++) t(o[u]); var l = s;
    i.push([0, "chunk-vendors"]), r() })({ 0: function(e, t, r) { e.exports = r("cd49") }, "0565": function(e, t, r) { "use strict";
        (function(e) { var n = r("1da1"),
                a = (r("96cf"), r("99af"), r("b0c0"), r("7327")),
                i = r("731b"),
                c = r("25f1"),
                o = r("eaa5"),
                s = r("73ec");
            t["a"] = { name: "FileSelector", data: function() { return { task_all: 0, task_finished: 0, queue: new s["a"], parallel: !1 } }, computed: { progress_value: function() { return this.task_all ? this.task_finished / this.task_all * 100 : 0 }, progress_show: function() { return this.task_all !== this.task_finished } }, mounted: function() { window.Worker && "file:" !== window.location.protocol ? (console.log("Using Worker Pool"), this.queue = Object(a["a"])((function() { return Object(i["a"])(new c["a"](e)) }), navigator.hardwareConcurrency || 1), this.parallel = !0) : console.log("Using Queue in Main Thread") }, methods: { progress_string: function() { return "".concat(this.task_finished, " / ").concat(this.task_all) }, addFile: function(e) { var t = this; return Object(n["a"])(regeneratorRuntime.mark((function r() { return regeneratorRuntime.wrap((function(r) { while (1) switch (r.prev = r.next) {
                                    case 0:
                                        t.task_all++, t.queue.queue(Object(n["a"])(regeneratorRuntime.mark((function r() { var n, a = arguments; return regeneratorRuntime.wrap((function(r) { while (1) switch (r.prev = r.next) {
                                                    case 0:
                                                        return n = a.length > 0 && void 0 !== a[0] ? a[0] : o["a"], console.log("start handling", e.name), r.prev = 2, r.t0 = t, r.next = 6, n(e);
                                                    case 6:
                                                        r.t1 = r.sent, r.t0.$emit.call(r.t0, "success", r.t1), r.next = 14; break;
                                                    case 10:
                                                        r.prev = 10, r.t2 = r["catch"](2), console.error(r.t2), t.$emit("error", r.t2, e.name);
                                                    case 14:
                                                        return r.prev = 14, t.task_finished++, r.finish(14);
                                                    case 17:
                                                    case "end":
                                                        return r.stop() } }), r, null, [
                                                [2, 10, 14, 17]
                                            ]) }))));
                                    case 2:
                                    case "end":
                                        return r.stop() } }), r) })))() } } } }).call(this, r("2e83")) }, 1: function(e, t) {}, 2: function(e, t) {}, "2e83": function(e, t, r) { e.exports = r.p + "js/0-legacy.24b17fed.worker.js" }, 3: function(e, t) {}, 3349: function(e, t, r) { "use strict";
        r.d(t, "a", (function() { return f })), r.d(t, "d", (function() { return d })), r.d(t, "b", (function() { return b })), r.d(t, "c", (function() { return m }));
        r("159b"), r("ace4"), r("d3b7"), r("5cc6"), r("9a8c"), r("a975"), r("735e"), r("c1ac"), r("d139"), r("3a7b"), r("d5d6"), r("82f8"), r("e91f"), r("60bd"), r("5f96"), r("3280"), r("3fcc"), r("ca91"), r("25a1"), r("cd26"), r("3c5d"), r("2954"), r("649e"), r("219c"), r("170b"), r("b39a"), r("72f7"), r("a630"), r("3ca3"), r("fb6a"), r("b64b"), r("a9e3"), r("99af"); var n = r("cc74"),
            a = [79, 103, 103, 83, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0, 255, 255, 255, 255, 1, 30, 1, 118, 111, 114, 98, 105, 115, 0, 0, 0, 0, 2, 68, 172, 0, 0, 0, 0, 0, 0, 0, 238, 2, 0, 0, 0, 0, 0, 184, 1, 79, 103, 103, 83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 1, 0, 0, 0, 255, 255, 255, 255],
            i = [3, 118, 111, 114, 98, 105, 115, 44, 0, 0, 0, 88, 105, 112, 104, 46, 79, 114, 103, 32, 108, 105, 98, 86, 111, 114, 98, 105, 115, 32, 73, 32, 50, 48, 49, 53, 48, 49, 48, 53, 32, 40, 226, 155, 132, 226, 155, 132, 226, 155, 132, 226, 155, 132, 41, 255, 0, 0, 0, 255, 0, 0, 0, 84, 73, 84, 76, 69, 61],
            c = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 9, 9, 9, 9, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 6, 3, 3, 3, 3, 6, 6, 6, 6, 3, 3, 3, 3, 6, 6, 6, 6, 6, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 9, 9, 9, 9, 0, 0, 0, 0],
            o = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 3, 3, 0, 1, 3, 3, 3, 3, 3, 3, 3, 3],
            s = [222, 81, 250, 195, 74, 214, 202, 144, 126, 103, 94, 247, 213, 82, 132, 216, 71, 149, 187, 161, 170, 198, 102, 35, 146, 98, 243, 116, 161, 159, 244, 160, 29, 63, 91, 240, 19, 14, 9, 61, 249, 188, 0, 17],
            u = [],
            l = [];
        (function() { for (var e = 0; e < 128; e++) { var t = (e * e + 27) % 256;
                t in u ? u[t].push(e) : u[t] = [e] } var r = 0;
            u.forEach((function(e) { e.forEach((function(e) { l[e] = r })), r++ })) })(); var f = function() {
            function e(e) { if (e instanceof Uint8Array && (e = Array.from(e)), 44 === e.length) this.Matrix128 = this._generate128(e);
                else { if (128 !== e.length) throw Error("invalid mask length");
                    this.Matrix128 = e } } return e.prototype.getMatrix128 = function() { return this.Matrix128 }, e.prototype.getMatrix44 = function() { var e = this,
                    t = [],
                    r = 0; return u.forEach((function(n) { for (var a = n.length, i = 1; i < a; i++)
                        if (e.Matrix128[n[0]] !== e.Matrix128[n[i]]) throw "decode mask-128 to mask-44 failed";
                    t[r] = e.Matrix128[n[0]], r++ })), t }, e.prototype.Decrypt = function(e) { if (!this.Matrix128) throw Error("bad call sequence"); for (var t = e.slice(0), r = -1, n = -1, a = 0; a < e.length; a++) r++, n++, (32768 === r || r > 32768 && (r + 1) % 32768 === 0) && (r++, n++), n >= 128 && (n -= 128), t[a] ^= this.Matrix128[n]; return t }, e.prototype._generate128 = function(e) { var t = [],
                    r = 0; return u.forEach((function(n) { n.forEach((function(n) { t[n] = e[r] })), r++ })), t }, e }();

        function d() { return new f(s) }

        function b(e) { for (var t = Math.min(32768, e.length), r = 0; r < t; r += 128) try { var a = new f(e.slice(r, r + 128)); if (Object(n["b"])(a.Decrypt(e.slice(0, n["c"].length)), n["c"])) return a } catch (i) {} }

        function m(e) { if (!(e.length < 256)) { for (var t = {}, r = 0; r < 44; r++) t[r] = {}; for (var i = e[84] ^ e[12] ^ a[12], c = p(i), o = v(i), s = 0; s < c.length; s++)
                    if (0 !== o[s]) { var u = l[s % 128],
                            d = e[s] ^ c[s],
                            b = o[s];
                        d in t[u] ? t[u][d] += b : t[u][d] = b }
                var m = []; try { for (r = 0; r < 44; r++) m[r] = h(t[r]) } catch (w) { return } var g = new f(m); return Object(n["b"])(g.Decrypt(e.slice(0, n["h"].length)), n["h"]) ? g : void 0 } }

        function h(e) { var t = Object.keys(e).length; if (0 === t) throw "can not match at least one key";
            t > 1 && console.warn("There are 2 potential value for the mask!"); var r = "",
                n = 0; for (var a in e) e[a] > n && (r = a, n = e[a]); return Number(r) }

        function p(e) { for (var t = [e, 255], r = 2; r < e; r++) t.push(255); return t.push(255), a.concat(t, i) }

        function v(e) { for (var t = [6, 0], r = 2; r < e; r++) t.push(4); return t.push(0), c.concat(t, o) } }, 4: function(e, t) {}, 5: function(e, t) {}, "5c0b": function(e, t, r) { "use strict";
        r("9c0c") }, 6: function(e, t) {}, "6d95": function(e, t, r) { "use strict";
        (function(e) { r.d(t, "a", (function() { return _ }));
            r("d3b7"), r("ace4"), r("5cc6"), r("9a8c"), r("a975"), r("735e"), r("c1ac"), r("d139"), r("3a7b"), r("d5d6"), r("82f8"), r("e91f"), r("60bd"), r("5f96"), r("3280"), r("3fcc"), r("ca91"), r("25a1"), r("cd26"), r("3c5d"), r("2954"), r("649e"), r("219c"), r("170b"), r("b39a"), r("72f7"), r("d81d"), r("fb6a"), r("ddb0"), r("25f0"), r("ac1f"), r("5319"), r("159b"), r("4de4"), r("1276"), r("498a"), r("a15b"), r("3ca3"), r("2b3d"); var n = r("9ab4"),
                a = r("cc74"),
                i = r("cb96"),
                c = r("ef21"),
                o = r.n(c),
                s = r("c198"),
                u = r.n(s),
                l = r("ead9"),
                f = r.n(l),
                d = r("81bf"),
                b = r.n(d),
                m = r("17e1"),
                h = r.n(m),
                p = r("1132"),
                v = r.n(p),
                g = r("f8d5"),
                w = r.n(g),
                y = r("640f"),
                O = r.n(y),
                j = O.a.parse("687a4852416d736f356b496e62617857"),
                x = O.a.parse("2331346C6A6B5F215C5D2630553C2728"),
                k = [67, 84, 69, 78, 70, 68, 65, 77];

            function _(e, t, r) { return Object(n["a"])(this, void 0, Promise, (function() { var r; return Object(n["b"])(this, (function(n) { switch (n.label) {
                            case 0:
                                return r = A.bind, [4, Object(a["d"])(e)];
                            case 1:
                                return [2, (new(r.apply(A, [void 0, n.sent(), t]))).decrypt()] } })) })) } var A = function() {
                function t(e, t) { this.offset = 0, this.format = "", this.mime = ""; var r = new Uint8Array(e, 0, 8); if (!Object(a["b"])(r, k)) throw Error("此ncm文件已损坏");
                    this.offset = 10, this.raw = e, this.view = new DataView(e), this.filename = t } return t.prototype._getKeyData = function() { var e = this.view.getUint32(this.offset, !0);
                    this.offset += 4; var t = new Uint8Array(this.raw, this.offset, e).map((function(e) { return 100 ^ e }));
                    this.offset += e; for (var r = u.a.decrypt({ ciphertext: h.a.create(t) }, j, { mode: b.a, padding: f.a }), n = new Uint8Array(r.sigBytes), a = r.words, i = r.sigBytes, c = 0; c < i; c++) n[c] = a[c >>> 2] >>> 24 - c % 4 * 8 & 255; return n.slice(17) }, t.prototype._getKeyBox = function() { for (var e, t = this._getKeyData(), r = new Uint8Array(Array(256).keys()), n = t.length, a = 0, i = 0; i < 256; i++) a = r[i] + a + t[i % n] & 255, e = [r[a], r[i]], r[i] = e[0], r[a] = e[1]; return r.map((function(e, t, r) { t = t + 1 & 255; var n = r[t],
                            a = r[t + n & 255]; return r[n + a & 255] })) }, t.prototype._getMetaData = function() { var e = this.view.getUint32(this.offset, !0); if (this.offset += 4, 0 === e) return {}; var t = new Uint8Array(this.raw, this.offset, e).map((function(e) { return 99 ^ e }));
                    this.offset += e, h.a.create(); var r, n = u.a.decrypt({ ciphertext: v.a.parse(h.a.create(t.slice(22)).toString(w.a)) }, x, { mode: b.a, padding: f.a }).toString(w.a),
                        a = n.indexOf(":"); if ("dj" === n.slice(0, a)) { var i = JSON.parse(n.slice(a + 1));
                        r = i.mainMusic } else r = JSON.parse(n.slice(a + 1)); return r.albumPic && (r.albumPic = r.albumPic.replace("http://", "https://") + "?param=500y500"), r }, t.prototype._getAudio = function(e) { this.offset += this.view.getUint32(this.offset + 5, !0) + 13; for (var t = new Uint8Array(this.raw, this.offset), r = t.length, n = 0; n < r; ++n) t[n] ^= e[255 & n]; return t }, t.prototype._buildMeta = function() { var t; return Object(n["a"])(this, void 0, void 0, (function() { var r, i, c, s, u, l; return Object(n["b"])(this, (function(n) { switch (n.label) {
                                case 0:
                                    if (!this.oriMeta) throw Error("invalid sequence"); if (r = Object(a["g"])(this.filename, this.oriMeta.musicName), i = [], this.oriMeta.artist && this.oriMeta.artist.forEach((function(e) { return i.push(e[0]) })), 0 === i.length && r.artist && (i = r.artist.split(",").map((function(e) { return e.trim() })).filter((function(e) { return "" != e }))), !this.oriMeta.albumPic) return [3, 9];
                                    n.label = 1;
                                case 1:
                                    return n.trys.push([1, 8, , 9]), c = this, [4, Object(a["f"])(this.oriMeta.albumPic)];
                                case 2:
                                    c.image = n.sent(), n.label = 3;
                                case 3:
                                    return this.image && this.image.buffer.byteLength >= 1 << 24 ? [4, o.a.read(e.from(this.image.buffer))] : [3, 7];
                                case 4:
                                    return s = n.sent(), [4, s.resize(Math.round(s.getHeight() / 2), o.a.AUTO)];
                                case 5:
                                    return n.sent(), u = this.image, [4, s.getBufferAsync("image/jpeg")];
                                case 6:
                                    return u.buffer = n.sent(), [3, 3];
                                case 7:
                                    return [3, 9];
                                case 8:
                                    return l = n.sent(), console.log("get cover image failed", l), [3, 9];
                                case 9:
                                    return this.newMeta = { title: r.title, artists: i, album: this.oriMeta.album, picture: null === (t = this.image) || void 0 === t ? void 0 : t.buffer }, [2] } })) })) }, t.prototype._writeMeta = function() { return Object(n["a"])(this, void 0, void 0, (function() { var t, r; return Object(n["b"])(this, (function(n) { switch (n.label) {
                                case 0:
                                    if (!this.audio || !this.newMeta) throw Error("invalid sequence"); return this.blob || (this.blob = new Blob([this.audio], { type: this.mime })), [4, Object(i["parseBlob"])(this.blob)];
                                case 1:
                                    if (t = n.sent(), r = !t.common.album && !t.common.artists && !t.common.title, r || this.newMeta.picture) { if ("mp3" === this.format) this.audio = Object(a["l"])(e.from(this.audio), this.newMeta, t);
                                        else { if ("flac" !== this.format) return console.info("writing meta for " + this.format + " is not being supported for now"), [2];
                                            this.audio = Object(a["k"])(e.from(this.audio), this.newMeta, t) }
                                        this.blob = new Blob([this.audio], { type: this.mime }) } return [2] } })) })) }, t.prototype.gatherResult = function() { var e, t; if (!this.newMeta) throw Error("bad sequence"); return { title: this.newMeta.title, artist: null === (e = this.newMeta.artists) || void 0 === e ? void 0 : e.join("; "), ext: this.format, album: this.newMeta.album, picture: null === (t = this.image) || void 0 === t ? void 0 : t.url, file: URL.createObjectURL(this.blob), blob: this.blob, mime: this.mime } }, t.prototype.decrypt = function() { return Object(n["a"])(this, void 0, void 0, (function() { var e, t; return Object(n["b"])(this, (function(r) { switch (r.label) {
                                case 0:
                                    return e = this._getKeyBox(), this.oriMeta = this._getMetaData(), this.audio = this._getAudio(e), this.format = this.oriMeta.format || Object(a["i"])(this.audio), this.mime = a["a"][this.format], [4, this._buildMeta()];
                                case 1:
                                    r.sent(), r.label = 2;
                                case 2:
                                    return r.trys.push([2, 4, , 5]), [4, this._writeMeta()];
                                case 3:
                                    return r.sent(), [3, 5];
                                case 4:
                                    return t = r.sent(), console.warn("write meta data failed", t), [3, 5];
                                case 5:
                                    return [2, this.gatherResult()] } })) })) }, t }() }).call(this, r("1c35").Buffer) }, "73ec": function(e, t, r) { "use strict";
        r.d(t, "e", (function() { return n })), r.d(t, "d", (function() { return i })), r.d(t, "b", (function() { return o })), r.d(t, "c", (function() { return s })), r.d(t, "f", (function() { return u })), r.d(t, "a", (function() { return l }));
        r("d3b7"), r("3ca3"), r("ddb0"), r("2b3d"), r("2ca0"); var n, a = r("9ab4");
        (function(e) { e[e["ArtistAndTitle"] = 0] = "ArtistAndTitle", e[e["TitleOnly"] = 1] = "TitleOnly", e[e["TitleAndArtist"] = 2] = "TitleAndArtist", e[e["SameAsOriginal"] = 3] = "SameAsOriginal" })(n || (n = {})); var i = [{ key: n.ArtistAndTitle, text: "歌手-歌曲名" }, { key: n.TitleOnly, text: "歌曲名" }, { key: n.TitleAndArtist, text: "歌曲名-歌手" }, { key: n.SameAsOriginal, text: "同源文件名" }];

        function c(e, t) { switch (t) {
                case n.TitleOnly:
                    return e.title + "." + e.ext;
                case n.TitleAndArtist:
                    return e.title + " - " + e.artist + "." + e.ext;
                case n.SameAsOriginal:
                    return e.rawFilename + "." + e.ext;
                default:
                case n.ArtistAndTitle:
                    return e.artist + " - " + e.title + "." + e.ext } }

        function o(e, t, r) { return Object(a["a"])(this, void 0, void 0, (function() { var n, i, o; return Object(a["b"])(this, (function(a) { switch (a.label) {
                        case 0:
                            n = c(e, t), a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]), [4, r.getFileHandle(n)];
                        case 2:
                            return a.sent(), n = (new Date).getTime() + " - " + n, [3, 4];
                        case 3:
                            return a.sent(), [3, 4];
                        case 4:
                            return [4, r.getFileHandle(n, { create: !0 })];
                        case 5:
                            return i = a.sent(), [4, i.createWritable()];
                        case 6:
                            return o = a.sent(), [4, o.write(e.blob)];
                        case 7:
                            return a.sent(), [4, o.close()];
                        case 8:
                            return a.sent(), [2] } })) })) }

        function s(e, t) { var r = document.createElement("a");
            r.href = e.file, r.download = c(e, t), document.body.append(r), r.click(), r.remove() }

        function u(e) { var t;
            URL.revokeObjectURL(e.file), (null === (t = e.picture) || void 0 === t ? void 0 : t.startsWith("blob:")) && URL.revokeObjectURL(e.picture) } var l = function() {
            function e() { this.pending = [] } return e.prototype.queue = function(e) { this.pending.push(e), this.consume() }, e.prototype.consume = function() { var e = this,
                    t = this.pending.shift();
                t && t().then((function() { return e.consume })).catch(console.error) }, e }() }, 8850: function(e, t, r) { "use strict";
        (function(e) { r.d(t, "b", (function() { return f })), r.d(t, "a", (function() { return d }));
            r("d3b7"), r("ace4"), r("5cc6"), r("9a8c"), r("a975"), r("735e"), r("c1ac"), r("d139"), r("3a7b"), r("d5d6"), r("82f8"), r("e91f"), r("60bd"), r("5f96"), r("3280"), r("3fcc"), r("ca91"), r("25a1"), r("cd26"), r("3c5d"), r("2954"), r("649e"), r("219c"), r("170b"), r("b39a"), r("72f7"), r("fb6a"), r("ac1f"), r("1276"), r("3ca3"), r("ddb0"), r("2b3d"); var n = r("9ab4"),
                a = r("3349"),
                i = r("1fb5"),
                c = r("cc74"),
                o = r("cb96"),
                s = r("acf9"),
                u = r.n(s),
                l = r("97e5"),
                f = { mgg: { handler: a["c"], ext: "ogg", detect: !0 }, mflac: { handler: a["b"], ext: "flac", detect: !0 }, "mgg.cache": { handler: a["c"], ext: "ogg", detect: !1 }, "mflac.cache": { handler: a["b"], ext: "flac", detect: !1 }, qmc0: { handler: a["d"], ext: "mp3", detect: !1 }, qmc2: { handler: a["d"], ext: "ogg", detect: !1 }, qmc3: { handler: a["d"], ext: "mp3", detect: !1 }, qmcogg: { handler: a["d"], ext: "ogg", detect: !1 }, qmcflac: { handler: a["d"], ext: "flac", detect: !1 }, bkcmp3: { handler: a["d"], ext: "mp3", detect: !1 }, bkcflac: { handler: a["d"], ext: "flac", detect: !1 }, tkm: { handler: a["d"], ext: "m4a", detect: !1 }, "666c6163": { handler: a["d"], ext: "flac", detect: !1 }, "6d7033": { handler: a["d"], ext: "mp3", detect: !1 }, "6f6767": { handler: a["d"], ext: "ogg", detect: !1 }, "6d3461": { handler: a["d"], ext: "m4a", detect: !1 }, 776176: { handler: a["d"], ext: "wav", detect: !1 } };

            function d(t, r, a) { var i, s, d, h; return Object(n["a"])(this, void 0, Promise, (function() { var p, v, g, w, y, O, j, x, k, _, A, U, T, M, P, S, B, E; return Object(n["b"])(this, (function(n) { switch (n.label) {
                            case 0:
                                if (!(a in f)) throw "Qmc cannot handle type: " + a; return p = f[a], g = Uint8Array.bind, [4, Object(c["d"])(t)];
                            case 1:
                                return v = new(g.apply(Uint8Array, [void 0, n.sent()])), p.detect ? (j = new DataView(v.slice(v.length - 4).buffer).getUint32(0, !0), x = v.length - 4 - j, w = v.slice(0, x), y = p.handler(w), O = v.slice(x, x + j), y ? [3, 3] : [4, b(O, r, a)]) : [3, 4];
                            case 2:
                                y = n.sent(), n.label = 3;
                            case 3:
                                if (!y) throw a + "格式仅提供实验性支持"; return [3, 5];
                            case 4:
                                if (w = v, y = p.handler(w), !y) throw a + "格式仅提供实验性支持";
                                n.label = 5;
                            case 5:
                                return k = y.Decrypt(w), _ = Object(c["i"])(k, p.ext), A = c["a"][_], U = new Blob([k], { type: A }), [4, Object(o["parseBlob"])(U)];
                            case 6:
                                for (M in T = n.sent(), T.native) T.native.hasOwnProperty(M) && T.native[M].some((function(e) { return "TCON" === e.id && "(12)" === e.value })) && (console.warn("try using gbk encoding to decode meta"), T.common.artist = u.a.decode(new e(null !== (i = T.common.artist) && void 0 !== i ? i : ""), "gbk"), T.common.title = u.a.decode(new e(null !== (s = T.common.title) && void 0 !== s ? s : ""), "gbk"), T.common.album = u.a.decode(new e(null !== (d = T.common.album) && void 0 !== d ? d : ""), "gbk")); return P = Object(c["g"])(r, T.common.title, T.common.artist), O && Object(l["d"])(O, y.getMatrix128(), r, a, P.title, P.artist, T.common.album).then().catch(), S = Object(c["e"])(T), S ? [3, 9] : [4, m(P.title, P.artist, T.common.album)];
                            case 7:
                                return S = n.sent(), S ? [4, Object(c["f"])(S)] : [3, 9];
                            case 8:
                                if (B = n.sent(), B) { S = B.url; try { E = { picture: B.buffer, title: P.title, artists: null === (h = P.artist) || void 0 === h ? void 0 : h.split(" _ ") }, "mp3" === _ ? (k = Object(c["l"])(e.from(k), E, T), U = new Blob([k], { type: A })) : "flac" === _ ? (k = Object(c["k"])(e.from(k), E, T), U = new Blob([k], { type: A })) : console.info("writing metadata for " + _ + " is not being supported for now") } catch (D) { console.warn("Error while appending cover image to file " + D) } }
                                n.label = 9;
                            case 9:
                                return [2, { title: P.title, artist: P.artist, ext: _, album: T.common.album, picture: S, file: URL.createObjectURL(U), blob: U, mime: A }] } })) })) }

            function b(e, t, r) { return Object(n["a"])(this, void 0, Promise, (function() { var c, o; return Object(n["b"])(this, (function(n) { switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]), [4, Object(l["c"])(e, t, r)];
                            case 1:
                                return c = n.sent(), [2, new a["a"](Object(i["toByteArray"])(c.Matrix44))];
                            case 2:
                                return o = n.sent(), console.warn(o), [3, 3];
                            case 3:
                                return [2] } })) })) }

            function m(e, t, r) { return Object(n["a"])(this, void 0, Promise, (function() { var a, i, c; return Object(n["b"])(this, (function(n) { switch (n.label) {
                            case 0:
                                a = "https://stats.ixarea.com/apis/music/qq-cover", n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, Object(l["b"])(e, t, r)];
                            case 2:
                                return i = n.sent(), [2, a + "/" + i.Type + "/" + i.Id];
                            case 3:
                                return c = n.sent(), console.warn(c), [3, 4];
                            case 4:
                                return [2, ""] } })) })) } }).call(this, r("1c35").Buffer) }, 9224: function(e) { e.exports = JSON.parse('{"name":"unlock-music","version":"v1.9.1","updateInfo":"新增写入本地文件系统; 优化.kwm解锁; 支持.acc嗅探; 使用Typescript重构","license":"MIT","description":"Unlock encrypted music file in browser.","repository":{"type":"git","url":"https://github.com/ix64/unlock-music"},"private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","fix-compatibility":"node ./src/fix-compatibility.js","make-extension":"node ./make-extension.js"},"dependencies":{"base64-js":"^1.5.1","browser-id3-writer":"^4.4.0","core-js":"^3.16.0","crypto-js":"^4.1.1","element-ui":"^2.15.5","iconv-lite":"^0.6.3","jimp":"^0.16.1","metaflac-js":"^1.0.5","music-metadata":"7.9.0","music-metadata-browser":"2.2.7","register-service-worker":"^1.7.2","threads":"^1.6.5","vue":"^2.6.14"},"devDependencies":{"@types/crypto-js":"^4.0.2","@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-pwa":"^4.5.13","@vue/cli-plugin-typescript":"^4.5.13","@vue/cli-service":"^4.5.13","babel-plugin-component":"^1.1.1","sass":"^1.38.1","sass-loader":"^10.2.0","semver":"^7.3.5","threads-plugin":"^1.4.0","typescript":"~4.1.6","vue-cli-plugin-element":"^1.0.1","vue-template-compiler":"^2.6.14"}}') }, "97e5": function(e, t, r) { "use strict";
        r.d(t, "a", (function() { return c })), r.d(t, "d", (function() { return o })), r.d(t, "c", (function() { return s })), r.d(t, "b", (function() { return u }));
        r("d3b7"), r("ace4"), r("5cc6"), r("9a8c"), r("a975"), r("735e"), r("c1ac"), r("d139"), r("3a7b"), r("d5d6"), r("82f8"), r("e91f"), r("60bd"), r("5f96"), r("3280"), r("3fcc"), r("ca91"), r("25a1"), r("cd26"), r("3c5d"), r("2954"), r("649e"), r("219c"), r("170b"), r("b39a"), r("72f7"), r("3ca3"), r("ddb0"), r("2b3d"), r("25f0"); var n = r("9ab4"),
            a = r("1fb5"),
            i = "https://um-api.ixarea.com";

        function c(e) { return Object(n["a"])(this, void 0, Promise, (function() { var t; return Object(n["b"])(this, (function(r) { switch (r.label) {
                        case 0:
                            return [4, fetch(i + "/music/app-version", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ Version: e }) })];
                        case 1:
                            return t = r.sent(), [4, t.json()];
                        case 2:
                            return [2, r.sent()] } })) })) }

        function o(e, t, r, n, c, o, s) { return fetch(i + "/qmcmask/usage", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ Mask: Object(a["fromByteArray"])(new Uint8Array(t)), Key: Object(a["fromByteArray"])(e), Artist: o, Title: c, Album: s, Filename: r, Format: n }) }) }

        function s(e, t, r) { return Object(n["a"])(this, void 0, Promise, (function() { var c; return Object(n["b"])(this, (function(n) { switch (n.label) {
                        case 0:
                            return [4, fetch(i + "/qmcmask/query", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ Format: r, Key: Object(a["fromByteArray"])(e), Filename: t, Type: 44 }) })];
                        case 1:
                            return c = n.sent(), [4, c.json()];
                        case 2:
                            return [2, n.sent()] } })) })) }

        function u(e, t, r) { return Object(n["a"])(this, void 0, Promise, (function() { var a, c, o; return Object(n["b"])(this, (function(n) { switch (n.label) {
                        case 0:
                            return a = i + "/music/qq-cover", c = new URLSearchParams([
                                ["Title", e],
                                ["Artist", null !== t && void 0 !== t ? t : ""],
                                ["Album", null !== r && void 0 !== r ? r : ""]
                            ]), [4, fetch(a + "?" + c.toString())];
                        case 1:
                            return o = n.sent(), [4, o.json()];
                        case 2:
                            return [2, n.sent()] } })) })) } }, "9c0c": function(e, t, r) {}, cc74: function(e, t, r) { "use strict";
        (function(e) { r.d(t, "c", (function() { return s })), r.d(t, "h", (function() { return l })), r.d(t, "a", (function() { return p })), r.d(t, "b", (function() { return v })), r.d(t, "i", (function() { return g })), r.d(t, "d", (function() { return w })), r.d(t, "e", (function() { return y })), r.d(t, "g", (function() { return O })), r.d(t, "f", (function() { return j })), r.d(t, "l", (function() { return x })), r.d(t, "k", (function() { return k })), r.d(t, "j", (function() { return _ }));
            r("fb6a"), r("d3b7"), r("3ca3"), r("ddb0"), r("2b3d"), r("ac1f"), r("1276"), r("498a"), r("2ca0"), r("159b"); var n = r("9ab4"),
                a = r("7907"),
                i = r.n(a),
                c = r("b686"),
                o = r.n(c),
                s = [102, 76, 97, 67],
                u = [73, 68, 51],
                l = [79, 103, 103, 83],
                f = [102, 116, 121, 112],
                d = [48, 38, 178, 117, 142, 102, 207, 17, 166, 217, 0, 170, 0, 98, 206, 108],
                b = [82, 73, 70, 70],
                m = [255, 241],
                h = [70, 82, 77, 56],
                p = { mp3: "audio/mpeg", flac: "audio/flac", m4a: "audio/mp4", ogg: "audio/ogg", wma: "audio/x-ms-wma", wav: "audio/x-wav", dff: "audio/x-dff" };

            function v(e, t) { return !(t.length > e.length) && t.every((function(t, r) { return t === e[r] })) }

            function g(e, t) { return void 0 === t && (t = "mp3"), v(e, u) ? "mp3" : v(e, s) ? "flac" : v(e, l) ? "ogg" : e.length >= 4 + f.length && v(e.slice(4), f) ? "m4a" : v(e, b) ? "wav" : v(e, d) ? "wma" : v(e, m) ? "aac" : v(e, h) ? "dff" : t }

            function w(e) { return e.arrayBuffer ? e.arrayBuffer() : new Promise((function(t, r) { var n = new FileReader;
                    n.onload = function(e) { var n, a = null === (n = e.target) || void 0 === n ? void 0 : n.result;
                        a ? t(a) : r("read file failed") }, n.readAsArrayBuffer(e) })) }

            function y(e) { var t; return (null === (t = e.common) || void 0 === t ? void 0 : t.picture) && e.common.picture.length > 0 ? URL.createObjectURL(new Blob([e.common.picture[0].data], { type: e.common.picture[0].format })) : "" }

            function O(e, t, r, n) { void 0 === n && (n = "-"); var a = { title: null !== t && void 0 !== t ? t : "", artist: r },
                    i = e.split(n); return i.length > 1 ? (a.artist || (a.artist = i[0].trim()), a.title || (a.title = i[1].trim())) : 1 === i.length && (a.title || (a.title = i[0].trim())), a }

            function j(e) { return Object(n["a"])(this, void 0, Promise, (function() { var t, r, a, i, c; return Object(n["b"])(this, (function(n) { switch (n.label) {
                            case 0:
                                return n.trys.push([0, 4, , 5]), [4, fetch(e)];
                            case 1:
                                return t = n.sent(), r = t.headers.get("Content-Type"), (null === r || void 0 === r ? void 0 : r.startsWith("image/")) ? [4, t.arrayBuffer()] : [3, 3];
                            case 2:
                                return a = n.sent(), i = URL.createObjectURL(new Blob([a], { type: r })), [2, { buffer: a, url: i, mime: r }];
                            case 3:
                                return [3, 5];
                            case 4:
                                return c = n.sent(), console.warn(c), [3, 5];
                            case 5:
                                return [2] } })) })) }

            function x(e, t, r) { var n = new i.a(e),
                    a = r.native["ID3v2.4"] || r.native["ID3v2.3"] || r.native["ID3v2.2"] || [];
                a.forEach((function(e) { if ("TPE1" !== e.id && "TIT2" !== e.id && "TALB" !== e.id) try { n.setFrame(e.id, e.value) } catch (t) {} })); var c = r.common; return n.setFrame("TPE1", (null === c || void 0 === c ? void 0 : c.artists) || t.artists || []).setFrame("TIT2", (null === c || void 0 === c ? void 0 : c.title) || t.title).setFrame("TALB", (null === c || void 0 === c ? void 0 : c.album) || t.album || ""), t.picture && n.setFrame("APIC", { type: 3, data: t.picture, description: t.picture_desc || "Cover" }), n.addTag() }

            function k(t, r, n) { var a = new o.a(t),
                    i = n.common; return i.title || i.album || !i.artists || (a.setTag("TITLE=" + r.title), a.setTag("ALBUM=" + r.album), r.artists && (a.removeTag("ARTIST"), r.artists.forEach((function(e) { return a.setTag("ARTIST=" + e) })))), r.picture && a.importPictureFromBuffer(e.from(r.picture)), a.save() }

            function _(e) { var t = e.lastIndexOf("."); return { ext: e.substring(t + 1).toLowerCase(), name: e.substring(0, t) } } }).call(this, r("1c35").Buffer) }, cd49: function(e, t, r) { "use strict";
        r.r(t);
        r("9e1f"), r("450d"); var n = r("6ed5"),
            a = r.n(n),
            i = (r("46a1"), r("e5f2")),
            c = r.n(i),
            o = (r("6b30"), r("c284")),
            s = r.n(o),
            u = (r("0c67"), r("299c")),
            l = r.n(u),
            f = (r("b5d8"), r("f494")),
            d = r.n(f),
            b = (r("560b"), r("dcdc")),
            m = r.n(b),
            h = (r("f225"), r("89a9")),
            p = r.n(h),
            v = (r("f4f9"), r("c2cc")),
            g = r.n(v),
            w = (r("7a0f"), r("0f6c")),
            y = r.n(w),
            O = (r("aaa5"), r("a578")),
            j = r.n(O),
            x = (r("adec"), r("3d2d")),
            k = r.n(x),
            _ = (r("bdc7"), r("aa2f")),
            A = r.n(_),
            U = (r("de31"), r("c69e")),
            T = r.n(U),
            M = (r("5466"), r("ecdf")),
            P = r.n(M),
            S = (r("38a0"), r("ad41")),
            B = r.n(S),
            E = (r("1951"), r("eedf")),
            D = r.n(E),
            R = (r("acb6"), r("c673")),
            L = r.n(R),
            F = (r("fd71"), r("a447")),
            q = r.n(F),
            C = (r("e260"), r("e6cf"), r("cca6"), r("a79d"), r("2b0e")),
            I = function() { var e = this,
                    t = e.$createElement,
                    r = e._self._c || t; return r("el-container", { attrs: { id: "app" } }, [r("el-main", [r("Home")], 1), r("el-footer", { attrs: { id: "app-footer" } }, [r("el-row", [r("a", { attrs: { href: "https://github.com/ix64/unlock-music", target: "_blank" } }, [e._v("音乐解锁")]), e._v("(" + e._s(e.version) + ") ：移除已购音乐的加密保护。 "), r("a", { attrs: { href: "https://github.com/ix64/unlock-music/wiki/使用提示", target: "_blank" } }, [e._v("使用提示")])]), r("el-row", [e._v(" 目前支持网易云音乐(ncm), QQ音乐(qmc, mflac, mgg), 酷狗音乐(kgm), 虾米音乐(xm), 酷我音乐(.kwm) "), r("a", { attrs: { href: "https://github.com/ix64/unlock-music/blob/master/README.md", target: "_blank" } }, [e._v("更多")]), e._v("。 ")]), r("el-row", [r("span", [e._v("Copyright © 2019 - " + e._s((new Date).getFullYear()) + " MengYX")]), e._v(" 音乐解锁使用 "), r("a", { attrs: { href: "https://github.com/ix64/unlock-music/blob/master/LICENSE", target: "_blank" } }, [e._v("MIT许可协议")]), e._v(" 开放源代码镜像By小娱乐家 ")])], 1)], 1) },
            N = [],
            $ = r("1da1"),
            H = (r("96cf"), r("99af"), function() { var e = this,
                    t = e.$createElement,
                    r = e._self._c || t; return r("el-upload", { attrs: { "auto-upload": !1, "on-change": e.addFile, "show-file-list": !1, action: "", drag: "", multiple: "" } }, [r("i", { staticClass: "el-icon-upload" }), r("div", { staticClass: "el-upload__text" }, [e._v("将文件拖到此处，或"), r("em", [e._v("点击选择")])]), r("div", { staticClass: "el-upload__tip", attrs: { slot: "tip" }, slot: "tip" }, [r("div", [e._v(" 仅在浏览器内对文件进行解锁，无需消耗流量 "), r("el-tooltip", { attrs: { effect: "dark", placement: "top-start" } }, [r("div", { attrs: { slot: "content" }, slot: "content" }, [e._v(" 算法在源代码中已经提供，所有运算都发生在本地 ")]), r("i", { staticClass: "el-icon-info", staticStyle: { "font-size": "12px" } })])], 1), r("div", [e._v(" 工作模式: " + e._s(e.parallel ? "多线程 Worker" : "单线程 Queue") + " "), r("el-tooltip", { attrs: { effect: "dark", placement: "top-start" } }, [r("div", { attrs: { slot: "content" }, slot: "content" }, [e._v(" 将此工具部署在HTTPS环境下，可以启用Web Worker特性，"), r("br"), e._v(" 从而更快的利用并行处理完成解锁 ")]), r("i", { staticClass: "el-icon-info", staticStyle: { "font-size": "12px" } })])], 1)]), r("transition", { attrs: { name: "el-fade-in" } }, [r("el-progress", { directives: [{ name: "show", rawName: "v-show", value: e.progress_show, expression: "progress_show" }], staticStyle: { margin: "16px 6px 0 6px" }, attrs: { format: e.progress_string, percentage: e.progress_value, "stroke-width": 16, "text-inside": !0 } })], 1)], 1) }),
            W = [],
            J = r("0565"),
            V = J["a"],
            K = r("2877"),
            Q = Object(K["a"])(V, H, W, !1, null, null, null),
            z = Q.exports,
            G = function() { var e = this,
                    t = e.$createElement,
                    r = e._self._c || t; return r("el-table", { staticStyle: { width: "100%" }, attrs: { data: e.tableData } }, [r("el-table-column", { attrs: { label: "封面" }, scopedSlots: e._u([{ key: "default", fn: function(t) { return [r("el-image", { staticStyle: { width: "100px", height: "100px" }, attrs: { src: t.row.picture } }, [r("div", { staticClass: "image-slot el-image__error", attrs: { slot: "error" }, slot: "error" }, [e._v(" 暂无封面 ")])])] } }]) }), r("el-table-column", { attrs: { label: "歌曲" }, scopedSlots: e._u([{ key: "default", fn: function(t) { return [r("span", [e._v(e._s(t.row.title))])] } }]) }), r("el-table-column", { attrs: { label: "歌手" }, scopedSlots: e._u([{ key: "default", fn: function(t) { return [r("p", [e._v(e._s(t.row.artist))])] } }]) }), r("el-table-column", { attrs: { label: "专辑" }, scopedSlots: e._u([{ key: "default", fn: function(t) { return [r("p", [e._v(e._s(t.row.album))])] } }]) }), r("el-table-column", { attrs: { label: "操作" }, scopedSlots: e._u([{ key: "default", fn: function(t) { return [r("el-button", { attrs: { circle: "", icon: "el-icon-video-play", type: "success" }, on: { click: function(r) { return e.handlePlay(t.$index, t.row) } } }), r("el-button", { attrs: { circle: "", icon: "el-icon-download" }, on: { click: function(r) { return e.handleDownload(t.row) } } }), r("el-button", { attrs: { circle: "", icon: "el-icon-delete", type: "danger" }, on: { click: function(r) { return e.handleDelete(t.$index, t.row) } } })] } }]) })], 1) },
            Y = [],
            X = (r("a9e3"), r("a434"), r("73ec")),
            Z = { name: "PreviewTable", props: { tableData: { type: Array, required: !0 }, policy: { type: Number, required: !0 } }, methods: { handlePlay: function(e, t) { this.$emit("play", t.file) }, handleDelete: function(e, t) { Object(X["f"])(t), this.tableData.splice(e, 1) }, handleDownload: function(e) { this.$emit("download", e) } } },
            ee = Z,
            te = Object(K["a"])(ee, G, Y, !1, null, "1458a804", null),
            re = te.exports,
            ne = r("9224"),
            ae = function() { var e = this,
                    t = e.$createElement,
                    r = e._self._c || t; return r("div", [r("file-selector", { on: { error: e.showFail, success: e.showSuccess } }), r("div", { attrs: { id: "app-control" } }, [r("el-row", { staticClass: "mb-3" }, [r("span", [e._v("歌曲命名格式：")]), e._l(e.FilenamePolicies, (function(t) { return r("el-radio", { key: t.key, attrs: { label: t.key }, model: { value: e.filename_policy, callback: function(t) { e.filename_policy = t }, expression: "filename_policy" } }, [e._v(" " + e._s(t.text) + " ")]) }))], 2), r("el-row", [r("el-button", { attrs: { icon: "el-icon-download", plain: "" }, on: { click: e.handleDownloadAll } }, [e._v("下载全部")]), r("el-button", { attrs: { icon: "el-icon-delete", plain: "", type: "danger" }, on: { click: e.handleDeleteAll } }, [e._v("清除全部")]), r("el-tooltip", { staticClass: "item", attrs: { effect: "dark", placement: "top-start" } }, [r("div", { attrs: { slot: "content" }, slot: "content" }, [e.instant_save ? r("span", [e._v("工作模式: " + e._s(e.dir ? "写入本地文件系统" : "调用浏览器下载"))]) : r("span", [e._v(" 当您使用此工具进行大量文件解锁的时候，建议开启此选项。"), r("br"), e._v(" 开启后，解锁结果将不会存留于浏览器中，防止内存不足。 ")])]), r("el-checkbox", { staticClass: "ml-2", attrs: { border: "" }, model: { value: e.instant_save, callback: function(t) { e.instant_save = t }, expression: "instant_save" } }, [e._v("立即保存")])], 1)], 1)], 1), r("audio", { attrs: { autoplay: e.playing_auto, src: e.playing_url, controls: "" } }), r("PreviewTable", { attrs: { policy: e.filename_policy, "table-data": e.tableData }, on: { download: e.saveFile, play: e.changePlaying } })], 1) },
            ie = [],
            ce = (r("159b"), { name: "Home", components: { FileSelector: z, PreviewTable: re }, data: function() { return { tableData: [], playing_url: "", playing_auto: !1, filename_policy: X["e"].ArtistAndTitle, instant_save: !1, FilenamePolicies: X["d"], dir: null } }, watch: { instant_save: function(e) { e && this.showDirectlySave() } }, methods: { showSuccess: function(e) { var t = this; return Object($["a"])(regeneratorRuntime.mark((function r() { var n; return regeneratorRuntime.wrap((function(r) { while (1) switch (r.prev = r.next) {
                                    case 0:
                                        if (!t.instant_save) { r.next = 6; break } return r.next = 3, t.saveFile(e);
                                    case 3:
                                        Object(X["f"])(e), r.next = 8; break;
                                    case 6:
                                        t.tableData.push(e), t.$notify.success({ title: "解锁成功", message: "成功解锁 " + e.title, duration: 3e3 });
                                    case 8:
                                        n = [e.title, e.artist, e.album], window._paq.push(["trackEvent", "Unlock", e.rawExt + "," + e.mime, JSON.stringify(n)]);
                                    case 9:
                                    case "end":
                                        return r.stop() } }), r) })))() }, showFail: function(e, t) { console.error(e, t), this.$notify.error({ title: "出现问题", message: e + "，" + t + '，参考<a target="_blank" href="https://github.com/ix64/unlock-music/wiki/使用提示">使用提示</a>', dangerouslyUseHTMLString: !0, duration: 6e3 }), window._paq.push(["trackEvent", "Error", String(e), t]) }, changePlaying: function(e) { this.playing_url = e, this.playing_auto = !0 }, handleDeleteAll: function() { this.tableData.forEach((function(e) { Object(X["f"])(e) })), this.tableData = [] }, handleDownloadAll: function() { var e = this,
                            t = 0,
                            r = setInterval((function() { t < e.tableData.length ? (e.saveFile(e.tableData[t]), t++) : clearInterval(r) }), 300) }, saveFile: function(e) { var t = this; return Object($["a"])(regeneratorRuntime.mark((function r() { return regeneratorRuntime.wrap((function(r) { while (1) switch (r.prev = r.next) {
                                    case 0:
                                        if (!t.dir) { r.next = 6; break } return r.next = 3, Object(X["b"])(e, t.filename_policy, t.dir);
                                    case 3:
                                        t.$notify({ title: "保存成功", message: e.title, position: "top-left", type: "success", duration: 3e3 }), r.next = 7; break;
                                    case 6:
                                        Object(X["c"])(e, t.filename_policy);
                                    case 7:
                                    case "end":
                                        return r.stop() } }), r) })))() }, showDirectlySave: function() { var e = this; return Object($["a"])(regeneratorRuntime.mark((function t() { var r; return regeneratorRuntime.wrap((function(t) { while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (window.showDirectoryPicker) { t.next = 2; break } return t.abrupt("return");
                                    case 2:
                                        return t.prev = 2, t.next = 5, e.$confirm("您的浏览器支持文件直接保存到磁盘，是否使用？", "新特性提示", { confirmButtonText: "使用", cancelButtonText: "不使用", type: "warning", center: !0 });
                                    case 5:
                                        t.next = 11; break;
                                    case 7:
                                        return t.prev = 7, t.t0 = t["catch"](2), console.log(t.t0), t.abrupt("return");
                                    case 11:
                                        return t.prev = 11, t.next = 14, window.showDirectoryPicker();
                                    case 14:
                                        return e.dir = t.sent, r = "__unlock_music_write_test.txt", t.next = 18, e.dir.getFileHandle(r, { create: !0 });
                                    case 18:
                                        return t.next = 20, e.dir.removeEntry(r);
                                    case 20:
                                        t.next = 25; break;
                                    case 22:
                                        t.prev = 22, t.t1 = t["catch"](11), console.error(t.t1);
                                    case 25:
                                    case "end":
                                        return t.stop() } }), t, null, [
                                [2, 7],
                                [11, 22]
                            ]) })))() } } }),
            oe = ce,
            se = Object(K["a"])(oe, ae, ie, !1, null, null, null),
            ue = se.exports,
            le = r("97e5"),
            fe = { name: "app", components: { FileSelector: z, PreviewTable: re, Home: ue }, data: function() { return { version: ne.version } }, created: function() { var e = this;
                    this.$nextTick((function() { return e.finishLoad() })) }, methods: { finishLoad: function() { var e = this; return Object($["a"])(regeneratorRuntime.mark((function t() { var r, n; return regeneratorRuntime.wrap((function(t) { while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return r = document.getElementById("loader-mask"), r && r.remove(), t.prev = 2, t.next = 5, Object(le["a"])(e.version);
                                    case 5:
                                        n = t.sent, t.next = 11; break;
                                    case 8:
                                        t.prev = 8, t.t0 = t["catch"](2), console.warn("check version info failed", t.t0);
                                    case 11:
                                        n && (n.HttpsFound || n.Found && "https:" !== window.location.protocol) ? e.$notify.warning({ title: "发现更新", message: "发现新版本 v".concat(n.Version, "<br/>更新详情：").concat(n.Detail, '<br/> <a target="_blank" href="').concat(n.URL, '">获取更新</a>'), dangerouslyUseHTMLString: !0, duration: 15e3, position: "top-left" }) : e.$notify.info({ title: "离线使用", message: "我们使用PWA技术，无网络也能使用<br/>最近更新：".concat(ne.updateInfo, '<br/><a target="_blank" href="https://github.com/ix64/unlock-music/wiki/使用提示">使用提示</a>'), dangerouslyUseHTMLString: !0, duration: 1e4, position: "top-left" });
                                    case 12:
                                    case "end":
                                        return t.stop() } }), t, null, [
                                [2, 8]
                            ]) })))() } } },
            de = fe,
            be = (r("5c0b"), Object(K["a"])(de, I, N, !1, null, null, null)),
            me = be.exports,
            he = r("9483"); "https:" === window.location.protocol && Object(he["a"])("".concat("", "service-worker.js"), { ready: function() { console.log("App is being served from cache by a service worker.") }, registered: function() { console.log("Service worker has been registered.") }, cached: function() { console.log("Content has been cached for offline use.") }, updatefound: function() { console.log("New content is downloading.") }, updated: function() { console.log("New content is available."), window.location.reload() }, offline: function() { console.log("No internet connection found. App is running in offline mode.") }, error: function(e) { console.error("Error during service worker registration:", e) } }), C["default"].use(q.a), C["default"].use(L.a), C["default"].use(D.a), C["default"].use(B.a), C["default"].use(P.a), C["default"].use(T.a), C["default"].use(A.a), C["default"].use(k.a), C["default"].use(j.a), C["default"].use(y.a), C["default"].use(g.a), C["default"].use(p.a), C["default"].use(m.a), C["default"].use(d.a), C["default"].use(l.a), C["default"].use(s.a), C["default"].prototype.$notify = c.a, C["default"].prototype.$confirm = a.a.confirm, C["default"].config.productionTip = !1, new C["default"]({ render: function(e) { return e(me) } }).$mount("#app") }, eaa5: function(e, t, r) { "use strict";
        r.d(t, "a", (function() { return S }));
        r("d3b7"), r("b0c0"); var n = r("9ab4"),
            a = r("6d95"),
            i = (r("ace4"), r("5cc6"), r("9a8c"), r("a975"), r("735e"), r("c1ac"), r("d139"), r("3a7b"), r("d5d6"), r("82f8"), r("e91f"), r("60bd"), r("5f96"), r("3280"), r("3fcc"), r("ca91"), r("25a1"), r("cd26"), r("3c5d"), r("2954"), r("649e"), r("219c"), r("170b"), r("b39a"), r("72f7"), r("3ca3"), r("ddb0"), r("2b3d"), r("cc74")),
            c = r("cb96");

        function o(e, t, r) { return Object(n["a"])(this, void 0, Promise, (function() { var a, o, s, u, l, f, d, b, m; return Object(n["b"])(this, (function(n) { switch (n.label) {
                        case 0:
                            return o = Uint8Array.bind, [4, Object(i["d"])(e)];
                        case 1:
                            for (a = new(o.apply(Uint8Array, [void 0, n.sent()])), s = a.length, u = 0; u < s; u++) a[u] ^= 163; return l = Object(i["i"])(a, r), l !== r && (e = new Blob([a], { type: i["a"][l] })), [4, Object(c["parseBlob"])(e)];
                        case 2:
                            return f = n.sent(), d = Object(i["g"])(t, f.common.title, f.common.artist), b = d.title, m = d.artist, [2, { title: b, artist: m, ext: l, album: f.common.album, picture: Object(i["e"])(f), file: URL.createObjectURL(e), blob: e, mime: i["a"][l] }] } })) })) }
        r("fb6a");

        function s(e, t, r, a) { return void 0 === a && (a = !0), Object(n["a"])(this, void 0, Promise, (function() { var o, s, u, l, f, d, b; return Object(n["b"])(this, (function(n) { switch (n.label) {
                        case 0:
                            return o = r, a ? (u = Uint8Array.bind, [4, Object(i["d"])(e)]) : [3, 2];
                        case 1:
                            s = new(u.apply(Uint8Array, [void 0, n.sent()])), o = Object(i["i"])(s, r), o !== r && (e = new Blob([s], { type: i["a"][o] })), n.label = 2;
                        case 2:
                            return [4, Object(c["parseBlob"])(e)];
                        case 3:
                            return l = n.sent(), f = Object(i["g"])(t, l.common.title, l.common.artist), d = f.title, b = f.artist, [2, { title: d, artist: b, ext: o, album: l.common.album, picture: Object(i["e"])(l), file: URL.createObjectURL(e), blob: e, mime: i["a"][o] }] } })) })) } var u = [105, 102, 109, 116],
            l = [254, 254, 254, 254],
            f = { " WAV": ".wav", FLAC: ".flac", " MP3": ".mp3", " A4M": ".m4a" };

        function d(e, t, r) { return Object(n["a"])(this, void 0, Promise, (function() { var a, o, d, b, m, h, p, v, g, w, y, O, j, x, k; return Object(n["b"])(this, (function(n) { switch (n.label) {
                        case 0:
                            return o = Uint8Array.bind, [4, Object(i["d"])(e)];
                        case 1:
                            if (a = new(o.apply(Uint8Array, [void 0, n.sent()])), Object(i["b"])(a, u) && Object(i["b"])(a.slice(8, 12), l)) return [3, 4]; if ("xm" !== r) return [3, 2]; throw Error("此xm文件已损坏");
                        case 2:
                            return [4, s(e, t, r, !0)];
                        case 3:
                            return [2, n.sent()];
                        case 4:
                            if (d = (new TextDecoder).decode(a.slice(4, 8)), !f.hasOwnProperty(d)) throw Error("未知的.xm文件类型"); for (b = a[15], m = a[12] | a[13] << 8 | a[14] << 16, h = a.slice(16), p = h.length, v = m; v < p; ++v) h[v] = h[v] - b ^ 255; return g = f[d], w = i["a"][g], y = new Blob([h], { type: w }), [4, Object(c["parseBlob"])(y)];
                        case 5:
                            return O = n.sent(), "wav" === g && (console.info(O.common), O.common.album = "", O.common.artist = "", O.common.title = ""), j = Object(i["g"])(t, O.common.title, O.common.artist, -1 === t.indexOf("_") ? "-" : "_"), x = j.title, k = j.artist, [2, { title: x, artist: k, ext: g, mime: w, album: O.common.album, picture: Object(i["e"])(O), file: URL.createObjectURL(y), blob: y, rawExt: "xm" }] } })) })) } var b = r("8850");

        function m(e, t, r) { return Object(n["a"])(this, void 0, Promise, (function() { var r, a, o, s, u, l, f, d, m, h, p; return Object(n["b"])(this, (function(n) { switch (n.label) {
                        case 0:
                            return a = Uint8Array.bind, [4, Object(i["d"])(e)];
                        case 1:
                            for (r = new(a.apply(Uint8Array, [void 0, n.sent()])), o = r.length, s = 0; s < o; s++) r[s] ^= 244, r[s] <= 63 ? r[s] = 4 * r[s] : r[s] <= 127 ? r[s] = 4 * (r[s] - 64) + 1 : r[s] <= 191 ? r[s] = 4 * (r[s] - 128) + 2 : r[s] = 4 * (r[s] - 192) + 3; if (u = Object(i["i"])(r, ""), l = Object(i["j"])(t), "" === u && "mp3" !== l.ext) { if (l.ext in b["b"]) return f = new Blob([r], { type: "application/octet-stream" }), [2, Object(b["a"])(f, l.name, l.ext)]; throw "不支持的QQ音乐缓存格式" } return f = new Blob([r], { type: i["a"][u] }), [4, Object(c["parseBlob"])(f)];
                        case 2:
                            return d = n.sent(), m = Object(i["g"])(t, d.common.title, d.common.artist), h = m.title, p = m.artist, [2, { title: h, artist: p, ext: u, album: d.common.album, picture: Object(i["e"])(d), file: URL.createObjectURL(f), blob: f, mime: i["a"][u] }] } })) })) } var h = r("9224"),
            p = [5, 40, 188, 150, 233, 228, 90, 67, 145, 170, 189, 208, 122, 245, 54, 49],
            v = [124, 213, 50, 235, 134, 2, 127, 75, 168, 175, 166, 142, 15, 255, 153, 20],
            g = [37, 223, 232, 166, 117, 30, 117, 14, 47, 128, 243, 45, 184, 182, 227, 17, 0];

        function w(e, t, r) { return Object(n["a"])(this, void 0, Promise, (function() { var a, o, s, u, l, f, d, b, m, h, w, x, k, _, A, U, T; return Object(n["b"])(this, (function(n) { switch (n.label) {
                        case 0:
                            return o = Uint8Array.bind, [4, Object(i["d"])(e)];
                        case 1:
                            if (a = new(o.apply(Uint8Array, [void 0, n.sent()])), "vpr" === r) { if (!Object(i["b"])(a, p)) throw Error("Not a valid vpr file!") } else if (!Object(i["b"])(a, v)) throw Error("Not a valid kgm(a) file!"); if (s = new DataView(a.slice(16, 20).buffer), u = s.getUint32(0, !0), l = a.slice(u), f = l.length, l.byteLength > 1 << 26) throw Error("文件过大，请使用 <a target='_blank' href='https://github.com/unlock-music/cli'>CLI版本</a> 进行解锁"); return d = new Uint8Array(17), d.set(a.slice(28, 44), 0), 0 !== O.length ? [3, 3] : [4, j()];
                        case 2:
                            if (!n.sent()) throw Error("加载Kgm/Vpr Mask数据失败");
                            n.label = 3;
                        case 3:
                            for (h = 0; h < f; h++) b = d[h % 17] ^ l[h], b ^= (15 & b) << 4, m = y(h), m ^= (15 & m) << 4, l[h] = b ^ m; if ("vpr" === r)
                                for (h = 0; h < f; h++) l[h] ^= g[h % 17]; return w = Object(i["i"])(l), x = i["a"][w], k = new Blob([l], { type: x }), [4, Object(c["parseBlob"])(k)];
                        case 4:
                            return _ = n.sent(), A = Object(i["g"])(t, _.common.title, _.common.artist), U = A.title, T = A.artist, [2, { album: _.common.album, picture: Object(i["e"])(_), file: URL.createObjectURL(k), blob: k, ext: w, mime: x, title: U, artist: T }] } })) })) }

        function y(e) { return x[e % 272] ^ O[e >> 4] } var O = new Uint8Array(0);

        function j() { return Object(n["a"])(this, void 0, Promise, (function() { var e, t, r, a; return Object(n["b"])(this, (function(n) { switch (n.label) {
                        case 0:
                            e = "https://cdn.jsdelivr.net/gh/unlock-music/unlock-music@" + h.version + "/public/static/kgm.mask", ["http:", "https:"].some((function(e) { return e == self.location.protocol })) && (e = self.document ? "./static/kgm.mask" : "../static/kgm.mask"), n.label = 1;
                        case 1:
                            return n.trys.push([1, 4, , 5]), [4, fetch(e, { method: "GET" })];
                        case 2:
                            return t = n.sent(), r = Uint8Array.bind, [4, t.arrayBuffer()];
                        case 3:
                            return O = new(r.apply(Uint8Array, [void 0, n.sent()])), [2, !0];
                        case 4:
                            return a = n.sent(), console.error(a), [2, !1];
                        case 5:
                            return [2] } })) })) } var x = [184, 213, 61, 178, 233, 175, 120, 140, 131, 51, 113, 81, 118, 160, 205, 55, 47, 62, 53, 141, 169, 190, 152, 183, 231, 140, 34, 206, 90, 97, 223, 104, 105, 137, 254, 165, 182, 222, 169, 119, 252, 200, 189, 189, 229, 109, 62, 90, 54, 239, 105, 78, 190, 225, 233, 102, 28, 243, 217, 2, 182, 242, 18, 155, 68, 208, 111, 185, 53, 137, 182, 70, 109, 115, 130, 6, 105, 193, 237, 215, 133, 194, 48, 223, 162, 98, 190, 121, 45, 98, 98, 61, 13, 126, 190, 72, 137, 35, 2, 160, 228, 213, 117, 81, 50, 2, 83, 253, 22, 58, 33, 59, 22, 15, 195, 178, 187, 179, 226, 186, 58, 61, 19, 236, 246, 1, 69, 132, 165, 112, 15, 147, 73, 12, 100, 205, 49, 213, 204, 76, 7, 1, 158, 0, 26, 35, 144, 191, 136, 30, 59, 171, 166, 62, 196, 115, 71, 16, 126, 59, 94, 188, 227, 0, 132, 255, 9, 212, 224, 137, 15, 91, 88, 112, 79, 251, 101, 216, 92, 83, 27, 211, 200, 198, 191, 239, 152, 176, 80, 79, 15, 234, 229, 131, 88, 140, 40, 44, 132, 103, 205, 208, 158, 71, 219, 39, 80, 202, 244, 99, 99, 232, 151, 127, 27, 75, 12, 194, 193, 33, 76, 204, 88, 245, 148, 82, 163, 243, 211, 224, 104, 244, 0, 35, 243, 94, 10, 123, 147, 221, 171, 18, 178, 19, 232, 132, 215, 167, 159, 15, 50, 76, 85, 29, 4, 54, 82, 220, 3, 243, 249, 78, 66, 233, 61, 97, 239, 124, 182, 179, 147, 80],
            k = (r("25f0"), r("843c"), [121, 101, 101, 108, 105, 111, 110, 45, 107, 117, 119, 111, 45, 116, 109, 101]),
            _ = "MoOtOiTvINGwd2E6n0E1i7L5t2IoOoNk";

        function A(e, t, r) { return Object(n["a"])(this, void 0, Promise, (function() { var r, a, o, u, l, f, d, b, m, h, p, v, g, w; return Object(n["b"])(this, (function(n) { switch (n.label) {
                        case 0:
                            return a = Uint8Array.bind, [4, Object(i["d"])(e)];
                        case 1:
                            return r = new(a.apply(Uint8Array, [void 0, n.sent()])), Object(i["b"])(r, k) ? [3, 4] : "aac" !== Object(i["i"])(r) ? [3, 3] : [4, s(e, t, "aac", !1)];
                        case 2:
                            return [2, n.sent()];
                        case 3:
                            throw Error("not a valid kwm file");
                        case 4:
                            for (o = r.slice(24, 32), u = U(o), l = r.slice(1024), f = l.length, d = 0; d < f; ++d) l[d] ^= u[d % 32]; return b = Object(i["i"])(l), m = i["a"][b], h = new Blob([l], { type: m }), [4, Object(c["parseBlob"])(h)];
                        case 5:
                            return p = n.sent(), v = Object(i["g"])(t, p.common.title, p.common.artist), g = v.title, w = v.artist, [2, { album: p.common.album, picture: Object(i["e"])(p), file: URL.createObjectURL(h), blob: h, mime: m, title: g, artist: w, ext: b }] } })) })) }

        function U(e) { for (var t = new DataView(e.buffer), r = t.getBigUint64(0, !0).toString(), n = T(r), a = new Uint8Array(32), i = 0; i < 32; i++) a[i] = _.charCodeAt(i) ^ n.charCodeAt(i); return a }

        function T(e) { var t = e.length,
                r = e; return t > 32 ? r = e.slice(0, 32) : t < 32 && (r = e.padEnd(32, e)), r } var M = [0, 0, 0, 32, 102, 116, 121, 112];

        function P(e, t) { return Object(n["a"])(this, void 0, Promise, (function() { var r, a, c, o; return Object(n["b"])(this, (function(n) { switch (n.label) {
                        case 0:
                            return a = Uint8Array.bind, [4, Object(i["d"])(e)];
                        case 1:
                            for (r = new(a.apply(Uint8Array, [void 0, n.sent()])), c = 0; c < 8; ++c) r[c] = M[c]; return o = new Blob([r], { type: "audio/mp4" }), [4, s(o, t, "m4a", !1)];
                        case 2:
                            return [2, n.sent()] } })) })) }

        function S(e) { return Object(n["a"])(this, void 0, Promise, (function() { var t, r, c; return Object(n["b"])(this, (function(n) { switch (n.label) {
                        case 0:
                            switch (t = Object(i["j"])(e.name), c = t.ext, c) {
                                case "ncm":
                                    return [3, 1];
                                case "uc":
                                    return [3, 3];
                                case "kwm":
                                    return [3, 5];
                                case "xm":
                                    return [3, 7];
                                case "wav":
                                    return [3, 7];
                                case "mp3":
                                    return [3, 7];
                                case "flac":
                                    return [3, 7];
                                case "m4a":
                                    return [3, 7];
                                case "ogg":
                                    return [3, 9];
                                case "tm0":
                                    return [3, 11];
                                case "tm3":
                                    return [3, 11];
                                case "qmc3":
                                    return [3, 13];
                                case "qmc2":
                                    return [3, 13];
                                case "qmc0":
                                    return [3, 13];
                                case "qmcflac":
                                    return [3, 13];
                                case "qmcogg":
                                    return [3, 13];
                                case "tkm":
                                    return [3, 13];
                                case "bkcmp3":
                                    return [3, 13];
                                case "bkcflac":
                                    return [3, 13];
                                case "mflac":
                                    return [3, 13];
                                case "mgg":
                                    return [3, 13];
                                case "666c6163":
                                    return [3, 13];
                                case "6d7033":
                                    return [3, 13];
                                case "6f6767":
                                    return [3, 13];
                                case "6d3461":
                                    return [3, 13];
                                case "776176":
                                    return [3, 13];
                                case "tm2":
                                    return [3, 15];
                                case "tm6":
                                    return [3, 15];
                                case "cache":
                                    return [3, 17];
                                case "vpr":
                                    return [3, 19];
                                case "kgm":
                                    return [3, 19];
                                case "kgma":
                                    return [3, 19] } return [3, 21];
                        case 1:
                            return [4, Object(a["a"])(e.raw, t.name, t.ext)];
                        case 2:
                            return r = n.sent(), [3, 22];
                        case 3:
                            return [4, o(e.raw, t.name, t.ext)];
                        case 4:
                            return r = n.sent(), [3, 22];
                        case 5:
                            return [4, A(e.raw, t.name, t.ext)];
                        case 6:
                            return r = n.sent(), [3, 22];
                        case 7:
                            return [4, d(e.raw, t.name, t.ext)];
                        case 8:
                            return r = n.sent(), [3, 22];
                        case 9:
                            return [4, s(e.raw, t.name, t.ext)];
                        case 10:
                            return r = n.sent(), [3, 22];
                        case 11:
                            return [4, s(e.raw, t.name, "mp3")];
                        case 12:
                            return r = n.sent(), [3, 22];
                        case 13:
                            return [4, Object(b["a"])(e.raw, t.name, t.ext)];
                        case 14:
                            return r = n.sent(), [3, 22];
                        case 15:
                            return [4, P(e.raw, t.name)];
                        case 16:
                            return r = n.sent(), [3, 22];
                        case 17:
                            return [4, m(e.raw, t.name, t.ext)];
                        case 18:
                            return r = n.sent(), [3, 22];
                        case 19:
                            return [4, w(e.raw, t.name, t.ext)];
                        case 20:
                            return r = n.sent(), [3, 22];
                        case 21:
                            throw "不支持此文件格式";
                        case 22:
                            return r.rawExt || (r.rawExt = t.ext), r.rawFilename || (r.rawFilename = t.name), console.log(r), [2, r] } })) })) } } });