import React from 'react';
import { Icon} from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert"
const Header = () => {
    return (
        <header className="header">
            <Icon icon={locationIcon} className="header-icon" />
            <h2>Wildfire Tracker (powered by NASA)</h2>
        </header>
    );
};

export default Header;
