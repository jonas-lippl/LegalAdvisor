import styles from './LanguageButton.module.css';

interface ILanguageButtonProps {
  currentLanguage: 'EN' | 'DE';
  changeLanguage: () => void;
}

export const LanguageButton = (props: ILanguageButtonProps) => {
  return (
    <button
      className={`
        ${styles.languageButton}
        ${props.currentLanguage === 'EN' ? styles.germanFlag : styles.ukFlag}
      `}
      onClick={props.changeLanguage}
    ></button>
  );
};
