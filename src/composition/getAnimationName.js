export default (type, index) => {
    const names = {
        gallery: ['fade-down', 'fade-right', 'fade-left', 'fade-down', 'fade-up', 'fade-left', '', 'fade-left', 'fade-up', 'fade-up'],
        blogCard: ['fade-right', 'fade-up', 'fade-left']
    };
    return names[type][index];
};