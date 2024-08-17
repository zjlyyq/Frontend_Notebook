(() => {
  var r = {
      647: (r) => {
        r.exports = "Hello World!";
      },
    },
    o = {};
  const t = (function t(e) {
    var s = o[e];
    if (void 0 !== s) return s.exports;
    var n = (o[e] = { exports: {} });
    return r[e](n, n.exports, t), n.exports;
  })(647);
  alert(t);
})();
