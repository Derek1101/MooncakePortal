function WebTrends() {
    var n = this;
    this.dcsid = typeof gDcsId != "undefined" && gDcsId ? gDcsId : "not_a_valid_dcsid";
    this.domain = typeof gDomain != "undefined" && gDomain ? gDomain : "m.webtrends.com";
    this.timezone = typeof gTimeZone != "undefined" && gTimeZone ? gTimeZone : 8;
    this.fpcdom = typeof gFpcDom != "undefined" && gFpcDom ? gFpcDom : /microsoft.com$/.test(window.location.hostname) ? ".microsoft.com" : window.location.hostname;
    typeof gOffsite != "undefined" && gOffsite && (gOffsite == !0 || gOffsite == "true") && (this.fpcdom = "");
    this.navigationtag = "div,table";
    this.trackevents = typeof gTrackEvents != "undefined" && gTrackEvents && (gTrackEvents == 1 || gTrackEvents == "1") ? !0 : !1;
    this.evi = { cookie: "MC1, A", qp: "WT.dcsvid, WT.z_Acookie", crumb: "", sep: "" };
    this.enabled = !0;
    this.i18n = !0;
    this.fpc = "WT_FPC";
    this.paidsearchparams = "gclid";
    this.DCS = {};
    this.WT = {};
    this.DCSext = {};
    this.DCSdir = {};
    this.images = [];
    this.index = 0;
    this.qp = [];
    this.exre = function () {
        return window.RegExp ? new RegExp("dcs(uri)|(ref)|(aut)|(met)|(sta)|(sip)|(pro)|(byt)|(dat)|(p3p)|(cfg)|(redirect)|(cip)", "i") : "";
    }();
    this.re = function () {
        return window.RegExp ? n.i18n ? { "%25": /\%/g, "%23": /\#/g, "%26": /\&/g } : { "%09": /\t/g, "%20": / /g, "%23": /\#/g, "%26": /\&/g, "%2B": /\+/g, "%3F": /\?/g, "%5C": /\\/g, "%22": /\"/g, "%7F": /\x7F/g, "%A0": /\xA0/g } : "";
    }();
}
function dcsMultiTrack() {
    if (typeof _tag != "undefined")
        return _tag.dcsMultiTrack();
}
function dcsSetVar() {
    if (typeof _tag != "undefined")
        return _tag.dcsMSSetVar();
}
function CalTempFactory_Name(n) {
    return $("<h2 class='cal_temp_name' >").text(n);
}
function CalTempFactory_Type(n) {
    var t = $("<div class='cal_temp_type'>"), i, r;
    return t.append($("<h3>选择类型 <\/h3>")), i = $("<div class='right_box'>"), r = !0, $.each(n.Type, function () {
        var f = StringFormat(this.Service), e = StringFormat(this.Type), s = $("<span class='type' data-service='" + f + "' data-type='" + e + "'>"), n = $("<input type='radio'>"), u, o;
        n.attr("name", "CalTemp_type_" + this.Service);
        n.attr("id", "CalTemp_type_" + f + "_" + e);
        r && (n.attr("checked", ""), r = !1);
        u = $("<label>");
        u.attr("for", "CalTemp_type_" + f + "_" + e);
        u.text(this.Type);
        u.click(function () {
            $("[checked='checked']", t).removeAttr("checked");
            n.attr("checked", "checked");
        });
        o = $("<a>").attr("id", "caltemp_type_" + StringFormat(this.Service) + "_" + StringFormat(this.Type));
        o.append(n).append(u);
        s.append(o);
        i.append(s);
    }), t.append(i), t;
}
function CalTempFactory_Size(n) {
    var i = $("<div class='config price_config cal_temp_size' data-price='" + n.Sizes[0].PricePerTier + "' data-count='0'>"), t, r, u;
    return i.append($("<h3>配置等级 <\/h3>")), t = $("<div class='right_box'>"), r = !0, $.each(n.Sizes, function () {
        var o = $("<div class='size' data-size='" + StringFormat(this.Name) + "'>"), f = $("<a>").attr("id", "caltemp_size_" + StringFormat(n.Service) + "_" + StringFormat(n.Type) + "_" + StringFormat(n.Feature) + "_" + StringFormat(this.Name) + "_" + StringFormat(this.Description)), i = $("<input type='radio'>"), u, e;
        i.attr("name", "CalTemp_size_" + StringFormat(n.Service) + "_" + StringFormat(n.Type) + "_" + StringFormat(n.Feature));
        i.attr("id", "CalTemp_size_" + StringFormat(n.Service) + "_" + StringFormat(n.Type) + "_" + StringFormat(n.Feature) + "_" + StringFormat(this.Name));
        i.attr("data-price-per-tier", this.PricePerTier);
        i.attr("data-price-tier", this.PriceTier);
        i.attr("data-count", 0);
        r && (i.attr("checked", "checked"), r = !1);
        f.append(i);
        u = $("<label>");
        u.attr("for", "CalTemp_size_" + StringFormat(n.Service) + "_" + StringFormat(n.Type) + "_" + StringFormat(n.Feature) + "_" + StringFormat(this.Name));
        u.text(this.Name);
        u.attr("id", "caltemp_size_" + n.Service + "_" + n.Type + "_" + StringFormat(this.Name) + "_" + StringFormat(this.Description));
        f.append(u);
        e = $("<div class='description'>");
        e.text(this.Description);
        f.append(e);
        o.append(f);
        t.append(o);
    }), n.Feature != "default" && (u = $("<div class='feature_name'>"), u.text(n.Feature), t.append(u)), i.append(t), i;
}
function StringFormat(n) {
    return n.replace(/[^a-zA-Z0-9\u4e00-\u9fa5a]/g, "_");
}
function CalTempFactory_Slider(n) {
    var i = $("<div class='cal_temp_slider config'>"), e, a, v, f, t, o, y, p, k, w;
    i.attr("data-price-tier", n.PriceTier);
    i.attr("data-price-per-tier", n.PricePerTier);
    i.attr("data-total-price", "0");
    e = $("<h3>");
    n.Feature != "default" ? e.text(n.Feature) : e.text("选择配置");
    var s = $("<div class='size slider right_box'>"), h = $("<div class='group1'>"), l = $("<div class='slider-div-container'>");
    h.append(l);
    var u = $("<div class='labels'>"), b = parseInt(n.MaxUnit), r = parseInt(n.MinUnit), c = (b - r) / 3;
    return u.append($("<div>").attr("class", "lbl1").text(r)), r += c, a = $("<div>").attr("class", "lbl2").text(Math.round(r)), u.append(a), r += c, v = $("<div>").attr("class", "lbl3").text(Math.round(r)), u.append(v), r += c, u.append($("<div>").attr("class", "lbl4").text(r)), h.append(u), s.append(h), f = $("<div class='output'>"), t = $("<input class='input' pattern='[0-9]{1,9}' data-rangeOK='ok'>").attr("value", "0"), f.append(t), f.append($("<span class='unit'>").text(n.PriceUnit)), o = $("<div class='ErrorMessage' ><img src='http://wacnstorage.blob.core.chinacloudapi.cn/marketing-resource/css/img/information.png'>请输入一个介于<span class='lower'>" + n.MinUnit + "<\/span>和<span class='upper'>" + n.MaxUnit + "<\/span>之间的整数。<\/div>"), f.append(o), s.append(f), i.append(e).append(s), y = function (i) {
        var u = parseInt(n.MinUnit), f = parseInt(n.MaxUnit), e = f - u, r;
        i = i / 100;
        r = Math.round(e * i);
        r += u;
        t.val(r);
        t.trigger("change");
    }, p = function () {
        for (var s = parseInt(t.val()), l = n.PriceTier.split(","), h = n.PricePerTier.split(","), c = 0, f, o, e, r, a, u = 0; u < h.length; u++)
            if (n.PriceTier == "-1" ? (f = n.MinUnit, o = n.MaxUnit) : (f = l[2 * u], o = l[2 * u + 1]), s >= f && s <= o) {
                e = parseFloat(h[u]);
                r = f;
                r == 0 && (r = 1);
                c += e * (s - r + 1);
                break;
            }
            else
                e = parseFloat(h[u]), r = f, r == 0 && (r = 1), a = o - r + 1, c += e * a;
        i.attr("data-total-price", c);
    }, t.keyup(function () {
        var r, u, f;
        if ($.isNumeric(t.val()))
            if (r = parseInt(t.val()), r <= parseInt(n.MaxUnit) && r >= parseInt(n.MinUnit)) {
                t.attr("data-rangeOk", "ok");
                o.attr("display", "none");
                u = t.val();
                u = parseInt(u);
                var e = parseInt(n.MinUnit), h = parseInt(n.MaxUnit), r = u - e, s = h - e;
                r *= 1;
                s *= 1;
                f = r / s * 100;
                $(".ui-slider-handle", i).css("left", f + "%");
                $(".ui-slider-range", i).css("width", f + "%");
            }
            else
                t.attr("data-rangeOk", "notOk"), o.attr("display", "inline-block");
    }), t.change(function () {
        p();
        var t = $(this).closest(".feature"), n = {};
        n.ServiceName = t.data("service");
        n.TypeName = t.data("type");
        n.FeatureName = t.data("feature");
        n.SizeName = "default";
        n.SliderValue = $(this).val();
        CalculatorUIRenderer.UpdateByUIChange_Slider(n);
    }), k = function () {
        return n.MaxUnit >= 1e5;
    }, w = function () {
        var t = $("<div class='slider-div'>").attr("data-min", n.MinUnit).attr("data-max", n.MaxUnit).attr("data-tier", "-1").attr("data-step", "1");
        t.append($("<div class='dividends'><div class='div1' style='left: 33.333%;'><\/div><div class='div2' style='left: 66.666%;'><\/div><\/div>"));
        l.replaceWith(t);
        $(".slider-div", i).slider({ orientation: "horizontal", range: "min", min: n.MinUnit, max: n.MaxUnit, step: 1, value: 0, change: function (n, t) {
            var i = parseFloat(t.handle.style.left);
            y(i);
        } });
        t.wrap($("<a>").attr("id", "caltemp_slider_" + StringFormat(n.Service) + "_" + StringFormat(n.Type) + "_" + StringFormat(n.Feature)));
    }, { rootNode: i, renderFunc: w };
}
function CalTempFactory_Slider_SqlDatabase(n) {
    var r = $("<div class='cal_temp_slider config'>"), u, p, f, e, o, s, i, h, b, k;
    r.attr("data-total-price", "0");
    r.attr("data-price-tier", "0,100,101,200");
    r.attr("data-price-per-tier", "0.12,0.24");
    var d = $("<h3>").text("选择配置"), y = $("<div class='size slider right_box'>"), a = $("<div class='group1'>"), w = $("<div class='slider-div-container'>");
    a.append(w);
    u = $("<div class='labels'>");
    p = $("<div>").attr("class", "lbl1");
    u.append(p);
    f = $("<div>").attr("class", "lbl2");
    u.append(f);
    e = $("<div>").attr("class", "lbl3");
    u.append(e);
    o = $("<div>").attr("class", "lbl4");
    u.append(o);
    a.append(u);
    a.append(u);
    y.append(a);
    s = $("<div class='output'>");
    i = $("<input class='input' pattern='[0-9]{1,9}' data-rangeOK='ok'>").attr("value", "0");
    s.append(i);
    h = $("<span class='unit'>").text(n.price[0].PriceUnit);
    s.append(h);
    var g = parseInt(n.price[0].PriceTier.split(",")[0]) + n.price[0].PriceUnit, nt = parseInt(n.price[0].PriceTier.split(",")[n.price[0].PriceTier.split(",").length - 1]) + n.price[0].PriceUnit, tt = parseInt(n.price[1].PriceTier.split(",")[0]) + n.price[1].PriceUnit, it = parseInt(n.price[1].PriceTier.split(",")[n.price[1].PriceTier.split(",").length - 1]) + n.price[1].PriceUnit, c = $("<div class='ErrorMessage' ><img src='http://wacnstorage.blob.core.chinacloudapi.cn/marketing-resource/css/img/information.png'>请输入一个介于" + g + "和" + nt + ", " + tt + "和" + it + "之间的整数。<\/div>");
    s.append(c);
    y.append(s);
    r.append(d).append(y);
    var l = function (t) {
        var u;
        if (t /= 100, u = n.Percentage, t < u) {
            var c = t / u, f = n.price[0], i = f.PriceTier.split(","), e = parseInt(i[0]), o = parseInt(i[i.length - 1]), s = o - e, h = s * c, r = h + e;
            return r = Math.round(r), { FinalNum: r, UnitName: f.PriceUnit };
        }
        var l = t - u, a = l / (1 - u), f = n.price[1], i = f.PriceTier.split(","), e = parseInt(i[0]), o = parseInt(i[i.length - 1]), s = o - e, h = s * a, r = h + e;
        return r = Math.round(r), { FinalNum: r, UnitName: f.PriceUnit };
    }, rt = function (n) {
        var t = l(n);
        i.val(t.FinalNum);
        h.text(t.UnitName);
        i.trigger("change");
    }, v = function (n) {
        return n / 1024;
    }, t = l(0);
    return t.UnitName.toUpperCase().trim() == "MB" && (t.FinalNum = v(t.FinalNum)), p.text(Math.round(t.FinalNum)), t = l(33.3333333), t.UnitName.toUpperCase().trim() == "MB" && (t.FinalNum = v(t.FinalNum)), f.text(Math.round(t.FinalNum)), t = l(66.6666666), t.UnitName.toUpperCase().trim() == "MB" && (t.FinalNum = v(t.FinalNum)), e.text(Math.round(t.FinalNum)), t = l(100), t.UnitName.toUpperCase().trim() == "MB" && (t.FinalNum = v(t.FinalNum)), o.text(Math.round(t.FinalNum)), b = function () {
        var o = parseInt(i.val()), y = h.text(), s = 0, f, t, u, l, e;
        if (o == 0)
            r.attr("data-total-price", 0);
        else {
            for (f = 0; f < n.price.length; f++)
                if (n.price[f].PriceUnit == y) {
                    var a = n.price[f], v = a.PriceTier.split(","), c = a.PricePerTier.split(","), s = 0;
                    for (t = 0; t < c.length; t++)
                        if (u = parseFloat(v[t * 2]), u == 0 && (u = 1), l = parseFloat(v[t * 2 + 1]), o >= u && o <= l) {
                            e = parseFloat(c[t]);
                            s += e * (o - u + 1);
                            break;
                        }
                        else
                            e = parseFloat(c[t]), s += e * (l - u + 1);
                    break;
                }
            r.attr("data-total-price", s);
        }
    }, i.keyup(function () {
        var s, f, u, t;
        if ($.isNumeric(i.val())) {
            for (f = parseInt(i.val()), s = h.text(), t = 0; t < n.price.length; t++)
                if (n.price[t].PriceUnit == s) {
                    var l = n.price[t], e = l.PriceTier.split(","), o = parseInt(e[0]), a = parseInt(e[e.length - 1]);
                    f == 0 || f >= o & f <= a ? (i.attr("data-rangeOk", "ok"), c.css("display", "none")) : (i.attr("data-rangeOk", "notOk"), c.css("display", "inline-block"));
                    break;
                }
        }
        else
            c.css("display", "inline-block");
        if (c.css("display") == "none")
            if (f = i.val(), f == 0)
                u = 0, $(".ui-slider-handle", r).css("left", u * 100 + "%"), $(".ui-slider-range", r).css("width", u * 100 + "%");
            else
                for (u = null, t = 0; t < n.price.length; t++)
                    if (n.price[t].PriceUnit == s) {
                        var l = n.price[t], e = l.PriceTier.split(","), o = parseInt(e[0]), a = parseInt(e[e.length - 1]), v = (f - o) / (a - o);
                        u = t == 0 ? v * n.Percentage : (1 - n.Percentage) * v + n.Percentage;
                        u > 100 && (u = 100);
                        u < 0 && (u = 0);
                        $(".ui-slider-handle", r).css("left", u * 100 + "%");
                        $(".ui-slider-range", r).css("width", u * 100 + "%");
                        break;
                    }
    }), i.change(function () {
        b();
        var t = $(this).closest(".feature"), n = {};
        n.ServiceName = t.data("service");
        n.TypeName = t.data("type");
        n.FeatureName = t.data("feature");
        n.SizeName = "default";
        n.SliderValue = $(this).val();
        CalculatorUIRenderer.UpdateByUIChange_Slider(n);
    }), k = function () {
        f.css("margin-left", "calc(" + f.width() * -.5 + "px + 1%)");
        e.css("margin-left", "calc(" + e.width() * -.5 + "px + 1%)");
        o.css("margin-left", "calc(" + o.width() * -.5 + "px + 1%)");
        var t = $("<div class='slider-div'>").attr("data-min", 0).attr("data-max", 200).attr("data-tier", "-1").attr("data-step", "1");
        t.append($("<div class='dividends'><div class='div1' style='left: 33.333%;'><\/div><div class='div2' style='left: 66.666%;'><\/div><\/div>"));
        w.replaceWith(t);
        $(".slider-div", r).slider({ orientation: "horizontal", range: "min", min: n.MinUnit, max: n.MaxUnit, step: 1, value: 0, change: function (n, t) {
            var r = parseFloat(t.handle.style.left);
            rt(r);
            i.trigger("keyup");
        } });
        t.wrap($("<a>").attr("id", "caltemp_slider_sqlDatabase_" + StringFormat(n.Service) + "_" + StringFormat(n.Type) + "_" + StringFormat(n.Feature)));
    }, { rootNode: r, renderFunc: k };
}
function CalTempFactory_Count(n) {
    var i = $("<div class='cal_temp_count'>"), f = $("<img class='minus' src='http://wacnstoragestaging.blob.core.chinacloudapi.cn/marketing-resource/css/img/pricing_cal_minus.png'>"), t, r, u, e;
    f.attr("id", "caltemp_count_minus_" + StringFormat(n.Service) + "_" + StringFormat(n.Type) + "_" + StringFormat(n.Feature));
    t = $("<input class='digit' value=0 pattern='[0-9]{1,9}' data-range='ok'>");
    r = $("<div class='ErrorMessage'><\/div>");
    r.attr("data-min", n.MinUnit);
    r.attr("data-max", n.MaxUnit);
    u = $("<img class='plus' src='http://wacnstoragestaging.blob.core.chinacloudapi.cn/marketing-resource/css/img/pricing_cal_plus.png'>");
    u.attr("id", "caltemp_count_plus_" + StringFormat(n.Service) + "_" + StringFormat(n.Type) + "_" + StringFormat(n.Feature));
    e = $("<div class='unit'><\/div>");
    e.text(n.PriceUnit);
    var o = function () {
        return $.isNumeric(t.val());
    }, s = parseInt(n.MaxUnit), h = parseInt(n.MinUnit);
    return f.click(function () {
        if (o()) {
            var n = parseInt(t.val());
            if (n <= h)
                return;
            t.val(n - 1);
            t.trigger("change");
        }
    }), u.click(function () {
        var n, i;
        if (o() && (n = $(this).closest(".feature"), !(n.hasClass("slider_feature") || n.hasClass("database_feature")) || n.find(".cal_temp_slider").attr("data-total-price") != "0")) {
            if (i = parseInt(t.val()), i >= s)
                return;
            t.val(i + 1);
            t.trigger("change");
        }
    }), t.change(function () {
        var r, i, n, u;
        o() && (r = parseInt(t.val()), r >= h && r <= s ? (t.attr("data-range", "ok"), i = $(this).closest(".feature"), n = {}, n.ServiceName = i.data("service"), n.TypeName = i.data("type"), n.FeatureName = i.data("feature"), n.Count = $(this).val(), i.find(".cal_temp_size").length != 0 ? (u = i.find(".cal_temp_size input:checked"), n.SizeName = u.closest(".size").data("size")) : n.SizeName = "default", CalculatorUIRenderer.UpdateByUIChange_Count(n)) : t.attr("data-range", "notOk"));
    }), i.append(f), i.append(t), i.append(r), i.append(u), i.append(e), i;
}
function CalTempFactory_Support(n) {
    var t = $("<ul class='cal_temp_support'>");
    return $.each(n.Descriptions, function () {
        var n = $("<li>").text(this);
        t.append(n);
    }), t;
}
function CalTempFactory_NoConf(n) {
    return $("<div class='cal_temp_noConf price_config' data-price='" + n.Price + "' data-count='0'>").text(n.Description);
}
function CalTempFactory_Free() {
    return $("<div class='cal_temp_free'>").text("免费");
}
function CalTempFactory_PriceHourly(n) {
    return $("<div class='cal_temp_priceHourly'>￥<span class='num'>" + n.UnitPrice + "<\/span>/小时 X <span class='HourNum'>744<\/span>小时<\/div>");
}
function CalTempFactory_TotalPrice() {
    return $("<div class='cal_temp_totalPrice'>￥<span class='num'>0.00<\/span><span class='Unit'>/月<\/span><\/div>");
}
function CalTempFactory_Prompt() {
    return $("<div class='cal_temp_prompt inactive'><img src='http://wacnstorage.blob.core.chinacloudapi.cn/marketing-resource/css/img/information.png'><span>改变配置及对应数量将自动添加另一选择<\/span><\/div>");
}
function getValueFromQueryString(n) {
    var u = null, i, t, r;
    if (window.location.search.length > 0)
        for (i = window.location.search.substring(1).split("&"), t = 0; t < i.length; t++)
            r = i[t].split("="), r[0].toLowerCase() == n.toLowerCase() && (u = r[1]);
    return u;
}
function hasClass(n, t) {
    return n.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"));
}
function addClass(n, t) {
    this.hasClass(n, t) || (n.className += " " + t);
}
function removeClass(n, t) {
    if (hasClass(n, t)) {
        var i = new RegExp("(\\s|^)" + t + "(\\s|$)");
        n.className = n.className.replace(i, " ");
    }
}
function toggleClass(n, t) {
    hasClass(n, t) ? removeClass(n, t) : addClass(n, t);
}
function toggle(n) {
    var t = n.parentElement;
    toggleClass(t, "active");
}
function expandAll() {
    for (var t = getElementsByClassName("question"), n = 0; n < t.length; n++)
        addClass(t[n], "active");
}
function collapseAll() {
    for (var t = getElementsByClassName("active"), n = 0; n < t.length; n++)
        removeClass(t[n], "active");
}
function getElementsByClassName() {
    for (var t = document.all ? document.all : document.getElementsByTagName("*"), i = [], n = 0; n < t.length; n++)
        hasClass(t[n], "question") && (i[i.length] = t[n]);
    return i;
}
function xiaoice_start(n) {
    function u(n) {
        return n.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, function (n) {
            var t = n;
            return t.length > 30 && (t = t.substr(0, 27) + "..."), '<a style="text-decoration:underline; color:blue; cursor:pointer;" onclick="window.open(\'' + n + "', '_blank');\">" + t + "<\/a>";
        });
    }
    function r() {
        var f = { message: xb_lite_cmd_inputbox.value, url: window.location.href }, r = xb_lite_cmd_inputbox.value, u, n;
        r.length < 1 || (xb_lite_cmd_inputbox.value = "", u = i.replace("%1", r).replace(/%2/g, "right"), $("#xb_lite_content").append(u), n = $("#xb_lite_content"), n.animate({ scrollTop: n.prop("scrollHeight") - n.height() }, 300), t && t.emit("msg", f));
    }
    var t, i;
    t = io.connect(n);
    t.removeAllListeners("news");
    t.on("news", function (n) {
        for (var r, t, f = 0, e = n.length; f < e; f++)
            r = n[f], r.text != null && (t = i.replace("%1", r.text).replace(/%2/g, "left"), t = u(t), $("#xb_lite_content").append(t)), r.message != null && (t = i.replace("%1", r.message).replace(/%2/g, "right"), $("#xb_lite_content").append(t));
        setTimeout(function () {
            var n = $("#xb_lite_content");
            n.animate({ scrollTop: n.prop("scrollHeight") - n.height() }, 300);
        }, 0);
    });
    t.removeAllListeners("profile");
    t.on("profile", function (n) {
        $("#profile0").attr("href", n.ProfileLink);
        $("#profile1").attr("href", n.ProfileLink);
        n.Image && $("#logoimg").attr("src", n.Image);
        n.NickName && $("#profile1").html(n.NickName);
        localStorage.xiaoiceid = n.id;
    });
    t.removeAllListeners("connect");
    t.on("connect", function () {
        localStorage.xiaoiceid ? t.emit("restore", localStorage.xiaoiceid) : t.emit("restore", "newuser");
    });
    t.removeAllListeners("disconnect");
    t.on("disconnect", function () {
    });
    i = '<div class="xb_lite_conversation_item"><div class="xb_lite_conv_innerwrap_%2"><div class="xb_lite_conv_%2">%1<\/div><\/div><\/div>';
    $("#xb_lite_cmd_inputbox").keypress(function (n) {
        n.which == 13 && r();
    });
    $("#xb_lite_cmd_inputbutton").click(function () {
        r();
    });
}
function SHDRefreshTimeOnChange(n) {
    clearInterval(intervalId);
    intervalId = setInterval(SHDRefreshCurrentStatusData, n * 6e4);
}
function SHDHistoryServiceOnChange() {
    SHDGetFilterValue();
    SHDLoadHistoryData(serviceFilterValue, regionFilterValue, dateFilterValue);
}
function SHDHistoryRegionOnChange() {
    SHDGetFilterValue();
    SHDLoadHistoryData(serviceFilterValue, regionFilterValue, dateFilterValue);
}
function SHDHistoryTimeOnChange() {
    SHDGetFilterValue();
    SHDLoadHistoryData(serviceFilterValue, regionFilterValue, dateFilterValue);
}
function SHDGetFilterValue() {
    serviceFilterValue = $(".service-filter-controller select :selected").val();
    regionFilterValue = $(".region-filter-controller select :selected").val();
    dateFilterValue = $(".date-filter-controller select :selected").val();
}
function getDateNDaysBefore(n) {
    var t = new Date, i = t.getUTCHours(), r = t.getUTCMinutes();
    return i == 0 && r <= 30 ? new Date(Date.parse((new Date).toString()) - 864e5 * (n + 1)) : new Date(Date.parse((new Date).toString()) - 864e5 * n);
}
function SetDefaultNotificationStatus() {
    $(".header .overall-status .core-platform-status").show();
    $(".header .overall-status .common-services-status").show();
    $(".header .label").show();
    $(".header .overall-status .incidents-list").html("");
}
function SHDSetDefaultTableStatus() {
    $("#shd-page .current-status .dashboard .status-table tr").each(function () {
        $(this).find("td").each(function () {
            $(this).hasClass("has-status") && ($(this).css("background-image", "url(" + tableStatusOKIconSrc + ")"), $(this).data("status", statusList.ok));
        });
    });
}
function sortByIncidentStatusDecrease(n, t) {
    return statusOrder[n.status] > statusOrder[t.status] ? -1 : statusOrder[n.status] == statusOrder[t.status] ? 0 : 1;
}
function SHDRefreshCurrentStatusData() {
    $.ajax({ type: "GET", dataType: "json", cache: !1, url: "/support/status-api?api=incidents", contentType: "application/json", success: function (n) {
        var i, f, r, e, u, h;
        SetDefaultNotificationStatus();
        SHDSetDefaultTableStatus();
        var a = n.coreplatform.toLowerCase(), v = n.popularservices.toLowerCase(), y = n.status.toLowerCase(), t = n.incidents;
        if (a != statusList.ok && $(".header .overall-status .core-platform-status").hide(), v != statusList.ok && $(".header .overall-status .common-services-status").hide(), $("#shd-page .banner .status-info-glance .status-icon-big .status-image").attr("src", statusIconMapping["banner_" + y]), t != null)
            for (t.sort(sortByIncidentStatusDecrease), t.length != 0 && $(".header .label").hide(), i = 0; i < t.length; i++) {
                var o = t[i].impacted, s = t[i].status.toLowerCase(), p = t[i].title, w = t[i].updates[0].description, c = new Date(t[i].startdate), l = new Date, b = Math.floor((l.getTime() - c.getTime()) / 36e5), k = Math.floor((l.getTime() - c.getTime()) % 36e5 / 6e4), d = b + " hours " + k + " minutes ago";
                if ($(".header .overall-status .incidents-list").append('<div class="incidents-item"><div class="title" style="background:url(' + statusIconMapping["header_" + s] + ') no-repeat left bottom;">' + p + '<\/div><div class="time">' + d + '<\/div><div class="description">' + w + "<\/div><\/div>"), o != null)
                    for (f = 0; f < o.length; f++)
                        if (r = o[f].service, e = o[f].regions, r != "")
                            for (r = r.replace("\\", "-"), u = 0; u < e.length; u++)
                                h = $("." + r + "." + e[u] + "-column").data("status"), (h == undefined || statusOrder[h] < statusOrder[s]) && ($("." + r + "." + e[u] + "-column").css("background-image", "url(" + statusIconMapping["table_" + s] + ")"), $("." + r + "." + e[u] + "-column").data("status", s));
            }
    }, error: function () {
    } });
}
function SHDLoadHistoryData(n, t, i) {
    var r;
    if ($("#shd-page .history .history-list").html(""), r = "/support/status-api?api=history", n != allString && (r = r + "&service=" + n), t != allString && (r = r + "&region=" + t), i == currentString)
        r += "&count=" + itemNumberOnOnePage;
    else {
        var u = getDateNDaysBefore(i), f = u.getDate() >= 10 ? u.getDate() : "0" + u.getDate(), e = u.getMonth() >= 9 ? u.getMonth() + 1 : "0" + (u.getMonth() + 1), o = u.getFullYear().toString() + e + f;
        r = r + "&start=" + o;
    }
    $.ajax({ type: "GET", dataType: "json", cache: !1, url: r, contentType: "application/json", success: function (n) {
        var t = n.incidents, i, r;
        t != null && (t.length > itemNumberOnOnePage ? (i = 0, r = itemNumberOnOnePage < t.length ? itemNumberOnOnePage : t.length, SHDShowHistoryItems(t, i, r), $(".pagination-item").pagination({ items: t.length, itemsOnPage: itemNumberOnOnePage, cssStyle: "light-theme", onPageClick: function (n) {
            var i = (n - 1) * itemNumberOnOnePage, r = i + itemNumberOnOnePage < t.length ? i + itemNumberOnOnePage : t.length;
            SHDShowHistoryItems(t, i, r);
        } }), $(".pagination-item").show()) : ($(".pagination-item").hide(), SHDShowHistoryItems(t, 0, t.length)));
    }, error: function () {
    } });
}
function SHDShowHistoryItems(n, t, i) {
    var r;
    for ($("#shd-page .history .history-list").html(""), r = t; r < i; r++) {
        var f = n[r].title, e = n[r].updates[0].description, o = n[r].startdate, u = new Date(o), s = u.getMonth() + 1 + "/" + u.getDate();
        $("#shd-page .history .history-list").append('<div class="history-item"><div class="date">' + s + '<\/div><div class="detail"><div class="title">' + f + '<\/div><div class="description">' + e + "<\/div><\/div><\/div>");
    }
}
function getLangLocale() {
    var t = "en-us", i = window.location.href, n = i.split("/");
    return n.length >= 4 && n[3].length == 5 && (t = n[3]), t.toLocaleLowerCase();
}
function getLocaleCountry() {
    switch (langLocale) {
        case "da-dk": return "Denmark";
        case "de-de": return "Germany";
        case "en-us": return "United States";
        case "es-es": return "Spain";
        case "fr-fr": return "France";
        case "it-it": return "Italy";
        case "ja-jp": return "Japan";
        case "ko-kr": return "Korea";
        case "nb-no": return "Norway";
        case "nl-nl": return "Netherlands";
        case "pl-pl": return "Poland";
        case "pt-br": return "Portugal";
        case "ru-ru": return "Russia";
        case "sv-se": return "Sweden";
        case "tr-tr": return "Turkey";
        case "zh-cn": return "China";
        default: return "United States";
    }
}
function strip(n) {
    var t = document.createElement("DIV");
    return t.innerHTML = n, t.textContent || t.innerText;
}
function hideLoadingImage() {
    $("#loadingImage").hide();
}
function checkForEnterKey(n, t) {
    var r = !0, i = 0;
    return typeof n != "undefined" && n != null && (typeof n.keyCode != "undefined" && n.keyCode != null ? i = n.keyCode : typeof n.which != "undefined" && n.which != null ? i = n.which : typeof n.charCode != "undefined" && n.charCode != null && (i = n.charCode)), i == 13 && (doSearch(t), r = !1), r;
}
function doSearch(n) {
    var r = document.getElementById(n), t, i;
    r != null && (t = r.value, t.length > 0 && !/^\s*$/.test(t) && $("#" + n).attr("placeholder") != t && (i = "", $(".sr-options").length > 0 && ($("#search-wacom").prop("checked") && (i += "&azure=true"), $("#search-msdn").prop("checked") && (i += "&msdn=true"), $("#search-forums").prop("checked") && (i += "&forums=true")), window.location.href = "/searchresults/?query=" + escape(t) + i));
}
function getParameterByName(n) {
    var t = RegExp("[?&]" + n + "=([^&]*)").exec(window.location.search);
    return t && decodeURIComponent(t[1].replace(/\+/g, " "));
}
function setParameterByName(n, t) {
    location.href = location.href.split("?")[0] + updateQueryString(location.search, n, t);
}
function updateQueryString(n, t, i) {
    var u, r;
    return i !== null ? (i = i.toString(), u = RegExp("[?&]" + t + "=([^&]*)").exec(n), u !== null ? n.replace(new RegExp("([?&]" + t + "=)([^&]*)"), "$1" + i.replace(/ /g, "+")) : (r = n.length > 0 ? "&" : "?", r += t + "=" + i.replace(/ /g, "+"), n + r)) : (n = n.replace(new RegExp("([?&]" + t + "=)([^&]*)"), ""), n[0] === "&" && (n = "?" + n.slice(1)), n);
}
function softLoadUrl(n) {
    return $("html.history").length !== 0 ? (window.history.replaceState(null, null, n), !0) : (window.location = n, !1);
}
function softLoadQueryString(n) {
    var i = location.search, t = i;
    return $.each(n, function (n, i) {
        t = updateQueryString(t, n, i);
    }), t !== i ? softLoadUrl(location.href.split("?")[0] + t) : !0;
}
function filterObjects(n, t) {
    var i = [];
    return $.each(n, function () {
        var n = this, r = !0;
        $.each(t, function (t, i) {
            typeof i != "undefined" && n[t] != i && (r = !1);
        });
        r && i.push(n);
    }), i;
}
function LoadWacnCommentPlugin(n, t) {
    localStoragesupport && (t = typeof t != "undefined" ? t : window.location.href, this.commentTarget = n, this.currentUri = ConvertToBase64(t), $.getJSON("http://jsonip.com/?callback=?", function (n) {
        clientIP = n.ip;
    }), LoadExternalCss(), $("#comments-container").comments({ profilePictureURL: profilePictureURL, roundProfilePictures: !0, textareaRows: 1, enableReplying: !0, enableEditing: !1, enableDeleting: !1, enableUpvoting: !1, enableDeletingCommentWithReplies: !1, timeFormatter: function (n) {
        var t = new Date(n);
        return t.toLocaleDateString() == (new Date).toLocaleDateString() ? "今天 " + t.toLocaleTimeString() : t.toLocaleDateString();
    }, fieldMappings: { id: "Id", parent: "ParentId", created: "Created", modified: "Modified", content: "Content", fullname: "UserName", createdByAdmin: "CreatedByAdmin" }, textareaPlaceholderText: "发表评论", popularText: "最多", newestText: "最新", oldestText: "最早", sendText: "发送", replyText: "答复", youText: generateUserName(), viewAllRepliesText: "显示所有评论（__replyCount__）", hideRepliesText: "隐藏", noCommentsText: "当前没有评论", getComments: function (n, t) {
        $.ajax({ type: "get", url: "/wacnapi/comments/" + currentUri, success: function (t) {
            $.each(t, function (n, t) {
                t.profile_picture_url = profilePictureURL;
            });
            n(t);
        }, error: t });
    }, postComment: function (n, t, i) {
        if (checkIfCommentFrequent()) {
            popupMessageDialog("喝口水，歇一会再发~");
            $(".control-row span").addClass("enabled");
            return;
        }
        if (!checkComment(n.Content)) {
            popupMessageDialog("评论太短，检查下再发~");
            $(".control-row span").addClass("enabled");
            return;
        }
        if (getCommentUserName() == null) {
            popupInputDialog();
            $(".control-row span").addClass("enabled");
            return;
        }
        n.Id = 123456789;
        n.UserName = getCommentUserName();
        n.IP = clientIP;
        $.ajax({ type: "post", url: "/wacnapi/comments/" + currentUri, data: n, success: function (n) {
            if (n)
                n.profile_picture_url = profilePictureURL, t(n);
            else {
                $(".textarea-wrapper").find(".close").trigger("click");
                popupMessageDialog("感谢您发表评论与大家分享。任何评论需要人工审核通过后才能显示，请耐心等待。", 5e3, !0);
            }
        }, error: i });
        setLastCommentTime();
    } }));
}
function ConvertToBase64(n) {
    var t = n.split("?")[0];
    return window.btoa(t);
}
function LoadExternalCss() {
    var n = $("<link rel='stylesheet' type='text/css' href='http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'>");
    $("head").append(n);
}
function checkComment(n) {
    return (n = $.trim(n), n.length < 5) ? !1 : !0;
}
function generateUserName() {
    for (var t = "User", n = 0; n < 6; n++)
        t += Math.floor(Math.random() * 10);
    return t;
}
function setCommentUserName(n) {
    localStorage.setItem("wacncommentusername", n);
}
function getCommentUserName() {
    return localStorage.getItem("wacncommentusername");
}
function setLastCommentTime() {
    localStorage.setItem("wacnlastcommenttime", (new Date).getTime());
}
function getLastCommentTime() {
    return localStorage.getItem("wacnlastcommenttime");
}
function checkIfCommentFrequent() {
    var n = getLastCommentTime(), t;
    return n == null ? !1 : (t = ((new Date).getTime() - n) / 1e3, t < 10) ? !0 : !1;
}
function popupMessageDialog(n, t, i) {
    if (t = typeof t != "undefined" ? t : 3e3, i = typeof i != "undefined" ? i : !1, i || !$(".wacn-balloon").length) {
        var r = '<div class="wacn-balloon">' + n + "<\/div>";
        $("#comments-container").after(r);
        $(".wacn-balloon").fadeOut(t, function () {
            $(".wacn-balloon:last").remove();
        });
    }
}
function popupInputDialog() {
    $("body").prepend('<div class="cover-whole-page"><\/div>');
    var n = '                <div class="wacn-balloon">请输入用户名                    <div class="wacn-balloon-close"><\/div>                    <input type="text" class="comment-username-input" id="comment-username-id" name="username" placeholder="' + generateUserName() + '">                    <div class="comment-username-confirm">确定<\/div>                <\/div>            ';
    $("#comments-container").after(n);
    $(".wacn-balloon-close").click(function () {
        $(".wacn-balloon").remove();
        $(".cover-whole-page").remove();
    });
    $(".comment-username-confirm").click(function () {
        var n = $.trim($("#comment-username-id").val());
        n != null && n.length > 2 && n.length < 20 ? (setCommentUserName(n), $(".wacn-balloon").remove(), $(".cover-whole-page").remove(), popupMessageDialog("用户名设置完毕，点发送继续。")) : alert("用户名在2-20个字符之间！");
    });
}
var q, _tag, saveAs, CalculatorUIRenderer, priceDict, clcids, langLocale, commentTarget, currentUri, clientIP, localStoragesupport, profilePictureURL, commentTargetEnum, WacnApi;
if (!function (n, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function (n) {
        if (!n.document)
            throw new Error("jQuery requires a window with a document");
        return t(n);
    } : t(n);
}("undefined" != typeof window ? window : this, function (n, t) {
    function ui(n) {
        var t = n.length, r = i.type(n);
        return "function" === r || i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n;
    }
    function fi(n, t, r) {
        if (i.isFunction(t))
            return i.grep(n, function (n, i) {
                return !!t.call(n, i, n) !== r;
            });
        if (t.nodeType)
            return i.grep(n, function (n) {
                return n === t !== r;
            });
        if ("string" == typeof t) {
            if (ef.test(t))
                return i.filter(t, n, r);
            t = i.filter(t, n);
        }
        return i.grep(n, function (n) {
            return et.call(t, n) >= 0 !== r;
        });
    }
    function ur(n, t) {
        while ((n = n[t]) && 1 !== n.nodeType)
            ;
        return n;
    }
    function of(n) {
        var t = ei[n] = {};
        return i.each(n.match(c) || [], function (n, i) {
            t[i] = !0;
        }), t;
    }
    function ct() {
        u.removeEventListener("DOMContentLoaded", ct, !1);
        n.removeEventListener("load", ct, !1);
        i.ready();
    }
    function p() {
        Object.defineProperty(this.cache = {}, 0, { get: function () {
            return {};
        } });
        this.expando = i.expando + Math.random();
    }
    function fr(n, t, r) {
        var u;
        if (void 0 === r && 1 === n.nodeType)
            if (u = "data-" + t.replace(hf, "-$1").toLowerCase(), r = n.getAttribute(u), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : sf.test(r) ? i.parseJSON(r) : r;
                }
                catch (f) {
                }
                e.set(n, t, r);
            }
            else
                r = void 0;
        return r;
    }
    function at() {
        return !0;
    }
    function g() {
        return !1;
    }
    function hr() {
        try {
            return u.activeElement;
        }
        catch (n) {
        }
    }
    function vr(n, t) {
        return i.nodeName(n, "table") && i.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n;
    }
    function bf(n) {
        return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n;
    }
    function kf(n) {
        var t = pf.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"), n;
    }
    function oi(n, t) {
        for (var i = 0, u = n.length; u > i; i++)
            r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"));
    }
    function yr(n, t) {
        var u, c, f, s, h, l, a, o;
        if (1 === t.nodeType) {
            if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), o = s.events)) {
                delete h.handle;
                h.events = {};
                for (f in o)
                    for (u = 0, c = o[f].length; c > u; u++)
                        i.event.add(t, f, o[f][u]);
            }
            e.hasData(n) && (l = e.access(n), a = i.extend({}, l), e.set(t, a));
        }
    }
    function o(n, t) {
        var r = n.getElementsByTagName ? n.getElementsByTagName(t || "*") : n.querySelectorAll ? n.querySelectorAll(t || "*") : [];
        return void 0 === t || t && i.nodeName(n, t) ? i.merge([n], r) : r;
    }
    function df(n, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && er.test(n.type) ? t.checked = n.checked : ("input" === i || "textarea" === i) && (t.defaultValue = n.defaultValue);
    }
    function pr(t, r) {
        var f, u = i(r.createElement(t)).appendTo(r.body), e = n.getDefaultComputedStyle && (f = n.getDefaultComputedStyle(u[0])) ? f.display : i.css(u[0], "display");
        return u.detach(), e;
    }
    function hi(n) {
        var r = u, t = si[n];
        return t || (t = pr(n, r), "none" !== t && t || (vt = (vt || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = vt[0].contentDocument, r.write(), r.close(), t = pr(n, r), vt.detach()), si[n] = t), t;
    }
    function rt(n, t, r) {
        var e, o, s, u, f = n.style;
        return r = r || yt(n), r && (u = r.getPropertyValue(t) || r[t]), r && ("" !== u || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), ci.test(u) && wr.test(t) && (e = f.width, o = f.minWidth, s = f.maxWidth, f.minWidth = f.maxWidth = f.width = u, u = r.width, f.width = e, f.minWidth = o, f.maxWidth = s)), void 0 !== u ? u + "" : u;
    }
    function br(n, t) {
        return { get: function () {
            return n() ? void delete this.get : (this.get = t).apply(this, arguments);
        } };
    }
    function gr(n, t) {
        if (t in n)
            return t;
        for (var r = t[0].toUpperCase() + t.slice(1), u = t, i = dr.length; i--;)
            if (t = dr[i] + r, t in n)
                return t;
        return u;
    }
    function nu(n, t, i) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t;
    }
    function tu(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2)
            "margin" === r && (o += i.css(n, r + w[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + w[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(n, "padding" + w[e], !0, f), "padding" !== r && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
        return o;
    }
    function iu(n, t, r) {
        var o = !0, u = "width" === t ? n.offsetWidth : n.offsetHeight, e = yt(n), s = "border-box" === i.css(n, "boxSizing", !1, e);
        if (0 >= u || null == u) {
            if (u = rt(n, t, e), (0 > u || null == u) && (u = n.style[t]), ci.test(u))
                return u;
            o = s && (f.boxSizingReliable() || u === n.style[t]);
            u = parseFloat(u) || 0;
        }
        return u + tu(n, t, r || (s ? "border" : "content"), o, e) + "px";
    }
    function ru(n, t) {
        for (var e, u, s, o = [], f = 0, h = n.length; h > f; f++)
            u = n[f], u.style && (o[f] = r.get(u, "olddisplay"), e = u.style.display, t ? (o[f] || "none" !== e || (u.style.display = ""), "" === u.style.display && it(u) && (o[f] = r.access(u, "olddisplay", hi(u.nodeName)))) : (s = it(u), "none" === e && s || r.set(u, "olddisplay", s ? e : i.css(u, "display"))));
        for (f = 0; h > f; f++)
            u = n[f], u.style && (t && "none" !== u.style.display && "" !== u.style.display || (u.style.display = t ? o[f] || "" : "none"));
        return n;
    }
    function s(n, t, i, r, u) {
        return new s.prototype.init(n, t, i, r, u);
    }
    function fu() {
        return setTimeout(function () {
            nt = void 0;
        }), nt = i.now();
    }
    function bt(n, t) {
        var r, u = 0, i = { height: n };
        for (t = t ? 1 : 0; 4 > u; u += 2 - t)
            r = w[u], i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n), i;
    }
    function eu(n, t, i) {
        for (var u, f = (ut[t] || []).concat(ut["*"]), r = 0, e = f.length; e > r; r++)
            if (u = f[r].call(i, t, n))
                return u;
    }
    function fe(n, t, u) {
        var f, a, p, v, o, w, h, b, l = this, y = {}, s = n.style, c = n.nodeType && it(n), e = r.get(n, "fxshow");
        u.queue || (o = i._queueHooks(n, "fx"), null == o.unqueued && (o.unqueued = 0, w = o.empty.fire, o.empty.fire = function () {
            o.unqueued || w();
        }), o.unqueued++, l.always(function () {
            l.always(function () {
                o.unqueued--;
                i.queue(n, "fx").length || o.empty.fire();
            });
        }));
        1 === n.nodeType && ("height" in t || "width" in t) && (u.overflow = [s.overflow, s.overflowX, s.overflowY], h = i.css(n, "display"), b = "none" === h ? r.get(n, "olddisplay") || hi(n.nodeName) : h, "inline" === b && "none" === i.css(n, "float") && (s.display = "inline-block"));
        u.overflow && (s.overflow = "hidden", l.always(function () {
            s.overflow = u.overflow[0];
            s.overflowX = u.overflow[1];
            s.overflowY = u.overflow[2];
        }));
        for (f in t)
            if (a = t[f], re.exec(a)) {
                if (delete t[f], p = p || "toggle" === a, a === (c ? "hide" : "show")) {
                    if ("show" !== a || !e || void 0 === e[f])
                        continue;
                    c = !0;
                }
                y[f] = e && e[f] || i.style(n, f);
            }
            else
                h = void 0;
        if (i.isEmptyObject(y))
            "inline" === ("none" === h ? hi(n.nodeName) : h) && (s.display = h);
        else {
            e ? "hidden" in e && (c = e.hidden) : e = r.access(n, "fxshow", {});
            p && (e.hidden = !c);
            c ? i(n).show() : l.done(function () {
                i(n).hide();
            });
            l.done(function () {
                var t;
                r.remove(n, "fxshow");
                for (t in y)
                    i.style(n, t, y[t]);
            });
            for (f in y)
                v = eu(c ? e[f] : 0, f, l), f in e || (e[f] = v.start, c && (v.end = v.start, v.start = "width" === f || "height" === f ? 1 : 0));
        }
    }
    function ee(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u)
                    r in n || (n[r] = u[r], t[r] = e);
            }
            else
                t[f] = e;
    }
    function ou(n, t, r) {
        var h, e, o = 0, l = wt.length, f = i.Deferred().always(function () {
            delete c.elem;
        }), c = function () {
            if (e)
                return !1;
            for (var s = nt || fu(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, o = u.tweens.length; o > r; r++)
                u.tweens[r].run(i);
            return f.notifyWith(n, [u, i, t]), 1 > i && o ? t : (f.resolveWith(n, [u]), !1);
        }, u = f.promise({ elem: n, props: i.extend({}, t), opts: i.extend(!0, { specialEasing: {} }, r), originalProperties: t, originalOptions: r, startTime: nt || fu(), duration: r.duration, tweens: [], createTween: function (t, r) {
            var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
            return u.tweens.push(f), f;
        }, stop: function (t) {
            var i = 0, r = t ? u.tweens.length : 0;
            if (e)
                return this;
            for (e = !0; r > i; i++)
                u.tweens[i].run(1);
            return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this;
        } }), s = u.props;
        for (ee(s, u.opts.specialEasing); l > o; o++)
            if (h = wt[o].call(u, n, s, u.opts))
                return h;
        return i.map(s, eu, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, { elem: n, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
    }
    function pu(n) {
        return function (t, r) {
            "string" != typeof t && (r = t, t = "*");
            var u, f = 0, e = t.toLowerCase().match(c) || [];
            if (i.isFunction(r))
                while (u = e[f++])
                    "+" === u[0] ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r);
        };
    }
    function wu(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function (n, i) {
                var s = i(t, r, u);
                return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1);
            }), h;
        }
        var f = {}, o = n === li;
        return e(t.dataTypes[0]) || !f["*"] && e("*");
    }
    function ai(n, t) {
        var r, u, f = i.ajaxSettings.flatOptions || {};
        for (r in t)
            void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u), n;
    }
    function ae(n, t, i) {
        for (var e, u, f, o, s = n.contents, r = n.dataTypes; "*" === r[0];)
            r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (u in s)
                if (s[u] && s[u].test(e)) {
                    r.unshift(u);
                    break;
                }
        if (r[0] in i)
            f = r[0];
        else {
            for (u in i) {
                if (!r[0] || n.converters[u + " " + r[0]]) {
                    f = u;
                    break;
                }
                o || (o = u);
            }
            f = f || o;
        }
        if (f)
            return (f !== r[0] && r.unshift(f), i[f]);
    }
    function ve(n, t, i, r) {
        var h, u, f, s, e, o = {}, c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters)
                o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u;)
            if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                if ("*" === u)
                    u = e;
                else if ("*" !== e && e !== u) {
                    if (f = o[e + " " + u] || o["* " + u], !f)
                        for (h in o)
                            if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                                f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                                break;
                            }
                    if (f !== !0)
                        if (f && n.throws)
                            t = f(t);
                        else
                            try {
                                t = f(t);
                            }
                            catch (l) {
                                return { state: "parsererror", error: f ? l : "No conversion from " + e + " to " + u };
                            }
                }
        return { state: "success", data: t };
    }
    function vi(n, t, r, u) {
        var f;
        if (i.isArray(t))
            i.each(t, function (t, i) {
                r || pe.test(n) ? u(n, i) : vi(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u);
            });
        else if (r || "object" !== i.type(t))
            u(n, t);
        else
            for (f in t)
                vi(n + "[" + f + "]", t[f], r, u);
    }
    function ku(n) {
        return i.isWindow(n) ? n : 9 === n.nodeType && n.defaultView;
    }
    var k = [], a = k.slice, bi = k.concat, ii = k.push, et = k.indexOf, ot = {}, nf = ot.toString, ri = ot.hasOwnProperty, f = {}, u = n.document, ki = "2.1.1", i = function (n, t) {
        return new i.fn.init(n, t);
    }, tf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rf = /^-ms-/, uf = /-([\da-z])/gi, ff = function (n, t) {
        return t.toUpperCase();
    }, y, st, nr, tr, ir, rr, c, ei, ht, l, d, vt, si, oe, su, tt, hu, kt, cu, dt, gt, yi, ti, pi, wi, du, gu;
    i.fn = i.prototype = { jquery: ki, constructor: i, selector: "", length: 0, toArray: function () {
        return a.call(this);
    }, get: function (n) {
        return null != n ? 0 > n ? this[n + this.length] : this[n] : a.call(this);
    }, pushStack: function (n) {
        var t = i.merge(this.constructor(), n);
        return t.prevObject = this, t.context = this.context, t;
    }, each: function (n, t) {
        return i.each(this, n, t);
    }, map: function (n) {
        return this.pushStack(i.map(this, function (t, i) {
            return n.call(t, i, t);
        }));
    }, slice: function () {
        return this.pushStack(a.apply(this, arguments));
    }, first: function () {
        return this.eq(0);
    }, last: function () {
        return this.eq(-1);
    }, eq: function (n) {
        var i = this.length, t = +n + (0 > n ? i : 0);
        return this.pushStack(t >= 0 && i > t ? [this[t]] : []);
    }, end: function () {
        return this.prevObject || this.constructor(null);
    }, push: ii, sort: k.sort, splice: k.splice };
    i.extend = i.fn.extend = function () {
        var e, f, r, t, o, s, n = arguments[0] || {}, u = 1, c = arguments.length, h = !1;
        for ("boolean" == typeof n && (h = n, n = arguments[u] || {}, u++), "object" == typeof n || i.isFunction(n) || (n = {}), u === c && (n = this, u--); c > u; u++)
            if (null != (e = arguments[u]))
                for (f in e)
                    r = n[f], t = e[f], n !== t && (h && t && (i.isPlainObject(t) || (o = i.isArray(t))) ? (o ? (o = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : void 0 !== t && (n[f] = t));
        return n;
    };
    i.extend({ expando: "jQuery" + (ki + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (n) {
        throw new Error(n);
    }, noop: function () {
    }, isFunction: function (n) {
        return "function" === i.type(n);
    }, isArray: Array.isArray, isWindow: function (n) {
        return null != n && n === n.window;
    }, isNumeric: function (n) {
        return !i.isArray(n) && n - parseFloat(n) >= 0;
    }, isPlainObject: function (n) {
        return "object" !== i.type(n) || n.nodeType || i.isWindow(n) ? !1 : n.constructor && !ri.call(n.constructor.prototype, "isPrototypeOf") ? !1 : !0;
    }, isEmptyObject: function (n) {
        var t;
        for (t in n)
            return !1;
        return !0;
    }, type: function (n) {
        return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ot[nf.call(n)] || "object" : typeof n;
    }, globalEval: function (n) {
        var t, r = eval;
        n = i.trim(n);
        n && (1 === n.indexOf("use strict") ? (t = u.createElement("script"), t.text = n, u.head.appendChild(t).parentNode.removeChild(t)) : r(n));
    }, camelCase: function (n) {
        return n.replace(rf, "ms-").replace(uf, ff);
    }, nodeName: function (n, t) {
        return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase();
    }, each: function (n, t, i) {
        var u, r = 0, f = n.length, e = ui(n);
        if (i) {
            if (e) {
                for (; f > r; r++)
                    if (u = t.apply(n[r], i), u === !1)
                        break;
            }
            else
                for (r in n)
                    if (u = t.apply(n[r], i), u === !1)
                        break;
        }
        else if (e) {
            for (; f > r; r++)
                if (u = t.call(n[r], r, n[r]), u === !1)
                    break;
        }
        else
            for (r in n)
                if (u = t.call(n[r], r, n[r]), u === !1)
                    break;
        return n;
    }, trim: function (n) {
        return null == n ? "" : (n + "").replace(tf, "");
    }, makeArray: function (n, t) {
        var r = t || [];
        return null != n && (ui(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ii.call(r, n)), r;
    }, inArray: function (n, t, i) {
        return null == t ? -1 : et.call(t, n, i);
    }, merge: function (n, t) {
        for (var u = +t.length, i = 0, r = n.length; u > i; i++)
            n[r++] = t[i];
        return n.length = r, n;
    }, grep: function (n, t, i) {
        for (var u, f = [], r = 0, e = n.length, o = !i; e > r; r++)
            u = !t(n[r], r), u !== o && f.push(n[r]);
        return f;
    }, map: function (n, t, i) {
        var u, r = 0, e = n.length, o = ui(n), f = [];
        if (o)
            for (; e > r; r++)
                u = t(n[r], r, i), null != u && f.push(u);
        else
            for (r in n)
                u = t(n[r], r, i), null != u && f.push(u);
        return bi.apply([], f);
    }, guid: 1, proxy: function (n, t) {
        var u, f, r;
        return "string" == typeof t && (u = n[t], t = n, n = u), i.isFunction(n) ? (f = a.call(arguments, 2), r = function () {
            return n.apply(t || this, f.concat(a.call(arguments)));
        }, r.guid = n.guid = n.guid || i.guid++, r) : void 0;
    }, now: Date.now, support: f });
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (n, t) {
        ot["[object " + t + "]"] = t.toLowerCase();
    });
    y = function (n) {
        function r(n, t, i, r) {
            var w, h, c, v, k, y, d, l, nt, g;
            if ((t ? t.ownerDocument || t : s) !== e && p(t), t = t || e, i = i || [], !n || "string" != typeof n)
                return i;
            if (1 !== (v = t.nodeType) && 9 !== v)
                return [];
            if (a && !r) {
                if (w = sr.exec(n))
                    if (c = w[1]) {
                        if (9 === v) {
                            if (h = t.getElementById(c), !h || !h.parentNode)
                                return i;
                            if (h.id === c)
                                return i.push(h), i;
                        }
                        else if (t.ownerDocument && (h = t.ownerDocument.getElementById(c)) && ot(t, h) && h.id === c)
                            return i.push(h), i;
                    }
                    else {
                        if (w[2])
                            return b.apply(i, t.getElementsByTagName(n)), i;
                        if ((c = w[3]) && u.getElementsByClassName && t.getElementsByClassName)
                            return b.apply(i, t.getElementsByClassName(c)), i;
                    }
                if (u.qsa && (!o || !o.test(n))) {
                    if (l = d = f, nt = t, g = 9 === v && n, 1 === v && "object" !== t.nodeName.toLowerCase()) {
                        for (y = et(n), (d = t.getAttribute("id")) ? l = d.replace(hr, "\\$&") : t.setAttribute("id", l), l = "[id='" + l + "'] ", k = y.length; k--;)
                            y[k] = l + yt(y[k]);
                        nt = gt.test(n) && ii(t.parentNode) || t;
                        g = y.join(",");
                    }
                    if (g)
                        try {
                            return b.apply(i, nt.querySelectorAll(g)), i;
                        }
                        catch (tt) {
                        }
                        finally {
                            d || t.removeAttribute("id");
                        }
                }
            }
            return si(n.replace(at, "$1"), t, i, r);
        }
        function ni() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u;
            }
            var i = [];
            return n;
        }
        function h(n) {
            return n[f] = !0, n;
        }
        function c(n) {
            var t = e.createElement("div");
            try {
                return !!n(t);
            }
            catch (i) {
                return !1;
            }
            finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null;
            }
        }
        function ti(n, i) {
            for (var u = n.split("|"), r = n.length; r--;)
                t.attrHandle[u[r]] = i;
        }
        function wi(n, t) {
            var i = t && n, r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || ai) - (~n.sourceIndex || ai);
            if (r)
                return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t)
                        return -1;
            return n ? 1 : -1;
        }
        function cr(n) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === n;
            };
        }
        function lr(n) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n;
            };
        }
        function tt(n) {
            return h(function (t) {
                return t = +t, h(function (i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--;)
                        i[u = f[e]] && (i[u] = !(r[u] = i[u]));
                });
            });
        }
        function ii(n) {
            return n && typeof n.getElementsByTagName !== ut && n;
        }
        function bi() {
        }
        function yt(n) {
            for (var t = 0, r = n.length, i = ""; r > t; t++)
                i += n[t].value;
            return i;
        }
        function ri(n, t, i) {
            var r = t.dir, u = i && "parentNode" === r, e = ki++;
            return t.first ? function (t, i, f) {
                while (t = t[r])
                    if (1 === t.nodeType || u)
                        return n(t, i, f);
            } : function (t, i, o) {
                var s, h, c = [v, e];
                if (o) {
                    while (t = t[r])
                        if ((1 === t.nodeType || u) && n(t, i, o))
                            return !0;
                }
                else
                    while (t = t[r])
                        if (1 === t.nodeType || u) {
                            if (h = t[f] || (t[f] = {}), (s = h[r]) && s[0] === v && s[1] === e)
                                return c[2] = s[2];
                            if (h[r] = c, c[2] = n(t, i, o))
                                return !0;
                        }
            };
        }
        function ui(n) {
            return n.length > 1 ? function (t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r))
                        return !1;
                return !0;
            } : n[0];
        }
        function ar(n, t, i) {
            for (var u = 0, f = t.length; f > u; u++)
                r(n, t[u], i);
            return i;
        }
        function pt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)
                (e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
            return o;
        }
        function fi(n, t, i, r, u, e) {
            return r && !r[f] && (r = fi(r)), u && !u[f] && (u = fi(u, e)), h(function (f, e, o, s) {
                var l, c, a, p = [], y = [], w = e.length, k = f || ar(t || "*", o.nodeType ? [o] : o, []), v = !n || !f && t ? k : pt(k, p, n, o, s), h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s), r)
                    for (l = pt(h, y), r(l, [], o, s), c = l.length; c--;)
                        (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [], c = h.length; c--;)
                                (a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s);
                        }
                        for (c = h.length; c--;)
                            (a = h[c]) && (l = u ? nt.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a));
                    }
                }
                else
                    h = pt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : b.apply(e, h);
            });
        }
        function ei(n) {
            for (var s, u, r, o = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ri(function (n) {
                return n === s;
            }, c, !0), a = ri(function (n) {
                return nt.call(s, n) > -1;
            }, c, !0), e = [function (n, t, i) {
                return !h && (i || t !== ct) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i));
            }]; o > i; i++)
                if (u = t.relative[n[i].type])
                    e = [ri(ui(e), u)];
                else {
                    if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
                        for (r = ++i; o > r; r++)
                            if (t.relative[n[r].type])
                                break;
                        return fi(i > 1 && ui(e), i > 1 && yt(n.slice(0, i - 1).concat({ value: " " === n[i - 2].type ? "*" : "" })).replace(at, "$1"), u, r > i && ei(n.slice(i, r)), o > r && ei(n = n.slice(r)), o > r && yt(n));
                    }
                    e.push(u);
                }
            return ui(e);
        }
        function vr(n, i) {
            var u = i.length > 0, f = n.length > 0, o = function (o, s, h, c, l) {
                var y, d, w, k = 0, a = "0", g = o && [], p = [], nt = ct, tt = o || f && t.find.TAG("*", l), it = v += null == nt ? 1 : Math.random() || .1, rt = tt.length;
                for (l && (ct = s !== e && s); a !== rt && null != (y = tt[a]); a++) {
                    if (f && y) {
                        for (d = 0; w = n[d++];)
                            if (w(y, s, h)) {
                                c.push(y);
                                break;
                            }
                        l && (v = it);
                    }
                    u && ((y = !w && y) && k--, o && g.push(y));
                }
                if (k += a, u && a !== k) {
                    for (d = 0; w = i[d++];)
                        w(g, p, s, h);
                    if (o) {
                        if (k > 0)
                            while (a--)
                                g[a] || p[a] || (p[a] = gi.call(c));
                        p = pt(p);
                    }
                    b.apply(c, p);
                    l && !o && p.length > 0 && k + i.length > 1 && r.uniqueSort(c);
                }
                return l && (v = it, ct = nt), g;
            };
            return u ? h(o) : o;
        }
        var it, u, t, ht, oi, et, wt, si, ct, y, rt, p, e, l, a, o, g, lt, ot, f = "sizzle" + -new Date, s = n.document, v = 0, ki = 0, hi = ni(), ci = ni(), li = ni(), bt = function (n, t) {
            return n === t && (rt = !0), 0;
        }, ut = "undefined", ai = -2147483648, di = {}.hasOwnProperty, w = [], gi = w.pop, nr = w.push, b = w.push, vi = w.slice, nt = w.indexOf || function (n) {
            for (var t = 0, i = this.length; i > t; t++)
                if (this[t] === n)
                    return t;
            return -1;
        }, kt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", i = "[\\x20\\t\\r\\n\\f]", ft = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", yi = ft.replace("w", "w#"), pi = "\\[" + i + "*(" + ft + ")(?:" + i + "*([*^$|!~]?=)" + i + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + yi + "))|)" + i + "*\\]", dt = ":(" + ft + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + pi + ")*)|.*)\\)|)", at = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"), tr = new RegExp("^" + i + "*," + i + "*"), ir = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"), rr = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]", "g"), ur = new RegExp(dt), fr = new RegExp("^" + yi + "$"), vt = { ID: new RegExp("^#(" + ft + ")"), CLASS: new RegExp("^\\.(" + ft + ")"), TAG: new RegExp("^(" + ft.replace("w", "w*") + ")"), ATTR: new RegExp("^" + pi), PSEUDO: new RegExp("^" + dt), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)", "i"), bool: new RegExp("^(?:" + kt + ")$", "i"), needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)", "i") }, er = /^(?:input|select|textarea|button)$/i, or = /^h\d$/i, st = /^[^{]+\{\s*\[native \w/, sr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, gt = /[+~]/, hr = /'|\\/g, k = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)", "ig"), d = function (n, t, i) {
            var r = "0x" + t - 65536;
            return r !== r || i ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        };
        try {
            b.apply(w = vi.call(s.childNodes), s.childNodes);
            w[s.childNodes.length].nodeType;
        }
        catch (yr) {
            b = { apply: w.length ? function (n, t) {
                nr.apply(n, vi.call(t));
            } : function (n, t) {
                for (var i = n.length, r = 0; n[i++] = t[r++];)
                    ;
                n.length = i - 1;
            } };
        }
        u = r.support = {};
        oi = r.isXML = function (n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? "HTML" !== t.nodeName : !1;
        };
        p = r.setDocument = function (n) {
            var v, r = n ? n.ownerDocument || n : s, h = r.defaultView;
            return r !== e && 9 === r.nodeType && r.documentElement ? (e = r, l = r.documentElement, a = !oi(r), h && h !== h.top && (h.addEventListener ? h.addEventListener("unload", function () {
                p();
            }, !1) : h.attachEvent && h.attachEvent("onunload", function () {
                p();
            })), u.attributes = c(function (n) {
                return n.className = "i", !n.getAttribute("className");
            }), u.getElementsByTagName = c(function (n) {
                return n.appendChild(r.createComment("")), !n.getElementsByTagName("*").length;
            }), u.getElementsByClassName = st.test(r.getElementsByClassName) && c(function (n) {
                return n.innerHTML = "<div class='a'><\/div><div class='a i'><\/div>", n.firstChild.className = "i", 2 === n.getElementsByClassName("i").length;
            }), u.getById = c(function (n) {
                return l.appendChild(n).id = f, !r.getElementsByName || !r.getElementsByName(f).length;
            }), u.getById ? (t.find.ID = function (n, t) {
                if (typeof t.getElementById !== ut && a) {
                    var i = t.getElementById(n);
                    return i && i.parentNode ? [i] : [];
                }
            }, t.filter.ID = function (n) {
                var t = n.replace(k, d);
                return function (n) {
                    return n.getAttribute("id") === t;
                };
            }) : (delete t.find.ID, t.filter.ID = function (n) {
                var t = n.replace(k, d);
                return function (n) {
                    var i = typeof n.getAttributeNode !== ut && n.getAttributeNode("id");
                    return i && i.value === t;
                };
            }), t.find.TAG = u.getElementsByTagName ? function (n, t) {
                if (typeof t.getElementsByTagName !== ut)
                    return t.getElementsByTagName(n);
            } : function (n, t) {
                var i, r = [], f = 0, u = t.getElementsByTagName(n);
                if ("*" === n) {
                    while (i = u[f++])
                        1 === i.nodeType && r.push(i);
                    return r;
                }
                return u;
            }, t.find.CLASS = u.getElementsByClassName && function (n, t) {
                if (typeof t.getElementsByClassName !== ut && a)
                    return t.getElementsByClassName(n);
            }, g = [], o = [], (u.qsa = st.test(r.querySelectorAll)) && (c(function (n) {
                n.innerHTML = "<select msallowclip=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowclip^='']").length && o.push("[*^$]=" + i + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + i + "*(?:value|" + kt + ")");
                n.querySelectorAll(":checked").length || o.push(":checked");
            }), c(function (n) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + i + "*[*^$|!~]?=");
                n.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:");
            })), (u.matchesSelector = st.test(lt = l.matches || l.webkitMatchesSelector || l.mozMatchesSelector || l.oMatchesSelector || l.msMatchesSelector)) && c(function (n) {
                u.disconnectedMatch = lt.call(n, "div");
                lt.call(n, "[s!='']:x");
                g.push("!=", dt);
            }), o = o.length && new RegExp(o.join("|")), g = g.length && new RegExp(g.join("|")), v = st.test(l.compareDocumentPosition), ot = v || st.test(l.contains) ? function (n, t) {
                var r = 9 === n.nodeType ? n.documentElement : n, i = t && t.parentNode;
                return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)));
            } : function (n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n)
                            return !0;
                return !1;
            }, bt = v ? function (n, t) {
                if (n === t)
                    return rt = !0, 0;
                var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, 1 & i || !u.sortDetached && t.compareDocumentPosition(n) === i ? n === r || n.ownerDocument === s && ot(s, n) ? -1 : t === r || t.ownerDocument === s && ot(s, t) ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0 : 4 & i ? -1 : 1);
            } : function (n, t) {
                if (n === t)
                    return rt = !0, 0;
                var i, u = 0, o = n.parentNode, h = t.parentNode, f = [n], e = [t];
                if (!o || !h)
                    return n === r ? -1 : t === r ? 1 : o ? -1 : h ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0;
                if (o === h)
                    return wi(n, t);
                for (i = n; i = i.parentNode;)
                    f.unshift(i);
                for (i = t; i = i.parentNode;)
                    e.unshift(i);
                while (f[u] === e[u])
                    u++;
                return u ? wi(f[u], e[u]) : f[u] === s ? -1 : e[u] === s ? 1 : 0;
            }, r) : e;
        };
        r.matches = function (n, t) {
            return r(n, null, null, t);
        };
        r.matchesSelector = function (n, t) {
            if ((n.ownerDocument || n) !== e && p(n), t = t.replace(rr, "='$1']"), !(!u.matchesSelector || !a || g && g.test(t) || o && o.test(t)))
                try {
                    var i = lt.call(n, t);
                    if (i || u.disconnectedMatch || n.document && 11 !== n.document.nodeType)
                        return i;
                }
                catch (f) {
                }
            return r(t, e, null, [n]).length > 0;
        };
        r.contains = function (n, t) {
            return (n.ownerDocument || n) !== e && p(n), ot(n, t);
        };
        r.attr = function (n, i) {
            (n.ownerDocument || n) !== e && p(n);
            var f = t.attrHandle[i.toLowerCase()], r = f && di.call(t.attrHandle, i.toLowerCase()) ? f(n, i, !a) : void 0;
            return void 0 !== r ? r : u.attributes || !a ? n.getAttribute(i) : (r = n.getAttributeNode(i)) && r.specified ? r.value : null;
        };
        r.error = function (n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        };
        r.uniqueSort = function (n) {
            var r, f = [], t = 0, i = 0;
            if (rt = !u.detectDuplicates, y = !u.sortStable && n.slice(0), n.sort(bt), rt) {
                while (r = n[i++])
                    r === n[i] && (t = f.push(i));
                while (t--)
                    n.splice(f[t], 1);
            }
            return y = null, n;
        };
        ht = r.getText = function (n) {
            var r, i = "", u = 0, t = n.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof n.textContent)
                        return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling)
                        i += ht(n);
                }
                else if (3 === t || 4 === t)
                    return n.nodeValue;
            }
            else
                while (r = n[u++])
                    i += ht(r);
            return i;
        };
        t = r.selectors = { cacheLength: 50, createPseudo: h, match: vt, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (n) {
            return n[1] = n[1].replace(k, d), n[3] = (n[3] || n[4] || n[5] || "").replace(k, d), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4);
        }, CHILD: function (n) {
            return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || r.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && r.error(n[0]), n;
        }, PSEUDO: function (n) {
            var i, t = !n[6] && n[2];
            return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && ur.test(t) && (i = et(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3));
        } }, filter: { TAG: function (n) {
            var t = n.replace(k, d).toLowerCase();
            return "*" === n ? function () {
                return !0;
            } : function (n) {
                return n.nodeName && n.nodeName.toLowerCase() === t;
            };
        }, CLASS: function (n) {
            var t = hi[n + " "];
            return t || (t = new RegExp("(^|" + i + ")" + n + "(" + i + "|$)")) && hi(n, function (n) {
                return t.test("string" == typeof n.className && n.className || typeof n.getAttribute !== ut && n.getAttribute("class") || "");
            });
        }, ATTR: function (n, t, i) {
            return function (u) {
                var f = r.attr(u, n);
                return null == f ? "!=" === t : t ? (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0;
            };
        }, CHILD: function (n, t, i, r, u) {
            var s = "nth" !== n.slice(0, 3), o = "last" !== n.slice(-4), e = "of-type" === t;
            return 1 === r && 0 === u ? function (n) {
                return !!n.parentNode;
            } : function (t, i, h) {
                var a, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling", p = t.parentNode, g = e && t.nodeName.toLowerCase(), d = !h && !e;
                if (p) {
                    if (s) {
                        while (b) {
                            for (c = t; c = c[b];)
                                if (e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType)
                                    return !1;
                            w = b = "only" === n && !w && "nextSibling";
                        }
                        return !0;
                    }
                    if (w = [o ? p.firstChild : p.lastChild], o && d) {
                        for (k = p[f] || (p[f] = {}), a = k[n] || [], y = a[0] === v && a[1], l = a[0] === v && a[2], c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop();)
                            if (1 === c.nodeType && ++l && c === t) {
                                k[n] = [v, y, l];
                                break;
                            }
                    }
                    else if (d && (a = (t[f] || (t[f] = {}))[n]) && a[0] === v)
                        l = a[1];
                    else
                        while (c = ++y && c && c[b] || (l = y = 0) || w.pop())
                            if ((e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [v, l]), c === t))
                                break;
                    return l -= u, l === r || l % r == 0 && l / r >= 0;
                }
            };
        }, PSEUDO: function (n, i) {
            var e, u = t.pseudos[n] || t.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
            return u[f] ? u(i) : u.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? h(function (n, t) {
                for (var r, f = u(n, i), e = f.length; e--;)
                    r = nt.call(n, f[e]), n[r] = !(t[r] = f[e]);
            }) : function (n) {
                return u(n, 0, e);
            }) : u;
        } }, pseudos: { not: h(function (n) {
            var i = [], r = [], t = wt(n.replace(at, "$1"));
            return t[f] ? h(function (n, i, r, u) {
                for (var e, o = t(n, null, u, []), f = n.length; f--;)
                    (e = o[f]) && (n[f] = !(i[f] = e));
            }) : function (n, u, f) {
                return i[0] = n, t(i, null, f, r), !r.pop();
            };
        }), has: h(function (n) {
            return function (t) {
                return r(n, t).length > 0;
            };
        }), contains: h(function (n) {
            return function (t) {
                return (t.textContent || t.innerText || ht(t)).indexOf(n) > -1;
            };
        }), lang: h(function (n) {
            return fr.test(n || "") || r.error("unsupported lang: " + n), n = n.replace(k, d).toLowerCase(), function (t) {
                var i;
                do
                    if (i = a ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                        return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-");
                while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
            };
        }), target: function (t) {
            var i = n.location && n.location.hash;
            return i && i.slice(1) === t.id;
        }, root: function (n) {
            return n === l;
        }, focus: function (n) {
            return n === e.activeElement && (!e.hasFocus || e.hasFocus()) && !!(n.type || n.href || ~n.tabIndex);
        }, enabled: function (n) {
            return n.disabled === !1;
        }, disabled: function (n) {
            return n.disabled === !0;
        }, checked: function (n) {
            var t = n.nodeName.toLowerCase();
            return "input" === t && !!n.checked || "option" === t && !!n.selected;
        }, selected: function (n) {
            return n.parentNode && n.parentNode.selectedIndex, n.selected === !0;
        }, empty: function (n) {
            for (n = n.firstChild; n; n = n.nextSibling)
                if (n.nodeType < 6)
                    return !1;
            return !0;
        }, parent: function (n) {
            return !t.pseudos.empty(n);
        }, header: function (n) {
            return or.test(n.nodeName);
        }, input: function (n) {
            return er.test(n.nodeName);
        }, button: function (n) {
            var t = n.nodeName.toLowerCase();
            return "input" === t && "button" === n.type || "button" === t;
        }, text: function (n) {
            var t;
            return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: tt(function () {
            return [0];
        }), last: tt(function (n, t) {
            return [t - 1];
        }), eq: tt(function (n, t, i) {
            return [0 > i ? i + t : i];
        }), even: tt(function (n, t) {
            for (var i = 0; t > i; i += 2)
                n.push(i);
            return n;
        }), odd: tt(function (n, t) {
            for (var i = 1; t > i; i += 2)
                n.push(i);
            return n;
        }), lt: tt(function (n, t, i) {
            for (var r = 0 > i ? i + t : i; --r >= 0;)
                n.push(r);
            return n;
        }), gt: tt(function (n, t, i) {
            for (var r = 0 > i ? i + t : i; ++r < t;)
                n.push(r);
            return n;
        }) } };
        t.pseudos.nth = t.pseudos.eq;
        for (it in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
            t.pseudos[it] = cr(it);
        for (it in { submit: !0, reset: !0 })
            t.pseudos[it] = lr(it);
        return bi.prototype = t.filters = t.pseudos, t.setFilters = new bi, et = r.tokenize = function (n, i) {
            var e, f, s, o, u, h, c, l = ci[n + " "];
            if (l)
                return i ? 0 : l.slice(0);
            for (u = n, h = [], c = t.preFilter; u;) {
                (!e || (f = tr.exec(u))) && (f && (u = u.slice(f[0].length) || u), h.push(s = []));
                e = !1;
                (f = ir.exec(u)) && (e = f.shift(), s.push({ value: e, type: f[0].replace(at, " ") }), u = u.slice(e.length));
                for (o in t.filter)
                    (f = vt[o].exec(u)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({ value: e, type: o, matches: f }), u = u.slice(e.length));
                if (!e)
                    break;
            }
            return i ? u.length : u ? r.error(n) : ci(n, h).slice(0);
        }, wt = r.compile = function (n, t) {
            var r, u = [], e = [], i = li[n + " "];
            if (!i) {
                for (t || (t = et(n)), r = t.length; r--;)
                    i = ei(t[r]), i[f] ? u.push(i) : e.push(i);
                i = li(n, vr(e, u));
                i.selector = n;
            }
            return i;
        }, si = r.select = function (n, i, r, f) {
            var s, e, o, l, v, c = "function" == typeof n && n, h = !f && et(n = c.selector || n);
            if (r = r || [], 1 === h.length) {
                if (e = h[0] = h[0].slice(0), e.length > 2 && "ID" === (o = e[0]).type && u.getById && 9 === i.nodeType && a && t.relative[e[1].type]) {
                    if (i = (t.find.ID(o.matches[0].replace(k, d), i) || [])[0], !i)
                        return r;
                    c && (i = i.parentNode);
                    n = n.slice(e.shift().value.length);
                }
                for (s = vt.needsContext.test(n) ? 0 : e.length; s--;) {
                    if (o = e[s], t.relative[l = o.type])
                        break;
                    if ((v = t.find[l]) && (f = v(o.matches[0].replace(k, d), gt.test(e[0].type) && ii(i.parentNode) || i))) {
                        if (e.splice(s, 1), n = f.length && yt(e), !n)
                            return b.apply(r, f), r;
                        break;
                    }
                }
            }
            return (c || wt(n, h))(f, i, !a, r, gt.test(n) && ii(i.parentNode) || i), r;
        }, u.sortStable = f.split("").sort(bt).join("") === f, u.detectDuplicates = !!rt, p(), u.sortDetached = c(function (n) {
            return 1 & n.compareDocumentPosition(e.createElement("div"));
        }), c(function (n) {
            return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href");
        }) || ti("type|href|height|width", function (n, t, i) {
            if (!i)
                return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), u.attributes && c(function (n) {
            return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value");
        }) || ti("value", function (n, t, i) {
            if (!i && "input" === n.nodeName.toLowerCase())
                return n.defaultValue;
        }), c(function (n) {
            return null == n.getAttribute("disabled");
        }) || ti(kt, function (n, t, i) {
            var r;
            if (!i)
                return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null;
        }), r;
    }(n);
    i.find = y;
    i.expr = y.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.unique = y.uniqueSort;
    i.text = y.getText;
    i.isXMLDoc = y.isXML;
    i.contains = y.contains;
    var di = i.expr.match.needsContext, gi = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ef = /^.[^:#\[\.,]*$/;
    i.filter = function (n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function (n) {
            return 1 === n.nodeType;
        }));
    };
    i.fn.extend({ find: function (n) {
        var t, u = this.length, r = [], f = this;
        if ("string" != typeof n)
            return this.pushStack(i(n).filter(function () {
                for (t = 0; u > t; t++)
                    if (i.contains(f[t], this))
                        return !0;
            }));
        for (t = 0; u > t; t++)
            i.find(n, f[t], r);
        return r = this.pushStack(u > 1 ? i.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, r;
    }, filter: function (n) {
        return this.pushStack(fi(this, n || [], !1));
    }, not: function (n) {
        return this.pushStack(fi(this, n || [], !0));
    }, is: function (n) {
        return !!fi(this, "string" == typeof n && di.test(n) ? i(n) : n || [], !1).length;
    } });
    nr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    tr = i.fn.init = function (n, t) {
        var r, f;
        if (!n)
            return this;
        if ("string" == typeof n) {
            if (r = "<" === n[0] && ">" === n[n.length - 1] && n.length >= 3 ? [null, n, null] : nr.exec(n), !r || !r[1] && t)
                return !t || t.jquery ? (t || st).find(n) : this.constructor(t).find(n);
            if (r[1]) {
                if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), gi.test(r[1]) && i.isPlainObject(t))
                    for (r in t)
                        i.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return f = u.getElementById(r[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = u, this.selector = n, this;
        }
        return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? "undefined" != typeof st.ready ? st.ready(n) : n(i) : (void 0 !== n.selector && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this));
    };
    tr.prototype = i.fn;
    st = i(u);
    ir = /^(?:parents|prev(?:Until|All))/;
    rr = { children: !0, contents: !0, next: !0, prev: !0 };
    i.extend({ dir: function (n, t, r) {
        for (var u = [], f = void 0 !== r; (n = n[t]) && 9 !== n.nodeType;)
            if (1 === n.nodeType) {
                if (f && i(n).is(r))
                    break;
                u.push(n);
            }
        return u;
    }, sibling: function (n, t) {
        for (var i = []; n; n = n.nextSibling)
            1 === n.nodeType && n !== t && i.push(n);
        return i;
    } });
    i.fn.extend({ has: function (n) {
        var t = i(n, this), r = t.length;
        return this.filter(function () {
            for (var n = 0; r > n; n++)
                if (i.contains(this, t[n]))
                    return !0;
        });
    }, closest: function (n, t) {
        for (var r, f = 0, o = this.length, u = [], e = di.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
            for (r = this[f]; r && r !== t; r = r.parentNode)
                if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                    u.push(r);
                    break;
                }
        return this.pushStack(u.length > 1 ? i.unique(u) : u);
    }, index: function (n) {
        return n ? "string" == typeof n ? et.call(i(n), this[0]) : et.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function (n, t) {
        return this.pushStack(i.unique(i.merge(this.get(), i(n, t))));
    }, addBack: function (n) {
        return this.add(null == n ? this.prevObject : this.prevObject.filter(n));
    } });
    i.each({ parent: function (n) {
        var t = n.parentNode;
        return t && 11 !== t.nodeType ? t : null;
    }, parents: function (n) {
        return i.dir(n, "parentNode");
    }, parentsUntil: function (n, t, r) {
        return i.dir(n, "parentNode", r);
    }, next: function (n) {
        return ur(n, "nextSibling");
    }, prev: function (n) {
        return ur(n, "previousSibling");
    }, nextAll: function (n) {
        return i.dir(n, "nextSibling");
    }, prevAll: function (n) {
        return i.dir(n, "previousSibling");
    }, nextUntil: function (n, t, r) {
        return i.dir(n, "nextSibling", r);
    }, prevUntil: function (n, t, r) {
        return i.dir(n, "previousSibling", r);
    }, siblings: function (n) {
        return i.sibling((n.parentNode || {}).firstChild, n);
    }, children: function (n) {
        return i.sibling(n.firstChild);
    }, contents: function (n) {
        return n.contentDocument || i.merge([], n.childNodes);
    } }, function (n, t) {
        i.fn[n] = function (r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (rr[n] || i.unique(f), ir.test(n) && f.reverse()), this.pushStack(f);
        };
    });
    c = /\S+/g;
    ei = {};
    i.Callbacks = function (n) {
        n = "string" == typeof n ? ei[n] || of(n) : i.extend({}, n);
        var u, h, o, c, f, e, t = [], r = !n.once && [], l = function (i) {
            for (u = n.memory && i, h = !0, e = c || 0, c = 0, f = t.length, o = !0; t && f > e; e++)
                if (t[e].apply(i[0], i[1]) === !1 && n.stopOnFalse) {
                    u = !1;
                    break;
                }
            o = !1;
            t && (r ? r.length && l(r.shift()) : u ? t = [] : s.disable());
        }, s = { add: function () {
            if (t) {
                var r = t.length;
                !function e(r) {
                    i.each(r, function (r, u) {
                        var f = i.type(u);
                        "function" === f ? n.unique && s.has(u) || t.push(u) : u && u.length && "string" !== f && e(u);
                    });
                }(arguments);
                o ? f = t.length : u && (c = r, l(u));
            }
            return this;
        }, remove: function () {
            return t && i.each(arguments, function (n, r) {
                for (var u; (u = i.inArray(r, t, u)) > -1;)
                    t.splice(u, 1), o && (f >= u && f--, e >= u && e--);
            }), this;
        }, has: function (n) {
            return n ? i.inArray(n, t) > -1 : !(!t || !t.length);
        }, empty: function () {
            return t = [], f = 0, this;
        }, disable: function () {
            return t = r = u = void 0, this;
        }, disabled: function () {
            return !t;
        }, lock: function () {
            return r = void 0, u || s.disable(), this;
        }, locked: function () {
            return !r;
        }, fireWith: function (n, i) {
            return !t || h && !r || (i = i || [], i = [n, i.slice ? i.slice() : i], o ? r.push(i) : l(i)), this;
        }, fire: function () {
            return s.fireWith(this, arguments), this;
        }, fired: function () {
            return !!h;
        } };
        return s;
    };
    i.extend({ Deferred: function (n) {
        var u = [["resolve", "done", i.Callbacks("once memory"), "resolved"], ["reject", "fail", i.Callbacks("once memory"), "rejected"], ["notify", "progress", i.Callbacks("memory")]], f = "pending", r = { state: function () {
            return f;
        }, always: function () {
            return t.done(arguments).fail(arguments), this;
        }, then: function () {
            var n = arguments;
            return i.Deferred(function (f) {
                i.each(u, function (u, e) {
                    var o = i.isFunction(n[u]) && n[u];
                    t[e[1]](function () {
                        var n = o && o.apply(this, arguments);
                        n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments);
                    });
                });
                n = null;
            }).promise();
        }, promise: function (n) {
            return null != n ? i.extend(n, r) : r;
        } }, t = {};
        return r.pipe = r.then, i.each(u, function (n, i) {
            var e = i[2], o = i[3];
            r[i[1]] = e.add;
            o && e.add(function () {
                f = o;
            }, u[1 ^ n][2].disable, u[2][2].lock);
            t[i[0]] = function () {
                return t[i[0] + "With"](this === t ? r : this, arguments), this;
            };
            t[i[0] + "With"] = e.fireWith;
        }), r.promise(t), n && n.call(t, t), t;
    }, when: function (n) {
        var t = 0, u = a.call(arguments), r = u.length, e = 1 !== r || n && i.isFunction(n.promise) ? r : 0, f = 1 === e ? n : i.Deferred(), h = function (n, t, i) {
            return function (r) {
                t[n] = this;
                i[n] = arguments.length > 1 ? a.call(arguments) : r;
                i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i);
            };
        }, o, c, s;
        if (r > 1)
            for (o = new Array(r), c = new Array(r), s = new Array(r); r > t; t++)
                u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
        return e || f.resolveWith(s, u), f.promise();
    } });
    i.fn.ready = function (n) {
        return i.ready.promise().done(n), this;
    };
    i.extend({ isReady: !1, readyWait: 1, holdReady: function (n) {
        n ? i.readyWait++ : i.ready(!0);
    }, ready: function (n) {
        (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0 || (ht.resolveWith(u, [i]), i.fn.triggerHandler && (i(u).triggerHandler("ready"), i(u).off("ready"))));
    } });
    i.ready.promise = function (t) {
        return ht || (ht = i.Deferred(), "complete" === u.readyState ? setTimeout(i.ready) : (u.addEventListener("DOMContentLoaded", ct, !1), n.addEventListener("load", ct, !1))), ht.promise(t);
    };
    i.ready.promise();
    l = i.access = function (n, t, r, u, f, e, o) {
        var s = 0, c = n.length, h = null == r;
        if ("object" === i.type(r)) {
            f = !0;
            for (s in r)
                i.access(n, t, s, r[s], !0, e, o);
        }
        else if (void 0 !== u && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function (n, t, r) {
            return h.call(i(n), r);
        })), t))
            for (; c > s; s++)
                t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
        return f ? n : h ? t.call(n) : c ? t(n[0], r) : e;
    };
    i.acceptData = function (n) {
        return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType;
    };
    p.uid = 1;
    p.accepts = i.acceptData;
    p.prototype = { key: function (n) {
        if (!p.accepts(n))
            return 0;
        var r = {}, t = n[this.expando];
        if (!t) {
            t = p.uid++;
            try {
                r[this.expando] = { value: t };
                Object.defineProperties(n, r);
            }
            catch (u) {
                r[this.expando] = t;
                i.extend(n, r);
            }
        }
        return this.cache[t] || (this.cache[t] = {}), t;
    }, set: function (n, t, r) {
        var f, e = this.key(n), u = this.cache[e];
        if ("string" == typeof t)
            u[t] = r;
        else if (i.isEmptyObject(u))
            i.extend(this.cache[e], t);
        else
            for (f in t)
                u[f] = t[f];
        return u;
    }, get: function (n, t) {
        var i = this.cache[this.key(n)];
        return void 0 === t ? i : i[t];
    }, access: function (n, t, r) {
        var u;
        return void 0 === t || t && "string" == typeof t && void 0 === r ? (u = this.get(n, t), void 0 !== u ? u : this.get(n, i.camelCase(t))) : (this.set(n, t, r), void 0 !== r ? r : t);
    }, remove: function (n, t) {
        var u, r, f, o = this.key(n), e = this.cache[o];
        if (void 0 === t)
            this.cache[o] = {};
        else
            for (i.isArray(t) ? r = t.concat(t.map(i.camelCase)) : (f = i.camelCase(t), (t in e) ? r = [t, f] : (r = f, r = (r in e) ? [r] : r.match(c) || [])), u = r.length; u--;)
                delete e[r[u]];
    }, hasData: function (n) {
        return !i.isEmptyObject(this.cache[n[this.expando]] || {});
    }, discard: function (n) {
        n[this.expando] && delete this.cache[n[this.expando]];
    } };
    var r = new p, e = new p, sf = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, hf = /([A-Z])/g;
    i.extend({ hasData: function (n) {
        return e.hasData(n) || r.hasData(n);
    }, data: function (n, t, i) {
        return e.access(n, t, i);
    }, removeData: function (n, t) {
        e.remove(n, t);
    }, _data: function (n, t, i) {
        return r.access(n, t, i);
    }, _removeData: function (n, t) {
        r.remove(n, t);
    } });
    i.fn.extend({ data: function (n, t) {
        var o, f, s, u = this[0], h = u && u.attributes;
        if (void 0 === n) {
            if (this.length && (s = e.get(u), 1 === u.nodeType && !r.get(u, "hasDataAttrs"))) {
                for (o = h.length; o--;)
                    h[o] && (f = h[o].name, 0 === f.indexOf("data-") && (f = i.camelCase(f.slice(5)), fr(u, f, s[f])));
                r.set(u, "hasDataAttrs", !0);
            }
            return s;
        }
        return "object" == typeof n ? this.each(function () {
            e.set(this, n);
        }) : l(this, function (t) {
            var r, f = i.camelCase(n);
            if (u && void 0 === t) {
                if ((r = e.get(u, n), void 0 !== r) || (r = e.get(u, f), void 0 !== r) || (r = fr(u, f, void 0), void 0 !== r))
                    return r;
            }
            else
                this.each(function () {
                    var i = e.get(this, f);
                    e.set(this, f, t);
                    -1 !== n.indexOf("-") && void 0 !== i && e.set(this, n, t);
                });
        }, null, t, arguments.length > 1, null, !0);
    }, removeData: function (n) {
        return this.each(function () {
            e.remove(this, n);
        });
    } });
    i.extend({ queue: function (n, t, u) {
        var f;
        if (n)
            return (t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || i.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []);
    }, dequeue: function (n, t) {
        t = t || "fx";
        var r = i.queue(n, t), e = r.length, u = r.shift(), f = i._queueHooks(n, t), o = function () {
            i.dequeue(n, t);
        };
        "inprogress" === u && (u = r.shift(), e--);
        u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
        !e && f && f.empty.fire();
    }, _queueHooks: function (n, t) {
        var u = t + "queueHooks";
        return r.get(n, u) || r.access(n, u, { empty: i.Callbacks("once memory").add(function () {
            r.remove(n, [t + "queue", u]);
        }) });
    } });
    i.fn.extend({ queue: function (n, t) {
        var r = 2;
        return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function () {
            var r = i.queue(this, n, t);
            i._queueHooks(this, n);
            "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n);
        });
    }, dequeue: function (n) {
        return this.each(function () {
            i.dequeue(this, n);
        });
    }, clearQueue: function (n) {
        return this.queue(n || "fx", []);
    }, promise: function (n, t) {
        var u, e = 1, o = i.Deferred(), f = this, s = this.length, h = function () {
            --e || o.resolveWith(f, [f]);
        };
        for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;)
            u = r.get(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
        return h(), o.promise(t);
    } });
    var lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = ["Top", "Right", "Bottom", "Left"], it = function (n, t) {
        return n = t || n, "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n);
    }, er = /^(?:checkbox|radio)$/i;
    !function () {
        var i = u.createDocumentFragment(), n = i.appendChild(u.createElement("div")), t = u.createElement("input");
        t.setAttribute("type", "radio");
        t.setAttribute("checked", "checked");
        t.setAttribute("name", "t");
        n.appendChild(t);
        f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
        n.innerHTML = "<textarea>x<\/textarea>";
        f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue;
    }();
    d = "undefined";
    f.focusinBubbles = "onfocusin" in n;
    var cf = /^key/, lf = /^(?:mouse|pointer|contextmenu)|click/, or = /^(?:focusinfocus|focusoutblur)$/, sr = /^([^.]*)(?:\.(.+)|)$/;
    i.event = { global: {}, add: function (n, t, u, f, e) {
        var v, y, w, p, b, h, s, l, o, k, g, a = r.get(n);
        if (a)
            for (u.handler && (v = u, u = v.handler, e = v.selector), u.guid || (u.guid = i.guid++), (p = a.events) || (p = a.events = {}), (y = a.handle) || (y = a.handle = function (t) {
                if (typeof i !== d && i.event.triggered !== t.type)
                    return i.event.dispatch.apply(n, arguments);
            }), t = (t || "").match(c) || [""], b = t.length; b--;)
                w = sr.exec(t[b]) || [], o = g = w[1], k = (w[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, h = i.extend({ type: o, origType: g, data: f, handler: u, guid: u.guid, selector: e, needsContext: e && i.expr.match.needsContext.test(e), namespace: k.join(".") }, v), (l = p[o]) || (l = p[o] = [], l.delegateCount = 0, s.setup && s.setup.call(n, f, k, y) !== !1 || n.addEventListener && n.addEventListener(o, y, !1)), s.add && (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)), e ? l.splice(l.delegateCount++, 0, h) : l.push(h), i.event.global[o] = !0);
    }, remove: function (n, t, u, f, e) {
        var p, k, h, v, w, s, l, a, o, b, d, y = r.hasData(n) && r.get(n);
        if (y && (v = y.events)) {
            for (t = (t || "").match(c) || [""], w = t.length; w--;)
                if (h = sr.exec(t[w]) || [], o = d = h[1], b = (h[2] || "").split(".").sort(), o) {
                    for (l = i.event.special[o] || {}, o = (f ? l.delegateType : l.bindType) || o, a = v[o] || [], h = h[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = p = a.length; p--;)
                        s = a[p], !e && d !== s.origType || u && u.guid !== s.guid || h && !h.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(p, 1), s.selector && a.delegateCount--, l.remove && l.remove.call(n, s));
                    k && !a.length && (l.teardown && l.teardown.call(n, b, y.handle) !== !1 || i.removeEvent(n, o, y.handle), delete v[o]);
                }
                else
                    for (o in v)
                        i.event.remove(n, o + t[w], u, f, !0);
            i.isEmptyObject(v) && (delete y.handle, r.remove(n, "events"));
        }
    }, trigger: function (t, f, e, o) {
        var w, s, c, b, a, v, l, p = [e || u], h = ri.call(t, "type") ? t.type : t, y = ri.call(t, "namespace") ? t.namespace.split(".") : [];
        if (s = c = e = e || u, 3 !== e.nodeType && 8 !== e.nodeType && !or.test(h + i.event.triggered) && (h.indexOf(".") >= 0 && (y = h.split("."), h = y.shift(), y.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = e), f = null == f ? [t] : i.makeArray(f, [t]), l = i.event.special[h] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
            if (!o && !l.noBubble && !i.isWindow(e)) {
                for (b = l.delegateType || h, or.test(b + h) || (s = s.parentNode); s; s = s.parentNode)
                    p.push(s), c = s;
                c === (e.ownerDocument || u) && p.push(c.defaultView || c.parentWindow || n);
            }
            for (w = 0; (s = p[w++]) && !t.isPropagationStopped();)
                t.type = w > 1 ? b : l.bindType || h, v = (r.get(s, "events") || {})[t.type] && r.get(s, "handle"), v && v.apply(s, f), v = a && s[a], v && v.apply && i.acceptData(s) && (t.result = v.apply(s, f), t.result === !1 && t.preventDefault());
            return t.type = h, o || t.isDefaultPrevented() || l._default && l._default.apply(p.pop(), f) !== !1 || !i.acceptData(e) || a && i.isFunction(e[h]) && !i.isWindow(e) && (c = e[a], c && (e[a] = null), i.event.triggered = h, e[h](), i.event.triggered = void 0, c && (e[a] = c)), t.result;
        }
    }, dispatch: function (n) {
        n = i.event.fix(n);
        var o, s, e, u, t, h = [], c = a.call(arguments), l = (r.get(this, "events") || {})[n.type] || [], f = i.event.special[n.type] || {};
        if (c[0] = n, n.delegateTarget = this, !f.preDispatch || f.preDispatch.call(this, n) !== !1) {
            for (h = i.event.handlers.call(this, n, l), o = 0; (u = h[o++]) && !n.isPropagationStopped();)
                for (n.currentTarget = u.elem, s = 0; (t = u.handlers[s++]) && !n.isImmediatePropagationStopped();)
                    (!n.namespace_re || n.namespace_re.test(t.namespace)) && (n.handleObj = t, n.data = t.data, e = ((i.event.special[t.origType] || {}).handle || t.handler).apply(u.elem, c), void 0 !== e && (n.result = e) === !1 && (n.preventDefault(), n.stopPropagation()));
            return f.postDispatch && f.postDispatch.call(this, n), n.result;
        }
    }, handlers: function (n, t) {
        var e, u, f, o, h = [], s = t.delegateCount, r = n.target;
        if (s && r.nodeType && (!n.button || "click" !== n.type))
            for (; r !== this; r = r.parentNode || this)
                if (r.disabled !== !0 || "click" !== n.type) {
                    for (u = [], e = 0; s > e; e++)
                        o = t[e], f = o.selector + " ", void 0 === u[f] && (u[f] = o.needsContext ? i(f, this).index(r) >= 0 : i.find(f, this, null, [r]).length), u[f] && u.push(o);
                    u.length && h.push({ elem: r, handlers: u });
                }
        return s < t.length && h.push({ elem: this, handlers: t.slice(s) }), h;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (n, t) {
        return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode), n;
    } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (n, t) {
        var e, i, r, f = t.button;
        return null == n.pageX && null != t.clientX && (e = n.target.ownerDocument || u, i = e.documentElement, r = e.body, n.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), n.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), n.which || void 0 === f || (n.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), n;
    } }, fix: function (n) {
        if (n[i.expando])
            return n;
        var f, e, o, r = n.type, s = n, t = this.fixHooks[r];
        for (t || (this.fixHooks[r] = t = lf.test(r) ? this.mouseHooks : cf.test(r) ? this.keyHooks : {}), o = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(s), f = o.length; f--;)
            e = o[f], n[e] = s[e];
        return n.target || (n.target = u), 3 === n.target.nodeType && (n.target = n.target.parentNode), t.filter ? t.filter(n, s) : n;
    }, special: { load: { noBubble: !0 }, focus: { trigger: function () {
        if (this !== hr() && this.focus)
            return (this.focus(), !1);
    }, delegateType: "focusin" }, blur: { trigger: function () {
        if (this === hr() && this.blur)
            return (this.blur(), !1);
    }, delegateType: "focusout" }, click: { trigger: function () {
        if ("checkbox" === this.type && this.click && i.nodeName(this, "input"))
            return (this.click(), !1);
    }, _default: function (n) {
        return i.nodeName(n.target, "a");
    } }, beforeunload: { postDispatch: function (n) {
        void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result);
    } } }, simulate: function (n, t, r, u) {
        var f = i.extend(new i.Event, r, { type: n, isSimulated: !0, originalEvent: {} });
        u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
        f.isDefaultPrevented() && r.preventDefault();
    } };
    i.removeEvent = function (n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1);
    };
    i.Event = function (n, t) {
        return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && n.returnValue === !1 ? at : g) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), void (this[i.expando] = !0)) : new i.Event(n, t);
    };
    i.Event.prototype = { isDefaultPrevented: g, isPropagationStopped: g, isImmediatePropagationStopped: g, preventDefault: function () {
        var n = this.originalEvent;
        this.isDefaultPrevented = at;
        n && n.preventDefault && n.preventDefault();
    }, stopPropagation: function () {
        var n = this.originalEvent;
        this.isPropagationStopped = at;
        n && n.stopPropagation && n.stopPropagation();
    }, stopImmediatePropagation: function () {
        var n = this.originalEvent;
        this.isImmediatePropagationStopped = at;
        n && n.stopImmediatePropagation && n.stopImmediatePropagation();
        this.stopPropagation();
    } };
    i.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (n, t) {
        i.event.special[n] = { delegateType: t, bindType: t, handle: function (n) {
            var u, f = this, r = n.relatedTarget, e = n.handleObj;
            return (!r || r !== f && !i.contains(f, r)) && (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u;
        } };
    });
    f.focusinBubbles || i.each({ focus: "focusin", blur: "focusout" }, function (n, t) {
        var u = function (n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0);
        };
        i.event.special[t] = { setup: function () {
            var i = this.ownerDocument || this, f = r.access(i, t);
            f || i.addEventListener(n, u, !0);
            r.access(i, t, (f || 0) + 1);
        }, teardown: function () {
            var i = this.ownerDocument || this, f = r.access(i, t) - 1;
            f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t));
        } };
    });
    i.fn.extend({ on: function (n, t, r, u, f) {
        var e, o;
        if ("object" == typeof n) {
            "string" != typeof t && (r = r || t, t = void 0);
            for (o in n)
                this.on(o, t, r, n[o], f);
            return this;
        }
        if (null == r && null == u ? (u = t, r = t = void 0) : null == u && ("string" == typeof t ? (u = r, r = void 0) : (u = r, r = t, t = void 0)), u === !1)
            u = g;
        else if (!u)
            return this;
        return 1 === f && (e = u, u = function (n) {
            return i().off(n), e.apply(this, arguments);
        }, u.guid = e.guid || (e.guid = i.guid++)), this.each(function () {
            i.event.add(this, n, u, r, t);
        });
    }, one: function (n, t, i, r) {
        return this.on(n, t, i, r, 1);
    }, off: function (n, t, r) {
        var u, f;
        if (n && n.preventDefault && n.handleObj)
            return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
        if ("object" == typeof n) {
            for (f in n)
                this.off(f, t, n[f]);
            return this;
        }
        return (t === !1 || "function" == typeof t) && (r = t, t = void 0), r === !1 && (r = g), this.each(function () {
            i.event.remove(this, n, r, t);
        });
    }, trigger: function (n, t) {
        return this.each(function () {
            i.event.trigger(n, t, this);
        });
    }, triggerHandler: function (n, t) {
        var r = this[0];
        if (r)
            return i.event.trigger(n, t, r, !0);
    } });
    var cr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, lr = /<([\w:]+)/, af = /<|&#?\w+;/, vf = /<(?:script|style|link)/i, yf = /checked\s*(?:[^=]|=\s*.checked.)/i, ar = /^$|\/(?:java|ecma)script/i, pf = /^true\/(.*)/, wf = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, h = { option: [1, "<select multiple='multiple'>", "<\/select>"], thead: [1, "<table>", "<\/table>"], col: [2, "<table><colgroup>", "<\/colgroup><\/table>"], tr: [2, "<table><tbody>", "<\/tbody><\/table>"], td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"], _default: [0, "", ""] };
    h.optgroup = h.option;
    h.tbody = h.tfoot = h.colgroup = h.caption = h.thead;
    h.th = h.td;
    i.extend({ clone: function (n, t, r) {
        var u, c, s, e, h = n.cloneNode(!0), l = i.contains(n.ownerDocument, n);
        if (!(f.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
            for (e = o(h), s = o(n), u = 0, c = s.length; c > u; u++)
                df(s[u], e[u]);
        if (t)
            if (r)
                for (s = s || o(n), e = e || o(h), u = 0, c = s.length; c > u; u++)
                    yr(s[u], e[u]);
            else
                yr(n, h);
        return e = o(h, "script"), e.length > 0 && oi(e, !l && o(n, "script")), h;
    }, buildFragment: function (n, t, r, u) {
        for (var f, e, y, l, p, a, s = t.createDocumentFragment(), v = [], c = 0, w = n.length; w > c; c++)
            if (f = n[c], f || 0 === f)
                if ("object" === i.type(f))
                    i.merge(v, f.nodeType ? [f] : f);
                else if (af.test(f)) {
                    for (e = e || s.appendChild(t.createElement("div")), y = (lr.exec(f) || ["", ""])[1].toLowerCase(), l = h[y] || h._default, e.innerHTML = l[1] + f.replace(cr, "<$1><\/$2>") + l[2], a = l[0]; a--;)
                        e = e.lastChild;
                    i.merge(v, e.childNodes);
                    e = s.firstChild;
                    e.textContent = "";
                }
                else
                    v.push(t.createTextNode(f));
        for (s.textContent = "", c = 0; f = v[c++];)
            if ((!u || -1 === i.inArray(f, u)) && (p = i.contains(f.ownerDocument, f), e = o(s.appendChild(f), "script"), p && oi(e), r))
                for (a = 0; f = e[a++];)
                    ar.test(f.type || "") && r.push(f);
        return s;
    }, cleanData: function (n) {
        for (var f, t, o, u, h = i.event.special, s = 0; void 0 !== (t = n[s]); s++) {
            if (i.acceptData(t) && (u = t[r.expando], u && (f = r.cache[u]))) {
                if (f.events)
                    for (o in f.events)
                        h[o] ? i.event.remove(t, o) : i.removeEvent(t, o, f.handle);
                r.cache[u] && delete r.cache[u];
            }
            delete e.cache[t[e.expando]];
        }
    } });
    i.fn.extend({ text: function (n) {
        return l(this, function (n) {
            return void 0 === n ? i.text(this) : this.empty().each(function () {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = n);
            });
        }, null, n, arguments.length);
    }, append: function () {
        return this.domManip(arguments, function (n) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = vr(this, n);
                t.appendChild(n);
            }
        });
    }, prepend: function () {
        return this.domManip(arguments, function (n) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = vr(this, n);
                t.insertBefore(n, t.firstChild);
            }
        });
    }, before: function () {
        return this.domManip(arguments, function (n) {
            this.parentNode && this.parentNode.insertBefore(n, this);
        });
    }, after: function () {
        return this.domManip(arguments, function (n) {
            this.parentNode && this.parentNode.insertBefore(n, this.nextSibling);
        });
    }, remove: function (n, t) {
        for (var r, f = n ? i.filter(n, this) : this, u = 0; null != (r = f[u]); u++)
            t || 1 !== r.nodeType || i.cleanData(o(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && oi(o(r, "script")), r.parentNode.removeChild(r));
        return this;
    }, empty: function () {
        for (var n, t = 0; null != (n = this[t]); t++)
            1 === n.nodeType && (i.cleanData(o(n, !1)), n.textContent = "");
        return this;
    }, clone: function (n, t) {
        return n = null == n ? !1 : n, t = null == t ? n : t, this.map(function () {
            return i.clone(this, n, t);
        });
    }, html: function (n) {
        return l(this, function (n) {
            var t = this[0] || {}, r = 0, u = this.length;
            if (void 0 === n && 1 === t.nodeType)
                return t.innerHTML;
            if ("string" == typeof n && !vf.test(n) && !h[(lr.exec(n) || ["", ""])[1].toLowerCase()]) {
                n = n.replace(cr, "<$1><\/$2>");
                try {
                    for (; u > r; r++)
                        t = this[r] || {}, 1 === t.nodeType && (i.cleanData(o(t, !1)), t.innerHTML = n);
                    t = 0;
                }
                catch (f) {
                }
            }
            t && this.empty().append(n);
        }, null, n, arguments.length);
    }, replaceWith: function () {
        var n = arguments[0];
        return this.domManip(arguments, function (t) {
            n = this.parentNode;
            i.cleanData(o(this));
            n && n.replaceChild(t, this);
        }), n && (n.length || n.nodeType) ? this : this.remove();
    }, detach: function (n) {
        return this.remove(n, !0);
    }, domManip: function (n, t) {
        n = bi.apply([], n);
        var h, v, s, c, u, y, e = 0, l = this.length, w = this, b = l - 1, a = n[0], p = i.isFunction(a);
        if (p || l > 1 && "string" == typeof a && !f.checkClone && yf.test(a))
            return this.each(function (i) {
                var r = w.eq(i);
                p && (n[0] = a.call(this, i, r.html()));
                r.domManip(n, t);
            });
        if (l && (h = i.buildFragment(n, this[0].ownerDocument, !1, this), v = h.firstChild, 1 === h.childNodes.length && (h = v), v)) {
            for (s = i.map(o(h, "script"), bf), c = s.length; l > e; e++)
                u = h, e !== b && (u = i.clone(u, !0, !0), c && i.merge(s, o(u, "script"))), t.call(this[e], u, e);
            if (c)
                for (y = s[s.length - 1].ownerDocument, i.map(s, kf), e = 0; c > e; e++)
                    u = s[e], ar.test(u.type || "") && !r.access(u, "globalEval") && i.contains(y, u) && (u.src ? i._evalUrl && i._evalUrl(u.src) : i.globalEval(u.textContent.replace(wf, "")));
        }
        return this;
    } });
    i.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (n, t) {
        i.fn[n] = function (n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; o >= r; r++)
                u = r === o ? this : this.clone(!0), i(e[r])[t](u), ii.apply(f, u.get());
            return this.pushStack(f);
        };
    });
    si = {};
    var wr = /^margin/, ci = new RegExp("^(" + lt + ")(?!px)[a-z%]+$", "i"), yt = function (n) {
        return n.ownerDocument.defaultView.getComputedStyle(n, null);
    };
    !function () {
        var s, o, e = u.documentElement, r = u.createElement("div"), t = u.createElement("div");
        if (t.style) {
            t.style.backgroundClip = "content-box";
            t.cloneNode(!0).style.backgroundClip = "";
            f.clearCloneStyle = "content-box" === t.style.backgroundClip;
            r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute";
            r.appendChild(t);
            function h() {
                t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
                t.innerHTML = "";
                e.appendChild(r);
                var i = n.getComputedStyle(t, null);
                s = "1%" !== i.top;
                o = "4px" === i.width;
                e.removeChild(r);
            }
            n.getComputedStyle && i.extend(f, { pixelPosition: function () {
                return h(), s;
            }, boxSizingReliable: function () {
                return null == o && h(), o;
            }, reliableMarginRight: function () {
                var f, i = t.appendChild(u.createElement("div"));
                return i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", e.appendChild(r), f = !parseFloat(n.getComputedStyle(i, null).marginRight), e.removeChild(r), f;
            } });
        }
    }();
    i.swap = function (n, t, i, r) {
        var f, u, e = {};
        for (u in t)
            e[u] = n.style[u], n.style[u] = t[u];
        f = i.apply(n, r || []);
        for (u in t)
            n.style[u] = e[u];
        return f;
    };
    var gf = /^(none|table(?!-c[ea]).+)/, ne = new RegExp("^(" + lt + ")(.*)$", "i"), te = new RegExp("^([+-])=(" + lt + ")", "i"), ie = { position: "absolute", visibility: "hidden", display: "block" }, kr = { letterSpacing: "0", fontWeight: "400" }, dr = ["Webkit", "O", "Moz", "ms"];
    i.extend({ cssHooks: { opacity: { get: function (n, t) {
        if (t) {
            var i = rt(n, "opacity");
            return "" === i ? "1" : i;
        }
    } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: "cssFloat" }, style: function (n, t, r, u) {
        if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
            var o, h, e, s = i.camelCase(t), c = n.style;
            return t = i.cssProps[s] || (i.cssProps[s] = gr(c, s)), e = i.cssHooks[t] || i.cssHooks[s], void 0 === r ? e && "get" in e && void 0 !== (o = e.get(n, !1, u)) ? o : c[t] : (h = typeof r, "string" === h && (o = te.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(i.css(n, t)), h = "number"), null != r && r === r && ("number" !== h || i.cssNumber[s] || (r += "px"), f.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (c[t] = "inherit"), e && "set" in e && void 0 === (r = e.set(n, r, u)) || (c[t] = r)), void 0);
        }
    }, css: function (n, t, r, u) {
        var f, s, e, o = i.camelCase(t);
        return t = i.cssProps[o] || (i.cssProps[o] = gr(n.style, o)), e = i.cssHooks[t] || i.cssHooks[o], e && "get" in e && (f = e.get(n, !0, r)), void 0 === f && (f = rt(n, t, u)), "normal" === f && t in kr && (f = kr[t]), "" === r || r ? (s = parseFloat(f), r === !0 || i.isNumeric(s) ? s || 0 : f) : f;
    } });
    i.each(["height", "width"], function (n, t) {
        i.cssHooks[t] = { get: function (n, r, u) {
            if (r)
                return gf.test(i.css(n, "display")) && 0 === n.offsetWidth ? i.swap(n, ie, function () {
                    return iu(n, t, u);
                }) : iu(n, t, u);
        }, set: function (n, r, u) {
            var f = u && yt(n);
            return nu(n, r, u ? tu(n, t, u, "border-box" === i.css(n, "boxSizing", !1, f), f) : 0);
        } };
    });
    i.cssHooks.marginRight = br(f.reliableMarginRight, function (n, t) {
        if (t)
            return i.swap(n, { display: "inline-block" }, rt, [n, "marginRight"]);
    });
    i.each({ margin: "", padding: "", border: "Width" }, function (n, t) {
        i.cssHooks[n + t] = { expand: function (i) {
            for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++)
                f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
            return f;
        } };
        wr.test(n) || (i.cssHooks[n + t].set = nu);
    });
    i.fn.extend({ css: function (n, t) {
        return l(this, function (n, t, r) {
            var f, e, o = {}, u = 0;
            if (i.isArray(t)) {
                for (f = yt(n), e = t.length; e > u; u++)
                    o[t[u]] = i.css(n, t[u], !1, f);
                return o;
            }
            return void 0 !== r ? i.style(n, t, r) : i.css(n, t);
        }, n, t, arguments.length > 1);
    }, show: function () {
        return ru(this, !0);
    }, hide: function () {
        return ru(this);
    }, toggle: function (n) {
        return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function () {
            it(this) ? i(this).show() : i(this).hide();
        });
    } });
    i.Tween = s;
    s.prototype = { constructor: s, init: function (n, t, r, u, f, e) {
        this.elem = n;
        this.prop = r;
        this.easing = f || "swing";
        this.options = t;
        this.start = this.now = this.cur();
        this.end = u;
        this.unit = e || (i.cssNumber[r] ? "" : "px");
    }, cur: function () {
        var n = s.propHooks[this.prop];
        return n && n.get ? n.get(this) : s.propHooks._default.get(this);
    }, run: function (n) {
        var r, t = s.propHooks[this.prop];
        return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n, this.now = (this.end - this.start) * r + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : s.propHooks._default.set(this), this;
    } };
    s.prototype.init.prototype = s.prototype;
    s.propHooks = { _default: { get: function (n) {
        var t;
        return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0) : n.elem[n.prop];
    }, set: function (n) {
        i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now;
    } } };
    s.propHooks.scrollTop = s.propHooks.scrollLeft = { set: function (n) {
        n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now);
    } };
    i.easing = { linear: function (n) {
        return n;
    }, swing: function (n) {
        return .5 - Math.cos(n * Math.PI) / 2;
    } };
    i.fx = s.prototype.init;
    i.fx.step = {};
    var nt, pt, re = /^(?:toggle|show|hide)$/, uu = new RegExp("^(?:([+-])=|)(" + lt + ")([a-z%]*)$", "i"), ue = /queueHooks$/, wt = [fe], ut = { "*": [function (n, t) {
        var f = this.createTween(n, t), s = f.cur(), r = uu.exec(t), e = r && r[3] || (i.cssNumber[n] ? "" : "px"), u = (i.cssNumber[n] || "px" !== e && +s) && uu.exec(i.css(f.elem, n)), o = 1, h = 20;
        if (u && u[3] !== e) {
            e = e || u[3];
            r = r || [];
            u = +s || 1;
            do
                o = o || ".5", u /= o, i.style(f.elem, n, u + e);
            while (o !== (o = f.cur() / s) && 1 !== o && --h);
        }
        return r && (u = f.start = +u || +s || 0, f.unit = e, f.end = r[1] ? u + (r[1] + 1) * r[2] : +r[2]), f;
    }] };
    i.Animation = i.extend(ou, { tweener: function (n, t) {
        i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
        for (var r, u = 0, f = n.length; f > u; u++)
            r = n[u], ut[r] = ut[r] || [], ut[r].unshift(t);
    }, prefilter: function (n, t) {
        t ? wt.unshift(n) : wt.push(n);
    } });
    i.speed = function (n, t, r) {
        var u = n && "object" == typeof n ? i.extend({}, n) : { complete: r || !r && t || i.isFunction(n) && n, duration: n, easing: r && t || t && !i.isFunction(t) && t };
        return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (null == u.queue || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function () {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue);
        }, u;
    };
    i.fn.extend({ fadeTo: function (n, t, i, r) {
        return this.filter(it).css("opacity", 0).show().end().animate({ opacity: t }, n, i, r);
    }, animate: function (n, t, u, f) {
        var s = i.isEmptyObject(n), o = i.speed(t, u, f), e = function () {
            var t = ou(this, i.extend({}, n), o);
            (s || r.get(this, "finish")) && t.stop(!0);
        };
        return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e);
    }, stop: function (n, t, u) {
        var f = function (n) {
            var t = n.stop;
            delete n.stop;
            t(u);
        };
        return "string" != typeof n && (u = t, t = n, n = void 0), t && n !== !1 && this.queue(n || "fx", []), this.each(function () {
            var s = !0, t = null != n && n + "queueHooks", o = i.timers, e = r.get(this);
            if (t)
                e[t] && e[t].stop && f(e[t]);
            else
                for (t in e)
                    e[t] && e[t].stop && ue.test(t) && f(e[t]);
            for (t = o.length; t--;)
                o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
            (s || !u) && i.dequeue(this, n);
        });
    }, finish: function (n) {
        return n !== !1 && (n = n || "fx"), this.each(function () {
            var t, e = r.get(this), u = e[n + "queue"], o = e[n + "queueHooks"], f = i.timers, s = u ? u.length : 0;
            for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;)
                f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
            for (t = 0; s > t; t++)
                u[t] && u[t].finish && u[t].finish.call(this);
            delete e.finish;
        });
    } });
    i.each(["toggle", "show", "hide"], function (n, t) {
        var r = i.fn[t];
        i.fn[t] = function (n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(bt(t, !0), n, i, u);
        };
    });
    i.each({ slideDown: bt("show"), slideUp: bt("hide"), slideToggle: bt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (n, t) {
        i.fn[n] = function (n, i, r) {
            return this.animate(t, n, i, r);
        };
    });
    i.timers = [];
    i.fx.tick = function () {
        var r, n = 0, t = i.timers;
        for (nt = i.now(); n < t.length; n++)
            r = t[n], r() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        nt = void 0;
    };
    i.fx.timer = function (n) {
        i.timers.push(n);
        n() ? i.fx.start() : i.timers.pop();
    };
    i.fx.interval = 13;
    i.fx.start = function () {
        pt || (pt = setInterval(i.fx.tick, i.fx.interval));
    };
    i.fx.stop = function () {
        clearInterval(pt);
        pt = null;
    };
    i.fx.speeds = { slow: 600, fast: 200, _default: 400 };
    i.fn.delay = function (n, t) {
        return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function (t, i) {
            var r = setTimeout(t, n);
            i.stop = function () {
                clearTimeout(r);
            };
        });
    }, function () {
        var n = u.createElement("input"), t = u.createElement("select"), i = t.appendChild(u.createElement("option"));
        n.type = "checkbox";
        f.checkOn = "" !== n.value;
        f.optSelected = i.selected;
        t.disabled = !0;
        f.optDisabled = !i.disabled;
        n = u.createElement("input");
        n.value = "t";
        n.type = "radio";
        f.radioValue = "t" === n.value;
    }();
    tt = i.expr.attrHandle;
    i.fn.extend({ attr: function (n, t) {
        return l(this, i.attr, n, t, arguments.length > 1);
    }, removeAttr: function (n) {
        return this.each(function () {
            i.removeAttr(this, n);
        });
    } });
    i.extend({ attr: function (n, t, r) {
        var u, f, e = n.nodeType;
        if (n && 3 !== e && 8 !== e && 2 !== e)
            return typeof n.getAttribute === d ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (t = t.toLowerCase(), u = i.attrHooks[t] || (i.expr.match.bool.test(t) ? su : oe)), void 0 === r ? u && "get" in u && null !== (f = u.get(n, t)) ? f : (f = i.find.attr(n, t), null == f ? void 0 : f) : null !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""), r) : void i.removeAttr(n, t));
    }, removeAttr: function (n, t) {
        var r, u, e = 0, f = t && t.match(c);
        if (f && 1 === n.nodeType)
            while (r = f[e++])
                u = i.propFix[r] || r, i.expr.match.bool.test(r) && (n[u] = !1), n.removeAttribute(r);
    }, attrHooks: { type: { set: function (n, t) {
        if (!f.radioValue && "radio" === t && i.nodeName(n, "input")) {
            var r = n.value;
            return n.setAttribute("type", t), r && (n.value = r), t;
        }
    } } } });
    su = { set: function (n, t, r) {
        return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r;
    } };
    i.each(i.expr.match.bool.source.match(/\w+/g), function (n, t) {
        var r = tt[t] || i.find.attr;
        tt[t] = function (n, t, i) {
            var u, f;
            return i || (f = tt[t], tt[t] = u, u = null != r(n, t, i) ? t.toLowerCase() : null, tt[t] = f), u;
        };
    });
    hu = /^(?:input|select|textarea|button)$/i;
    i.fn.extend({ prop: function (n, t) {
        return l(this, i.prop, n, t, arguments.length > 1);
    }, removeProp: function (n) {
        return this.each(function () {
            delete this[i.propFix[n] || n];
        });
    } });
    i.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function (n, t, r) {
        var f, u, o, e = n.nodeType;
        if (n && 3 !== e && 8 !== e && 2 !== e)
            return o = 1 !== e || !i.isXMLDoc(n), o && (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t];
    }, propHooks: { tabIndex: { get: function (n) {
        return n.hasAttribute("tabindex") || hu.test(n.nodeName) || n.href ? n.tabIndex : -1;
    } } } });
    f.optSelected || (i.propHooks.selected = { get: function (n) {
        var t = n.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
    } });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        i.propFix[this.toLowerCase()] = this;
    });
    kt = /[\t\r\n\f]/g;
    i.fn.extend({ addClass: function (n) {
        var o, t, r, u, s, f, h = "string" == typeof n && n, e = 0, l = this.length;
        if (i.isFunction(n))
            return this.each(function (t) {
                i(this).addClass(n.call(this, t, this.className));
            });
        if (h)
            for (o = (n || "").match(c) || []; l > e; e++)
                if (t = this[e], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(kt, " ") : " ")) {
                    for (s = 0; u = o[s++];)
                        r.indexOf(" " + u + " ") < 0 && (r += u + " ");
                    f = i.trim(r);
                    t.className !== f && (t.className = f);
                }
        return this;
    }, removeClass: function (n) {
        var o, t, r, u, s, f, h = 0 === arguments.length || "string" == typeof n && n, e = 0, l = this.length;
        if (i.isFunction(n))
            return this.each(function (t) {
                i(this).removeClass(n.call(this, t, this.className));
            });
        if (h)
            for (o = (n || "").match(c) || []; l > e; e++)
                if (t = this[e], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(kt, " ") : "")) {
                    for (s = 0; u = o[s++];)
                        while (r.indexOf(" " + u + " ") >= 0)
                            r = r.replace(" " + u + " ", " ");
                    f = n ? i.trim(r) : "";
                    t.className !== f && (t.className = f);
                }
        return this;
    }, toggleClass: function (n, t) {
        var u = typeof n;
        return "boolean" == typeof t && "string" === u ? t ? this.addClass(n) : this.removeClass(n) : this.each(i.isFunction(n) ? function (r) {
            i(this).toggleClass(n.call(this, r, this.className, t), t);
        } : function () {
            if ("string" === u)
                for (var t, e = 0, f = i(this), o = n.match(c) || []; t = o[e++];)
                    f.hasClass(t) ? f.removeClass(t) : f.addClass(t);
            else
                (u === d || "boolean" === u) && (this.className && r.set(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : r.get(this, "__className__") || "");
        });
    }, hasClass: function (n) {
        for (var i = " " + n + " ", t = 0, r = this.length; r > t; t++)
            if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(kt, " ").indexOf(i) >= 0)
                return !0;
        return !1;
    } });
    cu = /\r/g;
    i.fn.extend({ val: function (n) {
        var t, r, f, u = this[0];
        return arguments.length ? (f = i.isFunction(n), this.each(function (r) {
            var u;
            1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n, null == u ? u = "" : "number" == typeof u ? u += "" : i.isArray(u) && (u = i.map(u, function (n) {
                return null == n ? "" : n + "";
            })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u));
        })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(u, "value")) ? r : (r = u.value, "string" == typeof r ? r.replace(cu, "") : null == r ? "" : r)) : void 0;
    } });
    i.extend({ valHooks: { option: { get: function (n) {
        var t = i.find.attr(n, "value");
        return null != t ? t : i.trim(i.text(n));
    } }, select: { get: function (n) {
        for (var o, t, s = n.options, r = n.selectedIndex, u = "select-one" === n.type || 0 > r, h = u ? null : [], c = u ? r + 1 : s.length, e = 0 > r ? c : u ? r : 0; c > e; e++)
            if (t = s[e], !(!t.selected && e !== r || (f.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) {
                if (o = i(t).val(), u)
                    return o;
                h.push(o);
            }
        return h;
    }, set: function (n, t) {
        for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--;)
            r = f[o], (r.selected = i.inArray(r.value, e) >= 0) && (u = !0);
        return u || (n.selectedIndex = -1), e;
    } } } });
    i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = { set: function (n, t) {
            if (i.isArray(t))
                return n.checked = i.inArray(i(n).val(), t) >= 0;
        } };
        f.checkOn || (i.valHooks[this].get = function (n) {
            return null === n.getAttribute("value") ? "on" : n.value;
        });
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (n, t) {
        i.fn[t] = function (n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t);
        };
    });
    i.fn.extend({ hover: function (n, t) {
        return this.mouseenter(n).mouseleave(t || n);
    }, bind: function (n, t, i) {
        return this.on(n, null, t, i);
    }, unbind: function (n, t) {
        return this.off(n, null, t);
    }, delegate: function (n, t, i, r) {
        return this.on(t, n, i, r);
    }, undelegate: function (n, t, i) {
        return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i);
    } });
    dt = i.now();
    gt = /\?/;
    i.parseJSON = function (n) {
        return JSON.parse(n + "");
    };
    i.parseXML = function (n) {
        var t, r;
        if (!n || "string" != typeof n)
            return null;
        try {
            r = new DOMParser;
            t = r.parseFromString(n, "text/xml");
        }
        catch (u) {
            t = void 0;
        }
        return (!t || t.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + n), t;
    };
    var b, v, se = /#.*$/, lu = /([?&])_=[^&]*/, he = /^(.*?):[ \t]*([^\r\n]*)$/gm, ce = /^(?:GET|HEAD)$/, le = /^\/\//, au = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, vu = {}, li = {}, yu = "*/".concat("*");
    try {
        v = location.href;
    }
    catch (ge) {
        v = u.createElement("a");
        v.href = "";
        v = v.href;
    }
    b = au.exec(v.toLowerCase()) || [];
    i.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: v, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(b[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": yu, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": i.parseJSON, "text xml": i.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (n, t) {
        return t ? ai(ai(n, i.ajaxSettings), t) : ai(i.ajaxSettings, n);
    }, ajaxPrefilter: pu(vu), ajaxTransport: pu(li), ajax: function (n, t) {
        function w(n, t, s, h) {
            var v, it, b, y, w, c = t;
            2 !== e && (e = 2, d && clearTimeout(d), l = void 0, k = h || "", u.readyState = n > 0 ? 4 : 0, v = n >= 200 && 300 > n || 304 === n, s && (y = ae(r, u, s)), y = ve(r, y, u, v), v ? (r.ifModified && (w = u.getResponseHeader("Last-Modified"), w && (i.lastModified[f] = w), w = u.getResponseHeader("etag"), w && (i.etag[f] = w)), 204 === n || "HEAD" === r.type ? c = "nocontent" : 304 === n ? c = "notmodified" : (c = y.state, it = y.data, b = y.error, v = !b)) : (b = c, (n || !c) && (c = "error", 0 > n && (n = 0))), u.status = n, u.statusText = (t || c) + "", v ? nt.resolveWith(o, [it, c, u]) : nt.rejectWith(o, [u, c, b]), u.statusCode(p), p = void 0, a && g.trigger(v ? "ajaxSuccess" : "ajaxError", [u, r, v ? it : b]), tt.fireWith(o, [u, c]), a && (g.trigger("ajaxComplete", [u, r]), --i.active || i.event.trigger("ajaxStop")));
        }
        "object" == typeof n && (t = n, n = void 0);
        t = t || {};
        var l, f, k, y, d, s, a, h, r = i.ajaxSetup({}, t), o = r.context || r, g = r.context && (o.nodeType || o.jquery) ? i(o) : i.event, nt = i.Deferred(), tt = i.Callbacks("once memory"), p = r.statusCode || {}, it = {}, rt = {}, e = 0, ut = "canceled", u = { readyState: 0, getResponseHeader: function (n) {
            var t;
            if (2 === e) {
                if (!y)
                    for (y = {}; t = he.exec(k);)
                        y[t[1].toLowerCase()] = t[2];
                t = y[n.toLowerCase()];
            }
            return null == t ? null : t;
        }, getAllResponseHeaders: function () {
            return 2 === e ? k : null;
        }, setRequestHeader: function (n, t) {
            var i = n.toLowerCase();
            return e || (n = rt[i] = rt[i] || n, it[n] = t), this;
        }, overrideMimeType: function (n) {
            return e || (r.mimeType = n), this;
        }, statusCode: function (n) {
            var t;
            if (n)
                if (2 > e)
                    for (t in n)
                        p[t] = [p[t], n[t]];
                else
                    u.always(n[u.status]);
            return this;
        }, abort: function (n) {
            var t = n || ut;
            return l && l.abort(t), w(0, t), this;
        } };
        if (nt.promise(u).complete = tt.add, u.success = u.done, u.error = u.fail, r.url = ((n || r.url || v) + "").replace(se, "").replace(le, b[1] + "//"), r.type = t.method || t.type || r.method || r.type, r.dataTypes = i.trim(r.dataType || "*").toLowerCase().match(c) || [""], null == r.crossDomain && (s = au.exec(r.url.toLowerCase()), r.crossDomain = !(!s || s[1] === b[1] && s[2] === b[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (b[3] || ("http:" === b[1] ? "80" : "443")))), r.data && r.processData && "string" != typeof r.data && (r.data = i.param(r.data, r.traditional)), wu(vu, r, t, u), 2 === e)
            return u;
        a = r.global;
        a && 0 == i.active++ && i.event.trigger("ajaxStart");
        r.type = r.type.toUpperCase();
        r.hasContent = !ce.test(r.type);
        f = r.url;
        r.hasContent || (r.data && (f = r.url += (gt.test(f) ? "&" : "?") + r.data, delete r.data), r.cache === !1 && (r.url = lu.test(f) ? f.replace(lu, "$1_=" + dt++) : f + (gt.test(f) ? "&" : "?") + "_=" + dt++));
        r.ifModified && (i.lastModified[f] && u.setRequestHeader("If-Modified-Since", i.lastModified[f]), i.etag[f] && u.setRequestHeader("If-None-Match", i.etag[f]));
        (r.data && r.hasContent && r.contentType !== !1 || t.contentType) && u.setRequestHeader("Content-Type", r.contentType);
        u.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + yu + "; q=0.01" : "") : r.accepts["*"]);
        for (h in r.headers)
            u.setRequestHeader(h, r.headers[h]);
        if (r.beforeSend && (r.beforeSend.call(o, u, r) === !1 || 2 === e))
            return u.abort();
        ut = "abort";
        for (h in { success: 1, error: 1, complete: 1 })
            u[h](r[h]);
        if (l = wu(li, r, t, u)) {
            u.readyState = 1;
            a && g.trigger("ajaxSend", [u, r]);
            r.async && r.timeout > 0 && (d = setTimeout(function () {
                u.abort("timeout");
            }, r.timeout));
            try {
                e = 1;
                l.send(it, w);
            }
            catch (ft) {
                if (!(2 > e))
                    throw ft;
                w(-1, ft);
            }
        }
        else
            w(-1, "No Transport");
        return u;
    }, getJSON: function (n, t, r) {
        return i.get(n, t, r, "json");
    }, getScript: function (n, t) {
        return i.get(n, void 0, t, "script");
    } });
    i.each(["get", "post"], function (n, t) {
        i[t] = function (n, r, u, f) {
            return i.isFunction(r) && (f = f || u, u = r, r = void 0), i.ajax({ url: n, type: t, dataType: f, data: r, success: u });
        };
    });
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (n, t) {
        i.fn[t] = function (n) {
            return this.on(t, n);
        };
    });
    i._evalUrl = function (n) {
        return i.ajax({ url: n, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
    };
    i.fn.extend({ wrapAll: function (n) {
        var t;
        return i.isFunction(n) ? this.each(function (t) {
            i(this).wrapAll(n.call(this, t));
        }) : (this[0] && (t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
            for (var n = this; n.firstElementChild;)
                n = n.firstElementChild;
            return n;
        }).append(this)), this);
    }, wrapInner: function (n) {
        return this.each(i.isFunction(n) ? function (t) {
            i(this).wrapInner(n.call(this, t));
        } : function () {
            var t = i(this), r = t.contents();
            r.length ? r.wrapAll(n) : t.append(n);
        });
    }, wrap: function (n) {
        var t = i.isFunction(n);
        return this.each(function (r) {
            i(this).wrapAll(t ? n.call(this, r) : n);
        });
    }, unwrap: function () {
        return this.parent().each(function () {
            i.nodeName(this, "body") || i(this).replaceWith(this.childNodes);
        }).end();
    } });
    i.expr.filters.hidden = function (n) {
        return n.offsetWidth <= 0 && n.offsetHeight <= 0;
    };
    i.expr.filters.visible = function (n) {
        return !i.expr.filters.hidden(n);
    };
    var ye = /%20/g, pe = /\[\]$/, bu = /\r?\n/g, we = /^(?:submit|button|image|reset|file)$/i, be = /^(?:input|select|textarea|keygen)/i;
    i.param = function (n, t) {
        var r, u = [], f = function (n, t) {
            t = i.isFunction(t) ? t() : null == t ? "" : t;
            u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t);
        };
        if (void 0 === t && (t = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n))
            i.each(n, function () {
                f(this.name, this.value);
            });
        else
            for (r in n)
                vi(r, n[r], t, f);
        return u.join("&").replace(ye, "+");
    };
    i.fn.extend({ serialize: function () {
        return i.param(this.serializeArray());
    }, serializeArray: function () {
        return this.map(function () {
            var n = i.prop(this, "elements");
            return n ? i.makeArray(n) : this;
        }).filter(function () {
            var n = this.type;
            return this.name && !i(this).is(":disabled") && be.test(this.nodeName) && !we.test(n) && (this.checked || !er.test(n));
        }).map(function (n, t) {
            var r = i(this).val();
            return null == r ? null : i.isArray(r) ? i.map(r, function (n) {
                return { name: t.name, value: n.replace(bu, "\r\n") };
            }) : { name: t.name, value: r.replace(bu, "\r\n") };
        }).get();
    } });
    i.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest;
        }
        catch (n) {
        }
    };
    var ke = 0, ni = {}, de = { 0: 200, 1223: 204 }, ft = i.ajaxSettings.xhr();
    return n.ActiveXObject && i(n).on("unload", function () {
        for (var n in ni)
            ni[n]();
    }), f.cors = !!ft && "withCredentials" in ft, f.ajax = ft = !!ft, i.ajaxTransport(function (n) {
        var t;
        if (f.cors || ft && !n.crossDomain)
            return { send: function (i, r) {
                var f, u = n.xhr(), e = ++ke;
                if (u.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields)
                    for (f in n.xhrFields)
                        u[f] = n.xhrFields[f];
                n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType);
                n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (f in i)
                    u.setRequestHeader(f, i[f]);
                t = function (n) {
                    return function () {
                        t && (delete ni[e], t = u.onload = u.onerror = null, "abort" === n ? u.abort() : "error" === n ? r(u.status, u.statusText) : r(de[u.status] || u.status, u.statusText, "string" == typeof u.responseText ? { text: u.responseText } : void 0, u.getAllResponseHeaders()));
                    };
                };
                u.onload = t();
                u.onerror = t("error");
                t = ni[e] = t("abort");
                try {
                    u.send(n.hasContent && n.data || null);
                }
                catch (o) {
                    if (t)
                        throw o;
                }
            }, abort: function () {
                t && t();
            } };
    }), i.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (n) {
        return i.globalEval(n), n;
    } } }), i.ajaxPrefilter("script", function (n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET");
    }), i.ajaxTransport("script", function (n) {
        if (n.crossDomain) {
            var r, t;
            return { send: function (f, e) {
                r = i("<script>").prop({ async: !0, charset: n.scriptCharset, src: n.url }).on("load error", t = function (n) {
                    r.remove();
                    t = null;
                    n && e("error" === n.type ? 404 : 200, n.type);
                });
                u.head.appendChild(r[0]);
            }, abort: function () {
                t && t();
            } };
        }
    }), yi = [], ti = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({ jsonp: "callback", jsonpCallback: function () {
        var n = yi.pop() || i.expando + "_" + dt++;
        return this[n] = !0, n;
    } }), i.ajaxPrefilter("json jsonp", function (t, r, u) {
        var f, o, e, s = t.jsonp !== !1 && (ti.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ti.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return (f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ti, "$1" + f) : t.jsonp !== !1 && (t.url += (gt.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function () {
                return e || i.error(f + " was not called"), e[0];
            }, t.dataTypes[0] = "json", o = n[f], n[f] = function () {
                e = arguments;
            }, u.always(function () {
                n[f] = o;
                t[f] && (t.jsonpCallback = r.jsonpCallback, yi.push(f));
                e && i.isFunction(o) && o(e[0]);
                e = o = void 0;
            }), "script");
    }), i.parseHTML = function (n, t, r) {
        if (!n || "string" != typeof n)
            return null;
        "boolean" == typeof t && (r = t, t = !1);
        t = t || u;
        var f = gi.exec(n), e = !r && [];
        return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && e.length && i(e).remove(), i.merge([], f.childNodes));
    }, pi = i.fn.load, i.fn.load = function (n, t, r) {
        if ("string" != typeof n && pi)
            return pi.apply(this, arguments);
        var u, o, s, f = this, e = n.indexOf(" ");
        return e >= 0 && (u = i.trim(n.slice(e)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (o = "POST"), f.length > 0 && i.ajax({ url: n, type: o, dataType: "html", data: t }).done(function (n) {
            s = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n);
        }).complete(r && function (n, t) {
            f.each(r, s || [n.responseText, t, n]);
        }), this;
    }, i.expr.filters.animated = function (n) {
        return i.grep(i.timers, function (t) {
            return n === t.elem;
        }).length;
    }, wi = n.document.documentElement, i.offset = { setOffset: function (n, t, r) {
        var e, o, s, h, u, c, v, l = i.css(n, "position"), a = i(n), f = {};
        "static" === l && (n.style.position = "relative");
        u = a.offset();
        s = i.css(n, "top");
        c = i.css(n, "left");
        v = ("absolute" === l || "fixed" === l) && (s + c).indexOf("auto") > -1;
        v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
        i.isFunction(t) && (t = t.call(n, r, u));
        null != t.top && (f.top = t.top - u.top + h);
        null != t.left && (f.left = t.left - u.left + o);
        "using" in t ? t.using.call(n, f) : a.css(f);
    } }, i.fn.extend({ offset: function (n) {
        if (arguments.length)
            return void 0 === n ? this : this.each(function (t) {
                i.offset.setOffset(this, n, t);
            });
        var r, f, t = this[0], u = { top: 0, left: 0 }, e = t && t.ownerDocument;
        if (e)
            return r = e.documentElement, i.contains(r, t) ? (typeof t.getBoundingClientRect !== d && (u = t.getBoundingClientRect()), f = ku(e), { top: u.top + f.pageYOffset - r.clientTop, left: u.left + f.pageXOffset - r.clientLeft }) : u;
    }, position: function () {
        if (this[0]) {
            var n, r, u = this[0], t = { top: 0, left: 0 };
            return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), { top: r.top - t.top - i.css(u, "marginTop", !0), left: r.left - t.left - i.css(u, "marginLeft", !0) };
        }
    }, offsetParent: function () {
        return this.map(function () {
            for (var n = this.offsetParent || wi; n && !i.nodeName(n, "html") && "static" === i.css(n, "position");)
                n = n.offsetParent;
            return n || wi;
        });
    } }), i.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, r) {
        var u = "pageYOffset" === r;
        i.fn[t] = function (i) {
            return l(this, function (t, i, f) {
                var e = ku(t);
                return void 0 === f ? e ? e[r] : t[i] : void (e ? e.scrollTo(u ? n.pageXOffset : f, u ? f : n.pageYOffset) : t[i] = f);
            }, t, i, arguments.length, null);
        };
    }), i.each(["top", "left"], function (n, t) {
        i.cssHooks[t] = br(f.pixelPosition, function (n, r) {
            if (r)
                return (r = rt(n, t), ci.test(r) ? i(n).position()[t] + "px" : r);
        });
    }), i.each({ Height: "height", Width: "width" }, function (n, t) {
        i.each({ padding: "inner" + n, content: t, "": "outer" + n }, function (r, u) {
            i.fn[u] = function (u, f) {
                var e = arguments.length && (r || "boolean" != typeof u), o = r || (u === !0 || f === !0 ? "margin" : "border");
                return l(this, function (t, r, u) {
                    var f;
                    return i.isWindow(t) ? t.document.documentElement["client" + n] : 9 === t.nodeType ? (f = t.documentElement, Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : void 0 === u ? i.css(t, r, o) : i.style(t, r, u, o);
                }, t, e ? u : void 0, e, null);
            };
        });
    }), i.fn.size = function () {
        return this.length;
    }, i.fn.andSelf = i.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return i;
    }), du = n.jQuery, gu = n.$, i.noConflict = function (t) {
        return n.$ === i && (n.$ = gu), t && n.jQuery === i && (n.jQuery = du), i;
    }, typeof t === d && (n.jQuery = n.$ = i), i;
}), function (n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : n(jQuery);
}(function (n) {
    function h(t, i) {
        var r, u, f, e = t.nodeName.toLowerCase();
        return "area" === e ? (r = t.parentNode, u = r.name, t.href && u && "map" === r.nodeName.toLowerCase() ? (f = n("img[usemap='#" + u + "']")[0], !!f && c(f)) : !1) : (/input|select|textarea|button|object/.test(e) ? !t.disabled : "a" === e ? t.href || i : i) && c(t);
    }
    function c(t) {
        return n.expr.filters.visible(t) && !n(t).parents().addBack().filter(function () {
            return "hidden" === n.css(this, "visibility");
        }).length;
    }
    function k(n) {
        for (var t, i; n.length && n[0] !== document;) {
            if (t = n.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(n.css("zIndex"), 10), !isNaN(i) && 0 !== i))
                return i;
            n = n.parent();
        }
        return 0;
    }
    function l() {
        this._curInst = null;
        this._keyEvent = !1;
        this._disabledInputs = [];
        this._datepickerShowing = !1;
        this._inDialog = !1;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" };
        this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 };
        n.extend(this._defaults, this.regional[""]);
        this.regional.en = n.extend(!0, {}, this.regional[""]);
        this.regional["en-US"] = n.extend(!0, {}, this.regional.en);
        this.dpDiv = a(n("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>"));
    }
    function a(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(i, "mouseout", function () {
            n(this).removeClass("ui-state-hover");
            -1 !== this.className.indexOf("ui-datepicker-prev") && n(this).removeClass("ui-datepicker-prev-hover");
            -1 !== this.className.indexOf("ui-datepicker-next") && n(this).removeClass("ui-datepicker-next-hover");
        }).delegate(i, "mouseover", v);
    }
    function v() {
        n.datepicker._isDisabledDatepicker(u.inline ? u.dpDiv.parent()[0] : u.input[0]) || (n(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), n(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && n(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && n(this).addClass("ui-datepicker-next-hover"));
    }
    function r(t, i) {
        n.extend(t, i);
        for (var r in i)
            null == i[r] && (t[r] = i[r]);
        return t;
    }
    function t(n) {
        return function () {
            var t = this.element.val();
            n.apply(this, arguments);
            this._refresh();
            t !== this.element.val() && this._trigger("change");
        };
    }
    var y, f, i, u, o, s;
    n.ui = n.ui || {};
    n.extend(n.ui, { version: "1.11.1", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } });
    n.fn.extend({ scrollParent: function (t) {
        var i = this.css("position"), u = "absolute" === i, f = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/, r = this.parents().filter(function () {
            var t = n(this);
            return u && "static" === t.css("position") ? !1 : f.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"));
        }).eq(0);
        return "fixed" !== i && r.length ? r : n(this[0].ownerDocument || document);
    }, uniqueId: function () {
        var n = 0;
        return function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++n);
            });
        };
    }(), removeUniqueId: function () {
        return this.each(function () {
            /^ui-id-\d+$/.test(this.id) && n(this).removeAttr("id");
        });
    } });
    n.extend(n.expr[":"], { data: n.expr.createPseudo ? n.expr.createPseudo(function (t) {
        return function (i) {
            return !!n.data(i, t);
        };
    }) : function (t, i, r) {
        return !!n.data(t, r[3]);
    }, focusable: function (t) {
        return h(t, !isNaN(n.attr(t, "tabindex")));
    }, tabbable: function (t) {
        var i = n.attr(t, "tabindex"), r = isNaN(i);
        return (r || i >= 0) && h(t, !r);
    } });
    n("<a>").outerWidth(1).jquery || n.each(["Width", "Height"], function (t, i) {
        function r(t, i, r, u) {
            return n.each(e, function () {
                i -= parseFloat(n.css(t, "padding" + this)) || 0;
                r && (i -= parseFloat(n.css(t, "border" + this + "Width")) || 0);
                u && (i -= parseFloat(n.css(t, "margin" + this)) || 0);
            }), i;
        }
        var e = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], u = i.toLowerCase(), f = { innerWidth: n.fn.innerWidth, innerHeight: n.fn.innerHeight, outerWidth: n.fn.outerWidth, outerHeight: n.fn.outerHeight };
        n.fn["inner" + i] = function (t) {
            return void 0 === t ? f["inner" + i].call(this) : this.each(function () {
                n(this).css(u, r(this, t) + "px");
            });
        };
        n.fn["outer" + i] = function (t, e) {
            return "number" != typeof t ? f["outer" + i].call(this, t) : this.each(function () {
                n(this).css(u, r(this, t, !0, e) + "px");
            });
        };
    });
    n.fn.addBack || (n.fn.addBack = function (n) {
        return this.add(null == n ? this.prevObject : this.prevObject.filter(n));
    });
    n("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (n.fn.removeData = function (t) {
        return function (i) {
            return arguments.length ? t.call(this, n.camelCase(i)) : t.call(this);
        };
    }(n.fn.removeData));
    n.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    n.fn.extend({ focus: function (t) {
        return function (i, r) {
            return "number" == typeof i ? this.each(function () {
                var t = this;
                setTimeout(function () {
                    n(t).focus();
                    r && r.call(t);
                }, i);
            }) : t.apply(this, arguments);
        };
    }(n.fn.focus), disableSelection: function () {
        var n = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
        return function () {
            return this.bind(n + ".ui-disableSelection", function (n) {
                n.preventDefault();
            });
        };
    }(), enableSelection: function () {
        return this.unbind(".ui-disableSelection");
    }, zIndex: function (t) {
        if (void 0 !== t)
            return this.css("zIndex", t);
        if (this.length)
            for (var r, u, i = n(this[0]); i.length && i[0] !== document;) {
                if (r = i.css("position"), ("absolute" === r || "relative" === r || "fixed" === r) && (u = parseInt(i.css("zIndex"), 10), !isNaN(u) && 0 !== u))
                    return u;
                i = i.parent();
            }
        return 0;
    } });
    n.ui.plugin = { add: function (t, i, r) {
        var u, f = n.ui[t].prototype;
        for (u in r)
            f.plugins[u] = f.plugins[u] || [], f.plugins[u].push([i, r[u]]);
    }, call: function (n, t, i, r) {
        var u, f = n.plugins[t];
        if (f && (r || n.element[0].parentNode && 11 !== n.element[0].parentNode.nodeType))
            for (u = 0; f.length > u; u++)
                n.options[f[u][0]] && f[u][1].apply(n.element, i);
    } };
    y = 0;
    f = Array.prototype.slice;
    n.cleanData = function (t) {
        return function (i) {
            for (var r, u, f = 0; null != (u = i[f]); f++)
                try {
                    r = n._data(u, "events");
                    r && r.remove && n(u).triggerHandler("remove");
                }
                catch (e) {
                }
            t(i);
        };
    }(n.cleanData);
    n.widget = function (t, i, r) {
        var s, f, u, o, h = {}, e = t.split(".")[0];
        return t = t.split(".")[1], s = e + "-" + t, r || (r = i, i = n.Widget), n.expr[":"][s.toLowerCase()] = function (t) {
            return !!n.data(t, s);
        }, n[e] = n[e] || {}, f = n[e][t], u = n[e][t] = function (n, t) {
            return this._createWidget ? (arguments.length && this._createWidget(n, t), void 0) : new u(n, t);
        }, n.extend(u, f, { version: r.version, _proto: n.extend({}, r), _childConstructors: [] }), o = new i, o.options = n.widget.extend({}, o.options), n.each(r, function (t, r) {
            return n.isFunction(r) ? (h[t] = function () {
                var n = function () {
                    return i.prototype[t].apply(this, arguments);
                }, u = function (n) {
                    return i.prototype[t].apply(this, n);
                };
                return function () {
                    var t, i = this._super, f = this._superApply;
                    return this._super = n, this._superApply = u, t = r.apply(this, arguments), this._super = i, this._superApply = f, t;
                };
            }(), void 0) : (h[t] = r, void 0);
        }), u.prototype = n.widget.extend(o, { widgetEventPrefix: f ? o.widgetEventPrefix || t : t }, h, { constructor: u, namespace: e, widgetName: t, widgetFullName: s }), f ? (n.each(f._childConstructors, function (t, i) {
            var r = i.prototype;
            n.widget(r.namespace + "." + r.widgetName, u, i._proto);
        }), delete f._childConstructors) : i._childConstructors.push(u), n.widget.bridge(t, u), u;
    };
    n.widget.extend = function (t) {
        for (var i, r, e = f.call(arguments, 1), u = 0, o = e.length; o > u; u++)
            for (i in e[u])
                r = e[u][i], e[u].hasOwnProperty(i) && void 0 !== r && (t[i] = n.isPlainObject(r) ? n.isPlainObject(t[i]) ? n.widget.extend({}, t[i], r) : n.widget.extend({}, r) : r);
        return t;
    };
    n.widget.bridge = function (t, i) {
        var r = i.prototype.widgetFullName || t;
        n.fn[t] = function (u) {
            var s = "string" == typeof u, o = f.call(arguments, 1), e = this;
            return u = !s && o.length ? n.widget.extend.apply(null, [u].concat(o)) : u, s ? this.each(function () {
                var i, f = n.data(this, r);
                return "instance" === u ? (e = f, !1) : f ? n.isFunction(f[u]) && "_" !== u.charAt(0) ? (i = f[u].apply(f, o), i !== f && void 0 !== i ? (e = i && i.jquery ? e.pushStack(i.get()) : i, !1) : void 0) : n.error("no such method '" + u + "' for " + t + " widget instance") : n.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + u + "'");
            }) : this.each(function () {
                var t = n.data(this, r);
                t ? (t.option(u || {}), t._init && t._init()) : n.data(this, r, new i(u, this));
            }), e;
        };
    };
    n.Widget = function () {
    };
    n.Widget._childConstructors = [];
    n.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { disabled: !1, create: null }, _createWidget: function (t, i) {
        i = n(i || this.defaultElement || this)[0];
        this.element = n(i);
        this.uuid = y++;
        this.eventNamespace = "." + this.widgetName + this.uuid;
        this.options = n.widget.extend({}, this.options, this._getCreateOptions(), t);
        this.bindings = n();
        this.hoverable = n();
        this.focusable = n();
        i !== this && (n.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function (n) {
            n.target === i && this.destroy();
        } }), this.document = n(i.style ? i.ownerDocument : i.document || i), this.window = n(this.document[0].defaultView || this.document[0].parentWindow));
        this._create();
        this._trigger("create", null, this._getCreateEventData());
        this._init();
    }, _getCreateOptions: n.noop, _getCreateEventData: n.noop, _create: n.noop, _init: n.noop, destroy: function () {
        this._destroy();
        this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(n.camelCase(this.widgetFullName));
        this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
        this.bindings.unbind(this.eventNamespace);
        this.hoverable.removeClass("ui-state-hover");
        this.focusable.removeClass("ui-state-focus");
    }, _destroy: n.noop, widget: function () {
        return this.element;
    }, option: function (t, i) {
        var r, u, f, e = t;
        if (0 === arguments.length)
            return n.widget.extend({}, this.options);
        if ("string" == typeof t)
            if (e = {}, r = t.split("."), t = r.shift(), r.length) {
                for (u = e[t] = n.widget.extend({}, this.options[t]), f = 0; r.length - 1 > f; f++)
                    u[r[f]] = u[r[f]] || {}, u = u[r[f]];
                if (t = r.pop(), 1 === arguments.length)
                    return void 0 === u[t] ? null : u[t];
                u[t] = i;
            }
            else {
                if (1 === arguments.length)
                    return void 0 === this.options[t] ? null : this.options[t];
                e[t] = i;
            }
        return this._setOptions(e), this;
    }, _setOptions: function (n) {
        var t;
        for (t in n)
            this._setOption(t, n[t]);
        return this;
    }, _setOption: function (n, t) {
        return this.options[n] = t, "disabled" === n && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this;
    }, enable: function () {
        return this._setOptions({ disabled: !1 });
    }, disable: function () {
        return this._setOptions({ disabled: !0 });
    }, _on: function (t, i, r) {
        var f, u = this;
        "boolean" != typeof t && (r = i, i = t, t = !1);
        r ? (i = f = n(i), this.bindings = this.bindings.add(i)) : (r = i, i = this.element, f = this.widget());
        n.each(r, function (r, e) {
            function o() {
                if (t || u.options.disabled !== !0 && !n(this).hasClass("ui-state-disabled"))
                    return ("string" == typeof e ? u[e] : e).apply(u, arguments);
            }
            "string" != typeof e && (o.guid = e.guid = e.guid || o.guid || n.guid++);
            var s = r.match(/^([\w:-]*)\s*(.*)$/), h = s[1] + u.eventNamespace, c = s[2];
            c ? f.delegate(c, h, o) : i.bind(h, o);
        });
    }, _off: function (n, t) {
        t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
        n.unbind(t).undelegate(t);
    }, _delay: function (n, t) {
        function r() {
            return ("string" == typeof n ? i[n] : n).apply(i, arguments);
        }
        var i = this;
        return setTimeout(r, t || 0);
    }, _hoverable: function (t) {
        this.hoverable = this.hoverable.add(t);
        this._on(t, { mouseenter: function (t) {
            n(t.currentTarget).addClass("ui-state-hover");
        }, mouseleave: function (t) {
            n(t.currentTarget).removeClass("ui-state-hover");
        } });
    }, _focusable: function (t) {
        this.focusable = this.focusable.add(t);
        this._on(t, { focusin: function (t) {
            n(t.currentTarget).addClass("ui-state-focus");
        }, focusout: function (t) {
            n(t.currentTarget).removeClass("ui-state-focus");
        } });
    }, _trigger: function (t, i, r) {
        var u, f, e = this.options[t];
        if (r = r || {}, i = n.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], f = i.originalEvent)
            for (u in f)
                u in i || (i[u] = f[u]);
        return this.element.trigger(i, r), !(n.isFunction(e) && e.apply(this.element[0], [i].concat(r)) === !1 || i.isDefaultPrevented());
    } };
    n.each({ show: "fadeIn", hide: "fadeOut" }, function (t, i) {
        n.Widget.prototype["_" + t] = function (r, u, f) {
            "string" == typeof u && (u = { effect: u });
            var o, e = u ? u === !0 || "number" == typeof u ? i : u.effect || i : t;
            u = u || {};
            "number" == typeof u && (u = { duration: u });
            o = !n.isEmptyObject(u);
            u.complete = f;
            u.delay && r.delay(u.delay);
            o && n.effects && n.effects.effect[e] ? r[t](u) : e !== t && r[e] ? r[e](u.duration, u.easing, f) : r.queue(function (i) {
                n(this)[t]();
                f && f.call(r[0]);
                i();
            });
        };
    });
    n.widget;
    i = !1;
    n(document).mouseup(function () {
        i = !1;
    });
    n.widget("ui.mouse", { version: "1.11.1", options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 }, _mouseInit: function () {
        var t = this;
        this.element.bind("mousedown." + this.widgetName, function (n) {
            return t._mouseDown(n);
        }).bind("click." + this.widgetName, function (i) {
            if (!0 === n.data(i.target, t.widgetName + ".preventClickEvent"))
                return (n.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1);
        });
        this.started = !1;
    }, _mouseDestroy: function () {
        this.element.unbind("." + this.widgetName);
        this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
    }, _mouseDown: function (t) {
        if (!i) {
            this._mouseStarted && this._mouseUp(t);
            this._mouseDownEvent = t;
            var r = this, u = 1 === t.which, f = "string" == typeof this.options.cancel && t.target.nodeName ? n(t.target).closest(this.options.cancel).length : !1;
            return u && !f && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                r.mouseDelayMet = !0;
            }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === n.data(t.target, this.widgetName + ".preventClickEvent") && n.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (n) {
                return r._mouseMove(n);
            }, this._mouseUpDelegate = function (n) {
                return r._mouseUp(n);
            }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), i = !0, !0)) : !0;
        }
    }, _mouseMove: function (t) {
        return n.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : t.which ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t);
    }, _mouseUp: function (t) {
        return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && n.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), i = !1, !1;
    }, _mouseDistanceMet: function (n) {
        return Math.max(Math.abs(this._mouseDownEvent.pageX - n.pageX), Math.abs(this._mouseDownEvent.pageY - n.pageY)) >= this.options.distance;
    }, _mouseDelayMet: function () {
        return this.mouseDelayMet;
    }, _mouseStart: function () {
    }, _mouseDrag: function () {
    }, _mouseStop: function () {
    }, _mouseCapture: function () {
        return !0;
    } }), function () {
        function f(n, t, i) {
            return [parseFloat(n[0]) * (a.test(n[0]) ? t / 100 : 1), parseFloat(n[1]) * (a.test(n[1]) ? i / 100 : 1)];
        }
        function i(t, i) {
            return parseInt(n.css(t, i), 10) || 0;
        }
        function v(t) {
            var i = t[0];
            return 9 === i.nodeType ? { width: t.width(), height: t.height(), offset: { top: 0, left: 0 } } : n.isWindow(i) ? { width: t.width(), height: t.height(), offset: { top: t.scrollTop(), left: t.scrollLeft() } } : i.preventDefault ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } } : { width: t.outerWidth(), height: t.outerHeight(), offset: t.offset() };
        }
        n.ui = n.ui || {};
        var u, e, r = Math.max, t = Math.abs, o = Math.round, s = /left|center|right/, h = /top|center|bottom/, c = /[\+\-]\d+(\.[\d]+)?%?/, l = /^\w+/, a = /%$/, y = n.fn.position;
        n.position = { scrollbarWidth: function () {
            if (void 0 !== u)
                return u;
            var r, i, t = n("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'><\/div><\/div>"), f = t.children()[0];
            return n("body").append(t), r = f.offsetWidth, t.css("overflow", "scroll"), i = f.offsetWidth, r === i && (i = t[0].clientWidth), t.remove(), u = r - i;
        }, getScrollInfo: function (t) {
            var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"), r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"), u = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth, f = "scroll" === r || "auto" === r && t.height < t.element[0].scrollHeight;
            return { width: f ? n.position.scrollbarWidth() : 0, height: u ? n.position.scrollbarWidth() : 0 };
        }, getWithinInfo: function (t) {
            var i = n(t || window), r = n.isWindow(i[0]), u = !!i[0] && 9 === i[0].nodeType;
            return { element: i, isWindow: r, isDocument: u, offset: i.offset() || { left: 0, top: 0 }, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: r || u ? i.width() : i.outerWidth(), height: r || u ? i.height() : i.outerHeight() };
        } };
        n.fn.position = function (u) {
            if (!u || !u.of)
                return y.apply(this, arguments);
            u = n.extend({}, u);
            var k, a, p, b, w, g, nt = n(u.of), it = n.position.getWithinInfo(u.within), rt = n.position.getScrollInfo(it), d = (u.collision || "flip").split(" "), tt = {};
            return g = v(nt), nt[0].preventDefault && (u.at = "left top"), a = g.width, p = g.height, b = g.offset, w = n.extend({}, b), n.each(["my", "at"], function () {
                var t, i, n = (u[this] || "").split(" ");
                1 === n.length && (n = s.test(n[0]) ? n.concat(["center"]) : h.test(n[0]) ? ["center"].concat(n) : ["center", "center"]);
                n[0] = s.test(n[0]) ? n[0] : "center";
                n[1] = h.test(n[1]) ? n[1] : "center";
                t = c.exec(n[0]);
                i = c.exec(n[1]);
                tt[this] = [t ? t[0] : 0, i ? i[0] : 0];
                u[this] = [l.exec(n[0])[0], l.exec(n[1])[0]];
            }), 1 === d.length && (d[1] = d[0]), "right" === u.at[0] ? w.left += a : "center" === u.at[0] && (w.left += a / 2), "bottom" === u.at[1] ? w.top += p : "center" === u.at[1] && (w.top += p / 2), k = f(tt.at, a, p), w.left += k[0], w.top += k[1], this.each(function () {
                var y, g, h = n(this), c = h.outerWidth(), l = h.outerHeight(), ut = i(this, "marginLeft"), ft = i(this, "marginTop"), et = c + ut + i(this, "marginRight") + rt.width, ot = l + ft + i(this, "marginBottom") + rt.height, s = n.extend({}, w), v = f(tt.my, h.outerWidth(), h.outerHeight());
                "right" === u.my[0] ? s.left -= c : "center" === u.my[0] && (s.left -= c / 2);
                "bottom" === u.my[1] ? s.top -= l : "center" === u.my[1] && (s.top -= l / 2);
                s.left += v[0];
                s.top += v[1];
                e || (s.left = o(s.left), s.top = o(s.top));
                y = { marginLeft: ut, marginTop: ft };
                n.each(["left", "top"], function (t, i) {
                    n.ui.position[d[t]] && n.ui.position[d[t]][i](s, { targetWidth: a, targetHeight: p, elemWidth: c, elemHeight: l, collisionPosition: y, collisionWidth: et, collisionHeight: ot, offset: [k[0] + v[0], k[1] + v[1]], my: u.my, at: u.at, within: it, elem: h });
                });
                u.using && (g = function (n) {
                    var i = b.left - s.left, o = i + a - c, f = b.top - s.top, v = f + p - l, e = { target: { element: nt, left: b.left, top: b.top, width: a, height: p }, element: { element: h, left: s.left, top: s.top, width: c, height: l }, horizontal: 0 > o ? "left" : i > 0 ? "right" : "center", vertical: 0 > v ? "top" : f > 0 ? "bottom" : "middle" };
                    c > a && a > t(i + o) && (e.horizontal = "center");
                    l > p && p > t(f + v) && (e.vertical = "middle");
                    e.important = r(t(i), t(o)) > r(t(f), t(v)) ? "horizontal" : "vertical";
                    u.using.call(this, n, e);
                });
                h.offset(n.extend(s, { using: g }));
            });
        };
        n.ui.position = { fit: { left: function (n, t) {
            var h, e = t.within, u = e.isWindow ? e.scrollLeft : e.offset.left, o = e.width, s = n.left - t.collisionPosition.marginLeft, i = u - s, f = s + t.collisionWidth - o - u;
            t.collisionWidth > o ? i > 0 && 0 >= f ? (h = n.left + i + t.collisionWidth - o - u, n.left += i - h) : n.left = f > 0 && 0 >= i ? u : i > f ? u + o - t.collisionWidth : u : i > 0 ? n.left += i : f > 0 ? n.left -= f : n.left = r(n.left - s, n.left);
        }, top: function (n, t) {
            var h, o = t.within, u = o.isWindow ? o.scrollTop : o.offset.top, e = t.within.height, s = n.top - t.collisionPosition.marginTop, i = u - s, f = s + t.collisionHeight - e - u;
            t.collisionHeight > e ? i > 0 && 0 >= f ? (h = n.top + i + t.collisionHeight - e - u, n.top += i - h) : n.top = f > 0 && 0 >= i ? u : i > f ? u + e - t.collisionHeight : u : i > 0 ? n.top += i : f > 0 ? n.top -= f : n.top = r(n.top - s, n.top);
        } }, flip: { left: function (n, i) {
            var o, s, r = i.within, y = r.offset.left + r.scrollLeft, c = r.width, h = r.isWindow ? r.scrollLeft : r.offset.left, l = n.left - i.collisionPosition.marginLeft, a = l - h, v = l + i.collisionWidth - c - h, u = "left" === i.my[0] ? -i.elemWidth : "right" === i.my[0] ? i.elemWidth : 0, f = "left" === i.at[0] ? i.targetWidth : "right" === i.at[0] ? -i.targetWidth : 0, e = -2 * i.offset[0];
            0 > a ? (o = n.left + u + f + e + i.collisionWidth - c - y, (0 > o || t(a) > o) && (n.left += u + f + e)) : v > 0 && (s = n.left - i.collisionPosition.marginLeft + u + f + e - h, (s > 0 || v > t(s)) && (n.left += u + f + e));
        }, top: function (n, i) {
            var o, s, r = i.within, y = r.offset.top + r.scrollTop, a = r.height, h = r.isWindow ? r.scrollTop : r.offset.top, v = n.top - i.collisionPosition.marginTop, c = v - h, l = v + i.collisionHeight - a - h, p = "top" === i.my[1], u = p ? -i.elemHeight : "bottom" === i.my[1] ? i.elemHeight : 0, f = "top" === i.at[1] ? i.targetHeight : "bottom" === i.at[1] ? -i.targetHeight : 0, e = -2 * i.offset[1];
            0 > c ? (s = n.top + u + f + e + i.collisionHeight - a - y, n.top + u + f + e > c && (0 > s || t(c) > s) && (n.top += u + f + e)) : l > 0 && (o = n.top - i.collisionPosition.marginTop + u + f + e - h, n.top + u + f + e > l && (o > 0 || l > t(o)) && (n.top += u + f + e));
        } }, flipfit: { left: function () {
            n.ui.position.flip.left.apply(this, arguments);
            n.ui.position.fit.left.apply(this, arguments);
        }, top: function () {
            n.ui.position.flip.top.apply(this, arguments);
            n.ui.position.fit.top.apply(this, arguments);
        } } }, function () {
            var t, i, r, u, f, o = document.getElementsByTagName("body")[0], s = document.createElement("div");
            t = document.createElement(o ? "div" : "body");
            r = { visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none" };
            o && n.extend(r, { position: "absolute", left: "-1000px", top: "-1000px" });
            for (f in r)
                t.style[f] = r[f];
            t.appendChild(s);
            i = o || document.documentElement;
            i.insertBefore(t, i.firstChild);
            s.style.cssText = "position: absolute; left: 10.7432222px;";
            u = n(s).offset().left;
            e = u > 10 && 11 > u;
            t.innerHTML = "";
            i.removeChild(t);
        }();
    }();
    n.ui.position;
    n.widget("ui.draggable", n.ui.mouse, { version: "1.11.1", widgetEventPrefix: "drag", options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null }, _create: function () {
        "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
        this.options.addClasses && this.element.addClass("ui-draggable");
        this.options.disabled && this.element.addClass("ui-draggable-disabled");
        this._setHandleClassName();
        this._mouseInit();
    }, _setOption: function (n, t) {
        this._super(n, t);
        "handle" === n && (this._removeHandleClassName(), this._setHandleClassName());
    }, _destroy: function () {
        return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0);
    }, _mouseCapture: function (t) {
        var i = this.document[0], r = this.options;
        try {
            i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && n(i.activeElement).blur();
        }
        catch (u) {
        }
        return this.helper || r.disabled || n(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (n(r.iframeFix === !0 ? "iframe" : r.iframeFix).each(function () {
            n("<div class='ui-draggable-iframeFix' style='background: #fff;'><\/div>").css({ width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001", zIndex: 1e3 }).css(n(this).offset()).appendTo("body");
        }), !0) : !1);
    }, _mouseStart: function (t) {
        var i = this.options;
        return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), n.ui.ddmanager && (n.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, this.offset.scroll = !1, n.extend(this.offset, { click: { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), n.ui.ddmanager && n.ui.ddmanager.dragStart(this, t), !0);
    }, _mouseDrag: function (t, i) {
        if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
            var r = this._uiHash();
            if (this._trigger("drag", t, r) === !1)
                return this._mouseUp({}), !1;
            this.position = r.position;
        }
        return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", n.ui.ddmanager && n.ui.ddmanager.drag(this, t), !1;
    }, _mouseStop: function (t) {
        var r = this, i = !1;
        return n.ui.ddmanager && !this.options.dropBehaviour && (i = n.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || this.options.revert === !0 || n.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? n(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
            r._trigger("stop", t) !== !1 && r._clear();
        }) : this._trigger("stop", t) !== !1 && this._clear(), !1;
    }, _mouseUp: function (t) {
        return n("div.ui-draggable-iframeFix").each(function () {
            this.parentNode.removeChild(this);
        }), n.ui.ddmanager && n.ui.ddmanager.dragStop(this, t), this.element.focus(), n.ui.mouse.prototype._mouseUp.call(this, t);
    }, cancel: function () {
        return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this;
    }, _getHandle: function (t) {
        return this.options.handle ? !!n(t.target).closest(this.element.find(this.options.handle)).length : !0;
    }, _setHandleClassName: function () {
        this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
        this.handleElement.addClass("ui-draggable-handle");
    }, _removeHandleClassName: function () {
        this.handleElement.removeClass("ui-draggable-handle");
    }, _createHelper: function (t) {
        var r = this.options, i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t])) : "clone" === r.helper ? this.element.clone().removeAttr("id") : this.element;
        return i.parents("body").length || i.appendTo("parent" === r.appendTo ? this.element[0].parentNode : r.appendTo), i[0] === this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"), i;
    }, _adjustOffsetFromHelper: function (t) {
        "string" == typeof t && (t = t.split(" "));
        n.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 });
        "left" in t && (this.offset.click.left = t.left + this.margins.left);
        "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
        "top" in t && (this.offset.click.top = t.top + this.margins.top);
        "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
    }, _isRootNode: function (n) {
        return /(html|body)/i.test(n.tagName) || n === this.document[0];
    }, _getParentOffset: function () {
        var t = this.offsetParent.offset(), i = this.document[0];
        return "absolute" === this.cssPosition && this.scrollParent[0] !== i && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = { top: 0, left: 0 }), { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) };
    }, _getRelativeOffset: function () {
        if ("relative" !== this.cssPosition)
            return { top: 0, left: 0 };
        var n = this.element.position(), t = this._isRootNode(this.scrollParent[0]);
        return { top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()), left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft()) };
    }, _cacheMargins: function () {
        this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 };
    }, _cacheHelperProportions: function () {
        this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
    }, _setContainment: function () {
        var f, t, i, r = this.options, u = this.document[0];
        return this.relativeContainer = null, r.containment ? "window" === r.containment ? (this.containment = [n(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, n(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, n(window).scrollLeft() + n(window).width() - this.helperProportions.width - this.margins.left, n(window).scrollTop() + (n(window).height() || u.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === r.containment ? (this.containment = [0, 0, n(u).width() - this.helperProportions.width - this.margins.left, (n(u).height() || u.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : r.containment.constructor === Array ? (this.containment = r.containment, void 0) : ("parent" === r.containment && (r.containment = this.helper[0].parentNode), t = n(r.containment), i = t[0], i && (f = "hidden" !== t.css("overflow"), this.containment = [(parseInt(t.css("borderLeftWidth"), 10) || 0) + (parseInt(t.css("paddingLeft"), 10) || 0), (parseInt(t.css("borderTopWidth"), 10) || 0) + (parseInt(t.css("paddingTop"), 10) || 0), (f ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t.css("borderRightWidth"), 10) || 0) - (parseInt(t.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (f ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t.css("borderBottomWidth"), 10) || 0) - (parseInt(t.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = t), void 0) : (this.containment = null, void 0);
    }, _convertPositionTo: function (n, t) {
        t || (t = this.position);
        var i = "absolute" === n ? 1 : -1, r = this._isRootNode(this.scrollParent[0]);
        return { top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top) * i, left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) * i };
    }, _generatePosition: function (n, t) {
        var i, s, u, f, r = this.options, h = this._isRootNode(this.scrollParent[0]), e = n.pageX, o = n.pageY;
        return h && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, n.pageX - this.offset.click.left < i[0] && (e = i[0] + this.offset.click.left), n.pageY - this.offset.click.top < i[1] && (o = i[1] + this.offset.click.top), n.pageX - this.offset.click.left > i[2] && (e = i[2] + this.offset.click.left), n.pageY - this.offset.click.top > i[3] && (o = i[3] + this.offset.click.top)), r.grid && (u = r.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, o = i ? u - this.offset.click.top >= i[1] || u - this.offset.click.top > i[3] ? u : u - this.offset.click.top >= i[1] ? u - r.grid[1] : u + r.grid[1] : u, f = r.grid[0] ? this.originalPageX + Math.round((e - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, e = i ? f - this.offset.click.left >= i[0] || f - this.offset.click.left > i[2] ? f : f - this.offset.click.left >= i[0] ? f - r.grid[0] : f + r.grid[0] : f), "y" === r.axis && (e = this.originalPageX), "x" === r.axis && (o = this.originalPageY)), { top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top), left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left) };
    }, _clear: function () {
        this.helper.removeClass("ui-draggable-dragging");
        this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove();
        this.helper = null;
        this.cancelHelperRemoval = !1;
        this.destroyOnClear && this.destroy();
    }, _trigger: function (t, i, r) {
        return r = r || this._uiHash(), n.ui.plugin.call(this, t, [i, r, this], !0), "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")), n.Widget.prototype._trigger.call(this, t, i, r);
    }, plugins: {}, _uiHash: function () {
        return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs };
    } });
    n.ui.plugin.add("draggable", "connectToSortable", { start: function (t, i, r) {
        var u = r.options, f = n.extend({}, i, { item: r.element });
        r.sortables = [];
        n(u.connectToSortable).each(function () {
            var i = n(this).sortable("instance");
            i && !i.options.disabled && (r.sortables.push({ instance: i, shouldRevert: i.options.revert }), i.refreshPositions(), i._trigger("activate", t, f));
        });
    }, stop: function (t, i, r) {
        var u = n.extend({}, i, { item: r.element });
        n.each(r.sortables, function () {
            this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" === r.options.helper && this.instance.currentItem.css({ top: "auto", left: "auto" })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, u));
        });
    }, drag: function (t, i, r) {
        var u = this;
        n.each(r.sortables, function () {
            var f = !1, e = this;
            this.instance.positionAbs = r.positionAbs;
            this.instance.helperProportions = r.helperProportions;
            this.instance.offset.click = r.offset.click;
            this.instance._intersectsWith(this.instance.containerCache) && (f = !0, n.each(r.sortables, function () {
                return this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this !== e && this.instance._intersectsWith(this.instance.containerCache) && n.contains(e.instance.element[0], this.instance.element[0]) && (f = !1), f;
            }));
            f ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = n(u).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                return i.helper[0];
            }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1);
        });
    } });
    n.ui.plugin.add("draggable", "cursor", { start: function (t, i, r) {
        var u = n("body"), f = r.options;
        u.css("cursor") && (f._cursor = u.css("cursor"));
        u.css("cursor", f.cursor);
    }, stop: function (t, i, r) {
        var u = r.options;
        u._cursor && n("body").css("cursor", u._cursor);
    } });
    n.ui.plugin.add("draggable", "opacity", { start: function (t, i, r) {
        var u = n(i.helper), f = r.options;
        u.css("opacity") && (f._opacity = u.css("opacity"));
        u.css("opacity", f.opacity);
    }, stop: function (t, i, r) {
        var u = r.options;
        u._opacity && n(i.helper).css("opacity", u._opacity);
    } });
    n.ui.plugin.add("draggable", "scroll", { start: function (n, t, i) {
        i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1));
        i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset());
    }, drag: function (t, i, r) {
        var u = r.options, o = !1, e = r.scrollParentNotHidden[0], f = r.document[0];
        e !== f && "HTML" !== e.tagName ? (u.axis && "x" === u.axis || (r.overflowOffset.top + e.offsetHeight - t.pageY < u.scrollSensitivity ? e.scrollTop = o = e.scrollTop + u.scrollSpeed : t.pageY - r.overflowOffset.top < u.scrollSensitivity && (e.scrollTop = o = e.scrollTop - u.scrollSpeed)), u.axis && "y" === u.axis || (r.overflowOffset.left + e.offsetWidth - t.pageX < u.scrollSensitivity ? e.scrollLeft = o = e.scrollLeft + u.scrollSpeed : t.pageX - r.overflowOffset.left < u.scrollSensitivity && (e.scrollLeft = o = e.scrollLeft - u.scrollSpeed))) : (u.axis && "x" === u.axis || (t.pageY - n(f).scrollTop() < u.scrollSensitivity ? o = n(f).scrollTop(n(f).scrollTop() - u.scrollSpeed) : n(window).height() - (t.pageY - n(f).scrollTop()) < u.scrollSensitivity && (o = n(f).scrollTop(n(f).scrollTop() + u.scrollSpeed))), u.axis && "y" === u.axis || (t.pageX - n(f).scrollLeft() < u.scrollSensitivity ? o = n(f).scrollLeft(n(f).scrollLeft() - u.scrollSpeed) : n(window).width() - (t.pageX - n(f).scrollLeft()) < u.scrollSensitivity && (o = n(f).scrollLeft(n(f).scrollLeft() + u.scrollSpeed))));
        o !== !1 && n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(r, t);
    } });
    n.ui.plugin.add("draggable", "snap", { start: function (t, i, r) {
        var u = r.options;
        r.snapElements = [];
        n(u.snap.constructor !== String ? u.snap.items || ":data(ui-draggable)" : u.snap).each(function () {
            var t = n(this), i = t.offset();
            this !== r.element[0] && r.snapElements.push({ item: this, width: t.outerWidth(), height: t.outerHeight(), top: i.top, left: i.left });
        });
    }, drag: function (t, i, r) {
        for (var e, o, s, h, c, a, l, v, w, b = r.options, f = b.snapTolerance, y = i.offset.left, k = y + r.helperProportions.width, p = i.offset.top, d = p + r.helperProportions.height, u = r.snapElements.length - 1; u >= 0; u--)
            c = r.snapElements[u].left, a = c + r.snapElements[u].width, l = r.snapElements[u].top, v = l + r.snapElements[u].height, c - f > k || y > a + f || l - f > d || p > v + f || !n.contains(r.snapElements[u].item.ownerDocument, r.snapElements[u].item) ? (r.snapElements[u].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, n.extend(r._uiHash(), { snapItem: r.snapElements[u].item })), r.snapElements[u].snapping = !1) : ("inner" !== b.snapMode && (e = f >= Math.abs(l - d), o = f >= Math.abs(v - p), s = f >= Math.abs(c - k), h = f >= Math.abs(a - y), e && (i.position.top = r._convertPositionTo("relative", { top: l - r.helperProportions.height, left: 0 }).top - r.margins.top), o && (i.position.top = r._convertPositionTo("relative", { top: v, left: 0 }).top - r.margins.top), s && (i.position.left = r._convertPositionTo("relative", { top: 0, left: c - r.helperProportions.width }).left - r.margins.left), h && (i.position.left = r._convertPositionTo("relative", { top: 0, left: a }).left - r.margins.left)), w = e || o || s || h, "outer" !== b.snapMode && (e = f >= Math.abs(l - p), o = f >= Math.abs(v - d), s = f >= Math.abs(c - y), h = f >= Math.abs(a - k), e && (i.position.top = r._convertPositionTo("relative", { top: l, left: 0 }).top - r.margins.top), o && (i.position.top = r._convertPositionTo("relative", { top: v - r.helperProportions.height, left: 0 }).top - r.margins.top), s && (i.position.left = r._convertPositionTo("relative", { top: 0, left: c }).left - r.margins.left), h && (i.position.left = r._convertPositionTo("relative", { top: 0, left: a - r.helperProportions.width }).left - r.margins.left)), !r.snapElements[u].snapping && (e || o || s || h || w) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, n.extend(r._uiHash(), { snapItem: r.snapElements[u].item })), r.snapElements[u].snapping = e || o || s || h || w);
    } });
    n.ui.plugin.add("draggable", "stack", { start: function (t, i, r) {
        var f, e = r.options, u = n.makeArray(n(e.stack)).sort(function (t, i) {
            return (parseInt(n(t).css("zIndex"), 10) || 0) - (parseInt(n(i).css("zIndex"), 10) || 0);
        });
        u.length && (f = parseInt(n(u[0]).css("zIndex"), 10) || 0, n(u).each(function (t) {
            n(this).css("zIndex", f + t);
        }), this.css("zIndex", f + u.length));
    } });
    n.ui.plugin.add("draggable", "zIndex", { start: function (t, i, r) {
        var u = n(i.helper), f = r.options;
        u.css("zIndex") && (f._zIndex = u.css("zIndex"));
        u.css("zIndex", f.zIndex);
    }, stop: function (t, i, r) {
        var u = r.options;
        u._zIndex && n(i.helper).css("zIndex", u._zIndex);
    } });
    n.ui.draggable;
    n.widget("ui.droppable", { version: "1.11.1", widgetEventPrefix: "drop", options: { accept: "*", activeClass: !1, addClasses: !0, greedy: !1, hoverClass: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null }, _create: function () {
        var t, i = this.options, r = i.accept;
        this.isover = !1;
        this.isout = !0;
        this.accept = n.isFunction(r) ? r : function (n) {
            return n.is(r);
        };
        this.proportions = function () {
            return arguments.length ? (t = arguments[0], void 0) : t ? t : t = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight };
        };
        this._addToManager(i.scope);
        i.addClasses && this.element.addClass("ui-droppable");
    }, _addToManager: function (t) {
        n.ui.ddmanager.droppables[t] = n.ui.ddmanager.droppables[t] || [];
        n.ui.ddmanager.droppables[t].push(this);
    }, _splice: function (n) {
        for (var t = 0; n.length > t; t++)
            n[t] === this && n.splice(t, 1);
    }, _destroy: function () {
        var t = n.ui.ddmanager.droppables[this.options.scope];
        this._splice(t);
        this.element.removeClass("ui-droppable ui-droppable-disabled");
    }, _setOption: function (t, i) {
        if ("accept" === t)
            this.accept = n.isFunction(i) ? i : function (n) {
                return n.is(i);
            };
        else if ("scope" === t) {
            var r = n.ui.ddmanager.droppables[this.options.scope];
            this._splice(r);
            this._addToManager(i);
        }
        this._super(t, i);
    }, _activate: function (t) {
        var i = n.ui.ddmanager.current;
        this.options.activeClass && this.element.addClass(this.options.activeClass);
        i && this._trigger("activate", t, this.ui(i));
    }, _deactivate: function (t) {
        var i = n.ui.ddmanager.current;
        this.options.activeClass && this.element.removeClass(this.options.activeClass);
        i && this._trigger("deactivate", t, this.ui(i));
    }, _over: function (t) {
        var i = n.ui.ddmanager.current;
        i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)));
    }, _out: function (t) {
        var i = n.ui.ddmanager.current;
        i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)));
    }, _drop: function (t, i) {
        var r = i || n.ui.ddmanager.current, u = !1;
        return r && (r.currentItem || r.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
            var i = n(this).droppable("instance");
            if (i.options.greedy && !i.options.disabled && i.options.scope === r.options.scope && i.accept.call(i.element[0], r.currentItem || r.element) && n.ui.intersect(r, n.extend(i, { offset: i.element.offset() }), i.options.tolerance, t))
                return (u = !0, !1);
        }), u ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1) : !1;
    }, ui: function (n) {
        return { draggable: n.currentItem || n.element, helper: n.helper, position: n.position, offset: n.positionAbs };
    } });
    n.ui.intersect = function () {
        function n(n, t, i) {
            return n >= t && t + i > n;
        }
        return function (t, i, r, u) {
            if (!i.offset)
                return !1;
            var o = (t.positionAbs || t.position.absolute).left, s = (t.positionAbs || t.position.absolute).top, h = o + t.helperProportions.width, c = s + t.helperProportions.height, f = i.offset.left, e = i.offset.top, l = f + i.proportions().width, a = e + i.proportions().height;
            switch (r) {
                case "fit": return o >= f && l >= h && s >= e && a >= c;
                case "intersect": return o + t.helperProportions.width / 2 > f && l > h - t.helperProportions.width / 2 && s + t.helperProportions.height / 2 > e && a > c - t.helperProportions.height / 2;
                case "pointer": return n(u.pageY, e, i.proportions().height) && n(u.pageX, f, i.proportions().width);
                case "touch": return (s >= e && a >= s || c >= e && a >= c || e > s && c > a) && (o >= f && l >= o || h >= f && l >= h || f > o && h > l);
                default: return !1;
            }
        };
    }();
    n.ui.ddmanager = { current: null, droppables: { "default": [] }, prepareOffsets: function (t, i) {
        var r, f, u = n.ui.ddmanager.droppables[t.options.scope] || [], o = i ? i.type : null, e = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
        n: for (r = 0; u.length > r; r++)
            if (!(u[r].options.disabled || t && !u[r].accept.call(u[r].element[0], t.currentItem || t.element))) {
                for (f = 0; e.length > f; f++)
                    if (e[f] === u[r].element[0]) {
                        u[r].proportions().height = 0;
                        continue n;
                    }
                u[r].visible = "none" !== u[r].element.css("display");
                u[r].visible && ("mousedown" === o && u[r]._activate.call(u[r], i), u[r].offset = u[r].element.offset(), u[r].proportions({ width: u[r].element[0].offsetWidth, height: u[r].element[0].offsetHeight }));
            }
    }, drop: function (t, i) {
        var r = !1;
        return n.each((n.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () {
            this.options && (!this.options.disabled && this.visible && n.ui.intersect(t, this, this.options.tolerance, i) && (r = this._drop.call(this, i) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)));
        }), r;
    }, dragStart: function (t, i) {
        t.element.parentsUntil("body").bind("scroll.droppable", function () {
            t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i);
        });
    }, drag: function (t, i) {
        t.options.refreshPositions && n.ui.ddmanager.prepareOffsets(t, i);
        n.each(n.ui.ddmanager.droppables[t.options.scope] || [], function () {
            if (!this.options.disabled && !this.greedyChild && this.visible) {
                var r, e, f, o = n.ui.intersect(t, this, this.options.tolerance, i), u = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                u && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function () {
                    return n(this).droppable("instance").options.scope === e;
                }), f.length && (r = n(f[0]).droppable("instance"), r.greedyChild = "isover" === u)), r && "isover" === u && (r.isover = !1, r.isout = !0, r._out.call(r, i)), this[u] = !0, this["isout" === u ? "isover" : "isout"] = !1, this["isover" === u ? "_over" : "_out"].call(this, i), r && "isout" === u && (r.isout = !1, r.isover = !0, r._over.call(r, i)));
            }
        });
    }, dragStop: function (t, i) {
        t.element.parentsUntil("body").unbind("scroll.droppable");
        t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i);
    } };
    n.ui.droppable;
    n.widget("ui.resizable", n.ui.mouse, { version: "1.11.1", widgetEventPrefix: "resize", options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null }, _num: function (n) {
        return parseInt(n, 10) || 0;
    }, _isNumber: function (n) {
        return !isNaN(parseInt(n, 10));
    }, _hasScroll: function (t, i) {
        if ("hidden" === n(t).css("overflow"))
            return !1;
        var r = i && "left" === i ? "scrollLeft" : "scrollTop", u = !1;
        return t[r] > 0 ? !0 : (t[r] = 1, u = t[r] > 0, t[r] = 0, u);
    }, _create: function () {
        var e, f, r, i, o, u = this, t = this.options;
        if (this.element.addClass("ui-resizable"), n.extend(this, { _aspectRatio: !!t.aspectRatio, aspectRatio: t.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: t.helper || t.ghost || t.animate ? t.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(n("<div class='ui-wrapper' style='overflow: hidden;'><\/div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({ marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom") }), this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0 }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css({ margin: this.originalElement.css("margin") }), this._proportionallyResize()), this.handles = t.handles || (n(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this.handles.constructor === String)
            for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, f = 0; e.length > f; f++)
                r = n.trim(e[f]), o = "ui-resizable-" + r, i = n("<div class='ui-resizable-handle " + o + "'><\/div>"), i.css({ zIndex: t.zIndex }), "se" === r && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[r] = ".ui-resizable-" + r, this.element.append(i);
        this._renderAxis = function (t) {
            var i, r, u, f;
            t = t || this.element;
            for (i in this.handles)
                this.handles[i].constructor === String && (this.handles[i] = this.element.children(this.handles[i]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = n(this.handles[i], this.element), f = /sw|ne|nw|se|n|s/.test(i) ? r.outerHeight() : r.outerWidth(), u = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(u, f), this._proportionallyResize()), n(this.handles[i]).length;
        };
        this._renderAxis(this.element);
        this._handles = n(".ui-resizable-handle", this.element).disableSelection();
        this._handles.mouseover(function () {
            u.resizing || (this.className && (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), u.axis = i && i[1] ? i[1] : "se");
        });
        t.autoHide && (this._handles.hide(), n(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
            t.disabled || (n(this).removeClass("ui-resizable-autohide"), u._handles.show());
        }).mouseleave(function () {
            t.disabled || u.resizing || (n(this).addClass("ui-resizable-autohide"), u._handles.hide());
        }));
        this._mouseInit();
    }, _destroy: function () {
        this._mouseDestroy();
        var t, i = function (t) {
            n(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
        };
        return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({ position: t.css("position"), width: t.outerWidth(), height: t.outerHeight(), top: t.css("top"), left: t.css("left") }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this;
    }, _mouseCapture: function (t) {
        var r, i, u = !1;
        for (r in this.handles)
            i = n(this.handles[r])[0], (i === t.target || n.contains(i, t.target)) && (u = !0);
        return !this.options.disabled && u;
    }, _mouseStart: function (t) {
        var u, f, e, r = this.options, i = this.element;
        return this.resizing = !0, this._renderProxy(), u = this._num(this.helper.css("left")), f = this._num(this.helper.css("top")), r.containment && (u += n(r.containment).scrollLeft() || 0, f += n(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: u, top: f }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: i.width(), height: i.height() }, this.originalSize = this._helper ? { width: i.outerWidth(), height: i.outerHeight() } : { width: i.width(), height: i.height() }, this.sizeDiff = { width: i.outerWidth() - i.width(), height: i.outerHeight() - i.height() }, this.originalPosition = { left: u, top: f }, this.originalMousePosition = { left: t.pageX, top: t.pageY }, this.aspectRatio = "number" == typeof r.aspectRatio ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1, e = n(".ui-resizable-" + this.axis).css("cursor"), n("body").css("cursor", "auto" === e ? this.axis + "-resize" : e), i.addClass("ui-resizable-resizing"), this._propagate("start", t), !0;
    }, _mouseDrag: function (t) {
        var i, r, u = this.originalMousePosition, e = this.axis, o = t.pageX - u.left || 0, s = t.pageY - u.top || 0, f = this._change[e];
        return this._updatePrevProperties(), f ? (i = f.apply(this, [t, o, s]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), r = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), n.isEmptyObject(r) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1;
    }, _mouseStop: function (t) {
        this.resizing = !1;
        var r, u, f, e, o, s, h, c = this.options, i = this;
        return this._helper && (r = this._proportionallyResizeElements, u = r.length && /textarea/i.test(r[0].nodeName), f = u && this._hasScroll(r[0], "left") ? 0 : i.sizeDiff.height, e = u ? 0 : i.sizeDiff.width, o = { width: i.helper.width() - e, height: i.helper.height() - f }, s = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, h = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null, c.animate || this.element.css(n.extend(o, { top: h, left: s })), i.helper.height(i.size.height), i.helper.width(i.size.width), this._helper && !c.animate && this._proportionallyResize()), n("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1;
    }, _updatePrevProperties: function () {
        this.prevPosition = { top: this.position.top, left: this.position.left };
        this.prevSize = { width: this.size.width, height: this.size.height };
    }, _applyChanges: function () {
        var n = {};
        return this.position.top !== this.prevPosition.top && (n.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (n.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (n.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (n.height = this.size.height + "px"), this.helper.css(n), n;
    }, _updateVirtualBoundaries: function (n) {
        var r, u, f, e, t, i = this.options;
        t = { minWidth: this._isNumber(i.minWidth) ? i.minWidth : 0, maxWidth: this._isNumber(i.maxWidth) ? i.maxWidth : 1 / 0, minHeight: this._isNumber(i.minHeight) ? i.minHeight : 0, maxHeight: this._isNumber(i.maxHeight) ? i.maxHeight : 1 / 0 };
        (this._aspectRatio || n) && (r = t.minHeight * this.aspectRatio, f = t.minWidth / this.aspectRatio, u = t.maxHeight * this.aspectRatio, e = t.maxWidth / this.aspectRatio, r > t.minWidth && (t.minWidth = r), f > t.minHeight && (t.minHeight = f), t.maxWidth > u && (t.maxWidth = u), t.maxHeight > e && (t.maxHeight = e));
        this._vBoundaries = t;
    }, _updateCache: function (n) {
        this.offset = this.helper.offset();
        this._isNumber(n.left) && (this.position.left = n.left);
        this._isNumber(n.top) && (this.position.top = n.top);
        this._isNumber(n.height) && (this.size.height = n.height);
        this._isNumber(n.width) && (this.size.width = n.width);
    }, _updateRatio: function (n) {
        var t = this.position, i = this.size, r = this.axis;
        return this._isNumber(n.height) ? n.width = n.height * this.aspectRatio : this._isNumber(n.width) && (n.height = n.width / this.aspectRatio), "sw" === r && (n.left = t.left + (i.width - n.width), n.top = null), "nw" === r && (n.top = t.top + (i.height - n.height), n.left = t.left + (i.width - n.width)), n;
    }, _respectSize: function (n) {
        var t = this._vBoundaries, i = this.axis, r = this._isNumber(n.width) && t.maxWidth && t.maxWidth < n.width, u = this._isNumber(n.height) && t.maxHeight && t.maxHeight < n.height, f = this._isNumber(n.width) && t.minWidth && t.minWidth > n.width, e = this._isNumber(n.height) && t.minHeight && t.minHeight > n.height, o = this.originalPosition.left + this.originalSize.width, s = this.position.top + this.size.height, h = /sw|nw|w/.test(i), c = /nw|ne|n/.test(i);
        return f && (n.width = t.minWidth), e && (n.height = t.minHeight), r && (n.width = t.maxWidth), u && (n.height = t.maxHeight), f && h && (n.left = o - t.minWidth), r && h && (n.left = o - t.maxWidth), e && c && (n.top = s - t.minHeight), u && c && (n.top = s - t.maxHeight), n.width || n.height || n.left || !n.top ? n.width || n.height || n.top || !n.left || (n.left = null) : n.top = null, n;
    }, _getPaddingPlusBorderDimensions: function (n) {
        for (var t = 0, i = [], r = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], u = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")]; 4 > t; t++)
            i[t] = parseInt(r[t], 10) || 0, i[t] += parseInt(u[t], 10) || 0;
        return { height: i[0] + i[2], width: i[1] + i[3] };
    }, _proportionallyResize: function () {
        if (this._proportionallyResizeElements.length)
            for (var n, t = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++)
                n = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(n)), n.css({ height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0 });
    }, _renderProxy: function () {
        var t = this.element, i = this.options;
        this.elementOffset = t.offset();
        this._helper ? (this.helper = this.helper || n("<div style='overflow:hidden;'><\/div>"), this.helper.addClass(this._helper).css({ width: this.element.outerWidth() - 1, height: this.element.outerHeight() - 1, position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
    }, _change: { e: function (n, t) {
        return { width: this.originalSize.width + t };
    }, w: function (n, t) {
        var i = this.originalSize, r = this.originalPosition;
        return { left: r.left + t, width: i.width - t };
    }, n: function (n, t, i) {
        var r = this.originalSize, u = this.originalPosition;
        return { top: u.top + i, height: r.height - i };
    }, s: function (n, t, i) {
        return { height: this.originalSize.height + i };
    }, se: function (t, i, r) {
        return n.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, r]));
    }, sw: function (t, i, r) {
        return n.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, r]));
    }, ne: function (t, i, r) {
        return n.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, r]));
    }, nw: function (t, i, r) {
        return n.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, r]));
    } }, _propagate: function (t, i) {
        n.ui.plugin.call(this, t, [i, this.ui()]);
        "resize" !== t && this._trigger(t, i, this.ui());
    }, plugins: {}, ui: function () {
        return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition };
    } });
    n.ui.plugin.add("resizable", "animate", { stop: function (t) {
        var i = n(this).resizable("instance"), u = i.options, r = i._proportionallyResizeElements, f = r.length && /textarea/i.test(r[0].nodeName), s = f && i._hasScroll(r[0], "left") ? 0 : i.sizeDiff.height, h = f ? 0 : i.sizeDiff.width, c = { width: i.size.width - h, height: i.size.height - s }, e = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, o = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
        i.element.animate(n.extend(c, o && e ? { top: o, left: e } : {}), { duration: u.animateDuration, easing: u.animateEasing, step: function () {
            var u = { width: parseInt(i.element.css("width"), 10), height: parseInt(i.element.css("height"), 10), top: parseInt(i.element.css("top"), 10), left: parseInt(i.element.css("left"), 10) };
            r && r.length && n(r[0]).css({ width: u.width, height: u.height });
            i._updateCache(u);
            i._propagate("resize", t);
        } });
    } });
    n.ui.plugin.add("resizable", "containment", { start: function () {
        var r, f, e, o, s, h, c, t = n(this).resizable("instance"), l = t.options, a = t.element, u = l.containment, i = u instanceof n ? u.get(0) : /parent/.test(u) ? a.parent().get(0) : u;
        i && (t.containerElement = n(i), /document/.test(u) || u === document ? (t.containerOffset = { left: 0, top: 0 }, t.containerPosition = { left: 0, top: 0 }, t.parentData = { element: n(document), left: 0, top: 0, width: n(document).width(), height: n(document).height() || document.body.parentNode.scrollHeight }) : (r = n(i), f = [], n(["Top", "Right", "Left", "Bottom"]).each(function (n, i) {
            f[n] = t._num(r.css("padding" + i));
        }), t.containerOffset = r.offset(), t.containerPosition = r.position(), t.containerSize = { height: r.innerHeight() - f[3], width: r.innerWidth() - f[1] }, e = t.containerOffset, o = t.containerSize.height, s = t.containerSize.width, h = t._hasScroll(i, "left") ? i.scrollWidth : s, c = t._hasScroll(i) ? i.scrollHeight : o, t.parentData = { element: i, left: e.left, top: e.top, width: h, height: c }));
    }, resize: function (t) {
        var o, s, h, c, i = n(this).resizable("instance"), v = i.options, r = i.containerOffset, l = i.position, f = i._aspectRatio || t.shiftKey, e = { top: 0, left: 0 }, a = i.containerElement, u = !0;
        a[0] !== document && /static/.test(a.css("position")) && (e = r);
        l.left < (i._helper ? r.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - r.left : i.position.left - e.left), f && (i.size.height = i.size.width / i.aspectRatio, u = !1), i.position.left = v.helper ? r.left : 0);
        l.top < (i._helper ? r.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - r.top : i.position.top), f && (i.size.width = i.size.height * i.aspectRatio, u = !1), i.position.top = i._helper ? r.top : 0);
        h = i.containerElement.get(0) === i.element.parent().get(0);
        c = /relative|absolute/.test(i.containerElement.css("position"));
        h && c ? (i.offset.left = i.parentData.left + i.position.left, i.offset.top = i.parentData.top + i.position.top) : (i.offset.left = i.element.offset().left, i.offset.top = i.element.offset().top);
        o = Math.abs(i.sizeDiff.width + (i._helper ? i.offset.left - e.left : i.offset.left - r.left));
        s = Math.abs(i.sizeDiff.height + (i._helper ? i.offset.top - e.top : i.offset.top - r.top));
        o + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - o, f && (i.size.height = i.size.width / i.aspectRatio, u = !1));
        s + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - s, f && (i.size.width = i.size.height * i.aspectRatio, u = !1));
        u || (i.position.left = i.prevPosition.left, i.position.top = i.prevPosition.top, i.size.width = i.prevSize.width, i.size.height = i.prevSize.height);
    }, stop: function () {
        var t = n(this).resizable("instance"), r = t.options, u = t.containerOffset, f = t.containerPosition, e = t.containerElement, i = n(t.helper), o = i.offset(), s = i.outerWidth() - t.sizeDiff.width, h = i.outerHeight() - t.sizeDiff.height;
        t._helper && !r.animate && /relative/.test(e.css("position")) && n(this).css({ left: o.left - f.left - u.left, width: s, height: h });
        t._helper && !r.animate && /static/.test(e.css("position")) && n(this).css({ left: o.left - f.left - u.left, width: s, height: h });
    } });
    n.ui.plugin.add("resizable", "alsoResize", { start: function () {
        var r = n(this).resizable("instance"), t = r.options, i = function (t) {
            n(t).each(function () {
                var t = n(this);
                t.data("ui-resizable-alsoresize", { width: parseInt(t.width(), 10), height: parseInt(t.height(), 10), left: parseInt(t.css("left"), 10), top: parseInt(t.css("top"), 10) });
            });
        };
        "object" != typeof t.alsoResize || t.alsoResize.parentNode ? i(t.alsoResize) : t.alsoResize.length ? (t.alsoResize = t.alsoResize[0], i(t.alsoResize)) : n.each(t.alsoResize, function (n) {
            i(n);
        });
    }, resize: function (t, i) {
        var r = n(this).resizable("instance"), u = r.options, f = r.originalSize, e = r.originalPosition, s = { height: r.size.height - f.height || 0, width: r.size.width - f.width || 0, top: r.position.top - e.top || 0, left: r.position.left - e.left || 0 }, o = function (t, r) {
            n(t).each(function () {
                var t = n(this), f = n(this).data("ui-resizable-alsoresize"), u = {}, e = r && r.length ? r : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                n.each(e, function (n, t) {
                    var i = (f[t] || 0) + (s[t] || 0);
                    i && i >= 0 && (u[t] = i || null);
                });
                t.css(u);
            });
        };
        "object" != typeof u.alsoResize || u.alsoResize.nodeType ? o(u.alsoResize) : n.each(u.alsoResize, function (n, t) {
            o(n, t);
        });
    }, stop: function () {
        n(this).removeData("resizable-alsoresize");
    } });
    n.ui.plugin.add("resizable", "ghost", { start: function () {
        var t = n(this).resizable("instance"), i = t.options, r = t.size;
        t.ghost = t.originalElement.clone();
        t.ghost.css({ opacity: .25, display: "block", position: "relative", height: r.height, width: r.width, margin: 0, left: 0, top: 0 }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : "");
        t.ghost.appendTo(t.helper);
    }, resize: function () {
        var t = n(this).resizable("instance");
        t.ghost && t.ghost.css({ position: "relative", height: t.size.height, width: t.size.width });
    }, stop: function () {
        var t = n(this).resizable("instance");
        t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0));
    } });
    n.ui.plugin.add("resizable", "grid", { resize: function () {
        var h, t = n(this).resizable("instance"), i = t.options, y = t.size, e = t.originalSize, o = t.originalPosition, c = t.axis, l = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid, s = l[0] || 1, f = l[1] || 1, a = Math.round((y.width - e.width) / s) * s, v = Math.round((y.height - e.height) / f) * f, r = e.width + a, u = e.height + v, p = i.maxWidth && r > i.maxWidth, w = i.maxHeight && u > i.maxHeight, b = i.minWidth && i.minWidth > r, k = i.minHeight && i.minHeight > u;
        i.grid = l;
        b && (r += s);
        k && (u += f);
        p && (r -= s);
        w && (u -= f);
        /^(se|s|e)$/.test(c) ? (t.size.width = r, t.size.height = u) : /^(ne)$/.test(c) ? (t.size.width = r, t.size.height = u, t.position.top = o.top - v) : /^(sw)$/.test(c) ? (t.size.width = r, t.size.height = u, t.position.left = o.left - a) : ((0 >= u - f || 0 >= r - s) && (h = t._getPaddingPlusBorderDimensions(this)), u - f > 0 ? (t.size.height = u, t.position.top = o.top - v) : (u = f - h.height, t.size.height = u, t.position.top = o.top + e.height - u), r - s > 0 ? (t.size.width = r, t.position.left = o.left - a) : (r = f - h.height, t.size.width = r, t.position.left = o.left + e.width - r));
    } });
    n.ui.resizable;
    n.widget("ui.selectable", n.ui.mouse, { version: "1.11.1", options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null }, _create: function () {
        var t, i = this;
        this.element.addClass("ui-selectable");
        this.dragged = !1;
        this.refresh = function () {
            t = n(i.options.filter, i.element[0]);
            t.addClass("ui-selectee");
            t.each(function () {
                var t = n(this), i = t.offset();
                n.data(this, "selectable-item", { element: this, $element: t, left: i.left, top: i.top, right: i.left + t.outerWidth(), bottom: i.top + t.outerHeight(), startselected: !1, selected: t.hasClass("ui-selected"), selecting: t.hasClass("ui-selecting"), unselecting: t.hasClass("ui-unselecting") });
            });
        };
        this.refresh();
        this.selectees = t.addClass("ui-selectee");
        this._mouseInit();
        this.helper = n("<div class='ui-selectable-helper'><\/div>");
    }, _destroy: function () {
        this.selectees.removeClass("ui-selectee").removeData("selectable-item");
        this.element.removeClass("ui-selectable ui-selectable-disabled");
        this._mouseDestroy();
    }, _mouseStart: function (t) {
        var i = this, r = this.options;
        this.opos = [t.pageX, t.pageY];
        this.options.disabled || (this.selectees = n(r.filter, this.element[0]), this._trigger("start", t), n(r.appendTo).append(this.helper), this.helper.css({ left: t.pageX, top: t.pageY, width: 0, height: 0 }), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
            var r = n.data(this, "selectable-item");
            r.startselected = !0;
            t.metaKey || t.ctrlKey || (r.$element.removeClass("ui-selected"), r.selected = !1, r.$element.addClass("ui-unselecting"), r.unselecting = !0, i._trigger("unselecting", t, { unselecting: r.element }));
        }), n(t.target).parents().addBack().each(function () {
            var u, r = n.data(this, "selectable-item");
            if (r)
                return (u = !t.metaKey && !t.ctrlKey || !r.$element.hasClass("ui-selected"), r.$element.removeClass(u ? "ui-unselecting" : "ui-selected").addClass(u ? "ui-selecting" : "ui-unselecting"), r.unselecting = !u, r.selecting = u, r.selected = u, u ? i._trigger("selecting", t, { selecting: r.element }) : i._trigger("unselecting", t, { unselecting: r.element }), !1);
        }));
    }, _mouseDrag: function (t) {
        if (this.dragged = !0, !this.options.disabled) {
            var e, o = this, s = this.options, i = this.opos[0], r = this.opos[1], u = t.pageX, f = t.pageY;
            return i > u && (e = u, u = i, i = e), r > f && (e = f, f = r, r = e), this.helper.css({ left: i, top: r, width: u - i, height: f - r }), this.selectees.each(function () {
                var e = n.data(this, "selectable-item"), h = !1;
                e && e.element !== o.element[0] && ("touch" === s.tolerance ? h = !(e.left > u || i > e.right || e.top > f || r > e.bottom) : "fit" === s.tolerance && (h = e.left > i && u > e.right && e.top > r && f > e.bottom), h ? (e.selected && (e.$element.removeClass("ui-selected"), e.selected = !1), e.unselecting && (e.$element.removeClass("ui-unselecting"), e.unselecting = !1), e.selecting || (e.$element.addClass("ui-selecting"), e.selecting = !0, o._trigger("selecting", t, { selecting: e.element }))) : (e.selecting && ((t.metaKey || t.ctrlKey) && e.startselected ? (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.$element.addClass("ui-selected"), e.selected = !0) : (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.startselected && (e.$element.addClass("ui-unselecting"), e.unselecting = !0), o._trigger("unselecting", t, { unselecting: e.element }))), e.selected && (t.metaKey || t.ctrlKey || e.startselected || (e.$element.removeClass("ui-selected"), e.selected = !1, e.$element.addClass("ui-unselecting"), e.unselecting = !0, o._trigger("unselecting", t, { unselecting: e.element })))));
            }), !1;
        }
    }, _mouseStop: function (t) {
        var i = this;
        return this.dragged = !1, n(".ui-unselecting", this.element[0]).each(function () {
            var r = n.data(this, "selectable-item");
            r.$element.removeClass("ui-unselecting");
            r.unselecting = !1;
            r.startselected = !1;
            i._trigger("unselected", t, { unselected: r.element });
        }), n(".ui-selecting", this.element[0]).each(function () {
            var r = n.data(this, "selectable-item");
            r.$element.removeClass("ui-selecting").addClass("ui-selected");
            r.selecting = !1;
            r.selected = !0;
            r.startselected = !0;
            i._trigger("selected", t, { selected: r.element });
        }), this._trigger("stop", t), this.helper.remove(), !1;
    } });
    n.widget("ui.sortable", n.ui.mouse, { version: "1.11.1", widgetEventPrefix: "sort", ready: !1, options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null }, _isOverAxis: function (n, t, i) {
        return n >= t && t + i > n;
    }, _isFloating: function (n) {
        return /left|right/.test(n.css("float")) || /inline|table-cell/.test(n.css("display"));
    }, _create: function () {
        var n = this.options;
        this.containerCache = {};
        this.element.addClass("ui-sortable");
        this.refresh();
        this.floating = this.items.length ? "x" === n.axis || this._isFloating(this.items[0].item) : !1;
        this.offset = this.element.offset();
        this._mouseInit();
        this._setHandleClassName();
        this.ready = !0;
    }, _setOption: function (n, t) {
        this._super(n, t);
        "handle" === n && this._setHandleClassName();
    }, _setHandleClassName: function () {
        this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle");
        n.each(this.items, function () {
            (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle");
        });
    }, _destroy: function () {
        this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle");
        this._mouseDestroy();
        for (var n = this.items.length - 1; n >= 0; n--)
            this.items[n].item.removeData(this.widgetName + "-item");
        return this;
    }, _mouseCapture: function (t, i) {
        var r = null, f = !1, u = this;
        return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), n(t.target).parents().each(function () {
            if (n.data(this, u.widgetName + "-item") === u)
                return (r = n(this), !1);
        }), n.data(t.target, u.widgetName + "-item") === u && (r = n(t.target)), r ? !this.options.handle || i || (n(this.options.handle, r).find("*").addBack().each(function () {
            this === t.target && (f = !0);
        }), f) ? (this.currentItem = r, this._removeCurrentsFromItems(), !0) : !1 : !1);
    }, _mouseStart: function (t, i, r) {
        var f, e, u = this.options;
        if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, n.extend(this.offset, { click: { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, u.cursorAt && this._adjustOffsetFromHelper(u.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), u.containment && this._setContainment(), u.cursor && "auto" !== u.cursor && (e = this.document.find("body"), this.storedCursor = e.css("cursor"), e.css("cursor", u.cursor), this.storedStylesheet = n("<style>*{ cursor: " + u.cursor + " !important; }<\/style>").appendTo(e)), u.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", u.opacity)), u.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", u.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !r)
            for (f = this.containers.length - 1; f >= 0; f--)
                this.containers[f]._trigger("activate", t, this._uiHash(this));
        return n.ui.ddmanager && (n.ui.ddmanager.current = this), n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0;
    }, _mouseDrag: function (t) {
        var e, u, f, o, i = this.options, r = !1;
        for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - n(document).scrollTop() < i.scrollSensitivity ? r = n(document).scrollTop(n(document).scrollTop() - i.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < i.scrollSensitivity && (r = n(document).scrollTop(n(document).scrollTop() + i.scrollSpeed)), t.pageX - n(document).scrollLeft() < i.scrollSensitivity ? r = n(document).scrollLeft(n(document).scrollLeft() - i.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < i.scrollSensitivity && (r = n(document).scrollLeft(n(document).scrollLeft() + i.scrollSpeed))), r !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e = this.items.length - 1; e >= 0; e--)
            if (u = this.items[e], f = u.item[0], o = this._intersectsWithPointer(u), o && u.instance === this.currentContainer && f !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== f && !n.contains(this.placeholder[0], f) && ("semi-dynamic" === this.options.type ? !n.contains(this.element[0], f) : !0)) {
                if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(u))
                    break;
                this._rearrange(t, u);
                this._trigger("change", t, this._uiHash());
                break;
            }
        return this._contactContainers(t), n.ui.ddmanager && n.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1;
    }, _mouseStop: function (t, i) {
        if (t) {
            if (n.ui.ddmanager && !this.options.dropBehaviour && n.ui.ddmanager.drop(this, t), this.options.revert) {
                var e = this, f = this.placeholder.offset(), r = this.options.axis, u = {};
                r && "x" !== r || (u.left = f.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft));
                r && "y" !== r || (u.top = f.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop));
                this.reverting = !0;
                n(this.helper).animate(u, parseInt(this.options.revert, 10) || 500, function () {
                    e._clear(t);
                });
            }
            else
                this._clear(t, i);
            return !1;
        }
    }, cancel: function () {
        if (this.dragging) {
            this._mouseUp({ target: null });
            "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
            for (var t = this.containers.length - 1; t >= 0; t--)
                this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0);
        }
        return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), n.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }), this.domPosition.prev ? n(this.domPosition.prev).after(this.currentItem) : n(this.domPosition.parent).prepend(this.currentItem)), this;
    }, serialize: function (t) {
        var r = this._getItemsAsjQuery(t && t.connected), i = [];
        return t = t || {}, n(r).each(function () {
            var r = (n(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
            r && i.push((t.key || r[1] + "[]") + "=" + (t.key && t.expression ? r[1] : r[2]));
        }), !i.length && t.key && i.push(t.key + "="), i.join("&");
    }, toArray: function (t) {
        var r = this._getItemsAsjQuery(t && t.connected), i = [];
        return t = t || {}, r.each(function () {
            i.push(n(t.item || this).attr(t.attribute || "id") || "");
        }), i;
    }, _intersectsWith: function (n) {
        var t = this.positionAbs.left, h = t + this.helperProportions.width, i = this.positionAbs.top, c = i + this.helperProportions.height, r = n.left, f = r + n.width, u = n.top, e = u + n.height, o = this.offset.click.top, s = this.offset.click.left, l = "x" === this.options.axis || i + o > u && e > i + o, a = "y" === this.options.axis || t + s > r && f > t + s, v = l && a;
        return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > n[this.floating ? "width" : "height"] ? v : t + this.helperProportions.width / 2 > r && f > h - this.helperProportions.width / 2 && i + this.helperProportions.height / 2 > u && e > c - this.helperProportions.height / 2;
    }, _intersectsWithPointer: function (n) {
        var r = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, n.top, n.height), u = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, n.left, n.width), f = r && u, t = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection();
        return f ? this.floating ? i && "right" === i || "down" === t ? 2 : 1 : t && ("down" === t ? 2 : 1) : !1;
    }, _intersectsWithSides: function (n) {
        var r = this._isOverAxis(this.positionAbs.top + this.offset.click.top, n.top + n.height / 2, n.height), u = this._isOverAxis(this.positionAbs.left + this.offset.click.left, n.left + n.width / 2, n.width), t = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection();
        return this.floating && i ? "right" === i && u || "left" === i && !u : t && ("down" === t && r || "up" === t && !r);
    }, _getDragVerticalDirection: function () {
        var n = this.positionAbs.top - this.lastPositionAbs.top;
        return 0 !== n && (n > 0 ? "down" : "up");
    }, _getDragHorizontalDirection: function () {
        var n = this.positionAbs.left - this.lastPositionAbs.left;
        return 0 !== n && (n > 0 ? "right" : "left");
    }, refresh: function (n) {
        return this._refreshItems(n), this._setHandleClassName(), this.refreshPositions(), this;
    }, _connectWith: function () {
        var n = this.options;
        return n.connectWith.constructor === String ? [n.connectWith] : n.connectWith;
    }, _getItemsAsjQuery: function (t) {
        function h() {
            s.push(this);
        }
        var r, u, e, i, s = [], f = [], o = this._connectWith();
        if (o && t)
            for (r = o.length - 1; r >= 0; r--)
                for (e = n(o[r]), u = e.length - 1; u >= 0; u--)
                    i = n.data(e[u], this.widgetFullName), i && i !== this && !i.options.disabled && f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element) : n(i.options.items, i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), i]);
        for (f.push([n.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : n(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), r = f.length - 1; r >= 0; r--)
            f[r][0].each(h);
        return n(s);
    }, _removeCurrentsFromItems: function () {
        var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
        this.items = n.grep(this.items, function (n) {
            for (var i = 0; t.length > i; i++)
                if (t[i] === n.item[0])
                    return !1;
            return !0;
        });
    }, _refreshItems: function (t) {
        this.items = [];
        this.containers = [this];
        var r, u, e, i, o, s, h, l, a = this.items, f = [[n.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, { item: this.currentItem }) : n(this.options.items, this.element), this]], c = this._connectWith();
        if (c && this.ready)
            for (r = c.length - 1; r >= 0; r--)
                for (e = n(c[r]), u = e.length - 1; u >= 0; u--)
                    i = n.data(e[u], this.widgetFullName), i && i !== this && !i.options.disabled && (f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element[0], t, { item: this.currentItem }) : n(i.options.items, i.element), i]), this.containers.push(i));
        for (r = f.length - 1; r >= 0; r--)
            for (o = f[r][1], s = f[r][0], u = 0, l = s.length; l > u; u++)
                h = n(s[u]), h.data(this.widgetName + "-item", o), a.push({ item: h, instance: o, width: 0, height: 0, left: 0, top: 0 });
    }, refreshPositions: function (t) {
        this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
        for (var r, f, u, i = this.items.length - 1; i >= 0; i--)
            r = this.items[i], r.instance !== this.currentContainer && this.currentContainer && r.item[0] !== this.currentItem[0] || (f = this.options.toleranceElement ? n(this.options.toleranceElement, r.item) : r.item, t || (r.width = f.outerWidth(), r.height = f.outerHeight()), u = f.offset(), r.left = u.left, r.top = u.top);
        if (this.options.custom && this.options.custom.refreshContainers)
            this.options.custom.refreshContainers.call(this);
        else
            for (i = this.containers.length - 1; i >= 0; i--)
                u = this.containers[i].element.offset(), this.containers[i].containerCache.left = u.left, this.containers[i].containerCache.top = u.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
        return this;
    }, _createPlaceholder: function (t) {
        t = t || this;
        var r, i = t.options;
        i.placeholder && i.placeholder.constructor !== String || (r = i.placeholder, i.placeholder = { element: function () {
            var u = t.currentItem[0].nodeName.toLowerCase(), i = n("<" + u + ">", t.document[0]).addClass(r || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
            return "tr" === u ? t.currentItem.children().each(function () {
                n("<td>&#160;<\/td>", t.document[0]).attr("colspan", n(this).attr("colspan") || 1).appendTo(i);
            }) : "img" === u && i.attr("src", t.currentItem.attr("src")), r || i.css("visibility", "hidden"), i;
        }, update: function (n, u) {
            (!r || i.forcePlaceholderSize) && (u.height() || u.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), u.width() || u.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)));
        } });
        t.placeholder = n(i.placeholder.element.call(t.element, t.currentItem));
        t.currentItem.after(t.placeholder);
        i.placeholder.update(t, t.placeholder);
    }, _contactContainers: function (t) {
        for (var u, c, f, a, v, o, l, s, h, e = null, r = null, i = this.containers.length - 1; i >= 0; i--)
            if (!n.contains(this.currentItem[0], this.containers[i].element[0]))
                if (this._intersectsWith(this.containers[i].containerCache)) {
                    if (e && n.contains(this.containers[i].element[0], e.element[0]))
                        continue;
                    e = this.containers[i];
                    r = i;
                }
                else
                    this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0);
        if (e)
            if (1 === this.containers.length)
                this.containers[r].containerCache.over || (this.containers[r]._trigger("over", t, this._uiHash(this)), this.containers[r].containerCache.over = 1);
            else {
                for (c = 1e4, f = null, s = e.floating || this._isFloating(this.currentItem), a = s ? "left" : "top", v = s ? "width" : "height", h = s ? "clientX" : "clientY", u = this.items.length - 1; u >= 0; u--)
                    n.contains(this.containers[r].element[0], this.items[u].item[0]) && this.items[u].item[0] !== this.currentItem[0] && (o = this.items[u].item.offset()[a], l = !1, t[h] - o > this.items[u][v] / 2 && (l = !0), c > Math.abs(t[h] - o) && (c = Math.abs(t[h] - o), f = this.items[u], this.direction = l ? "up" : "down"));
                if (!f && !this.options.dropOnEmpty)
                    return;
                if (this.currentContainer === this.containers[r])
                    return;
                f ? this._rearrange(t, f, null, !0) : this._rearrange(t, null, this.containers[r].element, !0);
                this._trigger("change", t, this._uiHash());
                this.containers[r]._trigger("change", t, this._uiHash(this));
                this.currentContainer = this.containers[r];
                this.options.placeholder.update(this.currentContainer, this.placeholder);
                this.containers[r]._trigger("over", t, this._uiHash(this));
                this.containers[r].containerCache.over = 1;
            }
    }, _createHelper: function (t) {
        var r = this.options, i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === r.helper ? this.currentItem.clone() : this.currentItem;
        return i.parents("body").length || n("parent" !== r.appendTo ? r.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), (!i[0].style.width || r.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || r.forceHelperSize) && i.height(this.currentItem.height()), i;
    }, _adjustOffsetFromHelper: function (t) {
        "string" == typeof t && (t = t.split(" "));
        n.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 });
        "left" in t && (this.offset.click.left = t.left + this.margins.left);
        "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
        "top" in t && (this.offset.click.top = t.top + this.margins.top);
        "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
    }, _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var t = this.offsetParent.offset();
        return "absolute" === this.cssPosition && this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && n.ui.ie) && (t = { top: 0, left: 0 }), { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) };
    }, _getRelativeOffset: function () {
        if ("relative" === this.cssPosition) {
            var n = this.currentItem.position();
            return { top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() };
        }
        return { top: 0, left: 0 };
    }, _cacheMargins: function () {
        this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 };
    }, _cacheHelperProportions: function () {
        this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
    }, _setContainment: function () {
        var t, r, u, i = this.options;
        "parent" === i.containment && (i.containment = this.helper[0].parentNode);
        ("document" === i.containment || "window" === i.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, n("document" === i.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (n("document" === i.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]);
        /^(document|window|parent)$/.test(i.containment) || (t = n(i.containment)[0], r = n(i.containment).offset(), u = "hidden" !== n(t).css("overflow"), this.containment = [r.left + (parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (u ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (u ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]);
    }, _convertPositionTo: function (t, i) {
        i || (i = this.position);
        var r = "absolute" === t ? 1 : -1, u = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, f = /(html|body)/i.test(u[0].tagName);
        return { top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r, left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r };
    }, _generatePosition: function (t) {
        var r, u, i = this.options, f = t.pageX, e = t.pageY, o = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, s = /(html|body)/i.test(o[0].tagName);
        return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (e = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (e = this.containment[3] + this.offset.click.top)), i.grid && (r = this.originalPageY + Math.round((e - this.originalPageY) / i.grid[1]) * i.grid[1], e = this.containment ? r - this.offset.click.top >= this.containment[1] && r - this.offset.click.top <= this.containment[3] ? r : r - this.offset.click.top >= this.containment[1] ? r - i.grid[1] : r + i.grid[1] : r, u = this.originalPageX + Math.round((f - this.originalPageX) / i.grid[0]) * i.grid[0], f = this.containment ? u - this.offset.click.left >= this.containment[0] && u - this.offset.click.left <= this.containment[2] ? u : u - this.offset.click.left >= this.containment[0] ? u - i.grid[0] : u + i.grid[0] : u)), { top: e - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : o.scrollTop()), left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : o.scrollLeft()) };
    }, _rearrange: function (n, t, i, r) {
        i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling);
        this.counter = this.counter ? ++this.counter : 1;
        var u = this.counter;
        this._delay(function () {
            u === this.counter && this.refreshPositions(!r);
        });
    }, _clear: function (n, t) {
        function u(n, t, i) {
            return function (r) {
                i._trigger(n, r, t._uiHash(t));
            };
        }
        this.reverting = !1;
        var i, r = [];
        if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
            for (i in this._storedCSS)
                ("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
            this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
        }
        else
            this.currentItem.show();
        for (this.fromOutside && !t && r.push(function (n) {
            this._trigger("receive", n, this._uiHash(this.fromOutside));
        }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || r.push(function (n) {
            this._trigger("update", n, this._uiHash());
        }), this !== this.currentContainer && (t || (r.push(function (n) {
            this._trigger("remove", n, this._uiHash());
        }), r.push(function (n) {
            return function (t) {
                n._trigger("receive", t, this._uiHash(this));
            };
        }.call(this, this.currentContainer)), r.push(function (n) {
            return function (t) {
                n._trigger("update", t, this._uiHash(this));
            };
        }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--)
            t || r.push(u("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (r.push(u("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
        if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
            if (!t) {
                for (this._trigger("beforeStop", n, this._uiHash()), i = 0; r.length > i; i++)
                    r[i].call(this, n);
                this._trigger("stop", n, this._uiHash());
            }
            return this.fromOutside = !1, !1;
        }
        if (t || this._trigger("beforeStop", n, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !t) {
            for (i = 0; r.length > i; i++)
                r[i].call(this, n);
            this._trigger("stop", n, this._uiHash());
        }
        return this.fromOutside = !1, !0;
    }, _trigger: function () {
        n.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
    }, _uiHash: function (t) {
        var i = t || this;
        return { helper: i.helper, placeholder: i.placeholder || n([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: t ? t.element : null };
    } });
    n.widget("ui.accordion", { version: "1.11.1", options: { active: 0, animate: {}, collapsible: !1, event: "click", header: "> li > :first-child,> :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null }, hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" }, showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" }, _create: function () {
        var t = this.options;
        this.prevShow = this.prevHide = n();
        this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
        t.collapsible || t.active !== !1 && null != t.active || (t.active = 0);
        this._processPanels();
        0 > t.active && (t.active += this.headers.length);
        this._refresh();
    }, _getCreateEventData: function () {
        return { header: this.active, panel: this.active.length ? this.active.next() : n() };
    }, _createIcons: function () {
        var t = this.options.icons;
        t && (n("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"));
    }, _destroyIcons: function () {
        this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove();
    }, _destroy: function () {
        var n;
        this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
        this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId();
        this._destroyIcons();
        n = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId();
        "content" !== this.options.heightStyle && n.css("height", "");
    }, _setOption: function (n, t) {
        return "active" === n ? (this._activate(t), void 0) : ("event" === n && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(n, t), "collapsible" !== n || t || this.options.active !== !1 || this._activate(0), "icons" === n && (this._destroyIcons(), t && this._createIcons()), "disabled" === n && (this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)), void 0);
    }, _keydown: function (t) {
        if (!t.altKey && !t.ctrlKey) {
            var i = n.ui.keyCode, u = this.headers.length, f = this.headers.index(t.target), r = !1;
            switch (t.keyCode) {
                case i.RIGHT:
                case i.DOWN:
                    r = this.headers[(f + 1) % u];
                    break;
                case i.LEFT:
                case i.UP:
                    r = this.headers[(f - 1 + u) % u];
                    break;
                case i.SPACE:
                case i.ENTER:
                    this._eventHandler(t);
                    break;
                case i.HOME:
                    r = this.headers[0];
                    break;
                case i.END: r = this.headers[u - 1];
            }
            r && (n(t.target).attr("tabIndex", -1), n(r).attr("tabIndex", 0), r.focus(), t.preventDefault());
        }
    }, _panelKeyDown: function (t) {
        t.keyCode === n.ui.keyCode.UP && t.ctrlKey && n(t.currentTarget).prev().focus();
    }, refresh: function () {
        var t = this.options;
        this._processPanels();
        t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = n()) : t.active === !1 ? this._activate(0) : this.active.length && !n.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = n()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active);
        this._destroyIcons();
        this._refresh();
    }, _processPanels: function () {
        this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all");
        this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide();
    }, _refresh: function () {
        var t, i = this.options, r = i.heightStyle, u = this.element.parent();
        this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
        this.active.next().addClass("ui-accordion-content-active").show();
        this.headers.attr("role", "tab").each(function () {
            var t = n(this), r = t.uniqueId().attr("id"), i = t.next(), u = i.uniqueId().attr("id");
            t.attr("aria-controls", u);
            i.attr("aria-labelledby", r);
        }).next().attr("role", "tabpanel");
        this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide();
        this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0);
        this._createIcons();
        this._setupEvents(i.event);
        "fill" === r ? (t = u.height(), this.element.siblings(":visible").each(function () {
            var i = n(this), r = i.css("position");
            "absolute" !== r && "fixed" !== r && (t -= i.outerHeight(!0));
        }), this.headers.each(function () {
            t -= n(this).outerHeight(!0);
        }), this.headers.next().each(function () {
            n(this).height(Math.max(0, t - n(this).innerHeight() + n(this).height()));
        }).css("overflow", "auto")) : "auto" === r && (t = 0, this.headers.next().each(function () {
            t = Math.max(t, n(this).css("height", "").height());
        }).height(t));
    }, _activate: function (t) {
        var i = this._findActive(t)[0];
        i !== this.active[0] && (i = i || this.active[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: n.noop }));
    }, _findActive: function (t) {
        return "number" == typeof t ? this.headers.eq(t) : n();
    }, _setupEvents: function (t) {
        var i = { keydown: "_keydown" };
        t && n.each(t.split(" "), function (n, t) {
            i[t] = "_eventHandler";
        });
        this._off(this.headers.add(this.headers.next()));
        this._on(this.headers, i);
        this._on(this.headers.next(), { keydown: "_panelKeyDown" });
        this._hoverable(this.headers);
        this._focusable(this.headers);
    }, _eventHandler: function (t) {
        var i = this.options, u = this.active, r = n(t.currentTarget), f = r[0] === u[0], e = f && i.collapsible, s = e ? n() : r.next(), h = u.next(), o = { oldHeader: u, oldPanel: h, newHeader: e ? n() : r, newPanel: s };
        t.preventDefault();
        f && !i.collapsible || this._trigger("beforeActivate", t, o) === !1 || (i.active = e ? !1 : this.headers.index(r), this.active = f ? n() : r, this._toggle(o), u.removeClass("ui-accordion-header-active ui-state-active"), i.icons && u.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), f || (r.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && r.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), r.next().addClass("ui-accordion-content-active")));
    }, _toggle: function (t) {
        var r = t.newPanel, i = this.prevShow.length ? this.prevShow : t.oldPanel;
        this.prevShow.add(this.prevHide).stop(!0, !0);
        this.prevShow = r;
        this.prevHide = i;
        this.options.animate ? this._animate(r, i, t) : (i.hide(), r.show(), this._toggleComplete(t));
        i.attr({ "aria-hidden": "true" });
        i.prev().attr("aria-selected", "false");
        r.length && i.length ? i.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : r.length && this.headers.filter(function () {
            return 0 === n(this).attr("tabIndex");
        }).attr("tabIndex", -1);
        r.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", tabIndex: 0, "aria-expanded": "true" });
    }, _animate: function (n, t, i) {
        var h, r, u, c = this, o = 0, l = n.length && (!t.length || n.index() < t.index()), e = this.options.animate || {}, f = l && e.down || e, s = function () {
            c._toggleComplete(i);
        };
        return "number" == typeof f && (u = f), "string" == typeof f && (r = f), r = r || f.easing || e.easing, u = u || f.duration || e.duration, t.length ? n.length ? (h = n.show().outerHeight(), t.animate(this.hideProps, { duration: u, easing: r, step: function (n, t) {
            t.now = Math.round(n);
        } }), n.hide().animate(this.showProps, { duration: u, easing: r, complete: s, step: function (n, i) {
            i.now = Math.round(n);
            "height" !== i.prop ? o += i.now : "content" !== c.options.heightStyle && (i.now = Math.round(h - t.outerHeight() - o), o = 0);
        } }), void 0) : t.animate(this.hideProps, u, r, s) : n.animate(this.showProps, u, r, s);
    }, _toggleComplete: function (n) {
        var t = n.oldPanel;
        t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
        t.length && (t.parent()[0].className = t.parent()[0].className);
        this._trigger("activate", null, n);
    } });
    n.widget("ui.menu", { version: "1.11.1", defaultElement: "<ul>", delay: 300, options: { icons: { submenu: "ui-icon-carat-1-e" }, items: "> *", menus: "ul", position: { my: "left-1 top", at: "right top" }, role: "menu", blur: null, focus: null, select: null }, _create: function () {
        this.activeMenu = this.element;
        this.mouseHandled = !1;
        this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({ role: this.options.role, tabIndex: 0 });
        this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true");
        this._on({ "mousedown .ui-menu-item": function (n) {
            n.preventDefault();
        }, "click .ui-menu-item": function (t) {
            var i = n(t.target);
            !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && n(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
        }, "mouseenter .ui-menu-item": function (t) {
            var i = n(t.currentTarget);
            i.siblings(".ui-state-active").removeClass("ui-state-active");
            this.focus(t, i);
        }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (n, t) {
            var i = this.active || this.element.find(this.options.items).eq(0);
            t || this.focus(n, i);
        }, blur: function (t) {
            this._delay(function () {
                n.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t);
            });
        }, keydown: "_keydown" });
        this.refresh();
        this._on(this.document, { click: function (n) {
            this._closeOnDocumentClick(n) && this.collapseAll(n);
            this.mouseHandled = !1;
        } });
    }, _destroy: function () {
        this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
        this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
            var t = n(this);
            t.data("ui-menu-submenu-carat") && t.remove();
        });
        this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content");
    }, _keydown: function (t) {
        function o(n) {
            return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        }
        var i, f, r, e, u, s = !0;
        switch (t.keyCode) {
            case n.ui.keyCode.PAGE_UP:
                this.previousPage(t);
                break;
            case n.ui.keyCode.PAGE_DOWN:
                this.nextPage(t);
                break;
            case n.ui.keyCode.HOME:
                this._move("first", "first", t);
                break;
            case n.ui.keyCode.END:
                this._move("last", "last", t);
                break;
            case n.ui.keyCode.UP:
                this.previous(t);
                break;
            case n.ui.keyCode.DOWN:
                this.next(t);
                break;
            case n.ui.keyCode.LEFT:
                this.collapse(t);
                break;
            case n.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                break;
            case n.ui.keyCode.ENTER:
            case n.ui.keyCode.SPACE:
                this._activate(t);
                break;
            case n.ui.keyCode.ESCAPE:
                this.collapse(t);
                break;
            default:
                s = !1;
                f = this.previousFilter || "";
                r = String.fromCharCode(t.keyCode);
                e = !1;
                clearTimeout(this.filterTimer);
                r === f ? e = !0 : r = f + r;
                u = RegExp("^" + o(r), "i");
                i = this.activeMenu.find(this.options.items).filter(function () {
                    return u.test(n(this).text());
                });
                i = e && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i;
                i.length || (r = String.fromCharCode(t.keyCode), u = RegExp("^" + o(r), "i"), i = this.activeMenu.find(this.options.items).filter(function () {
                    return u.test(n(this).text());
                }));
                i.length ? (this.focus(t, i), i.length > 1 ? (this.previousFilter = r, this.filterTimer = this._delay(function () {
                    delete this.previousFilter;
                }, 1e3)) : delete this.previousFilter) : delete this.previousFilter;
        }
        s && t.preventDefault();
    }, _activate: function (n) {
        this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(n) : this.select(n));
    }, refresh: function () {
        var i, t, u = this, f = this.options.icons.submenu, r = this.element.find(this.options.menus);
        this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length);
        r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function () {
            var t = n(this), i = t.parent(), r = n("<span>").addClass("ui-menu-icon ui-icon " + f).data("ui-menu-submenu-carat", !0);
            i.attr("aria-haspopup", "true").prepend(r);
            t.attr("aria-labelledby", i.attr("id"));
        });
        i = r.add(this.element);
        t = i.find(this.options.items);
        t.not(".ui-menu-item").each(function () {
            var t = n(this);
            u._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider");
        });
        t.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({ tabIndex: -1, role: this._itemRole() });
        t.filter(".ui-state-disabled").attr("aria-disabled", "true");
        this.active && !n.contains(this.element[0], this.active[0]) && this.blur();
    }, _itemRole: function () {
        return { menu: "menuitem", listbox: "option" }[this.options.role];
    }, _setOption: function (n, t) {
        "icons" === n && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu);
        "disabled" === n && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t);
        this._super(n, t);
    }, focus: function (n, t) {
        var i, r;
        this.blur(n, n && "focus" === n.type);
        this._scrollIntoView(t);
        this.active = t.first();
        r = this.active.addClass("ui-state-focus").removeClass("ui-state-active");
        this.options.role && this.element.attr("aria-activedescendant", r.attr("id"));
        this.active.parent().closest(".ui-menu-item").addClass("ui-state-active");
        n && "keydown" === n.type ? this._close() : this.timer = this._delay(function () {
            this._close();
        }, this.delay);
        i = t.children(".ui-menu");
        i.length && n && /^mouse/.test(n.type) && this._startOpening(i);
        this.activeMenu = t.parent();
        this._trigger("focus", n, { item: t });
    }, _scrollIntoView: function (t) {
        var e, o, i, r, u, f;
        this._hasScroll() && (e = parseFloat(n.css(this.activeMenu[0], "borderTopWidth")) || 0, o = parseFloat(n.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - e - o, r = this.activeMenu.scrollTop(), u = this.activeMenu.height(), f = t.outerHeight(), 0 > i ? this.activeMenu.scrollTop(r + i) : i + f > u && this.activeMenu.scrollTop(r + i - u + f));
    }, blur: function (n, t) {
        t || clearTimeout(this.timer);
        this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", n, { item: this.active }));
    }, _startOpening: function (n) {
        clearTimeout(this.timer);
        "true" === n.attr("aria-hidden") && (this.timer = this._delay(function () {
            this._close();
            this._open(n);
        }, this.delay));
    }, _open: function (t) {
        var i = n.extend({ of: this.active }, this.options.position);
        clearTimeout(this.timer);
        this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true");
        t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
    }, collapseAll: function (t, i) {
        clearTimeout(this.timer);
        this.timer = this._delay(function () {
            var r = i ? this.element : n(t && t.target).closest(this.element.find(".ui-menu"));
            r.length || (r = this.element);
            this._close(r);
            this.blur(t);
            this.activeMenu = r;
        }, this.delay);
    }, _close: function (n) {
        n || (n = this.active ? this.active.parent() : this.element);
        n.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active");
    }, _closeOnDocumentClick: function (t) {
        return !n(t.target).closest(".ui-menu").length;
    }, _isDivider: function (n) {
        return !/[^\-\u2014\u2013\s]/.test(n.text());
    }, collapse: function (n) {
        var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
        t && t.length && (this._close(), this.focus(n, t));
    }, expand: function (n) {
        var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
        t && t.length && (this._open(t.parent()), this._delay(function () {
            this.focus(n, t);
        }));
    }, next: function (n) {
        this._move("next", "first", n);
    }, previous: function (n) {
        this._move("prev", "last", n);
    }, isFirstItem: function () {
        return this.active && !this.active.prevAll(".ui-menu-item").length;
    }, isLastItem: function () {
        return this.active && !this.active.nextAll(".ui-menu-item").length;
    }, _move: function (n, t, i) {
        var r;
        this.active && (r = "first" === n || "last" === n ? this.active["first" === n ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[n + "All"](".ui-menu-item").eq(0));
        r && r.length && this.active || (r = this.activeMenu.find(this.options.items)[t]());
        this.focus(i, r);
    }, nextPage: function (t) {
        var i, r, u;
        return this.active ? (this.isLastItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
            return i = n(this), 0 > i.offset().top - r - u;
        }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(t), void 0);
    }, previousPage: function (t) {
        var i, r, u;
        return this.active ? (this.isFirstItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
            return i = n(this), i.offset().top - r + u > 0;
        }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(t), void 0);
    }, _hasScroll: function () {
        return this.element.outerHeight() < this.element.prop("scrollHeight");
    }, select: function (t) {
        this.active = this.active || n(t.target).closest(".ui-menu-item");
        var i = { item: this.active };
        this.active.has(".ui-menu").length || this.collapseAll(t, !0);
        this._trigger("select", t, i);
    } });
    n.widget("ui.autocomplete", { version: "1.11.1", defaultElement: "<input>", options: { appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null }, requestIndex: 0, pending: 0, _create: function () {
        var t, i, r, u = this.element[0].nodeName.toLowerCase(), f = "textarea" === u, e = "input" === u;
        this.isMultiLine = f ? !0 : e ? !1 : this.element.prop("isContentEditable");
        this.valueMethod = this.element[f || e ? "val" : "text"];
        this.isNewMenu = !0;
        this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
        this._on(this.element, { keydown: function (u) {
            if (this.element.prop("readOnly"))
                return t = !0, r = !0, i = !0, void 0;
            t = !1;
            r = !1;
            i = !1;
            var f = n.ui.keyCode;
            switch (u.keyCode) {
                case f.PAGE_UP:
                    t = !0;
                    this._move("previousPage", u);
                    break;
                case f.PAGE_DOWN:
                    t = !0;
                    this._move("nextPage", u);
                    break;
                case f.UP:
                    t = !0;
                    this._keyEvent("previous", u);
                    break;
                case f.DOWN:
                    t = !0;
                    this._keyEvent("next", u);
                    break;
                case f.ENTER:
                    this.menu.active && (t = !0, u.preventDefault(), this.menu.select(u));
                    break;
                case f.TAB:
                    this.menu.active && this.menu.select(u);
                    break;
                case f.ESCAPE:
                    this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(u), u.preventDefault());
                    break;
                default:
                    i = !0;
                    this._searchTimeout(u);
            }
        }, keypress: function (r) {
            if (t)
                return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && r.preventDefault(), void 0;
            if (!i) {
                var u = n.ui.keyCode;
                switch (r.keyCode) {
                    case u.PAGE_UP:
                        this._move("previousPage", r);
                        break;
                    case u.PAGE_DOWN:
                        this._move("nextPage", r);
                        break;
                    case u.UP:
                        this._keyEvent("previous", r);
                        break;
                    case u.DOWN: this._keyEvent("next", r);
                }
            }
        }, input: function (n) {
            return r ? (r = !1, n.preventDefault(), void 0) : (this._searchTimeout(n), void 0);
        }, focus: function () {
            this.selectedItem = null;
            this.previous = this._value();
        }, blur: function (n) {
            return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(n), this._change(n), void 0);
        } });
        this._initSource();
        this.menu = n("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance");
        this._on(this.menu.element, { mousedown: function (t) {
            t.preventDefault();
            this.cancelBlur = !0;
            this._delay(function () {
                delete this.cancelBlur;
            });
            var i = this.menu.element[0];
            n(t.target).closest(".ui-menu-item").length || this._delay(function () {
                var t = this;
                this.document.one("mousedown", function (r) {
                    r.target === t.element[0] || r.target === i || n.contains(i, r.target) || t.close();
                });
            });
        }, menufocus: function (t, i) {
            var r, u;
            return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () {
                n(t.target).trigger(t.originalEvent);
            }), void 0) : (u = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, { item: u }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(u.value), r = i.item.attr("aria-label") || u.value, r && n.trim(r).length && (this.liveRegion.children().hide(), n("<div>").text(r).appendTo(this.liveRegion)), void 0);
        }, menuselect: function (n, t) {
            var i = t.item.data("ui-autocomplete-item"), r = this.previous;
            this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r, this._delay(function () {
                this.previous = r;
                this.selectedItem = i;
            }));
            !1 !== this._trigger("select", n, { item: i }) && this._value(i.value);
            this.term = this._value();
            this.close(n);
            this.selectedItem = i;
        } });
        this.liveRegion = n("<span>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);
        this._on(this.window, { beforeunload: function () {
            this.element.removeAttr("autocomplete");
        } });
    }, _destroy: function () {
        clearTimeout(this.searching);
        this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
        this.menu.element.remove();
        this.liveRegion.remove();
    }, _setOption: function (n, t) {
        this._super(n, t);
        "source" === n && this._initSource();
        "appendTo" === n && this.menu.element.appendTo(this._appendTo());
        "disabled" === n && t && this.xhr && this.xhr.abort();
    }, _appendTo: function () {
        var t = this.options.appendTo;
        return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t;
    }, _initSource: function () {
        var i, r, t = this;
        n.isArray(this.options.source) ? (i = this.options.source, this.source = function (t, r) {
            r(n.ui.autocomplete.filter(i, t.term));
        }) : "string" == typeof this.options.source ? (r = this.options.source, this.source = function (i, u) {
            t.xhr && t.xhr.abort();
            t.xhr = n.ajax({ url: r, data: i, dataType: "json", success: function (n) {
                u(n);
            }, error: function () {
                u([]);
            } });
        }) : this.source = this.options.source;
    }, _searchTimeout: function (n) {
        clearTimeout(this.searching);
        this.searching = this._delay(function () {
            var t = this.term === this._value(), i = this.menu.element.is(":visible"), r = n.altKey || n.ctrlKey || n.metaKey || n.shiftKey;
            t && (!t || i || r) || (this.selectedItem = null, this.search(null, n));
        }, this.options.delay);
    }, search: function (n, t) {
        return n = null != n ? n : this._value(), this.term = this._value(), n.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(n) : void 0;
    }, _search: function (n) {
        this.pending++;
        this.element.addClass("ui-autocomplete-loading");
        this.cancelSearch = !1;
        this.source({ term: n }, this._response());
    }, _response: function () {
        var t = ++this.requestIndex;
        return n.proxy(function (n) {
            t === this.requestIndex && this.__response(n);
            this.pending--;
            this.pending || this.element.removeClass("ui-autocomplete-loading");
        }, this);
    }, __response: function (n) {
        n && (n = this._normalize(n));
        this._trigger("response", null, { content: n });
        !this.options.disabled && n && n.length && !this.cancelSearch ? (this._suggest(n), this._trigger("open")) : this._close();
    }, close: function (n) {
        this.cancelSearch = !0;
        this._close(n);
    }, _close: function (n) {
        this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", n));
    }, _change: function (n) {
        this.previous !== this._value() && this._trigger("change", n, { item: this.selectedItem });
    }, _normalize: function (t) {
        return t.length && t[0].label && t[0].value ? t : n.map(t, function (t) {
            return "string" == typeof t ? { label: t, value: t } : n.extend({}, t, { label: t.label || t.value, value: t.value || t.label });
        });
    }, _suggest: function (t) {
        var i = this.menu.element.empty();
        this._renderMenu(i, t);
        this.isNewMenu = !0;
        this.menu.refresh();
        i.show();
        this._resizeMenu();
        i.position(n.extend({ of: this.element }, this.options.position));
        this.options.autoFocus && this.menu.next();
    }, _resizeMenu: function () {
        var n = this.menu.element;
        n.outerWidth(Math.max(n.width("").outerWidth() + 1, this.element.outerWidth()));
    }, _renderMenu: function (t, i) {
        var r = this;
        n.each(i, function (n, i) {
            r._renderItemData(t, i);
        });
    }, _renderItemData: function (n, t) {
        return this._renderItem(n, t).data("ui-autocomplete-item", t);
    }, _renderItem: function (t, i) {
        return n("<li>").text(i.label).appendTo(t);
    }, _move: function (n, t) {
        return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(n) || this.menu.isLastItem() && /^next/.test(n) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[n](t), void 0) : (this.search(null, t), void 0);
    }, widget: function () {
        return this.menu.element;
    }, _value: function () {
        return this.valueMethod.apply(this.element, arguments);
    }, _keyEvent: function (n, t) {
        (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(n, t), t.preventDefault());
    } });
    n.extend(n.ui.autocomplete, { escapeRegex: function (n) {
        return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    }, filter: function (t, i) {
        var r = RegExp(n.ui.autocomplete.escapeRegex(i), "i");
        return n.grep(t, function (n) {
            return r.test(n.label || n.value || n);
        });
    } });
    n.widget("ui.autocomplete", n.ui.autocomplete, { options: { messages: { noResults: "No search results.", results: function (n) {
        return n + (n > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
    } } }, __response: function (t) {
        var i;
        this._superApply(arguments);
        this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), n("<div>").text(i).appendTo(this.liveRegion));
    } });
    n.ui.autocomplete;
    var e, p = "ui-button ui-widget ui-state-default ui-corner-all", w = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", d = function () {
        var t = n(this);
        setTimeout(function () {
            t.find(":ui-button").button("refresh");
        }, 1);
    }, b = function (t) {
        var i = t.name, r = t.form, u = n([]);
        return i && (i = i.replace(/'/g, "\\'"), u = r ? n(r).find("[name='" + i + "'][type=radio]") : n("[name='" + i + "'][type=radio]", t.ownerDocument).filter(function () {
            return !this.form;
        })), u;
    };
    n.widget("ui.button", { version: "1.11.1", defaultElement: "<button>", options: { disabled: null, text: !0, label: null, icons: { primary: null, secondary: null } }, _create: function () {
        this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, d);
        "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled);
        this._determineButtonType();
        this.hasTitle = !!this.buttonElement.attr("title");
        var i = this, t = this.options, r = "checkbox" === this.type || "radio" === this.type, u = r ? "" : "ui-state-active";
        null === t.label && (t.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html());
        this._hoverable(this.buttonElement);
        this.buttonElement.addClass(p).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
            t.disabled || this === e && n(this).addClass("ui-state-active");
        }).bind("mouseleave" + this.eventNamespace, function () {
            t.disabled || n(this).removeClass(u);
        }).bind("click" + this.eventNamespace, function (n) {
            t.disabled && (n.preventDefault(), n.stopImmediatePropagation());
        });
        this._on({ focus: function () {
            this.buttonElement.addClass("ui-state-focus");
        }, blur: function () {
            this.buttonElement.removeClass("ui-state-focus");
        } });
        r && this.element.bind("change" + this.eventNamespace, function () {
            i.refresh();
        });
        "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
            if (t.disabled)
                return !1;
        }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
            if (t.disabled)
                return !1;
            n(this).addClass("ui-state-active");
            i.buttonElement.attr("aria-pressed", "true");
            var r = i.element[0];
            b(r).not(r).map(function () {
                return n(this).button("widget")[0];
            }).removeClass("ui-state-active").attr("aria-pressed", "false");
        }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
            return t.disabled ? !1 : (n(this).addClass("ui-state-active"), e = this, i.document.one("mouseup", function () {
                e = null;
            }), void 0);
        }).bind("mouseup" + this.eventNamespace, function () {
            return t.disabled ? !1 : (n(this).removeClass("ui-state-active"), void 0);
        }).bind("keydown" + this.eventNamespace, function (i) {
            return t.disabled ? !1 : ((i.keyCode === n.ui.keyCode.SPACE || i.keyCode === n.ui.keyCode.ENTER) && n(this).addClass("ui-state-active"), void 0);
        }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
            n(this).removeClass("ui-state-active");
        }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
            t.keyCode === n.ui.keyCode.SPACE && n(this).click();
        }));
        this._setOption("disabled", t.disabled);
        this._resetButton();
    }, _determineButtonType: function () {
        var n, t, i;
        this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button";
        "checkbox" === this.type || "radio" === this.type ? (n = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = n.find(t), this.buttonElement.length || (n = n.length ? n.siblings() : this.element.siblings(), this.buttonElement = n.filter(t), this.buttonElement.length || (this.buttonElement = n.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element;
    }, widget: function () {
        return this.buttonElement;
    }, _destroy: function () {
        this.element.removeClass("ui-helper-hidden-accessible");
        this.buttonElement.removeClass(p + " ui-state-active " + w).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
        this.hasTitle || this.buttonElement.removeAttr("title");
    }, _setOption: function (n, t) {
        return this._super(n, t), "disabled" === n ? (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), t && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")), void 0) : (this._resetButton(), void 0);
    }, refresh: function () {
        var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
        t !== this.options.disabled && this._setOption("disabled", t);
        "radio" === this.type ? b(this.element[0]).each(function () {
            n(this).is(":checked") ? n(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : n(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false");
        }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"));
    }, _resetButton: function () {
        if ("input" === this.type)
            return this.options.label && this.element.val(this.options.label), void 0;
        var i = this.buttonElement.removeClass(w), f = n("<span><\/span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(i.empty()).text(), t = this.options.icons, u = t.primary && t.secondary, r = [];
        t.primary || t.secondary ? (this.options.text && r.push("ui-button-text-icon" + (u ? "s" : t.primary ? "-primary" : "-secondary")), t.primary && i.prepend("<span class='ui-button-icon-primary ui-icon " + t.primary + "'><\/span>"), t.secondary && i.append("<span class='ui-button-icon-secondary ui-icon " + t.secondary + "'><\/span>"), this.options.text || (r.push(u ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || i.attr("title", n.trim(f)))) : r.push("ui-button-text-only");
        i.addClass(r.join(" "));
    } });
    n.widget("ui.buttonset", { version: "1.11.1", options: { items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)" }, _create: function () {
        this.element.addClass("ui-buttonset");
    }, _init: function () {
        this.refresh();
    }, _setOption: function (n, t) {
        "disabled" === n && this.buttons.button("option", n, t);
        this._super(n, t);
    }, refresh: function () {
        var i = "rtl" === this.element.css("direction"), t = this.element.find(this.options.items), r = t.filter(":ui-button");
        t.not(":ui-button").button();
        r.button("refresh");
        this.buttons = t.map(function () {
            return n(this).button("widget")[0];
        }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(i ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(i ? "ui-corner-left" : "ui-corner-right").end().end();
    }, _destroy: function () {
        this.element.removeClass("ui-buttonset");
        this.buttons.map(function () {
            return n(this).button("widget")[0];
        }).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
    } });
    n.ui.button;
    n.extend(n.ui, { datepicker: { version: "1.11.1" } });
    n.extend(l.prototype, { markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function () {
        return this.dpDiv;
    }, setDefaults: function (n) {
        return r(this._defaults, n || {}), this;
    }, _attachDatepicker: function (t, i) {
        var r, f, u;
        r = t.nodeName.toLowerCase();
        f = "div" === r || "span" === r;
        t.id || (this.uuid += 1, t.id = "dp" + this.uuid);
        u = this._newInst(n(t), f);
        u.settings = n.extend({}, i || {});
        "input" === r ? this._connectDatepicker(t, u) : f && this._inlineDatepicker(t, u);
    }, _newInst: function (t, i) {
        var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
        return { id: r, input: t, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? a(n("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>")) : this.dpDiv };
    }, _connectDatepicker: function (t, i) {
        var r = n(t);
        i.append = n([]);
        i.trigger = n([]);
        r.hasClass(this.markerClassName) || (this._attachments(r, i), r.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), n.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t));
    }, _attachments: function (t, i) {
        var u, r, f, e = this._get(i, "appendText"), o = this._get(i, "isRTL");
        i.append && i.append.remove();
        e && (i.append = n("<span class='" + this._appendClass + "'>" + e + "<\/span>"), t[o ? "before" : "after"](i.append));
        t.unbind("focus", this._showDatepicker);
        i.trigger && i.trigger.remove();
        u = this._get(i, "showOn");
        ("focus" === u || "both" === u) && t.focus(this._showDatepicker);
        ("button" === u || "both" === u) && (r = this._get(i, "buttonText"), f = this._get(i, "buttonImage"), i.trigger = n(this._get(i, "buttonImageOnly") ? n("<img/>").addClass(this._triggerClass).attr({ src: f, alt: r, title: r }) : n("<button type='button'><\/button>").addClass(this._triggerClass).html(f ? n("<img/>").attr({ src: f, alt: r, title: r }) : r)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function () {
            return n.datepicker._datepickerShowing && n.datepicker._lastInput === t[0] ? n.datepicker._hideDatepicker() : n.datepicker._datepickerShowing && n.datepicker._lastInput !== t[0] ? (n.datepicker._hideDatepicker(), n.datepicker._showDatepicker(t[0])) : n.datepicker._showDatepicker(t[0]), !1;
        }));
    }, _autoSize: function (n) {
        if (this._get(n, "autoSize") && !n.inline) {
            var r, u, f, t, i = new Date(2009, 11, 20), e = this._get(n, "dateFormat");
            e.match(/[DM]/) && (r = function (n) {
                for (u = 0, f = 0, t = 0; n.length > t; t++)
                    n[t].length > u && (u = n[t].length, f = t);
                return f;
            }, i.setMonth(r(this._get(n, e.match(/MM/) ? "monthNames" : "monthNamesShort"))), i.setDate(r(this._get(n, e.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - i.getDay()));
            n.input.attr("size", this._formatDate(n, i).length);
        }
    }, _inlineDatepicker: function (t, i) {
        var r = n(t);
        r.hasClass(this.markerClassName) || (r.addClass(this.markerClassName).append(i.dpDiv), n.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"));
    }, _dialogDatepicker: function (t, i, u, f, e) {
        var s, h, c, l, a, o = this._dialogInst;
        return o || (this.uuid += 1, s = "dp" + this.uuid, this._dialogInput = n("<input type='text' id='" + s + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), n("body").append(this._dialogInput), o = this._dialogInst = this._newInst(this._dialogInput, !1), o.settings = {}, n.data(this._dialogInput[0], "datepicker", o)), r(o.settings, f || {}), i = i && i.constructor === Date ? this._formatDate(o, i) : i, this._dialogInput.val(i), this._pos = e ? e.length ? e : [e.pageX, e.pageY] : null, this._pos || (h = document.documentElement.clientWidth, c = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, a = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + l, c / 2 - 150 + a]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), o.settings.onSelect = u, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), n.blockUI && n.blockUI(this.dpDiv), n.data(this._dialogInput[0], "datepicker", o), this;
    }, _destroyDatepicker: function (t) {
        var i, r = n(t), u = n.data(t, "datepicker");
        r.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), n.removeData(t, "datepicker"), "input" === i ? (u.append.remove(), u.trigger.remove(), r.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && r.removeClass(this.markerClassName).empty());
    }, _enableDatepicker: function (t) {
        var i, r, u = n(t), f = n.data(t, "datepicker");
        u.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, f.trigger.filter("button").each(function () {
            this.disabled = !1;
        }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === i || "span" === i) && (r = u.children("." + this._inlineClass), r.children().removeClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = n.map(this._disabledInputs, function (n) {
            return n === t ? null : n;
        }));
    }, _disableDatepicker: function (t) {
        var i, r, u = n(t), f = n.data(t, "datepicker");
        u.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, f.trigger.filter("button").each(function () {
            this.disabled = !0;
        }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === i || "span" === i) && (r = u.children("." + this._inlineClass), r.children().addClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = n.map(this._disabledInputs, function (n) {
            return n === t ? null : n;
        }), this._disabledInputs[this._disabledInputs.length] = t);
    }, _isDisabledDatepicker: function (n) {
        if (!n)
            return !1;
        for (var t = 0; this._disabledInputs.length > t; t++)
            if (this._disabledInputs[t] === n)
                return !0;
        return !1;
    }, _getInst: function (t) {
        try {
            return n.data(t, "datepicker");
        }
        catch (i) {
            throw "Missing instance data for this datepicker";
        }
    }, _optionDatepicker: function (t, i, u) {
        var e, h, o, s, f = this._getInst(t);
        return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? n.extend({}, n.datepicker._defaults) : f ? "all" === i ? n.extend({}, f.settings) : this._get(f, i) : null : (e = i || {}, "string" == typeof i && (e = {}, e[i] = u), f && (this._curInst === f && this._hideDatepicker(), h = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(f, "min"), s = this._getMinMaxDate(f, "max"), r(f.settings, e), null !== o && void 0 !== e.dateFormat && void 0 === e.minDate && (f.settings.minDate = this._formatDate(f, o)), null !== s && void 0 !== e.dateFormat && void 0 === e.maxDate && (f.settings.maxDate = this._formatDate(f, s)), "disabled" in e && (e.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(n(t), f), this._autoSize(f), this._setDate(f, h), this._updateAlternate(f), this._updateDatepicker(f)), void 0);
    }, _changeDatepicker: function (n, t, i) {
        this._optionDatepicker(n, t, i);
    }, _refreshDatepicker: function (n) {
        var t = this._getInst(n);
        t && this._updateDatepicker(t);
    }, _setDateDatepicker: function (n, t) {
        var i = this._getInst(n);
        i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i));
    }, _getDateDatepicker: function (n, t) {
        var i = this._getInst(n);
        return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null;
    }, _doKeyDown: function (t) {
        var u, e, f, i = n.datepicker._getInst(t.target), r = !0, o = i.dpDiv.is(".ui-datepicker-rtl");
        if (i._keyEvent = !0, n.datepicker._datepickerShowing)
            switch (t.keyCode) {
                case 9:
                    n.datepicker._hideDatepicker();
                    r = !1;
                    break;
                case 13: return f = n("td." + n.datepicker._dayOverClass + ":not(." + n.datepicker._currentClass + ")", i.dpDiv), f[0] && n.datepicker._selectDay(t.target, i.selectedMonth, i.selectedYear, f[0]), u = n.datepicker._get(i, "onSelect"), u ? (e = n.datepicker._formatDate(i), u.apply(i.input ? i.input[0] : null, [e, i])) : n.datepicker._hideDatepicker(), !1;
                case 27:
                    n.datepicker._hideDatepicker();
                    break;
                case 33:
                    n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 34:
                    n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && n.datepicker._clearDate(t.target);
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && n.datepicker._gotoToday(t.target);
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? 1 : -1, "D");
                    r = t.ctrlKey || t.metaKey;
                    t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, -7, "D");
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? -1 : 1, "D");
                    r = t.ctrlKey || t.metaKey;
                    t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, 7, "D");
                    r = t.ctrlKey || t.metaKey;
                    break;
                default: r = !1;
            }
        else
            36 === t.keyCode && t.ctrlKey ? n.datepicker._showDatepicker(this) : r = !1;
        r && (t.preventDefault(), t.stopPropagation());
    }, _doKeyPress: function (t) {
        var i, r, u = n.datepicker._getInst(t.target);
        if (n.datepicker._get(u, "constrainInput"))
            return (i = n.datepicker._possibleChars(n.datepicker._get(u, "dateFormat")), r = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > r || !i || i.indexOf(r) > -1);
    }, _doKeyUp: function (t) {
        var r, i = n.datepicker._getInst(t.target);
        if (i.input.val() !== i.lastVal)
            try {
                r = n.datepicker.parseDate(n.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, n.datepicker._getFormatConfig(i));
                r && (n.datepicker._setDateFromField(i), n.datepicker._updateAlternate(i), n.datepicker._updateDatepicker(i));
            }
            catch (u) {
            }
        return !0;
    }, _showDatepicker: function (t) {
        if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = n("input", t.parentNode)[0]), !n.datepicker._isDisabledDatepicker(t) && n.datepicker._lastInput !== t) {
            var i, o, s, u, f, e, h;
            i = n.datepicker._getInst(t);
            n.datepicker._curInst && n.datepicker._curInst !== i && (n.datepicker._curInst.dpDiv.stop(!0, !0), i && n.datepicker._datepickerShowing && n.datepicker._hideDatepicker(n.datepicker._curInst.input[0]));
            o = n.datepicker._get(i, "beforeShow");
            s = o ? o.apply(t, [t, i]) : {};
            s !== !1 && (r(i.settings, s), i.lastVal = null, n.datepicker._lastInput = t, n.datepicker._setDateFromField(i), n.datepicker._inDialog && (t.value = ""), n.datepicker._pos || (n.datepicker._pos = n.datepicker._findPos(t), n.datepicker._pos[1] += t.offsetHeight), u = !1, n(t).parents().each(function () {
                return u |= "fixed" === n(this).css("position"), !u;
            }), f = { left: n.datepicker._pos[0], top: n.datepicker._pos[1] }, n.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), n.datepicker._updateDatepicker(i), f = n.datepicker._checkOffset(i, f, u), i.dpDiv.css({ position: n.datepicker._inDialog && n.blockUI ? "static" : u ? "fixed" : "absolute", display: "none", left: f.left + "px", top: f.top + "px" }), i.inline || (e = n.datepicker._get(i, "showAnim"), h = n.datepicker._get(i, "duration"), i.dpDiv.css("z-index", k(n(t)) + 1), n.datepicker._datepickerShowing = !0, n.effects && n.effects.effect[e] ? i.dpDiv.show(e, n.datepicker._get(i, "showOptions"), h) : i.dpDiv[e || "show"](e ? h : null), n.datepicker._shouldFocusInput(i) && i.input.focus(), n.datepicker._curInst = i));
        }
    }, _updateDatepicker: function (t) {
        this.maxRows = 4;
        u = t;
        t.dpDiv.empty().append(this._generateHTML(t));
        this._attachHandlers(t);
        var i, r = this._getNumberOfMonths(t), f = r[1], e = t.dpDiv.find("." + this._dayOverClass + " a");
        e.length > 0 && v.apply(e.get(0));
        t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
        f > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + f).css("width", 17 * f + "em");
        t.dpDiv[(1 !== r[0] || 1 !== r[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi");
        t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
        t === n.datepicker._curInst && n.datepicker._datepickerShowing && n.datepicker._shouldFocusInput(t) && t.input.focus();
        t.yearshtml && (i = t.yearshtml, setTimeout(function () {
            i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml);
            i = t.yearshtml = null;
        }, 0));
    }, _shouldFocusInput: function (n) {
        return n.input && n.input.is(":visible") && !n.input.is(":disabled") && !n.input.is(":focus");
    }, _checkOffset: function (t, i, r) {
        var u = t.dpDiv.outerWidth(), f = t.dpDiv.outerHeight(), h = t.input ? t.input.outerWidth() : 0, o = t.input ? t.input.outerHeight() : 0, e = document.documentElement.clientWidth + (r ? 0 : n(document).scrollLeft()), s = document.documentElement.clientHeight + (r ? 0 : n(document).scrollTop());
        return i.left -= this._get(t, "isRTL") ? u - h : 0, i.left -= r && i.left === t.input.offset().left ? n(document).scrollLeft() : 0, i.top -= r && i.top === t.input.offset().top + o ? n(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + u > e && e > u ? Math.abs(i.left + u - e) : 0), i.top -= Math.min(i.top, i.top + f > s && s > f ? Math.abs(f + o) : 0), i;
    }, _findPos: function (t) {
        for (var i, r = this._getInst(t), u = this._get(r, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || n.expr.filters.hidden(t));)
            t = t[u ? "previousSibling" : "nextSibling"];
        return i = n(t).offset(), [i.left, i.top];
    }, _hideDatepicker: function (t) {
        var r, f, u, e, i = this._curInst;
        !i || t && i !== n.data(t, "datepicker") || this._datepickerShowing && (r = this._get(i, "showAnim"), f = this._get(i, "duration"), u = function () {
            n.datepicker._tidyDialog(i);
        }, n.effects && (n.effects.effect[r] || n.effects[r]) ? i.dpDiv.hide(r, n.datepicker._get(i, "showOptions"), f, u) : i.dpDiv["slideDown" === r ? "slideUp" : "fadeIn" === r ? "fadeOut" : "hide"](r ? f : null, u), r || u(), this._datepickerShowing = !1, e = this._get(i, "onClose"), e && e.apply(i.input ? i.input[0] : null, [i.input ? i.input.val() : "", i]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), n.blockUI && (n.unblockUI(), n("body").append(this.dpDiv))), this._inDialog = !1);
    }, _tidyDialog: function (n) {
        n.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
    }, _checkExternalClick: function (t) {
        if (n.datepicker._curInst) {
            var i = n(t.target), r = n.datepicker._getInst(i[0]);
            (i[0].id === n.datepicker._mainDivId || 0 !== i.parents("#" + n.datepicker._mainDivId).length || i.hasClass(n.datepicker.markerClassName) || i.closest("." + n.datepicker._triggerClass).length || !n.datepicker._datepickerShowing || n.datepicker._inDialog && n.blockUI) && (!i.hasClass(n.datepicker.markerClassName) || n.datepicker._curInst === r) || n.datepicker._hideDatepicker();
        }
    }, _adjustDate: function (t, i, r) {
        var f = n(t), u = this._getInst(f[0]);
        this._isDisabledDatepicker(f[0]) || (this._adjustInstDate(u, i + ("M" === r ? this._get(u, "showCurrentAtPos") : 0), r), this._updateDatepicker(u));
    }, _gotoToday: function (t) {
        var r, u = n(t), i = this._getInst(u[0]);
        this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (r = new Date, i.selectedDay = r.getDate(), i.drawMonth = i.selectedMonth = r.getMonth(), i.drawYear = i.selectedYear = r.getFullYear());
        this._notifyChange(i);
        this._adjustDate(u);
    }, _selectMonthYear: function (t, i, r) {
        var f = n(t), u = this._getInst(f[0]);
        u["selected" + ("M" === r ? "Month" : "Year")] = u["draw" + ("M" === r ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10);
        this._notifyChange(u);
        this._adjustDate(f);
    }, _selectDay: function (t, i, r, u) {
        var f, e = n(t);
        n(u).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0]) || (f = this._getInst(e[0]), f.selectedDay = f.currentDay = n("a", u).html(), f.selectedMonth = f.currentMonth = i, f.selectedYear = f.currentYear = r, this._selectDate(t, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)));
    }, _clearDate: function (t) {
        var i = n(t);
        this._selectDate(i, "");
    }, _selectDate: function (t, i) {
        var u, f = n(t), r = this._getInst(f[0]);
        i = null != i ? i : this._formatDate(r);
        r.input && r.input.val(i);
        this._updateAlternate(r);
        u = this._get(r, "onSelect");
        u ? u.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change");
        r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], "object" != typeof r.input[0] && r.input.focus(), this._lastInput = null);
    }, _updateAlternate: function (t) {
        var i, r, u, f = this._get(t, "altField");
        f && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), u = this.formatDate(i, r, this._getFormatConfig(t)), n(f).each(function () {
            n(this).val(u);
        }));
    }, noWeekends: function (n) {
        var t = n.getDay();
        return [t > 0 && 6 > t, ""];
    }, iso8601Week: function (n) {
        var i, t = new Date(n.getTime());
        return t.setDate(t.getDate() + 4 - (t.getDay() || 7)), i = t.getTime(), t.setMonth(0), t.setDate(1), Math.floor(Math.round((i - t) / 864e5) / 7) + 1;
    }, parseDate: function (t, i, r) {
        if (null == t || null == i)
            throw "Invalid arguments";
        if (i = "object" == typeof i ? "" + i : i + "", "" === i)
            return null;
        for (var a, v, u, f = 0, y = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff, d = "string" != typeof y ? y : (new Date).getFullYear() % 100 + parseInt(y, 10), g = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort, nt = (r ? r.dayNames : null) || this._defaults.dayNames, tt = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort, it = (r ? r.monthNames : null) || this._defaults.monthNames, e = -1, s = -1, h = -1, p = -1, w = !1, l = function (n) {
            var i = t.length > o + 1 && t.charAt(o + 1) === n;
            return i && o++, i;
        }, c = function (n) {
            var u = l(n), r = "@" === n ? 14 : "!" === n ? 20 : "y" === n && u ? 4 : "o" === n ? 3 : 2, e = "y" === n ? r : 1, o = RegExp("^\\d{" + e + "," + r + "}"), t = i.substring(f).match(o);
            if (!t)
                throw "Missing number at position " + f;
            return f += t[0].length, parseInt(t[0], 10);
        }, k = function (t, r, u) {
            var e = -1, o = n.map(l(t) ? u : r, function (n, t) {
                return [[t, n]];
            }).sort(function (n, t) {
                return -(n[1].length - t[1].length);
            });
            if (n.each(o, function (n, t) {
                var r = t[1];
                if (i.substr(f, r.length).toLowerCase() === r.toLowerCase())
                    return (e = t[0], f += r.length, !1);
            }), -1 !== e)
                return e + 1;
            throw "Unknown name at position " + f;
        }, b = function () {
            if (i.charAt(f) !== t.charAt(o))
                throw "Unexpected literal at position " + f;
            f++;
        }, o = 0; t.length > o; o++)
            if (w)
                "'" !== t.charAt(o) || l("'") ? b() : w = !1;
            else
                switch (t.charAt(o)) {
                    case "d":
                        h = c("d");
                        break;
                    case "D":
                        k("D", g, nt);
                        break;
                    case "o":
                        p = c("o");
                        break;
                    case "m":
                        s = c("m");
                        break;
                    case "M":
                        s = k("M", tt, it);
                        break;
                    case "y":
                        e = c("y");
                        break;
                    case "@":
                        u = new Date(c("@"));
                        e = u.getFullYear();
                        s = u.getMonth() + 1;
                        h = u.getDate();
                        break;
                    case "!":
                        u = new Date((c("!") - this._ticksTo1970) / 1e4);
                        e = u.getFullYear();
                        s = u.getMonth() + 1;
                        h = u.getDate();
                        break;
                    case "'":
                        l("'") ? b() : w = !0;
                        break;
                    default: b();
                }
        if (i.length > f && (v = i.substr(f), !/^\s+/.test(v)))
            throw "Extra/unparsed characters found in date: " + v;
        if (-1 === e ? e = (new Date).getFullYear() : 100 > e && (e += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d >= e ? 0 : -100)), p > -1)
            for (s = 1, h = p;;) {
                if (a = this._getDaysInMonth(e, s - 1), a >= h)
                    break;
                s++;
                h -= a;
            }
        if (u = this._daylightSavingAdjust(new Date(e, s - 1, h)), u.getFullYear() !== e || u.getMonth() + 1 !== s || u.getDate() !== h)
            throw "Invalid date";
        return u;
    }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function (n, t, i) {
        if (!t)
            return "";
        var u, h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, c = (i ? i.dayNames : null) || this._defaults.dayNames, l = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, a = (i ? i.monthNames : null) || this._defaults.monthNames, f = function (t) {
            var i = n.length > u + 1 && n.charAt(u + 1) === t;
            return i && u++, i;
        }, e = function (n, t, i) {
            var r = "" + t;
            if (f(n))
                for (; i > r.length;)
                    r = "0" + r;
            return r;
        }, s = function (n, t, i, r) {
            return f(n) ? r[t] : i[t];
        }, r = "", o = !1;
        if (t)
            for (u = 0; n.length > u; u++)
                if (o)
                    "'" !== n.charAt(u) || f("'") ? r += n.charAt(u) : o = !1;
                else
                    switch (n.charAt(u)) {
                        case "d":
                            r += e("d", t.getDate(), 2);
                            break;
                        case "D":
                            r += s("D", t.getDay(), h, c);
                            break;
                        case "o":
                            r += e("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            r += e("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            r += s("M", t.getMonth(), l, a);
                            break;
                        case "y":
                            r += f("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            r += t.getTime();
                            break;
                        case "!":
                            r += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            f("'") ? r += "'" : o = !0;
                            break;
                        default: r += n.charAt(u);
                    }
        return r;
    }, _possibleChars: function (n) {
        for (var i = "", r = !1, u = function (i) {
            var r = n.length > t + 1 && n.charAt(t + 1) === i;
            return r && t++, r;
        }, t = 0; n.length > t; t++)
            if (r)
                "'" !== n.charAt(t) || u("'") ? i += n.charAt(t) : r = !1;
            else
                switch (n.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M": return null;
                    case "'":
                        u("'") ? i += "'" : r = !0;
                        break;
                    default: i += n.charAt(t);
                }
        return i;
    }, _get: function (n, t) {
        return void 0 !== n.settings[t] ? n.settings[t] : this._defaults[t];
    }, _setDateFromField: function (n, t) {
        if (n.input.val() !== n.lastVal) {
            var f = this._get(n, "dateFormat"), r = n.lastVal = n.input ? n.input.val() : null, u = this._getDefaultDate(n), i = u, e = this._getFormatConfig(n);
            try {
                i = this.parseDate(f, r, e) || u;
            }
            catch (o) {
                r = t ? "" : r;
            }
            n.selectedDay = i.getDate();
            n.drawMonth = n.selectedMonth = i.getMonth();
            n.drawYear = n.selectedYear = i.getFullYear();
            n.currentDay = r ? i.getDate() : 0;
            n.currentMonth = r ? i.getMonth() : 0;
            n.currentYear = r ? i.getFullYear() : 0;
            this._adjustInstDate(n);
        }
    }, _getDefaultDate: function (n) {
        return this._restrictMinMax(n, this._determineDate(n, this._get(n, "defaultDate"), new Date));
    }, _determineDate: function (t, i, r) {
        var f = function (n) {
            var t = new Date;
            return t.setDate(t.getDate() + n), t;
        }, e = function (i) {
            try {
                return n.datepicker.parseDate(n.datepicker._get(t, "dateFormat"), i, n.datepicker._getFormatConfig(t));
            }
            catch (h) {
            }
            for (var o = (i.toLowerCase().match(/^c/) ? n.datepicker._getDate(t) : null) || new Date, f = o.getFullYear(), e = o.getMonth(), r = o.getDate(), s = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = s.exec(i); u;) {
                switch (u[2] || "d") {
                    case "d":
                    case "D":
                        r += parseInt(u[1], 10);
                        break;
                    case "w":
                    case "W":
                        r += 7 * parseInt(u[1], 10);
                        break;
                    case "m":
                    case "M":
                        e += parseInt(u[1], 10);
                        r = Math.min(r, n.datepicker._getDaysInMonth(f, e));
                        break;
                    case "y":
                    case "Y":
                        f += parseInt(u[1], 10);
                        r = Math.min(r, n.datepicker._getDaysInMonth(f, e));
                }
                u = s.exec(i);
            }
            return new Date(f, e, r);
        }, u = null == i || "" === i ? r : "string" == typeof i ? e(i) : "number" == typeof i ? isNaN(i) ? r : f(i) : new Date(i.getTime());
        return u = u && "Invalid Date" == "" + u ? r : u, u && (u.setHours(0), u.setMinutes(0), u.setSeconds(0), u.setMilliseconds(0)), this._daylightSavingAdjust(u);
    }, _daylightSavingAdjust: function (n) {
        return n ? (n.setHours(n.getHours() > 12 ? n.getHours() + 2 : 0), n) : null;
    }, _setDate: function (n, t, i) {
        var u = !t, f = n.selectedMonth, e = n.selectedYear, r = this._restrictMinMax(n, this._determineDate(n, t, new Date));
        n.selectedDay = n.currentDay = r.getDate();
        n.drawMonth = n.selectedMonth = n.currentMonth = r.getMonth();
        n.drawYear = n.selectedYear = n.currentYear = r.getFullYear();
        f === n.selectedMonth && e === n.selectedYear || i || this._notifyChange(n);
        this._adjustInstDate(n);
        n.input && n.input.val(u ? "" : this._formatDate(n));
    }, _getDate: function (n) {
        return !n.currentYear || n.input && "" === n.input.val() ? null : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay));
    }, _attachHandlers: function (t) {
        var r = this._get(t, "stepMonths"), i = "#" + t.id.replace(/\\\\/g, "\\");
        t.dpDiv.find("[data-handler]").map(function () {
            var t = { prev: function () {
                n.datepicker._adjustDate(i, -r, "M");
            }, next: function () {
                n.datepicker._adjustDate(i, +r, "M");
            }, hide: function () {
                n.datepicker._hideDatepicker();
            }, today: function () {
                n.datepicker._gotoToday(i);
            }, selectDay: function () {
                return n.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
            }, selectMonth: function () {
                return n.datepicker._selectMonthYear(i, this, "M"), !1;
            }, selectYear: function () {
                return n.datepicker._selectMonthYear(i, this, "Y"), !1;
            } };
            n(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")]);
        });
    }, _generateHTML: function (n) {
        var b, s, rt, h, ut, k, ft, et, ri, c, ot, ui, fi, ei, oi, st, g, si, ht, nt, o, y, ct, p, lt, l, u, at, vt, yt, pt, tt, wt, i, bt, kt, d, a, it, dt = new Date, gt = this._daylightSavingAdjust(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate())), f = this._get(n, "isRTL"), li = this._get(n, "showButtonPanel"), hi = this._get(n, "hideIfNoPrevNext"), ni = this._get(n, "navigationAsDateFormat"), e = this._getNumberOfMonths(n), ai = this._get(n, "showCurrentAtPos"), ci = this._get(n, "stepMonths"), ti = 1 !== e[0] || 1 !== e[1], ii = this._daylightSavingAdjust(n.currentDay ? new Date(n.currentYear, n.currentMonth, n.currentDay) : new Date(9999, 9, 9)), w = this._getMinMaxDate(n, "min"), v = this._getMinMaxDate(n, "max"), t = n.drawMonth - ai, r = n.drawYear;
        if (0 > t && (t += 12, r--), v)
            for (b = this._daylightSavingAdjust(new Date(v.getFullYear(), v.getMonth() - e[0] * e[1] + 1, v.getDate())), b = w && w > b ? w : b; this._daylightSavingAdjust(new Date(r, t, 1)) > b;)
                t--, 0 > t && (t = 11, r--);
        for (n.drawMonth = t, n.drawYear = r, s = this._get(n, "prevText"), s = ni ? this.formatDate(s, this._daylightSavingAdjust(new Date(r, t - ci, 1)), this._getFormatConfig(n)) : s, rt = this._canAdjustMonth(n, -1, r, t) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "e" : "w") + "'>" + s + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "e" : "w") + "'>" + s + "<\/span><\/a>", h = this._get(n, "nextText"), h = ni ? this.formatDate(h, this._daylightSavingAdjust(new Date(r, t + ci, 1)), this._getFormatConfig(n)) : h, ut = this._canAdjustMonth(n, 1, r, t) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "w" : "e") + "'>" + h + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "w" : "e") + "'>" + h + "<\/span><\/a>", k = this._get(n, "currentText"), ft = this._get(n, "gotoCurrent") && n.currentDay ? ii : gt, k = ni ? this.formatDate(k, ft, this._getFormatConfig(n)) : k, et = n.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(n, "closeText") + "<\/button>", ri = li ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (f ? et : "") + (this._isInRange(n, ft) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + k + "<\/button>" : "") + (f ? "" : et) + "<\/div>" : "", c = parseInt(this._get(n, "firstDay"), 10), c = isNaN(c) ? 0 : c, ot = this._get(n, "showWeek"), ui = this._get(n, "dayNames"), fi = this._get(n, "dayNamesMin"), ei = this._get(n, "monthNames"), oi = this._get(n, "monthNamesShort"), st = this._get(n, "beforeShowDay"), g = this._get(n, "showOtherMonths"), si = this._get(n, "selectOtherMonths"), ht = this._getDefaultDate(n), nt = "", y = 0; e[0] > y; y++) {
            for (ct = "", this.maxRows = 4, p = 0; e[1] > p; p++) {
                if (lt = this._daylightSavingAdjust(new Date(r, t, n.selectedDay)), l = " ui-corner-all", u = "", ti) {
                    if (u += "<div class='ui-datepicker-group", e[1] > 1)
                        switch (p) {
                            case 0:
                                u += " ui-datepicker-group-first";
                                l = " ui-corner-" + (f ? "right" : "left");
                                break;
                            case e[1] - 1:
                                u += " ui-datepicker-group-last";
                                l = " ui-corner-" + (f ? "left" : "right");
                                break;
                            default:
                                u += " ui-datepicker-group-middle";
                                l = "";
                        }
                    u += "'>";
                }
                for (u += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + l + "'>" + (/all|left/.test(l) && 0 === y ? f ? ut : rt : "") + (/all|right/.test(l) && 0 === y ? f ? rt : ut : "") + this._generateMonthYearHeader(n, t, r, w, v, y > 0 || p > 0, ei, oi) + "<\/div><table class='ui-datepicker-calendar'><thead><tr>", at = ot ? "<th class='ui-datepicker-week-col'>" + this._get(n, "weekHeader") + "<\/th>" : "", o = 0; 7 > o; o++)
                    vt = (o + c) % 7, at += "<th scope='col'" + ((o + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + ui[vt] + "'>" + fi[vt] + "<\/span><\/th>";
                for (u += at + "<\/tr><\/thead><tbody>", yt = this._getDaysInMonth(r, t), r === n.selectedYear && t === n.selectedMonth && (n.selectedDay = Math.min(n.selectedDay, yt)), pt = (this._getFirstDayOfMonth(r, t) - c + 7) % 7, tt = Math.ceil((pt + yt) / 7), wt = ti ? this.maxRows > tt ? this.maxRows : tt : tt, this.maxRows = wt, i = this._daylightSavingAdjust(new Date(r, t, 1 - pt)), bt = 0; wt > bt; bt++) {
                    for (u += "<tr>", kt = ot ? "<td class='ui-datepicker-week-col'>" + this._get(n, "calculateWeek")(i) + "<\/td>" : "", o = 0; 7 > o; o++)
                        d = st ? st.apply(n.input ? n.input[0] : null, [i]) : [!0, ""], a = i.getMonth() !== t, it = a && !si || !d[0] || w && w > i || v && i > v, kt += "<td class='" + ((o + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (a ? " ui-datepicker-other-month" : "") + (i.getTime() === lt.getTime() && t === n.selectedMonth && n._keyEvent || ht.getTime() === i.getTime() && ht.getTime() === lt.getTime() ? " " + this._dayOverClass : "") + (it ? " " + this._unselectableClass + " ui-state-disabled" : "") + (a && !g ? "" : " " + d[1] + (i.getTime() === ii.getTime() ? " " + this._currentClass : "") + (i.getTime() === gt.getTime() ? " ui-datepicker-today" : "")) + "'" + (a && !g || !d[2] ? "" : " title='" + d[2].replace(/'/g, "&#39;") + "'") + (it ? "" : " data-handler='selectDay' data-event='click' data-month='" + i.getMonth() + "' data-year='" + i.getFullYear() + "'") + ">" + (a && !g ? "&#xa0;" : it ? "<span class='ui-state-default'>" + i.getDate() + "<\/span>" : "<a class='ui-state-default" + (i.getTime() === gt.getTime() ? " ui-state-highlight" : "") + (i.getTime() === ii.getTime() ? " ui-state-active" : "") + (a ? " ui-priority-secondary" : "") + "' href='#'>" + i.getDate() + "<\/a>") + "<\/td>", i.setDate(i.getDate() + 1), i = this._daylightSavingAdjust(i);
                    u += kt + "<\/tr>";
                }
                t++;
                t > 11 && (t = 0, r++);
                u += "<\/tbody><\/table>" + (ti ? "<\/div>" + (e[0] > 0 && p === e[1] - 1 ? "<div class='ui-datepicker-row-break'><\/div>" : "") : "");
                ct += u;
            }
            nt += ct;
        }
        return nt += ri, n._keyEvent = !1, nt;
    }, _generateMonthYearHeader: function (n, t, i, r, u, f, e, o) {
        var k, d, h, v, y, p, s, a, w = this._get(n, "changeMonth"), b = this._get(n, "changeYear"), g = this._get(n, "showMonthAfterYear"), c = "<div class='ui-datepicker-title'>", l = "";
        if (f || !w)
            l += "<span class='ui-datepicker-month'>" + e[t] + "<\/span>";
        else {
            for (k = r && r.getFullYear() === i, d = u && u.getFullYear() === i, l += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; 12 > h; h++)
                (!k || h >= r.getMonth()) && (!d || u.getMonth() >= h) && (l += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + o[h] + "<\/option>");
            l += "<\/select>";
        }
        if (g || (c += l + (!f && w && b ? "" : "&#xa0;")), !n.yearshtml)
            if (n.yearshtml = "", f || !b)
                c += "<span class='ui-datepicker-year'>" + i + "<\/span>";
            else {
                for (v = this._get(n, "yearRange").split(":"), y = (new Date).getFullYear(), p = function (n) {
                    var t = n.match(/c[+\-].*/) ? i + parseInt(n.substring(1), 10) : n.match(/[+\-].*/) ? y + parseInt(n, 10) : parseInt(n, 10);
                    return isNaN(t) ? y : t;
                }, s = p(v[0]), a = Math.max(s, p(v[1] || "")), s = r ? Math.max(s, r.getFullYear()) : s, a = u ? Math.min(a, u.getFullYear()) : a, n.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; a >= s; s++)
                    n.yearshtml += "<option value='" + s + "'" + (s === i ? " selected='selected'" : "") + ">" + s + "<\/option>";
                n.yearshtml += "<\/select>";
                c += n.yearshtml;
                n.yearshtml = null;
            }
        return c += this._get(n, "yearSuffix"), g && (c += (!f && w && b ? "" : "&#xa0;") + l), c + "<\/div>";
    }, _adjustInstDate: function (n, t, i) {
        var u = n.drawYear + ("Y" === i ? t : 0), f = n.drawMonth + ("M" === i ? t : 0), e = Math.min(n.selectedDay, this._getDaysInMonth(u, f)) + ("D" === i ? t : 0), r = this._restrictMinMax(n, this._daylightSavingAdjust(new Date(u, f, e)));
        n.selectedDay = r.getDate();
        n.drawMonth = n.selectedMonth = r.getMonth();
        n.drawYear = n.selectedYear = r.getFullYear();
        ("M" === i || "Y" === i) && this._notifyChange(n);
    }, _restrictMinMax: function (n, t) {
        var i = this._getMinMaxDate(n, "min"), r = this._getMinMaxDate(n, "max"), u = i && i > t ? i : t;
        return r && u > r ? r : u;
    }, _notifyChange: function (n) {
        var t = this._get(n, "onChangeMonthYear");
        t && t.apply(n.input ? n.input[0] : null, [n.selectedYear, n.selectedMonth + 1, n]);
    }, _getNumberOfMonths: function (n) {
        var t = this._get(n, "numberOfMonths");
        return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t;
    }, _getMinMaxDate: function (n, t) {
        return this._determineDate(n, this._get(n, t + "Date"), null);
    }, _getDaysInMonth: function (n, t) {
        return 32 - this._daylightSavingAdjust(new Date(n, t, 32)).getDate();
    }, _getFirstDayOfMonth: function (n, t) {
        return new Date(n, t, 1).getDay();
    }, _canAdjustMonth: function (n, t, i, r) {
        var f = this._getNumberOfMonths(n), u = this._daylightSavingAdjust(new Date(i, r + (0 > t ? t : f[0] * f[1]), 1));
        return 0 > t && u.setDate(this._getDaysInMonth(u.getFullYear(), u.getMonth())), this._isInRange(n, u);
    }, _isInRange: function (n, t) {
        var i, f, e = this._getMinMaxDate(n, "min"), o = this._getMinMaxDate(n, "max"), r = null, u = null, s = this._get(n, "yearRange");
        return s && (i = s.split(":"), f = (new Date).getFullYear(), r = parseInt(i[0], 10), u = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += f), i[1].match(/[+\-].*/) && (u += f)), (!e || t.getTime() >= e.getTime()) && (!o || t.getTime() <= o.getTime()) && (!r || t.getFullYear() >= r) && (!u || u >= t.getFullYear());
    }, _getFormatConfig: function (n) {
        var t = this._get(n, "shortYearCutoff");
        return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), { shortYearCutoff: t, dayNamesShort: this._get(n, "dayNamesShort"), dayNames: this._get(n, "dayNames"), monthNamesShort: this._get(n, "monthNamesShort"), monthNames: this._get(n, "monthNames") };
    }, _formatDate: function (n, t, i, r) {
        t || (n.currentDay = n.selectedDay, n.currentMonth = n.selectedMonth, n.currentYear = n.selectedYear);
        var u = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(r, i, t)) : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay));
        return this.formatDate(this._get(n, "dateFormat"), u, this._getFormatConfig(n));
    } });
    n.fn.datepicker = function (t) {
        if (!this.length)
            return this;
        n.datepicker.initialized || (n(document).mousedown(n.datepicker._checkExternalClick), n.datepicker.initialized = !0);
        0 === n("#" + n.datepicker._mainDivId).length && n("body").append(n.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : this.each(function () {
            "string" == typeof t ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this].concat(i)) : n.datepicker._attachDatepicker(this, t);
        }) : n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i));
    };
    n.datepicker = new l;
    n.datepicker.initialized = !1;
    n.datepicker.uuid = (new Date).getTime();
    n.datepicker.version = "1.11.1";
    n.datepicker;
    n.widget("ui.dialog", { version: "1.11.1", options: { appendTo: "body", autoOpen: !0, buttons: [], closeOnEscape: !0, closeText: "Close", dialogClass: "", draggable: !0, hide: null, height: "auto", maxHeight: null, maxWidth: null, minHeight: 150, minWidth: 150, modal: !1, position: { my: "center", at: "center", of: window, collision: "fit", using: function (t) {
        var i = n(this).css(t).offset().top;
        0 > i && n(this).css("top", t.top - i);
    } }, resizable: !0, show: null, title: null, width: 300, beforeClose: null, close: null, drag: null, dragStart: null, dragStop: null, focus: null, open: null, resize: null, resizeStart: null, resizeStop: null }, sizeRelatedOptions: { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 }, resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 }, _create: function () {
        this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height };
        this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) };
        this.originalTitle = this.element.attr("title");
        this.options.title = this.options.title || this.originalTitle;
        this._createWrapper();
        this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
        this._createTitlebar();
        this._createButtonPane();
        this.options.draggable && n.fn.draggable && this._makeDraggable();
        this.options.resizable && n.fn.resizable && this._makeResizable();
        this._isOpen = !1;
        this._trackFocus();
    }, _init: function () {
        this.options.autoOpen && this.open();
    }, _appendTo: function () {
        var t = this.options.appendTo;
        return t && (t.jquery || t.nodeType) ? n(t) : this.document.find(t || "body").eq(0);
    }, _destroy: function () {
        var n, t = this.originalPosition;
        this._destroyOverlay();
        this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
        this.uiDialog.stop(!0, !0).remove();
        this.originalTitle && this.element.attr("title", this.originalTitle);
        n = t.parent.children().eq(t.index);
        n.length && n[0] !== this.element[0] ? n.before(this.element) : t.parent.append(this.element);
    }, widget: function () {
        return this.uiDialog;
    }, disable: n.noop, enable: n.noop, close: function (t) {
        var i, r = this;
        if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
            if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length)
                try {
                    i = this.document[0].activeElement;
                    i && "body" !== i.nodeName.toLowerCase() && n(i).blur();
                }
                catch (u) {
                }
            this._hide(this.uiDialog, this.options.hide, function () {
                r._trigger("close", t);
            });
        }
    }, isOpen: function () {
        return this._isOpen;
    }, moveToTop: function () {
        this._moveToTop();
    }, _moveToTop: function (t, i) {
        var r = !1, f = this.uiDialog.siblings(".ui-front:visible").map(function () {
            return +n(this).css("z-index");
        }).get(), u = Math.max.apply(null, f);
        return u >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", u + 1), r = !0), r && !i && this._trigger("focus", t), r;
    }, open: function () {
        var t = this;
        return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = n(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
            t._focusTabbable();
            t._trigger("focus");
        }), this._makeFocusTarget(), this._trigger("open"), void 0);
    }, _focusTabbable: function () {
        var n = this._focusedElement;
        n || (n = this.element.find("[autofocus]"));
        n.length || (n = this.element.find(":tabbable"));
        n.length || (n = this.uiDialogButtonPane.find(":tabbable"));
        n.length || (n = this.uiDialogTitlebarClose.filter(":tabbable"));
        n.length || (n = this.uiDialog);
        n.eq(0).focus();
    }, _keepFocus: function (t) {
        function i() {
            var t = this.document[0].activeElement, i = this.uiDialog[0] === t || n.contains(this.uiDialog[0], t);
            i || this._focusTabbable();
        }
        t.preventDefault();
        i.call(this);
        this._delay(i);
    }, _createWrapper: function () {
        this.uiDialog = n("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo());
        this._on(this.uiDialog, { keydown: function (t) {
            if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === n.ui.keyCode.ESCAPE)
                return t.preventDefault(), this.close(t), void 0;
            if (t.keyCode === n.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                var i = this.uiDialog.find(":tabbable"), r = i.filter(":first"), u = i.filter(":last");
                t.target !== u[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== r[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function () {
                    u.focus();
                }), t.preventDefault()) : (this._delay(function () {
                    r.focus();
                }), t.preventDefault());
            }
        }, mousedown: function (n) {
            this._moveToTop(n) && this._focusTabbable();
        } });
        this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") });
    }, _createTitlebar: function () {
        var t;
        this.uiDialogTitlebar = n("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
        this._on(this.uiDialogTitlebar, { mousedown: function (t) {
            n(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus();
        } });
        this.uiDialogTitlebarClose = n("<button type='button'><\/button>").button({ label: this.options.closeText, icons: { primary: "ui-icon-closethick" }, text: !1 }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
        this._on(this.uiDialogTitlebarClose, { click: function (n) {
            n.preventDefault();
            this.close(n);
        } });
        t = n("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
        this._title(t);
        this.uiDialog.attr({ "aria-labelledby": t.attr("id") });
    }, _title: function (n) {
        this.options.title || n.html("&#160;");
        n.text(this.options.title);
    }, _createButtonPane: function () {
        this.uiDialogButtonPane = n("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
        this.uiButtonSet = n("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
        this._createButtons();
    }, _createButtons: function () {
        var i = this, t = this.options.buttons;
        return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), n.isEmptyObject(t) || n.isArray(t) && !t.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), void 0) : (n.each(t, function (t, r) {
            var u, f;
            r = n.isFunction(r) ? { click: r, text: t } : r;
            r = n.extend({ type: "button" }, r);
            u = r.click;
            r.click = function () {
                u.apply(i.element[0], arguments);
            };
            f = { icons: r.icons, text: r.showText };
            delete r.icons;
            delete r.showText;
            n("<button><\/button>", r).button(f).appendTo(i.uiButtonSet);
        }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0);
    }, _makeDraggable: function () {
        function i(n) {
            return { position: n.position, offset: n.offset };
        }
        var t = this, r = this.options;
        this.uiDialog.draggable({ cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function (r, u) {
            n(this).addClass("ui-dialog-dragging");
            t._blockFrames();
            t._trigger("dragStart", r, i(u));
        }, drag: function (n, r) {
            t._trigger("drag", n, i(r));
        }, stop: function (u, f) {
            var e = f.offset.left - t.document.scrollLeft(), o = f.offset.top - t.document.scrollTop();
            r.position = { my: "left top", at: "left" + (e >= 0 ? "+" : "") + e + " top" + (o >= 0 ? "+" : "") + o, of: t.window };
            n(this).removeClass("ui-dialog-dragging");
            t._unblockFrames();
            t._trigger("dragStop", u, i(f));
        } });
    }, _makeResizable: function () {
        function r(n) {
            return { originalPosition: n.originalPosition, originalSize: n.originalSize, position: n.position, size: n.size };
        }
        var t = this, i = this.options, u = i.resizable, f = this.uiDialog.css("position"), e = "string" == typeof u ? u : "n,e,s,w,se,sw,ne,nw";
        this.uiDialog.resizable({ cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: i.maxWidth, maxHeight: i.maxHeight, minWidth: i.minWidth, minHeight: this._minHeight(), handles: e, start: function (i, u) {
            n(this).addClass("ui-dialog-resizing");
            t._blockFrames();
            t._trigger("resizeStart", i, r(u));
        }, resize: function (n, i) {
            t._trigger("resize", n, r(i));
        }, stop: function (u, f) {
            var e = t.uiDialog.offset(), o = e.left - t.document.scrollLeft(), s = e.top - t.document.scrollTop();
            i.height = t.uiDialog.height();
            i.width = t.uiDialog.width();
            i.position = { my: "left top", at: "left" + (o >= 0 ? "+" : "") + o + " top" + (s >= 0 ? "+" : "") + s, of: t.window };
            n(this).removeClass("ui-dialog-resizing");
            t._unblockFrames();
            t._trigger("resizeStop", u, r(f));
        } }).css("position", f);
    }, _trackFocus: function () {
        this._on(this.widget(), { focusin: function (t) {
            this._makeFocusTarget();
            this._focusedElement = n(t.target);
        } });
    }, _makeFocusTarget: function () {
        this._untrackInstance();
        this._trackingInstances().unshift(this);
    }, _untrackInstance: function () {
        var t = this._trackingInstances(), i = n.inArray(this, t);
        -1 !== i && t.splice(i, 1);
    }, _trackingInstances: function () {
        var n = this.document.data("ui-dialog-instances");
        return n || (n = [], this.document.data("ui-dialog-instances", n)), n;
    }, _minHeight: function () {
        var n = this.options;
        return "auto" === n.height ? n.minHeight : Math.min(n.minHeight, n.height);
    }, _position: function () {
        var n = this.uiDialog.is(":visible");
        n || this.uiDialog.show();
        this.uiDialog.position(this.options.position);
        n || this.uiDialog.hide();
    }, _setOptions: function (t) {
        var i = this, r = !1, u = {};
        n.each(t, function (n, t) {
            i._setOption(n, t);
            n in i.sizeRelatedOptions && (r = !0);
            n in i.resizableRelatedOptions && (u[n] = t);
        });
        r && (this._size(), this._position());
        this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", u);
    }, _setOption: function (n, t) {
        var u, r, i = this.uiDialog;
        "dialogClass" === n && i.removeClass(this.options.dialogClass).addClass(t);
        "disabled" !== n && (this._super(n, t), "appendTo" === n && this.uiDialog.appendTo(this._appendTo()), "buttons" === n && this._createButtons(), "closeText" === n && this.uiDialogTitlebarClose.button({ label: "" + t }), "draggable" === n && (u = i.is(":data(ui-draggable)"), u && !t && i.draggable("destroy"), !u && t && this._makeDraggable()), "position" === n && this._position(), "resizable" === n && (r = i.is(":data(ui-resizable)"), r && !t && i.resizable("destroy"), r && "string" == typeof t && i.resizable("option", "handles", t), r || t === !1 || this._makeResizable()), "title" === n && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
    }, _size: function () {
        var t, i, r, n = this.options;
        this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 });
        n.minWidth > n.width && (n.width = n.minWidth);
        t = this.uiDialog.css({ height: "auto", width: n.width }).outerHeight();
        i = Math.max(0, n.minHeight - t);
        r = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none";
        "auto" === n.height ? this.element.css({ minHeight: i, maxHeight: r, height: "auto" }) : this.element.height(Math.max(0, n.height - t));
        this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
    }, _blockFrames: function () {
        this.iframeBlocks = this.document.find("iframe").map(function () {
            var t = n(this);
            return n("<div>").css({ position: "absolute", width: t.outerWidth(), height: t.outerHeight() }).appendTo(t.parent()).offset(t.offset())[0];
        });
    }, _unblockFrames: function () {
        this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    }, _allowInteraction: function (t) {
        return n(t.target).closest(".ui-dialog").length ? !0 : !!n(t.target).closest(".ui-datepicker").length;
    }, _createOverlay: function () {
        if (this.options.modal) {
            var t = !0;
            this._delay(function () {
                t = !1;
            });
            this.document.data("ui-dialog-overlays") || this._on(this.document, { focusin: function (n) {
                t || this._allowInteraction(n) || (n.preventDefault(), this._trackingInstances()[0]._focusTabbable());
            } });
            this.overlay = n("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
            this._on(this.overlay, { mousedown: "_keepFocus" });
            this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1);
        }
    }, _destroyOverlay: function () {
        if (this.options.modal && this.overlay) {
            var n = this.document.data("ui-dialog-overlays") - 1;
            n ? this.document.data("ui-dialog-overlays", n) : this.document.unbind("focusin").removeData("ui-dialog-overlays");
            this.overlay.remove();
            this.overlay = null;
        }
    } });
    n.widget("ui.progressbar", { version: "1.11.1", options: { max: 100, value: 0, change: null, complete: null }, min: 0, _create: function () {
        this.oldValue = this.options.value = this._constrainedValue();
        this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({ role: "progressbar", "aria-valuemin": this.min });
        this.valueDiv = n("<div class='ui-progressbar-value ui-widget-header ui-corner-left'><\/div>").appendTo(this.element);
        this._refreshValue();
    }, _destroy: function () {
        this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
        this.valueDiv.remove();
    }, value: function (n) {
        return void 0 === n ? this.options.value : (this.options.value = this._constrainedValue(n), this._refreshValue(), void 0);
    }, _constrainedValue: function (n) {
        return void 0 === n && (n = this.options.value), this.indeterminate = n === !1, "number" != typeof n && (n = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, n));
    }, _setOptions: function (n) {
        var t = n.value;
        delete n.value;
        this._super(n);
        this.options.value = this._constrainedValue(t);
        this._refreshValue();
    }, _setOption: function (n, t) {
        "max" === n && (t = Math.max(this.min, t));
        "disabled" === n && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t);
        this._super(n, t);
    }, _percentage: function () {
        return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
    }, _refreshValue: function () {
        var t = this.options.value, i = this._percentage();
        this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(i.toFixed(0) + "%");
        this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate);
        this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = n("<div class='ui-progressbar-overlay'><\/div>").appendTo(this.valueDiv))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": t }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null));
        this.oldValue !== t && (this.oldValue = t, this._trigger("change"));
        t === this.options.max && this._trigger("complete");
    } });
    n.widget("ui.selectmenu", { version: "1.11.1", defaultElement: "<select>", options: { appendTo: null, disabled: null, icons: { button: "ui-icon-triangle-1-s" }, position: { my: "left top", at: "left bottom", collision: "none" }, width: null, change: null, close: null, focus: null, open: null, select: null }, _create: function () {
        var n = this.element.uniqueId().attr("id");
        this.ids = { element: n, button: n + "-button", menu: n + "-menu" };
        this._drawButton();
        this._drawMenu();
        this.options.disabled && this.disable();
    }, _drawButton: function () {
        var t = this, i = this.element.attr("tabindex");
        this.label = n("label[for='" + this.ids.element + "']").attr("for", this.ids.button);
        this._on(this.label, { click: function (n) {
            this.button.focus();
            n.preventDefault();
        } });
        this.element.hide();
        this.button = n("<span>", { "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all", tabindex: i || this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true" }).insertAfter(this.element);
        n("<span>", { "class": "ui-icon " + this.options.icons.button }).prependTo(this.button);
        this.buttonText = n("<span>", { "class": "ui-selectmenu-text" }).appendTo(this.button);
        this._setText(this.buttonText, this.element.find("option:selected").text());
        this._resizeButton();
        this._on(this.button, this._buttonEvents);
        this.button.one("focusin", function () {
            t.menuItems || t._refreshMenu();
        });
        this._hoverable(this.button);
        this._focusable(this.button);
    }, _drawMenu: function () {
        var t = this;
        this.menu = n("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu });
        this.menuWrap = n("<div>", { "class": "ui-selectmenu-menu ui-front" }).append(this.menu).appendTo(this._appendTo());
        this.menuInstance = this.menu.menu({ role: "listbox", select: function (n, i) {
            n.preventDefault();
            t._select(i.item.data("ui-selectmenu-item"), n);
        }, focus: function (n, i) {
            var r = i.item.data("ui-selectmenu-item");
            null != t.focusIndex && r.index !== t.focusIndex && (t._trigger("focus", n, { item: r }), t.isOpen || t._select(r, n));
            t.focusIndex = r.index;
            t.button.attr("aria-activedescendant", t.menuItems.eq(r.index).attr("id"));
        } }).menu("instance");
        this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all");
        this.menuInstance._off(this.menu, "mouseleave");
        this.menuInstance._closeOnDocumentClick = function () {
            return !1;
        };
        this.menuInstance._isDivider = function () {
            return !1;
        };
    }, refresh: function () {
        this._refreshMenu();
        this._setText(this.buttonText, this._getSelectedItem().text());
        this.options.width || this._resizeButton();
    }, _refreshMenu: function () {
        this.menu.empty();
        var n, t = this.element.find("option");
        t.length && (this._parseOptions(t), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), n = this._getSelectedItem(), this.menuInstance.focus(null, n), this._setAria(n.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
    }, open: function (n) {
        this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", n));
    }, _position: function () {
        this.menuWrap.position(n.extend({ of: this.button }, this.options.position));
    }, close: function (n) {
        this.isOpen && (this.isOpen = !1, this._toggleAttr(), this._off(this.document), this._trigger("close", n));
    }, widget: function () {
        return this.button;
    }, menuWidget: function () {
        return this.menu;
    }, _renderMenu: function (t, i) {
        var u = this, r = "";
        n.each(i, function (i, f) {
            f.optgroup !== r && (n("<li>", { "class": "ui-selectmenu-optgroup ui-menu-divider" + (f.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""), text: f.optgroup }).appendTo(t), r = f.optgroup);
            u._renderItemData(t, f);
        });
    }, _renderItemData: function (n, t) {
        return this._renderItem(n, t).data("ui-selectmenu-item", t);
    }, _renderItem: function (t, i) {
        var r = n("<li>");
        return i.disabled && r.addClass("ui-state-disabled"), this._setText(r, i.label), r.appendTo(t);
    }, _setText: function (n, t) {
        t ? n.text(t) : n.html("&#160;");
    }, _move: function (n, t) {
        var i, r, u = ".ui-menu-item";
        this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), u += ":not(.ui-state-disabled)");
        r = "first" === n || "last" === n ? i["first" === n ? "prevAll" : "nextAll"](u).eq(-1) : i[n + "All"](u).eq(0);
        r.length && this.menuInstance.focus(t, r);
    }, _getSelectedItem: function () {
        return this.menuItems.eq(this.element[0].selectedIndex);
    }, _toggle: function (n) {
        this[this.isOpen ? "close" : "open"](n);
    }, _documentClick: { mousedown: function (t) {
        this.isOpen && (n(t.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(t));
    } }, _buttonEvents: { mousedown: function (n) {
        n.preventDefault();
    }, click: "_toggle", keydown: function (t) {
        var i = !0;
        switch (t.keyCode) {
            case n.ui.keyCode.TAB:
            case n.ui.keyCode.ESCAPE:
                this.close(t);
                i = !1;
                break;
            case n.ui.keyCode.ENTER:
                this.isOpen && this._selectFocusedItem(t);
                break;
            case n.ui.keyCode.UP:
                t.altKey ? this._toggle(t) : this._move("prev", t);
                break;
            case n.ui.keyCode.DOWN:
                t.altKey ? this._toggle(t) : this._move("next", t);
                break;
            case n.ui.keyCode.SPACE:
                this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                break;
            case n.ui.keyCode.LEFT:
                this._move("prev", t);
                break;
            case n.ui.keyCode.RIGHT:
                this._move("next", t);
                break;
            case n.ui.keyCode.HOME:
            case n.ui.keyCode.PAGE_UP:
                this._move("first", t);
                break;
            case n.ui.keyCode.END:
            case n.ui.keyCode.PAGE_DOWN:
                this._move("last", t);
                break;
            default:
                this.menu.trigger(t);
                i = !1;
        }
        i && t.preventDefault();
    } }, _selectFocusedItem: function (n) {
        var t = this.menuItems.eq(this.focusIndex);
        t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), n);
    }, _select: function (n, t) {
        var i = this.element[0].selectedIndex;
        this.element[0].selectedIndex = n.index;
        this._setText(this.buttonText, n.label);
        this._setAria(n);
        this._trigger("select", t, { item: n });
        n.index !== i && this._trigger("change", t, { item: n });
        this.close(t);
    }, _setAria: function (n) {
        var t = this.menuItems.eq(n.index).attr("id");
        this.button.attr({ "aria-labelledby": t, "aria-activedescendant": t });
        this.menu.attr("aria-activedescendant", t);
    }, _setOption: function (n, t) {
        "icons" === n && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button);
        this._super(n, t);
        "appendTo" === n && this.menuWrap.appendTo(this._appendTo());
        "disabled" === n && (this.menuInstance.option("disabled", t), this.button.toggleClass("ui-state-disabled", t).attr("aria-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0));
        "width" === n && this._resizeButton();
    }, _appendTo: function () {
        var t = this.options.appendTo;
        return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t;
    }, _toggleAttr: function () {
        this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen);
        this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen);
        this.menu.attr("aria-hidden", !this.isOpen);
    }, _resizeButton: function () {
        var n = this.options.width;
        n || (n = this.element.show().outerWidth(), this.element.hide());
        this.button.outerWidth(n);
    }, _resizeMenu: function () {
        this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
    }, _getCreateOptions: function () {
        return { disabled: this.element.prop("disabled") };
    }, _parseOptions: function (t) {
        var i = [];
        t.each(function (t, r) {
            var u = n(r), f = u.parent("optgroup");
            i.push({ element: u, index: t, value: u.attr("value"), label: u.text(), optgroup: f.attr("label") || "", disabled: f.prop("disabled") || u.prop("disabled") });
        });
        this.items = i;
    }, _destroy: function () {
        this.menuWrap.remove();
        this.button.remove();
        this.element.show();
        this.element.removeUniqueId();
        this.label.attr("for", this.ids.element);
    } });
    n.widget("ui.slider", n.ui.mouse, { version: "1.11.1", widgetEventPrefix: "slide", options: { animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, numPages: 5, _create: function () {
        this._keySliding = !1;
        this._mouseSliding = !1;
        this._animateOff = !0;
        this._handleIndex = null;
        this._detectOrientation();
        this._mouseInit();
        this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
        this._refresh();
        this._setOption("disabled", this.options.disabled);
        this._animateOff = !1;
    }, _refresh: function () {
        this._createRange();
        this._createHandles();
        this._setupEvents();
        this._refreshValue();
    }, _createHandles: function () {
        var r, i, u = this.options, t = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), f = [];
        for (i = u.values && u.values.length || 1, t.length > i && (t.slice(i).remove(), t = t.slice(0, i)), r = t.length; i > r; r++)
            f.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'><\/span>");
        this.handles = t.add(n(f.join("")).appendTo(this.element));
        this.handle = this.handles.eq(0);
        this.handles.each(function (t) {
            n(this).data("ui-slider-handle-index", t);
        });
    }, _createRange: function () {
        var t = this.options, i = "";
        t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : n.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({ left: "", bottom: "" }) : (this.range = n("<div><\/div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null);
    }, _setupEvents: function () {
        this._off(this.handles);
        this._on(this.handles, this._handleEvents);
        this._hoverable(this.handles);
        this._focusable(this.handles);
    }, _destroy: function () {
        this.handles.remove();
        this.range && this.range.remove();
        this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
        this._mouseDestroy();
    }, _mouseCapture: function (t) {
        var s, f, r, i, u, h, e, c, o = this, l = this.options;
        return l.disabled ? !1 : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), s = { x: t.pageX, y: t.pageY }, f = this._normValueFromMouse(s), r = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
            var e = Math.abs(f - o.values(t));
            (r > e || r === e && (t === o._lastChangedValue || o.values(t) === l.min)) && (r = e, i = n(this), u = t);
        }), h = this._start(t, u), h === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = u, i.addClass("ui-state-active").focus(), e = i.offset(), c = !n(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = c ? { left: 0, top: 0 } : { left: t.pageX - e.left - i.width() / 2, top: t.pageY - e.top - i.height() / 2 - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(t, u, f), this._animateOff = !0, !0));
    }, _mouseStart: function () {
        return !0;
    }, _mouseDrag: function (n) {
        var t = { x: n.pageX, y: n.pageY }, i = this._normValueFromMouse(t);
        return this._slide(n, this._handleIndex, i), !1;
    }, _mouseStop: function (n) {
        return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(n, this._handleIndex), this._change(n, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1;
    }, _detectOrientation: function () {
        this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
    }, _normValueFromMouse: function (n) {
        var i, r, t, u, f;
        return "horizontal" === this.orientation ? (i = this.elementSize.width, r = n.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (i = this.elementSize.height, r = n.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), t = r / i, t > 1 && (t = 1), 0 > t && (t = 0), "vertical" === this.orientation && (t = 1 - t), u = this._valueMax() - this._valueMin(), f = this._valueMin() + t * u, this._trimAlignValue(f);
    }, _start: function (n, t) {
        var i = { handle: this.handles[t], value: this.value() };
        return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", n, i);
    }, _slide: function (n, t, i) {
        var r, f, u;
        this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > r || 1 === t && r > i) && (i = r), i !== this.values(t) && (f = this.values(), f[t] = i, u = this._trigger("slide", n, { handle: this.handles[t], value: i, values: f }), r = this.values(t ? 0 : 1), u !== !1 && this.values(t, i))) : i !== this.value() && (u = this._trigger("slide", n, { handle: this.handles[t], value: i }), u !== !1 && this.value(i));
    }, _stop: function (n, t) {
        var i = { handle: this.handles[t], value: this.value() };
        this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values());
        this._trigger("stop", n, i);
    }, _change: function (n, t) {
        if (!this._keySliding && !this._mouseSliding) {
            var i = { handle: this.handles[t], value: this.value() };
            this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values());
            this._lastChangedValue = t;
            this._trigger("change", n, i);
        }
    }, value: function (n) {
        return arguments.length ? (this.options.value = this._trimAlignValue(n), this._refreshValue(), this._change(null, 0), void 0) : this._value();
    }, values: function (t, i) {
        var u, f, r;
        if (arguments.length > 1)
            return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0;
        if (!arguments.length)
            return this._values();
        if (!n.isArray(arguments[0]))
            return this.options.values && this.options.values.length ? this._values(t) : this.value();
        for (u = this.options.values, f = arguments[0], r = 0; u.length > r; r += 1)
            u[r] = this._trimAlignValue(f[r]), this._change(null, r);
        this._refreshValue();
    }, _setOption: function (t, i) {
        var r, u = 0;
        switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), n.isArray(this.options.values) && (u = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {
            case "orientation":
                this._detectOrientation();
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                this._refreshValue();
                this.handles.css("horizontal" === i ? "bottom" : "left", "");
                break;
            case "value":
                this._animateOff = !0;
                this._refreshValue();
                this._change(null, 0);
                this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0, this._refreshValue(), r = 0; u > r; r += 1)
                    this._change(null, r);
                this._animateOff = !1;
                break;
            case "min":
            case "max":
                this._animateOff = !0;
                this._refreshValue();
                this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0;
                this._refresh();
                this._animateOff = !1;
        }
    }, _value: function () {
        var n = this.options.value;
        return this._trimAlignValue(n);
    }, _values: function (n) {
        var r, t, i;
        if (arguments.length)
            return r = this.options.values[n], r = this._trimAlignValue(r);
        if (this.options.values && this.options.values.length) {
            for (t = this.options.values.slice(), i = 0; t.length > i; i += 1)
                t[i] = this._trimAlignValue(t[i]);
            return t;
        }
        return [];
    }, _trimAlignValue: function (n) {
        if (this._valueMin() >= n)
            return this._valueMin();
        if (n >= this._valueMax())
            return this._valueMax();
        var t = this.options.step > 0 ? this.options.step : 1, i = (n - this._valueMin()) % t, r = n - i;
        return 2 * Math.abs(i) >= t && (r += i > 0 ? t : -t), parseFloat(r.toFixed(5));
    }, _valueMin: function () {
        return this.options.min;
    }, _valueMax: function () {
        return this.options.max;
    }, _refreshValue: function () {
        var s, t, c, f, h, e = this.options.range, i = this.options, r = this, u = this._animateOff ? !1 : i.animate, o = {};
        this.options.values && this.options.values.length ? this.handles.each(function (f) {
            t = 100 * ((r.values(f) - r._valueMin()) / (r._valueMax() - r._valueMin()));
            o["horizontal" === r.orientation ? "left" : "bottom"] = t + "%";
            n(this).stop(1, 1)[u ? "animate" : "css"](o, i.animate);
            r.options.range === !0 && ("horizontal" === r.orientation ? (0 === f && r.range.stop(1, 1)[u ? "animate" : "css"]({ left: t + "%" }, i.animate), 1 === f && r.range[u ? "animate" : "css"]({ width: t - s + "%" }, { queue: !1, duration: i.animate })) : (0 === f && r.range.stop(1, 1)[u ? "animate" : "css"]({ bottom: t + "%" }, i.animate), 1 === f && r.range[u ? "animate" : "css"]({ height: t - s + "%" }, { queue: !1, duration: i.animate })));
            s = t;
        }) : (c = this.value(), f = this._valueMin(), h = this._valueMax(), t = h !== f ? 100 * ((c - f) / (h - f)) : 0, o["horizontal" === this.orientation ? "left" : "bottom"] = t + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](o, i.animate), "min" === e && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({ width: t + "%" }, i.animate), "max" === e && "horizontal" === this.orientation && this.range[u ? "animate" : "css"]({ width: 100 - t + "%" }, { queue: !1, duration: i.animate }), "min" === e && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({ height: t + "%" }, i.animate), "max" === e && "vertical" === this.orientation && this.range[u ? "animate" : "css"]({ height: 100 - t + "%" }, { queue: !1, duration: i.animate }));
    }, _handleEvents: { keydown: function (t) {
        var e, r, i, u, f = n(t.target).data("ui-slider-handle-index");
        switch (t.keyCode) {
            case n.ui.keyCode.HOME:
            case n.ui.keyCode.END:
            case n.ui.keyCode.PAGE_UP:
            case n.ui.keyCode.PAGE_DOWN:
            case n.ui.keyCode.UP:
            case n.ui.keyCode.RIGHT:
            case n.ui.keyCode.DOWN:
            case n.ui.keyCode.LEFT: if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, n(t.target).addClass("ui-state-active"), e = this._start(t, f), e === !1))
                return;
        }
        switch (u = this.options.step, r = i = this.options.values && this.options.values.length ? this.values(f) : this.value(), t.keyCode) {
            case n.ui.keyCode.HOME:
                i = this._valueMin();
                break;
            case n.ui.keyCode.END:
                i = this._valueMax();
                break;
            case n.ui.keyCode.PAGE_UP:
                i = this._trimAlignValue(r + (this._valueMax() - this._valueMin()) / this.numPages);
                break;
            case n.ui.keyCode.PAGE_DOWN:
                i = this._trimAlignValue(r - (this._valueMax() - this._valueMin()) / this.numPages);
                break;
            case n.ui.keyCode.UP:
            case n.ui.keyCode.RIGHT:
                if (r === this._valueMax())
                    return;
                i = this._trimAlignValue(r + u);
                break;
            case n.ui.keyCode.DOWN:
            case n.ui.keyCode.LEFT:
                if (r === this._valueMin())
                    return;
                i = this._trimAlignValue(r - u);
        }
        this._slide(t, f, i);
    }, keyup: function (t) {
        var i = n(t.target).data("ui-slider-handle-index");
        this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), n(t.target).removeClass("ui-state-active"));
    } } });
    n.widget("ui.spinner", { version: "1.11.1", defaultElement: "<input>", widgetEventPrefix: "spin", options: { culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null }, _create: function () {
        this._setOption("max", this.options.max);
        this._setOption("min", this.options.min);
        this._setOption("step", this.options.step);
        "" !== this.value() && this._value(this.element.val(), !0);
        this._draw();
        this._on(this._events);
        this._refresh();
        this._on(this.window, { beforeunload: function () {
            this.element.removeAttr("autocomplete");
        } });
    }, _getCreateOptions: function () {
        var t = {}, i = this.element;
        return n.each(["min", "max", "step"], function (n, r) {
            var u = i.attr(r);
            void 0 !== u && u.length && (t[r] = u);
        }), t;
    }, _events: { keydown: function (n) {
        this._start(n) && this._keydown(n) && n.preventDefault();
    }, keyup: "_stop", focus: function () {
        this.previous = this.element.val();
    }, blur: function (n) {
        return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", n), void 0);
    }, mousewheel: function (n, t) {
        if (t) {
            if (!this.spinning && !this._start(n))
                return !1;
            this._spin((t > 0 ? 1 : -1) * this.options.step, n);
            clearTimeout(this.mousewheelTimer);
            this.mousewheelTimer = this._delay(function () {
                this.spinning && this._stop(n);
            }, 100);
            n.preventDefault();
        }
    }, "mousedown .ui-spinner-button": function (t) {
        function r() {
            var n = this.element[0] === this.document[0].activeElement;
            n || (this.element.focus(), this.previous = i, this._delay(function () {
                this.previous = i;
            }));
        }
        var i;
        i = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();
        t.preventDefault();
        r.call(this);
        this.cancelBlur = !0;
        this._delay(function () {
            delete this.cancelBlur;
            r.call(this);
        });
        this._start(t) !== !1 && this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t);
    }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (t) {
        if (n(t.currentTarget).hasClass("ui-state-active"))
            return this._start(t) === !1 ? !1 : (this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t), void 0);
    }, "mouseleave .ui-spinner-button": "_stop" }, _draw: function () {
        var n = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
        this.element.attr("role", "spinbutton");
        this.buttons = n.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
        this.buttons.height() > Math.ceil(.5 * n.height()) && n.height() > 0 && n.height(n.height());
        this.options.disabled && this.disable();
    }, _keydown: function (t) {
        var r = this.options, i = n.ui.keyCode;
        switch (t.keyCode) {
            case i.UP: return this._repeat(null, 1, t), !0;
            case i.DOWN: return this._repeat(null, -1, t), !0;
            case i.PAGE_UP: return this._repeat(null, r.page, t), !0;
            case i.PAGE_DOWN: return this._repeat(null, -r.page, t), !0;
        }
        return !1;
    }, _uiSpinnerHtml: function () {
        return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'><\/span>";
    }, _buttonHtml: function () {
        return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;<\/span><\/a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;<\/span><\/a>";
    }, _start: function (n) {
        return this.spinning || this._trigger("start", n) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1;
    }, _repeat: function (n, t, i) {
        n = n || 500;
        clearTimeout(this.timer);
        this.timer = this._delay(function () {
            this._repeat(40, t, i);
        }, n);
        this._spin(t * this.options.step, i);
    }, _spin: function (n, t) {
        var i = this.value() || 0;
        this.counter || (this.counter = 1);
        i = this._adjustValue(i + n * this._increment(this.counter));
        this.spinning && this._trigger("spin", t, { value: i }) === !1 || (this._value(i), this.counter++);
    }, _increment: function (t) {
        var i = this.options.incremental;
        return i ? n.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1;
    }, _precision: function () {
        var n = this._precisionOf(this.options.step);
        return null !== this.options.min && (n = Math.max(n, this._precisionOf(this.options.min))), n;
    }, _precisionOf: function (n) {
        var t = "" + n, i = t.indexOf(".");
        return -1 === i ? 0 : t.length - i - 1;
    }, _adjustValue: function (n) {
        var r, i, t = this.options;
        return r = null !== t.min ? t.min : 0, i = n - r, i = Math.round(i / t.step) * t.step, n = r + i, n = parseFloat(n.toFixed(this._precision())), null !== t.max && n > t.max ? t.max : null !== t.min && t.min > n ? t.min : n;
    }, _stop: function (n) {
        this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", n));
    }, _setOption: function (n, t) {
        if ("culture" === n || "numberFormat" === n) {
            var i = this._parse(this.element.val());
            return this.options[n] = t, this.element.val(this._format(i)), void 0;
        }
        ("max" === n || "min" === n || "step" === n) && "string" == typeof t && (t = this._parse(t));
        "icons" === n && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down));
        this._super(n, t);
        "disabled" === n && (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable"));
    }, _setOptions: t(function (n) {
        this._super(n);
    }), _parse: function (n) {
        return "string" == typeof n && "" !== n && (n = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(n, 10, this.options.culture) : +n), "" === n || isNaN(n) ? null : n;
    }, _format: function (n) {
        return "" === n ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(n, this.options.numberFormat, this.options.culture) : n;
    }, _refresh: function () {
        this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) });
    }, isValid: function () {
        var n = this.value();
        return null === n ? !1 : n === this._adjustValue(n);
    }, _value: function (n, t) {
        var i;
        "" !== n && (i = this._parse(n), null !== i && (t || (i = this._adjustValue(i)), n = this._format(i)));
        this.element.val(n);
        this._refresh();
    }, _destroy: function () {
        this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
        this.uiSpinner.replaceWith(this.element);
    }, stepUp: t(function (n) {
        this._stepUp(n);
    }), _stepUp: function (n) {
        this._start() && (this._spin((n || 1) * this.options.step), this._stop());
    }, stepDown: t(function (n) {
        this._stepDown(n);
    }), _stepDown: function (n) {
        this._start() && (this._spin((n || 1) * -this.options.step), this._stop());
    }, pageUp: t(function (n) {
        this._stepUp((n || 1) * this.options.page);
    }), pageDown: t(function (n) {
        this._stepDown((n || 1) * this.options.page);
    }), value: function (n) {
        return arguments.length ? (t(this._value).call(this, n), void 0) : this._parse(this.element.val());
    }, widget: function () {
        return this.uiSpinner;
    } });
    n.widget("ui.tabs", { version: "1.11.1", delay: 300, options: { active: null, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null }, _isLocal: function () {
        var n = /#.*$/;
        return function (t) {
            var i, r;
            t = t.cloneNode(!1);
            i = t.href.replace(n, "");
            r = location.href.replace(n, "");
            try {
                i = decodeURIComponent(i);
            }
            catch (u) {
            }
            try {
                r = decodeURIComponent(r);
            }
            catch (u) {
            }
            return t.hash.length > 1 && i === r;
        };
    }(), _create: function () {
        var i = this, t = this.options;
        this.running = !1;
        this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", t.collapsible);
        this._processTabs();
        t.active = this._initialActive();
        n.isArray(t.disabled) && (t.disabled = n.unique(t.disabled.concat(n.map(this.tabs.filter(".ui-state-disabled"), function (n) {
            return i.tabs.index(n);
        }))).sort());
        this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(t.active) : n();
        this._refresh();
        this.active.length && this.load(t.active);
    }, _initialActive: function () {
        var t = this.options.active, i = this.options.collapsible, r = location.hash.substring(1);
        return null === t && (r && this.tabs.each(function (i, u) {
            if (n(u).attr("aria-controls") === r)
                return (t = i, !1);
        }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), -1 === t && (t = i ? !1 : 0)), !i && t === !1 && this.anchors.length && (t = 0), t;
    }, _getCreateEventData: function () {
        return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : n() };
    }, _tabKeydown: function (t) {
        var r = n(this.document[0].activeElement).closest("li"), i = this.tabs.index(r), u = !0;
        if (!this._handlePageNav(t)) {
            switch (t.keyCode) {
                case n.ui.keyCode.RIGHT:
                case n.ui.keyCode.DOWN:
                    i++;
                    break;
                case n.ui.keyCode.UP:
                case n.ui.keyCode.LEFT:
                    u = !1;
                    i--;
                    break;
                case n.ui.keyCode.END:
                    i = this.anchors.length - 1;
                    break;
                case n.ui.keyCode.HOME:
                    i = 0;
                    break;
                case n.ui.keyCode.SPACE: return t.preventDefault(), clearTimeout(this.activating), this._activate(i), void 0;
                case n.ui.keyCode.ENTER: return t.preventDefault(), clearTimeout(this.activating), this._activate(i === this.options.active ? !1 : i), void 0;
                default: return;
            }
            t.preventDefault();
            clearTimeout(this.activating);
            i = this._focusNextTab(i, u);
            t.ctrlKey || (r.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function () {
                this.option("active", i);
            }, this.delay));
        }
    }, _panelKeydown: function (t) {
        this._handlePageNav(t) || t.ctrlKey && t.keyCode === n.ui.keyCode.UP && (t.preventDefault(), this.active.focus());
    }, _handlePageNav: function (t) {
        return t.altKey && t.keyCode === n.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === n.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0;
    }, _findNextTab: function (t, i) {
        function u() {
            return t > r && (t = 0), 0 > t && (t = r), t;
        }
        for (var r = this.tabs.length - 1; -1 !== n.inArray(u(), this.options.disabled);)
            t = i ? t + 1 : t - 1;
        return t;
    }, _focusNextTab: function (n, t) {
        return n = this._findNextTab(n, t), this.tabs.eq(n).focus(), n;
    }, _setOption: function (n, t) {
        return "active" === n ? (this._activate(t), void 0) : "disabled" === n ? (this._setupDisabled(t), void 0) : (this._super(n, t), "collapsible" === n && (this.element.toggleClass("ui-tabs-collapsible", t), t || this.options.active !== !1 || this._activate(0)), "event" === n && this._setupEvents(t), "heightStyle" === n && this._setupHeightStyle(t), void 0);
    }, _sanitizeSelector: function (n) {
        return n ? n.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
    }, refresh: function () {
        var t = this.options, i = this.tablist.children(":has(a[href])");
        t.disabled = n.map(i.filter(".ui-state-disabled"), function (n) {
            return i.index(n);
        });
        this._processTabs();
        t.active !== !1 && this.anchors.length ? this.active.length && !n.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = n()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = n());
        this._refresh();
    }, _refresh: function () {
        this._setupDisabled(this.options.disabled);
        this._setupEvents(this.options.event);
        this._setupHeightStyle(this.options.heightStyle);
        this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 });
        this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" });
        this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }), this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0);
    }, _processTabs: function () {
        var t = this;
        this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function (t) {
            n(this).is(".ui-state-disabled") && t.preventDefault();
        }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
            n(this).closest("li").is(".ui-state-disabled") && this.blur();
        });
        this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({ role: "tab", tabIndex: -1 });
        this.anchors = this.tabs.map(function () {
            return n("a", this)[0];
        }).addClass("ui-tabs-anchor").attr({ role: "presentation", tabIndex: -1 });
        this.panels = n();
        this.anchors.each(function (i, r) {
            var f, u, e, s = n(r).uniqueId().attr("id"), o = n(r).closest("li"), h = o.attr("aria-controls");
            t._isLocal(r) ? (f = r.hash, e = f.substring(1), u = t.element.find(t._sanitizeSelector(f))) : (e = o.attr("aria-controls") || n({}).uniqueId()[0].id, f = "#" + e, u = t.element.find(f), u.length || (u = t._createPanel(e), u.insertAfter(t.panels[i - 1] || t.tablist)), u.attr("aria-live", "polite"));
            u.length && (t.panels = t.panels.add(u));
            h && o.data("ui-tabs-aria-controls", h);
            o.attr({ "aria-controls": e, "aria-labelledby": s });
            u.attr("aria-labelledby", s);
        });
        this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel");
    }, _getList: function () {
        return this.tablist || this.element.find("ol,ul").eq(0);
    }, _createPanel: function (t) {
        return n("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0);
    }, _setupDisabled: function (t) {
        n.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
        for (var i, r = 0; i = this.tabs[r]; r++)
            t === !0 || -1 !== n.inArray(r, t) ? n(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : n(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
        this.options.disabled = t;
    }, _setupEvents: function (t) {
        var i = {};
        t && n.each(t.split(" "), function (n, t) {
            i[t] = "_eventHandler";
        });
        this._off(this.anchors.add(this.tabs).add(this.panels));
        this._on(!0, this.anchors, { click: function (n) {
            n.preventDefault();
        } });
        this._on(this.anchors, i);
        this._on(this.tabs, { keydown: "_tabKeydown" });
        this._on(this.panels, { keydown: "_panelKeydown" });
        this._focusable(this.tabs);
        this._hoverable(this.tabs);
    }, _setupHeightStyle: function (t) {
        var i, r = this.element.parent();
        "fill" === t ? (i = r.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
            var t = n(this), r = t.css("position");
            "absolute" !== r && "fixed" !== r && (i -= t.outerHeight(!0));
        }), this.element.children().not(this.panels).each(function () {
            i -= n(this).outerHeight(!0);
        }), this.panels.each(function () {
            n(this).height(Math.max(0, i - n(this).innerHeight() + n(this).height()));
        }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function () {
            i = Math.max(i, n(this).height("").height());
        }).height(i));
    }, _eventHandler: function (t) {
        var u = this.options, r = this.active, c = n(t.currentTarget), i = c.closest("li"), f = i[0] === r[0], e = f && u.collapsible, o = e ? n() : this._getPanelForTab(i), s = r.length ? this._getPanelForTab(r) : n(), h = { oldTab: r, oldPanel: s, newTab: e ? n() : i, newPanel: o };
        t.preventDefault();
        i.hasClass("ui-state-disabled") || i.hasClass("ui-tabs-loading") || this.running || f && !u.collapsible || this._trigger("beforeActivate", t, h) === !1 || (u.active = e ? !1 : this.tabs.index(i), this.active = f ? n() : i, this.xhr && this.xhr.abort(), s.length || o.length || n.error("jQuery UI Tabs: Mismatching fragment identifier."), o.length && this.load(this.tabs.index(i), t), this._toggle(t, h));
    }, _toggle: function (t, i) {
        function e() {
            u.running = !1;
            u._trigger("activate", t, i);
        }
        function o() {
            i.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
            r.length && u.options.show ? u._show(r, u.options.show, e) : (r.show(), e());
        }
        var u = this, r = i.newPanel, f = i.oldPanel;
        this.running = !0;
        f.length && this.options.hide ? this._hide(f, this.options.hide, function () {
            i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
            o();
        }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), f.hide(), o());
        f.attr("aria-hidden", "true");
        i.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" });
        r.length && f.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function () {
            return 0 === n(this).attr("tabIndex");
        }).attr("tabIndex", -1);
        r.attr("aria-hidden", "false");
        i.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 });
    }, _activate: function (t) {
        var r, i = this._findActive(t);
        i[0] !== this.active[0] && (i.length || (i = this.active), r = i.find(".ui-tabs-anchor")[0], this._eventHandler({ target: r, currentTarget: r, preventDefault: n.noop }));
    }, _findActive: function (t) {
        return t === !1 ? n() : this.tabs.eq(t);
    }, _getIndex: function (n) {
        return "string" == typeof n && (n = this.anchors.index(this.anchors.filter("[href$='" + n + "']"))), n;
    }, _destroy: function () {
        this.xhr && this.xhr.abort();
        this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
        this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
        this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
        this.tablist.unbind(this.eventNamespace);
        this.tabs.add(this.panels).each(function () {
            n.data(this, "ui-tabs-destroy") ? n(this).remove() : n(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role");
        });
        this.tabs.each(function () {
            var t = n(this), i = t.data("ui-tabs-aria-controls");
            i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls");
        });
        this.panels.show();
        "content" !== this.options.heightStyle && this.panels.css("height", "");
    }, enable: function (t) {
        var i = this.options.disabled;
        i !== !1 && (void 0 === t ? i = !1 : (t = this._getIndex(t), i = n.isArray(i) ? n.map(i, function (n) {
            return n !== t ? n : null;
        }) : n.map(this.tabs, function (n, i) {
            return i !== t ? i : null;
        })), this._setupDisabled(i));
    }, disable: function (t) {
        var i = this.options.disabled;
        if (i !== !0) {
            if (void 0 === t)
                i = !0;
            else {
                if (t = this._getIndex(t), -1 !== n.inArray(t, i))
                    return;
                i = n.isArray(i) ? n.merge([t], i).sort() : [t];
            }
            this._setupDisabled(i);
        }
    }, load: function (t, i) {
        t = this._getIndex(t);
        var u = this, r = this.tabs.eq(t), e = r.find(".ui-tabs-anchor"), f = this._getPanelForTab(r), o = { tab: r, panel: f };
        this._isLocal(e[0]) || (this.xhr = n.ajax(this._ajaxSettings(e, i, o)), this.xhr && "canceled" !== this.xhr.statusText && (r.addClass("ui-tabs-loading"), f.attr("aria-busy", "true"), this.xhr.success(function (n) {
            setTimeout(function () {
                f.html(n);
                u._trigger("load", i, o);
            }, 1);
        }).complete(function (n, t) {
            setTimeout(function () {
                "abort" === t && u.panels.stop(!1, !0);
                r.removeClass("ui-tabs-loading");
                f.removeAttr("aria-busy");
                n === u.xhr && delete u.xhr;
            }, 1);
        })));
    }, _ajaxSettings: function (t, i, r) {
        var u = this;
        return { url: t.attr("href"), beforeSend: function (t, f) {
            return u._trigger("beforeLoad", i, n.extend({ jqXHR: t, ajaxSettings: f }, r));
        } };
    }, _getPanelForTab: function (t) {
        var i = n(t).attr("aria-controls");
        return this.element.find(this._sanitizeSelector("#" + i));
    } });
    n.widget("ui.tooltip", { version: "1.11.1", options: { content: function () {
        var t = n(this).attr("title") || "";
        return n("<a>").text(t).html();
    }, hide: !0, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: !0, tooltipClass: null, track: !1, close: null, open: null }, _addDescribedBy: function (t, i) {
        var r = (t.attr("aria-describedby") || "").split(/\s+/);
        r.push(i);
        t.data("ui-tooltip-id", i).attr("aria-describedby", n.trim(r.join(" ")));
    }, _removeDescribedBy: function (t) {
        var u = t.data("ui-tooltip-id"), i = (t.attr("aria-describedby") || "").split(/\s+/), r = n.inArray(u, i);
        -1 !== r && i.splice(r, 1);
        t.removeData("ui-tooltip-id");
        i = n.trim(i.join(" "));
        i ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby");
    }, _create: function () {
        this._on({ mouseover: "open", focusin: "open" });
        this.tooltips = {};
        this.parents = {};
        this.options.disabled && this._disable();
        this.liveRegion = n("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);
    }, _setOption: function (t, i) {
        var r = this;
        return "disabled" === t ? (this[i ? "_disable" : "_enable"](), this.options[t] = i, void 0) : (this._super(t, i), "content" === t && n.each(this.tooltips, function (n, t) {
            r._updateContent(t);
        }), void 0);
    }, _disable: function () {
        var t = this;
        n.each(this.tooltips, function (i, r) {
            var u = n.Event("blur");
            u.target = u.currentTarget = r[0];
            t.close(u, !0);
        });
        this.element.find(this.options.items).addBack().each(function () {
            var t = n(this);
            t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title");
        });
    }, _enable: function () {
        this.element.find(this.options.items).addBack().each(function () {
            var t = n(this);
            t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"));
        });
    }, open: function (t) {
        var r = this, i = n(t ? t.target : this.element).closest(this.options.items);
        i.length && !i.data("ui-tooltip-id") && (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")), i.data("ui-tooltip-open", !0), t && "mouseover" === t.type && i.parents().each(function () {
            var i, t = n(this);
            t.data("ui-tooltip-open") && (i = n.Event("blur"), i.target = i.currentTarget = this, r.close(i, !0));
            t.attr("title") && (t.uniqueId(), r.parents[this.id] = { element: this, title: t.attr("title") }, t.attr("title", ""));
        }), this._updateContent(i, t));
    }, _updateContent: function (n, t) {
        var i, r = this.options.content, u = this, f = t ? t.type : null;
        return "string" == typeof r ? this._open(t, n, r) : (i = r.call(n[0], function (i) {
            n.data("ui-tooltip-open") && u._delay(function () {
                t && (t.type = f);
                this._open(t, n, i);
            });
        }), i && this._open(t, n, i), void 0);
    }, _open: function (t, i, r) {
        function o(n) {
            s.of = n;
            u.is(":hidden") || u.position(s);
        }
        var u, f, h, e, s = n.extend({}, this.options.position);
        if (r) {
            if (u = this._find(i), u.length)
                return u.find(".ui-tooltip-content").html(r), void 0;
            i.is("[title]") && (t && "mouseover" === t.type ? i.attr("title", "") : i.removeAttr("title"));
            u = this._tooltip(i);
            this._addDescribedBy(i, u.attr("id"));
            u.find(".ui-tooltip-content").html(r);
            this.liveRegion.children().hide();
            r.clone ? (e = r.clone(), e.removeAttr("id").find("[id]").removeAttr("id")) : e = r;
            n("<div>").html(e).appendTo(this.liveRegion);
            this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, { mousemove: o }), o(t)) : u.position(n.extend({ of: i }, this.options.position));
            this.hiding = !1;
            this.closing = !1;
            u.hide();
            this._show(u, this.options.show);
            this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function () {
                u.is(":visible") && (o(s.of), clearInterval(h));
            }, n.fx.interval));
            this._trigger("open", t, { tooltip: u });
            f = { keyup: function (t) {
                if (t.keyCode === n.ui.keyCode.ESCAPE) {
                    var r = n.Event(t);
                    r.currentTarget = i[0];
                    this.close(r, !0);
                }
            } };
            i[0] !== this.element[0] && (f.remove = function () {
                this._removeTooltip(u);
            });
            t && "mouseover" !== t.type || (f.mouseleave = "close");
            t && "focusin" !== t.type || (f.focusout = "close");
            this._on(!0, i, f);
        }
    }, close: function (t) {
        var u = this, i = n(t ? t.currentTarget : this.element), r = this._find(i);
        this.closing || (clearInterval(this.delayedShow), i.data("ui-tooltip-title") && !i.attr("title") && i.attr("title", i.data("ui-tooltip-title")), this._removeDescribedBy(i), this.hiding = !0, r.stop(!0), this._hide(r, this.options.hide, function () {
            u._removeTooltip(n(this));
            this.hiding = !1;
            this.closing = !1;
        }), i.removeData("ui-tooltip-open"), this._off(i, "mouseleave focusout keyup"), i[0] !== this.element[0] && this._off(i, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && n.each(this.parents, function (t, i) {
            n(i.element).attr("title", i.title);
            delete u.parents[t];
        }), this.closing = !0, this._trigger("close", t, { tooltip: r }), this.hiding || (this.closing = !1));
    }, _tooltip: function (t) {
        var i = n("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")), r = i.uniqueId().attr("id");
        return n("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[r] = t, i;
    }, _find: function (t) {
        var i = t.data("ui-tooltip-id");
        return i ? n("#" + i) : n();
    }, _removeTooltip: function (n) {
        n.remove();
        delete this.tooltips[n.attr("id")];
    }, _destroy: function () {
        var t = this;
        n.each(this.tooltips, function (i, r) {
            var u = n.Event("blur");
            u.target = u.currentTarget = r[0];
            t.close(u, !0);
            n("#" + i).remove();
            r.data("ui-tooltip-title") && (r.attr("title") || r.attr("title", r.data("ui-tooltip-title")), r.removeData("ui-tooltip-title"));
        });
        this.liveRegion.remove();
    } });
    o = "ui-effects-";
    s = n;
    n.effects = { effect: {} }, function (n, t) {
        function f(n, t, i) {
            var r = h[t.type] || {};
            return null == n ? i || !t.def ? null : t.def : (n = r.floor ? ~~n : parseFloat(n), isNaN(n) ? t.def : r.mod ? (n + r.mod) % r.mod : 0 > n ? 0 : n > r.max ? r.max : n);
        }
        function s(f) {
            var o = i(), s = o._rgba = [];
            return f = f.toLowerCase(), r(v, function (n, i) {
                var r, h = i.re.exec(f), c = h && i.parse(h), e = i.space || "rgba";
                return c ? (r = o[e](c), o[u[e].cache] = r[u[e].cache], s = o._rgba = r._rgba, !1) : t;
            }), s.length ? ("0,0,0,0" === s.join() && n.extend(s, e.transparent), o) : e[f];
        }
        function o(n, t, i) {
            return i = (i + 1) % 1, 1 > 6 * i ? n + 6 * (t - n) * i : 1 > 2 * i ? t : 2 > 3 * i ? n + 6 * (t - n) * (2 / 3 - i) : n;
        }
        var e, a = /^([\-+])=\s*(\d+\.?\d*)/, v = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (n) {
            return [n[1], n[2], n[3], n[4]];
        } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (n) {
            return [2.55 * n[1], 2.55 * n[2], 2.55 * n[3], n[4]];
        } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (n) {
            return [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)];
        } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (n) {
            return [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)];
        } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function (n) {
            return [n[1], n[2] / 100, n[3] / 100, n[4]];
        } }], i = n.Color = function (t, i, r, u) {
            return new n.Color.fn.parse(t, i, r, u);
        }, u = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } }, h = { byte: { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } }, c = i.support = {}, l = n("<p>")[0], r = n.each;
        l.style.cssText = "background-color:rgba(1,1,1,.5)";
        c.rgba = l.style.backgroundColor.indexOf("rgba") > -1;
        r(u, function (n, t) {
            t.cache = "_" + n;
            t.props.alpha = { idx: 3, type: "percent", def: 1 };
        });
        i.fn = n.extend(i.prototype, { parse: function (o, h, c, l) {
            if (o === t)
                return this._rgba = [null, null, null, null], this;
            (o.jquery || o.nodeType) && (o = n(o).css(h), h = t);
            var a = this, v = n.type(o), y = this._rgba = [];
            return h !== t && (o = [o, h, c, l], v = "array"), "string" === v ? this.parse(s(o) || e._default) : "array" === v ? (r(u.rgba.props, function (n, t) {
                y[t.idx] = f(o[t.idx], t);
            }), this) : "object" === v ? (o instanceof i ? r(u, function (n, t) {
                o[t.cache] && (a[t.cache] = o[t.cache].slice());
            }) : r(u, function (t, i) {
                var u = i.cache;
                r(i.props, function (n, t) {
                    if (!a[u] && i.to) {
                        if ("alpha" === n || null == o[n])
                            return;
                        a[u] = i.to(a._rgba);
                    }
                    a[u][t.idx] = f(o[n], t, !0);
                });
                a[u] && 0 > n.inArray(null, a[u].slice(0, 3)) && (a[u][3] = 1, i.from && (a._rgba = i.from(a[u])));
            }), this) : t;
        }, is: function (n) {
            var o = i(n), f = !0, e = this;
            return r(u, function (n, i) {
                var s, u = o[i.cache];
                return u && (s = e[i.cache] || i.to && i.to(e._rgba) || [], r(i.props, function (n, i) {
                    return null != u[i.idx] ? f = u[i.idx] === s[i.idx] : t;
                })), f;
            }), f;
        }, _space: function () {
            var n = [], t = this;
            return r(u, function (i, r) {
                t[r.cache] && n.push(i);
            }), n.pop();
        }, transition: function (n, t) {
            var e = i(n), c = e._space(), o = u[c], l = 0 === this.alpha() ? i("transparent") : this, a = l[o.cache] || o.to(l._rgba), s = a.slice();
            return e = e[o.cache], r(o.props, function (n, i) {
                var c = i.idx, r = a[c], u = e[c], o = h[i.type] || {};
                null !== u && (null === r ? s[c] = u : (o.mod && (u - r > o.mod / 2 ? r += o.mod : r - u > o.mod / 2 && (r -= o.mod)), s[c] = f((u - r) * t + r, i)));
            }), this[c](s);
        }, blend: function (t) {
            if (1 === this._rgba[3])
                return this;
            var r = this._rgba.slice(), u = r.pop(), f = i(t)._rgba;
            return i(n.map(r, function (n, t) {
                return (1 - u) * f[t] + u * n;
            }));
        }, toRgbaString: function () {
            var i = "rgba(", t = n.map(this._rgba, function (n, t) {
                return null == n ? t > 2 ? 1 : 0 : n;
            });
            return 1 === t[3] && (t.pop(), i = "rgb("), i + t.join() + ")";
        }, toHslaString: function () {
            var i = "hsla(", t = n.map(this.hsla(), function (n, t) {
                return null == n && (n = t > 2 ? 1 : 0), t && 3 > t && (n = Math.round(100 * n) + "%"), n;
            });
            return 1 === t[3] && (t.pop(), i = "hsl("), i + t.join() + ")";
        }, toHexString: function (t) {
            var i = this._rgba.slice(), r = i.pop();
            return t && i.push(~~(255 * r)), "#" + n.map(i, function (n) {
                return n = (n || 0).toString(16), 1 === n.length ? "0" + n : n;
            }).join("");
        }, toString: function () {
            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
        } });
        i.fn.parse.prototype = i.fn;
        u.hsla.to = function (n) {
            if (null == n[0] || null == n[1] || null == n[2])
                return [null, null, null, n[3]];
            var s, h, i = n[0] / 255, r = n[1] / 255, f = n[2] / 255, c = n[3], u = Math.max(i, r, f), e = Math.min(i, r, f), t = u - e, o = u + e, l = .5 * o;
            return s = e === u ? 0 : i === u ? 60 * (r - f) / t + 360 : r === u ? 60 * (f - i) / t + 120 : 60 * (i - r) / t + 240, h = 0 === t ? 0 : .5 >= l ? t / o : t / (2 - o), [Math.round(s) % 360, h, l, null == c ? 1 : c];
        };
        u.hsla.from = function (n) {
            if (null == n[0] || null == n[1] || null == n[2])
                return [null, null, null, n[3]];
            var r = n[0] / 360, u = n[1], t = n[2], e = n[3], i = .5 >= t ? t * (1 + u) : t + u - t * u, f = 2 * t - i;
            return [Math.round(255 * o(f, i, r + 1 / 3)), Math.round(255 * o(f, i, r)), Math.round(255 * o(f, i, r - 1 / 3)), e];
        };
        r(u, function (u, e) {
            var s = e.props, o = e.cache, h = e.to, c = e.from;
            i.fn[u] = function (u) {
                if (h && !this[o] && (this[o] = h(this._rgba)), u === t)
                    return this[o].slice();
                var l, a = n.type(u), v = "array" === a || "object" === a ? u : arguments, e = this[o].slice();
                return r(s, function (n, t) {
                    var i = v["object" === a ? n : t.idx];
                    null == i && (i = e[t.idx]);
                    e[t.idx] = f(i, t);
                }), c ? (l = i(c(e)), l[o] = e, l) : i(e);
            };
            r(s, function (t, r) {
                i.fn[t] || (i.fn[t] = function (i) {
                    var f, e = n.type(i), h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : u, o = this[h](), s = o[r.idx];
                    return "undefined" === e ? s : ("function" === e && (i = i.call(this, s), e = n.type(i)), null == i && r.empty ? this : ("string" === e && (f = a.exec(i), f && (i = s + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), o[r.idx] = i, this[h](o)));
                });
            });
        });
        i.hook = function (t) {
            var u = t.split(" ");
            r(u, function (t, r) {
                n.cssHooks[r] = { set: function (t, u) {
                    var o, f, e = "";
                    if ("transparent" !== u && ("string" !== n.type(u) || (o = s(u)))) {
                        if (u = i(o || u), !c.rgba && 1 !== u._rgba[3]) {
                            for (f = "backgroundColor" === r ? t.parentNode : t; ("" === e || "transparent" === e) && f && f.style;)
                                try {
                                    e = n.css(f, "backgroundColor");
                                    f = f.parentNode;
                                }
                                catch (h) {
                                }
                            u = u.blend(e && "transparent" !== e ? e : "_default");
                        }
                        u = u.toRgbaString();
                    }
                    try {
                        t.style[r] = u;
                    }
                    catch (h) {
                    }
                } };
                n.fx.step[r] = function (t) {
                    t.colorInit || (t.start = i(t.elem, r), t.end = i(t.end), t.colorInit = !0);
                    n.cssHooks[r].set(t.elem, t.start.transition(t.end, t.pos));
                };
            });
        };
        i.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
        n.cssHooks.borderColor = { expand: function (n) {
            var t = {};
            return r(["Top", "Right", "Bottom", "Left"], function (i, r) {
                t["border" + r + "Color"] = n;
            }), t;
        } };
        e = n.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" };
    }(s), function () {
        function t(t) {
            var r, u, i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle, f = {};
            if (i && i.length && i[0] && i[i[0]])
                for (u = i.length; u--;)
                    r = i[u], "string" == typeof i[r] && (f[n.camelCase(r)] = i[r]);
            else
                for (r in i)
                    "string" == typeof i[r] && (f[r] = i[r]);
            return f;
        }
        function i(t, i) {
            var r, f, e = {};
            for (r in i)
                f = i[r], t[r] !== f && (u[r] || (n.fx.step[r] || !isNaN(parseFloat(f))) && (e[r] = f));
            return e;
        }
        var r = ["add", "remove", "toggle"], u = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };
        n.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, i) {
            n.fx.step[i] = function (n) {
                ("none" === n.end || n.setAttr) && (1 !== n.pos || n.setAttr) || (s.style(n.elem, i, n.end), n.setAttr = !0);
            };
        });
        n.fn.addBack || (n.fn.addBack = function (n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n));
        });
        n.effects.animateClass = function (u, f, e, o) {
            var s = n.speed(f, e, o);
            return this.queue(function () {
                var o, e = n(this), h = e.attr("class") || "", f = s.children ? e.find("*").addBack() : e;
                f = f.map(function () {
                    var i = n(this);
                    return { el: i, start: t(this) };
                });
                o = function () {
                    n.each(r, function (n, t) {
                        u[t] && e[t + "Class"](u[t]);
                    });
                };
                o();
                f = f.map(function () {
                    return this.end = t(this.el[0]), this.diff = i(this.start, this.end), this;
                });
                e.attr("class", h);
                f = f.map(function () {
                    var i = this, t = n.Deferred(), r = n.extend({}, s, { queue: !1, complete: function () {
                        t.resolve(i);
                    } });
                    return this.el.animate(this.diff, r), t.promise();
                });
                n.when.apply(n, f.get()).done(function () {
                    o();
                    n.each(arguments, function () {
                        var t = this.el;
                        n.each(this.diff, function (n) {
                            t.css(n, "");
                        });
                    });
                    s.complete.call(e[0]);
                });
            });
        };
        n.fn.extend({ addClass: function (t) {
            return function (i, r, u, f) {
                return r ? n.effects.animateClass.call(this, { add: i }, r, u, f) : t.apply(this, arguments);
            };
        }(n.fn.addClass), removeClass: function (t) {
            return function (i, r, u, f) {
                return arguments.length > 1 ? n.effects.animateClass.call(this, { remove: i }, r, u, f) : t.apply(this, arguments);
            };
        }(n.fn.removeClass), toggleClass: function (t) {
            return function (i, r, u, f, e) {
                return "boolean" == typeof r || void 0 === r ? u ? n.effects.animateClass.call(this, r ? { add: i } : { remove: i }, u, f, e) : t.apply(this, arguments) : n.effects.animateClass.call(this, { toggle: i }, r, u, f);
            };
        }(n.fn.toggleClass), switchClass: function (t, i, r, u, f) {
            return n.effects.animateClass.call(this, { add: i, remove: t }, r, u, f);
        } });
    }(), function () {
        function t(t, i, r, u) {
            return n.isPlainObject(t) && (i = t, t = t.effect), t = { effect: t }, null == i && (i = {}), n.isFunction(i) && (u = i, r = null, i = {}), ("number" == typeof i || n.fx.speeds[i]) && (u = r, r = i, i = {}), n.isFunction(r) && (u = r, r = null), i && n.extend(t, i), r = r || i.duration, t.duration = n.fx.off ? 0 : "number" == typeof r ? r : r in n.fx.speeds ? n.fx.speeds[r] : n.fx.speeds._default, t.complete = u || i.complete, t;
        }
        function i(t) {
            return !t || "number" == typeof t || n.fx.speeds[t] ? !0 : "string" != typeof t || n.effects.effect[t] ? n.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0;
        }
        n.extend(n.effects, { version: "1.11.1", save: function (n, t) {
            for (var i = 0; t.length > i; i++)
                null !== t[i] && n.data(o + t[i], n[0].style[t[i]]);
        }, restore: function (n, t) {
            for (var r, i = 0; t.length > i; i++)
                null !== t[i] && (r = n.data(o + t[i]), void 0 === r && (r = ""), n.css(t[i], r));
        }, setMode: function (n, t) {
            return "toggle" === t && (t = n.is(":hidden") ? "show" : "hide"), t;
        }, getBaseline: function (n, t) {
            var i, r;
            switch (n[0]) {
                case "top":
                    i = 0;
                    break;
                case "middle":
                    i = .5;
                    break;
                case "bottom":
                    i = 1;
                    break;
                default: i = n[0] / t.height;
            }
            switch (n[1]) {
                case "left":
                    r = 0;
                    break;
                case "center":
                    r = .5;
                    break;
                case "right":
                    r = 1;
                    break;
                default: r = n[1] / t.width;
            }
            return { x: r, y: i };
        }, createWrapper: function (t) {
            if (t.parent().is(".ui-effects-wrapper"))
                return t.parent();
            var i = { width: t.outerWidth(!0), height: t.outerHeight(!0), float: t.css("float") }, u = n("<div><\/div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }), f = { width: t.width(), height: t.height() }, r = document.activeElement;
            try {
                r.id;
            }
            catch (e) {
                r = document.body;
            }
            return t.wrap(u), (t[0] === r || n.contains(t[0], r)) && n(r).focus(), u = t.parent(), "static" === t.css("position") ? (u.css({ position: "relative" }), t.css({ position: "relative" })) : (n.extend(i, { position: t.css("position"), zIndex: t.css("z-index") }), n.each(["top", "left", "bottom", "right"], function (n, r) {
                i[r] = t.css(r);
                isNaN(parseInt(i[r], 10)) && (i[r] = "auto");
            }), t.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), t.css(f), u.css(i).show();
        }, removeWrapper: function (t) {
            var i = document.activeElement;
            return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || n.contains(t[0], i)) && n(i).focus()), t;
        }, setTransition: function (t, i, r, u) {
            return u = u || {}, n.each(i, function (n, i) {
                var f = t.cssUnit(i);
                f[0] > 0 && (u[i] = f[0] * r + f[1]);
            }), u;
        } });
        n.fn.extend({ effect: function () {
            function r(t) {
                function f() {
                    n.isFunction(o) && o.call(r[0]);
                    n.isFunction(t) && t();
                }
                var r = n(this), o = i.complete, u = i.mode;
                (r.is(":hidden") ? "hide" === u : "show" === u) ? (r[u](), f()) : e.call(r[0], i, f);
            }
            var i = t.apply(this, arguments), u = i.mode, f = i.queue, e = n.effects.effect[i.effect];
            return n.fx.off || !e ? u ? this[u](i.duration, i.complete) : this.each(function () {
                i.complete && i.complete.call(this);
            }) : f === !1 ? this.each(r) : this.queue(f || "fx", r);
        }, show: function (n) {
            return function (r) {
                if (i(r))
                    return n.apply(this, arguments);
                var u = t.apply(this, arguments);
                return u.mode = "show", this.effect.call(this, u);
            };
        }(n.fn.show), hide: function (n) {
            return function (r) {
                if (i(r))
                    return n.apply(this, arguments);
                var u = t.apply(this, arguments);
                return u.mode = "hide", this.effect.call(this, u);
            };
        }(n.fn.hide), toggle: function (n) {
            return function (r) {
                if (i(r) || "boolean" == typeof r)
                    return n.apply(this, arguments);
                var u = t.apply(this, arguments);
                return u.mode = "toggle", this.effect.call(this, u);
            };
        }(n.fn.toggle), cssUnit: function (t) {
            var i = this.css(t), r = [];
            return n.each(["em", "px", "%", "pt"], function (n, t) {
                i.indexOf(t) > 0 && (r = [parseFloat(i), t]);
            }), r;
        } });
    }(), function () {
        var t = {};
        n.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (n, i) {
            t[i] = function (t) {
                return Math.pow(t, n + 2);
            };
        });
        n.extend(t, { Sine: function (n) {
            return 1 - Math.cos(n * Math.PI / 2);
        }, Circ: function (n) {
            return 1 - Math.sqrt(1 - n * n);
        }, Elastic: function (n) {
            return 0 === n || 1 === n ? n : -Math.pow(2, 8 * (n - 1)) * Math.sin((80 * (n - 1) - 7.5) * Math.PI / 15);
        }, Back: function (n) {
            return n * n * (3 * n - 2);
        }, Bounce: function (n) {
            for (var t, i = 4; ((t = Math.pow(2, --i)) - 1) / 11 > n;)
                ;
            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - n, 2);
        } });
        n.each(t, function (t, i) {
            n.easing["easeIn" + t] = i;
            n.easing["easeOut" + t] = function (n) {
                return 1 - i(1 - n);
            };
            n.easing["easeInOut" + t] = function (n) {
                return .5 > n ? i(2 * n) / 2 : 1 - i(-2 * n + 2) / 2;
            };
        });
    }();
    n.effects;
    n.effects.effect.blind = function (t, i) {
        var u, f, e, r = n(this), s = ["position", "top", "bottom", "left", "right", "height", "width"], v = n.effects.setMode(r, t.mode || "hide"), y = t.direction || "up", o = /up|down|vertical/.test(y), h = o ? "height" : "width", c = o ? "top" : "left", p = /up|left|vertical|horizontal/.test(y), l = {}, a = "show" === v;
        r.parent().is(".ui-effects-wrapper") ? n.effects.save(r.parent(), s) : n.effects.save(r, s);
        r.show();
        u = n.effects.createWrapper(r).css({ overflow: "hidden" });
        f = u[h]();
        e = parseFloat(u.css(c)) || 0;
        l[h] = a ? f : 0;
        p || (r.css(o ? "bottom" : "right", 0).css(o ? "top" : "left", "auto").css({ position: "absolute" }), l[c] = a ? e : f + e);
        a && (u.css(h, 0), p || u.css(c, e + f));
        u.animate(l, { duration: t.duration, easing: t.easing, queue: !1, complete: function () {
            "hide" === v && r.hide();
            n.effects.restore(r, s);
            n.effects.removeWrapper(r);
            i();
        } });
    };
    n.effects.effect.bounce = function (t, i) {
        var v, f, e, r = n(this), y = ["position", "top", "bottom", "left", "right", "height", "width"], k = n.effects.setMode(r, t.mode || "effect"), o = "hide" === k, p = "show" === k, h = t.direction || "up", u = t.distance, w = t.times || 5, d = 2 * w + (p || o ? 1 : 0), c = t.duration / d, l = t.easing, s = "up" === h || "down" === h ? "top" : "left", b = "up" === h || "left" === h, a = r.queue(), g = a.length;
        for ((p || o) && y.push("opacity"), n.effects.save(r, y), r.show(), n.effects.createWrapper(r), u || (u = r["top" === s ? "outerHeight" : "outerWidth"]() / 3), p && (e = { opacity: 1 }, e[s] = 0, r.css("opacity", 0).css(s, b ? 2 * -u : 2 * u).animate(e, c, l)), o && (u /= Math.pow(2, w - 1)), e = {}, e[s] = 0, v = 0; w > v; v++)
            f = {}, f[s] = (b ? "-=" : "+=") + u, r.animate(f, c, l).animate(e, c, l), u = o ? 2 * u : u / 2;
        o && (f = { opacity: 0 }, f[s] = (b ? "-=" : "+=") + u, r.animate(f, c, l));
        r.queue(function () {
            o && r.hide();
            n.effects.restore(r, y);
            n.effects.removeWrapper(r);
            i();
        });
        g > 1 && a.splice.apply(a, [1, 0].concat(a.splice(g, d + 1)));
        r.dequeue();
    };
    n.effects.effect.clip = function (t, i) {
        var h, u, f, r = n(this), c = ["position", "top", "bottom", "left", "right", "height", "width"], v = n.effects.setMode(r, t.mode || "hide"), e = "show" === v, y = t.direction || "vertical", l = "vertical" === y, o = l ? "height" : "width", a = l ? "top" : "left", s = {};
        n.effects.save(r, c);
        r.show();
        h = n.effects.createWrapper(r).css({ overflow: "hidden" });
        u = "IMG" === r[0].tagName ? h : r;
        f = u[o]();
        e && (u.css(o, 0), u.css(a, f / 2));
        s[o] = e ? f : 0;
        s[a] = e ? 0 : f / 2;
        u.animate(s, { queue: !1, duration: t.duration, easing: t.easing, complete: function () {
            e || r.hide();
            n.effects.restore(r, c);
            n.effects.removeWrapper(r);
            i();
        } });
    };
    n.effects.effect.drop = function (t, i) {
        var u, r = n(this), h = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], c = n.effects.setMode(r, t.mode || "hide"), e = "show" === c, f = t.direction || "left", o = "up" === f || "down" === f ? "top" : "left", s = "up" === f || "left" === f ? "pos" : "neg", l = { opacity: e ? 1 : 0 };
        n.effects.save(r, h);
        r.show();
        n.effects.createWrapper(r);
        u = t.distance || r["top" === o ? "outerHeight" : "outerWidth"](!0) / 2;
        e && r.css("opacity", 0).css(o, "pos" === s ? -u : u);
        l[o] = (e ? "pos" === s ? "+=" : "-=" : "pos" === s ? "-=" : "+=") + u;
        r.animate(l, { queue: !1, duration: t.duration, easing: t.easing, complete: function () {
            "hide" === c && r.hide();
            n.effects.restore(r, h);
            n.effects.removeWrapper(r);
            i();
        } });
    };
    n.effects.effect.explode = function (t, i) {
        function b() {
            p.push(this);
            p.length === o * c && k();
        }
        function k() {
            r.css({ visibility: "visible" });
            n(p).remove();
            u || r.hide();
            i();
        }
        for (var e, l, a, v, y, o = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = o, r = n(this), d = n.effects.setMode(r, t.mode || "hide"), u = "show" === d, w = r.show().css("visibility", "hidden").offset(), s = Math.ceil(r.outerWidth() / c), h = Math.ceil(r.outerHeight() / o), p = [], f = 0; o > f; f++)
            for (a = w.top + f * h, y = f - (o - 1) / 2, e = 0; c > e; e++)
                l = w.left + e * s, v = e - (c - 1) / 2, r.clone().appendTo("body").wrap("<div><\/div>").css({ position: "absolute", visibility: "visible", left: -e * s, top: -f * h }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: s, height: h, left: l + (u ? v * s : 0), top: a + (u ? y * h : 0), opacity: u ? 0 : 1 }).animate({ left: l + (u ? 0 : v * s), top: a + (u ? 0 : y * h), opacity: u ? 1 : 0 }, t.duration || 500, t.easing, b);
    };
    n.effects.effect.fade = function (t, i) {
        var r = n(this), u = n.effects.setMode(r, t.mode || "toggle");
        r.animate({ opacity: u }, { queue: !1, duration: t.duration, easing: t.easing, complete: i });
    };
    n.effects.effect.fold = function (t, i) {
        var r, e, u = n(this), s = ["position", "top", "bottom", "left", "right", "height", "width"], h = n.effects.setMode(u, t.mode || "hide"), o = "show" === h, c = "hide" === h, f = t.size || 15, l = /([0-9]+)%/.exec(f), a = !!t.horizFirst, v = o !== a, y = v ? ["width", "height"] : ["height", "width"], p = t.duration / 2, w = {}, b = {};
        n.effects.save(u, s);
        u.show();
        r = n.effects.createWrapper(u).css({ overflow: "hidden" });
        e = v ? [r.width(), r.height()] : [r.height(), r.width()];
        l && (f = parseInt(l[1], 10) / 100 * e[c ? 0 : 1]);
        o && r.css(a ? { height: 0, width: f } : { height: f, width: 0 });
        w[y[0]] = o ? e[0] : f;
        b[y[1]] = o ? e[1] : 0;
        r.animate(w, p, t.easing).animate(b, p, t.easing, function () {
            c && u.hide();
            n.effects.restore(u, s);
            n.effects.removeWrapper(u);
            i();
        });
    };
    n.effects.effect.highlight = function (t, i) {
        var r = n(this), u = ["backgroundImage", "backgroundColor", "opacity"], f = n.effects.setMode(r, t.mode || "show"), e = { backgroundColor: r.css("backgroundColor") };
        "hide" === f && (e.opacity = 0);
        n.effects.save(r, u);
        r.show().css({ backgroundImage: "none", backgroundColor: t.color || "#ffff99" }).animate(e, { queue: !1, duration: t.duration, easing: t.easing, complete: function () {
            "hide" === f && r.hide();
            n.effects.restore(r, u);
            i();
        } });
    };
    n.effects.effect.size = function (t, i) {
        var f, l, u, r = n(this), w = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], a = ["width", "height", "overflow"], v = ["fontSize"], e = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], o = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], h = n.effects.setMode(r, t.mode || "effect"), y = t.restore || "effect" !== h, c = t.scale || "both", b = t.origin || ["middle", "center"], k = r.css("position"), s = y ? w : ["position", "top", "bottom", "left", "right", "overflow", "opacity"], p = { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
        "show" === h && r.show();
        f = { height: r.height(), width: r.width(), outerHeight: r.outerHeight(), outerWidth: r.outerWidth() };
        "toggle" === t.mode && "show" === h ? (r.from = t.to || p, r.to = t.from || f) : (r.from = t.from || ("show" === h ? p : f), r.to = t.to || ("hide" === h ? p : f));
        u = { from: { y: r.from.height / f.height, x: r.from.width / f.width }, to: { y: r.to.height / f.height, x: r.to.width / f.width } };
        ("box" === c || "both" === c) && (u.from.y !== u.to.y && (s = s.concat(e), r.from = n.effects.setTransition(r, e, u.from.y, r.from), r.to = n.effects.setTransition(r, e, u.to.y, r.to)), u.from.x !== u.to.x && (s = s.concat(o), r.from = n.effects.setTransition(r, o, u.from.x, r.from), r.to = n.effects.setTransition(r, o, u.to.x, r.to)));
        ("content" === c || "both" === c) && u.from.y !== u.to.y && (s = s.concat(v).concat(a), r.from = n.effects.setTransition(r, v, u.from.y, r.from), r.to = n.effects.setTransition(r, v, u.to.y, r.to));
        n.effects.save(r, s);
        r.show();
        n.effects.createWrapper(r);
        r.css("overflow", "hidden").css(r.from);
        b && (l = n.effects.getBaseline(b, f), r.from.top = (f.outerHeight - r.outerHeight()) * l.y, r.from.left = (f.outerWidth - r.outerWidth()) * l.x, r.to.top = (f.outerHeight - r.to.outerHeight) * l.y, r.to.left = (f.outerWidth - r.to.outerWidth) * l.x);
        r.css(r.from);
        ("content" === c || "both" === c) && (e = e.concat(["marginTop", "marginBottom"]).concat(v), o = o.concat(["marginLeft", "marginRight"]), a = w.concat(e).concat(o), r.find("*[width]").each(function () {
            var i = n(this), r = { height: i.height(), width: i.width(), outerHeight: i.outerHeight(), outerWidth: i.outerWidth() };
            y && n.effects.save(i, a);
            i.from = { height: r.height * u.from.y, width: r.width * u.from.x, outerHeight: r.outerHeight * u.from.y, outerWidth: r.outerWidth * u.from.x };
            i.to = { height: r.height * u.to.y, width: r.width * u.to.x, outerHeight: r.height * u.to.y, outerWidth: r.width * u.to.x };
            u.from.y !== u.to.y && (i.from = n.effects.setTransition(i, e, u.from.y, i.from), i.to = n.effects.setTransition(i, e, u.to.y, i.to));
            u.from.x !== u.to.x && (i.from = n.effects.setTransition(i, o, u.from.x, i.from), i.to = n.effects.setTransition(i, o, u.to.x, i.to));
            i.css(i.from);
            i.animate(i.to, t.duration, t.easing, function () {
                y && n.effects.restore(i, a);
            });
        }));
        r.animate(r.to, { queue: !1, duration: t.duration, easing: t.easing, complete: function () {
            0 === r.to.opacity && r.css("opacity", r.from.opacity);
            "hide" === h && r.hide();
            n.effects.restore(r, s);
            y || ("static" === k ? r.css({ position: "relative", top: r.to.top, left: r.to.left }) : n.each(["top", "left"], function (n, t) {
                r.css(t, function (t, i) {
                    var f = parseInt(i, 10), u = n ? r.to.left : r.to.top;
                    return "auto" === i ? u + "px" : f + u + "px";
                });
            }));
            n.effects.removeWrapper(r);
            i();
        } });
    };
    n.effects.effect.scale = function (t, i) {
        var u = n(this), r = n.extend(!0, {}, t), f = n.effects.setMode(u, t.mode || "effect"), s = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === f ? 0 : 100), h = t.direction || "both", c = t.origin, e = { height: u.height(), width: u.width(), outerHeight: u.outerHeight(), outerWidth: u.outerWidth() }, o = { y: "horizontal" !== h ? s / 100 : 1, x: "vertical" !== h ? s / 100 : 1 };
        r.effect = "size";
        r.queue = !1;
        r.complete = i;
        "effect" !== f && (r.origin = c || ["middle", "center"], r.restore = !0);
        r.from = t.from || ("show" === f ? { height: 0, width: 0, outerHeight: 0, outerWidth: 0 } : e);
        r.to = { height: e.height * o.y, width: e.width * o.x, outerHeight: e.outerHeight * o.y, outerWidth: e.outerWidth * o.x };
        r.fade && ("show" === f && (r.from.opacity = 0, r.to.opacity = 1), "hide" === f && (r.from.opacity = 1, r.to.opacity = 0));
        u.effect(r);
    };
    n.effects.effect.puff = function (t, i) {
        var r = n(this), e = n.effects.setMode(r, t.mode || "hide"), o = "hide" === e, s = parseInt(t.percent, 10) || 150, f = s / 100, u = { height: r.height(), width: r.width(), outerHeight: r.outerHeight(), outerWidth: r.outerWidth() };
        n.extend(t, { effect: "scale", queue: !1, fade: !0, mode: e, complete: i, percent: o ? s : 100, from: o ? u : { height: u.height * f, width: u.width * f, outerHeight: u.outerHeight * f, outerWidth: u.outerWidth * f } });
        r.effect(t);
    };
    n.effects.effect.pulsate = function (t, i) {
        var e, r = n(this), o = n.effects.setMode(r, t.mode || "show"), h = "show" === o, a = "hide" === o, v = h || "hide" === o, s = 2 * (t.times || 5) + (v ? 1 : 0), c = t.duration / s, u = 0, f = r.queue(), l = f.length;
        for ((h || !r.is(":visible")) && (r.css("opacity", 0).show(), u = 1), e = 1; s > e; e++)
            r.animate({ opacity: u }, c, t.easing), u = 1 - u;
        r.animate({ opacity: u }, c, t.easing);
        r.queue(function () {
            a && r.hide();
            i();
        });
        l > 1 && f.splice.apply(f, [1, 0].concat(f.splice(l, s + 1)));
        r.dequeue();
    };
    n.effects.effect.shake = function (t, i) {
        var o, r = n(this), v = ["position", "top", "bottom", "left", "right", "height", "width"], k = n.effects.setMode(r, t.mode || "effect"), f = t.direction || "left", s = t.distance || 20, y = t.times || 3, p = 2 * y + 1, u = Math.round(t.duration / p), h = "up" === f || "down" === f ? "top" : "left", c = "up" === f || "left" === f, l = {}, a = {}, w = {}, e = r.queue(), b = e.length;
        for (n.effects.save(r, v), r.show(), n.effects.createWrapper(r), l[h] = (c ? "-=" : "+=") + s, a[h] = (c ? "+=" : "-=") + 2 * s, w[h] = (c ? "-=" : "+=") + 2 * s, r.animate(l, u, t.easing), o = 1; y > o; o++)
            r.animate(a, u, t.easing).animate(w, u, t.easing);
        r.animate(a, u, t.easing).animate(l, u / 2, t.easing).queue(function () {
            "hide" === k && r.hide();
            n.effects.restore(r, v);
            n.effects.removeWrapper(r);
            i();
        });
        b > 1 && e.splice.apply(e, [1, 0].concat(e.splice(b, p + 1)));
        r.dequeue();
    };
    n.effects.effect.slide = function (t, i) {
        var u, r = n(this), s = ["position", "top", "bottom", "left", "right", "width", "height"], h = n.effects.setMode(r, t.mode || "show"), c = "show" === h, f = t.direction || "left", e = "up" === f || "down" === f ? "top" : "left", o = "up" === f || "left" === f, l = {};
        n.effects.save(r, s);
        r.show();
        u = t.distance || r["top" === e ? "outerHeight" : "outerWidth"](!0);
        n.effects.createWrapper(r).css({ overflow: "hidden" });
        c && r.css(e, o ? isNaN(u) ? "-" + u : -u : u);
        l[e] = (c ? o ? "+=" : "-=" : o ? "-=" : "+=") + u;
        r.animate(l, { queue: !1, duration: t.duration, easing: t.easing, complete: function () {
            "hide" === h && r.hide();
            n.effects.restore(r, s);
            n.effects.removeWrapper(r);
            i();
        } });
    };
    n.effects.effect.transfer = function (t, i) {
        var u = n(this), r = n(t.to), f = "fixed" === r.css("position"), e = n("body"), o = f ? e.scrollTop() : 0, s = f ? e.scrollLeft() : 0, h = r.offset(), l = { top: h.top - o, left: h.left - s, height: r.innerHeight(), width: r.innerWidth() }, c = u.offset(), a = n("<div class='ui-effects-transfer'><\/div>").appendTo(document.body).addClass(t.className).css({ top: c.top - o, left: c.left - s, height: u.innerHeight(), width: u.innerWidth(), position: f ? "fixed" : "absolute" }).animate(l, t.duration, t.easing, function () {
            a.remove();
            i();
        });
    };
}), function (n) {
    var t = { $el: null, commentsById: {}, currentSortKey: "", options: { profilePictureURL: "", spinnerIconURL: "", upvoteIconURL: "", replyIconURL: "", noCommentsIconURL: "", textareaPlaceholderText: "Add a comment", popularText: "Popular", newestText: "Newest", oldestText: "Oldest", sendText: "Send", replyText: "Reply", editText: "Edit", editedText: "Edited", youText: "You", saveText: "Save", deleteText: "Delete", viewAllRepliesText: "View all __replyCount__ replies", hideRepliesText: "Hide replies", noCommentsText: "No comments", textFormatter: function (n) {
        return n;
    }, enableReplying: !0, enableEditing: !0, enableUpvoting: !0, enableDeleting: !0, enableDeletingCommentWithReplies: !0, highlightColor: "#337AB7", deleteButtonColor: "#C9302C", roundProfilePictures: !1, textareaRows: 2, textareaRowsOnFocus: 2, textareaMaxRows: 5, maxRepliesVisible: 2, fieldMappings: { id: "id", parent: "parent", created: "created", modified: "modified", content: "content", fullname: "fullname", profilePictureURL: "profile_picture_url", createdByAdmin: "created_by_admin", createdByCurrentUser: "created_by_current_user", upvoteCount: "upvote_count", userHasUpvoted: "user_has_upvoted" }, getComments: function (n) {
        n([]);
    }, postComment: function (n, t) {
        t(n);
    }, putComment: function (n, t) {
        t(n);
    }, deleteComment: function (n, t) {
        t();
    }, upvoteComment: function (n, t) {
        t(n);
    }, refresh: function () {
    }, timeFormatter: function (n) {
        return new Date(n).toLocaleDateString();
    } }, events: { "keydown [contenteditable]": "saveOnKeydown", "focus [contenteditable]": "saveEditableContent", "keyup [contenteditable]": "checkEditableContentForChange", "paste [contenteditable]": "checkEditableContentForChange", "input [contenteditable]": "checkEditableContentForChange", "blur [contenteditable]": "checkEditableContentForChange", "click .navigation li": "navigationElementClicked", "click .commenting-field.main .textarea": "showMainCommentingField", "click .commenting-field.main .close": "hideMainCommentingField", "click .commenting-field .textarea": "increaseTextareaHeight", "change .commenting-field .textarea": "increaseTextareaHeight textareaContentChanged", "click .commenting-field:not(.main) .close": "removeCommentingField", "click .commenting-field .send.enabled": "postComment", "click .commenting-field .update.enabled": "putComment", "click .commenting-field .delete.enabled": "deleteComment", "click li.comment ul.child-comments .toggle-all": "toggleReplies", "click li.comment button.reply": "replyButtonClicked", "click li.comment button.edit": "editButtonClicked", "click li.comment button.upvote": "upvoteComment" }, init: function (t, i) {
        this.$el = n(i);
        this.$el.addClass("jquery-comments");
        this.undelegateEvents();
        this.delegateEvents(), function (n) {
            (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0, 4));
        }(navigator.userAgent || navigator.vendor || window.opera);
        n.browser.mobile && this.$el.addClass("mobile");
        t.fieldMappings && (t = n.extend({}, t), n.extend(this.options.fieldMappings, t.fieldMappings), delete t.fieldMappings);
        n.extend(this.options, t);
        this.createCssDeclarations();
        this.fetchDataAndRender();
    }, delegateEvents: function () {
        this.bindEvents(!1);
    }, undelegateEvents: function () {
        this.bindEvents(!0);
    }, bindEvents: function (t) {
        var u = t ? "off" : "on", r, s, i;
        for (r in this.events) {
            var f = r.split(" ")[0], e = r.split(" ").slice(1).join(" "), o = this.events[r].split(" ");
            for (s in o)
                i = this[o[s]], i = n.proxy(i, this), e == "" ? this.$el[u](f, i) : this.$el[u](f, e, i);
        }
    }, fetchDataAndRender: function () {
        var t = this, i, r;
        this.$el.empty();
        this.createHTML();
        this.commentsById = {};
        i = function (i) {
            var r = i.map(function (n) {
                return t.createCommentModel(n);
            });
            t.sortComments(r, "oldest");
            n(r).each(function (n, i) {
                t.addCommentToDataModel(i);
            });
            t.render();
        };
        r = function () {
            i([]);
        };
        this.options.getComments(i, r);
    }, createCommentModel: function (n) {
        var t = this.applyInternalMappings(n);
        return t.childs = [], t;
    }, addCommentToDataModel: function (n) {
        if (!(n.id in this.commentsById) && (this.commentsById[n.id] = n, n.parent)) {
            var t = this.getOutermostParent(n.parent);
            t.childs.push(n.id);
        }
    }, updateCommentModel: function (t) {
        n.extend(this.commentsById[t.id], t);
    }, render: function () {
        var u = this, i, t, r;
        this.$el.find("#comment-list").remove();
        i = n("<ul/>", { id: "comment-list" });
        this.currentSortKey = this.$el.find(".navigation li.active").data().sortKey;
        t = [];
        r = [];
        n(this.getComments()).each(function (n, i) {
            i.parent == null ? t.push(i) : r.push(i);
        });
        this.sortComments(t, this.currentSortKey);
        t.reverse();
        n(t).each(function (n, t) {
            u.addComment(t, i);
        });
        this.sortComments(r, "oldest");
        n(r).each(function (n, t) {
            u.addComment(t, i);
        });
        this.$el.find("> .spinner").remove();
        this.$el.find(".no-comments").before(i);
        this.options.refresh();
    }, addComment: function (n, t) {
        var r, u, i, f;
        t = t || this.$el.find("#comment-list");
        r = this.createCommentElement(n);
        n.parent ? (u = t.find('.comment[data-id="' + n.parent + '"]'), i = u.parents(".comment").last(), i.length == 0 && (i = u), f = i.find(".child-comments"), f.append(r), this.updateToggleAllButton(i)) : t.prepend(r);
    }, removeComment: function (t) {
        var o = this, i = this.commentsById[t], s = this.getChildComments(i.id), r, f, u, e;
        n(s).each(function (n, t) {
            o.removeComment(t.id);
        });
        i.parent && (r = this.getOutermostParent(i.parent), f = r.childs.indexOf(i.id), r.childs.splice(f, 1));
        delete this.commentsById[t];
        u = this.$el.find('li.comment[data-id="' + t + '"]');
        e = u.parents("li.comment").last();
        u.remove();
        this.updateToggleAllButton(e);
    }, updateToggleAllButton: function (t) {
        var r = t.find(".child-comments"), u = r.find(".comment"), i = r.find("li.toggle-all"), f, e, o;
        u.removeClass("hidden-reply");
        f = u.slice(0, -this.options.maxRepliesVisible);
        f.addClass("hidden-reply");
        i.find("span.text").text() == this.options.textFormatter(this.options.hideRepliesText) && f.addClass("visible");
        u.length > this.options.maxRepliesVisible ? (i.length || (i = n("<li/>", { "class": "toggle-all highlight-font-bold" }), e = n("<span/>", { "class": "text" }), o = n("<span/>", { "class": "caret" }), i.append(e).append(o), r.prepend(i)), this.setToggleAllButtonText(i, !1)) : i.remove();
    }, sortComments: function (n, t) {
        var i = this;
        t == "popularity" ? n.sort(function (n, t) {
            var r = n.childs.length, u = t.childs.length, f, e;
            return i.options.enableUpvoting && (r += n.upvoteCount, u += t.upvoteCount), u != r ? u - r : (f = new Date(n.created).getTime(), e = new Date(t.created).getTime(), e - f);
        }) : n.sort(function (n, i) {
            var r = new Date(n.created).getTime(), u = new Date(i.created).getTime();
            return t == "newest" ? u - r : r - u;
        });
    }, sortAndReArrangeComments: function (t) {
        var i = this.$el.find("#comment-list"), r = this.getComments().filter(function (n) {
            return !n.parent;
        });
        this.sortComments(r, t);
        n(r).each(function (n, t) {
            var r = i.find("> li.comment[data-id=" + t.id + "]");
            i.append(r);
        });
    }, saveOnKeydown: function (t) {
        if (t.keyCode == 13 && (t.metaKey || t.ctrlKey)) {
            var i = n(t.currentTarget);
            i.siblings(".control-row").find(".save").trigger("click");
            t.stopPropagation();
            t.preventDefault();
        }
    }, saveEditableContent: function (t) {
        var i = n(t.currentTarget);
        i.data("before", i.html());
    }, checkEditableContentForChange: function (t) {
        var i = n(t.currentTarget);
        i.data("before") != i.html() && (i.data("before", i.html()), i.trigger("change"));
    }, navigationElementClicked: function (t) {
        var i = n(t.currentTarget), r;
        i.siblings().removeClass("active");
        i.addClass("active");
        r = i.data().sortKey;
        this.sortAndReArrangeComments(r);
        this.currentSortKey = r;
    }, showMainCommentingField: function (t) {
        var i = n(t.currentTarget);
        i.siblings(".control-row").show();
        i.parent().find(".close").show();
        i.focus();
    }, hideMainCommentingField: function (t) {
        var r = n(t.currentTarget), i = this.$el.find(".commenting-field.main .textarea"), u = this.$el.find(".commenting-field.main .control-row");
        this.clearTextarea(i);
        this.adjustTextareaHeight(i, !1);
        u.hide();
        r.hide();
        i.blur();
    }, increaseTextareaHeight: function (t) {
        var i = n(t.currentTarget);
        this.adjustTextareaHeight(i, !0);
    }, textareaContentChanged: function (t) {
        var i = n(t.currentTarget), s = this.getTextareaContent(i), h = i.siblings(".control-row").find(".save"), r, f, u, e, o, c, l, a;
        i.find(".reply-to-badge").length || (r = i.attr("data-comment"), r ? (f = i.parents("li.comment"), f.length > 1 && (u = f.last().data("id"), i.attr("data-parent", u))) : (u = i.parents("li.comment").last().data("id"), i.attr("data-parent", u)));
        e = i.parents(".commenting-field").first();
        i[0].scrollHeight > i.outerHeight() ? e.addClass("scrollable") : e.removeClass("scrollable");
        o = !0;
        (r = i.attr("data-comment")) && (c = s != this.commentsById[r].content, this.commentsById[r].parent && (l = this.commentsById[r].parent.toString()), a = i.attr("data-parent") != l, o = c || a);
        s.length && o ? h.addClass("enabled") : h.removeClass("enabled");
    }, removeCommentingField: function (t) {
        var i = n(t.currentTarget), u = i.siblings(".textarea"), r;
        u.attr("data-comment") && i.parents("li.comment").first().removeClass("edit");
        r = i.parents(".commenting-field").first();
        r.remove();
    }, postComment: function (t) {
        var r = this, u = n(t.currentTarget), e = u.parents(".commenting-field").first(), o = e.find(".textarea"), f, i, s, h;
        u.removeClass("enabled");
        f = (new Date).toISOString();
        i = { id: "c" + (this.getComments().length + 1), parent: o.attr("data-parent") || null, created: f, modified: f, content: this.getTextareaContent(o), fullname: this.options.textFormatter(this.options.youText), profilePictureURL: this.options.profilePictureURL, createdByCurrentUser: !0, upvoteCount: 0, userHasUpvoted: !1 };
        i = this.applyExternalMappings(i);
        s = function (n) {
            var t = r.createCommentModel(n);
            r.addCommentToDataModel(t);
            r.addComment(t);
            e.find(".close").trigger("click");
        };
        h = function () {
            u.addClass("enabled");
        };
        this.options.postComment(i, s, h);
    }, putComment: function (t) {
        var r = this, u = n(t.currentTarget), e = u.parents(".commenting-field").first(), f = e.find(".textarea"), i, o, s;
        u.removeClass("enabled");
        i = n.extend({}, this.commentsById[f.attr("data-comment")]);
        n.extend(i, { parent: f.attr("data-parent") || null, content: this.getTextareaContent(f), modified: (new Date).getTime() });
        i = this.applyExternalMappings(i);
        o = function (n) {
            var t = r.createCommentModel(n);
            delete t.childs;
            r.updateCommentModel(t);
            e.find(".close").trigger("click");
            r.reRenderComment(t.id);
        };
        s = function () {
            u.addClass("enabled");
        };
        this.options.putComment(i, o, s);
    }, deleteComment: function (t) {
        var e = this, r = n(t.currentTarget), o = r.parents(".commenting-field").first().find(".textarea"), i = n.extend({}, this.commentsById[o.attr("data-comment")]), s = i.id, u, f;
        r.removeClass("enabled");
        i = this.applyExternalMappings(i);
        u = function () {
            e.removeComment(s);
        };
        f = function () {
            r.addClass("enabled");
        };
        this.options.deleteComment(i, u, f);
    }, toggleReplies: function (t) {
        var i = n(t.currentTarget);
        i.siblings(".hidden-reply").toggleClass("visible");
        this.setToggleAllButtonText(i, !0);
    }, replyButtonClicked: function (t) {
        var r = n(t.currentTarget), u = r.parents("li.comment").last(), f = r.parents(".comment").first().data().id, i = u.find(".child-comments > .commenting-field"), e, o;
        i.length && i.remove();
        e = i.find(".textarea").attr("data-parent");
        e != f && (i = this.createCommentingFieldElement(f), u.find(".child-comments").append(i), o = i.find(".textarea"), this.moveCursorToEnd(o));
    }, editButtonClicked: function (t) {
        var e = n(t.currentTarget), u = e.parents("li.comment").first(), i = u.data().model, f, r;
        u.addClass("edit");
        f = this.createCommentingFieldElement(i.parent, i.id);
        u.find(".comment-wrapper").first().append(f);
        r = f.find(".textarea");
        r.attr("data-comment", i.id);
        r.append(this.getTextareaContentAsEscapedHTML(i.content));
        this.moveCursorToEnd(r);
    }, upvoteComment: function (t) {
        var r = this, h = n(t.currentTarget).parents("li.comment").first(), i = h.data().model, f = i.upvoteCount, e, u, o, s;
        e = i.userHasUpvoted ? f - 1 : f + 1;
        i.userHasUpvoted = !i.userHasUpvoted;
        i.upvoteCount = e;
        this.reRenderUpvotes(i.id);
        u = n.extend({}, i);
        u = this.applyExternalMappings(u);
        o = function (n) {
            var t = r.createCommentModel(n);
            r.updateCommentModel(t);
            r.reRenderUpvotes(t.id);
        };
        s = function () {
            i.userHasUpvoted = !i.userHasUpvoted;
            i.upvoteCount = f;
            r.reRenderUpvotes(i.id);
        };
        this.options.upvoteComment(u, o, s);
    }, createHTML: function () {
        var o = this, t = this.createCommentingFieldElement(), e, u, i, f, r;
        t.addClass("main");
        this.$el.append(t);
        e = t.find(".control-row");
        e.hide();
        t.find(".close").hide();
        this.$el.append(this.createNavigationElement());
        u = n("<div/>", { "class": "spinner" });
        i = n("<i/>", { "class": "fa fa-spinner fa-spin" });
        this.options.spinnerIconURL.length && (i.css("background-image", 'url("' + this.options.spinnerIconURL + '")'), i.addClass("image"));
        u.html(i);
        this.$el.append(u);
        f = n("<div/>", { "class": "no-comments", text: this.options.textFormatter(this.options.noCommentsText) });
        r = n("<i/>", { "class": "fa fa-comments fa-2x" });
        this.options.noCommentsIconURL.length && (r.css("background-image", 'url("' + this.options.noCommentsIconURL + '")'), r.addClass("image"));
        f.prepend(n("<br/>")).prepend(r);
        this.$el.append(f);
    }, createProfilePictureElement: function (t) {
        return n("<img/>", { src: t, "class": "profile-picture" + (this.options.roundProfilePictures ? " round" : "") });
    }, createCommentingFieldElement: function (t, i) {
        var b = this, h = n("<div/>", { "class": "commenting-field" }), c = this.createProfilePictureElement(this.options.profilePictureURL), a, e, v, u, y, p, o, s, w;
        c.addClass("by-current-user");
        var l = n("<div/>", { "class": "textarea-wrapper" }), f = n("<div/>", { "class": "control-row" }), r = n("<div/>", { "class": "textarea", "data-placeholder": this.options.textFormatter(this.options.textareaPlaceholderText), contenteditable: !0 });
        return this.adjustTextareaHeight(r, !1), a = n("<span/>", { "class": "close" }).append(n('<span class="left"/>')).append(n('<span class="right"/>')), i ? (u = this.options.textFormatter(this.options.saveText), this.options.enableDeleting && (e = !0, this.options.enableDeletingCommentWithReplies || n(this.getComments()).each(function (n, t) {
            t.parent == i && (e = !1);
        }), e && (v = n("<span/>", { "class": "enabled delete", text: this.options.textFormatter(this.options.deleteText) }).css("background-color", this.options.deleteButtonColor), f.append(v)))) : u = this.options.textFormatter(this.options.sendText), y = i ? "update" : "send", p = n("<span/>", { "class": y + " save highlight-background", text: u }), f.prepend(p), l.append(a).append(r).append(f), h.append(c).append(l), t && (r.attr("data-parent", t), o = this.commentsById[t], o.parent && (r.html("&nbsp;"), s = n("<input/>", { "class": "reply-to-badge highlight-font-bold", type: "button" }), w = "@" + o.fullname, s.val(w), r.prepend(s))), h;
    }, createNavigationElement: function () {
        var t = n("<ul/>", { "class": "navigation" }), i = n("<li/>", { text: this.options.textFormatter(this.options.popularText), "data-sort-key": "popularity" }), r = n("<li/>", { text: this.options.textFormatter(this.options.newestText), "data-sort-key": "newest" }), u = n("<li/>", { text: this.options.textFormatter(this.options.oldestText), "data-sort-key": "oldest" }), f = this.options.enableReplying || this.options.enableUpvoting;
        return f && t.append(i), t.append(r).append(u), t.children().first().addClass("active"), t;
    }, createCommentElement: function (t) {
        var i = n("<li/>", { "data-id": t.id, "class": "comment" }).data("model", t), r, u;
        return t.createdByCurrentUser && i.addClass("by-current-user"), t.createdByAdmin && i.addClass("by-admin"), r = n("<ul/>", { "class": "child-comments" }), u = this.createCommentWrapperElement(t), i.append(u), t.parent == null && i.append(r), i;
    }, createCommentWrapperElement: function (t) {
        var h = n("<div/>", { "class": "comment-wrapper" }), p = this.createProfilePictureElement(t.profilePictureURL), w = n("<time/>", { text: this.options.timeFormatter(t.created), "data-original": t.created }), f = n("<div/>", { "class": "name", text: t.fullname }), e, o, r, u, s, c, l, v, y;
        t.createdByAdmin && f.addClass("highlight-font-bold");
        t.parent && (e = this.commentsById[t.parent], e.parent && (o = n("<span/>", { "class": "reply-to", text: e.fullname }), r = n("<i/>", { "class": "fa fa-share" }), this.options.replyIconURL.length && (r.css("background-image", 'url("' + this.options.replyIconURL + '")'), r.addClass("image")), o.prepend(r), f.append(o)));
        u = n("<div/>", { "class": "wrapper" });
        s = n("<div/>", { "class": "content", text: t.content }).html(this.linkify(this.escape(t.content)));
        t.modified && t.modified != t.created && (c = this.options.timeFormatter(t.modified), l = n("<time/>", { "class": "edited", text: this.options.textFormatter(this.options.editedText) + " " + c, "data-original": t.modified }), s.append(l));
        var i = n("<span/>", { "class": "actions" }), b = n("<span/>", { "class": "separator", text: "·" }), k = n("<button/>", { "class": "action reply", text: this.options.textFormatter(this.options.replyText) }), a = n("<i/>", { "class": "fa fa-thumbs-up" });
        return this.options.upvoteIconURL.length && (a.css("background-image", 'url("' + this.options.upvoteIconURL + '")'), a.addClass("image")), v = this.createUpvoteElement(t), y = n("<button/>", { "class": "action edit", text: this.options.textFormatter(this.options.editText) }), this.options.enableReplying && i.append(k), this.options.enableUpvoting && i.append(v), this.options.enableEditing && t.createdByCurrentUser && i.append(y), i.children().each(function (t, i) {
            n(i).is(":last-child") || n(i).after(b.clone());
        }), u.append(s), u.append(i), h.append(p).append(w).append(f).append(u), h;
    }, createUpvoteElement: function (t) {
        var i = n("<i/>", { "class": "fa fa-thumbs-up" });
        return this.options.upvoteIconURL.length && (i.css("background-image", 'url("' + this.options.upvoteIconURL + '")'), i.addClass("image")), n("<button/>", { "class": "action upvote" + (t.userHasUpvoted ? " highlight-font" : "") }).append(n("<span/>", { text: t.upvoteCount, "class": "upvote-count" })).append(i);
    }, reRenderComment: function (n) {
        var t = this.commentsById[n], i = this.createCommentWrapperElement(t), r = this.$el.find('li.comment[data-id="' + t.id + '"]');
        r.find("> .comment-wrapper").replaceWith(i);
    }, reRenderUpvotes: function (n) {
        var t = this.commentsById[n], i = this.createUpvoteElement(t), r = this.$el.find('li.comment[data-id="' + t.id + '"]');
        r.find(".upvote").first().replaceWith(i);
    }, createCssDeclarations: function () {
        n("head style.jquery-comments-css").remove();
        this.createCss(".jquery-comments ul.navigation li.active:after {background: " + this.options.highlightColor + " !important;", +'}');
        this.createCss(".jquery-comments .highlight-background {background: " + this.options.highlightColor + " !important;", +'}');
        this.createCss(".jquery-comments .highlight-font {color: " + this.options.highlightColor + " !important;}");
        this.createCss(".jquery-comments .highlight-font-bold {color: " + this.options.highlightColor + " !important;font-weight: bold;}");
    }, createCss: function (t) {
        var i = n("<style/>", { type: "text/css", "class": "jquery-comments-css", text: t });
        n("head").append(i);
    }, getComments: function () {
        var n = this;
        return Object.keys(this.commentsById).map(function (t) {
            return n.commentsById[t];
        });
    }, getChildComments: function (n) {
        return this.getComments().filter(function (t) {
            return t.parent == n;
        });
    }, getOutermostParent: function (n) {
        var i = n, t;
        do
            t = this.commentsById[i], i = t.parent;
        while (t.parent != null);
        return t;
    }, setToggleAllButtonText: function (n, t) {
        var u = this, i = n.find("span.text"), e = n.find(".caret"), f = function () {
            var t = u.options.textFormatter(u.options.viewAllRepliesText), r = n.siblings(".comment").length;
            t = t.replace("__replyCount__", r);
            i.text(t);
        }, r = this.options.textFormatter(this.options.hideRepliesText);
        t ? (i.text() == r ? f() : i.text(r), e.toggleClass("up")) : i.text() != r && f();
    }, adjustTextareaHeight: function (t, i) {
        var e = 2.2, o = 1.45, s = function (n) {
            var i = e + (n - 1) * o;
            t.css("height", i + "em");
        }, t = n(t), r = i == !0 ? this.options.textareaRowsOnFocus : this.options.textareaRows, u, f;
        do
            s(r), r++, u = t[0].scrollHeight > t.outerHeight(), f = this.options.textareaMaxRows == !1 ? !1 : r > this.options.textareaMaxRows;
        while (u && !f);
    }, clearTextarea: function (n) {
        n.empty().trigger("input");
    }, getTextareaContent: function (t) {
        var i = n("<pre/>").html(t.html());
        return i.find("div, p, br").replaceWith(function () {
            return "\n" + this.innerHTML;
        }), i.text().replace(/^\s+/g, "");
    }, getTextareaContentAsEscapedHTML: function (n) {
        var t = this.escape(n);
        return t.replace(/(?:\n)/g, "<br>");
    }, moveCursorToEnd: function (t) {
        var i, u, r;
        t = n(t)[0];
        n(t).trigger("input");
        n(t).scrollTop(t.scrollHeight);
        typeof window.getSelection != "undefined" && typeof document.createRange != "undefined" ? (i = document.createRange(), i.selectNodeContents(t), i.collapse(!1), u = window.getSelection(), u.removeAllRanges(), u.addRange(i)) : typeof document.body.createTextRange != "undefined" && (r = document.body.createTextRange(), r.moveToElementText(t), r.collapse(!1), r.select());
        t.focus();
    }, escape: function (t) {
        return n("<pre/>").text(t).html();
    }, linkify: function (n) {
        var t, u, f, e, o, i, r;
        if (u = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, t = n.replace(u, '<a href="$1" target="_blank">$1<\/a>'), f = /(^|[^\/f])(www\.[\S]+(\b|$))/gim, t = t.replace(f, '$1<a href="http://$2" target="_blank">$2<\/a>'), e = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim, t = t.replace(e, '<a href="mailto:$1">$1<\/a>'), o = n.match(/<a href/g) || [], o.length > 0) {
            for (i = n.split(/(<\/a>)/g), r = 0; r < i.length; r++)
                i[r].match(/<a href/g) == null && (i[r] = i[r].replace(u, '<a href="$1" target="_blank">$1<\/a>').replace(f, '$1<a href="http://$2" target="_blank">$2<\/a>').replace(e, '<a href="mailto:$1">$1<\/a>'));
            return i.join("");
        }
        return t;
    }, applyInternalMappings: function (n) {
        var r = {}, i = this.options.fieldMappings, t;
        for (t in i)
            i.hasOwnProperty(t) && (r[i[t]] = t);
        return this.applyMappings(r, n);
    }, applyExternalMappings: function (n) {
        var t = this.options.fieldMappings;
        return this.applyMappings(t, n);
    }, applyMappings: function (n, t) {
        var r = {}, i, u;
        for (i in t)
            i in n && (u = n[i], r[u] = t[i]);
        return r;
    } };
    n.fn.comments = function (i) {
        return this.each(function () {
            var r = Object.create(t);
            r.init(i || {}, this);
            n.data(this, "comments", r);
        });
    };
}(jQuery), window.Modernizr = function (n, t, i) {
    function l(n) {
        c.cssText = n;
    }
    function lt(n, t) {
        return l(a.join(n + ";") + (t || ""));
    }
    function h(n, t) {
        return typeof n === t;
    }
    function v(n, t) {
        return !!~("" + n).indexOf(t);
    }
    function ut(n, t) {
        for (var r in n)
            if (c[n[r]] !== i)
                return t == "pfx" ? n[r] : !0;
        return !1;
    }
    function at(n, t, r) {
        var f, u;
        for (f in n)
            if (u = t[n[f]], u !== i)
                return r === !1 ? n[f] : h(u, "function") ? u.bind(r || t) : u;
        return !1;
    }
    function e(n, t, i) {
        var r = n.charAt(0).toUpperCase() + n.substr(1), u = (n + " " + p.join(r + " ") + r).split(" ");
        return h(t, "string") || h(t, "undefined") ? ut(u, t) : (u = (n + " " + st.join(r + " ") + r).split(" "), at(u, t, i));
    }
    function vt() {
        u.input = function (i) {
            for (var r = 0, u = i.length; r < u; r++)
                b[i[r]] = i[r] in f;
            return b.list && (b.list = !!t.createElement("datalist") && !!n.HTMLDataListElement), b;
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
        u.inputtypes = function (n) {
            for (var e = 0, r, u, o, h = n.length; e < h; e++)
                f.setAttribute("type", u = n[e]), r = f.type !== "text", r && (f.value = y, f.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(u) && f.style.WebkitAppearance !== i ? (s.appendChild(f), o = t.defaultView, r = o.getComputedStyle && o.getComputedStyle(f, null).WebkitAppearance !== "textfield" && f.offsetHeight !== 0, s.removeChild(f)) : /^(search|tel)$/.test(u) || (/^(url|email)$/.test(u) ? r = f.checkValidity && f.checkValidity() === !1 : /^color$/.test(u) ? (s.appendChild(f), s.offsetWidth, r = f.value != y, s.removeChild(f)) : r = f.value != y)), ht[n[e]] = !!r;
            return ht;
        }("search tel url email datetime date month week time datetime-local number range color".split(" "));
    }
    var u = {}, s = t.documentElement, o = "modernizr", ft = t.createElement(o), c = ft.style, f = t.createElement("input"), y = ":)", et = {}.toString, a = " -webkit- -moz- -o- -ms- ".split(" "), ot = "Webkit Moz O ms", p = ot.split(" "), st = ot.toLowerCase().split(" "), w = { svg: "http://www.w3.org/2000/svg" }, r = {}, ht = {}, b = {}, g = [], nt = g.slice, k, tt = function (n, i, r, u) {
        var l, a, c, f = t.createElement("div"), h = t.body, e = h ? h : t.createElement("body");
        if (parseInt(r, 10))
            while (r--)
                c = t.createElement("div"), c.id = u ? u[r] : o + (r + 1), f.appendChild(c);
        return l = ["&#173;", "<style>", n, "<\/style>"].join(""), f.id = o, e.innerHTML += l, e.appendChild(f), h || (e.style.background = "", s.appendChild(e)), a = i(f, n), h ? f.parentNode.removeChild(f) : e.parentNode.removeChild(e), !!a;
    }, yt = function (t) {
        var i = n.matchMedia || n.msMatchMedia, r;
        return i ? i(t).matches : (tt("@media " + t + " { #" + o + " { position: absolute; } }", function (t) {
            r = (n.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position == "absolute";
        }), r);
    }, ct = function () {
        function n(n, u) {
            u = u || t.createElement(r[n] || "div");
            n = "on" + n;
            var f = n in u;
            return f || (u.setAttribute || (u = t.createElement("div")), u.setAttribute && u.removeAttribute && (u.setAttribute(n, ""), f = h(u[n], "function"), h(u[n], "undefined") || (u[n] = i), u.removeAttribute(n))), u = null, f;
        }
        var r = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" };
        return n;
    }(), it = {}.hasOwnProperty, rt, pt, d;
    rt = !h(it, "undefined") && !h(it.call, "undefined") ? function (n, t) {
        return it.call(n, t);
    } : function (n, t) {
        return t in n && h(n.constructor.prototype[t], "undefined");
    };
    Function.prototype.bind || (Function.prototype.bind = function (n) {
        var t = this, i, r;
        if (typeof t != "function")
            throw new TypeError;
        return i = nt.call(arguments, 1), r = function () {
            var f, e, u;
            return this instanceof r ? (f = function () {
            }, f.prototype = t.prototype, e = new f, u = t.apply(e, i.concat(nt.call(arguments))), Object(u) === u ? u : e) : t.apply(n, i.concat(nt.call(arguments)));
        }, r;
    });
    pt = function (i, r) {
        var e = i.join(""), f = r.length;
        tt(e, function (i, r) {
            for (var o = t.styleSheets[t.styleSheets.length - 1], s = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "", h = i.childNodes, e = {}; f--;)
                e[h[f].id] = h[f];
            u.touch = "ontouchstart" in n || n.DocumentTouch && t instanceof DocumentTouch || (e.touch && e.touch.offsetTop) === 9;
            u.csstransforms3d = (e.csstransforms3d && e.csstransforms3d.offsetLeft) === 9 && e.csstransforms3d.offsetHeight === 3;
            u.generatedcontent = (e.generatedcontent && e.generatedcontent.offsetHeight) >= 1;
            u.fontface = /src/i.test(s) && s.indexOf(r.split(" ")[0]) === 0;
        }, f, r);
    }(['@font-face {font-family:"font";src:url("https://")}', ["@media (", a.join("touch-enabled),("), o, ")", "{#touch{top:9px;position:absolute}}"].join(""), ["@media (", a.join("transform-3d),("), o, ")", "{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join(""), ['#generatedcontent:after{content:"', y, '";visibility:hidden}'].join("")], ["fontface", "touch", "csstransforms3d", "generatedcontent"]);
    r.flexbox = function () {
        return e("flexOrder");
    };
    r.canvas = function () {
        var n = t.createElement("canvas");
        return !!n.getContext && !!n.getContext("2d");
    };
    r.canvastext = function () {
        return !!u.canvas && !!h(t.createElement("canvas").getContext("2d").fillText, "function");
    };
    r.webgl = function () {
        try {
            var r = t.createElement("canvas"), u;
            u = !(!n.WebGLRenderingContext || !r.getContext("experimental-webgl") && !r.getContext("webgl"));
            r = i;
        }
        catch (f) {
            u = !1;
        }
        return u;
    };
    r.touch = function () {
        return u.touch;
    };
    r.geolocation = function () {
        return !!navigator.geolocation;
    };
    r.postmessage = function () {
        return !!n.postMessage;
    };
    r.websqldatabase = function () {
        return !!n.openDatabase;
    };
    r.indexedDB = function () {
        return !!e("indexedDB", n);
    };
    r.hashchange = function () {
        return ct("hashchange", n) && (t.documentMode === i || t.documentMode > 7);
    };
    r.history = function () {
        return !!n.history && !!history.pushState;
    };
    r.draganddrop = function () {
        var n = t.createElement("div");
        return "draggable" in n || "ondragstart" in n && "ondrop" in n;
    };
    r.websockets = function () {
        for (var t = -1, i = p.length; ++t < i;)
            if (n[p[t] + "WebSocket"])
                return !0;
        return "WebSocket" in n;
    };
    r.rgba = function () {
        return l("background-color:rgba(150,255,150,.5)"), v(c.backgroundColor, "rgba");
    };
    r.hsla = function () {
        return l("background-color:hsla(120,40%,100%,.5)"), v(c.backgroundColor, "rgba") || v(c.backgroundColor, "hsla");
    };
    r.multiplebgs = function () {
        return l("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(c.background);
    };
    r.backgroundsize = function () {
        return e("backgroundSize");
    };
    r.borderimage = function () {
        return e("borderImage");
    };
    r.borderradius = function () {
        return e("borderRadius");
    };
    r.boxshadow = function () {
        return e("boxShadow");
    };
    r.textshadow = function () {
        return t.createElement("div").style.textShadow === "";
    };
    r.opacity = function () {
        return lt("opacity:.55"), /^0.55$/.test(c.opacity);
    };
    r.cssanimations = function () {
        return e("animationName");
    };
    r.csscolumns = function () {
        return e("columnCount");
    };
    r.cssgradients = function () {
        var n = "background-image:";
        return l((n + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + n) + a.join("linear-gradient(left top,#9f9, white);" + n)).slice(0, -n.length)), v(c.backgroundImage, "gradient");
    };
    r.cssreflections = function () {
        return e("boxReflect");
    };
    r.csstransforms = function () {
        return !!e("transform");
    };
    r.csstransforms3d = function () {
        var n = !!e("perspective");
        return n && "webkitPerspective" in s.style && (n = u.csstransforms3d), n;
    };
    r.csstransitions = function () {
        return e("transition");
    };
    r.fontface = function () {
        return u.fontface;
    };
    r.generatedcontent = function () {
        return u.generatedcontent;
    };
    r.video = function () {
        var i = t.createElement("video"), n = !1;
        try {
            (n = !!i.canPlayType) && (n = new Boolean(n), n.ogg = i.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = i.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = i.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""));
        }
        catch (r) {
        }
        return n;
    };
    r.audio = function () {
        var i = t.createElement("audio"), n = !1;
        try {
            (n = !!i.canPlayType) && (n = new Boolean(n), n.ogg = i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = i.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = i.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (i.canPlayType("audio/x-m4a;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""));
        }
        catch (r) {
        }
        return n;
    };
    r.localstorage = function () {
        try {
            return localStorage.setItem(o, o), localStorage.removeItem(o), !0;
        }
        catch (n) {
            return !1;
        }
    };
    r.sessionstorage = function () {
        try {
            return sessionStorage.setItem(o, o), sessionStorage.removeItem(o), !0;
        }
        catch (n) {
            return !1;
        }
    };
    r.webworkers = function () {
        return !!n.Worker;
    };
    r.applicationcache = function () {
        return !!n.applicationCache;
    };
    r.svg = function () {
        return !!t.createElementNS && !!t.createElementNS(w.svg, "svg").createSVGRect;
    };
    r.inlinesvg = function () {
        var n = t.createElement("div");
        return n.innerHTML = "<svg/>", (n.firstChild && n.firstChild.namespaceURI) == w.svg;
    };
    r.smil = function () {
        return !!t.createElementNS && /SVGAnimate/.test(et.call(t.createElementNS(w.svg, "animate")));
    };
    r.svgclippaths = function () {
        return !!t.createElementNS && /SVGClipPath/.test(et.call(t.createElementNS(w.svg, "clipPath")));
    };
    for (d in r)
        rt(r, d) && (k = d.toLowerCase(), u[k] = r[d](), g.push((u[k] ? "" : "no-") + k));
    return u.input || vt(), u.addTest = function (n, t) {
        if (typeof n == "object")
            for (var r in n)
                rt(n, r) && u.addTest(r, n[r]);
        else {
            if (n = n.toLowerCase(), u[n] !== i)
                return u;
            t = typeof t == "function" ? t() : t;
            s.className += " " + (t ? "" : "no-") + n;
            u[n] = t;
        }
        return u;
    }, l(""), ft = f = null, function (n, t) {
        function o(n, t) {
            var i = n.createElement("p"), r = n.getElementsByTagName("head")[0] || n.documentElement;
            return i.innerHTML = "x<style>" + t + "<\/style>", r.insertBefore(i.lastChild, r.firstChild);
        }
        function s() {
            var n = i.elements;
            return typeof n == "string" ? n.split(" ") : n;
        }
        function h(n) {
            var t = {}, u = n.createElement, f = n.createDocumentFragment, r = f();
            n.createElement = function (n) {
                var f = (t[n] || (t[n] = u(n))).cloneNode();
                return i.shivMethods && f.canHaveChildren && !c.test(n) ? r.appendChild(f) : f;
            };
            n.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + s().join().replace(/\w+/g, function (n) {
                return t[n] = u(n), r.createElement(n), 'c("' + n + '")';
            }) + ");return n}")(i, r);
        }
        function u(n) {
            var t;
            return n.documentShived ? n : (i.shivCSS && !f && (t = !!o(n, "article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")), e || (t = !h(n)), t && (n.documentShived = t), n);
        }
        var r = n.html5 || {}, c = /^<|^(?:button|form|map|select|textarea)$/i, f, e, i;
        (function () {
            var n = t.createElement("a");
            n.innerHTML = "<xyz><\/xyz>";
            f = "hidden" in n;
            e = n.childNodes.length == 1 || function () {
                try {
                    t.createElement("a");
                }
                catch (i) {
                    return !0;
                }
                var n = t.createDocumentFragment();
                return typeof n.cloneNode == "undefined" || typeof n.createDocumentFragment == "undefined" || typeof n.createElement == "undefined";
            }();
        })();
        i = { elements: r.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video", shivCSS: r.shivCSS !== !1, shivMethods: r.shivMethods !== !1, type: "default", shivDocument: u };
        n.html5 = i;
        u(t);
    }(this, t), u._version = "2.5.3", u._prefixes = a, u._domPrefixes = st, u._cssomPrefixes = p, u.mq = yt, u.hasEvent = ct, u.testProp = function (n) {
        return ut([n]);
    }, u.testAllProps = e, u.testStyles = tt, u.prefixed = function (n, t, i) {
        return t ? e(n, t, i) : e(n, "pfx");
    }, s.className = s.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (" js " + g.join(" ")), u;
}(this, this.document), function (n, t, i) {
    function h(n) {
        return y.call(n) == "[object Function]";
    }
    function c(n) {
        return typeof n == "string";
    }
    function l() {
    }
    function w(n) {
        return !n || n == "loaded" || n == "complete" || n == "uninitialized";
    }
    function f() {
        var n = a.shift();
        v = 1;
        n ? n.t ? s(function () {
            (n.t == "c" ? u.injectCss : u.injectJs)(n.s, 0, n.a, n.x, n.e, 1);
        }, 0) : (n(), f()) : v = 0;
    }
    function ut(n, i, e, h, c, l, y) {
        function k(t) {
            if (!nt && w(p.readyState) && (tt.r = nt = 1, !v && f(), p.onload = p.onreadystatechange = null, t)) {
                n != "img" && s(function () {
                    g.removeChild(p);
                }, 50);
                for (var u in r[i])
                    r[i].hasOwnProperty(u) && r[i][u].onload();
            }
        }
        var y = y || u.errorTimeout, p = {}, nt = 0, b = 0, tt = { t: e, s: i, e: c, a: l, x: y };
        r[i] === 1 && (b = 1, r[i] = [], p = t.createElement(n));
        n == "object" ? p.data = i : (p.src = i, p.type = n);
        p.width = p.height = "0";
        p.onerror = p.onload = p.onreadystatechange = function () {
            k.call(this, b);
        };
        a.splice(h, 0, tt);
        n != "img" && (b || r[i] === 2 ? (g.insertBefore(p, d ? null : o), s(k, y)) : r[i].push(p));
    }
    function ft(n, t, i, r, u) {
        return v = 0, t = t || "j", c(n) ? ut(t == "c" ? et : nt, n, t, this.i++, i, r, u) : (a.splice(this.i++, 0, n), a.length == 1 && f()), this;
    }
    function b() {
        var n = u;
        return n.loader = { load: ft, i: 0 }, n;
    }
    var e = t.documentElement, s = n.setTimeout, o = t.getElementsByTagName("script")[0], y = {}.toString, a = [], v = 0, k = "MozAppearance" in e.style, d = k && !!t.createRange().compareNode, g = d ? e : o.parentNode, e = n.opera && y.call(n.opera) == "[object Opera]", e = !!t.attachEvent && !e, nt = k ? "object" : e ? "script" : "img", et = e ? "script" : nt, tt = Array.isArray || function (n) {
        return y.call(n) == "[object Array]";
    }, p = [], r = {}, it = { timeout: function (n, t) {
        return t.length && (n.timeout = t[0]), n;
    } }, rt, u;
    u = function (n) {
        function v(n) {
            for (var n = n.split("!"), f = p.length, t = n.pop(), e = n.length, t = { url: t, origUrl: t, prefixes: n }, u, r, i = 0; i < e; i++)
                r = n[i].split("="), (u = it[r.shift()]) && (t = u(t, r));
            for (i = 0; i < f; i++)
                t = p[i](t);
            return t;
        }
        function e(n, t, u, e, o) {
            var s = v(n), c = s.autoCallback;
            s.url.split(".").pop().split("?").shift();
            s.bypass || (t && (t = h(t) ? t : t[n] || t[e] || t[n.split("/").pop().split("?")[0]] || f), s.instead ? s.instead(n, t, u, e, o) : (r[s.url] ? s.noexec = !0 : r[s.url] = 1, u.load(s.url, s.forceCSS || !s.forceJS && "css" == s.url.split(".").pop().split("?").shift() ? "c" : i, s.noexec, s.attrs, s.timeout), (h(t) || h(c)) && u.load(function () {
                b();
                t && t(s.origUrl, o, e);
                c && c(s.origUrl, o, e);
                r[s.url] = 2;
            })));
        }
        function a(n, t) {
            function a(n, o) {
                if (n) {
                    if (c(n))
                        o || (i = function () {
                            var n = [].slice.call(arguments);
                            s.apply(this, n);
                            u();
                        }), e(n, i, t, 0, f);
                    else if (Object(n) === n)
                        for (r in v = function () {
                            var t = 0, i;
                            for (i in n)
                                n.hasOwnProperty(i) && t++;
                            return t;
                        }(), n)
                            n.hasOwnProperty(r) && (!o && !--v && (h(i) ? i = function () {
                                var n = [].slice.call(arguments);
                                s.apply(this, n);
                                u();
                            } : i[r] = function (n) {
                                return function () {
                                    var t = [].slice.call(arguments);
                                    n && n.apply(this, t);
                                    u();
                                };
                            }(s[r])), e(n[r], i, t, r, f));
                }
                else
                    o || u();
            }
            var f = !!n.test, o = n.load || n.both, i = n.callback || l, s = i, u = n.complete || l, v, r;
            a(f ? n.yep : n.nope, !!o);
            o && a(o);
        }
        var o, t, s = this.yepnope.loader;
        if (c(n))
            e(n, 0, s, 0);
        else if (tt(n))
            for (o = 0; o < n.length; o++)
                t = n[o], c(t) ? e(t, 0, s, 0) : tt(t) ? u(t) : Object(t) === t && a(t, s);
        else
            Object(n) === n && a(n, s);
    };
    u.addPrefix = function (n, t) {
        it[n] = t;
    };
    u.addFilter = function (n) {
        p.push(n);
    };
    u.errorTimeout = 1e4;
    t.readyState == null && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", rt = function () {
        t.removeEventListener("DOMContentLoaded", rt, 0);
        t.readyState = "complete";
    }, 0));
    n.yepnope = b();
    n.yepnope.executeStack = f;
    n.yepnope.injectJs = function (n, i, r, e, h, c) {
        var a = t.createElement("script"), v, y, e = e || u.errorTimeout;
        a.src = n;
        for (y in r)
            a.setAttribute(y, r[y]);
        i = c ? f : i || l;
        a.onreadystatechange = a.onload = function () {
            !v && w(a.readyState) && (v = 1, i(), a.onload = a.onreadystatechange = null);
        };
        s(function () {
            v || (v = 1, i(1));
        }, e);
        h ? a.onload() : o.parentNode.insertBefore(a, o);
    };
    n.yepnope.injectCss = function (n, i, r, u, e, h) {
        var u = t.createElement("link"), c, i = h ? f : i || l;
        u.href = n;
        u.rel = "stylesheet";
        u.type = "text/css";
        for (c in r)
            u.setAttribute(c, r[c]);
        e || (o.parentNode.insertBefore(u, o), s(i, 0));
    };
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0));
}, function (n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? module.exports = n(require("jquery")) : n(jQuery);
}(function (n) {
    if (n.support.cors || !n.ajaxTransport || !window.XDomainRequest)
        return n;
    var t = /^(https?:)?\/\//i, i = /^get|post$/i, r = new RegExp("^(//|" + location.protocol + ")", "i");
    return n.ajaxTransport("* text html xml json", function (u, f) {
        if (u.crossDomain && u.async && i.test(u.type) && t.test(u.url) && r.test(u.url)) {
            var e = null;
            return { send: function (t, i) {
                var o = "", r = (f.dataType || "").toLowerCase();
                e = new XDomainRequest;
                /^\d+$/.test(f.timeout) && (e.timeout = f.timeout);
                e.ontimeout = function () {
                    i(500, "timeout");
                };
                e.onload = function () {
                    var o = "Content-Length: " + e.responseText.length + "\r\nContent-Type: " + e.contentType, u = { code: 200, message: "success" }, f = { text: e.responseText }, t;
                    try {
                        if (r === "html" || /text\/html/i.test(e.contentType))
                            f.html = e.responseText;
                        else if (r === "json" || r !== "text" && /\/json/i.test(e.contentType))
                            try {
                                f.json = n.parseJSON(e.responseText);
                            }
                            catch (h) {
                                u.code = 500;
                                u.message = "parseerror";
                            }
                        else if (r === "xml" || r !== "text" && /\/xml/i.test(e.contentType)) {
                            t = new ActiveXObject("Microsoft.XMLDOM");
                            t.async = !1;
                            try {
                                t.loadXML(e.responseText);
                            }
                            catch (h) {
                                t = undefined;
                            }
                            if (!t || !t.documentElement || t.getElementsByTagName("parsererror").length) {
                                u.code = 500;
                                u.message = "parseerror";
                                throw "Invalid XML: " + e.responseText;
                            }
                            f.xml = t;
                        }
                    }
                    catch (s) {
                        throw s;
                    }
                    finally {
                        i(u.code, u.message, f, o);
                    }
                };
                e.onprogress = function () {
                };
                e.onerror = function () {
                    i(500, "error", { text: e.responseText });
                };
                f.data && (o = n.type(f.data) === "string" ? f.data : n.param(f.data));
                e.open(u.type, u.url);
                e.send(o);
            }, abort: function () {
                e && e.abort();
            } };
        }
    }), n;
}), q = null, window.PR_SHOULD_USE_CONTINUATION = !0, function () {
    function w(n) {
        function f(n) {
            var i = n.charCodeAt(0), t;
            return i !== 92 ? i : (t = n.charAt(1), (i = a[t]) ? i : "0" <= t && t <= "7" ? parseInt(n.substring(1), 8) : t === "u" || t === "x" ? parseInt(n.substring(2), 16) : n.charCodeAt(1));
        }
        function e(n) {
            return n < 32 ? (n < 16 ? "\\x0" : "\\x") + n.toString(16) : (n = String.fromCharCode(n), (n === "\\" || n === "-" || n === "[" || n === "]") && (n = "\\" + n), n);
        }
        function h(n) {
            for (var t, s, o = n.substring(1, n.length - 1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g), n = [], i = [], h = o[0] === "^", r = h ? 1 : 0, u = o.length; r < u; ++r)
                t = o[r], /\\[bdsw]/i.test(t) ? n.push(t) : (t = f(t), r + 2 < u && "-" === o[r + 1] ? (s = f(o[r + 2]), r += 2) : s = t, i.push([t, s]), s < 65 || t > 122 || (s < 65 || t > 90 || i.push([Math.max(65, t) | 32, Math.min(s, 90) | 32]), s < 97 || t > 122 || i.push([Math.max(97, t) & -33, Math.min(s, 122) & -33])));
            for (i.sort(function (n, t) {
                return n[0] - t[0] || t[1] - n[1];
            }), o = [], t = [NaN, NaN], r = 0; r < i.length; ++r)
                u = i[r], u[0] <= t[1] + 1 ? t[1] = Math.max(t[1], u[1]) : o.push(t = u);
            for (i = ["["], h && i.push("^"), i.push.apply(i, n), r = 0; r < o.length; ++r)
                u = o[r], i.push(e(u[0])), u[1] > u[0] && (u[1] + 1 > u[0] && i.push("-"), i.push(e(u[1])));
            return i.push("]"), i.join("");
        }
        function c(n) {
            for (var i, r = n.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g), e = r.length, f = [], t = 0, u = 0; t < e; ++t)
                i = r[t], i === "(" ? ++u : "\\" === i.charAt(0) && (i = +i.substring(1)) && i <= u && (f[i] = -1);
            for (t = 1; t < f.length; ++t)
                -1 === f[t] && (f[t] = ++l);
            for (u = t = 0; t < e; ++t)
                i = r[t], i === "(" ? (++u, f[u] === void 0 && (r[t] = "(?:")) : "\\" === i.charAt(0) && (i = +i.substring(1)) && i <= u && (r[t] = "\\" + f[u]);
            for (u = t = 0; t < e; ++t)
                "^" === r[t] && "^" !== r[t + 1] && (r[t] = "");
            if (n.ignoreCase && o)
                for (t = 0; t < e; ++t)
                    i = r[t], n = i.charAt(0), i.length >= 2 && n === "[" ? r[t] = h(i) : n !== "\\" && (r[t] = i.replace(/[A-Za-z]/g, function (n) {
                        return n = n.charCodeAt(0), "[" + String.fromCharCode(n & -33, n | 32) + "]";
                    }));
            return r.join("");
        }
        for (var t, l = 0, o = !1, r = !1, i = 0, u = n.length; i < u; ++i)
            if (t = n[i], t.ignoreCase)
                r = !0;
            else if (/[a-z]/i.test(t.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi, ""))) {
                o = !0;
                r = !1;
                break;
            }
        for (var a = { b: 8, t: 9, n: 10, v: 11, f: 12, r: 13 }, s = [], i = 0, u = n.length; i < u; ++i) {
            if (t = n[i], t.global || t.multiline)
                throw Error("" + t);
            s.push("(?:" + c(t) + ")");
        }
        return RegExp(s.join("|"), r ? "gi" : "g");
    }
    function b(n) {
        function e(n) {
            switch (n.nodeType) {
                case 1:
                    if (s.test(n.className))
                        break;
                    for (var r = n.firstChild; r; r = r.nextSibling)
                        e(r);
                    r = n.nodeName;
                    ("BR" === r || "LI" === r) && (u[t] = "\n", i[t << 1] = f++, i[t++ << 1 | 1] = n);
                    break;
                case 3:
                case 4:
                    r = n.nodeValue;
                    r.length && (r = o ? r.replace(/\r\n?/g, "\n") : r.replace(/[\t\n\r ]+/g, " "), u[t] = r, i[t << 1] = f, f += r.length, i[t++ << 1 | 1] = n);
            }
        }
        var s = /(?:^|\s)nocode(?:\s|$)/, u = [], f = 0, i = [], t = 0, r, o;
        return n.currentStyle ? r = n.currentStyle.whiteSpace : window.getComputedStyle && (r = document.defaultView.getComputedStyle(n, q).getPropertyValue("white-space")), o = r && "pre" === r.substring(0, 3), e(n), { a: u.join("").replace(/\n$/, ""), c: i };
    }
    function e(n, t, i, r) {
        t && (n = { a: t, d: n }, i(n), r.push.apply(r, n.e));
    }
    function r(n, t) {
        function i(n) {
            for (var c, p, w, v = n.d, y = [v, "pln"], k = 0, d = n.a.match(u) || [], g = {}, b = 0, nt = d.length; b < nt; ++b) {
                var l = d[b], h = g[l], a = void 0, o;
                if (typeof h == "string")
                    o = !1;
                else {
                    if (c = r[l.charAt(0)], c)
                        a = l.match(c[1]), h = c[0];
                    else {
                        for (o = 0; o < f; ++o)
                            if (c = t[o], a = l.match(c[1])) {
                                h = c[0];
                                break;
                            }
                        a || (h = "pln");
                    }
                    !(o = h.length >= 5 && "lang-" === h.substring(0, 5)) || a && typeof a[1] == "string" || (o = !1, h = "src");
                    o || (g[l] = h);
                }
                c = k;
                k += l.length;
                o ? (o = a[1], p = l.indexOf(o), w = p + o.length, a[2] && (w = l.length - a[2].length, p = w - o.length), h = h.substring(5), e(v + c, l.substring(0, p), i, y), e(v + c + p, o, s(h, o), y), e(v + c + w, l.substring(w), i, y)) : y.push(v + c, h);
            }
            n.e = y;
        }
        var r = {}, u, f;
        return function () {
            for (var i, f, s, h = n.concat(t), e = [], c = {}, o = 0, l = h.length; o < l; ++o) {
                if (i = h[o], f = i[3], f)
                    for (s = f.length; --s >= 0;)
                        r[f.charAt(s)] = i;
                i = i[1];
                f = "" + i;
                c.hasOwnProperty(f) || (e.push(i), c[f] = q);
            }
            e.push(/[\S\s]/);
            u = w(e);
        }(), f = t.length, i;
    }
    function t(n) {
        var i = [], t = [], u;
        return n.tripleQuotedStrings ? i.push(["str", /^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/, q, "'\""]) : n.multiLineStrings ? i.push(["str", /^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/, q, "'\"`"]) : i.push(["str", /^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/, q, "\"'"]), n.verbatimStrings && t.push(["str", /^@"(?:[^"]|"")*(?:"|$)/, q]), u = n.hashComments, u && (n.cStyleComments ? (u > 1 ? i.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, q, "#"]) : i.push(["com", /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/, q, "#"]), t.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/, q])) : i.push(["com", /^#[^\n\r]*/, q, "#"])), n.cStyleComments && (t.push(["com", /^\/\/[^\n\r]*/, q]), t.push(["com", /^\/\*[\S\s]*?(?:\*\/|$)/, q])), n.regexLiterals && t.push(["lang-regex", /^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]), (u = n.types) && t.push(["typ", u]), n = ("" + n.keywords).replace(/^ | $/g, ""), n.length && t.push(["kwd", RegExp("^(?:" + n.replace(/[\s,]+/g, "|") + ")\\b"), q]), i.push(["pln", /^\s+/, q, " \r\n\t "]), t.push(["lit", /^@[$_a-z][\w$@]*/i, q], ["typ", /^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/, q], ["pln", /^[$_a-z][\w$@]*/i, q], ["lit", /^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i, q, "0123456789"], ["pln", /^\\[\S\s]?/, q], ["pun", /^.[^\s\w"-$'./@\\`]*/, q]), r(i, t);
    }
    function o(n, t) {
        function o(n) {
            var t, i, r;
            switch (n.nodeType) {
                case 1:
                    if (c.test(n.className))
                        break;
                    if ("BR" === n.nodeName)
                        s(n), n.parentNode && n.parentNode.removeChild(n);
                    else
                        for (n = n.firstChild; n; n = n.nextSibling)
                            o(n);
                    break;
                case 3:
                case 4: h && (t = n.nodeValue, i = t.match(l), i && (r = t.substring(0, i.index), n.nodeValue = r, (t = t.substring(i.index + i[0].length)) && n.parentNode.insertBefore(f.createTextNode(t), n.nextSibling), s(n), r || n.parentNode.removeChild(n)));
            }
        }
        function s(n) {
            function i(n, t) {
                var e = t ? n.cloneNode(!1) : n, r = n.parentNode, f, u;
                if (r)
                    for (r = i(r, 1), f = n.nextSibling, r.appendChild(e), u = f; u; u = f)
                        f = u.nextSibling, r.appendChild(u);
                return e;
            }
            for (; !n.nextSibling;)
                if (n = n.parentNode, !n)
                    return;
            for (var n = i(n.nextSibling, 0), t; (t = n.parentNode) && t.nodeType === 1;)
                n = t;
            u.push(n);
        }
        var c = /(?:^|\s)nocode(?:\s|$)/, l = /\r\n?|\n/, f = n.ownerDocument, i, h, u, r, e;
        for (n.currentStyle ? i = n.currentStyle.whiteSpace : window.getComputedStyle && (i = f.defaultView.getComputedStyle(n, q).getPropertyValue("white-space")), h = i && "pre" === i.substring(0, 3), i = f.createElement("LI"); n.firstChild;)
            i.appendChild(n.firstChild);
        for (u = [i], r = 0; r < u.length; ++r)
            o(u[r]);
        t === (t | 0) && u[0].setAttribute("value", t);
        e = f.createElement("OL");
        e.className = "linenums";
        for (var a = Math.max(0, t - 1 | 0) || 0, r = 0, v = u.length; r < v; ++r)
            i = u[r], i.className = "L" + (r + a) % 10, i.firstChild || i.appendChild(f.createTextNode(" ")), e.appendChild(i);
        n.appendChild(e);
    }
    function n(n, t) {
        for (var i, r = t.length; --r >= 0;)
            i = t[r], f.hasOwnProperty(i) ? window.console && console.warn("cannot override language handler %s", i) : f[i] = n;
    }
    function s(n, t) {
        return n && f.hasOwnProperty(n) || (n = /^\s*</.test(t) ? "default-markup" : "default-code"), f[n];
    }
    function h(n) {
        var p = n.g, r, u, f, i, d, c, g;
        try {
            r = b(n.h);
            u = r.a;
            n.a = u;
            n.c = r.c;
            n.d = 0;
            s(p, u)(n);
            var it = /\bMSIE\b/.test(navigator.userAgent), p = /\n/g, w = n.a, k = w.length, r = 0, l = n.c, rt = l.length, u = 0, t = n.e, h = t.length, n = 0;
            for (t[h] = k, i = f = 0; i < h;)
                t[i] !== t[i + 2] ? (t[f++] = t[i++], t[f++] = t[i++]) : i += 2;
            for (h = f, i = f = 0; i < h;) {
                for (var ut = t[i], nt = t[i + 1], e = i + 2; e + 2 <= h && t[e + 1] === nt;)
                    e += 2;
                t[f++] = ut;
                t[f++] = nt;
                i = e;
            }
            for (t.length = f; u < rt;) {
                var a = l[u + 2] || k, tt = t[n + 2] || k, e = Math.min(a, tt), o = l[u + 1], v;
                o.nodeType !== 1 && (v = w.substring(r, e)) && (it && (v = v.replace(p, "\r")), o.nodeValue = v, d = o.ownerDocument, c = d.createElement("SPAN"), c.className = t[n + 1], g = o.parentNode, g.replaceChild(c, o), c.appendChild(o), r < a && (l[u + 1] = o = d.createTextNode(w.substring(e, a)), g.insertBefore(o, c.nextSibling)));
                r = e;
                r >= a && (u += 2);
                r >= tt && (n += 2);
            }
        }
        catch (y) {
            "console" in window && console.log(y && y.stack ? y.stack : y);
        }
    }
    var i = ["break,continue,do,else,for,if,return,while"], u = [[i, "auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"], c = [u, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"], l = [u, "abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"], a = [l, "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"], u = [u, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"], v = [i, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"], y = [i, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"], i = [i, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"], p = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/, k = /\S/, d = t({ keywords: [c, a, u, "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END" + v, y, i], hashComments: !0, cStyleComments: !0, multiLineStrings: !0, regexLiterals: !0 }), f = {};
    n(d, ["default-code"]);
    n(r([], [["pln", /^[^<?]+/], ["dec", /^<!\w[^>]*(?:>|$)/], ["com", /^<\!--[\S\s]*?(?:--\>|$)/], ["lang-", /^<\?([\S\s]+?)(?:\?>|$)/], ["lang-", /^<%([\S\s]+?)(?:%>|$)/], ["pun", /^(?:<[%?]|[%?]>)/], ["lang-", /^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i], ["lang-js", /^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i], ["lang-css", /^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i], ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]]), ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]);
    n(r([["pln", /^\s+/, q, " \t\r\n"], ["atv", /^(?:"[^"]*"?|'[^']*'?)/, q, "\"'"]], [["tag", /^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i], ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i], ["lang-uq.val", /^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/], ["pun", /^[/<->]+/], ["lang-js", /^on\w+\s*=\s*"([^"]+)"/i], ["lang-js", /^on\w+\s*=\s*'([^']+)'/i], ["lang-js", /^on\w+\s*=\s*([^\s"'>]+)/i], ["lang-css", /^style\s*=\s*"([^"]+)"/i], ["lang-css", /^style\s*=\s*'([^']+)'/i], ["lang-css", /^style\s*=\s*([^\s"'>]+)/i]]), ["in.tag"]);
    n(r([], [["atv", /^[\S\s]+/]]), ["uq.val"]);
    n(t({ keywords: c, hashComments: !0, cStyleComments: !0, types: p }), ["c", "cc", "cpp", "cxx", "cyc", "m"]);
    n(t({ keywords: "null,true,false" }), ["json"]);
    n(t({ keywords: a, hashComments: !0, cStyleComments: !0, verbatimStrings: !0, types: p }), ["cs"]);
    n(t({ keywords: l, cStyleComments: !0 }), ["java"]);
    n(t({ keywords: i, hashComments: !0, multiLineStrings: !0 }), ["bsh", "csh", "sh"]);
    n(t({ keywords: v, hashComments: !0, multiLineStrings: !0, tripleQuotedStrings: !0 }), ["cv", "py"]);
    n(t({ keywords: "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", hashComments: !0, multiLineStrings: !0, regexLiterals: !0 }), ["perl", "pl", "pm"]);
    n(t({ keywords: y, hashComments: !0, multiLineStrings: !0, regexLiterals: !0 }), ["rb"]);
    n(t({ keywords: u, cStyleComments: !0, regexLiterals: !0 }), ["js"]);
    n(t({ keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes", hashComments: 3, cStyleComments: !0, multilineStrings: !0, tripleQuotedStrings: !0, regexLiterals: !0 }), ["coffee"]);
    n(r([], [["str", /^[\S\s]+/]]), ["regex"]);
    window.prettyPrintOne = function (n, t, i) {
        var r = document.createElement("PRE");
        return r.innerHTML = n, i && o(r, i), h({ g: t, i: i, h: r }), r.innerHTML;
    };
    window.prettyPrint = function (n) {
        function c() {
            for (var l, e, y, t, v, p, f, w = window.PR_SHOULD_USE_CONTINUATION ? i.now() + 250 : Infinity; r < u.length && i.now() < w; r++)
                if (l = u[r], e = l.className, e.indexOf("prettyprint") >= 0) {
                    if (e = e.match(s), t = !e) {
                        for (t = l, f = void 0, v = t.firstChild; v; v = v.nextSibling)
                            p = v.nodeType, f = p === 1 ? f ? t : v : p === 3 ? k.test(v.nodeValue) ? t : f : f;
                        t = (y = f === t ? void 0 : f) && "CODE" === y.tagName;
                    }
                    for (t && (e = y.className.match(s)), e && (e = e[1]), t = !1, f = l.parentNode; f; f = f.parentNode)
                        if ((f.tagName === "pre" || f.tagName === "code" || f.tagName === "xmp") && f.className && f.className.indexOf("prettyprint") >= 0) {
                            t = !0;
                            break;
                        }
                    t || ((t = (t = l.className.match(/\blinenums\b(?::(\d+))?/)) ? t[1] && t[1].length ? +t[1] : !0 : !1) && o(l, t), a = { g: e, h: l, i: t }, h(a));
                }
            r < u.length ? setTimeout(c, 250) : n && n();
        }
        for (var e, l, i, r, a, s, t = [document.getElementsByTagName("pre"), document.getElementsByTagName("code"), document.getElementsByTagName("xmp")], u = [], f = 0; f < t.length; ++f)
            for (e = 0, l = t[f].length; e < l; ++e)
                u.push(t[f][e]);
        t = q;
        i = Date;
        i.now || (i = { now: function () {
            return +new Date;
        } });
        r = 0;
        s = /\blang(?:uage)?-([\w.]+)(?!\S)/;
        c();
    };
    window.PR = { createSimpleLexer: r, registerLangHandler: n, sourceDecorator: t, PR_ATTRIB_NAME: "atn", PR_ATTRIB_VALUE: "atv", PR_COMMENT: "com", PR_DECLARATION: "dec", PR_KEYWORD: "kwd", PR_LITERAL: "lit", PR_NOCODE: "nocode", PR_PLAIN: "pln", PR_PUNCTUATION: "pun", PR_SOURCE: "src", PR_STRING: "str", PR_TAG: "tag", PR_TYPE: "typ" };
}(), jQuery.cookie = function (n, t, i) {
    var f, r, e, o, u, s;
    if (typeof t != "undefined") {
        i = i || {};
        t === null && (t = "", i.expires = -1);
        f = "";
        i.expires && (typeof i.expires == "number" || i.expires.toUTCString) && (typeof i.expires == "number" ? (r = new Date, r.setTime(r.getTime() + i.expires * 864e5)) : r = i.expires, f = "; expires=" + r.toUTCString());
        var h = i.path ? "; path=" + i.path : "", c = i.domain ? "; domain=" + i.domain : "", l = i.secure ? "; secure" : "";
        document.cookie = [n, "=", encodeURIComponent(t), f, h, c, l].join("");
    }
    else {
        if (e = null, document.cookie && document.cookie != "")
            for (o = document.cookie.split(";"), u = 0; u < o.length; u++)
                if (s = jQuery.trim(o[u]), s.substring(0, n.length + 1) == n + "=") {
                    e = decodeURIComponent(s.substring(n.length + 1));
                    break;
                }
        return e;
    }
}, function (n) {
    var t = { init: function (i) {
        var r = n.extend({ items: 1, itemsOnPage: 1, pages: 0, displayedPages: 5, edges: 2, currentPage: 0, hrefTextPrefix: "#page-", hrefTextSuffix: "", prevText: "Prev", nextText: "Next", ellipseText: "&hellip;", cssStyle: "light-theme", labelMap: [], selectOnClick: !0, nextAtFront: !1, invertPageOrder: !1, useStartEdge: !0, useEndEdge: !0, onPageClick: function () {
        }, onInit: function () {
        } }, i || {}), u = this;
        return r.pages = r.pages ? r.pages : Math.ceil(r.items / r.itemsOnPage) ? Math.ceil(r.items / r.itemsOnPage) : 1, r.currentPage = r.currentPage ? r.currentPage - 1 : r.invertPageOrder ? r.pages - 1 : 0, r.halfDisplayed = r.displayedPages / 2, this.each(function () {
            u.addClass(r.cssStyle + " simple-pagination").data("pagination", r);
            t._draw.call(u);
        }), r.onInit(), this;
    }, selectPage: function (n) {
        return t._selectPage.call(this, n - 1), this;
    }, prevPage: function () {
        var n = this.data("pagination");
        return n.invertPageOrder ? n.currentPage < n.pages - 1 && t._selectPage.call(this, n.currentPage + 1) : n.currentPage > 0 && t._selectPage.call(this, n.currentPage - 1), this;
    }, nextPage: function () {
        var n = this.data("pagination");
        return n.invertPageOrder ? n.currentPage > 0 && t._selectPage.call(this, n.currentPage - 1) : n.currentPage < n.pages - 1 && t._selectPage.call(this, n.currentPage + 1), this;
    }, getPagesCount: function () {
        return this.data("pagination").pages;
    }, getCurrentPage: function () {
        return this.data("pagination").currentPage + 1;
    }, destroy: function () {
        return this.empty(), this;
    }, drawPage: function (n) {
        var i = this.data("pagination");
        return i.currentPage = n - 1, this.data("pagination", i), t._draw.call(this), this;
    }, redraw: function () {
        return t._draw.call(this), this;
    }, disable: function () {
        var n = this.data("pagination");
        return n.disabled = !0, this.data("pagination", n), t._draw.call(this), this;
    }, enable: function () {
        var n = this.data("pagination");
        return n.disabled = !1, this.data("pagination", n), t._draw.call(this), this;
    }, updateItems: function (n) {
        var i = this.data("pagination");
        i.items = n;
        i.pages = t._getPages(i);
        this.data("pagination", i);
        t._draw.call(this);
    }, updateItemsOnPage: function (n) {
        var i = this.data("pagination");
        return i.itemsOnPage = n, i.pages = t._getPages(i), this.data("pagination", i), t._selectPage.call(this, 0), this;
    }, _draw: function () {
        var i = this.data("pagination"), r = t._getInterval(i), u, s, f, o, e;
        if (t.destroy.call(this), s = typeof this.prop == "function" ? this.prop("tagName") : this.attr("tagName"), f = s === "UL" ? this : n("<ul><\/ul>").appendTo(this), i.prevText && t._appendItem.call(this, i.invertPageOrder ? i.currentPage + 1 : i.currentPage - 1, { text: i.prevText, classes: "prev" }), i.nextText && i.nextAtFront && t._appendItem.call(this, i.invertPageOrder ? i.currentPage - 1 : i.currentPage + 1, { text: i.nextText, classes: "next" }), i.invertPageOrder) {
            if (r.end < i.pages && i.edges > 0) {
                if (i.useStartEdge)
                    for (o = Math.max(i.pages - i.edges, r.end), u = i.pages - 1; u >= o; u--)
                        t._appendItem.call(this, u);
                i.pages - i.edges > r.end && i.pages - i.edges - r.end != 1 ? f.append('<li class="disabled"><span class="ellipse">' + i.ellipseText + "<\/span><\/li>") : i.pages - i.edges - r.end == 1 && t._appendItem.call(this, r.end);
            }
        }
        else if (r.start > 0 && i.edges > 0) {
            if (i.useStartEdge)
                for (e = Math.min(i.edges, r.start), u = 0; u < e; u++)
                    t._appendItem.call(this, u);
            i.edges < r.start && r.start - i.edges != 1 ? f.append('<li class="disabled"><span class="ellipse">' + i.ellipseText + "<\/span><\/li>") : r.start - i.edges == 1 && t._appendItem.call(this, i.edges);
        }
        if (i.invertPageOrder)
            for (u = r.end - 1; u >= r.start; u--)
                t._appendItem.call(this, u);
        else
            for (u = r.start; u < r.end; u++)
                t._appendItem.call(this, u);
        if (i.invertPageOrder) {
            if (r.start > 0 && i.edges > 0 && (i.edges < r.start && r.start - i.edges != 1 ? f.append('<li class="disabled"><span class="ellipse">' + i.ellipseText + "<\/span><\/li>") : r.start - i.edges == 1 && t._appendItem.call(this, i.edges), i.useEndEdge))
                for (e = Math.min(i.edges, r.start), u = e - 1; u >= 0; u--)
                    t._appendItem.call(this, u);
        }
        else if (r.end < i.pages && i.edges > 0 && (i.pages - i.edges > r.end && i.pages - i.edges - r.end != 1 ? f.append('<li class="disabled"><span class="ellipse">' + i.ellipseText + "<\/span><\/li>") : i.pages - i.edges - r.end == 1 && t._appendItem.call(this, r.end), i.useEndEdge))
            for (o = Math.max(i.pages - i.edges, r.end), u = o; u < i.pages; u++)
                t._appendItem.call(this, u);
        i.nextText && !i.nextAtFront && t._appendItem.call(this, i.invertPageOrder ? i.currentPage - 1 : i.currentPage + 1, { text: i.nextText, classes: "next" });
    }, _getPages: function (n) {
        var t = Math.ceil(n.items / n.itemsOnPage);
        return t || 1;
    }, _getInterval: function (n) {
        return { start: Math.ceil(n.currentPage > n.halfDisplayed ? Math.max(Math.min(n.currentPage - n.halfDisplayed, n.pages - n.displayedPages), 0) : 0), end: Math.ceil(n.currentPage > n.halfDisplayed ? Math.min(n.currentPage + n.halfDisplayed, n.pages) : Math.min(n.displayedPages, n.pages)) };
    }, _appendItem: function (i, r) {
        var s = this, f, e, u = s.data("pagination"), o = n("<li><\/li>"), h = s.find("ul");
        i = i < 0 ? 0 : i < u.pages ? i : u.pages - 1;
        f = { text: i + 1, classes: "" };
        u.labelMap.length && u.labelMap[i] && (f.text = u.labelMap[i]);
        f = n.extend(f, r || {});
        i == u.currentPage || u.disabled ? (u.disabled ? o.addClass("disabled") : o.addClass("active"), e = n('<span class="current">' + f.text + "<\/span>")) : (e = n('<a href="' + u.hrefTextPrefix + (i + 1) + u.hrefTextSuffix + '" class="page-link">' + f.text + "<\/a>"), e.click(function (n) {
            return t._selectPage.call(s, i, n);
        }));
        f.classes && e.addClass(f.classes);
        o.append(e);
        h.length ? h.append(o) : s.append(o);
    }, _selectPage: function (n, i) {
        var r = this.data("pagination");
        r.currentPage = n;
        r.selectOnClick && t._draw.call(this);
        return r.onPageClick(n + 1, i);
    } };
    n.fn.pagination = function (i) {
        if (t[i] && i.charAt(0) != "_")
            return t[i].apply(this, Array.prototype.slice.call(arguments, 1));
        if (typeof i != "object" && i)
            n.error("Method " + i + " does not exist on jQuery.pagination");
        else
            return t.init.apply(this, arguments);
    };
}(jQuery), WebTrends.prototype.dcsGetId = function () {
    this.enabled && document.cookie.indexOf(this.fpc + "=") == -1 && document.cookie.indexOf("WTLOPTOUT=") == -1 && document.write("<script type='text/javascript' src='http" + (window.location.protocol.indexOf("https:") == 0 ? "s" : "") + "://" + this.domain + "/" + this.dcsid + "/wtid.js'><\/script>");
}, WebTrends.prototype.dcsGetCookie = function (n) {
    for (var s = document.cookie.split("; "), i = [], r = 0, t = 0, h = n.length, l = s.length, f, u, e, c, o, t = 0; t < l; t++)
        f = s[t], f.substring(0, h + 1) == n + "=" && (i[r++] = f);
    if (u = i.length, u > 0) {
        if (r = 0, u > 1 && n == this.fpc)
            for (e = new Date(0), t = 0; t < u; t++)
                c = parseInt(this.dcsGetCrumb(i[t], "lv")), o = new Date(c), o > e && (e.setTime(o.getTime()), r = t);
        return unescape(i[r].substring(h + 1));
    }
    return null;
}, WebTrends.prototype.dcsGetCrumb = function (n, t, i) {
    for (var f = n.split(i || ":"), u, r = 0; r < f.length; r++)
        if (u = f[r].split("="), t == u[0])
            return u[1];
    return null;
}, WebTrends.prototype.dcsGetIdCrumb = function (n, t) {
    for (var u = n.substring(0, n.indexOf(":lv=")), i = u.split("="), r = 0; r < i.length; r++)
        if (t == i[0])
            return i[1];
    return null;
}, WebTrends.prototype.dcsIsFpcSet = function (n, t, i, r) {
    var u = this.dcsGetCookie(n);
    return u ? t == this.dcsGetIdCrumb(u, "id") && i == this.dcsGetCrumb(u, "lv") && r == this.dcsGetCrumb(u, "ss") ? 0 : 3 : 2;
}, WebTrends.prototype.dcsFPC = function () {
    var l, i, e, o, r, c;
    if (document.cookie.indexOf("WTLOPTOUT=") == -1) {
        var n = this.WT, u = this.fpc, t = new Date, f = t.getTimezoneOffset() * 6e4 + this.timezone * 36e5;
        if (t.setTime(t.getTime() + f), l = new Date(t.getTime() + 63072e6), i = new Date(t.getTime()), n.co_f = n.vtid = n.vtvs = n.vt_f = n.vt_f_a = n.vt_f_s = n.vt_f_d = n.vt_f_tlh = n.vt_f_tlv = "", document.cookie.indexOf(u + "=") == -1) {
            if (typeof gWtId != "undefined" && gWtId != "")
                n.co_f = gWtId;
            else if (typeof gTempWtId != "undefined" && gTempWtId != "")
                n.co_f = gTempWtId, n.vt_f = "1";
            else {
                for (n.co_f = "2", e = t.getTime().toString(), o = 2; o <= 32 - e.length; o++)
                    n.co_f += Math.floor(Math.random() * 16).toString(16);
                n.co_f += e;
                n.vt_f = "1";
            }
            typeof gWtAccountRollup == "undefined" && (n.vt_f_a = "1");
            n.vt_f_s = n.vt_f_d = "1";
            n.vt_f_tlh = n.vt_f_tlv = "0";
        }
        else {
            var s = this.dcsGetCookie(u), h = this.dcsGetIdCrumb(s, "id"), a = parseInt(this.dcsGetCrumb(s, "lv")), v = parseInt(this.dcsGetCrumb(s, "ss"));
            if (h == null || h == "null" || isNaN(a) || isNaN(v))
                return;
            n.co_f = h;
            r = new Date(a);
            n.vt_f_tlh = Math.floor((r.getTime() - f) / 1e3);
            i.setTime(v);
            (t.getTime() > r.getTime() + 18e5 || t.getTime() > i.getTime() + 288e5) && (n.vt_f_tlv = Math.floor((i.getTime() - f) / 1e3), i.setTime(t.getTime()), n.vt_f_s = "1");
            (t.getDay() != r.getDay() || t.getMonth() != r.getMonth() || t.getYear() != r.getYear()) && (n.vt_f_d = "1");
        }
        n.co_f = escape(n.co_f);
        n.vtid = typeof this.vtid == "undefined" ? n.co_f : this.vtid || "";
        n.vtvs = (i.getTime() - f).toString();
        var w = "; expires=" + l.toGMTString(), y = t.getTime().toString(), p = i.getTime().toString();
        document.cookie = u + "=id=" + n.co_f + ":lv=" + y + ":ss=" + p + w + "; path=/" + (this.fpcdom != "" ? "; domain=" + this.fpcdom : "");
        c = this.dcsIsFpcSet(u, n.co_f, y, p);
        c != 0 && (n.co_f = n.vtvs = n.vt_f_s = n.vt_f_d = n.vt_f_tlh = n.vt_f_tlv = "", typeof this.vtid == "undefined" && (n.vtid = ""), n.vt_f = n.vt_f_a = c);
    }
}, WebTrends.prototype.dcsQP = function (n) {
    var u, i, t, r;
    if (typeof n == "undefined")
        return "";
    if (u = location.search.substring(1), u != "")
        for (i = u.split("&"), t = 0; t < i.length; t++)
            if (r = i[t].indexOf("="), r != -1 && i[t].substring(0, r) == n)
                return this.qp[this.qp.length] = (t == 0 ? "" : "&") + i[t], i[t].substring(r + 1);
    return "";
}, WebTrends.prototype.dcsEvt = function (n, t) {
    for (var i = n.target || n.srcElement; i.tagName && i.tagName.toLowerCase() != t.toLowerCase();)
        i = i.parentElement || i.parentNode;
    return i;
}, WebTrends.prototype.dcsNavigation = function (n) {
    for (var i = "", u = "", e = this.dcsSplit(this.navigationtag), o = e.length, t, f, r = 0; r < o; r++)
        if (f = e[r], f.length && (t = this.dcsEvt(n, f), i = t.getAttribute && t.getAttribute("id") ? t.getAttribute("id") : "", u = t.className || "", i.length || u.length))
            break;
    return i.length ? i : u;
}, WebTrends.prototype.dcsBind = function (n, t) {
    typeof t == "function" && document.body && (document.body.addEventListener ? document.body.addEventListener(n, t.wtbind(this), !0) : document.body.attachEvent && document.body.attachEvent("on" + n, t.wtbind(this)));
}, WebTrends.prototype.dcsET = function () {
    var n = navigator.appVersion.indexOf("MSIE") != -1 ? "click" : "mousedown";
    this.dcsBind(n, this.dcsFormButton);
    this.dcsBind("submit", this.dcsFormButton);
    this.dcsBind(n, this.dcsMSLinkTrack);
    this.dcsBind(n, this.dcsMSImageMap);
}, WebTrends.prototype.dcsMultiTrack = function () {
    var n = dcsMultiTrack.arguments ? dcsMultiTrack.arguments : arguments, t;
    n.length % 2 == 0 && (this.dcsSetProps(n), t = new Date, this.DCS.dcsdat = t.getTime(), this.dcsFPC(), this.dcsTag());
}, WebTrends.prototype.dcsCleanUp = function () {
    this.DCS = {};
    this.WT = {};
    this.DCSext = {};
    arguments.length % 2 == 0 && this.dcsSetProps(arguments);
}, WebTrends.prototype.dcsSetProps = function (n) {
    for (var t = 0; t < n.length; t += 2)
        n[t].indexOf("WT.") == 0 ? this.WT[n[t].substring(3)] = n[t + 1] : n[t].indexOf("DCS.") == 0 ? this.DCS[n[t].substring(4)] = n[t + 1] : n[t].indexOf("DCSext.") == 0 ? this.DCSext[n[t].substring(7)] = n[t + 1] : n[t].indexOf("DCSdir.") == 0 && (this.DCSdir[n[t].substring(7)] = n[t + 1]);
}, WebTrends.prototype.dcsSplit = function (n) {
    for (var i = n.toLowerCase().split(","), r = i.length, t = 0; t < r; t++)
        i[t] = i[t].replace(/^\s*/, "").replace(/\s*$/, "");
    return i;
}, WebTrends.prototype.dcsFormButton = function (n) {
    var u, r, t, i;
    if (n = n || window.event || "", n && (typeof n.which != "number" || n.which == 1))
        for (u = ["INPUT", "BUTTON"], r = 0; r < u.length; r++)
            if (t = this.dcsEvt(n, u[r]), i = t.type || "", i && (i == "submit" || i == "image" || i == "button" || i == "reset") || i == "text" && (n.which || n.keyCode) == 13) {
                var f = "", e = "", o = 0;
                t.form ? (f = t.form.action || window.location.pathname, e = t.form.id || t.form.name || t.form.className || "Unknown", o = t.form.method && t.form.method.toLowerCase() == "post" ? "27" : "26") : (f = window.location.pathname, e = t.name || t.id || "Unknown", o = u[r].toLowerCase() == "input" ? "28" : "29");
                f && e && n.keyCode != 9 && this.dcsMultiTrack("DCS.dcsuri", f, "WT.ti", "FormButton:" + e, "WT.dl", 2, "WT.nv", this.dcsNavigation(n), "DCSext.wtNavigation", this.dcsNavigation(n));
                this.DCS.dcsuri = this.WT.ti = this.WT.dl = this.WT.nv = "";
                break;
            }
}, WebTrends.prototype.dcsEvi = function () {
    var t = this, r = t.evi, i = r.qp, n = t.dcsGetCookie(r.cookie);
    n && (r.crumb.length > 0 && r.sep.length > 0 && (n = t.dcsGetCrumb(n, r.crumb, r.sep)), n && (i.indexOf("WT.") == 0 ? t.WT[i.substring(3)] = n : i.indexOf("DCS.") == 0 ? t.DCS[i.substring(4)] = n : i.indexOf("DCSext.") == 0 ? t.DCSext[i.substring(7)] = n : t.DCSext[i] = n));
}, WebTrends.prototype.dcsAdv = function () {
    this.trackevents && typeof this.dcsET == "function" && (window.addEventListener ? window.addEventListener("load", this.dcsET.wtbind(this), !1) : window.attachEvent && window.attachEvent("onload", this.dcsET.wtbind(this)));
    this.dcsFPC();
    this.dcsEvi();
    this.dcsMSNvr();
}, WebTrends.prototype.dcsVar = function () {
    var u = new Date, n = this.WT, t = this.DCS, e, r, o, s, h, f, i;
    if (n.tz = parseInt(u.getTimezoneOffset() / -60) || "0", n.bh = u.getHours() || "0", n.ul = navigator.appName == "Netscape" ? navigator.language : navigator.userLanguage, typeof screen == "object" && (n.cd = navigator.appName == "Netscape" ? screen.pixelDepth : screen.colorDepth, n.sr = screen.width + "x" + screen.height), typeof navigator.javaEnabled() == "boolean" && (n.jo = navigator.javaEnabled() ? "Yes" : "No"), document.title && (window.RegExp ? (e = new RegExp("^" + window.location.protocol + "//" + window.location.hostname + "\\s-\\s"), n.ti = document.title.replace(e, "")) : n.ti = document.title), n.js = "Yes", n.jv = function () {
        var n = navigator.userAgent.toLowerCase(), i = parseInt(navigator.appVersion), y = n.indexOf("mac") != -1, r = n.indexOf("firefox") != -1, u = n.indexOf("firefox/0.") != -1, f = n.indexOf("firefox/1.0") != -1, e = n.indexOf("firefox/1.5") != -1, o = n.indexOf("firefox/2.0") != -1, p = r && !u && !f & !e & !o, s = !r && n.indexOf("mozilla") != -1 && n.indexOf("compatible") == -1, w = s && i == 4, b = s && i >= 5, h = n.indexOf("msie") != -1 && n.indexOf("opera") == -1, c = h && i == 4 && n.indexOf("msie 4") != -1, l = h && !c, k = n.indexOf("opera") != -1, a = n.indexOf("opera 5") != -1 || n.indexOf("opera/5") != -1, v = n.indexOf("opera 6") != -1 || n.indexOf("opera/6") != -1, d = k && !a && !v, t = "1.1";
        return p ? t = "1.8" : o ? t = "1.7" : e ? t = "1.6" : u || f || b || d ? t = "1.5" : y && l || v ? t = "1.4" : l || w || a ? t = "1.3" : c && (t = "1.2"), t;
    }(), n.ct = "unknown", document.body && document.body.addBehavior)
        try {
            document.body.addBehavior("#default#clientCaps");
            n.ct = document.body.connectionType || "unknown";
            document.body.addBehavior("#default#homePage");
            n.hp = document.body.isHomePage(location.href) ? "1" : "0";
        }
        catch (c) {
        }
    if (n.bs = document.all ? document.body ? document.body.offsetWidth + "x" + document.body.offsetHeight : "unknown" : window.innerWidth + "x" + window.innerHeight, n.fv = function () {
        var n, t;
        if (window.ActiveXObject)
            for (n = 10; n > 0; n--)
                try {
                    return t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + n), n + ".0";
                }
                catch (i) {
                }
        else if (navigator.plugins && navigator.plugins.length)
            for (n = 0; n < navigator.plugins.length; n++)
                if (navigator.plugins[n].name.indexOf("Shockwave Flash") != -1)
                    return navigator.plugins[n].description.split(" ")[2];
        return "Not enabled";
    }(), n.slv = function () {
        var n = "Not enabled", u, t, i, r;
        try {
            navigator.userAgent.indexOf("MSIE") != -1 ? (u = new ActiveXObject("AgControl.AgControl"), u && (n = "Unknown")) : navigator.plugins["Silverlight Plug-In"] && (n = "Unknown");
        }
        catch (f) {
        }
        if (n != "Not enabled" && typeof Silverlight == "object" && typeof Silverlight.isInstalled == "function")
            for (t = 9; t > 0; t--) {
                for (i = 9; i >= 0; i--)
                    if (r = t + "." + i, Silverlight.isInstalled(r)) {
                        n = r;
                        break;
                    }
                if (n == r)
                    break;
            }
        return n;
    }(), this.i18n && (n.le = typeof document.defaultCharset == "string" ? document.defaultCharset : typeof document.characterSet == "string" ? document.characterSet : "unknown"), n.tv = "8.6.2", n.dl = "0", n.ssl = window.location.protocol.indexOf("https:") == 0 ? "1" : "0", t.dcsdat = u.getTime(), t.dcssip = window.location.hostname, t.dcsuri = window.location.pathname, n.es = t.dcssip + t.dcsuri, window.location.search && (t.dcsqry = window.location.search, this.qp.length > 0))
        for (i = 0; i < this.qp.length; i++)
            r = t.dcsqry.indexOf(this.qp[i]), r != -1 && (o = t.dcsqry.substring(0, r), s = t.dcsqry.substring(r + this.qp[i].length, t.dcsqry.length), t.dcsqry = o + s);
    if (t.dcsqry)
        for (h = t.dcsqry.toLowerCase(), f = this.paidsearchparams.length ? this.paidsearchparams.toLowerCase().split(",") : [], i = 0; i < f.length; i++)
            if (h.indexOf(f[i] + "=") != -1) {
                n.srch = "1";
                break;
            }
    window.document.referrer != "" && window.document.referrer != "-" && (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) < 4 || (t.dcsref = window.document.referrer));
}, WebTrends.prototype.dcsEscape = function (n, t) {
    if (t != "") {
        n = n.toString();
        for (var i in t)
            t[i] instanceof RegExp && (n = n.replace(t[i], i));
        return n;
    }
    return escape(n);
}, WebTrends.prototype.dcsA = function (n, t) {
    var r, e, i, u, f, o, s;
    if (this.i18n && this.exre != "" && !this.exre.test(n)) {
        if (n == "dcsqry") {
            for (r = "", e = t.substring(1).split("&"), i = 0; i < e.length; i++)
                u = e[i], f = u.indexOf("="), f != -1 && (o = u.substring(0, f), s = u.substring(f + 1), i != 0 && (r += "%26"), r += o + "=" + this.dcsEncode(s));
            t = t.substring(0, 1) + r;
        }
        else
            t = this.dcsEncode(t);
        return "&" + n + "=" + t;
    }
    return "&" + n + "=" + this.dcsEscape(t, this.re);
}, WebTrends.prototype.dcsEncode = function (n) {
    return typeof encodeURIComponent == "function" ? encodeURIComponent(n) : escape(n);
}, WebTrends.prototype.dcsCreateImage = function (n) {
    document.images ? (this.images[this.index] = new Image, this.images[this.index].src = n, this.index++) : document.write('<IMG ALT="" BORDER="0" NAME="DCSIMG" WIDTH="1" HEIGHT="1" SRC="' + n + '">');
}, WebTrends.prototype.dcsMeta = function () {
    var t, u, i;
    if (document.all ? t = document.all.tags("meta") : document.documentElement && (t = document.getElementsByTagName("meta")), typeof t != "undefined")
        for (u = t.length, i = 0; i < u; i++) {
            var n = t.item(i).name, r = t.item(i).content, f = t.item(i).httpEquiv;
            n.length > 0 && (n.toUpperCase().indexOf("WT.") == 0 ? this.WT[n.substring(3)] = r : n.toUpperCase().indexOf("DCSEXT.") == 0 ? this.DCSext[n.substring(7)] = r : n.toUpperCase().indexOf("DCSDIR.") == 0 ? this.DCSdir[n.substring(7)] = r : n.toUpperCase().indexOf("DCS.") == 0 && (this.DCS[n.substring(4)] = r));
        }
    this.dcsMSVar();
}, WebTrends.prototype.dcsTag = function () {
    var n, s, e, r;
    if (document.cookie.indexOf("WTLOPTOUT=") == -1) {
        var t = this.WT, u = this.DCS, f = this.DCSext, o = this.i18n, i = "http" + (window.location.protocol.indexOf("https:") == 0 ? "s" : "") + "://" + this.domain + (this.dcsid == "" ? "" : "/" + this.dcsid) + "/dcs.gif?";
        o && (t.dep = "");
        for (n in u)
            u[n] && typeof u[n] != "function" && (i += this.dcsA(n, u[n]));
        for (s = ["co_f", "vtid", "vtvs", "vt_f_tlv"], e = 0; e < s.length; e++)
            r = s[e], t[r] && (i += this.dcsA("WT." + r, t[r]), delete t[r]);
        for (n in t)
            t[n] && typeof t[n] != "function" && (i += this.dcsA("WT." + n, t[n]));
        for (n in f)
            f[n] && typeof f[n] != "function" && (o && (t.dep = t.dep.length == 0 ? n : t.dep + ";" + n), i += this.dcsA(n, f[n]));
        o && t.dep.length > 0 && (i += this.dcsA("WT.dep", t.dep));
        i.length > 2048 && navigator.userAgent.indexOf("MSIE") >= 0 && (i = i.substring(0, 2040) + "&WT.tu=1");
        this.dcsCreateImage(i);
        this.WT.ad = "";
        this.dcsMSSplitTag(i);
        this.dcsMSClearVars();
    }
}, WebTrends.prototype.dcsCollect = function () {
    this.enabled && (this.dcsVar(), this.dcsMeta(), this.dcsAdv(), this.dcsTag());
}, Function.prototype.wtbind = function (n) {
    var t = this;
    return function () {
        return t.apply(n, arguments);
    };
}, WebTrends.prototype.dcsMSVar = function () {
    this.DCSext.wtEvtSrc = typeof this.DCSdir.ReferrerAsURI != "undefined" && this.DCSdir.ReferrerAsURI && typeof this.DCS.dcsref != "undefined" && this.DCS.dcsref ? this.DCS.dcsref.match(/(?:\w+:\/\/)?([^?\s]+)\??/)[1] : this.DCS.dcssip + this.DCS.dcsuri;
    typeof this.WT.sp != "undefined" && (this.WT.sv_sp = this.WT.sp);
    this.DCSext.wtDrillDir = this.dcsMSDrillDir();
    try {
        if (navigator.userAgent.indexOf("MSIE") != -1) {
            var n = new ActiveXObject("AgControl.AgControl");
            n && (this.WT.sli = "Installed");
        }
        else
            navigator.plugins["Silverlight Plug-In"] && (this.WT.sli = "Installed");
    }
    catch (t) {
    }
    this.WT.sli = this.WT.sli || "Not Installed";
    this.WT.z_locale = this.dcsMSLocaleScrape();
    this.dcsGetCookie("MC1") != null && (this.WT.dcsvid = this.dcsGetCrumb(this.dcsGetCookie("MC1"), "GUID", "&"));
    this.WT.z_anonid = this.dcsMSGetCrumb("A", "I", "&");
    this.WT.z_rioid = typeof wt_GetCurrentCellCode != "undefined" ? wt_GetCurrentCellCode() : this.dcsGetCookie("R");
    this.WT.z_MUID = this.dcsGetCookie("MUID");
    this.domain2 = typeof this.DCSdir.OnPremiseSDC != "undefined" ? this.DCSdir.OnPremiseSDC : "";
    this.dcsid2 = typeof this.DCSdir.OnPremiseDCSID != "undefined" ? this.DCSdir.OnPremiseDCSID : this.dcsid;
}, WebTrends.prototype.dcsMSLocaleScrape = function () {
    this.WT.z_locale = this.dcsMSLocaleFromString(this.WT.z_locale);
    var n = this.dcsMSLocaleFromString(this.DCS.dcsuri), t = this.dcsMSLocaleFromString(this.DCS.dcsqry), i = this.dcsMSLocaleFromString(this.DCSext.wt_maglocale), r = this.dcsMSLocaleFromString(this.DCSext.oo_ul), u = this.dcsMSLocaleFromString(this.DCSext.dsplc), f = this.dcsMSLocaleFromString(this.DCSext.msintl_locale);
    return this.WT.z_locale || n || t || i || r || u || f;
}, WebTrends.prototype.dcsMSLocaleFromString = function (n) {
    var i = /\b\w\w[-\.\/ _]\w\w\b/, t = "";
    return i.test(n) && (t = n.match(i) + "", t = t.replace(/[-\.\/ _]/, "-"), t = t.toLowerCase()), t;
}, WebTrends.prototype.dcsMSSplitTag = function (n) {
    typeof this.domain2 != "undefined" && this.domain2 != "" && (n = n.replace(this.domain, this.domain2), n = n.replace(this.dcsid, this.dcsid2), this.dcsCreateImage(n));
}, WebTrends.prototype.dcsMSClearVars = function () {
    var n, t;
    if (this.DCSdir.ClearVars)
        for (n = this.DCSdir.ClearVars.split(","), n = n.concat("WT.z_ea_name", "WT.z_ea_actionoffer", "WT.z_ea_targetcampaign", "WT.mc_id", "WT.mc_ev", "WT.si_n", "WT.si_x", "WT.si_p", "WT.z_convert", "WT.ad", "WT.ac", "WT.tx_u", "WT.tx_s", "WT.tx_e", "WT.tx_i", "WT.tx_id", "WT.tx_it", "WT.tx_cartid", "WT.si_cs"), t = 0; t < n.length; t++)
            n[t].indexOf("WT.") == 0 ? this.WT[n[t].substring(3)] = "" : n[t].indexOf("DCS.") == 0 ? this.DCS[n[t].substring(4)] = "" : n[t].indexOf("DCSext.") == 0 && (this.DCSext[n[t].substring(7)] = "");
}, WebTrends.prototype.dcsMSDrillDir = function () {
    var u = 5, n = window.location.pathname.substring(window.location.pathname.indexOf("/") + 1, window.location.pathname.lastIndexOf("/") + 1).toLowerCase(), i, t, r;
    if (n == "")
        n = "/";
    else
        for (i = n.split("/"), n = "", t = 1; t < i.length && t <= u; t++) {
            for (n += "/", r = 0; r < t; r++)
                n += i[r] + "/";
            t != u && t != i.length - 1 && (n += ";");
        }
    return n;
}, WebTrends.prototype.dcsIsOnsite = function (n) {
    var i, r, t;
    if (n.length > 0) {
        if (n = n.toLowerCase(), n == window.location.hostname.toLowerCase())
            return !0;
        if (typeof this.onsitedoms.test == "function")
            return this.onsitedoms.test(n);
        if (this.onsitedoms.length > 0)
            for (i = this.dcsSplit(this.onsitedoms), r = i.length, t = 0; t < r; t++)
                if (n == i[t])
                    return !0;
    }
    return !1;
}, WebTrends.prototype.dcsMSImageMap = function (n) {
    var t, r;
    if (n = n || window.event || "", n && (typeof n.which != "number" || n.which == 1) && (t = this.dcsEvt(n, "AREA"), r = this.dcsEvt(n, "IMG"), t.href && t.protocol && t.protocol.indexOf("http") != -1 && !this.dcsMSLinkTrackException(t))) {
        (t.onclick || t.onmousedown) && this.dcsMSSetVarCap(t);
        var u = t.hostname ? t.hostname.split(":")[0] : "", f = t.search ? t.search.substring(t.search.indexOf("?") + 1, t.search.length) : "", e = t.pathname ? t.pathname.indexOf("/") != 0 ? "/" + t.pathname : t.pathname : "/", i = "", o = "1";
        i = r.alt ? r.alt : document.all ? t.title || t.innerText || t.innerHTML || "" : t.title || t.text || t.innerHTML || "";
        u = this.DCS.setvar_dcssip || u;
        e = this.DCS.setvar_dcsuri || e;
        f = this.DCS.setvar_dcsqry || f;
        i = this.WT.setvar_ti || i;
        i = this.dcsTrim(i);
        o = this.WT.setvar_dl || o;
        this.WT.mc_id = this.WT.setvar_mc_id || "";
        this.WT.sp = this.WT.ad = this.DCS.setvar_dcsuri = this.DCS.setvar_dcssip = this.DCS.setvar_dcsqry = this.WT.setvar_ti = this.WT.setvar_mc_id = "";
        t.attributes.getNamedItem("cid") && (this.DCSext.wt_linkid = t.attributes.getNamedItem("cid").value);
        this.dcsMultiTrack("DCS.dcssip", u, "DCS.dcsuri", e, "DCS.dcsqry", this.trimoffsiteparams ? "" : f, "DCS.dcsref", window.location, "WT.ti", "Img Map:" + i, "WT.dl", o, "WT.nv", this.dcsNavigation(n), "DCSext.wtNavigation", this.dcsNavigation(n), "WT.sp", "", "WT.ad", "");
        this.DCS.dcsref = this.WT.ti = this.WT.dl = this.WT.nv = "";
    }
}, WebTrends.prototype.dcsMSLinkTrack = function (n) {
    var t, r;
    if (n = n || window.event || "", n && (typeof n.which != "number" || n.which == 1) && (t = this.dcsEvt(n, "A"), r = this.dcsEvt(n, "IMG"), t.href && t.protocol && t.protocol.indexOf("http") != -1 && !this.dcsMSLinkTrackException(t))) {
        (t.onclick || t.onmousedown) && this.dcsMSSetVarCap(t);
        var u = t.hostname ? t.hostname.split(":")[0] : "", f = t.search ? t.search.substring(t.search.indexOf("?") + 1, t.search.length) : "", e = t.pathname ? t.pathname.indexOf("/") != 0 ? "/" + t.pathname : t.pathname : "/", i = "", o = "1";
        i = r.alt ? r.alt : document.all ? t.title || t.innerText || t.innerHTML || "" : t.title || t.text || t.innerHTML || "";
        u = this.DCS.setvar_dcssip || u;
        e = this.DCS.setvar_dcsuri || e;
        f = this.DCS.setvar_dcsqry || f;
        i = this.WT.setvar_ti || i;
        o = this.WT.setvar_dl || o;
        i = this.dcsTrim(i);
        this.WT.mc_id = this.WT.setvar_mc_id || "";
        this.WT.sp = this.WT.ad = this.DCS.setvar_dcsuri = this.DCS.setvar_dcssip = this.DCS.setvar_dcsqry = this.WT.setvar_ti = this.WT.setvar_mc_id = "";
        this.dcsMultiTrack("DCS.dcssip", u, "DCS.dcsuri", e, "DCS.dcsqry", this.trimoffsiteparams ? "" : f, "DCS.dcsref", window.location, "WT.ti", "Link:" + i, "WT.dl", o, "WT.nv", this.dcsNavigation(n), "DCSext.wtNavigation", this.dcsNavigation(n), "WT.sp", "", "WT.ad", "");
        this.DCS.dcssip = this.DCS.dcsuri = this.DCS.dcsqry = this.DCS.dcsref = this.WT.ti = this.WT.dl = this.WT.nv = "";
    }
}, WebTrends.prototype.dcsMSLinkTrackException = function (n) {
    var t, u, f, i, r;
    try {
        if (t = 0, this.DCSdir.gTrackExceptions)
            for (u = this.DCSdir.gTrackExceptions.split(","); t != 1;) {
                if (n.tagName && n.tagName == "body")
                    return t = 1, !1;
                if (n.className)
                    for (f = String(n.className).split(" "), i = 0; i < u.length; i++)
                        for (r = 0; r < f.length; r++)
                            if (f[r] == u[i])
                                return t = 1, !0;
                n = n.parentNode;
            }
        else
            return !1;
    }
    catch (e) {
    }
}, WebTrends.prototype.dcsMSSetVar = function () {
    var t = dcsSetVar.arguments ? dcsSetVar.arguments : arguments, n;
    if (t.length % 2 == 0)
        for (n = 0; n < t.length; n += 2)
            t[n].indexOf("WT.") == 0 ? this.dcsMSSetVarValidate(t[n]) ? this.WT["setvar_" + t[n].substring(3)] = t[n + 1] : this.WT[t[n].substring(3)] = t[n + 1] : t[n].indexOf("DCS.") == 0 ? this.dcsMSSetVarValidate(t[n]) ? this.DCS["setvar_" + t[n].substring(4)] = t[n + 1] : this.DCS[t[n].substring(4)] = t[n + 1] : t[n].indexOf("DCSext.") == 0 ? this.dcsMSSetVarValidate(t[n]) ? this.DCSext["setvar_" + t[n].substring(7)] = t[n + 1] : this.DCSext[t[n].substring(7)] = t[n + 1] : t[n].indexOf("DCSdir.") == 0 && (this.dcsMSSetVarValidate(t[n]) ? this.DCSdir["setvar_" + t[n].substring(7)] = t[n + 1] : this.DCSdir[t[n].substring(7)] = t[n + 1]);
}, WebTrends.prototype.dcsMSSetVarCap = function (n) {
    var r, t;
    n.onclick ? r = n.onclick.toString() : n.onmousedown && (r = n.onmousedown.toString());
    var u = r.substring(r.indexOf("dcsSetVar(") + 10, r.length) || r.substring(r.indexOf("_tag.dcsMSSetVar(") + 16, r.length), f = u.substring(0, u.indexOf(");")).replace(/\s"/gi, "").replace(/"/gi, "").replace(/'/gi, ""), i = f.split(",");
    if (i.length != -1)
        for (t = 0; t < i.length; t += 2)
            i[t].indexOf("WT.") == 0 ? this.dcsMSSetVarValidate(i[t]) ? this.WT["setvar_" + i[t].substring(3)] = i[t + 1] : this.WT[i[t].substring(3)] = i[t + 1] : i[t].indexOf("DCS.") == 0 ? this.dcsMSSetVarValidate(i[t]) ? this.DCS["setvar_" + i[t].substring(4)] = i[t + 1] : this.DCS[i[t].substring(4)] = i[t + 1] : i[t].indexOf("DCSext.") == 0 ? this.dcsMSSetVarValidate(i[t]) ? this.DCSext["setvar_" + i[t].substring(7)] = i[t + 1] : this.DCSext[i[t].substring(7)] = i[t + 1] : i[t].indexOf("DCSdir.") == 0 && (this.dcsMSSetVarValidate(i[t]) ? this.DCSdir["setvar_" + i[t].substring(7)] = i[t + 1] : this.DCSdir[i[t].substring(7)] = i[t + 1]);
}, WebTrends.prototype.dcsMSSetVarValidate = function (n) {
    for (var t = "DCS.dcssip,DCS.dcsuri,DCS.dcsqry,WT.ti,WT.mc_id,WT.dl", t = t.split(","), i = 0; i < t.length; i++)
        if (t[i] == n)
            return 1;
    return 0;
}, WebTrends.prototype.dcsMSNvr = function () {
    var r, f, n;
    if (document.cookie.indexOf("WTLOPTOUT=") == -1) {
        var e = new Date, o = new Date(e.getTime() + 63072e6), t = { name: "WT_NVR", value: "", expiry: "; expires=" + o.toGMTString(), path: "; path=/", domain: "; domain=" + window.location.hostname }, i = this.dcsMSNvrRead(t.name), u = this.dcsMSNvrProcess(i);
        if (u || this.dcsMSNvrFind(t.name, ","))
            for (r = this.dcsMSNvrCompose(i, t), n = 0; n < r.length; n++)
                document.cookie = r[n];
        if (u)
            for (f = document.cookie.indexOf(t.name + "=") != -1 ? "1" : "2", n = 0; n < i.length; n++)
                i[n][1] && (this.WT["vt_nvr" + (n + 1)] = f);
    }
}, WebTrends.prototype.dcsMSNvrRead = function (n) {
    for (var t = [], e = 0, h = /,/g, u = this.dcsMSNvrGetCookie(n), f, i; u;) {
        for (f = u.split(":"), i = 0; i < f.length; i++) {
            var o = f[i].split("="), r = parseInt(o[0]), s = o[1].replace(h, "|").split("|");
            typeof t[r] != "object" ? t[r] = [s, !1] : t[r][0] = t[r][0].concat(s);
        }
        e++;
        u = this.dcsMSNvrGetCookie(n + e);
    }
    return t;
}, WebTrends.prototype.dcsMSNvrFind = function (n, t) {
    for (var r = !1, u = 0, i = this.dcsMSNvrGetCookie(n); i;) {
        if (i.indexOf(t) != -1) {
            r = !0;
            break;
        }
        u++;
        i = this.dcsMSNvrGetCookie(n + u);
    }
    return r;
}, WebTrends.prototype.dcsMSNvrGetCookie = function (n) {
    var r = document.cookie.indexOf(n + "="), i, t;
    return r != -1 ? (i = r + n.length + 1, t = document.cookie.indexOf(";", i), t == -1 && (t = document.cookie.length), document.cookie.substring(i, t)) : null;
}, WebTrends.prototype.dcsMSNvrProcess = function (n) {
    var f = !1, i = 0, u = [], e = window.location.pathname, r = e.substring(e.indexOf("/") + 1, e.lastIndexOf("/")).toLowerCase(), c = { "%09": /\t/g, "%20": / /g, "%2C": /,/g, "%3B": /;/g }, o = new String(r), s, h, t;
    for (s in c)
        o = o.replace(c[s], s);
    if (r = o, r.length > 1 && (u = r.split("/", 3), i = u.length, r = u.join("/")), n.length > 0)
        if (h = !1, n.length > i) {
            for (t = 0; t < n[i][0].length; t++)
                if (n[i][0][t] == r) {
                    h = !0;
                    break;
                }
            h || (n[i][0][n[i][0].length] = r, n[i][1] = !0, f = !0);
        }
        else {
            for (t = 0; t < i + 1; t++)
                typeof n[t] != "object" && (n[t] = [[t == 0 ? "/" : u.slice(0, t).join("/")], !0]);
            f = !0;
        }
    else {
        for (t = 0; t < i + 1; t++)
            n[t] = [[t == 0 ? "/" : u.slice(0, t).join("/")], !0];
        f = !0;
    }
    return f;
}, WebTrends.prototype.dcsMSNvrCompose = function (n, t) {
    for (var s = [], e = [], r = 0, o = !1, f, i, u = 0; u < n.length && !o; u++)
        for (e = n[u][0], f = u + "=", i = 0; i < e.length && !o; i++)
            f += (i == 0 ? "" : "|") + e[i], (t.name + r).length + t.value.length + f.length + 1 <= 4e3 ? (t.value.length > 0 && i == 0 && (t.value += ":"), t.value += f) : t.value.length > 0 && (s[r] = t.name + (r || "") + "=" + t.value + t.expiry + t.path + t.domain, t.value = u + "=" + e[i], ++r > 9 && (o = !0)), f = "";
    return o || (s[r] = t.name + (r || "") + "=" + t.value + t.expiry + t.path + t.domain), s;
}, WebTrends.prototype.dcsMSGetCrumb = function (n, t, i) {
    var r = this.dcsGetCookie(n), u, f;
    return r != null && (u = r.indexOf(t + "="), u != -1) ? (f = r.indexOf(i, u), f != -1 ? r.substring(u + t.length + i.length, f) : r.substring(u + t.length + i.length, r.length)) : null;
}, WebTrends.prototype.dcsTrim = function (n) {
    while (n.substring(0, 1) == " ")
        n = n.substring(1, n.length);
    while (n.substring(n.length - 1, n.length) == " ")
        n = n.substring(0, n.length - 1);
    return n;
}, typeof gFpc != "undefined") {
    _tag = new WebTrends;
    _tag.dcsGetId();
    _tag.dcsCollect();
    var WT = _tag.WT, DCS = _tag.DCS, DCSext = _tag.DCSext;
}
!function (n) {
    "object" == typeof exports ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : "undefined" != typeof window ? window.io = n() : "undefined" != typeof global ? global.io = n() : "undefined" != typeof self && (self.io = n());
}(function () {
    var n;
    return function t(n, i, r) {
        function f(u, o) {
            var h, s;
            if (!i[u]) {
                if (!n[u]) {
                    if (h = typeof require == "function" && require, !o && h)
                        return h(u, !0);
                    if (e)
                        return e(u, !0);
                    throw new Error("Cannot find module '" + u + "'");
                }
                s = i[u] = { exports: {} };
                n[u][0].call(s.exports, function (t) {
                    var i = n[u][1][t];
                    return f(i ? i : t);
                }, s, s.exports, t, n, i, r);
            }
            return i[u].exports;
        }
        for (var e = typeof require == "function" && require, u = 0; u < r.length; u++)
            f(r[u]);
        return f;
    }({ 1: [function (n, t) {
        t.exports = n("./lib/");
    }, { "./lib/": 2 }], 2: [function (n, t, i) {
        function e(n, t) {
            typeof n == "object" && (t = n, n = undefined);
            t = t || {};
            var e = o(n), i = e.source, s = e.id, h;
            return t.forceNew || t["force new connection"] || !1 === t.multiplex ? (f("ignoring socket cache for %s", i), h = u(i, t)) : (r[s] || (f("new io instance for %s", i), r[s] = u(i, t)), h = r[s]), h.socket(e.path);
        }
        var o = n("./url"), s = n("socket.io-parser"), u = n("./manager"), f = n("debug")("socket.io-client"), r;
        t.exports = i = e;
        r = i.managers = {};
        i.protocol = s.protocol;
        i.connect = e;
        i.Manager = n("./manager");
        i.Socket = n("./socket");
    }, { "./manager": 3, "./socket": 5, "./url": 6, debug: 9, "socket.io-parser": 40 }], 3: [function (n, t) {
        function i(n, t) {
            if (!(this instanceof i))
                return new i(n, t);
            n && "object" == typeof n && (t = n, n = undefined);
            t = t || {};
            t.path = t.path || "/socket.io";
            this.nsps = {};
            this.subs = [];
            this.opts = t;
            this.reconnection(t.reconnection !== !1);
            this.reconnectionAttempts(t.reconnectionAttempts || Infinity);
            this.reconnectionDelay(t.reconnectionDelay || 1e3);
            this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3);
            this.timeout(null == t.timeout ? 2e4 : t.timeout);
            this.readyState = "closed";
            this.uri = n;
            this.connected = 0;
            this.attempts = 0;
            this.encoding = !1;
            this.packetBuffer = [];
            this.encoder = new e.Encoder;
            this.decoder = new e.Decoder;
            this.open();
        }
        var c = n("./url"), o = n("engine.io-client"), s = n("./socket"), h = n("component-emitter"), e = n("socket.io-parser"), u = n("./on"), f = n("component-bind"), l = n("object-component"), r = n("debug")("socket.io-client:manager");
        t.exports = i;
        i.prototype.emitAll = function () {
            this.emit.apply(this, arguments);
            for (var n in this.nsps)
                this.nsps[n].emit.apply(this.nsps[n], arguments);
        };
        h(i.prototype);
        i.prototype.reconnection = function (n) {
            return arguments.length ? (this._reconnection = !!n, this) : this._reconnection;
        };
        i.prototype.reconnectionAttempts = function (n) {
            return arguments.length ? (this._reconnectionAttempts = n, this) : this._reconnectionAttempts;
        };
        i.prototype.reconnectionDelay = function (n) {
            return arguments.length ? (this._reconnectionDelay = n, this) : this._reconnectionDelay;
        };
        i.prototype.reconnectionDelayMax = function (n) {
            return arguments.length ? (this._reconnectionDelayMax = n, this) : this._reconnectionDelayMax;
        };
        i.prototype.timeout = function (n) {
            return arguments.length ? (this._timeout = n, this) : this._timeout;
        };
        i.prototype.maybeReconnectOnOpen = function () {
            this.openReconnect || this.reconnecting || !this._reconnection || (this.openReconnect = !0, this.reconnect());
        };
        i.prototype.open = i.prototype.connect = function (n) {
            var i, t, e, s, f, h;
            return (r("readyState %s", this.readyState), ~this.readyState.indexOf("open")) ? this : (r("opening %s", this.uri), this.engine = o(this.uri, this.opts), i = this.engine, t = this, this.readyState = "opening", e = u(i, "open", function () {
                t.onopen();
                n && n();
            }), s = u(i, "error", function (i) {
                if (r("connect_error"), t.cleanup(), t.readyState = "closed", t.emitAll("connect_error", i), n) {
                    var u = new Error("Connection error");
                    u.data = i;
                    n(u);
                }
                t.maybeReconnectOnOpen();
            }), !1 !== this._timeout && (f = this._timeout, r("connect attempt will timeout after %d", f), h = setTimeout(function () {
                r("connect attempt timed out after %d", f);
                e.destroy();
                i.close();
                i.emit("error", "timeout");
                t.emitAll("connect_timeout", f);
            }, f), this.subs.push({ destroy: function () {
                clearTimeout(h);
            } })), this.subs.push(e), this.subs.push(s), this);
        };
        i.prototype.onopen = function () {
            r("open");
            this.cleanup();
            this.readyState = "open";
            this.emit("open");
            var n = this.engine;
            this.subs.push(u(n, "data", f(this, "ondata")));
            this.subs.push(u(this.decoder, "decoded", f(this, "ondecoded")));
            this.subs.push(u(n, "error", f(this, "onerror")));
            this.subs.push(u(n, "close", f(this, "onclose")));
        };
        i.prototype.ondata = function (n) {
            this.decoder.add(n);
        };
        i.prototype.ondecoded = function (n) {
            this.emit("packet", n);
        };
        i.prototype.onerror = function (n) {
            r("error", n);
            this.emitAll("error", n);
        };
        i.prototype.socket = function (n) {
            var t = this.nsps[n], i;
            if (!t) {
                t = new s(this, n);
                this.nsps[n] = t;
                i = this;
                t.on("connect", function () {
                    i.connected++;
                });
            }
            return t;
        };
        i.prototype.destroy = function () {
            --this.connected || this.close();
        };
        i.prototype.packet = function (n) {
            r("writing packet %j", n);
            var t = this;
            t.encoding ? t.packetBuffer.push(n) : (t.encoding = !0, this.encoder.encode(n, function (n) {
                for (var i = 0; i < n.length; i++)
                    t.engine.write(n[i]);
                t.encoding = !1;
                t.processPacketQueue();
            }));
        };
        i.prototype.processPacketQueue = function () {
            if (this.packetBuffer.length > 0 && !this.encoding) {
                var n = this.packetBuffer.shift();
                this.packet(n);
            }
        };
        i.prototype.cleanup = function () {
            for (var n; n = this.subs.shift();)
                n.destroy();
            this.packetBuffer = [];
            this.encoding = !1;
            this.decoder.destroy();
        };
        i.prototype.close = i.prototype.disconnect = function () {
            this.skipReconnect = !0;
            this.engine.close();
        };
        i.prototype.onclose = function (n) {
            r("close");
            this.cleanup();
            this.readyState = "closed";
            this.emit("close", n);
            this._reconnection && !this.skipReconnect && this.reconnect();
        };
        i.prototype.reconnect = function () {
            var n, t, i;
            if (this.reconnecting)
                return this;
            n = this;
            this.attempts++;
            this.attempts > this._reconnectionAttempts ? (r("reconnect failed"), this.emitAll("reconnect_failed"), this.reconnecting = !1) : (t = this.attempts * this.reconnectionDelay(), t = Math.min(t, this.reconnectionDelayMax()), r("will wait %dms before reconnect attempt", t), this.reconnecting = !0, i = setTimeout(function () {
                r("attempting reconnect");
                n.emitAll("reconnect_attempt", n.attempts);
                n.emitAll("reconnecting", n.attempts);
                n.open(function (t) {
                    t ? (r("reconnect attempt error"), n.reconnecting = !1, n.reconnect(), n.emitAll("reconnect_error", t.data)) : (r("reconnect success"), n.onreconnect());
                });
            }, t), this.subs.push({ destroy: function () {
                clearTimeout(i);
            } }));
        };
        i.prototype.onreconnect = function () {
            var n = this.attempts;
            this.attempts = 0;
            this.reconnecting = !1;
            this.emitAll("reconnect", n);
        };
    }, { "./on": 4, "./socket": 5, "./url": 6, "component-bind": 7, "component-emitter": 8, debug: 9, "engine.io-client": 11, "object-component": 37, "socket.io-parser": 40 }], 4: [function (n, t) {
        function i(n, t, i) {
            n.on(t, i);
            return { destroy: function () {
                n.removeListener(t, i);
            } };
        }
        t.exports = i;
    }, {}], 5: [function (n, t, i) {
        function r(n, t) {
            this.io = n;
            this.nsp = t;
            this.json = this;
            this.ids = 0;
            this.acks = {};
            this.open();
            this.receiveBuffer = [];
            this.sendBuffer = [];
            this.connected = !1;
            this.disconnected = !0;
            this.subEvents();
        }
        var u = n("socket.io-parser"), c = n("component-emitter"), o = n("to-array"), s = n("./on"), h = n("component-bind"), f = n("debug")("socket.io-client:socket"), l = n("has-binary-data"), v = n("indexof"), a, e;
        t.exports = i = r;
        a = { connect: 1, connect_error: 1, connect_timeout: 1, disconnect: 1, error: 1, reconnect: 1, reconnect_attempt: 1, reconnect_failed: 1, reconnect_error: 1, reconnecting: 1 };
        e = c.prototype.emit;
        c(r.prototype);
        r.prototype.subEvents = function () {
            var n = this.io;
            this.subs = [s(n, "open", h(this, "onopen")), s(n, "packet", h(this, "onpacket")), s(n, "close", h(this, "onclose"))];
        };
        r.prototype.open = r.prototype.connect = function () {
            return this.connected ? this : (this.io.open(), "open" == this.io.readyState && this.onopen(), this);
        };
        r.prototype.send = function () {
            var n = o(arguments);
            return n.unshift("message"), this.emit.apply(this, n), this;
        };
        r.prototype.emit = function (n) {
            var t, r, i;
            return a.hasOwnProperty(n) ? (e.apply(this, arguments), this) : (t = o(arguments), r = u.EVENT, l(t) && (r = u.BINARY_EVENT), i = { type: r, data: t }, "function" == typeof t[t.length - 1] && (f("emitting packet with ack id %d", this.ids), this.acks[this.ids] = t.pop(), i.id = this.ids++), this.connected ? this.packet(i) : this.sendBuffer.push(i), this);
        };
        r.prototype.packet = function (n) {
            n.nsp = this.nsp;
            this.io.packet(n);
        };
        r.prototype.onopen = function () {
            f("transport is open - connecting");
            "/" != this.nsp && this.packet({ type: u.CONNECT });
        };
        r.prototype.onclose = function (n) {
            f("close (%s)", n);
            this.connected = !1;
            this.disconnected = !0;
            this.emit("disconnect", n);
        };
        r.prototype.onpacket = function (n) {
            if (n.nsp == this.nsp)
                switch (n.type) {
                    case u.CONNECT:
                        this.onconnect();
                        break;
                    case u.EVENT:
                        this.onevent(n);
                        break;
                    case u.BINARY_EVENT:
                        this.onevent(n);
                        break;
                    case u.ACK:
                        this.onack(n);
                        break;
                    case u.BINARY_ACK:
                        this.onack(n);
                        break;
                    case u.DISCONNECT:
                        this.ondisconnect();
                        break;
                    case u.ERROR: this.emit("error", n.data);
                }
        };
        r.prototype.onevent = function (n) {
            var t = n.data || [];
            f("emitting event %j", t);
            null != n.id && (f("attaching ack callback to event"), t.push(this.ack(n.id)));
            this.connected ? e.apply(this, t) : this.receiveBuffer.push(t);
        };
        r.prototype.ack = function (n) {
            var i = this, t = !1;
            return function () {
                var r, e;
                t || (t = !0, r = o(arguments), f("sending ack %j", r), e = l(r) ? u.BINARY_ACK : u.ACK, i.packet({ type: e, id: n, data: r }));
            };
        };
        r.prototype.onack = function (n) {
            f("calling ack %s with %j", n.id, n.data);
            var t = this.acks[n.id];
            t.apply(this, n.data);
            delete this.acks[n.id];
        };
        r.prototype.onconnect = function () {
            this.connected = !0;
            this.disconnected = !1;
            this.emit("connect");
            this.emitBuffered();
        };
        r.prototype.emitBuffered = function () {
            for (var n = 0; n < this.receiveBuffer.length; n++)
                e.apply(this, this.receiveBuffer[n]);
            for (this.receiveBuffer = [], n = 0; n < this.sendBuffer.length; n++)
                this.packet(this.sendBuffer[n]);
            this.sendBuffer = [];
        };
        r.prototype.ondisconnect = function () {
            f("server disconnect (%s)", this.nsp);
            this.destroy();
            this.onclose("io server disconnect");
        };
        r.prototype.destroy = function () {
            for (var n = 0; n < this.subs.length; n++)
                this.subs[n].destroy();
            this.io.destroy(this);
        };
        r.prototype.close = r.prototype.disconnect = function () {
            if (!this.connected)
                return this;
            f("performing disconnect (%s)", this.nsp);
            this.packet({ type: u.DISCONNECT });
            this.destroy();
            this.onclose("io client disconnect");
            return this;
        };
    }, { "./on": 4, "component-bind": 7, "component-emitter": 8, debug: 9, "has-binary-data": 32, indexof: 36, "socket.io-parser": 40, "to-array": 43 }], 6: [function (n, t) {
        function f(n, t) {
            var f = n, t = t || r.location;
            return null == n && (n = t.protocol + "//" + t.hostname), "string" == typeof n && ("/" == n.charAt(0) && "undefined" != typeof t && (n = t.hostname + n), /^(https?|wss?):\/\//.test(n) || (i("protocol-less url %s", n), n = "undefined" != typeof t ? t.protocol + "//" + n : "https://" + n), i("parse %s", n), f = u(n)), f.port || (/^(http|ws)$/.test(f.protocol) ? f.port = "80" : /^(http|ws)s$/.test(f.protocol) && (f.port = "443")), f.path = f.path || "/", f.id = f.protocol + "://" + f.host + ":" + f.port, f.href = f.protocol + "://" + f.host + (t && t.port == f.port ? "" : ":" + f.port), f;
        }
        var r = typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, u = n("parseuri"), i = n("debug")("socket.io-client:url");
        t.exports = f;
    }, { debug: 9, parseuri: 38 }], 7: [function (n, t) {
        var i = [].slice;
        t.exports = function (n, t) {
            if ("string" == typeof t && (t = n[t]), "function" != typeof t)
                throw new Error("bind() requires a function");
            var r = i.call(arguments, 2);
            return function () {
                return t.apply(n, r.concat(i.call(arguments)));
            };
        };
    }, {}], 8: [function (n, t) {
        function i(n) {
            if (n)
                return r(n);
        }
        function r(n) {
            for (var t in i.prototype)
                n[t] = i.prototype[t];
            return n;
        }
        t.exports = i;
        i.prototype.on = i.prototype.addEventListener = function (n, t) {
            return this._callbacks = this._callbacks || {}, (this._callbacks[n] = this._callbacks[n] || []).push(t), this;
        };
        i.prototype.once = function (n, t) {
            function i() {
                r.off(n, i);
                t.apply(this, arguments);
            }
            var r = this;
            this._callbacks = this._callbacks || {};
            i.fn = t;
            this.on(n, i);
            return this;
        };
        i.prototype.off = i.prototype.removeListener = i.prototype.removeAllListeners = i.prototype.removeEventListener = function (n, t) {
            var i, u, r;
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length)
                return this._callbacks = {}, this;
            if (i = this._callbacks[n], !i)
                return this;
            if (1 == arguments.length)
                return delete this._callbacks[n], this;
            for (r = 0; r < i.length; r++)
                if (u = i[r], u === t || u.fn === t) {
                    i.splice(r, 1);
                    break;
                }
            return this;
        };
        i.prototype.emit = function (n) {
            var r, t, i, u;
            if (this._callbacks = this._callbacks || {}, r = [].slice.call(arguments, 1), t = this._callbacks[n], t)
                for (t = t.slice(0), i = 0, u = t.length; i < u; ++i)
                    t[i].apply(this, r);
            return this;
        };
        i.prototype.listeners = function (n) {
            return this._callbacks = this._callbacks || {}, this._callbacks[n] || [];
        };
        i.prototype.hasListeners = function (n) {
            return !!this.listeners(n).length;
        };
    }, {}], 9: [function (n, t) {
        function i(n) {
            return i.enabled(n) ? function (t) {
                t = r(t);
                var u = new Date, f = u - (i[n] || u);
                i[n] = u;
                t = n + " " + t + " +" + i.humanize(f);
                window.console && console.log && Function.prototype.apply.call(console.log, console, arguments);
            } : function () {
            };
        }
        function r(n) {
            return n instanceof Error ? n.stack || n.message : n;
        }
        t.exports = i;
        i.names = [];
        i.skips = [];
        i.enable = function (n) {
            var r, u, t;
            try {
                localStorage.debug = n;
            }
            catch (f) {
            }
            for (r = (n || "").split(/[\s,]+/), u = r.length, t = 0; t < u; t++)
                n = r[t].replace("*", ".*?"), n[0] === "-" ? i.skips.push(new RegExp("^" + n.substr(1) + "$")) : i.names.push(new RegExp("^" + n + "$"));
        };
        i.disable = function () {
            i.enable("");
        };
        i.humanize = function (n) {
            var i = 1e3, t = 6e4, r = 60 * t;
            return n >= r ? (n / r).toFixed(1) + "h" : n >= t ? (n / t).toFixed(1) + "m" : n >= i ? (n / i | 0) + "s" : n + "ms";
        };
        i.enabled = function (n) {
            for (var t = 0, r = i.skips.length; t < r; t++)
                if (i.skips[t].test(n))
                    return !1;
            for (t = 0, r = i.names.length; t < r; t++)
                if (i.names[t].test(n))
                    return !0;
            return !1;
        };
        try {
            window.localStorage && i.enable(localStorage.debug);
        }
        catch (u) {
        }
    }, {}], 10: [function (n, t) {
        function i(n) {
            if (n)
                return u(n);
        }
        function u(n) {
            for (var t in i.prototype)
                n[t] = i.prototype[t];
            return n;
        }
        var r = n("indexof");
        t.exports = i;
        i.prototype.on = function (n, t) {
            return this._callbacks = this._callbacks || {}, (this._callbacks[n] = this._callbacks[n] || []).push(t), this;
        };
        i.prototype.once = function (n, t) {
            function i() {
                r.off(n, i);
                t.apply(this, arguments);
            }
            var r = this;
            this._callbacks = this._callbacks || {};
            t._off = i;
            this.on(n, i);
            return this;
        };
        i.prototype.off = i.prototype.removeListener = i.prototype.removeAllListeners = function (n, t) {
            var i, u;
            return (this._callbacks = this._callbacks || {}, 0 == arguments.length) ? (this._callbacks = {}, this) : (i = this._callbacks[n], !i) ? this : 1 == arguments.length ? (delete this._callbacks[n], this) : (u = r(i, t._off || t), ~u && i.splice(u, 1), this);
        };
        i.prototype.emit = function (n) {
            var r, t, i, u;
            if (this._callbacks = this._callbacks || {}, r = [].slice.call(arguments, 1), t = this._callbacks[n], t)
                for (t = t.slice(0), i = 0, u = t.length; i < u; ++i)
                    t[i].apply(this, r);
            return this;
        };
        i.prototype.listeners = function (n) {
            return this._callbacks = this._callbacks || {}, this._callbacks[n] || [];
        };
        i.prototype.hasListeners = function (n) {
            return !!this.listeners(n).length;
        };
    }, { indexof: 36 }], 11: [function (n, t) {
        t.exports = n("./lib/");
    }, { "./lib/": 12 }], 12: [function (n, t) {
        t.exports = n("./socket");
        t.exports.parser = n("engine.io-parser");
    }, { "./socket": 13, "engine.io-parser": 22 }], 13: [function (n, t) {
        function i(n, t) {
            if (!(this instanceof i))
                return new i(n, t);
            if (t = t || {}, n && "object" == typeof n && (t = n, n = null), n && (n = h(n), t.host = n.host, t.secure = n.protocol == "https" || n.protocol == "wss", t.port = n.port, n.query && (t.query = n.query)), this.secure = null != t.secure ? t.secure : u.location && "https:" == location.protocol, t.host) {
                var r = t.host.split(":");
                t.hostname = r.shift();
                r.length && (t.port = r.pop());
            }
            this.agent = t.agent || !1;
            this.hostname = t.hostname || (u.location ? location.hostname : "localhost");
            this.port = t.port || (u.location && location.port ? location.port : this.secure ? 443 : 80);
            this.query = t.query || {};
            "string" == typeof this.query && (this.query = l.decode(this.query));
            this.upgrade = !1 !== t.upgrade;
            this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/";
            this.forceJSONP = !!t.forceJSONP;
            this.forceBase64 = !!t.forceBase64;
            this.timestampParam = t.timestampParam || "t";
            this.timestampRequests = t.timestampRequests;
            this.transports = t.transports || ["polling", "websocket"];
            this.readyState = "";
            this.writeBuffer = [];
            this.callbackBuffer = [];
            this.policyPort = t.policyPort || 843;
            this.rememberUpgrade = t.rememberUpgrade || !1;
            this.open();
            this.binaryType = null;
            this.onlyBinaryUpgrades = t.onlyBinaryUpgrades;
        }
        function a(n) {
            var i = {}, t;
            for (t in n)
                n.hasOwnProperty(t) && (i[t] = n[t]);
            return i;
        }
        var u = typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, e = n("./transports"), o = n("component-emitter"), r = n("debug")("engine.io-client:socket"), s = n("indexof"), f = n("engine.io-parser"), h = n("parseuri"), c = n("parsejson"), l = n("parseqs");
        t.exports = i;
        i.priorWebsocketSuccess = !1;
        o(i.prototype);
        i.protocol = f.protocol;
        i.Socket = i;
        i.Transport = n("./transport");
        i.transports = n("./transports");
        i.parser = n("engine.io-parser");
        i.prototype.createTransport = function (n) {
            var t;
            return r('creating transport "%s"', n), t = a(this.query), t.EIO = f.protocol, t.transport = n, this.id && (t.sid = this.id), new e[n]({ agent: this.agent, hostname: this.hostname, port: this.port, secure: this.secure, path: this.path, query: t, forceJSONP: this.forceJSONP, forceBase64: this.forceBase64, timestampRequests: this.timestampRequests, timestampParam: this.timestampParam, policyPort: this.policyPort, socket: this });
        };
        i.prototype.open = function () {
            var n;
            n = this.rememberUpgrade && i.priorWebsocketSuccess && this.transports.indexOf("websocket") != -1 ? "websocket" : this.transports[0];
            this.readyState = "opening";
            n = this.createTransport(n);
            n.open();
            this.setTransport(n);
        };
        i.prototype.setTransport = function (n) {
            r("setting transport %s", n.name);
            var t = this;
            this.transport && (r("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners());
            this.transport = n;
            n.on("drain", function () {
                t.onDrain();
            }).on("packet", function (n) {
                t.onPacket(n);
            }).on("error", function (n) {
                t.onError(n);
            }).on("close", function () {
                t.onClose("transport close");
            });
        };
        i.prototype.probe = function (n) {
            function o() {
                if (u.onlyBinaryUpgrades) {
                    var e = !this.supportsBinary && u.transport.supportsBinary;
                    f = f || e;
                }
                if (!f) {
                    r('probe transport "%s" opened', n);
                    t.send([{ type: "ping", data: "probe" }]);
                    t.once("packet", function (e) {
                        if (!f)
                            if ("pong" == e.type && "probe" == e.data)
                                r('probe transport "%s" pong', n), u.upgrading = !0, u.emit("upgrading", t), i.priorWebsocketSuccess = "websocket" == t.name, r('pausing current transport "%s"', u.transport.name), u.transport.pause(function () {
                                    f || "closed" != u.readyState && "closing" != u.readyState && (r("changing transport and sending upgrade packet"), a(), u.setTransport(t), t.send([{ type: "upgrade" }]), u.emit("upgrade", t), t = null, u.upgrading = !1, u.flush());
                                });
                            else {
                                r('probe transport "%s" failed', n);
                                var o = new Error("probe error");
                                o.transport = t.name;
                                u.emit("upgradeError", o);
                            }
                    });
                }
            }
            function s() {
                f || (f = !0, a(), t.close(), t = null);
            }
            function e(i) {
                var f = new Error("probe error: " + i);
                f.transport = t.name;
                s();
                r('probe transport "%s" failed because of error: %s', n, i);
                u.emit("upgradeError", f);
            }
            function h() {
                e("transport closed");
            }
            function c() {
                e("socket closed");
            }
            function l(n) {
                t && n.name != t.name && (r('"%s" works - aborting "%s"', n.name, t.name), s());
            }
            function a() {
                t.removeListener("open", o);
                t.removeListener("error", e);
                t.removeListener("close", h);
                u.removeListener("close", c);
                u.removeListener("upgrading", l);
            }
            r('probing transport "%s"', n);
            var t = this.createTransport(n, { probe: 1 }), f = !1, u = this;
            i.priorWebsocketSuccess = !1;
            t.once("open", o);
            t.once("error", e);
            t.once("close", h);
            this.once("close", c);
            this.once("upgrading", l);
            t.open();
        };
        i.prototype.onOpen = function () {
            if (r("socket open"), this.readyState = "open", i.priorWebsocketSuccess = "websocket" == this.transport.name, this.emit("open"), this.flush(), "open" == this.readyState && this.upgrade && this.transport.pause) {
                r("starting upgrade probes");
                for (var n = 0, t = this.upgrades.length; n < t; n++)
                    this.probe(this.upgrades[n]);
            }
        };
        i.prototype.onPacket = function (n) {
            if ("opening" == this.readyState || "open" == this.readyState) {
                r('socket receive: type "%s", data "%s"', n.type, n.data);
                this.emit("packet", n);
                this.emit("heartbeat");
                switch (n.type) {
                    case "open":
                        this.onHandshake(c(n.data));
                        break;
                    case "pong":
                        this.setPing();
                        break;
                    case "error":
                        var t = new Error("server error");
                        t.code = n.data;
                        this.emit("error", t);
                        break;
                    case "message":
                        this.emit("data", n.data);
                        this.emit("message", n.data);
                }
            }
            else
                r('packet received with socket readyState "%s"', this.readyState);
        };
        i.prototype.onHandshake = function (n) {
            if (this.emit("handshake", n), this.id = n.sid, this.transport.query.sid = n.sid, this.upgrades = this.filterUpgrades(n.upgrades), this.pingInterval = n.pingInterval, this.pingTimeout = n.pingTimeout, this.onOpen(), "closed" != this.readyState) {
                this.setPing();
                this.removeListener("heartbeat", this.onHeartbeat);
                this.on("heartbeat", this.onHeartbeat);
            }
        };
        i.prototype.onHeartbeat = function (n) {
            clearTimeout(this.pingTimeoutTimer);
            var t = this;
            t.pingTimeoutTimer = setTimeout(function () {
                if ("closed" != t.readyState)
                    t.onClose("ping timeout");
            }, n || t.pingInterval + t.pingTimeout);
        };
        i.prototype.setPing = function () {
            var n = this;
            clearTimeout(n.pingIntervalTimer);
            n.pingIntervalTimer = setTimeout(function () {
                r("writing ping packet - expecting pong within %sms", n.pingTimeout);
                n.ping();
                n.onHeartbeat(n.pingTimeout);
            }, n.pingInterval);
        };
        i.prototype.ping = function () {
            this.sendPacket("ping");
        };
        i.prototype.onDrain = function () {
            for (var n = 0; n < this.prevBufferLen; n++)
                this.callbackBuffer[n] && this.callbackBuffer[n]();
            this.writeBuffer.splice(0, this.prevBufferLen);
            this.callbackBuffer.splice(0, this.prevBufferLen);
            this.prevBufferLen = 0;
            this.writeBuffer.length == 0 ? this.emit("drain") : this.flush();
        };
        i.prototype.flush = function () {
            "closed" != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (r("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));
        };
        i.prototype.write = i.prototype.send = function (n, t) {
            return this.sendPacket("message", n, t), this;
        };
        i.prototype.sendPacket = function (n, t, i) {
            var r = { type: n, data: t };
            this.emit("packetCreate", r);
            this.writeBuffer.push(r);
            this.callbackBuffer.push(i);
            this.flush();
        };
        i.prototype.close = function () {
            if ("opening" == this.readyState || "open" == this.readyState) {
                this.onClose("forced close");
                r("socket closing - telling transport to close");
                this.transport.close();
            }
            return this;
        };
        i.prototype.onError = function (n) {
            r("socket error %j", n);
            i.priorWebsocketSuccess = !1;
            this.emit("error", n);
            this.onClose("transport error", n);
        };
        i.prototype.onClose = function (n, t) {
            if ("opening" == this.readyState || "open" == this.readyState) {
                r('socket close with reason: "%s"', n);
                var i = this;
                clearTimeout(this.pingIntervalTimer);
                clearTimeout(this.pingTimeoutTimer);
                setTimeout(function () {
                    i.writeBuffer = [];
                    i.callbackBuffer = [];
                    i.prevBufferLen = 0;
                }, 0);
                this.transport.removeAllListeners("close");
                this.transport.close();
                this.transport.removeAllListeners();
                this.readyState = "closed";
                this.id = null;
                this.emit("close", n, t);
            }
        };
        i.prototype.filterUpgrades = function (n) {
            for (var i = [], t = 0, r = n.length; t < r; t++)
                ~s(this.transports, n[t]) && i.push(n[t]);
            return i;
        };
    }, { "./transport": 14, "./transports": 15, "component-emitter": 8, debug: 9, "engine.io-parser": 22, indexof: 36, parsejson: 29, parseqs: 30, parseuri: 38 }], 14: [function (n, t) {
        function i(n) {
            this.path = n.path;
            this.hostname = n.hostname;
            this.port = n.port;
            this.secure = n.secure;
            this.query = n.query;
            this.timestampParam = n.timestampParam;
            this.timestampRequests = n.timestampRequests;
            this.readyState = "";
            this.agent = n.agent || !1;
            this.socket = n.socket;
        }
        var r = n("engine.io-parser"), u = n("component-emitter");
        t.exports = i;
        u(i.prototype);
        i.timestamps = 0;
        i.prototype.onError = function (n, t) {
            var i = new Error(n);
            return i.type = "TransportError", i.description = t, this.emit("error", i), this;
        };
        i.prototype.open = function () {
            return ("closed" == this.readyState || "" == this.readyState) && (this.readyState = "opening", this.doOpen()), this;
        };
        i.prototype.close = function () {
            return ("opening" == this.readyState || "open" == this.readyState) && (this.doClose(), this.onClose()), this;
        };
        i.prototype.send = function (n) {
            if ("open" == this.readyState)
                this.write(n);
            else
                throw new Error("Transport not open");
        };
        i.prototype.onOpen = function () {
            this.readyState = "open";
            this.writable = !0;
            this.emit("open");
        };
        i.prototype.onData = function (n) {
            try {
                var i = r.decodePacket(n, this.socket.binaryType);
                this.onPacket(i);
            }
            catch (t) {
                t.data = n;
                this.onError("parser decode error", t);
            }
        };
        i.prototype.onPacket = function (n) {
            this.emit("packet", n);
        };
        i.prototype.onClose = function () {
            this.readyState = "closed";
            this.emit("close");
        };
    }, { "component-emitter": 8, "engine.io-parser": 22 }], 15: [function (n, t, i) {
        function s(n) {
            var i, o = !1, s, t;
            return r.location && (s = "https:" == location.protocol, t = location.port, t || (t = s ? 443 : 80), o = n.hostname != location.hostname || t != n.port), n.xdomain = o, i = new u(n), "open" in i && !n.forceJSONP ? new f(n) : new e(n);
        }
        var r = typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, u = n("xmlhttprequest"), f = n("./polling-xhr"), e = n("./polling-jsonp"), o = n("./websocket");
        i.polling = s;
        i.websocket = o;
    }, { "./polling-jsonp": 16, "./polling-xhr": 17, "./websocket": 19, xmlhttprequest: 20 }], 16: [function (n, t) {
        function h() {
        }
        function r(n) {
            f.call(this, n);
            this.query = this.query || {};
            u || (i.___eio || (i.___eio = []), u = i.___eio);
            this.index = u.length;
            var t = this;
            u.push(function (n) {
                t.onData(n);
            });
            this.query.j = this.index;
            i.document && i.addEventListener && i.addEventListener("beforeunload", function () {
                t.script && (t.script.onerror = h);
            });
        }
        var i = typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, f = n("./polling"), e = n("component-inherit");
        t.exports = r;
        var o = /\n/g, s = /\\n/g, u;
        e(r, f);
        r.prototype.supportsBinary = !1;
        r.prototype.doClose = function () {
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null);
            this.form && (this.form.parentNode.removeChild(this.form), this.form = null);
            f.prototype.doClose.call(this);
        };
        r.prototype.doPoll = function () {
            var r = this, n = document.createElement("script"), t, i;
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null);
            n.async = !0;
            n.src = this.uri();
            n.onerror = function (n) {
                r.onError("jsonp poll error", n);
            };
            t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(n, t);
            this.script = n;
            i = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
            i && setTimeout(function () {
                var n = document.createElement("iframe");
                document.body.appendChild(n);
                document.body.removeChild(n);
            }, 100);
        };
        r.prototype.doWrite = function (n, t) {
            function e() {
                h();
                t();
            }
            function h() {
                if (i.iframe)
                    try {
                        i.form.removeChild(i.iframe);
                    }
                    catch (n) {
                        i.onError("jsonp polling iframe removal error", n);
                    }
                try {
                    var t = '<iframe src="javascript:0" name="' + i.iframeId + '">';
                    u = document.createElement(t);
                }
                catch (n) {
                    u = document.createElement("iframe");
                    u.name = i.iframeId;
                    u.src = "javascript:0";
                }
                u.id = i.iframeId;
                i.form.appendChild(u);
                i.iframe = u;
            }
            var i = this;
            if (!this.form) {
                var r = document.createElement("form"), f = document.createElement("textarea"), c = this.iframeId = "eio_iframe_" + this.index, u;
                r.className = "socketio";
                r.style.position = "absolute";
                r.style.top = "-1000px";
                r.style.left = "-1000px";
                r.target = c;
                r.method = "POST";
                r.setAttribute("accept-charset", "utf-8");
                f.name = "d";
                r.appendChild(f);
                document.body.appendChild(r);
                this.form = r;
                this.area = f;
            }
            this.form.action = this.uri();
            h();
            n = n.replace(s, "\\\n");
            this.area.value = n.replace(o, "\\n");
            try {
                this.form.submit();
            }
            catch (l) {
            }
            this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {
                i.iframe.readyState == "complete" && e();
            } : this.iframe.onload = e;
        };
    }, { "./polling": 18, "component-inherit": 21 }], 17: [function (n, t) {
        function l() {
        }
        function u(n) {
            if (e.call(this, n), r.location) {
                var i = "https:" == location.protocol, t = location.port;
                t || (t = i ? 443 : 80);
                this.xd = n.hostname != r.location.hostname || t != n.port;
            }
        }
        function i(n) {
            this.method = n.method || "GET";
            this.uri = n.uri;
            this.xd = !!n.xd;
            this.async = !1 !== n.async;
            this.data = undefined != n.data ? n.data : null;
            this.agent = n.agent;
            this.create(n.isBinary, n.supportsBinary);
        }
        function o() {
            for (var n in i.requests)
                i.requests.hasOwnProperty(n) && i.requests[n].abort();
        }
        var r = typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, s = n("xmlhttprequest"), e = n("./polling"), h = n("component-emitter"), c = n("component-inherit"), f = n("debug")("engine.io-client:polling-xhr");
        t.exports = u;
        t.exports.Request = i;
        c(u, e);
        u.prototype.supportsBinary = !0;
        u.prototype.request = function (n) {
            return n = n || {}, n.uri = this.uri(), n.xd = this.xd, n.agent = this.agent || !1, n.supportsBinary = this.supportsBinary, new i(n);
        };
        u.prototype.doWrite = function (n, t) {
            var r = typeof n != "string" && n !== undefined, i = this.request({ method: "POST", data: n, isBinary: r }), u = this;
            i.on("success", t);
            i.on("error", function (n) {
                u.onError("xhr post error", n);
            });
            this.sendXhr = i;
        };
        u.prototype.doPoll = function () {
            f("xhr poll");
            var n = this.request(), t = this;
            n.on("data", function (n) {
                t.onData(n);
            });
            n.on("error", function (n) {
                t.onError("xhr poll error", n);
            });
            this.pollXhr = n;
        };
        h(i.prototype);
        i.prototype.create = function (n, t) {
            var u = this.xhr = new s({ agent: this.agent, xdomain: this.xd }), e = this;
            try {
                if (f("xhr open %s: %s", this.method, this.uri), u.open(this.method, this.uri, this.async), t && (u.responseType = "arraybuffer"), "POST" == this.method)
                    try {
                        n ? u.setRequestHeader("Content-type", "application/octet-stream") : u.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                    }
                    catch (o) {
                    }
                "withCredentials" in u && (u.withCredentials = !0);
                u.onreadystatechange = function () {
                    var n, i;
                    try {
                        if (4 != u.readyState)
                            return;
                        200 == u.status || 1223 == u.status ? (i = u.getResponseHeader("Content-Type"), n = i === "application/octet-stream" ? u.response : t ? "ok" : u.responseText) : setTimeout(function () {
                            e.onError(u.status);
                        }, 0);
                    }
                    catch (r) {
                        e.onError(r);
                    }
                    if (null != n)
                        e.onData(n);
                };
                f("xhr data %s", this.data);
                u.send(this.data);
            }
            catch (o) {
                setTimeout(function () {
                    e.onError(o);
                }, 0);
                return;
            }
            r.document && (this.index = i.requestsCount++, i.requests[this.index] = this);
        };
        i.prototype.onSuccess = function () {
            this.emit("success");
            this.cleanup();
        };
        i.prototype.onData = function (n) {
            this.emit("data", n);
            this.onSuccess();
        };
        i.prototype.onError = function (n) {
            this.emit("error", n);
            this.cleanup();
        };
        i.prototype.cleanup = function () {
            if ("undefined" != typeof this.xhr && null !== this.xhr) {
                this.xhr.onreadystatechange = l;
                try {
                    this.xhr.abort();
                }
                catch (n) {
                }
                r.document && delete i.requests[this.index];
                this.xhr = null;
            }
        };
        i.prototype.abort = function () {
            this.cleanup();
        };
        r.document && (i.requestsCount = 0, i.requests = {}, r.attachEvent ? r.attachEvent("onunload", o) : r.addEventListener && r.addEventListener("beforeunload", o));
    }, { "./polling": 18, "component-emitter": 8, "component-inherit": 21, debug: 9, xmlhttprequest: 20 }], 18: [function (n, t) {
        function r(n) {
            var t = n && n.forceBase64;
            (!e || t) && (this.supportsBinary = !1);
            u.call(this, n);
        }
        var u = n("../transport"), o = n("parseqs"), f = n("engine.io-parser"), s = n("component-inherit"), i = n("debug")("engine.io-client:polling"), e;
        t.exports = r;
        e = function () {
            var t = n("xmlhttprequest"), i = new t({ agent: this.agent, xdomain: !1 });
            return null != i.responseType;
        }();
        s(r, u);
        r.prototype.name = "polling";
        r.prototype.doOpen = function () {
            this.poll();
        };
        r.prototype.pause = function (n) {
            function r() {
                i("paused");
                u.readyState = "paused";
                n();
            }
            var u = this, t;
            if (this.readyState = "pausing", this.polling || !this.writable) {
                if (t = 0, this.polling) {
                    i("we are currently polling - waiting to pause");
                    t++;
                    this.once("pollComplete", function () {
                        i("pre-pause polling complete");
                        --t || r();
                    });
                }
                if (!this.writable) {
                    i("we are currently writing - waiting to pause");
                    t++;
                    this.once("drain", function () {
                        i("pre-pause writing complete");
                        --t || r();
                    });
                }
            }
            else
                r();
        };
        r.prototype.poll = function () {
            i("polling");
            this.polling = !0;
            this.doPoll();
            this.emit("poll");
        };
        r.prototype.onData = function (n) {
            var t = this, r;
            i("polling got data %s", n);
            r = function (n) {
                if ("opening" == t.readyState && t.onOpen(), "close" == n.type)
                    return t.onClose(), !1;
                t.onPacket(n);
            };
            f.decodePayload(n, this.socket.binaryType, r);
            "closed" != this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" == this.readyState ? this.poll() : i('ignoring poll - transport state "%s"', this.readyState));
        };
        r.prototype.doClose = function () {
            function n() {
                i("writing close packet");
                t.write([{ type: "close" }]);
            }
            var t = this;
            if ("open" == this.readyState)
                i("transport open - closing"), n();
            else {
                i("transport not open - deferring close");
                this.once("open", n);
            }
        };
        r.prototype.write = function (n) {
            var t = this, i;
            this.writable = !1;
            i = function () {
                t.writable = !0;
                t.emit("drain");
            };
            t = this;
            f.encodePayload(n, this.supportsBinary, function (n) {
                t.doWrite(n, i);
            });
        };
        r.prototype.uri = function () {
            var n = this.query || {}, t = this.secure ? "https" : "http", i = "";
            return !1 !== this.timestampRequests && (n[this.timestampParam] = +new Date + "-" + u.timestamps++), this.supportsBinary || n.sid || (n.b64 = 1), n = o.encode(n), this.port && ("https" == t && this.port != 443 || "http" == t && this.port != 80) && (i = ":" + this.port), n.length && (n = "?" + n), t + "://" + this.hostname + i + this.path + n;
        };
    }, { "../transport": 14, "component-inherit": 21, debug: 9, "engine.io-parser": 22, parseqs: 30, xmlhttprequest: 20 }], 19: [function (n, t) {
        function i(n) {
            var t = n && n.forceBase64;
            t && (this.supportsBinary = !1);
            r.call(this, n);
        }
        var r = n("../transport"), f = n("engine.io-parser"), e = n("parseqs"), o = n("component-inherit"), s = n("debug")("engine.io-client:websocket"), u = n("ws");
        t.exports = i;
        o(i, r);
        i.prototype.name = "websocket";
        i.prototype.supportsBinary = !0;
        i.prototype.doOpen = function () {
            if (this.check()) {
                var i = this, n = this.uri(), t = { agent: this.agent };
                this.ws = new u(n, void 0, t);
                this.ws.binaryType === undefined && (this.supportsBinary = !1);
                this.ws.binaryType = "arraybuffer";
                this.addEventListeners();
            }
        };
        i.prototype.addEventListeners = function () {
            var n = this;
            this.ws.onopen = function () {
                n.onOpen();
            };
            this.ws.onclose = function () {
                n.onClose();
            };
            this.ws.onmessage = function (t) {
                n.onData(t.data);
            };
            this.ws.onerror = function (t) {
                n.onError("websocket error", t);
            };
        };
        "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (i.prototype.onData = function (n) {
            var t = this;
            setTimeout(function () {
                r.prototype.onData.call(t, n);
            }, 0);
        });
        i.prototype.write = function (n) {
            function u() {
                i.writable = !0;
                i.emit("drain");
            }
            var i = this, t, r;
            for (this.writable = !1, t = 0, r = n.length; t < r; t++)
                f.encodePacket(n[t], this.supportsBinary, function (n) {
                    try {
                        i.ws.send(n);
                    }
                    catch (t) {
                        s("websocket closed before onclose event");
                    }
                });
            setTimeout(u, 0);
        };
        i.prototype.onClose = function () {
            r.prototype.onClose.call(this);
        };
        i.prototype.doClose = function () {
            typeof this.ws != "undefined" && this.ws.close();
        };
        i.prototype.uri = function () {
            var n = this.query || {}, t = this.secure ? "wss" : "ws", i = "";
            return this.port && ("wss" == t && this.port != 443 || "ws" == t && this.port != 80) && (i = ":" + this.port), this.timestampRequests && (n[this.timestampParam] = +new Date), this.supportsBinary || (n.b64 = 1), n = e.encode(n), n.length && (n = "?" + n), t + "://" + this.hostname + i + this.path + n;
        };
        i.prototype.check = function () {
            return !!u && !("__initialize" in u && this.name === i.prototype.name);
        };
    }, { "../transport": 14, "component-inherit": 21, debug: 9, "engine.io-parser": 22, parseqs: 30, ws: 31 }], 20: [function (n, t) {
        var i = n("has-cors");
        t.exports = function (n) {
            var t = n.xdomain;
            try {
                if ("undefined" != typeof XMLHttpRequest && (!t || i))
                    return new XMLHttpRequest;
            }
            catch (r) {
            }
            if (!t)
                try {
                    return new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (r) {
                }
        };
    }, { "has-cors": 34 }], 21: [function (n, t) {
        t.exports = function (n, t) {
            var i = function () {
            };
            i.prototype = t.prototype;
            n.prototype = new i;
            n.prototype.constructor = n;
        };
    }, {}], 22: [function (n, t, i) {
        function p(n, t, r) {
            var u;
            if (!t)
                return i.encodeBase64Packet(n, r);
            var e = n.data, o = new Uint8Array(e), f = new Uint8Array(1 + e.byteLength);
            for (f[0] = s[n.type], u = 0; u < o.length; u++)
                f[u + 1] = o[u];
            return r(f.buffer);
        }
        function w(n, t, r) {
            if (!t)
                return i.encodeBase64Packet(n, r);
            var u = new FileReader;
            return u.onload = function () {
                n.data = u.result;
                i.encodePacket(n, t, r);
            }, u.readAsArrayBuffer(n.data);
        }
        function b(n, t, u) {
            var f, e;
            return t ? l ? w(n, t, u) : (f = new Uint8Array(1), f[0] = s[n.type], e = new r([f.buffer, n.data]), u(e)) : i.encodeBase64Packet(n, u);
        }
        function h(n, t, i) {
            for (var u = new Array(n.length), f = y(n.length, i), e = function (n, i, r) {
                t(i, function (t, i) {
                    u[n] = i;
                    r(t, u);
                });
            }, r = 0; r < n.length; r++)
                e(r, n[r], f);
        }
        var e = typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, a = n("./keys"), o = n("arraybuffer.slice"), v = n("base64-arraybuffer"), y = n("after"), c = n("utf8"), l = navigator.userAgent.match(/Android/i);
        i.protocol = 2;
        var s = i.packets = { open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6 }, f = a(s), u = { type: "error", data: "parser error" }, r = n("blob");
        i.encodePacket = function (n, t, i) {
            var u, f;
            return (typeof t == "function" && (i = t, t = !1), u = n.data === undefined ? undefined : n.data.buffer || n.data, e.ArrayBuffer && u instanceof ArrayBuffer) ? p(n, t, i) : r && u instanceof e.Blob ? b(n, t, i) : (f = s[n.type], undefined !== n.data && (f += c.encode(String(n.data))), i("" + f));
        };
        i.encodeBase64Packet = function (n, t) {
            var s = "b" + i.packets[n.type], f, h, o, c, u;
            if (r && n.data instanceof r)
                return f = new FileReader, f.onload = function () {
                    var n = f.result.split(",")[1];
                    t(s + n);
                }, f.readAsDataURL(n.data);
            try {
                h = String.fromCharCode.apply(null, new Uint8Array(n.data));
            }
            catch (l) {
                for (o = new Uint8Array(n.data), c = new Array(o.length), u = 0; u < o.length; u++)
                    c[u] = o[u];
                h = String.fromCharCode.apply(null, c);
            }
            return s += e.btoa(h), t(s);
        };
        i.decodePacket = function (n, t) {
            var e;
            if (typeof n == "string" || n === undefined)
                return n.charAt(0) == "b" ? i.decodeBase64Packet(n.substr(1), t) : (n = c.decode(n), e = n.charAt(0), Number(e) != e || !f[e]) ? u : n.length > 1 ? { type: f[e], data: n.substring(1) } : { type: f[e] };
            var h = new Uint8Array(n), e = h[0], s = o(n, 1);
            return r && t === "blob" && (s = new r([s])), { type: f[e], data: s };
        };
        i.decodeBase64Packet = function (n, t) {
            var u = f[n.charAt(0)], i;
            return e.ArrayBuffer ? (i = v.decode(n.substr(1)), t === "blob" && r && (i = new r([i])), { type: u, data: i }) : { type: u, data: { base64: !0, data: n.substr(1) } };
        };
        i.encodePayload = function (n, t, u) {
            function f(n) {
                return n.length + ":" + n;
            }
            function e(n, r) {
                i.encodePacket(n, t, function (n) {
                    r(null, f(n));
                });
            }
            if (typeof t == "function" && (u = t, t = null), t)
                return r && !l ? i.encodePayloadAsBlob(n, u) : i.encodePayloadAsArrayBuffer(n, u);
            if (!n.length)
                return u("0:");
            h(n, e, function (n, t) {
                return u(t.join(""));
            });
        };
        i.decodePayload = function (n, t, r) {
            var o, f, s, h, e, c, l, a;
            if (typeof n != "string")
                return i.decodePayloadAsBinary(n, t, r);
            if (typeof t == "function" && (r = t, t = null), n == "")
                return r(u, 0, 1);
            for (f = "", e = 0, c = n.length; e < c; e++)
                if (l = n.charAt(e), ":" != l)
                    f += l;
                else {
                    if ("" == f || f != (s = Number(f)) || (h = n.substr(e + 1, s), f != h.length))
                        return r(u, 0, 1);
                    if (h.length) {
                        if (o = i.decodePacket(h, t), u.type == o.type && u.data == o.data)
                            return r(u, 0, 1);
                        if (a = r(o, e + s, c), !1 === a)
                            return;
                    }
                    e += s;
                    f = "";
                }
            if (f != "")
                return r(u, 0, 1);
        };
        i.encodePayloadAsArrayBuffer = function (n, t) {
            function r(n, t) {
                i.encodePacket(n, !0, function (n) {
                    return t(null, n);
                });
            }
            if (!n.length)
                return t(new ArrayBuffer(0));
            h(n, r, function (n, i) {
                var f = i.reduce(function (n, t) {
                    var i;
                    return i = typeof t == "string" ? t.length : t.byteLength, n + i.toString().length + i + 2;
                }, 0), r = new Uint8Array(f), u = 0;
                return i.forEach(function (n) {
                    var o = typeof n == "string", f = n, e, i, t;
                    if (o) {
                        for (i = new Uint8Array(n.length), t = 0; t < n.length; t++)
                            i[t] = n.charCodeAt(t);
                        f = i.buffer;
                    }
                    for (r[u++] = o ? 0 : 1, e = f.byteLength.toString(), t = 0; t < e.length; t++)
                        r[u++] = parseInt(e[t]);
                    for (r[u++] = 255, i = new Uint8Array(f), t = 0; t < i.length; t++)
                        r[u++] = i[t];
                }), t(r.buffer);
            });
        };
        i.encodePayloadAsBlob = function (n, t) {
            function u(n, t) {
                i.encodePacket(n, !0, function (n) {
                    var f = new Uint8Array(1), e, i, s;
                    if (f[0] = 1, typeof n == "string") {
                        for (e = new Uint8Array(n.length), i = 0; i < n.length; i++)
                            e[i] = n.charCodeAt(i);
                        n = e.buffer;
                        f[0] = 0;
                    }
                    var h = n instanceof ArrayBuffer ? n.byteLength : n.size, u = h.toString(), o = new Uint8Array(u.length + 1);
                    for (i = 0; i < u.length; i++)
                        o[i] = parseInt(u[i]);
                    o[u.length] = 255;
                    r && (s = new r([f.buffer, o.buffer, n]), t(null, s));
                });
            }
            h(n, u, function (n, i) {
                return t(new r(i));
            });
        };
        i.decodePayloadAsBinary = function (n, t, r) {
            var f, h, e, l, u, a;
            for (typeof t == "function" && (r = t, t = null), f = n, h = []; f.byteLength > 0;) {
                var c = new Uint8Array(f), v = c[0] === 0, s = "";
                for (u = 1;; u++) {
                    if (c[u] == 255)
                        break;
                    s += c[u];
                }
                if (f = o(f, 2 + s.length), s = parseInt(s), e = o(f, 0, s), v)
                    try {
                        e = String.fromCharCode.apply(null, new Uint8Array(e));
                    }
                    catch (y) {
                        for (l = new Uint8Array(e), e = "", u = 0; u < l.length; u++)
                            e += String.fromCharCode(l[u]);
                    }
                h.push(e);
                f = o(f, s);
            }
            a = h.length;
            h.forEach(function (n, u) {
                r(i.decodePacket(n, t), u, a);
            });
        };
    }, { "./keys": 23, after: 24, "arraybuffer.slice": 25, "base64-arraybuffer": 26, blob: 27, utf8: 28 }], 23: [function (n, t) {
        t.exports = Object.keys || function (n) {
            var i = [], r = Object.prototype.hasOwnProperty, t;
            for (t in n)
                r.call(n, t) && i.push(t);
            return i;
        };
    }, {}], 24: [function (n, t) {
        function i(n, t, i) {
            function u(n, r) {
                if (u.count <= 0)
                    throw new Error("after called too many times");
                --u.count;
                n ? (f = !0, t(n), t = i) : u.count !== 0 || f || t(null, r);
            }
            var f = !1;
            return i = i || r, u.count = n, n === 0 ? t() : u;
        }
        function r() {
        }
        t.exports = i;
    }, {}], 25: [function (n, t) {
        t.exports = function (n, t, i) {
            var r = n.byteLength, o, f, u, e;
            if (t = t || 0, i = i || r, n.slice)
                return n.slice(t, i);
            if (t < 0 && (t += r), i < 0 && (i += r), i > r && (i = r), t >= r || t >= i || r === 0)
                return new ArrayBuffer(0);
            for (o = new Uint8Array(n), f = new Uint8Array(i - t), u = t, e = 0; u < i; u++, e++)
                f[e] = o[u];
            return f.buffer;
        };
    }, {}], 26: [function (n, t, i) {
        (function (n) {
            "use strict";
            i.encode = function (t) {
                for (var u = new Uint8Array(t), f = u.length, i = "", r = 0; r < f; r += 3)
                    i += n[u[r] >> 2], i += n[(u[r] & 3) << 4 | u[r + 1] >> 4], i += n[(u[r + 1] & 15) << 2 | u[r + 2] >> 6], i += n[u[r + 2] & 63];
                return f % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : f % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i;
            };
            i.decode = function (t) {
                var u = t.length * .75, l = t.length, i, f = 0, h, e, o, c, s, r;
                for (t[t.length - 1] === "=" && (u--, t[t.length - 2] === "=" && u--), s = new ArrayBuffer(u), r = new Uint8Array(s), i = 0; i < l; i += 4)
                    h = n.indexOf(t[i]), e = n.indexOf(t[i + 1]), o = n.indexOf(t[i + 2]), c = n.indexOf(t[i + 3]), r[f++] = h << 2 | e >> 4, r[f++] = (e & 15) << 4 | o >> 2, r[f++] = (o & 3) << 6 | c & 63;
                return s;
            };
        })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
    }, {}], 27: [function (n, t) {
        function e(n, t) {
            var i, u;
            for (t = t || {}, i = new r, u = 0; u < n.length; u++)
                i.append(n[u]);
            return t.type ? i.getBlob(t.type) : i.getBlob();
        }
        var i = typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, r = i.BlobBuilder || i.WebKitBlobBuilder || i.MSBlobBuilder || i.MozBlobBuilder, u = function () {
            try {
                var n = new Blob(["hi"]);
                return n.size == 2;
            }
            catch (t) {
                return !1;
            }
        }(), f = r && r.prototype.append && r.prototype.getBlob;
        t.exports = function () {
            return u ? i.Blob : f ? e : undefined;
        }();
    }, {}], 28: [function (t, i, r) {
        var u = typeof self != "undefined" ? self : typeof window != "undefined" ? window : {};
        (function (t) {
            function w(n) {
                for (var r = [], i = 0, f = n.length, t, u; i < f;)
                    t = n.charCodeAt(i++), t >= 55296 && t <= 56319 && i < f ? (u = n.charCodeAt(i++), (u & 64512) == 56320 ? r.push(((t & 1023) << 10) + (u & 1023) + 65536) : (r.push(t), i--)) : r.push(t);
                return r;
            }
            function d(n) {
                for (var u = n.length, r = -1, t, i = ""; ++r < u;)
                    t = n[r], t > 65535 && (t -= 65536, i += f(t >>> 10 & 1023 | 55296), t = 56320 | t & 1023), i += f(t);
                return i;
            }
            function y(n, t) {
                return f(n >> t & 63 | 128);
            }
            function g(n) {
                if ((n & 4294967168) == 0)
                    return f(n);
                var t = "";
                return (n & 4294965248) == 0 ? t = f(n >> 6 & 31 | 192) : (n & 4294901760) == 0 ? t = f(n >> 12 & 15 | 224) + y(n, 6) : (n & 4292870144) == 0 && (t = f(n >> 18 & 7 | 240), t += y(n, 12), t += y(n, 6)), t + f(n & 63 | 128);
            }
            function nt(n) {
                for (var t = w(n), f = t.length, i = -1, r, u = ""; ++i < f;)
                    r = t[i], u += g(r);
                return u;
            }
            function s() {
                if (e >= a)
                    throw Error("Invalid byte index");
                var n = l[e] & 255;
                if (e++, (n & 192) == 128)
                    return n & 63;
                throw Error("Invalid continuation byte");
            }
            function tt() {
                var t, r, u, n, i;
                if (e > a)
                    throw Error("Invalid byte index");
                if (e == a)
                    return !1;
                if (t = l[e] & 255, e++, (t & 128) == 0)
                    return t;
                if ((t & 224) == 192) {
                    if (i = s(), n = (t & 31) << 6 | i, n >= 128)
                        return n;
                    throw Error("Invalid continuation byte");
                }
                if ((t & 240) == 224) {
                    if (i = s(), r = s(), n = (t & 15) << 12 | i << 6 | r, n >= 2048)
                        return n;
                    throw Error("Invalid continuation byte");
                }
                if ((t & 248) == 240 && (i = s(), r = s(), u = s(), n = (t & 15) << 18 | i << 12 | r << 6 | u, n >= 65536 && n <= 1114111))
                    return n;
                throw Error("Invalid UTF-8 detected");
            }
            function it(n) {
                l = w(n);
                a = l.length;
                e = 0;
                for (var t = [], i; (i = tt()) !== !1;)
                    t.push(i);
                return d(t);
            }
            var c = typeof r == "object" && r, p = typeof i == "object" && i && i.exports == c && i, h = typeof u == "object" && u, f, l, a, e, o, b, k, v;
            if ((h.global === h || h.window === h) && (t = h), f = String.fromCharCode, o = { version: "2.0.0", encode: nt, decode: it }, typeof n == "function" && typeof n.amd == "object" && n.amd)
                n(function () {
                    return o;
                });
            else if (c && !c.nodeType)
                if (p)
                    p.exports = o;
                else {
                    b = {};
                    k = b.hasOwnProperty;
                    for (v in o)
                        k.call(o, v) && (c[v] = o[v]);
                }
            else
                t.utf8 = o;
        })(this);
    }, {}], 29: [function (n, t) {
        var i = typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, r = /^[\],:{}\s]*$/, u = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, f = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, e = /(?:^|:|,)(?:\s*\[)+/g, o = /^\s+/, s = /\s+$/;
        t.exports = function (n) {
            return "string" != typeof n || !n ? null : (n = n.replace(o, "").replace(s, ""), i.JSON && JSON.parse) ? JSON.parse(n) : r.test(n.replace(u, "@").replace(f, "]").replace(e, "")) ? new Function("return " + n)() : void 0;
        };
    }, {}], 30: [function (n, t, i) {
        i.encode = function (n) {
            var t = "", i;
            for (i in n)
                n.hasOwnProperty(i) && (t.length && (t += "&"), t += encodeURIComponent(i) + "=" + encodeURIComponent(n[i]));
            return t;
        };
        i.decode = function (n) {
            for (var r = {}, u = n.split("&"), i, t = 0, f = u.length; t < f; t++)
                i = u[t].split("="), r[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
            return r;
        };
    }, {}], 31: [function (n, t) {
        function u(n, t) {
            return t ? new i(n, t) : new i(n);
        }
        var r = function () {
            return this;
        }(), i = r.WebSocket || r.MozWebSocket;
        t.exports = i ? u : null;
        i && (u.prototype = i.prototype);
    }, {}], 32: [function (n, t) {
        function u(n) {
            function t(n) {
                var u, f;
                if (!n)
                    return !1;
                if (i.Buffer && Buffer.isBuffer(n) || i.ArrayBuffer && n instanceof ArrayBuffer || i.Blob && n instanceof Blob || i.File && n instanceof File)
                    return !0;
                if (r(n)) {
                    for (u = 0; u < n.length; u++)
                        if (t(n[u]))
                            return !0;
                }
                else if (n && "object" == typeof n) {
                    n.toJSON && (n = n.toJSON());
                    for (f in n)
                        if (t(n[f]))
                            return !0;
                }
                return !1;
            }
            return t(n);
        }
        var i = typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, r = n("isarray");
        t.exports = u;
    }, { isarray: 33 }], 33: [function (n, t) {
        t.exports = Array.isArray || function (n) {
            return Object.prototype.toString.call(n) == "[object Array]";
        };
    }, {}], 34: [function (n, t) {
        var i = n("global");
        try {
            t.exports = "XMLHttpRequest" in i && "withCredentials" in new i.XMLHttpRequest;
        }
        catch (r) {
            t.exports = !1;
        }
    }, { global: 35 }], 35: [function (n, t) {
        t.exports = function () {
            return this;
        }();
    }, {}], 36: [function (n, t) {
        var i = [].indexOf;
        t.exports = function (n, t) {
            if (i)
                return n.indexOf(t);
            for (var r = 0; r < n.length; ++r)
                if (n[r] === t)
                    return r;
            return -1;
        };
    }, {}], 37: [function (n, t, i) {
        var r = Object.prototype.hasOwnProperty;
        i.keys = Object.keys || function (n) {
            var i = [], t;
            for (t in n)
                r.call(n, t) && i.push(t);
            return i;
        };
        i.values = function (n) {
            var i = [], t;
            for (t in n)
                r.call(n, t) && i.push(n[t]);
            return i;
        };
        i.merge = function (n, t) {
            for (var i in t)
                r.call(t, i) && (n[i] = t[i]);
            return n;
        };
        i.length = function (n) {
            return i.keys(n).length;
        };
        i.isEmpty = function (n) {
            return 0 == i.length(n);
        };
    }, {}], 38: [function (n, t) {
        var i = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        t.exports = function (n) {
            for (var f = i.exec(n || ""), u = {}, t = 14; t--;)
                u[r[t]] = f[t] || "";
            return u;
        };
    }, {}], 39: [function (n, t, i) {
        function f(n) {
            return r.Buffer && Buffer.isBuffer(n) || r.ArrayBuffer && n instanceof ArrayBuffer;
        }
        var r = typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, u = n("isarray");
        i.deconstructPacket = function (n) {
            function i(n) {
                var s, e, f, o;
                if (!n)
                    return n;
                if (r.Buffer && Buffer.isBuffer(n) || r.ArrayBuffer && n instanceof ArrayBuffer)
                    return s = { _placeholder: !0, num: t.length }, t.push(n), s;
                if (u(n)) {
                    for (f = new Array(n.length), e = 0; e < n.length; e++)
                        f[e] = i(n[e]);
                    return f;
                }
                if ("object" == typeof n && !(n instanceof Date)) {
                    f = {};
                    for (o in n)
                        f[o] = i(n[o]);
                    return f;
                }
                return n;
            }
            var t = [], e = n.data, f = n;
            return f.data = i(e), f.attachments = t.length, { packet: f, buffers: t };
        };
        i.reconstructPacket = function (n, t) {
            function i(n) {
                var r, f;
                if (n && n._placeholder)
                    return t[n.num];
                if (u(n)) {
                    for (r = 0; r < n.length; r++)
                        n[r] = i(n[r]);
                    return n;
                }
                if (n && "object" == typeof n) {
                    for (f in n)
                        n[f] = i(n[f]);
                    return n;
                }
                return n;
            }
            return n.data = i(n.data), n.attachments = undefined, n;
        };
        i.removeBlobs = function (n, t) {
            function e(n, s, h) {
                var l, c, a;
                if (!n)
                    return n;
                if ((r.Blob && n instanceof Blob || r.File && n instanceof File) && (o++, l = new FileReader, l.onload = function () {
                    h ? h[s] = this.result : i = this.result;
                    --o || t(i);
                }, l.readAsArrayBuffer(n)), u(n))
                    for (c = 0; c < n.length; c++)
                        e(n[c], c, n);
                else if (n && "object" == typeof n && !f(n))
                    for (a in n)
                        e(n[a], a, n);
            }
            var o = 0, i = n;
            e(i);
            o || t(i);
        };
    }, { isarray: 41 }], 40: [function (n, t, i) {
        function h() {
        }
        function c(n) {
            var t = "", r = !1;
            return t += n.type, (i.BINARY_EVENT == n.type || i.BINARY_ACK == n.type) && (t += n.attachments, t += "-"), n.nsp && "/" != n.nsp && (r = !0, t += n.nsp), null != n.id && (r && (t += ",", r = !1), t += n.id), null != n.data && (r && (t += ","), t += s.stringify(n.data)), u("encoded %j as %s", n, t), t;
        }
        function v(n, t) {
            function i(n) {
                var i = f.deconstructPacket(n), u = c(i.packet), r = i.buffers;
                r.unshift(u);
                t(r);
            }
            f.removeBlobs(n, i);
        }
        function r() {
            this.reconstructor = null;
        }
        function y(n) {
            var t = {}, r = 0, e, f;
            if (t.type = Number(n.charAt(0)), null == i.types[t.type])
                return l();
            if (i.BINARY_EVENT == t.type || i.BINARY_ACK == t.type) {
                for (t.attachments = ""; n.charAt(++r) != "-";)
                    t.attachments += n.charAt(r);
                t.attachments = Number(t.attachments);
            }
            if ("/" == n.charAt(r + 1))
                for (t.nsp = ""; ++r;) {
                    if (f = n.charAt(r), "," == f)
                        break;
                    if (t.nsp += f, r + 1 == n.length)
                        break;
                }
            else
                t.nsp = "/";
            if (e = n.charAt(r + 1), "" != e && Number(e) == e) {
                for (t.id = ""; ++r;) {
                    if (f = n.charAt(r), null == f || Number(f) != f) {
                        --r;
                        break;
                    }
                    if (t.id += n.charAt(r), r + 1 == n.length)
                        break;
                }
                t.id = Number(t.id);
            }
            if (n.charAt(++r))
                try {
                    t.data = s.parse(n.substr(r));
                }
                catch (o) {
                    return l();
                }
            return u("decoded %s as %j", n, t), t;
        }
        function e(n) {
            this.reconPack = n;
            this.buffers = [];
        }
        function l() {
            return { type: i.ERROR, data: "parser error" };
        }
        var o = typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, u = n("debug")("socket.io-parser"), s = n("json3"), p = n("isarray"), a = n("emitter"), f = n("./binary");
        i.protocol = 3;
        i.types = ["CONNECT", "DISCONNECT", "EVENT", "BINARY_EVENT", "ACK", "BINARY_ACK", "ERROR"];
        i.CONNECT = 0;
        i.DISCONNECT = 1;
        i.EVENT = 2;
        i.ACK = 3;
        i.ERROR = 4;
        i.BINARY_EVENT = 5;
        i.BINARY_ACK = 6;
        i.Encoder = h;
        h.prototype.encode = function (n, t) {
            if (u("encoding packet %j", n), i.BINARY_EVENT == n.type || i.BINARY_ACK == n.type)
                v(n, t);
            else {
                var r = c(n);
                t([r]);
            }
        };
        i.Decoder = r;
        a(r.prototype);
        r.prototype.add = function (n) {
            var t;
            if ("string" == typeof n)
                t = y(n), i.BINARY_EVENT == t.type || i.BINARY_ACK == t.type ? (this.reconstructor = new e(t), this.reconstructor.reconPack.attachments == 0 && this.emit("decoded", t)) : this.emit("decoded", t);
            else if (o.Buffer && Buffer.isBuffer(n) || o.ArrayBuffer && n instanceof ArrayBuffer || n.base64)
                if (this.reconstructor)
                    t = this.reconstructor.takeBinaryData(n), t && (this.reconstructor = null, this.emit("decoded", t));
                else
                    throw new Error("got binary data when not reconstructing a packet");
            else
                throw new Error("Unknown type: " + n);
        };
        r.prototype.destroy = function () {
            this.reconstructor && this.reconstructor.finishedReconstruction();
        };
        e.prototype.takeBinaryData = function (n) {
            if (this.buffers.push(n), this.buffers.length == this.reconPack.attachments) {
                var t = f.reconstructPacket(this.reconPack, this.buffers);
                return this.finishedReconstruction(), t;
            }
            return null;
        };
        e.prototype.finishedReconstruction = function () {
            this.reconPack = null;
            this.buffers = [];
        };
    }, { "./binary": 39, debug: 9, emitter: 10, isarray: 41, json3: 42 }], 41: [function (n, t) {
        t.exports = n(33);
    }, {}], 42: [function (t, i, r) {
        (function (t) {
            function c(n) {
                var e, i, a, t, l, u, r;
                if (c[n] !== s)
                    return c[n];
                if (n == "bug-string-char-index")
                    e = "a"[0] != "a";
                else if (n == "json")
                    e = c("json-stringify") && c("json-parse");
                else {
                    if (a = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}', n == "json-stringify") {
                        if (t = h.stringify, l = typeof t == "function" && o, l) {
                            (i = function () {
                                return 1;
                            }).toJSON = i;
                            try {
                                l = t(0) === "0" && t(new Number) === "0" && t(new String) == '""' && t(f) === s && t(s) === s && t() === s && t(i) === "1" && t([i]) == "[1]" && t([s]) == "[null]" && t(null) == "null" && t([s, f, null]) == "[null,null,null]" && t({ a: [i, !0, !1, null, "\x00\b\n\f\r\t"] }) == a && t(null, i) === "1" && t([1, 2], null, 1) == "[\n 1,\n 2\n]" && t(new Date(-864e13)) == '"-271821-04-20T00:00:00.000Z"' && t(new Date(864e13)) == '"+275760-09-13T00:00:00.000Z"' && t(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && t(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
                            }
                            catch (v) {
                                l = !1;
                            }
                        }
                        e = l;
                    }
                    if (n == "json-parse") {
                        if (u = h.parse, typeof u == "function")
                            try {
                                if (u("0") === 0 && !u(!1) && (i = u(a), r = i.a.length == 5 && i.a[0] === 1, r)) {
                                    try {
                                        r = !u('"\t"');
                                    }
                                    catch (v) {
                                    }
                                    if (r)
                                        try {
                                            r = u("01") !== 1;
                                        }
                                        catch (v) {
                                        }
                                    if (r)
                                        try {
                                            r = u("1.") !== 1;
                                        }
                                        catch (v) {
                                        }
                                }
                            }
                            catch (v) {
                                r = !1;
                            }
                        e = r;
                    }
                }
                return c[n] = !!e;
            }
            var f = {}.toString, e, y, s, ht = typeof n == "function" && n.amd, k = typeof JSON == "object" && JSON, h = typeof r == "object" && r && !r.nodeType && r, o, ut, ft;
            h && k ? (h.stringify = k.stringify, h.parse = k.parse) : h = t.JSON = k || {};
            o = new Date(-0xc782b5b800cec);
            try {
                o = o.getUTCFullYear() == -109252 && o.getUTCMonth() === 0 && o.getUTCDate() === 1 && o.getUTCHours() == 10 && o.getUTCMinutes() == 37 && o.getUTCSeconds() == 6 && o.getUTCMilliseconds() == 708;
            }
            catch (kt) {
            }
            if (!c("json")) {
                var p = "[object Function]", ct = "[object Date]", d = "[object Number]", g = "[object String]", nt = "[object Array]", lt = "[object Boolean]", w = c("bug-string-char-index");
                if (!o)
                    var l = Math.floor, at = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], b = function (n, t) {
                        return at[t] + 365 * (n - 1970) + l((n - 1969 + (t = +(t > 1))) / 4) - l((n - 1901 + t) / 100) + l((n - 1601 + t) / 400);
                    };
                if ((e = {}.hasOwnProperty) || (e = function (n) {
                    var t = {}, i;
                    return (t.__proto__ = null, t.__proto__ = { toString: 1 }, t).toString != f ? e = function (n) {
                        var t = this.__proto__, i = n in (this.__proto__ = null, this);
                        return this.__proto__ = t, i;
                    } : (i = t.constructor, e = function (n) {
                        var t = (this.constructor || i).prototype;
                        return n in this && !(n in t && this[n] === t[n]);
                    }), t = null, e.call(this, n);
                }), ut = { boolean: 1, number: 1, string: 1, undefined: 1 }, ft = function (n, t) {
                    var i = typeof n[t];
                    return i == "object" ? !!n[t] : !ut[i];
                }, y = function (n, t) {
                    var r = 0, u, i, o;
                    (u = function () {
                        this.valueOf = 0;
                    }).prototype.valueOf = 0;
                    i = new u;
                    for (o in i)
                        e.call(i, o) && r++;
                    return u = i = null, r ? y = r == 2 ? function (n, t) {
                        var r = {}, u = f.call(n) == p, i;
                        for (i in n)
                            u && i == "prototype" || e.call(r, i) || !(r[i] = 1) || !e.call(n, i) || t(i);
                    } : function (n, t) {
                        var u = f.call(n) == p, i, r;
                        for (i in n)
                            u && i == "prototype" || !e.call(n, i) || (r = i === "constructor") || t(i);
                        (r || e.call(n, i = "constructor")) && t(i);
                    } : (i = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], y = function (n, t) {
                        var u = f.call(n) == p, r, o, s = !u && typeof n.constructor != "function" && ft(n, "hasOwnProperty") ? n.hasOwnProperty : e;
                        for (r in n)
                            u && r == "prototype" || !s.call(n, r) || t(r);
                        for (o = i.length; r = i[--o]; s.call(n, r) && t(r))
                            ;
                    }), y(n, t);
                }, !c("json-stringify")) {
                    var vt = { 92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t" }, yt = "000000", a = function (n, t) {
                        return (yt + (t || 0)).slice(-n);
                    }, pt = "\\u00", et = function (n) {
                        var r = '"', t = 0, u = n.length, f = u > 10 && w, e, i;
                        for (f && (e = n.split("")); t < u; t++) {
                            i = n.charCodeAt(t);
                            switch (i) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    r += vt[i];
                                    break;
                                default:
                                    if (i < 32) {
                                        r += pt + a(2, i.toString(16));
                                        break;
                                    }
                                    r += f ? e[t] : w ? n.charAt(t) : n[t];
                            }
                        }
                        return r + '"';
                    }, it = function (n, t, i, r, u, o, h) {
                        var c, p, v, tt, w, rt, ot, st, ht, at, k, vt, ft, ut, yt, pt;
                        try {
                            c = t[n];
                        }
                        catch (wt) {
                        }
                        if (typeof c == "object" && c)
                            if (p = f.call(c), p != ct || e.call(c, "toJSON"))
                                typeof c.toJSON == "function" && (p != d && p != g && p != nt || e.call(c, "toJSON")) && (c = c.toJSON(n));
                            else if (c > -1 / 0 && c < 1 / 0) {
                                if (b) {
                                    for (w = l(c / 864e5), v = l(w / 365.2425) + 1970 - 1; b(v + 1, 0) <= w; v++)
                                        ;
                                    for (tt = l((w - b(v, 0)) / 30.42); b(v, tt + 1) <= w; tt++)
                                        ;
                                    w = 1 + w - b(v, tt);
                                    rt = (c % 864e5 + 864e5) % 864e5;
                                    ot = l(rt / 36e5) % 24;
                                    st = l(rt / 6e4) % 60;
                                    ht = l(rt / 1e3) % 60;
                                    at = rt % 1e3;
                                }
                                else
                                    v = c.getUTCFullYear(), tt = c.getUTCMonth(), w = c.getUTCDate(), ot = c.getUTCHours(), st = c.getUTCMinutes(), ht = c.getUTCSeconds(), at = c.getUTCMilliseconds();
                                c = (v <= 0 || v >= 1e4 ? (v < 0 ? "-" : "+") + a(6, v < 0 ? -v : v) : a(4, v)) + "-" + a(2, tt + 1) + "-" + a(2, w) + "T" + a(2, ot) + ":" + a(2, st) + ":" + a(2, ht) + "." + a(3, at) + "Z";
                            }
                            else
                                c = null;
                        if (i && (c = i.call(t, n, c)), c === null)
                            return "null";
                        if (p = f.call(c), p == lt)
                            return "" + c;
                        if (p == d)
                            return c > -1 / 0 && c < 1 / 0 ? "" + c : "null";
                        if (p == g)
                            return et("" + c);
                        if (typeof c == "object") {
                            for (ut = h.length; ut--;)
                                if (h[ut] === c)
                                    throw TypeError();
                            if (h.push(c), k = [], yt = o, o += u, p == nt) {
                                for (ft = 0, ut = c.length; ft < ut; ft++)
                                    vt = it(ft, c, i, r, u, o, h), k.push(vt === s ? "null" : vt);
                                pt = k.length ? u ? "[\n" + o + k.join(",\n" + o) + "\n" + yt + "]" : "[" + k.join(",") + "]" : "[]";
                            }
                            else
                                y(r || c, function (n) {
                                    var t = it(n, c, i, r, u, o, h);
                                    t !== s && k.push(et(n) + ":" + (u ? " " : "") + t);
                                }), pt = k.length ? u ? "{\n" + o + k.join(",\n" + o) + "\n" + yt + "}" : "{" + k.join(",") + "}" : "{}";
                            return h.pop(), pt;
                        }
                    };
                    h.stringify = function (n, t, i) {
                        var e, h, o, r, s, c, u;
                        if (typeof t == "function" || typeof t == "object" && t)
                            if ((r = f.call(t)) == p)
                                h = t;
                            else if (r == nt)
                                for (o = {}, s = 0, c = t.length; s < c; u = t[s++], (r = f.call(u), r == g || r == d) && (o[u] = 1))
                                    ;
                        if (i)
                            if ((r = f.call(i)) == d) {
                                if ((i -= i % 1) > 0)
                                    for (e = "", i > 10 && (i = 10); e.length < i; e += " ")
                                        ;
                            }
                            else
                                r == g && (e = i.length <= 10 ? i : i.slice(0, 10));
                        return it("", (u = {}, u[""] = n, u), h, o, e, "", []);
                    };
                }
                if (!c("json-parse")) {
                    var wt = String.fromCharCode, bt = { 92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r" }, i, tt, u = function () {
                        i = tt = null;
                        throw SyntaxError();
                    }, v = function () {
                        for (var t = tt, o = t.length, f, e, r, s, n; i < o;) {
                            n = t.charCodeAt(i);
                            switch (n) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    i++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44: return f = w ? t.charAt(i) : t[i], i++, f;
                                case 34:
                                    for (f = "@", i++; i < o;)
                                        if (n = t.charCodeAt(i), n < 32)
                                            u();
                                        else if (n == 92) {
                                            n = t.charCodeAt(++i);
                                            switch (n) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    f += bt[n];
                                                    i++;
                                                    break;
                                                case 117:
                                                    for (e = ++i, r = i + 4; i < r; i++)
                                                        n = t.charCodeAt(i), n >= 48 && n <= 57 || n >= 97 && n <= 102 || n >= 65 && n <= 70 || u();
                                                    f += wt("0x" + t.slice(e, i));
                                                    break;
                                                default: u();
                                            }
                                        }
                                        else {
                                            if (n == 34)
                                                break;
                                            for (n = t.charCodeAt(i), e = i; n >= 32 && n != 92 && n != 34;)
                                                n = t.charCodeAt(++i);
                                            f += t.slice(e, i);
                                        }
                                    if (t.charCodeAt(i) == 34)
                                        return i++, f;
                                    u();
                                default:
                                    if (e = i, n == 45 && (s = !0, n = t.charCodeAt(++i)), n >= 48 && n <= 57) {
                                        for (n == 48 && (n = t.charCodeAt(i + 1), n >= 48 && n <= 57) && u(), s = !1; i < o && (n = t.charCodeAt(i), n >= 48 && n <= 57); i++)
                                            ;
                                        if (t.charCodeAt(i) == 46) {
                                            for (r = ++i; r < o && (n = t.charCodeAt(r), n >= 48 && n <= 57); r++)
                                                ;
                                            r == i && u();
                                            i = r;
                                        }
                                        if (n = t.charCodeAt(i), n == 101 || n == 69) {
                                            for (n = t.charCodeAt(++i), (n == 43 || n == 45) && i++, r = i; r < o && (n = t.charCodeAt(r), n >= 48 && n <= 57); r++)
                                                ;
                                            r == i && u();
                                            i = r;
                                        }
                                        return +t.slice(e, i);
                                    }
                                    if (s && u(), t.slice(i, i + 4) == "true")
                                        return i += 4, !0;
                                    if (t.slice(i, i + 5) == "false")
                                        return i += 5, !1;
                                    if (t.slice(i, i + 4) == "null")
                                        return i += 4, null;
                                    u();
                            }
                        }
                        return "$";
                    }, rt = function (n) {
                        var t, i;
                        if (n == "$" && u(), typeof n == "string") {
                            if ((w ? n.charAt(0) : n[0]) == "@")
                                return n.slice(1);
                            if (n == "[") {
                                for (t = [];; i || (i = !0)) {
                                    if (n = v(), n == "]")
                                        break;
                                    i && (n == "," ? (n = v(), n == "]" && u()) : u());
                                    n == "," && u();
                                    t.push(rt(n));
                                }
                                return t;
                            }
                            if (n == "{") {
                                for (t = {};; i || (i = !0)) {
                                    if (n = v(), n == "}")
                                        break;
                                    i && (n == "," ? (n = v(), n == "}" && u()) : u());
                                    (n == "," || typeof n != "string" || (w ? n.charAt(0) : n[0]) != "@" || v() != ":") && u();
                                    t[n.slice(1)] = rt(v());
                                }
                                return t;
                            }
                            u();
                        }
                        return n;
                    }, ot = function (n, t, i) {
                        var r = st(n, t, i);
                        r === s ? delete n[t] : n[t] = r;
                    }, st = function (n, t, i) {
                        var r = n[t], u;
                        if (typeof r == "object" && r)
                            if (f.call(r) == nt)
                                for (u = r.length; u--;)
                                    ot(r, u, i);
                            else
                                y(r, function (n) {
                                    ot(r, n, i);
                                });
                        return i.call(n, t, r);
                    };
                    h.parse = function (n, t) {
                        var r, e;
                        return i = 0, tt = "" + n, r = rt(v()), v() != "$" && u(), i = tt = null, t && f.call(t) == p ? st((e = {}, e[""] = r, e), "", t) : r;
                    };
                }
            }
            ht && n(function () {
                return h;
            });
        })(this);
    }, {}], 43: [function (n, t) {
        function i(n, t) {
            var r = [], i;
            for (t = t || 0, i = t || 0; i < n.length; i++)
                r[i - t] = n[i];
            return r;
        }
        t.exports = i;
    }, {}] }, {}, [1])(1);
}), function () {
    function nt(t) {
        function r(n, i, r, u, f, e) {
            for (; f >= 0 && e > f; f += t) {
                var o = u ? u[f] : f;
                r = i(r, n[o], o, n);
            }
            return r;
        }
        return function (u, f, o, s) {
            f = e(f, s, 4);
            var h = !i(u) && n.keys(u), l = (h || u).length, c = t > 0 ? 0 : l - 1;
            return arguments.length < 3 && (o = u[h ? h[c] : c], c += t), r(u, f, o, h, c, l);
        };
    }
    function tt(n) {
        return function (i, r, f) {
            r = t(r, f);
            for (var o = u(i), e = n > 0 ? 0 : o - 1; e >= 0 && o > e; e += n)
                if (r(i[e], e, i))
                    return e;
            return -1;
        };
    }
    function it(t, i, f) {
        return function (e, o, s) {
            var c = 0, h = u(e);
            if ("number" == typeof s)
                t > 0 ? c = s >= 0 ? s : Math.max(s + h, c) : h = s >= 0 ? Math.min(s + 1, h) : s + h + 1;
            else if (f && s && h)
                return s = f(e, o), e[s] === o ? s : -1;
            if (o !== o)
                return s = i(r.call(e, c, h), n.isNaN), s >= 0 ? s + c : -1;
            for (s = t > 0 ? c : h - 1; s >= 0 && h > s; s += t)
                if (e[s] === o)
                    return s;
            return -1;
        };
    }
    function rt(t, i) {
        var u = d.length, f = t.constructor, e = n.isFunction(f) && f.prototype || v, r = "constructor";
        for (n.has(t, r) && !n.contains(i, r) && i.push(r); u--;)
            r = d[u], r in t && t[r] !== e[r] && !n.contains(i, r) && i.push(r);
    }
    var a = this, lt = a._, s = Array.prototype, v = Object.prototype, at = Function.prototype, vt = s.push, r = s.slice, o = v.toString, yt = v.hasOwnProperty, pt = Array.isArray, ut = Object.keys, y = at.bind, ft = Object.create, p = function () {
    }, n = function (t) {
        return t instanceof n ? t : this instanceof n ? void (this._wrapped = t) : new n(t);
    }, e, t, h, f, b, k, d, c, ct, l;
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = n), exports._ = n) : a._ = n;
    n.VERSION = "1.8.3";
    e = function (n, t, i) {
        if (t === void 0)
            return n;
        switch (null == i ? 3 : i) {
            case 1: return function (i) {
                return n.call(t, i);
            };
            case 2: return function (i, r) {
                return n.call(t, i, r);
            };
            case 3: return function (i, r, u) {
                return n.call(t, i, r, u);
            };
            case 4: return function (i, r, u, f) {
                return n.call(t, i, r, u, f);
            };
        }
        return function () {
            return n.apply(t, arguments);
        };
    };
    t = function (t, i, r) {
        return null == t ? n.identity : n.isFunction(t) ? e(t, i, r) : n.isObject(t) ? n.matcher(t) : n.property(t);
    };
    n.iteratee = function (n, i) {
        return t(n, i, 1 / 0);
    };
    var w = function (n, t) {
        return function (i) {
            var e = arguments.length, r, u;
            if (2 > e || null == i)
                return i;
            for (r = 1; e > r; r++)
                for (var o = arguments[r], s = n(o), h = s.length, f = 0; h > f; f++)
                    u = s[f], t && i[u] !== void 0 || (i[u] = o[u]);
            return i;
        };
    }, et = function (t) {
        if (!n.isObject(t))
            return {};
        if (ft)
            return ft(t);
        p.prototype = t;
        var i = new p;
        return p.prototype = null, i;
    }, ot = function (n) {
        return function (t) {
            if (null != t)
                return t[n];
        };
    }, wt = Math.pow(2, 53) - 1, u = ot("length"), i = function (n) {
        var t = u(n);
        return "number" == typeof t && t >= 0 && wt >= t;
    };
    n.each = n.forEach = function (t, r, u) {
        var f, o, s;
        if (r = e(r, u), i(t))
            for (f = 0, o = t.length; o > f; f++)
                r(t[f], f, t);
        else
            for (s = n.keys(t), f = 0, o = s.length; o > f; f++)
                r(t[s[f]], s[f], t);
        return t;
    };
    n.map = n.collect = function (r, u, f) {
        var s;
        u = t(u, f);
        for (var o = !i(r) && n.keys(r), h = (o || r).length, c = Array(h), e = 0; h > e; e++)
            s = o ? o[e] : e, c[e] = u(r[s], s, r);
        return c;
    };
    n.reduce = n.foldl = n.inject = nt(1);
    n.reduceRight = n.foldr = nt(-1);
    n.find = n.detect = function (t, r, u) {
        var f;
        return f = i(t) ? n.findIndex(t, r, u) : n.findKey(t, r, u), f !== void 0 && f !== -1 ? t[f] : void 0;
    };
    n.filter = n.select = function (i, r, u) {
        var f = [];
        return r = t(r, u), n.each(i, function (n, t, i) {
            r(n, t, i) && f.push(n);
        }), f;
    };
    n.reject = function (i, r, u) {
        return n.filter(i, n.negate(t(r)), u);
    };
    n.every = n.all = function (r, u, f) {
        var s;
        u = t(u, f);
        for (var o = !i(r) && n.keys(r), h = (o || r).length, e = 0; h > e; e++)
            if (s = o ? o[e] : e, !u(r[s], s, r))
                return !1;
        return !0;
    };
    n.some = n.any = function (r, u, f) {
        var s;
        u = t(u, f);
        for (var o = !i(r) && n.keys(r), h = (o || r).length, e = 0; h > e; e++)
            if (s = o ? o[e] : e, u(r[s], s, r))
                return !0;
        return !1;
    };
    n.contains = n.includes = n.include = function (t, r, u, f) {
        return i(t) || (t = n.values(t)), ("number" != typeof u || f) && (u = 0), n.indexOf(t, r, u) >= 0;
    };
    n.invoke = function (t, i) {
        var u = r.call(arguments, 2), f = n.isFunction(i);
        return n.map(t, function (n) {
            var t = f ? i : n[i];
            return null == t ? t : t.apply(n, u);
        });
    };
    n.pluck = function (t, i) {
        return n.map(t, n.property(i));
    };
    n.where = function (t, i) {
        return n.filter(t, n.matcher(i));
    };
    n.findWhere = function (t, i) {
        return n.find(t, n.matcher(i));
    };
    n.max = function (r, u, f) {
        var h, o, e = -1 / 0, c = -1 / 0, s, l;
        if (null == u && null != r)
            for (r = i(r) ? r : n.values(r), s = 0, l = r.length; l > s; s++)
                h = r[s], h > e && (e = h);
        else
            u = t(u, f), n.each(r, function (n, t, i) {
                o = u(n, t, i);
                (o > c || o === -1 / 0 && e === -1 / 0) && (e = n, c = o);
            });
        return e;
    };
    n.min = function (r, u, f) {
        var h, o, e = 1 / 0, c = 1 / 0, s, l;
        if (null == u && null != r)
            for (r = i(r) ? r : n.values(r), s = 0, l = r.length; l > s; s++)
                h = r[s], e > h && (e = h);
        else
            u = t(u, f), n.each(r, function (n, t, i) {
                o = u(n, t, i);
                (c > o || 1 / 0 === o && 1 / 0 === e) && (e = n, c = o);
            });
        return e;
    };
    n.shuffle = function (t) {
        for (var u, e = i(t) ? t : n.values(t), o = e.length, f = Array(o), r = 0; o > r; r++)
            u = n.random(0, r), u !== r && (f[r] = f[u]), f[u] = e[r];
        return f;
    };
    n.sample = function (t, r, u) {
        return null == r || u ? (i(t) || (t = n.values(t)), t[n.random(t.length - 1)]) : n.shuffle(t).slice(0, Math.max(0, r));
    };
    n.sortBy = function (i, r, u) {
        return r = t(r, u), n.pluck(n.map(i, function (n, t, i) {
            return { value: n, index: t, criteria: r(n, t, i) };
        }).sort(function (n, t) {
            var i = n.criteria, r = t.criteria;
            if (i !== r) {
                if (i > r || i === void 0)
                    return 1;
                if (r > i || r === void 0)
                    return -1;
            }
            return n.index - t.index;
        }), "value");
    };
    h = function (i) {
        return function (r, u, f) {
            var e = {};
            return u = t(u, f), n.each(r, function (n, t) {
                var f = u(n, t, r);
                i(e, n, f);
            }), e;
        };
    };
    n.groupBy = h(function (t, i, r) {
        n.has(t, r) ? t[r].push(i) : t[r] = [i];
    });
    n.indexBy = h(function (n, t, i) {
        n[i] = t;
    });
    n.countBy = h(function (t, i, r) {
        n.has(t, r) ? t[r]++ : t[r] = 1;
    });
    n.toArray = function (t) {
        return t ? n.isArray(t) ? r.call(t) : i(t) ? n.map(t, n.identity) : n.values(t) : [];
    };
    n.size = function (t) {
        return null == t ? 0 : i(t) ? t.length : n.keys(t).length;
    };
    n.partition = function (i, r, u) {
        r = t(r, u);
        var f = [], e = [];
        return n.each(i, function (n, t, i) {
            (r(n, t, i) ? f : e).push(n);
        }), [f, e];
    };
    n.first = n.head = n.take = function (t, i, r) {
        if (null != t)
            return null == i || r ? t[0] : n.initial(t, t.length - i);
    };
    n.initial = function (n, t, i) {
        return r.call(n, 0, Math.max(0, n.length - (null == t || i ? 1 : t)));
    };
    n.last = function (t, i, r) {
        if (null != t)
            return null == i || r ? t[t.length - 1] : n.rest(t, Math.max(0, t.length - i));
    };
    n.rest = n.tail = n.drop = function (n, t, i) {
        return r.call(n, null == t || i ? 1 : t);
    };
    n.compact = function (t) {
        return n.filter(t, n.identity);
    };
    f = function (t, r, e, o) {
        for (var s, l, a, h = [], v = 0, c = o || 0, y = u(t); y > c; c++)
            if (s = t[c], i(s) && (n.isArray(s) || n.isArguments(s)))
                for (r || (s = f(s, r, e)), l = 0, a = s.length, h.length += a; a > l;)
                    h[v++] = s[l++];
            else
                e || (h[v++] = s);
        return h;
    };
    n.flatten = function (n, t) {
        return f(n, t, !1);
    };
    n.without = function (t) {
        return n.difference(t, r.call(arguments, 1));
    };
    n.uniq = n.unique = function (i, r, f, e) {
        var o, c;
        n.isBoolean(r) || (e = f, f = r, r = !1);
        null != f && (f = t(f, e));
        for (var s = [], l = [], h = 0, a = u(i); a > h; h++)
            o = i[h], c = f ? f(o, h, i) : o, r ? (h && l === c || s.push(o), l = c) : f ? n.contains(l, c) || (l.push(c), s.push(o)) : n.contains(s, o) || s.push(o);
        return s;
    };
    n.union = function () {
        return n.uniq(f(arguments, !0, !0));
    };
    n.intersection = function (t) {
        for (var r, i, f = [], o = arguments.length, e = 0, s = u(t); s > e; e++)
            if (r = t[e], !n.contains(f, r)) {
                for (i = 1; o > i && n.contains(arguments[i], r); i++)
                    ;
                i === o && f.push(r);
            }
        return f;
    };
    n.difference = function (t) {
        var i = f(arguments, !0, !0, 1);
        return n.filter(t, function (t) {
            return !n.contains(i, t);
        });
    };
    n.zip = function () {
        return n.unzip(arguments);
    };
    n.unzip = function (t) {
        for (var r = t && n.max(t, u).length || 0, f = Array(r), i = 0; r > i; i++)
            f[i] = n.pluck(t, i);
        return f;
    };
    n.object = function (n, t) {
        for (var r = {}, i = 0, f = u(n); f > i; i++)
            t ? r[n[i]] = t[i] : r[n[i][0]] = n[i][1];
        return r;
    };
    n.findIndex = tt(1);
    n.findLastIndex = tt(-1);
    n.sortedIndex = function (n, i, r, f) {
        var o;
        r = t(r, f, 1);
        for (var h = r(i), e = 0, s = u(n); s > e;)
            o = Math.floor((e + s) / 2), r(n[o]) < h ? e = o + 1 : s = o;
        return e;
    };
    n.indexOf = it(1, n.findIndex, n.sortedIndex);
    n.lastIndexOf = it(-1, n.findLastIndex);
    n.range = function (n, t, i) {
        null == t && (t = n || 0, n = 0);
        i = i || 1;
        for (var u = Math.max(Math.ceil((t - n) / i), 0), f = Array(u), r = 0; u > r; r++, n += i)
            f[r] = n;
        return f;
    };
    b = function (t, i, r, u, f) {
        if (!(u instanceof i))
            return t.apply(r, f);
        var e = et(t.prototype), o = t.apply(e, f);
        return n.isObject(o) ? o : e;
    };
    n.bind = function (t, i) {
        if (y && t.bind === y)
            return y.apply(t, r.call(arguments, 1));
        if (!n.isFunction(t))
            throw new TypeError("Bind must be called on a function");
        var f = r.call(arguments, 2), u = function () {
            return b(t, u, i, this, f.concat(r.call(arguments)));
        };
        return u;
    };
    n.partial = function (t) {
        var i = r.call(arguments, 1), u = function () {
            for (var f = 0, o = i.length, e = Array(o), r = 0; o > r; r++)
                e[r] = i[r] === n ? arguments[f++] : i[r];
            for (; f < arguments.length;)
                e.push(arguments[f++]);
            return b(t, u, this, this, e);
        };
        return u;
    };
    n.bindAll = function (t) {
        var i, r, u = arguments.length;
        if (1 >= u)
            throw new Error("bindAll must be passed function names");
        for (i = 1; u > i; i++)
            r = arguments[i], t[r] = n.bind(t[r], t);
        return t;
    };
    n.memoize = function (t, i) {
        var r = function (u) {
            var f = r.cache, e = "" + (i ? i.apply(this, arguments) : u);
            return n.has(f, e) || (f[e] = t.apply(this, arguments)), f[e];
        };
        return r.cache = {}, r;
    };
    n.delay = function (n, t) {
        var i = r.call(arguments, 2);
        return setTimeout(function () {
            return n.apply(null, i);
        }, t);
    };
    n.defer = n.partial(n.delay, n, 1);
    n.throttle = function (t, i, r) {
        var f, e, s, u = null, o = 0, h;
        return r || (r = {}), h = function () {
            o = r.leading === !1 ? 0 : n.now();
            u = null;
            s = t.apply(f, e);
            u || (f = e = null);
        }, function () {
            var l = n.now(), c;
            return o || r.leading !== !1 || (o = l), c = i - (l - o), f = this, e = arguments, 0 >= c || c > i ? (u && (clearTimeout(u), u = null), o = l, s = t.apply(f, e), u || (f = e = null)) : u || r.trailing === !1 || (u = setTimeout(h, c)), s;
        };
    };
    n.debounce = function (t, i, r) {
        var u, f, e, s, o, h = function () {
            var c = n.now() - s;
            i > c && c >= 0 ? u = setTimeout(h, i - c) : (u = null, r || (o = t.apply(e, f), u || (e = f = null)));
        };
        return function () {
            e = this;
            f = arguments;
            s = n.now();
            var c = r && !u;
            return u || (u = setTimeout(h, i)), c && (o = t.apply(e, f), e = f = null), o;
        };
    };
    n.wrap = function (t, i) {
        return n.partial(i, t);
    };
    n.negate = function (n) {
        return function () {
            return !n.apply(this, arguments);
        };
    };
    n.compose = function () {
        var n = arguments, t = n.length - 1;
        return function () {
            for (var r = t, i = n[t].apply(this, arguments); r--;)
                i = n[r].call(this, i);
            return i;
        };
    };
    n.after = function (n, t) {
        return function () {
            if (--n < 1)
                return t.apply(this, arguments);
        };
    };
    n.before = function (n, t) {
        var i;
        return function () {
            return --n > 0 && (i = t.apply(this, arguments)), 1 >= n && (t = null), i;
        };
    };
    n.once = n.partial(n.before, 2);
    k = !{ toString: null }.propertyIsEnumerable("toString");
    d = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    n.keys = function (t) {
        var i, r;
        if (!n.isObject(t))
            return [];
        if (ut)
            return ut(t);
        i = [];
        for (r in t)
            n.has(t, r) && i.push(r);
        return k && rt(t, i), i;
    };
    n.allKeys = function (t) {
        var i, r;
        if (!n.isObject(t))
            return [];
        i = [];
        for (r in t)
            i.push(r);
        return k && rt(t, i), i;
    };
    n.values = function (t) {
        for (var r = n.keys(t), u = r.length, f = Array(u), i = 0; u > i; i++)
            f[i] = t[r[i]];
        return f;
    };
    n.mapObject = function (i, r, u) {
        r = t(r, u);
        for (var f, o = n.keys(i), h = o.length, s = {}, e = 0; h > e; e++)
            f = o[e], s[f] = r(i[f], f, i);
        return s;
    };
    n.pairs = function (t) {
        for (var r = n.keys(t), u = r.length, f = Array(u), i = 0; u > i; i++)
            f[i] = [r[i], t[r[i]]];
        return f;
    };
    n.invert = function (t) {
        for (var u = {}, r = n.keys(t), i = 0, f = r.length; f > i; i++)
            u[t[r[i]]] = r[i];
        return u;
    };
    n.functions = n.methods = function (t) {
        var r = [], i;
        for (i in t)
            n.isFunction(t[i]) && r.push(i);
        return r.sort();
    };
    n.extend = w(n.allKeys);
    n.extendOwn = n.assign = w(n.keys);
    n.findKey = function (i, r, u) {
        r = t(r, u);
        for (var f, o = n.keys(i), e = 0, s = o.length; s > e; e++)
            if (f = o[e], r(i[f], f, i))
                return f;
    };
    n.pick = function (t, i, r) {
        var c, o, l = {}, u = t, s, v, h, a;
        if (null == u)
            return l;
        for (n.isFunction(i) ? (o = n.allKeys(u), c = e(i, r)) : (o = f(arguments, !1, !1, 1), c = function (n, t, i) {
            return t in i;
        }, u = Object(u)), s = 0, v = o.length; v > s; s++)
            h = o[s], a = u[h], c(a, h, u) && (l[h] = a);
        return l;
    };
    n.omit = function (t, i, r) {
        if (n.isFunction(i))
            i = n.negate(i);
        else {
            var u = n.map(f(arguments, !1, !1, 1), String);
            i = function (t, i) {
                return !n.contains(u, i);
            };
        }
        return n.pick(t, i, r);
    };
    n.defaults = w(n.allKeys, !0);
    n.create = function (t, i) {
        var r = et(t);
        return i && n.extendOwn(r, i), r;
    };
    n.clone = function (t) {
        return n.isObject(t) ? n.isArray(t) ? t.slice() : n.extend({}, t) : t;
    };
    n.tap = function (n, t) {
        return t(n), n;
    };
    n.isMatch = function (t, i) {
        var e = n.keys(i), o = e.length, f, r, u;
        if (null == t)
            return !o;
        for (f = Object(t), r = 0; o > r; r++)
            if (u = e[r], i[u] !== f[u] || !(u in f))
                return !1;
        return !0;
    };
    c = function (t, i, r, u) {
        var h, a, e, s, f, l, v;
        if (t === i)
            return 0 !== t || 1 / t == 1 / i;
        if (null == t || null == i)
            return t === i;
        if (t instanceof n && (t = t._wrapped), i instanceof n && (i = i._wrapped), h = o.call(t), h !== o.call(i))
            return !1;
        switch (h) {
            case "[object RegExp]":
            case "[object String]": return "" + t == "" + i;
            case "[object Number]": return +t != +t ? +i != +i : 0 == +t ? 1 / +t == 1 / i : +t == +i;
            case "[object Date]":
            case "[object Boolean]": return +t == +i;
        }
        if (a = "[object Array]" === h, !a && ("object" != typeof t || "object" != typeof i || (e = t.constructor, s = i.constructor, e !== s && !(n.isFunction(e) && e instanceof e && n.isFunction(s) && s instanceof s) && "constructor" in t && "constructor" in i)))
            return !1;
        for (r = r || [], u = u || [], f = r.length; f--;)
            if (r[f] === t)
                return u[f] === i;
        if (r.push(t), u.push(i), a) {
            if (f = t.length, f !== i.length)
                return !1;
            for (; f--;)
                if (!c(t[f], i[f], r, u))
                    return !1;
        }
        else {
            if (v = n.keys(t), f = v.length, n.keys(i).length !== f)
                return !1;
            for (; f--;)
                if (l = v[f], !n.has(i, l) || !c(t[l], i[l], r, u))
                    return !1;
        }
        return r.pop(), u.pop(), !0;
    };
    n.isEqual = function (n, t) {
        return c(n, t);
    };
    n.isEmpty = function (t) {
        return null == t ? !0 : i(t) && (n.isArray(t) || n.isString(t) || n.isArguments(t)) ? 0 === t.length : 0 === n.keys(t).length;
    };
    n.isElement = function (n) {
        return !(!n || 1 !== n.nodeType);
    };
    n.isArray = pt || function (n) {
        return "[object Array]" === o.call(n);
    };
    n.isObject = function (n) {
        var t = typeof n;
        return "function" === t || "object" === t && !!n;
    };
    n.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (t) {
        n["is" + t] = function (n) {
            return o.call(n) === "[object " + t + "]";
        };
    });
    n.isArguments(arguments) || (n.isArguments = function (t) {
        return n.has(t, "callee");
    });
    "function" != typeof /./ && "object" != typeof Int8Array && (n.isFunction = function (n) {
        return "function" == typeof n || !1;
    });
    n.isFinite = function (n) {
        return isFinite(n) && !isNaN(parseFloat(n));
    };
    n.isNaN = function (t) {
        return n.isNumber(t) && t !== +t;
    };
    n.isBoolean = function (n) {
        return n === !0 || n === !1 || "[object Boolean]" === o.call(n);
    };
    n.isNull = function (n) {
        return null === n;
    };
    n.isUndefined = function (n) {
        return n === void 0;
    };
    n.has = function (n, t) {
        return null != n && yt.call(n, t);
    };
    n.noConflict = function () {
        return a._ = lt, this;
    };
    n.identity = function (n) {
        return n;
    };
    n.constant = function (n) {
        return function () {
            return n;
        };
    };
    n.noop = function () {
    };
    n.property = ot;
    n.propertyOf = function (n) {
        return null == n ? function () {
        } : function (t) {
            return n[t];
        };
    };
    n.matcher = n.matches = function (t) {
        return t = n.extendOwn({}, t), function (i) {
            return n.isMatch(i, t);
        };
    };
    n.times = function (n, t, i) {
        var u = Array(Math.max(0, n)), r;
        for (t = e(t, i, 1), r = 0; n > r; r++)
            u[r] = t(r);
        return u;
    };
    n.random = function (n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1));
    };
    n.now = Date.now || function () {
        return (new Date).getTime();
    };
    var st = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }, bt = n.invert(st), ht = function (t) {
        var r = function (n) {
            return t[n];
        }, i = "(?:" + n.keys(t).join("|") + ")", u = RegExp(i), f = RegExp(i, "g");
        return function (n) {
            return n = null == n ? "" : "" + n, u.test(n) ? n.replace(f, r) : n;
        };
    };
    n.escape = ht(st);
    n.unescape = ht(bt);
    n.result = function (t, i, r) {
        var u = null == t ? void 0 : t[i];
        return u === void 0 && (u = r), n.isFunction(u) ? u.call(t) : u;
    };
    ct = 0;
    n.uniqueId = function (n) {
        var t = ++ct + "";
        return n ? n + t : t;
    };
    n.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };
    var g = /(.)^/, kt = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" }, dt = /\\|'|\r|\n|\u2028|\u2029/g, gt = function (n) {
        return "\\" + kt[n];
    };
    n.template = function (t, i, r) {
        var o, f, h;
        !i && r && (i = r);
        i = n.defaults({}, i, n.templateSettings);
        var c = RegExp([(i.escape || g).source, (i.interpolate || g).source, (i.evaluate || g).source].join("|") + "|$", "g"), e = 0, u = "__p+='";
        t.replace(c, function (n, i, r, f, o) {
            return u += t.slice(e, o).replace(dt, gt), e = o + n.length, i ? u += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : r ? u += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : f && (u += "';\n" + f + "\n__p+='"), n;
        });
        u += "';\n";
        i.variable || (u = "with(obj||{}){\n" + u + "}\n");
        u = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + u + "return __p;\n";
        try {
            o = new Function(i.variable || "obj", "_", u);
        }
        catch (s) {
            throw s.source = u, s;
        }
        return f = function (t) {
            return o.call(this, t, n);
        }, h = i.variable || "obj", f.source = "function(" + h + "){\n" + u + "}", f;
    };
    n.chain = function (t) {
        var i = n(t);
        return i._chain = !0, i;
    };
    l = function (t, i) {
        return t._chain ? n(i).chain() : i;
    };
    n.mixin = function (t) {
        n.each(n.functions(t), function (i) {
            var r = n[i] = t[i];
            n.prototype[i] = function () {
                var t = [this._wrapped];
                return vt.apply(t, arguments), l(this, r.apply(n, t));
            };
        });
    };
    n.mixin(n);
    n.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
        var i = s[t];
        n.prototype[t] = function () {
            var n = this._wrapped;
            return i.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], l(this, n);
        };
    });
    n.each(["concat", "join", "slice"], function (t) {
        var i = s[t];
        n.prototype[t] = function () {
            return l(this, i.apply(this._wrapped, arguments));
        };
    });
    n.prototype.value = function () {
        return this._wrapped;
    };
    n.prototype.valueOf = n.prototype.toJSON = n.prototype.value;
    n.prototype.toString = function () {
        return "" + this._wrapped;
    };
    "function" == typeof define && define.amd && define("underscore", [], function () {
        return n;
    });
}.call(this);
saveAs = saveAs || "undefined" != typeof navigator && navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator) || function (n) {
    "use strict";
    if ("undefined" == typeof navigator || !/MSIE [1-9]\./.test(navigator.userAgent)) {
        var s = n.document, r = function () {
            return n.URL || n.webkitURL || n;
        }, i = s.createElementNS("http://www.w3.org/1999/xhtml", "a"), a = "download" in i, v = function (t) {
            var i = s.createEvent("MouseEvents");
            i.initMouseEvent("click", !0, !1, n, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
            t.dispatchEvent(i);
        }, u = n.webkitRequestFileSystem, h = n.requestFileSystem || u || n.mozRequestFileSystem, y = function (t) {
            (n.setImmediate || n.setTimeout)(function () {
                throw t;
            }, 0);
        }, f = "application/octet-stream", c = 0, p = 500, e = function (t) {
            var i = function () {
                "string" == typeof t ? r().revokeObjectURL(t) : t.remove();
            };
            n.chrome ? i() : setTimeout(i, p);
        }, o = function (n, t, i) {
            var r, u;
            for (t = [].concat(t), r = t.length; r--;)
                if (u = n["on" + t[r]], "function" == typeof u)
                    try {
                        u.call(n, i || n);
                    }
                    catch (f) {
                        y(f);
                    }
        }, l = function (t, s) {
            var y, b, d, l = this, k = t.type, g = !1, nt = function () {
                o(l, "writestart progress write writeend".split(" "));
            }, p = function () {
                if ((g || !y) && (y = r().createObjectURL(t)), b)
                    b.location.href = y;
                else {
                    var i = n.open(y, "_blank");
                    void 0 == i && "undefined" != typeof safari && (n.location.href = y);
                }
                l.readyState = l.DONE;
                nt();
                e(y);
            }, w = function (n) {
                return function () {
                    if (l.readyState !== l.DONE)
                        return n.apply(this, arguments);
                };
            }, tt = { create: !0, exclusive: !1 };
            return l.readyState = l.INIT, s || (s = "download"), a ? (y = r().createObjectURL(t), i.href = y, i.download = s, v(i), l.readyState = l.DONE, nt(), void e(y)) : (/^\s*(?:text\/(?:plain|xml)|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) && (t = new Blob(["﻿", t], { type: t.type })), n.chrome && k && k !== f && (d = t.slice || t.webkitSlice, t = d.call(t, 0, t.size, f), g = !0), u && "download" !== s && (s += ".download"), (k === f || u) && (b = n), h ? (c += t.size, void h(n.TEMPORARY, c, w(function (n) {
                n.root.getDirectory("saved", tt, w(function (n) {
                    var i = function () {
                        n.getFile(s, tt, w(function (n) {
                            n.createWriter(w(function (i) {
                                i.onwriteend = function (t) {
                                    b.location.href = n.toURL();
                                    l.readyState = l.DONE;
                                    o(l, "writeend", t);
                                    e(n);
                                };
                                i.onerror = function () {
                                    var n = i.error;
                                    n.code !== n.ABORT_ERR && p();
                                };
                                "writestart progress write abort".split(" ").forEach(function (n) {
                                    i["on" + n] = l["on" + n];
                                });
                                i.write(t);
                                l.abort = function () {
                                    i.abort();
                                    l.readyState = l.DONE;
                                };
                                l.readyState = l.WRITING;
                            }), p);
                        }), p);
                    };
                    n.getFile(s, { create: !1 }, w(function (n) {
                        n.remove();
                        i();
                    }), w(function (n) {
                        n.code === n.NOT_FOUND_ERR ? i() : p();
                    }));
                }), p);
            }), p)) : void p());
        }, t = l.prototype, w = function (n, t) {
            return new l(n, t);
        };
        return t.abort = function () {
            var n = this;
            n.readyState = n.DONE;
            o(n, "abort");
        }, t.readyState = t.INIT = 0, t.WRITING = 1, t.DONE = 2, t.error = t.onwritestart = t.onprogress = t.onwrite = t.onabort = t.onerror = t.onwriteend = null, w;
    }
}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
"undefined" != typeof module && module.exports ? module.exports.saveAs = saveAs : "undefined" != typeof define && null !== define && null != define.amd && define([], function () {
    return saveAs;
}), function (n) {
    function e(n) {
        return n.replace(/(^\s*)|(\s*$)/g, "");
    }
    function o() {
        var n = document.getElementById("LastNameEmptyErrDiv"), t = document.getElementById("LastNameLengthErrDiv");
        return e(r.value) == "" ? (n.style.display = "block", !1) : (n.style.display = "none", r.value.replace(f, "**").length > 50) ? (t.style.display = "block", !1) : (t.style.display = "none", !0);
    }
    function s() {
        var n = document.getElementById("FirstNameEmptyErrDiv"), t = document.getElementById("FirstNameLengthErrDiv");
        return e(u.value) == "" ? (n.style.display = "block", !1) : (n.style.display = "none", u.value.replace(f, "**").length > 50) ? (t.style.display = "block", !1) : (t.style.display = "none", !0);
    }
    function h() {
        var n = document.getElementById("TelEmptyErrDiv"), i = document.getElementById("TelLengthErrDiv"), r = document.getElementById("TelFormatErrDiv");
        if (e(t.value) == "")
            return n.style.display = "block", !1;
        if (n.style.display = "none", t.value.replace(f, "**").length > 32)
            return i.style.display = "block", !1;
        if (i.style.display = "none", l.test(t.value))
            r.style.display = "none";
        else
            return r.style.display = "block", !1;
        return !0;
    }
    function c() {
        var n = document.getElementById("emailEmptyErrDiv"), t = document.getElementById("emailLengthErrDiv"), r = document.getElementById("emailFormatErrDiv");
        if (e(i.value) == "")
            return n.style.display = "block", !1;
        if (n.style.display = "none", i.value.replace(f, "**").length > 64)
            return t.style.display = "block", !1;
        if (t.style.display = "none", a.test(i.value))
            r.style.display = "none";
        else
            return r.style.display = "block", !1;
        return !0;
    }
    function v() {
        return o() == !1 ? (r.scrollIntoView(), !1) : s() == !1 ? (u.scrollIntoView(), !1) : h() == !1 ? (t.scrollIntoView(), !1) : c() == !1 ? (i.scrollIntoView(), !1) : !0;
    }
    var f = /[^\x00-\xff]|[\n]/g, l = /^([0-9]|-){3,}$/, a = /^([a-zA-Z0-9]+[-_.])*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-_.])*[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/, r = null, u = null, t = null, i = null;
    n(document).ready(function () {
        if (document.getElementById("ApplyForTrialsForm") != null) {
            r = document.getElementById("LastName");
            u = document.getElementById("FirstName");
            t = document.getElementById("Telephone");
            i = document.getElementById("Email");
            r.onblur = o;
            u.onblur = s;
            t.onblur = h;
            i.onblur = c;
            var n = document.getElementById("ApplyForTrialsForm");
            n.onsubmit = v;
        }
    });
}(jQuery);
CalculatorUIRenderer = { AddService: function (n) {
    var u = CalculatorData.Services[n], s, d, g, l, v, nt, f, o, p, y, a, tt, it, r, h, e, c, rt;
    if (u != undefined)
        if (s = $("<div class='service' data-service='" + n + "'>"), $("#calculator").append(s), d = CalTempFactory_Name(u.Name), s.append(d), u.IsDescription == !0)
            g = CalTempFactory_Support({ Descriptions: u.Descriptions }), s.append(g), CalculatorUIRenderer.RenderFree(s);
        else {
            if (l = u.Types, l.length > 1) {
                for (v = [], f = 0; f < l.length; f++)
                    v[f] = {}, v[f].Type = l[f].Name, v[f].Service = u.Name;
                nt = CalTempFactory_Type({ Type: v });
                s.append(nt);
            }
            for (f = 0; f < l.length; f++)
                for (o = l[f], p = 0; p < o.Features.length; p++) {
                    var t = o.Features[p], w = StringFormat(u.Name), b = StringFormat(o.Name), k = StringFormat(t.Name), i = w + "_" + b + "_" + k + "_feature";
                    f == 0 ? s.append($("<div class='feature' id='" + i + "' data-service='" + w + "' data-type='" + b + "' data-feature='" + k + "'>")) : s.append($("<div class='feature inactive' id='" + i + "' data-service='" + w + "' data-type='" + b + "' data-feature='" + k + "'>"));
                    y = t.Sizes;
                    y.length > 1 ? (a = {}, a.Service = u.Name, a.Type = o.Name, a.Feature = t.Name, a.Sizes = y, tt = CalTempFactory_Size(a), $("#" + i).append(tt), $("#" + i).addClass("multi_sizes_feature"), CalculatorUIRenderer.RenderCounter(u.Name, o.Name, t.Name, t.PriceUnit, t.MinUnit, t.MaxUnit, $("#" + i)), CalculatorUIRenderer.RenderPrice(t.PricePeriod, $("#" + i), y[0].PricePerTier), it = CalTempFactory_Prompt(), $("#" + i).append(it)) : (r = y[0], r.PriceTier == PriceTierEnum.Free ? (CalculatorUIRenderer.RenderDescription(r.Description, 0, $("#" + i)), CalculatorUIRenderer.RenderFree($("#" + i)), $("#" + i).addClass("free_feature")) : r.PriceTier == PriceTierEnum.Fixed ? (CalculatorUIRenderer.RenderDescription(r.Description, r.PricePerTier, $("#" + i)), CalculatorUIRenderer.RenderCounter(u.Name, o.Name, t.Name, t.PriceUnit, t.MinUnit, t.MaxUnit, $("#" + i)), $("#" + i).addClass("fixed_feature")) : n == "database-web-and-business" ? (h = {}, h.Service = u.Name, h.Type = o.Name, h.Feature = t.Name, h.Percentage = .1, h.price = r.price, c = CalTempFactory_Slider_SqlDatabase(h), $("#" + i).append(c.rootNode), c.renderFunc(), CalculatorUIRenderer.RenderCounter(u.Name, o.Name, t.Name, t.PriceUnit, t.MinUnit, t.MaxUnit, $("#" + i)), $("#" + i).addClass("database_feature")) : (e = {}, e.Service = u.Name, e.Type = o.Name, e.Feature = t.Name, e.Name = r.Name, e.Description = r.Description, e.PriceTier = r.PriceTier, e.PricePerTier = r.PricePerTier, e.PriceUnit = r.PriceUnit, e.MinUnit = r.MinUnit, e.MaxUnit = r.MaxUnit, c = CalTempFactory_Slider(e), rt = c.rootNode, $("#" + i).append(rt), c.renderFunc(), CalculatorUIRenderer.RenderCounter(u.Name, o.Name, t.Name, t.PriceUnit, t.MinUnit, t.MaxUnit, $("#" + i)), $("#" + i).addClass("slider_feature")), r.PriceTier != PriceTierEnum.Free && CalculatorUIRenderer.RenderPrice(t.PricePeriod, $("#" + i), r.PricePerTier));
                }
        }
}, PostProcess: function () {
    $(".type").click(function () {
        var n = $(this).data("service"), t = $(this).data("type");
        $(".feature[data-service='" + n + "']").addClass("inactive");
        $(".feature[data-service='" + n + "'][data-type='" + t + "']").removeClass("inactive");
    });
    $(".cal_temp_size input").change(function () {
        var t = $(this).closest(".feature"), n = {};
        n.ServiceName = t.data("service");
        n.TypeName = t.data("type");
        n.FeatureName = t.data("feature");
        n.SizeName = $(this).closest(".size").data("size");
        CalculatorUIRenderer.UpdateByUIChange_Size(n);
    });
    $(document).on("datachange.sidebar.calculator", function (n, t) {
        var r, f, u, i;
        if (localStorage.CalculatorList != undefined) {
            if (r = JSON.parse(localStorage.CalculatorList), f = [], t == "all") {
                for (u in r)
                    i = {}, i.ServiceName = r[u].ServiceName, i.TypeName = r[u].TypeName, i.FeatureName = r[u].FeatureName, i.SizeName = r[u].SizeName, i.Count = 0, i.SliderValue = 0, i.Unit = r[u].Unit, f.push(i);
                localStorage.removeItem("CalculatorList");
            }
            else
                i = {}, i.ServiceName = r[t].ServiceName, i.TypeName = r[t].TypeName, i.FeatureName = r[t].FeatureName, i.SizeName = r[t].SizeName, i.Count = 0, i.SliderValue = 0, i.Unit = r[t].Unit, f.push(i), delete r[t], localStorage.CalculatorList = JSON.stringify(r);
            f.length != 0 && CalculatorUIRenderer.UpdateByDataChange(f);
        }
    });
    if (localStorage.CalculatorList != undefined) {
        var n = JSON.parse(localStorage.CalculatorList), t = [];
        for (key in n)
            t.push(n[key]), $(document).trigger("CalculatorUIRenderer.AddToSideBar", key);
        this.UpdateByDataChange(t);
    }
}, RenderPrice: function (n, t, i) {
    var u, e, f, r;
    n == PricePeriodEnum.Hourly ? (u = $("<div class='hourly-price-temp'>"), t.append(u), r = CalTempFactory_TotalPrice(), u.append(r), e = CalTempFactory_PriceHourly({ UnitPrice: i }), u.append(e)) : n == PricePeriodEnum.Monthly && (f = $("<div class='monthly-price-temp'>"), t.append(f), r = CalTempFactory_TotalPrice(), f.append(r));
}, RenderDescription: function (n, t, i) {
    var r = CalTempFactory_NoConf({ Description: n, Price: t });
    i.append(r);
}, RenderFree: function (n) {
    var t = CalTempFactory_Free();
    n.append(t);
}, RenderCounter: function (n, t, i, r, u, f, e) {
    var o = {}, s;
    o.Service = n;
    o.Type = t;
    o.Feature = i;
    o.PriceUnit = r;
    o.MinUnit = u;
    o.MaxUnit = f;
    s = CalTempFactory_Count(o);
    e.append(s);
}, GetAndUpdateTotalPrice: function (n, t, i) {
    var r;
    return n.find(".cal_temp_priceHourly").length != 0 ? (r = (parseInt(i) * parseFloat(t) * CalculatorConst.HoursOneMonth).toFixed(2), n.find(".cal_temp_priceHourly .num").text(parseFloat(t).toFixed(2)), n.find(".cal_temp_totalPrice .num").text(r)) : (r = (parseInt(i) * parseFloat(t)).toFixed(2), n.find(".cal_temp_totalPrice .num").text(r)), r;
}, UpdateByDataChange: function (n) {
    for (var r = 0; r < n.length; r++) {
        var i = n[r], e = StringFormat(i.ServiceName), o = StringFormat(i.TypeName), s = StringFormat(i.FeatureName), h = StringFormat(i.SizeName), c = e + "_" + o + "_" + s + "_feature", t = $("#" + c), u, f;
        t.find(".cal_temp_noConf").length != 0 ? (u = t.find(".cal_temp_noConf").data("price"), t.find(".cal_temp_count .digit").val(i.Count), f = i.Count) : t.find(".cal_temp_size").length != 0 ? (u = t.find(".cal_temp_size input:checked").data("price-per-tier"), t.find(".cal_temp_size .size[data-size=" + h + "] input").data("count", i.Count), t.find(".cal_temp_size input:checked").closest(".size").data("size") == StringFormat(i.SizeName) && t.find(".cal_temp_count .digit").val(i.Count), f = t.find(".cal_temp_size input:checked").data("count")) : t.find(".cal_temp_slider").length != 0 && (t.find(".cal_temp_slider .input").val(i.SliderValue), t.find(".cal_temp_slider .input").trigger("keyup"), t.find(".cal_temp_slider .input").trigger("change"), u = t.find(".cal_temp_slider").attr("data-total-price"), t.find(".cal_temp_count .digit").val(i.Count), f = i.Count);
        this.GetAndUpdateTotalPrice(t, u, f);
    }
}, UpdateByUIChange_Count: function (n) {
    var s = n.ServiceName + "_" + n.TypeName + "_" + n.FeatureName + "_feature", t = $("#" + s), i, r, f, u, e, o;
    t.find(".cal_temp_noConf").length != 0 ? i = t.find(".cal_temp_noConf").data("price") : t.find(".cal_temp_size").length != 0 ? (i = t.find(".cal_temp_size input:checked").data("price-per-tier"), t.find(".cal_temp_size  input:checked").data("count", n.Count), localStorage.CalculatoPrompt == undefined || JSON.parse(localStorage.CalculatoPrompt) != !0 ? (t.find(".cal_temp_prompt").removeClass("inactive"), t.find(".cal_temp_prompt").css({ display: "block" }), localStorage.CalculatoPrompt = JSON.stringify(!0)) : t.find(".cal_temp_prompt").addClass("inactive")) : t.find(".cal_temp_slider").length != 0 && (i = t.find(".cal_temp_slider").attr("data-total-price"), f = t.find(".cal_temp_slider .input").val());
    r = n.Count;
    u = !1;
    t.find(".cal_temp_priceHourly").length != 0 && (u = !0);
    e = t.find(".cal_temp_count .unit").text();
    o = this.GetAndUpdateTotalPrice(t, i, r);
    this.UpdateLocalStorage(n.ServiceName, n.TypeName, n.FeatureName, n.SizeName, e, r, o, u, f);
}, UpdateByUIChange_Size: function (n) {
    var e = n.ServiceName + "_" + n.TypeName + "_" + n.FeatureName + "_feature", t = $("#" + e), o = t.find(".cal_temp_size input:checked").data("price-per-tier"), i = t.find(".cal_temp_size input:checked").data("count"), r, u, f;
    t.find(".cal_temp_count .digit").val(i);
    localStorage.CalculatoPrompt == undefined || JSON.parse(localStorage.CalculatoPrompt) != !0 ? (t.find(".cal_temp_prompt").css({ display: "block" }), localStorage.CalculatoPrompt = JSON.stringify(!0)) : t.find(".cal_temp_prompt").css({ display: "none" });
    r = !1;
    t.find(".cal_temp_priceHourly").length != 0 && (r = !0);
    u = this.GetAndUpdateTotalPrice(t, o, i);
    f = t.find(".cal_temp_count .unit").text();
    this.UpdateLocalStorage(n.ServiceName, n.TypeName, n.FeatureName, n.SizeName, f, i, u, r, undefined);
}, UpdateByUIChange_Slider: function (n) {
    var e = n.ServiceName + "_" + n.TypeName + "_" + n.FeatureName + "_feature", t = $("#" + e), o = t.find(".cal_temp_slider").attr("data-total-price"), i = t.find(".cal_temp_count .digit").val(), s = t.find(".cal_temp_slider .input").val(), r = !1, u, f;
    t.find(".cal_temp_priceHourly").length != 0 && (r = !0);
    u = this.GetAndUpdateTotalPrice(t, o, i);
    i != 0 && (f = t.find(".cal_temp_count .unit").text(), this.UpdateLocalStorage(n.ServiceName, n.TypeName, n.FeatureName, n.SizeName, f, i, u, r, s));
}, UpdateLocalStorage: function (n, t, i, r, u, f, e, o, s) {
    var c = StringFormat(n) + "_" + StringFormat(t) + "_" + StringFormat(i) + "_" + StringFormat(r), h;
    localStorage.CalculatorList != undefined ? (h = JSON.parse(localStorage.CalculatorList), h[c] != undefined ? (e == "0.00" ? delete h[c] : (h[c].Count = f, h[c].TotalPrice = e, h[c].IsHourly = o, h[c].SliderValue = s, h[c].Unit = u), localStorage.CalculatorList = JSON.stringify(h), $(document).trigger("CalculatorUIRenderer.AddToSideBar", c)) : e != "0.00" && (h[c] = {}, h[c].Count = f, h[c].TotalPrice = e, h[c].SliderValue = s, h[c].ServiceName = n, h[c].TypeName = t, h[c].FeatureName = i, h[c].SizeName = r, h[c].IsHourly = o, h[c].Unit = u, localStorage.CalculatorList = JSON.stringify(h), $(document).trigger("CalculatorUIRenderer.AddToSideBar", c))) : e != "0.00" && (h = {}, h[c] = {}, h[c].Count = f, h[c].TotalPrice = e, h[c].SliderValue = s, h[c].ServiceName = n, h[c].TypeName = t, h[c].FeatureName = i, h[c].SizeName = r, h[c].IsHourly = o, h[c].Unit = u, localStorage.CalculatorList = JSON.stringify(h), $(document).trigger("CalculatorUIRenderer.AddToSideBar", c));
} }, function (n) {
    n(function () {
        if (!Modernizr.input.placeholder) {
            n(":input[placeholder]").each(function () {
                var t = n(this);
                t.val() === "" && t.val(t.attr("placeholder")).addClass("placeholderd");
            }).on("focus", function () {
                var t = n(this);
                t.val() === t.attr("placeholder") && t.val("").removeClass("placeholderd");
            }).on("blur", function () {
                var t = n(this);
                t.val() === "" && t.val(t.attr("placeholder")).addClass("placeholderd");
            });
            n("form").on("submit", function () {
                n(":input[placeholder].placeholderd").val("");
            });
        }
    });
}(jQuery), function (n) {
    n(function () {
        var r = function () {
            n(".locale-selector").find(".site-flag").fadeIn(200);
        }, i = function () {
            n(".locale-selector").find(".site-flag").fadeOut(200);
        }, t = n(".locale-selector");
        t.css("position", "relative").find(".current-locale").click(function (t) {
            var u;
            t.preventDefault();
            t.stopPropagation();
            var f = n(this), o = f.data("panel"), e = function (t) {
                (t.keyCode || t.which) === 27 && (i(), f = null, n(document).unbind("keyup", e), e = null);
            };
            n(document).bind("keyup", e);
            u = function () {
                i();
                f = null;
                n("html").unbind("click", u);
                u = null;
            };
            n("html").bind("click", u);
            r();
        }).data("panel", t.find(".site-flag"));
        t.find("close").click(function (n) {
            n.preventDefault();
            i();
        });
        t.find(".site-flag a").click(function (t) {
            var o, r, i, u, e;
            if (t.preventDefault(), o = n(this), r = o.data("loc"), r) {
                if (i = window.document.location.href.split("#")[0], i.indexOf("?") > 0) {
                    if (u = i.split("?"), e = u[1], e.length > 0) {
                        var s = "", h = !1, c = 0;
                        n.each(e.split("&"), function (n, t) {
                            t.substring(0, 2) != "l=" ? s += "&" + t : h = !0;
                            c++;
                        });
                        i = h && c === 1 ? u[0] + "?l=" + r : u[0] + "?" + s.substring(1) + "&l=" + r;
                    }
                }
                else
                    i = i + "?l=" + r;
                var l = i.indexOf("//"), f = i.indexOf("/", l + 2), a = i.substring(f + 1, f + 6);
                i = i.substring(0, f + 1) + r + i.substring(f + 6);
                window.document.location = i;
            }
        });
        t.find(".site-flag tr:last-child").addClass("last");
    });
}(jQuery);
var currency = { USD: { name: "USD", glyph: "$", conversion: 1, commitmentBase: { firstTierLow: 500, firstTierHigh: 14999, secondTierLow: 15e3, secondTierHigh: 39999, thirdTierLow: 4e4 } }, CAD: { name: "CAD", glyph: "$", conversion: 1.0545, commitmentBase: { firstTierLow: 550, firstTierHigh: 15799, secondTierLow: 15800, secondTierHigh: 42199, thirdTierLow: 42200 } }, GBP: { name: "GBP", glyph: "&pound;", conversion: .6364, commitmentBase: { firstTierLow: 300, firstTierHigh: 9549, secondTierLow: 9550, secondTierHigh: 25449, thirdTierLow: 25450 } }, DKK: { name: "DKK", glyph: "kr", conversion: 5.7328, commitmentBase: { firstTierLow: 2850, firstTierHigh: 85999, secondTierLow: 86e3, secondTierHigh: 229299, thirdTierLow: 229300 } }, EUR: { name: "EUR", glyph: "&euro;", conversion: .7447, commitmentBase: { firstTierLow: 350, firstTierHigh: 11149, secondTierLow: 11150, secondTierHigh: 29799, thirdTierLow: 29800 } }, NOK: { name: "NOK", glyph: "kr", conversion: 5.7358, commitmentBase: { firstTierLow: 2850, firstTierHigh: 86049, secondTierLow: 86050, secondTierHigh: 229449, thirdTierLow: 229450 } }, SEK: { name: "SEK", glyph: "kr", conversion: 6.7125, commitmentBase: { firstTierLow: 3350, firstTierHigh: 100699, secondTierLow: 100700, secondTierHigh: 268499, thirdTierLow: 268500 } }, CHF: { name: "CHF", glyph: "CHF&nbsp;", conversion: .971, commitmentBase: { firstTierLow: 500, firstTierHigh: 14549, secondTierLow: 14550, secondTierHigh: 38849, thirdTierLow: 38850 } }, JPY: { name: "JPY", glyph: "&yen;", conversion: 83.0395, commitmentBase: { firstTierLow: 41500, firstTierHigh: 1245599, secondTierLow: 1245600, secondTierHigh: 3321599, thirdTierLow: 3321600 } }, AUD: { name: "AUD", glyph: "$", conversion: 1.0091, commitmentBase: { firstTierLow: 500, firstTierHigh: 15149, secondTierLow: 15150, secondTierHigh: 40349, thirdTierLow: 40350 } }, NZD: { name: "NZD", glyph: "$", conversion: 1.2801, commitmentBase: { firstTierLow: 650, firstTierHigh: 19199, secondTierLow: 19200, secondTierHigh: 51199, thirdTierLow: 51200 } }, KRW: { name: "KRW", glyph: "&#8361;", conversion: 1200, commitmentBase: { firstTierLow: 6e5, firstTierHigh: 17999999, secondTierLow: 18e6, secondTierHigh: 47999999, thirdTierLow: 48e6 } }, RUB: { name: "RUB", glyph: "РУБ", invertGlyph: !0, conversion: 33, commitmentBase: { firstTierLow: 16500, firstTierHigh: 494999, secondTierLow: 495e3, secondTierHigh: 1319999, thirdTierLow: 132e4 } }, ZAR: { name: "ZAR", glyph: "R&nbsp;", conversion: 9.3255, commitmentBase: { firstTierLow: 3900, firstTierHigh: 116399, secondTierLow: 116400, secondTierHigh: 310399, thirdTierLow: 310400 } }, TRY: { name: "TRY", glyph: "TL&nbsp;", conversion: 1.8, commitmentBase: { firstTierLow: 900, firstTierHigh: 26999, secondTierLow: 27e3, secondTierHigh: 71999, thirdTierLow: 72e3 } }, SAR: { name: "SAR", glyph: "SR&nbsp;", conversion: 3.75, commitmentBase: { firstTierLow: 1900, firstTierHigh: 56249, secondTierLow: 56250, secondTierHigh: 149999, thirdTierLow: 15e4 } }, ARS: { name: "ARS", glyph: "$", conversion: 5.29, commitmentBase: { firstTierLow: 2300, firstTierHigh: 68999, secondTierLow: 69e3, secondTierHigh: 183999, thirdTierLow: 184e3 } }, IDR: { name: "IDR", glyph: "Rp", conversion: 9149, commitmentBase: { firstTierLow: 4574500, firstTierHigh: 137234999, secondTierLow: 137235e3, secondTierHigh: 365959999, thirdTierLow: 36596e4 } }, TWD: { name: "TWD", glyph: "NT$", conversion: 31.0275, commitmentBase: { firstTierLow: 15500, firstTierHigh: 465399, secondTierLow: 465400, secondTierHigh: 1241099, thirdTierLow: 1241100 } } }, currencyMetrics = currency.USD, useDecimalComma = !1, amtOfDecimals = 2, invertGlyph = !1, groupSeparator = ",";
(function (n) {
    n(function () {
        var i = langLocale, t;
        if (getParameterByName("currency-locale") !== null && (i = getParameterByName("currency-locale")), i.length === 3 ? typeof currency[i.toUpperCase()] != "undefined" && (currencyMetrics = currency[i.toUpperCase()]) : setDefaultCurrencyByLangLocale(i.toLowerCase()), setNumberFormatByLangLocale(langLocale), updatePrices(), t = getValueFromQueryString("currency-locale"), t !== null && (t = t.toLowerCase()), t === null) {
            switch (langLocale) {
                case "it-it":
                case "fr-fr":
                case "nl-nl":
                case "pl-pl":
                case "es-es":
                    t = "de-de";
                    break;
                case "zh-cn":
                case "pt-br":
                    t = "en-us";
                    break;
                default: t = langLocale;
            }
            n("#currency-choice").val(t);
        }
        else
            n("#currency-choice").val(t);
        n("#currency-choice").change(function () {
            var i = n("#currency-choice").val(), t = window.location.search;
            t.length > 0 ? (qsCurrencyLocale = getValueFromQueryString("currency-locale"), qsCurrencyLocale !== null ? t = t.replace("currency-locale=" + qsCurrencyLocale, "currency-locale=" + i) : t += "&currency-locale=" + i) : t = "?currency-locale=" + i;
            window.location.search = t.toLowerCase();
        });
        n(".pricing-details-page").length !== 0 && (currencyString = "#currency_icons ." + currencyMetrics.name, n(".current-currency").html(n(currencyString).html()));
    });
})(jQuery);
getStoredPrice = function (n) {
    var t = $(n), i = t.data("pricekey"), r = priceDict, u = !1, f = !1, e = !1, o;
    for (t.hasClass("price-mod-monthly") && (u = !0), t.hasClass("price-mod-max-discount") ? f = !0 : t.hasClass("price-mod-min-discount") && (e = !0), o = retrieveStoredPriceByString(i, u, f, e), i = i.split("."); i.length > 0;)
        try {
            r = r[i.splice(0, 1)[0]];
        }
        catch (s) {
            return console.log("price lookup failure", i), null;
        }
    if (typeof r == "undefined")
        return null;
    typeof r.overrideConversion != "undefined" && r.overrideConversion === !0 && (typeof r[currencyMetrics.name] != "undefined" ? t.addClass("no-convert") : t.removeClass("no-convert"));
    t.data("amount", o);
    t.addClass("price-data");
};
retrieveStoredPriceByString = function (n, t, i, r) {
    for (var e = n.split("."), u = priceDict, f; e.length > 0;)
        try {
            u = u[e.splice(0, 1)[0]];
        }
        catch (o) {
            return console.log("price lookup failure", e), null;
        }
    return typeof u == "undefined" ? null : (f = typeof u.overrideConversion != "undefined" && u.overrideConversion === !0 ? typeof u[currencyMetrics.name] != "undefined" ? u[currencyMetrics.name] : u.USD : u.price, t && (f = f * priceDict.hoursInAMonth), i && (f = f * priceDict.maxDiscount), r && (f = f * priceDict.minDiscount), f);
};
costCalc = function (n, t, i) {
    var r, u;
    return n = n * currencyMetrics.conversion, t ? (n > 10 && i > 2 && (i = 2), currencyMetrics.conversion > 50 && i > 2 && (i = 2), r = (Math.ceil((n * Math.pow(10, i)).toFixed(3)) / Math.pow(10, i)).toFixed(i)) : r = n.toFixed(i), u = $(".page-pricing-calculator").length === 1 ? !1 : !0, r = localizeNumber(r, u), "￥" + r;
};
addGlyph = function (n) {
    var t = !1;
    return typeof currencyMetrics.invertGlyph != "undefined" && currencyMetrics.invertGlyph && (t = !0), t ? n + "&nbsp;" + currencyMetrics.glyph : currencyMetrics.glyph + n;
};
localizeNumber = function (n, t) {
    var r, f, u, e, i;
    if (n = n.toString(), r = n.indexOf("."), r !== -1) {
        for (f = n.length - r - 3, u = 1; u <= f; u++)
            if (n.slice(-1) == "0")
                n = n.slice(0, -1);
            else
                break;
        t && n.slice(-3) == ".00" && (n = n.slice(0, -3));
        useDecimalComma && (n = n.replace(".", ","));
    }
    for (e = useDecimalComma ? "," : ".", i = n.indexOf(e) - 3, i === -4 && (i = n.length - 3); i > 0;)
        n = n.slice(0, i) + groupSeparator + n.slice(i), i -= 3;
    return n;
};
updatePrices = function () {
    $(".stored-price").length !== 0 && $.each($(".stored-price"), function () {
        getStoredPrice(this);
    });
    $(".price-data").each(function () {
        var n = $(this), t, i = 4;
        n.hasClass("commitment-first-tier-low") ? t = addGlyph(localizeNumber(currencyMetrics.commitmentBase.firstTierLow)) : n.hasClass("commitment-first-tier-high") ? t = addGlyph(localizeNumber(currencyMetrics.commitmentBase.firstTierHigh)) : n.hasClass("commitment-second-tier-low") ? t = addGlyph(localizeNumber(currencyMetrics.commitmentBase.secondTierLow)) : n.hasClass("commitment-second-tier-high") ? t = addGlyph(localizeNumber(currencyMetrics.commitmentBase.secondTierHigh)) : n.hasClass("commitment-third-tier-low") ? t = addGlyph(localizeNumber(currencyMetrics.commitmentBase.thirdTierLow)) : (typeof n.data("decimals") != "undefined" && (i = parseInt(n.data("decimals"), 10)), t = n.hasClass("no-convert") ? addGlyph(localizeNumber(n.data("amount"))) : costCalc(n.data("amount"), !n.hasClass("no-round"), i));
        n.html(t);
    });
};
changeCurrency = function (n) {
    currency[n] !== null ? currencyMetrics = currency[n] : currencyMetrics.conversion = currency.USD;
    $(".ARS-only").hide();
    $(".ZAR-only").hide();
    updatePrices();
};
setNumberFormatByLangLocale = function (n) {
    switch (n) {
        case "da-dk":
        case "de-de":
        case "es-es":
        case "fr-fr":
        case "it-it":
        case "nb-no":
        case "nl-nl":
        case "pt-br":
        case "tr-tr":
        case "ru-ru":
        case "sv-se": useDecimalComma = !0;
    }
    switch (n) {
        case "da-dk":
        case "de-de":
        case "es-es":
        case "it-it":
        case "nl-nl":
        case "pt-br":
        case "tr-tr":
            groupSeparator = ".";
            break;
        case "fr-fr":
        case "nb-no":
        case "pl-pl":
        case "ru-ru":
        case "sv-se":
            groupSeparator = "&nbsp;";
            break;
        default: groupSeparator = ",";
    }
};
setDefaultCurrencyByLangLocale = function (n) {
    switch (n) {
        case "en-us":
        case "pt-br":
            currencyMetrics = currency.USD;
            break;
        case "en-ca":
            currencyMetrics = currency.CAD;
            break;
        case "en-gb":
            currencyMetrics = currency.GBP;
            break;
        case "en-au":
            currencyMetrics = currency.AUD;
            break;
        case "en-nz":
            currencyMetrics = currency.NZD;
            break;
        case "en-za":
            currencyMetrics = currency.ZAR;
            break;
        case "es-ar":
            currencyMetrics = currency.ARS;
            break;
        case "da-dk":
            currencyMetrics = currency.DKK;
            break;
        case "de-ch":
            currencyMetrics = currency.CHF;
            break;
        case "ar-sa":
            currencyMetrics = currency.SAR;
            break;
        case "id-id":
            currencyMetrics = currency.IDR;
            break;
        case "de-de":
        case "fr-fr":
        case "it-it":
        case "nl-nl":
        case "pl-pl":
        case "es-es":
            currencyMetrics = currency.EUR;
            break;
        case "nb-no":
            currencyMetrics = currency.NOK;
            break;
        case "sv-se":
            currencyMetrics = currency.SEK;
            break;
        case "ja-jp":
            currencyMetrics = currency.JPY;
            break;
        case "ko-kr":
            currencyMetrics = currency.KRW;
            break;
        case "ru-ru":
            currencyMetrics = currency.RUB;
            break;
        case "tr-tr":
            currencyMetrics = currency.TRY;
            break;
        case "zh-tw":
            currencyMetrics = currency.TWD;
            break;
        default: currencyMetrics = currency.USD;
    }
};
priceDict = { hoursInAMonth: 744, maxDiscount: .68, minDiscount: .8, annualSavings: { professional: { price: 750 }, premium: { price: 1300 }, ultimate: { price: 1850 } }, monetaryCredit: { freeTrial: { overrideConversion: !0, USD: 200, EUR: 150, GBP: 130, CAD: 220, DKK: 1150, NZD: 260, NOK: 1150, SEK: 1350, CHF: 200, JPY: 17e3, AUD: 210, RUB: 6600, KRW: 24e4, ZAR: 1600, TRY: 360, SAR: 750, ARS: 950, IDR: 183e4, TWD: 6300 }, msdn: { professional: { firstMonth: { overrideConversion: !0, USD: 200, EUR: 150, GBP: 130, CAD: 220, DKK: 1150, NZD: 260, NOK: 1150, SEK: 1350, CHF: 200, JPY: 17e3, AUD: 210, RUB: 6600, KRW: 24e4, ZAR: 1600, TRY: 360, SAR: 750, ARS: 950, IDR: 183e4, TWD: 6300 }, perMonth: { overrideConversion: !0, USD: 50, EUR: 40, GBP: 35, CAD: 60, DKK: 300, NZD: 70, NOK: 300, SEK: 350, CHF: 50, JPY: 4500, AUD: 60, RUB: 1700, KRW: 6e4, ZAR: 400, TRY: 90, SAR: 190, ARS: 250, IDR: 46e4, TWD: 1600 }, annualSavings: { overrideConversion: !0, USD: 750, EUR: 590, GBP: 515, CAD: 880, DKK: 4450, NZD: 1030, NOK: 4450, SEK: 5200, CHF: 750, JPY: 66500, AUD: 870, RUB: 25300, KRW: 9e5, ZAR: 6e3, TRY: 1350, SAR: 2840, ARS: 3700, IDR: 689e4, TWD: 23900 } }, premium: { firstMonth: { overrideConversion: !0, USD: 200, EUR: 150, GBP: 130, CAD: 220, DKK: 1150, NZD: 260, NOK: 1150, SEK: 1350, CHF: 200, JPY: 17e3, AUD: 210, RUB: 6600, KRW: 24e4, ZAR: 1600, TRY: 360, SAR: 750, ARS: 950, IDR: 183e4, TWD: 6300 }, perMonth: { overrideConversion: !0, USD: 100, EUR: 75, GBP: 65, CAD: 110, DKK: 600, NZD: 130, NOK: 600, SEK: 700, CHF: 100, JPY: 8500, AUD: 110, RUB: 3300, KRW: 12e4, ZAR: 800, TRY: 180, SAR: 380, ARS: 500, IDR: 92e4, TWD: 3200 }, annualSavings: { overrideConversion: !0, USD: 1300, EUR: 975, GBP: 845, CAD: 1430, DKK: 7750, NZD: 1690, NOK: 7750, SEK: 9050, CHF: 1300, JPY: 110500, AUD: 1420, RUB: 42900, KRW: 156e4, ZAR: 10400, TRY: 2340, SAR: 4930, ARS: 6450, IDR: 1195e4, TWD: 41500 } }, ultimate: { firstMonth: { overrideConversion: !0, USD: 200, EUR: 150, GBP: 130, CAD: 220, DKK: 1150, NZD: 260, NOK: 1150, SEK: 1350, CHF: 200, JPY: 17e3, AUD: 210, RUB: 6600, KRW: 24e4, ZAR: 1600, TRY: 360, SAR: 750, ARS: 950, IDR: 183e4, TWD: 6300 }, perMonth: { overrideConversion: !0, USD: 150, EUR: 115, GBP: 100, CAD: 160, DKK: 900, NZD: 200, NOK: 900, SEK: 1050, CHF: 150, JPY: 12500, AUD: 160, RUB: 5e3, KRW: 18e4, ZAR: 1200, TRY: 270, SAR: 570, ARS: 700, IDR: 138e4, TWD: 4700 }, annualSavings: { overrideConversion: !0, USD: 1850, EUR: 1415, GBP: 1230, CAD: 1980, DKK: 11050, NZD: 2460, NOK: 11050, SEK: 12900, CHF: 1850, JPY: 154500, AUD: 1970, RUB: 61600, KRW: 222e4, ZAR: 14800, TRY: 3330, SAR: 7020, ARS: 8650, IDR: 1701e4, TWD: 58e3 } } }, bizspark: { firstMonth: { overrideConversion: !0, USD: 200, EUR: 150, GBP: 130, CAD: 220, DKK: 1150, NZD: 260, NOK: 1150, SEK: 1350, CHF: 200, JPY: 17e3, AUD: 210, RUB: 6600, KRW: 24e4, ZAR: 1600, TRY: 360, SAR: 750, ARS: 950, IDR: 183e4, TWD: 6300 }, perMonth: { overrideConversion: !0, USD: 150, EUR: 115, GBP: 100, CAD: 160, DKK: 900, NZD: 200, NOK: 900, SEK: 1050, CHF: 150, JPY: 12500, AUD: 160, RUB: 5e3, KRW: 18e4, ZAR: 1200, TRY: 270, SAR: 570, ARS: 700, IDR: 138e4, TWD: 4700 } }, mpn: { firstMonth: { overrideConversion: !0, USD: 200, EUR: 150, GBP: 130, CAD: 220, DKK: 1150, NZD: 260, NOK: 1150, SEK: 1350, CHF: 200, JPY: 17e3, AUD: 210, RUB: 6600, KRW: 24e4, ZAR: 1600, TRY: 360, SAR: 750, ARS: 950, IDR: 183e4, TWD: 6300 }, perMonth: { overrideConversion: !0, USD: 100, EUR: 75, GBP: 65, CAD: 110, DKK: 600, NZD: 130, NOK: 600, SEK: 700, CHF: 100, JPY: 8500, AUD: 110, RUB: 3300, KRW: 12e4, ZAR: 800, TRY: 180, SAR: 380, ARS: 500, IDR: 92e4, TWD: 3200 } } }, commitmentDiscountTiers: { firstTierLow: { overrideConversion: !0, USD: 500, CAD: 550, GBP: 300, DKK: 2850, EUR: 350, NOK: 2850, SEK: 3350, CHF: 500, JPY: 41500, AUD: 500, NZD: 650, KRW: 6e5, RUB: 16500, ZAR: 4650, TRY: 900, SAR: 1900, ARS: 2650, IDR: 4574500, TWD: 15500 }, firstTierHigh: { overrideConversion: !0, USD: 14999, CAD: 15799, GBP: 9549, DKK: 85999, EUR: 11149, NOK: 86049, SEK: 100699, CHF: 14549, JPY: 1245599, AUD: 15149, NZD: 19199, KRW: 17999999, RUB: 494999, ZAR: 139899, TRY: 26999, SAR: 56249, ARS: 79349, IDR: 137234999, TWD: 465399 }, secondTierLow: { overrideConversion: !0, USD: 15e3, CAD: 15800, GBP: 9550, DKK: 86e3, EUR: 11150, NOK: 86050, SEK: 100700, CHF: 14550, JPY: 1245600, AUD: 15150, NZD: 19200, KRW: 18e6, RUB: 495e3, ZAR: 139900, TRY: 27e3, SAR: 56250, ARS: 79350, IDR: 137235e3, TWD: 465400 }, secondTierHigh: { overrideConversion: !0, USD: 39999, CAD: 15800, GBP: 25449, DKK: 229299, EUR: 29799, NOK: 229449, SEK: 268499, CHF: 38849, JPY: 3321599, AUD: 40349, NZD: 51199, KRW: 47999999, RUB: 1319999, ZAR: 372999, TRY: 71999, SAR: 149999, ARS: 211599, IDR: 365959999, TWD: 1241099 }, thirdTierLow: { overrideConversion: !0, USD: 4e4, CAD: 42200, GBP: 25450, DKK: 229300, EUR: 29800, NOK: 229450, SEK: 268500, CHF: 38850, JPY: 3321600, AUD: 40350, NZD: 51200, KRW: 48e6, RUB: 132e4, ZAR: 373e3, TRY: 72e3, SAR: 15e4, ARS: 211600, IDR: 36596e4, TWD: 1241100 } }, services: { virtualMachines: { windows: { a0: { price: .02 }, a1: { price: .09 }, a2: { price: .18 }, a3: { price: .36 }, a4: { price: .72 }, a6: { price: 1.02 }, a7: { price: 2.04 }, msdn: { a1: { price: .06 }, a2: { price: .12 }, a3: { price: .24 }, a4: { price: .48 } } }, windowsPromo: { a0: { price: .0133 }, a1: { price: .08 }, a2: { price: .16 }, a3: { price: .32 }, a4: { price: .64 } }, linux: { a0: { price: .02 }, a1: { price: .06 }, a2: { price: .12 }, a3: { price: .24 }, a4: { price: .48 }, a6: { price: .82 }, a7: { price: 1.64 } }, sql: { web: { a1: { price: .135 }, a2: { price: .225 }, a3: { price: .405 }, a4: { price: .81 }, a6: { price: 1.065 }, a7: { price: 2.13 } }, standard: { a1: { price: .64 }, a2: { price: .73 }, a3: { price: .91 }, a4: { price: 1.82 }, a6: { price: 1.57 }, a7: { price: 3.14 } }, enterprise: { a1: { price: 2.19 }, a2: { price: 2.28 }, a3: { price: 2.46 }, a4: { price: 4.92 }, a6: { price: 3.12 }, a7: { price: 6.24 } } }, biztalk: { standard: { a1: { price: .75 }, a2: { price: .84 }, a3: { price: 1.02 }, a4: { price: 2.04 }, a6: { price: 1.68 }, a7: { price: 3.36 } }, enterprise: { a1: { price: 2.99 }, a2: { price: 3.08 }, a3: { price: 3.26 }, a4: { price: 6.54 }, a6: { price: 3.92 }, a7: { price: 7.84 } } } }, cloudServices: { a0: { price: .02 }, a1: { price: .08 }, a2: { price: .16 }, a3: { price: .32 }, a4: { price: .64 }, a6: { price: .9 }, a7: { price: 1.8 }, msdn: { a1: { price: .06 }, a2: { price: .12 }, a3: { price: .24 }, a4: { price: .48 } } }, webSites: { shared: { price: .013 }, reserved: { promo: { small: { price: .08 }, medium: { price: .16 }, large: { price: .32 } }, msdn: { small: { price: .06 }, medium: { price: .12 }, large: { price: .24 } }, small: { price: .1 }, medium: { price: .2 }, large: { price: .4 } }, standard: { promo: { small: { price: .08 }, medium: { price: .16 }, large: { price: .32 } }, msdn: { small: { price: .06 }, medium: { price: .12 }, large: { price: .24 } }, small: { price: .1 }, medium: { price: .2 }, large: { price: .4 } }, ssl: { sni: { price: 9 }, ip: { price: 39 }, promo: { sni: { price: 6 }, ip: { price: 26 } } } }, mobileServices: { price: .08, standard: { price: 25 }, premium: { price: 199 } }, storage: { capacity: { geo: { t1: { price: .095 }, t2: { price: .08 }, t3: { price: .07 }, t4: { price: .065 }, t5: { price: .06 }, t6: { price: .055 } }, loc: { t1: { price: .07 }, t2: { price: .065 }, t3: { price: .06 }, t4: { price: .055 }, t5: { price: .045 }, t6: { price: .037 } } }, transactions: { price: .01 } }, sqlDatabase: { t1: { price: 4.995 }, t2: { price: 9.99 }, t3: { first: { price: 9.99 }, add: { price: 3.996 } }, t4: { first: { price: 45.954 }, add: { price: 1.996 } }, t5: { first: { price: 125.874 }, add: { price: .999 } } }, sqlReporting: { price: .16 }, hdInsight: { head: { price: .32 }, compute: { price: .16 }, msdn: { head: { price: .24 }, compute: { price: .12 } } }, backup: { price: .25 }, mediaServices: { encoding: { t1: { price: 1.99 }, t2: { price: 1.6 }, t3: { price: 1.29 }, t4: { price: 1.02 }, reservedUnit: { price: 99 } }, packaging: { t1: { price: 1.49 }, t2: { price: 1.2 }, t3: { price: .97 }, t4: { price: .77 } }, streaming: { price: 199 } }, cdn: { transfers: { zone1: { t1: { price: .12 }, t2: { price: .08 }, t3: { price: .06 }, t4: { price: .04 }, t5: { price: .03 }, t6: { price: .025 } }, zone2: { t1: { price: .19 }, t2: { price: .14 }, t3: { price: .12 }, t4: { price: .1 }, t5: { price: .08 }, t6: { price: .07 } } }, transactions: { price: .01 } }, serviceBus: { queue: { price: .01 }, relay: { price: .1 } }, caching: { t1: { price: 45 }, t2: { price: 55 }, t3: { price: 75 }, t4: { price: 110 }, t5: { price: 180 }, t6: { price: 325 } }, dataTransfers: { zone1: { t1: { price: .12 }, t2: { price: .09 }, t3: { price: .07 }, t4: { price: .05 } }, zone2: { t1: { price: .19 }, t2: { price: .15 }, t3: { price: .13 }, t4: { price: .12 } } }, virtualNetwork: { price: .05 }, support: { developer: { price: 29 }, standard: { price: 300 }, professional: { price: 1e3 } } }, freeTrial: { overrideConversion: !0, USD: 200, EUR: 150, GBP: 130, CAD: 220, DKK: 1150, NZD: 260, NOK: 1150, SEK: 1350, CHF: 200, JPY: 17e3, AUD: 210, RUB: 6600, KRW: 24e4, ZAR: 1600, TRY: 360, SAR: 750, ARS: 950, IDR: 183e4, TWD: 6300 }, msdn: { annualSavings: { professional: { price: 750 }, premium: { price: 1300 }, ultimate: { price: 1850 } }, perMonth: { professional: { overrideConversion: !0, USD: 50, EUR: 40, GBP: 35, CAD: 60, DKK: 300, NZD: 70, NOK: 300, SEK: 350, CHF: 50, JPY: 4500, AUD: 60, RUB: 1700, KRW: 6e4, ZAR: 400, TRY: 90, SAR: 190, ARS: 250, IDR: 46e4, TWD: 1600 }, premium: { overrideConversion: !0, USD: 100, EUR: 75, GBP: 65, CAD: 110, DKK: 600, NZD: 130, NOK: 600, SEK: 700, CHF: 100, JPY: 8500, AUD: 110, RUB: 3300, KRW: 12e4, ZAR: 800, TRY: 180, SAR: 380, ARS: 500, IDR: 92e4, TWD: 3200 }, ultimate: { overrideConversion: !0, USD: 150, EUR: 115, GBP: 100, CAD: 160, DKK: 900, NZD: 200, NOK: 900, SEK: 1050, CHF: 150, JPY: 12500, AUD: 160, RUB: 5e3, KRW: 18e4, ZAR: 1200, TRY: 270, SAR: 570, ARS: 700, IDR: 138e4, TWD: 4700 } }, firstMonth: { professional: { overrideConversion: !0, USD: 200, EUR: 150, GBP: 130, CAD: 220, DKK: 1150, NZD: 260, NOK: 1150, SEK: 1350, CHF: 200, JPY: 17e3, AUD: 210, RUB: 6600, KRW: 24e4, ZAR: 1600, TRY: 360, SAR: 750, ARS: 950, IDR: 183e4, TWD: 6300 }, premium: { overrideConversion: !0, USD: 200, EUR: 150, GBP: 130, CAD: 220, DKK: 1150, NZD: 260, NOK: 1150, SEK: 1350, CHF: 200, JPY: 17e3, AUD: 210, RUB: 6600, KRW: 24e4, ZAR: 1600, TRY: 360, SAR: 750, ARS: 950, IDR: 183e4, TWD: 6300 }, ultimate: { overrideConversion: !0, USD: 200, EUR: 150, GBP: 130, CAD: 220, DKK: 1150, NZD: 260, NOK: 1150, SEK: 1350, CHF: 200, JPY: 17e3, AUD: 210, RUB: 6600, KRW: 24e4, ZAR: 1600, TRY: 360, SAR: 750, ARS: 950, IDR: 183e4, TWD: 6300 } } }, mpn: { firstMonth: { overrideConversion: !0, USD: 200, EUR: 150, GBP: 130, CAD: 220, DKK: 1150, NZD: 260, NOK: 1150, SEK: 1350, CHF: 200, JPY: 17e3, AUD: 210, RUB: 6600, KRW: 24e4, ZAR: 1600, TRY: 360, SAR: 750, ARS: 950, IDR: 183e4, TWD: 6300 }, perMonth: { overrideConversion: !0, USD: 100, EUR: 75, GBP: 65, CAD: 110, DKK: 600, NZD: 130, NOK: 600, SEK: 700, CHF: 100, JPY: 8500, AUD: 110, RUB: 3300, KRW: 12e4, ZAR: 800, TRY: 180, SAR: 380, ARS: 500, IDR: 92e4, TWD: 3200 } } }, function () {
    function t() {
        var t = document.getElementById("PromoCode");
        if (t.value == "")
            return document.getElementById("promoCodeFormatErrDiv").style.display = "none", document.getElementById("promoCodeEmptyErrDiv").style.display = "block", !1;
        if (document.getElementById("promoCodeEmptyErrDiv").style.display = "none", n.test(t.value))
            document.getElementById("promoCodeFormatErrDiv").style.display = "none";
        else
            return document.getElementById("promoCodeEmptyErrDiv").style.display = "none", document.getElementById("promoCodeFormatErrDiv").style.display = "block", !1;
    }
    var n = /^[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}$/;
    window.onload = function () {
        var i = document.getElementById("PromoCode"), r;
        i != null && (i.value = "", i.onblur = function () {
            if (i.value == "") {
                document.getElementById("promoCodeFormatErrDiv").style.display = "none";
                document.getElementById("promoCodeEmptyErrDiv").style.display = "block";
                return;
            }
            if (document.getElementById("promoCodeEmptyErrDiv").style.display = "none", n.test(i.value))
                document.getElementById("promoCodeFormatErrDiv").style.display = "none";
            else {
                document.getElementById("promoCodeEmptyErrDiv").style.display = "none";
                document.getElementById("promoCodeFormatErrDiv").style.display = "block";
                return;
            }
        }, r = document.getElementById("EnterPromoCodeForm"), r.onsubmit = t);
    };
}(jQuery);
$(document).ready(function () {
    var a = $("#JsonResult"), v = a.val(), h, l, d;
    if (v != null) {
        var s = JSON.parse(v).answers[0], g = s.webSearchUrl.indexOf("?"), nt = s.webSearchUrl.substring(g), y = nt.split("&"), r = "";
        for (h = 0; h < y.length; h++)
            l = y[h].split("="), l[0] == "r" && (r = decodeURIComponent(l[1]), r = r.replace(/%3a/g, ":").replace(/%2f/g, "/"));
        var p = r.indexOf("(site:http://www.windowsazure.cn/") > -1, w = r.indexOf("(site:http://msdn.microsoft.com/zh-cn/library") > -1, b = r.indexOf("(site:http://forums.asp.net+OR+site:http://forums.iis.net+OR+site:http://social.msdn.microsoft.com/forums+OR+site:http://forums.silverlight.net)") > -1, e = r.split(")+").pop();
        (e == null || e.replace(/\s+/g, "") == "") && e == "";
        var k = s.totalEstimatedMatches, i = $("#SearchResultsPageNum").text(), u = Math.ceil(k / 10);
        if (p == !0 && $("#search-wacom").prop("checked", !0), w == !0 && $("#search-msdn").prop("checked", !0), b == !0 && $("#search-forums").prop("checked", !0), $("#BodySearchBox").val(e), k > 0) {
            d = s.webResults;
            d.forEach(function (n) {
                var r = n.name, u = n.snippet, i = n.url, f = n.displayUrl, t = '<li><a class="sr-title" href="' + i + '">' + r + '<\/a><span class="sr-description">' + u + '<\/span><a class="sr-url" href="' + i + '">' + f + "<\/a><\/li>";
                t = t.replace(/\uE000/g, "<strong>").replace(/\uE001/g, "<\/strong>");
                $(".sr-list").append(t);
            });
            function f(n) {
                var t = "/searchresults/?page=" + n;
                return e != "" && (t += "&query=" + e), p == !0 && (t += "&azure=true"), w == !0 && (t += "&msdn=true"), b == !0 && (t += "&forums=true"), t;
            }
            function c(n, t) {
                for (var u = "", r = n; r <= t; r++)
                    u += r == i ? '<span class="sr-current">' + r + "<\/span>" : '<a class="sr-numeric" href="' + f(r) + '">' + r + "<\/a>";
                return u;
            }
            var t = i - (i % 5 == 0 ? 5 : i % 5) + 1, o = t + 4, n = "";
            i == 1 ? (n += '<a class="sr-first-previous"><<\/a>', n += '<a class="sr-first-previous"><<\/a>') : (n += '<a class="sr-first-previous"><<\/a>', n += '<a class="sr-first-previous" href="' + f(i - 1) + '"><<\/a>');
            t == 1 && u <= 5 ? n += c(1, u) : t == 1 && u > 5 ? (n += c(1, 5), n += '<a class="sr-numeric" href="' + f(o + 1) + '">...<\/a>') : t > 5 && u <= o ? (n += '<a class="sr-numeric" href="' + f(t - 1) + '">...<\/a>', n += c(t, u)) : t > 5 && u > o && (n += '<a class="sr-numeric" href="' + f(t - 1) + '">...<\/a>', n += c(t, o), n += '<a class="sr-numeric" href="' + f(o + 1) + '">...<\/a>');
            n += i == u ? '<a class="sr-next-last">><\/a>' : '<a class="sr-next-last" href="' + f(i + 1) + '">><\/a>';
            $("#ResultsPager").append(n);
        }
        else
            $("#search-results").remove(), $("#NoResultMsg").css("display", "block");
        a.remove();
    }
});
$(document).ready(function () {
    var n, o, t, s;
    if (document.getElementById("calculator-summary-title") != null) {
        n = JSON.parse(localStorage.data);
        o = "/pricingcalculator/InsertPriceList";
        $.ajax({ type: "POST", data: JSON.stringify(n), dataType: "json", url: o, contentType: "application/json", success: function () {
        }, error: function () {
        } });
        var i = 0, r = 0, u = 0, f = 0, e = 0;
        for (t = 0; t < n.length; t++)
            switch (n[t].category) {
                case "网站":
                    i += parseFloat(n[t].price);
                    $("#website").removeClass("hide");
                    $("#website tr:last").after('<tr><td class="left_align"><span class="item-summary-title">' + n[t].name + '<\/span><\/td><td class="right_align"><span class="item-summary-value">￥' + n[t].price + '<\/span><span class="item-summary-unit">/月<\/span><\/td><\/tr>');
                    break;
                case "云服务":
                    r += parseFloat(n[t].price);
                    $("#cloud-service").removeClass("hide");
                    $("#cloud-service tr:last").after('<tr><td class="left_align"><span class="item-summary-title">' + n[t].name + '<\/span><\/td><td class="right_align"><span class="item-summary-value">￥' + n[t].price + '<\/span><span class="item-summary-unit">/月<\/span><\/td><\/tr>');
                    break;
                case "虚拟机":
                    u += parseFloat(n[t].price);
                    $("#vm").removeClass("hide");
                    $("#vm tr:last").after('<tr><td class="left_align"><span class="item-summary-title">' + n[t].name + '<\/span><\/td><td class="right_align"><span class="item-summary-value">￥' + n[t].price + '<\/span><span class="item-summary-unit">/月<\/span><\/td><\/tr>');
                    break;
                case "数据管理":
                    f += parseFloat(n[t].price);
                    $("#data-management").removeClass("hide");
                    $("#data-management tr:last").after('<tr><td class="left_align"><span class="item-summary-title">' + n[t].name + '<\/span><\/td><td class="right_align"><span class="item-summary-value">￥' + n[t].price + '<\/span><span class="item-summary-unit">/月<\/span><\/td><\/tr>');
                    break;
                default:
                    e += parseFloat(n[t].price);
                    $("#others").removeClass("hide");
                    $("#others tr:last").after('<tr><td class="left_align"><span class="item-summary-title">' + n[t].name + '<\/span><\/td><td class="right_align"><span class="item-summary-value">￥' + n[t].price + '<\/span><span class="item-summary-unit">/月<\/span><\/td><\/tr>');
            }
        s = i + r + u + f + e;
        $("#website-total").html("<span class='category-summary-value'>￥" + i.toFixed(2) + "<\/span><span class='category-summary-unit'>/月<\/span>");
        $("#cloud-service-total").html("<span class='category-summary-value'>￥" + r.toFixed(2) + "<\/span><span class='category-summary-unit'>/月<\/span>");
        $("#vm-total").html("<span class='category-summary-value'>￥" + u.toFixed(2) + "<\/span><span class='category-summary-unit'>/月<\/span>");
        $("#data-management-total").html("<span class='category-summary-value'>￥" + f.toFixed(2) + "<\/span><span class='category-summary-unit'>/月<\/span>");
        $("#others-total").html("<span class='category-summary-value'>￥" + e.toFixed(2) + "<\/span><span class='category-summary-unit'>/月<\/span>");
        $("#total-summary").html("<span class='total-summary-value'>￥" + s.toFixed(2) + "<\/span><span class='total-summary-unit'>/月<\/span>");
        $(".jump-to-free-trial").click(function () {
            window.location.href = "/zh-cn/pricing/1rmb-trial/";
        });
    }
}), function (n) {
    function i(n) {
        return n.replace(/(^\s*)|(\s*$)/g, "");
    }
    function h() {
        if (this.id == "form-en" && r() == !0) {
            n("#LanguageIndicator").removeClass("is-cn");
            n("#form-cn").addClass("unselected");
            n("#form-en").removeClass("unselected");
            n(".support-ticket-form-cn").css("display", "none");
            n(".support-ticket-form-en").css("display", "block");
            n("#SubmitBtn").prop("value", "Submit Request");
            n("#IsZhcn").prop("checked", !1);
            return;
        }
        if (this.id == "form-cn" && r() == !1) {
            n("#LanguageIndicator").addClass("is-cn");
            n("#form-cn").removeClass("unselected");
            n("#form-en").addClass("unselected");
            n(".support-ticket-form-en").css("display", "none");
            n(".support-ticket-form-cn").css("display", "block");
            n("#SubmitBtn").prop("value", "申请支持");
            n("#IsZhcn").prop("checked", !0);
            return;
        }
    }
    function r() {
        return n("#LanguageIndicator").hasClass("is-cn") ? !0 : !1;
    }
    function l() {
        var p = document.getElementById("LastName"), w = document.getElementById("FirstName"), v = document.getElementById("Telephone"), y = document.getElementById("Email"), b = document.getElementById("Account"), k = document.getElementById("Subscription"), l = document.getElementById("Question"), d = document.getElementById("QuestionTitle"), g = document.getElementById("LabelQuestionLength"), nt = document.getElementById("UserCommitmentChkBox"), it = document.getElementById("SubmitBtn"), tt;
        g.innerHTML = f - e(l.value);
        it.className = "submit";
        c() ? document.getElementById("cookieBlockErrDiv").style.display = "none" : (document.getElementById("cookieBlockErrDiv").style.display = "block", document.getElementById("cookieBlockErrDiv").scrollIntoView());
        n("#form-cn").on("click", h);
        n("#form-en").on("click", h);
        p.onblur = function () {
            if (document.getElementById("LastNameEmptyErrDiv").style.display = "none", document.getElementById("LastNameLengthErrDiv").style.display = "none", i(p.value) == "") {
                document.getElementById("LastNameEmptyErrDiv").style.display = "block";
                return;
            }
            if (p.value.replace(t, "**").length > 50) {
                document.getElementById("LastNameLengthErrDiv").style.display = "block";
                return;
            }
        };
        w.onblur = function () {
            if (document.getElementById("FirstNameEmptyErrDiv").style.display = "none", document.getElementById("FirstNameLengthErrDiv").style.display = "none", i(w.value) == "") {
                document.getElementById("FirstNameEmptyErrDiv").style.display = "block";
                return;
            }
            if (w.value.replace(t, "**").length > 50) {
                document.getElementById("FirstNameLengthErrDiv").style.display = "block";
                return;
            }
        };
        v.onblur = function () {
            if (document.getElementById("TelEmptyErrDiv").style.display = "none", document.getElementById("TelLengthErrDiv").style.display = "none", document.getElementById("TelFormatErrDiv").style.display = "none", i(v.value) == "") {
                document.getElementById("TelEmptyErrDiv").style.display = "block";
                return;
            }
            if (v.value.replace(t, "**").length > 32) {
                document.getElementById("TelLengthErrDiv").style.display = "block";
                return;
            }
            o.test(v.value) || (document.getElementById("TelFormatErrDiv").style.display = "block");
        };
        y.onblur = function () {
            if (document.getElementById("emailEmptyErrDiv").style.display = "none", document.getElementById("emailLengthErrDiv").style.display = "none", document.getElementById("emailFormatErrDiv").style.display = "none", i(y.value) == "") {
                document.getElementById("emailEmptyErrDiv").style.display = "block";
                return;
            }
            if (y.value.replace(t, "**").length > 64) {
                document.getElementById("emailLengthErrDiv").style.display = "block";
                return;
            }
            s.test(y.value) || (document.getElementById("emailFormatErrDiv").style.display = "block");
        };
        u && (b.onblur = function () {
            if (document.getElementById("MSAccountEmptyErrDiv").style.display = "none", document.getElementById("MSAccountLengthErrDiv").style.display = "none", i(b.value) == "") {
                document.getElementById("MSAccountEmptyErrDiv").style.display = "block";
                return;
            }
            if (b.value.replace(t, "**").length > 64) {
                document.getElementById("MSAccountLengthErrDiv").style.display = "block";
                return;
            }
        }, k.onblur = function () {
            if (document.getElementById("AzureIdEmptyErrDiv").style.display = "none", document.getElementById("AzureIdLengthErrDiv").style.display = "none", i(k.value) == "") {
                document.getElementById("AzureIdEmptyErrDiv").style.display = "block";
                return;
            }
            if (k.value.replace(t, "**").length > 50) {
                document.getElementById("AzureIdLengthErrDiv").style.display = "block";
                return;
            }
        });
        d.onblur = function () {
            if (document.getElementById("QuestionTitleEmptyErrDiv").style.display = "none", document.getElementById("QuestionTitleLengthErrDiv").style.display = "none", i(d.value) == "") {
                document.getElementById("QuestionTitleEmptyErrDiv").style.display = "block";
                return;
            }
            if (d.value.replace(t, "**").length > 128) {
                document.getElementById("QuestionTitleLengthErrDiv").style.display = "block";
                return;
            }
        };
        l.onblur = function () {
            document.getElementById("QuestionEmptyErrDiv").style.display = "none";
            document.getElementById("QuestionLengthErrDiv").style.display = "none";
            var n = 128;
            if (r() == !0 && (n = 256), i(l.value) == "") {
                document.getElementById("QuestionEmptyErrDiv").style.display = "block";
                return;
            }
            if (l.value.replace(t, "**").length > n) {
                document.getElementById("QuestionLengthErrDiv").style.display = "block";
                return;
            }
        };
        nt != null && (nt.onchange = function () {
            if (nt.checked)
                document.getElementById("UserCommitmentEmptyErrDiv").style.display = "none";
            else {
                document.getElementById("UserCommitmentEmptyErrDiv").style.display = "block";
                return;
            }
        });
        l.onchange = function () {
            g.innerHTML = f - e(l.value);
        };
        l.onkeyup = function () {
            g.innerHTML = f - e(l.value);
        };
        tt = document.getElementById("SupportTicketForm");
        tt.onsubmit = a;
    }
    function e(n) {
        return r() == !0 ? parseInt((n.replace(t, "**").length + 1) / 2) : parseInt(n.replace(t, "**").length);
    }
    function c() {
        var n = !1, t;
        return navigator.cookiesEnabled ? !0 : (document.cookie = "testcookie=yes;", t = document.cookie, t.indexOf("testcookie=yes") > -1 && (document.cookie = "testcookie=yes;expires=" + new Date(0).toGMTString(), n = !0), document.cookie = "testcookie=yes;expires=" + new Date(0).toGMTString(), n);
    }
    function a() {
        var h, l, f, e, a, v, y, p, w, b;
        if (document.getElementById("LastNameEmptyErrDiv").style.display = "none", document.getElementById("LastNameLengthErrDiv").style.display = "none", document.getElementById("FirstNameEmptyErrDiv").style.display = "none", document.getElementById("FirstNameLengthErrDiv").style.display = "none", document.getElementById("TelEmptyErrDiv").style.display = "none", document.getElementById("TelLengthErrDiv").style.display = "none", document.getElementById("TelFormatErrDiv").style.display = "none", document.getElementById("emailEmptyErrDiv").style.display = "none", document.getElementById("emailLengthErrDiv").style.display = "none", document.getElementById("emailFormatErrDiv").style.display = "none", u && (document.getElementById("MSAccountEmptyErrDiv").style.display = "none", document.getElementById("MSAccountLengthErrDiv").style.display = "none", document.getElementById("AzureIdEmptyErrDiv").style.display = "none", document.getElementById("AzureIdLengthErrDiv").style.display = "none"), document.getElementById("QuestionTitleEmptyErrDiv").style.display = "none", document.getElementById("QuestionTitleLengthErrDiv").style.display = "none", document.getElementById("QuestionEmptyErrDiv").style.display = "none", document.getElementById("QuestionLengthErrDiv").style.display = "none", document.getElementById("UserCommitmentEmptyErrDiv") != null && (document.getElementById("UserCommitmentEmptyErrDiv").style.display = "none"), document.getElementById("cookieBlockErrDiv").style.display = "none", c())
            document.getElementById("cookieBlockErrDiv").style.display = "none";
        else
            return document.getElementById("cookieBlockErrDiv").style.display = "block", document.getElementById("cookieBlockErrDiv").scrollIntoView(), !1;
        if (h = document.getElementById("LastName"), i(h.value) == "")
            return document.getElementById("LastNameEmptyErrDiv").style.display = "block", document.getElementById("LastNameEmptyErrDiv").scrollIntoView(), !1;
        if (document.getElementById("LastNameEmptyErrDiv").style.display = "none", h.value.replace(t, "**").length > 50)
            return document.getElementById("LastNameLengthErrDiv").style.display = "block", document.getElementById("LastNameLengthErrDiv").scrollIntoView(), !1;
        if (document.getElementById("LastNameLengthErrDiv").style.display = "none", l = document.getElementById("FirstName"), i(l.value) == "")
            return document.getElementById("FirstNameEmptyErrDiv").style.display = "block", document.getElementById("FirstNameEmptyErrDiv").scrollIntoView(), !1;
        if (document.getElementById("FirstNameEmptyErrDiv").style.display = "none", l.value.replace(t, "**").length > 50)
            return document.getElementById("FirstNameLengthErrDiv").style.display = "block", document.getElementById("FirstNameLengthErrDiv").scrollIntoView(), !1;
        if (document.getElementById("FirstNameLengthErrDiv").style.display = "none", f = document.getElementById("Telephone"), i(f.value) == "")
            return document.getElementById("TelEmptyErrDiv").style.display = "block", document.getElementById("TelEmptyErrDiv").scrollIntoView(), !1;
        if (document.getElementById("TelEmptyErrDiv").style.display = "none", f.value.replace(t, "**").length > 32)
            return document.getElementById("TelLengthErrDiv").style.display = "block", document.getElementById("TelLengthErrDiv").scrollIntoView(), !1;
        if (document.getElementById("TelLengthErrDiv").style.display = "none", o.test(f.value))
            document.getElementById("TelFormatErrDiv").style.display = "none";
        else
            return document.getElementById("TelFormatErrDiv").style.display = "block", document.getElementById("TelFormatErrDiv").scrollIntoView(), !1;
        if (e = document.getElementById("Email"), i(e.value) == "")
            return document.getElementById("emailEmptyErrDiv").style.display = "block", document.getElementById("emailEmptyErrDiv").scrollIntoView(), !1;
        if (document.getElementById("emailEmptyErrDiv").style.display = "none", e.value.replace(t, "**").length > 64)
            return document.getElementById("emailLengthErrDiv").style.display = "block", document.getElementById("emailLengthErrDiv").scrollIntoView(), !1;
        if (document.getElementById("emailLengthErrDiv").style.display = "none", s.test(e.value))
            document.getElementById("emailFormatErrDiv").style.display = "none";
        else
            return document.getElementById("emailFormatErrDiv").style.display = "block", document.getElementById("emailFormatErrDiv").scrollIntoView(), !1;
        if (u) {
            if (a = document.getElementById("Account"), i(a.value) == "")
                return document.getElementById("MSAccountEmptyErrDiv").style.display = "block", document.getElementById("MSAccountEmptyErrDiv").scrollIntoView(), !1;
            if (document.getElementById("MSAccountEmptyErrDiv").style.display = "none", a.value.replace(t, "**").length > 64)
                return document.getElementById("MSAccountLengthErrDiv").style.display = "block", document.getElementById("MSAccountLengthErrDiv").scrollIntoView(), !1;
            if (document.getElementById("MSAccountLengthErrDiv").style.display = "none", v = document.getElementById("Subscription"), i(v.value) == "")
                return document.getElementById("AzureIdEmptyErrDiv").style.display = "block", document.getElementById("AzureIdEmptyErrDiv").scrollIntoView(), !1;
            if (document.getElementById("AzureIdEmptyErrDiv").style.display = "none", v.value.replace(t, "**").length > 50)
                return document.getElementById("AzureIdLengthErrDiv").style.display = "block", document.getElementById("AzureIdLengthErrDiv").sc.scrollIntoView(), !1;
            document.getElementById("AzureIdLengthErrDiv").style.display = "none";
        }
        if (n("#Type").val() == "PleaseSelect")
            return document.getElementById("TicketTypeEmptyErrDiv").style.display = "block", document.getElementById("TicketTypeEmptyErrDiv").scrollIntoView(), !1;
        if (n("#Type").val() == "Technical" && n("#ServiceName").val() == "PleaseSelect")
            return document.getElementById("ServiceEmptyErrDiv").style.display = "block", document.getElementById("ServiceEmptyErrDiv").scrollIntoView(), !1;
        if (y = document.getElementById("QuestionTitle"), i(y.value) == "")
            return document.getElementById("QuestionTitleEmptyErrDiv").style.display = "block", document.getElementById("QuestionTitleEmptyErrDiv").scrollIntoView(), !1;
        if (document.getElementById("QuestionTitleEmptyErrDiv").style.display = "none", y.value.replace(t, "**").length > 128)
            return document.getElementById("QuestionTitleLengthErrDiv").style.display = "block", document.getElementById("QuestionTitleLengthErrDiv").scrollIntoView(), !1;
        if (document.getElementById("QuestionTitleLengthErrDiv").style.display = "none", p = document.getElementById("Question"), i(p.value) == "")
            return document.getElementById("QuestionEmptyErrDiv").style.display = "block", document.getElementById("QuestionEmptyErrDiv").scrollIntoView(), !1;
        if (document.getElementById("QuestionEmptyErrDiv").style.display = "none", w = 128, r() == !0 && (w = 256), p.value.replace(t, "**").length > w)
            return document.getElementById("QuestionLengthErrDiv").style.display = "block", document.getElementById("QuestionLengthErrDiv").scrollIntoView(), !1;
        if (document.getElementById("QuestionLengthErrDiv").style.display = "none", b = document.getElementById("UserCommitmentChkBox"), b != null)
            if (b.checked)
                document.getElementById("UserCommitmentEmptyErrDiv").style.display = "none";
            else
                return document.getElementById("UserCommitmentEmptyErrDiv").style.display = "block", document.getElementById("UserCommitmentEmptyErrDiv").scrollIntoView(), !1;
        return !0;
    }
    var t = /[^\x00-\xff]|[\n]/g, o = /^([0-9]|-){3,}$/, s = /^([a-zA-Z0-9]+[-_.])*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-_.])*[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/, f = 128, u;
    n(document).ready(function () {
        document.getElementsByClassName("support-ticket-form-cn").length != 0 && (u = n("#IsAzure").prop("checked"), l());
    });
}(jQuery);
$(document).ready(function () {
    $(".trust-cn").css({ color: "#808080", cursor: "default" });
    $(".trust-en").css({ color: "#00a8d9", cursor: "pointer" });
    $(".trust-en-content").hide();
    $(".trust-cn-content").show();
    $(".trust-cn").click(function () {
        $(".trust-cn").css({ color: "#808080", cursor: "default" });
        $(".trust-en").css({ color: "#00a8d9", cursor: "pointer" });
        $(".trust-en-content").hide();
        $(".trust-cn-content").show();
    });
    $(".trust-en").click(function () {
        $(".trust-cn").css({ color: "#00a8d9", cursor: "pointer" });
        $(".trust-en").css({ color: "#808080", cursor: "default" });
        $(".trust-en-content").show();
        $(".trust-cn-content").hide();
    });
}), function (n) {
    n(function () {
        function e(t) {
            if (!i) {
                i = !1;
                var r = -666;
                n(".large-slideshow").length !== 0 && (r = -960);
                n(".slideshow-control div.active").animate({ left: r }, 500, "linear", function () {
                    n(this).removeClass("active");
                    n(this).css("left", "");
                    i = !1;
                });
                n(".slideshow-control div" + t).css("display", "block");
                n(".slideshow-control div" + t).animate({ left: 0 }, 500, "linear", function () {
                    n(this).addClass("active");
                    n(this).css({ left: "", display: "" });
                });
                n(".s-ctrl .active").removeClass("active");
                n(".s-ctrl " + t).addClass("active");
            }
        }
        var r = ".bjqs", u = !1, f = !1, s, i, t;
        if (n(".home-hero-slideshow").length > 0) {
            s = function () {
                controlHtml = ['<ul class="slide-controls">'];
                for (var t = 1; t <= n(r + " li").length; t++)
                    controlHtml.push('<li><a href="#" id="sc' + t + '"><\/a><\/li>');
                controlHtml.push("<\/ul>");
                n(".home-hero-slideshow").append(controlHtml.join(""));
                n(".slide-controls a").first().addClass("active");
            }();
            function o(t) {
                if (typeof t == "undefined") {
                    var i = n(r + " li.active").next();
                    i.length !== 1 && (i = n(r + " li").first());
                    t = i.attr("class");
                }
                control = "sc" + t.replace("banner-", "");
                n(".slide-controls a.active").removeClass("active");
                n("#" + control).addClass("active");
                u = !0;
                n(r + " li.active").fadeOut(500, function () {
                    n(this).removeClass("active");
                });
                n("." + t + " .color-block").css({ left: 126, opacity: 0 });
                n("." + t).fadeIn(500, function () {
                    n(this).addClass("active");
                    u = !1;
                });
            }
            n(".slide-controls a").click(function (t) {
                t.preventDefault();
                n(this).hasClass("active") || (o("banner-" + n(this).attr("id").replace("sc", "")), f = !0);
            });
            n(".home-hero-slideshow").hover(function () {
                n(this).toggleClass("hover");
            });
            setInterval(function () {
                n(".home-hero-slideshow").hasClass("hover") || u || f || o();
                f = !1;
            }, 6e3);
        }
        i = !1;
        n(".s-ctrl a").click(function (t) {
            if (t.preventDefault(), !n(this).parent().hasClass("active"))
                if (i) {
                    var r = this;
                    setTimeout(function () {
                        e("." + n(r).parent().attr("class"));
                    }, 500);
                }
                else
                    e("." + n(this).parent().attr("class"));
            n(".slideshow-chunk").addClass("clicked");
        });
        n(".slideshow-chunk").hover(function () {
            n(this).toggleClass("hover");
        });
        n(".slideshow-chunk").length !== 0 && (t = { list: [], track: 0, isActive: !1, toSet: 0, current: "", seconds: 4e3 }, n(".s-ctrl li").each(function () {
            n(this).hasClass("active") && (t.isActive = !0, n(this).removeClass("active"));
            t.list[t.track] = n(this).attr("class");
            t.isActive && (t.isActive = !1, n(this).addClass("active"));
            t.track++;
        }), setInterval(function () {
            n(".slideshow-chunk.hover").length < 1 && n(".slideshow-chunk.clicked").length < 1 && (t.toSet = 0, t.track = 0, n(t.list).each(function () {
                t.current = "." + t.list[t.track];
                n(t.current).hasClass("active") && (t.toSet = t.track < t.list.length - 1 ? t.track + 1 : 0);
                t.track++;
            }), e("." + t.list[t.toSet]));
        }, t.seconds));
    });
}(jQuery);
clcids = { "en-us": "0x409", "es-es": "0x40a", "da-dk": "0x406", "de-de": "0x407", "fr-fr": "0x40c", "it-it": "0x410", "ja-jp": "0x411", "ko-kr": "0x412", "nb-no": "0x414", "nl-nl": "0x413", "pt-br": "0x416", "ru-ru": "0x419", "sv-se": "0x41d", "zh-cn": "0x804", "zh-tw": "0x404", "pl-pl": "0x415", "tr-tr": "0x41f" }, function (n) {
    n(function () {
        typeof clcids[langLocale] != "undefined" && n.each(n("a"), function () {
            var t = n(this).attr("href");
            t !== undefined && (t = t.toLowerCase(), t.indexOf("http://go.microsoft.com/") === 0 && t.indexOf("?linkid=") !== -1 && (t.indexOf("clcid=") !== -1 ? n(this).attr("href", t.replace(new RegExp("([?&]clcid=)([^&]*)"), "$1" + clcids[langLocale])) : n(this).attr("href", t + "&clcid=" + clcids[langLocale])));
        });
    });
}(jQuery);
$(document).ready(function () {
    $("#_faq-navigation > div").click(function () {
        $("#_faq-navigation > div").removeClass("_faq-active");
        $("#_faq-details > div").hide();
        $("#" + $(this).attr("id") + "-details").show();
        $(this).addClass("_faq-active");
    });
}), function (n) {
    var i = 0, t, r;
    n(document).ready(function () {
        addMouseEvent();
        timerStart();
    });
    addMouseEvent = function () {
        tileHover("one");
        tileHover("two");
        tileHover("three");
        contentHover("adv1");
        contentHover("adv2");
        contentHover("adv3");
        contentHover("disadv1");
        contentHover("disadv2");
        contentHover("disadv3");
        contentHover("disadv4");
    };
    tileHover = function (t) {
        n("#" + t).hover(function () {
            n(".tileHoverOut", this).stop().animate({ "margin-top": "145px" }, 300);
            n(".tileHoverOver", this).stop().animate({ "margin-top": "0px" }, 300);
        }, function () {
            n(".tileHoverOut", this).stop().animate({ "margin-top": "0px" }, 300);
            n(".tileHoverOver", this).stop().animate({ "margin-top": "-145px" }, 300);
        });
    };
    contentHover = function (t) {
        n("#" + t).hover(function () {
            advOnMouseover(t);
        }, function () {
            advOnMouseout(t);
        });
    };
    advOnMouseover = function (n) {
        var t = document.getElementById(n);
        t != null && (t.firstElementChild.style.color = "#1688ca", t.lastElementChild.style.color = "#000000");
    };
    advOnMouseout = function (n) {
        var t = document.getElementById(n);
        t != null && (t.firstElementChild.style.color = "#00a8d9", t.lastElementChild.style.color = "#505050");
    };
    t = 0;
    opacityChange = function () {
        t <= 1 ? (t += .1, n("#animation2").css("opacity", t), n("#animation3").css("opacity", t)) : clearInterval(r);
    };
    timerStartSub = function () {
        r = setInterval("opacityChange()", 100);
    };
    timerStart = function () {
        setTimeout("timerStartSub()", 1e3);
    };
}(jQuery), function (n) {
    jQuery().xiaoicedraggable || (n.fn.xiaoicedraggable = function (t) {
        this.css("cursor", "move").on("mousedown touchstart", function (i) {
            var r = n(this), u = n(t), f = r.offset().left - i.pageX, e = r.offset().top - i.pageY, o = r.css("z-index");
            n.fn.draggable.stack || (n.fn.draggable.stack = 999);
            stack = n.fn.draggable.stack;
            n(window).on("mousemove.draggable touchmove.draggable", function (n) {
                u.css({ "z-index": stack, transform: "scale(1.1)", transition: "transform .3s", bottom: "auto", right: "auto" }).offset({ left: f + n.pageX, top: e + n.pageY }).find("a").one("click.draggable", function (n) {
                    n.preventDefault();
                });
                n.preventDefault();
            }).one("mouseup touchend touchcancel", function () {
                n(this).off("mousemove.draggable touchmove.draggable click.draggable");
                n.fn.draggable.stack++;
            });
            i.preventDefault();
        });
        return this;
    });
}(jQuery);
$("#xb_lite_headerinfo_id").xiaoicedraggable("#xb_main_wrap_id");
$(function () {
    $(".inner-service").hide();
    SHDRefreshCurrentStatusData();
    SHDLoadHistoryData(allString, allString, currentString);
    intervalId = setInterval(SHDRefreshCurrentStatusData, defaultRefreshTime);
    $("#shd-page .tab .current-status-tab").click(function () {
        $("#shd-page .current-status").show();
        $("#shd-page .history").hide();
        $(this).addClass("active");
        $("#shd-page .tab .history-tab").removeClass("active");
    });
    $("#shd-page .tab .history-tab").click(function () {
        $("#shd-page .current-status").hide();
        $("#shd-page .history").show();
        $(this).addClass("active");
        $("#shd-page .tab .current-status-tab").removeClass("active");
    });
    $("#close-east").click(function () {
        $(".east-filter").hide();
        $(".china-east-column").hide();
    });
    $("#close-north").click(function () {
        $(".north-filter").hide();
        $(".china-north-column").hide();
    });
    $(".region-filter .label").click(function () {
        $(".east-filter").show();
        $(".china-east-column").show();
        $(".north-filter").show();
        $(".china-north-column").show();
    });
    $("#shd-page .dashboard table .close-row").click(function () {
        var t = $(this).parent().parent(), i, n;
        for (t.hide(), t.hasClass("expanded") && $("." + t.attr("id") + "-item").hide(), i = $(this).parent().parent().index(), n = i - 1; n >= 0; n--)
            if ($("#shd-page .dashboard table tr:eq(" + n + ")").hasClass("head")) {
                $("#shd-page .dashboard table tr:eq(" + n + ") .show-all").show();
                break;
            }
    });
    $("#shd-page .current-status .dashboard table tr .show-all").click(function () {
        for (var t = $(this).parent().parent().index(), i = $("#shd-page .current-status .dashboard table tr").length, n = t + 1; n < i; n++)
            if ($("#shd-page .dashboard table tr:eq(" + n + ")").hasClass("head"))
                break;
            else
                $("#shd-page .dashboard table tr:eq(" + n + ")").hasClass("inner-service") || ($("#shd-page .dashboard table tr:eq(" + n + ")").show(), $("#shd-page .dashboard table tr:eq(" + n + ")").removeClass("open"), $("#shd-page .dashboard table tr:eq(" + n + ") .service-name .icon").text("+"), $(this).hide());
    });
    $("#shd-page table th .service-name").each(function () {
        $(this).click(function () {
            var n = $(this).parent().parent();
            n.hasClass("open") ? ($("." + n.attr("id") + "-item").hide(), $("#" + n.attr("id") + " .service-name .icon").text("+"), n.removeClass("open")) : ($("." + n.attr("id") + "-item").show(), $("#" + n.attr("id") + " .service-name .icon").text("-"), n.addClass("open"));
        });
    });
});
var intervalId, defaultRefreshTime = 6e5, bannerStatusOKIconSrc = "http://wacnstoragestaging.blob.core.chinacloudapi.cn/marketing-resource/css/images/normal_big.png", bannerStatusWarningSrc = "http://wacnstoragestaging.blob.core.chinacloudapi.cn/marketing-resource/css/images/warning_big.png", bannerStatusErrorSrc = "http://wacnstoragestaging.blob.core.chinacloudapi.cn/marketing-resource/css/images/error_big.png", bannerStatusInfomationSrc = "http://wacnstoragestaging.blob.core.chinacloudapi.cn/marketing-resource/css/images/information_big.png", headerStatusOKIconSrc = "http://wacnstoragestaging.blob.core.chinacloudapi.cn/marketing-resource/css/images/normal2.png", tableStatusOKIconSrc = "http://wacnstoragestaging.blob.core.chinacloudapi.cn/marketing-resource/css/images/normal.png", statusWarningIconSrc = "http://wacnstoragestaging.blob.core.chinacloudapi.cn/marketing-resource/css/images/Legend_warning.png", statusErrorIconSrc = "http://wacnstoragestaging.blob.core.chinacloudapi.cn/marketing-resource/css/images/Legend_error.png", statusInformationSrc = "http://wacnstoragestaging.blob.core.chinacloudapi.cn/marketing-resource/css/images/Legend_info.png", statusIconMapping = { banner_ok: bannerStatusOKIconSrc, banner_warning: bannerStatusWarningSrc, banner_error: bannerStatusErrorSrc, banner_information: bannerStatusInfomationSrc, header_ok: headerStatusOKIconSrc, header_warning: statusWarningIconSrc, header_error: statusErrorIconSrc, header_information: statusInformationSrc, table_ok: tableStatusOKIconSrc, table_warning: statusWarningIconSrc, table_error: statusErrorIconSrc, table_information: statusInformationSrc }, headerStatusTextMapping = { core_platform_ok: "Azure核心平台组件正在正常运行", core_platform_warning: "Azure核心平台组件：性能警告", core_platform_error: "Azure核心平台组件：服务中断", core_platform_information: "Azure核心平台组件：附加信息", all_services_ok: "常用服务正常运行", all_services_warning: "常用服务：性能警告", all_services_error: "常用服务：服务中断", all_services_information: "常用服务：附加信息" }, statusOrder = { ok: 0, information: 1, warning: 2, error: 3 }, statusList = { ok: "ok", information: "information", warning: "warning", error: "error" }, currentString = "current", allString = "all", serviceFilterValue, regionFilterValue, dateFilterValue, itemNumberOnOnePage = 10;
langLocale = getLangLocale(), function (n) {
    n(function () {
        function k(t, i) {
            n("a._channel9-popup").click(function (r) {
                r.preventDefault();
                var u = i;
                n(this).hasClass("vid-fix") && (u += 15);
                n("body").append('<div class="popup-video-shader"><div class="popup-video-wrapper"><div class="popup-video-close">&nbsp;<\/div><div class="popup-video-frame"><\/div><\/div><\/div>');
                videoContents = '<iframe style="height:' + u + "px;width:" + t + 'px" src="' + n(this).attr("href") + "player/?w=" + t + "&h=" + i + '#time=0s" frameBorder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen><\/iframe>';
                n(".popup-video-wrapper").css({ width: t, height: u, "margin-top": u / -2, "margin-left": t / -2 });
                n(".popup-video-frame").append(videoContents);
                n(".popup-video-close").click(function () {
                    n(".popup-video-shader").hide();
                    n(".popup-video-frame").children().attr("src", "");
                    n(".popup-video-frame").empty();
                    n(".popup-video-shader").remove();
                });
            });
            var r = 0;
            n(document).on("click", "a._storage-video-popup", function (u) {
                var f, e, o, s;
                u.preventDefault();
                f = i;
                n(this).hasClass("vid-fix") && (f += 15);
                n("body").append('<div class="popup-video-shader"><div class="popup-video-wrapper"><div class="popup-video-close">&nbsp;<\/div><div class="popup-video-frame"><\/div><\/div><\/div>');
                e = '<video id="azuremediaplayer' + r + '" class="azuremediaplayer amp-default-skin amp-big-play-centered"><\/video>';
                n(".popup-video-wrapper").css({ width: t, height: f, "margin-top": f / -2, "margin-left": t / -2 });
                n(".popup-video-frame").append(e);
                n(".popup-video-close").click(function () {
                    n(".popup-video-shader").hide();
                    n(".popup-video-frame").children().attr("src", "");
                    n(".popup-video-frame").empty();
                    n(".popup-video-shader").remove();
                });
                o = { nativeControlsForTouch: !1, autoplay: !0, controls: !0, width: "640", height: "400", poster: "" };
                s = amp("azuremediaplayer" + r, o);
                s.src([{ src: n(this).attr("href"), type: "application/vnd.ms-sstr+xml" },]);
                r++;
            });
        }
        function w(t, i) {
            n("a.channel9-popup").click(function (r) {
                r.preventDefault();
                var u = i;
                n(this).hasClass("vid-fix") && (u += 15);
                n("body").append('<div class="popup-video-shader"><div class="popup-video-wrapper"><div class="popup-video-close">&nbsp;<\/div><div class="popup-video-frame"><\/div><\/div><\/div>');
                videoContents = '<iframe style="height:' + u + "px;width:" + t + 'px" src="' + n(this).attr("href") + "player/?w=" + t + "&h=" + i + '#time=0s" frameBorder="0" scrolling="no" ><\/iframe>';
                n(".popup-video-wrapper").css({ width: t, height: u, "margin-top": u / -2, "margin-left": t / -2 });
                n(".popup-video-frame").append(videoContents);
                n(".popup-video-shader, .popup-video-close").click(function () {
                    n(".popup-video-shader").hide();
                    n(".popup-video-frame").children().attr("src", "");
                    n(".popup-video-frame").empty();
                    n(".popup-video-shader").remove();
                });
            });
        }
        function g() {
            n("a.channel9-popup").unbind("click");
        }
        var t, e, i, u, c, y, o, r, l, p, s, f, v;
        k(640, 360);
        n("._homepage-tilegroupinline > div").hover(function () {
            n("._homepage-tilegroupinline > div").removeClass("_homepage-selected");
            n("._homepage-hover-solution > div").hide();
            n("#" + n(this).attr("id") + "-details").show();
            n(this).addClass("_homepage-selected");
        });
        try {
            typeof window.external.msAddSiteMode != "undefined" && window.external.msIsSiteMode() && (window.external.msSiteModeCreateJumplist("Resources"), window.external.msSiteModeAddJumpListItem("Customer Support", "http://www.windowsazure.cn/zh-cn/support/contact/?jl=t", "http://az83882.vo.msecnd.net/favicon.ico"), window.external.msSiteModeAddJumpListItem("Your Billing Account", "https://account.windowsazure.cn/?jl=t", "http://az83882.vo.msecnd.net/favicon.ico"), window.external.msSiteModeAddJumpListItem("Management Portal", "https://go.microsoft.com/fwlink/?LinkId=236045&jl=t", "http://az83882.vo.msecnd.net/favicon.ico"), window.external.msSiteModeShowJumplist());
        }
        catch (nt) {
        }
        if (n(".wizard-style").each(function () {
            var t = "." + n(this).attr("id"), i = "#" + n(this).attr("id");
            n(t).click(function (t) {
                t.preventDefault();
                n(i).fadeToggle(200);
            });
        }), n(".solution-template").length !== 0 && (solutionTabSet = n(".solution-template .tabs a"), solutionSectionSet = n(".solution-template .section"), solutionTabSet.click(function (t) {
            t.preventDefault();
            n(this).hasClass("active") || (solutionTabSet.removeClass("active"), solutionSectionSet.removeClass("active"), window.location.hash = "#" + n(this).attr("class"), newActive = ".section." + n(this).attr("class"), n(this).addClass("active"), n(newActive).addClass("active"));
        }), window.location.hash && n("a." + window.location.hash.slice(1)).trigger("click"), last_known_hash = location.hash, window.setInterval(function () {
            last_known_hash != location.hash && (!n('.solution-template .tabs a[href="#benefits"]').hasClass("active") && location.hash.length <= 0 ? (solutionTabSet.removeClass("active"), solutionSectionSet.removeClass("active"), n('.solution-template .tabs a[href="#benefits"]').addClass("active"), n(".solution-template .section.benefits").addClass("active")) : n('.solution-template .tabs a[href="' + location.hash + '"]').click(), last_known_hash = location.hash);
        }, 300)), t = ".step-by-step-guide", n(t).length > 0) {
            e = n(t + " .guide-steps > div").length;
            n(t + " .legend .total").html(e);
            i = 0;
            n(t + " .view-all").click(function (i) {
                i.preventDefault();
                n(t + " .active").removeClass("active");
                n(t + " .default").addClass("active");
            });
            n(t + " .default a").click(function (t) {
                t.preventDefault();
                h("." + n(this).attr("class"));
            });
            n(t + " .previous").click(function (n) {
                n.preventDefault();
                i > 1 && h(".step-" + (parseInt(i) - 1));
            });
            n(t + " .next").click(function (n) {
                n.preventDefault();
                i < e && h(".step-" + (parseInt(i) + 1));
            });
            function h(r) {
                i = r.substr(r.length - 1);
                n(t + " .disabled").removeClass("disabled");
                parseInt(i) === 1 ? n(t + " .legend .previous").addClass("disabled") : parseInt(i) === e && n(t + " .legend .next").addClass("disabled");
                n(t + " .active").removeClass("active");
                n(t + " .legend .current").html(i);
                n(t + " .legend").addClass("active");
                n(t + " " + r).addClass("active");
            }
        }
        if (n(".horizontal-selector-wrapper .horizontal-selector a").click(function (t) {
            t.preventDefault();
            n(".horizontal-selector-wrapper .current").removeClass("current");
            var i = "." + n(this).attr("class");
            n(".horizontal-selector-wrapper " + i).addClass("current");
        }), n(".service-doc-page").length !== 0) {
            n(".horizontal-option-selector a").click(function (t) {
                var i, r;
                t.preventDefault();
                n(".horizontal-option-selector .active").removeClass("active");
                i = "." + n(this).attr("class");
                n(".horizontal-option-selector " + i).addClass("active");
                r = n(this).parents(".selector-wrap");
                n(r).find(".article-group.active").removeClass("active");
                n(r).find(".article-group." + i).addClass("active");
            });
            n(".hero-gallery ul a.image-link, .hero-gallery ul a.video-link").click(function (t) {
                var r;
                if (t.preventDefault(), !n(this).hasClass("active")) {
                    n(".gallery-frame iframe").attr("src", "");
                    n(".gallery-frame").empty();
                    var u = n(this).attr("href"), f = n(this).attr("id"), i = n(this).data("desc");
                    i = typeof i != "undefined" ? '<span class="desc">' + i + "<\/span>" : "";
                    g();
                    n(this).hasClass("video-link") ? (r = "", n(this).hasClass("fix-vid") && (r = " vid-fix"), n(".gallery-frame").append('<a class="gallery-vid' + r + " channel9-popup " + f + '" href="' + u + '"><span class="play-btn">&nbsp;<\/span>' + i + "<\/a>"), w(640, 360)) : n(this).hasClass("image-link") && n(".gallery-frame").append('<a class="gallery-img ' + f + '" href="' + u + '">' + i + "<\/a>");
                    n(".hero-gallery ul a").removeClass("active");
                    n(this).addClass("active");
                }
            });
            n(".hero-gallery ul a.default").click();
            n(".section.videos .vid-thumb").click(function (t) {
                if (t.preventDefault(), !n(this).hasClass("active")) {
                    n(".videos .video-player iframe").attr("src", "");
                    n(".videos .video-wrapper").empty();
                    n(".videos .video-wrapper").removeClass("wrap-fix");
                    var i = '<a class="video-overlay ' + n(this).attr("class").match(/vt\d/) + '" href="' + n(this).attr("href") + '"><span class="play-btn">&nbsp;<\/span><span class="desc">' + n(this).data("tooltip") + "<\/span><\/a>";
                    n(".videos .video-wrapper").append(i);
                    n(".section.videos .vid-thumb").removeClass("active");
                    n(this).addClass("active");
                    n(this).hasClass("fix-vid") && n(".videos .video-wrapper .video-overlay").addClass("fix-vid");
                }
                d();
            });
            function d() {
                n(".videos .video-wrapper .video-overlay").click(function (t) {
                    var i, r, u;
                    t.preventDefault();
                    n(this).unbind("click");
                    n(this).click(function (n) {
                        n.preventDefault();
                    });
                    i = 349;
                    n(this).hasClass("fix-vid") && (i = 365, n(".videos .video-wrapper").addClass("wrap-fix").append('<div class="video-fix"><\/div>'));
                    r = '<div class="video-player"><iframe style="height:' + i + 'px;width:620px" src="' + n(this).attr("href") + 'player?w=620&amp;h=349#time=0s" frameBorder="0" scrolling="no" ><\/iframe><\/div>';
                    n(".videos .video-wrapper").append(r);
                    u = this;
                    window.setInterval(function () {
                        n(u).fadeOut(300);
                    }, 1e3);
                });
            }
            n(".section.videos .vid-thumb.vt1").click();
            n(".section.videos .vid-thumb").each(function () {
                var t = n(this).data("tooltip");
                typeof t != "undefined" && n(this).append('<div class="tooltip-wrap"><span class="vid-tooltip">' + t + '<\/span><\/div><span class="triangle"><\/span>');
            });
            n(".article-group .seemorelink, .article-group .seelesslink").click(function (t) {
                t.preventDefault();
                var i = n(this).parents(".article-group");
                n(i).find(".seemorelink").toggle();
                n(i).find(".seelesslink").toggle();
                n(i).find(".group-toggle").toggle();
            });
        }
        n(".show-hide .switch").click(function (t) {
            t.preventDefault();
            n(this).parent().toggleClass("shown");
        });
        n(".wizard-close, .wizard-exit, .wizard-style ").click(function () {
            n(".wizard-style").fadeToggle(200);
        });
        n(".wizard-style div").click(function (n) {
            n.stopPropagation();
        });
        n(".switchfreetriallink #A1").attr("href", "/zh-cn/pricing/1rmb-trial/");
        typeof freeTrialReturnUrl != "undefined" && n(".switchfreetriallink").length !== 0 && (u = n(".switchfreetriallink #A1").attr("href"), u = u + "&returnurl=" + freeTrialReturnUrl, n(".switchfreetriallink #A1").attr("href", u), n(".switchfreetriallink .freetriallink").attr("href", u));
        n(".dynamic-leftnav").length !== 0 && (c = "default", n("h1").attr("id") !== undefined && (c = n("h1").attr("id")), y = ".static-nav ." + c, n(y).addClass("active"), n("h2").each(function (t, i) {
            var u = "header-" + t, r;
            n(i).attr("id", u);
            r = n(i).find("span");
            r.length === 0 && (r = i);
            n(".floating-nav.jump-to > ul").append("<li><a href='#" + u + "'>" + strip(n(r).html()) + "<\/a><\/li>");
        }), typeof offerID != "undefined" && n(".offer-plan").length !== 0 ? (n(".left-nav .site-arrowboxcta").attr("href", "https://account.windowsazure.com/signup?offer=" + offerID), typeof offerActivate != "undefined" && offerActivate && (n(".left-nav .offer-btn-buy").hide(), n(".left-nav .offer-btn-activate").show())) : n(".left-nav .site-arrowboxcta").hide());
        n(".solutions-picker").length !== 0 && (solutions_urls = { infra: "/solutions/infrastructure/", devtest: "/solutions/dev-test/", web: "/solutions/web/", mobile: "/solutions/mobile/", bigdata: "/solutions/big-data/", media: "/solutions/media/", backup: "/solutions/storage-backup-recovery/", saas: "/solutions/identity/" }, n(".solutions-picker .solutions-blocks li").hover(function () {
            n(".solutions-picker .solutions-blocks li").removeClass("selected");
            n(".solutions-hover-contents > div").hide();
            n(".solutions-hover-contents ." + n(this).attr("class") + "-cont").show();
            n(this).addClass("selected");
        }), n(".solutions-picker .solutions-blocks li").click(function () {
            var t = solutions_urls[n(this).attr("class").replace(" selected", "")];
            window.location = "/" + langLocale + t;
        }));
        n(".page-overview-enterprise-it").length !== 0 && (n(".solutions-blocks .backup").addClass("selected"), n(".solutions-hover-contents .backup-cont").show());
        n(".page-overview-application-hosting").length !== 0 && (n(".solutions-blocks .web").addClass("selected"), n(".solutions-hover-contents .web-cont").show());
        n(".azure-standard-select").length !== 0 && n(".page-community-events").length === 0 && (n(".azure-standard-select > a").click(function (t) {
            t.preventDefault();
            t.stopPropagation();
            n(this).parent().find(".list").css("display") == "block" ? n(this).parent().find(".list").fadeOut(200) : (n(".azure-standard-select .list").hide(), n(this).parent().find(".list").fadeIn());
        }), n("html").click(function () {
            n(".azure-standard-select .list").hide();
        }), n(".azure-standard-select .list a").click(function (t) {
            t.preventDefault();
            n(".azure-standard-select .list a").removeClass("active");
            n(this).addClass("active");
            n(this).parents(".azure-standard-select").find("> a").text(n(this).text());
        }));
        n(".poster-page").length !== 0 && (n(".download-poster").attr("href", n(".select-language .active").attr("href")), n(".azure-standard-select .list a").click(function () {
            n(".download-poster").attr("href", n(this).attr("href"));
        }));
        n(".nav-expander *").click(function (n) {
            n.stopPropagation();
        });
        n(".nav-expander .trigger").click(function (t) {
            var i, r;
            t.preventDefault();
            t.stopPropagation();
            i = n(this).parent();
            n(i).hasClass("active") ? n(i).removeClass("active") : (n(".nav-expander.active").removeClass("active"), n(i).addClass("active"));
            n(i).find(".nav-has-submenu > a.active").length === 0 ? n(i).find(".nav-has-submenu.default > a").click() : n(i).find(".nav-has-submenu > a.active").click();
            r = function () {
                n(i).removeClass("active");
                i = null;
                n("html").unbind("click", r);
                r = null;
                n(".nav-expander-div > div > ul").css("min-height", 0);
            };
            n("html").bind("click", r);
        });
        n(".nav-has-submenu > a").click(function (t) {
            var i, r;
            t.preventDefault();
            i = n(this).parent().parent();
            i.find(".nav-submenu").hide();
            r = n(this).parent().children(".nav-submenu");
            r.show();
            i.css("min-height", r.height());
            i.find(".nav-has-submenu > a").removeClass("active");
            n(this).addClass("active");
        });
        n('.nav-expander a[href="' + window.location.pathname + window.location.search + '"]').length !== 0 ? o = '.nav-expander a[href="' + window.location.pathname + window.location.search + '"]' : n('.nav-expander a[href="' + window.location.pathname + window.location.hash + '"]').length !== 0 ? o = '.nav-expander a[href="' + window.location.pathname + window.location.hash + '"]' : n('.nav-expander a[href="' + window.location.pathname + '"]').length !== 0 && (o = '.nav-expander a[href="' + window.location.pathname + '"]');
        n(o).addClass("current");
        n(".nav-submenu a.current").parents(".nav-has-submenu").children("a").addClass("current");
        r = window.location.pathname.split("/")[2];
        switch (r) {
            case "overview":
                r = "solutions";
                break;
            case "services":
                r = "solutions";
                break;
            case "develop":
                r = "documentation";
                break;
            case "manage":
                r = "documentation";
                break;
            case "offers": r = "pricing";
        }
        if (r !== "" && n('.nav-expander > .trigger[href="#' + r + '"]').addClass("current"), n(".styled-list li").click(function () {
            window.location.href = n(this).find("a").attr("href");
        }), l = ".tabber-wrapper .tabber-selector a", p = ".tabber-wrapper .tabber-content div", n(l).click(function (t) {
            t.preventDefault();
            n(l).removeClass("selected");
            n(p).removeClass("selected");
            var i = ".tabber-wrapper ." + n(this).attr("class");
            n(i).addClass("selected");
        }), n(".page-downloads").length !== 0 && (n(".page-downloads .dev-nav li").click(function () {
            n(this).hasClass("header") || (n(".page-downloads .dev-nav li.selected").removeClass("selected"), n(this).addClass("selected"));
        }), n(document).ready(function () {
            n("." + getParameterByName("sdk")).length ? (n(".page-downloads .dev-nav li.selected").removeClass("selected"), n("." + getParameterByName("sdk")).addClass("selected"), n("." + getParameterByName("sdk") + "-cont").show()) : (n(".page-downloads .dev-nav li.selected").removeClass("selected"), n(".mobile").addClass("selected"), n(".mobile-cont").show());
        }), n(".page-downloads .dev-nav li.mobile").click(function () {
            n(".dev-content").children().hide();
            n(".mobile-cont").show();
        }), n(".page-downloads .dev-nav li.media").click(function () {
            n(".dev-content").children().hide();
            n(".media-cont").show();
        }), n(".page-downloads .dev-nav li.net").click(function () {
            n(".dev-content").children().hide();
            n(".net-cont").show();
        }), n(".page-downloads .dev-nav li.node").click(function () {
            n(".dev-content").children().hide();
            n(".node-cont").show();
        }), n(".page-downloads .dev-nav li.php").click(function () {
            n(".dev-content").children().hide();
            n(".php-cont").show();
        }), n(".page-downloads .dev-nav li.java").click(function () {
            n(".dev-content").children().hide();
            n(".java-cont").show();
        }), n(".page-downloads .dev-nav li.python").click(function () {
            n(".dev-content").children().hide();
            n(".python-cont").show();
        }), n(".page-downloads .dev-nav li.ruby").click(function () {
            n(".dev-content").children().hide();
            n(".ruby-cont").show();
        })), n(document).ready(function () {
            n(".dev-callout-new-expanded").addClass("dev-callout-new");
            n(".dev-callout-new-expanded").addClass("expanded");
            n(".dev-callout-new").addClass("expanded");
        }), n(".dev-callout-new > strong").click(function () {
            n(this).parent().toggleClass("expanded");
        }), n(".dev-callout-new-collapsed > strong").click(function () {
            n(this).parent().toggleClass("expanded");
        }), n(".dev-callout-expand-all").click(function (t) {
            t.preventDefault();
            n(".dev-callout-new").addClass("expanded");
            n(".dev-callout-new-collapsed").addClass("expanded");
        }), n(".dev-callout-collapse-all").click(function (t) {
            t.preventDefault();
            n(".dev-callout-new").removeClass("expanded");
            n(".dev-callout-new-collapsed").removeClass("expanded");
        }), n(".selector-os li a").click(function () {
            n(".selector-os li").removeClass("current");
            n(this).parent("li").addClass("current");
            n(".dev-center-hero-aside .dev-get-started").attr("href", n(this).attr("data-rel"));
        }), n(".collapsible-content-container > h2 > a").click(function (t) {
            t.preventDefault();
            n(this).parent().parent().toggleClass("expanded");
        }), n.each(n(".gallery"), function () {
            var t = this;
            n(this).find("ul a").click(function (i) {
                i.preventDefault();
                n(t).find("a.active").removeClass("active");
                n(t).find(".viewer").css("background-image", n(this).css("background-image"));
                n(t).find(".viewer span").html(n(this).find("span").html());
                n(this).addClass("active");
            });
            n(this).find(".viewer .prev").click(function () {
                var i = n(t).find("ul a.active").parent().prev().children().first();
                i.length === 0 && (i = n(t).find("ul").children().last().children().first());
                n(t).find("a.active").removeClass("active");
                n(t).find(".viewer").css("background-image", n(i).css("background-image"));
                n(t).find(".viewer span").html(n(i).find("span").html());
                n(i).addClass("active");
            });
            n(this).find(".viewer .next").click(function () {
                var i = n(t).find("ul a.active").parent().next().children().first();
                i.length === 0 && (i = n(t).find("ul").children().first().children().first());
                n(t).find("a.active").removeClass("active");
                n(t).find(".viewer").css("background-image", n(i).css("background-image"));
                n(t).find(".viewer span").html(n(i).find("span").html());
                n(i).addClass("active");
            });
        }), n(".faq-page").length !== 0 && (n(".question > a").click(function (t) {
            t.preventDefault();
            n(this).parent().toggleClass("active");
        }), n(".question-expand-all").click(function (t) {
            t.preventDefault();
            n(".question").addClass("active");
        }), n(".question-collapse-all").click(function (t) {
            t.preventDefault();
            n(".question").removeClass("active");
        })), n("a.video-popup").click(function (t) {
            t.preventDefault();
            n("body").append('<div class="popup-video-shader"><div class="popup-video-wrapper"><div class="popup-video-close">close<\/div><div class="popup-video-frame"><\/div><\/div><\/div>');
            var i = n(this).attr("id").split("-"), r;
            switch (i[0]) {
                case "mscasestudy":
                    r = '<iframe width="' + i[2] + '" height="' + i[3] + '" scrolling="no" frameborder="0" src="http://www.microsoft.com/casestudies/video/Embed.aspx?fr=' + i[1] + '"><\/iframe>';
                    n(".popup-video-wrapper").css({ width: i[2], height: i[3], "margin-top": i[3] / -2, "margin-left": i[2] / -2 });
                    break;
                case "youtube":
                    r = '<iframe width="640" height="360" src="http://www.youtube.com/embed/i8MOJho5TDs?rel=0" frameborder="0" allowfullscreen><\/iframe>';
                    n(".popup-video-wrapper").css({ width: 640, height: 360, "margin-top": -180, "margin-left": -320 });
            }
            n(".popup-video-frame").append(r);
            n(".popup-video-shader, .popup-video-close").click(function () {
                n(".popup-video-shader").hide();
                n(".popup-video-frame").children().attr("src", "");
                n(".popup-video-frame").empty();
                n(".popup-video-shader").remove();
            });
        }), n(".page-overview-enterprise-it").length !== 0 && w(640, 360), n(".page-legal-services-terms, .page-legal-waa").length !== 0 && (n("#language-choice").val(n("#language-choice .default").val()), n("#language-choice").change(function () {
            var t = n("#language-choice option:selected").attr("value");
            setParameterByName("language", t);
        })), n(".page-legal-waa").length !== 0 && (n("#country-choice").val(n("#country-choice .default").val()), n("#country-choice").change(function () {
            var t = n("#country-choice option:selected").attr("value");
            setParameterByName("country", t);
        })), n(".page-case-studies-archive").length !== 0) {
            function b() {
                var t = n(".archive-jumplink-selector .active").attr("id");
                n(".case-study-block").removeClass("active");
                n("h2.dynamic-title").text(n("#" + t).text());
                n(".case-study-block." + t).addClass("active");
            }
            b();
            n(".archive-jumplink-selector a").click(function (t) {
                t.preventDefault();
                n(this).hasClass("active") || (n(".archive-jumplink-selector a").removeClass("active"), n(this).addClass("active"), b());
            });
        }
        if (n(".pricing-details-page").length !== 0) {
            function a(t, i) {
                var r = ".s2 .details." + t;
                typeof i != "undefined" && (r += "." + i);
                n(r).hasClass("active") || n(".s2 .details.active").fadeOut(300, function () {
                    n(this).removeClass("active");
                    n(r).fadeIn(300, function () {
                        n(r).addClass("active");
                    });
                });
            }
            n(".plan-selector a").click(function (t) {
                if (t.preventDefault(), !n(this).hasClass("selected")) {
                    n(".plan-option-selector").length !== 0 ? a(n(this).attr("id"), n(".plan-option-selector a.selected").attr("id")) : a(n(this).attr("id"));
                    n(".plan-selector a.selected").removeClass("selected");
                    n(this).addClass("selected");
                    var i = n(this).position().left + n(this).width() / 2 - 19;
                    n(".plan-selector .triangle").animate({ left: i }, 600);
                }
            });
            n(".plan-option-selector a").click(function (t) {
                t.preventDefault();
                n(this).hasClass("selected") || (a(n(".plan-selector a.selected").attr("id"), n(this).attr("id")), n(".plan-option-selector a.selected").removeClass("selected"), n(this).addClass("selected"));
            });
            n("#currency_icons").hover(function () {
                n(this).toggleClass("hover");
                n("#currency_icons").removeClass("clicked");
            });
            n("#currency_icons li").click(function () {
                var t = n(this).attr("class");
                t != "current-currency" && (n("#currency_icons li").removeAttr("style"), n(this).removeClass("hover").css("background-color", "#f8f8f8"), changeCurrency(t));
                n(".current-currency").html(n(this).html() + "<span class='indicator'><\/span>");
                n("#currency_icons").addClass("clicked");
            });
        }
        if (n(".community-events-page").length === 0 && n(".page-community-events").length !== 0 && (n(".select-country > a").click(function (t) {
            t.preventDefault();
            t.stopPropagation();
            n(".select-country .country-list").fadeToggle(200);
        }), n("html").click(function () {
            n(".select-country .country-list").css("display") == "block" && n(".select-country .country-list").fadeOut(200);
        }), n(".select-country .country-list").click(function (n) {
            n.stopPropagation();
        })), s = window.location.href, s.indexOf("searchresults/?query=") != -1) {
            f = s.substring(s.indexOf("query=") + 6);
            f = f.split("&")[0];
            try {
                typeof decodeURIComponent != "undefined" ? n("#MainSearchBox").val(decodeURIComponent(f)) : n("#MainSearchBox").val(unescape(f));
            }
            catch (nt) {
                n("#MainSearchBox").val("");
            }
        }
        v = n(".search-box");
        n("#MainSearchBox").focus(function () {
            v.addClass("focus");
        });
        n("#MainSearchBox").blur(function () {
            v.removeClass("focus");
        });
        n("html, .site-flag .close").click(function () {
            n(this).closest(".site-flag").fadeOut(200);
        });
        n(".site-flag").bind("click", function (n) {
            n.stopPropagation();
        });
        n("code").addClass("prettyprint");
        prettyPrint();
    });
}(jQuery);
$(window).load(function () {
    if ($(".page-store").length !== 0) {
        var n = $(".app-long-description").height();
        n > 260 && ($(".app-long-description").css("height", 257), $(".minimize-description #readless").hide(), $(".minimize-description").show(), $(".app-long-description").addClass("trans"), $(".minimize-description #readmore").click(function () {
            $(".app-long-description").removeClass("minimized");
            $(".app-long-description").css("height", n);
            $(".minimize-description #readmore").fadeOut(300, function () {
                $(".minimize-description #readless").fadeIn(300);
            });
        }), $(".minimize-description #readless").click(function () {
            $(".app-long-description").addClass("minimized");
            $(".app-long-description").css("height", 257);
            $(".minimize-description #readless").fadeOut(300, function () {
                $(".minimize-description #readmore").fadeIn(300);
            });
        }));
    }
});
$(document).on("click", ".modal .close", function (n) {
    n.preventDefault();
    $(this).parents(".modal").addClass("hide");
});
$(document).on("click", ".modal .btn-cancel", function (n) {
    n.preventDefault();
    $(this).parents(".modal").addClass("hide");
});
$(document).on("click", ".checkbox-rect,.checkbox-round", function (n) {
    n.preventDefault();
    $(this).toggleClass("active");
    $(this).trigger("updated");
});
(function (n, t) {
    function i(i) {
        var r, u, f, o, e;
        n("#templPricingShopingList").length != 0 && (r = localStorage.getItem("selectedItems") || "[]", r = JSON.parse(r), u = [], f = 0, t(r).each(function (n) {
            var r = !0;
            t(i).each(function (t) {
                n.key == t.key && (r = !1);
            });
            r && u.push(f);
            f += 1;
        }), o = t(u).map(function (t) {
            return n(".sidebar-win.calculator .calcul-item:nth-child(" + (t + 1) + ")").animate({ height: 0, margin: 0 });
        }), n.when.apply(n, o).then(function () {
            i = t(i).map(function (n) {
                return typeof n.hour != "undefined" && (n.currentMoney = n.totalMoney * n.hour / 744, n.currentMoney = n.currentMoney.toFixed(2)), n;
            });
            localStorage.setItem("selectedItems", JSON.stringify(i));
            var r = n("#templPricingShopingList").html(), u = t.template(r)({ shopingList: i });
            n(".calcul-list").html(u);
        }), e = 0, t(i).each(function (n) {
            e += parseFloat(n.currentMoney);
        }), n(".sidebar-win.calculator .summary .num").text("￥" + e.toFixed(2)), i.length >= 3 ? n(".sidebar-win.calculator .total p").css({ margin: "0 20px" }) : n(".sidebar-win.calculator .total p").css({ margin: "0 5px" }), i.length != 0 ? n(".sidebar-win.calculator").removeClass("empty") : n(".sidebar-win.calculator").addClass("empty"));
    }
    function f() {
        var i = "﻿服务,类型,个数,价格\n", r = localStorage.getItem("selectedItems") || "[]";
        r = JSON.parse(r);
        var f = [], e = 0, o = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (n) {
            var t = Math.random() * 16 | 0, i = n == "x" ? t : t & 3 | 8;
            return i.toString(16);
        });
        t.each(r, function (n) {
            i += n.name + "," + n.details.join(" ") + "," + n.number + "台," + n.currentMoney + "\n";
            e += n.totalMoney;
            f.push({ category: n.details.join(" ") + "," + n.number + "台,", name: o + " " + n.name, price: n.currentMoney });
        });
        i += "总价," + e + "\n";
        var s = new Blob([i], { type: "text/plain;charset=utf-8" }), u = new Date, h = u.getFullYear() + "-" + (u.getMonth() + 1) + "-" + u.getDate();
        saveAs(s, "azure" + h + ".csv");
        n.ajax({ method: "post", url: "/pricingcalculator/InsertPriceList", datatype: "json", contentType: "application/json; charset=utf-8", data: JSON.stringify(f) });
    }
    function u(n, i) {
        var f = [], u, r;
        return n.TypeName != "default" && f.push(n.TypeName), n.FeatureName != "default" && f.push(n.FeatureName), n.SizeName != "default" && f.push(n.SizeName), u = "//wacndevelop.blob.core.chinacloudapi.cn/marketing-resource/css/img/", r = { key: i, logoUrl: u + "website.png", name: n.ServiceName.replace(/[_]/g, " "), details: t(f).map(function (n) {
            return n.replace(/[_]/g, " ");
        }), totalMoney: parseFloat(n.TotalPrice), shortName: n.ServiceName.replace(/[_]/g, " "), isHourly: n.IsHourly, number: n.Count, unit: n.Unit }, typeof n.hour != "undefined" ? (r.hour = n.hour, r.currentMoney = r.totalMoney * r.hour / 744, r.currentMoney = r.currentMoney.toFixed(2)) : (r.hour = 744, r.currentMoney = r.totalMoney), r.name.length > 10, i.indexOf("网站") != -1 ? r.logoUrl = u + "website.png" : i.indexOf("虚拟机") != -1 ? r.logoUrl = u + "VM.png" : i.indexOf("SQL_Server") != -1 ? r.logoUrl = u + "SQL Server-01-01.png" : i.indexOf("SQL_Database") != -1 ? r.logoUrl = u + "SQL DB-01.png" : i.indexOf("Web") != -1 ? r.logoUrl = u + "website.png" : i.indexOf("存储") != -1 ? r.logoUrl = u + "storage-01.png" : i.indexOf("CDN") != -1 ? r.logoUrl = u + "CDN-01.png" : i.indexOf("备份") != -1 ? r.logoUrl = u + "backup-01.png" : i.indexOf("网络") != -1 ? r.logoUrl = u + "Networking-01.png" : i.indexOf("HDInsight") != -1 ? r.logoUrl = u + "HDInsight-01.png" : i.indexOf("云服务") != -1 ? r.logoUrl = u + "Cloud Service.png" : i.indexOf("移动") != -1 ? r.logoUrl = u + "Mobile Service-01.png" : i.indexOf("媒体") != -1 && (r.logoUrl = u + "Media Service-01.png"), r;
    }
    var r = !0;
    n(document).on("click", ".azsidebar a", function (t) {
        var i, u, f;
        t.preventDefault();
        i = n(t.target).data("target");
        u = n(".sidebar-win" + i).hasClass("hide");
        n(".sidebar-win").addClass("hide");
        n(".azsidebar .tri-angle,.tri-angle-blue").addClass("hide");
        u && (n(".sidebar-win" + i).removeClass("hide"), n(t.target).parents("li").find(".tri-angle,.tri-angle-blue").removeClass("hide"), n(".sidebar-win" + i).hasClass("bing") && (f = "http://xiaoice.windowsazure.cn:80/", xiaoice_start(f)));
        n(".sidebar-win" + i).hasClass("calculator") && (r = u ? !0 : !1);
    });
    n(document).on("click", ".sidebar-win .close", function (t) {
        t.preventDefault();
        n(t.target).parents(".sidebar-win").addClass("hide");
        n(t.target).parents(".sidebar-win").hasClass("calculator") && (r = !1);
    });
    n(document).on("click", function (t) {
        n(t.target).parents(".sidebar-win.calculator,.azsidebar,.service").length != 0 || n(t.target).hasClass("sidebar-win calculator") || n(".sidebar-win.calculator").addClass("hide");
    });
    n(document).on("blur", ".sidebar-win.calculator input.num", function () {
        var r = parseInt(n(this).val()), u, t;
        r > 744 || r == NaN ? n(this).css({ border: "1px solid red" }) : (n(this).css({ border: "1px solid silver" }), u = n(this).parents(".calcul-item").index(), t = localStorage.getItem("selectedItems") || "[]", t = JSON.parse(t), t[u].hour = r, i(t));
    });
    n(document).on("CalculatorUIRenderer.AddToSideBar", function (f, e) {
        var h, o, c, s, l, a;
        if (n(".trackDom").remove(), n("body").append("<div class='hide trackDom'><a id='" + e + "_added'><\/a><\/div>"), n("#" + e + "_added").trigger("click"), h = localStorage.getItem("CalculatorList") || "[]", h = JSON.parse(h), o = localStorage.getItem("selectedItems") || "[]", o = JSON.parse(o), c = h[e], typeof c == "undefined")
            s = 0, l = 0, t(o).each(function (n) {
                n.key == e && (l = s);
                s += 1;
            }), o.splice(l, 1);
        else {
            r && (a = n(".right_content_select>div:nth-child(2)>a").attr("href"), (window.location.href.indexOf(a) != -1 || window.location.pathname == "/pricing/calculator") && (n(".sidebar-win").addClass("hide"), n(".sidebar-win.calculator").removeClass("hide")));
            var v = u(c, e), s = 0, y = 0, p = !1;
            t(o).each(function (n) {
                n.key === e && (y = s, p = !0);
                s += 1;
            });
            p ? o[y] = v : o.push(v);
        }
        i(o);
    });
    n(document).on("click", ".service .cal_temp_count .plus", function (t) {
        var i = this;
        setTimeout(function () {
            var r;
            if (n(i).parent().find(".digit").val() != 0 && (r = n(".anima-calculator"), r.length != 0)) {
                var f = { width: 40, height: 40, "font-size": "16px", "line-height": "40px", "border-radius": "10px" }, u = { width: 100, height: 100, "font-size": "40px", "line-height": "100px", "border-radius": "20px" }, e = { left: parseInt(n(".sidebar-win.calculator").position().left + n(".sidebar-win.calculator").width() / 2 - u.width / 2), top: parseInt(n(".sidebar-win.calculator").position().top + n(".sidebar-win.calculator").height() / 2 - u.height / 2) };
                n(".sidebar-win.calculator").hasClass("hide") && (e = { left: n(window).width() - 80, top: n(".azsidebar").position().top, width: 40, height: 40, "font-size": "16px", "line-height": "40px", "border-radius": "10px" });
                f.top = t.clientY - f.height / 2;
                f.left = t.clientX - f.width / 2;
                u.top = t.clientY - u.height / 2;
                u.left = t.clientX - u.width / 2;
                r.css(f);
                r.removeClass("hide");
                r.animate(u).promise().then(function () {
                    return r.animate(e).promise();
                }).then(function () {
                    return r.animate({ opacity: 0 }).promise();
                }).then(function () {
                    r.addClass("hide");
                    r.css("opacity", 1);
                });
            }
        }, 0);
    });
    n(document).on("ready", function () {
        var n = localStorage.getItem("CalculatorList") || "[]", t, r;
        n = JSON.parse(n);
        t = [];
        for (r in n)
            t.push(u(n[r], r));
        i(t);
    });
    n(document).on("click", "a", function (t) {
        if (this.pathname.indexOf("/home/features") != -1 && this.pathname != window.location.pathname && window.location.href.indexOf("/home/features") != -1 && this.pathname.indexOf("/home/features/what-is-windows-azure") == -1) {
            t.preventDefault();
            var r = localStorage.getItem("showCalculatorModal") || !0, i = localStorage.getItem("selectedItems") || "[]";
            i = JSON.parse(i);
            r && r != "false" && i.length != 0 ? (n(".modal-calculator").removeClass("hide"), n(".modal-calculator").data("target", n(this).attr("href"))) : window.location.href = this.href;
        }
    });
    n(document).on("click", ".modal-calculator .btn-continue", function () {
        var t = n(".modal-calculator").data("target");
        window.location.href = t;
    });
    n(document).on("click", ".modal-calculator .btn-cancel", function () {
        n(".modal-calculator").addClass("hide");
        var t = n(".modal-calculator").data("target");
        localStorage.setItem("CalculatorList", "{}");
        localStorage.setItem("selectedItems", "[]");
        window.location.href = t;
    });
    n(document).on("updated", ".modal-calculator .checkbox-rect", function () {
        var t = n(this).hasClass("active");
        t ? localStorage.setItem("showCalculatorModal", !1) : localStorage.setItem("showCalculatorModal", !0);
    });
    n(document).on("click", ".sidebar-win.calculator .summary .export", function (n) {
        n.preventDefault();
        f();
    });
    n(document).on("click", ".sidebar-win.calculator .summary .reset", function (t) {
        t.preventDefault();
        i([]);
        n(".sidebar-win.calculator").trigger("datachange.sidebar.calculator", "all");
    });
    n(document).on("click", ".sidebar-win.calculator .calcul-item .delete", function (t) {
        var u, r, f;
        t.preventDefault();
        u = n(this).parents(".calcul-item").index();
        r = localStorage.getItem("selectedItems") || "[]";
        r = JSON.parse(r);
        f = r.splice(u, 1)[0];
        i(r);
        n(".sidebar-win.calculator").trigger("datachange.sidebar.calculator", f.key);
    });
    n(document).ready(function () {
        n("#sidebarBtnSina").click(function () {
            var i = n("meta[name='description']").attr("content"), t = location.href, r;
            t.match(/documentation\/$/) ? i = "Windows Azure 文档中心 " : t.indexOf("documentation/articles") >= 0 || t.indexOf("documentation/services") >= 0 || t.indexOf("develop") >= 0 ? i = "Windows Azure 文档 - " + n("h1:first").text() : t.indexOf("blog/") >= 0 ? (i = "Windows Azure 博客", t.indexOf("blog/2") >= 0 && (i += " - " + n(".post-name").html())) : t.indexOf("support/trust-center") >= 0 || t.indexOf("support/legal") >= 0 || t.match(/case-studies\/\S/) ? i = n("title").text() : i.indexOf("Windows Azure") < 0 && (i = "Windows Azure " + i);
            r = "http://service.weibo.com/share/share.php?title=" + i + "&url=" + t + "&source=bookmark&appkey=3702539801&pic=&ralateUid=";
            window.open(encodeURI(r), "_blank");
        });
    });
})(jQuery, _);
$(document).on("click", ".checkbox-round", function () {
    $(this).parents("ul").find(".checkbox-round").removeClass("active");
    $(this).toggleClass("active");
});
$(document).on("mouseover", ".stars li", function (n) {
    var t = $(n.target).index();
    $(this).parent().find("li").each(function () {
        $(this).index() <= t ? $(this).addClass("active") : $(this).removeClass("active");
    });
});
$(document).on("click", ".stars li", function () {
    var n = $(this).index() + 1;
    $(this).parent().data("value", n);
    $(".star-not-selected").addClass("hide");
});
$(document).on("mouseout", ".stars", function () {
    var n = $(this).data("value");
    n = parseInt(n);
    $(this).find("li").each(function () {
        $(this).index() < n ? $(this).addClass("active") : $(this).removeClass("active");
    });
});
$(document).on("click", ".feedback-win .close", function (n) {
    n.preventDefault();
    $(this).parents(".feedback-win").addClass("hide");
    $(".azsidebar .tri-angle").addClass("hide");
});
$(document).on("click", ".feedback-win .stars li", function () {
    var n = $(this).parent().data("value");
    n = parseInt(n);
    n < 3 && $(".feedback-win").removeClass("high");
});
$(document).on("click", ".feedback-bottom .stars li", function () {
    $(".feedback-bottom .msg").removeClass("collapse");
    $(".feedback-bottom .control").addClass("collapse");
    $(".feedback-bottom .bottom-wacneditor").addClass("hide");
    var n = $(this).index() + 1;
    n < 3 ? ($(".feedback-bottom .low-score").removeClass("hide"), $(".feedback-bottom .normal-score").addClass("hide"), $(".feedback-bottom .feedback-email").removeClass("hide")) : ($(".feedback-bottom .low-score").addClass("hide"), $(".feedback-bottom .normal-score").removeClass("hide"), $(".feedback-bottom .feedback-email").addClass("hide"));
});
$(document).on("click", ".feedback-bottom .control", function (n) {
    n.preventDefault();
    $(".feedback-bottom .container").toggleClass("collapse");
    $(this).hasClass("expand") ? $(this).addClass("collapse").removeClass("expand") : $(this).removeClass("expand").addClass("collapse");
});
$(document).on("click", ".feedback-win .btn-submit", function (n) {
    var t;
    if (n.preventDefault(), t = parseInt($(".feedback-win .stars").data("value")), t == 0) {
        $(".star-not-selected").removeClass("hide");
        return;
    }
    var r = $(".feedback-win .feedback-text").val(), i = !1, u = $(".feedback-win input").val();
    $(".feedback-win .scope li:nth-child(2) .active").length == 1 && (i = !0);
    $.ajax({ method: "post", url: "/backend/feedbacks/add", data: { Rank: t, Url: window.location.href, Feedback: r, SiteScope: i, Email: u } }).then(function () {
        $(".feedback-win").addClass("hide");
        $(".feedback-win .stars").data("value", 0);
        $(".feedback-win .stars").find("li").each(function () {
            $(this).removeClass("active");
        });
        $(".feedback-win .feedback-text").val("");
        $(".feedback-win input").val("");
        $(".azsidebar .tri-angle").addClass("hide");
    }, function () {
        alert("无效的邮箱");
    });
});
$(document).on("click", ".feedback-bottom .submit", function (n) {
    n.preventDefault();
    var i = parseInt($(".feedback-bottom .stars").data("value")), r = $(".feedback-bottom .comments").val(), t = !1, u = $(".feedback-bottom .feedback-email input").val();
    $(".feedback-bottom .options li:nth-child(2) .active").length == 1 && (t = !0);
    $.ajax({ method: "post", url: "/backend/feedbacks/add", data: { Rank: i, Url: window.location.href, Feedback: r, SiteScope: t, Email: u } }).then(function () {
        $(".feedback-bottom .container").addClass("collapse");
        $(".feedback-bottom .stars").data("value", 0);
        $(".feedback-bottom .stars").find("li").each(function () {
            $(this).removeClass("active");
        });
        $(".feedback-bottom .comments").val("");
        $(".feedback-bottom .control").removeClass("hide");
        $(".feedback-bottom .feedback-email input").val("");
    }, function () {
        alert("无效的邮箱");
    });
});
$(document).on("ready", function () {
    var n = localStorage.getItem("isFeedbackDisplayed");
    if (n != "true") {
        $(".feeback-startup").removeClass("hide");
        $(".feeback-startup .close, .feeback-startup .gotit").on("click", function () {
            $(".feeback-startup").addClass("hide");
        });
        localStorage.setItem("isFeedbackDisplayed", !0);
    }
});
localStoragesupport = typeof localStorage != "undefined";
profilePictureURL = "https://app.viima.com/static/media/user_profiles/user-icon.png";
commentTargetEnum = { Undefined: 0, BlogPost: 1, TechnicalArticle: 2, MarketingContent: 3, Other: 4 };
WacnApi = function (n) {
    this.baseUrl = "/odata/";
    this.appkey = n;
    var t = this;
    $.ApiAjax = function (t) {
        var i = { headers: { appkey: n }, data: t.data };
        return t.method.toLowerCase() != "get" && (i.contentType = "application/json", i.data = JSON.stringify(t.data)), i = $.extend(t, i), $.ajax(i);
    };
    this.getUserInfo = function (n) {
        return $.ApiAjax({ method: "get", url: t.baseUrl + "User", data: { $filter: "Email eq '" + n + "'" } }).then(function (n) {
            return (console.log(n), n.value.length == 0) ? $.Deferred().reject("User not found") : $.Deferred().resolve(n.value[0]);
        }, function () {
            return $.Deferred().reject("request error");
        });
    };
    this.newContentReq = function (n, i, r, u, f) {
        return $.ApiAjax({ method: "post", url: t.baseUrl + "TechContentChangeReq", data: { UserId: n.Id, PageURL: i, OriginalContent: r, NewContent: u, TechContentChangeReqStatusId: { New: "1", Rejected: "2", Approved: "3", Complete: "4" }[f] } }).then(function (n) {
            return $.Deferred().resolve(n);
        }, function () {
            return $.Deferred().reject("request error");
        });
    };
};
