(window.webpackJsonpjwplayer = window.webpackJsonpjwplayer || []).push([
    [7, 1, 2, 4, 5], Array(20).concat([function(e, t, i) {
        "use strict";
        i.r(t);
        var n = i(37),
            a = i(8),
            o = i(3),
            r = i(0),
            s = i(13),
            l = i(56),
            c = ["repeat", "volume", "mute", "autostart"];
        var u = i(54),
            d = i(58),
            p = i(29),
            f = i(28),
            h = i(53),
            w = i(2),
            g = i(5),
            j = i(42);

        function v(e) {
            var t = !1;
            return {
                async: function() {
                    var i = this,
                        n = arguments;
                    return Promise.resolve().then(function() { if (!t) return e.apply(i, n) })
                },
                cancel: function() { t = !0 },
                cancelled: function() { return t }
            }
        }
        var m = i(51),
            b = i(1);
        var y = i(7),
            k = i(52),
            x = i(49),
            O = function() {
                var e = this,
                    t = void 0,
                    i = void 0;
                this.mediaModel = new C, this.set("mediaModel", this.mediaModel), this.setup = function(e) { return Object(r.j)(this.attributes, e, x.b), t = new j.a(this.getConfiguration()), this.setAutoStart(), this }, this.getConfiguration = function() {
                    var e = this.clone(),
                        t = e.mediaModel.attributes;
                    return Object.keys(x.a).forEach(function(i) { e[i] = t[i] }), e.instreamMode = !!e.instream, delete e.instream, delete e.mediaModel, e
                }, this.persistQualityLevel = function(e, t) {
                    var i = t[e] || {},
                        n = i.label,
                        a = Object(r.z)(i.bitrate) ? i.bitrate : null;
                    this.set("bitrateSelection", a), this.set("qualityLabel", n)
                }, this.setActiveItem = function(e) {
                    var t = this.get("playlist")[e];
                    this.resetItem(t), this.attributes.playlistItem = null, this.set("item", e), this.set("minDvrWindow", t.minDvrWindow), this.set("dvrSeekLimit", t.dvrSeekLimit), this.set("playlistItem", t)
                }, this.setMediaModel = function(e) {
                    this.mediaModel && this.mediaModel !== e && this.mediaModel.off(), e = e || new C, this.mediaModel = e, this.set("mediaModel", e),
                        function(e) {
                            var t = e.get("mediaState");
                            e.trigger("change:mediaState", e, t, t)
                        }(e)
                }, this.destroy = function() { this.attributes._destroyed = !0, this.off(), i && (i.off(null, null, this), i.destroy()) }, this.getVideo = function() { return i }, this.setFullscreen = function(t) {
                    (t = !!t) !== e.get("fullscreen") && e.set("fullscreen", t)
                }, this.getProviders = function() { return t }, this.setVolume = function(e) {
                    if (Object(r.z)(e)) {
                        var t = Math.min(Math.max(0, e), 100);
                        this.set("volume", t);
                        var i = 0 === t;
                        i !== this.getMute() && this.setMute(i)
                    }
                }, this.getMute = function() { return this.get("autostartMuted") || this.get("mute") }, this.setMute = function(e) {
                    if (void 0 === e && (e = !this.getMute()), this.set("mute", !!e), !e) {
                        var t = Math.max(10, this.get("volume"));
                        this.set("autostartMuted", !1), this.setVolume(t)
                    }
                }, this.setStreamType = function(e) { this.set("streamType", e), "LIVE" === e && this.setPlaybackRate(1) }, this.setProvider = function(e) { i = e, T(this, e) }, this.resetProvider = function() { i = null, this.set("provider", void 0) }, this.setPlaybackRate = function(e) { Object(r.v)(e) && (e = Math.max(Math.min(e, 4), .25), "LIVE" === this.get("streamType") && (e = 1), this.set("defaultPlaybackRate", e), i && i.setPlaybackRate && i.setPlaybackRate(e)) }, this.persistCaptionsTrack = function() {
                    var e = this.get("captionsTrack");
                    e ? this.set("captionLabel", e.name) : this.set("captionLabel", "Off")
                }, this.setVideoSubtitleTrack = function(e, t) { this.set("captionsIndex", e), e && t && e <= t.length && t[e - 1].data && this.set("captionsTrack", t[e - 1]) }, this.persistVideoSubtitleTrack = function(e, t) { this.setVideoSubtitleTrack(e, t), this.persistCaptionsTrack() }, this.setAutoStart = function(e) {
                    void 0 !== e && this.set("autostart", e);
                    var t = y.OS.mobile && this.get("autostart");
                    this.set("playOnViewable", t || "viewable" === this.get("autostart"))
                }, this.resetItem = function(e) {
                    var t = e ? Object(w.f)(e.starttime) : 0,
                        i = e ? Object(w.f)(e.duration) : 0,
                        n = this.mediaModel;
                    this.set("playRejected", !1), this.attributes.itemMeta = {}, n.set("position", t), n.set("currentTime", 0), n.set("duration", i)
                }, this.persistBandwidthEstimate = function(e) { Object(r.z)(e) && this.set("bandwidthEstimate", e) }
            },
            T = function(e, t) { e.set("provider", t.getName()), !0 === e.get("instreamMode") && (t.instreamMode = !0), -1 === t.getName().name.indexOf("flash") && (e.set("flashThrottle", void 0), e.set("flashBlocked", !1)), e.setPlaybackRate(e.get("defaultPlaybackRate")), e.set("supportsPlaybackRate", t.supportsPlaybackRate), e.set("playbackRate", t.getPlaybackRate()), e.set("renderCaptionsNatively", t.renderNatively) };
        var C = O.MediaModel = function() { this.attributes = { mediaState: o.Ma } };
        Object(r.j)(C.prototype, k.a, { srcReset: function() { Object(r.j)(this.attributes, { setup: !1, started: !1, preloaded: !1, visualQuality: null, buffer: 0, currentTime: 0 }) } }), Object(r.j)(O.prototype, k.a);
        var _ = O,
            M = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
            }();
        var S = function(e) {
            function t(e, i) {
                ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t);
                var n = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return n.attached = !0, n.beforeComplete = !1, n.item = null, n.mediaModel = new C, n.model = i, n.provider = e, n.providerListener = new function(e) {
                        return function(t, i) {
                            var n = e.mediaModel,
                                a = Object(r.j)({}, i, { type: t });
                            switch (t) {
                                case o.S:
                                    if (n.get(o.S) === i.mediaType) return;
                                    n.set(o.S, i.mediaType);
                                    break;
                                case o.T:
                                    return void n.set(o.T, Object(r.j)({}, i));
                                case o.L:
                                    if (i[t] === e.model.getMute()) return;
                                    break;
                                case o.Aa:
                                    i.newstate === o.Ma && (e.thenPlayPromise.cancel(), n.srcReset());
                                    var s = n.attributes.mediaState;
                                    n.attributes.mediaState = i.newstate, n.trigger("change:mediaState", n, i.newstate, s);
                                    break;
                                case o.F:
                                    return e.beforeComplete = !0, e.trigger(o.B, a), void(e.attached && !e.background && e._playbackComplete());
                                case o.G:
                                    n.get("setup") ? (e.thenPlayPromise.cancel(), n.srcReset()) : (t = o.Ta, a.code += 1e5);
                                    break;
                                case o.K:
                                    var l = i.duration;
                                    Object(r.z)(l) && (n.set("seekRange", i.seekRange), n.set("duration", l));
                                    break;
                                case o.D:
                                    n.set("buffer", i.bufferPercent);
                                case o.R:
                                    n.set("seekRange", i.seekRange), n.set("position", i.position), n.set("currentTime", i.currentTime);
                                    var c = i.duration;
                                    Object(r.z)(c) && n.set("duration", c), t === o.R && Object(r.v)(e.item.starttime) && delete e.item.starttime;
                                    break;
                                case o.I:
                                    n.set(o.I, i.levels);
                                case o.J:
                                    var u = i.currentQuality,
                                        d = i.levels;
                                    u > -1 && d.length > 1 && n.set("currentLevel", parseInt(u));
                                    break;
                                case o.f:
                                    n.set(o.f, i.tracks);
                                case o.g:
                                    var p = i.currentTrack,
                                        f = i.tracks;
                                    p > -1 && f.length > 0 && p < f.length && n.set("currentAudioTrack", parseInt(p))
                            }
                            e.trigger(t, a)
                        }
                    }(n), n.thenPlayPromise = v(function() {}),
                    function(e) { e.provider.on("all", e.providerListener, e) }(n), n.eventQueue = new u.a(n, ["trigger"], function() { return !n.attached || n.background }), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, m["a"]), M(t, [{
                key: "play",
                value: function(e) {
                    var t = this.item,
                        i = this.model,
                        n = this.mediaModel,
                        a = this.provider;
                    if (e || (e = i.get("playReason")), i.set("playRejected", !1), n.get("setup")) return a.play() || Promise.resolve();
                    n.set("setup", !0);
                    var o = this._loadAndPlay(t, a);
                    return n.get("started") ? o : this._playAttempt(o, e)
                }
            }, {
                key: "stop",
                value: function() {
                    var e = this.provider;
                    this.beforeComplete = !1, e.stop()
                }
            }, { key: "pause", value: function() { this.provider.pause() } }, {
                key: "preload",
                value: function() {
                    var e = this.item,
                        t = this.mediaModel,
                        i = this.provider;
                    !e || e && "none" === e.preload || !this.attached || this.setup || this.preloaded || (t.set("preloaded", !0), i.preload(e))
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this.provider,
                        t = this.mediaModel;
                    this.off(), t.off(), e.off(), this.eventQueue.destroy(), this.detach(), e.getContainer() && e.remove(), delete e.instreamMode, this.provider = null, this.item = null
                }
            }, {
                key: "attach",
                value: function() {
                    var e = this.model,
                        t = this.provider;
                    e.setPlaybackRate(e.get("defaultPlaybackRate")), t.attachMedia(), this.attached = !0, this.eventQueue.flush(), this.beforeComplete && this._playbackComplete()
                }
            }, {
                key: "detach",
                value: function() {
                    var e = this.provider;
                    this.thenPlayPromise.cancel(), e.detachMedia(), this.attached = !1
                }
            }, {
                key: "_playAttempt",
                value: function(e, t) {
                    var i = this,
                        n = this.item,
                        a = this.mediaModel,
                        s = this.model,
                        l = this.provider,
                        c = l ? l.video : null;
                    return this.trigger(o.M, { item: n, playReason: t }), c && !c.paused && s.set(o.Aa, o.Ja), e.then(function() {
                        a.get("setup") && (a.set("started", !0), a === s.mediaModel && (a.off(o.T, null, i), a.change(o.T, function(e, t) { t && i.trigger(o.T, t) }, i), function(e) {
                            var t = e.get("mediaState");
                            e.trigger("change:mediaState", e, t, t)
                        }(a)))
                    }).catch(function(e) {
                        if (i.item && a === s.mediaModel) {
                            if (s.set("playRejected", !0), c && c.paused) {
                                if (c.src === location.href) return i._loadAndPlay(n, l);
                                a.set("mediaState", o.Oa)
                            }
                            var u = Object(r.j)(new b.s(null, Object(b.B)(e), e), { error: e, item: n, playReason: t });
                            throw delete u.key, i.trigger(o.N, u), e
                        }
                    })
                }
            }, {
                key: "_playbackComplete",
                value: function() {
                    var e = this.item,
                        t = this.provider;
                    e && delete e.starttime, this.beforeComplete = !1, t.setState(o.Ka), this.trigger(o.F, {})
                }
            }, {
                key: "_loadAndPlay",
                value: function() {
                    var e = this.item,
                        t = this.provider,
                        i = t.load(e);
                    if (i) { var n = v(function() { return t.play() || Promise.resolve() }); return this.thenPlayPromise = n, i.then(n.async) }
                    return t.play() || Promise.resolve()
                }
            }, { key: "audioTrack", get: function() { return this.provider.getCurrentAudioTrack() }, set: function(e) { this.provider.setCurrentAudioTrack(e) } }, { key: "quality", get: function() { return this.provider.getCurrentQuality() }, set: function(e) { this.provider.setCurrentQuality(e) } }, { key: "audioTracks", get: function() { return this.provider.getAudioTracks() } }, {
                key: "background",
                get: function() {
                    var e = this.container,
                        t = this.provider;
                    return !!this.attached && (!!t.video && (!e || e && !e.contains(t.video)))
                },
                set: function(e) {
                    var t = this.container,
                        i = this.provider;
                    i.video ? t && (e ? this.background || (this.thenPlayPromise.cancel(), this.pause(), t.removeChild(i.video), this.container = null) : (this.eventQueue.flush(), this.beforeComplete && this._playbackComplete())) : e ? this.detach() : this.attach()
                }
            }, { key: "container", get: function() { return this.provider.getContainer() }, set: function(e) { this.provider.setContainer(e) } }, { key: "mediaElement", get: function() { return this.provider.video } }, { key: "preloaded", get: function() { return this.mediaModel.get("preloaded") } }, { key: "qualities", get: function() { return this.provider.getQualityLevels() } }, { key: "setup", get: function() { return this.mediaModel.get("setup") } }, { key: "started", get: function() { return this.mediaModel.get("started") } }, {
                key: "activeItem",
                set: function(e) {
                    var t = this.mediaModel = new C,
                        i = e ? Object(w.f)(e.starttime) : 0,
                        n = e ? Object(w.f)(e.duration) : 0,
                        a = t.attributes;
                    t.srcReset(), a.position = i, a.duration = n, this.item = e, this.provider.init(e)
                }
            }, { key: "controls", set: function(e) { this.provider.setControls(e) } }, { key: "mute", set: function(e) { this.provider.mute(e) } }, { key: "position", set: function(e) { this.provider.seek(e) } }, { key: "subtitles", set: function(e) { this.provider.setSubtitlesTrack && this.provider.setSubtitlesTrack(e) } }, { key: "volume", set: function(e) { this.provider.volume(e) } }]), t
        }();
        var E = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }();

        function A(e, t) {
            var i = t.mediaControllerListener;
            e.off().on("all", i, t)
        }

        function L(e) { return e && e.sources && e.sources[0] }
        var P = function(e) {
            function t(e, i) {
                ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t);
                var n = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return n.adPlaying = !1, n.background = function() {
                    var e = null,
                        t = null;
                    return Object.defineProperties({ setNext: function(e, i) { t = { item: e, loadPromise: i } }, isNext: function(e) { return !(!t || JSON.stringify(t.item.sources[0]) !== JSON.stringify(e.sources[0])) }, clearNext: function() { t = null } }, { nextLoadPromise: { get: function() { return t ? t.loadPromise : null } }, currentMedia: { get: function() { return e }, set: function(t) { e = t } } })
                }(), n.mediaPool = i, n.mediaController = null, n.mediaControllerListener = function(e, t) {
                    return function(i, n) {
                        switch (i) {
                            case o.Aa:
                                return;
                            case "flashThrottle":
                            case "flashBlocked":
                                return void e.set(i, n.value);
                            case o.U:
                            case o.L:
                                return void e.set(i, n[i]);
                            case o.O:
                                return void e.set("playbackRate", n.playbackRate);
                            case o.K:
                                Object(r.j)(e.get("itemMeta"), n.metadata);
                                break;
                            case o.J:
                                e.persistQualityLevel(n.currentQuality, n.levels);
                                break;
                            case "subtitlesTrackChanged":
                                e.persistVideoSubtitleTrack(n.currentTrack, n.tracks);
                                break;
                            case o.R:
                            case o.P:
                            case o.Q:
                            case o.W:
                            case "subtitlesTracks":
                            case "subtitlesTracksData":
                                e.trigger(i, n);
                                break;
                            case o.i:
                                return void e.persistBandwidthEstimate(n.bandwidthEstimate)
                        }
                        t.trigger(i, n)
                    }
                }(e, n), n.model = e, n.providers = new j.a(e.getConfiguration()), n.loadPromise = Promise.resolve(), n.backgroundLoading = e.get("backgroundLoading"), n.backgroundLoading || e.set("mediaElement", n.mediaPool.getPrimedElement()), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, m["a"]), E(t, [{
                key: "setActiveItem",
                value: function(e) {
                    var t = this,
                        i = this.model,
                        n = i.get("playlist")[e];
                    i.attributes.itemReady = !1, i.setActiveItem(e);
                    var a = L(n);
                    if (!a) return Promise.reject(new b.s(b.o, b.h));
                    var o = this.background,
                        r = this.mediaController;
                    if (o.isNext(n)) return this._destroyActiveMedia(), this.loadPromise = this._activateBackgroundMedia(), this.loadPromise;
                    if (this._destroyBackgroundMedia(), r) {
                        if (i.get("castActive") || this._providerCanPlay(r.provider, a)) return this.loadPromise = Promise.resolve(r), r.activeItem = n, this._setActiveMedia(r), this.loadPromise;
                        this._destroyActiveMedia()
                    }
                    var s = i.mediaModel;
                    return this.loadPromise = this._setupMediaController(a).then(function(e) { if (s === i.mediaModel) return e.activeItem = n, t._setActiveMedia(e), e }).catch(function(e) { throw t._destroyActiveMedia(), e }), this.loadPromise
                }
            }, {
                key: "playVideo",
                value: function(e) {
                    var t = this,
                        i = this.mediaController,
                        n = this.model,
                        a = void 0;
                    if (!n.get("playlistItem")) return Promise.reject(new Error("No media"));
                    if (e || (e = n.get("playReason")), i) a = i.play(e);
                    else {
                        n.set(o.Aa, o.Ja);
                        var r = v(function(i) { if (t.mediaController && t.mediaController.mediaModel === i.mediaModel) return i.play(e); throw new Error("Playback cancelled.") });
                        a = this.loadPromise.catch(function(e) { throw r.cancel(), e }).then(r.async)
                    }
                    return a
                }
            }, {
                key: "stopVideo",
                value: function() {
                    var e = this.mediaController,
                        t = this.model,
                        i = t.get("playlist")[t.get("item")];
                    t.attributes.playlistItem = i, t.resetItem(i), e && e.stop()
                }
            }, {
                key: "preloadVideo",
                value: function() {
                    var e = this.background,
                        t = this.mediaController || e.currentMedia;
                    t && t.preload()
                }
            }, {
                key: "pause",
                value: function() {
                    var e = this.mediaController;
                    e && e.pause()
                }
            }, {
                key: "castVideo",
                value: function(e, t) {
                    var i = this.model;
                    i.attributes.itemReady = !1;
                    var n = Object(r.j)({}, t);
                    n.starttime = i.mediaModel.get("position"), this._destroyActiveMedia();
                    var a = new S(e, i);
                    a.activeItem = n, this._setActiveMedia(a)
                }
            }, {
                key: "stopCast",
                value: function() {
                    var e = this.model,
                        t = e.get("item");
                    e.get("playlist")[t].starttime = e.mediaModel.get("position"), this.stopVideo(), this.setActiveItem(t)
                }
            }, {
                key: "backgroundActiveMedia",
                value: function() {
                    this.adPlaying = !0;
                    var e = this.background,
                        t = this.mediaController;
                    t && (e.currentMedia && this._destroyMediaController(e.currentMedia), t.background = !0, e.currentMedia = t, this.mediaController = null)
                }
            }, {
                key: "restoreBackgroundMedia",
                value: function() {
                    this.adPlaying = !1;
                    var e = this.background,
                        t = this.mediaController,
                        i = e.currentMedia;
                    if (i) {
                        if (t) return this._destroyMediaController(i), void(e.currentMedia = null);
                        i.mediaModel.attributes.mediaState = "buffering", this._setActiveMedia(i), i.background = !1, e.currentMedia = null
                    }
                }
            }, {
                key: "backgroundLoad",
                value: function(e) {
                    var t = this.background,
                        i = L(e);
                    t.setNext(e, this._setupMediaController(i).then(function(t) { return t.activeItem = e, t.preload(), t }).catch(function() { t.clearNext() }))
                }
            }, {
                key: "forwardEvents",
                value: function() {
                    var e = this.mediaController;
                    e && A(e, this)
                }
            }, {
                key: "routeEvents",
                value: function(e) {
                    var t = this.mediaController;
                    t && (t.off(), e && A(t, e))
                }
            }, { key: "destroy", value: function() { this.off(), this._destroyBackgroundMedia(), this._destroyActiveMedia() } }, {
                key: "_setActiveMedia",
                value: function(e) {
                    var t = this.model,
                        i = e.mediaModel,
                        n = e.provider;
                    ! function(e, t) {
                        var i = e.get("mediaContainer");
                        i ? t.container = i : e.once("change:mediaContainer", function(e, i) { t.container = i })
                    }(t, e), this.mediaController = e, t.set("mediaElement", e.mediaElement), t.setMediaModel(i), t.setProvider(n), A(e, this), t.set("itemReady", !0)
                }
            }, {
                key: "_destroyActiveMedia",
                value: function() {
                    var e = this.mediaController,
                        t = this.model;
                    e && (e.detach(), this._destroyMediaController(e), t.resetProvider(), this.mediaController = null)
                }
            }, {
                key: "_destroyBackgroundMedia",
                value: function() {
                    var e = this.background;
                    this._destroyMediaController(e.currentMedia), e.currentMedia = null, this._destroyBackgroundLoadingMedia()
                }
            }, {
                key: "_destroyMediaController",
                value: function(e) {
                    var t = this.mediaPool;
                    e && (t.recycle(e.mediaElement), e.destroy())
                }
            }, {
                key: "_setupMediaController",
                value: function(e) {
                    var t = this,
                        i = this.model,
                        n = this.providers,
                        a = function(e) { return new S(new e(i.get("id"), i.getConfiguration(), t.primedElement), i) },
                        o = n.choose(e),
                        r = o.provider,
                        s = o.name;
                    return r ? Promise.resolve(a(r)) : n.load(s).then(function(e) { return a(e) })
                }
            }, {
                key: "_activateBackgroundMedia",
                value: function() {
                    var e = this,
                        t = this.background,
                        i = this.background.nextLoadPromise,
                        n = this.model;
                    return this._destroyMediaController(t.currentMedia), t.currentMedia = null, i.then(function(i) { if (i) return t.clearNext(), e.adPlaying ? (n.attributes.itemReady = !0, t.currentMedia = i) : (e._setActiveMedia(i), i.background = !1), i })
                }
            }, {
                key: "_destroyBackgroundLoadingMedia",
                value: function() {
                    var e = this,
                        t = this.background,
                        i = this.background.nextLoadPromise;
                    i && i.then(function(i) { e._destroyMediaController(i), t.clearNext() })
                }
            }, { key: "_providerCanPlay", value: function(e, t) { var i = this.providers.choose(t).provider; return i && e && e instanceof i } }, {
                key: "audioTrack",
                get: function() { var e = this.mediaController; return e ? e.audioTrack : -1 },
                set: function(e) {
                    var t = this.mediaController;
                    t && (t.audioTrack = parseInt(e, 10) || 0)
                }
            }, { key: "audioTracks", get: function() { var e = this.mediaController; if (e) return e.audioTracks } }, {
                key: "beforeComplete",
                get: function() {
                    var e = this.mediaController,
                        t = this.background.currentMedia;
                    return !(!e && !t) && (e ? e.beforeComplete : t.beforeComplete)
                }
            }, { key: "primedElement", get: function() { return this.backgroundLoading ? this.mediaPool.getPrimedElement() : this.model.get("mediaElement") } }, {
                key: "quality",
                get: function() { return this.mediaController ? this.mediaController.quality : -1 },
                set: function(e) {
                    var t = this.mediaController;
                    t && (t.quality = parseInt(e, 10) || 0)
                }
            }, { key: "qualities", get: function() { var e = this.mediaController; return e ? e.qualities : null } }, {
                key: "attached",
                set: function(e) {
                    var t = this.mediaController;
                    if (t)
                        if (e) t.attach();
                        else {
                            t.detach();
                            var i = t.item,
                                n = t.mediaModel.get("position");
                            n && (i.starttime = n)
                        }
                }
            }, {
                key: "controls",
                set: function(e) {
                    var t = this.mediaController;
                    t && (t.controls = e)
                }
            }, {
                key: "mute",
                set: function(e) {
                    var t = this.background,
                        i = this.mediaController,
                        n = this.mediaPool;
                    i && (i.mute = e), t.currentMedia && (t.currentMedia.mute = e), n.syncMute(e)
                }
            }, {
                key: "position",
                set: function(e) {
                    var t = this.mediaController;
                    t && (t.item.starttime = e, t.attached && (t.position = e))
                }
            }, {
                key: "subtitles",
                set: function(e) {
                    var t = this.mediaController;
                    t && (t.subtitles = e)
                }
            }, {
                key: "volume",
                set: function(e) {
                    var t = this.background,
                        i = this.mediaController,
                        n = this.mediaPool;
                    i && (i.volume = e), t.currentMedia && (t.currentMedia.volume = e), n.syncVolume(e)
                }
            }]), t
        }();

        function I(e) { return e === o.Ka || e === o.La ? o.Ma : e }

        function B(e, t, i) {
            if ((t = I(t)) !== (i = I(i))) {
                var n = t.replace(/(?:ing|d)$/, ""),
                    a = { type: n, newstate: t, oldstate: i, reason: e.mediaModel.get("mediaState") };
                "play" === n ? a.playReason = e.get("playReason") : "pause" === n && (a.pauseReason = e.get("pauseReason")), this.trigger(n, a)
            }
        }
        var R = i(57),
            z = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
            }(),
            H = function e(t, i, n, a) {
                var o = Object.getOwnPropertyDescriptor(t, i);
                if (void 0 === o) {
                    var r = Object.getPrototypeOf(t);
                    null !== r && e(r, i, n, a)
                } else if ("value" in o && o.writable) o.value = n;
                else {
                    var s = o.set;
                    void 0 !== s && s.call(a, n)
                }
                return n
            };
        var V = function(e) {
                function t(e, i) {
                    ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t);
                    var n = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i)),
                        a = n.model = new _;
                    n.playerModel = e, n.provider = null, n.backgroundLoading = e.get("backgroundLoading"), a.mediaModel.attributes.mediaType = "video";
                    var o = void 0;
                    if (n.backgroundLoading) o = i.getAdElement();
                    else {
                        o = e.get("mediaElement"), a.attributes.mediaElement = o, a.attributes.mediaSrc = o.src;
                        var r = n.srcResetListener = function() { n.srcReset() };
                        o.addEventListener("emptied", r), o.playbackRate = o.defaultPlaybackRate = 1
                    }
                    return n.mediaPool = Object(R.a)(o, i), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, P), z(t, [{
                    key: "setup",
                    value: function() {
                        var e = this.model,
                            t = this.playerModel,
                            i = this.primedElement,
                            n = t.attributes,
                            a = t.mediaModel;
                        e.setup({ id: n.id, volume: n.volume, instreamMode: !0, edition: n.edition, mediaContext: a, mute: n.mute, streamType: "VOD", autostartMuted: n.autostartMuted, autostart: n.autostart, advertising: n.advertising, sdkplatform: n.sdkplatform, skipButton: !1 }), e.on("fullscreenchange", this._nativeFullscreenHandler), e.on("change:state", B, this), e.on(o.w, function(e) { this.trigger(o.w, e) }, this), i.paused || i.pause()
                    }
                }, {
                    key: "setActiveItem",
                    value: function(e) {
                        var i = this;
                        return this.stopVideo(), this.provider = null,
                            function e(t, i, n) { null === t && (t = Function.prototype); var a = Object.getOwnPropertyDescriptor(t, i); if (void 0 === a) { var o = Object.getPrototypeOf(t); return null === o ? void 0 : e(o, i, n) } if ("value" in a) return a.value; var r = a.get; return void 0 !== r ? r.call(n) : void 0 }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setActiveItem", this).call(this, e).then(function(e) { i._setProvider(e.provider) }), this.playVideo()
                    }
                }, { key: "usePsuedoProvider", value: function(e) { this.provider = e, e && (this._setProvider(e), e.off(o.w), e.on(o.w, function(e) { this.trigger(o.w, e) }, this)) } }, {
                    key: "_setProvider",
                    value: function(e) {
                        var t = this;
                        if (e && this.mediaPool) {
                            var i = this.model,
                                n = this.playerModel,
                                a = "vpaid" === e.type;
                            e.off(), e.on("all", function(e, t) { a && e === o.F || this.trigger(e, Object(r.j)({}, t, { type: e })) }, this);
                            var s = i.mediaModel;
                            e.on(o.Aa, function(e) { s.set("mediaState", e.newstate) }), s.on("change:mediaState", function(e, i) { t._stateHandler(i) }), e.attachMedia(), e.volume(n.get("volume")), e.mute(n.getMute()), e.setPlaybackRate && e.setPlaybackRate(1), n.on("change:volume", function(e, t) { this.volume = t }, this), n.on("change:mute", function(e, t) { this.mute = t, t || (this.volume = n.get("volume")) }, this), n.on("change:autostartMuted", function(e, t) { t || (i.set("autostartMuted", t), this.mute = n.get("mute")) }, this)
                        }
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e = this.model,
                            t = this.mediaPool,
                            i = this.playerModel;
                        e.off();
                        var n = t.getPrimedElement();
                        if (this.backgroundLoading) {
                            t.clean();
                            var a = i.get("mediaContainer");
                            n.parentNode === a && a.removeChild(n)
                        } else n && (n.removeEventListener("emptied", this.srcResetListener), n.src !== e.get("mediaSrc") && this.srcReset())
                    }
                }, {
                    key: "srcReset",
                    value: function() {
                        var e = this.playerModel,
                            t = e.get("mediaModel"),
                            i = e.getVideo();
                        t.srcReset(), i && (i.src = null)
                    }
                }, { key: "_nativeFullscreenHandler", value: function(e) { this.model.trigger(e.type, e), this.trigger(o.y, { fullscreen: e.jwstate }) } }, {
                    key: "_stateHandler",
                    value: function(e) {
                        var t = this.model;
                        switch (e) {
                            case o.Pa:
                            case o.Oa:
                                t.set(o.Aa, e)
                        }
                    }
                }, {
                    key: "mute",
                    set: function(e) {
                        var i = this.mediaController,
                            n = this.model,
                            a = this.provider;
                        n.set("mute", e), H(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "mute", e, this), i || a.mute(e)
                    }
                }, {
                    key: "volume",
                    set: function(e) {
                        var i = this.mediaController,
                            n = this.model,
                            a = this.provider;
                        n.set("volume", e), H(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "volume", e, this), i || a.volume(e)
                    }
                }]), t
            }(),
            N = { skipoffset: null, tag: null },
            F = function(e, t, i, n) {
                var a = this,
                    s = this,
                    l = new V(t, n),
                    c = void 0,
                    u = void 0,
                    d = 0,
                    p = {},
                    f = S,
                    g = !1,
                    j = void 0,
                    v = void 0,
                    m = !1,
                    b = !1,
                    y = !1,
                    k = function(e) { m || ((e = e || {}).hasControls = !!t.get("controls"), a.trigger(o.z, e), l.model.get("state") === o.Oa ? e.hasControls && l.playVideo().catch(function() {}) : l.pause()) },
                    x = function() { m || l.model.get("state") === o.Oa && t.get("controls") && (e.setFullscreen(), e.play()) };

                function O() { l.model.set("playRejected", !0) }

                function T() { d++, s.loadItem(c) }

                function C(e, t) { "complete" !== e && (t = t || {}, p.tag && !t.tag && (t.tag = p.tag), this.trigger(e, t), "mediaError" !== e && "error" !== e || c && d + 1 < c.length && T()) }

                function _(t) {
                    var i = t.duration,
                        n = t.position,
                        a = l.model.mediaModel || l.model;
                    a.set("duration", i), a.set("position", n), v || (v = (Object(w.c)(j, i) || i) - h.b), !g && n >= Math.max(v, h.a) && (e.preloadNextItem(), g = !0)
                }

                function M(e) {
                    var t = {};
                    p.tag && (t.tag = p.tag), this.trigger(o.F, t), S.call(this, e)
                }

                function S(e) { c && d + 1 < c.length ? T() : (e.type === o.F && this.trigger(o.Ba, {}), this.destroy()) }

                function E() { m || i.clickHandler() && i.clickHandler().setAlternateClickHandlers(k, x) }

                function A(e) { e.width && e.height && i.resizeMedia() }
                this.init = function() {
                    if (!b && !m) {
                        b = !0, l.setup(), l.on("all", C, this), l.on(o.N, O, this), l.on(o.R, _, this), l.on(o.F, M, this), l.on(o.K, A, this), e.detachMedia();
                        var n = l.primedElement;
                        t.get("mediaContainer").appendChild(n), t.set("instream", l), l.model.set("state", o.Ja);
                        var a = i.clickHandler();
                        return a && a.setAlternateClickHandlers(function() {}, null), this.setText(t.get("localization").loadingAd), y = e.isBeforeComplete() || t.get("state") === o.Ka, this
                    }
                }, this.enableAdsMode = function(n) {
                    var a = this;
                    if (!b && !m) return e.routeEvents({ mediaControllerListener: function(e, t) { a.trigger(e, t) } }), t.set("instream", l), l.model.set("state", o.Pa),
                        function(n) {
                            var a = i.clickHandler();
                            a && a.setAlternateClickHandlers(function(i) { m || ((i = i || {}).hasControls = !!t.get("controls"), s.trigger(o.z, i), n && (t.get("state") === o.Oa ? e.playVideo() : (e.pause(), n && (e.trigger(o.a, { clickThroughUrl: n }), window.open(n))))) }, null)
                        }(n), this
                }, this.setState = function(t) {
                    var i = t.newstate,
                        n = l.model;
                    t.oldstate = n.get("state"), n.set("state", i), i === o.Pa ? e.trigger(o.c, t) : i === o.Oa && e.trigger(o.b, t)
                }, this.setTime = function(t) { _(t), e.trigger(o.e, t) }, this.loadItem = function(e, i) {
                    if (m || !b) return Promise.reject(new Error("Instream not setup"));
                    var n = e;
                    Array.isArray(e) ? (c = e, u = i || u, e = c[d], u && (i = u[d])) : n = [e];
                    var a = l.model;
                    a.set("playlist", n), t.set("hideAdsControls", !1), e.starttime = 0, s.trigger(o.Ca, { index: d, item: e }), p = Object(r.j)({}, N, i), E(), a.set("skipButton", !1);
                    var f = l.setActiveItem(d);
                    return g = !1, (j = e.skipoffset || p.skipoffset) && s.setupSkipButton(j, p), f
                }, this.setupSkipButton = function(e, t, i) {
                    var n = l.model;
                    f = i || S, n.set("skipMessage", t.skipMessage), n.set("skipText", t.skipText), n.set("skipOffset", e), n.attributes.skipButton = !1, n.set("skipButton", !0)
                }, this.applyProviderListeners = function(e) { l.usePsuedoProvider(e), E() }, this.play = function() { l.playVideo() }, this.pause = function() { l.pause() }, this.skipAd = function(e) {
                    var t = o.d;
                    this.trigger(t, e), f.call(this, { type: t })
                }, this.replacePlaylistItem = function(e) { m || (t.set("playlistItem", e), l.srcReset()) }, this.destroy = function() { m || (m = !0, this.trigger("destroyed"), this.off(), i.clickHandler() && i.clickHandler().revertAlternateClickHandlers(), t.off(null, null, l), l.off(null, null, s), l.destroy(), b && l.model && (t.attributes.state = o.Oa), e.forwardEvents(), t.set("instream", null), l = null, b && !t.attributes._destroyed && (e.attachMedia(), this.noResume || (y ? e.stopVideo() : e.playVideo()))) }, this.getState = function() { return !m && l.model.get("state") }, this.setText = function(e) { return m ? this : (i.setAltText(e || ""), this) }, this.hide = function() { m || t.set("hideAdsControls", !0) }, this.getMediaElement = function() { return m ? null : l.primedElement }, this.setSkipOffset = function(e) { j = e > 0 ? e : null, l && l.model.set("skipOffset", j) }
            };
        Object(r.j)(F.prototype, g.a);
        var D = F,
            q = i(68),
            U = i(69),
            W = function(e) {
                var t = this,
                    i = [],
                    n = {},
                    a = 0;

                function r(e) {
                    if (e.data = e.data || [], e.name = e.label || e.name || e.language, e._id = Object(U.a)(e, i.length), !e.name) {
                        var t = Object(U.b)(e, a);
                        e.name = t.label, a = t.unknownCount
                    }
                    n[e._id] = e, i.push(e)
                }

                function s() { for (var e = [{ id: "off", label: "Off" }], t = 0; t < i.length; t++) e.push({ id: i[t]._id, label: i[t].name || "Unknown CC" }); return e }

                function l() {
                    var t = 0,
                        n = e.get("captionLabel");
                    if ("Off" !== n) {
                        for (var a = 0; a < i.length; a++) {
                            var o = i[a];
                            if (n && n === o.name) { t = a + 1; break }
                            o.default || o.defaulttrack || "default" === o._id ? t = a + 1 : o.autoselect
                        }! function(t) { i.length ? e.setVideoSubtitleTrack(t, i) : e.set("captionsIndex", t) }(t)
                    } else e.set("captionsIndex", 0)
                }

                function c() {
                    var t = s();
                    u(t) !== u(e.get("captionsList")) && (l(), e.set("captionsList", t))
                }

                function u(e) { return e.map(function(e) { return e.id + "-" + e.label }).join(",") }
                e.on("change:playlistItem", function(e) {
                    i = [], n = {}, a = 0;
                    var t = e.attributes;
                    t.captionsIndex = 0, t.captionsList = s(), e.set("captionsTrack", null)
                }, this), e.on("change:itemReady", function() {
                    var i = e.get("playlistItem").tracks,
                        a = i && i.length;
                    if (a && !e.get("renderCaptionsNatively"))
                        for (var s = function(e) {
                                var a = i[e];
                                (function(e) { return "subtitles" === e || "captions" === e })(a.kind) && !n[a._id] && (r(a), Object(q.c)(a, function(e) {! function(e, t) { e.data = t }(a, e) }, function(e) { t.trigger(o.Ta, e) }))
                            }, l = 0; l < a; l++) s(l);
                    c()
                }, this), e.on("change:captionsIndex", function(e, t) {
                    var n = null;
                    0 !== t && (n = i[t - 1]), e.set("captionsTrack", n)
                }, this), this.setSubtitlesTracks = function(e) {
                    if (e.length) {
                        for (var t = 0; t < e.length; t++) r(e[t]);
                        i = Object.keys(n).map(function(e) { return n[e] }), c()
                    }
                }, this.getCurrentIndex = function() { return e.get("captionsIndex") }, this.getCaptionsList = function() { return e.get("captionsList") }, this.destroy = function() { this.off(null, null, this) }
            };
        Object(r.j)(W.prototype, g.a);
        var Z = W,
            K = function(e) { return '<div id="' + e + '" class="jwplayer jw-reset jw-state-setup" tabindex="0" aria-label="' + (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "") + '" role="application"><div class="jw-aspect jw-reset"></div><div class="jw-wrapper jw-reset"><div class="jw-top jw-reset"></div><div class="jw-aspect jw-reset"></div><div class="jw-media jw-reset"></div><div class="jw-preview jw-reset"></div><div class="jw-title jw-reset"><div class="jw-title-primary jw-reset"></div><div class="jw-title-secondary jw-reset"></div></div><div class="jw-overlays jw-reset"></div></div></div>' },
            Q = i(43),
            J = 44,
            Y = function(e) { var t = e.get("height"); if (e.get("aspectratio")) return !1; if ("string" == typeof t && t.indexOf("%") > -1) return !1; var i = 1 * t || NaN; return !!(i = isNaN(i) ? e.get("containerHeight") : i) && (i && i <= J) },
            X = i(81);

        function G(e, t) {
            if (e.get("fullscreen")) return 1;
            if (!e.get("activeTab")) return 0;
            if (e.get("floating")) return 1;
            var i = e.get("intersectionRatio");
            return void 0 === i && (i = function(e) {
                var t = document.documentElement,
                    i = document.body,
                    n = { top: 0, left: 0, right: t.clientWidth || i.clientWidth, width: t.clientWidth || i.clientWidth, bottom: t.clientHeight || i.clientHeight, height: t.clientHeight || i.clientHeight };
                if (!i.contains(e)) return 0;
                if ("none" === window.getComputedStyle(e).display) return 0;
                var a = $(e);
                if (!a) return 0;
                var o = a,
                    r = e.parentNode,
                    s = !1;
                for (; !s;) {
                    var l = null;
                    if (r === i || r === t || 1 !== r.nodeType ? (s = !0, l = n) : "visible" !== window.getComputedStyle(r).overflow && (l = $(r)), l && !(o = ee(l, o))) return 0;
                    r = r.parentNode
                }
                var c = a.width * a.height,
                    u = o.width * o.height;
                return c ? u / c : 0
            }(t), window.top !== window.self && i) ? 0 : i
        }

        function $(e) { try { return e.getBoundingClientRect() } catch (e) {} }

        function ee(e, t) {
            var i = Math.max(e.top, t.top),
                n = Math.min(e.bottom, t.bottom),
                a = Math.max(e.left, t.left),
                o = Math.min(e.right, t.right),
                r = o - a,
                s = n - i;
            return r >= 0 && s >= 0 && { top: i, bottom: n, left: a, right: o, width: r, height: s }
        }
        var te = i(73),
            ie = i(66),
            ne = i(70),
            ae = i(23);
        var oe = i(38),
            re = i(10),
            se = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
            le = function(e, t, i) { for (var n = e.requestFullscreen || e.webkitRequestFullscreen || e.webkitRequestFullScreen || e.mozRequestFullScreen || e.msRequestFullscreen, a = t.exitFullscreen || t.webkitExitFullscreen || t.webkitCancelFullScreen || t.mozCancelFullScreen || t.msExitFullscreen, o = !(!n || !a), r = se.length; r--;) t.addEventListener(se[r], i); return { events: se, supportsDomFullscreen: function() { return o }, requestFullscreen: function() { n.apply(e) }, exitFullscreen: function() { a.apply(t) }, fullscreenElement: function() { return t.fullscreenElement || t.webkitCurrentFullScreenElement || t.mozFullScreenElement || t.msFullscreenElement }, destroy: function() { for (var e = se.length; e--;) t.removeEventListener(se[e], i) } } },
            ce = function(e) {
                var t = !1,
                    i = function() { t = !1, Object(re.l)(e, "jw-no-focus") },
                    n = function() { t = !0, Object(re.a)(e, "jw-no-focus") },
                    a = function() { t || i() };
                return e.addEventListener("focus", a), e.addEventListener("blur", i), e.addEventListener("mousedown", n), { destroy: function() { e.removeEventListener("focus", a), e.removeEventListener("blur", i), e.removeEventListener("mousedown", n) } }
            },
            ue = i(35),
            de = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
            }();
        var pe = function() {
                function e(t, i) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), Object(r.j)(this, g.a), this.revertAlternateClickHandlers(), this.domElement = i, this.model = t, this.ui = new ue.a(i).on("click tap", this.clickHandler, this).on("doubleClick doubleTap", function() { this.alternateDoubleClickHandler ? this.alternateDoubleClickHandler() : this.trigger("doubleClick") }, this) }
                return de(e, [{ key: "destroy", value: function() { this.ui && (this.ui.destroy(), this.ui = this.domElement = this.model = null, this.revertAlternateClickHandlers()) } }, { key: "clickHandler", value: function(e) { this.model.get("flashBlocked") || (this.alternateClickHandler ? this.alternateClickHandler(e) : this.trigger(e.type === o.n ? "click" : "tap")) } }, { key: "element", value: function() { return this.domElement } }, { key: "setAlternateClickHandlers", value: function(e, t) { this.alternateClickHandler = e, this.alternateDoubleClickHandler = t || null } }, { key: "revertAlternateClickHandlers", value: function() { this.alternateClickHandler = null, this.alternateDoubleClickHandler = null } }]), e
            }(),
            fe = void 0,
            he = { back: !0, backgroundOpacity: 50, edgeStyle: null, fontSize: 14, fontOpacity: 100, fontScale: .05, preprocessor: r.o, windowOpacity: 0 },
            we = function(e) {
                var t = this,
                    n = e.player,
                    s = void 0,
                    l = void 0,
                    c = void 0,
                    u = void 0,
                    d = void 0,
                    p = void 0,
                    f = void 0,
                    h = void 0,
                    w = void 0;

                function g() { Object(r.s)(s.fontSize) && (n.get("containerHeight") ? h = he.fontScale * s.fontSize / he.fontSize : n.once("change:containerHeight", g, this)) }

                function j() {
                    var e = n.get("containerHeight");
                    if (e) {
                        var t = void 0;
                        if (n.get("fullscreen") && y.OS.iOS) t = "inherit";
                        else {
                            var i = e * h;
                            t = Math.round(10 * function(e) {
                                var t = n.get("mediaElement");
                                if (t && t.videoHeight) {
                                    var i = t.videoWidth,
                                        a = t.videoHeight,
                                        o = i / a,
                                        r = n.get("containerHeight"),
                                        s = n.get("containerWidth");
                                    if (n.get("fullscreen") && y.OS.mobile) {
                                        var l = window,
                                            c = l.screen;
                                        c.orientation && (r = c.availHeight, s = c.availWidth)
                                    }
                                    if (s && r && i && a) {
                                        var u = s / r,
                                            d = u > o ? r : a * s / i;
                                        return d * h
                                    }
                                }
                                return e
                            }(i)) / 10
                        }
                        n.get("renderCaptionsNatively") ? function(e, t) { w.fontSize = t + "px", Object(ae.b)("#" + e + " .jw-video::-webkit-media-text-track-display", w, e, !0) }(n.get("id"), t) : Object(ae.d)(d, { fontSize: t })
                    }
                }

                function v(e, t, i) { var n = Object(ae.c)("#000000", i); "dropshadow" === e ? t.textShadow = "0 2px 1px " + n : "raised" === e ? t.textShadow = "0 0 5px " + n + ", 0 1px 5px " + n + ", 0 2px 5px " + n : "depressed" === e ? t.textShadow = "0 -2px 1px " + n : "uniform" === e && (t.textShadow = "-2px 0 1px " + n + ",2px 0 1px " + n + ",0 -2px 1px " + n + ",0 2px 1px " + n + ",-1px 1px 1px " + n + ",1px 1px 1px " + n + ",1px -1px 1px " + n + ",1px 1px 1px " + n) }(d = document.createElement("div")).className = "jw-captions jw-reset", this.show = function() { Object(re.a)(d, "jw-captions-enabled") }, this.hide = function() { Object(re.l)(d, "jw-captions-enabled") }, this.populate = function(e) { n.get("renderCaptionsNatively") || (c = [], l = e, e ? this.selectCues(e, u) : this.renderCues()) }, this.resize = function() { j(), this.renderCues(!0) }, this.renderCues = function(e) { e = !!e, fe && fe.processCues(window, c, d, e) }, this.selectCues = function(e, t) { if (e && e.data && t && !n.get("renderCaptionsNatively")) { var i = this.getAlignmentPosition(e, t);!1 !== i && (c = this.getCurrentCues(e.data, i), this.renderCues(!0)) } }, this.getCurrentCues = function(e, t) { return Object(r.k)(e, function(e) { return t >= e.startTime && (!e.endTime || t <= e.endTime) }) }, this.getAlignmentPosition = function(e, t) {
                    var i = e.source,
                        n = t.metadata,
                        a = t.currentTime;
                    return i && n && Object(r.v)(n[i]) && (a = n[i]), a
                }, this.clear = function() { Object(re.f)(d) }, this.setup = function(e, t) {
                    p = document.createElement("div"), f = document.createElement("span"), p.className = "jw-captions-window jw-reset", f.className = "jw-captions-text jw-reset", s = Object(r.j)({}, he, t), h = he.fontScale, g(s.fontSize);
                    var i = s.windowColor,
                        a = s.windowOpacity,
                        o = s.edgeStyle;
                    w = {};
                    var l = {};
                    ! function(e, t) {
                        var i = t.color,
                            n = t.fontOpacity;
                        (i || n !== he.fontOpacity) && (e.color = Object(ae.c)(i || "#ffffff", n));
                        if (t.back) {
                            var a = t.backgroundColor,
                                o = t.backgroundOpacity;
                            a === he.backgroundColor && o === he.backgroundOpacity || (e.backgroundColor = Object(ae.c)(a, o))
                        } else e.background = "transparent";
                        t.fontFamily && (e.fontFamily = t.fontFamily);
                        t.fontStyle && (e.fontStyle = t.fontStyle);
                        t.fontWeight && (e.fontWeight = t.fontWeight);
                        t.textDecoration && (e.textDecoration = t.textDecoration)
                    }(l, s), (i || a !== he.windowOpacity) && (w.backgroundColor = Object(ae.c)(i || "#000000", a)), v(o, l, s.fontOpacity), s.back || null !== o || v("uniform", l), Object(ae.d)(p, w), Object(ae.d)(f, l),
                        function(e, t) {
                            j(),
                                function(e, t) {
                                    y.Browser.safari && Object(ae.b)("#" + e + " .jw-video::-webkit-media-text-track-display-backdrop", { backgroundColor: t.backgroundColor }, e, !0);
                                    Object(ae.b)("#" + e + " .jw-video::-webkit-media-text-track-display", w, e, !0), Object(ae.b)("#" + e + " .jw-video::cue", t, e, !0)
                                }(e, t),
                                function(e, t) { Object(ae.b)("#" + e + " .jw-text-track-display", w, e), Object(ae.b)("#" + e + " .jw-text-track-cue", t, e) }(e, t)
                        }(e, l), p.appendChild(f), d.appendChild(p), n.change("captionsTrack", function(e, t) { this.populate(t) }, this), n.set("captions", s)
                }, this.element = function() { return d }, this.destroy = function() { n.off(null, null, this), this.off() };
                var m = function(e) { u = e, t.selectCues(l, u) };
                n.on("change:playlistItem", function() { u = null, c = [] }, this), n.on(o.P, function(e) { c = [], m(e) }, this), n.on(o.R, m, this), n.on("subtitlesTrackData", function() { this.selectCues(l, u) }, this), n.on("change:captionsList", function e(t, n) {
                    var r = this;
                    1 !== n.length && (t.get("renderCaptionsNatively") || fe || (i.e(12).then(function(e) { fe = i(151).default }.bind(null, i)).catch(Object(a.c)(301121)).catch(function(e) { r.trigger(o.Ta, e) }), t.off("change:captionsList", e, this)))
                }, this)
            };
        Object(r.j)(we.prototype, g.a);
        var ge = we,
            je = function(e, t) { return '<div class="jw-logo jw-logo-' + e + (t ? " jw-hide" : "") + ' jw-reset"></div>' },
            ve = { linktarget: "_blank", margin: 8, hide: !1, position: "top-right" };
        var me = function(e) { this.model = e, this.image = null };
        Object(r.j)(me.prototype, {
            setup: function(e) { this.el = e },
            setImage: function(e) {
                var t = this.image;
                t && (t.onload = null), this.image = null;
                var i = "";
                "string" == typeof e && (i = 'url("' + e + '")', (t = this.image = new Image).src = e), Object(ae.d)(this.el, { backgroundImage: i })
            },
            resize: function(e, t, i) {
                if ("uniform" === i) {
                    if (e && (this.playerAspectRatio = e / t), !this.playerAspectRatio || !this.image || ! function(e) { return "complete" === e || "idle" === e || "error" === e || "buffering" === e }(this.model.get("state"))) return;
                    var n = this.image,
                        a = null;
                    if (n) {
                        if (0 === n.width) { var o = this; return void(n.onload = function() { o.resize(e, t, i) }) }
                        var r = n.width / n.height;
                        Math.abs(this.playerAspectRatio - r) < .09 && (a = "cover")
                    }
                    Object(ae.d)(this.el, { backgroundSize: a })
                }
            },
            element: function() { return this.el }
        });
        var be = me,
            ye = function(e) { this.model = e.player };
        Object(r.j)(ye.prototype, {
            hide: function() { Object(ae.d)(this.el, { display: "none" }) },
            show: function() { Object(ae.d)(this.el, { display: "" }) },
            setup: function(e) {
                this.el = e;
                var t = this.el.getElementsByTagName("div");
                this.title = t[0], this.description = t[1], this.model.on("change:logoWidth", this.update, this), this.model.change("playlistItem", this.playlistItem, this)
            },
            update: function(e) {
                var t = {},
                    i = e.get("logo");
                if (i) {
                    var n = 1 * ("" + i.margin).replace("px", ""),
                        a = e.get("logoWidth") + (isNaN(n) ? 0 : n + 10);
                    "top-left" === i.position ? t.paddingLeft = a : "top-right" === i.position && (t.paddingRight = a)
                }
                Object(ae.d)(this.el, t)
            },
            playlistItem: function(e, t) {
                if (t)
                    if (e.get("displaytitle") || e.get("displaydescription")) {
                        var i = "",
                            n = "";
                        t.title && e.get("displaytitle") && (i = t.title), t.description && e.get("displaydescription") && (n = t.description), this.updateText(i, n)
                    } else this.hide()
            },
            updateText: function(e, t) { this.title.innerHTML = e, this.description.innerHTML = t, this.title.firstChild || this.description.firstChild ? this.show() : this.hide() },
            element: function() { return this.el }
        });
        var ke = ye,
            xe = i(61),
            Oe = function(e) { this.wrapperElement = e };
        Object(r.j)(Oe.prototype, { setup: function(e, t) { this.element = Object(re.e)(function(e) { return '<div class="jw-float-icon jw-icon jw-reset" aria-label=' + e + ' tabindex="0"></div>' }(t)), this.element.appendChild(Object(xe.a)("close")), this.ui = new ue.a(this.element).on("click tap enter", e, this), this.wrapperElement.appendChild(this.element) }, destroy: function() { this.element && (this.ui.destroy(), this.element.parentNode.removeChild(this.element), this.element = null) } });
        var Te = Oe;
        i(109);
        var Ce = void 0,
            _e = 320,
            Me = 320,
            Se = y.OS.mobile,
            Ee = y.Browser.ie,
            Ae = null;
        var Le = function(e, t) {
                var i = Object(r.j)(this, g.a, { isSetup: !1, api: e, model: t }),
                    n = t.get("localization"),
                    a = Object(re.e)(K(t.get("id"), n.player)),
                    s = a.querySelector(".jw-wrapper"),
                    l = a.querySelector(".jw-media"),
                    c = new be(t),
                    u = new ke(t),
                    d = new ge(t);
                d.on("all", i.trigger, i);
                var p = void 0,
                    f = void 0,
                    h = void 0,
                    j = -1,
                    v = -1,
                    m = !1,
                    b = -1,
                    k = t.get("floatOnScroll"),
                    x = !1,
                    O = void 0,
                    T = void 0,
                    C = void 0,
                    _ = null,
                    M = void 0;

                function S() { Object(ie.a)(v), v = Object(ie.b)(E) }

                function E() { i.isSetup && (i.updateBounds(), i.updateStyles(), i.checkResized()) }

                function A(e, i) {
                    if (Object(r.v)(e) && Object(r.v)(i)) {
                        var n = Object(ne.a)(e);
                        Object(ne.b)(a, n);
                        var o = n < 2;
                        Object(re.p)(a, "jw-flag-small-player", o), Object(re.p)(a, "jw-orientation-portrait", i > e)
                    }
                    if (t.get("controls")) {
                        var s = Y(t);
                        Object(re.p)(a, "jw-flag-audio-player", s), t.set("audioMode", s)
                    }
                }

                function L() {
                    var e = Oe();
                    t.set("visibility", G(t, e))
                }

                function P(e, t) {
                    var n = { controls: t };
                    t ? (Ce = oe.a.controls) ? I() : (n.loadPromise = Object(oe.b)().then(function(t) { Ce = t; var i = e.get("controls"); return i && I(), i }), n.loadPromise.catch(function(e) { i.trigger(o.Ta, e) })) : i.removeControls(), f && h && i.trigger(o.o, n)
                }

                function I() {
                    var e = new Ce(document, i.element());
                    i.addControls(e)
                }

                function B(e, t, n) { t && !n && (de(0, e.get("state")), i.updateStyles()) }

                function R(e) { M && M.mouseMove(e) }

                function z(e) { M && !M.showing && "IFRAME" === e.target.nodeName && M.userActive() }

                function H(e) { M && M.showing && (e.relatedTarget && !a.contains(e.relatedTarget) || !e.relatedTarget && y.Features.iframe) && M.userActive() }

                function V(e, t) { Object(re.m)(a, /jw-stretch-\S+/, "jw-stretch-" + t) }

                function N(e, t) {
                    Object(re.p)(a, "jw-flag-aspect-mode", !!t);
                    var i = a.querySelectorAll(".jw-aspect");
                    Object(ae.d)(i, { paddingLeft: t || null })
                }

                function F(i) { i.link ? (e.pause({ reason: "interaction" }), e.setFullscreen(!1), window.open(i.link, i.linktarget)) : t.get("controls") && e.playToggle({ reason: "interaction" }) }
                this.updateBounds = function() {
                    Object(ie.a)(v);
                    var e = Oe(),
                        i = document.body.contains(e),
                        n = Object(re.c)(e),
                        o = Math.round(n.width),
                        r = Math.round(n.height);
                    if (o === f && r === h) return f && h || S(), void t.set("inDom", i);
                    o && r || f && h || S(), (o || r || i) && (t.set("containerWidth", o), t.set("containerHeight", r)), t.set("inDom", i), i && X.a.observe(a)
                }, this.updateStyles = function() {
                    var e = t.get("containerWidth"),
                        i = t.get("containerHeight");
                    A(e, i), M && M.resize(e, i), U(e, i), d.resize()
                }, this.checkResized = function() {
                    var e = t.get("containerWidth"),
                        n = t.get("containerHeight");
                    if (e !== f || n !== h) {
                        f = e, h = n, i.trigger(o.Ha, { width: e, height: n });
                        var a = Object(ne.a)(e);
                        _ !== a && (_ = a, i.trigger(o.j, { breakpoint: _ }))
                    }
                }, this.responsiveListener = S, this.setup = function() {
                    c.setup(a.querySelector(".jw-preview")), u.setup(a.querySelector(".jw-title")), (p = new function(e) {
                        Object(r.j)(this, g.a);
                        var t = void 0,
                            i = void 0,
                            n = new Image;
                        this.setup = function() {
                            (i = Object(r.j)({}, ve, e.get("logo"))).position = i.position || ve.position, i.hide = "true" === i.hide.toString(), i.file && "control-bar" !== i.position && (t || (t = Object(re.e)(je(i.position, i.hide))), e.set("logo", i), n.onload = function() {
                                var n = this.height,
                                    a = this.width,
                                    o = { backgroundImage: 'url("' + this.src + '")' };
                                if (i.margin !== ve.margin) {
                                    var r = /(\w+)-(\w+)/.exec(i.position);
                                    3 === r.length && (o["margin-" + r[1]] = i.margin, o["margin-" + r[2]] = i.margin)
                                }
                                var s = .15 * e.get("containerHeight"),
                                    l = .15 * e.get("containerWidth");
                                if (n > s || a > l) {
                                    var c = a / n;
                                    l / s > c ? (n = s, a = s * c) : (a = l, n = l / c)
                                }
                                o.width = Math.round(a), o.height = Math.round(n), Object(ae.d)(t, o), e.set("logoWidth", o.width)
                            }, n.src = i.file, i.link && (t.setAttribute("tabindex", "0"), t.setAttribute("aria-label", e.get("localization").logo)), this.ui = new ue.a(t).on("click tap enter", function(e) { e && e.stopPropagation && e.stopPropagation(), this.trigger(o.A, { link: i.link, linktarget: i.linktarget }) }, this))
                        }, this.setContainer = function(e) { t && e.appendChild(t) }, this.element = function() { return t }, this.position = function() { return i.position }, this.destroy = function() { n.onload = null }
                    }(t)).setup(), p.setContainer(s), p.on(o.A, F), d.setup(a.id, t.get("captions")), u.element().parentNode.insertBefore(d.element(), u.element()), O = function(e, t, n) {
                        var r = new pe(t, n),
                            s = t.get("controls");
                        return r.on({
                            click: function() { i.trigger(o.p), M && (we() ? M.settingsMenu.close() : me() ? M.infoOverlay.close() : e.playToggle({ reason: "interaction" })) },
                            tap: function() {
                                a.removeEventListener("mousemove", R), a.removeEventListener("mouseout", H), a.removeEventListener("mouseover", z), i.trigger(o.p), we() && M.settingsMenu.close(), me() && M.infoOverlay.close();
                                var n = t.get("state");
                                if (s && (n === o.Ma || n === o.Ka || t.get("instream") && n === o.Oa) && e.playToggle({ reason: "interaction" }), s && n === o.Oa) {
                                    if (t.get("instream") || t.get("castActive") || "audio" === t.get("mediaType")) return;
                                    Object(re.p)(a, "jw-flag-controls-hidden"), d.renderCues(!0)
                                } else M && (M.showing ? M.userInactive() : M.userActive())
                            },
                            doubleClick: function() { return M && e.setFullscreen() }
                        }), a.addEventListener("mousemove", R), a.addEventListener("mouseover", z), a.addEventListener("mouseout", H), r
                    }(e, t, l), C = ce(a), T = le(a, document, W), k && new Te(s.querySelector(".jw-top")).setup(function() { return Le(!0) }, n.close), t.on("change:hideAdsControls", function(e, t) { Object(re.p)(a, "jw-flag-ads-hide-controls", t) }), t.on("change:scrubbing", function(e, t) { Object(re.p)(a, "jw-flag-dragging", t) }), t.on("change:playRejected", function(e, t) { Object(re.p)(a, "jw-flag-play-rejected", t) }), t.on(o.W, W), t.on("change:" + o.T, function() { U(), d.resize() }), t.player.on("change:errorEvent", se), t.change("stretching", V);
                    var f = t.get("width"),
                        h = t.get("height");
                    q(f, h), t.change("aspectratio", N), A(f, h), t.get("controls") || Object(re.a)(a, "jw-flag-controls-hidden"), Ee && Object(re.a)(a, "jw-ie");
                    var j = t.get("skin") || {};
                    j.name && Object(re.m)(a, /jw-skin-\S+/, "jw-skin-" + j.name);
                    var v = function(e) {
                        e || (e = {});
                        var t = e.active,
                            i = e.inactive,
                            n = e.background,
                            a = {};
                        return a.controlbar = function(e) { if (e || t || i || n) { var a = {}; return e = e || {}, a.iconsActive = e.iconsActive || t, a.icons = e.icons || i, a.text = e.text || i, a.background = e.background || n, a } }(e.controlbar), a.timeslider = function(e) { if (e || t) { var i = {}; return e = e || {}, i.progress = e.progress || t, i.rail = e.rail, i } }(e.timeslider), a.menus = function(e) { if (e || t || i || n) { var a = {}; return e = e || {}, a.text = e.text || i, a.textActive = e.textActive || t, a.background = e.background || n, a } }(e.menus), a.tooltips = function(e) { if (e || i || n) { var t = {}; return e = e || {}, t.text = e.text || i, t.background = e.background || n, t } }(e.tooltips), a
                    }(j);
                    ! function(e, t) {
                        function i(t, i, n, a) {
                            if (n) {
                                t = Object(w.e)(t, "#" + e + (a ? "" : " "));
                                var o = {};
                                o[i] = n, Object(ae.b)(t.join(", "), o, e)
                            }
                        }
                        t && (t.controlbar && function(t) { i([".jw-controlbar .jw-icon-inline.jw-text", ".jw-title-primary", ".jw-title-secondary"], "color", t.text), t.icons && (i([".jw-button-color:not(.jw-icon-cast)", ".jw-button-color.jw-toggle.jw-off:not(.jw-icon-cast)"], "color", t.icons), i([".jw-display-icon-container .jw-button-color"], "color", t.icons), Object(ae.b)("#" + e + " .jw-icon-cast google-cast-launcher.jw-off", "{--disconnected-color: " + t.icons + "}", e)), t.iconsActive && (i([".jw-display-icon-container .jw-button-color:hover", ".jw-display-icon-container .jw-button-color:focus"], "color", t.iconsActive), i([".jw-button-color.jw-toggle:not(.jw-icon-cast)", ".jw-button-color:hover:not(.jw-icon-cast)", ".jw-button-color:focus:not(.jw-icon-cast)", ".jw-button-color.jw-toggle.jw-off:hover:not(.jw-icon-cast)"], "color", t.iconsActive), i([".jw-svg-icon-buffer"], "fill", t.icons), Object(ae.b)("#" + e + " .jw-icon-cast:hover google-cast-launcher.jw-off", "{--disconnected-color: " + t.iconsActive + "}", e), Object(ae.b)("#" + e + " .jw-icon-cast:focus google-cast-launcher.jw-off", "{--disconnected-color: " + t.iconsActive + "}", e), Object(ae.b)("#" + e + " .jw-icon-cast google-cast-launcher.jw-off:focus", "{--disconnected-color: " + t.iconsActive + "}", e), Object(ae.b)("#" + e + " .jw-icon-cast google-cast-launcher", "{--connected-color: " + t.iconsActive + "}", e), Object(ae.b)("#" + e + " .jw-icon-cast google-cast-launcher:focus", "{--connected-color: " + t.iconsActive + "}", e), Object(ae.b)("#" + e + " .jw-icon-cast:hover google-cast-launcher", "{--connected-color: " + t.iconsActive + "}", e), Object(ae.b)("#" + e + " .jw-icon-cast:focus google-cast-launcher", "{--connected-color: " + t.iconsActive + "}", e)), i([" .jw-settings-topbar", ":not(.jw-state-idle) .jw-controlbar", ".jw-flag-audio-player .jw-controlbar"], "background", t.background, !0) }(t.controlbar), t.timeslider && function(e) { i([".jw-progress", ".jw-knob"], "background-color", e.progress), i([".jw-buffer"], "background-color", Object(ae.c)(e.progress, 50)), i([".jw-rail"], "background-color", e.rail), i([".jw-background-color.jw-slider-time", ".jw-slider-time .jw-cue"], "background-color", e.background) }(t.timeslider), t.menus && function(e) { i([".jw-option", ".jw-toggle.jw-off", ".jw-skip .jw-skip-icon", ".jw-nextup-tooltip", ".jw-nextup-close", ".jw-settings-content-item", ".jw-related-title"], "color", e.text), i([".jw-option.jw-active-option", ".jw-option:not(.jw-active-option):hover", ".jw-option:not(.jw-active-option):focus", ".jw-settings-content-item:hover", ".jw-nextup-tooltip:hover", ".jw-nextup-tooltip:focus", ".jw-nextup-close:hover"], "color", e.textActive), i([".jw-nextup", ".jw-settings-menu"], "background", e.background) }(t.menus), t.tooltips && function(e) { i([".jw-skip", ".jw-tooltip .jw-text", ".jw-time-tip .jw-text"], "background-color", e.background), i([".jw-time-tip", ".jw-tooltip"], "color", e.background), i([".jw-skip"], "border", "none"), i([".jw-skip .jw-text", ".jw-skip .jw-icon", ".jw-time-tip .jw-text", ".jw-tooltip .jw-text"], "color", e.text) }(t.tooltips), t.menus && function(t) {
                            if (t.textActive) {
                                var i = { color: t.textActive, borderColor: t.textActive, stroke: t.textActive };
                                Object(ae.b)("#" + e + " .jw-color-active", i, e), Object(ae.b)("#" + e + " .jw-color-active-hover:hover", i, e)
                            }
                            if (t.text) {
                                var n = { color: t.text, borderColor: t.text, stroke: t.text };
                                Object(ae.b)("#" + e + " .jw-color-inactive", n, e), Object(ae.b)("#" + e + " .jw-color-inactive-hover:hover", n, e)
                            }
                        }(t.menus))
                    }(t.get("id"), v), t.set("mediaContainer", l), t.set("iFrame", y.Features.iframe), t.set("activeTab", Object(te.a)()), t.set("touchMode", Se && ("string" == typeof h || h >= J)), X.a.add(this), t.get("enableGradient") && !Ee && Object(re.a)(a, "jw-ab-drop-shadow"), this.isSetup = !0, t.trigger("viewSetup", a);
                    var m = document.body.contains(a);
                    m && X.a.observe(a), t.set("inDom", m)
                }, this.init = function() {
                    this.updateBounds(), t.on("change:fullscreen", D), t.on("change:activeTab", L), t.on("change:fullscreen", L), t.on("change:intersectionRatio", L), t.on("change:visibility", B), t.on("instreamMode", function(e) { e ? ye() : xe() }), L(), 1 !== X.a.size() || t.get("visibility") || B(t, 1, 0);
                    var e = t.player;
                    t.change("state", de), e.change("controls", P), t.change("streamType", $), t.change("mediaType", ee), e.change("playlistItem", he), f = h = null, this.checkResized()
                }, this.addControls = function(n) {
                    M = n, Object(re.l)(a, "jw-flag-controls-hidden"), n.enable(e, t), h && (A(f, h), n.resize(f, h), d.renderCues(!0)), n.on("userActive userInactive", function() {
                        var e = t.get("state");
                        e !== o.Pa && e !== o.Ja || d.renderCues(!0)
                    }), n.on("all", i.trigger, i), t.get("instream") && M.setupInstream()
                }, this.removeControls = function() { M && (M.disable(t), M = null), Object(re.a)(a, "jw-flag-controls-hidden") };
                var D = function(t, i) {
                    if (i && M && t.get("autostartMuted") && M.unmuteAutoplay(e, t), T.supportsDomFullscreen()) i ? T.requestFullscreen() : T.exitFullscreen(), Z(a, i);
                    else if (Ee) Z(a, i);
                    else {
                        var n = t.get("instream"),
                            o = n ? n.provider : null,
                            r = t.getVideo() || o;
                        r && r.setFullscreen && r.setFullscreen(i)
                    }
                };

                function q(e, i, n) {
                    var o = void 0 !== e,
                        l = void 0 !== i,
                        c = { width: e };
                    if (l && n && !m && t.set("aspectratio", null), !t.get("aspectratio")) {
                        var u = i;
                        Object(r.v)(u) && 0 !== u && (u = Math.max(u, J)), c.height = u
                    }
                    o && l && !m && (t.set("width", e), t.set("height", i)), k && m ? Object(ae.d)(s, c) : Object(ae.d)(a, c)
                }

                function U(e, i) {
                    if ((e && !isNaN(1 * e) || (e = t.get("containerWidth"))) && (i && !isNaN(1 * i) || (i = t.get("containerHeight")))) {
                        c && c.resize(e, i, t.get("stretching"));
                        var n = t.getVideo();
                        n && n.resize(e, i, t.get("stretching"))
                    }
                }

                function W(e) {
                    var i = t.get("fullscreen"),
                        n = void 0 !== e.jwstate ? e.jwstate : function() { if (T.supportsDomFullscreen()) { var e = T.fullscreenElement(); return !(!e || e !== a) } return t.getVideo().getFullScreen() }();
                    i !== n && t.set("fullscreen", n), S(), clearTimeout(j), j = setTimeout(U, 200)
                }

                function Z(e, t) { Object(re.p)(e, "jw-flag-fullscreen", t), Object(ae.d)(document.body, { overflowY: t ? "hidden" : "" }), t && M && M.userActive(), U(), S() }

                function $(e, t) {
                    var i = "LIVE" === t;
                    Object(re.p)(a, "jw-flag-live", i)
                }

                function ee(e, t) {
                    var i = "audio" === t,
                        n = e.get("provider");
                    Object(re.p)(a, "jw-flag-media-audio", i);
                    var o = n && 0 === n.name.indexOf("flash"),
                        r = i && !o ? l : l.nextSibling;
                    c.el.parentNode.insertBefore(c.el, r)
                }

                function se(e, t) {
                    if (t) {
                        var i = Object(Q.a)(e, t);
                        Q.a.cloneIcon && i.querySelector(".jw-icon").appendChild(Q.a.cloneIcon("error")), u.hide(), a.appendChild(i.firstChild), Object(re.p)(a, "jw-flag-audio-player", !!e.get("audioMode"))
                    } else u.playlistItem(e, e.get("playlistItem"))
                }

                function de(e, t, n) {
                    if (i.isSetup) {
                        if (n === o.La) {
                            var r = a.querySelector(".jw-error-msg");
                            r && r.parentNode.removeChild(r)
                        }
                        Object(ie.a)(b), t === o.Pa ? fe(t) : b = Object(ie.b)(function() { return fe(t) })
                    }
                }

                function fe(e) {
                    switch (t.get("controls") && e !== o.Oa && Object(re.h)(a, "jw-flag-controls-hidden") && Object(re.l)(a, "jw-flag-controls-hidden"), Object(re.m)(a, /jw-state-\S+/, "jw-state-" + e), e) {
                        case o.Ma:
                        case o.La:
                        case o.Ka:
                            d && d.hide();
                            break;
                        default:
                            d && (d.show(), e === o.Oa && M && !M.showing && d.renderCues(!0))
                    }
                }

                function he(e, t) {
                    ! function(e) { c.setImage(e && e.image) }(t), Se && function(e, t) {
                        var i = e.get("mediaElement");
                        if (i) {
                            var n = document.createElement("div");
                            n.innerHTML = t.title || "", i.setAttribute("title", n.textContent)
                        }
                    }(e, t)
                }
                this.resize = function(e, t) { q(e, t, !0), E() }, this.resizeMedia = U;
                var we = function() { var e = M && M.settingsMenu; return !(!e || !e.visible) },
                    me = function() { var e = M && M.infoOverlay; return !(!e || !e.visible) },
                    ye = function() { Object(re.a)(a, "jw-flag-ads"), M && M.setupInstream() },
                    xe = function() {
                        if (O) {
                            M && M.destroyInstream(t), i.setAltText(""), Object(re.l)(a, ["jw-flag-ads", "jw-flag-ads-hide-controls"]), t.set("hideAdsControls", !1);
                            var e = t.getVideo();
                            e && e.setContainer(l), O.revertAlternateClickHandlers()
                        }
                    };

                function Oe() { return t.get("floating") ? s : a }

                function Le(e) { Ae === a && (Ae = null, e && (k = !1), Object(re.l)(a, "jw-flag-floating"), i.trigger(o.x, { floating: !1 }), t.set("floating", !1), Object(ae.d)(a, { backgroundImage: null }), Object(ae.d)(s, { width: null, height: null }), i.resize(t.get("width"), t.get("aspectratio") ? void 0 : t.get("height"))) }
                this.setAltText = function(e) { t.set("altText", e) }, this.clickHandler = function() { return O }, this.getContainer = this.element = function() { return a }, this.getWrapper = function() { return s }, this.controlsContainer = function() { return M ? M.element() : null }, this.getSafeRegion = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = { x: 0, y: 0, width: f || 0, height: h || 0 };
                    return M && e && (t.height -= M.controlbarHeight()), t
                }, this.setCaptions = function(e) { d.clear(), d.setup(t.get("id"), e), d.resize() }, this.setIntersection = function(e) {
                    var n = Math.round(100 * e.intersectionRatio) / 100;
                    t.set("intersectionRatio", n), k && (x = x || 1 === n) && function(e) {
                        var n = 1 === e;
                        if (n || t.get("state") === o.Ma || null !== Ae) n && Le();
                        else {
                            Ae = a, Object(ae.d)(a, { backgroundImage: c.el.style.backgroundImage || t.get("image") }), Object(re.a)(a, "jw-flag-floating"), i.trigger(o.x, { floating: !0 }), t.set("floating", !0), m = !0;
                            var r = i.getSafeRegion(!1),
                                s = r.width,
                                l = r.height,
                                u = Math.min(1, _e / s, Me / l);
                            i.resize(s * u, l * u, !0), m = !1
                        }
                    }(n)
                }, this.destroy = function() { t.destroy(), X.a.unobserve(a), X.a.remove(this), this.isSetup = !1, this.off(), Object(ie.a)(v), clearTimeout(j), Ae === a && (Ae = null), C && (C.destroy(), C = null), T && (T.destroy(), T = null), M && M.disable(t), O && (O.destroy(), a.removeEventListener("mousemove", R), a.removeEventListener("mouseout", H), a.removeEventListener("mouseover", z), O = null), d.destroy(), p && (p.destroy(), p = null), Object(ae.a)(t.get("id")) }
            },
            Pe = !1,
            Ie = function(e, t) { this.playerElement = e, this.wrapperElement = t };
        Object(r.j)(Ie.prototype, {
            setup: function(e) {
                var t = Object(re.e)(function(e) { return '<span class="jw-text jw-reset">' + e + "</span>" }(e));
                this.wrapperElement.appendChild(t), Object(re.a)(this.playerElement, "jw-flag-top")
            }
        });
        var Be = Ie,
            Re = function(e, t) {
                var n = new Le(e, t),
                    a = n.setup;
                n.setup = function() {
                    var e = this;
                    a.call(this), t.get("displayHeading") && new Be(n.getContainer(), n.getContainer().querySelector(".jw-top")).setup(t.get("localization").advertising.displayHeading), t.change("castAvailable", function(t, i) {
                        var n = t.get("cast");
                        Object(n) === n && Object(re.p)(e.getContainer(), "jw-flag-cast-available", i)
                    }, this), t.change("castActive", function(t, i) {
                        var n = t.get("airplayActive");
                        Object(re.p)(e.getContainer(), "jw-flag-casting", i || !1), Object(re.p)(e.getContainer(), "jw-flag-airplay-casting", n || !1)
                    }, this), t.change("flashBlocked", function(t, i) { Object(re.p)(e.getContainer(), "jw-flag-flash-blocked", i) }, this)
                };
                var r = t.get("advertising");
                return r && r.outstream && function(e) {
                    Pe || (Pe = !0, i(107));
                    var t = e.model,
                        n = e.getSafeRegion;
                    e.getSafeRegion = function(e) { var t = n.call(this, e); return t.height = this.api.getHeight(), t }, t.on("change:mediaState", function(i, a) { a !== o.Na && a !== o.Pa || (t.off("change:mediaState", null, e), Object(re.l)(e.getContainer(), "jw-flag-outstream-pending"), e.getSafeRegion = n, e.responsiveListener()) }, e);
                    var a = e.setup;
                    e.setup = function() { a.call(this), Object(re.a)(this.getContainer(), "jw-flag-outstream jw-flag-outstream-pending") }
                }(n), n
            },
            ze = function e(t, i, n) { null === t && (t = Function.prototype); var a = Object.getOwnPropertyDescriptor(t, i); if (void 0 === a) { var o = Object.getPrototypeOf(t); return null === o ? void 0 : e(o, i, n) } if ("value" in a) return a.value; var r = a.get; return void 0 !== r ? r.call(n) : void 0 },
            He = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
            }();

        function Ve(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function Ne(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function Fe(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
        var De = function e() { Fe(this, e) };
        De.prototype = Object(r.j)({}, k.a);
        var qe = /^change:(.+)$/;

        function Ue(e, t, i) { Object.keys(t).forEach(function(n) { n in t && t[n] !== i[n] && e.trigger("change:" + n, e, t[n], i[n]) }) }

        function We(e, t) { e && e.off(null, null, t) }
        var Ze = function(e) {
                function t(e, i) { Fe(this, t); var n = Ve(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); return n._model = e, n._mediaModel = null, Object(r.j)(e.attributes, { altText: "", fullscreen: !1, logoWidth: 0, scrubbing: !1 }), e.on("all", function(t, a, o, r) { a === e && (a = n), i && !i(t, a, o, r) || n.trigger(t, a, o, r) }, n), e.on("change:mediaModel", function(e, t) { n.mediaModel = t }, n), n }
                return Ne(t, De), He(t, [{ key: "get", value: function(e) { var t = this._mediaModel; return t && e in t.attributes ? t.get(e) : this._model.get(e) } }, { key: "set", value: function(e, t) { return this._model.set(e, t) } }, { key: "getVideo", value: function() { return this._model.getVideo() } }, { key: "destroy", value: function() { We(this._model, this), We(this._mediaModel, this), this.off() } }, {
                    key: "mediaModel",
                    set: function(e) {
                        var t = this,
                            i = this._mediaModel;
                        We(i, this), this._mediaModel = e, e.on("all", function(i, n, a, o) { n === e && (n = t), t.trigger(i, n, a, o) }, this), i && Ue(this, e.attributes, i.attributes)
                    }
                }]), t
            }(),
            Ke = function(e) {
                function t(e) {
                    Fe(this, t);
                    var i = Ve(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, function(e) {
                        var t = i._instreamModel;
                        if (t) {
                            var n = qe.exec(e);
                            if (n)
                                if (n[1] in t.attributes) return !1
                        }
                        return !0
                    }));
                    return i._instreamModel = null, i._playerViewModel = new Ze(i._model), e.on("change:instream", function(e, t) { i.instreamModel = t ? t.model : null }, i), i
                }
                return Ne(t, Ze), He(t, [{ key: "get", value: function(e) { var t = this._mediaModel; if (t && e in t.attributes) return t.get(e); var i = this._instreamModel; return i && e in i.attributes ? i.get(e) : this._model.get(e) } }, { key: "getVideo", value: function() { var e = this._instreamModel; return e && e.getVideo() ? e.getVideo() : ze(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getVideo", this).call(this) } }, { key: "destroy", value: function() { ze(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this), We(this._instreamModel, this) } }, { key: "player", get: function() { return this._playerViewModel } }, {
                    key: "instreamModel",
                    set: function(e) {
                        var t = this,
                            i = this._instreamModel;
                        if (We(i, this), this._model.off("change:mediaModel", null, this), this._instreamModel = e, this.trigger("instreamMode", !!e), e) e.on("all", function(i, n, a, o) { n === e && (n = t), t.trigger(i, n, a, o) }, this), e.change("mediaModel", function(e, i) { t.mediaModel = i }, this), Ue(this, e.attributes, this._model.attributes);
                        else if (i) {
                            this._model.change("mediaModel", function(e, i) { t.mediaModel = i }, this);
                            var n = Object(r.j)({}, this._model.attributes, i.attributes);
                            Ue(this, this._model.attributes, n)
                        }
                    }
                }]), t
            }();
        var Qe = i(71),
            Je = function(e) { return e.URL && e.URL.createObjectURL ? e.URL : e.webkitURL || e.mozURL }(window),
            Ye = void 0;

        function Xe(e, t) { var i = t.muted; return Ye || (Ye = new Blob([new Uint8Array([0, 0, 0, 28, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 109, 112, 52, 49, 0, 0, 0, 8, 102, 114, 101, 101, 0, 0, 2, 239, 109, 100, 97, 116, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 2, 194, 109, 111, 111, 118, 0, 0, 0, 108, 109, 118, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 232, 0, 0, 0, 47, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 236, 116, 114, 97, 107, 0, 0, 0, 92, 116, 107, 104, 100, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 101, 100, 116, 115, 0, 0, 0, 28, 101, 108, 115, 116, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 47, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 100, 109, 100, 105, 97, 0, 0, 0, 32, 109, 100, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172, 68, 0, 0, 8, 0, 85, 196, 0, 0, 0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0, 0, 0, 1, 15, 109, 105, 110, 102, 0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1, 0, 0, 0, 211, 115, 116, 98, 108, 0, 0, 0, 103, 115, 116, 115, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 87, 109, 112, 52, 97, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0, 172, 68, 0, 0, 0, 0, 0, 51, 101, 115, 100, 115, 0, 0, 0, 0, 3, 128, 128, 128, 34, 0, 2, 0, 4, 128, 128, 128, 20, 64, 21, 0, 0, 0, 0, 1, 244, 0, 0, 1, 243, 249, 5, 128, 128, 128, 2, 18, 16, 6, 128, 128, 128, 1, 2, 0, 0, 0, 24, 115, 116, 116, 115, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 28, 115, 116, 115, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 28, 115, 116, 115, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 115, 0, 0, 1, 116, 0, 0, 0, 20, 115, 116, 99, 111, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 98, 117, 100, 116, 97, 0, 0, 0, 90, 109, 101, 116, 97, 0, 0, 0, 0, 0, 0, 0, 33, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 109, 100, 105, 114, 97, 112, 112, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 105, 108, 115, 116, 0, 0, 0, 37, 169, 116, 111, 111, 0, 0, 0, 29, 100, 97, 116, 97, 0, 0, 0, 1, 0, 0, 0, 0, 76, 97, 118, 102, 53, 54, 46, 52, 48, 46, 49, 48, 49])], { type: "video/mp4" })), e.muted = i, e.src = Je.createObjectURL(Ye), e.play() || Object(Qe.a)(e) }
        var Ge = "autoplayEnabled",
            $e = "autoplayMuted",
            et = "autoplayDisabled",
            tt = {};
        var it = i(72),
            nt = i(30),
            at = "tabHidden",
            ot = "tabVisible",
            rt = function(e) {
                var t = 0;
                return function(i) {
                    var n = i.position;
                    n > t && e(), t = n
                }
            };

        function st(e, t) { t.off(o.M, e._onPlayAttempt), t.off(o.Fa, e._triggerFirstFrame), t.off(o.R, e._onTime), e.off("change:activeTab", e._onTabVisible) }
        var lt = function(e, t) {
                e.change("mediaModel", function(e, i, n) {
                    e._qoeItem && n && e._qoeItem.end(n.get("mediaState")), e._qoeItem = new nt.a, e._qoeItem.getFirstFrame = function() {
                            var e = this.between(o.M, o.H),
                                t = this.between(ot, o.H);
                            return t > 0 && t < e ? t : e
                        }, e._qoeItem.tick(o.Ca), e._qoeItem.start(i.get("mediaState")),
                        function(e, t) {
                            e._onTabVisible && st(e, t);
                            var i = !1;
                            e._triggerFirstFrame = function() {
                                if (!i) {
                                    i = !0;
                                    var n = e._qoeItem;
                                    n.tick(o.H);
                                    var a = n.getFirstFrame();
                                    t.trigger(o.H, { loadTime: a }), st(e, t)
                                }
                            }, e._onTime = rt(e._triggerFirstFrame), e._onPlayAttempt = function() { e._qoeItem.tick(o.M) }, e._onTabVisible = function(t, i) { i ? e._qoeItem.tick(ot) : e._qoeItem.tick(at) }, e.on("change:activeTab", e._onTabVisible), t.on(o.M, e._onPlayAttempt), t.once(o.Fa, e._triggerFirstFrame), t.on(o.R, e._onTime)
                        }(e, t), i.on("change:mediaState", function(t, i, n) { i !== n && (e._qoeItem.end(n), e._qoeItem.start(i)) })
                })
            },
            ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
        var ut = function() {},
            dt = function() {};

        function pt(e) { return e && /^(?:mouse|pointer|touch|gesture|click|key)/.test(e.type) }
        Object(r.j)(ut.prototype, {
            setup: function(e, t, i, n, a, w) {
                var j = this,
                    m = this,
                    k = m._model = new _,
                    x = void 0,
                    O = void 0,
                    T = !1,
                    C = void 0,
                    M = !1,
                    S = void 0,
                    E = v(N),
                    A = v(dt);
                m.originalContainer = m.currentContainer = i, m._events = n, m.trigger = function(e, t) {
                    var i = function(e, t, i) {
                        var n = i;
                        switch (t) {
                            case "time":
                            case "beforePlay":
                            case "pause":
                            case "play":
                            case "ready":
                                var a = e.get("viewable");
                                void 0 !== a && (n = Object(r.j)({}, i, { viewable: a }))
                        }
                        return n
                    }(k, e, t);
                    return g.a.trigger.call(this, e, i)
                };
                var L = new u.a(m, ["trigger"], function() { return !0 }),
                    I = function(e, t) { m.trigger(e, t) };
                k.setup(e);
                var R = k.get("backgroundLoading"),
                    z = new Ke(k);
                (x = this._view = new Re(t, z)).on("all", I, m);
                var H = this._programController = new P(k, w);

                function V(e, t) { Object(r.y)(t) || k.set("viewable", Math.round(t)) }

                function N() { re && (!0 !== k.get("autostart") || k.get("playOnViewable") || Y(), re.flush()) }

                function F(e, t) { m.trigger("viewable", { viewable: t }), q() }

                function q() {
                    if ((s.a[0] === t || 1 === k.get("viewable")) && "idle" === k.get("state") && !1 === k.get("autostart"))
                        if (!w.primed() && y.OS.android) {
                            var e = w.getTestElement(),
                                i = m.getMute();
                            Promise.resolve().then(function() { return Xe(e, { muted: i }) }).then(function() { "idle" === k.get("state") && H.preloadVideo() }).catch(dt)
                        } else H.preloadVideo()
                }

                function U(e, t) { e.get("playOnViewable") && (t ? Y() : (y.OS.mobile || e.get("autoPause") && e.get("autoPause").viewability) && m.pause({ reason: "autostart" })) }

                function W() { var e = m._instreamAdapter; return !!e && e.getState() }

                function K() { var e = W(); return e || k.get("state") }

                function Q(e) { if (E.cancel(), M = !1, k.get("state") === o.La) return Promise.resolve(); var i = J(e); return k.set("playReason", i), "interaction" !== i && "external" !== i || k.set("playOnViewable", !1), W() ? (t.pauseAd(!1, e), Promise.resolve()) : (k.get("state") === o.Ka && (X(!0), m.setItemIndex(0)), !T && (T = !0, m.trigger(o.C, { playReason: i, startTime: e && e.startTime ? e.startTime : k.get("playlistItem").starttime }), T = !1, pt(window.event) && !w.primed() && w.prime(), S) ? (pt(window.event) && !R && k.get("mediaElement").load(), S = !1, C = null, Promise.resolve()) : H.playVideo(i).then(w.played)) }

                function J(e) { return e && e.reason ? e.reason : pt(window.event) ? "interaction" : "external" }

                function Y() {
                    var e = K();
                    if (e === o.Ma || e === o.Oa) {
                        E = v(N);
                        var t = k.get("advertising");
                        (function(e, t) {
                            var i = t.cancelable,
                                n = t.muted,
                                a = void 0 !== n && n,
                                o = t.allowMuted,
                                r = void 0 !== o && o,
                                s = t.timeout,
                                l = void 0 === s ? 1e4 : s,
                                c = e.getTestElement(),
                                u = a ? "muted" : "" + r;
                            tt[u] || (tt[u] = Xe(c, { muted: a }).catch(function(e) { if (!i.cancelled() && !1 === a && r) return Xe(c, { muted: a = !0 }); throw e }).then(function() { return a ? (tt[u] = null, $e) : Ge }).catch(function(e) { throw clearTimeout(p), tt[u] = null, e.reason = et, e }));
                            var d = tt[u].then(function(e) { if (clearTimeout(p), i.cancelled()) { var t = new Error("Autoplay test was cancelled"); throw t.reason = "cancelled", t } return e }),
                                p = void 0,
                                f = new Promise(function(e, t) {
                                    p = setTimeout(function() {
                                        tt[u] = null;
                                        var e = new Error("Autoplay test timed out");
                                        e.reason = "timeout", t(e)
                                    }, l)
                                });
                            return Promise.race([d, f])
                        })(w, { cancelable: E, muted: m.getMute(), allowMuted: !t || t.autoplayadsmuted }).then(function(e) { k.set("canAutoplay", e), e !== $e || m.getMute() || (k.set("autostartMuted", !0), oe(), k.once("change:autostartMuted", function(e) { e.off("change:viewable", U), m.trigger(o.L, { mute: k.getMute() }) })); var t = k.get("autoPause"); return t && t.viewability && k.set("playOnViewable", !0), Q({ reason: "autostart" }).catch(function() { m._instreamAdapter || k.set("autostartFailed", !0), C = null }) }).catch(function(e) {
                            if (k.set("canAutoplay", et), k.set("autostart", !1), !E.cancelled()) {
                                var t = e.reason,
                                    i = Object(b.B)(e);
                                m.trigger(o.h, { reason: t, code: i, error: e })
                            }
                        })
                    }
                }

                function X(e) {
                    if (E.cancel(), re.empty(), W()) {
                        var t = m._instreamAdapter;
                        t && (t.noResume = !0)
                    } else { C = null, !e && (M = !0), T && (S = !0), k.set("errorEvent", void 0), H.stopVideo() }
                }

                function G(e) {
                    C = null, E.cancel();
                    var i = J(e);
                    if (k.set("pauseReason", i), "interaction" !== i && "external" !== i || k.set("playOnViewable", !1), W()) t.pauseAd(!0, e);
                    else switch (k.get("state")) {
                        case o.La:
                            return;
                        case o.Pa:
                        case o.Ja:
                            H.pause();
                            break;
                        default:
                            T && (S = !0)
                    }
                }

                function $(e, t) { X(!0), m.setItemIndex(e), m.play(t) }

                function ee(e) { $(k.get("item") + 1, e) }

                function te() {
                    (function() { var e = k.get("state"); return e === o.Ma || e === o.Ka || e === o.La })() && (M ? M = !1 : (C = te, k.get("item") !== k.get("playlist").length - 1 ? m.nextItem() : k.get("repeat") ? ee({ reason: "repeat" }) : (y.OS.iOS && ae(!1), k.set("playOnViewable", !1), k.set("state", o.Ka), m.trigger(o.Ba, {}))))
                }

                function ie(e) { e = parseInt(e, 10) || 0, k.persistVideoSubtitleTrack(e), H.subtitles = e, m.trigger(o.k, { tracks: ne(), track: e }) }

                function ne() { return O.getCaptionsList() }

                function ae(e) { Object(r.r)(e) || (e = !k.get("fullscreen")), k.set("fullscreen", e), m._instreamAdapter && m._instreamAdapter._adModel && m._instreamAdapter._adModel.set("fullscreen", e) }

                function oe() { H.mute = k.getMute(), H.volume = k.get("volume") }
                oe(), H.on("all", I, m).on("subtitlesTracks", function(e) {
                    O.setSubtitlesTracks(e.tracks);
                    var t = O.getCurrentIndex();
                    t > 0 && ie(t)
                }, m).on(o.F, function() { Promise.resolve().then(te) }, m).on(o.G, m.triggerError, m), lt(k, H), k.on(o.w, m.triggerError, m), k.on("change:state", function(e, t, i) { W() || B.call(j, e, t, i) }, this), k.on("change:castState", function(e, t) { m.trigger(o.m, t) }), k.on("change:fullscreen", function(e, t) { m.trigger(o.y, { fullscreen: t }), t && e.set("playOnViewable", !1) }), k.on("change:volume", function(e, t) { m.trigger(o.U, { volume: t }) }), k.on("change:mute", function(e) { m.trigger(o.L, { mute: e.getMute() }) }), k.on("change:playbackRate", function(e, t) { m.trigger(o.Z, { playbackRate: t, position: e.get("position") }) }), k.on("change:scrubbing", function(e, t) { t ? G() : Q({ reason: "interaction" }) }), k.on("change:captionsList", function(e, t) { m.trigger(o.l, { tracks: t, track: k.get("captionsIndex") || 0 }) }), k.on("change:mediaModel", function(e, t) {
                    var i = this;
                    e.set("errorEvent", void 0), t.change("mediaState", function(t, i) { e.get("errorEvent") || e.set(o.Aa, function(e) { return e === o.Na || e === o.Qa ? o.Ja : e }(i)) }, this), t.change("duration", function(t, i) {
                        if (0 !== i) {
                            var n = e.get("minDvrWindow"),
                                a = Object(it.b)(i, n);
                            e.setStreamType(a)
                        }
                    }, this);
                    var n = e.get("item") + 1,
                        a = "autoplay" === (e.get("related") || {}).oncomplete,
                        r = e.get("playlist")[n];
                    if ((r || a) && R) {
                        t.on("change:position", function e(n, o) {
                            var s = r && !r.daiSetting,
                                l = t.get("duration");
                            s && o && l > 0 && o >= l - h.b ? (t.off("change:position", e, i), H.backgroundLoad(r)) : a && (r = k.get("nextUp"))
                        }, this)
                    }
                }), (O = new Z(k)).on("all", I, m), z.on("viewSetup", function(e) { Object(l.b)(j, e) }), this.playerReady = function() {
                    x.once(o.Ha, function() {
                        try {
                            k.change("visibility", V), L.off(), m.trigger(o.Ga, { setupTime: 0 }), k.change("playlist", function(e, t) {
                                if (t.length) {
                                    var i = { playlist: t },
                                        n = k.get("feedData");
                                    if (n) {
                                        var a = Object(r.j)({}, n);
                                        delete a.playlist, i.feedData = a
                                    }
                                    m.trigger(o.Da, i)
                                }
                            }), k.change("playlistItem", function(e, t) {
                                if (t) {
                                    var i = t.title,
                                        n = t.image;
                                    if ("mediaSession" in navigator && window.MediaMetadata && (i || n)) try { navigator.mediaSession.metadata = new window.MediaMetadata({ title: i, artist: window.location.hostname, artwork: [{ src: n || "" }] }) } catch (e) {}
                                    m.trigger(o.Ca, { index: k.get("item"), item: t })
                                }
                            }), L.flush(), L.destroy(), L = null, k.change("viewable", F), k.change("viewable", U), k.once("change:autostartFailed change:mute", function(e) { e.off("change:viewable", U) }), N(), k.on("change:itemReady", function(e, t) { t && re.flush() })
                        } catch (e) { m.triggerError(Object(b.A)(b.r, b.a, e)) }
                    }), x.init()
                }, this.preload = q, this.load = function(e, t) {
                    var i = m._instreamAdapter;
                    i && (i.noResume = !0), m.trigger("destroyPlugin", {}), X(!0), E.cancel(), E = v(N), A.cancel(), pt(window.event) && w.prime();
                    var n = void 0;
                    switch (void 0 === e ? "undefined" : ct(e)) {
                        case "string":
                            k.attributes.item = 0, k.attributes.itemReady = !1, A = v(function(e) { if (e) return m.updatePlaylist(Object(p.a)(e.playlist), e) }), n = function(e) {
                                var t = this;
                                return new Promise(function(i, n) {
                                    var a = new d.a;
                                    a.on(o.Da, function(e) { i(e) }), a.on(o.w, n, t), a.load(e)
                                })
                            }(e).then(A.async);
                            break;
                        case "object":
                            k.attributes.item = 0, n = m.updatePlaylist(Object(p.a)(e), t || {});
                            break;
                        case "number":
                            n = m.setItemIndex(e);
                            break;
                        default:
                            return
                    }
                    n.catch(function(e) { m.triggerError(Object(b.z)(e, b.c)) }), n.then(E.async).catch(dt)
                }, this.play = function(e) { return Q(e).catch(dt) }, this.pause = G, this.seek = function(e, t) { k.get("state") !== o.La && (H.position = e, k.get("scrubbing") || k.get("state") === o.Pa || ((t = t || {}).startTime = e, this.play(t))) }, this.stop = X, this.playlistItem = $, this.playlistNext = ee, this.playlistPrev = function(e) { $(k.get("item") - 1, e) }, this.setCurrentCaptions = ie, this.setCurrentQuality = function(e) { H.quality = e }, this.setFullscreen = ae, this.getCurrentQuality = function() { return H.quality }, this.getQualityLevels = function() { return H.qualities }, this.setCurrentAudioTrack = function(e) { H.audioTrack = e }, this.getCurrentAudioTrack = function() { return H.audioTrack }, this.getAudioTracks = function() { return H.audioTracks }, this.getCurrentCaptions = function() { return O.getCurrentIndex() }, this.getCaptionsList = ne, this.getVisualQuality = function() { var e = this._model.get("mediaModel"); return e ? e.get(o.T) : null }, this.getConfig = function() { return this._model ? this._model.getConfiguration() : void 0 }, this.getState = K, this.next = dt, this.nextItem = function() { ee({ reason: "playlist" }) }, this.setConfig = function(e) {
                    ! function(e, t) {
                        var i = e._model;
                        Object(r.G)(t) && c.forEach(function(n) {
                            var a = t[n];
                            if (!Object(r.y)(a)) switch (n) {
                                case "mute":
                                    e.setMute(a);
                                    break;
                                case "volume":
                                    e.setVolume(a);
                                    break;
                                case "autostart":
                                    ! function(e, t, i) { e.setAutoStart(i), "idle" === e.get("state") && !0 === i && t.play({ reason: "autostart" }) }(i, e, a);
                                    break;
                                default:
                                    i.set(n, a)
                            }
                        })
                    }(m, e)
                }, this.setItemIndex = function(e) { H.stopVideo(); var t = k.get("playlist").length; return (e = (parseInt(e, 10) || 0) % t) < 0 && (e += t), H.setActiveItem(e).catch(function(e) { e.code >= 151 && e.code <= 162 && (e = Object(b.z)(e, b.e)), j.triggerError(Object(b.A)(b.o, b.d, e)) }) }, this.detachMedia = function() { T && (S = !0), R ? H.backgroundActiveMedia() : H.attached = !1 }, this.attachMedia = function() { R ? H.restoreBackgroundMedia() : H.attached = !0, "function" == typeof C && C() }, this.routeEvents = function(e) { return H.routeEvents(e) }, this.forwardEvents = function() { return H.forwardEvents() }, this.playVideo = function(e) { return H.playVideo(e) }, this.stopVideo = function() { return H.stopVideo() }, this.castVideo = function(e, t) { return H.castVideo(e, t) }, this.stopCast = function() { return H.stopCast() }, this.backgroundActiveMedia = function() { return H.backgroundActiveMedia() }, this.restoreBackgroundMedia = function() { return H.restoreBackgroundMedia() }, this.preloadNextItem = function() { H.backgroundMedia && H.preloadVideo() }, this.isBeforeComplete = function() { return H.beforeComplete }, this.setVolume = function(e) { k.setVolume(e), oe() }, this.setMute = function(e) { k.setMute(e), oe() }, this.setPlaybackRate = function(e) { k.setPlaybackRate(e) }, this.getProvider = function() { return k.get("provider") }, this.getWidth = function() { return k.get("containerWidth") }, this.getHeight = function() { return k.get("containerHeight") }, this.getItemQoe = function() { return k._qoeItem }, this.addButton = function(e, t, i, n, a) {
                    var o = k.get("customButtons") || [],
                        r = !1,
                        s = { img: e, tooltip: t, callback: i, id: n, btnClass: a };
                    o = o.reduce(function(e, t) { return t.id === n ? (r = !0, e.push(s)) : e.push(t), e }, []), r || o.unshift(s), k.set("customButtons", o)
                }, this.removeButton = function(e) {
                    var t = k.get("customButtons") || [];
                    t = t.filter(function(t) { return t.id !== e }), k.set("customButtons", t)
                }, this.resize = x.resize, this.getSafeRegion = x.getSafeRegion, this.setCaptions = x.setCaptions, this.checkBeforePlay = function() { return T }, this.setControls = function(e) { Object(r.r)(e) || (e = !k.get("controls")), k.set("controls", e), H.controls = e }, this.setCues = function(e) { k.set("cues", e) }, this.updatePlaylist = function(e, t) {
                    try {
                        var i = Object(p.b)(e, k, t);
                        Object(p.e)(i), k.set("feedData", t), k.set("playlist", i)
                    } catch (e) { return Promise.reject(e) }
                    return this.setItemIndex(k.get("item"))
                }, this.setPlaylistItem = function(e, t) {
                    (t = Object(p.d)(k, new f.a(t), t.feedData || {})) && (k.get("playlist")[e] = t, e === k.get("item") && "idle" === k.get("state") && this.setItemIndex(e))
                }, this.playerDestroy = function() { this.off(), this.stop(), Object(l.b)(this, this.originalContainer), x && x.destroy(), k && k.destroy(), re && re.destroy(), O && O.destroy(), H && H.destroy(), this.instreamDestroy() }, this.isBeforePlay = this.checkBeforePlay, this.createInstream = function() { return this.instreamDestroy(), this._instreamAdapter = new D(this, k, x, w), this._instreamAdapter }, this.skipAd = function() { this._instreamAdapter && this._instreamAdapter.skipAd() }, this.instreamDestroy = function() { m._instreamAdapter && (m._instreamAdapter.destroy(), m._instreamAdapter = null) };
                var re = new u.a(this, ["play", "pause", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setFullscreen"], function() { return !j._model.get("itemReady") || L });
                re.queue.push.apply(re.queue, a), x.setup()
            },
            get: function(e) { if (e in x.a) { var t = this._model.get("mediaModel"); return t ? t.get(e) : x.a[e] } return this._model.get(e) },
            getContainer: function() { return this.currentContainer || this.originalContainer },
            getMute: function() { return this._model.getMute() },
            triggerError: function(e) {
                var t = this._model;
                e.message = t.get("localization").errors[e.key], delete e.key, t.set("errorEvent", e), t.set("state", o.La), t.once("change:state", function() { this.set("errorEvent", void 0) }, t), this.trigger(o.w, e)
            }
        });
        var ft = ut,
            ht = "afs_ads";
        var wt = function(e) {
                var t = !1,
                    i = function() { var e = document.createElement("div"); return e.className = ht, e.innerHTML = "&nbsp;", e.style.width = "1px", e.style.height = "1px", e.style.position = "absolute", e.style.background = "transparent", e }();
                return e.element().appendChild(i), {
                    onReady: function() {
                        if (t) return !0;
                        document.body.contains(e.element()) && (null !== i.offsetParent && i.className === ht && "" !== i.innerHTML && 0 !== i.clientHeight || (t = !0)), t && this.trigger("adBlock")
                    },
                    getAdBlock: function() { return t }
                }
            },
            gt = i(76),
            jt = i(32),
            vt = i(80),
            mt = ft.prototype.setup;
        ft.prototype.setup = function(e, t) {
            var r = this,
                s = mt.apply(this, arguments),
                l = this._model,
                c = this._view,
                u = wt(c),
                d = l.get("advertising");
            e.analytics && (e.sdkplatform = e.sdkplatform || e.analytics.sdkplatform), l.once("change:visibility", function() { u.onReady.call(r) });
            var h = this.playerReady;
            this.playerReady = function() {
                var e = this,
                    i = t.getPlugin("related");
                return i && (i.setup(l), i.on("nextUp", function(e) {
                    var t = null;
                    e === Object(e) && ((t = Object(f.a)(e)).sources = Object(p.c)(t, l)), l.set("nextUp", t)
                }), i.on("warning", function(t) { e.trigger("warning", t) })), h.call(this)
            }, this.next = function(e) {
                e = e || {};
                var i = t.getPlugin("related");
                g.call(this, i, "nextClick", e.feedShownId, function() { return i.next(e) })
            };
            var w = this.nextItem;

            function g(e, t, i, n) {
                if (e) {
                    var a = l.get("nextUp");
                    a && this.trigger(t, { mode: a.mode, ui: "nextup", feedShownId: i, target: a, itemsShown: [a], feedData: a.feedData }), "function" == typeof n && n()
                }
            }
            this.nextItem = function() {
                var e = t.getPlugin("related");
                g.call(this, e, "nextAutoAdvance"), w.call(this)
            };
            var j = this.updatePlaylist;
            this.updatePlaylist = function(e, i) {
                var a = this,
                    o = [];
                return !Object(gt.a)(e) || t.getPlugin("vr") || l.get("mobileSdk") || o.push(Object(gt.b)(t, l, this)), Object(n.b)(e) && o.push(Object(n.d)(l.get("edition"))), Object(vt.a)(e, "images", "image"), o.length ? (l.attributes.itemReady = !1, Promise.all(o).then(function() { return j.call(a, e, i) })) : j.call(this, e, i)
            }, t.getAdBlock = u.getAdBlock, this.once(o.Ca, function() {
                if (this.on(o.Ca, u.onReady, this), l.get("cast")) {
                    var e = l.get("cast") || {};
                    !e.customAppId && Object(n.b)(l.get("playlist")) || function() {
                            var e = this;
                            if (!window.chrome || !y.Browser.chrome) return;
                            i.e(15).then(function(t) {
                                var n = i(146).default,
                                    a = new n(e, l);
                                return e.castToggle = a.castToggle.bind(e._castController), e._castController = a, a.init()
                            }.bind(null, i)).catch(Object(a.c)(301161)).catch(v)
                        }.apply(this),
                        function() {
                            var e = this;
                            if (!window.WebKitPlaybackTargetAvailabilityEvent || l.get("playlist").some(function(e) { return !Object(jt.b)(e.sources[0]) })) return void m();
                            i.e(14).then(function(t) {
                                var n = i(150).default;
                                e._airplayController = new n(e, l), e.castToggle = e._airplayController.airplayToggle.bind(e._airplayController)
                            }.bind(null, i)).catch(Object(a.c)(301162)).catch(v)
                        }.apply(this)
                } else m()
            }, this);
            var v = function(e) { r.trigger(o.Ta, e) };

            function m() {
                var e = l.getVideo();
                e && e.video && (e.video.webkitWirelessVideoPlaybackDisabled = !0)
            }
            return l.on("change:flashBlocked", function(e, t) { if (t) { var i = void 0;!!e.get("flashThrottle") ? i = { message: "Click to run Flash" } : (i = new b.s(b.n, 210002), this.trigger(o.w, i)), e.set("errorEvent", i) } else e.set("errorEvent", void 0) }, this), d && d.outstream && function(e, t) {
                var i = e._model,
                    n = e._view,
                    a = !1,
                    r = t.height,
                    s = e.getHeight;
                e.getHeight = function() { var e = i.get("aspectratio"); return e ? Math.round(i.get("containerWidth") * parseFloat(e) / 100) : r }, e.getSafeRegion = function(e) { return n.getSafeRegion(e) }, e.resize = function(e, t) { return n.resize(e, t) };
                var l = n.resize;
                n.resize = function(e, t) { return r = t, l.call(n, e, t) }, i.setAutoStart("viewable"), e.setMute(!0), e.setItemIndex = function() { i.setActiveItem(0) }, e.updatePlaylist = function() { return i.set("playlist", [{ sources: [{}] }]), i.attributes.itemReady = !0, this.setItemIndex(0), Promise.resolve() };
                var c = e.createInstream;
                e.createInstream = function() {
                    var t = c.call(this);
                    return t.noResume = !0, a = !1, t.on("state", function(t) {
                        var i = t.newstate;
                        i !== o.Na && i !== o.Pa || (e.getHeight = s, n.resize = l, a = !0)
                    }), t
                };
                var u = e.attachMedia;
                e.attachMedia = function() { return a ? (i.get("backgroundLoading") || this._programController.mediaPool.clean(), i.set("state", o.Ka), this._programController.trigger(o.F, {}), u.call(this)) : this.playerDestroy() }, e._programController.playVideo = function() { return Promise.resolve() }
            }(this, e), s
        };
        t.default = ft
    }, function(e, t, i) {
        "use strict";
        i.r(t);
        var n = {};
        i.d(n, "facebook", function() { return ft }), i.d(n, "twitter", function() { return ht }), i.d(n, "googleplus", function() { return wt }), i.d(n, "linkedin", function() { return gt }), i.d(n, "pinterest", function() { return jt }), i.d(n, "reddit", function() { return vt }), i.d(n, "tumblr", function() { return mt }), i.d(n, "email", function() { return bt }), i.d(n, "link", function() { return yt }), i.d(n, "embed", function() { return kt });
        var a = i(0),
            o = i(7),
            r = i(3),
            s = i(5),
            l = i(50),
            c = i(10),
            u = i(16),
            d = i(35),
            p = i(64),
            f = function(e, t, i, n) { var a = document.createElement("div"); return a.className = "jw-icon jw-icon-inline jw-button-color jw-reset " + e, a.setAttribute("role", "button"), a.setAttribute("tabindex", "0"), i && a.setAttribute("aria-label", i), a.style.display = "none", t && new d.a(a).on("click tap enter", function(e) { t(e) }), a.addEventListener("mousedown", function(e) { e.preventDefault() }), n && Array.prototype.forEach.call(n, function(e) { "string" == typeof e ? a.appendChild(Object(p.a)(e)) : a.appendChild(e) }), { element: function() { return a }, toggle: function(e) { e ? this.show() : this.hide() }, show: function() { a.style.display = "" }, hide: function() { a.style.display = "none" } } },
            h = i(61),
            w = i(23),
            g = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
            }();
        var j = {};
        var v = function() {
                function e(t, i, n, a, o) {
                    ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e);
                    var r = document.createElement("div");
                    r.className = "jw-icon jw-icon-inline jw-button-color jw-reset " + (o || ""), r.setAttribute("button", a), r.setAttribute("role", "button"), r.setAttribute("tabindex", "0"), i && r.setAttribute("aria-label", i);
                    var s = void 0;
                    t && "<svg" === t.substring(0, 4) ? s = function(e) {
                        if (!j[e]) {
                            var t = Object.keys(j);
                            t.length > 10 && delete j[t[0]];
                            var i = Object(p.a)(e);
                            j[e] = i
                        }
                        return j[e].cloneNode(!0)
                    }(t) : ((s = document.createElement("div")).className = "jw-icon jw-button-image jw-button-color jw-reset", t && Object(w.d)(s, { backgroundImage: "url(" + t + ")" })), r.appendChild(s), new d.a(r).on("click tap enter", n, this), r.addEventListener("mousedown", function(e) { e.preventDefault() }), this.id = a, this.buttonElement = r
                }
                return g(e, [{ key: "element", value: function() { return this.buttonElement } }, { key: "toggle", value: function(e) { e ? this.show() : this.hide() } }, { key: "show", value: function() { this.buttonElement.style.display = "" } }, { key: "hide", value: function() { this.buttonElement.style.display = "none" } }]), e
            }(),
            m = i(11),
            b = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
            }();
        var y = function(e) {
                var t = Object(c.c)(e),
                    i = window.pageXOffset;
                return i && o.OS.android && document.body.parentElement.getBoundingClientRect().left >= 0 && (t.left -= i, t.right -= i), t
            },
            k = function() {
                function e(t, i) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), Object(a.j)(this, s.a), this.className = t + " jw-background-color jw-reset", this.orientation = i }
                return b(e, [{ key: "setup", value: function() { this.el = Object(c.e)(function() { return '<div class="' + (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") + " " + (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "") + ' jw-reset" aria-hidden="true"><div class="jw-slider-container jw-reset"><div class="jw-rail jw-reset"></div><div class="jw-buffer jw-reset"></div><div class="jw-progress jw-reset"></div><div class="jw-knob jw-reset"></div></div></div>' }(this.className, "jw-slider-" + this.orientation)), this.elementRail = this.el.getElementsByClassName("jw-slider-container")[0], this.elementBuffer = this.el.getElementsByClassName("jw-buffer")[0], this.elementProgress = this.el.getElementsByClassName("jw-progress")[0], this.elementThumb = this.el.getElementsByClassName("jw-knob")[0], this.ui = new d.a(this.element(), { preventScrolling: !0 }).on("dragStart", this.dragStart, this).on("drag", this.dragMove, this).on("dragEnd", this.dragEnd, this).on("click tap", this.tap, this) } }, { key: "dragStart", value: function() { this.trigger("dragStart"), this.railBounds = y(this.elementRail) } }, { key: "dragEnd", value: function(e) { this.dragMove(e), this.trigger("dragEnd") } }, {
                    key: "dragMove",
                    value: function(e) {
                        var t = this.railBounds = this.railBounds ? this.railBounds : y(this.elementRail),
                            i = void 0,
                            n = void 0;
                        return n = "horizontal" === this.orientation ? (i = e.pageX) < t.left ? 0 : i > t.right ? 100 : 100 * Object(l.a)((i - t.left) / t.width, 0, 1) : (i = e.pageY) >= t.bottom ? 0 : i <= t.top ? 100 : 100 * Object(l.a)((t.height - (i - t.top)) / t.height, 0, 1), this.render(n), this.update(n), !1
                    }
                }, { key: "tap", value: function(e) { this.railBounds = y(this.elementRail), this.dragMove(e) } }, { key: "limit", value: function(e) { return e } }, { key: "update", value: function(e) { this.trigger("update", { percentage: e }) } }, { key: "render", value: function(e) { e = Math.max(0, Math.min(e, 100)), "horizontal" === this.orientation ? (this.elementThumb.style.left = e + "%", this.elementProgress.style.width = e + "%") : (this.elementThumb.style.bottom = e + "%", this.elementProgress.style.height = e + "%") } }, { key: "updateBuffer", value: function(e) { this.elementBuffer.style.width = e + "%" } }, { key: "element", value: function() { return this.el } }]), e
            }(),
            x = function(e, t) { e && t && (e.setAttribute("aria-label", t), e.setAttribute("role", "button"), e.setAttribute("tabindex", "0")) },
            O = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
            }();
        var T = function() {
                function e(t, i, n, o) {
                    var r = this;
                    ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), Object(a.j)(this, s.a), this.el = document.createElement("div");
                    var l = "jw-icon jw-icon-tooltip " + t + " jw-button-color jw-reset";
                    n || (l += " jw-hidden"), x(this.el, i), this.el.className = l, this.container = document.createElement("div"), this.container.className = "jw-overlay jw-reset", this.openClass = "jw-open", this.componentType = "tooltip", this.el.appendChild(this.container), o && o.length > 0 && Array.prototype.forEach.call(o, function(e) { "string" == typeof e ? r.el.appendChild(Object(p.a)(e)) : r.el.appendChild(e) })
                }
                return O(e, [{ key: "addContent", value: function(e) { this.content && this.removeContent(), this.content = e, this.container.appendChild(e) } }, { key: "removeContent", value: function() { this.content && (this.container.removeChild(this.content), this.content = null) } }, { key: "hasContent", value: function() { return !!this.content } }, { key: "element", value: function() { return this.el } }, { key: "openTooltip", value: function(e) { this.trigger("open-" + this.componentType, e, { isOpen: !0 }), this.isOpen = !0, Object(c.p)(this.el, this.openClass, this.isOpen) } }, { key: "closeTooltip", value: function(e) { this.trigger("close-" + this.componentType, e, { isOpen: !1 }), this.isOpen = !1, Object(c.p)(this.el, this.openClass, this.isOpen) } }, { key: "toggleOpenState", value: function(e) { this.isOpen ? this.closeTooltip(e) : this.openTooltip(e) } }]), e
            }(),
            C = i(27),
            _ = i(62),
            M = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
            }();
        var S = function() {
                function e(t, i) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.time = t, this.text = i, this.el = document.createElement("div"), this.el.className = "jw-cue jw-reset" }
                return M(e, [{
                    key: "align",
                    value: function(e) {
                        if ("%" === this.time.toString().slice(-1)) this.pct = this.time;
                        else {
                            var t = this.time / e * 100;
                            this.pct = t + "%"
                        }
                        this.el.style.left = this.pct
                    }
                }]), e
            }(),
            E = {
                loadChapters: function(e) { Object(C.a)(e, this.chaptersLoaded.bind(this), this.chaptersFailed, { plainText: !0 }) },
                chaptersLoaded: function(e) {
                    var t = this,
                        i = Object(_.a)(e.responseText);
                    Array.isArray(i) && (i.forEach(function(e) { return t.addCue(e) }), this.drawCues())
                },
                chaptersFailed: function() {},
                addCue: function(e) { this.cues.push(new S(e.begin, e.text)) },
                drawCues: function() {
                    var e = this,
                        t = this._model.get("duration");
                    !t || t <= 0 || this.cues.forEach(function(i) { i.align(t), i.el.addEventListener("mouseover", function() { e.activeCue = i }), i.el.addEventListener("mouseout", function() { e.activeCue = null }), e.elementRail.appendChild(i.el) })
                },
                resetChapters: function() { this.cues.forEach(function(e) { e.el.parentNode && e.el.parentNode.removeChild(e.el) }), this.cues = [] }
            };
        var A = {
                loadThumbnails: function(e) { e && (this.vttPath = e.split("?")[0].split("/").slice(0, -1).join("/"), this.individualImage = null, Object(C.a)(e, this.thumbnailsLoaded.bind(this), this.thumbnailsFailed.bind(this), { plainText: !0 })) },
                thumbnailsLoaded: function(e) {
                    var t = Object(_.a)(e.responseText);
                    Array.isArray(t) && (t.forEach(function(e) { this.thumbnails.push(new function(e) { this.begin = e.begin, this.end = e.end, this.img = e.text }(e)) }, this), this.drawCues())
                },
                thumbnailsFailed: function() {},
                chooseThumbnail: function(e) {
                    var t = Object(a.H)(this.thumbnails, { end: e }, Object(a.E)("end"));
                    t >= this.thumbnails.length && (t = this.thumbnails.length - 1);
                    var i = this.thumbnails[t].img;
                    return i.indexOf("://") < 0 && (i = this.vttPath ? this.vttPath + "/" + i : i), i
                },
                loadThumbnail: function(e) {
                    var t = this.chooseThumbnail(e),
                        i = { margin: "0 auto", backgroundPosition: "0 0" };
                    if (t.indexOf("#xywh") > 0) try {
                        var n = /(.+)#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(t);
                        t = n[1], i.backgroundPosition = -1 * n[2] + "px " + -1 * n[3] + "px", i.width = n[4], this.timeTip.setWidth(+i.width), i.height = n[5]
                    } catch (e) { return } else this.individualImage || (this.individualImage = new Image, this.individualImage.onload = Object(a.c)(function() { this.individualImage.onload = null, this.timeTip.image({ width: this.individualImage.width, height: this.individualImage.height }), this.timeTip.setWidth(this.individualImage.width) }, this), this.individualImage.src = t);
                    return i.backgroundImage = 'url("' + t + '")', i
                },
                showThumbnail: function(e) { this._model.get("containerWidth") <= 420 || this.thumbnails.length < 1 || this.timeTip.image(this.loadThumbnail(e)) },
                resetThumbnails: function() { this.timeTip.image({ backgroundImage: "", width: 0, height: 0 }), this.thumbnails = [] }
            },
            L = function e(t, i, n) { null === t && (t = Function.prototype); var a = Object.getOwnPropertyDescriptor(t, i); if (void 0 === a) { var o = Object.getPrototypeOf(t); return null === o ? void 0 : e(o, i, n) } if ("value" in a) return a.value; var r = a.get; return void 0 !== r ? r.call(n) : void 0 },
            P = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
            }();

        function I(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function B(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function R(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var z = function(e) {
            function t() { return I(this, t), B(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)) }
            return R(t, T), P(t, [{
                key: "setup",
                value: function() {
                    this.text = document.createElement("span"), this.text.className = "jw-text jw-reset", this.img = document.createElement("div"), this.img.className = "jw-time-thumb jw-reset", this.containerWidth = 0, this.textLength = 0, this.dragJustReleased = !1;
                    var e = document.createElement("div");
                    e.className = "jw-time-tip jw-reset", e.appendChild(this.img), e.appendChild(this.text), this.addContent(e)
                }
            }, { key: "image", value: function(e) { Object(w.d)(this.img, e) } }, { key: "update", value: function(e) { this.text.textContent = e } }, { key: "getWidth", value: function() { return this.containerWidth || this.setWidth(), this.containerWidth } }, { key: "setWidth", value: function(e) { e ? this.containerWidth = e + 16 : this.container && (this.containerWidth = Object(c.c)(this.container).width + 16) } }, { key: "resetWidth", value: function() { this.containerWidth = 0 } }]), t
        }();
        var H = function(e) {
            function t(e, i) { I(this, t); var n = B(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "jw-slider-time", "horizontal")); return n._model = e, n._api = i, n.timeTip = new z("jw-tooltip-time", null, !0), n.timeTip.setup(), n.cues = [], n.seekThrottled = Object(a.I)(n.performSeek, 400), n.mobileHoverDistance = 5, n.setup(), n }
            return R(t, k), P(t, [{
                key: "setup",
                value: function() {
                    var e = this;
                    L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setup", this).apply(this, arguments), this._model.on("change:duration", this.onDuration, this).on("change:cues", this.addCues, this).on("seeked", function() { e._model.get("scrubbing") || e.updateAriaText() }).change("playlistItem", this.onPlaylistItem, this).change("position", this.onPosition, this).change("buffer", this.onBuffer, this).change("streamType", this.onStreamType, this), Object(c.n)(this.el, "tabindex", "0"), Object(c.n)(this.el, "role", "slider"), Object(c.n)(this.el, "aria-label", this._model.get("localization").slider), this.el.removeAttribute("aria-hidden"), this.elementRail.appendChild(this.timeTip.element()), this.ui = (this.ui || new d.a(this.el)).on("move", this.showTimeTooltip, this).on("dragEnd out", this.hideTimeTooltip, this).on("click", function() { return e.el.focus() }), this.el.addEventListener("focus", function() { return e.updateAriaText() })
                }
            }, { key: "update", value: function(e) { this.seekTo = e, this.seekThrottled(), L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "update", this).apply(this, arguments) } }, { key: "dragStart", value: function() { this._model.set("scrubbing", !0), L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "dragStart", this).apply(this, arguments) } }, { key: "dragEnd", value: function() { L(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "dragEnd", this).apply(this, arguments), this._model.set("scrubbing", !1) } }, { key: "onBuffer", value: function(e, t) { this.updateBuffer(t) } }, { key: "onPosition", value: function(e, t) { this.updateTime(t, e.get("duration")) } }, { key: "onDuration", value: function(e, t) { this.updateTime(e.get("position"), t), Object(c.n)(this.el, "aria-valuemin", 0), Object(c.n)(this.el, "aria-valuemax", t), this.drawCues() } }, { key: "onStreamType", value: function(e, t) { this.streamType = t } }, {
                key: "updateTime",
                value: function(e, t) {
                    var i = 0;
                    if (t)
                        if ("DVR" === this.streamType) {
                            var n = this._model.get("dvrSeekLimit"),
                                a = t + n;
                            i = (a - (e + n)) / a * 100
                        } else "VOD" !== this.streamType && this.streamType || (i = e / t * 100);
                    this.render(i)
                }
            }, {
                key: "onPlaylistItem",
                value: function(e, t) {
                    if (t) {
                        this.reset(), this.addCues(e, e.get("cues"));
                        var i = t.tracks;
                        Object(a.i)(i, function(e) { e && e.kind && "thumbnails" === e.kind.toLowerCase() ? this.loadThumbnails(e.file) : e && e.kind && "chapters" === e.kind.toLowerCase() && this.loadChapters(e.file) }, this)
                    }
                }
            }, {
                key: "performSeek",
                value: function() {
                    var e = this.seekTo,
                        t = this._model.get("duration"),
                        i = void 0;
                    if (0 === t) this._api.play({ reason: "interaction" });
                    else if ("DVR" === this.streamType) {
                        var n = this._model.get("seekRange"),
                            a = this._model.get("dvrSeekLimit");
                        i = n.start + (-t - a) * e / 100, this._api.seek(i, { reason: "interaction" })
                    } else i = e / 100 * t, this._api.seek(Math.min(i, t - .25), { reason: "interaction" })
                }
            }, {
                key: "showTimeTooltip",
                value: function(e) {
                    var t = this,
                        i = this._model.get("duration");
                    if (0 !== i) {
                        var n = this._model.get("containerWidth"),
                            a = Object(c.c)(this.elementRail),
                            o = e.pageX ? e.pageX - a.left : e.x,
                            r = (o = Object(l.a)(o, 0, a.width)) / a.width,
                            s = i * r;
                        if (i < 0) s = (i += this._model.get("dvrSeekLimit")) - (s = i * r);
                        var u = void 0;
                        if ("touch" === e.pointerType && (this.activeCue = this.cues.reduce(function(e, i) { return Math.abs(o - parseInt(i.pct) / 100 * a.width) < t.mobileHoverDistance ? i : e }, void 0)), this.activeCue) u = this.activeCue.text;
                        else { u = Object(m.timeFormat)(s, !0), i < 0 && s > -1 && (u = "Live") }
                        var d = this.timeTip;
                        d.update(u), this.textLength !== u.length && (this.textLength = u.length, d.resetWidth()), this.showThumbnail(s), Object(c.a)(d.el, "jw-open");
                        var p = d.getWidth(),
                            f = a.width / 100,
                            h = n - a.width,
                            g = 0;
                        p > h && (g = (p - h) / (200 * f));
                        var j = 100 * Math.min(1 - g, Math.max(g, r)).toFixed(3);
                        Object(w.d)(d.el, { left: j + "%" })
                    }
                }
            }, { key: "hideTimeTooltip", value: function() { Object(c.l)(this.timeTip.el, "jw-open") } }, {
                key: "addCues",
                value: function(e, t) {
                    var i = this;
                    this.resetChapters(), t && t.length && (t.forEach(function(e) { i.addCue(e) }), this.drawCues())
                }
            }, {
                key: "updateAriaText",
                value: function() {
                    var e = this._model.get("position"),
                        t = this._model.get("duration"),
                        i = void 0;
                    i = "DVR" === this.streamType ? Object(m.timeFormat)(e) : Object(m.timeFormat)(e) + " of " + Object(m.timeFormat)(t), Object(c.n)(this.el, "aria-valuetext", i)
                }
            }, { key: "reset", value: function() { this.resetThumbnails(), this.timeTip.resetWidth(), this.textLength = 0 } }]), t
        }();
        Object(a.j)(H.prototype, E, A);
        var V = H,
            N = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
            }();
        var F = function(e) {
            function t(e, i, n, a) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var o = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i, n, !0, a)); return o._model = e, o.volumeSlider = new k("jw-slider-volume jw-volume-tip", "vertical"), o.volumeSlider.setup(), o.volumeSlider.element().classList.remove("jw-background-color"), Object(c.n)(o.volumeSlider.element(), "aria-label", o._model.get("localization").volumeSlider), o.addContent(o.volumeSlider.element()), o.volumeSlider.on("update", function(e) { this.trigger("update", e), this.el.focus() }, o), o.ui = new d.a(o.el, { directSelect: !0 }).on("click enter", o.toggleValue, o).on("tap", o.toggleOpenState, o).on("over focus", o.openTooltip, o).on("out blur", o.closeTooltip, o), o._model.on("change:volume", o.onVolume, o), o }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, T), N(t, [{ key: "toggleValue", value: function() { this.trigger("toggleValue") } }]), t
        }();

        function D(e, t, i, n, a) {
            var o = document.createElement("div");
            o.className = "jw-reset jw-tooltip jw-tooltip-" + t;
            var r = document.createElement("div");
            r.className = "jw-text", r.textContent = i, o.appendChild(r), e.appendChild(o);
            var s = { open: function() { s.touchEvent || (o.setAttribute("aria-expanded", "true"), Object(c.a)(o, "jw-open"), n && n()) }, close: function() { s.touchEvent || (o.setAttribute("aria-expanded", "false"), Object(c.l)(o, "jw-open"), a && a()) }, setText: function(e) { o.querySelector(".jw-text").textContent = e } };
            return e.addEventListener("mouseover", s.open), e.addEventListener("focus", s.open), e.addEventListener("blur", s.close), e.addEventListener("mouseout", s.close), e.addEventListener("touchstart", function() { s.touchEvent = !0 }, { passive: !0 }), s
        }
        var q = i(65),
            U = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
            }();

        function W(e, t) { var i = document.createElement("div"); return i.className = "jw-icon jw-icon-inline jw-text jw-reset " + e, t && Object(c.n)(i, "role", t), i }

        function Z(e) { var t = document.createElement("div"); return t.className = "jw-reset " + e, t }

        function K(e, t) { return e.filter(function(e) { return !t.some(function(t) { return t.id + t.btnClass === e.id + e.btnClass && e.callback === t.callback }) }) }
        var Q = function(e, t) { t.forEach(function(t) { t.element && (t = t.element()), e.appendChild(t) }) },
            J = function() {
                function e(t, i) {
                    var n = this;
                    ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), Object(a.j)(this, s.a), this._api = t, this._model = i, this._isMobile = o.OS.mobile;
                    var l = i.get("localization"),
                        u = new V(i, t),
                        p = void 0,
                        w = void 0,
                        g = "",
                        j = l.volume;
                    if (!(i.get("sdkplatform") || o.OS.iOS && o.OS.version.major < 10)) {
                        var v = Object(h.b)("volume-0,volume-100");
                        w = f("jw-icon-volume", function() { t.setMute() }, j, v)
                    }
                    if (!this._isMobile) {
                        var m = (p = new F(i, "jw-icon-volume", j, Object(h.b)("volume-0,volume-50,volume-100"))).element();
                        Object(c.n)(m, "aria-valuemin", 0), Object(c.n)(m, "aria-valuemax", 100), Object(c.n)(m, "role", "slider")
                    }
                    var b = f("jw-icon-next", function() { t.next({ feedShownId: g, reason: "interaction" }) }, l.next, Object(h.b)("next")),
                        y = f("jw-icon-settings jw-settings-submenu-button", function(e) { n.trigger("settingsInteraction", "quality", !0, e) }, l.settings, Object(h.b)("settings"));
                    Object(c.n)(y.element(), "aria-haspopup", "true");
                    var k = f("jw-icon-cc jw-settings-submenu-button", function(e) { n.trigger("settingsInteraction", "captions", !1, e) }, l.cc, Object(h.b)("cc-off,cc-on"));
                    Object(c.n)(k.element(), "aria-haspopup", "true");
                    var O = f("jw-text-live", function() { n.goToLiveEdge() }, l.liveBroadcast);
                    O.element().textContent = l.liveBroadcast;
                    var T = this.elements = {
                            alt: function(e, t) { var i = document.createElement("span"); return i.className = "jw-text jw-reset " + e, t && Object(c.n)(i, "role", t), i }("jw-text-alt", "status"),
                            play: f("jw-icon-playback", function() { t.playToggle({ reason: "interaction" }) }, l.play, Object(h.b)("play,pause,stop")),
                            rewind: f("jw-icon-rewind", function() { n.rewind() }, l.rewind, Object(h.b)("rewind")),
                            live: O,
                            next: b,
                            elapsed: W("jw-text-elapsed", "timer"),
                            countdown: W("jw-text-countdown", "timer"),
                            time: u,
                            duration: W("jw-text-duration", "timer"),
                            mute: w,
                            volumetooltip: p,
                            cast: function(e, t) {
                                if (o.Browser.safari) { var i = f("jw-icon-airplay jw-off", e, t.airplay, Object(h.b)("airplay-off,airplay-on")); return D(i.element(), "airplay", t.airplay), i }
                                if (o.Browser.chrome && !o.OS.iOS) {
                                    var n = document.createElement("google-cast-launcher");
                                    Object(c.n)(n, "type", "button"), Object(c.n)(n, "tabindex", "-1"), n.className += " jw-reset";
                                    var a = document.createElement("div");
                                    return a.className = "jw-reset jw-icon jw-icon-inline jw-icon-cast jw-button-color", a.style.display = "none", a.style.cursor = "pointer", a.appendChild(n), x(a, t.cast), D(a, "chromecast", t.cast), { element: function() { return a }, toggle: function(e) { e ? this.show() : this.hide() }, show: function() { a.style.display = "" }, hide: function() { a.style.display = "none" }, button: n }
                                }
                            }(function() { t.castToggle() }, l),
                            fullscreen: f("jw-icon-fullscreen", function() { t.setFullscreen() }, l.fullscreen, Object(h.b)("fullscreen-off,fullscreen-on")),
                            spacer: Z("jw-spacer"),
                            buttonContainer: Z("jw-button-container"),
                            settingsButton: y,
                            captionsButton: k
                        },
                        C = D(k.element(), "captions", l.cc),
                        _ = function(e) {
                            var t = e.get("captionsList")[e.get("captionsIndex")],
                                i = l.cc;
                            t && "Off" !== t.label && (i = t.label), C.setText(i)
                        },
                        M = D(T.next.element(), "next", l.nextUp, function() {
                            var e = i.get("nextUp");
                            g = Object(q.b)(q.a), n.trigger("nextShown", { mode: e.mode, ui: "nextup", itemsShown: [e], feedData: e.feedData, reason: "hover", feedShownId: g })
                        }, function() { g = "" });
                    D(T.rewind.element(), "rewind", l.rewind), D(T.settingsButton.element(), "settings", l.settings), D(T.fullscreen.element(), "fullscreen", l.fullscreen);
                    var S = [T.play, T.rewind, T.next, T.volumetooltip, T.mute, T.alt, T.live, T.elapsed, T.countdown, T.duration, T.spacer, T.cast, T.captionsButton, T.settingsButton, T.fullscreen].filter(function(e) { return e }),
                        E = [T.time, T.buttonContainer].filter(function(e) { return e }),
                        A = this.menus = [T.volumetooltip].filter(function(e) { return e });
                    this.el = document.createElement("div"), this.el.className = "jw-controlbar jw-reset", Q(T.buttonContainer, S), Q(this.el, E);
                    var L = i.get("logo");
                    L && "control-bar" === L.position && this.addLogo(L), T.play.show(), T.fullscreen.show(), T.mute && T.mute.show(), i.change("volume", this.onVolume, this), i.change("mute", this.onMute, this), i.change("state", this.onState, this), i.change("duration", this.onDuration, this), i.change("position", this.onElapsed, this), i.change("fullscreen", this.onFullscreen, this), i.change("streamType", this.onStreamTypeChange, this), i.change("dvrLive", function(e, t) {
                        var i = l.liveBroadcast,
                            a = l.notLive,
                            o = n.elements.live.element(),
                            r = !1 === t;
                        Object(c.p)(o, "jw-dvr-live", r), Object(c.n)(o, "aria-label", r ? a : i), o.textContent = i
                    }, this), i.change("altText", this.setAltText, this), i.change("customButtons", this.updateButtons, this), i.on("change:captionsIndex", _, this), i.on("change:captionsList", _, this), i.change("nextUp", function(e, t) {
                        g = Object(q.b)(q.a);
                        var i = l.nextUp;
                        t && t.title && (i += ": " + t.title), M.setText(i), T.next.toggle(!!t)
                    }), i.change("audioMode", this.onAudioMode, this), T.cast && (i.change("castAvailable", this.onCastAvailable, this), i.change("castActive", this.onCastActive, this)), T.volumetooltip && (T.volumetooltip.on("update", function(e) {
                        var t = e.percentage;
                        this._api.setVolume(t)
                    }, this), T.volumetooltip.on("toggleValue", function() { this._api.setMute() }, this)), T.cast && T.cast.button && new d.a(T.cast.element()).on("click tap enter", function(e) { "click" !== e.type && T.cast.button.click(), this._model.set("castClicked", !0) }, this), new d.a(T.duration).on("click tap enter", function() {
                        if ("DVR" === this._model.get("streamType")) {
                            var e = this._model.get("position"),
                                t = this._model.get("dvrSeekLimit");
                            this._api.seek(Math.max(-t, e), { reason: "interaction" })
                        }
                    }, this), new d.a(this.el).on("click tap drag", function() { this.trigger(r.Sa) }, this), Object(a.i)(A, function(e) { e.on("open-tooltip", this.closeMenus, this) }, this)
                }
                return U(e, [{ key: "onVolume", value: function(e, t) { this.renderVolume(e.get("mute"), t) } }, { key: "onMute", value: function(e, t) { this.renderVolume(t, e.get("volume")) } }, {
                    key: "renderVolume",
                    value: function(e, t) {
                        var i = this.elements.mute,
                            n = this.elements.volumetooltip;
                        if (i && (Object(c.p)(i.element(), "jw-off", e), Object(c.p)(i.element(), "jw-full", !e)), n) {
                            var a = e ? 0 : t,
                                o = n.element();
                            n.volumeSlider.render(a), Object(c.p)(o, "jw-off", e), Object(c.p)(o, "jw-full", t >= 75 && !e), Object(c.n)(o, "aria-valuenow", a), Object(c.n)(o, "aria-valuetext", "Volume " + a + "%")
                        }
                    }
                }, { key: "onCastAvailable", value: function(e, t) { this.elements.cast.toggle(t) } }, { key: "onCastActive", value: function(e, t) { this.elements.fullscreen.toggle(!t), this.elements.cast.button && Object(c.p)(this.elements.cast.button, "jw-off", !t) } }, {
                    key: "onElapsed",
                    value: function(e, t) {
                        var i = void 0,
                            n = void 0,
                            a = e.get("duration");
                        if ("DVR" === e.get("streamType")) {
                            var o = Math.ceil(t),
                                r = this._model.get("dvrSeekLimit");
                            i = n = o >= -r ? "" : "-" + Object(m.timeFormat)(-(t + r)), e.set("dvrLive", o >= -r)
                        } else i = Object(m.timeFormat)(t), n = Object(m.timeFormat)(a - t);
                        this.elements.elapsed.textContent = i, this.elements.countdown.textContent = n
                    }
                }, { key: "onDuration", value: function(e, t) { this.elements.duration.textContent = Object(m.timeFormat)(Math.abs(t)) } }, { key: "onFullscreen", value: function(e, t) { Object(c.p)(this.elements.fullscreen.element(), "jw-off", t) } }, {
                    key: "onAudioMode",
                    value: function(e, t) {
                        var i = this.elements.time.element();
                        t ? this.elements.buttonContainer.insertBefore(i, this.elements.elapsed) : Object(c.j)(this.el, i)
                    }
                }, { key: "element", value: function() { return this.el } }, { key: "setAltText", value: function(e, t) { this.elements.alt.textContent = t } }, { key: "closeMenus", value: function(e) { Object(a.i)(this.menus, function(t) { e && e.target === t.el || t.closeTooltip(e) }) } }, {
                    key: "rewind",
                    value: function() {
                        var e = this._model.get("position"),
                            t = this._model.get("duration"),
                            i = e - 10,
                            n = 0;
                        "DVR" === this._model.get("streamType") && (n = t), this._api.seek(Math.max(i, n), { reason: "interaction" })
                    }
                }, {
                    key: "onState",
                    value: function(e, t) {
                        var i = e.get("localization"),
                            n = i.play;
                        t === r.Pa && (n = "LIVE" !== e.get("streamType") ? i.pause : i.stop), Object(c.n)(this.elements.play.element(), "aria-label", n)
                    }
                }, {
                    key: "onStreamTypeChange",
                    value: function(e, t) {
                        var i = "LIVE" === t,
                            n = "DVR" === t;
                        this.elements.rewind.toggle(!i), this.elements.live.toggle(i || n), Object(c.n)(this.elements.live.element(), "tabindex", i ? "-1" : "0"), this.elements.duration.style.display = n ? "none" : "", this.onDuration(e, e.get("duration")), this.onState(e, e.get("state"))
                    }
                }, {
                    key: "addLogo",
                    value: function(e) {
                        var t = this.elements.buttonContainer,
                            i = new v(e.file, this._model.get("localization").logo, function() { e.link && window.open(e.link, "_blank") }, "logo", "jw-logo-button");
                        e.link || Object(c.n)(i.element(), "tabindex", "-1"), t.insertBefore(i.element(), t.querySelector(".jw-spacer").nextSibling)
                    }
                }, {
                    key: "goToLiveEdge",
                    value: function() {
                        if ("DVR" === this._model.get("streamType")) {
                            var e = this._model.get("position"),
                                t = this._model.get("dvrSeekLimit");
                            this._api.seek(Math.max(-t, e), { reason: "interaction" })
                        }
                    }
                }, {
                    key: "updateButtons",
                    value: function(e, t, i) {
                        if (t) {
                            var n = this.elements.buttonContainer,
                                a = void 0,
                                o = void 0;
                            t !== i && i ? (a = K(t, i), o = K(i, t), this.removeButtons(n, o)) : a = t;
                            for (var r = a.length - 1; r >= 0; r--) {
                                var s = a[r],
                                    l = new v(s.img, s.tooltip, s.callback, s.id, s.btnClass);
                                s.tooltip && D(l.element(), s.id, s.tooltip);
                                var c = void 0;
                                "related" === l.id ? c = this.elements.settingsButton.element() : "share" === l.id ? c = n.querySelector('[button="related"]') || this.elements.settingsButton.element() : (c = this.elements.spacer.nextSibling) && "logo" === c.getAttribute("button") && (c = c.nextSibling), n.insertBefore(l.element(), c)
                            }
                        }
                    }
                }, {
                    key: "removeButtons",
                    value: function(e, t) {
                        for (var i = t.length; i--;) {
                            var n = e.querySelector('[button="' + t[i].id + '"]');
                            n && e.removeChild(n)
                        }
                    }
                }, {
                    key: "toggleCaptionsButtonState",
                    value: function(e) {
                        var t = this.elements.captionsButton;
                        t && Object(c.p)(t.element(), "jw-off", !e)
                    }
                }]), e
            }(),
            Y = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; return '<div class="jw-display-icon-container jw-display-icon-' + e + ' jw-reset"><div class="jw-icon jw-icon-' + e + ' jw-button-color jw-reset" role="button" tabindex="0" aria-label="' + (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "") + '"></div></div>' },
            X = function(e) { return '<div class="jw-display jw-reset"><div class="jw-display-container jw-reset"><div class="jw-display-controls jw-reset">' + Y("rewind", e.rewind) + Y("display", e.playback) + Y("next", e.next) + "</div></div></div>" },
            G = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
            }();
        var $ = function() {
                function e(t, i, n) {
                    ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.el = n, new d.a(this.el).on("click tap enter", function() {
                        var e = t.get("position"),
                            n = t.get("duration"),
                            a = e - 10,
                            o = 0;
                        "DVR" === t.get("streamType") && (o = n), i.seek(Math.max(a, o))
                    })
                }
                return G(e, [{ key: "element", value: function() { return this.el } }]), e
            }(),
            ee = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
            }();
        var te = function() {
                function e(t, i, n) {
                    var o = this;
                    ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), Object(a.j)(this, s.a);
                    var r = t.get("localization"),
                        l = n.getElementsByClassName("jw-icon-display")[0];
                    if (n.style.cursor = "pointer", this.icon = l, this.el = n, new d.a(this.el).on("click tap enter", function(e) { o.trigger(e.type) }), t.on("change:state", function(e, t) {
                            var i = void 0;
                            switch (t) {
                                case "buffering":
                                    i = r.buffer;
                                    break;
                                case "playing":
                                    i = r.pause;
                                    break;
                                case "idle":
                                case "paused":
                                    i = r.playback;
                                    break;
                                case "complete":
                                    i = r.replay;
                                    break;
                                default:
                                    i = ""
                            }
                            "" !== i ? l.setAttribute("aria-label", i) : l.removeAttribute("aria-label")
                        }), t.get("displayPlaybackLabel")) {
                        var u = this.icon.getElementsByClassName("jw-idle-icon-text")[0];
                        u || (u = Object(c.e)('<div class="jw-idle-icon-text"></div>'), Object(c.a)(this.icon, "jw-idle-label"), u.textContent = r.playback, this.icon.appendChild(u))
                    }
                }
                return ee(e, [{ key: "element", value: function() { return this.el } }]), e
            }(),
            ie = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
            }();
        var ne = function() {
                function e(t, i, n) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.ui = new d.a(n).on("click tap enter", function() { i.next({ reason: "interaction" }) }), t.change("nextUp", function(e, t) { n.style.visibility = t ? "" : "hidden" }), this.el = n }
                return ie(e, [{ key: "element", value: function() { return this.el } }]), e
            }(),
            ae = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
            }();
        var oe = function() {
            function e(t, i) {
                ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.el = Object(c.e)(X(t.get("localization")));
                var n = this.el.querySelector(".jw-display-controls"),
                    a = {};
                re("rewind", Object(h.b)("rewind"), $, n, a, t, i), re("display", Object(h.b)("play,pause,buffer,replay"), te, n, a, t, i), re("next", Object(h.b)("next"), ne, n, a, t, i), this.container = n, this.buttons = a
            }
            return ae(e, [{ key: "element", value: function() { return this.el } }]), e
        }();

        function re(e, t, i, n, a, o, r) {
            var s = n.querySelector(".jw-display-icon-" + e),
                l = n.querySelector(".jw-icon-" + e);
            t.forEach(function(e) { l.appendChild(e) }), a[e] = new i(o, r, s)
        }
        var se = i(2),
            le = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
            }();
        var ce = function() {
                function e(t, i, n) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), Object(a.j)(this, s.a), this._model = t, this._api = i, this._playerElement = n, this.localization = t.get("localization"), this.state = "tooltip", this.enabled = !1, this.shown = !1, this.feedShownId = "", this.reset() }
                return le(e, [{
                    key: "setup",
                    value: function(e) {
                        this.container = e.createElement("div"), this.container.className = "jw-nextup-container jw-reset";
                        var t = Object(c.e)(function() { return '<div class="jw-nextup jw-background-color jw-reset"><div class="jw-nextup-tooltip jw-reset"><div class="jw-nextup-thumbnail jw-reset"></div><div class="jw-nextup-body jw-reset"><div class="jw-nextup-header jw-reset">' + (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") + '</div><div class="jw-nextup-title jw-reset">' + (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "") + '</div><div class="jw-nextup-duration jw-reset">' + (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + '</div></div></div><button type="button" class="jw-icon jw-nextup-close jw-reset" aria-label="' + (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "") + '"></button></div>' }());
                        t.querySelector(".jw-nextup-close").appendChild(Object(h.a)("close")), this.addContent(t), this.closeButton = this.content.querySelector(".jw-nextup-close"), this.closeButton.setAttribute("aria-label", this.localization.close), this.tooltip = this.content.querySelector(".jw-nextup-tooltip");
                        var i = this._model,
                            n = i.player;
                        this.enabled = !1, i.on("change:nextUp", this.onNextUp, this), n.change("duration", this.onDuration, this), n.change("position", this.onElapsed, this), n.change("streamType", this.onStreamType, this), n.change("state", function(e, t) { "complete" === t && this.toggle(!1) }, this), new d.a(this.closeButton, { directSelect: !0 }).on("click tap enter", function() { this.nextUpSticky = !1, this.toggle(!1) }, this), new d.a(this.tooltip).on("click tap", this.click, this)
                    }
                }, { key: "loadThumbnail", value: function(e) { return this.nextUpImage = new Image, this.nextUpImage.onload = function() { this.nextUpImage.onload = null }.bind(this), this.nextUpImage.src = e, { backgroundImage: 'url("' + e + '")' } } }, {
                    key: "click",
                    value: function() {
                        var e = this.feedShownId;
                        this.reset(), this._api.next({ feedShownId: e, reason: "interaction" })
                    }
                }, {
                    key: "toggle",
                    value: function(e, t) {
                        if (this.enabled && (Object(c.p)(this.container, "jw-nextup-sticky", !!this.nextUpSticky), this.shown !== e)) {
                            this.shown = e, Object(c.p)(this.container, "jw-nextup-container-visible", e), Object(c.p)(this._playerElement, "jw-flag-nextup", e);
                            var i = this._model.get("nextUp");
                            e && i ? (this.feedShownId = Object(q.b)(q.a), this.trigger("nextShown", { mode: i.mode, ui: "nextup", itemsShown: [i], feedData: i.feedData, reason: t, feedShownId: this.feedShownId })) : this.feedShownId = ""
                        }
                    }
                }, {
                    key: "setNextUpItem",
                    value: function(e) {
                        var t = this;
                        setTimeout(function() {
                            if (t.thumbnail = t.content.querySelector(".jw-nextup-thumbnail"), Object(c.p)(t.content, "jw-nextup-thumbnail-visible", !!e.image), e.image) {
                                var i = t.loadThumbnail(e.image);
                                Object(w.d)(t.thumbnail, i)
                            }
                            t.header = t.content.querySelector(".jw-nextup-header"), t.header.innerText = t.localization.nextUp, t.title = t.content.querySelector(".jw-nextup-title");
                            var n = e.title;
                            t.title.innerText = n ? Object(c.e)(n).textContent : "";
                            var a = e.duration;
                            a && (t.duration = t.content.querySelector(".jw-nextup-duration"), t.duration.innerText = "number" == typeof a ? Object(m.timeFormat)(a) : a)
                        }, 500)
                    }
                }, { key: "onNextUp", value: function(e, t) { this.reset(), t || (t = { showNextUp: !1 }), this.enabled = !(!t.title && !t.image), this.enabled && (t.showNextUp || (this.nextUpSticky = !1, this.toggle(!1)), this.setNextUpItem(t)) } }, {
                    key: "onDuration",
                    value: function(e, t) {
                        if (t) {
                            var i = Object(se.f)(e.get("nextupoffset") || -10);
                            i < 0 && (i += t), this.offset = i
                        }
                    }
                }, {
                    key: "onElapsed",
                    value: function(e, t) {
                        var i = this.nextUpSticky;
                        if (this.enabled && !1 !== i) {
                            var n = t >= this.offset;
                            n && void 0 === i ? (this.nextUpSticky = n, this.toggle(n, "time")) : !n && i && this.reset()
                        }
                    }
                }, { key: "onStreamType", value: function(e, t) { "VOD" !== t && (this.nextUpSticky = !1, this.toggle(!1)) } }, { key: "element", value: function() { return this.container } }, { key: "addContent", value: function(e) { this.content && this.removeContent(), this.content = e, this.container.appendChild(e) } }, { key: "removeContent", value: function() { this.content && (this.container.removeChild(this.content), this.content = null) } }, { key: "reset", value: function() { this.nextUpSticky = void 0, this.toggle(!1) } }, { key: "destroy", value: function() { this.off(), this._model.off(null, null, this) } }]), e
            }(),
            ue = function(e, t) {
                var i = e.featured,
                    n = e.showLogo,
                    a = e.type;
                return e.logo = n ? '<span class="jw-rightclick-logo jw-reset"></span>' : "", '<li class="jw-reset jw-rightclick-item ' + (i ? "jw-featured" : "") + '">' + de[a](e, t) + "</li>"
            },
            de = {
                link: function(e) {
                    var t = e.link,
                        i = e.title,
                        n = e.logo;
                    return '<a href="' + (t || "") + '" class="jw-rightclick-link jw-reset" target="_blank">' + n + (i || "") + "</a>"
                },
                info: function(e, t) { return '<button type="button" class="jw-reset jw-rightclick-link jw-info-overlay-item">' + t.videoInfo + "</button>" },
                share: function(e, t) { return '<button type="button" class="jw-reset jw-rightclick-link jw-share-item">' + t.sharing.heading + "</button>" }
            },
            pe = i(31),
            fe = i(6),
            he = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
            }();

        function we(e) {
            var t = Object(c.e)(e),
                i = t.querySelector(".jw-rightclick-logo");
            return i && i.appendChild(Object(h.a)("jwplayer-logo")), t
        }
        var ge = function() {
                function e(t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.infoOverlay = t }
                return he(e, [{
                    key: "buildArray",
                    value: function() {
                        var e = pe.a.split("+")[0],
                            t = { items: [{ type: "info" }, { title: this.model.get("localization").poweredBy + ' <span class="jw-reset">JW Player ' + e + "</span>", type: "link", featured: !0, showLogo: !0, link: "https://jwplayer.com/learn-more" }] },
                            i = this.model.get("provider");
                        if (i && i.name.indexOf("flash") >= 0) {
                            var n = "Flash Version " + Object(fe.a)();
                            t.items.push({ title: n, type: "link", link: "http://www.adobe.com/software/flash/about/" })
                        }
                        return t
                    }
                }, {
                    key: "rightClick",
                    value: function(e) {
                        if (this.lazySetup(), this.mouseOverContext) return !1;
                        this.hideMenu(), this.showMenu(e), this.addHideMenuHandlers()
                    }
                }, {
                    key: "getOffset",
                    value: function(e) {
                        var t = Object(c.c)(this.playerElement),
                            i = e.pageX - t.left,
                            n = e.pageY - t.top;
                        return this.model.get("touchMode") && (n -= 100), { x: i, y: n }
                    }
                }, {
                    key: "showMenu",
                    value: function(e) {
                        var t = this,
                            i = this.getOffset(e);
                        return this.el.style.left = i.x + "px", this.el.style.top = i.y + "px", this.outCount = 0, Object(c.a)(this.playerElement, "jw-flag-rightclick-open"), Object(c.a)(this.el, "jw-open"), clearTimeout(this._menuTimeout), this._menuTimeout = setTimeout(function() { return t.hideMenu() }, 3e3), !1
                    }
                }, { key: "hideMenu", value: function(e) { e && this.el.contains(e.target) || (Object(c.l)(this.playerElement, "jw-flag-rightclick-open"), Object(c.l)(this.el, "jw-open")) } }, {
                    key: "lazySetup",
                    value: function() {
                        var e = this,
                            t = function(e, t) { var i = e.items; return '<div class="jw-rightclick jw-reset"><ul class="jw-rightclick-list jw-reset">' + (void 0 === i ? [] : i).map(function(e) { return ue(e, t) }).join("") + "</ul></div>" }(this.buildArray(), this.model.get("localization"));
                        if (this.el) {
                            if (this.html !== t) {
                                this.html = t;
                                var i = we(t);
                                Object(c.g)(this.el);
                                for (var n = i.childNodes.length; n--;) this.el.appendChild(i.firstChild)
                            }
                        } else this.html = t, this.el = we(this.html), this.layer.appendChild(this.el), this.hideMenuHandler = function(t) { return e.hideMenu(t) }, this.overHandler = function() { e.mouseOverContext = !0 }, this.outHandler = function(t) { e.mouseOverContext = !1, t.relatedTarget && !e.el.contains(t.relatedTarget) && ++e.outCount > 1 && e.hideMenu() }, this.infoOverlayHandler = function() { e.mouseOverContext = !1, e.hideMenu(), e.infoOverlay.open() }
                    }
                }, { key: "setup", value: function(e, t, i) { this.playerElement = t, this.model = e, this.mouseOverContext = !1, this.layer = i, this.ui = new d.a(t).on("longPress", this.rightClick, this) } }, { key: "addHideMenuHandlers", value: function() { this.removeHideMenuHandlers(), this.playerElement.addEventListener("touchstart", this.hideMenuHandler), document.addEventListener("touchstart", this.hideMenuHandler), o.OS.mobile || (this.playerElement.addEventListener("click", this.hideMenuHandler), document.addEventListener("click", this.hideMenuHandler), this.el.addEventListener("mouseover", this.overHandler), this.el.addEventListener("mouseout", this.outHandler)), this.el.querySelector(".jw-info-overlay-item").addEventListener("click", this.infoOverlayHandler) } }, { key: "removeHideMenuHandlers", value: function() { this.playerElement && this.playerElement.removeEventListener("click", this.hideMenuHandler), this.el && (this.el.querySelector(".jw-info-overlay-item").removeEventListener("click", this.infoOverlayHandler), this.el.removeEventListener("mouseover", this.overHandler), this.el.removeEventListener("mouseout", this.outHandler)), document.removeEventListener("click", this.hideMenuHandler), document.removeEventListener("touchstart", this.hideMenuHandler) } }, { key: "destroy", value: function() { clearTimeout(this._menuTimeout), this.removeHideMenuHandlers(), this.el && (this.hideMenu(), this.hideMenuHandler = null, this.el = null), this.playerElement && (this.playerElement.oncontextmenu = null, this.playerElement = null), this.model && (this.model = null), this.ui && (this.ui.destroy(), this.ui = null) } }]), e
            }(),
            je = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
            }(),
            ve = function e(t, i, n) { null === t && (t = Function.prototype); var a = Object.getOwnPropertyDescriptor(t, i); if (void 0 === a) { var o = Object.getPrototypeOf(t); return null === o ? void 0 : e(o, i, n) } if ("value" in a) return a.value; var r = a.get; return void 0 !== r ? r.call(n) : void 0 };
        var me = function(e) {
                function t() {
                    return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t),
                        function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, ge), je(t, [{
                    key: "buildArray",
                    value: function() {
                        var e = this.model,
                            i = ve(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "buildArray", this).call(this),
                            n = e.get("localization").abouttext,
                            a = i.items;
                        if (n) {
                            a[1].showLogo = !1;
                            var o = { title: n, type: "link", link: e.get("aboutlink") || a[1].link };
                            a.splice(1, 0, o)
                        }
                        return this.shareHandler && a.unshift({ type: "share" }), i
                    }
                }, {
                    key: "enableSharing",
                    value: function(e) {
                        var t = this;
                        this.shareHandler = function() { t.mouseOverContext = !1, t.hideMenu(), e() }
                    }
                }, {
                    key: "addHideMenuHandlers",
                    value: function() {
                        ve(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "addHideMenuHandlers", this).call(this);
                        var e = this.el.querySelector(".jw-share-item");
                        e && e.addEventListener("click", this.shareHandler)
                    }
                }, {
                    key: "removeHideMenuHandlers",
                    value: function() {
                        if (ve(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "removeHideMenuHandlers", this).call(this), this.el) {
                            var e = this.el.querySelector(".jw-share-item");
                            e && e.removeEventListener("click", this.shareHandler)
                        }
                    }
                }]), t
            }(),
            be = function() { return '<div class="jw-reset jw-settings-menu" role="menu" aria-expanded="false"><div class="jw-reset jw-settings-topbar" role="menubar"></div></div>' };

        function ye(e) {
            var t = document.getElementsByClassName("jw-icon-settings")[0];
            if (t) {
                var i = "Right" === e ? Object(c.i)(t) : Object(c.k)(t);
                i && i.focus()
            }
        }
        var ke = function(e) { Object.keys(e).forEach(function(t) { e[t].deactivate() }) },
            xe = function() { return '<div class="jw-reset jw-settings-submenu" role="menu" aria-expanded="false"></div>' };
        var Oe = function(e) { e.forEach(function(e) { e.deactivate() }) },
            Te = function(e) { return '<button type="button" class="jw-reset jw-settings-content-item" role="menuitemradio" aria-checked="false">' + e + "</button>" };

        function Ce(e, t, i) {
            var n = void 0,
                a = Object(c.e)(Te(t)),
                o = new d.a(a).on("click tap enter", function(e) { i(e) }),
                r = { activate: function() { Object(c.p)(a, "jw-settings-item-active", !0), a.setAttribute("aria-checked", "true"), n = !0 }, deactivate: function() { Object(c.p)(a, "jw-settings-item-active", !1), a.setAttribute("aria-checked", "false"), n = !1 }, element: function() { return a }, uiElement: function() { return o }, destroy: function() { this.deactivate(), o.destroy() } };
            return Object.defineProperty(r, "active", { enumerable: !0, get: function() { return n } }), r
        }
        var _e = "audioTracks",
            Me = "captions",
            Se = "quality",
            Ee = "playbackRates",
            Ae = Se,
            Le = function(e, t, i, n, a) {
                var o = e.getSubmenu(t);
                if (o) o.replaceContent(i);
                else {
                    var r = f("jw-settings-" + t, function() { e.activateSubmenu(t), o.element().children[0].focus() }, t, [n]),
                        s = r.element();
                    s.setAttribute("role", "menuitemradio"), s.setAttribute("aria-checked", "false"), s.setAttribute("aria-label", a), (o = function(e, t, i) {
                        var n = void 0,
                            a = [],
                            o = Object(c.e)(xe(e)),
                            r = t.element();
                        r.setAttribute("name", e), r.className += " jw-submenu-" + e, t.show();
                        var s = function(e, t) { e ? e.focus() : void 0 !== t && a[t].element().focus() },
                            l = function(e) {
                                var t = Object(c.i)(r),
                                    i = Object(c.k)(r),
                                    n = Object(c.i)(e.target),
                                    o = Object(c.k)(e.target),
                                    l = e.key.replace(/(Arrow|ape)/, "");
                                switch (l) {
                                    case "Tab":
                                        s(e.shiftKey ? i : t);
                                        break;
                                    case "Left":
                                        s(i || Object(c.k)(document.getElementsByClassName("jw-icon-settings")[0]));
                                        break;
                                    case "Up":
                                        s(o, a.length - 1);
                                        break;
                                    case "Right":
                                        s(t);
                                        break;
                                    case "Down":
                                        s(n, 0)
                                }
                                e.preventDefault(), "Esc" !== l && e.stopPropagation()
                            },
                            u = {
                                addContent: function(e) { e && (e.forEach(function(e) { o.appendChild(e.element()), e.element().setAttribute("tabindex", "-1"), e.element().addEventListener("keydown", l) }), a = e) },
                                replaceContent: function(e) { u.removeContent(), this.addContent(e) },
                                removeContent: function() { a.forEach(function(e) { e.element().removeEventListener("keydown", l) }), Object(c.g)(o), a = [] },
                                getItems: function() { return a },
                                activate: function() { Object(c.p)(o, "jw-settings-submenu-active", !0), o.setAttribute("aria-expanded", "true"), r.setAttribute("aria-checked", "true"), n = !0 },
                                deactivate: function() { Object(c.p)(o, "jw-settings-submenu-active", !1), o.setAttribute("aria-expanded", "false"), r.setAttribute("aria-checked", "false"), n = !1 },
                                activateItem: function(e) {
                                    var t = a[e];
                                    t && !t.active && (Oe(a), t.activate())
                                },
                                element: function() { return o },
                                destroy: function() { a && (a.forEach(function(e) { e.destroy() }), this.removeContent()) }
                            };
                        return Object.defineProperties(u, { name: { enumerable: !0, get: function() { return e } }, active: { enumerable: !0, get: function() { return n } }, categoryButtonElement: { enumerable: !0, get: function() { return r } }, isDefault: { enumerable: !0, get: function() { return i } } }), u
                    }(t, r, t === Ae)).addContent(i), "ontouchstart" in window || D(s, t, a), e.addSubmenu(o)
                }
                return o
            };

        function Pe(e) { e.removeSubmenu(Me) }

        function Ie(e) { e.removeSubmenu(_e) }

        function Be(e) { e.removeSubmenu(Se) }

        function Re(e) { e.removeSubmenu(Ee) }

        function ze(e, t, i) {
            var n = e.elements.settingsButton,
                a = function(e, t, i, n) {
                    var a = function(e) { /jw-(settings|video|nextup-close|sharing-link|share-item)/.test(e.target.className) || g.close() },
                        o = void 0,
                        r = null,
                        s = {},
                        l = Object(c.e)(be()),
                        u = function(e) {
                            var t = e.target,
                                i = Object(c.i)(t),
                                n = Object(c.k)(t),
                                a = e.key.replace(/(Arrow|ape)/, "");
                            switch (a) {
                                case "Esc":
                                    g.close();
                                    break;
                                case "Left":
                                    n ? n.focus() : (g.close(), ye(e.key));
                                    break;
                                case "Right":
                                    i && d.element() && t !== d.element() && i.focus();
                                    break;
                                case "Up":
                                case "Down":
                                    g.activateSubmenu(t.getAttribute("name"), "Up" === a)
                            }
                            if (e.stopPropagation(), /13|32|37|38|39|40/.test(e.keyCode)) return e.preventDefault(), !1
                        };
                    l.addEventListener("keydown", u);
                    var d = f("jw-settings-close", function() { g.close() }, n.close, [Object(h.a)("close")]),
                        p = function(e) {
                            var t = e.key.replace(/(Arrow|ape)/, "");
                            ("Enter" === t || "Right" === t || "Tab" === t && !e.shiftKey) && g.close(e), "Right" === t && ye(e.key)
                        };
                    d.show(), d.element().addEventListener("keydown", p);
                    var w = l.querySelector(".jw-settings-topbar");
                    w.appendChild(d.element());
                    var g = {
                        open: function(t, i) { e(o = !0, i), l.setAttribute("aria-expanded", "true"), document.addEventListener("click", a), t && i && "enter" === i.type ? r.categoryButtonElement.focus() : r.element().firstChild.focus() },
                        close: function(t) { e(o = !1, t), r = null, ke(s), l.setAttribute("aria-expanded", "false"), document.removeEventListener("click", a) },
                        toggle: function() { o ? this.close() : this.open() },
                        addSubmenu: function(e) {
                            if (e) {
                                var i = e.name;
                                if (s[i] = e, e.isDefault) Object(c.j)(w, e.categoryButtonElement), e.categoryButtonElement.addEventListener("keydown", function(e) { 9 === e.keyCode && e.shiftKey && g.close(e) });
                                else {
                                    var n = w.querySelector(".jw-submenu-sharing");
                                    w.insertBefore(e.categoryButtonElement, n || d.element())
                                }
                                l.appendChild(e.element()), t()
                            }
                        },
                        getSubmenu: function(e) { return s[e] },
                        removeSubmenu: function(e) {
                            var t = s[e];
                            t && t.element().parentNode === l && (l.removeChild(t.element()), w.removeChild(t.categoryButtonElement), t.destroy(), delete s[e], Object.keys(s).length || (this.close(), i()))
                        },
                        activateSubmenu: function(e, t) {
                            var i = s[e];
                            i && (i.active || (ke(s), i.activate(), r = i), t ? i.element().lastChild.focus() : i.element().firstChild.focus())
                        },
                        activateFirstSubmenu: function() {
                            var e = Object.keys(s)[0];
                            this.activateSubmenu(e)
                        },
                        element: function() { return l },
                        destroy: function() { this.close(), l.removeEventListener("keydown", u), d.element().removeEventListener("keydown", p), Object(c.g)(l) }
                    };
                    return Object.defineProperties(g, { visible: { enumerable: !0, get: function() { return o } } }), g
                }(t, function() { n.show() }, function() { n.hide() }, i);
            return e.on("settingsInteraction", function(e, t, i) {
                var n = a.getSubmenu(e);
                (n || t) && (a.visible ? t || n.active ? a.close() : a.activateSubmenu(e) : (n ? a.activateSubmenu(e) : a.activateFirstSubmenu(), a.open(t, i)))
            }), a
        }

        function He(e, t, i, n) {
            var a = i.player,
                o = function(t, i) {
                    var n = e.getSubmenu(t);
                    n && n.activateItem(i)
                },
                r = function(t, i) {
                    !i || i.length <= 1 ? Ie(e) : function(e, t, i, n, a) {
                        var o = t.map(function(t, n) { return Ce(t.name, t.name, function(t) { i(n), e.close(t) }) });
                        Le(e, _e, o, Object(h.a)("audio-tracks"), a).activateItem(n)
                    }(e, i, function(e) { return n.setCurrentAudioTrack(e) }, a.get("currentAudioTrack"), a.get("localization").audioTracks)
                },
                s = function(t, i) {
                    if (!i || i.length <= 1) Be(e);
                    else {
                        var o = a.get("localization"),
                            r = o.hd,
                            s = o.auto;
                        ! function(e, t, i, n, a, o) {
                            var r = t.map(function(t, n) { var a = t.label; return "Auto" === a && 0 === n && (a = o + '&nbsp;<span class="jw-reset jw-auto-label"></span>'), Ce(t.label, a, function(t) { i(n), e.close(t) }) });
                            Le(e, Se, r, Object(h.a)("quality-100"), a).activateItem(n)
                        }(e, i, function(e) { return n.setCurrentQuality(e) }, a.get("currentLevel"), r, s)
                    }
                },
                l = function(t, i) {
                    a.get("supportsPlaybackRate") && "LIVE" !== a.get("streamType") && a.get("playbackRateControls") && i.length > 1 ? function(e, t, i, n, a) {
                        var o = t.map(function(t) { return Ce(0, t + "x", function(n) { i(t), e.close(n) }) });
                        Le(e, Ee, o, Object(h.a)("playback-rate"), a).activateItem(n)
                    }(e, i, function(e) { return n.setPlaybackRate(e) }, i.indexOf(a.get("playbackRate")), a.get("localization").playbackRates) : Re(e)
                },
                c = function(e, t, i) {
                    var n = a.get("levels");
                    n && "Auto" === n[0].label && (t.getItems()[0].element().querySelector(".jw-auto-label").textContent = i ? "" : n[e.level.index].label)
                };
            a.change("levels", s, e), a.on("change:currentLevel", function(t, i) {
                var n = e.getSubmenu("quality"),
                    r = a.get("visualQuality");
                r && n && c(r, n, i), o("quality", i)
            }, e), a.change("audioTracks", r, e), a.on("change:currentAudioTrack", function(e, t) { o("audioTracks", t) }, e), a.on("change:playlistItem", function() { Pe(e), t.elements.captionsButton.hide() }), a.change("captionsList", function(i, o) {
                var r = t.elements.captionsButton;
                if (!o || o.length <= 1) return Pe(e), void r.hide();
                var s = a.get("localization"),
                    l = s.cc,
                    c = s.off;
                ! function(e, t, i, n, a, o) {
                    var r = t.map(function(t, n) { var a = t.label; return "Off" !== a && "off" !== t.id || 0 !== n || (a = o), Ce(t.id, a, function(t) { i(n), e.close(t) }) });
                    Le(e, Me, r, Object(h.a)("cc-off"), a).activateItem(n)
                }(e, o, function(e) { return n.setCurrentCaptions(e) }, a.get("captionsIndex"), l, c), t.toggleCaptionsButtonState(!!a.get("captionsIndex")), r.show()
            }, e), a.change("captionsIndex", function(i, n) {
                var a = e.getSubmenu("captions");
                a && (a.activateItem(n), t.toggleCaptionsButtonState(!!n))
            }, e), a.change("playbackRates", l, e), a.change("playbackRate", function(e, t) {
                var i = a.get("playbackRates");
                i && o("playbackRates", i.indexOf(t))
            }, e), a.on("change:visualQuality", function(t, i) {
                var n = e.getSubmenu("quality");
                n && c(i, n, a.get("currentLevel"))
            }), a.on("change:castActive", function(t, i, n) { i !== n && (i ? (Ie(e), Be(e), Re(e)) : (r(0, a.get("audioTracks")), s(0, a.get("levels")), l(0, a.get("playbackRates")))) }, e), a.on("change:streamType", function() { l(0, a.get("playbackRates")) }, e)
        }
        var Ve = i(70),
            Ne = i(43),
            Fe = i(13),
            De = function(e, t, i, n) {
                var a = Object(c.e)('<div class="jw-reset jw-info-overlay"><div class="jw-reset jw-info-container"><div class="jw-reset jw-info-title"></div><div class="jw-reset jw-info-duration"></div><div class="jw-reset jw-info-description"></div></div><div class="jw-reset jw-info-clientid"></div></div>'),
                    o = !1,
                    s = null,
                    l = !1,
                    u = function(e) { /jw-info/.test(e.target.className) || p.close() },
                    d = function() {
                        var i = f("jw-info-close", function() { p.close() }, t.get("localization").close, [Object(h.a)("close")]);
                        i.show(), Object(c.j)(a, i.element()),
                            function() {
                                var e = a.querySelector(".jw-info-title"),
                                    i = a.querySelector(".jw-info-duration"),
                                    n = a.querySelector(".jw-info-description"),
                                    o = a.querySelector(".jw-info-clientid");
                                t.change("playlistItem", function(t, i) {
                                    var a = i.description,
                                        o = i.title;
                                    n.textContent = a || "", e.textContent = o || "Unknown Title"
                                }), t.change("duration", function(e, n) {
                                    var a = t.get("streamType"),
                                        o = "";
                                    switch (a) {
                                        case "LIVE":
                                            o = "Live";
                                            break;
                                        case "DVR":
                                            o = "DVR";
                                            break;
                                        default:
                                            n && (o = Object(m.timeFormat)(n))
                                    }
                                    i.textContent = o
                                }, p), o.textContent = "Client ID: " + function() { try { return window.localStorage.jwplayerLocalId } catch (e) { return "none" } }()
                            }(), e.appendChild(a), o = !0
                    };
                var p = {
                    open: function() {
                        o || d(), document.addEventListener("click", u), l = !0;
                        var e = t.get("state");
                        e === r.Pa && i.pause("infoOverlayInteraction"), s = e, n(!0)
                    },
                    close: function() { document.removeEventListener("click", u), l = !1, t.get("state") === r.Oa && s === r.Pa && i.play("infoOverlayInteraction"), s = null, n(!1) },
                    destroy: function() { this.close(), t.off(null, null, this) }
                };
                return Object.defineProperties(p, { visible: { enumerable: !0, get: function() { return l } } }), p
            };
        var qe = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }();
        i(123);
        var Ue = o.OS.mobile ? 4e3 : 2e3;
        Ne.a.cloneIcon = h.a, Fe.a.forEach(function(e) {
            if (e.getState() === r.La) {
                var t = e.getContainer().querySelector(".jw-error-msg .jw-icon");
                t && !t.hasChildNodes() && t.appendChild(Ne.a.cloneIcon("error"))
            }
        });
        var We = function() { return { reason: "interaction" } },
            Ze = function() {
                function e(t, i) {
                    var n = this;
                    ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), Object(a.j)(this, s.a), this.activeTimeout = -1, this.inactiveTime = 0, this.context = t, this.controlbar = null, this.displayContainer = null, this.backdrop = null, this.enabled = !0, this.instreamState = null, this.keydownCallback = null, this.keyupCallback = null, this.blurCallback = null, this.mute = null, this.nextUpToolTip = null, this.playerContainer = i, this.wrapperElement = i.querySelector(".jw-wrapper"), this.rightClickMenu = null, this.settingsMenu = null, this.showing = !1, this.muteChangeCallback = null, this.unmuteCallback = null, this.logo = null, this.div = null, this.dimensions = {}, this.infoOverlay = null, this.userInactiveTimeout = function() {
                        var e = n.inactiveTime - Object(u.a)();
                        n.inactiveTime && e > 16 ? n.activeTimeout = setTimeout(n.userInactiveTimeout, e) : n.userInactive()
                    }
                }
                return qe(e, [{
                    key: "enable",
                    value: function(e, t) {
                        var i = this,
                            n = this.context.createElement("div");
                        n.className = "jw-controls jw-reset", this.div = n;
                        var a = this.context.createElement("div");
                        a.className = "jw-controls-backdrop jw-reset", this.backdrop = a, this.logo = this.playerContainer.querySelector(".jw-logo");
                        var s = t.get("touchMode");
                        if (!this.displayContainer) {
                            var u = new oe(t, e);
                            u.buttons.display.on("click tap enter", function() { i.trigger(r.p), i.userActive(1e3), e.playToggle(We()) }), this.div.appendChild(u.element()), this.displayContainer = u
                        }
                        this.infoOverlay = new De(n, t, e, function(e) { Object(c.p)(i.div, "jw-info-open", e) }), this.rightClickMenu = new me(this.infoOverlay), s ? (Object(c.a)(this.playerContainer, "jw-flag-touch"), this.rightClickMenu.setup(t, this.playerContainer, this.playerContainer)) : t.change("flashBlocked", function(e, t) { t ? i.rightClickMenu.destroy() : i.rightClickMenu.setup(e, i.playerContainer, i.playerContainer) }, this);
                        var d = this.controlbar = new J(e, t);
                        if (d.on(r.Sa, function() { return i.userActive() }), d.on("nextShown", function(e) { this.trigger("nextShown", e) }, this), t.get("nextUpDisplay") && !d.nextUpToolTip) {
                            var p = new ce(t, e, this.playerContainer);
                            p.on("all", this.trigger, this), p.setup(this.context), d.nextUpToolTip = p, this.div.appendChild(p.element())
                        }
                        this.div.appendChild(d.element());
                        var w = null,
                            g = this.settingsMenu = ze(d, function(n, a) {
                                var o = t.get("state"),
                                    s = { reason: "settingsInteraction" },
                                    l = "keydown" === (a && a.sourceEvent || a || {}).type;
                                Object(c.p)(i.div, "jw-settings-open", n), Object(Ve.a)(t.get("containerWidth")) < 2 && (n && o === r.Pa ? e.pause(s) : n || o !== r.Oa || w !== r.Pa || e.play(s));
                                var u = n || l ? 0 : Ue;
                                i.userActive(u), w = o;
                                var d = i.controlbar.elements.settingsButton;
                                !n && l && d && d.element().focus()
                            }, t.get("localization"));
                        He(g, d, t, e), o.OS.mobile ? this.div.appendChild(g.element()) : this.div.insertBefore(g.element(), d.element());
                        var j = function(t) {
                            if (t.get("autostartMuted")) {
                                var n = function() { return i.unmuteAutoplay(e, t) },
                                    a = function(e, t) { t || n() };
                                o.OS.mobile && (i.mute = f("jw-autostart-mute jw-off", n, t.get("localization").unmute, [Object(h.a)("volume-0")]), i.mute.show(), i.div.appendChild(i.mute.element())), d.renderVolume(!0, t.get("volume")), Object(c.a)(i.playerContainer, "jw-flag-autostart"), t.on("change:autostartFailed", n, i), t.on("change:autostartMuted change:mute", a, i), i.muteChangeCallback = a, i.unmuteCallback = n
                            }
                        };

                        function v(i) {
                            var n = 0,
                                a = t.get("duration"),
                                o = t.get("position");
                            if ("DVR" === t.get("streamType")) {
                                var r = t.get("dvrSeekLimit");
                                n = a, a = Math.max(o, -r)
                            }
                            var s = Object(l.a)(o + i, n, a);
                            e.seek(s, We())
                        }

                        function m(i) {
                            var n = Object(l.a)(t.get("volume") + i, 0, 100);
                            e.setVolume(n)
                        }
                        t.once("change:autostartMuted", j), j(t);
                        var b = function(n) {
                            if (n.ctrlKey || n.metaKey) return !0;
                            var a = !i.settingsMenu.visible,
                                o = i.instreamState;
                            switch (n.keyCode) {
                                case 27:
                                    ! function() {
                                        if (t.get("fullscreen")) return e.setFullscreen(!1), this.playerContainer.blur(), void this.userInactive();
                                        var i = e.getPlugin("related");
                                        i && i.close({ type: "escape" })
                                    }();
                                    break;
                                case 13:
                                case 32:
                                    e.playToggle(We());
                                    break;
                                case 37:
                                    !o && a && v(-5);
                                    break;
                                case 39:
                                    !o && a && v(5);
                                    break;
                                case 38:
                                    a && m(10);
                                    break;
                                case 40:
                                    a && m(-10);
                                    break;
                                case 67:
                                    var r = e.getCaptionsList().length;
                                    if (r) {
                                        var s = (e.getCurrentCaptions() + 1) % r;
                                        e.setCurrentCaptions(s)
                                    }
                                    break;
                                case 77:
                                    e.setMute();
                                    break;
                                case 70:
                                    e.setFullscreen();
                                    break;
                                default:
                                    if (n.keyCode >= 48 && n.keyCode <= 59) {
                                        var l = (n.keyCode - 48) / 10 * t.get("duration");
                                        e.seek(l, We())
                                    }
                            }
                            return /13|32|37|38|39|40/.test(n.keyCode) ? (n.preventDefault(), !1) : void 0
                        };
                        this.playerContainer.addEventListener("keydown", b), this.keydownCallback = b;
                        var y = function(e) {
                            if (!i.instreamState && 9 === e.keyCode) {
                                var t = i.playerContainer.contains(e.target) ? 0 : Ue;
                                i.userActive(t)
                            }
                        };
                        this.playerContainer.addEventListener("keyup", y), this.keyupCallback = y;
                        var k = function(e) {
                            var t = e.relatedTarget || document.querySelector(":focus");
                            t && (i.playerContainer.contains(t) || i.userInactive())
                        };
                        this.playerContainer.addEventListener("blur", k, !0), this.blurCallback = k, this.userActive(), this.addControls(), this.addBackdrop(), t.set("controlsEnabled", !0)
                    }
                }, { key: "addControls", value: function() { this.wrapperElement.appendChild(this.div) } }, {
                    key: "disable",
                    value: function(e) {
                        var t = this.nextUpToolTip,
                            i = this.settingsMenu,
                            n = this.infoOverlay;
                        this.off(), e && e.off(null, null, this), clearTimeout(this.activeTimeout), this.activeTimeout = -1, e.set("controlsEnabled", !1), this.div.parentNode && (Object(c.l)(this.playerContainer, "jw-flag-touch"), this.div.parentNode.removeChild(this.div)), this.rightClickMenu && this.rightClickMenu.destroy(), this.keydownCallback && this.playerContainer.removeEventListener("keydown", this.keydownCallback), this.keyupCallback && this.playerContainer.removeEventListener("keyup", this.keyupCallback), this.blurCallback && this.playerContainer.removeEventListener("blur", this.blurCallback), t && t.destroy(), i && (i.destroy(), this.div.removeChild(i.element())), n && n.destroy(), this.removeBackdrop()
                    }
                }, { key: "controlbarHeight", value: function() { return this.dimensions.cbHeight || (this.dimensions.cbHeight = this.controlbar.element().clientHeight), this.dimensions.cbHeight } }, { key: "element", value: function() { return this.div } }, { key: "resize", value: function() { this.dimensions = {} } }, {
                    key: "unmuteAutoplay",
                    value: function(e, t) {
                        var i = !t.get("autostartFailed"),
                            n = t.get("mute");
                        i ? n = !1 : t.set("playOnViewable", !1), this.muteChangeCallback && (t.off("change:autostartMuted change:mute", this.muteChangeCallback), this.muteChangeCallback = null), this.unmuteCallback && (t.off("change:autostartFailed", this.unmuteCallback), this.unmuteCallback = null), t.set("autostartFailed", void 0), t.set("autostartMuted", void 0), e.setMute(n), this.controlbar.renderVolume(n, t.get("volume")), this.mute && this.mute.hide(), Object(c.l)(this.playerContainer, "jw-flag-autostart"), this.userActive()
                    }
                }, {
                    key: "mouseMove",
                    value: function(e) {
                        var t = this.controlbar.element().contains(e.target),
                            i = this.controlbar.nextUpToolTip && this.controlbar.nextUpToolTip.element().contains(e.target),
                            n = this.logo && this.logo.contains(e.target),
                            a = t || i || n ? 0 : Ue;
                        this.userActive(a)
                    }
                }, {
                    key: "userActive",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ue;
                        e > 0 ? (this.inactiveTime = Object(u.a)() + e, -1 === this.activeTimeout && (this.activeTimeout = setTimeout(this.userInactiveTimeout, e))) : (clearTimeout(this.activeTimeout), this.activeTimeout = -1, this.inactiveTime = 0), this.showing || (Object(c.l)(this.playerContainer, "jw-flag-user-inactive"), this.showing = !0, this.trigger("userActive"))
                    }
                }, { key: "userInactive", value: function() { clearTimeout(this.activeTimeout), this.activeTimeout = -1, this.settingsMenu.visible || (this.inactiveTime = 0, this.showing = !1, Object(c.a)(this.playerContainer, "jw-flag-user-inactive"), this.trigger("userInactive")) } }, {
                    key: "addBackdrop",
                    value: function() {
                        var e = this.instreamState ? this.div : this.wrapperElement.querySelector(".jw-captions");
                        this.wrapperElement.insertBefore(this.backdrop, e)
                    }
                }, {
                    key: "removeBackdrop",
                    value: function() {
                        var e = this.backdrop.parentNode;
                        e && e.removeChild(this.backdrop)
                    }
                }, { key: "setupInstream", value: function() { this.instreamState = !0, this.userActive(), this.addBackdrop(), this.settingsMenu && this.settingsMenu.close(), Object(c.l)(this.playerContainer, "jw-flag-autostart") } }, { key: "destroyInstream", value: function(e) { this.instreamState = null, this.addBackdrop(), e.get("autostartMuted") && Object(c.a)(this.playerContainer, "jw-flag-autostart") } }]), e
            }(),
            Ke = i(121),
            Qe = i.n(Ke),
            Je = i(120),
            Ye = i.n(Je),
            Xe = i(119),
            Ge = i.n(Xe),
            $e = i(118),
            et = i.n($e),
            tt = i(117),
            it = i.n(tt),
            nt = i(116),
            at = i.n(nt),
            ot = i(115),
            rt = i.n(ot),
            st = i(114),
            lt = i.n(st),
            ct = i(113),
            ut = i.n(ct),
            dt = i(112),
            pt = i.n(dt),
            ft = { label: "facebook", src: "http://www.facebook.com/sharer/sharer.php?u=[URL]", svg: Qe.a, jwsource: "fb" },
            ht = { label: "twitter", src: "http://twitter.com/intent/tweet?url=[URL]", svg: rt.a, jwsource: "twi" },
            wt = { label: "googleplus", src: "https://plus.google.com/share?url=[URL]", svg: Ye.a, jwsource: "gps" },
            gt = { label: "linkedin", src: "https://www.linkedin.com/cws/share?url=[URL]", svg: Ge.a, jwsource: "lkn" },
            jt = { label: "pinterest", src: "http://pinterest.com/pin/create/button/?url=[URL]", svg: et.a, jwsource: "pin" },
            vt = { label: "reddit", src: "http://www.reddit.com/submit?url=[URL]", svg: it.a, jwsource: "rdt" },
            mt = { label: "tumblr", src: "http://tumblr.com/widgets/share/tool?canonicalUrl=[URL]", svg: at.a, jwsource: "tbr" },
            bt = { label: "email", src: "mailto:?body=[URL]", svg: lt.a, jwsource: "em" },
            yt = { label: "link", svg: ut.a, jwsource: "cl" },
            kt = { label: "embed", svg: pt.a, jwsource: "ceb" },
            xt = i(75),
            Ot = i.n(xt),
            Tt = !1,
            Ct = function(e, t, o, r) {
                Object(a.j)(this, s.a);
                var l = this,
                    c = "jw-settings-sharing",
                    u = [ft, ht, bt],
                    d = void 0,
                    p = void 0;

                function f(e, t) { var i = e.indexOf("MEDIAID"); return i > 0 && t ? e.replace("MEDIAID", t) : -1 === i ? e : void 0 }

                function h() { o.trigger("settingsInteraction", "sharing", !1) }

                function w() {
                    var i = e.getPlaylistItem(),
                        n = u.filter(function(e) { return "link" === e.label })[0];
                    d = function(e) {
                        var i = window.location.toString();
                        if (window.top !== window && (i = document.referrer), t.link) {
                            var n = f(t.link, e);
                            i = n || i
                        }
                        return i
                    }(i.mediaid), n ? -1 === n.src.indexOf(d) && (n.src = d) : u.push(Object(a.j)({ src: g(d, yt.jwsource) }, yt));
                    var o = u.filter(function(e) { return "embed" === e.label });
                    p = function(e) {
                        var i = null;
                        if (t.code) {
                            var n = f(t.code, e);
                            i = n || i
                        }
                        return i
                    }(i.mediaid) || t.code, o[0] ? o[0].src = decodeURIComponent(p) : t.code && u.push(Object(a.j)({ src: decodeURIComponent(p) }, kt))
                }

                function g(e, t) { var i = /([?&]jwsource)=?[^&]*/; return i.test(e) ? e.replace(i, "$1=" + t) : e + (-1 === e.indexOf("?") ? "?" : "&") + "jwsource=" + t }

                function j(e) { l.trigger("click", { method: e }) }
                return function() {
                    if (Array.isArray(t.sites)) {
                        var i = [];
                        Object(a.i)(t.sites, function(e) { Object(a.x)(e) && n[e] ? i.push(n[e]) : Object(a.w)(e) && i.push(e) }), u = i
                    }
                    e.addButton(Ot.a, r, h, "share", c)
                }(), this.getShareMethods = function() { return w(), u }, this.getHeading = function() { return r }, this.onSubmenuToggle = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "interaction";
                    e && !Tt && (Tt = !0, i(111)), l.trigger(e ? "open" : "close", { visible: e, method: t })
                }, this.action = function(t) {
                    var i = u[t].label;
                    "embed" !== i && "link" !== i ? function(t) {
                        var i = t.src;
                        if (Object(a.t)(i)) i(d);
                        else if (null !== i && void 0 !== i) {
                            var n = encodeURIComponent(g(d, t.jwsource || "share")),
                                o = i.replace(/\[URL\]/gi, n);
                            i === o && (o = i + n), e.pause({ reason: "sharing" }), window.open(o, "_blank"), window.focus()
                        }
                        j(t.label)
                    }(u[t]) : j(i)
                }, this.open = function() { o.trigger("sharingApi", !0) }, this.close = function() { o.trigger("sharingApi", !1) }, this
            },
            _t = function(e, t) {
                var i = Object(c.e)('<div class="jw-skip jw-reset" tabindex="0" role="button"><span class="jw-text jw-skiptext jw-reset"></span><span class="jw-icon jw-icon-inline jw-skip-icon jw-reset"></span></div>');
                i.querySelector(".jw-icon").appendChild(Object(h.a)("next")), this.el = i, this.skiptext = this.el.getElementsByClassName("jw-skiptext")[0], this.skipUI = new d.a(this.el).on("click tap enter", this.skipAd, this), this.model = e, this.skipMessage = e.get("skipText") || "", this.skipMessageCountdown = e.get("skipMessage") || "", this.waitTime = Object(se.c)(e.get("skipOffset")), e.change("duration", function(i, n) {
                    n && (this.waitTime || (this.waitTime = Object(se.c)(i.get("skipOffset"), n)), this.el.parentNode !== t && this.waitTime + 2 < n && (e.change("position", function(e, t) {
                        var i = this.waitTime - (t || 0);
                        i > 0 ? this.updateMessage(this.skipMessageCountdown.replace(/(\b)xx(s?\b)/gi, "$1" + Math.ceil(i) + "$2")) : null !== this.waitTime && (this.updateMessage(this.skipMessage), this.skippable = !0, Object(c.a)(this.el, "jw-skippable"))
                    }, this), t.appendChild(this.el)))
                }, this)
            };
        Object(a.j)(_t.prototype, s.a, { updateMessage: function(e) { this.skiptext.innerHTML = e, this.el.setAttribute("aria-label", e) }, skipAd: function() { this.skippable && (this.skipUI.off(), this.trigger(r.d)) }, destroy: function() { this.model.off(null, null, this), this.skipUI && this.skipUI.off(), this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el) } });
        var Mt = _t,
            St = function(e, t, i) { this.api = e, this.playerElement = t, this.wrapperElement = i };
        Object(a.j)(St.prototype, {
            setup: function(e) {
                var t = this;
                this.element = Object(c.e)(function(e) { return '<div class="jw-dismiss-icon jw-icon jw-reset" aria-label=' + e + ' tabindex="0"></div>' }(e)), this.element.appendChild(Object(h.a)("close")), this.ui = new d.a(this.element).on("click tap enter", function() { t.api.remove() }, this), this.wrapperElement.insertBefore(this.element, this.wrapperElement.firstChild), Object(c.a)(this.playerElement, "jw-flag-top")
            },
            destroy: function() { this.element && (this.ui.destroy(), this.wrapperElement.removeChild(this.element), this.element = null) }
        });
        var Et = St,
            At = function(e, t, i, n) {
                var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
                    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "",
                    r = o ? '<img src="' + o + '" class="jw-svg-icon"/>' : a;
                return "link" === e || "embed" === e ? '<div class="jw-reset jw-settings-content-item jw-sharing-copy"><button class="jw-reset jw-sharing-link" aria-checked="false" type="button" role="button">' + r + " " + (n || e) + '</button><textarea readonly="true" class="jw-reset jw-sharing-textarea">' + t + '</textarea><div class="jw-reset jw-tooltip jw-tooltip-sharing-' + (n || e) + '"><div class="jw-text">' + i + "</div></div></div>" : '<button class="jw-reset jw-settings-content-item jw-sharing-link" aria-checked="false" type="button" role="button">' + r + " " + (n || e) + "</button>"
            };
        var Lt = "sharing";

        function Pt(e, t, i, n, a, o) {
            var r = t.map(function(e, t) {
                    return function(e, t, i) {
                        var n = Object(c.e)(At(e.label, e.src, t, e.displayText, e.svg, e.icon)),
                            a = new d.a(n).on("click tap enter", function() { o.activate(), i() });
                        ! function(e, t) { e && t && (e.setAttribute("aria-label", t), e.setAttribute("role", "button"), e.setAttribute("tabindex", "0")) }(n, e.label);
                        var o = {
                            activate: function() {
                                if ("embed" === e.label || "link" === e.label) {
                                    var t = n.querySelector(".jw-sharing-textarea");
                                    if (t.select(), document.execCommand("copy")) {
                                        var i = t.nextSibling;
                                        Object(c.a)(i, "jw-open"), setTimeout(function() { Object(c.l)(i, "jw-open") }, 1e3)
                                    } else window.prompt("Copy the text below", e.src);
                                    t.blur()
                                }
                            },
                            deactivate: function() {},
                            element: function() { return n },
                            destroy: function() { a.destroy() }
                        };
                        return Object.defineProperty(o, "active", { enumerable: !0, get: function() { return !1 } }), o
                    }(e, i, function() { n(t) })
                }),
                s = Le(e, Lt, r, Ot.a, o);
            Object(c.a)(s.element(), "jw-sharing-menu");
            var l = s.activate,
                u = s.deactivate;
            s.activate = function() { s.active || (l(), a(!0)) }, s.deactivate = function() { s.active && (u(), a(!1)) }
        }
        var It = Ze.prototype.disable,
            Bt = Ze.prototype.enable;
        t.default = function(e, t) {
            var i = new Ze(e, t),
                n = function() { o && (o.destroy(), o = null) },
                a = null,
                o = null,
                s = null;
            i.disable = function(e) { It.call(i, e), s && (s.destroy(), s = null) }, i.enable = function(e, u) {
                Bt.call(i, e, u), u.change("instream", function() { n() }), u.change("skipButton", function(t, a) { n(), a && (o = new Mt(t, i.div)).on(r.d, function() { t.set("skipButton", !1), e.skipAd() }) });
                var d = u.get("localization"),
                    p = u.get("advertising");
                p && p.outstream && p.dismissible && (s = new Et(e, t, t.querySelector(".jw-top"))).setup(d.close);
                var f = u.get("sharing");
                if (!a && f) {
                    var h = this.controlbar,
                        w = this.settingsMenu,
                        g = d.sharing;
                    a = new Ct(e, f, h, g.heading), e.addPlugin("sharing", a), u.change("playlistItem", function() {
                            var e = a.getShareMethods().map(function(e) { var t = g[e.label]; return t && (e.displayText = t), e });
                            Pt(w, e, g.copied, a.action, c, a.getHeading())
                        }),
                        function(e, t) {
                            e.on("sharingApi", function(e) {
                                var i = t.getSubmenu("sharing");
                                i && (l = !0, e && !i.active ? (t.activateSubmenu("sharing"), t.open(), a.onSubmenuToggle(!0, "api")) : !e && i.active && (t.close(), a.onSubmenuToggle(!1, "api")))
                            })
                        }(h, w), f.shareOnRightClick && this.rightClickMenu.enableSharing(a.open)
                }
            };
            var l = !1;
            var c = function(e) { l ? l = !1 : a.onSubmenuToggle(e) };
            return i
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
        "use strict";
        i.d(t, "a", function() { return X }), i.d(t, "b", function() { return G });
        var n = i(104),
            a = i.n(n),
            o = i(103),
            r = i.n(o),
            s = i(102),
            l = i.n(s),
            c = i(101),
            u = i.n(c),
            d = i(100),
            p = i.n(d),
            f = i(99),
            h = i.n(f),
            w = i(98),
            g = i.n(w),
            j = i(97),
            v = i.n(j),
            m = i(96),
            b = i.n(m),
            y = i(95),
            k = i.n(y),
            x = i(94),
            O = i.n(x),
            T = i(93),
            C = i.n(T),
            _ = i(92),
            M = i.n(_),
            S = i(91),
            E = i.n(S),
            A = i(90),
            L = i.n(A),
            P = i(89),
            I = i.n(P),
            B = i(88),
            R = i.n(B),
            z = i(87),
            H = i.n(z),
            V = i(86),
            N = i.n(V),
            F = i(85),
            D = i.n(F),
            q = i(84),
            U = i.n(q),
            W = i(83),
            Z = i.n(W),
            K = i(82),
            Q = i.n(K),
            J = i(64),
            Y = null;

        function X(e) { var t = te().querySelector($(e)); return t ? ee(t) : null }

        function G(e) { var t = te().querySelectorAll(e.split(",").map($).join(",")); return Array.prototype.map.call(t, function(e) { return ee(e) }) }

        function $(e) { return ".jw-svg-icon-" + e }

        function ee(e) { return e.cloneNode(!0) }

        function te() { return Y || (Y = Object(J.a)("<xml>" + a.a + r.a + l.a + u.a + p.a + h.a + g.a + v.a + b.a + k.a + O.a + C.a + M.a + E.a + L.a + I.a + R.a + H.a + N.a + D.a + U.a + Z.a + Q.a + "</xml>")), Y }
    }, function(e, t, i) {
        "use strict";
        i.d(t, "a", function() { return a });
        var n = i(2);

        function a(e) {
            var t = [],
                i = (e = Object(n.h)(e)).split("\r\n\r\n");
            1 === i.length && (i = e.split("\n\n"));
            for (var a = 0; a < i.length; a++)
                if ("WEBVTT" !== i[a]) {
                    var r = o(i[a]);
                    r.text && t.push(r)
                }
            return t
        }

        function o(e) {
            var t = {},
                i = e.split("\r\n");
            1 === i.length && (i = e.split("\n"));
            var a = 1;
            if (i[0].indexOf(" --\x3e ") > 0 && (a = 0), i.length > a + 1 && i[a + 1]) {
                var o = i[a],
                    r = o.indexOf(" --\x3e ");
                r > 0 && (t.begin = Object(n.f)(o.substr(0, r)), t.end = Object(n.f)(o.substr(r + 5)), t.text = i.slice(a + 1).join("\r\n"))
            }
            return t
        }
    }, function(e, t) {
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map(function(t) {
                    var i = function(e, t) {
                        var i = e[1] || "",
                            n = e[3];
                        if (!n) return i;
                        if (t && "function" == typeof btoa) {
                            var a = function(e) { return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */" }(n),
                                o = n.sources.map(function(e) { return "/*# sourceURL=" + n.sourceRoot + e + " */" });
                            return [i].concat(o).concat([a]).join("\n")
                        }
                        return [i].join("\n")
                    }(t, e);
                    return t[2] ? "@media " + t[2] + "{" + i + "}" : i
                }).join("")
            }, t.i = function(e, i) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                for (var n = {}, a = 0; a < this.length; a++) { var o = this[a][0]; "number" == typeof o && (n[o] = !0) }
                for (a = 0; a < e.length; a++) { var r = e[a]; "number" == typeof r[0] && n[r[0]] || (i && !r[2] ? r[2] = i : i && (r[2] = "(" + r[2] + ") and (" + i + ")"), t.push(r)) }
            }, t
        }
    }, function(e, t, i) {
        "use strict";
        i.d(t, "a", function() { return a });
        var n = void 0;

        function a(e) { return n || (n = new DOMParser), n.parseFromString(e, "image/svg+xml").documentElement }
    }, function(e, t, i) {
        "use strict";
        i.d(t, "a", function() { return n }), i.d(t, "b", function() { return o });
        var n = 12;

        function a() { try { var e = window.crypto || window.msCrypto; if (e && e.getRandomValues) return e.getRandomValues(new Uint32Array(1))[0].toString(36) } catch (e) {} return Math.random().toString(36).slice(2, 9) }

        function o(e) { for (var t = ""; t.length < e;) t += a(); return t.slice(0, e) }
    }, function(e, t, i) {
        "use strict";
        i.d(t, "b", function() { return n }), i.d(t, "a", function() { return a });
        var n = window.requestAnimationFrame || function(e) { return setTimeout(e, 17) },
            a = window.cancelAnimationFrame || clearTimeout
    }, function(e, t, i) {
        "use strict";
        var n = window.VTTCue;

        function a(e) { if ("string" != typeof e) return !1; return !!{ start: !0, middle: !0, end: !0, left: !0, right: !0 }[e.toLowerCase()] && e.toLowerCase() }
        if (!n) {
            (n = function(e, t, i) {
                var n = this;
                n.hasBeenReset = !1;
                var o = "",
                    r = !1,
                    s = e,
                    l = t,
                    c = i,
                    u = null,
                    d = "",
                    p = !0,
                    f = "auto",
                    h = "start",
                    w = "auto",
                    g = 100,
                    j = "middle";
                Object.defineProperty(n, "id", { enumerable: !0, get: function() { return o }, set: function(e) { o = "" + e } }), Object.defineProperty(n, "pauseOnExit", { enumerable: !0, get: function() { return r }, set: function(e) { r = !!e } }), Object.defineProperty(n, "startTime", {
                    enumerable: !0,
                    get: function() { return s },
                    set: function(e) {
                        if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
                        s = e, this.hasBeenReset = !0
                    }
                }), Object.defineProperty(n, "endTime", {
                    enumerable: !0,
                    get: function() { return l },
                    set: function(e) {
                        if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
                        l = e, this.hasBeenReset = !0
                    }
                }), Object.defineProperty(n, "text", { enumerable: !0, get: function() { return c }, set: function(e) { c = "" + e, this.hasBeenReset = !0 } }), Object.defineProperty(n, "region", { enumerable: !0, get: function() { return u }, set: function(e) { u = e, this.hasBeenReset = !0 } }), Object.defineProperty(n, "vertical", {
                    enumerable: !0,
                    get: function() { return d },
                    set: function(e) {
                        var t = function(e) { return "string" == typeof e && !!{ "": !0, lr: !0, rl: !0 }[e.toLowerCase()] && e.toLowerCase() }(e);
                        if (!1 === t) throw new SyntaxError("An invalid or illegal string was specified.");
                        d = t, this.hasBeenReset = !0
                    }
                }), Object.defineProperty(n, "snapToLines", { enumerable: !0, get: function() { return p }, set: function(e) { p = !!e, this.hasBeenReset = !0 } }), Object.defineProperty(n, "line", {
                    enumerable: !0,
                    get: function() { return f },
                    set: function(e) {
                        if ("number" != typeof e && "auto" !== e) throw new SyntaxError("An invalid number or illegal string was specified.");
                        f = e, this.hasBeenReset = !0
                    }
                }), Object.defineProperty(n, "lineAlign", {
                    enumerable: !0,
                    get: function() { return h },
                    set: function(e) {
                        var t = a(e);
                        if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                        h = t, this.hasBeenReset = !0
                    }
                }), Object.defineProperty(n, "position", {
                    enumerable: !0,
                    get: function() { return w },
                    set: function(e) {
                        if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
                        w = e, this.hasBeenReset = !0
                    }
                }), Object.defineProperty(n, "size", {
                    enumerable: !0,
                    get: function() { return g },
                    set: function(e) {
                        if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
                        g = e, this.hasBeenReset = !0
                    }
                }), Object.defineProperty(n, "align", {
                    enumerable: !0,
                    get: function() { return j },
                    set: function(e) {
                        var t = a(e);
                        if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                        j = t, this.hasBeenReset = !0
                    }
                }), n.displayState = void 0
            }).prototype.getCueAsHTML = function() { return window.WebVTT.convertCueToDOMTree(window, this.text) }
        }
        t.a = n
    }, function(e, t, i) {
        "use strict";
        var n = i(67),
            a = i(8),
            o = i(27),
            r = i(4),
            s = i(62),
            l = i(2),
            c = i(1);

        function u(e) { throw new c.s(null, e) }

        function d(e, t, n) {
            e.xhr = Object(o.a)(e.file, function(o) {
                ! function(e, t, n, o) {
                    var d = e.responseXML ? e.responseXML.firstChild : null,
                        p = void 0,
                        h = void 0;
                    if (d)
                        for ("xml" === Object(r.b)(d) && (d = d.nextSibling); d.nodeType === d.COMMENT_NODE;) d = d.nextSibling;
                    try {
                        if (d && "tt" === Object(r.b)(d)) p = function(e) {
                            e || u(306007);
                            var t = [],
                                i = e.getElementsByTagName("p"),
                                n = 30,
                                a = e.getElementsByTagName("tt");
                            if (a && a[0]) {
                                var o = parseFloat(a[0].getAttribute("ttp:frameRate"));
                                isNaN(o) || (n = o)
                            }
                            i || u(306005), i.length || (i = e.getElementsByTagName("tt:p")).length || (i = e.getElementsByTagName("tts:p"));
                            for (var r = 0; r < i.length; r++) {
                                for (var s = i[r], c = s.getElementsByTagName("br"), d = 0; d < c.length; d++) {
                                    var p = c[d];
                                    p.parentNode.replaceChild(e.createTextNode("\r\n"), p)
                                }
                                var f = s.innerHTML || s.textContent || s.text || "",
                                    h = Object(l.h)(f).replace(/>\s+</g, "><").replace(/(<\/?)tts?:/g, "$1").replace(/<br.*?\/>/g, "\r\n");
                                if (h) {
                                    var w = s.getAttribute("begin"),
                                        g = s.getAttribute("dur"),
                                        j = s.getAttribute("end"),
                                        v = { begin: Object(l.f)(w, n), text: h };
                                    j ? v.end = Object(l.f)(j, n) : g && (v.end = v.begin + Object(l.f)(g, n)), t.push(v)
                                }
                            }
                            return t.length || u(306005), t
                        }(e.responseXML), h = f(p), delete t.xhr, n(h);
                        else {
                            var w = e.responseText;
                            w.indexOf("WEBVTT") >= 0 ? i.e(16).then(function(e) { return i(137).default }.bind(null, i)).catch(Object(a.c)(301131)).then(function(e) {
                                var i = new e(window);
                                h = [], i.oncue = function(e) { h.push(e) }, i.onflush = function() { delete t.xhr, n(h) }, i.parse(w)
                            }).catch(function(e) { delete t.xhr, o(Object(c.A)(null, c.b, e)) }) : (p = Object(s.a)(w), h = f(p), delete t.xhr, n(h))
                        }
                    } catch (e) { delete t.xhr, o(Object(c.A)(null, c.b, e)) }
                }(o, e, t, n)
            }, function(e, t, i, a) { n(Object(c.z)(a, c.b)) })
        }

        function p(e) {
            e && e.forEach(function(e) {
                var t = e.xhr;
                t && (t.onload = null, t.onreadystatechange = null, t.onerror = null, "abort" in t && t.abort()), delete e.xhr
            })
        }

        function f(e) { return e.map(function(e) { return new n.a(e.begin, e.end, e.text) }) }
        i.d(t, "c", function() { return d }), i.d(t, "a", function() { return p }), i.d(t, "b", function() { return f })
    }, function(e, t, i) {
        "use strict";

        function n(e, t) { var i = e.kind || "cc"; return e.default || e.defaulttrack ? "default" : e._id || e.file || i + t }

        function a(e, t) { var i = e.label || e.name || e.language; return i || (i = "Unknown CC", (t += 1) > 1 && (i += " [" + t + "]")), { label: i, unknownCount: t } }
        i.d(t, "a", function() { return n }), i.d(t, "b", function() { return a })
    }, function(e, t, i) {
        "use strict";
        i.d(t, "a", function() { return a }), i.d(t, "b", function() { return o });
        var n = i(10);

        function a(e) { var t = 0; return e >= 1280 ? t = 7 : e >= 960 ? t = 6 : e >= 800 ? t = 5 : e >= 640 ? t = 4 : e >= 540 ? t = 3 : e >= 420 ? t = 2 : e >= 320 && (t = 1), t }

        function o(e, t) {
            var i = "jw-breakpoint-" + t;
            Object(n.m)(e, /jw-breakpoint-\d+/, i)
        }
    }, function(e, t, i) {
        "use strict";

        function n(e) {
            return new Promise(function(t, i) {
                if (e.paused) return i(a("NotAllowedError", 0, "play() failed."));
                var n = function() { e.removeEventListener("play", o), e.removeEventListener("playing", r), e.removeEventListener("pause", r), e.removeEventListener("abort", r), e.removeEventListener("error", r) },
                    o = function() { e.addEventListener("playing", r), e.addEventListener("abort", r), e.addEventListener("error", r), e.addEventListener("pause", r) },
                    r = function(e) {
                        if (n(), "playing" === e.type) t();
                        else { var o = 'The play() request was interrupted by a "' + e.type + '" event.'; "error" === e.type ? i(a("NotSupportedError", 9, o)) : i(a("AbortError", 20, o)) }
                    };
                e.addEventListener("play", o)
            })
        }

        function a(e, t, i) { var n = new Error(i); return n.name = e, n.code = t, n }
        i.d(t, "a", function() { return n })
    }, function(e, t, i) {
        "use strict";

        function n(e, t) { return e !== 1 / 0 && Math.abs(e) >= Math.max(o(t), 0) }

        function a(e, t) { var i = "VOD"; return e === 1 / 0 ? i = "LIVE" : e < 0 && (i = n(e, o(t)) ? "DVR" : "LIVE"), i }

        function o(e) { return void 0 === e ? 120 : Math.max(e, 0) }
        i.d(t, "a", function() { return n }), i.d(t, "b", function() { return a })
    }, function(e, t, i) {
        "use strict";
        t.a = "hidden" in document ? function() { return !document.hidden } : "webkitHidden" in document ? function() { return !document.webkitHidden } : function() { return !0 }
    }, function(e, t, i) {
        "use strict";
        i.d(t, "c", function() { return a }), i.d(t, "b", function() { return o }), i.d(t, "a", function() { return r });
        var n = { TIT2: "title", TT2: "title", WXXX: "url", TPE1: "artist", TP1: "artist", TALB: "album", TAL: "album" };

        function a(e, t) {
            for (var i = e.length, n = void 0, a = void 0, o = void 0, r = "", s = t || 0; s < i;)
                if (0 !== (n = e[s++]) && 3 !== n) switch (n >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        r += String.fromCharCode(n);
                        break;
                    case 12:
                    case 13:
                        a = e[s++], r += String.fromCharCode((31 & n) << 6 | 63 & a);
                        break;
                    case 14:
                        a = e[s++], o = e[s++], r += String.fromCharCode((15 & n) << 12 | (63 & a) << 6 | (63 & o) << 0)
                }
            return r
        }

        function o(e) { var t = function(e) { for (var t = "0x", i = 0; i < e.length; i++) e[i] < 16 && (t += "0"), t += e[i].toString(16); return parseInt(t) }(e); return 127 & t | (32512 & t) >> 1 | (8323072 & t) >> 2 | (2130706432 & t) >> 3 }

        function r() {
            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce(function(e, t) {
                if (!("value" in t) && "data" in t && t.data instanceof ArrayBuffer) {
                    var i = new Uint8Array(t.data),
                        r = i.length;
                    t = { value: { key: "", data: "" } };
                    for (var s = 10; s < 14 && s < i.length && 0 !== i[s];) t.value.key += String.fromCharCode(i[s]), s++;
                    var l = 19,
                        c = i[l];
                    3 !== c && 0 !== c || (c = i[++l], r--);
                    var u = 0;
                    if (1 !== c && 2 !== c)
                        for (var d = l + 1; d < r; d++)
                            if (0 === i[d]) { u = d - l; break }
                    if (u > 0) {
                        var p = a(i.subarray(l, l += u), 0);
                        if ("PRIV" === t.value.key) {
                            if ("com.apple.streaming.transportStreamTimestamp" === p) {
                                var f = 1 & o(i.subarray(l, l += 4)),
                                    h = o(i.subarray(l, l += 4)) + (f ? 4294967296 : 0);
                                t.value.data = h
                            } else t.value.data = a(i, l + 1);
                            t.value.info = p
                        } else t.value.info = p, t.value.data = a(i, l + 1)
                    } else {
                        var w = i[l];
                        t.value.data = 1 === w || 2 === w ? function(e, t) { for (var i = e.length - 1, n = "", a = t || 0; a < i;) 254 === e[a] && 255 === e[a + 1] || (n += String.fromCharCode((e[a] << 8) + e[a + 1])), a += 2; return n }(i, l + 1) : a(i, l + 1)
                    }
                }
                if (n.hasOwnProperty(t.value.key) && (e[n[t.value.key]] = t.value.data), t.value.info) {
                    var g = e[t.value.key];
                    g !== Object(g) && (g = {}, e[t.value.key] = g), g[t.value.info] = t.value.data
                } else e[t.value.key] = t.value.data;
                return e
            }, {})
        }
    }, function(e, t) { e.exports = '<svg class="jw-svg-icon jw-svg-icon-sharing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M175,160c-6.9,0.2-13.6,2.6-19,7l-62-39c0.8-2.6,1.2-5.3,1-8c0.2-2.7-0.2-5.4-1-8l62-39c5.4,4.4,12.1,6.8,19,7c16.3,0.3,29.7-12.6,30-28.9c0-0.4,0-0.7,0-1.1c0-16.5-13.5-30-30-30s-30,13.5-30,30c-0.2,2.7,0.2,5.4,1,8L84,97c-5.4-4.4-12.1-6.8-19-7c-16.5,0-30,13.5-30,30s13.5,30,30,30c6.9-0.2,13.6-2.6,19-7l62,39c-0.8,2.6-1.2,5.3-1,8c0,16.5,13.5,30,30,30s30-13.5,30-30S191.6,160,175,160z"></path></svg>' }, function(e, t, i) {
        "use strict";
        i.d(t, "a", function() { return a }), i.d(t, "b", function() { return o });
        var n = i(8);

        function a(e) { return window.WebGLRenderingContext && e.some(function(e) { return e.stereomode && e.stereomode.length > 0 }) }

        function o(e, t, a) {
            return i.e(13).then(function(n) {
                var a = new(0, i(78).default)(e, t);
                e.addPlugin("vr", a)
            }.bind(null, i)).catch(Object(n.c)(301132)).catch(function(e) { a.trigger("warning", e) })
        }
    }, function(e, t, i) {
        "use strict";
        var n = i(68),
            a = i(69),
            o = i(74),
            r = i(7),
            s = i(3),
            l = i(0),
            c = {
                _itemTracks: null,
                _textTracks: null,
                _tracksById: null,
                _cuesByTrackId: null,
                _cachedVTTCues: null,
                _metaCuesByTextTime: null,
                _currentTextTrackIndex: -1,
                _unknownCount: 0,
                _activeCuePosition: null,
                _initTextTracks: function() { this._textTracks = [], this._tracksById = {}, this._metaCuesByTextTime = {}, this._cuesByTrackId = {}, this._cachedVTTCues = {}, this._unknownCount = 0 },
                addTracksListener: function(e, t, i) {
                    if (!e) return;
                    if (u(e, t, i), this.instreamMode) return;
                    e.addEventListener ? e.addEventListener(t, i) : e["on" + t] = i
                },
                clearTracks: function() {
                    Object(n.a)(this._itemTracks);
                    var e = this._tracksById && this._tracksById.nativemetadata;
                    (this.renderNatively || e) && (f(this.renderNatively, this.video.textTracks), e && (e.oncuechange = null));
                    this._itemTracks = null, this._textTracks = null, this._tracksById = null, this._cuesByTrackId = null, this._metaCuesByTextTime = null, this._unknownCount = 0, this._currentTextTrackIndex = -1, this._activeCuePosition = null, this.renderNatively && (this.removeTracksListener(this.video.textTracks, "change", this.textTrackChangeHandler), f(this.renderNatively, this.video.textTracks))
                },
                clearCueData: function(e) {
                    var t = this._cachedVTTCues;
                    t && t[e] && (t[e] = {}, this._tracksById && (this._tracksById[e].data = []))
                },
                disableTextTrack: function() {
                    if (this._textTracks) {
                        var e = this._textTracks[this._currentTextTrackIndex];
                        if (e) {
                            e.mode = "disabled";
                            var t = e._id;
                            t && 0 === t.indexOf("nativecaptions") && (e.mode = "hidden")
                        }
                    }
                },
                enableTextTrack: function() {
                    if (this._textTracks) {
                        var e = this._textTracks[this._currentTextTrackIndex];
                        e && (e.mode = "showing")
                    }
                },
                getSubtitlesTrack: function() { return this._currentTextTrackIndex },
                removeTracksListener: u,
                addTextTracks: d,
                setTextTracks: function(e) {
                    if (this._currentTextTrackIndex = -1, !e) return;
                    this._textTracks ? (this._unknownCount = 0, this._textTracks = this._textTracks.filter(function(e) { var t = e._id; return this.renderNatively && t && 0 === t.indexOf("nativecaptions") ? (delete this._tracksById[t], !1) : (e.name && 0 === e.name.indexOf("Unknown") && this._unknownCount++, !0) }, this), delete this._tracksById.nativemetadata) : this._initTextTracks();
                    if (e.length)
                        for (var t = 0, i = e.length; t < i; t++) {
                            var n = e[t];
                            if (!n._id) {
                                if ("captions" === n.kind || "metadata" === n.kind) {
                                    if (n._id = "native" + n.kind + t, !n.label && "captions" === n.kind) {
                                        var o = Object(a.b)(n, this._unknownCount);
                                        n.name = o.label, this._unknownCount = o.unknownCount
                                    }
                                } else n._id = Object(a.a)(n, this._textTracks.length);
                                if (this._tracksById[n._id]) continue;
                                n.inuse = !0
                            }
                            if (n.inuse && !this._tracksById[n._id])
                                if ("metadata" === n.kind) n.mode = "hidden", n.oncuechange = j.bind(this), this._tracksById[n._id] = n;
                                else if (h(n.kind)) {
                                var s = n.mode,
                                    c = void 0;
                                if (n.mode = "hidden", !n.cues.length && n.embedded) continue;
                                if (n.mode = s, this._cuesByTrackId[n._id] && !this._cuesByTrackId[n._id].loaded) {
                                    for (var u = this._cuesByTrackId[n._id].cues; c = u.shift();) p(this.renderNatively, n, c);
                                    n.mode = s, this._cuesByTrackId[n._id].loaded = !0
                                }
                                g.call(this, n)
                            }
                        }
                    this.renderNatively && (this.textTrackChangeHandler = this.textTrackChangeHandler || function() {
                        var e = this.video.textTracks,
                            t = Object(l.k)(e, function(e) { return (e.inuse || !e._id) && h(e.kind) });
                        if (!this._textTracks || function(e) { if (e.length > this._textTracks.length) return !0; for (var t = 0; t < e.length; t++) { var i = e[t]; if (!i._id || !this._tracksById[i._id]) return !0 } return !1 }.call(this, t)) return void this.setTextTracks(e);
                        for (var i = -1, n = 0; n < this._textTracks.length; n++)
                            if ("showing" === this._textTracks[n].mode) { i = n; break }
                        i !== this._currentTextTrackIndex && this.setSubtitlesTrack(i + 1)
                    }.bind(this), this.addTracksListener(this.video.textTracks, "change", this.textTrackChangeHandler), (r.Browser.edge || r.Browser.firefox || r.Browser.safari) && (this.addTrackHandler = this.addTrackHandler || function() { this.setTextTracks(this.video.textTracks) }.bind(this), this.addTracksListener(this.video.textTracks, "addtrack", this.addTrackHandler)));
                    this._textTracks.length && this.trigger("subtitlesTracks", { tracks: this._textTracks })
                },
                setupSideloadedTracks: function(e) {
                    if (!this.renderNatively) return;
                    var t = e === this._itemTracks;
                    t || Object(n.a)(this._itemTracks);
                    if (this._itemTracks = e, !e) return;
                    t || (this.disableTextTrack(), function() {
                        if (!this._textTracks) return;
                        var e = this._textTracks.filter(function(e) { return e.embedded || "subs" === e.groupid });
                        this._initTextTracks(), e.forEach(function(e) { this._tracksById[e._id] = e }), this._textTracks = e
                    }.call(this), this.addTextTracks(e))
                },
                setSubtitlesTrack: function(e) {
                    if (!this.renderNatively) return void(this.setCurrentSubtitleTrack && this.setCurrentSubtitleTrack(e - 1));
                    if (!this._textTracks) return;
                    0 === e && this._textTracks.forEach(function(e) { e.mode = e.embedded ? "hidden" : "disabled" });
                    if (this._currentTextTrackIndex === e - 1) return;
                    this.disableTextTrack(), this._currentTextTrackIndex = e - 1, this._textTracks[this._currentTextTrackIndex] && (this._textTracks[this._currentTextTrackIndex].mode = "showing");
                    this.trigger("subtitlesTrackChanged", { currentTrack: this._currentTextTrackIndex + 1, tracks: this._textTracks })
                },
                textTrackChangeHandler: null,
                addTrackHandler: null,
                addCuesToTrack: function(e) {
                    var t = this._tracksById[e.name];
                    if (!t) return;
                    t.source = e.source;
                    for (var i = e.captions || [], a = [], o = !1, r = 0; r < i.length; r++) {
                        var s = i[r],
                            l = e.name + "_" + s.begin + "_" + s.end;
                        this._metaCuesByTextTime[l] || (this._metaCuesByTextTime[l] = s, a.push(s), o = !0)
                    }
                    o && a.sort(function(e, t) { return e.begin - t.begin });
                    var c = Object(n.b)(a);
                    Array.prototype.push.apply(t.data, c)
                },
                addCaptionsCue: function(e) {
                    if (!e.text || !e.begin || !e.end) return;
                    var t = e.trackid.toString(),
                        i = this._tracksById && this._tracksById[t];
                    i || (i = { kind: "captions", _id: t, data: [] }, this.addTextTracks([i]), this.trigger("subtitlesTracks", { tracks: this._textTracks }));
                    var a = void 0;
                    e.useDTS && (i.source || (i.source = e.source || "mpegts"));
                    a = e.begin + "_" + e.text;
                    var o = this._metaCuesByTextTime[a];
                    if (!o) {
                        o = { begin: e.begin, end: e.end, text: e.text }, this._metaCuesByTextTime[a] = o;
                        var r = Object(n.b)([o])[0];
                        i.data.push(r)
                    }
                },
                addVTTCue: function(e) {
                    this._tracksById || this._initTextTracks();
                    var t = e.track ? e.track : "native" + e.type,
                        i = this._tracksById[t],
                        n = "captions" === e.type ? "Unknown CC" : "ID3 Metadata",
                        a = e.cue;
                    if (!i) {
                        var o = { kind: e.type, _id: t, label: n, embedded: !0 };
                        i = w.call(this, o), this.renderNatively || "metadata" === i.kind ? this.setTextTracks(this.video.textTracks) : d.call(this, [i])
                    }(function(e, t) {
                        var i = e.kind;
                        this._cachedVTTCues[e._id] || (this._cachedVTTCues[e._id] = {});
                        var n = this._cachedVTTCues[e._id],
                            a = void 0;
                        switch (i) {
                            case "captions":
                            case "subtitles":
                                a = Math.floor(20 * t.startTime);
                                var o = "_" + t.line,
                                    r = Math.floor(20 * t.endTime),
                                    s = n[a + o] || n[a + 1 + o] || n[a - 1 + o];
                                return !(s && Math.abs(s - r) <= 1) && (n[a + o] = r, !0);
                            case "metadata":
                                var l = t.data ? new Uint8Array(t.data).join("") : t.text;
                                return a = t.startTime + l, n[a] ? !1 : (n[a] = t.endTime, !0);
                            default:
                                return !1
                        }
                    }).call(this, i, a) && (this.renderNatively || "metadata" === i.kind ? p(this.renderNatively, i, a) : i.data.push(a))
                },
                addVTTCuesToTrack: function(e, t) {
                    if (!this.renderNatively) return;
                    var i = this._tracksById[e._id];
                    if (!i) return this._cuesByTrackId || (this._cuesByTrackId = {}), void(this._cuesByTrackId[e._id] = { cues: t, loaded: !1 });
                    if (this._cuesByTrackId[e._id] && this._cuesByTrackId[e._id].loaded) return;
                    var n = void 0;
                    this._cuesByTrackId[e._id] = { cues: t, loaded: !0 };
                    for (; n = t.shift();) p(this.renderNatively, i, n)
                },
                renderNatively: !1
            };

        function u(e, t, i) { e && (e.removeEventListener ? e.removeEventListener(t, i) : e["on" + t] = null) }

        function d(e) {
            var t = this;
            e && (this._textTracks || this._initTextTracks(), e.forEach(function(e) {
                if (!e.kind || h(e.kind)) {
                    var i = w.call(t, e);
                    g.call(t, i), e.file && (e.data = [], Object(n.c)(e, function(e) { t.addVTTCuesToTrack(i, e) }, function(e) { t.trigger(s.Ta, e) }))
                }
            }), this._textTracks && this._textTracks.length && this.trigger("subtitlesTracks", { tracks: this._textTracks }))
        }

        function p(e, t, i) {
            if (r.Browser.ie && e && window.TextTrackCue) {
                var n = new window.TextTrackCue(i.startTime, i.endTime, i.text);
                t.addCue(n)
            } else t.addCue(i)
        }

        function f(e, t) {
            t && t.length && Object(l.i)(t, function(t) {
                if (!(r.Browser.ie && e && /^(native|subtitle|cc)/.test(t._id))) {
                    t.mode = "disabled", t.mode = "hidden";
                    for (var i = t.cues.length; i--;) t.removeCue(t.cues[i]);
                    t.embedded || (t.mode = "disabled"), t.inuse = !1
                }
            })
        }

        function h(e) { return "subtitles" === e || "captions" === e }

        function w(e) {
            var t = void 0,
                i = Object(a.b)(e, this._unknownCount),
                n = i.label;
            if (this._unknownCount = i.unknownCount, this.renderNatively || "metadata" === e.kind) {
                var o = this.video.textTracks;
                (t = Object(l.m)(o, { label: n })) || (t = this.video.addTextTrack(e.kind, n, e.language || "")), t.default = e.default, t.mode = "disabled", t.inuse = !0
            } else(t = e).data = t.data || [];
            return t._id || (t._id = Object(a.a)(e, this._textTracks.length)), t
        }

        function g(e) { this._textTracks.push(e), this._tracksById[e._id] = e }

        function j(e) {
            var t = e.currentTarget.activeCues;
            if (t && t.length) {
                var i = t[t.length - 1].startTime;
                if (this._activeCuePosition !== i) {
                    var n = [];
                    if (Object(l.i)(t, function(e) { e.startTime < i || (e.data || e.value ? n.push(e) : e.text && this.trigger("meta", { metadataTime: i, metadata: JSON.parse(e.text) })) }, this), n.length) {
                        var a = Object(o.a)(n);
                        this.trigger("meta", { metadataTime: i, metadata: a })
                    }
                    this._activeCuePosition = i
                }
            }
        }
        t.a = c
    }, , function(e, t, i) {
        "use strict";

        function n(e) { return e && e.length ? e.end(e.length - 1) : 0 }
        i.d(t, "a", function() { return n })
    }, function(e, t, i) {
        "use strict";
        i.d(t, "a", function() { return o });
        var n = i(65),
            a = void 0;

        function o(e, t, i) {
            var o = function() { try { a = window.localStorage.jwplayerLocalId } catch (e) {} return a = a || Object(n.b)(12) }();
            e.forEach(function(e) {
                var n = e.variations;
                if (n && n[t]) {
                    n.selected = n.selected || {};
                    var a = function(e, t) { for (var i = function(e) { for (var t = 1794770992, i = 0, n = e.length; i < n; i++) t ^= e.charCodeAt(i), t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24); return t >>> 0 }(e) % 2520, n = t.reduce(function(e, t) { return e + t.weight }, 0), a = 0, o = 0; o < t.length; o++) { var r = t[o]; if ((a += 2520 * r.weight / n) > i) return r } }(o, n[t]),
                        r = a[i];
                    r && (e[i] = r, n.selected[t] = a)
                }
            })
        }
    }, function(e, t, i) {
        "use strict";
        var n = i(73),
            a = i(66),
            o = i(7),
            r = [],
            s = [],
            l = {},
            c = "screen" in window && "orientation" in window.screen,
            u = o.OS.android && o.Browser.chrome,
            d = void 0,
            p = -1;

        function f(e, t) { for (var i = t.length; i--;) { var n = t[i]; if (e.target === n.getContainer()) { n.setIntersection(e); break } } }

        function h() { Object(a.a)(p), p = Object(a.b)(function() { r.forEach(function(e) { e.updateBounds() }), r.forEach(function(e) { e.model.get("visibility") && e.updateStyles() }), r.forEach(function(e) { e.checkResized() }) }) }

        function w() {
            r.forEach(function(e) {
                var t = e.model;
                if (!(t.get("audioMode") || !t.get("controls") || t.get("visibility") < .75)) {
                    var i = t.get("state"),
                        n = window.screen.orientation.type,
                        a = "landscape-primary" === n || "landscape-secondary" === n;
                    !a && "paused" === i && e.api.getFullscreen() ? e.api.setFullscreen(!1) : "playing" === i && e.api.setFullscreen(a)
                }
            })
        }

        function g() { r.forEach(function(e) { e.model.set("activeTab", Object(n.a)()) }) }

        function j(e, t) { var i = t.indexOf(e); - 1 !== i && t.splice(i, 1) }
        document.addEventListener("visibilitychange", g), document.addEventListener("webkitvisibilitychange", g), window.addEventListener("resize", h), window.addEventListener("orientationchange", h), u && c && window.screen.orientation.addEventListener("change", w), window.addEventListener("beforeunload", function() { document.removeEventListener("visibilitychange", g), document.removeEventListener("webkitvisibilitychange", g), window.removeEventListener("resize", h), window.removeEventListener("orientationchange", h), u && c && window.screen.orientation.removeEventListener("change", w) }), t.a = {
            add: function(e) { r.push(e) },
            remove: function(e) { j(e, r) },
            addWidget: function(e) { s.push(e) },
            removeWidget: function(e) { j(e, s) },
            size: function() { return r.length },
            observe: function(e) {
                ! function() {
                    var e = window.IntersectionObserver;
                    d || (d = new e(function(e) {
                        if (e && e.length)
                            for (var t = e.length; t--;) {
                                var i = e[t];
                                f(i, r), f(i, s)
                            }
                    }, { threshold: [0, .25, .5, .75, 1] }))
                }(), l[e.id] || (l[e.id] = !0, d.observe(e))
            },
            unobserve: function(e) { d && l[e.id] && (delete l[e.id], d.unobserve(e)) }
        }
    }, function(e, t) { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-jwplayer-logo" viewBox="0 0 992 1024" focusable="false"><path d="M144 518.4c0 6.4-6.4 6.4-6.4 0l-3.2-12.8c0 0-6.4-19.2-12.8-38.4 0-6.4-6.4-12.8-9.6-22.4-6.4-6.4-16-9.6-28.8-6.4-9.6 3.2-16 12.8-16 22.4s0 16 0 25.6c3.2 25.6 22.4 121.6 32 140.8 9.6 22.4 35.2 32 54.4 22.4 22.4-9.6 28.8-35.2 38.4-54.4 9.6-25.6 60.8-166.4 60.8-166.4 6.4-12.8 9.6-12.8 9.6 0 0 0 0 140.8-3.2 204.8 0 25.6 0 67.2 9.6 89.6 6.4 16 12.8 28.8 25.6 38.4s28.8 12.8 44.8 12.8c6.4 0 16-3.2 22.4-6.4 9.6-6.4 16-12.8 25.6-22.4 16-19.2 28.8-44.8 38.4-64 25.6-51.2 89.6-201.6 89.6-201.6 6.4-12.8 9.6-12.8 9.6 0 0 0-9.6 256-9.6 355.2 0 25.6 6.4 48 12.8 70.4 9.6 22.4 22.4 38.4 44.8 48s48 9.6 70.4-3.2c16-9.6 28.8-25.6 38.4-38.4 12.8-22.4 25.6-48 32-70.4 19.2-51.2 35.2-102.4 51.2-153.6s153.6-540.8 163.2-582.4c0-6.4 0-9.6 0-12.8 0-9.6-6.4-19.2-16-22.4-16-6.4-32 0-38.4 12.8-6.4 16-195.2 470.4-195.2 470.4-6.4 12.8-9.6 12.8-9.6 0 0 0 0-156.8 0-288 0-70.4-35.2-108.8-83.2-118.4-22.4-3.2-44.8 0-67.2 12.8s-35.2 32-48 54.4c-16 28.8-105.6 297.6-105.6 297.6-6.4 12.8-9.6 12.8-9.6 0 0 0-3.2-115.2-6.4-144-3.2-41.6-12.8-108.8-67.2-115.2-51.2-3.2-73.6 57.6-86.4 99.2-9.6 25.6-51.2 163.2-51.2 163.2v3.2z"></path></svg>' }, function(e, t) { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-close" viewBox="0 0 240 240" focusable="false"><path d="M134.8,120l48.6-48.6c2-1.9,2.1-5.2,0.2-7.2c0,0-0.1-0.1-0.2-0.2l-7.4-7.4c-1.9-2-5.2-2.1-7.2-0.2c0,0-0.1,0.1-0.2,0.2L120,105.2L71.4,56.6c-1.9-2-5.2-2.1-7.2-0.2c0,0-0.1,0.1-0.2,0.2L56.6,64c-2,1.9-2.1,5.2-0.2,7.2c0,0,0.1,0.1,0.2,0.2l48.6,48.7l-48.6,48.6c-2,1.9-2.1,5.2-0.2,7.2c0,0,0.1,0.1,0.2,0.2l7.4,7.4c1.9,2,5.2,2.1,7.2,0.2c0,0,0.1-0.1,0.2-0.2l48.7-48.6l48.6,48.6c1.9,2,5.2,2.1,7.2,0.2c0,0,0.1-0.1,0.2-0.2l7.4-7.4c2-1.9,2.1-5.2,0.2-7.2c0,0-0.1-0.1-0.2-0.2L134.8,120z"></path></svg>' }, function(e, t) { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-fullscreen-on" viewBox="0 0 240 240" focusable="false"><path d="M96.3,186.1c1.9,1.9,1.3,4-1.4,4.4l-50.6,8.4c-1.8,0.5-3.7-0.6-4.2-2.4c-0.2-0.6-0.2-1.2,0-1.7l8.4-50.6c0.4-2.7,2.4-3.4,4.4-1.4l14.5,14.5l28.2-28.2l14.3,14.3l-28.2,28.2L96.3,186.1z M195.8,39.1l-50.6,8.4c-2.7,0.4-3.4,2.4-1.4,4.4l14.5,14.5l-28.2,28.2l14.3,14.3l28.2-28.2l14.5,14.5c1.9,1.9,4,1.3,4.4-1.4l8.4-50.6c0.5-1.8-0.6-3.6-2.4-4.2C197,39,196.4,39,195.8,39.1L195.8,39.1z"></path></svg>' }, function(e, t) { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-fullscreen-off" viewBox="0 0 240 240" focusable="false"><path d="M109.2,134.9l-8.4,50.1c-0.4,2.7-2.4,3.3-4.4,1.4L82,172l-27.9,27.9l-14.2-14.2l27.9-27.9l-14.4-14.4c-1.9-1.9-1.3-3.9,1.4-4.4l50.1-8.4c1.8-0.5,3.6,0.6,4.1,2.4C109.4,133.7,109.4,134.3,109.2,134.9L109.2,134.9z M172.1,82.1L200,54.2L185.8,40l-27.9,27.9l-14.4-14.4c-1.9-1.9-3.9-1.3-4.4,1.4l-8.4,50.1c-0.5,1.8,0.6,3.6,2.4,4.1c0.5,0.2,1.2,0.2,1.7,0l50.1-8.4c2.7-0.4,3.3-2.4,1.4-4.4L172.1,82.1z"></path></svg>' }, function(e, t) { e.exports = '<svg class="jw-svg-icon jw-svg-icon-quality-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M55,200H35c-3,0-5-2-5-4c0,0,0,0,0-1v-30c0-3,2-5,4-5c0,0,0,0,1,0h20c3,0,5,2,5,4c0,0,0,0,0,1v30C60,198,58,200,55,200L55,200z M110,195v-70c0-3-2-5-4-5c0,0,0,0-1,0H85c-3,0-5,2-5,4c0,0,0,0,0,1v70c0,3,2,5,4,5c0,0,0,0,1,0h20C108,200,110,198,110,195L110,195z M160,195V85c0-3-2-5-4-5c0,0,0,0-1,0h-20c-3,0-5,2-5,4c0,0,0,0,0,1v110c0,3,2,5,4,5c0,0,0,0,1,0h20C158,200,160,198,160,195L160,195z M210,195V45c0-3-2-5-4-5c0,0,0,0-1,0h-20c-3,0-5,2-5,4c0,0,0,0,0,1v150c0,3,2,5,4,5c0,0,0,0,1,0h20C208,200,210,198,210,195L210,195z"></path></svg>' }, function(e, t) { e.exports = '<svg class="jw-svg-icon jw-svg-icon-audio-tracks" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M35,34h160v20H35V34z M35,94h160V74H35V94z M35,134h60v-20H35V134z M160,114c-23.4-1.3-43.6,16.5-45,40v50h20c5.2,0.3,9.7-3.6,10-8.9c0-0.4,0-0.7,0-1.1v-20c0.3-5.2-3.6-9.7-8.9-10c-0.4,0-0.7,0-1.1,0h-10v-10c1.5-17.9,17.1-31.3,35-30c17.9-1.3,33.6,12.1,35,30v10H185c-5.2-0.3-9.7,3.6-10,8.9c0,0.4,0,0.7,0,1.1v20c-0.3,5.2,3.6,9.7,8.9,10c0.4,0,0.7,0,1.1,0h20v-50C203.5,130.6,183.4,112.7,160,114z"></path></svg>' }, function(e, t) { e.exports = '<svg class="jw-svg-icon jw-svg-icon-settings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M204,145l-25-14c0.8-3.6,1.2-7.3,1-11c0.2-3.7-0.2-7.4-1-11l25-14c2.2-1.6,3.1-4.5,2-7l-16-26c-1.2-2.1-3.8-2.9-6-2l-25,14c-6-4.2-12.3-7.9-19-11V35c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6v28c-6.7,3.1-13,6.7-19,11L56,60c-2.2-0.9-4.8-0.1-6,2L35,88c-1.6,2.2-1.3,5.3,0.9,6.9c0,0,0.1,0,0.1,0.1l25,14c-0.8,3.6-1.2,7.3-1,11c-0.2,3.7,0.2,7.4,1,11l-25,14c-2.2,1.6-3.1,4.5-2,7l16,26c1.2,2.1,3.8,2.9,6,2l25-14c5.7,4.6,12.2,8.3,19,11v28c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6v-28c7-2.3,13.5-6,19-11l25,14c2.5,1.3,5.6,0.4,7-2l15-26C206.7,149.4,206,146.7,204,145z M120,149.9c-16.5,0-30-13.4-30-30s13.4-30,30-30s30,13.4,30,30c0.3,16.3-12.6,29.7-28.9,30C120.7,149.9,120.4,149.9,120,149.9z"></path></svg>' }, function(e, t) { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-playback-rate" viewBox="0 0 240 240" focusable="false"><path d="M158.83,48.83A71.17,71.17,0,1,0,230,120,71.163,71.163,0,0,0,158.83,48.83Zm45.293,77.632H152.34V74.708h12.952v38.83h38.83ZM35.878,74.708h38.83V87.66H35.878ZM10,113.538H61.755V126.49H10Zm25.878,38.83h38.83V165.32H35.878Z"></path></svg>' }, function(e, t) { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-airplay-off" viewBox="0 0 240 240" focusable="false"><path d="M210,55v100h-50l20,20h45c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6V40c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0H15c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6v130c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h45l20-20H30V55H210 M60,205l60-70l60,70H60L60,205z"></path></svg>' }, function(e, t) { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-airplay-on" viewBox="0 0 240 240" focusable="false"><path d="M229.9,40v130c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0h-44l-17-20h46V55H30v100h47l-17,20h-45c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V40c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h209.8c2.6-0.2,4.8,1.8,5,4.4C229.9,39.7,229.9,39.9,229.9,40z M104.9,122l15-18l15,18l11,13h44V75H50v60h44L104.9,122z M179.9,205l-60-70l-60,70H179.9z"></path></svg>' }, function(e, t) { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-cc-off" viewBox="0 0 240 240" focusable="false"><path d="M99.4,97.8c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6c0,9.6,11.6,11.4,17.7,5.5c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9C107.9,100,103.8,97.8,99.4,97.8z M144.1,97.8c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6c0,9.6,11.6,11.4,17.7,5.5c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9C152.6,100,148.5,97.8,144.1,97.8L144.1,97.8z M200,60v120H40V60H200 M215,40H25c-2.7,0-5,2.2-5,5v150c0,2.7,2.2,5,5,5h190c2.7,0,5-2.2,5-5V45C220,42.2,217.8,40,215,40z"></path></svg>' }, function(e, t) { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-cc-on" viewBox="0 0 240 240" focusable="false"><path d="M215,40H25c-2.7,0-5,2.2-5,5v150c0,2.7,2.2,5,5,5h190c2.7,0,5-2.2,5-5V45C220,42.2,217.8,40,215,40z M108.1,137.7c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9c-2.4-3.7-6.5-5.9-10.9-5.9c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6C90.4,141.7,102,143.5,108.1,137.7z M152.9,137.7c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9c-2.4-3.7-6.5-5.9-10.9-5.9c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6C135.2,141.7,146.8,143.5,152.9,137.7z"></path></svg>' }, function(e, t) { e.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.5,42.8v154.4c0,2.8-1.7,3.6-3.8,1.7l-54.1-48H29c-2.8,0-5.2-2.3-5.2-5.2V94.3c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48C114.8,39.2,116.5,39.9,116.5,42.8z"></path><path d="M136.2,160v-20c11.1,0,20-8.9,20-20s-8.9-20-20-20V80c22.1,0,40,17.9,40,40S158.3,160,136.2,160z"></path><path d="M216.2,120c0-44.2-35.8-80-80-80v20c33.1,0,60,26.9,60,60s-26.9,60-60,60v20C180.4,199.9,216.1,164.1,216.2,120z"></path></svg>' }, function(e, t) { e.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.4,42.8v154.5c0,2.8-1.7,3.6-3.8,1.7l-54.1-48.1H28.9c-2.8,0-5.2-2.3-5.2-5.2V94.2c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48.1C114.7,39.1,116.4,39.9,116.4,42.8z M178.2,120c0-22.7-18.5-41.2-41.2-41.2v20.6c11.4,0,20.6,9.2,20.6,20.6c0,11.4-9.2,20.6-20.6,20.6v20.6C159.8,161.2,178.2,142.7,178.2,120z"></path></svg>' }, function(e, t) { e.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.4,42.8v154.5c0,2.8-1.7,3.6-3.8,1.7l-54.1-48.1H28.9c-2.8,0-5.2-2.3-5.2-5.2V94.2c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48.1C114.6,39.1,116.4,39.9,116.4,42.8z M212.3,96.4l-14.6-14.6l-23.6,23.6l-23.6-23.6l-14.6,14.6l23.6,23.6l-23.6,23.6l14.6,14.6l23.6-23.6l23.6,23.6l14.6-14.6L188.7,120L212.3,96.4z"></path></svg>' }, function(e, t) { e.exports = '<svg class="jw-svg-icon jw-svg-icon-stop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M190,185c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0H55c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V55c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h130c2.6-0.2,4.8,1.8,5,4.4c0,0.2,0,0.4,0,0.6V185z"></path></svg>' }, function(e, t) { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-next" viewBox="0 0 240 240" focusable="false"><path d="M165,60v53.3L59.2,42.8C56.9,41.3,55,42.3,55,45v150c0,2.7,1.9,3.8,4.2,2.2L165,126.6v53.3h20v-120L165,60L165,60z"></path></svg>' }, function(e, t) { e.exports = '<svg class="jw-svg-icon jw-svg-icon-rewind" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M113.2,131.078a21.589,21.589,0,0,0-17.7-10.6,21.589,21.589,0,0,0-17.7,10.6,44.769,44.769,0,0,0,0,46.3,21.589,21.589,0,0,0,17.7,10.6,21.589,21.589,0,0,0,17.7-10.6,44.769,44.769,0,0,0,0-46.3Zm-17.7,47.2c-7.8,0-14.4-11-14.4-24.1s6.6-24.1,14.4-24.1,14.4,11,14.4,24.1S103.4,178.278,95.5,178.278Zm-43.4,9.7v-51l-4.8,4.8-6.8-6.8,13-13a4.8,4.8,0,0,1,8.2,3.4v62.7l-9.6-.1Zm162-130.2v125.3a4.867,4.867,0,0,1-4.8,4.8H146.6v-19.3h48.2v-96.4H79.1v19.3c0,5.3-3.6,7.2-8,4.3l-41.8-27.9a6.013,6.013,0,0,1-2.7-8,5.887,5.887,0,0,1,2.7-2.7l41.8-27.9c4.4-2.9,8-1,8,4.3v19.3H209.2A4.974,4.974,0,0,1,214.1,57.778Z"></path></svg>' }, function(e, t) { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-pause" viewBox="0 0 240 240" focusable="false"><path d="M100,194.9c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0H65c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V45c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h30c2.6-0.2,4.8,1.8,5,4.4c0,0.2,0,0.4,0,0.6V194.9z M180,45.1c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6V195c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6V45.1z"></path></svg>' }, function(e, t) { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-play" viewBox="0 0 240 240" focusable="false"><path d="M62.8,199.5c-1,0.8-2.4,0.6-3.3-0.4c-0.4-0.5-0.6-1.1-0.5-1.8V42.6c-0.2-1.3,0.7-2.4,1.9-2.6c0.7-0.1,1.3,0.1,1.9,0.4l154.7,77.7c2.1,1.1,2.1,2.8,0,3.8L62.8,199.5z"></path></svg>' }, function(e, t) { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-error" viewBox="0 0 36 36" style="width:100%;height:100%;" focusable="false"><path d="M34.6 20.2L10 33.2 27.6 16l7 3.7a.4.4 0 0 1 .2.5.4.4 0 0 1-.2.2zM33.3 0L21 12.2 9 6c-.2-.3-.6 0-.6.5V25L0 33.6 2.5 36 36 2.7z"></path></svg>' }, function(e, t) { e.exports = '<svg class="jw-svg-icon jw-svg-icon-replay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M120,41.9v-20c0-5-4-8-8-4l-44,28a5.865,5.865,0,0,0-3.3,7.6A5.943,5.943,0,0,0,68,56.8l43,29c5,4,9,1,9-4v-20a60,60,0,1,1-60,60H40a80,80,0,1,0,80-79.9Z"></path></svg>' }, function(e, t) { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-buffer" viewBox="0 0 240 240" focusable="false"><path d="M120,186.667a66.667,66.667,0,0,1,0-133.333V40a80,80,0,1,0,80,80H186.667A66.846,66.846,0,0,1,120,186.667Z"></path></svg>' }, function(e, t, i) {
        "use strict";

        function n(e) { return { bitrate: e.bitrate, label: e.label, width: e.width, height: e.height } }
        i.d(t, "a", function() { return n })
    }, function(e, t, i) {
        (e.exports = i(63)(!1)).push([e.i, ".jw-flag-outstream.jw-state-complete .jw-controls,.jw-flag-outstream.jw-state-complete .jw-controls-backdrop{display:none}.jw-flag-outstream.jw-state-complete .jw-media{pointer-events:none}.jw-flag-outstream.jw-state-complete .jw-preview{background-color:#f2f2f2}.jw-flag-outstream .jw-wrapper{transition:-webkit-transform 250ms cubic-bezier(0, .25, .25, 1);transition:transform 250ms cubic-bezier(0, .25, .25, 1);transition:transform 250ms cubic-bezier(0, .25, .25, 1), -webkit-transform 250ms cubic-bezier(0, .25, .25, 1)}.jw-flag-outstream .jw-dismiss-icon{position:absolute;right:0;bottom:0}.jw-flag-outstream .jw-dismiss-icon~.jw-float-icon{display:none}.jw-flag-outstream-pending{max-height:1px}.jw-flag-outstream-pending.jw-flag-top{margin-top:0;overflow:hidden}.jw-flag-outstream-pending .jw-wrapper{-webkit-transform:scaleY(0);transform:scaleY(0)}", ""])
    }, function(e, t, i) {
        var n = i(106);
        "string" == typeof n && (n = [
            ["all-players", n, ""]
        ]), i(41).style(n, "all-players"), n.locals && (e.exports = n.locals)
    }, function(e, t, i) {
        (e.exports = i(63)(!1)).push([e.i, '.jw-reset{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-align:left;text-transform:none;vertical-align:baseline;border:0;direction:ltr;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}body .jw-error,body .jwplayer.jw-state-error{height:100%;width:100%}.jw-title{position:absolute;top:0}.jw-background-color{background:rgba(0,0,0,0.4)}.jw-text{color:rgba(255,255,255,0.8)}.jw-knob{color:rgba(255,255,255,0.8);background-color:#fff}.jw-button-color{color:rgba(255,255,255,0.8)}:not(.jw-flag-touch) .jw-button-color:not(.jw-logo-button):focus,:not(.jw-flag-touch) .jw-button-color:not(.jw-logo-button):hover{outline:none;color:#fff}.jw-toggle{color:#fff}.jw-toggle.jw-off{color:rgba(255,255,255,0.8)}.jw-toggle.jw-off:focus{color:#fff}.jw-toggle:focus{outline:none}:not(.jw-flag-touch) .jw-toggle.jw-off:hover{color:#fff}.jw-rail{background:rgba(255,255,255,0.3)}.jw-buffer{background:rgba(255,255,255,0.3)}.jw-progress{background:#f2f2f2}.jw-time-tip,.jw-volume-tip{border:0}.jw-slider-volume.jw-volume-tip.jw-background-color.jw-slider-vertical{background:none}.jw-skip{padding:.5em;outline:none}.jw-skip .jw-skiptext,.jw-skip .jw-skip-icon{color:rgba(255,255,255,0.8)}.jw-skip.jw-skippable:hover .jw-skip-icon,.jw-skip.jw-skippable:focus .jw-skip-icon{color:#fff}.jw-icon-cast google-cast-launcher{--connected-color:#fff;--disconnected-color:rgba(255,255,255,0.8)}.jw-icon-cast google-cast-launcher:focus{outline:none}.jw-icon-cast google-cast-launcher.jw-off{--connected-color:rgba(255,255,255,0.8)}.jw-icon-cast:focus google-cast-launcher{--connected-color:#fff;--disconnected-color:#fff}.jw-icon-cast:hover google-cast-launcher{--connected-color:#fff;--disconnected-color:#fff}.jw-nextup-container{bottom:2.5em;padding:5px .5em}.jw-nextup{border-radius:0}.jw-color-active{color:#fff;stroke:#fff;border-color:#fff}:not(.jw-flag-touch) .jw-color-active-hover:hover,:not(.jw-flag-touch) .jw-color-active-hover:focus{color:#fff;stroke:#fff;border-color:#fff}.jw-color-inactive{color:rgba(255,255,255,0.8);stroke:rgba(255,255,255,0.8);border-color:rgba(255,255,255,0.8)}:not(.jw-flag-touch) .jw-color-inactive-hover:hover{color:rgba(255,255,255,0.8);stroke:rgba(255,255,255,0.8);border-color:rgba(255,255,255,0.8)}.jw-option{color:rgba(255,255,255,0.8)}.jw-option.jw-active-option{color:#fff;background-color:rgba(255,255,255,0.1)}:not(.jw-flag-touch) .jw-option:hover{color:#fff}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jwplayer *{box-sizing:inherit}.jwplayer.jw-flag-aspect-mode{height:auto !important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jwplayer.jw-no-focus:focus,.jwplayer .jw-swf{outline:none}.jwplayer.jw-ie:focus{outline:#585858 dotted 1px}.jw-media,.jw-preview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-media{overflow:hidden;cursor:pointer}.jw-plugin{position:absolute;bottom:66px}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0;left:0;right:0;bottom:0;display:block}.jw-preview,.jw-captions,.jw-title{pointer-events:none}.jw-media,.jw-logo{pointer-events:all}.jw-wrapper{background-color:#000;position:absolute;top:0;left:0;right:0;bottom:0}.jwplayer video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:transparent}.jwplayer video::-webkit-media-controls-start-playback-button{display:none}.jwplayer.jw-stretch-uniform video{object-fit:contain}.jwplayer.jw-stretch-none video{object-fit:none}.jwplayer.jw-stretch-fill video{object-fit:cover}.jwplayer.jw-stretch-exactfit video{object-fit:fill}.jw-preview{position:absolute;display:none;opacity:1;visibility:visible;width:100%;height:100%;background:#000 no-repeat 50% 50%}.jwplayer .jw-preview,.jw-error .jw-preview{background-size:contain}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-title{display:none;padding-top:20px;width:100%;z-index:1}.jw-title-primary,.jw-title-secondary{color:#fff;padding-left:20px;padding-right:20px;padding-bottom:0.5em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.jw-title-primary{font-size:1.625em}.jw-breakpoint-2 .jw-title-primary,.jw-breakpoint-3 .jw-title-primary{font-size:1.5em}.jw-flag-small-player .jw-title-primary{font-size:1.25em}.jw-flag-small-player .jw-title-secondary,.jw-title-secondary:empty{display:none}.jw-captions{position:absolute;width:100%;height:100%;text-align:center;display:none;max-height:calc(100% - 60px);letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-decoration:none;pointer-events:none;overflow:hidden;top:0}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:0.25em;border-radius:0.25em}.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{display:inline-block;color:#fff;background-color:#000;word-wrap:normal;word-break:normal;white-space:pre-line;font-style:normal;font-weight:normal;text-align:center;text-decoration:none}.jw-text-track-display{font-size:inherit;line-height:1.5}.jw-text-track-cue{background-color:rgba(0,0,0,0.5);color:#fff;padding:0.1em 0.3em}.jwplayer video::-webkit-media-controls{display:none;justify-content:flex-start}.jwplayer video::-webkit-media-text-track-container{max-height:calc(100% - 60px);line-height:normal}.jwplayer video::-webkit-media-text-track-display{min-width:-webkit-min-content}.jwplayer video::cue{background-color:rgba(0,0,0,0.5)}.jwplayer video::-webkit-media-controls-panel-container{display:none}.jw-logo{position:absolute;margin:20px;cursor:pointer;pointer-events:all;background-repeat:no-repeat;background-size:contain;top:auto;right:auto;left:auto;bottom:auto}.jw-flag-audio-player .jw-logo{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{left:0}.jw-logo-bottom-right{right:0}.jw-logo-bottom-left,.jw-logo-bottom-right{bottom:44px;transition:bottom 150ms cubic-bezier(0, .25, .25, 1)}.jw-state-idle .jw-logo{z-index:1}.jw-state-setup .jw-wrapper{background-color:inherit}.jw-state-setup .jw-logo,.jw-state-setup .jw-controls,.jw-state-setup .jw-controls-backdrop{visibility:hidden}span.jw-break{display:block}body .jw-error,body .jwplayer.jw-state-error{background-color:#333;color:#fff;font-size:16px;display:table;opacity:1;position:relative}body .jw-error .jw-display,body .jwplayer.jw-state-error .jw-display{display:none}body .jw-error .jw-media,body .jwplayer.jw-state-error .jw-media{cursor:default}body .jw-error .jw-preview,body .jwplayer.jw-state-error .jw-preview{background-color:#333}body .jw-error .jw-error-msg,body .jwplayer.jw-state-error .jw-error-msg{background-color:#000;border-radius:2px;display:flex;flex-direction:row;align-items:stretch;padding:20px}body .jw-error .jw-error-msg .jw-icon,body .jwplayer.jw-state-error .jw-error-msg .jw-icon{height:30px;width:30px;margin-right:20px;flex:0 0 auto;align-self:center}body .jw-error .jw-error-msg .jw-icon:empty,body .jwplayer.jw-state-error .jw-error-msg .jw-icon:empty{display:none}body .jw-error .jw-error-msg .jw-info-container,body .jwplayer.jw-state-error .jw-error-msg .jw-info-container{margin:0;padding:0}body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg,body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg{flex-direction:column}body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-error-text,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-error-text,body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-error-text,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-error-text{text-align:center}body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-icon,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-icon,body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-icon,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-icon{flex:0.5 0 auto;margin-right:0;margin-bottom:20px}.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg .jw-break,.jwplayer.jw-state-error.jw-flag-small-player .jw-error-msg .jw-break,.jwplayer.jw-state-error.jw-breakpoint-2 .jw-error-msg .jw-break{display:inline}.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg .jw-break:before,.jwplayer.jw-state-error.jw-flag-small-player .jw-error-msg .jw-break:before,.jwplayer.jw-state-error.jw-breakpoint-2 .jw-error-msg .jw-break:before{content:" "}.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg{height:100%;width:100%;top:0;position:absolute;left:0;background:#000;-webkit-transform:none;transform:none;padding:4px 16px;z-index:1}.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg.jw-info-overlay{max-width:none;max-height:none}body .jwplayer.jw-state-error .jw-title,.jw-state-idle .jw-title,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player):not(.jw-flag-overlay-open-related) .jw-title{display:block}body .jwplayer.jw-state-error .jw-preview,.jw-state-idle .jw-preview,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player):not(.jw-flag-overlay-open-related) .jw-preview{display:block}.jw-state-idle .jw-captions,.jwplayer.jw-state-complete .jw-captions,body .jwplayer.jw-state-error .jw-captions{display:none}.jw-state-idle video::-webkit-media-text-track-container,.jwplayer.jw-state-complete video::-webkit-media-text-track-container,body .jwplayer.jw-state-error video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-fullscreen{width:100% !important;height:100% !important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}body .jwplayer.jw-flag-flash-blocked .jw-title{display:block}.jwplayer.jw-flag-controls-hidden .jw-captions{max-height:none}.jwplayer.jw-flag-controls-hidden video::-webkit-media-text-track-container{max-height:none}.jwplayer.jw-flag-controls-hidden .jw-media{cursor:default}.jw-flag-audio-player:not(.jw-flag-flash-blocked) .jw-media{visibility:hidden}.jw-flag-audio-player .jw-title{background:none}.jw-flag-audio-player object{min-height:45px}.jw-flag-floating{background-size:cover;background-color:#000}.jw-flag-floating .jw-wrapper{-webkit-animation:jw-float 150ms cubic-bezier(0, .25, .25, 1) forwards 1;animation:jw-float 150ms cubic-bezier(0, .25, .25, 1) forwards 1;top:auto;right:1rem;bottom:1rem;left:auto;position:fixed;z-index:1}@media screen and (max-width:419px) and (orientation:portrait){.jw-flag-floating .jw-wrapper{left:0;right:0;margin-left:auto;margin-right:auto}}.jw-flag-floating .jw-float-icon{display:block}.jw-float-icon{display:none;position:absolute;right:0;bottom:0}@-webkit-keyframes jw-float{from{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes jw-float{from{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.jw-flag-top{margin-top:2em;overflow:visible}.jw-top{height:2em;line-height:2;pointer-events:none;text-align:center;opacity:0.8;position:absolute;top:-2em;width:100%}.jw-top .jw-icon{cursor:pointer;pointer-events:all;height:auto;width:auto}.jw-top .jw-text{color:#555}', ""])
    }, function(e, t, i) {
        var n = i(108);
        "string" == typeof n && (n = [
            ["all-players", n, ""]
        ]), i(41).style(n, "all-players"), n.locals && (e.exports = n.locals)
    }, function(e, t, i) {
        (e.exports = i(63)(!1)).push([e.i, '.jw-settings-content-item.jw-sharing-copy{height:26px}.jw-settings-content-item .jw-svg-icon{margin-right:1em;height:16px;width:16px;padding:0}.jw-settings-content-item .jw-tooltip{position:relative;bottom:42px;left:30px;width:60px}.jw-settings-content-item .jw-tooltip.jw-open{transition:none}.jw-sharing-link{display:flex;align-items:center;line-height:16px;text-transform:capitalize}.jw-sharing-link:hover,.jw-sharing-link:focus{text-decoration:none}.jw-sharing-copy:after{background-color:#fff;border-radius:50px;bottom:20px;color:#000;content:"Copied";display:block;font-size:13px;font-weight:bold;opacity:0;margin-left:-25px;left:50%;position:absolute;text-align:center;-webkit-transform:translateY(10px);transform:translateY(10px);transition:all 200ms ease-in-out;visibility:hidden;width:60px}.jw-sharing-copy-textarea-copied:after{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);visibility:visible}.jw-sharing-copy .jw-sharing-link{padding:0}.jw-sharing-copy .jw-sharing-link:hover,.jw-sharing-copy .jw-sharing-link:focus{color:#fff}.jw-sharing-link:focus,.jw-sharing-copy:focus{outline:none}.jw-sharing-link:active,.jw-sharing-copy:active{color:#fff;font-weight:bold}.jw-sharing-textarea{display:flex;opacity:0;height:1px;cursor:pointer}', ""])
    }, function(e, t, i) {
        var n = i(110);
        "string" == typeof n && (n = [
            ["all-players", n, ""]
        ]), i(41).style(n, "all-players"), n.locals && (e.exports = n.locals)
    }, function(e, t) { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-embed" viewBox="0 0 160 160" focusable="false"><path d="M153.224,81.594,126.971,54.685,117.6,64.061l21.846,21.846L117.6,107.752l8.719,8.719L152.567,90.22a5.583,5.583,0,0,0,1.406-7.782,6.067,6.067,0,0,0-.75-.844ZM33.12,54.685,6.868,80.938A5.973,5.973,0,0,0,6.68,89.47l.188.188L33.12,117.128l9.376-9.376-22.5-21.846L42.5,64.061ZM53.747,134.1,94.437,21.5,106.345,25.9,65.654,138.5Z"></path></svg>' }, function(e, t) { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-link" viewBox="0 0 160 160" focusable="false"><path d="M79.4,99.6H92.5v2a33.6,33.6,0,0,1-9.8,24.2l-9.8,9.8a34.716,34.716,0,0,1-48.4,0,34.716,34.716,0,0,1,0-48.4l9.2-10.5a33.6,33.6,0,0,1,24.2-9.8h1.9V80H58.5a19.359,19.359,0,0,0-15.1,6.5l-9.8,9.8a20.976,20.976,0,0,0-.5,29.6l.5.5a20.976,20.976,0,0,0,29.6.5l.5-.5,9.8-9.8a20.905,20.905,0,0,0,6.5-15h0v-2ZM135,24.4h0a34.716,34.716,0,0,0-48.4,0L76.1,34.2a33.6,33.6,0,0,0-9.8,24.2v2H79.4v-2a19.359,19.359,0,0,1,6.5-15.1l9.8-9.8a20.976,20.976,0,0,1,29.6-.5l.5.5a20.976,20.976,0,0,1,.5,29.6l-.5.5-10.5,9.8a20.905,20.905,0,0,1-15,6.5H99V93h1.3a33.6,33.6,0,0,0,24.2-9.8l9.8-9.8A34.89,34.89,0,0,0,135,24.4ZM63,106.2l42.5-42.5-9.8-9.8L53.2,96.4Z"></path></svg>' }, function(e, t) { e.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-email" viewBox="0 0 160 160" focusable="false"><path d="M147.3,27.9H11.9L10,29.8v97a3.02,3.02,0,0,0,2.8,3.2H146.6a3.02,3.02,0,0,0,3.2-2.8V31C150.5,29.2,149.2,27.9,147.3,27.9ZM125.6,40.7,80.3,77.1,35,40.7Zm12.1,76.6H22.8V47.7l57.5,46,57.5-46-.1,69.6Z"></path></svg>' }, function(e, t) { e.exports = '<svg class="jw-svg-icon jw-svg-icon-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M56.8,132.5a75.177,75.177,0,0,0,75.3-75.1V54A53.405,53.405,0,0,0,145,40.5a58.075,58.075,0,0,1-15.4,3.9,27.138,27.138,0,0,0,11.6-14.8A53.038,53.038,0,0,1,124.5,36a25.736,25.736,0,0,0-19.3-8.4A26.12,26.12,0,0,0,78.8,53.4V54a16.5,16.5,0,0,0,.7,5.8,71.966,71.966,0,0,1-54.1-27,23.9,23.9,0,0,0-3.9,13.5A26.043,26.043,0,0,0,33.1,68.2,27.018,27.018,0,0,1,20.9,65v.7A26.15,26.15,0,0,0,42.1,91.4a24.149,24.149,0,0,1-7.1.7,12.625,12.625,0,0,1-5.1-.7,25.657,25.657,0,0,0,24.5,18A53.519,53.519,0,0,1,21.6,121a19.683,19.683,0,0,1-6.4-.7,80.388,80.388,0,0,0,41.6,12.2"></path></svg>' }, function(e, t) { e.exports = '<svg class="jw-svg-icon jw-svg-icon-tumblr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M115.3,131.6a30.935,30.935,0,0,1-22,7.3h-.7c-28,0-34.6-20.6-34.6-32.7v-34H46.7A2.9,2.9,0,0,1,44,69.5h0V54.2a6.2,6.2,0,0,1,2.7-4,30.359,30.359,0,0,0,20-27.3,3.574,3.574,0,0,1,3-4,1.7,1.7,0,0,1,1,0H87.4a2.9,2.9,0,0,1,2.7,2.7V48.3h19.3a3.18,3.18,0,0,1,2.7,2V69.6a2.9,2.9,0,0,1-2.7,2.7H90v31.3a8.709,8.709,0,0,0,7.4,9.9,5.7,5.7,0,0,0,1.3.1,58.63,58.63,0,0,0,7.3-1.3,4.953,4.953,0,0,1,2.7-.7c.7,0,1.3.7,2,2l5.3,15.3C115.3,129.6,116,130.3,115.3,131.6Z"></path></svg>' }, function(e, t) { e.exports = '<svg class="jw-svg-icon jw-svg-icon-reddit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M136.7,60.7a18.265,18.265,0,0,0-11.6,4.1,83.108,83.108,0,0,0-40-11.5l8.1-25.1,21.1,4.7a14.927,14.927,0,1,0,14.9-16.2,15.418,15.418,0,0,0-13.6,8.1L90.5,18.7a3.75,3.75,0,0,0-4.7,2.7h0L77,52.6A93.15,93.15,0,0,0,34.2,64.1,19.471,19.471,0,0,0,23.3,60,19.137,19.137,0,0,0,5,78.3a19.777,19.777,0,0,0,7.5,14.9v4.1a38.88,38.88,0,0,0,20.4,31.9,85.678,85.678,0,0,0,46.8,12.2,93.7,93.7,0,0,0,46.8-12.2,38.741,38.741,0,0,0,20.4-31.9V93.2A18.324,18.324,0,0,0,155,78.3,18.952,18.952,0,0,0,136.7,60.7Zm-7.5-35.3a6.459,6.459,0,0,1,6.8,6v.8a6.744,6.744,0,0,1-6.8,6.8,6.459,6.459,0,0,1-6.8-6v-.8A7.312,7.312,0,0,1,129.2,25.4ZM47.1,89.2A10.2,10.2,0,1,1,57.3,99.4,10.514,10.514,0,0,1,47.1,89.2Zm57,29.8a31.975,31.975,0,0,1-24.4,7.5h0A34.711,34.711,0,0,1,55.3,119a3.821,3.821,0,1,1,5.2-5.6l.2.2a26.476,26.476,0,0,0,19,5.4h0a28.644,28.644,0,0,0,19-5.4,4,4,0,0,1,5.4,0c2,1.3,2,3.4,0,5.4Zm-2-19.7a10.2,10.2,0,1,1,10.2-10.2,10.514,10.514,0,0,1-10.2,10.2Z"></path></svg>' }, function(e, t) { e.exports = '<svg class="jw-svg-icon jw-svg-icon-pinterest" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M80,15A65.127,65.127,0,0,0,15,80a66.121,66.121,0,0,0,39,59.8,62.151,62.151,0,0,1,1.3-14.9c1.3-5.2,8.5-35.1,8.5-35.1a26.386,26.386,0,0,1-2-10.4c0-9.7,5.9-16.9,12.4-16.9,5.9,0,8.5,4.5,8.5,9.7a128.456,128.456,0,0,1-5.9,22.7,9.646,9.646,0,0,0,6.6,12,8.105,8.105,0,0,0,3.8.3c12.4,0,20.8-15.6,20.8-34.4,0-14.3-9.7-24.7-27.3-24.7a30.869,30.869,0,0,0-31.8,30v1.2a19.8,19.8,0,0,0,4.5,13,2.586,2.586,0,0,1,.6,3.3c0,1.3-1.3,3.9-1.3,5.2-.6,2-2,2-3.3,2-9.1-3.9-13-13.6-13-24.7,0-18.2,15.6-40.3,46.1-40.3a38.763,38.763,0,0,1,40.9,36.7v.4c0,25.4-14.3,44.9-35.1,44.9A18.163,18.163,0,0,1,72.7,112s-3.9,14.9-4.5,17.6a46.615,46.615,0,0,1-6.5,13.7,79.828,79.828,0,0,0,18.2,1.9A65.1,65.1,0,0,0,80,15Z"></path></svg>' }, function(e, t) { e.exports = '<svg class="jw-svg-icon jw-svg-icon-linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M135.237,15.006H24.739A9.427,9.427,0,0,0,15,24.107V135.256a9.553,9.553,0,0,0,9.365,9.737h110.9a9.427,9.427,0,0,0,9.737-9.1V24.081A9.461,9.461,0,0,0,135.237,15.006Zm-81.9,110.512H34.476V63.774h19.5v61.744ZM43.576,55.31A10.994,10.994,0,0,1,32.513,44.45v-.2a11.05,11.05,0,0,1,22.1,0A10.537,10.537,0,0,1,44.6,55.283l-.051,0A4.07,4.07,0,0,1,43.576,55.31Zm81.9,70.208h-19.5v-29.9c0-7.164,0-16.265-9.737-16.265s-11.7,7.8-11.7,16.265v29.9h-19.5V63.774h18.2v8.464h0a19.766,19.766,0,0,1,18.2-9.738c19.5,0,23.4,13,23.4,29.266v33.8h.637Z"></path></svg>' }, function(e, t) { e.exports = '<svg class="jw-svg-icon jw-svg-icon-google" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M145.8,67.8H83.1V93.3h36.6a30.5,30.5,0,0,1-13.1,20.2,56.7,56.7,0,0,1-14.4,5.9,58.951,58.951,0,0,1-15.7,0,42.79,42.79,0,0,1-15-6.5,38.861,38.861,0,0,1-15-20.2,42.658,42.658,0,0,1,0-25.5,40.873,40.873,0,0,1,9.8-15.7,38.276,38.276,0,0,1,39.2-9.8,32.516,32.516,0,0,1,14.4,8.5c3.9-3.9,8.5-7.8,12.4-11.8a66.468,66.468,0,0,0,6.5-6.5,73.511,73.511,0,0,0-21.6-13.1,70.341,70.341,0,0,0-45.1-.6A64.526,64.526,0,0,0,24.2,50.9a62.475,62.475,0,0,0,0,58.8,63.293,63.293,0,0,0,18.3,21.5A60.151,60.151,0,0,0,66.7,143a76.5,76.5,0,0,0,34,.7A61.272,61.272,0,0,0,128.1,130a63.793,63.793,0,0,0,17-27.4A99.333,99.333,0,0,0,145.8,67.8Z"></path></svg>' }, function(e, t) { e.exports = '<svg class="jw-svg-icon jw-svg-icon-facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M137.8,15H22.1A7.127,7.127,0,0,0,15,22.1V137.8a7.28,7.28,0,0,0,7.1,7.2H84.5V95H67.6V75.5H84.5v-15a23.637,23.637,0,0,1,21.3-25.9,28.08,28.08,0,0,1,4.1-.1c7.2,0,13.7.6,14.9.6V52.7H114.4c-8.5,0-9.7,3.9-9.7,9.7V74.7h19.5l-2.6,19.5H104.7v50.7h33.1a7.3,7.3,0,0,0,7.2-7.2V22A7.13,7.13,0,0,0,137.8,15Z"></path></svg>' }, function(e, t, i) {
        (e.exports = i(63)(!1)).push([e.i, '.jw-overlays,.jw-controls,.jw-controls-backdrop,.jw-flag-small-player .jw-settings-menu,.jw-settings-submenu{height:100%;width:100%}.jw-settings-menu .jw-icon::after,.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after{position:absolute;right:0}.jw-overlays,.jw-controls,.jw-controls-backdrop,.jw-settings-item-active::before{top:0;position:absolute;left:0}.jw-settings-menu .jw-icon::after,.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after{position:absolute;bottom:0;left:0}.jw-nextup-close{position:absolute;top:0;right:0}.jw-overlays,.jw-controls,.jw-flag-small-player .jw-settings-menu{position:absolute;bottom:0;right:0}.jw-settings-menu .jw-icon::after,.jw-icon-settings::after,.jw-icon-volume::after,.jw-time-tip::after,.jw-settings-menu .jw-icon.jw-button-color::after,.jw-text-live::before,.jw-controlbar .jw-tooltip::after,.jw-settings-menu .jw-tooltip::after{content:"";display:block}.jw-svg-icon{height:24px;width:24px;fill:currentColor;pointer-events:none}.jw-icon{height:44px;width:44px;background-color:transparent}.jw-icon-airplay .jw-svg-icon-airplay-off{display:none}.jw-off.jw-icon-airplay .jw-svg-icon-airplay-off{display:block}.jw-icon-airplay .jw-svg-icon-airplay-on{display:block}.jw-off.jw-icon-airplay .jw-svg-icon-airplay-on{display:none}.jw-icon-cc .jw-svg-icon-cc-off{display:none}.jw-off.jw-icon-cc .jw-svg-icon-cc-off{display:block}.jw-icon-cc .jw-svg-icon-cc-on{display:block}.jw-off.jw-icon-cc .jw-svg-icon-cc-on{display:none}.jw-icon-fullscreen .jw-svg-icon-fullscreen-off{display:none}.jw-off.jw-icon-fullscreen .jw-svg-icon-fullscreen-off{display:block}.jw-icon-fullscreen .jw-svg-icon-fullscreen-on{display:block}.jw-off.jw-icon-fullscreen .jw-svg-icon-fullscreen-on{display:none}.jw-icon-volume .jw-svg-icon-volume-0{display:none}.jw-off.jw-icon-volume .jw-svg-icon-volume-0{display:block}.jw-icon-volume .jw-svg-icon-volume-100{display:none}.jw-full.jw-icon-volume .jw-svg-icon-volume-100{display:block}.jw-icon-volume .jw-svg-icon-volume-50{display:block}.jw-off.jw-icon-volume .jw-svg-icon-volume-50,.jw-full.jw-icon-volume .jw-svg-icon-volume-50{display:none}.jw-settings-menu .jw-icon::after,.jw-icon-settings::after,.jw-icon-volume::after{height:100%;width:24px;box-shadow:inset 0 -3px 0 -1px currentColor;margin:auto;opacity:0;transition:opacity 150ms cubic-bezier(0, .25, .25, 1)}.jw-settings-menu .jw-icon[aria-checked="true"]::after,.jw-settings-open .jw-icon-settings::after,.jw-icon-volume.jw-open::after{opacity:1}.jw-overlays,.jw-controls{pointer-events:none}.jw-controls-backdrop{display:block;background:linear-gradient(to bottom, transparent, rgba(0,0,0,0.4) 77%, rgba(0,0,0,0.4) 100%) 100% 100% / 100% 240px no-repeat transparent;transition:opacity 250ms cubic-bezier(0, .25, .25, 1),background-size 250ms cubic-bezier(0, .25, .25, 1);pointer-events:none}.jw-overlays{cursor:auto}.jw-controls{overflow:hidden}.jw-flag-small-player .jw-controls{text-align:center}.jw-text{height:1em;font-family:Arial,Helvetica,sans-serif;font-size:.75em;font-style:normal;font-weight:normal;color:#fff;text-align:center;font-variant:normal;font-stretch:normal}.jw-controlbar,.jw-skip,.jw-display-icon-container,.jw-display-icon-container .jw-icon,.jw-nextup-container,.jw-autostart-mute,.jw-overlays .jw-plugin{pointer-events:all}.jwplayer .jw-display-icon-container,.jw-error .jw-display-icon-container{width:auto;height:auto;box-sizing:content-box}.jw-display{display:table;height:100%;padding:57px 0;position:relative;width:100%}.jw-flag-dragging .jw-display{display:none}.jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jw-display-container{display:table-cell;height:100%;text-align:center;vertical-align:middle}.jw-display-controls{display:inline-block}.jwplayer .jw-display-icon-container{float:left}.jw-display-icon-container{display:inline-block;padding:5.5px;margin:0 22px}.jw-display-icon-container .jw-icon{height:75px;width:75px;cursor:pointer;display:flex;justify-content:center;align-items:center}.jw-display-icon-container .jw-icon .jw-svg-icon{height:33px;width:33px;padding:0;position:relative}.jw-display-icon-container .jw-icon .jw-svg-icon-rewind{padding:0.2em 0.05em}.jw-breakpoint-0 .jw-display-icon-next,.jw-breakpoint-0 .jw-display-icon-rewind{display:none}.jw-breakpoint-0 .jw-display .jw-icon,.jw-breakpoint-0 .jw-display .jw-svg-icon{width:44px;height:44px;line-height:44px}.jw-breakpoint-0 .jw-display .jw-icon:before,.jw-breakpoint-0 .jw-display .jw-svg-icon:before{width:22px;height:22px}.jw-breakpoint-1 .jw-display .jw-icon,.jw-breakpoint-1 .jw-display .jw-svg-icon{width:44px;height:44px;line-height:44px}.jw-breakpoint-1 .jw-display .jw-icon:before,.jw-breakpoint-1 .jw-display .jw-svg-icon:before{width:22px;height:22px}.jw-breakpoint-1 .jw-display .jw-icon.jw-icon-rewind:before{width:33px;height:33px}.jw-breakpoint-2 .jw-display .jw-icon,.jw-breakpoint-3 .jw-display .jw-icon,.jw-breakpoint-2 .jw-display .jw-svg-icon,.jw-breakpoint-3 .jw-display .jw-svg-icon{width:77px;height:77px;line-height:77px}.jw-breakpoint-2 .jw-display .jw-icon:before,.jw-breakpoint-3 .jw-display .jw-icon:before,.jw-breakpoint-2 .jw-display .jw-svg-icon:before,.jw-breakpoint-3 .jw-display .jw-svg-icon:before{width:38.5px;height:38.5px}.jw-breakpoint-4 .jw-display .jw-icon,.jw-breakpoint-5 .jw-display .jw-icon,.jw-breakpoint-6 .jw-display .jw-icon,.jw-breakpoint-7 .jw-display .jw-icon,.jw-breakpoint-4 .jw-display .jw-svg-icon,.jw-breakpoint-5 .jw-display .jw-svg-icon,.jw-breakpoint-6 .jw-display .jw-svg-icon,.jw-breakpoint-7 .jw-display .jw-svg-icon{width:88px;height:88px;line-height:88px}.jw-breakpoint-4 .jw-display .jw-icon:before,.jw-breakpoint-5 .jw-display .jw-icon:before,.jw-breakpoint-6 .jw-display .jw-icon:before,.jw-breakpoint-7 .jw-display .jw-icon:before,.jw-breakpoint-4 .jw-display .jw-svg-icon:before,.jw-breakpoint-5 .jw-display .jw-svg-icon:before,.jw-breakpoint-6 .jw-display .jw-svg-icon:before,.jw-breakpoint-7 .jw-display .jw-svg-icon:before{width:44px;height:44px}.jw-controlbar{display:flex;flex-flow:row wrap;align-items:center;justify-content:center;position:absolute;left:0;bottom:0;width:100%;border:none;border-radius:0;background-size:auto;box-shadow:none;max-height:72px;transition:250ms cubic-bezier(0, .25, .25, 1);transition-property:opacity, visibility;transition-delay:0s}.jw-controlbar .jw-button-image{background:no-repeat 50% 50%;background-size:contain;max-height:24px}.jw-controlbar .jw-spacer{flex:1 1 auto;align-self:stretch}.jw-controlbar .jw-icon.jw-button-color:hover{color:#fff}.jw-button-container{display:flex;flex-flow:row nowrap;flex:1 1 auto;align-items:center;justify-content:center;width:100%;padding:0 12px}.jw-slider-horizontal{background-color:transparent}.jw-icon-inline{position:relative}.jw-icon-inline,.jw-icon-tooltip{height:44px;width:44px;align-items:center;display:flex;justify-content:center}.jw-icon-inline:not(.jw-text),.jw-icon-tooltip,.jw-slider-horizontal{cursor:pointer}.jw-text-elapsed,.jw-text-duration{justify-content:flex-start;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.jw-icon-tooltip{position:relative}.jw-knob:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-icon-display:hover,.jw-option:before:hover{color:#fff}.jw-time-tip,.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip{pointer-events:none}.jw-icon-cast{display:none;margin:0;padding:0}.jw-icon-cast google-cast-launcher{background-color:transparent;border:none;padding:0;width:24px;height:24px;cursor:pointer}.jw-icon-inline.jw-icon-volume{display:none}.jwplayer .jw-text-countdown{display:none}.jw-flag-small-player .jw-display{padding-top:44px;padding-bottom:66px}.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-rewind,.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-next,.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-playback{display:none}.jw-flag-ads-vpaid:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-user-inactive.jw-state-playing:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-user-inactive.jw-state-buffering:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar{visibility:hidden;pointer-events:none;opacity:0;transition-delay:0s, 250ms}.jw-flag-ads-vpaid:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop,.jw-flag-user-inactive.jw-state-playing:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop,.jw-flag-user-inactive.jw-state-buffering:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop{opacity:0}.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-countdown{display:flex}.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-elapsed,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-duration{display:none}.jwplayer:not(.jw-breakpoint-0) .jw-text-duration:before{content:"/";padding-right:1ch;padding-left:1ch}.jwplayer:not(.jw-flag-user-inactive) .jw-controlbar{will-change:transform}.jwplayer:not(.jw-flag-user-inactive) .jw-controlbar .jw-text{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.jw-slider-container{display:flex;align-items:center;position:relative;touch-action:none}.jw-rail,.jw-buffer,.jw-progress{position:absolute;cursor:pointer}.jw-progress{background-color:#f2f2f2}.jw-rail{background-color:rgba(255,255,255,0.3)}.jw-buffer{background-color:rgba(255,255,255,0.3)}.jw-knob{height:13px;width:13px;background-color:#fff;border-radius:50%;box-shadow:0 0 10px rgba(0,0,0,0.4);opacity:1;pointer-events:none;position:absolute;-webkit-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0);transition:150ms cubic-bezier(0, .25, .25, 1);transition-property:opacity, -webkit-transform;transition-property:opacity, transform;transition-property:opacity, transform, -webkit-transform}.jw-flag-dragging .jw-slider-time .jw-knob,.jw-icon-volume:active .jw-slider-volume .jw-knob{box-shadow:0 0 26px rgba(0,0,0,0.2),0 0 10px rgba(0,0,0,0.4),0 0 0 6px rgba(255,255,255,0.2)}.jw-slider-horizontal,.jw-slider-vertical{display:flex}.jw-slider-horizontal .jw-slider-container{height:5px;width:100%}.jw-slider-horizontal .jw-rail,.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-cue,.jw-slider-horizontal .jw-knob{top:50%}.jw-slider-horizontal .jw-rail,.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-cue{-webkit-transform:translate(0, -50%);transform:translate(0, -50%)}.jw-slider-horizontal .jw-rail,.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress{height:5px}.jw-slider-horizontal .jw-rail{width:100%}.jw-slider-vertical{align-items:center;flex-direction:column}.jw-slider-vertical .jw-slider-container{height:88px;width:5px}.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-knob{left:50%}.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress{height:100%;width:5px;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translate(-50%, 0);transform:translate(-50%, 0);transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;bottom:0}.jw-slider-vertical .jw-knob{-webkit-transform:translate(-50%, 50%);transform:translate(-50%, 50%)}.jw-slider-time{height:17px;width:100%;align-items:center;background:transparent none;padding:0 12px;z-index:1;outline:none}.jw-slider-time .jw-rail,.jw-slider-time .jw-buffer,.jw-slider-time .jw-progress,.jw-slider-time .jw-cue{-webkit-backface-visibility:hidden;backface-visibility:hidden;height:100%;-webkit-transform:translate(0, -50%) scale(1, .6);transform:translate(0, -50%) scale(1, .6);transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out}.jw-slider-time .jw-cue{background-color:rgba(33,33,33,0.8);cursor:pointer;position:absolute;width:6px}.jw-slider-time:hover .jw-rail,.jw-slider-time:focus .jw-rail,.jw-flag-dragging .jw-slider-time .jw-rail,.jw-flag-touch .jw-slider-time .jw-rail,.jw-slider-time:hover .jw-buffer,.jw-slider-time:focus .jw-buffer,.jw-flag-dragging .jw-slider-time .jw-buffer,.jw-flag-touch .jw-slider-time .jw-buffer,.jw-slider-time:hover .jw-progress,.jw-slider-time:focus .jw-progress,.jw-flag-dragging .jw-slider-time .jw-progress,.jw-flag-touch .jw-slider-time .jw-progress,.jw-slider-time:hover .jw-cue,.jw-slider-time:focus .jw-cue,.jw-flag-dragging .jw-slider-time .jw-cue,.jw-flag-touch .jw-slider-time .jw-cue{-webkit-transform:translate(0, -50%) scale(1, 1);transform:translate(0, -50%) scale(1, 1)}.jw-slider-time:hover .jw-knob,.jw-slider-time:focus .jw-knob,.jw-flag-dragging .jw-slider-time .jw-knob,.jw-flag-touch .jw-slider-time .jw-knob{-webkit-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1)}.jw-slider-time .jw-rail{background-color:rgba(255,255,255,0.2)}.jw-slider-time .jw-buffer{background-color:rgba(255,255,255,0.4)}.jw-flag-touch .jw-slider-time::before{height:44px;width:100%;content:"";position:absolute;display:block;bottom:calc(100% - 17px);left:0}.jwplayer .jw-rightclick{display:none;position:absolute;white-space:nowrap}.jwplayer .jw-rightclick.jw-open{display:block}.jwplayer .jw-rightclick .jw-rightclick-list{border-radius:1px;list-style:none;margin:0;padding:0}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item{background-color:rgba(0,0,0,0.8);border-bottom:1px solid #444;margin:0}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-logo{color:#fff;display:inline-flex;padding:0 10px 0 0;vertical-align:middle}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-logo .jw-svg-icon{height:20px;width:20px}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-link{border:none;color:#fff;display:block;font-size:11px;line-height:1em;padding:15px 23px;text-decoration:none}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item:last-child{border-bottom:none}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item:hover{cursor:pointer}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured{vertical-align:middle}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured .jw-rightclick-link{color:#d2d2d2}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured .jw-rightclick-link span{color:#fff}.jwplayer .jw-rightclick .jw-info-overlay-item,.jwplayer .jw-rightclick .jw-share-item{border:none;background-color:transparent;outline:none;cursor:pointer}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;transition-delay:0s;visibility:visible}.jw-slider-time .jw-overlay:before{height:1em;top:auto}.jw-volume-tip{padding:13px 0 26px}.jw-time-tip,.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip{height:auto;width:100%;box-shadow:0 0 10px rgba(0,0,0,0.4);color:#fff;display:block;margin:0 0 14px;pointer-events:none;position:relative;z-index:0}.jw-time-tip::after,.jw-controlbar .jw-tooltip::after,.jw-settings-menu .jw-tooltip::after{top:100%;position:absolute;left:50%;height:14px;width:14px;border-radius:1px;background-color:currentColor;-webkit-transform-origin:75% 50%;transform-origin:75% 50%;-webkit-transform:translate(-50%, -50%) rotate(45deg);transform:translate(-50%, -50%) rotate(45deg);z-index:-1}.jw-time-tip .jw-text,.jw-controlbar .jw-tooltip .jw-text,.jw-settings-menu .jw-tooltip .jw-text{background-color:#fff;border-radius:1px;color:#000;font-size:10px;height:auto;line-height:1;padding:7px 10px;display:inline-block;min-width:100%;vertical-align:middle}.jw-controlbar .jw-overlay{position:absolute;bottom:100%;left:50%;margin:0;min-height:44px;min-width:44px;opacity:0;transition:150ms cubic-bezier(0, .25, .25, 1);transition-property:opacity, visibility;transition-delay:0s, 150ms;-webkit-transform:translate(-50%, 0);transform:translate(-50%, 0);visibility:hidden;width:100%;z-index:1}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;padding:0 0.5em;font-size:0.8em;margin:0}.jw-controlbar .jw-option::before{padding-right:0.125em}.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip{position:absolute;bottom:100%;left:50%;opacity:0;-webkit-transform:translate(-50%, 0);transform:translate(-50%, 0);transition:100ms 0s cubic-bezier(0, .25, .25, 1);transition-property:opacity, visibility, -webkit-transform;transition-property:opacity, transform, visibility;transition-property:opacity, transform, visibility, -webkit-transform;visibility:hidden;white-space:nowrap;width:auto;z-index:1}.jw-controlbar .jw-tooltip.jw-open,.jw-settings-menu .jw-tooltip.jw-open,.jw-controlbar .jw-icon:focus>.jw-tooltip,.jw-settings-menu .jw-icon:focus>.jw-tooltip{opacity:1;-webkit-transform:translate(-50%, -10px);transform:translate(-50%, -10px);transition-duration:150ms;transition-delay:500ms,0s,500ms;visibility:visible}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen{left:auto;right:0;-webkit-transform:translate(0, 0);transform:translate(0, 0)}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen.jw-open,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen.jw-open{-webkit-transform:translate(0, -10px);transform:translate(0, -10px)}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen::after,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen::after{left:auto;right:9px}.jw-tooltip-time{height:auto;width:0;bottom:100%;line-height:normal;padding:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jw-tooltip-time .jw-overlay{bottom:0;min-height:0;width:auto}.jw-tooltip{bottom:57px;display:none;position:absolute}.jw-tooltip .jw-text{height:100%;white-space:nowrap;text-overflow:ellipsis;max-width:246px;overflow:hidden}.jw-flag-audio-player .jw-tooltip{display:none}.jw-flag-small-player .jw-time-thumb{display:none}.jw-skip{color:rgba(255,255,255,0.8);cursor:default;position:absolute;display:flex;right:0.75em;bottom:56px;padding:.5em;border:1px solid #333;background-color:#000;align-items:center;height:2em}.jw-skip.jw-skippable{cursor:pointer;padding:0.25em 0.75em}.jw-skip.jw-skippable:hover{cursor:pointer;color:#fff}.jw-skip.jw-skippable .jw-skip-icon{display:inline;height:24px;width:24px;margin:0}.jw-skip .jw-skip-icon{display:none;margin-left:-0.75em;padding:0 0.5em}.jw-skip .jw-skip-icon .jw-svg-icon-next{display:block;padding:0}.jw-skip .jw-text,.jw-skip .jw-skip-icon{vertical-align:middle;font-size:0.7em}.jw-skip .jw-text{font-weight:bold}.jw-cast{background-size:cover;display:none;height:100%;position:relative;width:100%}.jw-cast-container{background:linear-gradient(180deg, rgba(25,25,25,0.75), rgba(25,25,25,0.25), rgba(25,25,25,0));left:0;padding:20px 20px 80px;position:absolute;top:0;width:100%}.jw-cast-text{color:#fff;font-size:1.6em}.jw-breakpoint-0 .jw-cast-text{font-size:1.15em}.jw-breakpoint-1 .jw-cast-text,.jw-breakpoint-2 .jw-cast-text,.jw-breakpoint-3 .jw-cast-text{font-size:1.3em}.jw-nextup-container{position:absolute;bottom:66px;left:0;background-color:transparent;cursor:pointer;margin:0 auto;padding:12px;pointer-events:none;right:0;text-align:right;visibility:hidden;width:100%}.jw-flag-small-player .jw-nextup-container,.jw-settings-open .jw-nextup-container,.jw-info-open .jw-nextup-container{display:none}.jw-nextup{background:#333;border-radius:0;box-shadow:0 0 10px rgba(0,0,0,0.5);color:rgba(255,255,255,0.8);display:inline-block;max-width:280px;overflow:hidden;opacity:0;position:relative;width:64%;pointer-events:all;-webkit-transform:translate(0, -5px);transform:translate(0, -5px);transition:150ms cubic-bezier(0, .25, .25, 1);transition-property:opacity, -webkit-transform;transition-property:opacity, transform;transition-property:opacity, transform, -webkit-transform;transition-delay:0s}.jw-nextup:hover .jw-nextup-tooltip{color:#fff}.jw-nextup.jw-nextup-thumbnail-visible{max-width:400px}.jw-nextup.jw-nextup-thumbnail-visible .jw-nextup-thumbnail{display:block}.jw-nextup-container-visible{visibility:visible}.jw-nextup-container-visible .jw-nextup{opacity:1;-webkit-transform:translate(0, 0);transform:translate(0, 0);transition-delay:0s, 0s, 150ms}.jw-nextup-tooltip{display:flex;height:80px}.jw-nextup-thumbnail{width:120px;background-position:center;background-size:cover;flex:0 0 auto;display:none}.jw-nextup-body{flex:1 1 auto;overflow:hidden;padding:0.75em 0.875em;display:flex;flex-flow:column wrap;justify-content:space-between}.jw-nextup-header,.jw-nextup-title{font-size:14px;line-height:1.35}.jw-nextup-header{font-weight:bold}.jw-nextup-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.jw-nextup-duration{align-self:flex-end;text-align:right;font-size:12px}.jw-nextup-close{height:24px;width:24px;border:none;color:rgba(255,255,255,0.8);cursor:pointer;margin:6px;visibility:hidden}.jw-nextup-close:hover{color:#fff}.jw-nextup-sticky .jw-nextup-close{visibility:visible}.jw-autostart-mute{position:absolute;bottom:0;right:12px;height:44px;width:44px;background-color:rgba(33,33,33,0.4);padding:5px 4px 5px 6px;display:none}.jwplayer.jw-flag-autostart:not(.jw-flag-media-audio) .jw-nextup{display:none}.jw-settings-menu{position:absolute;bottom:57px;right:12px;align-items:flex-start;background-color:#333;display:none;flex-flow:column nowrap;max-width:284px;pointer-events:auto}.jw-settings-open .jw-settings-menu{display:flex}.jw-breakpoint-7 .jw-settings-menu,.jw-breakpoint-6 .jw-settings-menu,.jw-breakpoint-5 .jw-settings-menu{height:232px;width:284px;max-height:232px}.jw-breakpoint-4 .jw-settings-menu,.jw-breakpoint-3 .jw-settings-menu{height:192px;width:284px;max-height:192px}.jw-breakpoint-2 .jw-settings-menu{height:179px;width:284px;max-height:179px}.jw-flag-small-player .jw-settings-menu{max-width:none}.jw-settings-menu .jw-icon.jw-button-color::after{height:100%;width:24px;box-shadow:inset 0 -3px 0 -1px currentColor;margin:auto;opacity:0;transition:opacity 150ms cubic-bezier(0, .25, .25, 1)}.jw-settings-menu .jw-icon.jw-button-color[aria-checked="true"]::after{opacity:1}.jw-settings-topbar{align-items:center;background-color:rgba(0,0,0,0.4);display:flex;flex:0 0 auto;padding:3px 5px 0;width:100%}.jw-settings-topbar .jw-settings-close{margin-left:auto}.jw-settings-submenu{display:none;flex:1 1 auto;overflow-y:auto;padding:8px 20px 0 5px}.jw-settings-submenu::-webkit-scrollbar{background-color:transparent;width:6px}.jw-settings-submenu::-webkit-scrollbar-thumb{background-color:#fff;border:1px solid #333;border-radius:6px}.jw-settings-submenu.jw-settings-submenu-active{display:block}.jw-flag-touch .jw-settings-submenu{overflow-y:scroll;-webkit-overflow-scrolling:touch}.jw-auto-label{font-size:10px;font-weight:initial;opacity:0.75;padding-left:5px}.jw-settings-content-item{color:rgba(255,255,255,0.8);cursor:pointer;font-size:12px;line-height:1;padding:7px 0 7px 15px;width:100%}.jw-settings-content-item:hover{color:#fff}.jw-settings-content-item:focus{font-weight:bold;outline:none}.jw-flag-small-player .jw-settings-content-item{line-height:1.75}.jw-settings-item-active{font-weight:bold;position:relative}.jw-settings-item-active::before{height:100%;width:1em;align-items:center;content:"\\2022";display:inline-flex;justify-content:center}.jw-breakpoint-2 .jw-settings-open .jw-display-container,.jw-flag-small-player .jw-settings-open .jw-display-container,.jw-flag-touch .jw-settings-open .jw-display-container{display:none}.jw-breakpoint-2 .jw-settings-open.jw-controls,.jw-flag-small-player .jw-settings-open.jw-controls,.jw-flag-touch .jw-settings-open.jw-controls{z-index:1}.jw-flag-small-player .jw-settings-open .jw-controlbar{display:none}.jw-settings-open .jw-icon-settings::after{opacity:1}.jw-settings-open .jw-tooltip-settings{display:none}.jw-sharing-link{cursor:pointer}.jw-idle-icon-text{display:none;line-height:1;position:absolute;text-align:center;text-indent:0.35em;top:100%;white-space:nowrap}.jw-idle-label{border-radius:50%;color:#fff;-webkit-filter:drop-shadow(1px 1px 5px rgba(12,26,71,0.25));filter:drop-shadow(1px 1px 5px rgba(12,26,71,0.25));font:normal 16px/1 Arial,Helvetica,sans-serif;position:relative;transition:background-color 150ms cubic-bezier(0, .25, .25, 1);transition-property:background-color,-webkit-filter;transition-property:background-color,filter;transition-property:background-color,filter,-webkit-filter;-webkit-font-smoothing:antialiased}.jw-state-idle .jw-icon-display.jw-idle-label .jw-idle-icon-text{display:block}.jw-state-idle .jw-icon-display.jw-idle-label .jw-svg-icon-play{-webkit-transform:scale(.7, .7);transform:scale(.7, .7)}.jw-breakpoint-0.jw-state-idle .jw-icon-display.jw-idle-label{font-size:12px}.jw-info-overlay{top:50%;position:absolute;left:50%;background:#333;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);display:none;color:#fff;pointer-events:all;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;overflow:hidden;flex-direction:column;max-width:calc(50% + 44px);max-height:calc(50% + 44px)}.jw-info-overlay .jw-info-close{flex:0 0 auto;margin:5px 5px 5px auto}.jw-info-open .jw-info-overlay{display:flex}.jw-breakpoint-2 .jw-info-overlay,.jw-flag-small-player .jw-info-overlay{bottom:0;right:0;height:100%;width:100%;max-height:none;max-width:none;z-index:1}.jw-info-container{display:flex;flex:1 1 auto;flex-flow:column;margin:0 20px 20px;overflow-y:auto;padding:5px}.jw-info-container [class*="jw-info"]:not(:first-of-type){color:rgba(255,255,255,0.8);padding-top:10px;font-size:12px}.jw-info-container .jw-info-description{margin-bottom:30px}.jw-info-container .jw-info-description:empty{display:none}.jw-info-container .jw-info-title{font-size:12px;font-weight:bold}.jw-info-container::-webkit-scrollbar{background-color:transparent;width:6px}.jw-info-container::-webkit-scrollbar-thumb{background-color:#fff;border:1px solid #333;border-radius:6px}.jw-info-clientid{align-self:flex-end;font-size:12px;color:rgba(255,255,255,0.8);margin:0 20px 20px 44px;text-align:right}.jw-flag-touch .jw-info-open .jw-display-container{display:none}@supports ((-webkit-filter: drop-shadow(0 0 3px #000)) or (filter: drop-shadow(0 0 3px #000))){.jwplayer.jw-ab-drop-shadow .jw-controls .jw-svg-icon,.jwplayer.jw-ab-drop-shadow .jw-controls .jw-icon.jw-text,.jwplayer.jw-ab-drop-shadow .jw-slider-container .jw-rail,.jwplayer.jw-ab-drop-shadow .jw-title{text-shadow:none;box-shadow:none;-webkit-filter:drop-shadow(0 2px 3px rgba(0,0,0,0.3));filter:drop-shadow(0 2px 3px rgba(0,0,0,0.3))}.jwplayer.jw-ab-drop-shadow .jw-button-color{opacity:0.8;transition-property:color, opacity}.jwplayer.jw-ab-drop-shadow .jw-button-color:not(:hover){color:#fff;opacity:0.8}.jwplayer.jw-ab-drop-shadow .jw-button-color:hover{opacity:1}.jwplayer.jw-ab-drop-shadow .jw-controls-backdrop{background-image:linear-gradient(to bottom, hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 0.00932) 11.8%, hsla(0, 0%, 0%, 0.03486) 24.05%, hsla(0, 0%, 0%, 0.07303) 36.43%, hsla(0, 0%, 0%, 0.12021) 48.61%, hsla(0, 0%, 0%, 0.1728) 60.24%, hsla(0, 0%, 0%, 0.2272) 71%, hsla(0, 0%, 0%, 0.27979) 80.55%, hsla(0, 0%, 0%, 0.32697) 88.56%, hsla(0, 0%, 0%, 0.36514) 94.69%, hsla(0, 0%, 0%, 0.39068) 98.62%, hsla(0, 0%, 0%, 0.4));mix-blend-mode:multiply;transition-property:opacity}.jw-state-idle.jwplayer.jw-ab-drop-shadow .jw-controls-backdrop{background-image:linear-gradient(to bottom, hsla(0, 0%, 0%, 0.2), hsla(0, 0%, 0%, 0.19534) 1.38%, hsla(0, 0%, 0%, 0.18257) 5.31%, hsla(0, 0%, 0%, 0.16349) 11.44%, hsla(0, 0%, 0%, 0.13989) 19.45%, hsla(0, 0%, 0%, 0.1136) 29%, hsla(0, 0%, 0%, 0.0864) 39.76%, hsla(0, 0%, 0%, 0.06011) 51.39%, hsla(0, 0%, 0%, 0.03651) 63.57%, hsla(0, 0%, 0%, 0.01743) 75.95%, hsla(0, 0%, 0%, 0.00466) 88.2%, hsla(0, 0%, 0%, 0));background-size:100% 7rem;background-position:50% 0}.jwplayer.jw-ab-drop-shadow.jw-state-idle .jw-controls{background-color:transparent}}.jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jw-state-idle .jw-controls{background:rgba(0,0,0,0.4)}.jw-state-idle.jw-flag-cast-available:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-time,.jw-state-idle.jw-flag-cardboard-available .jw-controlbar .jw-slider-time,.jw-state-idle.jw-flag-cast-available:not(.jw-flag-audio-player) .jw-controlbar .jw-icon:not(.jw-icon-cardboard):not(.jw-icon-cast):not(.jw-icon-airplay),.jw-state-idle.jw-flag-cardboard-available .jw-controlbar .jw-icon:not(.jw-icon-cardboard):not(.jw-icon-cast):not(.jw-icon-airplay){display:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon .jw-svg-icon-buffer{display:block}@-webkit-keyframes spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.jwplayer.jw-state-buffering .jw-icon-playback .jw-svg-icon-play{display:none}.jwplayer.jw-state-buffering .jw-icon-display .jw-svg-icon-pause{display:none}.jwplayer.jw-state-playing .jw-display .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-playing .jw-icon-playback .jw-svg-icon-play{display:none}.jwplayer.jw-state-playing .jw-display .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-playing .jw-icon-playback .jw-svg-icon-pause{display:block}.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio) .jw-controls-backdrop{opacity:0}.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio) .jw-logo-bottom-left,.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio):not(.jw-flag-autostart) .jw-logo-bottom-right{bottom:0}.jwplayer .jw-icon-playback .jw-svg-icon-stop{display:none}.jwplayer.jw-state-paused .jw-svg-icon-pause,.jwplayer.jw-state-idle .jw-svg-icon-pause,.jwplayer.jw-state-error .jw-svg-icon-pause,.jwplayer.jw-state-complete .jw-svg-icon-pause{display:none}.jwplayer.jw-state-error .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-complete .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-buffering .jw-icon-display .jw-svg-icon-play{display:none}.jwplayer:not(.jw-state-buffering) .jw-svg-icon-buffer{display:none}.jwplayer:not(.jw-state-complete) .jw-svg-icon-replay{display:none}.jwplayer:not(.jw-state-error) .jw-svg-icon-error{display:none}.jwplayer.jw-state-complete .jw-display .jw-icon-display .jw-svg-icon-replay{display:block}.jwplayer.jw-state-complete .jw-display .jw-text{display:none}.jwplayer.jw-state-complete .jw-controls{background:rgba(0,0,0,0.4);height:100%}.jw-state-idle .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-icon-playback .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-complete .jw-icon-playback .jw-svg-icon-pause{display:none}.jw-state-idle .jw-display-icon-rewind,.jwplayer.jw-state-buffering .jw-display-icon-rewind,.jwplayer.jw-state-complete .jw-display-icon-rewind,body .jw-error .jw-display-icon-rewind,body .jwplayer.jw-state-error .jw-display-icon-rewind,.jw-state-idle .jw-display-icon-next,.jwplayer.jw-state-buffering .jw-display-icon-next,.jwplayer.jw-state-complete .jw-display-icon-next,body .jw-error .jw-display-icon-next,body .jwplayer.jw-state-error .jw-display-icon-next{display:none}body .jw-error .jw-icon-display,body .jwplayer.jw-state-error .jw-icon-display{cursor:default}body .jw-error .jw-icon-display .jw-svg-icon-error,body .jwplayer.jw-state-error .jw-icon-display .jw-svg-icon-error{display:block}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-preview{display:none}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title{padding-top:4px}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title-primary{width:auto;display:inline-block;padding-right:0.5ch}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title-secondary{width:auto;display:inline-block;padding-left:0}body .jwplayer.jw-state-error .jw-controlbar,.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-controlbar{display:none}body .jwplayer.jw-state-error .jw-settings-menu,.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-settings-menu{height:100%;top:0;bottom:0}body .jwplayer.jw-state-error .jw-display,.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-display{padding:0}body .jwplayer.jw-state-error .jw-logo-bottom-left,.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-logo-bottom-left,body .jwplayer.jw-state-error .jw-logo-bottom-right,.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-logo-bottom-right{bottom:0}.jwplayer.jw-state-playing.jw-flag-user-inactive .jw-display{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-state-playing:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display,.jwplayer.jw-state-paused:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting):not(.jw-flag-play-rejected) .jw-display{display:none}.jwplayer.jw-state-paused.jw-flag-play-rejected:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display-icon-rewind,.jwplayer.jw-state-paused.jw-flag-play-rejected:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display-icon-next{display:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-text,.jwplayer.jw-state-complete .jw-display .jw-text{display:none}.jwplayer.jw-flag-casting:not(.jw-flag-audio-player) .jw-cast{display:block}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-display-icon-container{display:none}.jwplayer.jw-flag-casting .jw-icon-hd,.jwplayer.jw-flag-casting .jw-captions,.jwplayer.jw-flag-casting .jw-icon-fullscreen,.jwplayer.jw-flag-casting .jw-icon-audio-tracks{display:none}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-icon-volume{display:none}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-icon-airplay{color:#fff}.jw-state-playing.jw-flag-casting:not(.jw-flag-audio-player) .jw-display,.jw-state-paused.jw-flag-casting:not(.jw-flag-audio-player) .jw-display{display:table}.jwplayer.jw-flag-cast-available .jw-icon-cast,.jwplayer.jw-flag-cast-available .jw-icon-airplay{display:flex}.jwplayer.jw-flag-cardboard-available .jw-icon-cardboard{display:flex}.jwplayer.jw-flag-live .jw-display-icon-rewind{visibility:hidden}.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-text-countdown,.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:flex}.jwplayer.jw-flag-live .jw-controlbar .jw-overlay:after{display:none}.jwplayer.jw-flag-live .jw-nextup-container{bottom:44px}.jwplayer.jw-flag-live .jw-text-elapsed,.jwplayer.jw-flag-live .jw-text-duration{display:none}.jwplayer.jw-flag-live .jw-text-live{cursor:default}.jwplayer.jw-flag-live .jw-text-live:hover{color:rgba(255,255,255,0.8)}.jwplayer.jw-flag-live.jw-state-playing .jw-icon-playback .jw-svg-icon-stop,.jwplayer.jw-flag-live.jw-state-buffering .jw-icon-playback .jw-svg-icon-stop{display:block}.jwplayer.jw-flag-live.jw-state-playing .jw-icon-playback .jw-svg-icon-pause,.jwplayer.jw-flag-live.jw-state-buffering .jw-icon-playback .jw-svg-icon-pause{display:none}.jw-text-live{height:24px;width:auto;align-items:center;border-radius:1px;color:rgba(255,255,255,0.8);display:flex;font-size:12px;font-weight:bold;margin-right:10px;padding:0 1ch;text-rendering:geometricPrecision;text-transform:uppercase;transition:150ms cubic-bezier(0, .25, .25, 1);transition-property:box-shadow,color}.jw-text-live::before{height:8px;width:8px;background-color:currentColor;border-radius:50%;margin-right:6px;opacity:1;transition:opacity 150ms cubic-bezier(0, .25, .25, 1)}.jw-text-live.jw-dvr-live{box-shadow:inset 0 0 0 2px currentColor}.jw-text-live.jw-dvr-live::before{opacity:0.5}.jw-text-live.jw-dvr-live:hover{color:#fff}.jwplayer.jw-flag-controls-hidden .jw-logo.jw-hide{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-flag-controls-hidden:not(.jw-flag-casting) .jw-logo-top-right{top:0}.jwplayer.jw-flag-controls-hidden .jw-plugin{bottom:0.5em}.jwplayer.jw-flag-controls-hidden .jw-nextup-container{bottom:0}.jw-flag-controls-hidden .jw-controlbar,.jw-flag-controls-hidden .jw-display{visibility:hidden;pointer-events:none;opacity:0;transition-delay:0s, 250ms}.jw-flag-controls-hidden .jw-controls-backdrop{opacity:0}.jw-flag-controls-hidden .jw-logo{visibility:visible}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-logo.jw-hide{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-casting) .jw-logo-top-right{top:0}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-plugin{bottom:0.5em}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-nextup-container{bottom:0}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-captions{max-height:none}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing video::-webkit-media-text-track-container{max-height:none}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-controls-hidden) .jw-media{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-casting .jw-display{display:table}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-ads) .jw-autostart-mute{display:flex}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting .jw-nextup-container{bottom:66px}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting.jw-state-idle .jw-nextup-container{display:none}.jw-flag-media-audio .jw-preview{display:block}.jwplayer.jw-flag-ads .jw-preview,.jwplayer.jw-flag-ads .jw-logo,.jwplayer.jw-flag-ads .jw-captions.jw-captions-enabled,.jwplayer.jw-flag-ads .jw-nextup-container,.jwplayer.jw-flag-ads .jw-text-duration,.jwplayer.jw-flag-ads .jw-text-elapsed{display:none}.jwplayer.jw-flag-ads video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-rewind,.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-next,.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-display{display:none}.jwplayer.jw-flag-ads.jw-flag-small-player.jw-state-buffering .jw-display-icon-display{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar{flex-wrap:wrap-reverse}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time{height:auto;padding:0;pointer-events:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-slider-container{height:5px}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-rail,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-knob,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-buffer,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-cue,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-icon-settings{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-progress{-webkit-transform:none;transform:none;top:auto}.jwplayer.jw-flag-ads .jw-controlbar .jw-tooltip,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip:not(.jw-icon-volume),.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline:not(.jw-icon-playback):not(.jw-icon-fullscreen):not(.jw-icon-volume){display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-volume-tip{padding:13px 0}.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:flex}.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid) .jw-controls .jw-controlbar,.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-autostart .jw-controls .jw-controlbar{display:flex;pointer-events:all;visibility:visible;opacity:1}.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-user-inactive .jw-controls-backdrop,.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-autostart.jw-flag-user-inactive .jw-controls-backdrop{opacity:1;background-size:100% 60px}.jwplayer.jw-flag-ads .jw-nextup-container{bottom:44px}.jwplayer.jw-flag-ads .jw-icon,.jwplayer.jw-flag-ads .jw-slider-horizontal{pointer-events:all}.jwplayer.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-ads-vpaid .jw-skip,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-skip{display:none}.jwplayer.jw-flag-ads-vpaid.jw-flag-small-player .jw-controls{background:none}.jwplayer.jw-flag-ads-vpaid.jw-flag-small-player .jw-controls::after{content:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls-backdrop,.jwplayer.jw-flag-ads-hide-controls .jw-controls{display:none !important}.jw-flag-overlay-open-related .jw-controls,.jw-flag-overlay-open-related .jw-title,.jw-flag-overlay-open-related .jw-logo{display:none}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}body .jwplayer.jw-flag-flash-blocked .jw-controls,body .jwplayer.jw-flag-flash-blocked .jw-overlays,body .jwplayer.jw-flag-flash-blocked .jw-controls-backdrop,body .jwplayer.jw-flag-flash-blocked .jw-preview{display:none}body .jwplayer.jw-flag-flash-blocked .jw-error-msg{top:25%}.jw-flag-touch.jw-breakpoint-7 .jw-captions,.jw-flag-touch.jw-breakpoint-6 .jw-captions,.jw-flag-touch.jw-breakpoint-5 .jw-captions,.jw-flag-touch.jw-breakpoint-4 .jw-captions,.jw-flag-touch.jw-breakpoint-7 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-6 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-5 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-4 .jw-nextup-container{bottom:4.25em}.jw-flag-touch.jw-breakpoint-7 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-6 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-5 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-4 video::-webkit-media-text-track-container{max-height:calc(100% - 60px)}.jw-flag-touch .jw-controlbar .jw-icon-volume{display:flex}.jw-flag-touch .jw-display,.jw-flag-touch .jw-display-container,.jw-flag-touch .jw-display-controls{pointer-events:none}.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-rewind,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-rewind{display:none}.jw-flag-touch.jw-state-paused.jw-flag-dragging .jw-display{display:none}.jw-flag-audio-player{background-color:#000}.jw-flag-audio-player:not(.jw-flag-flash-blocked) .jw-media{visibility:hidden}.jw-flag-audio-player .jw-title{background:none}.jw-flag-audio-player object{min-height:44px}.jw-flag-audio-player .jw-preview,.jw-flag-audio-player .jw-display,.jw-flag-audio-player .jw-title,.jw-flag-audio-player .jw-nextup-container{display:none}.jw-flag-audio-player .jw-controlbar{position:relative}.jw-flag-audio-player .jw-controlbar .jw-button-container{padding-right:3px;padding-left:0}.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip,.jw-flag-audio-player .jw-controlbar .jw-icon-inline{display:none}.jw-flag-audio-player .jw-controlbar .jw-icon-volume:not(.jw-icon-tooltip),.jw-flag-audio-player .jw-controlbar .jw-icon-playback,.jw-flag-audio-player .jw-controlbar .jw-icon-next,.jw-flag-audio-player .jw-controlbar .jw-icon-rewind,.jw-flag-audio-player .jw-controlbar .jw-icon-cast,.jw-flag-audio-player .jw-controlbar .jw-text-live,.jw-flag-audio-player .jw-controlbar .jw-icon-airplay,.jw-flag-audio-player .jw-controlbar .jw-logo-button,.jw-flag-audio-player .jw-controlbar .jw-text-elapsed,.jw-flag-audio-player .jw-controlbar .jw-text-duration{display:flex;flex:0 0 auto}.jw-flag-audio-player .jw-controlbar .jw-text-duration,.jw-flag-audio-player .jw-controlbar .jw-text-countdown{padding-right:10px}.jw-flag-audio-player .jw-controlbar .jw-slider-time{display:flex;flex:0 1 auto;align-items:center}.jw-flag-audio-player.jw-flag-small-player .jw-text-elapsed,.jw-flag-audio-player.jw-flag-small-player .jw-text-duration{display:none}.jw-flag-audio-player.jw-flag-ads .jw-slider-time{display:none}.jw-hidden{display:none}', ""])
    }, function(e, t, i) {
        var n = i(122);
        "string" == typeof n && (n = [
            ["all-players", n, ""]
        ]), i(41).style(n, "all-players"), n.locals && (e.exports = n.locals)
    }, function(e, t, i) {
        "use strict";
        i.d(t, "b", function() { return a }), i.d(t, "a", function() { return o });
        var n = i(1);

        function a(e, t, i) {
            var a = e + 1e3,
                r = n.o;
            return t > 0 ? (403 === t && (r = n.q), a += o(t)) : "http:" === ("" + i).substring(0, 5) && "https:" === document.location.protocol ? a += 12 : 0 === t && (a += 11), { code: a, key: r }
        }
        var o = function(e) { return e >= 400 && e < 600 ? e : 6 }
    }, function(e, t, i) {
        "use strict";
        t.a = { attachMedia: function() { this.eventsOn_() }, detachMedia: function() { return this.eventsOff_(), this.video } }
    }, function(e, t, i) {
        "use strict";
        var n = i(7),
            a = i(23),
            o = i(79),
            r = {
                container: null,
                volume: function(e) { this.video.volume = Math.min(Math.max(0, e / 100), 1) },
                mute: function(e) { this.video.muted = !!e, this.video.muted || this.video.removeAttribute("muted") },
                resize: function(e, t, i) {
                    var o = this.video,
                        r = o.videoWidth,
                        s = o.videoHeight;
                    if (e && t && r && s) {
                        var l = { objectFit: "", width: "", height: "" };
                        if ("uniform" === i) {
                            var c = e / t,
                                u = r / s,
                                d = Math.abs(c - u);
                            d < .09 && d > .0025 && (l.objectFit = "fill", i = "exactfit")
                        }
                        if (n.Browser.ie || n.OS.iOS && n.OS.version.major < 9 || n.Browser.androidNative)
                            if ("uniform" !== i) {
                                l.objectFit = "contain";
                                var p = e / t,
                                    f = r / s,
                                    h = 1,
                                    w = 1;
                                "none" === i ? h = w = p > f ? Math.ceil(100 * s / t) / 100 : Math.ceil(100 * r / e) / 100 : "fill" === i ? h = w = p > f ? p / f : f / p : "exactfit" === i && (p > f ? (h = p / f, w = 1) : (h = 1, w = f / p)), Object(a.e)(o, "matrix(" + h.toFixed(2) + ", 0, 0, " + w.toFixed(2) + ", 0, 0)")
                            } else l.top = l.left = l.margin = "", Object(a.e)(o, "");
                        Object(a.d)(o, l)
                    }
                },
                getContainer: function() { return this.container },
                setContainer: function(e) { this.container = e, this.video.parentNode !== e && e.appendChild(this.video) },
                remove: function() {
                    this.stop(), this.destroy();
                    var e = this.container;
                    e && e === this.video.parentNode && e.removeChild(this.video)
                },
                atEdgeOfLiveStream: function() { if (!this.isLive()) return !1; return Object(o.a)(this.video.buffered) - this.video.currentTime <= 2 }
            };
        t.a = r
    }, function(e, t, i) {
        "use strict";
        var n = i(3),
            a = i(50),
            o = {
                canplay: function() { this.trigger(n.E) },
                play: function() { this.stallTime = -1, this.video.paused || this.state === n.Pa || this.setState(n.Na) },
                loadedmetadata: function() {
                    var e = { duration: this.getDuration(), height: this.video.videoHeight, width: this.video.videoWidth, seekRange: this.getSeekRange() },
                        t = this.drmUsed;
                    t && (e.drm = t), this.trigger(n.K, e)
                },
                timeupdate: function() {
                    var e = this.video.currentTime,
                        t = this.getCurrentTime(),
                        i = this.getDuration();
                    if (!isNaN(i)) {
                        this.seeking || this.video.paused || this.state !== n.Qa && this.state !== n.Na || this.stallTime === e || (this.stallTime = -1, this.setState(n.Pa));
                        var a = { position: t, duration: i, currentTime: e, seekRange: this.getSeekRange(), metadata: { currentTime: e } };
                        if (this.getPtsOffset) {
                            var o = this.getPtsOffset();
                            o >= 0 && (a.metadata.mpegts = o + t)
                        }(this.state === n.Pa || this.seeking) && this.trigger(n.R, a)
                    }
                },
                click: function(e) { this.trigger(n.n, e) },
                volumechange: function() {
                    var e = this.video;
                    this.trigger(n.U, { volume: Math.round(100 * e.volume) }), this.trigger(n.L, { mute: e.muted })
                },
                seeked: function() { this.seeking && (this.seeking = !1, this.trigger(n.Q)) },
                playing: function() {-1 === this.stallTime && this.setState(n.Pa), this.trigger(n.Fa) },
                pause: function() { this.state !== n.Ka && (this.video.ended || this.video.error || this.video.currentTime !== this.video.duration && this.setState(n.Oa)) },
                progress: function() {
                    var e = this.getDuration();
                    if (!(e <= 0 || e === 1 / 0)) {
                        var t = this.video.buffered;
                        if (t && 0 !== t.length) {
                            var i = Object(a.a)(t.end(t.length - 1) / e, 0, 1);
                            this.trigger(n.D, { bufferPercent: 100 * i, position: this.getCurrentTime(), duration: e, currentTime: this.video.currentTime, seekRange: this.getSeekRange() })
                        }
                    }
                },
                ratechange: function() { this.trigger(n.O, { playbackRate: this.video.playbackRate }) },
                ended: function() { this.videoHeight = 0, this.streamBitrate = 0, this.state !== n.Ma && this.state !== n.Ka && this.trigger(n.F) },
                loadeddata: function() { this.renderNatively && this.setTextTracks(this.video.textTracks) }
            };
        t.a = o
    }, function(e, t, i) {
        "use strict";
        i.r(t);
        var n = i(0),
            a = i(44),
            o = i(3),
            r = i(105),
            s = i(7),
            l = i(59),
            c = i(127),
            u = i(126),
            d = i(125),
            p = i(72),
            f = i(23),
            h = i(10),
            w = i(55),
            g = i(5),
            j = i(77),
            v = i(79),
            m = i(71),
            b = i(16),
            y = i(1),
            k = 224e3,
            x = 224005,
            O = 221e3,
            T = window.clearTimeout,
            C = "html5",
            _ = function() {};

        function M(e, t) { Object.keys(e).forEach(function(i) { t.removeEventListener(i, e[i]) }) }

        function S(e, t, i) {
            this.state = o.Ma, this.seeking = !1;
            var a = this,
                w = t.minDvrWindow,
                S = {
                    progress: function() { c.a.progress.call(a), fe() },
                    timeupdate: function() { z !== E.currentTime && (G(E.currentTime), c.a.timeupdate.call(a)), fe(), s.Browser.ie && X() },
                    resize: X,
                    ended: function() { V = -1, he(), c.a.ended.call(a) },
                    loadedmetadata: function() {
                        var e = a.getDuration();
                        K && e === 1 / 0 && (e = 0);
                        var t = { duration: e, height: E.videoHeight, width: E.videoWidth };
                        a.trigger(o.K, t), X()
                    },
                    durationchange: function() { K || c.a.progress.call(a) },
                    loadeddata: function() {
                        c.a.loadeddata.call(a),
                            function(e) {
                                if (D = null, !e) return;
                                if (e.length) {
                                    for (var t = 0; t < e.length; t++)
                                        if (e[t].enabled) { q = t; break } - 1 === q && (e[q = 0].enabled = !0), D = Object(n.A)(e, function(e) { var t = { name: e.label || e.language, language: e.language }; return t })
                                }
                                a.addTracksListener(e, "change", le), D && a.trigger("audioTracks", { currentTrack: q, tracks: D })
                            }(E.audioTracks),
                            function(e) { B && -1 !== B && e && e !== 1 / 0 && a.seek(B) }(a.getDuration()), X()
                    },
                    canplay: function() { I = !0, K || pe(), s.Browser.ie && 9 === s.Browser.version.major && a.setTextTracks(a._textTracks), c.a.canplay.call(a) },
                    seeking: function() {
                        var e = null !== R ? R : a.getCurrentTime(),
                            t = z;
                        G(e), R = null, B = 0, a.seeking = !0, a.trigger(o.P, { position: t, offset: e })
                    },
                    seeked: function() { c.a.seeked.call(a) },
                    waiting: function() { a.seeking ? a.setState(o.Na) : a.state === o.Pa && (a.atEdgeOfLiveStream() && a.setPlaybackRate(1), a.stallTime = a.video.currentTime, a.setState(o.Qa)) },
                    webkitbeginfullscreen: function(e) { N = !0, ce(e) },
                    webkitendfullscreen: function(e) { N = !1, ce(e) },
                    error: function() {
                        var e = a.video,
                            t = e.error,
                            i = t && t.code || -1,
                            n = k,
                            r = y.o;
                        1 === i ? n += i : 2 === i ? (r = y.l, n = O) : 3 === i || 4 === i ? (n += i - 1, 4 === i && e.src === location.href && (n = x)) : r = y.r, oe(), a.trigger(o.G, new y.s(r, n, t))
                    }
                };
            Object.keys(c.a).forEach(function(e) {
                if (!S[e]) {
                    var t = c.a[e];
                    S[e] = function(e) { t.call(a, e) }
                }
            }), Object(n.j)(this, g.a, u.a, d.a, j.a, { renderNatively: function(e) { return !(!s.OS.iOS && !s.Browser.safari) || e && s.Browser.chrome }(t.renderCaptionsNatively), eventsOn_: function() {! function(e, t) { Object.keys(e).forEach(function(i) { t.removeEventListener(i, e[i]), t.addEventListener(i, e[i]) }) }(S, E) }, eventsOff_: function() { M(S, E) }, detachMedia: function() { return d.a.detachMedia.call(a), he(), this.removeTracksListener(E.textTracks, "change", this.textTrackChangeHandler), this.disableTextTrack(), E }, attachMedia: function() { d.a.attachMedia.call(a), I = !1, this.seeking = !1, E.loop = !1, this.enableTextTrack(), this.renderNatively && this.setTextTracks(this.video.textTracks), this.addTracksListener(E.textTracks, "change", this.textTrackChangeHandler) }, isLive: function() { return E.duration === 1 / 0 } });
            var E = i,
                L = { level: {} },
                P = null !== t.liveTimeout ? t.liveTimeout : 3e4,
                I = !1,
                B = 0,
                R = null,
                z = null,
                H = void 0,
                V = -1,
                N = !1,
                F = _,
                D = null,
                q = -1,
                U = -1,
                W = !1,
                Z = null,
                K = !1,
                Q = null,
                J = null,
                Y = 0;

            function X() {
                var e = L.level;
                if (e.width !== E.videoWidth || e.height !== E.videoHeight) {
                    if (!E.videoWidth && !de() || -1 === V) return;
                    e.width = E.videoWidth, e.height = E.videoHeight, pe(), L.reason = L.reason || "auto", L.mode = "hls" === H[V].type ? "auto" : "manual", L.bitrate = 0, e.index = V, e.label = H[V].label, a.trigger(o.T, L), L.reason = ""
                }
            }

            function G(e) { z = $(e) }

            function $(e) { var t = a.getSeekRange(); if (a.isLive() && Object(p.a)(t.end - t.start, w)) { e -= t.end; var i = Math.abs(Q - t.end) > 1; return J && !i || function(e) { Q = e.end, J = E.currentTime - Q, Y = Object(b.a)() }(t), J } return e }

            function ee(e) { var t = void 0; return Array.isArray(e) && e.length > 0 && (t = e.map(function(e, t) { return { label: e.label || t } })), t }

            function te(e) {
                w = e.minDvrWindow, H = e.sources, V = function(e) {
                    var i = Math.max(0, V),
                        n = t.qualityLabel;
                    if (e)
                        for (var a = 0; a < e.length; a++)
                            if (e[a].default && (i = a), n && e[a].label === n) return a;
                    L.reason = "initial choice", L.level.width && L.level.height || (L.level = {});
                    return i
                }(H)
            }

            function ie() { return E.paused && E.played && E.played.length && a.isLive() && !Object(p.a)(se() - re(), w) && (a.clearTracks(), E.load()), E.play() || Object(m.a)(E) }

            function ne(e) {
                B = 0, he();
                var t = E.src,
                    i = document.createElement("source");
                i.src = H[V].file, i.src !== t ? (ae(H[V]), t && E.load()) : 0 === e && E.currentTime > 0 && (B = -1, a.seek(e)), e > 0 && E.currentTime !== e && a.seek(e);
                var n = ee(H);
                n && a.trigger(o.I, { levels: n, currentQuality: V }), H.length && "hls" !== H[0].type && a.sendMediaType(H)
            }

            function ae(e) {
                D = null, q = -1, L.reason || (L.reason = "initial choice", L.level = {}), I = !1;
                var t = document.createElement("source");
                t.src = e.file, E.src !== t.src && (E.src = e.file)
            }

            function oe() { E && (a.disableTextTrack(), E.removeAttribute("preload"), E.removeAttribute("src"), Object(h.g)(E), Object(f.d)(E, { objectFit: "" }), V = -1, !s.Browser.msie && "load" in E && E.load()) }

            function re() { var e = 1 / 0; return ["buffered", "seekable"].forEach(function(t) { for (var i = E[t], n = i ? i.length : 0; n--;) e = Math.min(e, i.start(n)) }), e }

            function se() { var e = 0; return ["buffered", "seekable"].forEach(function(t) { for (var i = E[t], n = i ? i.length : 0; n--;) e = Math.max(e, i.end(n)) }), e }

            function le() {
                for (var e = -1, t = 0; t < E.audioTracks.length; t++)
                    if (E.audioTracks[t].enabled) { e = t; break }
                ue(e)
            }

            function ce(e) { a.trigger("fullscreenchange", { target: e.target, jwstate: N }) }

            function ue(e) { E && E.audioTracks && D && e > -1 && e < E.audioTracks.length && e !== q && (E.audioTracks[q].enabled = !1, q = e, E.audioTracks[q].enabled = !0, a.trigger("audioTrackChanged", { currentTrack: q, tracks: D })) }

            function de() { return 0 === E.videoHeight && !((s.OS.iOS || s.Browser.safari) && E.readyState < 2) }

            function pe() {
                if ("hls" === H[0].type) {
                    var e = de() ? "audio" : "video";
                    a.trigger(o.S, { mediaType: e })
                }
            }

            function fe() {
                if (0 !== P) {
                    var e = Object(v.a)(E.buffered);
                    a.isLive() && e && Z === e ? -1 === U && (U = setTimeout(function() {
                        W = !0,
                            function() { if (W && a.atEdgeOfLiveStream()) return a.trigger(o.G, new y.s(y.p, A)), !0 }()
                    }, P)) : (he(), W = !1), Z = e
                }
            }

            function he() { T(U), U = -1 }
            this.isSDK = !!t.sdkplatform, this.video = E, this.supportsPlaybackRate = !0, a.getCurrentTime = function() { return $(E.currentTime) }, a.getDuration = function() {
                var e = E.duration;
                if (K && e === 1 / 0 && 0 === E.currentTime || isNaN(e)) return 0;
                var t = se();
                if (a.isLive() && t) {
                    var i = t - re();
                    Object(p.a)(i, w) && (e = -i)
                }
                return e
            }, a.getSeekRange = function() { var e = { start: 0, end: E.duration }; return E.seekable.length && (e.end = se(), e.start = re()), e }, this.stop = function() { he(), oe(), this.clearTracks(), s.Browser.ie && E.pause(), this.setState(o.Ma) }, this.destroy = function() { F = _, M(S, E), this.removeTracksListener(E.audioTracks, "change", le), this.removeTracksListener(E.textTracks, "change", a.textTrackChangeHandler), this.off() }, this.init = function(e) {
                te(e);
                var t = H[V];
                (K = Object(l.a)(t)) && (a.supportsPlaybackRate = !1, S.waiting = _), a.eventsOn_(), H.length && "hls" !== H[0].type && this.sendMediaType(H), L.reason = ""
            }, this.preload = function(e) {
                te(e);
                var t = H[V],
                    i = t.preload || "metadata";
                "none" !== i && (E.setAttribute("preload", i), ae(t))
            }, this.load = function(e) { te(e), ne(e.starttime), this.setupSideloadedTracks(e.tracks) }, this.play = function() { return F(), ie() }, this.pause = function() {
                he(), F = function() {
                    if (E.paused && E.currentTime && a.isLive()) {
                        var e = se(),
                            t = e - re(),
                            i = !Object(p.a)(t, w),
                            n = e - E.currentTime;
                        i && e && (n > 15 || n < 0) && (R = Math.max(e - 10, e - t), G(E.currentTime), E.currentTime = R)
                    }
                }, E.pause()
            }, this.seek = function(e) {
                var t = a.getSeekRange();
                if (e < 0 && (e += t.start + t.end), I || (I = !!t.end), I) {
                    B = 0;
                    try {
                        if (a.seeking = !0, a.isLive() && Object(p.a)(t.end - t.start, w)) {
                            var i = Math.min(12, (Object(b.a)() - Y) / 1e3);
                            J = e - Q, R += i
                        } else R = e;
                        G(E.currentTime), E.currentTime = e
                    } catch (t) { a.seeking = !1, B = e }
                } else B = e, s.Browser.firefox && E.paused && ie()
            }, this.setVisibility = function(e) {
                (e = !!e) || s.OS.android ? Object(f.d)(a.container, { visibility: "visible", opacity: 1 }) : Object(f.d)(a.container, { visibility: "", opacity: 0 })
            }, this.setFullscreen = function(e) {
                if (e = !!e) {
                    try {
                        var t = E.webkitEnterFullscreen || E.webkitEnterFullScreen;
                        t && t.apply(E)
                    } catch (e) { return !1 }
                    return a.getFullScreen()
                }
                var i = E.webkitExitFullscreen || E.webkitExitFullScreen;
                return i && i.apply(E), e
            }, a.getFullScreen = function() { return N || !!E.webkitDisplayingFullscreen }, this.setCurrentQuality = function(e) { V !== e && e >= 0 && H && H.length > e && (V = e, L.reason = "api", L.level = {}, this.trigger(o.J, { currentQuality: e, levels: ee(H) }), t.qualityLabel = H[e].label, ne(E.currentTime || 0), ie()) }, this.setPlaybackRate = function(e) { E.playbackRate = E.defaultPlaybackRate = e }, this.getPlaybackRate = function() { return E.playbackRate }, this.getCurrentQuality = function() { return V }, this.getQualityLevels = function() { return Array.isArray(H) ? H.map(function(e) { return Object(r.a)(e) }) : [] }, this.getName = function() { return { name: C } }, this.setCurrentAudioTrack = ue, this.getAudioTracks = function() { return D || [] }, this.getCurrentAudioTrack = function() { return q }
        }
        Object(n.j)(S.prototype, w.a), S.getName = function() { return { name: "html5" } };
        var E = S,
            A = 220001,
            L = i(27),
            P = i(76),
            I = i(124),
            B = function(e, t, i) {
                E.call(this, e, t, i);
                var r = this,
                    s = r.init,
                    l = r.load,
                    c = r.destroy,
                    u = r.renderNatively;

                function d(e) { Object(P.a)([e]) ? r.renderNatively = !1 : r.renderNatively = u }

                function p(e) {
                    var t = e.sources[0];
                    if (!r.fairplay || !Object.is(r.fairplay.source, t)) {
                        var i = t.drm;
                        i && i.fairplay ? (r.fairplay = Object(n.j)({}, { certificateUrl: "", processSpcUrl: "", licenseResponseType: "arraybuffer", licenseRequestHeaders: [], licenseRequestMessage: function(e) { return e }, licenseRequestFilter: function() {}, licenseResponseFilter: function() {}, extractContentId: function(e) { return e.split("skd://")[1] }, extractKey: function(e) { return new Uint8Array(e) } }, i.fairplay), r.fairplay.source = t, r.fairplay.destroy = function() {
                            z(r.video, "webkitneedkey", f);
                            var e = this.session;
                            e && (z(e, "webkitkeymessage", h), z(e, "webkitkeyerror", b)), r.fairplay = null
                        }, R(r.video, "webkitneedkey", f)) : r.fairplay && r.fairplay.destroy()
                    }
                }

                function f(e) {
                    var t = e.target,
                        i = e.initData;
                    if (t.webkitKeys || t.webkitSetMediaKeys(new window.WebKitMediaKeys("com.apple.fps.1_0")), !t.webkitKeys) throw new Error("Could not create MediaKeys");
                    var n = r.fairplay;
                    n.initData = i, Object(L.a)(n.certificateUrl, function(e) {
                        var a = new Uint8Array(e.response),
                            o = n.extractContentId(H(i));
                        "string" == typeof o && (o = function(e) { for (var t = new ArrayBuffer(2 * e.length), i = new Uint16Array(t), n = 0, a = e.length; n < a; n++) i[n] = e.charCodeAt(n); return i }(o));
                        var r = function(e, t, i) {
                                var n = 0,
                                    a = new ArrayBuffer(e.byteLength + 4 + t.byteLength + 4 + i.byteLength),
                                    o = new DataView(a);
                                new Uint8Array(a, n, e.byteLength).set(e), n += e.byteLength, o.setUint32(n, t.byteLength, !0), n += 4;
                                var r = new Uint16Array(a, n, t.length);
                                return r.set(t), n += r.byteLength, o.setUint32(n, i.byteLength, !0), n += 4, new Uint8Array(a, n, i.byteLength).set(i), new Uint8Array(a, 0, a.byteLength)
                            }(i, o, a),
                            s = t.webkitKeys.createSession("video/mp4", r);
                        if (!s) throw new Error("Could not create key session");
                        R(s, "webkitkeymessage", h), R(s, "webkitkeyerror", b), n.session = s
                    }, m, { responseType: "arraybuffer" })
                }

                function h(e) {
                    var t = r.fairplay,
                        i = e.target,
                        n = e.message,
                        a = new XMLHttpRequest;
                    a.responseType = t.licenseResponseType, a.addEventListener("load", g, !1), a.addEventListener("error", k, !1);
                    var o = "";
                    o = "function" == typeof t.processSpcUrl ? t.processSpcUrl(H(t.initData)) : t.processSpcUrl, a.open("POST", o, !0), a.body = t.licenseRequestMessage(n, i), a.headers = {}, [].concat(t.licenseRequestHeaders || []).forEach(function(e) { a.setRequestHeader(e.name, e.value) });
                    var s = t.licenseRequestFilter.call(e.target, a, t);
                    s && "function" == typeof s.then ? s.then(function() { w(a) }) : w(a)
                }

                function w(e) { Object.keys(e.headers).forEach(function(t) { e.setRequestHeader(t, e.headers[t]) }), e.send(e.body) }

                function g(e) {
                    var t = r.fairplay,
                        i = e.target,
                        n = {};
                    (i.getAllResponseHeaders() || "").trim().split(/[\r\n]+/).forEach(function(e) {
                        var t = e.split(": "),
                            i = t.shift();
                        n[i] = t.join(": ")
                    });
                    var a = { data: i.response, headers: n },
                        o = t.licenseResponseFilter.call(e.target, a, t);
                    o && "function" == typeof o.then ? o.then(function() { j(a.data) }) : j(a.data)
                }

                function j(e) { var t = r.fairplay.extractKey(e); "function" == typeof t.then ? t.then(v) : v(t) }

                function v(e) {
                    var t = r.fairplay.session,
                        i = e;
                    "string" == typeof i && (i = function(e) { for (var t = Object(a.a)(e), i = t.length, n = new Uint8Array(new ArrayBuffer(i)), o = 0; o < i; o++) n[o] = t.charCodeAt(o); return n }(i)), t.update(i)
                }

                function m(e, t, i, n) { n.code += V, n.key = y.q, r.trigger(o.G, n) }

                function b(e) { r.trigger(o.G, new y.s(y.q, V + 650, e)) }

                function k(e) { r.trigger(o.G, new y.s(y.q, N + Object(I.a)(e.currentTarget.status), e)) }
                this.init = function(e) { p(e), d(e), s.call(this, e) }, this.load = function(e) { p(e), d(e), l.call(this, e) }, this.destroy = function(e) { this.fairplay && this.fairplay.destroy(), c.call(this, e) }
            };

        function R(e, t, i) { z(e, t, i), e.addEventListener(t, i, !1) }

        function z(e, t, i) { e && e.removeEventListener(t, i, !1) }

        function H(e) { var t = new Uint16Array(e.buffer); return String.fromCharCode.apply(null, t) }
        Object(n.j)(B.prototype, E.prototype), B.getName = E.getName;
        t.default = B;
        var V = 225e3,
            N = 226e3
    }])
]);