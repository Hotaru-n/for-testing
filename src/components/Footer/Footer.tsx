import "./Footer.css";

const promise = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("какой нибудь текст");
  }, 5000);
});

promise.then(function (aboba) {
  console.log(aboba);
});

const test: string = "ZAWAAARUDO";

const testObj = {
  first: 7,
  second: "oo i i aa i ",
};

testObj.second = " o o i i i aa i";

export default function Footer() {
  return (
    <div className="footer">
      <h2>{test}</h2>
      <p></p>
      <p> {testObj.first + testObj.second}</p>
    </div>
  );
}
