interface ThemeShape {
  green: string;
}

const Theme: ThemeInterface = {
  green: '#03a87c',
};

export interface ThemeInterface extends ThemeShape {}
export default Theme;
