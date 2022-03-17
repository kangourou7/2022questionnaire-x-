var q9_Name = "entry.1189262394"
var q10_Name = "entry.1912228487"
var q11_Name = "entry.1373016093"
var q12_Name = "entry.1921329787"
var q13_Name = "entry.2143339229"

var q9targetY = [q11_Name,q12_Name,q13_Name]
var q9targetN = [q10_Name]
//質問9で「はい」と回答した場合
function q9_yes(){
    var q91 = document.getElementById("91")
    if(q91.checked = true){
        for(i=0;i<q9targetY.length;i++){
            var q9target = document.getElementsByName(q9targetY[i])
            for(j=0;j<q9targetY[i].length;j++){
                q9target[j].disabled = false
            }        
        }
        for(i=0;i<q9targetN.length;i++){
            var q9target = document.getElementsByName(q9targetN[i])
            for(j=0;j<q9targetN[i].length;j++){
                q9target[j].disabled = true
            }        
        }

    }
}

//質問9で「いいえ」と回答した場合
function q9_no(){
    var q92 = document.getElementById("92")
    if(q92.checked = true){
        for(i=0;i<q9targetY.length;i++){
            var q9target = document.getElementsByName(q9targetY[i])
            for(j=0;j<q9targetY[i].length;j++){
                q9target[j].disabled = true
            }        
        }
        for(i=0;i<q9targetN.length;i++){
            var q9target = document.getElementsByName(q9targetN[i])
            for(j=0;j<q9targetN[i].length;j++){
                q9target[j].disabled = false
            }        
        }

    }
}


//質問30単一回答制御
/*
for(i=1;i<=5;i++){
    for(j=1;j<=5;j++){
        var id30 = "30" + i + "" + j
        alert(id30)
        var select30 = document.getElementById(id30)
        if(select30.checked){
            for(k=1;k<=5;k++){
                if(i!==k){
                    var clearId30 = "30" +  k + "" + j
                    alert(clearId30)
                    var clear30 = document.getElementById(clearId30)
                    clear30.checked = false
                }
            }
        }
    }
}
*/