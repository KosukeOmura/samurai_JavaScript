"use strict";

var daiet = 70;

switch (daiet) {
  case 80:
    alert(80 + 'kgです');
    break;

  case 70:
    consoe.log(70 + 'kgです');

  default:
    alert('どれにも該当しません');
}

var myName = 'こうすけ';
var age = '23';
console.log('僕は' + myName + '年齢は' + age);
/* alert('僕は'+myName+'年齢は'+age); */

/* じゃんけんゲーム */

var janken = ['グー', 'チョキ', 'パー'];
var rndo = Math.floor(Math.random() * janken.length);
alert(janken[rndo]);
/* くじびき */

var kujibiki = ['大吉', '中吉', '小吉'];
var kujirandom = Math.floor(Math.random() * kujibiki.length);
alert(kujibiki[kujirandom]);
/**鳴き声当てゲーム */

var myAnimal = '猫';

switch (myAnimal) {
  case '犬':
    console.log('わんわん');
    break;

  case '猫':
    console.log('にゃーん');
    break;

  case 'ライオン':
    console.log('ガオー');
    break;

  default:
    console.log('該当する鳴き声がありません');
}
/**forEach */


var user = ['田中太郎', '佐藤一郎', '山田次郎', '伊藤花子'];
user.forEach(function (element) {
  alert(element);
});