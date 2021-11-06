const villanData={
    hp:12,
    name:"トムラ"
};

while(true) {
    var command = prompt('敵が現れた！（【1】攻撃　【2】逃げる）');
    var random = Math.floor(Math.random() * 10);

    // [攻撃]を選択した場合
    if(command === '1') {
    
        villanData['hp'] = villanData['hp'] - random;
        console.log(random + 'の攻撃！');
        if(villanData['hp'] <=0) {
            console.log('敵を倒した！');
            break;
        }
    console.log('敵の体力は残り' + villanData['hp'] + 'です');

    // [逃げる]を選択した場合
    } else if(command === '2') {
    
        console.log('無事に逃げました');
        break;
    }
}

console.log('ゲーム終了');