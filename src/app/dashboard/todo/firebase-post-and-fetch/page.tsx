
import { NewCategory } from "./NewCategory";
import { NewItemInCategory } from "./NewItemInCategory";
import { CategoriesList } from "./DisplayCategory";
import DisplayItemInCategory from "./DisplayItemInCategory";

export default function Page() {
    return (
        <div className="flex flex-col items-start space-y-12 px-8 py-12">
            <div className="flex  items-start gap-4">
                <NewItemInCategory />
                <NewCategory />
            </div>
            <CategoriesList />
            <DisplayItemInCategory />
        </div>
    )
}