export function Spinner() {
    return (
        <div className="pswp__preloader__icn">
            <div className="pswp__preloader__cut">
                <div className="pswp__preloader__donut"></div>
            </div>
        </div>
    );
}

type SpinnerProps = {
    style?: React.CSSProperties;
    absolute?: boolean; // Add absolute prop
};

export default function MiniSpinner({
    style,
    absolute = false,
}: SpinnerProps) {
    return (
        <div
            style={style}
            className={`spinner-container ${absolute ? "absolute inset-0" : ""
                } grid place-items-center h-screen w-screen`}
        >
            <div className="spinner"></div>
        </div>
    );
}