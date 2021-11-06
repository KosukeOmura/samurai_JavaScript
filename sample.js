//prompt()から攻撃するか決める
//敵の体力は10
//攻撃力は0〜9の乱数で生成される
//逃げるを選択した場合は「無事に逃げました」のメッセージ
//攻撃力の数値を「●の攻撃！」のように毎回出力する
//「敵の体力は残り●です！」というメッセージを毎回出力する
//的を倒したら「敵を倒した！」というメッセージを毎回出力する
//ゲーム終了時に「ゲーム終了」というメッセージを毎回出力する
//ゲームが終了したらプログラムも終了する
const villanData={
    hp:10,
    name:"トムラ"
};

while(true) {

     //闘うか逃げるかの選択
    var command = prompt("ヴィランが現れた！(【1】攻撃【2】逃げる)");
     //攻撃_乱数0〜９
     var attack = Math.floor(Math.random() * 10);

     //【逃げる】を選択した場合
    if(command === '2'){

        console.log("無事に逃げました");
        break;

    //【攻撃】を選択した場合
    }else if(command === '1'){

        //ヴィランHPにhpと攻撃ダメージを引いた数値を格納
        villanData['hp'] = villanData['hp'] - attack;
        //攻撃ダメージ数を表示
        console.log(attack + "の攻撃！");

         //体力0処理
        if(villanData["hp"] <= 0){
            console.log("敵を倒した！");
            break;
        }
        //HPとダメージ数を引いた数値を格納した後に表示
        console.log('敵の体力は残り' + villanData["hp"] + 'です');
    }
}
//体力が0になったら処理が走り、ループを抜けた際の処理
console.log("ゲーム終了！");