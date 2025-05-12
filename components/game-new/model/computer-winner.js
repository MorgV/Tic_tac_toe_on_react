export const computerWinner = (cells, sequenceSize = 5, fieldSize = 19) => {
  const compareElement = (indexes) => {
    let result = true;

    for (let i = 1; i < indexes.length; i++) {
      result &&= !!cells[indexes[i]];
      result &&= cells[indexes[i]] === cells[indexes[i - 1]];
    }
    return result;
  };

  const getSequenceIndexes = (index) => {
    const gap = Math.floor(sequenceSize / 2);

    const indexes = [
      [], // |
      [], // -
      [], // \
      [], // /
    ];
    for (let j = 0; j < sequenceSize; j++) {
      indexes[0].push(fieldSize * (j - gap) + index);
      indexes[1].push(j - gap + index);
      indexes[2].push(-fieldSize * (j - gap) + index);
      indexes[3].push(fieldSize * (j - gap) + index);
    }

    const x = index % fieldSize;

    if (x < gap || x >= fieldSize - gap) {
      indexes.shift();
      indexes.shift();
      indexes.shift();
    }

    return indexes;
  };

  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
      const indexRow = getSequenceIndexes(i);
      const winnerIndex = indexRow.find((row) => compareElement(row));
      if (winnerIndex) {
        return winnerIndex;
      }
    }
  }
  return undefined;
};
