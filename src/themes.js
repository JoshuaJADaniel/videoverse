const commonTheme = {
    primaryColor: '#e60023',
    sidebarWidth: '230px'
}

const lightTheme = {
    ...commonTheme,
    fontColor: '#000000',
    fontColorMuted: '#888888',
    fontColorNeutral: '#444444',
    background: {
        level1: '#eeeeee',
        level2: '#dddddd',
        level3: '#cccccc'
    }
};

const darkTheme = {
    ...commonTheme,
    fontColor: '#ffffff',
    fontColorMuted: '#888888',
    fontColorNeutral: '#bbbbbb',
    background: {
        level1: '#111111',
        level2: '#222222',
        level3: '#333333'
    }
};

export { lightTheme, darkTheme };
