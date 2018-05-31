(function() {
  var o = document.getElementById("hutia1");
  Subt(o);
})();
function Subt(obj) {
  var s = obj.innerHTML;
  var p = document.createElement("span");
  var n = document.createElement("a");
  p.innerHTML = s.substring(0, 90);
  n.innerHTML = s.length > 90 ? "...展开详情": "";
  n.href = "###";
  n.onclick = function() {
    if (n.innerHTML == "...展开详情") {
      n.innerHTML = "收起详情";
      p.innerHTML = s;
    } else {
      n.innerHTML = "...展开详情";
      p.innerHTML = s.substring(0, 90);
    }
  }
  obj.innerHTML = "";
  obj.appendChild(p);
  obj.appendChild(n);
}
(function() {
  var o = document.getElementById("hutia2");
  Subt(o);
})();
function Subt(obj) {
  var s = obj.innerHTML;
  var p = document.createElement("span");
  var n = document.createElement("a");
  p.innerHTML = s.substring(0, 90);
  n.innerHTML = s.length > 90 ? "...展开详情": "";
  n.href = "###";
  n.onclick = function() {
    if (n.innerHTML == "...展开详情") {
      n.innerHTML = "收起详情";
      p.innerHTML = s;
    } else {
      n.innerHTML = "...展开详情";
      p.innerHTML = s.substring(0, 90);
    }
  }
  obj.innerHTML = "";
  obj.appendChild(p);
  obj.appendChild(n);
}
(function() {
  var o = document.getElementById("hutia3");
  Subt(o);
})();
function Subt(obj) {
  var s = obj.innerHTML;
  var p = document.createElement("span");
  var n = document.createElement("a");
  p.innerHTML = s.substring(0, 90);
  n.innerHTML = s.length > 90 ? "...展开详情": "";
  n.href = "###";
  n.onclick = function() {
    if (n.innerHTML == "...展开详情") {
      n.innerHTML = "收起详情";
      p.innerHTML = s;
    } else {
      n.innerHTML = "...展开详情";
      p.innerHTML = s.substring(0, 90);
    }
  }
  obj.innerHTML = "";
  obj.appendChild(p);
  obj.appendChild(n);
}
(function() {
  var o = document.getElementById("hutia4");
  Subt(o);
})();
function Subt(obj) {
  var s = obj.innerHTML;
  var p = document.createElement("span");
  var n = document.createElement("a");
  p.innerHTML = s.substring(0, 90);
  n.innerHTML = s.length > 90 ? "...展开详情": "";
  n.href = "###";
  n.onclick = function() {
    if (n.innerHTML == "...展开详情") {
      n.innerHTML = "收起详情";
      p.innerHTML = s;
    } else {
      n.innerHTML = "...展开详情";
      p.innerHTML = s.substring(0, 90);
    }
  }
  obj.innerHTML = "";
  obj.appendChild(p);
  obj.appendChild(n);
}
