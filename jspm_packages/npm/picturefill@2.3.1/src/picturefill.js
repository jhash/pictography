/* */ 
"format cjs";
(function(process) {
  (function(w, doc, image) {
    "use strict";
    function expose(picturefill) {
      if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = picturefill;
      } else if (typeof define === "function" && define.amd) {
        define("picturefill", function() {
          return picturefill;
        });
      }
      if (typeof w === "object") {
        w.picturefill = picturefill;
      }
    }
    if (w.HTMLPictureElement) {
      expose(function() {});
      return;
    }
    doc.createElement("picture");
    var pf = w.picturefill || {};
    var regWDesc = /\s+\+?\d+(e\d+)?w/;
    pf.ns = "picturefill";
    (function() {
      pf.srcsetSupported = "srcset" in image;
      pf.sizesSupported = "sizes" in image;
      pf.curSrcSupported = "currentSrc" in image;
    })();
    pf.trim = function(str) {
      return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
    };
    pf.makeUrl = (function() {
      var anchor = doc.createElement("a");
      return function(src) {
        anchor.href = src;
        return anchor.href;
      };
    })();
    pf.restrictsMixedContent = function() {
      return w.location.protocol === "https:";
    };
    pf.matchesMedia = function(media) {
      return w.matchMedia && w.matchMedia(media).matches;
    };
    pf.getDpr = function() {
      return (w.devicePixelRatio || 1);
    };
    pf.getWidthFromLength = function(length) {
      var cssValue;
      if (!(length && length.indexOf("%") > -1 === false && (parseFloat(length) > 0 || length.indexOf("calc(") > -1))) {
        return false;
      }
      length = length.replace("vw", "%");
      if (!pf.lengthEl) {
        pf.lengthEl = doc.createElement("div");
        pf.lengthEl.style.cssText = "border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden";
        pf.lengthEl.className = "helper-from-picturefill-js";
      }
      pf.lengthEl.style.width = "0px";
      try {
        pf.lengthEl.style.width = length;
      } catch (e) {}
      doc.body.appendChild(pf.lengthEl);
      cssValue = pf.lengthEl.offsetWidth;
      if (cssValue <= 0) {
        cssValue = false;
      }
      doc.body.removeChild(pf.lengthEl);
      return cssValue;
    };
    pf.detectTypeSupport = function(type, typeUri) {
      var image = new w.Image();
      image.onerror = function() {
        pf.types[type] = false;
        picturefill();
      };
      image.onload = function() {
        pf.types[type] = image.width === 1;
        picturefill();
      };
      image.src = typeUri;
      return "pending";
    };
    pf.types = pf.types || {};
    pf.initTypeDetects = function() {
      pf.types["image/jpeg"] = true;
      pf.types["image/gif"] = true;
      pf.types["image/png"] = true;
      pf.types["image/svg+xml"] = doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
      pf.types["image/webp"] = pf.detectTypeSupport("image/webp", "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=");
    };
    pf.verifyTypeSupport = function(source) {
      var type = source.getAttribute("type");
      if (type === null || type === "") {
        return true;
      } else {
        var pfType = pf.types[type];
        if (typeof pfType === "string" && pfType !== "pending") {
          pf.types[type] = pf.detectTypeSupport(type, pfType);
          return "pending";
        } else if (typeof pfType === "function") {
          pfType();
          return "pending";
        } else {
          return pfType;
        }
      }
    };
    pf.parseSize = function(sourceSizeStr) {
      var match = /(\([^)]+\))?\s*(.+)/g.exec(sourceSizeStr);
      return {
        media: match && match[1],
        length: match && match[2]
      };
    };
    pf.findWidthFromSourceSize = function(sourceSizeListStr) {
      var sourceSizeList = pf.trim(sourceSizeListStr).split(/\s*,\s*/),
          winningLength;
      for (var i = 0,
          len = sourceSizeList.length; i < len; i++) {
        var sourceSize = sourceSizeList[i],
            parsedSize = pf.parseSize(sourceSize),
            length = parsedSize.length,
            media = parsedSize.media;
        if (!length) {
          continue;
        }
        if ((!media || pf.matchesMedia(media)) && (winningLength = pf.getWidthFromLength(length))) {
          break;
        }
      }
      return winningLength || Math.max(w.innerWidth || 0, doc.documentElement.clientWidth);
    };
    pf.parseSrcset = function(srcset) {
      var candidates = [];
      while (srcset !== "") {
        srcset = srcset.replace(/^\s+/g, "");
        var pos = srcset.search(/\s/g),
            url,
            descriptor = null;
        if (pos !== -1) {
          url = srcset.slice(0, pos);
          var last = url.slice(-1);
          if (last === "," || url === "") {
            url = url.replace(/,+$/, "");
            descriptor = "";
          }
          srcset = srcset.slice(pos + 1);
          if (descriptor === null) {
            var descpos = srcset.indexOf(",");
            if (descpos !== -1) {
              descriptor = srcset.slice(0, descpos);
              srcset = srcset.slice(descpos + 1);
            } else {
              descriptor = srcset;
              srcset = "";
            }
          }
        } else {
          url = srcset;
          srcset = "";
        }
        if (url || descriptor) {
          candidates.push({
            url: url,
            descriptor: descriptor
          });
        }
      }
      return candidates;
    };
    pf.parseDescriptor = function(descriptor, sizesattr) {
      var sizes = sizesattr || "100vw",
          sizeDescriptor = descriptor && descriptor.replace(/(^\s+|\s+$)/g, ""),
          widthInCssPixels = pf.findWidthFromSourceSize(sizes),
          resCandidate;
      if (sizeDescriptor) {
        var splitDescriptor = sizeDescriptor.split(" ");
        for (var i = splitDescriptor.length - 1; i >= 0; i--) {
          var curr = splitDescriptor[i],
              lastchar = curr && curr.slice(curr.length - 1);
          if ((lastchar === "h" || lastchar === "w") && !pf.sizesSupported) {
            resCandidate = parseFloat((parseInt(curr, 10) / widthInCssPixels));
          } else if (lastchar === "x") {
            var res = curr && parseFloat(curr, 10);
            resCandidate = res && !isNaN(res) ? res : 1;
          }
        }
      }
      return resCandidate || 1;
    };
    pf.getCandidatesFromSourceSet = function(srcset, sizes) {
      var candidates = pf.parseSrcset(srcset),
          formattedCandidates = [];
      for (var i = 0,
          len = candidates.length; i < len; i++) {
        var candidate = candidates[i];
        formattedCandidates.push({
          url: candidate.url,
          resolution: pf.parseDescriptor(candidate.descriptor, sizes)
        });
      }
      return formattedCandidates;
    };
    pf.dodgeSrcset = function(img) {
      if (img.srcset) {
        img[pf.ns].srcset = img.srcset;
        img.srcset = "";
        img.setAttribute("data-pfsrcset", img[pf.ns].srcset);
      }
    };
    pf.processSourceSet = function(el) {
      var srcset = el.getAttribute("srcset"),
          sizes = el.getAttribute("sizes"),
          candidates = [];
      if (el.nodeName.toUpperCase() === "IMG" && el[pf.ns] && el[pf.ns].srcset) {
        srcset = el[pf.ns].srcset;
      }
      if (srcset) {
        candidates = pf.getCandidatesFromSourceSet(srcset, sizes);
      }
      return candidates;
    };
    pf.backfaceVisibilityFix = function(picImg) {
      var style = picImg.style || {},
          WebkitBackfaceVisibility = "webkitBackfaceVisibility" in style,
          currentZoom = style.zoom;
      if (WebkitBackfaceVisibility) {
        style.zoom = ".999";
        WebkitBackfaceVisibility = picImg.offsetWidth;
        style.zoom = currentZoom;
      }
    };
    pf.setIntrinsicSize = (function() {
      var urlCache = {};
      var setSize = function(picImg, width, res) {
        if (width) {
          picImg.setAttribute("width", parseInt(width / res, 10));
        }
      };
      return function(picImg, bestCandidate) {
        var img;
        if (!picImg[pf.ns] || w.pfStopIntrinsicSize) {
          return;
        }
        if (picImg[pf.ns].dims === undefined) {
          picImg[pf.ns].dims = picImg.getAttribute("width") || picImg.getAttribute("height");
        }
        if (picImg[pf.ns].dims) {
          return;
        }
        if (bestCandidate.url in urlCache) {
          setSize(picImg, urlCache[bestCandidate.url], bestCandidate.resolution);
        } else {
          img = doc.createElement("img");
          img.onload = function() {
            urlCache[bestCandidate.url] = img.width;
            if (!urlCache[bestCandidate.url]) {
              try {
                doc.body.appendChild(img);
                urlCache[bestCandidate.url] = img.width || img.offsetWidth;
                doc.body.removeChild(img);
              } catch (e) {}
            }
            if (picImg.src === bestCandidate.url) {
              setSize(picImg, urlCache[bestCandidate.url], bestCandidate.resolution);
            }
            picImg = null;
            img.onload = null;
            img = null;
          };
          img.src = bestCandidate.url;
        }
      };
    })();
    pf.applyBestCandidate = function(candidates, picImg) {
      var candidate,
          length,
          bestCandidate;
      candidates.sort(pf.ascendingSort);
      length = candidates.length;
      bestCandidate = candidates[length - 1];
      for (var i = 0; i < length; i++) {
        candidate = candidates[i];
        if (candidate.resolution >= pf.getDpr()) {
          bestCandidate = candidate;
          break;
        }
      }
      if (bestCandidate) {
        bestCandidate.url = pf.makeUrl(bestCandidate.url);
        if (picImg.src !== bestCandidate.url) {
          if (pf.restrictsMixedContent() && bestCandidate.url.substr(0, "http:".length).toLowerCase() === "http:") {
            if (window.console !== undefined) {
              console.warn("Blocked mixed content image " + bestCandidate.url);
            }
          } else {
            picImg.src = bestCandidate.url;
            if (!pf.curSrcSupported) {
              picImg.currentSrc = picImg.src;
            }
            pf.backfaceVisibilityFix(picImg);
          }
        }
        pf.setIntrinsicSize(picImg, bestCandidate);
      }
    };
    pf.ascendingSort = function(a, b) {
      return a.resolution - b.resolution;
    };
    pf.removeVideoShim = function(picture) {
      var videos = picture.getElementsByTagName("video");
      if (videos.length) {
        var video = videos[0],
            vsources = video.getElementsByTagName("source");
        while (vsources.length) {
          picture.insertBefore(vsources[0], video);
        }
        video.parentNode.removeChild(video);
      }
    };
    pf.getAllElements = function() {
      var elems = [],
          imgs = doc.getElementsByTagName("img");
      for (var h = 0,
          len = imgs.length; h < len; h++) {
        var currImg = imgs[h];
        if (currImg.parentNode.nodeName.toUpperCase() === "PICTURE" || (currImg.getAttribute("srcset") !== null) || currImg[pf.ns] && currImg[pf.ns].srcset !== null) {
          elems.push(currImg);
        }
      }
      return elems;
    };
    pf.getMatch = function(img, picture) {
      var sources = picture.childNodes,
          match;
      for (var j = 0,
          slen = sources.length; j < slen; j++) {
        var source = sources[j];
        if (source.nodeType !== 1) {
          continue;
        }
        if (source === img) {
          return match;
        }
        if (source.nodeName.toUpperCase() !== "SOURCE") {
          continue;
        }
        if (source.getAttribute("src") !== null && typeof console !== undefined) {
          console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");
        }
        var media = source.getAttribute("media");
        if (!source.getAttribute("srcset")) {
          continue;
        }
        if ((!media || pf.matchesMedia(media))) {
          var typeSupported = pf.verifyTypeSupport(source);
          if (typeSupported === true) {
            match = source;
            break;
          } else if (typeSupported === "pending") {
            return false;
          }
        }
      }
      return match;
    };
    function picturefill(opt) {
      var elements,
          element,
          parent,
          firstMatch,
          candidates,
          options = opt || {};
      elements = options.elements || pf.getAllElements();
      for (var i = 0,
          plen = elements.length; i < plen; i++) {
        element = elements[i];
        parent = element.parentNode;
        firstMatch = undefined;
        candidates = undefined;
        if (element.nodeName.toUpperCase() !== "IMG") {
          continue;
        }
        if (!element[pf.ns]) {
          element[pf.ns] = {};
        }
        if (!options.reevaluate && element[pf.ns].evaluated) {
          continue;
        }
        if (parent && parent.nodeName.toUpperCase() === "PICTURE") {
          pf.removeVideoShim(parent);
          firstMatch = pf.getMatch(element, parent);
          if (firstMatch === false) {
            continue;
          }
        } else {
          firstMatch = undefined;
        }
        if ((parent && parent.nodeName.toUpperCase() === "PICTURE") || (!pf.sizesSupported && (element.srcset && regWDesc.test(element.srcset)))) {
          pf.dodgeSrcset(element);
        }
        if (firstMatch) {
          candidates = pf.processSourceSet(firstMatch);
          pf.applyBestCandidate(candidates, element);
        } else {
          candidates = pf.processSourceSet(element);
          if (element.srcset === undefined || element[pf.ns].srcset) {
            pf.applyBestCandidate(candidates, element);
          }
        }
        element[pf.ns].evaluated = true;
      }
    }
    function runPicturefill() {
      pf.initTypeDetects();
      picturefill();
      var intervalId = setInterval(function() {
        picturefill();
        if (/^loaded|^i|^c/.test(doc.readyState)) {
          clearInterval(intervalId);
          return;
        }
      }, 250);
      var resizeTimer;
      var handleResize = function() {
        picturefill({reevaluate: true});
      };
      function checkResize() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(handleResize, 60);
      }
      if (w.addEventListener) {
        w.addEventListener("resize", checkResize, false);
      } else if (w.attachEvent) {
        w.attachEvent("onresize", checkResize);
      }
    }
    runPicturefill();
    picturefill._ = pf;
    expose(picturefill);
  })(window, window.document, new window.Image());
})(require("process"));
