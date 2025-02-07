"use client";
import React from "react";
import { MultiStepLoader as Loader } from "../components/ui/multi-step-loader";

interface LoadingState {
    text: string;
}

const loadingStates: LoadingState[] = [
    { text: "Booting up the full-stack engine..." },
    { text: "Optimizing the UI for pixel-perfect precision..." },
    { text: "Fetching data... decentralizing control..." },
    { text: "Finalizing UI/UX... delight loading." },
    { text: "Code's ready. Are you?" },
];

export function LoaderAnimation({ isLoading }: { isLoading: boolean }): React.ReactElement {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Loader loadingStates={loadingStates} loading={isLoading} duration={1500} />
        </div>
    );
}

export default LoaderAnimation;
