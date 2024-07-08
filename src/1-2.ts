{
  //

  type TObj = {
    club: string;
    season: number;
    isTransferred?: boolean;
    player: "Messi" // literal type: type which defined hard coded
  };

  const ucl: TObj = {
    club: "Manchester City",
    season: 2024,
    // isTransferred: true,
    player: "Messi"
  };

  //
}
