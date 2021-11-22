import TableHeader from "./TableHeader/TableHeader";
import TableBody from "./TableBody/TableBody";



const Table = ({columns, headers, }) => {
    return (
        <table>
            <TableHeader />
            <TableBody />
        </table>
    )
}

export default Table;