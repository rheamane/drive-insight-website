const BenefitCard = ({
    title,
    description,
    icon,
    imgPath,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    imgPath: string;
}) => {
    return (
        // <div
        //     className="flex h-[500px] flex-1 flex-col justify-between gap-10 rounded-lg bg-orange-600 p-4"
        //     style={{
        //         backgroundImage: `url(${imgPath})`,
        //         backgroundSize: "cover",
        //         backgroundPosition: "center",
        //     }}>
        //     <div className={darkMode ? "text-slate-900" : "text-slate-200"}>
        //         {icon}
        //     </div>
        //     <div>
        //         <h1
        //             className={`font-medium ${darkMode ? "text-slate-900" : "text-slate-200"}`}>
        //             {title}
        //         </h1>
        //         <p
        //             className={`text-xs font-extralight ${darkMode ? "text-slate-900" : "text-slate-200"}`}>
        //             {description}
        //         </p>
        //     </div>
        // </div>
        <div>
            <div className="flex flex-col gap-2">
                <div className="flex w-full flex-row gap-4">
                    {icon}
                    <h3 className="font-semibold text-slate-200">{title}</h3>
                </div>
                <div>
                    <img src={imgPath} alt="image" />
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BenefitCard;
