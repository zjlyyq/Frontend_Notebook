//Counter.js
import {
  ref
} from 'vue'
export default {
  setup() {
    const unicodeValue = ref('');
    const binaryValue = ref('');
    const utf16Value = ref('');
    const utf16Code = ref('');
    return {
      unicodeValue,
      binaryValue,
      utf16Code,
      utf16Value
    }
  },
  created() {
    this.unicodeValue = '20bb7';
    this.convertUnicode();
  },
  methods: {
    convertUnicode() {
      const unicodeInt = parseInt(this.unicodeValue, 16);
      this.binaryValue = unicodeInt.toString(2);
      const unicodeValue = parseInt('0x' + this.unicodeValue);
      if (unicodeValue < 0x10000) {
        // this.utf16Code =`\\u${new Array(4-unicodeInt.toString(16).length).fill(1).map(_ => '0').join('') + unicodeInt.toString(16).toUpperCase()}`;
        this.utf16Code =`\\u${unicodeInt.toString(16).toUpperCase().padStart(4, '0')}`;  // 使用ES7的padStart优化
        this.utf16Value = String.fromCharCode(unicodeInt);
        return;
      } 
      const highSurrogate = 0xD800 + Math.floor((unicodeValue - 0x10000) / 0x400);
      const lowSurrogate = 0xDC00 + ((unicodeValue - 0x10000) % 0x400);
      const utf16Value = String.fromCharCode(highSurrogate, lowSurrogate);
      this.utf16Value = utf16Value;
      console.log(utf16Value, Math.floor((unicodeValue - 0x10000) / 0x400), (unicodeValue - 0x10000) % 0x400); // 输出：𠮷
      this.utf16Code =`\\u${highSurrogate.toString(16)}\\u${lowSurrogate.toString(16)}`;
    },
  },
  template: /*html*/ `
            <label for="unicodeInput">Enter Unicode Code Point:</label>
            <input type="text" id="unicodeInput" v-model="unicodeValue" @input="convertUnicode">

            <div>
              <h3>Binary Representation:</h3>
              <p>{{ binaryValue }}</p>
            </div>
            <div>
              <h3>UTF-16 Coed:</h3>
              <p>{{ utf16Code }}</p>
            </div>
            <div>
              <h3>UTF-16 Encoding:</h3>
              <p>{{ utf16Value }}</p>
            </div>
            <div>
              <h3>字符长度:</h3>
              <p>{{ utf16Value.length }}</p>
            </div>
            `
}