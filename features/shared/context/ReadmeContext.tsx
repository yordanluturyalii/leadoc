'use client'

import React, { createContext, useContext, useState } from 'react';
import { useParams } from 'next/navigation';
import { useDraggable } from '@/features/shared/hooks/useDraggable';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/features/shared';

const generateReadme = async (data: any[], repo: string) => {
    const response = await api.post(`/api/user/repositories/${repo}`, {
        section: data
    }, {
        timeout: 120000
    });
    return response.data;
}

interface ReadmeContextType {
    generatedContent: string;
    isLoading: boolean;
    handleGenerate: () => void;
    canGenerate: boolean;
}

const ReadmeContext = createContext<ReadmeContextType | undefined>(undefined);

export const ReadmeProvider = ({ children }: { children: React.ReactNode }) => {
    const params = useParams();
    const queryClient = useQueryClient();
    const [generatedContent, setGeneratedContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const draggableItem = useDraggable((state) => state.data);

    const mutation = useMutation({
        mutationFn: (data: any[]) => generateReadme(data, params.name as string),
        onMutate: () => {
            setIsLoading(true);
        },
        onSuccess: (data) => {
            console.log('README generated:', data);
            setGeneratedContent(data.data?.content || '');
            setIsLoading(false);

            if (data.user || data.data?.user) {
                queryClient.setQueryData(['me'], (old: any) => ({
                    ...old,
                    data: {
                        ...old?.data,
                        user: data.user || data.data.user
                    }
                }));
            } else {
                queryClient.invalidateQueries({ queryKey: ['me'] });
            }
        },
        onError: (error) => {
            console.log('Error generating README:', error);
            setIsLoading(false);
        },
    });

    const handleGenerate = () => {
        if (draggableItem && draggableItem.length > 0) {
            mutation.mutate(draggableItem);
        }
    };

    const canGenerate = !!(draggableItem && draggableItem.length > 0 && !mutation.isPending && !isLoading);

    const value = {
        generatedContent,
        isLoading,
        handleGenerate,
        canGenerate
    };

    return (
        <ReadmeContext.Provider value={value}>
            {children}
        </ReadmeContext.Provider>
    );
};

export const useReadmeContext = () => {
    const context = useContext(ReadmeContext);
    if (context === undefined) {
        throw new Error('useReadmeContext must be used within a ReadmeProvider');
    }
    return context;
};