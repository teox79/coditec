import { HomeState } from '../../context/HomeType';
import { homeData } from '../../data/home';


describe('homeData', () => {
    it('should match the HomeState interface', () => {
        const data: HomeState = homeData;
        expect(data).toBeDefined();
    });

    it('should have a valid title', () => {
        expect(homeData.title).toBe('Il modo migliore per imparare è divertendosi.');
    });

    it('should have a valid description', () => {
        expect(homeData.description).toBe('Siamo un team di professionisti che insegna ai ragazzi la logica di programmazione.');
    });

    it('should have a valid link', () => {
        expect(homeData.link).toEqual({
            url: '/courses',
            label: 'Corsi',
            target: '_blank'
        });
    });

    it('should have a valid organization', () => {
        expect(homeData.organization).toBeDefined();
        expect(homeData?.organization?.title).toBe('CODITECT');
        expect(homeData?.organization?.subtitle).toBe('Comitato per la divulgazione tecnologica al cittadino');
    });

    it('should have valid statistics', () => {
        expect(homeData.statistics).toBeDefined();
        if (homeData.statistics) {
            expect(homeData.statistics).toHaveLength(4);
            expect(homeData.statistics[0]).toEqual({ description: 'Partecipanti', value: 100 });
        }
    });

    it('should have valid whyUs section', () => {
        expect(homeData.whyUs).toBeDefined();
        expect(homeData?.whyUs?.title).toBe('Perchè scegliere Coditec');
    });

    it('should have valid features', () => {
        expect(homeData.features).toBeDefined();
        if (homeData.features) {
            expect(homeData.features).toHaveLength(3);
            expect(homeData.features[0]).toEqual({ icon: 'scratch.png', title: 'Scratch', url: 'https://scratch.mit.edu/' });
        }
    });

    it('should have a valid course section', () => {
        expect(homeData?.course).toBeDefined();
        expect(homeData?.course?.title).toBe('corsi');
    });
});