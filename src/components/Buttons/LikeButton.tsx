import React, {useState} from 'react';
import {LikeButtonProps} from './types';
import IconButton from './IconButton';
import {HeartIcon as SolidHeartIcon} from '@heroicons/react/24/solid';
import {HeartIcon as OutlineHeartIcon} from '@heroicons/react/24/outline';

const LikeButton: React.FC<LikeButtonProps> = ({initialCount = 0}) => {
    const [count, setCount] = useState(initialCount);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='flex gap-2'>
            {!isHovered ? (
                <IconButton Icon={OutlineHeartIcon}
                            onClick={() => setCount(count + 1)}
                            styles='h-8 w-8 text-black transition-all duration-200'
                />
            ) : (
                <IconButton Icon={SolidHeartIcon}
                            onClick={() => setCount(count + 1)}
                            styles='h-9 w-9 scale-110 text-red-500'
                />
            )}
            <div>{count}</div>
        </div>
    );
};

export default LikeButton;