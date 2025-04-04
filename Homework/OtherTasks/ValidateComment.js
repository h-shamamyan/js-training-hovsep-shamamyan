/*
 * Task: Comment Validation
 * Implement a function called validateComment(comment)
 * that checks whether a given comment contains any harassing or
 * offensive words from a predefined list.
 * The function should ensure input validation and detect harmful words using a simple for loop.
 *
 * 📋 **Requirements:**
 *
 * 1. The function must accept a single argument, comment.
 * 2. If the input is not a string, return the message:
 *    "Invalid input: Comment must be a string."
 * 3. The function should check whether comment contains any word from a predefined
 *    list of harassment-related words:
 *    ["idiot", "loser", "moron", "stupid", "dumb", "fool", "bully", "creep"]
 * 4. The check must be case-insensitive, meaning "Idiot" and "idiot" should be treated the same.
 * 5. Use a simple for loop for iteration (do not use array methods like .some(), .filter(), or .find()).
 *
 * ⚠️ If the comment contains any harassing word, return the message:
 *    "This comment can't be posted as it contains the word: '<bad word>'"
 *    The message should include the first detected harassing word.
 * 6. If the comment does not contain any offensive words, return the original comment prefixed with:
 *    "Comment posted successfully! " + comment
 */

function validateComment(comment) {
  // Predefined list of offensive words
  const offensiveWords = [
    "idiot",
    "loser",
    "moron",
    "stupid",
    "dumb",
    "fool",
    "bully",
    "creep",
  ];

  // Step 2: Check if the input is a string
  if (typeof comment !== "string") {
    return "Invalid input: Comment must be a string.";
  }

  // Step 3: Iterate through each word in the offensiveWords list
  for (let i = 0; i < offensiveWords.length; i++) {
    // Step 4: Case-insensitive check
    if (comment.toLowerCase().includes(offensiveWords[i].toLowerCase())) {
      // Step 5: Return the message with the detected offensive word
      return `This comment can't be posted as it contains the word: '${offensiveWords[i]}'`;
    }
  }

  // Step 6: If no offensive words are found, return the original comment
  return "Comment posted successfully! " + comment;
}

// Defined the test cases
const testCases = [
  {
    testNumber: "Test 1:",
    testName: "Valid comment with no offensive words",
    input: "This is a good comment.",
    expectedOutput: "Comment posted successfully! This is a good comment.",
  },
  {
    testNumber: "Test 2:",
    testName: "Comment with an offensive word (case insensitive)",
    input: "You are an idiot!",
    expectedOutput:
      "This comment can't be posted as it contains the word: 'idiot'",
  },
  {
    testNumber: "Test 3:",
    testName: "Invalid input - comment is not a string (number)",
    input: 12345,
    expectedOutput: "Invalid input: Comment must be a string.",
  },
  {
    testNumber: "Test 4:",
    testName: "Comment with an offensive word in different case",
    input: "You're such a MORON!",
    expectedOutput:
      "This comment can't be posted as it contains the word: 'moron'",
  },
];

// Run all test cases
runTest(testCases);

function runTest(testCases) {
  testCases.forEach(({ testNumber, testName, input, expectedOutput }) => {
    const result = validateComment(input);

    if (result === expectedOutput) {
      // For Passed Test
      console.log(
        `${testNumber}  Passed ✅: Assertion passed! Expected and got: "${expectedOutput}"`
      );
    } else {
      // For Failed Test
      console.log(
        `${testNumber}  Failed ❌: Expected "${expectedOutput}", but got "${result}"`
      );
    }
  });
}
