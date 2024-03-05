// Function to print a substring str[low..high]
function printSubStr(str, low, high) {
  for (let i = low; i <= high; ++i) {
    console.log(str[i]);
  }
}

// Function to find the longest palindromic substring
function longestPalSubstr(s) {
  const n = s.length;
  let start = 0,
    end = 1;
  let low, hi;

  // Traverse the input string
  for (let i = 0; i < n; i++) {
    // Find the longest palindromic substring of even size
    low = i - 1;
    hi = i;

    // Expand substring while it is a palindrome
    // and in bounds
    while (low >= 0 && hi < n && s[low] === s[hi]) {
      // Update the maximum length and starting index
      if (hi - low + 1 > end) {
        start = low;
        end = hi - low + 1;
      }
      low--;
      hi++;
    }

    // Find the longest palindromic substring of odd size
    low = i - 1;
    hi = i + 1;

    // Expand substring while it is a palindrome
    // and in bounds
    while (low >= 0 && hi < n && s[low] === s[hi]) {
      // Update the maximum length and starting index
      if (hi - low + 1 > end) {
        start = low;
        end = hi - low + 1;
      }
      low--;
      hi++;
    }
  }

  // Print the longest palindromic substring
  console.log("Longest palindrome substring is: ");
  printSubStr(s, start, start + end - 1);

  // Return the output length
  return end;
}

const str = "forgeeksskeegfor";

console.log("\nLength is: " + longestPalSubstr(str));
