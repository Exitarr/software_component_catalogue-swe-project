import { db } from '../lib/db.js'

const createComponentService = async ({ payload }) => {
    const { name , lang, framework , paid , price , content } = payload;
    const result = await db.component.create({
        data : {
            name,
            lang,
            framework,
            paid,
            price,
            content
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
            paid : paid || undefined,
            framework : framework || undefined
        }
    })
    
    return components;

}


export { createComponentService , getAllComponentsService , getComponentsOnrequestService }