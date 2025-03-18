import React from 'react';
import {IconButtonProps} from './types';

const IconButton: React.FC<IconButtonProps> = ({Icon, onClick, styles = 'h-6 w-6'}) => {
    return (
        <Icon
            onClick={onClick}
            className={`${styles} cursor-pointer`}
        />
    );
};

export default IconButton;