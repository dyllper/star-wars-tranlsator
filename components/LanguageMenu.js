import LanguageButton from '@components/LanguageButton';

export default function LanguageMenu({setSelectedLanguage}) {
  const languages = [
    'Yoda',
    'Sith',
    'Cheunh',
    'Gungan',
    'Mandalorian',
    'Huttese'
  ];

  const onButtonClick = (language) => {
    setSelectedLanguage(language);

    const translationOptions = Array.from(document.getElementsByClassName('language-btn'));

    translationOptions.forEach(option => option.classList.remove('selected'));

    const selectedLanguageBtn = document.getElementById(`${language}btn`);
    selectedLanguageBtn.classList.add('selected');
  }

  return (
    <section className='language-menu'>
      <div className='btn-grid'>
        {languages.map((language, index) => (
          <LanguageButton
            language={language}
            clickHandler={onButtonClick}
            key={index}
          />
        ))}
      </div>
      <style jsx>{`
        .language-menu {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 3rem;
        
          .btn-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 1rem;
            row-gap: 2rem;
          }
        }
        
        @media (min-width: 480px) {
          .language-menu  {
            margin-bottom: 5rem;
        
            .btn-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              column-gap: 2rem;
              row-gap: 3rem;
            }
          }
        }
      `}</style>
    </section>
  )
}