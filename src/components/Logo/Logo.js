import React from 'react';
import './Logo.css';

const Logo = (props) => {
    let logoModul = "logo_background";
    let logoTitle = "logo_title";
    if (props.logoPlaceholder === 'drawerMenu') {
        logoModul += ' logo_background_dark';
        logoTitle += ' logo_title_dark';
    }

	return (
		<div className="logo">
			<div className={logoModul}></div>
			<div className={logoTitle}>Sum all Cost</div>
		</div>
	);
};

export default Logo;
