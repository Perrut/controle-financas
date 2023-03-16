import { useState } from "react";
import Expend from "../../types/expend";
import ExpendInput, { ExpendInputConfig } from "../expend-input/expend-input";
import './expend-form.css';

export default function ExpendForm() {
    const [compra, setCompra] = useState('');
    const [ordem, setOrdem] = useState('');
    const [acertado, setAcertado] = useState('');
    const [valor, setValor] = useState('');
    const [fonte, setFonte] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [cota, setCota] = useState('');
    const [valorQueEuPago, setValorQueEuPago] = useState('');
    const [data, setData] = useState('');

    const formFields: {
        compra: ExpendInputConfig,
        ordem: ExpendInputConfig,
        acertado: ExpendInputConfig,
        valor: ExpendInputConfig,
        fonte: ExpendInputConfig,
        responsavel: ExpendInputConfig,
        cota: ExpendInputConfig,
        valorQueEuPago: ExpendInputConfig,
        data: ExpendInputConfig,
    } = {
        compra: { inputName: "compra", inputType: "text", labelValue: "Compra", inputValue: compra, onChange: setCompra },
        ordem: { inputName: "ordem", inputType: "text", labelValue: "Ordem", inputValue: ordem, onChange: setOrdem },
        acertado: { inputName: "acertado", inputType: "text", labelValue: "Acertado", inputValue: acertado, onChange: setAcertado },
        valor: { inputName: "valor", inputType: "text", labelValue: "Valor", inputValue: valor, onChange: setValor },
        fonte: { inputName: "fonte", inputType: "text", labelValue: "Fonte", inputValue: fonte, onChange: setFonte },
        responsavel: { inputName: "responsavel", inputType: "text", labelValue: "Responsável", inputValue: responsavel, onChange: setResponsavel },
        cota: { inputName: "cota", inputType: "text", labelValue: "Cota", inputValue: cota, onChange: setCota },
        valorQueEuPago: { inputName: "valorQueEuPago", inputType: "text", labelValue: "Valor que eu pago", inputValue: valorQueEuPago, onChange: setValorQueEuPago },
        data: { inputName: "data", inputType: "text", labelValue: "Data", inputValue: data, onChange: setData },
    };

    function submitForm(event: React.FormEvent) {
        event.preventDefault();
        const formData: Expend = {
            acertado: formFields.acertado.inputValue,
            compra: formFields.compra.inputValue,
            cota: formFields.cota.inputValue,
            data: formFields.data.inputValue,
            fonte: formFields.fonte.inputValue,
            ordem: formFields.ordem.inputValue,
            responsavel: formFields.responsavel.inputValue,
            valor: formFields.valor.inputValue,
            valorQueEuPago: formFields.valorQueEuPago.inputValue,
        };
    }

    return (
        <form onSubmit={submitForm}>
            {
                Object.values(formFields).map((formField, index) => {
                    return (
                        <ExpendInput
                            key={index}
                            inputName={formField.inputName}
                            inputType={formField.inputType}
                            labelValue={formField.labelValue}
                            inputValue={formField.inputValue}
                            onChange={formField.onChange} />);
                })
            }
            <input type="submit" value="Submit" />
        </form>
    );
}