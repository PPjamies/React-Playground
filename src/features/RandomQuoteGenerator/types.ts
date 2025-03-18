export interface Quote {
    content: string;
    author: string;
}

export interface QuoteCardProps {
    quote: Quote;
    onNewQuote: () => void;
    isLoading: boolean;
}