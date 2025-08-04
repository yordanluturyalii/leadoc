type SettingsSectionProps = {
    title: string;
    color?: "default" | "danger";
    description?: string;
    children?: React.ReactNode;
}

const SettingsSection = ({ title, color = "default", description, children }: SettingsSectionProps) => {
    return (
        <div className="w-full h-auto rounded-xl bg-neutral-100">
            <div className="w-full h-auto flex flex-col bg-neutral-100 p-3 lg:p-4 rounded-t-xl">
                <span className={`text-title-xxs font-semibold ${color === "danger" ? 'text-red-600' : 'text-neutral-900'}`}>{title}</span>
                <span className="text-body-md font-medium text-neutral-500">{description}</span>
            </div>
            <div className="flex flex-col w-full h-auto border border-neutral-200 bg-white rounded-xl shadow p-4">
                {children}
            </div>
        </div>
    )
}

export default SettingsSection