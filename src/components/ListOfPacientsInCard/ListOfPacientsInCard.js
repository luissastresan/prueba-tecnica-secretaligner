import React from 'react'

import Pagination from '../Pagination/Pagination'
import PacientCard from '../PacientCard/PacientCard'

import './ListOfPacientsInCard.css'

const ListOfPacientsInCard = ({ data, numberOfElementInPagination }) => {
    return (
            <>
                {
                    data.length !== 0 ?
                        <Pagination
                            data={data}
                            RenderComponent={PacientCard}
                            title="Posts"
                            pageLimit={5}
                            dataLimit={numberOfElementInPagination}
                            classCard={"true"}
                    /> : null
                }
            </>
    )
}

export default ListOfPacientsInCard