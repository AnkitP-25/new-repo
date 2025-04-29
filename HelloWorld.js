function test(name,by,cy){
  const age = cy-by;
  const r = "age of "+name+"is"+age;
  return r;
}
console.log(test("alice",1871,1964));
