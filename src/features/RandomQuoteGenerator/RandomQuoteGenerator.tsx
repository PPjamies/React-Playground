import React, {useCallback, useEffect, useState} from 'react';
import QuoteCard from "./QuoteCard";
import {Quote} from "./types";

const RandomQuoteGenerator = () => {
    const [quote, setQuote] = useState<Quote>({
        content: '',
        author: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const fetchQuote = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            setQuote({...quote, content: data.content, author: data.author});
        } catch (error) {
            console.error('Error fetching quote:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchQuote();
    }, [fetchQuote])

    return (
        <div className='flex justify-center items-center bg-gray-300'>
            <QuoteCard
                quote={quote}
                onNewQuote={fetchQuote}
                isLoading={isLoading}
            />
        </div>
    );
};

export default RandomQuoteGenerator;