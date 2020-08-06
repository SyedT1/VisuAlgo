function f(i = 0, d = "race"){
  return i<d.length?f(i+1,d)+d[i++]:'\0';
}
