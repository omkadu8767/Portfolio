import { Spinner } from "./Spinner";

export const SpinnerOverlay = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/40 backdrop-blur-sm">
        <Spinner />
    </div>
);