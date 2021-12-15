(function(t) {
    function e(e) { for (var n, c, o = e[0], s = e[1], l = e[2], f = 0, d = []; f < o.length; f++) c = o[f], Object.prototype.hasOwnProperty.call(a, c) && a[c] && d.push(a[c][0]), a[c] = 0; for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
        u && u(e); while (d.length) d.shift()(); return i.push.apply(i, l || []), r() }

    function r() { for (var t, e = 0; e < i.length; e++) { for (var r = i[e], n = !0, o = 1; o < r.length; o++) { var s = r[o];
                0 !== a[s] && (n = !1) }
            n && (i.splice(e--, 1), t = c(c.s = r[0])) } return t } var n = {},
        a = { app: 0 },
        i = [];

    function c(e) { if (n[e]) return n[e].exports; var r = n[e] = { i: e, l: !1, exports: {} }; return t[e].call(r.exports, r, r.exports, c), r.l = !0, r.exports }
    c.m = t, c.c = n, c.d = function(t, e, r) { c.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, c.r = function(t) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, c.t = function(t, e) { if (1 & e && (t = c(t)), 8 & e) return t; if (4 & e && "object" === typeof t && t && t.__esModule) return t; var r = Object.create(null); if (c.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var n in t) c.d(r, n, function(e) { return t[e] }.bind(null, n)); return r }, c.n = function(t) { var e = t && t.__esModule ? function() { return t["default"] } : function() { return t }; return c.d(e, "a", e), e }, c.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, c.p = ""; var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
        s = o.push.bind(o);
    o.push = e, o = o.slice(); for (var l = 0; l < o.length; l++) e(o[l]); var u = s;
    i.push([0, "chunk-vendors"]), r() })({ 0: function(t, e, r) { t.exports = r("cd49") }, "0565": function(t, e, r) { "use strict";
        (function(t) { var n = r("7327"),
                a = r("731b"),
                i = r("25f1"),
                c = r("eaa5"),
                o = r("73ec");
            e["a"] = { name: "FileSelector", data() { return { task_all: 0, task_finished: 0, queue: new o["a"], parallel: !1 } }, computed: { progress_value() { return this.task_all ? this.task_finished / this.task_all * 100 : 0 }, progress_show() { return this.task_all !== this.task_finished } }, mounted() { window.Worker && "file:" !== window.location.protocol ? (console.log("Using Worker Pool"), this.queue = Object(n["a"])(() => Object(a["a"])(new i["a"](t)), navigator.hardwareConcurrency || 1), this.parallel = !0) : console.log("Using Queue in Main Thread") }, methods: { progress_string() { return `${this.task_finished} / ${this.task_all}` }, async addFile(t) { this.task_all++, this.queue.queue(async(e = c["a"]) => { console.log("start handling", t.name); try { this.$emit("success", await e(t)) } catch (r) { console.error(r), this.$emit("error", r, t.name) } finally { this.task_finished++ } }) } } } }).call(this, r("2e83")) }, 1: function(t, e) {}, 2: function(t, e) {}, "2e83": function(t, e, r) { t.exports = r.p + "js/0.1a49785e.worker.js" }, 3: function(t, e) {}, 3349: function(t, e, r) { "use strict";
        r.d(e, "a", (function() { return f })), r.d(e, "d", (function() { return d })), r.d(e, "b", (function() { return m })), r.d(e, "c", (function() { return h }));
        r("219c"); var n = r("cc74"),
            a = [79, 103, 103, 83, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0, 255, 255, 255, 255, 1, 30, 1, 118, 111, 114, 98, 105, 115, 0, 0, 0, 0, 2, 68, 172, 0, 0, 0, 0, 0, 0, 0, 238, 2, 0, 0, 0, 0, 0, 184, 1, 79, 103, 103, 83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 1, 0, 0, 0, 255, 255, 255, 255],
            i = [3, 118, 111, 114, 98, 105, 115, 44, 0, 0, 0, 88, 105, 112, 104, 46, 79, 114, 103, 32, 108, 105, 98, 86, 111, 114, 98, 105, 115, 32, 73, 32, 50, 48, 49, 53, 48, 49, 48, 53, 32, 40, 226, 155, 132, 226, 155, 132, 226, 155, 132, 226, 155, 132, 41, 255, 0, 0, 0, 255, 0, 0, 0, 84, 73, 84, 76, 69, 61],
            c = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 9, 9, 9, 9, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 6, 3, 3, 3, 3, 6, 6, 6, 6, 3, 3, 3, 3, 6, 6, 6, 6, 6, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 9, 9, 9, 9, 0, 0, 0, 0],
            o = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 3, 3, 0, 1, 3, 3, 3, 3, 3, 3, 3, 3],
            s = [222, 81, 250, 195, 74, 214, 202, 144, 126, 103, 94, 247, 213, 82, 132, 216, 71, 149, 187, 161, 170, 198, 102, 35, 146, 98, 243, 116, 161, 159, 244, 160, 29, 63, 91, 240, 19, 14, 9, 61, 249, 188, 0, 17],
            l = [],
            u = [];
        (function() { for (var t = 0; t < 128; t++) { var e = (t * t + 27) % 256;
                e in l ? l[e].push(t) : l[e] = [t] } var r = 0;
            l.forEach((function(t) { t.forEach((function(t) { u[t] = r })), r++ })) })(); var f = function() {
            function t(t) { if (t instanceof Uint8Array && (t = Array.from(t)), 44 === t.length) this.Matrix128 = this._generate128(t);
                else { if (128 !== t.length) throw Error("invalid mask length");
                    this.Matrix128 = t } } return t.prototype.getMatrix128 = function() { return this.Matrix128 }, t.prototype.getMatrix44 = function() { var t = this,
                    e = [],
                    r = 0; return l.forEach((function(n) { for (var a = n.length, i = 1; i < a; i++)
                        if (t.Matrix128[n[0]] !== t.Matrix128[n[i]]) throw "decode mask-128 to mask-44 failed";
                    e[r] = t.Matrix128[n[0]], r++ })), e }, t.prototype.Decrypt = function(t) { if (!this.Matrix128) throw Error("bad call sequence"); for (var e = t.slice(0), r = -1, n = -1, a = 0; a < t.length; a++) r++, n++, (32768 === r || r > 32768 && (r + 1) % 32768 === 0) && (r++, n++), n >= 128 && (n -= 128), e[a] ^= this.Matrix128[n]; return e }, t.prototype._generate128 = function(t) { var e = [],
                    r = 0; return l.forEach((function(n) { n.forEach((function(n) { e[n] = t[r] })), r++ })), e }, t }();

        function d() { return new f(s) }

        function m(t) { for (var e = Math.min(32768, t.length), r = 0; r < e; r += 128) try { var a = new f(t.slice(r, r + 128)); if (Object(n["b"])(a.Decrypt(t.slice(0, n["c"].length)), n["c"])) return a } catch (i) {} }

        function h(t) { if (!(t.length < 256)) { for (var e = {}, r = 0; r < 44; r++) e[r] = {}; for (var i = t[84] ^ t[12] ^ a[12], c = p(i), o = v(i), s = 0; s < c.length; s++)
                    if (0 !== o[s]) { var l = u[s % 128],
                            d = t[s] ^ c[s],
                            m = o[s];
                        d in e[l] ? e[l][d] += m : e[l][d] = m }
                var h = []; try { for (r = 0; r < 44; r++) h[r] = b(e[r]) } catch (g) { return } var w = new f(h); return Object(n["b"])(w.Decrypt(t.slice(0, n["h"].length)), n["h"]) ? w : void 0 } }

        function b(t) { var e = Object.keys(t).length; if (0 === e) throw "can not match at least one key";
            e > 1 && console.warn("There are 2 potential value for the mask!"); var r = "",
                n = 0; for (var a in t) t[a] > n && (r = a, n = t[a]); return Number(r) }

        function p(t) { for (var e = [t, 255], r = 2; r < t; r++) e.push(255); return e.push(255), a.concat(e, i) }

        function v(t) { for (var e = [6, 0], r = 2; r < t; r++) e.push(4); return e.push(0), c.concat(e, o) } }, 4: function(t, e) {}, 5: function(t, e) {}, "5c0b": function(t, e, r) { "use strict";
        r("9c0c") }, 6: function(t, e) {}, "6d95": function(t, e, r) { "use strict";
        (function(t) { r.d(e, "a", (function() { return k }));
            r("219c"); var n = r("9ab4"),
                a = r("cc74"),
                i = r("cb96"),
                c = r("ef21"),
                o = r.n(c),
                s = r("c198"),
                l = r.n(s),
                u = r("ead9"),
                f = r.n(u),
                d = r("81bf"),
                m = r.n(d),
                h = r("17e1"),
                b = r.n(h),
                p = r("1132"),
                v = r.n(p),
                w = r("f8d5"),
                g = r.n(w),
                y = r("640f"),
                O = r.n(y),
                j = O.a.parse("687a4852416d736f356b496e62617857"),
                _ = O.a.parse("2331346C6A6B5F215C5D2630553C2728"),
                x = [67, 84, 69, 78, 70, 68, 65, 77];

            function k(t, e, r) { return Object(n["a"])(this, void 0, Promise, (function() { var r; return Object(n["b"])(this, (function(n) { switch (n.label) {
                            case 0:
                                return r = A.bind, [4, Object(a["d"])(t)];
                            case 1:
                                return [2, (new(r.apply(A, [void 0, n.sent(), e]))).decrypt()] } })) })) } var A = function() {
                function e(t, e) { this.offset = 0, this.format = "", this.mime = ""; var r = new Uint8Array(t, 0, 8); if (!Object(a["b"])(r, x)) throw Error("此ncm文件已损坏");
                    this.offset = 10, this.raw = t, this.view = new DataView(t), this.filename = e } return e.prototype._getKeyData = function() { var t = this.view.getUint32(this.offset, !0);
                    this.offset += 4; var e = new Uint8Array(this.raw, this.offset, t).map((function(t) { return 100 ^ t }));
                    this.offset += t; for (var r = l.a.decrypt({ ciphertext: b.a.create(e) }, j, { mode: m.a, padding: f.a }), n = new Uint8Array(r.sigBytes), a = r.words, i = r.sigBytes, c = 0; c < i; c++) n[c] = a[c >>> 2] >>> 24 - c % 4 * 8 & 255; return n.slice(17) }, e.prototype._getKeyBox = function() { for (var t, e = this._getKeyData(), r = new Uint8Array(Array(256).keys()), n = e.length, a = 0, i = 0; i < 256; i++) a = r[i] + a + e[i % n] & 255, t = [r[a], r[i]], r[i] = t[0], r[a] = t[1]; return r.map((function(t, e, r) { e = e + 1 & 255; var n = r[e],
                            a = r[e + n & 255]; return r[n + a & 255] })) }, e.prototype._getMetaData = function() { var t = this.view.getUint32(this.offset, !0); if (this.offset += 4, 0 === t) return {}; var e = new Uint8Array(this.raw, this.offset, t).map((function(t) { return 99 ^ t }));
                    this.offset += t, b.a.create(); var r, n = l.a.decrypt({ ciphertext: v.a.parse(b.a.create(e.slice(22)).toString(g.a)) }, _, { mode: m.a, padding: f.a }).toString(g.a),
                        a = n.indexOf(":"); if ("dj" === n.slice(0, a)) { var i = JSON.parse(n.slice(a + 1));
                        r = i.mainMusic } else r = JSON.parse(n.slice(a + 1)); return r.albumPic && (r.albumPic = r.albumPic.replace("http://", "https://") + "?param=500y500"), r }, e.prototype._getAudio = function(t) { this.offset += this.view.getUint32(this.offset + 5, !0) + 13; for (var e = new Uint8Array(this.raw, this.offset), r = e.length, n = 0; n < r; ++n) e[n] ^= t[255 & n]; return e }, e.prototype._buildMeta = function() { var e; return Object(n["a"])(this, void 0, void 0, (function() { var r, i, c, s, l, u; return Object(n["b"])(this, (function(n) { switch (n.label) {
                                case 0:
                                    if (!this.oriMeta) throw Error("invalid sequence"); if (r = Object(a["g"])(this.filename, this.oriMeta.musicName), i = [], this.oriMeta.artist && this.oriMeta.artist.forEach((function(t) { return i.push(t[0]) })), 0 === i.length && r.artist && (i = r.artist.split(",").map((function(t) { return t.trim() })).filter((function(t) { return "" != t }))), !this.oriMeta.albumPic) return [3, 9];
                                    n.label = 1;
                                case 1:
                                    return n.trys.push([1, 8, , 9]), c = this, [4, Object(a["f"])(this.oriMeta.albumPic)];
                                case 2:
                                    c.image = n.sent(), n.label = 3;
                                case 3:
                                    return this.image && this.image.buffer.byteLength >= 1 << 24 ? [4, o.a.read(t.from(this.image.buffer))] : [3, 7];
                                case 4:
                                    return s = n.sent(), [4, s.resize(Math.round(s.getHeight() / 2), o.a.AUTO)];
                                case 5:
                                    return n.sent(), l = this.image, [4, s.getBufferAsync("image/jpeg")];
                                case 6:
                                    return l.buffer = n.sent(), [3, 3];
                                case 7:
                                    return [3, 9];
                                case 8:
                                    return u = n.sent(), console.log("get cover image failed", u), [3, 9];
                                case 9:
                                    return this.newMeta = { title: r.title, artists: i, album: this.oriMeta.album, picture: null === (e = this.image) || void 0 === e ? void 0 : e.buffer }, [2] } })) })) }, e.prototype._writeMeta = function() { return Object(n["a"])(this, void 0, void 0, (function() { var e, r; return Object(n["b"])(this, (function(n) { switch (n.label) {
                                case 0:
                                    if (!this.audio || !this.newMeta) throw Error("invalid sequence"); return this.blob || (this.blob = new Blob([this.audio], { type: this.mime })), [4, Object(i["parseBlob"])(this.blob)];
                                case 1:
                                    if (e = n.sent(), r = !e.common.album && !e.common.artists && !e.common.title, r || this.newMeta.picture) { if ("mp3" === this.format) this.audio = Object(a["l"])(t.from(this.audio), this.newMeta, e);
                                        else { if ("flac" !== this.format) return console.info("writing meta for " + this.format + " is not being supported for now"), [2];
                                            this.audio = Object(a["k"])(t.from(this.audio), this.newMeta, e) }
                                        this.blob = new Blob([this.audio], { type: this.mime }) } return [2] } })) })) }, e.prototype.gatherResult = function() { var t, e; if (!this.newMeta) throw Error("bad sequence"); return { title: this.newMeta.title, artist: null === (t = this.newMeta.artists) || void 0 === t ? void 0 : t.join("; "), ext: this.format, album: this.newMeta.album, picture: null === (e = this.image) || void 0 === e ? void 0 : e.url, file: URL.createObjectURL(this.blob), blob: this.blob, mime: this.mime } }, e.prototype.decrypt = function() { return Object(n["a"])(this, void 0, void 0, (function() { var t, e; return Object(n["b"])(this, (function(r) { switch (r.label) {
                                case 0:
                                    return t = this._getKeyBox(), this.oriMeta = this._getMetaData(), this.audio = this._getAudio(t), this.format = this.oriMeta.format || Object(a["i"])(this.audio), this.mime = a["a"][this.format], [4, this._buildMeta()];
                                case 1:
                                    r.sent(), r.label = 2;
                                case 2:
                                    return r.trys.push([2, 4, , 5]), [4, this._writeMeta()];
                                case 3:
                                    return r.sent(), [3, 5];
                                case 4:
                                    return e = r.sent(), console.warn("write meta data failed", e), [3, 5];
                                case 5:
                                    return [2, this.gatherResult()] } })) })) }, e }() }).call(this, r("1c35").Buffer) }, "73ec": function(t, e, r) { "use strict";
        r.d(e, "e", (function() { return n })), r.d(e, "d", (function() { return i })), r.d(e, "b", (function() { return o })), r.d(e, "c", (function() { return s })), r.d(e, "f", (function() { return l })), r.d(e, "a", (function() { return u })); var n, a = r("9ab4");
        (function(t) { t[t["ArtistAndTitle"] = 0] = "ArtistAndTitle", t[t["TitleOnly"] = 1] = "TitleOnly", t[t["TitleAndArtist"] = 2] = "TitleAndArtist", t[t["SameAsOriginal"] = 3] = "SameAsOriginal" })(n || (n = {})); var i = [{ key: n.ArtistAndTitle, text: "歌手-歌曲名" }, { key: n.TitleOnly, text: "歌曲名" }, { key: n.TitleAndArtist, text: "歌曲名-歌手" }, { key: n.SameAsOriginal, text: "同源文件名" }];

        function c(t, e) { switch (e) {
                case n.TitleOnly:
                    return t.title + "." + t.ext;
                case n.TitleAndArtist:
                    return t.title + " - " + t.artist + "." + t.ext;
                case n.SameAsOriginal:
                    return t.rawFilename + "." + t.ext;
                default:
                case n.ArtistAndTitle:
                    return t.artist + " - " + t.title + "." + t.ext } }

        function o(t, e, r) { return Object(a["a"])(this, void 0, void 0, (function() { var n, i, o; return Object(a["b"])(this, (function(a) { switch (a.label) {
                        case 0:
                            n = c(t, e), a.label = 1;
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
                            return o = a.sent(), [4, o.write(t.blob)];
                        case 7:
                            return a.sent(), [4, o.close()];
                        case 8:
                            return a.sent(), [2] } })) })) }

        function s(t, e) { var r = document.createElement("a");
            r.href = t.file, r.download = c(t, e), document.body.append(r), r.click(), r.remove() }

        function l(t) { var e;
            URL.revokeObjectURL(t.file), (null === (e = t.picture) || void 0 === e ? void 0 : e.startsWith("blob:")) && URL.revokeObjectURL(t.picture) } var u = function() {
            function t() { this.pending = [] } return t.prototype.queue = function(t) { this.pending.push(t), this.consume() }, t.prototype.consume = function() { var t = this,
                    e = this.pending.shift();
                e && e().then((function() { return t.consume })).catch(console.error) }, t }() }, 8850: function(t, e, r) { "use strict";
        (function(t) { r.d(e, "b", (function() { return f })), r.d(e, "a", (function() { return d }));
            r("219c"); var n = r("9ab4"),
                a = r("3349"),
                i = r("1fb5"),
                c = r("cc74"),
                o = r("cb96"),
                s = r("acf9"),
                l = r.n(s),
                u = r("97e5"),
                f = { mgg: { handler: a["c"], ext: "ogg", detect: !0 }, mflac: { handler: a["b"], ext: "flac", detect: !0 }, "mgg.cache": { handler: a["c"], ext: "ogg", detect: !1 }, "mflac.cache": { handler: a["b"], ext: "flac", detect: !1 }, qmc0: { handler: a["d"], ext: "mp3", detect: !1 }, qmc2: { handler: a["d"], ext: "ogg", detect: !1 }, qmc3: { handler: a["d"], ext: "mp3", detect: !1 }, qmcogg: { handler: a["d"], ext: "ogg", detect: !1 }, qmcflac: { handler: a["d"], ext: "flac", detect: !1 }, bkcmp3: { handler: a["d"], ext: "mp3", detect: !1 }, bkcflac: { handler: a["d"], ext: "flac", detect: !1 }, tkm: { handler: a["d"], ext: "m4a", detect: !1 }, "666c6163": { handler: a["d"], ext: "flac", detect: !1 }, "6d7033": { handler: a["d"], ext: "mp3", detect: !1 }, "6f6767": { handler: a["d"], ext: "ogg", detect: !1 }, "6d3461": { handler: a["d"], ext: "m4a", detect: !1 }, 776176: { handler: a["d"], ext: "wav", detect: !1 } };

            function d(e, r, a) { var i, s, d, b; return Object(n["a"])(this, void 0, Promise, (function() { var p, v, w, g, y, O, j, _, x, k, A, U, T, M, P, S, B, E; return Object(n["b"])(this, (function(n) { switch (n.label) {
                            case 0:
                                if (!(a in f)) throw "Qmc cannot handle type: " + a; return p = f[a], w = Uint8Array.bind, [4, Object(c["d"])(e)];
                            case 1:
                                return v = new(w.apply(Uint8Array, [void 0, n.sent()])), p.detect ? (j = new DataView(v.slice(v.length - 4).buffer).getUint32(0, !0), _ = v.length - 4 - j, g = v.slice(0, _), y = p.handler(g), O = v.slice(_, _ + j), y ? [3, 3] : [4, m(O, r, a)]) : [3, 4];
                            case 2:
                                y = n.sent(), n.label = 3;
                            case 3:
                                if (!y) throw a + "格式仅提供实验性支持"; return [3, 5];
                            case 4:
                                if (g = v, y = p.handler(g), !y) throw a + "格式仅提供实验性支持";
                                n.label = 5;
                            case 5:
                                return x = y.Decrypt(g), k = Object(c["i"])(x, p.ext), A = c["a"][k], U = new Blob([x], { type: A }), [4, Object(o["parseBlob"])(U)];
                            case 6:
                                for (M in T = n.sent(), T.native) T.native.hasOwnProperty(M) && T.native[M].some((function(t) { return "TCON" === t.id && "(12)" === t.value })) && (console.warn("try using gbk encoding to decode meta"), T.common.artist = l.a.decode(new t(null !== (i = T.common.artist) && void 0 !== i ? i : ""), "gbk"), T.common.title = l.a.decode(new t(null !== (s = T.common.title) && void 0 !== s ? s : ""), "gbk"), T.common.album = l.a.decode(new t(null !== (d = T.common.album) && void 0 !== d ? d : ""), "gbk")); return P = Object(c["g"])(r, T.common.title, T.common.artist), O && Object(u["d"])(O, y.getMatrix128(), r, a, P.title, P.artist, T.common.album).then().catch(), S = Object(c["e"])(T), S ? [3, 9] : [4, h(P.title, P.artist, T.common.album)];
                            case 7:
                                return S = n.sent(), S ? [4, Object(c["f"])(S)] : [3, 9];
                            case 8:
                                if (B = n.sent(), B) { S = B.url; try { E = { picture: B.buffer, title: P.title, artists: null === (b = P.artist) || void 0 === b ? void 0 : b.split(" _ ") }, "mp3" === k ? (x = Object(c["l"])(t.from(x), E, T), U = new Blob([x], { type: A })) : "flac" === k ? (x = Object(c["k"])(t.from(x), E, T), U = new Blob([x], { type: A })) : console.info("writing metadata for " + k + " is not being supported for now") } catch (D) { console.warn("Error while appending cover image to file " + D) } }
                                n.label = 9;
                            case 9:
                                return [2, { title: P.title, artist: P.artist, ext: k, album: T.common.album, picture: S, file: URL.createObjectURL(U), blob: U, mime: A }] } })) })) }

            function m(t, e, r) { return Object(n["a"])(this, void 0, Promise, (function() { var c, o; return Object(n["b"])(this, (function(n) { switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]), [4, Object(u["c"])(t, e, r)];
                            case 1:
                                return c = n.sent(), [2, new a["a"](Object(i["toByteArray"])(c.Matrix44))];
                            case 2:
                                return o = n.sent(), console.warn(o), [3, 3];
                            case 3:
                                return [2] } })) })) }

            function h(t, e, r) { return Object(n["a"])(this, void 0, Promise, (function() { var a, i, c; return Object(n["b"])(this, (function(n) { switch (n.label) {
                            case 0:
                                a = "https://stats.ixarea.com/apis/music/qq-cover", n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, Object(u["b"])(t, e, r)];
                            case 2:
                                return i = n.sent(), [2, a + "/" + i.Type + "/" + i.Id];
                            case 3:
                                return c = n.sent(), console.warn(c), [3, 4];
                            case 4:
                                return [2, ""] } })) })) } }).call(this, r("1c35").Buffer) }, 9224: function(t) { t.exports = JSON.parse('{"name":"unlock-music","version":"v1.9.1","updateInfo":"新增写入本地文件系统; 优化.kwm解锁; 支持.acc嗅探; 使用Typescript重构","license":"MIT","description":"Unlock encrypted music file in browser.","repository":{"type":"git","url":"https://github.com/ix64/unlock-music"},"private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","fix-compatibility":"node ./src/fix-compatibility.js","make-extension":"node ./make-extension.js"},"dependencies":{"base64-js":"^1.5.1","browser-id3-writer":"^4.4.0","core-js":"^3.16.0","crypto-js":"^4.1.1","element-ui":"^2.15.5","iconv-lite":"^0.6.3","jimp":"^0.16.1","metaflac-js":"^1.0.5","music-metadata":"7.9.0","music-metadata-browser":"2.2.7","register-service-worker":"^1.7.2","threads":"^1.6.5","vue":"^2.6.14"},"devDependencies":{"@types/crypto-js":"^4.0.2","@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-pwa":"^4.5.13","@vue/cli-plugin-typescript":"^4.5.13","@vue/cli-service":"^4.5.13","babel-plugin-component":"^1.1.1","sass":"^1.38.1","sass-loader":"^10.2.0","semver":"^7.3.5","threads-plugin":"^1.4.0","typescript":"~4.1.6","vue-cli-plugin-element":"^1.0.1","vue-template-compiler":"^2.6.14"}}') }, "97e5": function(t, e, r) { "use strict";
        r.d(e, "a", (function() { return c })), r.d(e, "d", (function() { return o })), r.d(e, "c", (function() { return s })), r.d(e, "b", (function() { return l }));
        r("219c"); var n = r("9ab4"),
            a = r("1fb5"),
            i = "https://um-api.ixarea.com";

        function c(t) { return Object(n["a"])(this, void 0, Promise, (function() { var e; return Object(n["b"])(this, (function(r) { switch (r.label) {
                        case 0:
                            return [4, fetch(i + "/music/app-version", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ Version: t }) })];
                        case 1:
                            return e = r.sent(), [4, e.json()];
                        case 2:
                            return [2, r.sent()] } })) })) }

        function o(t, e, r, n, c, o, s) { return fetch(i + "/qmcmask/usage", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ Mask: Object(a["fromByteArray"])(new Uint8Array(e)), Key: Object(a["fromByteArray"])(t), Artist: o, Title: c, Album: s, Filename: r, Format: n }) }) }

        function s(t, e, r) { return Object(n["a"])(this, void 0, Promise, (function() { var c; return Object(n["b"])(this, (function(n) { switch (n.label) {
                        case 0:
                            return [4, fetch(i + "/qmcmask/query", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ Format: r, Key: Object(a["fromByteArray"])(t), Filename: e, Type: 44 }) })];
                        case 1:
                            return c = n.sent(), [4, c.json()];
                        case 2:
                            return [2, n.sent()] } })) })) }

        function l(t, e, r) { return Object(n["a"])(this, void 0, Promise, (function() { var a, c, o; return Object(n["b"])(this, (function(n) { switch (n.label) {
                        case 0:
                            return a = i + "/music/qq-cover", c = new URLSearchParams([
                                ["Title", t],
                                ["Artist", null !== e && void 0 !== e ? e : ""],
                                ["Album", null !== r && void 0 !== r ? r : ""]
                            ]), [4, fetch(a + "?" + c.toString())];
                        case 1:
                            return o = n.sent(), [4, o.json()];
                        case 2:
                            return [2, n.sent()] } })) })) } }, "9c0c": function(t, e, r) {}, cc74: function(t, e, r) { "use strict";
        (function(t) { r.d(e, "c", (function() { return s })), r.d(e, "h", (function() { return u })), r.d(e, "a", (function() { return p })), r.d(e, "b", (function() { return v })), r.d(e, "i", (function() { return w })), r.d(e, "d", (function() { return g })), r.d(e, "e", (function() { return y })), r.d(e, "g", (function() { return O })), r.d(e, "f", (function() { return j })), r.d(e, "l", (function() { return _ })), r.d(e, "k", (function() { return x })), r.d(e, "j", (function() { return k })); var n = r("9ab4"),
                a = r("7907"),
                i = r.n(a),
                c = r("b686"),
                o = r.n(c),
                s = [102, 76, 97, 67],
                l = [73, 68, 51],
                u = [79, 103, 103, 83],
                f = [102, 116, 121, 112],
                d = [48, 38, 178, 117, 142, 102, 207, 17, 166, 217, 0, 170, 0, 98, 206, 108],
                m = [82, 73, 70, 70],
                h = [255, 241],
                b = [70, 82, 77, 56],
                p = { mp3: "audio/mpeg", flac: "audio/flac", m4a: "audio/mp4", ogg: "audio/ogg", wma: "audio/x-ms-wma", wav: "audio/x-wav", dff: "audio/x-dff" };

            function v(t, e) { return !(e.length > t.length) && e.every((function(e, r) { return e === t[r] })) }

            function w(t, e) { return void 0 === e && (e = "mp3"), v(t, l) ? "mp3" : v(t, s) ? "flac" : v(t, u) ? "ogg" : t.length >= 4 + f.length && v(t.slice(4), f) ? "m4a" : v(t, m) ? "wav" : v(t, d) ? "wma" : v(t, h) ? "aac" : v(t, b) ? "dff" : e }

            function g(t) { return t.arrayBuffer ? t.arrayBuffer() : new Promise((function(e, r) { var n = new FileReader;
                    n.onload = function(t) { var n, a = null === (n = t.target) || void 0 === n ? void 0 : n.result;
                        a ? e(a) : r("read file failed") }, n.readAsArrayBuffer(t) })) }

            function y(t) { var e; return (null === (e = t.common) || void 0 === e ? void 0 : e.picture) && t.common.picture.length > 0 ? URL.createObjectURL(new Blob([t.common.picture[0].data], { type: t.common.picture[0].format })) : "" }

            function O(t, e, r, n) { void 0 === n && (n = "-"); var a = { title: null !== e && void 0 !== e ? e : "", artist: r },
                    i = t.split(n); return i.length > 1 ? (a.artist || (a.artist = i[0].trim()), a.title || (a.title = i[1].trim())) : 1 === i.length && (a.title || (a.title = i[0].trim())), a }

            function j(t) { return Object(n["a"])(this, void 0, Promise, (function() { var e, r, a, i, c; return Object(n["b"])(this, (function(n) { switch (n.label) {
                            case 0:
                                return n.trys.push([0, 4, , 5]), [4, fetch(t)];
                            case 1:
                                return e = n.sent(), r = e.headers.get("Content-Type"), (null === r || void 0 === r ? void 0 : r.startsWith("image/")) ? [4, e.arrayBuffer()] : [3, 3];
                            case 2:
                                return a = n.sent(), i = URL.createObjectURL(new Blob([a], { type: r })), [2, { buffer: a, url: i, mime: r }];
                            case 3:
                                return [3, 5];
                            case 4:
                                return c = n.sent(), console.warn(c), [3, 5];
                            case 5:
                                return [2] } })) })) }

            function _(t, e, r) { var n = new i.a(t),
                    a = r.native["ID3v2.4"] || r.native["ID3v2.3"] || r.native["ID3v2.2"] || [];
                a.forEach((function(t) { if ("TPE1" !== t.id && "TIT2" !== t.id && "TALB" !== t.id) try { n.setFrame(t.id, t.value) } catch (e) {} })); var c = r.common; return n.setFrame("TPE1", (null === c || void 0 === c ? void 0 : c.artists) || e.artists || []).setFrame("TIT2", (null === c || void 0 === c ? void 0 : c.title) || e.title).setFrame("TALB", (null === c || void 0 === c ? void 0 : c.album) || e.album || ""), e.picture && n.setFrame("APIC", { type: 3, data: e.picture, description: e.picture_desc || "Cover" }), n.addTag() }

            function x(e, r, n) { var a = new o.a(e),
                    i = n.common; return i.title || i.album || !i.artists || (a.setTag("TITLE=" + r.title), a.setTag("ALBUM=" + r.album), r.artists && (a.removeTag("ARTIST"), r.artists.forEach((function(t) { return a.setTag("ARTIST=" + t) })))), r.picture && a.importPictureFromBuffer(t.from(r.picture)), a.save() }

            function k(t) { var e = t.lastIndexOf("."); return { ext: t.substring(e + 1).toLowerCase(), name: t.substring(0, e) } } }).call(this, r("1c35").Buffer) }, cd49: function(t, e, r) { "use strict";
        r.r(e);
        r("9e1f"), r("450d"); var n = r("6ed5"),
            a = r.n(n),
            i = (r("46a1"), r("e5f2")),
            c = r.n(i),
            o = (r("6b30"), r("c284")),
            s = r.n(o),
            l = (r("0c67"), r("299c")),
            u = r.n(l),
            f = (r("b5d8"), r("f494")),
            d = r.n(f),
            m = (r("560b"), r("dcdc")),
            h = r.n(m),
            b = (r("f225"), r("89a9")),
            p = r.n(b),
            v = (r("f4f9"), r("c2cc")),
            w = r.n(v),
            g = (r("7a0f"), r("0f6c")),
            y = r.n(g),
            O = (r("aaa5"), r("a578")),
            j = r.n(O),
            _ = (r("adec"), r("3d2d")),
            x = r.n(_),
            k = (r("bdc7"), r("aa2f")),
            A = r.n(k),
            U = (r("de31"), r("c69e")),
            T = r.n(U),
            M = (r("5466"), r("ecdf")),
            P = r.n(M),
            S = (r("38a0"), r("ad41")),
            B = r.n(S),
            E = (r("1951"), r("eedf")),
            D = r.n(E),
            L = (r("acb6"), r("c673")),
            F = r.n(L),
            R = (r("fd71"), r("a447")),
            q = r.n(R),
            C = r("2b0e"),
            $ = function() { var t = this,
                    e = t.$createElement,
                    r = t._self._c || e; return r("el-container", { attrs: { id: "app" } }, [r("el-main", [r("Home")], 1), r("el-footer", { attrs: { id: "app-footer" } }, [r("el-row", [r("a", { attrs: { href: "https://github.com/ix64/unlock-music", target: "_blank" } }, [t._v("音乐解锁")]), t._v("(" + t._s(t.version) + ") ：移除已购音乐的加密保护。 "), r("a", { attrs: { href: "https://github.com/ix64/unlock-music/wiki/使用提示", target: "_blank" } }, [t._v("使用提示")])]), r("el-row", [t._v(" 目前支持网易云音乐(ncm), QQ音乐(qmc, mflac, mgg), 酷狗音乐(kgm), 虾米音乐(xm), 酷我音乐(.kwm) "), r("a", { attrs: { href: "https://github.com/ix64/unlock-music/blob/master/README.md", target: "_blank" } }, [t._v("更多")]), t._v("。 ")]), r("el-row", [r("span", [t._v("Copyright © 2019 - " + t._s((new Date).getFullYear()) + " MengYX")]), t._v(" 音乐解锁使用 "), r("a", { attrs: { href: "https://github.com/ix64/unlock-music/blob/master/LICENSE", target: "_blank" } }, [t._v("MIT许可协议")]), t._v(" 开放源代码镜像By小娱乐家 ")])], 1)], 1) },
            I = [],
            N = function() { var t = this,
                    e = t.$createElement,
                    r = t._self._c || e; return r("el-upload", { attrs: { "auto-upload": !1, "on-change": t.addFile, "show-file-list": !1, action: "", drag: "", multiple: "" } }, [r("i", { staticClass: "el-icon-upload" }), r("div", { staticClass: "el-upload__text" }, [t._v("将文件拖到此处，或"), r("em", [t._v("点击选择")])]), r("div", { staticClass: "el-upload__tip", attrs: { slot: "tip" }, slot: "tip" }, [r("div", [t._v(" 仅在浏览器内对文件进行解锁，无需消耗流量 "), r("el-tooltip", { attrs: { effect: "dark", placement: "top-start" } }, [r("div", { attrs: { slot: "content" }, slot: "content" }, [t._v(" 算法在源代码中已经提供，所有运算都发生在本地 ")]), r("i", { staticClass: "el-icon-info", staticStyle: { "font-size": "12px" } })])], 1), r("div", [t._v(" 工作模式: " + t._s(t.parallel ? "多线程 Worker" : "单线程 Queue") + " "), r("el-tooltip", { attrs: { effect: "dark", placement: "top-start" } }, [r("div", { attrs: { slot: "content" }, slot: "content" }, [t._v(" 将此工具部署在HTTPS环境下，可以启用Web Worker特性，"), r("br"), t._v(" 从而更快的利用并行处理完成解锁 ")]), r("i", { staticClass: "el-icon-info", staticStyle: { "font-size": "12px" } })])], 1)]), r("transition", { attrs: { name: "el-fade-in" } }, [r("el-progress", { directives: [{ name: "show", rawName: "v-show", value: t.progress_show, expression: "progress_show" }], staticStyle: { margin: "16px 6px 0 6px" }, attrs: { format: t.progress_string, percentage: t.progress_value, "stroke-width": 16, "text-inside": !0 } })], 1)], 1) },
            H = [],
            W = r("0565"),
            J = W["a"],
            V = r("2877"),
            K = Object(V["a"])(J, N, H, !1, null, null, null),
            Q = K.exports,
            z = function() { var t = this,
                    e = t.$createElement,
                    r = t._self._c || e; return r("el-table", { staticStyle: { width: "100%" }, attrs: { data: t.tableData } }, [r("el-table-column", { attrs: { label: "封面" }, scopedSlots: t._u([{ key: "default", fn: function(e) { return [r("el-image", { staticStyle: { width: "100px", height: "100px" }, attrs: { src: e.row.picture } }, [r("div", { staticClass: "image-slot el-image__error", attrs: { slot: "error" }, slot: "error" }, [t._v(" 暂无封面 ")])])] } }]) }), r("el-table-column", { attrs: { label: "歌曲" }, scopedSlots: t._u([{ key: "default", fn: function(e) { return [r("span", [t._v(t._s(e.row.title))])] } }]) }), r("el-table-column", { attrs: { label: "歌手" }, scopedSlots: t._u([{ key: "default", fn: function(e) { return [r("p", [t._v(t._s(e.row.artist))])] } }]) }), r("el-table-column", { attrs: { label: "专辑" }, scopedSlots: t._u([{ key: "default", fn: function(e) { return [r("p", [t._v(t._s(e.row.album))])] } }]) }), r("el-table-column", { attrs: { label: "操作" }, scopedSlots: t._u([{ key: "default", fn: function(e) { return [r("el-button", { attrs: { circle: "", icon: "el-icon-video-play", type: "success" }, on: { click: function(r) { return t.handlePlay(e.$index, e.row) } } }), r("el-button", { attrs: { circle: "", icon: "el-icon-download" }, on: { click: function(r) { return t.handleDownload(e.row) } } }), r("el-button", { attrs: { circle: "", icon: "el-icon-delete", type: "danger" }, on: { click: function(r) { return t.handleDelete(e.$index, e.row) } } })] } }]) })], 1) },
            G = [],
            Y = r("73ec"),
            X = { name: "PreviewTable", props: { tableData: { type: Array, required: !0 }, policy: { type: Number, required: !0 } }, methods: { handlePlay(t, e) { this.$emit("play", e.file) }, handleDelete(t, e) { Object(Y["f"])(e), this.tableData.splice(t, 1) }, handleDownload(t) { this.$emit("download", t) } } },
            Z = X,
            tt = Object(V["a"])(Z, z, G, !1, null, "1458a804", null),
            et = tt.exports,
            rt = r("9224"),
            nt = function() { var t = this,
                    e = t.$createElement,
                    r = t._self._c || e; return r("div", [r("file-selector", { on: { error: t.showFail, success: t.showSuccess } }), r("div", { attrs: { id: "app-control" } }, [r("el-row", { staticClass: "mb-3" }, [r("span", [t._v("歌曲命名格式：")]), t._l(t.FilenamePolicies, (function(e) { return r("el-radio", { key: e.key, attrs: { label: e.key }, model: { value: t.filename_policy, callback: function(e) { t.filename_policy = e }, expression: "filename_policy" } }, [t._v(" " + t._s(e.text) + " ")]) }))], 2), r("el-row", [r("el-button", { attrs: { icon: "el-icon-download", plain: "" }, on: { click: t.handleDownloadAll } }, [t._v("下载全部")]), r("el-button", { attrs: { icon: "el-icon-delete", plain: "", type: "danger" }, on: { click: t.handleDeleteAll } }, [t._v("清除全部")]), r("el-tooltip", { staticClass: "item", attrs: { effect: "dark", placement: "top-start" } }, [r("div", { attrs: { slot: "content" }, slot: "content" }, [t.instant_save ? r("span", [t._v("工作模式: " + t._s(t.dir ? "写入本地文件系统" : "调用浏览器下载"))]) : r("span", [t._v(" 当您使用此工具进行大量文件解锁的时候，建议开启此选项。"), r("br"), t._v(" 开启后，解锁结果将不会存留于浏览器中，防止内存不足。 ")])]), r("el-checkbox", { staticClass: "ml-2", attrs: { border: "" }, model: { value: t.instant_save, callback: function(e) { t.instant_save = e }, expression: "instant_save" } }, [t._v("立即保存")])], 1)], 1)], 1), r("audio", { attrs: { autoplay: t.playing_auto, src: t.playing_url, controls: "" } }), r("PreviewTable", { attrs: { policy: t.filename_policy, "table-data": t.tableData }, on: { download: t.saveFile, play: t.changePlaying } })], 1) },
            at = [],
            it = { name: "Home", components: { FileSelector: Q, PreviewTable: et }, data() { return { tableData: [], playing_url: "", playing_auto: !1, filename_policy: Y["e"].ArtistAndTitle, instant_save: !1, FilenamePolicies: Y["d"], dir: null } }, watch: { instant_save(t) { t && this.showDirectlySave() } }, methods: { async showSuccess(t) { this.instant_save ? (await this.saveFile(t), Object(Y["f"])(t)) : (this.tableData.push(t), this.$notify.success({ title: "解锁成功", message: "成功解锁 " + t.title, duration: 3e3 })); { let e = [t.title, t.artist, t.album];
                            window._paq.push(["trackEvent", "Unlock", t.rawExt + "," + t.mime, JSON.stringify(e)]) } }, showFail(t, e) { console.error(t, e), this.$notify.error({ title: "出现问题", message: t + "，" + e + '，参考<a target="_blank" href="https://github.com/ix64/unlock-music/wiki/使用提示">使用提示</a>', dangerouslyUseHTMLString: !0, duration: 6e3 }), window._paq.push(["trackEvent", "Error", String(t), e]) }, changePlaying(t) { this.playing_url = t, this.playing_auto = !0 }, handleDeleteAll() { this.tableData.forEach(t => { Object(Y["f"])(t) }), this.tableData = [] }, handleDownloadAll() { let t = 0,
                            e = setInterval(() => { t < this.tableData.length ? (this.saveFile(this.tableData[t]), t++) : clearInterval(e) }, 300) }, async saveFile(t) { this.dir ? (await Object(Y["b"])(t, this.filename_policy, this.dir), this.$notify({ title: "保存成功", message: t.title, position: "top-left", type: "success", duration: 3e3 })) : Object(Y["c"])(t, this.filename_policy) }, async showDirectlySave() { if (window.showDirectoryPicker) { try { await this.$confirm("您的浏览器支持文件直接保存到磁盘，是否使用？", "新特性提示", { confirmButtonText: "使用", cancelButtonText: "不使用", type: "warning", center: !0 }) } catch (t) { return void console.log(t) } try { this.dir = await window.showDirectoryPicker(); const t = "__unlock_music_write_test.txt";
                                await this.dir.getFileHandle(t, { create: !0 }), await this.dir.removeEntry(t) } catch (t) { console.error(t) } } } } },
            ct = it,
            ot = Object(V["a"])(ct, nt, at, !1, null, null, null),
            st = ot.exports,
            lt = r("97e5"),
            ut = { name: "app", components: { FileSelector: Q, PreviewTable: et, Home: st }, data() { return { version: rt.version } }, created() { this.$nextTick(() => this.finishLoad()) }, methods: { async finishLoad() { const t = document.getElementById("loader-mask"); let e;
                        t && t.remove(); try { e = await Object(lt["a"])(this.version) } catch (r) { console.warn("check version info failed", r) }
                        e && (e.HttpsFound || e.Found && "https:" !== window.location.protocol) ? this.$notify.warning({ title: "发现更新", message: `发现新版本 v${e.Version}<br/>更新详情：${e.Detail}<br/> <a target="_blank" href="${e.URL}">获取更新</a>`, dangerouslyUseHTMLString: !0, duration: 15e3, position: "top-left" }) : this.$notify.info({ title: "离线使用", message: `我们使用PWA技术，无网络也能使用<br/>最近更新：${rt.updateInfo}<br/><a target="_blank" href="https://github.com/ix64/unlock-music/wiki/使用提示">使用提示</a>`, dangerouslyUseHTMLString: !0, duration: 1e4, position: "top-left" }) } } },
            ft = ut,
            dt = (r("5c0b"), Object(V["a"])(ft, $, I, !1, null, null, null)),
            mt = dt.exports,
            ht = r("9483"); "https:" === window.location.protocol && Object(ht["a"])("service-worker.js", { ready() { console.log("App is being served from cache by a service worker.") }, registered() { console.log("Service worker has been registered.") }, cached() { console.log("Content has been cached for offline use.") }, updatefound() { console.log("New content is downloading.") }, updated() { console.log("New content is available."), window.location.reload() }, offline() { console.log("No internet connection found. App is running in offline mode.") }, error(t) { console.error("Error during service worker registration:", t) } }), C["default"].use(q.a), C["default"].use(F.a), C["default"].use(D.a), C["default"].use(B.a), C["default"].use(P.a), C["default"].use(T.a), C["default"].use(A.a), C["default"].use(x.a), C["default"].use(j.a), C["default"].use(y.a), C["default"].use(w.a), C["default"].use(p.a), C["default"].use(h.a), C["default"].use(d.a), C["default"].use(u.a), C["default"].use(s.a), C["default"].prototype.$notify = c.a, C["default"].prototype.$confirm = a.a.confirm, C["default"].config.productionTip = !1, new C["default"]({ render: function(t) { return t(mt) } }).$mount("#app") }, eaa5: function(t, e, r) { "use strict";
        r.d(e, "a", (function() { return S })); var n = r("9ab4"),
            a = r("6d95"),
            i = (r("219c"), r("cc74")),
            c = r("cb96");

        function o(t, e, r) { return Object(n["a"])(this, void 0, Promise, (function() { var a, o, s, l, u, f, d, m, h; return Object(n["b"])(this, (function(n) { switch (n.label) {
                        case 0:
                            return o = Uint8Array.bind, [4, Object(i["d"])(t)];
                        case 1:
                            for (a = new(o.apply(Uint8Array, [void 0, n.sent()])), s = a.length, l = 0; l < s; l++) a[l] ^= 163; return u = Object(i["i"])(a, r), u !== r && (t = new Blob([a], { type: i["a"][u] })), [4, Object(c["parseBlob"])(t)];
                        case 2:
                            return f = n.sent(), d = Object(i["g"])(e, f.common.title, f.common.artist), m = d.title, h = d.artist, [2, { title: m, artist: h, ext: u, album: f.common.album, picture: Object(i["e"])(f), file: URL.createObjectURL(t), blob: t, mime: i["a"][u] }] } })) })) }

        function s(t, e, r, a) { return void 0 === a && (a = !0), Object(n["a"])(this, void 0, Promise, (function() { var o, s, l, u, f, d, m; return Object(n["b"])(this, (function(n) { switch (n.label) {
                        case 0:
                            return o = r, a ? (l = Uint8Array.bind, [4, Object(i["d"])(t)]) : [3, 2];
                        case 1:
                            s = new(l.apply(Uint8Array, [void 0, n.sent()])), o = Object(i["i"])(s, r), o !== r && (t = new Blob([s], { type: i["a"][o] })), n.label = 2;
                        case 2:
                            return [4, Object(c["parseBlob"])(t)];
                        case 3:
                            return u = n.sent(), f = Object(i["g"])(e, u.common.title, u.common.artist), d = f.title, m = f.artist, [2, { title: d, artist: m, ext: o, album: u.common.album, picture: Object(i["e"])(u), file: URL.createObjectURL(t), blob: t, mime: i["a"][o] }] } })) })) } var l = [105, 102, 109, 116],
            u = [254, 254, 254, 254],
            f = { " WAV": ".wav", FLAC: ".flac", " MP3": ".mp3", " A4M": ".m4a" };

        function d(t, e, r) { return Object(n["a"])(this, void 0, Promise, (function() { var a, o, d, m, h, b, p, v, w, g, y, O, j, _, x; return Object(n["b"])(this, (function(n) { switch (n.label) {
                        case 0:
                            return o = Uint8Array.bind, [4, Object(i["d"])(t)];
                        case 1:
                            if (a = new(o.apply(Uint8Array, [void 0, n.sent()])), Object(i["b"])(a, l) && Object(i["b"])(a.slice(8, 12), u)) return [3, 4]; if ("xm" !== r) return [3, 2]; throw Error("此xm文件已损坏");
                        case 2:
                            return [4, s(t, e, r, !0)];
                        case 3:
                            return [2, n.sent()];
                        case 4:
                            if (d = (new TextDecoder).decode(a.slice(4, 8)), !f.hasOwnProperty(d)) throw Error("未知的.xm文件类型"); for (m = a[15], h = a[12] | a[13] << 8 | a[14] << 16, b = a.slice(16), p = b.length, v = h; v < p; ++v) b[v] = b[v] - m ^ 255; return w = f[d], g = i["a"][w], y = new Blob([b], { type: g }), [4, Object(c["parseBlob"])(y)];
                        case 5:
                            return O = n.sent(), "wav" === w && (console.info(O.common), O.common.album = "", O.common.artist = "", O.common.title = ""), j = Object(i["g"])(e, O.common.title, O.common.artist, -1 === e.indexOf("_") ? "-" : "_"), _ = j.title, x = j.artist, [2, { title: _, artist: x, ext: w, mime: g, album: O.common.album, picture: Object(i["e"])(O), file: URL.createObjectURL(y), blob: y, rawExt: "xm" }] } })) })) } var m = r("8850");

        function h(t, e, r) { return Object(n["a"])(this, void 0, Promise, (function() { var r, a, o, s, l, u, f, d, h, b, p; return Object(n["b"])(this, (function(n) { switch (n.label) {
                        case 0:
                            return a = Uint8Array.bind, [4, Object(i["d"])(t)];
                        case 1:
                            for (r = new(a.apply(Uint8Array, [void 0, n.sent()])), o = r.length, s = 0; s < o; s++) r[s] ^= 244, r[s] <= 63 ? r[s] = 4 * r[s] : r[s] <= 127 ? r[s] = 4 * (r[s] - 64) + 1 : r[s] <= 191 ? r[s] = 4 * (r[s] - 128) + 2 : r[s] = 4 * (r[s] - 192) + 3; if (l = Object(i["i"])(r, ""), u = Object(i["j"])(e), "" === l && "mp3" !== u.ext) { if (u.ext in m["b"]) return f = new Blob([r], { type: "application/octet-stream" }), [2, Object(m["a"])(f, u.name, u.ext)]; throw "不支持的QQ音乐缓存格式" } return f = new Blob([r], { type: i["a"][l] }), [4, Object(c["parseBlob"])(f)];
                        case 2:
                            return d = n.sent(), h = Object(i["g"])(e, d.common.title, d.common.artist), b = h.title, p = h.artist, [2, { title: b, artist: p, ext: l, album: d.common.album, picture: Object(i["e"])(d), file: URL.createObjectURL(f), blob: f, mime: i["a"][l] }] } })) })) } var b = r("9224"),
            p = [5, 40, 188, 150, 233, 228, 90, 67, 145, 170, 189, 208, 122, 245, 54, 49],
            v = [124, 213, 50, 235, 134, 2, 127, 75, 168, 175, 166, 142, 15, 255, 153, 20],
            w = [37, 223, 232, 166, 117, 30, 117, 14, 47, 128, 243, 45, 184, 182, 227, 17, 0];

        function g(t, e, r) { return Object(n["a"])(this, void 0, Promise, (function() { var a, o, s, l, u, f, d, m, h, b, g, _, x, k, A, U, T; return Object(n["b"])(this, (function(n) { switch (n.label) {
                        case 0:
                            return o = Uint8Array.bind, [4, Object(i["d"])(t)];
                        case 1:
                            if (a = new(o.apply(Uint8Array, [void 0, n.sent()])), "vpr" === r) { if (!Object(i["b"])(a, p)) throw Error("Not a valid vpr file!") } else if (!Object(i["b"])(a, v)) throw Error("Not a valid kgm(a) file!"); if (s = new DataView(a.slice(16, 20).buffer), l = s.getUint32(0, !0), u = a.slice(l), f = u.length, u.byteLength > 1 << 26) throw Error("文件过大，请使用 <a target='_blank' href='https://github.com/unlock-music/cli'>CLI版本</a> 进行解锁"); return d = new Uint8Array(17), d.set(a.slice(28, 44), 0), 0 !== O.length ? [3, 3] : [4, j()];
                        case 2:
                            if (!n.sent()) throw Error("加载Kgm/Vpr Mask数据失败");
                            n.label = 3;
                        case 3:
                            for (b = 0; b < f; b++) m = d[b % 17] ^ u[b], m ^= (15 & m) << 4, h = y(b), h ^= (15 & h) << 4, u[b] = m ^ h; if ("vpr" === r)
                                for (b = 0; b < f; b++) u[b] ^= w[b % 17]; return g = Object(i["i"])(u), _ = i["a"][g], x = new Blob([u], { type: _ }), [4, Object(c["parseBlob"])(x)];
                        case 4:
                            return k = n.sent(), A = Object(i["g"])(e, k.common.title, k.common.artist), U = A.title, T = A.artist, [2, { album: k.common.album, picture: Object(i["e"])(k), file: URL.createObjectURL(x), blob: x, ext: g, mime: _, title: U, artist: T }] } })) })) }

        function y(t) { return _[t % 272] ^ O[t >> 4] } var O = new Uint8Array(0);

        function j() { return Object(n["a"])(this, void 0, Promise, (function() { var t, e, r, a; return Object(n["b"])(this, (function(n) { switch (n.label) {
                        case 0:
                            t = "https://cdn.jsdelivr.net/gh/unlock-music/unlock-music@" + b.version + "/public/static/kgm.mask", ["http:", "https:"].some((function(t) { return t == self.location.protocol })) && (t = self.document ? "./static/kgm.mask" : "../static/kgm.mask"), n.label = 1;
                        case 1:
                            return n.trys.push([1, 4, , 5]), [4, fetch(t, { method: "GET" })];
                        case 2:
                            return e = n.sent(), r = Uint8Array.bind, [4, e.arrayBuffer()];
                        case 3:
                            return O = new(r.apply(Uint8Array, [void 0, n.sent()])), [2, !0];
                        case 4:
                            return a = n.sent(), console.error(a), [2, !1];
                        case 5:
                            return [2] } })) })) } var _ = [184, 213, 61, 178, 233, 175, 120, 140, 131, 51, 113, 81, 118, 160, 205, 55, 47, 62, 53, 141, 169, 190, 152, 183, 231, 140, 34, 206, 90, 97, 223, 104, 105, 137, 254, 165, 182, 222, 169, 119, 252, 200, 189, 189, 229, 109, 62, 90, 54, 239, 105, 78, 190, 225, 233, 102, 28, 243, 217, 2, 182, 242, 18, 155, 68, 208, 111, 185, 53, 137, 182, 70, 109, 115, 130, 6, 105, 193, 237, 215, 133, 194, 48, 223, 162, 98, 190, 121, 45, 98, 98, 61, 13, 126, 190, 72, 137, 35, 2, 160, 228, 213, 117, 81, 50, 2, 83, 253, 22, 58, 33, 59, 22, 15, 195, 178, 187, 179, 226, 186, 58, 61, 19, 236, 246, 1, 69, 132, 165, 112, 15, 147, 73, 12, 100, 205, 49, 213, 204, 76, 7, 1, 158, 0, 26, 35, 144, 191, 136, 30, 59, 171, 166, 62, 196, 115, 71, 16, 126, 59, 94, 188, 227, 0, 132, 255, 9, 212, 224, 137, 15, 91, 88, 112, 79, 251, 101, 216, 92, 83, 27, 211, 200, 198, 191, 239, 152, 176, 80, 79, 15, 234, 229, 131, 88, 140, 40, 44, 132, 103, 205, 208, 158, 71, 219, 39, 80, 202, 244, 99, 99, 232, 151, 127, 27, 75, 12, 194, 193, 33, 76, 204, 88, 245, 148, 82, 163, 243, 211, 224, 104, 244, 0, 35, 243, 94, 10, 123, 147, 221, 171, 18, 178, 19, 232, 132, 215, 167, 159, 15, 50, 76, 85, 29, 4, 54, 82, 220, 3, 243, 249, 78, 66, 233, 61, 97, 239, 124, 182, 179, 147, 80],
            x = [121, 101, 101, 108, 105, 111, 110, 45, 107, 117, 119, 111, 45, 116, 109, 101],
            k = "MoOtOiTvINGwd2E6n0E1i7L5t2IoOoNk";

        function A(t, e, r) { return Object(n["a"])(this, void 0, Promise, (function() { var r, a, o, l, u, f, d, m, h, b, p, v, w, g; return Object(n["b"])(this, (function(n) { switch (n.label) {
                        case 0:
                            return a = Uint8Array.bind, [4, Object(i["d"])(t)];
                        case 1:
                            return r = new(a.apply(Uint8Array, [void 0, n.sent()])), Object(i["b"])(r, x) ? [3, 4] : "aac" !== Object(i["i"])(r) ? [3, 3] : [4, s(t, e, "aac", !1)];
                        case 2:
                            return [2, n.sent()];
                        case 3:
                            throw Error("not a valid kwm file");
                        case 4:
                            for (o = r.slice(24, 32), l = U(o), u = r.slice(1024), f = u.length, d = 0; d < f; ++d) u[d] ^= l[d % 32]; return m = Object(i["i"])(u), h = i["a"][m], b = new Blob([u], { type: h }), [4, Object(c["parseBlob"])(b)];
                        case 5:
                            return p = n.sent(), v = Object(i["g"])(e, p.common.title, p.common.artist), w = v.title, g = v.artist, [2, { album: p.common.album, picture: Object(i["e"])(p), file: URL.createObjectURL(b), blob: b, mime: h, title: w, artist: g, ext: m }] } })) })) }

        function U(t) { for (var e = new DataView(t.buffer), r = e.getBigUint64(0, !0).toString(), n = T(r), a = new Uint8Array(32), i = 0; i < 32; i++) a[i] = k.charCodeAt(i) ^ n.charCodeAt(i); return a }

        function T(t) { var e = t.length,
                r = t; return e > 32 ? r = t.slice(0, 32) : e < 32 && (r = t.padEnd(32, t)), r } var M = [0, 0, 0, 32, 102, 116, 121, 112];

        function P(t, e) { return Object(n["a"])(this, void 0, Promise, (function() { var r, a, c, o; return Object(n["b"])(this, (function(n) { switch (n.label) {
                        case 0:
                            return a = Uint8Array.bind, [4, Object(i["d"])(t)];
                        case 1:
                            for (r = new(a.apply(Uint8Array, [void 0, n.sent()])), c = 0; c < 8; ++c) r[c] = M[c]; return o = new Blob([r], { type: "audio/mp4" }), [4, s(o, e, "m4a", !1)];
                        case 2:
                            return [2, n.sent()] } })) })) }

        function S(t) { return Object(n["a"])(this, void 0, Promise, (function() { var e, r, c; return Object(n["b"])(this, (function(n) { switch (n.label) {
                        case 0:
                            switch (e = Object(i["j"])(t.name), c = e.ext, c) {
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
                            return [4, Object(a["a"])(t.raw, e.name, e.ext)];
                        case 2:
                            return r = n.sent(), [3, 22];
                        case 3:
                            return [4, o(t.raw, e.name, e.ext)];
                        case 4:
                            return r = n.sent(), [3, 22];
                        case 5:
                            return [4, A(t.raw, e.name, e.ext)];
                        case 6:
                            return r = n.sent(), [3, 22];
                        case 7:
                            return [4, d(t.raw, e.name, e.ext)];
                        case 8:
                            return r = n.sent(), [3, 22];
                        case 9:
                            return [4, s(t.raw, e.name, e.ext)];
                        case 10:
                            return r = n.sent(), [3, 22];
                        case 11:
                            return [4, s(t.raw, e.name, "mp3")];
                        case 12:
                            return r = n.sent(), [3, 22];
                        case 13:
                            return [4, Object(m["a"])(t.raw, e.name, e.ext)];
                        case 14:
                            return r = n.sent(), [3, 22];
                        case 15:
                            return [4, P(t.raw, e.name)];
                        case 16:
                            return r = n.sent(), [3, 22];
                        case 17:
                            return [4, h(t.raw, e.name, e.ext)];
                        case 18:
                            return r = n.sent(), [3, 22];
                        case 19:
                            return [4, g(t.raw, e.name, e.ext)];
                        case 20:
                            return r = n.sent(), [3, 22];
                        case 21:
                            throw "不支持此文件格式";
                        case 22:
                            return r.rawExt || (r.rawExt = e.ext), r.rawFilename || (r.rawFilename = e.name), console.log(r), [2, r] } })) })) } } });