import React, { useEffect, useState } from 'react'

const Detail = ({ product_id, setProductName }) => {
    const [detail, setDetail] = useState({});

    useEffect(() => {
        if (product_id == 1) {
            var data = {
                id: 1,
                name: "Eco Glass"
            }
            setDetail(data)
            setProductName(data.name)
        } else if (product_id == 2) {
            var data = {
                id: 2,
                name: "Recycled Bottle"
            }
            setDetail(data)
            setProductName(data.name)
        }
    }, [product_id])

    return (
        <div>
            <p>detail</p>
        </div>
    )
}

export default Detail