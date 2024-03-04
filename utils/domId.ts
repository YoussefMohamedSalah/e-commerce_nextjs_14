export const makeTitleToDOMId = (title: string) => {
    return title.toLowerCase().split(' ').join('_');
};