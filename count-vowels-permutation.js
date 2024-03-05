/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
  let mod = 10 ** 9 + 7;
  let a = 1,
    e = 1,
    i = 1,
    o = 1,
    u = 1;
  for (let index = 1; index < n; index++) {
    a_next = e;
    e_next = (a + i) % mod;
    i_next = (a + e + o + u) % mod;
    o_next = (i + u) % mod;
    u_next = a;
    a = a_next;
    e = e_next;
    i = i_next;
    o = o_next;
    u = u_next;
  }
  return (a + e + i + o + u) % mod;
};

console.log(countVowelPermutation(5));
