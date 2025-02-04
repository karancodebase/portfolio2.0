"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, JSX } from "react";
import { MultiStepLoader as Loader } from "../components/ui/multi-step-loader";

interface LoadingState {
    text: string;
}

const loadingStates: LoadingState[] = [
    { text: "Booting up the full-stack engine..." },
    { text: "Optimizing the UI for pixel-perfect precision..." },
    { text: "Fetching data... decentralizing control..." },
    { text: "Finalizing UI/UX... delight loading." },
    { text: "Code’s ready. Are you?" },
];

export function LoaderAnimation(): JSX.Element {
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            router.push("/");
        }, 7500);

        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    if (!loading) return <></>; // ✅ Fix: Use Fragment instead of returning null

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Loader loadingStates={loadingStates} loading={loading} duration={1500} />
        </div>
    );
}


export default LoaderAnimation;
