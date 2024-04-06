
export const Info = ({ infoIcon, infoText, theInfo }) => {
    return (
        <div className="flex items-center gap-3">
            {infoIcon}
            <div>
                <p className="font-medium">{infoText}</p>
                <p className="text-sm">{theInfo}</p>
            </div>
        </div>
    );
};
