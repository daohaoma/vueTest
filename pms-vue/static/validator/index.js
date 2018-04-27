// 正则表达式
export default {
  // 手机和座机
  phone: {
    pattern: /(^((13[0-9])|(15[0-9])|(14[0-9])|(17[0-9])|(18[0-9])|19[0-9])\d{8}$)|(^(0[0-9]{2,3}\-?)?[2-9][0-9]{6,7}(\-?[0-9]{1,4})?$)|(^(17[0-9]{3,6}\-?)\d{5})/,
    message: '请输入正确的电话号码',
  },
  // oA手机和座机
  oAphone: /(^1\d{10}$)/,
  // 身份证
  idCard: {
    pattern: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,
    message: '请输入正确的身份证',
  },
  // 字母
  letter: {
    pattern: /^[A-Za-z]*$/,
    message: '请输入字母',
  },
  // 一位小数
  decimalOne: {
    pattern: /^[0-9]+(\.[0-9]{1})?$/,
    message: '请输入正确数据，如1.1，最多1位小数',
  },
  // 两位小数
  decimalTow: {
    pattern: /^[0-9]+(\.[0-9]{1,2})?$/,
    message: '请输入正确数据，如1.12，最多2位小数',
  },
  // 三位小数
  decimalThree: {
    pattern: /^[0-9]+(\.[0-9]{1,3})?$/,
    message: '请输入正确数据，如1.123，最多3位小数',
  },
  // 四位小数
  decimalFour: {
    pattern: /^[0-9]+(\.[0-9]{1,4})?$/,
    message: '请输入正确数据，如1.1234，最多4位小数',
  },
  // 正整数
  positiveInteger: {
    pattern: /^[0-9]*$/,
    message: '请输入正整数',
  },
  // 字母数字
  letterOrNumber: {
    pattern: /^[0-9a-zA-Z]+$/,
    message: '请输入字母、数字',
  },
  // 中英文数字
  letterOrNumberOrChinese: {
    pattern: /^[\u4E00-\u9FA5A-Za-z0-9]+$/,
    message: '请输入中文、字母、数字',
  },
  // 中英文数字符号
  letterOrNumberOrChineseOrCharacter: {
    pattern: /^[a-zA-Z0-9-\u4e00-\u9fa5-\/-/(-/)-/#（）()]+$/,
    message: '请输入中文、字母、数字、-、#、/或者左右括号',
  },
  // 密码
  password: {
    pattern: /^[A-Za-z0-9~!@#$%^&*()_+`\-={}:;<>?,.\/]{4,12}$/,
    message: '密码长度为4~20位，且只能包括数字、英文、（~!@#$%^&*()_+`-={}:;<>?,./）中的符号',
  },
  checked: 'checked',
}
