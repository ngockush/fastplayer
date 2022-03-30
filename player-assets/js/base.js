console.log("%cDừng lại!", "color: red; font-size: 50px; font-family: sans-serif; text-shadow: 1px 1px 5px #000;");
console.log("%cCó vẻ như bạn đang cố tình hack website của chúng tôi!", "color: #444; font-size: 25px; font-family: sans-serif;");

var clientSide = {
    lp: 0,
    dr: 0,
    player: {},
}
var getItem = function(i) {
    try {
        return localStorage.getItem(i);
    } catch (e) {
        return false;
    }
}
var getResume = function() {
    return getItem('resume' + getUrlQuery('embed'));
}
var prettySecond = function(sec) {
    var sec_num = parseInt(sec, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return hours + ':' + minutes + ':' + seconds;
}

var _resume = function(e) {
    $(document).on('click', '#resume_yes', function() {
        clientSide.player.seek(e);
        $('#resume').remove();
    });
    $(document).on('click', '#resume_no', function() {
        clientSide.player.play(true);
        $('#resume').remove();
    });
}
var popResume = function() {
    var resume_text = 'Chào mừng trở lại! Bạn rời đi lúc xx:xx:xx. Bạn có muốn tiếp tục xem tiếp?';
    if ($('#resume').length) return false;
    var data = getResume();
    var resumeAt = data.split(':')[0];
    var html = '<div id="resume"><div class="pop-wrap"><div class="pop-main"><div class="pop-html"><div class="pop-block"><div class="myConfirm">';
    html += '<p>' + resume_text.replace('xx:xx:xx', prettySecond(resumeAt)) + '</p>';
    html += '<p><button id="resume_no" class="button_resume">Bắt Đầu Lại</button><button id="resume_yes" class="button_resume">Tiếp Tục</button></p>';
    html += '</div></div></div></div></div></div>';
    $('#vstr').after(html);
    $('#resume').on("contextmenu", function(e) {
        e.preventDefault()
    });
    _resume(resumeAt);
    return true;
}
var getUrlQuery = function(name) {
    var URL = window.location.pathname;
    var id = URL.split('embed/')[1];
    return id;
}

var setItem = function(i, v) {
    try {
        localStorage.setItem(i, v);
        return true;
    } catch (e) {
        return false;
    }
}
var setResume = function(time) {
    return setItem('resume' + getUrlQuery('embed'), Math.floor(time));
}
var removeResume = function() {
    return removeItem('resume' + getUrlQuery('embed'));
}

function PlayerBase(LogoURL, AutoStart, MuteAudio, TuaVideo, TileVideo, TextLogo, HomeURL, ThumbnailPlayer, SourceVideoPlayer) {
    var advertising = {
        client: `${HomeURL}/player-assets/js/vast.js`,
        admessage: 'Quảng cáo còn XX giây.',
        skipoffset: 5,
        skiptext: 'Bỏ qua quảng cáo',
        skipmessage: 'Bỏ qua sau xxs',
        width: '100%',
        height: '100%',
        autostart: true,
        schedule: {
            preroll: {
                offset: 'pre',
                tag: arrPreroll,
            },
        }
    };
    if (subtitle != '') {
        var Captions = {
            "kind": "captions",
            "file": subtitle,
            "label": label_subtitle
        }
    }
    const playerInstance = jwplayer(TextLogo);
    clientSide.player = playerInstance;
    playerInstance.setup({
        "sources": SourceVideoPlayer,
        "displaytitle": true,
        "title": TileVideo,
        "abouttext": 'Trình Phát Video Thuộc : <span class="jw-reset">' + TextLogo + '</span>',
        "aboutlink": HomeURL,
        "image": ThumbnailPlayer,
        "allowscriptaccess": "always",
        "skin": {
            "name": "tube",
            "active": "#FF9966",
            "inactive": "#FF9966",
        },
        "androidhls": true,
        "volume": 70,
        "allowfullscreen": true,
        "width": '100%',
        "aspectratio": '16:9',
        "playbackRateControls": true,
        "autostart": AutoStart,
        "mute": MuteAudio,
        "cast": {
            "appid": "00000000"
        },
        "logo": {
            width: '300px',
            position: "top-right",
            file: LogoURL
        },
        "primary": 'html5',
        "hlshtml": true,
        advertising: advertising,
        "tracks": [Captions]
    });
    playerInstance.setCaptions({
        back: true,
        backgroundOpacity: "0",
        edgeStyle: "dropshadow",
        fontSize: 15,
        fontFamily: "Arial",
        fontOpacity: 300,
        fontScale: 0.5,
        windowOpacity: 0,
        color: "#ffff00"
    });

    playerInstance.on('error', function(message) {
        toastr.error('Có chút vấn đề khi load phim', 'Oops!');
        jQuery(`#${TextLogo}`).find(".jw-title-primary").text("Có chút vấn đề khi load phim").show();
        jQuery(`#${TextLogo}`).find(".jw-title-secondary").text("Chạy lại trang (ấn F5) hoặc mở link khác bên dưới").show();
    });
    playerInstance.on('setupError', function(message) {
        toastr.error('Tập Phim Này Đã Bị Lỗi Hoặc Chưa Xử Lý Xong Vui Lòng Thử Lại Sau', 'Oops!');
        jQuery(`#${TextLogo}`).find(".jw-error-text").text("Tập Phim Này Đã Bị Lỗi Hoặc Chưa Xử Lý Xong Vui Lòng Thử Lại Sau").show();
    });
    if (resumeplayer == true) {
        playerInstance.on('time', function(e) {
            setResume(e.position);
        });
        playerInstance.once("ready", function() {
            if (getResume() >= 1) {
                popResume();
            } else {
                playerInstance.play();
            }
        });
    }
    if (TuaVideo == true) {
        playerInstance.addButton(`https://i.imgur.com/7x4nZNq.png`, "Skip OP/ED", function() {
            playerInstance.seek(playerInstance.getPosition() + 90);
        }, "skipButton");
        playerInstance.addButton(`${HomeURL}/player-assets/css/FFD700forward.png`, "Next 15s", function() {
            playerInstance.seek(playerInstance.getPosition() + 15);
        }, "Next 15s");
        playerInstance.addButton(`${HomeURL}/player-assets/css/FFD700backward.png`, "Back 15s", function() {
            playerInstance.seek(playerInstance.getPosition() - 15);
        }, "Back 15s");
        playerInstance.addButton(LogoURL, "Logo Player");

    };
    if (LinkVoice) {
        var VoiceUsser = setInterval(function() {
            var TimePlayer = playerInstance.getPosition();
            if (TimePlayer >= 5) {
                clearInterval(VoiceUsser);
                var VoiceUser = new Audio(LinkVoice);
                VoiceUser.play();
            }
        }, 1000);
    }
}