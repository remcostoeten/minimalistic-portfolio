
import { NewCategory } from "./NewCategory";
import { NewItemInCategory } from "./NewItemInCategory";
import { CategoriesList } from "./DisplayCategory";
import { ItemsInCategory } from "./DisplayItemInCategory";
export default function Page() {
    return (
        <div className="flex flex-col items-start space-y-12 px-8 py-12">
            <NewItemInCategory className="flex flex-col gap-2" />
            <CategoriesList />
            <NewCategory />
            <ItemsInCategory />
        </div>
    )
}