
import typia from 'typia';
import { EventState } from '../../context/EventType';
import { eventData } from '../../data/events';

describe('EventsState Validation', () => {
    it('should validate valid data', () => {

        expect(typia.is<EventState>(eventData)).toBe(true);
    });
});