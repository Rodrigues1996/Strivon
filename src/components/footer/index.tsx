export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#1A433E',
        padding: '20px 0',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 40,
      }}
    >
      <div
        style={{
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          fontSize: '14px',
          marginBottom: '10px',
        }}
      >
        <span>Contatos</span>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          marginBottom: '15px',
        }}
      >
        <a
          href="https://instagram.com/strivonlabs"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="..." fill="white" />
            </svg>
            <span style={{ color: 'white', fontSize: '14px' }}>@strivonlabs</span>
          </div>
        </a>

        <a href="mailto:strivonlabs@gmail.com" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="..." fill="white" />
            </svg>
            <span style={{ color: 'white', fontSize: '14px' }}>strivonlabs@gmail.com</span>
          </div>
        </a>

        <a
          href="https://wa.me/5581989248110"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="..." fill="white" />
            </svg>
            <span style={{ color: 'white', fontSize: '14px' }}>(81) 98924-8110</span>
          </div>
        </a>
      </div>

      <div
        style={{
          color: 'white',
          fontSize: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z"
            fill="white"
          />
        </svg>
        <span>2023 Strivon Labs. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
