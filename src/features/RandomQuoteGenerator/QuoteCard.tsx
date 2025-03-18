import React from 'react';
import {QuoteCardProps} from "./types";

const QuoteCard: React.FC<QuoteCardProps> = ({quote, onNewQuote, isLoading}) => {
    return (
        <div>
            {isLoading ? (
                <p className='text-gray-500'>Loading...</p>
            ) : (
                <>
                    <p className='text-lg font-semibold'>"{quote.content}"</p>
                    <p className='text-sm text-gray-600 mt-2'>- {quote.author}</p>
                    <button
                        onClick={onNewQuote}
                        className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>
                        Generate New Quote
                    </button>
                </>
            )}
        </div>
    );
};

export default QuoteCard;