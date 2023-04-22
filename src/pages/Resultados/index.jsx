import { useEffect, useState } from 'react'
import API from '../../API'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, Tooltip } from 'recharts';

const Resultados = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        API.from("poll")
            .select()
            .eq('poll', 1)
            .then((respuesta) => setData(respuesta.data))
    }, [])

    const question1Data = data.filter((row) => row.question === 1);
    const question1Totals = [
        {
            name: 'SI',
            value: question1Data.filter((row) => row.yes_no).length
        },
        {
            name: 'NO',
            value: question1Data.filter((row) => !row.yes_no).length
        }
    ];

    const question2Data = data.filter((row) => row.question === 2);
    const question2Totals = [
        {
            name: 'Franks',
            value: question2Data.filter((row) => row.option === 1).length
        },
        {
            name: 'Britons',
            value: question2Data.filter((row) => row.option === 2).length
        },
        {
            name: 'Goths',
            value: question2Data.filter((row) => row.option === 3).length
        },
        {
            name: 'Lithuanians',
            value: question2Data.filter((row) => row.option === 4).length
        }
    ];

    return (<section>
        <article>
            <h2>¿Jugas al Age of Empires?</h2>
            <PieChart width={600} height={600}>
                <Pie
                    data={question1Totals}
                    dataKey="value"
                    nameKey="name"
                    fill="#8884d8"
                    label={({ name, percent }) =>
                        `${name}: ${Math.round(percent * 100)}%`
                    }
                >
                    <Cell fill='blue' />
                    <Cell fill='red' />
                </Pie>

            </PieChart>
        </article>
        <article>
            <h2>Civ Favorita</h2>
            <BarChart width={400} height={400}
            data={question2Totals}
            >
                <Tooltip/>
                <XAxis dataKey='name'/>
                <Bar
                    dataKey="value"
                    nameKey="name"
                    fill="#8884d8"
                >
                </Bar>
            </BarChart>
        </article>
    </section>)
}

export default Resultados