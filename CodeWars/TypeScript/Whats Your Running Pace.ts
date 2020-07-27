//given distance and time, calculate rate of velocity
export function runningPace(distance: number, time: string): string {
  let minutes = time.split(":")[0];
  let seconds = time.split(":")[1];
  let calctime = parseInt(minutes) * 60 + parseInt(seconds);
  let endtime = calctime / distance;
  let endminutes = Math.floor(endtime / 60);
  let endseconds = Math.floor(endtime - endminutes * 60);
  return (
    endminutes.toString() +
    ":" +
    (endseconds.toString().length == 2
      ? endseconds.toString()
      : "0" + endseconds.toString())
  );
}
