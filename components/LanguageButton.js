export default function LanguageButton({ language, clickHandler }) {
  return (
    <>
      <button
        id={`${language}btn`}
        className="language-btn"
        onClick={() => clickHandler(language)}
      >
        {language}
      </button>
      <style jsx>{`
        .language-btn {
          font-size: 1.5rem;
          color: #fff;
          background-color: #0078a0;
          padding: 1rem 1.5rem;
        }

        .selected {
          background-color: #05bdff;
          -moz-box-shadow: inset 0 0 10px #fff;
          -webkit-box-shadow: inset 0 0 10px #fff;
          box-shadow: inset 0 0 10px #fff;
        }

        @media (min-width: 375px) {
          .language-btn {
            font-size: 2rem;
          }
        }

        @media (min-width: 480px) {
          .language-btn {
            font-size: 2.4rem;
            padding: 2rem 4rem;
            border-top-right-radius: 1.2rem;
            border-bottom-left-radius: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}
