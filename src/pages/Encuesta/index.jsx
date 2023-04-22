import API from '../../API'
import './styles.css'
import { useState, useEffect } from 'react'



const poll = 1

const Encuesta = () => {
    const[civs, setCivs] = useState([]);
    const[maps, setMaps] = useState([]);

    useEffect(()=>{fetch})
    return (
        <>
            <form id="poll" onSubmit={(e) => {
                e.preventDefault();

                const formdata = new FormData(e.target);
                const session = Math.round(Math.random() * 1000000000);

                const respuestas = [
                    {
                        session,
                        poll,
                        question: 1,
                        yes_no: formdata.get('yes_no') === 'on'
                    },
                    {
                        session,
                        poll,
                        question: 2,
                        option: formdata.get('option1')
                    },
                    {
                        session,
                        poll,
                        question: 3,
                        option: formdata.get('option2')
                    },
                    {
                        session,
                        poll,
                        question: 4,
                        answer: formdata.get('answer1')
                    },
                    {
                        session,
                        poll,
                        question: 5,
                        answer: formdata.get('answer2')
                    },
                    {
                        session,
                        poll,
                        question: 6,
                        score: formdata.get('score')
                    }
                ];
                console.log(respuestas)
                API.from('poll').insert(respuestas).then()
            }}>
                <div className="row check">
                    <label htmlFor="yes_no">¿Va el Anana en la pizza?</label>
                    <input type="checkbox" name="yes_no" id="yes_no" />
                </div>

                <div className="row">
                    <label htmlFor="option1">Favorite Civ</label>
                    <select name="option1" id="option1">
                        <option value="1">Franks</option>
                        <option value="2">Britons</option>
                        <option value="3">Goths</option>
                        <option value="4">Lithuanians</option>
                    </select>
                </div>

                <fieldset className='row'>
                    <legend>Mejor Gustazo de Helado</legend>
                    <div>
                        <label htmlFor="option2-1">¿Mejor sabor de helado?</label>
                        <input type="radio" name="option2" id="option2-1" value="1" />
                    </div>
                    <div>
                        <label htmlFor="option2-2">¿Mejor sabor de helado?</label>
                        <input type="radio" name="option2" id="option2-2" value="2" />
                    </div>
                    <div>
                        <label htmlFor="option2-3">¿Mejor sabor de helado?</label>
                        <input type="radio" name="option2" id="option2-3" value="3" />
                    </div>
                </fieldset>

                <div className="row">
                    <label htmlFor="answer1">¿Mejor sabor de helado?</label>
                    <input type="text" name="answer1" id="answer1" />
                </div>

                <div className="row">
                    <label htmlFor="answer2">¿Mejor sabor de helado?</label>
                    <textarea name="answer2" id="answer2" cols="30" rows="10"></textarea>
                </div>

                <div className="row">
                    <label htmlFor="score">¿Mejor sabor de helado?</label>
                    <input type="range" name="score" id="score" min="0" max="5" />
                </div>

                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Encuesta;