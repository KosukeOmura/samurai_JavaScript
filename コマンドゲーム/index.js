const damageRenge = 0.3;

const playerData = {
    name:"satoshi",
    hp:105,
    attack: 9,
    defence:1
};

const venomData = {
    name:"Akuma",
    hp:100,
    attack:9,
    defence:1
};

//htmlに表示させる処理
function insertText(id,text){
    document.getElementById(id).textContent = text;
}

//アタック関数
function damageMath(attack,defence){
    const maxDamage = attack +(1 + damageRenge),
        minDamage = attack +(1 - damageRenge),
        attackDamage = Math.floor(Math.random() * (maxDamage - minDamage) + minDamage);

    const damage = attackDamage - defence;

    //
    if(damage < 1){
        return 0
    }else {
        return damage;
    }
}

insertText("player",playerData["name"]);
insertText("playerCurrent_hp",playerData["hp"]);
insertText("playerMax_hp",playerData["hp"]);

insertText("venom",venomData["name"]);
insertText("venomCurrent_hp",venomData["hp"]);
insertText("venomMax_hp",venomData["hp"]);

//アタックボタンクリック時にCurrent_hpが-10ずつ減る処理
document.getElementById("attack").addEventListener('click', function(){
    let endGame = false;

    //攻撃ダメージを定義
    const playerDamage = damageMath(playerData["attack"],venomData["defence"]);
    const venomDamage = damageMath(venomData["attack"],playerData["defence"]);

    //攻撃ダメージをhpへ反映
    playerData["hp"] -= playerDamage;
    venomData["hp"] -= venomDamage;

    insertText("playerCurrent_hp",playerData["hp"]);
    insertText("venomCurrent_hp",venomData["hp"]);

    //どちらのHPが０になったらアラート発動処理
    if (venomData["hp"] <= 0 ){
        alert("勝利です!");
        endGame = true;

        venomData == 0;
        insertText("venomCurrent_hp",venomData["hp"]);
    }else if (playerData["hp"] <= 0 ){
        alert("敗北です！");
        endGame = true;

        playerData == 0;
        insertText("playerCurrent_hp",playerData["hp"]);
    }

    //0 endGameがtrueになり、アタックできないようにする
    if(endGame){
        document.getElementById("attack").classList.add("deacitve");
    }
});