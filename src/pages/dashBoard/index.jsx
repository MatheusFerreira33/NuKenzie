import "./styles.css";

import { useState } from "react";
import { Cards } from "../../components/cards";
import { ValueTotal } from "../../components/valueTotal";
import noCards from "../../assets/NoCard.svg";
import trash from "../../assets/trash.svg";
import logo2 from "../../assets/logo2.svg";

export function DashBoard({children}) {

    const [valueDescription, setNewValueDescription] = useState('');
    const [valueNumbers, setNewValueNumbers] = useState('');
    const [valueType, setNewValueType] = useState('');
    const [value, setValue] = useState([]);

    const getValues = () => {
        const datas = {
            description: valueDescription,
            value: valueNumbers,
            type: valueType || "Entrada"
        }

        setValue([...value, datas]);
    }

    const deleteCard = (e) => {
        value.splice(e, 1);
        setValue([...value]);
    }

    const addNumbers = (object)=>{
        
           const result1 =  Array.from(object).filter(element=>{
                if(element.type == "Entrada"){
                    return element
                }
            })
            const result2 =  Array.from(object).filter(element=>{
                if(element.type == "Saida"){
                    return element
                }
            })
            let entrada = result1.reduce((acc,valueAtual,)=>acc + parseInt(valueAtual.value),0);
            let saida = result2.reduce((acc,valueAtual,)=>acc + parseInt(valueAtual.value),0);

            const soma = entrada - saida;
            return soma;
    }

    return (
        <>
            <header>
                <img src={logo2} />
                {children}
            </header>

            <main>
                <section className="form">

                    <form>

                        <label htmlFor="description">Descrição</label>
                        <input type="text" name="description" id="description" placeholder="Digite aqui sua descrição" onChange={(event) => setNewValueDescription(event.target.value)} />
                        <span>Ex: Compra de roupas</span>

                        <div className="containerBox">
                            <div className="box1">
                                <label htmlFor="numbers">Valor</label>
                                <input type="number" name="numbers" id="numbers" placeholder="1" onChange={(event) => setNewValueNumbers(event.target.value)} />

                            </div>
                            <div className="box2">
                                <label htmlFor="tipo">Tipo de Valor</label>
                                <select name="tipo" id="tipo" onChange={(event) => setNewValueType(event.target.value)}>
                                    <option value="Entrada">Entrada</option>
                                    <option value="Saida">Saida</option>

                                </select>

                            </div>
                        </div>
                        <button type="submit" onClick={(e) => [e.preventDefault(), getValues()]}>Inserir valor</button>
                    </form>

                {value.length == 0 ? (
                    <>
                        
                    </>
                ) : (
                    <>
                        <ValueTotal name={addNumbers(value)}/>             
                    </>
                )
                }
                </section>
                <section className="resumeFinance">
                    <ul>
                        <h1>Resumo financeiro</h1>
                        {value.length == 0 ? (
                            <>
                                <h1>Você ainda não possui nenhum lançamento</h1>
                                <img src={noCards}/>
                                <img src={noCards}/>
                                <img src={noCards}/>
                            </>
                        ) : (
                            value.map(((element, index) => {
                                return (
                                    <Cards key={index} info={element}>
                                        <button id={index} onClick={(e) => deleteCard(e.target.id)}><img src={trash} id={index}/></button>
                                        
                                    </Cards>
                                )
                            }))
                        )}
                    </ul>
                </section>
            </main>

        </>
    )
}