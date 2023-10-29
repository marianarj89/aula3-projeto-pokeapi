import React from 'react';
import * as footerStyles from './footer.module.css';

export default function Footer(props) {
    return (
        <footer className={footerStyles.footer}>
            <p className={footerStyles.p}>© Copyright 2023 - Mini Projeto Aula 3 | Mariana Sá Ribas</p>
        </footer>
    );
}