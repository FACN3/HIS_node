const test = require("tape");
const shot = require("shot");
const router = require("../src/router");

test("tape is working", function(t) {
  t.equals(1, 1, "one equals one");
  t.end();
});

test("Testing router 404", t => {
  shot.inject(router, { method: "get", url: "/elephant" }, res => {
    t.equal(res.statusCode, 404, "should respond with statusCode of 404");
    t.end();
  });
});

test("Testing router css", t => {
  shot.inject(router, { method: "get", url: "/style.css" }, res => {
    t.equal(res.statusCode, 200, "should respond with style.css");
    t.equal(res.headers["content-type"], "text/css", "should respond with style.css");
    t.end();
  });
});


test("Testing router js", t => {
  shot.inject(router, { method: "get", url: "/logic.js" }, res => {
    t.equal(res.statusCode, 200, "should respond with logic.js");
    t.equal(res.headers["content-type"], "javascript/application", "should respond with logic.js");
    t.end();
  });
});


test("Testing router html", t => {
  shot.inject(router, { method: "get", url: "/" }, res => {
    t.equal(res.statusCode, 200, "should respond with index.html");
    t.equal(res.headers["content-type"], "text/html", "should respond with index.html");    
    t.end();
  });
});


test("Testing router modal.js", t => {
  shot.inject(router, { method: "get", url: "/model?q=obama" }, res => {
    t.equal(res.statusCode, 200, "should respond with modal.js");
    t.equal(res.headers["content-type"], "application/json", "should respond with application/json");    
    t.end();
  });
});
