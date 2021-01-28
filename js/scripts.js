// written by yogesh agarwala https://yogeshiitm.github.io

var expression2 = "";

function dis2(val) {
    if (check == 1) {
        if (val == '0' || val == '1' || val == '2' || val == '3' || val == '4' || val == '5' || val == '6' || val == '7' || val == '8' || val == '9' || val == "(" || val == ")" || val == "sin(" || val == "cos(" || val == "tan(" || val == "log(" || val == "ln(" || val == "π" || val == "e" || val == "√(" || val == "abs(") {
            clr();
        }
        else if (expression2 == "Error" || expression2 == "NaN") {
            clr();
        }
        else {
            check = 0;
        }
    }
    var m = document.getElementById("expression");
    m.value += val;
    scroll_right();
}
function dis3(val) {
    if (check == 1) {
        if (val == '0' || val == '1' || val == '2' || val == '3' || val == '4' || val == '5' || val == '6' || val == '7' || val == '8' || val == '9' || val == "(" || val == ")" || val == "sss(" || val == "ccc(" || val == "ttt(" || val == "lll(" || val == "jj(" || val == Math.PI || val == Math.E || val == "√(" || val == "aaa(") {
            clr();
        }
        else if (expression2 == "Error" || expression2 == "NaN") {
            clr();
        }
        else {
            check = 0;
        }
    }
    expression2 += val;
    scroll_right();
}
function clr() {
    document.getElementById("expression").value = "";
    expression2 = "";
    check = 0;
}
function allclr() {
    document.getElementById("history").value = "";
    document.getElementById("expression").value = "";
    expression2 = "";
    check = 0;
}
var temp = '';
var check = 0; //added so that if to check if the back button is pressed after the solve button 
//bcz if solve is pressed after back then the entire expression2 should get deleted
function solve() {
    check = 1;
    var x = document.getElementById("expression").value;
    var o = expression2.indexOf('!');
    if (o > -1) {
        for (var k = 0; k < expression2.length; k++) {
            if (expression2[k] == '!') {
                if (expression2[k - 1] == ')') {
                    var i = k - 1;
                    while (expression2[i] != '(') {
                        i = i - 1;
                    }
                    if (expression2[i] == ".") {
                        var history = document.getElementById("history");
                        history.value += "\n" + x + " = " + 'Error' + "\n" + "Factorial function is defined for non-negative integers.";
                        document.getElementById("expression").value = "Error";
                        expression2 = "Error";
                        gfg_Run();
                    }
                    var n = eval(expression2.substring(i, k));
                    var ans = 1;
                    for (var j = 1; j <= n; j++) {
                        ans = ans * j;
                    }
                    expression2 = expression2.substring(0, i) + String(ans) + expression2.substring(k + 1, expression2.length);
                    if ((ans == 1 && n != 0 && n != 1)) {
                        var history = document.getElementById("history");
                        history.value += "\n" + x + " = " + 'Error' + "\n" + "Factorial function is defined for non-negative integers.";
                        document.getElementById("expression").value = "Error";
                        expression2 = "Error";
                        gfg_Run();
                    }
                }
                else {
                    var i = k - 1;
                    while (expression2[i] == 0 || expression2[i] == 1 || expression2[i] == 2 || expression2[i] == 3 || expression2[i] == 4 || expression2[i] == 5 || expression2[i] == 6 || expression2[i] == 7 || expression2[i] == 8 || expression2[i] == 9) {
                        i = i - 1;
                    }
                    if (expression2[i] == ".") {
                        var history = document.getElementById("history");
                        history.value += "\n" + x + " = " + 'Error' + "\n" + "Factorial function is defined for non-negative integers.";
                        document.getElementById("expression").value = "Error";
                        expression2 = "Error";
                        gfg_Run();
                    }
                    var n = eval(expression2.substring(i + 1, k));
                    var ans = 1;
                    for (var j = 1; j <= n; j++) {
                        ans = ans * j;
                    }
                    expression2 = expression2.substring(0, i + 1) + String(ans) + expression2.substring(k + 1, expression2.length);
                    if ((ans == 1 && n != 0 && n != 1)) {
                        var history = document.getElementById("history");
                        history.value += "\n" + x + " = " + 'Error' + "\n" + "Factorial function is defined for non-negative integers.";
                        document.getElementById("expression").value = "Error";
                        expression2 = "Error";
                        gfg_Run();
                    }
                }
            }
        }
    }

    var p = expression2.indexOf('√');
    if (p > -1) {
        for (var k = 0; k < expression2.length; k++) {
            if (expression2[k] == '√') {
                if (expression2[k + 1] == '(') {
                    var i = k + 2;
                    while (expression2[i] != ')' && i != expression2.length) {
                        i = i + 1;
                    }
                    if (i == expression2.length && expression2[i] != ')') {
                        x += ")";
                    }

                    var n = eval(expression2.substring(k + 2, i));
                    var ans = Math.pow(n, 0.5);
                    expression2 = expression2.substring(0, k) + String(ans) + expression2.substring(i + 1, expression2.length);

                }
                else {
                    var i = k + 1;
                    while (expression2[i] == 0 || expression2[i] == 1 || expression2[i] == 2 || expression2[i] == 3 || expression2[i] == 4 || expression2[i] == 5 || expression2[i] == 6 || expression2[i] == 7 || expression2[i] == 8 || expression2[i] == 9 || expression2[i] == ".") {
                        i = i + 1;
                    }
                    var n = eval(expression2.substring(k + 1, i));
                    var ans = Math.pow(n, 0.5);
                    expression2 = expression2.substring(0, k) + String(ans) + expression2.substring(i, expression2.length);
                }
            }
        }
    }

    var q = expression2.indexOf('s');
    if (q > -1) {
        for (var k = 0; k < expression2.length; k++) {
            if (expression2[k] == 's') {
                if (expression2[k + 3] == '(') {
                    var i = k + 4;
                    while (expression2[i] != ')' && i != expression2.length) {
                        i = i + 1;
                    }
                    if (i == expression2.length && expression2[i] != ')') {
                        x += ")";
                    }

                    var n = eval(expression2.substring(k + 4, i));
                    var ans = Math.sin((n / 180) * Math.PI);
                    expression2 = expression2.substring(0, k) + String(ans) + expression2.substring(i + 1, expression2.length);

                }
                else {
                    var i = k + 3;
                    while (expression2[i] == 0 || expression2[i] == 1 || expression2[i] == 2 || expression2[i] == 3 || expression2[i] == 4 || expression2[i] == 5 || expression2[i] == 6 || expression2[i] == 7 || expression2[i] == 8 || expression2[i] == 9 || expression2[i] == ".") {
                        i = i + 1;
                    }
                    var n = eval(expression2.substring(k + 3, i));
                    var ans = Math.sin((n / 180) * Math.PI);
                    expression2 = expression2.substring(0, k) + String(ans) + expression2.substring(i, expression2.length);
                }
            }
        }
    }
    var r = expression2.indexOf('c');
    if (r > -1) {
        for (var k = 0; k < expression2.length; k++) {
            if (expression2[k] == 'c') {
                if (expression2[k + 3] == '(') {
                    var i = k + 4;
                    while (expression2[i] != ')' && i != expression2.length) {
                        i = i + 1;
                    }
                    if (i == expression2.length && expression2[i] != ')') {
                        x += ")";
                    }
                    var n = eval(expression2.substring(k + 4, i));
                    var ans = Math.cos((n / 180) * Math.PI);
                    expression2 = expression2.substring(0, k) + String(ans) + expression2.substring(i + 1, expression2.length);

                }
                else {
                    var i = k + 3;
                    while (expression2[i] == 0 || expression2[i] == 1 || expression2[i] == 2 || expression2[i] == 3 || expression2[i] == 4 || expression2[i] == 5 || expression2[i] == 6 || expression2[i] == 7 || expression2[i] == 8 || expression2[i] == 9 || expression2[i] == ".") {
                        i = i + 1;
                    }
                    var n = eval(expression2.substring(k + 3, i));
                    var ans = Math.cos((n / 180) * Math.PI);
                    expression2 = expression2.substring(0, k) + String(ans) + expression2.substring(i, expression2.length);
                }
            }
        }
    }

    var s = expression2.indexOf('t');
    if (s > -1) {
        for (var k = 0; k < expression2.length; k++) {
            if (expression2[k] == 't') {
                if (expression2[k + 3] == '(') {
                    var i = k + 4;
                    while (expression2[i] != ')' && i != expression2.length) {
                        i = i + 1;
                    }

                    if (i == expression2.length && expression2[i] != ')') {
                        x += ")";
                    }

                    var n = eval(expression2.substring(k + 4, i));
                    if (n % 90 == 0 && n % 180 != 0) {
                        expression2 = Infinity;
                        document.getElementById("expression").value = Infinity;
                        var history = document.getElementById("history");
                        history.value += "\n" + x + " = " + expression2;
                        gfg_Run();
                    }
                    else {
                        var ans = Math.tan((n / 180) * Math.PI);
                        expression2 = expression2.substring(0, k) + String(ans) + expression2.substring(i + 1, expression2.length);
                    }

                }
                else {
                    var i = k + 3;
                    while (expression2[i] == 0 || expression2[i] == 1 || expression2[i] == 2 || expression2[i] == 3 || expression2[i] == 4 || expression2[i] == 5 || expression2[i] == 6 || expression2[i] == 7 || expression2[i] == 8 || expression2[i] == 9 || expression2[i] == ".") {
                        i = i + 1;
                    }
                    var n = eval(expression2.substring(k + 3, i));
                    if (n % 90 == 0 && n % 180 != 0) {
                        expression2 = Infinity;
                        document.getElementById("expression").value = Infinity;
                        var history = document.getElementById("history");
                        history.value += "\n" + x + " = " + expression2;
                        gfg_Run();
                    }
                    else {
                        var ans = Math.tan((n / 180) * Math.PI);
                        expression2 = expression2.substring(0, k) + String(ans) + expression2.substring(i, expression2.length);
                    }
                }
            }
        }
    }
    var t = expression2.indexOf('l');
    if (t > -1) {
        for (var k = 0; k < expression2.length; k++) {
            if (expression2[k] == 'l') {
                if (expression2[k + 3] == '(') {
                    var h = k + 4;
                    while (expression2[h] != ')' && h != expression2.length) {
                        h = h + 1;
                    }
                    if (h == expression2.length && expression2[h] != ')') {
                        x += ")";
                    }

                    var n = eval(expression2.substring(k + 4, h));
                    var ans = Math.log10(n);
                    expression2 = expression2.substring(0, k) + String(ans) + expression2.substring(h + 1, expression2.length);

                }
                else {
                    var h = k + 3;
                    while (expression2[h] == 0 || expression2[h] == 1 || expression2[h] == 2 || expression2[h] == 3 || expression2[h] == 4 || expression2[h] == 5 || expression2[h] == 6 || expression2[h] == 7 || expression2[h] == 8 || expression2[h] == 9 || expression2[h] == ".") {
                        h = h + 1;
                    }
                    var n = eval(expression2.substring(k + 3, h));
                    var ans = Math.log10(n);
                    expression2 = expression2.substring(0, k) + String(ans) + expression2.substring(h, expression2.length);
                }
            }
        }
    }

    var u = expression2.indexOf('j');
    if (u > -1) {
        for (var k = 0; k < expression2.length; k++) {
            if (expression2[k] == 'j') {
                if (expression2[k + 2] == '(') {
                    var i = k + 3;
                    while (expression2[i] != ')' && i != expression2.length) {
                        i = i + 1;
                    }
                    if (i == expression2.length && expression2[i] != ')') {
                        x += ")";
                    }

                    var n = eval(expression2.substring(k + 3, i));
                    var ans = Math.log(n);
                    expression2 = expression2.substring(0, k) + String(ans) + expression2.substring(i + 1, expression2.length);

                }
                else {
                    var i = k + 2;
                    while (expression2[i] == 0 || expression2[i] == 1 || expression2[i] == 2 || expression2[i] == 3 || expression2[i] == 4 || expression2[i] == 5 || expression2[i] == 6 || expression2[i] == 7 || expression2[i] == 8 || expression2[i] == 9 || expression2[i] == ".") {
                        i = i + 1;
                    }
                    var n = eval(expression2.substring(k + 2, i));
                    var ans = Math.log(n);
                    expression2 = expression2.substring(0, k) + String(ans) + expression2.substring(i, expression2.length);
                }
            }
        }
    }
    var v = expression2.indexOf('a');
    if (v > -1) {
        for (var k = 0; k < expression2.length; k++) {
            if (expression2[k] == 'a') {
                if (expression2[k + 3] == '(') {
                    var i = k + 4;
                    while (expression2[i] != ')' && i != expression2.length) {
                        i = i + 1;
                    }
                    if (i == expression2.length && expression2[i] != ')') {
                        x += ")";
                    }

                    var n = eval(expression2.substring(k + 4, i));
                    var ans = Math.abs(n);
                    expression2 = expression2.substring(0, k) + String(ans) + expression2.substring(i + 3, expression2.length);

                }
                else {
                    document.getElementById("expression").value = "Error";
                    expression2 = "Error";
                    var history = document.getElementById("history");
                    history.value += "\n" + x + " = " + expression2 + "\n" + "Please add parenthesis after abs";
                    gfg_Run();
                }
            }
        }
    }

    if (x.indexOf('√') < 0 && x.indexOf('s') < 0 && x.indexOf('c') < 0 && x.indexOf('t') < 0 && x.indexOf('l') < 0 && x.indexOf('a') < 0 && x.lastIndexOf(')') < x.lastIndexOf('(')) {
        expression2 = "Error";
        var history = document.getElementById("history");
        history.value += "\n" + x + " = " + expression2 + "\n" + "Please close the parenthesis.";
        document.getElementById("expression").value = "Error";
        gfg_Run();
    }

    if (expression2 != Infinity) {
        try {
            var y = eval(expression2);
        } catch (err) {
            document.getElementById("expression").value = "Error";
            expression2 = "Error";
            var history = document.getElementById("history");
            history.value += "\n" + x + " = " + expression2;
            gfg_Run();
        }

        var z = y.toFixed(10);
        var w = parseFloat(z);
        temp = w;
        expression2 = String(w);
        document.getElementById("expression").value = expression2;

        if (expression2 != "Error") {
            var history = document.getElementById("history");
            history.value += "\n" + x + " = " + expression2;
            gfg_Run();
        }
    }
}
function back() {
    var v = document.getElementById("expression").value;
    var m = expression2[expression2.length - 2];
    var n = expression2[expression2.length - 1];
    var p = v[v.length - 2];
    var q = v[v.length - 1];

    if (check == 1 || expression2 == "Error" || expression2 == "NaN") {
        clr();
    }
    else if (m == '*' || n == '*') {
        if (n != '*' && m == '*' && p != '\u00D7' && p != '^') {
            expression2 = expression2.substring(0, expression2.length - 3);
            document.getElementById("expression").value = v.substring(0, v.length - 1);
        }
        else if (n != '*' && m == '*' && (p != '\u00D7' || p != '^')) {
            expression2 = expression2.substring(0, expression2.length - 1);
            document.getElementById("expression").value = v.substring(0, v.length - 1);
        }
        else if (n == '*' && m == '*' && q == '^') {
            expression2 = expression2.substring(0, expression2.length - 2);
            document.getElementById("expression").value = v.substring(0, v.length - 1);
        }
        else if (n == '*' && m == '*' && q == '\u00D7') {
            expression2 = expression2.substring(0, expression2.length - 1);
            document.getElementById("expression").value = v.substring(0, v.length - 1);
        }
        else if (n == '*' && m != '*' && q == '\u00D7') {
            expression2 = expression2.substring(0, expression2.length - 1);
            document.getElementById("expression").value = v.substring(0, v.length - 1);
        }
    }
    else if (q == "π" || q == "e") {
        expression2 = expression2.substring(0, expression2.length - 17);
        document.getElementById("expression").value = v.substring(0, v.length - 1);
    }

    else {
        expression2 = expression2.substring(0, expression2.length - 1);
        document.getElementById("expression").value = v.substring(0, v.length - 1);
    }
    check = 0;
}
function gfg_Run() {
    var text = document.getElementById('history');
    text.scrollTop = text.scrollHeight;
}
function scroll_right() {
    var text = document.getElementById('expression');
    text.scrollLeft = text.scrollWidth;
}
function runtwofunction() {
    solve();
    gfg_Run();
}
function answer() {
    document.getElementById("expression").value += temp;
    expression2 += temp;
}
function pi() {
    var x = document.getElementById("expression").value;
    var n = x.length - 1;
    if (check == 0 && ((x[n] == ")" || x[n] == "!" || x[n] == "π" || x[n] == "e" || x[n] == "\u00B2" || x[n] == "%" || x[n] == 0 || x[n] == 1 || x[n] == 2 || x[n] == 3 || x[n] == 4 || x[n] == 5 || x[n] == 6 || x[n] == 7 || x[n] == 8 || x[n] == 9))) {
        multiply();
    }
    dis2('π');
    dis3(Math.PI);

    check = 0;
}
function e() {
    var x = document.getElementById("expression").value;
    var n = x.length - 1;
    if (check == 0 && ((x[n] == ")" || x[n] == "!" || x[n] == "π" || x[n] == "e" || x[n] == "\u00B2" || x[n] == "%" || x[n] == 0 || x[n] == 1 || x[n] == 2 || x[n] == 3 || x[n] == 4 || x[n] == 5 || x[n] == 6 || x[n] == 7 || x[n] == 8 || x[n] == 9))) {
        multiply();
    }
    dis2('e');
    dis3(Math.E);
    check = 0;
}
function dis(val) {
    var x = document.getElementById("expression").value;
    var n = x.length - 1;
    if (check == 0 && ((x[n] == ")" || x[n] == "!" || x[n] == "π" || x[n] == "e" || x[n] == "\u00B2" || x[n] == "%") && (val == 0 || val == 1 || val == 2 || val == 3 || val == 4 || val == 5 || val == 6 || val == 7 || val == 8 || val == 9))) {
        multiply();
    }
    if (check == 1 && val == ")") {
        clr();
    }
    else {
        dis2(val);
        dis3(val);
    }

}
function power() {
    dis2('^');
    dis3('**');
    check = 0;
}
function multiply() {
    dis2('\u00D7');
    dis3('*');
    check = 0;
}
function square() {
    dis2('\u00B2');
    dis3('**2');
    check = 0;
}
function squareroot() {
    var x = document.getElementById("expression").value;
    var n = x.length - 1;
    if (check == 0 && ((x[n] == ")" || x[n] == "!" || x[n] == "π" || x[n] == "e" || x[n] == "\u00B2" || x[n] == "%" || x[n] == 0 || x[n] == 1 || x[n] == 2 || x[n] == 3 || x[n] == 4 || x[n] == 5 || x[n] == 6 || x[n] == 7 || x[n] == 8 || x[n] == 9))) {
        multiply();
    }
    dis2('√(');
    dis3('√(');
    check = 0;
}
function factorial() {
    dis2('!');
    dis3('!');
    check = 0;
}
function percentage() {
    dis2('%');
    dis3('/100');
    check = 0;
}
function sinfn() {
    var x = document.getElementById("expression").value;
    var n = x.length - 1;
    if (check == 0 && ((x[n] == ")" || x[n] == "!" || x[n] == "π" || x[n] == "e" || x[n] == "\u00B2" || x[n] == "%" || x[n] == 0 || x[n] == 1 || x[n] == 2 || x[n] == 3 || x[n] == 4 || x[n] == 5 || x[n] == 6 || x[n] == 7 || x[n] == 8 || x[n] == 9))) {
        multiply();
    }
    dis2('sin(');
    dis3('sss(');
    check = 0;
    var h = document.getElementById("history");
    var m = h.value.indexOf('Enter');
    if (m < 0) {
        h.value += "\n" + "Enter angle in degree.";
        gfg_Run();
    }

}
function cosfn() {
    var x = document.getElementById("expression").value;
    var n = x.length - 1;
    if (check == 0 && ((x[n] == ")" || x[n] == "!" || x[n] == "π" || x[n] == "e" || x[n] == "\u00B2" || x[n] == "%" || x[n] == 0 || x[n] == 1 || x[n] == 2 || x[n] == 3 || x[n] == 4 || x[n] == 5 || x[n] == 6 || x[n] == 7 || x[n] == 8 || x[n] == 9))) {
        multiply();
    }
    dis2('cos(');
    dis3('ccc(');////intentionally written ccc so to avoid letter s which is present in sin as well.
    check = 0;
    var h = document.getElementById("history");
    var m = h.value.indexOf('Enter');
    if (m < 0) {
        h.value += "\n" + "Enter angle in degree.";
        gfg_Run();
    }
}
function tanfn() {
    var x = document.getElementById("expression").value;
    var n = x.length - 1;
    if (check == 0 && ((x[n] == ")" || x[n] == "!" || x[n] == "π" || x[n] == "e" || x[n] == "\u00B2" || x[n] == "%" || x[n] == 0 || x[n] == 1 || x[n] == 2 || x[n] == 3 || x[n] == 4 || x[n] == 5 || x[n] == 6 || x[n] == 7 || x[n] == 8 || x[n] == 9))) {
        multiply();
    }
    dis2('tan(');
    dis3('ttt(');
    check = 0;
    var h = document.getElementById("history");
    var m = h.value.indexOf('Enter');
    if (m < 0) {
        h.value += "\n" + "Enter angle in degree.";
        gfg_Run();
    }
}
function logfn() {
    var x = document.getElementById("expression").value;
    var n = x.length - 1;
    if (check == 0 && ((x[n] == ")" || x[n] == "!" || x[n] == "π" || x[n] == "e" || x[n] == "\u00B2" || x[n] == "%" || x[n] == 0 || x[n] == 1 || x[n] == 2 || x[n] == 3 || x[n] == 4 || x[n] == 5 || x[n] == 6 || x[n] == 7 || x[n] == 8 || x[n] == 9))) {
        multiply();
    }
    dis2('log(');
    dis3('lll(');
    check = 0;
}
function lnfn() {
    var x = document.getElementById("expression").value;
    var n = x.length - 1;
    if (check == 0 && ((x[n] == ")" || x[n] == "!" || x[n] == "π" || x[n] == "e" || x[n] == "\u00B2" || x[n] == "%" || x[n] == 0 || x[n] == 1 || x[n] == 2 || x[n] == 3 || x[n] == 4 || x[n] == 5 || x[n] == 6 || x[n] == 7 || x[n] == 8 || x[n] == 9))) {
        multiply();
    }
    dis2('ln(');
    dis3('jj(');////intentionally written jj so to avoid letter l which is present in log as well.
    check = 0;
}
function abs() {
    var x = document.getElementById("expression").value;
    var n = x.length - 1;
    if (check == 0 && ((x[n] == ")" || x[n] == "!" || x[n] == "π" || x[n] == "e" || x[n] == "\u00B2" || x[n] == "%" || x[n] == 0 || x[n] == 1 || x[n] == 2 || x[n] == 3 || x[n] == 4 || x[n] == 5 || x[n] == 6 || x[n] == 7 || x[n] == 8 || x[n] == 9))) {
        multiply();
    }
    dis2('abs(');
    dis3('aaa(');
    check = 0;
}
function exp() {
    dis2('\u00D710^');
    dis3('*10**');
    check = 0;
}
