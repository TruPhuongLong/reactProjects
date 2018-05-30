import { typeAction } from './type-action';
import cuid from 'cuid';

export const addAction = (title, color) => {
    return {
        type: typeAction.ADD,
        payload: {
            id: cuid(),
            title,
            color,
        }
    }
}

export const removeAction = (item) => {
    return {
        type: typeAction.REMOVE,
        id: item.id,
    }
}