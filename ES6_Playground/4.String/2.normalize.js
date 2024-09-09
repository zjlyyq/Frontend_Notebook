const Log = console.log;

Log('\u01d1')  // 直接提供带重音符号的符号
Log(
  '\u004f',
  '\u030c',
  '\u004f\u030c') // O ̌  提供合成符号

Log('\u01d1' === '\u004f\u030c');
// normalize 的 四个参数
// 1. NFC 模式 —— 默认模式
Log("1. NFC 模式 —— 默认模式: ")
Log('\u01d1'.normalize() === '\u004f\u030c'.normalize());
Log('\u01d1'.normalize('NFC').length)

// 2. NFD 模式 —— 标准等价分解：返回分解出的多个简单字符
Log("2. NFD 模式 —— 标准等价分解：返回分解出的多个简单字符: ")
Log('\u01d1'.normalize('NFD').length, '\u01d1'.normalize('NFD'))
for(let ch of '\u01d1'.normalize('NFD')) {
  Log(ch);
}
// 3. NFKC 模式 —— 兼容等价合成： 语义上等价，视觉上不等价
Log("3. NFKC 模式 —— 兼容等价合成： 语义上等价，视觉上不等价: ")
Log('\u01d1'.normalize('NFKC').length, '\u01d1'.normalize('NFKC'),'\u01d1'.normalize('NFKC') === '\u004f\u030c'.normalize('NFKC'))
for(let ch of '\u01d1'.normalize('NFKC')) {
  Log(ch);
}

// 4. NFKD 模式 —— 兼容等价分解：在NFKC 模式前提下，返回合成字符分解的多个简单字符
Log("4. NFKD 模式 —— 兼容等价分解：在NFKC 模式前提下，返回合成字符分解的多个简单字符: ")
Log('\u01d1'.normalize('NFKD').length, '\u01d1'.normalize('NFKC'),'\u01d1'.normalize('NFKC') === '\u004f\u030c'.normalize('NFKD'))
for(let ch of '\u01d1'.normalize('NFKD')) {
  Log(ch);
}