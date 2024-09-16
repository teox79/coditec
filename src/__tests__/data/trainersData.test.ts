import typia from 'typia';
import { TrainerState } from '../../context/TrainerType';
import { trainerData } from '../../data/trainers';

describe('TrainersState Validation', () => {
    it('should validate valid data', () => {

        expect(typia.is<TrainerState>(trainerData)).toBe(true);
    });
});