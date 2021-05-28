import React from 'react'

import Pagination from '../Pagination/Pagination'
import PacientRow from '../PacientRow/PacientRow'

import './ListOfPacientsInRow.css'

const ListOfPacientsInRow = ({data, numberOfElementInPagination}) => {
    return (
        <>
            {
                data.length !== 0 ?
                    <Pagination
                        data={data}
                        RenderComponent={PacientRow}
                        title="Posts"
                        pageLimit={5}
                        dataLimit={numberOfElementInPagination}
                        classCard={"false"}
                    /> : null
            }
        </>
    )
}

export default ListOfPacientsInRow