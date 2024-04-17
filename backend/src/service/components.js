import { db } from '../lib/db.js'

const getComponentbyIdservice  = async ({ payload }) =>{
    const { id } = payload;

    const component = await db.component.findUnique({
        where : {
            id : id
        }
    })

    return component
}

const createComponentService = async ({ payload }) => {
    const { name , lang, framework , paid , price , description , code } = payload;
    const result = await db.component.create({
        data : {
            name,
            lang,
            framework,
            paid,
            price,
            description ,
            code
        }
    })
    return "Component created successfully!";
}

const getAllComponentsService = async () => {
    const components = await db.component.findMany();
    return components;
}

const getComponentsOnrequestService = async ({ payload }) => {
    
    const { lang, framework , paid } = payload;

    const components = await db.component.findMany({
        where : {
            lang : lang || undefined,
            framework : framework || undefined,
            paid
        }
    })
    
    return components;
}

const updateComponentService = async ({ payload }) => {
    const {id , name , lang, framework , paid , price , description , code } = payload;
    
    
    const updatedComponent = await db.component.update({
        where : {
            id : id
        },
        data : {
            name,
            lang,
            framework,
            paid,
            price,
            description ,
            code
        }
    })

    return "Component updated successfully!";
}

const deleteComponentService = async ({ payload }) => {
    const { id } = payload;


    await db.component.delete({
        where : {
            id : id
        }
    })

    return "Component deleted successfully!";

}

const componentServices =  { createComponentService , getAllComponentsService , getComponentsOnrequestService , updateComponentService , getComponentbyIdservice  ,deleteComponentService }

export { componentServices };