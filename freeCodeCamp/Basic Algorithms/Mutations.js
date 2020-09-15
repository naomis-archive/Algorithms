//test if letters in arr[1] are all present in arr[0]
function mutation(arr) {
  return new RegExp("(?=.*" + arr[1].split("").join(")(?=.*") + ")", "i").test(
    arr[0]
  );
}
