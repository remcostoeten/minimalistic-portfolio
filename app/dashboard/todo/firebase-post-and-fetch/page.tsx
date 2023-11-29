import { NewCategory } from "./NewCategory";
import { NewItemInCategory } from "./NewItemInCategory";
import { CategoriesList } from "./DisplayCategory";

export default function Page() {
    return (
        <>
            <div className="bg-black px-8 py-12 rounded-sm drop-shadow-sm w-screen ">
                <div className="container">
                <h1>Add New Category</h1>
                <NewCategory />

                <h1>Add New Item in Category</h1>
                <NewItemInCategory />

                <h1>Display Categories and Items</h1>
                <CategoriesList /></div>
            </div>
        </>
    );
}