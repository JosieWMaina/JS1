// Triangle One

const traingleOneHeight = 13;
const traingleOneBase = 10;
const traingleOneArea = (traingleOneBase * traingleOneHeight) / 2;
const triangleOneSpan = (document.getElementById(
  "triangle-one"
).innerText = `${traingleOneArea}cm`);

console.log(`Triangle One has an area of ${traingleOneArea}cm`);

// Triangle Two

const traingleTwoHeight = 20.3;
const traingleTwoBase = 16.5;
const traingleTwoArea = (traingleTwoBase * traingleTwoHeight) / 2;
const triangleTwoSpan = (document.getElementById(
  "triangle-two"
).innerText = `${traingleTwoArea}cm`);

const caseNoteOne = document.getElementById("case-one");

if(traingleOneArea > traingleTwoArea) {
  caseNoteOne.innerText = `CASE 1: Triangle One has greater area (${traingleOneArea})`;
} else if(traingleTwoArea > traingleOneArea) {
  caseNoteOne.innerText = `CASE 1: Triangle Two has greater area (${traingleTwoArea})`;
} else {
  caseNoteOne.innerText = `CASE 1: Both One and Two triangles have equal area.`;
}

// Triangle Three

const traingleThreeHeight = 20.3;
const traingleThreeBase = 16.5;
const traingleThreeArea = (traingleThreeBase * traingleThreeHeight) / 2;
const triangleThreeSpan = (document.getElementById(
  "triangle-three"
).innerText = `${traingleThreeArea}cm`);

// Triangle Four

const traingleFourHeight = 16.5;
const traingleFourBase = 20.3;
const traingleFourArea = (traingleFourBase * traingleFourHeight) / 2;
const triangleFourSpan = (document.getElementById(
  "triangle-four"
).innerText = `${traingleFourArea}cm`);

const caseNoteTwo = document.getElementById("case-two");


if(traingleThreeArea > traingleFourArea) {
  caseNoteTwo.innerText = `CASE 2: Triangle Three has greater area (${traingleThreeArea})`;
} else if(traingleFourArea > traingleThreeArea) {
  caseNoteTwo.innerText = `CASE 2: Triangle Four has greater area (${traingleFourArea})`;
} else {
  caseNoteTwo.innerText = `CASE 2: Both Three and Four triangles have equal area.`;
}

// Triangle Five

const traingleFiveHeight = 5.6;
const traingleFiveBase = 7.8;
const traingleFiveArea = (traingleFiveBase * traingleFiveHeight) / 2;
const triangleFiveSpan = (document.getElementById(
  "triangle-five"
).innerText = `${traingleFiveArea}cm`);

// Triangle Six

const traingleSixHeight = 12.4;
const traingleSixBase = 9.3;
const traingleSixArea = (traingleSixBase * traingleSixHeight) / 2;
const triangleSixSpan = (document.getElementById(
  "triangle-six"
).innerText = `${traingleSixArea}cm`);

const caseNoteThree = document.getElementById("case-three");

if(traingleFiveArea > traingleSixArea) {
  caseNoteThree.innerText = `CASE 3: Triangle Five has greater area (${traingleFiveArea})`;
} else if(traingleSixArea > traingleFiveArea) {
  caseNoteThree.innerText = `CASE 3: Triangle Six has greater area (${traingleSixArea})`;
} else {
  caseNoteThree.innerText = `CASE 3: Both Five and Six triangles have equal area.`;
}
