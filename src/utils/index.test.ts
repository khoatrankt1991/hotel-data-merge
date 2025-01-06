import { formatLowTrimArr } from '.';

describe('Test Utils', () => {
	test('Test: formatLowTrimArr', () => {
		const inputArr = ['hotel', ' Bed room', 'Hair Dryer'];
		const expectedOutput = ['hotel', 'bed room', 'hair dryer'];
		const formattedArr = formatLowTrimArr(inputArr);
		expect(formattedArr).toEqual(expectedOutput);
	});
});
