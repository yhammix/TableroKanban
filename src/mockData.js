import {v4 as uuidv4} from "uuid"

const mockData= [
    {
        id: uuidv4(),
        title: "📋Por hacer",
        task: [
            {
                id: uuidv4(),
                title: "Inscribirse al curso de JS"
            },
            {
                id: uuidv4(),
                title: "Inscribirse al curso de HTML + CSS"
            },
            {
                id: uuidv4(),
                title: "Inscribirse al curso de React"
            },
        ]
        
    },
    {
        id: uuidv4(),
        title: "✍️En Progreso",
        task: [
            {
                id: uuidv4(),
                title: "Curso JS"
            },
            {
                id: uuidv4(),
                title: "Curso React"
            },
            
        ]
          
    },
    {
        id: uuidv4(),
        title: "✔️Completado",
        task: [
            {
                id: uuidv4(),
                title: "Curso HTML"
            },
            
        ]
        
    }
];
export default mockData;