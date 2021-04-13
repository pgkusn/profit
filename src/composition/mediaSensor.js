import { reactive } from 'vue';

export const screens = reactive({
    sm: null,
    md: null,
    xl: null
});

export const useMediaSensor = () => {
    const mediaSensor = ({ width, size }) => {
        const screenTest = e => (screens[size] = e.matches);
        const mqList = window.matchMedia(`(min-width: ${width}px)`);
        mqList.addListener(screenTest);
        screenTest(mqList);
    };

    mediaSensor({ width: 576, size: 'sm' });
    mediaSensor({ width: 768, size: 'md' });
    mediaSensor({ width: 1200, size: 'xl' });
};