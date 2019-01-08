/**
 * Theme for styled-components
 *
 * @interface ThemeShape
 */
interface ThemeShape {
  green: string;
  blue: string;
  skyBlue: string;
  grey: string;
  textColor: string;
}

const Theme: ThemeInterface = {
  green: '#03a87c',
  blue: '#06f',
  skyBlue: '#09f',
  grey: '#454545',
  textColor: 'rgba(0, 0, 0, 0.76)',
};

export interface ThemeInterface extends ThemeShape {}
export default Theme;
