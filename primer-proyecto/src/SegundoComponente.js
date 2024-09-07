import react from 'react'

export const SegundoComponente = () =>{

    const libros= ["Harry potter","Hielo y fuego", "El señor de los anillos","La casa de piedra","El quijote",
        "La divina comedia"
    ]
    return (
    <div>
        <hr/>
        <h2>Lista de libros</h2>

        <ul>
            <li>{libros[0]}</li>
            <li>{libros[1]}</li>
        </ul>
        <hr/>

        <h2>Libros leidos:</h2>
        <ul>
            {
                libros.map((libro,indice)=>{
                    return <li key={indice}>{libro} </li>
                })
            }
        </ul>



    </div>
    )
}

