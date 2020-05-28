const merge = (a, beginIndex, mid, endIndex) => {
  const tempArr = [];
  let left = beginIndex;
  let right = mid + 1;

  while (left <= mid && right <= endIndex) {
    if (a[left] <= a[right]) {
      tempArr.push(a[left]);
      left++;
    } else {
      tempArr.push(a[right]);
      right++;
    }
  }

  while (left <= mid) {
    tempArr.push(a[left]);
    left++;
  }

  while (right <= endIndex) {
    tempArr.push(a[right]);
    right++;
  }

  for (left = beginIndex; left <= endIndex; left++) {
    a[left] = tempArr[left - beginIndex];
  }
};

const sort = (a, beginIndex, endIndex) => {
  if (beginIndex < endIndex) {
    const mid = Math.floor((beginIndex + endIndex) / 2);
    sort(a, beginIndex, mid);
    sort(a, mid + 1, endIndex);
    merge(a, beginIndex, mid, endIndex);
  }

  return a;
};

module.exports = {
  sort
};
