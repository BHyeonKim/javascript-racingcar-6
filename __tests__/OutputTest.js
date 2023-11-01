import GameConsole from '../src/view/console.js';
import Car from '../src/model/car.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('출력 테스트', () => {
  test('라운드 출력', () => {
    const car1 = new Car('car1');
    const car2 = new Car('car2');

    const cars = [car1, car2];

    const logSpy = getLogSpy();

    GameConsole.printRoundResult(cars);

    expect(logSpy).toHaveBeenCalledWith('car1 : ');
    expect(logSpy).toHaveBeenCalledWith('car2 : ');
    expect(logSpy).toHaveBeenCalledWith('');

    car1.move(1);
    GameConsole.printRoundResult(cars);

    expect(logSpy).toHaveBeenCalledWith('car1 : -');
    expect(logSpy).toHaveBeenCalledWith('car2 : ');
    expect(logSpy).toHaveBeenCalledWith('');

    car1.move(1);
    GameConsole.printRoundResult(cars);

    expect(logSpy).toHaveBeenCalledWith('car1 : --');
    expect(logSpy).toHaveBeenCalledWith('car2 : ');
    expect(logSpy).toHaveBeenCalledWith('');

    car2.move(1);
    GameConsole.printRoundResult(cars);

    expect(logSpy).toHaveBeenCalledWith('car1 : --');
    expect(logSpy).toHaveBeenCalledWith('car2 : -');
    expect(logSpy).toHaveBeenCalledWith('');
  });
});