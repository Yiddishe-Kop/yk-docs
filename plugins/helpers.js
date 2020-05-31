export const arabicToHebrew = num => {
  let sNumber = String(num);
  let hebrewThousands = [
    "",
    "א׳",
    "ב׳",
    "ג׳",
    "ד׳",
    "ה׳",
    "ו׳",
    "ז׳",
    "ח׳",
    "ט׳"
  ];
  let hebrewHundreds = [
    "",
    "ק",
    "ר",
    "ש",
    "ת",
    "תק",
    "תר",
    "תש",
    "תת",
    "תתק"
  ];
  let hebrewTens = ["", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ"];
  let hebrewUnits = ["", "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט"];

  let numberLength = sNumber.length;
  let sTens = 0;
  let sHundreds = 0;
  let sThousands = 0;
  let sUnits = sNumber[numberLength - 1];
  if (num > 9) sTens = sNumber[numberLength - 2];
  if (num > 99) sHundreds = sNumber[numberLength - 3];
  if (num > 999) sThousands = sNumber[numberLength - 4];
  let myHebrewNumber =
    hebrewThousands[sThousands] +
    hebrewHundreds[sHundreds] +
    hebrewTens[sTens] +
    hebrewUnits[sUnits] +
    "*";
  console.log({ sHundreds });

  myHebrewNumber = myHebrewNumber.replace("יו*", "טז*");
  myHebrewNumber = myHebrewNumber.replace("יה*", "טו*");
  myHebrewNumber = myHebrewNumber.slice(0, myHebrewNumber.length - 1);
  return myHebrewNumber;
}
