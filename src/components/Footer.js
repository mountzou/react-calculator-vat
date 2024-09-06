import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer bg-light py-3">
      <Container className="text-center text-md-start text-black small">
        <span>&#169; 2024. Με επιφύλαξη παντός νόμιμου δικαιώματος. Η εφαρμογή σχεδιάστηκε και αναπτύχθηκε από τον Χρήστο Μουντζούρη.</span>
      </Container>
    </footer>
  );
}

export default Footer;
