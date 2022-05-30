import { createContext, ReactNode, useContext, useState } from "react";


interface ILoading {
    isLoaded: boolean;
    pageLoads: () => void;
    closeLoading: boolean;
    handleCloseLoading: () => void;
}

interface ILoadingProviderProps {
    children: ReactNode;
}

export const LoadingContext = createContext({} as ILoading);

export function LoadingProvider({ children }: ILoadingProviderProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [closeLoading, setCloseLoading] = useState(false);
    let pagesLoaded = 0;

    const pageLoads = () => {
        pagesLoaded++;
        setIsLoaded(true);
        console.log(`${pagesLoaded} tudo carregado`);
    }

    const handleCloseLoading = () => {
        console.log('Foi chamado');
        setCloseLoading(true);
    }

    return (
        <LoadingContext.Provider value={{ isLoaded, pageLoads, closeLoading, handleCloseLoading }}>
            {children}
        </LoadingContext.Provider>
    );
}

export function useLoading(): ILoading {
    const context = useContext(LoadingContext);

    return context;
}
