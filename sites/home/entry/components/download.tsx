import React from 'react';
import { ISvgIcon } from './type';

export default function RightArrow({ className = '' }: ISvgIcon) {
    return (
        <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 16C1.77614 16 2 16.2238 2 16.5V18H16V16.5C16 16.2238 16.2239 16 16.5 16H17.5C17.7761 16 18 16.2238 18 16.5V19C18 19.5522 17.5523 20 17 20H1C0.447715 20 0 19.5522 0 19V16.5C0 16.2238 0.223858 16 0.5 16H1.5ZM8.50014 0.5H9.50014C9.75656 0.5 9.9679 0.69302 9.99678 0.941689L10.0001 1L10 12.0357L13.0106 9.02525C13.1909 8.84501 13.4745 8.83114 13.6706 8.98365L13.7177 9.02525L14.4248 9.73235C14.6051 9.9126 14.6189 10.1962 14.4664 10.3924L14.4248 10.4395L9.47508 15.3892C9.29484 15.5694 9.01122 15.5833 8.81507 15.4308L8.76797 15.3892L3.81822 10.4395C3.63798 10.2592 3.62412 9.9756 3.77663 9.77946L3.81822 9.73235L4.52533 9.02525C4.70557 8.84501 4.98919 8.83114 5.18533 8.98365L5.23244 9.02525L7.99964 11.7932L8.00014 1C8.00014 0.743582 8.19316 0.532246 8.44183 0.503364L8.50014 0.5H9.50014H8.50014Z"
                fill="currentColor"
            />
        </svg>
    );
}
