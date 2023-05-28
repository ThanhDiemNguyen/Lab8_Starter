// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Test 1: matches valid phone numbers
test('match valid phone numbers', () => {
    expect(functions.isPhoneNumber('(012) 345-6789')).toBe(true);
});
test('match valid phone numbers', () => {
    expect(functions.isPhoneNumber('(987) 654-3210')).toBe(true);
});
test('match valid phone numbers', () => {
    expect(functions.isPhoneNumber('0123456789')).toBe(false);
});
test('match valid phone numbers', () => {
    expect(functions.isPhoneNumber('9876543210')).toBe(false);
});

// Test 2: matches valid emails
test('match valid emails', () => {
    expect(functions.isEmail('username@ucsd.edu')).toBe(true);
});
test('match valid emails', () => {
    expect(functions.isEmail('username@gmail.com')).toBe(true);
});
test('match valid emails', () => {
    expect(functions.isEmail('usernameucsdedu')).toBe(false);
});
test('match valid emails', () => {
    expect(functions.isEmail('abcdefghi')).toBe(false);
});

/*
 * Test 3: The password's first character must be a letter, 
 * it must contain at least * 4 characters and no more than 15 characters 
 * and no characters other than * * letters, numbers and the underscore may be used
 */
test('match valid password', () => {
    expect(functions.isStrongPassword('cse110_sp22')).toBe(true);
});
test('match valid password', () => {
    expect(functions.isStrongPassword('abcdef123')).toBe(true);
});
test('match valid password', () => {
    expect(functions.isStrongPassword('hi')).toBe(false);
});
test('match valid password', () => {
    expect(functions.isStrongPassword('110')).toBe(false);
});

/*
 * Test 4: This regular expressions matches dates of the form XX / XX / YYYY where 
 * XX can be 1 or 2 digits long and YYYY is always 4 digits long.
 */
test('match dates of the form XX / XX / YYYY where ', () => {
    expect(functions.isDate('05/28/2023')).toBe(true);
});
test('match dates of the form XX / XX / YYYY where ', () => {
    expect(functions.isDate('01/01/2023')).toBe(true);
});
test('match dates of the form XX / XX / YYYY where ', () => {
    expect(functions.isDate('05-28-2023')).toBe(false);
});
test('match dates of the form XX / XX / YYYY where ', () => {
    expect(functions.isDate('05.28.2023')).toBe(false);
});

// Test 5: Matches valid 3 or 6 character hex codes used for HTML or CSS.
test('match valid 3 or 6 character hex codes used for HTML or CSS', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});
test('match valid 3 or 6 character hex codes used for HTML or CSS', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});
test('match valid 3 or 6 character hex codes used for HTML or CSS', () => {
    expect(functions.isHexColor('#1234567')).toBe(false);
});
test('match valid 3 or 6 character hex codes used for HTML or CSS', () => {
    expect(functions.isHexColor('#abcdefg')).toBe(false);
});