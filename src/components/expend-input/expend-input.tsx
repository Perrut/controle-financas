import './expend-input.css';

export type ExpendInputConfig = {
    inputName: string;
    inputType: string;
    labelValue: string;
    inputValue: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
};

export default function ExpendInput(inputConfig: ExpendInputConfig) {
    return (
        <div className="expend-input">
            <label htmlFor={inputConfig.inputName}>{inputConfig.labelValue}</label>
            <input
                type={inputConfig.inputType}
                id={inputConfig.inputName}
                name={inputConfig.inputName}
                value={inputConfig.inputValue}
                onChange={(event) => inputConfig.onChange(event.target.value)}>
            </input>
        </div>
    );
}
