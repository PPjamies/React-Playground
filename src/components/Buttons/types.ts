import React from "react";

export interface IconButtonProps {
    Icon: React.ElementType;
    onClick: () => void;
    styles?: string;
}

export interface LikeButtonProps {
    initialCount?: number
}