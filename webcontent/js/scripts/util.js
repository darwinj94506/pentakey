function getApp(aplicaciones, nombreApp) {
    aLen = aplicaciones.length;
    for (i = 0; i < aLen; i++) {
        if (nombreApp === aplicaciones[i].nombre) {
            return aplicaciones[i];
        }
    }
}

function dynamicSortNumber(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        var result = (parseInt(a[property]) < parseInt(b[property])) ? -1 : (parseInt(a[property]) > parseInt(b[property])) ? 1 : 0;
        return result * sortOrder;
    }
}

function pad(str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}

function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

function popup(url) {
    var width = screen.width;
    var height = screen.height;
    var left = 0;
    var top = 0;
    var params = 'width=' + width + ', height=' + height;
    params += ', top=' + top + ', left=' + left;
    params += ', directories=no';
    params += ', location=no';
    params += ', menubar=no';
    params += ', resizable=no';
    params += ', scrollbars=yes';
    params += ', status=no';
    params += ', toolbar=no';
    params += ', fullscreen=yes';
    newwin = window.open(url, 'softradis', params);
    return false;
}

function incluirVersion() {
    var scripts = document.getElementsByTagName('script');
    var i;
    for (i = 0; i < scripts.length; i++) {
        var src = scripts[i].getAttribute("src");
        if (src !== null && src.indexOf("?") >= 0) {
            src = "&ver=" + Math.random();
        } else {
            src += "?ver=" + Math.random();
        }
        scripts[i].setAttribute("src", src);
    }

    var css = document.getElementsByTagName('link');
    for (i = 0; i < css.length; i++) {
        var src = css[i].getAttribute("href");
        if (src !== null && src.indexOf("?") >= 0) {
            src += "&ver=" + Math.random();
        } else if (src !== null) {
            src += "?ver=" + Math.random();
        }
        css[i].setAttribute("href", src);
    }
}

var stepTime = 20;
var docBody = document.body;
var focElem = document.documentElement;

var scrollAnimationStep = function (initPos, stepAmount) {
    var newPos = initPos - stepAmount > 0 ? initPos - stepAmount : 0;

    docBody.scrollTop = focElem.scrollTop = newPos;

    newPos && setTimeout(function () {
        scrollAnimationStep(newPos, stepAmount);
    }, stepTime);
}

var scrollTopAnimated = function (speed) {
    var topOffset = docBody.scrollTop || focElem.scrollTop;
    var stepAmount = topOffset;

    speed && (stepAmount = (topOffset * stepTime) / speed);

    scrollAnimationStep(topOffset, stepAmount);
};

function pad_with_zeroes(number, length) {

    var my_string = '' + number;
    while (my_string.length < length) {
        my_string = '0' + my_string;
    }

    return my_string;

}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function dynamicSortMultiple() {
    /*
     * save the arguments object as it will be overwritten
     * note that arguments object is an array-like object
     * consisting of the names of the properties to sort by
     */
    var props = arguments;
    return function (obj1, obj2) {
        var i = 0,
            result = 0,
            numberOfProperties = props.length;
        /* try getting a different result from 0 (equal)
         * as long as we have extra properties to compare
         */
        while (result === 0 && i < numberOfProperties) {
            result = dynamicSort(props[i])(obj1, obj2);
            i++;
        }
        return result;
    }
}