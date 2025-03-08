import {AbstractService} from "./AbstractService";
import {Category} from "../model/Category";
import store from "../store/store";
import {Actions} from "../actions/actions";

const ALL_CATEGORIES_ENDPOINT = '/categories/all'
const ADD_CATEGORY_ENDPOINT = '/categories/new'

export class CategoryService extends AbstractService {

    public static getCategories() {
        return this.get<any, Category[]>(ALL_CATEGORIES_ENDPOINT)
            .then(response => {
                store.dispatch({
                    type: Actions.ADD_CATEGORIES,
                    payload: response.data
                })
            })
    }

    public static addCategory(category: Category) {
        return this.post<Category, any>(ADD_CATEGORY_ENDPOINT, category);
    }
}