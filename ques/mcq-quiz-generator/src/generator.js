const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const getRandomIntInclusive = (minValue, maxValue) => {
  minValue = Math.ceil(minValue);
  maxValue = Math.floor(maxValue);
  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
};

const max = (a, b) => (a > b ? a : b);

const ordinal_suffix_of = (i) => {
  let j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
};

const data = [
  () => {
    const n = getRandomIntInclusive(4, 8);
    const array = Array.from({ length: n }, () =>
      Math.floor(Math.random() * 20)
    );
    const originalArray = [...array];
    let ans = 0;
    for (let i = 0; i < n; i++) {
      let flag = false;
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          const temp = array[j + 1];
          array[j + 1] = array[j];
          array[j] = temp;
          flag = true;
        }
      }
      if (!flag) {
        ans = i + 1;
        break;
      }
    }
    let options = [ans];
    const optionCount = 4;
    for (let i = 1; i <= optionCount - 1; i++) {
      let num = getRandomIntInclusive(max(1, ans - 10), ans + 10);
      if (options.includes(num)) {
        i--;
      } else {
        options = [...options, num];
      }
    }
    shuffle(options);
    let result = {
      question:
        "Consider the following array: A = [" +
        originalArray +
        "]. How many iterations of the outer loop will it take to sort this array as per the optimized bubble sort?",
      options: options,
      answer: options.indexOf(ans),
    };
    return result;
  },
  () => {
    const n = getRandomIntInclusive(4, 8);
    const array = Array.from({ length: n }, () =>
      Math.floor(Math.random() * 20)
    );
    const originalArray = [...array];
    const iteration = getRandomIntInclusive(1, n);

    let ans = 0;
    let flag = false;
    for (let i = 0; i < n; i++) {
      if (iteration == i + 1) flag = true;
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          const temp = array[j + 1];
          array[j + 1] = array[j];
          array[j] = temp;
          if (flag) ans++;
        }
      }
      flag = false;
    }
    let options = [ans];
    const optionCount = 4;
    for (let i = 1; i <= optionCount - 1; i++) {
      let num = getRandomIntInclusive(max(1, ans - 10), ans + 10);
      if (options.includes(num)) {
        i--;
      } else {
        options = [...options, num];
      }
    }
    shuffle(options);
    let result = {
      question:
        "Consider the following array being sorted using bubble sort: A = [" +
        originalArray +
        "]. How many swaps occur in the " +
        ordinal_suffix_of(iteration) +
        " iteration of the outer loop?",
      options: options,
      answer: options.indexOf(ans),
    };
    return result;
  },
  () => {
    const n = getRandomIntInclusive(4, 8);
    const array = Array.from({ length: n }, () =>
      Math.floor(Math.random() * 20)
    );
    const originalArray = [...array];
    const iteration = getRandomIntInclusive(1, n);

    let ans = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          const temp = array[j + 1];
          array[j + 1] = array[j];
          array[j] = temp;
        }
      }
      if (iteration == i + 1) {
        ans = [...array];
        break;
      }
    }
    let options = [ans];
    const optionCount = 4;
    for (let i = 1; i <= optionCount - 1; i++) {
      let num = [...ans];
      shuffle(num);
      if (options.includes(num)) {
        i--;
      } else {
        options = [...options, num];
      }
    }
    shuffle(options);
    let result = {
      question:
        "Consider the following array being sorted using bubble sort: A = [" +
        originalArray +
        "]. Which of the following will represent the array after the " +
        ordinal_suffix_of(iteration) +
        " iteration of the bubble sort algorithm (assume ascending order sort)?",
      options: options,
      answer: options.indexOf(ans),
    };
    return result;
  },
];

const generator = () => {
  let datalen = data.length;
  return data[getRandomIntInclusive(0, datalen-1)]();
}

export default generator;