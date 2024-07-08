{
    //
    const players: string[] = ["Lionel Messi", "Neymar Jr", "Luis Suarez", "Xavi Hernandez", "Iniesta", "Busquets", "Carlos Puyol", "Jordi Alba", "Gerard Pique", "Dani Alves", "Ter Stegen"];

    const PlayerList = {
        // spreading
        ...players
    }
    // console.log(PlayerList);

    // rest operator 
    const [a, b, c, d, e, f, ...restPlayers] = players;
    console.log(restPlayers)


// 
}