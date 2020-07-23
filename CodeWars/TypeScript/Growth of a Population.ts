//determine how long it takes to reach p population
export class G964 {
  public static nbYear = (p0, percent, aug, p) => {
    let pop = p0;
    let count = 1;
    while (pop + pop * (percent / 100) + aug < p) {
      pop = pop + pop * (percent / 100) + aug;
      count++;
    }
    return count;
  };
}
