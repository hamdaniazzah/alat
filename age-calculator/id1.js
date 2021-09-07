function check(e) {}

function getid(e) {
	return document.getElementById(e)
}

function gf(formname, fieldname) {
	var f = eval("document." + formname + "." + fieldname);
	return f.value
}

function showresult(e, a) {
	getid("r" + e).value = a
}

function isNum(e) {
	var a = e;
	if ("" == a || null == a || 0 == a.length) return !1;
	a = a.toString();
	for (var t = 0; t < a.length; t++)
		if ((a.substring(t, t + 1) < "0" || a.substring(t, t + 1) > "9") && "." != a.substring(t, t + 1)) return !1;
	return !0
}

function checkday(e) {
	var a = e.value,
		t = a.substring(0, 1);
	a.length > 0 && a.length < 3 ? isNum(a) && 0 != a ? (a < 1 || a > 31) && (e.value = t) : e.value = "" : a.length > 2 && (a = a.substring(0, 2), e.value = a)
}

function checkmon(e) {
	var a = e.value,
		t = a.substring(0, 1);
	a.length > 0 && a.length < 3 ? isNum(a) && 0 != a ? (a < 1 || a > 12) && (e.value = t) : e.value = "" : a.length > 2 && (a = a.substring(0, 2), e.value = a)
}

function checkyear(e) {
	var a = e.value,
		t = a.substring(0, a.length - 1);
	a.length > 0 && a.length < 7 ? isNum(a) && 0 != a ? (a < 1 || a > 275759) && (e.value = "") : e.value = t : a.length > 4 && (e.value = t)
}

function checkleapyear(e) {
	return e.getYear() % 4 == 0 && (e.getYear() % 10 != 0 || e.getYear() % 400 == 0)
}

function DaysInMonth(Y, M) {
	with(new Date(Y, M, 1, 12)) return setDate(0), getDate()
}

function datediff(e, a) {
	var t = e.getFullYear(),
		n = e.getMonth(),
		u = e.getDate(),
		r = a.getFullYear(),
		l = a.getMonth(),
		i = a.getDate();
	return u < i && (n--, u += DaysInMonth(r, l)), n < l && (t--, n += 12), [t - r, n - l, u - i]
}

function calage() {
	var e = document.cir.len11.value,
		a = document.cir.len12.value,
		t = document.cir.len13.value,
		n = document.cir.len21.value,
		u = document.cir.len22.value,
		r = document.cir.len23.value;
	if ("" == e || "" == a || "" == t || "" == n || "" == u || "" == r) alert("Isi semua data formulir");
	else if (e == n && a == u && t == r) alert("Sekarang Tanggal Kelahiran Anda & Umur Anda 0 Tahun");
	else {
		var l = new Date(t, a - 1, e),
			i = new Date(r, u - 1, n),
			c = Date.UTC(t, a, e, 0, 0, 0) - Date.UTC(r, u, n, 0, 0, 0),
			o = datediff(l, i);
		document.cir.val.value = o[0] + " Tahun, " + o[1] + " Bulan, Dan " + o[2] + " hari";
		var g = c / 1e3 / 60;
		document.cir.val3.value = g + " Menit Sejak Kamu Lahir";
		var v = g / 60;
		document.cir.val2.value = v + " Jam Sejak Kamu Lahir";
		var m = v / 24;
		document.cir.val1.value = m + " Hari Sejak Kamu Lahir";
		var h = parseInt(r) + o[0] + 1,
			s = (c = Date.UTC(h, u, n, 0, 0, 0) - Date.UTC(t, a, e, 0, 0, 0)) / 1e3 / 60 / 60 / 24;
		document.cir.val4.value = s + " Hari lagi untuk ulang Tahun Berikutnya"
	}
}

function color(e) {
	for (var a = 7; a < 12; a++) {
		document.getElementsByTagName("input").item(a).style.backgroundColor = e
	}
}

function color1(e) {
	document.getElementsByTagName("table").item(0).style.backgroundColor = e
}
var hamzah = document.getElementById("ham_zah");
"https://www.blogger.com/profile/16347216414438178552" != hamzah.getAttribute("href") && (window.location.href = "https://www.blogger.com/profile/16347216414438178552");
