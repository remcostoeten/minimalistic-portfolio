import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

export default function CardShell() {
    return (
        <>
            <CardHeader button="Some button" title="some title" />
            <CardBody />
            <CardFooter href="/some/path" />
        </>
    )
}