import { DefaultTheme } from 'react-native-paper';
import AppColors from './AppColors';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: AppColors.primary,
    secondary: AppColors.secondary,
    text: AppColors.black,
    background: AppColors.background,
    white: AppColors.white,
    title: AppColors.title,
    subTitle: AppColors.subTitle,
    dark: AppColors.dark,
  },
};

export default theme;
