String.prototype.toPersianDigits = function () {
  var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return this.replace(/[0-9]/g, function (w) {
    return id[+w]
  });
}

String.prototype.toEnglishDigits = function () {
  var num_dic = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
  }

  return this.replace(/[۰-۹]/g, function (w) {
    return num_dic[w]
  });
}
Number.prototype.toPersianDigits = function () {
  var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return ("" + this).replace(/[0-9]/g, function (w) {
    return id[+w]
  });
}

String.prototype.toAmount = function () {
  return isNaN(this.replace(/,/g, "")) ? this : this.replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


Number.prototype.toAmount = function () {
  return ("" + this).replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
