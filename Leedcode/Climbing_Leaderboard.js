ranked = [100,100,50,40,40,20,10]
player = [5,80,105]
function climbingleaderboard(ranked, player){
    let leaderboard = [...new Set(ranked)];
    let m=player.length;
    let playerRank = [];
    for(let i=0; i<player.length; i++){
        let ranked = leaderboard +1;
        for(let j=0; j<leaderboard.length; j++){
            if(player[i]>=leaderboard[j]){
             ranked = j+1;
            break;
        }
    }
    playerRank.push(ranked +1)
}
    return playerRank;
}
console.log(climbingleaderboard(ranked,player))