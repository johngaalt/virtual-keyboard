const LETTERS = [
  { primary: 'A', secondary: 'Ф', keyCode: 65 },
  { primary: 'B', secondary: 'И', keyCode: 66 },
  { primary: 'C', secondary: 'С', keyCode: 67 },
  { primary: 'D', secondary: 'В', keyCode: 68 },
  { primary: 'E', secondary: 'У', keyCode: 69 },
  { primary: 'F', secondary: 'А', keyCode: 70 },
  { primary: 'G', secondary: 'П', keyCode: 71 },
  { primary: 'H', secondary: 'Р', keyCode: 72 },
  { primary: 'I', secondary: 'Ш', keyCode: 73 },
  { primary: 'J', secondary: 'О', keyCode: 74 },
  { primary: 'K', secondary: 'Л', keyCode: 75 },
  { primary: 'L', secondary: 'Д', keyCode: 76 },
  { primary: 'M', secondary: 'Ь', keyCode: 77 },
  { primary: 'N', secondary: 'Т', keyCode: 78 },
  { primary: 'O', secondary: 'Щ', keyCode: 79 },
  { primary: 'P', secondary: 'З', keyCode: 80 },
  { primary: 'Q', secondary: 'Й', keyCode: 81 },
  { primary: 'R', secondary: 'К', keyCode: 82 },
  { primary: 'S', secondary: 'Ы', keyCode: 83 },
  { primary: 'T', secondary: 'Е', keyCode: 84 },
  { primary: 'U', secondary: 'Г', keyCode: 85 },
  { primary: 'V', secondary: 'М', keyCode: 86 },
  { primary: 'W', secondary: 'Ц', keyCode: 87 },
  { primary: 'X', secondary: 'Ч', keyCode: 88 },
  { primary: 'Y', secondary: 'Н', keyCode: 89 },
  { primary: 'Z', secondary: 'Я', keyCode: 90 },
];

const DIGITS = [
  { primary: '1', secondary: '!', keyCode: 49 },
  { primary: '2', secondary: '@', keyCode: 50 },
  { primary: '3', secondary: '#', keyCode: 51 },
  { primary: '4', secondary: '$', keyCode: 52 },
  { primary: '5', secondary: '%', keyCode: 53 },
  { primary: '6', secondary: '^', keyCode: 54 },
  { primary: '7', secondary: '&', keyCode: 55 },
  { primary: '8', secondary: '*', keyCode: 56 },
  { primary: '9', secondary: '(', keyCode: 57 },
  { primary: '0', secondary: ')', keyCode: 48 },
];

const SPECIAL_SYMBOLS = [
  { primary: 'Shift', keyCode: 16 },
  { primary: 'Ctrl', keyCode: 17 },
  { primary: 'Alt', keyCode: 18 },
  { primary: 'RAlt', keyCode: 18 },
  { primary: 'Tab', keyCode: 9 },
  { primary: 'Caps Lock', keyCode: 20 },
  { primary: 'Esc', keyCode: 27 },
  { primary: '←', keyCode: 37 },
  { primary: '↑', keyCode: 38 },
  { primary: '→', keyCode: 39 },
  { primary: '↓', keyCode: 40 },
  { primary: 'Backspace', keyCode: 8 },
  { primary: 'Del', keyCode: 46 },
  { primary: 'Enter', keyCode: 13 },
  { primary: '[', secondary: '{', keyCode: 219 },
  { primary: ']', secondary: '}', keyCode: 221 },
  { primary: '\\', secondary: '|', keyCode: 220 },
  { primary: ';', secondary: ':', keyCode: 186 },
  { primary: '\'', secondary: '"', keyCode: 222 },
  { primary: ',', secondary: '<', keyCode: 188 },
  { primary: '.', secondary: '>', keyCode: 190 },
  { primary: '/', secondary: '?', keyCode: 191 },
  { primary: '`', secondary: '~', keyCode: 192 },
  { primary: '-', secondary: '_', keyCode: 189 },
  { primary: '=', secondary: '+', keyCode: 187 },
  { primary: 'RShift', keyCode: 16 },
  { primary: 'Win', keyCode: 91 },
  { primary: 'Space', keyCode: 32 },
  { primary: 'RCtrl', keyCode: 17 },

];

const orderedKeys = [
  'Esc',
  '`',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace',
  'Tab',
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  '[',
  ']',
  '\\',
  'Del',
  'Caps Lock',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  ';',
  '\'',
  'Enter',
  'Shift',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M',
  ',',
  '.',
  '/',
  '↑',
  'RShift',
  'Ctrl',
  'Win',
  'Alt',
  'Space',
  'RAlt',
  'RCtrl',
  '←',
  '↓',
  '→',
];

const keyboardArray = [...LETTERS, ...SPECIAL_SYMBOLS, ...DIGITS];

const keys = keyboardArray.sort(
  (a, b) => orderedKeys.indexOf(a.primary) - orderedKeys.indexOf(b.primary),
);

export default keys;
