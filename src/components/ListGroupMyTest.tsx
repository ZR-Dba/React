
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import EditModal from "./EditModal";

interface Country {
    data: string[]
}


function ListGroupMyTest({ data }: Country) {


    const editStyle: React.CSSProperties = {
        width: "15px"
    };

    const onMouseOverHandler = (e: any) => {
        e.target.style.cursor = "pointer"
    }

    const onClick = (e: any) => {

    }

    return (
        <>
            <table className="table m-3">
                <thead>
                    <tr className="table-light">
                        <th scope="col">ردیف</th>
                        <th scope="col">نام کشور</th>
                        <th scope="col">کد ایزو</th>
                        <th scope="col">پرچم</th>
                        <th scope="col">ابزار</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: any, index: number) =>
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.isoCode}</td>
                            <td>{item.flag}</td>
                            {/* <td><FontAwesomeIcon icon={faCoffee} /></td> */}
                            <td data-bs-toggle="modal" data-bs-target="#showModal" onClick={onClick}>
                                <img onMouseOver={onMouseOverHandler} style={editStyle} src="../media/edit.png" />
                            </td>
                        </tr>)}
                </tbody>
            </table>

            <EditModal />
        </>

    )
}

export default ListGroupMyTest;