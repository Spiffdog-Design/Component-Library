// based on Feather v4.24.1:  https://feathericons.com/
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

const getIconDefinitions = (icons) => {
    return Object.keys(icons).reduce((acc, key) => {
        const icon = icons[key];
        if (icon.iconName != 'font-awesome-logo-full') {
            acc[icon.iconName.replace(/-/g, '_')] = icon;
        }
        return acc;
    }, {});
}

export const IconSizes = Object.freeze({
    xs: 'xs',
    sm: 'sm',
    md: null,
    lg: 'lg',
    x2: '2x',
    x3: '3x',
    x4: '4x',
    x5: '5x',
    x6: '6x',
    x7: '7x',
    x8: '8x',
    x9: '9x',
    x10: '10x',
});

export const IconTypes = Object.freeze({
    solid: getIconDefinitions(fas),
    regular: getIconDefinitions(far),
});

const Icon = ({ icon, title, size = IconSizes.md }) => (
    <FontAwesomeIcon icon={icon} title={title} size={size} />
);
export default Icon;
