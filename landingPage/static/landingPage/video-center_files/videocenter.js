if (document.getElementById("video-center") != null) {
    var itemsPerPage = 10;
    AddFilterDropdownList($("#related-service-filter"), serviceFilter.ItemList);
    AddFilterDropdownList($("#duration-filter"), durationFilter.ItemList);
    AddFilterDropdownList($("#course-series-filter"), courseSeriesFilter.ItemList);
    AddVideoList(videoList);
    pagetion(totalVideoCount);

    $(document).on('click', function (evt) {
        if ($(evt.target).parents('.filter').length == 0) {
            $(".dropdown-list ul").addClass('hide');
        }
    });

    $(document).on('click', '.dropdown-list', function (evt) {
        if ($(evt.target).parents('.options').length == 0) {
            if ($(evt.target).find('ul').length != 0) {
                $(evt.target).find('ul').toggleClass('hide');
            }
            else {
                $(evt.target).closest('.dropdown-list').find('ul').toggleClass('hide');
            }
        }
    });

    $(document).on('click', '.dropdown-list li', function (evt) {
        var dropdownListNode = $(evt.target).closest('.dropdown-list');
        dropdownListNode.find('.value').text(FormatStr($(evt.target).text()));
        dropdownListNode.find('.value').attr("data-value", $(evt.target).text());
        dropdownListNode.find('ul').toggleClass('hide');
        Filter(0);
    });

    $(document).on('click', '.video-item .course-series .value', function (evt) {
        $("#course-series-filter .dropdown-list .value").attr("data-value", $(this).text());
        $("#course-series-filter .dropdown-list .value").text(FormatStr($(this).text()));
        Filter(0);
    });

    $(document).on('click', '.video-item .services .service-item', function (evt) {
        $("#related-service-filter .dropdown-list .value").attr("data-value", $(this).text());
        $("#related-service-filter .dropdown-list .value").text(FormatStr($(this).text()));
        Filter(0);
    });

    $(document).on('click', ".video-item .text .like", function (evt) {
        var videoItem = $(this).closest(".video-item");
        var videoUrl = videoItem.find(".video-image a").attr("href");
        if (sessionStorage[videoUrl] != undefined && JSON.parse(sessionStorage[videoUrl]) == true)
        {
            ;
        }
        else
        {
            videoItem.find(".text .like").text(parseInt(videoItem.find(".text .like").text()) + 1);
            sessionStorage[videoUrl] = true;
            var url = "/videocenter/like";
            data = {
                videoUrl: videoUrl
            };
            $.ajax({
                type: "POST",
                data: JSON.stringify(data),
                dataType: "json",
                url: url,
                contentType: "application/json",
                success: function (res) {
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                }
            });
            var likeNode = videoItem.find(".text .like");
            likeNode.removeClass("like-active");
            likeNode.addClass("like-inactive");
        }
    });

    function FormatStr(str) {
        var maxNum = 15;
        if (str.length > maxNum) {
            return str.substring(0, maxNum) + "...";
        }
        else {
            return str;
        }
    }

    function Filter(pageIndex) {
        var filterAllStr = "全部";
        var relatedService = $("#related-service-filter .dropdown-list .value").attr("data-value") == filterAllStr ? undefined : $("#related-service-filter .dropdown-list .value").attr("data-value");
        var duration = $("#duration-filter .dropdown-list .value").attr("data-value") == filterAllStr ? undefined : $("#duration-filter .dropdown-list .value").attr("data-value");
        var courseSeries = $("#course-series-filter .dropdown-list .value").attr("data-value") == filterAllStr ? undefined : $("#course-series-filter .dropdown-list .value").attr("data-value");
        var data = {
            pageNum: pageIndex,
            relatedService: relatedService,
            durationRange: duration,
            courceSeries: courseSeries
        };
        var url = "/videocenter/filter";

        $.ajax({
            type: "POST",
            data: JSON.stringify(data),
            dataType: "json",
            url: url,
            contentType: "application/json",
            success: function (res) {
                pagetion(res.TotalVideoCount, pageIndex);
                AddVideoList(res.VideoList);
                OpenVideo();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            }
        });
    }



    function AddFilterDropdownList(appendedNode, itemList) {

        var dropdownListNode = $("<div class='dropdown-list'>");

        var valueNode = $("<span class='value'>");
        valueNode.text("全部");
        valueNode.attr("data-value", "全部");
        dropdownListNode.append(valueNode);

        var arrowDownNode = $("<span class='arrow-down'>");
        dropdownListNode.append(arrowDownNode);

        var optionsNode = $("<ul class='options hide'>");
        var itemNode = $("<li>");
        itemNode.text("全部");
        optionsNode.append(itemNode);
        for (var i = 0; i < itemList.length; i++) {
            var itemNode = $("<li>");
            itemNode.text(itemList[i]);
            optionsNode.append(itemNode);
        }
        dropdownListNode.append(optionsNode);

        appendedNode.append(dropdownListNode);
    }

    function AddVideoList(videoList) {
        $(".video-field").empty();
        for (var i = 0; i < videoList.length; i++) {
            var playImageNode = $("<img src='http://wacndevelop.blob.core.chinacloudapi.cn/marketing-resource/css/images/video_center_play.png' class='image'>");
            var playButtonNode = $("<div class='play-btn'>");
            playButtonNode.append(playImageNode);

            var anchorNode = $("<a>");
            anchorNode.attr("href", videoList[i].VideoUrl);
            anchorNode.attr("class", "_storage-video-popup");
            anchorNode.css({ "background": "url(" + videoList[i].ImageUrl + ") no-repeat" });
            anchorNode.append(playButtonNode);

            var videoImageNode = $("<div class='video-image'>");
            videoImageNode.append(anchorNode);

            var titleNode = $("<div class='title'>");
            titleNode.append(videoList[i].Title);

            var courseSeriesLabelNode = $("<span class='label'>");
            courseSeriesLabelNode.text("课程系列: ");
            var courseSeriesValueNode = $("<span class='value'>");
            courseSeriesValueNode.text(videoList[i].CourseSeries);
            var courseSeriesNode = $("<span class='course-series'>");
            courseSeriesNode.append(courseSeriesLabelNode);
            courseSeriesNode.append(courseSeriesValueNode);

            var relatedServiceLabelNode = $("<span class='label'>");
            relatedServiceLabelNode.text("服务: ");
            var relatedServiceValueNode = $("<span class='value'>");
            for (var j = 0; j < videoList[i].Services.length; j++) {
                var relatedServiceValueItemNode = $("<span class='service-item'>");
                relatedServiceValueItemNode.text(videoList[i].Services[j]);
                relatedServiceValueNode.append(relatedServiceValueItemNode);
            }
            var relatedServiceNode = $("<span class='services'>");
            relatedServiceNode.append(relatedServiceLabelNode);
            relatedServiceNode.append(relatedServiceValueNode);

            var durationRangeLabelNode = $("<span class='label'>");
            durationRangeLabelNode.text("视频长度: ");
            var durationRangeValueNode = $("<span class='value'>");
            durationRangeValueNode.text(GetDurationFromIntToStr(videoList[i].Duration));
            var durationRangeNode = $("<span class='duration-range'>");
            durationRangeNode.append(durationRangeLabelNode);
            durationRangeNode.append(durationRangeValueNode);

            var publishTimeLabelNode = $("<span class='label'>");
            publishTimeLabelNode.text("发布时间: ");
            var publishTimeValueNode = $("<span class='value'>");
            var d = new Date(parseInt(videoList[i].PublishTime.substr(6)));
            var dateStr = d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日";
            publishTimeValueNode.text(dateStr);
            var publishTimeNode = $("<span class='publish-time'>");
            publishTimeNode.append(publishTimeLabelNode);
            publishTimeNode.append(publishTimeValueNode);

            var descriptionNode = $("<div class='description'>");
            descriptionNode.text(videoList[i].Description);

            var likeNode = $("<div class='like'>");
            likeNode.text(videoList[i].LikeCount);

            var textNode = $("<div class='text'>");
            textNode.append(titleNode);
            textNode.append(courseSeriesNode);
            textNode.append(relatedServiceNode);
            textNode.append($("<br>"));
            textNode.append(durationRangeNode);
            textNode.append(publishTimeNode);
            textNode.append($("<br>"));
            textNode.append(descriptionNode);
            textNode.append(likeNode);

            var videoItemNode = $("<div class='video-item'>");
            videoItemNode.append(videoImageNode);
            videoItemNode.append(textNode);

            $(".video-field").append(videoItemNode);

            if (sessionStorage[videoList[i].VideoUrl] != undefined && JSON.parse(sessionStorage[videoList[i].VideoUrl]) == true) {
                likeNode.removeClass("like-active");
                likeNode.addClass("like-inactive");
            }
            else {
                likeNode.removeClass("like-inactive");
                likeNode.addClass("like-active");
            }
        }
    }

    function GetDurationFromIntToStr(duration) {
        var min = Math.floor(duration / 60);
        var sec = duration - min * 60;
        return min + "' " + sec + '"';
    }

    //begin pagination
    jQuery.fn.pagination = function (maxentries, opts) {
        opts = jQuery.extend({
            items_per_page: 10,
            num_display_entries: 4,
            current_page: 0,
            num_edge_entries: 3,
            link_to: "#",
            prev_text: "Prev",
            next_text: "Next",
            ellipse_text: "...",
            prev_show_always: false,
            next_show_always: false,
            callback: function () { return false; }
        }, opts || {});

        function numPages() {
            return Math.ceil(maxentries / opts.items_per_page);
        }

        function getInterval() {
            var ne_half = Math.ceil(opts.num_display_entries / 2);
            var np = numPages();
            var upper_limit = np - opts.num_display_entries;
            var start = current_page > ne_half ? Math.max(Math.min(current_page - ne_half, upper_limit), 0) : 0;
            var end = current_page > ne_half ? Math.min(current_page + ne_half, np) : Math.min(opts.num_display_entries, np);
            return [start, end];
        }


        function pageSelected(page_id, evt) {
            current_page = page_id;
            drawLinks();
            var continuePropagation = opts.callback(page_id, panel);
            if (!continuePropagation) {
                if (evt.stopPropagation) {
                    evt.stopPropagation();
                }
                else {
                    evt.cancelBubble = true;
                }
            }
            return continuePropagation;
        }

        function drawLinks() {
            panel.empty();
            var interval = getInterval();
            var np = numPages();
            if (np != 1) {
                var getClickHandler = function (page_id) {
                    return function (evt) { return pageSelected(page_id, evt); }
                }

                var appendItem = function (page_id, appendopts) {
                    page_id = page_id < 0 ? 0 : (page_id < np ? page_id : np - 1);
                    appendopts = jQuery.extend({ text: page_id + 1, classes: "" }, appendopts || {});
                    if (page_id == current_page) {
                        var lnk = jQuery("<span class='current'>" + (appendopts.text) + "</span>");
                    } else {
                        var lnk = jQuery("<a>" + (appendopts.text) + "</a>")
                          .bind("click", getClickHandler(page_id))
                          .attr('href', opts.link_to.replace(/__id__/, page_id));
                    }
                    if (appendopts.classes) { lnk.addClass(appendopts.classes); }
                    panel.append(lnk);
                }

                if (opts.prev_text && (current_page > 0 || opts.prev_show_always)) {
                    appendItem(current_page - 1, { text: opts.prev_text, classes: "prev" });
                }

                if (interval[0] > 0 && opts.num_edge_entries > 0) {
                    var end = Math.min(opts.num_edge_entries, interval[0]);
                    for (var i = 0; i < end; i++) {
                        appendItem(i);
                    }
                    if (opts.num_edge_entries < interval[0] && opts.ellipse_text) {
                        jQuery("<span>" + opts.ellipse_text + "</span>").appendTo(panel);
                    }
                }

                for (var i = interval[0]; i < interval[1]; i++) {
                    appendItem(i);
                }

                if (interval[1] < np && opts.num_edge_entries > 0) {
                    if (np - opts.num_edge_entries > interval[1] && opts.ellipse_text) {
                        jQuery("<span>" + opts.ellipse_text + "</span>").appendTo(panel);
                    }
                    var begin = Math.max(np - opts.num_edge_entries, interval[1]);
                    for (var i = begin; i < np; i++) {
                        appendItem(i);
                    }

                }

                if (opts.next_text && (current_page < np - 1 || opts.next_show_always)) {
                    appendItem(current_page + 1, { text: opts.next_text, classes: "next" });
                }
            }
        }

        var current_page = opts.current_page;
        maxentries = (!maxentries || maxentries < 0) ? 1 : maxentries;
        opts.items_per_page = (!opts.items_per_page || opts.items_per_page < 0) ? 1 : opts.items_per_page;
        var panel = jQuery(this);
        this.selectPage = function (page_id) { pageSelected(page_id); }
        this.prevPage = function () {
            if (current_page > 0) {
                pageSelected(current_page - 1);
                return true;
            }
            else {
                return false;
            }
        }
        this.nextPage = function () {
            if (current_page < numPages() - 1) {
                pageSelected(current_page + 1);
                return true;
            }
            else {
                return false;
            }
        }
        drawLinks();
    }

    function pagetion(num_entries, current_page) {
        $(function () {
            var initPagination = function () {
                $("#Pagination").pagination(num_entries, {
                    callback: pageselectCallback,
                    items_per_page: 10,
                    current_page: current_page
                });
            }();

            function pageselectCallback(page_index, jq) {
                Filter(page_index);
                return false;
            }
        });
    };
    $(function () {
        //click to share video
        $(document).on('click', ".popup-sina-logo", function () {
            var video_url = $(this).find(".video_url").val();
            var description = "Windows Azure 视频中心 - " + $(this).find(".video_title").val() + "：" + $(this).find(".video_description").val();
            var url0 = location.href + "?" + video_url+ "|*|" + (parseInt($(".pagination .current").text())-1);
            var url = "http://service.weibo.com/share/share.php?title=" + description + "&url=" + url0 + "&source=bookmark&appkey=2992571369&pic=&ralateUid=";
            window.open(encodeURI(url), "_blank");
        });
        //click to play video
        $(document).on("click","._storage-video-popup",function () {
            var url_video = $(this).attr("href");
            var title_video = $(this).parent().parent().find(".text .title").html();
            var description_video = $(this).parent().parent().find(".text .description").html();
            setTimeout(function () {
                var $video_control_bar = $(".vjs-control-bar .amp-controlbaricons-right");
                $video_control_bar.css("position", "relative");
                var str_tmp = '<div class="popup-sina-logo">';
                str_tmp += '<input type="hidden" class="video_url" value="' + url_video + '" />';
                str_tmp += '<input type="hidden" class="video_title" value="' + title_video + '" />';
                str_tmp += '<input type="hidden" class="video_description" value="' + description_video + '" />';
                str_tmp += '</div>';
                $video_control_bar.append(str_tmp);
            }, 100);
        });

        
        var page_index = location.search.substr(1).split("|*|")[1];
        if (page_index >= 0) {
            Filter(page_index);
            $("#Pagination").pagination(totalVideoCount, {
                callback: pageselectCallback,
                items_per_page: 10,
                current_page: page_index
            });
            function pageselectCallback(page_index, jq) {
                Filter(page_index);
                return false;
            }
        }
    });

    //open video 
    function OpenVideo(){
        var video_url = location.search.substr(1).split("|*|")[0];
        if (video_url != "") {
            var str_tmp = ".video-image a[href='" + video_url + "']";
            $(str_tmp).click();
        }
    };
}
