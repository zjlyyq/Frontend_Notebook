const Log = console.log;
let s1 = '\uD842\uDFB7';
let s2 = '\u{20BB7}'
console.log(s1, s1 === s2);

/**
在数学上，将 Unicode 码点值转换为 UTF-16 编码的过程涉及到一些数学运算。
UTF-16 编码采用不同长度的编码单元来表示不同范围的字符，包括使用一个或两个 16 位编码单元。
对于 Unicode 码点值 20BB7，我们可以通过以下步骤将其转换为 UTF-16 编码 \uD842\uDFB7：
将 Unicode 码点值减去 0x10000 得到一个值 U。
U = 0x20BB7 - 0x10000 = 0xBB7
将 U 分割为两部分，分别称为高代理项和低代理项：
高代理项：0xD800 + Math.floor(U / 0x400)
低代理项：0xDC00 + (U % 0x400)
将高代理项和低代理项转换为对应的 UTF-16 编码单元。
按照上述步骤，我们可以计算出 Unicode 码点值 20BB7 对应的 UTF-16 编码为 \uD842\uDFB7。
 */

function convertUnicode(unicodePointInt) {
  this.unicodeValue = unicodePointInt;
  const unicodeInt = parseInt(this.unicodeValue, 16);
  this.binaryValue = unicodeInt.toString(2);
  if (this.unicodeValue < 0x10000) {
    this.utf16Value =`\\u${unicodeInt.toString(16).toUpperCase()}`;
    return;
  } 
  const unicodeValue = parseInt('0x' + this.unicodeValue);
  const highSurrogate = 0xD800 + Math.floor((unicodeValue - 0x10000) / 0x400);
  const lowSurrogate = 0xDC00 + ((unicodeValue - 0x10000) % 0x400);

  const utf16Value = String.fromCharCode(highSurrogate, lowSurrogate);

  console.log(Math.floor((unicodeValue - 0x10000) / 0x400), (unicodeValue - 0x10000) % 0x400); 
  this.utf16Value =`\\u${highSurrogate.toString(16).toUpperCase()}\\u${lowSurrogate.toString(16).toUpperCase()}`;
}

const c = new convertUnicode('20bb7');
console.log(c.utf16Value);


console.log("\u{20bb7}".length);

let s3 = "\u{20bb7}a";
console.log(s3.codePointAt(0), s3.codePointAt(2));  // a 在s3中是第二个字符，单仍然需要传递参数2
console.log(s3.codePointAt(0).toString(16), s3.codePointAt(2).toString(16));

Log('for...of... 可以正确识别32位的字符：')
for(let ch of s3) {
  console.log(ch.codePointAt(0), ch.codePointAt(0).toString(16));
}

Log('String.fromCodePoint')
Log(String.fromCodePoint(0x20bb7))
Log('\u{20bb7}')


// 字符串遍历器接口 for...of...， 可以识别32位字符（传统for in 无法正常遍历）
Log('字符串遍历器接口 for...of...， 可以识别32位字符（传统for in 无法正常遍历）：');
let text = '\u{20bb7}abc';
for(let ch of text) {
  console.log(ch);
}

// ES6使用at() 代替 charAt —— 兼容性不行
/**
 Log("ES6使用at() 代替 charAt()")
 Log('abc'.charAt(0), '\u{20bb7}'.at(0))
 */


 